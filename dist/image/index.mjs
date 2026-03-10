"use client";
import oe from "openseadragon";
import "@iiif/parser/presentation-2";
import "@iiif/helpers";
import g, { Component as He, createElement as fe, createContext as Ze, useCallback as _e, useEffect as F, useState as se, useRef as Je } from "./react-shim.mjs";
import { Vault as Ue } from "@iiif/helpers/vault";
import { initReactI18next as Ke, useTranslation as Ge } from "react-i18next";
import Xe from "i18next-browser-languagedetector";
import ne from "i18next";
let D = window.OpenSeadragon;
if (!D && (D = oe, !D))
  throw new Error("OpenSeadragon is missing.");
const be = "http://www.w3.org/2000/svg";
D.Viewer && (D.Viewer.prototype.svgOverlay = function() {
  return this._svgOverlayInfo ? this._svgOverlayInfo : (this._svgOverlayInfo = new Ae(this), this._svgOverlayInfo);
});
const Ae = function(e) {
  const t = this;
  this._viewer = e, this._containerWidth = 0, this._containerHeight = 0, this._svg = document.createElementNS(be, "svg"), this._svg.style.position = "absolute", this._svg.style.left = 0, this._svg.style.top = 0, this._svg.style.width = "100%", this._svg.style.height = "100%", this._viewer.canvas.appendChild(this._svg), this._node = document.createElementNS(be, "g"), this._svg.appendChild(this._node), this._viewer.addHandler("animation", function() {
    t.resize();
  }), this._viewer.addHandler("open", function() {
    t.resize();
  }), this._viewer.addHandler("rotate", function() {
    t.resize();
  }), this._viewer.addHandler("flip", function() {
    t.resize();
  }), this._viewer.addHandler("resize", function() {
    t.resize();
  }), this.resize();
};
Ae.prototype = {
  // ----------
  node: function() {
    return this._node;
  },
  // ----------
  resize: function() {
    this._containerWidth !== this._viewer.container.clientWidth && (this._containerWidth = this._viewer.container.clientWidth, this._svg.setAttribute("width", this._containerWidth)), this._containerHeight !== this._viewer.container.clientHeight && (this._containerHeight = this._viewer.container.clientHeight, this._svg.setAttribute("height", this._containerHeight));
    const e = this._viewer.viewport.pixelFromPoint(new D.Point(0, 0), !0), t = this._viewer.viewport.getZoom(!0), o = this._viewer.viewport.getRotation(), n = this._viewer.viewport.getFlip(), i = this._viewer.viewport._containerInnerSize.x;
    let r = i * t;
    const c = r;
    n && (r = -r, e.x = -e.x + i), this._node.setAttribute(
      "transform",
      "translate(" + e.x + "," + e.y + ") scale(" + r + "," + c + ") rotate(" + o + ")"
    );
  },
  // ----------
  onClick: function(e, t) {
    new D.MouseTracker({
      element: e,
      clickHandler: t
    }).setTracking(!0);
  }
};
const qe = (e) => {
  var o, n, i, r, c;
  let t = {
    id: typeof e == "string" ? e : e.source
  };
  if (typeof e == "string") {
    if (e.includes("#xywh=")) {
      const a = e.split("#xywh=");
      if (a && a[1]) {
        const [l, u, h, s] = a[1].split(",").map((d) => Number(d));
        t = {
          id: a[0],
          rect: {
            x: l,
            y: u,
            w: h,
            h: s
          }
        };
      }
    } else if (e.includes("#t=")) {
      const a = e.split("#t=");
      a && a[1] && (t = {
        id: a[0],
        t: a[1]
      });
    }
  } else if (typeof e == "object") {
    if (((o = e.selector) == null ? void 0 : o.type) === "PointSelector")
      t = {
        id: e.source,
        point: {
          x: e.selector.x,
          y: e.selector.y
        }
      };
    else if (((n = e.selector) == null ? void 0 : n.type) === "SvgSelector")
      t = {
        id: e.source,
        svg: e.selector.value
      };
    else if (((i = e.selector) == null ? void 0 : i.type) === "FragmentSelector" && (r = e.selector) != null && r.value.includes("xywh=") && e.source.type == "Canvas" && e.source.id) {
      const a = (c = e.selector) == null ? void 0 : c.value.split("xywh=");
      if (a && a[1]) {
        const [l, u, h, s] = a[1].split(",").map((d) => Number(d));
        t = {
          id: e.source.id,
          rect: {
            x: l,
            y: u,
            w: h,
            h: s
          }
        };
      }
    }
  }
  return t;
}, Ye = (e) => fetch(`${e.replace(/\/$/, "")}/info.json`).then((t) => t.json()).then((t) => t).catch((t) => {
  console.error(
    `The IIIF tilesource ${e.replace(
      /\/$/,
      ""
    )}/info.json failed to load: ${t}`
  );
}), Qe = (e) => {
  let t, o;
  if (Array.isArray(e) && (t = e[0], t)) {
    let n;
    "@id" in t ? n = t["@id"] : n = t.id, o = n;
  }
  return o;
};
var z = /* @__PURE__ */ ((e) => (e.TiledImage = "tiledImage", e.SimpleImage = "simpleImage", e))(z || {});
const et = (e) => {
  const t = Array.isArray(e == null ? void 0 : e.service) && (e == null ? void 0 : e.service.length) > 0, o = t ? Qe(e == null ? void 0 : e.service) : e == null ? void 0 : e.id, n = t ? z.TiledImage : z.SimpleImage;
  return {
    uri: o,
    imageType: n
  };
}, tt = (e, t) => {
  const o = t ? z.TiledImage : z.SimpleImage;
  return {
    uri: e,
    imageType: o
  };
}, ot = Ze(null), le = {
  didCatch: !1,
  error: null
};
class nt extends He {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = le;
  }
  static getDerivedStateFromError(t) {
    return {
      didCatch: !0,
      error: t
    };
  }
  resetErrorBoundary() {
    const {
      error: t
    } = this.state;
    if (t !== null) {
      for (var o, n, i = arguments.length, r = new Array(i), c = 0; c < i; c++)
        r[c] = arguments[c];
      (o = (n = this.props).onReset) === null || o === void 0 || o.call(n, {
        args: r,
        reason: "imperative-api"
      }), this.setState(le);
    }
  }
  componentDidCatch(t, o) {
    var n, i;
    (n = (i = this.props).onError) === null || n === void 0 || n.call(i, t, o);
  }
  componentDidUpdate(t, o) {
    const {
      didCatch: n
    } = this.state, {
      resetKeys: i
    } = this.props;
    if (n && o.error !== null && rt(t.resetKeys, i)) {
      var r, c;
      (r = (c = this.props).onReset) === null || r === void 0 || r.call(c, {
        next: i,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState(le);
    }
  }
  render() {
    const {
      children: t,
      fallbackRender: o,
      FallbackComponent: n,
      fallback: i
    } = this.props, {
      didCatch: r,
      error: c
    } = this.state;
    let a = t;
    if (r) {
      const l = {
        error: c,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof o == "function")
        a = o(l);
      else if (n)
        a = fe(n, l);
      else if (i !== void 0)
        a = i;
      else
        throw c;
    }
    return fe(ot.Provider, {
      value: {
        didCatch: r,
        error: c,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, a);
  }
}
function rt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((o, n) => !Object.is(o, t[n]));
}
var C = "colors", L = "sizes", m = "space", it = { gap: m, gridGap: m, columnGap: m, gridColumnGap: m, rowGap: m, gridRowGap: m, inset: m, insetBlock: m, insetBlockEnd: m, insetBlockStart: m, insetInline: m, insetInlineEnd: m, insetInlineStart: m, margin: m, marginTop: m, marginRight: m, marginBottom: m, marginLeft: m, marginBlock: m, marginBlockEnd: m, marginBlockStart: m, marginInline: m, marginInlineEnd: m, marginInlineStart: m, padding: m, paddingTop: m, paddingRight: m, paddingBottom: m, paddingLeft: m, paddingBlock: m, paddingBlockEnd: m, paddingBlockStart: m, paddingInline: m, paddingInlineEnd: m, paddingInlineStart: m, top: m, right: m, bottom: m, left: m, scrollMargin: m, scrollMarginTop: m, scrollMarginRight: m, scrollMarginBottom: m, scrollMarginLeft: m, scrollMarginX: m, scrollMarginY: m, scrollMarginBlock: m, scrollMarginBlockEnd: m, scrollMarginBlockStart: m, scrollMarginInline: m, scrollMarginInlineEnd: m, scrollMarginInlineStart: m, scrollPadding: m, scrollPaddingTop: m, scrollPaddingRight: m, scrollPaddingBottom: m, scrollPaddingLeft: m, scrollPaddingX: m, scrollPaddingY: m, scrollPaddingBlock: m, scrollPaddingBlockEnd: m, scrollPaddingBlockStart: m, scrollPaddingInline: m, scrollPaddingInlineEnd: m, scrollPaddingInlineStart: m, fontSize: "fontSizes", background: C, backgroundColor: C, backgroundImage: C, borderImage: C, border: C, borderBlock: C, borderBlockEnd: C, borderBlockStart: C, borderBottom: C, borderBottomColor: C, borderColor: C, borderInline: C, borderInlineEnd: C, borderInlineStart: C, borderLeft: C, borderLeftColor: C, borderRight: C, borderRightColor: C, borderTop: C, borderTopColor: C, caretColor: C, color: C, columnRuleColor: C, fill: C, outline: C, outlineColor: C, stroke: C, textDecorationColor: C, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: L, minBlockSize: L, maxBlockSize: L, inlineSize: L, minInlineSize: L, maxInlineSize: L, width: L, minWidth: L, maxWidth: L, height: L, minHeight: L, maxHeight: L, flexBasis: L, gridTemplateColumns: L, gridTemplateRows: L, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, st = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, G = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, o, ...n) => {
    const i = ((r) => JSON.stringify(r, st))(t);
    return i in e ? e[i] : e[i] = o(t, ...n);
  };
}, H = Symbol.for("sxs.internal"), ge = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), Se = (e) => {
  for (const t in e) return !0;
  return !1;
}, { hasOwnProperty: at } = Object.prototype, ue = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), ct = /\s+(?![^()]*\))/, J = (e) => (t) => e(...typeof t == "string" ? String(t).split(ct) : [t]), ye = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: J((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: J((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: J((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: J((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: J((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: J((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, de = /([\d.]+)([^]*)/, lt = (e, t) => e.length ? e.reduce((o, n) => (o.push(...t.map((i) => i.includes("&") ? i.replace(/&/g, /[ +>|~]/.test(n) && /&.*&/.test(i) ? `:is(${n})` : n) : n + " " + i)), o), []) : t, dt = (e, t) => e in mt && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (o, n, i, r) => n + (i === "stretch" ? `-moz-available${r};${ue(e)}:${n}-webkit-fill-available` : `-moz-fit-content${r};${ue(e)}:${n}fit-content`) + r) : String(t), mt = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, j = (e) => e ? e + "-" : "", Ee = (e, t, o) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (n, i, r, c, a) => c == "$" == !!r ? n : (i || c == "--" ? "calc(" : "") + "var(--" + (c === "$" ? j(t) + (a.includes("$") ? "" : j(o)) + a.replace(/\$/g, "-") : a) + ")" + (i || c == "--" ? "*" + (i || "") + (r || "1") + ")" : "")), ut = /\s*,\s*(?![^()]*\))/, ht = Object.prototype.toString, K = (e, t, o, n, i) => {
  let r, c, a;
  const l = (u, h, s) => {
    let d, p;
    const S = (v) => {
      for (d in v) {
        const x = d.charCodeAt(0) === 64, _ = x && Array.isArray(v[d]) ? v[d] : [v[d]];
        for (p of _) {
          const A = /[A-Z]/.test(b = d) ? b : b.replace(/-[^]/g, (y) => y[1].toUpperCase()), I = typeof p == "object" && p && p.toString === ht && (!n.utils[A] || !h.length);
          if (A in n.utils && !I) {
            const y = n.utils[A];
            if (y !== c) {
              c = y, S(y(p)), c = null;
              continue;
            }
          } else if (A in ye) {
            const y = ye[A];
            if (y !== a) {
              a = y, S(y(p)), a = null;
              continue;
            }
          }
          if (x && (R = d.slice(1) in n.media ? "@media " + n.media[d.slice(1)] : d, d = R.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (y, $, P, f, w, T) => {
            const M = de.test($), O = 0.0625 * (M ? -1 : 1), [W, X] = M ? [f, $] : [$, f];
            return "(" + (P[0] === "=" ? "" : P[0] === ">" === M ? "max-" : "min-") + W + ":" + (P[0] !== "=" && P.length === 1 ? X.replace(de, (ie, q, Y) => Number(q) + O * (P === ">" ? 1 : -1) + Y) : X) + (w ? ") and (" + (w[0] === ">" ? "min-" : "max-") + W + ":" + (w.length === 1 ? T.replace(de, (ie, q, Y) => Number(q) + O * (w === ">" ? -1 : 1) + Y) : T) : "") + ")";
          })), I) {
            const y = x ? s.concat(d) : [...s], $ = x ? [...h] : lt(h, d.split(ut));
            r !== void 0 && i($e(...r)), r = void 0, l(p, $, y);
          } else r === void 0 && (r = [[], h, s]), d = x || d.charCodeAt(0) !== 36 ? d : `--${j(n.prefix)}${d.slice(1).replace(/\$/g, "-")}`, p = I ? p : typeof p == "number" ? p && A in pt ? String(p) + "px" : String(p) : Ee(dt(A, p ?? ""), n.prefix, n.themeMap[A]), r[0].push(`${x ? `${d} ` : `${ue(d)}:`}${p}`);
        }
      }
      var R, b;
    };
    S(u), r !== void 0 && i($e(...r)), r = void 0;
  };
  l(e, t, o);
}, $e = (e, t, o) => `${o.map((n) => `${n}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(o.length ? o.length + 1 : 0).join("}")}`, pt = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, ve = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), Z = (e) => ((t) => {
  let o, n = "";
  for (o = Math.abs(t); o > 52; o = o / 52 | 0) n = ve(o % 52) + n;
  return ve(o % 52) + n;
})(((t, o) => {
  let n = o.length;
  for (; n; ) t = 33 * t ^ o.charCodeAt(--n);
  return t;
})(5381, JSON.stringify(e)) >>> 0), re = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], gt = (e) => {
  if (e.href && !e.href.startsWith(location.origin)) return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, ft = (e) => {
  let t;
  const o = () => {
    const { cssRules: i } = t.sheet;
    return [].map.call(i, (r, c) => {
      const { cssText: a } = r;
      let l = "";
      if (a.startsWith("--sxs")) return "";
      if (i[c - 1] && (l = i[c - 1].cssText).startsWith("--sxs")) {
        if (!r.cssRules.length) return "";
        for (const u in t.rules) if (t.rules[u].group === r) return `--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${a}`;
        return r.cssRules.length ? `${l}${a}` : "";
      }
      return a;
    }).join("");
  }, n = () => {
    if (t) {
      const { rules: a, sheet: l } = t;
      if (!l.deleteRule) {
        for (; Object(Object(l.cssRules)[0]).type === 3; ) l.cssRules.splice(0, 1);
        l.cssRules = [];
      }
      for (const u in a) delete a[u];
    }
    const i = Object(e).styleSheets || [];
    for (const a of i) if (gt(a)) {
      for (let l = 0, u = a.cssRules; u[l]; ++l) {
        const h = Object(u[l]);
        if (h.type !== 1) continue;
        const s = Object(u[l + 1]);
        if (s.type !== 4) continue;
        ++l;
        const { cssText: d } = h;
        if (!d.startsWith("--sxs")) continue;
        const p = d.slice(14, -3).trim().split(/\s+/), S = re[p[0]];
        S && (t || (t = { sheet: a, reset: n, rules: {}, toString: o }), t.rules[S] = { group: s, index: l, cache: new Set(p) });
      }
      if (t) break;
    }
    if (!t) {
      const a = (l, u) => ({ type: u, cssRules: [], insertRule(h, s) {
        this.cssRules.splice(s, 0, a(h, { import: 3, undefined: 1 }[(h.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return l === "@media{}" ? `@media{${[].map.call(this.cssRules, (h) => h.cssText).join("")}}` : l;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : a("", "text/css"), rules: {}, reset: n, toString: o };
    }
    const { sheet: r, rules: c } = t;
    for (let a = re.length - 1; a >= 0; --a) {
      const l = re[a];
      if (!c[l]) {
        const u = re[a + 1], h = c[u] ? c[u].index : r.cssRules.length;
        r.insertRule("@media{}", h), r.insertRule(`--sxs{--sxs:${a}}`, h), c[l] = { group: r.cssRules[h + 1], index: h, cache: /* @__PURE__ */ new Set([a]) };
      }
      bt(c[l]);
    }
  };
  return n(), t;
}, bt = (e) => {
  const t = e.group;
  let o = t.cssRules.length;
  e.apply = (n) => {
    try {
      t.insertRule(n, o), ++o;
    } catch {
    }
  };
}, ee = Symbol(), St = G(), xe = (e, t) => St(e, () => (...o) => {
  let n = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const i of o) if (i != null) if (i[H]) {
    n.type == null && (n.type = i[H].type);
    for (const r of i[H].composers) n.composers.add(r);
  } else i.constructor !== Object || i.$$typeof ? n.type == null && (n.type = i) : n.composers.add(yt(i, e));
  return n.type == null && (n.type = "span"), n.composers.size || n.composers.add(["PJLV", {}, [], [], {}, []]), $t(e, n, t);
}), yt = ({ variants: e, compoundVariants: t, defaultVariants: o, ...n }, i) => {
  const r = `${j(i.prefix)}c-${Z(n)}`, c = [], a = [], l = /* @__PURE__ */ Object.create(null), u = [];
  for (const d in o) l[d] = String(o[d]);
  if (typeof e == "object" && e) for (const d in e) {
    h = l, s = d, at.call(h, s) || (l[d] = "undefined");
    const p = e[d];
    for (const S in p) {
      const v = { [d]: String(S) };
      String(S) === "undefined" && u.push(d);
      const R = p[S], b = [v, R, !Se(R)];
      c.push(b);
    }
  }
  var h, s;
  if (typeof t == "object" && t) for (const d of t) {
    let { css: p, ...S } = d;
    p = typeof p == "object" && p || {};
    for (const R in S) S[R] = String(S[R]);
    const v = [S, p, !Se(p)];
    a.push(v);
  }
  return [r, n, c, a, l, u];
}, $t = (e, t, o) => {
  const [n, i, r, c] = vt(t.composers), a = typeof t.type == "function" || t.type.$$typeof ? ((s) => {
    function d() {
      for (let p = 0; p < d[ee].length; p++) {
        const [S, v] = d[ee][p];
        s.rules[S].apply(v);
      }
      return d[ee] = [], null;
    }
    return d[ee] = [], d.rules = {}, re.forEach((p) => d.rules[p] = { apply: (S) => d[ee].push([p, S]) }), d;
  })(o) : null, l = (a || o).rules, u = `.${n}${i.length > 1 ? `:where(.${i.slice(1).join(".")})` : ""}`, h = (s) => {
    s = typeof s == "object" && s || xt;
    const { css: d, ...p } = s, S = {};
    for (const b in r) if (delete p[b], b in s) {
      let x = s[b];
      typeof x == "object" && x ? S[b] = { "@initial": r[b], ...x } : (x = String(x), S[b] = x !== "undefined" || c.has(b) ? x : r[b]);
    } else S[b] = r[b];
    const v = /* @__PURE__ */ new Set([...i]);
    for (const [b, x, _, A] of t.composers) {
      o.rules.styled.cache.has(b) || (o.rules.styled.cache.add(b), K(x, [`.${b}`], [], e, ($) => {
        l.styled.apply($);
      }));
      const I = we(_, S, e.media), y = we(A, S, e.media, !0);
      for (const $ of I) if ($ !== void 0) for (const [P, f, w] of $) {
        const T = `${b}-${Z(f)}-${P}`;
        v.add(T);
        const M = (w ? o.rules.resonevar : o.rules.onevar).cache, O = w ? l.resonevar : l.onevar;
        M.has(T) || (M.add(T), K(f, [`.${T}`], [], e, (W) => {
          O.apply(W);
        }));
      }
      for (const $ of y) if ($ !== void 0) for (const [P, f] of $) {
        const w = `${b}-${Z(f)}-${P}`;
        v.add(w), o.rules.allvar.cache.has(w) || (o.rules.allvar.cache.add(w), K(f, [`.${w}`], [], e, (T) => {
          l.allvar.apply(T);
        }));
      }
    }
    if (typeof d == "object" && d) {
      const b = `${n}-i${Z(d)}-css`;
      v.add(b), o.rules.inline.cache.has(b) || (o.rules.inline.cache.add(b), K(d, [`.${b}`], [], e, (x) => {
        l.inline.apply(x);
      }));
    }
    for (const b of String(s.className || "").trim().split(/\s+/)) b && v.add(b);
    const R = p.className = [...v].join(" ");
    return { type: t.type, className: R, selector: u, props: p, toString: () => R, deferredInjector: a };
  };
  return ge(h, { className: n, selector: u, [H]: t, toString: () => (o.rules.styled.cache.has(n) || h(), n) });
}, vt = (e) => {
  let t = "";
  const o = [], n = {}, i = [];
  for (const [r, , , , c, a] of e) {
    t === "" && (t = r), o.push(r), i.push(...a);
    for (const l in c) {
      const u = c[l];
      (n[l] === void 0 || u !== "undefined" || a.includes(u)) && (n[l] = u);
    }
  }
  return [t, o, n, new Set(i)];
}, we = (e, t, o, n) => {
  const i = [];
  e: for (let [r, c, a] of e) {
    if (a) continue;
    let l, u = 0, h = !1;
    for (l in r) {
      const s = r[l];
      let d = t[l];
      if (d !== s) {
        if (typeof d != "object" || !d) continue e;
        {
          let p, S, v = 0;
          for (const R in d) {
            if (s === String(d[R])) {
              if (R !== "@initial") {
                const b = R.slice(1);
                (S = S || []).push(b in o ? o[b] : R.replace(/^@media ?/, "")), h = !0;
              }
              u += v, p = !0;
            }
            ++v;
          }
          if (S && S.length && (c = { ["@media " + S.join(", ")]: c }), !p) continue e;
        }
      }
    }
    (i[u] = i[u] || []).push([n ? "cv" : `${l}-${r[l]}`, c, h]);
  }
  return i;
}, xt = {}, wt = G(), Pt = (e, t) => wt(e, () => (...o) => {
  const n = () => {
    for (let i of o) {
      i = typeof i == "object" && i || {};
      let r = Z(i);
      if (!t.rules.global.cache.has(r)) {
        if (t.rules.global.cache.add(r), "@import" in i) {
          let c = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let a of [].concat(i["@import"])) a = a.includes('"') || a.includes("'") ? a : `"${a}"`, t.sheet.insertRule(`@import ${a};`, c++);
          delete i["@import"];
        }
        K(i, [], [], e, (c) => {
          t.rules.global.apply(c);
        });
      }
    }
    return "";
  };
  return ge(n, { toString: n });
}), Ct = G(), Rt = (e, t) => Ct(e, () => (o) => {
  const n = `${j(e.prefix)}k-${Z(o)}`, i = () => {
    if (!t.rules.global.cache.has(n)) {
      t.rules.global.cache.add(n);
      const r = [];
      K(o, [], [], e, (a) => r.push(a));
      const c = `@keyframes ${n}{${r.join("")}}`;
      t.rules.global.apply(c);
    }
    return n;
  };
  return ge(i, { get name() {
    return i();
  }, toString: i });
}), kt = class {
  constructor(e, t, o, n) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = o == null ? "" : String(o), this.prefix = n == null ? "" : String(n);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + j(this.prefix) + j(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, Tt = G(), It = (e, t) => Tt(e, () => (o, n) => {
  n = typeof o == "object" && o || Object(n);
  const i = `.${o = (o = typeof o == "string" ? o : "") || `${j(e.prefix)}t-${Z(n)}`}`, r = {}, c = [];
  for (const l in n) {
    r[l] = {};
    for (const u in n[l]) {
      const h = `--${j(e.prefix)}${l}-${u}`, s = Ee(String(n[l][u]), e.prefix, l);
      r[l][u] = new kt(u, s, l, e.prefix), c.push(`${h}:${s}`);
    }
  }
  const a = () => {
    if (c.length && !t.rules.themed.cache.has(o)) {
      t.rules.themed.cache.add(o);
      const l = `${n === e.theme ? ":root," : ""}.${o}{${c.join(";")}}`;
      t.rules.themed.apply(l);
    }
    return o;
  };
  return { ...r, get className() {
    return a();
  }, selector: i, toString: a };
}), Bt = G(), At = G(), Et = (e) => {
  const t = ((o) => {
    let n = !1;
    const i = Bt(o, (r) => {
      n = !0;
      const c = "prefix" in (r = typeof r == "object" && r || {}) ? String(r.prefix) : "", a = typeof r.media == "object" && r.media || {}, l = typeof r.root == "object" ? r.root || null : globalThis.document || null, u = typeof r.theme == "object" && r.theme || {}, h = { prefix: c, media: a, theme: u, themeMap: typeof r.themeMap == "object" && r.themeMap || { ...it }, utils: typeof r.utils == "object" && r.utils || {} }, s = ft(l), d = { css: xe(h, s), globalCss: Pt(h, s), keyframes: Rt(h, s), createTheme: It(h, s), reset() {
        s.reset(), d.theme.toString();
      }, theme: {}, sheet: s, config: h, prefix: c, getCssText: s.toString, toString: s.toString };
      return String(d.theme = d.createTheme(u)), d;
    });
    return n || i.reset(), i;
  })(e);
  return t.styled = (({ config: o, sheet: n }) => At(o, () => {
    const i = xe(o, n);
    return (...r) => {
      const c = i(...r), a = c[H].type, l = g.forwardRef((u, h) => {
        const s = u && u.as || a, { props: d, deferredInjector: p } = c(u);
        return delete d.as, d.ref = h, p ? g.createElement(g.Fragment, null, g.createElement(s, d), g.createElement(p, null)) : g.createElement(s, d);
      });
      return l.className = c.className, l.displayName = `Styled.${a.displayName || a.name || a}`, l.selector = c.selector, l.toString = () => c.selector, l[H] = c[H], l;
    };
  }))(t), t;
};
const me = 209, Lt = {
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
    accent: `hsl(${me} 100% 38.2%)`,
    accentMuted: `hsl(${me} 80% 61.8%)`,
    accentAlt: `hsl(${me} 80% 30%)`,
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
}, Mt = {
  xxs: "(max-width: 349px)",
  xs: "(max-width: 575px)",
  sm: "(max-width: 767px)",
  md: "(max-width: 991px)",
  lg: "(max-width: 90rem)",
  xl: "(min-width: calc(90rem + 1px))"
}, { styled: V, css: ts, keyframes: os, createTheme: ns } = Et({
  theme: Lt,
  media: Mt
}), zt = V("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}), Ot = V("p", {
  fontWeight: "bold",
  fontSize: "x-large"
}), Nt = V("span", {
  fontSize: "medium"
}), jt = ({ error: e }) => {
  const { message: t } = e;
  return /* @__PURE__ */ g.createElement(zt, { role: "alert" }, /* @__PURE__ */ g.createElement(Ot, { "data-testid": "headline" }, "Something went wrong"), t && /* @__PURE__ */ g.createElement(Nt, null, `Error message: ${t}`, " "));
}, he = V("div", {
  position: "absolute !important",
  zIndex: "1",
  top: "1rem",
  left: "1rem",
  width: "161.8px",
  height: "100px",
  backgroundColor: "#000D",
  boxShadow: "5px 5px 5px #0002",
  borderRadius: "3px",
  ".displayregion": {
    border: " 3px solid $accent !important",
    boxShadow: "0 0 3px #0006"
  },
  "@sm": {
    width: "123px",
    height: "76px"
  },
  "@xs": {
    width: "100px",
    height: "61.8px"
  }
}), Vt = V("div", {
  position: "relative",
  width: "100%",
  height: "100%",
  zIndex: "0",
  ".clover-iiif-image-openseadragon-annotation": {
    position: "relative",
    backgroundColor: "transparent",
    border: "2px solid #0003",
    boxSizing: "content-box",
    borderRadius: "3px",
    boxShadow: "0 0 38vw 38vw transparent",
    transition: "box-shadow 100ms ease-in-out",
    zIndex: "0",
    label: {
      opacity: 0,
      position: "absolute",
      lineHeight: "1.47rem",
      pointerEvents: "none",
      textAlign: "center",
      minWidth: "300px",
      maxWidth: "20vw",
      padding: "0.5rem",
      borderRadius: "3px",
      top: "calc(100% + 0.5rem)",
      left: "50%",
      transform: "translate(-50%, 0)",
      backgroundColor: "$primary",
      color: "$secondary",
      transition: "opacity 100ms ease-in-out"
    },
    "&[data-active=true]": {
      border: "2px solid $accent !important",
      boxShadow: "0 0 38vw 38vw #0003",
      zIndex: "99999999",
      label: {
        opacity: 1
      }
    }
  }
}), Wt = V("div", {
  width: "100%",
  height: "100%",
  maxHeight: "100vh",
  background: "transparent",
  backgroundSize: "contain",
  color: "white",
  position: "relative",
  zIndex: "0",
  overflow: "hidden",
  variants: {
    hasNavigator: {
      true: {
        [`${he}`]: {
          display: "block"
        }
      },
      false: {
        [`${he}`]: {
          display: "none"
        }
      }
    }
  }
});
let ae;
const Ft = new Uint8Array(16);
function Dt() {
  if (!ae && (ae = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ae))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ae(Ft);
}
const B = [];
for (let e = 0; e < 256; ++e)
  B.push((e + 256).toString(16).slice(1));
function Ht(e, t = 0) {
  return B[e[t + 0]] + B[e[t + 1]] + B[e[t + 2]] + B[e[t + 3]] + "-" + B[e[t + 4]] + B[e[t + 5]] + "-" + B[e[t + 6]] + B[e[t + 7]] + "-" + B[e[t + 8]] + B[e[t + 9]] + "-" + B[e[t + 10]] + B[e[t + 11]] + B[e[t + 12]] + B[e[t + 13]] + B[e[t + 14]] + B[e[t + 15]];
}
const Zt = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Pe = {
  randomUUID: Zt
};
function Le(e, t, o) {
  if (Pe.randomUUID && !e)
    return Pe.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || Dt)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Ht(n);
}
const Me = {
  behavior: "smooth",
  block: "center"
}, N = {
  annotationOverlays: {
    backgroundColor: "#6666ff",
    borderColor: "#000099",
    borderType: "solid",
    borderWidth: "1px",
    opacity: "0.5",
    renderOverlays: !0,
    zoomLevel: 2
  },
  annotations: {
    motivations: void 0
  },
  background: "transparent",
  canvasBackgroundColor: "#6662",
  canvasHeight: "500px",
  contentSearch: {
    searchResultsLimit: 20,
    overlays: {
      backgroundColor: "#ff6666",
      borderColor: "#990000",
      borderType: "solid",
      borderWidth: "1px",
      opacity: "0.5",
      renderOverlays: !0,
      zoomLevel: 4
    }
  },
  crossOrigin: "anonymous",
  ignoreCaptionLabels: [],
  informationPanel: {
    vtt: {
      autoScroll: {
        enabled: !0,
        settings: Me
      }
    },
    open: !0,
    renderAbout: !0,
    renderSupplementing: !0,
    renderToggle: !0,
    renderAnnotation: !0,
    renderContentSearch: !0
  },
  openSeadragon: {},
  requestHeaders: { "Content-Type": "application/json" },
  showDownload: !0,
  showIIIFBadge: !0,
  showTitle: !0,
  withCredentials: !1
}, _t = (e = N) => pe(e);
function pe(e) {
  return Array.isArray(e) ? e.map((t) => pe(t)) : e && typeof e == "object" ? Object.entries(e).reduce(
    (t, [o, n]) => (t[o] = pe(n), t),
    {}
  ) : e;
}
function Jt(e) {
  const o = (() => {
    var c, a;
    return ((a = (c = N == null ? void 0 : N.informationPanel) == null ? void 0 : c.vtt) == null ? void 0 : a.autoScroll) || {
      enabled: !0,
      settings: Me
    };
  })();
  if (e == null)
    return {
      enabled: o.enabled,
      settings: { ...o.settings }
    };
  if (typeof e == "boolean")
    return {
      enabled: e,
      settings: { ...o.settings }
    };
  if ("enabled" in e) {
    const r = e;
    return {
      enabled: r.enabled,
      settings: { ...r.settings }
    };
  }
  const i = {
    enabled: !0,
    settings: { ...e }
  };
  return Ut(i.settings), i;
}
function Ut({ behavior: e, block: t }) {
  const o = ["auto", "instant", "smooth"], n = ["center", "end", "nearest", "start"];
  if (!o.includes(e))
    throw TypeError(`'${e}' not in ${o.join(" | ")}`);
  if (!n.includes(t))
    throw TypeError(`'${t}' not in ${n.join(" | ")}`);
}
var Ie, Be;
const Kt = Jt(
  (Be = (Ie = N == null ? void 0 : N.informationPanel) == null ? void 0 : Ie.vtt) == null ? void 0 : Be.autoScroll
), Gt = () => {
  var e;
  return {
    activeCanvas: "",
    activeManifest: "",
    activePlayer: null,
    activeSelector: void 0,
    OSDImageLoaded: !1,
    collection: {},
    configOptions: _t(),
    customDisplays: [],
    plugins: [],
    isAudioVideo: !1,
    isAutoScrollEnabled: Kt.enabled,
    isAutoScrolling: !1,
    // Respect explicit false; default to true only when undefined
    isInformationOpen: ((e = N == null ? void 0 : N.informationPanel) == null ? void 0 : e.open) ?? !0,
    isLoaded: !1,
    isPaged: !1,
    isUserScrolling: void 0,
    manifest: void 0,
    paintingResources: [],
    annotationResources: [],
    contentSearchResource: void 0,
    searchServiceUrl: void 0,
    sequence: [[], []],
    vault: new Ue(),
    viewingDirection: "left-to-right",
    openSeadragonViewer: null,
    viewerId: Le(),
    visibleCanvases: [],
    visibleAnnotations: []
  };
}, ze = Gt(), Xt = g.createContext(ze), qt = g.createContext(ze);
function Ce() {
  const e = g.useContext(Xt);
  if (e === void 0)
    throw new Error("useViewerState must be used within a ViewerProvider");
  return e;
}
function Oe() {
  const e = g.useContext(qt);
  if (e === void 0)
    throw new Error("useViewerDispatch must be used within a ViewerProvider");
  return e;
}
const Yt = V("button", {
  display: "flex",
  height: "2rem",
  width: "2rem",
  borderRadius: "2rem",
  padding: "0",
  margin: "0",
  fontFamily: "inherit",
  background: "none",
  backgroundColor: "$primary",
  border: "none",
  color: "white",
  cursor: "pointer",
  marginLeft: "0.618rem",
  filter: "drop-shadow(2px 2px 5px #0003)",
  transition: "$all",
  boxSizing: "content-box !important",
  "&:first-child": {
    marginLeft: "0"
  },
  "@xs": {
    marginBottom: "0.618rem",
    marginLeft: "0",
    "&:last-child": {
      marginBottom: "0"
    }
  },
  svg: {
    height: "60%",
    width: "60%",
    padding: "20%",
    fill: "$secondary",
    stroke: "$secondary",
    filter: "drop-shadow(2px 2px 5px #0003)",
    transition: "$all",
    boxSizing: "inherit"
  },
  "&:hover, &:focus": {
    backgroundColor: "$accent"
  },
  "&[data-button=rotate-right]": {
    "&:hover, &:focus": {
      svg: {
        rotate: "45deg"
      }
    }
  },
  "&[data-button=rotate-left]": {
    transform: "scaleX(-1)",
    "&:hover, &:focus": {
      svg: {
        rotate: "45deg"
      }
    }
  },
  "&[data-button=reset]": {
    "&:hover, &:focus": {
      svg: {
        rotate: "-15deg"
      }
    }
  }
}), U = ({ className: e, id: t, label: o, children: n }) => {
  const r = t.split("-")[0].replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
  return /* @__PURE__ */ g.createElement(
    Yt,
    {
      id: t,
      className: e,
      "data-testid": "openseadragon-button",
      "data-button": r
    },
    /* @__PURE__ */ g.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "aria-labelledby": `${t}-svg-title`,
        "data-testid": "openseadragon-button-svg",
        focusable: "false",
        viewBox: "0 0 512 512",
        role: "img"
      },
      /* @__PURE__ */ g.createElement("title", { id: `${t}-svg-title` }, o),
      n
    )
  );
}, Qt = V("div", {
  position: "absolute",
  zIndex: "1",
  top: "1rem",
  right: "1rem",
  display: "flex",
  "@xs": {
    flexDirection: "column",
    zIndex: "2"
  },
  variants: {
    hasPlaceholder: {
      true: {
        right: "3.618rem",
        "@xs": {
          top: "3.618rem",
          right: "1rem"
        }
      },
      false: {
        right: "1rem",
        "@xs": {
          top: "1rem",
          right: "1rem"
        }
      }
    }
  }
}), eo = "Close", to = "Next", oo = "Open", no = "Previous", ro = "Search", io = "Search...", so = "Share", ao = "View All", co = "Failed", lo = "Copied", mo = "Loading...", uo = "Search", ho = "No Results", po = "More Results", go = "Full screen", fo = "Reset zoom", bo = "Rotate left", So = "Rotate right", yo = "Zoom in", $o = "Zoom out", vo = "Select", xo = "Viewer", wo = "About", Po = "Annotations", Co = "Search", Ro = "More Information", ko = "View Collection", To = "Copy Collection URL", Io = "View Manifest", Bo = "Copy Manifest URL", Ne = {
  commonClose: eo,
  commonNext: to,
  commonOpen: oo,
  commonPrevious: no,
  commonSearch: ro,
  commonSearchPlaceholder: io,
  commonShare: so,
  commonViewAll: ao,
  copyFailure: co,
  copySuccess: lo,
  contentSearchLoading: mo,
  contentSearchPlaceholder: uo,
  contentSearchResultsNone: ho,
  contentSearchResultsMore: po,
  imageFullScreen: go,
  imageResetZoom: fo,
  imageRotateLeft: bo,
  imageRotateRight: So,
  imageZoomIn: yo,
  imageZoomOut: $o,
  informationPanelTabs: vo,
  informationPanelTabsClose: xo,
  informationPanelTabsAbout: wo,
  informationPanelTabsAnnotations: Po,
  informationPanelTabsSearch: Co,
  informationPanelToggle: Ro,
  shareCollectionJson: ko,
  shareCollectionCopy: To,
  shareManifestJson: Io,
  shareManifestCopy: Bo
}, Ao = "Cerrar", Eo = "Siguiente", Lo = "Abrir", Mo = "Anterior", zo = "Buscar", Oo = "Buscar...", No = "Compartir", jo = "Ver todo", Vo = "Fallido", Wo = "Copiado", Fo = "Cargando...", Do = "Buscar", Ho = "Sin resultados", Zo = "Más resultados", _o = "Pantalla completa", Jo = "Restablecer zoom", Uo = "Girar a la izquierda", Ko = "Girar a la derecha", Go = "Acercar", Xo = "Alejar", qo = "Seleccionar", Yo = "Visor", Qo = "Acerca de", en = "Anotaciones", tn = "Buscar", on = "Más información", nn = "Ver colección", rn = "Copiar URL de la colección", sn = "Ver manifiesto", an = "Copiar URL del manifiesto", cn = {
  commonClose: Ao,
  commonNext: Eo,
  commonOpen: Lo,
  commonPrevious: Mo,
  commonSearch: zo,
  commonSearchPlaceholder: Oo,
  commonShare: No,
  commonViewAll: jo,
  copyFailure: Vo,
  copySuccess: Wo,
  contentSearchLoading: Fo,
  contentSearchPlaceholder: Do,
  contentSearchResultsNone: Ho,
  contentSearchResultsMore: Zo,
  imageFullScreen: _o,
  imageResetZoom: Jo,
  imageRotateLeft: Uo,
  imageRotateRight: Ko,
  imageZoomIn: Go,
  imageZoomOut: Xo,
  informationPanelTabs: qo,
  informationPanelTabsClose: Yo,
  informationPanelTabsAbout: Qo,
  informationPanelTabsAnnotations: en,
  informationPanelTabsSearch: tn,
  informationPanelToggle: on,
  shareCollectionJson: nn,
  shareCollectionCopy: rn,
  shareManifestJson: sn,
  shareManifestCopy: an
}, ln = "Sulje", dn = "Seuraava", mn = "Edellinen", un = "Hae", hn = "Hae...", pn = "Jaa", gn = "Näytä kaikki", fn = "Kopiointi epäonnistui", bn = "Kopioitu", Sn = "Ladataan...", yn = "Haku", $n = "Ei osumia", vn = "Lisää osumia", xn = "Valitse", wn = "Katselu", Pn = "Tiedot", Cn = "Annotaatiot", Rn = "Haku", kn = "Lisätiedot", Tn = "Näytä kokoelma", In = "Kopioi kokoelman osoite", Bn = "Näytä manifesti", An = "Kopioi manifestin osoite", En = {
  commonClose: ln,
  commonNext: dn,
  commonPrevious: mn,
  commonSearch: un,
  commonSearchPlaceholder: hn,
  commonShare: pn,
  commonViewAll: gn,
  copyFailure: fn,
  copySuccess: bn,
  contentSearchLoading: Sn,
  contentSearchPlaceholder: yn,
  contentSearchResultsNone: $n,
  contentSearchResultsMore: vn,
  informationPanelTabs: xn,
  informationPanelTabsClose: wn,
  informationPanelTabsAbout: Pn,
  informationPanelTabsAnnotations: Cn,
  informationPanelTabsSearch: Rn,
  informationPanelToggle: kn,
  shareCollectionJson: Tn,
  shareCollectionCopy: In,
  shareManifestJson: Bn,
  shareManifestCopy: An
}, Ln = "Fermer", Mn = "Suivant", zn = "Ouvrir", On = "Précédent", Nn = "Rechercher", jn = "Rechercher…", Vn = "Partager", Wn = "Tout afficher", Fn = "Échec", Dn = "Copié", Hn = "Chargement…", Zn = "Rechercher", _n = "Aucun résultat", Jn = "Plus de résultats", Un = "Plein écran", Kn = "Réinitialiser le zoom", Gn = "Rotation à gauche", Xn = "Rotation à droite", qn = "Zoom avant", Yn = "Zoom arrière", Qn = "Sélectionner", er = "Visionneuse", tr = "À propos", or = "Annotations", nr = "Recherche", rr = "Plus d’informations", ir = "Afficher la collection", sr = "Copier l’URL de la collection", ar = "Afficher le manifeste", cr = "Copier l’URL du manifeste", lr = {
  commonClose: Ln,
  commonNext: Mn,
  commonOpen: zn,
  commonPrevious: On,
  commonSearch: Nn,
  commonSearchPlaceholder: jn,
  commonShare: Vn,
  commonViewAll: Wn,
  copyFailure: Fn,
  copySuccess: Dn,
  contentSearchLoading: Hn,
  contentSearchPlaceholder: Zn,
  contentSearchResultsNone: _n,
  contentSearchResultsMore: Jn,
  imageFullScreen: Un,
  imageResetZoom: Kn,
  imageRotateLeft: Gn,
  imageRotateRight: Xn,
  imageZoomIn: qn,
  imageZoomOut: Yn,
  informationPanelTabs: Qn,
  informationPanelTabsClose: er,
  informationPanelTabsAbout: tr,
  informationPanelTabsAnnotations: or,
  informationPanelTabsSearch: nr,
  informationPanelToggle: rr,
  shareCollectionJson: ir,
  shareCollectionCopy: sr,
  shareManifestJson: ar,
  shareManifestCopy: cr
}, dr = "Lukk", mr = "Neste", ur = "Forrige", hr = "Søk", pr = "Søk...", gr = "Del", fr = "Se alle", br = "Feilet", Sr = "Kopiert", yr = "Laster inn...", $r = "Søk", vr = "Ingen resultat", xr = "Flere resultat", wr = "Velg", Pr = "Viewer", Cr = "Om", Rr = "Annoteringer", kr = "Søk", Tr = "Mer informasjon", Ir = "Se samlingen", Br = "Kopiér samlingens URL", Ar = "Se manifestet", Er = "Kopiér manifestets URL", Lr = {
  commonClose: dr,
  commonNext: mr,
  commonPrevious: ur,
  commonSearch: hr,
  commonSearchPlaceholder: pr,
  commonShare: gr,
  commonViewAll: fr,
  copyFailure: br,
  copySuccess: Sr,
  contentSearchLoading: yr,
  contentSearchPlaceholder: $r,
  contentSearchResultsNone: vr,
  contentSearchResultsMore: xr,
  informationPanelTabs: wr,
  informationPanelTabsClose: Pr,
  informationPanelTabsAbout: Cr,
  informationPanelTabsAnnotations: Rr,
  informationPanelTabsSearch: kr,
  informationPanelToggle: Tr,
  shareCollectionJson: Ir,
  shareCollectionCopy: Br,
  shareManifestJson: Ar,
  shareManifestCopy: Er
}, Mr = "Lukk", zr = "Neste", Or = "Førre", Nr = "Søk", jr = "Søk...", Vr = "Del", Wr = "Sjå alle", Fr = "Feila", Dr = "Kopiert", Hr = "Laster inn...", Zr = "Søk", _r = "Ingen resultat", Jr = "Fleire resultat", Ur = "Vel", Kr = "Viewer", Gr = "Om", Xr = "Annoteringa", qr = "Søk", Yr = "Meir informasjon", Qr = "Sjå samlinga", ei = "Kopiér samlingas URL", ti = "Sjå manifestet", oi = "Kopiér manifestets URL", ni = {
  commonClose: Mr,
  commonNext: zr,
  commonPrevious: Or,
  commonSearch: Nr,
  commonSearchPlaceholder: jr,
  commonShare: Vr,
  commonViewAll: Wr,
  copyFailure: Fr,
  copySuccess: Dr,
  contentSearchLoading: Hr,
  contentSearchPlaceholder: Zr,
  contentSearchResultsNone: _r,
  contentSearchResultsMore: Jr,
  informationPanelTabs: Ur,
  informationPanelTabsClose: Kr,
  informationPanelTabsAbout: Gr,
  informationPanelTabsAnnotations: Xr,
  informationPanelTabsSearch: qr,
  informationPanelToggle: Yr,
  shareCollectionJson: Qr,
  shareCollectionCopy: ei,
  shareManifestJson: ti,
  shareManifestCopy: oi
}, ri = "Lukk", ii = "Neste", si = "Forrige", ai = "Søk", ci = "Søk...", li = "Del", di = "Se alle", mi = "Feilet", ui = "Kopiert", hi = "Laster inn...", pi = "Søk", gi = "Ingen resultat", fi = "Flere resultat", bi = "Velg", Si = "Viewer", yi = "Om", $i = "Annoteringer", vi = "Søk", xi = "Mer informasjon", wi = "Se samlingen", Pi = "Kopiér samlingens URL", Ci = "Se manifestet", Ri = "Kopiér manifestets URL", ki = {
  commonClose: ri,
  commonNext: ii,
  commonPrevious: si,
  commonSearch: ai,
  commonSearchPlaceholder: ci,
  commonShare: li,
  commonViewAll: di,
  copyFailure: mi,
  copySuccess: ui,
  contentSearchLoading: hi,
  contentSearchPlaceholder: pi,
  contentSearchResultsNone: gi,
  contentSearchResultsMore: fi,
  informationPanelTabs: bi,
  informationPanelTabsClose: Si,
  informationPanelTabsAbout: yi,
  informationPanelTabsAnnotations: $i,
  informationPanelTabsSearch: vi,
  informationPanelToggle: xi,
  shareCollectionJson: wi,
  shareCollectionCopy: Pi,
  shareManifestJson: Ci,
  shareManifestCopy: Ri
}, Ti = {}, Ii = {
  en: Ne,
  es: cn,
  fi: En,
  fr: lr,
  nb: Lr,
  nn: ni,
  no: ki,
  pt: Ti
}, ce = "clover", Bi = Object.fromEntries(
  Object.entries(Ii).map(([e, t]) => [
    e,
    { [ce]: t }
  ])
), te = {
  defaultNS: ce,
  fallbackLng: "en",
  ns: [ce],
  resources: { ...Bi }
}, Ai = (e, t) => ({
  ...e || {},
  ...t || {}
});
let Re = !1;
function Ei(e) {
  if (e) {
    for (const [t, o] of Object.entries(e))
      if (o)
        for (const [n, i] of Object.entries(o))
          i && ne.addResourceBundle(t, n, i, !0, !0);
  }
}
function Li(e = {}) {
  if (Re)
    Ei(e.resources), e.lng && ne.changeLanguage(e.lng), e.fallbackLng && (ne.options.fallbackLng = e.fallbackLng);
  else {
    const t = Ai(te.resources, e.resources);
    ne.use(Xe).use(Ke).init({
      ...te,
      ...e,
      resources: t,
      // Preserve our namespace defaults unless explicitly overridden.
      ns: e.ns ?? te.ns,
      defaultNS: e.defaultNS ?? te.defaultNS,
      fallbackLng: e.fallbackLng ?? te.fallbackLng
    }), Re = !0;
  }
  return ne;
}
Li();
const Mi = Ne;
function zi(e) {
  return Mi[e] ?? e;
}
function Oi(e = ce) {
  const t = Ge(e), { t: o } = t, n = _e(
    (i, r) => {
      const c = o(i, r);
      return typeof c != "string" || c === i ? zi(i) : c;
    },
    [o]
  );
  return {
    ...t,
    t: n
  };
}
const Ni = () => /* @__PURE__ */ g.createElement(
  "path",
  {
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "45",
    d: "M256 112v288M400 256H112"
  }
), ji = () => /* @__PURE__ */ g.createElement(
  "path",
  {
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "45",
    d: "M400 256H112"
  }
), Vi = () => /* @__PURE__ */ g.createElement(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
  }
), Wi = () => /* @__PURE__ */ g.createElement("path", { d: "M448 440a16 16 0 01-12.61-6.15c-22.86-29.27-44.07-51.86-73.32-67C335 352.88 301 345.59 256 344.23V424a16 16 0 01-27 11.57l-176-168a16 16 0 010-23.14l176-168A16 16 0 01256 88v80.36c74.14 3.41 129.38 30.91 164.35 81.87C449.32 292.44 464 350.9 464 424a16 16 0 01-16 16z" }), ke = () => /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(
  "path",
  {
    fill: "none",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "45",
    d: "M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"
  }
), /* @__PURE__ */ g.createElement("path", { d: "M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z" })), Fi = ({
  _cloverViewerHasPlaceholder: e,
  config: t
}) => {
  const { t: o } = Oi(), n = Ce(), { activeCanvas: i, plugins: r, vault: c, openSeadragonViewer: a } = n, l = c.get({
    id: i,
    type: "Canvas"
  });
  function u() {
    return r.filter((h) => {
      var s;
      return (s = h.imageViewer) == null ? void 0 : s.controls;
    }).map((h, s) => {
      var p, S, v, R;
      const d = (S = (p = h.imageViewer) == null ? void 0 : p.controls) == null ? void 0 : S.component;
      return /* @__PURE__ */ g.createElement(
        d,
        {
          key: s,
          ...(R = (v = h == null ? void 0 : h.imageViewer) == null ? void 0 : v.controls) == null ? void 0 : R.componentProps,
          canvas: l,
          useViewerDispatch: Oe,
          useViewerState: Ce
        }
      );
    });
  }
  return F(() => {
    if (!a) return;
    const h = a.viewport.getRotation();
    a.addHandler("home", () => {
      a.viewport.setRotation(h);
    });
  }, [a]), /* @__PURE__ */ g.createElement(
    Qt,
    {
      "data-testid": "clover-iiif-image-openseadragon-controls",
      hasPlaceholder: e
    },
    t.showZoomControl && /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(U, { id: t.zoomInButton, label: o("imageZoomIn") }, /* @__PURE__ */ g.createElement(Ni, null)), /* @__PURE__ */ g.createElement(U, { id: t.zoomOutButton, label: o("imageZoomOut") }, /* @__PURE__ */ g.createElement(ji, null))),
    t.showFullPageControl && /* @__PURE__ */ g.createElement(
      U,
      {
        id: t.fullPageButton,
        label: o("imageFullScreen")
      },
      /* @__PURE__ */ g.createElement(Vi, null)
    ),
    t.showRotationControl && /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(
      U,
      {
        id: t.rotateRightButton,
        label: o("imageRotateRight")
      },
      /* @__PURE__ */ g.createElement(ke, null)
    ), /* @__PURE__ */ g.createElement(
      U,
      {
        id: t.rotateLeftButton,
        label: o("imageRotateLeft")
      },
      /* @__PURE__ */ g.createElement(ke, null)
    )),
    t.showHomeControl && /* @__PURE__ */ g.createElement(U, { id: t.homeButton, label: o("imageResetZoom") }, /* @__PURE__ */ g.createElement(Wi, null)),
    u()
  );
};
async function je(e, t = 3, o = 500) {
  try {
    return await e();
  } catch (n) {
    if (t <= 0) throw n;
    return await new Promise((i) => setTimeout(i, o)), je(e, t - 1, o);
  }
}
const Di = (e) => new Promise((t) => setTimeout(t, e)), Te = async (e, t, o = 3, n = 300) => {
  for (let i = 0; i < o; i++) {
    const r = t ? t - 1 : 0, c = e.getItemAt(r);
    if (c) return c;
    await Di(n);
  }
  throw new Error("No base item found at index 0 after retries");
}, Hi = ({
  annotations: e,
  ariaLabel: t,
  config: o,
  uri: n,
  _cloverViewerHasPlaceholder: i,
  imageType: r,
  openSeadragonCallback: c
}) => {
  const [a, l] = se([]), [u, h] = se([]), [s, d] = se(), [p, S] = se([]), v = Oe(), R = Je(!1), b = "clover-iiif-image-openseadragon-annotation", x = o.gestureSettingsMouse.scrollToZoom === !1;
  F(() => (R.current || (R.current = !0, s || d(oe(o))), () => s == null ? void 0 : s.destroy()), []), F(() => {
    _();
  }, [s, c]), F(() => {
    s && JSON.stringify(n) !== JSON.stringify(u) && (s.forceRedraw(), x && s.addHandler("canvas-scroll", function(A) {
      A.preventDefault = !1;
    }), h(n));
  }, [x, s, u, n]), F(() => {
    if (!u.length || !s) return;
    s.close(), (async () => {
      switch (r) {
        case "simpleImage":
          let I = 1, y = 0;
          for (let $ = 0; $ < u.length; $++) {
            const P = u[$];
            if (e) {
              const f = new Image();
              f.src = P, await f.decode(), S((w) => [
                ...w,
                { width: f == null ? void 0 : f.width, height: f == null ? void 0 : f.height }
              ]);
            }
            try {
              if ($ !== 0) {
                const w = (await Te(
                  s.world,
                  $
                )).getBounds();
                y = w.x + w.width, I = w.height;
              }
              s.addSimpleImage({
                url: P,
                x: y,
                y: 0,
                height: I,
                success: () => {
                  l((f) => [...f, P]), typeof v == "function" && v({
                    type: "updateOSDImageLoaded",
                    OSDImageLoaded: !0
                  });
                }
              });
            } catch (f) {
              console.error(`Failed to load image at ${P}:`, f);
            }
          }
          break;
        case "tiledImage": {
          let $ = 1, P = 0;
          for (let f = 0; f < u.length; f++) {
            const w = u[f];
            try {
              const T = await je(
                () => Ye(w),
                3,
                1e3
              );
              if (!T) throw new Error(`No tile source for ${w}`);
              if (f !== 0) {
                const O = (await Te(
                  s.world,
                  f
                )).getBounds();
                P = O.x + O.width, $ = O.height;
              }
              s.addTiledImage({
                tileSource: T,
                x: P,
                y: 0,
                height: $,
                success: () => {
                  l((M) => [...M, w]), typeof v == "function" && v({
                    type: "updateOSDImageLoaded",
                    OSDImageLoaded: !0
                  });
                }
              });
            } catch (T) {
              console.error(`Failed to load tile at ${w}:`, T);
            }
          }
          break;
        }
        default:
          console.warn(`Unsupported imageType: "${r}"`);
          break;
      }
    })().catch((I) => console.error("Error drawing tiles", I));
  }, [u, r, s]), F(() => {
    if (a) {
      let I = 0;
      const y = () => {
        if (I < 3) {
          const $ = s == null ? void 0 : s.world.getHomeBounds();
          $ && (s == null || s.viewport.fitBounds($, !0)), I++, setTimeout(y, 50);
        }
      };
      y(), s == null || s.addHandler("canvas-click", ($) => {
        const P = s == null ? void 0 : s.getOverlayById(
          $.originalTarget.id
        );
        if (P) {
          const f = P == null ? void 0 : P.getBounds(s.viewport);
          return f.x -= 0.1, f.y -= 0.1, f.width += 0.2, f.height += 0.2, s == null || s.viewport.fitBounds(f, !1), $.preventDefaultAction = !0;
        }
      });
    }
  }, [a]), F(() => {
    function A(I, y, $) {
      let P = I * $;
      if (y === 0) return P;
      for (; y > 0; ) {
        const f = s == null ? void 0 : s.world.getItemAt(y - 1);
        if (f) {
          const w = f.getBounds().width;
          P += w, y--;
        } else
          break;
      }
      return P;
    }
    e && (s == null || s.clearOverlays(), e.forEach((I) => {
      var O, W, X, ie;
      const { annotation: y, targetIndex: $ } = I, P = ((W = (O = s == null ? void 0 : s.viewport) == null ? void 0 : O.getBounds()) == null ? void 0 : W.width) || 1, f = s == null ? void 0 : s.world.getItemAt($), w = f ? (f == null ? void 0 : f.getBounds().width) / (f == null ? void 0 : f.getContentSize().x) : ((X = p[$]) == null ? void 0 : X.width) / P, T = qe(
        y == null ? void 0 : y.target
      ), M = y != null && y.body ? (ie = y == null ? void 0 : y.body[0]) == null ? void 0 : ie.value : void 0;
      if (T != null && T.rect) {
        const { x: q, y: Y, w: Ve, h: We } = T == null ? void 0 : T.rect, Fe = A(q, $, w), Q = new oe.Rect(
          Fe,
          Y * w,
          Ve * w,
          We * w
        ), k = document.createElement("button");
        if (k.classList.add(b), k.id = y.id, k.setAttribute("tabindex", "0"), k.setAttribute("role", "button"), k.setAttribute("data-active", "true"), k.setAttribute("tabindex", "0"), k.setAttribute("role", "button"), k.setAttribute("data-active", "false"), M) {
          k.setAttribute("aria-label", M);
          const E = document.createElement("label");
          E.innerHTML = M, k.appendChild(E);
        }
        k.addEventListener("mousedown", (E) => {
          E.stopPropagation(), E.preventDefault();
        }), k.addEventListener("touchstart", (E) => {
          E.stopPropagation(), E.preventDefault();
        }), k.addEventListener("click", (E) => {
          E.stopPropagation(), E.preventDefault();
        }), k.addEventListener("keydown", (E) => {
          if (E.key === "Enter") {
            E.stopPropagation(), E.preventDefault();
            const De = new oe.Rect(
              Q.x - 0.1,
              Q.y - 0.1,
              Q.width + 0.2,
              Q.height + 0.2
            );
            s == null || s.viewport.fitBounds(De, !1);
          }
        }), k.addEventListener("focus", () => {
          k.setAttribute("data-active", "true");
        }), k.addEventListener("mouseover", () => {
          k.setAttribute("data-active", "true");
        }), k.addEventListener("mouseout", () => {
          k.removeAttribute("data-active");
        }), k.addEventListener("blur", () => {
          k.removeAttribute("data-active");
        }), s == null || s.addOverlay(k, Q, oe.Placement.CENTER);
      }
    }), _());
  }, [a, e]);
  function _() {
    s && (c == null || c(s));
  }
  return /* @__PURE__ */ g.createElement(
    Wt,
    {
      className: "clover-iiif-image-openseadragon",
      "data-testid": "clover-iiif-image-openseadragon",
      "data-openseadragon-instance": o.id,
      hasNavigator: o.showNavigator
    },
    /* @__PURE__ */ g.createElement(
      Fi,
      {
        _cloverViewerHasPlaceholder: i,
        config: o
      }
    ),
    o.showNavigator && /* @__PURE__ */ g.createElement(
      he,
      {
        id: o.navigatorId,
        "data-testid": "clover-iiif-image-openseadragon-navigator"
      }
    ),
    /* @__PURE__ */ g.createElement(
      Vt,
      {
        id: o.id,
        "data-testid": "clover-iiif-image-openseadragon-viewport",
        role: "img",
        ...t && { "aria-label": t }
      }
    )
  );
};
function Zi(e) {
  return {
    id: `openseadragon-${e}`,
    navigatorId: `openseadragon-navigator-${e}`,
    loadTilesWithAjax: !0,
    fullPageButton: `fullPage-${e}`,
    homeButton: `reset-${e}`,
    rotateLeftButton: `rotateLeft-${e}`,
    rotateRightButton: `rotateRight-${e}`,
    zoomInButton: `zoomIn-${e}`,
    zoomOutButton: `zoomOut-${e}`,
    showNavigator: !0,
    showFullPageControl: !0,
    showHomeControl: !0,
    showRotationControl: !0,
    showZoomControl: !0,
    navigatorBorderColor: "transparent",
    gestureSettingsMouse: {
      clickToZoom: !0,
      dblClickToZoom: !0,
      pinchToZoom: !0,
      scrollToZoom: !1
    }
  };
}
const _i = (e, t = "none") => {
  if (!e) return null;
  if (typeof e == "string") return [e];
  if (!e[t]) {
    const o = Object.getOwnPropertyNames(e);
    if (o.length > 0) return e[o[0]];
  }
  return !e[t] || !Array.isArray(e[t]) ? null : e[t];
}, Ji = (e, t = "none", o = ", ") => {
  const n = _i(e, t);
  return Array.isArray(n) ? n.join(`${o}`) : n;
}, rs = ({
  _cloverViewerHasPlaceholder: e = !1,
  annotations: t,
  body: o,
  instanceId: n,
  isTiledImage: i = !1,
  label: r,
  src: c = "",
  openSeadragonCallback: a,
  openSeadragonConfig: l = {}
}) => {
  const u = n ?? Le(), h = typeof r == "string" ? r : Ji(r), s = {
    ...Zi(u),
    ...l
  }, d = Array.isArray(o) ? o : o ? [o] : [], p = Array.isArray(c) ? c : c ? [c] : [];
  let S = [], v = z.SimpleImage;
  if (d.length) {
    const b = d.map(et);
    S = b.map((x) => x.uri).filter(Boolean), v = b.some(
      (x) => x.imageType === z.TiledImage
    ) ? z.TiledImage : z.SimpleImage;
  } else if (p.length) {
    const b = p.map((x) => tt(x, i));
    S = b.map((x) => x.uri).filter(Boolean), v = b.some(
      (x) => x.imageType === z.TiledImage
    ) ? z.TiledImage : z.SimpleImage;
  }
  if (!S.length) return null;
  const R = (b) => {
    a == null || a(b);
  };
  return /* @__PURE__ */ g.createElement(nt, { FallbackComponent: jt }, /* @__PURE__ */ g.createElement(
    Hi,
    {
      _cloverViewerHasPlaceholder: e,
      annotations: t,
      ariaLabel: h,
      config: s,
      imageType: v,
      key: u,
      uri: S,
      openSeadragonCallback: R
    }
  ));
};
export {
  rs as default
};
