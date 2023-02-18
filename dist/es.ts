import { defineComponent as fe, useAttrs as Me, ref as H, computed as oe, watch as Ue, openBlock as P, createElementBlock as j, createElementVNode as T, renderSlot as k, normalizeClass as A, unref as Be, Fragment as le, renderList as se, toDisplayString as J, createCommentVNode as Ce, mergeProps as Ne, createVNode as Ee, createApp as Se } from "vue";
const Re = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik05IDE3VjExTDcgMTMiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTkgMTFMMTEgMTMiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTIyIDEwVjE1QzIyIDIwIDIwIDIyIDE1IDIySDlDNCAyMiAyIDIwIDIgMTVWOUMyIDQgNCAyIDkgMkgxNCIgc3Ryb2tlPSJncmF5IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMjIgMTBIMThDMTUgMTAgMTQgOSAxNCA2VjJMMjIgMTBaIiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg==", ge = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTMuNSAzSDEySDhDNi4zNDMxNSAzIDUgNC4zNDMxNSA1IDZWMThDNSAxOS42NTY5IDYuMzQzMTUgMjEgOCAyMUgxMU0xMy41IDNMMTkgOC42MjVNMTMuNSAzVjcuNjI1QzEzLjUgOC4xNzcyOCAxMy45NDc3IDguNjI1IDE0LjUgOC42MjVIMTlNMTkgOC42MjVWMTEuODEyNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTE1IDE2TDE3LjUgMTguNU0yMCAyMUwxNy41IDE4LjVNMTcuNSAxOC41TDIwIDE2TTE3LjUgMTguNUwxNSAyMSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+", Ae = () => {
  const t = ["jpg", "png", "jpeg", "webp", "svg"], e = ["xlsx", "xlsm", "xlsb", "xltx", "csv"], i = ["mp4", "mov", "mkv", "flv", "avi", "webm"], a = ["docm", "docx", "dot", "dotx"], n = ["txt", "text"], o = ["pdf", "ps"], s = /* @__PURE__ */ new Map();
  s.set("excel", e), s.set("image", t), s.set("pdf", o), s.set("text", n), s.set("video", i), s.set("word", a);
  const m = (r) => new Promise((c, p) => {
    const b = new FileReader();
    b.readAsDataURL(r), b.onload = () => {
      c(b.result);
    }, b.onerror = (U) => p(U);
  }), u = (r = "") => {
    const c = r.split(".").pop();
    return c && typeof c == "string" ? c : "";
  }, l = (r, c) => {
    var p;
    return (p = s.get(c)) == null ? void 0 : p.includes(r);
  }, h = (r) => {
    const c = r.split("_")[1];
    return c || r;
  }, f = (r) => `${(+r / 1e6).toFixed(2)}MB`;
  function y(r) {
    let c = "image";
    return s.forEach((p, b) => {
      l(r, b) && (c = b);
    }), c;
  }
  function D(r) {
    const c = document.createElement("input");
    c.type = "file", c.style.display = "none", document.body.appendChild(c), c.addEventListener("change", (p) => {
      const b = p.target.files[0];
      m(b).then((U) => {
        r({
          file: b,
          base64: U
        });
      });
    }), c.click();
  }
  return {
    toBase64: m,
    getFileSize: f,
    getFileName: h,
    getFileExt: u,
    getFileType: y,
    openFileWindow: D,
    EXCEL_EXTENTIONS: e,
    IMAGE_EXTENTIONS: t,
    PDF_EXTENTIONS: o,
    VIDEO_EXTENTIONS: i,
    WORD_EXTENTIONS: a
    // downloadFile,
    // getFileUrl,
  };
};
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Oe = Object.prototype.hasOwnProperty, Pe = (t, e) => Oe.call(t, e), je = Array.isArray;
/*!
 * Compressor.js v1.1.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-10-05T02:32:40.212Z
 */
function ue(t, e) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), i.push.apply(i, a);
  }
  return i;
}
function F(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ue(Object(i), !0).forEach(function(a) {
      Ve(t, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ue(Object(i)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return t;
}
function He(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ce(t, e) {
  for (var i = 0; i < e.length; i++) {
    var a = e[i];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
  }
}
function Le(t, e, i) {
  return e && ce(t.prototype, e), i && ce(t, i), t;
}
function Ve(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = i, t;
}
function Z() {
  return Z = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
  }, Z.apply(this, arguments);
}
var ve = { exports: {} };
(function(t) {
  typeof window > "u" || function(e) {
    var i = e.HTMLCanvasElement && e.HTMLCanvasElement.prototype, a = e.Blob && function() {
      try {
        return Boolean(new Blob());
      } catch {
        return !1;
      }
    }(), n = a && e.Uint8Array && function() {
      try {
        return new Blob([new Uint8Array(100)]).size === 100;
      } catch {
        return !1;
      }
    }(), o = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder, s = /^data:((.*?)(;charset=.*?)?)(;base64)?,/, m = (a || o) && e.atob && e.ArrayBuffer && e.Uint8Array && function(u) {
      var l, h, f, y, D, r, c, p, b;
      if (l = u.match(s), !l)
        throw new Error("invalid data URI");
      for (h = l[2] ? l[1] : "text/plain" + (l[3] || ";charset=US-ASCII"), f = !!l[4], y = u.slice(l[0].length), f ? D = atob(y) : D = decodeURIComponent(y), r = new ArrayBuffer(D.length), c = new Uint8Array(r), p = 0; p < D.length; p += 1)
        c[p] = D.charCodeAt(p);
      return a ? new Blob([n ? c : r], {
        type: h
      }) : (b = new o(), b.append(r), b.getBlob(h));
    };
    e.HTMLCanvasElement && !i.toBlob && (i.mozGetAsFile ? i.toBlob = function(u, l, h) {
      var f = this;
      setTimeout(function() {
        h && i.toDataURL && m ? u(m(f.toDataURL(l, h))) : u(f.mozGetAsFile("blob", l));
      });
    } : i.toDataURL && m && (i.msToBlob ? i.toBlob = function(u, l, h) {
      var f = this;
      setTimeout(function() {
        (l && l !== "image/png" || h) && i.toDataURL && m ? u(m(f.toDataURL(l, h))) : u(f.msToBlob(l));
      });
    } : i.toBlob = function(u, l, h) {
      var f = this;
      setTimeout(function() {
        u(m(f.toDataURL(l, h)));
      });
    })), t.exports ? t.exports = m : e.dataURLtoBlob = m;
  }(window);
})(ve);
var ke = ve.exports, Fe = function(e) {
  return typeof Blob > "u" ? !1 : e instanceof Blob || Object.prototype.toString.call(e) === "[object Blob]";
}, de = {
  /**
   * Indicates if output the original image instead of the compressed one
   * when the size of the compressed image is greater than the original one's
   * @type {boolean}
   */
  strict: !0,
  /**
   * Indicates if read the image's Exif Orientation information,
   * and then rotate or flip the image automatically.
   * @type {boolean}
   */
  checkOrientation: !0,
  /**
   * The max width of the output image.
   * @type {number}
   */
  maxWidth: 1 / 0,
  /**
   * The max height of the output image.
   * @type {number}
   */
  maxHeight: 1 / 0,
  /**
   * The min width of the output image.
   * @type {number}
   */
  minWidth: 0,
  /**
   * The min height of the output image.
   * @type {number}
   */
  minHeight: 0,
  /**
   * The width of the output image.
   * If not specified, the natural width of the source image will be used.
   * @type {number}
   */
  width: void 0,
  /**
   * The height of the output image.
   * If not specified, the natural height of the source image will be used.
   * @type {number}
   */
  height: void 0,
  /**
   * Sets how the size of the image should be resized to the container
   * specified by the `width` and `height` options.
   * @type {string}
   */
  resize: "none",
  /**
   * The quality of the output image.
   * It must be a number between `0` and `1`,
   * and only available for `image/jpeg` and `image/webp` images.
   * Check out {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob canvas.toBlob}.
   * @type {number}
   */
  quality: 0.8,
  /**
   * The mime type of the output image.
   * By default, the original mime type of the source image file will be used.
   * @type {string}
   */
  mimeType: "auto",
  /**
   * Files whose file type is included in this list,
   * and whose file size exceeds the `convertSize` value will be converted to JPEGs.
   * @type {string｜Array}
   */
  convertTypes: ["image/png"],
  /**
   * PNG files over this size (5 MB by default) will be converted to JPEGs.
   * To disable this, just set the value to `Infinity`.
   * @type {number}
   */
  convertSize: 5e6,
  /**
   * The hook function to execute before draw the image into the canvas for compression.
   * @type {Function}
   * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
   * @param {HTMLCanvasElement} canvas - The canvas for compression.
   * @example
   * function (context, canvas) {
   *   context.fillStyle = '#fff';
   * }
   */
  beforeDraw: null,
  /**
   * The hook function to execute after drew the image into the canvas for compression.
   * @type {Function}
   * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
   * @param {HTMLCanvasElement} canvas - The canvas for compression.
   * @example
   * function (context, canvas) {
   *   context.filter = 'grayscale(100%)';
   * }
   */
  drew: null,
  /**
   * The hook function to execute when success to compress the image.
   * @type {Function}
   * @param {File} file - The compressed image File object.
   * @example
   * function (file) {
   *   console.log(file);
   * }
   */
  success: null,
  /**
   * The hook function to execute when fail to compress the image.
   * @type {Function}
   * @param {Error} err - An Error object.
   * @example
   * function (err) {
   *   console.log(err.message);
   * }
   */
  error: null
}, We = typeof window < "u" && typeof window.document < "u", N = We ? window : {}, _ = function(e) {
  return e > 0 && e < 1 / 0;
}, Ze = Array.prototype.slice;
function _e(t) {
  return Array.from ? Array.from(t) : Ze.call(t);
}
var ze = /^image\/.+$/;
function Y(t) {
  return ze.test(t);
}
function Ge(t) {
  var e = Y(t) ? t.substr(6) : "";
  return e === "jpeg" && (e = "jpg"), ".".concat(e);
}
var be = String.fromCharCode;
function Xe(t, e, i) {
  var a = "", n;
  for (i += e, n = e; n < i; n += 1)
    a += be(t.getUint8(n));
  return a;
}
var Je = N.btoa;
function Ye(t, e) {
  for (var i = [], a = 8192, n = new Uint8Array(t); n.length > 0; )
    i.push(be.apply(null, _e(n.subarray(0, a)))), n = n.subarray(a);
  return "data:".concat(e, ";base64,").concat(Je(i.join("")));
}
function $e(t) {
  var e = new DataView(t), i;
  try {
    var a, n, o;
    if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
      for (var s = e.byteLength, m = 2; m + 1 < s; ) {
        if (e.getUint8(m) === 255 && e.getUint8(m + 1) === 225) {
          n = m;
          break;
        }
        m += 1;
      }
    if (n) {
      var u = n + 4, l = n + 10;
      if (Xe(e, u, 4) === "Exif") {
        var h = e.getUint16(l);
        if (a = h === 18761, (a || h === 19789) && e.getUint16(l + 2, a) === 42) {
          var f = e.getUint32(l + 4, a);
          f >= 8 && (o = l + f);
        }
      }
    }
    if (o) {
      var y = e.getUint16(o, a), D, r;
      for (r = 0; r < y; r += 1)
        if (D = o + r * 12 + 2, e.getUint16(D, a) === 274) {
          D += 8, i = e.getUint16(D, a), e.setUint16(D, 1, a);
          break;
        }
    }
  } catch {
    i = 1;
  }
  return i;
}
function Qe(t) {
  var e = 0, i = 1, a = 1;
  switch (t) {
    case 2:
      i = -1;
      break;
    case 3:
      e = -180;
      break;
    case 4:
      a = -1;
      break;
    case 5:
      e = 90, a = -1;
      break;
    case 6:
      e = 90;
      break;
    case 7:
      e = 90, i = -1;
      break;
    case 8:
      e = -90;
      break;
  }
  return {
    rotate: e,
    scaleX: i,
    scaleY: a
  };
}
var qe = /\.\d*(?:0|9){12}\d*$/;
function me(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return qe.test(t) ? Math.round(t * e) / e : t;
}
function V(t) {
  var e = t.aspectRatio, i = t.height, a = t.width, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none", o = _(a), s = _(i);
  if (o && s) {
    var m = i * e;
    (n === "contain" || n === "none") && m > a || n === "cover" && m < a ? i = a / e : a = i * e;
  } else
    o ? i = a / e : s && (a = i * e);
  return {
    width: a,
    height: i
  };
}
var Ke = N.ArrayBuffer, he = N.FileReader, O = N.URL || N.webkitURL, et = /\.\w+$/, tt = N.Compressor, it = /* @__PURE__ */ function() {
  function t(e, i) {
    He(this, t), this.file = e, this.image = new Image(), this.options = F(F({}, de), i), this.aborted = !1, this.result = null, this.init();
  }
  return Le(t, [{
    key: "init",
    value: function() {
      var i = this, a = this.file, n = this.options;
      if (!Fe(a)) {
        this.fail(new Error("The first argument must be a File or Blob object."));
        return;
      }
      var o = a.type;
      if (!Y(o)) {
        this.fail(new Error("The first argument must be an image File or Blob object."));
        return;
      }
      if (!O || !he) {
        this.fail(new Error("The current browser does not support image compression."));
        return;
      }
      if (Ke || (n.checkOrientation = !1), O && !n.checkOrientation)
        this.load({
          url: O.createObjectURL(a)
        });
      else {
        var s = new he(), m = n.checkOrientation && o === "image/jpeg";
        this.reader = s, s.onload = function(u) {
          var l = u.target, h = l.result, f = {};
          if (m) {
            var y = $e(h);
            y > 1 || !O ? (f.url = Ye(h, o), y > 1 && Z(f, Qe(y))) : f.url = O.createObjectURL(a);
          } else
            f.url = h;
          i.load(f);
        }, s.onabort = function() {
          i.fail(new Error("Aborted to read the image with FileReader."));
        }, s.onerror = function() {
          i.fail(new Error("Failed to read the image with FileReader."));
        }, s.onloadend = function() {
          i.reader = null;
        }, m ? s.readAsArrayBuffer(a) : s.readAsDataURL(a);
      }
    }
  }, {
    key: "load",
    value: function(i) {
      var a = this, n = this.file, o = this.image;
      o.onload = function() {
        a.draw(F(F({}, i), {}, {
          naturalWidth: o.naturalWidth,
          naturalHeight: o.naturalHeight
        }));
      }, o.onabort = function() {
        a.fail(new Error("Aborted to load the image."));
      }, o.onerror = function() {
        a.fail(new Error("Failed to load the image."));
      }, N.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(N.navigator.userAgent) && (o.crossOrigin = "anonymous"), o.alt = n.name, o.src = i.url;
    }
  }, {
    key: "draw",
    value: function(i) {
      var a = this, n = i.naturalWidth, o = i.naturalHeight, s = i.rotate, m = s === void 0 ? 0 : s, u = i.scaleX, l = u === void 0 ? 1 : u, h = i.scaleY, f = h === void 0 ? 1 : h, y = this.file, D = this.image, r = this.options, c = document.createElement("canvas"), p = c.getContext("2d"), b = Math.abs(m) % 180 === 90, U = (r.resize === "contain" || r.resize === "cover") && _(r.width) && _(r.height), B = Math.max(r.maxWidth, 0) || 1 / 0, E = Math.max(r.maxHeight, 0) || 1 / 0, S = Math.max(r.minWidth, 0) || 0, R = Math.max(r.minHeight, 0) || 0, C = n / o, I = r.width, w = r.height;
      if (b) {
        var d = [E, B];
        B = d[0], E = d[1];
        var v = [R, S];
        S = v[0], R = v[1];
        var g = [w, I];
        I = g[0], w = g[1];
      }
      U && (C = I / w);
      var M = V({
        aspectRatio: C,
        width: B,
        height: E
      }, "contain");
      B = M.width, E = M.height;
      var L = V({
        aspectRatio: C,
        width: S,
        height: R
      }, "cover");
      if (S = L.width, R = L.height, U) {
        var $ = V({
          aspectRatio: C,
          width: I,
          height: w
        }, r.resize);
        I = $.width, w = $.height;
      } else {
        var Q = V({
          aspectRatio: C,
          width: I,
          height: w
        }), q = Q.width;
        I = q === void 0 ? n : q;
        var K = Q.height;
        w = K === void 0 ? o : K;
      }
      I = Math.floor(me(Math.min(Math.max(I, S), B))), w = Math.floor(me(Math.min(Math.max(w, R), E)));
      var Ie = -I / 2, we = -w / 2, De = I, xe = w, z = [];
      if (U) {
        var ee = 0, te = 0, G = n, X = o, ie = V({
          aspectRatio: C,
          width: n,
          height: o
        }, {
          contain: "cover",
          cover: "contain"
        }[r.resize]);
        G = ie.width, X = ie.height, ee = (n - G) / 2, te = (o - X) / 2, z.push(ee, te, G, X);
      }
      if (z.push(Ie, we, De, xe), b) {
        var ae = [w, I];
        I = ae[0], w = ae[1];
      }
      c.width = I, c.height = w, Y(r.mimeType) || (r.mimeType = y.type);
      var re = "transparent";
      if (y.size > r.convertSize && r.convertTypes.indexOf(r.mimeType) >= 0 && (r.mimeType = "image/jpeg"), r.mimeType === "image/jpeg" && (re = "#fff"), p.fillStyle = re, p.fillRect(0, 0, I, w), r.beforeDraw && r.beforeDraw.call(this, p, c), !this.aborted && (p.save(), p.translate(I / 2, w / 2), p.rotate(m * Math.PI / 180), p.scale(l, f), p.drawImage.apply(p, [D].concat(z)), p.restore(), r.drew && r.drew.call(this, p, c), !this.aborted)) {
        var ne = function(Te) {
          a.aborted || a.done({
            naturalWidth: n,
            naturalHeight: o,
            result: Te
          });
        };
        c.toBlob ? c.toBlob(ne, r.mimeType, r.quality) : ne(ke(c.toDataURL(r.mimeType, r.quality)));
      }
    }
  }, {
    key: "done",
    value: function(i) {
      var a = i.naturalWidth, n = i.naturalHeight, o = i.result, s = this.file, m = this.image, u = this.options;
      if (O && !u.checkOrientation && O.revokeObjectURL(m.src), o)
        if (u.strict && o.size > s.size && u.mimeType === s.type && !(u.width > a || u.height > n || u.minWidth > a || u.minHeight > n || u.maxWidth < a || u.maxHeight < n))
          o = s;
        else {
          var l = new Date();
          o.lastModified = l.getTime(), o.lastModifiedDate = l, o.name = s.name, o.name && o.type !== s.type && (o.name = o.name.replace(et, Ge(o.type)));
        }
      else
        o = s;
      this.result = o, u.success && u.success.call(this, o);
    }
  }, {
    key: "fail",
    value: function(i) {
      var a = this.options;
      if (a.error)
        a.error.call(this, i);
      else
        throw i;
    }
  }, {
    key: "abort",
    value: function() {
      this.aborted || (this.aborted = !0, this.reader ? this.reader.abort() : this.image.complete ? this.fail(new Error("The compression process has been aborted.")) : (this.image.onload = null, this.image.onabort()));
    }
    /**
     * Get the no conflict compressor class.
     * @returns {Compressor} The compressor class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Compressor = tt, t;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(i) {
      Z(de, i);
    }
  }]), t;
}();
let W;
const at = new Uint8Array(16);
function rt() {
  if (!W && (W = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !W))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return W(at);
}
const x = [];
for (let t = 0; t < 256; ++t)
  x.push((t + 256).toString(16).slice(1));
function nt(t, e = 0) {
  return (x[t[e + 0]] + x[t[e + 1]] + x[t[e + 2]] + x[t[e + 3]] + "-" + x[t[e + 4]] + x[t[e + 5]] + "-" + x[t[e + 6]] + x[t[e + 7]] + "-" + x[t[e + 8]] + x[t[e + 9]] + "-" + x[t[e + 10]] + x[t[e + 11]] + x[t[e + 12]] + x[t[e + 13]] + x[t[e + 14]] + x[t[e + 15]]).toLowerCase();
}
const ot = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), pe = {
  randomUUID: ot
};
function lt(t, e, i) {
  if (pe.randomUUID && !e && !t)
    return pe.randomUUID();
  t = t || {};
  const a = t.random || (t.rng || rt)();
  if (a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, e) {
    i = i || 0;
    for (let n = 0; n < 16; ++n)
      e[i + n] = a[n];
    return e;
  }
  return nt(a);
}
const st = { class: "vue-file-uploader" }, ut = /* @__PURE__ */ T("span", { class: "placeholder" }, " Click Or Drop File Here ", -1), ct = /* @__PURE__ */ T("img", {
  src: Re,
  height: "45",
  alt: ""
}, null, -1), dt = ["src"], mt = { class: "preview-item-overlay" }, ht = ["id", "onClick"], pt = /* @__PURE__ */ T("img", {
  height: "30",
  src: ge
}, null, -1), ft = ["src"], gt = { class: "preview-item-overlay" }, vt = {
  key: 0,
  class: "info"
}, bt = { style: { "font-weight": "bold" } }, yt = ["id", "onClick"], It = /* @__PURE__ */ T("img", {
  height: "30",
  src: ge
}, null, -1), wt = ["id"], ye = /* @__PURE__ */ fe({
  __name: "FileUploader",
  props: {
    url: null,
    base64: { type: Boolean, default: !1 },
    quality: { default: 0.8 },
    contain: { type: Boolean, default: !0 },
    cover: { type: Boolean, default: !1 },
    deleteBtnClass: { default: "" },
    previwerContainerClass: null,
    previwerItemClass: null,
    previewImageClass: null,
    file: { default: null },
    maxSize: null,
    maxWidth: null,
    modelValue: null,
    maxHeight: null,
    deletedUrls: { default: () => [] }
  },
  emits: ["update:modelValue", "update:url", "update:deletedUrls"],
  setup(t, { expose: e, emit: i }) {
    const a = t, { getFileExt: n, getFileType: o } = Ae(), s = Me(), m = H(null), u = Date.now() * (Math.random() * 1e4), l = H([]), h = H([]), f = H([]), y = oe(() => Pe(s, "multiple")), D = oe(() => a.modelValue);
    function r() {
      m.value && m.value.click();
    }
    function c(d) {
      return new Promise((v, g) => {
        new it(d, {
          quality: a.quality,
          success(M) {
            v(
              new File([M], d.name, {
                lastModified: new Date().getTime(),
                type: M.type
              })
            );
          },
          error(M) {
            g(M);
          }
        });
      });
    }
    function p() {
      l.value = [], h.value = [];
    }
    function b(d, v) {
      d.stopImmediatePropagation(), l.value = l.value.filter((g) => (g.id === v && URL.revokeObjectURL(g.url), g.id !== v)), B();
    }
    async function U(d) {
      for (let v of d) {
        const g = o(n(v.name));
        if (g === "image")
          try {
            v = await c(v);
          } catch (M) {
            console.error(M);
          }
        y.value || (l.value = [], h.value = []), l.value.push({
          file: v,
          id: lt(),
          type: g,
          url: URL.createObjectURL(v)
        });
      }
      B();
    }
    function B() {
      y.value ? (i("update:modelValue", l.value.map(({ file: d }) => d)), i("update:url", l.value.map(({ url: d }) => d))) : (i("update:modelValue", l.value.length ? l.value[0].file : null), i("update:url", l.value.length ? l.value[0].url : ""));
    }
    function E(d) {
      const v = d.target.files;
      U(v);
    }
    function S(d) {
      d.preventDefault();
      const v = d.dataTransfer.files;
      U(v);
    }
    function R(d) {
      d.preventDefault();
    }
    function C(d, v) {
      d.stopImmediatePropagation(), f.value.push(v), h.value = h.value.filter((g) => g !== v), i("update:deletedUrls", f);
    }
    function I() {
      a.url && (console.log("url", a.url), typeof a.url == "string" ? h.value.push(a.url) : Array.isArray(a.url) && (h.value = [...h.value, ...a.url]));
    }
    function w(d) {
      return new URL(d, import.meta.url).href;
    }
    return Ue(
      D,
      (d) => {
        console.log("model Value Change", d), (d === null || je(d) && d.length === 0) && p();
      },
      { deep: !0 }
    ), e({
      reset: p
    }), I(), (d, v) => (P(), j("div", st, [
      T("button", {
        type: "button",
        class: "vue-file-uploader-btn",
        onClick: r,
        onDrop: S,
        onDragover: R
      }, [
        k(d.$slots, "default", {}, () => [
          ut,
          ct
        ]),
        T("div", {
          class: A(["vue-file-uploader-preview", [{ multi: Be(y) }, t.previwerContainerClass]])
        }, [
          (P(!0), j(le, null, se(h.value, (g, M) => (P(), j("div", {
            key: M,
            class: A(["vue-file-uploader-preview-item", t.previwerItemClass])
          }, [
            T("img", {
              src: g,
              class: A([t.previewImageClass, "preview-img"])
            }, null, 10, dt),
            T("div", mt, [
              T("button", {
                id: `delete-btn-${M}`,
                class: A([t.deleteBtnClass, "vue-file-uploader-preview-item-delete-btn"]),
                onClick: (L) => C(L, g)
              }, [
                k(d.$slots, "delete-btn", {}, () => [
                  pt
                ])
              ], 10, ht)
            ])
          ], 2))), 128)),
          (P(!0), j(le, null, se(l.value, (g, M) => (P(), j("div", {
            key: g.id,
            class: A(["vue-file-uploader-preview-item", t.previwerItemClass])
          }, [
            T("img", {
              class: A(["preview-img", t.previewImageClass]),
              src: g.type === "image" ? g.url : w(`./assets/icons/${g.type}.png`)
            }, null, 10, ft),
            T("div", gt, [
              g.file ? (P(), j("div", vt, [
                k(d.$slots, "info-overlay", {}, () => [
                  T("h6", bt, J(g.file.name), 1),
                  T("span", null, "Type : " + J(g.type), 1),
                  T("span", null, "Size : " + J((g.file.size / 1e6).toFixed(2)) + "mb", 1)
                ])
              ])) : Ce("", !0),
              T("button", {
                id: `delete-btn-${M}`,
                class: A([t.deleteBtnClass, "vue-file-uploader-preview-item-delete-btn"]),
                onClick: (L) => b(L, g.id)
              }, [
                k(d.$slots, "delete-btn", {}, () => [
                  It
                ])
              ], 10, yt)
            ])
          ], 2))), 128))
        ], 2)
      ], 32),
      T("input", Ne({
        id: `file-uploader-${u}`,
        ref_key: "fileInput",
        ref: m
      }, d.$attrs, {
        type: "file",
        hidden: "",
        onChange: E
      }), null, 16, wt)
    ]));
  }
});
const Dt = { class: "form" }, xt = /* @__PURE__ */ fe({
  __name: "App",
  setup(t) {
    return H(["https://images.unsplash.com/photo-1676497589228-059b15a9df6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]), H("https://images.unsplash.com/photo-1676497589228-059b15a9df6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"), H([]), (e, i) => (P(), j("div", null, [
      T("div", Dt, [
        Ee(ye, { multiple: "" })
      ])
    ]));
  }
});
const Tt = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [a, n] of e)
    i[a] = n;
  return i;
}, Mt = /* @__PURE__ */ Tt(xt, [["__scopeId", "data-v-aab8cbab"]]);
Se(Mt).mount("#app");
const Ct = {
  install: (t, e) => {
    t.component("FileUploader", ye);
  }
};
export {
  ye as FileUploader,
  Ct as default
};
