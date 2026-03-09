"use client";
import l from "i18next-browser-languagedetector";
import t from "i18next";
import { initReactI18next as m } from "react-i18next";
const h = "Close", f = "Next", S = "Open", u = "Previous", $ = "Search", P = "Search...", g = "Share", C = "View All", b = "Failed", p = "Copied", T = "Loading...", R = "Search", d = "No Results", y = "More Results", A = "Full screen", L = "Reset zoom", M = "Rotate left", N = "Rotate right", k = "Zoom in", F = "Zoom out", V = "Select", J = "Viewer", O = "About", v = "Annotations", Z = "Search", w = "More Information", x = "View Collection", K = "Copy Collection URL", I = "View Manifest", j = "Copy Manifest URL", U = {
  commonClose: h,
  commonNext: f,
  commonOpen: S,
  commonPrevious: u,
  commonSearch: $,
  commonSearchPlaceholder: P,
  commonShare: g,
  commonViewAll: C,
  copyFailure: b,
  copySuccess: p,
  contentSearchLoading: T,
  contentSearchPlaceholder: R,
  contentSearchResultsNone: d,
  contentSearchResultsMore: y,
  imageFullScreen: A,
  imageResetZoom: L,
  imageRotateLeft: M,
  imageRotateRight: N,
  imageZoomIn: k,
  imageZoomOut: F,
  informationPanelTabs: V,
  informationPanelTabsClose: J,
  informationPanelTabsAbout: O,
  informationPanelTabsAnnotations: v,
  informationPanelTabsSearch: Z,
  informationPanelToggle: w,
  shareCollectionJson: x,
  shareCollectionCopy: K,
  shareManifestJson: I,
  shareManifestCopy: j
}, E = "Cerrar", z = "Siguiente", B = "Abrir", H = "Anterior", D = "Buscar", G = "Buscar...", _ = "Compartir", q = "Ver todo", Q = "Fallido", W = "Copiado", X = "Cargando...", Y = "Buscar", oo = "Sin resultados", no = "Más resultados", eo = "Pantalla completa", to = "Restablecer zoom", ao = "Girar a la izquierda", co = "Girar a la derecha", so = "Acercar", io = "Alejar", ro = "Seleccionar", lo = "Visor", mo = "Acerca de", ho = "Anotaciones", fo = "Buscar", So = "Más información", uo = "Ver colección", $o = "Copiar URL de la colección", Po = "Ver manifiesto", go = "Copiar URL del manifiesto", Co = {
  commonClose: E,
  commonNext: z,
  commonOpen: B,
  commonPrevious: H,
  commonSearch: D,
  commonSearchPlaceholder: G,
  commonShare: _,
  commonViewAll: q,
  copyFailure: Q,
  copySuccess: W,
  contentSearchLoading: X,
  contentSearchPlaceholder: Y,
  contentSearchResultsNone: oo,
  contentSearchResultsMore: no,
  imageFullScreen: eo,
  imageResetZoom: to,
  imageRotateLeft: ao,
  imageRotateRight: co,
  imageZoomIn: so,
  imageZoomOut: io,
  informationPanelTabs: ro,
  informationPanelTabsClose: lo,
  informationPanelTabsAbout: mo,
  informationPanelTabsAnnotations: ho,
  informationPanelTabsSearch: fo,
  informationPanelToggle: So,
  shareCollectionJson: uo,
  shareCollectionCopy: $o,
  shareManifestJson: Po,
  shareManifestCopy: go
}, bo = "Sulje", po = "Seuraava", To = "Edellinen", Ro = "Hae", yo = "Hae...", Ao = "Jaa", Lo = "Näytä kaikki", Mo = "Kopiointi epäonnistui", No = "Kopioitu", ko = "Ladataan...", Fo = "Haku", Vo = "Ei osumia", Jo = "Lisää osumia", Oo = "Valitse", vo = "Katselu", Zo = "Tiedot", wo = "Annotaatiot", xo = "Haku", Ko = "Lisätiedot", Io = "Näytä kokoelma", jo = "Kopioi kokoelman osoite", Uo = "Näytä manifesti", Eo = "Kopioi manifestin osoite", zo = {
  commonClose: bo,
  commonNext: po,
  commonPrevious: To,
  commonSearch: Ro,
  commonSearchPlaceholder: yo,
  commonShare: Ao,
  commonViewAll: Lo,
  copyFailure: Mo,
  copySuccess: No,
  contentSearchLoading: ko,
  contentSearchPlaceholder: Fo,
  contentSearchResultsNone: Vo,
  contentSearchResultsMore: Jo,
  informationPanelTabs: Oo,
  informationPanelTabsClose: vo,
  informationPanelTabsAbout: Zo,
  informationPanelTabsAnnotations: wo,
  informationPanelTabsSearch: xo,
  informationPanelToggle: Ko,
  shareCollectionJson: Io,
  shareCollectionCopy: jo,
  shareManifestJson: Uo,
  shareManifestCopy: Eo
}, Bo = "Fermer", Ho = "Suivant", Do = "Ouvrir", Go = "Précédent", _o = "Rechercher", qo = "Rechercher…", Qo = "Partager", Wo = "Tout afficher", Xo = "Échec", Yo = "Copié", on = "Chargement…", nn = "Rechercher", en = "Aucun résultat", tn = "Plus de résultats", an = "Plein écran", cn = "Réinitialiser le zoom", sn = "Rotation à gauche", rn = "Rotation à droite", ln = "Zoom avant", mn = "Zoom arrière", hn = "Sélectionner", fn = "Visionneuse", Sn = "À propos", un = "Annotations", $n = "Recherche", Pn = "Plus d’informations", gn = "Afficher la collection", Cn = "Copier l’URL de la collection", bn = "Afficher le manifeste", pn = "Copier l’URL du manifeste", Tn = {
  commonClose: Bo,
  commonNext: Ho,
  commonOpen: Do,
  commonPrevious: Go,
  commonSearch: _o,
  commonSearchPlaceholder: qo,
  commonShare: Qo,
  commonViewAll: Wo,
  copyFailure: Xo,
  copySuccess: Yo,
  contentSearchLoading: on,
  contentSearchPlaceholder: nn,
  contentSearchResultsNone: en,
  contentSearchResultsMore: tn,
  imageFullScreen: an,
  imageResetZoom: cn,
  imageRotateLeft: sn,
  imageRotateRight: rn,
  imageZoomIn: ln,
  imageZoomOut: mn,
  informationPanelTabs: hn,
  informationPanelTabsClose: fn,
  informationPanelTabsAbout: Sn,
  informationPanelTabsAnnotations: un,
  informationPanelTabsSearch: $n,
  informationPanelToggle: Pn,
  shareCollectionJson: gn,
  shareCollectionCopy: Cn,
  shareManifestJson: bn,
  shareManifestCopy: pn
}, Rn = "Lukk", dn = "Neste", yn = "Forrige", An = "Søk", Ln = "Søk...", Mn = "Del", Nn = "Se alle", kn = "Feilet", Fn = "Kopiert", Vn = "Laster inn...", Jn = "Søk", On = "Ingen resultat", vn = "Flere resultat", Zn = "Velg", wn = "Viewer", xn = "Om", Kn = "Annoteringer", In = "Søk", jn = "Mer informasjon", Un = "Se samlingen", En = "Kopiér samlingens URL", zn = "Se manifestet", Bn = "Kopiér manifestets URL", Hn = {
  commonClose: Rn,
  commonNext: dn,
  commonPrevious: yn,
  commonSearch: An,
  commonSearchPlaceholder: Ln,
  commonShare: Mn,
  commonViewAll: Nn,
  copyFailure: kn,
  copySuccess: Fn,
  contentSearchLoading: Vn,
  contentSearchPlaceholder: Jn,
  contentSearchResultsNone: On,
  contentSearchResultsMore: vn,
  informationPanelTabs: Zn,
  informationPanelTabsClose: wn,
  informationPanelTabsAbout: xn,
  informationPanelTabsAnnotations: Kn,
  informationPanelTabsSearch: In,
  informationPanelToggle: jn,
  shareCollectionJson: Un,
  shareCollectionCopy: En,
  shareManifestJson: zn,
  shareManifestCopy: Bn
}, Dn = "Lukk", Gn = "Neste", _n = "Førre", qn = "Søk", Qn = "Søk...", Wn = "Del", Xn = "Sjå alle", Yn = "Feila", oe = "Kopiert", ne = "Laster inn...", ee = "Søk", te = "Ingen resultat", ae = "Fleire resultat", ce = "Vel", se = "Viewer", ie = "Om", re = "Annoteringa", le = "Søk", me = "Meir informasjon", he = "Sjå samlinga", fe = "Kopiér samlingas URL", Se = "Sjå manifestet", ue = "Kopiér manifestets URL", $e = {
  commonClose: Dn,
  commonNext: Gn,
  commonPrevious: _n,
  commonSearch: qn,
  commonSearchPlaceholder: Qn,
  commonShare: Wn,
  commonViewAll: Xn,
  copyFailure: Yn,
  copySuccess: oe,
  contentSearchLoading: ne,
  contentSearchPlaceholder: ee,
  contentSearchResultsNone: te,
  contentSearchResultsMore: ae,
  informationPanelTabs: ce,
  informationPanelTabsClose: se,
  informationPanelTabsAbout: ie,
  informationPanelTabsAnnotations: re,
  informationPanelTabsSearch: le,
  informationPanelToggle: me,
  shareCollectionJson: he,
  shareCollectionCopy: fe,
  shareManifestJson: Se,
  shareManifestCopy: ue
}, Pe = "Lukk", ge = "Neste", Ce = "Forrige", be = "Søk", pe = "Søk...", Te = "Del", Re = "Se alle", de = "Feilet", ye = "Kopiert", Ae = "Laster inn...", Le = "Søk", Me = "Ingen resultat", Ne = "Flere resultat", ke = "Velg", Fe = "Viewer", Ve = "Om", Je = "Annoteringer", Oe = "Søk", ve = "Mer informasjon", Ze = "Se samlingen", we = "Kopiér samlingens URL", xe = "Se manifestet", Ke = "Kopiér manifestets URL", Ie = {
  commonClose: Pe,
  commonNext: ge,
  commonPrevious: Ce,
  commonSearch: be,
  commonSearchPlaceholder: pe,
  commonShare: Te,
  commonViewAll: Re,
  copyFailure: de,
  copySuccess: ye,
  contentSearchLoading: Ae,
  contentSearchPlaceholder: Le,
  contentSearchResultsNone: Me,
  contentSearchResultsMore: Ne,
  informationPanelTabs: ke,
  informationPanelTabsClose: Fe,
  informationPanelTabsAbout: Ve,
  informationPanelTabsAnnotations: Je,
  informationPanelTabsSearch: Oe,
  informationPanelToggle: ve,
  shareCollectionJson: Ze,
  shareCollectionCopy: we,
  shareManifestJson: xe,
  shareManifestCopy: Ke
}, je = {}, Ue = {
  en: U,
  es: Co,
  fi: zo,
  fr: Tn,
  nb: Hn,
  nn: $e,
  no: Ie,
  pt: je
}, a = "clover", Ee = Object.fromEntries(
  Object.entries(Ue).map(([o, n]) => [
    o,
    { [a]: n }
  ])
), e = {
  defaultNS: a,
  fallbackLng: "en",
  ns: [a],
  resources: { ...Ee }
}, ze = (o, n) => ({
  ...o || {},
  ...n || {}
});
let i = !1;
function Be(o) {
  if (o) {
    for (const [n, c] of Object.entries(o))
      if (c)
        for (const [r, s] of Object.entries(c))
          s && t.addResourceBundle(n, r, s, !0, !0);
  }
}
function He(o = {}) {
  if (i)
    Be(o.resources), o.lng && t.changeLanguage(o.lng), o.fallbackLng && (t.options.fallbackLng = o.fallbackLng);
  else {
    const n = ze(e.resources, o.resources);
    t.use(l).use(m).init({
      ...e,
      ...o,
      resources: n,
      // Preserve our namespace defaults unless explicitly overridden.
      ns: o.ns ?? e.ns,
      defaultNS: o.defaultNS ?? e.defaultNS,
      fallbackLng: o.fallbackLng ?? e.fallbackLng
    }), i = !0;
  }
  return t;
}
He();
export {
  a as CLOVER_I18N_NAMESPACE,
  He as initCloverI18n
};
