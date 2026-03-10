"use client";
import * as Oe from "./react-shim.mjs";
import N, { Component as pc, createElement as Or, createContext as Eo, useRef as Oi, useEffect as ks, useCallback as To, useContext as yc, useState as Mi } from "./react-shim.mjs";
import { initReactI18next as Ec, useTranslation as Tc } from "react-i18next";
import Sc from "i18next-browser-languagedetector";
import bs from "i18next";
import { Navigation as vc, A11y as xc } from "swiper";
import { Swiper as Ac, SwiperSlide as Ic } from "swiper/react";
import "./react-dom-shim.mjs";
import { jsx as ws } from "react/jsx-runtime";
import { upgrade as Lc } from "@iiif/parser/upgrader";
const Fi = {
  isLoaded: !1,
  options: {
    credentials: "omit"
  }
}, So = N.createContext(Fi), bc = N.createContext(Fi);
function Rc(r, e) {
  switch (e.type) {
    case "updateIsLoaded":
      return {
        ...r,
        isLoaded: e.isLoaded
      };
    default:
      throw new Error(`Unhandled action type: ${e.type}`);
  }
}
const _c = ({
  initialState: r = Fi,
  children: e
}) => {
  const [t, s] = N.useReducer(Rc, r);
  return /* @__PURE__ */ N.createElement(So.Provider, { value: t }, /* @__PURE__ */ N.createElement(
    bc.Provider,
    {
      value: s
    },
    e
  ));
};
function Dc() {
  const r = N.useContext(So);
  if (r === void 0)
    throw new Error(
      "useCollectionState must be used within a CollectionProvider"
    );
  return r;
}
const Cc = Eo(null), Yi = {
  didCatch: !1,
  error: null
};
class Pc extends pc {
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Yi;
  }
  static getDerivedStateFromError(e) {
    return {
      didCatch: !0,
      error: e
    };
  }
  resetErrorBoundary() {
    const {
      error: e
    } = this.state;
    if (e !== null) {
      for (var t, s, i = arguments.length, n = new Array(i), a = 0; a < i; a++)
        n[a] = arguments[a];
      (t = (s = this.props).onReset) === null || t === void 0 || t.call(s, {
        args: n,
        reason: "imperative-api"
      }), this.setState(Yi);
    }
  }
  componentDidCatch(e, t) {
    var s, i;
    (s = (i = this.props).onError) === null || s === void 0 || s.call(i, e, t);
  }
  componentDidUpdate(e, t) {
    const {
      didCatch: s
    } = this.state, {
      resetKeys: i
    } = this.props;
    if (s && t.error !== null && kc(e.resetKeys, i)) {
      var n, a;
      (n = (a = this.props).onReset) === null || n === void 0 || n.call(a, {
        next: i,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(Yi);
    }
  }
  render() {
    const {
      children: e,
      fallbackRender: t,
      FallbackComponent: s,
      fallback: i
    } = this.props, {
      didCatch: n,
      error: a
    } = this.state;
    let o = e;
    if (n) {
      const c = {
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof t == "function")
        o = t(c);
      else if (s)
        o = Or(s, c);
      else if (i !== void 0)
        o = i;
      else
        throw a;
    }
    return Or(Cc.Provider, {
      value: {
        didCatch: n,
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, o);
  }
}
function kc() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return r.length !== e.length || r.some((t, s) => !Object.is(t, e[s]));
}
var he = "colors", Fe = "sizes", Y = "space", wc = { gap: Y, gridGap: Y, columnGap: Y, gridColumnGap: Y, rowGap: Y, gridRowGap: Y, inset: Y, insetBlock: Y, insetBlockEnd: Y, insetBlockStart: Y, insetInline: Y, insetInlineEnd: Y, insetInlineStart: Y, margin: Y, marginTop: Y, marginRight: Y, marginBottom: Y, marginLeft: Y, marginBlock: Y, marginBlockEnd: Y, marginBlockStart: Y, marginInline: Y, marginInlineEnd: Y, marginInlineStart: Y, padding: Y, paddingTop: Y, paddingRight: Y, paddingBottom: Y, paddingLeft: Y, paddingBlock: Y, paddingBlockEnd: Y, paddingBlockStart: Y, paddingInline: Y, paddingInlineEnd: Y, paddingInlineStart: Y, top: Y, right: Y, bottom: Y, left: Y, scrollMargin: Y, scrollMarginTop: Y, scrollMarginRight: Y, scrollMarginBottom: Y, scrollMarginLeft: Y, scrollMarginX: Y, scrollMarginY: Y, scrollMarginBlock: Y, scrollMarginBlockEnd: Y, scrollMarginBlockStart: Y, scrollMarginInline: Y, scrollMarginInlineEnd: Y, scrollMarginInlineStart: Y, scrollPadding: Y, scrollPaddingTop: Y, scrollPaddingRight: Y, scrollPaddingBottom: Y, scrollPaddingLeft: Y, scrollPaddingX: Y, scrollPaddingY: Y, scrollPaddingBlock: Y, scrollPaddingBlockEnd: Y, scrollPaddingBlockStart: Y, scrollPaddingInline: Y, scrollPaddingInlineEnd: Y, scrollPaddingInlineStart: Y, fontSize: "fontSizes", background: he, backgroundColor: he, backgroundImage: he, borderImage: he, border: he, borderBlock: he, borderBlockEnd: he, borderBlockStart: he, borderBottom: he, borderBottomColor: he, borderColor: he, borderInline: he, borderInlineEnd: he, borderInlineStart: he, borderLeft: he, borderLeftColor: he, borderRight: he, borderRightColor: he, borderTop: he, borderTopColor: he, caretColor: he, color: he, columnRuleColor: he, fill: he, outline: he, outlineColor: he, stroke: he, textDecorationColor: he, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: Fe, minBlockSize: Fe, maxBlockSize: Fe, inlineSize: Fe, minInlineSize: Fe, maxInlineSize: Fe, width: Fe, minWidth: Fe, maxWidth: Fe, height: Fe, minHeight: Fe, maxHeight: Fe, flexBasis: Fe, gridTemplateColumns: Fe, gridTemplateRows: Fe, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, Oc = (r, e) => typeof e == "function" ? { "()": Function.prototype.toString.call(e) } : e, ds = () => {
  const r = /* @__PURE__ */ Object.create(null);
  return (e, t, ...s) => {
    const i = ((n) => JSON.stringify(n, Oc))(e);
    return i in r ? r[i] : r[i] = t(e, ...s);
  };
}, Ht = Symbol.for("sxs.internal"), qn = (r, e) => Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)), Mr = (r) => {
  for (const e in r) return !0;
  return !1;
}, { hasOwnProperty: Mc } = Object.prototype, bn = (r) => r.includes("-") ? r : r.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()), Fc = /\s+(?![^()]*\))/, Zt = (r) => (e) => r(...typeof e == "string" ? String(e).split(Fc) : [e]), Fr = { appearance: (r) => ({ WebkitAppearance: r, appearance: r }), backfaceVisibility: (r) => ({ WebkitBackfaceVisibility: r, backfaceVisibility: r }), backdropFilter: (r) => ({ WebkitBackdropFilter: r, backdropFilter: r }), backgroundClip: (r) => ({ WebkitBackgroundClip: r, backgroundClip: r }), boxDecorationBreak: (r) => ({ WebkitBoxDecorationBreak: r, boxDecorationBreak: r }), clipPath: (r) => ({ WebkitClipPath: r, clipPath: r }), content: (r) => ({ content: r.includes('"') || r.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(r) ? r : `"${r}"` }), hyphens: (r) => ({ WebkitHyphens: r, hyphens: r }), maskImage: (r) => ({ WebkitMaskImage: r, maskImage: r }), maskSize: (r) => ({ WebkitMaskSize: r, maskSize: r }), tabSize: (r) => ({ MozTabSize: r, tabSize: r }), textSizeAdjust: (r) => ({ WebkitTextSizeAdjust: r, textSizeAdjust: r }), userSelect: (r) => ({ WebkitUserSelect: r, userSelect: r }), marginBlock: Zt((r, e) => ({ marginBlockStart: r, marginBlockEnd: e || r })), marginInline: Zt((r, e) => ({ marginInlineStart: r, marginInlineEnd: e || r })), maxSize: Zt((r, e) => ({ maxBlockSize: r, maxInlineSize: e || r })), minSize: Zt((r, e) => ({ minBlockSize: r, minInlineSize: e || r })), paddingBlock: Zt((r, e) => ({ paddingBlockStart: r, paddingBlockEnd: e || r })), paddingInline: Zt((r, e) => ({ paddingInlineStart: r, paddingInlineEnd: e || r })) }, ji = /([\d.]+)([^]*)/, Nc = (r, e) => r.length ? r.reduce((t, s) => (t.push(...e.map((i) => i.includes("&") ? i.replace(/&/g, /[ +>|~]/.test(s) && /&.*&/.test(i) ? `:is(${s})` : s) : s + " " + i)), t), []) : e, $c = (r, e) => r in Bc && typeof e == "string" ? e.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, s, i, n) => s + (i === "stretch" ? `-moz-available${n};${bn(r)}:${s}-webkit-fill-available` : `-moz-fit-content${n};${bn(r)}:${s}fit-content`) + n) : String(e), Bc = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, Dt = (r) => r ? r + "-" : "", vo = (r, e, t) => r.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (s, i, n, a, o) => a == "$" == !!n ? s : (i || a == "--" ? "calc(" : "") + "var(--" + (a === "$" ? Dt(e) + (o.includes("$") ? "" : Dt(t)) + o.replace(/\$/g, "-") : o) + ")" + (i || a == "--" ? "*" + (i || "") + (n || "1") + ")" : "")), Uc = /\s*,\s*(?![^()]*\))/, Gc = Object.prototype.toString, ns = (r, e, t, s, i) => {
  let n, a, o;
  const c = (l, u, h) => {
    let d, f;
    const g = (p) => {
      for (d in p) {
        const T = d.charCodeAt(0) === 64, S = T && Array.isArray(p[d]) ? p[d] : [p[d]];
        for (f of S) {
          const v = /[A-Z]/.test(E = d) ? E : E.replace(/-[^]/g, (C) => C[1].toUpperCase()), x = typeof f == "object" && f && f.toString === Gc && (!s.utils[v] || !u.length);
          if (v in s.utils && !x) {
            const C = s.utils[v];
            if (C !== a) {
              a = C, g(C(f)), a = null;
              continue;
            }
          } else if (v in Fr) {
            const C = Fr[v];
            if (C !== o) {
              o = C, g(C(f)), o = null;
              continue;
            }
          }
          if (T && (y = d.slice(1) in s.media ? "@media " + s.media[d.slice(1)] : d, d = y.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (C, A, R, b, L, P) => {
            const M = ji.test(A), U = 0.0625 * (M ? -1 : 1), [H, K] = M ? [b, A] : [A, b];
            return "(" + (R[0] === "=" ? "" : R[0] === ">" === M ? "max-" : "min-") + H + ":" + (R[0] !== "=" && R.length === 1 ? K.replace(ji, (F, V, B) => Number(V) + U * (R === ">" ? 1 : -1) + B) : K) + (L ? ") and (" + (L[0] === ">" ? "min-" : "max-") + H + ":" + (L.length === 1 ? P.replace(ji, (F, V, B) => Number(V) + U * (L === ">" ? -1 : 1) + B) : P) : "") + ")";
          })), x) {
            const C = T ? h.concat(d) : [...h], A = T ? [...u] : Nc(u, d.split(Uc));
            n !== void 0 && i(Nr(...n)), n = void 0, c(f, A, C);
          } else n === void 0 && (n = [[], u, h]), d = T || d.charCodeAt(0) !== 36 ? d : `--${Dt(s.prefix)}${d.slice(1).replace(/\$/g, "-")}`, f = x ? f : typeof f == "number" ? f && v in Kc ? String(f) + "px" : String(f) : vo($c(v, f ?? ""), s.prefix, s.themeMap[v]), n[0].push(`${T ? `${d} ` : `${bn(d)}:`}${f}`);
        }
      }
      var y, E;
    };
    g(l), n !== void 0 && i(Nr(...n)), n = void 0;
  };
  c(r, e, t);
}, Nr = (r, e, t) => `${t.map((s) => `${s}{`).join("")}${e.length ? `${e.join(",")}{` : ""}${r.join(";")}${e.length ? "}" : ""}${Array(t.length ? t.length + 1 : 0).join("}")}`, Kc = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, $r = (r) => String.fromCharCode(r + (r > 25 ? 39 : 97)), Wt = (r) => ((e) => {
  let t, s = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) s = $r(t % 52) + s;
  return $r(t % 52) + s;
})(((e, t) => {
  let s = t.length;
  for (; s; ) e = 33 * e ^ t.charCodeAt(--s);
  return e;
})(5381, JSON.stringify(r)) >>> 0), Rs = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Vc = (r) => {
  if (r.href && !r.href.startsWith(location.origin)) return !1;
  try {
    return !!r.cssRules;
  } catch {
    return !1;
  }
}, Hc = (r) => {
  let e;
  const t = () => {
    const { cssRules: i } = e.sheet;
    return [].map.call(i, (n, a) => {
      const { cssText: o } = n;
      let c = "";
      if (o.startsWith("--sxs")) return "";
      if (i[a - 1] && (c = i[a - 1].cssText).startsWith("--sxs")) {
        if (!n.cssRules.length) return "";
        for (const l in e.rules) if (e.rules[l].group === n) return `--sxs{--sxs:${[...e.rules[l].cache].join(" ")}}${o}`;
        return n.cssRules.length ? `${c}${o}` : "";
      }
      return o;
    }).join("");
  }, s = () => {
    if (e) {
      const { rules: o, sheet: c } = e;
      if (!c.deleteRule) {
        for (; Object(Object(c.cssRules)[0]).type === 3; ) c.cssRules.splice(0, 1);
        c.cssRules = [];
      }
      for (const l in o) delete o[l];
    }
    const i = Object(r).styleSheets || [];
    for (const o of i) if (Vc(o)) {
      for (let c = 0, l = o.cssRules; l[c]; ++c) {
        const u = Object(l[c]);
        if (u.type !== 1) continue;
        const h = Object(l[c + 1]);
        if (h.type !== 4) continue;
        ++c;
        const { cssText: d } = u;
        if (!d.startsWith("--sxs")) continue;
        const f = d.slice(14, -3).trim().split(/\s+/), g = Rs[f[0]];
        g && (e || (e = { sheet: o, reset: s, rules: {}, toString: t }), e.rules[g] = { group: h, index: c, cache: new Set(f) });
      }
      if (e) break;
    }
    if (!e) {
      const o = (c, l) => ({ type: l, cssRules: [], insertRule(u, h) {
        this.cssRules.splice(h, 0, o(u, { import: 3, undefined: 1 }[(u.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return c === "@media{}" ? `@media{${[].map.call(this.cssRules, (u) => u.cssText).join("")}}` : c;
      } });
      e = { sheet: r ? (r.head || r).appendChild(document.createElement("style")).sheet : o("", "text/css"), rules: {}, reset: s, toString: t };
    }
    const { sheet: n, rules: a } = e;
    for (let o = Rs.length - 1; o >= 0; --o) {
      const c = Rs[o];
      if (!a[c]) {
        const l = Rs[o + 1], u = a[l] ? a[l].index : n.cssRules.length;
        n.insertRule("@media{}", u), n.insertRule(`--sxs{--sxs:${o}}`, u), a[c] = { group: n.cssRules[u + 1], index: u, cache: /* @__PURE__ */ new Set([o]) };
      }
      Wc(a[c]);
    }
  };
  return s(), e;
}, Wc = (r) => {
  const e = r.group;
  let t = e.cssRules.length;
  r.apply = (s) => {
    try {
      e.insertRule(s, t), ++t;
    } catch {
    }
  };
}, Es = Symbol(), Yc = ds(), Br = (r, e) => Yc(r, () => (...t) => {
  let s = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const i of t) if (i != null) if (i[Ht]) {
    s.type == null && (s.type = i[Ht].type);
    for (const n of i[Ht].composers) s.composers.add(n);
  } else i.constructor !== Object || i.$$typeof ? s.type == null && (s.type = i) : s.composers.add(jc(i, r));
  return s.type == null && (s.type = "span"), s.composers.size || s.composers.add(["PJLV", {}, [], [], {}, []]), zc(r, s, e);
}), jc = ({ variants: r, compoundVariants: e, defaultVariants: t, ...s }, i) => {
  const n = `${Dt(i.prefix)}c-${Wt(s)}`, a = [], o = [], c = /* @__PURE__ */ Object.create(null), l = [];
  for (const d in t) c[d] = String(t[d]);
  if (typeof r == "object" && r) for (const d in r) {
    u = c, h = d, Mc.call(u, h) || (c[d] = "undefined");
    const f = r[d];
    for (const g in f) {
      const p = { [d]: String(g) };
      String(g) === "undefined" && l.push(d);
      const y = f[g], E = [p, y, !Mr(y)];
      a.push(E);
    }
  }
  var u, h;
  if (typeof e == "object" && e) for (const d of e) {
    let { css: f, ...g } = d;
    f = typeof f == "object" && f || {};
    for (const y in g) g[y] = String(g[y]);
    const p = [g, f, !Mr(f)];
    o.push(p);
  }
  return [n, s, a, o, c, l];
}, zc = (r, e, t) => {
  const [s, i, n, a] = qc(e.composers), o = typeof e.type == "function" || e.type.$$typeof ? ((h) => {
    function d() {
      for (let f = 0; f < d[Es].length; f++) {
        const [g, p] = d[Es][f];
        h.rules[g].apply(p);
      }
      return d[Es] = [], null;
    }
    return d[Es] = [], d.rules = {}, Rs.forEach((f) => d.rules[f] = { apply: (g) => d[Es].push([f, g]) }), d;
  })(t) : null, c = (o || t).rules, l = `.${s}${i.length > 1 ? `:where(.${i.slice(1).join(".")})` : ""}`, u = (h) => {
    h = typeof h == "object" && h || Xc;
    const { css: d, ...f } = h, g = {};
    for (const E in n) if (delete f[E], E in h) {
      let T = h[E];
      typeof T == "object" && T ? g[E] = { "@initial": n[E], ...T } : (T = String(T), g[E] = T !== "undefined" || a.has(E) ? T : n[E]);
    } else g[E] = n[E];
    const p = /* @__PURE__ */ new Set([...i]);
    for (const [E, T, S, v] of e.composers) {
      t.rules.styled.cache.has(E) || (t.rules.styled.cache.add(E), ns(T, [`.${E}`], [], r, (A) => {
        c.styled.apply(A);
      }));
      const x = Ur(S, g, r.media), C = Ur(v, g, r.media, !0);
      for (const A of x) if (A !== void 0) for (const [R, b, L] of A) {
        const P = `${E}-${Wt(b)}-${R}`;
        p.add(P);
        const M = (L ? t.rules.resonevar : t.rules.onevar).cache, U = L ? c.resonevar : c.onevar;
        M.has(P) || (M.add(P), ns(b, [`.${P}`], [], r, (H) => {
          U.apply(H);
        }));
      }
      for (const A of C) if (A !== void 0) for (const [R, b] of A) {
        const L = `${E}-${Wt(b)}-${R}`;
        p.add(L), t.rules.allvar.cache.has(L) || (t.rules.allvar.cache.add(L), ns(b, [`.${L}`], [], r, (P) => {
          c.allvar.apply(P);
        }));
      }
    }
    if (typeof d == "object" && d) {
      const E = `${s}-i${Wt(d)}-css`;
      p.add(E), t.rules.inline.cache.has(E) || (t.rules.inline.cache.add(E), ns(d, [`.${E}`], [], r, (T) => {
        c.inline.apply(T);
      }));
    }
    for (const E of String(h.className || "").trim().split(/\s+/)) E && p.add(E);
    const y = f.className = [...p].join(" ");
    return { type: e.type, className: y, selector: l, props: f, toString: () => y, deferredInjector: o };
  };
  return qn(u, { className: s, selector: l, [Ht]: e, toString: () => (t.rules.styled.cache.has(s) || u(), s) });
}, qc = (r) => {
  let e = "";
  const t = [], s = {}, i = [];
  for (const [n, , , , a, o] of r) {
    e === "" && (e = n), t.push(n), i.push(...o);
    for (const c in a) {
      const l = a[c];
      (s[c] === void 0 || l !== "undefined" || o.includes(l)) && (s[c] = l);
    }
  }
  return [e, t, s, new Set(i)];
}, Ur = (r, e, t, s) => {
  const i = [];
  e: for (let [n, a, o] of r) {
    if (o) continue;
    let c, l = 0, u = !1;
    for (c in n) {
      const h = n[c];
      let d = e[c];
      if (d !== h) {
        if (typeof d != "object" || !d) continue e;
        {
          let f, g, p = 0;
          for (const y in d) {
            if (h === String(d[y])) {
              if (y !== "@initial") {
                const E = y.slice(1);
                (g = g || []).push(E in t ? t[E] : y.replace(/^@media ?/, "")), u = !0;
              }
              l += p, f = !0;
            }
            ++p;
          }
          if (g && g.length && (a = { ["@media " + g.join(", ")]: a }), !f) continue e;
        }
      }
    }
    (i[l] = i[l] || []).push([s ? "cv" : `${c}-${n[c]}`, a, u]);
  }
  return i;
}, Xc = {}, Qc = ds(), Zc = (r, e) => Qc(r, () => (...t) => {
  const s = () => {
    for (let i of t) {
      i = typeof i == "object" && i || {};
      let n = Wt(i);
      if (!e.rules.global.cache.has(n)) {
        if (e.rules.global.cache.add(n), "@import" in i) {
          let a = [].indexOf.call(e.sheet.cssRules, e.rules.themed.group) - 1;
          for (let o of [].concat(i["@import"])) o = o.includes('"') || o.includes("'") ? o : `"${o}"`, e.sheet.insertRule(`@import ${o};`, a++);
          delete i["@import"];
        }
        ns(i, [], [], r, (a) => {
          e.rules.global.apply(a);
        });
      }
    }
    return "";
  };
  return qn(s, { toString: s });
}), Jc = ds(), eu = (r, e) => Jc(r, () => (t) => {
  const s = `${Dt(r.prefix)}k-${Wt(t)}`, i = () => {
    if (!e.rules.global.cache.has(s)) {
      e.rules.global.cache.add(s);
      const n = [];
      ns(t, [], [], r, (o) => n.push(o));
      const a = `@keyframes ${s}{${n.join("")}}`;
      e.rules.global.apply(a);
    }
    return s;
  };
  return qn(i, { get name() {
    return i();
  }, toString: i });
}), tu = class {
  constructor(r, e, t, s) {
    this.token = r == null ? "" : String(r), this.value = e == null ? "" : String(e), this.scale = t == null ? "" : String(t), this.prefix = s == null ? "" : String(s);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + Dt(this.prefix) + Dt(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, su = ds(), iu = (r, e) => su(r, () => (t, s) => {
  s = typeof t == "object" && t || Object(s);
  const i = `.${t = (t = typeof t == "string" ? t : "") || `${Dt(r.prefix)}t-${Wt(s)}`}`, n = {}, a = [];
  for (const c in s) {
    n[c] = {};
    for (const l in s[c]) {
      const u = `--${Dt(r.prefix)}${c}-${l}`, h = vo(String(s[c][l]), r.prefix, c);
      n[c][l] = new tu(l, h, c, r.prefix), a.push(`${u}:${h}`);
    }
  }
  const o = () => {
    if (a.length && !e.rules.themed.cache.has(t)) {
      e.rules.themed.cache.add(t);
      const c = `${s === r.theme ? ":root," : ""}.${t}{${a.join(";")}}`;
      e.rules.themed.apply(c);
    }
    return t;
  };
  return { ...n, get className() {
    return o();
  }, selector: i, toString: o };
}), nu = ds(), ru = ds(), au = (r) => {
  const e = ((t) => {
    let s = !1;
    const i = nu(t, (n) => {
      s = !0;
      const a = "prefix" in (n = typeof n == "object" && n || {}) ? String(n.prefix) : "", o = typeof n.media == "object" && n.media || {}, c = typeof n.root == "object" ? n.root || null : globalThis.document || null, l = typeof n.theme == "object" && n.theme || {}, u = { prefix: a, media: o, theme: l, themeMap: typeof n.themeMap == "object" && n.themeMap || { ...wc }, utils: typeof n.utils == "object" && n.utils || {} }, h = Hc(c), d = { css: Br(u, h), globalCss: Zc(u, h), keyframes: eu(u, h), createTheme: iu(u, h), reset() {
        h.reset(), d.theme.toString();
      }, theme: {}, sheet: h, config: u, prefix: a, getCssText: h.toString, toString: h.toString };
      return String(d.theme = d.createTheme(l)), d;
    });
    return s || i.reset(), i;
  })(r);
  return e.styled = (({ config: t, sheet: s }) => ru(t, () => {
    const i = Br(t, s);
    return (...n) => {
      const a = i(...n), o = a[Ht].type, c = N.forwardRef((l, u) => {
        const h = l && l.as || o, { props: d, deferredInjector: f } = a(l);
        return delete d.as, d.ref = u, f ? N.createElement(N.Fragment, null, N.createElement(h, d), N.createElement(f, null)) : N.createElement(h, d);
      });
      return c.className = a.className, c.displayName = `Styled.${o.displayName || o.name || o}`, c.selector = a.selector, c.toString = () => a.selector, c[Ht] = a[Ht], c;
    };
  }))(e), e;
};
const zi = 209, ou = {
  colors: {
    /*
     * Black and dark grays in a light theme.
     * Must contrast to 4.5 or greater with `secondary`.
     */
    primary: "#1a1d1e",
    primaryMuted: "#26292b",
    primaryAlt: "#151718",
    /*
     * Key brand color(s).
     * Must contrast to 4.5 or greater with `secondary`.
     */
    accent: `hsl(${zi} 100% 38.2%)`,
    accentMuted: `hsl(${zi} 80% 61.8%)`,
    accentAlt: `hsl(${zi} 80% 30%)`,
    /*
     * White and light grays in a light theme.
     * Must contrast to 4.5 or greater with `primary` and  `accent`.
     */
    secondary: "#FFFFFF",
    secondaryMuted: "#e6e8eb",
    secondaryAlt: "#c1c8cd"
  },
  fontSizes: {
    1: "12px",
    2: "13px",
    3: "15px",
    4: "17px",
    5: "19px",
    6: "21px",
    7: "27px",
    8: "35px",
    9: "59px"
  },
  lineHeights: {
    1: "12px",
    2: "13px",
    3: "15px",
    4: "17px",
    5: "19px",
    6: "21px",
    7: "27px",
    8: "35px",
    9: "59px"
  },
  sizes: {
    1: "5px",
    2: "10px",
    3: "15px",
    4: "20px",
    5: "25px",
    6: "35px",
    7: "45px",
    8: "65px",
    9: "80px"
  },
  space: {
    1: "5px",
    2: "10px",
    3: "15px",
    4: "20px",
    5: "25px",
    6: "35px",
    7: "45px",
    8: "65px",
    9: "80px"
  },
  radii: {
    1: "4px",
    2: "6px",
    3: "8px",
    4: "12px",
    round: "50%",
    pill: "9999px"
  },
  transitions: {
    all: "all 200ms cubic-bezier(0.16, 1, 0.3, 1)"
  },
  zIndices: {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    max: "999"
  }
}, lu = {
  xxs: "(max-width: 349px)",
  xs: "(max-width: 575px)",
  sm: "(max-width: 767px)",
  md: "(max-width: 991px)",
  lg: "(max-width: 90rem)",
  xl: "(min-width: calc(90rem + 1px))"
}, { styled: le, css: IT, keyframes: LT, createTheme: bT } = au({
  theme: ou,
  media: lu
}), cu = le("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}), uu = le("p", {
  fontWeight: "bold"
}), hu = le("span", {}), du = ({ error: r }) => {
  const { message: e } = r;
  return /* @__PURE__ */ N.createElement(cu, { role: "alert" }, /* @__PURE__ */ N.createElement(uu, { "data-testid": "headline" }, "Something went wrong"), e && /* @__PURE__ */ N.createElement(hu, null, `Error message: ${e}`, " "));
}, vi = le("div", {
  display: "flex",
  background: "none",
  border: "none",
  width: "2rem !important",
  height: "2rem !important",
  padding: "0",
  margin: "0",
  borderRadius: "2rem",
  backgroundColor: "$accent",
  color: "$secondary",
  cursor: "pointer",
  boxSizing: "content-box !important",
  transition: "$all",
  justifyContent: "center",
  alignItems: "center",
  svg: {
    height: "60%",
    width: "60%",
    fill: "$secondary",
    stroke: "$secondary",
    opacity: "1",
    filter: "drop-shadow(5px 5px 5px #000D)",
    transition: "$all"
  }
}), Gr = le("button", {
  zIndex: "1",
  border: "none",
  cursor: "pointer",
  background: "transparent",
  marginLeft: "$2",
  padding: "0",
  "&:disabled": {
    [`> ${vi}`]: {
      backgroundColor: "#6663",
      boxShadow: "none",
      svg: {
        fill: "$secondary",
        stroke: "$secondary",
        filter: "unset"
      }
    }
  },
  "&:hover:enabled": {
    [`> ${vi}`]: {
      backgroundColor: "$accentAlt",
      boxShadow: "3px 3px 11px #0003",
      "&:disabled": {
        boxShadow: "unset"
      }
    }
  }
}), fu = le("div", {
  display: "flex",
  flexDirection: "column"
}), gu = le("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingLeft: "$5",
  paddingRight: "$4",
  "@xs": {
    width: "100%",
    justifyContent: "center",
    padding: "$4 $1 0 0"
  }
}), mu = le("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: "$4",
  margin: "0",
  lineHeight: "1.4em",
  alignItems: "flex-end",
  "@xs": {
    flexDirection: "column"
  },
  ".clover-slider-header-homepage": {
    textDecoration: "none"
  },
  ".clover-slider-header-label": {
    fontSize: "1.25rem",
    fontWeight: "400"
  },
  ".clover-slider-header-summary": {
    fontSize: "$4",
    marginTop: "$2"
  }
}), pu = (r, e = "none") => {
  if (!r) return null;
  if (typeof r == "string") return [r];
  if (!r[e]) {
    const t = Object.getOwnPropertyNames(r);
    if (t.length > 0) return r[t[0]];
  }
  return !r[e] || !Array.isArray(r[e]) ? null : r[e];
}, Ni = (r, e = "none", t = ", ") => {
  const s = pu(r, e);
  return Array.isArray(s) ? s.join(`${t}`) : s;
};
/*! @license DOMPurify 3.3.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.2/LICENSE */
const {
  entries: xo,
  setPrototypeOf: Kr,
  isFrozen: yu,
  getPrototypeOf: Eu,
  getOwnPropertyDescriptor: Tu
} = Object;
let {
  freeze: Ue,
  seal: st,
  create: hi
} = Object, {
  apply: Rn,
  construct: _n
} = typeof Reflect < "u" && Reflect;
Ue || (Ue = function(e) {
  return e;
});
st || (st = function(e) {
  return e;
});
Rn || (Rn = function(e, t) {
  for (var s = arguments.length, i = new Array(s > 2 ? s - 2 : 0), n = 2; n < s; n++)
    i[n - 2] = arguments[n];
  return e.apply(t, i);
});
_n || (_n = function(e) {
  for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    s[i - 1] = arguments[i];
  return new e(...s);
});
const js = Ge(Array.prototype.forEach), Su = Ge(Array.prototype.lastIndexOf), Vr = Ge(Array.prototype.pop), Ts = Ge(Array.prototype.push), vu = Ge(Array.prototype.splice), di = Ge(String.prototype.toLowerCase), qi = Ge(String.prototype.toString), Xi = Ge(String.prototype.match), Ss = Ge(String.prototype.replace), xu = Ge(String.prototype.indexOf), Au = Ge(String.prototype.trim), ze = Ge(Object.prototype.hasOwnProperty), Ne = Ge(RegExp.prototype.test), vs = Iu(TypeError);
function Ge(r) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      s[i - 1] = arguments[i];
    return Rn(r, e, s);
  };
}
function Iu(r) {
  return function() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return _n(r, t);
  };
}
function ne(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : di;
  Kr && Kr(r, null);
  let s = e.length;
  for (; s--; ) {
    let i = e[s];
    if (typeof i == "string") {
      const n = t(i);
      n !== i && (yu(e) || (e[s] = n), i = n);
    }
    r[i] = !0;
  }
  return r;
}
function Lu(r) {
  for (let e = 0; e < r.length; e++)
    ze(r, e) || (r[e] = null);
  return r;
}
function ft(r) {
  const e = hi(null);
  for (const [t, s] of xo(r))
    ze(r, t) && (Array.isArray(s) ? e[t] = Lu(s) : s && typeof s == "object" && s.constructor === Object ? e[t] = ft(s) : e[t] = s);
  return e;
}
function xs(r, e) {
  for (; r !== null; ) {
    const s = Tu(r, e);
    if (s) {
      if (s.get)
        return Ge(s.get);
      if (typeof s.value == "function")
        return Ge(s.value);
    }
    r = Eu(r);
  }
  function t() {
    return null;
  }
  return t;
}
const Hr = Ue(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Qi = Ue(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Zi = Ue(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), bu = Ue(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ji = Ue(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ru = Ue(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Wr = Ue(["#text"]), Yr = Ue(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), en = Ue(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), jr = Ue(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), zs = Ue(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), _u = st(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Du = st(/<%[\w\W]*|[\w\W]*%>/gm), Cu = st(/\$\{[\w\W]*/gm), Pu = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), ku = st(/^aria-[\-\w]+$/), Ao = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), wu = st(/^(?:\w+script|data):/i), Ou = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Io = st(/^html$/i), Mu = st(/^[a-z][.\w]*(-[.\w]+)+$/i);
var zr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: ku,
  ATTR_WHITESPACE: Ou,
  CUSTOM_ELEMENT: Mu,
  DATA_ATTR: Pu,
  DOCTYPE_NAME: Io,
  ERB_EXPR: Du,
  IS_ALLOWED_URI: Ao,
  IS_SCRIPT_OR_DATA: wu,
  MUSTACHE_EXPR: _u,
  TMPLIT_EXPR: Cu
});
const As = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Fu = function() {
  return typeof window > "u" ? null : window;
}, Nu = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let s = null;
  const i = "data-tt-policy-suffix";
  t && t.hasAttribute(i) && (s = t.getAttribute(i));
  const n = "dompurify" + (s ? "#" + s : "");
  try {
    return e.createPolicy(n, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + n + " could not be created."), null;
  }
}, qr = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Lo() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fu();
  const e = (Z) => Lo(Z);
  if (e.version = "3.3.2", e.removed = [], !r || !r.document || r.document.nodeType !== As.document || !r.Element)
    return e.isSupported = !1, e;
  let {
    document: t
  } = r;
  const s = t, i = s.currentScript, {
    DocumentFragment: n,
    HTMLTemplateElement: a,
    Node: o,
    Element: c,
    NodeFilter: l,
    NamedNodeMap: u = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: h,
    DOMParser: d,
    trustedTypes: f
  } = r, g = c.prototype, p = xs(g, "cloneNode"), y = xs(g, "remove"), E = xs(g, "nextSibling"), T = xs(g, "childNodes"), S = xs(g, "parentNode");
  if (typeof a == "function") {
    const Z = t.createElement("template");
    Z.content && Z.content.ownerDocument && (t = Z.content.ownerDocument);
  }
  let v, x = "";
  const {
    implementation: C,
    createNodeIterator: A,
    createDocumentFragment: R,
    getElementsByTagName: b
  } = t, {
    importNode: L
  } = s;
  let P = qr();
  e.isSupported = typeof xo == "function" && typeof S == "function" && C && C.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: M,
    ERB_EXPR: U,
    TMPLIT_EXPR: H,
    DATA_ATTR: K,
    ARIA_ATTR: F,
    IS_SCRIPT_OR_DATA: V,
    ATTR_WHITESPACE: B,
    CUSTOM_ELEMENT: j
  } = zr;
  let {
    IS_ALLOWED_URI: J
  } = zr, w = null;
  const $ = ne({}, [...Hr, ...Qi, ...Zi, ...Ji, ...Wr]);
  let Q = null;
  const oe = ne({}, [...Yr, ...en, ...jr, ...zs]);
  let z = Object.seal(hi(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), se = null, Se = null;
  const me = Object.seal(hi(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let Me = !0, Ke = !0, ot = !1, Gs = !0, lt = !1, Ct = !0, Pt = !1, ae = !1, ve = !1, Ie = !1, Je = !1, ke = !1, St = !0, ct = !1;
  const Ks = "user-content-";
  let kt = !0, wt = !1, et = {}, Ye = null;
  const gs = ne({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ms = null;
  const ps = ne({}, ["audio", "video", "img", "source", "image", "track"]);
  let vt = null;
  const vr = ne({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Vs = "http://www.w3.org/1998/Math/MathML", Hs = "http://www.w3.org/2000/svg", xt = "http://www.w3.org/1999/xhtml";
  let qt = xt, Gi = !1, Ki = null;
  const cc = ne({}, [Vs, Hs, xt], qi);
  let Ws = ne({}, ["mi", "mo", "mn", "ms", "mtext"]), Ys = ne({}, ["annotation-xml"]);
  const uc = ne({}, ["title", "style", "font", "a", "script"]);
  let ys = null;
  const hc = ["application/xhtml+xml", "text/html"], dc = "text/html";
  let Le = null, Xt = null;
  const fc = t.createElement("form"), xr = function(I) {
    return I instanceof RegExp || I instanceof Function;
  }, Vi = function() {
    let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Xt && Xt === I)) {
      if ((!I || typeof I != "object") && (I = {}), I = ft(I), ys = // eslint-disable-next-line unicorn/prefer-includes
      hc.indexOf(I.PARSER_MEDIA_TYPE) === -1 ? dc : I.PARSER_MEDIA_TYPE, Le = ys === "application/xhtml+xml" ? qi : di, w = ze(I, "ALLOWED_TAGS") ? ne({}, I.ALLOWED_TAGS, Le) : $, Q = ze(I, "ALLOWED_ATTR") ? ne({}, I.ALLOWED_ATTR, Le) : oe, Ki = ze(I, "ALLOWED_NAMESPACES") ? ne({}, I.ALLOWED_NAMESPACES, qi) : cc, vt = ze(I, "ADD_URI_SAFE_ATTR") ? ne(ft(vr), I.ADD_URI_SAFE_ATTR, Le) : vr, ms = ze(I, "ADD_DATA_URI_TAGS") ? ne(ft(ps), I.ADD_DATA_URI_TAGS, Le) : ps, Ye = ze(I, "FORBID_CONTENTS") ? ne({}, I.FORBID_CONTENTS, Le) : gs, se = ze(I, "FORBID_TAGS") ? ne({}, I.FORBID_TAGS, Le) : ft({}), Se = ze(I, "FORBID_ATTR") ? ne({}, I.FORBID_ATTR, Le) : ft({}), et = ze(I, "USE_PROFILES") ? I.USE_PROFILES : !1, Me = I.ALLOW_ARIA_ATTR !== !1, Ke = I.ALLOW_DATA_ATTR !== !1, ot = I.ALLOW_UNKNOWN_PROTOCOLS || !1, Gs = I.ALLOW_SELF_CLOSE_IN_ATTR !== !1, lt = I.SAFE_FOR_TEMPLATES || !1, Ct = I.SAFE_FOR_XML !== !1, Pt = I.WHOLE_DOCUMENT || !1, Ie = I.RETURN_DOM || !1, Je = I.RETURN_DOM_FRAGMENT || !1, ke = I.RETURN_TRUSTED_TYPE || !1, ve = I.FORCE_BODY || !1, St = I.SANITIZE_DOM !== !1, ct = I.SANITIZE_NAMED_PROPS || !1, kt = I.KEEP_CONTENT !== !1, wt = I.IN_PLACE || !1, J = I.ALLOWED_URI_REGEXP || Ao, qt = I.NAMESPACE || xt, Ws = I.MATHML_TEXT_INTEGRATION_POINTS || Ws, Ys = I.HTML_INTEGRATION_POINTS || Ys, z = I.CUSTOM_ELEMENT_HANDLING || {}, I.CUSTOM_ELEMENT_HANDLING && xr(I.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (z.tagNameCheck = I.CUSTOM_ELEMENT_HANDLING.tagNameCheck), I.CUSTOM_ELEMENT_HANDLING && xr(I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (z.attributeNameCheck = I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), I.CUSTOM_ELEMENT_HANDLING && typeof I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (z.allowCustomizedBuiltInElements = I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), lt && (Ke = !1), Je && (Ie = !0), et && (w = ne({}, Wr), Q = hi(null), et.html === !0 && (ne(w, Hr), ne(Q, Yr)), et.svg === !0 && (ne(w, Qi), ne(Q, en), ne(Q, zs)), et.svgFilters === !0 && (ne(w, Zi), ne(Q, en), ne(Q, zs)), et.mathMl === !0 && (ne(w, Ji), ne(Q, jr), ne(Q, zs))), ze(I, "ADD_TAGS") || (me.tagCheck = null), ze(I, "ADD_ATTR") || (me.attributeCheck = null), I.ADD_TAGS && (typeof I.ADD_TAGS == "function" ? me.tagCheck = I.ADD_TAGS : (w === $ && (w = ft(w)), ne(w, I.ADD_TAGS, Le))), I.ADD_ATTR && (typeof I.ADD_ATTR == "function" ? me.attributeCheck = I.ADD_ATTR : (Q === oe && (Q = ft(Q)), ne(Q, I.ADD_ATTR, Le))), I.ADD_URI_SAFE_ATTR && ne(vt, I.ADD_URI_SAFE_ATTR, Le), I.FORBID_CONTENTS && (Ye === gs && (Ye = ft(Ye)), ne(Ye, I.FORBID_CONTENTS, Le)), I.ADD_FORBID_CONTENTS && (Ye === gs && (Ye = ft(Ye)), ne(Ye, I.ADD_FORBID_CONTENTS, Le)), kt && (w["#text"] = !0), Pt && ne(w, ["html", "head", "body"]), w.table && (ne(w, ["tbody"]), delete se.tbody), I.TRUSTED_TYPES_POLICY) {
        if (typeof I.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw vs('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof I.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw vs('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        v = I.TRUSTED_TYPES_POLICY, x = v.createHTML("");
      } else
        v === void 0 && (v = Nu(f, i)), v !== null && typeof x == "string" && (x = v.createHTML(""));
      Ue && Ue(I), Xt = I;
    }
  }, Ar = ne({}, [...Qi, ...Zi, ...bu]), Ir = ne({}, [...Ji, ...Ru]), gc = function(I) {
    let O = S(I);
    (!O || !O.tagName) && (O = {
      namespaceURI: qt,
      tagName: "template"
    });
    const q = di(I.tagName), pe = di(O.tagName);
    return Ki[I.namespaceURI] ? I.namespaceURI === Hs ? O.namespaceURI === xt ? q === "svg" : O.namespaceURI === Vs ? q === "svg" && (pe === "annotation-xml" || Ws[pe]) : !!Ar[q] : I.namespaceURI === Vs ? O.namespaceURI === xt ? q === "math" : O.namespaceURI === Hs ? q === "math" && Ys[pe] : !!Ir[q] : I.namespaceURI === xt ? O.namespaceURI === Hs && !Ys[pe] || O.namespaceURI === Vs && !Ws[pe] ? !1 : !Ir[q] && (uc[q] || !Ar[q]) : !!(ys === "application/xhtml+xml" && Ki[I.namespaceURI]) : !1;
  }, ut = function(I) {
    Ts(e.removed, {
      element: I
    });
    try {
      S(I).removeChild(I);
    } catch {
      y(I);
    }
  }, Ut = function(I, O) {
    try {
      Ts(e.removed, {
        attribute: O.getAttributeNode(I),
        from: O
      });
    } catch {
      Ts(e.removed, {
        attribute: null,
        from: O
      });
    }
    if (O.removeAttribute(I), I === "is")
      if (Ie || Je)
        try {
          ut(O);
        } catch {
        }
      else
        try {
          O.setAttribute(I, "");
        } catch {
        }
  }, Lr = function(I) {
    let O = null, q = null;
    if (ve)
      I = "<remove></remove>" + I;
    else {
      const xe = Xi(I, /^[\r\n\t ]+/);
      q = xe && xe[0];
    }
    ys === "application/xhtml+xml" && qt === xt && (I = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + I + "</body></html>");
    const pe = v ? v.createHTML(I) : I;
    if (qt === xt)
      try {
        O = new d().parseFromString(pe, ys);
      } catch {
      }
    if (!O || !O.documentElement) {
      O = C.createDocument(qt, "template", null);
      try {
        O.documentElement.innerHTML = Gi ? x : pe;
      } catch {
      }
    }
    const we = O.body || O.documentElement;
    return I && q && we.insertBefore(t.createTextNode(q), we.childNodes[0] || null), qt === xt ? b.call(O, Pt ? "html" : "body")[0] : Pt ? O.documentElement : we;
  }, br = function(I) {
    return A.call(
      I.ownerDocument || I,
      I,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Hi = function(I) {
    return I instanceof h && (typeof I.nodeName != "string" || typeof I.textContent != "string" || typeof I.removeChild != "function" || !(I.attributes instanceof u) || typeof I.removeAttribute != "function" || typeof I.setAttribute != "function" || typeof I.namespaceURI != "string" || typeof I.insertBefore != "function" || typeof I.hasChildNodes != "function");
  }, Rr = function(I) {
    return typeof o == "function" && I instanceof o;
  };
  function At(Z, I, O) {
    js(Z, (q) => {
      q.call(e, I, O, Xt);
    });
  }
  const _r = function(I) {
    let O = null;
    if (At(P.beforeSanitizeElements, I, null), Hi(I))
      return ut(I), !0;
    const q = Le(I.nodeName);
    if (At(P.uponSanitizeElement, I, {
      tagName: q,
      allowedTags: w
    }), Ct && I.hasChildNodes() && !Rr(I.firstElementChild) && Ne(/<[/\w!]/g, I.innerHTML) && Ne(/<[/\w!]/g, I.textContent) || I.nodeType === As.progressingInstruction || Ct && I.nodeType === As.comment && Ne(/<[/\w]/g, I.data))
      return ut(I), !0;
    if (!(me.tagCheck instanceof Function && me.tagCheck(q)) && (!w[q] || se[q])) {
      if (!se[q] && Cr(q) && (z.tagNameCheck instanceof RegExp && Ne(z.tagNameCheck, q) || z.tagNameCheck instanceof Function && z.tagNameCheck(q)))
        return !1;
      if (kt && !Ye[q]) {
        const pe = S(I) || I.parentNode, we = T(I) || I.childNodes;
        if (we && pe) {
          const xe = we.length;
          for (let Ve = xe - 1; Ve >= 0; --Ve) {
            const It = p(we[Ve], !0);
            It.__removalCount = (I.__removalCount || 0) + 1, pe.insertBefore(It, E(I));
          }
        }
      }
      return ut(I), !0;
    }
    return I instanceof c && !gc(I) || (q === "noscript" || q === "noembed" || q === "noframes") && Ne(/<\/no(script|embed|frames)/i, I.innerHTML) ? (ut(I), !0) : (lt && I.nodeType === As.text && (O = I.textContent, js([M, U, H], (pe) => {
      O = Ss(O, pe, " ");
    }), I.textContent !== O && (Ts(e.removed, {
      element: I.cloneNode()
    }), I.textContent = O)), At(P.afterSanitizeElements, I, null), !1);
  }, Dr = function(I, O, q) {
    if (Se[O] || St && (O === "id" || O === "name") && (q in t || q in fc))
      return !1;
    if (!(Ke && !Se[O] && Ne(K, O))) {
      if (!(Me && Ne(F, O))) {
        if (!(me.attributeCheck instanceof Function && me.attributeCheck(O, I))) {
          if (!Q[O] || Se[O]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Cr(I) && (z.tagNameCheck instanceof RegExp && Ne(z.tagNameCheck, I) || z.tagNameCheck instanceof Function && z.tagNameCheck(I)) && (z.attributeNameCheck instanceof RegExp && Ne(z.attributeNameCheck, O) || z.attributeNameCheck instanceof Function && z.attributeNameCheck(O, I)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              O === "is" && z.allowCustomizedBuiltInElements && (z.tagNameCheck instanceof RegExp && Ne(z.tagNameCheck, q) || z.tagNameCheck instanceof Function && z.tagNameCheck(q)))
            ) return !1;
          } else if (!vt[O]) {
            if (!Ne(J, Ss(q, B, ""))) {
              if (!((O === "src" || O === "xlink:href" || O === "href") && I !== "script" && xu(q, "data:") === 0 && ms[I])) {
                if (!(ot && !Ne(V, Ss(q, B, "")))) {
                  if (q)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Cr = function(I) {
    return I !== "annotation-xml" && Xi(I, j);
  }, Pr = function(I) {
    At(P.beforeSanitizeAttributes, I, null);
    const {
      attributes: O
    } = I;
    if (!O || Hi(I))
      return;
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Q,
      forceKeepAttr: void 0
    };
    let pe = O.length;
    for (; pe--; ) {
      const we = O[pe], {
        name: xe,
        namespaceURI: Ve,
        value: It
      } = we, Qt = Le(xe), Wi = It;
      let De = xe === "value" ? Wi : Au(Wi);
      if (q.attrName = Qt, q.attrValue = De, q.keepAttr = !0, q.forceKeepAttr = void 0, At(P.uponSanitizeAttribute, I, q), De = q.attrValue, ct && (Qt === "id" || Qt === "name") && (Ut(xe, I), De = Ks + De), Ct && Ne(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, De)) {
        Ut(xe, I);
        continue;
      }
      if (Qt === "attributename" && Xi(De, "href")) {
        Ut(xe, I);
        continue;
      }
      if (q.forceKeepAttr)
        continue;
      if (!q.keepAttr) {
        Ut(xe, I);
        continue;
      }
      if (!Gs && Ne(/\/>/i, De)) {
        Ut(xe, I);
        continue;
      }
      lt && js([M, U, H], (wr) => {
        De = Ss(De, wr, " ");
      });
      const kr = Le(I.nodeName);
      if (!Dr(kr, Qt, De)) {
        Ut(xe, I);
        continue;
      }
      if (v && typeof f == "object" && typeof f.getAttributeType == "function" && !Ve)
        switch (f.getAttributeType(kr, Qt)) {
          case "TrustedHTML": {
            De = v.createHTML(De);
            break;
          }
          case "TrustedScriptURL": {
            De = v.createScriptURL(De);
            break;
          }
        }
      if (De !== Wi)
        try {
          Ve ? I.setAttributeNS(Ve, xe, De) : I.setAttribute(xe, De), Hi(I) ? ut(I) : Vr(e.removed);
        } catch {
          Ut(xe, I);
        }
    }
    At(P.afterSanitizeAttributes, I, null);
  }, mc = function Z(I) {
    let O = null;
    const q = br(I);
    for (At(P.beforeSanitizeShadowDOM, I, null); O = q.nextNode(); )
      At(P.uponSanitizeShadowNode, O, null), _r(O), Pr(O), O.content instanceof n && Z(O.content);
    At(P.afterSanitizeShadowDOM, I, null);
  };
  return e.sanitize = function(Z) {
    let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, O = null, q = null, pe = null, we = null;
    if (Gi = !Z, Gi && (Z = "<!-->"), typeof Z != "string" && !Rr(Z))
      if (typeof Z.toString == "function") {
        if (Z = Z.toString(), typeof Z != "string")
          throw vs("dirty is not a string, aborting");
      } else
        throw vs("toString is not a function");
    if (!e.isSupported)
      return Z;
    if (ae || Vi(I), e.removed = [], typeof Z == "string" && (wt = !1), wt) {
      if (Z.nodeName) {
        const It = Le(Z.nodeName);
        if (!w[It] || se[It])
          throw vs("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (Z instanceof o)
      O = Lr("<!---->"), q = O.ownerDocument.importNode(Z, !0), q.nodeType === As.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? O = q : O.appendChild(q);
    else {
      if (!Ie && !lt && !Pt && // eslint-disable-next-line unicorn/prefer-includes
      Z.indexOf("<") === -1)
        return v && ke ? v.createHTML(Z) : Z;
      if (O = Lr(Z), !O)
        return Ie ? null : ke ? x : "";
    }
    O && ve && ut(O.firstChild);
    const xe = br(wt ? Z : O);
    for (; pe = xe.nextNode(); )
      _r(pe), Pr(pe), pe.content instanceof n && mc(pe.content);
    if (wt)
      return Z;
    if (Ie) {
      if (Je)
        for (we = R.call(O.ownerDocument); O.firstChild; )
          we.appendChild(O.firstChild);
      else
        we = O;
      return (Q.shadowroot || Q.shadowrootmode) && (we = L.call(s, we, !0)), we;
    }
    let Ve = Pt ? O.outerHTML : O.innerHTML;
    return Pt && w["!doctype"] && O.ownerDocument && O.ownerDocument.doctype && O.ownerDocument.doctype.name && Ne(Io, O.ownerDocument.doctype.name) && (Ve = "<!DOCTYPE " + O.ownerDocument.doctype.name + `>
` + Ve), lt && js([M, U, H], (It) => {
      Ve = Ss(Ve, It, " ");
    }), v && ke ? v.createHTML(Ve) : Ve;
  }, e.setConfig = function() {
    let Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Vi(Z), ae = !0;
  }, e.clearConfig = function() {
    Xt = null, ae = !1;
  }, e.isValidAttribute = function(Z, I, O) {
    Xt || Vi({});
    const q = Le(Z), pe = Le(I);
    return Dr(q, pe, O);
  }, e.addHook = function(Z, I) {
    typeof I == "function" && Ts(P[Z], I);
  }, e.removeHook = function(Z, I) {
    if (I !== void 0) {
      const O = Su(P[Z], I);
      return O === -1 ? void 0 : vu(P[Z], O, 1)[0];
    }
    return Vr(P[Z]);
  }, e.removeHooks = function(Z) {
    P[Z] = [];
  }, e.removeAllHooks = function() {
    P = qr();
  }, e;
}
var $u = Lo();
function Bu(r) {
  return { __html: Uu(r) };
}
function fs(r, e) {
  const t = Object.keys(r).filter(
    (i) => e.includes(i) ? null : i
  ), s = new Object();
  return t.forEach((i) => {
    s[i] = r[i];
  }), s;
}
function Uu(r) {
  return typeof window > "u" ? r : $u.sanitize(r, {
    ALLOWED_TAGS: [
      "a",
      "b",
      "br",
      "i",
      "img",
      "p",
      "small",
      "span",
      "sub",
      "sup"
    ],
    ALLOWED_ATTR: ["href", "alt", "src", "height", "width"],
    ALLOWED_URI_REGEXP: /^(?:https?|mailto):/i
  });
}
const Gu = le("span", {}), Dn = (r) => {
  const { as: e, label: t } = r, i = fs(r, ["as", "label"]);
  return /* @__PURE__ */ N.createElement(Gu, { as: e, ...i }, Ni(t, i.lang));
}, G = Number.isFinite || function(r) {
  return typeof r == "number" && isFinite(r);
}, Ku = Number.isSafeInteger || function(r) {
  return typeof r == "number" && Math.abs(r) <= Vu;
}, Vu = Number.MAX_SAFE_INTEGER || 9007199254740991;
let X = /* @__PURE__ */ function(r) {
  return r.NETWORK_ERROR = "networkError", r.MEDIA_ERROR = "mediaError", r.KEY_SYSTEM_ERROR = "keySystemError", r.MUX_ERROR = "muxError", r.OTHER_ERROR = "otherError", r;
}({}), D = /* @__PURE__ */ function(r) {
  return r.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", r.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", r.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", r.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", r.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", r.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", r.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", r.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", r.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", r.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", r.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR = "keySystemDestroyMediaKeysError", r.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR = "keySystemDestroyCloseSessionError", r.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR = "keySystemDestroyRemoveSessionError", r.MANIFEST_LOAD_ERROR = "manifestLoadError", r.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", r.MANIFEST_PARSING_ERROR = "manifestParsingError", r.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", r.LEVEL_EMPTY_ERROR = "levelEmptyError", r.LEVEL_LOAD_ERROR = "levelLoadError", r.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", r.LEVEL_PARSING_ERROR = "levelParsingError", r.LEVEL_SWITCH_ERROR = "levelSwitchError", r.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", r.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", r.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", r.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", r.FRAG_LOAD_ERROR = "fragLoadError", r.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", r.FRAG_DECRYPT_ERROR = "fragDecryptError", r.FRAG_PARSING_ERROR = "fragParsingError", r.FRAG_GAP = "fragGap", r.REMUX_ALLOC_ERROR = "remuxAllocError", r.KEY_LOAD_ERROR = "keyLoadError", r.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", r.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", r.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", r.BUFFER_APPEND_ERROR = "bufferAppendError", r.BUFFER_APPENDING_ERROR = "bufferAppendingError", r.BUFFER_STALLED_ERROR = "bufferStalledError", r.BUFFER_FULL_ERROR = "bufferFullError", r.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", r.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", r.ASSET_LIST_LOAD_ERROR = "assetListLoadError", r.ASSET_LIST_LOAD_TIMEOUT = "assetListLoadTimeout", r.ASSET_LIST_PARSING_ERROR = "assetListParsingError", r.INTERSTITIAL_ASSET_ITEM_ERROR = "interstitialAssetItemError", r.INTERNAL_EXCEPTION = "internalException", r.INTERNAL_ABORTED = "aborted", r.ATTACH_MEDIA_ERROR = "attachMediaError", r.UNKNOWN = "unknown", r;
}({}), m = /* @__PURE__ */ function(r) {
  return r.MEDIA_ATTACHING = "hlsMediaAttaching", r.MEDIA_ATTACHED = "hlsMediaAttached", r.MEDIA_DETACHING = "hlsMediaDetaching", r.MEDIA_DETACHED = "hlsMediaDetached", r.MEDIA_ENDED = "hlsMediaEnded", r.STALL_RESOLVED = "hlsStallResolved", r.BUFFER_RESET = "hlsBufferReset", r.BUFFER_CODECS = "hlsBufferCodecs", r.BUFFER_CREATED = "hlsBufferCreated", r.BUFFER_APPENDING = "hlsBufferAppending", r.BUFFER_APPENDED = "hlsBufferAppended", r.BUFFER_EOS = "hlsBufferEos", r.BUFFERED_TO_END = "hlsBufferedToEnd", r.BUFFER_FLUSHING = "hlsBufferFlushing", r.BUFFER_FLUSHED = "hlsBufferFlushed", r.MANIFEST_LOADING = "hlsManifestLoading", r.MANIFEST_LOADED = "hlsManifestLoaded", r.MANIFEST_PARSED = "hlsManifestParsed", r.LEVEL_SWITCHING = "hlsLevelSwitching", r.LEVEL_SWITCHED = "hlsLevelSwitched", r.LEVEL_LOADING = "hlsLevelLoading", r.LEVEL_LOADED = "hlsLevelLoaded", r.LEVEL_UPDATED = "hlsLevelUpdated", r.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", r.LEVELS_UPDATED = "hlsLevelsUpdated", r.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", r.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", r.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", r.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", r.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", r.AUDIO_TRACK_UPDATED = "hlsAudioTrackUpdated", r.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", r.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", r.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", r.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", r.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", r.SUBTITLE_TRACK_UPDATED = "hlsSubtitleTrackUpdated", r.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", r.CUES_PARSED = "hlsCuesParsed", r.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", r.INIT_PTS_FOUND = "hlsInitPtsFound", r.FRAG_LOADING = "hlsFragLoading", r.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", r.FRAG_LOADED = "hlsFragLoaded", r.FRAG_DECRYPTED = "hlsFragDecrypted", r.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", r.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", r.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", r.FRAG_PARSED = "hlsFragParsed", r.FRAG_BUFFERED = "hlsFragBuffered", r.FRAG_CHANGED = "hlsFragChanged", r.FPS_DROP = "hlsFpsDrop", r.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", r.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", r.ERROR = "hlsError", r.DESTROYING = "hlsDestroying", r.KEY_LOADING = "hlsKeyLoading", r.KEY_LOADED = "hlsKeyLoaded", r.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", r.BACK_BUFFER_REACHED = "hlsBackBufferReached", r.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", r.ASSET_LIST_LOADING = "hlsAssetListLoading", r.ASSET_LIST_LOADED = "hlsAssetListLoaded", r.INTERSTITIALS_UPDATED = "hlsInterstitialsUpdated", r.INTERSTITIALS_BUFFERED_TO_BOUNDARY = "hlsInterstitialsBufferedToBoundary", r.INTERSTITIAL_ASSET_PLAYER_CREATED = "hlsInterstitialAssetPlayerCreated", r.INTERSTITIAL_STARTED = "hlsInterstitialStarted", r.INTERSTITIAL_ASSET_STARTED = "hlsInterstitialAssetStarted", r.INTERSTITIAL_ASSET_ENDED = "hlsInterstitialAssetEnded", r.INTERSTITIAL_ASSET_ERROR = "hlsInterstitialAssetError", r.INTERSTITIAL_ENDED = "hlsInterstitialEnded", r.INTERSTITIALS_PRIMARY_RESUMED = "hlsInterstitialsPrimaryResumed", r.PLAYOUT_LIMIT_REACHED = "hlsPlayoutLimitReached", r.EVENT_CUE_ENTER = "hlsEventCueEnter", r;
}({});
var re = {
  MANIFEST: "manifest",
  LEVEL: "level",
  AUDIO_TRACK: "audioTrack",
  SUBTITLE_TRACK: "subtitleTrack"
}, W = {
  MAIN: "main",
  AUDIO: "audio",
  SUBTITLE: "subtitle"
};
class Jt {
  //  About half of the estimated value will be from the last |halfLife| samples by weight.
  constructor(e, t = 0, s = 0) {
    this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e, this.alpha_ = e ? Math.exp(Math.log(0.5) / e) : 0, this.estimate_ = t, this.totalWeight_ = s;
  }
  sample(e, t) {
    const s = Math.pow(this.alpha_, e);
    this.estimate_ = t * (1 - s) + s * this.estimate_, this.totalWeight_ += e;
  }
  getTotalWeight() {
    return this.totalWeight_;
  }
  getEstimate() {
    if (this.alpha_) {
      const e = 1 - Math.pow(this.alpha_, this.totalWeight_);
      if (e)
        return this.estimate_ / e;
    }
    return this.estimate_;
  }
}
class Hu {
  constructor(e, t, s, i = 100) {
    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = s, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new Jt(e), this.fast_ = new Jt(t), this.defaultTTFB_ = i, this.ttfb_ = new Jt(e);
  }
  update(e, t) {
    const {
      slow_: s,
      fast_: i,
      ttfb_: n
    } = this;
    s.halfLife !== e && (this.slow_ = new Jt(e, s.getEstimate(), s.getTotalWeight())), i.halfLife !== t && (this.fast_ = new Jt(t, i.getEstimate(), i.getTotalWeight())), n.halfLife !== e && (this.ttfb_ = new Jt(e, n.getEstimate(), n.getTotalWeight()));
  }
  sample(e, t) {
    e = Math.max(e, this.minDelayMs_);
    const s = 8 * t, i = e / 1e3, n = s / i;
    this.fast_.sample(i, n), this.slow_.sample(i, n);
  }
  sampleTTFB(e) {
    const t = e / 1e3, s = Math.sqrt(2) * Math.exp(-Math.pow(t, 2) / 2);
    this.ttfb_.sample(s, Math.max(e, 5));
  }
  canEstimate() {
    return this.fast_.getTotalWeight() >= this.minWeight_;
  }
  getEstimate() {
    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
  }
  getEstimateTTFB() {
    return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
  }
  get defaultEstimate() {
    return this.defaultEstimate_;
  }
  destroy() {
  }
}
function Wu(r, e, t) {
  return (e = ju(e)) in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
function de() {
  return de = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var s in t) ({}).hasOwnProperty.call(t, s) && (r[s] = t[s]);
    }
    return r;
  }, de.apply(null, arguments);
}
function Xr(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    e && (s = s.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, s);
  }
  return t;
}
function ce(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Xr(Object(t), !0).forEach(function(s) {
      Wu(r, s, t[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Xr(Object(t)).forEach(function(s) {
      Object.defineProperty(r, s, Object.getOwnPropertyDescriptor(t, s));
    });
  }
  return r;
}
function Yu(r, e) {
  if (typeof r != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var s = t.call(r, e);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function ju(r) {
  var e = Yu(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
class nt {
  constructor(e, t) {
    this.trace = void 0, this.debug = void 0, this.log = void 0, this.warn = void 0, this.info = void 0, this.error = void 0;
    const s = `[${e}]:`;
    this.trace = Ft, this.debug = t.debug.bind(null, s), this.log = t.log.bind(null, s), this.warn = t.warn.bind(null, s), this.info = t.info.bind(null, s), this.error = t.error.bind(null, s);
  }
}
const Ft = function() {
}, zu = {
  trace: Ft,
  debug: Ft,
  log: Ft,
  warn: Ft,
  info: Ft,
  error: Ft
};
function Cn() {
  return de({}, zu);
}
function qu(r, e) {
  const t = self.console[r];
  return t ? t.bind(self.console, `${e ? "[" + e + "] " : ""}[${r}] >`) : Ft;
}
function Qr(r, e, t) {
  return e[r] ? e[r].bind(e) : qu(r, t);
}
const Pn = Cn();
function Xu(r, e, t) {
  const s = Cn();
  if (typeof console == "object" && r === !0 || typeof r == "object") {
    const i = [
      // Remove out from list here to hard-disable a log-level
      // 'trace',
      "debug",
      "log",
      "info",
      "warn",
      "error"
    ];
    i.forEach((n) => {
      s[n] = Qr(n, r, t);
    });
    try {
      s.log(`Debug logs enabled for "${e}" in hls.js version 1.6.13`);
    } catch {
      return Cn();
    }
    i.forEach((n) => {
      Pn[n] = Qr(n, r);
    });
  } else
    de(Pn, s);
  return s;
}
const ue = Pn;
function $t(r = !0) {
  return typeof self > "u" ? void 0 : (r || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource;
}
function Qu(r) {
  return typeof self < "u" && r === self.ManagedMediaSource;
}
function bo(r, e) {
  const t = Object.keys(r), s = Object.keys(e), i = t.length, n = s.length;
  return !i || !n || i === n && !t.some((a) => s.indexOf(a) === -1);
}
function Ze(r, e = !1) {
  if (typeof TextDecoder < "u") {
    const l = new TextDecoder("utf-8").decode(r);
    if (e) {
      const u = l.indexOf("\0");
      return u !== -1 ? l.substring(0, u) : l;
    }
    return l.replace(/\0/g, "");
  }
  const t = r.length;
  let s, i, n, a = "", o = 0;
  for (; o < t; ) {
    if (s = r[o++], s === 0 && e)
      return a;
    if (s === 0 || s === 3)
      continue;
    switch (s >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        a += String.fromCharCode(s);
        break;
      case 12:
      case 13:
        i = r[o++], a += String.fromCharCode((s & 31) << 6 | i & 63);
        break;
      case 14:
        i = r[o++], n = r[o++], a += String.fromCharCode((s & 15) << 12 | (i & 63) << 6 | (n & 63) << 0);
        break;
    }
  }
  return a;
}
function $e(r) {
  let e = "";
  for (let t = 0; t < r.length; t++) {
    let s = r[t].toString(16);
    s.length < 2 && (s = "0" + s), e += s;
  }
  return e;
}
function Ro(r) {
  return Uint8Array.from(r.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer;
}
function Zu(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var tn = { exports: {} }, Zr;
function Ju() {
  return Zr || (Zr = 1, function(r, e) {
    (function(t) {
      var s = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, i = /^(?=([^\/?#]*))\1([^]*)$/, n = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
        // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
        // E.g
        // With opts.alwaysNormalize = false (default, spec compliant)
        // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
        // With opts.alwaysNormalize = true (not spec compliant)
        // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
        buildAbsoluteURL: function(c, l, u) {
          if (u = u || {}, c = c.trim(), l = l.trim(), !l) {
            if (!u.alwaysNormalize)
              return c;
            var h = o.parseURL(c);
            if (!h)
              throw new Error("Error trying to parse base URL.");
            return h.path = o.normalizePath(
              h.path
            ), o.buildURLFromParts(h);
          }
          var d = o.parseURL(l);
          if (!d)
            throw new Error("Error trying to parse relative URL.");
          if (d.scheme)
            return u.alwaysNormalize ? (d.path = o.normalizePath(d.path), o.buildURLFromParts(d)) : l;
          var f = o.parseURL(c);
          if (!f)
            throw new Error("Error trying to parse base URL.");
          if (!f.netLoc && f.path && f.path[0] !== "/") {
            var g = i.exec(f.path);
            f.netLoc = g[1], f.path = g[2];
          }
          f.netLoc && !f.path && (f.path = "/");
          var p = {
            // 2c) Otherwise, the embedded URL inherits the scheme of
            // the base URL.
            scheme: f.scheme,
            netLoc: d.netLoc,
            path: null,
            params: d.params,
            query: d.query,
            fragment: d.fragment
          };
          if (!d.netLoc && (p.netLoc = f.netLoc, d.path[0] !== "/"))
            if (!d.path)
              p.path = f.path, d.params || (p.params = f.params, d.query || (p.query = f.query));
            else {
              var y = f.path, E = y.substring(0, y.lastIndexOf("/") + 1) + d.path;
              p.path = o.normalizePath(E);
            }
          return p.path === null && (p.path = u.alwaysNormalize ? o.normalizePath(d.path) : d.path), o.buildURLFromParts(p);
        },
        parseURL: function(c) {
          var l = s.exec(c);
          return l ? {
            scheme: l[1] || "",
            netLoc: l[2] || "",
            path: l[3] || "",
            params: l[4] || "",
            query: l[5] || "",
            fragment: l[6] || ""
          } : null;
        },
        normalizePath: function(c) {
          for (c = c.split("").reverse().join("").replace(n, ""); c.length !== (c = c.replace(a, "")).length; )
            ;
          return c.split("").reverse().join("");
        },
        buildURLFromParts: function(c) {
          return c.scheme + c.netLoc + c.path + c.params + c.query + c.fragment;
        }
      };
      r.exports = o;
    })();
  }(tn)), tn.exports;
}
var Xn = Ju();
class Qn {
  constructor() {
    this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
      start: 0,
      first: 0,
      end: 0
    }, this.parsing = {
      start: 0,
      end: 0
    }, this.buffering = {
      start: 0,
      first: 0,
      end: 0
    };
  }
}
var fe = {
  AUDIO: "audio",
  VIDEO: "video",
  AUDIOVIDEO: "audiovideo"
};
class _o {
  constructor(e) {
    this._byteRange = null, this._url = null, this._stats = null, this._streams = null, this.base = void 0, this.relurl = void 0, typeof e == "string" && (e = {
      url: e
    }), this.base = e, th(this, "stats");
  }
  // setByteRange converts a EXT-X-BYTERANGE attribute into a two element array
  setByteRange(e, t) {
    const s = e.split("@", 2);
    let i;
    s.length === 1 ? i = (t == null ? void 0 : t.byteRangeEndOffset) || 0 : i = parseInt(s[1]), this._byteRange = [i, parseInt(s[0]) + i];
  }
  get baseurl() {
    return this.base.url;
  }
  get byteRange() {
    return this._byteRange === null ? [] : this._byteRange;
  }
  get byteRangeStartOffset() {
    return this.byteRange[0];
  }
  get byteRangeEndOffset() {
    return this.byteRange[1];
  }
  get elementaryStreams() {
    return this._streams === null && (this._streams = {
      [fe.AUDIO]: null,
      [fe.VIDEO]: null,
      [fe.AUDIOVIDEO]: null
    }), this._streams;
  }
  set elementaryStreams(e) {
    this._streams = e;
  }
  get hasStats() {
    return this._stats !== null;
  }
  get hasStreams() {
    return this._streams !== null;
  }
  get stats() {
    return this._stats === null && (this._stats = new Qn()), this._stats;
  }
  set stats(e) {
    this._stats = e;
  }
  get url() {
    return !this._url && this.baseurl && this.relurl && (this._url = Xn.buildAbsoluteURL(this.baseurl, this.relurl, {
      alwaysNormalize: !0
    })), this._url || "";
  }
  set url(e) {
    this._url = e;
  }
  clearElementaryStreamInfo() {
    const {
      elementaryStreams: e
    } = this;
    e[fe.AUDIO] = null, e[fe.VIDEO] = null, e[fe.AUDIOVIDEO] = null;
  }
}
function Ae(r) {
  return r.sn !== "initSegment";
}
class sn extends _o {
  constructor(e, t) {
    super(t), this._decryptdata = null, this._programDateTime = null, this._ref = null, this._bitrate = void 0, this.rawProgramDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.playlistOffset = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.urlId = 0, this.type = e;
  }
  get byteLength() {
    if (this.hasStats) {
      const e = this.stats.total;
      if (e)
        return e;
    }
    if (this.byteRange.length) {
      const e = this.byteRange[0], t = this.byteRange[1];
      if (G(e) && G(t))
        return t - e;
    }
    return null;
  }
  get bitrate() {
    return this.byteLength ? this.byteLength * 8 / this.duration : this._bitrate ? this._bitrate : null;
  }
  set bitrate(e) {
    this._bitrate = e;
  }
  get decryptdata() {
    var e;
    const {
      levelkeys: t
    } = this;
    if (!t || t.NONE)
      return null;
    if (t.identity)
      this._decryptdata || (this._decryptdata = t.identity.getDecryptData(this.sn));
    else if (!((e = this._decryptdata) != null && e.keyId)) {
      const s = Object.keys(t);
      if (s.length === 1) {
        const i = this._decryptdata = t[s[0]] || null;
        i && (this._decryptdata = i.getDecryptData(this.sn, t));
      }
    }
    return this._decryptdata;
  }
  get end() {
    return this.start + this.duration;
  }
  get endProgramDateTime() {
    if (this.programDateTime === null)
      return null;
    const e = G(this.duration) ? this.duration : 0;
    return this.programDateTime + e * 1e3;
  }
  get encrypted() {
    var e;
    if ((e = this._decryptdata) != null && e.encrypted)
      return !0;
    if (this.levelkeys) {
      var t;
      const s = Object.keys(this.levelkeys), i = s.length;
      if (i > 1 || i === 1 && (t = this.levelkeys[s[0]]) != null && t.encrypted)
        return !0;
    }
    return !1;
  }
  get programDateTime() {
    return this._programDateTime === null && this.rawProgramDateTime && (this.programDateTime = Date.parse(this.rawProgramDateTime)), this._programDateTime;
  }
  set programDateTime(e) {
    if (!G(e)) {
      this._programDateTime = this.rawProgramDateTime = null;
      return;
    }
    this._programDateTime = e;
  }
  get ref() {
    return Ae(this) ? (this._ref || (this._ref = {
      base: this.base,
      start: this.start,
      duration: this.duration,
      sn: this.sn,
      programDateTime: this.programDateTime
    }), this._ref) : null;
  }
  addStart(e) {
    this.setStart(this.start + e);
  }
  setStart(e) {
    this.start = e, this._ref && (this._ref.start = e);
  }
  setDuration(e) {
    this.duration = e, this._ref && (this._ref.duration = e);
  }
  setKeyFormat(e) {
    const t = this.levelkeys;
    if (t) {
      var s;
      const i = t[e];
      i && !((s = this._decryptdata) != null && s.keyId) && (this._decryptdata = i.getDecryptData(this.sn, t));
    }
  }
  abortRequests() {
    var e, t;
    (e = this.loader) == null || e.abort(), (t = this.keyLoader) == null || t.abort();
  }
  setElementaryStreamInfo(e, t, s, i, n, a = !1) {
    const {
      elementaryStreams: o
    } = this, c = o[e];
    if (!c) {
      o[e] = {
        startPTS: t,
        endPTS: s,
        startDTS: i,
        endDTS: n,
        partial: a
      };
      return;
    }
    c.startPTS = Math.min(c.startPTS, t), c.endPTS = Math.max(c.endPTS, s), c.startDTS = Math.min(c.startDTS, i), c.endDTS = Math.max(c.endDTS, n);
  }
}
class eh extends _o {
  constructor(e, t, s, i, n) {
    super(s), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.duration = e.decimalFloatingPoint("DURATION"), this.gap = e.bool("GAP"), this.independent = e.bool("INDEPENDENT"), this.relurl = e.enumeratedString("URI"), this.fragment = t, this.index = i;
    const a = e.enumeratedString("BYTERANGE");
    a && this.setByteRange(a, n), n && (this.fragOffset = n.fragOffset + n.duration);
  }
  get start() {
    return this.fragment.start + this.fragOffset;
  }
  get end() {
    return this.start + this.duration;
  }
  get loaded() {
    const {
      elementaryStreams: e
    } = this;
    return !!(e.audio || e.video || e.audiovideo);
  }
}
function Do(r, e) {
  const t = Object.getPrototypeOf(r);
  if (t) {
    const s = Object.getOwnPropertyDescriptor(t, e);
    return s || Do(t, e);
  }
}
function th(r, e) {
  const t = Do(r, e);
  t && (t.enumerable = !0, Object.defineProperty(r, e, t));
}
const Jr = Math.pow(2, 32) - 1, sh = [].push, Co = {
  video: 1,
  audio: 2,
  id3: 3,
  text: 4
};
function be(r) {
  return String.fromCharCode.apply(null, r);
}
function Po(r, e) {
  const t = r[e] << 8 | r[e + 1];
  return t < 0 ? 65536 + t : t;
}
function ee(r, e) {
  const t = ko(r, e);
  return t < 0 ? 4294967296 + t : t;
}
function ea(r, e) {
  let t = ee(r, e);
  return t *= Math.pow(2, 32), t += ee(r, e + 4), t;
}
function ko(r, e) {
  return r[e] << 24 | r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3];
}
function ih(r) {
  const e = r.byteLength;
  for (let t = 0; t < e; ) {
    const s = ee(r, t);
    if (s > 8 && r[t + 4] === 109 && r[t + 5] === 111 && r[t + 6] === 111 && r[t + 7] === 102)
      return !0;
    t = s > 1 ? t + s : e;
  }
  return !1;
}
function ie(r, e) {
  const t = [];
  if (!e.length)
    return t;
  const s = r.byteLength;
  for (let i = 0; i < s; ) {
    const n = ee(r, i), a = be(r.subarray(i + 4, i + 8)), o = n > 1 ? i + n : s;
    if (a === e[0])
      if (e.length === 1)
        t.push(r.subarray(i + 8, o));
      else {
        const c = ie(r.subarray(i + 8, o), e.slice(1));
        c.length && sh.apply(t, c);
      }
    i = o;
  }
  return t;
}
function nh(r) {
  const e = [], t = r[0];
  let s = 8;
  const i = ee(r, s);
  s += 4;
  let n = 0, a = 0;
  t === 0 ? (n = ee(r, s), a = ee(r, s + 4), s += 8) : (n = ea(r, s), a = ea(r, s + 8), s += 16), s += 2;
  let o = r.length + a;
  const c = Po(r, s);
  s += 2;
  for (let l = 0; l < c; l++) {
    let u = s;
    const h = ee(r, u);
    u += 4;
    const d = h & 2147483647;
    if ((h & 2147483648) >>> 31 === 1)
      return ue.warn("SIDX has hierarchical references (not supported)"), null;
    const g = ee(r, u);
    u += 4, e.push({
      referenceSize: d,
      subsegmentDuration: g,
      // unscaled
      info: {
        duration: g / i,
        start: o,
        end: o + d - 1
      }
    }), o += d, u += 4, s = u;
  }
  return {
    earliestPresentationTime: n,
    timescale: i,
    version: t,
    referencesCount: c,
    references: e
  };
}
function wo(r) {
  const e = [], t = ie(r, ["moov", "trak"]);
  for (let i = 0; i < t.length; i++) {
    const n = t[i], a = ie(n, ["tkhd"])[0];
    if (a) {
      let o = a[0];
      const c = ee(a, o === 0 ? 12 : 20), l = ie(n, ["mdia", "mdhd"])[0];
      if (l) {
        o = l[0];
        const u = ee(l, o === 0 ? 12 : 20), h = ie(n, ["mdia", "hdlr"])[0];
        if (h) {
          const d = be(h.subarray(8, 12)), f = {
            soun: fe.AUDIO,
            vide: fe.VIDEO
          }[d], g = ie(n, ["mdia", "minf", "stbl", "stsd"])[0], p = rh(g);
          f ? (e[c] = {
            timescale: u,
            type: f,
            stsd: p
          }, e[f] = ce({
            timescale: u,
            id: c
          }, p)) : e[c] = {
            timescale: u,
            type: d,
            stsd: p
          };
        }
      }
    }
  }
  return ie(r, ["moov", "mvex", "trex"]).forEach((i) => {
    const n = ee(i, 4), a = e[n];
    a && (a.default = {
      duration: ee(i, 12),
      flags: ee(i, 20)
    });
  }), e;
}
function rh(r) {
  const e = r.subarray(8), t = e.subarray(86), s = be(e.subarray(4, 8));
  let i = s, n;
  const a = s === "enca" || s === "encv";
  if (a) {
    const l = ie(e, [s])[0].subarray(s === "enca" ? 28 : 78);
    ie(l, ["sinf"]).forEach((h) => {
      const d = ie(h, ["schm"])[0];
      if (d) {
        const f = be(d.subarray(4, 8));
        if (f === "cbcs" || f === "cenc") {
          const g = ie(h, ["frma"])[0];
          g && (i = be(g));
        }
      }
    });
  }
  const o = i;
  switch (i) {
    case "avc1":
    case "avc2":
    case "avc3":
    case "avc4": {
      const c = ie(t, ["avcC"])[0];
      c && c.length > 3 && (i += "." + Xs(c[1]) + Xs(c[2]) + Xs(c[3]), n = qs(o === "avc1" ? "dva1" : "dvav", t));
      break;
    }
    case "mp4a": {
      const c = ie(e, [s])[0], l = ie(c.subarray(28), ["esds"])[0];
      if (l && l.length > 7) {
        let u = 4;
        if (l[u++] !== 3)
          break;
        u = nn(l, u), u += 2;
        const h = l[u++];
        if (h & 128 && (u += 2), h & 64 && (u += l[u++]), l[u++] !== 4)
          break;
        u = nn(l, u);
        const d = l[u++];
        if (d === 64)
          i += "." + Xs(d);
        else
          break;
        if (u += 12, l[u++] !== 5)
          break;
        u = nn(l, u);
        const f = l[u++];
        let g = (f & 248) >> 3;
        g === 31 && (g += 1 + ((f & 7) << 3) + ((l[u] & 224) >> 5)), i += "." + g;
      }
      break;
    }
    case "hvc1":
    case "hev1": {
      const c = ie(t, ["hvcC"])[0];
      if (c && c.length > 12) {
        const l = c[1], u = ["", "A", "B", "C"][l >> 6], h = l & 31, d = ee(c, 2), f = (l & 32) >> 5 ? "H" : "L", g = c[12], p = c.subarray(6, 12);
        i += "." + u + h, i += "." + ah(d).toString(16).toUpperCase(), i += "." + f + g;
        let y = "";
        for (let E = p.length; E--; ) {
          const T = p[E];
          (T || y) && (y = "." + T.toString(16).toUpperCase() + y);
        }
        i += y;
      }
      n = qs(o == "hev1" ? "dvhe" : "dvh1", t);
      break;
    }
    case "dvh1":
    case "dvhe":
    case "dvav":
    case "dva1":
    case "dav1": {
      i = qs(i, t) || i;
      break;
    }
    case "vp09": {
      const c = ie(t, ["vpcC"])[0];
      if (c && c.length > 6) {
        const l = c[4], u = c[5], h = c[6] >> 4 & 15;
        i += "." + gt(l) + "." + gt(u) + "." + gt(h);
      }
      break;
    }
    case "av01": {
      const c = ie(t, ["av1C"])[0];
      if (c && c.length > 2) {
        const l = c[1] >>> 5, u = c[1] & 31, h = c[2] >>> 7 ? "H" : "M", d = (c[2] & 64) >> 6, f = (c[2] & 32) >> 5, g = l === 2 && d ? f ? 12 : 10 : d ? 10 : 8, p = (c[2] & 16) >> 4, y = (c[2] & 8) >> 3, E = (c[2] & 4) >> 2, T = c[2] & 3;
        i += "." + l + "." + gt(u) + h + "." + gt(g) + "." + p + "." + y + E + T + "." + gt(1) + "." + gt(1) + "." + gt(1) + "." + 0, n = qs("dav1", t);
      }
      break;
    }
  }
  return {
    codec: i,
    encrypted: a,
    supplemental: n
  };
}
function qs(r, e) {
  const t = ie(e, ["dvvC"]), s = t.length ? t[0] : ie(e, ["dvcC"])[0];
  if (s) {
    const i = s[2] >> 1 & 127, n = s[2] << 5 & 32 | s[3] >> 3 & 31;
    return r + "." + gt(i) + "." + gt(n);
  }
}
function ah(r) {
  let e = 0;
  for (let t = 0; t < 32; t++)
    e |= (r >> t & 1) << 31 - t;
  return e >>> 0;
}
function nn(r, e) {
  const t = e + 5;
  for (; r[e++] & 128 && e < t; )
    ;
  return e;
}
function Xs(r) {
  return ("0" + r.toString(16).toUpperCase()).slice(-2);
}
function gt(r) {
  return (r < 10 ? "0" : "") + r;
}
function oh(r, e) {
  if (!r || !e)
    return;
  const t = e.keyId;
  t && e.isCommonEncryption && Oo(r, (s, i) => {
    const n = s.subarray(8, 24);
    n.some((a) => a !== 0) || (ue.log(`[eme] Patching keyId in 'enc${i ? "a" : "v"}>sinf>>tenc' box: ${$e(n)} -> ${$e(t)}`), s.set(t, 8));
  });
}
function lh(r) {
  const e = [];
  return Oo(r, (t) => e.push(t.subarray(8, 24))), e;
}
function Oo(r, e) {
  ie(r, ["moov", "trak"]).forEach((s) => {
    const i = ie(s, ["mdia", "minf", "stbl", "stsd"])[0];
    if (!i) return;
    const n = i.subarray(8);
    let a = ie(n, ["enca"]);
    const o = a.length > 0;
    o || (a = ie(n, ["encv"])), a.forEach((c) => {
      const l = o ? c.subarray(28) : c.subarray(78);
      ie(l, ["sinf"]).forEach((h) => {
        const d = Mo(h);
        d && e(d, o);
      });
    });
  });
}
function Mo(r) {
  const e = ie(r, ["schm"])[0];
  if (e) {
    const t = be(e.subarray(4, 8));
    if (t === "cbcs" || t === "cenc") {
      const s = ie(r, ["schi", "tenc"])[0];
      if (s)
        return s;
    }
  }
}
function ch(r, e, t) {
  const s = {}, i = ie(r, ["moof", "traf"]);
  for (let n = 0; n < i.length; n++) {
    const a = i[n], o = ie(a, ["tfhd"])[0], c = ee(o, 4), l = e[c];
    if (!l)
      continue;
    s[c] || (s[c] = {
      start: NaN,
      duration: 0,
      sampleCount: 0,
      timescale: l.timescale,
      type: l.type
    });
    const u = s[c], h = ie(a, ["tfdt"])[0];
    if (h) {
      const S = h[0];
      let v = ee(h, 4);
      S === 1 && (v === Jr ? t.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time") : (v *= Jr + 1, v += ee(h, 8))), G(v) && (!G(u.start) || v < u.start) && (u.start = v);
    }
    const d = l.default, f = ee(o, 0) | (d == null ? void 0 : d.flags);
    let g = (d == null ? void 0 : d.duration) || 0;
    f & 8 && (f & 2 ? g = ee(o, 12) : g = ee(o, 8));
    const p = ie(a, ["trun"]);
    let y = u.start || 0, E = 0, T = g;
    for (let S = 0; S < p.length; S++) {
      const v = p[S], x = ee(v, 4), C = u.sampleCount;
      u.sampleCount += x;
      const A = v[3] & 1, R = v[3] & 4, b = v[2] & 1, L = v[2] & 2, P = v[2] & 4, M = v[2] & 8;
      let U = 8, H = x;
      for (A && (U += 4), R && x && (!(v[U + 1] & 1) && u.keyFrameIndex === void 0 && (u.keyFrameIndex = C), U += 4, b ? (T = ee(v, U), U += 4) : T = g, L && (U += 4), M && (U += 4), y += T, E += T, H--); H--; )
        b ? (T = ee(v, U), U += 4) : T = g, L && (U += 4), P && (v[U + 1] & 1 || u.keyFrameIndex === void 0 && (u.keyFrameIndex = u.sampleCount - (H + 1), u.keyFrameStart = y), U += 4), M && (U += 4), y += T, E += T;
      !E && g && (E += g * x);
    }
    u.duration += E;
  }
  if (!Object.keys(s).some((n) => s[n].duration)) {
    let n = 1 / 0, a = 0;
    const o = ie(r, ["sidx"]);
    for (let c = 0; c < o.length; c++) {
      const l = nh(o[c]);
      if (l != null && l.references) {
        n = Math.min(n, l.earliestPresentationTime / l.timescale);
        const u = l.references.reduce((h, d) => h + d.info.duration || 0, 0);
        a = Math.max(a, u + l.earliestPresentationTime / l.timescale);
      }
    }
    a && G(a) && Object.keys(s).forEach((c) => {
      s[c].duration || (s[c].duration = a * s[c].timescale - s[c].start);
    });
  }
  return s;
}
function uh(r) {
  const e = {
    valid: null,
    remainder: null
  }, t = ie(r, ["moof"]);
  if (t.length < 2)
    return e.remainder = r, e;
  const s = t[t.length - 1];
  return e.valid = r.slice(0, s.byteOffset - 8), e.remainder = r.slice(s.byteOffset - 8), e;
}
function it(r, e) {
  const t = new Uint8Array(r.length + e.length);
  return t.set(r), t.set(e, r.length), t;
}
function ta(r, e) {
  const t = [], s = e.samples, i = e.timescale, n = e.id;
  let a = !1;
  return ie(s, ["moof"]).map((c) => {
    const l = c.byteOffset - 8;
    ie(c, ["traf"]).map((h) => {
      const d = ie(h, ["tfdt"]).map((f) => {
        const g = f[0];
        let p = ee(f, 4);
        return g === 1 && (p *= Math.pow(2, 32), p += ee(f, 8)), p / i;
      })[0];
      return d !== void 0 && (r = d), ie(h, ["tfhd"]).map((f) => {
        const g = ee(f, 4), p = ee(f, 0) & 16777215, y = (p & 1) !== 0, E = (p & 2) !== 0, T = (p & 8) !== 0;
        let S = 0;
        const v = (p & 16) !== 0;
        let x = 0;
        const C = (p & 32) !== 0;
        let A = 8;
        g === n && (y && (A += 8), E && (A += 4), T && (S = ee(f, A), A += 4), v && (x = ee(f, A), A += 4), C && (A += 4), e.type === "video" && (a = $i(e.codec)), ie(h, ["trun"]).map((R) => {
          const b = R[0], L = ee(R, 0) & 16777215, P = (L & 1) !== 0;
          let M = 0;
          const U = (L & 4) !== 0, H = (L & 256) !== 0;
          let K = 0;
          const F = (L & 512) !== 0;
          let V = 0;
          const B = (L & 1024) !== 0, j = (L & 2048) !== 0;
          let J = 0;
          const w = ee(R, 4);
          let $ = 8;
          P && (M = ee(R, $), $ += 4), U && ($ += 4);
          let Q = M + l;
          for (let oe = 0; oe < w; oe++) {
            if (H ? (K = ee(R, $), $ += 4) : K = S, F ? (V = ee(R, $), $ += 4) : V = x, B && ($ += 4), j && (b === 0 ? J = ee(R, $) : J = ko(R, $), $ += 4), e.type === fe.VIDEO) {
              let z = 0;
              for (; z < V; ) {
                const se = ee(s, Q);
                if (Q += 4, hh(a, s[Q])) {
                  const Se = s.subarray(Q, Q + se);
                  Zn(Se, a ? 2 : 1, r + J / i, t);
                }
                Q += se, z += se + 4;
              }
            }
            r += K / i;
          }
        }));
      });
    });
  }), t;
}
function $i(r) {
  if (!r)
    return !1;
  const e = r.substring(0, 4);
  return e === "hvc1" || e === "hev1" || // Dolby Vision
  e === "dvh1" || e === "dvhe";
}
function hh(r, e) {
  if (r) {
    const t = e >> 1 & 63;
    return t === 39 || t === 40;
  } else
    return (e & 31) === 6;
}
function Zn(r, e, t, s) {
  const i = Fo(r);
  let n = 0;
  n += e;
  let a = 0, o = 0, c = 0;
  for (; n < i.length; ) {
    a = 0;
    do {
      if (n >= i.length)
        break;
      c = i[n++], a += c;
    } while (c === 255);
    o = 0;
    do {
      if (n >= i.length)
        break;
      c = i[n++], o += c;
    } while (c === 255);
    const l = i.length - n;
    let u = n;
    if (o < l)
      n += o;
    else if (o > l) {
      ue.error(`Malformed SEI payload. ${o} is too small, only ${l} bytes left to parse.`);
      break;
    }
    if (a === 4) {
      if (i[u++] === 181) {
        const d = Po(i, u);
        if (u += 2, d === 49) {
          const f = ee(i, u);
          if (u += 4, f === 1195456820) {
            const g = i[u++];
            if (g === 3) {
              const p = i[u++], y = 31 & p, E = 64 & p, T = E ? 2 + y * 3 : 0, S = new Uint8Array(T);
              if (E) {
                S[0] = p;
                for (let v = 1; v < T; v++)
                  S[v] = i[u++];
              }
              s.push({
                type: g,
                payloadType: a,
                pts: t,
                bytes: S
              });
            }
          }
        }
      }
    } else if (a === 5 && o > 16) {
      const h = [];
      for (let g = 0; g < 16; g++) {
        const p = i[u++].toString(16);
        h.push(p.length == 1 ? "0" + p : p), (g === 3 || g === 5 || g === 7 || g === 9) && h.push("-");
      }
      const d = o - 16, f = new Uint8Array(d);
      for (let g = 0; g < d; g++)
        f[g] = i[u++];
      s.push({
        payloadType: a,
        pts: t,
        uuid: h.join(""),
        userData: Ze(f),
        userDataBytes: f
      });
    }
  }
}
function Fo(r) {
  const e = r.byteLength, t = [];
  let s = 1;
  for (; s < e - 2; )
    r[s] === 0 && r[s + 1] === 0 && r[s + 2] === 3 ? (t.push(s + 2), s += 2) : s++;
  if (t.length === 0)
    return r;
  const i = e - t.length, n = new Uint8Array(i);
  let a = 0;
  for (s = 0; s < i; a++, s++)
    a === t[0] && (a++, t.shift()), n[s] = r[a];
  return n;
}
function dh(r) {
  const e = r[0];
  let t = "", s = "", i = 0, n = 0, a = 0, o = 0, c = 0, l = 0;
  if (e === 0) {
    for (; be(r.subarray(l, l + 1)) !== "\0"; )
      t += be(r.subarray(l, l + 1)), l += 1;
    for (t += be(r.subarray(l, l + 1)), l += 1; be(r.subarray(l, l + 1)) !== "\0"; )
      s += be(r.subarray(l, l + 1)), l += 1;
    s += be(r.subarray(l, l + 1)), l += 1, i = ee(r, 12), n = ee(r, 16), o = ee(r, 20), c = ee(r, 24), l = 28;
  } else if (e === 1) {
    l += 4, i = ee(r, l), l += 4;
    const h = ee(r, l);
    l += 4;
    const d = ee(r, l);
    for (l += 4, a = 2 ** 32 * h + d, Ku(a) || (a = Number.MAX_SAFE_INTEGER, ue.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = ee(r, l), l += 4, c = ee(r, l), l += 4; be(r.subarray(l, l + 1)) !== "\0"; )
      t += be(r.subarray(l, l + 1)), l += 1;
    for (t += be(r.subarray(l, l + 1)), l += 1; be(r.subarray(l, l + 1)) !== "\0"; )
      s += be(r.subarray(l, l + 1)), l += 1;
    s += be(r.subarray(l, l + 1)), l += 1;
  }
  const u = r.subarray(l, r.byteLength);
  return {
    schemeIdUri: t,
    value: s,
    timeScale: i,
    presentationTime: a,
    presentationTimeDelta: n,
    eventDuration: o,
    id: c,
    payload: u
  };
}
function fh(r, ...e) {
  const t = e.length;
  let s = 8, i = t;
  for (; i--; )
    s += e[i].byteLength;
  const n = new Uint8Array(s);
  for (n[0] = s >> 24 & 255, n[1] = s >> 16 & 255, n[2] = s >> 8 & 255, n[3] = s & 255, n.set(r, 4), i = 0, s = 8; i < t; i++)
    n.set(e[i], s), s += e[i].byteLength;
  return n;
}
function gh(r, e, t) {
  if (r.byteLength !== 16)
    throw new RangeError("Invalid system id");
  let s, i;
  s = 0, i = new Uint8Array();
  let n;
  s > 0 ? (n = new Uint8Array(4), e.length > 0 && new DataView(n.buffer).setUint32(0, e.length, !1)) : n = new Uint8Array();
  const a = new Uint8Array(4);
  return t.byteLength > 0 && new DataView(a.buffer).setUint32(0, t.byteLength, !1), fh(
    [112, 115, 115, 104],
    new Uint8Array([
      s,
      0,
      0,
      0
      // Flags
    ]),
    r,
    // 16 bytes
    n,
    i,
    a,
    t
  );
}
function mh(r) {
  const e = [];
  if (r instanceof ArrayBuffer) {
    const t = r.byteLength;
    let s = 0;
    for (; s + 32 < t; ) {
      const i = new DataView(r, s), n = ph(i);
      e.push(n), s += n.size;
    }
  }
  return e;
}
function ph(r) {
  const e = r.getUint32(0), t = r.byteOffset, s = r.byteLength;
  if (s < e)
    return {
      offset: t,
      size: s
    };
  if (r.getUint32(4) !== 1886614376)
    return {
      offset: t,
      size: e
    };
  const n = r.getUint32(8) >>> 24;
  if (n !== 0 && n !== 1)
    return {
      offset: t,
      size: e
    };
  const a = r.buffer, o = $e(new Uint8Array(a, t + 12, 16));
  let c = null, l = null, u = 0;
  if (n === 0)
    u = 28;
  else {
    const d = r.getUint32(28);
    if (!d || s < 32 + d * 16)
      return {
        offset: t,
        size: e
      };
    c = [];
    for (let f = 0; f < d; f++)
      c.push(new Uint8Array(a, t + 32 + f * 16, 16));
    u = 32 + d * 16;
  }
  if (!u)
    return {
      offset: t,
      size: e
    };
  const h = r.getUint32(u);
  return e - 32 < h ? {
    offset: t,
    size: e
  } : (l = new Uint8Array(a, t + u + 4, h), {
    version: n,
    systemId: o,
    kids: c,
    data: l,
    offset: t,
    size: e
  });
}
const No = () => /\(Windows.+Firefox\//i.test(navigator.userAgent), us = {
  audio: {
    a3ds: 1,
    "ac-3": 0.95,
    "ac-4": 1,
    alac: 0.9,
    alaw: 1,
    dra1: 1,
    "dts+": 1,
    "dts-": 1,
    dtsc: 1,
    dtse: 1,
    dtsh: 1,
    "ec-3": 0.9,
    enca: 1,
    fLaC: 0.9,
    // MP4-RA listed codec entry for FLAC
    flac: 0.9,
    // legacy browser codec name for FLAC
    FLAC: 0.9,
    // some manifests may list "FLAC" with Apple's tools
    g719: 1,
    g726: 1,
    m4ae: 1,
    mha1: 1,
    mha2: 1,
    mhm1: 1,
    mhm2: 1,
    mlpa: 1,
    mp4a: 1,
    "raw ": 1,
    Opus: 1,
    opus: 1,
    // browsers expect this to be lowercase despite MP4RA says 'Opus'
    samr: 1,
    sawb: 1,
    sawp: 1,
    sevc: 1,
    sqcp: 1,
    ssmv: 1,
    twos: 1,
    ulaw: 1
  },
  video: {
    avc1: 1,
    avc2: 1,
    avc3: 1,
    avc4: 1,
    avcp: 1,
    av01: 0.8,
    dav1: 0.8,
    drac: 1,
    dva1: 1,
    dvav: 1,
    dvh1: 0.7,
    dvhe: 0.7,
    encv: 1,
    hev1: 0.75,
    hvc1: 0.75,
    mjp2: 1,
    mp4v: 1,
    mvc1: 1,
    mvc2: 1,
    mvc3: 1,
    mvc4: 1,
    resv: 1,
    rv60: 1,
    s263: 1,
    svc1: 1,
    svc2: 1,
    "vc-1": 1,
    vp08: 1,
    vp09: 0.9
  },
  text: {
    stpp: 1,
    wvtt: 1
  }
};
function Jn(r, e) {
  const t = us[e];
  return !!t && !!t[r.slice(0, 4)];
}
function Os(r, e, t = !0) {
  return !r.split(",").some((s) => !er(s, e, t));
}
function er(r, e, t = !0) {
  var s;
  const i = $t(t);
  return (s = i == null ? void 0 : i.isTypeSupported(Ms(r, e))) != null ? s : !1;
}
function Ms(r, e) {
  return `${e}/mp4;codecs=${r}`;
}
function sa(r) {
  if (r) {
    const e = r.substring(0, 4);
    return us.video[e];
  }
  return 2;
}
function xi(r) {
  const e = No();
  return r.split(",").reduce((t, s) => {
    const n = e && $i(s) ? 9 : us.video[s];
    return n ? (n * 2 + t) / (t ? 3 : 2) : (us.audio[s] + t) / (t ? 2 : 1);
  }, 0);
}
const rn = {};
function yh(r, e = !0) {
  if (rn[r])
    return rn[r];
  const t = {
    // Idealy fLaC and Opus would be first (spec-compliant) but
    // some browsers will report that fLaC is supported then fail.
    // see: https://bugs.chromium.org/p/chromium/issues/detail?id=1422728
    flac: ["flac", "fLaC", "FLAC"],
    opus: ["opus", "Opus"],
    // Replace audio codec info if browser does not support mp4a.40.34,
    // and demuxer can fallback to 'audio/mpeg' or 'audio/mp4;codecs="mp3"'
    "mp4a.40.34": ["mp3"]
  }[r];
  for (let i = 0; i < t.length; i++) {
    var s;
    if (er(t[i], "audio", e))
      return rn[r] = t[i], t[i];
    if (t[i] === "mp3" && (s = $t(e)) != null && s.isTypeSupported("audio/mpeg"))
      return "";
  }
  return r;
}
const Eh = /flac|opus|mp4a\.40\.34/i;
function Ai(r, e = !0) {
  return r.replace(Eh, (t) => yh(t.toLowerCase(), e));
}
function Th(r, e) {
  const t = [];
  if (r) {
    const s = r.split(",");
    for (let i = 0; i < s.length; i++)
      Jn(s[i], "video") || t.push(s[i]);
  }
  return e && t.push(e), t.join(",");
}
function fi(r, e) {
  if (r && (r.length > 4 || ["ac-3", "ec-3", "alac", "fLaC", "Opus"].indexOf(r) !== -1) && (ia(r, "audio") || ia(r, "video")))
    return r;
  if (e) {
    const t = e.split(",");
    if (t.length > 1) {
      if (r) {
        for (let s = t.length; s--; )
          if (t[s].substring(0, 4) === r.substring(0, 4))
            return t[s];
      }
      return t[0];
    }
  }
  return e || r;
}
function ia(r, e) {
  return Jn(r, e) && er(r, e);
}
function Sh(r) {
  const e = r.split(",");
  for (let t = 0; t < e.length; t++) {
    const s = e[t].split(".");
    s.length > 2 && s[0] === "avc1" && (e[t] = `avc1.${parseInt(s[1]).toString(16)}${("000" + parseInt(s[2]).toString(16)).slice(-4)}`);
  }
  return e.join(",");
}
function vh(r) {
  if (r.startsWith("av01.")) {
    const e = r.split("."), t = ["0", "111", "01", "01", "01", "0"];
    for (let s = e.length; s > 4 && s < 10; s++)
      e[s] = t[s - 4];
    return e.join(".");
  }
  return r;
}
function na(r) {
  const e = $t(r) || {
    isTypeSupported: () => !1
  };
  return {
    mpeg: e.isTypeSupported("audio/mpeg"),
    mp3: e.isTypeSupported('audio/mp4; codecs="mp3"'),
    ac3: e.isTypeSupported('audio/mp4; codecs="ac-3"')
  };
}
function kn(r) {
  return r.replace(/^.+codecs=["']?([^"']+).*$/, "$1");
}
const xh = {
  supported: !0,
  powerEfficient: !0,
  smooth: !0
  // keySystemAccess: null,
}, Ah = {
  supported: !1,
  smooth: !1,
  powerEfficient: !1
  // keySystemAccess: null,
}, $o = {
  supported: !0,
  configurations: [],
  decodingInfoResults: [xh]
};
function Bo(r, e) {
  return {
    supported: !1,
    configurations: e,
    decodingInfoResults: [Ah],
    error: r
  };
}
function Ih(r, e, t, s, i, n) {
  const a = r.videoCodec, o = r.audioCodec ? r.audioGroups : null, c = n == null ? void 0 : n.audioCodec, l = n == null ? void 0 : n.channels, u = l ? parseInt(l) : c ? 1 / 0 : 2;
  let h = null;
  if (o != null && o.length)
    try {
      o.length === 1 && o[0] ? h = e.groups[o[0]].channels : h = o.reduce((d, f) => {
        if (f) {
          const g = e.groups[f];
          if (!g)
            throw new Error(`Audio track group ${f} not found`);
          Object.keys(g.channels).forEach((p) => {
            d[p] = (d[p] || 0) + g.channels[p];
          });
        }
        return d;
      }, {
        2: 0
      });
    } catch {
      return !0;
    }
  return a !== void 0 && // Force media capabilities check for HEVC to avoid failure on Windows
  (a.split(",").some((d) => $i(d)) || r.width > 1920 && r.height > 1088 || r.height > 1920 && r.width > 1088 || r.frameRate > Math.max(s, 30) || r.videoRange !== "SDR" && r.videoRange !== t || r.bitrate > Math.max(i, 8e6)) || !!h && G(u) && Object.keys(h).some((d) => parseInt(d) > u);
}
function Uo(r, e, t, s = {}) {
  const i = r.videoCodec;
  if (!i && !r.audioCodec || !t)
    return Promise.resolve($o);
  const n = [], a = Lh(r), o = a.length, c = bh(r, e, o > 0), l = c.length;
  for (let u = o || 1 * l || 1; u--; ) {
    const h = {
      type: "media-source"
    };
    if (o && (h.video = a[u % o]), l) {
      h.audio = c[u % l];
      const d = h.audio.bitrate;
      h.video && d && (h.video.bitrate -= d);
    }
    n.push(h);
  }
  if (i) {
    const u = navigator.userAgent;
    if (i.split(",").some((h) => $i(h)) && No())
      return Promise.resolve(Bo(new Error(`Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent string: (${u})`), n));
  }
  return Promise.all(n.map((u) => {
    const h = _h(u);
    return s[h] || (s[h] = t.decodingInfo(u));
  })).then((u) => ({
    supported: !u.some((h) => !h.supported),
    configurations: n,
    decodingInfoResults: u
  })).catch((u) => ({
    supported: !1,
    configurations: n,
    decodingInfoResults: [],
    error: u
  }));
}
function Lh(r) {
  var e;
  const t = (e = r.videoCodec) == null ? void 0 : e.split(","), s = Go(r), i = r.width || 640, n = r.height || 480, a = r.frameRate || 30, o = r.videoRange.toLowerCase();
  return t ? t.map((c) => {
    const l = {
      contentType: Ms(vh(c), "video"),
      width: i,
      height: n,
      bitrate: s,
      framerate: a
    };
    return o !== "sdr" && (l.transferFunction = o), l;
  }) : [];
}
function bh(r, e, t) {
  var s;
  const i = (s = r.audioCodec) == null ? void 0 : s.split(","), n = Go(r);
  return i && r.audioGroups ? r.audioGroups.reduce((a, o) => {
    var c;
    const l = o ? (c = e.groups[o]) == null ? void 0 : c.tracks : null;
    return l ? l.reduce((u, h) => {
      if (h.groupId === o) {
        const d = parseFloat(h.channels || "");
        i.forEach((f) => {
          const g = {
            contentType: Ms(f, "audio"),
            bitrate: t ? Rh(f, n) : n
          };
          d && (g.channels = "" + d), u.push(g);
        });
      }
      return u;
    }, a) : a;
  }, []) : [];
}
function Rh(r, e) {
  if (e <= 1)
    return 1;
  let t = 128e3;
  return r === "ec-3" ? t = 768e3 : r === "ac-3" && (t = 64e4), Math.min(e / 2, t);
}
function Go(r) {
  return Math.ceil(Math.max(r.bitrate * 0.9, r.averageBitrate) / 1e3) * 1e3 || 1;
}
function _h(r) {
  let e = "";
  const {
    audio: t,
    video: s
  } = r;
  if (s) {
    const i = kn(s.contentType);
    e += `${i}_r${s.height}x${s.width}f${Math.ceil(s.framerate)}${s.transferFunction || "sd"}_${Math.ceil(s.bitrate / 1e5)}`;
  }
  if (t) {
    const i = kn(t.contentType);
    e += `${s ? "_" : ""}${i}_c${t.channels}`;
  }
  return e;
}
const wn = ["NONE", "TYPE-0", "TYPE-1", null];
function Dh(r) {
  return wn.indexOf(r) > -1;
}
const Ii = ["SDR", "PQ", "HLG"];
function Ch(r) {
  return !!r && Ii.indexOf(r) > -1;
}
var gi = {
  No: "",
  Yes: "YES",
  v2: "v2"
};
function ra(r) {
  const {
    canSkipUntil: e,
    canSkipDateRanges: t,
    age: s
  } = r, i = s < e / 2;
  return e && i ? t ? gi.v2 : gi.Yes : gi.No;
}
class aa {
  constructor(e, t, s) {
    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e, this.part = t, this.skip = s;
  }
  addDirectives(e) {
    const t = new self.URL(e);
    return this.msn !== void 0 && t.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href;
  }
}
class Fs {
  constructor(e) {
    if (this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.supplemental = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [e.url], this._attrs = [e.attrs], this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.frameRate = e.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = e.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.codecSet = [e.videoCodec, e.audioCodec].filter((s) => !!s).map((s) => s.substring(0, 4)).join(","), "supplemental" in e) {
      var t;
      this.supplemental = e.supplemental;
      const s = (t = e.supplemental) == null ? void 0 : t.videoCodec;
      s && s !== e.videoCodec && (this.codecSet += `,${s.substring(0, 4)}`);
    }
    this.addGroupId("audio", e.attrs.AUDIO), this.addGroupId("text", e.attrs.SUBTITLES);
  }
  get maxBitrate() {
    return Math.max(this.realBitrate, this.bitrate);
  }
  get averageBitrate() {
    return this._avgBitrate || this.realBitrate || this.bitrate;
  }
  get attrs() {
    return this._attrs[0];
  }
  get codecs() {
    return this.attrs.CODECS || "";
  }
  get pathwayId() {
    return this.attrs["PATHWAY-ID"] || ".";
  }
  get videoRange() {
    return this.attrs["VIDEO-RANGE"] || "SDR";
  }
  get score() {
    return this.attrs.optionalFloat("SCORE", 0);
  }
  get uri() {
    return this.url[0] || "";
  }
  hasAudioGroup(e) {
    return oa(this._audioGroups, e);
  }
  hasSubtitleGroup(e) {
    return oa(this._subtitleGroups, e);
  }
  get audioGroups() {
    return this._audioGroups;
  }
  get subtitleGroups() {
    return this._subtitleGroups;
  }
  addGroupId(e, t) {
    if (t) {
      if (e === "audio") {
        let s = this._audioGroups;
        s || (s = this._audioGroups = []), s.indexOf(t) === -1 && s.push(t);
      } else if (e === "text") {
        let s = this._subtitleGroups;
        s || (s = this._subtitleGroups = []), s.indexOf(t) === -1 && s.push(t);
      }
    }
  }
  // Deprecated methods (retained for backwards compatibility)
  get urlId() {
    return 0;
  }
  set urlId(e) {
  }
  get audioGroupIds() {
    return this.audioGroups ? [this.audioGroupId] : void 0;
  }
  get textGroupIds() {
    return this.subtitleGroups ? [this.textGroupId] : void 0;
  }
  get audioGroupId() {
    var e;
    return (e = this.audioGroups) == null ? void 0 : e[0];
  }
  get textGroupId() {
    var e;
    return (e = this.subtitleGroups) == null ? void 0 : e[0];
  }
  addFallback() {
  }
}
function oa(r, e) {
  return !e || !r ? !1 : r.indexOf(e) !== -1;
}
function Ph() {
  if (typeof matchMedia == "function") {
    const r = matchMedia("(dynamic-range: high)"), e = matchMedia("bad query");
    if (r.media !== e.media)
      return r.matches === !0;
  }
  return !1;
}
function kh(r, e) {
  let t = !1, s = [];
  if (r && (t = r !== "SDR", s = [r]), e) {
    s = e.allowedVideoRanges || Ii.slice(0);
    const i = s.join("") !== "SDR" && !e.videoCodec;
    t = e.preferHDR !== void 0 ? e.preferHDR : i && Ph(), t || (s = ["SDR"]);
  }
  return {
    preferHDR: t,
    allowedVideoRanges: s
  };
}
const wh = (r) => {
  const e = /* @__PURE__ */ new WeakSet();
  return (t, s) => {
    if (r && (s = r(t, s)), typeof s == "object" && s !== null) {
      if (e.has(s))
        return;
      e.add(s);
    }
    return s;
  };
}, ge = (r, e) => JSON.stringify(r, wh(e));
function Oh(r, e, t, s, i) {
  const n = Object.keys(r), a = s == null ? void 0 : s.channels, o = s == null ? void 0 : s.audioCodec, c = i == null ? void 0 : i.videoCodec, l = a && parseInt(a) === 2;
  let u = !1, h = !1, d = 1 / 0, f = 1 / 0, g = 1 / 0, p = 1 / 0, y = 0, E = [];
  const {
    preferHDR: T,
    allowedVideoRanges: S
  } = kh(e, i);
  for (let R = n.length; R--; ) {
    const b = r[n[R]];
    u || (u = b.channels[2] > 0), d = Math.min(d, b.minHeight), f = Math.min(f, b.minFramerate), g = Math.min(g, b.minBitrate), S.filter((P) => b.videoRanges[P] > 0).length > 0 && (h = !0);
  }
  d = G(d) ? d : 0, f = G(f) ? f : 0;
  const v = Math.max(1080, d), x = Math.max(30, f);
  g = G(g) ? g : t, t = Math.max(g, t), h || (e = void 0);
  const C = n.length > 1;
  return {
    codecSet: n.reduce((R, b) => {
      const L = r[b];
      if (b === R)
        return R;
      if (E = h ? S.filter((P) => L.videoRanges[P] > 0) : [], C) {
        if (L.minBitrate > t)
          return ht(b, `min bitrate of ${L.minBitrate} > current estimate of ${t}`), R;
        if (!L.hasDefaultAudio)
          return ht(b, "no renditions with default or auto-select sound found"), R;
        if (o && b.indexOf(o.substring(0, 4)) % 5 !== 0)
          return ht(b, `audio codec preference "${o}" not found`), R;
        if (a && !l) {
          if (!L.channels[a])
            return ht(b, `no renditions with ${a} channel sound found (channels options: ${Object.keys(L.channels)})`), R;
        } else if ((!o || l) && u && L.channels[2] === 0)
          return ht(b, "no renditions with stereo sound found"), R;
        if (L.minHeight > v)
          return ht(b, `min resolution of ${L.minHeight} > maximum of ${v}`), R;
        if (L.minFramerate > x)
          return ht(b, `min framerate of ${L.minFramerate} > maximum of ${x}`), R;
        if (!E.some((P) => L.videoRanges[P] > 0))
          return ht(b, `no variants with VIDEO-RANGE of ${ge(E)} found`), R;
        if (c && b.indexOf(c.substring(0, 4)) % 5 !== 0)
          return ht(b, `video codec preference "${c}" not found`), R;
        if (L.maxScore < y)
          return ht(b, `max score of ${L.maxScore} < selected max of ${y}`), R;
      }
      return R && (xi(b) >= xi(R) || L.fragmentError > r[R].fragmentError) ? R : (p = L.minIndex, y = L.maxScore, b);
    }, void 0),
    videoRanges: E,
    preferHDR: T,
    minFramerate: f,
    minBitrate: g,
    minIndex: p
  };
}
function ht(r, e) {
  ue.log(`[abr] start candidates with "${r}" ignored because ${e}`);
}
function Ko(r) {
  return r.reduce((e, t) => {
    let s = e.groups[t.groupId];
    s || (s = e.groups[t.groupId] = {
      tracks: [],
      channels: {
        2: 0
      },
      hasDefault: !1,
      hasAutoSelect: !1
    }), s.tracks.push(t);
    const i = t.channels || "2";
    return s.channels[i] = (s.channels[i] || 0) + 1, s.hasDefault = s.hasDefault || t.default, s.hasAutoSelect = s.hasAutoSelect || t.autoselect, s.hasDefault && (e.hasDefaultAudio = !0), s.hasAutoSelect && (e.hasAutoSelectAudio = !0), e;
  }, {
    hasDefaultAudio: !1,
    hasAutoSelectAudio: !1,
    groups: {}
  });
}
function Mh(r, e, t, s) {
  return r.slice(t, s + 1).reduce((i, n, a) => {
    if (!n.codecSet)
      return i;
    const o = n.audioGroups;
    let c = i[n.codecSet];
    c || (i[n.codecSet] = c = {
      minBitrate: 1 / 0,
      minHeight: 1 / 0,
      minFramerate: 1 / 0,
      minIndex: a,
      maxScore: 0,
      videoRanges: {
        SDR: 0
      },
      channels: {
        2: 0
      },
      hasDefaultAudio: !o,
      fragmentError: 0
    }), c.minBitrate = Math.min(c.minBitrate, n.bitrate);
    const l = Math.min(n.height, n.width);
    return c.minHeight = Math.min(c.minHeight, l), c.minFramerate = Math.min(c.minFramerate, n.frameRate), c.minIndex = Math.min(c.minIndex, a), c.maxScore = Math.max(c.maxScore, n.score), c.fragmentError += n.fragmentError, c.videoRanges[n.videoRange] = (c.videoRanges[n.videoRange] || 0) + 1, o && o.forEach((u) => {
      if (!u)
        return;
      const h = e.groups[u];
      h && (c.hasDefaultAudio = c.hasDefaultAudio || e.hasDefaultAudio ? h.hasDefault : h.hasAutoSelect || !e.hasDefaultAudio && !e.hasAutoSelectAudio, Object.keys(h.channels).forEach((d) => {
        c.channels[d] = (c.channels[d] || 0) + h.channels[d];
      }));
    }), i;
  }, {});
}
function la(r) {
  if (!r)
    return r;
  const {
    lang: e,
    assocLang: t,
    characteristics: s,
    channels: i,
    audioCodec: n
  } = r;
  return {
    lang: e,
    assocLang: t,
    characteristics: s,
    channels: i,
    audioCodec: n
  };
}
function pt(r, e, t) {
  if ("attrs" in r) {
    const s = e.indexOf(r);
    if (s !== -1)
      return s;
  }
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (Yt(r, i, t))
      return s;
  }
  return -1;
}
function Yt(r, e, t) {
  const {
    groupId: s,
    name: i,
    lang: n,
    assocLang: a,
    default: o
  } = r, c = r.forced;
  return (s === void 0 || e.groupId === s) && (i === void 0 || e.name === i) && (n === void 0 || Fh(n, e.lang)) && (n === void 0 || e.assocLang === a) && (o === void 0 || e.default === o) && (c === void 0 || e.forced === c) && (!("characteristics" in r) || Nh(r.characteristics || "", e.characteristics)) && (t === void 0 || t(r, e));
}
function Fh(r, e = "--") {
  return r.length === e.length ? r === e : r.startsWith(e) || e.startsWith(r);
}
function Nh(r, e = "") {
  const t = r.split(","), s = e.split(",");
  return t.length === s.length && !t.some((i) => s.indexOf(i) === -1);
}
function Vt(r, e) {
  const {
    audioCodec: t,
    channels: s
  } = r;
  return (t === void 0 || (e.audioCodec || "").substring(0, 4) === t.substring(0, 4)) && (s === void 0 || s === (e.channels || "2"));
}
function $h(r, e, t, s, i) {
  const n = e[s], o = e.reduce((d, f, g) => {
    const p = f.uri;
    return (d[p] || (d[p] = [])).push(g), d;
  }, {})[n.uri];
  o.length > 1 && (s = Math.max.apply(Math, o));
  const c = n.videoRange, l = n.frameRate, u = n.codecSet.substring(0, 4), h = ca(e, s, (d) => {
    if (d.videoRange !== c || d.frameRate !== l || d.codecSet.substring(0, 4) !== u)
      return !1;
    const f = d.audioGroups, g = t.filter((p) => !f || f.indexOf(p.groupId) !== -1);
    return pt(r, g, i) > -1;
  });
  return h > -1 ? h : ca(e, s, (d) => {
    const f = d.audioGroups, g = t.filter((p) => !f || f.indexOf(p.groupId) !== -1);
    return pt(r, g, i) > -1;
  });
}
function ca(r, e, t) {
  for (let s = e; s > -1; s--)
    if (t(r[s]))
      return s;
  for (let s = e + 1; s < r.length; s++)
    if (t(r[s]))
      return s;
  return -1;
}
function Li(r, e) {
  var t;
  return !!r && r !== ((t = e.loadLevelObj) == null ? void 0 : t.uri);
}
class Bh extends nt {
  constructor(e) {
    super("abr", e.logger), this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.rebufferNotice = -1, this.supportedCache = {}, this.bwEstimator = void 0, this._abandonRulesCheck = (t) => {
      var s;
      const {
        fragCurrent: i,
        partCurrent: n,
        hls: a
      } = this, {
        autoLevelEnabled: o,
        media: c
      } = a;
      if (!i || !c)
        return;
      const l = performance.now(), u = n ? n.stats : i.stats, h = n ? n.duration : i.duration, d = l - u.loading.start, f = a.minAutoLevel, g = i.level, p = this._nextAutoLevel;
      if (u.aborted || u.loaded && u.loaded === u.total || g <= f) {
        this.clearTimer(), this._nextAutoLevel = -1;
        return;
      }
      if (!o)
        return;
      const y = p > -1 && p !== g, E = !!t || y;
      if (!E && (c.paused || !c.playbackRate || !c.readyState))
        return;
      const T = a.mainForwardBufferInfo;
      if (!E && T === null)
        return;
      const S = this.bwEstimator.getEstimateTTFB(), v = Math.abs(c.playbackRate);
      if (d <= Math.max(S, 1e3 * (h / (v * 2))))
        return;
      const x = T ? T.len / v : 0, C = u.loading.first ? u.loading.first - u.loading.start : -1, A = u.loaded && C > -1, R = this.getBwEstimate(), b = a.levels, L = b[g], P = Math.max(u.loaded, Math.round(h * (i.bitrate || L.averageBitrate) / 8));
      let M = A ? d - C : d;
      M < 1 && A && (M = Math.min(d, u.loaded * 8 / R));
      const U = A ? u.loaded * 1e3 / M : 0, H = S / 1e3, K = U ? (P - u.loaded) / U : P * 8 / R + H;
      if (K <= x)
        return;
      const F = U ? U * 8 : R, V = ((s = (t == null ? void 0 : t.details) || this.hls.latestLevelDetails) == null ? void 0 : s.live) === !0, B = this.hls.config.abrBandWidthUpFactor;
      let j = Number.POSITIVE_INFINITY, J;
      for (J = g - 1; J > f; J--) {
        const oe = b[J].maxBitrate, z = !b[J].details || V;
        if (j = this.getTimeToLoadFrag(H, F, h * oe, z), j < Math.min(x, h + H))
          break;
      }
      if (j >= K || j > h * 10)
        return;
      A ? this.bwEstimator.sample(d - Math.min(S, C), u.loaded) : this.bwEstimator.sampleTTFB(d);
      const w = b[J].maxBitrate;
      this.getBwEstimate() * B > w && this.resetEstimator(w);
      const $ = this.findBestLevel(w, f, J, 0, x, 1, 1);
      $ > -1 && (J = $), this.warn(`Fragment ${i.sn}${n ? " part " + n.index : ""} of level ${g} is loading too slowly;
      Fragment duration: ${i.duration.toFixed(3)}
      Time to underbuffer: ${x.toFixed(3)} s
      Estimated load time for current fragment: ${K.toFixed(3)} s
      Estimated load time for down switch fragment: ${j.toFixed(3)} s
      TTFB estimate: ${C | 0} ms
      Current BW estimate: ${G(R) ? R | 0 : "Unknown"} bps
      New BW estimate: ${this.getBwEstimate() | 0} bps
      Switching to level ${J} @ ${w | 0} bps`), a.nextLoadLevel = a.nextAutoLevel = J, this.clearTimer();
      const Q = () => {
        if (this.clearTimer(), this.fragCurrent === i && this.hls.loadLevel === J && J > 0) {
          const oe = this.getStarvationDelay();
          if (this.warn(`Aborting inflight request ${J > 0 ? "and switching down" : ""}
      Fragment duration: ${i.duration.toFixed(3)} s
      Time to underbuffer: ${oe.toFixed(3)} s`), i.abortRequests(), this.fragCurrent = this.partCurrent = null, J > f) {
            let z = this.findBestLevel(this.hls.levels[f].bitrate, f, J, 0, oe, 1, 1);
            z === -1 && (z = f), this.hls.nextLoadLevel = this.hls.nextAutoLevel = z, this.resetEstimator(this.hls.levels[z].bitrate);
          }
        }
      };
      y || K > j * 2 ? Q() : this.timer = self.setInterval(Q, j * 1e3), a.trigger(m.FRAG_LOAD_EMERGENCY_ABORTED, {
        frag: i,
        part: n,
        stats: u
      });
    }, this.hls = e, this.bwEstimator = this.initEstimator(), this.registerListeners();
  }
  resetEstimator(e) {
    e && (this.log(`setting initial bwe to ${e}`), this.hls.config.abrEwmaDefaultEstimate = e), this.firstSelection = -1, this.bwEstimator = this.initEstimator();
  }
  initEstimator() {
    const e = this.hls.config;
    return new Hu(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate);
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.FRAG_LOADING, this.onFragLoading, this), e.on(m.FRAG_LOADED, this.onFragLoaded, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this), e.on(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.FRAG_LOADING, this.onFragLoading, this), e.off(m.FRAG_LOADED, this.onFragLoaded, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this), e.off(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.off(m.ERROR, this.onError, this));
  }
  destroy() {
    this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = this.supportedCache = null, this.fragCurrent = this.partCurrent = null;
  }
  onManifestLoading(e, t) {
    this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.supportedCache = {}, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer();
  }
  onLevelsUpdated() {
    this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null;
  }
  onMaxAutoLevelUpdated() {
    this.firstSelection = -1, this.nextAutoLevelKey = "";
  }
  onFragLoading(e, t) {
    const s = t.frag;
    if (!this.ignoreFragment(s)) {
      if (!s.bitrateTest) {
        var i;
        this.fragCurrent = s, this.partCurrent = (i = t.part) != null ? i : null;
      }
      this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100);
    }
  }
  onLevelSwitching(e, t) {
    this.clearTimer();
  }
  onError(e, t) {
    if (!t.fatal)
      switch (t.details) {
        case D.BUFFER_ADD_CODEC_ERROR:
        case D.BUFFER_APPEND_ERROR:
          this.lastLoadedFragLevel = -1, this.firstSelection = -1;
          break;
        case D.FRAG_LOAD_TIMEOUT: {
          const s = t.frag, {
            fragCurrent: i,
            partCurrent: n
          } = this;
          if (s && i && s.sn === i.sn && s.level === i.level) {
            const a = performance.now(), o = n ? n.stats : s.stats, c = a - o.loading.start, l = o.loading.first ? o.loading.first - o.loading.start : -1;
            if (o.loaded && l > -1) {
              const h = this.bwEstimator.getEstimateTTFB();
              this.bwEstimator.sample(c - Math.min(h, l), o.loaded);
            } else
              this.bwEstimator.sampleTTFB(c);
          }
          break;
        }
      }
  }
  getTimeToLoadFrag(e, t, s, i) {
    const n = e + s / t, a = i ? e + this.lastLevelLoadSec : 0;
    return n + a;
  }
  onLevelLoaded(e, t) {
    const s = this.hls.config, {
      loading: i
    } = t.stats, n = i.end - i.first;
    G(n) && (this.lastLevelLoadSec = n / 1e3), t.details.live ? this.bwEstimator.update(s.abrEwmaSlowLive, s.abrEwmaFastLive) : this.bwEstimator.update(s.abrEwmaSlowVoD, s.abrEwmaFastVoD), this.timer > -1 && this._abandonRulesCheck(t.levelInfo);
  }
  onFragLoaded(e, {
    frag: t,
    part: s
  }) {
    const i = s ? s.stats : t.stats;
    if (t.type === W.MAIN && this.bwEstimator.sampleTTFB(i.loading.first - i.loading.start), !this.ignoreFragment(t)) {
      if (this.clearTimer(), t.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
        const n = s ? s.duration : t.duration, a = this.hls.levels[t.level], o = (a.loaded ? a.loaded.bytes : 0) + i.loaded, c = (a.loaded ? a.loaded.duration : 0) + n;
        a.loaded = {
          bytes: o,
          duration: c
        }, a.realBitrate = Math.round(8 * o / c);
      }
      if (t.bitrateTest) {
        const n = {
          stats: i,
          frag: t,
          part: s,
          id: t.type
        };
        this.onFragBuffered(m.FRAG_BUFFERED, n), t.bitrateTest = !1;
      } else
        this.lastLoadedFragLevel = t.level;
    }
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t, n = i != null && i.stats.loaded ? i.stats : s.stats;
    if (n.aborted || this.ignoreFragment(s))
      return;
    const a = n.parsing.end - n.loading.start - Math.min(n.loading.first - n.loading.start, this.bwEstimator.getEstimateTTFB());
    this.bwEstimator.sample(a, n.loaded), n.bwEstimate = this.getBwEstimate(), s.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0;
  }
  ignoreFragment(e) {
    return e.type !== W.MAIN || e.sn === "initSegment";
  }
  clearTimer() {
    this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1);
  }
  get firstAutoLevel() {
    const {
      maxAutoLevel: e,
      minAutoLevel: t
    } = this.hls, s = this.getBwEstimate(), i = this.hls.config.maxStarvationDelay, n = this.findBestLevel(s, t, e, 0, i, 1, 1);
    if (n > -1)
      return n;
    const a = this.hls.firstLevel, o = Math.min(Math.max(a, t), e);
    return this.warn(`Could not find best starting auto level. Defaulting to first in playlist ${a} clamped to ${o}`), o;
  }
  get forcedAutoLevel() {
    return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
  }
  // return next auto level
  get nextAutoLevel() {
    const e = this.forcedAutoLevel, s = this.bwEstimator.canEstimate(), i = this.lastLoadedFragLevel > -1;
    if (e !== -1 && (!s || !i || this.nextAutoLevelKey === this.getAutoLevelKey()))
      return e;
    const n = s && i ? this.getNextABRAutoLevel() : this.firstAutoLevel;
    if (e !== -1) {
      const a = this.hls.levels;
      if (a.length > Math.max(e, n) && a[e].loadError <= a[n].loadError)
        return e;
    }
    return this._nextAutoLevel = n, this.nextAutoLevelKey = this.getAutoLevelKey(), n;
  }
  getAutoLevelKey() {
    return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`;
  }
  getNextABRAutoLevel() {
    const {
      fragCurrent: e,
      partCurrent: t,
      hls: s
    } = this;
    if (s.levels.length <= 1)
      return s.loadLevel;
    const {
      maxAutoLevel: i,
      config: n,
      minAutoLevel: a
    } = s, o = t ? t.duration : e ? e.duration : 0, c = this.getBwEstimate(), l = this.getStarvationDelay();
    let u = n.abrBandWidthFactor, h = n.abrBandWidthUpFactor;
    if (l) {
      const y = this.findBestLevel(c, a, i, l, 0, u, h);
      if (y >= 0)
        return this.rebufferNotice = -1, y;
    }
    let d = o ? Math.min(o, n.maxStarvationDelay) : n.maxStarvationDelay;
    if (!l) {
      const y = this.bitrateTestDelay;
      y && (d = (o ? Math.min(o, n.maxLoadingDelay) : n.maxLoadingDelay) - y, this.info(`bitrate test took ${Math.round(1e3 * y)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * d)} ms`), u = h = 1);
    }
    const f = this.findBestLevel(c, a, i, l, d, u, h);
    if (this.rebufferNotice !== f && (this.rebufferNotice = f, this.info(`${l ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${f}`)), f > -1)
      return f;
    const g = s.levels[a], p = s.loadLevelObj;
    return p && (g == null ? void 0 : g.bitrate) < p.bitrate ? a : s.loadLevel;
  }
  getStarvationDelay() {
    const e = this.hls, t = e.media;
    if (!t)
      return 1 / 0;
    const s = t && t.playbackRate !== 0 ? Math.abs(t.playbackRate) : 1, i = e.mainForwardBufferInfo;
    return (i ? i.len : 0) / s;
  }
  getBwEstimate() {
    return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
  }
  findBestLevel(e, t, s, i, n, a, o) {
    var c;
    const l = i + n, u = this.lastLoadedFragLevel, h = u === -1 ? this.hls.firstLevel : u, {
      fragCurrent: d,
      partCurrent: f
    } = this, {
      levels: g,
      allAudioTracks: p,
      loadLevel: y,
      config: E
    } = this.hls;
    if (g.length === 1)
      return 0;
    const T = g[h], S = !!((c = this.hls.latestLevelDetails) != null && c.live), v = y === -1 || u === -1;
    let x, C = "SDR", A = (T == null ? void 0 : T.frameRate) || 0;
    const {
      audioPreference: R,
      videoPreference: b
    } = E, L = this.audioTracksByGroup || (this.audioTracksByGroup = Ko(p));
    let P = -1;
    if (v) {
      if (this.firstSelection !== -1)
        return this.firstSelection;
      const F = this.codecTiers || (this.codecTiers = Mh(g, L, t, s)), V = Oh(F, C, e, R, b), {
        codecSet: B,
        videoRanges: j,
        minFramerate: J,
        minBitrate: w,
        minIndex: $,
        preferHDR: Q
      } = V;
      P = $, x = B, C = Q ? j[j.length - 1] : j[0], A = J, e = Math.max(e, w), this.log(`picked start tier ${ge(V)}`);
    } else
      x = T == null ? void 0 : T.codecSet, C = T == null ? void 0 : T.videoRange;
    const M = f ? f.duration : d ? d.duration : 0, U = this.bwEstimator.getEstimateTTFB() / 1e3, H = [];
    for (let F = s; F >= t; F--) {
      var K;
      const V = g[F], B = F > h;
      if (!V)
        continue;
      if (E.useMediaCapabilities && !V.supportedResult && !V.supportedPromise) {
        const z = navigator.mediaCapabilities;
        typeof (z == null ? void 0 : z.decodingInfo) == "function" && Ih(V, L, C, A, e, R) ? (V.supportedPromise = Uo(V, L, z, this.supportedCache), V.supportedPromise.then((se) => {
          if (!this.hls)
            return;
          V.supportedResult = se;
          const Se = this.hls.levels, me = Se.indexOf(V);
          se.error ? this.warn(`MediaCapabilities decodingInfo error: "${se.error}" for level ${me} ${ge(se)}`) : se.supported ? se.decodingInfoResults.some((Me) => Me.smooth === !1 || Me.powerEfficient === !1) && this.log(`MediaCapabilities decodingInfo for level ${me} not smooth or powerEfficient: ${ge(se)}`) : (this.warn(`Unsupported MediaCapabilities decodingInfo result for level ${me} ${ge(se)}`), me > -1 && Se.length > 1 && (this.log(`Removing unsupported level ${me}`), this.hls.removeLevel(me), this.hls.loadLevel === -1 && (this.hls.nextLoadLevel = 0)));
        }).catch((se) => {
          this.warn(`Error handling MediaCapabilities decodingInfo: ${se}`);
        })) : V.supportedResult = $o;
      }
      if ((x && V.codecSet !== x || C && V.videoRange !== C || B && A > V.frameRate || !B && A > 0 && A < V.frameRate || (K = V.supportedResult) != null && (K = K.decodingInfoResults) != null && K.some((z) => z.smooth === !1)) && (!v || F !== P)) {
        H.push(F);
        continue;
      }
      const j = V.details, J = (f ? j == null ? void 0 : j.partTarget : j == null ? void 0 : j.averagetargetduration) || M;
      let w;
      B ? w = o * e : w = a * e;
      const $ = M && i >= M * 2 && n === 0 ? V.averageBitrate : V.maxBitrate, Q = this.getTimeToLoadFrag(U, w, $ * J, j === void 0);
      if (
        // if adjusted bw is greater than level bitrate AND
        w >= $ && // no level change, or new level has no error history
        (F === u || V.loadError === 0 && V.fragmentError === 0) && // fragment fetchDuration unknown OR live stream OR fragment fetchDuration less than max allowed fetch duration, then this level matches
        // we don't account for max Fetch Duration for live streams, this is to avoid switching down when near the edge of live sliding window ...
        // special case to support startLevel = -1 (bitrateTest) on live streams : in that case we should not exit loop so that findBestLevel will return -1
        (Q <= U || !G(Q) || S && !this.bitrateTestDelay || Q < l)
      ) {
        const z = this.forcedAutoLevel;
        return F !== y && (z === -1 || z !== y) && (H.length && this.trace(`Skipped level(s) ${H.join(",")} of ${s} max with CODECS and VIDEO-RANGE:"${g[H[0]].codecs}" ${g[H[0]].videoRange}; not compatible with "${x}" ${C}`), this.info(`switch candidate:${h}->${F} adjustedbw(${Math.round(w)})-bitrate=${Math.round(w - $)} ttfb:${U.toFixed(1)} avgDuration:${J.toFixed(1)} maxFetchDuration:${l.toFixed(1)} fetchDuration:${Q.toFixed(1)} firstSelection:${v} codecSet:${V.codecSet} videoRange:${V.videoRange} hls.loadLevel:${y}`)), v && (this.firstSelection = F), F;
      }
    }
    return -1;
  }
  set nextAutoLevel(e) {
    const t = this.deriveNextAutoLevel(e);
    this._nextAutoLevel !== t && (this.nextAutoLevelKey = "", this._nextAutoLevel = t);
  }
  deriveNextAutoLevel(e) {
    const {
      maxAutoLevel: t,
      minAutoLevel: s
    } = this.hls;
    return Math.min(Math.max(e, s), t);
  }
}
const Vo = {
  /**
   * Searches for an item in an array which matches a certain condition.
   * This requires the condition to only match one item in the array,
   * and for the array to be ordered.
   *
   * @param list The array to search.
   * @param comparisonFn
   *      Called and provided a candidate item as the first argument.
   *      Should return:
   *          > -1 if the item should be located at a lower index than the provided item.
   *          > 1 if the item should be located at a higher index than the provided item.
   *          > 0 if the item is the item you're looking for.
   *
   * @returns the object if found, otherwise returns null
   */
  search: function(r, e) {
    let t = 0, s = r.length - 1, i = null, n = null;
    for (; t <= s; ) {
      i = (t + s) / 2 | 0, n = r[i];
      const a = e(n);
      if (a > 0)
        t = i + 1;
      else if (a < 0)
        s = i - 1;
      else
        return n;
    }
    return null;
  }
};
function Uh(r, e, t) {
  if (e === null || !Array.isArray(r) || !r.length || !G(e))
    return null;
  const s = r[0].programDateTime;
  if (e < (s || 0))
    return null;
  const i = r[r.length - 1].endProgramDateTime;
  if (e >= (i || 0))
    return null;
  for (let n = 0; n < r.length; ++n) {
    const a = r[n];
    if (Kh(e, t, a))
      return a;
  }
  return null;
}
function zt(r, e, t = 0, s = 0, i = 5e-3) {
  let n = null;
  if (r) {
    n = e[1 + r.sn - e[0].sn] || null;
    const o = r.endDTS - t;
    o > 0 && o < 15e-7 && (t += 15e-7), n && r.level !== n.level && n.end <= r.end && (n = e[2 + r.sn - e[0].sn] || null);
  } else t === 0 && e[0].start === 0 && (n = e[0]);
  if (n && ((!r || r.level === n.level) && ua(t, s, n) === 0 || Gh(n, r, Math.min(i, s))))
    return n;
  const a = Vo.search(e, ua.bind(null, t, s));
  return a && (a !== r || !n) ? a : n;
}
function Gh(r, e, t) {
  if (e && e.start === 0 && e.level < r.level && (e.endPTS || 0) > 0) {
    const s = e.tagList.reduce((i, n) => (n[0] === "INF" && (i += parseFloat(n[1])), i), t);
    return r.start <= s;
  }
  return !1;
}
function ua(r = 0, e = 0, t) {
  if (t.start <= r && t.start + t.duration > r)
    return 0;
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
  return t.start + t.duration - s <= r ? 1 : t.start - s > r && t.start ? -1 : 0;
}
function Kh(r, e, t) {
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0)) * 1e3;
  return (t.endProgramDateTime || 0) - s > r;
}
function Ho(r, e, t) {
  if (r && r.startCC <= e && r.endCC >= e) {
    let s = r.fragments;
    const {
      fragmentHint: i
    } = r;
    i && (s = s.concat(i));
    let n;
    return Vo.search(s, (a) => a.cc < e ? 1 : a.cc > e ? -1 : (n = a, a.end <= t ? 1 : a.start > t ? -1 : 0)), n || null;
  }
  return null;
}
function bi(r) {
  switch (r.details) {
    case D.FRAG_LOAD_TIMEOUT:
    case D.KEY_LOAD_TIMEOUT:
    case D.LEVEL_LOAD_TIMEOUT:
    case D.MANIFEST_LOAD_TIMEOUT:
      return !0;
  }
  return !1;
}
function Wo(r) {
  return r.details.startsWith("key");
}
function Yo(r) {
  return Wo(r) && !!r.frag && !r.frag.decryptdata;
}
function ha(r, e) {
  const t = bi(e);
  return r.default[`${t ? "timeout" : "error"}Retry`];
}
function tr(r, e) {
  const t = r.backoff === "linear" ? 1 : Math.pow(2, e);
  return Math.min(t * r.retryDelayMs, r.maxRetryDelayMs);
}
function da(r) {
  return ce(ce({}, r), {
    errorRetry: null,
    timeoutRetry: null
  });
}
function Ri(r, e, t, s) {
  if (!r)
    return !1;
  const i = s == null ? void 0 : s.code, n = e < r.maxNumRetry && (Vh(i) || !!t);
  return r.shouldRetry ? r.shouldRetry(r, e, t, s, n) : n;
}
function Vh(r) {
  return On(r) || !!r && (r < 400 || r > 499);
}
function On(r) {
  return r === 0 && navigator.onLine === !1;
}
var Ce = {
  DoNothing: 0,
  SendAlternateToPenaltyBox: 2,
  RemoveAlternatePermanently: 3,
  RetryRequest: 5
}, qe = {
  None: 0,
  MoveAllAlternatesMatchingHost: 1,
  MoveAllAlternatesMatchingHDCP: 2,
  MoveAllAlternatesMatchingKey: 4
};
class Hh extends nt {
  constructor(e) {
    super("error-controller", e.logger), this.hls = void 0, this.playlistError = 0, this.hls = e, this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(m.ERROR, this.onError, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(m.ERROR, this.onError, this), e.off(m.ERROR, this.onErrorOut, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this));
  }
  destroy() {
    this.unregisterListeners(), this.hls = null;
  }
  startLoad(e) {
  }
  stopLoad() {
    this.playlistError = 0;
  }
  getVariantLevelIndex(e) {
    return (e == null ? void 0 : e.type) === W.MAIN ? e.level : this.getVariantIndex();
  }
  getVariantIndex() {
    var e;
    const t = this.hls, s = t.currentLevel;
    return (e = t.loadLevelObj) != null && e.details || s === -1 ? t.loadLevel : s;
  }
  variantHasKey(e, t) {
    if (e) {
      var s;
      if ((s = e.details) != null && s.hasKey(t))
        return !0;
      const i = e.audioGroups;
      if (i)
        return this.hls.allAudioTracks.filter((a) => i.indexOf(a.groupId) >= 0).some((a) => {
          var o;
          return (o = a.details) == null ? void 0 : o.hasKey(t);
        });
    }
    return !1;
  }
  onManifestLoading() {
    this.playlistError = 0;
  }
  onLevelUpdated() {
    this.playlistError = 0;
  }
  onError(e, t) {
    var s;
    if (t.fatal)
      return;
    const i = this.hls, n = t.context;
    switch (t.details) {
      case D.FRAG_LOAD_ERROR:
      case D.FRAG_LOAD_TIMEOUT:
      case D.KEY_LOAD_ERROR:
      case D.KEY_LOAD_TIMEOUT:
        t.errorAction = this.getFragRetryOrSwitchAction(t);
        return;
      case D.FRAG_PARSING_ERROR:
        if ((s = t.frag) != null && s.gap) {
          t.errorAction = as();
          return;
        }
      case D.FRAG_GAP:
      case D.FRAG_DECRYPT_ERROR: {
        t.errorAction = this.getFragRetryOrSwitchAction(t), t.errorAction.action = Ce.SendAlternateToPenaltyBox;
        return;
      }
      case D.LEVEL_EMPTY_ERROR:
      case D.LEVEL_PARSING_ERROR:
        {
          var a;
          const c = t.parent === W.MAIN ? t.level : i.loadLevel;
          t.details === D.LEVEL_EMPTY_ERROR && ((a = t.context) != null && (a = a.levelDetails) != null && a.live) ? t.errorAction = this.getPlaylistRetryOrSwitchAction(t, c) : (t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, c));
        }
        return;
      case D.LEVEL_LOAD_ERROR:
      case D.LEVEL_LOAD_TIMEOUT:
        typeof (n == null ? void 0 : n.level) == "number" && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, n.level));
        return;
      case D.AUDIO_TRACK_LOAD_ERROR:
      case D.AUDIO_TRACK_LOAD_TIMEOUT:
      case D.SUBTITLE_LOAD_ERROR:
      case D.SUBTITLE_TRACK_LOAD_TIMEOUT:
        if (n) {
          const c = i.loadLevelObj;
          if (c && (n.type === re.AUDIO_TRACK && c.hasAudioGroup(n.groupId) || n.type === re.SUBTITLE_TRACK && c.hasSubtitleGroup(n.groupId))) {
            t.errorAction = this.getPlaylistRetryOrSwitchAction(t, i.loadLevel), t.errorAction.action = Ce.SendAlternateToPenaltyBox, t.errorAction.flags = qe.MoveAllAlternatesMatchingHost;
            return;
          }
        }
        return;
      case D.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
        t.errorAction = {
          action: Ce.SendAlternateToPenaltyBox,
          flags: qe.MoveAllAlternatesMatchingHDCP
        };
        return;
      case D.KEY_SYSTEM_SESSION_UPDATE_FAILED:
      case D.KEY_SYSTEM_STATUS_INTERNAL_ERROR:
      case D.KEY_SYSTEM_NO_SESSION:
        t.errorAction = {
          action: Ce.SendAlternateToPenaltyBox,
          flags: qe.MoveAllAlternatesMatchingKey
        };
        return;
      case D.BUFFER_ADD_CODEC_ERROR:
      case D.REMUX_ALLOC_ERROR:
      case D.BUFFER_APPEND_ERROR:
        if (!t.errorAction) {
          var o;
          t.errorAction = this.getLevelSwitchAction(t, (o = t.level) != null ? o : i.loadLevel);
        }
        return;
      case D.INTERNAL_EXCEPTION:
      case D.BUFFER_APPENDING_ERROR:
      case D.BUFFER_FULL_ERROR:
      case D.LEVEL_SWITCH_ERROR:
      case D.BUFFER_STALLED_ERROR:
      case D.BUFFER_SEEK_OVER_HOLE:
      case D.BUFFER_NUDGE_ON_STALL:
        t.errorAction = as();
        return;
    }
    t.type === X.KEY_SYSTEM_ERROR && (t.levelRetry = !1, t.errorAction = as());
  }
  getPlaylistRetryOrSwitchAction(e, t) {
    const s = this.hls, i = ha(s.config.playlistLoadPolicy, e), n = this.playlistError++;
    if (Ri(i, n, bi(e), e.response))
      return {
        action: Ce.RetryRequest,
        flags: qe.None,
        retryConfig: i,
        retryCount: n
      };
    const o = this.getLevelSwitchAction(e, t);
    return i && (o.retryConfig = i, o.retryCount = n), o;
  }
  getFragRetryOrSwitchAction(e) {
    const t = this.hls, s = this.getVariantLevelIndex(e.frag), i = t.levels[s], {
      fragLoadPolicy: n,
      keyLoadPolicy: a
    } = t.config, o = ha(Wo(e) ? a : n, e), c = t.levels.reduce((u, h) => u + h.fragmentError, 0);
    if (i && (e.details !== D.FRAG_GAP && i.fragmentError++, !Yo(e) && Ri(o, c, bi(e), e.response)))
      return {
        action: Ce.RetryRequest,
        flags: qe.None,
        retryConfig: o,
        retryCount: c
      };
    const l = this.getLevelSwitchAction(e, s);
    return o && (l.retryConfig = o, l.retryCount = c), l;
  }
  getLevelSwitchAction(e, t) {
    const s = this.hls;
    t == null && (t = s.loadLevel);
    const i = this.hls.levels[t];
    if (i) {
      var n, a;
      const l = e.details;
      i.loadError++, l === D.BUFFER_APPEND_ERROR && i.fragmentError++;
      let u = -1;
      const {
        levels: h,
        loadLevel: d,
        minAutoLevel: f,
        maxAutoLevel: g
      } = s;
      !s.autoLevelEnabled && !s.config.preserveManualLevelOnError && (s.loadLevel = -1);
      const p = (n = e.frag) == null ? void 0 : n.type, E = (p === W.AUDIO && l === D.FRAG_PARSING_ERROR || e.sourceBufferName === "audio" && (l === D.BUFFER_ADD_CODEC_ERROR || l === D.BUFFER_APPEND_ERROR)) && h.some(({
        audioCodec: C
      }) => i.audioCodec !== C), S = e.sourceBufferName === "video" && (l === D.BUFFER_ADD_CODEC_ERROR || l === D.BUFFER_APPEND_ERROR) && h.some(({
        codecSet: C,
        audioCodec: A
      }) => i.codecSet !== C && i.audioCodec === A), {
        type: v,
        groupId: x
      } = (a = e.context) != null ? a : {};
      for (let C = h.length; C--; ) {
        const A = (C + d) % h.length;
        if (A !== d && A >= f && A <= g && h[A].loadError === 0) {
          var o, c;
          const R = h[A];
          if (l === D.FRAG_GAP && p === W.MAIN && e.frag) {
            const b = h[A].details;
            if (b) {
              const L = zt(e.frag, b.fragments, e.frag.start);
              if (L != null && L.gap)
                continue;
            }
          } else {
            if (v === re.AUDIO_TRACK && R.hasAudioGroup(x) || v === re.SUBTITLE_TRACK && R.hasSubtitleGroup(x))
              continue;
            if (p === W.AUDIO && (o = i.audioGroups) != null && o.some((b) => R.hasAudioGroup(b)) || p === W.SUBTITLE && (c = i.subtitleGroups) != null && c.some((b) => R.hasSubtitleGroup(b)) || E && i.audioCodec === R.audioCodec || S && i.codecSet === R.codecSet || !E && i.codecSet !== R.codecSet)
              continue;
          }
          u = A;
          break;
        }
      }
      if (u > -1 && s.loadLevel !== u)
        return e.levelRetry = !0, this.playlistError = 0, {
          action: Ce.SendAlternateToPenaltyBox,
          flags: qe.None,
          nextAutoLevel: u
        };
    }
    return {
      action: Ce.SendAlternateToPenaltyBox,
      flags: qe.MoveAllAlternatesMatchingHost
    };
  }
  onErrorOut(e, t) {
    var s;
    switch ((s = t.errorAction) == null ? void 0 : s.action) {
      case Ce.DoNothing:
        break;
      case Ce.SendAlternateToPenaltyBox:
        this.sendAlternateToPenaltyBox(t), !t.errorAction.resolved && t.details !== D.FRAG_GAP ? t.fatal = !0 : /MediaSource readyState: ended/.test(t.error.message) && (this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`), this.hls.recoverMediaError());
        break;
    }
    if (t.fatal) {
      this.hls.stopLoad();
      return;
    }
  }
  sendAlternateToPenaltyBox(e) {
    const t = this.hls, s = e.errorAction;
    if (!s)
      return;
    const {
      flags: i
    } = s, n = s.nextAutoLevel;
    switch (i) {
      case qe.None:
        this.switchLevel(e, n);
        break;
      case qe.MoveAllAlternatesMatchingHDCP: {
        const c = this.getVariantLevelIndex(e.frag), l = t.levels[c], u = l == null ? void 0 : l.attrs["HDCP-LEVEL"];
        if (s.hdcpLevel = u, u === "NONE")
          this.warn("HDCP policy resticted output with HDCP-LEVEL=NONE");
        else if (u) {
          t.maxHdcpLevel = wn[wn.indexOf(u) - 1], s.resolved = !0, this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
          break;
        }
      }
      case qe.MoveAllAlternatesMatchingKey: {
        const c = e.decryptdata;
        if (c) {
          const l = this.hls.levels, u = l.length;
          for (let d = u; d--; )
            if (this.variantHasKey(l[d], c)) {
              var a, o;
              this.log(`Banned key found in level ${d} (${l[d].bitrate}bps) or audio group "${(a = l[d].audioGroups) == null ? void 0 : a.join(",")}" (${(o = e.frag) == null ? void 0 : o.type} fragment) ${$e(c.keyId || [])}`), l[d].fragmentError++, l[d].loadError++, this.log(`Removing level ${d} with key error (${e.error})`), this.hls.removeLevel(d);
            }
          const h = e.frag;
          if (this.hls.levels.length < u)
            s.resolved = !0;
          else if (h && h.type !== W.MAIN) {
            const d = h.decryptdata;
            d && !c.matches(d) && (s.resolved = !0);
          }
        }
        break;
      }
    }
    s.resolved || this.switchLevel(e, n);
  }
  switchLevel(e, t) {
    if (t !== void 0 && e.errorAction && (this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel = t, e.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel, e.details === D.BUFFER_ADD_CODEC_ERROR && e.mimeType && e.sourceBufferName !== "audiovideo")) {
      const s = kn(e.mimeType), i = this.hls.levels;
      for (let n = i.length; n--; )
        i[n][`${e.sourceBufferName}Codec`] === s && (this.log(`Removing level ${n} for ${e.details} ("${s}" not supported)`), this.hls.removeLevel(n));
    }
  }
}
function as(r) {
  const e = {
    action: Ce.DoNothing,
    flags: qe.None
  };
  return r && (e.resolved = !0), e;
}
var Re = {
  NOT_LOADED: "NOT_LOADED",
  APPENDING: "APPENDING",
  PARTIAL: "PARTIAL",
  OK: "OK"
};
class Wh {
  constructor(e) {
    this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = !1, this.hls = e, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.BUFFER_APPENDED, this.onBufferAppended, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this), e.on(m.FRAG_LOADED, this.onFragLoaded, this));
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.BUFFER_APPENDED, this.onBufferAppended, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this), e.off(m.FRAG_LOADED, this.onFragLoaded, this));
  }
  destroy() {
    this._unregisterListeners(), this.hls = // @ts-ignore
    this.fragments = // @ts-ignore
    this.activePartLists = // @ts-ignore
    this.endListFragments = this.timeRanges = null;
  }
  /**
   * Return a Fragment or Part with an appended range that matches the position and levelType
   * Otherwise, return null
   */
  getAppendedFrag(e, t) {
    const s = this.activePartLists[t];
    if (s)
      for (let i = s.length; i--; ) {
        const n = s[i];
        if (!n)
          break;
        if (n.start <= e && e <= n.end && n.loaded)
          return n;
      }
    return this.getBufferedFrag(e, t);
  }
  /**
   * Return a buffered Fragment that matches the position and levelType.
   * A buffered Fragment is one whose loading, parsing and appending is done (completed or "partial" meaning aborted).
   * If not found any Fragment, return null
   */
  getBufferedFrag(e, t) {
    return this.getFragAtPos(e, t, !0);
  }
  getFragAtPos(e, t, s) {
    const {
      fragments: i
    } = this, n = Object.keys(i);
    for (let a = n.length; a--; ) {
      const o = i[n[a]];
      if ((o == null ? void 0 : o.body.type) === t && (!s || o.buffered)) {
        const c = o.body;
        if (c.start <= e && e <= c.end)
          return c;
      }
    }
    return null;
  }
  /**
   * Partial fragments effected by coded frame eviction will be removed
   * The browser will unload parts of the buffer to free up memory for new buffer data
   * Fragments will need to be reloaded when the buffer is freed up, removing partial fragments will allow them to reload(since there might be parts that are still playable)
   */
  detectEvictedFragments(e, t, s, i, n) {
    this.timeRanges && (this.timeRanges[e] = t);
    const a = (i == null ? void 0 : i.fragment.sn) || -1;
    Object.keys(this.fragments).forEach((o) => {
      const c = this.fragments[o];
      if (!c || a >= c.body.sn)
        return;
      if (!c.buffered && (!c.loaded || n)) {
        c.body.type === s && this.removeFragment(c.body);
        return;
      }
      const l = c.range[e];
      if (l) {
        if (l.time.length === 0) {
          this.removeFragment(c.body);
          return;
        }
        l.time.some((u) => {
          const h = !this.isTimeBuffered(u.startPTS, u.endPTS, t);
          return h && this.removeFragment(c.body), h;
        });
      }
    });
  }
  /**
   * Checks if the fragment passed in is loaded in the buffer properly
   * Partially loaded fragments will be registered as a partial fragment
   */
  detectPartialFragments(e) {
    const t = this.timeRanges;
    if (!t || e.frag.sn === "initSegment")
      return;
    const s = e.frag, i = es(s), n = this.fragments[i];
    if (!n || n.buffered && s.gap)
      return;
    const a = !s.relurl;
    Object.keys(t).forEach((o) => {
      const c = s.elementaryStreams[o];
      if (!c)
        return;
      const l = t[o], u = a || c.partial === !0;
      n.range[o] = this.getBufferedTimes(s, e.part, u, l);
    }), n.loaded = null, Object.keys(n.range).length ? (n.buffered = !0, (n.body.endList = s.endList || n.body.endList) && (this.endListFragments[n.body.type] = n), Qs(n) || this.removeParts(s.sn - 1, s.type)) : this.removeFragment(n.body);
  }
  removeParts(e, t) {
    const s = this.activePartLists[t];
    s && (this.activePartLists[t] = fa(s, (i) => i.fragment.sn >= e));
  }
  fragBuffered(e, t) {
    const s = es(e);
    let i = this.fragments[s];
    !i && t && (i = this.fragments[s] = {
      body: e,
      appendedPTS: null,
      loaded: null,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    }, e.gap && (this.hasGaps = !0)), i && (i.loaded = null, i.buffered = !0);
  }
  getBufferedTimes(e, t, s, i) {
    const n = {
      time: [],
      partial: s
    }, a = e.start, o = e.end, c = e.minEndPTS || o, l = e.maxStartPTS || a;
    for (let u = 0; u < i.length; u++) {
      const h = i.start(u) - this.bufferPadding, d = i.end(u) + this.bufferPadding;
      if (l >= h && c <= d) {
        n.time.push({
          startPTS: Math.max(a, i.start(u)),
          endPTS: Math.min(o, i.end(u))
        });
        break;
      } else if (a < d && o > h) {
        const f = Math.max(a, i.start(u)), g = Math.min(o, i.end(u));
        g > f && (n.partial = !0, n.time.push({
          startPTS: f,
          endPTS: g
        }));
      } else if (o <= h)
        break;
    }
    return n;
  }
  /**
   * Gets the partial fragment for a certain time
   */
  getPartialFragment(e) {
    let t = null, s, i, n, a = 0;
    const {
      bufferPadding: o,
      fragments: c
    } = this;
    return Object.keys(c).forEach((l) => {
      const u = c[l];
      u && Qs(u) && (i = u.body.start - o, n = u.body.end + o, e >= i && e <= n && (s = Math.min(e - i, n - e), a <= s && (t = u.body, a = s)));
    }), t;
  }
  isEndListAppended(e) {
    const t = this.endListFragments[e];
    return t !== void 0 && (t.buffered || Qs(t));
  }
  getState(e) {
    const t = es(e), s = this.fragments[t];
    return s ? s.buffered ? Qs(s) ? Re.PARTIAL : Re.OK : Re.APPENDING : Re.NOT_LOADED;
  }
  isTimeBuffered(e, t, s) {
    let i, n;
    for (let a = 0; a < s.length; a++) {
      if (i = s.start(a) - this.bufferPadding, n = s.end(a) + this.bufferPadding, e >= i && t <= n)
        return !0;
      if (t <= i)
        return !1;
    }
    return !1;
  }
  onManifestLoading() {
    this.removeAllFragments();
  }
  onFragLoaded(e, t) {
    if (t.frag.sn === "initSegment" || t.frag.bitrateTest)
      return;
    const s = t.frag, i = t.part ? null : t, n = es(s);
    this.fragments[n] = {
      body: s,
      appendedPTS: null,
      loaded: i,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    };
  }
  onBufferAppended(e, t) {
    const {
      frag: s,
      part: i,
      timeRanges: n,
      type: a
    } = t;
    if (s.sn === "initSegment")
      return;
    const o = s.type;
    if (i) {
      let l = this.activePartLists[o];
      l || (this.activePartLists[o] = l = []), l.push(i);
    }
    this.timeRanges = n;
    const c = n[a];
    this.detectEvictedFragments(a, c, o, i);
  }
  onFragBuffered(e, t) {
    this.detectPartialFragments(t);
  }
  hasFragment(e) {
    const t = es(e);
    return !!this.fragments[t];
  }
  hasFragments(e) {
    const {
      fragments: t
    } = this, s = Object.keys(t);
    if (!e)
      return s.length > 0;
    for (let i = s.length; i--; ) {
      const n = t[s[i]];
      if ((n == null ? void 0 : n.body.type) === e)
        return !0;
    }
    return !1;
  }
  hasParts(e) {
    var t;
    return !!((t = this.activePartLists[e]) != null && t.length);
  }
  removeFragmentsInRange(e, t, s, i, n) {
    i && !this.hasGaps || Object.keys(this.fragments).forEach((a) => {
      const o = this.fragments[a];
      if (!o)
        return;
      const c = o.body;
      c.type !== s || i && !c.gap || c.start < t && c.end > e && (o.buffered || n) && this.removeFragment(c);
    });
  }
  removeFragment(e) {
    const t = es(e);
    e.clearElementaryStreamInfo();
    const s = this.activePartLists[e.type];
    if (s) {
      const i = e.sn;
      this.activePartLists[e.type] = fa(s, (n) => n.fragment.sn !== i);
    }
    delete this.fragments[t], e.endList && delete this.endListFragments[e.type];
  }
  removeAllFragments() {
    var e;
    this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = !1;
    const t = (e = this.hls) == null || (e = e.latestLevelDetails) == null ? void 0 : e.partList;
    t && t.forEach((s) => s.clearElementaryStreamInfo());
  }
}
function Qs(r) {
  var e, t, s;
  return r.buffered && !!(r.body.gap || (e = r.range.video) != null && e.partial || (t = r.range.audio) != null && t.partial || (s = r.range.audiovideo) != null && s.partial);
}
function es(r) {
  return `${r.type}_${r.level}_${r.sn}`;
}
function fa(r, e) {
  return r.filter((t) => {
    const s = e(t);
    return s || t.clearElementaryStreamInfo(), s;
  });
}
var Bt = {
  cbc: 0,
  ctr: 1
};
class Yh {
  constructor(e, t, s) {
    this.subtle = void 0, this.aesIV = void 0, this.aesMode = void 0, this.subtle = e, this.aesIV = t, this.aesMode = s;
  }
  decrypt(e, t) {
    switch (this.aesMode) {
      case Bt.cbc:
        return this.subtle.decrypt({
          name: "AES-CBC",
          iv: this.aesIV
        }, t, e);
      case Bt.ctr:
        return this.subtle.decrypt(
          {
            name: "AES-CTR",
            counter: this.aesIV,
            length: 64
          },
          //64 : NIST SP800-38A standard suggests that the counter should occupy half of the counter block
          t,
          e
        );
      default:
        throw new Error(`[AESCrypto] invalid aes mode ${this.aesMode}`);
    }
  }
}
function jh(r) {
  const e = r.byteLength, t = e && new DataView(r.buffer).getUint8(e - 1);
  return t ? r.slice(0, e - t) : r;
}
class zh {
  constructor() {
    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
  }
  // Using view.getUint32() also swaps the byte order.
  uint8ArrayToUint32Array_(e) {
    const t = new DataView(e), s = new Uint32Array(4);
    for (let i = 0; i < 4; i++)
      s[i] = t.getUint32(i * 4);
    return s;
  }
  initTable() {
    const e = this.sBox, t = this.invSBox, s = this.subMix, i = s[0], n = s[1], a = s[2], o = s[3], c = this.invSubMix, l = c[0], u = c[1], h = c[2], d = c[3], f = new Uint32Array(256);
    let g = 0, p = 0, y = 0;
    for (y = 0; y < 256; y++)
      y < 128 ? f[y] = y << 1 : f[y] = y << 1 ^ 283;
    for (y = 0; y < 256; y++) {
      let E = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
      E = E >>> 8 ^ E & 255 ^ 99, e[g] = E, t[E] = g;
      const T = f[g], S = f[T], v = f[S];
      let x = f[E] * 257 ^ E * 16843008;
      i[g] = x << 24 | x >>> 8, n[g] = x << 16 | x >>> 16, a[g] = x << 8 | x >>> 24, o[g] = x, x = v * 16843009 ^ S * 65537 ^ T * 257 ^ g * 16843008, l[E] = x << 24 | x >>> 8, u[E] = x << 16 | x >>> 16, h[E] = x << 8 | x >>> 24, d[E] = x, g ? (g = T ^ f[f[f[v ^ T]]], p ^= f[f[p]]) : g = p = 1;
    }
  }
  expandKey(e) {
    const t = this.uint8ArrayToUint32Array_(e);
    let s = !0, i = 0;
    for (; i < t.length && s; )
      s = t[i] === this.key[i], i++;
    if (s)
      return;
    this.key = t;
    const n = this.keySize = t.length;
    if (n !== 4 && n !== 6 && n !== 8)
      throw new Error("Invalid aes key size=" + n);
    const a = this.ksRows = (n + 6 + 1) * 4;
    let o, c;
    const l = this.keySchedule = new Uint32Array(a), u = this.invKeySchedule = new Uint32Array(a), h = this.sBox, d = this.rcon, f = this.invSubMix, g = f[0], p = f[1], y = f[2], E = f[3];
    let T, S;
    for (o = 0; o < a; o++) {
      if (o < n) {
        T = l[o] = t[o];
        continue;
      }
      S = T, o % n === 0 ? (S = S << 8 | S >>> 24, S = h[S >>> 24] << 24 | h[S >>> 16 & 255] << 16 | h[S >>> 8 & 255] << 8 | h[S & 255], S ^= d[o / n | 0] << 24) : n > 6 && o % n === 4 && (S = h[S >>> 24] << 24 | h[S >>> 16 & 255] << 16 | h[S >>> 8 & 255] << 8 | h[S & 255]), l[o] = T = (l[o - n] ^ S) >>> 0;
    }
    for (c = 0; c < a; c++)
      o = a - c, c & 3 ? S = l[o] : S = l[o - 4], c < 4 || o <= 4 ? u[c] = S : u[c] = g[h[S >>> 24]] ^ p[h[S >>> 16 & 255]] ^ y[h[S >>> 8 & 255]] ^ E[h[S & 255]], u[c] = u[c] >>> 0;
  }
  // Adding this as a method greatly improves performance.
  networkToHostOrderSwap(e) {
    return e << 24 | (e & 65280) << 8 | (e & 16711680) >> 8 | e >>> 24;
  }
  decrypt(e, t, s) {
    const i = this.keySize + 6, n = this.invKeySchedule, a = this.invSBox, o = this.invSubMix, c = o[0], l = o[1], u = o[2], h = o[3], d = this.uint8ArrayToUint32Array_(s);
    let f = d[0], g = d[1], p = d[2], y = d[3];
    const E = new Int32Array(e), T = new Int32Array(E.length);
    let S, v, x, C, A, R, b, L, P, M, U, H, K, F;
    const V = this.networkToHostOrderSwap;
    for (; t < E.length; ) {
      for (P = V(E[t]), M = V(E[t + 1]), U = V(E[t + 2]), H = V(E[t + 3]), A = P ^ n[0], R = H ^ n[1], b = U ^ n[2], L = M ^ n[3], K = 4, F = 1; F < i; F++)
        S = c[A >>> 24] ^ l[R >> 16 & 255] ^ u[b >> 8 & 255] ^ h[L & 255] ^ n[K], v = c[R >>> 24] ^ l[b >> 16 & 255] ^ u[L >> 8 & 255] ^ h[A & 255] ^ n[K + 1], x = c[b >>> 24] ^ l[L >> 16 & 255] ^ u[A >> 8 & 255] ^ h[R & 255] ^ n[K + 2], C = c[L >>> 24] ^ l[A >> 16 & 255] ^ u[R >> 8 & 255] ^ h[b & 255] ^ n[K + 3], A = S, R = v, b = x, L = C, K = K + 4;
      S = a[A >>> 24] << 24 ^ a[R >> 16 & 255] << 16 ^ a[b >> 8 & 255] << 8 ^ a[L & 255] ^ n[K], v = a[R >>> 24] << 24 ^ a[b >> 16 & 255] << 16 ^ a[L >> 8 & 255] << 8 ^ a[A & 255] ^ n[K + 1], x = a[b >>> 24] << 24 ^ a[L >> 16 & 255] << 16 ^ a[A >> 8 & 255] << 8 ^ a[R & 255] ^ n[K + 2], C = a[L >>> 24] << 24 ^ a[A >> 16 & 255] << 16 ^ a[R >> 8 & 255] << 8 ^ a[b & 255] ^ n[K + 3], T[t] = V(S ^ f), T[t + 1] = V(C ^ g), T[t + 2] = V(x ^ p), T[t + 3] = V(v ^ y), f = P, g = M, p = U, y = H, t = t + 4;
    }
    return T.buffer;
  }
}
class qh {
  constructor(e, t, s) {
    this.subtle = void 0, this.key = void 0, this.aesMode = void 0, this.subtle = e, this.key = t, this.aesMode = s;
  }
  expandKey() {
    const e = Xh(this.aesMode);
    return this.subtle.importKey("raw", this.key, {
      name: e
    }, !1, ["encrypt", "decrypt"]);
  }
}
function Xh(r) {
  switch (r) {
    case Bt.cbc:
      return "AES-CBC";
    case Bt.ctr:
      return "AES-CTR";
    default:
      throw new Error(`[FastAESKey] invalid aes mode ${r}`);
  }
}
const Qh = 16;
class sr {
  constructor(e, {
    removePKCS7Padding: t = !0
  } = {}) {
    if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.enableSoftwareAES = void 0, this.enableSoftwareAES = e.enableSoftwareAES, this.removePKCS7Padding = t, t)
      try {
        const s = self.crypto;
        s && (this.subtle = s.subtle || s.webkitSubtle);
      } catch {
      }
    this.useSoftware = !this.subtle;
  }
  destroy() {
    this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
  }
  isSync() {
    return this.useSoftware;
  }
  flush() {
    const {
      currentResult: e,
      remainderData: t
    } = this;
    if (!e || t)
      return this.reset(), null;
    const s = new Uint8Array(e);
    return this.reset(), this.removePKCS7Padding ? jh(s) : s;
  }
  reset() {
    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
  }
  decrypt(e, t, s, i) {
    return this.useSoftware ? new Promise((n, a) => {
      const o = ArrayBuffer.isView(e) ? e : new Uint8Array(e);
      this.softwareDecrypt(o, t, s, i);
      const c = this.flush();
      c ? n(c.buffer) : a(new Error("[softwareDecrypt] Failed to decrypt data"));
    }) : this.webCryptoDecrypt(new Uint8Array(e), t, s, i);
  }
  // Software decryption is progressive. Progressive decryption may not return a result on each call. Any cached
  // data is handled in the flush() call
  softwareDecrypt(e, t, s, i) {
    const {
      currentIV: n,
      currentResult: a,
      remainderData: o
    } = this;
    if (i !== Bt.cbc || t.byteLength !== 16)
      return ue.warn("SoftwareDecrypt: can only handle AES-128-CBC"), null;
    this.logOnce("JS AES decrypt"), o && (e = it(o, e), this.remainderData = null);
    const c = this.getValidChunk(e);
    if (!c.length)
      return null;
    n && (s = n);
    let l = this.softwareDecrypter;
    l || (l = this.softwareDecrypter = new zh()), l.expandKey(t);
    const u = a;
    return this.currentResult = l.decrypt(c.buffer, 0, s), this.currentIV = c.slice(-16).buffer, u || null;
  }
  webCryptoDecrypt(e, t, s, i) {
    if (this.key !== t || !this.fastAesKey) {
      if (!this.subtle)
        return Promise.resolve(this.onWebCryptoError(e, t, s, i));
      this.key = t, this.fastAesKey = new qh(this.subtle, t, i);
    }
    return this.fastAesKey.expandKey().then((n) => this.subtle ? (this.logOnce("WebCrypto AES decrypt"), new Yh(this.subtle, new Uint8Array(s), i).decrypt(e.buffer, n)) : Promise.reject(new Error("web crypto not initialized"))).catch((n) => (ue.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${n.name}: ${n.message}`), this.onWebCryptoError(e, t, s, i)));
  }
  onWebCryptoError(e, t, s, i) {
    const n = this.enableSoftwareAES;
    if (n) {
      this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(e, t, s, i);
      const a = this.flush();
      if (a)
        return a.buffer;
    }
    throw new Error("WebCrypto" + (n ? " and softwareDecrypt" : "") + ": failed to decrypt data");
  }
  getValidChunk(e) {
    let t = e;
    const s = e.length - e.length % Qh;
    return s !== e.length && (t = e.slice(0, s), this.remainderData = e.slice(s)), t;
  }
  logOnce(e) {
    this.logEnabled && (ue.log(`[decrypter]: ${e}`), this.logEnabled = !1);
  }
}
const ga = Math.pow(2, 17);
class Zh {
  constructor(e) {
    this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e;
  }
  destroy() {
    this.loader && (this.loader.destroy(), this.loader = null);
  }
  abort() {
    this.loader && this.loader.abort();
  }
  load(e, t) {
    const s = e.url;
    if (!s)
      return Promise.reject(new Rt({
        type: X.NETWORK_ERROR,
        details: D.FRAG_LOAD_ERROR,
        fatal: !1,
        frag: e,
        error: new Error(`Fragment does not have a ${s ? "part list" : "url"}`),
        networkDetails: null
      }));
    this.abort();
    const i = this.config, n = i.fLoader, a = i.loader;
    return new Promise((o, c) => {
      if (this.loader && this.loader.destroy(), e.gap)
        if (e.tagList.some((g) => g[0] === "GAP")) {
          c(pa(e));
          return;
        } else
          e.gap = !1;
      const l = this.loader = n ? new n(i) : new a(i), u = ma(e);
      e.loader = l;
      const h = da(i.fragLoadPolicy.default), d = {
        loadPolicy: h,
        timeout: h.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: e.sn === "initSegment" ? 1 / 0 : ga
      };
      e.stats = l.stats;
      const f = {
        onSuccess: (g, p, y, E) => {
          this.resetLoader(e, l);
          let T = g.data;
          y.resetIV && e.decryptdata && (e.decryptdata.iv = new Uint8Array(T.slice(0, 16)), T = T.slice(16)), o({
            frag: e,
            part: null,
            payload: T,
            networkDetails: E
          });
        },
        onError: (g, p, y, E) => {
          this.resetLoader(e, l), c(new Rt({
            type: X.NETWORK_ERROR,
            details: D.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            response: ce({
              url: s,
              data: void 0
            }, g),
            error: new Error(`HTTP Error ${g.code} ${g.text}`),
            networkDetails: y,
            stats: E
          }));
        },
        onAbort: (g, p, y) => {
          this.resetLoader(e, l), c(new Rt({
            type: X.NETWORK_ERROR,
            details: D.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            error: new Error("Aborted"),
            networkDetails: y,
            stats: g
          }));
        },
        onTimeout: (g, p, y) => {
          this.resetLoader(e, l), c(new Rt({
            type: X.NETWORK_ERROR,
            details: D.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            error: new Error(`Timeout after ${d.timeout}ms`),
            networkDetails: y,
            stats: g
          }));
        }
      };
      t && (f.onProgress = (g, p, y, E) => t({
        frag: e,
        part: null,
        payload: y,
        networkDetails: E
      })), l.load(u, d, f);
    });
  }
  loadPart(e, t, s) {
    this.abort();
    const i = this.config, n = i.fLoader, a = i.loader;
    return new Promise((o, c) => {
      if (this.loader && this.loader.destroy(), e.gap || t.gap) {
        c(pa(e, t));
        return;
      }
      const l = this.loader = n ? new n(i) : new a(i), u = ma(e, t);
      e.loader = l;
      const h = da(i.fragLoadPolicy.default), d = {
        loadPolicy: h,
        timeout: h.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: ga
      };
      t.stats = l.stats, l.load(u, d, {
        onSuccess: (f, g, p, y) => {
          this.resetLoader(e, l), this.updateStatsFromPart(e, t);
          const E = {
            frag: e,
            part: t,
            payload: f.data,
            networkDetails: y
          };
          s(E), o(E);
        },
        onError: (f, g, p, y) => {
          this.resetLoader(e, l), c(new Rt({
            type: X.NETWORK_ERROR,
            details: D.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            part: t,
            response: ce({
              url: u.url,
              data: void 0
            }, f),
            error: new Error(`HTTP Error ${f.code} ${f.text}`),
            networkDetails: p,
            stats: y
          }));
        },
        onAbort: (f, g, p) => {
          e.stats.aborted = t.stats.aborted, this.resetLoader(e, l), c(new Rt({
            type: X.NETWORK_ERROR,
            details: D.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error("Aborted"),
            networkDetails: p,
            stats: f
          }));
        },
        onTimeout: (f, g, p) => {
          this.resetLoader(e, l), c(new Rt({
            type: X.NETWORK_ERROR,
            details: D.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error(`Timeout after ${d.timeout}ms`),
            networkDetails: p,
            stats: f
          }));
        }
      });
    });
  }
  updateStatsFromPart(e, t) {
    const s = e.stats, i = t.stats, n = i.total;
    if (s.loaded += i.loaded, n) {
      const c = Math.round(e.duration / t.duration), l = Math.min(Math.round(s.loaded / n), c), h = (c - l) * Math.round(s.loaded / l);
      s.total = s.loaded + h;
    } else
      s.total = Math.max(s.loaded, s.total);
    const a = s.loading, o = i.loading;
    a.start ? a.first += o.first - o.start : (a.start = o.start, a.first = o.first), a.end = o.end;
  }
  resetLoader(e, t) {
    e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy();
  }
}
function ma(r, e = null) {
  const t = e || r, s = {
    frag: r,
    part: e,
    responseType: "arraybuffer",
    url: t.url,
    headers: {},
    rangeStart: 0,
    rangeEnd: 0
  }, i = t.byteRangeStartOffset, n = t.byteRangeEndOffset;
  if (G(i) && G(n)) {
    var a;
    let o = i, c = n;
    if (r.sn === "initSegment" && Jh((a = r.decryptdata) == null ? void 0 : a.method)) {
      const l = n - i;
      l % 16 && (c = n + (16 - l % 16)), i !== 0 && (s.resetIV = !0, o = i - 16);
    }
    s.rangeStart = o, s.rangeEnd = c;
  }
  return s;
}
function pa(r, e) {
  const t = new Error(`GAP ${r.gap ? "tag" : "attribute"} found`), s = {
    type: X.MEDIA_ERROR,
    details: D.FRAG_GAP,
    fatal: !1,
    frag: r,
    error: t,
    networkDetails: null
  };
  return e && (s.part = e), (e || r).stats.aborted = !0, new Rt(s);
}
function Jh(r) {
  return r === "AES-128" || r === "AES-256";
}
class Rt extends Error {
  constructor(e) {
    super(e.error.message), this.data = void 0, this.data = e;
  }
}
class jo extends nt {
  constructor(e, t) {
    super(e, t), this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
  }
  destroy() {
    this.onHandlerDestroying(), this.onHandlerDestroyed();
  }
  onHandlerDestroying() {
    this.clearNextTick(), this.clearInterval();
  }
  onHandlerDestroyed() {
  }
  hasInterval() {
    return !!this._tickInterval;
  }
  hasNextTick() {
    return !!this._tickTimer;
  }
  /**
   * @param millis - Interval time (ms)
   * @eturns True when interval has been scheduled, false when already scheduled (no effect)
   */
  setInterval(e) {
    return this._tickInterval ? !1 : (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e), !0);
  }
  /**
   * @returns True when interval was cleared, false when none was set (no effect)
   */
  clearInterval() {
    return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, !0) : !1;
  }
  /**
   * @returns True when timeout was cleared, false when none was set (no effect)
   */
  clearNextTick() {
    return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0) : !1;
  }
  /**
   * Will call the subclass doTick implementation in this main loop tick
   * or in the next one (via setTimeout(,0)) in case it has already been called
   * in this tick (in case this is a re-entrant call).
   */
  tick() {
    this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
  }
  tickImmediate() {
    this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
  }
  /**
   * For subclass to implement task logic
   * @abstract
   */
  doTick() {
  }
}
class ir {
  constructor(e, t, s, i = 0, n = -1, a = !1) {
    this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = Zs(), this.buffering = {
      audio: Zs(),
      video: Zs(),
      audiovideo: Zs()
    }, this.level = e, this.sn = t, this.id = s, this.size = i, this.part = n, this.partial = a;
  }
}
function Zs() {
  return {
    start: 0,
    executeStart: 0,
    executeEnd: 0,
    end: 0
  };
}
const ya = {
  length: 0,
  start: () => 0,
  end: () => 0
};
class te {
  /**
   * Return true if `media`'s buffered include `position`
   */
  static isBuffered(e, t) {
    if (e) {
      const s = te.getBuffered(e);
      for (let i = s.length; i--; )
        if (t >= s.start(i) && t <= s.end(i))
          return !0;
    }
    return !1;
  }
  static bufferedRanges(e) {
    if (e) {
      const t = te.getBuffered(e);
      return te.timeRangesToArray(t);
    }
    return [];
  }
  static timeRangesToArray(e) {
    const t = [];
    for (let s = 0; s < e.length; s++)
      t.push({
        start: e.start(s),
        end: e.end(s)
      });
    return t;
  }
  static bufferInfo(e, t, s) {
    if (e) {
      const i = te.bufferedRanges(e);
      if (i.length)
        return te.bufferedInfo(i, t, s);
    }
    return {
      len: 0,
      start: t,
      end: t,
      bufferedIndex: -1
    };
  }
  static bufferedInfo(e, t, s) {
    t = Math.max(0, t), e.length > 1 && e.sort((u, h) => u.start - h.start || h.end - u.end);
    let i = -1, n = [];
    if (s)
      for (let u = 0; u < e.length; u++) {
        t >= e[u].start && t <= e[u].end && (i = u);
        const h = n.length;
        if (h) {
          const d = n[h - 1].end;
          e[u].start - d < s ? e[u].end > d && (n[h - 1].end = e[u].end) : n.push(e[u]);
        } else
          n.push(e[u]);
      }
    else
      n = e;
    let a = 0, o, c = t, l = t;
    for (let u = 0; u < n.length; u++) {
      const h = n[u].start, d = n[u].end;
      if (i === -1 && t >= h && t <= d && (i = u), t + s >= h && t < d)
        c = h, l = d, a = l - t;
      else if (t + s < h) {
        o = h;
        break;
      }
    }
    return {
      len: a,
      start: c || 0,
      end: l || 0,
      nextStart: o,
      buffered: e,
      bufferedIndex: i
    };
  }
  /**
   * Safe method to get buffered property.
   * SourceBuffer.buffered may throw if SourceBuffer is removed from it's MediaSource
   */
  static getBuffered(e) {
    try {
      return e.buffered || ya;
    } catch (t) {
      return ue.log("failed to get media.buffered", t), ya;
    }
  }
}
const zo = /\{\$([a-zA-Z0-9-_]+)\}/g;
function Ea(r) {
  return zo.test(r);
}
function Mn(r, e) {
  if (r.variableList !== null || r.hasVariableRefs) {
    const t = r.variableList;
    return e.replace(zo, (s) => {
      const i = s.substring(2, s.length - 1), n = t == null ? void 0 : t[i];
      return n === void 0 ? (r.playlistParsingError || (r.playlistParsingError = new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)), s) : n;
    });
  }
  return e;
}
function Ta(r, e, t) {
  let s = r.variableList;
  s || (r.variableList = s = {});
  let i, n;
  if ("QUERYPARAM" in e) {
    i = e.QUERYPARAM;
    try {
      const a = new self.URL(t).searchParams;
      if (a.has(i))
        n = a.get(i);
      else
        throw new Error(`"${i}" does not match any query parameter in URI: "${t}"`);
    } catch (a) {
      r.playlistParsingError || (r.playlistParsingError = new Error(`EXT-X-DEFINE QUERYPARAM: ${a.message}`));
    }
  } else
    i = e.NAME, n = e.VALUE;
  i in s ? r.playlistParsingError || (r.playlistParsingError = new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)) : s[i] = n || "";
}
function ed(r, e, t) {
  const s = e.IMPORT;
  if (t && s in t) {
    let i = r.variableList;
    i || (r.variableList = i = {}), i[s] = t[s];
  } else
    r.playlistParsingError || (r.playlistParsingError = new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${s}"`));
}
const td = /^(\d+)x(\d+)$/, Sa = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class ye {
  constructor(e, t) {
    typeof e == "string" && (e = ye.parseAttrList(e, t)), de(this, e);
  }
  get clientAttrs() {
    return Object.keys(this).filter((e) => e.substring(0, 2) === "X-");
  }
  decimalInteger(e) {
    const t = parseInt(this[e], 10);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  hexadecimalInteger(e) {
    if (this[e]) {
      let t = (this[e] || "0x").slice(2);
      t = (t.length & 1 ? "0" : "") + t;
      const s = new Uint8Array(t.length / 2);
      for (let i = 0; i < t.length / 2; i++)
        s[i] = parseInt(t.slice(i * 2, i * 2 + 2), 16);
      return s;
    }
    return null;
  }
  hexadecimalIntegerAsNumber(e) {
    const t = parseInt(this[e], 16);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  decimalFloatingPoint(e) {
    return parseFloat(this[e]);
  }
  optionalFloat(e, t) {
    const s = this[e];
    return s ? parseFloat(s) : t;
  }
  enumeratedString(e) {
    return this[e];
  }
  enumeratedStringList(e, t) {
    const s = this[e];
    return (s ? s.split(/[ ,]+/) : []).reduce((i, n) => (i[n.toLowerCase()] = !0, i), t);
  }
  bool(e) {
    return this[e] === "YES";
  }
  decimalResolution(e) {
    const t = td.exec(this[e]);
    if (t !== null)
      return {
        width: parseInt(t[1], 10),
        height: parseInt(t[2], 10)
      };
  }
  static parseAttrList(e, t) {
    let s;
    const i = {}, n = '"';
    for (Sa.lastIndex = 0; (s = Sa.exec(e)) !== null; ) {
      const a = s[1].trim();
      let o = s[2];
      const c = o.indexOf(n) === 0 && o.lastIndexOf(n) === o.length - 1;
      let l = !1;
      if (c)
        o = o.slice(1, -1);
      else
        switch (a) {
          case "IV":
          case "SCTE35-CMD":
          case "SCTE35-IN":
          case "SCTE35-OUT":
            l = !0;
        }
      if (t && (c || l))
        o = Mn(t, o);
      else if (!l && !c)
        switch (a) {
          case "CLOSED-CAPTIONS":
            if (o === "NONE")
              break;
          case "ALLOWED-CPC":
          case "CLASS":
          case "ASSOC-LANGUAGE":
          case "AUDIO":
          case "BYTERANGE":
          case "CHANNELS":
          case "CHARACTERISTICS":
          case "CODECS":
          case "DATA-ID":
          case "END-DATE":
          case "GROUP-ID":
          case "ID":
          case "IMPORT":
          case "INSTREAM-ID":
          case "KEYFORMAT":
          case "KEYFORMATVERSIONS":
          case "LANGUAGE":
          case "NAME":
          case "PATHWAY-ID":
          case "QUERYPARAM":
          case "RECENTLY-REMOVED-DATERANGES":
          case "SERVER-URI":
          case "STABLE-RENDITION-ID":
          case "STABLE-VARIANT-ID":
          case "START-DATE":
          case "SUBTITLES":
          case "SUPPLEMENTAL-CODECS":
          case "URI":
          case "VALUE":
          case "VIDEO":
          case "X-ASSET-LIST":
          case "X-ASSET-URI":
            ue.warn(`${e}: attribute ${a} is missing quotes`);
        }
      i[a] = o;
    }
    return i;
  }
}
const sd = "com.apple.hls.interstitial";
function id(r) {
  return r !== "ID" && r !== "CLASS" && r !== "CUE" && r !== "START-DATE" && r !== "DURATION" && r !== "END-DATE" && r !== "END-ON-NEXT";
}
function nd(r) {
  return r === "SCTE35-OUT" || r === "SCTE35-IN" || r === "SCTE35-CMD";
}
class qo {
  constructor(e, t, s = 0) {
    var i;
    if (this.attr = void 0, this.tagAnchor = void 0, this.tagOrder = void 0, this._startDate = void 0, this._endDate = void 0, this._dateAtEnd = void 0, this._cue = void 0, this._badValueForSameId = void 0, this.tagAnchor = (t == null ? void 0 : t.tagAnchor) || null, this.tagOrder = (i = t == null ? void 0 : t.tagOrder) != null ? i : s, t) {
      const n = t.attr;
      for (const a in n)
        if (Object.prototype.hasOwnProperty.call(e, a) && e[a] !== n[a]) {
          ue.warn(`DATERANGE tag attribute: "${a}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId = a;
          break;
        }
      e = de(new ye({}), n, e);
    }
    if (this.attr = e, t ? (this._startDate = t._startDate, this._cue = t._cue, this._endDate = t._endDate, this._dateAtEnd = t._dateAtEnd) : this._startDate = new Date(e["START-DATE"]), "END-DATE" in this.attr) {
      const n = (t == null ? void 0 : t.endDate) || new Date(this.attr["END-DATE"]);
      G(n.getTime()) && (this._endDate = n);
    }
  }
  get id() {
    return this.attr.ID;
  }
  get class() {
    return this.attr.CLASS;
  }
  get cue() {
    const e = this._cue;
    return e === void 0 ? this._cue = this.attr.enumeratedStringList(this.attr.CUE ? "CUE" : "X-CUE", {
      pre: !1,
      post: !1,
      once: !1
    }) : e;
  }
  get startTime() {
    const {
      tagAnchor: e
    } = this;
    return e === null || e.programDateTime === null ? (ue.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${e}`), NaN) : e.start + (this.startDate.getTime() - e.programDateTime) / 1e3;
  }
  get startDate() {
    return this._startDate;
  }
  get endDate() {
    const e = this._endDate || this._dateAtEnd;
    if (e)
      return e;
    const t = this.duration;
    return t !== null ? this._dateAtEnd = new Date(this._startDate.getTime() + t * 1e3) : null;
  }
  get duration() {
    if ("DURATION" in this.attr) {
      const e = this.attr.decimalFloatingPoint("DURATION");
      if (G(e))
        return e;
    } else if (this._endDate)
      return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
    return null;
  }
  get plannedDuration() {
    return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
  }
  get endOnNext() {
    return this.attr.bool("END-ON-NEXT");
  }
  get isInterstitial() {
    return this.class === sd;
  }
  get isValid() {
    return !!this.id && !this._badValueForSameId && G(this.startDate.getTime()) && (this.duration === null || this.duration >= 0) && (!this.endOnNext || !!this.class) && (!this.attr.CUE || !this.cue.pre && !this.cue.post || this.cue.pre !== this.cue.post) && (!this.isInterstitial || "X-ASSET-URI" in this.attr || "X-ASSET-LIST" in this.attr);
  }
}
const rd = 10;
class ad {
  constructor(e) {
    this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.dateRangeTagCount = 0, this.live = !0, this.requestScheduled = -1, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.appliedTimelineOffset = void 0, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e;
  }
  reloaded(e) {
    if (!e) {
      this.advanced = !0, this.updated = !0;
      return;
    }
    const t = this.lastPartSn - e.lastPartSn, s = this.lastPartIndex - e.lastPartIndex;
    this.updated = this.endSN !== e.endSN || !!s || !!t || !this.live, this.advanced = this.endSN > e.endSN || t > 0 || t === 0 && s > 0, this.updated || this.advanced ? this.misses = Math.floor(e.misses * 0.6) : this.misses = e.misses + 1;
  }
  hasKey(e) {
    return this.encryptedFragments.some((t) => {
      let s = t.decryptdata;
      return s || (t.setKeyFormat(e.keyFormat), s = t.decryptdata), !!s && e.matches(s);
    });
  }
  get hasProgramDateTime() {
    return this.fragments.length ? G(this.fragments[this.fragments.length - 1].programDateTime) : !1;
  }
  get levelTargetDuration() {
    return this.averagetargetduration || this.targetduration || rd;
  }
  get drift() {
    const e = this.driftEndTime - this.driftStartTime;
    return e > 0 ? (this.driftEnd - this.driftStart) * 1e3 / e : 1;
  }
  get edge() {
    return this.partEnd || this.fragmentEnd;
  }
  get partEnd() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
  }
  get fragmentEnd() {
    return this.fragments.length ? this.fragments[this.fragments.length - 1].end : 0;
  }
  get fragmentStart() {
    return this.fragments.length ? this.fragments[0].start : 0;
  }
  get age() {
    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
  }
  get lastPartIndex() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].index : -1;
  }
  get maxPartIndex() {
    const e = this.partList;
    if (e) {
      const t = this.lastPartIndex;
      if (t !== -1) {
        for (let s = e.length; s--; )
          if (e[s].index > t)
            return e[s].index;
        return t;
      }
    }
    return 0;
  }
  get lastPartSn() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
  }
  get expired() {
    if (this.live && this.age && this.misses < 3) {
      const e = this.partEnd - this.fragmentStart;
      return this.age > Math.max(e, this.totalduration) + this.levelTargetDuration;
    }
    return !1;
  }
}
function _i(r, e) {
  return r.length === e.length ? !r.some((t, s) => t !== e[s]) : !1;
}
function va(r, e) {
  return !r && !e ? !0 : !r || !e ? !1 : _i(r, e);
}
function os(r) {
  return r === "AES-128" || r === "AES-256" || r === "AES-256-CTR";
}
function nr(r) {
  switch (r) {
    case "AES-128":
    case "AES-256":
      return Bt.cbc;
    case "AES-256-CTR":
      return Bt.ctr;
    default:
      throw new Error(`invalid full segment method ${r}`);
  }
}
function rr(r) {
  return Uint8Array.from(atob(r), (e) => e.charCodeAt(0));
}
function Fn(r) {
  return Uint8Array.from(unescape(encodeURIComponent(r)), (e) => e.charCodeAt(0));
}
function od(r) {
  const e = Fn(r).subarray(0, 16), t = new Uint8Array(16);
  return t.set(e, 16 - e.length), t;
}
function Xo(r) {
  const e = function(s, i, n) {
    const a = s[i];
    s[i] = s[n], s[n] = a;
  };
  e(r, 0, 3), e(r, 1, 2), e(r, 4, 5), e(r, 6, 7);
}
function Qo(r) {
  const e = r.split(":");
  let t = null;
  if (e[0] === "data" && e.length === 2) {
    const s = e[1].split(";"), i = s[s.length - 1].split(",");
    if (i.length === 2) {
      const n = i[0] === "base64", a = i[1];
      n ? (s.splice(-1, 1), t = rr(a)) : t = od(a);
    }
  }
  return t;
}
const Di = typeof self < "u" ? self : void 0;
var Ee = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.fps",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "com.widevine.alpha"
}, Pe = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.streamingkeydelivery",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
};
function mi(r) {
  switch (r) {
    case Pe.FAIRPLAY:
      return Ee.FAIRPLAY;
    case Pe.PLAYREADY:
      return Ee.PLAYREADY;
    case Pe.WIDEVINE:
      return Ee.WIDEVINE;
    case Pe.CLEARKEY:
      return Ee.CLEARKEY;
  }
}
function an(r) {
  switch (r) {
    case Ee.FAIRPLAY:
      return Pe.FAIRPLAY;
    case Ee.PLAYREADY:
      return Pe.PLAYREADY;
    case Ee.WIDEVINE:
      return Pe.WIDEVINE;
    case Ee.CLEARKEY:
      return Pe.CLEARKEY;
  }
}
function _s(r) {
  const {
    drmSystems: e,
    widevineLicenseUrl: t
  } = r, s = e ? [Ee.FAIRPLAY, Ee.WIDEVINE, Ee.PLAYREADY, Ee.CLEARKEY].filter((i) => !!e[i]) : [];
  return !s[Ee.WIDEVINE] && t && s.push(Ee.WIDEVINE), s;
}
const Zo = function(r) {
  return Di != null && (r = Di.navigator) != null && r.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
}();
function ld(r, e, t, s) {
  let i;
  switch (r) {
    case Ee.FAIRPLAY:
      i = ["cenc", "sinf"];
      break;
    case Ee.WIDEVINE:
    case Ee.PLAYREADY:
      i = ["cenc"];
      break;
    case Ee.CLEARKEY:
      i = ["cenc", "keyids"];
      break;
    default:
      throw new Error(`Unknown key-system: ${r}`);
  }
  return cd(i, e, t, s);
}
function cd(r, e, t, s) {
  return [{
    initDataTypes: r,
    persistentState: s.persistentState || "optional",
    distinctiveIdentifier: s.distinctiveIdentifier || "optional",
    sessionTypes: s.sessionTypes || [s.sessionType || "temporary"],
    audioCapabilities: e.map((n) => ({
      contentType: `audio/mp4; codecs=${n}`,
      robustness: s.audioRobustness || "",
      encryptionScheme: s.audioEncryptionScheme || null
    })),
    videoCapabilities: t.map((n) => ({
      contentType: `video/mp4; codecs=${n}`,
      robustness: s.videoRobustness || "",
      encryptionScheme: s.videoEncryptionScheme || null
    }))
  }];
}
function ud(r) {
  var e;
  return !!r && (r.sessionType === "persistent-license" || !!((e = r.sessionTypes) != null && e.some((t) => t === "persistent-license")));
}
function Jo(r) {
  const e = new Uint16Array(r.buffer, r.byteOffset, r.byteLength / 2), t = String.fromCharCode.apply(null, Array.from(e)), s = t.substring(t.indexOf("<"), t.length), a = new DOMParser().parseFromString(s, "text/xml").getElementsByTagName("KID")[0];
  if (a) {
    const o = a.childNodes[0] ? a.childNodes[0].nodeValue : a.getAttribute("VALUE");
    if (o) {
      const c = rr(o).subarray(0, 16);
      return Xo(c), c;
    }
  }
  return null;
}
let Js = {};
class jt {
  static clearKeyUriToKeyIdMap() {
    Js = {};
  }
  static setKeyIdForUri(e, t) {
    Js[e] = t;
  }
  constructor(e, t, s, i = [1], n = null, a) {
    this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e, this.uri = t, this.keyFormat = s, this.keyFormatVersions = i, this.iv = n, this.encrypted = e ? e !== "NONE" : !1, this.isCommonEncryption = this.encrypted && !os(e), a != null && a.startsWith("0x") && (this.keyId = new Uint8Array(Ro(a)));
  }
  matches(e) {
    return e.uri === this.uri && e.method === this.method && e.encrypted === this.encrypted && e.keyFormat === this.keyFormat && _i(e.keyFormatVersions, this.keyFormatVersions) && va(e.iv, this.iv) && va(e.keyId, this.keyId);
  }
  isSupported() {
    if (this.method) {
      if (os(this.method) || this.method === "NONE")
        return !0;
      if (this.keyFormat === "identity")
        return this.method === "SAMPLE-AES";
      switch (this.keyFormat) {
        case Pe.FAIRPLAY:
        case Pe.WIDEVINE:
        case Pe.PLAYREADY:
        case Pe.CLEARKEY:
          return ["SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method) !== -1;
      }
    }
    return !1;
  }
  getDecryptData(e, t) {
    if (!this.encrypted || !this.uri)
      return null;
    if (os(this.method)) {
      let n = this.iv;
      return n || (typeof e != "number" && (ue.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e = 0), n = dd(e)), new jt(this.method, this.uri, "identity", this.keyFormatVersions, n);
    }
    if (this.keyId) {
      const n = Js[this.uri];
      if (n && !_i(this.keyId, n) && jt.setKeyIdForUri(this.uri, this.keyId), this.pssh)
        return this;
    }
    const s = Qo(this.uri);
    if (s)
      switch (this.keyFormat) {
        case Pe.WIDEVINE:
          if (this.pssh = s, !this.keyId) {
            const n = mh(s.buffer);
            if (n.length) {
              var i;
              const a = n[0];
              this.keyId = (i = a.kids) != null && i.length ? a.kids[0] : null;
            }
          }
          this.keyId || (this.keyId = xa(t));
          break;
        case Pe.PLAYREADY: {
          const n = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
          this.pssh = gh(n, null, s), this.keyId = Jo(s);
          break;
        }
        default: {
          let n = s.subarray(0, 16);
          if (n.length !== 16) {
            const a = new Uint8Array(16);
            a.set(n, 16 - n.length), n = a;
          }
          this.keyId = n;
          break;
        }
      }
    if (!this.keyId || this.keyId.byteLength !== 16) {
      let n;
      n = hd(t), n || (n = xa(t), n || (n = Js[this.uri])), n && (this.keyId = n, jt.setKeyIdForUri(this.uri, n));
    }
    return this;
  }
}
function hd(r) {
  const e = r == null ? void 0 : r[Pe.WIDEVINE];
  return e ? e.keyId : null;
}
function xa(r) {
  const e = r == null ? void 0 : r[Pe.PLAYREADY];
  if (e) {
    const t = Qo(e.uri);
    if (t)
      return Jo(t);
  }
  return null;
}
function dd(r) {
  const e = new Uint8Array(16);
  for (let t = 12; t < 16; t++)
    e[t] = r >> 8 * (15 - t) & 255;
  return e;
}
const Aa = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, Ia = /#EXT-X-MEDIA:(.*)/g, fd = /^#EXT(?:INF|-X-TARGETDURATION):/m, on = new RegExp([
  /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
  // duration (#EXTINF:<duration>,<title>), group 1 => duration, group 2 => title
  /(?!#) *(\S[^\r\n]*)/.source,
  // segment URI, group 3 => the URI (note newline is not eaten)
  /#.*/.source
  // All other non-segment oriented tags will match with all groups empty
].join("|"), "g"), gd = new RegExp([/#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class yt {
  static findGroup(e, t) {
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      if (i.id === t)
        return i;
    }
  }
  static resolve(e, t) {
    return Xn.buildAbsoluteURL(t, e, {
      alwaysNormalize: !0
    });
  }
  static isMediaPlaylist(e) {
    return fd.test(e);
  }
  static parseMasterPlaylist(e, t) {
    const s = Ea(e), i = {
      contentSteering: null,
      levels: [],
      playlistParsingError: null,
      sessionData: null,
      sessionKeys: null,
      startTimeOffset: null,
      variableList: null,
      hasVariableRefs: s
    }, n = [];
    if (Aa.lastIndex = 0, !e.startsWith("#EXTM3U"))
      return i.playlistParsingError = new Error("no EXTM3U delimiter"), i;
    let a;
    for (; (a = Aa.exec(e)) != null; )
      if (a[1]) {
        var o;
        const l = new ye(a[1], i), u = Mn(i, a[2]), h = {
          attrs: l,
          bitrate: l.decimalInteger("BANDWIDTH") || l.decimalInteger("AVERAGE-BANDWIDTH"),
          name: l.NAME,
          url: yt.resolve(u, t)
        }, d = l.decimalResolution("RESOLUTION");
        d && (h.width = d.width, h.height = d.height), Ra(l.CODECS, h);
        const f = l["SUPPLEMENTAL-CODECS"];
        f && (h.supplemental = {}, Ra(f, h.supplemental)), (o = h.unknownCodecs) != null && o.length || n.push(h), i.levels.push(h);
      } else if (a[3]) {
        const l = a[3], u = a[4];
        switch (l) {
          case "SESSION-DATA": {
            const h = new ye(u, i), d = h["DATA-ID"];
            d && (i.sessionData === null && (i.sessionData = {}), i.sessionData[d] = h);
            break;
          }
          case "SESSION-KEY": {
            const h = La(u, t, i);
            h.encrypted && h.isSupported() ? (i.sessionKeys === null && (i.sessionKeys = []), i.sessionKeys.push(h)) : ue.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${u}"`);
            break;
          }
          case "DEFINE": {
            {
              const h = new ye(u, i);
              Ta(i, h, t);
            }
            break;
          }
          case "CONTENT-STEERING": {
            const h = new ye(u, i);
            i.contentSteering = {
              uri: yt.resolve(h["SERVER-URI"], t),
              pathwayId: h["PATHWAY-ID"] || "."
            };
            break;
          }
          case "START": {
            i.startTimeOffset = ba(u);
            break;
          }
        }
      }
    const c = n.length > 0 && n.length < i.levels.length;
    return i.levels = c ? n : i.levels, i.levels.length === 0 && (i.playlistParsingError = new Error("no levels found in manifest")), i;
  }
  static parseMasterPlaylistMedia(e, t, s) {
    let i;
    const n = {}, a = s.levels, o = {
      AUDIO: a.map((l) => ({
        id: l.attrs.AUDIO,
        audioCodec: l.audioCodec
      })),
      SUBTITLES: a.map((l) => ({
        id: l.attrs.SUBTITLES,
        textCodec: l.textCodec
      })),
      "CLOSED-CAPTIONS": []
    };
    let c = 0;
    for (Ia.lastIndex = 0; (i = Ia.exec(e)) !== null; ) {
      const l = new ye(i[1], s), u = l.TYPE;
      if (u) {
        const h = o[u], d = n[u] || [];
        n[u] = d;
        const f = l.LANGUAGE, g = l["ASSOC-LANGUAGE"], p = l.CHANNELS, y = l.CHARACTERISTICS, E = l["INSTREAM-ID"], T = {
          attrs: l,
          bitrate: 0,
          id: c++,
          groupId: l["GROUP-ID"] || "",
          name: l.NAME || f || "",
          type: u,
          default: l.bool("DEFAULT"),
          autoselect: l.bool("AUTOSELECT"),
          forced: l.bool("FORCED"),
          lang: f,
          url: l.URI ? yt.resolve(l.URI, t) : ""
        };
        if (g && (T.assocLang = g), p && (T.channels = p), y && (T.characteristics = y), E && (T.instreamId = E), h != null && h.length) {
          const S = yt.findGroup(h, T.groupId) || h[0];
          _a(T, S, "audioCodec"), _a(T, S, "textCodec");
        }
        d.push(T);
      }
    }
    return n;
  }
  static parseLevelPlaylist(e, t, s, i, n, a) {
    var o;
    const c = {
      url: t
    }, l = new ad(t), u = l.fragments, h = [];
    let d = null, f = 0, g = 0, p = 0, y = 0, E = 0, T = null, S = new sn(i, c), v, x, C, A = -1, R = !1, b = null, L;
    if (on.lastIndex = 0, l.m3u8 = e, l.hasVariableRefs = Ea(e), ((o = on.exec(e)) == null ? void 0 : o[0]) !== "#EXTM3U")
      return l.playlistParsingError = new Error("Missing format identifier #EXTM3U"), l;
    for (; (v = on.exec(e)) !== null; ) {
      R && (R = !1, S = new sn(i, c), S.playlistOffset = p, S.setStart(p), S.sn = f, S.cc = y, E && (S.bitrate = E), S.level = s, d && (S.initSegment = d, d.rawProgramDateTime && (S.rawProgramDateTime = d.rawProgramDateTime, d.rawProgramDateTime = null), b && (S.setByteRange(b), b = null)));
      const H = v[1];
      if (H) {
        S.duration = parseFloat(H);
        const K = (" " + v[2]).slice(1);
        S.title = K || null, S.tagList.push(K ? ["INF", H, K] : ["INF", H]);
      } else if (v[3]) {
        if (G(S.duration)) {
          S.playlistOffset = p, S.setStart(p), C && Ca(S, C, l), S.sn = f, S.level = s, S.cc = y, u.push(S);
          const K = (" " + v[3]).slice(1);
          S.relurl = Mn(l, K), Nn(S, T, h), T = S, p += S.duration, f++, g = 0, R = !0;
        }
      } else {
        if (v = v[0].match(gd), !v) {
          ue.warn("No matches on slow regex match for level playlist!");
          continue;
        }
        for (x = 1; x < v.length && v[x] === void 0; x++)
          ;
        const K = (" " + v[x]).slice(1), F = (" " + v[x + 1]).slice(1), V = v[x + 2] ? (" " + v[x + 2]).slice(1) : null;
        switch (K) {
          case "BYTERANGE":
            T ? S.setByteRange(F, T) : S.setByteRange(F);
            break;
          case "PROGRAM-DATE-TIME":
            S.rawProgramDateTime = F, S.tagList.push(["PROGRAM-DATE-TIME", F]), A === -1 && (A = u.length);
            break;
          case "PLAYLIST-TYPE":
            l.type && Lt(l, K, v), l.type = F.toUpperCase();
            break;
          case "MEDIA-SEQUENCE":
            l.startSN !== 0 ? Lt(l, K, v) : u.length > 0 && Pa(l, K, v), f = l.startSN = parseInt(F);
            break;
          case "SKIP": {
            l.skippedSegments && Lt(l, K, v);
            const B = new ye(F, l), j = B.decimalInteger("SKIPPED-SEGMENTS");
            if (G(j)) {
              l.skippedSegments += j;
              for (let w = j; w--; )
                u.push(null);
              f += j;
            }
            const J = B.enumeratedString("RECENTLY-REMOVED-DATERANGES");
            J && (l.recentlyRemovedDateranges = (l.recentlyRemovedDateranges || []).concat(J.split("	")));
            break;
          }
          case "TARGETDURATION":
            l.targetduration !== 0 && Lt(l, K, v), l.targetduration = Math.max(parseInt(F), 1);
            break;
          case "VERSION":
            l.version !== null && Lt(l, K, v), l.version = parseInt(F);
            break;
          case "INDEPENDENT-SEGMENTS":
            break;
          case "ENDLIST":
            l.live || Lt(l, K, v), l.live = !1;
            break;
          case "#":
            (F || V) && S.tagList.push(V ? [F, V] : [F]);
            break;
          case "DISCONTINUITY":
            y++, S.tagList.push(["DIS"]);
            break;
          case "GAP":
            S.gap = !0, S.tagList.push([K]);
            break;
          case "BITRATE":
            S.tagList.push([K, F]), E = parseInt(F) * 1e3, G(E) ? S.bitrate = E : E = 0;
            break;
          case "DATERANGE": {
            const B = new ye(F, l), j = new qo(B, l.dateRanges[B.ID], l.dateRangeTagCount);
            l.dateRangeTagCount++, j.isValid || l.skippedSegments ? l.dateRanges[j.id] = j : ue.warn(`Ignoring invalid DATERANGE tag: "${F}"`), S.tagList.push(["EXT-X-DATERANGE", F]);
            break;
          }
          case "DEFINE": {
            {
              const B = new ye(F, l);
              "IMPORT" in B ? ed(l, B, a) : Ta(l, B, t);
            }
            break;
          }
          case "DISCONTINUITY-SEQUENCE":
            l.startCC !== 0 ? Lt(l, K, v) : u.length > 0 && Pa(l, K, v), l.startCC = y = parseInt(F);
            break;
          case "KEY": {
            const B = La(F, t, l);
            if (B.isSupported()) {
              if (B.method === "NONE") {
                C = void 0;
                break;
              }
              C || (C = {});
              const j = C[B.keyFormat];
              j != null && j.matches(B) || (j && (C = de({}, C)), C[B.keyFormat] = B);
            } else
              ue.warn(`[Keys] Ignoring unsupported EXT-X-KEY tag: "${F}"`);
            break;
          }
          case "START":
            l.startTimeOffset = ba(F);
            break;
          case "MAP": {
            const B = new ye(F, l);
            if (S.duration) {
              const j = new sn(i, c);
              Da(j, B, s, C), d = j, S.initSegment = d, d.rawProgramDateTime && !S.rawProgramDateTime && (S.rawProgramDateTime = d.rawProgramDateTime);
            } else {
              const j = S.byteRangeEndOffset;
              if (j) {
                const J = S.byteRangeStartOffset;
                b = `${j - J}@${J}`;
              } else
                b = null;
              Da(S, B, s, C), d = S, R = !0;
            }
            d.cc = y;
            break;
          }
          case "SERVER-CONTROL": {
            L && Lt(l, K, v), L = new ye(F), l.canBlockReload = L.bool("CAN-BLOCK-RELOAD"), l.canSkipUntil = L.optionalFloat("CAN-SKIP-UNTIL", 0), l.canSkipDateRanges = l.canSkipUntil > 0 && L.bool("CAN-SKIP-DATERANGES"), l.partHoldBack = L.optionalFloat("PART-HOLD-BACK", 0), l.holdBack = L.optionalFloat("HOLD-BACK", 0);
            break;
          }
          case "PART-INF": {
            l.partTarget && Lt(l, K, v);
            const B = new ye(F);
            l.partTarget = B.decimalFloatingPoint("PART-TARGET");
            break;
          }
          case "PART": {
            let B = l.partList;
            B || (B = l.partList = []);
            const j = g > 0 ? B[B.length - 1] : void 0, J = g++, w = new ye(F, l), $ = new eh(w, S, c, J, j);
            B.push($), S.duration += $.duration;
            break;
          }
          case "PRELOAD-HINT": {
            const B = new ye(F, l);
            l.preloadHint = B;
            break;
          }
          case "RENDITION-REPORT": {
            const B = new ye(F, l);
            l.renditionReports = l.renditionReports || [], l.renditionReports.push(B);
            break;
          }
          default:
            ue.warn(`line parsed but not handled: ${v}`);
            break;
        }
      }
    }
    T && !T.relurl ? (u.pop(), p -= T.duration, l.partList && (l.fragmentHint = T)) : l.partList && (Nn(S, T, h), S.cc = y, l.fragmentHint = S, C && Ca(S, C, l)), l.targetduration || (l.playlistParsingError = new Error("Missing Target Duration"));
    const P = u.length, M = u[0], U = u[P - 1];
    if (p += l.skippedSegments * l.targetduration, p > 0 && P && U) {
      l.averagetargetduration = p / P;
      const H = U.sn;
      l.endSN = H !== "initSegment" ? H : 0, l.live || (U.endList = !0), A > 0 && (pd(u, A), M && h.unshift(M));
    }
    return l.fragmentHint && (p += l.fragmentHint.duration), l.totalduration = p, h.length && l.dateRangeTagCount && M && el(h, l), l.endCC = y, l;
  }
}
function el(r, e) {
  let t = r.length;
  if (!t)
    if (e.hasProgramDateTime) {
      const o = e.fragments[e.fragments.length - 1];
      r.push(o), t++;
    } else
      return;
  const s = r[t - 1], i = e.live ? 1 / 0 : e.totalduration, n = Object.keys(e.dateRanges);
  for (let o = n.length; o--; ) {
    const c = e.dateRanges[n[o]], l = c.startDate.getTime();
    c.tagAnchor = s.ref;
    for (let u = t; u--; ) {
      var a;
      if (((a = r[u]) == null ? void 0 : a.sn) < e.startSN)
        break;
      const h = md(e, l, r, u, i);
      if (h !== -1) {
        c.tagAnchor = e.fragments[h].ref;
        break;
      }
    }
  }
}
function md(r, e, t, s, i) {
  const n = t[s];
  if (n) {
    const o = n.programDateTime;
    if (e >= o || s === 0) {
      var a;
      const c = (((a = t[s + 1]) == null ? void 0 : a.start) || i) - n.start;
      if (e <= o + c * 1e3) {
        const l = t[s].sn - r.startSN;
        if (l < 0)
          return -1;
        const u = r.fragments;
        if (u.length > t.length) {
          const d = (t[s + 1] || u[u.length - 1]).sn - r.startSN;
          for (let f = d; f > l; f--) {
            const g = u[f].programDateTime;
            if (e >= g && e < g + u[f].duration * 1e3)
              return f;
          }
        }
        return l;
      }
    }
  }
  return -1;
}
function La(r, e, t) {
  var s, i;
  const n = new ye(r, t), a = (s = n.METHOD) != null ? s : "", o = n.URI, c = n.hexadecimalInteger("IV"), l = n.KEYFORMATVERSIONS, u = (i = n.KEYFORMAT) != null ? i : "identity";
  o && n.IV && !c && ue.error(`Invalid IV: ${n.IV}`);
  const h = o ? yt.resolve(o, e) : "", d = (l || "1").split("/").map(Number).filter(Number.isFinite);
  return new jt(a, h, u, d, c, n.KEYID);
}
function ba(r) {
  const t = new ye(r).decimalFloatingPoint("TIME-OFFSET");
  return G(t) ? t : null;
}
function Ra(r, e) {
  let t = (r || "").split(/[ ,]+/).filter((s) => s);
  ["video", "audio", "text"].forEach((s) => {
    const i = t.filter((n) => Jn(n, s));
    i.length && (e[`${s}Codec`] = i.map((n) => n.split("/")[0]).join(","), t = t.filter((n) => i.indexOf(n) === -1));
  }), e.unknownCodecs = t;
}
function _a(r, e, t) {
  const s = e[t];
  s && (r[t] = s);
}
function pd(r, e) {
  let t = r[e];
  for (let s = e; s--; ) {
    const i = r[s];
    if (!i)
      return;
    i.programDateTime = t.programDateTime - i.duration * 1e3, t = i;
  }
}
function Nn(r, e, t) {
  r.rawProgramDateTime ? t.push(r) : e != null && e.programDateTime && (r.programDateTime = e.endProgramDateTime);
}
function Da(r, e, t, s) {
  r.relurl = e.URI, e.BYTERANGE && r.setByteRange(e.BYTERANGE), r.level = t, r.sn = "initSegment", s && (r.levelkeys = s), r.initSegment = null;
}
function Ca(r, e, t) {
  r.levelkeys = e;
  const {
    encryptedFragments: s
  } = t;
  (!s.length || s[s.length - 1].levelkeys !== e) && Object.keys(e).some((i) => e[i].isCommonEncryption) && s.push(r);
}
function Lt(r, e, t) {
  r.playlistParsingError = new Error(`#EXT-X-${e} must not appear more than once (${t[0]})`);
}
function Pa(r, e, t) {
  r.playlistParsingError = new Error(`#EXT-X-${e} must appear before the first Media Segment (${t[0]})`);
}
function ln(r, e) {
  const t = e.startPTS;
  if (G(t)) {
    let s = 0, i;
    e.sn > r.sn ? (s = t - r.start, i = r) : (s = r.start - t, i = e), i.duration !== s && i.setDuration(s);
  } else e.sn > r.sn ? r.cc === e.cc && r.minEndPTS ? e.setStart(r.start + (r.minEndPTS - r.start)) : e.setStart(r.start + r.duration) : e.setStart(Math.max(r.start - e.duration, 0));
}
function tl(r, e, t, s, i, n, a) {
  s - t <= 0 && (a.warn("Fragment should have a positive duration", e), s = t + e.duration, n = i + e.duration);
  let c = t, l = s;
  const u = e.startPTS, h = e.endPTS;
  if (G(u)) {
    const E = Math.abs(u - t);
    r && E > r.totalduration ? a.warn(`media timestamps and playlist times differ by ${E}s for level ${e.level} ${r.url}`) : G(e.deltaPTS) ? e.deltaPTS = Math.max(E, e.deltaPTS) : e.deltaPTS = E, c = Math.max(t, u), t = Math.min(t, u), i = e.startDTS !== void 0 ? Math.min(i, e.startDTS) : i, l = Math.min(s, h), s = Math.max(s, h), n = e.endDTS !== void 0 ? Math.max(n, e.endDTS) : n;
  }
  const d = t - e.start;
  e.start !== 0 && e.setStart(t), e.setDuration(s - e.start), e.startPTS = t, e.maxStartPTS = c, e.startDTS = i, e.endPTS = s, e.minEndPTS = l, e.endDTS = n;
  const f = e.sn;
  if (!r || f < r.startSN || f > r.endSN)
    return 0;
  let g;
  const p = f - r.startSN, y = r.fragments;
  for (y[p] = e, g = p; g > 0; g--)
    ln(y[g], y[g - 1]);
  for (g = p; g < y.length - 1; g++)
    ln(y[g], y[g + 1]);
  return r.fragmentHint && ln(y[y.length - 1], r.fragmentHint), r.PTSKnown = r.alignedSliding = !0, d;
}
function yd(r, e, t) {
  if (r === e)
    return;
  let s = null;
  const i = r.fragments;
  for (let u = i.length - 1; u >= 0; u--) {
    const h = i[u].initSegment;
    if (h) {
      s = h;
      break;
    }
  }
  r.fragmentHint && delete r.fragmentHint.endPTS;
  let n;
  Sd(r, e, (u, h, d, f) => {
    if ((!e.startCC || e.skippedSegments) && h.cc !== u.cc) {
      const g = u.cc - h.cc;
      for (let p = d; p < f.length; p++)
        f[p].cc += g;
      e.endCC = f[f.length - 1].cc;
    }
    G(u.startPTS) && G(u.endPTS) && (h.setStart(h.startPTS = u.startPTS), h.startDTS = u.startDTS, h.maxStartPTS = u.maxStartPTS, h.endPTS = u.endPTS, h.endDTS = u.endDTS, h.minEndPTS = u.minEndPTS, h.setDuration(u.endPTS - u.startPTS), h.duration && (n = h), e.PTSKnown = e.alignedSliding = !0), u.hasStreams && (h.elementaryStreams = u.elementaryStreams), h.loader = u.loader, u.hasStats && (h.stats = u.stats), u.initSegment && (h.initSegment = u.initSegment, s = u.initSegment);
  });
  const a = e.fragments, o = e.fragmentHint ? a.concat(e.fragmentHint) : a;
  if (s && o.forEach((u) => {
    var h;
    u && (!u.initSegment || u.initSegment.relurl === ((h = s) == null ? void 0 : h.relurl)) && (u.initSegment = s);
  }), e.skippedSegments) {
    if (e.deltaUpdateFailed = a.some((u) => !u), e.deltaUpdateFailed) {
      t.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
      for (let u = e.skippedSegments; u--; )
        a.shift();
      e.startSN = a[0].sn;
    } else {
      e.canSkipDateRanges && (e.dateRanges = Ed(r.dateRanges, e, t));
      const u = r.fragments.filter((h) => h.rawProgramDateTime);
      if (r.hasProgramDateTime && !e.hasProgramDateTime)
        for (let h = 1; h < o.length; h++)
          o[h].programDateTime === null && Nn(o[h], o[h - 1], u);
      el(u, e);
    }
    e.endCC = a[a.length - 1].cc;
  }
  if (!e.startCC) {
    var c;
    const u = nl(r, e.startSN - 1);
    e.startCC = (c = u == null ? void 0 : u.cc) != null ? c : a[0].cc;
  }
  Td(r.partList, e.partList, (u, h) => {
    h.elementaryStreams = u.elementaryStreams, h.stats = u.stats;
  }), n ? tl(e, n, n.startPTS, n.endPTS, n.startDTS, n.endDTS, t) : sl(r, e), a.length && (e.totalduration = e.edge - a[0].start), e.driftStartTime = r.driftStartTime, e.driftStart = r.driftStart;
  const l = e.advancedDateTime;
  if (e.advanced && l) {
    const u = e.edge;
    e.driftStart || (e.driftStartTime = l, e.driftStart = u), e.driftEndTime = l, e.driftEnd = u;
  } else
    e.driftEndTime = r.driftEndTime, e.driftEnd = r.driftEnd, e.advancedDateTime = r.advancedDateTime;
  e.requestScheduled === -1 && (e.requestScheduled = r.requestScheduled);
}
function Ed(r, e, t) {
  const {
    dateRanges: s,
    recentlyRemovedDateranges: i
  } = e, n = de({}, r);
  i && i.forEach((c) => {
    delete n[c];
  });
  const o = Object.keys(n).length;
  return o ? (Object.keys(s).forEach((c) => {
    const l = n[c], u = new qo(s[c].attr, l);
    u.isValid ? (n[c] = u, l || (u.tagOrder += o)) : t.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${ge(s[c].attr)}"`);
  }), n) : s;
}
function Td(r, e, t) {
  if (r && e) {
    let s = 0;
    for (let i = 0, n = r.length; i <= n; i++) {
      const a = r[i], o = e[i + s];
      a && o && a.index === o.index && a.fragment.sn === o.fragment.sn ? t(a, o) : s--;
    }
  }
}
function Sd(r, e, t) {
  const s = e.skippedSegments, i = Math.max(r.startSN, e.startSN) - e.startSN, n = (r.fragmentHint ? 1 : 0) + (s ? e.endSN : Math.min(r.endSN, e.endSN)) - e.startSN, a = e.startSN - r.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, c = r.fragmentHint ? r.fragments.concat(r.fragmentHint) : r.fragments;
  for (let l = i; l <= n; l++) {
    const u = c[a + l];
    let h = o[l];
    if (s && !h && u && (h = e.fragments[l] = u), u && h) {
      t(u, h, l, o);
      const d = u.relurl, f = h.relurl;
      if (d && vd(d, f)) {
        e.playlistParsingError = ka(`media sequence mismatch ${h.sn}:`, r, e, u, h);
        return;
      } else if (u.cc !== h.cc) {
        e.playlistParsingError = ka(`discontinuity sequence mismatch (${u.cc}!=${h.cc})`, r, e, u, h);
        return;
      }
    }
  }
}
function ka(r, e, t, s, i) {
  return new Error(`${r} ${i.url}
Playlist starting @${e.startSN}
${e.m3u8}

Playlist starting @${t.startSN}
${t.m3u8}`);
}
function sl(r, e, t = !0) {
  const s = e.startSN + e.skippedSegments - r.startSN, i = r.fragments, n = s >= 0;
  let a = 0;
  if (n && s < i.length)
    a = i[s].start;
  else if (n && e.startSN === r.endSN + 1)
    a = r.fragmentEnd;
  else if (n && t)
    a = r.fragmentStart + s * e.levelTargetDuration;
  else if (!e.skippedSegments && e.fragmentStart === 0)
    a = r.fragmentStart;
  else
    return;
  $n(e, a);
}
function $n(r, e) {
  if (e) {
    const t = r.fragments;
    for (let s = r.skippedSegments; s < t.length; s++)
      t[s].addStart(e);
    r.fragmentHint && r.fragmentHint.addStart(e);
  }
}
function il(r, e = 1 / 0) {
  let t = 1e3 * r.targetduration;
  if (r.updated) {
    const s = r.fragments;
    if (s.length && t * 4 > e) {
      const n = s[s.length - 1].duration * 1e3;
      n < t && (t = n);
    }
  } else
    t /= 2;
  return Math.round(t);
}
function nl(r, e, t) {
  if (!r)
    return null;
  let s = r.fragments[e - r.startSN];
  return s || (s = r.fragmentHint, s && s.sn === e) ? s : e < r.startSN && t && t.sn === e ? t : null;
}
function wa(r, e, t) {
  return r ? rl(r.partList, e, t) : null;
}
function rl(r, e, t) {
  if (r)
    for (let s = r.length; s--; ) {
      const i = r[s];
      if (i.index === t && i.fragment.sn === e)
        return i;
    }
  return null;
}
function al(r) {
  r.forEach((e, t) => {
    var s;
    (s = e.details) == null || s.fragments.forEach((i) => {
      i.level = t, i.initSegment && (i.initSegment.level = t);
    });
  });
}
function vd(r, e) {
  return r !== e && e ? Oa(r) !== Oa(e) : !1;
}
function Oa(r) {
  return r.replace(/\?[^?]*$/, "");
}
function Ds(r, e) {
  for (let s = 0, i = r.length; s < i; s++) {
    var t;
    if (((t = r[s]) == null ? void 0 : t.cc) === e)
      return r[s];
  }
  return null;
}
function xd(r, e) {
  return !!(r && e.startCC < r.endCC && e.endCC > r.startCC);
}
function Ma(r, e) {
  const t = r.start + e;
  r.startPTS = t, r.setStart(t), r.endPTS = t + r.duration;
}
function ol(r, e) {
  const t = e.fragments;
  for (let s = 0, i = t.length; s < i; s++)
    Ma(t[s], r);
  e.fragmentHint && Ma(e.fragmentHint, r), e.alignedSliding = !0;
}
function Ad(r, e) {
  r && (ll(e, r), e.alignedSliding || Ci(e, r), !e.alignedSliding && !e.skippedSegments && sl(r, e, !1));
}
function ll(r, e) {
  if (!xd(e, r))
    return;
  const t = Math.min(e.endCC, r.endCC), s = Ds(e.fragments, t), i = Ds(r.fragments, t);
  if (!s || !i)
    return;
  ue.log(`Aligning playlist at start of dicontinuity sequence ${t}`);
  const n = s.start - i.start;
  ol(n, r);
}
function Ci(r, e) {
  if (!r.hasProgramDateTime || !e.hasProgramDateTime)
    return;
  const t = r.fragments, s = e.fragments;
  if (!t.length || !s.length)
    return;
  let i, n;
  const a = Math.min(e.endCC, r.endCC);
  e.startCC < a && r.startCC < a && (i = Ds(s, a), n = Ds(t, a)), (!i || !n) && (i = s[Math.floor(s.length / 2)], n = Ds(t, i.cc) || t[Math.floor(t.length / 2)]);
  const o = i.programDateTime, c = n.programDateTime;
  if (!o || !c)
    return;
  const l = (c - o) / 1e3 - (n.start - i.start);
  ol(l, r);
}
function Be(r, e, t) {
  We(r, e, t), r.addEventListener(e, t);
}
function We(r, e, t) {
  r.removeEventListener(e, t);
}
const Id = {
  toString: function(r) {
    let e = "";
    const t = r.length;
    for (let s = 0; s < t; s++)
      e += `[${r.start(s).toFixed(3)}-${r.end(s).toFixed(3)}]`;
    return e;
  }
}, k = {
  STOPPED: "STOPPED",
  IDLE: "IDLE",
  KEY_LOADING: "KEY_LOADING",
  FRAG_LOADING: "FRAG_LOADING",
  FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
  WAITING_TRACK: "WAITING_TRACK",
  PARSING: "PARSING",
  PARSED: "PARSED",
  ENDED: "ENDED",
  ERROR: "ERROR",
  WAITING_INIT_PTS: "WAITING_INIT_PTS",
  WAITING_LEVEL: "WAITING_LEVEL"
};
class ar extends jo {
  constructor(e, t, s, i, n) {
    super(i, e.logger), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = k.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.buffering = !0, this.loadingParts = !1, this.loopSn = void 0, this.onMediaSeeking = () => {
      const {
        config: a,
        fragCurrent: o,
        media: c,
        mediaBuffer: l,
        state: u
      } = this, h = c ? c.currentTime : 0, d = te.bufferInfo(l || c, h, a.maxBufferHole), f = !d.len;
      if (this.log(`Media seeking to ${G(h) ? h.toFixed(3) : h}, state: ${u}, ${f ? "out of" : "in"} buffer`), this.state === k.ENDED)
        this.resetLoadingState();
      else if (o) {
        const g = a.maxFragLookUpTolerance, p = o.start - g, y = o.start + o.duration + g;
        if (f || y < d.start || p > d.end) {
          const E = h > y;
          (h < p || E) && (E && o.loader && (this.log(`Cancelling fragment load for seek (sn: ${o.sn})`), o.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
        }
      }
      if (c) {
        this.fragmentTracker.removeFragmentsInRange(h, 1 / 0, this.playlistType, !0);
        const g = this.lastCurrentTime;
        if (h > g && (this.lastCurrentTime = h), !this.loadingParts) {
          const p = Math.max(d.end, h), y = this.shouldLoadParts(this.getLevelDetails(), p);
          y && (this.log(`LL-Part loading ON after seeking to ${h.toFixed(2)} with buffer @${p.toFixed(2)}`), this.loadingParts = y);
        }
      }
      this.hls.hasEnoughToStart || (this.log(`Setting ${f ? "startPosition" : "nextLoadPosition"} to ${h} for seek without enough to start`), this.nextLoadPosition = h, f && (this.startPosition = h)), f && this.state === k.IDLE && this.tickImmediate();
    }, this.onMediaEnded = () => {
      this.log("setting startPosition to 0 because media ended"), this.startPosition = this.lastCurrentTime = 0;
    }, this.playlistType = n, this.hls = e, this.fragmentLoader = new Zh(e.config), this.keyLoader = s, this.fragmentTracker = t, this.config = e.config, this.decrypter = new sr(e.config);
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.ERROR, this.onError, this);
  }
  doTick() {
    this.onTickEnd();
  }
  onTickEnd() {
  }
  startLoad(e) {
  }
  stopLoad() {
    if (this.state === k.STOPPED)
      return;
    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
    const e = this.fragCurrent;
    e != null && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = k.STOPPED;
  }
  get startPositionValue() {
    const {
      nextLoadPosition: e,
      startPosition: t
    } = this;
    return t === -1 && e ? e : t;
  }
  get bufferingEnabled() {
    return this.buffering;
  }
  pauseBuffering() {
    this.buffering = !1;
  }
  resumeBuffering() {
    this.buffering = !0;
  }
  get inFlightFrag() {
    return {
      frag: this.fragCurrent,
      state: this.state
    };
  }
  _streamEnded(e, t) {
    if (t.live || !this.media)
      return !1;
    const s = e.end || 0, i = this.config.timelineOffset || 0;
    if (s <= i)
      return !1;
    const n = e.buffered;
    this.config.maxBufferHole && n && n.length > 1 && (e = te.bufferedInfo(n, e.start, 0));
    const a = e.nextStart;
    if (a && a > i && a < t.edge || this.media.currentTime < e.start)
      return !1;
    const c = t.partList;
    if (c != null && c.length) {
      const u = c[c.length - 1];
      return te.isBuffered(this.media, u.start + u.duration / 2);
    }
    const l = t.fragments[t.fragments.length - 1].type;
    return this.fragmentTracker.isEndListAppended(l);
  }
  getLevelDetails() {
    if (this.levels && this.levelLastLoaded !== null)
      return this.levelLastLoaded.details;
  }
  get timelineOffset() {
    const e = this.config.timelineOffset;
    if (e) {
      var t;
      return ((t = this.getLevelDetails()) == null ? void 0 : t.appliedTimelineOffset) || e;
    }
    return 0;
  }
  onMediaAttached(e, t) {
    const s = this.media = this.mediaBuffer = t.media;
    Be(s, "seeking", this.onMediaSeeking), Be(s, "ended", this.onMediaEnded);
    const i = this.config;
    this.levels && i.autoStartLoad && this.state === k.STOPPED && this.startLoad(i.startPosition);
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia, i = this.media;
    if (i !== null) {
      if (i.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), We(i, "seeking", this.onMediaSeeking), We(i, "ended", this.onMediaEnded), this.keyLoader && !s && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loopSn = void 0, s) {
        this.resetLoadingState(), this.resetTransmuxer();
        return;
      }
      this.loadingParts = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad();
    }
  }
  onManifestLoading() {
    this.initPTS = [], this.levels = this.levelLastLoaded = this.fragCurrent = null, this.lastCurrentTime = this.startPosition = 0, this.startFragRequested = !1;
  }
  onError(e, t) {
  }
  onManifestLoaded(e, t) {
    this.startTimeOffset = t.startTimeOffset;
  }
  onHandlerDestroying() {
    this.stopLoad(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), super.onHandlerDestroying(), this.hls = this.onMediaSeeking = this.onMediaEnded = null;
  }
  onHandlerDestroyed() {
    this.state = k.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed();
  }
  loadFragment(e, t, s) {
    this.startFragRequested = !0, this._loadFragForPlayback(e, t, s);
  }
  _loadFragForPlayback(e, t, s) {
    const i = (n) => {
      const a = n.frag;
      if (this.fragContextChanged(a)) {
        this.warn(`${a.type} sn: ${a.sn}${n.part ? " part: " + n.part.index : ""} of ${this.fragInfo(a, !1, n.part)}) was dropped during download.`), this.fragmentTracker.removeFragment(a);
        return;
      }
      a.stats.chunkCount++, this._handleFragmentLoadProgress(n);
    };
    this._doFragLoad(e, t, s, i).then((n) => {
      if (!n)
        return;
      const a = this.state, o = n.frag;
      if (this.fragContextChanged(o)) {
        (a === k.FRAG_LOADING || !this.fragCurrent && a === k.PARSING) && (this.fragmentTracker.removeFragment(o), this.state = k.IDLE);
        return;
      }
      "payload" in n && (this.log(`Loaded ${o.type} sn: ${o.sn} of ${this.playlistLabel()} ${o.level}`), this.hls.trigger(m.FRAG_LOADED, n)), this._handleFragmentLoadComplete(n);
    }).catch((n) => {
      this.state === k.STOPPED || this.state === k.ERROR || (this.warn(`Frag error: ${(n == null ? void 0 : n.message) || n}`), this.resetFragmentLoading(e));
    });
  }
  clearTrackerIfNeeded(e) {
    var t;
    const {
      fragmentTracker: s
    } = this;
    if (s.getState(e) === Re.APPENDING) {
      const n = e.type, a = this.getFwdBufferInfo(this.mediaBuffer, n), o = Math.max(e.duration, a ? a.len : this.config.maxBufferLength), c = this.backtrackFragment;
      ((c ? e.sn - c.sn : 0) === 1 || this.reduceMaxBufferLength(o, e.duration)) && s.removeFragment(e);
    } else ((t = this.mediaBuffer) == null ? void 0 : t.buffered.length) === 0 ? s.removeAllFragments() : s.hasParts(e.type) && (s.detectPartialFragments({
      frag: e,
      part: null,
      stats: e.stats,
      id: e.type
    }), s.getState(e) === Re.PARTIAL && s.removeFragment(e));
  }
  checkLiveUpdate(e) {
    if (e.updated && !e.live) {
      const t = e.fragments[e.fragments.length - 1];
      this.fragmentTracker.detectPartialFragments({
        frag: t,
        part: null,
        stats: t.stats,
        id: t.type
      });
    }
    e.fragments[0] || (e.deltaUpdateFailed = !0);
  }
  waitForLive(e) {
    const t = e.details;
    return (t == null ? void 0 : t.live) && t.type !== "EVENT" && (this.levelLastLoaded !== e || t.expired);
  }
  flushMainBuffer(e, t, s = null) {
    if (!(e - t))
      return;
    const i = {
      startOffset: e,
      endOffset: t,
      type: s
    };
    this.hls.trigger(m.BUFFER_FLUSHING, i);
  }
  _loadInitSegment(e, t) {
    this._doFragLoad(e, t).then((s) => {
      const i = s == null ? void 0 : s.frag;
      if (!i || this.fragContextChanged(i) || !this.levels)
        throw new Error("init load aborted");
      return s;
    }).then((s) => {
      const {
        hls: i
      } = this, {
        frag: n,
        payload: a
      } = s, o = n.decryptdata;
      if (a && a.byteLength > 0 && o != null && o.key && o.iv && os(o.method)) {
        const c = self.performance.now();
        return this.decrypter.decrypt(new Uint8Array(a), o.key.buffer, o.iv.buffer, nr(o.method)).catch((l) => {
          throw i.trigger(m.ERROR, {
            type: X.MEDIA_ERROR,
            details: D.FRAG_DECRYPT_ERROR,
            fatal: !1,
            error: l,
            reason: l.message,
            frag: n
          }), l;
        }).then((l) => {
          const u = self.performance.now();
          return i.trigger(m.FRAG_DECRYPTED, {
            frag: n,
            payload: l,
            stats: {
              tstart: c,
              tdecrypt: u
            }
          }), s.payload = l, this.completeInitSegmentLoad(s);
        });
      }
      return this.completeInitSegmentLoad(s);
    }).catch((s) => {
      this.state === k.STOPPED || this.state === k.ERROR || (this.warn(s), this.resetFragmentLoading(e));
    });
  }
  completeInitSegmentLoad(e) {
    const {
      levels: t
    } = this;
    if (!t)
      throw new Error("init load aborted, missing levels");
    const s = e.frag.stats;
    this.state !== k.STOPPED && (this.state = k.IDLE), e.frag.data = new Uint8Array(e.payload), s.parsing.start = s.buffering.start = self.performance.now(), s.parsing.end = s.buffering.end = self.performance.now(), this.tick();
  }
  unhandledEncryptionError(e, t) {
    var s, i;
    const n = e.tracks;
    if (n && !t.encrypted && ((s = n.audio) != null && s.encrypted || (i = n.video) != null && i.encrypted) && (!this.config.emeEnabled || !this.keyLoader.emeController)) {
      const a = this.media, o = new Error(`Encrypted track with no key in ${this.fragInfo(t)} (media ${a ? "attached mediaKeys: " + a.mediaKeys : "detached"})`);
      return this.warn(o.message), !a || a.mediaKeys ? !1 : (this.hls.trigger(m.ERROR, {
        type: X.KEY_SYSTEM_ERROR,
        details: D.KEY_SYSTEM_NO_KEYS,
        fatal: !1,
        error: o,
        frag: t
      }), this.resetTransmuxer(), !0);
    }
    return !1;
  }
  fragContextChanged(e) {
    const {
      fragCurrent: t
    } = this;
    return !e || !t || e.sn !== t.sn || e.level !== t.level;
  }
  fragBufferedComplete(e, t) {
    const s = this.mediaBuffer ? this.mediaBuffer : this.media;
    if (this.log(`Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)} > buffer:${s ? Id.toString(te.getBuffered(s)) : "(detached)"})`), Ae(e)) {
      var i;
      if (e.type !== W.SUBTITLE) {
        const a = e.elementaryStreams;
        if (!Object.keys(a).some((o) => !!a[o])) {
          this.state = k.IDLE;
          return;
        }
      }
      const n = (i = this.levels) == null ? void 0 : i[e.level];
      n != null && n.fragmentError && (this.log(`Resetting level fragment error count of ${n.fragmentError} on frag buffered`), n.fragmentError = 0);
    }
    this.state = k.IDLE;
  }
  _handleFragmentLoadComplete(e) {
    const {
      transmuxer: t
    } = this;
    if (!t)
      return;
    const {
      frag: s,
      part: i,
      partsLoaded: n
    } = e, a = !n || n.length === 0 || n.some((c) => !c), o = new ir(s.level, s.sn, s.stats.chunkCount + 1, 0, i ? i.index : -1, !a);
    t.flush(o);
  }
  _handleFragmentLoadProgress(e) {
  }
  _doFragLoad(e, t, s = null, i) {
    var n;
    this.fragCurrent = e;
    const a = t.details;
    if (!this.levels || !a)
      throw new Error(`frag load aborted, missing level${a ? "" : " detail"}s`);
    let o = null;
    if (e.encrypted && !((n = e.decryptdata) != null && n.key)) {
      if (this.log(`Loading key for ${e.sn} of [${a.startSN}-${a.endSN}], ${this.playlistLabel()} ${e.level}`), this.state = k.KEY_LOADING, this.fragCurrent = e, o = this.keyLoader.load(e).then((d) => {
        if (!this.fragContextChanged(d.frag))
          return this.hls.trigger(m.KEY_LOADED, d), this.state === k.KEY_LOADING && (this.state = k.IDLE), d;
      }), this.hls.trigger(m.KEY_LOADING, {
        frag: e
      }), this.fragCurrent === null)
        return this.log("context changed in KEY_LOADING"), Promise.resolve(null);
    } else e.encrypted || (o = this.keyLoader.loadClear(e, a.encryptedFragments, this.startFragRequested), o && this.log("[eme] blocking frag load until media-keys acquired"));
    const c = this.fragPrevious;
    if (Ae(e) && (!c || e.sn !== c.sn)) {
      const d = this.shouldLoadParts(t.details, e.end);
      d !== this.loadingParts && (this.log(`LL-Part loading ${d ? "ON" : "OFF"} loading sn ${c == null ? void 0 : c.sn}->${e.sn}`), this.loadingParts = d);
    }
    if (s = Math.max(e.start, s || 0), this.loadingParts && Ae(e)) {
      const d = a.partList;
      if (d && i) {
        s > a.fragmentEnd && a.fragmentHint && (e = a.fragmentHint);
        const f = this.getNextPart(d, e, s);
        if (f > -1) {
          const g = d[f];
          e = this.fragCurrent = g.fragment, this.log(`Loading ${e.type} sn: ${e.sn} part: ${g.index} (${f}/${d.length - 1}) of ${this.fragInfo(e, !1, g)}) cc: ${e.cc} [${a.startSN}-${a.endSN}], target: ${parseFloat(s.toFixed(3))}`), this.nextLoadPosition = g.start + g.duration, this.state = k.FRAG_LOADING;
          let p;
          return o ? p = o.then((y) => !y || this.fragContextChanged(y.frag) ? null : this.doFragPartsLoad(e, g, t, i)).catch((y) => this.handleFragLoadError(y)) : p = this.doFragPartsLoad(e, g, t, i).catch((y) => this.handleFragLoadError(y)), this.hls.trigger(m.FRAG_LOADING, {
            frag: e,
            part: g,
            targetBufferTime: s
          }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : p;
        } else if (!e.url || this.loadedEndOfParts(d, s))
          return Promise.resolve(null);
      }
    }
    if (Ae(e) && this.loadingParts) {
      var l;
      this.log(`LL-Part loading OFF after next part miss @${s.toFixed(2)} Check buffer at sn: ${e.sn} loaded parts: ${(l = a.partList) == null ? void 0 : l.filter((d) => d.loaded).map((d) => `[${d.start}-${d.end}]`)}`), this.loadingParts = !1;
    } else if (!e.url)
      return Promise.resolve(null);
    this.log(`Loading ${e.type} sn: ${e.sn} of ${this.fragInfo(e, !1)}) cc: ${e.cc} ${"[" + a.startSN + "-" + a.endSN + "]"}, target: ${parseFloat(s.toFixed(3))}`), G(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = k.FRAG_LOADING;
    const u = this.config.progressive;
    let h;
    return u && o ? h = o.then((d) => !d || this.fragContextChanged(d.frag) ? null : this.fragmentLoader.load(e, i)).catch((d) => this.handleFragLoadError(d)) : h = Promise.all([this.fragmentLoader.load(e, u ? i : void 0), o]).then(([d]) => (!u && i && i(d), d)).catch((d) => this.handleFragLoadError(d)), this.hls.trigger(m.FRAG_LOADING, {
      frag: e,
      targetBufferTime: s
    }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : h;
  }
  doFragPartsLoad(e, t, s, i) {
    return new Promise((n, a) => {
      var o;
      const c = [], l = (o = s.details) == null ? void 0 : o.partList, u = (h) => {
        this.fragmentLoader.loadPart(e, h, i).then((d) => {
          c[h.index] = d;
          const f = d.part;
          this.hls.trigger(m.FRAG_LOADED, d);
          const g = wa(s.details, e.sn, h.index + 1) || rl(l, e.sn, h.index + 1);
          if (g)
            u(g);
          else
            return n({
              frag: e,
              part: f,
              partsLoaded: c
            });
        }).catch(a);
      };
      u(t);
    });
  }
  handleFragLoadError(e) {
    if ("data" in e) {
      const t = e.data;
      t.frag && t.details === D.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : t.frag && t.type === X.KEY_SYSTEM_ERROR ? (t.frag.abortRequests(), this.resetStartWhenNotLoaded(), this.resetFragmentLoading(t.frag)) : this.hls.trigger(m.ERROR, t);
    } else
      this.hls.trigger(m.ERROR, {
        type: X.OTHER_ERROR,
        details: D.INTERNAL_EXCEPTION,
        err: e,
        error: e,
        fatal: !0
      });
    return null;
  }
  _handleTransmuxerFlush(e) {
    const t = this.getCurrentContext(e);
    if (!t || this.state !== k.PARSING) {
      !this.fragCurrent && this.state !== k.STOPPED && this.state !== k.ERROR && (this.state = k.IDLE);
      return;
    }
    const {
      frag: s,
      part: i,
      level: n
    } = t, a = self.performance.now();
    s.stats.parsing.end = a, i && (i.stats.parsing.end = a);
    const o = this.getLevelDetails(), l = o && s.sn > o.endSN || this.shouldLoadParts(o, s.end);
    l !== this.loadingParts && (this.log(`LL-Part loading ${l ? "ON" : "OFF"} after parsing segment ending @${s.end.toFixed(2)}`), this.loadingParts = l), this.updateLevelTiming(s, i, n, e.partial);
  }
  shouldLoadParts(e, t) {
    if (this.config.lowLatencyMode) {
      if (!e)
        return this.loadingParts;
      if (e.partList) {
        var s;
        const n = e.partList[0];
        if (n.fragment.type === W.SUBTITLE)
          return !1;
        const a = n.end + (((s = e.fragmentHint) == null ? void 0 : s.duration) || 0);
        if (t >= a) {
          var i;
          if ((this.hls.hasEnoughToStart ? ((i = this.media) == null ? void 0 : i.currentTime) || this.lastCurrentTime : this.getLoadPosition()) > n.start - n.fragment.duration)
            return !0;
        }
      }
    }
    return !1;
  }
  getCurrentContext(e) {
    const {
      levels: t,
      fragCurrent: s
    } = this, {
      level: i,
      sn: n,
      part: a
    } = e;
    if (!(t != null && t[i]))
      return this.warn(`Levels object was unset while buffering fragment ${n} of ${this.playlistLabel()} ${i}. The current chunk will not be buffered.`), null;
    const o = t[i], c = o.details, l = a > -1 ? wa(c, n, a) : null, u = l ? l.fragment : nl(c, n, s);
    return u ? (s && s !== u && (u.stats = s.stats), {
      frag: u,
      part: l,
      level: o
    }) : null;
  }
  bufferFragmentData(e, t, s, i, n) {
    if (this.state !== k.PARSING)
      return;
    const {
      data1: a,
      data2: o
    } = e;
    let c = a;
    if (o && (c = it(a, o)), !c.length)
      return;
    const l = this.initPTS[t.cc], u = l ? -l.baseTime / l.timescale : void 0, h = {
      type: e.type,
      frag: t,
      part: s,
      chunkMeta: i,
      offset: u,
      parent: t.type,
      data: c
    };
    if (this.hls.trigger(m.BUFFER_APPENDING, h), e.dropped && e.independent && !s) {
      if (n)
        return;
      this.flushBufferGap(t);
    }
  }
  flushBufferGap(e) {
    const t = this.media;
    if (!t)
      return;
    if (!te.isBuffered(t, t.currentTime)) {
      this.flushMainBuffer(0, e.start);
      return;
    }
    const s = t.currentTime, i = te.bufferInfo(t, s, 0), n = e.duration, a = Math.min(this.config.maxFragLookUpTolerance * 2, n * 0.25), o = Math.max(Math.min(e.start - a, i.end - a), s + a);
    e.start - o > a && this.flushMainBuffer(o, e.start);
  }
  getFwdBufferInfo(e, t) {
    var s;
    const i = this.getLoadPosition();
    if (!G(i))
      return null;
    const a = this.lastCurrentTime > i || (s = this.media) != null && s.paused ? 0 : this.config.maxBufferHole;
    return this.getFwdBufferInfoAtPos(e, i, t, a);
  }
  getFwdBufferInfoAtPos(e, t, s, i) {
    const n = te.bufferInfo(e, t, i);
    if (n.len === 0 && n.nextStart !== void 0) {
      const a = this.fragmentTracker.getBufferedFrag(t, s);
      if (a && (n.nextStart <= a.end || a.gap)) {
        const o = Math.max(Math.min(n.nextStart, a.end) - t, i);
        return te.bufferInfo(e, t, o);
      }
    }
    return n;
  }
  getMaxBufferLength(e) {
    const {
      config: t
    } = this;
    let s;
    return e ? s = Math.max(8 * t.maxBufferSize / e, t.maxBufferLength) : s = t.maxBufferLength, Math.min(s, t.maxMaxBufferLength);
  }
  reduceMaxBufferLength(e, t) {
    const s = this.config, i = Math.max(Math.min(e - t, s.maxBufferLength), t), n = Math.max(e - t * 3, s.maxMaxBufferLength / 2, i);
    return n >= i ? (s.maxMaxBufferLength = n, this.warn(`Reduce max buffer length to ${n}s`), !0) : !1;
  }
  getAppendedFrag(e, t = W.MAIN) {
    const s = this.fragmentTracker ? this.fragmentTracker.getAppendedFrag(e, t) : null;
    return s && "fragment" in s ? s.fragment : s;
  }
  getNextFragment(e, t) {
    const s = t.fragments, i = s.length;
    if (!i)
      return null;
    const {
      config: n
    } = this, a = s[0].start, o = n.lowLatencyMode && !!t.partList;
    let c = null;
    if (t.live) {
      const h = n.initialLiveManifestSize;
      if (i < h)
        return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${h})`), null;
      if (!t.PTSKnown && !this.startFragRequested && this.startPosition === -1 || e < a) {
        var l;
        o && !this.loadingParts && (this.log("LL-Part loading ON for initial live fragment"), this.loadingParts = !0), c = this.getInitialLiveFragment(t);
        const d = this.hls.startPosition, f = this.hls.liveSyncPosition, g = c ? (d !== -1 && d >= a ? d : f) || c.start : e;
        this.log(`Setting startPosition to ${g} to match start frag at live edge. mainStart: ${d} liveSyncPosition: ${f} frag.start: ${(l = c) == null ? void 0 : l.start}`), this.startPosition = this.nextLoadPosition = g;
      }
    } else e <= a && (c = s[0]);
    if (!c) {
      const h = this.loadingParts ? t.partEnd : t.fragmentEnd;
      c = this.getFragmentAtPosition(e, h, t);
    }
    let u = this.filterReplacedPrimary(c, t);
    if (!u && c) {
      const h = c.sn - t.startSN;
      u = this.filterReplacedPrimary(s[h + 1] || null, t);
    }
    return this.mapToInitFragWhenRequired(u);
  }
  isLoopLoading(e, t) {
    const s = this.fragmentTracker.getState(e);
    return (s === Re.OK || s === Re.PARTIAL && !!e.gap) && this.nextLoadPosition > t;
  }
  getNextFragmentLoopLoading(e, t, s, i, n) {
    let a = null;
    if (e.gap && (a = this.getNextFragment(this.nextLoadPosition, t), a && !a.gap && s.nextStart)) {
      const o = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, s.nextStart, i, 0);
      if (o !== null && s.len + o.len >= n) {
        const c = a.sn;
        return this.loopSn !== c && (this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${c}`), this.loopSn = c), null;
      }
    }
    return this.loopSn = void 0, a;
  }
  get primaryPrefetch() {
    if (Fa(this.config)) {
      var e;
      if ((e = this.hls.interstitialsManager) == null || (e = e.playingItem) == null ? void 0 : e.event)
        return !0;
    }
    return !1;
  }
  filterReplacedPrimary(e, t) {
    if (!e)
      return e;
    if (Fa(this.config) && e.type !== W.SUBTITLE) {
      const s = this.hls.interstitialsManager, i = s == null ? void 0 : s.bufferingItem;
      if (i) {
        const a = i.event;
        if (a) {
          if (a.appendInPlace || Math.abs(e.start - i.start) > 1 || i.start === 0)
            return null;
        } else if (e.end <= i.start && (t == null ? void 0 : t.live) === !1 || e.start > i.end && i.nextEvent && (i.nextEvent.appendInPlace || e.start - i.end > 1))
          return null;
      }
      const n = s == null ? void 0 : s.playerQueue;
      if (n)
        for (let a = n.length; a--; ) {
          const o = n[a].interstitial;
          if (o.appendInPlace && e.start >= o.startTime && e.end <= o.resumeTime)
            return null;
        }
    }
    return e;
  }
  mapToInitFragWhenRequired(e) {
    return e != null && e.initSegment && !e.initSegment.data && !this.bitrateTest ? e.initSegment : e;
  }
  getNextPart(e, t, s) {
    let i = -1, n = !1, a = !0;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o];
      if (a = a && !l.independent, i > -1 && s < l.start)
        break;
      const u = l.loaded;
      u ? i = -1 : (n || (l.independent || a) && l.fragment === t) && (l.fragment !== t && this.warn(`Need buffer at ${s} but next unloaded part starts at ${l.start}`), i = o), n = u;
    }
    return i;
  }
  loadedEndOfParts(e, t) {
    let s;
    for (let i = e.length; i--; ) {
      if (s = e[i], !s.loaded)
        return !1;
      if (t > s.start)
        return !0;
    }
    return !1;
  }
  /*
   This method is used find the best matching first fragment for a live playlist. This fragment is used to calculate the
   "sliding" of the playlist, which is its offset from the start of playback. After sliding we can compute the real
   start and end times for each fragment in the playlist (after which this method will not need to be called).
  */
  getInitialLiveFragment(e) {
    const t = e.fragments, s = this.fragPrevious;
    let i = null;
    if (s) {
      if (e.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${s.programDateTime}`), i = Uh(t, s.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
        const n = s.sn + 1;
        if (n >= e.startSN && n <= e.endSN) {
          const a = t[n - e.startSN];
          s.cc === a.cc && (i = a, this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`));
        }
        i || (i = Ho(e, s.cc, s.end), i && this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`));
      }
    } else {
      const n = this.hls.liveSyncPosition;
      n !== null && (i = this.getFragmentAtPosition(n, this.bitrateTest ? e.fragmentEnd : e.edge, e));
    }
    return i;
  }
  /*
  This method finds the best matching fragment given the provided position.
   */
  getFragmentAtPosition(e, t, s) {
    const {
      config: i
    } = this;
    let {
      fragPrevious: n
    } = this, {
      fragments: a,
      endSN: o
    } = s;
    const {
      fragmentHint: c
    } = s, {
      maxFragLookUpTolerance: l
    } = i, u = s.partList, h = !!(this.loadingParts && u != null && u.length && c);
    h && !this.bitrateTest && u[u.length - 1].fragment.sn === c.sn && (a = a.concat(c), o = c.sn);
    let d;
    if (e < t) {
      var f;
      const p = e < this.lastCurrentTime || e > t - l || (f = this.media) != null && f.paused || !this.startFragRequested ? 0 : l;
      d = zt(n, a, e, p);
    } else
      d = a[a.length - 1];
    if (d) {
      const g = d.sn - s.startSN, p = this.fragmentTracker.getState(d);
      if ((p === Re.OK || p === Re.PARTIAL && d.gap) && (n = d), n && d.sn === n.sn && (!h || u[0].fragment.sn > d.sn || !s.live) && d.level === n.level) {
        const E = a[g + 1];
        d.sn < o && this.fragmentTracker.getState(E) !== Re.OK ? d = E : d = null;
      }
    }
    return d;
  }
  alignPlaylists(e, t, s) {
    const i = e.fragments.length;
    if (!i)
      return this.warn("No fragments in live playlist"), 0;
    const n = e.fragmentStart, a = !t, o = e.alignedSliding && G(n);
    if (a || !o && !n) {
      Ad(s, e);
      const c = e.fragmentStart;
      return this.log(`Live playlist sliding: ${c.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} fragments: ${i}`), c;
    }
    return n;
  }
  waitForCdnTuneIn(e) {
    return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, e.partTarget * 3);
  }
  setStartPosition(e, t) {
    let s = this.startPosition;
    s < t && (s = -1);
    const i = this.timelineOffset;
    if (s === -1) {
      const n = this.startTimeOffset !== null, a = n ? this.startTimeOffset : e.startTimeOffset;
      a !== null && G(a) ? (s = t + a, a < 0 && (s += e.edge), s = Math.min(Math.max(t, s), t + e.totalduration), this.log(`Setting startPosition to ${s} for start time offset ${a} found in ${n ? "multivariant" : "media"} playlist`), this.startPosition = s) : e.live ? (s = this.hls.liveSyncPosition || t, this.log(`Setting startPosition to -1 to start at live edge ${s}`), this.startPosition = -1) : (this.log("setting startPosition to 0 by default"), this.startPosition = s = 0), this.lastCurrentTime = s + i;
    }
    this.nextLoadPosition = s + i;
  }
  getLoadPosition() {
    var e;
    const {
      media: t
    } = this;
    let s = 0;
    return (e = this.hls) != null && e.hasEnoughToStart && t ? s = t.currentTime : this.nextLoadPosition >= 0 && (s = this.nextLoadPosition), s;
  }
  handleFragLoadAborted(e, t) {
    this.transmuxer && e.type === this.playlistType && Ae(e) && e.stats.aborted && (this.log(`Fragment ${e.sn}${t ? " part " + t.index : ""} of ${this.playlistLabel()} ${e.level} was aborted`), this.resetFragmentLoading(e));
  }
  resetFragmentLoading(e) {
    (!this.fragCurrent || !this.fragContextChanged(e) && this.state !== k.FRAG_LOADING_WAITING_RETRY) && (this.state = k.IDLE);
  }
  onFragmentOrKeyLoadError(e, t) {
    var s;
    if (t.chunkMeta && !t.frag) {
      const E = this.getCurrentContext(t.chunkMeta);
      E && (t.frag = E.frag);
    }
    const i = t.frag;
    if (!i || i.type !== e || !this.levels)
      return;
    if (this.fragContextChanged(i)) {
      var n;
      this.warn(`Frag load error must match current frag to retry ${i.url} > ${(n = this.fragCurrent) == null ? void 0 : n.url}`);
      return;
    }
    const a = t.details === D.FRAG_GAP;
    a && this.fragmentTracker.fragBuffered(i, !0);
    const o = t.errorAction;
    if (!o) {
      this.state = k.ERROR;
      return;
    }
    const {
      action: c,
      flags: l,
      retryCount: u = 0,
      retryConfig: h
    } = o, d = !!h, f = d && c === Ce.RetryRequest, g = d && !o.resolved && l === qe.MoveAllAlternatesMatchingHost, p = (s = this.hls.latestLevelDetails) == null ? void 0 : s.live;
    if (!f && g && Ae(i) && !i.endList && p && !Yo(t))
      this.resetFragmentErrors(e), this.treatAsGap(i), o.resolved = !0;
    else if ((f || g) && u < h.maxNumRetry) {
      var y;
      const E = On((y = t.response) == null ? void 0 : y.code), T = tr(h, u);
      if (this.resetStartWhenNotLoaded(), this.retryDate = self.performance.now() + T, this.state = k.FRAG_LOADING_WAITING_RETRY, o.resolved = !0, E) {
        this.log("Waiting for connection (offline)"), this.retryDate = 1 / 0, t.reason = "offline";
        return;
      }
      this.warn(`Fragment ${i.sn} of ${e} ${i.level} errored with ${t.details}, retrying loading ${u + 1}/${h.maxNumRetry} in ${T}ms`);
    } else if (h)
      if (this.resetFragmentErrors(e), u < h.maxNumRetry)
        !a && c !== Ce.RemoveAlternatePermanently && (o.resolved = !0);
      else {
        this.warn(`${t.details} reached or exceeded max retry (${u})`);
        return;
      }
    else c === Ce.SendAlternateToPenaltyBox ? this.state = k.WAITING_LEVEL : this.state = k.ERROR;
    this.tickImmediate();
  }
  checkRetryDate() {
    const e = self.performance.now(), t = this.retryDate, s = t === 1 / 0;
    (!t || e >= t || s && !On(0)) && (s && this.log("Connection restored (online)"), this.resetStartWhenNotLoaded(), this.state = k.IDLE);
  }
  reduceLengthAndFlushBuffer(e) {
    if (this.state === k.PARSING || this.state === k.PARSED) {
      const t = e.frag, s = e.parent, i = this.getFwdBufferInfo(this.mediaBuffer, s), n = i && i.len > 0.5;
      n && this.reduceMaxBufferLength(i.len, (t == null ? void 0 : t.duration) || 10);
      const a = !n;
      return a && this.warn(`Buffer full error while media.currentTime (${this.getLoadPosition()}) is not buffered, flush ${s} buffer`), t && (this.fragmentTracker.removeFragment(t), this.nextLoadPosition = t.start), this.resetLoadingState(), a;
    }
    return !1;
  }
  resetFragmentErrors(e) {
    e === W.AUDIO && (this.fragCurrent = null), this.hls.hasEnoughToStart || (this.startFragRequested = !1), this.state !== k.STOPPED && (this.state = k.IDLE);
  }
  afterBufferFlushed(e, t, s) {
    if (!e)
      return;
    const i = te.getBuffered(e);
    this.fragmentTracker.detectEvictedFragments(t, i, s), this.state === k.ENDED && this.resetLoadingState();
  }
  resetLoadingState() {
    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state !== k.STOPPED && (this.state = k.IDLE);
  }
  resetStartWhenNotLoaded() {
    if (!this.hls.hasEnoughToStart) {
      this.startFragRequested = !1;
      const e = this.levelLastLoaded, t = e ? e.details : null;
      t != null && t.live ? (this.log("resetting startPosition for live start"), this.startPosition = -1, this.setStartPosition(t, t.fragmentStart), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
    }
  }
  resetWhenMissingContext(e) {
    this.log(`Loading context changed while buffering sn ${e.sn} of ${this.playlistLabel()} ${e.level === -1 ? "<removed>" : e.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(), this.resetLoadingState();
  }
  removeUnbufferedFrags(e = 0) {
    this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, !1, !0);
  }
  updateLevelTiming(e, t, s, i) {
    const n = s.details;
    if (!n) {
      this.warn("level.details undefined");
      return;
    }
    if (!Object.keys(e.elementaryStreams).reduce((c, l) => {
      const u = e.elementaryStreams[l];
      if (u) {
        const h = u.endPTS - u.startPTS;
        if (h <= 0)
          return this.warn(`Could not parse fragment ${e.sn} ${l} duration reliably (${h})`), c || !1;
        const d = i ? 0 : tl(n, e, u.startPTS, u.endPTS, u.startDTS, u.endDTS, this);
        return this.hls.trigger(m.LEVEL_PTS_UPDATED, {
          details: n,
          level: s,
          drift: d,
          type: l,
          frag: e,
          start: u.startPTS,
          end: u.endPTS
        }), !0;
      }
      return c;
    }, !1)) {
      var o;
      if (s.fragmentError === 0 && this.treatAsGap(e, s), ((o = this.transmuxer) == null ? void 0 : o.error) === null) {
        const c = new Error(`Found no media in fragment ${e.sn} of ${this.playlistLabel()} ${e.level} resetting transmuxer to fallback to playlist timing`);
        if (this.warn(c.message), this.hls.trigger(m.ERROR, {
          type: X.MEDIA_ERROR,
          details: D.FRAG_PARSING_ERROR,
          fatal: !1,
          error: c,
          frag: e,
          reason: `Found no media in msn ${e.sn} of ${this.playlistLabel()} "${s.url}"`
        }), !this.hls)
          return;
        this.resetTransmuxer();
      }
    }
    this.state = k.PARSED, this.log(`Parsed ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)})`), this.hls.trigger(m.FRAG_PARSED, {
      frag: e,
      part: t
    });
  }
  playlistLabel() {
    return this.playlistType === W.MAIN ? "level" : "track";
  }
  fragInfo(e, t = !0, s) {
    var i, n;
    return `${this.playlistLabel()} ${e.level} (${s ? "part" : "frag"}:[${((i = t && !s ? e.startPTS : (s || e).start) != null ? i : NaN).toFixed(3)}-${((n = t && !s ? e.endPTS : (s || e).end) != null ? n : NaN).toFixed(3)}]${s && e.type === "main" ? "INDEPENDENT=" + (s.independent ? "YES" : "NO") : ""}`;
  }
  treatAsGap(e, t) {
    t && t.fragmentError++, e.gap = !0, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, !0);
  }
  resetTransmuxer() {
    var e;
    (e = this.transmuxer) == null || e.reset();
  }
  recoverWorkerError(e) {
    e.event === "demuxerWorker" && (this.fragmentTracker.removeAllFragments(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), this.resetStartWhenNotLoaded(), this.resetLoadingState());
  }
  set state(e) {
    const t = this._state;
    t !== e && (this._state = e, this.log(`${t}->${e}`));
  }
  get state() {
    return this._state;
  }
}
function Fa(r) {
  return !!r.interstitialsController && r.enableInterstitialPlayback !== !1;
}
class cl {
  constructor() {
    this.chunks = [], this.dataLength = 0;
  }
  push(e) {
    this.chunks.push(e), this.dataLength += e.length;
  }
  flush() {
    const {
      chunks: e,
      dataLength: t
    } = this;
    let s;
    if (e.length)
      e.length === 1 ? s = e[0] : s = Ld(e, t);
    else return new Uint8Array(0);
    return this.reset(), s;
  }
  reset() {
    this.chunks.length = 0, this.dataLength = 0;
  }
}
function Ld(r, e) {
  const t = new Uint8Array(e);
  let s = 0;
  for (let i = 0; i < r.length; i++) {
    const n = r[i];
    t.set(n, s), s += n.length;
  }
  return t;
}
var cn = { exports: {} }, Na;
function bd() {
  return Na || (Na = 1, function(r) {
    var e = Object.prototype.hasOwnProperty, t = "~";
    function s() {
    }
    Object.create && (s.prototype = /* @__PURE__ */ Object.create(null), new s().__proto__ || (t = !1));
    function i(c, l, u) {
      this.fn = c, this.context = l, this.once = u || !1;
    }
    function n(c, l, u, h, d) {
      if (typeof u != "function")
        throw new TypeError("The listener must be a function");
      var f = new i(u, h || c, d), g = t ? t + l : l;
      return c._events[g] ? c._events[g].fn ? c._events[g] = [c._events[g], f] : c._events[g].push(f) : (c._events[g] = f, c._eventsCount++), c;
    }
    function a(c, l) {
      --c._eventsCount === 0 ? c._events = new s() : delete c._events[l];
    }
    function o() {
      this._events = new s(), this._eventsCount = 0;
    }
    o.prototype.eventNames = function() {
      var l = [], u, h;
      if (this._eventsCount === 0) return l;
      for (h in u = this._events)
        e.call(u, h) && l.push(t ? h.slice(1) : h);
      return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(u)) : l;
    }, o.prototype.listeners = function(l) {
      var u = t ? t + l : l, h = this._events[u];
      if (!h) return [];
      if (h.fn) return [h.fn];
      for (var d = 0, f = h.length, g = new Array(f); d < f; d++)
        g[d] = h[d].fn;
      return g;
    }, o.prototype.listenerCount = function(l) {
      var u = t ? t + l : l, h = this._events[u];
      return h ? h.fn ? 1 : h.length : 0;
    }, o.prototype.emit = function(l, u, h, d, f, g) {
      var p = t ? t + l : l;
      if (!this._events[p]) return !1;
      var y = this._events[p], E = arguments.length, T, S;
      if (y.fn) {
        switch (y.once && this.removeListener(l, y.fn, void 0, !0), E) {
          case 1:
            return y.fn.call(y.context), !0;
          case 2:
            return y.fn.call(y.context, u), !0;
          case 3:
            return y.fn.call(y.context, u, h), !0;
          case 4:
            return y.fn.call(y.context, u, h, d), !0;
          case 5:
            return y.fn.call(y.context, u, h, d, f), !0;
          case 6:
            return y.fn.call(y.context, u, h, d, f, g), !0;
        }
        for (S = 1, T = new Array(E - 1); S < E; S++)
          T[S - 1] = arguments[S];
        y.fn.apply(y.context, T);
      } else {
        var v = y.length, x;
        for (S = 0; S < v; S++)
          switch (y[S].once && this.removeListener(l, y[S].fn, void 0, !0), E) {
            case 1:
              y[S].fn.call(y[S].context);
              break;
            case 2:
              y[S].fn.call(y[S].context, u);
              break;
            case 3:
              y[S].fn.call(y[S].context, u, h);
              break;
            case 4:
              y[S].fn.call(y[S].context, u, h, d);
              break;
            default:
              if (!T) for (x = 1, T = new Array(E - 1); x < E; x++)
                T[x - 1] = arguments[x];
              y[S].fn.apply(y[S].context, T);
          }
      }
      return !0;
    }, o.prototype.on = function(l, u, h) {
      return n(this, l, u, h, !1);
    }, o.prototype.once = function(l, u, h) {
      return n(this, l, u, h, !0);
    }, o.prototype.removeListener = function(l, u, h, d) {
      var f = t ? t + l : l;
      if (!this._events[f]) return this;
      if (!u)
        return a(this, f), this;
      var g = this._events[f];
      if (g.fn)
        g.fn === u && (!d || g.once) && (!h || g.context === h) && a(this, f);
      else {
        for (var p = 0, y = [], E = g.length; p < E; p++)
          (g[p].fn !== u || d && !g[p].once || h && g[p].context !== h) && y.push(g[p]);
        y.length ? this._events[f] = y.length === 1 ? y[0] : y : a(this, f);
      }
      return this;
    }, o.prototype.removeAllListeners = function(l) {
      var u;
      return l ? (u = t ? t + l : l, this._events[u] && a(this, u)) : (this._events = new s(), this._eventsCount = 0), this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = t, o.EventEmitter = o, r.exports = o;
  }(cn)), cn.exports;
}
var Rd = bd(), or = /* @__PURE__ */ Zu(Rd);
const Ns = "1.6.13", hs = {};
function _d() {
  return typeof __HLS_WORKER_BUNDLE__ == "function";
}
function Dd() {
  const r = hs[Ns];
  if (r)
    return r.clientCount++, r;
  const e = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
    type: "text/javascript"
  }), t = self.URL.createObjectURL(e), i = {
    worker: new self.Worker(t),
    objectURL: t,
    clientCount: 1
  };
  return hs[Ns] = i, i;
}
function Cd(r) {
  const e = hs[r];
  if (e)
    return e.clientCount++, e;
  const t = new self.URL(r, self.location.href).href, i = {
    worker: new self.Worker(t),
    scriptURL: t,
    clientCount: 1
  };
  return hs[r] = i, i;
}
function Pd(r) {
  const e = hs[r || Ns];
  if (e && e.clientCount-- === 1) {
    const {
      worker: s,
      objectURL: i
    } = e;
    delete hs[r || Ns], i && self.URL.revokeObjectURL(i), s.terminate();
  }
}
function ul(r, e) {
  return e + 10 <= r.length && r[e] === 51 && r[e + 1] === 68 && r[e + 2] === 73 && r[e + 3] < 255 && r[e + 4] < 255 && r[e + 6] < 128 && r[e + 7] < 128 && r[e + 8] < 128 && r[e + 9] < 128;
}
function lr(r, e) {
  return e + 10 <= r.length && r[e] === 73 && r[e + 1] === 68 && r[e + 2] === 51 && r[e + 3] < 255 && r[e + 4] < 255 && r[e + 6] < 128 && r[e + 7] < 128 && r[e + 8] < 128 && r[e + 9] < 128;
}
function Bi(r, e) {
  let t = 0;
  return t = (r[e] & 127) << 21, t |= (r[e + 1] & 127) << 14, t |= (r[e + 2] & 127) << 7, t |= r[e + 3] & 127, t;
}
function $s(r, e) {
  const t = e;
  let s = 0;
  for (; lr(r, e); ) {
    s += 10;
    const i = Bi(r, e + 6);
    s += i, ul(r, e + 10) && (s += 10), e += s;
  }
  if (s > 0)
    return r.subarray(t, t + s);
}
function kd(r, e, t, s) {
  const i = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], n = e[t + 2], a = n >> 2 & 15;
  if (a > 12) {
    const f = new Error(`invalid ADTS sampling index:${a}`);
    r.emit(m.ERROR, m.ERROR, {
      type: X.MEDIA_ERROR,
      details: D.FRAG_PARSING_ERROR,
      fatal: !0,
      error: f,
      reason: f.message
    });
    return;
  }
  const o = (n >> 6 & 3) + 1, c = e[t + 3] >> 6 & 3 | (n & 1) << 2, l = "mp4a.40." + o, u = i[a];
  let h = a;
  (o === 5 || o === 29) && (h -= 3);
  const d = [o << 3 | (h & 14) >> 1, (h & 1) << 7 | c << 3];
  return ue.log(`manifest codec:${s}, parsed codec:${l}, channels:${c}, rate:${u} (ADTS object type:${o} sampling index:${a})`), {
    config: d,
    samplerate: u,
    channelCount: c,
    codec: l,
    parsedCodec: l,
    manifestCodec: s
  };
}
function hl(r, e) {
  return r[e] === 255 && (r[e + 1] & 246) === 240;
}
function dl(r, e) {
  return r[e + 1] & 1 ? 7 : 9;
}
function cr(r, e) {
  return (r[e + 3] & 3) << 11 | r[e + 4] << 3 | (r[e + 5] & 224) >>> 5;
}
function wd(r, e) {
  return e + 5 < r.length;
}
function Pi(r, e) {
  return e + 1 < r.length && hl(r, e);
}
function Od(r, e) {
  return wd(r, e) && hl(r, e) && cr(r, e) <= r.length - e;
}
function Md(r, e) {
  if (Pi(r, e)) {
    const t = dl(r, e);
    if (e + t >= r.length)
      return !1;
    const s = cr(r, e);
    if (s <= t)
      return !1;
    const i = e + s;
    return i === r.length || Pi(r, i);
  }
  return !1;
}
function fl(r, e, t, s, i) {
  if (!r.samplerate) {
    const n = kd(e, t, s, i);
    if (!n)
      return;
    de(r, n);
  }
}
function gl(r) {
  return 1024 * 9e4 / r;
}
function Fd(r, e) {
  const t = dl(r, e);
  if (e + t <= r.length) {
    const s = cr(r, e) - t;
    if (s > 0)
      return {
        headerLength: t,
        frameLength: s
      };
  }
}
function ml(r, e, t, s, i) {
  const n = gl(r.samplerate), a = s + i * n, o = Fd(e, t);
  let c;
  if (o) {
    const {
      frameLength: h,
      headerLength: d
    } = o, f = d + h, g = Math.max(0, t + f - e.length);
    g ? (c = new Uint8Array(f - d), c.set(e.subarray(t + d, e.length), 0)) : c = e.subarray(t + d, t + f);
    const p = {
      unit: c,
      pts: a
    };
    return g || r.samples.push(p), {
      sample: p,
      length: f,
      missing: g
    };
  }
  const l = e.length - t;
  return c = new Uint8Array(l), c.set(e.subarray(t, e.length), 0), {
    sample: {
      unit: c,
      pts: a
    },
    length: l,
    missing: -1
  };
}
function Nd(r, e) {
  return lr(r, e) && Bi(r, e + 6) + 10 <= r.length - e;
}
function $d(r) {
  return r instanceof ArrayBuffer ? r : r.byteOffset == 0 && r.byteLength == r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
}
function un(r, e = 0, t = 1 / 0) {
  return Bd(r, e, t, Uint8Array);
}
function Bd(r, e, t, s) {
  const i = Ud(r);
  let n = 1;
  "BYTES_PER_ELEMENT" in s && (n = s.BYTES_PER_ELEMENT);
  const a = Gd(r) ? r.byteOffset : 0, o = (a + r.byteLength) / n, c = (a + e) / n, l = Math.floor(Math.max(0, Math.min(c, o))), u = Math.floor(Math.min(l + Math.max(t, 0), o));
  return new s(i, l, u - l);
}
function Ud(r) {
  return r instanceof ArrayBuffer ? r : r.buffer;
}
function Gd(r) {
  return r && r.buffer instanceof ArrayBuffer && r.byteLength !== void 0 && r.byteOffset !== void 0;
}
function Kd(r) {
  const e = {
    key: r.type,
    description: "",
    data: "",
    mimeType: null,
    pictureType: null
  }, t = 3;
  if (r.size < 2)
    return;
  if (r.data[0] !== t) {
    console.log("Ignore frame with unrecognized character encoding");
    return;
  }
  const s = r.data.subarray(1).indexOf(0);
  if (s === -1)
    return;
  const i = Ze(un(r.data, 1, s)), n = r.data[2 + s], a = r.data.subarray(3 + s).indexOf(0);
  if (a === -1)
    return;
  const o = Ze(un(r.data, 3 + s, a));
  let c;
  return i === "-->" ? c = Ze(un(r.data, 4 + s + a)) : c = $d(r.data.subarray(4 + s + a)), e.mimeType = i, e.pictureType = n, e.description = o, e.data = c, e;
}
function Vd(r) {
  if (r.size < 2)
    return;
  const e = Ze(r.data, !0), t = new Uint8Array(r.data.subarray(e.length + 1));
  return {
    key: r.type,
    info: e,
    data: t.buffer
  };
}
function Hd(r) {
  if (r.size < 2)
    return;
  if (r.type === "TXXX") {
    let t = 1;
    const s = Ze(r.data.subarray(t), !0);
    t += s.length + 1;
    const i = Ze(r.data.subarray(t));
    return {
      key: r.type,
      info: s,
      data: i
    };
  }
  const e = Ze(r.data.subarray(1));
  return {
    key: r.type,
    info: "",
    data: e
  };
}
function Wd(r) {
  if (r.type === "WXXX") {
    if (r.size < 2)
      return;
    let t = 1;
    const s = Ze(r.data.subarray(t), !0);
    t += s.length + 1;
    const i = Ze(r.data.subarray(t));
    return {
      key: r.type,
      info: s,
      data: i
    };
  }
  const e = Ze(r.data);
  return {
    key: r.type,
    info: "",
    data: e
  };
}
function Yd(r) {
  return r.type === "PRIV" ? Vd(r) : r.type[0] === "W" ? Wd(r) : r.type === "APIC" ? Kd(r) : Hd(r);
}
function jd(r) {
  const e = String.fromCharCode(r[0], r[1], r[2], r[3]), t = Bi(r, 4), s = 10;
  return {
    type: e,
    size: t,
    data: r.subarray(s, s + t)
  };
}
const ei = 10, zd = 10;
function pl(r) {
  let e = 0;
  const t = [];
  for (; lr(r, e); ) {
    const s = Bi(r, e + 6);
    r[e + 5] >> 6 & 1 && (e += ei), e += ei;
    const i = e + s;
    for (; e + zd < i; ) {
      const n = jd(r.subarray(e)), a = Yd(n);
      a && t.push(a), e += n.size + ei;
    }
    ul(r, e) && (e += ei);
  }
  return t;
}
function yl(r) {
  return r && r.key === "PRIV" && r.info === "com.apple.streaming.transportStreamTimestamp";
}
function qd(r) {
  if (r.data.byteLength === 8) {
    const e = new Uint8Array(r.data), t = e[3] & 1;
    let s = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
    return s /= 45, t && (s += 4772185884e-2), Math.round(s);
  }
}
function ur(r) {
  const e = pl(r);
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    if (yl(s))
      return qd(s);
  }
}
let Qe = /* @__PURE__ */ function(r) {
  return r.audioId3 = "org.id3", r.dateRange = "com.apple.quicktime.HLS", r.emsg = "https://aomedia.org/emsg/ID3", r.misbklv = "urn:misb:KLV:bin:1910.1", r;
}({});
function mt(r = "", e = 9e4) {
  return {
    type: r,
    id: -1,
    pid: -1,
    inputTimeScale: e,
    sequenceNumber: -1,
    samples: [],
    dropped: 0
  };
}
class hr {
  constructor() {
    this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
  }
  resetInitSegment(e, t, s, i) {
    this._id3Track = {
      type: "id3",
      id: 3,
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0
    };
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.resetContiguity();
  }
  resetContiguity() {
    this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
  }
  canParse(e, t) {
    return !1;
  }
  appendFrame(e, t, s) {
  }
  // feed incoming data to the front of the parsing pipeline
  demux(e, t) {
    this.cachedData && (e = it(this.cachedData, e), this.cachedData = null);
    let s = $s(e, 0), i = s ? s.length : 0, n;
    const a = this._audioTrack, o = this._id3Track, c = s ? ur(s) : void 0, l = e.length;
    for ((this.basePTS === null || this.frameIndex === 0 && G(c)) && (this.basePTS = Xd(c, t, this.initPTS), this.lastPTS = this.basePTS), this.lastPTS === null && (this.lastPTS = this.basePTS), s && s.length > 0 && o.samples.push({
      pts: this.lastPTS,
      dts: this.lastPTS,
      data: s,
      type: Qe.audioId3,
      duration: Number.POSITIVE_INFINITY
    }); i < l; ) {
      if (this.canParse(e, i)) {
        const u = this.appendFrame(a, e, i);
        u ? (this.frameIndex++, this.lastPTS = u.sample.pts, i += u.length, n = i) : i = l;
      } else Nd(e, i) ? (s = $s(e, i), o.samples.push({
        pts: this.lastPTS,
        dts: this.lastPTS,
        data: s,
        type: Qe.audioId3,
        duration: Number.POSITIVE_INFINITY
      }), i += s.length, n = i) : i++;
      if (i === l && n !== l) {
        const u = e.slice(n);
        this.cachedData ? this.cachedData = it(this.cachedData, u) : this.cachedData = u;
      }
    }
    return {
      audioTrack: a,
      videoTrack: mt(),
      id3Track: o,
      textTrack: mt()
    };
  }
  demuxSampleAes(e, t, s) {
    return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`));
  }
  flush(e) {
    const t = this.cachedData;
    return t && (this.cachedData = null, this.demux(t, 0)), {
      audioTrack: this._audioTrack,
      videoTrack: mt(),
      id3Track: this._id3Track,
      textTrack: mt()
    };
  }
  destroy() {
    this.cachedData = null, this._audioTrack = this._id3Track = void 0;
  }
}
const Xd = (r, e, t) => {
  if (G(r))
    return r * 90;
  const s = t ? t.baseTime * 9e4 / t.timescale : 0;
  return e * 9e4 + s;
};
let ti = null;
const Qd = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], Zd = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], Jd = [
  // MPEG 2.5
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // Reserved
  [
    0,
    // Reserved
    0,
    // Layer3
    0,
    // Layer2
    0
    // Layer1
  ],
  // MPEG 2
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // MPEG 1
  [
    0,
    // Reserved
    144,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ]
], ef = [
  0,
  // Reserved
  1,
  // Layer3
  1,
  // Layer2
  4
  // Layer1
];
function El(r, e, t, s, i) {
  if (t + 24 > e.length)
    return;
  const n = Tl(e, t);
  if (n && t + n.frameLength <= e.length) {
    const a = n.samplesPerFrame * 9e4 / n.sampleRate, o = s + i * a, c = {
      unit: e.subarray(t, t + n.frameLength),
      pts: o,
      dts: o
    };
    return r.config = [], r.channelCount = n.channelCount, r.samplerate = n.sampleRate, r.samples.push(c), {
      sample: c,
      length: n.frameLength,
      missing: 0
    };
  }
}
function Tl(r, e) {
  const t = r[e + 1] >> 3 & 3, s = r[e + 1] >> 1 & 3, i = r[e + 2] >> 4 & 15, n = r[e + 2] >> 2 & 3;
  if (t !== 1 && i !== 0 && i !== 15 && n !== 3) {
    const a = r[e + 2] >> 1 & 1, o = r[e + 3] >> 6, c = t === 3 ? 3 - s : s === 3 ? 3 : 4, l = Qd[c * 14 + i - 1] * 1e3, h = Zd[(t === 3 ? 0 : t === 2 ? 1 : 2) * 3 + n], d = o === 3 ? 1 : 2, f = Jd[t][s], g = ef[s], p = f * 8 * g, y = Math.floor(f * l / h + a) * g;
    if (ti === null) {
      const S = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      ti = S ? parseInt(S[1]) : 0;
    }
    return !!ti && ti <= 87 && s === 2 && l >= 224e3 && o === 0 && (r[e + 3] = r[e + 3] | 128), {
      sampleRate: h,
      channelCount: d,
      frameLength: y,
      samplesPerFrame: p
    };
  }
}
function dr(r, e) {
  return r[e] === 255 && (r[e + 1] & 224) === 224 && (r[e + 1] & 6) !== 0;
}
function Sl(r, e) {
  return e + 1 < r.length && dr(r, e);
}
function tf(r, e) {
  return dr(r, e) && 4 <= r.length - e;
}
function vl(r, e) {
  if (e + 1 < r.length && dr(r, e)) {
    const s = Tl(r, e);
    let i = 4;
    s != null && s.frameLength && (i = s.frameLength);
    const n = e + i;
    return n === r.length || Sl(r, n);
  }
  return !1;
}
class sf extends hr {
  constructor(e, t) {
    super(), this.observer = void 0, this.config = void 0, this.observer = e, this.config = t;
  }
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/adts",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "aac",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  // Source for probe info - https://wiki.multimedia.cx/index.php?title=ADTS
  static probe(e, t) {
    if (!e)
      return !1;
    const s = $s(e, 0);
    let i = (s == null ? void 0 : s.length) || 0;
    if (vl(e, i))
      return !1;
    for (let n = e.length; i < n; i++)
      if (Md(e, i))
        return t.log("ADTS sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return Od(e, t);
  }
  appendFrame(e, t, s) {
    fl(e, this.observer, t, s, e.manifestCodec);
    const i = ml(e, t, s, this.basePTS, this.frameIndex);
    if (i && i.missing === 0)
      return i;
  }
}
const xl = (r, e) => {
  let t = 0, s = 5;
  e += s;
  const i = new Uint32Array(1), n = new Uint32Array(1), a = new Uint8Array(1);
  for (; s > 0; ) {
    a[0] = r[e];
    const o = Math.min(s, 8), c = 8 - o;
    n[0] = 4278190080 >>> 24 + c << c, i[0] = (a[0] & n[0]) >> c, t = t ? t << o | i[0] : i[0], e += 1, s -= o;
  }
  return t;
};
class nf extends hr {
  constructor(e) {
    super(), this.observer = void 0, this.observer = e;
  }
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/ac-3",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "ac3",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  canParse(e, t) {
    return t + 64 < e.length;
  }
  appendFrame(e, t, s) {
    const i = Al(e, t, s, this.basePTS, this.frameIndex);
    if (i !== -1)
      return {
        sample: e.samples[e.samples.length - 1],
        length: i,
        missing: 0
      };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = $s(e, 0);
    if (!t)
      return !1;
    const s = t.length;
    return e[s] === 11 && e[s + 1] === 119 && ur(t) !== void 0 && // check the bsid to confirm ac-3
    xl(e, s) < 16;
  }
}
function Al(r, e, t, s, i) {
  if (t + 8 > e.length || e[t] !== 11 || e[t + 1] !== 119)
    return -1;
  const n = e[t + 4] >> 6;
  if (n >= 3)
    return -1;
  const o = [48e3, 44100, 32e3][n], c = e[t + 4] & 63, u = [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][c * 3 + n] * 2;
  if (t + u > e.length)
    return -1;
  const h = e[t + 6] >> 5;
  let d = 0;
  h === 2 ? d += 2 : (h & 1 && h !== 1 && (d += 2), h & 4 && (d += 2));
  const f = (e[t + 6] << 8 | e[t + 7]) >> 12 - d & 1, p = [2, 1, 2, 3, 3, 4, 4, 5][h] + f, y = e[t + 5] >> 3, E = e[t + 5] & 7, T = new Uint8Array([n << 6 | y << 1 | E >> 2, (E & 3) << 6 | h << 3 | f << 2 | c >> 4, c << 4 & 224]), S = 1536 / o * 9e4, v = s + i * S, x = e.subarray(t, t + u);
  return r.config = T, r.channelCount = p, r.samplerate = o, r.samples.push({
    unit: x,
    pts: v
  }), u;
}
class rf extends hr {
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/mpeg",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "mp3",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = $s(e, 0);
    let s = (t == null ? void 0 : t.length) || 0;
    if (t && e[s] === 11 && e[s + 1] === 119 && ur(t) !== void 0 && // check the bsid to confirm ac-3 or ec-3 (not mp3)
    xl(e, s) <= 16)
      return !1;
    for (let i = e.length; s < i; s++)
      if (vl(e, s))
        return ue.log("MPEG Audio sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return tf(e, t);
  }
  appendFrame(e, t, s) {
    if (this.basePTS !== null)
      return El(e, t, s, this.basePTS, this.frameIndex);
  }
}
const af = /\/emsg[-/]ID3/i;
class of {
  constructor(e, t) {
    this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t;
  }
  resetTimeStamp() {
  }
  resetInitSegment(e, t, s, i) {
    const n = this.videoTrack = mt("video", 1), a = this.audioTrack = mt("audio", 1), o = this.txtTrack = mt("text", 1);
    if (this.id3Track = mt("id3", 1), this.timeOffset = 0, !(e != null && e.byteLength))
      return;
    const c = wo(e);
    if (c.video) {
      const {
        id: l,
        timescale: u,
        codec: h,
        supplemental: d
      } = c.video;
      n.id = l, n.timescale = o.timescale = u, n.codec = h, n.supplemental = d;
    }
    if (c.audio) {
      const {
        id: l,
        timescale: u,
        codec: h
      } = c.audio;
      a.id = l, a.timescale = u, a.codec = h;
    }
    o.id = Co.text, n.sampleDuration = 0, n.duration = a.duration = i;
  }
  resetContiguity() {
    this.remainderData = null;
  }
  static probe(e) {
    return ih(e);
  }
  demux(e, t) {
    this.timeOffset = t;
    let s = e;
    const i = this.videoTrack, n = this.txtTrack;
    if (this.config.progressive) {
      this.remainderData && (s = it(this.remainderData, e));
      const o = uh(s);
      this.remainderData = o.remainder, i.samples = o.valid || new Uint8Array();
    } else
      i.samples = s;
    const a = this.extractID3Track(i, t);
    return n.samples = ta(t, i), {
      videoTrack: i,
      audioTrack: this.audioTrack,
      id3Track: a,
      textTrack: this.txtTrack
    };
  }
  flush() {
    const e = this.timeOffset, t = this.videoTrack, s = this.txtTrack;
    t.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
    const i = this.extractID3Track(t, this.timeOffset);
    return s.samples = ta(e, t), {
      videoTrack: t,
      audioTrack: mt(),
      id3Track: i,
      textTrack: mt()
    };
  }
  extractID3Track(e, t) {
    const s = this.id3Track;
    if (e.samples.length) {
      const i = ie(e.samples, ["emsg"]);
      i && i.forEach((n) => {
        const a = dh(n);
        if (af.test(a.schemeIdUri)) {
          const o = $a(a, t);
          let c = a.eventDuration === 4294967295 ? Number.POSITIVE_INFINITY : a.eventDuration / a.timeScale;
          c <= 1e-3 && (c = Number.POSITIVE_INFINITY);
          const l = a.payload;
          s.samples.push({
            data: l,
            len: l.byteLength,
            dts: o,
            pts: o,
            type: Qe.emsg,
            duration: c
          });
        } else if (this.config.enableEmsgKLVMetadata && a.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")) {
          const o = $a(a, t);
          s.samples.push({
            data: a.payload,
            len: a.payload.byteLength,
            dts: o,
            pts: o,
            type: Qe.misbklv,
            duration: Number.POSITIVE_INFINITY
          });
        }
      });
    }
    return s;
  }
  demuxSampleAes(e, t, s) {
    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
  }
  destroy() {
    this.config = null, this.remainderData = null, this.videoTrack = this.audioTrack = this.id3Track = this.txtTrack = void 0;
  }
}
function $a(r, e) {
  return G(r.presentationTime) ? r.presentationTime / r.timeScale : e + r.presentationTimeDelta / r.timeScale;
}
class lf {
  constructor(e, t, s) {
    this.keyData = void 0, this.decrypter = void 0, this.keyData = s, this.decrypter = new sr(t, {
      removePKCS7Padding: !1
    });
  }
  decryptBuffer(e) {
    return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer, Bt.cbc);
  }
  // AAC - encrypt all full 16 bytes blocks starting from offset 16
  decryptAacSample(e, t, s) {
    const i = e[t].unit;
    if (i.length <= 16)
      return;
    const n = i.subarray(16, i.length - i.length % 16), a = n.buffer.slice(n.byteOffset, n.byteOffset + n.length);
    this.decryptBuffer(a).then((o) => {
      const c = new Uint8Array(o);
      i.set(c, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, s);
    }).catch(s);
  }
  decryptAacSamples(e, t, s) {
    for (; ; t++) {
      if (t >= e.length) {
        s();
        return;
      }
      if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, s), !this.decrypter.isSync()))
        return;
    }
  }
  // AVC - encrypt one 16 bytes block out of ten, starting from offset 32
  getAvcEncryptedData(e) {
    const t = Math.floor((e.length - 48) / 160) * 16 + 16, s = new Int8Array(t);
    let i = 0;
    for (let n = 32; n < e.length - 16; n += 160, i += 16)
      s.set(e.subarray(n, n + 16), i);
    return s;
  }
  getAvcDecryptedUnit(e, t) {
    const s = new Uint8Array(t);
    let i = 0;
    for (let n = 32; n < e.length - 16; n += 160, i += 16)
      e.set(s.subarray(i, i + 16), n);
    return e;
  }
  decryptAvcSample(e, t, s, i, n) {
    const a = Fo(n.data), o = this.getAvcEncryptedData(a);
    this.decryptBuffer(o.buffer).then((c) => {
      n.data = this.getAvcDecryptedUnit(a, c), this.decrypter.isSync() || this.decryptAvcSamples(e, t, s + 1, i);
    }).catch(i);
  }
  decryptAvcSamples(e, t, s, i) {
    if (e instanceof Uint8Array)
      throw new Error("Cannot decrypt samples of type Uint8Array");
    for (; ; t++, s = 0) {
      if (t >= e.length) {
        i();
        return;
      }
      const n = e[t].units;
      for (; !(s >= n.length); s++) {
        const a = n[s];
        if (!(a.data.length <= 48 || a.type !== 1 && a.type !== 5) && (this.decryptAvcSample(e, t, s, i, a), !this.decrypter.isSync()))
          return;
      }
    }
  }
}
class Il {
  constructor() {
    this.VideoSample = null;
  }
  createVideoSample(e, t, s) {
    return {
      key: e,
      frame: !1,
      pts: t,
      dts: s,
      units: [],
      length: 0
    };
  }
  getLastNalUnit(e) {
    var t;
    let s = this.VideoSample, i;
    if ((!s || s.units.length === 0) && (s = e[e.length - 1]), (t = s) != null && t.units) {
      const n = s.units;
      i = n[n.length - 1];
    }
    return i;
  }
  pushAccessUnit(e, t) {
    if (e.units.length && e.frame) {
      if (e.pts === void 0) {
        const s = t.samples, i = s.length;
        if (i) {
          const n = s[i - 1];
          e.pts = n.pts, e.dts = n.dts;
        } else {
          t.dropped++;
          return;
        }
      }
      t.samples.push(e);
    }
  }
  parseNALu(e, t, s) {
    const i = t.byteLength;
    let n = e.naluState || 0;
    const a = n, o = [];
    let c = 0, l, u, h, d = -1, f = 0;
    for (n === -1 && (d = 0, f = this.getNALuType(t, 0), n = 0, c = 1); c < i; ) {
      if (l = t[c++], !n) {
        n = l ? 0 : 1;
        continue;
      }
      if (n === 1) {
        n = l ? 0 : 2;
        continue;
      }
      if (!l)
        n = 3;
      else if (l === 1) {
        if (u = c - n - 1, d >= 0) {
          const g = {
            data: t.subarray(d, u),
            type: f
          };
          o.push(g);
        } else {
          const g = this.getLastNalUnit(e.samples);
          g && (a && c <= 4 - a && g.state && (g.data = g.data.subarray(0, g.data.byteLength - a)), u > 0 && (g.data = it(g.data, t.subarray(0, u)), g.state = 0));
        }
        c < i ? (h = this.getNALuType(t, c), d = c, f = h, n = 0) : n = -1;
      } else
        n = 0;
    }
    if (d >= 0 && n >= 0) {
      const g = {
        data: t.subarray(d, i),
        type: f,
        state: n
      };
      o.push(g);
    }
    if (o.length === 0) {
      const g = this.getLastNalUnit(e.samples);
      g && (g.data = it(g.data, t));
    }
    return e.naluState = n, o;
  }
}
class Cs {
  constructor(e) {
    this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0;
  }
  // ():void
  loadWord() {
    const e = this.data, t = this.bytesAvailable, s = e.byteLength - t, i = new Uint8Array(4), n = Math.min(4, t);
    if (n === 0)
      throw new Error("no bytes available");
    i.set(e.subarray(s, s + n)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = n * 8, this.bytesAvailable -= n;
  }
  // (count:int):void
  skipBits(e) {
    let t;
    e = Math.min(e, this.bytesAvailable * 8 + this.bitsAvailable), this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t << 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e);
  }
  // (size:int):uint
  readBits(e) {
    let t = Math.min(this.bitsAvailable, e);
    const s = this.word >>> 32 - t;
    if (e > 32 && ue.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0)
      this.word <<= t;
    else if (this.bytesAvailable > 0)
      this.loadWord();
    else
      throw new Error("no bits available");
    return t = e - t, t > 0 && this.bitsAvailable ? s << t | this.readBits(t) : s;
  }
  // ():uint
  skipLZ() {
    let e;
    for (e = 0; e < this.bitsAvailable; ++e)
      if (this.word & 2147483648 >>> e)
        return this.word <<= e, this.bitsAvailable -= e, e;
    return this.loadWord(), e + this.skipLZ();
  }
  // ():void
  skipUEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():void
  skipEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():uint
  readUEG() {
    const e = this.skipLZ();
    return this.readBits(e + 1) - 1;
  }
  // ():int
  readEG() {
    const e = this.readUEG();
    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1);
  }
  // Some convenience functions
  // :Boolean
  readBoolean() {
    return this.readBits(1) === 1;
  }
  // ():int
  readUByte() {
    return this.readBits(8);
  }
  // ():int
  readUShort() {
    return this.readBits(16);
  }
  // ():int
  readUInt() {
    return this.readBits(32);
  }
}
class cf extends Il {
  parsePES(e, t, s, i) {
    const n = this.parseNALu(e, s.data, i);
    let a = this.VideoSample, o, c = !1;
    s.data = null, a && n.length && !e.audFound && (this.pushAccessUnit(a, e), a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), n.forEach((l) => {
      var u, h;
      switch (l.type) {
        case 1: {
          let p = !1;
          o = !0;
          const y = l.data;
          if (c && y.length > 4) {
            const E = this.readSliceType(y);
            (E === 2 || E === 4 || E === 7 || E === 9) && (p = !0);
          }
          if (p) {
            var d;
            (d = a) != null && d.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null);
          }
          a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.frame = !0, a.key = p;
          break;
        }
        case 5:
          o = !0, (u = a) != null && u.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null), a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0, a.frame = !0;
          break;
        case 6: {
          o = !0, Zn(l.data, 1, s.pts, t.samples);
          break;
        }
        case 7: {
          var f, g;
          o = !0, c = !0;
          const p = l.data, y = this.readSPS(p);
          if (!e.sps || e.width !== y.width || e.height !== y.height || ((f = e.pixelRatio) == null ? void 0 : f[0]) !== y.pixelRatio[0] || ((g = e.pixelRatio) == null ? void 0 : g[1]) !== y.pixelRatio[1]) {
            e.width = y.width, e.height = y.height, e.pixelRatio = y.pixelRatio, e.sps = [p];
            const E = p.subarray(1, 4);
            let T = "avc1.";
            for (let S = 0; S < 3; S++) {
              let v = E[S].toString(16);
              v.length < 2 && (v = "0" + v), T += v;
            }
            e.codec = T;
          }
          break;
        }
        case 8:
          o = !0, e.pps = [l.data];
          break;
        case 9:
          o = !0, e.audFound = !0, (h = a) != null && h.frame && (this.pushAccessUnit(a, e), a = null), a || (a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts));
          break;
        case 12:
          o = !0;
          break;
        default:
          o = !1;
          break;
      }
      a && o && a.units.push(l);
    }), i && a && (this.pushAccessUnit(a, e), this.VideoSample = null);
  }
  getNALuType(e, t) {
    return e[t] & 31;
  }
  readSliceType(e) {
    const t = new Cs(e);
    return t.readUByte(), t.readUEG(), t.readUEG();
  }
  /**
   * The scaling list is optionally transmitted as part of a sequence parameter
   * set and is not relevant to transmuxing.
   * @param count the number of entries in this scaling list
   * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
   */
  skipScalingList(e, t) {
    let s = 8, i = 8, n;
    for (let a = 0; a < e; a++)
      i !== 0 && (n = t.readEG(), i = (s + n + 256) % 256), s = i === 0 ? s : i;
  }
  /**
   * Read a sequence parameter set and return some interesting video
   * properties. A sequence parameter set is the H264 metadata that
   * describes the properties of upcoming video frames.
   * @returns an object with configuration parsed from the
   * sequence parameter set, including the dimensions of the
   * associated video frames.
   */
  readSPS(e) {
    const t = new Cs(e);
    let s = 0, i = 0, n = 0, a = 0, o, c, l;
    const u = t.readUByte.bind(t), h = t.readBits.bind(t), d = t.readUEG.bind(t), f = t.readBoolean.bind(t), g = t.skipBits.bind(t), p = t.skipEG.bind(t), y = t.skipUEG.bind(t), E = this.skipScalingList.bind(this);
    u();
    const T = u();
    if (h(5), g(3), u(), y(), T === 100 || T === 110 || T === 122 || T === 244 || T === 44 || T === 83 || T === 86 || T === 118 || T === 128) {
      const R = d();
      if (R === 3 && g(1), y(), y(), g(1), f())
        for (c = R !== 3 ? 8 : 12, l = 0; l < c; l++)
          f() && (l < 6 ? E(16, t) : E(64, t));
    }
    y();
    const S = d();
    if (S === 0)
      d();
    else if (S === 1)
      for (g(1), p(), p(), o = d(), l = 0; l < o; l++)
        p();
    y(), g(1);
    const v = d(), x = d(), C = h(1);
    C === 0 && g(1), g(1), f() && (s = d(), i = d(), n = d(), a = d());
    let A = [1, 1];
    if (f() && f())
      switch (u()) {
        case 1:
          A = [1, 1];
          break;
        case 2:
          A = [12, 11];
          break;
        case 3:
          A = [10, 11];
          break;
        case 4:
          A = [16, 11];
          break;
        case 5:
          A = [40, 33];
          break;
        case 6:
          A = [24, 11];
          break;
        case 7:
          A = [20, 11];
          break;
        case 8:
          A = [32, 11];
          break;
        case 9:
          A = [80, 33];
          break;
        case 10:
          A = [18, 11];
          break;
        case 11:
          A = [15, 11];
          break;
        case 12:
          A = [64, 33];
          break;
        case 13:
          A = [160, 99];
          break;
        case 14:
          A = [4, 3];
          break;
        case 15:
          A = [3, 2];
          break;
        case 16:
          A = [2, 1];
          break;
        case 255: {
          A = [u() << 8 | u(), u() << 8 | u()];
          break;
        }
      }
    return {
      width: Math.ceil((v + 1) * 16 - s * 2 - i * 2),
      height: (2 - C) * (x + 1) * 16 - (C ? 2 : 4) * (n + a),
      pixelRatio: A
    };
  }
}
class uf extends Il {
  constructor(...e) {
    super(...e), this.initVPS = null;
  }
  parsePES(e, t, s, i) {
    const n = this.parseNALu(e, s.data, i);
    let a = this.VideoSample, o, c = !1;
    s.data = null, a && n.length && !e.audFound && (this.pushAccessUnit(a, e), a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), n.forEach((l) => {
      var u, h;
      switch (l.type) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          a || (a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), a.frame = !0, o = !0;
          break;
        case 16:
        case 17:
        case 18:
        case 21:
          if (o = !0, c) {
            var d;
            (d = a) != null && d.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null);
          }
          a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0, a.frame = !0;
          break;
        case 19:
        case 20:
          o = !0, (u = a) != null && u.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null), a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0, a.frame = !0;
          break;
        case 39:
          o = !0, Zn(
            l.data,
            2,
            // NALu header size
            s.pts,
            t.samples
          );
          break;
        case 32:
          o = !0, e.vps || (typeof e.params != "object" && (e.params = {}), e.params = de(e.params, this.readVPS(l.data)), this.initVPS = l.data), e.vps = [l.data];
          break;
        case 33:
          if (o = !0, c = !0, e.vps !== void 0 && e.vps[0] !== this.initVPS && e.sps !== void 0 && !this.matchSPS(e.sps[0], l.data) && (this.initVPS = e.vps[0], e.sps = e.pps = void 0), !e.sps) {
            const f = this.readSPS(l.data);
            e.width = f.width, e.height = f.height, e.pixelRatio = f.pixelRatio, e.codec = f.codecString, e.sps = [], typeof e.params != "object" && (e.params = {});
            for (const g in f.params)
              e.params[g] = f.params[g];
          }
          this.pushParameterSet(e.sps, l.data, e.vps), a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0;
          break;
        case 34:
          if (o = !0, typeof e.params == "object") {
            if (!e.pps) {
              e.pps = [];
              const f = this.readPPS(l.data);
              for (const g in f)
                e.params[g] = f[g];
            }
            this.pushParameterSet(e.pps, l.data, e.vps);
          }
          break;
        case 35:
          o = !0, e.audFound = !0, (h = a) != null && h.frame && (this.pushAccessUnit(a, e), a = null), a || (a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts));
          break;
        default:
          o = !1;
          break;
      }
      a && o && a.units.push(l);
    }), i && a && (this.pushAccessUnit(a, e), this.VideoSample = null);
  }
  pushParameterSet(e, t, s) {
    (s && s[0] === this.initVPS || !s && !e.length) && e.push(t);
  }
  getNALuType(e, t) {
    return (e[t] & 126) >>> 1;
  }
  ebsp2rbsp(e) {
    const t = new Uint8Array(e.byteLength);
    let s = 0;
    for (let i = 0; i < e.byteLength; i++)
      i >= 2 && e[i] === 3 && e[i - 1] === 0 && e[i - 2] === 0 || (t[s] = e[i], s++);
    return new Uint8Array(t.buffer, 0, s);
  }
  pushAccessUnit(e, t) {
    super.pushAccessUnit(e, t), this.initVPS && (this.initVPS = null);
  }
  readVPS(e) {
    const t = new Cs(e);
    t.readUByte(), t.readUByte(), t.readBits(4), t.skipBits(2), t.readBits(6);
    const s = t.readBits(3), i = t.readBoolean();
    return {
      numTemporalLayers: s + 1,
      temporalIdNested: i
    };
  }
  readSPS(e) {
    const t = new Cs(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.readBits(4);
    const s = t.readBits(3);
    t.readBoolean();
    const i = t.readBits(2), n = t.readBoolean(), a = t.readBits(5), o = t.readUByte(), c = t.readUByte(), l = t.readUByte(), u = t.readUByte(), h = t.readUByte(), d = t.readUByte(), f = t.readUByte(), g = t.readUByte(), p = t.readUByte(), y = t.readUByte(), E = t.readUByte(), T = [], S = [];
    for (let ae = 0; ae < s; ae++)
      T.push(t.readBoolean()), S.push(t.readBoolean());
    if (s > 0)
      for (let ae = s; ae < 8; ae++)
        t.readBits(2);
    for (let ae = 0; ae < s; ae++)
      T[ae] && (t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte()), S[ae] && t.readUByte();
    t.readUEG();
    const v = t.readUEG();
    v == 3 && t.skipBits(1);
    const x = t.readUEG(), C = t.readUEG(), A = t.readBoolean();
    let R = 0, b = 0, L = 0, P = 0;
    A && (R += t.readUEG(), b += t.readUEG(), L += t.readUEG(), P += t.readUEG());
    const M = t.readUEG(), U = t.readUEG(), H = t.readUEG(), K = t.readBoolean();
    for (let ae = K ? 0 : s; ae <= s; ae++)
      t.skipUEG(), t.skipUEG(), t.skipUEG();
    if (t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.readBoolean() && t.readBoolean())
      for (let ve = 0; ve < 4; ve++)
        for (let Ie = 0; Ie < (ve === 3 ? 2 : 6); Ie++)
          if (!t.readBoolean())
            t.readUEG();
          else {
            const ke = Math.min(64, 1 << 4 + (ve << 1));
            ve > 1 && t.readEG();
            for (let St = 0; St < ke; St++)
              t.readEG();
          }
    t.readBoolean(), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.skipUEG(), t.skipUEG(), t.readBoolean());
    const B = t.readUEG();
    let j = 0;
    for (let ae = 0; ae < B; ae++) {
      let ve = !1;
      if (ae !== 0 && (ve = t.readBoolean()), ve) {
        ae === B && t.readUEG(), t.readBoolean(), t.readUEG();
        let Ie = 0;
        for (let Je = 0; Je <= j; Je++) {
          const ke = t.readBoolean();
          let St = !1;
          ke || (St = t.readBoolean()), (ke || St) && Ie++;
        }
        j = Ie;
      } else {
        const Ie = t.readUEG(), Je = t.readUEG();
        j = Ie + Je;
        for (let ke = 0; ke < Ie; ke++)
          t.readUEG(), t.readBoolean();
        for (let ke = 0; ke < Je; ke++)
          t.readUEG(), t.readBoolean();
      }
    }
    if (t.readBoolean()) {
      const ae = t.readUEG();
      for (let ve = 0; ve < ae; ve++) {
        for (let Ie = 0; Ie < H + 4; Ie++)
          t.readBits(1);
        t.readBits(1);
      }
    }
    let w = 0, $ = 1, Q = 1, oe = !0, z = 1, se = 0;
    t.readBoolean(), t.readBoolean();
    let Se = !1;
    if (t.readBoolean()) {
      if (t.readBoolean()) {
        const ct = t.readUByte(), Ks = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2], kt = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
        ct > 0 && ct < 16 ? ($ = Ks[ct - 1], Q = kt[ct - 1]) : ct === 255 && ($ = t.readBits(16), Q = t.readBits(16));
      }
      if (t.readBoolean() && t.readBoolean(), t.readBoolean() && (t.readBits(3), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.readUByte(), t.readUByte())), t.readBoolean() && (t.readUEG(), t.readUEG()), t.readBoolean(), t.readBoolean(), t.readBoolean(), Se = t.readBoolean(), Se && (t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG()), t.readBoolean() && (z = t.readBits(32), se = t.readBits(32), t.readBoolean() && t.readUEG(), t.readBoolean())) {
        const kt = t.readBoolean(), wt = t.readBoolean();
        let et = !1;
        (kt || wt) && (et = t.readBoolean(), et && (t.readUByte(), t.readBits(5), t.readBoolean(), t.readBits(5)), t.readBits(4), t.readBits(4), et && t.readBits(4), t.readBits(5), t.readBits(5), t.readBits(5));
        for (let Ye = 0; Ye <= s; Ye++) {
          oe = t.readBoolean();
          const gs = oe || t.readBoolean();
          let ms = !1;
          gs ? t.readEG() : ms = t.readBoolean();
          const ps = ms ? 1 : t.readUEG() + 1;
          if (kt)
            for (let vt = 0; vt < ps; vt++)
              t.readUEG(), t.readUEG(), et && (t.readUEG(), t.readUEG()), t.skipBits(1);
          if (wt)
            for (let vt = 0; vt < ps; vt++)
              t.readUEG(), t.readUEG(), et && (t.readUEG(), t.readUEG()), t.skipBits(1);
        }
      }
      t.readBoolean() && (t.readBoolean(), t.readBoolean(), t.readBoolean(), w = t.readUEG());
    }
    let Me = x, Ke = C;
    if (A) {
      let ae = 1, ve = 1;
      v === 1 ? ae = ve = 2 : v == 2 && (ae = 2), Me = x - ae * b - ae * R, Ke = C - ve * P - ve * L;
    }
    const ot = i ? ["A", "B", "C"][i] : "", Gs = o << 24 | c << 16 | l << 8 | u;
    let lt = 0;
    for (let ae = 0; ae < 32; ae++)
      lt = (lt | (Gs >> ae & 1) << 31 - ae) >>> 0;
    let Ct = lt.toString(16);
    return a === 1 && Ct === "2" && (Ct = "6"), {
      codecString: `hvc1.${ot}${a}.${Ct}.${n ? "H" : "L"}${E}.B0`,
      params: {
        general_tier_flag: n,
        general_profile_idc: a,
        general_profile_space: i,
        general_profile_compatibility_flags: [o, c, l, u],
        general_constraint_indicator_flags: [h, d, f, g, p, y],
        general_level_idc: E,
        bit_depth: M + 8,
        bit_depth_luma_minus8: M,
        bit_depth_chroma_minus8: U,
        min_spatial_segmentation_idc: w,
        chroma_format_idc: v,
        frame_rate: {
          fixed: oe,
          fps: se / z
        }
      },
      width: Me,
      height: Ke,
      pixelRatio: [$, Q]
    };
  }
  readPPS(e) {
    const t = new Cs(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.skipUEG(), t.skipUEG(), t.skipBits(2), t.skipBits(3), t.skipBits(2), t.skipUEG(), t.skipUEG(), t.skipEG(), t.skipBits(2), t.readBoolean() && t.skipUEG(), t.skipEG(), t.skipEG(), t.skipBits(4);
    const i = t.readBoolean(), n = t.readBoolean();
    let a = 1;
    return n && i ? a = 0 : n ? a = 3 : i && (a = 2), {
      parallelismType: a
    };
  }
  matchSPS(e, t) {
    return String.fromCharCode.apply(null, e).substr(3) === String.fromCharCode.apply(null, t).substr(3);
  }
}
const _e = 188;
class Nt {
  constructor(e, t, s, i) {
    this.logger = void 0, this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.logger = i, this.videoParser = null;
  }
  static probe(e, t) {
    const s = Nt.syncOffset(e);
    return s > 0 && t.warn(`MPEG2-TS detected but first sync word found @ offset ${s}`), s !== -1;
  }
  static syncOffset(e) {
    const t = e.length;
    let s = Math.min(_e * 5, t - _e) + 1, i = 0;
    for (; i < s; ) {
      let n = !1, a = -1, o = 0;
      for (let c = i; c < t; c += _e)
        if (e[c] === 71 && (t - c === _e || e[c + _e] === 71)) {
          if (o++, a === -1 && (a = c, a !== 0 && (s = Math.min(a + _e * 99, e.length - _e) + 1)), n || (n = Bn(e, c) === 0), n && o > 1 && (a === 0 && o > 2 || c + _e > s))
            return a;
        } else {
          if (o)
            return -1;
          break;
        }
      i++;
    }
    return -1;
  }
  /**
   * Creates a track model internal to demuxer used to drive remuxing input
   */
  static createTrack(e, t) {
    return {
      container: e === "video" || e === "audio" ? "video/mp2t" : void 0,
      type: e,
      id: Co[e],
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0,
      duration: e === "audio" ? t : void 0
    };
  }
  /**
   * Initializes a new init segment on the demuxer/remuxer interface. Needed for discontinuities/track-switches (or at stream start)
   * Resets all internal track instances of the demuxer.
   */
  resetInitSegment(e, t, s, i) {
    this.pmtParsed = !1, this._pmtId = -1, this._videoTrack = Nt.createTrack("video"), this._videoTrack.duration = i, this._audioTrack = Nt.createTrack("audio", i), this._id3Track = Nt.createTrack("id3"), this._txtTrack = Nt.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.videoParser = null, this.aacOverFlow = null, this.remainderData = null, this.audioCodec = t, this.videoCodec = s;
  }
  resetTimeStamp() {
  }
  resetContiguity() {
    const {
      _audioTrack: e,
      _videoTrack: t,
      _id3Track: s
    } = this;
    e && (e.pesData = null), t && (t.pesData = null), s && (s.pesData = null), this.aacOverFlow = null, this.remainderData = null;
  }
  demux(e, t, s = !1, i = !1) {
    s || (this.sampleAes = null);
    let n;
    const a = this._videoTrack, o = this._audioTrack, c = this._id3Track, l = this._txtTrack;
    let u = a.pid, h = a.pesData, d = o.pid, f = c.pid, g = o.pesData, p = c.pesData, y = null, E = this.pmtParsed, T = this._pmtId, S = e.length;
    if (this.remainderData && (e = it(this.remainderData, e), S = e.length, this.remainderData = null), S < _e && !i)
      return this.remainderData = e, {
        audioTrack: o,
        videoTrack: a,
        id3Track: c,
        textTrack: l
      };
    const v = Math.max(0, Nt.syncOffset(e));
    S -= (S - v) % _e, S < e.byteLength && !i && (this.remainderData = new Uint8Array(e.buffer, S, e.buffer.byteLength - S));
    let x = 0;
    for (let A = v; A < S; A += _e)
      if (e[A] === 71) {
        const R = !!(e[A + 1] & 64), b = Bn(e, A), L = (e[A + 3] & 48) >> 4;
        let P;
        if (L > 1) {
          if (P = A + 5 + e[A + 4], P === A + _e)
            continue;
        } else
          P = A + 4;
        switch (b) {
          case u:
            R && (h && (n = ts(h, this.logger)) && (this.readyVideoParser(a.segmentCodec), this.videoParser !== null && this.videoParser.parsePES(a, l, n, !1)), h = {
              data: [],
              size: 0
            }), h && (h.data.push(e.subarray(P, A + _e)), h.size += A + _e - P);
            break;
          case d:
            if (R) {
              if (g && (n = ts(g, this.logger)))
                switch (o.segmentCodec) {
                  case "aac":
                    this.parseAACPES(o, n);
                    break;
                  case "mp3":
                    this.parseMPEGPES(o, n);
                    break;
                  case "ac3":
                    this.parseAC3PES(o, n);
                    break;
                }
              g = {
                data: [],
                size: 0
              };
            }
            g && (g.data.push(e.subarray(P, A + _e)), g.size += A + _e - P);
            break;
          case f:
            R && (p && (n = ts(p, this.logger)) && this.parseID3PES(c, n), p = {
              data: [],
              size: 0
            }), p && (p.data.push(e.subarray(P, A + _e)), p.size += A + _e - P);
            break;
          case 0:
            R && (P += e[P] + 1), T = this._pmtId = hf(e, P);
            break;
          case T: {
            R && (P += e[P] + 1);
            const M = df(e, P, this.typeSupported, s, this.observer, this.logger);
            u = M.videoPid, u > 0 && (a.pid = u, a.segmentCodec = M.segmentVideoCodec), d = M.audioPid, d > 0 && (o.pid = d, o.segmentCodec = M.segmentAudioCodec), f = M.id3Pid, f > 0 && (c.pid = f), y !== null && !E && (this.logger.warn(`MPEG-TS PMT found at ${A} after unknown PID '${y}'. Backtracking to sync byte @${v} to parse all TS packets.`), y = null, A = v - 188), E = this.pmtParsed = !0;
            break;
          }
          case 17:
          case 8191:
            break;
          default:
            y = b;
            break;
        }
      } else
        x++;
    x > 0 && Un(this.observer, new Error(`Found ${x} TS packet/s that do not start with 0x47`), void 0, this.logger), a.pesData = h, o.pesData = g, c.pesData = p;
    const C = {
      audioTrack: o,
      videoTrack: a,
      id3Track: c,
      textTrack: l
    };
    return i && this.extractRemainingSamples(C), C;
  }
  flush() {
    const {
      remainderData: e
    } = this;
    this.remainderData = null;
    let t;
    return e ? t = this.demux(e, -1, !1, !0) : t = {
      videoTrack: this._videoTrack,
      audioTrack: this._audioTrack,
      id3Track: this._id3Track,
      textTrack: this._txtTrack
    }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t;
  }
  extractRemainingSamples(e) {
    const {
      audioTrack: t,
      videoTrack: s,
      id3Track: i,
      textTrack: n
    } = e, a = s.pesData, o = t.pesData, c = i.pesData;
    let l;
    if (a && (l = ts(a, this.logger)) ? (this.readyVideoParser(s.segmentCodec), this.videoParser !== null && (this.videoParser.parsePES(s, n, l, !0), s.pesData = null)) : s.pesData = a, o && (l = ts(o, this.logger))) {
      switch (t.segmentCodec) {
        case "aac":
          this.parseAACPES(t, l);
          break;
        case "mp3":
          this.parseMPEGPES(t, l);
          break;
        case "ac3":
          this.parseAC3PES(t, l);
          break;
      }
      t.pesData = null;
    } else
      o != null && o.size && this.logger.log("last AAC PES packet truncated,might overlap between fragments"), t.pesData = o;
    c && (l = ts(c, this.logger)) ? (this.parseID3PES(i, l), i.pesData = null) : i.pesData = c;
  }
  demuxSampleAes(e, t, s) {
    const i = this.demux(e, s, !0, !this.config.progressive), n = this.sampleAes = new lf(this.observer, this.config, t);
    return this.decrypt(i, n);
  }
  readyVideoParser(e) {
    this.videoParser === null && (e === "avc" ? this.videoParser = new cf() : e === "hevc" && (this.videoParser = new uf()));
  }
  decrypt(e, t) {
    return new Promise((s) => {
      const {
        audioTrack: i,
        videoTrack: n
      } = e;
      i.samples && i.segmentCodec === "aac" ? t.decryptAacSamples(i.samples, 0, () => {
        n.samples ? t.decryptAvcSamples(n.samples, 0, 0, () => {
          s(e);
        }) : s(e);
      }) : n.samples && t.decryptAvcSamples(n.samples, 0, 0, () => {
        s(e);
      });
    });
  }
  destroy() {
    this.observer && this.observer.removeAllListeners(), this.config = this.logger = this.observer = null, this.aacOverFlow = this.videoParser = this.remainderData = this.sampleAes = null, this._videoTrack = this._audioTrack = this._id3Track = this._txtTrack = void 0;
  }
  parseAACPES(e, t) {
    let s = 0;
    const i = this.aacOverFlow;
    let n = t.data;
    if (i) {
      this.aacOverFlow = null;
      const h = i.missing, d = i.sample.unit.byteLength;
      if (h === -1)
        n = it(i.sample.unit, n);
      else {
        const f = d - h;
        i.sample.unit.set(n.subarray(0, h), f), e.samples.push(i.sample), s = i.missing;
      }
    }
    let a, o;
    for (a = s, o = n.length; a < o - 1 && !Pi(n, a); a++)
      ;
    if (a !== s) {
      let h;
      const d = a < o - 1;
      if (d ? h = `AAC PES did not start with ADTS header,offset:${a}` : h = "No ADTS header found in AAC PES", Un(this.observer, new Error(h), d, this.logger), !d)
        return;
    }
    fl(e, this.observer, n, a, this.audioCodec);
    let c;
    if (t.pts !== void 0)
      c = t.pts;
    else if (i) {
      const h = gl(e.samplerate);
      c = i.sample.pts + h;
    } else {
      this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
      return;
    }
    let l = 0, u;
    for (; a < o; )
      if (u = ml(e, n, a, c, l), a += u.length, u.missing) {
        this.aacOverFlow = u;
        break;
      } else
        for (l++; a < o - 1 && !Pi(n, a); a++)
          ;
  }
  parseMPEGPES(e, t) {
    const s = t.data, i = s.length;
    let n = 0, a = 0;
    const o = t.pts;
    if (o === void 0) {
      this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
      return;
    }
    for (; a < i; )
      if (Sl(s, a)) {
        const c = El(e, s, a, o, n);
        if (c)
          a += c.length, n++;
        else
          break;
      } else
        a++;
  }
  parseAC3PES(e, t) {
    {
      const s = t.data, i = t.pts;
      if (i === void 0) {
        this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");
        return;
      }
      const n = s.length;
      let a = 0, o = 0, c;
      for (; o < n && (c = Al(e, s, o, i, a++)) > 0; )
        o += c;
    }
  }
  parseID3PES(e, t) {
    if (t.pts === void 0) {
      this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
      return;
    }
    const s = de({}, t, {
      type: this._videoTrack ? Qe.emsg : Qe.audioId3,
      duration: Number.POSITIVE_INFINITY
    });
    e.samples.push(s);
  }
}
function Bn(r, e) {
  return ((r[e + 1] & 31) << 8) + r[e + 2];
}
function hf(r, e) {
  return (r[e + 10] & 31) << 8 | r[e + 11];
}
function df(r, e, t, s, i, n) {
  const a = {
    audioPid: -1,
    videoPid: -1,
    id3Pid: -1,
    segmentVideoCodec: "avc",
    segmentAudioCodec: "aac"
  }, o = (r[e + 1] & 15) << 8 | r[e + 2], c = e + 3 + o - 4, l = (r[e + 10] & 15) << 8 | r[e + 11];
  for (e += 12 + l; e < c; ) {
    const u = Bn(r, e), h = (r[e + 3] & 15) << 8 | r[e + 4];
    switch (r[e]) {
      case 207:
        if (!s) {
          hn("ADTS AAC", n);
          break;
        }
      case 15:
        a.audioPid === -1 && (a.audioPid = u);
        break;
      case 21:
        a.id3Pid === -1 && (a.id3Pid = u);
        break;
      case 219:
        if (!s) {
          hn("H.264", n);
          break;
        }
      case 27:
        a.videoPid === -1 && (a.videoPid = u);
        break;
      case 3:
      case 4:
        !t.mpeg && !t.mp3 ? n.log("MPEG audio found, not supported in this browser") : a.audioPid === -1 && (a.audioPid = u, a.segmentAudioCodec = "mp3");
        break;
      case 193:
        if (!s) {
          hn("AC-3", n);
          break;
        }
      case 129:
        t.ac3 ? a.audioPid === -1 && (a.audioPid = u, a.segmentAudioCodec = "ac3") : n.log("AC-3 audio found, not supported in this browser");
        break;
      case 6:
        if (a.audioPid === -1 && h > 0) {
          let d = e + 5, f = h;
          for (; f > 2; ) {
            switch (r[d]) {
              case 106:
                t.ac3 !== !0 ? n.log("AC-3 audio found, not supported in this browser for now") : (a.audioPid = u, a.segmentAudioCodec = "ac3");
                break;
            }
            const p = r[d + 1] + 2;
            d += p, f -= p;
          }
        }
        break;
      case 194:
      case 135:
        return Un(i, new Error("Unsupported EC-3 in M2TS found"), void 0, n), a;
      case 36:
        a.videoPid === -1 && (a.videoPid = u, a.segmentVideoCodec = "hevc", n.log("HEVC in M2TS found"));
        break;
    }
    e += h + 5;
  }
  return a;
}
function Un(r, e, t, s) {
  s.warn(`parsing error: ${e.message}`), r.emit(m.ERROR, m.ERROR, {
    type: X.MEDIA_ERROR,
    details: D.FRAG_PARSING_ERROR,
    fatal: !1,
    levelRetry: t,
    error: e,
    reason: e.message
  });
}
function hn(r, e) {
  e.log(`${r} with AES-128-CBC encryption found in unencrypted stream`);
}
function ts(r, e) {
  let t = 0, s, i, n, a, o;
  const c = r.data;
  if (!r || r.size === 0)
    return null;
  for (; c[0].length < 19 && c.length > 1; )
    c[0] = it(c[0], c[1]), c.splice(1, 1);
  if (s = c[0], (s[0] << 16) + (s[1] << 8) + s[2] === 1) {
    if (i = (s[4] << 8) + s[5], i && i > r.size - 6)
      return null;
    const u = s[7];
    u & 192 && (a = (s[9] & 14) * 536870912 + // 1 << 29
    (s[10] & 255) * 4194304 + // 1 << 22
    (s[11] & 254) * 16384 + // 1 << 14
    (s[12] & 255) * 128 + // 1 << 7
    (s[13] & 254) / 2, u & 64 ? (o = (s[14] & 14) * 536870912 + // 1 << 29
    (s[15] & 255) * 4194304 + // 1 << 22
    (s[16] & 254) * 16384 + // 1 << 14
    (s[17] & 255) * 128 + // 1 << 7
    (s[18] & 254) / 2, a - o > 60 * 9e4 && (e.warn(`${Math.round((a - o) / 9e4)}s delta between PTS and DTS, align them`), a = o)) : o = a), n = s[8];
    let h = n + 9;
    if (r.size <= h)
      return null;
    r.size -= h;
    const d = new Uint8Array(r.size);
    for (let f = 0, g = c.length; f < g; f++) {
      s = c[f];
      let p = s.byteLength;
      if (h)
        if (h > p) {
          h -= p;
          continue;
        } else
          s = s.subarray(h), p -= h, h = 0;
      d.set(s, t), t += p;
    }
    return i && (i -= n + 3), {
      data: d,
      pts: a,
      dts: o,
      len: i
    };
  }
  return null;
}
class ff {
  static getSilentFrame(e, t) {
    switch (e) {
      case "mp4a.40.2":
        if (t === 1)
          return new Uint8Array([0, 200, 0, 128, 35, 128]);
        if (t === 2)
          return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
        if (t === 3)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
        if (t === 4)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
        if (t === 5)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
        if (t === 6)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
        break;
      default:
        if (t === 1)
          return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 2)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 3)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        break;
    }
  }
}
const Ot = Math.pow(2, 32) - 1;
class _ {
  static init() {
    _.types = {
      avc1: [],
      // codingname
      avcC: [],
      hvc1: [],
      hvcC: [],
      btrt: [],
      dinf: [],
      dref: [],
      esds: [],
      ftyp: [],
      hdlr: [],
      mdat: [],
      mdhd: [],
      mdia: [],
      mfhd: [],
      minf: [],
      moof: [],
      moov: [],
      mp4a: [],
      ".mp3": [],
      dac3: [],
      "ac-3": [],
      mvex: [],
      mvhd: [],
      pasp: [],
      sdtp: [],
      stbl: [],
      stco: [],
      stsc: [],
      stsd: [],
      stsz: [],
      stts: [],
      tfdt: [],
      tfhd: [],
      traf: [],
      trak: [],
      trun: [],
      trex: [],
      tkhd: [],
      vmhd: [],
      smhd: []
    };
    let e;
    for (e in _.types)
      _.types.hasOwnProperty(e) && (_.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
    const t = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      118,
      105,
      100,
      101,
      // handler_type: 'vide'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      86,
      105,
      100,
      101,
      111,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'VideoHandler'
    ]), s = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      115,
      111,
      117,
      110,
      // handler_type: 'soun'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      83,
      111,
      117,
      110,
      100,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'SoundHandler'
    ]);
    _.HDLR_TYPES = {
      video: t,
      audio: s
    };
    const i = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1,
      // entry_count
      0,
      0,
      0,
      12,
      // entry_size
      117,
      114,
      108,
      32,
      // 'url' type
      0,
      // version 0
      0,
      0,
      1
      // entry_flags
    ]), n = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0
      // entry_count
    ]);
    _.STTS = _.STSC = _.STCO = n, _.STSZ = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // sample_size
      0,
      0,
      0,
      0
      // sample_count
    ]), _.VMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      1,
      // flags
      0,
      0,
      // graphicsmode
      0,
      0,
      0,
      0,
      0,
      0
      // opcolor
    ]), _.SMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      // balance
      0,
      0
      // reserved
    ]), _.STSD = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1
    ]);
    const a = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]), c = new Uint8Array([0, 0, 0, 1]);
    _.FTYP = _.box(_.types.ftyp, a, c, a, o), _.DINF = _.box(_.types.dinf, _.box(_.types.dref, i));
  }
  static box(e, ...t) {
    let s = 8, i = t.length;
    const n = i;
    for (; i--; )
      s += t[i].byteLength;
    const a = new Uint8Array(s);
    for (a[0] = s >> 24 & 255, a[1] = s >> 16 & 255, a[2] = s >> 8 & 255, a[3] = s & 255, a.set(e, 4), i = 0, s = 8; i < n; i++)
      a.set(t[i], s), s += t[i].byteLength;
    return a;
  }
  static hdlr(e) {
    return _.box(_.types.hdlr, _.HDLR_TYPES[e]);
  }
  static mdat(e) {
    return _.box(_.types.mdat, e);
  }
  static mdhd(e, t) {
    t *= e;
    const s = Math.floor(t / (Ot + 1)), i = Math.floor(t % (Ot + 1));
    return _.box(_.types.mdhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      85,
      196,
      // 'und' language (undetermined)
      0,
      0
    ]));
  }
  static mdia(e) {
    return _.box(_.types.mdia, _.mdhd(e.timescale || 0, e.duration || 0), _.hdlr(e.type), _.minf(e));
  }
  static mfhd(e) {
    return _.box(_.types.mfhd, new Uint8Array([
      0,
      0,
      0,
      0,
      // flags
      e >> 24,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255
      // sequence_number
    ]));
  }
  static minf(e) {
    return e.type === "audio" ? _.box(_.types.minf, _.box(_.types.smhd, _.SMHD), _.DINF, _.stbl(e)) : _.box(_.types.minf, _.box(_.types.vmhd, _.VMHD), _.DINF, _.stbl(e));
  }
  static moof(e, t, s) {
    return _.box(_.types.moof, _.mfhd(e), _.traf(s, t));
  }
  static moov(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = _.trak(e[t]);
    return _.box.apply(null, [_.types.moov, _.mvhd(e[0].timescale || 0, e[0].duration || 0)].concat(s).concat(_.mvex(e)));
  }
  static mvex(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = _.trex(e[t]);
    return _.box.apply(null, [_.types.mvex, ...s]);
  }
  static mvhd(e, t) {
    t *= e;
    const s = Math.floor(t / (Ot + 1)), i = Math.floor(t % (Ot + 1)), n = new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      0,
      1,
      0,
      0,
      // 1.0 rate
      1,
      0,
      // 1.0 volume
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // pre_defined
      255,
      255,
      255,
      255
      // next_track_ID
    ]);
    return _.box(_.types.mvhd, n);
  }
  static sdtp(e) {
    const t = e.samples || [], s = new Uint8Array(4 + t.length);
    let i, n;
    for (i = 0; i < t.length; i++)
      n = t[i].flags, s[i + 4] = n.dependsOn << 4 | n.isDependedOn << 2 | n.hasRedundancy;
    return _.box(_.types.sdtp, s);
  }
  static stbl(e) {
    return _.box(_.types.stbl, _.stsd(e), _.box(_.types.stts, _.STTS), _.box(_.types.stsc, _.STSC), _.box(_.types.stsz, _.STSZ), _.box(_.types.stco, _.STCO));
  }
  static avc1(e) {
    let t = [], s = [], i, n, a;
    for (i = 0; i < e.sps.length; i++)
      n = e.sps[i], a = n.byteLength, t.push(a >>> 8 & 255), t.push(a & 255), t = t.concat(Array.prototype.slice.call(n));
    for (i = 0; i < e.pps.length; i++)
      n = e.pps[i], a = n.byteLength, s.push(a >>> 8 & 255), s.push(a & 255), s = s.concat(Array.prototype.slice.call(n));
    const o = _.box(_.types.avcC, new Uint8Array([
      1,
      // version
      t[3],
      // profile
      t[4],
      // profile compat
      t[5],
      // level
      255,
      // lengthSizeMinusOne, hard-coded to 4 bytes
      224 | e.sps.length
      // 3bit reserved (111) + numOfSequenceParameterSets
    ].concat(t).concat([
      e.pps.length
      // numOfPictureParameterSets
    ]).concat(s))), c = e.width, l = e.height, u = e.pixelRatio[0], h = e.pixelRatio[1];
    return _.box(
      _.types.avc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        c >> 8 & 255,
        c & 255,
        // width
        l >> 8 & 255,
        l & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      o,
      _.box(_.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      _.box(_.types.pasp, new Uint8Array([
        u >> 24,
        // hSpacing
        u >> 16 & 255,
        u >> 8 & 255,
        u & 255,
        h >> 24,
        // vSpacing
        h >> 16 & 255,
        h >> 8 & 255,
        h & 255
      ]))
    );
  }
  static esds(e) {
    const t = e.config;
    return new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      3,
      // descriptor_type
      25,
      // length
      0,
      1,
      // es_id
      0,
      // stream_priority
      4,
      // descriptor_type
      17,
      // length
      64,
      // codec : mpeg4_audio
      21,
      // stream_type
      0,
      0,
      0,
      // buffer_size
      0,
      0,
      0,
      0,
      // maxBitrate
      0,
      0,
      0,
      0,
      // avgBitrate
      5,
      // descriptor_type
      2,
      // length
      ...t,
      6,
      1,
      2
      // GASpecificConfig)); // length + audio config descriptor
    ]);
  }
  static audioStsd(e) {
    const t = e.samplerate || 0;
    return new Uint8Array([
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      // reserved
      0,
      1,
      // data_reference_index
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      e.channelCount || 0,
      // channelcount
      0,
      16,
      // sampleSize:16bits
      0,
      0,
      0,
      0,
      // reserved2
      t >> 8 & 255,
      t & 255,
      //
      0,
      0
    ]);
  }
  static mp4a(e) {
    return _.box(_.types.mp4a, _.audioStsd(e), _.box(_.types.esds, _.esds(e)));
  }
  static mp3(e) {
    return _.box(_.types[".mp3"], _.audioStsd(e));
  }
  static ac3(e) {
    return _.box(_.types["ac-3"], _.audioStsd(e), _.box(_.types.dac3, e.config));
  }
  static stsd(e) {
    const {
      segmentCodec: t
    } = e;
    if (e.type === "audio") {
      if (t === "aac")
        return _.box(_.types.stsd, _.STSD, _.mp4a(e));
      if (t === "ac3" && e.config)
        return _.box(_.types.stsd, _.STSD, _.ac3(e));
      if (t === "mp3" && e.codec === "mp3")
        return _.box(_.types.stsd, _.STSD, _.mp3(e));
    } else if (e.pps && e.sps) {
      if (t === "avc")
        return _.box(_.types.stsd, _.STSD, _.avc1(e));
      if (t === "hevc" && e.vps)
        return _.box(_.types.stsd, _.STSD, _.hvc1(e));
    } else
      throw new Error("video track missing pps or sps");
    throw new Error(`unsupported ${e.type} segment codec (${t}/${e.codec})`);
  }
  static tkhd(e) {
    const t = e.id, s = (e.duration || 0) * (e.timescale || 0), i = e.width || 0, n = e.height || 0, a = Math.floor(s / (Ot + 1)), o = Math.floor(s % (Ot + 1));
    return _.box(_.types.tkhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      7,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      t >> 24 & 255,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      0,
      // reserved
      a >> 24,
      a >> 16 & 255,
      a >> 8 & 255,
      a & 255,
      o >> 24,
      o >> 16 & 255,
      o >> 8 & 255,
      o & 255,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      // layer
      0,
      0,
      // alternate_group
      0,
      0,
      // non-audio track volume
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      i >> 8 & 255,
      i & 255,
      0,
      0,
      // width
      n >> 8 & 255,
      n & 255,
      0,
      0
      // height
    ]));
  }
  static traf(e, t) {
    const s = _.sdtp(e), i = e.id, n = Math.floor(t / (Ot + 1)), a = Math.floor(t % (Ot + 1));
    return _.box(
      _.types.traf,
      _.box(_.types.tfhd, new Uint8Array([
        0,
        // version 0
        0,
        0,
        0,
        // flags
        i >> 24,
        i >> 16 & 255,
        i >> 8 & 255,
        i & 255
        // track_ID
      ])),
      _.box(_.types.tfdt, new Uint8Array([
        1,
        // version 1
        0,
        0,
        0,
        // flags
        n >> 24,
        n >> 16 & 255,
        n >> 8 & 255,
        n & 255,
        a >> 24,
        a >> 16 & 255,
        a >> 8 & 255,
        a & 255
      ])),
      _.trun(e, s.length + 16 + // tfhd
      20 + // tfdt
      8 + // traf header
      16 + // mfhd
      8 + // moof header
      8),
      // mdat header
      s
    );
  }
  /**
   * Generate a track box.
   * @param track a track definition
   */
  static trak(e) {
    return e.duration = e.duration || 4294967295, _.box(_.types.trak, _.tkhd(e), _.mdia(e));
  }
  static trex(e) {
    const t = e.id;
    return _.box(_.types.trex, new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      t >> 24,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      1,
      // default_sample_description_index
      0,
      0,
      0,
      0,
      // default_sample_duration
      0,
      0,
      0,
      0,
      // default_sample_size
      0,
      1,
      0,
      1
      // default_sample_flags
    ]));
  }
  static trun(e, t) {
    const s = e.samples || [], i = s.length, n = 12 + 16 * i, a = new Uint8Array(n);
    let o, c, l, u, h, d;
    for (t += 8 + n, a.set([
      e.type === "video" ? 1 : 0,
      // version 1 for video with signed-int sample_composition_time_offset
      0,
      15,
      1,
      // flags
      i >>> 24 & 255,
      i >>> 16 & 255,
      i >>> 8 & 255,
      i & 255,
      // sample_count
      t >>> 24 & 255,
      t >>> 16 & 255,
      t >>> 8 & 255,
      t & 255
      // data_offset
    ], 0), o = 0; o < i; o++)
      c = s[o], l = c.duration, u = c.size, h = c.flags, d = c.cts, a.set([
        l >>> 24 & 255,
        l >>> 16 & 255,
        l >>> 8 & 255,
        l & 255,
        // sample_duration
        u >>> 24 & 255,
        u >>> 16 & 255,
        u >>> 8 & 255,
        u & 255,
        // sample_size
        h.isLeading << 2 | h.dependsOn,
        h.isDependedOn << 6 | h.hasRedundancy << 4 | h.paddingValue << 1 | h.isNonSync,
        h.degradPrio & 61440,
        h.degradPrio & 15,
        // sample_flags
        d >>> 24 & 255,
        d >>> 16 & 255,
        d >>> 8 & 255,
        d & 255
        // sample_composition_time_offset
      ], 12 + 16 * o);
    return _.box(_.types.trun, a);
  }
  static initSegment(e) {
    _.types || _.init();
    const t = _.moov(e);
    return it(_.FTYP, t);
  }
  static hvc1(e) {
    const t = e.params, s = [e.vps, e.sps, e.pps], i = 4, n = new Uint8Array([1, t.general_profile_space << 6 | (t.general_tier_flag ? 32 : 0) | t.general_profile_idc, t.general_profile_compatibility_flags[0], t.general_profile_compatibility_flags[1], t.general_profile_compatibility_flags[2], t.general_profile_compatibility_flags[3], t.general_constraint_indicator_flags[0], t.general_constraint_indicator_flags[1], t.general_constraint_indicator_flags[2], t.general_constraint_indicator_flags[3], t.general_constraint_indicator_flags[4], t.general_constraint_indicator_flags[5], t.general_level_idc, 240 | t.min_spatial_segmentation_idc >> 8, 255 & t.min_spatial_segmentation_idc, 252 | t.parallelismType, 252 | t.chroma_format_idc, 248 | t.bit_depth_luma_minus8, 248 | t.bit_depth_chroma_minus8, 0, parseInt(t.frame_rate.fps), i - 1 | t.temporal_id_nested << 2 | t.num_temporal_layers << 3 | (t.frame_rate.fixed ? 64 : 0), s.length]);
    let a = n.length;
    for (let g = 0; g < s.length; g += 1) {
      a += 3;
      for (let p = 0; p < s[g].length; p += 1)
        a += 2 + s[g][p].length;
    }
    const o = new Uint8Array(a);
    o.set(n, 0), a = n.length;
    const c = s.length - 1;
    for (let g = 0; g < s.length; g += 1) {
      o.set(new Uint8Array([32 + g | (g === c ? 128 : 0), 0, s[g].length]), a), a += 3;
      for (let p = 0; p < s[g].length; p += 1)
        o.set(new Uint8Array([s[g][p].length >> 8, s[g][p].length & 255]), a), a += 2, o.set(s[g][p], a), a += s[g][p].length;
    }
    const l = _.box(_.types.hvcC, o), u = e.width, h = e.height, d = e.pixelRatio[0], f = e.pixelRatio[1];
    return _.box(
      _.types.hvc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        u >> 8 & 255,
        u & 255,
        // width
        h >> 8 & 255,
        h & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      l,
      _.box(_.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      _.box(_.types.pasp, new Uint8Array([
        d >> 24,
        // hSpacing
        d >> 16 & 255,
        d >> 8 & 255,
        d & 255,
        f >> 24,
        // vSpacing
        f >> 16 & 255,
        f >> 8 & 255,
        f & 255
      ]))
    );
  }
}
_.types = void 0;
_.HDLR_TYPES = void 0;
_.STTS = void 0;
_.STSC = void 0;
_.STCO = void 0;
_.STSZ = void 0;
_.VMHD = void 0;
_.SMHD = void 0;
_.STSD = void 0;
_.FTYP = void 0;
_.DINF = void 0;
const Ll = 9e4;
function fr(r, e, t = 1, s = !1) {
  const i = r * e * t;
  return s ? Math.round(i) : i;
}
function gf(r, e, t = 1, s = !1) {
  return fr(r, e, 1 / t, s);
}
function Is(r, e = !1) {
  return fr(r, 1e3, 1 / Ll, e);
}
function mf(r, e = 1) {
  return fr(r, Ll, 1 / e);
}
function Ba(r) {
  const {
    baseTime: e,
    timescale: t,
    trackId: s
  } = r;
  return `${e / t} (${e}/${t}) trackId: ${s}`;
}
const pf = 10 * 1e3, yf = 1024, Ef = 1152, Tf = 1536;
let ss = null, dn = null;
function Ua(r, e, t, s) {
  return {
    duration: e,
    size: t,
    cts: s,
    flags: {
      isLeading: 0,
      isDependedOn: 0,
      hasRedundancy: 0,
      degradPrio: 0,
      dependsOn: r ? 2 : 1,
      isNonSync: r ? 0 : 1
    }
  };
}
class pi extends nt {
  constructor(e, t, s, i) {
    if (super("mp4-remuxer", i), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextVideoTs = null, this.nextAudioTs = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.videoTrackConfig = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.ISGenerated = !1, ss === null) {
      const a = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      ss = a ? parseInt(a[1]) : 0;
    }
    if (dn === null) {
      const n = navigator.userAgent.match(/Safari\/(\d+)/i);
      dn = n ? parseInt(n[1]) : 0;
    }
  }
  destroy() {
    this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
  }
  resetTimeStamp(e) {
    const t = this._initPTS;
    (!t || !e || e.trackId !== t.trackId || e.baseTime !== t.baseTime || e.timescale !== t.timescale) && this.log(`Reset initPTS: ${t && Ba(t)} > ${e && Ba(e)}`), this._initPTS = this._initDTS = e;
  }
  resetNextTimestamp() {
    this.log("reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1;
  }
  resetInitSegment() {
    this.log("ISGenerated flag reset"), this.ISGenerated = !1, this.videoTrackConfig = void 0;
  }
  getVideoStartPts(e) {
    let t = !1;
    const s = e[0].pts, i = e.reduce((n, a) => {
      let o = a.pts, c = o - n;
      return c < -4294967296 && (t = !0, o = Xe(o, s), c = o - n), c > 0 ? n : o;
    }, s);
    return t && this.debug("PTS rollover detected"), i;
  }
  remux(e, t, s, i, n, a, o, c) {
    let l, u, h, d, f, g, p = n, y = n;
    const E = e.pid > -1, T = t.pid > -1, S = t.samples.length, v = e.samples.length > 0, x = o && S > 0 || S > 1;
    if ((!E || v) && (!T || x) || this.ISGenerated || o) {
      if (this.ISGenerated) {
        var A, R, b, L;
        const H = this.videoTrackConfig;
        (H && (t.width !== H.width || t.height !== H.height || ((A = t.pixelRatio) == null ? void 0 : A[0]) !== ((R = H.pixelRatio) == null ? void 0 : R[0]) || ((b = t.pixelRatio) == null ? void 0 : b[1]) !== ((L = H.pixelRatio) == null ? void 0 : L[1])) || !H && x || this.nextAudioTs === null && v) && this.resetInitSegment();
      }
      this.ISGenerated || (h = this.generateIS(e, t, n, a));
      const P = this.isVideoContiguous;
      let M = -1, U;
      if (x && (M = Sf(t.samples), !P && this.config.forceKeyFrameOnDiscontinuity))
        if (g = !0, M > 0) {
          this.warn(`Dropped ${M} out of ${S} video samples due to a missing keyframe`);
          const H = this.getVideoStartPts(t.samples);
          t.samples = t.samples.slice(M), t.dropped += M, y += (t.samples[0].pts - H) / t.inputTimeScale, U = y;
        } else M === -1 && (this.warn(`No keyframe found out of ${S} video samples`), g = !1);
      if (this.ISGenerated) {
        if (v && x) {
          const H = this.getVideoStartPts(t.samples), F = (Xe(e.samples[0].pts, H) - H) / t.inputTimeScale;
          p += Math.max(0, F), y += Math.max(0, -F);
        }
        if (v) {
          if (e.samplerate || (this.warn("regenerate InitSegment as audio detected"), h = this.generateIS(e, t, n, a)), u = this.remuxAudio(e, p, this.isAudioContiguous, a, T || x || c === W.AUDIO ? y : void 0), x) {
            const H = u ? u.endPTS - u.startPTS : 0;
            t.inputTimeScale || (this.warn("regenerate InitSegment as video detected"), h = this.generateIS(e, t, n, a)), l = this.remuxVideo(t, y, P, H);
          }
        } else x && (l = this.remuxVideo(t, y, P, 0));
        l && (l.firstKeyFrame = M, l.independent = M !== -1, l.firstKeyFramePTS = U);
      }
    }
    return this.ISGenerated && this._initPTS && this._initDTS && (s.samples.length && (f = bl(s, n, this._initPTS, this._initDTS)), i.samples.length && (d = Rl(i, n, this._initPTS))), {
      audio: u,
      video: l,
      initSegment: h,
      independent: g,
      text: d,
      id3: f
    };
  }
  computeInitPts(e, t, s, i) {
    const n = Math.round(s * t);
    let a = Xe(e, n);
    if (a < n + t)
      for (this.log(`Adjusting PTS for rollover in timeline near ${(n - a) / t} ${i}`); a < n + t; )
        a += 8589934592;
    return a - n;
  }
  generateIS(e, t, s, i) {
    const n = e.samples, a = t.samples, o = this.typeSupported, c = {}, l = this._initPTS;
    let u = !l || i, h = "audio/mp4", d, f, g, p = -1;
    if (u && (d = f = 1 / 0), e.config && n.length) {
      switch (e.timescale = e.samplerate, e.segmentCodec) {
        case "mp3":
          o.mpeg ? (h = "audio/mpeg", e.codec = "") : o.mp3 && (e.codec = "mp3");
          break;
        case "ac3":
          e.codec = "ac-3";
          break;
      }
      c.audio = {
        id: "audio",
        container: h,
        codec: e.codec,
        initSegment: e.segmentCodec === "mp3" && o.mpeg ? new Uint8Array(0) : _.initSegment([e]),
        metadata: {
          channelCount: e.channelCount
        }
      }, u && (p = e.id, g = e.inputTimeScale, !l || g !== l.timescale ? d = f = this.computeInitPts(n[0].pts, g, s, "audio") : u = !1);
    }
    if (t.sps && t.pps && a.length) {
      if (t.timescale = t.inputTimeScale, c.video = {
        id: "main",
        container: "video/mp4",
        codec: t.codec,
        initSegment: _.initSegment([t]),
        metadata: {
          width: t.width,
          height: t.height
        }
      }, u)
        if (p = t.id, g = t.inputTimeScale, !l || g !== l.timescale) {
          const y = this.getVideoStartPts(a), E = Xe(a[0].dts, y), T = this.computeInitPts(E, g, s, "video"), S = this.computeInitPts(y, g, s, "video");
          f = Math.min(f, T), d = Math.min(d, S);
        } else
          u = !1;
      this.videoTrackConfig = {
        width: t.width,
        height: t.height,
        pixelRatio: t.pixelRatio
      };
    }
    if (Object.keys(c).length)
      return this.ISGenerated = !0, u ? (l && this.warn(`Timestamps at playlist time: ${i ? "" : "~"}${s} ${d / g} != initPTS: ${l.baseTime / l.timescale} (${l.baseTime}/${l.timescale}) trackId: ${l.trackId}`), this.log(`Found initPTS at playlist time: ${s} offset: ${d / g} (${d}/${g}) trackId: ${p}`), this._initPTS = {
        baseTime: d,
        timescale: g,
        trackId: p
      }, this._initDTS = {
        baseTime: f,
        timescale: g,
        trackId: p
      }) : d = g = void 0, {
        tracks: c,
        initPTS: d,
        timescale: g,
        trackId: p
      };
  }
  remuxVideo(e, t, s, i) {
    const n = e.inputTimeScale, a = e.samples, o = [], c = a.length, l = this._initPTS, u = l.baseTime * n / l.timescale;
    let h = this.nextVideoTs, d = 8, f = this.videoSampleDuration, g, p, y = Number.POSITIVE_INFINITY, E = Number.NEGATIVE_INFINITY, T = !1;
    if (!s || h === null) {
      const w = u + t * n, $ = a[0].pts - Xe(a[0].dts, a[0].pts);
      ss && h !== null && Math.abs(w - $ - (h + u)) < 15e3 ? s = !0 : h = w - $ - u;
    }
    const S = h + u;
    for (let w = 0; w < c; w++) {
      const $ = a[w];
      $.pts = Xe($.pts, S), $.dts = Xe($.dts, S), $.dts < a[w > 0 ? w - 1 : w].dts && (T = !0);
    }
    T && a.sort(function(w, $) {
      const Q = w.dts - $.dts, oe = w.pts - $.pts;
      return Q || oe;
    }), g = a[0].dts, p = a[a.length - 1].dts;
    const v = p - g, x = v ? Math.round(v / (c - 1)) : f || e.inputTimeScale / 30;
    if (s) {
      const w = g - S, $ = w > x, Q = w < -1;
      if (($ || Q) && ($ ? this.warn(`${(e.segmentCodec || "").toUpperCase()}: ${Is(w, !0)} ms (${w}dts) hole between fragments detected at ${t.toFixed(3)}`) : this.warn(`${(e.segmentCodec || "").toUpperCase()}: ${Is(-w, !0)} ms (${w}dts) overlapping between fragments detected at ${t.toFixed(3)}`), !Q || S >= a[0].pts || ss)) {
        g = S;
        const oe = a[0].pts - w;
        if ($)
          a[0].dts = g, a[0].pts = oe;
        else {
          let z = !0;
          for (let se = 0; se < a.length && !(a[se].dts > oe && z); se++) {
            const Se = a[se].pts;
            if (a[se].dts -= w, a[se].pts -= w, se < a.length - 1) {
              const me = a[se + 1].pts, Me = a[se].pts, Ke = me <= Me, ot = me <= Se;
              z = Ke == ot;
            }
          }
        }
        this.log(`Video: Initial PTS/DTS adjusted: ${Is(oe, !0)}/${Is(g, !0)}, delta: ${Is(w, !0)} ms`);
      }
    }
    g = Math.max(0, g);
    let C = 0, A = 0, R = g;
    for (let w = 0; w < c; w++) {
      const $ = a[w], Q = $.units, oe = Q.length;
      let z = 0;
      for (let se = 0; se < oe; se++)
        z += Q[se].data.length;
      A += z, C += oe, $.length = z, $.dts < R ? ($.dts = R, R += x / 4 | 0 || 1) : R = $.dts, y = Math.min($.pts, y), E = Math.max($.pts, E);
    }
    p = a[c - 1].dts;
    const b = A + 4 * C + 8;
    let L;
    try {
      L = new Uint8Array(b);
    } catch (w) {
      this.observer.emit(m.ERROR, m.ERROR, {
        type: X.MUX_ERROR,
        details: D.REMUX_ALLOC_ERROR,
        fatal: !1,
        error: w,
        bytes: b,
        reason: `fail allocating video mdat ${b}`
      });
      return;
    }
    const P = new DataView(L.buffer);
    P.setUint32(0, b), L.set(_.types.mdat, 4);
    let M = !1, U = Number.POSITIVE_INFINITY, H = Number.POSITIVE_INFINITY, K = Number.NEGATIVE_INFINITY, F = Number.NEGATIVE_INFINITY;
    for (let w = 0; w < c; w++) {
      const $ = a[w], Q = $.units;
      let oe = 0;
      for (let Se = 0, me = Q.length; Se < me; Se++) {
        const Me = Q[Se], Ke = Me.data, ot = Me.data.byteLength;
        P.setUint32(d, ot), d += 4, L.set(Ke, d), d += ot, oe += 4 + ot;
      }
      let z;
      if (w < c - 1)
        f = a[w + 1].dts - $.dts, z = a[w + 1].pts - $.pts;
      else {
        const Se = this.config, me = w > 0 ? $.dts - a[w - 1].dts : x;
        if (z = w > 0 ? $.pts - a[w - 1].pts : x, Se.stretchShortVideoTrack && this.nextAudioTs !== null) {
          const Me = Math.floor(Se.maxBufferHole * n), Ke = (i ? y + i * n : this.nextAudioTs + u) - $.pts;
          Ke > Me ? (f = Ke - me, f < 0 ? f = me : M = !0, this.log(`It is approximately ${Ke / 90} ms to the next segment; using duration ${f / 90} ms for the last video frame.`)) : f = me;
        } else
          f = me;
      }
      const se = Math.round($.pts - $.dts);
      U = Math.min(U, f), K = Math.max(K, f), H = Math.min(H, z), F = Math.max(F, z), o.push(Ua($.key, f, oe, se));
    }
    if (o.length) {
      if (ss) {
        if (ss < 70) {
          const w = o[0].flags;
          w.dependsOn = 2, w.isNonSync = 0;
        }
      } else if (dn && F - H < K - U && x / K < 0.025 && o[0].cts === 0) {
        this.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
        let w = g;
        for (let $ = 0, Q = o.length; $ < Q; $++) {
          const oe = w + o[$].duration, z = w + o[$].cts;
          if ($ < Q - 1) {
            const se = oe + o[$ + 1].cts;
            o[$].duration = se - z;
          } else
            o[$].duration = $ ? o[$ - 1].duration : x;
          o[$].cts = 0, w = oe;
        }
      }
    }
    f = M || !f ? x : f;
    const V = p + f;
    this.nextVideoTs = h = V - u, this.videoSampleDuration = f, this.isVideoContiguous = !0;
    const J = {
      data1: _.moof(e.sequenceNumber++, g, de(e, {
        samples: o
      })),
      data2: L,
      startPTS: (y - u) / n,
      endPTS: (E + f - u) / n,
      startDTS: (g - u) / n,
      endDTS: h / n,
      type: "video",
      hasAudio: !1,
      hasVideo: !0,
      nb: o.length,
      dropped: e.dropped
    };
    return e.samples = [], e.dropped = 0, J;
  }
  getSamplesPerFrame(e) {
    switch (e.segmentCodec) {
      case "mp3":
        return Ef;
      case "ac3":
        return Tf;
      default:
        return yf;
    }
  }
  remuxAudio(e, t, s, i, n) {
    const a = e.inputTimeScale, o = e.samplerate ? e.samplerate : a, c = a / o, l = this.getSamplesPerFrame(e), u = l * c, h = this._initPTS, d = e.segmentCodec === "mp3" && this.typeSupported.mpeg, f = [], g = n !== void 0;
    let p = e.samples, y = d ? 0 : 8, E = this.nextAudioTs || -1;
    const T = h.baseTime * a / h.timescale, S = T + t * a;
    if (this.isAudioContiguous = s = s || p.length && E > 0 && (i && Math.abs(S - (E + T)) < 9e3 || Math.abs(Xe(p[0].pts, S) - (E + T)) < 20 * u), p.forEach(function(F) {
      F.pts = Xe(F.pts, S);
    }), !s || E < 0) {
      const F = p.length;
      if (p = p.filter((V) => V.pts >= 0), F !== p.length && this.warn(`Removed ${p.length - F} of ${F} samples (initPTS ${T} / ${a})`), !p.length)
        return;
      n === 0 ? E = 0 : i && !g ? E = Math.max(0, S - T) : E = p[0].pts - T;
    }
    if (e.segmentCodec === "aac") {
      const F = this.config.maxAudioFramesDrift;
      for (let V = 0, B = E + T; V < p.length; V++) {
        const j = p[V], J = j.pts, w = J - B, $ = Math.abs(1e3 * w / a);
        if (w <= -F * u && g)
          V === 0 && (this.warn(`Audio frame @ ${(J / a).toFixed(3)}s overlaps marker by ${Math.round(1e3 * w / a)} ms.`), this.nextAudioTs = E = J - T, B = J);
        else if (w >= F * u && $ < pf && g) {
          let Q = Math.round(w / u);
          for (B = J - Q * u; B < 0 && Q && u; )
            Q--, B += u;
          V === 0 && (this.nextAudioTs = E = B - T), this.warn(`Injecting ${Q} audio frames @ ${((B - T) / a).toFixed(3)}s due to ${Math.round(1e3 * w / a)} ms gap.`);
          for (let oe = 0; oe < Q; oe++) {
            let z = ff.getSilentFrame(e.parsedCodec || e.manifestCodec || e.codec, e.channelCount);
            z || (this.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), z = j.unit.subarray()), p.splice(V, 0, {
              unit: z,
              pts: B
            }), B += u, V++;
          }
        }
        j.pts = B, B += u;
      }
    }
    let v = null, x = null, C, A = 0, R = p.length;
    for (; R--; )
      A += p[R].unit.byteLength;
    for (let F = 0, V = p.length; F < V; F++) {
      const B = p[F], j = B.unit;
      let J = B.pts;
      if (x !== null) {
        const $ = f[F - 1];
        $.duration = Math.round((J - x) / c);
      } else if (s && e.segmentCodec === "aac" && (J = E + T), v = J, A > 0) {
        A += y;
        try {
          C = new Uint8Array(A);
        } catch ($) {
          this.observer.emit(m.ERROR, m.ERROR, {
            type: X.MUX_ERROR,
            details: D.REMUX_ALLOC_ERROR,
            fatal: !1,
            error: $,
            bytes: A,
            reason: `fail allocating audio mdat ${A}`
          });
          return;
        }
        d || (new DataView(C.buffer).setUint32(0, A), C.set(_.types.mdat, 4));
      } else
        return;
      C.set(j, y);
      const w = j.byteLength;
      y += w, f.push(Ua(!0, l, w, 0)), x = J;
    }
    const b = f.length;
    if (!b)
      return;
    const L = f[f.length - 1];
    E = x - T, this.nextAudioTs = E + c * L.duration;
    const P = d ? new Uint8Array(0) : _.moof(e.sequenceNumber++, v / c, de({}, e, {
      samples: f
    }));
    e.samples = [];
    const M = (v - T) / a, U = E / a, K = {
      data1: P,
      data2: C,
      startPTS: M,
      endPTS: U,
      startDTS: M,
      endDTS: U,
      type: "audio",
      hasAudio: !0,
      hasVideo: !1,
      nb: b
    };
    return this.isAudioContiguous = !0, K;
  }
}
function Xe(r, e) {
  let t;
  if (e === null)
    return r;
  for (e < r ? t = -8589934592 : t = 8589934592; Math.abs(r - e) > 4294967296; )
    r += t;
  return r;
}
function Sf(r) {
  for (let e = 0; e < r.length; e++)
    if (r[e].key)
      return e;
  return -1;
}
function bl(r, e, t, s) {
  const i = r.samples.length;
  if (!i)
    return;
  const n = r.inputTimeScale;
  for (let o = 0; o < i; o++) {
    const c = r.samples[o];
    c.pts = Xe(c.pts - t.baseTime * n / t.timescale, e * n) / n, c.dts = Xe(c.dts - s.baseTime * n / s.timescale, e * n) / n;
  }
  const a = r.samples;
  return r.samples = [], {
    samples: a
  };
}
function Rl(r, e, t) {
  const s = r.samples.length;
  if (!s)
    return;
  const i = r.inputTimeScale;
  for (let a = 0; a < s; a++) {
    const o = r.samples[a];
    o.pts = Xe(o.pts - t.baseTime * i / t.timescale, e * i) / i;
  }
  r.samples.sort((a, o) => a.pts - o.pts);
  const n = r.samples;
  return r.samples = [], {
    samples: n
  };
}
class vf extends nt {
  constructor(e, t, s, i) {
    super("passthrough-remuxer", i), this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null, this.isVideoContiguous = !1;
  }
  destroy() {
  }
  resetTimeStamp(e) {
    this.lastEndTime = null;
    const t = this.initPTS;
    t && e && t.baseTime === e.baseTime && t.timescale === e.timescale || (this.initPTS = e);
  }
  resetNextTimestamp() {
    this.isVideoContiguous = !1, this.lastEndTime = null;
  }
  resetInitSegment(e, t, s, i) {
    this.audioCodec = t, this.videoCodec = s, this.generateInitSegment(e, i), this.emitInitSegment = !0;
  }
  generateInitSegment(e, t) {
    let {
      audioCodec: s,
      videoCodec: i
    } = this;
    if (!(e != null && e.byteLength)) {
      this.initTracks = void 0, this.initData = void 0;
      return;
    }
    const {
      audio: n,
      video: a
    } = this.initData = wo(e);
    if (t)
      oh(e, t);
    else {
      const c = n || a;
      c != null && c.encrypted && this.warn(`Init segment with encrypted track with has no key ("${c.codec}")!`);
    }
    n && (s = Ga(n, fe.AUDIO, this)), a && (i = Ga(a, fe.VIDEO, this));
    const o = {};
    n && a ? o.audiovideo = {
      container: "video/mp4",
      codec: s + "," + i,
      supplemental: a.supplemental,
      encrypted: a.encrypted,
      initSegment: e,
      id: "main"
    } : n ? o.audio = {
      container: "audio/mp4",
      codec: s,
      encrypted: n.encrypted,
      initSegment: e,
      id: "audio"
    } : a ? o.video = {
      container: "video/mp4",
      codec: i,
      supplemental: a.supplemental,
      encrypted: a.encrypted,
      initSegment: e,
      id: "main"
    } : this.warn("initSegment does not contain moov or trak boxes."), this.initTracks = o;
  }
  remux(e, t, s, i, n, a) {
    var o, c;
    let {
      initPTS: l,
      lastEndTime: u
    } = this;
    const h = {
      audio: void 0,
      video: void 0,
      text: i,
      id3: s,
      initSegment: void 0
    };
    G(u) || (u = this.lastEndTime = n || 0);
    const d = t.samples;
    if (!d.length)
      return h;
    const f = {
      initPTS: void 0,
      timescale: void 0,
      trackId: void 0
    };
    let g = this.initData;
    if ((o = g) != null && o.length || (this.generateInitSegment(d), g = this.initData), !((c = g) != null && c.length))
      return this.warn("Failed to generate initSegment."), h;
    this.emitInitSegment && (f.tracks = this.initTracks, this.emitInitSegment = !1);
    const p = ch(d, g, this), y = g.audio ? p[g.audio.id] : null, E = g.video ? p[g.video.id] : null, T = si(E, 1 / 0), S = si(y, 1 / 0), v = si(E, 0, !0), x = si(y, 0, !0);
    let C = n, A = 0;
    const R = y && (!E || !l && S < T || l && l.trackId === g.audio.id), b = R ? y : E;
    if (b) {
      const B = b.timescale, j = b.start - n * B, J = R ? g.audio.id : g.video.id;
      C = b.start / B, A = R ? x - S : v - T, (a || !l) && (xf(l, C, n, A) || B !== l.timescale) && (l && this.warn(`Timestamps at playlist time: ${a ? "" : "~"}${n} ${j / B} != initPTS: ${l.baseTime / l.timescale} (${l.baseTime}/${l.timescale}) trackId: ${l.trackId}`), this.log(`Found initPTS at playlist time: ${n} offset: ${C - n} (${j}/${B}) trackId: ${J}`), l = null, f.initPTS = j, f.timescale = B, f.trackId = J);
    } else
      this.warn(`No audio or video samples found for initPTS at playlist time: ${n}`);
    l ? (f.initPTS = l.baseTime, f.timescale = l.timescale, f.trackId = l.trackId) : ((!f.timescale || f.trackId === void 0 || f.initPTS === void 0) && (this.warn("Could not set initPTS"), f.initPTS = C, f.timescale = 1, f.trackId = -1), this.initPTS = l = {
      baseTime: f.initPTS,
      timescale: f.timescale,
      trackId: f.trackId
    });
    const L = C - l.baseTime / l.timescale, P = L + A;
    A > 0 ? this.lastEndTime = P : (this.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
    const M = !!g.audio, U = !!g.video;
    let H = "";
    M && (H += "audio"), U && (H += "video");
    const K = (g.audio ? g.audio.encrypted : !1) || (g.video ? g.video.encrypted : !1), F = {
      data1: d,
      startPTS: L,
      startDTS: L,
      endPTS: P,
      endDTS: P,
      type: H,
      hasAudio: M,
      hasVideo: U,
      nb: 1,
      dropped: 0,
      encrypted: K
    };
    h.audio = M && !U ? F : void 0, h.video = U ? F : void 0;
    const V = E == null ? void 0 : E.sampleCount;
    if (V) {
      const B = E.keyFrameIndex, j = B !== -1;
      F.nb = V, F.dropped = B === 0 || this.isVideoContiguous ? 0 : j ? B : V, F.independent = j, F.firstKeyFrame = B, j && E.keyFrameStart && (F.firstKeyFramePTS = (E.keyFrameStart - l.baseTime) / l.timescale), this.isVideoContiguous || (h.independent = j), this.isVideoContiguous || (this.isVideoContiguous = j), F.dropped && this.warn(`fmp4 does not start with IDR: firstIDR ${B}/${V} dropped: ${F.dropped} start: ${F.firstKeyFramePTS || "NA"}`);
    }
    return h.initSegment = f, h.id3 = bl(s, n, l, l), i.samples.length && (h.text = Rl(i, n, l)), h;
  }
}
function si(r, e, t = !1) {
  return (r == null ? void 0 : r.start) !== void 0 ? (r.start + (t ? r.duration : 0)) / r.timescale : e;
}
function xf(r, e, t, s) {
  if (r === null)
    return !0;
  const i = Math.max(s, 1), n = e - r.baseTime / r.timescale;
  return Math.abs(n - t) > i;
}
function Ga(r, e, t) {
  const s = r.codec;
  return s && s.length > 4 ? s : e === fe.AUDIO ? s === "ec-3" || s === "ac-3" || s === "alac" ? s : s === "fLaC" || s === "Opus" ? Ai(s, !1) : (t.warn(`Unhandled audio codec "${s}" in mp4 MAP`), s || "mp4a") : (t.warn(`Unhandled video codec "${s}" in mp4 MAP`), s || "avc1");
}
let _t;
try {
  _t = self.performance.now.bind(self.performance);
} catch {
  _t = Date.now;
}
const yi = [{
  demux: of,
  remux: vf
}, {
  demux: Nt,
  remux: pi
}, {
  demux: sf,
  remux: pi
}, {
  demux: rf,
  remux: pi
}];
yi.splice(2, 0, {
  demux: nf,
  remux: pi
});
class Ka {
  constructor(e, t, s, i, n, a) {
    this.asyncResult = !1, this.logger = void 0, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e, this.typeSupported = t, this.config = s, this.id = n, this.logger = a;
  }
  configure(e) {
    this.transmuxConfig = e, this.decrypter && this.decrypter.reset();
  }
  push(e, t, s, i) {
    const n = s.transmuxing;
    n.executeStart = _t();
    let a = new Uint8Array(e);
    const {
      currentTransmuxState: o,
      transmuxConfig: c
    } = this;
    i && (this.currentTransmuxState = i);
    const {
      contiguous: l,
      discontinuity: u,
      trackSwitch: h,
      accurateTimeOffset: d,
      timeOffset: f,
      initSegmentChange: g
    } = i || o, {
      audioCodec: p,
      videoCodec: y,
      defaultInitPts: E,
      duration: T,
      initSegmentData: S
    } = c, v = Af(a, t);
    if (v && os(v.method)) {
      const R = this.getDecrypter(), b = nr(v.method);
      if (R.isSync()) {
        let L = R.softwareDecrypt(a, v.key.buffer, v.iv.buffer, b);
        if (s.part > -1) {
          const M = R.flush();
          L = M && M.buffer;
        }
        if (!L)
          return n.executeEnd = _t(), fn(s);
        a = new Uint8Array(L);
      } else
        return this.asyncResult = !0, this.decryptionPromise = R.webCryptoDecrypt(a, v.key.buffer, v.iv.buffer, b).then((L) => {
          const P = this.push(L, null, s);
          return this.decryptionPromise = null, P;
        }), this.decryptionPromise;
    }
    const x = this.needsProbing(u, h);
    if (x) {
      const R = this.configureTransmuxer(a);
      if (R)
        return this.logger.warn(`[transmuxer] ${R.message}`), this.observer.emit(m.ERROR, m.ERROR, {
          type: X.MEDIA_ERROR,
          details: D.FRAG_PARSING_ERROR,
          fatal: !1,
          error: R,
          reason: R.message
        }), n.executeEnd = _t(), fn(s);
    }
    (u || h || g || x) && this.resetInitSegment(S, p, y, T, t), (u || g || x) && this.resetInitialTimestamp(E), l || this.resetContiguity();
    const C = this.transmux(a, v, f, d, s);
    this.asyncResult = Bs(C);
    const A = this.currentTransmuxState;
    return A.contiguous = !0, A.discontinuity = !1, A.trackSwitch = !1, n.executeEnd = _t(), C;
  }
  // Due to data caching, flush calls can produce more than one TransmuxerResult (hence the Array type)
  flush(e) {
    const t = e.transmuxing;
    t.executeStart = _t();
    const {
      decrypter: s,
      currentTransmuxState: i,
      decryptionPromise: n
    } = this;
    if (n)
      return this.asyncResult = !0, n.then(() => this.flush(e));
    const a = [], {
      timeOffset: o
    } = i;
    if (s) {
      const h = s.flush();
      h && a.push(this.push(h.buffer, null, e));
    }
    const {
      demuxer: c,
      remuxer: l
    } = this;
    if (!c || !l) {
      t.executeEnd = _t();
      const h = [fn(e)];
      return this.asyncResult ? Promise.resolve(h) : h;
    }
    const u = c.flush(o);
    return Bs(u) ? (this.asyncResult = !0, u.then((h) => (this.flushRemux(a, h, e), a))) : (this.flushRemux(a, u, e), this.asyncResult ? Promise.resolve(a) : a);
  }
  flushRemux(e, t, s) {
    const {
      audioTrack: i,
      videoTrack: n,
      id3Track: a,
      textTrack: o
    } = t, {
      accurateTimeOffset: c,
      timeOffset: l
    } = this.currentTransmuxState;
    this.logger.log(`[transmuxer.ts]: Flushed ${this.id} sn: ${s.sn}${s.part > -1 ? " part: " + s.part : ""} of ${this.id === W.MAIN ? "level" : "track"} ${s.level}`);
    const u = this.remuxer.remux(i, n, a, o, l, c, !0, this.id);
    e.push({
      remuxResult: u,
      chunkMeta: s
    }), s.transmuxing.executeEnd = _t();
  }
  resetInitialTimestamp(e) {
    const {
      demuxer: t,
      remuxer: s
    } = this;
    !t || !s || (t.resetTimeStamp(e), s.resetTimeStamp(e));
  }
  resetContiguity() {
    const {
      demuxer: e,
      remuxer: t
    } = this;
    !e || !t || (e.resetContiguity(), t.resetNextTimestamp());
  }
  resetInitSegment(e, t, s, i, n) {
    const {
      demuxer: a,
      remuxer: o
    } = this;
    !a || !o || (a.resetInitSegment(e, t, s, i), o.resetInitSegment(e, t, s, n));
  }
  destroy() {
    this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
  }
  transmux(e, t, s, i, n) {
    let a;
    return t && t.method === "SAMPLE-AES" ? a = this.transmuxSampleAes(e, t, s, i, n) : a = this.transmuxUnencrypted(e, s, i, n), a;
  }
  transmuxUnencrypted(e, t, s, i) {
    const {
      audioTrack: n,
      videoTrack: a,
      id3Track: o,
      textTrack: c
    } = this.demuxer.demux(e, t, !1, !this.config.progressive);
    return {
      remuxResult: this.remuxer.remux(n, a, o, c, t, s, !1, this.id),
      chunkMeta: i
    };
  }
  transmuxSampleAes(e, t, s, i, n) {
    return this.demuxer.demuxSampleAes(e, t, s).then((a) => ({
      remuxResult: this.remuxer.remux(a.audioTrack, a.videoTrack, a.id3Track, a.textTrack, s, i, !1, this.id),
      chunkMeta: n
    }));
  }
  configureTransmuxer(e) {
    const {
      config: t,
      observer: s,
      typeSupported: i
    } = this;
    let n;
    for (let h = 0, d = yi.length; h < d; h++) {
      var a;
      if ((a = yi[h].demux) != null && a.probe(e, this.logger)) {
        n = yi[h];
        break;
      }
    }
    if (!n)
      return new Error("Failed to find demuxer by probing fragment data");
    const o = this.demuxer, c = this.remuxer, l = n.remux, u = n.demux;
    (!c || !(c instanceof l)) && (this.remuxer = new l(s, t, i, this.logger)), (!o || !(o instanceof u)) && (this.demuxer = new u(s, t, i, this.logger), this.probe = u.probe);
  }
  needsProbing(e, t) {
    return !this.demuxer || !this.remuxer || e || t;
  }
  getDecrypter() {
    let e = this.decrypter;
    return e || (e = this.decrypter = new sr(this.config)), e;
  }
}
function Af(r, e) {
  let t = null;
  return r.byteLength > 0 && (e == null ? void 0 : e.key) != null && e.iv !== null && e.method != null && (t = e), t;
}
const fn = (r) => ({
  remuxResult: {},
  chunkMeta: r
});
function Bs(r) {
  return "then" in r && r.then instanceof Function;
}
class If {
  constructor(e, t, s, i, n) {
    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = s, this.duration = i, this.defaultInitPts = n || null;
  }
}
class Lf {
  constructor(e, t, s, i, n, a) {
    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = s, this.trackSwitch = i, this.timeOffset = n, this.initSegmentChange = a;
  }
}
let Va = 0;
class _l {
  constructor(e, t, s, i) {
    this.error = null, this.hls = void 0, this.id = void 0, this.instanceNo = Va++, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.onWorkerMessage = (c) => {
      const l = c.data, u = this.hls;
      if (!(!u || !(l != null && l.event) || l.instanceNo !== this.instanceNo))
        switch (l.event) {
          case "init": {
            var h;
            const d = (h = this.workerContext) == null ? void 0 : h.objectURL;
            d && self.URL.revokeObjectURL(d);
            break;
          }
          case "transmuxComplete": {
            this.handleTransmuxComplete(l.data);
            break;
          }
          case "flush": {
            this.onFlush(l.data);
            break;
          }
          case "workerLog": {
            u.logger[l.data.logType] && u.logger[l.data.logType](l.data.message);
            break;
          }
          default: {
            l.data = l.data || {}, l.data.frag = this.frag, l.data.part = this.part, l.data.id = this.id, u.trigger(l.event, l.data);
            break;
          }
        }
    }, this.onWorkerError = (c) => {
      if (!this.hls)
        return;
      const l = new Error(`${c.message}  (${c.filename}:${c.lineno})`);
      this.hls.config.enableWorker = !1, this.hls.logger.warn(`Error in "${this.id}" Web Worker, fallback to inline`), this.hls.trigger(m.ERROR, {
        type: X.OTHER_ERROR,
        details: D.INTERNAL_EXCEPTION,
        fatal: !1,
        event: "demuxerWorker",
        error: l
      });
    };
    const n = e.config;
    this.hls = e, this.id = t, this.useWorker = !!n.enableWorker, this.onTransmuxComplete = s, this.onFlush = i;
    const a = (c, l) => {
      l = l || {}, l.frag = this.frag || void 0, c === m.ERROR && (l = l, l.parent = this.id, l.part = this.part, this.error = l.error), this.hls.trigger(c, l);
    };
    this.observer = new or(), this.observer.on(m.FRAG_DECRYPTED, a), this.observer.on(m.ERROR, a);
    const o = na(n.preferManagedMediaSource);
    if (this.useWorker && typeof Worker < "u") {
      const c = this.hls.logger;
      if (n.workerPath || _d()) {
        try {
          n.workerPath ? (c.log(`loading Web Worker ${n.workerPath} for "${t}"`), this.workerContext = Cd(n.workerPath)) : (c.log(`injecting Web Worker for "${t}"`), this.workerContext = Dd());
          const {
            worker: u
          } = this.workerContext;
          u.addEventListener("message", this.onWorkerMessage), u.addEventListener("error", this.onWorkerError), u.postMessage({
            instanceNo: this.instanceNo,
            cmd: "init",
            typeSupported: o,
            id: t,
            config: ge(n)
          });
        } catch (u) {
          c.warn(`Error setting up "${t}" Web Worker, fallback to inline`, u), this.terminateWorker(), this.error = null, this.transmuxer = new Ka(this.observer, o, n, "", t, e.logger);
        }
        return;
      }
    }
    this.transmuxer = new Ka(this.observer, o, n, "", t, e.logger);
  }
  reset() {
    if (this.frag = null, this.part = null, this.workerContext) {
      const e = this.instanceNo;
      this.instanceNo = Va++;
      const t = this.hls.config, s = na(t.preferManagedMediaSource);
      this.workerContext.worker.postMessage({
        instanceNo: this.instanceNo,
        cmd: "reset",
        resetNo: e,
        typeSupported: s,
        id: this.id,
        config: ge(t)
      });
    }
  }
  terminateWorker() {
    if (this.workerContext) {
      const {
        worker: e
      } = this.workerContext;
      this.workerContext = null, e.removeEventListener("message", this.onWorkerMessage), e.removeEventListener("error", this.onWorkerError), Pd(this.hls.config.workerPath);
    }
  }
  destroy() {
    if (this.workerContext)
      this.terminateWorker(), this.onWorkerMessage = this.onWorkerError = null;
    else {
      const t = this.transmuxer;
      t && (t.destroy(), this.transmuxer = null);
    }
    const e = this.observer;
    e && e.removeAllListeners(), this.frag = null, this.part = null, this.observer = null, this.hls = null;
  }
  push(e, t, s, i, n, a, o, c, l, u) {
    var h, d;
    l.transmuxing.start = self.performance.now();
    const {
      instanceNo: f,
      transmuxer: g
    } = this, p = a ? a.start : n.start, y = n.decryptdata, E = this.frag, T = !(E && n.cc === E.cc), S = !(E && l.level === E.level), v = E ? l.sn - E.sn : -1, x = this.part ? l.part - this.part.index : -1, C = v === 0 && l.id > 1 && l.id === (E == null ? void 0 : E.stats.chunkCount), A = !S && (v === 1 || v === 0 && (x === 1 || C && x <= 0)), R = self.performance.now();
    (S || v || n.stats.parsing.start === 0) && (n.stats.parsing.start = R), a && (x || !A) && (a.stats.parsing.start = R);
    const b = !(E && ((h = n.initSegment) == null ? void 0 : h.url) === ((d = E.initSegment) == null ? void 0 : d.url)), L = new Lf(T, A, c, S, p, b);
    if (!A || T || b) {
      this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${n.type} sn: ${l.sn}${l.part > -1 ? " part: " + l.part : ""} ${this.id === W.MAIN ? "level" : "track"}: ${l.level} id: ${l.id}
        discontinuity: ${T}
        trackSwitch: ${S}
        contiguous: ${A}
        accurateTimeOffset: ${c}
        timeOffset: ${p}
        initSegmentChange: ${b}`);
      const P = new If(s, i, t, o, u);
      this.configureTransmuxer(P);
    }
    if (this.frag = n, this.part = a, this.workerContext)
      this.workerContext.worker.postMessage({
        instanceNo: f,
        cmd: "demux",
        data: e,
        decryptdata: y,
        chunkMeta: l,
        state: L
      }, e instanceof ArrayBuffer ? [e] : []);
    else if (g) {
      const P = g.push(e, y, l, L);
      Bs(P) ? P.then((M) => {
        this.handleTransmuxComplete(M);
      }).catch((M) => {
        this.transmuxerError(M, l, "transmuxer-interface push error");
      }) : this.handleTransmuxComplete(P);
    }
  }
  flush(e) {
    e.transmuxing.start = self.performance.now();
    const {
      instanceNo: t,
      transmuxer: s
    } = this;
    if (this.workerContext)
      this.workerContext.worker.postMessage({
        instanceNo: t,
        cmd: "flush",
        chunkMeta: e
      });
    else if (s) {
      const i = s.flush(e);
      Bs(i) ? i.then((n) => {
        this.handleFlushResult(n, e);
      }).catch((n) => {
        this.transmuxerError(n, e, "transmuxer-interface flush error");
      }) : this.handleFlushResult(i, e);
    }
  }
  transmuxerError(e, t, s) {
    this.hls && (this.error = e, this.hls.trigger(m.ERROR, {
      type: X.MEDIA_ERROR,
      details: D.FRAG_PARSING_ERROR,
      chunkMeta: t,
      frag: this.frag || void 0,
      part: this.part || void 0,
      fatal: !1,
      error: e,
      err: e,
      reason: s
    }));
  }
  handleFlushResult(e, t) {
    e.forEach((s) => {
      this.handleTransmuxComplete(s);
    }), this.onFlush(t);
  }
  configureTransmuxer(e) {
    const {
      instanceNo: t,
      transmuxer: s
    } = this;
    this.workerContext ? this.workerContext.worker.postMessage({
      instanceNo: t,
      cmd: "configure",
      config: e
    }) : s && s.configure(e);
  }
  handleTransmuxComplete(e) {
    e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e);
  }
}
const Ha = 100;
class bf extends ar {
  constructor(e, t, s) {
    super(e, t, s, "audio-stream-controller", W.AUDIO), this.mainAnchor = null, this.mainFragLoading = null, this.audioOnly = !1, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.flushing = !1, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this.registerListeners();
  }
  onHandlerDestroying() {
    this.unregisterListeners(), super.onHandlerDestroying(), this.resetItem();
  }
  resetItem() {
    this.mainDetails = this.mainAnchor = this.mainFragLoading = this.bufferedTrack = this.switchingTrack = this.waitingData = this.cachedTrackLoadedData = null;
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.on(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(m.BUFFER_RESET, this.onBufferReset, this), e.on(m.BUFFER_CREATED, this.onBufferCreated, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(m.FRAG_LOADING, this.onFragLoading, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (super.unregisterListeners(), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.off(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(m.BUFFER_RESET, this.onBufferReset, this), e.off(m.BUFFER_CREATED, this.onBufferCreated, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(m.FRAG_LOADING, this.onFragLoading, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this));
  }
  // INIT_PTS_FOUND is triggered when the video track parsed in the stream-controller has a new PTS value
  onInitPtsFound(e, {
    frag: t,
    id: s,
    initPTS: i,
    timescale: n,
    trackId: a
  }) {
    if (s === W.MAIN) {
      const o = t.cc, c = this.fragCurrent;
      if (this.initPTS[o] = {
        baseTime: i,
        timescale: n,
        trackId: a
      }, this.log(`InitPTS for cc: ${o} found from main: ${i / n} (${i}/${n}) trackId: ${a}`), this.mainAnchor = t, this.state === k.WAITING_INIT_PTS) {
        const l = this.waitingData;
        (!l && !this.loadingParts || l && l.frag.cc !== o) && this.syncWithAnchor(t, l == null ? void 0 : l.frag);
      } else !this.hls.hasEnoughToStart && c && c.cc !== o ? (c.abortRequests(), this.syncWithAnchor(t, c)) : this.state === k.IDLE && this.tick();
    }
  }
  getLoadPosition() {
    return !this.startFragRequested && this.nextLoadPosition >= 0 ? this.nextLoadPosition : super.getLoadPosition();
  }
  syncWithAnchor(e, t) {
    var s;
    const i = ((s = this.mainFragLoading) == null ? void 0 : s.frag) || null;
    if (t && (i == null ? void 0 : i.cc) === t.cc)
      return;
    const n = (i || e).cc, a = this.getLevelDetails(), o = this.getLoadPosition(), c = Ho(a, n, o);
    c && (this.log(`Syncing with main frag at ${c.start} cc ${c.cc}`), this.startFragRequested = !1, this.nextLoadPosition = c.start, this.resetLoadingState(), this.state === k.IDLE && this.doTickIdle());
  }
  startLoad(e, t) {
    if (!this.levels) {
      this.startPosition = e, this.state = k.STOPPED;
      return;
    }
    const s = this.lastCurrentTime;
    this.stopLoad(), this.setInterval(Ha), s > 0 && e === -1 ? (this.log(`Override startPosition with lastCurrentTime @${s.toFixed(3)}`), e = s, this.state = k.IDLE) : this.state = k.WAITING_TRACK, this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick();
  }
  doTick() {
    switch (this.state) {
      case k.IDLE:
        this.doTickIdle();
        break;
      case k.WAITING_TRACK: {
        const {
          levels: e,
          trackId: t
        } = this, s = e == null ? void 0 : e[t], i = s == null ? void 0 : s.details;
        if (i && !this.waitForLive(s)) {
          if (this.waitForCdnTuneIn(i))
            break;
          this.state = k.WAITING_INIT_PTS;
        }
        break;
      }
      case k.FRAG_LOADING_WAITING_RETRY: {
        this.checkRetryDate();
        break;
      }
      case k.WAITING_INIT_PTS: {
        const e = this.waitingData;
        if (e) {
          const {
            frag: t,
            part: s,
            cache: i,
            complete: n
          } = e, a = this.mainAnchor;
          if (this.initPTS[t.cc] !== void 0) {
            this.waitingData = null, this.state = k.FRAG_LOADING;
            const o = i.flush().buffer, c = {
              frag: t,
              part: s,
              payload: o,
              networkDetails: null
            };
            this._handleFragmentLoadProgress(c), n && super._handleFragmentLoadComplete(c);
          } else a && a.cc !== e.frag.cc && this.syncWithAnchor(a, e.frag);
        } else
          this.state = k.IDLE;
      }
    }
    this.onTickEnd();
  }
  resetLoadingState() {
    const e = this.waitingData;
    e && (this.fragmentTracker.removeFragment(e.frag), this.waitingData = null), super.resetLoadingState();
  }
  onTickEnd() {
    const {
      media: e
    } = this;
    e != null && e.readyState && (this.lastCurrentTime = e.currentTime);
  }
  doTickIdle() {
    var e;
    const {
      hls: t,
      levels: s,
      media: i,
      trackId: n
    } = this, a = t.config;
    if (!this.buffering || !i && !this.primaryPrefetch && (this.startFragRequested || !a.startFragPrefetch) || !(s != null && s[n]))
      return;
    const o = s[n], c = o.details;
    if (!c || this.waitForLive(o) || this.waitForCdnTuneIn(c)) {
      this.state = k.WAITING_TRACK, this.startFragRequested = !1;
      return;
    }
    const l = this.mediaBuffer ? this.mediaBuffer : this.media;
    this.bufferFlushed && l && (this.bufferFlushed = !1, this.afterBufferFlushed(l, fe.AUDIO, W.AUDIO));
    const u = this.getFwdBufferInfo(l, W.AUDIO);
    if (u === null)
      return;
    if (!this.switchingTrack && this._streamEnded(u, c)) {
      t.trigger(m.BUFFER_EOS, {
        type: "audio"
      }), this.state = k.ENDED;
      return;
    }
    const h = u.len, d = t.maxBufferLength, f = c.fragments, g = f[0].start, p = this.getLoadPosition(), y = this.flushing ? p : u.end;
    if (this.switchingTrack && i) {
      const S = p;
      c.PTSKnown && S < g && (u.end > g || u.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), i.currentTime = g + 0.05);
    }
    if (h >= d && !this.switchingTrack && y < f[f.length - 1].start)
      return;
    let E = this.getNextFragment(y, c);
    if (E && this.isLoopLoading(E, y) && (E = this.getNextFragmentLoopLoading(E, c, u, W.MAIN, d)), !E) {
      this.bufferFlushed = !0;
      return;
    }
    let T = ((e = this.mainFragLoading) == null ? void 0 : e.frag) || null;
    if (!this.audioOnly && this.startFragRequested && T && Ae(E) && !E.endList && (!c.live || !this.loadingParts && y < this.hls.liveSyncPosition) && (this.fragmentTracker.getState(T) === Re.OK && (this.mainFragLoading = T = null), T && Ae(T))) {
      if (E.start > T.end) {
        const v = this.fragmentTracker.getFragAtPos(y, W.MAIN);
        v && v.end > T.end && (T = v, this.mainFragLoading = {
          frag: v,
          targetBufferTime: null
        });
      }
      if (E.start > T.end)
        return;
    }
    this.loadFragment(E, o, y);
  }
  onMediaDetaching(e, t) {
    this.bufferFlushed = this.flushing = !1, super.onMediaDetaching(e, t);
  }
  onAudioTracksUpdated(e, {
    audioTracks: t
  }) {
    this.resetTransmuxer(), this.levels = t.map((s) => new Fs(s));
  }
  onAudioTrackSwitching(e, t) {
    const s = !!t.url;
    this.trackId = t.id;
    const {
      fragCurrent: i
    } = this;
    i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)), this.resetLoadingState(), s ? (this.switchingTrack = t, this.flushAudioIfNeeded(t), this.state !== k.STOPPED && (this.setInterval(Ha), this.state = k.IDLE, this.tick())) : (this.resetTransmuxer(), this.switchingTrack = null, this.bufferedTrack = t, this.clearInterval());
  }
  onManifestLoading() {
    super.onManifestLoading(), this.bufferFlushed = this.flushing = this.audioOnly = !1, this.resetItem(), this.trackId = -1;
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details;
    const s = this.cachedTrackLoadedData;
    s && (this.cachedTrackLoadedData = null, this.onAudioTrackLoaded(m.AUDIO_TRACK_LOADED, s));
  }
  onAudioTrackLoaded(e, t) {
    var s;
    const {
      levels: i
    } = this, {
      details: n,
      id: a,
      groupId: o,
      track: c
    } = t;
    if (!i) {
      this.warn(`Audio tracks reset while loading track ${a} "${c.name}" of "${o}"`);
      return;
    }
    const l = this.mainDetails;
    if (!l || n.endCC > l.endCC || l.expired) {
      this.cachedTrackLoadedData = t, this.state !== k.STOPPED && (this.state = k.WAITING_TRACK);
      return;
    }
    this.cachedTrackLoadedData = null, this.log(`Audio track ${a} "${c.name}" of "${o}" loaded [${n.startSN},${n.endSN}]${n.lastPartSn ? `[part-${n.lastPartSn}-${n.lastPartIndex}]` : ""},duration:${n.totalduration}`);
    const u = i[a];
    let h = 0;
    if (n.live || (s = u.details) != null && s.live) {
      if (this.checkLiveUpdate(n), n.deltaUpdateFailed)
        return;
      if (u.details) {
        var d;
        h = this.alignPlaylists(n, u.details, (d = this.levelLastLoaded) == null ? void 0 : d.details);
      }
      n.alignedSliding || (ll(n, l), n.alignedSliding || Ci(n, l), h = n.fragmentStart);
    }
    u.details = n, this.levelLastLoaded = u, this.startFragRequested || this.setStartPosition(l, h), this.hls.trigger(m.AUDIO_TRACK_UPDATED, {
      details: n,
      id: a,
      groupId: t.groupId
    }), this.state === k.WAITING_TRACK && !this.waitForCdnTuneIn(n) && (this.state = k.IDLE), this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const s = e.frag, {
      part: i,
      payload: n
    } = e, {
      config: a,
      trackId: o,
      levels: c
    } = this;
    if (!c) {
      this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const l = c[o];
    if (!l) {
      this.warn("Audio track is undefined on fragment load progress");
      return;
    }
    const u = l.details;
    if (!u) {
      this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(s.start);
      return;
    }
    const h = a.defaultAudioCodec || l.audioCodec || "mp4a.40.2";
    let d = this.transmuxer;
    d || (d = this.transmuxer = new _l(this.hls, W.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
    const f = this.initPTS[s.cc], g = (t = s.initSegment) == null ? void 0 : t.data;
    if (f !== void 0) {
      const y = i ? i.index : -1, E = y !== -1, T = new ir(s.level, s.sn, s.stats.chunkCount, n.byteLength, y, E);
      d.push(n, g, h, "", s, i, u.totalduration, !1, T, f);
    } else {
      this.log(`Unknown video PTS for cc ${s.cc}, waiting for video PTS before demuxing audio frag ${s.sn} of [${u.startSN} ,${u.endSN}],track ${o}`);
      const {
        cache: p
      } = this.waitingData = this.waitingData || {
        frag: s,
        part: i,
        cache: new cl(),
        complete: !1
      };
      p.push(new Uint8Array(n)), this.state !== k.STOPPED && (this.state = k.WAITING_INIT_PTS);
    }
  }
  _handleFragmentLoadComplete(e) {
    if (this.waitingData) {
      this.waitingData.complete = !0;
      return;
    }
    super._handleFragmentLoadComplete(e);
  }
  onBufferReset() {
    this.mediaBuffer = null;
  }
  onBufferCreated(e, t) {
    this.bufferFlushed = this.flushing = !1;
    const s = t.tracks.audio;
    s && (this.mediaBuffer = s.buffer || null);
  }
  onFragLoading(e, t) {
    !this.audioOnly && t.frag.type === W.MAIN && Ae(t.frag) && (this.mainFragLoading = t, this.state === k.IDLE && this.tick());
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t;
    if (s.type !== W.AUDIO) {
      !this.audioOnly && s.type === W.MAIN && !s.elementaryStreams.video && !s.elementaryStreams.audiovideo && (this.audioOnly = !0, this.mainFragLoading = null);
      return;
    }
    if (this.fragContextChanged(s)) {
      this.warn(`Fragment ${s.sn}${i ? " p: " + i.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`);
      return;
    }
    if (Ae(s)) {
      this.fragPrevious = s;
      const n = this.switchingTrack;
      n && (this.bufferedTrack = n, this.switchingTrack = null, this.hls.trigger(m.AUDIO_TRACK_SWITCHED, ce({}, n)));
    }
    this.fragBufferedComplete(s, i), this.media && this.tick();
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = k.ERROR;
      return;
    }
    switch (t.details) {
      case D.FRAG_GAP:
      case D.FRAG_PARSING_ERROR:
      case D.FRAG_DECRYPT_ERROR:
      case D.FRAG_LOAD_ERROR:
      case D.FRAG_LOAD_TIMEOUT:
      case D.KEY_LOAD_ERROR:
      case D.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(W.AUDIO, t);
        break;
      case D.AUDIO_TRACK_LOAD_ERROR:
      case D.AUDIO_TRACK_LOAD_TIMEOUT:
      case D.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === k.WAITING_TRACK && ((s = t.context) == null ? void 0 : s.type) === re.AUDIO_TRACK && (this.state = k.IDLE);
        break;
      case D.BUFFER_ADD_CODEC_ERROR:
      case D.BUFFER_APPEND_ERROR:
        if (t.parent !== "audio")
          return;
        this.reduceLengthAndFlushBuffer(t) || this.resetLoadingState();
        break;
      case D.BUFFER_FULL_ERROR:
        if (t.parent !== "audio")
          return;
        this.reduceLengthAndFlushBuffer(t) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
        break;
      case D.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  onBufferFlushing(e, {
    type: t
  }) {
    t !== fe.VIDEO && (this.flushing = !0);
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== fe.VIDEO) {
      this.flushing = !1, this.bufferFlushed = !0, this.state === k.ENDED && (this.state = k.IDLE);
      const s = this.mediaBuffer || this.media;
      s && (this.afterBufferFlushed(s, t, W.AUDIO), this.tick());
    }
  }
  _handleTransmuxComplete(e) {
    var t;
    const s = "audio", {
      hls: i
    } = this, {
      remuxResult: n,
      chunkMeta: a
    } = e, o = this.getCurrentContext(a);
    if (!o) {
      this.resetWhenMissingContext(a);
      return;
    }
    const {
      frag: c,
      part: l,
      level: u
    } = o, {
      details: h
    } = u, {
      audio: d,
      text: f,
      id3: g,
      initSegment: p
    } = n;
    if (this.fragContextChanged(c) || !h) {
      this.fragmentTracker.removeFragment(c);
      return;
    }
    if (this.state = k.PARSING, this.switchingTrack && d && this.completeAudioSwitch(this.switchingTrack), p != null && p.tracks) {
      const y = c.initSegment || c;
      if (this.unhandledEncryptionError(p, c))
        return;
      this._bufferInitSegment(u, p.tracks, y, a), i.trigger(m.FRAG_PARSING_INIT_SEGMENT, {
        frag: y,
        id: s,
        tracks: p.tracks
      });
    }
    if (d) {
      const {
        startPTS: y,
        endPTS: E,
        startDTS: T,
        endDTS: S
      } = d;
      l && (l.elementaryStreams[fe.AUDIO] = {
        startPTS: y,
        endPTS: E,
        startDTS: T,
        endDTS: S
      }), c.setElementaryStreamInfo(fe.AUDIO, y, E, T, S), this.bufferFragmentData(d, c, l, a);
    }
    if (g != null && (t = g.samples) != null && t.length) {
      const y = de({
        id: s,
        frag: c,
        details: h
      }, g);
      i.trigger(m.FRAG_PARSING_METADATA, y);
    }
    if (f) {
      const y = de({
        id: s,
        frag: c,
        details: h
      }, f);
      i.trigger(m.FRAG_PARSING_USERDATA, y);
    }
  }
  _bufferInitSegment(e, t, s, i) {
    if (this.state !== k.PARSING || (t.video && delete t.video, t.audiovideo && delete t.audiovideo, !t.audio))
      return;
    const n = t.audio;
    n.id = W.AUDIO;
    const a = e.audioCodec;
    this.log(`Init audio buffer, container:${n.container}, codecs[level/parsed]=[${a}/${n.codec}]`), a && a.split(",").length === 1 && (n.levelCodec = a), this.hls.trigger(m.BUFFER_CODECS, t);
    const o = n.initSegment;
    if (o != null && o.byteLength) {
      const c = {
        type: "audio",
        frag: s,
        part: null,
        chunkMeta: i,
        parent: s.type,
        data: o
      };
      this.hls.trigger(m.BUFFER_APPENDING, c);
    }
    this.tickImmediate();
  }
  loadFragment(e, t, s) {
    const i = this.fragmentTracker.getState(e);
    if (this.switchingTrack || i === Re.NOT_LOADED || i === Re.PARTIAL) {
      var n;
      if (!Ae(e))
        this._loadInitSegment(e, t);
      else if ((n = t.details) != null && n.live && !this.initPTS[e.cc]) {
        this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`), this.state = k.WAITING_INIT_PTS;
        const a = this.mainDetails;
        a && a.fragmentStart !== t.details.fragmentStart && Ci(t.details, a);
      } else
        super.loadFragment(e, t, s);
    } else
      this.clearTrackerIfNeeded(e);
  }
  flushAudioIfNeeded(e) {
    if (this.media && this.bufferedTrack) {
      const {
        name: t,
        lang: s,
        assocLang: i,
        characteristics: n,
        audioCodec: a,
        channels: o
      } = this.bufferedTrack;
      Yt({
        name: t,
        lang: s,
        assocLang: i,
        characteristics: n,
        audioCodec: a,
        channels: o
      }, e, Vt) || (Li(e.url, this.hls) ? (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"), this.bufferedTrack = null) : this.bufferedTrack = e);
    }
  }
  completeAudioSwitch(e) {
    const {
      hls: t
    } = this;
    this.flushAudioIfNeeded(e), this.bufferedTrack = e, this.switchingTrack = null, t.trigger(m.AUDIO_TRACK_SWITCHED, ce({}, e));
  }
}
class gr extends nt {
  constructor(e, t) {
    super(t, e.logger), this.hls = void 0, this.canLoad = !1, this.timer = -1, this.hls = e;
  }
  destroy() {
    this.clearTimer(), this.hls = this.log = this.warn = null;
  }
  clearTimer() {
    this.timer !== -1 && (self.clearTimeout(this.timer), this.timer = -1);
  }
  startLoad() {
    this.canLoad = !0, this.loadPlaylist();
  }
  stopLoad() {
    this.canLoad = !1, this.clearTimer();
  }
  switchParams(e, t, s) {
    const i = t == null ? void 0 : t.renditionReports;
    if (i) {
      let n = -1;
      for (let a = 0; a < i.length; a++) {
        const o = i[a];
        let c;
        try {
          c = new self.URL(o.URI, t.url).href;
        } catch (l) {
          this.warn(`Could not construct new URL for Rendition Report: ${l}`), c = o.URI || "";
        }
        if (c === e) {
          n = a;
          break;
        } else c === e.substring(0, c.length) && (n = a);
      }
      if (n !== -1) {
        const a = i[n], o = parseInt(a["LAST-MSN"]) || t.lastPartSn;
        let c = parseInt(a["LAST-PART"]) || t.lastPartIndex;
        if (this.hls.config.lowLatencyMode) {
          const u = Math.min(t.age - t.partTarget, t.targetduration);
          c >= 0 && u > t.partTarget && (c += 1);
        }
        const l = s && ra(s);
        return new aa(o, c >= 0 ? c : void 0, l);
      }
    }
  }
  loadPlaylist(e) {
    this.clearTimer();
  }
  loadingPlaylist(e, t) {
    this.clearTimer();
  }
  shouldLoadPlaylist(e) {
    return this.canLoad && !!e && !!e.url && (!e.details || e.details.live);
  }
  getUrlWithDirectives(e, t) {
    if (t)
      try {
        return t.addDirectives(e);
      } catch (s) {
        this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`);
      }
    return e;
  }
  playlistLoaded(e, t, s) {
    const {
      details: i,
      stats: n
    } = t, a = self.performance.now(), o = n.loading.first ? Math.max(0, a - n.loading.first) : 0;
    i.advancedDateTime = Date.now() - o;
    const c = this.hls.config.timelineOffset;
    if (c !== i.appliedTimelineOffset) {
      const u = Math.max(c || 0, 0);
      i.appliedTimelineOffset = u, i.fragments.forEach((h) => {
        h.setStart(h.playlistOffset + u);
      });
    }
    if (i.live || s != null && s.live) {
      const u = "levelInfo" in t ? t.levelInfo : t.track;
      if (i.reloaded(s), s && i.fragments.length > 0) {
        yd(s, i, this);
        const T = i.playlistParsingError;
        if (T) {
          this.warn(T);
          const S = this.hls;
          if (!S.config.ignorePlaylistParsingErrors) {
            var l;
            const {
              networkDetails: v
            } = t;
            S.trigger(m.ERROR, {
              type: X.NETWORK_ERROR,
              details: D.LEVEL_PARSING_ERROR,
              fatal: !1,
              url: i.url,
              error: T,
              reason: T.message,
              level: t.level || void 0,
              parent: (l = i.fragments[0]) == null ? void 0 : l.type,
              networkDetails: v,
              stats: n
            });
            return;
          }
          i.playlistParsingError = null;
        }
      }
      i.requestScheduled === -1 && (i.requestScheduled = n.loading.start);
      const h = this.hls.mainForwardBufferInfo, d = h ? h.end - h.len : 0, f = (i.edge - d) * 1e3, g = il(i, f);
      if (i.requestScheduled + g < a ? i.requestScheduled = a : i.requestScheduled += g, this.log(`live playlist ${e} ${i.advanced ? "REFRESHED " + i.lastPartSn + "-" + i.lastPartIndex : i.updated ? "UPDATED" : "MISSED"}`), !this.canLoad || !i.live)
        return;
      let p, y, E;
      if (i.canBlockReload && i.endSN && i.advanced) {
        const T = this.hls.config.lowLatencyMode, S = i.lastPartSn, v = i.endSN, x = i.lastPartIndex, C = x !== -1, A = S === v;
        C ? A ? (y = v + 1, E = T ? 0 : x) : (y = S, E = T ? x + 1 : i.maxPartIndex) : y = v + 1;
        const R = i.age, b = R + i.ageHeader;
        let L = Math.min(b - i.partTarget, i.targetduration * 1.5);
        if (L > 0) {
          if (b > i.targetduration * 3)
            this.log(`Playlist last advanced ${R.toFixed(2)}s ago. Omitting segment and part directives.`), y = void 0, E = void 0;
          else if (s != null && s.tuneInGoal && b - i.partTarget > s.tuneInGoal)
            this.warn(`CDN Tune-in goal increased from: ${s.tuneInGoal} to: ${L} with playlist age: ${i.age}`), L = 0;
          else {
            const P = Math.floor(L / i.targetduration);
            if (y += P, E !== void 0) {
              const M = Math.round(L % i.targetduration / i.partTarget);
              E += M;
            }
            this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${R.toFixed(2)}s goal: ${L} skip sn ${P} to part ${E}`);
          }
          i.tuneInGoal = L;
        }
        if (p = this.getDeliveryDirectives(i, t.deliveryDirectives, y, E), T || !A) {
          i.requestScheduled = a, this.loadingPlaylist(u, p);
          return;
        }
      } else (i.canBlockReload || i.canSkipUntil) && (p = this.getDeliveryDirectives(i, t.deliveryDirectives, y, E));
      p && y !== void 0 && i.canBlockReload && (i.requestScheduled = n.loading.first + Math.max(g - o * 2, g / 2)), this.scheduleLoading(u, p, i);
    } else
      this.clearTimer();
  }
  scheduleLoading(e, t, s) {
    const i = s || e.details;
    if (!i) {
      this.loadingPlaylist(e, t);
      return;
    }
    const n = self.performance.now(), a = i.requestScheduled;
    if (n >= a) {
      this.loadingPlaylist(e, t);
      return;
    }
    const o = a - n;
    this.log(`reload live playlist ${e.name || e.bitrate + "bps"} in ${Math.round(o)} ms`), this.clearTimer(), this.timer = self.setTimeout(() => this.loadingPlaylist(e, t), o);
  }
  getDeliveryDirectives(e, t, s, i) {
    let n = ra(e);
    return t != null && t.skip && e.deltaUpdateFailed && (s = t.msn, i = t.part, n = gi.No), new aa(s, i, n);
  }
  checkRetry(e) {
    const t = e.details, s = bi(e), i = e.errorAction, {
      action: n,
      retryCount: a = 0,
      retryConfig: o
    } = i || {}, c = !!i && !!o && (n === Ce.RetryRequest || !i.resolved && n === Ce.SendAlternateToPenaltyBox);
    if (c) {
      var l;
      if (a >= o.maxNumRetry)
        return !1;
      if (s && (l = e.context) != null && l.deliveryDirectives)
        this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${t}" without delivery-directives`), this.loadPlaylist();
      else {
        const u = tr(o, a);
        this.clearTimer(), this.timer = self.setTimeout(() => this.loadPlaylist(), u), this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${t}" in ${u}ms`);
      }
      e.levelRetry = !0, i.resolved = !0;
    }
    return c;
  }
}
function Dl(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (!Us(r[t].attrs, e[t].attrs))
      return !1;
  return !0;
}
function Us(r, e, t) {
  const s = r["STABLE-RENDITION-ID"];
  return s && !t ? s === e["STABLE-RENDITION-ID"] : !(t || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some((i) => r[i] !== e[i]);
}
function Gn(r, e) {
  return e.label.toLowerCase() === r.name.toLowerCase() && (!e.language || e.language.toLowerCase() === (r.lang || "").toLowerCase());
}
class Rf extends gr {
  constructor(e) {
    super(e, "audio-track-controller"), this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.LEVEL_LOADING, this.onLevelLoading, this), e.off(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(m.ERROR, this.onError, this);
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy();
  }
  onManifestLoading() {
    this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = !0;
  }
  onManifestParsed(e, t) {
    this.tracks = t.audioTracks || [];
  }
  onAudioTrackLoaded(e, t) {
    const {
      id: s,
      groupId: i,
      details: n
    } = t, a = this.tracksInGroup[s];
    if (!a || a.groupId !== i) {
      this.warn(`Audio track with id:${s} and group:${i} not found in active group ${a == null ? void 0 : a.groupId}`);
      return;
    }
    const o = a.details;
    a.details = t.details, this.log(`Audio track ${s} "${a.name}" lang:${a.lang} group:${i} loaded [${n.startSN}-${n.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const s = t.audioGroups || null, i = this.groupIds;
    let n = this.currentTrack;
    if (!s || (i == null ? void 0 : i.length) !== (s == null ? void 0 : s.length) || s != null && s.some((o) => (i == null ? void 0 : i.indexOf(o)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const o = this.tracks.filter((d) => !s || s.indexOf(d.groupId) !== -1);
      if (o.length)
        this.selectDefaultTrack && !o.some((d) => d.default) && (this.selectDefaultTrack = !1), o.forEach((d, f) => {
          d.id = f;
        });
      else if (!n && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = o;
      const c = this.hls.config.audioPreference;
      if (!n && c) {
        const d = pt(c, o, Vt);
        if (d > -1)
          n = o[d];
        else {
          const f = pt(c, this.tracks);
          n = this.tracks[f];
        }
      }
      let l = this.findTrackId(n);
      l === -1 && n && (l = this.findTrackId(null));
      const u = {
        audioTracks: o
      };
      this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${s == null ? void 0 : s.join(",")}`), this.hls.trigger(m.AUDIO_TRACKS_UPDATED, u);
      const h = this.trackId;
      if (l !== -1 && h === -1)
        this.setAudioTrack(l);
      else if (o.length && h === -1) {
        var a;
        const d = new Error(`No audio track selected for current audio group-ID(s): ${(a = this.groupIds) == null ? void 0 : a.join(",")} track count: ${o.length}`);
        this.warn(d.message), this.hls.trigger(m.ERROR, {
          type: X.MEDIA_ERROR,
          details: D.AUDIO_TRACK_LOAD_ERROR,
          fatal: !0,
          error: d
        });
      }
    }
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === re.AUDIO_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && this.checkRetry(t);
  }
  get allAudioTracks() {
    return this.tracks;
  }
  get audioTracks() {
    return this.tracksInGroup;
  }
  get audioTrack() {
    return this.trackId;
  }
  set audioTrack(e) {
    this.selectDefaultTrack = !1, this.setAudioTrack(e);
  }
  setAudioOption(e) {
    const t = this.hls;
    if (t.config.audioPreference = e, e) {
      const s = this.allAudioTracks;
      if (this.selectDefaultTrack = !1, s.length) {
        const i = this.currentTrack;
        if (i && Yt(e, i, Vt))
          return i;
        const n = pt(e, this.tracksInGroup, Vt);
        if (n > -1) {
          const a = this.tracksInGroup[n];
          return this.setAudioTrack(n), a;
        } else if (i) {
          let a = t.loadLevel;
          a === -1 && (a = t.firstAutoLevel);
          const o = $h(e, t.levels, s, a, Vt);
          if (o === -1)
            return null;
          t.nextLoadLevel = o;
        }
        if (e.channels || e.audioCodec) {
          const a = pt(e, s);
          if (a > -1)
            return s[a];
        }
      }
    }
    return null;
  }
  setAudioTrack(e) {
    const t = this.tracksInGroup;
    if (e < 0 || e >= t.length) {
      this.warn(`Invalid audio track id: ${e}`);
      return;
    }
    this.selectDefaultTrack = !1;
    const s = this.currentTrack, i = t[e], n = i.details && !i.details.live;
    if (e === this.trackId && i === s && n || (this.log(`Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`), this.trackId = e, this.currentTrack = i, this.hls.trigger(m.AUDIO_TRACK_SWITCHING, ce({}, i)), n))
      return;
    const a = this.switchParams(i.url, s == null ? void 0 : s.details, i.details);
    this.loadPlaylist(a);
  }
  findTrackId(e) {
    const t = this.tracksInGroup;
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      if (!(this.selectDefaultTrack && !i.default) && (!e || Yt(e, i, Vt)))
        return s;
    }
    if (e) {
      const {
        name: s,
        lang: i,
        assocLang: n,
        characteristics: a,
        audioCodec: o,
        channels: c
      } = e;
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (Yt({
          name: s,
          lang: i,
          assocLang: n,
          characteristics: a,
          audioCodec: o,
          channels: c
        }, u, Vt))
          return l;
      }
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (Us(e.attrs, u.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return l;
      }
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (Us(e.attrs, u.attrs, ["LANGUAGE"]))
          return l;
      }
    }
    return -1;
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.currentTrack;
    this.shouldLoadPlaylist(t) && Li(t.url, this.hls) && this.scheduleLoading(t, e);
  }
  loadingPlaylist(e, t) {
    super.loadingPlaylist(e, t);
    const s = e.id, i = e.groupId, n = this.getUrlWithDirectives(e.url, t), a = e.details, o = a == null ? void 0 : a.age;
    this.log(`Loading audio-track ${s} "${e.name}" lang:${e.lang} group:${i}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${o && a.live ? " age " + o.toFixed(1) + (a.type && " " + a.type || "") : ""} ${n}`), this.hls.trigger(m.AUDIO_TRACK_LOADING, {
      url: n,
      id: s,
      groupId: i,
      deliveryDirectives: t || null,
      track: e
    });
  }
}
class _f {
  constructor(e) {
    this.tracks = void 0, this.queues = {
      video: [],
      audio: [],
      audiovideo: []
    }, this.tracks = e;
  }
  destroy() {
    this.tracks = this.queues = null;
  }
  append(e, t, s) {
    if (this.queues === null || this.tracks === null)
      return;
    const i = this.queues[t];
    i.push(e), i.length === 1 && !s && this.executeNext(t);
  }
  appendBlocker(e) {
    return new Promise((t) => {
      const s = {
        label: "async-blocker",
        execute: t,
        onStart: () => {
        },
        onComplete: () => {
        },
        onError: () => {
        }
      };
      this.append(s, e);
    });
  }
  prependBlocker(e) {
    return new Promise((t) => {
      if (this.queues) {
        const s = {
          label: "async-blocker-prepend",
          execute: t,
          onStart: () => {
          },
          onComplete: () => {
          },
          onError: () => {
          }
        };
        this.queues[e].unshift(s);
      }
    });
  }
  removeBlockers() {
    this.queues !== null && [this.queues.video, this.queues.audio, this.queues.audiovideo].forEach((e) => {
      var t;
      const s = (t = e[0]) == null ? void 0 : t.label;
      (s === "async-blocker" || s === "async-blocker-prepend") && (e[0].execute(), e.splice(0, 1));
    });
  }
  unblockAudio(e) {
    if (this.queues === null)
      return;
    this.queues.audio[0] === e && this.shiftAndExecuteNext("audio");
  }
  executeNext(e) {
    if (this.queues === null || this.tracks === null)
      return;
    const t = this.queues[e];
    if (t.length) {
      const i = t[0];
      try {
        i.execute();
      } catch (n) {
        var s;
        if (i.onError(n), this.queues === null || this.tracks === null)
          return;
        const a = (s = this.tracks[e]) == null ? void 0 : s.buffer;
        a != null && a.updating || this.shiftAndExecuteNext(e);
      }
    }
  }
  shiftAndExecuteNext(e) {
    this.queues !== null && (this.queues[e].shift(), this.executeNext(e));
  }
  current(e) {
    var t;
    return ((t = this.queues) == null ? void 0 : t[e][0]) || null;
  }
  toString() {
    const {
      queues: e,
      tracks: t
    } = this;
    return e === null || t === null ? "<destroyed>" : `
${this.list("video")}
${this.list("audio")}
${this.list("audiovideo")}}`;
  }
  list(e) {
    var t, s;
    return (t = this.queues) != null && t[e] || (s = this.tracks) != null && s[e] ? `${e}: (${this.listSbInfo(e)}) ${this.listOps(e)}` : "";
  }
  listSbInfo(e) {
    var t;
    const s = (t = this.tracks) == null ? void 0 : t[e], i = s == null ? void 0 : s.buffer;
    return i ? `SourceBuffer${i.updating ? " updating" : ""}${s.ended ? " ended" : ""}${s.ending ? " ending" : ""}` : "none";
  }
  listOps(e) {
    var t;
    return ((t = this.queues) == null ? void 0 : t[e].map((s) => s.label).join(", ")) || "";
  }
}
const Wa = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/, Cl = "HlsJsTrackRemovedError";
class Df extends Error {
  constructor(e) {
    super(e), this.name = Cl;
  }
}
class Cf extends nt {
  constructor(e, t) {
    super("buffer-controller", e.logger), this.hls = void 0, this.fragmentTracker = void 0, this.details = null, this._objectUrl = null, this.operationQueue = null, this.bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0, this.appendSource = void 0, this.transferData = void 0, this.overrides = void 0, this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    }, this.tracks = {}, this.sourceBuffers = [[null, null], [null, null]], this._onEndStreaming = (s) => {
      var i;
      this.hls && ((i = this.mediaSource) == null ? void 0 : i.readyState) === "open" && this.hls.pauseBuffering();
    }, this._onStartStreaming = (s) => {
      this.hls && this.hls.resumeBuffering();
    }, this._onMediaSourceOpen = (s) => {
      const {
        media: i,
        mediaSource: n
      } = this;
      s && this.log("Media source opened"), !(!i || !n) && (n.removeEventListener("sourceopen", this._onMediaSourceOpen), i.removeEventListener("emptied", this._onMediaEmptied), this.updateDuration(), this.hls.trigger(m.MEDIA_ATTACHED, {
        media: i,
        mediaSource: n
      }), this.mediaSource !== null && this.checkPendingTracks());
    }, this._onMediaSourceClose = () => {
      this.log("Media source closed");
    }, this._onMediaSourceEnded = () => {
      this.log("Media source ended");
    }, this._onMediaEmptied = () => {
      const {
        mediaSrc: s,
        _objectUrl: i
      } = this;
      s !== i && this.error(`Media element src was set while attaching MediaSource (${i} > ${s})`);
    }, this.hls = e, this.fragmentTracker = t, this.appendSource = Qu($t(e.config.preferManagedMediaSource)), this.initTracks(), this.registerListeners();
  }
  hasSourceTypes() {
    return Object.keys(this.tracks).length > 0;
  }
  destroy() {
    this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.transferData = this.overrides = void 0, this.operationQueue && (this.operationQueue.destroy(), this.operationQueue = null), this.hls = this.fragmentTracker = null, this._onMediaSourceOpen = this._onMediaSourceClose = null, this._onMediaSourceEnded = null, this._onStartStreaming = this._onEndStreaming = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.BUFFER_RESET, this.onBufferReset, this), e.on(m.BUFFER_APPENDING, this.onBufferAppending, this), e.on(m.BUFFER_CODECS, this.onBufferCodecs, this), e.on(m.BUFFER_EOS, this.onBufferEos, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(m.FRAG_PARSED, this.onFragParsed, this), e.on(m.FRAG_CHANGED, this.onFragChanged, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.BUFFER_RESET, this.onBufferReset, this), e.off(m.BUFFER_APPENDING, this.onBufferAppending, this), e.off(m.BUFFER_CODECS, this.onBufferCodecs, this), e.off(m.BUFFER_EOS, this.onBufferEos, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(m.FRAG_PARSED, this.onFragParsed, this), e.off(m.FRAG_CHANGED, this.onFragChanged, this), e.off(m.ERROR, this.onError, this);
  }
  transferMedia() {
    const {
      media: e,
      mediaSource: t
    } = this;
    if (!e)
      return null;
    const s = {};
    if (this.operationQueue) {
      const n = this.isUpdating();
      n || this.operationQueue.removeBlockers();
      const a = this.isQueued();
      (n || a) && this.warn(`Transfering MediaSource with${a ? " operations in queue" : ""}${n ? " updating SourceBuffer(s)" : ""} ${this.operationQueue}`), this.operationQueue.destroy();
    }
    const i = this.transferData;
    return !this.sourceBufferCount && i && i.mediaSource === t ? de(s, i.tracks) : this.sourceBuffers.forEach((n) => {
      const [a] = n;
      a && (s[a] = de({}, this.tracks[a]), this.removeBuffer(a)), n[0] = n[1] = null;
    }), {
      media: e,
      mediaSource: t,
      tracks: s
    };
  }
  initTracks() {
    const e = {};
    this.sourceBuffers = [[null, null], [null, null]], this.tracks = e, this.resetQueue(), this.resetAppendErrors(), this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0;
  }
  onManifestLoading() {
    this.bufferCodecEventsTotal = 0, this.details = null;
  }
  onManifestParsed(e, t) {
    var s;
    let i = 2;
    (t.audio && !t.video || !t.altAudio) && (i = 1), this.bufferCodecEventsTotal = i, this.log(`${i} bufferCodec event(s) expected.`), (s = this.transferData) != null && s.mediaSource && this.sourceBufferCount && i && this.bufferCreated();
  }
  onMediaAttaching(e, t) {
    const s = this.media = t.media;
    this.transferData = this.overrides = void 0;
    const i = $t(this.appendSource);
    if (i) {
      const n = !!t.mediaSource;
      (n || t.overrides) && (this.transferData = t, this.overrides = t.overrides);
      const a = this.mediaSource = t.mediaSource || new i();
      if (this.assignMediaSource(a), n)
        this._objectUrl = s.src, this.attachTransferred();
      else {
        const o = this._objectUrl = self.URL.createObjectURL(a);
        if (this.appendSource)
          try {
            s.removeAttribute("src");
            const c = self.ManagedMediaSource;
            s.disableRemotePlayback = s.disableRemotePlayback || c && a instanceof c, Ya(s), Pf(s, o), s.load();
          } catch {
            s.src = o;
          }
        else
          s.src = o;
      }
      s.addEventListener("emptied", this._onMediaEmptied);
    }
  }
  assignMediaSource(e) {
    var t, s;
    this.log(`${((t = this.transferData) == null ? void 0 : t.mediaSource) === e ? "transferred" : "created"} media source: ${(s = e.constructor) == null ? void 0 : s.name}`), e.addEventListener("sourceopen", this._onMediaSourceOpen), e.addEventListener("sourceended", this._onMediaSourceEnded), e.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (e.addEventListener("startstreaming", this._onStartStreaming), e.addEventListener("endstreaming", this._onEndStreaming));
  }
  attachTransferred() {
    const e = this.media, t = this.transferData;
    if (!t || !e)
      return;
    const s = this.tracks, i = t.tracks, n = i ? Object.keys(i) : null, a = n ? n.length : 0, o = () => {
      Promise.resolve().then(() => {
        this.media && this.mediaSourceOpenOrEnded && this._onMediaSourceOpen();
      });
    };
    if (i && n && a) {
      if (!this.tracksReady) {
        this.hls.config.startFragPrefetch = !0, this.log("attachTransferred: waiting for SourceBuffer track info");
        return;
      }
      if (this.log(`attachTransferred: (bufferCodecEventsTotal ${this.bufferCodecEventsTotal})
required tracks: ${ge(s, (c, l) => c === "initSegment" ? void 0 : l)};
transfer tracks: ${ge(i, (c, l) => c === "initSegment" ? void 0 : l)}}`), !bo(i, s)) {
        t.mediaSource = null, t.tracks = void 0;
        const c = e.currentTime, l = this.details, u = Math.max(c, (l == null ? void 0 : l.fragments[0].start) || 0);
        if (u - c > 1) {
          this.log(`attachTransferred: waiting for playback to reach new tracks start time ${c} -> ${u}`);
          return;
        }
        this.warn(`attachTransferred: resetting MediaSource for incompatible tracks ("${Object.keys(i)}"->"${Object.keys(s)}") start time: ${u} currentTime: ${c}`), this.onMediaDetaching(m.MEDIA_DETACHING, {}), this.onMediaAttaching(m.MEDIA_ATTACHING, t), e.currentTime = u;
        return;
      }
      this.transferData = void 0, n.forEach((c) => {
        const l = c, u = i[l];
        if (u) {
          const h = u.buffer;
          if (h) {
            const d = this.fragmentTracker, f = u.id;
            if (d.hasFragments(f) || d.hasParts(f)) {
              const y = te.getBuffered(h);
              d.detectEvictedFragments(l, y, f, null, !0);
            }
            const g = gn(l), p = [l, h];
            this.sourceBuffers[g] = p, h.updating && this.operationQueue && this.operationQueue.prependBlocker(l), this.trackSourceBuffer(l, u);
          }
        }
      }), o(), this.bufferCreated();
    } else
      this.log("attachTransferred: MediaSource w/o SourceBuffers"), o();
  }
  get mediaSourceOpenOrEnded() {
    var e;
    const t = (e = this.mediaSource) == null ? void 0 : e.readyState;
    return t === "open" || t === "ended";
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia;
    this.transferData = this.overrides = void 0;
    const {
      media: i,
      mediaSource: n,
      _objectUrl: a
    } = this;
    if (n) {
      if (this.log(`media source ${s ? "transferring" : "detaching"}`), s)
        this.sourceBuffers.forEach(([o]) => {
          o && this.removeBuffer(o);
        }), this.resetQueue();
      else {
        if (this.mediaSourceOpenOrEnded) {
          const o = n.readyState === "open";
          try {
            const c = n.sourceBuffers;
            for (let l = c.length; l--; )
              o && c[l].abort(), n.removeSourceBuffer(c[l]);
            o && n.endOfStream();
          } catch (c) {
            this.warn(`onMediaDetaching: ${c.message} while calling endOfStream`);
          }
        }
        this.sourceBufferCount && this.onBufferReset();
      }
      n.removeEventListener("sourceopen", this._onMediaSourceOpen), n.removeEventListener("sourceended", this._onMediaSourceEnded), n.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (n.removeEventListener("startstreaming", this._onStartStreaming), n.removeEventListener("endstreaming", this._onEndStreaming)), this.mediaSource = null, this._objectUrl = null;
    }
    i && (i.removeEventListener("emptied", this._onMediaEmptied), s || (a && self.URL.revokeObjectURL(a), this.mediaSrc === a ? (i.removeAttribute("src"), this.appendSource && Ya(i), i.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.media = null), this.hls.trigger(m.MEDIA_DETACHED, t);
  }
  onBufferReset() {
    this.sourceBuffers.forEach(([e]) => {
      e && this.resetBuffer(e);
    }), this.initTracks();
  }
  resetBuffer(e) {
    var t;
    const s = (t = this.tracks[e]) == null ? void 0 : t.buffer;
    if (this.removeBuffer(e), s)
      try {
        var i;
        (i = this.mediaSource) != null && i.sourceBuffers.length && this.mediaSource.removeSourceBuffer(s);
      } catch (n) {
        this.warn(`onBufferReset ${e}`, n);
      }
    delete this.tracks[e];
  }
  removeBuffer(e) {
    this.removeBufferListeners(e), this.sourceBuffers[gn(e)] = [null, null];
    const t = this.tracks[e];
    t && (t.buffer = void 0);
  }
  resetQueue() {
    this.operationQueue && this.operationQueue.destroy(), this.operationQueue = new _f(this.tracks);
  }
  onBufferCodecs(e, t) {
    var s;
    const i = this.tracks, n = Object.keys(t);
    this.log(`BUFFER_CODECS: "${n}" (current SB count ${this.sourceBufferCount})`);
    const a = "audiovideo" in t && (i.audio || i.video) || i.audiovideo && ("audio" in t || "video" in t), o = !a && this.sourceBufferCount && this.media && n.some((c) => !i[c]);
    if (a || o) {
      this.warn(`Unsupported transition between "${Object.keys(i)}" and "${n}" SourceBuffers`);
      return;
    }
    n.forEach((c) => {
      var l, u;
      const h = t[c], {
        id: d,
        codec: f,
        levelCodec: g,
        container: p,
        metadata: y,
        supplemental: E
      } = h;
      let T = i[c];
      const S = (l = this.transferData) == null || (l = l.tracks) == null ? void 0 : l[c], v = S != null && S.buffer ? S : T, x = (v == null ? void 0 : v.pendingCodec) || (v == null ? void 0 : v.codec), C = v == null ? void 0 : v.levelCodec;
      T || (T = i[c] = {
        buffer: void 0,
        listeners: [],
        codec: f,
        supplemental: E,
        container: p,
        levelCodec: g,
        metadata: y,
        id: d
      });
      const A = fi(x, C), R = A == null ? void 0 : A.replace(Wa, "$1");
      let b = fi(f, g);
      const L = (u = b) == null ? void 0 : u.replace(Wa, "$1");
      b && A && R !== L && (c.slice(0, 5) === "audio" && (b = Ai(b, this.appendSource)), this.log(`switching codec ${x} to ${b}`), b !== (T.pendingCodec || T.codec) && (T.pendingCodec = b), T.container = p, this.appendChangeType(c, p, b));
    }), (this.tracksReady || this.sourceBufferCount) && (t.tracks = this.sourceBufferTracks), !this.sourceBufferCount && (this.bufferCodecEventsTotal > 1 && !this.tracks.video && !t.video && ((s = t.audio) == null ? void 0 : s.id) === "main" && (this.log("Main audio-only"), this.bufferCodecEventsTotal = 1), this.mediaSourceOpenOrEnded && this.checkPendingTracks());
  }
  get sourceBufferTracks() {
    return Object.keys(this.tracks).reduce((e, t) => {
      const s = this.tracks[t];
      return e[t] = {
        id: s.id,
        container: s.container,
        codec: s.codec,
        levelCodec: s.levelCodec
      }, e;
    }, {});
  }
  appendChangeType(e, t, s) {
    const i = `${t};codecs=${s}`, n = {
      label: `change-type=${i}`,
      execute: () => {
        const a = this.tracks[e];
        if (a) {
          const o = a.buffer;
          o != null && o.changeType && (this.log(`changing ${e} sourceBuffer type to ${i}`), o.changeType(i), a.codec = s, a.container = t);
        }
        this.shiftAndExecuteNext(e);
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (a) => {
        this.warn(`Failed to change ${e} SourceBuffer type`, a);
      }
    };
    this.append(n, e, this.isPending(this.tracks[e]));
  }
  blockAudio(e) {
    var t;
    const s = e.start, i = s + e.duration * 0.05;
    if (((t = this.fragmentTracker.getAppendedFrag(s, W.MAIN)) == null ? void 0 : t.gap) === !0)
      return;
    const a = {
      label: "block-audio",
      execute: () => {
        var o;
        const c = this.tracks.video;
        (this.lastVideoAppendEnd > i || c != null && c.buffer && te.isBuffered(c.buffer, i) || ((o = this.fragmentTracker.getAppendedFrag(i, W.MAIN)) == null ? void 0 : o.gap) === !0) && (this.blockedAudioAppend = null, this.shiftAndExecuteNext("audio"));
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (o) => {
        this.warn("Error executing block-audio operation", o);
      }
    };
    this.blockedAudioAppend = {
      op: a,
      frag: e
    }, this.append(a, "audio", !0);
  }
  unblockAudio() {
    const {
      blockedAudioAppend: e,
      operationQueue: t
    } = this;
    e && t && (this.blockedAudioAppend = null, t.unblockAudio(e.op));
  }
  onBufferAppending(e, t) {
    const {
      tracks: s
    } = this, {
      data: i,
      type: n,
      parent: a,
      frag: o,
      part: c,
      chunkMeta: l,
      offset: u
    } = t, h = l.buffering[n], {
      sn: d,
      cc: f
    } = o, g = self.performance.now();
    h.start = g;
    const p = o.stats.buffering, y = c ? c.stats.buffering : null;
    p.start === 0 && (p.start = g), y && y.start === 0 && (y.start = g);
    const E = s.audio;
    let T = !1;
    n === "audio" && (E == null ? void 0 : E.container) === "audio/mpeg" && (T = !this.lastMpegAudioChunk || l.id === 1 || this.lastMpegAudioChunk.sn !== l.sn, this.lastMpegAudioChunk = l);
    const S = s.video, v = S == null ? void 0 : S.buffer;
    if (v && d !== "initSegment") {
      const A = c || o, R = this.blockedAudioAppend;
      if (n === "audio" && a !== "main" && !this.blockedAudioAppend && !(S.ending || S.ended)) {
        const L = A.start + A.duration * 0.05, P = v.buffered, M = this.currentOp("video");
        !P.length && !M ? this.blockAudio(A) : !M && !te.isBuffered(v, L) && this.lastVideoAppendEnd < L && this.blockAudio(A);
      } else if (n === "video") {
        const b = A.end;
        if (R) {
          const L = R.frag.start;
          (b > L || b < this.lastVideoAppendEnd || te.isBuffered(v, L)) && this.unblockAudio();
        }
        this.lastVideoAppendEnd = b;
      }
    }
    const x = (c || o).start, C = {
      label: `append-${n}`,
      execute: () => {
        var A;
        h.executeStart = self.performance.now();
        const R = (A = this.tracks[n]) == null ? void 0 : A.buffer;
        R && (T ? this.updateTimestampOffset(R, x, 0.1, n, d, f) : u !== void 0 && G(u) && this.updateTimestampOffset(R, u, 1e-6, n, d, f)), this.appendExecutor(i, n);
      },
      onStart: () => {
      },
      onComplete: () => {
        const A = self.performance.now();
        h.executeEnd = h.end = A, p.first === 0 && (p.first = A), y && y.first === 0 && (y.first = A);
        const R = {};
        this.sourceBuffers.forEach(([b, L]) => {
          b && (R[b] = te.getBuffered(L));
        }), this.appendErrors[n] = 0, n === "audio" || n === "video" ? this.appendErrors.audiovideo = 0 : (this.appendErrors.audio = 0, this.appendErrors.video = 0), this.hls.trigger(m.BUFFER_APPENDED, {
          type: n,
          frag: o,
          part: c,
          chunkMeta: l,
          parent: o.type,
          timeRanges: R
        });
      },
      onError: (A) => {
        var R;
        const b = {
          type: X.MEDIA_ERROR,
          parent: o.type,
          details: D.BUFFER_APPEND_ERROR,
          sourceBufferName: n,
          frag: o,
          part: c,
          chunkMeta: l,
          error: A,
          err: A,
          fatal: !1
        }, L = (R = this.media) == null ? void 0 : R.error;
        if (A.code === DOMException.QUOTA_EXCEEDED_ERR || A.name == "QuotaExceededError" || "quota" in A)
          b.details = D.BUFFER_FULL_ERROR;
        else if (A.code === DOMException.INVALID_STATE_ERR && this.mediaSourceOpenOrEnded && !L)
          b.errorAction = as(!0);
        else if (A.name === Cl && this.sourceBufferCount === 0)
          b.errorAction = as(!0);
        else {
          const P = ++this.appendErrors[n];
          this.warn(`Failed ${P}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${n}" sourceBuffer (${L || "no media error"})`), (P >= this.hls.config.appendErrorMaxRetry || L) && (b.fatal = !0);
        }
        this.hls.trigger(m.ERROR, b);
      }
    };
    this.log(`queuing "${n}" append sn: ${d}${c ? " p: " + c.index : ""} of ${o.type === W.MAIN ? "level" : "track"} ${o.level} cc: ${f}`), this.append(C, n, this.isPending(this.tracks[n]));
  }
  getFlushOp(e, t, s) {
    return this.log(`queuing "${e}" remove ${t}-${s}`), {
      label: "remove",
      execute: () => {
        this.removeExecutor(e, t, s);
      },
      onStart: () => {
      },
      onComplete: () => {
        this.hls.trigger(m.BUFFER_FLUSHED, {
          type: e
        });
      },
      onError: (i) => {
        this.warn(`Failed to remove ${t}-${s} from "${e}" SourceBuffer`, i);
      }
    };
  }
  onBufferFlushing(e, t) {
    const {
      type: s,
      startOffset: i,
      endOffset: n
    } = t;
    s ? this.append(this.getFlushOp(s, i, n), s) : this.sourceBuffers.forEach(([a]) => {
      a && this.append(this.getFlushOp(a, i, n), a);
    });
  }
  onFragParsed(e, t) {
    const {
      frag: s,
      part: i
    } = t, n = [], a = i ? i.elementaryStreams : s.elementaryStreams;
    a[fe.AUDIOVIDEO] ? n.push("audiovideo") : (a[fe.AUDIO] && n.push("audio"), a[fe.VIDEO] && n.push("video"));
    const o = () => {
      const c = self.performance.now();
      s.stats.buffering.end = c, i && (i.stats.buffering.end = c);
      const l = i ? i.stats : s.stats;
      this.hls.trigger(m.FRAG_BUFFERED, {
        frag: s,
        part: i,
        stats: l,
        id: s.type
      });
    };
    n.length === 0 && this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${s.type} level: ${s.level} sn: ${s.sn}`), this.blockBuffers(o, n).catch((c) => {
      this.warn(`Fragment buffered callback ${c}`), this.stepOperationQueue(this.sourceBufferTypes);
    });
  }
  onFragChanged(e, t) {
    this.trimBuffers();
  }
  get bufferedToEnd() {
    return this.sourceBufferCount > 0 && !this.sourceBuffers.some(([e]) => {
      if (e) {
        const t = this.tracks[e];
        if (t)
          return !t.ended || t.ending;
      }
      return !1;
    });
  }
  // on BUFFER_EOS mark matching sourcebuffer(s) as "ending" and "ended" and queue endOfStream after remaining operations(s)
  // an undefined data.type will mark all buffers as EOS.
  onBufferEos(e, t) {
    var s;
    this.sourceBuffers.forEach(([a]) => {
      if (a) {
        const o = this.tracks[a];
        (!t.type || t.type === a) && (o.ending = !0, o.ended || (o.ended = !0, this.log(`${a} buffer reached EOS`)));
      }
    });
    const i = ((s = this.overrides) == null ? void 0 : s.endOfStream) !== !1;
    this.sourceBufferCount > 0 && !this.sourceBuffers.some(([a]) => {
      var o;
      return a && !((o = this.tracks[a]) != null && o.ended);
    }) ? i ? (this.log("Queueing EOS"), this.blockUntilOpen(() => {
      this.tracksEnded();
      const {
        mediaSource: a
      } = this;
      if (!a || a.readyState !== "open") {
        a && this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${a.readyState}`);
        return;
      }
      this.log("Calling mediaSource.endOfStream()"), a.endOfStream(), this.hls.trigger(m.BUFFERED_TO_END, void 0);
    })) : (this.tracksEnded(), this.hls.trigger(m.BUFFERED_TO_END, void 0)) : t.type === "video" && this.unblockAudio();
  }
  tracksEnded() {
    this.sourceBuffers.forEach(([e]) => {
      if (e !== null) {
        const t = this.tracks[e];
        t && (t.ending = !1);
      }
    });
  }
  onLevelUpdated(e, {
    details: t
  }) {
    t.fragments.length && (this.details = t, this.updateDuration());
  }
  updateDuration() {
    this.blockUntilOpen(() => {
      const e = this.getDurationAndRange();
      e && this.updateMediaSource(e);
    });
  }
  onError(e, t) {
    if (t.details === D.BUFFER_APPEND_ERROR && t.frag) {
      var s;
      const i = (s = t.errorAction) == null ? void 0 : s.nextAutoLevel;
      G(i) && i !== t.frag.level && this.resetAppendErrors();
    }
  }
  resetAppendErrors() {
    this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    };
  }
  trimBuffers() {
    const {
      hls: e,
      details: t,
      media: s
    } = this;
    if (!s || t === null || !this.sourceBufferCount)
      return;
    const i = e.config, n = s.currentTime, a = t.levelTargetDuration, o = t.live && i.liveBackBufferLength !== null ? i.liveBackBufferLength : i.backBufferLength;
    if (G(o) && o >= 0) {
      const l = Math.max(o, a), u = Math.floor(n / a) * a - l;
      this.flushBackBuffer(n, a, u);
    }
    const c = i.frontBufferFlushThreshold;
    if (G(c) && c > 0) {
      const l = Math.max(i.maxBufferLength, c), u = Math.max(l, a), h = Math.floor(n / a) * a + u;
      this.flushFrontBuffer(n, a, h);
    }
  }
  flushBackBuffer(e, t, s) {
    this.sourceBuffers.forEach(([i, n]) => {
      if (n) {
        const o = te.getBuffered(n);
        if (o.length > 0 && s > o.start(0)) {
          var a;
          this.hls.trigger(m.BACK_BUFFER_REACHED, {
            bufferEnd: s
          });
          const c = this.tracks[i];
          if ((a = this.details) != null && a.live)
            this.hls.trigger(m.LIVE_BACK_BUFFER_REACHED, {
              bufferEnd: s
            });
          else if (c != null && c.ended) {
            this.log(`Cannot flush ${i} back buffer while SourceBuffer is in ended state`);
            return;
          }
          this.hls.trigger(m.BUFFER_FLUSHING, {
            startOffset: 0,
            endOffset: s,
            type: i
          });
        }
      }
    });
  }
  flushFrontBuffer(e, t, s) {
    this.sourceBuffers.forEach(([i, n]) => {
      if (n) {
        const a = te.getBuffered(n), o = a.length;
        if (o < 2)
          return;
        const c = a.start(o - 1), l = a.end(o - 1);
        if (s > c || e >= c && e <= l)
          return;
        this.hls.trigger(m.BUFFER_FLUSHING, {
          startOffset: c,
          endOffset: 1 / 0,
          type: i
        });
      }
    });
  }
  /**
   * Update Media Source duration to current level duration or override to Infinity if configuration parameter
   * 'liveDurationInfinity` is set to `true`
   * More details: https://github.com/video-dev/hls.js/issues/355
   */
  getDurationAndRange() {
    var e;
    const {
      details: t,
      mediaSource: s
    } = this;
    if (!t || !this.media || (s == null ? void 0 : s.readyState) !== "open")
      return null;
    const i = t.edge;
    if (t.live && this.hls.config.liveDurationInfinity) {
      if (t.fragments.length && s.setLiveSeekableRange) {
        const l = Math.max(0, t.fragmentStart), u = Math.max(l, i);
        return {
          duration: 1 / 0,
          start: l,
          end: u
        };
      }
      return {
        duration: 1 / 0
      };
    }
    const n = (e = this.overrides) == null ? void 0 : e.duration;
    if (n)
      return G(n) ? {
        duration: n
      } : null;
    const a = this.media.duration, o = G(s.duration) ? s.duration : 0;
    return i > o && i > a || !G(a) ? {
      duration: i
    } : null;
  }
  updateMediaSource({
    duration: e,
    start: t,
    end: s
  }) {
    const i = this.mediaSource;
    !this.media || !i || i.readyState !== "open" || (i.duration !== e && (G(e) && this.log(`Updating MediaSource duration to ${e.toFixed(3)}`), i.duration = e), t !== void 0 && s !== void 0 && (this.log(`MediaSource duration is set to ${i.duration}. Setting seekable range to ${t}-${s}.`), i.setLiveSeekableRange(t, s)));
  }
  get tracksReady() {
    const e = this.pendingTrackCount;
    return e > 0 && (e >= this.bufferCodecEventsTotal || this.isPending(this.tracks.audiovideo));
  }
  checkPendingTracks() {
    const {
      bufferCodecEventsTotal: e,
      pendingTrackCount: t,
      tracks: s
    } = this;
    if (this.log(`checkPendingTracks (pending: ${t} codec events expected: ${e}) ${ge(s)}`), this.tracksReady) {
      var i;
      const n = (i = this.transferData) == null ? void 0 : i.tracks;
      n && Object.keys(n).length ? this.attachTransferred() : this.createSourceBuffers();
    }
  }
  bufferCreated() {
    if (this.sourceBufferCount) {
      const e = {};
      this.sourceBuffers.forEach(([t, s]) => {
        if (t) {
          const i = this.tracks[t];
          e[t] = {
            buffer: s,
            container: i.container,
            codec: i.codec,
            supplemental: i.supplemental,
            levelCodec: i.levelCodec,
            id: i.id,
            metadata: i.metadata
          };
        }
      }), this.hls.trigger(m.BUFFER_CREATED, {
        tracks: e
      }), this.log(`SourceBuffers created. Running queue: ${this.operationQueue}`), this.sourceBuffers.forEach(([t]) => {
        this.executeNext(t);
      });
    } else {
      const e = new Error("could not create source buffer for media codec(s)");
      this.hls.trigger(m.ERROR, {
        type: X.MEDIA_ERROR,
        details: D.BUFFER_INCOMPATIBLE_CODECS_ERROR,
        fatal: !0,
        error: e,
        reason: e.message
      });
    }
  }
  createSourceBuffers() {
    const {
      tracks: e,
      sourceBuffers: t,
      mediaSource: s
    } = this;
    if (!s)
      throw new Error("createSourceBuffers called when mediaSource was null");
    for (const n in e) {
      const a = n, o = e[a];
      if (this.isPending(o)) {
        const c = this.getTrackCodec(o, a), l = `${o.container};codecs=${c}`;
        o.codec = c, this.log(`creating sourceBuffer(${l})${this.currentOp(a) ? " Queued" : ""} ${ge(o)}`);
        try {
          const u = s.addSourceBuffer(l), h = gn(a), d = [a, u];
          t[h] = d, o.buffer = u;
        } catch (u) {
          var i;
          this.error(`error while trying to add sourceBuffer: ${u.message}`), this.shiftAndExecuteNext(a), (i = this.operationQueue) == null || i.removeBlockers(), delete this.tracks[a], this.hls.trigger(m.ERROR, {
            type: X.MEDIA_ERROR,
            details: D.BUFFER_ADD_CODEC_ERROR,
            fatal: !1,
            error: u,
            sourceBufferName: a,
            mimeType: l,
            parent: o.id
          });
          return;
        }
        this.trackSourceBuffer(a, o);
      }
    }
    this.bufferCreated();
  }
  getTrackCodec(e, t) {
    const s = e.supplemental;
    let i = e.codec;
    s && (t === "video" || t === "audiovideo") && Os(s, "video") && (i = Th(i, s));
    const n = fi(i, e.levelCodec);
    return n ? t.slice(0, 5) === "audio" ? Ai(n, this.appendSource) : n : "";
  }
  trackSourceBuffer(e, t) {
    const s = t.buffer;
    if (!s)
      return;
    const i = this.getTrackCodec(t, e);
    this.tracks[e] = {
      buffer: s,
      codec: i,
      container: t.container,
      levelCodec: t.levelCodec,
      supplemental: t.supplemental,
      metadata: t.metadata,
      id: t.id,
      listeners: []
    }, this.removeBufferListeners(e), this.addBufferListener(e, "updatestart", this.onSBUpdateStart), this.addBufferListener(e, "updateend", this.onSBUpdateEnd), this.addBufferListener(e, "error", this.onSBUpdateError), this.appendSource && this.addBufferListener(e, "bufferedchange", (n, a) => {
      const o = a.removedRanges;
      o != null && o.length && this.hls.trigger(m.BUFFER_FLUSHED, {
        type: n
      });
    });
  }
  get mediaSrc() {
    var e, t;
    const s = ((e = this.media) == null || (t = e.querySelector) == null ? void 0 : t.call(e, "source")) || this.media;
    return s == null ? void 0 : s.src;
  }
  onSBUpdateStart(e) {
    const t = this.currentOp(e);
    t && t.onStart();
  }
  onSBUpdateEnd(e) {
    var t;
    if (((t = this.mediaSource) == null ? void 0 : t.readyState) === "closed") {
      this.resetBuffer(e);
      return;
    }
    const s = this.currentOp(e);
    s && (s.onComplete(), this.shiftAndExecuteNext(e));
  }
  onSBUpdateError(e, t) {
    var s;
    const i = new Error(`${e} SourceBuffer error. MediaSource readyState: ${(s = this.mediaSource) == null ? void 0 : s.readyState}`);
    this.error(`${i}`, t), this.hls.trigger(m.ERROR, {
      type: X.MEDIA_ERROR,
      details: D.BUFFER_APPENDING_ERROR,
      sourceBufferName: e,
      error: i,
      fatal: !1
    });
    const n = this.currentOp(e);
    n && n.onError(i);
  }
  updateTimestampOffset(e, t, s, i, n, a) {
    const o = t - e.timestampOffset;
    Math.abs(o) >= s && (this.log(`Updating ${i} SourceBuffer timestampOffset to ${t} (sn: ${n} cc: ${a})`), e.timestampOffset = t);
  }
  // This method must result in an updateend event; if remove is not called, onSBUpdateEnd must be called manually
  removeExecutor(e, t, s) {
    const {
      media: i,
      mediaSource: n
    } = this, a = this.tracks[e], o = a == null ? void 0 : a.buffer;
    if (!i || !n || !o) {
      this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`), this.shiftAndExecuteNext(e);
      return;
    }
    const c = G(i.duration) ? i.duration : 1 / 0, l = G(n.duration) ? n.duration : 1 / 0, u = Math.max(0, t), h = Math.min(s, c, l);
    h > u && (!a.ending || a.ended) ? (a.ended = !1, this.log(`Removing [${u},${h}] from the ${e} SourceBuffer`), o.remove(u, h)) : this.shiftAndExecuteNext(e);
  }
  // This method must result in an updateend event; if append is not called, onSBUpdateEnd must be called manually
  appendExecutor(e, t) {
    const s = this.tracks[t], i = s == null ? void 0 : s.buffer;
    if (!i)
      throw new Df(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);
    s.ending = !1, s.ended = !1, i.appendBuffer(e);
  }
  blockUntilOpen(e) {
    if (this.isUpdating() || this.isQueued())
      this.blockBuffers(e).catch((t) => {
        this.warn(`SourceBuffer blocked callback ${t}`), this.stepOperationQueue(this.sourceBufferTypes);
      });
    else
      try {
        e();
      } catch (t) {
        this.warn(`Callback run without blocking ${this.operationQueue} ${t}`);
      }
  }
  isUpdating() {
    return this.sourceBuffers.some(([e, t]) => e && t.updating);
  }
  isQueued() {
    return this.sourceBuffers.some(([e]) => e && !!this.currentOp(e));
  }
  isPending(e) {
    return !!e && !e.buffer;
  }
  // Enqueues an operation to each SourceBuffer queue which, upon execution, resolves a promise. When all promises
  // resolve, the onUnblocked function is executed. Functions calling this method do not need to unblock the queue
  // upon completion, since we already do it here
  blockBuffers(e, t = this.sourceBufferTypes) {
    if (!t.length)
      return this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e);
    const {
      operationQueue: s
    } = this, i = t.map((a) => this.appendBlocker(a));
    return t.length > 1 && !!this.blockedAudioAppend && this.unblockAudio(), Promise.all(i).then((a) => {
      s === this.operationQueue && (e(), this.stepOperationQueue(this.sourceBufferTypes));
    });
  }
  stepOperationQueue(e) {
    e.forEach((t) => {
      var s;
      const i = (s = this.tracks[t]) == null ? void 0 : s.buffer;
      !i || i.updating || this.shiftAndExecuteNext(t);
    });
  }
  append(e, t, s) {
    this.operationQueue && this.operationQueue.append(e, t, s);
  }
  appendBlocker(e) {
    if (this.operationQueue)
      return this.operationQueue.appendBlocker(e);
  }
  currentOp(e) {
    return this.operationQueue ? this.operationQueue.current(e) : null;
  }
  executeNext(e) {
    e && this.operationQueue && this.operationQueue.executeNext(e);
  }
  shiftAndExecuteNext(e) {
    this.operationQueue && this.operationQueue.shiftAndExecuteNext(e);
  }
  get pendingTrackCount() {
    return Object.keys(this.tracks).reduce((e, t) => e + (this.isPending(this.tracks[t]) ? 1 : 0), 0);
  }
  get sourceBufferCount() {
    return this.sourceBuffers.reduce((e, [t]) => e + (t ? 1 : 0), 0);
  }
  get sourceBufferTypes() {
    return this.sourceBuffers.map(([e]) => e).filter((e) => !!e);
  }
  addBufferListener(e, t, s) {
    const i = this.tracks[e];
    if (!i)
      return;
    const n = i.buffer;
    if (!n)
      return;
    const a = s.bind(this, e);
    i.listeners.push({
      event: t,
      listener: a
    }), n.addEventListener(t, a);
  }
  removeBufferListeners(e) {
    const t = this.tracks[e];
    if (!t)
      return;
    const s = t.buffer;
    s && (t.listeners.forEach((i) => {
      s.removeEventListener(i.event, i.listener);
    }), t.listeners.length = 0);
  }
}
function Ya(r) {
  const e = r.querySelectorAll("source");
  [].slice.call(e).forEach((t) => {
    r.removeChild(t);
  });
}
function Pf(r, e) {
  const t = self.document.createElement("source");
  t.type = "video/mp4", t.src = e, r.appendChild(t);
}
function gn(r) {
  return r === "audio" ? 1 : 0;
}
class mr {
  constructor(e) {
    this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  destroy() {
    this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.BUFFER_CODECS, this.onBufferCodecs, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListener() {
    const {
      hls: e
    } = this;
    e.off(m.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.BUFFER_CODECS, this.onBufferCodecs, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  onFpsDropLevelCapping(e, t) {
    const s = this.hls.levels[t.droppedLevel];
    this.isLevelAllowed(s) && this.restrictedLevels.push({
      bitrate: s.bitrate,
      height: s.height,
      width: s.width
    });
  }
  onMediaAttaching(e, t) {
    this.media = t.media instanceof HTMLVideoElement ? t.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize();
  }
  onManifestParsed(e, t) {
    const s = this.hls;
    this.restrictedLevels = [], this.firstLevel = t.firstLevel, s.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onLevelsUpdated(e, t) {
    this.timer && G(this.autoLevelCapping) && this.detectPlayerSize();
  }
  // Only activate capping when playing a video stream; otherwise, multi-bitrate audio-only streams will be restricted
  // to the first level
  onBufferCodecs(e, t) {
    this.hls.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onMediaDetaching() {
    this.stopCapping(), this.media = null;
  }
  detectPlayerSize() {
    if (this.media) {
      if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
        this.clientRect = null;
        return;
      }
      const e = this.hls.levels;
      if (e.length) {
        const t = this.hls, s = this.getMaxLevel(e.length - 1);
        s !== this.autoLevelCapping && t.logger.log(`Setting autoLevelCapping to ${s}: ${e[s].height}p@${e[s].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`), t.autoLevelCapping = s, t.autoLevelEnabled && t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping;
      }
    }
  }
  /*
   * returns level should be the one with the dimensions equal or greater than the media (player) dimensions (so the video will be downscaled)
   */
  getMaxLevel(e) {
    const t = this.hls.levels;
    if (!t.length)
      return -1;
    const s = t.filter((i, n) => this.isLevelAllowed(i) && n <= e);
    return this.clientRect = null, mr.getMaxLevelByMediaSize(s, this.mediaWidth, this.mediaHeight);
  }
  startCapping() {
    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
  }
  stopCapping() {
    this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
  }
  getDimensions() {
    if (this.clientRect)
      return this.clientRect;
    const e = this.media, t = {
      width: 0,
      height: 0
    };
    if (e) {
      const s = e.getBoundingClientRect();
      t.width = s.width, t.height = s.height, !t.width && !t.height && (t.width = s.right - s.left || e.width || 0, t.height = s.bottom - s.top || e.height || 0);
    }
    return this.clientRect = t, t;
  }
  get mediaWidth() {
    return this.getDimensions().width * this.contentScaleFactor;
  }
  get mediaHeight() {
    return this.getDimensions().height * this.contentScaleFactor;
  }
  get contentScaleFactor() {
    let e = 1;
    if (!this.hls.config.ignoreDevicePixelRatio)
      try {
        e = self.devicePixelRatio;
      } catch {
      }
    return Math.min(e, this.hls.config.maxDevicePixelRatio);
  }
  isLevelAllowed(e) {
    return !this.restrictedLevels.some((s) => e.bitrate === s.bitrate && e.width === s.width && e.height === s.height);
  }
  static getMaxLevelByMediaSize(e, t, s) {
    if (!(e != null && e.length))
      return -1;
    const i = (o, c) => c ? o.width !== c.width || o.height !== c.height : !0;
    let n = e.length - 1;
    const a = Math.max(t, s);
    for (let o = 0; o < e.length; o += 1) {
      const c = e[o];
      if ((c.width >= a || c.height >= a) && i(c, e[o + 1])) {
        n = o;
        break;
      }
    }
    return n;
  }
}
const kf = {
  /**
   * text file, such as a manifest or playlist
   */
  MANIFEST: "m",
  /**
   * audio only
   */
  AUDIO: "a",
  /**
   * video only
   */
  VIDEO: "v",
  /**
   * muxed audio and video
   */
  MUXED: "av",
  /**
   * init segment
   */
  INIT: "i",
  /**
   * caption or subtitle
   */
  CAPTION: "c",
  /**
   * ISOBMFF timed text track
   */
  TIMED_TEXT: "tt",
  /**
   * cryptographic key, license or certificate.
   */
  KEY: "k",
  /**
   * other
   */
  OTHER: "o"
}, He = kf, wf = {
  /**
   * HTTP Live Streaming (HLS)
   */
  HLS: "h"
}, Of = wf;
class Et {
  constructor(e, t) {
    Array.isArray(e) && (e = e.map((s) => s instanceof Et ? s : new Et(s))), this.value = e, this.params = t;
  }
}
const Mf = "Dict";
function Ff(r) {
  return Array.isArray(r) ? JSON.stringify(r) : r instanceof Map ? "Map{}" : r instanceof Set ? "Set{}" : typeof r == "object" ? JSON.stringify(r) : String(r);
}
function Nf(r, e, t, s) {
  return new Error(`failed to ${r} "${Ff(e)}" as ${t}`, {
    cause: s
  });
}
function Tt(r, e, t) {
  return Nf("serialize", r, e, t);
}
class Pl {
  constructor(e) {
    this.description = e;
  }
}
const ja = "Bare Item", $f = "Boolean";
function Bf(r) {
  if (typeof r != "boolean")
    throw Tt(r, $f);
  return r ? "?1" : "?0";
}
function Uf(r) {
  return btoa(String.fromCharCode(...r));
}
const Gf = "Byte Sequence";
function Kf(r) {
  if (ArrayBuffer.isView(r) === !1)
    throw Tt(r, Gf);
  return `:${Uf(r)}:`;
}
const Vf = "Integer";
function Hf(r) {
  return r < -999999999999999 || 999999999999999 < r;
}
function kl(r) {
  if (Hf(r))
    throw Tt(r, Vf);
  return r.toString();
}
function Wf(r) {
  return `@${kl(r.getTime() / 1e3)}`;
}
function wl(r, e) {
  if (r < 0)
    return -wl(-r, e);
  const t = Math.pow(10, e);
  if (Math.abs(r * t % 1 - 0.5) < Number.EPSILON) {
    const i = Math.floor(r * t);
    return (i % 2 === 0 ? i : i + 1) / t;
  } else
    return Math.round(r * t) / t;
}
const Yf = "Decimal";
function jf(r) {
  const e = wl(r, 3);
  if (Math.floor(Math.abs(e)).toString().length > 12)
    throw Tt(r, Yf);
  const t = e.toString();
  return t.includes(".") ? t : `${t}.0`;
}
const zf = "String", qf = /[\x00-\x1f\x7f]+/;
function Xf(r) {
  if (qf.test(r))
    throw Tt(r, zf);
  return `"${r.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function Qf(r) {
  return r.description || r.toString().slice(7, -1);
}
const Zf = "Token";
function za(r) {
  const e = Qf(r);
  if (/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e) === !1)
    throw Tt(e, Zf);
  return e;
}
function Kn(r) {
  switch (typeof r) {
    case "number":
      if (!G(r))
        throw Tt(r, ja);
      return Number.isInteger(r) ? kl(r) : jf(r);
    case "string":
      return Xf(r);
    case "symbol":
      return za(r);
    case "boolean":
      return Bf(r);
    case "object":
      if (r instanceof Date)
        return Wf(r);
      if (r instanceof Uint8Array)
        return Kf(r);
      if (r instanceof Pl)
        return za(r);
    default:
      throw Tt(r, ja);
  }
}
const Jf = "Key";
function Vn(r) {
  if (/^[a-z*][a-z0-9\-_.*]*$/.test(r) === !1)
    throw Tt(r, Jf);
  return r;
}
function pr(r) {
  return r == null ? "" : Object.entries(r).map(([e, t]) => t === !0 ? `;${Vn(e)}` : `;${Vn(e)}=${Kn(t)}`).join("");
}
function Ol(r) {
  return r instanceof Et ? `${Kn(r.value)}${pr(r.params)}` : Kn(r);
}
function eg(r) {
  return `(${r.value.map(Ol).join(" ")})${pr(r.params)}`;
}
function tg(r, e = {
  whitespace: !0
}) {
  if (typeof r != "object" || r == null)
    throw Tt(r, Mf);
  const t = r instanceof Map ? r.entries() : Object.entries(r), s = e != null && e.whitespace ? " " : "";
  return Array.from(t).map(([i, n]) => {
    n instanceof Et || (n = new Et(n));
    let a = Vn(i);
    return n.value === !0 ? a += pr(n.params) : (a += "=", Array.isArray(n.value) ? a += eg(n) : a += Ol(n)), a;
  }).join(`,${s}`);
}
function Ml(r, e) {
  return tg(r, e);
}
const dt = "CMCD-Object", Te = "CMCD-Request", Gt = "CMCD-Session", Mt = "CMCD-Status", sg = {
  // Object
  br: dt,
  ab: dt,
  d: dt,
  ot: dt,
  tb: dt,
  tpb: dt,
  lb: dt,
  tab: dt,
  lab: dt,
  url: dt,
  // Request
  pb: Te,
  bl: Te,
  tbl: Te,
  dl: Te,
  ltc: Te,
  mtp: Te,
  nor: Te,
  nrr: Te,
  rc: Te,
  sn: Te,
  sta: Te,
  su: Te,
  ttfb: Te,
  ttfbb: Te,
  ttlb: Te,
  cmsdd: Te,
  cmsds: Te,
  smrt: Te,
  df: Te,
  cs: Te,
  // TODO: Which header to put the `ts` field is not defined yet.
  ts: Te,
  // Session
  cid: Gt,
  pr: Gt,
  sf: Gt,
  sid: Gt,
  st: Gt,
  v: Gt,
  msd: Gt,
  // Status
  bs: Mt,
  bsd: Mt,
  cdn: Mt,
  rtp: Mt,
  bg: Mt,
  pt: Mt,
  ec: Mt,
  e: Mt
}, ig = {
  /**
   * keys whose values vary with each request.
   */
  REQUEST: Te
};
function ng(r) {
  return Object.keys(r).reduce((e, t) => {
    var s;
    return (s = r[t]) === null || s === void 0 || s.forEach((i) => e[i] = t), e;
  }, {});
}
function rg(r, e) {
  const t = {};
  if (!r)
    return t;
  const s = Object.keys(r), i = e ? ng(e) : {};
  return s.reduce((n, a) => {
    var o;
    const c = sg[a] || i[a] || ig.REQUEST, l = (o = n[c]) !== null && o !== void 0 ? o : n[c] = {};
    return l[a] = r[a], n;
  }, t);
}
function ag(r) {
  return ["ot", "sf", "st", "e", "sta"].includes(r);
}
function og(r) {
  return typeof r == "number" ? G(r) : r != null && r !== "" && r !== !1;
}
const Fl = "event";
function lg(r, e) {
  const t = new URL(r), s = new URL(e);
  if (t.origin !== s.origin)
    return r;
  const i = t.pathname.split("/").slice(1), n = s.pathname.split("/").slice(1, -1);
  for (; i[0] === n[0]; )
    i.shift(), n.shift();
  for (; n.length; )
    n.shift(), i.unshift("..");
  return i.join("/") + t.search + t.hash;
}
const Ei = (r) => Math.round(r), Hn = (r, e) => Array.isArray(r) ? r.map((t) => Hn(t, e)) : r instanceof Et && typeof r.value == "string" ? new Et(Hn(r.value, e), r.params) : (e.baseUrl && (r = lg(r, e.baseUrl)), e.version === 1 ? encodeURIComponent(r) : r), ii = (r) => Ei(r / 100) * 100, cg = (r, e) => {
  let t = r;
  return e.version >= 2 && (r instanceof Et && typeof r.value == "string" ? t = new Et([r]) : typeof r == "string" && (t = [r])), Hn(t, e);
}, ug = {
  /**
   * Bitrate (kbps) rounded integer
   */
  br: Ei,
  /**
   * Duration (milliseconds) rounded integer
   */
  d: Ei,
  /**
   * Buffer Length (milliseconds) rounded nearest 100ms
   */
  bl: ii,
  /**
   * Deadline (milliseconds) rounded nearest 100ms
   */
  dl: ii,
  /**
   * Measured Throughput (kbps) rounded nearest 100kbps
   */
  mtp: ii,
  /**
   * Next Object Request URL encoded
   */
  nor: cg,
  /**
   * Requested maximum throughput (kbps) rounded nearest 100kbps
   */
  rtp: ii,
  /**
   * Top Bitrate (kbps) rounded integer
   */
  tb: Ei
}, Nl = "request", $l = "response", yr = ["ab", "bg", "bl", "br", "bs", "bsd", "cdn", "cid", "cs", "df", "ec", "lab", "lb", "ltc", "msd", "mtp", "pb", "pr", "pt", "sf", "sid", "sn", "st", "sta", "tab", "tb", "tbl", "tpb", "ts", "v"], hg = ["e"], dg = /^[a-zA-Z0-9-.]+-[a-zA-Z0-9-.]+$/;
function Ui(r) {
  return dg.test(r);
}
function fg(r) {
  return yr.includes(r) || hg.includes(r) || Ui(r);
}
const Bl = ["d", "dl", "nor", "ot", "rtp", "su"];
function gg(r) {
  return yr.includes(r) || Bl.includes(r) || Ui(r);
}
const mg = ["cmsdd", "cmsds", "rc", "smrt", "ttfb", "ttfbb", "ttlb", "url"];
function pg(r) {
  return yr.includes(r) || Bl.includes(r) || mg.includes(r) || Ui(r);
}
const yg = ["bl", "br", "bs", "cid", "d", "dl", "mtp", "nor", "nrr", "ot", "pr", "rtp", "sf", "sid", "st", "su", "tb", "v"];
function Eg(r) {
  return yg.includes(r) || Ui(r);
}
const Tg = {
  [$l]: pg,
  [Fl]: fg,
  [Nl]: gg
};
function Ul(r, e = {}) {
  const t = {};
  if (r == null || typeof r != "object")
    return t;
  const s = e.version || r.v || 1, i = e.reportingMode || Nl, n = s === 1 ? Eg : Tg[i];
  let a = Object.keys(r).filter(n);
  const o = e.filter;
  typeof o == "function" && (a = a.filter(o));
  const c = i === $l || i === Fl;
  c && !a.includes("ts") && a.push("ts"), s > 1 && !a.includes("v") && a.push("v");
  const l = de({}, ug, e.formatters), u = {
    version: s,
    reportingMode: i,
    baseUrl: e.baseUrl
  };
  return a.sort().forEach((h) => {
    let d = r[h];
    const f = l[h];
    if (typeof f == "function" && (d = f(d, u)), h === "v") {
      if (s === 1)
        return;
      d = s;
    }
    h == "pr" && d === 1 || (c && h === "ts" && !G(d) && (d = Date.now()), og(d) && (ag(h) && typeof d == "string" && (d = new Pl(d)), t[h] = d));
  }), t;
}
function Sg(r, e = {}) {
  const t = {};
  if (!r)
    return t;
  const s = Ul(r, e), i = rg(s, e == null ? void 0 : e.customHeaderMap);
  return Object.entries(i).reduce((n, [a, o]) => {
    const c = Ml(o, {
      whitespace: !1
    });
    return c && (n[a] = c), n;
  }, t);
}
function vg(r, e, t) {
  return de(r, Sg(e, t));
}
const xg = "CMCD";
function Ag(r, e = {}) {
  return r ? Ml(Ul(r, e), {
    whitespace: !1
  }) : "";
}
function Ig(r, e = {}) {
  if (!r)
    return "";
  const t = Ag(r, e);
  return encodeURIComponent(t);
}
function Lg(r, e = {}) {
  if (!r)
    return "";
  const t = Ig(r, e);
  return `${xg}=${t}`;
}
const qa = /CMCD=[^&#]+/;
function bg(r, e, t) {
  const s = Lg(e, t);
  if (!s)
    return r;
  if (qa.test(r))
    return r.replace(qa, s);
  const i = r.includes("?") ? "&" : "?";
  return `${r}${i}${s}`;
}
class Rg {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.includeKeys = void 0, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
      this.initialized && (this.starved = !0), this.buffering = !0;
    }, this.onPlaying = () => {
      this.initialized || (this.initialized = !0), this.buffering = !1;
    }, this.applyPlaylistData = (i) => {
      try {
        this.apply(i, {
          ot: He.MANIFEST,
          su: !this.initialized
        });
      } catch (n) {
        this.hls.logger.warn("Could not generate manifest CMCD data.", n);
      }
    }, this.applyFragmentData = (i) => {
      try {
        const {
          frag: n,
          part: a
        } = i, o = this.hls.levels[n.level], c = this.getObjectType(n), l = {
          d: (a || n).duration * 1e3,
          ot: c
        };
        (c === He.VIDEO || c === He.AUDIO || c == He.MUXED) && (l.br = o.bitrate / 1e3, l.tb = this.getTopBandwidth(c) / 1e3, l.bl = this.getBufferLength(c));
        const u = a ? this.getNextPart(a) : this.getNextFrag(n);
        u != null && u.url && u.url !== n.url && (l.nor = u.url), this.apply(i, l);
      } catch (n) {
        this.hls.logger.warn("Could not generate segment CMCD data.", n);
      }
    }, this.hls = e;
    const t = this.config = e.config, {
      cmcd: s
    } = t;
    s != null && (t.pLoader = this.createPlaylistLoader(), t.fLoader = this.createFragmentLoader(), this.sid = s.sessionId || e.sessionId, this.cid = s.contentId, this.useHeaders = s.useHeaders === !0, this.includeKeys = s.includeKeys, this.registerListeners());
  }
  registerListeners() {
    const e = this.hls;
    e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHED, this.onMediaDetached, this), e.on(m.BUFFER_CREATED, this.onBufferCreated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHED, this.onMediaDetached, this), e.off(m.BUFFER_CREATED, this.onBufferCreated, this);
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = this.media = null;
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying);
  }
  onMediaDetached() {
    this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null);
  }
  onBufferCreated(e, t) {
    var s, i;
    this.audioBuffer = (s = t.tracks.audio) == null ? void 0 : s.buffer, this.videoBuffer = (i = t.tracks.video) == null ? void 0 : i.buffer;
  }
  /**
   * Create baseline CMCD data
   */
  createData() {
    var e;
    return {
      v: 1,
      sf: Of.HLS,
      sid: this.sid,
      cid: this.cid,
      pr: (e = this.media) == null ? void 0 : e.playbackRate,
      mtp: this.hls.bandwidthEstimate / 1e3
    };
  }
  /**
   * Apply CMCD data to a request.
   */
  apply(e, t = {}) {
    de(t, this.createData());
    const s = t.ot === He.INIT || t.ot === He.VIDEO || t.ot === He.MUXED;
    this.starved && s && (t.bs = !0, t.su = !0, this.starved = !1), t.su == null && (t.su = this.buffering);
    const {
      includeKeys: i
    } = this;
    i && (t = Object.keys(t).reduce((a, o) => (i.includes(o) && (a[o] = t[o]), a), {}));
    const n = {
      baseUrl: e.url
    };
    this.useHeaders ? (e.headers || (e.headers = {}), vg(e.headers, t, n)) : e.url = bg(e.url, t, n);
  }
  getNextFrag(e) {
    var t;
    const s = (t = this.hls.levels[e.level]) == null ? void 0 : t.details;
    if (s) {
      const i = e.sn - s.startSN;
      return s.fragments[i + 1];
    }
  }
  getNextPart(e) {
    var t;
    const {
      index: s,
      fragment: i
    } = e, n = (t = this.hls.levels[i.level]) == null || (t = t.details) == null ? void 0 : t.partList;
    if (n) {
      const {
        sn: a
      } = i;
      for (let o = n.length - 1; o >= 0; o--) {
        const c = n[o];
        if (c.index === s && c.fragment.sn === a)
          return n[o + 1];
      }
    }
  }
  /**
   * The CMCD object type.
   */
  getObjectType(e) {
    const {
      type: t
    } = e;
    if (t === "subtitle")
      return He.TIMED_TEXT;
    if (e.sn === "initSegment")
      return He.INIT;
    if (t === "audio")
      return He.AUDIO;
    if (t === "main")
      return this.hls.audioTracks.length ? He.VIDEO : He.MUXED;
  }
  /**
   * Get the highest bitrate.
   */
  getTopBandwidth(e) {
    let t = 0, s;
    const i = this.hls;
    if (e === He.AUDIO)
      s = i.audioTracks;
    else {
      const n = i.maxAutoLevel, a = n > -1 ? n + 1 : i.levels.length;
      s = i.levels.slice(0, a);
    }
    return s.forEach((n) => {
      n.bitrate > t && (t = n.bitrate);
    }), t > 0 ? t : NaN;
  }
  /**
   * Get the buffer length for a media type in milliseconds
   */
  getBufferLength(e) {
    const t = this.media, s = e === He.AUDIO ? this.audioBuffer : this.videoBuffer;
    return !s || !t ? NaN : te.bufferInfo(s, t.currentTime, this.config.maxBufferHole).len * 1e3;
  }
  /**
   * Create a playlist loader
   */
  createPlaylistLoader() {
    const {
      pLoader: e
    } = this.config, t = this.applyPlaylistData, s = e || this.config.loader;
    return class {
      constructor(n) {
        this.loader = void 0, this.loader = new s(n);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(n, a, o) {
        t(n), this.loader.load(n, a, o);
      }
    };
  }
  /**
   * Create a playlist loader
   */
  createFragmentLoader() {
    const {
      fLoader: e
    } = this.config, t = this.applyFragmentData, s = e || this.config.loader;
    return class {
      constructor(n) {
        this.loader = void 0, this.loader = new s(n);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(n, a, o) {
        t(n), this.loader.load(n, a, o);
      }
    };
  }
}
const _g = 3e5;
class Dg extends nt {
  constructor(e) {
    super("content-steering", e.logger), this.hls = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this._pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e, this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.ERROR, this.onError, this));
  }
  pathways() {
    return (this.levels || []).reduce((e, t) => (e.indexOf(t.pathwayId) === -1 && e.push(t.pathwayId), e), []);
  }
  get pathwayPriority() {
    return this._pathwayPriority;
  }
  set pathwayPriority(e) {
    this.updatePathwayPriority(e);
  }
  startLoad() {
    if (this.started = !0, this.clearTimeout(), this.enabled && this.uri) {
      if (this.updated) {
        const e = this.timeToLoad * 1e3 - (performance.now() - this.updated);
        if (e > 0) {
          this.scheduleRefresh(this.uri, e);
          return;
        }
      }
      this.loadSteeringManifest(this.uri);
    }
  }
  stopLoad() {
    this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout();
  }
  clearTimeout() {
    this.reloadTimer !== -1 && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1);
  }
  destroy() {
    this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  removeLevel(e) {
    const t = this.levels;
    t && (this.levels = t.filter((s) => s !== e));
  }
  onManifestLoading() {
    this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  onManifestLoaded(e, t) {
    const {
      contentSteering: s
    } = t;
    s !== null && (this.pathwayId = s.pathwayId, this.uri = s.uri, this.started && this.startLoad());
  }
  onManifestParsed(e, t) {
    this.audioTracks = t.audioTracks, this.subtitleTracks = t.subtitleTracks;
  }
  onError(e, t) {
    const {
      errorAction: s
    } = t;
    if ((s == null ? void 0 : s.action) === Ce.SendAlternateToPenaltyBox && s.flags === qe.MoveAllAlternatesMatchingHost) {
      const i = this.levels;
      let n = this._pathwayPriority, a = this.pathwayId;
      if (t.context) {
        const {
          groupId: o,
          pathwayId: c,
          type: l
        } = t.context;
        o && i ? a = this.getPathwayForGroupId(o, l, a) : c && (a = c);
      }
      a in this.penalizedPathways || (this.penalizedPathways[a] = performance.now()), !n && i && (n = this.pathways()), n && n.length > 1 && (this.updatePathwayPriority(n), s.resolved = this.pathwayId !== a), t.details === D.BUFFER_APPEND_ERROR && !t.fatal ? s.resolved = !0 : s.resolved || this.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${a} levels: ${i && i.length} priorities: ${ge(n)} penalized: ${ge(this.penalizedPathways)}`);
    }
  }
  filterParsedLevels(e) {
    this.levels = e;
    let t = this.getLevelsForPathway(this.pathwayId);
    if (t.length === 0) {
      const s = e[0].pathwayId;
      this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${s}"`), t = this.getLevelsForPathway(s), this.pathwayId = s;
    }
    return t.length !== e.length && this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t;
  }
  getLevelsForPathway(e) {
    return this.levels === null ? [] : this.levels.filter((t) => e === t.pathwayId);
  }
  updatePathwayPriority(e) {
    this._pathwayPriority = e;
    let t;
    const s = this.penalizedPathways, i = performance.now();
    Object.keys(s).forEach((n) => {
      i - s[n] > _g && delete s[n];
    });
    for (let n = 0; n < e.length; n++) {
      const a = e[n];
      if (a in s)
        continue;
      if (a === this.pathwayId)
        return;
      const o = this.hls.nextLoadLevel, c = this.hls.levels[o];
      if (t = this.getLevelsForPathway(a), t.length > 0) {
        this.log(`Setting Pathway to "${a}"`), this.pathwayId = a, al(t), this.hls.trigger(m.LEVELS_UPDATED, {
          levels: t
        });
        const l = this.hls.levels[o];
        c && l && this.levels && (l.attrs["STABLE-VARIANT-ID"] !== c.attrs["STABLE-VARIANT-ID"] && l.bitrate !== c.bitrate && this.log(`Unstable Pathways change from bitrate ${c.bitrate} to ${l.bitrate}`), this.hls.nextLoadLevel = o);
        break;
      }
    }
  }
  getPathwayForGroupId(e, t, s) {
    const i = this.getLevelsForPathway(s).concat(this.levels || []);
    for (let n = 0; n < i.length; n++)
      if (t === re.AUDIO_TRACK && i[n].hasAudioGroup(e) || t === re.SUBTITLE_TRACK && i[n].hasSubtitleGroup(e))
        return i[n].pathwayId;
    return s;
  }
  clonePathways(e) {
    const t = this.levels;
    if (!t)
      return;
    const s = {}, i = {};
    e.forEach((n) => {
      const {
        ID: a,
        "BASE-ID": o,
        "URI-REPLACEMENT": c
      } = n;
      if (t.some((u) => u.pathwayId === a))
        return;
      const l = this.getLevelsForPathway(o).map((u) => {
        const h = new ye(u.attrs);
        h["PATHWAY-ID"] = a;
        const d = h.AUDIO && `${h.AUDIO}_clone_${a}`, f = h.SUBTITLES && `${h.SUBTITLES}_clone_${a}`;
        d && (s[h.AUDIO] = d, h.AUDIO = d), f && (i[h.SUBTITLES] = f, h.SUBTITLES = f);
        const g = Gl(u.uri, h["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", c), p = new Fs({
          attrs: h,
          audioCodec: u.audioCodec,
          bitrate: u.bitrate,
          height: u.height,
          name: u.name,
          url: g,
          videoCodec: u.videoCodec,
          width: u.width
        });
        if (u.audioGroups)
          for (let y = 1; y < u.audioGroups.length; y++)
            p.addGroupId("audio", `${u.audioGroups[y]}_clone_${a}`);
        if (u.subtitleGroups)
          for (let y = 1; y < u.subtitleGroups.length; y++)
            p.addGroupId("text", `${u.subtitleGroups[y]}_clone_${a}`);
        return p;
      });
      t.push(...l), Xa(this.audioTracks, s, c, a), Xa(this.subtitleTracks, i, c, a);
    });
  }
  loadSteeringManifest(e) {
    const t = this.hls.config, s = t.loader;
    this.loader && this.loader.destroy(), this.loader = new s(t);
    let i;
    try {
      i = new self.URL(e);
    } catch {
      this.enabled = !1, this.log(`Failed to parse Steering Manifest URI: ${e}`);
      return;
    }
    if (i.protocol !== "data:") {
      const u = (this.hls.bandwidthEstimate || t.abrEwmaDefaultEstimate) | 0;
      i.searchParams.set("_HLS_pathway", this.pathwayId), i.searchParams.set("_HLS_throughput", "" + u);
    }
    const n = {
      responseType: "json",
      url: i.href
    }, a = t.steeringManifestLoadPolicy.default, o = a.errorRetry || a.timeoutRetry || {}, c = {
      loadPolicy: a,
      timeout: a.maxLoadTimeMs,
      maxRetry: o.maxNumRetry || 0,
      retryDelay: o.retryDelayMs || 0,
      maxRetryDelay: o.maxRetryDelayMs || 0
    }, l = {
      onSuccess: (u, h, d, f) => {
        this.log(`Loaded steering manifest: "${i}"`);
        const g = u.data;
        if ((g == null ? void 0 : g.VERSION) !== 1) {
          this.log(`Steering VERSION ${g.VERSION} not supported!`);
          return;
        }
        this.updated = performance.now(), this.timeToLoad = g.TTL;
        const {
          "RELOAD-URI": p,
          "PATHWAY-CLONES": y,
          "PATHWAY-PRIORITY": E
        } = g;
        if (p)
          try {
            this.uri = new self.URL(p, i).href;
          } catch {
            this.enabled = !1, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${p}`);
            return;
          }
        this.scheduleRefresh(this.uri || d.url), y && this.clonePathways(y);
        const T = {
          steeringManifest: g,
          url: i.toString()
        };
        this.hls.trigger(m.STEERING_MANIFEST_LOADED, T), E && this.updatePathwayPriority(E);
      },
      onError: (u, h, d, f) => {
        if (this.log(`Error loading steering manifest: ${u.code} ${u.text} (${h.url})`), this.stopLoad(), u.code === 410) {
          this.enabled = !1, this.log(`Steering manifest ${h.url} no longer available`);
          return;
        }
        let g = this.timeToLoad * 1e3;
        if (u.code === 429) {
          const p = this.loader;
          if (typeof (p == null ? void 0 : p.getResponseHeader) == "function") {
            const y = p.getResponseHeader("Retry-After");
            y && (g = parseFloat(y) * 1e3);
          }
          this.log(`Steering manifest ${h.url} rate limited`);
          return;
        }
        this.scheduleRefresh(this.uri || h.url, g);
      },
      onTimeout: (u, h, d) => {
        this.log(`Timeout loading steering manifest (${h.url})`), this.scheduleRefresh(this.uri || h.url);
      }
    };
    this.log(`Requesting steering manifest: ${i}`), this.loader.load(n, c, l);
  }
  scheduleRefresh(e, t = this.timeToLoad * 1e3) {
    this.clearTimeout(), this.reloadTimer = self.setTimeout(() => {
      var s;
      const i = (s = this.hls) == null ? void 0 : s.media;
      if (i && !i.ended) {
        this.loadSteeringManifest(e);
        return;
      }
      this.scheduleRefresh(e, this.timeToLoad * 1e3);
    }, t);
  }
}
function Xa(r, e, t, s) {
  r && Object.keys(e).forEach((i) => {
    const n = r.filter((a) => a.groupId === i).map((a) => {
      const o = de({}, a);
      return o.details = void 0, o.attrs = new ye(o.attrs), o.url = o.attrs.URI = Gl(a.url, a.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", t), o.groupId = o.attrs["GROUP-ID"] = e[i], o.attrs["PATHWAY-ID"] = s, o;
    });
    r.push(...n);
  });
}
function Gl(r, e, t, s) {
  const {
    HOST: i,
    PARAMS: n,
    [t]: a
  } = s;
  let o;
  e && (o = a == null ? void 0 : a[e], o && (r = o));
  const c = new self.URL(r);
  return i && !o && (c.host = i), n && Object.keys(n).sort().forEach((l) => {
    l && c.searchParams.set(l, n[l]);
  }), c.href;
}
class ls extends nt {
  constructor(e) {
    super("eme", e.logger), this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.mediaKeys = null, this.setMediaKeysQueue = ls.CDMCleanupPromise ? [ls.CDMCleanupPromise] : [], this.bannedKeyIds = {}, this.onMediaEncrypted = (t) => {
      const {
        initDataType: s,
        initData: i
      } = t, n = `"${t.type}" event: init data type: "${s}"`;
      if (this.debug(n), i !== null) {
        if (!this.keyFormatPromise) {
          let a = Object.keys(this.keySystemAccessPromises);
          a.length || (a = _s(this.config));
          const o = a.map(an).filter((c) => !!c);
          this.keyFormatPromise = this.getKeyFormatPromise(o);
        }
        this.keyFormatPromise.then((a) => {
          const o = mi(a);
          if (s !== "sinf" || o !== Ee.FAIRPLAY) {
            this.log(`Ignoring "${t.type}" event with init data type: "${s}" for selected key-system ${o}`);
            return;
          }
          let c;
          try {
            const f = be(new Uint8Array(i)), g = rr(JSON.parse(f).sinf), p = Mo(g);
            if (!p)
              throw new Error("'schm' box missing or not cbcs/cenc with schi > tenc");
            c = new Uint8Array(p.subarray(8, 24));
          } catch (f) {
            this.warn(`${n} Failed to parse sinf: ${f}`);
            return;
          }
          const l = $e(c), {
            keyIdToKeySessionPromise: u,
            mediaKeySessions: h
          } = this;
          let d = u[l];
          for (let f = 0; f < h.length; f++) {
            const g = h[f], p = g.decryptdata;
            if (!p.keyId)
              continue;
            const y = $e(p.keyId);
            if (_i(c, p.keyId) || p.uri.replace(/-/g, "").indexOf(l) !== -1) {
              if (d = u[y], !d)
                continue;
              if (p.pssh)
                break;
              delete u[y], p.pssh = new Uint8Array(i), p.keyId = c, d = u[l] = d.then(() => this.generateRequestWithPreferredKeySession(g, s, i, "encrypted-event-key-match")), d.catch((E) => this.handleError(E));
              break;
            }
          }
          d || this.handleError(new Error(`Key ID ${l} not encountered in playlist. Key-system sessions ${h.length}.`));
        }).catch((a) => this.handleError(a));
      }
    }, this.onWaitingForKey = (t) => {
      this.log(`"${t.type}" event`);
    }, this.hls = e, this.config = e.config, this.registerListeners();
  }
  destroy() {
    this.onDestroying(), this.onMediaDetached();
    const e = this.config;
    e.requestMediaKeySystemAccessFunc = null, e.licenseXhrSetup = e.licenseResponseCallback = void 0, e.drmSystems = e.drmSystemOptions = {}, this.hls = this.config = this.keyIdToKeySessionPromise = null, this.onMediaEncrypted = this.onWaitingForKey = null;
  }
  registerListeners() {
    this.hls.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(m.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(m.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), this.hls.on(m.DESTROYING, this.onDestroying, this);
  }
  unregisterListeners() {
    this.hls.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(m.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(m.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), this.hls.off(m.DESTROYING, this.onDestroying, this);
  }
  getLicenseServerUrl(e) {
    const {
      drmSystems: t,
      widevineLicenseUrl: s
    } = this.config, i = t == null ? void 0 : t[e];
    if (i)
      return i.licenseUrl;
    if (e === Ee.WIDEVINE && s)
      return s;
  }
  getLicenseServerUrlOrThrow(e) {
    const t = this.getLicenseServerUrl(e);
    if (t === void 0)
      throw new Error(`no license server URL configured for key-system "${e}"`);
    return t;
  }
  getServerCertificateUrl(e) {
    const {
      drmSystems: t
    } = this.config, s = t == null ? void 0 : t[e];
    if (s)
      return s.serverCertificateUrl;
    this.log(`No Server Certificate in config.drmSystems["${e}"]`);
  }
  attemptKeySystemAccess(e) {
    const t = this.hls.levels, s = (a, o, c) => !!a && c.indexOf(a) === o, i = t.map((a) => a.audioCodec).filter(s), n = t.map((a) => a.videoCodec).filter(s);
    return i.length + n.length === 0 && n.push("avc1.42e01e"), new Promise((a, o) => {
      const c = (l) => {
        const u = l.shift();
        this.getMediaKeysPromise(u, i, n).then((h) => a({
          keySystem: u,
          mediaKeys: h
        })).catch((h) => {
          l.length ? c(l) : h instanceof je ? o(h) : o(new je({
            type: X.KEY_SYSTEM_ERROR,
            details: D.KEY_SYSTEM_NO_ACCESS,
            error: h,
            fatal: !0
          }, h.message));
        });
      };
      c(e);
    });
  }
  requestMediaKeySystemAccess(e, t) {
    const {
      requestMediaKeySystemAccessFunc: s
    } = this.config;
    if (typeof s != "function") {
      let i = `Configured requestMediaKeySystemAccess is not a function ${s}`;
      return Zo === null && self.location.protocol === "http:" && (i = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(new Error(i));
    }
    return s(e, t);
  }
  getMediaKeysPromise(e, t, s) {
    var i;
    const n = ld(e, t, s, this.config.drmSystemOptions || {});
    let a = this.keySystemAccessPromises[e], o = (i = a) == null ? void 0 : i.keySystemAccess;
    if (!o) {
      this.log(`Requesting encrypted media "${e}" key-system access with config: ${ge(n)}`), o = this.requestMediaKeySystemAccess(e, n);
      const c = a = this.keySystemAccessPromises[e] = {
        keySystemAccess: o
      };
      return o.catch((l) => {
        this.log(`Failed to obtain access to key-system "${e}": ${l}`);
      }), o.then((l) => {
        this.log(`Access for key-system "${l.keySystem}" obtained`);
        const u = this.fetchServerCertificate(e);
        this.log(`Create media-keys for "${e}"`);
        const h = c.mediaKeys = l.createMediaKeys().then((d) => (this.log(`Media-keys created for "${e}"`), c.hasMediaKeys = !0, u.then((f) => f ? this.setMediaKeysServerCertificate(d, e, f) : d)));
        return h.catch((d) => {
          this.error(`Failed to create media-keys for "${e}"}: ${d}`);
        }), h;
      });
    }
    return o.then(() => a.mediaKeys);
  }
  createMediaKeySessionContext({
    decryptdata: e,
    keySystem: t,
    mediaKeys: s
  }) {
    this.log(`Creating key-system session "${t}" keyId: ${$e(e.keyId || [])} keyUri: ${e.uri}`);
    const i = s.createSession(), n = {
      decryptdata: e,
      keySystem: t,
      mediaKeys: s,
      mediaKeysSession: i,
      keyStatus: "status-pending"
    };
    return this.mediaKeySessions.push(n), n;
  }
  renewKeySession(e) {
    const t = e.decryptdata;
    if (t.pssh) {
      const s = this.createMediaKeySessionContext(e), i = ni(t), n = "cenc";
      this.keyIdToKeySessionPromise[i] = this.generateRequestWithPreferredKeySession(s, n, t.pssh.buffer, "expired");
    } else
      this.warn("Could not renew expired session. Missing pssh initData.");
    this.removeSession(e);
  }
  updateKeySession(e, t) {
    const s = e.mediaKeysSession;
    return this.log(`Updating key-session "${s.sessionId}" for keyId ${$e(e.decryptdata.keyId || [])}
      } (data length: ${t.byteLength})`), s.update(t);
  }
  getSelectedKeySystemFormats() {
    return Object.keys(this.keySystemAccessPromises).map((e) => ({
      keySystem: e,
      hasMediaKeys: this.keySystemAccessPromises[e].hasMediaKeys
    })).filter(({
      hasMediaKeys: e
    }) => !!e).map(({
      keySystem: e
    }) => an(e)).filter((e) => !!e);
  }
  getKeySystemAccess(e) {
    return this.getKeySystemSelectionPromise(e).then(({
      keySystem: t,
      mediaKeys: s
    }) => this.attemptSetMediaKeys(t, s));
  }
  selectKeySystem(e) {
    return new Promise((t, s) => {
      this.getKeySystemSelectionPromise(e).then(({
        keySystem: i
      }) => {
        const n = an(i);
        n ? t(n) : s(new Error(`Unable to find format for key-system "${i}"`));
      }).catch(s);
    });
  }
  selectKeySystemFormat(e) {
    const t = Object.keys(e.levelkeys || {});
    return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(t)), this.keyFormatPromise;
  }
  getKeyFormatPromise(e) {
    const t = _s(this.config), s = e.map(mi).filter((i) => !!i && t.indexOf(i) !== -1);
    return this.selectKeySystem(s);
  }
  getKeyStatus(e) {
    const {
      mediaKeySessions: t
    } = this;
    for (let s = 0; s < t.length; s++) {
      const i = Cg(e, t[s]);
      if (i)
        return i;
    }
  }
  loadKey(e) {
    const t = e.keyInfo.decryptdata, s = ni(t), i = this.bannedKeyIds[s];
    if (i || this.getKeyStatus(t) === "internal-error") {
      const o = Qa(i || "internal-error", t);
      return this.handleError(o, e.frag), Promise.reject(o);
    }
    const n = `(keyId: ${s} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
    this.log(`Starting session for key ${n}`);
    const a = this.keyIdToKeySessionPromise[s];
    if (!a) {
      const o = this.getKeySystemForKeyPromise(t).then(({
        keySystem: c,
        mediaKeys: l
      }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${n}`), this.attemptSetMediaKeys(c, l).then(() => (this.throwIfDestroyed(), this.createMediaKeySessionContext({
        keySystem: c,
        mediaKeys: l,
        decryptdata: t
      }))))).then((c) => {
        const l = "cenc", u = t.pssh ? t.pssh.buffer : null;
        return this.generateRequestWithPreferredKeySession(c, l, u, "playlist-key");
      });
      return o.catch((c) => this.handleError(c, e.frag)), this.keyIdToKeySessionPromise[s] = o, o;
    }
    return a.catch((o) => {
      if (o instanceof je) {
        const c = ce({}, o.data);
        this.getKeyStatus(t) === "internal-error" && (c.decryptdata = t);
        const l = new je(c, o.message);
        this.handleError(l, e.frag);
      }
    }), a;
  }
  throwIfDestroyed(e = "Invalid state") {
    if (!this.hls)
      throw new Error("invalid state");
  }
  handleError(e, t) {
    if (this.hls)
      if (e instanceof je) {
        t && (e.data.frag = t);
        const s = e.data.decryptdata;
        this.error(`${e.message}${s ? ` (${$e(s.keyId || [])})` : ""}`), this.hls.trigger(m.ERROR, e.data);
      } else
        this.error(e.message), this.hls.trigger(m.ERROR, {
          type: X.KEY_SYSTEM_ERROR,
          details: D.KEY_SYSTEM_NO_KEYS,
          error: e,
          fatal: !0
        });
  }
  getKeySystemForKeyPromise(e) {
    const t = ni(e), s = this.keyIdToKeySessionPromise[t];
    if (!s) {
      const i = mi(e.keyFormat), n = i ? [i] : _s(this.config);
      return this.attemptKeySystemAccess(n);
    }
    return s;
  }
  getKeySystemSelectionPromise(e) {
    if (e.length || (e = _s(this.config)), e.length === 0)
      throw new je({
        type: X.KEY_SYSTEM_ERROR,
        details: D.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
        fatal: !0
      }, `Missing key-system license configuration options ${ge({
        drmSystems: this.config.drmSystems
      })}`);
    return this.attemptKeySystemAccess(e);
  }
  attemptSetMediaKeys(e, t) {
    if (this.mediaKeys === t)
      return Promise.resolve();
    const s = this.setMediaKeysQueue.slice();
    this.log(`Setting media-keys for "${e}"`);
    const i = Promise.all(s).then(() => {
      if (!this.media)
        throw this.mediaKeys = null, new Error("Attempted to set mediaKeys without media element attached");
      return this.media.setMediaKeys(t);
    });
    return this.mediaKeys = t, this.setMediaKeysQueue.push(i), i.then(() => {
      this.log(`Media-keys set for "${e}"`), s.push(i), this.setMediaKeysQueue = this.setMediaKeysQueue.filter((n) => s.indexOf(n) === -1);
    });
  }
  generateRequestWithPreferredKeySession(e, t, s, i) {
    var n;
    const a = (n = this.config.drmSystems) == null || (n = n[e.keySystem]) == null ? void 0 : n.generateRequest;
    if (a)
      try {
        const g = a.call(this.hls, t, s, e);
        if (!g)
          throw new Error("Invalid response from configured generateRequest filter");
        t = g.initDataType, s = g.initData ? g.initData : null, e.decryptdata.pssh = s ? new Uint8Array(s) : null;
      } catch (g) {
        if (this.warn(g.message), this.hls && this.hls.config.debug)
          throw g;
      }
    if (s === null)
      return this.log(`Skipping key-session request for "${i}" (no initData)`), Promise.resolve(e);
    const o = ni(e.decryptdata), c = e.decryptdata.uri;
    this.log(`Generating key-session request for "${i}" keyId: ${o} URI: ${c} (init data type: ${t} length: ${s.byteLength})`);
    const l = new or(), u = e._onmessage = (g) => {
      const p = e.mediaKeysSession;
      if (!p) {
        l.emit("error", new Error("invalid state"));
        return;
      }
      const {
        messageType: y,
        message: E
      } = g;
      this.log(`"${y}" message event for session "${p.sessionId}" message size: ${E.byteLength}`), y === "license-request" || y === "license-renewal" ? this.renewLicense(e, E).catch((T) => {
        l.eventNames().length ? l.emit("error", T) : this.handleError(T);
      }) : y === "license-release" ? e.keySystem === Ee.FAIRPLAY && this.updateKeySession(e, Fn("acknowledged")).then(() => this.removeSession(e)).catch((T) => this.handleError(T)) : this.warn(`unhandled media key message type "${y}"`);
    }, h = (g, p) => {
      p.keyStatus = g;
      let y;
      g.startsWith("usable") ? l.emit("resolved") : g === "internal-error" || g === "output-restricted" || g === "output-downscaled" ? y = Qa(g, p.decryptdata) : g === "expired" ? y = new Error(`key expired (keyId: ${o})`) : g === "released" ? y = new Error("key released") : g === "status-pending" || this.warn(`unhandled key status change "${g}" (keyId: ${o})`), y && (l.eventNames().length ? l.emit("error", y) : this.handleError(y));
    }, d = e._onkeystatuseschange = (g) => {
      if (!e.mediaKeysSession) {
        l.emit("error", new Error("invalid state"));
        return;
      }
      const y = this.getKeyStatuses(e);
      if (!Object.keys(y).some((v) => y[v] !== "status-pending"))
        return;
      if (y[o] === "expired") {
        this.log(`Expired key ${ge(y)} in key-session "${e.mediaKeysSession.sessionId}"`), this.renewKeySession(e);
        return;
      }
      let T = y[o];
      if (T)
        h(T, e);
      else {
        var S;
        e.keyStatusTimeouts || (e.keyStatusTimeouts = {}), (S = e.keyStatusTimeouts)[o] || (S[o] = self.setTimeout(() => {
          if (!e.mediaKeysSession || !this.mediaKeys)
            return;
          const x = this.getKeyStatus(e.decryptdata);
          if (x && x !== "status-pending")
            return this.log(`No status for keyId ${o} in key-session "${e.mediaKeysSession.sessionId}". Using session key-status ${x} from other session.`), h(x, e);
          this.log(`key status for ${o} in key-session "${e.mediaKeysSession.sessionId}" timed out after 1000ms`), T = "internal-error", h(T, e);
        }, 1e3)), this.log(`No status for keyId ${o} (${ge(y)}).`);
      }
    };
    Be(e.mediaKeysSession, "message", u), Be(e.mediaKeysSession, "keystatuseschange", d);
    const f = new Promise((g, p) => {
      l.on("error", p), l.on("resolved", g);
    });
    return e.mediaKeysSession.generateRequest(t, s).then(() => {
      this.log(`Request generated for key-session "${e.mediaKeysSession.sessionId}" keyId: ${o} URI: ${c}`);
    }).catch((g) => {
      throw new je({
        type: X.KEY_SYSTEM_ERROR,
        details: D.KEY_SYSTEM_NO_SESSION,
        error: g,
        decryptdata: e.decryptdata,
        fatal: !1
      }, `Error generating key-session request: ${g}`);
    }).then(() => f).catch((g) => (l.removeAllListeners(), this.removeSession(e).then(() => {
      throw g;
    }))).then(() => (l.removeAllListeners(), e));
  }
  getKeyStatuses(e) {
    const t = {};
    return e.mediaKeysSession.keyStatuses.forEach((s, i) => {
      if (typeof i == "string" && typeof s == "object") {
        const o = i;
        i = s, s = o;
      }
      const n = "buffer" in i ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : new Uint8Array(i);
      e.keySystem === Ee.PLAYREADY && n.length === 16 && Xo(n);
      const a = $e(n);
      s === "internal-error" && (this.bannedKeyIds[a] = s), this.log(`key status change "${s}" for keyStatuses keyId: ${a} key-session "${e.mediaKeysSession.sessionId}"`), t[a] = s;
    }), t;
  }
  fetchServerCertificate(e) {
    const t = this.config, s = t.loader, i = new s(t), n = this.getServerCertificateUrl(e);
    return n ? (this.log(`Fetching server certificate for "${e}"`), new Promise((a, o) => {
      const c = {
        responseType: "arraybuffer",
        url: n
      }, l = t.certLoadPolicy.default, u = {
        loadPolicy: l,
        timeout: l.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, h = {
        onSuccess: (d, f, g, p) => {
          a(d.data);
        },
        onError: (d, f, g, p) => {
          o(new je({
            type: X.KEY_SYSTEM_ERROR,
            details: D.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: g,
            response: ce({
              url: c.url,
              data: void 0
            }, d)
          }, `"${e}" certificate request failed (${n}). Status: ${d.code} (${d.text})`));
        },
        onTimeout: (d, f, g) => {
          o(new je({
            type: X.KEY_SYSTEM_ERROR,
            details: D.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: g,
            response: {
              url: c.url,
              data: void 0
            }
          }, `"${e}" certificate request timed out (${n})`));
        },
        onAbort: (d, f, g) => {
          o(new Error("aborted"));
        }
      };
      i.load(c, u, h);
    })) : Promise.resolve();
  }
  setMediaKeysServerCertificate(e, t, s) {
    return new Promise((i, n) => {
      e.setServerCertificate(s).then((a) => {
        this.log(`setServerCertificate ${a ? "success" : "not supported by CDM"} (${s.byteLength}) on "${t}"`), i(e);
      }).catch((a) => {
        n(new je({
          type: X.KEY_SYSTEM_ERROR,
          details: D.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
          error: a,
          fatal: !0
        }, a.message));
      });
    });
  }
  renewLicense(e, t) {
    return this.requestLicense(e, new Uint8Array(t)).then((s) => this.updateKeySession(e, new Uint8Array(s)).catch((i) => {
      throw new je({
        type: X.KEY_SYSTEM_ERROR,
        details: D.KEY_SYSTEM_SESSION_UPDATE_FAILED,
        decryptdata: e.decryptdata,
        error: i,
        fatal: !1
      }, i.message);
    }));
  }
  unpackPlayReadyKeyMessage(e, t) {
    const s = String.fromCharCode.apply(null, new Uint16Array(t.buffer));
    if (!s.includes("PlayReadyKeyMessage"))
      return e.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t;
    const i = new DOMParser().parseFromString(s, "application/xml"), n = i.querySelectorAll("HttpHeader");
    if (n.length > 0) {
      let u;
      for (let h = 0, d = n.length; h < d; h++) {
        var a, o;
        u = n[h];
        const f = (a = u.querySelector("name")) == null ? void 0 : a.textContent, g = (o = u.querySelector("value")) == null ? void 0 : o.textContent;
        f && g && e.setRequestHeader(f, g);
      }
    }
    const c = i.querySelector("Challenge"), l = c == null ? void 0 : c.textContent;
    if (!l)
      throw new Error("Cannot find <Challenge> in key message");
    return Fn(atob(l));
  }
  setupLicenseXHR(e, t, s, i) {
    const n = this.config.licenseXhrSetup;
    return n ? Promise.resolve().then(() => {
      if (!s.decryptdata)
        throw new Error("Key removed");
      return n.call(this.hls, e, t, s, i);
    }).catch((a) => {
      if (!s.decryptdata)
        throw a;
      return e.open("POST", t, !0), n.call(this.hls, e, t, s, i);
    }).then((a) => (e.readyState || e.open("POST", t, !0), {
      xhr: e,
      licenseChallenge: a || i
    })) : (e.open("POST", t, !0), Promise.resolve({
      xhr: e,
      licenseChallenge: i
    }));
  }
  requestLicense(e, t) {
    const s = this.config.keyLoadPolicy.default;
    return new Promise((i, n) => {
      const a = this.getLicenseServerUrlOrThrow(e.keySystem);
      this.log(`Sending license request to URL: ${a}`);
      const o = new XMLHttpRequest();
      o.responseType = "arraybuffer", o.onreadystatechange = () => {
        if (!this.hls || !e.mediaKeysSession)
          return n(new Error("invalid state"));
        if (o.readyState === 4)
          if (o.status === 200) {
            this._requestLicenseFailureCount = 0;
            let c = o.response;
            this.log(`License received ${c instanceof ArrayBuffer ? c.byteLength : c}`);
            const l = this.config.licenseResponseCallback;
            if (l)
              try {
                c = l.call(this.hls, o, a, e);
              } catch (u) {
                this.error(u);
              }
            i(c);
          } else {
            const c = s.errorRetry, l = c ? c.maxNumRetry : 0;
            if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > l || o.status >= 400 && o.status < 500)
              n(new je({
                type: X.KEY_SYSTEM_ERROR,
                details: D.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                decryptdata: e.decryptdata,
                fatal: !0,
                networkDetails: o,
                response: {
                  url: a,
                  data: void 0,
                  code: o.status,
                  text: o.statusText
                }
              }, `License Request XHR failed (${a}). Status: ${o.status} (${o.statusText})`));
            else {
              const u = l - this._requestLicenseFailureCount + 1;
              this.warn(`Retrying license request, ${u} attempts left`), this.requestLicense(e, t).then(i, n);
            }
          }
      }, e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(), e.licenseXhr = o, this.setupLicenseXHR(o, a, e, t).then(({
        xhr: c,
        licenseChallenge: l
      }) => {
        e.keySystem == Ee.PLAYREADY && (l = this.unpackPlayReadyKeyMessage(c, l)), c.send(l);
      }).catch(n);
    });
  }
  onDestroying() {
    this.unregisterListeners(), this._clear();
  }
  onMediaAttached(e, t) {
    if (!this.config.emeEnabled)
      return;
    const s = t.media;
    this.media = s, Be(s, "encrypted", this.onMediaEncrypted), Be(s, "waitingforkey", this.onWaitingForKey);
  }
  onMediaDetached() {
    const e = this.media;
    e && (We(e, "encrypted", this.onMediaEncrypted), We(e, "waitingforkey", this.onWaitingForKey), this.media = null, this.mediaKeys = null);
  }
  _clear() {
    var e;
    if (this._requestLicenseFailureCount = 0, this.keyIdToKeySessionPromise = {}, this.bannedKeyIds = {}, !this.mediaKeys && !this.mediaKeySessions.length)
      return;
    const t = this.media, s = this.mediaKeySessions.slice();
    this.mediaKeySessions = [], this.mediaKeys = null, jt.clearKeyUriToKeyIdMap();
    const i = s.length;
    ls.CDMCleanupPromise = Promise.all(s.map((n) => this.removeSession(n)).concat((t == null || (e = t.setMediaKeys(null)) == null ? void 0 : e.catch((n) => {
      this.log(`Could not clear media keys: ${n}`), this.hls && this.hls.trigger(m.ERROR, {
        type: X.OTHER_ERROR,
        details: D.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR,
        fatal: !1,
        error: new Error(`Could not clear media keys: ${n}`)
      });
    })) || Promise.resolve())).catch((n) => {
      this.log(`Could not close sessions and clear media keys: ${n}`), this.hls && this.hls.trigger(m.ERROR, {
        type: X.OTHER_ERROR,
        details: D.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
        fatal: !1,
        error: new Error(`Could not close sessions and clear media keys: ${n}`)
      });
    }).then(() => {
      i && this.log("finished closing key sessions and clearing media keys");
    });
  }
  onManifestLoading() {
    this.keyFormatPromise = null, this.bannedKeyIds = {};
  }
  onManifestLoaded(e, {
    sessionKeys: t
  }) {
    if (!(!t || !this.config.emeEnabled) && !this.keyFormatPromise) {
      const s = t.reduce((i, n) => (i.indexOf(n.keyFormat) === -1 && i.push(n.keyFormat), i), []);
      this.log(`Selecting key-system from session-keys ${s.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(s);
    }
  }
  removeSession(e) {
    const {
      mediaKeysSession: t,
      licenseXhr: s,
      decryptdata: i
    } = e;
    if (t) {
      this.log(`Remove licenses and keys and close session "${t.sessionId}" keyId: ${$e((i == null ? void 0 : i.keyId) || [])}`), e._onmessage && (t.removeEventListener("message", e._onmessage), e._onmessage = void 0), e._onkeystatuseschange && (t.removeEventListener("keystatuseschange", e._onkeystatuseschange), e._onkeystatuseschange = void 0), s && s.readyState !== XMLHttpRequest.DONE && s.abort(), e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0;
      const n = this.mediaKeySessions.indexOf(e);
      n > -1 && this.mediaKeySessions.splice(n, 1);
      const {
        keyStatusTimeouts: a
      } = e;
      a && Object.keys(a).forEach((l) => self.clearTimeout(a[l]));
      const {
        drmSystemOptions: o
      } = this.config;
      return (ud(o) ? new Promise((l, u) => {
        self.setTimeout(() => u(new Error("MediaKeySession.remove() timeout")), 8e3), t.remove().then(l).catch(u);
      }) : Promise.resolve()).catch((l) => {
        this.log(`Could not remove session: ${l}`), this.hls && this.hls.trigger(m.ERROR, {
          type: X.OTHER_ERROR,
          details: D.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR,
          fatal: !1,
          error: new Error(`Could not remove session: ${l}`)
        });
      }).then(() => t.close()).catch((l) => {
        this.log(`Could not close session: ${l}`), this.hls && this.hls.trigger(m.ERROR, {
          type: X.OTHER_ERROR,
          details: D.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
          fatal: !1,
          error: new Error(`Could not close session: ${l}`)
        });
      });
    }
    return Promise.resolve();
  }
}
ls.CDMCleanupPromise = void 0;
function ni(r) {
  if (!r)
    throw new Error("Could not read keyId of undefined decryptdata");
  if (r.keyId === null)
    throw new Error("keyId is null");
  return $e(r.keyId);
}
function Cg(r, e) {
  if (r.keyId && e.mediaKeysSession.keyStatuses.has(r.keyId))
    return e.mediaKeysSession.keyStatuses.get(r.keyId);
  if (r.matches(e.decryptdata))
    return e.keyStatus;
}
class je extends Error {
  constructor(e, t) {
    super(t), this.data = void 0, e.error || (e.error = new Error(t)), this.data = e, e.err = e.error;
  }
}
function Qa(r, e) {
  const t = r === "output-restricted", s = t ? D.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED : D.KEY_SYSTEM_STATUS_INTERNAL_ERROR;
  return new je({
    type: X.KEY_SYSTEM_ERROR,
    details: s,
    fatal: !1,
    decryptdata: e
  }, t ? "HDCP level output restricted" : `key status changed to "${r}"`);
}
class Pg {
  constructor(e) {
    this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  registerListeners() {
    this.hls.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.on(m.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListeners() {
    this.hls.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.off(m.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  destroy() {
    this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null;
  }
  onMediaAttaching(e, t) {
    const s = this.hls.config;
    if (s.capLevelOnFPSDrop) {
      const i = t.media instanceof self.HTMLVideoElement ? t.media : null;
      this.media = i, i && typeof i.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), s.fpsDroppedMonitoringPeriod);
    }
  }
  onMediaDetaching() {
    this.media = null;
  }
  checkFPS(e, t, s) {
    const i = performance.now();
    if (t) {
      if (this.lastTime) {
        const n = i - this.lastTime, a = s - this.lastDroppedFrames, o = t - this.lastDecodedFrames, c = 1e3 * a / n, l = this.hls;
        if (l.trigger(m.FPS_DROP, {
          currentDropped: a,
          currentDecoded: o,
          totalDroppedFrames: s
        }), c > 0 && a > l.config.fpsDroppedMonitoringThreshold * o) {
          let u = l.currentLevel;
          l.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u), u > 0 && (l.autoLevelCapping === -1 || l.autoLevelCapping >= u) && (u = u - 1, l.trigger(m.FPS_DROP_LEVEL_CAPPING, {
            level: u,
            droppedLevel: l.currentLevel
          }), l.autoLevelCapping = u, this.streamController.nextLevelSwitch());
        }
      }
      this.lastTime = i, this.lastDroppedFrames = s, this.lastDecodedFrames = t;
    }
  }
  checkFPSInterval() {
    const e = this.media;
    if (e)
      if (this.isVideoPlaybackQualityAvailable) {
        const t = e.getVideoPlaybackQuality();
        this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);
      } else
        this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount);
  }
}
function Kl(r, e) {
  let t;
  try {
    t = new Event("addtrack");
  } catch {
    t = document.createEvent("Event"), t.initEvent("addtrack", !1, !1);
  }
  t.track = r, e.dispatchEvent(t);
}
function Vl(r, e) {
  const t = r.mode;
  if (t === "disabled" && (r.mode = "hidden"), r.cues && !r.cues.getCueById(e.id))
    try {
      if (r.addCue(e), !r.cues.getCueById(e.id))
        throw new Error(`addCue is failed for: ${e}`);
    } catch (s) {
      ue.debug(`[texttrack-utils]: ${s}`);
      try {
        const i = new self.TextTrackCue(e.startTime, e.endTime, e.text);
        i.id = e.id, r.addCue(i);
      } catch (i) {
        ue.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`);
      }
    }
  t === "disabled" && (r.mode = t);
}
function rs(r, e) {
  const t = r.mode;
  if (t === "disabled" && (r.mode = "hidden"), r.cues)
    for (let s = r.cues.length; s--; )
      e && r.cues[s].removeEventListener("enter", e), r.removeCue(r.cues[s]);
  t === "disabled" && (r.mode = t);
}
function Wn(r, e, t, s) {
  const i = r.mode;
  if (i === "disabled" && (r.mode = "hidden"), r.cues && r.cues.length > 0) {
    const n = wg(r.cues, e, t);
    for (let a = 0; a < n.length; a++)
      (!s || s(n[a])) && r.removeCue(n[a]);
  }
  i === "disabled" && (r.mode = i);
}
function kg(r, e) {
  if (e <= r[0].startTime)
    return 0;
  const t = r.length - 1;
  if (e > r[t].endTime)
    return -1;
  let s = 0, i = t, n;
  for (; s <= i; )
    if (n = Math.floor((i + s) / 2), e < r[n].startTime)
      i = n - 1;
    else if (e > r[n].startTime && s < t)
      s = n + 1;
    else
      return n;
  return r[s].startTime - e < e - r[i].startTime ? s : i;
}
function wg(r, e, t) {
  const s = [], i = kg(r, e);
  if (i > -1)
    for (let n = i, a = r.length; n < a; n++) {
      const o = r[n];
      if (o.startTime >= e && o.endTime <= t)
        s.push(o);
      else if (o.startTime > t)
        return s;
    }
  return s;
}
function Ti(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) {
    const s = r[t];
    (s.kind === "subtitles" || s.kind === "captions") && s.label && e.push(r[t]);
  }
  return e;
}
class Og extends gr {
  constructor(e) {
    super(e, "subtitle-track-controller"), this.media = null, this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.asyncPollTrackChange = () => this.pollTrackChange(0), this.onTextTracksChanged = () => {
      if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively)
        return;
      let t = null;
      const s = Ti(this.media.textTracks);
      for (let n = 0; n < s.length; n++)
        if (s[n].mode === "hidden")
          t = s[n];
        else if (s[n].mode === "showing") {
          t = s[n];
          break;
        }
      const i = this.findTrackForTextTrack(t);
      this.subtitleTrack !== i && this.setSubtitleTrack(i);
    }, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, super.destroy();
  }
  get subtitleDisplay() {
    return this._subtitleDisplay;
  }
  set subtitleDisplay(e) {
    this._subtitleDisplay = e, this.trackId > -1 && this.toggleTrackModes();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.LEVEL_LOADING, this.onLevelLoading, this), e.off(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(m.ERROR, this.onError, this);
  }
  // Listen for subtitle track change, then extract the current track ID.
  onMediaAttached(e, t) {
    this.media = t.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
  }
  pollTrackChange(e) {
    self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, e);
  }
  onMediaDetaching(e, t) {
    const s = this.media;
    if (!s)
      return;
    const i = !!t.transferMedia;
    if (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || s.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), this.subtitleTrack = -1, this.media = null, i)
      return;
    Ti(s.textTracks).forEach((a) => {
      rs(a);
    });
  }
  onManifestLoading() {
    this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0;
  }
  // Fired whenever a new manifest is loaded.
  onManifestParsed(e, t) {
    this.tracks = t.subtitleTracks;
  }
  onSubtitleTrackLoaded(e, t) {
    const {
      id: s,
      groupId: i,
      details: n
    } = t, a = this.tracksInGroup[s];
    if (!a || a.groupId !== i) {
      this.warn(`Subtitle track with id:${s} and group:${i} not found in active group ${a == null ? void 0 : a.groupId}`);
      return;
    }
    const o = a.details;
    a.details = t.details, this.log(`Subtitle track ${s} "${a.name}" lang:${a.lang} group:${i} loaded [${n.startSN}-${n.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const s = t.subtitleGroups || null, i = this.groupIds;
    let n = this.currentTrack;
    if (!s || (i == null ? void 0 : i.length) !== (s == null ? void 0 : s.length) || s != null && s.some((a) => (i == null ? void 0 : i.indexOf(a)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const a = this.tracks.filter((u) => !s || s.indexOf(u.groupId) !== -1);
      if (a.length)
        this.selectDefaultTrack && !a.some((u) => u.default) && (this.selectDefaultTrack = !1), a.forEach((u, h) => {
          u.id = h;
        });
      else if (!n && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = a;
      const o = this.hls.config.subtitlePreference;
      if (!n && o) {
        this.selectDefaultTrack = !1;
        const u = pt(o, a);
        if (u > -1)
          n = a[u];
        else {
          const h = pt(o, this.tracks);
          n = this.tracks[h];
        }
      }
      let c = this.findTrackId(n);
      c === -1 && n && (c = this.findTrackId(null));
      const l = {
        subtitleTracks: a
      };
      this.log(`Updating subtitle tracks, ${a.length} track(s) found in "${s == null ? void 0 : s.join(",")}" group-id`), this.hls.trigger(m.SUBTITLE_TRACKS_UPDATED, l), c !== -1 && this.trackId === -1 && this.setSubtitleTrack(c);
    }
  }
  findTrackId(e) {
    const t = this.tracksInGroup, s = this.selectDefaultTrack;
    for (let i = 0; i < t.length; i++) {
      const n = t[i];
      if (!(s && !n.default || !s && !e) && (!e || Yt(n, e)))
        return i;
    }
    if (e) {
      for (let i = 0; i < t.length; i++) {
        const n = t[i];
        if (Us(e.attrs, n.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return i;
      }
      for (let i = 0; i < t.length; i++) {
        const n = t[i];
        if (Us(e.attrs, n.attrs, ["LANGUAGE"]))
          return i;
      }
    }
    return -1;
  }
  findTrackForTextTrack(e) {
    if (e) {
      const t = this.tracksInGroup;
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        if (Gn(i, e))
          return s;
      }
    }
    return -1;
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === re.SUBTITLE_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && this.checkRetry(t);
  }
  get allSubtitleTracks() {
    return this.tracks;
  }
  /** get alternate subtitle tracks list from playlist **/
  get subtitleTracks() {
    return this.tracksInGroup;
  }
  /** get/set index of the selected subtitle track (based on index in subtitle track lists) **/
  get subtitleTrack() {
    return this.trackId;
  }
  set subtitleTrack(e) {
    this.selectDefaultTrack = !1, this.setSubtitleTrack(e);
  }
  setSubtitleOption(e) {
    if (this.hls.config.subtitlePreference = e, e) {
      if (e.id === -1)
        return this.setSubtitleTrack(-1), null;
      const t = this.allSubtitleTracks;
      if (this.selectDefaultTrack = !1, t.length) {
        const s = this.currentTrack;
        if (s && Yt(e, s))
          return s;
        const i = pt(e, this.tracksInGroup);
        if (i > -1) {
          const n = this.tracksInGroup[i];
          return this.setSubtitleTrack(i), n;
        } else {
          if (s)
            return null;
          {
            const n = pt(e, t);
            if (n > -1)
              return t[n];
          }
        }
      }
    }
    return null;
  }
  loadPlaylist(e) {
    super.loadPlaylist(), this.shouldLoadPlaylist(this.currentTrack) && this.scheduleLoading(this.currentTrack, e);
  }
  loadingPlaylist(e, t) {
    super.loadingPlaylist(e, t);
    const s = e.id, i = e.groupId, n = this.getUrlWithDirectives(e.url, t), a = e.details, o = a == null ? void 0 : a.age;
    this.log(`Loading subtitle ${s} "${e.name}" lang:${e.lang} group:${i}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${o && a.live ? " age " + o.toFixed(1) + (a.type && " " + a.type || "") : ""} ${n}`), this.hls.trigger(m.SUBTITLE_TRACK_LOADING, {
      url: n,
      id: s,
      groupId: i,
      deliveryDirectives: t || null,
      track: e
    });
  }
  /**
   * Disables the old subtitleTrack and sets current mode on the next subtitleTrack.
   * This operates on the DOM textTracks.
   * A value of -1 will disable all subtitle tracks.
   */
  toggleTrackModes() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = Ti(e.textTracks), s = this.currentTrack;
    let i;
    if (s && (i = t.filter((n) => Gn(s, n))[0], i || this.warn(`Unable to find subtitle TextTrack with name "${s.name}" and language "${s.lang}"`)), [].slice.call(t).forEach((n) => {
      n.mode !== "disabled" && n !== i && (n.mode = "disabled");
    }), i) {
      const n = this.subtitleDisplay ? "showing" : "hidden";
      i.mode !== n && (i.mode = n);
    }
  }
  /**
   * This method is responsible for validating the subtitle index and periodically reloading if live.
   * Dispatches the SUBTITLE_TRACK_SWITCH event, which instructs the subtitle-stream-controller to load the selected track.
   */
  setSubtitleTrack(e) {
    const t = this.tracksInGroup;
    if (!this.media) {
      this.queuedDefaultTrack = e;
      return;
    }
    if (e < -1 || e >= t.length || !G(e)) {
      this.warn(`Invalid subtitle track id: ${e}`);
      return;
    }
    this.selectDefaultTrack = !1;
    const s = this.currentTrack, i = t[e] || null;
    if (this.trackId = e, this.currentTrack = i, this.toggleTrackModes(), !i) {
      this.hls.trigger(m.SUBTITLE_TRACK_SWITCH, {
        id: e
      });
      return;
    }
    const n = !!i.details && !i.details.live;
    if (e === this.trackId && i === s && n)
      return;
    this.log(`Switching to subtitle-track ${e}` + (i ? ` "${i.name}" lang:${i.lang} group:${i.groupId}` : ""));
    const {
      id: a,
      groupId: o = "",
      name: c,
      type: l,
      url: u
    } = i;
    this.hls.trigger(m.SUBTITLE_TRACK_SWITCH, {
      id: a,
      groupId: o,
      name: c,
      type: l,
      url: u
    });
    const h = this.switchParams(i.url, s == null ? void 0 : s.details, i.details);
    this.loadPlaylist(h);
  }
}
function Mg() {
  try {
    return crypto.randomUUID();
  } catch {
    try {
      const e = URL.createObjectURL(new Blob()), t = e.toString();
      return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1);
    } catch {
      let t = (/* @__PURE__ */ new Date()).getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
        const n = (t + Math.random() * 16) % 16 | 0;
        return t = Math.floor(t / 16), (i == "x" ? n : n & 3 | 8).toString(16);
      });
    }
  }
}
function Ps(r) {
  let e = 5381, t = r.length;
  for (; t; )
    e = e * 33 ^ r.charCodeAt(--t);
  return (e >>> 0).toString();
}
const cs = 0.025;
let ki = /* @__PURE__ */ function(r) {
  return r[r.Point = 0] = "Point", r[r.Range = 1] = "Range", r;
}({});
function Fg(r, e, t) {
  return `${r.identifier}-${t + 1}-${Ps(e)}`;
}
class Ng {
  constructor(e, t) {
    this.base = void 0, this._duration = null, this._timelineStart = null, this.appendInPlaceDisabled = void 0, this.appendInPlaceStarted = void 0, this.dateRange = void 0, this.hasPlayed = !1, this.cumulativeDuration = 0, this.resumeOffset = NaN, this.playoutLimit = NaN, this.restrictions = {
      skip: !1,
      jump: !1
    }, this.snapOptions = {
      out: !1,
      in: !1
    }, this.assetList = [], this.assetListLoader = void 0, this.assetListResponse = null, this.resumeAnchor = void 0, this.error = void 0, this.resetOnResume = void 0, this.base = t, this.dateRange = e, this.setDateRange(e);
  }
  setDateRange(e) {
    this.dateRange = e, this.resumeOffset = e.attr.optionalFloat("X-RESUME-OFFSET", this.resumeOffset), this.playoutLimit = e.attr.optionalFloat("X-PLAYOUT-LIMIT", this.playoutLimit), this.restrictions = e.attr.enumeratedStringList("X-RESTRICT", this.restrictions), this.snapOptions = e.attr.enumeratedStringList("X-SNAP", this.snapOptions);
  }
  reset() {
    var e;
    this.appendInPlaceStarted = !1, (e = this.assetListLoader) == null || e.destroy(), this.assetListLoader = void 0, this.supplementsPrimary || (this.assetListResponse = null, this.assetList = [], this._duration = null);
  }
  isAssetPastPlayoutLimit(e) {
    var t;
    if (e > 0 && e >= this.assetList.length)
      return !0;
    const s = this.playoutLimit;
    return e <= 0 || isNaN(s) ? !1 : s === 0 ? !0 : (((t = this.assetList[e]) == null ? void 0 : t.startOffset) || 0) > s;
  }
  findAssetIndex(e) {
    return this.assetList.indexOf(e);
  }
  get identifier() {
    return this.dateRange.id;
  }
  get startDate() {
    return this.dateRange.startDate;
  }
  get startTime() {
    const e = this.dateRange.startTime;
    if (this.snapOptions.out) {
      const t = this.dateRange.tagAnchor;
      if (t)
        return mn(e, t);
    }
    return e;
  }
  get startOffset() {
    return this.cue.pre ? 0 : this.startTime;
  }
  get startIsAligned() {
    if (this.startTime === 0 || this.snapOptions.out)
      return !0;
    const e = this.dateRange.tagAnchor;
    if (e) {
      const t = this.dateRange.startTime, s = mn(t, e);
      return t - s < 0.1;
    }
    return !1;
  }
  get resumptionOffset() {
    const e = this.resumeOffset, t = G(e) ? e : this.duration;
    return this.cumulativeDuration + t;
  }
  get resumeTime() {
    const e = this.startOffset + this.resumptionOffset;
    if (this.snapOptions.in) {
      const t = this.resumeAnchor;
      if (t)
        return mn(e, t);
    }
    return e;
  }
  get appendInPlace() {
    return this.appendInPlaceStarted ? !0 : this.appendInPlaceDisabled ? !1 : !!(!this.cue.once && !this.cue.pre && // preroll starts at startPosition before startPosition is known (live)
    this.startIsAligned && (isNaN(this.playoutLimit) && isNaN(this.resumeOffset) || this.resumeOffset && this.duration && Math.abs(this.resumeOffset - this.duration) < cs));
  }
  set appendInPlace(e) {
    if (this.appendInPlaceStarted) {
      this.resetOnResume = !e;
      return;
    }
    this.appendInPlaceDisabled = !e;
  }
  // Extended timeline start time
  get timelineStart() {
    return this._timelineStart !== null ? this._timelineStart : this.startTime;
  }
  set timelineStart(e) {
    this._timelineStart = e;
  }
  get duration() {
    const e = this.playoutLimit;
    let t;
    return this._duration !== null ? t = this._duration : this.dateRange.duration ? t = this.dateRange.duration : t = this.dateRange.plannedDuration || 0, !isNaN(e) && e < t && (t = e), t;
  }
  set duration(e) {
    this._duration = e;
  }
  get cue() {
    return this.dateRange.cue;
  }
  get timelineOccupancy() {
    return this.dateRange.attr["X-TIMELINE-OCCUPIES"] === "RANGE" ? ki.Range : ki.Point;
  }
  get supplementsPrimary() {
    return this.dateRange.attr["X-TIMELINE-STYLE"] === "PRIMARY";
  }
  get contentMayVary() {
    return this.dateRange.attr["X-CONTENT-MAY-VARY"] !== "NO";
  }
  get assetUrl() {
    return this.dateRange.attr["X-ASSET-URI"];
  }
  get assetListUrl() {
    return this.dateRange.attr["X-ASSET-LIST"];
  }
  get baseUrl() {
    return this.base.url;
  }
  get assetListLoaded() {
    return this.assetList.length > 0 || this.assetListResponse !== null;
  }
  toString() {
    return $g(this);
  }
}
function mn(r, e) {
  return r - e.start < e.duration / 2 && !(Math.abs(r - (e.start + e.duration)) < cs) ? e.start : e.start + e.duration;
}
function Hl(r, e, t) {
  const s = new self.URL(r, t);
  return s.protocol !== "data:" && s.searchParams.set("_HLS_primary_id", e), s;
}
function pn(r, e) {
  for (; (t = r.assetList[++e]) != null && t.error; )
    var t;
  return e;
}
function $g(r) {
  return `["${r.identifier}" ${r.cue.pre ? "<pre>" : r.cue.post ? "<post>" : ""}${r.timelineStart.toFixed(2)}-${r.resumeTime.toFixed(2)}]`;
}
function is(r) {
  const e = r.timelineStart, t = r.duration || 0;
  return `["${r.identifier}" ${e.toFixed(2)}-${(e + t).toFixed(2)}]`;
}
class Bg {
  constructor(e, t, s, i) {
    this.hls = void 0, this.interstitial = void 0, this.assetItem = void 0, this.tracks = null, this.hasDetails = !1, this.mediaAttached = null, this._currentTime = void 0, this._bufferedEosTime = void 0, this.checkPlayout = () => {
      this.reachedPlayout(this.currentTime) && this.hls && this.hls.trigger(m.PLAYOUT_LIMIT_REACHED, {});
    };
    const n = this.hls = new e(t);
    this.interstitial = s, this.assetItem = i;
    const a = () => {
      this.hasDetails = !0;
    };
    n.once(m.LEVEL_LOADED, a), n.once(m.AUDIO_TRACK_LOADED, a), n.once(m.SUBTITLE_TRACK_LOADED, a), n.on(m.MEDIA_ATTACHING, (o, {
      media: c
    }) => {
      this.removeMediaListeners(), this.mediaAttached = c, this.interstitial.playoutLimit && (c.addEventListener("timeupdate", this.checkPlayout), this.appendInPlace && n.on(m.BUFFER_APPENDED, () => {
        const u = this.bufferedEnd;
        this.reachedPlayout(u) && (this._bufferedEosTime = u, n.trigger(m.BUFFERED_TO_END, void 0));
      }));
    });
  }
  get appendInPlace() {
    return this.interstitial.appendInPlace;
  }
  loadSource() {
    const e = this.hls;
    if (e)
      if (e.url)
        e.levels.length && !e.started && e.startLoad(-1, !0);
      else {
        let t = this.assetItem.uri;
        try {
          t = Hl(t, e.config.primarySessionId || "").href;
        } catch {
        }
        e.loadSource(t);
      }
  }
  bufferedInPlaceToEnd(e) {
    var t;
    if (!this.appendInPlace)
      return !1;
    if ((t = this.hls) != null && t.bufferedToEnd)
      return !0;
    if (!e)
      return !1;
    const s = Math.min(this._bufferedEosTime || 1 / 0, this.duration), i = this.timelineOffset, n = te.bufferInfo(e, i, 0);
    return this.getAssetTime(n.end) >= s - 0.02;
  }
  reachedPlayout(e) {
    const s = this.interstitial.playoutLimit;
    return this.startOffset + e >= s;
  }
  get destroyed() {
    var e;
    return !((e = this.hls) != null && e.userConfig);
  }
  get assetId() {
    return this.assetItem.identifier;
  }
  get interstitialId() {
    return this.assetItem.parentIdentifier;
  }
  get media() {
    var e;
    return ((e = this.hls) == null ? void 0 : e.media) || null;
  }
  get bufferedEnd() {
    const e = this.media || this.mediaAttached;
    if (!e)
      return this._bufferedEosTime ? this._bufferedEosTime : this.currentTime;
    const t = te.bufferInfo(e, e.currentTime, 1e-3);
    return this.getAssetTime(t.end);
  }
  get currentTime() {
    const e = this.media || this.mediaAttached;
    return e ? this.getAssetTime(e.currentTime) : this._currentTime || 0;
  }
  get duration() {
    const e = this.assetItem.duration;
    if (!e)
      return 0;
    const t = this.interstitial.playoutLimit;
    if (t) {
      const s = t - this.startOffset;
      if (s > 0 && s < e)
        return s;
    }
    return e;
  }
  get remaining() {
    const e = this.duration;
    return e ? Math.max(0, e - this.currentTime) : 0;
  }
  get startOffset() {
    return this.assetItem.startOffset;
  }
  get timelineOffset() {
    var e;
    return ((e = this.hls) == null ? void 0 : e.config.timelineOffset) || 0;
  }
  set timelineOffset(e) {
    const t = this.timelineOffset;
    if (e !== t) {
      const s = e - t;
      if (Math.abs(s) > 1 / 9e4 && this.hls) {
        if (this.hasDetails)
          throw new Error("Cannot set timelineOffset after playlists are loaded");
        this.hls.config.timelineOffset = e;
      }
    }
  }
  getAssetTime(e) {
    const t = this.timelineOffset, s = this.duration;
    return Math.min(Math.max(0, e - t), s);
  }
  removeMediaListeners() {
    const e = this.mediaAttached;
    e && (this._currentTime = e.currentTime, this.bufferSnapShot(), e.removeEventListener("timeupdate", this.checkPlayout));
  }
  bufferSnapShot() {
    if (this.mediaAttached) {
      var e;
      (e = this.hls) != null && e.bufferedToEnd && (this._bufferedEosTime = this.bufferedEnd);
    }
  }
  destroy() {
    this.removeMediaListeners(), this.hls && this.hls.destroy(), this.hls = null, this.tracks = this.mediaAttached = this.checkPlayout = null;
  }
  attachMedia(e) {
    var t;
    this.loadSource(), (t = this.hls) == null || t.attachMedia(e);
  }
  detachMedia() {
    var e;
    this.removeMediaListeners(), this.mediaAttached = null, (e = this.hls) == null || e.detachMedia();
  }
  resumeBuffering() {
    var e;
    (e = this.hls) == null || e.resumeBuffering();
  }
  pauseBuffering() {
    var e;
    (e = this.hls) == null || e.pauseBuffering();
  }
  transferMedia() {
    var e;
    return this.bufferSnapShot(), ((e = this.hls) == null ? void 0 : e.transferMedia()) || null;
  }
  resetDetails() {
    const e = this.hls;
    if (e && this.hasDetails) {
      e.stopLoad();
      const t = (s) => delete s.details;
      e.levels.forEach(t), e.allAudioTracks.forEach(t), e.allSubtitleTracks.forEach(t), this.hasDetails = !1;
    }
  }
  on(e, t, s) {
    var i;
    (i = this.hls) == null || i.on(e, t);
  }
  once(e, t, s) {
    var i;
    (i = this.hls) == null || i.once(e, t);
  }
  off(e, t, s) {
    var i;
    (i = this.hls) == null || i.off(e, t);
  }
  toString() {
    var e;
    return `HlsAssetPlayer: ${is(this.assetItem)} ${(e = this.hls) == null ? void 0 : e.sessionId} ${this.appendInPlace ? "append-in-place" : ""}`;
  }
}
const Za = 0.033;
class Ug extends nt {
  constructor(e, t) {
    super("interstitials-sched", t), this.onScheduleUpdate = void 0, this.eventMap = {}, this.events = null, this.items = null, this.durations = {
      primary: 0,
      playout: 0,
      integrated: 0
    }, this.onScheduleUpdate = e;
  }
  destroy() {
    this.reset(), this.onScheduleUpdate = null;
  }
  reset() {
    this.eventMap = {}, this.setDurations(0, 0, 0), this.events && this.events.forEach((e) => e.reset()), this.events = this.items = null;
  }
  resetErrorsInRange(e, t) {
    return this.events ? this.events.reduce((s, i) => e <= i.startOffset && t > i.startOffset ? (delete i.error, s + 1) : s, 0) : 0;
  }
  get duration() {
    const e = this.items;
    return e ? e[e.length - 1].end : 0;
  }
  get length() {
    return this.items ? this.items.length : 0;
  }
  getEvent(e) {
    return e && this.eventMap[e] || null;
  }
  hasEvent(e) {
    return e in this.eventMap;
  }
  findItemIndex(e, t) {
    if (e.event)
      return this.findEventIndex(e.event.identifier);
    let s = -1;
    e.nextEvent ? s = this.findEventIndex(e.nextEvent.identifier) - 1 : e.previousEvent && (s = this.findEventIndex(e.previousEvent.identifier) + 1);
    const i = this.items;
    if (i)
      for (i[s] || (t === void 0 && (t = e.start), s = this.findItemIndexAtTime(t)); s >= 0 && (n = i[s]) != null && n.event; ) {
        var n;
        s--;
      }
    return s;
  }
  findItemIndexAtTime(e, t) {
    const s = this.items;
    if (s)
      for (let i = 0; i < s.length; i++) {
        let n = s[i];
        if (t && t !== "primary" && (n = n[t]), e === n.start || e > n.start && e < n.end)
          return i;
      }
    return -1;
  }
  findJumpRestrictedIndex(e, t) {
    const s = this.items;
    if (s)
      for (let i = e; i <= t && s[i]; i++) {
        const n = s[i].event;
        if (n != null && n.restrictions.jump && !n.appendInPlace)
          return i;
      }
    return -1;
  }
  findEventIndex(e) {
    const t = this.items;
    if (t)
      for (let i = t.length; i--; ) {
        var s;
        if (((s = t[i].event) == null ? void 0 : s.identifier) === e)
          return i;
      }
    return -1;
  }
  findAssetIndex(e, t) {
    const s = e.assetList, i = s.length;
    if (i > 1)
      for (let n = 0; n < i; n++) {
        const a = s[n];
        if (!a.error) {
          const o = a.timelineStart;
          if (t === o || t > o && (t < o + (a.duration || 0) || n === i - 1))
            return n;
        }
      }
    return 0;
  }
  get assetIdAtEnd() {
    var e;
    const t = (e = this.items) == null || (e = e[this.length - 1]) == null ? void 0 : e.event;
    if (t) {
      const s = t.assetList, i = s[s.length - 1];
      if (i)
        return i.identifier;
    }
    return null;
  }
  parseInterstitialDateRanges(e, t) {
    const s = e.main.details, {
      dateRanges: i
    } = s, n = this.events, a = this.parseDateRanges(i, {
      url: s.url
    }, t), o = Object.keys(i), c = n ? n.filter((l) => !o.includes(l.identifier)) : [];
    a.length && a.sort((l, u) => {
      const h = l.cue.pre, d = l.cue.post, f = u.cue.pre, g = u.cue.post;
      if (h && !f)
        return -1;
      if (f && !h || d && !g)
        return 1;
      if (g && !d)
        return -1;
      if (!h && !f && !d && !g) {
        const p = l.startTime, y = u.startTime;
        if (p !== y)
          return p - y;
      }
      return l.dateRange.tagOrder - u.dateRange.tagOrder;
    }), this.events = a, c.forEach((l) => {
      this.removeEvent(l);
    }), this.updateSchedule(e, c);
  }
  updateSchedule(e, t = [], s = !1) {
    const i = this.events || [];
    if (i.length || t.length || this.length < 2) {
      const n = this.items, a = this.parseSchedule(i, e);
      (s || t.length || (n == null ? void 0 : n.length) !== a.length || a.some((c, l) => Math.abs(c.playout.start - n[l].playout.start) > 5e-3 || Math.abs(c.playout.end - n[l].playout.end) > 5e-3)) && (this.items = a, this.onScheduleUpdate(t, n));
    }
  }
  parseDateRanges(e, t, s) {
    const i = [], n = Object.keys(e);
    for (let a = 0; a < n.length; a++) {
      const o = n[a], c = e[o];
      if (c.isInterstitial) {
        let l = this.eventMap[o];
        l ? l.setDateRange(c) : (l = new Ng(c, t), this.eventMap[o] = l, s === !1 && (l.appendInPlace = s)), i.push(l);
      }
    }
    return i;
  }
  parseSchedule(e, t) {
    const s = [], i = t.main.details, n = i.live ? 1 / 0 : i.edge;
    let a = 0;
    if (e = e.filter((c) => !c.error && !(c.cue.once && c.hasPlayed)), e.length) {
      this.resolveOffsets(e, t);
      let c = 0, l = 0;
      if (e.forEach((u, h) => {
        const d = u.cue.pre, f = u.cue.post, g = e[h - 1] || null, p = u.appendInPlace, y = f ? n : u.startOffset, E = u.duration, T = u.timelineOccupancy === ki.Range ? E : 0, S = u.resumptionOffset, v = (g == null ? void 0 : g.startTime) === y, x = y + u.cumulativeDuration;
        let C = p ? x + E : y + S;
        if (d || !f && y <= 0) {
          const R = l;
          l += T, u.timelineStart = x;
          const b = a;
          a += E, s.push({
            event: u,
            start: x,
            end: C,
            playout: {
              start: b,
              end: a
            },
            integrated: {
              start: R,
              end: l
            }
          });
        } else if (y <= n) {
          if (!v) {
            const L = y - c;
            if (L > Za) {
              const P = c, M = l;
              l += L;
              const U = a;
              a += L;
              const H = {
                previousEvent: e[h - 1] || null,
                nextEvent: u,
                start: P,
                end: P + L,
                playout: {
                  start: U,
                  end: a
                },
                integrated: {
                  start: M,
                  end: l
                }
              };
              s.push(H);
            } else L > 0 && g && (g.cumulativeDuration += L, s[s.length - 1].end = y);
          }
          f && (C = x), u.timelineStart = x;
          const R = l;
          l += T;
          const b = a;
          a += E, s.push({
            event: u,
            start: x,
            end: C,
            playout: {
              start: b,
              end: a
            },
            integrated: {
              start: R,
              end: l
            }
          });
        } else
          return;
        const A = u.resumeTime;
        f || A > n ? c = n : c = A;
      }), c < n) {
        var o;
        const u = c, h = l, d = n - c;
        l += d;
        const f = a;
        a += d, s.push({
          previousEvent: ((o = s[s.length - 1]) == null ? void 0 : o.event) || null,
          nextEvent: null,
          start: c,
          end: u + d,
          playout: {
            start: f,
            end: a
          },
          integrated: {
            start: h,
            end: l
          }
        });
      }
      this.setDurations(n, a, l);
    } else
      s.push({
        previousEvent: null,
        nextEvent: null,
        start: 0,
        end: n,
        playout: {
          start: 0,
          end: n
        },
        integrated: {
          start: 0,
          end: n
        }
      }), this.setDurations(n, n, n);
    return s;
  }
  setDurations(e, t, s) {
    this.durations = {
      primary: e,
      playout: t,
      integrated: s
    };
  }
  resolveOffsets(e, t) {
    const s = t.main.details, i = s.live ? 1 / 0 : s.edge;
    let n = 0, a = -1;
    e.forEach((o, c) => {
      const l = o.cue.pre, u = o.cue.post, h = l ? 0 : u ? i : o.startTime;
      this.updateAssetDurations(o), a === h ? o.cumulativeDuration = n : (n = 0, a = h), !u && o.snapOptions.in && (o.resumeAnchor = zt(null, s.fragments, o.startOffset + o.resumptionOffset, 0, 0) || void 0), o.appendInPlace && !o.appendInPlaceStarted && (this.primaryCanResumeInPlaceAt(o, t) || (o.appendInPlace = !1)), !o.appendInPlace && c + 1 < e.length && e[c + 1].startTime - e[c].resumeTime < Za && (e[c + 1].appendInPlace = !1, e[c + 1].appendInPlace && this.warn(`Could not change append strategy for abutting event ${o}`));
      const f = G(o.resumeOffset) ? o.resumeOffset : o.duration;
      n += f;
    });
  }
  primaryCanResumeInPlaceAt(e, t) {
    const s = e.resumeTime, i = e.startTime + e.resumptionOffset;
    return Math.abs(s - i) > cs ? (this.log(`"${e.identifier}" resumption ${s} not aligned with estimated timeline end ${i}`), !1) : !Object.keys(t).some((a) => {
      const o = t[a].details, c = o.edge;
      if (s >= c)
        return this.log(`"${e.identifier}" resumption ${s} past ${a} playlist end ${c}`), !1;
      const l = zt(null, o.fragments, s);
      if (!l)
        return this.log(`"${e.identifier}" resumption ${s} does not align with any fragments in ${a} playlist (${o.fragStart}-${o.fragmentEnd})`), !0;
      const u = a === "audio" ? 0.175 : 0;
      return Math.abs(l.start - s) < cs + u || Math.abs(l.end - s) < cs + u ? !1 : (this.log(`"${e.identifier}" resumption ${s} not aligned with ${a} fragment bounds (${l.start}-${l.end} sn: ${l.sn} cc: ${l.cc})`), !0);
    });
  }
  updateAssetDurations(e) {
    if (!e.assetListLoaded)
      return;
    const t = e.timelineStart;
    let s = 0, i = !1, n = !1;
    for (let a = 0; a < e.assetList.length; a++) {
      const o = e.assetList[a], c = t + s;
      o.startOffset = s, o.timelineStart = c, i || (i = o.duration === null), n || (n = !!o.error);
      const l = o.error ? 0 : o.duration || 0;
      s += l;
    }
    i && !n ? e.duration = Math.max(s, e.duration) : e.duration = s;
  }
  removeEvent(e) {
    e.reset(), delete this.eventMap[e.identifier];
  }
}
function rt(r) {
  return `[${r.event ? '"' + r.event.identifier + '"' : "primary"}: ${r.start.toFixed(2)}-${r.end.toFixed(2)}]`;
}
class Gg {
  constructor(e) {
    this.hls = void 0, this.hls = e;
  }
  destroy() {
    this.hls = null;
  }
  loadAssetList(e, t) {
    const s = e.assetListUrl;
    let i;
    try {
      i = Hl(s, this.hls.sessionId, e.baseUrl);
    } catch (d) {
      const f = this.assignAssetListError(e, D.ASSET_LIST_LOAD_ERROR, d, s);
      this.hls.trigger(m.ERROR, f);
      return;
    }
    t && i.protocol !== "data:" && i.searchParams.set("_HLS_start_offset", "" + t);
    const n = this.hls.config, a = n.loader, o = new a(n), c = {
      responseType: "json",
      url: i.href
    }, l = n.interstitialAssetListLoadPolicy.default, u = {
      loadPolicy: l,
      timeout: l.maxLoadTimeMs,
      maxRetry: 0,
      retryDelay: 0,
      maxRetryDelay: 0
    }, h = {
      onSuccess: (d, f, g, p) => {
        const y = d.data, E = y == null ? void 0 : y.ASSETS;
        if (!Array.isArray(E)) {
          const T = this.assignAssetListError(e, D.ASSET_LIST_PARSING_ERROR, new Error("Invalid interstitial asset list"), g.url, f, p);
          this.hls.trigger(m.ERROR, T);
          return;
        }
        e.assetListResponse = y, this.hls.trigger(m.ASSET_LIST_LOADED, {
          event: e,
          assetListResponse: y,
          networkDetails: p
        });
      },
      onError: (d, f, g, p) => {
        const y = this.assignAssetListError(e, D.ASSET_LIST_LOAD_ERROR, new Error(`Error loading X-ASSET-LIST: HTTP status ${d.code} ${d.text} (${f.url})`), f.url, p, g);
        this.hls.trigger(m.ERROR, y);
      },
      onTimeout: (d, f, g) => {
        const p = this.assignAssetListError(e, D.ASSET_LIST_LOAD_TIMEOUT, new Error(`Timeout loading X-ASSET-LIST (${f.url})`), f.url, d, g);
        this.hls.trigger(m.ERROR, p);
      }
    };
    return o.load(c, u, h), this.hls.trigger(m.ASSET_LIST_LOADING, {
      event: e
    }), o;
  }
  assignAssetListError(e, t, s, i, n, a) {
    return e.error = s, {
      type: X.NETWORK_ERROR,
      details: t,
      fatal: !1,
      interstitial: e,
      url: i,
      error: s,
      networkDetails: a,
      stats: n
    };
  }
}
function Ja(r) {
  r == null || r.play().catch(() => {
  });
}
function ri(r, e) {
  return `[${r}] Advancing timeline position to ${e}`;
}
class Kg extends nt {
  constructor(e, t) {
    super("interstitials", e.logger), this.HlsPlayerClass = void 0, this.hls = void 0, this.assetListLoader = void 0, this.mediaSelection = null, this.altSelection = null, this.media = null, this.detachedData = null, this.requiredTracks = null, this.manager = null, this.playerQueue = [], this.bufferedPos = -1, this.timelinePos = -1, this.schedule = void 0, this.playingItem = null, this.bufferingItem = null, this.waitingItem = null, this.endedItem = null, this.playingAsset = null, this.endedAsset = null, this.bufferingAsset = null, this.shouldPlay = !1, this.onPlay = () => {
      this.shouldPlay = !0;
    }, this.onPause = () => {
      this.shouldPlay = !1;
    }, this.onSeeking = () => {
      const s = this.currentTime;
      if (s === void 0 || this.playbackDisabled || !this.schedule)
        return;
      const i = s - this.timelinePos;
      if (Math.abs(i) < 1 / 7056e5)
        return;
      const a = i <= -0.01;
      this.timelinePos = s, this.bufferedPos = s;
      const o = this.playingItem;
      if (!o) {
        this.checkBuffer();
        return;
      }
      if (a && this.schedule.resetErrorsInRange(s, s - i) && this.updateSchedule(!0), this.checkBuffer(), a && s < o.start || s >= o.end) {
        var c;
        const f = this.findItemIndex(o);
        let g = this.schedule.findItemIndexAtTime(s);
        if (g === -1 && (g = f + (a ? -1 : 1), this.log(`seeked ${a ? "back " : ""}to position not covered by schedule ${s} (resolving from ${f} to ${g})`)), !this.isInterstitial(o) && (c = this.media) != null && c.paused && (this.shouldPlay = !1), !a && g > f) {
          const p = this.schedule.findJumpRestrictedIndex(f + 1, g);
          if (p > f) {
            this.setSchedulePosition(p);
            return;
          }
        }
        this.setSchedulePosition(g);
        return;
      }
      const l = this.playingAsset;
      if (!l) {
        if (this.playingLastItem && this.isInterstitial(o)) {
          const f = o.event.assetList[0];
          f && (this.endedItem = this.playingItem, this.playingItem = null, this.setScheduleToAssetAtTime(s, f));
        }
        return;
      }
      const u = l.timelineStart, h = l.duration || 0;
      if (a && s < u || s >= u + h) {
        var d;
        (d = o.event) != null && d.appendInPlace && (this.clearInterstitial(o.event, o), this.flushFrontBuffer(s)), this.setScheduleToAssetAtTime(s, l);
      }
    }, this.onTimeupdate = () => {
      const s = this.currentTime;
      if (s === void 0 || this.playbackDisabled)
        return;
      if (s > this.timelinePos)
        this.timelinePos = s, s > this.bufferedPos && this.checkBuffer();
      else
        return;
      const i = this.playingItem;
      if (!i || this.playingLastItem)
        return;
      if (s >= i.end) {
        this.timelinePos = i.end;
        const o = this.findItemIndex(i);
        this.setSchedulePosition(o + 1);
      }
      const n = this.playingAsset;
      if (!n)
        return;
      const a = n.timelineStart + (n.duration || 0);
      s >= a && this.setScheduleToAssetAtTime(s, n);
    }, this.onScheduleUpdate = (s, i) => {
      const n = this.schedule;
      if (!n)
        return;
      const a = this.playingItem, o = n.events || [], c = n.items || [], l = n.durations, u = s.map((p) => p.identifier), h = !!(o.length || u.length);
      (h || i) && this.log(`INTERSTITIALS_UPDATED (${o.length}): ${o}
Schedule: ${c.map((p) => rt(p))} pos: ${this.timelinePos}`), u.length && this.log(`Removed events ${u}`);
      let d = null, f = null;
      a && (d = this.updateItem(a, this.timelinePos), this.itemsMatch(a, d) ? this.playingItem = d : this.waitingItem = this.endedItem = null), this.waitingItem = this.updateItem(this.waitingItem), this.endedItem = this.updateItem(this.endedItem);
      const g = this.bufferingItem;
      if (g && (f = this.updateItem(g, this.bufferedPos), this.itemsMatch(g, f) ? this.bufferingItem = f : g.event && (this.bufferingItem = this.playingItem, this.clearInterstitial(g.event, null))), s.forEach((p) => {
        p.assetList.forEach((y) => {
          this.clearAssetPlayer(y.identifier, null);
        });
      }), this.playerQueue.forEach((p) => {
        if (p.interstitial.appendInPlace) {
          const y = p.assetItem.timelineStart, E = p.timelineOffset - y;
          if (E)
            try {
              p.timelineOffset = y;
            } catch (T) {
              Math.abs(E) > cs && this.warn(`${T} ("${p.assetId}" ${p.timelineOffset}->${y})`);
            }
        }
      }), h || i) {
        if (this.hls.trigger(m.INTERSTITIALS_UPDATED, {
          events: o.slice(0),
          schedule: c.slice(0),
          durations: l,
          removedIds: u
        }), this.isInterstitial(a) && u.includes(a.event.identifier)) {
          this.warn(`Interstitial "${a.event.identifier}" removed while playing`), this.primaryFallback(a.event);
          return;
        }
        a && this.trimInPlace(d, a), g && f !== d && this.trimInPlace(f, g), this.checkBuffer();
      }
    }, this.hls = e, this.HlsPlayerClass = t, this.assetListLoader = new Gg(e), this.schedule = new Ug(this.onScheduleUpdate, e.logger), this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e && (e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(m.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), e.on(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(m.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), e.on(m.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e.on(m.ASSET_LIST_LOADED, this.onAssetListLoaded, this), e.on(m.BUFFER_APPENDED, this.onBufferAppended, this), e.on(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(m.BUFFERED_TO_END, this.onBufferedToEnd, this), e.on(m.MEDIA_ENDED, this.onMediaEnded, this), e.on(m.ERROR, this.onError, this), e.on(m.DESTROYING, this.onDestroying, this));
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(m.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), e.off(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(m.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), e.off(m.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e.off(m.ASSET_LIST_LOADED, this.onAssetListLoaded, this), e.off(m.BUFFER_CODECS, this.onBufferCodecs, this), e.off(m.BUFFER_APPENDED, this.onBufferAppended, this), e.off(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(m.BUFFERED_TO_END, this.onBufferedToEnd, this), e.off(m.MEDIA_ENDED, this.onMediaEnded, this), e.off(m.ERROR, this.onError, this), e.off(m.DESTROYING, this.onDestroying, this));
  }
  startLoad() {
    this.resumeBuffering();
  }
  stopLoad() {
    this.pauseBuffering();
  }
  resumeBuffering() {
    var e;
    (e = this.getBufferingPlayer()) == null || e.resumeBuffering();
  }
  pauseBuffering() {
    var e;
    (e = this.getBufferingPlayer()) == null || e.pauseBuffering();
  }
  destroy() {
    this.unregisterListeners(), this.stopLoad(), this.assetListLoader && this.assetListLoader.destroy(), this.emptyPlayerQueue(), this.clearScheduleState(), this.schedule && this.schedule.destroy(), this.media = this.detachedData = this.mediaSelection = this.requiredTracks = this.altSelection = this.schedule = this.manager = null, this.hls = this.HlsPlayerClass = this.log = null, this.assetListLoader = null, this.onPlay = this.onPause = this.onSeeking = this.onTimeupdate = null, this.onScheduleUpdate = null;
  }
  onDestroying() {
    const e = this.primaryMedia || this.media;
    e && this.removeMediaListeners(e);
  }
  removeMediaListeners(e) {
    We(e, "play", this.onPlay), We(e, "pause", this.onPause), We(e, "seeking", this.onSeeking), We(e, "timeupdate", this.onTimeupdate);
  }
  onMediaAttaching(e, t) {
    const s = this.media = t.media;
    Be(s, "seeking", this.onSeeking), Be(s, "timeupdate", this.onTimeupdate), Be(s, "play", this.onPlay), Be(s, "pause", this.onPause);
  }
  onMediaAttached(e, t) {
    const s = this.effectivePlayingItem, i = this.detachedData;
    if (this.detachedData = null, s === null)
      this.checkStart();
    else if (!i) {
      this.clearScheduleState();
      const n = this.findItemIndex(s);
      this.setSchedulePosition(n);
    }
  }
  clearScheduleState() {
    this.log("clear schedule state"), this.playingItem = this.bufferingItem = this.waitingItem = this.endedItem = this.playingAsset = this.endedAsset = this.bufferingAsset = null;
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia, i = this.media;
    if (this.media = null, !s && (i && this.removeMediaListeners(i), this.detachedData)) {
      const n = this.getBufferingPlayer();
      n && (this.log(`Removing schedule state for detachedData and ${n}`), this.playingAsset = this.endedAsset = this.bufferingAsset = this.bufferingItem = this.waitingItem = this.detachedData = null, n.detachMedia()), this.shouldPlay = !1;
    }
  }
  get interstitialsManager() {
    if (!this.hls)
      return null;
    if (this.manager)
      return this.manager;
    const e = this, t = () => e.bufferingItem || e.waitingItem, s = (h) => h && e.getAssetPlayer(h.identifier), i = (h, d, f, g, p) => {
      if (h) {
        let y = h[d].start;
        const E = h.event;
        if (E) {
          if (d === "playout" || E.timelineOccupancy !== ki.Point) {
            const T = s(f);
            (T == null ? void 0 : T.interstitial) === E && (y += T.assetItem.startOffset + T[p]);
          }
        } else {
          const T = g === "bufferedPos" ? a() : e[g];
          y += T - h.start;
        }
        return y;
      }
      return 0;
    }, n = (h, d) => {
      var f;
      if (h !== 0 && d !== "primary" && (f = e.schedule) != null && f.length) {
        var g;
        const p = e.schedule.findItemIndexAtTime(h), y = (g = e.schedule.items) == null ? void 0 : g[p];
        if (y) {
          const E = y[d].start - y.start;
          return h + E;
        }
      }
      return h;
    }, a = () => {
      const h = e.bufferedPos;
      return h === Number.MAX_VALUE ? o("primary") : Math.max(h, 0);
    }, o = (h) => {
      var d, f;
      return (d = e.primaryDetails) != null && d.live ? e.primaryDetails.edge : ((f = e.schedule) == null ? void 0 : f.durations[h]) || 0;
    }, c = (h, d) => {
      var f, g;
      const p = e.effectivePlayingItem;
      if (p != null && (f = p.event) != null && f.restrictions.skip || !e.schedule)
        return;
      e.log(`seek to ${h} "${d}"`);
      const y = e.effectivePlayingItem, E = e.schedule.findItemIndexAtTime(h, d), T = (g = e.schedule.items) == null ? void 0 : g[E], S = e.getBufferingPlayer(), v = S == null ? void 0 : S.interstitial, x = v == null ? void 0 : v.appendInPlace, C = y && e.itemsMatch(y, T);
      if (y && (x || C)) {
        const A = s(e.playingAsset), R = (A == null ? void 0 : A.media) || e.primaryMedia;
        if (R) {
          const b = d === "primary" ? R.currentTime : i(y, d, e.playingAsset, "timelinePos", "currentTime"), L = h - b, P = (x ? b : R.currentTime) + L;
          if (P >= 0 && (!A || x || P <= A.duration)) {
            R.currentTime = P;
            return;
          }
        }
      }
      if (T) {
        let A = h;
        if (d !== "primary") {
          const b = T[d].start, L = h - b;
          A = T.start + L;
        }
        const R = !e.isInterstitial(T);
        if ((!e.isInterstitial(y) || y.event.appendInPlace) && (R || T.event.appendInPlace)) {
          const b = e.media || (x ? S == null ? void 0 : S.media : null);
          b && (b.currentTime = A);
        } else if (y) {
          const b = e.findItemIndex(y);
          if (E > b) {
            const P = e.schedule.findJumpRestrictedIndex(b + 1, E);
            if (P > b) {
              e.setSchedulePosition(P);
              return;
            }
          }
          let L = 0;
          if (R)
            e.timelinePos = A, e.checkBuffer();
          else {
            const P = T.event.assetList, M = h - (T[d] || T).start;
            for (let U = P.length; U--; ) {
              const H = P[U];
              if (H.duration && M >= H.startOffset && M < H.startOffset + H.duration) {
                L = U;
                break;
              }
            }
          }
          e.setSchedulePosition(E, L);
        }
      }
    }, l = () => {
      const h = e.effectivePlayingItem;
      if (e.isInterstitial(h))
        return h;
      const d = t();
      return e.isInterstitial(d) ? d : null;
    }, u = {
      get bufferedEnd() {
        const h = t(), d = e.bufferingItem;
        if (d && d === h) {
          var f;
          return i(d, "playout", e.bufferingAsset, "bufferedPos", "bufferedEnd") - d.playout.start || ((f = e.bufferingAsset) == null ? void 0 : f.startOffset) || 0;
        }
        return 0;
      },
      get currentTime() {
        const h = l(), d = e.effectivePlayingItem;
        return d && d === h ? i(d, "playout", e.effectivePlayingAsset, "timelinePos", "currentTime") - d.playout.start : 0;
      },
      set currentTime(h) {
        const d = l(), f = e.effectivePlayingItem;
        f && f === d && c(h + f.playout.start, "playout");
      },
      get duration() {
        const h = l();
        return h ? h.playout.end - h.playout.start : 0;
      },
      get assetPlayers() {
        var h;
        const d = (h = l()) == null ? void 0 : h.event.assetList;
        return d ? d.map((f) => e.getAssetPlayer(f.identifier)) : [];
      },
      get playingIndex() {
        var h;
        const d = (h = l()) == null ? void 0 : h.event;
        return d && e.effectivePlayingAsset ? d.findAssetIndex(e.effectivePlayingAsset) : -1;
      },
      get scheduleItem() {
        return l();
      }
    };
    return this.manager = {
      get events() {
        var h;
        return ((h = e.schedule) == null || (h = h.events) == null ? void 0 : h.slice(0)) || [];
      },
      get schedule() {
        var h;
        return ((h = e.schedule) == null || (h = h.items) == null ? void 0 : h.slice(0)) || [];
      },
      get interstitialPlayer() {
        return l() ? u : null;
      },
      get playerQueue() {
        return e.playerQueue.slice(0);
      },
      get bufferingAsset() {
        return e.bufferingAsset;
      },
      get bufferingItem() {
        return t();
      },
      get bufferingIndex() {
        const h = t();
        return e.findItemIndex(h);
      },
      get playingAsset() {
        return e.effectivePlayingAsset;
      },
      get playingItem() {
        return e.effectivePlayingItem;
      },
      get playingIndex() {
        const h = e.effectivePlayingItem;
        return e.findItemIndex(h);
      },
      primary: {
        get bufferedEnd() {
          return a();
        },
        get currentTime() {
          const h = e.timelinePos;
          return h > 0 ? h : 0;
        },
        set currentTime(h) {
          c(h, "primary");
        },
        get duration() {
          return o("primary");
        },
        get seekableStart() {
          var h;
          return ((h = e.primaryDetails) == null ? void 0 : h.fragmentStart) || 0;
        }
      },
      integrated: {
        get bufferedEnd() {
          return i(t(), "integrated", e.bufferingAsset, "bufferedPos", "bufferedEnd");
        },
        get currentTime() {
          return i(e.effectivePlayingItem, "integrated", e.effectivePlayingAsset, "timelinePos", "currentTime");
        },
        set currentTime(h) {
          c(h, "integrated");
        },
        get duration() {
          return o("integrated");
        },
        get seekableStart() {
          var h;
          return n(((h = e.primaryDetails) == null ? void 0 : h.fragmentStart) || 0, "integrated");
        }
      },
      skip: () => {
        const h = e.effectivePlayingItem, d = h == null ? void 0 : h.event;
        if (d && !d.restrictions.skip) {
          const f = e.findItemIndex(h);
          if (d.appendInPlace) {
            const g = h.playout.start + h.event.duration;
            c(g + 1e-3, "playout");
          } else
            e.advanceAfterAssetEnded(d, f, 1 / 0);
        }
      }
    };
  }
  // Schedule getters
  get effectivePlayingItem() {
    return this.waitingItem || this.playingItem || this.endedItem;
  }
  get effectivePlayingAsset() {
    return this.playingAsset || this.endedAsset;
  }
  get playingLastItem() {
    var e;
    const t = this.playingItem, s = (e = this.schedule) == null ? void 0 : e.items;
    return !this.playbackStarted || !t || !s ? !1 : this.findItemIndex(t) === s.length - 1;
  }
  get playbackStarted() {
    return this.effectivePlayingItem !== null;
  }
  // Media getters and event callbacks
  get currentTime() {
    var e, t;
    if (this.mediaSelection === null)
      return;
    const s = this.waitingItem || this.playingItem;
    if (this.isInterstitial(s) && !s.event.appendInPlace)
      return;
    let i = this.media;
    !i && (e = this.bufferingItem) != null && (e = e.event) != null && e.appendInPlace && (i = this.primaryMedia);
    const n = (t = i) == null ? void 0 : t.currentTime;
    if (!(n === void 0 || !G(n)))
      return n;
  }
  get primaryMedia() {
    var e;
    return this.media || ((e = this.detachedData) == null ? void 0 : e.media) || null;
  }
  isInterstitial(e) {
    return !!(e != null && e.event);
  }
  retreiveMediaSource(e, t) {
    const s = this.getAssetPlayer(e);
    s && this.transferMediaFromPlayer(s, t);
  }
  transferMediaFromPlayer(e, t) {
    const s = e.interstitial.appendInPlace, i = e.media;
    if (s && i === this.primaryMedia) {
      if (this.bufferingAsset = null, (!t || this.isInterstitial(t) && !t.event.appendInPlace) && t && i) {
        this.detachedData = {
          media: i
        };
        return;
      }
      const n = e.transferMedia();
      this.log(`transfer MediaSource from ${e} ${ge(n)}`), this.detachedData = n;
    } else t && i && (this.shouldPlay || (this.shouldPlay = !i.paused));
  }
  transferMediaTo(e, t) {
    var s, i;
    if (e.media === t)
      return;
    let n = null;
    const a = this.hls, o = e !== a, c = o && e.interstitial.appendInPlace, l = (s = this.detachedData) == null ? void 0 : s.mediaSource;
    let u;
    if (a.media)
      c && (n = a.transferMedia(), this.detachedData = n), u = "Primary";
    else if (l) {
      const g = this.getBufferingPlayer();
      g ? (n = g.transferMedia(), u = `${g}`) : u = "detached MediaSource";
    } else
      u = "detached media";
    if (!n) {
      if (l)
        n = this.detachedData, this.log(`using detachedData: MediaSource ${ge(n)}`);
      else if (!this.detachedData || a.media === t) {
        const g = this.playerQueue;
        g.length > 1 && g.forEach((p) => {
          if (o && p.interstitial.appendInPlace !== c) {
            const y = p.interstitial;
            this.clearInterstitial(p.interstitial, null), y.appendInPlace = !1, y.appendInPlace && this.warn(`Could not change append strategy for queued assets ${y}`);
          }
        }), this.hls.detachMedia(), this.detachedData = {
          media: t
        };
      }
    }
    const h = n && "mediaSource" in n && ((i = n.mediaSource) == null ? void 0 : i.readyState) !== "closed", d = h && n ? n : t;
    this.log(`${h ? "transfering MediaSource" : "attaching media"} to ${o ? e : "Primary"} from ${u} (media.currentTime: ${t.currentTime})`);
    const f = this.schedule;
    if (d === n && f) {
      const g = o && e.assetId === f.assetIdAtEnd;
      d.overrides = {
        duration: f.duration,
        endOfStream: !o || g,
        cueRemoval: !o
      };
    }
    e.attachMedia(d);
  }
  onInterstitialCueEnter() {
    this.onTimeupdate();
  }
  // Scheduling methods
  checkStart() {
    const e = this.schedule, t = e == null ? void 0 : e.events;
    if (!t || this.playbackDisabled || !this.media)
      return;
    this.bufferedPos === -1 && (this.bufferedPos = 0);
    const s = this.timelinePos, i = this.effectivePlayingItem;
    if (s === -1) {
      const n = this.hls.startPosition;
      if (this.log(ri("checkStart", n)), this.timelinePos = n, t.length && t[0].cue.pre) {
        const a = e.findEventIndex(t[0].identifier);
        this.setSchedulePosition(a);
      } else if (n >= 0 || !this.primaryLive) {
        const a = this.timelinePos = n > 0 ? n : 0, o = e.findItemIndexAtTime(a);
        this.setSchedulePosition(o);
      }
    } else if (i && !this.playingItem) {
      const n = e.findItemIndex(i);
      this.setSchedulePosition(n);
    }
  }
  advanceAssetBuffering(e, t) {
    const s = e.event, i = s.findAssetIndex(t), n = pn(s, i);
    if (!s.isAssetPastPlayoutLimit(n))
      this.bufferedToEvent(e, n);
    else if (this.schedule) {
      var a;
      const o = (a = this.schedule.items) == null ? void 0 : a[this.findItemIndex(e) + 1];
      o && this.bufferedToItem(o);
    }
  }
  advanceAfterAssetEnded(e, t, s) {
    const i = pn(e, s);
    if (e.isAssetPastPlayoutLimit(i)) {
      if (this.schedule) {
        const n = this.schedule.items;
        if (n) {
          const a = t + 1, o = n.length;
          if (a >= o) {
            this.setSchedulePosition(-1);
            return;
          }
          const c = e.resumeTime;
          this.timelinePos < c && (this.log(ri("advanceAfterAssetEnded", c)), this.timelinePos = c, e.appendInPlace && this.advanceInPlace(c), this.checkBuffer(this.bufferedPos < c)), this.setSchedulePosition(a);
        }
      }
    } else {
      if (e.appendInPlace) {
        const n = e.assetList[i];
        n && this.advanceInPlace(n.timelineStart);
      }
      this.setSchedulePosition(t, i);
    }
  }
  setScheduleToAssetAtTime(e, t) {
    const s = this.schedule;
    if (!s)
      return;
    const i = t.parentIdentifier, n = s.getEvent(i);
    if (n) {
      const a = s.findEventIndex(i), o = s.findAssetIndex(n, e);
      this.advanceAfterAssetEnded(n, a, o - 1);
    }
  }
  setSchedulePosition(e, t) {
    var s;
    const i = (s = this.schedule) == null ? void 0 : s.items;
    if (!i || this.playbackDisabled)
      return;
    const n = e >= 0 ? i[e] : null;
    this.log(`setSchedulePosition ${e}, ${t} (${n && rt(n)}) pos: ${this.timelinePos}`);
    const a = this.waitingItem || this.playingItem, o = this.playingLastItem;
    if (this.isInterstitial(a)) {
      const u = a.event, h = this.playingAsset, d = h == null ? void 0 : h.identifier, f = d ? this.getAssetPlayer(d) : null;
      if (f && d && (!this.eventItemsMatch(a, n) || t !== void 0 && d !== u.assetList[t].identifier)) {
        var c;
        const g = u.findAssetIndex(h);
        if (this.log(`INTERSTITIAL_ASSET_ENDED ${g + 1}/${u.assetList.length} ${is(h)}`), this.endedAsset = h, this.playingAsset = null, this.hls.trigger(m.INTERSTITIAL_ASSET_ENDED, {
          asset: h,
          assetListIndex: g,
          event: u,
          schedule: i.slice(0),
          scheduleIndex: e,
          player: f
        }), a !== this.playingItem) {
          this.itemsMatch(a, this.playingItem) && // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          !this.playingAsset && this.advanceAfterAssetEnded(u, this.findItemIndex(this.playingItem), g);
          return;
        }
        this.retreiveMediaSource(d, n), f.media && !((c = this.detachedData) != null && c.mediaSource) && f.detachMedia();
      }
      if (!this.eventItemsMatch(a, n) && (this.endedItem = a, this.playingItem = null, this.log(`INTERSTITIAL_ENDED ${u} ${rt(a)}`), u.hasPlayed = !0, this.hls.trigger(m.INTERSTITIAL_ENDED, {
        event: u,
        schedule: i.slice(0),
        scheduleIndex: e
      }), u.cue.once)) {
        var l;
        this.updateSchedule();
        const g = (l = this.schedule) == null ? void 0 : l.items;
        if (n && g) {
          const p = this.findItemIndex(n);
          this.advanceSchedule(p, g, t, a, o);
        }
        return;
      }
    }
    this.advanceSchedule(e, i, t, a, o);
  }
  advanceSchedule(e, t, s, i, n) {
    const a = this.schedule;
    if (!a)
      return;
    const o = t[e] || null, c = this.primaryMedia, l = this.playerQueue;
    if (l.length && l.forEach((u) => {
      const h = u.interstitial, d = a.findEventIndex(h.identifier);
      (d < e || d > e + 1) && this.clearInterstitial(h, o);
    }), this.isInterstitial(o)) {
      this.timelinePos = Math.min(Math.max(this.timelinePos, o.start), o.end);
      const u = o.event;
      if (s === void 0) {
        s = a.findAssetIndex(u, this.timelinePos);
        const g = pn(u, s - 1);
        if (u.isAssetPastPlayoutLimit(g) || u.appendInPlace && this.timelinePos === o.end) {
          this.advanceAfterAssetEnded(u, e, s);
          return;
        }
        s = g;
      }
      const h = this.waitingItem;
      this.assetsBuffered(o, c) || this.setBufferingItem(o);
      let d = this.preloadAssets(u, s);
      if (this.eventItemsMatch(o, h || i) || (this.waitingItem = o, this.log(`INTERSTITIAL_STARTED ${rt(o)} ${u.appendInPlace ? "append in place" : ""}`), this.hls.trigger(m.INTERSTITIAL_STARTED, {
        event: u,
        schedule: t.slice(0),
        scheduleIndex: e
      })), !u.assetListLoaded) {
        this.log(`Waiting for ASSET-LIST to complete loading ${u}`);
        return;
      }
      if (u.assetListLoader && (u.assetListLoader.destroy(), u.assetListLoader = void 0), !c) {
        this.log(`Waiting for attachMedia to start Interstitial ${u}`);
        return;
      }
      this.waitingItem = this.endedItem = null, this.playingItem = o;
      const f = u.assetList[s];
      if (!f) {
        this.advanceAfterAssetEnded(u, e, s || 0);
        return;
      }
      if (d || (d = this.getAssetPlayer(f.identifier)), d === null || d.destroyed) {
        const g = u.assetList.length;
        this.warn(`asset ${s + 1}/${g} player destroyed ${u}`), d = this.createAssetPlayer(u, f, s), d.loadSource();
      }
      if (!this.eventItemsMatch(o, this.bufferingItem) && u.appendInPlace && this.isAssetBuffered(f))
        return;
      this.startAssetPlayer(d, s, t, e, c), this.shouldPlay && Ja(d.media);
    } else o ? (this.resumePrimary(o, e, i), this.shouldPlay && Ja(this.hls.media)) : n && this.isInterstitial(i) && (this.endedItem = null, this.playingItem = i, i.event.appendInPlace || this.attachPrimary(a.durations.primary, null));
  }
  get playbackDisabled() {
    return this.hls.config.enableInterstitialPlayback === !1;
  }
  get primaryDetails() {
    var e;
    return (e = this.mediaSelection) == null ? void 0 : e.main.details;
  }
  get primaryLive() {
    var e;
    return !!((e = this.primaryDetails) != null && e.live);
  }
  resumePrimary(e, t, s) {
    var i, n;
    if (this.playingItem = e, this.playingAsset = this.endedAsset = null, this.waitingItem = this.endedItem = null, this.bufferedToItem(e), this.log(`resuming ${rt(e)}`), !((i = this.detachedData) != null && i.mediaSource)) {
      let o = this.timelinePos;
      (o < e.start || o >= e.end) && (o = this.getPrimaryResumption(e, t), this.log(ri("resumePrimary", o)), this.timelinePos = o), this.attachPrimary(o, e);
    }
    if (!s)
      return;
    const a = (n = this.schedule) == null ? void 0 : n.items;
    a && (this.log(`INTERSTITIALS_PRIMARY_RESUMED ${rt(e)}`), this.hls.trigger(m.INTERSTITIALS_PRIMARY_RESUMED, {
      schedule: a.slice(0),
      scheduleIndex: t
    }), this.checkBuffer());
  }
  getPrimaryResumption(e, t) {
    const s = e.start;
    if (this.primaryLive) {
      const i = this.primaryDetails;
      if (t === 0)
        return this.hls.startPosition;
      if (i && (s < i.fragmentStart || s > i.edge))
        return this.hls.liveSyncPosition || -1;
    }
    return s;
  }
  isAssetBuffered(e) {
    const t = this.getAssetPlayer(e.identifier);
    return t != null && t.hls ? t.hls.bufferedToEnd : te.bufferInfo(this.primaryMedia, this.timelinePos, 0).end + 1 >= e.timelineStart + (e.duration || 0);
  }
  attachPrimary(e, t, s) {
    t ? this.setBufferingItem(t) : this.bufferingItem = this.playingItem, this.bufferingAsset = null;
    const i = this.primaryMedia;
    if (!i)
      return;
    const n = this.hls;
    n.media ? this.checkBuffer() : (this.transferMediaTo(n, i), s && this.startLoadingPrimaryAt(e, s)), s || (this.log(ri("attachPrimary", e)), this.timelinePos = e, this.startLoadingPrimaryAt(e, s));
  }
  startLoadingPrimaryAt(e, t) {
    var s;
    const i = this.hls;
    !i.loadingEnabled || !i.media || Math.abs((((s = i.mainForwardBufferInfo) == null ? void 0 : s.start) || i.media.currentTime) - e) > 0.5 ? i.startLoad(e, t) : i.bufferingEnabled || i.resumeBuffering();
  }
  // HLS.js event callbacks
  onManifestLoading() {
    var e;
    this.stopLoad(), (e = this.schedule) == null || e.reset(), this.emptyPlayerQueue(), this.clearScheduleState(), this.shouldPlay = !1, this.bufferedPos = this.timelinePos = -1, this.mediaSelection = this.altSelection = this.manager = this.requiredTracks = null, this.hls.off(m.BUFFER_CODECS, this.onBufferCodecs, this), this.hls.on(m.BUFFER_CODECS, this.onBufferCodecs, this);
  }
  onLevelUpdated(e, t) {
    if (t.level === -1 || !this.schedule)
      return;
    const s = this.hls.levels[t.level];
    if (!s.details)
      return;
    const i = ce(ce({}, this.mediaSelection || this.altSelection), {}, {
      main: s
    });
    this.mediaSelection = i, this.schedule.parseInterstitialDateRanges(i, this.hls.config.interstitialAppendInPlace), !this.effectivePlayingItem && this.schedule.items && this.checkStart();
  }
  onAudioTrackUpdated(e, t) {
    const s = this.hls.audioTracks[t.id], i = this.mediaSelection;
    if (!i) {
      this.altSelection = ce(ce({}, this.altSelection), {}, {
        audio: s
      });
      return;
    }
    const n = ce(ce({}, i), {}, {
      audio: s
    });
    this.mediaSelection = n;
  }
  onSubtitleTrackUpdated(e, t) {
    const s = this.hls.subtitleTracks[t.id], i = this.mediaSelection;
    if (!i) {
      this.altSelection = ce(ce({}, this.altSelection), {}, {
        subtitles: s
      });
      return;
    }
    const n = ce(ce({}, i), {}, {
      subtitles: s
    });
    this.mediaSelection = n;
  }
  onAudioTrackSwitching(e, t) {
    const s = la(t);
    this.playerQueue.forEach(({
      hls: i
    }) => i && (i.setAudioOption(t) || i.setAudioOption(s)));
  }
  onSubtitleTrackSwitch(e, t) {
    const s = la(t);
    this.playerQueue.forEach(({
      hls: i
    }) => i && (i.setSubtitleOption(t) || t.id !== -1 && i.setSubtitleOption(s)));
  }
  onBufferCodecs(e, t) {
    const s = t.tracks;
    s && (this.requiredTracks = s);
  }
  onBufferAppended(e, t) {
    this.checkBuffer();
  }
  onBufferFlushed(e, t) {
    const s = this.playingItem;
    if (s && !this.itemsMatch(s, this.bufferingItem) && !this.isInterstitial(s)) {
      const i = this.timelinePos;
      this.bufferedPos = i, this.checkBuffer();
    }
  }
  onBufferedToEnd(e) {
    if (!this.schedule)
      return;
    const t = this.schedule.events;
    if (this.bufferedPos < Number.MAX_VALUE && t) {
      for (let i = 0; i < t.length; i++) {
        const n = t[i];
        if (n.cue.post) {
          var s;
          const a = this.schedule.findEventIndex(n.identifier), o = (s = this.schedule.items) == null ? void 0 : s[a];
          this.isInterstitial(o) && this.eventItemsMatch(o, this.bufferingItem) && this.bufferedToItem(o, 0);
          break;
        }
      }
      this.bufferedPos = Number.MAX_VALUE;
    }
  }
  onMediaEnded(e) {
    const t = this.playingItem;
    if (!this.playingLastItem && t) {
      const s = this.findItemIndex(t);
      this.setSchedulePosition(s + 1);
    } else
      this.shouldPlay = !1;
  }
  updateItem(e, t) {
    var s;
    const i = (s = this.schedule) == null ? void 0 : s.items;
    if (e && i) {
      const n = this.findItemIndex(e, t);
      return i[n] || null;
    }
    return null;
  }
  trimInPlace(e, t) {
    if (this.isInterstitial(e) && e.event.appendInPlace && t.end - e.end > 0.25) {
      e.event.assetList.forEach((n, a) => {
        e.event.isAssetPastPlayoutLimit(a) && this.clearAssetPlayer(n.identifier, null);
      });
      const s = e.end + 0.25, i = te.bufferInfo(this.primaryMedia, s, 0);
      (i.end > s || (i.nextStart || 0) > s) && (this.log(`trim buffered interstitial ${rt(e)} (was ${rt(t)})`), this.attachPrimary(s, null, !0), this.flushFrontBuffer(s));
    }
  }
  itemsMatch(e, t) {
    return !!t && (e === t || e.event && t.event && this.eventItemsMatch(e, t) || !e.event && !t.event && this.findItemIndex(e) === this.findItemIndex(t));
  }
  eventItemsMatch(e, t) {
    var s;
    return !!t && (e === t || e.event.identifier === ((s = t.event) == null ? void 0 : s.identifier));
  }
  findItemIndex(e, t) {
    return e && this.schedule ? this.schedule.findItemIndex(e, t) : -1;
  }
  updateSchedule(e = !1) {
    var t;
    const s = this.mediaSelection;
    s && ((t = this.schedule) == null || t.updateSchedule(s, [], e));
  }
  // Schedule buffer control
  checkBuffer(e) {
    var t;
    const s = (t = this.schedule) == null ? void 0 : t.items;
    if (!s)
      return;
    const i = te.bufferInfo(this.primaryMedia, this.timelinePos, 0);
    e && (this.bufferedPos = this.timelinePos), e || (e = i.len < 1), this.updateBufferedPos(i.end, s, e);
  }
  updateBufferedPos(e, t, s) {
    const i = this.schedule, n = this.bufferingItem;
    if (this.bufferedPos > e || !i)
      return;
    if (t.length === 1 && this.itemsMatch(t[0], n)) {
      this.bufferedPos = e;
      return;
    }
    const a = this.playingItem, o = this.findItemIndex(a);
    let c = i.findItemIndexAtTime(e);
    if (this.bufferedPos < e) {
      var l;
      const u = this.findItemIndex(n), h = Math.min(u + 1, t.length - 1), d = t[h];
      if ((c === -1 && n && e >= n.end || (l = d.event) != null && l.appendInPlace && e + 0.01 >= d.start) && (c = h), this.isInterstitial(n)) {
        const f = n.event;
        if (h - o > 1 && f.appendInPlace === !1 || f.assetList.length === 0 && f.assetListLoader)
          return;
      }
      if (this.bufferedPos = e, c > u && c > o)
        this.bufferedToItem(d);
      else {
        const f = this.primaryDetails;
        this.primaryLive && f && e > f.edge - f.targetduration && d.start < f.edge + this.hls.config.interstitialLiveLookAhead && this.isInterstitial(d) && this.preloadAssets(d.event, 0);
      }
    } else s && a && !this.itemsMatch(a, n) && (c === o ? this.bufferedToItem(a) : c === o + 1 && this.bufferedToItem(t[c]));
  }
  assetsBuffered(e, t) {
    return e.event.assetList.length === 0 ? !1 : !e.event.assetList.some((i) => {
      const n = this.getAssetPlayer(i.identifier);
      return !(n != null && n.bufferedInPlaceToEnd(t));
    });
  }
  setBufferingItem(e) {
    const t = this.bufferingItem, s = this.schedule;
    if (!this.itemsMatch(e, t) && s) {
      const {
        items: i,
        events: n
      } = s;
      if (!i || !n)
        return t;
      const a = this.isInterstitial(e), o = this.getBufferingPlayer();
      this.bufferingItem = e, this.bufferedPos = Math.max(e.start, Math.min(e.end, this.timelinePos));
      const c = o ? o.remaining : t ? t.end - this.timelinePos : 0;
      if (this.log(`INTERSTITIALS_BUFFERED_TO_BOUNDARY ${rt(e)}` + (t ? ` (${c.toFixed(2)} remaining)` : "")), !this.playbackDisabled)
        if (a) {
          const l = s.findAssetIndex(e.event, this.bufferedPos);
          e.event.assetList.forEach((u, h) => {
            const d = this.getAssetPlayer(u.identifier);
            d && (h === l && d.loadSource(), d.resumeBuffering());
          });
        } else
          this.hls.resumeBuffering(), this.playerQueue.forEach((l) => l.pauseBuffering());
      this.hls.trigger(m.INTERSTITIALS_BUFFERED_TO_BOUNDARY, {
        events: n.slice(0),
        schedule: i.slice(0),
        bufferingIndex: this.findItemIndex(e),
        playingIndex: this.findItemIndex(this.playingItem)
      });
    } else this.bufferingItem !== e && (this.bufferingItem = e);
    return t;
  }
  bufferedToItem(e, t = 0) {
    const s = this.setBufferingItem(e);
    if (!this.playbackDisabled) {
      if (this.isInterstitial(e))
        this.bufferedToEvent(e, t);
      else if (s !== null) {
        this.bufferingAsset = null;
        const i = this.detachedData;
        i ? i.mediaSource ? this.attachPrimary(e.start, e, !0) : this.preloadPrimary(e) : this.preloadPrimary(e);
      }
    }
  }
  preloadPrimary(e) {
    const t = this.findItemIndex(e), s = this.getPrimaryResumption(e, t);
    this.startLoadingPrimaryAt(s);
  }
  bufferedToEvent(e, t) {
    const s = e.event, i = s.assetList.length === 0 && !s.assetListLoader, n = s.cue.once;
    if (i || !n) {
      const a = this.preloadAssets(s, t);
      if (a != null && a.interstitial.appendInPlace) {
        const o = this.primaryMedia;
        o && this.bufferAssetPlayer(a, o);
      }
    }
  }
  preloadAssets(e, t) {
    const s = e.assetUrl, i = e.assetList.length, n = i === 0 && !e.assetListLoader, a = e.cue.once;
    if (n) {
      const c = e.timelineStart;
      if (e.appendInPlace) {
        var o;
        const d = this.playingItem;
        !this.isInterstitial(d) && (d == null || (o = d.nextEvent) == null ? void 0 : o.identifier) === e.identifier && this.flushFrontBuffer(c + 0.25);
      }
      let l, u = 0;
      if (!this.playingItem && this.primaryLive && (u = this.hls.startPosition, u === -1 && (u = this.hls.liveSyncPosition || 0)), u && !(e.cue.pre || e.cue.post)) {
        const d = u - c;
        d > 0 && (l = Math.round(d * 1e3) / 1e3);
      }
      if (this.log(`Load interstitial asset ${t + 1}/${s ? 1 : i} ${e}${l ? ` live-start: ${u} start-offset: ${l}` : ""}`), s)
        return this.createAsset(e, 0, 0, c, e.duration, s);
      const h = this.assetListLoader.loadAssetList(e, l);
      h && (e.assetListLoader = h);
    } else if (!a && i) {
      for (let l = t; l < i; l++) {
        const u = e.assetList[l], h = this.getAssetPlayerQueueIndex(u.identifier);
        (h === -1 || this.playerQueue[h].destroyed) && !u.error && this.createAssetPlayer(e, u, l);
      }
      const c = e.assetList[t];
      if (c) {
        const l = this.getAssetPlayer(c.identifier);
        return l && l.loadSource(), l;
      }
    }
    return null;
  }
  flushFrontBuffer(e) {
    const t = this.requiredTracks;
    if (!t)
      return;
    this.log(`Removing front buffer starting at ${e}`), Object.keys(t).forEach((i) => {
      this.hls.trigger(m.BUFFER_FLUSHING, {
        startOffset: e,
        endOffset: 1 / 0,
        type: i
      });
    });
  }
  // Interstitial Asset Player control
  getAssetPlayerQueueIndex(e) {
    const t = this.playerQueue;
    for (let s = 0; s < t.length; s++)
      if (e === t[s].assetId)
        return s;
    return -1;
  }
  getAssetPlayer(e) {
    const t = this.getAssetPlayerQueueIndex(e);
    return this.playerQueue[t] || null;
  }
  getBufferingPlayer() {
    const {
      playerQueue: e,
      primaryMedia: t
    } = this;
    if (t) {
      for (let s = 0; s < e.length; s++)
        if (e[s].media === t)
          return e[s];
    }
    return null;
  }
  createAsset(e, t, s, i, n, a) {
    const o = {
      parentIdentifier: e.identifier,
      identifier: Fg(e, a, t),
      duration: n,
      startOffset: s,
      timelineStart: i,
      uri: a
    };
    return this.createAssetPlayer(e, o, t);
  }
  createAssetPlayer(e, t, s) {
    const i = this.hls, n = i.userConfig;
    let a = n.videoPreference;
    const o = i.loadLevelObj || i.levels[i.currentLevel];
    (a || o) && (a = de({}, a), o.videoCodec && (a.videoCodec = o.videoCodec), o.videoRange && (a.allowedVideoRanges = [o.videoRange]));
    const c = i.audioTracks[i.audioTrack], l = i.subtitleTracks[i.subtitleTrack];
    let u = 0;
    if (this.primaryLive || e.appendInPlace) {
      const v = this.timelinePos - t.timelineStart;
      if (v > 1) {
        const x = t.duration;
        x && v < x && (u = v);
      }
    }
    const h = t.identifier, d = ce(ce({}, n), {}, {
      maxMaxBufferLength: Math.min(180, i.config.maxMaxBufferLength),
      autoStartLoad: !0,
      startFragPrefetch: !0,
      primarySessionId: i.sessionId,
      assetPlayerId: h,
      abrEwmaDefaultEstimate: i.bandwidthEstimate,
      interstitialsController: void 0,
      startPosition: u,
      liveDurationInfinity: !1,
      testBandwidth: !1,
      videoPreference: a,
      audioPreference: c || n.audioPreference,
      subtitlePreference: l || n.subtitlePreference
    });
    e.appendInPlace && (e.appendInPlaceStarted = !0, t.timelineStart && (d.timelineOffset = t.timelineStart));
    const f = d.cmcd;
    f != null && f.sessionId && f.contentId && (d.cmcd = de({}, f, {
      contentId: Ps(t.uri)
    })), this.getAssetPlayer(h) && this.warn(`Duplicate date range identifier ${e} and asset ${h}`);
    const g = new Bg(this.HlsPlayerClass, d, e, t);
    this.playerQueue.push(g), e.assetList[s] = t;
    let p = !0;
    const y = (v) => {
      if (v.live) {
        var x;
        const R = new Error(`Interstitials MUST be VOD assets ${e}`), b = {
          fatal: !0,
          type: X.OTHER_ERROR,
          details: D.INTERSTITIAL_ASSET_ITEM_ERROR,
          error: R
        }, L = ((x = this.schedule) == null ? void 0 : x.findEventIndex(e.identifier)) || -1;
        this.handleAssetItemError(b, e, L, s, R.message);
        return;
      }
      const C = v.edge - v.fragmentStart, A = t.duration;
      (p || A === null || C > A) && (p = !1, this.log(`Interstitial asset "${h}" duration change ${A} > ${C}`), t.duration = C, this.updateSchedule());
    };
    g.on(m.LEVEL_UPDATED, (v, {
      details: x
    }) => y(x)), g.on(m.LEVEL_PTS_UPDATED, (v, {
      details: x
    }) => y(x)), g.on(m.EVENT_CUE_ENTER, () => this.onInterstitialCueEnter());
    const E = (v, x) => {
      const C = this.getAssetPlayer(h);
      if (C && x.tracks) {
        C.off(m.BUFFER_CODECS, E), C.tracks = x.tracks;
        const A = this.primaryMedia;
        this.bufferingAsset === C.assetItem && A && !C.media && this.bufferAssetPlayer(C, A);
      }
    };
    g.on(m.BUFFER_CODECS, E);
    const T = () => {
      var v;
      const x = this.getAssetPlayer(h);
      if (this.log(`buffered to end of asset ${x}`), !x || !this.schedule)
        return;
      const C = this.schedule.findEventIndex(e.identifier), A = (v = this.schedule.items) == null ? void 0 : v[C];
      this.isInterstitial(A) && this.advanceAssetBuffering(A, t);
    };
    g.on(m.BUFFERED_TO_END, T);
    const S = (v) => () => {
      if (!this.getAssetPlayer(h) || !this.schedule)
        return;
      this.shouldPlay = !0;
      const C = this.schedule.findEventIndex(e.identifier);
      this.advanceAfterAssetEnded(e, C, v);
    };
    return g.once(m.MEDIA_ENDED, S(s)), g.once(m.PLAYOUT_LIMIT_REACHED, S(1 / 0)), g.on(m.ERROR, (v, x) => {
      if (!this.schedule)
        return;
      const C = this.getAssetPlayer(h);
      if (x.details === D.BUFFER_STALLED_ERROR) {
        if (C != null && C.appendInPlace) {
          this.handleInPlaceStall(e);
          return;
        }
        this.onTimeupdate(), this.checkBuffer(!0);
        return;
      }
      this.handleAssetItemError(x, e, this.schedule.findEventIndex(e.identifier), s, `Asset player error ${x.error} ${e}`);
    }), g.on(m.DESTROYING, () => {
      if (!this.getAssetPlayer(h) || !this.schedule)
        return;
      const x = new Error(`Asset player destroyed unexpectedly ${h}`), C = {
        fatal: !0,
        type: X.OTHER_ERROR,
        details: D.INTERSTITIAL_ASSET_ITEM_ERROR,
        error: x
      };
      this.handleAssetItemError(C, e, this.schedule.findEventIndex(e.identifier), s, x.message);
    }), this.log(`INTERSTITIAL_ASSET_PLAYER_CREATED ${is(t)}`), this.hls.trigger(m.INTERSTITIAL_ASSET_PLAYER_CREATED, {
      asset: t,
      assetListIndex: s,
      event: e,
      player: g
    }), g;
  }
  clearInterstitial(e, t) {
    e.assetList.forEach((s) => {
      this.clearAssetPlayer(s.identifier, t);
    }), e.reset();
  }
  resetAssetPlayer(e) {
    const t = this.getAssetPlayerQueueIndex(e);
    if (t !== -1) {
      this.log(`reset asset player "${e}" after error`);
      const s = this.playerQueue[t];
      this.transferMediaFromPlayer(s, null), s.resetDetails();
    }
  }
  clearAssetPlayer(e, t) {
    const s = this.getAssetPlayerQueueIndex(e);
    if (s !== -1) {
      const i = this.playerQueue[s];
      this.log(`clear ${i} toSegment: ${t && rt(t)}`), this.transferMediaFromPlayer(i, t), this.playerQueue.splice(s, 1), i.destroy();
    }
  }
  emptyPlayerQueue() {
    let e;
    for (; e = this.playerQueue.pop(); )
      e.destroy();
    this.playerQueue = [];
  }
  startAssetPlayer(e, t, s, i, n) {
    const {
      interstitial: a,
      assetItem: o,
      assetId: c
    } = e, l = a.assetList.length, u = this.playingAsset;
    this.endedAsset = null, this.playingAsset = o, (!u || u.identifier !== c) && (u && (this.clearAssetPlayer(u.identifier, s[i]), delete u.error), this.log(`INTERSTITIAL_ASSET_STARTED ${t + 1}/${l} ${is(o)}`), this.hls.trigger(m.INTERSTITIAL_ASSET_STARTED, {
      asset: o,
      assetListIndex: t,
      event: a,
      schedule: s.slice(0),
      scheduleIndex: i,
      player: e
    })), this.bufferAssetPlayer(e, n);
  }
  bufferAssetPlayer(e, t) {
    var s, i;
    if (!this.schedule)
      return;
    const {
      interstitial: n,
      assetItem: a
    } = e, o = this.schedule.findEventIndex(n.identifier), c = (s = this.schedule.items) == null ? void 0 : s[o];
    if (!c)
      return;
    e.loadSource(), this.setBufferingItem(c), this.bufferingAsset = a;
    const l = this.getBufferingPlayer();
    if (l === e)
      return;
    const u = n.appendInPlace;
    if (u && (l == null ? void 0 : l.interstitial.appendInPlace) === !1)
      return;
    const h = (l == null ? void 0 : l.tracks) || ((i = this.detachedData) == null ? void 0 : i.tracks) || this.requiredTracks;
    if (u && a !== this.playingAsset) {
      if (!e.tracks) {
        this.log(`Waiting for track info before buffering ${e}`);
        return;
      }
      if (h && !bo(h, e.tracks)) {
        const d = new Error(`Asset ${is(a)} SourceBuffer tracks ('${Object.keys(e.tracks)}') are not compatible with primary content tracks ('${Object.keys(h)}')`), f = {
          fatal: !0,
          type: X.OTHER_ERROR,
          details: D.INTERSTITIAL_ASSET_ITEM_ERROR,
          error: d
        }, g = n.findAssetIndex(a);
        this.handleAssetItemError(f, n, o, g, d.message);
        return;
      }
    }
    this.transferMediaTo(e, t);
  }
  handleInPlaceStall(e) {
    const t = this.schedule, s = this.primaryMedia;
    if (!t || !s)
      return;
    const i = s.currentTime, n = t.findAssetIndex(e, i), a = e.assetList[n];
    if (a) {
      const o = this.getAssetPlayer(a.identifier);
      if (o) {
        const c = o.currentTime || i - a.timelineStart, l = o.duration - c;
        if (this.warn(`Stalled at ${c} of ${c + l} in ${o} ${e} (media.currentTime: ${i})`), c && (l / s.playbackRate < 0.5 || o.bufferedInPlaceToEnd(s)) && o.hls) {
          const u = t.findEventIndex(e.identifier);
          this.advanceAfterAssetEnded(e, u, n);
        }
      }
    }
  }
  advanceInPlace(e) {
    const t = this.primaryMedia;
    t && t.currentTime < e && (t.currentTime = e);
  }
  handleAssetItemError(e, t, s, i, n) {
    if (e.details === D.BUFFER_STALLED_ERROR)
      return;
    const a = t.assetList[i] || null;
    if (this.warn(`INTERSTITIAL_ASSET_ERROR ${a && is(a)} ${e.error}`), !this.schedule)
      return;
    const o = (a == null ? void 0 : a.identifier) || "", c = this.getAssetPlayerQueueIndex(o), l = this.playerQueue[c] || null, u = this.schedule.items, h = de({}, e, {
      fatal: !1,
      errorAction: as(!0),
      asset: a,
      assetListIndex: i,
      event: t,
      schedule: u,
      scheduleIndex: s,
      player: l
    });
    if (this.hls.trigger(m.INTERSTITIAL_ASSET_ERROR, h), !e.fatal)
      return;
    const d = this.playingAsset, f = this.bufferingAsset, g = new Error(n);
    if (a && (this.clearAssetPlayer(o, null), a.error = g), !t.assetList.some((p) => !p.error))
      t.error = g;
    else
      for (let p = i; p < t.assetList.length; p++)
        this.resetAssetPlayer(t.assetList[p].identifier);
    this.updateSchedule(!0), t.error ? this.primaryFallback(t) : d && d.identifier === o ? this.advanceAfterAssetEnded(t, s, i) : f && f.identifier === o && this.isInterstitial(this.bufferingItem) && this.advanceAssetBuffering(this.bufferingItem, f);
  }
  primaryFallback(e) {
    const t = e.timelineStart, s = this.effectivePlayingItem;
    if (s) {
      this.log(`Fallback to primary from event "${e.identifier}" start: ${t} pos: ${this.timelinePos} playing: ${rt(s)} error: ${e.error}`);
      let i = this.timelinePos;
      i === -1 && (i = this.hls.startPosition);
      const n = this.updateItem(s, i);
      if (this.itemsMatch(s, n) && this.clearInterstitial(e, null), e.appendInPlace && (this.attachPrimary(t, null), this.flushFrontBuffer(t)), !this.schedule)
        return;
      const a = this.schedule.findItemIndexAtTime(i);
      this.setSchedulePosition(a);
    } else
      this.checkStart();
  }
  // Asset List loading
  onAssetListLoaded(e, t) {
    var s, i;
    const n = t.event, a = n.identifier, o = t.assetListResponse.ASSETS;
    if (!((s = this.schedule) != null && s.hasEvent(a)))
      return;
    const c = n.timelineStart, l = n.duration;
    let u = 0;
    o.forEach((p, y) => {
      const E = parseFloat(p.DURATION);
      this.createAsset(n, y, u, c + u, E, p.URI), u += E;
    }), n.duration = u, this.log(`Loaded asset-list with duration: ${u} (was: ${l}) ${n}`);
    const h = this.waitingItem, d = (h == null ? void 0 : h.event.identifier) === a;
    this.updateSchedule();
    const f = (i = this.bufferingItem) == null ? void 0 : i.event;
    if (d) {
      var g;
      const p = this.schedule.findEventIndex(a), y = (g = this.schedule.items) == null ? void 0 : g[p];
      if (y) {
        if (!this.playingItem && this.timelinePos > y.end && this.schedule.findItemIndexAtTime(this.timelinePos) !== p) {
          n.error = new Error(`Interstitial no longer within playback range ${this.timelinePos} ${n}`), this.updateSchedule(!0), this.primaryFallback(n);
          return;
        }
        this.setBufferingItem(y);
      }
      this.setSchedulePosition(p);
    } else if ((f == null ? void 0 : f.identifier) === a) {
      const p = n.assetList[0];
      if (p) {
        const y = this.getAssetPlayer(p.identifier);
        if (f.appendInPlace) {
          const E = this.primaryMedia;
          y && E && this.bufferAssetPlayer(y, E);
        } else y && y.loadSource();
      }
    }
  }
  onError(e, t) {
    if (this.schedule)
      switch (t.details) {
        case D.ASSET_LIST_PARSING_ERROR:
        case D.ASSET_LIST_LOAD_ERROR:
        case D.ASSET_LIST_LOAD_TIMEOUT: {
          const s = t.interstitial;
          s && (this.updateSchedule(!0), this.primaryFallback(s));
          break;
        }
        case D.BUFFER_STALLED_ERROR: {
          const s = this.endedItem || this.waitingItem || this.playingItem;
          if (this.isInterstitial(s) && s.event.appendInPlace) {
            this.handleInPlaceStall(s.event);
            return;
          }
          this.log(`Primary player stall @${this.timelinePos} bufferedPos: ${this.bufferedPos}`), this.onTimeupdate(), this.checkBuffer(!0);
          break;
        }
      }
  }
}
const eo = 500;
class Vg extends ar {
  constructor(e, t, s) {
    super(e, t, s, "subtitle-stream-controller", W.SUBTITLE), this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this.registerListeners();
  }
  onHandlerDestroying() {
    this.unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null;
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(m.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  unregisterListeners() {
    super.unregisterListeners();
    const {
      hls: e
    } = this;
    e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(m.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  startLoad(e, t) {
    this.stopLoad(), this.state = k.IDLE, this.setInterval(eo), this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick();
  }
  onManifestLoading() {
    super.onManifestLoading(), this.mainDetails = null;
  }
  onMediaDetaching(e, t) {
    this.tracksBuffered = [], super.onMediaDetaching(e, t);
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details;
  }
  onSubtitleFragProcessed(e, t) {
    const {
      frag: s,
      success: i
    } = t;
    if (this.fragContextChanged(s) || (Ae(s) && (this.fragPrevious = s), this.state = k.IDLE), !i)
      return;
    const n = this.tracksBuffered[this.currentTrackId];
    if (!n)
      return;
    let a;
    const o = s.start;
    for (let l = 0; l < n.length; l++)
      if (o >= n[l].start && o <= n[l].end) {
        a = n[l];
        break;
      }
    const c = s.start + s.duration;
    a ? a.end = c : (a = {
      start: o,
      end: c
    }, n.push(a)), this.fragmentTracker.fragBuffered(s), this.fragBufferedComplete(s, null), this.media && this.tick();
  }
  onBufferFlushing(e, t) {
    const {
      startOffset: s,
      endOffset: i
    } = t;
    if (s === 0 && i !== Number.POSITIVE_INFINITY) {
      const n = i - 1;
      if (n <= 0)
        return;
      t.endOffsetSubtitles = Math.max(0, n), this.tracksBuffered.forEach((a) => {
        for (let o = 0; o < a.length; ) {
          if (a[o].end <= n) {
            a.shift();
            continue;
          } else if (a[o].start < n)
            a[o].start = n;
          else
            break;
          o++;
        }
      }), this.fragmentTracker.removeFragmentsInRange(s, n, W.SUBTITLE);
    }
  }
  // If something goes wrong, proceed to next frag, if we were processing one.
  onError(e, t) {
    const s = t.frag;
    (s == null ? void 0 : s.type) === W.SUBTITLE && (t.details === D.FRAG_GAP && this.fragmentTracker.fragBuffered(s, !0), this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== k.STOPPED && (this.state = k.IDLE));
  }
  // Got all new subtitle levels.
  onSubtitleTracksUpdated(e, {
    subtitleTracks: t
  }) {
    if (this.levels && Dl(this.levels, t)) {
      this.levels = t.map((s) => new Fs(s));
      return;
    }
    this.tracksBuffered = [], this.levels = t.map((s) => {
      const i = new Fs(s);
      return this.tracksBuffered[i.id] = [], i;
    }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, W.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null;
  }
  onSubtitleTrackSwitch(e, t) {
    var s;
    if (this.currentTrackId = t.id, !((s = this.levels) != null && s.length) || this.currentTrackId === -1) {
      this.clearInterval();
      return;
    }
    const i = this.levels[this.currentTrackId];
    i != null && i.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, i && this.state !== k.STOPPED && this.setInterval(eo);
  }
  // Got a new set of subtitle fragments.
  onSubtitleTrackLoaded(e, t) {
    var s;
    const {
      currentTrackId: i,
      levels: n
    } = this, {
      details: a,
      id: o
    } = t;
    if (!n) {
      this.warn(`Subtitle tracks were reset while loading level ${o}`);
      return;
    }
    const c = n[o];
    if (o >= n.length || !c)
      return;
    this.log(`Subtitle track ${o} loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""},duration:${a.totalduration}`), this.mediaBuffer = this.mediaBufferTimeRanges;
    let l = 0;
    if (a.live || (s = c.details) != null && s.live) {
      if (a.deltaUpdateFailed)
        return;
      const h = this.mainDetails;
      if (!h) {
        this.startFragRequested = !1;
        return;
      }
      const d = h.fragments[0];
      if (!c.details)
        a.hasProgramDateTime && h.hasProgramDateTime ? (Ci(a, h), l = a.fragmentStart) : d && (l = d.start, $n(a, l));
      else {
        var u;
        l = this.alignPlaylists(a, c.details, (u = this.levelLastLoaded) == null ? void 0 : u.details), l === 0 && d && (l = d.start, $n(a, l));
      }
      h && !this.startFragRequested && this.setStartPosition(h, l);
    }
    c.details = a, this.levelLastLoaded = c, o === i && (this.hls.trigger(m.SUBTITLE_TRACK_UPDATED, {
      details: a,
      id: o,
      groupId: t.groupId
    }), this.tick(), a.live && !this.fragCurrent && this.media && this.state === k.IDLE && (zt(null, a.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), c.details = void 0)));
  }
  _handleFragmentLoadComplete(e) {
    const {
      frag: t,
      payload: s
    } = e, i = t.decryptdata, n = this.hls;
    if (!this.fragContextChanged(t) && s && s.byteLength > 0 && i != null && i.key && i.iv && os(i.method)) {
      const a = performance.now();
      this.decrypter.decrypt(new Uint8Array(s), i.key.buffer, i.iv.buffer, nr(i.method)).catch((o) => {
        throw n.trigger(m.ERROR, {
          type: X.MEDIA_ERROR,
          details: D.FRAG_DECRYPT_ERROR,
          fatal: !1,
          error: o,
          reason: o.message,
          frag: t
        }), o;
      }).then((o) => {
        const c = performance.now();
        n.trigger(m.FRAG_DECRYPTED, {
          frag: t,
          payload: o,
          stats: {
            tstart: a,
            tdecrypt: c
          }
        });
      }).catch((o) => {
        this.warn(`${o.name}: ${o.message}`), this.state = k.IDLE;
      });
    }
  }
  doTick() {
    if (!this.media) {
      this.state = k.IDLE;
      return;
    }
    if (this.state === k.IDLE) {
      const {
        currentTrackId: e,
        levels: t
      } = this, s = t == null ? void 0 : t[e];
      if (!s || !t.length || !s.details || this.waitForLive(s))
        return;
      const {
        config: i
      } = this, n = this.getLoadPosition(), a = te.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], n, i.maxBufferHole), {
        end: o,
        len: c
      } = a, l = s.details, u = this.hls.maxBufferLength + l.levelTargetDuration;
      if (c > u)
        return;
      const h = l.fragments, d = h.length, f = l.edge;
      let g = null;
      const p = this.fragPrevious;
      if (o < f) {
        const T = i.maxFragLookUpTolerance, S = o > f - T ? 0 : T;
        g = zt(p, h, Math.max(h[0].start, o), S), !g && p && p.start < h[0].start && (g = h[0]);
      } else
        g = h[d - 1];
      if (g = this.filterReplacedPrimary(g, s.details), !g)
        return;
      const y = g.sn - l.startSN, E = h[y - 1];
      if (E && E.cc === g.cc && this.fragmentTracker.getState(E) === Re.NOT_LOADED && (g = E), this.fragmentTracker.getState(g) === Re.NOT_LOADED) {
        const T = this.mapToInitFragWhenRequired(g);
        T && this.loadFragment(T, s, o);
      }
    }
  }
  loadFragment(e, t, s) {
    Ae(e) ? super.loadFragment(e, t, s) : this._loadInitSegment(e, t);
  }
  get mediaBufferTimeRanges() {
    return new Hg(this.tracksBuffered[this.currentTrackId] || []);
  }
}
class Hg {
  constructor(e) {
    this.buffered = void 0;
    const t = (s, i, n) => {
      if (i = i >>> 0, i > n - 1)
        throw new DOMException(`Failed to execute '${s}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${n})`);
      return e[i][s];
    };
    this.buffered = {
      get length() {
        return e.length;
      },
      end(s) {
        return t("end", s, e.length);
      },
      start(s) {
        return t("start", s, e.length);
      }
    };
  }
}
const Wg = {
  42: 225,
  // lowercase a, acute accent
  92: 233,
  // lowercase e, acute accent
  94: 237,
  // lowercase i, acute accent
  95: 243,
  // lowercase o, acute accent
  96: 250,
  // lowercase u, acute accent
  123: 231,
  // lowercase c with cedilla
  124: 247,
  // division symbol
  125: 209,
  // uppercase N tilde
  126: 241,
  // lowercase n tilde
  127: 9608,
  // Full block
  // THIS BLOCK INCLUDES THE 16 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x11 AND LOW BETWEEN 0x30 AND 0x3F
  // THIS MEANS THAT \x50 MUST BE ADDED TO THE VALUES
  128: 174,
  // Registered symbol (R)
  129: 176,
  // degree sign
  130: 189,
  // 1/2 symbol
  131: 191,
  // Inverted (open) question mark
  132: 8482,
  // Trademark symbol (TM)
  133: 162,
  // Cents symbol
  134: 163,
  // Pounds sterling
  135: 9834,
  // Music 8'th note
  136: 224,
  // lowercase a, grave accent
  137: 32,
  // transparent space (regular)
  138: 232,
  // lowercase e, grave accent
  139: 226,
  // lowercase a, circumflex accent
  140: 234,
  // lowercase e, circumflex accent
  141: 238,
  // lowercase i, circumflex accent
  142: 244,
  // lowercase o, circumflex accent
  143: 251,
  // lowercase u, circumflex accent
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x12 AND LOW BETWEEN 0x20 AND 0x3F
  144: 193,
  // capital letter A with acute
  145: 201,
  // capital letter E with acute
  146: 211,
  // capital letter O with acute
  147: 218,
  // capital letter U with acute
  148: 220,
  // capital letter U with diaresis
  149: 252,
  // lowercase letter U with diaeresis
  150: 8216,
  // opening single quote
  151: 161,
  // inverted exclamation mark
  152: 42,
  // asterisk
  153: 8217,
  // closing single quote
  154: 9473,
  // box drawings heavy horizontal
  155: 169,
  // copyright sign
  156: 8480,
  // Service mark
  157: 8226,
  // (round) bullet
  158: 8220,
  // Left double quotation mark
  159: 8221,
  // Right double quotation mark
  160: 192,
  // uppercase A, grave accent
  161: 194,
  // uppercase A, circumflex
  162: 199,
  // uppercase C with cedilla
  163: 200,
  // uppercase E, grave accent
  164: 202,
  // uppercase E, circumflex
  165: 203,
  // capital letter E with diaresis
  166: 235,
  // lowercase letter e with diaresis
  167: 206,
  // uppercase I, circumflex
  168: 207,
  // uppercase I, with diaresis
  169: 239,
  // lowercase i, with diaresis
  170: 212,
  // uppercase O, circumflex
  171: 217,
  // uppercase U, grave accent
  172: 249,
  // lowercase u, grave accent
  173: 219,
  // uppercase U, circumflex
  174: 171,
  // left-pointing double angle quotation mark
  175: 187,
  // right-pointing double angle quotation mark
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x13 AND LOW BETWEEN 0x20 AND 0x3F
  176: 195,
  // Uppercase A, tilde
  177: 227,
  // Lowercase a, tilde
  178: 205,
  // Uppercase I, acute accent
  179: 204,
  // Uppercase I, grave accent
  180: 236,
  // Lowercase i, grave accent
  181: 210,
  // Uppercase O, grave accent
  182: 242,
  // Lowercase o, grave accent
  183: 213,
  // Uppercase O, tilde
  184: 245,
  // Lowercase o, tilde
  185: 123,
  // Open curly brace
  186: 125,
  // Closing curly brace
  187: 92,
  // Backslash
  188: 94,
  // Caret
  189: 95,
  // Underscore
  190: 124,
  // Pipe (vertical line)
  191: 8764,
  // Tilde operator
  192: 196,
  // Uppercase A, umlaut
  193: 228,
  // Lowercase A, umlaut
  194: 214,
  // Uppercase O, umlaut
  195: 246,
  // Lowercase o, umlaut
  196: 223,
  // Esszett (sharp S)
  197: 165,
  // Yen symbol
  198: 164,
  // Generic currency sign
  199: 9475,
  // Box drawings heavy vertical
  200: 197,
  // Uppercase A, ring
  201: 229,
  // Lowercase A, ring
  202: 216,
  // Uppercase O, stroke
  203: 248,
  // Lowercase o, strok
  204: 9487,
  // Box drawings heavy down and right
  205: 9491,
  // Box drawings heavy down and left
  206: 9495,
  // Box drawings heavy up and right
  207: 9499
  // Box drawings heavy up and left
}, Wl = (r) => String.fromCharCode(Wg[r] || r), at = 15, bt = 100, Yg = {
  17: 1,
  18: 3,
  21: 5,
  22: 7,
  23: 9,
  16: 11,
  19: 12,
  20: 14
}, jg = {
  17: 2,
  18: 4,
  21: 6,
  22: 8,
  23: 10,
  19: 13,
  20: 15
}, zg = {
  25: 1,
  26: 3,
  29: 5,
  30: 7,
  31: 9,
  24: 11,
  27: 12,
  28: 14
}, qg = {
  25: 2,
  26: 4,
  29: 6,
  30: 8,
  31: 10,
  27: 13,
  28: 15
}, Xg = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class Qg {
  constructor() {
    this.time = null, this.verboseLevel = 0;
  }
  log(e, t) {
    if (this.verboseLevel >= e) {
      const s = typeof t == "function" ? t() : t;
      ue.log(`${this.time} [${e}] ${s}`);
    }
  }
}
const Kt = function(e) {
  const t = [];
  for (let s = 0; s < e.length; s++)
    t.push(e[s].toString(16));
  return t;
};
class Yl {
  constructor() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  reset() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  setStyles(e) {
    const t = ["foreground", "underline", "italics", "background", "flash"];
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      e.hasOwnProperty(i) && (this[i] = e[i]);
    }
  }
  isDefault() {
    return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
  }
  equals(e) {
    return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash;
  }
  copy(e) {
    this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash;
  }
  toString() {
    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
  }
}
class Zg {
  constructor() {
    this.uchar = " ", this.penState = new Yl();
  }
  reset() {
    this.uchar = " ", this.penState.reset();
  }
  setChar(e, t) {
    this.uchar = e, this.penState.copy(t);
  }
  setPenState(e) {
    this.penState.copy(e);
  }
  equals(e) {
    return this.uchar === e.uchar && this.penState.equals(e.penState);
  }
  copy(e) {
    this.uchar = e.uchar, this.penState.copy(e.penState);
  }
  isEmpty() {
    return this.uchar === " " && this.penState.isDefault();
  }
}
class Jg {
  constructor(e) {
    this.chars = [], this.pos = 0, this.currPenState = new Yl(), this.cueStartTime = null, this.logger = void 0;
    for (let t = 0; t < bt; t++)
      this.chars.push(new Zg());
    this.logger = e;
  }
  equals(e) {
    for (let t = 0; t < bt; t++)
      if (!this.chars[t].equals(e.chars[t]))
        return !1;
    return !0;
  }
  copy(e) {
    for (let t = 0; t < bt; t++)
      this.chars[t].copy(e.chars[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < bt; t++)
      if (!this.chars[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  /**
   *  Set the cursor to a valid column.
   */
  setCursor(e) {
    this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > bt && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = bt);
  }
  /**
   * Move the cursor relative to current position.
   */
  moveCursor(e) {
    const t = this.pos + e;
    if (e > 1)
      for (let s = this.pos + 1; s < t + 1; s++)
        this.chars[s].setPenState(this.currPenState);
    this.setCursor(t);
  }
  /**
   * Backspace, move one step back and clear character.
   */
  backSpace() {
    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
  }
  insertChar(e) {
    e >= 144 && this.backSpace();
    const t = Wl(e);
    if (this.pos >= bt) {
      this.logger.log(0, () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
      return;
    }
    this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1);
  }
  clearFromPos(e) {
    let t;
    for (t = e; t < bt; t++)
      this.chars[t].reset();
  }
  clear() {
    this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
  }
  clearToEndOfRow() {
    this.clearFromPos(this.pos);
  }
  getTextString() {
    const e = [];
    let t = !0;
    for (let s = 0; s < bt; s++) {
      const i = this.chars[s].uchar;
      i !== " " && (t = !1), e.push(i);
    }
    return t ? "" : e.join("");
  }
  setPenStyles(e) {
    this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState);
  }
}
class yn {
  constructor(e) {
    this.rows = [], this.currRow = at - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0;
    for (let t = 0; t < at; t++)
      this.rows.push(new Jg(e));
    this.logger = e;
  }
  reset() {
    for (let e = 0; e < at; e++)
      this.rows[e].clear();
    this.currRow = at - 1;
  }
  equals(e) {
    let t = !0;
    for (let s = 0; s < at; s++)
      if (!this.rows[s].equals(e.rows[s])) {
        t = !1;
        break;
      }
    return t;
  }
  copy(e) {
    for (let t = 0; t < at; t++)
      this.rows[t].copy(e.rows[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < at; t++)
      if (!this.rows[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  backSpace() {
    this.rows[this.currRow].backSpace();
  }
  clearToEndOfRow() {
    this.rows[this.currRow].clearToEndOfRow();
  }
  /**
   * Insert a character (without styling) in the current row.
   */
  insertChar(e) {
    this.rows[this.currRow].insertChar(e);
  }
  setPen(e) {
    this.rows[this.currRow].setPenStyles(e);
  }
  moveCursor(e) {
    this.rows[this.currRow].moveCursor(e);
  }
  setCursor(e) {
    this.logger.log(2, "setCursor: " + e), this.rows[this.currRow].setCursor(e);
  }
  setPAC(e) {
    this.logger.log(2, () => "pacData = " + ge(e));
    let t = e.row - 1;
    if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
      for (let o = 0; o < at; o++)
        this.rows[o].clear();
      const n = this.currRow + 1 - this.nrRollUpRows, a = this.lastOutputScreen;
      if (a) {
        const o = a.rows[n].cueStartTime, c = this.logger.time;
        if (o !== null && c !== null && o < c)
          for (let l = 0; l < this.nrRollUpRows; l++)
            this.rows[t - this.nrRollUpRows + l + 1].copy(a.rows[n + l]);
      }
    }
    this.currRow = t;
    const s = this.rows[this.currRow];
    if (e.indent !== null) {
      const n = e.indent, a = Math.max(n - 1, 0);
      s.setCursor(e.indent), e.color = s.chars[a].penState.foreground;
    }
    const i = {
      foreground: e.color,
      underline: e.underline,
      italics: e.italics,
      background: "black",
      flash: !1
    };
    this.setPen(i);
  }
  /**
   * Set background/extra foreground, but first do back_space, and then insert space (backwards compatibility).
   */
  setBkgData(e) {
    this.logger.log(2, () => "bkgData = " + ge(e)), this.backSpace(), this.setPen(e), this.insertChar(32);
  }
  setRollUpRows(e) {
    this.nrRollUpRows = e;
  }
  rollUp() {
    if (this.nrRollUpRows === null) {
      this.logger.log(3, "roll_up but nrRollUpRows not set yet");
      return;
    }
    this.logger.log(1, () => this.getDisplayText());
    const e = this.currRow + 1 - this.nrRollUpRows, t = this.rows.splice(e, 1)[0];
    t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(2, "Rolling up");
  }
  /**
   * Get all non-empty rows with as unicode text.
   */
  getDisplayText(e) {
    e = e || !1;
    const t = [];
    let s = "", i = -1;
    for (let n = 0; n < at; n++) {
      const a = this.rows[n].getTextString();
      a && (i = n + 1, e ? t.push("Row " + i + ": '" + a + "'") : t.push(a.trim()));
    }
    return t.length > 0 && (e ? s = "[" + t.join(" | ") + "]" : s = t.join(`
`)), s;
  }
  getTextAndFormat() {
    return this.rows;
  }
}
class to {
  constructor(e, t, s) {
    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new yn(s), this.nonDisplayedMemory = new yn(s), this.lastOutputScreen = new yn(s), this.currRollUpRow = this.displayedMemory.rows[at - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = s;
  }
  reset() {
    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[at - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
  }
  getHandler() {
    return this.outputFilter;
  }
  setHandler(e) {
    this.outputFilter = e;
  }
  setPAC(e) {
    this.writeScreen.setPAC(e);
  }
  setBkgData(e) {
    this.writeScreen.setBkgData(e);
  }
  setMode(e) {
    e !== this.mode && (this.mode = e, this.logger.log(2, () => "MODE=" + e), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e);
  }
  insertChars(e) {
    for (let s = 0; s < e.length; s++)
      this.writeScreen.insertChar(e[s]);
    const t = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
    this.logger.log(2, () => t + ": " + this.writeScreen.getDisplayText(!0)), (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") && (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate());
  }
  ccRCL() {
    this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
  }
  ccBS() {
    this.logger.log(2, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
  }
  ccAOF() {
  }
  ccAON() {
  }
  ccDER() {
    this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
  }
  ccRU(e) {
    this.logger.log(2, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e);
  }
  ccFON() {
    this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({
      flash: !0
    });
  }
  ccRDC() {
    this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
  }
  ccTR() {
    this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
  }
  ccRTD() {
    this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
  }
  ccEDM() {
    this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0);
  }
  ccCR() {
    this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0);
  }
  ccENM() {
    this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
  }
  ccEOC() {
    if (this.logger.log(2, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
      const e = this.displayedMemory;
      this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText());
    }
    this.outputDataUpdate(!0);
  }
  ccTO(e) {
    this.logger.log(2, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e);
  }
  ccMIDROW(e) {
    const t = {
      flash: !1
    };
    if (t.underline = e % 2 === 1, t.italics = e >= 46, t.italics)
      t.foreground = "white";
    else {
      const s = Math.floor(e / 2) - 16, i = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
      t.foreground = i[s];
    }
    this.logger.log(2, "MIDROW: " + ge(t)), this.writeScreen.setPen(t);
  }
  outputDataUpdate(e = !1) {
    const t = this.logger.time;
    t !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = t : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t), this.lastOutputScreen.copy(this.displayedMemory));
  }
  cueSplitAtTime(e) {
    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e));
  }
}
class so {
  constructor(e, t, s) {
    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = tm(), this.logger = void 0;
    const i = this.logger = new Qg();
    this.channels = [null, new to(e, t, i), new to(e + 1, s, i)];
  }
  getHandler(e) {
    return this.channels[e].getHandler();
  }
  setHandler(e, t) {
    this.channels[e].setHandler(t);
  }
  /**
   * Add data for time t in forms of list of bytes (unsigned ints). The bytes are treated as pairs.
   */
  addData(e, t) {
    this.logger.time = e;
    for (let s = 0; s < t.length; s += 2) {
      const i = t[s] & 127, n = t[s + 1] & 127;
      let a = !1, o = null;
      if (i === 0 && n === 0)
        continue;
      this.logger.log(3, () => "[" + Kt([t[s], t[s + 1]]) + "] -> (" + Kt([i, n]) + ")");
      const c = this.cmdHistory;
      if (i >= 16 && i <= 31) {
        if (em(i, n, c)) {
          ai(null, null, c), this.logger.log(3, () => "Repeated command (" + Kt([i, n]) + ") is dropped");
          continue;
        }
        ai(i, n, this.cmdHistory), a = this.parseCmd(i, n), a || (a = this.parseMidrow(i, n)), a || (a = this.parsePAC(i, n)), a || (a = this.parseBackgroundAttributes(i, n));
      } else
        ai(null, null, c);
      if (!a && (o = this.parseChars(i, n), o)) {
        const u = this.currentChannel;
        u && u > 0 ? this.channels[u].insertChars(o) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
      }
      !a && !o && this.logger.log(2, () => "Couldn't parse cleaned data " + Kt([i, n]) + " orig: " + Kt([t[s], t[s + 1]]));
    }
  }
  /**
   * Parse Command.
   * @returns True if a command was found
   */
  parseCmd(e, t) {
    const s = (e === 20 || e === 28 || e === 21 || e === 29) && t >= 32 && t <= 47, i = (e === 23 || e === 31) && t >= 33 && t <= 35;
    if (!(s || i))
      return !1;
    const n = e === 20 || e === 21 || e === 23 ? 1 : 2, a = this.channels[n];
    return e === 20 || e === 21 || e === 28 || e === 29 ? t === 32 ? a.ccRCL() : t === 33 ? a.ccBS() : t === 34 ? a.ccAOF() : t === 35 ? a.ccAON() : t === 36 ? a.ccDER() : t === 37 ? a.ccRU(2) : t === 38 ? a.ccRU(3) : t === 39 ? a.ccRU(4) : t === 40 ? a.ccFON() : t === 41 ? a.ccRDC() : t === 42 ? a.ccTR() : t === 43 ? a.ccRTD() : t === 44 ? a.ccEDM() : t === 45 ? a.ccCR() : t === 46 ? a.ccENM() : t === 47 && a.ccEOC() : a.ccTO(t - 32), this.currentChannel = n, !0;
  }
  /**
   * Parse midrow styling command
   */
  parseMidrow(e, t) {
    let s = 0;
    if ((e === 17 || e === 25) && t >= 32 && t <= 47) {
      if (e === 17 ? s = 1 : s = 2, s !== this.currentChannel)
        return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
      const i = this.channels[s];
      return i ? (i.ccMIDROW(t), this.logger.log(3, () => "MIDROW (" + Kt([e, t]) + ")"), !0) : !1;
    }
    return !1;
  }
  /**
   * Parse Preable Access Codes (Table 53).
   * @returns {Boolean} Tells if PAC found
   */
  parsePAC(e, t) {
    let s;
    const i = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127, n = (e === 16 || e === 24) && t >= 64 && t <= 95;
    if (!(i || n))
      return !1;
    const a = e <= 23 ? 1 : 2;
    t >= 64 && t <= 95 ? s = a === 1 ? Yg[e] : zg[e] : s = a === 1 ? jg[e] : qg[e];
    const o = this.channels[a];
    return o ? (o.setPAC(this.interpretPAC(s, t)), this.currentChannel = a, !0) : !1;
  }
  /**
   * Interpret the second byte of the pac, and return the information.
   * @returns pacData with style parameters
   */
  interpretPAC(e, t) {
    let s;
    const i = {
      color: null,
      italics: !1,
      indent: null,
      underline: !1,
      row: e
    };
    return t > 95 ? s = t - 96 : s = t - 64, i.underline = (s & 1) === 1, s <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(s / 2)] : s <= 15 ? (i.italics = !0, i.color = "white") : i.indent = Math.floor((s - 16) / 2) * 4, i;
  }
  /**
   * Parse characters.
   * @returns An array with 1 to 2 codes corresponding to chars, if found. null otherwise.
   */
  parseChars(e, t) {
    let s, i = null, n = null;
    if (e >= 25 ? (s = 2, n = e - 8) : (s = 1, n = e), n >= 17 && n <= 19) {
      let a;
      n === 17 ? a = t + 80 : n === 18 ? a = t + 112 : a = t + 144, this.logger.log(2, () => "Special char '" + Wl(a) + "' in channel " + s), i = [a];
    } else e >= 32 && e <= 127 && (i = t === 0 ? [e] : [e, t]);
    return i && this.logger.log(3, () => "Char codes =  " + Kt(i).join(",")), i;
  }
  /**
   * Parse extended background attributes as well as new foreground color black.
   * @returns True if background attributes are found
   */
  parseBackgroundAttributes(e, t) {
    const s = (e === 16 || e === 24) && t >= 32 && t <= 47, i = (e === 23 || e === 31) && t >= 45 && t <= 47;
    if (!(s || i))
      return !1;
    let n;
    const a = {};
    e === 16 || e === 24 ? (n = Math.floor((t - 32) / 2), a.background = Xg[n], t % 2 === 1 && (a.background = a.background + "_semi")) : t === 45 ? a.background = "transparent" : (a.foreground = "black", t === 47 && (a.underline = !0));
    const o = e <= 23 ? 1 : 2;
    return this.channels[o].setBkgData(a), !0;
  }
  /**
   * Reset state of parser and its channels.
   */
  reset() {
    for (let e = 0; e < Object.keys(this.channels).length; e++) {
      const t = this.channels[e];
      t && t.reset();
    }
    ai(null, null, this.cmdHistory);
  }
  /**
   * Trigger the generation of a cue, and the start of a new one if displayScreens are not empty.
   */
  cueSplitAtTime(e) {
    for (let t = 0; t < this.channels.length; t++) {
      const s = this.channels[t];
      s && s.cueSplitAtTime(e);
    }
  }
}
function ai(r, e, t) {
  t.a = r, t.b = e;
}
function em(r, e, t) {
  return t.a === r && t.b === e;
}
function tm() {
  return {
    a: null,
    b: null
  };
}
var Er = function() {
  if (Di != null && Di.VTTCue)
    return self.VTTCue;
  const r = ["", "lr", "rl"], e = ["start", "middle", "end", "left", "right"];
  function t(o, c) {
    if (typeof c != "string" || !Array.isArray(o))
      return !1;
    const l = c.toLowerCase();
    return ~o.indexOf(l) ? l : !1;
  }
  function s(o) {
    return t(r, o);
  }
  function i(o) {
    return t(e, o);
  }
  function n(o, ...c) {
    let l = 1;
    for (; l < arguments.length; l++) {
      const u = arguments[l];
      for (const h in u)
        o[h] = u[h];
    }
    return o;
  }
  function a(o, c, l) {
    const u = this, h = {
      enumerable: !0
    };
    u.hasBeenReset = !1;
    let d = "", f = !1, g = o, p = c, y = l, E = null, T = "", S = !0, v = "auto", x = "start", C = 50, A = "middle", R = 50, b = "middle";
    Object.defineProperty(u, "id", n({}, h, {
      get: function() {
        return d;
      },
      set: function(L) {
        d = "" + L;
      }
    })), Object.defineProperty(u, "pauseOnExit", n({}, h, {
      get: function() {
        return f;
      },
      set: function(L) {
        f = !!L;
      }
    })), Object.defineProperty(u, "startTime", n({}, h, {
      get: function() {
        return g;
      },
      set: function(L) {
        if (typeof L != "number")
          throw new TypeError("Start time must be set to a number.");
        g = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "endTime", n({}, h, {
      get: function() {
        return p;
      },
      set: function(L) {
        if (typeof L != "number")
          throw new TypeError("End time must be set to a number.");
        p = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "text", n({}, h, {
      get: function() {
        return y;
      },
      set: function(L) {
        y = "" + L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "region", n({}, h, {
      get: function() {
        return E;
      },
      set: function(L) {
        E = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "vertical", n({}, h, {
      get: function() {
        return T;
      },
      set: function(L) {
        const P = s(L);
        if (P === !1)
          throw new SyntaxError("An invalid or illegal string was specified.");
        T = P, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "snapToLines", n({}, h, {
      get: function() {
        return S;
      },
      set: function(L) {
        S = !!L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "line", n({}, h, {
      get: function() {
        return v;
      },
      set: function(L) {
        if (typeof L != "number" && L !== "auto")
          throw new SyntaxError("An invalid number or illegal string was specified.");
        v = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "lineAlign", n({}, h, {
      get: function() {
        return x;
      },
      set: function(L) {
        const P = i(L);
        if (!P)
          throw new SyntaxError("An invalid or illegal string was specified.");
        x = P, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "position", n({}, h, {
      get: function() {
        return C;
      },
      set: function(L) {
        if (L < 0 || L > 100)
          throw new Error("Position must be between 0 and 100.");
        C = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "positionAlign", n({}, h, {
      get: function() {
        return A;
      },
      set: function(L) {
        const P = i(L);
        if (!P)
          throw new SyntaxError("An invalid or illegal string was specified.");
        A = P, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "size", n({}, h, {
      get: function() {
        return R;
      },
      set: function(L) {
        if (L < 0 || L > 100)
          throw new Error("Size must be between 0 and 100.");
        R = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "align", n({}, h, {
      get: function() {
        return b;
      },
      set: function(L) {
        const P = i(L);
        if (!P)
          throw new SyntaxError("An invalid or illegal string was specified.");
        b = P, this.hasBeenReset = !0;
      }
    })), u.displayState = void 0;
  }
  return a.prototype.getCueAsHTML = function() {
    return self.WebVTT.convertCueToDOMTree(self, this.text);
  }, a;
}();
class sm {
  decode(e, t) {
    if (!e)
      return "";
    if (typeof e != "string")
      throw new Error("Error - expected string data.");
    return decodeURIComponent(encodeURIComponent(e));
  }
}
function jl(r) {
  function e(s, i, n, a) {
    return (s | 0) * 3600 + (i | 0) * 60 + (n | 0) + parseFloat(a || 0);
  }
  const t = r.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
  return t ? parseFloat(t[2]) > 59 ? e(t[2], t[3], 0, t[4]) : e(t[1], t[2], t[3], t[4]) : null;
}
class im {
  constructor() {
    this.values = /* @__PURE__ */ Object.create(null);
  }
  // Only accept the first assignment to any key.
  set(e, t) {
    !this.get(e) && t !== "" && (this.values[e] = t);
  }
  // Return the value for a key, or a default value.
  // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
  // a number of possible default values as properties where 'defaultKey' is
  // the key of the property that will be chosen; otherwise it's assumed to be
  // a single value.
  get(e, t, s) {
    return s ? this.has(e) ? this.values[e] : t[s] : this.has(e) ? this.values[e] : t;
  }
  // Check whether we have a value for a key.
  has(e) {
    return e in this.values;
  }
  // Accept a setting if its one of the given alternatives.
  alt(e, t, s) {
    for (let i = 0; i < s.length; ++i)
      if (t === s[i]) {
        this.set(e, t);
        break;
      }
  }
  // Accept a setting if its a valid (signed) integer.
  integer(e, t) {
    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
  }
  // Accept a setting if its a valid percentage.
  percent(e, t) {
    if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
      const s = parseFloat(t);
      if (s >= 0 && s <= 100)
        return this.set(e, s), !0;
    }
    return !1;
  }
}
function zl(r, e, t, s) {
  const i = s ? r.split(s) : [r];
  for (const n in i) {
    if (typeof i[n] != "string")
      continue;
    const a = i[n].split(t);
    if (a.length !== 2)
      continue;
    const o = a[0], c = a[1];
    e(o, c);
  }
}
const Yn = new Er(0, 0, ""), oi = Yn.align === "middle" ? "middle" : "center";
function nm(r, e, t) {
  const s = r;
  function i() {
    const o = jl(r);
    if (o === null)
      throw new Error("Malformed timestamp: " + s);
    return r = r.replace(/^[^\sa-zA-Z-]+/, ""), o;
  }
  function n(o, c) {
    const l = new im();
    zl(o, function(d, f) {
      let g;
      switch (d) {
        case "region":
          for (let p = t.length - 1; p >= 0; p--)
            if (t[p].id === f) {
              l.set(d, t[p].region);
              break;
            }
          break;
        case "vertical":
          l.alt(d, f, ["rl", "lr"]);
          break;
        case "line":
          g = f.split(","), l.integer(d, g[0]), l.percent(d, g[0]) && l.set("snapToLines", !1), l.alt(d, g[0], ["auto"]), g.length === 2 && l.alt("lineAlign", g[1], ["start", oi, "end"]);
          break;
        case "position":
          g = f.split(","), l.percent(d, g[0]), g.length === 2 && l.alt("positionAlign", g[1], ["start", oi, "end", "line-left", "line-right", "auto"]);
          break;
        case "size":
          l.percent(d, f);
          break;
        case "align":
          l.alt(d, f, ["start", oi, "end", "left", "right"]);
          break;
      }
    }, /:/, /\s/), c.region = l.get("region", null), c.vertical = l.get("vertical", "");
    let u = l.get("line", "auto");
    u === "auto" && Yn.line === -1 && (u = -1), c.line = u, c.lineAlign = l.get("lineAlign", "start"), c.snapToLines = l.get("snapToLines", !0), c.size = l.get("size", 100), c.align = l.get("align", oi);
    let h = l.get("position", "auto");
    h === "auto" && Yn.position === 50 && (h = c.align === "start" || c.align === "left" ? 0 : c.align === "end" || c.align === "right" ? 100 : 50), c.position = h;
  }
  function a() {
    r = r.replace(/^\s+/, "");
  }
  if (a(), e.startTime = i(), a(), r.slice(0, 3) !== "-->")
    throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + s);
  r = r.slice(3), a(), e.endTime = i(), a(), n(r, e);
}
function ql(r) {
  return r.replace(/<br(?: \/)?>/gi, `
`);
}
class rm {
  constructor() {
    this.state = "INITIAL", this.buffer = "", this.decoder = new sm(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
  }
  parse(e) {
    const t = this;
    e && (t.buffer += t.decoder.decode(e, {
      stream: !0
    }));
    function s() {
      let n = t.buffer, a = 0;
      for (n = ql(n); a < n.length && n[a] !== "\r" && n[a] !== `
`; )
        ++a;
      const o = n.slice(0, a);
      return n[a] === "\r" && ++a, n[a] === `
` && ++a, t.buffer = n.slice(a), o;
    }
    function i(n) {
      zl(n, function(a, o) {
      }, /:/);
    }
    try {
      let n = "";
      if (t.state === "INITIAL") {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        n = s();
        const o = n.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
        if (!(o != null && o[0]))
          throw new Error("Malformed WebVTT signature.");
        t.state = "HEADER";
      }
      let a = !1;
      for (; t.buffer; ) {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        switch (a ? a = !1 : n = s(), t.state) {
          case "HEADER":
            /:/.test(n) ? i(n) : n || (t.state = "ID");
            continue;
          case "NOTE":
            n || (t.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(n)) {
              t.state = "NOTE";
              break;
            }
            if (!n)
              continue;
            if (t.cue = new Er(0, 0, ""), t.state = "CUE", n.indexOf("-->") === -1) {
              t.cue.id = n;
              continue;
            }
          case "CUE":
            if (!t.cue) {
              t.state = "BADCUE";
              continue;
            }
            try {
              nm(n, t.cue, t.regionList);
            } catch {
              t.cue = null, t.state = "BADCUE";
              continue;
            }
            t.state = "CUETEXT";
            continue;
          case "CUETEXT":
            {
              const o = n.indexOf("-->") !== -1;
              if (!n || o && (a = !0)) {
                t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                continue;
              }
              if (t.cue === null)
                continue;
              t.cue.text && (t.cue.text += `
`), t.cue.text += n;
            }
            continue;
          case "BADCUE":
            n || (t.state = "ID");
        }
      }
    } catch {
      t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
    }
    return this;
  }
  flush() {
    const e = this;
    try {
      if ((e.cue || e.state === "HEADER") && (e.buffer += `

`, e.parse()), e.state === "INITIAL" || e.state === "BADWEBVTT")
        throw new Error("Malformed WebVTT signature.");
    } catch (t) {
      e.onparsingerror && e.onparsingerror(t);
    }
    return e.onflush && e.onflush(), this;
  }
}
const am = /\r\n|\n\r|\n|\r/g, En = function(e, t, s = 0) {
  return e.slice(s, s + t.length) === t;
}, om = function(e) {
  let t = parseInt(e.slice(-3));
  const s = parseInt(e.slice(-6, -4)), i = parseInt(e.slice(-9, -7)), n = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
  if (!G(t) || !G(s) || !G(i) || !G(n))
    throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
  return t += 1e3 * s, t += 60 * 1e3 * i, t += 60 * 60 * 1e3 * n, t;
};
function Tr(r, e, t) {
  return Ps(r.toString()) + Ps(e.toString()) + Ps(t);
}
const lm = function(e, t, s) {
  let i = e[t], n = e[i.prevCC];
  if (!n || !n.new && i.new) {
    e.ccOffset = e.presentationOffset = i.start, i.new = !1;
    return;
  }
  for (; (a = n) != null && a.new; ) {
    var a;
    e.ccOffset += i.start - n.start, i.new = !1, i = n, n = e[i.prevCC];
  }
  e.presentationOffset = s;
};
function cm(r, e, t, s, i, n, a) {
  const o = new rm(), c = Ze(new Uint8Array(r)).trim().replace(am, `
`).split(`
`), l = [], u = e ? mf(e.baseTime, e.timescale) : 0;
  let h = "00:00.000", d = 0, f = 0, g, p = !0;
  o.oncue = function(y) {
    const E = t[s];
    let T = t.ccOffset;
    const S = (d - u) / 9e4;
    if (E != null && E.new && (f !== void 0 ? T = t.ccOffset = E.start : lm(t, s, S)), S) {
      if (!e) {
        g = new Error("Missing initPTS for VTT MPEGTS");
        return;
      }
      T = S - t.presentationOffset;
    }
    const v = y.endTime - y.startTime, x = Xe((y.startTime + T - f) * 9e4, i * 9e4) / 9e4;
    y.startTime = Math.max(x, 0), y.endTime = Math.max(x + v, 0);
    const C = y.text.trim();
    y.text = decodeURIComponent(encodeURIComponent(C)), y.id || (y.id = Tr(y.startTime, y.endTime, C)), y.endTime > 0 && l.push(y);
  }, o.onparsingerror = function(y) {
    g = y;
  }, o.onflush = function() {
    if (g) {
      a(g);
      return;
    }
    n(l);
  }, c.forEach((y) => {
    if (p)
      if (En(y, "X-TIMESTAMP-MAP=")) {
        p = !1, y.slice(16).split(",").forEach((E) => {
          En(E, "LOCAL:") ? h = E.slice(6) : En(E, "MPEGTS:") && (d = parseInt(E.slice(7)));
        });
        try {
          f = om(h) / 1e3;
        } catch (E) {
          g = E;
        }
        return;
      } else y === "" && (p = !1);
    o.parse(y + `
`);
  }), o.flush();
}
const Tn = "stpp.ttml.im1t", Xl = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, Ql = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, um = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
};
function io(r, e, t, s) {
  const i = ie(new Uint8Array(r), ["mdat"]);
  if (i.length === 0) {
    s(new Error("Could not parse IMSC1 mdat"));
    return;
  }
  const n = i.map((o) => Ze(o)), a = gf(e.baseTime, 1, e.timescale);
  try {
    n.forEach((o) => t(hm(o, a)));
  } catch (o) {
    s(o);
  }
}
function hm(r, e) {
  const i = new DOMParser().parseFromString(r, "text/xml").getElementsByTagName("tt")[0];
  if (!i)
    throw new Error("Invalid ttml");
  const n = {
    frameRate: 30,
    subFrameRate: 1,
    frameRateMultiplier: 0,
    tickRate: 0
  }, a = Object.keys(n).reduce((h, d) => (h[d] = i.getAttribute(`ttp:${d}`) || n[d], h), {}), o = i.getAttribute("xml:space") !== "preserve", c = no(Sn(i, "styling", "style")), l = no(Sn(i, "layout", "region")), u = Sn(i, "body", "[begin]");
  return [].map.call(u, (h) => {
    const d = Zl(h, o);
    if (!d || !h.hasAttribute("begin"))
      return null;
    const f = xn(h.getAttribute("begin"), a), g = xn(h.getAttribute("dur"), a);
    let p = xn(h.getAttribute("end"), a);
    if (f === null)
      throw ro(h);
    if (p === null) {
      if (g === null)
        throw ro(h);
      p = f + g;
    }
    const y = new Er(f - e, p - e, d);
    y.id = Tr(y.startTime, y.endTime, y.text);
    const E = l[h.getAttribute("region")], T = c[h.getAttribute("style")], S = dm(E, T, c), {
      textAlign: v
    } = S;
    if (v) {
      const x = um[v];
      x && (y.lineAlign = x), y.align = v;
    }
    return de(y, S), y;
  }).filter((h) => h !== null);
}
function Sn(r, e, t) {
  const s = r.getElementsByTagName(e)[0];
  return s ? [].slice.call(s.querySelectorAll(t)) : [];
}
function no(r) {
  return r.reduce((e, t) => {
    const s = t.getAttribute("xml:id");
    return s && (e[s] = t), e;
  }, {});
}
function Zl(r, e) {
  return [].slice.call(r.childNodes).reduce((t, s, i) => {
    var n;
    return s.nodeName === "br" && i ? t + `
` : (n = s.childNodes) != null && n.length ? Zl(s, e) : e ? t + s.textContent.trim().replace(/\s+/g, " ") : t + s.textContent;
  }, "");
}
function dm(r, e, t) {
  const s = "http://www.w3.org/ns/ttml#styling";
  let i = null;
  const n = [
    "displayAlign",
    "textAlign",
    "color",
    "backgroundColor",
    "fontSize",
    "fontFamily"
    // 'fontWeight',
    // 'lineHeight',
    // 'wrapOption',
    // 'fontStyle',
    // 'direction',
    // 'writingMode'
  ], a = r != null && r.hasAttribute("style") ? r.getAttribute("style") : null;
  return a && t.hasOwnProperty(a) && (i = t[a]), n.reduce((o, c) => {
    const l = vn(e, s, c) || vn(r, s, c) || vn(i, s, c);
    return l && (o[c] = l), o;
  }, {});
}
function vn(r, e, t) {
  return r && r.hasAttributeNS(e, t) ? r.getAttributeNS(e, t) : null;
}
function ro(r) {
  return new Error(`Could not parse ttml timestamp ${r}`);
}
function xn(r, e) {
  if (!r)
    return null;
  let t = jl(r);
  return t === null && (Xl.test(r) ? t = fm(r, e) : Ql.test(r) && (t = gm(r, e))), t;
}
function fm(r, e) {
  const t = Xl.exec(r), s = (t[4] | 0) + (t[5] | 0) / e.subFrameRate;
  return (t[1] | 0) * 3600 + (t[2] | 0) * 60 + (t[3] | 0) + s / e.frameRate;
}
function gm(r, e) {
  const t = Ql.exec(r), s = Number(t[1]);
  switch (t[2]) {
    case "h":
      return s * 3600;
    case "m":
      return s * 60;
    case "ms":
      return s * 1e3;
    case "f":
      return s / e.frameRate;
    case "t":
      return s / e.tickRate;
  }
  return s;
}
class li {
  constructor(e, t) {
    this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t;
  }
  dispatchCue() {
    this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
  }
  newCue(e, t, s) {
    (this.startTime === null || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = s, this.timelineController.createCaptionsTrack(this.trackName);
  }
  reset() {
    this.cueRanges = [], this.startTime = null;
  }
}
class mm {
  constructor(e) {
    this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = oo(), this.captionsProperties = void 0, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = {
      textTrack1: {
        label: this.config.captionsTextTrack1Label,
        languageCode: this.config.captionsTextTrack1LanguageCode
      },
      textTrack2: {
        label: this.config.captionsTextTrack2Label,
        languageCode: this.config.captionsTextTrack2LanguageCode
      },
      textTrack3: {
        label: this.config.captionsTextTrack3Label,
        languageCode: this.config.captionsTextTrack3LanguageCode
      },
      textTrack4: {
        label: this.config.captionsTextTrack4Label,
        languageCode: this.config.captionsTextTrack4LanguageCode
      }
    }, e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(m.FRAG_LOADING, this.onFragLoading, this), e.on(m.FRAG_LOADED, this.onFragLoaded, this), e.on(m.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(m.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(m.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  destroy() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(m.FRAG_LOADING, this.onFragLoading, this), e.off(m.FRAG_LOADED, this.onFragLoaded, this), e.off(m.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(m.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(m.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.media = null, this.cea608Parser1 = this.cea608Parser2 = void 0;
  }
  initCea608Parsers() {
    const e = new li(this, "textTrack1"), t = new li(this, "textTrack2"), s = new li(this, "textTrack3"), i = new li(this, "textTrack4");
    this.cea608Parser1 = new so(1, e, t), this.cea608Parser2 = new so(3, s, i);
  }
  addCues(e, t, s, i, n) {
    let a = !1;
    for (let o = n.length; o--; ) {
      const c = n[o], l = pm(c[0], c[1], t, s);
      if (l >= 0 && (c[0] = Math.min(c[0], t), c[1] = Math.max(c[1], s), a = !0, l / (s - t) > 0.5))
        return;
    }
    if (a || n.push([t, s]), this.config.renderTextTracksNatively) {
      const o = this.captionsTracks[e];
      this.Cues.newCue(o, t, s, i);
    } else {
      const o = this.Cues.newCue(null, t, s, i);
      this.hls.trigger(m.CUES_PARSED, {
        type: "captions",
        cues: o,
        track: e
      });
    }
  }
  // Triggered when an initial PTS is found; used for synchronisation of WebVTT.
  onInitPtsFound(e, {
    frag: t,
    id: s,
    initPTS: i,
    timescale: n,
    trackId: a
  }) {
    const {
      unparsedVttFrags: o
    } = this;
    s === W.MAIN && (this.initPTS[t.cc] = {
      baseTime: i,
      timescale: n,
      trackId: a
    }), o.length && (this.unparsedVttFrags = [], o.forEach((c) => {
      this.initPTS[c.frag.cc] ? this.onFragLoaded(m.FRAG_LOADED, c) : this.hls.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: c.frag,
        error: new Error("Subtitle discontinuity domain does not match main")
      });
    }));
  }
  getExistingTrack(e, t) {
    const {
      media: s
    } = this;
    if (s)
      for (let i = 0; i < s.textTracks.length; i++) {
        const n = s.textTracks[i];
        if (ao(n, {
          name: e,
          lang: t,
          characteristics: "transcribes-spoken-dialog,describes-music-and-sound"
        }))
          return n;
      }
    return null;
  }
  createCaptionsTrack(e) {
    this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e);
  }
  createNativeTrack(e) {
    if (this.captionsTracks[e])
      return;
    const {
      captionsProperties: t,
      captionsTracks: s,
      media: i
    } = this, {
      label: n,
      languageCode: a
    } = t[e], o = this.getExistingTrack(n, a);
    if (o)
      s[e] = o, rs(s[e]), Kl(s[e], i);
    else {
      const c = this.createTextTrack("captions", n, a);
      c && (c[e] = !0, s[e] = c);
    }
  }
  createNonNativeTrack(e) {
    if (this.nonNativeCaptionsTracks[e])
      return;
    const t = this.captionsProperties[e];
    if (!t)
      return;
    const s = t.label, i = {
      _id: e,
      label: s,
      kind: "captions",
      default: t.media ? !!t.media.default : !1,
      closedCaptions: t.media
    };
    this.nonNativeCaptionsTracks[e] = i, this.hls.trigger(m.NON_NATIVE_TEXT_TRACKS_FOUND, {
      tracks: [i]
    });
  }
  createTextTrack(e, t, s) {
    const i = this.media;
    if (i)
      return i.addTextTrack(e, t, s);
  }
  onMediaAttaching(e, t) {
    this.media = t.media, t.mediaSource || this._cleanTracks();
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia;
    if (this.media = null, s)
      return;
    const {
      captionsTracks: i
    } = this;
    Object.keys(i).forEach((n) => {
      rs(i[n]), delete i[n];
    }), this.nonNativeCaptionsTracks = {};
  }
  onManifestLoading() {
    this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = oo(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
  }
  _cleanTracks() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.textTracks;
    if (t)
      for (let s = 0; s < t.length; s++)
        rs(t[s]);
  }
  onSubtitleTracksUpdated(e, t) {
    const s = t.subtitleTracks || [], i = s.some((n) => n.textCodec === Tn);
    if (this.config.enableWebVTT || i && this.config.enableIMSC1) {
      if (Dl(this.tracks, s)) {
        this.tracks = s;
        return;
      }
      if (this.textTracks = [], this.tracks = s, this.config.renderTextTracksNatively) {
        const a = this.media, o = a ? Ti(a.textTracks) : null;
        if (this.tracks.forEach((c, l) => {
          let u;
          if (o) {
            let h = null;
            for (let d = 0; d < o.length; d++)
              if (o[d] && ao(o[d], c)) {
                h = o[d], o[d] = null;
                break;
              }
            h && (u = h);
          }
          if (u)
            rs(u);
          else {
            const h = Jl(c);
            u = this.createTextTrack(h, c.name, c.lang), u && (u.mode = "disabled");
          }
          u && this.textTracks.push(u);
        }), o != null && o.length) {
          const c = o.filter((l) => l !== null).map((l) => l.label);
          c.length && this.hls.logger.warn(`Media element contains unused subtitle tracks: ${c.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`);
        }
      } else if (this.tracks.length) {
        const a = this.tracks.map((o) => ({
          label: o.name,
          kind: o.type.toLowerCase(),
          default: o.default,
          subtitleTrack: o
        }));
        this.hls.trigger(m.NON_NATIVE_TEXT_TRACKS_FOUND, {
          tracks: a
        });
      }
    }
  }
  onManifestLoaded(e, t) {
    this.config.enableCEA708Captions && t.captions && t.captions.forEach((s) => {
      const i = /(?:CC|SERVICE)([1-4])/.exec(s.instreamId);
      if (!i)
        return;
      const n = `textTrack${i[1]}`, a = this.captionsProperties[n];
      a && (a.label = s.name, s.lang && (a.languageCode = s.lang), a.media = s);
    });
  }
  closedCaptionsForLevel(e) {
    const t = this.hls.levels[e.level];
    return t == null ? void 0 : t.attrs["CLOSED-CAPTIONS"];
  }
  onFragLoading(e, t) {
    if (this.enabled && t.frag.type === W.MAIN) {
      var s, i;
      const {
        cea608Parser1: n,
        cea608Parser2: a,
        lastSn: o
      } = this, {
        cc: c,
        sn: l
      } = t.frag, u = (s = (i = t.part) == null ? void 0 : i.index) != null ? s : -1;
      n && a && (l !== o + 1 || l === o && u !== this.lastPartIndex + 1 || c !== this.lastCc) && (n.reset(), a.reset()), this.lastCc = c, this.lastSn = l, this.lastPartIndex = u;
    }
  }
  onFragLoaded(e, t) {
    const {
      frag: s,
      payload: i
    } = t;
    if (s.type === W.SUBTITLE)
      if (i.byteLength) {
        const n = s.decryptdata, a = "stats" in t;
        if (n == null || !n.encrypted || a) {
          const o = this.tracks[s.level], c = this.vttCCs;
          c[s.cc] || (c[s.cc] = {
            start: s.start,
            prevCC: this.prevCC,
            new: !0
          }, this.prevCC = s.cc), o && o.textCodec === Tn ? this._parseIMSC1(s, i) : this._parseVTTs(t);
        }
      } else
        this.hls.trigger(m.SUBTITLE_FRAG_PROCESSED, {
          success: !1,
          frag: s,
          error: new Error("Empty subtitle payload")
        });
  }
  _parseIMSC1(e, t) {
    const s = this.hls;
    io(t, this.initPTS[e.cc], (i) => {
      this._appendCues(i, e.level), s.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: e
      });
    }, (i) => {
      s.logger.log(`Failed to parse IMSC1: ${i}`), s.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: e,
        error: i
      });
    });
  }
  _parseVTTs(e) {
    var t;
    const {
      frag: s,
      payload: i
    } = e, {
      initPTS: n,
      unparsedVttFrags: a
    } = this, o = n.length - 1;
    if (!n[s.cc] && o === -1) {
      a.push(e);
      return;
    }
    const c = this.hls, l = (t = s.initSegment) != null && t.data ? it(s.initSegment.data, new Uint8Array(i)).buffer : i;
    cm(l, this.initPTS[s.cc], this.vttCCs, s.cc, s.start, (u) => {
      this._appendCues(u, s.level), c.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: s
      });
    }, (u) => {
      const h = u.message === "Missing initPTS for VTT MPEGTS";
      h ? a.push(e) : this._fallbackToIMSC1(s, i), c.logger.log(`Failed to parse VTT cue: ${u}`), !(h && o > s.cc) && c.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: s,
        error: u
      });
    });
  }
  _fallbackToIMSC1(e, t) {
    const s = this.tracks[e.level];
    s.textCodec || io(t, this.initPTS[e.cc], () => {
      s.textCodec = Tn, this._parseIMSC1(e, t);
    }, () => {
      s.textCodec = "wvtt";
    });
  }
  _appendCues(e, t) {
    const s = this.hls;
    if (this.config.renderTextTracksNatively) {
      const i = this.textTracks[t];
      if (!i || i.mode === "disabled")
        return;
      e.forEach((n) => Vl(i, n));
    } else {
      const i = this.tracks[t];
      if (!i)
        return;
      const n = i.default ? "default" : "subtitles" + t;
      s.trigger(m.CUES_PARSED, {
        type: "subtitles",
        cues: e,
        track: n
      });
    }
  }
  onFragDecrypted(e, t) {
    const {
      frag: s
    } = t;
    s.type === W.SUBTITLE && this.onFragLoaded(m.FRAG_LOADED, t);
  }
  onSubtitleTracksCleared() {
    this.tracks = [], this.captionsTracks = {};
  }
  onFragParsingUserdata(e, t) {
    if (!this.enabled || !this.config.enableCEA708Captions)
      return;
    const {
      frag: s,
      samples: i
    } = t;
    if (!(s.type === W.MAIN && this.closedCaptionsForLevel(s) === "NONE"))
      for (let n = 0; n < i.length; n++) {
        const a = i[n].bytes;
        if (a) {
          this.cea608Parser1 || this.initCea608Parsers();
          const o = this.extractCea608Data(a);
          this.cea608Parser1.addData(i[n].pts, o[0]), this.cea608Parser2.addData(i[n].pts, o[1]);
        }
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: s,
    endOffsetSubtitles: i,
    type: n
  }) {
    const {
      media: a
    } = this;
    if (!(!a || a.currentTime < s)) {
      if (!n || n === "video") {
        const {
          captionsTracks: o
        } = this;
        Object.keys(o).forEach((c) => Wn(o[c], t, s));
      }
      if (this.config.renderTextTracksNatively && t === 0 && i !== void 0) {
        const {
          textTracks: o
        } = this;
        Object.keys(o).forEach((c) => Wn(o[c], t, i));
      }
    }
  }
  extractCea608Data(e) {
    const t = [[], []], s = e[0] & 31;
    let i = 2;
    for (let n = 0; n < s; n++) {
      const a = e[i++], o = 127 & e[i++], c = 127 & e[i++];
      if (o === 0 && c === 0)
        continue;
      if ((4 & a) !== 0) {
        const u = 3 & a;
        (u === 0 || u === 1) && (t[u].push(o), t[u].push(c));
      }
    }
    return t;
  }
}
function Jl(r) {
  return r.characteristics && /transcribes-spoken-dialog/gi.test(r.characteristics) && /describes-music-and-sound/gi.test(r.characteristics) ? "captions" : "subtitles";
}
function ao(r, e) {
  return !!r && r.kind === Jl(e) && Gn(e, r);
}
function pm(r, e, t, s) {
  return Math.min(e, s) - Math.max(r, t);
}
function oo() {
  return {
    ccOffset: 0,
    presentationOffset: 0,
    0: {
      start: 0,
      prevCC: -1,
      new: !0
    }
  };
}
const ym = /\s/, Em = {
  newCue(r, e, t, s) {
    const i = [];
    let n, a, o, c, l;
    const u = self.VTTCue || self.TextTrackCue;
    for (let d = 0; d < s.rows.length; d++)
      if (n = s.rows[d], o = !0, c = 0, l = "", !n.isEmpty()) {
        var h;
        for (let p = 0; p < n.chars.length; p++)
          ym.test(n.chars[p].uchar) && o ? c++ : (l += n.chars[p].uchar, o = !1);
        n.cueStartTime = e, e === t && (t += 1e-4), c >= 16 ? c-- : c++;
        const f = ql(l.trim()), g = Tr(e, t, f);
        r != null && (h = r.cues) != null && h.getCueById(g) || (a = new u(e, t, f), a.id = g, a.line = d + 1, a.align = "left", a.position = 10 + Math.min(80, Math.floor(c * 8 / 32) * 10), i.push(a));
      }
    return r && i.length && (i.sort((d, f) => d.line === "auto" || f.line === "auto" ? 0 : d.line > 8 && f.line > 8 ? f.line - d.line : d.line - f.line), i.forEach((d) => Vl(r, d))), i;
  }
};
function Tm() {
  if (
    // @ts-ignore
    self.fetch && self.AbortController && self.ReadableStream && self.Request
  )
    try {
      return new self.ReadableStream({}), !0;
    } catch {
    }
  return !1;
}
const Sm = /(\d+)-(\d+)\/(\d+)/;
class lo {
  constructor(e) {
    this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e.fetchSetup || Im, this.controller = new self.AbortController(), this.stats = new Qn();
  }
  destroy() {
    this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null;
  }
  abortInternal() {
    this.controller && !this.stats.loading.end && (this.stats.aborted = !0, this.controller.abort());
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
  }
  load(e, t, s) {
    const i = this.stats;
    if (i.loading.start)
      throw new Error("Loader can only be used once.");
    i.loading.start = self.performance.now();
    const n = vm(e, this.controller.signal), a = e.responseType === "arraybuffer", o = a ? "byteLength" : "length", {
      maxTimeToFirstByteMs: c,
      maxLoadTimeMs: l
    } = t.loadPolicy;
    this.context = e, this.config = t, this.callbacks = s, this.request = this.fetchSetup(e, n), self.clearTimeout(this.requestTimeout), t.timeout = c && G(c) ? c : l, this.requestTimeout = self.setTimeout(() => {
      this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(i, e, this.response));
    }, t.timeout), (Bs(this.request) ? this.request.then(self.fetch) : self.fetch(this.request)).then((h) => {
      var d;
      this.response = this.loader = h;
      const f = Math.max(self.performance.now(), i.loading.start);
      if (self.clearTimeout(this.requestTimeout), t.timeout = l, this.requestTimeout = self.setTimeout(() => {
        this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(i, e, this.response));
      }, l - (f - i.loading.start)), !h.ok) {
        const {
          status: p,
          statusText: y
        } = h;
        throw new Lm(y || "fetch, bad network response", p, h);
      }
      i.loading.first = f, i.total = Am(h.headers) || i.total;
      const g = (d = this.callbacks) == null ? void 0 : d.onProgress;
      return g && G(t.highWaterMark) ? this.loadProgressively(h, i, e, t.highWaterMark, g) : a ? h.arrayBuffer() : e.responseType === "json" ? h.json() : h.text();
    }).then((h) => {
      var d, f;
      const g = this.response;
      if (!g)
        throw new Error("loader destroyed");
      self.clearTimeout(this.requestTimeout), i.loading.end = Math.max(self.performance.now(), i.loading.first);
      const p = h[o];
      p && (i.loaded = i.total = p);
      const y = {
        url: g.url,
        data: h,
        code: g.status
      }, E = (d = this.callbacks) == null ? void 0 : d.onProgress;
      E && !G(t.highWaterMark) && E(i, e, h, g), (f = this.callbacks) == null || f.onSuccess(y, i, e, g);
    }).catch((h) => {
      var d;
      if (self.clearTimeout(this.requestTimeout), i.aborted)
        return;
      const f = h && h.code || 0, g = h ? h.message : null;
      (d = this.callbacks) == null || d.onError({
        code: f,
        text: g
      }, e, h ? h.details : null, i);
    });
  }
  getCacheAge() {
    let e = null;
    if (this.response) {
      const t = this.response.headers.get("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.response ? this.response.headers.get(e) : null;
  }
  loadProgressively(e, t, s, i = 0, n) {
    const a = new cl(), o = e.body.getReader(), c = () => o.read().then((l) => {
      if (l.done)
        return a.dataLength && n(t, s, a.flush().buffer, e), Promise.resolve(new ArrayBuffer(0));
      const u = l.value, h = u.length;
      return t.loaded += h, h < i || a.dataLength ? (a.push(u), a.dataLength >= i && n(t, s, a.flush().buffer, e)) : n(t, s, u.buffer, e), c();
    }).catch(() => Promise.reject());
    return c();
  }
}
function vm(r, e) {
  const t = {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    signal: e,
    headers: new self.Headers(de({}, r.headers))
  };
  return r.rangeEnd && t.headers.set("Range", "bytes=" + r.rangeStart + "-" + String(r.rangeEnd - 1)), t;
}
function xm(r) {
  const e = Sm.exec(r);
  if (e)
    return parseInt(e[2]) - parseInt(e[1]) + 1;
}
function Am(r) {
  const e = r.get("Content-Range");
  if (e) {
    const s = xm(e);
    if (G(s))
      return s;
  }
  const t = r.get("Content-Length");
  if (t)
    return parseInt(t);
}
function Im(r, e) {
  return new self.Request(r.url, e);
}
class Lm extends Error {
  constructor(e, t, s) {
    super(e), this.code = void 0, this.details = void 0, this.code = t, this.details = s;
  }
}
const bm = /^age:\s*[\d.]+\s*$/im;
class ec {
  constructor(e) {
    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = e && e.xhrSetup || null, this.stats = new Qn(), this.retryDelay = 0;
  }
  destroy() {
    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null;
  }
  abortInternal() {
    const e = this.loader;
    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e && (e.onreadystatechange = null, e.onprogress = null, e.readyState !== 4 && (this.stats.aborted = !0, e.abort()));
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
  }
  load(e, t, s) {
    if (this.stats.loading.start)
      throw new Error("Loader can only be used once.");
    this.stats.loading.start = self.performance.now(), this.context = e, this.config = t, this.callbacks = s, this.loadInternal();
  }
  loadInternal() {
    const {
      config: e,
      context: t
    } = this;
    if (!e || !t)
      return;
    const s = this.loader = new self.XMLHttpRequest(), i = this.stats;
    i.loading.first = 0, i.loaded = 0, i.aborted = !1;
    const n = this.xhrSetup;
    n ? Promise.resolve().then(() => {
      if (!(this.loader !== s || this.stats.aborted))
        return n(s, t.url);
    }).catch((a) => {
      if (!(this.loader !== s || this.stats.aborted))
        return s.open("GET", t.url, !0), n(s, t.url);
    }).then(() => {
      this.loader !== s || this.stats.aborted || this.openAndSendXhr(s, t, e);
    }).catch((a) => {
      var o;
      (o = this.callbacks) == null || o.onError({
        code: s.status,
        text: a.message
      }, t, s, i);
    }) : this.openAndSendXhr(s, t, e);
  }
  openAndSendXhr(e, t, s) {
    e.readyState || e.open("GET", t.url, !0);
    const i = t.headers, {
      maxTimeToFirstByteMs: n,
      maxLoadTimeMs: a
    } = s.loadPolicy;
    if (i)
      for (const o in i)
        e.setRequestHeader(o, i[o]);
    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, self.clearTimeout(this.requestTimeout), s.timeout = n && G(n) ? n : a, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.timeout), e.send();
  }
  readystatechange() {
    const {
      context: e,
      loader: t,
      stats: s
    } = this;
    if (!e || !t)
      return;
    const i = t.readyState, n = this.config;
    if (!s.aborted && i >= 2 && (s.loading.first === 0 && (s.loading.first = Math.max(self.performance.now(), s.loading.start), n.timeout !== n.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), n.timeout = n.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), n.loadPolicy.maxLoadTimeMs - (s.loading.first - s.loading.start)))), i === 4)) {
      self.clearTimeout(this.requestTimeout), t.onreadystatechange = null, t.onprogress = null;
      const l = t.status, u = t.responseType === "text" ? t.responseText : null;
      if (l >= 200 && l < 300) {
        const g = u ?? t.response;
        if (g != null) {
          var a, o;
          s.loading.end = Math.max(self.performance.now(), s.loading.first);
          const p = t.responseType === "arraybuffer" ? g.byteLength : g.length;
          s.loaded = s.total = p, s.bwEstimate = s.total * 8e3 / (s.loading.end - s.loading.first);
          const y = (a = this.callbacks) == null ? void 0 : a.onProgress;
          y && y(s, e, g, t);
          const E = {
            url: t.responseURL,
            data: g,
            code: l
          };
          (o = this.callbacks) == null || o.onSuccess(E, s, e, t);
          return;
        }
      }
      const h = n.loadPolicy.errorRetry, d = s.retry, f = {
        url: e.url,
        data: void 0,
        code: l
      };
      if (Ri(h, d, !1, f))
        this.retry(h);
      else {
        var c;
        ue.error(`${l} while loading ${e.url}`), (c = this.callbacks) == null || c.onError({
          code: l,
          text: t.statusText
        }, e, t, s);
      }
    }
  }
  loadtimeout() {
    if (!this.config) return;
    const e = this.config.loadPolicy.timeoutRetry, t = this.stats.retry;
    if (Ri(e, t, !0))
      this.retry(e);
    else {
      var s;
      ue.warn(`timeout while loading ${(s = this.context) == null ? void 0 : s.url}`);
      const i = this.callbacks;
      i && (this.abortInternal(), i.onTimeout(this.stats, this.context, this.loader));
    }
  }
  retry(e) {
    const {
      context: t,
      stats: s
    } = this;
    this.retryDelay = tr(e, s.retry), s.retry++, ue.warn(`${status ? "HTTP Status " + status : "Timeout"} while loading ${t == null ? void 0 : t.url}, retrying ${s.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
  }
  loadprogress(e) {
    const t = this.stats;
    t.loaded = e.loaded, e.lengthComputable && (t.total = e.total);
  }
  getCacheAge() {
    let e = null;
    if (this.loader && bm.test(this.loader.getAllResponseHeaders())) {
      const t = this.loader.getResponseHeader("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.loader && new RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e) : null;
  }
}
const Rm = {
  maxTimeToFirstByteMs: 8e3,
  maxLoadTimeMs: 2e4,
  timeoutRetry: null,
  errorRetry: null
}, _m = ce(ce({
  autoStartLoad: !0,
  // used by stream-controller
  startPosition: -1,
  // used by stream-controller
  defaultAudioCodec: void 0,
  // used by stream-controller
  debug: !1,
  // used by logger
  capLevelOnFPSDrop: !1,
  // used by fps-controller
  capLevelToPlayerSize: !1,
  // used by cap-level-controller
  ignoreDevicePixelRatio: !1,
  // used by cap-level-controller
  maxDevicePixelRatio: Number.POSITIVE_INFINITY,
  // used by cap-level-controller
  preferManagedMediaSource: !0,
  initialLiveManifestSize: 1,
  // used by stream-controller
  maxBufferLength: 30,
  // used by stream-controller
  backBufferLength: 1 / 0,
  // used by buffer-controller
  frontBufferFlushThreshold: 1 / 0,
  startOnSegmentBoundary: !1,
  // used by stream-controller
  maxBufferSize: 60 * 1e3 * 1e3,
  // used by stream-controller
  maxFragLookUpTolerance: 0.25,
  // used by stream-controller
  maxBufferHole: 0.1,
  // used by stream-controller and gap-controller
  detectStallWithCurrentTimeMs: 1250,
  // used by gap-controller
  highBufferWatchdogPeriod: 2,
  // used by gap-controller
  nudgeOffset: 0.1,
  // used by gap-controller
  nudgeMaxRetry: 3,
  // used by gap-controller
  nudgeOnVideoHole: !0,
  // used by gap-controller
  liveSyncMode: "edge",
  // used by stream-controller
  liveSyncDurationCount: 3,
  // used by latency-controller
  liveSyncOnStallIncrease: 1,
  // used by latency-controller
  liveMaxLatencyDurationCount: 1 / 0,
  // used by latency-controller
  liveSyncDuration: void 0,
  // used by latency-controller
  liveMaxLatencyDuration: void 0,
  // used by latency-controller
  maxLiveSyncPlaybackRate: 1,
  // used by latency-controller
  liveDurationInfinity: !1,
  // used by buffer-controller
  /**
   * @deprecated use backBufferLength
   */
  liveBackBufferLength: null,
  // used by buffer-controller
  maxMaxBufferLength: 600,
  // used by stream-controller
  enableWorker: !0,
  // used by transmuxer
  workerPath: null,
  // used by transmuxer
  enableSoftwareAES: !0,
  // used by decrypter
  startLevel: void 0,
  // used by level-controller
  startFragPrefetch: !1,
  // used by stream-controller
  fpsDroppedMonitoringPeriod: 5e3,
  // used by fps-controller
  fpsDroppedMonitoringThreshold: 0.2,
  // used by fps-controller
  appendErrorMaxRetry: 3,
  // used by buffer-controller
  ignorePlaylistParsingErrors: !1,
  loader: ec,
  // loader: FetchLoader,
  fLoader: void 0,
  // used by fragment-loader
  pLoader: void 0,
  // used by playlist-loader
  xhrSetup: void 0,
  // used by xhr-loader
  licenseXhrSetup: void 0,
  // used by eme-controller
  licenseResponseCallback: void 0,
  // used by eme-controller
  abrController: Bh,
  bufferController: Cf,
  capLevelController: mr,
  errorController: Hh,
  fpsController: Pg,
  stretchShortVideoTrack: !1,
  // used by mp4-remuxer
  maxAudioFramesDrift: 1,
  // used by mp4-remuxer
  forceKeyFrameOnDiscontinuity: !0,
  // used by ts-demuxer
  abrEwmaFastLive: 3,
  // used by abr-controller
  abrEwmaSlowLive: 9,
  // used by abr-controller
  abrEwmaFastVoD: 3,
  // used by abr-controller
  abrEwmaSlowVoD: 9,
  // used by abr-controller
  abrEwmaDefaultEstimate: 5e5,
  // 500 kbps  // used by abr-controller
  abrEwmaDefaultEstimateMax: 5e6,
  // 5 mbps
  abrBandWidthFactor: 0.95,
  // used by abr-controller
  abrBandWidthUpFactor: 0.7,
  // used by abr-controller
  abrMaxWithRealBitrate: !1,
  // used by abr-controller
  maxStarvationDelay: 4,
  // used by abr-controller
  maxLoadingDelay: 4,
  // used by abr-controller
  minAutoBitrate: 0,
  // used by hls
  emeEnabled: !1,
  // used by eme-controller
  widevineLicenseUrl: void 0,
  // used by eme-controller
  drmSystems: {},
  // used by eme-controller
  drmSystemOptions: {},
  // used by eme-controller
  requestMediaKeySystemAccessFunc: Zo,
  // used by eme-controller
  requireKeySystemAccessOnStart: !1,
  // used by eme-controller
  testBandwidth: !0,
  progressive: !1,
  lowLatencyMode: !0,
  cmcd: void 0,
  enableDateRangeMetadataCues: !0,
  enableEmsgMetadataCues: !0,
  enableEmsgKLVMetadata: !1,
  enableID3MetadataCues: !0,
  enableInterstitialPlayback: !0,
  interstitialAppendInPlace: !0,
  interstitialLiveLookAhead: 10,
  useMediaCapabilities: !0,
  preserveManualLevelOnError: !1,
  certLoadPolicy: {
    default: Rm
  },
  keyLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 8e3,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      },
      errorRetry: {
        maxNumRetry: 8,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      }
    }
  },
  manifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1 / 0,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  playlistLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 2,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  fragLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 12e4,
      timeoutRetry: {
        maxNumRetry: 4,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 6,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  steeringManifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  interstitialAssetListLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 3e4,
      timeoutRetry: {
        maxNumRetry: 0,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 0,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  // These default settings are deprecated in favor of the above policies
  // and are maintained for backwards compatibility
  manifestLoadingTimeOut: 1e4,
  manifestLoadingMaxRetry: 1,
  manifestLoadingRetryDelay: 1e3,
  manifestLoadingMaxRetryTimeout: 64e3,
  levelLoadingTimeOut: 1e4,
  levelLoadingMaxRetry: 4,
  levelLoadingRetryDelay: 1e3,
  levelLoadingMaxRetryTimeout: 64e3,
  fragLoadingTimeOut: 2e4,
  fragLoadingMaxRetry: 6,
  fragLoadingRetryDelay: 1e3,
  fragLoadingMaxRetryTimeout: 64e3
}, Dm()), {}, {
  subtitleStreamController: Vg,
  subtitleTrackController: Og,
  timelineController: mm,
  audioStreamController: bf,
  audioTrackController: Rf,
  emeController: ls,
  cmcdController: Rg,
  contentSteeringController: Dg,
  interstitialsController: Kg
});
function Dm() {
  return {
    cueHandler: Em,
    // used by timeline-controller
    enableWebVTT: !0,
    // used by timeline-controller
    enableIMSC1: !0,
    // used by timeline-controller
    enableCEA708Captions: !0,
    // used by timeline-controller
    captionsTextTrack1Label: "English",
    // used by timeline-controller
    captionsTextTrack1LanguageCode: "en",
    // used by timeline-controller
    captionsTextTrack2Label: "Spanish",
    // used by timeline-controller
    captionsTextTrack2LanguageCode: "es",
    // used by timeline-controller
    captionsTextTrack3Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack3LanguageCode: "",
    // used by timeline-controller
    captionsTextTrack4Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack4LanguageCode: "",
    // used by timeline-controller
    renderTextTracksNatively: !0
  };
}
function Cm(r, e, t) {
  if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration))
    throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
  if (e.liveMaxLatencyDurationCount !== void 0 && (e.liveSyncDurationCount === void 0 || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
  if (e.liveMaxLatencyDuration !== void 0 && (e.liveSyncDuration === void 0 || e.liveMaxLatencyDuration <= e.liveSyncDuration))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
  const s = jn(r), i = ["manifest", "level", "frag"], n = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
  return i.forEach((a) => {
    const o = `${a === "level" ? "playlist" : a}LoadPolicy`, c = e[o] === void 0, l = [];
    n.forEach((u) => {
      const h = `${a}Loading${u}`, d = e[h];
      if (d !== void 0 && c) {
        l.push(h);
        const f = s[o].default;
        switch (e[o] = {
          default: f
        }, u) {
          case "TimeOut":
            f.maxLoadTimeMs = d, f.maxTimeToFirstByteMs = d;
            break;
          case "MaxRetry":
            f.errorRetry.maxNumRetry = d, f.timeoutRetry.maxNumRetry = d;
            break;
          case "RetryDelay":
            f.errorRetry.retryDelayMs = d, f.timeoutRetry.retryDelayMs = d;
            break;
          case "MaxRetryTimeout":
            f.errorRetry.maxRetryDelayMs = d, f.timeoutRetry.maxRetryDelayMs = d;
            break;
        }
      }
    }), l.length && t.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${o}": ${ge(e[o])}`);
  }), ce(ce({}, s), e);
}
function jn(r) {
  return r && typeof r == "object" ? Array.isArray(r) ? r.map(jn) : Object.keys(r).reduce((e, t) => (e[t] = jn(r[t]), e), {}) : r;
}
function Pm(r, e) {
  const t = r.loader;
  t !== lo && t !== ec ? (e.log("[config]: Custom loader detected, cannot enable progressive streaming"), r.progressive = !1) : Tm() && (r.loader = lo, r.progressive = !0, r.enableSoftwareAES = !0, e.log("[config]: Progressive streaming enabled, using FetchLoader"));
}
const Si = 2, km = 0.1, wm = 0.05, Om = 100;
class Mm extends jo {
  constructor(e, t) {
    super("gap-controller", e.logger), this.hls = void 0, this.fragmentTracker = void 0, this.media = null, this.mediaSource = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.buffered = {}, this.lastCurrentTime = 0, this.ended = 0, this.waiting = 0, this.onMediaPlaying = () => {
      this.ended = 0, this.waiting = 0;
    }, this.onMediaWaiting = () => {
      var s;
      (s = this.media) != null && s.seeking || (this.waiting = self.performance.now(), this.tick());
    }, this.onMediaEnded = () => {
      if (this.hls) {
        var s;
        this.ended = ((s = this.media) == null ? void 0 : s.currentTime) || 1, this.hls.trigger(m.MEDIA_ENDED, {
          stalled: !1
        });
      }
    }, this.hls = e, this.fragmentTracker = t, this.registerListeners();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.BUFFER_APPENDED, this.onBufferAppended, this));
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.BUFFER_APPENDED, this.onBufferAppended, this));
  }
  destroy() {
    super.destroy(), this.unregisterListeners(), this.media = this.hls = this.fragmentTracker = null, this.mediaSource = void 0;
  }
  onMediaAttached(e, t) {
    this.setInterval(Om), this.mediaSource = t.mediaSource;
    const s = this.media = t.media;
    Be(s, "playing", this.onMediaPlaying), Be(s, "waiting", this.onMediaWaiting), Be(s, "ended", this.onMediaEnded);
  }
  onMediaDetaching(e, t) {
    this.clearInterval();
    const {
      media: s
    } = this;
    s && (We(s, "playing", this.onMediaPlaying), We(s, "waiting", this.onMediaWaiting), We(s, "ended", this.onMediaEnded), this.media = null), this.mediaSource = void 0;
  }
  onBufferAppended(e, t) {
    this.buffered = t.timeRanges;
  }
  get hasBuffered() {
    return Object.keys(this.buffered).length > 0;
  }
  tick() {
    var e;
    if (!((e = this.media) != null && e.readyState) || !this.hasBuffered)
      return;
    const t = this.media.currentTime;
    this.poll(t, this.lastCurrentTime), this.lastCurrentTime = t;
  }
  /**
   * Checks if the playhead is stuck within a gap, and if so, attempts to free it.
   * A gap is an unbuffered range between two buffered ranges (or the start and the first buffered range).
   *
   * @param lastCurrentTime - Previously read playhead position
   */
  poll(e, t) {
    var s, i;
    const n = (s = this.hls) == null ? void 0 : s.config;
    if (!n)
      return;
    const a = this.media;
    if (!a)
      return;
    const {
      seeking: o
    } = a, c = this.seeking && !o, l = !this.seeking && o, u = a.paused && !o || a.ended || a.playbackRate === 0;
    if (this.seeking = o, e !== t) {
      t && (this.ended = 0), this.moved = !0, o || (this.nudgeRetry = 0, n.nudgeOnVideoHole && !u && e > t && this.nudgeOnVideoHole(e, t)), this.waiting === 0 && this.stallResolved(e);
      return;
    }
    if (l || c) {
      c && this.stallResolved(e);
      return;
    }
    if (u) {
      this.nudgeRetry = 0, this.stallResolved(e), !this.ended && a.ended && this.hls && (this.ended = e || 1, this.hls.trigger(m.MEDIA_ENDED, {
        stalled: !1
      }));
      return;
    }
    if (!te.getBuffered(a).length) {
      this.nudgeRetry = 0;
      return;
    }
    const h = te.bufferInfo(a, e, 0), d = h.nextStart || 0, f = this.fragmentTracker;
    if (o && f && this.hls) {
      const C = co(this.hls.inFlightFragments, e), A = h.len > Si, R = !d || C || d - e > Si && !f.getPartialFragment(e);
      if (A || R)
        return;
      this.moved = !1;
    }
    const g = (i = this.hls) == null ? void 0 : i.latestLevelDetails;
    if (!this.moved && this.stalled !== null && f) {
      if (!(h.len > 0) && !d)
        return;
      const A = Math.max(d, h.start || 0) - e, b = !!(g != null && g.live) ? g.targetduration * 2 : Si, L = ci(e, f);
      if (A > 0 && (A <= b || L)) {
        a.paused || this._trySkipBufferHole(L);
        return;
      }
    }
    const p = n.detectStallWithCurrentTimeMs, y = self.performance.now(), E = this.waiting;
    let T = this.stalled;
    if (T === null)
      if (E > 0 && y - E < p)
        T = this.stalled = E;
      else {
        this.stalled = y;
        return;
      }
    const S = y - T;
    if (!o && (S >= p || E) && this.hls) {
      var v;
      if (((v = this.mediaSource) == null ? void 0 : v.readyState) === "ended" && !(g != null && g.live) && Math.abs(e - ((g == null ? void 0 : g.edge) || 0)) < 1) {
        if (this.ended)
          return;
        this.ended = e || 1, this.hls.trigger(m.MEDIA_ENDED, {
          stalled: !0
        });
        return;
      }
      if (this._reportStall(h), !this.media || !this.hls)
        return;
    }
    const x = te.bufferInfo(a, e, n.maxBufferHole);
    this._tryFixBufferStall(x, S, e);
  }
  stallResolved(e) {
    const t = this.stalled;
    if (t && this.hls && (this.stalled = null, this.stallReported)) {
      const s = self.performance.now() - t;
      this.log(`playback not stuck anymore @${e}, after ${Math.round(s)}ms`), this.stallReported = !1, this.waiting = 0, this.hls.trigger(m.STALL_RESOLVED, {});
    }
  }
  nudgeOnVideoHole(e, t) {
    var s;
    const i = this.buffered.video;
    if (this.hls && this.media && this.fragmentTracker && (s = this.buffered.audio) != null && s.length && i && i.length > 1 && e > i.end(0)) {
      const n = te.bufferedInfo(te.timeRangesToArray(this.buffered.audio), e, 0);
      if (n.len > 1 && t >= n.start) {
        const a = te.timeRangesToArray(i), o = te.bufferedInfo(a, t, 0).bufferedIndex;
        if (o > -1 && o < a.length - 1) {
          const c = te.bufferedInfo(a, e, 0).bufferedIndex, l = a[o].end, u = a[o + 1].start;
          if ((c === -1 || c > o) && u - l < 1 && // `maxBufferHole` may be too small and setting it to 0 should not disable this feature
          e - l < 2) {
            const h = new Error(`nudging playhead to flush pipeline after video hole. currentTime: ${e} hole: ${l} -> ${u} buffered index: ${c}`);
            this.warn(h.message), this.media.currentTime += 1e-6;
            let d = ci(e, this.fragmentTracker);
            d && "fragment" in d ? d = d.fragment : d || (d = void 0);
            const f = te.bufferInfo(this.media, e, 0);
            this.hls.trigger(m.ERROR, {
              type: X.MEDIA_ERROR,
              details: D.BUFFER_SEEK_OVER_HOLE,
              fatal: !1,
              error: h,
              reason: h.message,
              frag: d,
              buffer: f.len,
              bufferInfo: f
            });
          }
        }
      }
    }
  }
  /**
   * Detects and attempts to fix known buffer stalling issues.
   * @param bufferInfo - The properties of the current buffer.
   * @param stalledDurationMs - The amount of time Hls.js has been stalling for.
   * @private
   */
  _tryFixBufferStall(e, t, s) {
    var i, n;
    const {
      fragmentTracker: a,
      media: o
    } = this, c = (i = this.hls) == null ? void 0 : i.config;
    if (!o || !a || !c)
      return;
    const l = (n = this.hls) == null ? void 0 : n.latestLevelDetails, u = ci(s, a);
    if ((u || l != null && l.live && s < l.fragmentStart) && (this._trySkipBufferHole(u) || !this.media))
      return;
    const h = e.buffered, d = this.adjacentTraversal(e, s);
    (h && h.length > 1 && e.len > c.maxBufferHole || e.nextStart && (e.nextStart - s < c.maxBufferHole || d)) && (t > c.highBufferWatchdogPeriod * 1e3 || this.waiting) && (this.warn("Trying to nudge playhead over buffer-hole"), this._tryNudgeBuffer(e));
  }
  adjacentTraversal(e, t) {
    const s = this.fragmentTracker, i = e.nextStart;
    if (s && i) {
      const n = s.getFragAtPos(t, W.MAIN), a = s.getFragAtPos(i, W.MAIN);
      if (n && a)
        return a.sn - n.sn < 2;
    }
    return !1;
  }
  /**
   * Triggers a BUFFER_STALLED_ERROR event, but only once per stall period.
   * @param bufferLen - The playhead distance from the end of the current buffer segment.
   * @private
   */
  _reportStall(e) {
    const {
      hls: t,
      media: s,
      stallReported: i,
      stalled: n
    } = this;
    if (!i && n !== null && s && t) {
      this.stallReported = !0;
      const a = new Error(`Playback stalling at @${s.currentTime} due to low buffer (${ge(e)})`);
      this.warn(a.message), t.trigger(m.ERROR, {
        type: X.MEDIA_ERROR,
        details: D.BUFFER_STALLED_ERROR,
        fatal: !1,
        error: a,
        buffer: e.len,
        bufferInfo: e,
        stalled: {
          start: n
        }
      });
    }
  }
  /**
   * Attempts to fix buffer stalls by jumping over known gaps caused by partial fragments
   * @param appended - The fragment or part found at the current time (where playback is stalling).
   * @private
   */
  _trySkipBufferHole(e) {
    var t;
    const {
      fragmentTracker: s,
      media: i
    } = this, n = (t = this.hls) == null ? void 0 : t.config;
    if (!i || !s || !n)
      return 0;
    const a = i.currentTime, o = te.bufferInfo(i, a, 0), c = a < o.start ? o.start : o.nextStart;
    if (c && this.hls) {
      const u = o.len <= n.maxBufferHole, h = o.len > 0 && o.len < 1 && i.readyState < 3, d = c - a;
      if (d > 0 && (u || h)) {
        if (d > n.maxBufferHole) {
          let g = !1;
          if (a === 0) {
            const p = s.getAppendedFrag(0, W.MAIN);
            p && c < p.end && (g = !0);
          }
          if (!g && e) {
            var l;
            if (!((l = this.hls.loadLevelObj) != null && l.details) || co(this.hls.inFlightFragments, c))
              return 0;
            let y = !1, E = e.end;
            for (; E < c; ) {
              const T = ci(E, s);
              if (T)
                E += T.duration;
              else {
                y = !0;
                break;
              }
            }
            if (y)
              return 0;
          }
        }
        const f = Math.max(c + wm, a + km);
        if (this.warn(`skipping hole, adjusting currentTime from ${a} to ${f}`), this.moved = !0, i.currentTime = f, !(e != null && e.gap)) {
          const g = new Error(`fragment loaded with buffer holes, seeking from ${a} to ${f}`), p = {
            type: X.MEDIA_ERROR,
            details: D.BUFFER_SEEK_OVER_HOLE,
            fatal: !1,
            error: g,
            reason: g.message,
            buffer: o.len,
            bufferInfo: o
          };
          e && ("fragment" in e ? p.part = e : p.frag = e), this.hls.trigger(m.ERROR, p);
        }
        return f;
      }
    }
    return 0;
  }
  /**
   * Attempts to fix buffer stalls by advancing the mediaElement's current time by a small amount.
   * @private
   */
  _tryNudgeBuffer(e) {
    const {
      hls: t,
      media: s,
      nudgeRetry: i
    } = this, n = t == null ? void 0 : t.config;
    if (!s || !n)
      return 0;
    const a = s.currentTime;
    if (this.nudgeRetry++, i < n.nudgeMaxRetry) {
      const o = a + (i + 1) * n.nudgeOffset, c = new Error(`Nudging 'currentTime' from ${a} to ${o}`);
      this.warn(c.message), s.currentTime = o, t.trigger(m.ERROR, {
        type: X.MEDIA_ERROR,
        details: D.BUFFER_NUDGE_ON_STALL,
        error: c,
        fatal: !1,
        buffer: e.len,
        bufferInfo: e
      });
    } else {
      const o = new Error(`Playhead still not moving while enough data buffered @${a} after ${n.nudgeMaxRetry} nudges`);
      this.error(o.message), t.trigger(m.ERROR, {
        type: X.MEDIA_ERROR,
        details: D.BUFFER_STALLED_ERROR,
        error: o,
        fatal: !0,
        buffer: e.len,
        bufferInfo: e
      });
    }
  }
}
function co(r, e) {
  const t = uo(r.main);
  if (t && t.start <= e)
    return t;
  const s = uo(r.audio);
  return s && s.start <= e ? s : null;
}
function uo(r) {
  if (!r)
    return null;
  switch (r.state) {
    case k.IDLE:
    case k.STOPPED:
    case k.ENDED:
    case k.ERROR:
      return null;
  }
  return r.frag;
}
function ci(r, e) {
  return e.getAppendedFrag(r, W.MAIN) || e.getPartialFragment(r);
}
const Fm = 0.25;
function zn() {
  if (!(typeof self > "u"))
    return self.VTTCue || self.TextTrackCue;
}
function An(r, e, t, s, i) {
  let n = new r(e, t, "");
  try {
    n.value = s, i && (n.type = i);
  } catch {
    n = new r(e, t, ge(i ? ce({
      type: i
    }, s) : s));
  }
  return n;
}
const ui = (() => {
  const r = zn();
  try {
    r && new r(0, Number.POSITIVE_INFINITY, "");
  } catch {
    return Number.MAX_VALUE;
  }
  return Number.POSITIVE_INFINITY;
})();
class Nm {
  constructor(e) {
    this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.removeCues = !0, this.assetCue = void 0, this.onEventCueEnter = () => {
      this.hls && this.hls.trigger(m.EVENT_CUE_ENTER, {});
    }, this.hls = e, this._registerListeners();
  }
  destroy() {
    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = this.onEventCueEnter = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(m.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this));
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(m.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this));
  }
  // Add ID3 metatadata text track.
  onMediaAttaching(e, t) {
    var s;
    this.media = t.media, ((s = t.overrides) == null ? void 0 : s.cueRemoval) === !1 && (this.removeCues = !1);
  }
  onMediaAttached() {
    var e;
    const t = (e = this.hls) == null ? void 0 : e.latestLevelDetails;
    t && this.updateDateRangeCues(t);
  }
  onMediaDetaching(e, t) {
    this.media = null, !t.transferMedia && (this.id3Track && (this.removeCues && rs(this.id3Track, this.onEventCueEnter), this.id3Track = null), this.dateRangeCuesAppended = {});
  }
  onManifestLoading() {
    this.dateRangeCuesAppended = {};
  }
  createTrack(e) {
    const t = this.getID3Track(e.textTracks);
    return t.mode = "hidden", t;
  }
  getID3Track(e) {
    if (this.media) {
      for (let t = 0; t < e.length; t++) {
        const s = e[t];
        if (s.kind === "metadata" && s.label === "id3")
          return Kl(s, this.media), s;
      }
      return this.media.addTextTrack("metadata", "id3");
    }
  }
  onFragParsingMetadata(e, t) {
    if (!this.media || !this.hls)
      return;
    const {
      enableEmsgMetadataCues: s,
      enableID3MetadataCues: i
    } = this.hls.config;
    if (!s && !i)
      return;
    const {
      samples: n
    } = t;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const a = zn();
    if (a)
      for (let o = 0; o < n.length; o++) {
        const c = n[o].type;
        if (c === Qe.emsg && !s || !i)
          continue;
        const l = pl(n[o].data), u = n[o].pts;
        let h = u + n[o].duration;
        h > ui && (h = ui), h - u <= 0 && (h = u + Fm);
        for (let f = 0; f < l.length; f++) {
          const g = l[f];
          if (!yl(g)) {
            this.updateId3CueEnds(u, c);
            const p = An(a, u, h, g, c);
            p && this.id3Track.addCue(p);
          }
        }
      }
  }
  updateId3CueEnds(e, t) {
    var s;
    const i = (s = this.id3Track) == null ? void 0 : s.cues;
    if (i)
      for (let n = i.length; n--; ) {
        const a = i[n];
        a.type === t && a.startTime < e && a.endTime === ui && (a.endTime = e);
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: s,
    type: i
  }) {
    const {
      id3Track: n,
      hls: a
    } = this;
    if (!a)
      return;
    const {
      config: {
        enableEmsgMetadataCues: o,
        enableID3MetadataCues: c
      }
    } = a;
    if (n && (o || c)) {
      let l;
      i === "audio" ? l = (u) => u.type === Qe.audioId3 && c : i === "video" ? l = (u) => u.type === Qe.emsg && o : l = (u) => u.type === Qe.audioId3 && c || u.type === Qe.emsg && o, Wn(n, t, s, l);
    }
  }
  onLevelUpdated(e, {
    details: t
  }) {
    this.updateDateRangeCues(t, !0);
  }
  onLevelPtsUpdated(e, t) {
    Math.abs(t.drift) > 0.01 && this.updateDateRangeCues(t.details);
  }
  updateDateRangeCues(e, t) {
    if (!this.hls || !this.media)
      return;
    const {
      assetPlayerId: s,
      timelineOffset: i,
      enableDateRangeMetadataCues: n,
      interstitialsController: a
    } = this.hls.config;
    if (!n)
      return;
    const o = zn();
    if (s && i && !a) {
      const {
        fragmentStart: p,
        fragmentEnd: y
      } = e;
      let E = this.assetCue;
      E ? (E.startTime = p, E.endTime = y) : o && (E = this.assetCue = An(o, p, y, {
        assetPlayerId: this.hls.config.assetPlayerId
      }, "hlsjs.interstitial.asset"), E && (E.id = s, this.id3Track || (this.id3Track = this.createTrack(this.media)), this.id3Track.addCue(E), E.addEventListener("enter", this.onEventCueEnter)));
    }
    if (!e.hasProgramDateTime)
      return;
    const {
      id3Track: c
    } = this, {
      dateRanges: l
    } = e, u = Object.keys(l);
    let h = this.dateRangeCuesAppended;
    if (c && t) {
      var d;
      if ((d = c.cues) != null && d.length) {
        const p = Object.keys(h).filter((y) => !u.includes(y));
        for (let y = p.length; y--; ) {
          var f;
          const E = p[y], T = (f = h[E]) == null ? void 0 : f.cues;
          delete h[E], T && Object.keys(T).forEach((S) => {
            const v = T[S];
            if (v) {
              v.removeEventListener("enter", this.onEventCueEnter);
              try {
                c.removeCue(v);
              } catch {
              }
            }
          });
        }
      } else
        h = this.dateRangeCuesAppended = {};
    }
    const g = e.fragments[e.fragments.length - 1];
    if (!(u.length === 0 || !G(g == null ? void 0 : g.programDateTime))) {
      this.id3Track || (this.id3Track = this.createTrack(this.media));
      for (let p = 0; p < u.length; p++) {
        const y = u[p], E = l[y], T = E.startTime, S = h[y], v = (S == null ? void 0 : S.cues) || {};
        let x = (S == null ? void 0 : S.durationKnown) || !1, C = ui;
        const {
          duration: A,
          endDate: R
        } = E;
        if (R && A !== null)
          C = T + A, x = !0;
        else if (E.endOnNext && !x) {
          const L = u.reduce((P, M) => {
            if (M !== E.id) {
              const U = l[M];
              if (U.class === E.class && U.startDate > E.startDate && (!P || E.startDate < P.startDate))
                return U;
            }
            return P;
          }, null);
          L && (C = L.startTime, x = !0);
        }
        const b = Object.keys(E.attr);
        for (let L = 0; L < b.length; L++) {
          const P = b[L];
          if (!id(P))
            continue;
          const M = v[P];
          if (M)
            x && !(S != null && S.durationKnown) ? M.endTime = C : Math.abs(M.startTime - T) > 0.01 && (M.startTime = T, M.endTime = C);
          else if (o) {
            let U = E.attr[P];
            nd(P) && (U = Ro(U));
            const K = An(o, T, C, {
              key: P,
              data: U
            }, Qe.dateRange);
            K && (K.id = y, this.id3Track.addCue(K), v[P] = K, a && (P === "X-ASSET-LIST" || P === "X-ASSET-URL") && K.addEventListener("enter", this.onEventCueEnter));
          }
        }
        h[y] = {
          cues: v,
          dateRange: E,
          durationKnown: x
        };
      }
    }
  }
}
class $m {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this._targetLatencyUpdated = !1, this.onTimeupdate = () => {
      const {
        media: t
      } = this, s = this.levelDetails;
      if (!t || !s)
        return;
      this.currentTime = t.currentTime;
      const i = this.computeLatency();
      if (i === null)
        return;
      this._latency = i;
      const {
        lowLatencyMode: n,
        maxLiveSyncPlaybackRate: a
      } = this.config;
      if (!n || a === 1 || !s.live)
        return;
      const o = this.targetLatency;
      if (o === null)
        return;
      const c = i - o, l = Math.min(this.maxLatency, o + s.targetduration);
      if (c < l && c > 0.05 && this.forwardBufferLength > 1) {
        const h = Math.min(2, Math.max(1, a)), d = Math.round(2 / (1 + Math.exp(-0.75 * c - this.edgeStalled)) * 20) / 20, f = Math.min(h, Math.max(1, d));
        this.changeMediaPlaybackRate(t, f);
      } else t.playbackRate !== 1 && t.playbackRate !== 0 && this.changeMediaPlaybackRate(t, 1);
    }, this.hls = e, this.config = e.config, this.registerListeners();
  }
  get levelDetails() {
    var e;
    return ((e = this.hls) == null ? void 0 : e.latestLevelDetails) || null;
  }
  get latency() {
    return this._latency || 0;
  }
  get maxLatency() {
    const {
      config: e
    } = this;
    if (e.liveMaxLatencyDuration !== void 0)
      return e.liveMaxLatencyDuration;
    const t = this.levelDetails;
    return t ? e.liveMaxLatencyDurationCount * t.targetduration : 0;
  }
  get targetLatency() {
    const e = this.levelDetails;
    if (e === null || this.hls === null)
      return null;
    const {
      holdBack: t,
      partHoldBack: s,
      targetduration: i
    } = e, {
      liveSyncDuration: n,
      liveSyncDurationCount: a,
      lowLatencyMode: o
    } = this.config, c = this.hls.userConfig;
    let l = o && s || t;
    (this._targetLatencyUpdated || c.liveSyncDuration || c.liveSyncDurationCount || l === 0) && (l = n !== void 0 ? n : a * i);
    const u = i;
    return l + Math.min(this.stallCount * this.config.liveSyncOnStallIncrease, u);
  }
  set targetLatency(e) {
    this.stallCount = 0, this.config.liveSyncDuration = e, this._targetLatencyUpdated = !0;
  }
  get liveSyncPosition() {
    const e = this.estimateLiveEdge(), t = this.targetLatency;
    if (e === null || t === null)
      return null;
    const s = this.levelDetails;
    if (s === null)
      return null;
    const i = s.edge, n = e - t - this.edgeStalled, a = i - s.totalduration, o = i - (this.config.lowLatencyMode && s.partTarget || s.targetduration);
    return Math.min(Math.max(a, n), o);
  }
  get drift() {
    const e = this.levelDetails;
    return e === null ? 1 : e.drift;
  }
  get edgeStalled() {
    const e = this.levelDetails;
    if (e === null)
      return 0;
    const t = (this.config.lowLatencyMode && e.partTarget || e.targetduration) * 3;
    return Math.max(e.age - t, 0);
  }
  get forwardBufferLength() {
    const {
      media: e
    } = this, t = this.levelDetails;
    if (!e || !t)
      return 0;
    const s = e.buffered.length;
    return (s ? e.buffered.end(s - 1) : t.edge) - this.currentTime;
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetaching(), this.hls = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(m.ERROR, this.onError, this));
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(m.ERROR, this.onError, this));
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("timeupdate", this.onTimeupdate);
  }
  onMediaDetaching() {
    this.media && (this.media.removeEventListener("timeupdate", this.onTimeupdate), this.media = null);
  }
  onManifestLoading() {
    this._latency = null, this.stallCount = 0;
  }
  onLevelUpdated(e, {
    details: t
  }) {
    t.advanced && this.onTimeupdate(), !t.live && this.media && this.media.removeEventListener("timeupdate", this.onTimeupdate);
  }
  onError(e, t) {
    var s;
    t.details === D.BUFFER_STALLED_ERROR && (this.stallCount++, this.hls && (s = this.levelDetails) != null && s.live && this.hls.logger.warn("[latency-controller]: Stall detected, adjusting target latency"));
  }
  changeMediaPlaybackRate(e, t) {
    var s, i;
    e.playbackRate !== t && ((s = this.hls) == null || s.logger.debug(`[latency-controller]: latency=${this.latency.toFixed(3)}, targetLatency=${(i = this.targetLatency) == null ? void 0 : i.toFixed(3)}, forwardBufferLength=${this.forwardBufferLength.toFixed(3)}: adjusting playback rate from ${e.playbackRate} to ${t}`), e.playbackRate = t);
  }
  estimateLiveEdge() {
    const e = this.levelDetails;
    return e === null ? null : e.edge + e.age;
  }
  computeLatency() {
    const e = this.estimateLiveEdge();
    return e === null ? null : e - this.currentTime;
  }
}
class Bm extends gr {
  constructor(e, t) {
    super(e, "level-controller"), this._levels = [], this._firstLevel = -1, this._maxAutoLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = t, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this), e.on(m.ERROR, this.onError, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this), e.off(m.ERROR, this.onError, this);
  }
  destroy() {
    this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy();
  }
  stopLoad() {
    this._levels.forEach((t) => {
      t.loadError = 0, t.fragmentError = 0;
    }), super.stopLoad();
  }
  resetLevels() {
    this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1;
  }
  onManifestLoading(e, t) {
    this.resetLevels();
  }
  onManifestLoaded(e, t) {
    const s = this.hls.config.preferManagedMediaSource, i = [], n = {}, a = {};
    let o = !1, c = !1, l = !1;
    t.levels.forEach((u) => {
      const h = u.attrs;
      let {
        audioCodec: d,
        videoCodec: f
      } = u;
      d && (u.audioCodec = d = Ai(d, s) || void 0), f && (f = u.videoCodec = Sh(f));
      const {
        width: g,
        height: p,
        unknownCodecs: y
      } = u, E = (y == null ? void 0 : y.length) || 0;
      if (o || (o = !!(g && p)), c || (c = !!f), l || (l = !!d), E || d && !this.isAudioSupported(d) || f && !this.isVideoSupported(f)) {
        this.log(`Some or all CODECS not supported "${h.CODECS}"`);
        return;
      }
      const {
        CODECS: T,
        "FRAME-RATE": S,
        "HDCP-LEVEL": v,
        "PATHWAY-ID": x,
        RESOLUTION: C,
        "VIDEO-RANGE": A
      } = h, b = `${`${x || "."}-`}${u.bitrate}-${C}-${S}-${T}-${A}-${v}`;
      if (n[b])
        if (n[b].uri !== u.url && !u.attrs["PATHWAY-ID"]) {
          const L = a[b] += 1;
          u.attrs["PATHWAY-ID"] = new Array(L + 1).join(".");
          const P = this.createLevel(u);
          n[b] = P, i.push(P);
        } else
          n[b].addGroupId("audio", h.AUDIO), n[b].addGroupId("text", h.SUBTITLES);
      else {
        const L = this.createLevel(u);
        n[b] = L, a[b] = 1, i.push(L);
      }
    }), this.filterAndSortMediaOptions(i, t, o, c, l);
  }
  createLevel(e) {
    const t = new Fs(e), s = e.supplemental;
    if (s != null && s.videoCodec && !this.isVideoSupported(s.videoCodec)) {
      const i = new Error(`SUPPLEMENTAL-CODECS not supported "${s.videoCodec}"`);
      this.log(i.message), t.supportedResult = Bo(i, []);
    }
    return t;
  }
  isAudioSupported(e) {
    return Os(e, "audio", this.hls.config.preferManagedMediaSource);
  }
  isVideoSupported(e) {
    return Os(e, "video", this.hls.config.preferManagedMediaSource);
  }
  filterAndSortMediaOptions(e, t, s, i, n) {
    var a;
    let o = [], c = [], l = e;
    const u = ((a = t.stats) == null ? void 0 : a.parsing) || {};
    if ((s || i) && n && (l = l.filter(({
      videoCodec: T,
      videoRange: S,
      width: v,
      height: x
    }) => (!!T || !!(v && x)) && Ch(S))), l.length === 0) {
      Promise.resolve().then(() => {
        if (this.hls) {
          let T = "no level with compatible codecs found in manifest", S = T;
          t.levels.length && (S = `one or more CODECS in variant not supported: ${ge(t.levels.map((x) => x.attrs.CODECS).filter((x, C, A) => A.indexOf(x) === C))}`, this.warn(S), T += ` (${S})`);
          const v = new Error(T);
          this.hls.trigger(m.ERROR, {
            type: X.MEDIA_ERROR,
            details: D.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
            fatal: !0,
            url: t.url,
            error: v,
            reason: S
          });
        }
      }), u.end = performance.now();
      return;
    }
    t.audioTracks && (o = t.audioTracks.filter((T) => !T.audioCodec || this.isAudioSupported(T.audioCodec)), ho(o)), t.subtitles && (c = t.subtitles, ho(c));
    const h = l.slice(0);
    l.sort((T, S) => {
      if (T.attrs["HDCP-LEVEL"] !== S.attrs["HDCP-LEVEL"])
        return (T.attrs["HDCP-LEVEL"] || "") > (S.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
      if (s && T.height !== S.height)
        return T.height - S.height;
      if (T.frameRate !== S.frameRate)
        return T.frameRate - S.frameRate;
      if (T.videoRange !== S.videoRange)
        return Ii.indexOf(T.videoRange) - Ii.indexOf(S.videoRange);
      if (T.videoCodec !== S.videoCodec) {
        const v = sa(T.videoCodec), x = sa(S.videoCodec);
        if (v !== x)
          return x - v;
      }
      if (T.uri === S.uri && T.codecSet !== S.codecSet) {
        const v = xi(T.codecSet), x = xi(S.codecSet);
        if (v !== x)
          return x - v;
      }
      return T.averageBitrate !== S.averageBitrate ? T.averageBitrate - S.averageBitrate : 0;
    });
    let d = h[0];
    if (this.steering && (l = this.steering.filterParsedLevels(l), l.length !== h.length)) {
      for (let T = 0; T < h.length; T++)
        if (h[T].pathwayId === l[0].pathwayId) {
          d = h[T];
          break;
        }
    }
    this._levels = l;
    for (let T = 0; T < l.length; T++)
      if (l[T] === d) {
        var f;
        this._firstLevel = T;
        const S = d.bitrate, v = this.hls.bandwidthEstimate;
        if (this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${S}`), ((f = this.hls.userConfig) == null ? void 0 : f.abrEwmaDefaultEstimate) === void 0) {
          const x = Math.min(S, this.hls.config.abrEwmaDefaultEstimateMax);
          x > v && v === this.hls.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = x);
        }
        break;
      }
    const g = n && !i, p = this.hls.config, y = !!(p.audioStreamController && p.audioTrackController), E = {
      levels: l,
      audioTracks: o,
      subtitleTracks: c,
      sessionData: t.sessionData,
      sessionKeys: t.sessionKeys,
      firstLevel: this._firstLevel,
      stats: t.stats,
      audio: n,
      video: i,
      altAudio: y && !g && o.some((T) => !!T.url)
    };
    u.end = performance.now(), this.hls.trigger(m.MANIFEST_PARSED, E);
  }
  get levels() {
    return this._levels.length === 0 ? null : this._levels;
  }
  get loadLevelObj() {
    return this.currentLevel;
  }
  get level() {
    return this.currentLevelIndex;
  }
  set level(e) {
    const t = this._levels;
    if (t.length === 0)
      return;
    if (e < 0 || e >= t.length) {
      const u = new Error("invalid level idx"), h = e < 0;
      if (this.hls.trigger(m.ERROR, {
        type: X.OTHER_ERROR,
        details: D.LEVEL_SWITCH_ERROR,
        level: e,
        fatal: h,
        error: u,
        reason: u.message
      }), h)
        return;
      e = Math.min(e, t.length - 1);
    }
    const s = this.currentLevelIndex, i = this.currentLevel, n = i ? i.attrs["PATHWAY-ID"] : void 0, a = t[e], o = a.attrs["PATHWAY-ID"];
    if (this.currentLevelIndex = e, this.currentLevel = a, s === e && i && n === o)
      return;
    this.log(`Switching to level ${e} (${a.height ? a.height + "p " : ""}${a.videoRange ? a.videoRange + " " : ""}${a.codecSet ? a.codecSet + " " : ""}@${a.bitrate})${o ? " with Pathway " + o : ""} from level ${s}${n ? " with Pathway " + n : ""}`);
    const c = {
      level: e,
      attrs: a.attrs,
      details: a.details,
      bitrate: a.bitrate,
      averageBitrate: a.averageBitrate,
      maxBitrate: a.maxBitrate,
      realBitrate: a.realBitrate,
      width: a.width,
      height: a.height,
      codecSet: a.codecSet,
      audioCodec: a.audioCodec,
      videoCodec: a.videoCodec,
      audioGroups: a.audioGroups,
      subtitleGroups: a.subtitleGroups,
      loaded: a.loaded,
      loadError: a.loadError,
      fragmentError: a.fragmentError,
      name: a.name,
      id: a.id,
      uri: a.uri,
      url: a.url,
      urlId: 0,
      audioGroupIds: a.audioGroupIds,
      textGroupIds: a.textGroupIds
    };
    this.hls.trigger(m.LEVEL_SWITCHING, c);
    const l = a.details;
    if (!l || l.live) {
      const u = this.switchParams(a.uri, i == null ? void 0 : i.details, l);
      this.loadPlaylist(u);
    }
  }
  get manualLevel() {
    return this.manualLevelIndex;
  }
  set manualLevel(e) {
    this.manualLevelIndex = e, this._startLevel === void 0 && (this._startLevel = e), e !== -1 && (this.level = e);
  }
  get firstLevel() {
    return this._firstLevel;
  }
  set firstLevel(e) {
    this._firstLevel = e;
  }
  get startLevel() {
    if (this._startLevel === void 0) {
      const e = this.hls.config.startLevel;
      return e !== void 0 ? e : this.hls.firstAutoLevel;
    }
    return this._startLevel;
  }
  set startLevel(e) {
    this._startLevel = e;
  }
  get pathways() {
    return this.steering ? this.steering.pathways() : [];
  }
  get pathwayPriority() {
    return this.steering ? this.steering.pathwayPriority : null;
  }
  set pathwayPriority(e) {
    if (this.steering) {
      const t = this.steering.pathways(), s = e.filter((i) => t.indexOf(i) !== -1);
      if (e.length < 1) {
        this.warn(`pathwayPriority ${e} should contain at least one pathway from list: ${t}`);
        return;
      }
      this.steering.pathwayPriority = s;
    }
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === re.LEVEL && t.context.level === this.level && this.checkRetry(t);
  }
  // reset errors on the successful load of a fragment
  onFragBuffered(e, {
    frag: t
  }) {
    if (t !== void 0 && t.type === W.MAIN) {
      const s = t.elementaryStreams;
      if (!Object.keys(s).some((n) => !!s[n]))
        return;
      const i = this._levels[t.level];
      i != null && i.loadError && (this.log(`Resetting level error count of ${i.loadError} on frag buffered`), i.loadError = 0);
    }
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      level: i,
      details: n
    } = t, a = t.levelInfo;
    if (!a) {
      var o;
      this.warn(`Invalid level index ${i}`), (o = t.deliveryDirectives) != null && o.skip && (n.deltaUpdateFailed = !0);
      return;
    }
    if (a === this.currentLevel || t.withoutMultiVariant) {
      a.fragmentError === 0 && (a.loadError = 0);
      let c = a.details;
      c === t.details && c.advanced && (c = void 0), this.playlistLoaded(i, t, c);
    } else (s = t.deliveryDirectives) != null && s.skip && (n.deltaUpdateFailed = !0);
  }
  loadPlaylist(e) {
    super.loadPlaylist(), this.shouldLoadPlaylist(this.currentLevel) && this.scheduleLoading(this.currentLevel, e);
  }
  loadingPlaylist(e, t) {
    super.loadingPlaylist(e, t);
    const s = this.getUrlWithDirectives(e.uri, t), i = this.currentLevelIndex, n = e.attrs["PATHWAY-ID"], a = e.details, o = a == null ? void 0 : a.age;
    this.log(`Loading level index ${i}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${n ? " Pathway " + n : ""}${o && a.live ? " age " + o.toFixed(1) + (a.type && " " + a.type || "") : ""} ${s}`), this.hls.trigger(m.LEVEL_LOADING, {
      url: s,
      level: i,
      levelInfo: e,
      pathwayId: e.attrs["PATHWAY-ID"],
      id: 0,
      // Deprecated Level urlId
      deliveryDirectives: t || null
    });
  }
  get nextLoadLevel() {
    return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
  }
  set nextLoadLevel(e) {
    this.level = e, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = e);
  }
  removeLevel(e) {
    var t;
    if (this._levels.length === 1)
      return;
    const s = this._levels.filter((n, a) => a !== e ? !0 : (this.steering && this.steering.removeLevel(n), n === this.currentLevel && (this.currentLevel = null, this.currentLevelIndex = -1, n.details && n.details.fragments.forEach((o) => o.level = -1)), !1));
    al(s), this._levels = s, this.currentLevelIndex > -1 && (t = this.currentLevel) != null && t.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.manualLevelIndex > -1 && (this.manualLevelIndex = this.currentLevelIndex);
    const i = s.length - 1;
    this._firstLevel = Math.min(this._firstLevel, i), this._startLevel && (this._startLevel = Math.min(this._startLevel, i)), this.hls.trigger(m.LEVELS_UPDATED, {
      levels: s
    });
  }
  onLevelsUpdated(e, {
    levels: t
  }) {
    this._levels = t;
  }
  checkMaxAutoUpdated() {
    const {
      autoLevelCapping: e,
      maxAutoLevel: t,
      maxHdcpLevel: s
    } = this.hls;
    this._maxAutoLevel !== t && (this._maxAutoLevel = t, this.hls.trigger(m.MAX_AUTO_LEVEL_UPDATED, {
      autoLevelCapping: e,
      levels: this.levels,
      maxAutoLevel: t,
      minAutoLevel: this.hls.minAutoLevel,
      maxHdcpLevel: s
    }));
  }
}
function ho(r) {
  const e = {};
  r.forEach((t) => {
    const s = t.groupId || "";
    t.id = e[s] = e[s] || 0, e[s]++;
  });
}
function tc() {
  return self.SourceBuffer || self.WebKitSourceBuffer;
}
function sc() {
  if (!$t())
    return !1;
  const e = tc();
  return !e || e.prototype && typeof e.prototype.appendBuffer == "function" && typeof e.prototype.remove == "function";
}
function Um() {
  if (!sc())
    return !1;
  const r = $t();
  return typeof (r == null ? void 0 : r.isTypeSupported) == "function" && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((e) => r.isTypeSupported(Ms(e, "video"))) || ["mp4a.40.2", "fLaC"].some((e) => r.isTypeSupported(Ms(e, "audio"))));
}
function Gm() {
  var r;
  const e = tc();
  return typeof (e == null || (r = e.prototype) == null ? void 0 : r.changeType) == "function";
}
const Km = 100;
class Vm extends ar {
  constructor(e, t, s) {
    super(e, t, s, "stream-controller", W.MAIN), this.audioCodecSwap = !1, this.level = -1, this._forceStartLoad = !1, this._hasEnoughToStart = !1, this.altAudio = 0, this.audioOnly = !1, this.fragPlaying = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this.onMediaPlaying = () => {
      this.tick();
    }, this.onMediaSeeked = () => {
      const i = this.media, n = i ? i.currentTime : null;
      if (n === null || !G(n) || (this.log(`Media seeked to ${n.toFixed(3)}`), !this.getBufferedFrag(n)))
        return;
      const a = this.getFwdBufferInfoAtPos(i, n, W.MAIN, 0);
      if (a === null || a.len === 0) {
        this.warn(`Main forward buffer length at ${n} on "seeked" event ${a ? a.len : "empty"})`);
        return;
      }
      this.tick();
    }, this.registerListeners();
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(m.BUFFER_CREATED, this.onBufferCreated, this), e.on(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  unregisterListeners() {
    super.unregisterListeners();
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(m.BUFFER_CREATED, this.onBufferCreated, this), e.off(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  onHandlerDestroying() {
    this.onMediaPlaying = this.onMediaSeeked = null, this.unregisterListeners(), super.onHandlerDestroying();
  }
  startLoad(e, t) {
    if (this.levels) {
      const {
        lastCurrentTime: s,
        hls: i
      } = this;
      if (this.stopLoad(), this.setInterval(Km), this.level = -1, !this.startFragRequested) {
        let n = i.startLevel;
        n === -1 && (i.config.testBandwidth && this.levels.length > 1 ? (n = 0, this.bitrateTest = !0) : n = i.firstAutoLevel), i.nextLoadLevel = n, this.level = i.loadLevel, this._hasEnoughToStart = !!t;
      }
      s > 0 && e === -1 && !t && (this.log(`Override startPosition with lastCurrentTime @${s.toFixed(3)}`), e = s), this.state = k.IDLE, this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick();
    } else
      this._forceStartLoad = !0, this.state = k.STOPPED;
  }
  stopLoad() {
    this._forceStartLoad = !1, super.stopLoad();
  }
  doTick() {
    switch (this.state) {
      case k.WAITING_LEVEL: {
        const {
          levels: e,
          level: t
        } = this, s = e == null ? void 0 : e[t], i = s == null ? void 0 : s.details;
        if (i && (!i.live || this.levelLastLoaded === s && !this.waitForLive(s))) {
          if (this.waitForCdnTuneIn(i))
            break;
          this.state = k.IDLE;
          break;
        } else if (this.hls.nextLoadLevel !== this.level) {
          this.state = k.IDLE;
          break;
        }
        break;
      }
      case k.FRAG_LOADING_WAITING_RETRY:
        this.checkRetryDate();
        break;
    }
    this.state === k.IDLE && this.doTickIdle(), this.onTickEnd();
  }
  onTickEnd() {
    var e;
    super.onTickEnd(), (e = this.media) != null && e.readyState && this.media.seeking === !1 && (this.lastCurrentTime = this.media.currentTime), this.checkFragmentChanged();
  }
  doTickIdle() {
    const {
      hls: e,
      levelLastLoaded: t,
      levels: s,
      media: i
    } = this;
    if (t === null || !i && !this.primaryPrefetch && (this.startFragRequested || !e.config.startFragPrefetch) || this.altAudio && this.audioOnly)
      return;
    const n = this.buffering ? e.nextLoadLevel : e.loadLevel;
    if (!(s != null && s[n]))
      return;
    const a = s[n], o = this.getMainFwdBufferInfo();
    if (o === null)
      return;
    const c = this.getLevelDetails();
    if (c && this._streamEnded(o, c)) {
      const p = {};
      this.altAudio === 2 && (p.type = "video"), this.hls.trigger(m.BUFFER_EOS, p), this.state = k.ENDED;
      return;
    }
    if (!this.buffering)
      return;
    e.loadLevel !== n && e.manualLevel === -1 && this.log(`Adapting to level ${n} from level ${this.level}`), this.level = e.nextLoadLevel = n;
    const l = a.details;
    if (!l || this.state === k.WAITING_LEVEL || this.waitForLive(a)) {
      this.level = n, this.state = k.WAITING_LEVEL, this.startFragRequested = !1;
      return;
    }
    const u = o.len, h = this.getMaxBufferLength(a.maxBitrate);
    if (u >= h)
      return;
    this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null);
    const d = this.backtrackFragment ? this.backtrackFragment.start : o.end;
    let f = this.getNextFragment(d, l);
    if (this.couldBacktrack && !this.fragPrevious && f && Ae(f) && this.fragmentTracker.getState(f) !== Re.OK) {
      var g;
      const y = ((g = this.backtrackFragment) != null ? g : f).sn - l.startSN, E = l.fragments[y - 1];
      E && f.cc === E.cc && (f = E, this.fragmentTracker.removeFragment(E));
    } else this.backtrackFragment && o.len && (this.backtrackFragment = null);
    if (f && this.isLoopLoading(f, d)) {
      if (!f.gap) {
        const y = this.audioOnly && !this.altAudio ? fe.AUDIO : fe.VIDEO, E = (y === fe.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
        E && this.afterBufferFlushed(E, y, W.MAIN);
      }
      f = this.getNextFragmentLoopLoading(f, l, o, W.MAIN, h);
    }
    f && (f.initSegment && !f.initSegment.data && !this.bitrateTest && (f = f.initSegment), this.loadFragment(f, a, d));
  }
  loadFragment(e, t, s) {
    const i = this.fragmentTracker.getState(e);
    i === Re.NOT_LOADED || i === Re.PARTIAL ? Ae(e) ? this.bitrateTest ? (this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e, t)) : super.loadFragment(e, t, s) : this._loadInitSegment(e, t) : this.clearTrackerIfNeeded(e);
  }
  getBufferedFrag(e) {
    return this.fragmentTracker.getBufferedFrag(e, W.MAIN);
  }
  followingBufferedFrag(e) {
    return e ? this.getBufferedFrag(e.end + 0.5) : null;
  }
  /*
    on immediate level switch :
     - pause playback if playing
     - cancel any pending load request
     - and trigger a buffer flush
  */
  immediateLevelSwitch() {
    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
  }
  /**
   * try to switch ASAP without breaking video playback:
   * in order to ensure smooth but quick level switching,
   * we need to find the next flushable buffer range
   * we should take into account new segment fetch time
   */
  nextLevelSwitch() {
    const {
      levels: e,
      media: t
    } = this;
    if (t != null && t.readyState) {
      let s;
      const i = this.getAppendedFrag(t.currentTime);
      i && i.start > 1 && this.flushMainBuffer(0, i.start - 1);
      const n = this.getLevelDetails();
      if (n != null && n.live) {
        const o = this.getMainFwdBufferInfo();
        if (!o || o.len < n.targetduration * 2)
          return;
      }
      if (!t.paused && e) {
        const o = this.hls.nextLoadLevel, c = e[o], l = this.fragLastKbps;
        l && this.fragCurrent ? s = this.fragCurrent.duration * c.maxBitrate / (1e3 * l) + 1 : s = 0;
      } else
        s = 0;
      const a = this.getBufferedFrag(t.currentTime + s);
      if (a) {
        const o = this.followingBufferedFrag(a);
        if (o) {
          this.abortCurrentFrag();
          const c = o.maxStartPTS ? o.maxStartPTS : o.start, l = o.duration, u = Math.max(a.end, c + Math.min(Math.max(l - this.config.maxFragLookUpTolerance, l * (this.couldBacktrack ? 0.5 : 0.125)), l * (this.couldBacktrack ? 0.75 : 0.25)));
          this.flushMainBuffer(u, Number.POSITIVE_INFINITY);
        }
      }
    }
  }
  abortCurrentFrag() {
    const e = this.fragCurrent;
    switch (this.fragCurrent = null, this.backtrackFragment = null, e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.state) {
      case k.KEY_LOADING:
      case k.FRAG_LOADING:
      case k.FRAG_LOADING_WAITING_RETRY:
      case k.PARSING:
      case k.PARSED:
        this.state = k.IDLE;
        break;
    }
    this.nextLoadPosition = this.getLoadPosition();
  }
  flushMainBuffer(e, t) {
    super.flushMainBuffer(e, t, this.altAudio === 2 ? "video" : null);
  }
  onMediaAttached(e, t) {
    super.onMediaAttached(e, t);
    const s = t.media;
    Be(s, "playing", this.onMediaPlaying), Be(s, "seeked", this.onMediaSeeked);
  }
  onMediaDetaching(e, t) {
    const {
      media: s
    } = this;
    s && (We(s, "playing", this.onMediaPlaying), We(s, "seeked", this.onMediaSeeked)), this.videoBuffer = null, this.fragPlaying = null, super.onMediaDetaching(e, t), !t.transferMedia && (this._hasEnoughToStart = !1);
  }
  onManifestLoading() {
    super.onManifestLoading(), this.log("Trigger BUFFER_RESET"), this.hls.trigger(m.BUFFER_RESET, void 0), this.couldBacktrack = !1, this.fragLastKbps = 0, this.fragPlaying = this.backtrackFragment = null, this.altAudio = 0, this.audioOnly = !1;
  }
  onManifestParsed(e, t) {
    let s = !1, i = !1;
    for (let n = 0; n < t.levels.length; n++) {
      const a = t.levels[n].audioCodec;
      a && (s = s || a.indexOf("mp4a.40.2") !== -1, i = i || a.indexOf("mp4a.40.5") !== -1);
    }
    this.audioCodecSwitch = s && i && !Gm(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
  }
  onLevelLoading(e, t) {
    const {
      levels: s
    } = this;
    if (!s || this.state !== k.IDLE)
      return;
    const i = t.levelInfo;
    (!i.details || i.details.live && (this.levelLastLoaded !== i || i.details.expired) || this.waitForCdnTuneIn(i.details)) && (this.state = k.WAITING_LEVEL);
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      levels: i,
      startFragRequested: n
    } = this, a = t.level, o = t.details, c = o.totalduration;
    if (!i) {
      this.warn(`Levels were reset while loading level ${a}`);
      return;
    }
    this.log(`Level ${a} loaded [${o.startSN},${o.endSN}]${o.lastPartSn ? `[part-${o.lastPartSn}-${o.lastPartIndex}]` : ""}, cc [${o.startCC}, ${o.endCC}] duration:${c}`);
    const l = t.levelInfo, u = this.fragCurrent;
    u && (this.state === k.FRAG_LOADING || this.state === k.FRAG_LOADING_WAITING_RETRY) && u.level !== t.level && u.loader && this.abortCurrentFrag();
    let h = 0;
    if (o.live || (s = l.details) != null && s.live) {
      var d;
      if (this.checkLiveUpdate(o), o.deltaUpdateFailed)
        return;
      h = this.alignPlaylists(o, l.details, (d = this.levelLastLoaded) == null ? void 0 : d.details);
    }
    if (l.details = o, this.levelLastLoaded = l, n || this.setStartPosition(o, h), this.hls.trigger(m.LEVEL_UPDATED, {
      details: o,
      level: a
    }), this.state === k.WAITING_LEVEL) {
      if (this.waitForCdnTuneIn(o))
        return;
      this.state = k.IDLE;
    }
    n && o.live && this.synchronizeToLiveEdge(o), this.tick();
  }
  synchronizeToLiveEdge(e) {
    const {
      config: t,
      media: s
    } = this;
    if (!s)
      return;
    const i = this.hls.liveSyncPosition, n = this.getLoadPosition(), a = e.fragmentStart, o = e.edge, c = n >= a - t.maxFragLookUpTolerance && n <= o;
    if (i !== null && s.duration > i && (n < i || !c)) {
      const u = t.liveMaxLatencyDuration !== void 0 ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
      if ((!c && s.readyState < 4 || n < o - u) && (this._hasEnoughToStart || (this.nextLoadPosition = i), s.readyState))
        if (this.warn(`Playback: ${n.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${i.toFixed(3)}`), this.config.liveSyncMode === "buffered") {
          var l;
          const h = te.bufferInfo(s, i, 0);
          if (!((l = h.buffered) != null && l.length)) {
            s.currentTime = i;
            return;
          }
          if (h.start <= n) {
            s.currentTime = i;
            return;
          }
          const {
            nextStart: f
          } = te.bufferedInfo(h.buffered, n, 0);
          f && (s.currentTime = f);
        } else
          s.currentTime = i;
    }
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const s = e.frag, {
      part: i,
      payload: n
    } = e, {
      levels: a
    } = this;
    if (!a) {
      this.warn(`Levels were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const o = a[s.level];
    if (!o) {
      this.warn(`Level ${s.level} not found on progress`);
      return;
    }
    const c = o.details;
    if (!c) {
      this.warn(`Dropping fragment ${s.sn} of level ${s.level} after level details were reset`), this.fragmentTracker.removeFragment(s);
      return;
    }
    const l = o.videoCodec, u = c.PTSKnown || !c.live, h = (t = s.initSegment) == null ? void 0 : t.data, d = this._getAudioCodec(o), f = this.transmuxer = this.transmuxer || new _l(this.hls, W.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), g = i ? i.index : -1, p = g !== -1, y = new ir(s.level, s.sn, s.stats.chunkCount, n.byteLength, g, p), E = this.initPTS[s.cc];
    f.push(n, h, d, l, s, i, c.totalduration, u, y, E);
  }
  onAudioTrackSwitching(e, t) {
    const s = this.hls, i = this.altAudio === 2;
    if (Li(t.url, s))
      this.altAudio = 1;
    else {
      if (this.mediaBuffer !== this.media) {
        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
        const a = this.fragCurrent;
        a && (this.log("Switching to main audio track, cancel main fragment load"), a.abortRequests(), this.fragmentTracker.removeFragment(a)), this.resetTransmuxer(), this.resetLoadingState();
      } else this.audioOnly && this.resetTransmuxer();
      if (i) {
        this.fragmentTracker.removeAllFragments(), s.once(m.BUFFER_FLUSHED, () => {
          this.hls && this.hls.trigger(m.AUDIO_TRACK_SWITCHED, t);
        }), s.trigger(m.BUFFER_FLUSHING, {
          startOffset: 0,
          endOffset: Number.POSITIVE_INFINITY,
          type: null
        });
        return;
      }
      s.trigger(m.AUDIO_TRACK_SWITCHED, t);
    }
  }
  onAudioTrackSwitched(e, t) {
    const s = Li(t.url, this.hls);
    if (s) {
      const i = this.videoBuffer;
      i && this.mediaBuffer !== i && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i);
    }
    this.altAudio = s ? 2 : 0, this.tick();
  }
  onBufferCreated(e, t) {
    const s = t.tracks;
    let i, n, a = !1;
    for (const o in s) {
      const c = s[o];
      if (c.id === "main") {
        if (n = o, i = c, o === "video") {
          const l = s[o];
          l && (this.videoBuffer = l.buffer);
        }
      } else
        a = !0;
    }
    a && i ? (this.log(`Alternate track found, use ${n}.buffered to schedule main fragment loading`), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media;
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t, n = s.type === W.MAIN;
    if (n) {
      if (this.fragContextChanged(s)) {
        this.warn(`Fragment ${s.sn}${i ? " p: " + i.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}`), this.state === k.PARSED && (this.state = k.IDLE);
        return;
      }
      const o = i ? i.stats : s.stats;
      this.fragLastKbps = Math.round(8 * o.total / (o.buffering.end - o.loading.first)), Ae(s) && (this.fragPrevious = s), this.fragBufferedComplete(s, i);
    }
    const a = this.media;
    a && (!this._hasEnoughToStart && te.getBuffered(a).length && (this._hasEnoughToStart = !0, this.seekToStartPos()), n && this.tick());
  }
  get hasEnoughToStart() {
    return this._hasEnoughToStart;
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = k.ERROR;
      return;
    }
    switch (t.details) {
      case D.FRAG_GAP:
      case D.FRAG_PARSING_ERROR:
      case D.FRAG_DECRYPT_ERROR:
      case D.FRAG_LOAD_ERROR:
      case D.FRAG_LOAD_TIMEOUT:
      case D.KEY_LOAD_ERROR:
      case D.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(W.MAIN, t);
        break;
      case D.LEVEL_LOAD_ERROR:
      case D.LEVEL_LOAD_TIMEOUT:
      case D.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === k.WAITING_LEVEL && ((s = t.context) == null ? void 0 : s.type) === re.LEVEL && (this.state = k.IDLE);
        break;
      case D.BUFFER_ADD_CODEC_ERROR:
      case D.BUFFER_APPEND_ERROR:
        if (t.parent !== "main")
          return;
        this.reduceLengthAndFlushBuffer(t) && this.resetLoadingState();
        break;
      case D.BUFFER_FULL_ERROR:
        if (t.parent !== "main")
          return;
        this.reduceLengthAndFlushBuffer(t) && (!this.config.interstitialsController && this.config.assetPlayerId ? this._hasEnoughToStart = !0 : this.flushMainBuffer(0, Number.POSITIVE_INFINITY));
        break;
      case D.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  onFragLoadEmergencyAborted() {
    this.state = k.IDLE, this._hasEnoughToStart || (this.startFragRequested = !1, this.nextLoadPosition = this.lastCurrentTime), this.tickImmediate();
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== fe.AUDIO || !this.altAudio) {
      const s = (t === fe.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
      s && (this.afterBufferFlushed(s, t, W.MAIN), this.tick());
    }
  }
  onLevelsUpdated(e, t) {
    this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level, this.level === -1 && this.resetWhenMissingContext(this.fragCurrent)), this.levels = t.levels;
  }
  swapAudioCodec() {
    this.audioCodecSwap = !this.audioCodecSwap;
  }
  /**
   * Seeks to the set startPosition if not equal to the mediaElement's current time.
   */
  seekToStartPos() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.currentTime;
    let s = this.startPosition;
    if (s >= 0 && t < s) {
      if (e.seeking) {
        this.log(`could not seek to ${s}, already seeking at ${t}`);
        return;
      }
      const i = this.timelineOffset;
      i && s && (s += i);
      const n = this.getLevelDetails(), a = te.getBuffered(e), o = a.length ? a.start(0) : 0, c = o - s, l = Math.max(this.config.maxBufferHole, this.config.maxFragLookUpTolerance);
      (this.config.startOnSegmentBoundary || c > 0 && (c < l || this.loadingParts && c < 2 * ((n == null ? void 0 : n.partTarget) || 0))) && (this.log(`adjusting start position by ${c} to match buffer start`), s += c, this.startPosition = s), t < s && (this.log(`seek to target start position ${s} from current time ${t} buffer start ${o}`), e.currentTime = s);
    }
  }
  _getAudioCodec(e) {
    let t = this.config.defaultAudioCodec || e.audioCodec;
    return this.audioCodecSwap && t && (this.log("Swapping audio codec"), t.indexOf("mp4a.40.5") !== -1 ? t = "mp4a.40.2" : t = "mp4a.40.5"), t;
  }
  _loadBitrateTestFrag(e, t) {
    e.bitrateTest = !0, this._doFragLoad(e, t).then((s) => {
      const {
        hls: i
      } = this, n = s == null ? void 0 : s.frag;
      if (!n || this.fragContextChanged(n))
        return;
      t.fragmentError = 0, this.state = k.IDLE, this.startFragRequested = !1, this.bitrateTest = !1;
      const a = n.stats;
      a.parsing.start = a.parsing.end = a.buffering.start = a.buffering.end = self.performance.now(), i.trigger(m.FRAG_LOADED, s), n.bitrateTest = !1;
    }).catch((s) => {
      this.state === k.STOPPED || this.state === k.ERROR || (this.warn(s), this.resetFragmentLoading(e));
    });
  }
  _handleTransmuxComplete(e) {
    const t = this.playlistType, {
      hls: s
    } = this, {
      remuxResult: i,
      chunkMeta: n
    } = e, a = this.getCurrentContext(n);
    if (!a) {
      this.resetWhenMissingContext(n);
      return;
    }
    const {
      frag: o,
      part: c,
      level: l
    } = a, {
      video: u,
      text: h,
      id3: d,
      initSegment: f
    } = i, {
      details: g
    } = l, p = this.altAudio ? void 0 : i.audio;
    if (this.fragContextChanged(o)) {
      this.fragmentTracker.removeFragment(o);
      return;
    }
    if (this.state = k.PARSING, f) {
      const y = f.tracks;
      if (y) {
        const v = o.initSegment || o;
        if (this.unhandledEncryptionError(f, o))
          return;
        this._bufferInitSegment(l, y, v, n), s.trigger(m.FRAG_PARSING_INIT_SEGMENT, {
          frag: v,
          id: t,
          tracks: y
        });
      }
      const E = f.initPTS, T = f.timescale, S = this.initPTS[o.cc];
      if (G(E) && (!S || S.baseTime !== E || S.timescale !== T)) {
        const v = f.trackId;
        this.initPTS[o.cc] = {
          baseTime: E,
          timescale: T,
          trackId: v
        }, s.trigger(m.INIT_PTS_FOUND, {
          frag: o,
          id: t,
          initPTS: E,
          timescale: T,
          trackId: v
        });
      }
    }
    if (u && g) {
      p && u.type === "audiovideo" && this.logMuxedErr(o);
      const y = g.fragments[o.sn - 1 - g.startSN], E = o.sn === g.startSN, T = !y || o.cc > y.cc;
      if (i.independent !== !1) {
        const {
          startPTS: S,
          endPTS: v,
          startDTS: x,
          endDTS: C
        } = u;
        if (c)
          c.elementaryStreams[u.type] = {
            startPTS: S,
            endPTS: v,
            startDTS: x,
            endDTS: C
          };
        else if (u.firstKeyFrame && u.independent && n.id === 1 && !T && (this.couldBacktrack = !0), u.dropped && u.independent) {
          const A = this.getMainFwdBufferInfo(), R = (A ? A.end : this.getLoadPosition()) + this.config.maxBufferHole, b = u.firstKeyFramePTS ? u.firstKeyFramePTS : S;
          if (!E && R < b - this.config.maxBufferHole && !T) {
            this.backtrack(o);
            return;
          } else T && (o.gap = !0);
          o.setElementaryStreamInfo(u.type, o.start, v, o.start, C, !0);
        } else E && S - (g.appliedTimelineOffset || 0) > Si && (o.gap = !0);
        o.setElementaryStreamInfo(u.type, S, v, x, C), this.backtrackFragment && (this.backtrackFragment = o), this.bufferFragmentData(u, o, c, n, E || T);
      } else if (E || T)
        o.gap = !0;
      else {
        this.backtrack(o);
        return;
      }
    }
    if (p) {
      const {
        startPTS: y,
        endPTS: E,
        startDTS: T,
        endDTS: S
      } = p;
      c && (c.elementaryStreams[fe.AUDIO] = {
        startPTS: y,
        endPTS: E,
        startDTS: T,
        endDTS: S
      }), o.setElementaryStreamInfo(fe.AUDIO, y, E, T, S), this.bufferFragmentData(p, o, c, n);
    }
    if (g && d != null && d.samples.length) {
      const y = {
        id: t,
        frag: o,
        details: g,
        samples: d.samples
      };
      s.trigger(m.FRAG_PARSING_METADATA, y);
    }
    if (g && h) {
      const y = {
        id: t,
        frag: o,
        details: g,
        samples: h.samples
      };
      s.trigger(m.FRAG_PARSING_USERDATA, y);
    }
  }
  logMuxedErr(e) {
    this.warn(`${Ae(e) ? "Media" : "Init"} segment with muxed audiovideo where only video expected: ${e.url}`);
  }
  _bufferInitSegment(e, t, s, i) {
    if (this.state !== k.PARSING)
      return;
    this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && (delete t.audio, t.audiovideo && this.logMuxedErr(s));
    const {
      audio: n,
      video: a,
      audiovideo: o
    } = t;
    if (n) {
      const l = e.audioCodec;
      let u = fi(n.codec, l);
      u === "mp4a" && (u = "mp4a.40.5");
      const h = navigator.userAgent.toLowerCase();
      if (this.audioCodecSwitch) {
        u && (u.indexOf("mp4a.40.5") !== -1 ? u = "mp4a.40.2" : u = "mp4a.40.5");
        const d = n.metadata;
        d && "channelCount" in d && (d.channelCount || 1) !== 1 && h.indexOf("firefox") === -1 && (u = "mp4a.40.5");
      }
      u && u.indexOf("mp4a.40.5") !== -1 && h.indexOf("android") !== -1 && n.container !== "audio/mpeg" && (u = "mp4a.40.2", this.log(`Android: force audio codec to ${u}`)), l && l !== u && this.log(`Swapping manifest audio codec "${l}" for "${u}"`), n.levelCodec = u, n.id = W.MAIN, this.log(`Init audio buffer, container:${n.container}, codecs[selected/level/parsed]=[${u || ""}/${l || ""}/${n.codec}]`), delete t.audiovideo;
    }
    if (a) {
      a.levelCodec = e.videoCodec, a.id = W.MAIN;
      const l = a.codec;
      if ((l == null ? void 0 : l.length) === 4)
        switch (l) {
          case "hvc1":
          case "hev1":
            a.codec = "hvc1.1.6.L120.90";
            break;
          case "av01":
            a.codec = "av01.0.04M.08";
            break;
          case "avc1":
            a.codec = "avc1.42e01e";
            break;
        }
      this.log(`Init video buffer, container:${a.container}, codecs[level/parsed]=[${e.videoCodec || ""}/${l}]${a.codec !== l ? " parsed-corrected=" + a.codec : ""}${a.supplemental ? " supplemental=" + a.supplemental : ""}`), delete t.audiovideo;
    }
    o && (this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.codecs}/${o.codec}]`), delete t.video, delete t.audio);
    const c = Object.keys(t);
    if (c.length) {
      if (this.hls.trigger(m.BUFFER_CODECS, t), !this.hls)
        return;
      c.forEach((l) => {
        const h = t[l].initSegment;
        h != null && h.byteLength && this.hls.trigger(m.BUFFER_APPENDING, {
          type: l,
          data: h,
          frag: s,
          part: null,
          chunkMeta: i,
          parent: s.type
        });
      });
    }
    this.tickImmediate();
  }
  getMainFwdBufferInfo() {
    const e = this.mediaBuffer && this.altAudio === 2 ? this.mediaBuffer : this.media;
    return this.getFwdBufferInfo(e, W.MAIN);
  }
  get maxBufferLength() {
    const {
      levels: e,
      level: t
    } = this, s = e == null ? void 0 : e[t];
    return s ? this.getMaxBufferLength(s.maxBitrate) : this.config.maxBufferLength;
  }
  backtrack(e) {
    this.couldBacktrack = !0, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = k.IDLE;
  }
  checkFragmentChanged() {
    const e = this.media;
    let t = null;
    if (e && e.readyState > 1 && e.seeking === !1) {
      const s = e.currentTime;
      if (te.isBuffered(e, s) ? t = this.getAppendedFrag(s) : te.isBuffered(e, s + 0.1) && (t = this.getAppendedFrag(s + 0.1)), t) {
        this.backtrackFragment = null;
        const i = this.fragPlaying, n = t.level;
        (!i || t.sn !== i.sn || i.level !== n) && (this.fragPlaying = t, this.hls.trigger(m.FRAG_CHANGED, {
          frag: t
        }), (!i || i.level !== n) && this.hls.trigger(m.LEVEL_SWITCHED, {
          level: n
        }));
      }
    }
  }
  get nextLevel() {
    const e = this.nextBufferedFrag;
    return e ? e.level : -1;
  }
  get currentFrag() {
    var e;
    if (this.fragPlaying)
      return this.fragPlaying;
    const t = ((e = this.media) == null ? void 0 : e.currentTime) || this.lastCurrentTime;
    return G(t) ? this.getAppendedFrag(t) : null;
  }
  get currentProgramDateTime() {
    var e;
    const t = ((e = this.media) == null ? void 0 : e.currentTime) || this.lastCurrentTime;
    if (G(t)) {
      const s = this.getLevelDetails(), i = this.currentFrag || (s ? zt(null, s.fragments, t) : null);
      if (i) {
        const n = i.programDateTime;
        if (n !== null) {
          const a = n + (t - i.start) * 1e3;
          return new Date(a);
        }
      }
    }
    return null;
  }
  get currentLevel() {
    const e = this.currentFrag;
    return e ? e.level : -1;
  }
  get nextBufferedFrag() {
    const e = this.currentFrag;
    return e ? this.followingBufferedFrag(e) : null;
  }
  get forceStartLoad() {
    return this._forceStartLoad;
  }
}
class Hm extends nt {
  constructor(e, t) {
    super("key-loader", t), this.config = void 0, this.keyIdToKeyInfo = {}, this.emeController = null, this.config = e;
  }
  abort(e) {
    for (const s in this.keyIdToKeyInfo) {
      const i = this.keyIdToKeyInfo[s].loader;
      if (i) {
        var t;
        if (e && e !== ((t = i.context) == null ? void 0 : t.frag.type))
          return;
        i.abort();
      }
    }
  }
  detach() {
    for (const e in this.keyIdToKeyInfo) {
      const t = this.keyIdToKeyInfo[e];
      (t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) && delete this.keyIdToKeyInfo[e];
    }
  }
  destroy() {
    this.detach();
    for (const e in this.keyIdToKeyInfo) {
      const t = this.keyIdToKeyInfo[e].loader;
      t && t.destroy();
    }
    this.keyIdToKeyInfo = {};
  }
  createKeyLoadError(e, t = D.KEY_LOAD_ERROR, s, i, n) {
    return new Rt({
      type: X.NETWORK_ERROR,
      details: t,
      fatal: !1,
      frag: e,
      response: n,
      error: s,
      networkDetails: i
    });
  }
  loadClear(e, t, s) {
    if (this.emeController && this.config.emeEnabled && !this.emeController.getSelectedKeySystemFormats().length) {
      if (t.length)
        for (let i = 0, n = t.length; i < n; i++) {
          const a = t[i];
          if (e.cc <= a.cc && (!Ae(e) || !Ae(a) || e.sn < a.sn) || !s && i == n - 1)
            return this.emeController.selectKeySystemFormat(a).then((o) => {
              if (!this.emeController)
                return;
              a.setKeyFormat(o);
              const c = mi(o);
              if (c)
                return this.emeController.getKeySystemAccess([c]);
            });
        }
      if (this.config.requireKeySystemAccessOnStart) {
        const i = _s(this.config);
        if (i.length)
          return this.emeController.getKeySystemAccess(i);
      }
    }
    return null;
  }
  load(e) {
    return !e.decryptdata && e.encrypted && this.emeController && this.config.emeEnabled ? this.emeController.selectKeySystemFormat(e).then((t) => this.loadInternal(e, t)) : this.loadInternal(e);
  }
  loadInternal(e, t) {
    var s, i;
    t && e.setKeyFormat(t);
    const n = e.decryptdata;
    if (!n) {
      const l = new Error(t ? `Expected frag.decryptdata to be defined after setting format ${t}` : `Missing decryption data on fragment in onKeyLoading (emeEnabled with controller: ${this.emeController && this.config.emeEnabled})`);
      return Promise.reject(this.createKeyLoadError(e, D.KEY_LOAD_ERROR, l));
    }
    const a = n.uri;
    if (!a)
      return Promise.reject(this.createKeyLoadError(e, D.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${a}"`)));
    const o = In(n);
    let c = this.keyIdToKeyInfo[o];
    if ((s = c) != null && s.decryptdata.key)
      return n.key = c.decryptdata.key, Promise.resolve({
        frag: e,
        keyInfo: c
      });
    if (this.emeController && (i = c) != null && i.keyLoadPromise)
      switch (this.emeController.getKeyStatus(c.decryptdata)) {
        case "usable":
        case "usable-in-future":
          return c.keyLoadPromise.then((u) => {
            const {
              keyInfo: h
            } = u;
            return n.key = h.decryptdata.key, {
              frag: e,
              keyInfo: h
            };
          });
      }
    switch (this.log(`${this.keyIdToKeyInfo[o] ? "Rel" : "L"}oading${n.keyId ? " keyId: " + $e(n.keyId) : ""} URI: ${n.uri} from ${e.type} ${e.level}`), c = this.keyIdToKeyInfo[o] = {
      decryptdata: n,
      keyLoadPromise: null,
      loader: null,
      mediaKeySessionContext: null
    }, n.method) {
      case "SAMPLE-AES":
      case "SAMPLE-AES-CENC":
      case "SAMPLE-AES-CTR":
        return n.keyFormat === "identity" ? this.loadKeyHTTP(c, e) : this.loadKeyEME(c, e);
      case "AES-128":
      case "AES-256":
      case "AES-256-CTR":
        return this.loadKeyHTTP(c, e);
      default:
        return Promise.reject(this.createKeyLoadError(e, D.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${n.method}"`)));
    }
  }
  loadKeyEME(e, t) {
    const s = {
      frag: t,
      keyInfo: e
    };
    if (this.emeController && this.config.emeEnabled) {
      var i;
      if (!e.decryptdata.keyId && (i = t.initSegment) != null && i.data) {
        const a = lh(t.initSegment.data);
        if (a.length) {
          const o = a[0];
          o.some((c) => c !== 0) && (this.log(`Using keyId found in init segment ${$e(o)}`), e.decryptdata.keyId = o, jt.setKeyIdForUri(e.decryptdata.uri, o));
        }
      }
      const n = this.emeController.loadKey(s);
      return (e.keyLoadPromise = n.then((a) => (e.mediaKeySessionContext = a, s))).catch((a) => {
        throw e.keyLoadPromise = null, "data" in a && (a.data.frag = t), a;
      });
    }
    return Promise.resolve(s);
  }
  loadKeyHTTP(e, t) {
    const s = this.config, i = s.loader, n = new i(s);
    return t.keyLoader = e.loader = n, e.keyLoadPromise = new Promise((a, o) => {
      const c = {
        keyInfo: e,
        frag: t,
        responseType: "arraybuffer",
        url: e.decryptdata.uri
      }, l = s.keyLoadPolicy.default, u = {
        loadPolicy: l,
        timeout: l.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, h = {
        onSuccess: (d, f, g, p) => {
          const {
            frag: y,
            keyInfo: E
          } = g, T = In(E.decryptdata);
          if (!y.decryptdata || E !== this.keyIdToKeyInfo[T])
            return o(this.createKeyLoadError(y, D.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), p));
          E.decryptdata.key = y.decryptdata.key = new Uint8Array(d.data), y.keyLoader = null, E.loader = null, a({
            frag: y,
            keyInfo: E
          });
        },
        onError: (d, f, g, p) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, D.KEY_LOAD_ERROR, new Error(`HTTP Error ${d.code} loading key ${d.text}`), g, ce({
            url: c.url,
            data: void 0
          }, d)));
        },
        onTimeout: (d, f, g) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, D.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), g));
        },
        onAbort: (d, f, g) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, D.INTERNAL_ABORTED, new Error("key loading aborted"), g));
        }
      };
      n.load(c, u, h);
    });
  }
  resetLoader(e) {
    const {
      frag: t,
      keyInfo: s,
      url: i
    } = e, n = s.loader;
    t.keyLoader === n && (t.keyLoader = null, s.loader = null);
    const a = In(s.decryptdata) || i;
    delete this.keyIdToKeyInfo[a], n && n.destroy();
  }
}
function In(r) {
  if (r.keyFormat !== Pe.FAIRPLAY) {
    const e = r.keyId;
    if (e)
      return $e(e);
  }
  return r.uri;
}
function fo(r) {
  const {
    type: e
  } = r;
  switch (e) {
    case re.AUDIO_TRACK:
      return W.AUDIO;
    case re.SUBTITLE_TRACK:
      return W.SUBTITLE;
    default:
      return W.MAIN;
  }
}
function Ln(r, e) {
  let t = r.url;
  return (t === void 0 || t.indexOf("data:") === 0) && (t = e.url), t;
}
class Wm {
  constructor(e) {
    this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.onManifestLoaded = this.checkAutostartLoad, this.hls = e, this.registerListeners();
  }
  startLoad(e) {
  }
  stopLoad() {
    this.destroyInternalLoaders();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(m.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_LOADING, this.onLevelLoading, this), e.off(m.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(m.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this);
  }
  /**
   * Returns defaults or configured loader-type overloads (pLoader and loader config params)
   */
  createInternalLoader(e) {
    const t = this.hls.config, s = t.pLoader, i = t.loader, n = s || i, a = new n(t);
    return this.loaders[e.type] = a, a;
  }
  getInternalLoader(e) {
    return this.loaders[e.type];
  }
  resetInternalLoader(e) {
    this.loaders[e] && delete this.loaders[e];
  }
  /**
   * Call `destroy` on all internal loader instances mapped (one per context type)
   */
  destroyInternalLoaders() {
    for (const e in this.loaders) {
      const t = this.loaders[e];
      t && t.destroy(), this.resetInternalLoader(e);
    }
  }
  destroy() {
    this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
  }
  onManifestLoading(e, t) {
    const {
      url: s
    } = t;
    this.variableList = null, this.load({
      id: null,
      level: 0,
      responseType: "text",
      type: re.MANIFEST,
      url: s,
      deliveryDirectives: null,
      levelOrTrack: null
    });
  }
  onLevelLoading(e, t) {
    const {
      id: s,
      level: i,
      pathwayId: n,
      url: a,
      deliveryDirectives: o,
      levelInfo: c
    } = t;
    this.load({
      id: s,
      level: i,
      pathwayId: n,
      responseType: "text",
      type: re.LEVEL,
      url: a,
      deliveryDirectives: o,
      levelOrTrack: c
    });
  }
  onAudioTrackLoading(e, t) {
    const {
      id: s,
      groupId: i,
      url: n,
      deliveryDirectives: a,
      track: o
    } = t;
    this.load({
      id: s,
      groupId: i,
      level: null,
      responseType: "text",
      type: re.AUDIO_TRACK,
      url: n,
      deliveryDirectives: a,
      levelOrTrack: o
    });
  }
  onSubtitleTrackLoading(e, t) {
    const {
      id: s,
      groupId: i,
      url: n,
      deliveryDirectives: a,
      track: o
    } = t;
    this.load({
      id: s,
      groupId: i,
      level: null,
      responseType: "text",
      type: re.SUBTITLE_TRACK,
      url: n,
      deliveryDirectives: a,
      levelOrTrack: o
    });
  }
  onLevelsUpdated(e, t) {
    const s = this.loaders[re.LEVEL];
    if (s) {
      const i = s.context;
      i && !t.levels.some((n) => n === i.levelOrTrack) && (s.abort(), delete this.loaders[re.LEVEL]);
    }
  }
  load(e) {
    var t;
    const s = this.hls.config;
    let i = this.getInternalLoader(e);
    if (i) {
      const l = this.hls.logger, u = i.context;
      if (u && u.levelOrTrack === e.levelOrTrack && (u.url === e.url || u.deliveryDirectives && !e.deliveryDirectives)) {
        u.url === e.url ? l.log(`[playlist-loader]: ignore ${e.url} ongoing request`) : l.log(`[playlist-loader]: ignore ${e.url} in favor of ${u.url}`);
        return;
      }
      l.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), i.abort();
    }
    let n;
    if (e.type === re.MANIFEST ? n = s.manifestLoadPolicy.default : n = de({}, s.playlistLoadPolicy.default, {
      timeoutRetry: null,
      errorRetry: null
    }), i = this.createInternalLoader(e), G((t = e.deliveryDirectives) == null ? void 0 : t.part)) {
      let l;
      if (e.type === re.LEVEL && e.level !== null ? l = this.hls.levels[e.level].details : e.type === re.AUDIO_TRACK && e.id !== null ? l = this.hls.audioTracks[e.id].details : e.type === re.SUBTITLE_TRACK && e.id !== null && (l = this.hls.subtitleTracks[e.id].details), l) {
        const u = l.partTarget, h = l.targetduration;
        if (u && h) {
          const d = Math.max(u * 3, h * 0.8) * 1e3;
          n = de({}, n, {
            maxTimeToFirstByteMs: Math.min(d, n.maxTimeToFirstByteMs),
            maxLoadTimeMs: Math.min(d, n.maxTimeToFirstByteMs)
          });
        }
      }
    }
    const a = n.errorRetry || n.timeoutRetry || {}, o = {
      loadPolicy: n,
      timeout: n.maxLoadTimeMs,
      maxRetry: a.maxNumRetry || 0,
      retryDelay: a.retryDelayMs || 0,
      maxRetryDelay: a.maxRetryDelayMs || 0
    }, c = {
      onSuccess: (l, u, h, d) => {
        const f = this.getInternalLoader(h);
        this.resetInternalLoader(h.type);
        const g = l.data;
        u.parsing.start = performance.now(), yt.isMediaPlaylist(g) || h.type !== re.MANIFEST ? this.handleTrackOrLevelPlaylist(l, u, h, d || null, f) : this.handleMasterPlaylist(l, u, h, d);
      },
      onError: (l, u, h, d) => {
        this.handleNetworkError(u, h, !1, l, d);
      },
      onTimeout: (l, u, h) => {
        this.handleNetworkError(u, h, !0, void 0, l);
      }
    };
    i.load(e, o, c);
  }
  checkAutostartLoad() {
    if (!this.hls)
      return;
    const {
      config: {
        autoStartLoad: e,
        startPosition: t
      },
      forceStartLoad: s
    } = this.hls;
    (e || s) && (this.hls.logger.log(`${e ? "auto" : "force"} startLoad with configured startPosition ${t}`), this.hls.startLoad(t));
  }
  handleMasterPlaylist(e, t, s, i) {
    const n = this.hls, a = e.data, o = Ln(e, s), c = yt.parseMasterPlaylist(a, o);
    if (c.playlistParsingError) {
      t.parsing.end = performance.now(), this.handleManifestParsingError(e, s, c.playlistParsingError, i, t);
      return;
    }
    const {
      contentSteering: l,
      levels: u,
      sessionData: h,
      sessionKeys: d,
      startTimeOffset: f,
      variableList: g
    } = c;
    this.variableList = g, u.forEach((T) => {
      const {
        unknownCodecs: S
      } = T;
      if (S) {
        const {
          preferManagedMediaSource: v
        } = this.hls.config;
        let {
          audioCodec: x,
          videoCodec: C
        } = T;
        for (let A = S.length; A--; ) {
          const R = S[A];
          Os(R, "audio", v) ? (T.audioCodec = x = x ? `${x},${R}` : R, us.audio[x.substring(0, 4)] = 2, S.splice(A, 1)) : Os(R, "video", v) && (T.videoCodec = C = C ? `${C},${R}` : R, us.video[C.substring(0, 4)] = 2, S.splice(A, 1));
        }
      }
    });
    const {
      AUDIO: p = [],
      SUBTITLES: y,
      "CLOSED-CAPTIONS": E
    } = yt.parseMasterPlaylistMedia(a, o, c);
    p.length && !p.some((S) => !S.url) && u[0].audioCodec && !u[0].attrs.AUDIO && (this.hls.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), p.unshift({
      type: "main",
      name: "main",
      groupId: "main",
      default: !1,
      autoselect: !1,
      forced: !1,
      id: -1,
      attrs: new ye({}),
      bitrate: 0,
      url: ""
    })), n.trigger(m.MANIFEST_LOADED, {
      levels: u,
      audioTracks: p,
      subtitles: y,
      captions: E,
      contentSteering: l,
      url: o,
      stats: t,
      networkDetails: i,
      sessionData: h,
      sessionKeys: d,
      startTimeOffset: f,
      variableList: g
    });
  }
  handleTrackOrLevelPlaylist(e, t, s, i, n) {
    const a = this.hls, {
      id: o,
      level: c,
      type: l
    } = s, u = Ln(e, s), h = G(c) ? c : G(o) ? o : 0, d = fo(s), f = yt.parseLevelPlaylist(e.data, u, h, d, 0, this.variableList);
    if (l === re.MANIFEST) {
      const g = {
        attrs: new ye({}),
        bitrate: 0,
        details: f,
        name: "",
        url: u
      };
      f.requestScheduled = t.loading.start + il(f, 0), a.trigger(m.MANIFEST_LOADED, {
        levels: [g],
        audioTracks: [],
        url: u,
        stats: t,
        networkDetails: i,
        sessionData: null,
        sessionKeys: null,
        contentSteering: null,
        startTimeOffset: null,
        variableList: null
      });
    }
    t.parsing.end = performance.now(), s.levelDetails = f, this.handlePlaylistLoaded(f, e, t, s, i, n);
  }
  handleManifestParsingError(e, t, s, i, n) {
    this.hls.trigger(m.ERROR, {
      type: X.NETWORK_ERROR,
      details: D.MANIFEST_PARSING_ERROR,
      fatal: t.type === re.MANIFEST,
      url: e.url,
      err: s,
      error: s,
      reason: s.message,
      response: e,
      context: t,
      networkDetails: i,
      stats: n
    });
  }
  handleNetworkError(e, t, s = !1, i, n) {
    let a = `A network ${s ? "timeout" : "error" + (i ? " (status " + i.code + ")" : "")} occurred while loading ${e.type}`;
    e.type === re.LEVEL ? a += `: ${e.level} id: ${e.id}` : (e.type === re.AUDIO_TRACK || e.type === re.SUBTITLE_TRACK) && (a += ` id: ${e.id} group-id: "${e.groupId}"`);
    const o = new Error(a);
    this.hls.logger.warn(`[playlist-loader]: ${a}`);
    let c = D.UNKNOWN, l = !1;
    const u = this.getInternalLoader(e);
    switch (e.type) {
      case re.MANIFEST:
        c = s ? D.MANIFEST_LOAD_TIMEOUT : D.MANIFEST_LOAD_ERROR, l = !0;
        break;
      case re.LEVEL:
        c = s ? D.LEVEL_LOAD_TIMEOUT : D.LEVEL_LOAD_ERROR, l = !1;
        break;
      case re.AUDIO_TRACK:
        c = s ? D.AUDIO_TRACK_LOAD_TIMEOUT : D.AUDIO_TRACK_LOAD_ERROR, l = !1;
        break;
      case re.SUBTITLE_TRACK:
        c = s ? D.SUBTITLE_TRACK_LOAD_TIMEOUT : D.SUBTITLE_LOAD_ERROR, l = !1;
        break;
    }
    u && this.resetInternalLoader(e.type);
    const h = {
      type: X.NETWORK_ERROR,
      details: c,
      fatal: l,
      url: e.url,
      loader: u,
      context: e,
      error: o,
      networkDetails: t,
      stats: n
    };
    if (i) {
      const d = (t == null ? void 0 : t.url) || e.url;
      h.response = ce({
        url: d,
        data: void 0
      }, i);
    }
    this.hls.trigger(m.ERROR, h);
  }
  handlePlaylistLoaded(e, t, s, i, n, a) {
    const o = this.hls, {
      type: c,
      level: l,
      levelOrTrack: u,
      id: h,
      groupId: d,
      deliveryDirectives: f
    } = i, g = Ln(t, i), p = fo(i);
    let y = typeof i.level == "number" && p === W.MAIN ? l : void 0;
    const E = e.playlistParsingError;
    if (E) {
      if (this.hls.logger.warn(`${E} ${e.url}`), !o.config.ignorePlaylistParsingErrors) {
        o.trigger(m.ERROR, {
          type: X.NETWORK_ERROR,
          details: D.LEVEL_PARSING_ERROR,
          fatal: !1,
          url: g,
          error: E,
          reason: E.message,
          response: t,
          context: i,
          level: y,
          parent: p,
          networkDetails: n,
          stats: s
        });
        return;
      }
      e.playlistParsingError = null;
    }
    if (!e.fragments.length) {
      const T = e.playlistParsingError = new Error("No Segments found in Playlist");
      o.trigger(m.ERROR, {
        type: X.NETWORK_ERROR,
        details: D.LEVEL_EMPTY_ERROR,
        fatal: !1,
        url: g,
        error: T,
        reason: T.message,
        response: t,
        context: i,
        level: y,
        parent: p,
        networkDetails: n,
        stats: s
      });
      return;
    }
    switch (e.live && a && (a.getCacheAge && (e.ageHeader = a.getCacheAge() || 0), (!a.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)), c) {
      case re.MANIFEST:
      case re.LEVEL:
        if (y) {
          if (!u)
            y = 0;
          else if (u !== o.levels[y]) {
            const T = o.levels.indexOf(u);
            T > -1 && (y = T);
          }
        }
        o.trigger(m.LEVEL_LOADED, {
          details: e,
          levelInfo: u || o.levels[0],
          level: y || 0,
          id: h || 0,
          stats: s,
          networkDetails: n,
          deliveryDirectives: f,
          withoutMultiVariant: c === re.MANIFEST
        });
        break;
      case re.AUDIO_TRACK:
        o.trigger(m.AUDIO_TRACK_LOADED, {
          details: e,
          track: u,
          id: h || 0,
          groupId: d || "",
          stats: s,
          networkDetails: n,
          deliveryDirectives: f
        });
        break;
      case re.SUBTITLE_TRACK:
        o.trigger(m.SUBTITLE_TRACK_LOADED, {
          details: e,
          track: u,
          id: h || 0,
          groupId: d || "",
          stats: s,
          networkDetails: n,
          deliveryDirectives: f
        });
        break;
    }
  }
}
class tt {
  /**
   * Get the video-dev/hls.js package version.
   */
  static get version() {
    return Ns;
  }
  /**
   * Check if the required MediaSource Extensions are available.
   */
  static isMSESupported() {
    return sc();
  }
  /**
   * Check if MediaSource Extensions are available and isTypeSupported checks pass for any baseline codecs.
   */
  static isSupported() {
    return Um();
  }
  /**
   * Get the MediaSource global used for MSE playback (ManagedMediaSource, MediaSource, or WebKitMediaSource).
   */
  static getMediaSource() {
    return $t();
  }
  static get Events() {
    return m;
  }
  static get MetadataSchema() {
    return Qe;
  }
  static get ErrorTypes() {
    return X;
  }
  static get ErrorDetails() {
    return D;
  }
  /**
   * Get the default configuration applied to new instances.
   */
  static get DefaultConfig() {
    return tt.defaultConfig ? tt.defaultConfig : _m;
  }
  /**
   * Replace the default configuration applied to new instances.
   */
  static set DefaultConfig(e) {
    tt.defaultConfig = e;
  }
  /**
   * Creates an instance of an HLS client that can attach to exactly one `HTMLMediaElement`.
   * @param userConfig - Configuration options applied over `Hls.DefaultConfig`
   */
  constructor(e = {}) {
    this.config = void 0, this.userConfig = void 0, this.logger = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new or(), this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioStreamController = void 0, this.subtititleStreamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.interstitialsController = void 0, this.gapController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this._url = null, this._sessionId = void 0, this.triggeringException = void 0, this.started = !1;
    const t = this.logger = Xu(e.debug || !1, "Hls instance", e.assetPlayerId), s = this.config = Cm(tt.DefaultConfig, e, t);
    this.userConfig = e, s.progressive && Pm(s, t);
    const {
      abrController: i,
      bufferController: n,
      capLevelController: a,
      errorController: o,
      fpsController: c
    } = s, l = new o(this), u = this.abrController = new i(this), h = new Wh(this), d = s.interstitialsController, f = d ? this.interstitialsController = new d(this, tt) : null, g = this.bufferController = new n(this, h), p = this.capLevelController = new a(this), y = new c(this), E = new Wm(this), T = s.contentSteeringController, S = T ? new T(this) : null, v = this.levelController = new Bm(this, S), x = new Nm(this), C = new Hm(this.config, this.logger), A = this.streamController = new Vm(this, h, C), R = this.gapController = new Mm(this, h);
    p.setStreamController(A), y.setStreamController(A);
    const b = [E, v, A];
    f && b.splice(1, 0, f), S && b.splice(1, 0, S), this.networkControllers = b;
    const L = [u, g, R, p, y, x, h];
    this.audioTrackController = this.createController(s.audioTrackController, b);
    const P = s.audioStreamController;
    P && b.push(this.audioStreamController = new P(this, h, C)), this.subtitleTrackController = this.createController(s.subtitleTrackController, b);
    const M = s.subtitleStreamController;
    M && b.push(this.subtititleStreamController = new M(this, h, C)), this.createController(s.timelineController, L), C.emeController = this.emeController = this.createController(s.emeController, L), this.cmcdController = this.createController(s.cmcdController, L), this.latencyController = this.createController($m, L), this.coreComponents = L, b.push(l);
    const U = l.onErrorOut;
    typeof U == "function" && this.on(m.ERROR, U, l), this.on(m.MANIFEST_LOADED, E.onManifestLoaded, E);
  }
  createController(e, t) {
    if (e) {
      const s = new e(this);
      return t && t.push(s), s;
    }
    return null;
  }
  // Delegate the EventEmitter through the public API of Hls.js
  on(e, t, s = this) {
    this._emitter.on(e, t, s);
  }
  once(e, t, s = this) {
    this._emitter.once(e, t, s);
  }
  removeAllListeners(e) {
    this._emitter.removeAllListeners(e);
  }
  off(e, t, s = this, i) {
    this._emitter.off(e, t, s, i);
  }
  listeners(e) {
    return this._emitter.listeners(e);
  }
  emit(e, t, s) {
    return this._emitter.emit(e, t, s);
  }
  trigger(e, t) {
    if (this.config.debug)
      return this.emit(e, e, t);
    try {
      return this.emit(e, e, t);
    } catch (s) {
      if (this.logger.error("An internal error happened while handling event " + e + '. Error message: "' + s.message + '". Here is a stacktrace:', s), !this.triggeringException) {
        this.triggeringException = !0;
        const i = e === m.ERROR;
        this.trigger(m.ERROR, {
          type: X.OTHER_ERROR,
          details: D.INTERNAL_EXCEPTION,
          fatal: i,
          event: e,
          error: s
        }), this.triggeringException = !1;
      }
    }
    return !1;
  }
  listenerCount(e) {
    return this._emitter.listenerCount(e);
  }
  /**
   * Dispose of the instance
   */
  destroy() {
    this.logger.log("destroy"), this.trigger(m.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this._url = null, this.networkControllers.forEach((t) => t.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach((t) => t.destroy()), this.coreComponents.length = 0;
    const e = this.config;
    e.xhrSetup = e.fetchSetup = void 0, this.userConfig = null;
  }
  /**
   * Attaches Hls.js to a media element
   */
  attachMedia(e) {
    if (!e || "media" in e && !e.media) {
      const n = new Error(`attachMedia failed: invalid argument (${e})`);
      this.trigger(m.ERROR, {
        type: X.OTHER_ERROR,
        details: D.ATTACH_MEDIA_ERROR,
        fatal: !0,
        error: n
      });
      return;
    }
    this.logger.log("attachMedia"), this._media && (this.logger.warn("media must be detached before attaching"), this.detachMedia());
    const t = "media" in e, s = t ? e.media : e, i = t ? e : {
      media: s
    };
    this._media = s, this.trigger(m.MEDIA_ATTACHING, i);
  }
  /**
   * Detach Hls.js from the media
   */
  detachMedia() {
    this.logger.log("detachMedia"), this.trigger(m.MEDIA_DETACHING, {}), this._media = null;
  }
  /**
   * Detach HTMLMediaElement, MediaSource, and SourceBuffers without reset, for attaching to another instance
   */
  transferMedia() {
    this._media = null;
    const e = this.bufferController.transferMedia();
    return this.trigger(m.MEDIA_DETACHING, {
      transferMedia: e
    }), e;
  }
  /**
   * Set the source URL. Can be relative or absolute.
   */
  loadSource(e) {
    this.stopLoad();
    const t = this.media, s = this._url, i = this._url = Xn.buildAbsoluteURL(self.location.href, e, {
      alwaysNormalize: !0
    });
    this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.logger.log(`loadSource:${i}`), t && s && (s !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)), this.trigger(m.MANIFEST_LOADING, {
      url: e
    });
  }
  /**
   * Gets the currently loaded URL
   */
  get url() {
    return this._url;
  }
  /**
   * Whether or not enough has been buffered to seek to start position or use `media.currentTime` to determine next load position
   */
  get hasEnoughToStart() {
    return this.streamController.hasEnoughToStart;
  }
  /**
   * Get the startPosition set on startLoad(position) or on autostart with config.startPosition
   */
  get startPosition() {
    return this.streamController.startPositionValue;
  }
  /**
   * Start loading data from the stream source.
   * Depending on default config, client starts loading automatically when a source is set.
   *
   * @param startPosition - Set the start position to stream from.
   * Defaults to -1 (None: starts from earliest point)
   */
  startLoad(e = -1, t) {
    this.logger.log(`startLoad(${e + (t ? ", <skip seek to start>" : "")})`), this.started = !0, this.resumeBuffering();
    for (let s = 0; s < this.networkControllers.length && (this.networkControllers[s].startLoad(e, t), !(!this.started || !this.networkControllers)); s++)
      ;
  }
  /**
   * Stop loading of any stream data.
   */
  stopLoad() {
    this.logger.log("stopLoad"), this.started = !1;
    for (let e = 0; e < this.networkControllers.length && (this.networkControllers[e].stopLoad(), !(this.started || !this.networkControllers)); e++)
      ;
  }
  /**
   * Returns whether loading, toggled with `startLoad()` and `stopLoad()`, is active or not`.
   */
  get loadingEnabled() {
    return this.started;
  }
  /**
   * Returns state of fragment loading toggled by calling `pauseBuffering()` and `resumeBuffering()`.
   */
  get bufferingEnabled() {
    return this.streamController.bufferingEnabled;
  }
  /**
   * Resumes stream controller segment loading after `pauseBuffering` has been called.
   */
  resumeBuffering() {
    this.bufferingEnabled || (this.logger.log("resume buffering"), this.networkControllers.forEach((e) => {
      e.resumeBuffering && e.resumeBuffering();
    }));
  }
  /**
   * Prevents stream controller from loading new segments until `resumeBuffering` is called.
   * This allows for media buffering to be paused without interupting playlist loading.
   */
  pauseBuffering() {
    this.bufferingEnabled && (this.logger.log("pause buffering"), this.networkControllers.forEach((e) => {
      e.pauseBuffering && e.pauseBuffering();
    }));
  }
  get inFlightFragments() {
    const e = {
      [W.MAIN]: this.streamController.inFlightFrag
    };
    return this.audioStreamController && (e[W.AUDIO] = this.audioStreamController.inFlightFrag), this.subtititleStreamController && (e[W.SUBTITLE] = this.subtititleStreamController.inFlightFrag), e;
  }
  /**
   * Swap through possible audio codecs in the stream (for example to switch from stereo to 5.1)
   */
  swapAudioCodec() {
    this.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
  }
  /**
   * When the media-element fails, this allows to detach and then re-attach it
   * as one call (convenience method).
   *
   * Automatic recovery of media-errors by this process is configurable.
   */
  recoverMediaError() {
    this.logger.log("recoverMediaError");
    const e = this._media, t = e == null ? void 0 : e.currentTime;
    this.detachMedia(), e && (this.attachMedia(e), t && this.startLoad(t));
  }
  removeLevel(e) {
    this.levelController.removeLevel(e);
  }
  /**
   * @returns a UUID for this player instance
   */
  get sessionId() {
    let e = this._sessionId;
    return e || (e = this._sessionId = Mg()), e;
  }
  /**
   * @returns an array of levels (variants) sorted by HDCP-LEVEL, RESOLUTION (height), FRAME-RATE, CODECS, VIDEO-RANGE, and BANDWIDTH
   */
  get levels() {
    const e = this.levelController.levels;
    return e || [];
  }
  /**
   * @returns LevelDetails of last loaded level (variant) or `null` prior to loading a media playlist.
   */
  get latestLevelDetails() {
    return this.streamController.getLevelDetails() || null;
  }
  /**
   * @returns Level object of selected level (variant) or `null` prior to selecting a level or once the level is removed.
   */
  get loadLevelObj() {
    return this.levelController.loadLevelObj;
  }
  /**
   * Index of quality level (variant) currently played
   */
  get currentLevel() {
    return this.streamController.currentLevel;
  }
  /**
   * Set quality level index immediately. This will flush the current buffer to replace the quality asap. That means playback will interrupt at least shortly to re-buffer and re-sync eventually. Set to -1 for automatic level selection.
   */
  set currentLevel(e) {
    this.logger.log(`set currentLevel:${e}`), this.levelController.manualLevel = e, this.streamController.immediateLevelSwitch();
  }
  /**
   * Index of next quality level loaded as scheduled by stream controller.
   */
  get nextLevel() {
    return this.streamController.nextLevel;
  }
  /**
   * Set quality level index for next loaded data.
   * This will switch the video quality asap, without interrupting playback.
   * May abort current loading of data, and flush parts of buffer (outside currently played fragment region).
   * @param newLevel - Pass -1 for automatic level selection
   */
  set nextLevel(e) {
    this.logger.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch();
  }
  /**
   * Return the quality level of the currently or last (of none is loaded currently) segment
   */
  get loadLevel() {
    return this.levelController.level;
  }
  /**
   * Set quality level index for next loaded data in a conservative way.
   * This will switch the quality without flushing, but interrupt current loading.
   * Thus the moment when the quality switch will appear in effect will only be after the already existing buffer.
   * @param newLevel - Pass -1 for automatic level selection
   */
  set loadLevel(e) {
    this.logger.log(`set loadLevel:${e}`), this.levelController.manualLevel = e;
  }
  /**
   * get next quality level loaded
   */
  get nextLoadLevel() {
    return this.levelController.nextLoadLevel;
  }
  /**
   * Set quality level of next loaded segment in a fully "non-destructive" way.
   * Same as `loadLevel` but will wait for next switch (until current loading is done).
   */
  set nextLoadLevel(e) {
    this.levelController.nextLoadLevel = e;
  }
  /**
   * Return "first level": like a default level, if not set,
   * falls back to index of first level referenced in manifest
   */
  get firstLevel() {
    return Math.max(this.levelController.firstLevel, this.minAutoLevel);
  }
  /**
   * Sets "first-level", see getter.
   */
  set firstLevel(e) {
    this.logger.log(`set firstLevel:${e}`), this.levelController.firstLevel = e;
  }
  /**
   * Return the desired start level for the first fragment that will be loaded.
   * The default value of -1 indicates automatic start level selection.
   * Setting hls.nextAutoLevel without setting a startLevel will result in
   * the nextAutoLevel value being used for one fragment load.
   */
  get startLevel() {
    const e = this.levelController.startLevel;
    return e === -1 && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : e;
  }
  /**
   * set  start level (level of first fragment that will be played back)
   * if not overrided by user, first level appearing in manifest will be used as start level
   * if -1 : automatic start level selection, playback will start from level matching download bandwidth
   * (determined from download of first segment)
   */
  set startLevel(e) {
    this.logger.log(`set startLevel:${e}`), e !== -1 && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e;
  }
  /**
   * Whether level capping is enabled.
   * Default value is set via `config.capLevelToPlayerSize`.
   */
  get capLevelToPlayerSize() {
    return this.config.capLevelToPlayerSize;
  }
  /**
   * Enables or disables level capping. If disabled after previously enabled, `nextLevelSwitch` will be immediately called.
   */
  set capLevelToPlayerSize(e) {
    const t = !!e;
    t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t);
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  get autoLevelCapping() {
    return this._autoLevelCapping;
  }
  /**
   * Returns the current bandwidth estimate in bits per second, when available. Otherwise, `NaN` is returned.
   */
  get bandwidthEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimate() : NaN;
  }
  set bandwidthEstimate(e) {
    this.abrController.resetEstimator(e);
  }
  get abrEwmaDefaultEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.defaultEstimate : NaN;
  }
  /**
   * get time to first byte estimate
   * @type {number}
   */
  get ttfbEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimateTTFB() : NaN;
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  set autoLevelCapping(e) {
    this._autoLevelCapping !== e && (this.logger.log(`set autoLevelCapping:${e}`), this._autoLevelCapping = e, this.levelController.checkMaxAutoUpdated());
  }
  get maxHdcpLevel() {
    return this._maxHdcpLevel;
  }
  set maxHdcpLevel(e) {
    Dh(e) && this._maxHdcpLevel !== e && (this._maxHdcpLevel = e, this.levelController.checkMaxAutoUpdated());
  }
  /**
   * True when automatic level selection enabled
   */
  get autoLevelEnabled() {
    return this.levelController.manualLevel === -1;
  }
  /**
   * Level set manually (if any)
   */
  get manualLevel() {
    return this.levelController.manualLevel;
  }
  /**
   * min level selectable in auto mode according to config.minAutoBitrate
   */
  get minAutoLevel() {
    const {
      levels: e,
      config: {
        minAutoBitrate: t
      }
    } = this;
    if (!e) return 0;
    const s = e.length;
    for (let i = 0; i < s; i++)
      if (e[i].maxBitrate >= t)
        return i;
    return 0;
  }
  /**
   * max level selectable in auto mode according to autoLevelCapping
   */
  get maxAutoLevel() {
    const {
      levels: e,
      autoLevelCapping: t,
      maxHdcpLevel: s
    } = this;
    let i;
    if (t === -1 && e != null && e.length ? i = e.length - 1 : i = t, s)
      for (let n = i; n--; ) {
        const a = e[n].attrs["HDCP-LEVEL"];
        if (a && a <= s)
          return n;
      }
    return i;
  }
  get firstAutoLevel() {
    return this.abrController.firstAutoLevel;
  }
  /**
   * next automatically selected quality level
   */
  get nextAutoLevel() {
    return this.abrController.nextAutoLevel;
  }
  /**
   * this setter is used to force next auto level.
   * this is useful to force a switch down in auto mode:
   * in case of load error on level N, hls.js can set nextAutoLevel to N-1 for example)
   * forced value is valid for one fragment. upon successful frag loading at forced level,
   * this value will be resetted to -1 by ABR controller.
   */
  set nextAutoLevel(e) {
    this.abrController.nextAutoLevel = e;
  }
  /**
   * get the datetime value relative to media.currentTime for the active level Program Date Time if present
   */
  get playingDate() {
    return this.streamController.currentProgramDateTime;
  }
  get mainForwardBufferInfo() {
    return this.streamController.getMainFwdBufferInfo();
  }
  get maxBufferLength() {
    return this.streamController.maxBufferLength;
  }
  /**
   * Find and select the best matching audio track, making a level switch when a Group change is necessary.
   * Updates `hls.config.audioPreference`. Returns the selected track, or null when no matching track is found.
   */
  setAudioOption(e) {
    var t;
    return ((t = this.audioTrackController) == null ? void 0 : t.setAudioOption(e)) || null;
  }
  /**
   * Find and select the best matching subtitle track, making a level switch when a Group change is necessary.
   * Updates `hls.config.subtitlePreference`. Returns the selected track, or null when no matching track is found.
   */
  setSubtitleOption(e) {
    var t;
    return ((t = this.subtitleTrackController) == null ? void 0 : t.setSubtitleOption(e)) || null;
  }
  /**
   * Get the complete list of audio tracks across all media groups
   */
  get allAudioTracks() {
    const e = this.audioTrackController;
    return e ? e.allAudioTracks : [];
  }
  /**
   * Get the list of selectable audio tracks
   */
  get audioTracks() {
    const e = this.audioTrackController;
    return e ? e.audioTracks : [];
  }
  /**
   * index of the selected audio track (index in audio track lists)
   */
  get audioTrack() {
    const e = this.audioTrackController;
    return e ? e.audioTrack : -1;
  }
  /**
   * selects an audio track, based on its index in audio track lists
   */
  set audioTrack(e) {
    const t = this.audioTrackController;
    t && (t.audioTrack = e);
  }
  /**
   * get the complete list of subtitle tracks across all media groups
   */
  get allSubtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.allSubtitleTracks : [];
  }
  /**
   * get alternate subtitle tracks list from playlist
   */
  get subtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTracks : [];
  }
  /**
   * index of the selected subtitle track (index in subtitle track lists)
   */
  get subtitleTrack() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTrack : -1;
  }
  get media() {
    return this._media;
  }
  /**
   * select an subtitle track, based on its index in subtitle track lists
   */
  set subtitleTrack(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleTrack = e);
  }
  /**
   * Whether subtitle display is enabled or not
   */
  get subtitleDisplay() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleDisplay : !1;
  }
  /**
   * Enable/disable subtitle display rendering
   */
  set subtitleDisplay(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleDisplay = e);
  }
  /**
   * get mode for Low-Latency HLS loading
   */
  get lowLatencyMode() {
    return this.config.lowLatencyMode;
  }
  /**
   * Enable/disable Low-Latency HLS part playlist and segment loading, and start live streams at playlist PART-HOLD-BACK rather than HOLD-BACK.
   */
  set lowLatencyMode(e) {
    this.config.lowLatencyMode = e;
  }
  /**
   * Position (in seconds) of live sync point (ie edge of live position minus safety delay defined by ```hls.config.liveSyncDuration```)
   * @returns null prior to loading live Playlist
   */
  get liveSyncPosition() {
    return this.latencyController.liveSyncPosition;
  }
  /**
   * Estimated position (in seconds) of live edge (ie edge of live playlist plus time sync playlist advanced)
   * @returns 0 before first playlist is loaded
   */
  get latency() {
    return this.latencyController.latency;
  }
  /**
   * maximum distance from the edge before the player seeks forward to ```hls.liveSyncPosition```
   * configured using ```liveMaxLatencyDurationCount``` (multiple of target duration) or ```liveMaxLatencyDuration```
   * @returns 0 before first playlist is loaded
   */
  get maxLatency() {
    return this.latencyController.maxLatency;
  }
  /**
   * target distance from the edge as calculated by the latency controller
   */
  get targetLatency() {
    return this.latencyController.targetLatency;
  }
  set targetLatency(e) {
    this.latencyController.targetLatency = e;
  }
  /**
   * the rate at which the edge of the current live playlist is advancing or 1 if there is none
   */
  get drift() {
    return this.latencyController.drift;
  }
  /**
   * set to true when startLoad is called before MANIFEST_PARSED event
   */
  get forceStartLoad() {
    return this.streamController.forceStartLoad;
  }
  /**
   * ContentSteering pathways getter
   */
  get pathways() {
    return this.levelController.pathways;
  }
  /**
   * ContentSteering pathwayPriority getter/setter
   */
  get pathwayPriority() {
    return this.levelController.pathwayPriority;
  }
  set pathwayPriority(e) {
    this.levelController.pathwayPriority = e;
  }
  /**
   * returns true when all SourceBuffers are buffered to the end
   */
  get bufferedToEnd() {
    var e;
    return !!((e = this.bufferController) != null && e.bufferedToEnd);
  }
  /**
   * returns Interstitials Program Manager
   */
  get interstitialsManager() {
    var e;
    return ((e = this.interstitialsController) == null ? void 0 : e.interstitialsManager) || null;
  }
  /**
   * returns mediaCapabilities.decodingInfo for a variant/rendition
   */
  getMediaDecodingInfo(e, t = this.allAudioTracks) {
    const s = Ko(t);
    return Uo(e, s, navigator.mediaCapabilities);
  }
}
tt.defaultConfig = void 0;
const Ym = (r, e = "200,", t = "full") => {
  Array.isArray(r) && (r = r[0]);
  const { id: s, service: i } = r;
  let n;
  if (!i) return s;
  if (Array.isArray(r.service) && r.service.length > 0 && (n = i[0]), n) {
    if (n["@id"])
      return `${n["@id"]}/${t}/${e}/0/default.jpg`;
    if (n.id)
      return `${n.id}/${t}/${e}/0/default.jpg`;
  }
}, go = le("img", { objectFit: "cover" }), jm = (r) => {
  const e = Oi(null), { contentResource: t, altAsLabel: s, region: i = "full" } = r;
  let n;
  s && (n = Ni(s));
  const o = fs(r, ["contentResource", "altAsLabel"]), { type: c, id: l, width: u = 200, height: h = 200, duration: d } = t;
  ks(() => {
    if (!l && !e.current || ["Image"].includes(c) || !l.includes("m3u8")) return;
    const p = new tt();
    return e.current && (p.attachMedia(e.current), p.on(tt.Events.MEDIA_ATTACHED, function() {
      p.loadSource(l);
    })), p.on(tt.Events.ERROR, function(y, E) {
      if (E.fatal)
        switch (E.type) {
          case tt.ErrorTypes.NETWORK_ERROR:
            console.error(
              `fatal ${y} network error encountered, try to recover`
            ), p.startLoad();
            break;
          case tt.ErrorTypes.MEDIA_ERROR:
            console.error(
              `fatal ${y} media error encountered, try to recover`
            ), p.recoverMediaError();
            break;
          default:
            p.destroy();
            break;
        }
    }), () => {
      p && (p.detachMedia(), p.destroy());
    };
  }, [l, c]);
  const f = To(() => {
    if (!e.current) return;
    let p = 0, y = 30;
    if (d && (y = d), !l.split("#t=") && d && (p = d * 0.1), l.split("#t=").pop()) {
      const T = l.split("#t=").pop();
      T && (p = parseInt(T.split(",")[0]));
    }
    const E = e.current;
    E.autoplay = !0, E.currentTime = p, setTimeout(() => f(), y * 1e3);
  }, [d, l]);
  ks(() => f(), [f]);
  const g = Ym(
    t,
    `${u},${h}`,
    i
  );
  switch (c) {
    case "Image":
      return /* @__PURE__ */ N.createElement(
        go,
        {
          as: "img",
          alt: n,
          css: { width: u, height: h },
          key: l,
          src: g,
          ...o
        }
      );
    case "Video":
      return /* @__PURE__ */ N.createElement(
        go,
        {
          as: "video",
          css: { width: u, height: h },
          disablePictureInPicture: !0,
          key: l,
          loop: !0,
          muted: !0,
          onPause: f,
          ref: e,
          src: l
        }
      );
    default:
      return console.warn(
        `Resource type: ${c} is not valid or not yet supported in Primitives.`
      ), /* @__PURE__ */ N.createElement(N.Fragment, null);
  }
}, zm = le("a", {}), ic = (r) => {
  const { children: e, homepage: t } = r, i = fs(r, ["children", "homepage"]);
  return /* @__PURE__ */ N.createElement(N.Fragment, null, t && t.map((n) => {
    const a = Ni(
      n.label,
      i.lang
    );
    return /* @__PURE__ */ N.createElement(
      zm,
      {
        "aria-label": e ? a : void 0,
        href: n.id,
        key: n.id,
        ...i
      },
      e || a
    );
  }));
}, qm = {
  delimiter: ", "
}, Sr = Eo(void 0), Xm = () => {
  const r = yc(Sr);
  if (r === void 0)
    throw new Error(
      "usePrimitivesContext must be used with a PrimitivesProvider"
    );
  return r;
}, Qm = ({
  children: r,
  initialState: e = qm
}) => {
  const t = Zm(e, "delimiter");
  return /* @__PURE__ */ N.createElement(Sr.Provider, { value: { delimiter: t } }, r);
}, Zm = (r, e) => Object.hasOwn(r, e) ? r[e].toString() : void 0, Jm = le("span", {}), mo = (r) => {
  const { as: e, markup: t } = r, { delimiter: s } = Xm();
  if (!t) return /* @__PURE__ */ N.createElement(N.Fragment, null);
  const n = fs(r, ["as", "markup"]), a = Bu(
    Ni(t, n.lang, s)
  );
  return /* @__PURE__ */ N.createElement(Jm, { as: e, ...n, dangerouslySetInnerHTML: a });
}, ep = (r) => N.useContext(Sr) ? /* @__PURE__ */ N.createElement(mo, { ...r }) : /* @__PURE__ */ N.createElement(Qm, null, /* @__PURE__ */ N.createElement(mo, { ...r }));
le("span", {});
le("dl", {});
le("li", {});
le("ul", {});
le("li", {});
le("ul", {});
le("dl", {});
le("li", {});
le("ul", {});
const nc = (r) => {
  const { as: e, summary: t } = r, i = fs(r, ["as", "customValueDelimiter", "summary"]);
  return /* @__PURE__ */ N.createElement(ep, { as: e, markup: t, ...i });
}, tp = (r) => {
  const { thumbnail: e, region: t } = r, i = fs(r, ["thumbnail"]);
  return /* @__PURE__ */ N.createElement(N.Fragment, null, e && e.map((n) => /* @__PURE__ */ N.createElement(
    jm,
    {
      contentResource: n,
      key: n.id,
      region: t,
      ...i
    }
  )));
}, sp = () => /* @__PURE__ */ N.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ N.createElement("title", null, "Next"), /* @__PURE__ */ N.createElement(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "45",
    d: "M268 112l144 144-144 144M392 256H100"
  }
)), ip = () => /* @__PURE__ */ N.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ N.createElement("title", null, "Previous"), /* @__PURE__ */ N.createElement(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "45",
    d: "M244 400L100 256l144-144M120 256h292"
  }
)), np = "Close", rp = "Next", ap = "Open", op = "Previous", lp = "Search", cp = "Search...", up = "Share", hp = "View All", dp = "Failed", fp = "Copied", gp = "Loading...", mp = "Search", pp = "No Results", yp = "More Results", Ep = "Full screen", Tp = "Reset zoom", Sp = "Rotate left", vp = "Rotate right", xp = "Zoom in", Ap = "Zoom out", Ip = "Select", Lp = "Viewer", bp = "About", Rp = "Annotations", _p = "Search", Dp = "More Information", Cp = "View Collection", Pp = "Copy Collection URL", kp = "View Manifest", wp = "Copy Manifest URL", rc = {
  commonClose: np,
  commonNext: rp,
  commonOpen: ap,
  commonPrevious: op,
  commonSearch: lp,
  commonSearchPlaceholder: cp,
  commonShare: up,
  commonViewAll: hp,
  copyFailure: dp,
  copySuccess: fp,
  contentSearchLoading: gp,
  contentSearchPlaceholder: mp,
  contentSearchResultsNone: pp,
  contentSearchResultsMore: yp,
  imageFullScreen: Ep,
  imageResetZoom: Tp,
  imageRotateLeft: Sp,
  imageRotateRight: vp,
  imageZoomIn: xp,
  imageZoomOut: Ap,
  informationPanelTabs: Ip,
  informationPanelTabsClose: Lp,
  informationPanelTabsAbout: bp,
  informationPanelTabsAnnotations: Rp,
  informationPanelTabsSearch: _p,
  informationPanelToggle: Dp,
  shareCollectionJson: Cp,
  shareCollectionCopy: Pp,
  shareManifestJson: kp,
  shareManifestCopy: wp
}, Op = "Cerrar", Mp = "Siguiente", Fp = "Abrir", Np = "Anterior", $p = "Buscar", Bp = "Buscar...", Up = "Compartir", Gp = "Ver todo", Kp = "Fallido", Vp = "Copiado", Hp = "Cargando...", Wp = "Buscar", Yp = "Sin resultados", jp = "Más resultados", zp = "Pantalla completa", qp = "Restablecer zoom", Xp = "Girar a la izquierda", Qp = "Girar a la derecha", Zp = "Acercar", Jp = "Alejar", e0 = "Seleccionar", t0 = "Visor", s0 = "Acerca de", i0 = "Anotaciones", n0 = "Buscar", r0 = "Más información", a0 = "Ver colección", o0 = "Copiar URL de la colección", l0 = "Ver manifiesto", c0 = "Copiar URL del manifiesto", u0 = {
  commonClose: Op,
  commonNext: Mp,
  commonOpen: Fp,
  commonPrevious: Np,
  commonSearch: $p,
  commonSearchPlaceholder: Bp,
  commonShare: Up,
  commonViewAll: Gp,
  copyFailure: Kp,
  copySuccess: Vp,
  contentSearchLoading: Hp,
  contentSearchPlaceholder: Wp,
  contentSearchResultsNone: Yp,
  contentSearchResultsMore: jp,
  imageFullScreen: zp,
  imageResetZoom: qp,
  imageRotateLeft: Xp,
  imageRotateRight: Qp,
  imageZoomIn: Zp,
  imageZoomOut: Jp,
  informationPanelTabs: e0,
  informationPanelTabsClose: t0,
  informationPanelTabsAbout: s0,
  informationPanelTabsAnnotations: i0,
  informationPanelTabsSearch: n0,
  informationPanelToggle: r0,
  shareCollectionJson: a0,
  shareCollectionCopy: o0,
  shareManifestJson: l0,
  shareManifestCopy: c0
}, h0 = "Sulje", d0 = "Seuraava", f0 = "Edellinen", g0 = "Hae", m0 = "Hae...", p0 = "Jaa", y0 = "Näytä kaikki", E0 = "Kopiointi epäonnistui", T0 = "Kopioitu", S0 = "Ladataan...", v0 = "Haku", x0 = "Ei osumia", A0 = "Lisää osumia", I0 = "Valitse", L0 = "Katselu", b0 = "Tiedot", R0 = "Annotaatiot", _0 = "Haku", D0 = "Lisätiedot", C0 = "Näytä kokoelma", P0 = "Kopioi kokoelman osoite", k0 = "Näytä manifesti", w0 = "Kopioi manifestin osoite", O0 = {
  commonClose: h0,
  commonNext: d0,
  commonPrevious: f0,
  commonSearch: g0,
  commonSearchPlaceholder: m0,
  commonShare: p0,
  commonViewAll: y0,
  copyFailure: E0,
  copySuccess: T0,
  contentSearchLoading: S0,
  contentSearchPlaceholder: v0,
  contentSearchResultsNone: x0,
  contentSearchResultsMore: A0,
  informationPanelTabs: I0,
  informationPanelTabsClose: L0,
  informationPanelTabsAbout: b0,
  informationPanelTabsAnnotations: R0,
  informationPanelTabsSearch: _0,
  informationPanelToggle: D0,
  shareCollectionJson: C0,
  shareCollectionCopy: P0,
  shareManifestJson: k0,
  shareManifestCopy: w0
}, M0 = "Fermer", F0 = "Suivant", N0 = "Ouvrir", $0 = "Précédent", B0 = "Rechercher", U0 = "Rechercher…", G0 = "Partager", K0 = "Tout afficher", V0 = "Échec", H0 = "Copié", W0 = "Chargement…", Y0 = "Rechercher", j0 = "Aucun résultat", z0 = "Plus de résultats", q0 = "Plein écran", X0 = "Réinitialiser le zoom", Q0 = "Rotation à gauche", Z0 = "Rotation à droite", J0 = "Zoom avant", ey = "Zoom arrière", ty = "Sélectionner", sy = "Visionneuse", iy = "À propos", ny = "Annotations", ry = "Recherche", ay = "Plus d’informations", oy = "Afficher la collection", ly = "Copier l’URL de la collection", cy = "Afficher le manifeste", uy = "Copier l’URL du manifeste", hy = {
  commonClose: M0,
  commonNext: F0,
  commonOpen: N0,
  commonPrevious: $0,
  commonSearch: B0,
  commonSearchPlaceholder: U0,
  commonShare: G0,
  commonViewAll: K0,
  copyFailure: V0,
  copySuccess: H0,
  contentSearchLoading: W0,
  contentSearchPlaceholder: Y0,
  contentSearchResultsNone: j0,
  contentSearchResultsMore: z0,
  imageFullScreen: q0,
  imageResetZoom: X0,
  imageRotateLeft: Q0,
  imageRotateRight: Z0,
  imageZoomIn: J0,
  imageZoomOut: ey,
  informationPanelTabs: ty,
  informationPanelTabsClose: sy,
  informationPanelTabsAbout: iy,
  informationPanelTabsAnnotations: ny,
  informationPanelTabsSearch: ry,
  informationPanelToggle: ay,
  shareCollectionJson: oy,
  shareCollectionCopy: ly,
  shareManifestJson: cy,
  shareManifestCopy: uy
}, dy = "Lukk", fy = "Neste", gy = "Forrige", my = "Søk", py = "Søk...", yy = "Del", Ey = "Se alle", Ty = "Feilet", Sy = "Kopiert", vy = "Laster inn...", xy = "Søk", Ay = "Ingen resultat", Iy = "Flere resultat", Ly = "Velg", by = "Viewer", Ry = "Om", _y = "Annoteringer", Dy = "Søk", Cy = "Mer informasjon", Py = "Se samlingen", ky = "Kopiér samlingens URL", wy = "Se manifestet", Oy = "Kopiér manifestets URL", My = {
  commonClose: dy,
  commonNext: fy,
  commonPrevious: gy,
  commonSearch: my,
  commonSearchPlaceholder: py,
  commonShare: yy,
  commonViewAll: Ey,
  copyFailure: Ty,
  copySuccess: Sy,
  contentSearchLoading: vy,
  contentSearchPlaceholder: xy,
  contentSearchResultsNone: Ay,
  contentSearchResultsMore: Iy,
  informationPanelTabs: Ly,
  informationPanelTabsClose: by,
  informationPanelTabsAbout: Ry,
  informationPanelTabsAnnotations: _y,
  informationPanelTabsSearch: Dy,
  informationPanelToggle: Cy,
  shareCollectionJson: Py,
  shareCollectionCopy: ky,
  shareManifestJson: wy,
  shareManifestCopy: Oy
}, Fy = "Lukk", Ny = "Neste", $y = "Førre", By = "Søk", Uy = "Søk...", Gy = "Del", Ky = "Sjå alle", Vy = "Feila", Hy = "Kopiert", Wy = "Laster inn...", Yy = "Søk", jy = "Ingen resultat", zy = "Fleire resultat", qy = "Vel", Xy = "Viewer", Qy = "Om", Zy = "Annoteringa", Jy = "Søk", eE = "Meir informasjon", tE = "Sjå samlinga", sE = "Kopiér samlingas URL", iE = "Sjå manifestet", nE = "Kopiér manifestets URL", rE = {
  commonClose: Fy,
  commonNext: Ny,
  commonPrevious: $y,
  commonSearch: By,
  commonSearchPlaceholder: Uy,
  commonShare: Gy,
  commonViewAll: Ky,
  copyFailure: Vy,
  copySuccess: Hy,
  contentSearchLoading: Wy,
  contentSearchPlaceholder: Yy,
  contentSearchResultsNone: jy,
  contentSearchResultsMore: zy,
  informationPanelTabs: qy,
  informationPanelTabsClose: Xy,
  informationPanelTabsAbout: Qy,
  informationPanelTabsAnnotations: Zy,
  informationPanelTabsSearch: Jy,
  informationPanelToggle: eE,
  shareCollectionJson: tE,
  shareCollectionCopy: sE,
  shareManifestJson: iE,
  shareManifestCopy: nE
}, aE = "Lukk", oE = "Neste", lE = "Forrige", cE = "Søk", uE = "Søk...", hE = "Del", dE = "Se alle", fE = "Feilet", gE = "Kopiert", mE = "Laster inn...", pE = "Søk", yE = "Ingen resultat", EE = "Flere resultat", TE = "Velg", SE = "Viewer", vE = "Om", xE = "Annoteringer", AE = "Søk", IE = "Mer informasjon", LE = "Se samlingen", bE = "Kopiér samlingens URL", RE = "Se manifestet", _E = "Kopiér manifestets URL", DE = {
  commonClose: aE,
  commonNext: oE,
  commonPrevious: lE,
  commonSearch: cE,
  commonSearchPlaceholder: uE,
  commonShare: hE,
  commonViewAll: dE,
  copyFailure: fE,
  copySuccess: gE,
  contentSearchLoading: mE,
  contentSearchPlaceholder: pE,
  contentSearchResultsNone: yE,
  contentSearchResultsMore: EE,
  informationPanelTabs: TE,
  informationPanelTabsClose: SE,
  informationPanelTabsAbout: vE,
  informationPanelTabsAnnotations: xE,
  informationPanelTabsSearch: AE,
  informationPanelToggle: IE,
  shareCollectionJson: LE,
  shareCollectionCopy: bE,
  shareManifestJson: RE,
  shareManifestCopy: _E
}, CE = {}, PE = {
  en: rc,
  es: u0,
  fi: O0,
  fr: hy,
  nb: My,
  nn: rE,
  no: DE,
  pt: CE
}, wi = "clover", kE = Object.fromEntries(
  Object.entries(PE).map(([r, e]) => [
    r,
    { [wi]: e }
  ])
), Ls = {
  defaultNS: wi,
  fallbackLng: "en",
  ns: [wi],
  resources: { ...kE }
}, wE = (r, e) => ({
  ...r || {},
  ...e || {}
});
let po = !1;
function OE(r) {
  if (r) {
    for (const [e, t] of Object.entries(r))
      if (t)
        for (const [s, i] of Object.entries(t))
          i && bs.addResourceBundle(e, s, i, !0, !0);
  }
}
function ME(r = {}) {
  if (po)
    OE(r.resources), r.lng && bs.changeLanguage(r.lng), r.fallbackLng && (bs.options.fallbackLng = r.fallbackLng);
  else {
    const e = wE(Ls.resources, r.resources);
    bs.use(Sc).use(Ec).init({
      ...Ls,
      ...r,
      resources: e,
      // Preserve our namespace defaults unless explicitly overridden.
      ns: r.ns ?? Ls.ns,
      defaultNS: r.defaultNS ?? Ls.defaultNS,
      fallbackLng: r.fallbackLng ?? Ls.fallbackLng
    }), po = !0;
  }
  return bs;
}
ME();
const FE = rc;
function NE(r) {
  return FE[r] ?? r;
}
function ac(r = wi) {
  const e = Tc(r), { t } = e, s = To(
    (i, n) => {
      const a = t(i, n);
      return typeof a != "string" || a === i ? NE(i) : a;
    },
    [t]
  );
  return {
    ...e,
    t: s
  };
}
const $E = le(ic, {
  display: "flex",
  backgroundColor: "$accent",
  color: "$secondary",
  height: "2rem !important",
  padding: "0 $3",
  margin: "0 0 0 $3",
  borderRadius: "2rem",
  cursor: "pointer",
  boxSizing: "content-box !important",
  transition: "$all",
  justifyContent: "center",
  alignItems: "center",
  lineBreak: "none",
  whiteSpace: "nowrap",
  textDecoration: "none !important",
  fontSize: "0.8333rem",
  "&:hover": {
    backgroundColor: "$accentAlt",
    boxShadow: "3px 3px 11px #0003",
    "&:disabled": {
      boxShadow: "unset"
    }
  }
}), BE = (r) => {
  const { t: e } = ac();
  return /* @__PURE__ */ N.createElement($E, { ...r }, e("commonViewAll"));
}, UE = ({
  homepage: r,
  instance: e,
  label: t,
  summary: s
}) => {
  const { t: i } = ac(), [n, a] = Mi(!1);
  return ks(() => {
    r && (r == null ? void 0 : r.length) > 0 && a(!0);
  }, [r]), /* @__PURE__ */ N.createElement(mu, { "data-testid": "slider-header" }, /* @__PURE__ */ N.createElement(fu, null, n ? /* @__PURE__ */ N.createElement(
    ic,
    {
      homepage: r,
      className: "clover-slider-header-homepage"
    },
    /* @__PURE__ */ N.createElement(
      Dn,
      {
        label: t,
        as: "span",
        className: "clover-slider-header-label"
      }
    )
  ) : /* @__PURE__ */ N.createElement(
    Dn,
    {
      label: t,
      as: "span",
      className: "clover-slider-header-label"
    }
  ), s && /* @__PURE__ */ N.createElement(
    nc,
    {
      summary: s,
      as: "span",
      className: "clover-slider-header-summary"
    }
  )), /* @__PURE__ */ N.createElement(gu, null, /* @__PURE__ */ N.createElement(
    Gr,
    {
      className: `clover-slider-previous-${e}`,
      "aria-label": i("commonPrevious")
    },
    /* @__PURE__ */ N.createElement(vi, null, /* @__PURE__ */ N.createElement(ip, null))
  ), /* @__PURE__ */ N.createElement(
    Gr,
    {
      className: `clover-slider-next-${e}`,
      "aria-label": i("commonNext")
    },
    /* @__PURE__ */ N.createElement(vi, null, /* @__PURE__ */ N.createElement(sp, null))
  ), n && /* @__PURE__ */ N.createElement(
    BE,
    {
      homepage: r,
      className: "clover-slider-header-view-all"
    }
  )));
}, GE = le("a", {
  textDecoration: "none"
}), KE = le("div", {
  position: "relative",
  zIndex: "0",
  borderRadius: "3px"
});
function yo(r, e) {
  if (typeof r == "function")
    return r(e);
  r != null && (r.current = e);
}
function VE(...r) {
  return (e) => {
    let t = !1;
    const s = r.map((i) => {
      const n = yo(i, e);
      return !t && typeof n == "function" && (t = !0), n;
    });
    if (t)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const n = s[i];
          typeof n == "function" ? n() : yo(r[i], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function HE(r) {
  const e = /* @__PURE__ */ WE(r), t = Oe.forwardRef((s, i) => {
    const { children: n, ...a } = s, o = Oe.Children.toArray(n), c = o.find(jE);
    if (c) {
      const l = c.props.children, u = o.map((h) => h === c ? Oe.Children.count(l) > 1 ? Oe.Children.only(null) : Oe.isValidElement(l) ? l.props.children : null : h);
      return /* @__PURE__ */ ws(e, { ...a, ref: i, children: Oe.isValidElement(l) ? Oe.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ ws(e, { ...a, ref: i, children: n });
  });
  return t.displayName = `${r}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function WE(r) {
  const e = Oe.forwardRef((t, s) => {
    const { children: i, ...n } = t;
    if (Oe.isValidElement(i)) {
      const a = qE(i), o = zE(n, i.props);
      return i.type !== Oe.Fragment && (o.ref = s ? VE(s, a) : a), Oe.cloneElement(i, o);
    }
    return Oe.Children.count(i) > 1 ? Oe.Children.only(null) : null;
  });
  return e.displayName = `${r}.SlotClone`, e;
}
var YE = Symbol("radix.slottable");
function jE(r) {
  return Oe.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === YE;
}
function zE(r, e) {
  const t = { ...e };
  for (const s in e) {
    const i = r[s], n = e[s];
    /^on[A-Z]/.test(s) ? i && n ? t[s] = (...o) => {
      const c = n(...o);
      return i(...o), c;
    } : i && (t[s] = i) : s === "style" ? t[s] = { ...i, ...n } : s === "className" && (t[s] = [i, n].filter(Boolean).join(" "));
  }
  return { ...r, ...t };
}
function qE(r) {
  var s, i;
  let e = (s = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : s.get, t = e && "isReactWarning" in e && e.isReactWarning;
  return t ? r.ref : (e = (i = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : i.get, t = e && "isReactWarning" in e && e.isReactWarning, t ? r.props.ref : r.props.ref || r.ref);
}
var XE = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], QE = XE.reduce((r, e) => {
  const t = /* @__PURE__ */ HE(`Primitive.${e}`), s = Oe.forwardRef((i, n) => {
    const { asChild: a, ...o } = i, c = a ? t : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ ws(c, { ...o, ref: n });
  });
  return s.displayName = `Primitive.${e}`, { ...r, [e]: s };
}, {}), ZE = "AspectRatio", oc = Oe.forwardRef(
  (r, e) => {
    const { ratio: t = 1 / 1, style: s, ...i } = r;
    return /* @__PURE__ */ ws(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / t}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ ws(
          QE.div,
          {
            ...i,
            ref: e,
            style: {
              ...s,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
oc.displayName = ZE;
var lc = oc;
const JE = le("div", {
  position: "absolute",
  width: "100%",
  backgroundColor: "green"
}), eT = le("figure", {
  display: "flex",
  flexDirection: "column",
  margin: "0 0 $2",
  flexGrow: "0",
  flexShrink: "0",
  borderRadius: "3px",
  transition: "$all",
  img: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    objectFit: "cover",
    zIndex: "0",
    width: "100%",
    height: "100%",
    color: "transparent"
  },
  video: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    objectFit: "cover",
    zIndex: "1",
    width: "100%",
    height: "100%",
    color: "transparent",
    opacity: "0",
    transition: "$load",
    borderRadius: "3px"
  },
  figcaption: {
    display: "flex",
    flexDirection: "column",
    padding: "$2 0",
    transition: "$all"
  },
  variants: {
    isFocused: {
      true: {
        video: {
          opacity: "1"
        },
        figcaption: {
          color: "$accent"
        }
      }
    }
  }
}), tT = le("span", {
  display: "flex",
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: "3px",
  boxShadow: "none",
  transition: "$all"
}), sT = le(Dn, {
  fontSize: "$3",
  fontWeight: "700"
}), iT = le(nc, {
  fontSize: "$2",
  marginTop: "$1"
}), nT = ({
  isFocused: r,
  label: e,
  summary: t,
  thumbnail: s
}) => {
  const i = Oi(null);
  return /* @__PURE__ */ N.createElement(eT, { isFocused: r }, /* @__PURE__ */ N.createElement(lc, { ratio: 1 / 1 }, /* @__PURE__ */ N.createElement(JE, { ref: i }), /* @__PURE__ */ N.createElement(tT, null, /* @__PURE__ */ N.createElement(
    tp,
    {
      altAsLabel: e,
      thumbnail: s,
      "data-testid": "figure-thumbnail"
    }
  ))), /* @__PURE__ */ N.createElement("figcaption", null, /* @__PURE__ */ N.createElement(sT, { label: e }), t && /* @__PURE__ */ N.createElement(iT, { summary: t })));
}, rT = ({ backgroundImage: r }) => /* @__PURE__ */ N.createElement(oT, { "data-testid": "slider-item-placeholder" }, /* @__PURE__ */ N.createElement(
  aT,
  {
    ratio: 1 / 1,
    css: {
      backgroundImage: `url(${r})`
    }
  }
)), aT = le(lc, {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 50%",
  filter: "blur(3em)",
  opacity: "0.7"
}), oT = le("div", {
  position: "absolute",
  width: "100%",
  overflow: "hidden",
  backgroundColor: "#716C6B"
}), lT = ({ handleItemInteraction: r, index: e, item: t }) => {
  var u, h;
  const [s, i] = Mi(!1);
  let n = [], a = "#";
  t != null && t.thumbnail && ((u = t == null ? void 0 : t.thumbnail) == null ? void 0 : u.length) > 0 && (n = t.thumbnail), t != null && t.homepage && ((h = t.homepage) == null ? void 0 : h.length) > 0 && (a = t.homepage[0].id);
  const o = () => i(!0), c = () => i(!1), l = (d) => {
    r && (d.preventDefault(), r(t));
  };
  return /* @__PURE__ */ N.createElement(KE, { "data-testid": "slider-item" }, /* @__PURE__ */ N.createElement(
    GE,
    {
      "data-testid": "slider-item-anchor",
      href: a,
      onClick: l,
      tabIndex: 0,
      onFocus: o,
      onBlur: c,
      onMouseEnter: o,
      onMouseLeave: c
    },
    /* @__PURE__ */ N.createElement(rT, { backgroundImage: "" }),
    /* @__PURE__ */ N.createElement(
      nT,
      {
        "data-testid": "slider-item-figure",
        index: e,
        isFocused: s,
        key: t.id,
        label: t.label,
        summary: t.summary,
        thumbnail: n
      }
    )
  ));
}, cT = le("div", {
  "& .swiper-slide": {}
}), uT = ({
  children: r,
  rootMargin: e = "100px",
  attributes: t = {},
  isVisibleCallback: s = () => {
  }
}) => {
  const i = Oi(null), [n, a] = Mi(!1);
  return ks(() => {
    const o = i.current;
    if (!o) return;
    const c = new IntersectionObserver(
      ([l]) => {
        l.isIntersecting && (s(!0), a(!0), c.disconnect());
      },
      { rootMargin: e }
    );
    return c.observe(o), () => c.disconnect();
  }, [i]), /* @__PURE__ */ N.createElement("div", { ref: i, ...t }, n ? r : null);
}, hT = {
  640: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30
  },
  1024: {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 40
  },
  1366: {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 50
  },
  1920: {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 60
  }
}, dT = ({
  breakpoints: r = hT,
  handleItemInteraction: e,
  instance: t,
  items: s
}) => {
  const i = Oi(null);
  return /* @__PURE__ */ N.createElement(cT, { ref: i }, /* @__PURE__ */ N.createElement(
    Ac,
    {
      a11y: {
        prevSlideMessage: "previous item",
        nextSlideMessage: "next item"
      },
      spaceBetween: 31,
      modules: [vc, xc],
      navigation: {
        nextEl: `.clover-slider-next-${t}`,
        prevEl: `.clover-slider-previous-${t}`
      },
      slidesPerView: 2,
      slidesPerGroup: 2,
      breakpoints: r
    },
    s.map((n, a) => /* @__PURE__ */ N.createElement(
      Ic,
      {
        key: `${n.id}-${a}`,
        "data-index": a,
        "data-type": n == null ? void 0 : n.type.toLowerCase()
      },
      /* @__PURE__ */ N.createElement(uT, null, /* @__PURE__ */ N.createElement(
        lT,
        {
          handleItemInteraction: e,
          index: a,
          item: n
        }
      ))
    ))
  ));
}, fT = (r) => {
  let e = 0;
  const t = r == null ? void 0 : r.length;
  let s = 0;
  if (t > 0) for (; s < t; ) e = (e << 5) - e + r.charCodeAt(s++) | 0;
  return e;
}, DT = (r) => /* @__PURE__ */ N.createElement(
  _c,
  {
    initialState: {
      ...Fi,
      options: { ...r.options }
    }
  },
  /* @__PURE__ */ N.createElement(gT, { ...r })
), gT = ({
  collectionId: r,
  iiifContent: e,
  onItemInteraction: t
}) => {
  const s = Dc(), { options: i } = s, [n, a] = Mi();
  let o = e;
  if (r && (o = r), ks(() => {
    o && fetch(o).then((u) => u.json()).then(Lc).then((u) => a(u)).catch((u) => {
      console.error(
        `The IIIF Collection ${o} failed to load: ${u}`
      );
    });
  }, [o]), (n == null ? void 0 : n.items.length) === 0)
    return console.log(`The IIIF Collection ${o} does not contain items.`), /* @__PURE__ */ N.createElement(N.Fragment, null);
  const c = i.customViewAll ? [
    {
      id: i.customViewAll,
      type: "Text",
      format: "text/html"
    }
  ] : n == null ? void 0 : n.homepage, l = fT(o);
  return n ? /* @__PURE__ */ N.createElement("div", null, /* @__PURE__ */ N.createElement(Pc, { FallbackComponent: du }, /* @__PURE__ */ N.createElement(
    UE,
    {
      label: n.label,
      summary: n && n.summary ? n.summary : { none: [""] },
      homepage: c,
      instance: l
    }
  ), /* @__PURE__ */ N.createElement(
    dT,
    {
      items: n.items,
      handleItemInteraction: t,
      instance: l,
      breakpoints: i.breakpoints
    }
  ))) : /* @__PURE__ */ N.createElement(N.Fragment, null);
};
export {
  DT as default
};
