<template>
  <div class="vuefinder" ref="root">
    <div :class="darkMode ? 'dark': ''">
      <div
          :class="fullScreen ? 'fixed w-screen inset-0 z-20' : 'relative rounded-md'"
          :style="!fullScreen ? 'max-height: ' + maxHeight : ''"
          class="flex flex-col text-gray-700 bg-white border select-none dark:bg-gray-800 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min"
          @mousedown="emitter.emit('vf-contextmenu-hide')" @touchstart="emitter.emit('vf-contextmenu-hide')">
        <v-f-toolbar v-if="toolbar" :data="fetchData" :toolbar-sets="toolbarSets" :hidden-toolbar-sets="hiddenToolbarSets" />
        <v-f-breadcrumb :data="fetchData"/>
        <v-f-explorer :view="view" :data="fetchData"/>
        <v-f-statusbar :data="fetchData"/>
      </div>

      <component v-if="modal.active" :is="'v-f-modal-'+ modal.type" :selection="modal.data" :current="fetchData"/>
      <v-f-context-menu :current="fetchData"/>
      <iframe id="download_frame" style="display:none;"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueFinder'
};
</script>

<script setup>
import {computed, defineProps, onMounted, provide, reactive, ref, watch} from 'vue';
import ajax from '../utils/ajax.js';
import mitt from 'mitt';
import {useStorage} from '../composables/useStorage.js';
import {useApiUrl} from '../composables/useApiUrl.js';
import VFToolbar from '../components/Toolbar.vue';
import VFExplorer from '../components/Explorer.vue';
import VFStatusbar from '../components/Statusbar.vue';
import VFBreadcrumb from '../components/Breadcrumb.vue';
import VFContextMenu from '../components/ContextMenu.vue';
import {useI18n} from '../composables/useI18n.js';

const props = defineProps({
  url: {
    type: [String],
  },
  id: {
    type: String,
    default: 'vf'
  },
  dark: {
    type: Boolean,
    default: false
  },
  usePropDarkMode: {
      type: Boolean,
      default: false
  },
  locale: {
      type: String,
      default: 'en'
  },
  maxHeight: {
    type: String,
    default: '600px'
  },
  maxFileSize: {
    type: String,
    default: '10mb'
  },
  postData: {
    type: Object,
    default: {}
  },
  toolbarSets: {
    type: Array,
  },
  hiddenToolbarSets: {
    type: Array,
  },
  toolbar: {
    type: Boolean,
    default: true
  }
});
const emitter = mitt();
const {setStore, getStore} = useStorage(props.id);
const adapter =ref(getStore('adapter'));
const emit = defineEmits(['select'])

/** @type import('vue').Ref<HTMLDivElement> */
const root = ref(null);
provide('root', root);
provide('emitter', emitter);
provide('storage', useStorage(props.id));
provide('postData', props.postData);
provide('adapter', adapter);
provide('maxFileSize', props.maxFileSize);
provide('usePropDarkMode', props.usePropDarkMode);
// use reactive instead of ref to be able to use one object for all components

// Lang Management
const i18n = useI18n(props.id, props.locale, emitter);
const {t} = i18n;
provide('i18n', i18n);

const {apiUrl, setApiUrl} = useApiUrl();
setApiUrl(props.url);

const fetchData = reactive({adapter: adapter.value, storages: [], dirname: '.', files: []});

// View Management
const view = ref(getStore('viewport', 'grid'));
// dark mode
const darkMode = props.usePropDarkMode ? computed(() => props.dark) : ref(getStore('darkMode', props.dark));
provide('darkMode', darkMode);

emitter.on('vf-darkMode-toggle', () => {
  darkMode.value = !darkMode.value;
  setStore('darkMode', darkMode.value);
});

// unit switcher (for example: GB vs GiB)
const metricUnits = ref(getStore('metricUnits', false));
provide('metricUnits', metricUnits);
import { format as filesizeDefault, metricFormat as filesizeMetric } from './../utils/filesize.js'
const filesize = ref(metricUnits.value ?  filesizeMetric  : filesizeDefault)
watch(metricUnits, (value) => {
  filesize.value = value ?  filesizeMetric  : filesizeDefault
})
provide('filesize', filesize);

emitter.on('vf-metric-units-saved', (value) => {
  metricUnits.value = value;
  setStore('metricUnits', value);
});

const loadingState = ref(false);
provide('loadingState', loadingState);

const fullScreen = ref(getStore('full-screen', false));

emitter.on('vf-fullscreen-toggle', () => {
  fullScreen.value = !fullScreen.value;
  setStore('full-screen', fullScreen.value);
});

emitter.on('vf-view-toggle', (newView) => {
  view.value = newView;
});

// Modal Management
const modal = reactive({
  active: false,
  type: 'delete',
  data: {}
});

emitter.on('vf-modal-close', () => {
  modal.active = false;
});

emitter.on('vf-modal-show', (item) => {
  modal.active = true;
  modal.type = item.type;
  modal.data = item;
});

emitter.on('vf-select-file', (item) => {
  emit('select', item)
})

const updateItems = (data) => {
  emitter.emit('vf-nodes-selected', {});
  emitter.emit('vf-select-file', {});
  emitter.emit('vf-explorer-update');
};

const tmpFiles = ref([])
window.Echo.channel('channel-name').listen('.SendMessageToClientEvent',(e) => {
  console.log('channel>>>', e.message)
  if(e.message) {
    tmpFiles.value.push(e.message)
  }
})
if(window.Echo) {
}

const searchDone = ref(false)

watch(() => searchDone.value, (value) => {
  if(value === true) {
    fetchData.files = tmpFiles.value
    searchDone.value = false
    tmpFiles.value = []
  }
})
if(window.Echo) {
}

let controller;
emitter.on('vf-fetch-abort', () => {
  controller.abort();
  loadingState.value = false;
});

emitter.on('vf-fetch', ({params, onSuccess = null, onError = null, noCloseModal = false}) => {
  if (['index', 'search'].includes(params.q)) {
    if (controller) {
      controller.abort();
    }
    loadingState.value = true;
  }

  controller = new AbortController();
  const signal = controller.signal;
  ajax(apiUrl.value, {params, signal})
      .then(data => {
        adapter.value = data.adapter;
        if (['index', 'search'].includes(params.q)) {
          loadingState.value = false;
        }
        if (!noCloseModal) {
          emitter.emit('vf-modal-close');
        }

        data.files = data.files.filter(item => item.basename.charAt(0) != '.')
        updateItems(data);
        
        if(params.q === 'search') {
          
          searchDone.value = true
          onSuccess(data);
          if(!window.Echo) {
          }
        }
        else{
          Object.assign(fetchData, data);
          onSuccess(data);
        }
      })
      .catch((e) => {
        if (onError) {
          onError(e);
        }
      })
      .finally(() => {
      });
});

emitter.on('vf-download', (url) => {
  document.getElementById('download_frame').src = url;
  emitter.emit('vf-modal-close');
});

onMounted(() => {
  emitter.emit('vf-fetch', {params: {q: 'index', adapter: (adapter.value)}});
});

</script>
