import { defineComponent as dt, useAttrs as zt, ref as J, computed as We, watch as Vt, openBlock as U, createElementBlock as M, createElementVNode as A, renderSlot as te, normalizeClass as P, unref as Je, Fragment as Ge, renderList as qe, createCommentVNode as ne, toDisplayString as we, mergeProps as Zt, createVNode as Wt, createApp as Jt } from "vue";
const Gt = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik05IDE3VjExTDcgMTMiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTkgMTFMMTEgMTMiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTIyIDEwVjE1QzIyIDIwIDIwIDIyIDE1IDIySDlDNCAyMiAyIDIwIDIgMTVWOUMyIDQgNCAyIDkgMkgxNCIgc3Ryb2tlPSJncmF5IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMjIgMTBIMThDMTUgMTAgMTQgOSAxNCA2VjJMMjIgMTBaIiBzdHJva2U9ImdyYXkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg==", ft = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTMuNSAzSDEySDhDNi4zNDMxNSAzIDUgNC4zNDMxNSA1IDZWMThDNSAxOS42NTY5IDYuMzQzMTUgMjEgOCAyMUgxMU0xMy41IDNMMTkgOC42MjVNMTMuNSAzVjcuNjI1QzEzLjUgOC4xNzcyOCAxMy45NDc3IDguNjI1IDE0LjUgOC42MjVIMTlNMTkgOC42MjVWMTEuODEyNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTE1IDE2TDE3LjUgMTguNU0yMCAyMUwxNy41IDE4LjVNMTcuNSAxOC41TDIwIDE2TTE3LjUgMTguNUwxNSAyMSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+", qt = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMCAxNFYxNy41QzIwIDIwLjU1NzcgMTYgMjAuNSAxMiAyMC41QzggMjAuNSA0IDIwLjU1NzcgNCAxNy41VjE0TTEyIDE1TDEyIDNNMTIgMTVMOCAxMU0xMiAxNUwxNiAxMSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4=", ht = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyBmaWxsPSIjZmZmZmZmIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMywyMFYxMmExLDEsMCwwLDEsMiwwdjUuNTg1TDE3LjU4Niw1SDEyYTEsMSwwLDAsMSwwLTJoOGExLDEsMCwwLDEsMSwxdjhhMSwxLDAsMCwxLTIsMFY2LjQxNEw2LjQxNCwxOUgxMmExLDEsMCwwLDEsMCwySDRBMSwxLDAsMCwxLDMsMjBaIi8+PC9zdmc+";
function pt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: mt } = Object.prototype, { getPrototypeOf: Ne } = Object, Ce = ((e) => (t) => {
  const n = mt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (e) => (e = e.toLowerCase(), (t) => Ce(t) === e), fe = (e) => (t) => typeof t === e, { isArray: q } = Array, Y = fe("undefined");
function $t(e) {
  return e !== null && !Y(e) && e.constructor !== null && !Y(e.constructor) && H(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const yt = j("ArrayBuffer");
function Xt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && yt(e.buffer), t;
}
const Yt = fe("string"), H = fe("function"), gt = fe("number"), De = (e) => e !== null && typeof e == "object", Kt = (e) => e === !0 || e === !1, oe = (e) => {
  if (Ce(e) !== "object")
    return !1;
  const t = Ne(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Qt = j("Date"), en = j("File"), tn = j("Blob"), nn = j("FileList"), rn = (e) => De(e) && H(e.pipe), on = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || mt.call(e) === t || H(e.toString) && e.toString() === t);
}, sn = j("URLSearchParams"), an = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function K(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), q(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
    let c;
    for (r = 0; r < s; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function bt(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const wt = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), vt = (e) => !Y(e) && e !== wt;
function Re() {
  const { caseless: e } = vt(this) && this || {}, t = {}, n = (r, i) => {
    const o = e && bt(t, i) || i;
    oe(t[o]) && oe(r) ? t[o] = Re(t[o], r) : oe(r) ? t[o] = Re({}, r) : q(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && K(arguments[r], n);
  return t;
}
const ln = (e, t, n, { allOwnKeys: r } = {}) => (K(t, (i, o) => {
  n && H(i) ? e[o] = pt(i, n) : e[o] = i;
}, { allOwnKeys: r }), e), cn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), un = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, dn = (e, t, n, r) => {
  let i, o, s;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      s = i[o], (!r || r(s, e, t)) && !c[s] && (t[s] = e[s], c[s] = !0);
    e = n !== !1 && Ne(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, fn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, hn = (e) => {
  if (!e)
    return null;
  if (q(e))
    return e;
  let t = e.length;
  if (!gt(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, pn = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ne(Uint8Array)), mn = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, yn = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, gn = j("HTMLFormElement"), bn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), $e = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), wn = j("RegExp"), Et = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  K(n, (i, o) => {
    t(i, o, e) !== !1 && (r[o] = i);
  }), Object.defineProperties(e, r);
}, vn = (e) => {
  Et(e, (t, n) => {
    if (H(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (H(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, En = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((o) => {
      n[o] = !0;
    });
  };
  return q(e) ? r(e) : r(String(e).split(t)), n;
}, In = () => {
}, Sn = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ve = "abcdefghijklmnopqrstuvwxyz", Xe = "0123456789", It = {
  DIGIT: Xe,
  ALPHA: ve,
  ALPHA_DIGIT: ve + ve.toUpperCase() + Xe
}, Rn = (e = 16, t = It.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function An(e) {
  return !!(e && H(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Tn = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (De(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const o = q(r) ? [] : {};
        return K(r, (s, c) => {
          const f = n(s, i + 1);
          !Y(f) && (o[c] = f);
        }), t[i] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, a = {
  isArray: q,
  isArrayBuffer: yt,
  isBuffer: $t,
  isFormData: on,
  isArrayBufferView: Xt,
  isString: Yt,
  isNumber: gt,
  isBoolean: Kt,
  isObject: De,
  isPlainObject: oe,
  isUndefined: Y,
  isDate: Qt,
  isFile: en,
  isBlob: tn,
  isRegExp: wn,
  isFunction: H,
  isStream: rn,
  isURLSearchParams: sn,
  isTypedArray: pn,
  isFileList: nn,
  forEach: K,
  merge: Re,
  extend: ln,
  trim: an,
  stripBOM: cn,
  inherits: un,
  toFlatObject: dn,
  kindOf: Ce,
  kindOfTest: j,
  endsWith: fn,
  toArray: hn,
  forEachEntry: mn,
  matchAll: yn,
  isHTMLForm: gn,
  hasOwnProperty: $e,
  hasOwnProp: $e,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Et,
  freezeMethods: vn,
  toObjectSet: En,
  toCamelCase: bn,
  noop: In,
  toFiniteNumber: Sn,
  findKey: bt,
  global: wt,
  isContextDefined: vt,
  ALPHABET: It,
  generateString: Rn,
  isSpecCompliantForm: An,
  toJSONObject: Tn
};
function w(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
a.inherits(w, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const St = w.prototype, Rt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Rt[e] = { value: e };
});
Object.defineProperties(w, Rt);
Object.defineProperty(St, "isAxiosError", { value: !0 });
w.from = (e, t, n, r, i, o) => {
  const s = Object.create(St);
  return a.toFlatObject(e, s, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), w.call(s, e.message, t, n, r, i), s.cause = e, s.name = e.name, o && Object.assign(s, o), s;
};
const On = null;
function Ae(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function At(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ye(e, t, n) {
  return e ? e.concat(t).map(function(i, o) {
    return i = At(i), !n && o ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function xn(e) {
  return a.isArray(e) && !e.some(Ae);
}
const Nn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function he(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, m) {
    return !a.isUndefined(m[p]);
  });
  const r = n.metaTokens, i = n.visitor || d, o = n.dots, s = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(i))
    throw new TypeError("visitor must be a function");
  function l(u) {
    if (u === null)
      return "";
    if (a.isDate(u))
      return u.toISOString();
    if (!f && a.isBlob(u))
      throw new w("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(u) || a.isTypedArray(u) ? f && typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function d(u, p, m) {
    let v = u;
    if (u && !m && typeof u == "object") {
      if (a.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), u = JSON.stringify(u);
      else if (a.isArray(u) && xn(u) || (a.isFileList(u) || a.endsWith(p, "[]")) && (v = a.toArray(u)))
        return p = At(p), v.forEach(function(R, B) {
          !(a.isUndefined(R) || R === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Ye([p], B, o) : s === null ? p : p + "[]",
            l(R)
          );
        }), !1;
    }
    return Ae(u) ? !0 : (t.append(Ye(m, p, o), l(u)), !1);
  }
  const h = [], g = Object.assign(Nn, {
    defaultVisitor: d,
    convertValue: l,
    isVisitable: Ae
  });
  function y(u, p) {
    if (!a.isUndefined(u)) {
      if (h.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      h.push(u), a.forEach(u, function(v, I) {
        (!(a.isUndefined(v) || v === null) && i.call(
          t,
          v,
          a.isString(I) ? I.trim() : I,
          p,
          g
        )) === !0 && y(v, p ? p.concat(I) : [I]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Ke(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Be(e, t) {
  this._pairs = [], e && he(e, this, t);
}
const Tt = Be.prototype;
Tt.append = function(t, n) {
  this._pairs.push([t, n]);
};
Tt.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ke);
  } : Ke;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function Cn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ot(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Cn, i = n && n.serialize;
  let o;
  if (i ? o = i(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new Be(t, n).toString(r), o) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Dn {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Qe = Dn, xt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Bn = typeof URLSearchParams < "u" ? URLSearchParams : Be, Pn = typeof FormData < "u" ? FormData : null, Un = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Mn = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), L = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Bn,
    FormData: Pn,
    Blob
  },
  isStandardBrowserEnv: Un,
  isStandardBrowserWebWorkerEnv: Mn,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Ln(e, t) {
  return he(e, new L.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, o) {
      return L.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Fn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function jn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Nt(e) {
  function t(n, r, i, o) {
    let s = n[o++];
    const c = Number.isFinite(+s), f = o >= n.length;
    return s = !s && a.isArray(i) ? i.length : s, f ? (a.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !c) : ((!i[s] || !a.isObject(i[s])) && (i[s] = []), t(n, r, i[s], o) && a.isArray(i[s]) && (i[s] = jn(i[s])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, i) => {
      t(Fn(r), i, n, 0);
    }), n;
  }
  return null;
}
const _n = {
  "Content-Type": void 0
};
function kn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const pe = {
  transitional: xt,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return i && i ? JSON.stringify(Nt(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ln(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return he(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || i ? (n.setContentType("application/json", !1), kn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || pe.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || i)) {
      const s = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (s)
          throw c.name === "SyntaxError" ? w.from(c, w.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: L.classes.FormData,
    Blob: L.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
a.forEach(["delete", "get", "head"], function(t) {
  pe.headers[t] = {};
});
a.forEach(["post", "put", "patch"], function(t) {
  pe.headers[t] = a.merge(_n);
});
const Pe = pe, Hn = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), zn = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), n = s.substring(0, i).trim().toLowerCase(), r = s.substring(i + 1).trim(), !(!n || t[n] && Hn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, et = Symbol("internals");
function $(e) {
  return e && String(e).trim().toLowerCase();
}
function se(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(se) : String(e);
}
function Vn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
function Zn(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function Ee(e, t, n, r, i) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Wn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Jn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, o, s) {
        return this[r].call(this, t, i, o, s);
      },
      configurable: !0
    });
  });
}
class me {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(c, f, l) {
      const d = $(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(i, d);
      (!h || i[h] === void 0 || l === !0 || l === void 0 && i[h] !== !1) && (i[h || f] = se(c));
    }
    const s = (c, f) => a.forEach(c, (l, d) => o(l, d, f));
    return a.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : a.isString(t) && (t = t.trim()) && !Zn(t) ? s(zn(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = $(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return Vn(i);
        if (a.isFunction(n))
          return n.call(this, i, r);
        if (a.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = $(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ee(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (s = $(s), s) {
        const c = a.findKey(r, s);
        c && (!n || Ee(r, r[c], c, n)) && (delete r[c], i = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Ee(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (i, o) => {
      const s = a.findKey(r, o);
      if (s) {
        n[s] = se(i), delete n[o];
        return;
      }
      const c = t ? Wn(o) : String(o).trim();
      c !== o && delete n[o], n[c] = se(i), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[et] = this[et] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(s) {
      const c = $(s);
      r[c] || (Jn(i, s), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
me.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.freezeMethods(me.prototype);
a.freezeMethods(me);
const F = me;
function Ie(e, t) {
  const n = this || Pe, r = t || n, i = F.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function Ct(e) {
  return !!(e && e.__CANCEL__);
}
function Q(e, t, n) {
  w.call(this, e ?? "canceled", w.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(Q, w, {
  __CANCEL__: !0
});
function Gn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new w(
    "Request failed with status code " + n.status,
    [w.ERR_BAD_REQUEST, w.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const qn = L.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, i, o, s, c) {
        const f = [];
        f.push(n + "=" + encodeURIComponent(r)), a.isNumber(i) && f.push("expires=" + new Date(i).toGMTString()), a.isString(o) && f.push("path=" + o), a.isString(s) && f.push("domain=" + s), c === !0 && f.push("secure"), document.cookie = f.join("; ");
      },
      read: function(n) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function $n(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Xn(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Dt(e, t) {
  return e && !$n(t) ? Xn(e, t) : t;
}
const Yn = L.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function i(o) {
      let s = o;
      return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = i(window.location.href), function(s) {
      const c = a.isString(s) ? i(s) : s;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Kn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Qn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, o = 0, s;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const l = Date.now(), d = r[o];
    s || (s = l), n[i] = f, r[i] = l;
    let h = o, g = 0;
    for (; h !== i; )
      g += n[h++], h = h % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), l - s < t)
      return;
    const y = d && l - d;
    return y ? Math.round(g * 1e3 / y) : void 0;
  };
}
function tt(e, t) {
  let n = 0;
  const r = Qn(50, 250);
  return (i) => {
    const o = i.loaded, s = i.lengthComputable ? i.total : void 0, c = o - n, f = r(c), l = o <= s;
    n = o;
    const d = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: c,
      rate: f || void 0,
      estimated: f && s && l ? (s - o) / f : void 0,
      event: i
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const er = typeof XMLHttpRequest < "u", tr = er && function(e) {
  return new Promise(function(n, r) {
    let i = e.data;
    const o = F.from(e.headers).normalize(), s = e.responseType;
    let c;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    a.isFormData(i) && (L.isStandardBrowserEnv || L.isStandardBrowserWebWorkerEnv) && o.setContentType(!1);
    let l = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", u = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(y + ":" + u));
    }
    const d = Dt(e.baseURL, e.url);
    l.open(e.method.toUpperCase(), Ot(d, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
    function h() {
      if (!l)
        return;
      const y = F.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), p = {
        data: !s || s === "text" || s === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: y,
        config: e,
        request: l
      };
      Gn(function(v) {
        n(v), f();
      }, function(v) {
        r(v), f();
      }, p), l = null;
    }
    if ("onloadend" in l ? l.onloadend = h : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, l.onabort = function() {
      l && (r(new w("Request aborted", w.ECONNABORTED, e, l)), l = null);
    }, l.onerror = function() {
      r(new w("Network Error", w.ERR_NETWORK, e, l)), l = null;
    }, l.ontimeout = function() {
      let u = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || xt;
      e.timeoutErrorMessage && (u = e.timeoutErrorMessage), r(new w(
        u,
        p.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
        e,
        l
      )), l = null;
    }, L.isStandardBrowserEnv) {
      const y = (e.withCredentials || Yn(d)) && e.xsrfCookieName && qn.read(e.xsrfCookieName);
      y && o.set(e.xsrfHeaderName, y);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in l && a.forEach(o.toJSON(), function(u, p) {
      l.setRequestHeader(p, u);
    }), a.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), s && s !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", tt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", tt(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (y) => {
      l && (r(!y || y.type ? new Q(null, e, l) : y), l.abort(), l = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const g = Kn(d);
    if (g && L.protocols.indexOf(g) === -1) {
      r(new w("Unsupported protocol " + g + ":", w.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(i || null);
  });
}, ae = {
  http: On,
  xhr: tr
};
a.forEach(ae, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nr = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let i = 0; i < t && (n = e[i], !(r = a.isString(n) ? ae[n.toLowerCase()] : n)); i++)
      ;
    if (!r)
      throw r === !1 ? new w(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        a.hasOwnProp(ae, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!a.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: ae
};
function Se(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Q(null, e);
}
function nt(e) {
  return Se(e), e.headers = F.from(e.headers), e.data = Ie.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), nr.getAdapter(e.adapter || Pe.adapter)(e).then(function(r) {
    return Se(e), r.data = Ie.call(
      e,
      e.transformResponse,
      r
    ), r.headers = F.from(r.headers), r;
  }, function(r) {
    return Ct(r) || (Se(e), r && r.response && (r.response.data = Ie.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = F.from(r.response.headers))), Promise.reject(r);
  });
}
const rt = (e) => e instanceof F ? e.toJSON() : e;
function G(e, t) {
  t = t || {};
  const n = {};
  function r(l, d, h) {
    return a.isPlainObject(l) && a.isPlainObject(d) ? a.merge.call({ caseless: h }, l, d) : a.isPlainObject(d) ? a.merge({}, d) : a.isArray(d) ? d.slice() : d;
  }
  function i(l, d, h) {
    if (a.isUndefined(d)) {
      if (!a.isUndefined(l))
        return r(void 0, l, h);
    } else
      return r(l, d, h);
  }
  function o(l, d) {
    if (!a.isUndefined(d))
      return r(void 0, d);
  }
  function s(l, d) {
    if (a.isUndefined(d)) {
      if (!a.isUndefined(l))
        return r(void 0, l);
    } else
      return r(void 0, d);
  }
  function c(l, d, h) {
    if (h in t)
      return r(l, d);
    if (h in e)
      return r(void 0, l);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: c,
    headers: (l, d) => i(rt(l), rt(d), !0)
  };
  return a.forEach(Object.keys(e).concat(Object.keys(t)), function(d) {
    const h = f[d] || i, g = h(e[d], t[d], d);
    a.isUndefined(g) && h !== c || (n[d] = g);
  }), n;
}
const Bt = "1.3.3", Ue = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ue[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const it = {};
Ue.transitional = function(t, n, r) {
  function i(o, s) {
    return "[Axios v" + Bt + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, c) => {
    if (t === !1)
      throw new w(
        i(s, " has been removed" + (n ? " in " + n : "")),
        w.ERR_DEPRECATED
      );
    return n && !it[s] && (it[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, s, c) : !0;
  };
};
function rr(e, t, n) {
  if (typeof e != "object")
    throw new w("options must be an object", w.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], s = t[o];
    if (s) {
      const c = e[o], f = c === void 0 || s(c, o, e);
      if (f !== !0)
        throw new w("option " + o + " must be " + f, w.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new w("Unknown option " + o, w.ERR_BAD_OPTION);
  }
}
const Te = {
  assertOptions: rr,
  validators: Ue
}, k = Te.validators;
class ce {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Qe(),
      response: new Qe()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = G(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 && Te.assertOptions(r, {
      silentJSONParsing: k.transitional(k.boolean),
      forcedJSONParsing: k.transitional(k.boolean),
      clarifyTimeoutError: k.transitional(k.boolean)
    }, !1), i !== void 0 && Te.assertOptions(i, {
      encode: k.function,
      serialize: k.function
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = o && a.merge(
      o.common,
      o[n.method]
    ), s && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (u) => {
        delete o[u];
      }
    ), n.headers = F.concat(s, o);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (f = f && p.synchronous, c.unshift(p.fulfilled, p.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(p) {
      l.push(p.fulfilled, p.rejected);
    });
    let d, h = 0, g;
    if (!f) {
      const u = [nt.bind(this), void 0];
      for (u.unshift.apply(u, c), u.push.apply(u, l), g = u.length, d = Promise.resolve(n); h < g; )
        d = d.then(u[h++], u[h++]);
      return d;
    }
    g = c.length;
    let y = n;
    for (h = 0; h < g; ) {
      const u = c[h++], p = c[h++];
      try {
        y = u(y);
      } catch (m) {
        p.call(this, m);
        break;
      }
    }
    try {
      d = nt.call(this, y);
    } catch (u) {
      return Promise.reject(u);
    }
    for (h = 0, g = l.length; h < g; )
      d = d.then(l[h++], l[h++]);
    return d;
  }
  getUri(t) {
    t = G(this.defaults, t);
    const n = Dt(t.baseURL, t.url);
    return Ot(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  ce.prototype[t] = function(n, r) {
    return this.request(G(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, s, c) {
      return this.request(G(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  ce.prototype[t] = n(), ce.prototype[t + "Form"] = n(!0);
});
const le = ce;
class Me {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const s = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(i);
      return s.cancel = function() {
        r.unsubscribe(o);
      }, s;
    }, t(function(o, s, c) {
      r.reason || (r.reason = new Q(o, s, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Me(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const ir = Me;
function or(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function sr(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Oe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Oe).forEach(([e, t]) => {
  Oe[t] = e;
});
const ar = Oe;
function Pt(e) {
  const t = new le(e), n = pt(le.prototype.request, t);
  return a.extend(n, le.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return Pt(G(e, i));
  }, n;
}
const T = Pt(Pe);
T.Axios = le;
T.CanceledError = Q;
T.CancelToken = ir;
T.isCancel = Ct;
T.VERSION = Bt;
T.toFormData = he;
T.AxiosError = w;
T.Cancel = T.CanceledError;
T.all = function(t) {
  return Promise.all(t);
};
T.spread = or;
T.isAxiosError = sr;
T.mergeConfig = G;
T.AxiosHeaders = F;
T.formToJSON = (e) => Nt(a.isHTMLForm(e) ? new FormData(e) : e);
T.HttpStatusCode = ar;
T.default = T;
const lr = T, cr = () => {
  const e = ["jpg", "png", "jpeg", "webp", "svg"], t = ["xlsx", "xlsm", "xlsb", "xltx", "csv"], n = ["mp4", "mov", "mkv", "flv", "avi", "webm"], r = ["docm", "docx", "dot", "dotx"], i = ["txt", "text"], o = ["pdf", "ps"], s = /* @__PURE__ */ new Map();
  s.set("excel", t), s.set("image", e), s.set("pdf", o), s.set("text", i), s.set("video", n), s.set("word", r);
  const c = (p) => new Promise((m, v) => {
    const I = new FileReader();
    I.readAsDataURL(p), I.onload = () => {
      m(I.result);
    }, I.onerror = (R) => v(R);
  }), f = (p = "") => {
    const m = p.split(".").pop();
    return m && typeof m == "string" ? m : "";
  }, l = (p, m) => {
    var v;
    return (v = s.get(m)) == null ? void 0 : v.includes(p);
  }, d = (p) => {
    const m = p.split("_")[1];
    return m || p;
  }, h = (p) => `${(+p / 1e6).toFixed(2)}MB`;
  function g(p) {
    let m = "image";
    return s.forEach((v, I) => {
      l(p, I) && (m = I);
    }), m;
  }
  function y(p) {
    const m = document.createElement("input");
    m.type = "file", m.style.display = "none", document.body.appendChild(m), m.addEventListener("change", (v) => {
      const I = v.target.files[0];
      c(I).then((R) => {
        p({
          file: I,
          base64: R
        });
      });
    }), m.click();
  }
  async function u(p, m = { responseType: "blob" }) {
    lr.get(p, { ...m }).then(({ data: v }) => {
      const I = window.URL.createObjectURL(new Blob([v]));
      console.log(I);
      const R = document.createElement("a");
      R.href = I, R.setAttribute("download", I), document.body.appendChild(R), R.click(), R.remove();
    });
  }
  return {
    toBase64: c,
    getFileSize: h,
    getFileName: d,
    getFileExt: f,
    getFileType: g,
    openFileWindow: y,
    EXCEL_EXTENTIONS: t,
    IMAGE_EXTENTIONS: e,
    PDF_EXTENTIONS: o,
    VIDEO_EXTENTIONS: n,
    WORD_EXTENTIONS: r,
    downloadFile: u
    // getFileUrl,
  };
};
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ur = Object.prototype.hasOwnProperty, dr = (e, t) => ur.call(e, t), fr = Array.isArray;
/*!
 * Compressor.js v1.1.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-10-05T02:32:40.212Z
 */
function ot(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ot(Object(n), !0).forEach(function(r) {
      mr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function hr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function st(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function pr(e, t, n) {
  return t && st(e.prototype, t), n && st(e, n), e;
}
function mr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ue() {
  return ue = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ue.apply(this, arguments);
}
var Ut = { exports: {} };
(function(e) {
  typeof window > "u" || function(t) {
    var n = t.HTMLCanvasElement && t.HTMLCanvasElement.prototype, r = t.Blob && function() {
      try {
        return Boolean(new Blob());
      } catch {
        return !1;
      }
    }(), i = r && t.Uint8Array && function() {
      try {
        return new Blob([new Uint8Array(100)]).size === 100;
      } catch {
        return !1;
      }
    }(), o = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || t.MSBlobBuilder, s = /^data:((.*?)(;charset=.*?)?)(;base64)?,/, c = (r || o) && t.atob && t.ArrayBuffer && t.Uint8Array && function(f) {
      var l, d, h, g, y, u, p, m, v;
      if (l = f.match(s), !l)
        throw new Error("invalid data URI");
      for (d = l[2] ? l[1] : "text/plain" + (l[3] || ";charset=US-ASCII"), h = !!l[4], g = f.slice(l[0].length), h ? y = atob(g) : y = decodeURIComponent(g), u = new ArrayBuffer(y.length), p = new Uint8Array(u), m = 0; m < y.length; m += 1)
        p[m] = y.charCodeAt(m);
      return r ? new Blob([i ? p : u], {
        type: d
      }) : (v = new o(), v.append(u), v.getBlob(d));
    };
    t.HTMLCanvasElement && !n.toBlob && (n.mozGetAsFile ? n.toBlob = function(f, l, d) {
      var h = this;
      setTimeout(function() {
        d && n.toDataURL && c ? f(c(h.toDataURL(l, d))) : f(h.mozGetAsFile("blob", l));
      });
    } : n.toDataURL && c && (n.msToBlob ? n.toBlob = function(f, l, d) {
      var h = this;
      setTimeout(function() {
        (l && l !== "image/png" || d) && n.toDataURL && c ? f(c(h.toDataURL(l, d))) : f(h.msToBlob(l));
      });
    } : n.toBlob = function(f, l, d) {
      var h = this;
      setTimeout(function() {
        f(c(h.toDataURL(l, d)));
      });
    })), e.exports ? e.exports = c : t.dataURLtoBlob = c;
  }(window);
})(Ut);
var yr = Ut.exports, gr = function(t) {
  return typeof Blob > "u" ? !1 : t instanceof Blob || Object.prototype.toString.call(t) === "[object Blob]";
}, at = {
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
}, br = typeof window < "u" && typeof window.document < "u", z = br ? window : {}, de = function(t) {
  return t > 0 && t < 1 / 0;
}, wr = Array.prototype.slice;
function vr(e) {
  return Array.from ? Array.from(e) : wr.call(e);
}
var Er = /^image\/.+$/;
function xe(e) {
  return Er.test(e);
}
function Ir(e) {
  var t = xe(e) ? e.substr(6) : "";
  return t === "jpeg" && (t = "jpg"), ".".concat(t);
}
var Mt = String.fromCharCode;
function Sr(e, t, n) {
  var r = "", i;
  for (n += t, i = t; i < n; i += 1)
    r += Mt(e.getUint8(i));
  return r;
}
var Rr = z.btoa;
function Ar(e, t) {
  for (var n = [], r = 8192, i = new Uint8Array(e); i.length > 0; )
    n.push(Mt.apply(null, vr(i.subarray(0, r)))), i = i.subarray(r);
  return "data:".concat(t, ";base64,").concat(Rr(n.join("")));
}
function Tr(e) {
  var t = new DataView(e), n;
  try {
    var r, i, o;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var s = t.byteLength, c = 2; c + 1 < s; ) {
        if (t.getUint8(c) === 255 && t.getUint8(c + 1) === 225) {
          i = c;
          break;
        }
        c += 1;
      }
    if (i) {
      var f = i + 4, l = i + 10;
      if (Sr(t, f, 4) === "Exif") {
        var d = t.getUint16(l);
        if (r = d === 18761, (r || d === 19789) && t.getUint16(l + 2, r) === 42) {
          var h = t.getUint32(l + 4, r);
          h >= 8 && (o = l + h);
        }
      }
    }
    if (o) {
      var g = t.getUint16(o, r), y, u;
      for (u = 0; u < g; u += 1)
        if (y = o + u * 12 + 2, t.getUint16(y, r) === 274) {
          y += 8, n = t.getUint16(y, r), t.setUint16(y, 1, r);
          break;
        }
    }
  } catch {
    n = 1;
  }
  return n;
}
function Or(e) {
  var t = 0, n = 1, r = 1;
  switch (e) {
    case 2:
      n = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      r = -1;
      break;
    case 5:
      t = 90, r = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, n = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: n,
    scaleY: r
  };
}
var xr = /\.\d*(?:0|9){12}\d*$/;
function lt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return xr.test(e) ? Math.round(e * t) / t : e;
}
function X(e) {
  var t = e.aspectRatio, n = e.height, r = e.width, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none", o = de(r), s = de(n);
  if (o && s) {
    var c = n * t;
    (i === "contain" || i === "none") && c > r || i === "cover" && c < r ? n = r / t : r = n * t;
  } else
    o ? n = r / t : s && (r = n * t);
  return {
    width: r,
    height: n
  };
}
var Nr = z.ArrayBuffer, ct = z.FileReader, W = z.URL || z.webkitURL, Cr = /\.\w+$/, Dr = z.Compressor, Br = /* @__PURE__ */ function() {
  function e(t, n) {
    hr(this, e), this.file = t, this.image = new Image(), this.options = re(re({}, at), n), this.aborted = !1, this.result = null, this.init();
  }
  return pr(e, [{
    key: "init",
    value: function() {
      var n = this, r = this.file, i = this.options;
      if (!gr(r)) {
        this.fail(new Error("The first argument must be a File or Blob object."));
        return;
      }
      var o = r.type;
      if (!xe(o)) {
        this.fail(new Error("The first argument must be an image File or Blob object."));
        return;
      }
      if (!W || !ct) {
        this.fail(new Error("The current browser does not support image compression."));
        return;
      }
      if (Nr || (i.checkOrientation = !1), W && !i.checkOrientation)
        this.load({
          url: W.createObjectURL(r)
        });
      else {
        var s = new ct(), c = i.checkOrientation && o === "image/jpeg";
        this.reader = s, s.onload = function(f) {
          var l = f.target, d = l.result, h = {};
          if (c) {
            var g = Tr(d);
            g > 1 || !W ? (h.url = Ar(d, o), g > 1 && ue(h, Or(g))) : h.url = W.createObjectURL(r);
          } else
            h.url = d;
          n.load(h);
        }, s.onabort = function() {
          n.fail(new Error("Aborted to read the image with FileReader."));
        }, s.onerror = function() {
          n.fail(new Error("Failed to read the image with FileReader."));
        }, s.onloadend = function() {
          n.reader = null;
        }, c ? s.readAsArrayBuffer(r) : s.readAsDataURL(r);
      }
    }
  }, {
    key: "load",
    value: function(n) {
      var r = this, i = this.file, o = this.image;
      o.onload = function() {
        r.draw(re(re({}, n), {}, {
          naturalWidth: o.naturalWidth,
          naturalHeight: o.naturalHeight
        }));
      }, o.onabort = function() {
        r.fail(new Error("Aborted to load the image."));
      }, o.onerror = function() {
        r.fail(new Error("Failed to load the image."));
      }, z.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(z.navigator.userAgent) && (o.crossOrigin = "anonymous"), o.alt = i.name, o.src = n.url;
    }
  }, {
    key: "draw",
    value: function(n) {
      var r = this, i = n.naturalWidth, o = n.naturalHeight, s = n.rotate, c = s === void 0 ? 0 : s, f = n.scaleX, l = f === void 0 ? 1 : f, d = n.scaleY, h = d === void 0 ? 1 : d, g = this.file, y = this.image, u = this.options, p = document.createElement("canvas"), m = p.getContext("2d"), v = Math.abs(c) % 180 === 90, I = (u.resize === "contain" || u.resize === "cover") && de(u.width) && de(u.height), R = Math.max(u.maxWidth, 0) || 1 / 0, B = Math.max(u.maxHeight, 0) || 1 / 0, V = Math.max(u.minWidth, 0) || 0, Z = Math.max(u.minHeight, 0) || 0, _ = i / o, O = u.width, x = u.height;
      if (v) {
        var ee = [B, R];
        R = ee[0], B = ee[1];
        var b = [Z, V];
        V = b[0], Z = b[1];
        var S = [x, O];
        O = S[0], x = S[1];
      }
      I && (_ = O / x);
      var E = X({
        aspectRatio: _,
        width: R,
        height: B
      }, "contain");
      R = E.width, B = E.height;
      var N = X({
        aspectRatio: _,
        width: V,
        height: Z
      }, "cover");
      if (V = N.width, Z = N.height, I) {
        var D = X({
          aspectRatio: _,
          width: O,
          height: x
        }, u.resize);
        O = D.width, x = D.height;
      } else {
        var Le = X({
          aspectRatio: _,
          width: O,
          height: x
        }), Fe = Le.width;
        O = Fe === void 0 ? i : Fe;
        var je = Le.height;
        x = je === void 0 ? o : je;
      }
      O = Math.floor(lt(Math.min(Math.max(O, V), R))), x = Math.floor(lt(Math.min(Math.max(x, Z), B)));
      var Ft = -O / 2, jt = -x / 2, _t = O, kt = x, ye = [];
      if (I) {
        var _e = 0, ke = 0, ge = i, be = o, He = X({
          aspectRatio: _,
          width: i,
          height: o
        }, {
          contain: "cover",
          cover: "contain"
        }[u.resize]);
        ge = He.width, be = He.height, _e = (i - ge) / 2, ke = (o - be) / 2, ye.push(_e, ke, ge, be);
      }
      if (ye.push(Ft, jt, _t, kt), v) {
        var ze = [x, O];
        O = ze[0], x = ze[1];
      }
      p.width = O, p.height = x, xe(u.mimeType) || (u.mimeType = g.type);
      var Ve = "transparent";
      if (g.size > u.convertSize && u.convertTypes.indexOf(u.mimeType) >= 0 && (u.mimeType = "image/jpeg"), u.mimeType === "image/jpeg" && (Ve = "#fff"), m.fillStyle = Ve, m.fillRect(0, 0, O, x), u.beforeDraw && u.beforeDraw.call(this, m, p), !this.aborted && (m.save(), m.translate(O / 2, x / 2), m.rotate(c * Math.PI / 180), m.scale(l, h), m.drawImage.apply(m, [y].concat(ye)), m.restore(), u.drew && u.drew.call(this, m, p), !this.aborted)) {
        var Ze = function(Ht) {
          r.aborted || r.done({
            naturalWidth: i,
            naturalHeight: o,
            result: Ht
          });
        };
        p.toBlob ? p.toBlob(Ze, u.mimeType, u.quality) : Ze(yr(p.toDataURL(u.mimeType, u.quality)));
      }
    }
  }, {
    key: "done",
    value: function(n) {
      var r = n.naturalWidth, i = n.naturalHeight, o = n.result, s = this.file, c = this.image, f = this.options;
      if (W && !f.checkOrientation && W.revokeObjectURL(c.src), o)
        if (f.strict && o.size > s.size && f.mimeType === s.type && !(f.width > r || f.height > i || f.minWidth > r || f.minHeight > i || f.maxWidth < r || f.maxHeight < i))
          o = s;
        else {
          var l = new Date();
          o.lastModified = l.getTime(), o.lastModifiedDate = l, o.name = s.name, o.name && o.type !== s.type && (o.name = o.name.replace(Cr, Ir(o.type)));
        }
      else
        o = s;
      this.result = o, f.success && f.success.call(this, o);
    }
  }, {
    key: "fail",
    value: function(n) {
      var r = this.options;
      if (r.error)
        r.error.call(this, n);
      else
        throw n;
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
      return window.Compressor = Dr, e;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(n) {
      ue(at, n);
    }
  }]), e;
}();
let ie;
const Pr = new Uint8Array(16);
function Ur() {
  if (!ie && (ie = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ie))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ie(Pr);
}
const C = [];
for (let e = 0; e < 256; ++e)
  C.push((e + 256).toString(16).slice(1));
function Mr(e, t = 0) {
  return (C[e[t + 0]] + C[e[t + 1]] + C[e[t + 2]] + C[e[t + 3]] + "-" + C[e[t + 4]] + C[e[t + 5]] + "-" + C[e[t + 6]] + C[e[t + 7]] + "-" + C[e[t + 8]] + C[e[t + 9]] + "-" + C[e[t + 10]] + C[e[t + 11]] + C[e[t + 12]] + C[e[t + 13]] + C[e[t + 14]] + C[e[t + 15]]).toLowerCase();
}
const Lr = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ut = {
  randomUUID: Lr
};
function Fr(e, t, n) {
  if (ut.randomUUID && !t && !e)
    return ut.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || Ur)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      t[n + i] = r[i];
    return t;
  }
  return Mr(r);
}
const jr = { class: "vue-file-uploader" }, _r = /* @__PURE__ */ A("span", { class: "placeholder" }, " Click Or Drop File Here ", -1), kr = /* @__PURE__ */ A("img", {
  src: Gt,
  height: "45",
  alt: ""
}, null, -1), Hr = ["src"], zr = { class: "preview-item-overlay" }, Vr = { class: "action-btns" }, Zr = ["id", "onClick"], Wr = /* @__PURE__ */ A("img", {
  height: "30",
  src: ft
}, null, -1), Jr = ["id", "onClick"], Gr = /* @__PURE__ */ A("img", {
  height: "30",
  src: qt
}, null, -1), qr = ["href", "id"], $r = /* @__PURE__ */ A("img", {
  height: "30",
  src: ht
}, null, -1), Xr = [
  $r
], Yr = ["src"], Kr = { class: "preview-item-overlay" }, Qr = {
  key: 0,
  class: "info"
}, ei = { style: { "font-weight": "bold" } }, ti = { class: "action-btns" }, ni = ["id", "onClick"], ri = /* @__PURE__ */ A("img", {
  height: "30",
  src: ft
}, null, -1), ii = [
  ri
], oi = ["href", "id"], si = /* @__PURE__ */ A("img", {
  height: "30",
  src: ht
}, null, -1), ai = [
  si
], li = ["id"], Lt = /* @__PURE__ */ dt({
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
    deleteUrlBtn: { type: Boolean, default: !0 },
    downloadBtn: { type: Boolean, default: !1 },
    openBtn: { type: Boolean, default: !0 },
    modelValue: null,
    maxHeight: null,
    deletedUrls: { default: () => [] }
  },
  emits: ["update:modelValue", "update:url", "update:deletedUrls"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { getFileExt: i, getFileType: o, downloadFile: s } = cr(), c = zt(), f = J(null), l = Date.now() * (Math.random() * 1e4), d = J([]), h = J([]), g = J([]), y = We(() => dr(c, "multiple")), u = We(() => r.modelValue);
    function p() {
      f.value && f.value.click();
    }
    function m(b) {
      return new Promise((S, E) => {
        new Br(b, {
          quality: r.quality,
          success(N) {
            S(
              new File([N], b.name, {
                lastModified: new Date().getTime(),
                type: N.type
              })
            );
          },
          error(N) {
            E(N);
          }
        });
      });
    }
    function v() {
      d.value = [], h.value = [];
    }
    function I(b, S) {
      b.stopImmediatePropagation(), d.value = d.value.filter((E) => (E.id === S && URL.revokeObjectURL(E.url), E.id !== S)), B();
    }
    async function R(b) {
      for (let S of b) {
        const E = o(i(S.name));
        if (E === "image")
          try {
            S = await m(S);
          } catch (N) {
            console.error(N);
          }
        y.value || (d.value = [], h.value = []), d.value.push({
          file: S,
          id: Fr(),
          type: E,
          url: URL.createObjectURL(S)
        });
      }
      B();
    }
    function B() {
      y.value ? (n("update:modelValue", d.value.map(({ file: b }) => b)), n("update:url", d.value.map(({ url: b }) => b))) : (n("update:modelValue", d.value.length ? d.value[0].file : null), n("update:url", d.value.length ? d.value[0].url : ""));
    }
    function V(b) {
      const S = b.target.files;
      R(S);
    }
    function Z(b) {
      b.preventDefault();
      const S = b.dataTransfer.files;
      R(S);
    }
    function _(b) {
      b.preventDefault();
    }
    function O(b, S) {
      b.stopImmediatePropagation(), g.value.push(S), h.value = h.value.filter((E) => E !== S), n("update:deletedUrls", g.value);
    }
    function x() {
      r.url && (console.log("url", r.url), typeof r.url == "string" ? h.value.push(r.url) : Array.isArray(r.url) && (h.value = [...h.value, ...r.url]));
    }
    function ee(b) {
      return new URL(b, import.meta.url).href;
    }
    return Vt(
      u,
      (b) => {
        console.log("model Value Change", b), (b === null || fr(b) && b.length === 0) && v();
      },
      { deep: !0 }
    ), t({
      reset: v
    }), x(), (b, S) => (U(), M("div", jr, [
      A("button", {
        type: "button",
        class: "vue-file-uploader-btn",
        onClick: p,
        onDrop: Z,
        onDragover: _
      }, [
        te(b.$slots, "default", {}, () => [
          _r,
          kr
        ]),
        A("div", {
          class: P(["vue-file-uploader-preview", [{ multi: Je(y) }, e.previwerContainerClass]])
        }, [
          (U(!0), M(Ge, null, qe(h.value, (E, N) => (U(), M("div", {
            key: N,
            class: P(["vue-file-uploader-preview-item", e.previwerItemClass])
          }, [
            A("img", {
              src: E,
              class: P([e.previewImageClass, "preview-img"])
            }, null, 10, Hr),
            A("div", zr, [
              A("div", Vr, [
                A("button", {
                  id: `delete-btn-${N}`,
                  class: P(["action-btn", e.deleteBtnClass]),
                  onClick: (D) => O(D, E)
                }, [
                  te(b.$slots, "delete-btn", {}, () => [
                    Wr
                  ])
                ], 10, Zr),
                e.downloadBtn ? (U(), M("button", {
                  key: 0,
                  id: `delete-btn-${N}`,
                  class: P([e.deleteBtnClass, "action-btn"]),
                  onClick: (D) => {
                    D.stopImmediatePropagation(), Je(s)(E);
                  }
                }, [
                  te(b.$slots, "delete-btn", {}, () => [
                    Gr
                  ])
                ], 10, Jr)) : ne("", !0),
                e.openBtn ? (U(), M("a", {
                  key: 1,
                  target: "_blank",
                  href: E,
                  id: `delete-btn-${N}`,
                  onClick: S[0] || (S[0] = (D) => D.stopImmediatePropagation()),
                  class: P([e.deleteBtnClass, "action-btn"])
                }, Xr, 10, qr)) : ne("", !0)
              ])
            ])
          ], 2))), 128)),
          (U(!0), M(Ge, null, qe(d.value, (E, N) => (U(), M("div", {
            key: E.id,
            class: P(["vue-file-uploader-preview-item", e.previwerItemClass])
          }, [
            A("img", {
              class: P(["preview-img", e.previewImageClass]),
              src: E.type === "image" ? E.url : ee(`./assets/icons/${E.type}.png`)
            }, null, 10, Yr),
            A("div", Kr, [
              E.file ? (U(), M("div", Qr, [
                te(b.$slots, "info-overlay", {}, () => [
                  A("h6", ei, we(E.file.name), 1),
                  A("span", null, "Type : " + we(E.type), 1),
                  A("span", null, "Size : " + we((E.file.size / 1e6).toFixed(2)) + "mb", 1)
                ])
              ])) : ne("", !0),
              A("div", ti, [
                A("button", {
                  id: `delete-btn-${N}`,
                  class: P([e.deleteBtnClass, "action-btn"]),
                  onClick: (D) => I(D, E.id)
                }, ii, 10, ni),
                e.openBtn ? (U(), M("a", {
                  key: 0,
                  target: "_blank",
                  href: E.url,
                  id: `delete-btn-${N}`,
                  class: P([e.deleteBtnClass, "action-btn"]),
                  onClick: S[1] || (S[1] = (D) => D.stopImmediatePropagation())
                }, ai, 10, oi)) : ne("", !0)
              ])
            ])
          ], 2))), 128))
        ], 2)
      ], 32),
      A("input", Zt({
        id: `file-uploader-${l}`,
        ref_key: "fileInput",
        ref: f
      }, b.$attrs, {
        type: "file",
        hidden: "",
        onChange: V
      }), null, 16, li)
    ]));
  }
});
const ci = { class: "form" }, ui = /* @__PURE__ */ dt({
  __name: "App",
  setup(e) {
    J(["https://www.planetsport.com/image-library/square/1200/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg"]);
    const t = J("https://www.planetsport.com/image-library/square/1200/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg"), n = J([]);
    return (r, i) => (U(), M("div", null, [
      A("div", ci, [
        Wt(Lt, {
          "deleted-urls": n.value,
          "onUpdate:deletedUrls": i[0] || (i[0] = (o) => n.value = o),
          url: t.value,
          "onUpdate:url": i[1] || (i[1] = (o) => t.value = o)
        }, null, 8, ["deleted-urls", "url"])
      ])
    ]));
  }
});
const di = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, fi = /* @__PURE__ */ di(ui, [["__scopeId", "data-v-32c38364"]]);
Jt(fi).mount("#app");
const mi = {
  install: (e, t) => {
    e.component("FileUploader", Lt);
  }
};
export {
  Lt as FileUploader,
  mi as default
};
