import { ref as g, watch as ie, inject as x, openBlock as s, createElementBlock as u, unref as r, createCommentVNode as S, normalizeClass as T, Fragment as H, createElementVNode as e, createTextVNode as U, toDisplayString as m, createVNode as G, TransitionGroup as Ae, withCtx as E, renderList as J, reactive as me, onMounted as K, onUpdated as Fe, onBeforeUnmount as De, withDirectives as P, vShow as ce, withModifiers as ee, nextTick as ge, isRef as ve, vModelSelect as Be, customRef as Ve, withKeys as ae, vModelText as ne, normalizeStyle as Oe, provide as Y, computed as Le, createBlock as N, resolveDynamicComponent as Ne, renderSlot as pe, onUnmounted as Ue, vModelCheckbox as ye } from "vue";
import Te from "mitt";
import He from "dragselect";
import Ie from "vanilla-lazyload";
import "cropperjs/dist/cropper.css";
import qe from "cropperjs";
import Re from "@uppy/core";
import Pe from "@uppy/xhr-upload";
import "microtip/microtip.css";
var Se;
const he = (Se = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : Se.getAttribute("content"), fe = (l, { method: o = "get", params: n = {}, json: t = !0, signal: i = null }) => {
  const c = { method: o };
  if (c.signal = i, o == "get")
    l += "?" + new URLSearchParams(n);
  else {
    c.headers = {}, he && (c.headers["X-CSRF-Token"] = he);
    let a = new FormData();
    for (const [k, p] of Object.entries(n))
      a.append(k, p);
    c.body = a;
  }
  return fetch(l, c).then((a) => a.ok ? t ? a.json() : a.text() : a.json().then(Promise.reject.bind(Promise)));
};
function xe(l) {
  let o = localStorage.getItem(l + "_storage");
  const n = g(JSON.parse(o));
  ie(n, t);
  function t() {
    n.value === null || n.value === "" ? localStorage.removeItem(l + "_storage") : localStorage.setItem(l + "_storage", JSON.stringify(n.value));
  }
  function i(k, p) {
    n.value = Object.assign({ ...n.value }, { [k]: p });
  }
  function c() {
    n.value = null;
  }
  return { getStore: (k, p = null) => n.value === null || n.value === "" ? p : n.value.hasOwnProperty(k) ? n.value[k] : p, setStore: i, clearStore: c };
}
const $e = g("");
function Q() {
  function l(o) {
    $e.value = o;
  }
  return { apiUrl: $e, setApiUrl: l };
}
const Ye = { class: "flex items-center justify-between py-1 text-sm border-neutral-300" }, Ge = {
  key: 0,
  class: "flex py-1 text-center"
}, Je = ["aria-label"], Ke = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-4 h-4 m-auto cursor-pointer md:h-6 md:w-6 stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ e("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), We = [
  Ke
], Xe = ["aria-label"], Qe = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-4 h-4 m-auto cursor-pointer md:h-6 md:w-6 stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ e("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
  })
], -1), Ze = [
  Qe
], et = ["aria-label"], tt = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), ot = [
  tt
], st = ["aria-label"], at = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), nt = [
  at
], rt = ["aria-label"], lt = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-4 h-4 m-auto cursor-pointer md:h-6 md:w-6 stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ e("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  })
], -1), it = [
  lt
], dt = ["aria-label"], ct = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), ut = [
  ct
], mt = ["aria-label"], vt = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), pt = [
  vt
], ht = {
  key: 1,
  class: "flex text-center"
}, ft = { class: "pl-2" }, gt = { class: "px-2 py-1 text-xs bg-gray-200 rounded dark:bg-gray-700" }, kt = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, _t = /* @__PURE__ */ e("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), xt = /* @__PURE__ */ e("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), bt = [
  _t,
  xt
], wt = { class: "flex items-center justify-end text-center" }, yt = ["aria-label"], $t = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-6 h-6 m-auto cursor-pointer md:h-6 md:w-6 stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, Ct = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, Mt = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, jt = ["aria-label"], St = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, Dt = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, Ot = {
  name: "VFToolbar"
}, zt = /* @__PURE__ */ Object.assign(Ot, {
  props: {
    data: Object,
    toolbarSets: {
      type: Array,
      default: ["new_folder", "new_file", "rename", "delete", "upload", "archive", "fullscreen", "view"]
    },
    hiddenToolbarSets: {
      type: Array,
      default: []
    }
  },
  setup(l) {
    const o = x("emitter");
    x("usePropDarkMode");
    const { getStore: n, setStore: t } = x("storage"), { t: i } = x("i18n"), c = g(n("viewport", "grid")), a = g([]), k = g(n("full-screen", !1)), p = l, d = g("");
    function f(j) {
      return p.toolbarSets.includes(j);
    }
    function h(j) {
      return p.hiddenToolbarSets.includes(j);
    }
    o.on("vf-search-query", ({ newQuery: j }) => {
      d.value = j;
    });
    const w = x("loadingState"), D = () => w.value, L = () => {
      k.value = !k.value, o.emit("vf-fullscreen-toggle");
    };
    return o.on("vf-nodes-selected", (j) => {
      a.value = j;
    }), o.on("vf-view-toggle", (j) => {
      t("viewport", j), c.value = j;
    }), (j, M) => (s(), u("div", Ye, [
      d.value.length ? (s(), u("div", ht, [
        e("div", ft, [
          U(m(r(i)("Search results for")) + " ", 1),
          e("span", gt, m(d.value), 1)
        ]),
        D() ? (s(), u("svg", kt, bt)) : S("", !0)
      ])) : (s(), u("div", Ge, [
        f("new_folder") && !h("new_folder") ? (s(), u("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": r(i)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: M[0] || (M[0] = (C) => r(o).emit("vf-modal-show", { type: "new-folder", items: a.value }))
        }, We, 8, Je)) : S("", !0),
        f("new_file") && !h("new_file") ? (s(), u("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": r(i)("New File"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[1] || (M[1] = (C) => r(o).emit("vf-modal-show", { type: "new-file", items: a.value }))
        }, Ze, 8, Xe)) : S("", !0),
        f("rename") && !h("rename") ? (s(), u("div", {
          key: 2,
          class: "mx-1.5",
          "aria-label": r(i)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[2] || (M[2] = (C) => a.value.length != 1 || r(o).emit("vf-modal-show", { type: "rename", items: a.value }))
        }, [
          (s(), u("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: T([a.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "w-4 h-4 m-auto md:h-6 md:w-6"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, ot, 2))
        ], 8, et)) : S("", !0),
        f("delete") && !h("delete") ? (s(), u("div", {
          key: 3,
          class: "mx-1.5",
          "aria-label": r(i)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[3] || (M[3] = (C) => !a.value.length || r(o).emit("vf-modal-show", { type: "delete", items: a.value }))
        }, [
          (s(), u("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: T([a.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "w-4 h-4 m-auto md:h-6 md:w-6"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, nt, 2))
        ], 8, st)) : S("", !0),
        f("upload") && !h("upload") ? (s(), u("div", {
          key: 4,
          class: "mx-1.5",
          "aria-label": r(i)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[4] || (M[4] = (C) => r(o).emit("vf-modal-show", { type: "upload", items: a.value }))
        }, it, 8, rt)) : S("", !0),
        f("archive") && !h("archive") ? (s(), u(H, { key: 5 }, [
          a.value.length == 1 && a.value[0].mime_type == "application/zip" ? (s(), u("div", {
            key: 0,
            class: "mx-1.5",
            "aria-label": r(i)("Unarchive"),
            "data-microtip-position": "bottom",
            role: "tooltip",
            onClick: M[5] || (M[5] = (C) => !a.value.length || r(o).emit("vf-modal-show", { type: "unarchive", items: a.value }))
          }, [
            (s(), u("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: T([a.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "w-4 h-4 m-auto md:h-8 md:w-8"]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "none",
              "stroke-width": "1.5"
            }, ut, 2))
          ], 8, dt)) : (s(), u("div", {
            key: 1,
            class: "mx-1.5",
            "aria-label": r(i)("Archive"),
            "data-microtip-position": "bottom",
            role: "tooltip",
            onClick: M[6] || (M[6] = (C) => !a.value.length || r(o).emit("vf-modal-show", { type: "archive", items: a.value }))
          }, [
            (s(), u("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: T([a.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "w-4 h-4 m-auto md:h-6 md:w-6"]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "none",
              "stroke-width": "1.5"
            }, pt, 2))
          ], 8, mt))
        ], 64)) : S("", !0)
      ])),
      e("div", wt, [
        f("fullscreen") && !h("fullscreen") ? (s(), u("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": r(i)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: L
        }, [
          (s(), u("svg", $t, [
            k.value ? (s(), u("path", Ct)) : (s(), u("path", Mt))
          ]))
        ], 8, yt)) : S("", !0),
        f("view") && !h("view") ? (s(), u("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": r(i)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: M[7] || (M[7] = (C) => d.value.length || r(o).emit("vf-view-toggle", c.value == "list" ? "grid" : "list"))
        }, [
          (s(), u("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: T([d.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "w-6 h-6 m-auto md:h-6 md:w-6"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            c.value == "grid" ? (s(), u("path", St)) : S("", !0),
            c.value == "list" ? (s(), u("path", Dt)) : S("", !0)
          ], 2))
        ], 8, jt)) : S("", !0)
      ])
    ]));
  }
}), ze = (l, o = null) => new Date(l * 1e3).toLocaleString(o ?? navigator.language ?? "en-US"), Et = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, At = /* @__PURE__ */ e("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), Ft = [
  At
], Bt = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Vt = /* @__PURE__ */ e("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), Lt = [
  Vt
], Nt = {
  name: "VFSortIcon"
}, ue = /* @__PURE__ */ Object.assign(Nt, {
  props: { direction: String },
  setup(l) {
    return (o, n) => (s(), u("div", null, [
      l.direction == "down" ? (s(), u("svg", Et, Ft)) : S("", !0),
      l.direction == "up" ? (s(), u("svg", Bt, Lt)) : S("", !0)
    ]));
  }
}), Ut = ["onClick"], Tt = {
  name: "VFToast.vue"
}, Ht = /* @__PURE__ */ Object.assign(Tt, {
  setup(l) {
    const o = x("emitter"), { getStore: n } = x("storage"), t = g(n("full-screen", !1)), i = (p) => p == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", c = g([]), a = (p) => {
      c.value.splice(p, 1);
    }, k = (p) => {
      let d = c.value.findIndex((f) => f.id === p);
      d !== -1 && a(d);
    };
    return o.on("vf-toast-clear", () => {
      c.value = [];
    }), o.on("vf-toast-push", (p) => {
      let d = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      p.id = d, c.value.push(p), setTimeout(() => {
        k(d);
      }, 5e3);
    }), (p, d) => (s(), u("div", {
      class: T([t.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      G(Ae, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: E(() => [
          (s(!0), u(H, null, J(c.value, (f, h) => (s(), u("div", {
            onClick: (w) => a(h),
            key: f,
            class: T([i(f.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, m(f.label), 11, Ut))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), se = (l) => Object.entries(l).map((o) => o.map(encodeURIComponent).join("=")).join("&"), { apiUrl: It } = Q(), be = (l, o) => It.value + "?" + se({ q: "preview", adapter: l, path: o });
function we(l, o = 14) {
  let n = `((?=([\\w\\W]{0,${o}}))([\\w\\W]{8,})([\\w\\W]{8,}))`;
  return l.replace(new RegExp(n), "$2..$4");
}
const qt = { class: "relative flex flex-col flex-auto overflow-hidden" }, Rt = {
  key: 0,
  class: "grid grid-cols-12 text-xs border-b border-gray-200 select-none border-neutral-300 dark:border-gray-700"
}, Pt = { class: "absolute" }, Yt = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute z-10 w-6 h-6 m-auto md:h-12 md:w-12 stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ e("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), Gt = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, Jt = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], Kt = { class: "grid items-center grid-cols-12" }, Wt = { class: "flex items-center col-span-7" }, Xt = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-5 h-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Qt = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Zt = [
  Qt
], eo = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-5 h-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, to = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), oo = [
  to
], so = { class: "overflow-hidden overflow-ellipsis whitespace-nowrap" }, ao = { class: "col-span-5 overflow-hidden overflow-ellipsis whitespace-nowrap" }, no = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ro = { class: "grid items-center grid-cols-12" }, lo = { class: "flex items-center col-span-7" }, io = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-5 h-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, co = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), uo = [
  co
], mo = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-5 h-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, vo = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), po = [
  vo
], ho = { class: "overflow-hidden overflow-ellipsis whitespace-nowrap" }, fo = { class: "col-span-2 text-center" }, go = { class: "col-span-3 overflow-hidden overflow-ellipsis whitespace-nowrap" }, ko = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], _o = { class: "relative" }, xo = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-10 h-10 m-auto md:h-12 md:w-12 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, bo = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), wo = [
  bo
], yo = ["data-src", "alt"], $o = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-10 h-10 m-auto md:h-12 md:w-12 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Co = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Mo = [
  Co
], jo = {
  key: 3,
  class: "absolute hidden w-full text-center md:block top-1/2 text-neutral-500"
}, So = { class: "break-all" }, Do = {
  name: "VFExplorer"
}, Oo = /* @__PURE__ */ Object.assign(Do, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  emits: ["select"],
  setup(l, { emit: o }) {
    const n = l, t = x("emitter"), { setStore: i, getStore: c } = x("storage"), a = x("adapter"), k = (_) => _ == null ? void 0 : _.substring(0, 3), p = g(null), d = g(null), f = g(0), h = g(null), { t: w } = x("i18n"), D = Math.floor(Math.random() * 2 ** 32), L = g(c("full-screen", !1)), j = x("filesize");
    let M;
    t.on("vf-fullscreen-toggle", () => {
      p.value.style.height = null, L.value = !L.value, i("full-screen", L.value);
    });
    const C = g("");
    t.on("vf-search-query", ({ newQuery: _ }) => {
      C.value = _, _ ? t.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: n.data.adapter,
          path: n.data.dirname,
          filter: _
        },
        onSuccess: (b) => {
          b.files.length || t.emit("vf-toast-push", { label: w("No search result found.") });
        }
      }) : t.emit("vf-fetch", { params: { q: "index", adapter: n.data.adapter, path: n.data.dirname } });
    });
    let O = null;
    const y = () => {
      O && clearTimeout(O);
    }, A = g(!0), F = (_) => {
      _.touches.length > 1 && (A.value ? (h.value.stop(), t.emit("vf-toast-push", { label: w("Drag&Drop: off") })) : (h.value.start(), t.emit("vf-toast-push", { label: w("Drag&Drop: on") }), t.emit("vf-explorer-update")), A.value = !A.value);
    }, B = (_) => {
      O = setTimeout(() => {
        const b = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: _.target.getBoundingClientRect().x,
          clientY: _.target.getBoundingClientRect().y
        });
        _.target.dispatchEvent(b);
      }, 500);
    }, I = (_) => {
      _.type == "dir" ? (t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: n.data.adapter, path: _.path } })) : t.emit("vf-modal-show", { type: "preview", adapter: n.data.adapter, item: _ });
    }, V = me({ active: !1, column: "", order: "" }), oe = (_ = !0) => {
      let b = [...n.data.files], v = V.column, z = V.order == "asc" ? 1 : -1;
      if (!_)
        return b;
      const $ = (R, X) => typeof R == "string" && typeof X == "string" ? R.toLowerCase().localeCompare(X.toLowerCase()) : R < X ? -1 : R > X ? 1 : 0;
      return V.active && (b = b.slice().sort((R, X) => $(R[v], X[v]) * z)), b;
    }, te = (_) => {
      V.active && V.column == _ ? (V.active = V.order == "asc", V.column = _, V.order = "desc") : (V.active = !0, V.column = _, V.order = "asc");
    }, q = () => h.value.getSelection().map((_) => JSON.parse(_.dataset.item)), de = (_, b) => {
      if (_.altKey || _.ctrlKey || _.metaKey)
        return _.preventDefault(), !1;
      _.dataTransfer.setDragImage(d.value, 0, 15), _.dataTransfer.effectAllowed = "all", _.dataTransfer.dropEffect = "copy", _.dataTransfer.setData("items", JSON.stringify(q()));
    }, re = (_, b) => {
      _.preventDefault();
      let v = JSON.parse(_.dataTransfer.getData("items"));
      if (v.find((z) => z.storage != a.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      t.emit("vf-modal-show", { type: "move", items: { from: v, to: b } });
    }, le = (_, b) => {
      _.preventDefault(), !b || b.type !== "dir" || h.value.getSelection().find((v) => v == _.currentTarget) ? (_.dataTransfer.dropEffect = "none", _.dataTransfer.effectAllowed = "none") : _.dataTransfer.dropEffect = "copy";
    }, ke = () => {
      h.value = new He({
        area: p.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), t.on("vf-explorer-update", () => ge(() => {
        h.value.clearSelection(), h.value.setSettings({
          selectables: document.getElementsByClassName("vf-item-" + D)
        });
      })), h.value.subscribe("predragstart", ({ event: _, isDragging: b }) => {
        if (b)
          f.value = h.value.getSelection().length, h.value.break();
        else {
          const v = _.target.offsetWidth - _.offsetX, z = _.target.offsetHeight - _.offsetY;
          v < 15 && z < 15 && (h.value.clearSelection(), h.value.break());
        }
      }), h.value.subscribe("predragmove", ({ isDragging: _ }) => {
        _ && h.value.break();
      }), h.value.subscribe("callback", ({ items: _, event: b, isDragging: v }) => {
        t.emit("vf-nodes-selected", q()), f.value = h.value.getSelection().length;
      });
    };
    return K(() => {
      M = new Ie(p.value), ke();
    }), Fe(() => {
      h.value.Area.reset(), h.value.SelectorArea.updatePos(), M.update();
    }), K(() => {
      ie(() => n.view, () => t.emit("vf-explorer-update"));
    }), De(() => {
      M.destroy();
    }), (_, b) => (s(), u("div", qt, [
      l.view == "list" || C.value.length ? (s(), u("div", Rt, [
        e("div", {
          onClick: b[0] || (b[0] = (v) => te("basename")),
          class: "flex items-center col-span-7 py-1 pl-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10"
        }, [
          U(m(r(w)("Name")) + " ", 1),
          P(G(ue, {
            direction: V.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [ce, V.active && V.column == "basename"]
          ])
        ]),
        C.value.length ? S("", !0) : (s(), u("div", {
          key: 0,
          onClick: b[1] || (b[1] = (v) => te("file_size")),
          class: "flex items-center justify-center col-span-2 py-1 leading-6 border-l border-r hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 dark:border-gray-700"
        }, [
          U(m(r(w)("Size")) + " ", 1),
          P(G(ue, {
            direction: V.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [ce, V.active && V.column == "file_size"]
          ])
        ])),
        C.value.length ? S("", !0) : (s(), u("div", {
          key: 1,
          onClick: b[2] || (b[2] = (v) => te("last_modified")),
          class: "flex items-center justify-center col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10"
        }, [
          U(m(r(w)("Date")) + " ", 1),
          P(G(ue, {
            direction: V.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [ce, V.active && V.column == "last_modified"]
          ])
        ])),
        C.value.length ? (s(), u("div", {
          key: 2,
          onClick: b[3] || (b[3] = (v) => te("path")),
          class: "flex items-center justify-center col-span-5 py-1 leading-6 border-l hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 dark:border-gray-700"
        }, [
          U(m(r(w)("Filepath")) + " ", 1),
          P(G(ue, {
            direction: V.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [ce, V.active && V.column == "path"]
          ])
        ])) : S("", !0)
      ])) : S("", !0),
      e("div", Pt, [
        e("div", {
          ref_key: "dragImage",
          ref: d,
          class: "absolute -z-50 -top-96"
        }, [
          Yt,
          e("div", Gt, m(f.value), 1)
        ], 512)
      ]),
      e("div", {
        onTouchstart: F,
        onContextmenu: b[10] || (b[10] = ee((v) => r(t).emit("vf-contextmenu-show", { event: v, area: p.value, items: q() }), ["self", "prevent"])),
        class: T([L.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area vf-scrollbar min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: p
      }, [
        C.value.length ? (s(!0), u(H, { key: 0 }, J(oe(), (v, z) => (s(), u("div", {
          onDblclick: ($) => I(v),
          onTouchstart: b[4] || (b[4] = ($) => B($)),
          onTouchend: b[5] || (b[5] = ($) => y()),
          onContextmenu: ee(($) => r(t).emit("vf-contextmenu-show", { event: $, area: p.value, items: q(), target: v }), ["prevent"]),
          class: T(["vf-item-" + r(D), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": v.type,
          "data-item": JSON.stringify(v),
          "data-index": z
        }, [
          e("div", Kt, [
            e("div", Wt, [
              v.type == "dir" ? (s(), u("svg", Xt, Zt)) : (s(), u("svg", eo, oo)),
              e("span", so, m(v.basename), 1)
            ]),
            e("div", ao, m(v.path), 1)
          ])
        ], 42, Jt))), 256)) : S("", !0),
        l.view == "list" && !C.value.length ? (s(!0), u(H, { key: 1 }, J(oe(), (v, z) => (s(), u("div", {
          draggable: "true",
          onDblclick: ($) => I(v),
          onTouchstart: b[6] || (b[6] = ($) => B($)),
          onTouchend: b[7] || (b[7] = ($) => y()),
          onContextmenu: ee(($) => r(t).emit("vf-contextmenu-show", { event: $, area: p.value, items: q(), target: v }), ["prevent"]),
          onDragstart: ($) => de($),
          onDragover: ($) => le($, v),
          onDrop: ($) => re($, v),
          class: T(["vf-item-" + r(D), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": v.type,
          "data-item": JSON.stringify(v),
          "data-index": z
        }, [
          e("div", ro, [
            e("div", lo, [
              v.type == "dir" ? (s(), u("svg", io, uo)) : (s(), u("svg", mo, po)),
              e("span", ho, m(v.basename), 1)
            ]),
            e("div", fo, m(v.file_size ? r(j)(v.file_size) : ""), 1),
            e("div", go, m(r(ze)(v.last_modified)), 1)
          ])
        ], 42, no))), 256)) : S("", !0),
        l.view == "grid" && !C.value.length ? (s(!0), u(H, { key: 2 }, J(oe(!1), (v, z) => (s(), u("div", {
          draggable: "true",
          onDblclick: ($) => I(v),
          onTouchstart: b[8] || (b[8] = ($) => B($)),
          onTouchend: b[9] || (b[9] = ($) => y()),
          onContextmenu: ee(($) => r(t).emit("vf-contextmenu-show", { event: $, area: p.value, items: q(), target: v }), ["prevent"]),
          onDragstart: ($) => de($),
          onDragover: ($) => le($, v),
          onDrop: ($) => re($, v),
          class: T(["vf-item-" + r(D), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
          "data-type": v.type,
          "data-item": JSON.stringify(v),
          "data-index": z
        }, [
          e("div", null, [
            e("div", _o, [
              v.type == "dir" ? (s(), u("svg", xo, wo)) : (v.mime_type ?? "").startsWith("image") ? (s(), u("img", {
                key: 1,
                class: "h-10 m-auto lazy md:h-12",
                "data-src": r(be)(r(a).value, v.path),
                alt: v.basename
              }, null, 8, yo)) : (s(), u("svg", $o, Mo)),
              !(v.mime_type ?? "").startsWith("image") && v.type != "dir" ? (s(), u("div", jo, m(k(v.extension)), 1)) : S("", !0)
            ]),
            e("span", So, m(r(we)(v.basename)), 1)
          ])
        ], 42, ko))), 256)) : S("", !0)
      ], 34),
      G(Ht)
    ]));
  }
}), zo = { class: "flex justify-between p-1 text-xs border-t select-none border-neutral-300 dark:border-gray-700/50" }, Eo = { class: "flex items-center leading-5" }, Ao = ["aria-label"], Fo = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-5 h-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ e("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  })
], -1), Bo = [
  Fo
], Vo = ["value"], Lo = { class: "ml-3" }, No = { key: 0 }, Uo = { class: "ml-1" }, To = {
  name: "VFStatusbar"
}, Ho = /* @__PURE__ */ Object.assign(To, {
  props: {
    data: Object
  },
  setup(l) {
    const o = x("emitter"), { getStore: n, setStore: t } = x("storage"), i = g(0), c = x("adapter"), { t: a, changeLocale: k, locale: p } = x("i18n"), d = () => {
      o.emit("vf-search-exit"), o.emit("vf-fetch", { params: { q: "index", adapter: c.value } }), t("adapter", c.value);
    };
    o.on("vf-nodes-selected", (h) => {
      i.value = h.length;
    });
    const f = g("");
    return o.on("vf-search-query", ({ newQuery: h }) => {
      f.value = h;
    }), (h, w) => (s(), u("div", zo, [
      e("div", Eo, [
        e("div", {
          class: "mx-2",
          "aria-label": r(a)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, Bo, 8, Ao),
        P(e("select", {
          "onUpdate:modelValue": w[0] || (w[0] = (D) => ve(c) ? c.value = D : null),
          onChange: d,
          class: "py-0.5 text-sm text-slate-500 border dark:border-gray-600 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (s(!0), u(H, null, J(l.data.storages, (D) => (s(), u("option", { value: D }, m(D), 9, Vo))), 256))
        ], 544), [
          [Be, r(c)]
        ]),
        e("div", Lo, [
          f.value.length ? (s(), u("span", No, m(l.data.files.length) + " items found. ", 1)) : S("", !0),
          e("span", Uo, m(i.value > 0 ? i.value + " " + r(a)("item(s) selected.") : ""), 1)
        ])
      ]),
      S("", !0)
    ]));
  }
}), Io = (l, o = 0, n = !1) => {
  let t;
  return (...i) => {
    n && !t && l(...i), clearTimeout(t), t = setTimeout(() => {
      l(...i);
    }, o);
  };
}, qo = (l, o, n) => {
  const t = g(l);
  return Ve((c, a) => ({
    get() {
      return c(), t.value;
    },
    set: Io(
      (k) => {
        t.value = k, a();
      },
      o,
      n
    )
  }));
}, Ro = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, Po = ["aria-label"], Yo = /* @__PURE__ */ e("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Go = [
  Yo
], Jo = ["aria-label"], Ko = /* @__PURE__ */ e("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Wo = [
  Ko
], Xo = ["aria-label"], Qo = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Zo = [
  Qo
], es = /* @__PURE__ */ e("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), ts = [
  es
], os = { class: "flex leading-5" }, ss = /* @__PURE__ */ e("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), as = ["title", "onClick"], ns = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, rs = /* @__PURE__ */ e("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ls = /* @__PURE__ */ e("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), is = [
  rs,
  ls
], ds = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 justify-between items-center rounded p-1 ml-2 w-full"
}, cs = /* @__PURE__ */ e("div", null, [
  /* @__PURE__ */ e("svg", {
    class: "h-6 w-6 p-1 m-auto stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    })
  ])
], -1), us = ["placeholder"], ms = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), vs = [
  ms
], ps = {
  name: "VFBreadcrumb"
}, hs = /* @__PURE__ */ Object.assign(ps, {
  props: {
    data: Object
  },
  setup(l) {
    const o = x("emitter");
    x("storage");
    const n = x("adapter"), t = g(null), i = g([]), c = g(!1), a = g(null), k = l, { t: p } = x("i18n"), d = x("loadingState");
    o.on("vf-explorer-update", () => {
      let O = [], y = [];
      t.value = k.data.dirname ?? n.value + "://", t.value.length == 0 && (i.value = []), t.value.replace(n.value + "://", "").split("/").forEach(function(A) {
        O.push(A), O.join("/") != "" && y.push({
          basename: A,
          name: A,
          path: n.value + "://" + O.join("/"),
          type: "dir"
        });
      }), y.length > 4 && (y = y.slice(-5), y[0].name = ".."), i.value = y;
    });
    const f = () => {
      c.value = !1, w.value = "";
    };
    o.on("vf-search-exit", () => {
      f();
    });
    const h = () => {
      c.value = !0, ge(() => a.value.focus());
    }, w = qo("", 400), D = () => d.value;
    ie(w, (O) => {
      o.emit("vf-toast-clear"), o.emit("vf-search-query", { newQuery: O });
    });
    const L = () => i.value.length && !c.value, j = (O) => {
      O.preventDefault();
      let y = JSON.parse(O.dataTransfer.getData("items"));
      if (y.find((A) => A.storage != n.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      o.emit("vf-modal-show", {
        type: "move",
        items: { from: y, to: i.value[i.value.length - 2] ?? { path: n.value + "://" } }
      });
    }, M = (O) => {
      O.preventDefault(), L() ? O.dataTransfer.dropEffect = "copy" : (O.dataTransfer.dropEffect = "none", O.dataTransfer.effectAllowed = "none");
    }, C = () => {
      w.value == "" && f();
    };
    return (O, y) => (s(), u("div", Ro, [
      e("span", {
        "aria-label": r(p)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (s(), u("svg", {
          onDragover: y[0] || (y[0] = (A) => M(A)),
          onDrop: y[1] || (y[1] = (A) => j(A)),
          onClick: y[2] || (y[2] = (A) => {
            var F;
            return !L() || r(o).emit("vf-fetch", { params: { q: "index", adapter: l.data.adapter, path: ((F = i.value[i.value.length - 2]) == null ? void 0 : F.path) ?? r(n) + "://" } });
          }),
          class: T(["h-6 w-6 p-0.5 rounded", L() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Go, 34))
      ], 8, Po),
      D() ? (s(), u("span", {
        key: 1,
        "aria-label": r(p)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (s(), u("svg", {
          onClick: y[4] || (y[4] = (A) => r(o).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Zo))
      ], 8, Xo)) : (s(), u("span", {
        key: 0,
        "aria-label": r(p)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (s(), u("svg", {
          onClick: y[3] || (y[3] = (A) => {
            r(o).emit("vf-fetch", { params: { q: "index", adapter: l.data.adapter, path: l.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Wo))
      ], 8, Jo)),
      c.value ? (s(), u("div", ds, [
        cs,
        P(e("input", {
          ref_key: "searchInput",
          ref: a,
          onKeydown: ae(f, ["esc"]),
          onBlur: C,
          "onUpdate:modelValue": y[6] || (y[6] = (A) => ve(w) ? w.value = A : null),
          placeholder: r(p)("Search anything.."),
          class: "w-full pt-1 pb-0 px-2 border-0 text-sm ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, us), [
          [ne, r(w)]
        ]),
        (s(), u("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: f,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, vs))
      ])) : (s(), u("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: ee(h, ["self"])
      }, [
        (s(), u("svg", {
          onClick: y[5] || (y[5] = (A) => r(o).emit("vf-fetch", { params: { q: "index", adapter: l.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, ts)),
        e("div", os, [
          (s(!0), u(H, null, J(i.value, (A, F) => (s(), u("div", { key: F }, [
            ss,
            e("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: A.basename,
              onClick: (B) => r(o).emit("vf-fetch", { params: { q: "index", adapter: l.data.adapter, path: A.path } })
            }, m(A.name), 9, as)
          ]))), 128))
        ]),
        D() ? (s(), u("svg", ns, is)) : S("", !0)
      ]))
    ]));
  }
}), fs = ["onClick"], gs = /* @__PURE__ */ e("span", { class: "px-1" }, null, -1), ks = {
  name: "VFContextMenu"
}, _s = /* @__PURE__ */ Object.assign(ks, {
  props: {
    current: Object
  },
  setup(l) {
    const o = x("emitter"), n = g(null), { apiUrl: t } = Q(), i = x("root"), c = l, a = me({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), k = g([]);
    o.on("vf-context-selected", (D) => {
      k.value = D;
    });
    const { t: p } = x("i18n"), d = {
      newfolder: {
        title: () => p("New Folder"),
        action: () => {
          o.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => p("Delete"),
        action: () => {
          o.emit("vf-modal-show", { type: "delete", items: k });
        }
      },
      refresh: {
        title: () => p("Refresh"),
        action: () => {
          o.emit("vf-fetch", { params: { q: "index", adapter: c.current.adapter, path: c.current.dirname } });
        }
      },
      preview: {
        title: () => p("Preview"),
        action: () => {
          o.emit("vf-modal-show", { type: "preview", adapter: c.current.adapter, item: k.value[0] });
        }
      },
      open: {
        title: () => p("Open"),
        action: () => {
          o.emit("vf-search-exit"), o.emit("vf-fetch", { params: { q: "index", adapter: c.current.adapter, path: k.value[0].path } });
        }
      },
      openDir: {
        title: () => p("Open containing folder"),
        action: () => {
          o.emit("vf-search-exit"), o.emit("vf-fetch", { params: { q: "index", adapter: c.current.adapter, path: k.value[0].dir } });
        }
      },
      download: {
        title: () => p("Download"),
        action: () => {
          const D = t.value + "?" + se({ q: "download", adapter: c.current.adapter, path: k.value[0].path });
          o.emit("vf-download", D);
        }
      },
      archive: {
        title: () => p("Archive"),
        action: () => {
          o.emit("vf-modal-show", { type: "archive", items: k });
        }
      },
      unarchive: {
        title: () => p("Unarchive"),
        action: () => {
          o.emit("vf-modal-show", { type: "unarchive", items: k });
        }
      },
      rename: {
        title: () => p("Rename"),
        action: () => {
          o.emit("vf-modal-show", { type: "rename", items: k });
        }
      }
    }, f = (D) => {
      o.emit("vf-contextmenu-hide"), D.action();
    }, h = g("");
    o.on("vf-search-query", ({ newQuery: D }) => {
      h.value = D;
    }), o.on("vf-contextmenu-show", ({ event: D, area: L, items: j, target: M = null }) => {
      if (a.items = [], h.value)
        if (M)
          a.items.push(d.openDir), o.emit("vf-context-selected", [M]);
        else
          return;
      else
        !M && !h.value ? (a.items.push(d.refresh), a.items.push(d.newfolder), o.emit("vf-context-selected", [])) : j.length > 1 && j.some((C) => C.path === M.path) ? (a.items.push(d.refresh), a.items.push(d.archive), a.items.push(d.delete), o.emit("vf-context-selected", j)) : (M.type == "dir" ? a.items.push(d.open) : (a.items.push(d.preview), a.items.push(d.download)), a.items.push(d.rename), M.mime_type == "application/zip" ? a.items.push(d.unarchive) : a.items.push(d.archive), a.items.push(d.delete), o.emit("vf-context-selected", [M]));
      w(D, L);
    }), o.on("vf-contextmenu-hide", () => {
      a.active = !1;
    });
    const w = (D, L) => {
      a.active = !0, ge(() => {
        const j = i.value.getBoundingClientRect(), M = L.getBoundingClientRect();
        let C = D.pageX - j.left, O = D.pageY - j.top, y = n.value.offsetHeight, A = n.value.offsetWidth;
        C = M.right - D.pageX + window.scrollX < A ? C - A : C, O = M.bottom - D.pageY + window.scrollY < y ? O - y : O, a.positions = {
          left: C + "px",
          top: O + "px"
        };
      });
    };
    return (D, L) => a.active ? (s(), u("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: n,
      style: Oe(a.positions)
    }, [
      (s(!0), u(H, null, J(a.items, (j) => (s(), u("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: j.title,
        onClick: (M) => f(j)
      }, [
        gs,
        e("span", null, m(j.title()), 1)
      ], 8, fs))), 128))
    ], 4)) : S("", !0);
  }
}), xs = (l, o) => {
  const n = l[o];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((t, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + o)));
  });
};
async function bs(l) {
  return (await xs(/* @__PURE__ */ Object.assign({ "../locales/de.js": () => import("./de-3f6147f5.js"), "../locales/en.js": () => import("./en-ffed8966.js"), "../locales/fa.js": () => import("./fa-7534f880.js"), "../locales/he.js": () => import("./he-1978fb6e.js"), "../locales/hi.js": () => import("./hi-ffd5a2ba.js"), "../locales/ru.js": () => import("./ru-9f317caf.js"), "../locales/sv.js": () => import("./sv-07e3c393.js"), "../locales/tr.js": () => import("./tr-ce32e2ae.js"), "../locales/zhCN.js": () => import("./zhCN-9b524820.js"), "../locales/zhTW.js": () => import("./zhTW-a803434e.js") }), `../locales/${l}.js`)).default;
}
function ws(l, o, n) {
  const { getStore: t, setStore: i } = xe(l), c = g({}), a = g(t("locale", o)), k = (f, h = "en") => {
    bs(f).then((w) => {
      c.value = w, i("locale", f), a.value = f, i("translations", w), n.emit("vf-toast-push", { label: "The language is set to " + f });
    }).catch((w) => {
      h ? (n.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), k(h, null)) : n.emit("vf-toast-push", { label: "Locale cannot be loaded!", type: "error" });
    });
  };
  t("locale") ? c.value = t("translations") : k(o);
  const p = (f, ...h) => h.length ? p(f = f.replace("%s", h.shift()), ...h) : f;
  function d(f, ...h) {
    return c.value.hasOwnProperty(f) ? p(c.value[f], ...h) : p(f, ...h);
  }
  return { t: d, changeLocale: k, locale: a };
}
function Ce(l, o, n, t, i) {
  return (o = Math, n = o.log, t = 1024, i = n(l) / n(t) | 0, l / o.pow(t, i)).toFixed(0) + " " + (i ? "KMGTPEZY"[--i] + "iB" : "B");
}
function Me(l, o, n, t, i) {
  return (o = Math, n = o.log, t = 1e3, i = n(l) / n(t) | 0, l / o.pow(t, i)).toFixed(0) + " " + (i ? "KMGTPEZY"[--i] + "B" : "B");
}
function ys(l) {
  const o = { k: 1, m: 2, g: 3, t: 4 }, t = /(\d+(?:\.\d+)?)\s?(k|m|g|t)?b?/i.exec(l);
  return t[1] * Math.pow(1024, o[t[2].toLowerCase()]);
}
const $s = /* @__PURE__ */ e("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), Cs = {
  name: "VueFinder"
}, Ms = /* @__PURE__ */ Object.assign(Cs, {
  props: {
    url: {
      type: [String]
    },
    id: {
      type: String,
      default: "vf"
    },
    dark: {
      type: Boolean,
      default: !1
    },
    usePropDarkMode: {
      type: Boolean,
      default: !1
    },
    locale: {
      type: String,
      default: "en"
    },
    maxHeight: {
      type: String,
      default: "600px"
    },
    maxFileSize: {
      type: String,
      default: "10mb"
    },
    postData: {
      type: Object,
      default: {}
    },
    toolbarSets: {
      type: Array
    },
    hiddenToolbarSets: {
      type: Array
    },
    toolbar: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["select"],
  setup(l, { emit: o }) {
    const n = l, t = Te(), { setStore: i, getStore: c } = xe(n.id), a = g(c("adapter")), k = o, p = g(null);
    Y("root", p), Y("emitter", t), Y("storage", xe(n.id)), Y("postData", n.postData), Y("adapter", a), Y("maxFileSize", n.maxFileSize), Y("usePropDarkMode", n.usePropDarkMode);
    const d = ws(n.id, n.locale, t);
    Y("i18n", d);
    const { apiUrl: f, setApiUrl: h } = Q();
    h(n.url);
    const w = me({ adapter: a.value, storages: [], dirname: ".", files: [] }), D = g(c("viewport", "grid")), L = n.usePropDarkMode ? Le(() => n.dark) : g(c("darkMode", n.dark));
    Y("darkMode", L), t.on("vf-darkMode-toggle", () => {
      L.value = !L.value, i("darkMode", L.value);
    });
    const j = g(c("metricUnits", !1));
    Y("metricUnits", j);
    const M = g(j.value ? Me : Ce);
    ie(j, (B) => {
      M.value = B ? Me : Ce;
    }), Y("filesize", M), t.on("vf-metric-units-saved", (B) => {
      j.value = B, i("metricUnits", B);
    });
    const C = g(!1);
    Y("loadingState", C);
    const O = g(c("full-screen", !1));
    t.on("vf-fullscreen-toggle", () => {
      O.value = !O.value, i("full-screen", O.value);
    }), t.on("vf-view-toggle", (B) => {
      D.value = B;
    });
    const y = me({
      active: !1,
      type: "delete",
      data: {}
    });
    t.on("vf-modal-close", () => {
      y.active = !1;
    }), t.on("vf-modal-show", (B) => {
      y.active = !0, y.type = B.type, y.data = B;
    }), t.on("vf-nodes-selected", (B) => {
      k("select", B);
    });
    const A = (B) => {
      Object.assign(w, B), t.emit("vf-nodes-selected", {}), t.emit("vf-explorer-update");
    };
    let F;
    return t.on("vf-fetch-abort", () => {
      F.abort(), C.value = !1;
    }), t.on("vf-fetch", ({ params: B, onSuccess: I = null, onError: V = null, noCloseModal: oe = !1 }) => {
      ["index", "search"].includes(B.q) && (F && F.abort(), C.value = !0), F = new AbortController();
      const te = F.signal;
      fe(f.value, { params: B, signal: te }).then((q) => {
        a.value = q.adapter, ["index", "search"].includes(B.q) && (C.value = !1), oe || t.emit("vf-modal-close"), A(q), I(q);
      }).catch((q) => {
        V && V(q);
      }).finally(() => {
      });
    }), t.on("vf-download", (B) => {
      document.getElementById("download_frame").src = B, t.emit("vf-modal-close");
    }), K(() => {
      t.emit("vf-fetch", { params: { q: "index", adapter: a.value } });
    }), (B, I) => (s(), u("div", {
      class: "vuefinder",
      ref_key: "root",
      ref: p
    }, [
      e("div", {
        class: T(r(L) ? "dark" : "")
      }, [
        e("div", {
          class: T([O.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "flex flex-col text-gray-700 bg-white border select-none dark:bg-gray-800 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min"]),
          style: Oe(O.value ? "" : "max-height: " + l.maxHeight),
          onMousedown: I[0] || (I[0] = (V) => r(t).emit("vf-contextmenu-hide")),
          onTouchstart: I[1] || (I[1] = (V) => r(t).emit("vf-contextmenu-hide"))
        }, [
          l.toolbar ? (s(), N(zt, {
            key: 0,
            data: w,
            "toolbar-sets": l.toolbarSets,
            "hidden-toolbar-sets": l.hiddenToolbarSets
          }, null, 8, ["data", "toolbar-sets", "hidden-toolbar-sets"])) : S("", !0),
          G(hs, { data: w }, null, 8, ["data"]),
          G(Oo, {
            view: D.value,
            data: w
          }, null, 8, ["view", "data"]),
          G(Ho, { data: w }, null, 8, ["data"])
        ], 38),
        y.active ? (s(), N(Ne("v-f-modal-" + y.type), {
          key: 0,
          selection: y.data,
          current: w
        }, null, 8, ["selection", "current"])) : S("", !0),
        G(_s, { current: w }, null, 8, ["current"]),
        $s
      ], 2)
    ], 512));
  }
}), js = /* @__PURE__ */ e("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), Ss = { class: "fixed z-10 inset-0 overflow-hidden" }, Ds = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, Os = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, zs = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, W = {
  __name: "ModalLayout",
  setup(l) {
    const o = x("emitter");
    return K(() => {
      const n = document.querySelector(".v-f-modal input");
      n && n.focus();
    }), (n, t) => (s(), u("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: t[1] || (t[1] = ae((i) => r(o).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      js,
      e("div", Ss, [
        e("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: t[0] || (t[0] = ee((i) => r(o).emit("vf-modal-close"), ["self"]))
        }, [
          e("div", Ds, [
            e("div", Os, [
              pe(n.$slots, "default")
            ]),
            e("div", zs, [
              pe(n.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Es = ["aria-label"], As = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ e("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Fs = [
  As
], Bs = {
  name: "Message"
}, Z = /* @__PURE__ */ Object.assign(Bs, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(l, { emit: o }) {
    var p;
    const { t: n } = x("i18n"), t = g(!1), i = g(null), c = g((p = i.value) == null ? void 0 : p.strMessage), a = o;
    ie(c, () => t.value = !1);
    const k = () => {
      a("hidden"), t.value = !0;
    };
    return (d, f) => (s(), u("div", null, [
      t.value ? S("", !0) : (s(), u("div", {
        key: 0,
        ref_key: "strMessage",
        ref: i,
        class: T(["flex mt-2 p-1 px-2 rounded text-sm break-all dark:opacity-75", l.error ? "bg-red-100 text-red-600 " : "bg-emerald-100 text-emerald-600"])
      }, [
        pe(d.$slots, "default"),
        e("div", {
          class: "ml-auto cursor-pointer",
          onClick: k,
          "aria-label": r(n)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Fs, 8, Es)
      ], 2))
    ]));
  }
}), Vs = { class: "sm:flex sm:items-start" }, Ls = /* @__PURE__ */ e("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), Ns = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Us = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ts = { class: "mt-2" }, Hs = { class: "text-sm text-gray-500" }, Is = {
  class: "text-gray-500 text-sm mb-1 overflow-auto vf-scrollbar",
  style: { "max-height": "200px" }
}, qs = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Rs = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ps = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Ys = [
  Ps
], Gs = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Js = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ks = [
  Js
], Ws = { class: "ml-1.5" }, Xs = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, Qs = {
  name: "VFModalDelete"
}, Zs = /* @__PURE__ */ Object.assign(Qs, {
  props: {
    selection: Object,
    current: Object
  },
  setup(l) {
    const o = x("emitter");
    x("storage");
    const n = x("adapter"), { t } = x("i18n"), i = l, c = g(i.selection.items), a = g(""), k = () => {
      c.value.length && o.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: n.value,
          path: i.current.dirname,
          items: JSON.stringify(c.value.map(({ path: p, type: d }) => ({ path: p, type: d })))
        },
        onSuccess: () => {
          o.emit("vf-toast-push", { label: t("Files deleted.") });
        },
        onError: (p) => {
          a.value = t(p.message);
        }
      });
    };
    return (p, d) => (s(), N(W, null, {
      buttons: E(() => [
        e("button", {
          type: "button",
          onClick: k,
          class: "vf-btn vf-btn-danger"
        }, m(r(t)("Yes, Delete!")), 1),
        e("button", {
          type: "button",
          onClick: d[1] || (d[1] = (f) => r(o).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, m(r(t)("Cancel")), 1),
        e("div", Xs, m(r(t)("This action cannot be undone.")), 1)
      ]),
      default: E(() => [
        e("div", Vs, [
          Ls,
          e("div", Ns, [
            e("h3", Us, m(r(t)("Delete files")), 1),
            e("div", Ts, [
              e("p", Hs, m(r(t)("Are you sure you want to delete these files?")), 1),
              e("div", Is, [
                (s(!0), u(H, null, J(c.value, (f) => (s(), u("p", qs, [
                  f.type === "dir" ? (s(), u("svg", Rs, Ys)) : (s(), u("svg", Gs, Ks)),
                  e("span", Ws, m(f.basename), 1)
                ]))), 256))
              ]),
              a.value.length ? (s(), N(Z, {
                key: 0,
                onHidden: d[0] || (d[0] = (f) => a.value = ""),
                error: ""
              }, {
                default: E(() => [
                  U(m(a.value), 1)
                ]),
                _: 1
              })) : S("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ea = { class: "sm:flex sm:items-start" }, ta = /* @__PURE__ */ e("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), oa = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, sa = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, aa = { class: "mt-2" }, na = { class: "text-sm text-gray-500" }, ra = {
  name: "VFModalMessage"
}, la = /* @__PURE__ */ Object.assign(ra, {
  props: {
    selection: Object
  },
  setup(l) {
    const o = x("emitter"), { t: n } = x("i18n");
    return (t, i) => (s(), N(W, null, {
      buttons: E(() => [
        e("button", {
          type: "button",
          onClick: i[0] || (i[0] = (c) => r(o).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, m(r(n)("Close")), 1)
      ]),
      default: E(() => {
        var c, a;
        return [
          e("div", ea, [
            ta,
            e("div", oa, [
              e("h3", sa, m(((c = l.selection) == null ? void 0 : c.title) ?? "Title"), 1),
              e("div", aa, [
                e("p", na, m(((a = l.selection) == null ? void 0 : a.message) ?? "Message"), 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), ia = { class: "sm:flex sm:items-start" }, da = /* @__PURE__ */ e("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), ca = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ua = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ma = { class: "mt-2" }, va = { class: "text-sm text-gray-500" }, pa = ["placeholder"], ha = {
  name: "VFModalNewFolder"
}, fa = /* @__PURE__ */ Object.assign(ha, {
  props: {
    selection: Object,
    current: Object
  },
  setup(l) {
    const o = x("emitter");
    x("storage");
    const n = x("adapter"), { t } = x("i18n"), i = l, c = g(""), a = g(""), k = () => {
      c.value != "" && o.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: n.value,
          path: i.current.dirname,
          name: c.value
        },
        onSuccess: () => {
          o.emit("vf-toast-push", { label: t("%s is created.", c.value) });
        },
        onError: (p) => {
          a.value = t(p.message);
        }
      });
    };
    return (p, d) => (s(), N(W, null, {
      buttons: E(() => [
        e("button", {
          type: "button",
          onClick: k,
          class: "vf-btn vf-btn-primary"
        }, m(r(t)("Create")), 1),
        e("button", {
          type: "button",
          onClick: d[2] || (d[2] = (f) => r(o).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, m(r(t)("Cancel")), 1)
      ]),
      default: E(() => [
        e("div", ia, [
          da,
          e("div", ca, [
            e("h3", ua, m(r(t)("New Folder")), 1),
            e("div", ma, [
              e("p", va, m(r(t)("Create a new folder")), 1),
              P(e("input", {
                "onUpdate:modelValue": d[0] || (d[0] = (f) => c.value = f),
                onKeyup: ae(k, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: r(t)("Folder Name"),
                type: "text"
              }, null, 40, pa), [
                [ne, c.value]
              ]),
              a.value.length ? (s(), N(Z, {
                key: 0,
                onHidden: d[1] || (d[1] = (f) => a.value = ""),
                error: ""
              }, {
                default: E(() => [
                  U(m(a.value), 1)
                ]),
                _: 1
              })) : S("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ga = { class: "sm:flex sm:items-start" }, ka = /* @__PURE__ */ e("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), _a = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, xa = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ba = { class: "mt-2" }, wa = { class: "text-sm text-gray-500" }, ya = ["placeholder"], $a = {
  name: "VFModalNewFile"
}, Ca = /* @__PURE__ */ Object.assign($a, {
  props: {
    selection: Object,
    current: Object
  },
  setup(l) {
    const o = x("emitter");
    x("storage");
    const n = x("adapter"), { t } = x("i18n"), i = l, c = g(""), a = g(""), k = () => {
      c.value != "" && o.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: n.value,
          path: i.current.dirname,
          name: c.value
        },
        onSuccess: () => {
          o.emit("vf-toast-push", { label: t("%s is created.", c.value) });
        },
        onError: (p) => {
          a.value = t(p.message);
        }
      });
    };
    return (p, d) => (s(), N(W, null, {
      buttons: E(() => [
        e("button", {
          type: "button",
          onClick: k,
          class: "vf-btn vf-btn-primary"
        }, m(r(t)("Create")), 1),
        e("button", {
          type: "button",
          onClick: d[2] || (d[2] = (f) => r(o).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, m(r(t)("Cancel")), 1)
      ]),
      default: E(() => [
        e("div", ga, [
          ka,
          e("div", _a, [
            e("h3", xa, m(r(t)("New File")), 1),
            e("div", ba, [
              e("p", wa, m(r(t)("Create a new file")), 1),
              P(e("input", {
                "onUpdate:modelValue": d[0] || (d[0] = (f) => c.value = f),
                onKeyup: ae(k, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: r(t)("File Name"),
                type: "text"
              }, null, 40, ya), [
                [ne, c.value]
              ]),
              a.value.length ? (s(), N(Z, {
                key: 0,
                onHidden: d[1] || (d[1] = (f) => a.value = ""),
                error: ""
              }, {
                default: E(() => [
                  U(m(a.value), 1)
                ]),
                _: 1
              })) : S("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ma = { class: "flex" }, ja = ["aria-label"], Sa = { class: "ml-auto mb-2" }, Da = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Oa = { key: 1 }, za = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(l, { emit: o }) {
    const n = o, t = g(""), i = g(""), c = g(null), a = g(!1), { apiUrl: k } = Q(), p = l, d = g(""), f = g(!1), { t: h } = x("i18n");
    K(() => {
      fe(k.value, {
        params: { q: "preview", adapter: p.selection.adapter, path: p.selection.item.path },
        json: !1
      }).then((j) => {
        t.value = j, n("load");
      });
    });
    const w = () => {
      a.value = !a.value, i.value = t.value, a.value == !0 && ge(() => {
        c.value.focus();
      });
    }, D = x("postData"), L = () => {
      d.value = "", f.value = !1, fe(k.value, {
        method: "POST",
        params: Object.assign(D, {
          q: "save",
          adapter: p.selection.adapter,
          path: p.selection.item.path,
          content: i.value
        }),
        json: !1
      }).then((j) => {
        d.value = h("Updated."), t.value = j, n("load"), a.value = !a.value;
      }).catch((j) => {
        d.value = h(j.message), f.value = !0;
      });
    };
    return (j, M) => (s(), u(H, null, [
      e("div", Ma, [
        e("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": l.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, m(l.selection.item.basename), 9, ja),
        e("div", Sa, [
          a.value ? (s(), u("button", {
            key: 0,
            onClick: L,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, m(r(h)("Save")), 1)) : S("", !0),
          e("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: M[0] || (M[0] = (C) => w())
          }, m(a.value ? r(h)("Cancel") : r(h)("Edit")), 1)
        ])
      ]),
      e("div", null, [
        a.value ? (s(), u("div", Oa, [
          P(e("textarea", {
            ref_key: "editInput",
            ref: c,
            "onUpdate:modelValue": M[1] || (M[1] = (C) => i.value = C),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ne, i.value]
          ])
        ])) : (s(), u("pre", Da, m(t.value), 1)),
        d.value.length ? (s(), N(Z, {
          key: 2,
          onHidden: M[2] || (M[2] = (C) => d.value = ""),
          error: f.value
        }, {
          default: E(() => [
            U(m(d.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : S("", !0)
      ])
    ], 64));
  }
}, Ea = { class: "flex" }, Aa = ["aria-label"], Fa = { class: "ml-auto mb-2" }, Ba = { class: "w-full flex justify-center" }, Va = ["src"], La = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(l, { emit: o }) {
    const n = o, t = l, { t: i } = x("i18n"), { apiUrl: c } = Q(), a = g(null), k = g(null), p = g(!1), d = g(""), f = g(!1), h = () => {
      p.value = !p.value, p.value ? k.value = new qe(a.value, {
        crop(L) {
        }
      }) : k.value.destroy();
    }, w = x("postData"), D = () => {
      k.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (L) => {
          d.value = "", f.value = !1, fe(c.value, {
            method: "POST",
            params: Object.assign(w, {
              q: "upload",
              adapter: t.selection.adapter,
              path: t.selection.item.path,
              file: L
            }),
            name: t.selection.item.basename,
            json: !1
          }).then((j) => {
            d.value = i("Updated."), a.value.src = be(t.selection.adapter, t.selection.item.path), h(), n("load");
          }).catch((j) => {
            d.value = i(j.message), f.value = !0;
          });
        }
      );
    };
    return K(() => {
      n("load");
    }), (L, j) => (s(), u(H, null, [
      e("div", Ea, [
        e("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": l.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, m(l.selection.item.basename), 9, Aa),
        e("div", Fa, [
          p.value ? (s(), u("button", {
            key: 0,
            onClick: D,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, m(r(i)("Crop")), 1)) : S("", !0),
          e("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: j[0] || (j[0] = (M) => h())
          }, m(p.value ? r(i)("Cancel") : r(i)("Edit")), 1)
        ])
      ]),
      e("div", Ba, [
        e("img", {
          ref_key: "image",
          ref: a,
          class: "max-w-[50vh] max-h-[50vh]",
          src: r(be)(t.selection.adapter, t.selection.item.path),
          alt: ""
        }, null, 8, Va)
      ]),
      d.value.length ? (s(), N(Z, {
        key: 0,
        onHidden: j[1] || (j[1] = (M) => d.value = ""),
        error: f.value
      }, {
        default: E(() => [
          U(m(d.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : S("", !0)
    ], 64));
  }
}, Na = { class: "flex" }, Ua = ["aria-label"], Ta = /* @__PURE__ */ e("div", null, null, -1), Ha = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(l, { emit: o }) {
    const n = o;
    return K(() => {
      n("load");
    }), (t, i) => (s(), u(H, null, [
      e("div", Na, [
        e("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": l.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, m(l.selection.item.basename), 9, Ua)
      ]),
      Ta
    ], 64));
  }
}, Ia = ["aria-label"], qa = {
  class: "w-full",
  preload: "",
  controls: ""
}, Ra = ["src"], Pa = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(l, { emit: o }) {
    const { apiUrl: n } = Q(), t = l, i = o, c = () => n.value + "?" + se({ q: "preview", adapter: t.selection.adapter, path: t.selection.item.path });
    return K(() => {
      i("load");
    }), (a, k) => (s(), u(H, null, [
      e("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": l.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, m(l.selection.item.basename), 9, Ia),
      e("div", null, [
        e("video", qa, [
          e("source", {
            src: c(),
            type: "video/mp4"
          }, null, 8, Ra),
          U(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, Ya = ["aria-label"], Ga = {
  class: "w-full",
  controls: ""
}, Ja = ["src"], Ka = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(l, { emit: o }) {
    const { apiUrl: n } = Q(), t = l, i = o, c = () => n.value + "?" + se({ q: "preview", adapter: t.selection.adapter, path: t.selection.item.path });
    return K(() => {
      i("load");
    }), (a, k) => (s(), u(H, null, [
      e("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": l.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, m(l.selection.item.basename), 9, Ya),
      e("div", null, [
        e("audio", Ga, [
          e("source", {
            src: c(),
            type: "audio/mpeg"
          }, null, 8, Ja),
          U(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, Wa = ["aria-label"], Xa = ["data"], Qa = ["src"], Za = /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ U(" Your browser does not support PDFs. "),
  /* @__PURE__ */ e("a", { href: "https://example.com/test.pdf" }, "Download the PDF"),
  /* @__PURE__ */ U(" . ")
], -1), en = [
  Za
], tn = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(l, { emit: o }) {
    const { apiUrl: n } = Q(), t = l, i = o, c = () => n.value + "?" + se({ q: "preview", adapter: t.selection.adapter, path: t.selection.item.path });
    return K(() => {
      i("load");
    }), (a, k) => (s(), u(H, null, [
      e("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": l.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, m(l.selection.item.basename), 9, Wa),
      e("div", null, [
        e("object", {
          class: "h-[60vh]",
          data: c(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          e("iframe", {
            class: "border-0",
            src: c(),
            width: "100%",
            height: "100%"
          }, en, 8, Qa)
        ], 8, Xa)
      ])
    ], 64));
  }
}, on = { class: "sm:flex sm:items-start" }, sn = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, an = { class: "text-gray-700 dark:text-gray-200 text-sm" }, nn = {
  key: 0,
  class: "flex leading-5"
}, rn = /* @__PURE__ */ e("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ e("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ e("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), ln = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, dn = { class: "font-bold pl-2" }, cn = { class: "font-bold pl-2" }, un = {
  name: "VFModalPreview"
}, mn = /* @__PURE__ */ Object.assign(un, {
  props: {
    selection: Object
  },
  setup(l) {
    const { apiUrl: o } = Q(), n = x("emitter"), { t } = x("i18n"), i = g(!1), c = x("filesize"), a = (f) => i.value = f, k = l, p = (f) => (k.selection.item.mime_type ?? "").startsWith(f), d = () => {
      const f = o.value + "?" + se({ q: "download", adapter: k.selection.adapter, path: k.selection.item.path });
      n.emit("vf-download", f);
    };
    return (f, h) => (s(), N(W, null, {
      buttons: E(() => [
        e("button", {
          type: "button",
          onClick: h[6] || (h[6] = (w) => r(n).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, m(r(t)("Close")), 1),
        e("button", {
          type: "button",
          onClick: h[7] || (h[7] = (w) => d()),
          class: "vf-btn vf-btn-primary"
        }, m(r(t)("Download")), 1)
      ]),
      default: E(() => [
        e("div", on, [
          e("div", sn, [
            e("div", null, [
              p("text") ? (s(), N(za, {
                key: 0,
                selection: l.selection,
                onLoad: h[0] || (h[0] = (w) => a(!0))
              }, null, 8, ["selection"])) : p("image") ? (s(), N(La, {
                key: 1,
                selection: l.selection,
                onLoad: h[1] || (h[1] = (w) => a(!0))
              }, null, 8, ["selection"])) : p("video") ? (s(), N(Pa, {
                key: 2,
                selection: l.selection,
                onLoad: h[2] || (h[2] = (w) => a(!0))
              }, null, 8, ["selection"])) : p("audio") ? (s(), N(Ka, {
                key: 3,
                selection: l.selection,
                onLoad: h[3] || (h[3] = (w) => a(!0))
              }, null, 8, ["selection"])) : p("application/pdf") ? (s(), N(tn, {
                key: 4,
                selection: l.selection,
                onLoad: h[4] || (h[4] = (w) => a(!0))
              }, null, 8, ["selection"])) : (s(), N(Ha, {
                key: 5,
                selection: l.selection,
                onLoad: h[5] || (h[5] = (w) => a(!0))
              }, null, 8, ["selection"]))
            ]),
            e("div", an, [
              i.value == !1 ? (s(), u("div", nn, [
                rn,
                e("span", null, m(r(t)("Loading")), 1)
              ])) : S("", !0)
            ])
          ])
        ]),
        e("div", ln, [
          e("div", null, [
            e("span", dn, m(r(t)("File Size")) + ": ", 1),
            U(m(r(c)(l.selection.item.file_size)), 1)
          ]),
          e("div", null, [
            e("span", cn, m(r(t)("Last Modified")) + ": ", 1),
            U(" " + m(r(ze)(l.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), vn = { class: "sm:flex sm:items-start" }, pn = /* @__PURE__ */ e("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), hn = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, fn = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, gn = { class: "mt-2" }, kn = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, _n = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, xn = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), bn = [
  xn
], wn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, yn = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), $n = [
  yn
], Cn = { class: "ml-1.5" }, Mn = {
  name: "VFModalRename"
}, jn = /* @__PURE__ */ Object.assign(Mn, {
  props: {
    selection: Object,
    current: Object
  },
  setup(l) {
    const o = x("emitter");
    x("storage");
    const n = x("adapter"), { t } = x("i18n"), i = l, c = g(i.selection.items[0]), a = g(i.selection.items[0].basename), k = g(""), p = () => {
      a.value != "" && o.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: n.value,
          path: i.current.dirname,
          item: c.value.path,
          name: a.value
        },
        onSuccess: () => {
          o.emit("vf-toast-push", { label: t("%s is renamed.", a.value) });
        },
        onError: (d) => {
          k.value = t(d.message);
        }
      });
    };
    return (d, f) => (s(), N(W, null, {
      buttons: E(() => [
        e("button", {
          type: "button",
          onClick: p,
          class: "vf-btn vf-btn-primary"
        }, m(r(t)("Rename")), 1),
        e("button", {
          type: "button",
          onClick: f[2] || (f[2] = (h) => r(o).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, m(r(t)("Cancel")), 1)
      ]),
      default: E(() => [
        e("div", vn, [
          pn,
          e("div", hn, [
            e("h3", fn, m(r(t)("Rename")), 1),
            e("div", gn, [
              e("p", kn, [
                c.value.type == "dir" ? (s(), u("svg", _n, bn)) : (s(), u("svg", wn, $n)),
                e("span", Cn, m(c.value.basename), 1)
              ]),
              P(e("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (h) => a.value = h),
                onKeyup: ae(p, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 544), [
                [ne, a.value]
              ]),
              k.value.length ? (s(), N(Z, {
                key: 0,
                onHidden: f[1] || (f[1] = (h) => k.value = ""),
                error: ""
              }, {
                default: E(() => [
                  U(m(k.value), 1)
                ]),
                _: 1
              })) : S("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Sn = { class: "sm:flex sm:items-start" }, Dn = /* @__PURE__ */ e("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), On = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, zn = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, En = { class: "mt-2" }, An = {
  key: 0,
  class: "pointer-events-none"
}, Fn = {
  key: 1,
  class: "pointer-events-none"
}, Bn = ["disabled"], Vn = ["disabled"], Ln = { class: "text-gray-500 text-sm mb-1 pr-1 max-h-[200px] overflow-y-auto vf-scrollbar" }, Nn = { class: "rounded flex flex-shrink-0 w-6 h-6 border bg-gray-50 text-xs cursor-default dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50" }, Un = ["textContent"], Tn = { class: "ml-1 w-full h-fit" }, Hn = { class: "text-left hidden md:block" }, In = { class: "text-left md:hidden" }, qn = {
  key: 0,
  class: "ml-auto"
}, Rn = ["title", "disabled", "onClick"], Pn = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ e("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Yn = [
  Pn
], Gn = {
  key: 0,
  class: "py-2"
}, Jn = ["disabled"], Kn = {
  name: "VFModalUpload"
}, Wn = /* @__PURE__ */ Object.assign(Kn, {
  props: {
    current: Object
  },
  setup(l) {
    const { apiUrl: o } = Q(), n = x("emitter"), { t } = x("i18n"), i = x("maxFileSize"), c = x("postData"), a = x("filesize"), k = l, p = t("uppy"), d = {
      PENDING: 0,
      CANCELED: 1,
      UPLOADING: 2,
      ERROR: 3,
      DONE: 10
    }, f = g({ QUEUE_ENTRY_STATUS: d }), h = g(null), w = g(null), D = g(null), L = g(null), j = g(null), M = g(null), C = g([]), O = g(""), y = g(!1), A = g(!1);
    let F;
    function B(_) {
      return C.value.findIndex((b) => b.id === _);
    }
    function I(_, b = null) {
      b = b ?? (_.webkitRelativePath || _.name), F.addFile({
        name: b,
        type: _.type,
        data: _,
        source: "Local"
      });
    }
    function V(_) {
      switch (_.status) {
        case d.DONE:
          return "text-green-600";
        case d.ERROR:
          return "text-red-600";
        case d.CANCELED:
          return "text-red-600";
        case d.PENDING:
        default:
          return "";
      }
    }
    const oe = (_) => {
      switch (_.status) {
        case d.DONE:
          return "✓";
        case d.ERROR:
        case d.CANCELED:
          return "!";
        case d.PENDING:
        default:
          return "...";
      }
    };
    function te() {
      L.value.click();
    }
    function q() {
      if (!y.value) {
        if (!C.value.filter((_) => _.status !== d.DONE).length) {
          O.value = t("Please select file to upload first.");
          return;
        }
        O.value = "", F.retryAll(), F.upload();
      }
    }
    function de() {
      F.cancelAll({ reason: "user" }), C.value.forEach((_) => {
        _.status !== d.DONE && (_.status = d.CANCELED, _.statusName = t("Canceled"));
      }), y.value = !1;
    }
    function re(_) {
      y.value || (F.removeFile(_.id, "removed-by-user"), C.value.splice(B(_.id), 1));
    }
    function le(_) {
      if (!y.value) {
        if (F.cancelAll({ reason: "user" }), _) {
          const b = [];
          C.value.forEach((v) => {
            v.status !== d.DONE && b.push(v);
          }), C.value = [], b.forEach((v) => {
            I(v.originalFile, v.name);
          });
          return;
        }
        C.value.splice(0);
      }
    }
    function ke() {
      n.emit("vf-modal-close");
    }
    return K(async () => {
      F = new Re({
        debug: process.env.NODE_ENV === "development",
        restrictions: {
          maxFileSize: ys(i)
          //maxNumberOfFiles
          //allowedFileTypes
        },
        locale: p,
        onBeforeFileAdded(v, z) {
          if (z[v.id] != null) {
            const R = B(v.id);
            C.value[R].status === d.PENDING && (O.value = F.i18n("noDuplicates", { fileName: v.name })), C.value = C.value.filter((X) => X.id !== v.id);
          }
          return C.value.push({
            id: v.id,
            name: v.name,
            size: a.value(v.size),
            status: d.PENDING,
            statusName: t("Pending upload"),
            percent: null,
            originalFile: v.data
          }), !0;
        }
      }), F.use(Pe, {
        method: "post",
        endpoint: o.value + "?" + se(Object.assign(c, { q: "upload", adapter: k.current.adapter, path: k.current.dirname })),
        headers: {
          ...he && { "X-CSRF-Token": he }
        },
        limit: 5,
        timeout: 0,
        getResponseError(v, z) {
          let $;
          try {
            $ = JSON.parse(v).message;
          } catch {
            $ = t("Cannot parse server response.");
          }
          return new Error($);
        }
      }), F.on("restriction-failed", (v, z) => {
        const $ = C.value[B(v.id)];
        re($), O.value = z.message;
      }), F.on("upload", () => {
        y.value = !0, C.value.forEach((v) => {
          v.status !== d.DONE && (v.percent = null, v.status = d.UPLOADING, v.statusName = t("Pending upload"));
        });
      }), F.on("upload-progress", (v, z) => {
        const $ = Math.floor(z.bytesUploaded / z.bytesTotal * 100);
        C.value[B(v.id)].percent = `${$}%`;
      }), F.on("upload-success", (v) => {
        const z = C.value[B(v.id)];
        z.status = d.DONE, z.statusName = t("Done");
      }), F.on("upload-error", (v, z) => {
        const $ = C.value[B(v.id)];
        $.percent = null, $.status = d.ERROR, z.isNetworkError ? $.statusName = t("Network Error, Unable establish connection to the server or interrupted.") : $.statusName = z ? z.message : t("Unknown Error");
      }), F.on("error", (v) => {
        O.value = v.message, y.value = !1, n.emit("vf-fetch", {
          params: { q: "index", adapter: k.current.adapter, path: k.current.dirname },
          noCloseModal: !0
        });
      }), F.on("complete", () => {
        y.value = !1, n.emit("vf-fetch", {
          params: { q: "index", adapter: k.current.adapter, path: k.current.dirname },
          noCloseModal: !0
        });
      }), L.value.addEventListener("click", () => {
        w.value.click();
      }), j.value.addEventListener("click", () => {
        D.value.click();
      }), M.value.addEventListener("dragover", (v) => {
        v.preventDefault(), A.value = !0;
      }), M.value.addEventListener("dragleave", (v) => {
        v.preventDefault(), A.value = !1;
      });
      function _(v, z) {
        z.isFile && z.file(($) => v(z, $)), z.isDirectory && z.createReader().readEntries(($) => {
          $.forEach((R) => {
            _(v, R);
          });
        });
      }
      M.value.addEventListener("drop", (v) => {
        v.preventDefault(), A.value = !1;
        const z = /^[/\\](.+)/;
        [...v.dataTransfer.items].forEach(($) => {
          $.kind === "file" && _((R, X) => {
            const Ee = z.exec(R.fullPath);
            I(X, Ee[1]);
          }, $.webkitGetAsEntry());
        });
      });
      const b = ({ target: v }) => {
        const z = v.files;
        for (const $ of z)
          I($);
      };
      w.value.addEventListener("change", b), D.value.addEventListener("change", b);
    }), De(() => {
      F == null || F.close({ reason: "unmount" });
    }), (_, b) => (s(), N(W, null, {
      buttons: E(() => [
        e("button", {
          type: "button",
          class: T(["vf-btn vf-btn-primary", y.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500"]),
          disabled: y.value,
          onClick: ee(q, ["prevent"])
        }, m(r(t)("Upload")), 11, Jn),
        y.value ? (s(), u("button", {
          key: 0,
          type: "button",
          class: "vf-btn vf-btn-secondary",
          onClick: ee(de, ["prevent"])
        }, m(r(t)("Cancel")), 1)) : (s(), u("button", {
          key: 1,
          type: "button",
          class: "vf-btn vf-btn-secondary",
          onClick: ee(ke, ["prevent"])
        }, m(r(t)("Close")), 1))
      ]),
      default: E(() => [
        e("div", Sn, [
          Dn,
          e("div", On, [
            e("h3", zn, m(r(t)("Upload Files")), 1),
            e("div", En, [
              e("div", {
                ref_key: "dropArea",
                ref: M,
                class: "flex items-center justify-center text-lg mb-4 text-gray-500 border-2 border-gray-300 rounded border-dashed select-none cursor-pointer dark:border-gray-600 h-[120px]",
                onClick: te
              }, [
                A.value ? (s(), u("div", An, m(r(t)("Release to drop these files.")), 1)) : (s(), u("div", Fn, m(r(t)("Drag and drop the files/folders to here or click here.")), 1))
              ], 512),
              e("div", {
                ref_key: "container",
                ref: h,
                class: "text-gray-500 mb-1"
              }, [
                e("button", {
                  ref_key: "pickFiles",
                  ref: L,
                  type: "button",
                  class: "vf-btn vf-btn-secondary"
                }, m(r(t)("Select Files")), 513),
                e("button", {
                  ref_key: "pickFolders",
                  ref: j,
                  type: "button",
                  class: "vf-btn vf-btn-secondary"
                }, m(r(t)("Select Folders")), 513),
                e("button", {
                  type: "button",
                  class: "vf-btn vf-btn-secondary",
                  disabled: y.value,
                  onClick: b[0] || (b[0] = (v) => le(!1))
                }, m(r(t)("Clear all")), 9, Bn),
                e("button", {
                  type: "button",
                  class: "vf-btn vf-btn-secondary",
                  disabled: y.value,
                  onClick: b[1] || (b[1] = (v) => le(!0))
                }, m(r(t)("Clear only successful")), 9, Vn)
              ], 512),
              e("div", Ln, [
                (s(!0), u(H, null, J(C.value, (v) => (s(), u("div", {
                  class: "flex hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300",
                  key: v.id
                }, [
                  e("span", Nn, [
                    e("span", {
                      class: T(["text-base m-auto", V(v)]),
                      textContent: m(oe(v))
                    }, null, 10, Un)
                  ]),
                  e("div", Tn, [
                    e("div", Hn, m(r(we)(v.name, 40)) + " (" + m(v.size) + ")", 1),
                    e("div", In, m(r(we)(v.name, 16)) + " (" + m(v.size) + ")", 1),
                    e("div", {
                      class: T(["flex break-all text-left", V(v)])
                    }, [
                      U(m(v.statusName) + " ", 1),
                      v.status === f.value.QUEUE_ENTRY_STATUS.UPLOADING ? (s(), u("b", qn, m(v.percent), 1)) : S("", !0)
                    ], 2)
                  ]),
                  e("button", {
                    type: "button",
                    class: T(["rounded w-5 h-5 border-1 text-base leading-none font-medium focus:outline-none dark:border-gray-200 dark:text-gray-400 dark:hover:text-gray-200 dark:bg-gray-600 ml-auto sm:text-xs hover:text-red-600", y.value ? "disabled:bg-gray-100 text-white text-opacity-50" : "bg-gray-100"]),
                    title: r(t)("Delete"),
                    disabled: y.value,
                    onClick: (z) => re(v)
                  }, Yn, 10, Rn)
                ]))), 128)),
                C.value.length ? S("", !0) : (s(), u("div", Gn, m(r(t)("No files selected!")), 1))
              ]),
              O.value.length ? (s(), N(Z, {
                key: 0,
                onHidden: b[2] || (b[2] = (v) => O.value = ""),
                error: ""
              }, {
                default: E(() => [
                  U(m(O.value), 1)
                ]),
                _: 1
              })) : S("", !0)
            ])
          ])
        ]),
        e("input", {
          ref_key: "internalFileInput",
          ref: w,
          type: "file",
          multiple: "",
          class: "hidden"
        }, null, 512),
        e("input", {
          ref_key: "internalFolderInput",
          ref: D,
          type: "file",
          multiple: "",
          webkitdirectory: "",
          class: "hidden"
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Xn = { class: "sm:flex sm:items-start" }, Qn = /* @__PURE__ */ e("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Zn = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, er = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, tr = { class: "mt-2" }, or = {
  class: "text-gray-500 text-sm mb-1 overflow-auto vf-scrollbar",
  style: { "max-height": "200px" }
}, sr = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ar = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, nr = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), rr = [
  nr
], lr = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ir = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), dr = [
  ir
], cr = { class: "ml-1.5" }, ur = ["placeholder"], mr = {
  name: "VFModalArchive"
}, vr = /* @__PURE__ */ Object.assign(mr, {
  props: {
    selection: Object,
    current: Object
  },
  setup(l) {
    const o = x("emitter");
    x("storage");
    const n = x("adapter"), { t } = x("i18n"), i = l, c = g(""), a = g(""), k = g(i.selection.items), p = () => {
      k.value.length && o.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: n.value,
          path: i.current.dirname,
          items: JSON.stringify(k.value.map(({ path: d, type: f }) => ({ path: d, type: f }))),
          name: c.value
        },
        onSuccess: () => {
          o.emit("vf-toast-push", { label: t("The file(s) archived.") });
        },
        onError: (d) => {
          a.value = t(d.message);
        }
      });
    };
    return (d, f) => (s(), N(W, null, {
      buttons: E(() => [
        e("button", {
          type: "button",
          onClick: p,
          class: "vf-btn vf-btn-primary"
        }, m(r(t)("Archive")), 1),
        e("button", {
          type: "button",
          onClick: f[2] || (f[2] = (h) => r(o).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, m(r(t)("Cancel")), 1)
      ]),
      default: E(() => [
        e("div", Xn, [
          Qn,
          e("div", Zn, [
            e("h3", er, m(r(t)("Archive the files")), 1),
            e("div", tr, [
              e("div", or, [
                (s(!0), u(H, null, J(k.value, (h) => (s(), u("p", sr, [
                  h.type == "dir" ? (s(), u("svg", ar, rr)) : (s(), u("svg", lr, dr)),
                  e("span", cr, m(h.basename), 1)
                ]))), 256))
              ]),
              P(e("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (h) => c.value = h),
                onKeyup: ae(p, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: r(t)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, ur), [
                [ne, c.value]
              ]),
              a.value.length ? (s(), N(Z, {
                key: 0,
                onHidden: f[1] || (f[1] = (h) => a.value = ""),
                error: ""
              }, {
                default: E(() => [
                  U(m(a.value), 1)
                ]),
                _: 1
              })) : S("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), pr = { class: "sm:flex sm:items-start" }, hr = /* @__PURE__ */ e("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), fr = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, gr = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, kr = { class: "mt-2" }, _r = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, xr = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, br = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), wr = [
  br
], yr = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, $r = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Cr = [
  $r
], Mr = { class: "ml-1.5" }, jr = { class: "my-1 text-sm text-gray-500" }, Sr = {
  name: "VFModalUnarchive"
}, Dr = /* @__PURE__ */ Object.assign(Sr, {
  props: {
    selection: Object,
    current: Object
  },
  setup(l) {
    const o = x("emitter");
    x("storage");
    const n = x("adapter"), { t } = x("i18n"), i = l;
    g("");
    const c = g(i.selection.items[0]), a = g(""), k = g([]), p = () => {
      o.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: n.value,
          path: i.current.dirname,
          item: c.value.path
        },
        onSuccess: () => {
          o.emit("vf-toast-push", { label: t("The file unarchived.") });
        },
        onError: (d) => {
          a.value = t(d.message);
        }
      });
    };
    return (d, f) => (s(), N(W, null, {
      buttons: E(() => [
        e("button", {
          type: "button",
          onClick: p,
          class: "vf-btn vf-btn-primary"
        }, m(r(t)("Unarchive")), 1),
        e("button", {
          type: "button",
          onClick: f[1] || (f[1] = (h) => r(o).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, m(r(t)("Cancel")), 1)
      ]),
      default: E(() => [
        e("div", pr, [
          hr,
          e("div", fr, [
            e("h3", gr, m(r(t)("Unarchive")), 1),
            e("div", kr, [
              (s(!0), u(H, null, J(k.value, (h) => (s(), u("p", _r, [
                h.type == "dir" ? (s(), u("svg", xr, wr)) : (s(), u("svg", yr, Cr)),
                e("span", Mr, m(h.basename), 1)
              ]))), 256)),
              e("p", jr, m(r(t)("The archive will be unarchived at")) + " (" + m(l.current.dirname) + ")", 1),
              a.value.length ? (s(), N(Z, {
                key: 0,
                onHidden: f[0] || (f[0] = (h) => a.value = ""),
                error: ""
              }, {
                default: E(() => [
                  U(m(a.value), 1)
                ]),
                _: 1
              })) : S("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Or = { class: "sm:flex sm:items-start" }, zr = /* @__PURE__ */ e("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ e("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), Er = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Ar = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Fr = { class: "mt-2" }, Br = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Vr = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Lr = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Nr = [
  Lr
], Ur = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Tr = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Hr = [
  Tr
], Ir = { class: "ml-1.5" }, qr = { class: "text-sm text-gray-500 pb-1 pt-3" }, Rr = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Pr = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ e("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), Yr = { class: "ml-1.5 overflow-auto" }, Gr = {
  name: "VFModalMove"
}, Jr = /* @__PURE__ */ Object.assign(Gr, {
  props: {
    selection: Object,
    current: Object
  },
  setup(l) {
    const o = x("emitter"), { t: n } = x("i18n");
    x("storage");
    const t = x("adapter"), i = l, c = g(i.selection.items.from), a = g(""), k = () => {
      c.value.length && o.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: t.value,
          path: i.current.dirname,
          items: JSON.stringify(c.value.map(({ path: p, type: d }) => ({ path: p, type: d }))),
          item: i.selection.items.to.path
        },
        onSuccess: () => {
          o.emit("vf-toast-push", { label: n("Files moved.", i.selection.items.to.name) });
        },
        onError: (p) => {
          a.value = n(p.message);
        }
      });
    };
    return (p, d) => (s(), N(W, null, {
      buttons: E(() => [
        e("button", {
          type: "button",
          onClick: k,
          class: "vf-btn vf-btn-primary"
        }, m(r(n)("Yes, Move!")), 1),
        e("button", {
          type: "button",
          onClick: d[1] || (d[1] = (f) => r(o).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, m(r(n)("Cancel")), 1)
      ]),
      default: E(() => [
        e("div", Or, [
          zr,
          e("div", Er, [
            e("h3", Ar, m(r(n)("Move files")), 1),
            e("div", Fr, [
              (s(!0), u(H, null, J(c.value, (f) => (s(), u("p", Br, [
                f.type == "dir" ? (s(), u("svg", Vr, Nr)) : (s(), u("svg", Ur, Hr)),
                e("span", Ir, m(f.path), 1)
              ]))), 256)),
              e("p", qr, m(r(n)("Are you sure you want to move these files?")), 1),
              e("p", Rr, [
                Pr,
                e("span", Yr, m(l.selection.items.to.path), 1)
              ]),
              a.value.length ? (s(), N(Z, {
                key: 0,
                onHidden: d[0] || (d[0] = (f) => a.value = ""),
                error: ""
              }, {
                default: E(() => [
                  U(m(a.value), 1)
                ]),
                _: 1
              })) : S("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Kr = (l, o) => {
  const n = l.__vccOpts || l;
  for (const [t, i] of o)
    n[t] = i;
  return n;
}, Wr = {
  props: {
    on: { type: String, required: !0 }
  },
  setup(l, { emit: o, slots: n }) {
    const t = x("emitter"), i = g(!1);
    let c = null;
    const a = () => {
      clearTimeout(c), i.value = !0, c = setTimeout(() => {
        i.value = !1;
      }, 2e3);
    };
    return K(() => {
      t.on(l.on, a);
    }), Ue(() => {
      clearTimeout(c);
    }), {
      shown: i
    };
  }
}, Xr = { key: 1 };
function Qr(l, o, n, t, i, c) {
  return s(), u("div", {
    class: T(["text-sm text-green-600 dark:text-green-600 transition-opacity duration-500 ease-out", [{ "opacity-0": !t.shown }]])
  }, [
    l.$slots.default ? pe(l.$slots, "default", { key: 0 }) : (s(), u("span", Xr, "Saved."))
  ], 2);
}
const je = /* @__PURE__ */ Kr(Wr, [["render", Qr]]), Zr = "1.3.3", el = { class: "sm:flex sm:items-start" }, tl = /* @__PURE__ */ e("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
    }),
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    })
  ])
], -1), ol = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, sl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, al = { class: "mt-2" }, nl = { class: "text-sm text-gray-500" }, rl = { class: "text-sm font-semibold mt-5 text-gray-900 dark:text-gray-400 tracking-wider" }, ll = { class: "mt-3 text-left" }, il = { class: "space-y-2" }, dl = { class: "flex relative gap-x-3" }, cl = { class: "h-6 items-center" }, ul = { class: "flex-1 block text-sm" }, ml = {
  for: "dark_mode",
  class: "flex w-full font-medium text-gray-900 dark:text-gray-400"
}, vl = { class: "flex relative gap-x-3" }, pl = { class: "h-6 items-center" }, hl = { class: "flex-1 block text-sm" }, fl = {
  for: "metric_unit",
  class: "flex w-full font-medium text-gray-900 dark:text-gray-400"
}, gl = {
  name: "VFModalAbout"
}, kl = /* @__PURE__ */ Object.assign(gl, {
  props: {
    selection: Object,
    current: Object
  },
  setup(l) {
    const o = x("emitter"), { getStore: n, clearStore: t } = x("storage");
    x("adapter");
    const { t: i } = x("i18n");
    g(""), g("");
    const c = x("darkMode"), a = async () => {
      t(), location.reload();
    }, k = () => {
      o.emit("vf-darkMode-toggle"), o.emit("vf-darkMode-saved");
    }, p = x("metricUnits"), d = () => {
      o.emit("vf-metric-units-saved", !p.value);
    };
    return (f, h) => (s(), N(W, null, {
      buttons: E(() => [
        e("button", {
          type: "button",
          onClick: h[2] || (h[2] = (w) => r(o).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, m(r(i)("Close")), 1)
      ]),
      default: E(() => [
        e("div", el, [
          tl,
          e("div", ol, [
            e("h3", sl, m(r(i)("About %s", "Vuefinder " + r(Zr))), 1),
            e("div", al, [
              e("p", nl, m(r(i)("Vuefinder is a file manager component for vue 3.")), 1),
              e("div", null, [
                e("h3", rl, m(r(i)("Settings")), 1)
              ]),
              e("div", ll, [
                e("fieldset", null, [
                  e("div", il, [
                    e("div", dl, [
                      e("div", cl, [
                        P(e("input", {
                          id: "dark_mode",
                          name: "dark_mode",
                          "onUpdate:modelValue": h[0] || (h[0] = (w) => ve(c) ? c.value = w : null),
                          type: "checkbox",
                          onClick: k,
                          class: "h-4 w-4 rounded border-gray-300 text-indigo-600 dark:accent-slate-400 focus:ring-indigo-600"
                        }, null, 512), [
                          [ye, r(c)]
                        ])
                      ]),
                      e("div", ul, [
                        e("label", ml, [
                          U(m(r(i)("Dark Mode")) + " ", 1),
                          G(je, {
                            class: "ms-3",
                            on: "vf-darkMode-saved"
                          }, {
                            default: E(() => [
                              U(m(r(i)("Saved.")), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    e("div", vl, [
                      e("div", pl, [
                        P(e("input", {
                          id: "metric_unit",
                          name: "metric_unit",
                          type: "checkbox",
                          "onUpdate:modelValue": h[1] || (h[1] = (w) => ve(p) ? p.value = w : null),
                          onClick: d,
                          class: "h-4 w-4 rounded border-gray-300 text-indigo-600 dark:accent-slate-400 focus:ring-indigo-600"
                        }, null, 512), [
                          [ye, r(p)]
                        ])
                      ]),
                      e("div", hl, [
                        e("label", fl, [
                          U(m(r(i)("Use Metric Units")) + " ", 1),
                          G(je, {
                            class: "ms-3",
                            on: "vf-metric-units-saved"
                          }, {
                            default: E(() => [
                              U(m(r(i)("Saved.")), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    e("button", {
                      onClick: a,
                      type: "button",
                      class: "vf-btn vf-btn-secondary"
                    }, m(r(i)("Clear Local Storage")), 1)
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), _l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalAbout: kl,
  ModalArchive: vr,
  ModalDelete: Zs,
  ModalMessage: la,
  ModalMove: Jr,
  ModalNewFile: Ca,
  ModalNewFolder: fa,
  ModalPreview: mn,
  ModalRename: jn,
  ModalUnarchive: Dr,
  ModalUpload: Wn
}, Symbol.toStringTag, { value: "Module" })), _e = {
  VueFinder: Ms,
  ..._l
};
const Dl = {
  install(l) {
    for (const o in _e)
      if (_e.hasOwnProperty(o)) {
        const n = _e[o];
        l.component(n.name, n);
      }
  }
};
export {
  Dl as default
};
