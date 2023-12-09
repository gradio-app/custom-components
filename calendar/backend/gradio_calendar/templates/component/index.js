const {
  SvelteComponent: dt,
  assign: mt,
  create_slot: bt,
  detach: gt,
  element: ht,
  get_all_dirty_from_scope: wt,
  get_slot_changes: pt,
  get_spread_update: kt,
  init: vt,
  insert: yt,
  safe_not_equal: qt,
  set_dynamic_element_data: Ce,
  set_style: M,
  toggle_class: D,
  transition_in: lt,
  transition_out: nt,
  update_slot_base: Ft
} = window.__gradio__svelte__internal;
function Ct(n) {
  let e, t, l;
  const s = (
    /*#slots*/
    n[17].default
  ), i = bt(
    s,
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
    o = mt(o, f[_]);
  return {
    c() {
      e = ht(
        /*tag*/
        n[14]
      ), i && i.c(), Ce(
        /*tag*/
        n[14]
      )(e, o), D(
        e,
        "hidden",
        /*visible*/
        n[10] === !1
      ), D(
        e,
        "padded",
        /*padding*/
        n[6]
      ), D(
        e,
        "border_focus",
        /*border_mode*/
        n[5] === "focus"
      ), D(e, "hide-container", !/*explicit_call*/
      n[8] && !/*container*/
      n[9]), M(e, "height", typeof /*height*/
      n[0] == "number" ? (
        /*height*/
        n[0] + "px"
      ) : void 0), M(e, "width", typeof /*width*/
      n[1] == "number" ? `calc(min(${/*width*/
      n[1]}px, 100%))` : void 0), M(
        e,
        "border-style",
        /*variant*/
        n[4]
      ), M(
        e,
        "overflow",
        /*allow_overflow*/
        n[11] ? "visible" : "hidden"
      ), M(
        e,
        "flex-grow",
        /*scale*/
        n[12]
      ), M(e, "min-width", `calc(min(${/*min_width*/
      n[13]}px, 100%))`), M(e, "border-width", "var(--block-border-width)");
    },
    m(_, r) {
      yt(_, e, r), i && i.m(e, null), l = !0;
    },
    p(_, r) {
      i && i.p && (!l || r & /*$$scope*/
      65536) && Ft(
        i,
        s,
        _,
        /*$$scope*/
        _[16],
        l ? pt(
          s,
          /*$$scope*/
          _[16],
          r,
          null
        ) : wt(
          /*$$scope*/
          _[16]
        ),
        null
      ), Ce(
        /*tag*/
        _[14]
      )(e, o = kt(f, [
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
      ])), D(
        e,
        "hidden",
        /*visible*/
        _[10] === !1
      ), D(
        e,
        "padded",
        /*padding*/
        _[6]
      ), D(
        e,
        "border_focus",
        /*border_mode*/
        _[5] === "focus"
      ), D(e, "hide-container", !/*explicit_call*/
      _[8] && !/*container*/
      _[9]), r & /*height*/
      1 && M(e, "height", typeof /*height*/
      _[0] == "number" ? (
        /*height*/
        _[0] + "px"
      ) : void 0), r & /*width*/
      2 && M(e, "width", typeof /*width*/
      _[1] == "number" ? `calc(min(${/*width*/
      _[1]}px, 100%))` : void 0), r & /*variant*/
      16 && M(
        e,
        "border-style",
        /*variant*/
        _[4]
      ), r & /*allow_overflow*/
      2048 && M(
        e,
        "overflow",
        /*allow_overflow*/
        _[11] ? "visible" : "hidden"
      ), r & /*scale*/
      4096 && M(
        e,
        "flex-grow",
        /*scale*/
        _[12]
      ), r & /*min_width*/
      8192 && M(e, "min-width", `calc(min(${/*min_width*/
      _[13]}px, 100%))`);
    },
    i(_) {
      l || (lt(i, _), l = !0);
    },
    o(_) {
      nt(i, _), l = !1;
    },
    d(_) {
      _ && gt(e), i && i.d(_);
    }
  };
}
function Lt(n) {
  let e, t = (
    /*tag*/
    n[14] && Ct(n)
  );
  return {
    c() {
      t && t.c();
    },
    m(l, s) {
      t && t.m(l, s), e = !0;
    },
    p(l, [s]) {
      /*tag*/
      l[14] && t.p(l, s);
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
function St(n, e, t) {
  let { $$slots: l = {}, $$scope: s } = e, { height: i = void 0 } = e, { width: f = void 0 } = e, { elem_id: o = "" } = e, { elem_classes: _ = [] } = e, { variant: r = "solid" } = e, { border_mode: a = "base" } = e, { padding: u = !0 } = e, { type: d = "normal" } = e, { test_id: m = void 0 } = e, { explicit_call: k = !1 } = e, { container: S = !0 } = e, { visible: q = !0 } = e, { allow_overflow: L = !0 } = e, { scale: F = null } = e, { min_width: c = 0 } = e, y = d === "fieldset" ? "fieldset" : "div";
  return n.$$set = (g) => {
    "height" in g && t(0, i = g.height), "width" in g && t(1, f = g.width), "elem_id" in g && t(2, o = g.elem_id), "elem_classes" in g && t(3, _ = g.elem_classes), "variant" in g && t(4, r = g.variant), "border_mode" in g && t(5, a = g.border_mode), "padding" in g && t(6, u = g.padding), "type" in g && t(15, d = g.type), "test_id" in g && t(7, m = g.test_id), "explicit_call" in g && t(8, k = g.explicit_call), "container" in g && t(9, S = g.container), "visible" in g && t(10, q = g.visible), "allow_overflow" in g && t(11, L = g.allow_overflow), "scale" in g && t(12, F = g.scale), "min_width" in g && t(13, c = g.min_width), "$$scope" in g && t(16, s = g.$$scope);
  }, [
    i,
    f,
    o,
    _,
    r,
    a,
    u,
    m,
    k,
    S,
    q,
    L,
    F,
    c,
    y,
    d,
    s,
    l
  ];
}
class Vt extends dt {
  constructor(e) {
    super(), vt(this, e, St, Lt, qt, {
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
  SvelteComponent: Mt,
  attr: Nt,
  create_slot: zt,
  detach: Tt,
  element: jt,
  get_all_dirty_from_scope: Pt,
  get_slot_changes: Zt,
  init: Bt,
  insert: At,
  safe_not_equal: Dt,
  transition_in: It,
  transition_out: Et,
  update_slot_base: Xt
} = window.__gradio__svelte__internal;
function Yt(n) {
  let e, t;
  const l = (
    /*#slots*/
    n[1].default
  ), s = zt(
    l,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = jt("div"), s && s.c(), Nt(e, "class", "svelte-1hnfib2");
    },
    m(i, f) {
      At(i, e, f), s && s.m(e, null), t = !0;
    },
    p(i, [f]) {
      s && s.p && (!t || f & /*$$scope*/
      1) && Xt(
        s,
        l,
        i,
        /*$$scope*/
        i[0],
        t ? Zt(
          l,
          /*$$scope*/
          i[0],
          f,
          null
        ) : Pt(
          /*$$scope*/
          i[0]
        ),
        null
      );
    },
    i(i) {
      t || (It(s, i), t = !0);
    },
    o(i) {
      Et(s, i), t = !1;
    },
    d(i) {
      i && Tt(e), s && s.d(i);
    }
  };
}
function Gt(n, e, t) {
  let { $$slots: l = {}, $$scope: s } = e;
  return n.$$set = (i) => {
    "$$scope" in i && t(0, s = i.$$scope);
  }, [s, l];
}
class Ot extends Mt {
  constructor(e) {
    super(), Bt(this, e, Gt, Yt, Dt, {});
  }
}
const {
  SvelteComponent: Rt,
  attr: Le,
  check_outros: Ut,
  create_component: Ht,
  create_slot: Jt,
  destroy_component: Kt,
  detach: fe,
  element: Qt,
  empty: Wt,
  get_all_dirty_from_scope: xt,
  get_slot_changes: $t,
  group_outros: el,
  init: tl,
  insert: oe,
  mount_component: ll,
  safe_not_equal: nl,
  set_data: il,
  space: sl,
  text: fl,
  toggle_class: O,
  transition_in: te,
  transition_out: _e,
  update_slot_base: ol
} = window.__gradio__svelte__internal;
function Se(n) {
  let e, t;
  return e = new Ot({
    props: {
      $$slots: { default: [_l] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Ht(e.$$.fragment);
    },
    m(l, s) {
      ll(e, l, s), t = !0;
    },
    p(l, s) {
      const i = {};
      s & /*$$scope, info*/
      10 && (i.$$scope = { dirty: s, ctx: l }), e.$set(i);
    },
    i(l) {
      t || (te(e.$$.fragment, l), t = !0);
    },
    o(l) {
      _e(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Kt(e, l);
    }
  };
}
function _l(n) {
  let e;
  return {
    c() {
      e = fl(
        /*info*/
        n[1]
      );
    },
    m(t, l) {
      oe(t, e, l);
    },
    p(t, l) {
      l & /*info*/
      2 && il(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && fe(e);
    }
  };
}
function rl(n) {
  let e, t, l, s;
  const i = (
    /*#slots*/
    n[2].default
  ), f = Jt(
    i,
    n,
    /*$$scope*/
    n[3],
    null
  );
  let o = (
    /*info*/
    n[1] && Se(n)
  );
  return {
    c() {
      e = Qt("span"), f && f.c(), t = sl(), o && o.c(), l = Wt(), Le(e, "data-testid", "block-info"), Le(e, "class", "svelte-22c38v"), O(e, "sr-only", !/*show_label*/
      n[0]), O(e, "hide", !/*show_label*/
      n[0]), O(
        e,
        "has-info",
        /*info*/
        n[1] != null
      );
    },
    m(_, r) {
      oe(_, e, r), f && f.m(e, null), oe(_, t, r), o && o.m(_, r), oe(_, l, r), s = !0;
    },
    p(_, [r]) {
      f && f.p && (!s || r & /*$$scope*/
      8) && ol(
        f,
        i,
        _,
        /*$$scope*/
        _[3],
        s ? $t(
          i,
          /*$$scope*/
          _[3],
          r,
          null
        ) : xt(
          /*$$scope*/
          _[3]
        ),
        null
      ), (!s || r & /*show_label*/
      1) && O(e, "sr-only", !/*show_label*/
      _[0]), (!s || r & /*show_label*/
      1) && O(e, "hide", !/*show_label*/
      _[0]), (!s || r & /*info*/
      2) && O(
        e,
        "has-info",
        /*info*/
        _[1] != null
      ), /*info*/
      _[1] ? o ? (o.p(_, r), r & /*info*/
      2 && te(o, 1)) : (o = Se(_), o.c(), te(o, 1), o.m(l.parentNode, l)) : o && (el(), _e(o, 1, 1, () => {
        o = null;
      }), Ut());
    },
    i(_) {
      s || (te(f, _), te(o), s = !0);
    },
    o(_) {
      _e(f, _), _e(o), s = !1;
    },
    d(_) {
      _ && (fe(e), fe(t), fe(l)), f && f.d(_), o && o.d(_);
    }
  };
}
function al(n, e, t) {
  let { $$slots: l = {}, $$scope: s } = e, { show_label: i = !0 } = e, { info: f = void 0 } = e;
  return n.$$set = (o) => {
    "show_label" in o && t(0, i = o.show_label), "info" in o && t(1, f = o.info), "$$scope" in o && t(3, s = o.$$scope);
  }, [i, f, l, s];
}
class ul extends Rt {
  constructor(e) {
    super(), tl(this, e, al, rl, nl, { show_label: 0, info: 1 });
  }
}
const cl = [
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
], Ve = {
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
cl.reduce(
  (n, { color: e, primary: t, secondary: l }) => ({
    ...n,
    [e]: {
      primary: Ve[e][t],
      secondary: Ve[e][l]
    }
  }),
  {}
);
function U(n) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; n > 1e3 && t < e.length - 1; )
    n /= 1e3, t++;
  let l = e[t];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + l;
}
function re() {
}
function dl(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
const it = typeof window < "u";
let Me = it ? () => window.performance.now() : () => Date.now(), st = it ? (n) => requestAnimationFrame(n) : re;
const J = /* @__PURE__ */ new Set();
function ft(n) {
  J.forEach((e) => {
    e.c(n) || (J.delete(e), e.f());
  }), J.size !== 0 && st(ft);
}
function ml(n) {
  let e;
  return J.size === 0 && st(ft), {
    promise: new Promise((t) => {
      J.add(e = { c: n, f: t });
    }),
    abort() {
      J.delete(e);
    }
  };
}
const R = [];
function bl(n, e = re) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function s(o) {
    if (dl(n, o) && (n = o, t)) {
      const _ = !R.length;
      for (const r of l)
        r[1](), R.push(r, n);
      if (_) {
        for (let r = 0; r < R.length; r += 2)
          R[r][0](R[r + 1]);
        R.length = 0;
      }
    }
  }
  function i(o) {
    s(o(n));
  }
  function f(o, _ = re) {
    const r = [o, _];
    return l.add(r), l.size === 1 && (t = e(s, i) || re), o(n), () => {
      l.delete(r), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: s, update: i, subscribe: f };
}
function Ne(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function de(n, e, t, l) {
  if (typeof t == "number" || Ne(t)) {
    const s = l - t, i = (t - e) / (n.dt || 1 / 60), f = n.opts.stiffness * s, o = n.opts.damping * i, _ = (f - o) * n.inv_mass, r = (i + _) * n.dt;
    return Math.abs(r) < n.opts.precision && Math.abs(s) < n.opts.precision ? l : (n.settled = !1, Ne(t) ? new Date(t.getTime() + r) : t + r);
  } else {
    if (Array.isArray(t))
      return t.map(
        (s, i) => de(n, e[i], t[i], l[i])
      );
    if (typeof t == "object") {
      const s = {};
      for (const i in t)
        s[i] = de(n, e[i], t[i], l[i]);
      return s;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function ze(n, e = {}) {
  const t = bl(n), { stiffness: l = 0.15, damping: s = 0.8, precision: i = 0.01 } = e;
  let f, o, _, r = n, a = n, u = 1, d = 0, m = !1;
  function k(q, L = {}) {
    a = q;
    const F = _ = {};
    return n == null || L.hard || S.stiffness >= 1 && S.damping >= 1 ? (m = !0, f = Me(), r = q, t.set(n = a), Promise.resolve()) : (L.soft && (d = 1 / ((L.soft === !0 ? 0.5 : +L.soft) * 60), u = 0), o || (f = Me(), m = !1, o = ml((c) => {
      if (m)
        return m = !1, o = null, !1;
      u = Math.min(u + d, 1);
      const y = {
        inv_mass: u,
        opts: S,
        settled: !0,
        dt: (c - f) * 60 / 1e3
      }, g = de(y, r, n, a);
      return f = c, r = n, t.set(n = g), y.settled && (o = null), !y.settled;
    })), new Promise((c) => {
      o.promise.then(() => {
        F === _ && c();
      });
    }));
  }
  const S = {
    set: k,
    update: (q, L) => k(q(a, n), L),
    subscribe: t.subscribe,
    stiffness: l,
    damping: s,
    precision: i
  };
  return S;
}
const {
  SvelteComponent: gl,
  append: T,
  attr: v,
  component_subscribe: Te,
  detach: hl,
  element: wl,
  init: pl,
  insert: kl,
  noop: je,
  safe_not_equal: vl,
  set_style: ie,
  svg_element: j,
  toggle_class: Pe
} = window.__gradio__svelte__internal, { onMount: yl } = window.__gradio__svelte__internal;
function ql(n) {
  let e, t, l, s, i, f, o, _, r, a, u, d;
  return {
    c() {
      e = wl("div"), t = j("svg"), l = j("g"), s = j("path"), i = j("path"), f = j("path"), o = j("path"), _ = j("g"), r = j("path"), a = j("path"), u = j("path"), d = j("path"), v(s, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), v(s, "fill", "#FF7C00"), v(s, "fill-opacity", "0.4"), v(s, "class", "svelte-43sxxs"), v(i, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), v(i, "fill", "#FF7C00"), v(i, "class", "svelte-43sxxs"), v(f, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), v(f, "fill", "#FF7C00"), v(f, "fill-opacity", "0.4"), v(f, "class", "svelte-43sxxs"), v(o, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), v(o, "fill", "#FF7C00"), v(o, "class", "svelte-43sxxs"), ie(l, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), v(r, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), v(r, "fill", "#FF7C00"), v(r, "fill-opacity", "0.4"), v(r, "class", "svelte-43sxxs"), v(a, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), v(a, "fill", "#FF7C00"), v(a, "class", "svelte-43sxxs"), v(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), v(u, "fill", "#FF7C00"), v(u, "fill-opacity", "0.4"), v(u, "class", "svelte-43sxxs"), v(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), v(d, "fill", "#FF7C00"), v(d, "class", "svelte-43sxxs"), ie(_, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), v(t, "viewBox", "-1200 -1200 3000 3000"), v(t, "fill", "none"), v(t, "xmlns", "http://www.w3.org/2000/svg"), v(t, "class", "svelte-43sxxs"), v(e, "class", "svelte-43sxxs"), Pe(
        e,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(m, k) {
      kl(m, e, k), T(e, t), T(t, l), T(l, s), T(l, i), T(l, f), T(l, o), T(t, _), T(_, r), T(_, a), T(_, u), T(_, d);
    },
    p(m, [k]) {
      k & /*$top*/
      2 && ie(l, "transform", "translate(" + /*$top*/
      m[1][0] + "px, " + /*$top*/
      m[1][1] + "px)"), k & /*$bottom*/
      4 && ie(_, "transform", "translate(" + /*$bottom*/
      m[2][0] + "px, " + /*$bottom*/
      m[2][1] + "px)"), k & /*margin*/
      1 && Pe(
        e,
        "margin",
        /*margin*/
        m[0]
      );
    },
    i: je,
    o: je,
    d(m) {
      m && hl(e);
    }
  };
}
function Fl(n, e, t) {
  let l, s, { margin: i = !0 } = e;
  const f = ze([0, 0]);
  Te(n, f, (d) => t(1, l = d));
  const o = ze([0, 0]);
  Te(n, o, (d) => t(2, s = d));
  let _;
  async function r() {
    await Promise.all([f.set([125, 140]), o.set([-125, -140])]), await Promise.all([f.set([-125, 140]), o.set([125, -140])]), await Promise.all([f.set([-125, 0]), o.set([125, -0])]), await Promise.all([f.set([125, 0]), o.set([-125, 0])]);
  }
  async function a() {
    await r(), _ || a();
  }
  async function u() {
    await Promise.all([f.set([125, 0]), o.set([-125, 0])]), a();
  }
  return yl(() => (u(), () => _ = !0)), n.$$set = (d) => {
    "margin" in d && t(0, i = d.margin);
  }, [i, l, s, f, o];
}
class Cl extends gl {
  constructor(e) {
    super(), pl(this, e, Fl, ql, vl, { margin: 0 });
  }
}
const {
  SvelteComponent: Ll,
  append: G,
  attr: P,
  binding_callbacks: Ze,
  check_outros: ot,
  create_component: Sl,
  create_slot: Vl,
  destroy_component: Ml,
  destroy_each: _t,
  detach: h,
  element: B,
  empty: W,
  ensure_array_like: ae,
  get_all_dirty_from_scope: Nl,
  get_slot_changes: zl,
  group_outros: rt,
  init: Tl,
  insert: w,
  mount_component: jl,
  noop: me,
  safe_not_equal: Pl,
  set_data: z,
  set_style: E,
  space: Z,
  text: C,
  toggle_class: N,
  transition_in: K,
  transition_out: Q,
  update_slot_base: Zl
} = window.__gradio__svelte__internal, { tick: Bl } = window.__gradio__svelte__internal, { onDestroy: Al } = window.__gradio__svelte__internal, Dl = (n) => ({}), Be = (n) => ({});
function Ae(n, e, t) {
  const l = n.slice();
  return l[38] = e[t], l[40] = t, l;
}
function De(n, e, t) {
  const l = n.slice();
  return l[38] = e[t], l;
}
function Il(n) {
  let e, t = (
    /*i18n*/
    n[1]("common.error") + ""
  ), l, s, i;
  const f = (
    /*#slots*/
    n[29].error
  ), o = Vl(
    f,
    n,
    /*$$scope*/
    n[28],
    Be
  );
  return {
    c() {
      e = B("span"), l = C(t), s = Z(), o && o.c(), P(e, "class", "error svelte-1txqlrd");
    },
    m(_, r) {
      w(_, e, r), G(e, l), w(_, s, r), o && o.m(_, r), i = !0;
    },
    p(_, r) {
      (!i || r[0] & /*i18n*/
      2) && t !== (t = /*i18n*/
      _[1]("common.error") + "") && z(l, t), o && o.p && (!i || r[0] & /*$$scope*/
      268435456) && Zl(
        o,
        f,
        _,
        /*$$scope*/
        _[28],
        i ? zl(
          f,
          /*$$scope*/
          _[28],
          r,
          Dl
        ) : Nl(
          /*$$scope*/
          _[28]
        ),
        Be
      );
    },
    i(_) {
      i || (K(o, _), i = !0);
    },
    o(_) {
      Q(o, _), i = !1;
    },
    d(_) {
      _ && (h(e), h(s)), o && o.d(_);
    }
  };
}
function El(n) {
  let e, t, l, s, i, f, o, _, r, a = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && Ie(n)
  );
  function u(c, y) {
    if (
      /*progress*/
      c[7]
    )
      return Gl;
    if (
      /*queue_position*/
      c[2] !== null && /*queue_size*/
      c[3] !== void 0 && /*queue_position*/
      c[2] >= 0
    )
      return Yl;
    if (
      /*queue_position*/
      c[2] === 0
    )
      return Xl;
  }
  let d = u(n), m = d && d(n), k = (
    /*timer*/
    n[5] && Ye(n)
  );
  const S = [Hl, Ul], q = [];
  function L(c, y) {
    return (
      /*last_progress_level*/
      c[15] != null ? 0 : (
        /*show_progress*/
        c[6] === "full" ? 1 : -1
      )
    );
  }
  ~(i = L(n)) && (f = q[i] = S[i](n));
  let F = !/*timer*/
  n[5] && Ke(n);
  return {
    c() {
      a && a.c(), e = Z(), t = B("div"), m && m.c(), l = Z(), k && k.c(), s = Z(), f && f.c(), o = Z(), F && F.c(), _ = W(), P(t, "class", "progress-text svelte-1txqlrd"), N(
        t,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), N(
        t,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(c, y) {
      a && a.m(c, y), w(c, e, y), w(c, t, y), m && m.m(t, null), G(t, l), k && k.m(t, null), w(c, s, y), ~i && q[i].m(c, y), w(c, o, y), F && F.m(c, y), w(c, _, y), r = !0;
    },
    p(c, y) {
      /*variant*/
      c[8] === "default" && /*show_eta_bar*/
      c[18] && /*show_progress*/
      c[6] === "full" ? a ? a.p(c, y) : (a = Ie(c), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), d === (d = u(c)) && m ? m.p(c, y) : (m && m.d(1), m = d && d(c), m && (m.c(), m.m(t, l))), /*timer*/
      c[5] ? k ? k.p(c, y) : (k = Ye(c), k.c(), k.m(t, null)) : k && (k.d(1), k = null), (!r || y[0] & /*variant*/
      256) && N(
        t,
        "meta-text-center",
        /*variant*/
        c[8] === "center"
      ), (!r || y[0] & /*variant*/
      256) && N(
        t,
        "meta-text",
        /*variant*/
        c[8] === "default"
      );
      let g = i;
      i = L(c), i === g ? ~i && q[i].p(c, y) : (f && (rt(), Q(q[g], 1, 1, () => {
        q[g] = null;
      }), ot()), ~i ? (f = q[i], f ? f.p(c, y) : (f = q[i] = S[i](c), f.c()), K(f, 1), f.m(o.parentNode, o)) : f = null), /*timer*/
      c[5] ? F && (F.d(1), F = null) : F ? F.p(c, y) : (F = Ke(c), F.c(), F.m(_.parentNode, _));
    },
    i(c) {
      r || (K(f), r = !0);
    },
    o(c) {
      Q(f), r = !1;
    },
    d(c) {
      c && (h(e), h(t), h(s), h(o), h(_)), a && a.d(c), m && m.d(), k && k.d(), ~i && q[i].d(c), F && F.d(c);
    }
  };
}
function Ie(n) {
  let e, t = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = B("div"), P(e, "class", "eta-bar svelte-1txqlrd"), E(e, "transform", t);
    },
    m(l, s) {
      w(l, e, s);
    },
    p(l, s) {
      s[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (l[17] || 0) * 100 - 100}%)`) && E(e, "transform", t);
    },
    d(l) {
      l && h(e);
    }
  };
}
function Xl(n) {
  let e;
  return {
    c() {
      e = C("processing |");
    },
    m(t, l) {
      w(t, e, l);
    },
    p: me,
    d(t) {
      t && h(e);
    }
  };
}
function Yl(n) {
  let e, t = (
    /*queue_position*/
    n[2] + 1 + ""
  ), l, s, i, f;
  return {
    c() {
      e = C("queue: "), l = C(t), s = C("/"), i = C(
        /*queue_size*/
        n[3]
      ), f = C(" |");
    },
    m(o, _) {
      w(o, e, _), w(o, l, _), w(o, s, _), w(o, i, _), w(o, f, _);
    },
    p(o, _) {
      _[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      o[2] + 1 + "") && z(l, t), _[0] & /*queue_size*/
      8 && z(
        i,
        /*queue_size*/
        o[3]
      );
    },
    d(o) {
      o && (h(e), h(l), h(s), h(i), h(f));
    }
  };
}
function Gl(n) {
  let e, t = ae(
    /*progress*/
    n[7]
  ), l = [];
  for (let s = 0; s < t.length; s += 1)
    l[s] = Xe(De(n, t, s));
  return {
    c() {
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      e = W();
    },
    m(s, i) {
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(s, i);
      w(s, e, i);
    },
    p(s, i) {
      if (i[0] & /*progress*/
      128) {
        t = ae(
          /*progress*/
          s[7]
        );
        let f;
        for (f = 0; f < t.length; f += 1) {
          const o = De(s, t, f);
          l[f] ? l[f].p(o, i) : (l[f] = Xe(o), l[f].c(), l[f].m(e.parentNode, e));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = t.length;
      }
    },
    d(s) {
      s && h(e), _t(l, s);
    }
  };
}
function Ee(n) {
  let e, t = (
    /*p*/
    n[38].unit + ""
  ), l, s, i = " ", f;
  function o(a, u) {
    return (
      /*p*/
      a[38].length != null ? Rl : Ol
    );
  }
  let _ = o(n), r = _(n);
  return {
    c() {
      r.c(), e = Z(), l = C(t), s = C(" | "), f = C(i);
    },
    m(a, u) {
      r.m(a, u), w(a, e, u), w(a, l, u), w(a, s, u), w(a, f, u);
    },
    p(a, u) {
      _ === (_ = o(a)) && r ? r.p(a, u) : (r.d(1), r = _(a), r && (r.c(), r.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      a[38].unit + "") && z(l, t);
    },
    d(a) {
      a && (h(e), h(l), h(s), h(f)), r.d(a);
    }
  };
}
function Ol(n) {
  let e = U(
    /*p*/
    n[38].index || 0
  ) + "", t;
  return {
    c() {
      t = C(e);
    },
    m(l, s) {
      w(l, t, s);
    },
    p(l, s) {
      s[0] & /*progress*/
      128 && e !== (e = U(
        /*p*/
        l[38].index || 0
      ) + "") && z(t, e);
    },
    d(l) {
      l && h(t);
    }
  };
}
function Rl(n) {
  let e = U(
    /*p*/
    n[38].index || 0
  ) + "", t, l, s = U(
    /*p*/
    n[38].length
  ) + "", i;
  return {
    c() {
      t = C(e), l = C("/"), i = C(s);
    },
    m(f, o) {
      w(f, t, o), w(f, l, o), w(f, i, o);
    },
    p(f, o) {
      o[0] & /*progress*/
      128 && e !== (e = U(
        /*p*/
        f[38].index || 0
      ) + "") && z(t, e), o[0] & /*progress*/
      128 && s !== (s = U(
        /*p*/
        f[38].length
      ) + "") && z(i, s);
    },
    d(f) {
      f && (h(t), h(l), h(i));
    }
  };
}
function Xe(n) {
  let e, t = (
    /*p*/
    n[38].index != null && Ee(n)
  );
  return {
    c() {
      t && t.c(), e = W();
    },
    m(l, s) {
      t && t.m(l, s), w(l, e, s);
    },
    p(l, s) {
      /*p*/
      l[38].index != null ? t ? t.p(l, s) : (t = Ee(l), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(l) {
      l && h(e), t && t.d(l);
    }
  };
}
function Ye(n) {
  let e, t = (
    /*eta*/
    n[0] ? `/${/*formatted_eta*/
    n[19]}` : ""
  ), l, s;
  return {
    c() {
      e = C(
        /*formatted_timer*/
        n[20]
      ), l = C(t), s = C("s");
    },
    m(i, f) {
      w(i, e, f), w(i, l, f), w(i, s, f);
    },
    p(i, f) {
      f[0] & /*formatted_timer*/
      1048576 && z(
        e,
        /*formatted_timer*/
        i[20]
      ), f[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      i[0] ? `/${/*formatted_eta*/
      i[19]}` : "") && z(l, t);
    },
    d(i) {
      i && (h(e), h(l), h(s));
    }
  };
}
function Ul(n) {
  let e, t;
  return e = new Cl({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      Sl(e.$$.fragment);
    },
    m(l, s) {
      jl(e, l, s), t = !0;
    },
    p(l, s) {
      const i = {};
      s[0] & /*variant*/
      256 && (i.margin = /*variant*/
      l[8] === "default"), e.$set(i);
    },
    i(l) {
      t || (K(e.$$.fragment, l), t = !0);
    },
    o(l) {
      Q(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Ml(e, l);
    }
  };
}
function Hl(n) {
  let e, t, l, s, i, f = `${/*last_progress_level*/
  n[15] * 100}%`, o = (
    /*progress*/
    n[7] != null && Ge(n)
  );
  return {
    c() {
      e = B("div"), t = B("div"), o && o.c(), l = Z(), s = B("div"), i = B("div"), P(t, "class", "progress-level-inner svelte-1txqlrd"), P(i, "class", "progress-bar svelte-1txqlrd"), E(i, "width", f), P(s, "class", "progress-bar-wrap svelte-1txqlrd"), P(e, "class", "progress-level svelte-1txqlrd");
    },
    m(_, r) {
      w(_, e, r), G(e, t), o && o.m(t, null), G(e, l), G(e, s), G(s, i), n[30](i);
    },
    p(_, r) {
      /*progress*/
      _[7] != null ? o ? o.p(_, r) : (o = Ge(_), o.c(), o.m(t, null)) : o && (o.d(1), o = null), r[0] & /*last_progress_level*/
      32768 && f !== (f = `${/*last_progress_level*/
      _[15] * 100}%`) && E(i, "width", f);
    },
    i: me,
    o: me,
    d(_) {
      _ && h(e), o && o.d(), n[30](null);
    }
  };
}
function Ge(n) {
  let e, t = ae(
    /*progress*/
    n[7]
  ), l = [];
  for (let s = 0; s < t.length; s += 1)
    l[s] = Je(Ae(n, t, s));
  return {
    c() {
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      e = W();
    },
    m(s, i) {
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(s, i);
      w(s, e, i);
    },
    p(s, i) {
      if (i[0] & /*progress_level, progress*/
      16512) {
        t = ae(
          /*progress*/
          s[7]
        );
        let f;
        for (f = 0; f < t.length; f += 1) {
          const o = Ae(s, t, f);
          l[f] ? l[f].p(o, i) : (l[f] = Je(o), l[f].c(), l[f].m(e.parentNode, e));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = t.length;
      }
    },
    d(s) {
      s && h(e), _t(l, s);
    }
  };
}
function Oe(n) {
  let e, t, l, s, i = (
    /*i*/
    n[40] !== 0 && Jl()
  ), f = (
    /*p*/
    n[38].desc != null && Re(n)
  ), o = (
    /*p*/
    n[38].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[40]
    ] != null && Ue()
  ), _ = (
    /*progress_level*/
    n[14] != null && He(n)
  );
  return {
    c() {
      i && i.c(), e = Z(), f && f.c(), t = Z(), o && o.c(), l = Z(), _ && _.c(), s = W();
    },
    m(r, a) {
      i && i.m(r, a), w(r, e, a), f && f.m(r, a), w(r, t, a), o && o.m(r, a), w(r, l, a), _ && _.m(r, a), w(r, s, a);
    },
    p(r, a) {
      /*p*/
      r[38].desc != null ? f ? f.p(r, a) : (f = Re(r), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), /*p*/
      r[38].desc != null && /*progress_level*/
      r[14] && /*progress_level*/
      r[14][
        /*i*/
        r[40]
      ] != null ? o || (o = Ue(), o.c(), o.m(l.parentNode, l)) : o && (o.d(1), o = null), /*progress_level*/
      r[14] != null ? _ ? _.p(r, a) : (_ = He(r), _.c(), _.m(s.parentNode, s)) : _ && (_.d(1), _ = null);
    },
    d(r) {
      r && (h(e), h(t), h(l), h(s)), i && i.d(r), f && f.d(r), o && o.d(r), _ && _.d(r);
    }
  };
}
function Jl(n) {
  let e;
  return {
    c() {
      e = C(" /");
    },
    m(t, l) {
      w(t, e, l);
    },
    d(t) {
      t && h(e);
    }
  };
}
function Re(n) {
  let e = (
    /*p*/
    n[38].desc + ""
  ), t;
  return {
    c() {
      t = C(e);
    },
    m(l, s) {
      w(l, t, s);
    },
    p(l, s) {
      s[0] & /*progress*/
      128 && e !== (e = /*p*/
      l[38].desc + "") && z(t, e);
    },
    d(l) {
      l && h(t);
    }
  };
}
function Ue(n) {
  let e;
  return {
    c() {
      e = C("-");
    },
    m(t, l) {
      w(t, e, l);
    },
    d(t) {
      t && h(e);
    }
  };
}
function He(n) {
  let e = (100 * /*progress_level*/
  (n[14][
    /*i*/
    n[40]
  ] || 0)).toFixed(1) + "", t, l;
  return {
    c() {
      t = C(e), l = C("%");
    },
    m(s, i) {
      w(s, t, i), w(s, l, i);
    },
    p(s, i) {
      i[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (s[14][
        /*i*/
        s[40]
      ] || 0)).toFixed(1) + "") && z(t, e);
    },
    d(s) {
      s && (h(t), h(l));
    }
  };
}
function Je(n) {
  let e, t = (
    /*p*/
    (n[38].desc != null || /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[40]
    ] != null) && Oe(n)
  );
  return {
    c() {
      t && t.c(), e = W();
    },
    m(l, s) {
      t && t.m(l, s), w(l, e, s);
    },
    p(l, s) {
      /*p*/
      l[38].desc != null || /*progress_level*/
      l[14] && /*progress_level*/
      l[14][
        /*i*/
        l[40]
      ] != null ? t ? t.p(l, s) : (t = Oe(l), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(l) {
      l && h(e), t && t.d(l);
    }
  };
}
function Ke(n) {
  let e, t;
  return {
    c() {
      e = B("p"), t = C(
        /*loading_text*/
        n[9]
      ), P(e, "class", "loading svelte-1txqlrd");
    },
    m(l, s) {
      w(l, e, s), G(e, t);
    },
    p(l, s) {
      s[0] & /*loading_text*/
      512 && z(
        t,
        /*loading_text*/
        l[9]
      );
    },
    d(l) {
      l && h(e);
    }
  };
}
function Kl(n) {
  let e, t, l, s, i;
  const f = [El, Il], o = [];
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
      e = B("div"), l && l.c(), P(e, "class", s = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-1txqlrd"), N(e, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden"), N(
        e,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), N(
        e,
        "generating",
        /*status*/
        n[4] === "generating"
      ), N(
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
      w(r, e, a), ~t && o[t].m(e, null), n[31](e), i = !0;
    },
    p(r, a) {
      let u = t;
      t = _(r), t === u ? ~t && o[t].p(r, a) : (l && (rt(), Q(o[u], 1, 1, () => {
        o[u] = null;
      }), ot()), ~t ? (l = o[t], l ? l.p(r, a) : (l = o[t] = f[t](r), l.c()), K(l, 1), l.m(e, null)) : l = null), (!i || a[0] & /*variant, show_progress*/
      320 && s !== (s = "wrap " + /*variant*/
      r[8] + " " + /*show_progress*/
      r[6] + " svelte-1txqlrd")) && P(e, "class", s), (!i || a[0] & /*variant, show_progress, status, show_progress*/
      336) && N(e, "hide", !/*status*/
      r[4] || /*status*/
      r[4] === "complete" || /*show_progress*/
      r[6] === "hidden"), (!i || a[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && N(
        e,
        "translucent",
        /*variant*/
        r[8] === "center" && /*status*/
        (r[4] === "pending" || /*status*/
        r[4] === "error") || /*translucent*/
        r[11] || /*show_progress*/
        r[6] === "minimal"
      ), (!i || a[0] & /*variant, show_progress, status*/
      336) && N(
        e,
        "generating",
        /*status*/
        r[4] === "generating"
      ), (!i || a[0] & /*variant, show_progress, border*/
      4416) && N(
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
      i || (K(l), i = !0);
    },
    o(r) {
      Q(l), i = !1;
    },
    d(r) {
      r && h(e), ~t && o[t].d(), n[31](null);
    }
  };
}
let se = [], ce = !1;
async function Ql(n, e = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && e !== !0)) {
    if (se.push(n), !ce)
      ce = !0;
    else
      return;
    await Bl(), requestAnimationFrame(() => {
      let t = [0, 0];
      for (let l = 0; l < se.length; l++) {
        const i = se[l].getBoundingClientRect();
        (l === 0 || i.top + window.scrollY <= t[0]) && (t[0] = i.top + window.scrollY, t[1] = l);
      }
      window.scrollTo({ top: t[0] - 20, behavior: "smooth" }), ce = !1, se = [];
    });
  }
}
function Wl(n, e, t) {
  let l, { $$slots: s = {}, $$scope: i } = e, { i18n: f } = e, { eta: o = null } = e, { queue: _ = !1 } = e, { queue_position: r } = e, { queue_size: a } = e, { status: u } = e, { scroll_to_output: d = !1 } = e, { timer: m = !0 } = e, { show_progress: k = "full" } = e, { message: S = null } = e, { progress: q = null } = e, { variant: L = "default" } = e, { loading_text: F = "Loading..." } = e, { absolute: c = !0 } = e, { translucent: y = !1 } = e, { border: g = !1 } = e, { autoscroll: p } = e, x, $ = !1, ne = 0, X = 0, ue = null, ke = 0, Y = null, ee, A = null, ve = !0;
  const at = () => {
    t(25, ne = performance.now()), t(26, X = 0), $ = !0, ye();
  };
  function ye() {
    requestAnimationFrame(() => {
      t(26, X = (performance.now() - ne) / 1e3), $ && ye();
    });
  }
  function qe() {
    t(26, X = 0), $ && ($ = !1);
  }
  Al(() => {
    $ && qe();
  });
  let Fe = null;
  function ut(b) {
    Ze[b ? "unshift" : "push"](() => {
      A = b, t(16, A), t(7, q), t(14, Y), t(15, ee);
    });
  }
  function ct(b) {
    Ze[b ? "unshift" : "push"](() => {
      x = b, t(13, x);
    });
  }
  return n.$$set = (b) => {
    "i18n" in b && t(1, f = b.i18n), "eta" in b && t(0, o = b.eta), "queue" in b && t(21, _ = b.queue), "queue_position" in b && t(2, r = b.queue_position), "queue_size" in b && t(3, a = b.queue_size), "status" in b && t(4, u = b.status), "scroll_to_output" in b && t(22, d = b.scroll_to_output), "timer" in b && t(5, m = b.timer), "show_progress" in b && t(6, k = b.show_progress), "message" in b && t(23, S = b.message), "progress" in b && t(7, q = b.progress), "variant" in b && t(8, L = b.variant), "loading_text" in b && t(9, F = b.loading_text), "absolute" in b && t(10, c = b.absolute), "translucent" in b && t(11, y = b.translucent), "border" in b && t(12, g = b.border), "autoscroll" in b && t(24, p = b.autoscroll), "$$scope" in b && t(28, i = b.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (o === null ? t(0, o = ue) : _ && t(0, o = (performance.now() - ne) / 1e3 + o), o != null && (t(19, Fe = o.toFixed(1)), t(27, ue = o))), n.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && t(17, ke = o === null || o <= 0 || !X ? null : Math.min(X / o, 1)), n.$$.dirty[0] & /*progress*/
    128 && q != null && t(18, ve = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (q != null ? t(14, Y = q.map((b) => {
      if (b.index != null && b.length != null)
        return b.index / b.length;
      if (b.progress != null)
        return b.progress;
    })) : t(14, Y = null), Y ? (t(15, ee = Y[Y.length - 1]), A && (ee === 0 ? t(16, A.style.transition = "0", A) : t(16, A.style.transition = "150ms", A))) : t(15, ee = void 0)), n.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? at() : qe()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && x && d && (u === "pending" || u === "complete") && Ql(x, p), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, l = X.toFixed(1));
  }, [
    o,
    f,
    r,
    a,
    u,
    m,
    k,
    q,
    L,
    F,
    c,
    y,
    g,
    x,
    Y,
    ee,
    A,
    ke,
    ve,
    Fe,
    l,
    _,
    d,
    S,
    p,
    ne,
    X,
    ue,
    i,
    s,
    ut,
    ct
  ];
}
class xl extends Ll {
  constructor(e) {
    super(), Tl(
      this,
      e,
      Wl,
      Kl,
      Pl,
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
  SvelteComponent: $l,
  append: Qe,
  assign: en,
  attr: I,
  binding_callbacks: tn,
  check_outros: ln,
  create_component: he,
  destroy_component: we,
  detach: be,
  element: We,
  flush: V,
  get_spread_object: nn,
  get_spread_update: sn,
  group_outros: fn,
  init: on,
  insert: ge,
  listen: xe,
  mount_component: pe,
  run_all: _n,
  safe_not_equal: rn,
  set_data: an,
  set_input_value: $e,
  space: et,
  text: un,
  toggle_class: cn,
  transition_in: H,
  transition_out: le
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
  let s = {};
  for (let i = 0; i < l.length; i += 1)
    s = en(s, l[i]);
  return e = new xl({ props: s }), {
    c() {
      he(e.$$.fragment);
    },
    m(i, f) {
      pe(e, i, f), t = !0;
    },
    p(i, f) {
      const o = f & /*gradio, loading_status*/
      1026 ? sn(l, [
        f & /*gradio*/
        2 && { autoscroll: (
          /*gradio*/
          i[1].autoscroll
        ) },
        f & /*gradio*/
        2 && { i18n: (
          /*gradio*/
          i[1].i18n
        ) },
        f & /*loading_status*/
        1024 && nn(
          /*loading_status*/
          i[10]
        )
      ]) : {};
      e.$set(o);
    },
    i(i) {
      t || (H(e.$$.fragment, i), t = !0);
    },
    o(i) {
      le(e.$$.fragment, i), t = !1;
    },
    d(i) {
      we(e, i);
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
      ge(t, e, l);
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
      t && be(e);
    }
  };
}
function bn(n) {
  let e, t, l, s, i, f, o, _, r, a, u = (
    /*loading_status*/
    n[10] && tt(n)
  );
  return l = new ul({
    props: {
      show_label: (
        /*show_label*/
        n[7]
      ),
      info: void 0,
      $$slots: { default: [mn] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      u && u.c(), e = et(), t = We("label"), he(l.$$.fragment), s = et(), i = We("input"), I(i, "data-testid", "textbox"), I(i, "type", "date"), I(i, "class", "scroll-hide svelte-2jrh70"), I(
        i,
        "placeholder",
        /*placeholder*/
        n[6]
      ), i.disabled = f = !/*interactive*/
      n[11], I(i, "dir", o = /*rtl*/
      n[12] ? "rtl" : "ltr"), I(t, "class", "svelte-2jrh70"), cn(t, "container", hn);
    },
    m(d, m) {
      u && u.m(d, m), ge(d, e, m), ge(d, t, m), pe(l, t, null), Qe(t, s), Qe(t, i), $e(
        i,
        /*value*/
        n[0]
      ), n[17](i), _ = !0, r || (a = [
        xe(
          i,
          "input",
          /*input_input_handler*/
          n[16]
        ),
        xe(
          i,
          "keypress",
          /*handle_keypress*/
          n[14]
        )
      ], r = !0);
    },
    p(d, m) {
      /*loading_status*/
      d[10] ? u ? (u.p(d, m), m & /*loading_status*/
      1024 && H(u, 1)) : (u = tt(d), u.c(), H(u, 1), u.m(e.parentNode, e)) : u && (fn(), le(u, 1, 1, () => {
        u = null;
      }), ln());
      const k = {};
      m & /*show_label*/
      128 && (k.show_label = /*show_label*/
      d[7]), m & /*$$scope, label*/
      524292 && (k.$$scope = { dirty: m, ctx: d }), l.$set(k), (!_ || m & /*placeholder*/
      64) && I(
        i,
        "placeholder",
        /*placeholder*/
        d[6]
      ), (!_ || m & /*interactive*/
      2048 && f !== (f = !/*interactive*/
      d[11])) && (i.disabled = f), (!_ || m & /*rtl*/
      4096 && o !== (o = /*rtl*/
      d[12] ? "rtl" : "ltr")) && I(i, "dir", o), m & /*value*/
      1 && $e(
        i,
        /*value*/
        d[0]
      );
    },
    i(d) {
      _ || (H(u), H(l.$$.fragment, d), _ = !0);
    },
    o(d) {
      le(u), le(l.$$.fragment, d), _ = !1;
    },
    d(d) {
      d && (be(e), be(t)), u && u.d(d), we(l), n[17](null), r = !1, _n(a);
    }
  };
}
function gn(n) {
  let e, t;
  return e = new Vt({
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
      $$slots: { default: [bn] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      he(e.$$.fragment);
    },
    m(l, s) {
      pe(e, l, s), t = !0;
    },
    p(l, [s]) {
      const i = {};
      s & /*visible*/
      32 && (i.visible = /*visible*/
      l[5]), s & /*elem_id*/
      8 && (i.elem_id = /*elem_id*/
      l[3]), s & /*elem_classes*/
      16 && (i.elem_classes = /*elem_classes*/
      l[4]), s & /*scale*/
      256 && (i.scale = /*scale*/
      l[8]), s & /*min_width*/
      512 && (i.min_width = /*min_width*/
      l[9]), s & /*$$scope, placeholder, interactive, rtl, value, el, show_label, label, gradio, loading_status*/
      539847 && (i.$$scope = { dirty: s, ctx: l }), e.$set(i);
    },
    i(l) {
      t || (H(e.$$.fragment, l), t = !0);
    },
    o(l) {
      le(e.$$.fragment, l), t = !1;
    },
    d(l) {
      we(e, l);
    }
  };
}
const hn = !0;
function wn(n, e, t) {
  let { gradio: l } = e, { label: s = "Textbox" } = e, { elem_id: i = "" } = e, { elem_classes: f = [] } = e, { visible: o = !0 } = e, { value: _ = "" } = e, { placeholder: r = "" } = e, { show_label: a } = e, { scale: u = null } = e, { min_width: d = void 0 } = e, { loading_status: m = void 0 } = e, { value_is_output: k = !1 } = e, { interactive: S } = e, { rtl: q = !1 } = e, L;
  function F() {
    l.dispatch("change"), k || l.dispatch("input");
  }
  async function c(p) {
    await dn(), p.key === "Enter" && (p.preventDefault(), l.dispatch("submit"));
  }
  function y() {
    _ = this.value, t(0, _);
  }
  function g(p) {
    tn[p ? "unshift" : "push"](() => {
      L = p, t(13, L);
    });
  }
  return n.$$set = (p) => {
    "gradio" in p && t(1, l = p.gradio), "label" in p && t(2, s = p.label), "elem_id" in p && t(3, i = p.elem_id), "elem_classes" in p && t(4, f = p.elem_classes), "visible" in p && t(5, o = p.visible), "value" in p && t(0, _ = p.value), "placeholder" in p && t(6, r = p.placeholder), "show_label" in p && t(7, a = p.show_label), "scale" in p && t(8, u = p.scale), "min_width" in p && t(9, d = p.min_width), "loading_status" in p && t(10, m = p.loading_status), "value_is_output" in p && t(15, k = p.value_is_output), "interactive" in p && t(11, S = p.interactive), "rtl" in p && t(12, q = p.rtl);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    1 && _ === null && t(0, _ = ""), n.$$.dirty & /*value*/
    1 && F();
  }, [
    _,
    l,
    s,
    i,
    f,
    o,
    r,
    a,
    u,
    d,
    m,
    S,
    q,
    L,
    c,
    k,
    y,
    g
  ];
}
class pn extends $l {
  constructor(e) {
    super(), on(this, e, wn, gn, rn, {
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
      value_is_output: 15,
      interactive: 11,
      rtl: 12
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
    return this.$$.ctx[15];
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
}
export {
  pn as default
};
