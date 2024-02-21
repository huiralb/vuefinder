<template>
  <div class="wrapper">
    <vue-finder
      id='my_vuefinder'
      :max-file-size="maxFileSize"
      :url="url"
      :hidden-toolbar-sets="['archive', 'fullscreen']"
      @select="selectItem"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// import './utils/socket'
// CHANGE ME, Url for development server endpoint
const url = ref("http://localhost:8000/filemanager")
const maxFileSize = ref("500MB")

function selectItem(item){
  // console.log('item', item)
}

onMounted(() => {
  window.Echo.channel('channel-name').listen('.SendMessageToClientEvent',(e) => {
      console.log('Host2>>>', e.message)
  })
})

</script>

<style>
body {
  margin: 0;
  background: #eeeeee;
}
.wrapper {
  width: 800px;
  margin: 100px auto;
}
</style>
