import { ref as g, watch as de, inject as b, openBlock as a, createElementBlock as c, unref as r, createCommentVNode as S, normalizeClass as T, Fragment as H, createElementVNode as e, createTextVNode as U, toDisplayString as u, createVNode as G, TransitionGroup as Fe, withCtx as A, renderList as J, reactive as me, onMounted as K, onUpdated as Be, onBeforeUnmount as De, withDirectives as P, vShow as ce, withModifiers as ee, nextTick as ge, computed as Oe, isRef as ve, vModelSelect as Ve, customRef as Le, withKeys as ne, vModelText as re, normalizeStyle as ze, provide as Y, createBlock as N, resolveDynamicComponent as Ne, renderSlot as pe, onUnmounted as Ue, vModelCheckbox as ye } from "vue";
import Te from "mitt";
import He from "dragselect";
import Ie from "vanilla-lazyload";
import "cropperjs/dist/cropper.css";
import qe from "cropperjs";
import Re from "@uppy/core";
import Pe from "@uppy/xhr-upload";
import "microtip/microtip.css";
var Se;
const he = (Se = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : Se.getAttribute("content"), fe = (l, { method: s = "get", params: n = {}, json: t = !0, signal: i = null }) => {
  const v = { method: s };
  if (v.signal = i, s == "get")
    l += "?" + new URLSearchParams(n);
  else {
    v.headers = {}, he && (v.headers["X-CSRF-Token"] = he);
    let o = new FormData();
    for (const [k, p] of Object.entries(n))
      o.append(k, p);
    v.body = o;
  }
  return fetch(l, v).then((o) => o.ok ? t ? o.json() : o.text() : o.json().then(Promise.reject.bind(Promise)));
};
function be(l) {
  let s = localStorage.getItem(l + "_storage");
  const n = g(JSON.parse(s));
  de(n, t);
  function t() {
    n.value === null || n.value === "" ? localStorage.removeItem(l + "_storage") : localStorage.setItem(l + "_storage", JSON.stringify(n.value));
  }
  function i(k, p) {
    n.value = Object.assign({ ...n.value }, { [k]: p });
  }
  function v() {
    n.value = null;
  }
  return { getStore: (k, p = null) => n.value === null || n.value === "" ? p : n.value.hasOwnProperty(k) ? n.value[k] : p, setStore: i, clearStore: v };
}
const $e = g("");
function Q() {
  function l(s) {
    $e.value = s;
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
}, null, -1), st = [
  tt
], ot = ["aria-label"], at = /* @__PURE__ */ e("path", {
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
}, null, -1), bt = /* @__PURE__ */ e("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), xt = [
  _t,
  bt
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
    const s = b("emitter");
    b("usePropDarkMode");
    const { getStore: n, setStore: t } = b("storage"), { t: i } = b("i18n"), v = g(n("viewport", "grid")), o = g([]), k = g(n("full-screen", !1)), p = l, d = g("");
    function f(j) {
      return p.toolbarSets.includes(j);
    }
    function h(j) {
      return p.hiddenToolbarSets.includes(j);
    }
    s.on("vf-search-query", ({ newQuery: j }) => {
      d.value = j;
    });
    const y = b("loadingState"), D = () => y.value, z = () => {
      k.value = !k.value, s.emit("vf-fullscreen-toggle");
    };
    return s.on("vf-nodes-selected", (j) => {
      o.value = j;
    }), s.on("vf-view-toggle", (j) => {
      t("viewport", j), v.value = j, s.emit("vf-nodes-selected", []);
    }), (j, w) => (a(), c("div", Ye, [
      d.value.length ? (a(), c("div", ht, [
        e("div", ft, [
          U(u(r(i)("Search results for")) + " ", 1),
          e("span", gt, u(d.value), 1)
        ]),
        D() ? (a(), c("svg", kt, xt)) : S("", !0)
      ])) : (a(), c("div", Ge, [
        f("new_folder") && !h("new_folder") ? (a(), c("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": r(i)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: w[0] || (w[0] = (M) => r(s).emit("vf-modal-show", { type: "new-folder", items: o.value }))
        }, We, 8, Je)) : S("", !0),
        f("new_file") && !h("new_file") ? (a(), c("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": r(i)("New File"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: w[1] || (w[1] = (M) => r(s).emit("vf-modal-show", { type: "new-file", items: o.value }))
        }, Ze, 8, Xe)) : S("", !0),
        f("rename") && !h("rename") ? (a(), c("div", {
          key: 2,
          class: "mx-1.5",
          "aria-label": r(i)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: w[2] || (w[2] = (M) => o.value.length != 1 || r(s).emit("vf-modal-show", { type: "rename", items: o.value }))
        }, [
          (a(), c("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: T([o.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "w-4 h-4 m-auto md:h-6 md:w-6"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, st, 2))
        ], 8, et)) : S("", !0),
        f("delete") && !h("delete") ? (a(), c("div", {
          key: 3,
          class: "mx-1.5",
          "aria-label": r(i)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: w[3] || (w[3] = (M) => !o.value.length || r(s).emit("vf-modal-show", { type: "delete", items: o.value }))
        }, [
          (a(), c("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: T([o.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "w-4 h-4 m-auto md:h-6 md:w-6"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, nt, 2))
        ], 8, ot)) : S("", !0),
        f("upload") && !h("upload") ? (a(), c("div", {
          key: 4,
          class: "mx-1.5",
          "aria-label": r(i)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: w[4] || (w[4] = (M) => r(s).emit("vf-modal-show", { type: "upload", items: o.value }))
        }, it, 8, rt)) : S("", !0),
        f("archive") && !h("archive") ? (a(), c(H, { key: 5 }, [
          o.value.length == 1 && o.value[0].mime_type == "application/zip" ? (a(), c("div", {
            key: 0,
            class: "mx-1.5",
            "aria-label": r(i)("Unarchive"),
            "data-microtip-position": "bottom",
            role: "tooltip",
            onClick: w[5] || (w[5] = (M) => !o.value.length || r(s).emit("vf-modal-show", { type: "unarchive", items: o.value }))
          }, [
            (a(), c("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: T([o.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "w-4 h-4 m-auto md:h-8 md:w-8"]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "none",
              "stroke-width": "1.5"
            }, ut, 2))
          ], 8, dt)) : (a(), c("div", {
            key: 1,
            class: "mx-1.5",
            "aria-label": r(i)("Archive"),
            "data-microtip-position": "bottom",
            role: "tooltip",
            onClick: w[6] || (w[6] = (M) => !o.value.length || r(s).emit("vf-modal-show", { type: "archive", items: o.value }))
          }, [
            (a(), c("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: T([o.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "w-4 h-4 m-auto md:h-6 md:w-6"]),
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "none",
              "stroke-width": "1.5"
            }, pt, 2))
          ], 8, mt))
        ], 64)) : S("", !0)
      ])),
      e("div", wt, [
        f("fullscreen") && !h("fullscreen") ? (a(), c("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": r(i)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: z
        }, [
          (a(), c("svg", $t, [
            k.value ? (a(), c("path", Ct)) : (a(), c("path", Mt))
          ]))
        ], 8, yt)) : S("", !0),
        f("view") && !h("view") ? (a(), c("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": r(i)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: w[7] || (w[7] = (M) => d.value.length || r(s).emit("vf-view-toggle", v.value == "list" ? "grid" : "list"))
        }, [
          (a(), c("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: T([d.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "w-6 h-6 m-auto md:h-6 md:w-6"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            v.value == "grid" ? (a(), c("path", St)) : S("", !0),
            v.value == "list" ? (a(), c("path", Dt)) : S("", !0)
          ], 2))
        ], 8, jt)) : S("", !0)
      ])
    ]));
  }
}), Ee = (l, s = null) => new Date(l * 1e3).toLocaleString(s ?? navigator.language ?? "en-US"), Et = {
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
    return (s, n) => (a(), c("div", null, [
      l.direction == "down" ? (a(), c("svg", Et, Ft)) : S("", !0),
      l.direction == "up" ? (a(), c("svg", Bt, Lt)) : S("", !0)
    ]));
  }
}), Ut = ["onClick"], Tt = {
  name: "VFToast.vue"
}, Ht = /* @__PURE__ */ Object.assign(Tt, {
  setup(l) {
    const s = b("emitter"), { getStore: n } = b("storage"), t = g(n("full-screen", !1)), i = (p) => p == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", v = g([]), o = (p) => {
      v.value.splice(p, 1);
    }, k = (p) => {
      let d = v.value.findIndex((f) => f.id === p);
      d !== -1 && o(d);
    };
    return s.on("vf-toast-clear", () => {
      v.value = [];
    }), s.on("vf-toast-push", (p) => {
      let d = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      p.id = d, v.value.push(p), setTimeout(() => {
        k(d);
      }, 5e3);
    }), (p, d) => (a(), c("div", {
      class: T([t.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      G(Fe, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: A(() => [
          (a(!0), c(H, null, J(v.value, (f, h) => (a(), c("div", {
            onClick: (y) => o(h),
            key: f,
            class: T([i(f.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, u(f.label), 11, Ut))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), oe = (l) => Object.entries(l).map((s) => s.map(encodeURIComponent).join("=")).join("&"), { apiUrl: It } = Q(), xe = (l, s) => It.value + "?" + oe({ q: "preview", adapter: l, path: s });
function we(l, s = 14) {
  let n = `((?=([\\w\\W]{0,${s}}))([\\w\\W]{8,})([\\w\\W]{8,}))`;
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
], es = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-5 h-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ts = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ss = [
  ts
], os = { class: "overflow-hidden overflow-ellipsis whitespace-nowrap" }, as = { class: "col-span-5 overflow-hidden overflow-ellipsis whitespace-nowrap" }, ns = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], rs = { class: "grid items-center grid-cols-12" }, ls = { class: "flex items-center col-span-7" }, is = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-5 h-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ds = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), cs = [
  ds
], us = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-5 h-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ms = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), vs = [
  ms
], ps = { class: "overflow-hidden overflow-ellipsis whitespace-nowrap" }, hs = { class: "col-span-2 text-center" }, fs = { class: "col-span-3 overflow-hidden overflow-ellipsis whitespace-nowrap" }, gs = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ks = { class: "relative" }, _s = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-10 h-10 m-auto md:h-12 md:w-12 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, bs = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), xs = [
  bs
], ws = ["data-src", "alt"], ys = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "w-10 h-10 m-auto md:h-12 md:w-12 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, $s = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Cs = [
  $s
], Ms = {
  key: 3,
  class: "absolute hidden w-full text-center md:block top-1/2 text-neutral-500"
}, js = { class: "break-all" }, Ss = {
  name: "VFExplorer"
}, Ds = /* @__PURE__ */ Object.assign(Ss, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  emits: ["select"],
  setup(l, { emit: s }) {
    const n = l, t = b("emitter"), { setStore: i, getStore: v } = b("storage"), o = b("adapter"), k = (_) => _ == null ? void 0 : _.substring(0, 3), p = g(null), d = g(null), f = g(0), h = g(null), { t: y } = b("i18n"), D = Math.floor(Math.random() * 2 ** 32), z = g(v("full-screen", !1)), j = b("filesize");
    let w;
    t.on("vf-fullscreen-toggle", () => {
      p.value.style.height = null, z.value = !z.value, i("full-screen", z.value);
    });
    const M = g("");
    t.on("vf-search-query", ({ newQuery: _ }) => {
      M.value = _, _ ? t.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: n.data.adapter,
          path: n.data.dirname,
          filter: _
        },
        onSuccess: (x) => {
          x.files.length || t.emit("vf-toast-push", { label: y("No search result found.") });
        }
      }) : t.emit("vf-fetch", { params: { q: "index", adapter: n.data.adapter, path: n.data.dirname } });
    });
    let O = null;
    const $ = () => {
      O && clearTimeout(O);
    }, F = g(!0), B = (_) => {
      _.touches.length > 1 && (F.value ? (h.value.stop(), t.emit("vf-toast-push", { label: y("Drag&Drop: off") })) : (h.value.start(), t.emit("vf-toast-push", { label: y("Drag&Drop: on") }), t.emit("vf-explorer-update")), F.value = !F.value);
    }, V = (_) => {
      O = setTimeout(() => {
        const x = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: _.target.getBoundingClientRect().x,
          clientY: _.target.getBoundingClientRect().y
        });
        _.target.dispatchEvent(x);
      }, 500);
    }, q = (_) => {
      _.type == "dir" ? (t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: n.data.adapter, path: _.path } })) : t.emit("vf-modal-show", { type: "preview", adapter: n.data.adapter, item: _ });
    }, L = me({ active: !1, column: "", order: "" }), se = (_ = !0) => {
      let x = [...n.data.files], m = L.column, E = L.order == "asc" ? 1 : -1;
      if (!_)
        return x;
      const C = (R, X) => typeof R == "string" && typeof X == "string" ? R.toLowerCase().localeCompare(X.toLowerCase()) : R < X ? -1 : R > X ? 1 : 0;
      return L.active && (x = x.slice().sort((R, X) => C(R[m], X[m]) * E)), x;
    }, te = (_) => {
      L.active && L.column == _ ? (L.active = L.order == "asc", L.column = _, L.order = "desc") : (L.active = !0, L.column = _, L.order = "asc");
    }, I = () => h.value.getSelection().map((_) => JSON.parse(_.dataset.item)), ae = (_, x) => {
      if (_.altKey || _.ctrlKey || _.metaKey)
        return _.preventDefault(), !1;
      _.dataTransfer.setDragImage(d.value, 0, 15), _.dataTransfer.effectAllowed = "all", _.dataTransfer.dropEffect = "copy", _.dataTransfer.setData("items", JSON.stringify(I()));
    }, le = (_, x) => {
      _.preventDefault();
      let m = JSON.parse(_.dataTransfer.getData("items"));
      if (m.find((E) => E.storage != o.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      t.emit("vf-modal-show", { type: "move", items: { from: m, to: x } });
    }, ie = (_, x) => {
      _.preventDefault(), !x || x.type !== "dir" || h.value.getSelection().find((m) => m == _.currentTarget) ? (_.dataTransfer.dropEffect = "none", _.dataTransfer.effectAllowed = "none") : _.dataTransfer.dropEffect = "copy";
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
      })), h.value.subscribe("predragstart", ({ event: _, isDragging: x }) => {
        if (x)
          f.value = h.value.getSelection().length, h.value.break();
        else {
          const m = _.target.offsetWidth - _.offsetX, E = _.target.offsetHeight - _.offsetY;
          m < 15 && E < 15 && (h.value.clearSelection(), h.value.break());
        }
      }), h.value.subscribe("predragmove", ({ isDragging: _ }) => {
        _ && h.value.break();
      }), h.value.subscribe("callback", ({ items: _, event: x, isDragging: m }) => {
        t.emit("vf-nodes-selected", I()), f.value = h.value.getSelection().length;
      });
    };
    return K(() => {
      w = new Ie(p.value), ke();
    }), Be(() => {
      h.value.Area.reset(), h.value.SelectorArea.updatePos(), w.update();
    }), K(() => {
      de(() => n.view, () => t.emit("vf-explorer-update"));
    }), De(() => {
      w.destroy();
    }), (_, x) => (a(), c("div", qt, [
      l.view == "list" || M.value.length ? (a(), c("div", Rt, [
        e("div", {
          onClick: x[0] || (x[0] = (m) => te("basename")),
          class: "flex items-center col-span-7 py-1 pl-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10"
        }, [
          U(u(r(y)("Name")) + " ", 1),
          P(G(ue, {
            direction: L.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [ce, L.active && L.column == "basename"]
          ])
        ]),
        M.value.length ? S("", !0) : (a(), c("div", {
          key: 0,
          onClick: x[1] || (x[1] = (m) => te("file_size")),
          class: "flex items-center justify-center col-span-2 py-1 leading-6 border-l border-r hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 dark:border-gray-700"
        }, [
          U(u(r(y)("Size")) + " ", 1),
          P(G(ue, {
            direction: L.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [ce, L.active && L.column == "file_size"]
          ])
        ])),
        M.value.length ? S("", !0) : (a(), c("div", {
          key: 1,
          onClick: x[2] || (x[2] = (m) => te("last_modified")),
          class: "flex items-center justify-center col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10"
        }, [
          U(u(r(y)("Date")) + " ", 1),
          P(G(ue, {
            direction: L.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [ce, L.active && L.column == "last_modified"]
          ])
        ])),
        M.value.length ? (a(), c("div", {
          key: 2,
          onClick: x[3] || (x[3] = (m) => te("path")),
          class: "flex items-center justify-center col-span-5 py-1 leading-6 border-l hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 dark:border-gray-700"
        }, [
          U(u(r(y)("Filepath")) + " ", 1),
          P(G(ue, {
            direction: L.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [ce, L.active && L.column == "path"]
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
          e("div", Gt, u(f.value), 1)
        ], 512)
      ]),
      e("div", {
        onTouchstart: B,
        onContextmenu: x[10] || (x[10] = ee((m) => r(t).emit("vf-contextmenu-show", { event: m, area: p.value, items: I() }), ["self", "prevent"])),
        class: T([z.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area vf-scrollbar min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: p
      }, [
        M.value.length ? (a(!0), c(H, { key: 0 }, J(se(), (m, E) => (a(), c("div", {
          onDblclick: (C) => q(m),
          onTouchstart: x[4] || (x[4] = (C) => V(C)),
          onTouchend: x[5] || (x[5] = (C) => $()),
          onContextmenu: ee((C) => r(t).emit("vf-contextmenu-show", { event: C, area: p.value, items: I(), target: m }), ["prevent"]),
          class: T(["vf-item-" + r(D), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": m.type,
          "data-item": JSON.stringify(m),
          "data-index": E
        }, [
          e("div", Kt, [
            e("div", Wt, [
              m.type == "dir" ? (a(), c("svg", Xt, Zt)) : (a(), c("svg", es, ss)),
              e("span", os, u(m.basename), 1)
            ]),
            e("div", as, u(m.path), 1)
          ])
        ], 42, Jt))), 256)) : S("", !0),
        l.view == "list" && !M.value.length ? (a(!0), c(H, { key: 1 }, J(se(), (m, E) => (a(), c("div", {
          draggable: "true",
          onDblclick: (C) => q(m),
          onTouchstart: x[6] || (x[6] = (C) => V(C)),
          onTouchend: x[7] || (x[7] = (C) => $()),
          onContextmenu: ee((C) => r(t).emit("vf-contextmenu-show", { event: C, area: p.value, items: I(), target: m }), ["prevent"]),
          onDragstart: (C) => ae(C),
          onDragover: (C) => ie(C, m),
          onDrop: (C) => le(C, m),
          class: T(["vf-item-" + r(D), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": m.type,
          "data-item": JSON.stringify(m),
          "data-index": E
        }, [
          e("div", rs, [
            e("div", ls, [
              m.type == "dir" ? (a(), c("svg", is, cs)) : (a(), c("svg", us, vs)),
              e("span", ps, u(m.basename), 1)
            ]),
            e("div", hs, u(m.file_size ? r(j)(m.file_size) : ""), 1),
            e("div", fs, u(r(Ee)(m.last_modified)), 1)
          ])
        ], 42, ns))), 256)) : S("", !0),
        l.view == "grid" && !M.value.length ? (a(!0), c(H, { key: 2 }, J(se(!1), (m, E) => (a(), c("div", {
          draggable: "true",
          onDblclick: (C) => q(m),
          onTouchstart: x[8] || (x[8] = (C) => V(C)),
          onTouchend: x[9] || (x[9] = (C) => $()),
          onContextmenu: ee((C) => r(t).emit("vf-contextmenu-show", { event: C, area: p.value, items: I(), target: m }), ["prevent"]),
          onDragstart: (C) => ae(C),
          onDragover: (C) => ie(C, m),
          onDrop: (C) => le(C, m),
          class: T(["vf-item-" + r(D), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
          "data-type": m.type,
          "data-item": JSON.stringify(m),
          "data-index": E
        }, [
          e("div", null, [
            e("div", ks, [
              m.type == "dir" ? (a(), c("svg", _s, xs)) : (m.mime_type ?? "").startsWith("image") ? (a(), c("img", {
                key: 1,
                class: "h-10 m-auto lazy md:h-12",
                "data-src": r(xe)(r(o).value, m.path),
                alt: m.basename
              }, null, 8, ws)) : (a(), c("svg", ys, Cs)),
              !(m.mime_type ?? "").startsWith("image") && m.type != "dir" ? (a(), c("div", Ms, u(k(m.extension)), 1)) : S("", !0)
            ]),
            e("span", js, u(r(we)(m.basename)), 1)
          ])
        ], 42, gs))), 256)) : S("", !0)
      ], 34),
      G(Ht)
    ]));
  }
}), Os = { class: "flex min-h-[41px] justify-between p-1 text-xs border-t select-none border-neutral-300 dark:border-gray-700/50" }, zs = { class: "flex items-center leading-5" }, Es = ["aria-label"], As = /* @__PURE__ */ e("svg", {
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
], -1), Fs = [
  As
], Bs = ["value"], Vs = { class: "ml-3" }, Ls = { key: 0 }, Ns = { class: "ml-1" }, Us = {
  name: "VFStatusbar"
}, Ts = /* @__PURE__ */ Object.assign(Us, {
  props: {
    data: Object
  },
  setup(l) {
    const s = b("emitter"), { getStore: n, setStore: t } = b("storage"), i = g([]), v = g(0), o = b("adapter"), k = Oe(() => i.value.length > 0 && i.value[0].type == "file"), { t: p, changeLocale: d, locale: f } = b("i18n"), h = () => {
      s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: o.value } }), t("adapter", o.value);
    }, y = () => s.emit("vf-select-file", i.value[0]);
    s.on("vf-nodes-selected", (z) => {
      i.value = z, v.value = z.length;
    });
    const D = g("");
    return s.on("vf-search-query", ({ newQuery: z }) => {
      D.value = z;
    }), (z, j) => (a(), c("div", Os, [
      e("div", zs, [
        e("div", {
          class: "mx-2",
          "aria-label": r(p)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, Fs, 8, Es),
        P(e("select", {
          "onUpdate:modelValue": j[0] || (j[0] = (w) => ve(o) ? o.value = w : null),
          onChange: h,
          class: "py-0.5 text-sm text-slate-500 border dark:border-gray-600 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (a(!0), c(H, null, J(l.data.storages, (w) => (a(), c("option", { value: w }, u(w), 9, Bs))), 256))
        ], 544), [
          [Ve, r(o)]
        ]),
        e("div", Vs, [
          D.value.length ? (a(), c("span", Ls, u(l.data.files.length) + " items found. ", 1)) : S("", !0),
          e("span", Ns, u(v.value > 0 ? v.value + " " + r(p)("item(s) selected.") : ""), 1)
        ])
      ]),
      k.value ? (a(), c("button", {
        key: 0,
        type: "button",
        onClick: y,
        class: "vf-btn vf-btn-primary min-w-32 py-1"
      }, u(r(p)("Select")), 1)) : S("", !0),
      S("", !0)
    ]));
  }
}), Hs = (l, s = 0, n = !1) => {
  let t;
  return (...i) => {
    n && !t && l(...i), clearTimeout(t), t = setTimeout(() => {
      l(...i);
    }, s);
  };
}, Is = (l, s, n) => {
  const t = g(l);
  return Le((v, o) => ({
    get() {
      return v(), t.value;
    },
    set: Hs(
      (k) => {
        t.value = k, o();
      },
      s,
      n
    )
  }));
}, qs = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, Rs = ["aria-label"], Ps = /* @__PURE__ */ e("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Ys = [
  Ps
], Gs = ["aria-label"], Js = /* @__PURE__ */ e("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Ks = [
  Js
], Ws = ["aria-label"], Xs = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Qs = [
  Xs
], Zs = /* @__PURE__ */ e("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), eo = [
  Zs
], to = { class: "flex leading-5" }, so = /* @__PURE__ */ e("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), oo = ["title", "onClick"], ao = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, no = /* @__PURE__ */ e("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ro = /* @__PURE__ */ e("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), lo = [
  no,
  ro
], io = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 justify-between items-center rounded p-1 ml-2 w-full"
}, co = /* @__PURE__ */ e("div", null, [
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
], -1), uo = ["placeholder"], mo = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), vo = [
  mo
], po = {
  name: "VFBreadcrumb"
}, ho = /* @__PURE__ */ Object.assign(po, {
  props: {
    data: Object
  },
  setup(l) {
    const s = b("emitter");
    b("storage");
    const n = b("adapter"), t = g(null), i = g([]), v = g(!1), o = g(null), k = l, { t: p } = b("i18n"), d = b("loadingState");
    s.on("vf-explorer-update", () => {
      let O = [], $ = [];
      t.value = k.data.dirname ?? n.value + "://", t.value.length == 0 && (i.value = []), t.value.replace(n.value + "://", "").split("/").forEach(function(F) {
        O.push(F), O.join("/") != "" && $.push({
          basename: F,
          name: F,
          path: n.value + "://" + O.join("/"),
          type: "dir"
        });
      }), $.length > 4 && ($ = $.slice(-5), $[0].name = ".."), i.value = $;
    });
    const f = () => {
      v.value = !1, y.value = "";
    };
    s.on("vf-search-exit", () => {
      f();
    });
    const h = () => {
      v.value = !0, ge(() => o.value.focus());
    }, y = Is("", 400), D = () => d.value;
    de(y, (O) => {
      s.emit("vf-toast-clear"), s.emit("vf-search-query", { newQuery: O });
    });
    const z = () => i.value.length && !v.value, j = (O) => {
      O.preventDefault();
      let $ = JSON.parse(O.dataTransfer.getData("items"));
      if ($.find((F) => F.storage != n.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: { from: $, to: i.value[i.value.length - 2] ?? { path: n.value + "://" } }
      });
    }, w = (O) => {
      O.preventDefault(), z() ? O.dataTransfer.dropEffect = "copy" : (O.dataTransfer.dropEffect = "none", O.dataTransfer.effectAllowed = "none");
    }, M = () => {
      y.value == "" && f();
    };
    return (O, $) => (a(), c("div", qs, [
      e("span", {
        "aria-label": r(p)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (a(), c("svg", {
          onDragover: $[0] || ($[0] = (F) => w(F)),
          onDrop: $[1] || ($[1] = (F) => j(F)),
          onClick: $[2] || ($[2] = (F) => {
            var B;
            return !z() || r(s).emit("vf-fetch", { params: { q: "index", adapter: l.data.adapter, path: ((B = i.value[i.value.length - 2]) == null ? void 0 : B.path) ?? r(n) + "://" } });
          }),
          class: T(["h-6 w-6 p-0.5 rounded", z() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Ys, 34))
      ], 8, Rs),
      D() ? (a(), c("span", {
        key: 1,
        "aria-label": r(p)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (a(), c("svg", {
          onClick: $[4] || ($[4] = (F) => r(s).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Qs))
      ], 8, Ws)) : (a(), c("span", {
        key: 0,
        "aria-label": r(p)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (a(), c("svg", {
          onClick: $[3] || ($[3] = (F) => {
            r(s).emit("vf-fetch", { params: { q: "index", adapter: l.data.adapter, path: l.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Ks))
      ], 8, Gs)),
      v.value ? (a(), c("div", io, [
        co,
        P(e("input", {
          ref_key: "searchInput",
          ref: o,
          onKeydown: ne(f, ["esc"]),
          onBlur: M,
          "onUpdate:modelValue": $[6] || ($[6] = (F) => ve(y) ? y.value = F : null),
          placeholder: r(p)("Search anything.."),
          class: "w-full pt-1 pb-0 px-2 border-0 text-sm ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, uo), [
          [re, r(y)]
        ]),
        (a(), c("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: f,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, vo))
      ])) : (a(), c("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: ee(h, ["self"])
      }, [
        (a(), c("svg", {
          onClick: $[5] || ($[5] = (F) => r(s).emit("vf-fetch", { params: { q: "index", adapter: l.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, eo)),
        e("div", to, [
          (a(!0), c(H, null, J(i.value, (F, B) => (a(), c("div", { key: B }, [
            so,
            e("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: F.basename,
              onClick: (V) => r(s).emit("vf-fetch", { params: { q: "index", adapter: l.data.adapter, path: F.path } })
            }, u(F.name), 9, oo)
          ]))), 128))
        ]),
        D() ? (a(), c("svg", ao, lo)) : S("", !0)
      ]))
    ]));
  }
}), fo = ["onClick"], go = /* @__PURE__ */ e("span", { class: "px-1" }, null, -1), ko = {
  name: "VFContextMenu"
}, _o = /* @__PURE__ */ Object.assign(ko, {
  props: {
    current: Object
  },
  setup(l) {
    const s = b("emitter"), n = g(null), { apiUrl: t } = Q(), i = b("root"), v = l, o = me({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), k = g([]);
    s.on("vf-context-selected", (D) => {
      k.value = D;
    });
    const { t: p } = b("i18n"), d = {
      newfolder: {
        title: () => p("New Folder"),
        action: () => {
          s.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => p("Delete"),
        action: () => {
          s.emit("vf-modal-show", { type: "delete", items: k });
        }
      },
      refresh: {
        title: () => p("Refresh"),
        action: () => {
          s.emit("vf-fetch", { params: { q: "index", adapter: v.current.adapter, path: v.current.dirname } });
        }
      },
      preview: {
        title: () => p("Preview"),
        action: () => {
          s.emit("vf-modal-show", { type: "preview", adapter: v.current.adapter, item: k.value[0] });
        }
      },
      open: {
        title: () => p("Open"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: v.current.adapter, path: k.value[0].path } });
        }
      },
      openDir: {
        title: () => p("Open containing folder"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: v.current.adapter, path: k.value[0].dir } });
        }
      },
      download: {
        title: () => p("Download"),
        action: () => {
          const D = t.value + "?" + oe({ q: "download", adapter: v.current.adapter, path: k.value[0].path });
          s.emit("vf-download", D);
        }
      },
      archive: {
        title: () => p("Archive"),
        action: () => {
          s.emit("vf-modal-show", { type: "archive", items: k });
        }
      },
      unarchive: {
        title: () => p("Unarchive"),
        action: () => {
          s.emit("vf-modal-show", { type: "unarchive", items: k });
        }
      },
      rename: {
        title: () => p("Rename"),
        action: () => {
          s.emit("vf-modal-show", { type: "rename", items: k });
        }
      }
    }, f = (D) => {
      s.emit("vf-contextmenu-hide"), D.action();
    }, h = g("");
    s.on("vf-search-query", ({ newQuery: D }) => {
      h.value = D;
    }), s.on("vf-contextmenu-show", ({ event: D, area: z, items: j, target: w = null }) => {
      if (o.items = [], h.value)
        if (w)
          o.items.push(d.openDir), s.emit("vf-context-selected", [w]);
        else
          return;
      else
        !w && !h.value ? (o.items.push(d.refresh), o.items.push(d.newfolder), s.emit("vf-context-selected", [])) : j.length > 1 && j.some((M) => M.path === w.path) ? (o.items.push(d.refresh), o.items.push(d.archive), o.items.push(d.delete), s.emit("vf-context-selected", j)) : (w.type == "dir" ? o.items.push(d.open) : (o.items.push(d.preview), o.items.push(d.download)), o.items.push(d.rename), w.mime_type == "application/zip" ? o.items.push(d.unarchive) : o.items.push(d.archive), o.items.push(d.delete), s.emit("vf-context-selected", [w]));
      y(D, z);
    }), s.on("vf-contextmenu-hide", () => {
      o.active = !1;
    });
    const y = (D, z) => {
      o.active = !0, ge(() => {
        const j = i.value.getBoundingClientRect(), w = z.getBoundingClientRect();
        let M = D.pageX - j.left, O = D.pageY - j.top, $ = n.value.offsetHeight, F = n.value.offsetWidth;
        M = w.right - D.pageX + window.scrollX < F ? M - F : M, O = w.bottom - D.pageY + window.scrollY < $ ? O - $ : O, o.positions = {
          left: M + "px",
          top: O + "px"
        };
      });
    };
    return (D, z) => o.active ? (a(), c("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: n,
      style: ze(o.positions)
    }, [
      (a(!0), c(H, null, J(o.items, (j) => (a(), c("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: j.title,
        onClick: (w) => f(j)
      }, [
        go,
        e("span", null, u(j.title()), 1)
      ], 8, fo))), 128))
    ], 4)) : S("", !0);
  }
}), bo = (l, s) => {
  const n = l[s];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((t, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + s)));
  });
};
async function xo(l) {
  return (await bo(/* @__PURE__ */ Object.assign({ "../locales/de.js": () => import("./de-3f6147f5.js"), "../locales/en.js": () => import("./en-ffed8966.js"), "../locales/fa.js": () => import("./fa-7534f880.js"), "../locales/he.js": () => import("./he-1978fb6e.js"), "../locales/hi.js": () => import("./hi-ffd5a2ba.js"), "../locales/ru.js": () => import("./ru-9f317caf.js"), "../locales/sv.js": () => import("./sv-07e3c393.js"), "../locales/tr.js": () => import("./tr-ce32e2ae.js"), "../locales/zhCN.js": () => import("./zhCN-9b524820.js"), "../locales/zhTW.js": () => import("./zhTW-a803434e.js") }), `../locales/${l}.js`)).default;
}
function wo(l, s, n) {
  const { getStore: t, setStore: i } = be(l), v = g({}), o = g(t("locale", s)), k = (f, h = "en") => {
    xo(f).then((y) => {
      v.value = y, i("locale", f), o.value = f, i("translations", y), n.emit("vf-toast-push", { label: "The language is set to " + f });
    }).catch((y) => {
      h ? (n.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), k(h, null)) : n.emit("vf-toast-push", { label: "Locale cannot be loaded!", type: "error" });
    });
  };
  t("locale") ? v.value = t("translations") : k(s);
  const p = (f, ...h) => h.length ? p(f = f.replace("%s", h.shift()), ...h) : f;
  function d(f, ...h) {
    return v.value.hasOwnProperty(f) ? p(v.value[f], ...h) : p(f, ...h);
  }
  return { t: d, changeLocale: k, locale: o };
}
function Ce(l, s, n, t, i) {
  return (s = Math, n = s.log, t = 1024, i = n(l) / n(t) | 0, l / s.pow(t, i)).toFixed(0) + " " + (i ? "KMGTPEZY"[--i] + "iB" : "B");
}
function Me(l, s, n, t, i) {
  return (s = Math, n = s.log, t = 1e3, i = n(l) / n(t) | 0, l / s.pow(t, i)).toFixed(0) + " " + (i ? "KMGTPEZY"[--i] + "B" : "B");
}
function yo(l) {
  const s = { k: 1, m: 2, g: 3, t: 4 }, t = /(\d+(?:\.\d+)?)\s?(k|m|g|t)?b?/i.exec(l);
  return t[1] * Math.pow(1024, s[t[2].toLowerCase()]);
}
const $o = /* @__PURE__ */ e("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), Co = {
  name: "VueFinder"
}, Mo = /* @__PURE__ */ Object.assign(Co, {
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
  setup(l, { emit: s }) {
    const n = l, t = Te(), { setStore: i, getStore: v } = be(n.id), o = g(v("adapter")), k = s, p = g(null);
    Y("root", p), Y("emitter", t), Y("storage", be(n.id)), Y("postData", n.postData), Y("adapter", o), Y("maxFileSize", n.maxFileSize), Y("usePropDarkMode", n.usePropDarkMode);
    const d = wo(n.id, n.locale, t);
    Y("i18n", d);
    const { apiUrl: f, setApiUrl: h } = Q();
    h(n.url);
    const y = me({ adapter: o.value, storages: [], dirname: ".", files: [] }), D = g(v("viewport", "grid")), z = n.usePropDarkMode ? Oe(() => n.dark) : g(v("darkMode", n.dark));
    Y("darkMode", z), t.on("vf-darkMode-toggle", () => {
      z.value = !z.value, i("darkMode", z.value);
    });
    const j = g(v("metricUnits", !1));
    Y("metricUnits", j);
    const w = g(j.value ? Me : Ce);
    de(j, (V) => {
      w.value = V ? Me : Ce;
    }), Y("filesize", w), t.on("vf-metric-units-saved", (V) => {
      j.value = V, i("metricUnits", V);
    });
    const M = g(!1);
    Y("loadingState", M);
    const O = g(v("full-screen", !1));
    t.on("vf-fullscreen-toggle", () => {
      O.value = !O.value, i("full-screen", O.value);
    }), t.on("vf-view-toggle", (V) => {
      D.value = V;
    });
    const $ = me({
      active: !1,
      type: "delete",
      data: {}
    });
    t.on("vf-modal-close", () => {
      $.active = !1;
    }), t.on("vf-modal-show", (V) => {
      $.active = !0, $.type = V.type, $.data = V;
    }), t.on("vf-select-file", (V) => {
      k("select", V);
    });
    const F = (V) => {
      Object.assign(y, V), t.emit("vf-nodes-selected", {}), t.emit("vf-select-file", {}), t.emit("vf-explorer-update");
    };
    let B;
    return t.on("vf-fetch-abort", () => {
      B.abort(), M.value = !1;
    }), t.on("vf-fetch", ({ params: V, onSuccess: q = null, onError: L = null, noCloseModal: se = !1 }) => {
      ["index", "search"].includes(V.q) && (B && B.abort(), M.value = !0), B = new AbortController();
      const te = B.signal;
      fe(f.value, { params: V, signal: te }).then((I) => {
        o.value = I.adapter, ["index", "search"].includes(V.q) && (M.value = !1), se || t.emit("vf-modal-close"), I.files = I.files.filter((ae) => ae.basename.charAt(0) != "."), F(I), q(I);
      }).catch((I) => {
        L && L(I);
      }).finally(() => {
      });
    }), t.on("vf-download", (V) => {
      document.getElementById("download_frame").src = V, t.emit("vf-modal-close");
    }), K(() => {
      t.emit("vf-fetch", { params: { q: "index", adapter: o.value } });
    }), (V, q) => (a(), c("div", {
      class: "vuefinder",
      ref_key: "root",
      ref: p
    }, [
      e("div", {
        class: T(r(z) ? "dark" : "")
      }, [
        e("div", {
          class: T([O.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "flex flex-col text-gray-700 bg-white border select-none dark:bg-gray-800 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min"]),
          style: ze(O.value ? "" : "max-height: " + l.maxHeight),
          onMousedown: q[0] || (q[0] = (L) => r(t).emit("vf-contextmenu-hide")),
          onTouchstart: q[1] || (q[1] = (L) => r(t).emit("vf-contextmenu-hide"))
        }, [
          l.toolbar ? (a(), N(zt, {
            key: 0,
            data: y,
            "toolbar-sets": l.toolbarSets,
            "hidden-toolbar-sets": l.hiddenToolbarSets
          }, null, 8, ["data", "toolbar-sets", "hidden-toolbar-sets"])) : S("", !0),
          G(ho, { data: y }, null, 8, ["data"]),
          G(Ds, {
            view: D.value,
            data: y
          }, null, 8, ["view", "data"]),
          G(Ts, { data: y }, null, 8, ["data"])
        ], 38),
        $.active ? (a(), N(Ne("v-f-modal-" + $.type), {
          key: 0,
          selection: $.data,
          current: y
        }, null, 8, ["selection", "current"])) : S("", !0),
        G(_o, { current: y }, null, 8, ["current"]),
        $o
      ], 2)
    ], 512));
  }
}), jo = /* @__PURE__ */ e("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), So = { class: "fixed z-10 inset-0 overflow-hidden" }, Do = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, Oo = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, zo = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, W = {
  __name: "ModalLayout",
  setup(l) {
    const s = b("emitter");
    return K(() => {
      const n = document.querySelector(".v-f-modal input");
      n && n.focus();
    }), (n, t) => (a(), c("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: t[1] || (t[1] = ne((i) => r(s).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      jo,
      e("div", So, [
        e("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: t[0] || (t[0] = ee((i) => r(s).emit("vf-modal-close"), ["self"]))
        }, [
          e("div", Do, [
            e("div", Oo, [
              pe(n.$slots, "default")
            ]),
            e("div", zo, [
              pe(n.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Eo = ["aria-label"], Ao = /* @__PURE__ */ e("svg", {
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
], -1), Fo = [
  Ao
], Bo = {
  name: "Message"
}, Z = /* @__PURE__ */ Object.assign(Bo, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(l, { emit: s }) {
    var p;
    const { t: n } = b("i18n"), t = g(!1), i = g(null), v = g((p = i.value) == null ? void 0 : p.strMessage), o = s;
    de(v, () => t.value = !1);
    const k = () => {
      o("hidden"), t.value = !0;
    };
    return (d, f) => (a(), c("div", null, [
      t.value ? S("", !0) : (a(), c("div", {
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
        }, Fo, 8, Eo)
      ], 2))
    ]));
  }
}), Vo = { class: "sm:flex sm:items-start" }, Lo = /* @__PURE__ */ e("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), No = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Uo = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, To = { class: "mt-2" }, Ho = { class: "text-sm text-gray-500" }, Io = {
  class: "text-gray-500 text-sm mb-1 overflow-auto vf-scrollbar",
  style: { "max-height": "200px" }
}, qo = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Ro = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Po = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Yo = [
  Po
], Go = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Jo = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ko = [
  Jo
], Wo = { class: "ml-1.5" }, Xo = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, Qo = {
  name: "VFModalDelete"
}, Zo = /* @__PURE__ */ Object.assign(Qo, {
  props: {
    selection: Object,
    current: Object
  },
  setup(l) {
    const s = b("emitter");
    b("storage");
    const n = b("adapter"), { t } = b("i18n"), i = l, v = g(i.selection.items), o = g(""), k = () => {
      v.value.length && s.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: n.value,
          path: i.current.dirname,
          items: JSON.stringify(v.value.map(({ path: p, type: d }) => ({ path: p, type: d })))
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: t("Files deleted.") });
        },
        onError: (p) => {
          o.value = t(p.message);
        }
      });
    };
    return (p, d) => (a(), N(W, null, {
      buttons: A(() => [
        e("button", {
          type: "button",
          onClick: k,
          class: "vf-btn vf-btn-danger"
        }, u(r(t)("Yes, Delete!")), 1),
        e("button", {
          type: "button",
          onClick: d[1] || (d[1] = (f) => r(s).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, u(r(t)("Cancel")), 1),
        e("div", Xo, u(r(t)("This action cannot be undone.")), 1)
      ]),
      default: A(() => [
        e("div", Vo, [
          Lo,
          e("div", No, [
            e("h3", Uo, u(r(t)("Delete files")), 1),
            e("div", To, [
              e("p", Ho, u(r(t)("Are you sure you want to delete these files?")), 1),
              e("div", Io, [
                (a(!0), c(H, null, J(v.value, (f) => (a(), c("p", qo, [
                  f.type === "dir" ? (a(), c("svg", Ro, Yo)) : (a(), c("svg", Go, Ko)),
                  e("span", Wo, u(f.basename), 1)
                ]))), 256))
              ]),
              o.value.length ? (a(), N(Z, {
                key: 0,
                onHidden: d[0] || (d[0] = (f) => o.value = ""),
                error: ""
              }, {
                default: A(() => [
                  U(u(o.value), 1)
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
], -1), sa = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, oa = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, aa = { class: "mt-2" }, na = { class: "text-sm text-gray-500" }, ra = {
  name: "VFModalMessage"
}, la = /* @__PURE__ */ Object.assign(ra, {
  props: {
    selection: Object
  },
  setup(l) {
    const s = b("emitter"), { t: n } = b("i18n");
    return (t, i) => (a(), N(W, null, {
      buttons: A(() => [
        e("button", {
          type: "button",
          onClick: i[0] || (i[0] = (v) => r(s).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, u(r(n)("Close")), 1)
      ]),
      default: A(() => {
        var v, o;
        return [
          e("div", ea, [
            ta,
            e("div", sa, [
              e("h3", oa, u(((v = l.selection) == null ? void 0 : v.title) ?? "Title"), 1),
              e("div", aa, [
                e("p", na, u(((o = l.selection) == null ? void 0 : o.message) ?? "Message"), 1)
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
    const s = b("emitter");
    b("storage");
    const n = b("adapter"), { t } = b("i18n"), i = l, v = g(""), o = g(""), k = () => {
      v.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: n.value,
          path: i.current.dirname,
          name: v.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: t("%s is created.", v.value) });
        },
        onError: (p) => {
          o.value = t(p.message);
        }
      });
    };
    return (p, d) => (a(), N(W, null, {
      buttons: A(() => [
        e("button", {
          type: "button",
          onClick: k,
          class: "vf-btn vf-btn-primary"
        }, u(r(t)("Create")), 1),
        e("button", {
          type: "button",
          onClick: d[2] || (d[2] = (f) => r(s).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, u(r(t)("Cancel")), 1)
      ]),
      default: A(() => [
        e("div", ia, [
          da,
          e("div", ca, [
            e("h3", ua, u(r(t)("New Folder")), 1),
            e("div", ma, [
              e("p", va, u(r(t)("Create a new folder")), 1),
              P(e("input", {
                "onUpdate:modelValue": d[0] || (d[0] = (f) => v.value = f),
                onKeyup: ne(k, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: r(t)("Folder Name"),
                type: "text"
              }, null, 40, pa), [
                [re, v.value]
              ]),
              o.value.length ? (a(), N(Z, {
                key: 0,
                onHidden: d[1] || (d[1] = (f) => o.value = ""),
                error: ""
              }, {
                default: A(() => [
                  U(u(o.value), 1)
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
], -1), _a = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ba = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, xa = { class: "mt-2" }, wa = { class: "text-sm text-gray-500" }, ya = ["placeholder"], $a = {
  name: "VFModalNewFile"
}, Ca = /* @__PURE__ */ Object.assign($a, {
  props: {
    selection: Object,
    current: Object
  },
  setup(l) {
    const s = b("emitter");
    b("storage");
    const n = b("adapter"), { t } = b("i18n"), i = l, v = g(""), o = g(""), k = () => {
      v.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: n.value,
          path: i.current.dirname,
          name: v.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: t("%s is created.", v.value) });
        },
        onError: (p) => {
          o.value = t(p.message);
        }
      });
    };
    return (p, d) => (a(), N(W, null, {
      buttons: A(() => [
        e("button", {
          type: "button",
          onClick: k,
          class: "vf-btn vf-btn-primary"
        }, u(r(t)("Create")), 1),
        e("button", {
          type: "button",
          onClick: d[2] || (d[2] = (f) => r(s).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, u(r(t)("Cancel")), 1)
      ]),
      default: A(() => [
        e("div", ga, [
          ka,
          e("div", _a, [
            e("h3", ba, u(r(t)("New File")), 1),
            e("div", xa, [
              e("p", wa, u(r(t)("Create a new file")), 1),
              P(e("input", {
                "onUpdate:modelValue": d[0] || (d[0] = (f) => v.value = f),
                onKeyup: ne(k, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: r(t)("File Name"),
                type: "text"
              }, null, 40, ya), [
                [re, v.value]
              ]),
              o.value.length ? (a(), N(Z, {
                key: 0,
                onHidden: d[1] || (d[1] = (f) => o.value = ""),
                error: ""
              }, {
                default: A(() => [
                  U(u(o.value), 1)
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
  setup(l, { emit: s }) {
    const n = s, t = g(""), i = g(""), v = g(null), o = g(!1), { apiUrl: k } = Q(), p = l, d = g(""), f = g(!1), { t: h } = b("i18n");
    K(() => {
      fe(k.value, {
        params: { q: "preview", adapter: p.selection.adapter, path: p.selection.item.path },
        json: !1
      }).then((j) => {
        t.value = j, n("load");
      });
    });
    const y = () => {
      o.value = !o.value, i.value = t.value, o.value == !0 && ge(() => {
        v.value.focus();
      });
    }, D = b("postData"), z = () => {
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
        d.value = h("Updated."), t.value = j, n("load"), o.value = !o.value;
      }).catch((j) => {
        d.value = h(j.message), f.value = !0;
      });
    };
    return (j, w) => (a(), c(H, null, [
      e("div", Ma, [
        e("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": l.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, u(l.selection.item.basename), 9, ja),
        e("div", Sa, [
          o.value ? (a(), c("button", {
            key: 0,
            onClick: z,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, u(r(h)("Save")), 1)) : S("", !0),
          e("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: w[0] || (w[0] = (M) => y())
          }, u(o.value ? r(h)("Cancel") : r(h)("Edit")), 1)
        ])
      ]),
      e("div", null, [
        o.value ? (a(), c("div", Oa, [
          P(e("textarea", {
            ref_key: "editInput",
            ref: v,
            "onUpdate:modelValue": w[1] || (w[1] = (M) => i.value = M),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [re, i.value]
          ])
        ])) : (a(), c("pre", Da, u(t.value), 1)),
        d.value.length ? (a(), N(Z, {
          key: 2,
          onHidden: w[2] || (w[2] = (M) => d.value = ""),
          error: f.value
        }, {
          default: A(() => [
            U(u(d.value), 1)
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
  setup(l, { emit: s }) {
    const n = s, t = l, { t: i } = b("i18n"), { apiUrl: v } = Q(), o = g(null), k = g(null), p = g(!1), d = g(""), f = g(!1), h = () => {
      p.value = !p.value, p.value ? k.value = new qe(o.value, {
        crop(z) {
        }
      }) : k.value.destroy();
    }, y = b("postData"), D = () => {
      k.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (z) => {
          d.value = "", f.value = !1, fe(v.value, {
            method: "POST",
            params: Object.assign(y, {
              q: "upload",
              adapter: t.selection.adapter,
              path: t.selection.item.path,
              file: z
            }),
            name: t.selection.item.basename,
            json: !1
          }).then((j) => {
            d.value = i("Updated."), o.value.src = xe(t.selection.adapter, t.selection.item.path), h(), n("load");
          }).catch((j) => {
            d.value = i(j.message), f.value = !0;
          });
        }
      );
    };
    return K(() => {
      n("load");
    }), (z, j) => (a(), c(H, null, [
      e("div", Ea, [
        e("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": l.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, u(l.selection.item.basename), 9, Aa),
        e("div", Fa, [
          p.value ? (a(), c("button", {
            key: 0,
            onClick: D,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, u(r(i)("Crop")), 1)) : S("", !0),
          e("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: j[0] || (j[0] = (w) => h())
          }, u(p.value ? r(i)("Cancel") : r(i)("Edit")), 1)
        ])
      ]),
      e("div", Ba, [
        e("img", {
          ref_key: "image",
          ref: o,
          class: "max-w-[50vh] max-h-[50vh]",
          src: r(xe)(t.selection.adapter, t.selection.item.path),
          alt: ""
        }, null, 8, Va)
      ]),
      d.value.length ? (a(), N(Z, {
        key: 0,
        onHidden: j[1] || (j[1] = (w) => d.value = ""),
        error: f.value
      }, {
        default: A(() => [
          U(u(d.value), 1)
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
  setup(l, { emit: s }) {
    const n = s;
    return K(() => {
      n("load");
    }), (t, i) => (a(), c(H, null, [
      e("div", Na, [
        e("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": l.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, u(l.selection.item.basename), 9, Ua)
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
  setup(l, { emit: s }) {
    const { apiUrl: n } = Q(), t = l, i = s, v = () => n.value + "?" + oe({ q: "preview", adapter: t.selection.adapter, path: t.selection.item.path });
    return K(() => {
      i("load");
    }), (o, k) => (a(), c(H, null, [
      e("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": l.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, u(l.selection.item.basename), 9, Ia),
      e("div", null, [
        e("video", qa, [
          e("source", {
            src: v(),
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
  setup(l, { emit: s }) {
    const { apiUrl: n } = Q(), t = l, i = s, v = () => n.value + "?" + oe({ q: "preview", adapter: t.selection.adapter, path: t.selection.item.path });
    return K(() => {
      i("load");
    }), (o, k) => (a(), c(H, null, [
      e("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": l.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, u(l.selection.item.basename), 9, Ya),
      e("div", null, [
        e("audio", Ga, [
          e("source", {
            src: v(),
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
  setup(l, { emit: s }) {
    const { apiUrl: n } = Q(), t = l, i = s, v = () => n.value + "?" + oe({ q: "preview", adapter: t.selection.adapter, path: t.selection.item.path });
    return K(() => {
      i("load");
    }), (o, k) => (a(), c(H, null, [
      e("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": l.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, u(l.selection.item.basename), 9, Wa),
      e("div", null, [
        e("object", {
          class: "h-[60vh]",
          data: v(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          e("iframe", {
            class: "border-0",
            src: v(),
            width: "100%",
            height: "100%"
          }, en, 8, Qa)
        ], 8, Xa)
      ])
    ], 64));
  }
}, sn = { class: "sm:flex sm:items-start" }, on = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, an = { class: "text-gray-700 dark:text-gray-200 text-sm" }, nn = {
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
    const { apiUrl: s } = Q(), n = b("emitter"), { t } = b("i18n"), i = g(!1), v = b("filesize"), o = (f) => i.value = f, k = l, p = (f) => (k.selection.item.mime_type ?? "").startsWith(f), d = () => {
      const f = s.value + "?" + oe({ q: "download", adapter: k.selection.adapter, path: k.selection.item.path });
      n.emit("vf-download", f);
    };
    return (f, h) => (a(), N(W, null, {
      buttons: A(() => [
        e("button", {
          type: "button",
          onClick: h[6] || (h[6] = (y) => r(n).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, u(r(t)("Close")), 1),
        e("button", {
          type: "button",
          onClick: h[7] || (h[7] = (y) => d()),
          class: "vf-btn vf-btn-primary"
        }, u(r(t)("Download")), 1)
      ]),
      default: A(() => [
        e("div", sn, [
          e("div", on, [
            e("div", null, [
              p("text") ? (a(), N(za, {
                key: 0,
                selection: l.selection,
                onLoad: h[0] || (h[0] = (y) => o(!0))
              }, null, 8, ["selection"])) : p("image") ? (a(), N(La, {
                key: 1,
                selection: l.selection,
                onLoad: h[1] || (h[1] = (y) => o(!0))
              }, null, 8, ["selection"])) : p("video") ? (a(), N(Pa, {
                key: 2,
                selection: l.selection,
                onLoad: h[2] || (h[2] = (y) => o(!0))
              }, null, 8, ["selection"])) : p("audio") ? (a(), N(Ka, {
                key: 3,
                selection: l.selection,
                onLoad: h[3] || (h[3] = (y) => o(!0))
              }, null, 8, ["selection"])) : p("application/pdf") ? (a(), N(tn, {
                key: 4,
                selection: l.selection,
                onLoad: h[4] || (h[4] = (y) => o(!0))
              }, null, 8, ["selection"])) : (a(), N(Ha, {
                key: 5,
                selection: l.selection,
                onLoad: h[5] || (h[5] = (y) => o(!0))
              }, null, 8, ["selection"]))
            ]),
            e("div", an, [
              i.value == !1 ? (a(), c("div", nn, [
                rn,
                e("span", null, u(r(t)("Loading")), 1)
              ])) : S("", !0)
            ])
          ])
        ]),
        e("div", ln, [
          e("div", null, [
            e("span", dn, u(r(t)("File Size")) + ": ", 1),
            U(u(r(v)(l.selection.item.file_size)), 1)
          ]),
          e("div", null, [
            e("span", cn, u(r(t)("Last Modified")) + ": ", 1),
            U(" " + u(r(Ee)(l.selection.item.last_modified)), 1)
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
}, bn = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), xn = [
  bn
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
    const s = b("emitter");
    b("storage");
    const n = b("adapter"), { t } = b("i18n"), i = l, v = g(i.selection.items[0]), o = g(i.selection.items[0].basename), k = g(""), p = () => {
      o.value != "" && s.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: n.value,
          path: i.current.dirname,
          item: v.value.path,
          name: o.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: t("%s is renamed.", o.value) });
        },
        onError: (d) => {
          k.value = t(d.message);
        }
      });
    };
    return (d, f) => (a(), N(W, null, {
      buttons: A(() => [
        e("button", {
          type: "button",
          onClick: p,
          class: "vf-btn vf-btn-primary"
        }, u(r(t)("Rename")), 1),
        e("button", {
          type: "button",
          onClick: f[2] || (f[2] = (h) => r(s).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, u(r(t)("Cancel")), 1)
      ]),
      default: A(() => [
        e("div", vn, [
          pn,
          e("div", hn, [
            e("h3", fn, u(r(t)("Rename")), 1),
            e("div", gn, [
              e("p", kn, [
                v.value.type == "dir" ? (a(), c("svg", _n, xn)) : (a(), c("svg", wn, $n)),
                e("span", Cn, u(v.value.basename), 1)
              ]),
              P(e("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (h) => o.value = h),
                onKeyup: ne(p, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 544), [
                [re, o.value]
              ]),
              k.value.length ? (a(), N(Z, {
                key: 0,
                onHidden: f[1] || (f[1] = (h) => k.value = ""),
                error: ""
              }, {
                default: A(() => [
                  U(u(k.value), 1)
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
    const { apiUrl: s } = Q(), n = b("emitter"), { t } = b("i18n"), i = b("maxFileSize"), v = b("postData"), o = b("filesize"), k = l, p = t("uppy"), d = {
      PENDING: 0,
      CANCELED: 1,
      UPLOADING: 2,
      ERROR: 3,
      DONE: 10
    }, f = g({ QUEUE_ENTRY_STATUS: d }), h = g(null), y = g(null), D = g(null), z = g(null), j = g(null), w = g(null), M = g([]), O = g(""), $ = g(!1), F = g(!1);
    let B;
    function V(_) {
      return M.value.findIndex((x) => x.id === _);
    }
    function q(_, x = null) {
      x = x ?? (_.webkitRelativePath || _.name), B.addFile({
        name: x,
        type: _.type,
        data: _,
        source: "Local"
      });
    }
    function L(_) {
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
    const se = (_) => {
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
      z.value.click();
    }
    function I() {
      if (!$.value) {
        if (!M.value.filter((_) => _.status !== d.DONE).length) {
          O.value = t("Please select file to upload first.");
          return;
        }
        O.value = "", B.retryAll(), B.upload();
      }
    }
    function ae() {
      B.cancelAll({ reason: "user" }), M.value.forEach((_) => {
        _.status !== d.DONE && (_.status = d.CANCELED, _.statusName = t("Canceled"));
      }), $.value = !1;
    }
    function le(_) {
      $.value || (B.removeFile(_.id, "removed-by-user"), M.value.splice(V(_.id), 1));
    }
    function ie(_) {
      if (!$.value) {
        if (B.cancelAll({ reason: "user" }), _) {
          const x = [];
          M.value.forEach((m) => {
            m.status !== d.DONE && x.push(m);
          }), M.value = [], x.forEach((m) => {
            q(m.originalFile, m.name);
          });
          return;
        }
        M.value.splice(0);
      }
    }
    function ke() {
      n.emit("vf-modal-close");
    }
    return K(async () => {
      B = new Re({
        debug: process.env.NODE_ENV === "development",
        restrictions: {
          maxFileSize: yo(i)
          //maxNumberOfFiles
          //allowedFileTypes
        },
        locale: p,
        onBeforeFileAdded(m, E) {
          if (E[m.id] != null) {
            const R = V(m.id);
            M.value[R].status === d.PENDING && (O.value = B.i18n("noDuplicates", { fileName: m.name })), M.value = M.value.filter((X) => X.id !== m.id);
          }
          return M.value.push({
            id: m.id,
            name: m.name,
            size: o.value(m.size),
            status: d.PENDING,
            statusName: t("Pending upload"),
            percent: null,
            originalFile: m.data
          }), !0;
        }
      }), B.use(Pe, {
        method: "post",
        endpoint: s.value + "?" + oe(Object.assign(v, { q: "upload", adapter: k.current.adapter, path: k.current.dirname })),
        headers: {
          ...he && { "X-CSRF-Token": he }
        },
        limit: 5,
        timeout: 0,
        getResponseError(m, E) {
          let C;
          try {
            C = JSON.parse(m).message;
          } catch {
            C = t("Cannot parse server response.");
          }
          return new Error(C);
        }
      }), B.on("restriction-failed", (m, E) => {
        const C = M.value[V(m.id)];
        le(C), O.value = E.message;
      }), B.on("upload", () => {
        $.value = !0, M.value.forEach((m) => {
          m.status !== d.DONE && (m.percent = null, m.status = d.UPLOADING, m.statusName = t("Pending upload"));
        });
      }), B.on("upload-progress", (m, E) => {
        const C = Math.floor(E.bytesUploaded / E.bytesTotal * 100);
        M.value[V(m.id)].percent = `${C}%`;
      }), B.on("upload-success", (m) => {
        const E = M.value[V(m.id)];
        E.status = d.DONE, E.statusName = t("Done");
      }), B.on("upload-error", (m, E) => {
        const C = M.value[V(m.id)];
        C.percent = null, C.status = d.ERROR, E.isNetworkError ? C.statusName = t("Network Error, Unable establish connection to the server or interrupted.") : C.statusName = E ? E.message : t("Unknown Error");
      }), B.on("error", (m) => {
        O.value = m.message, $.value = !1, n.emit("vf-fetch", {
          params: { q: "index", adapter: k.current.adapter, path: k.current.dirname },
          noCloseModal: !0
        });
      }), B.on("complete", () => {
        $.value = !1, n.emit("vf-fetch", {
          params: { q: "index", adapter: k.current.adapter, path: k.current.dirname },
          noCloseModal: !0
        });
      }), z.value.addEventListener("click", () => {
        y.value.click();
      }), j.value.addEventListener("click", () => {
        D.value.click();
      }), w.value.addEventListener("dragover", (m) => {
        m.preventDefault(), F.value = !0;
      }), w.value.addEventListener("dragleave", (m) => {
        m.preventDefault(), F.value = !1;
      });
      function _(m, E) {
        E.isFile && E.file((C) => m(E, C)), E.isDirectory && E.createReader().readEntries((C) => {
          C.forEach((R) => {
            _(m, R);
          });
        });
      }
      w.value.addEventListener("drop", (m) => {
        m.preventDefault(), F.value = !1;
        const E = /^[/\\](.+)/;
        [...m.dataTransfer.items].forEach((C) => {
          C.kind === "file" && _((R, X) => {
            const Ae = E.exec(R.fullPath);
            q(X, Ae[1]);
          }, C.webkitGetAsEntry());
        });
      });
      const x = ({ target: m }) => {
        const E = m.files;
        for (const C of E)
          q(C);
      };
      y.value.addEventListener("change", x), D.value.addEventListener("change", x);
    }), De(() => {
      B == null || B.close({ reason: "unmount" });
    }), (_, x) => (a(), N(W, null, {
      buttons: A(() => [
        e("button", {
          type: "button",
          class: T(["vf-btn vf-btn-primary", $.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500"]),
          disabled: $.value,
          onClick: ee(I, ["prevent"])
        }, u(r(t)("Upload")), 11, Jn),
        $.value ? (a(), c("button", {
          key: 0,
          type: "button",
          class: "vf-btn vf-btn-secondary",
          onClick: ee(ae, ["prevent"])
        }, u(r(t)("Cancel")), 1)) : (a(), c("button", {
          key: 1,
          type: "button",
          class: "vf-btn vf-btn-secondary",
          onClick: ee(ke, ["prevent"])
        }, u(r(t)("Close")), 1))
      ]),
      default: A(() => [
        e("div", Sn, [
          Dn,
          e("div", On, [
            e("h3", zn, u(r(t)("Upload Files")), 1),
            e("div", En, [
              e("div", {
                ref_key: "dropArea",
                ref: w,
                class: "flex items-center justify-center text-lg mb-4 text-gray-500 border-2 border-gray-300 rounded border-dashed select-none cursor-pointer dark:border-gray-600 h-[120px]",
                onClick: te
              }, [
                F.value ? (a(), c("div", An, u(r(t)("Release to drop these files.")), 1)) : (a(), c("div", Fn, u(r(t)("Drag and drop the files/folders to here or click here.")), 1))
              ], 512),
              e("div", {
                ref_key: "container",
                ref: h,
                class: "text-gray-500 mb-1"
              }, [
                e("button", {
                  ref_key: "pickFiles",
                  ref: z,
                  type: "button",
                  class: "vf-btn vf-btn-secondary"
                }, u(r(t)("Select Files")), 513),
                e("button", {
                  ref_key: "pickFolders",
                  ref: j,
                  type: "button",
                  class: "vf-btn vf-btn-secondary"
                }, u(r(t)("Select Folders")), 513),
                e("button", {
                  type: "button",
                  class: "vf-btn vf-btn-secondary",
                  disabled: $.value,
                  onClick: x[0] || (x[0] = (m) => ie(!1))
                }, u(r(t)("Clear all")), 9, Bn),
                e("button", {
                  type: "button",
                  class: "vf-btn vf-btn-secondary",
                  disabled: $.value,
                  onClick: x[1] || (x[1] = (m) => ie(!0))
                }, u(r(t)("Clear only successful")), 9, Vn)
              ], 512),
              e("div", Ln, [
                (a(!0), c(H, null, J(M.value, (m) => (a(), c("div", {
                  class: "flex hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300",
                  key: m.id
                }, [
                  e("span", Nn, [
                    e("span", {
                      class: T(["text-base m-auto", L(m)]),
                      textContent: u(se(m))
                    }, null, 10, Un)
                  ]),
                  e("div", Tn, [
                    e("div", Hn, u(r(we)(m.name, 40)) + " (" + u(m.size) + ")", 1),
                    e("div", In, u(r(we)(m.name, 16)) + " (" + u(m.size) + ")", 1),
                    e("div", {
                      class: T(["flex break-all text-left", L(m)])
                    }, [
                      U(u(m.statusName) + " ", 1),
                      m.status === f.value.QUEUE_ENTRY_STATUS.UPLOADING ? (a(), c("b", qn, u(m.percent), 1)) : S("", !0)
                    ], 2)
                  ]),
                  e("button", {
                    type: "button",
                    class: T(["rounded w-5 h-5 border-1 text-base leading-none font-medium focus:outline-none dark:border-gray-200 dark:text-gray-400 dark:hover:text-gray-200 dark:bg-gray-600 ml-auto sm:text-xs hover:text-red-600", $.value ? "disabled:bg-gray-100 text-white text-opacity-50" : "bg-gray-100"]),
                    title: r(t)("Delete"),
                    disabled: $.value,
                    onClick: (E) => le(m)
                  }, Yn, 10, Rn)
                ]))), 128)),
                M.value.length ? S("", !0) : (a(), c("div", Gn, u(r(t)("No files selected!")), 1))
              ]),
              O.value.length ? (a(), N(Z, {
                key: 0,
                onHidden: x[2] || (x[2] = (m) => O.value = ""),
                error: ""
              }, {
                default: A(() => [
                  U(u(O.value), 1)
                ]),
                _: 1
              })) : S("", !0)
            ])
          ])
        ]),
        e("input", {
          ref_key: "internalFileInput",
          ref: y,
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
}, tr = { class: "mt-2" }, sr = {
  class: "text-gray-500 text-sm mb-1 overflow-auto vf-scrollbar",
  style: { "max-height": "200px" }
}, or = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ar = {
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
    const s = b("emitter");
    b("storage");
    const n = b("adapter"), { t } = b("i18n"), i = l, v = g(""), o = g(""), k = g(i.selection.items), p = () => {
      k.value.length && s.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: n.value,
          path: i.current.dirname,
          items: JSON.stringify(k.value.map(({ path: d, type: f }) => ({ path: d, type: f }))),
          name: v.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: t("The file(s) archived.") });
        },
        onError: (d) => {
          o.value = t(d.message);
        }
      });
    };
    return (d, f) => (a(), N(W, null, {
      buttons: A(() => [
        e("button", {
          type: "button",
          onClick: p,
          class: "vf-btn vf-btn-primary"
        }, u(r(t)("Archive")), 1),
        e("button", {
          type: "button",
          onClick: f[2] || (f[2] = (h) => r(s).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, u(r(t)("Cancel")), 1)
      ]),
      default: A(() => [
        e("div", Xn, [
          Qn,
          e("div", Zn, [
            e("h3", er, u(r(t)("Archive the files")), 1),
            e("div", tr, [
              e("div", sr, [
                (a(!0), c(H, null, J(k.value, (h) => (a(), c("p", or, [
                  h.type == "dir" ? (a(), c("svg", ar, rr)) : (a(), c("svg", lr, dr)),
                  e("span", cr, u(h.basename), 1)
                ]))), 256))
              ]),
              P(e("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (h) => v.value = h),
                onKeyup: ne(p, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: r(t)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, ur), [
                [re, v.value]
              ]),
              o.value.length ? (a(), N(Z, {
                key: 0,
                onHidden: f[1] || (f[1] = (h) => o.value = ""),
                error: ""
              }, {
                default: A(() => [
                  U(u(o.value), 1)
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
}, kr = { class: "mt-2" }, _r = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, br = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, xr = /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), wr = [
  xr
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
    const s = b("emitter");
    b("storage");
    const n = b("adapter"), { t } = b("i18n"), i = l;
    g("");
    const v = g(i.selection.items[0]), o = g(""), k = g([]), p = () => {
      s.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: n.value,
          path: i.current.dirname,
          item: v.value.path
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: t("The file unarchived.") });
        },
        onError: (d) => {
          o.value = t(d.message);
        }
      });
    };
    return (d, f) => (a(), N(W, null, {
      buttons: A(() => [
        e("button", {
          type: "button",
          onClick: p,
          class: "vf-btn vf-btn-primary"
        }, u(r(t)("Unarchive")), 1),
        e("button", {
          type: "button",
          onClick: f[1] || (f[1] = (h) => r(s).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, u(r(t)("Cancel")), 1)
      ]),
      default: A(() => [
        e("div", pr, [
          hr,
          e("div", fr, [
            e("h3", gr, u(r(t)("Unarchive")), 1),
            e("div", kr, [
              (a(!0), c(H, null, J(k.value, (h) => (a(), c("p", _r, [
                h.type == "dir" ? (a(), c("svg", br, wr)) : (a(), c("svg", yr, Cr)),
                e("span", Mr, u(h.basename), 1)
              ]))), 256)),
              e("p", jr, u(r(t)("The archive will be unarchived at")) + " (" + u(l.current.dirname) + ")", 1),
              o.value.length ? (a(), N(Z, {
                key: 0,
                onHidden: f[0] || (f[0] = (h) => o.value = ""),
                error: ""
              }, {
                default: A(() => [
                  U(u(o.value), 1)
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
    const s = b("emitter"), { t: n } = b("i18n");
    b("storage");
    const t = b("adapter"), i = l, v = g(i.selection.items.from), o = g(""), k = () => {
      v.value.length && s.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: t.value,
          path: i.current.dirname,
          items: JSON.stringify(v.value.map(({ path: p, type: d }) => ({ path: p, type: d }))),
          item: i.selection.items.to.path
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: n("Files moved.", i.selection.items.to.name) });
        },
        onError: (p) => {
          o.value = n(p.message);
        }
      });
    };
    return (p, d) => (a(), N(W, null, {
      buttons: A(() => [
        e("button", {
          type: "button",
          onClick: k,
          class: "vf-btn vf-btn-primary"
        }, u(r(n)("Yes, Move!")), 1),
        e("button", {
          type: "button",
          onClick: d[1] || (d[1] = (f) => r(s).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, u(r(n)("Cancel")), 1)
      ]),
      default: A(() => [
        e("div", Or, [
          zr,
          e("div", Er, [
            e("h3", Ar, u(r(n)("Move files")), 1),
            e("div", Fr, [
              (a(!0), c(H, null, J(v.value, (f) => (a(), c("p", Br, [
                f.type == "dir" ? (a(), c("svg", Vr, Nr)) : (a(), c("svg", Ur, Hr)),
                e("span", Ir, u(f.path), 1)
              ]))), 256)),
              e("p", qr, u(r(n)("Are you sure you want to move these files?")), 1),
              e("p", Rr, [
                Pr,
                e("span", Yr, u(l.selection.items.to.path), 1)
              ]),
              o.value.length ? (a(), N(Z, {
                key: 0,
                onHidden: d[0] || (d[0] = (f) => o.value = ""),
                error: ""
              }, {
                default: A(() => [
                  U(u(o.value), 1)
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
}), Kr = (l, s) => {
  const n = l.__vccOpts || l;
  for (const [t, i] of s)
    n[t] = i;
  return n;
}, Wr = {
  props: {
    on: { type: String, required: !0 }
  },
  setup(l, { emit: s, slots: n }) {
    const t = b("emitter"), i = g(!1);
    let v = null;
    const o = () => {
      clearTimeout(v), i.value = !0, v = setTimeout(() => {
        i.value = !1;
      }, 2e3);
    };
    return K(() => {
      t.on(l.on, o);
    }), Ue(() => {
      clearTimeout(v);
    }), {
      shown: i
    };
  }
}, Xr = { key: 1 };
function Qr(l, s, n, t, i, v) {
  return a(), c("div", {
    class: T(["text-sm text-green-600 dark:text-green-600 transition-opacity duration-500 ease-out", [{ "opacity-0": !t.shown }]])
  }, [
    l.$slots.default ? pe(l.$slots, "default", { key: 0 }) : (a(), c("span", Xr, "Saved."))
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
], -1), sl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ol = {
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
    const s = b("emitter"), { getStore: n, clearStore: t } = b("storage");
    b("adapter");
    const { t: i } = b("i18n");
    g(""), g("");
    const v = b("darkMode"), o = async () => {
      t(), location.reload();
    }, k = () => {
      s.emit("vf-darkMode-toggle"), s.emit("vf-darkMode-saved");
    }, p = b("metricUnits"), d = () => {
      s.emit("vf-metric-units-saved", !p.value);
    };
    return (f, h) => (a(), N(W, null, {
      buttons: A(() => [
        e("button", {
          type: "button",
          onClick: h[2] || (h[2] = (y) => r(s).emit("vf-modal-close")),
          class: "vf-btn vf-btn-secondary"
        }, u(r(i)("Close")), 1)
      ]),
      default: A(() => [
        e("div", el, [
          tl,
          e("div", sl, [
            e("h3", ol, u(r(i)("About %s", "Vuefinder " + r(Zr))), 1),
            e("div", al, [
              e("p", nl, u(r(i)("Vuefinder is a file manager component for vue 3.")), 1),
              e("div", null, [
                e("h3", rl, u(r(i)("Settings")), 1)
              ]),
              e("div", ll, [
                e("fieldset", null, [
                  e("div", il, [
                    e("div", dl, [
                      e("div", cl, [
                        P(e("input", {
                          id: "dark_mode",
                          name: "dark_mode",
                          "onUpdate:modelValue": h[0] || (h[0] = (y) => ve(v) ? v.value = y : null),
                          type: "checkbox",
                          onClick: k,
                          class: "h-4 w-4 rounded border-gray-300 text-indigo-600 dark:accent-slate-400 focus:ring-indigo-600"
                        }, null, 512), [
                          [ye, r(v)]
                        ])
                      ]),
                      e("div", ul, [
                        e("label", ml, [
                          U(u(r(i)("Dark Mode")) + " ", 1),
                          G(je, {
                            class: "ms-3",
                            on: "vf-darkMode-saved"
                          }, {
                            default: A(() => [
                              U(u(r(i)("Saved.")), 1)
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
                          "onUpdate:modelValue": h[1] || (h[1] = (y) => ve(p) ? p.value = y : null),
                          onClick: d,
                          class: "h-4 w-4 rounded border-gray-300 text-indigo-600 dark:accent-slate-400 focus:ring-indigo-600"
                        }, null, 512), [
                          [ye, r(p)]
                        ])
                      ]),
                      e("div", hl, [
                        e("label", fl, [
                          U(u(r(i)("Use Metric Units")) + " ", 1),
                          G(je, {
                            class: "ms-3",
                            on: "vf-metric-units-saved"
                          }, {
                            default: A(() => [
                              U(u(r(i)("Saved.")), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    e("button", {
                      onClick: o,
                      type: "button",
                      class: "vf-btn vf-btn-secondary"
                    }, u(r(i)("Clear Local Storage")), 1)
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
  ModalDelete: Zo,
  ModalMessage: la,
  ModalMove: Jr,
  ModalNewFile: Ca,
  ModalNewFolder: fa,
  ModalPreview: mn,
  ModalRename: jn,
  ModalUnarchive: Dr,
  ModalUpload: Wn
}, Symbol.toStringTag, { value: "Module" })), _e = {
  VueFinder: Mo,
  ..._l
};
const Dl = {
  install(l) {
    for (const s in _e)
      if (_e.hasOwnProperty(s)) {
        const n = _e[s];
        l.component(n.name, n);
      }
  }
};
export {
  Dl as default
};
