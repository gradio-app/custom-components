const {
  SvelteComponent: mt,
  assign: bt,
  create_slot: gt,
  detach: ht,
  element: pt,
  get_all_dirty_from_scope: wt,
  get_slot_changes: kt,
  get_spread_update: vt,
  init: yt,
  insert: qt,
  safe_not_equal: Ft,
  set_dynamic_element_data: Ve,
  set_style: N,
  toggle_class: I,
  transition_in: lt,
  transition_out: nt,
  update_slot_base: Ct
} = window.__gradio__svelte__internal;
function Lt(n) {
  let e, t, l;
  const i = (
    /*#slots*/
    n[17].default
  ), s = gt(
    i,
    n,
    /*$$scope*/
    n[16],
    null
  );
  let f = [
    { "data-testid": (
      /*test_id*/
      n[7]
    ) },
    { id: (
      /*elem_id*/
      n[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      n[3].join(" ") + " svelte-1t38q2d"
    }
  ], o = {};
  for (let _ = 0; _ < f.length; _ += 1)
    o = bt(o, f[_]);
  return {
    c() {
      e = pt(
        /*tag*/
        n[14]
      ), s && s.c(), Ve(
        /*tag*/
        n[14]
      )(e, o), I(
        e,
        "hidden",
        /*visible*/
        n[10] === !1
      ), I(
        e,
        "padded",
        /*padding*/
        n[6]
      ), I(
        e,
        "border_focus",
        /*border_mode*/
        n[5] === "focus"
      ), I(e, "hide-container", !/*explicit_call*/
      n[8] && !/*container*/
      n[9]), N(e, "height", typeof /*height*/
      n[0] == "number" ? (
        /*height*/
        n[0] + "px"
      ) : void 0), N(e, "width", typeof /*width*/
      n[1] == "number" ? `calc(min(${/*width*/
      n[1]}px, 100%))` : void 0), N(
        e,
        "border-style",
        /*variant*/
        n[4]
      ), N(
        e,
        "overflow",
        /*allow_overflow*/
        n[11] ? "visible" : "hidden"
      ), N(
        e,
        "flex-grow",
        /*scale*/
        n[12]
      ), N(e, "min-width", `calc(min(${/*min_width*/
      n[13]}px, 100%))`), N(e, "border-width", "var(--block-border-width)");
    },
    m(_, r) {
      qt(_, e, r), s && s.m(e, null), l = !0;
    },
    p(_, r) {
      s && s.p && (!l || r & /*$$scope*/
      65536) && Ct(
        s,
        i,
        _,
        /*$$scope*/
        _[16],
        l ? kt(
          i,
          /*$$scope*/
          _[16],
          r,
          null
        ) : wt(
          /*$$scope*/
          _[16]
        ),
        null
      ), Ve(
        /*tag*/
        _[14]
      )(e, o = vt(f, [
        (!l || r & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          _[7]
        ) },
        (!l || r & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          _[2]
        ) },
        (!l || r & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        _[3].join(" ") + " svelte-1t38q2d")) && { class: t }
      ])), I(
        e,
        "hidden",
        /*visible*/
        _[10] === !1
      ), I(
        e,
        "padded",
        /*padding*/
        _[6]
      ), I(
        e,
        "border_focus",
        /*border_mode*/
        _[5] === "focus"
      ), I(e, "hide-container", !/*explicit_call*/
      _[8] && !/*container*/
      _[9]), r & /*height*/
      1 && N(e, "height", typeof /*height*/
      _[0] == "number" ? (
        /*height*/
        _[0] + "px"
      ) : void 0), r & /*width*/
      2 && N(e, "width", typeof /*width*/
      _[1] == "number" ? `calc(min(${/*width*/
      _[1]}px, 100%))` : void 0), r & /*variant*/
      16 && N(
        e,
        "border-style",
        /*variant*/
        _[4]
      ), r & /*allow_overflow*/
      2048 && N(
        e,
        "overflow",
        /*allow_overflow*/
        _[11] ? "visible" : "hidden"
      ), r & /*scale*/
      4096 && N(
        e,
        "flex-grow",
        /*scale*/
        _[12]
      ), r & /*min_width*/
      8192 && N(e, "min-width", `calc(min(${/*min_width*/
      _[13]}px, 100%))`);
    },
    i(_) {
      l || (lt(s, _), l = !0);
    },
    o(_) {
      nt(s, _), l = !1;
    },
    d(_) {
      _ && ht(e), s && s.d(_);
    }
  };
}
function St(n) {
  let e, t = (
    /*tag*/
    n[14] && Lt(n)
  );
  return {
    c() {
      t && t.c();
    },
    m(l, i) {
      t && t.m(l, i), e = !0;
    },
    p(l, [i]) {
      /*tag*/
      l[14] && t.p(l, i);
    },
    i(l) {
      e || (lt(t, l), e = !0);
    },
    o(l) {
      nt(t, l), e = !1;
    },
    d(l) {
      t && t.d(l);
    }
  };
}
function Vt(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { height: s = void 0 } = e, { width: f = void 0 } = e, { elem_id: o = "" } = e, { elem_classes: _ = [] } = e, { variant: r = "solid" } = e, { border_mode: a = "base" } = e, { padding: c = !0 } = e, { type: w = "normal" } = e, { test_id: p = void 0 } = e, { explicit_call: k = !1 } = e, { container: S = !0 } = e, { visible: F = !0 } = e, { allow_overflow: L = !0 } = e, { scale: q = null } = e, { min_width: u = 0 } = e, y = w === "fieldset" ? "fieldset" : "div";
  return n.$$set = (b) => {
    "height" in b && t(0, s = b.height), "width" in b && t(1, f = b.width), "elem_id" in b && t(2, o = b.elem_id), "elem_classes" in b && t(3, _ = b.elem_classes), "variant" in b && t(4, r = b.variant), "border_mode" in b && t(5, a = b.border_mode), "padding" in b && t(6, c = b.padding), "type" in b && t(15, w = b.type), "test_id" in b && t(7, p = b.test_id), "explicit_call" in b && t(8, k = b.explicit_call), "container" in b && t(9, S = b.container), "visible" in b && t(10, F = b.visible), "allow_overflow" in b && t(11, L = b.allow_overflow), "scale" in b && t(12, q = b.scale), "min_width" in b && t(13, u = b.min_width), "$$scope" in b && t(16, i = b.$$scope);
  }, [
    s,
    f,
    o,
    _,
    r,
    a,
    c,
    p,
    k,
    S,
    F,
    L,
    q,
    u,
    y,
    w,
    i,
    l
  ];
}
class Mt extends mt {
  constructor(e) {
    super(), yt(this, e, Vt, St, Ft, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 15,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: Nt,
  attr: zt,
  create_slot: jt,
  detach: Tt,
  element: Pt,
  get_all_dirty_from_scope: Zt,
  get_slot_changes: Bt,
  init: At,
  insert: Dt,
  safe_not_equal: It,
  transition_in: Et,
  transition_out: Xt,
  update_slot_base: Yt
} = window.__gradio__svelte__internal;
function Gt(n) {
  let e, t;
  const l = (
    /*#slots*/
    n[1].default
  ), i = jt(
    l,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = Pt("div"), i && i.c(), zt(e, "class", "svelte-1hnfib2");
    },
    m(s, f) {
      Dt(s, e, f), i && i.m(e, null), t = !0;
    },
    p(s, [f]) {
      i && i.p && (!t || f & /*$$scope*/
      1) && Yt(
        i,
        l,
        s,
        /*$$scope*/
        s[0],
        t ? Bt(
          l,
          /*$$scope*/
          s[0],
          f,
          null
        ) : Zt(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      t || (Et(i, s), t = !0);
    },
    o(s) {
      Xt(i, s), t = !1;
    },
    d(s) {
      s && Tt(e), i && i.d(s);
    }
  };
}
function Ot(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  return n.$$set = (s) => {
    "$$scope" in s && t(0, i = s.$$scope);
  }, [i, l];
}
class Rt extends Nt {
  constructor(e) {
    super(), At(this, e, Ot, Gt, It, {});
  }
}
const {
  SvelteComponent: Ut,
  attr: Me,
  check_outros: Ht,
  create_component: Jt,
  create_slot: Kt,
  destroy_component: Qt,
  detach: _e,
  element: Wt,
  empty: xt,
  get_all_dirty_from_scope: $t,
  get_slot_changes: el,
  group_outros: tl,
  init: ll,
  insert: re,
  mount_component: nl,
  safe_not_equal: il,
  set_data: sl,
  space: fl,
  text: ol,
  toggle_class: U,
  transition_in: le,
  transition_out: ae,
  update_slot_base: _l
} = window.__gradio__svelte__internal;
function Ne(n) {
  let e, t;
  return e = new Rt({
    props: {
      $$slots: { default: [rl] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Jt(e.$$.fragment);
    },
    m(l, i) {
      nl(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i & /*$$scope, info*/
      10 && (s.$$scope = { dirty: i, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (le(e.$$.fragment, l), t = !0);
    },
    o(l) {
      ae(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Qt(e, l);
    }
  };
}
function rl(n) {
  let e;
  return {
    c() {
      e = ol(
        /*info*/
        n[1]
      );
    },
    m(t, l) {
      re(t, e, l);
    },
    p(t, l) {
      l & /*info*/
      2 && sl(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && _e(e);
    }
  };
}
function al(n) {
  let e, t, l, i;
  const s = (
    /*#slots*/
    n[2].default
  ), f = Kt(
    s,
    n,
    /*$$scope*/
    n[3],
    null
  );
  let o = (
    /*info*/
    n[1] && Ne(n)
  );
  return {
    c() {
      e = Wt("span"), f && f.c(), t = fl(), o && o.c(), l = xt(), Me(e, "data-testid", "block-info"), Me(e, "class", "svelte-22c38v"), U(e, "sr-only", !/*show_label*/
      n[0]), U(e, "hide", !/*show_label*/
      n[0]), U(
        e,
        "has-info",
        /*info*/
        n[1] != null
      );
    },
    m(_, r) {
      re(_, e, r), f && f.m(e, null), re(_, t, r), o && o.m(_, r), re(_, l, r), i = !0;
    },
    p(_, [r]) {
      f && f.p && (!i || r & /*$$scope*/
      8) && _l(
        f,
        s,
        _,
        /*$$scope*/
        _[3],
        i ? el(
          s,
          /*$$scope*/
          _[3],
          r,
          null
        ) : $t(
          /*$$scope*/
          _[3]
        ),
        null
      ), (!i || r & /*show_label*/
      1) && U(e, "sr-only", !/*show_label*/
      _[0]), (!i || r & /*show_label*/
      1) && U(e, "hide", !/*show_label*/
      _[0]), (!i || r & /*info*/
      2) && U(
        e,
        "has-info",
        /*info*/
        _[1] != null
      ), /*info*/
      _[1] ? o ? (o.p(_, r), r & /*info*/
      2 && le(o, 1)) : (o = Ne(_), o.c(), le(o, 1), o.m(l.parentNode, l)) : o && (tl(), ae(o, 1, 1, () => {
        o = null;
      }), Ht());
    },
    i(_) {
      i || (le(f, _), le(o), i = !0);
    },
    o(_) {
      ae(f, _), ae(o), i = !1;
    },
    d(_) {
      _ && (_e(e), _e(t), _e(l)), f && f.d(_), o && o.d(_);
    }
  };
}
function ul(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { show_label: s = !0 } = e, { info: f = void 0 } = e;
  return n.$$set = (o) => {
    "show_label" in o && t(0, s = o.show_label), "info" in o && t(1, f = o.info), "$$scope" in o && t(3, i = o.$$scope);
  }, [s, f, l, i];
}
class cl extends Ut {
  constructor(e) {
    super(), ll(this, e, ul, al, il, { show_label: 0, info: 1 });
  }
}
const dl = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], ze = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
dl.reduce(
  (n, { color: e, primary: t, secondary: l }) => ({
    ...n,
    [e]: {
      primary: ze[e][t],
      secondary: ze[e][l]
    }
  }),
  {}
);
function J(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let l = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + l;
}
function ue() {
}
function ml(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
const it = typeof window < "u";
let je = it ? () => window.performance.now() : () => Date.now(), st = it ? (n) => requestAnimationFrame(n) : ue;
const Q = /* @__PURE__ */ new Set();
function ft(n) {
  Q.forEach((e) => {
    e.c(n) || (Q.delete(e), e.f());
  }), Q.size !== 0 && st(ft);
}
function bl(n) {
  let e;
  return Q.size === 0 && st(ft), {
    promise: new Promise((t) => {
      Q.add(e = { c: n, f: t });
    }),
    abort() {
      Q.delete(e);
    }
  };
}
const H = [];
function gl(n, e = ue) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(o) {
    if (ml(n, o) && (n = o, t)) {
      const _ = !H.length;
      for (const r of l)
        r[1](), H.push(r, n);
      if (_) {
        for (let r = 0; r < H.length; r += 2)
          H[r][0](H[r + 1]);
        H.length = 0;
      }
    }
  }
  function s(o) {
    i(o(n));
  }
  function f(o, _ = ue) {
    const r = [o, _];
    return l.add(r), l.size === 1 && (t = e(i, s) || ue), o(n), () => {
      l.delete(r), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: s, subscribe: f };
}
function Te(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function he(n, e, t, l) {
  if (typeof t == "number" || Te(t)) {
    const i = l - t, s = (t - e) / (n.dt || 1 / 60), f = n.opts.stiffness * i, o = n.opts.damping * s, _ = (f - o) * n.inv_mass, r = (s + _) * n.dt;
    return Math.abs(r) < n.opts.precision && Math.abs(i) < n.opts.precision ? l : (n.settled = !1, Te(t) ? new Date(t.getTime() + r) : t + r);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, s) => he(n, e[s], t[s], l[s])
      );
    if (typeof t == "object") {
      const i = {};
      for (const s in t)
        i[s] = he(n, e[s], t[s], l[s]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function Pe(n, e = {}) {
  const t = gl(n), { stiffness: l = 0.15, damping: i = 0.8, precision: s = 0.01 } = e;
  let f, o, _, r = n, a = n, c = 1, w = 0, p = !1;
  function k(F, L = {}) {
    a = F;
    const q = _ = {};
    return n == null || L.hard || S.stiffness >= 1 && S.damping >= 1 ? (p = !0, f = je(), r = F, t.set(n = a), Promise.resolve()) : (L.soft && (w = 1 / ((L.soft === !0 ? 0.5 : +L.soft) * 60), c = 0), o || (f = je(), p = !1, o = bl((u) => {
      if (p)
        return p = !1, o = null, !1;
      c = Math.min(c + w, 1);
      const y = {
        inv_mass: c,
        opts: S,
        settled: !0,
        dt: (u - f) * 60 / 1e3
      }, b = he(y, r, n, a);
      return f = u, r = n, t.set(n = b), y.settled && (o = null), !y.settled;
    })), new Promise((u) => {
      o.promise.then(() => {
        q === _ && u();
      });
    }));
  }
  const S = {
    set: k,
    update: (F, L) => k(F(a, n), L),
    subscribe: t.subscribe,
    stiffness: l,
    damping: i,
    precision: s
  };
  return S;
}
const {
  SvelteComponent: hl,
  append: T,
  attr: v,
  component_subscribe: Ze,
  detach: pl,
  element: wl,
  init: kl,
  insert: vl,
  noop: Be,
  safe_not_equal: yl,
  set_style: fe,
  svg_element: P,
  toggle_class: Ae
} = window.__gradio__svelte__internal, { onMount: ql } = window.__gradio__svelte__internal;
function Fl(n) {
  let e, t, l, i, s, f, o, _, r, a, c, w;
  return {
    c() {
      e = wl("div"), t = P("svg"), l = P("g"), i = P("path"), s = P("path"), f = P("path"), o = P("path"), _ = P("g"), r = P("path"), a = P("path"), c = P("path"), w = P("path"), v(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), v(i, "fill", "#FF7C00"), v(i, "fill-opacity", "0.4"), v(i, "class", "svelte-43sxxs"), v(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), v(s, "fill", "#FF7C00"), v(s, "class", "svelte-43sxxs"), v(f, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), v(f, "fill", "#FF7C00"), v(f, "fill-opacity", "0.4"), v(f, "class", "svelte-43sxxs"), v(o, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), v(o, "fill", "#FF7C00"), v(o, "class", "svelte-43sxxs"), fe(l, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), v(r, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), v(r, "fill", "#FF7C00"), v(r, "fill-opacity", "0.4"), v(r, "class", "svelte-43sxxs"), v(a, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), v(a, "fill", "#FF7C00"), v(a, "class", "svelte-43sxxs"), v(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), v(c, "fill", "#FF7C00"), v(c, "fill-opacity", "0.4"), v(c, "class", "svelte-43sxxs"), v(w, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), v(w, "fill", "#FF7C00"), v(w, "class", "svelte-43sxxs"), fe(_, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), v(t, "viewBox", "-1200 -1200 3000 3000"), v(t, "fill", "none"), v(t, "xmlns", "http://www.w3.org/2000/svg"), v(t, "class", "svelte-43sxxs"), v(e, "class", "svelte-43sxxs"), Ae(
        e,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(p, k) {
      vl(p, e, k), T(e, t), T(t, l), T(l, i), T(l, s), T(l, f), T(l, o), T(t, _), T(_, r), T(_, a), T(_, c), T(_, w);
    },
    p(p, [k]) {
      k & /*$top*/
      2 && fe(l, "transform", "translate(" + /*$top*/
      p[1][0] + "px, " + /*$top*/
      p[1][1] + "px)"), k & /*$bottom*/
      4 && fe(_, "transform", "translate(" + /*$bottom*/
      p[2][0] + "px, " + /*$bottom*/
      p[2][1] + "px)"), k & /*margin*/
      1 && Ae(
        e,
        "margin",
        /*margin*/
        p[0]
      );
    },
    i: Be,
    o: Be,
    d(p) {
      p && pl(e);
    }
  };
}
function Cl(n, e, t) {
  let l, i, { margin: s = !0 } = e;
  const f = Pe([0, 0]);
  Ze(n, f, (w) => t(1, l = w));
  const o = Pe([0, 0]);
  Ze(n, o, (w) => t(2, i = w));
  let _;
  async function r() {
    await Promise.all([f.set([125, 140]), o.set([-125, -140])]), await Promise.all([f.set([-125, 140]), o.set([125, -140])]), await Promise.all([f.set([-125, 0]), o.set([125, -0])]), await Promise.all([f.set([125, 0]), o.set([-125, 0])]);
  }
  async function a() {
    await r(), _ || a();
  }
  async function c() {
    await Promise.all([f.set([125, 0]), o.set([-125, 0])]), a();
  }
  return ql(() => (c(), () => _ = !0)), n.$$set = (w) => {
    "margin" in w && t(0, s = w.margin);
  }, [s, l, i, f, o];
}
class Ll extends hl {
  constructor(e) {
    super(), kl(this, e, Cl, Fl, yl, { margin: 0 });
  }
}
const {
  SvelteComponent: Sl,
  append: R,
  attr: Z,
  binding_callbacks: De,
  check_outros: ot,
  create_component: Vl,
  create_slot: Ml,
  destroy_component: Nl,
  destroy_each: _t,
  detach: g,
  element: A,
  empty: $,
  ensure_array_like: ce,
  get_all_dirty_from_scope: zl,
  get_slot_changes: jl,
  group_outros: rt,
  init: Tl,
  insert: h,
  mount_component: Pl,
  noop: pe,
  safe_not_equal: Zl,
  set_data: j,
  set_style: E,
  space: B,
  text: C,
  toggle_class: z,
  transition_in: W,
  transition_out: x,
  update_slot_base: Bl
} = window.__gradio__svelte__internal, { tick: Al } = window.__gradio__svelte__internal, { onDestroy: Dl } = window.__gradio__svelte__internal, Il = (n) => ({}), Ie = (n) => ({});
function Ee(n, e, t) {
  const l = n.slice();
  return l[38] = e[t], l[40] = t, l;
}
function Xe(n, e, t) {
  const l = n.slice();
  return l[38] = e[t], l;
}
function El(n) {
  let e, t = (
    /*i18n*/
    n[1]("common.error") + ""
  ), l, i, s;
  const f = (
    /*#slots*/
    n[29].error
  ), o = Ml(
    f,
    n,
    /*$$scope*/
    n[28],
    Ie
  );
  return {
    c() {
      e = A("span"), l = C(t), i = B(), o && o.c(), Z(e, "class", "error svelte-1txqlrd");
    },
    m(_, r) {
      h(_, e, r), R(e, l), h(_, i, r), o && o.m(_, r), s = !0;
    },
    p(_, r) {
      (!s || r[0] & /*i18n*/
      2) && t !== (t = /*i18n*/
      _[1]("common.error") + "") && j(l, t), o && o.p && (!s || r[0] & /*$$scope*/
      268435456) && Bl(
        o,
        f,
        _,
        /*$$scope*/
        _[28],
        s ? jl(
          f,
          /*$$scope*/
          _[28],
          r,
          Il
        ) : zl(
          /*$$scope*/
          _[28]
        ),
        Ie
      );
    },
    i(_) {
      s || (W(o, _), s = !0);
    },
    o(_) {
      x(o, _), s = !1;
    },
    d(_) {
      _ && (g(e), g(i)), o && o.d(_);
    }
  };
}
function Xl(n) {
  let e, t, l, i, s, f, o, _, r, a = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && Ye(n)
  );
  function c(u, y) {
    if (
      /*progress*/
      u[7]
    )
      return Ol;
    if (
      /*queue_position*/
      u[2] !== null && /*queue_size*/
      u[3] !== void 0 && /*queue_position*/
      u[2] >= 0
    )
      return Gl;
    if (
      /*queue_position*/
      u[2] === 0
    )
      return Yl;
  }
  let w = c(n), p = w && w(n), k = (
    /*timer*/
    n[5] && Re(n)
  );
  const S = [Jl, Hl], F = [];
  function L(u, y) {
    return (
      /*last_progress_level*/
      u[15] != null ? 0 : (
        /*show_progress*/
        u[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = L(n)) && (f = F[s] = S[s](n));
  let q = !/*timer*/
  n[5] && xe(n);
  return {
    c() {
      a && a.c(), e = B(), t = A("div"), p && p.c(), l = B(), k && k.c(), i = B(), f && f.c(), o = B(), q && q.c(), _ = $(), Z(t, "class", "progress-text svelte-1txqlrd"), z(
        t,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), z(
        t,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(u, y) {
      a && a.m(u, y), h(u, e, y), h(u, t, y), p && p.m(t, null), R(t, l), k && k.m(t, null), h(u, i, y), ~s && F[s].m(u, y), h(u, o, y), q && q.m(u, y), h(u, _, y), r = !0;
    },
    p(u, y) {
      /*variant*/
      u[8] === "default" && /*show_eta_bar*/
      u[18] && /*show_progress*/
      u[6] === "full" ? a ? a.p(u, y) : (a = Ye(u), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), w === (w = c(u)) && p ? p.p(u, y) : (p && p.d(1), p = w && w(u), p && (p.c(), p.m(t, l))), /*timer*/
      u[5] ? k ? k.p(u, y) : (k = Re(u), k.c(), k.m(t, null)) : k && (k.d(1), k = null), (!r || y[0] & /*variant*/
      256) && z(
        t,
        "meta-text-center",
        /*variant*/
        u[8] === "center"
      ), (!r || y[0] & /*variant*/
      256) && z(
        t,
        "meta-text",
        /*variant*/
        u[8] === "default"
      );
      let b = s;
      s = L(u), s === b ? ~s && F[s].p(u, y) : (f && (rt(), x(F[b], 1, 1, () => {
        F[b] = null;
      }), ot()), ~s ? (f = F[s], f ? f.p(u, y) : (f = F[s] = S[s](u), f.c()), W(f, 1), f.m(o.parentNode, o)) : f = null), /*timer*/
      u[5] ? q && (q.d(1), q = null) : q ? q.p(u, y) : (q = xe(u), q.c(), q.m(_.parentNode, _));
    },
    i(u) {
      r || (W(f), r = !0);
    },
    o(u) {
      x(f), r = !1;
    },
    d(u) {
      u && (g(e), g(t), g(i), g(o), g(_)), a && a.d(u), p && p.d(), k && k.d(), ~s && F[s].d(u), q && q.d(u);
    }
  };
}
function Ye(n) {
  let e, t = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = A("div"), Z(e, "class", "eta-bar svelte-1txqlrd"), E(e, "transform", t);
    },
    m(l, i) {
      h(l, e, i);
    },
    p(l, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (l[17] || 0) * 100 - 100}%)`) && E(e, "transform", t);
    },
    d(l) {
      l && g(e);
    }
  };
}
function Yl(n) {
  let e;
  return {
    c() {
      e = C("processing |");
    },
    m(t, l) {
      h(t, e, l);
    },
    p: pe,
    d(t) {
      t && g(e);
    }
  };
}
function Gl(n) {
  let e, t = (
    /*queue_position*/
    n[2] + 1 + ""
  ), l, i, s, f;
  return {
    c() {
      e = C("queue: "), l = C(t), i = C("/"), s = C(
        /*queue_size*/
        n[3]
      ), f = C(" |");
    },
    m(o, _) {
      h(o, e, _), h(o, l, _), h(o, i, _), h(o, s, _), h(o, f, _);
    },
    p(o, _) {
      _[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      o[2] + 1 + "") && j(l, t), _[0] & /*queue_size*/
      8 && j(
        s,
        /*queue_size*/
        o[3]
      );
    },
    d(o) {
      o && (g(e), g(l), g(i), g(s), g(f));
    }
  };
}
function Ol(n) {
  let e, t = ce(
    /*progress*/
    n[7]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = Oe(Xe(n, t, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = $();
    },
    m(i, s) {
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(i, s);
      h(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*progress*/
      128) {
        t = ce(
          /*progress*/
          i[7]
        );
        let f;
        for (f = 0; f < t.length; f += 1) {
          const o = Xe(i, t, f);
          l[f] ? l[f].p(o, s) : (l[f] = Oe(o), l[f].c(), l[f].m(e.parentNode, e));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = t.length;
      }
    },
    d(i) {
      i && g(e), _t(l, i);
    }
  };
}
function Ge(n) {
  let e, t = (
    /*p*/
    n[38].unit + ""
  ), l, i, s = " ", f;
  function o(a, c) {
    return (
      /*p*/
      a[38].length != null ? Ul : Rl
    );
  }
  let _ = o(n), r = _(n);
  return {
    c() {
      r.c(), e = B(), l = C(t), i = C(" | "), f = C(s);
    },
    m(a, c) {
      r.m(a, c), h(a, e, c), h(a, l, c), h(a, i, c), h(a, f, c);
    },
    p(a, c) {
      _ === (_ = o(a)) && r ? r.p(a, c) : (r.d(1), r = _(a), r && (r.c(), r.m(e.parentNode, e))), c[0] & /*progress*/
      128 && t !== (t = /*p*/
      a[38].unit + "") && j(l, t);
    },
    d(a) {
      a && (g(e), g(l), g(i), g(f)), r.d(a);
    }
  };
}
function Rl(n) {
  let e = J(
    /*p*/
    n[38].index || 0
  ) + "", t;
  return {
    c() {
      t = C(e);
    },
    m(l, i) {
      h(l, t, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && e !== (e = J(
        /*p*/
        l[38].index || 0
      ) + "") && j(t, e);
    },
    d(l) {
      l && g(t);
    }
  };
}
function Ul(n) {
  let e = J(
    /*p*/
    n[38].index || 0
  ) + "", t, l, i = J(
    /*p*/
    n[38].length
  ) + "", s;
  return {
    c() {
      t = C(e), l = C("/"), s = C(i);
    },
    m(f, o) {
      h(f, t, o), h(f, l, o), h(f, s, o);
    },
    p(f, o) {
      o[0] & /*progress*/
      128 && e !== (e = J(
        /*p*/
        f[38].index || 0
      ) + "") && j(t, e), o[0] & /*progress*/
      128 && i !== (i = J(
        /*p*/
        f[38].length
      ) + "") && j(s, i);
    },
    d(f) {
      f && (g(t), g(l), g(s));
    }
  };
}
function Oe(n) {
  let e, t = (
    /*p*/
    n[38].index != null && Ge(n)
  );
  return {
    c() {
      t && t.c(), e = $();
    },
    m(l, i) {
      t && t.m(l, i), h(l, e, i);
    },
    p(l, i) {
      /*p*/
      l[38].index != null ? t ? t.p(l, i) : (t = Ge(l), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(l) {
      l && g(e), t && t.d(l);
    }
  };
}
function Re(n) {
  let e, t = (
    /*eta*/
    n[0] ? `/${/*formatted_eta*/
    n[19]}` : ""
  ), l, i;
  return {
    c() {
      e = C(
        /*formatted_timer*/
        n[20]
      ), l = C(t), i = C("s");
    },
    m(s, f) {
      h(s, e, f), h(s, l, f), h(s, i, f);
    },
    p(s, f) {
      f[0] & /*formatted_timer*/
      1048576 && j(
        e,
        /*formatted_timer*/
        s[20]
      ), f[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && j(l, t);
    },
    d(s) {
      s && (g(e), g(l), g(i));
    }
  };
}
function Hl(n) {
  let e, t;
  return e = new Ll({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      Vl(e.$$.fragment);
    },
    m(l, i) {
      Pl(e, l, i), t = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*variant*/
      256 && (s.margin = /*variant*/
      l[8] === "default"), e.$set(s);
    },
    i(l) {
      t || (W(e.$$.fragment, l), t = !0);
    },
    o(l) {
      x(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Nl(e, l);
    }
  };
}
function Jl(n) {
  let e, t, l, i, s, f = `${/*last_progress_level*/
  n[15] * 100}%`, o = (
    /*progress*/
    n[7] != null && Ue(n)
  );
  return {
    c() {
      e = A("div"), t = A("div"), o && o.c(), l = B(), i = A("div"), s = A("div"), Z(t, "class", "progress-level-inner svelte-1txqlrd"), Z(s, "class", "progress-bar svelte-1txqlrd"), E(s, "width", f), Z(i, "class", "progress-bar-wrap svelte-1txqlrd"), Z(e, "class", "progress-level svelte-1txqlrd");
    },
    m(_, r) {
      h(_, e, r), R(e, t), o && o.m(t, null), R(e, l), R(e, i), R(i, s), n[30](s);
    },
    p(_, r) {
      /*progress*/
      _[7] != null ? o ? o.p(_, r) : (o = Ue(_), o.c(), o.m(t, null)) : o && (o.d(1), o = null), r[0] & /*last_progress_level*/
      32768 && f !== (f = `${/*last_progress_level*/
      _[15] * 100}%`) && E(s, "width", f);
    },
    i: pe,
    o: pe,
    d(_) {
      _ && g(e), o && o.d(), n[30](null);
    }
  };
}
function Ue(n) {
  let e, t = ce(
    /*progress*/
    n[7]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = We(Ee(n, t, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = $();
    },
    m(i, s) {
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(i, s);
      h(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        t = ce(
          /*progress*/
          i[7]
        );
        let f;
        for (f = 0; f < t.length; f += 1) {
          const o = Ee(i, t, f);
          l[f] ? l[f].p(o, s) : (l[f] = We(o), l[f].c(), l[f].m(e.parentNode, e));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = t.length;
      }
    },
    d(i) {
      i && g(e), _t(l, i);
    }
  };
}
function He(n) {
  let e, t, l, i, s = (
    /*i*/
    n[40] !== 0 && Kl()
  ), f = (
    /*p*/
    n[38].desc != null && Je(n)
  ), o = (
    /*p*/
    n[38].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[40]
    ] != null && Ke()
  ), _ = (
    /*progress_level*/
    n[14] != null && Qe(n)
  );
  return {
    c() {
      s && s.c(), e = B(), f && f.c(), t = B(), o && o.c(), l = B(), _ && _.c(), i = $();
    },
    m(r, a) {
      s && s.m(r, a), h(r, e, a), f && f.m(r, a), h(r, t, a), o && o.m(r, a), h(r, l, a), _ && _.m(r, a), h(r, i, a);
    },
    p(r, a) {
      /*p*/
      r[38].desc != null ? f ? f.p(r, a) : (f = Je(r), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), /*p*/
      r[38].desc != null && /*progress_level*/
      r[14] && /*progress_level*/
      r[14][
        /*i*/
        r[40]
      ] != null ? o || (o = Ke(), o.c(), o.m(l.parentNode, l)) : o && (o.d(1), o = null), /*progress_level*/
      r[14] != null ? _ ? _.p(r, a) : (_ = Qe(r), _.c(), _.m(i.parentNode, i)) : _ && (_.d(1), _ = null);
    },
    d(r) {
      r && (g(e), g(t), g(l), g(i)), s && s.d(r), f && f.d(r), o && o.d(r), _ && _.d(r);
    }
  };
}
function Kl(n) {
  let e;
  return {
    c() {
      e = C(" /");
    },
    m(t, l) {
      h(t, e, l);
    },
    d(t) {
      t && g(e);
    }
  };
}
function Je(n) {
  let e = (
    /*p*/
    n[38].desc + ""
  ), t;
  return {
    c() {
      t = C(e);
    },
    m(l, i) {
      h(l, t, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      l[38].desc + "") && j(t, e);
    },
    d(l) {
      l && g(t);
    }
  };
}
function Ke(n) {
  let e;
  return {
    c() {
      e = C("-");
    },
    m(t, l) {
      h(t, e, l);
    },
    d(t) {
      t && g(e);
    }
  };
}
function Qe(n) {
  let e = (100 * /*progress_level*/
  (n[14][
    /*i*/
    n[40]
  ] || 0)).toFixed(1) + "", t, l;
  return {
    c() {
      t = C(e), l = C("%");
    },
    m(i, s) {
      h(i, t, s), h(i, l, s);
    },
    p(i, s) {
      s[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[40]
      ] || 0)).toFixed(1) + "") && j(t, e);
    },
    d(i) {
      i && (g(t), g(l));
    }
  };
}
function We(n) {
  let e, t = (
    /*p*/
    (n[38].desc != null || /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[40]
    ] != null) && He(n)
  );
  return {
    c() {
      t && t.c(), e = $();
    },
    m(l, i) {
      t && t.m(l, i), h(l, e, i);
    },
    p(l, i) {
      /*p*/
      l[38].desc != null || /*progress_level*/
      l[14] && /*progress_level*/
      l[14][
        /*i*/
        l[40]
      ] != null ? t ? t.p(l, i) : (t = He(l), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(l) {
      l && g(e), t && t.d(l);
    }
  };
}
function xe(n) {
  let e, t;
  return {
    c() {
      e = A("p"), t = C(
        /*loading_text*/
        n[9]
      ), Z(e, "class", "loading svelte-1txqlrd");
    },
    m(l, i) {
      h(l, e, i), R(e, t);
    },
    p(l, i) {
      i[0] & /*loading_text*/
      512 && j(
        t,
        /*loading_text*/
        l[9]
      );
    },
    d(l) {
      l && g(e);
    }
  };
}
function Ql(n) {
  let e, t, l, i, s;
  const f = [Xl, El], o = [];
  function _(r, a) {
    return (
      /*status*/
      r[4] === "pending" ? 0 : (
        /*status*/
        r[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = _(n)) && (l = o[t] = f[t](n)), {
    c() {
      e = A("div"), l && l.c(), Z(e, "class", i = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-1txqlrd"), z(e, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden"), z(
        e,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), z(
        e,
        "generating",
        /*status*/
        n[4] === "generating"
      ), z(
        e,
        "border",
        /*border*/
        n[12]
      ), E(
        e,
        "position",
        /*absolute*/
        n[10] ? "absolute" : "static"
      ), E(
        e,
        "padding",
        /*absolute*/
        n[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(r, a) {
      h(r, e, a), ~t && o[t].m(e, null), n[31](e), s = !0;
    },
    p(r, a) {
      let c = t;
      t = _(r), t === c ? ~t && o[t].p(r, a) : (l && (rt(), x(o[c], 1, 1, () => {
        o[c] = null;
      }), ot()), ~t ? (l = o[t], l ? l.p(r, a) : (l = o[t] = f[t](r), l.c()), W(l, 1), l.m(e, null)) : l = null), (!s || a[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      r[8] + " " + /*show_progress*/
      r[6] + " svelte-1txqlrd")) && Z(e, "class", i), (!s || a[0] & /*variant, show_progress, status, show_progress*/
      336) && z(e, "hide", !/*status*/
      r[4] || /*status*/
      r[4] === "complete" || /*show_progress*/
      r[6] === "hidden"), (!s || a[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && z(
        e,
        "translucent",
        /*variant*/
        r[8] === "center" && /*status*/
        (r[4] === "pending" || /*status*/
        r[4] === "error") || /*translucent*/
        r[11] || /*show_progress*/
        r[6] === "minimal"
      ), (!s || a[0] & /*variant, show_progress, status*/
      336) && z(
        e,
        "generating",
        /*status*/
        r[4] === "generating"
      ), (!s || a[0] & /*variant, show_progress, border*/
      4416) && z(
        e,
        "border",
        /*border*/
        r[12]
      ), a[0] & /*absolute*/
      1024 && E(
        e,
        "position",
        /*absolute*/
        r[10] ? "absolute" : "static"
      ), a[0] & /*absolute*/
      1024 && E(
        e,
        "padding",
        /*absolute*/
        r[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(r) {
      s || (W(l), s = !0);
    },
    o(r) {
      x(l), s = !1;
    },
    d(r) {
      r && g(e), ~t && o[t].d(), n[31](null);
    }
  };
}
let oe = [], ge = !1;
async function Wl(n, e = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && e !== !0)) {
    if (oe.push(n), !ge)
      ge = !0;
    else
      return;
    await Al(), requestAnimationFrame(() => {
      let t = [0, 0];
      for (let l = 0; l < oe.length; l++) {
        const s = oe[l].getBoundingClientRect();
        (l === 0 || s.top + window.scrollY <= t[0]) && (t[0] = s.top + window.scrollY, t[1] = l);
      }
      window.scrollTo({ top: t[0] - 20, behavior: "smooth" }), ge = !1, oe = [];
    });
  }
}
function xl(n, e, t) {
  let l, { $$slots: i = {}, $$scope: s } = e, { i18n: f } = e, { eta: o = null } = e, { queue: _ = !1 } = e, { queue_position: r } = e, { queue_size: a } = e, { status: c } = e, { scroll_to_output: w = !1 } = e, { timer: p = !0 } = e, { show_progress: k = "full" } = e, { message: S = null } = e, { progress: F = null } = e, { variant: L = "default" } = e, { loading_text: q = "Loading..." } = e, { absolute: u = !0 } = e, { translucent: y = !1 } = e, { border: b = !1 } = e, { autoscroll: ee } = e, X, Y = !1, m = 0, G = 0, be = null, qe = 0, O = null, te, D = null, Fe = !0;
  const ut = () => {
    t(25, m = performance.now()), t(26, G = 0), Y = !0, Ce();
  };
  function Ce() {
    requestAnimationFrame(() => {
      t(26, G = (performance.now() - m) / 1e3), Y && Ce();
    });
  }
  function Le() {
    t(26, G = 0), Y && (Y = !1);
  }
  Dl(() => {
    Y && Le();
  });
  let Se = null;
  function ct(d) {
    De[d ? "unshift" : "push"](() => {
      D = d, t(16, D), t(7, F), t(14, O), t(15, te);
    });
  }
  function dt(d) {
    De[d ? "unshift" : "push"](() => {
      X = d, t(13, X);
    });
  }
  return n.$$set = (d) => {
    "i18n" in d && t(1, f = d.i18n), "eta" in d && t(0, o = d.eta), "queue" in d && t(21, _ = d.queue), "queue_position" in d && t(2, r = d.queue_position), "queue_size" in d && t(3, a = d.queue_size), "status" in d && t(4, c = d.status), "scroll_to_output" in d && t(22, w = d.scroll_to_output), "timer" in d && t(5, p = d.timer), "show_progress" in d && t(6, k = d.show_progress), "message" in d && t(23, S = d.message), "progress" in d && t(7, F = d.progress), "variant" in d && t(8, L = d.variant), "loading_text" in d && t(9, q = d.loading_text), "absolute" in d && t(10, u = d.absolute), "translucent" in d && t(11, y = d.translucent), "border" in d && t(12, b = d.border), "autoscroll" in d && t(24, ee = d.autoscroll), "$$scope" in d && t(28, s = d.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (o === null ? t(0, o = be) : _ && t(0, o = (performance.now() - m) / 1e3 + o), o != null && (t(19, Se = o.toFixed(1)), t(27, be = o))), n.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && t(17, qe = o === null || o <= 0 || !G ? null : Math.min(G / o, 1)), n.$$.dirty[0] & /*progress*/
    128 && F != null && t(18, Fe = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (F != null ? t(14, O = F.map((d) => {
      if (d.index != null && d.length != null)
        return d.index / d.length;
      if (d.progress != null)
        return d.progress;
    })) : t(14, O = null), O ? (t(15, te = O[O.length - 1]), D && (te === 0 ? t(16, D.style.transition = "0", D) : t(16, D.style.transition = "150ms", D))) : t(15, te = void 0)), n.$$.dirty[0] & /*status*/
    16 && (c === "pending" ? ut() : Le()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && X && w && (c === "pending" || c === "complete") && Wl(X, ee), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, l = G.toFixed(1));
  }, [
    o,
    f,
    r,
    a,
    c,
    p,
    k,
    F,
    L,
    q,
    u,
    y,
    b,
    X,
    O,
    te,
    D,
    qe,
    Fe,
    Se,
    l,
    _,
    w,
    S,
    ee,
    m,
    G,
    be,
    s,
    i,
    ct,
    dt
  ];
}
class $l extends Sl {
  constructor(e) {
    super(), Tl(
      this,
      e,
      xl,
      Ql,
      Zl,
      {
        i18n: 1,
        eta: 0,
        queue: 21,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: en,
  append: tn,
  assign: ln,
  attr: M,
  binding_callbacks: $e,
  check_outros: nn,
  create_component: we,
  destroy_component: ke,
  detach: ie,
  element: ve,
  flush: V,
  get_spread_object: sn,
  get_spread_update: fn,
  group_outros: on,
  init: _n,
  insert: se,
  listen: de,
  mount_component: ye,
  run_all: at,
  safe_not_equal: rn,
  set_data: an,
  set_input_value: me,
  space: et,
  text: un,
  toggle_class: cn,
  transition_in: K,
  transition_out: ne
} = window.__gradio__svelte__internal, { tick: dn } = window.__gradio__svelte__internal;
function tt(n) {
  let e, t;
  const l = [
    { autoscroll: (
      /*gradio*/
      n[1].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      n[1].i18n
    ) },
    /*loading_status*/
    n[10]
  ];
  let i = {};
  for (let s = 0; s < l.length; s += 1)
    i = ln(i, l[s]);
  return e = new $l({ props: i }), {
    c() {
      we(e.$$.fragment);
    },
    m(s, f) {
      ye(e, s, f), t = !0;
    },
    p(s, f) {
      const o = f & /*gradio, loading_status*/
      1026 ? fn(l, [
        f & /*gradio*/
        2 && { autoscroll: (
          /*gradio*/
          s[1].autoscroll
        ) },
        f & /*gradio*/
        2 && { i18n: (
          /*gradio*/
          s[1].i18n
        ) },
        f & /*loading_status*/
        1024 && sn(
          /*loading_status*/
          s[10]
        )
      ]) : {};
      e.$set(o);
    },
    i(s) {
      t || (K(e.$$.fragment, s), t = !0);
    },
    o(s) {
      ne(e.$$.fragment, s), t = !1;
    },
    d(s) {
      ke(e, s);
    }
  };
}
function mn(n) {
  let e;
  return {
    c() {
      e = un(
        /*label*/
        n[2]
      );
    },
    m(t, l) {
      se(t, e, l);
    },
    p(t, l) {
      l & /*label*/
      4 && an(
        e,
        /*label*/
        t[2]
      );
    },
    d(t) {
      t && ie(e);
    }
  };
}
function bn(n) {
  let e, t, l, i, s;
  return {
    c() {
      e = ve("input"), M(e, "data-testid", "textbox"), M(e, "type", "datetime-local"), M(e, "class", "scroll-hide svelte-2jrh70"), M(
        e,
        "placeholder",
        /*placeholder*/
        n[6]
      ), e.disabled = t = !/*interactive*/
      n[11], M(e, "dir", l = /*rtl*/
      n[12] ? "rtl" : "ltr");
    },
    m(f, o) {
      se(f, e, o), me(
        e,
        /*value*/
        n[0]
      ), n[20](e), i || (s = [
        de(
          e,
          "input",
          /*input_input_handler_1*/
          n[19]
        ),
        de(
          e,
          "keypress",
          /*handle_keypress*/
          n[15]
        )
      ], i = !0);
    },
    p(f, o) {
      o & /*placeholder*/
      64 && M(
        e,
        "placeholder",
        /*placeholder*/
        f[6]
      ), o & /*interactive*/
      2048 && t !== (t = !/*interactive*/
      f[11]) && (e.disabled = t), o & /*rtl*/
      4096 && l !== (l = /*rtl*/
      f[12] ? "rtl" : "ltr") && M(e, "dir", l), o & /*value*/
      1 && me(
        e,
        /*value*/
        f[0]
      );
    },
    d(f) {
      f && ie(e), n[20](null), i = !1, at(s);
    }
  };
}
function gn(n) {
  let e, t, l, i, s;
  return {
    c() {
      e = ve("input"), M(e, "data-testid", "textbox"), M(e, "type", "date"), M(e, "class", "scroll-hide svelte-2jrh70"), M(
        e,
        "placeholder",
        /*placeholder*/
        n[6]
      ), e.disabled = t = !/*interactive*/
      n[11], M(e, "dir", l = /*rtl*/
      n[12] ? "rtl" : "ltr");
    },
    m(f, o) {
      se(f, e, o), me(
        e,
        /*value*/
        n[0]
      ), n[18](e), i || (s = [
        de(
          e,
          "input",
          /*input_input_handler*/
          n[17]
        ),
        de(
          e,
          "keypress",
          /*handle_keypress*/
          n[15]
        )
      ], i = !0);
    },
    p(f, o) {
      o & /*placeholder*/
      64 && M(
        e,
        "placeholder",
        /*placeholder*/
        f[6]
      ), o & /*interactive*/
      2048 && t !== (t = !/*interactive*/
      f[11]) && (e.disabled = t), o & /*rtl*/
      4096 && l !== (l = /*rtl*/
      f[12] ? "rtl" : "ltr") && M(e, "dir", l), o & /*value*/
      1 && me(
        e,
        /*value*/
        f[0]
      );
    },
    d(f) {
      f && ie(e), n[18](null), i = !1, at(s);
    }
  };
}
function hn(n) {
  let e, t, l, i, s, f = (
    /*loading_status*/
    n[10] && tt(n)
  );
  l = new cl({
    props: {
      show_label: (
        /*show_label*/
        n[7]
      ),
      info: void 0,
      $$slots: { default: [mn] },
      $$scope: { ctx: n }
    }
  });
  function o(a, c) {
    if (
      /*type*/
      a[13] === "date"
    )
      return gn;
    if (
      /*type*/
      a[13] === "datetime-local"
    )
      return bn;
  }
  let _ = o(n), r = _ && _(n);
  return {
    c() {
      f && f.c(), e = et(), t = ve("label"), we(l.$$.fragment), i = et(), r && r.c(), M(t, "class", "svelte-2jrh70"), cn(t, "container", wn);
    },
    m(a, c) {
      f && f.m(a, c), se(a, e, c), se(a, t, c), ye(l, t, null), tn(t, i), r && r.m(t, null), s = !0;
    },
    p(a, c) {
      /*loading_status*/
      a[10] ? f ? (f.p(a, c), c & /*loading_status*/
      1024 && K(f, 1)) : (f = tt(a), f.c(), K(f, 1), f.m(e.parentNode, e)) : f && (on(), ne(f, 1, 1, () => {
        f = null;
      }), nn());
      const w = {};
      c & /*show_label*/
      128 && (w.show_label = /*show_label*/
      a[7]), c & /*$$scope, label*/
      4194308 && (w.$$scope = { dirty: c, ctx: a }), l.$set(w), _ === (_ = o(a)) && r ? r.p(a, c) : (r && r.d(1), r = _ && _(a), r && (r.c(), r.m(t, null)));
    },
    i(a) {
      s || (K(f), K(l.$$.fragment, a), s = !0);
    },
    o(a) {
      ne(f), ne(l.$$.fragment, a), s = !1;
    },
    d(a) {
      a && (ie(e), ie(t)), f && f.d(a), ke(l), r && r.d();
    }
  };
}
function pn(n) {
  let e, t;
  return e = new Mt({
    props: {
      visible: (
        /*visible*/
        n[5]
      ),
      elem_id: (
        /*elem_id*/
        n[3]
      ),
      elem_classes: (
        /*elem_classes*/
        n[4]
      ),
      scale: (
        /*scale*/
        n[8]
      ),
      min_width: (
        /*min_width*/
        n[9]
      ),
      allow_overflow: !1,
      padding: !0,
      $$slots: { default: [hn] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      we(e.$$.fragment);
    },
    m(l, i) {
      ye(e, l, i), t = !0;
    },
    p(l, [i]) {
      const s = {};
      i & /*visible*/
      32 && (s.visible = /*visible*/
      l[5]), i & /*elem_id*/
      8 && (s.elem_id = /*elem_id*/
      l[3]), i & /*elem_classes*/
      16 && (s.elem_classes = /*elem_classes*/
      l[4]), i & /*scale*/
      256 && (s.scale = /*scale*/
      l[8]), i & /*min_width*/
      512 && (s.min_width = /*min_width*/
      l[9]), i & /*$$scope, placeholder, interactive, rtl, value, el, type, show_label, label, gradio, loading_status*/
      4226247 && (s.$$scope = { dirty: i, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (K(e.$$.fragment, l), t = !0);
    },
    o(l) {
      ne(e.$$.fragment, l), t = !1;
    },
    d(l) {
      ke(e, l);
    }
  };
}
const wn = !0;
function kn(n, e, t) {
  let { gradio: l } = e, { label: i = "Textbox" } = e, { elem_id: s = "" } = e, { elem_classes: f = [] } = e, { visible: o = !0 } = e, { value: _ = "" } = e, { placeholder: r = "" } = e, { show_label: a } = e, { scale: c = null } = e, { min_width: w = void 0 } = e, { loading_status: p = void 0 } = e, { value_is_output: k = !1 } = e, { interactive: S } = e, { rtl: F = !1 } = e, { type: L = "date" } = e, q;
  function u() {
    l.dispatch("change"), k || l.dispatch("input");
  }
  async function y(m) {
    await dn(), m.key === "Enter" && (m.preventDefault(), l.dispatch("submit"));
  }
  function b() {
    _ = this.value, t(0, _);
  }
  function ee(m) {
    $e[m ? "unshift" : "push"](() => {
      q = m, t(14, q);
    });
  }
  function X() {
    _ = this.value, t(0, _);
  }
  function Y(m) {
    $e[m ? "unshift" : "push"](() => {
      q = m, t(14, q);
    });
  }
  return n.$$set = (m) => {
    "gradio" in m && t(1, l = m.gradio), "label" in m && t(2, i = m.label), "elem_id" in m && t(3, s = m.elem_id), "elem_classes" in m && t(4, f = m.elem_classes), "visible" in m && t(5, o = m.visible), "value" in m && t(0, _ = m.value), "placeholder" in m && t(6, r = m.placeholder), "show_label" in m && t(7, a = m.show_label), "scale" in m && t(8, c = m.scale), "min_width" in m && t(9, w = m.min_width), "loading_status" in m && t(10, p = m.loading_status), "value_is_output" in m && t(16, k = m.value_is_output), "interactive" in m && t(11, S = m.interactive), "rtl" in m && t(12, F = m.rtl), "type" in m && t(13, L = m.type);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    1 && _ === null && t(0, _ = ""), n.$$.dirty & /*value*/
    1 && u();
  }, [
    _,
    l,
    i,
    s,
    f,
    o,
    r,
    a,
    c,
    w,
    p,
    S,
    F,
    L,
    q,
    y,
    k,
    b,
    ee,
    X,
    Y
  ];
}
class vn extends en {
  constructor(e) {
    super(), _n(this, e, kn, pn, rn, {
      gradio: 1,
      label: 2,
      elem_id: 3,
      elem_classes: 4,
      visible: 5,
      value: 0,
      placeholder: 6,
      show_label: 7,
      scale: 8,
      min_width: 9,
      loading_status: 10,
      value_is_output: 16,
      interactive: 11,
      rtl: 12,
      type: 13
    });
  }
  get gradio() {
    return this.$$.ctx[1];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), V();
  }
  get label() {
    return this.$$.ctx[2];
  }
  set label(e) {
    this.$$set({ label: e }), V();
  }
  get elem_id() {
    return this.$$.ctx[3];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), V();
  }
  get elem_classes() {
    return this.$$.ctx[4];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), V();
  }
  get visible() {
    return this.$$.ctx[5];
  }
  set visible(e) {
    this.$$set({ visible: e }), V();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), V();
  }
  get placeholder() {
    return this.$$.ctx[6];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), V();
  }
  get show_label() {
    return this.$$.ctx[7];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), V();
  }
  get scale() {
    return this.$$.ctx[8];
  }
  set scale(e) {
    this.$$set({ scale: e }), V();
  }
  get min_width() {
    return this.$$.ctx[9];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), V();
  }
  get loading_status() {
    return this.$$.ctx[10];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), V();
  }
  get value_is_output() {
    return this.$$.ctx[16];
  }
  set value_is_output(e) {
    this.$$set({ value_is_output: e }), V();
  }
  get interactive() {
    return this.$$.ctx[11];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), V();
  }
  get rtl() {
    return this.$$.ctx[12];
  }
  set rtl(e) {
    this.$$set({ rtl: e }), V();
  }
  get type() {
    return this.$$.ctx[13];
  }
  set type(e) {
    this.$$set({ type: e }), V();
  }
}
export {
  vn as default
};
