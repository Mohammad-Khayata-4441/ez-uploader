function ft(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function to(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = ne(r) ? ul(r) : to(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else {
    if (ne(e))
      return e;
    if (Y(e))
      return e;
  }
}
const ll = /;(?![^(]*\))/g, cl = /:([^]+)/, al = /\/\*.*?\*\//gs;
function ul(e) {
  const t = {};
  return e.replace(al, "").split(ll).forEach((n) => {
    if (n) {
      const r = n.split(cl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ce(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ce(e[n]);
      r && (t += r + " ");
    }
  else if (Y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const fl = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", dl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", pl = /* @__PURE__ */ ft(fl), hl = /* @__PURE__ */ ft(dl), ml = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", gl = /* @__PURE__ */ ft(ml);
function Ts(e) {
  return !!e || e === "";
}
const Rn = (e) => ne(e) ? e : e == null ? "" : I(e) || Y(e) && (e.toString === Ss || !B(e.toString)) ? JSON.stringify(e, Cs, 2) : String(e), Cs = (e, t) => t && t.__v_isRef ? Cs(e, t.value) : _t(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
} : As(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : Y(t) && !I(t) && !Vs(t) ? String(t) : t, te = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, jt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ae = () => {
}, Rs = () => !1, El = /^on[^a-z]/, hn = (e) => El.test(e), kn = (e) => e.startsWith("onUpdate:"), se = Object.assign, no = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, bl = Object.prototype.hasOwnProperty, z = (e, t) => bl.call(e, t), I = Array.isArray, _t = (e) => Gn(e) === "[object Map]", As = (e) => Gn(e) === "[object Set]", B = (e) => typeof e == "function", ne = (e) => typeof e == "string", ro = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", oo = (e) => Y(e) && B(e.then) && B(e.catch), Ss = Object.prototype.toString, Gn = (e) => Ss.call(e), so = (e) => Gn(e).slice(8, -1), Vs = (e) => Gn(e) === "[object Object]", io = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, An = /* @__PURE__ */ ft(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), yl = /* @__PURE__ */ ft("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), Qn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, _l = /-(\w)/g, Bt = Qn((e) => e.replace(_l, (t, n) => n ? n.toUpperCase() : "")), vl = /\B([A-Z])/g, it = Qn((e) => e.replace(vl, "-$1").toLowerCase()), er = Qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Et = Qn((e) => e ? `on${er(e)}` : ""), sn = (e, t) => !Object.is(e, t), Jt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Hn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, wl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let So;
const Ps = () => So || (So = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ar(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Pe;
class Nl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Pe, !t && Pe && (this.index = (Pe.scopes || (Pe.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Pe;
      try {
        return Pe = this, t();
      } finally {
        Pe = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Ar("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Pe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Pe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Ol(e, t = Pe) {
  t && t.active && t.effects.push(e);
}
function xl() {
  return Pe;
}
const ln = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Is = (e) => (e.w & lt) > 0, Fs = (e) => (e.n & lt) > 0, Dl = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= lt;
}, Tl = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      Is(o) && !Fs(o) ? o.delete(e) : t[n++] = o, o.w &= ~lt, o.n &= ~lt;
    }
    t.length = n;
  }
}, Sr = /* @__PURE__ */ new WeakMap();
let Qt = 0, lt = 1;
const Vr = 30;
let ye;
const vt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Pr = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class lo {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ol(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ye, n = st;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ye, ye = this, st = !0, lt = 1 << ++Qt, Qt <= Vr ? Dl(this) : Vo(this), this.fn();
    } finally {
      Qt <= Vr && Tl(this), lt = 1 << --Qt, ye = this.parent, st = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ye === this ? this.deferStop = !0 : this.active && (Vo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Vo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let st = !0;
const $s = [];
function Ct() {
  $s.push(st), st = !1;
}
function Rt() {
  const e = $s.pop();
  st = e === void 0 ? !0 : e;
}
function _e(e, t, n) {
  if (st && ye) {
    let r = Sr.get(e);
    r || Sr.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = ln());
    const s = process.env.NODE_ENV !== "production" ? { effect: ye, target: e, type: t, key: n } : void 0;
    Ir(o, s);
  }
}
function Ir(e, t) {
  let n = !1;
  Qt <= Vr ? Fs(e) || (e.n |= lt, n = !Is(e)) : n = !e.has(ye), n && (e.add(ye), ye.deps.push(e), process.env.NODE_ENV !== "production" && ye.onTrack && ye.onTrack(Object.assign({ effect: ye }, t)));
}
function Ze(e, t, n, r, o, s) {
  const i = Sr.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && I(e)) {
    const a = Number(r);
    i.forEach((d, f) => {
      (f === "length" || f >= a) && l.push(d);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        I(e) ? io(n) && l.push(i.get("length")) : (l.push(i.get(vt)), _t(e) && l.push(i.get(Pr)));
        break;
      case "delete":
        I(e) || (l.push(i.get(vt)), _t(e) && l.push(i.get(Pr)));
        break;
      case "set":
        _t(e) && l.push(i.get(vt));
        break;
    }
  const c = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: o, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? Ft(l[0], c) : Ft(l[0]));
  else {
    const a = [];
    for (const d of l)
      d && a.push(...d);
    process.env.NODE_ENV !== "production" ? Ft(ln(a), c) : Ft(ln(a));
  }
}
function Ft(e, t) {
  const n = I(e) ? e : [...e];
  for (const r of n)
    r.computed && Po(r, t);
  for (const r of n)
    r.computed || Po(r, t);
}
function Po(e, t) {
  (e !== ye || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(se({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Cl = /* @__PURE__ */ ft("__proto__,__v_isRef,__isVue"), Ms = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ro)
), Rl = /* @__PURE__ */ tr(), Al = /* @__PURE__ */ tr(!1, !0), Sl = /* @__PURE__ */ tr(!0), Vl = /* @__PURE__ */ tr(!0, !0), Io = /* @__PURE__ */ Pl();
function Pl() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = H(this);
      for (let s = 0, i = this.length; s < i; s++)
        _e(r, "get", s + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(H)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ct();
      const r = H(this)[t].apply(this, n);
      return Rt(), r;
    };
  }), e;
}
function Il(e) {
  const t = H(this);
  return _e(t, "has", e), t.hasOwnProperty(e);
}
function tr(e = !1, t = !1) {
  return function(r, o, s) {
    if (o === "__v_isReactive")
      return !e;
    if (o === "__v_isReadonly")
      return e;
    if (o === "__v_isShallow")
      return t;
    if (o === "__v_raw" && s === (e ? t ? Ws : zs : t ? Hs : ks).get(r))
      return r;
    const i = I(r);
    if (!e) {
      if (i && z(Io, o))
        return Reflect.get(Io, o, s);
      if (o === "hasOwnProperty")
        return Il;
    }
    const l = Reflect.get(r, o, s);
    return (ro(o) ? Ms.has(o) : Cl(o)) || (e || _e(r, "get", o), t) ? l : ie(l) ? i && io(o) ? l : l.value : Y(l) ? e ? Ks(l) : ao(l) : l;
  };
}
const Fl = /* @__PURE__ */ js(), $l = /* @__PURE__ */ js(!0);
function js(e = !1) {
  return function(n, r, o, s) {
    let i = n[r];
    if (ct(i) && ie(i) && !ie(o))
      return !1;
    if (!e && (!zn(o) && !ct(o) && (i = H(i), o = H(o)), !I(n) && ie(i) && !ie(o)))
      return i.value = o, !0;
    const l = I(n) && io(r) ? Number(r) < n.length : z(n, r), c = Reflect.set(n, r, o, s);
    return n === H(s) && (l ? sn(o, i) && Ze(n, "set", r, o, i) : Ze(n, "add", r, o)), c;
  };
}
function Ml(e, t) {
  const n = z(e, t), r = e[t], o = Reflect.deleteProperty(e, t);
  return o && n && Ze(e, "delete", t, void 0, r), o;
}
function jl(e, t) {
  const n = Reflect.has(e, t);
  return (!ro(t) || !Ms.has(t)) && _e(e, "has", t), n;
}
function Ul(e) {
  return _e(e, "iterate", I(e) ? "length" : vt), Reflect.ownKeys(e);
}
const Us = {
  get: Rl,
  set: Fl,
  deleteProperty: Ml,
  has: jl,
  ownKeys: Ul
}, Bs = {
  get: Sl,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Ar(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Ar(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Bl = /* @__PURE__ */ se({}, Us, {
  get: Al,
  set: $l
}), Ll = /* @__PURE__ */ se({}, Bs, {
  get: Vl
}), co = (e) => e, nr = (e) => Reflect.getPrototypeOf(e);
function _n(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = H(e), s = H(t);
  n || (t !== s && _e(o, "get", t), _e(o, "get", s));
  const { has: i } = nr(o), l = r ? co : n ? uo : cn;
  if (i.call(o, t))
    return l(e.get(t));
  if (i.call(o, s))
    return l(e.get(s));
  e !== o && e.get(t);
}
function vn(e, t = !1) {
  const n = this.__v_raw, r = H(n), o = H(e);
  return t || (e !== o && _e(r, "has", e), _e(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function wn(e, t = !1) {
  return e = e.__v_raw, !t && _e(H(e), "iterate", vt), Reflect.get(e, "size", e);
}
function Fo(e) {
  e = H(e);
  const t = H(this);
  return nr(t).has.call(t, e) || (t.add(e), Ze(t, "add", e, e)), this;
}
function $o(e, t) {
  t = H(t);
  const n = H(this), { has: r, get: o } = nr(n);
  let s = r.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Ls(n, r, e) : (e = H(e), s = r.call(n, e));
  const i = o.call(n, e);
  return n.set(e, t), s ? sn(t, i) && Ze(n, "set", e, t, i) : Ze(n, "add", e, t), this;
}
function Mo(e) {
  const t = H(this), { has: n, get: r } = nr(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && Ls(t, n, e) : (e = H(e), o = n.call(t, e));
  const s = r ? r.call(t, e) : void 0, i = t.delete(e);
  return o && Ze(t, "delete", e, void 0, s), i;
}
function jo() {
  const e = H(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? _t(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && Ze(e, "clear", void 0, void 0, n), r;
}
function Nn(e, t) {
  return function(r, o) {
    const s = this, i = s.__v_raw, l = H(i), c = t ? co : e ? uo : cn;
    return !e && _e(l, "iterate", vt), i.forEach((a, d) => r.call(o, c(a), c(d), s));
  };
}
function On(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = H(o), i = _t(s), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, a = o[e](...r), d = n ? co : t ? uo : cn;
    return !t && _e(s, "iterate", c ? Pr : vt), {
      // iterator protocol
      next() {
        const { value: f, done: g } = a.next();
        return g ? { value: f, done: g } : {
          value: l ? [d(f[0]), d(f[1])] : d(f),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function et(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${er(e)} operation ${n}failed: target is readonly.`, H(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function kl() {
  const e = {
    get(s) {
      return _n(this, s);
    },
    get size() {
      return wn(this);
    },
    has: vn,
    add: Fo,
    set: $o,
    delete: Mo,
    clear: jo,
    forEach: Nn(!1, !1)
  }, t = {
    get(s) {
      return _n(this, s, !1, !0);
    },
    get size() {
      return wn(this);
    },
    has: vn,
    add: Fo,
    set: $o,
    delete: Mo,
    clear: jo,
    forEach: Nn(!1, !0)
  }, n = {
    get(s) {
      return _n(this, s, !0);
    },
    get size() {
      return wn(this, !0);
    },
    has(s) {
      return vn.call(this, s, !0);
    },
    add: et(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: et(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: et(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: et(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Nn(!0, !1)
  }, r = {
    get(s) {
      return _n(this, s, !0, !0);
    },
    get size() {
      return wn(this, !0);
    },
    has(s) {
      return vn.call(this, s, !0);
    },
    add: et(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: et(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: et(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: et(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Nn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = On(s, !1, !1), n[s] = On(s, !0, !1), t[s] = On(s, !1, !0), r[s] = On(s, !0, !0);
  }), [
    e,
    n,
    t,
    r
  ];
}
const [Hl, zl, Wl, Kl] = /* @__PURE__ */ kl();
function rr(e, t) {
  const n = t ? e ? Kl : Wl : e ? zl : Hl;
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(z(n, o) && o in r ? n : r, o, s);
}
const ql = {
  get: /* @__PURE__ */ rr(!1, !1)
}, Jl = {
  get: /* @__PURE__ */ rr(!1, !0)
}, Xl = {
  get: /* @__PURE__ */ rr(!0, !1)
}, Yl = {
  get: /* @__PURE__ */ rr(!0, !0)
};
function Ls(e, t, n) {
  const r = H(n);
  if (r !== n && t.call(e, r)) {
    const o = so(e);
    console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const ks = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap();
function Zl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Gl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Zl(so(e));
}
function ao(e) {
  return ct(e) ? e : or(e, !1, Us, ql, ks);
}
function Ql(e) {
  return or(e, !1, Bl, Jl, Hs);
}
function Ks(e) {
  return or(e, !0, Bs, Xl, zs);
}
function $t(e) {
  return or(e, !0, Ll, Yl, Ws);
}
function or(e, t, n, r, o) {
  if (!Y(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const i = Gl(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return o.set(e, l), l;
}
function wt(e) {
  return ct(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ct(e) {
  return !!(e && e.__v_isReadonly);
}
function zn(e) {
  return !!(e && e.__v_isShallow);
}
function Fr(e) {
  return wt(e) || ct(e);
}
function H(e) {
  const t = e && e.__v_raw;
  return t ? H(t) : e;
}
function qs(e) {
  return Hn(e, "__v_skip", !0), e;
}
const cn = (e) => Y(e) ? ao(e) : e, uo = (e) => Y(e) ? Ks(e) : e;
function Js(e) {
  st && ye && (e = H(e), process.env.NODE_ENV !== "production" ? Ir(e.dep || (e.dep = ln()), {
    target: e,
    type: "get",
    key: "value"
  }) : Ir(e.dep || (e.dep = ln())));
}
function Xs(e, t) {
  e = H(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? Ft(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Ft(n));
}
function ie(e) {
  return !!(e && e.__v_isRef === !0);
}
function Je(e) {
  return ec(e, !1);
}
function ec(e, t) {
  return ie(e) ? e : new tc(e, t);
}
class tc {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : H(t), this._value = n ? t : cn(t);
  }
  get value() {
    return Js(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || zn(t) || ct(t);
    t = n ? t : H(t), sn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : cn(t), Xs(this, t));
  }
}
function $r(e) {
  return ie(e) ? e.value : e;
}
const nc = {
  get: (e, t, n) => $r(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return ie(o) && !ie(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ys(e) {
  return wt(e) ? e : new Proxy(e, nc);
}
var Zs;
class rc {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Zs] = !1, this._dirty = !0, this.effect = new lo(t, () => {
      this._dirty || (this._dirty = !0, Xs(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = H(this);
    return Js(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Zs = "__v_isReadonly";
function oc(e, t, n = !1) {
  let r, o;
  const s = B(e);
  s ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ae) : (r = e.get, o = e.set);
  const i = new rc(r, o, s || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const Nt = [];
function Sn(e) {
  Nt.push(e);
}
function Vn() {
  Nt.pop();
}
function x(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  Ct();
  const n = Nt.length ? Nt[Nt.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = sc();
  if (r)
    Xe(r, n, 11, [
      e + t.join(""),
      n && n.proxy,
      o.map(({ vnode: s }) => `at <${fr(n, s.type)}>`).join(`
`),
      o
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...ic(o)), console.warn(...s);
  }
  Rt();
}
function sc() {
  let e = Nt[Nt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function ic(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...lc(n));
  }), t;
}
function lc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${fr(e.component, e.type, r)}`, s = ">" + n;
  return e.props ? [o, ...cc(e.props), s] : [o + s];
}
function cc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Gs(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Gs(e, t, n) {
  return ne(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ie(t) ? (t = Gs(e, H(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : B(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = H(t), n ? t : [`${e}=`, t]);
}
const fo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Xe(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    sr(s, t, n);
  }
  return o;
}
function $e(e, t, n, r) {
  if (B(e)) {
    const s = Xe(e, t, n, r);
    return s && oo(s) && s.catch((i) => {
      sr(i, t, n);
    }), s;
  }
  const o = [];
  for (let s = 0; s < e.length; s++)
    o.push($e(e[s], t, n, r));
  return o;
}
function sr(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? fo[n] : n;
    for (; s; ) {
      const a = s.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, i, l) === !1)
            return;
      }
      s = s.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Xe(c, null, 10, [e, i, l]);
      return;
    }
  }
  ac(e, n, o, r);
}
function ac(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = fo[t];
    if (n && Sn(n), x(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Vn(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let an = !1, Mr = !1;
const me = [];
let Be = 0;
const Ut = [];
let Ue = null, nt = 0;
const Qs = /* @__PURE__ */ Promise.resolve();
let po = null;
const uc = 100;
function fc(e) {
  const t = po || Qs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dc(e) {
  let t = Be + 1, n = me.length;
  for (; t < n; ) {
    const r = t + n >>> 1;
    un(me[r]) < e ? t = r + 1 : n = r;
  }
  return t;
}
function ir(e) {
  (!me.length || !me.includes(e, an && e.allowRecurse ? Be + 1 : Be)) && (e.id == null ? me.push(e) : me.splice(dc(e.id), 0, e), ei());
}
function ei() {
  !an && !Mr && (Mr = !0, po = Qs.then(ri));
}
function pc(e) {
  const t = me.indexOf(e);
  t > Be && me.splice(t, 1);
}
function ti(e) {
  I(e) ? Ut.push(...e) : (!Ue || !Ue.includes(e, e.allowRecurse ? nt + 1 : nt)) && Ut.push(e), ei();
}
function Uo(e, t = an ? Be + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < me.length; t++) {
    const n = me[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && ho(e, n))
        continue;
      me.splice(t, 1), t--, n();
    }
  }
}
function ni(e) {
  if (Ut.length) {
    const t = [...new Set(Ut)];
    if (Ut.length = 0, Ue) {
      Ue.push(...t);
      return;
    }
    for (Ue = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ue.sort((n, r) => un(n) - un(r)), nt = 0; nt < Ue.length; nt++)
      process.env.NODE_ENV !== "production" && ho(e, Ue[nt]) || Ue[nt]();
    Ue = null, nt = 0;
  }
}
const un = (e) => e.id == null ? 1 / 0 : e.id, hc = (e, t) => {
  const n = un(e) - un(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ri(e) {
  Mr = !1, an = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), me.sort(hc);
  const t = process.env.NODE_ENV !== "production" ? (n) => ho(e, n) : ae;
  try {
    for (Be = 0; Be < me.length; Be++) {
      const n = me[Be];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Xe(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    Be = 0, me.length = 0, ni(e), an = !1, po = null, (me.length || Ut.length) && ri(e);
  }
}
function ho(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > uc) {
      const r = t.ownerInstance, o = r && $i(r.type);
      return x(`Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let Ot = !1;
const It = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ps().__VUE_HMR_RUNTIME__ = {
  createRecord: yr(oi),
  rerender: yr(Ec),
  reload: yr(bc)
});
const Tt = /* @__PURE__ */ new Map();
function mc(e) {
  const t = e.type.__hmrId;
  let n = Tt.get(t);
  n || (oi(t, e.type), n = Tt.get(t)), n.instances.add(e);
}
function gc(e) {
  Tt.get(e.type.__hmrId).instances.delete(e);
}
function oi(e, t) {
  return Tt.has(e) ? !1 : (Tt.set(e, {
    initialDef: nn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function nn(e) {
  return Mi(e) ? e.__vccOpts : e;
}
function Ec(e, t) {
  const n = Tt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, nn(r.type).render = t), r.renderCache = [], Ot = !0, r.update(), Ot = !1;
  }));
}
function bc(e, t) {
  const n = Tt.get(e);
  if (!n)
    return;
  t = nn(t), Bo(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const s = nn(o.type);
    It.has(s) || (s !== n.initialDef && Bo(s, t), It.add(s)), o.appContext.optionsCache.delete(o.type), o.ceReload ? (It.add(s), o.ceReload(t.styles), It.delete(s)) : o.parent ? ir(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  ti(() => {
    for (const o of r)
      It.delete(nn(o.type));
  });
}
function Bo(e, t) {
  se(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function yr(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Le, en = [], jr = !1;
function mn(e, ...t) {
  Le ? Le.emit(e, ...t) : jr || en.push({ event: e, args: t });
}
function si(e, t) {
  var n, r;
  Le = e, Le ? (Le.enabled = !0, en.forEach(({ event: o, args: s }) => Le.emit(o, ...s)), en = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((r = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || r === void 0) && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    si(s, t);
  }), setTimeout(() => {
    Le || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, jr = !0, en = []);
  }, 3e3)) : (jr = !0, en = []);
}
function yc(e, t) {
  mn("app:init", e, t, {
    Fragment: Oe,
    Text: gn,
    Comment: xe,
    Static: $n
  });
}
function _c(e) {
  mn("app:unmount", e);
}
const vc = /* @__PURE__ */ mo(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), ii = /* @__PURE__ */ mo(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), wc = /* @__PURE__ */ mo(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), Nc = (e) => {
  Le && typeof Le.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Le.cleanupBuffer(e) && wc(e);
};
function mo(e) {
  return (t) => {
    mn(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Oc = /* @__PURE__ */ li(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), xc = /* @__PURE__ */ li(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function li(e) {
  return (t, n, r) => {
    mn(e, t.appContext.app, t.uid, t, n, r);
  };
}
function Dc(e, t, n) {
  mn("component:emit", e.appContext.app, e, t, n);
}
function Tc(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || te;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: d, propsOptions: [f] } = e;
    if (d)
      if (!(t in d))
        (!f || !(Et(t) in f)) && x(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Et(t)}" prop.`);
      else {
        const g = d[t];
        B(g) && (g(...n) || x(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in r) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`, { number: f, trim: g } = r[d] || te;
    g && (o = n.map((v) => ne(v) ? v.trim() : v)), f && (o = n.map(wl));
  }
  if (process.env.NODE_ENV !== "production" && Dc(e, t, o), process.env.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && r[Et(d)] && x(`Event "${d}" is emitted in component ${fr(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${it(t)}" instead of "${t}".`);
  }
  let l, c = r[l = Et(t)] || // also try camelCase event handler (#2249)
  r[l = Et(Bt(t))];
  !c && s && (c = r[l = Et(it(t))]), c && $e(c, e, 6, o);
  const a = r[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, $e(a, e, 6, o);
  }
}
function ci(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, l = !1;
  if (!B(e)) {
    const c = (a) => {
      const d = ci(a, t, !0);
      d && (l = !0, se(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !s && !l ? (Y(e) && r.set(e, null), null) : (I(s) ? s.forEach((c) => i[c] = null) : se(i, s), Y(e) && r.set(e, i), i);
}
function lr(e, t) {
  return !e || !hn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), z(e, t[0].toLowerCase() + t.slice(1)) || z(e, it(t)) || z(e, t));
}
let ue = null, ai = null;
function Wn(e) {
  const t = ue;
  return ue = e, ai = e && e.type.__scopeId || null, t;
}
function Cc(e, t = ue, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Zo(-1);
    const s = Wn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Wn(s), r._d && Zo(1);
    }
    return process.env.NODE_ENV !== "production" && ii(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let Ur = !1;
function Kn() {
  Ur = !0;
}
function _r(e) {
  const { type: t, vnode: n, proxy: r, withProxy: o, props: s, propsOptions: [i], slots: l, attrs: c, emit: a, render: d, renderCache: f, data: g, setupState: v, ctx: h, inheritAttrs: y } = e;
  let C, P;
  const F = Wn(e);
  process.env.NODE_ENV !== "production" && (Ur = !1);
  try {
    if (n.shapeFlag & 4) {
      const Z = o || r;
      C = Ie(d.call(Z, Z, f, s, v, g, h)), P = c;
    } else {
      const Z = t;
      process.env.NODE_ENV !== "production" && c === s && Kn(), C = Ie(Z.length > 1 ? Z(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return Kn(), c;
        },
        slots: l,
        emit: a
      } : { attrs: c, slots: l, emit: a }) : Z(
        s,
        null
        /* we know it doesn't need it */
      )), P = t.props ? c : Ac(c);
    }
  } catch (Z) {
    on.length = 0, sr(
      Z,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), C = ge(xe);
  }
  let j = C, k;
  if (process.env.NODE_ENV !== "production" && C.patchFlag > 0 && C.patchFlag & 2048 && ([j, k] = Rc(C)), P && y !== !1) {
    const Z = Object.keys(P), { shapeFlag: fe } = j;
    if (Z.length) {
      if (fe & 7)
        i && Z.some(kn) && (P = Sc(P, i)), j = at(j, P);
      else if (process.env.NODE_ENV !== "production" && !Ur && j.type !== xe) {
        const de = Object.keys(c), G = [], J = [];
        for (let ve = 0, De = de.length; ve < De; ve++) {
          const pe = de[ve];
          hn(pe) ? kn(pe) || G.push(pe[2].toLowerCase() + pe.slice(3)) : J.push(pe);
        }
        J.length && x(`Extraneous non-props attributes (${J.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), G.length && x(`Extraneous non-emits event listeners (${G.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Lo(j) && x("Runtime directive used on component with non-element root node. The directives will not function as intended."), j = at(j), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Lo(j) && x("Component inside <Transition> renders non-element root node that cannot be animated."), j.transition = n.transition), process.env.NODE_ENV !== "production" && k ? k(j) : C = j, Wn(F), C;
}
const Rc = (e) => {
  const t = e.children, n = e.dynamicChildren, r = ui(t);
  if (!r)
    return [e, void 0];
  const o = t.indexOf(r), s = n ? n.indexOf(r) : -1, i = (l) => {
    t[o] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ie(r), i];
};
function ui(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (ar(r)) {
      if (r.type !== xe || r.children === "v-if") {
        if (t)
          return;
        t = r;
      }
    } else
      return;
  }
  return t;
}
const Ac = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || hn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Sc = (e, t) => {
  const n = {};
  for (const r in e)
    (!kn(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Lo = (e) => e.shapeFlag & 7 || e.type === xe;
function Vc(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: l, patchFlag: c } = t, a = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || l) && Ot || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? ko(r, i, a) : !!i;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const g = d[f];
        if (i[g] !== r[g] && !lr(a, g))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? ko(r, i, a) : !0 : !!i;
  return !1;
}
function ko(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !lr(n, s))
      return !0;
  }
  return !1;
}
function Pc({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ic = (e) => e.__isSuspense;
function Fc(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : ti(e);
}
function $c(e, t) {
  if (!re)
    process.env.NODE_ENV !== "production" && x("provide() can only be used inside setup().");
  else {
    let n = re.provides;
    const r = re.parent && re.parent.provides;
    r === n && (n = re.provides = Object.create(r)), n[e] = t;
  }
}
function Pn(e, t, n = !1) {
  const r = re || ue;
  if (r) {
    const o = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && B(t) ? t.call(r.proxy) : t;
    process.env.NODE_ENV !== "production" && x(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && x("inject() can only be used inside setup() or functional components.");
}
const xn = {};
function In(e, t, n) {
  return process.env.NODE_ENV !== "production" && !B(t) && x("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), fi(e, t, n);
}
function fi(e, t, { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = te) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && x('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && x('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (k) => {
    x("Invalid watch source: ", k, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, c = xl() === (re == null ? void 0 : re.scope) ? re : null;
  let a, d = !1, f = !1;
  if (ie(e) ? (a = () => e.value, d = zn(e)) : wt(e) ? (a = () => e, r = !0) : I(e) ? (f = !0, d = e.some((k) => wt(k) || zn(k)), a = () => e.map((k) => {
    if (ie(k))
      return k.value;
    if (wt(k))
      return Mt(k);
    if (B(k))
      return Xe(
        k,
        c,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && l(k);
  })) : B(e) ? t ? a = () => Xe(
    e,
    c,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : a = () => {
    if (!(c && c.isUnmounted))
      return g && g(), $e(e, c, 3, [v]);
  } : (a = ae, process.env.NODE_ENV !== "production" && l(e)), t && r) {
    const k = a;
    a = () => Mt(k());
  }
  let g, v = (k) => {
    g = F.onStop = () => {
      Xe(
        k,
        c,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, h;
  if (dn)
    if (v = ae, t ? n && $e(t, c, 3, [
      a(),
      f ? [] : void 0,
      v
    ]) : a(), o === "sync") {
      const k = La();
      h = k.__watcherHandles || (k.__watcherHandles = []);
    } else
      return ae;
  let y = f ? new Array(e.length).fill(xn) : xn;
  const C = () => {
    if (F.active)
      if (t) {
        const k = F.run();
        (r || d || (f ? k.some((Z, fe) => sn(Z, y[fe])) : sn(k, y))) && (g && g(), $e(t, c, 3, [
          k,
          // pass undefined as the old value when it's changed for the first time
          y === xn ? void 0 : f && y[0] === xn ? [] : y,
          v
        ]), y = k);
      } else
        F.run();
  };
  C.allowRecurse = !!t;
  let P;
  o === "sync" ? P = C : o === "post" ? P = () => we(C, c && c.suspense) : (C.pre = !0, c && (C.id = c.uid), P = () => ir(C));
  const F = new lo(a, P);
  process.env.NODE_ENV !== "production" && (F.onTrack = s, F.onTrigger = i), t ? n ? C() : y = F.run() : o === "post" ? we(F.run.bind(F), c && c.suspense) : F.run();
  const j = () => {
    F.stop(), c && c.scope && no(c.scope.effects, F);
  };
  return h && h.push(j), j;
}
function Mc(e, t, n) {
  const r = this.proxy, o = ne(e) ? e.includes(".") ? di(r, e) : () => r[e] : e.bind(r, r);
  let s;
  B(t) ? s = t : (s = t.handler, n = t);
  const i = re;
  Lt(this);
  const l = fi(o, s.bind(r), n);
  return i ? Lt(i) : Dt(), l;
}
function di(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function Mt(e, t) {
  if (!Y(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ie(e))
    Mt(e.value, t);
  else if (I(e))
    for (let n = 0; n < e.length; n++)
      Mt(e[n], t);
  else if (As(e) || _t(e))
    e.forEach((n) => {
      Mt(n, t);
    });
  else if (Vs(e))
    for (const n in e)
      Mt(e[n], t);
  return e;
}
function pi(e) {
  return B(e) ? { setup: e, name: e.name } : e;
}
const rn = (e) => !!e.type.__asyncLoader, go = (e) => e.type.__isKeepAlive;
function jc(e, t) {
  hi(e, "a", t);
}
function Uc(e, t) {
  hi(e, "da", t);
}
function hi(e, t, n = re) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (cr(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      go(o.parent.vnode) && Bc(r, t, n, o), o = o.parent;
  }
}
function Bc(e, t, n, r) {
  const o = cr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  mi(() => {
    no(r[t], o);
  }, n);
}
function cr(e, t, n = re, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Ct(), Lt(n);
      const l = $e(t, n, e, i);
      return Dt(), Rt(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const o = Et(fo[e].replace(/ hook$/, ""));
    x(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Ge = (e) => (t, n = re) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!dn || e === "sp") && cr(e, (...r) => t(...r), n)
), Lc = Ge(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), kc = Ge(
  "m"
  /* LifecycleHooks.MOUNTED */
), Hc = Ge(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), zc = Ge(
  "u"
  /* LifecycleHooks.UPDATED */
), Wc = Ge(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), mi = Ge(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Kc = Ge(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), qc = Ge(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Jc = Ge(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Xc(e, t = re) {
  cr("ec", e, t);
}
function gi(e) {
  yl(e) && x("Do not use built-in directive ids as custom directive id: " + e);
}
function ht(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    s && (l.oldValue = s[i].value);
    let c = l.dir[r];
    c && (Ct(), $e(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Rt());
  }
}
const Yc = Symbol();
function Ho(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (I(e) || ne(e)) {
    o = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      o[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && x(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let i = 0; i < e; i++)
      o[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (Y(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (i, l) => t(i, l, void 0, s && s[l]));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let l = 0, c = i.length; l < c; l++) {
        const a = i[l];
        o[l] = t(e[a], a, l, s && s[l]);
      }
    }
  else
    o = [];
  return n && (n[r] = o), o;
}
function Dn(e, t, n = {}, r, o) {
  if (ue.isCE || ue.parent && rn(ue.parent) && ue.parent.isCE)
    return t !== "default" && (n.name = t), ge("slot", n, r && r());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (x("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), he();
  const i = s && Ei(s(n)), l = Ci(
    Oe,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Ei(e) {
  return e.some((t) => ar(t) ? !(t.type === xe || t.type === Oe && !Ei(t.children)) : !0) ? e : null;
}
const Br = (e) => e ? Pi(e) ? vo(e) || e.proxy : Br(e.parent) : null, xt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? $t(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? $t(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? $t(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? $t(e.refs) : e.refs,
    $parent: (e) => Br(e.parent),
    $root: (e) => Br(e.root),
    $emit: (e) => e.emit,
    $options: (e) => bo(e),
    $forceUpdate: (e) => e.f || (e.f = () => ir(e.update)),
    $nextTick: (e) => e.n || (e.n = fc.bind(e.proxy)),
    $watch: (e) => Mc.bind(e)
  })
), Eo = (e) => e === "_" || e === "$", vr = (e, t) => e !== te && !e.__isScriptSetup && z(e, t), bi = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: l, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const v = i[t];
      if (v !== void 0)
        switch (v) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (vr(r, t))
          return i[t] = 1, r[t];
        if (o !== te && z(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && z(a, t)
        )
          return i[t] = 3, s[t];
        if (n !== te && z(n, t))
          return i[t] = 4, n[t];
        Lr && (i[t] = 0);
      }
    }
    const d = xt[t];
    let f, g;
    if (d)
      return t === "$attrs" && (_e(e, "get", t), process.env.NODE_ENV !== "production" && Kn()), d(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== te && z(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = c.config.globalProperties, z(g, t)
    )
      return g[t];
    process.env.NODE_ENV !== "production" && ue && (!ne(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== te && Eo(t[0]) && z(o, t) ? x(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === ue && x(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return vr(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && z(o, t) ? (x(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== te && z(r, t) ? (r[t] = n, !0) : z(e.props, t) ? (process.env.NODE_ENV !== "production" && x(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && x(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s } }, i) {
    let l;
    return !!n[i] || e !== te && z(e, i) || vr(t, i) || (l = s[0]) && z(l, i) || z(r, i) || z(xt, i) || z(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (bi.ownKeys = (e) => (x("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Zc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(xt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => xt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ae
    });
  }), t;
}
function Gc(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: ae
    });
  });
}
function Qc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(H(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Eo(r[0])) {
        x(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: ae
      });
    }
  });
}
function ea() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? x(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Lr = !0;
function ta(e) {
  const t = bo(e), n = e.proxy, r = e.ctx;
  Lr = !1, t.beforeCreate && zo(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: o,
    computed: s,
    methods: i,
    watch: l,
    provide: c,
    inject: a,
    // lifecycle
    created: d,
    beforeMount: f,
    mounted: g,
    beforeUpdate: v,
    updated: h,
    activated: y,
    deactivated: C,
    beforeDestroy: P,
    beforeUnmount: F,
    destroyed: j,
    unmounted: k,
    render: Z,
    renderTracked: fe,
    renderTriggered: de,
    errorCaptured: G,
    serverPrefetch: J,
    // public API
    expose: ve,
    inheritAttrs: De,
    // assets
    components: pe,
    directives: ze,
    filters: U
  } = t, K = process.env.NODE_ENV !== "production" ? ea() : null;
  if (process.env.NODE_ENV !== "production") {
    const [V] = e.propsOptions;
    if (V)
      for (const $ in V)
        K("Props", $);
  }
  if (a && na(a, r, K, e.appContext.config.unwrapInjectedRef), i)
    for (const V in i) {
      const $ = i[V];
      B($) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, V, {
        value: $.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[V] = $.bind(n), process.env.NODE_ENV !== "production" && K("Methods", V)) : process.env.NODE_ENV !== "production" && x(`Method "${V}" has type "${typeof $}" in the component definition. Did you reference the function correctly?`);
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !B(o) && x("The data option must be a function. Plain object usage is no longer supported.");
    const V = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && oo(V) && x("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !Y(V))
      process.env.NODE_ENV !== "production" && x("data() should return an object.");
    else if (e.data = ao(V), process.env.NODE_ENV !== "production")
      for (const $ in V)
        K("Data", $), Eo($[0]) || Object.defineProperty(r, $, {
          configurable: !0,
          enumerable: !0,
          get: () => V[$],
          set: ae
        });
  }
  if (Lr = !0, s)
    for (const V in s) {
      const $ = s[V], Re = B($) ? $.bind(n, n) : B($.get) ? $.get.bind(n, n) : ae;
      process.env.NODE_ENV !== "production" && Re === ae && x(`Computed property "${V}" has no getter.`);
      const zt = !B($) && B($.set) ? $.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        x(`Write operation failed: computed property "${V}" is readonly.`);
      } : ae, dt = Jr({
        get: Re,
        set: zt
      });
      Object.defineProperty(r, V, {
        enumerable: !0,
        configurable: !0,
        get: () => dt.value,
        set: (Qe) => dt.value = Qe
      }), process.env.NODE_ENV !== "production" && K("Computed", V);
    }
  if (l)
    for (const V in l)
      yi(l[V], r, n, V);
  if (c) {
    const V = B(c) ? c.call(n) : c;
    Reflect.ownKeys(V).forEach(($) => {
      $c($, V[$]);
    });
  }
  d && zo(
    d,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function M(V, $) {
    I($) ? $.forEach((Re) => V(Re.bind(n))) : $ && V($.bind(n));
  }
  if (M(Lc, f), M(kc, g), M(Hc, v), M(zc, h), M(jc, y), M(Uc, C), M(Xc, G), M(Jc, fe), M(qc, de), M(Wc, F), M(mi, k), M(Kc, J), I(ve))
    if (ve.length) {
      const V = e.exposed || (e.exposed = {});
      ve.forEach(($) => {
        Object.defineProperty(V, $, {
          get: () => n[$],
          set: (Re) => n[$] = Re
        });
      });
    } else
      e.exposed || (e.exposed = {});
  Z && e.render === ae && (e.render = Z), De != null && (e.inheritAttrs = De), pe && (e.components = pe), ze && (e.directives = ze);
}
function na(e, t, n = ae, r = !1) {
  I(e) && (e = kr(e));
  for (const o in e) {
    const s = e[o];
    let i;
    Y(s) ? "default" in s ? i = Pn(
      s.from || o,
      s.default,
      !0
      /* treat default function as factory */
    ) : i = Pn(s.from || o) : i = Pn(s), ie(i) ? r ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : (process.env.NODE_ENV !== "production" && x(`injected property "${o}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[o] = i) : t[o] = i, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function zo(e, t, n) {
  $e(I(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function yi(e, t, n, r) {
  const o = r.includes(".") ? di(n, r) : () => n[r];
  if (ne(e)) {
    const s = t[e];
    B(s) ? In(o, s) : process.env.NODE_ENV !== "production" && x(`Invalid watch handler specified by key "${e}"`, s);
  } else if (B(e))
    In(o, e.bind(n));
  else if (Y(e))
    if (I(e))
      e.forEach((s) => yi(s, t, n, r));
    else {
      const s = B(e.handler) ? e.handler.bind(n) : t[e.handler];
      B(s) ? In(o, s, e) : process.env.NODE_ENV !== "production" && x(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && x(`Invalid watch option: "${r}"`, e);
}
function bo(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: o, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, l = s.get(t);
  let c;
  return l ? c = l : !o.length && !n && !r ? c = t : (c = {}, o.length && o.forEach((a) => qn(c, a, i, !0)), qn(c, t, i)), Y(t) && s.set(t, c), c;
}
function qn(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && qn(e, s, n, !0), o && o.forEach((i) => qn(e, i, n, !0));
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && x('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = ra[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ra = {
  data: Wo,
  props: bt,
  emits: bt,
  // objects
  methods: bt,
  computed: bt,
  // lifecycle
  beforeCreate: be,
  created: be,
  beforeMount: be,
  mounted: be,
  beforeUpdate: be,
  updated: be,
  beforeDestroy: be,
  beforeUnmount: be,
  destroyed: be,
  unmounted: be,
  activated: be,
  deactivated: be,
  errorCaptured: be,
  serverPrefetch: be,
  // assets
  components: bt,
  directives: bt,
  // watch
  watch: sa,
  // provide / inject
  provide: Wo,
  inject: oa
};
function Wo(e, t) {
  return t ? e ? function() {
    return se(B(e) ? e.call(this, this) : e, B(t) ? t.call(this, this) : t);
  } : t : e;
}
function oa(e, t) {
  return bt(kr(e), kr(t));
}
function kr(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function bt(e, t) {
  return e ? se(se(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function sa(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = se(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = be(e[r], t[r]);
  return n;
}
function ia(e, t, n, r = !1) {
  const o = {}, s = {};
  Hn(s, ur, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), _i(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  process.env.NODE_ENV !== "production" && wi(t || {}, o, e), n ? e.props = r ? o : Ql(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function la(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function ca(e, t, n, r) {
  const { props: o, attrs: s, vnode: { patchFlag: i } } = e, l = H(o), [c] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && la(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let g = d[f];
        if (lr(e.emitsOptions, g))
          continue;
        const v = t[g];
        if (c)
          if (z(s, g))
            v !== s[g] && (s[g] = v, a = !0);
          else {
            const h = Bt(g);
            o[h] = Hr(
              c,
              l,
              h,
              v,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          v !== s[g] && (s[g] = v, a = !0);
      }
    }
  } else {
    _i(e, t, o, s) && (a = !0);
    let d;
    for (const f in l)
      (!t || // for camelCase
      !z(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = it(f)) === f || !z(t, d))) && (c ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[f] = Hr(
        c,
        l,
        f,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete o[f]);
    if (s !== l)
      for (const f in s)
        (!t || !z(t, f)) && (delete s[f], a = !0);
  }
  a && Ze(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && wi(t || {}, o, e);
}
function _i(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let c in t) {
      if (An(c))
        continue;
      const a = t[c];
      let d;
      o && z(o, d = Bt(c)) ? !s || !s.includes(d) ? n[d] = a : (l || (l = {}))[d] = a : lr(e.emitsOptions, c) || (!(c in r) || a !== r[c]) && (r[c] = a, i = !0);
    }
  if (s) {
    const c = H(n), a = l || te;
    for (let d = 0; d < s.length; d++) {
      const f = s[d];
      n[f] = Hr(o, c, f, a[f], e, !z(a, f));
    }
  }
  return i;
}
function Hr(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const l = z(i, "default");
    if (l && r === void 0) {
      const c = i.default;
      if (i.type !== Function && B(c)) {
        const { propsDefaults: a } = o;
        n in a ? r = a[n] : (Lt(o), r = a[n] = c.call(null, t), Dt());
      } else
        r = c;
    }
    i[
      0
      /* BooleanFlags.shouldCast */
    ] && (s && !l ? r = !1 : i[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (r === "" || r === it(n)) && (r = !0));
  }
  return r;
}
function vi(e, t, n = !1) {
  const r = t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, l = [];
  let c = !1;
  if (!B(e)) {
    const d = (f) => {
      c = !0;
      const [g, v] = vi(f, t, !0);
      se(i, g), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !c)
    return Y(e) && r.set(e, jt), jt;
  if (I(s))
    for (let d = 0; d < s.length; d++) {
      process.env.NODE_ENV !== "production" && !ne(s[d]) && x("props must be strings when using array syntax.", s[d]);
      const f = Bt(s[d]);
      Ko(f) && (i[f] = te);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !Y(s) && x("invalid props options", s);
    for (const d in s) {
      const f = Bt(d);
      if (Ko(f)) {
        const g = s[d], v = i[f] = I(g) || B(g) ? { type: g } : Object.assign({}, g);
        if (v) {
          const h = Jo(Boolean, v.type), y = Jo(String, v.type);
          v[
            0
            /* BooleanFlags.shouldCast */
          ] = h > -1, v[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = y < 0 || h < y, (h > -1 || z(v, "default")) && l.push(f);
        }
      }
    }
  }
  const a = [i, l];
  return Y(e) && r.set(e, a), a;
}
function Ko(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && x(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function zr(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function qo(e, t) {
  return zr(e) === zr(t);
}
function Jo(e, t) {
  return I(t) ? t.findIndex((n) => qo(n, e)) : B(t) && qo(t, e) ? 0 : -1;
}
function wi(e, t, n) {
  const r = H(t), o = n.propsOptions[0];
  for (const s in o) {
    let i = o[s];
    i != null && aa(s, r[s], i, !z(e, s) && !z(e, it(s)));
  }
}
function aa(e, t, n, r) {
  const { type: o, required: s, validator: i } = n;
  if (s && r) {
    x('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (o != null && o !== !0) {
      let l = !1;
      const c = I(o) ? o : [o], a = [];
      for (let d = 0; d < c.length && !l; d++) {
        const { valid: f, expectedType: g } = fa(t, c[d]);
        a.push(g || ""), l = f;
      }
      if (!l) {
        x(da(e, t, a));
        return;
      }
    }
    i && !i(t) && x('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ua = /* @__PURE__ */ ft("String,Number,Boolean,Function,Symbol,BigInt");
function fa(e, t) {
  let n;
  const r = zr(t);
  if (ua(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else
    r === "Object" ? n = Y(e) : r === "Array" ? n = I(e) : r === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function da(e, t, n) {
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(er).join(" | ")}`;
  const o = n[0], s = so(t), i = Xo(t, o), l = Xo(t, s);
  return n.length === 1 && Yo(o) && !pa(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, Yo(s) && (r += `with value ${l}.`), r;
}
function Xo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Yo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function pa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ni = (e) => e[0] === "_" || e === "$stable", yo = (e) => I(e) ? e.map(Ie) : [Ie(e)], ha = (e, t, n) => {
  if (t._n)
    return t;
  const r = Cc((...o) => (process.env.NODE_ENV !== "production" && re && x(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), yo(t(...o))), n);
  return r._c = !1, r;
}, Oi = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Ni(o))
      continue;
    const s = e[o];
    if (B(s))
      t[o] = ha(o, s, r);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && x(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);
      const i = yo(s);
      t[o] = () => i;
    }
  }
}, xi = (e, t) => {
  process.env.NODE_ENV !== "production" && !go(e.vnode) && x("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = yo(t);
  e.slots.default = () => n;
}, ma = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = H(t), Hn(t, "_", n)) : Oi(t, e.slots = {});
  } else
    e.slots = {}, t && xi(e, t);
  Hn(e.slots, ur, 1);
}, ga = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = te;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Ot ? se(o, t) : n && l === 1 ? s = !1 : (se(o, t), !n && l === 1 && delete o._) : (s = !t.$stable, Oi(t, o)), i = t;
  } else
    t && (xi(e, t), i = { default: 1 });
  if (s)
    for (const l in o)
      !Ni(l) && !(l in i) && delete o[l];
};
function Di() {
  return {
    app: null,
    config: {
      isNativeTag: Rs,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ea = 0;
function ba(e, t) {
  return function(r, o = null) {
    B(r) || (r = Object.assign({}, r)), o != null && !Y(o) && (process.env.NODE_ENV !== "production" && x("root props passed to app.mount() must be an object."), o = null);
    const s = Di(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const c = s.app = {
      _uid: Ea++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: es,
      get config() {
        return s.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && x("app.config cannot be replaced. Modify individual options instead.");
      },
      use(a, ...d) {
        return i.has(a) ? process.env.NODE_ENV !== "production" && x("Plugin has already been applied to target app.") : a && B(a.install) ? (i.add(a), a.install(c, ...d)) : B(a) ? (i.add(a), a(c, ...d)) : process.env.NODE_ENV !== "production" && x('A plugin must either be a function or an object with an "install" function.'), c;
      },
      mixin(a) {
        return s.mixins.includes(a) ? process.env.NODE_ENV !== "production" && x("Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")) : s.mixins.push(a), c;
      },
      component(a, d) {
        return process.env.NODE_ENV !== "production" && Kr(a, s.config), d ? (process.env.NODE_ENV !== "production" && s.components[a] && x(`Component "${a}" has already been registered in target app.`), s.components[a] = d, c) : s.components[a];
      },
      directive(a, d) {
        return process.env.NODE_ENV !== "production" && gi(a), d ? (process.env.NODE_ENV !== "production" && s.directives[a] && x(`Directive "${a}" has already been registered in target app.`), s.directives[a] = d, c) : s.directives[a];
      },
      mount(a, d, f) {
        if (l)
          process.env.NODE_ENV !== "production" && x("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && x("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const g = ge(r, o);
          return g.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(at(g), a, f);
          }), d && t ? t(g, a) : e(g, a, f), l = !0, c._container = a, a.__vue_app__ = c, process.env.NODE_ENV !== "production" && (c._instance = g.component, yc(c, es)), vo(g.component) || g.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, c._container), process.env.NODE_ENV !== "production" && (c._instance = null, _c(c)), delete c._container.__vue_app__) : process.env.NODE_ENV !== "production" && x("Cannot unmount an app that is not mounted.");
      },
      provide(a, d) {
        return process.env.NODE_ENV !== "production" && a in s.provides && x(`App already provides property with key "${String(a)}". It will be overwritten with the new value.`), s.provides[a] = d, c;
      }
    };
    return c;
  };
}
function Wr(e, t, n, r, o = !1) {
  if (I(e)) {
    e.forEach((g, v) => Wr(g, t && (I(t) ? t[v] : t), n, r, o));
    return;
  }
  if (rn(r) && !o)
    return;
  const s = r.shapeFlag & 4 ? vo(r.component) || r.component.proxy : r.el, i = o ? null : s, { i: l, r: c } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    x("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const a = t && t.r, d = l.refs === te ? l.refs = {} : l.refs, f = l.setupState;
  if (a != null && a !== c && (ne(a) ? (d[a] = null, z(f, a) && (f[a] = null)) : ie(a) && (a.value = null)), B(c))
    Xe(c, l, 12, [i, d]);
  else {
    const g = ne(c), v = ie(c);
    if (g || v) {
      const h = () => {
        if (e.f) {
          const y = g ? z(f, c) ? f[c] : d[c] : c.value;
          o ? I(y) && no(y, s) : I(y) ? y.includes(s) || y.push(s) : g ? (d[c] = [s], z(f, c) && (f[c] = d[c])) : (c.value = [s], e.k && (d[e.k] = c.value));
        } else
          g ? (d[c] = i, z(f, c) && (f[c] = i)) : v ? (c.value = i, e.k && (d[e.k] = i)) : process.env.NODE_ENV !== "production" && x("Invalid template ref type:", c, `(${typeof c})`);
      };
      i ? (h.id = -1, we(h, n)) : h();
    } else
      process.env.NODE_ENV !== "production" && x("Invalid template ref type:", c, `(${typeof c})`);
  }
}
let Xt, ot;
function Ke(e, t) {
  e.appContext.config.performance && Jn() && ot.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Oc(e, t, Jn() ? ot.now() : Date.now());
}
function qe(e, t) {
  if (e.appContext.config.performance && Jn()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    ot.mark(r), ot.measure(`<${fr(e, e.type)}> ${t}`, n, r), ot.clearMarks(n), ot.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && xc(e, t, Jn() ? ot.now() : Date.now());
}
function Jn() {
  return Xt !== void 0 || (typeof window < "u" && window.performance ? (Xt = !0, ot = window.performance) : Xt = !1), Xt;
}
function ya() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const we = Fc;
function _a(e) {
  return va(e);
}
function va(e, t) {
  ya();
  const n = Ps();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && si(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: r, remove: o, patchProp: s, createElement: i, createText: l, createComment: c, setText: a, setElementText: d, parentNode: f, nextSibling: g, setScopeId: v = ae, insertStaticContent: h } = e, y = (u, p, m, _ = null, b = null, N = null, T = !1, O = null, D = process.env.NODE_ENV !== "production" && Ot ? !1 : !!p.dynamicChildren) => {
    if (u === p)
      return;
    u && !Yt(u, p) && (_ = pt(u), Ae(u, b, N, !0), u = null), p.patchFlag === -2 && (D = !1, p.dynamicChildren = null);
    const { type: w, ref: A, shapeFlag: R } = p;
    switch (w) {
      case gn:
        C(u, p, m, _);
        break;
      case xe:
        P(u, p, m, _);
        break;
      case $n:
        u == null ? F(p, m, _, T) : process.env.NODE_ENV !== "production" && j(u, p, m, T);
        break;
      case Oe:
        ze(u, p, m, _, b, N, T, O, D);
        break;
      default:
        R & 1 ? fe(u, p, m, _, b, N, T, O, D) : R & 6 ? U(u, p, m, _, b, N, T, O, D) : R & 64 || R & 128 ? w.process(u, p, m, _, b, N, T, O, D, We) : process.env.NODE_ENV !== "production" && x("Invalid VNode type:", w, `(${typeof w})`);
    }
    A != null && b && Wr(A, u && u.ref, N, p || u, !p);
  }, C = (u, p, m, _) => {
    if (u == null)
      r(p.el = l(p.children), m, _);
    else {
      const b = p.el = u.el;
      p.children !== u.children && a(b, p.children);
    }
  }, P = (u, p, m, _) => {
    u == null ? r(p.el = c(p.children || ""), m, _) : p.el = u.el;
  }, F = (u, p, m, _) => {
    [u.el, u.anchor] = h(u.children, p, m, _, u.el, u.anchor);
  }, j = (u, p, m, _) => {
    if (p.children !== u.children) {
      const b = g(u.anchor);
      Z(u), [p.el, p.anchor] = h(p.children, m, b, _);
    } else
      p.el = u.el, p.anchor = u.anchor;
  }, k = ({ el: u, anchor: p }, m, _) => {
    let b;
    for (; u && u !== p; )
      b = g(u), r(u, m, _), u = b;
    r(p, m, _);
  }, Z = ({ el: u, anchor: p }) => {
    let m;
    for (; u && u !== p; )
      m = g(u), o(u), u = m;
    o(p);
  }, fe = (u, p, m, _, b, N, T, O, D) => {
    T = T || p.type === "svg", u == null ? de(p, m, _, b, N, T, O, D) : ve(u, p, b, N, T, O, D);
  }, de = (u, p, m, _, b, N, T, O) => {
    let D, w;
    const { type: A, props: R, shapeFlag: S, transition: L, dirs: W } = u;
    if (D = u.el = i(u.type, N, R && R.is, R), S & 8 ? d(D, u.children) : S & 16 && J(u.children, D, null, _, b, N && A !== "foreignObject", T, O), W && ht(u, null, _, "created"), G(D, u, u.scopeId, T, _), R) {
      for (const X in R)
        X !== "value" && !An(X) && s(D, X, null, R[X], N, u.children, _, b, Te);
      "value" in R && s(D, "value", null, R.value), (w = R.onVnodeBeforeMount) && je(w, _, u);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(D, "__vnode", {
      value: u,
      enumerable: !1
    }), Object.defineProperty(D, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), W && ht(u, null, _, "beforeMount");
    const Q = (!b || b && !b.pendingBranch) && L && !L.persisted;
    Q && L.beforeEnter(D), r(D, p, m), ((w = R && R.onVnodeMounted) || Q || W) && we(() => {
      w && je(w, _, u), Q && L.enter(D), W && ht(u, null, _, "mounted");
    }, b);
  }, G = (u, p, m, _, b) => {
    if (m && v(u, m), _)
      for (let N = 0; N < _.length; N++)
        v(u, _[N]);
    if (b) {
      let N = b.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = ui(N.children) || N), p === N) {
        const T = b.vnode;
        G(u, T, T.scopeId, T.slotScopeIds, b.parent);
      }
    }
  }, J = (u, p, m, _, b, N, T, O, D = 0) => {
    for (let w = D; w < u.length; w++) {
      const A = u[w] = O ? rt(u[w]) : Ie(u[w]);
      y(null, A, p, m, _, b, N, T, O);
    }
  }, ve = (u, p, m, _, b, N, T) => {
    const O = p.el = u.el;
    let { patchFlag: D, dynamicChildren: w, dirs: A } = p;
    D |= u.patchFlag & 16;
    const R = u.props || te, S = p.props || te;
    let L;
    m && mt(m, !1), (L = S.onVnodeBeforeUpdate) && je(L, m, p, u), A && ht(p, u, m, "beforeUpdate"), m && mt(m, !0), process.env.NODE_ENV !== "production" && Ot && (D = 0, T = !1, w = null);
    const W = b && p.type !== "foreignObject";
    if (w ? (De(u.dynamicChildren, w, O, m, _, W, N), process.env.NODE_ENV !== "production" && m && m.type.__hmrId && Fn(u, p)) : T || Re(u, p, O, null, m, _, W, N, !1), D > 0) {
      if (D & 16)
        pe(O, p, R, S, m, _, b);
      else if (D & 2 && R.class !== S.class && s(O, "class", null, S.class, b), D & 4 && s(O, "style", R.style, S.style, b), D & 8) {
        const Q = p.dynamicProps;
        for (let X = 0; X < Q.length; X++) {
          const oe = Q[X], Ve = R[oe], Pt = S[oe];
          (Pt !== Ve || oe === "value") && s(O, oe, Ve, Pt, b, u.children, m, _, Te);
        }
      }
      D & 1 && u.children !== p.children && d(O, p.children);
    } else
      !T && w == null && pe(O, p, R, S, m, _, b);
    ((L = S.onVnodeUpdated) || A) && we(() => {
      L && je(L, m, p, u), A && ht(p, u, m, "updated");
    }, _);
  }, De = (u, p, m, _, b, N, T) => {
    for (let O = 0; O < p.length; O++) {
      const D = u[O], w = p[O], A = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === Oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Yt(D, w) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 70) ? f(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      y(D, w, A, null, _, b, N, T, !0);
    }
  }, pe = (u, p, m, _, b, N, T) => {
    if (m !== _) {
      if (m !== te)
        for (const O in m)
          !An(O) && !(O in _) && s(u, O, m[O], null, T, p.children, b, N, Te);
      for (const O in _) {
        if (An(O))
          continue;
        const D = _[O], w = m[O];
        D !== w && O !== "value" && s(u, O, w, D, T, p.children, b, N, Te);
      }
      "value" in _ && s(u, "value", m.value, _.value);
    }
  }, ze = (u, p, m, _, b, N, T, O, D) => {
    const w = p.el = u ? u.el : l(""), A = p.anchor = u ? u.anchor : l("");
    let { patchFlag: R, dynamicChildren: S, slotScopeIds: L } = p;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ot || R & 2048) && (R = 0, D = !1, S = null), L && (O = O ? O.concat(L) : L), u == null ? (r(w, m, _), r(A, m, _), J(p.children, m, A, b, N, T, O, D)) : R > 0 && R & 64 && S && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (De(u.dynamicChildren, S, m, b, N, T, O), process.env.NODE_ENV !== "production" && b && b.type.__hmrId ? Fn(u, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || b && p === b.subTree) && Fn(
        u,
        p,
        !0
        /* shallow */
      )
    )) : Re(u, p, m, A, b, N, T, O, D);
  }, U = (u, p, m, _, b, N, T, O, D) => {
    p.slotScopeIds = O, u == null ? p.shapeFlag & 512 ? b.ctx.activate(p, m, _, T, D) : K(p, m, _, b, N, T, D) : M(u, p, D);
  }, K = (u, p, m, _, b, N, T) => {
    const O = u.component = Aa(u, _, b);
    if (process.env.NODE_ENV !== "production" && O.type.__hmrId && mc(O), process.env.NODE_ENV !== "production" && (Sn(u), Ke(O, "mount")), go(u) && (O.ctx.renderer = We), process.env.NODE_ENV !== "production" && Ke(O, "init"), Pa(O), process.env.NODE_ENV !== "production" && qe(O, "init"), O.asyncDep) {
      if (b && b.registerDep(O, V), !u.el) {
        const D = O.subTree = ge(xe);
        P(null, D, p, m);
      }
      return;
    }
    V(O, u, p, m, b, N, T), process.env.NODE_ENV !== "production" && (Vn(), qe(O, "mount"));
  }, M = (u, p, m) => {
    const _ = p.component = u.component;
    if (Vc(u, p, m))
      if (_.asyncDep && !_.asyncResolved) {
        process.env.NODE_ENV !== "production" && Sn(p), $(_, p, m), process.env.NODE_ENV !== "production" && Vn();
        return;
      } else
        _.next = p, pc(_.update), _.update();
    else
      p.el = u.el, _.vnode = p;
  }, V = (u, p, m, _, b, N, T) => {
    const O = () => {
      if (u.isMounted) {
        let { next: A, bu: R, u: S, parent: L, vnode: W } = u, Q = A, X;
        process.env.NODE_ENV !== "production" && Sn(A || u.vnode), mt(u, !1), A ? (A.el = W.el, $(u, A, T)) : A = W, R && Jt(R), (X = A.props && A.props.onVnodeBeforeUpdate) && je(X, L, A, W), mt(u, !0), process.env.NODE_ENV !== "production" && Ke(u, "render");
        const oe = _r(u);
        process.env.NODE_ENV !== "production" && qe(u, "render");
        const Ve = u.subTree;
        u.subTree = oe, process.env.NODE_ENV !== "production" && Ke(u, "patch"), y(
          Ve,
          oe,
          // parent may have changed if it's in a teleport
          f(Ve.el),
          // anchor may have changed if it's in a fragment
          pt(Ve),
          u,
          b,
          N
        ), process.env.NODE_ENV !== "production" && qe(u, "patch"), A.el = oe.el, Q === null && Pc(u, oe.el), S && we(S, b), (X = A.props && A.props.onVnodeUpdated) && we(() => je(X, L, A, W), b), process.env.NODE_ENV !== "production" && ii(u), process.env.NODE_ENV !== "production" && Vn();
      } else {
        let A;
        const { el: R, props: S } = p, { bm: L, m: W, parent: Q } = u, X = rn(p);
        if (mt(u, !1), L && Jt(L), !X && (A = S && S.onVnodeBeforeMount) && je(A, Q, p), mt(u, !0), R && Vt) {
          const oe = () => {
            process.env.NODE_ENV !== "production" && Ke(u, "render"), u.subTree = _r(u), process.env.NODE_ENV !== "production" && qe(u, "render"), process.env.NODE_ENV !== "production" && Ke(u, "hydrate"), Vt(R, u.subTree, u, b, null), process.env.NODE_ENV !== "production" && qe(u, "hydrate");
          };
          X ? p.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !u.isUnmounted && oe()
          ) : oe();
        } else {
          process.env.NODE_ENV !== "production" && Ke(u, "render");
          const oe = u.subTree = _r(u);
          process.env.NODE_ENV !== "production" && qe(u, "render"), process.env.NODE_ENV !== "production" && Ke(u, "patch"), y(null, oe, m, _, u, b, N), process.env.NODE_ENV !== "production" && qe(u, "patch"), p.el = oe.el;
        }
        if (W && we(W, b), !X && (A = S && S.onVnodeMounted)) {
          const oe = p;
          we(() => je(A, Q, oe), b);
        }
        (p.shapeFlag & 256 || Q && rn(Q.vnode) && Q.vnode.shapeFlag & 256) && u.a && we(u.a, b), u.isMounted = !0, process.env.NODE_ENV !== "production" && vc(u), p = m = _ = null;
      }
    }, D = u.effect = new lo(
      O,
      () => ir(w),
      u.scope
      // track it in component's effect scope
    ), w = u.update = () => D.run();
    w.id = u.uid, mt(u, !0), process.env.NODE_ENV !== "production" && (D.onTrack = u.rtc ? (A) => Jt(u.rtc, A) : void 0, D.onTrigger = u.rtg ? (A) => Jt(u.rtg, A) : void 0, w.ownerInstance = u), w();
  }, $ = (u, p, m) => {
    p.component = u;
    const _ = u.vnode.props;
    u.vnode = p, u.next = null, ca(u, p.props, _, m), ga(u, p.children, m), Ct(), Uo(), Rt();
  }, Re = (u, p, m, _, b, N, T, O, D = !1) => {
    const w = u && u.children, A = u ? u.shapeFlag : 0, R = p.children, { patchFlag: S, shapeFlag: L } = p;
    if (S > 0) {
      if (S & 128) {
        dt(w, R, m, _, b, N, T, O, D);
        return;
      } else if (S & 256) {
        zt(w, R, m, _, b, N, T, O, D);
        return;
      }
    }
    L & 8 ? (A & 16 && Te(w, b, N), R !== w && d(m, R)) : A & 16 ? L & 16 ? dt(w, R, m, _, b, N, T, O, D) : Te(w, b, N, !0) : (A & 8 && d(m, ""), L & 16 && J(R, m, _, b, N, T, O, D));
  }, zt = (u, p, m, _, b, N, T, O, D) => {
    u = u || jt, p = p || jt;
    const w = u.length, A = p.length, R = Math.min(w, A);
    let S;
    for (S = 0; S < R; S++) {
      const L = p[S] = D ? rt(p[S]) : Ie(p[S]);
      y(u[S], L, m, null, b, N, T, O, D);
    }
    w > A ? Te(u, b, N, !0, !1, R) : J(p, m, _, b, N, T, O, D, R);
  }, dt = (u, p, m, _, b, N, T, O, D) => {
    let w = 0;
    const A = p.length;
    let R = u.length - 1, S = A - 1;
    for (; w <= R && w <= S; ) {
      const L = u[w], W = p[w] = D ? rt(p[w]) : Ie(p[w]);
      if (Yt(L, W))
        y(L, W, m, null, b, N, T, O, D);
      else
        break;
      w++;
    }
    for (; w <= R && w <= S; ) {
      const L = u[R], W = p[S] = D ? rt(p[S]) : Ie(p[S]);
      if (Yt(L, W))
        y(L, W, m, null, b, N, T, O, D);
      else
        break;
      R--, S--;
    }
    if (w > R) {
      if (w <= S) {
        const L = S + 1, W = L < A ? p[L].el : _;
        for (; w <= S; )
          y(null, p[w] = D ? rt(p[w]) : Ie(p[w]), m, W, b, N, T, O, D), w++;
      }
    } else if (w > S)
      for (; w <= R; )
        Ae(u[w], b, N, !0), w++;
    else {
      const L = w, W = w, Q = /* @__PURE__ */ new Map();
      for (w = W; w <= S; w++) {
        const Ee = p[w] = D ? rt(p[w]) : Ie(p[w]);
        Ee.key != null && (process.env.NODE_ENV !== "production" && Q.has(Ee.key) && x("Duplicate keys found during update:", JSON.stringify(Ee.key), "Make sure keys are unique."), Q.set(Ee.key, w));
      }
      let X, oe = 0;
      const Ve = S - W + 1;
      let Pt = !1, Co = 0;
      const qt = new Array(Ve);
      for (w = 0; w < Ve; w++)
        qt[w] = 0;
      for (w = L; w <= R; w++) {
        const Ee = u[w];
        if (oe >= Ve) {
          Ae(Ee, b, N, !0);
          continue;
        }
        let Me;
        if (Ee.key != null)
          Me = Q.get(Ee.key);
        else
          for (X = W; X <= S; X++)
            if (qt[X - W] === 0 && Yt(Ee, p[X])) {
              Me = X;
              break;
            }
        Me === void 0 ? Ae(Ee, b, N, !0) : (qt[Me - W] = w + 1, Me >= Co ? Co = Me : Pt = !0, y(Ee, p[Me], m, null, b, N, T, O, D), oe++);
      }
      const Ro = Pt ? wa(qt) : jt;
      for (X = Ro.length - 1, w = Ve - 1; w >= 0; w--) {
        const Ee = W + w, Me = p[Ee], Ao = Ee + 1 < A ? p[Ee + 1].el : _;
        qt[w] === 0 ? y(null, Me, m, Ao, b, N, T, O, D) : Pt && (X < 0 || w !== Ro[X] ? Qe(
          Me,
          m,
          Ao,
          2
          /* MoveType.REORDER */
        ) : X--);
      }
    }
  }, Qe = (u, p, m, _, b = null) => {
    const { el: N, type: T, transition: O, children: D, shapeFlag: w } = u;
    if (w & 6) {
      Qe(u.component.subTree, p, m, _);
      return;
    }
    if (w & 128) {
      u.suspense.move(p, m, _);
      return;
    }
    if (w & 64) {
      T.move(u, p, m, We);
      return;
    }
    if (T === Oe) {
      r(N, p, m);
      for (let R = 0; R < D.length; R++)
        Qe(D[R], p, m, _);
      r(u.anchor, p, m);
      return;
    }
    if (T === $n) {
      k(u, p, m);
      return;
    }
    if (_ !== 2 && w & 1 && O)
      if (_ === 0)
        O.beforeEnter(N), r(N, p, m), we(() => O.enter(N), b);
      else {
        const { leave: R, delayLeave: S, afterLeave: L } = O, W = () => r(N, p, m), Q = () => {
          R(N, () => {
            W(), L && L();
          });
        };
        S ? S(N, W, Q) : Q();
      }
    else
      r(N, p, m);
  }, Ae = (u, p, m, _ = !1, b = !1) => {
    const { type: N, props: T, ref: O, children: D, dynamicChildren: w, shapeFlag: A, patchFlag: R, dirs: S } = u;
    if (O != null && Wr(O, null, m, u, !0), A & 256) {
      p.ctx.deactivate(u);
      return;
    }
    const L = A & 1 && S, W = !rn(u);
    let Q;
    if (W && (Q = T && T.onVnodeBeforeUnmount) && je(Q, p, u), A & 6)
      Wt(u.component, m, _);
    else {
      if (A & 128) {
        u.suspense.unmount(m, _);
        return;
      }
      L && ht(u, null, p, "beforeUnmount"), A & 64 ? u.type.remove(u, p, m, b, We, _) : w && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== Oe || R > 0 && R & 64) ? Te(w, p, m, !1, !0) : (N === Oe && R & 384 || !b && A & 16) && Te(D, p, m), _ && At(u);
    }
    (W && (Q = T && T.onVnodeUnmounted) || L) && we(() => {
      Q && je(Q, p, u), L && ht(u, null, p, "unmounted");
    }, m);
  }, At = (u) => {
    const { type: p, el: m, anchor: _, transition: b } = u;
    if (p === Oe) {
      process.env.NODE_ENV !== "production" && u.patchFlag > 0 && u.patchFlag & 2048 && b && !b.persisted ? u.children.forEach((T) => {
        T.type === xe ? o(T.el) : At(T);
      }) : yn(m, _);
      return;
    }
    if (p === $n) {
      Z(u);
      return;
    }
    const N = () => {
      o(m), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: T, delayLeave: O } = b, D = () => T(m, N);
      O ? O(u.el, N, D) : D();
    } else
      N();
  }, yn = (u, p) => {
    let m;
    for (; u !== p; )
      m = g(u), o(u), u = m;
    o(p);
  }, Wt = (u, p, m) => {
    process.env.NODE_ENV !== "production" && u.type.__hmrId && gc(u);
    const { bum: _, scope: b, update: N, subTree: T, um: O } = u;
    _ && Jt(_), b.stop(), N && (N.active = !1, Ae(T, u, p, m)), O && we(O, p), we(() => {
      u.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), process.env.NODE_ENV !== "production" && Nc(u);
  }, Te = (u, p, m, _ = !1, b = !1, N = 0) => {
    for (let T = N; T < u.length; T++)
      Ae(u[T], p, m, _, b);
  }, pt = (u) => u.shapeFlag & 6 ? pt(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : g(u.anchor || u.el), Kt = (u, p, m) => {
    u == null ? p._vnode && Ae(p._vnode, null, null, !0) : y(p._vnode || null, u, p, null, null, null, m), Uo(), ni(), p._vnode = u;
  }, We = {
    p: y,
    um: Ae,
    m: Qe,
    r: At,
    mt: K,
    mc: J,
    pc: Re,
    pbc: De,
    n: pt,
    o: e
  };
  let St, Vt;
  return t && ([St, Vt] = t(We)), {
    render: Kt,
    hydrate: St,
    createApp: ba(Kt, St)
  };
}
function mt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Fn(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (I(r) && I(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = rt(o[s]), l.el = i.el), n || Fn(i, l)), l.type === gn && (l.el = i.el), process.env.NODE_ENV !== "production" && l.type === xe && !l.el && (l.el = i.el);
    }
}
function wa(e) {
  const t = e.slice(), n = [0];
  let r, o, s, i, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const a = e[r];
    if (a !== 0) {
      if (o = n[n.length - 1], e[o] < a) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < a ? s = l + 1 : i = l;
      a < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const Na = (e) => e.__isTeleport, Oe = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), gn = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), xe = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), $n = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), on = [];
let Fe = null;
function he(e = !1) {
  on.push(Fe = e ? null : []);
}
function Oa() {
  on.pop(), Fe = on[on.length - 1] || null;
}
let fn = 1;
function Zo(e) {
  fn += e;
}
function Ti(e) {
  return e.dynamicChildren = fn > 0 ? Fe || jt : null, Oa(), fn > 0 && Fe && Fe.push(e), e;
}
function Ne(e, t, n, r, o, s) {
  return Ti(ee(
    e,
    t,
    n,
    r,
    o,
    s,
    !0
    /* isBlock */
  ));
}
function Ci(e, t, n, r, o) {
  return Ti(ge(
    e,
    t,
    n,
    r,
    o,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function ar(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Yt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && It.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const xa = (...e) => Ai(...e), ur = "__vInternal", Ri = ({ key: e }) => e ?? null, Mn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ne(e) || ie(e) || B(e) ? { i: ue, r: e, k: t, f: !!n } : e : null;
function ee(e, t = null, n = null, r = 0, o = null, s = e === Oe ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ri(t),
    ref: t && Mn(t),
    scopeId: ai,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ue
  };
  return l ? (_o(c, n), s & 128 && e.normalize(c)) : n && (c.shapeFlag |= ne(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && x("VNode created with invalid key (NaN). VNode type:", c.type), fn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Fe.push(c), c;
}
const ge = process.env.NODE_ENV !== "production" ? xa : Ai;
function Ai(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Yc) && (process.env.NODE_ENV !== "production" && !e && x(`Invalid vnode type when creating vnode: ${e}.`), e = xe), ar(e)) {
    const l = at(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _o(l, n), fn > 0 && !s && Fe && (l.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = l : Fe.push(l)), l.patchFlag |= -2, l;
  }
  if (Mi(e) && (e = e.__vccOpts), t) {
    t = Da(t);
    let { class: l, style: c } = t;
    l && !ne(l) && (t.class = Ce(l)), Y(c) && (Fr(c) && !I(c) && (c = se({}, c)), t.style = to(c));
  }
  const i = ne(e) ? 1 : Ic(e) ? 128 : Na(e) ? 64 : Y(e) ? 4 : B(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Fr(e) && (e = H(e), x("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), ee(e, t, n, r, o, i, s, !0);
}
function Da(e) {
  return e ? Fr(e) || ur in e ? se({}, e) : e : null;
}
function at(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e, l = t ? Vi(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ri(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? I(o) ? o.concat(Mn(t)) : [o, Mn(t)] : Mn(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && I(i) ? i.map(Si) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && at(e.ssContent),
    ssFallback: e.ssFallback && at(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Si(e) {
  const t = at(e);
  return I(e.children) && (t.children = e.children.map(Si)), t;
}
function Ta(e = " ", t = 0) {
  return ge(gn, null, e, t);
}
function tn(e = "", t = !1) {
  return t ? (he(), Ci(xe, null, e)) : ge(xe, null, e);
}
function Ie(e) {
  return e == null || typeof e == "boolean" ? ge(xe) : I(e) ? ge(
    Oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? rt(e) : ge(gn, null, String(e));
}
function rt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : at(e);
}
function _o(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), _o(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(ur in t) ? t._ctx = ue : o === 3 && ue && (ue.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    B(t) ? (t = { default: t, _ctx: ue }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ta(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Vi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Ce([t.class, r.class]));
      else if (o === "style")
        t.style = to([t.style, r.style]);
      else if (hn(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(I(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
function je(e, t, n, r = null) {
  $e(e, t, 7, [
    n,
    r
  ]);
}
const Ca = Di();
let Ra = 0;
function Aa(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Ca, s = {
    uid: Ra++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Nl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: vi(r, o),
    emitsOptions: ci(r, o),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: te,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: te,
    data: te,
    props: te,
    attrs: te,
    slots: te,
    refs: te,
    setupState: te,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = Zc(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Tc.bind(null, s), e.ce && e.ce(s), s;
}
let re = null;
const Sa = () => re || ue, Lt = (e) => {
  re = e, e.scope.on();
}, Dt = () => {
  re && re.scope.off(), re = null;
}, Va = /* @__PURE__ */ ft("slot,component");
function Kr(e, t) {
  const n = t.isNativeTag || Rs;
  (Va(e) || n(e)) && x("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Pi(e) {
  return e.vnode.shapeFlag & 4;
}
let dn = !1;
function Pa(e, t = !1) {
  dn = t;
  const { props: n, children: r } = e.vnode, o = Pi(e);
  ia(e, n, o, t), ma(e, r);
  const s = o ? Ia(e, t) : void 0;
  return dn = !1, s;
}
function Ia(e, t) {
  var n;
  const r = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && Kr(r.name, e.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let i = 0; i < s.length; i++)
        Kr(s[i], e.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let i = 0; i < s.length; i++)
        gi(s[i]);
    }
    r.compilerOptions && Fa() && x('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = qs(new Proxy(e.ctx, bi)), process.env.NODE_ENV !== "production" && Gc(e);
  const { setup: o } = r;
  if (o) {
    const s = e.setupContext = o.length > 1 ? Fi(e) : null;
    Lt(e), Ct();
    const i = Xe(o, e, 0, [process.env.NODE_ENV !== "production" ? $t(e.props) : e.props, s]);
    if (Rt(), Dt(), oo(i)) {
      if (i.then(Dt, Dt), t)
        return i.then((l) => {
          Go(e, l, t);
        }).catch((l) => {
          sr(
            l,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = r.name) !== null && n !== void 0 ? n : "Anonymous";
        x(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Go(e, i, t);
  } else
    Ii(e, t);
}
function Go(e, t, n) {
  B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) ? (process.env.NODE_ENV !== "production" && ar(t) && x("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ys(t), process.env.NODE_ENV !== "production" && Qc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && x(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Ii(e, n);
}
let qr;
const Fa = () => !qr;
function Ii(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && qr && !r.render) {
      const o = r.template || bo(e).template;
      if (o) {
        process.env.NODE_ENV !== "production" && Ke(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: c } = r, a = se(se({
          isCustomElement: s,
          delimiters: l
        }, i), c);
        r.render = qr(o, a), process.env.NODE_ENV !== "production" && qe(e, "compile");
      }
    }
    e.render = r.render || ae;
  }
  Lt(e), Ct(), ta(e), Rt(), Dt(), process.env.NODE_ENV !== "production" && !r.render && e.render === ae && !t && (r.template ? x(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : x("Component is missing template or render function."));
}
function Qo(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return Kn(), _e(e, "get", "$attrs"), t[n];
    },
    set() {
      return x("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return x("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return _e(e, "get", "$attrs"), t[n];
    }
  });
}
function Fi(e) {
  const t = (r) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && x("expose() should be called only once per setup()."), r != null)) {
      let o = typeof r;
      o === "object" && (I(r) ? o = "array" : ie(r) && (o = "ref")), o !== "object" && x(`expose() should be passed a plain object, received ${o}.`);
    }
    e.exposed = r || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Qo(e));
    },
    get slots() {
      return $t(e.slots);
    },
    get emit() {
      return (r, ...o) => e.emit(r, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = Qo(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ys(qs(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in xt)
          return xt[n](e);
      },
      has(t, n) {
        return n in t || n in xt;
      }
    }));
}
const $a = /(?:^|[-_])(\w)/g, Ma = (e) => e.replace($a, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function $i(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function fr(e, t, n = !1) {
  let r = $i(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    r = o(e.components || e.parent.type.components) || o(e.appContext.components);
  }
  return r ? Ma(r) : n ? "App" : "Anonymous";
}
function Mi(e) {
  return B(e) && "__vccOpts" in e;
}
const Jr = (e, t) => oc(e, t, dn);
function ja() {
  return Ua().attrs;
}
function Ua() {
  const e = Sa();
  return process.env.NODE_ENV !== "production" && !e && x("useContext() called without active instance."), e.setupContext || (e.setupContext = Fi(e));
}
const Ba = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), La = () => {
  {
    const e = Pn(Ba);
    return e || process.env.NODE_ENV !== "production" && x("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function wr(e) {
  return !!(e && e.__v_isShallow);
}
function ka() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, o = {
    header(f) {
      return Y(f) ? f.__isVue ? ["div", e, "VueInstance"] : ie(f) ? [
        "div",
        {},
        ["span", e, d(f)],
        "<",
        l(f.value),
        ">"
      ] : wt(f) ? [
        "div",
        {},
        ["span", e, wr(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${ct(f) ? " (readonly)" : ""}`
      ] : ct(f) ? [
        "div",
        {},
        ["span", e, wr(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...s(f.$)
        ];
    }
  };
  function s(f) {
    const g = [];
    f.type.props && f.props && g.push(i("props", H(f.props))), f.setupState !== te && g.push(i("setup", f.setupState)), f.data !== te && g.push(i("data", H(f.data)));
    const v = c(f, "computed");
    v && g.push(i("computed", v));
    const h = c(f, "inject");
    return h && g.push(i("injected", h)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), g;
  }
  function i(f, g) {
    return g = se({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((v) => [
          "div",
          {},
          ["span", r, v + ": "],
          l(g[v], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, g = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", r, f] : Y(f) ? ["object", { object: g ? H(f) : f }] : ["span", n, String(f)];
  }
  function c(f, g) {
    const v = f.type;
    if (B(v))
      return;
    const h = {};
    for (const y in f.ctx)
      a(v, y, g) && (h[y] = f.ctx[y]);
    return h;
  }
  function a(f, g, v) {
    const h = f[v];
    if (I(h) && h.includes(g) || Y(h) && g in h || f.extends && a(f.extends, g, v) || f.mixins && f.mixins.some((y) => a(y, g, v)))
      return !0;
  }
  function d(f) {
    return wr(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const es = "3.2.47", Ha = "http://www.w3.org/2000/svg", yt = typeof document < "u" ? document : null, ts = yt && /* @__PURE__ */ yt.createElement("template"), za = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t ? yt.createElementNS(Ha, e) : yt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => yt.createTextNode(e),
  createComment: (e) => yt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => yt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      ts.innerHTML = r ? `<svg>${e}</svg>` : e;
      const l = ts.content;
      if (r) {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Wa(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Ka(e, t, n) {
  const r = e.style, o = ne(n);
  if (n && !o) {
    if (t && !ne(t))
      for (const s in t)
        n[s] == null && Xr(r, s, "");
    for (const s in n)
      Xr(r, s, n[s]);
  } else {
    const s = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = s);
  }
}
const qa = /[^\\];\s*$/, ns = /\s*!important$/;
function Xr(e, t, n) {
  if (I(n))
    n.forEach((r) => Xr(e, t, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && qa.test(n) && x(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Ja(e, t);
    ns.test(n) ? e.setProperty(it(r), n.replace(ns, ""), "important") : e[r] = n;
  }
}
const rs = ["Webkit", "Moz", "ms"], Nr = {};
function Ja(e, t) {
  const n = Nr[t];
  if (n)
    return n;
  let r = Bt(t);
  if (r !== "filter" && r in e)
    return Nr[t] = r;
  r = er(r);
  for (let o = 0; o < rs.length; o++) {
    const s = rs[o] + r;
    if (s in e)
      return Nr[t] = s;
  }
  return t;
}
const os = "http://www.w3.org/1999/xlink";
function Xa(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(os, t.slice(6, t.length)) : e.setAttributeNS(os, t, n);
  else {
    const s = gl(t);
    n == null || s && !Ts(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function Ya(e, t, n, r, o, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, o, s), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const c = n ?? "";
    (e.value !== c || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = c), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Ts(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    process.env.NODE_ENV !== "production" && !l && x(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, c);
  }
  l && e.removeAttribute(t);
}
function Za(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Ga(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function Qa(e, t, n, r, o = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (r && i)
    i.value = r;
  else {
    const [l, c] = eu(t);
    if (r) {
      const a = s[t] = ru(r, o);
      Za(e, l, a, c);
    } else
      i && (Ga(e, l, i, c), s[t] = void 0);
  }
}
const ss = /(?:Once|Passive|Capture)$/;
function eu(e) {
  let t;
  if (ss.test(e)) {
    t = {};
    let r;
    for (; r = e.match(ss); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : it(e.slice(2)), t];
}
let Or = 0;
const tu = /* @__PURE__ */ Promise.resolve(), nu = () => Or || (tu.then(() => Or = 0), Or = Date.now());
function ru(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    $e(ou(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = nu(), n;
}
function ou(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (o) => !o._stopped && r && r(o));
  } else
    return t;
}
const is = /^on[a-z]/, su = (e, t, n, r, o = !1, s, i, l, c) => {
  t === "class" ? Wa(e, r, o) : t === "style" ? Ka(e, n, r) : hn(t) ? kn(t) || Qa(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : iu(e, t, r, o)) ? Ya(e, t, r, s, i, l, c) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Xa(e, t, r, o));
};
function iu(e, t, n, r) {
  return r ? !!(t === "innerHTML" || t === "textContent" || t in e && is.test(t) && B(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || is.test(t) && ne(n) ? !1 : t in e;
}
const lu = /* @__PURE__ */ se({ patchProp: su }, za);
let ls;
function cu() {
  return ls || (ls = _a(lu));
}
const au = (...e) => {
  const t = cu().createApp(...e);
  process.env.NODE_ENV !== "production" && (uu(t), fu(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = du(r);
    if (!o)
      return;
    const s = t._component;
    !B(s) && !s.render && !s.template && (s.template = o.innerHTML), o.innerHTML = "";
    const i = n(o, !1, o instanceof SVGElement);
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function uu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => pl(t) || hl(t),
    writable: !1
  });
}
function fu(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        x("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return x(r), n;
      },
      set() {
        x(r);
      }
    });
  }
}
function du(e) {
  if (ne(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && x(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && x('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function pu() {
  ka();
}
process.env.NODE_ENV !== "production" && pu();
const hu = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yMCAxNFYxNy41QzIwIDIwLjU1NzcgMTYgMjAuNSAxMiAyMC41QzggMjAuNSA0IDIwLjU1NzcgNCAxNy41VjE0TTEyIDE1TDEyIDNNMTIgMTVMOCAxMU0xMiAxNUwxNiAxMSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4=";
function ji(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: mu } = Object.prototype, { getPrototypeOf: wo } = Object, dr = ((e) => (t) => {
  const n = mu.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), He = (e) => (e = e.toLowerCase(), (t) => dr(t) === e), pr = (e) => (t) => typeof t === e, { isArray: Ht } = Array, pn = pr("undefined");
function gu(e) {
  return e !== null && !pn(e) && e.constructor !== null && !pn(e.constructor) && Se(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ui = He("ArrayBuffer");
function Eu(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ui(e.buffer), t;
}
const bu = pr("string"), Se = pr("function"), Bi = pr("number"), hr = (e) => e !== null && typeof e == "object", yu = (e) => e === !0 || e === !1, jn = (e) => {
  if (dr(e) !== "object")
    return !1;
  const t = wo(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, _u = He("Date"), vu = He("File"), wu = He("Blob"), Nu = He("FileList"), Ou = (e) => hr(e) && Se(e.pipe), xu = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Se(e.append) && ((t = dr(e)) === "formdata" || // detect form-data instance
  t === "object" && Se(e.toString) && e.toString() === "[object FormData]"));
}, Du = He("URLSearchParams"), Tu = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function En(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Ht(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let l;
    for (r = 0; r < i; r++)
      l = s[r], t.call(null, e[l], l, e);
  }
}
function Li(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const ki = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Hi = (e) => !pn(e) && e !== ki;
function Yr() {
  const { caseless: e } = Hi(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && Li(t, o) || o;
    jn(t[s]) && jn(r) ? t[s] = Yr(t[s], r) : jn(r) ? t[s] = Yr({}, r) : Ht(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && En(arguments[r], n);
  return t;
}
const Cu = (e, t, n, { allOwnKeys: r } = {}) => (En(t, (o, s) => {
  n && Se(o) ? e[s] = ji(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), Ru = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Au = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Su = (e, t, n, r) => {
  let o, s, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && wo(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Vu = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Pu = (e) => {
  if (!e)
    return null;
  if (Ht(e))
    return e;
  let t = e.length;
  if (!Bi(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Iu = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && wo(Uint8Array)), Fu = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, $u = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Mu = He("HTMLFormElement"), ju = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), cs = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Uu = He("RegExp"), zi = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  En(n, (o, s) => {
    t(o, s, e) !== !1 && (r[s] = o);
  }), Object.defineProperties(e, r);
}, Bu = (e) => {
  zi(e, (t, n) => {
    if (Se(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Se(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Lu = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Ht(e) ? r(e) : r(String(e).split(t)), n;
}, ku = () => {
}, Hu = (e, t) => (e = +e, Number.isFinite(e) ? e : t), xr = "abcdefghijklmnopqrstuvwxyz", as = "0123456789", Wi = {
  DIGIT: as,
  ALPHA: xr,
  ALPHA_DIGIT: xr + xr.toUpperCase() + as
}, zu = (e = 16, t = Wi.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Wu(e) {
  return !!(e && Se(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ku = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (hr(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = Ht(r) ? [] : {};
        return En(r, (i, l) => {
          const c = n(i, o + 1);
          !pn(c) && (s[l] = c);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, qu = He("AsyncFunction"), Ju = (e) => e && (hr(e) || Se(e)) && Se(e.then) && Se(e.catch), E = {
  isArray: Ht,
  isArrayBuffer: Ui,
  isBuffer: gu,
  isFormData: xu,
  isArrayBufferView: Eu,
  isString: bu,
  isNumber: Bi,
  isBoolean: yu,
  isObject: hr,
  isPlainObject: jn,
  isUndefined: pn,
  isDate: _u,
  isFile: vu,
  isBlob: wu,
  isRegExp: Uu,
  isFunction: Se,
  isStream: Ou,
  isURLSearchParams: Du,
  isTypedArray: Iu,
  isFileList: Nu,
  forEach: En,
  merge: Yr,
  extend: Cu,
  trim: Tu,
  stripBOM: Ru,
  inherits: Au,
  toFlatObject: Su,
  kindOf: dr,
  kindOfTest: He,
  endsWith: Vu,
  toArray: Pu,
  forEachEntry: Fu,
  matchAll: $u,
  isHTMLForm: Mu,
  hasOwnProperty: cs,
  hasOwnProp: cs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: zi,
  freezeMethods: Bu,
  toObjectSet: Lu,
  toCamelCase: ju,
  noop: ku,
  toFiniteNumber: Hu,
  findKey: Li,
  global: ki,
  isContextDefined: Hi,
  ALPHABET: Wi,
  generateString: zu,
  isSpecCompliantForm: Wu,
  toJSONObject: Ku,
  isAsyncFn: qu,
  isThenable: Ju
};
function q(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
E.inherits(q, Error, {
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
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Ki = q.prototype, qi = {};
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
  qi[e] = { value: e };
});
Object.defineProperties(q, qi);
Object.defineProperty(Ki, "isAxiosError", { value: !0 });
q.from = (e, t, n, r, o, s) => {
  const i = Object.create(Ki);
  return E.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (l) => l !== "isAxiosError"), q.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Xu = null;
function Zr(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Ji(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function us(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Ji(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Yu(e) {
  return E.isArray(e) && !e.some(Zr);
}
const Zu = E.toFlatObject(E, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function mr(e, t, n) {
  if (!E.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = E.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, C) {
    return !E.isUndefined(C[y]);
  });
  const r = n.metaTokens, o = n.visitor || d, s = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(t);
  if (!E.isFunction(o))
    throw new TypeError("visitor must be a function");
  function a(h) {
    if (h === null)
      return "";
    if (E.isDate(h))
      return h.toISOString();
    if (!c && E.isBlob(h))
      throw new q("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(h) || E.isTypedArray(h) ? c && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function d(h, y, C) {
    let P = h;
    if (h && !C && typeof h == "object") {
      if (E.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), h = JSON.stringify(h);
      else if (E.isArray(h) && Yu(h) || (E.isFileList(h) || E.endsWith(y, "[]")) && (P = E.toArray(h)))
        return y = Ji(y), P.forEach(function(j, k) {
          !(E.isUndefined(j) || j === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? us([y], k, s) : i === null ? y : y + "[]",
            a(j)
          );
        }), !1;
    }
    return Zr(h) ? !0 : (t.append(us(C, y, s), a(h)), !1);
  }
  const f = [], g = Object.assign(Zu, {
    defaultVisitor: d,
    convertValue: a,
    isVisitable: Zr
  });
  function v(h, y) {
    if (!E.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(h), E.forEach(h, function(P, F) {
        (!(E.isUndefined(P) || P === null) && o.call(
          t,
          P,
          E.isString(F) ? F.trim() : F,
          y,
          g
        )) === !0 && v(P, y ? y.concat(F) : [F]);
      }), f.pop();
    }
  }
  if (!E.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function fs(e) {
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
function No(e, t) {
  this._pairs = [], e && mr(e, this, t);
}
const Xi = No.prototype;
Xi.append = function(t, n) {
  this._pairs.push([t, n]);
};
Xi.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, fs);
  } : fs;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Gu(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Yi(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Gu, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = E.isURLSearchParams(t) ? t.toString() : new No(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Qu {
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
    E.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ds = Qu, Zi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ef = typeof URLSearchParams < "u" ? URLSearchParams : No, tf = typeof FormData < "u" ? FormData : null, nf = typeof Blob < "u" ? Blob : null, rf = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), of = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ke = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ef,
    FormData: tf,
    Blob: nf
  },
  isStandardBrowserEnv: rf,
  isStandardBrowserWebWorkerEnv: of,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function sf(e, t) {
  return mr(e, new ke.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return ke.isNode && E.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function lf(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function cf(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Gi(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    const l = Number.isFinite(+i), c = s >= n.length;
    return i = !i && E.isArray(o) ? o.length : i, c ? (E.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !l) : ((!o[i] || !E.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && E.isArray(o[i]) && (o[i] = cf(o[i])), !l);
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return E.forEachEntry(e, (r, o) => {
      t(lf(r), o, n, 0);
    }), n;
  }
  return null;
}
const af = {
  "Content-Type": void 0
};
function uf(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const gr = {
  transitional: Zi,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = E.isObject(t);
    if (s && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t))
      return o && o ? JSON.stringify(Gi(t)) : t;
    if (E.isArrayBuffer(t) || E.isBuffer(t) || E.isStream(t) || E.isFile(t) || E.isBlob(t))
      return t;
    if (E.isArrayBufferView(t))
      return t.buffer;
    if (E.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return sf(t, this.formSerializer).toString();
      if ((l = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return mr(
          l ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), uf(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || gr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && E.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? q.from(l, q.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: ke.classes.FormData,
    Blob: ke.classes.Blob
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
E.forEach(["delete", "get", "head"], function(t) {
  gr.headers[t] = {};
});
E.forEach(["post", "put", "patch"], function(t) {
  gr.headers[t] = E.merge(af);
});
const Oo = gr, ff = E.toObjectSet([
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
]), df = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && ff[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ps = Symbol("internals");
function Zt(e) {
  return e && String(e).trim().toLowerCase();
}
function Un(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(Un) : String(e);
}
function pf(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const hf = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Dr(e, t, n, r, o) {
  if (E.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!E.isString(t)) {
    if (E.isString(r))
      return t.indexOf(r) !== -1;
    if (E.isRegExp(r))
      return r.test(t);
  }
}
function mf(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function gf(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class Er {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(l, c, a) {
      const d = Zt(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = E.findKey(o, d);
      (!f || o[f] === void 0 || a === !0 || a === void 0 && o[f] !== !1) && (o[f || c] = Un(l));
    }
    const i = (l, c) => E.forEach(l, (a, d) => s(a, d, c));
    return E.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : E.isString(t) && (t = t.trim()) && !hf(t) ? i(df(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = Zt(t), t) {
      const r = E.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return pf(o);
        if (E.isFunction(n))
          return n.call(this, o, r);
        if (E.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Zt(t), t) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Dr(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = Zt(i), i) {
        const l = E.findKey(r, i);
        l && (!n || Dr(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return E.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Dr(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return E.forEach(this, (o, s) => {
      const i = E.findKey(r, s);
      if (i) {
        n[i] = Un(o), delete n[s];
        return;
      }
      const l = t ? mf(s) : String(s).trim();
      l !== s && delete n[s], n[l] = Un(o), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return E.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && E.isArray(r) ? r.join(", ") : r);
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
    const r = (this[ps] = this[ps] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const l = Zt(i);
      r[l] || (gf(o, i), r[l] = !0);
    }
    return E.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Er.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.freezeMethods(Er.prototype);
E.freezeMethods(Er);
const Ye = Er;
function Tr(e, t) {
  const n = this || Oo, r = t || n, o = Ye.from(r.headers);
  let s = r.data;
  return E.forEach(e, function(l) {
    s = l.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Qi(e) {
  return !!(e && e.__CANCEL__);
}
function bn(e, t, n) {
  q.call(this, e ?? "canceled", q.ERR_CANCELED, t, n), this.name = "CanceledError";
}
E.inherits(bn, q, {
  __CANCEL__: !0
});
function Ef(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new q(
    "Request failed with status code " + n.status,
    [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const bf = ke.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, s, i, l) {
        const c = [];
        c.push(n + "=" + encodeURIComponent(r)), E.isNumber(o) && c.push("expires=" + new Date(o).toGMTString()), E.isString(s) && c.push("path=" + s), E.isString(i) && c.push("domain=" + i), l === !0 && c.push("secure"), document.cookie = c.join("; ");
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
function yf(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function _f(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function el(e, t) {
  return e && !yf(t) ? _f(e, t) : t;
}
const vf = ke.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(s) {
      let i = s;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
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
    return r = o(window.location.href), function(i) {
      const l = E.isString(i) ? o(i) : i;
      return l.protocol === r.protocol && l.host === r.host;
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
function wf(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Nf(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const a = Date.now(), d = r[s];
    i || (i = a), n[o] = c, r[o] = a;
    let f = s, g = 0;
    for (; f !== o; )
      g += n[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), a - i < t)
      return;
    const v = d && a - d;
    return v ? Math.round(g * 1e3 / v) : void 0;
  };
}
function hs(e, t) {
  let n = 0;
  const r = Nf(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, l = s - n, c = r(l), a = s <= i;
    n = s;
    const d = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && i && a ? (i - s) / c : void 0,
      event: o
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const Of = typeof XMLHttpRequest < "u", xf = Of && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const s = Ye.from(e.headers).normalize(), i = e.responseType;
    let l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    E.isFormData(o) && (ke.isStandardBrowserEnv || ke.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.setContentType("multipart/form-data;", !1));
    let a = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(v + ":" + h));
    }
    const d = el(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), Yi(d, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function f() {
      if (!a)
        return;
      const v = Ye.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), y = {
        data: !i || i === "text" || i === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: v,
        config: e,
        request: a
      };
      Ef(function(P) {
        n(P), c();
      }, function(P) {
        r(P), c();
      }, y), a = null;
    }
    if ("onloadend" in a ? a.onloadend = f : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, a.onabort = function() {
      a && (r(new q("Request aborted", q.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      r(new q("Network Error", q.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || Zi;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new q(
        h,
        y.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
        e,
        a
      )), a = null;
    }, ke.isStandardBrowserEnv) {
      const v = (e.withCredentials || vf(d)) && e.xsrfCookieName && bf.read(e.xsrfCookieName);
      v && s.set(e.xsrfHeaderName, v);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in a && E.forEach(s.toJSON(), function(h, y) {
      a.setRequestHeader(y, h);
    }), E.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), i && i !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", hs(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", hs(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (v) => {
      a && (r(!v || v.type ? new bn(null, e, a) : v), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const g = wf(d);
    if (g && ke.protocols.indexOf(g) === -1) {
      r(new q("Unsupported protocol " + g + ":", q.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(o || null);
  });
}, Bn = {
  http: Xu,
  xhr: xf
};
E.forEach(Bn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Df = {
  getAdapter: (e) => {
    e = E.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && (n = e[o], !(r = E.isString(n) ? Bn[n.toLowerCase()] : n)); o++)
      ;
    if (!r)
      throw r === !1 ? new q(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        E.hasOwnProp(Bn, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!E.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Bn
};
function Cr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new bn(null, e);
}
function ms(e) {
  return Cr(e), e.headers = Ye.from(e.headers), e.data = Tr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Df.getAdapter(e.adapter || Oo.adapter)(e).then(function(r) {
    return Cr(e), r.data = Tr.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ye.from(r.headers), r;
  }, function(r) {
    return Qi(r) || (Cr(e), r && r.response && (r.response.data = Tr.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ye.from(r.response.headers))), Promise.reject(r);
  });
}
const gs = (e) => e instanceof Ye ? e.toJSON() : e;
function kt(e, t) {
  t = t || {};
  const n = {};
  function r(a, d, f) {
    return E.isPlainObject(a) && E.isPlainObject(d) ? E.merge.call({ caseless: f }, a, d) : E.isPlainObject(d) ? E.merge({}, d) : E.isArray(d) ? d.slice() : d;
  }
  function o(a, d, f) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(a))
        return r(void 0, a, f);
    } else
      return r(a, d, f);
  }
  function s(a, d) {
    if (!E.isUndefined(d))
      return r(void 0, d);
  }
  function i(a, d) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(a))
        return r(void 0, a);
    } else
      return r(void 0, d);
  }
  function l(a, d, f) {
    if (f in t)
      return r(a, d);
    if (f in e)
      return r(void 0, a);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (a, d) => o(gs(a), gs(d), !0)
  };
  return E.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const f = c[d] || o, g = f(e[d], t[d], d);
    E.isUndefined(g) && f !== l || (n[d] = g);
  }), n;
}
const tl = "1.4.0", xo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  xo[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Es = {};
xo.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + tl + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, l) => {
    if (t === !1)
      throw new q(
        o(i, " has been removed" + (n ? " in " + n : "")),
        q.ERR_DEPRECATED
      );
    return n && !Es[i] && (Es[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, l) : !0;
  };
};
function Tf(e, t, n) {
  if (typeof e != "object")
    throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const l = e[s], c = l === void 0 || i(l, s, e);
      if (c !== !0)
        throw new q("option " + s + " must be " + c, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new q("Unknown option " + s, q.ERR_BAD_OPTION);
  }
}
const Gr = {
  assertOptions: Tf,
  validators: xo
}, tt = Gr.validators;
class Xn {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ds(),
      response: new ds()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = kt(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && Gr.assertOptions(r, {
      silentJSONParsing: tt.transitional(tt.boolean),
      forcedJSONParsing: tt.transitional(tt.boolean),
      clarifyTimeoutError: tt.transitional(tt.boolean)
    }, !1), o != null && (E.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Gr.assertOptions(o, {
      encode: tt.function,
      serialize: tt.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = s && E.merge(
      s.common,
      s[n.method]
    ), i && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), n.headers = Ye.concat(i, s);
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (c = c && y.synchronous, l.unshift(y.fulfilled, y.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function(y) {
      a.push(y.fulfilled, y.rejected);
    });
    let d, f = 0, g;
    if (!c) {
      const h = [ms.bind(this), void 0];
      for (h.unshift.apply(h, l), h.push.apply(h, a), g = h.length, d = Promise.resolve(n); f < g; )
        d = d.then(h[f++], h[f++]);
      return d;
    }
    g = l.length;
    let v = n;
    for (f = 0; f < g; ) {
      const h = l[f++], y = l[f++];
      try {
        v = h(v);
      } catch (C) {
        y.call(this, C);
        break;
      }
    }
    try {
      d = ms.call(this, v);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, g = a.length; f < g; )
      d = d.then(a[f++], a[f++]);
    return d;
  }
  getUri(t) {
    t = kt(this.defaults, t);
    const n = el(t.baseURL, t.url);
    return Yi(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function(t) {
  Xn.prototype[t] = function(n, r) {
    return this.request(kt(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, l) {
      return this.request(kt(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Xn.prototype[t] = n(), Xn.prototype[t + "Form"] = n(!0);
});
const Ln = Xn;
class Do {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((l) => {
        r.subscribe(l), s = l;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, l) {
      r.reason || (r.reason = new bn(s, i, l), n(r.reason));
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
      token: new Do(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Cf = Do;
function Rf(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Af(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const Qr = {
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
Object.entries(Qr).forEach(([e, t]) => {
  Qr[t] = e;
});
const Sf = Qr;
function nl(e) {
  const t = new Ln(e), n = ji(Ln.prototype.request, t);
  return E.extend(n, Ln.prototype, t, { allOwnKeys: !0 }), E.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return nl(kt(e, o));
  }, n;
}
const le = nl(Oo);
le.Axios = Ln;
le.CanceledError = bn;
le.CancelToken = Cf;
le.isCancel = Qi;
le.VERSION = tl;
le.toFormData = mr;
le.AxiosError = q;
le.Cancel = le.CanceledError;
le.all = function(t) {
  return Promise.all(t);
};
le.spread = Rf;
le.isAxiosError = Af;
le.mergeConfig = kt;
le.AxiosHeaders = Ye;
le.formToJSON = (e) => Gi(E.isHTMLForm(e) ? new FormData(e) : e);
le.HttpStatusCode = Sf;
le.default = le;
const Vf = le, Pf = () => {
  const e = ["jpg", "png", "jpeg", "webp", "svg"], t = ["xlsx", "xlsm", "xlsb", "xltx", "csv"], n = ["mp4", "mov", "mkv", "flv", "avi", "webm"], r = ["docm", "docx", "dot", "dotx"], o = ["txt", "text"], s = ["pdf", "ps"], i = /* @__PURE__ */ new Map();
  i.set("excel", t), i.set("image", e), i.set("pdf", s), i.set("text", o), i.set("video", n), i.set("word", r);
  const l = (y) => new Promise((C, P) => {
    const F = new FileReader();
    F.readAsDataURL(y), F.onload = () => {
      C(F.result);
    }, F.onerror = (j) => P(j);
  }), c = (y = "") => {
    const C = y.split(".").pop();
    return C && typeof C == "string" ? C : "";
  }, a = (y, C) => {
    var P;
    return (P = i.get(C)) == null ? void 0 : P.includes(y);
  }, d = (y) => {
    const C = y.split("_")[1];
    return C || y;
  }, f = (y) => `${(+y / 1e6).toFixed(2)}MB`;
  function g(y) {
    let C = "image";
    return i.forEach((P, F) => {
      a(y, F) && (C = F);
    }), C;
  }
  function v(y) {
    const C = document.createElement("input");
    C.type = "file", C.style.display = "none", document.body.appendChild(C), C.addEventListener("change", (P) => {
      const F = P.target.files[0];
      l(F).then((j) => {
        y({
          file: F,
          base64: j
        });
      });
    }), C.click();
  }
  async function h(y, C = { responseType: "blob" }) {
    Vf.get(y, { ...C }).then(({ data: P }) => {
      const F = window.URL.createObjectURL(new Blob([P]));
      console.log(F);
      const j = document.createElement("a");
      j.href = F, j.setAttribute("download", F), document.body.appendChild(j), j.click(), j.remove();
    });
  }
  return {
    toBase64: l,
    getFileSize: f,
    getFileName: d,
    getFileExt: c,
    getFileType: g,
    openFileWindow: v,
    EXCEL_EXTENTIONS: t,
    IMAGE_EXTENTIONS: e,
    PDF_EXTENTIONS: s,
    VIDEO_EXTENTIONS: n,
    WORD_EXTENTIONS: r,
    downloadFile: h
    // getFileUrl,
  };
};
/*!
 * Compressor.js v1.2.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-02-28T14:09:41.732Z
 */
function bs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Tn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bs(Object(n), !0).forEach(function(r) {
      $f(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function If(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ys(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, rl(r.key), r);
  }
}
function Ff(e, t, n) {
  return t && ys(e.prototype, t), n && ys(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function $f(e, t, n) {
  return t = rl(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Yn() {
  return Yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Yn.apply(this, arguments);
}
function Mf(e, t) {
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
function rl(e) {
  var t = Mf(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var ol = { exports: {} };
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
    }(), s = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || t.MSBlobBuilder, i = /^data:((.*?)(;charset=.*?)?)(;base64)?,/, l = (r || s) && t.atob && t.ArrayBuffer && t.Uint8Array && function(c) {
      var a, d, f, g, v, h, y, C, P;
      if (a = c.match(i), !a)
        throw new Error("invalid data URI");
      for (d = a[2] ? a[1] : "text/plain" + (a[3] || ";charset=US-ASCII"), f = !!a[4], g = c.slice(a[0].length), f ? v = atob(g) : v = decodeURIComponent(g), h = new ArrayBuffer(v.length), y = new Uint8Array(h), C = 0; C < v.length; C += 1)
        y[C] = v.charCodeAt(C);
      return r ? new Blob([o ? y : h], {
        type: d
      }) : (P = new s(), P.append(h), P.getBlob(d));
    };
    t.HTMLCanvasElement && !n.toBlob && (n.mozGetAsFile ? n.toBlob = function(c, a, d) {
      var f = this;
      setTimeout(function() {
        d && n.toDataURL && l ? c(l(f.toDataURL(a, d))) : c(f.mozGetAsFile("blob", a));
      });
    } : n.toDataURL && l && (n.msToBlob ? n.toBlob = function(c, a, d) {
      var f = this;
      setTimeout(function() {
        (a && a !== "image/png" || d) && n.toDataURL && l ? c(l(f.toDataURL(a, d))) : c(f.msToBlob(a));
      });
    } : n.toBlob = function(c, a, d) {
      var f = this;
      setTimeout(function() {
        c(l(f.toDataURL(a, d)));
      });
    })), e.exports ? e.exports = l : t.dataURLtoBlob = l;
  }(window);
})(ol);
var _s = ol.exports, jf = function(t) {
  return typeof Blob > "u" ? !1 : t instanceof Blob || Object.prototype.toString.call(t) === "[object Blob]";
}, vs = {
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
}, Uf = typeof window < "u" && typeof window.document < "u", ut = Uf ? window : {}, Zn = function(t) {
  return t > 0 && t < 1 / 0;
}, Bf = Array.prototype.slice;
function To(e) {
  return Array.from ? Array.from(e) : Bf.call(e);
}
var Lf = /^image\/.+$/;
function eo(e) {
  return Lf.test(e);
}
function kf(e) {
  var t = eo(e) ? e.substr(6) : "";
  return t === "jpeg" && (t = "jpg"), ".".concat(t);
}
var sl = String.fromCharCode;
function Hf(e, t, n) {
  var r = "", o;
  for (n += t, o = t; o < n; o += 1)
    r += sl(e.getUint8(o));
  return r;
}
var zf = ut.btoa;
function ws(e, t) {
  for (var n = [], r = 8192, o = new Uint8Array(e); o.length > 0; )
    n.push(sl.apply(null, To(o.subarray(0, r)))), o = o.subarray(r);
  return "data:".concat(t, ";base64,").concat(zf(n.join("")));
}
function Wf(e) {
  var t = new DataView(e), n;
  try {
    var r, o, s;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var i = t.byteLength, l = 2; l + 1 < i; ) {
        if (t.getUint8(l) === 255 && t.getUint8(l + 1) === 225) {
          o = l;
          break;
        }
        l += 1;
      }
    if (o) {
      var c = o + 4, a = o + 10;
      if (Hf(t, c, 4) === "Exif") {
        var d = t.getUint16(a);
        if (r = d === 18761, (r || d === 19789) && t.getUint16(a + 2, r) === 42) {
          var f = t.getUint32(a + 4, r);
          f >= 8 && (s = a + f);
        }
      }
    }
    if (s) {
      var g = t.getUint16(s, r), v, h;
      for (h = 0; h < g; h += 1)
        if (v = s + h * 12 + 2, t.getUint16(v, r) === 274) {
          v += 8, n = t.getUint16(v, r), t.setUint16(v, 1, r);
          break;
        }
    }
  } catch {
    n = 1;
  }
  return n;
}
function Kf(e) {
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
var qf = /\.\d*(?:0|9){12}\d*$/;
function Ns(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return qf.test(e) ? Math.round(e * t) / t : e;
}
function Gt(e) {
  var t = e.aspectRatio, n = e.height, r = e.width, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none", s = Zn(r), i = Zn(n);
  if (s && i) {
    var l = n * t;
    (o === "contain" || o === "none") && l > r || o === "cover" && l < r ? n = r / t : r = n * t;
  } else
    s ? n = r / t : i && (r = n * t);
  return {
    width: r,
    height: n
  };
}
function Jf(e) {
  for (var t = To(new Uint8Array(e)), n = t.length, r = [], o = 0; o + 3 < n; ) {
    var s = t[o], i = t[o + 1];
    if (s === 255 && i === 218)
      break;
    if (s === 255 && i === 216)
      o += 2;
    else {
      var l = t[o + 2] * 256 + t[o + 3], c = o + l + 2, a = t.slice(o, c);
      r.push(a), o = c;
    }
  }
  return r.reduce(function(d, f) {
    return f[0] === 255 && f[1] === 225 ? d.concat(f) : d;
  }, []);
}
function Xf(e, t) {
  var n = To(new Uint8Array(e));
  if (n[2] !== 255 || n[3] !== 224)
    return e;
  var r = n[4] * 256 + n[5], o = [255, 216].concat(t, n.slice(4 + r));
  return new Uint8Array(o);
}
var Yf = ut.ArrayBuffer, Rr = ut.FileReader, gt = ut.URL || ut.webkitURL, Zf = /\.\w+$/, Gf = ut.Compressor, Qf = /* @__PURE__ */ function() {
  function e(t, n) {
    If(this, e), this.file = t, this.exif = [], this.image = new Image(), this.options = Tn(Tn({}, vs), n), this.aborted = !1, this.result = null, this.init();
  }
  return Ff(e, [{
    key: "init",
    value: function() {
      var n = this, r = this.file, o = this.options;
      if (!jf(r)) {
        this.fail(new Error("The first argument must be a File or Blob object."));
        return;
      }
      var s = r.type;
      if (!eo(s)) {
        this.fail(new Error("The first argument must be an image File or Blob object."));
        return;
      }
      if (!gt || !Rr) {
        this.fail(new Error("The current browser does not support image compression."));
        return;
      }
      Yf || (o.checkOrientation = !1, o.retainExif = !1);
      var i = s === "image/jpeg", l = i && o.checkOrientation, c = i && o.retainExif;
      if (gt && !l && !c)
        this.load({
          url: gt.createObjectURL(r)
        });
      else {
        var a = new Rr();
        this.reader = a, a.onload = function(d) {
          var f = d.target, g = f.result, v = {}, h = 1;
          l && (h = Wf(g), h > 1 && Yn(v, Kf(h))), c && (n.exif = Jf(g)), l || c ? !gt || h > 1 ? v.url = ws(g, s) : v.url = gt.createObjectURL(r) : v.url = g, n.load(v);
        }, a.onabort = function() {
          n.fail(new Error("Aborted to read the image with FileReader."));
        }, a.onerror = function() {
          n.fail(new Error("Failed to read the image with FileReader."));
        }, a.onloadend = function() {
          n.reader = null;
        }, l || c ? a.readAsArrayBuffer(r) : a.readAsDataURL(r);
      }
    }
  }, {
    key: "load",
    value: function(n) {
      var r = this, o = this.file, s = this.image;
      s.onload = function() {
        r.draw(Tn(Tn({}, n), {}, {
          naturalWidth: s.naturalWidth,
          naturalHeight: s.naturalHeight
        }));
      }, s.onabort = function() {
        r.fail(new Error("Aborted to load the image."));
      }, s.onerror = function() {
        r.fail(new Error("Failed to load the image."));
      }, ut.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(ut.navigator.userAgent) && (s.crossOrigin = "anonymous"), s.alt = o.name, s.src = n.url;
    }
  }, {
    key: "draw",
    value: function(n) {
      var r = this, o = n.naturalWidth, s = n.naturalHeight, i = n.rotate, l = i === void 0 ? 0 : i, c = n.scaleX, a = c === void 0 ? 1 : c, d = n.scaleY, f = d === void 0 ? 1 : d, g = this.file, v = this.image, h = this.options, y = document.createElement("canvas"), C = y.getContext("2d"), P = Math.abs(l) % 180 === 90, F = (h.resize === "contain" || h.resize === "cover") && Zn(h.width) && Zn(h.height), j = Math.max(h.maxWidth, 0) || 1 / 0, k = Math.max(h.maxHeight, 0) || 1 / 0, Z = Math.max(h.minWidth, 0) || 0, fe = Math.max(h.minHeight, 0) || 0, de = o / s, G = h.width, J = h.height;
      if (P) {
        var ve = [k, j];
        j = ve[0], k = ve[1];
        var De = [fe, Z];
        Z = De[0], fe = De[1];
        var pe = [J, G];
        G = pe[0], J = pe[1];
      }
      F && (de = G / J);
      var ze = Gt({
        aspectRatio: de,
        width: j,
        height: k
      }, "contain");
      j = ze.width, k = ze.height;
      var U = Gt({
        aspectRatio: de,
        width: Z,
        height: fe
      }, "cover");
      if (Z = U.width, fe = U.height, F) {
        var K = Gt({
          aspectRatio: de,
          width: G,
          height: J
        }, h.resize);
        G = K.width, J = K.height;
      } else {
        var M = Gt({
          aspectRatio: de,
          width: G,
          height: J
        }), V = M.width;
        G = V === void 0 ? o : V;
        var $ = M.height;
        J = $ === void 0 ? s : $;
      }
      G = Math.floor(Ns(Math.min(Math.max(G, Z), j))), J = Math.floor(Ns(Math.min(Math.max(J, fe), k)));
      var Re = -G / 2, zt = -J / 2, dt = G, Qe = J, Ae = [];
      if (F) {
        var At = 0, yn = 0, Wt = o, Te = s, pt = Gt({
          aspectRatio: de,
          width: o,
          height: s
        }, {
          contain: "cover",
          cover: "contain"
        }[h.resize]);
        Wt = pt.width, Te = pt.height, At = (o - Wt) / 2, yn = (s - Te) / 2, Ae.push(At, yn, Wt, Te);
      }
      if (Ae.push(Re, zt, dt, Qe), P) {
        var Kt = [J, G];
        G = Kt[0], J = Kt[1];
      }
      y.width = G, y.height = J, eo(h.mimeType) || (h.mimeType = g.type);
      var We = "transparent";
      g.size > h.convertSize && h.convertTypes.indexOf(h.mimeType) >= 0 && (h.mimeType = "image/jpeg");
      var St = h.mimeType === "image/jpeg";
      if (St && (We = "#fff"), C.fillStyle = We, C.fillRect(0, 0, G, J), h.beforeDraw && h.beforeDraw.call(this, C, y), !this.aborted && (C.save(), C.translate(G / 2, J / 2), C.rotate(l * Math.PI / 180), C.scale(a, f), C.drawImage.apply(C, [v].concat(Ae)), C.restore(), h.drew && h.drew.call(this, C, y), !this.aborted)) {
        var Vt = function(p) {
          if (!r.aborted) {
            var m = function(T) {
              return r.done({
                naturalWidth: o,
                naturalHeight: s,
                result: T
              });
            };
            if (p && St && h.retainExif && r.exif && r.exif.length > 0) {
              var _ = function(T) {
                return m(_s(ws(Xf(T, r.exif), h.mimeType)));
              };
              if (p.arrayBuffer)
                p.arrayBuffer().then(_).catch(function() {
                  r.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."));
                });
              else {
                var b = new Rr();
                r.reader = b, b.onload = function(N) {
                  var T = N.target;
                  _(T.result);
                }, b.onabort = function() {
                  r.fail(new Error("Aborted to read the compressed image with FileReader."));
                }, b.onerror = function() {
                  r.fail(new Error("Failed to read the compressed image with FileReader."));
                }, b.onloadend = function() {
                  r.reader = null;
                }, b.readAsArrayBuffer(p);
              }
            } else
              m(p);
          }
        };
        y.toBlob ? y.toBlob(Vt, h.mimeType, h.quality) : Vt(_s(y.toDataURL(h.mimeType, h.quality)));
      }
    }
  }, {
    key: "done",
    value: function(n) {
      var r = n.naturalWidth, o = n.naturalHeight, s = n.result, i = this.file, l = this.image, c = this.options;
      if (gt && l.src.indexOf("blob:") === 0 && gt.revokeObjectURL(l.src), s)
        if (c.strict && !c.retainExif && s.size > i.size && c.mimeType === i.type && !(c.width > r || c.height > o || c.minWidth > r || c.minHeight > o || c.maxWidth < r || c.maxHeight < o))
          s = i;
        else {
          var a = /* @__PURE__ */ new Date();
          s.lastModified = a.getTime(), s.lastModifiedDate = a, s.name = i.name, s.name && s.type !== i.type && (s.name = s.name.replace(Zf, kf(s.type)));
        }
      else
        s = i;
      this.result = s, c.success && c.success.call(this, s);
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
      return window.Compressor = Gf, e;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(n) {
      Yn(vs, n);
    }
  }]), e;
}();
let Cn;
const ed = new Uint8Array(16);
function td() {
  if (!Cn && (Cn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Cn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Cn(ed);
}
const ce = [];
for (let e = 0; e < 256; ++e)
  ce.push((e + 256).toString(16).slice(1));
function nd(e, t = 0) {
  return (ce[e[t + 0]] + ce[e[t + 1]] + ce[e[t + 2]] + ce[e[t + 3]] + "-" + ce[e[t + 4]] + ce[e[t + 5]] + "-" + ce[e[t + 6]] + ce[e[t + 7]] + "-" + ce[e[t + 8]] + ce[e[t + 9]] + "-" + ce[e[t + 10]] + ce[e[t + 11]] + ce[e[t + 12]] + ce[e[t + 13]] + ce[e[t + 14]] + ce[e[t + 15]]).toLowerCase();
}
const rd = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Os = {
  randomUUID: rd
};
function od(e, t, n) {
  if (Os.randomUUID && !t && !e)
    return Os.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || td)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return nd(r);
}
const br = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, sd = {}, id = {
  width: "800px",
  height: "800px",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ld = /* @__PURE__ */ ee("path", {
  d: "M9 17V11L7 13",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), cd = /* @__PURE__ */ ee("path", {
  d: "M9 11L11 13",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), ad = /* @__PURE__ */ ee("path", {
  d: "M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), ud = /* @__PURE__ */ ee("path", {
  d: "M22 10H18C15 10 14 9 14 6V2L22 10Z",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), fd = [
  ld,
  cd,
  ad,
  ud
];
function dd(e, t) {
  return he(), Ne("svg", id, fd);
}
const pd = /* @__PURE__ */ br(sd, [["render", dd]]), hd = {}, md = {
  width: "40px",
  height: "40px",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, gd = /* @__PURE__ */ ee("path", {
  d: "M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125",
  stroke: "#fff",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Ed = /* @__PURE__ */ ee("path", {
  d: "M15 16L17.5 18.5M20 21L17.5 18.5M17.5 18.5L20 16M17.5 18.5L15 21",
  stroke: "#fff",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), bd = [
  gd,
  Ed
];
function yd(e, t) {
  return he(), Ne("svg", md, bd);
}
const xs = /* @__PURE__ */ br(hd, [["render", yd]]), _d = {}, vd = {
  fill: "#ffffff",
  width: "25",
  height: "25",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, wd = /* @__PURE__ */ ee("path", { d: "M3,20V12a1,1,0,0,1,2,0v5.585L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L6.414,19H12a1,1,0,0,1,0,2H4A1,1,0,0,1,3,20Z" }, null, -1), Nd = [
  wd
];
function Od(e, t) {
  return he(), Ne("svg", vd, Nd);
}
const Ds = /* @__PURE__ */ br(_d, [["render", Od]]), xd = { class: "ez-uploader" }, Dd = /* @__PURE__ */ ee("span", { class: "placeholder" }, " Click Or Drop File Here ", -1), Td = ["src"], Cd = { class: "preview-item-overlay" }, Rd = { class: "action-btns" }, Ad = ["id", "onClick"], Sd = ["id", "onClick"], Vd = /* @__PURE__ */ ee("img", {
  height: "30",
  src: hu
}, null, -1), Pd = ["href", "id"], Id = ["src"], Fd = { class: "preview-item-overlay" }, $d = {
  key: 0,
  class: "info"
}, Md = { style: { "font-weight": "bold" } }, jd = { class: "action-btns" }, Ud = ["id", "onClick"], Bd = ["href", "id"], Ld = ["accept", "id"], il = /* @__PURE__ */ pi({
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
    const r = e, { getFileExt: o, getFileType: s, downloadFile: i } = Pf(), l = ja(), c = Je(null), a = Date.now() * (Math.random() * 1e4), d = Je([]), f = Je([]), g = Je([]), v = Jr(() => z(l, "multiple")), h = Jr(() => r.modelValue);
    function y() {
      c.value && c.value.click();
    }
    function C(U) {
      return new Promise((K, M) => {
        new Qf(U, {
          quality: r.quality,
          success(V) {
            K(
              new File([V], U.name, {
                lastModified: (/* @__PURE__ */ new Date()).getTime(),
                type: V.type
              })
            );
          },
          error(V) {
            M(V);
          }
        });
      });
    }
    function P() {
      d.value = [], f.value = [];
    }
    function F() {
      n("validationError", null);
    }
    const j = (U) => U / 1e6;
    async function k(U) {
      return console.log(r.maxSize, j(U.size)), r.maxSize && r.maxSize >= j(U.size) ? (F(), Promise.resolve()) : Promise.reject({
        fileName: U.name,
        errorType: "maxSizeError",
        message: `The file (${U.name}) size is larger than the allowed size  (${r.maxSize} mb)`
      });
    }
    function Z(U, K) {
      U.stopImmediatePropagation(), d.value = d.value.filter((M) => (M.id === K && URL.revokeObjectURL(M.url), M.id !== K)), de();
    }
    async function fe(U) {
      if (r.maxCount && U.length > r.maxCount) {
        n("validationError", {
          errorType: "maxCount",
          message: `You Can't Upload More Than (${r.maxCount}) files`
        });
        return;
      }
      for (let K of U)
        k(K).then(async () => {
          const M = s(o(K.name));
          if (M === "image")
            try {
              K = await C(K);
            } catch (V) {
              console.error(V);
            }
          v.value || (d.value = [], f.value = []), d.value.push({
            file: K,
            id: od(),
            type: M,
            url: URL.createObjectURL(K)
          });
        }).catch((M) => {
          n("validationError", M);
        });
      de();
    }
    function de() {
      v.value ? (n(
        "update:modelValue",
        d.value.map(({ file: U }) => U)
      ), n(
        "update:url",
        d.value.map(({ url: U }) => U)
      )) : (n(
        "update:modelValue",
        d.value.length ? d.value[0].file : null
      ), n("update:url", d.value.length ? d.value[0].url : ""));
    }
    function G(U) {
      const K = U.target.files;
      fe(K);
    }
    function J(U) {
      U.preventDefault();
      const K = U.dataTransfer.files;
      fe(K);
    }
    function ve(U) {
      U.preventDefault();
    }
    function De(U, K) {
      U.stopImmediatePropagation(), g.value.push(K), f.value = f.value.filter((M) => M !== K), n("update:deletedUrls", g.value);
    }
    function pe() {
      r.url && (console.log("url", r.url), typeof r.url == "string" ? f.value.push(r.url) : Array.isArray(r.url) && (f.value = [...f.value, ...r.url]));
    }
    function ze(U) {
      return new URL(U, import.meta.url).href;
    }
    return In(
      h,
      (U) => {
        (U === null || I(U) && U.length === 0) && P();
      },
      { deep: !0 }
    ), t({
      reset: P,
      resetValidation: F
    }), pe(), (U, K) => (he(), Ne("div", xd, [
      ee("div", {
        class: "ez-uploader-label",
        onClick: y,
        onDrop: J,
        onDragover: ve
      }, [
        Dn(U.$slots, "default", {}, () => [
          Dd,
          ge(pd, {
            class: "upload-icon",
            width: "45",
            height: "45"
          })
        ]),
        ee("div", {
          class: Ce(["ez-uploader-preview", [{ multi: $r(v) }, e.previwerContainerClass]])
        }, [
          (he(!0), Ne(Oe, null, Ho(f.value, (M, V) => (he(), Ne("div", {
            key: V,
            class: Ce(["ez-uploader-preview-item", e.previwerItemClass])
          }, [
            ee("img", {
              src: M,
              class: Ce([e.previewImageClass, "preview-img"])
            }, null, 10, Td),
            ee("div", Cd, [
              ee("div", Rd, [
                ee("button", {
                  id: `delete-btn-${V}`,
                  class: Ce(["action-btn", e.deleteBtnClass]),
                  onClick: ($) => De($, M)
                }, [
                  Dn(U.$slots, "delete-btn", {}, () => [
                    ge(xs, { height: "30" })
                  ])
                ], 10, Ad),
                e.downloadBtn ? (he(), Ne("button", {
                  key: 0,
                  id: `delete-btn-${V}`,
                  class: Ce([e.deleteBtnClass, "action-btn"]),
                  onClick: ($) => {
                    $.stopImmediatePropagation(), $r(i)(M);
                  }
                }, [
                  Dn(U.$slots, "delete-btn", {}, () => [
                    Vd
                  ])
                ], 10, Sd)) : tn("", !0),
                e.openBtn ? (he(), Ne("a", {
                  key: 1,
                  target: "_blank",
                  href: M,
                  id: `delete-btn-${V}`,
                  onClick: K[0] || (K[0] = ($) => $.stopImmediatePropagation()),
                  class: Ce([e.deleteBtnClass, "action-btn"])
                }, [
                  ge(Ds, { height: "20" })
                ], 10, Pd)) : tn("", !0)
              ])
            ])
          ], 2))), 128)),
          (he(!0), Ne(Oe, null, Ho(d.value, (M, V) => (he(), Ne("div", {
            key: M.id,
            class: Ce(["ez-uploader-preview-item", e.previwerItemClass])
          }, [
            ee("img", {
              class: Ce(["preview-img", e.previewImageClass]),
              src: M.type === "image" ? M.url : ze(`./assets/icons/${M.type}.png`)
            }, null, 10, Id),
            ee("div", Fd, [
              M.file ? (he(), Ne("div", $d, [
                Dn(U.$slots, "info-overlay", {}, () => [
                  ee("h6", Md, Rn(M.file.name), 1),
                  ee("span", null, "Type : " + Rn(M.type), 1),
                  ee("span", null, "Size : " + Rn((M.file.size / 1e6).toFixed(2)) + "mb", 1)
                ])
              ])) : tn("", !0),
              ee("div", jd, [
                ee("button", {
                  id: `delete-btn-${V}`,
                  class: Ce([e.deleteBtnClass, "action-btn"]),
                  onClick: ($) => Z($, M.id)
                }, [
                  ge(xs, {
                    height: "30",
                    src: "@/assets/delete-file.svg?url"
                  })
                ], 10, Ud),
                e.openBtn ? (he(), Ne("a", {
                  key: 0,
                  target: "_blank",
                  href: M.url,
                  id: `delete-btn-${V}`,
                  class: Ce([e.deleteBtnClass, "action-btn"]),
                  onClick: K[1] || (K[1] = ($) => $.stopImmediatePropagation())
                }, [
                  ge(Ds, {
                    height: "20",
                    src: "@/assets/expand.svg?url"
                  })
                ], 10, Bd)) : tn("", !0)
              ])
            ])
          ], 2))), 128))
        ], 2)
      ], 32),
      ee("input", Vi({
        accept: e.accept,
        id: `file-uploader-${a}`,
        ref_key: "fileInput",
        ref: c
      }, U.$attrs, {
        type: "file",
        hidden: "",
        onChange: G
      }), null, 16, Ld)
    ]));
  }
});
const kd = { class: "form" }, Hd = {
  key: 0,
  style: { "font-size": "small", "font-family": "sans-serif", color: "red" }
}, zd = /* @__PURE__ */ pi({
  __name: "App",
  setup(e) {
    Je([
      "https://www.planetsport.com/image-library/square/1200/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg"
    ]), Je(
      "https://www.planetsport.com/image-library/square/1200/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg"
    );
    const t = Je([]);
    Je();
    const n = Je(""), r = (o) => {
      o ? (console.log("error", o), n.value = o.message) : n.value = "";
    };
    return (o, s) => (he(), Ne("div", null, [
      ee("div", kd, [
        ge(il, {
          maxCount: 3,
          maxSize: 1,
          onValidationError: r,
          multiple: "",
          modelValue: t.value,
          "onUpdate:modelValue": s[0] || (s[0] = (i) => t.value = i)
        }, null, 8, ["modelValue"]),
        ee("div", null, [
          n.value ? (he(), Ne("p", Hd, Rn(n.value), 1)) : tn("", !0)
        ])
      ])
    ]));
  }
});
const Wd = /* @__PURE__ */ br(zd, [["__scopeId", "data-v-49562235"]]);
au(Wd).mount("#app");
const Kd = {
  install: (e, t) => {
    e.component("ez-uploader", il);
  }
};
export {
  il as EzUploader,
  Kd as default
};
