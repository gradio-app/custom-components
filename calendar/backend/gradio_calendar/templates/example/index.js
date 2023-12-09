const {
  SvelteComponent: y,
  add_iframe_resize_listener: b,
  add_render_callback: v,
  append: m,
  attr: h,
  binding_callbacks: p,
  detach: w,
  element: z,
  init: k,
  insert: E,
  noop: f,
  safe_not_equal: S,
  set_data: q,
  text: C,
  toggle_class: _
} = window.__gradio__svelte__internal, { onMount: M } = window.__gradio__svelte__internal;
function P(t) {
  let e, s, r;
  return {
    c() {
      e = z("div"), s = C(
        /*value*/
        t[0]
      ), h(e, "class", "svelte-84cxb8"), v(() => (
        /*div_elementresize_handler*/
        t[5].call(e)
      )), _(
        e,
        "table",
        /*type*/
        t[1] === "table"
      ), _(
        e,
        "gallery",
        /*type*/
        t[1] === "gallery"
      ), _(
        e,
        "selected",
        /*selected*/
        t[2]
      );
    },
    m(l, i) {
      E(l, e, i), m(e, s), r = b(
        e,
        /*div_elementresize_handler*/
        t[5].bind(e)
      ), t[6](e);
    },
    p(l, [i]) {
      i & /*value*/
      1 && q(
        s,
        /*value*/
        l[0]
      ), i & /*type*/
      2 && _(
        e,
        "table",
        /*type*/
        l[1] === "table"
      ), i & /*type*/
      2 && _(
        e,
        "gallery",
        /*type*/
        l[1] === "gallery"
      ), i & /*selected*/
      4 && _(
        e,
        "selected",
        /*selected*/
        l[2]
      );
    },
    i: f,
    o: f,
    d(l) {
      l && w(e), r(), t[6](null);
    }
  };
}
function W(t, e, s) {
  let { value: r } = e, { type: l } = e, { selected: i = !1 } = e, c, a;
  function u(n, d) {
    !n || !d || (a.style.setProperty("--local-text-width", `${d < 150 ? d : 200}px`), s(4, a.style.whiteSpace = "unset", a));
  }
  M(() => {
    u(a, c);
  });
  function o() {
    c = this.clientWidth, s(3, c);
  }
  function g(n) {
    p[n ? "unshift" : "push"](() => {
      a = n, s(4, a);
    });
  }
  return t.$$set = (n) => {
    "value" in n && s(0, r = n.value), "type" in n && s(1, l = n.type), "selected" in n && s(2, i = n.selected);
  }, [r, l, i, c, a, o, g];
}
class j extends y {
  constructor(e) {
    super(), k(this, e, W, P, S, { value: 0, type: 1, selected: 2 });
  }
}
export {
  j as default
};
