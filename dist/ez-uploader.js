import { openBlock as N, createElementBlock as U, createElementVNode as R, defineComponent as At, useAttrs as Qt, ref as M, computed as nt, watch as en, renderSlot as ce, createVNode as G, normalizeClass as D, unref as rt, Fragment as ot, renderList as it, createCommentVNode as te, toDisplayString as de, mergeProps as tn, createApp as nn } from "vue";
const rn = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMCAxNFYxNy41QzIwIDIwLjU1NzcgMTYgMjAuNSAxMiAyMC41QzggMjAuNSA0IDIwLjU1NzcgNCAxNy41VjE0TTEyIDE1TDEyIDNNMTIgMTVMOCAxMU0xMiAxNUwxNiAxMSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4=";
function St(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: on } = Object.prototype, { getPrototypeOf: ze } = Object, ve = ((e) => (t) => {
  const n = on.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), I = (e) => (e = e.toLowerCase(), (t) => ve(t) === e), Ee = (e) => (t) => typeof t === e, { isArray: Z } = Array, ne = Ee("undefined");
function sn(e) {
  return e !== null && !ne(e) && e.constructor !== null && !ne(e.constructor) && F(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Tt = I("ArrayBuffer");
function an(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Tt(e.buffer), t;
}
const ln = Ee("string"), F = Ee("function"), Ct = Ee("number"), xe = (e) => e !== null && typeof e == "object", cn = (e) => e === !0 || e === !1, he = (e) => {
  if (ve(e) !== "object")
    return !1;
  const t = ze(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, un = I("Date"), fn = I("File"), dn = I("Blob"), hn = I("FileList"), pn = (e) => xe(e) && F(e.pipe), mn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || F(e.append) && ((t = ve(e)) === "formdata" || // detect form-data instance
  t === "object" && F(e.toString) && e.toString() === "[object FormData]"));
}, yn = I("URLSearchParams"), gn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function re(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Z(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let c;
    for (r = 0; r < s; r++)
      c = i[r], t.call(null, e[c], c, e);
  }
}
function Bt(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const _t = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Nt = (e) => !ne(e) && e !== _t;
function ke() {
  const { caseless: e } = Nt(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && Bt(t, o) || o;
    he(t[i]) && he(r) ? t[i] = ke(t[i], r) : he(r) ? t[i] = ke({}, r) : Z(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && re(arguments[r], n);
  return t;
}
const wn = (e, t, n, { allOwnKeys: r } = {}) => (re(t, (o, i) => {
  n && F(o) ? e[i] = St(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), bn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), vn = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, En = (e, t, n, r) => {
  let o, i, s;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !c[s] && (t[s] = e[s], c[s] = !0);
    e = n !== !1 && ze(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, xn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, On = (e) => {
  if (!e)
    return null;
  if (Z(e))
    return e;
  let t = e.length;
  if (!Ct(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Rn = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ze(Uint8Array)), An = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, Sn = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Tn = I("HTMLFormElement"), Cn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), st = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Bn = I("RegExp"), Ut = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  re(n, (o, i) => {
    t(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, _n = (e) => {
  Ut(e, (t, n) => {
    if (F(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (F(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Nn = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return Z(e) ? r(e) : r(String(e).split(t)), n;
}, Un = () => {
}, Pn = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ne = "abcdefghijklmnopqrstuvwxyz", at = "0123456789", Pt = {
  DIGIT: at,
  ALPHA: Ne,
  ALPHA_DIGIT: Ne + Ne.toUpperCase() + at
}, Fn = (e = 16, t = Pt.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Dn(e) {
  return !!(e && F(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const kn = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (xe(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = Z(r) ? [] : {};
        return re(r, (s, c) => {
          const d = n(s, o + 1);
          !ne(d) && (i[c] = d);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, In = I("AsyncFunction"), Ln = (e) => e && (xe(e) || F(e)) && F(e.then) && F(e.catch), l = {
  isArray: Z,
  isArrayBuffer: Tt,
  isBuffer: sn,
  isFormData: mn,
  isArrayBufferView: an,
  isString: ln,
  isNumber: Ct,
  isBoolean: cn,
  isObject: xe,
  isPlainObject: he,
  isUndefined: ne,
  isDate: un,
  isFile: fn,
  isBlob: dn,
  isRegExp: Bn,
  isFunction: F,
  isStream: pn,
  isURLSearchParams: yn,
  isTypedArray: Rn,
  isFileList: hn,
  forEach: re,
  merge: ke,
  extend: wn,
  trim: gn,
  stripBOM: bn,
  inherits: vn,
  toFlatObject: En,
  kindOf: ve,
  kindOfTest: I,
  endsWith: xn,
  toArray: On,
  forEachEntry: An,
  matchAll: Sn,
  isHTMLForm: Tn,
  hasOwnProperty: st,
  hasOwnProp: st,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ut,
  freezeMethods: _n,
  toObjectSet: Nn,
  toCamelCase: Cn,
  noop: Un,
  toFiniteNumber: Pn,
  findKey: Bt,
  global: _t,
  isContextDefined: Nt,
  ALPHABET: Pt,
  generateString: Fn,
  isSpecCompliantForm: Dn,
  toJSONObject: kn,
  isAsyncFn: In,
  isThenable: Ln
};
function b(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
l.inherits(b, Error, {
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
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Ft = b.prototype, Dt = {};
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
  Dt[e] = { value: e };
});
Object.defineProperties(b, Dt);
Object.defineProperty(Ft, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, o, i) => {
  const s = Object.create(Ft);
  return l.toFlatObject(e, s, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), b.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const jn = null;
function Ie(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function kt(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function lt(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = kt(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Mn(e) {
  return l.isArray(e) && !e.some(Ie);
}
const zn = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Oe(e, t, n) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = l.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, y) {
    return !l.isUndefined(y[p]);
  });
  const r = n.metaTokens, o = n.visitor || f, i = n.dots, s = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(o))
    throw new TypeError("visitor must be a function");
  function a(u) {
    if (u === null)
      return "";
    if (l.isDate(u))
      return u.toISOString();
    if (!d && l.isBlob(u))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(u) || l.isTypedArray(u) ? d && typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function f(u, p, y) {
    let v = u;
    if (u && !y && typeof u == "object") {
      if (l.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), u = JSON.stringify(u);
      else if (l.isArray(u) && Mn(u) || (l.isFileList(u) || l.endsWith(p, "[]")) && (v = l.toArray(u)))
        return p = kt(p), v.forEach(function(A, L) {
          !(l.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? lt([p], L, i) : s === null ? p : p + "[]",
            a(A)
          );
        }), !1;
    }
    return Ie(u) ? !0 : (t.append(lt(y, p, i), a(u)), !1);
  }
  const h = [], w = Object.assign(zn, {
    defaultVisitor: f,
    convertValue: a,
    isVisitable: Ie
  });
  function m(u, p) {
    if (!l.isUndefined(u)) {
      if (h.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      h.push(u), l.forEach(u, function(v, x) {
        (!(l.isUndefined(v) || v === null) && o.call(
          t,
          v,
          l.isString(x) ? x.trim() : x,
          p,
          w
        )) === !0 && m(v, p ? p.concat(x) : [x]);
      }), h.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function ct(e) {
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
function He(e, t) {
  this._pairs = [], e && Oe(e, this, t);
}
const It = He.prototype;
It.append = function(t, n) {
  this._pairs.push([t, n]);
};
It.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ct);
  } : ct;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Hn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Lt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Hn, o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = l.isURLSearchParams(t) ? t.toString() : new He(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class $n {
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
    l.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ut = $n, jt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Vn = typeof URLSearchParams < "u" ? URLSearchParams : He, Wn = typeof FormData < "u" ? FormData : null, qn = typeof Blob < "u" ? Blob : null, Jn = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Gn = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), k = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Vn,
    FormData: Wn,
    Blob: qn
  },
  isStandardBrowserEnv: Jn,
  isStandardBrowserWebWorkerEnv: Gn,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Xn(e, t) {
  return Oe(e, new k.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return k.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Zn(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Kn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function Mt(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    const c = Number.isFinite(+s), d = i >= n.length;
    return s = !s && l.isArray(o) ? o.length : s, d ? (l.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !c) : ((!o[s] || !l.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && l.isArray(o[s]) && (o[s] = Kn(o[s])), !c);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const n = {};
    return l.forEachEntry(e, (r, o) => {
      t(Zn(r), o, n, 0);
    }), n;
  }
  return null;
}
const Yn = {
  "Content-Type": void 0
};
function Qn(e, t, n) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Re = {
  transitional: jt,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = l.isObject(t);
    if (i && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return o && o ? JSON.stringify(Mt(t)) : t;
    if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t))
      return t;
    if (l.isArrayBufferView(t))
      return t.buffer;
    if (l.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Xn(t, this.formSerializer).toString();
      if ((c = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return Oe(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), Qn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Re.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && l.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (s)
          throw c.name === "SyntaxError" ? b.from(c, b.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
    FormData: k.classes.FormData,
    Blob: k.classes.Blob
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
l.forEach(["delete", "get", "head"], function(t) {
  Re.headers[t] = {};
});
l.forEach(["post", "put", "patch"], function(t) {
  Re.headers[t] = l.merge(Yn);
});
const $e = Re, er = l.toObjectSet([
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
]), tr = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && er[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ft = Symbol("internals");
function Q(e) {
  return e && String(e).trim().toLowerCase();
}
function pe(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(pe) : String(e);
}
function nr(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const rr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ue(e, t, n, r, o) {
  if (l.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!l.isString(t)) {
    if (l.isString(r))
      return t.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(t);
  }
}
function or(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ir(e, t) {
  const n = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
class Ae {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(c, d, a) {
      const f = Q(d);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const h = l.findKey(o, f);
      (!h || o[h] === void 0 || a === !0 || a === void 0 && o[h] !== !1) && (o[h || d] = pe(c));
    }
    const s = (c, d) => l.forEach(c, (a, f) => i(a, f, d));
    return l.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : l.isString(t) && (t = t.trim()) && !rr(t) ? s(tr(t), n) : t != null && i(n, t, r), this;
  }
  get(t, n) {
    if (t = Q(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return nr(o);
        if (l.isFunction(n))
          return n.call(this, o, r);
        if (l.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Q(t), t) {
      const r = l.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ue(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = Q(s), s) {
        const c = l.findKey(r, s);
        c && (!n || Ue(r, r[c], c, n)) && (delete r[c], o = !0);
      }
    }
    return l.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Ue(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return l.forEach(this, (o, i) => {
      const s = l.findKey(r, i);
      if (s) {
        n[s] = pe(o), delete n[i];
        return;
      }
      const c = t ? or(i) : String(i).trim();
      c !== i && delete n[i], n[c] = pe(o), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && l.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[ft] = this[ft] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const c = Q(s);
      r[c] || (ir(o, s), r[c] = !0);
    }
    return l.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Ae.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.freezeMethods(Ae.prototype);
l.freezeMethods(Ae);
const z = Ae;
function Pe(e, t) {
  const n = this || $e, r = t || n, o = z.from(r.headers);
  let i = r.data;
  return l.forEach(e, function(c) {
    i = c.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function zt(e) {
  return !!(e && e.__CANCEL__);
}
function oe(e, t, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n), this.name = "CanceledError";
}
l.inherits(oe, b, {
  __CANCEL__: !0
});
function sr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new b(
    "Request failed with status code " + n.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const ar = k.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, i, s, c) {
        const d = [];
        d.push(n + "=" + encodeURIComponent(r)), l.isNumber(o) && d.push("expires=" + new Date(o).toGMTString()), l.isString(i) && d.push("path=" + i), l.isString(s) && d.push("domain=" + s), c === !0 && d.push("secure"), document.cookie = d.join("; ");
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
function lr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function cr(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ht(e, t) {
  return e && !lr(t) ? cr(e, t) : t;
}
const ur = k.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(i) {
      let s = i;
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
    return r = o(window.location.href), function(s) {
      const c = l.isString(s) ? o(s) : s;
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
function fr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function dr(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const a = Date.now(), f = r[i];
    s || (s = a), n[o] = d, r[o] = a;
    let h = i, w = 0;
    for (; h !== o; )
      w += n[h++], h = h % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), a - s < t)
      return;
    const m = f && a - f;
    return m ? Math.round(w * 1e3 / m) : void 0;
  };
}
function dt(e, t) {
  let n = 0;
  const r = dr(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, c = i - n, d = r(c), a = i <= s;
    n = i;
    const f = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: c,
      rate: d || void 0,
      estimated: d && s && a ? (s - i) / d : void 0,
      event: o
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
const hr = typeof XMLHttpRequest < "u", pr = hr && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const i = z.from(e.headers).normalize(), s = e.responseType;
    let c;
    function d() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    l.isFormData(o) && (k.isStandardBrowserEnv || k.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let a = new XMLHttpRequest();
    if (e.auth) {
      const m = e.auth.username || "", u = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(m + ":" + u));
    }
    const f = Ht(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), Lt(f, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function h() {
      if (!a)
        return;
      const m = z.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), p = {
        data: !s || s === "text" || s === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: m,
        config: e,
        request: a
      };
      sr(function(v) {
        n(v), d();
      }, function(v) {
        r(v), d();
      }, p), a = null;
    }
    if ("onloadend" in a ? a.onloadend = h : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, a.onabort = function() {
      a && (r(new b("Request aborted", b.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      r(new b("Network Error", b.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let u = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || jt;
      e.timeoutErrorMessage && (u = e.timeoutErrorMessage), r(new b(
        u,
        p.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        a
      )), a = null;
    }, k.isStandardBrowserEnv) {
      const m = (e.withCredentials || ur(f)) && e.xsrfCookieName && ar.read(e.xsrfCookieName);
      m && i.set(e.xsrfHeaderName, m);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in a && l.forEach(i.toJSON(), function(u, p) {
      a.setRequestHeader(p, u);
    }), l.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), s && s !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", dt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", dt(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (m) => {
      a && (r(!m || m.type ? new oe(null, e, a) : m), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const w = fr(f);
    if (w && k.protocols.indexOf(w) === -1) {
      r(new b("Unsupported protocol " + w + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(o || null);
  });
}, me = {
  http: jn,
  xhr: pr
};
l.forEach(me, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const mr = {
  getAdapter: (e) => {
    e = l.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && (n = e[o], !(r = l.isString(n) ? me[n.toLowerCase()] : n)); o++)
      ;
    if (!r)
      throw r === !1 ? new b(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        l.hasOwnProp(me, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!l.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: me
};
function Fe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new oe(null, e);
}
function ht(e) {
  return Fe(e), e.headers = z.from(e.headers), e.data = Pe.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), mr.getAdapter(e.adapter || $e.adapter)(e).then(function(r) {
    return Fe(e), r.data = Pe.call(
      e,
      e.transformResponse,
      r
    ), r.headers = z.from(r.headers), r;
  }, function(r) {
    return zt(r) || (Fe(e), r && r.response && (r.response.data = Pe.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = z.from(r.response.headers))), Promise.reject(r);
  });
}
const pt = (e) => e instanceof z ? e.toJSON() : e;
function X(e, t) {
  t = t || {};
  const n = {};
  function r(a, f, h) {
    return l.isPlainObject(a) && l.isPlainObject(f) ? l.merge.call({ caseless: h }, a, f) : l.isPlainObject(f) ? l.merge({}, f) : l.isArray(f) ? f.slice() : f;
  }
  function o(a, f, h) {
    if (l.isUndefined(f)) {
      if (!l.isUndefined(a))
        return r(void 0, a, h);
    } else
      return r(a, f, h);
  }
  function i(a, f) {
    if (!l.isUndefined(f))
      return r(void 0, f);
  }
  function s(a, f) {
    if (l.isUndefined(f)) {
      if (!l.isUndefined(a))
        return r(void 0, a);
    } else
      return r(void 0, f);
  }
  function c(a, f, h) {
    if (h in t)
      return r(a, f);
    if (h in e)
      return r(void 0, a);
  }
  const d = {
    url: i,
    method: i,
    data: i,
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
    headers: (a, f) => o(pt(a), pt(f), !0)
  };
  return l.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const h = d[f] || o, w = h(e[f], t[f], f);
    l.isUndefined(w) && h !== c || (n[f] = w);
  }), n;
}
const $t = "1.4.0", Ve = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ve[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const mt = {};
Ve.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + $t + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, c) => {
    if (t === !1)
      throw new b(
        o(s, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return n && !mt[s] && (mt[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, s, c) : !0;
  };
};
function yr(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const c = e[i], d = c === void 0 || s(c, i, e);
      if (d !== !0)
        throw new b("option " + i + " must be " + d, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new b("Unknown option " + i, b.ERR_BAD_OPTION);
  }
}
const Le = {
  assertOptions: yr,
  validators: Ve
}, $ = Le.validators;
class ge {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ut(),
      response: new ut()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = X(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Le.assertOptions(r, {
      silentJSONParsing: $.transitional($.boolean),
      forcedJSONParsing: $.transitional($.boolean),
      clarifyTimeoutError: $.transitional($.boolean)
    }, !1), o != null && (l.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Le.assertOptions(o, {
      encode: $.function,
      serialize: $.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = i && l.merge(
      i.common,
      i[n.method]
    ), s && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (u) => {
        delete i[u];
      }
    ), n.headers = z.concat(s, i);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (d = d && p.synchronous, c.unshift(p.fulfilled, p.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function(p) {
      a.push(p.fulfilled, p.rejected);
    });
    let f, h = 0, w;
    if (!d) {
      const u = [ht.bind(this), void 0];
      for (u.unshift.apply(u, c), u.push.apply(u, a), w = u.length, f = Promise.resolve(n); h < w; )
        f = f.then(u[h++], u[h++]);
      return f;
    }
    w = c.length;
    let m = n;
    for (h = 0; h < w; ) {
      const u = c[h++], p = c[h++];
      try {
        m = u(m);
      } catch (y) {
        p.call(this, y);
        break;
      }
    }
    try {
      f = ht.call(this, m);
    } catch (u) {
      return Promise.reject(u);
    }
    for (h = 0, w = a.length; h < w; )
      f = f.then(a[h++], a[h++]);
    return f;
  }
  getUri(t) {
    t = X(this.defaults, t);
    const n = Ht(t.baseURL, t.url);
    return Lt(n, t.params, t.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(t) {
  ge.prototype[t] = function(n, r) {
    return this.request(X(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, c) {
      return this.request(X(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  ge.prototype[t] = n(), ge.prototype[t + "Form"] = n(!0);
});
const ye = ge;
class We {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((c) => {
        r.subscribe(c), i = c;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(i);
      }, s;
    }, t(function(i, s, c) {
      r.reason || (r.reason = new oe(i, s, c), n(r.reason));
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
      token: new We(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const gr = We;
function wr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function br(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const je = {
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
Object.entries(je).forEach(([e, t]) => {
  je[t] = e;
});
const vr = je;
function Vt(e) {
  const t = new ye(e), n = St(ye.prototype.request, t);
  return l.extend(n, ye.prototype, t, { allOwnKeys: !0 }), l.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Vt(X(e, o));
  }, n;
}
const S = Vt($e);
S.Axios = ye;
S.CanceledError = oe;
S.CancelToken = gr;
S.isCancel = zt;
S.VERSION = $t;
S.toFormData = Oe;
S.AxiosError = b;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = wr;
S.isAxiosError = br;
S.mergeConfig = X;
S.AxiosHeaders = z;
S.formToJSON = (e) => Mt(l.isHTMLForm(e) ? new FormData(e) : e);
S.HttpStatusCode = vr;
S.default = S;
const Er = S, xr = () => {
  const e = ["jpg", "png", "jpeg", "webp", "svg"], t = ["xlsx", "xlsm", "xlsb", "xltx", "csv"], n = ["mp4", "mov", "mkv", "flv", "avi", "webm"], r = ["docm", "docx", "dot", "dotx"], o = ["txt", "text"], i = ["pdf", "ps"], s = /* @__PURE__ */ new Map();
  s.set("excel", t), s.set("image", e), s.set("pdf", i), s.set("text", o), s.set("video", n), s.set("word", r);
  const c = (p) => new Promise((y, v) => {
    const x = new FileReader();
    x.readAsDataURL(p), x.onload = () => {
      y(x.result);
    }, x.onerror = (A) => v(A);
  }), d = (p = "") => {
    const y = p.split(".").pop();
    return y && typeof y == "string" ? y : "";
  }, a = (p, y) => {
    var v;
    return (v = s.get(y)) == null ? void 0 : v.includes(p);
  }, f = (p) => {
    const y = p.split("_")[1];
    return y || p;
  }, h = (p) => `${(+p / 1e6).toFixed(2)}MB`;
  function w(p) {
    let y = "image";
    return s.forEach((v, x) => {
      a(p, x) && (y = x);
    }), y;
  }
  function m(p) {
    const y = document.createElement("input");
    y.type = "file", y.style.display = "none", document.body.appendChild(y), y.addEventListener("change", (v) => {
      const x = v.target.files[0];
      c(x).then((A) => {
        p({
          file: x,
          base64: A
        });
      });
    }), y.click();
  }
  async function u(p, y = { responseType: "blob" }) {
    Er.get(p, { ...y }).then(({ data: v }) => {
      const x = window.URL.createObjectURL(new Blob([v]));
      console.log(x);
      const A = document.createElement("a");
      A.href = x, A.setAttribute("download", x), document.body.appendChild(A), A.click(), A.remove();
    });
  }
  return {
    toBase64: c,
    getFileSize: h,
    getFileName: f,
    getFileExt: d,
    getFileType: w,
    openFileWindow: m,
    EXCEL_EXTENTIONS: t,
    IMAGE_EXTENTIONS: e,
    PDF_EXTENTIONS: i,
    VIDEO_EXTENTIONS: n,
    WORD_EXTENTIONS: r,
    downloadFile: u
    // getFileUrl,
  };
};
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Or = Object.prototype.hasOwnProperty, Rr = (e, t) => Or.call(e, t), Ar = Array.isArray;
/*!
 * Compressor.js v1.2.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-02-28T14:09:41.732Z
 */
function yt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yt(Object(n), !0).forEach(function(r) {
      Cr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yt(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Sr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gt(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Wt(r.key), r);
  }
}
function Tr(e, t, n) {
  return t && gt(e.prototype, t), n && gt(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Cr(e, t, n) {
  return t = Wt(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function we() {
  return we = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, we.apply(this, arguments);
}
function Br(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wt(e) {
  var t = Br(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var qt = { exports: {} };
(function(e) {
  typeof window > "u" || function(t) {
    var n = t.HTMLCanvasElement && t.HTMLCanvasElement.prototype, r = t.Blob && function() {
      try {
        return !!new Blob();
      } catch {
        return !1;
      }
    }(), o = r && t.Uint8Array && function() {
      try {
        return new Blob([new Uint8Array(100)]).size === 100;
      } catch {
        return !1;
      }
    }(), i = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || t.MSBlobBuilder, s = /^data:((.*?)(;charset=.*?)?)(;base64)?,/, c = (r || i) && t.atob && t.ArrayBuffer && t.Uint8Array && function(d) {
      var a, f, h, w, m, u, p, y, v;
      if (a = d.match(s), !a)
        throw new Error("invalid data URI");
      for (f = a[2] ? a[1] : "text/plain" + (a[3] || ";charset=US-ASCII"), h = !!a[4], w = d.slice(a[0].length), h ? m = atob(w) : m = decodeURIComponent(w), u = new ArrayBuffer(m.length), p = new Uint8Array(u), y = 0; y < m.length; y += 1)
        p[y] = m.charCodeAt(y);
      return r ? new Blob([o ? p : u], {
        type: f
      }) : (v = new i(), v.append(u), v.getBlob(f));
    };
    t.HTMLCanvasElement && !n.toBlob && (n.mozGetAsFile ? n.toBlob = function(d, a, f) {
      var h = this;
      setTimeout(function() {
        f && n.toDataURL && c ? d(c(h.toDataURL(a, f))) : d(h.mozGetAsFile("blob", a));
      });
    } : n.toDataURL && c && (n.msToBlob ? n.toBlob = function(d, a, f) {
      var h = this;
      setTimeout(function() {
        (a && a !== "image/png" || f) && n.toDataURL && c ? d(c(h.toDataURL(a, f))) : d(h.msToBlob(a));
      });
    } : n.toBlob = function(d, a, f) {
      var h = this;
      setTimeout(function() {
        d(c(h.toDataURL(a, f)));
      });
    })), e.exports ? e.exports = c : t.dataURLtoBlob = c;
  }(window);
})(qt);
var wt = qt.exports, _r = function(t) {
  return typeof Blob > "u" ? !1 : t instanceof Blob || Object.prototype.toString.call(t) === "[object Blob]";
}, bt = {
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
   * Indicates if retain the image's Exif information after compressed.
   * @type {boolean}
  */
  retainExif: !1,
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
}, Nr = typeof window < "u" && typeof window.document < "u", V = Nr ? window : {}, be = function(t) {
  return t > 0 && t < 1 / 0;
}, Ur = Array.prototype.slice;
function qe(e) {
  return Array.from ? Array.from(e) : Ur.call(e);
}
var Pr = /^image\/.+$/;
function Me(e) {
  return Pr.test(e);
}
function Fr(e) {
  var t = Me(e) ? e.substr(6) : "";
  return t === "jpeg" && (t = "jpg"), ".".concat(t);
}
var Jt = String.fromCharCode;
function Dr(e, t, n) {
  var r = "", o;
  for (n += t, o = t; o < n; o += 1)
    r += Jt(e.getUint8(o));
  return r;
}
var kr = V.btoa;
function vt(e, t) {
  for (var n = [], r = 8192, o = new Uint8Array(e); o.length > 0; )
    n.push(Jt.apply(null, qe(o.subarray(0, r)))), o = o.subarray(r);
  return "data:".concat(t, ";base64,").concat(kr(n.join("")));
}
function Ir(e) {
  var t = new DataView(e), n;
  try {
    var r, o, i;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var s = t.byteLength, c = 2; c + 1 < s; ) {
        if (t.getUint8(c) === 255 && t.getUint8(c + 1) === 225) {
          o = c;
          break;
        }
        c += 1;
      }
    if (o) {
      var d = o + 4, a = o + 10;
      if (Dr(t, d, 4) === "Exif") {
        var f = t.getUint16(a);
        if (r = f === 18761, (r || f === 19789) && t.getUint16(a + 2, r) === 42) {
          var h = t.getUint32(a + 4, r);
          h >= 8 && (i = a + h);
        }
      }
    }
    if (i) {
      var w = t.getUint16(i, r), m, u;
      for (u = 0; u < w; u += 1)
        if (m = i + u * 12 + 2, t.getUint16(m, r) === 274) {
          m += 8, n = t.getUint16(m, r), t.setUint16(m, 1, r);
          break;
        }
    }
  } catch {
    n = 1;
  }
  return n;
}
function Lr(e) {
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
var jr = /\.\d*(?:0|9){12}\d*$/;
function Et(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return jr.test(e) ? Math.round(e * t) / t : e;
}
function ee(e) {
  var t = e.aspectRatio, n = e.height, r = e.width, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none", i = be(r), s = be(n);
  if (i && s) {
    var c = n * t;
    (o === "contain" || o === "none") && c > r || o === "cover" && c < r ? n = r / t : r = n * t;
  } else
    i ? n = r / t : s && (r = n * t);
  return {
    width: r,
    height: n
  };
}
function Mr(e) {
  for (var t = qe(new Uint8Array(e)), n = t.length, r = [], o = 0; o + 3 < n; ) {
    var i = t[o], s = t[o + 1];
    if (i === 255 && s === 218)
      break;
    if (i === 255 && s === 216)
      o += 2;
    else {
      var c = t[o + 2] * 256 + t[o + 3], d = o + c + 2, a = t.slice(o, d);
      r.push(a), o = d;
    }
  }
  return r.reduce(function(f, h) {
    return h[0] === 255 && h[1] === 225 ? f.concat(h) : f;
  }, []);
}
function zr(e, t) {
  var n = qe(new Uint8Array(e));
  if (n[2] !== 255 || n[3] !== 224)
    return e;
  var r = n[4] * 256 + n[5], o = [255, 216].concat(t, n.slice(4 + r));
  return new Uint8Array(o);
}
var Hr = V.ArrayBuffer, De = V.FileReader, q = V.URL || V.webkitURL, $r = /\.\w+$/, Vr = V.Compressor, Wr = /* @__PURE__ */ function() {
  function e(t, n) {
    Sr(this, e), this.file = t, this.exif = [], this.image = new Image(), this.options = ue(ue({}, bt), n), this.aborted = !1, this.result = null, this.init();
  }
  return Tr(e, [{
    key: "init",
    value: function() {
      var n = this, r = this.file, o = this.options;
      if (!_r(r)) {
        this.fail(new Error("The first argument must be a File or Blob object."));
        return;
      }
      var i = r.type;
      if (!Me(i)) {
        this.fail(new Error("The first argument must be an image File or Blob object."));
        return;
      }
      if (!q || !De) {
        this.fail(new Error("The current browser does not support image compression."));
        return;
      }
      Hr || (o.checkOrientation = !1, o.retainExif = !1);
      var s = i === "image/jpeg", c = s && o.checkOrientation, d = s && o.retainExif;
      if (q && !c && !d)
        this.load({
          url: q.createObjectURL(r)
        });
      else {
        var a = new De();
        this.reader = a, a.onload = function(f) {
          var h = f.target, w = h.result, m = {}, u = 1;
          c && (u = Ir(w), u > 1 && we(m, Lr(u))), d && (n.exif = Mr(w)), c || d ? !q || u > 1 ? m.url = vt(w, i) : m.url = q.createObjectURL(r) : m.url = w, n.load(m);
        }, a.onabort = function() {
          n.fail(new Error("Aborted to read the image with FileReader."));
        }, a.onerror = function() {
          n.fail(new Error("Failed to read the image with FileReader."));
        }, a.onloadend = function() {
          n.reader = null;
        }, c || d ? a.readAsArrayBuffer(r) : a.readAsDataURL(r);
      }
    }
  }, {
    key: "load",
    value: function(n) {
      var r = this, o = this.file, i = this.image;
      i.onload = function() {
        r.draw(ue(ue({}, n), {}, {
          naturalWidth: i.naturalWidth,
          naturalHeight: i.naturalHeight
        }));
      }, i.onabort = function() {
        r.fail(new Error("Aborted to load the image."));
      }, i.onerror = function() {
        r.fail(new Error("Failed to load the image."));
      }, V.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(V.navigator.userAgent) && (i.crossOrigin = "anonymous"), i.alt = o.name, i.src = n.url;
    }
  }, {
    key: "draw",
    value: function(n) {
      var r = this, o = n.naturalWidth, i = n.naturalHeight, s = n.rotate, c = s === void 0 ? 0 : s, d = n.scaleX, a = d === void 0 ? 1 : d, f = n.scaleY, h = f === void 0 ? 1 : f, w = this.file, m = this.image, u = this.options, p = document.createElement("canvas"), y = p.getContext("2d"), v = Math.abs(c) % 180 === 90, x = (u.resize === "contain" || u.resize === "cover") && be(u.width) && be(u.height), A = Math.max(u.maxWidth, 0) || 1 / 0, L = Math.max(u.maxHeight, 0) || 1 / 0, W = Math.max(u.minWidth, 0) || 0, H = Math.max(u.minHeight, 0) || 0, j = o / i, T = u.width, C = u.height;
      if (v) {
        var ie = [L, A];
        A = ie[0], L = ie[1];
        var se = [H, W];
        W = se[0], H = se[1];
        var ae = [C, T];
        T = ae[0], C = ae[1];
      }
      x && (j = T / C);
      var le = ee({
        aspectRatio: j,
        width: A,
        height: L
      }, "contain");
      A = le.width, L = le.height;
      var g = ee({
        aspectRatio: j,
        width: W,
        height: H
      }, "cover");
      if (W = g.width, H = g.height, x) {
        var O = ee({
          aspectRatio: j,
          width: T,
          height: C
        }, u.resize);
        T = O.width, C = O.height;
      } else {
        var E = ee({
          aspectRatio: j,
          width: T,
          height: C
        }), B = E.width;
        T = B === void 0 ? o : B;
        var P = E.height;
        C = P === void 0 ? i : P;
      }
      T = Math.floor(Et(Math.min(Math.max(T, W), A))), C = Math.floor(Et(Math.min(Math.max(C, H), L)));
      var Xt = -T / 2, Zt = -C / 2, Kt = T, Yt = C, Te = [];
      if (x) {
        var Je = 0, Ge = 0, Ce = o, Be = i, Xe = ee({
          aspectRatio: j,
          width: o,
          height: i
        }, {
          contain: "cover",
          cover: "contain"
        }[u.resize]);
        Ce = Xe.width, Be = Xe.height, Je = (o - Ce) / 2, Ge = (i - Be) / 2, Te.push(Je, Ge, Ce, Be);
      }
      if (Te.push(Xt, Zt, Kt, Yt), v) {
        var Ze = [C, T];
        T = Ze[0], C = Ze[1];
      }
      p.width = T, p.height = C, Me(u.mimeType) || (u.mimeType = w.type);
      var Ke = "transparent";
      w.size > u.convertSize && u.convertTypes.indexOf(u.mimeType) >= 0 && (u.mimeType = "image/jpeg");
      var Ye = u.mimeType === "image/jpeg";
      if (Ye && (Ke = "#fff"), y.fillStyle = Ke, y.fillRect(0, 0, T, C), u.beforeDraw && u.beforeDraw.call(this, y, p), !this.aborted && (y.save(), y.translate(T / 2, C / 2), y.rotate(c * Math.PI / 180), y.scale(a, h), y.drawImage.apply(y, [m].concat(Te)), y.restore(), u.drew && u.drew.call(this, y, p), !this.aborted)) {
        var Qe = function(K) {
          if (!r.aborted) {
            var et = function(Y) {
              return r.done({
                naturalWidth: o,
                naturalHeight: i,
                result: Y
              });
            };
            if (K && Ye && u.retainExif && r.exif && r.exif.length > 0) {
              var tt = function(Y) {
                return et(wt(vt(zr(Y, r.exif), u.mimeType)));
              };
              if (K.arrayBuffer)
                K.arrayBuffer().then(tt).catch(function() {
                  r.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."));
                });
              else {
                var J = new De();
                r.reader = J, J.onload = function(_e) {
                  var Y = _e.target;
                  tt(Y.result);
                }, J.onabort = function() {
                  r.fail(new Error("Aborted to read the compressed image with FileReader."));
                }, J.onerror = function() {
                  r.fail(new Error("Failed to read the compressed image with FileReader."));
                }, J.onloadend = function() {
                  r.reader = null;
                }, J.readAsArrayBuffer(K);
              }
            } else
              et(K);
          }
        };
        p.toBlob ? p.toBlob(Qe, u.mimeType, u.quality) : Qe(wt(p.toDataURL(u.mimeType, u.quality)));
      }
    }
  }, {
    key: "done",
    value: function(n) {
      var r = n.naturalWidth, o = n.naturalHeight, i = n.result, s = this.file, c = this.image, d = this.options;
      if (q && c.src.indexOf("blob:") === 0 && q.revokeObjectURL(c.src), i)
        if (d.strict && !d.retainExif && i.size > s.size && d.mimeType === s.type && !(d.width > r || d.height > o || d.minWidth > r || d.minHeight > o || d.maxWidth < r || d.maxHeight < o))
          i = s;
        else {
          var a = /* @__PURE__ */ new Date();
          i.lastModified = a.getTime(), i.lastModifiedDate = a, i.name = s.name, i.name && i.type !== s.type && (i.name = i.name.replace($r, Fr(i.type)));
        }
      else
        i = s;
      this.result = i, d.success && d.success.call(this, i);
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
      return window.Compressor = Vr, e;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(n) {
      we(bt, n);
    }
  }]), e;
}();
let fe;
const qr = new Uint8Array(16);
function Jr() {
  if (!fe && (fe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !fe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return fe(qr);
}
const _ = [];
for (let e = 0; e < 256; ++e)
  _.push((e + 256).toString(16).slice(1));
function Gr(e, t = 0) {
  return (_[e[t + 0]] + _[e[t + 1]] + _[e[t + 2]] + _[e[t + 3]] + "-" + _[e[t + 4]] + _[e[t + 5]] + "-" + _[e[t + 6]] + _[e[t + 7]] + "-" + _[e[t + 8]] + _[e[t + 9]] + "-" + _[e[t + 10]] + _[e[t + 11]] + _[e[t + 12]] + _[e[t + 13]] + _[e[t + 14]] + _[e[t + 15]]).toLowerCase();
}
const Xr = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), xt = {
  randomUUID: Xr
};
function Zr(e, t, n) {
  if (xt.randomUUID && !t && !e)
    return xt.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || Jr)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return Gr(r);
}
const Se = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Kr = {}, Yr = {
  width: "800px",
  height: "800px",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Qr = /* @__PURE__ */ R("path", {
  d: "M9 17V11L7 13",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), eo = /* @__PURE__ */ R("path", {
  d: "M9 11L11 13",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), to = /* @__PURE__ */ R("path", {
  d: "M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), no = /* @__PURE__ */ R("path", {
  d: "M22 10H18C15 10 14 9 14 6V2L22 10Z",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), ro = [
  Qr,
  eo,
  to,
  no
];
function oo(e, t) {
  return N(), U("svg", Yr, ro);
}
const io = /* @__PURE__ */ Se(Kr, [["render", oo]]), so = {}, ao = {
  width: "40px",
  height: "40px",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, lo = /* @__PURE__ */ R("path", {
  d: "M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125",
  stroke: "#fff",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), co = /* @__PURE__ */ R("path", {
  d: "M15 16L17.5 18.5M20 21L17.5 18.5M17.5 18.5L20 16M17.5 18.5L15 21",
  stroke: "#fff",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), uo = [
  lo,
  co
];
function fo(e, t) {
  return N(), U("svg", ao, uo);
}
const Ot = /* @__PURE__ */ Se(so, [["render", fo]]), ho = {}, po = {
  fill: "#ffffff",
  width: "25",
  height: "25",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, mo = /* @__PURE__ */ R("path", { d: "M3,20V12a1,1,0,0,1,2,0v5.585L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L6.414,19H12a1,1,0,0,1,0,2H4A1,1,0,0,1,3,20Z" }, null, -1), yo = [
  mo
];
function go(e, t) {
  return N(), U("svg", po, yo);
}
const Rt = /* @__PURE__ */ Se(ho, [["render", go]]), wo = { class: "ez-uploader" }, bo = /* @__PURE__ */ R("span", { class: "placeholder" }, " Click Or Drop File Here ", -1), vo = ["src"], Eo = { class: "preview-item-overlay" }, xo = { class: "action-btns" }, Oo = ["id", "onClick"], Ro = ["id", "onClick"], Ao = /* @__PURE__ */ R("img", {
  height: "30",
  src: rn
}, null, -1), So = ["href", "id"], To = ["src"], Co = { class: "preview-item-overlay" }, Bo = {
  key: 0,
  class: "info"
}, _o = { style: { "font-weight": "bold" } }, No = { class: "action-btns" }, Uo = ["id", "onClick"], Po = ["href", "id"], Fo = ["accept", "id"], Gt = /* @__PURE__ */ At({
  __name: "ez-uploader",
  props: {
    url: null,
    base64: { type: Boolean, default: !1 },
    quality: { default: 1 },
    contain: { type: Boolean, default: !0 },
    cover: { type: Boolean, default: !1 },
    accept: { default: "image/*" },
    deleteBtnClass: { default: "" },
    previwerContainerClass: null,
    previwerItemClass: null,
    previewImageClass: null,
    file: { default: null },
    maxSize: null,
    maxWidth: null,
    maxHeight: null,
    maxCount: null,
    deleteUrlBtn: { type: Boolean, default: !0 },
    downloadBtn: { type: Boolean, default: !1 },
    openBtn: { type: Boolean, default: !0 },
    modelValue: null,
    deletedUrls: { default: () => [] }
  },
  emits: ["update:modelValue", "update:url", "update:deletedUrls", "validationError"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { getFileExt: o, getFileType: i, downloadFile: s } = xr(), c = Qt(), d = M(null), a = Date.now() * (Math.random() * 1e4), f = M([]), h = M([]), w = M([]), m = nt(() => Rr(c, "multiple")), u = nt(() => r.modelValue);
    function p() {
      d.value && d.value.click();
    }
    function y(g) {
      return new Promise((O, E) => {
        new Wr(g, {
          quality: r.quality,
          success(B) {
            O(
              new File([B], g.name, {
                lastModified: (/* @__PURE__ */ new Date()).getTime(),
                type: B.type
              })
            );
          },
          error(B) {
            E(B);
          }
        });
      });
    }
    function v() {
      f.value = [], h.value = [];
    }
    function x() {
      n("validationError", null);
    }
    const A = (g) => g / 1e6;
    async function L(g) {
      return console.log(r.maxSize, A(g.size)), r.maxSize && r.maxSize >= A(g.size) ? (x(), Promise.resolve()) : Promise.reject({
        fileName: g.name,
        errorType: "maxSizeError",
        message: `The file (${g.name}) size is larger than the allowed size  (${r.maxSize} mb)`
      });
    }
    function W(g, O) {
      g.stopImmediatePropagation(), f.value = f.value.filter((E) => (E.id === O && URL.revokeObjectURL(E.url), E.id !== O)), j();
    }
    async function H(g) {
      if (r.maxCount && g.length > r.maxCount) {
        n("validationError", {
          errorType: "maxCount",
          message: `You Can't Upload More Than (${r.maxCount}) files`
        });
        return;
      }
      for (let O of g)
        L(O).then(async () => {
          const E = i(o(O.name));
          if (E === "image")
            try {
              O = await y(O);
            } catch (B) {
              console.error(B);
            }
          m.value || (f.value = [], h.value = []), f.value.push({
            file: O,
            id: Zr(),
            type: E,
            url: URL.createObjectURL(O)
          });
        }).catch((E) => {
          n("validationError", E);
        });
      j();
    }
    function j() {
      m.value ? (n(
        "update:modelValue",
        f.value.map(({ file: g }) => g)
      ), n(
        "update:url",
        f.value.map(({ url: g }) => g)
      )) : (n(
        "update:modelValue",
        f.value.length ? f.value[0].file : null
      ), n("update:url", f.value.length ? f.value[0].url : ""));
    }
    function T(g) {
      const O = g.target.files;
      H(O);
    }
    function C(g) {
      g.preventDefault();
      const O = g.dataTransfer.files;
      H(O);
    }
    function ie(g) {
      g.preventDefault();
    }
    function se(g, O) {
      g.stopImmediatePropagation(), w.value.push(O), h.value = h.value.filter((E) => E !== O), n("update:deletedUrls", w.value);
    }
    function ae() {
      r.url && (console.log("url", r.url), typeof r.url == "string" ? h.value.push(r.url) : Array.isArray(r.url) && (h.value = [...h.value, ...r.url]));
    }
    function le(g) {
      return new URL(g, import.meta.url).href;
    }
    return en(
      u,
      (g) => {
        (g === null || Ar(g) && g.length === 0) && v();
      },
      { deep: !0 }
    ), t({
      reset: v,
      resetValidation: x
    }), ae(), (g, O) => (N(), U("div", wo, [
      R("div", {
        class: "ez-uploader-label",
        onClick: p,
        onDrop: C,
        onDragover: ie
      }, [
        ce(g.$slots, "default", {}, () => [
          bo,
          G(io, {
            class: "upload-icon",
            width: "45",
            height: "45"
          })
        ]),
        R("div", {
          class: D(["ez-uploader-preview", [{ multi: rt(m) }, e.previwerContainerClass]])
        }, [
          (N(!0), U(ot, null, it(h.value, (E, B) => (N(), U("div", {
            key: B,
            class: D(["ez-uploader-preview-item", e.previwerItemClass])
          }, [
            R("img", {
              src: E,
              class: D([e.previewImageClass, "preview-img"])
            }, null, 10, vo),
            R("div", Eo, [
              R("div", xo, [
                R("button", {
                  id: `delete-btn-${B}`,
                  class: D(["action-btn", e.deleteBtnClass]),
                  onClick: (P) => se(P, E)
                }, [
                  ce(g.$slots, "delete-btn", {}, () => [
                    G(Ot, { height: "30" })
                  ])
                ], 10, Oo),
                e.downloadBtn ? (N(), U("button", {
                  key: 0,
                  id: `delete-btn-${B}`,
                  class: D([e.deleteBtnClass, "action-btn"]),
                  onClick: (P) => {
                    P.stopImmediatePropagation(), rt(s)(E);
                  }
                }, [
                  ce(g.$slots, "delete-btn", {}, () => [
                    Ao
                  ])
                ], 10, Ro)) : te("", !0),
                e.openBtn ? (N(), U("a", {
                  key: 1,
                  target: "_blank",
                  href: E,
                  id: `delete-btn-${B}`,
                  onClick: O[0] || (O[0] = (P) => P.stopImmediatePropagation()),
                  class: D([e.deleteBtnClass, "action-btn"])
                }, [
                  G(Rt, { height: "20" })
                ], 10, So)) : te("", !0)
              ])
            ])
          ], 2))), 128)),
          (N(!0), U(ot, null, it(f.value, (E, B) => (N(), U("div", {
            key: E.id,
            class: D(["ez-uploader-preview-item", e.previwerItemClass])
          }, [
            R("img", {
              class: D(["preview-img", e.previewImageClass]),
              src: E.type === "image" ? E.url : le(`./assets/icons/${E.type}.png`)
            }, null, 10, To),
            R("div", Co, [
              E.file ? (N(), U("div", Bo, [
                ce(g.$slots, "info-overlay", {}, () => [
                  R("h6", _o, de(E.file.name), 1),
                  R("span", null, "Type : " + de(E.type), 1),
                  R("span", null, "Size : " + de((E.file.size / 1e6).toFixed(2)) + "mb", 1)
                ])
              ])) : te("", !0),
              R("div", No, [
                R("button", {
                  id: `delete-btn-${B}`,
                  class: D([e.deleteBtnClass, "action-btn"]),
                  onClick: (P) => W(P, E.id)
                }, [
                  G(Ot, {
                    height: "30",
                    src: "@/assets/delete-file.svg?url"
                  })
                ], 10, Uo),
                e.openBtn ? (N(), U("a", {
                  key: 0,
                  target: "_blank",
                  href: E.url,
                  id: `delete-btn-${B}`,
                  class: D([e.deleteBtnClass, "action-btn"]),
                  onClick: O[1] || (O[1] = (P) => P.stopImmediatePropagation())
                }, [
                  G(Rt, {
                    height: "20",
                    src: "@/assets/expand.svg?url"
                  })
                ], 10, Po)) : te("", !0)
              ])
            ])
          ], 2))), 128))
        ], 2)
      ], 32),
      R("input", tn({
        accept: e.accept,
        id: `file-uploader-${a}`,
        ref_key: "fileInput",
        ref: d
      }, g.$attrs, {
        type: "file",
        hidden: "",
        onChange: T
      }), null, 16, Fo)
    ]));
  }
});
const Do = { class: "form" }, ko = {
  key: 0,
  style: { "font-size": "small", "font-family": "sans-serif", color: "red" }
}, Io = /* @__PURE__ */ At({
  __name: "App",
  setup(e) {
    M([
      "https://www.planetsport.com/image-library/square/1200/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg"
    ]), M(
      "https://www.planetsport.com/image-library/square/1200/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg"
    );
    const t = M([]);
    M();
    const n = M(""), r = (o) => {
      o ? (console.log("error", o), n.value = o.message) : n.value = "";
    };
    return (o, i) => (N(), U("div", null, [
      R("div", Do, [
        G(Gt, {
          maxCount: 3,
          maxSize: 1,
          onValidationError: r,
          multiple: "",
          modelValue: t.value,
          "onUpdate:modelValue": i[0] || (i[0] = (s) => t.value = s)
        }, null, 8, ["modelValue"]),
        R("div", null, [
          n.value ? (N(), U("p", ko, de(n.value), 1)) : te("", !0)
        ])
      ])
    ]));
  }
});
const Lo = /* @__PURE__ */ Se(Io, [["__scopeId", "data-v-49562235"]]);
nn(Lo).mount("#app");
const zo = {
  install: (e, t) => {
    e.component("ez-uploader", Gt);
  }
};
export {
  Gt as EzUploader,
  zo as default
};
