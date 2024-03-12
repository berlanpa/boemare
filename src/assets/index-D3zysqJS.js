var rn = Object.defineProperty;
var nn = (a, t, e) => t in a ? rn(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : a[t] = e;
var ht = (a, t, e) => (nn(a, typeof t != "symbol" ? t + "" : t, e), e);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
    new MutationObserver(r => {
        for (const n of r)
            if (n.type === "childList")
                for (const s of n.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && i(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function e(r) {
        const n = {};
        return r.integrity && (n.integrity = r.integrity), r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? n.credentials = "include" : r.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }

    function i(r) {
        if (r.ep) return;
        r.ep = !0;
        const n = e(r);
        fetch(r.href, n)
    }
})();

function Se(a, t, e) {
    return Math.max(a, Math.min(t, e))
}
class sn {
    advance(t) {
        var u;
        if (!this.isRunning) return;
        let e = !1;
        if (this.lerp) this.value = (i = this.value, r = this.to, n = 60 * this.lerp, s = t, function(o, l, h) {
            return (1 - h) * o + h * l
        }(i, r, 1 - Math.exp(-n * s))), Math.round(this.value) === this.to && (this.value = this.to, e = !0);
        else {
            this.currentTime += t;
            const o = Se(0, this.currentTime / this.duration, 1);
            e = o >= 1;
            const l = e ? 1 : this.easing(o);
            this.value = this.from + (this.to - this.from) * l
        }
        var i, r, n, s;
        (u = this.onUpdate) == null || u.call(this, this.value, e), e && this.stop()
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(t, e, {
        lerp: i = .1,
        duration: r = 1,
        easing: n = o => o,
        onStart: s,
        onUpdate: u
    }) {
        this.from = this.value = t, this.to = e, this.lerp = i, this.duration = r, this.easing = n, this.currentTime = 0, this.isRunning = !0, s == null || s(), this.onUpdate = u
    }
}
class un {
    constructor({
                    wrapper: t,
                    content: e,
                    autoResize: i = !0,
                    debounce: r = 250
                } = {}) {
        ht(this, "resize", () => {
            this.onWrapperResize(), this.onContentResize()
        });
        ht(this, "onWrapperResize", () => {
            this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
        });
        ht(this, "onContentResize", () => {
            this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
        });
        this.wrapper = t, this.content = e, i && (this.debouncedResize = function(n, s) {
            let u;
            return function() {
                let o = arguments,
                    l = this;
                clearTimeout(u), u = setTimeout(function() {
                    n.apply(l, o)
                }, s)
            }
        }(this.resize, r), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
    }
    destroy() {
        var t, e;
        (t = this.wrapperResizeObserver) == null || t.disconnect(), (e = this.contentResizeObserver) == null || e.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1)
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
class Qi {
    constructor() {
        this.events = {}
    }
    emit(t, ...e) {
        let i = this.events[t] || [];
        for (let r = 0, n = i.length; r < n; r++) i[r](...e)
    }
    on(t, e) {
        var i;
        return (i = this.events[t]) != null && i.push(e) || (this.events[t] = [e]), () => {
            var r;
            this.events[t] = (r = this.events[t]) == null ? void 0 : r.filter(n => e !== n)
        }
    }
    off(t, e) {
        var i;
        this.events[t] = (i = this.events[t]) == null ? void 0 : i.filter(r => e !== r)
    }
    destroy() {
        this.events = {}
    }
}
class on {
    constructor(t, {
        wheelMultiplier: e = 1,
        touchMultiplier: i = 2,
        normalizeWheel: r = !1
    }) {
        ht(this, "onTouchStart", t => {
            const {
                clientX: e,
                clientY: i
            } = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: t
            })
        });
        ht(this, "onTouchMove", t => {
            const {
                clientX: e,
                clientY: i
            } = t.targetTouches ? t.targetTouches[0] : t, r = -(e - this.touchStart.x) * this.touchMultiplier, n = -(i - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                x: r,
                y: n
            }, this.emitter.emit("scroll", {
                deltaX: r,
                deltaY: n,
                event: t
            })
        });
        ht(this, "onTouchEnd", t => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: t
            })
        });
        ht(this, "onWheel", t => {
            let {
                deltaX: e,
                deltaY: i
            } = t;
            this.normalizeWheel && (e = Se(-100, e, 100), i = Se(-100, i, 100)), e *= this.wheelMultiplier, i *= this.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: e,
                deltaY: i,
                event: t
            })
        });
        this.element = t, this.wheelMultiplier = e, this.touchMultiplier = i, this.normalizeWheel = r, this.touchStart = {
            x: null,
            y: null
        }, this.emitter = new Qi, this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
    on(t, e) {
        return this.emitter.on(t, e)
    }
    destroy() {
        this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
}
class We {
    constructor({
                    wrapper: t = window,
                    content: e = document.documentElement,
                    wheelEventsTarget: i = t,
                    eventsTarget: r = i,
                    smoothWheel: n = !0,
                    syncTouch: s = !1,
                    syncTouchLerp: u = .075,
                    touchInertiaMultiplier: o = 35,
                    duration: l,
                    easing: h = F => Math.min(1, 1.001 - Math.pow(2, -10 * F)),
                    lerp: c = !l && .1,
                    infinite: D = !1,
                    orientation: d = "vertical",
                    gestureOrientation: _ = "vertical",
                    touchMultiplier: f = 1,
                    wheelMultiplier: p = 1,
                    normalizeWheel: m = !1,
                    autoResize: C = !0,
                    __experimental__naiveDimensions: g = !1
                } = {}) {
        this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = ({
                                                                                                                                deltaX: F,
                                                                                                                                deltaY: y,
                                                                                                                                event: T
                                                                                                                            }) => {
            if (T.ctrlKey) return;
            const x = T.type.includes("touch"),
                w = T.type.includes("wheel");
            if (this.options.syncTouch && x && T.type === "touchstart") return void this.reset();
            const E = F === 0 && y === 0,
                b = this.options.gestureOrientation === "vertical" && y === 0 || this.options.gestureOrientation === "horizontal" && F === 0;
            if (E || b) return;
            let P = T.composedPath();
            if (P = P.slice(0, P.indexOf(this.rootElement)), P.find(O => {
                var S, A, k, v, $;
                return ((S = O.hasAttribute) === null || S === void 0 ? void 0 : S.call(O, "data-lenis-prevent")) || x && ((A = O.hasAttribute) === null || A === void 0 ? void 0 : A.call(O, "data-lenis-prevent-touch")) || w && ((k = O.hasAttribute) === null || k === void 0 ? void 0 : k.call(O, "data-lenis-prevent-wheel")) || ((v = O.classList) === null || v === void 0 ? void 0 : v.contains("lenis")) && !(!(($ = O.classList) === null || $ === void 0) && $.contains("lenis-stopped"))
            })) return;
            if (this.isStopped || this.isLocked) return void T.preventDefault();
            if (this.isSmooth = this.options.syncTouch && x || this.options.smoothWheel && w, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
            T.preventDefault();
            let M = y;
            this.options.gestureOrientation === "both" ? M = Math.abs(y) > Math.abs(F) ? y : F : this.options.gestureOrientation === "horizontal" && (M = F);
            const R = x && this.options.syncTouch,
                I = x && T.type === "touchend" && Math.abs(M) > 5;
            I && (M = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + M, Object.assign({
                programmatic: !1
            }, R ? {
                lerp: I ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }))
        }, this.onNativeScroll = () => {
            if (!this.__preventNextScrollEvent && !this.isScrolling) {
                const F = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - F), this.emit()
            }
        }, window.lenisVersion = "1.0.39", t !== document.documentElement && t !== document.body || (t = window), this.options = {
            wrapper: t,
            content: e,
            wheelEventsTarget: i,
            eventsTarget: r,
            smoothWheel: n,
            syncTouch: s,
            syncTouchLerp: u,
            touchInertiaMultiplier: o,
            duration: l,
            easing: h,
            lerp: c,
            infinite: D,
            gestureOrientation: _,
            orientation: d,
            touchMultiplier: f,
            wheelMultiplier: p,
            normalizeWheel: m,
            autoResize: C,
            __experimental__naiveDimensions: g
        }, this.animate = new sn, this.emitter = new Qi, this.dimensions = new un({
            wrapper: t,
            content: e,
            autoResize: C
        }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = s || n, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, {
            passive: !1
        }), this.virtualScroll = new on(r, {
            touchMultiplier: f,
            wheelMultiplier: p,
            normalizeWheel: m
        }), this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, {
            passive: !1
        }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1)
    }
    on(t, e) {
        return this.emitter.on(t, e)
    }
    off(t, e) {
        return this.emitter.off(t, e)
    }
    setScroll(t) {
        this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
    }
    resize() {
        this.dimensions.resize()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop()
    }
    start() {
        this.isStopped && (this.isStopped = !1, this.reset())
    }
    stop() {
        this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
    }
    raf(t) {
        const e = t - (this.time || t);
        this.time = t, this.animate.advance(.001 * e)
    }
    scrollTo(t, {
        offset: e = 0,
        immediate: i = !1,
        lock: r = !1,
        duration: n = this.options.duration,
        easing: s = this.options.easing,
        lerp: u = !n && this.options.lerp,
        onComplete: o,
        force: l = !1,
        programmatic: h = !0
    } = {}) {
        if (!this.isStopped && !this.isLocked || l) {
            if (["top", "left", "start"].includes(t)) t = 0;
            else if (["bottom", "right", "end"].includes(t)) t = this.limit;
            else {
                let c;
                if (typeof t == "string" ? c = document.querySelector(t) : t != null && t.nodeType && (c = t), c) {
                    if (this.options.wrapper !== window) {
                        const d = this.options.wrapper.getBoundingClientRect();
                        e -= this.isHorizontal ? d.left : d.top
                    }
                    const D = c.getBoundingClientRect();
                    t = (this.isHorizontal ? D.left : D.top) + this.animatedScroll
                }
            }
            if (typeof t == "number") {
                if (t += e, t = Math.round(t), this.options.infinite ? h && (this.targetScroll = this.animatedScroll = this.scroll) : t = Se(0, t, this.limit), i) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), void(o == null || o(this));
                if (!h) {
                    if (t === this.targetScroll) return;
                    this.targetScroll = t
                }
                this.animate.fromTo(this.animatedScroll, t, {
                    duration: n,
                    easing: s,
                    lerp: u,
                    onStart: () => {
                        r && (this.isLocked = !0), this.isScrolling = !0
                    },
                    onUpdate: (c, D) => {
                        this.isScrolling = !0, this.velocity = c - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = c, this.setScroll(this.scroll), h && (this.targetScroll = c), D || this.emit(), D && (this.reset(), this.emit(), o == null || o(this), this.__preventNextScrollEvent = !0, requestAnimationFrame(() => {
                            delete this.__preventNextScrollEvent
                        }))
                    }
                })
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? (t = this.animatedScroll, e = this.limit, (t % e + e) % e) : this.animatedScroll;
        var t, e
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isSmooth() {
        return this.__isSmooth
    }
    set isSmooth(t) {
        this.__isSmooth !== t && (this.__isSmooth = t, this.toggleClassName("lenis-smooth", t))
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(t) {
        this.__isScrolling !== t && (this.__isScrolling = t, this.toggleClassName("lenis-scrolling", t))
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(t) {
        this.__isStopped !== t && (this.__isStopped = t, this.toggleClassName("lenis-stopped", t))
    }
    get isLocked() {
        return this.__isLocked
    }
    set isLocked(t) {
        this.__isLocked !== t && (this.__isLocked = t, this.toggleClassName("lenis-locked", t))
    }
    get className() {
        let t = "lenis";
        return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isSmooth && (t += " lenis-smooth"), t
    }
    toggleClassName(t, e) {
        this.rootElement.classList.toggle(t, e), this.emitter.emit("className change", this)
    }
}

function Et(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a
}

function Zi(a, t) {
    a.prototype = Object.create(t.prototype), a.prototype.constructor = a, a.__proto__ = t
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var ot = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    te = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    di, Q, q, Dt = 1e8,
    N = 1 / Dt,
    Ze = Math.PI * 2,
    an = Ze / 4,
    ln = 0,
    Ji = Math.sqrt,
    hn = Math.cos,
    fn = Math.sin,
    G = function(t) {
        return typeof t == "string"
    },
    Y = function(t) {
        return typeof t == "function"
    },
    Tt = function(t) {
        return typeof t == "number"
    },
    _i = function(t) {
        return typeof t > "u"
    },
    vt = function(t) {
        return typeof t == "object"
    },
    it = function(t) {
        return t !== !1
    },
    tr = function() {
        return typeof window < "u"
    },
    Ee = function(t) {
        return Y(t) || G(t)
    },
    er = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    Z = Array.isArray,
    Je = /(?:-?\.?\d|\.)+/gi,
    ir = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    $t = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Ve = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    rr = /[+-]=-?[.\d]+/,
    nr = /[^,'"\[\]\s]+/gi,
    cn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    W, ct, ti, pi, at = {},
    be = {},
    sr, ur = function(t) {
        return (be = qt(t, at)) && lt
    },
    mi = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    },
    Ae = function(t, e) {
        return !e && console.warn(t)
    },
    or = function(t, e) {
        return t && (at[t] = e) && be && (be[t] = e) || at
    },
    _e = function() {
        return 0
    },
    Dn = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    xe = {
        suppressEvents: !0,
        kill: !1
    },
    dn = {
        suppressEvents: !0
    },
    gi = {},
    Ot = [],
    ei = {},
    ar, st = {},
    Ye = {},
    Bi = 30,
    we = [],
    Ci = "",
    yi = function(t) {
        var e = t[0],
            i, r;
        if (vt(e) || Y(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
            for (r = we.length; r-- && !we[r].targetTest(e););
            i = we[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Pr(t[r], i))) || t.splice(r, 1);
        return t
    },
    Vt = function(t) {
        return t._gsap || yi(dt(t))[0]._gsap
    },
    lr = function(t, e, i) {
        return (i = t[e]) && Y(i) ? t[e]() : _i(i) && t.getAttribute && t.getAttribute(e) || i
    },
    rt = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    },
    U = function(t) {
        return Math.round(t * 1e5) / 1e5 || 0
    },
    j = function(t) {
        return Math.round(t * 1e7) / 1e7 || 0
    },
    Kt = function(t, e) {
        var i = e.charAt(0),
            r = parseFloat(e.substr(2));
        return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
    },
    _n = function(t, e) {
        for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
        return r < i
    },
    Pe = function() {
        var t = Ot.length,
            e = Ot.slice(0),
            i, r;
        for (ei = {}, Ot.length = 0, i = 0; i < t; i++) r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
    },
    hr = function(t, e, i, r) {
        Ot.length && !Q && Pe(), t.render(e, i, r || Q && e < 0 && (t._initted || t._startAt)), Ot.length && !Q && Pe()
    },
    fr = function(t) {
        var e = parseFloat(t);
        return (e || e === 0) && (t + "").match(nr).length < 2 ? e : G(t) ? t.trim() : t
    },
    cr = function(t) {
        return t
    },
    pt = function(t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t
    },
    pn = function(t) {
        return function(e, i) {
            for (var r in i) r in e || r === "duration" && t || r === "ease" || (e[r] = i[r])
        }
    },
    qt = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    },
    Mi = function a(t, e) {
        for (var i in e) i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = vt(e[i]) ? a(t[i] || (t[i] = {}), e[i]) : e[i]);
        return t
    },
    Oe = function(t, e) {
        var i = {},
            r;
        for (r in t) r in e || (i[r] = t[r]);
        return i
    },
    ce = function(t) {
        var e = t.parent || W,
            i = t.keyframes ? pn(Z(t.keyframes)) : pt;
        if (it(t.inherit))
            for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    },
    mn = function(t, e) {
        for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
        return i < 0
    },
    Dr = function(t, e, i, r, n) {
        i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
        var s = t[r],
            u;
        if (n)
            for (u = e[n]; s && s[n] > u;) s = s._prev;
        return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e
    },
    ze = function(t, e, i, r) {
        i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
        var n = e._prev,
            s = e._next;
        n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null
    },
    Mt = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
    },
    Yt = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var i = t; i;) i._dirty = 1, i = i.parent;
        return t
    },
    gn = function(t) {
        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
        return t
    },
    ii = function(t, e, i, r) {
        return t._startAt && (Q ? t._startAt.revert(xe) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
    },
    Cn = function a(t) {
        return !t || t._ts && a(t.parent)
    },
    ki = function(t) {
        return t._repeat ? ee(t._tTime, t = t.duration() + t._rDelay) * t : 0
    },
    ee = function(t, e) {
        var i = Math.floor(t /= e);
        return t && i === t ? i - 1 : i
    },
    Be = function(t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    },
    Le = function(t) {
        return t._end = j(t._start + (t._tDur / Math.abs(t._ts || t._rts || N) || 0))
    },
    Ne = function(t, e) {
        var i = t._dp;
        return i && i.smoothChildTiming && t._ts && (t._start = j(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Le(t), i._dirty || Yt(i, t)), t
    },
    dr = function(t, e) {
        var i;
        if ((e._time || e._initted && !e._dur) && (i = Be(t.rawTime(), e), (!e._dur || ve(0, e.totalDuration(), i) - e._tTime > N) && e.render(i, !0)), Yt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
            t._zTime = -N
        }
    },
    yt = function(t, e, i, r) {
        return e.parent && Mt(e), e._start = j((Tt(i) ? i : i || t !== W ? ft(t, i, e) : t._time) + e._delay), e._end = j(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Dr(t, e, "_first", "_last", t._sort ? "_start" : 0), ri(e) || (t._recent = e), r || dr(t, e), t._ts < 0 && Ne(t, t._tTime), t
    },
    _r = function(t, e) {
        return (at.ScrollTrigger || mi("scrollTrigger", e)) && at.ScrollTrigger.create(e, t)
    },
    pr = function(t, e, i, r, n) {
        if (vi(t, e, n), !t._initted) return 1;
        if (!i && t._pt && !Q && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && ar !== ut.frame) return Ot.push(t), t._lazy = [n, r], 1
    },
    yn = function a(t) {
        var e = t.parent;
        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e))
    },
    ri = function(t) {
        var e = t.data;
        return e === "isFromStart" || e === "isStart"
    },
    Fn = function(t, e, i, r) {
        var n = t.ratio,
            s = e < 0 || !e && (!t._start && yn(t) && !(!t._initted && ri(t)) || (t._ts < 0 || t._dp._ts < 0) && !ri(t)) ? 0 : 1,
            u = t._rDelay,
            o = 0,
            l, h, c;
        if (u && t._repeat && (o = ve(0, t._tDur, e), h = ee(o, u), t._yoyo && h & 1 && (s = 1 - s), h !== ee(t._tTime, u) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || Q || r || t._zTime === N || !e && t._zTime) {
            if (!t._initted && pr(t, e, r, i, o)) return;
            for (c = t._zTime, t._zTime = e || (i ? N : 0), i || (i = e && !c), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = o, l = t._pt; l;) l.r(s, l.d), l = l._next;
            e < 0 && ii(t, e, i, !0), t._onUpdate && !i && _t(t, "onUpdate"), o && t._repeat && !i && t.parent && _t(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Mt(t, 1), !i && !Q && (_t(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
        } else t._zTime || (t._zTime = e)
    },
    vn = function(t, e, i) {
        var r;
        if (i > e)
            for (r = t._first; r && r._start <= i;) {
                if (r.data === "isPause" && r._start > e) return r;
                r = r._next
            } else
            for (r = t._last; r && r._start >= i;) {
                if (r.data === "isPause" && r._start < e) return r;
                r = r._prev
            }
    },
    ie = function(t, e, i, r) {
        var n = t._repeat,
            s = j(e) || 0,
            u = t._tTime / t._tDur;
        return u && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : j(s * (n + 1) + t._rDelay * n) : s, u > 0 && !r && Ne(t, t._tTime = t._tDur * u), t.parent && Le(t), i || Yt(t.parent, t), t
    },
    Ri = function(t) {
        return t instanceof et ? Yt(t) : ie(t, t._dur)
    },
    En = {
        _start: 0,
        endTime: _e,
        totalDuration: _e
    },
    ft = function a(t, e, i) {
        var r = t.labels,
            n = t._recent || En,
            s = t.duration() >= Dt ? n.endTime(!1) : t._dur,
            u, o, l;
        return G(e) && (isNaN(e) || e in r) ? (o = e.charAt(0), l = e.substr(-1) === "%", u = e.indexOf("="), o === "<" || o === ">" ? (u >= 0 && (e = e.replace(/=/, "")), (o === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (l ? (u < 0 ? n : i).totalDuration() / 100 : 1)) : u < 0 ? (e in r || (r[e] = s), r[e]) : (o = parseFloat(e.charAt(u - 1) + e.substr(u + 1)), l && i && (o = o / 100 * (Z(i) ? i[0] : i).totalDuration()), u > 1 ? a(t, e.substr(0, u - 1), i) + o : s + o)) : e == null ? s : +e
    },
    De = function(t, e, i) {
        var r = Tt(e[1]),
            n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
            s = e[n],
            u, o;
        if (r && (s.duration = e[1]), s.parent = i, t) {
            for (u = s, o = i; o && !("immediateRender" in u);) u = o.vars.defaults || {}, o = it(o.vars.inherit) && o.parent;
            s.immediateRender = it(u.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1]
        }
        return new H(e[0], s, e[n + 1])
    },
    Rt = function(t, e) {
        return t || t === 0 ? e(t) : e
    },
    ve = function(t, e, i) {
        return i < t ? t : i > e ? e : i
    },
    K = function(t, e) {
        return !G(t) || !(e = cn.exec(t)) ? "" : e[1]
    },
    xn = function(t, e, i) {
        return Rt(i, function(r) {
            return ve(t, e, r)
        })
    },
    ni = [].slice,
    mr = function(t, e) {
        return t && vt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && vt(t[0])) && !t.nodeType && t !== ct
    },
    wn = function(t, e, i) {
        return i === void 0 && (i = []), t.forEach(function(r) {
            var n;
            return G(r) && !e || mr(r, 1) ? (n = i).push.apply(n, dt(r)) : i.push(r)
        }) || i
    },
    dt = function(t, e, i) {
        return q && !e && q.selector ? q.selector(t) : G(t) && !i && (ti || !re()) ? ni.call((e || pi).querySelectorAll(t), 0) : Z(t) ? wn(t, i) : mr(t) ? ni.call(t, 0) : t ? [t] : []
    },
    si = function(t) {
        return t = dt(t)[0] || Ae("Invalid scope") || {},
            function(e) {
                var i = t.current || t.nativeElement || t;
                return dt(e, i.querySelectorAll ? i : i === t ? Ae("Invalid scope") || pi.createElement("div") : t)
            }
    },
    gr = function(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    },
    Cr = function(t) {
        if (Y(t)) return t;
        var e = vt(t) ? t : {
                each: t
            },
            i = Ut(e.ease),
            r = e.from || 0,
            n = parseFloat(e.base) || 0,
            s = {},
            u = r > 0 && r < 1,
            o = isNaN(r) || u,
            l = e.axis,
            h = r,
            c = r;
        return G(r) ? h = c = {
            center: .5,
            edges: .5,
            end: 1
        } [r] || 0 : !u && o && (h = r[0], c = r[1]),
            function(D, d, _) {
                var f = (_ || e).length,
                    p = s[f],
                    m, C, g, F, y, T, x, w, E;
                if (!p) {
                    if (E = e.grid === "auto" ? 0 : (e.grid || [1, Dt])[1], !E) {
                        for (x = -Dt; x < (x = _[E++].getBoundingClientRect().left) && E < f;);
                        E--
                    }
                    for (p = s[f] = [], m = o ? Math.min(E, f) * h - .5 : r % E, C = E === Dt ? 0 : o ? f * c / E - .5 : r / E | 0, x = 0, w = Dt, T = 0; T < f; T++) g = T % E - m, F = C - (T / E | 0), p[T] = y = l ? Math.abs(l === "y" ? F : g) : Ji(g * g + F * F), y > x && (x = y), y < w && (w = y);
                    r === "random" && gr(p), p.max = x - w, p.min = w, p.v = f = (parseFloat(e.amount) || parseFloat(e.each) * (E > f ? f - 1 : l ? l === "y" ? f / E : E : Math.max(E, f / E)) || 0) * (r === "edges" ? -1 : 1), p.b = f < 0 ? n - f : n, p.u = K(e.amount || e.each) || 0, i = i && f < 0 ? Sr(i) : i
                }
                return f = (p[D] - p.min) / p.max || 0, j(p.b + (i ? i(f) : f) * p.v) + p.u
            }
    },
    ui = function(t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function(i) {
            var r = j(Math.round(parseFloat(i) / t) * t * e);
            return (r - r % 1) / e + (Tt(i) ? 0 : K(i))
        }
    },
    yr = function(t, e) {
        var i = Z(t),
            r, n;
        return !i && vt(t) && (r = i = t.radius || Dt, t.values ? (t = dt(t.values), (n = !Tt(t[0])) && (r *= r)) : t = ui(t.increment)), Rt(e, i ? Y(t) ? function(s) {
            return n = t(s), Math.abs(n - s) <= r ? n : s
        } : function(s) {
            for (var u = parseFloat(n ? s.x : s), o = parseFloat(n ? s.y : 0), l = Dt, h = 0, c = t.length, D, d; c--;) n ? (D = t[c].x - u, d = t[c].y - o, D = D * D + d * d) : D = Math.abs(t[c] - u), D < l && (l = D, h = c);
            return h = !r || l <= r ? t[h] : s, n || h === s || Tt(s) ? h : h + K(s)
        } : ui(t))
    },
    Fr = function(t, e, i, r) {
        return Rt(Z(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
            return Z(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * .99)) / i) * i * r) / r
        })
    },
    Tn = function() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return function(r) {
            return e.reduce(function(n, s) {
                return s(n)
            }, r)
        }
    },
    Sn = function(t, e) {
        return function(i) {
            return t(parseFloat(i)) + (e || K(i))
        }
    },
    bn = function(t, e, i) {
        return Er(t, e, 0, 1, i)
    },
    vr = function(t, e, i) {
        return Rt(i, function(r) {
            return t[~~e(r)]
        })
    },
    An = function a(t, e, i) {
        var r = e - t;
        return Z(t) ? vr(t, a(0, t.length), e) : Rt(i, function(n) {
            return (r + (n - t) % r) % r + t
        })
    },
    Pn = function a(t, e, i) {
        var r = e - t,
            n = r * 2;
        return Z(t) ? vr(t, a(0, t.length - 1), e) : Rt(i, function(s) {
            return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s)
        })
    },
    pe = function(t) {
        for (var e = 0, i = "", r, n, s, u; ~(r = t.indexOf("random(", e));) s = t.indexOf(")", r), u = t.charAt(r + 7) === "[", n = t.substr(r + 7, s - r - 7).match(u ? nr : Je), i += t.substr(e, r - e) + Fr(u ? n : +n[0], u ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
        return i + t.substr(e, t.length - e)
    },
    Er = function(t, e, i, r, n) {
        var s = e - t,
            u = r - i;
        return Rt(n, function(o) {
            return i + ((o - t) / s * u || 0)
        })
    },
    On = function a(t, e, i, r) {
        var n = isNaN(t + e) ? 0 : function(d) {
            return (1 - d) * t + d * e
        };
        if (!n) {
            var s = G(t),
                u = {},
                o, l, h, c, D;
            if (i === !0 && (r = 1) && (i = null), s) t = {
                p: t
            }, e = {
                p: e
            };
            else if (Z(t) && !Z(e)) {
                for (h = [], c = t.length, D = c - 2, l = 1; l < c; l++) h.push(a(t[l - 1], t[l]));
                c--, n = function(_) {
                    _ *= c;
                    var f = Math.min(D, ~~_);
                    return h[f](_ - f)
                }, i = e
            } else r || (t = qt(Z(t) ? [] : {}, t));
            if (!h) {
                for (o in e) Fi.call(u, t, o, "get", e[o]);
                n = function(_) {
                    return wi(_, u) || (s ? t.p : t)
                }
            }
        }
        return Rt(i, n)
    },
    zi = function(t, e, i) {
        var r = t.labels,
            n = Dt,
            s, u, o;
        for (s in r) u = r[s] - e, u < 0 == !!i && u && n > (u = Math.abs(u)) && (o = s, n = u);
        return o
    },
    _t = function(t, e, i) {
        var r = t.vars,
            n = r[e],
            s = q,
            u = t._ctx,
            o, l, h;
        if (n) return o = r[e + "Params"], l = r.callbackScope || t, i && Ot.length && Pe(), u && (q = u), h = o ? n.apply(l, o) : n.call(l), q = s, h
    },
    he = function(t) {
        return Mt(t), t.scrollTrigger && t.scrollTrigger.kill(!!Q), t.progress() < 1 && _t(t, "onInterrupt"), t
    },
    Gt, Bn = function(t) {
        t = !t.name && t.default || t;
        var e = t.name,
            i = Y(t),
            r = e && !i && t.init ? function() {
                this._props = []
            } : t,
            n = {
                init: _e,
                render: wi,
                add: Fi,
                kill: Gn,
                modifier: $n,
                rawVars: 0
            },
            s = {
                targetTest: 0,
                get: 0,
                getSetter: xi,
                aliases: {},
                register: 0
            };
        if (re(), t !== r) {
            if (st[e]) return;
            pt(r, pt(Oe(t, n), s)), qt(r.prototype, qt(n, Oe(t, s))), st[r.prop = e] = r, t.targetTest && (we.push(r), gi[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
        }
        or(e, r), t.register && t.register(lt, r, nt)
    },
    L = 255,
    fe = {
        aqua: [0, L, L],
        lime: [0, L, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, L],
        navy: [0, 0, 128],
        white: [L, L, L],
        olive: [128, 128, 0],
        yellow: [L, L, 0],
        orange: [L, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [L, 0, 0],
        pink: [L, 192, 203],
        cyan: [0, L, L],
        transparent: [L, L, L, 0]
    },
    Ue = function(t, e, i) {
        return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < .5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * L + .5 | 0
    },
    xr = function(t, e, i) {
        var r = t ? Tt(t) ? [t >> 16, t >> 8 & L, t & L] : 0 : fe.black,
            n, s, u, o, l, h, c, D, d, _;
        if (!r) {
            if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), fe[t]) r = fe[t];
            else if (t.charAt(0) === "#") {
                if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), u = t.charAt(3), t = "#" + n + n + s + s + u + u + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & L, r & L, parseInt(t.substr(7), 16) / 255];
                t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & L, t & L]
            } else if (t.substr(0, 3) === "hsl") {
                if (r = _ = t.match(Je), !e) o = +r[0] % 360 / 360, l = +r[1] / 100, h = +r[2] / 100, s = h <= .5 ? h * (l + 1) : h + l - h * l, n = h * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Ue(o + 1 / 3, n, s), r[1] = Ue(o, n, s), r[2] = Ue(o - 1 / 3, n, s);
                else if (~t.indexOf("=")) return r = t.match(ir), i && r.length < 4 && (r[3] = 1), r
            } else r = t.match(Je) || fe.transparent;
            r = r.map(Number)
        }
        return e && !_ && (n = r[0] / L, s = r[1] / L, u = r[2] / L, c = Math.max(n, s, u), D = Math.min(n, s, u), h = (c + D) / 2, c === D ? o = l = 0 : (d = c - D, l = h > .5 ? d / (2 - c - D) : d / (c + D), o = c === n ? (s - u) / d + (s < u ? 6 : 0) : c === s ? (u - n) / d + 2 : (n - s) / d + 4, o *= 60), r[0] = ~~(o + .5), r[1] = ~~(l * 100 + .5), r[2] = ~~(h * 100 + .5)), i && r.length < 4 && (r[3] = 1), r
    },
    wr = function(t) {
        var e = [],
            i = [],
            r = -1;
        return t.split(Bt).forEach(function(n) {
            var s = n.match($t) || [];
            e.push.apply(e, s), i.push(r += s.length + 1)
        }), e.c = i, e
    },
    Li = function(t, e, i) {
        var r = "",
            n = (t + r).match(Bt),
            s = e ? "hsla(" : "rgba(",
            u = 0,
            o, l, h, c;
        if (!n) return t;
        if (n = n.map(function(D) {
            return (D = xr(D, e, 1)) && s + (e ? D[0] + "," + D[1] + "%," + D[2] + "%," + D[3] : D.join(",")) + ")"
        }), i && (h = wr(t), o = i.c, o.join(r) !== h.c.join(r)))
            for (l = t.replace(Bt, "1").split($t), c = l.length - 1; u < c; u++) r += l[u] + (~o.indexOf(u) ? n.shift() || s + "0,0,0,0)" : (h.length ? h : n.length ? n : i).shift());
        if (!l)
            for (l = t.split(Bt), c = l.length - 1; u < c; u++) r += l[u] + n[u];
        return r + l[c]
    },
    Bt = function() {
        var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            t;
        for (t in fe) a += "|" + t + "\\b";
        return new RegExp(a + ")", "gi")
    }(),
    Mn = /hsl[a]?\(/,
    Tr = function(t) {
        var e = t.join(" "),
            i;
        if (Bt.lastIndex = 0, Bt.test(e)) return i = Mn.test(e), t[1] = Li(t[1], i), t[0] = Li(t[0], i, wr(t[1])), !0
    },
    me, ut = function() {
        var a = Date.now,
            t = 500,
            e = 33,
            i = a(),
            r = i,
            n = 1e3 / 240,
            s = n,
            u = [],
            o, l, h, c, D, d, _ = function f(p) {
                var m = a() - r,
                    C = p === !0,
                    g, F, y, T;
                if (m > t && (i += m - e), r += m, y = r - i, g = y - s, (g > 0 || C) && (T = ++c.frame, D = y - c.time * 1e3, c.time = y = y / 1e3, s += g + (g >= n ? 4 : n - g), F = 1), C || (o = l(f)), F)
                    for (d = 0; d < u.length; d++) u[d](y, D, T, p)
            };
        return c = {
            time: 0,
            frame: 0,
            tick: function() {
                _(!0)
            },
            deltaRatio: function(p) {
                return D / (1e3 / (p || 60))
            },
            wake: function() {
                sr && (!ti && tr() && (ct = ti = window, pi = ct.document || {}, at.gsap = lt, (ct.gsapVersions || (ct.gsapVersions = [])).push(lt.version), ur(be || ct.GreenSockGlobals || !ct.gsap && ct || {}), h = ct.requestAnimationFrame), o && c.sleep(), l = h || function(p) {
                    return setTimeout(p, s - c.time * 1e3 + 1 | 0)
                }, me = 1, _(2))
            },
            sleep: function() {
                (h ? ct.cancelAnimationFrame : clearTimeout)(o), me = 0, l = _e
            },
            lagSmoothing: function(p, m) {
                t = p || 1 / 0, e = Math.min(m || 33, t)
            },
            fps: function(p) {
                n = 1e3 / (p || 240), s = c.time * 1e3 + n
            },
            add: function(p, m, C) {
                var g = m ? function(F, y, T, x) {
                    p(F, y, T, x), c.remove(g)
                } : p;
                return c.remove(p), u[C ? "unshift" : "push"](g), re(), g
            },
            remove: function(p, m) {
                ~(m = u.indexOf(p)) && u.splice(m, 1) && d >= m && d--
            },
            _listeners: u
        }, c
    }(),
    re = function() {
        return !me && ut.wake()
    },
    B = {},
    kn = /^[\d.\-M][\d.\-,\s]/,
    Rn = /["']/g,
    zn = function(t) {
        for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, u, o, l; n < s; n++) o = i[n], u = n !== s - 1 ? o.lastIndexOf(",") : o.length, l = o.substr(0, u), e[r] = isNaN(l) ? l.replace(Rn, "").trim() : +l, r = o.substr(u + 1).trim();
        return e
    },
    Ln = function(t) {
        var e = t.indexOf("(") + 1,
            i = t.indexOf(")"),
            r = t.indexOf("(", e);
        return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i)
    },
    Nn = function(t) {
        var e = (t + "").split("("),
            i = B[e[0]];
        return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [zn(e[1])] : Ln(t).split(",").map(fr)) : B._CE && kn.test(t) ? B._CE("", t) : i
    },
    Sr = function(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    },
    br = function a(t, e) {
        for (var i = t._first, r; i;) i instanceof et ? a(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? a(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    },
    Ut = function(t, e) {
        return t && (Y(t) ? t : B[t] || Nn(t)) || e
    },
    Xt = function(t, e, i, r) {
        i === void 0 && (i = function(o) {
            return 1 - e(1 - o)
        }), r === void 0 && (r = function(o) {
            return o < .5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2
        });
        var n = {
                easeIn: e,
                easeOut: i,
                easeInOut: r
            },
            s;
        return rt(t, function(u) {
            B[u] = at[u] = n, B[s = u.toLowerCase()] = i;
            for (var o in n) B[s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")] = B[u + "." + o] = n[o]
        }), n
    },
    Ar = function(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
        }
    },
    qe = function a(t, e, i) {
        var r = e >= 1 ? e : 1,
            n = (i || (t ? .3 : .45)) / (e < 1 ? e : 1),
            s = n / Ze * (Math.asin(1 / r) || 0),
            u = function(h) {
                return h === 1 ? 1 : r * Math.pow(2, -10 * h) * fn((h - s) * n) + 1
            },
            o = t === "out" ? u : t === "in" ? function(l) {
                return 1 - u(1 - l)
            } : Ar(u);
        return n = Ze / n, o.config = function(l, h) {
            return a(t, l, h)
        }, o
    },
    Xe = function a(t, e) {
        e === void 0 && (e = 1.70158);
        var i = function(s) {
                return s ? --s * s * ((e + 1) * s + e) + 1 : 0
            },
            r = t === "out" ? i : t === "in" ? function(n) {
                return 1 - i(1 - n)
            } : Ar(i);
        return r.config = function(n) {
            return a(t, n)
        }, r
    };
rt("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, t) {
    var e = t < 5 ? t + 1 : t;
    Xt(a + ",Power" + (e - 1), t ? function(i) {
        return Math.pow(i, e)
    } : function(i) {
        return i
    }, function(i) {
        return 1 - Math.pow(1 - i, e)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2
    })
});
B.Linear.easeNone = B.none = B.Linear.easeIn;
Xt("Elastic", qe("in"), qe("out"), qe());
(function(a, t) {
    var e = 1 / t,
        i = 2 * e,
        r = 2.5 * e,
        n = function(u) {
            return u < e ? a * u * u : u < i ? a * Math.pow(u - 1.5 / t, 2) + .75 : u < r ? a * (u -= 2.25 / t) * u + .9375 : a * Math.pow(u - 2.625 / t, 2) + .984375
        };
    Xt("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
})(7.5625, 2.75);
Xt("Expo", function(a) {
    return a ? Math.pow(2, 10 * (a - 1)) : 0
});
Xt("Circ", function(a) {
    return -(Ji(1 - a * a) - 1)
});
Xt("Sine", function(a) {
    return a === 1 ? 1 : -hn(a * an) + 1
});
Xt("Back", Xe("in"), Xe("out"), Xe());
B.SteppedEase = B.steps = at.SteppedEase = {
    config: function(t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t,
            r = t + (e ? 0 : 1),
            n = e ? 1 : 0,
            s = 1 - N;
        return function(u) {
            return ((r * ve(0, s, u) | 0) + n) * i
        }
    }
};
te.ease = B["quad.out"];
rt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
    return Ci += a + "," + a + "Params,"
});
var Pr = function(t, e) {
        this.id = ln++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : lr, this.set = e ? e.getSetter : xi
    },
    ne = function() {
        function a(e) {
            this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, ie(this, +e.duration, 1, 1), this.data = e.data, q && (this._ctx = q, q.data.push(this)), me || ut.wake()
        }
        var t = a.prototype;
        return t.delay = function(i) {
            return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay
        }, t.duration = function(i) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
        }, t.totalDuration = function(i) {
            return arguments.length ? (this._dirty = 0, ie(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, t.totalTime = function(i, r) {
            if (re(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (Ne(this, i), !n._dp || n.parent || dr(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && yt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === N || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), hr(this, i, r)), this
        }, t.time = function(i, r) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + ki(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
        }, t.totalProgress = function(i, r) {
            return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, t.progress = function(i, r) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + ki(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, t.iteration = function(i, r) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? ee(this._tTime, n) + 1 : 1
        }, t.timeScale = function(i) {
            if (!arguments.length) return this._rts === -N ? 0 : this._rts;
            if (this._rts === i) return this;
            var r = this.parent && this._ts ? Be(this.parent._time, this) : this._tTime;
            return this._rts = +i || 0, this._ts = this._ps || i === -N ? 0 : this._rts, this.totalTime(ve(-this._delay, this._tDur, r), !0), Le(this), gn(this)
        }, t.paused = function(i) {
            return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (re(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== N && (this._tTime -= N)))), this) : this._ps
        }, t.startTime = function(i) {
            if (arguments.length) {
                this._start = i;
                var r = this.parent || this._dp;
                return r && (r._sort || !this.parent) && yt(r, this, i - this._delay), this
            }
            return this._start
        }, t.endTime = function(i) {
            return this._start + (it(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, t.rawTime = function(i) {
            var r = this.parent || this._dp;
            return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Be(r.rawTime(i), this) : this._tTime : this._tTime
        }, t.revert = function(i) {
            i === void 0 && (i = dn);
            var r = Q;
            return Q = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), Q = r, this
        }, t.globalTime = function(i) {
            for (var r = this, n = arguments.length ? i : r.rawTime(); r;) n = r._start + n / (r._ts || 1), r = r._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(i) : n
        }, t.repeat = function(i) {
            return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Ri(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, t.repeatDelay = function(i) {
            if (arguments.length) {
                var r = this._time;
                return this._rDelay = i, Ri(this), r ? this.time(r) : this
            }
            return this._rDelay
        }, t.yoyo = function(i) {
            return arguments.length ? (this._yoyo = i, this) : this._yoyo
        }, t.seek = function(i, r) {
            return this.totalTime(ft(this, i), it(r))
        }, t.restart = function(i, r) {
            return this.play().totalTime(i ? -this._delay : 0, it(r))
        }, t.play = function(i, r) {
            return i != null && this.seek(i, r), this.reversed(!1).paused(!1)
        }, t.reverse = function(i, r) {
            return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1)
        }, t.pause = function(i, r) {
            return i != null && this.seek(i, r), this.paused(!0)
        }, t.resume = function() {
            return this.paused(!1)
        }, t.reversed = function(i) {
            return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -N : 0)), this) : this._rts < 0
        }, t.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -N, this
        }, t.isActive = function() {
            var i = this.parent || this._dp,
                r = this._start,
                n;
            return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - N)
        }, t.eventCallback = function(i, r, n) {
            var s = this.vars;
            return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i]
        }, t.then = function(i) {
            var r = this;
            return new Promise(function(n) {
                var s = Y(i) ? i : cr,
                    u = function() {
                        var l = r.then;
                        r.then = null, Y(s) && (s = s(r)) && (s.then || s === r) && (r.then = l), n(s), r.then = l
                    };
                r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? u() : r._prom = u
            })
        }, t.kill = function() {
            he(this)
        }, a
    }();
pt(ne.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -N,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var et = function(a) {
    Zi(t, a);

    function t(i, r) {
        var n;
        return i === void 0 && (i = {}), n = a.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = it(i.sortChildren), W && yt(i.parent || W, Et(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && _r(Et(n), i.scrollTrigger), n
    }
    var e = t.prototype;
    return e.to = function(r, n, s) {
        return De(0, arguments, this), this
    }, e.from = function(r, n, s) {
        return De(1, arguments, this), this
    }, e.fromTo = function(r, n, s, u) {
        return De(2, arguments, this), this
    }, e.set = function(r, n, s) {
        return n.duration = 0, n.parent = this, ce(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new H(r, n, ft(this, s), 1), this
    }, e.call = function(r, n, s) {
        return yt(this, H.delayedCall(0, r, n), s)
    }, e.staggerTo = function(r, n, s, u, o, l, h) {
        return s.duration = n, s.stagger = s.stagger || u, s.onComplete = l, s.onCompleteParams = h, s.parent = this, new H(r, s, ft(this, o)), this
    }, e.staggerFrom = function(r, n, s, u, o, l, h) {
        return s.runBackwards = 1, ce(s).immediateRender = it(s.immediateRender), this.staggerTo(r, n, s, u, o, l, h)
    }, e.staggerFromTo = function(r, n, s, u, o, l, h, c) {
        return u.startAt = s, ce(u).immediateRender = it(u.immediateRender), this.staggerTo(r, n, u, o, l, h, c)
    }, e.render = function(r, n, s) {
        var u = this._time,
            o = this._dirty ? this.totalDuration() : this._tDur,
            l = this._dur,
            h = r <= 0 ? 0 : j(r),
            c = this._zTime < 0 != r < 0 && (this._initted || !l),
            D, d, _, f, p, m, C, g, F, y, T, x;
        if (this !== W && h > o && r >= 0 && (h = o), h !== this._tTime || s || c) {
            if (u !== this._time && l && (h += this._time - u, r += this._time - u), D = h, F = this._start, g = this._ts, m = !g, c && (l || (u = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
                if (T = this._yoyo, p = l + this._rDelay, this._repeat < -1 && r < 0) return this.totalTime(p * 100 + r, n, s);
                if (D = j(h % p), h === o ? (f = this._repeat, D = l) : (f = ~~(h / p), f && f === h / p && (D = l, f--), D > l && (D = l)), y = ee(this._tTime, p), !u && this._tTime && y !== f && (y = f), T && f & 1 && (D = l - D, x = 1), f !== y && !this._lock) {
                    var w = T && y & 1,
                        E = w === (T && f & 1);
                    if (f < y && (w = !w), u = w ? 0 : l, this._lock = 1, this.render(u || (x ? 0 : j(f * p)), n, !l)._lock = 0, this._tTime = h, !n && this.parent && _t(this, "onRepeat"), this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1), u && u !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (l = this._dur, o = this._tDur, E && (this._lock = 2, u = w ? l : -1e-4, this.render(u, !0), this.vars.repeatRefresh && !x && this.invalidate()), this._lock = 0, !this._ts && !m) return this;
                    br(this, x)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (C = vn(this, j(u), j(D)), C && (h -= D - (D = C._start))), this._tTime = h, this._time = D, this._act = !g, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, u = 0), !u && D && !n && (_t(this, "onStart"), this._tTime !== h)) return this;
            if (D >= u && r >= 0)
                for (d = this._first; d;) {
                    if (_ = d._next, (d._act || D >= d._start) && d._ts && C !== d) {
                        if (d.parent !== this) return this.render(r, n, s);
                        if (d.render(d._ts > 0 ? (D - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (D - d._start) * d._ts, n, s), D !== this._time || !this._ts && !m) {
                            C = 0, _ && (h += this._zTime = -N);
                            break
                        }
                    }
                    d = _
                } else {
                d = this._last;
                for (var b = r < 0 ? r : D; d;) {
                    if (_ = d._prev, (d._act || b <= d._end) && d._ts && C !== d) {
                        if (d.parent !== this) return this.render(r, n, s);
                        if (d.render(d._ts > 0 ? (b - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (b - d._start) * d._ts, n, s || Q && (d._initted || d._startAt)), D !== this._time || !this._ts && !m) {
                            C = 0, _ && (h += this._zTime = b ? -N : N);
                            break
                        }
                    }
                    d = _
                }
            }
            if (C && !n && (this.pause(), C.render(D >= u ? 0 : -N)._zTime = D >= u ? 1 : -1, this._ts)) return this._start = F, Le(this), this.render(r, n, s);
            this._onUpdate && !n && _t(this, "onUpdate", !0), (h === o && this._tTime >= this.totalDuration() || !h && u) && (F === this._start || Math.abs(g) !== Math.abs(this._ts)) && (this._lock || ((r || !l) && (h === o && this._ts > 0 || !h && this._ts < 0) && Mt(this, 1), !n && !(r < 0 && !u) && (h || u || !o) && (_t(this, h === o && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < o && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, e.add = function(r, n) {
        var s = this;
        if (Tt(n) || (n = ft(this, n, r)), !(r instanceof ne)) {
            if (Z(r)) return r.forEach(function(u) {
                return s.add(u, n)
            }), this;
            if (G(r)) return this.addLabel(r, n);
            if (Y(r)) r = H.delayedCall(0, r);
            else return this
        }
        return this !== r ? yt(this, r, n) : this
    }, e.getChildren = function(r, n, s, u) {
        r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), u === void 0 && (u = -Dt);
        for (var o = [], l = this._first; l;) l._start >= u && (l instanceof H ? n && o.push(l) : (s && o.push(l), r && o.push.apply(o, l.getChildren(!0, n, s)))), l = l._next;
        return o
    }, e.getById = function(r) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
            if (n[s].vars.id === r) return n[s]
    }, e.remove = function(r) {
        return G(r) ? this.removeLabel(r) : Y(r) ? this.killTweensOf(r) : (ze(this, r), r === this._recent && (this._recent = this._last), Yt(this))
    }, e.totalTime = function(r, n) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = j(ut.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), a.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime
    }, e.addLabel = function(r, n) {
        return this.labels[r] = ft(this, n), this
    }, e.removeLabel = function(r) {
        return delete this.labels[r], this
    }, e.addPause = function(r, n, s) {
        var u = H.delayedCall(0, n || _e, s);
        return u.data = "isPause", this._hasPause = 1, yt(this, u, ft(this, r))
    }, e.removePause = function(r) {
        var n = this._first;
        for (r = ft(this, r); n;) n._start === r && n.data === "isPause" && Mt(n), n = n._next
    }, e.killTweensOf = function(r, n, s) {
        for (var u = this.getTweensOf(r, s), o = u.length; o--;) bt !== u[o] && u[o].kill(r, n);
        return this
    }, e.getTweensOf = function(r, n) {
        for (var s = [], u = dt(r), o = this._first, l = Tt(n), h; o;) o instanceof H ? _n(o._targets, u) && (l ? (!bt || o._initted && o._ts) && o.globalTime(0) <= n && o.globalTime(o.totalDuration()) > n : !n || o.isActive()) && s.push(o) : (h = o.getTweensOf(u, n)).length && s.push.apply(s, h), o = o._next;
        return s
    }, e.tweenTo = function(r, n) {
        n = n || {};
        var s = this,
            u = ft(s, r),
            o = n,
            l = o.startAt,
            h = o.onStart,
            c = o.onStartParams,
            D = o.immediateRender,
            d, _ = H.to(s, pt({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: u,
                overwrite: "auto",
                duration: n.duration || Math.abs((u - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || N,
                onStart: function() {
                    if (s.pause(), !d) {
                        var p = n.duration || Math.abs((u - (l && "time" in l ? l.time : s._time)) / s.timeScale());
                        _._dur !== p && ie(_, p, 0, 1).render(_._time, !0, !0), d = 1
                    }
                    h && h.apply(_, c || [])
                }
            }, n));
        return D ? _.render(0) : _
    }, e.tweenFromTo = function(r, n, s) {
        return this.tweenTo(n, pt({
            startAt: {
                time: ft(this, r)
            }
        }, s))
    }, e.recent = function() {
        return this._recent
    }, e.nextLabel = function(r) {
        return r === void 0 && (r = this._time), zi(this, ft(this, r))
    }, e.previousLabel = function(r) {
        return r === void 0 && (r = this._time), zi(this, ft(this, r), 1)
    }, e.currentLabel = function(r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + N)
    }, e.shiftChildren = function(r, n, s) {
        s === void 0 && (s = 0);
        for (var u = this._first, o = this.labels, l; u;) u._start >= s && (u._start += r, u._end += r), u = u._next;
        if (n)
            for (l in o) o[l] >= s && (o[l] += r);
        return Yt(this)
    }, e.invalidate = function(r) {
        var n = this._first;
        for (this._lock = 0; n;) n.invalidate(r), n = n._next;
        return a.prototype.invalidate.call(this, r)
    }, e.clear = function(r) {
        r === void 0 && (r = !0);
        for (var n = this._first, s; n;) s = n._next, this.remove(n), n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Yt(this)
    }, e.totalDuration = function(r) {
        var n = 0,
            s = this,
            u = s._last,
            o = Dt,
            l, h, c;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
        if (s._dirty) {
            for (c = s.parent; u;) l = u._prev, u._dirty && u.totalDuration(), h = u._start, h > o && s._sort && u._ts && !s._lock ? (s._lock = 1, yt(s, u, h - u._delay, 1)._lock = 0) : o = h, h < 0 && u._ts && (n -= h, (!c && !s._dp || c && c.smoothChildTiming) && (s._start += h / s._ts, s._time -= h, s._tTime -= h), s.shiftChildren(-h, !1, -1 / 0), o = 0), u._end > n && u._ts && (n = u._end), u = l;
            ie(s, s === W && s._time > n ? s._time : n, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, t.updateRoot = function(r) {
        if (W._ts && (hr(W, Be(r, W)), ar = ut.frame), ut.frame >= Bi) {
            Bi += ot.autoSleep || 120;
            var n = W._first;
            if ((!n || !n._ts) && ot.autoSleep && ut._listeners.length < 2) {
                for (; n && !n._ts;) n = n._next;
                n || ut.sleep()
            }
        }
    }, t
}(ne);
pt(et.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var In = function(t, e, i, r, n, s, u) {
        var o = new nt(this._pt, t, e, 0, 1, zr, null, n),
            l = 0,
            h = 0,
            c, D, d, _, f, p, m, C;
        for (o.b = i, o.e = r, i += "", r += "", (m = ~r.indexOf("random(")) && (r = pe(r)), s && (C = [i, r], s(C, t, e), i = C[0], r = C[1]), D = i.match(Ve) || []; c = Ve.exec(r);) _ = c[0], f = r.substring(l, c.index), d ? d = (d + 1) % 5 : f.substr(-5) === "rgba(" && (d = 1), _ !== D[h++] && (p = parseFloat(D[h - 1]) || 0, o._pt = {
            _next: o._pt,
            p: f || h === 1 ? f : ",",
            s: p,
            c: _.charAt(1) === "=" ? Kt(p, _) - p : parseFloat(_) - p,
            m: d && d < 4 ? Math.round : 0
        }, l = Ve.lastIndex);
        return o.c = l < r.length ? r.substring(l, r.length) : "", o.fp = u, (rr.test(r) || m) && (o.e = 0), this._pt = o, o
    },
    Fi = function(t, e, i, r, n, s, u, o, l, h) {
        Y(r) && (r = r(n || 0, t, s));
        var c = t[e],
            D = i !== "get" ? i : Y(c) ? l ? t[e.indexOf("set") || !Y(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c,
            d = Y(c) ? l ? qn : kr : Ei,
            _;
        if (G(r) && (~r.indexOf("random(") && (r = pe(r)), r.charAt(1) === "=" && (_ = Kt(D, r) + (K(D) || 0), (_ || _ === 0) && (r = _))), !h || D !== r || oi) return !isNaN(D * r) && r !== "" ? (_ = new nt(this._pt, t, e, +D || 0, r - (D || 0), typeof c == "boolean" ? Hn : Rr, 0, d), l && (_.fp = l), u && _.modifier(u, this, t), this._pt = _) : (!c && !(e in t) && mi(e, r), In.call(this, t, e, D, r, d, o || ot.stringFilter, l))
    },
    Wn = function(t, e, i, r, n) {
        if (Y(t) && (t = de(t, n, e, i, r)), !vt(t) || t.style && t.nodeType || Z(t) || er(t)) return G(t) ? de(t, n, e, i, r) : t;
        var s = {},
            u;
        for (u in t) s[u] = de(t[u], n, e, i, r);
        return s
    },
    Or = function(t, e, i, r, n, s) {
        var u, o, l, h;
        if (st[t] && (u = new st[t]).init(n, u.rawVars ? e[t] : Wn(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = o = new nt(i._pt, n, t, 0, 1, u.render, u, 0, u.priority), i !== Gt))
            for (l = i._ptLookup[i._targets.indexOf(n)], h = u._props.length; h--;) l[u._props[h]] = o;
        return u
    },
    bt, oi, vi = function a(t, e, i) {
        var r = t.vars,
            n = r.ease,
            s = r.startAt,
            u = r.immediateRender,
            o = r.lazy,
            l = r.onUpdate,
            h = r.onUpdateParams,
            c = r.callbackScope,
            D = r.runBackwards,
            d = r.yoyoEase,
            _ = r.keyframes,
            f = r.autoRevert,
            p = t._dur,
            m = t._startAt,
            C = t._targets,
            g = t.parent,
            F = g && g.data === "nested" ? g.vars.targets : C,
            y = t._overwrite === "auto" && !di,
            T = t.timeline,
            x, w, E, b, P, M, R, I, O, S, A, k, v;
        if (T && (!_ || !n) && (n = "none"), t._ease = Ut(n, te.ease), t._yEase = d ? Sr(Ut(d === !0 ? n : d, te.ease)) : 0, d && t._yoyo && !t._repeat && (d = t._yEase, t._yEase = t._ease, t._ease = d), t._from = !T && !!r.runBackwards, !T || _ && !r.stagger) {
            if (I = C[0] ? Vt(C[0]).harness : 0, k = I && r[I.prop], x = Oe(r, gi), m && (m._zTime < 0 && m.progress(1), e < 0 && D && u && !f ? m.render(-1, !0) : m.revert(D && p ? xe : Dn), m._lazy = 0), s) {
                if (Mt(t._startAt = H.set(C, pt({
                    data: "isStart",
                    overwrite: !1,
                    parent: g,
                    immediateRender: !0,
                    lazy: !m && it(o),
                    startAt: null,
                    delay: 0,
                    onUpdate: l,
                    onUpdateParams: h,
                    callbackScope: c,
                    stagger: 0
                }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Q || !u && !f) && t._startAt.revert(xe), u && p && e <= 0 && i <= 0) {
                    e && (t._zTime = e);
                    return
                }
            } else if (D && p && !m) {
                if (e && (u = !1), E = pt({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: u && !m && it(o),
                    immediateRender: u,
                    stagger: 0,
                    parent: g
                }, x), k && (E[I.prop] = k), Mt(t._startAt = H.set(C, E)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Q ? t._startAt.revert(xe) : t._startAt.render(-1, !0)), t._zTime = e, !u) a(t._startAt, N, N);
                else if (!e) return
            }
            for (t._pt = t._ptCache = 0, o = p && it(o) || o && !p, w = 0; w < C.length; w++) {
                if (P = C[w], R = P._gsap || yi(C)[w]._gsap, t._ptLookup[w] = S = {}, ei[R.id] && Ot.length && Pe(), A = F === C ? w : F.indexOf(P), I && (O = new I).init(P, k || x, t, A, F) !== !1 && (t._pt = b = new nt(t._pt, P, O.name, 0, 1, O.render, O, 0, O.priority), O._props.forEach(function($) {
                    S[$] = b
                }), O.priority && (M = 1)), !I || k)
                    for (E in x) st[E] && (O = Or(E, x, t, A, P, F)) ? O.priority && (M = 1) : S[E] = b = Fi.call(t, P, E, "get", x[E], A, F, 0, r.stringFilter);
                t._op && t._op[w] && t.kill(P, t._op[w]), y && t._pt && (bt = t, W.killTweensOf(P, S, t.globalTime(e)), v = !t.parent, bt = 0), t._pt && o && (ei[R.id] = 1)
            }
            M && Lr(t), t._onInit && t._onInit(t)
        }
        t._onUpdate = l, t._initted = (!t._op || t._pt) && !v, _ && e <= 0 && T.render(Dt, !0, !0)
    },
    Vn = function(t, e, i, r, n, s, u) {
        var o = (t._pt && t._ptCache || (t._ptCache = {}))[e],
            l, h, c, D;
        if (!o)
            for (o = t._ptCache[e] = [], c = t._ptLookup, D = t._targets.length; D--;) {
                if (l = c[D][e], l && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== e && l.fp !== e;) l = l._next;
                if (!l) return oi = 1, t.vars[e] = "+=0", vi(t, u), oi = 0, 1;
                o.push(l)
            }
        for (D = o.length; D--;) h = o[D], l = h._pt || h, l.s = (r || r === 0) && !n ? r : l.s + (r || 0) + s * l.c, l.c = i - l.s, h.e && (h.e = U(i) + K(h.e)), h.b && (h.b = l.s + K(h.b))
    },
    Yn = function(t, e) {
        var i = t[0] ? Vt(t[0]).harness : 0,
            r = i && i.aliases,
            n, s, u, o;
        if (!r) return e;
        n = qt({}, e);
        for (s in r)
            if (s in n)
                for (o = r[s].split(","), u = o.length; u--;) n[o[u]] = n[s];
        return n
    },
    Un = function(t, e, i, r) {
        var n = e.ease || r || "power1.inOut",
            s, u;
        if (Z(e)) u = i[t] || (i[t] = []), e.forEach(function(o, l) {
            return u.push({
                t: l / (e.length - 1) * 100,
                v: o,
                e: n
            })
        });
        else
            for (s in e) u = i[s] || (i[s] = []), s === "ease" || u.push({
                t: parseFloat(t),
                v: e[s],
                e: n
            })
    },
    de = function(t, e, i, r, n) {
        return Y(t) ? t.call(e, i, r, n) : G(t) && ~t.indexOf("random(") ? pe(t) : t
    },
    Br = Ci + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Mr = {};
rt(Br + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
    return Mr[a] = 1
});
var H = function(a) {
    Zi(t, a);

    function t(i, r, n, s) {
        var u;
        typeof r == "number" && (n.duration = r, r = n, n = null), u = a.call(this, s ? r : ce(r)) || this;
        var o = u.vars,
            l = o.duration,
            h = o.delay,
            c = o.immediateRender,
            D = o.stagger,
            d = o.overwrite,
            _ = o.keyframes,
            f = o.defaults,
            p = o.scrollTrigger,
            m = o.yoyoEase,
            C = r.parent || W,
            g = (Z(i) || er(i) ? Tt(i[0]) : "length" in r) ? [i] : dt(i),
            F, y, T, x, w, E, b, P;
        if (u._targets = g.length ? yi(g) : Ae("GSAP target " + i + " not found. https://greensock.com", !ot.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = d, _ || D || Ee(l) || Ee(h)) {
            if (r = u.vars, F = u.timeline = new et({
                data: "nested",
                defaults: f || {},
                targets: C && C.data === "nested" ? C.vars.targets : g
            }), F.kill(), F.parent = F._dp = Et(u), F._start = 0, D || Ee(l) || Ee(h)) {
                if (x = g.length, b = D && Cr(D), vt(D))
                    for (w in D) ~Br.indexOf(w) && (P || (P = {}), P[w] = D[w]);
                for (y = 0; y < x; y++) T = Oe(r, Mr), T.stagger = 0, m && (T.yoyoEase = m), P && qt(T, P), E = g[y], T.duration = +de(l, Et(u), y, E, g), T.delay = (+de(h, Et(u), y, E, g) || 0) - u._delay, !D && x === 1 && T.delay && (u._delay = h = T.delay, u._start += h, T.delay = 0), F.to(E, T, b ? b(y, E, g) : 0), F._ease = B.none;
                F.duration() ? l = h = 0 : u.timeline = 0
            } else if (_) {
                ce(pt(F.vars.defaults, {
                    ease: "none"
                })), F._ease = Ut(_.ease || r.ease || "none");
                var M = 0,
                    R, I, O;
                if (Z(_)) _.forEach(function(S) {
                    return F.to(g, S, ">")
                }), F.duration();
                else {
                    T = {};
                    for (w in _) w === "ease" || w === "easeEach" || Un(w, _[w], T, _.easeEach);
                    for (w in T)
                        for (R = T[w].sort(function(S, A) {
                            return S.t - A.t
                        }), M = 0, y = 0; y < R.length; y++) I = R[y], O = {
                            ease: I.e,
                            duration: (I.t - (y ? R[y - 1].t : 0)) / 100 * l
                        }, O[w] = I.v, F.to(g, O, M), M += O.duration;
                    F.duration() < l && F.to({}, {
                        duration: l - F.duration()
                    })
                }
            }
            l || u.duration(l = F.duration())
        } else u.timeline = 0;
        return d === !0 && !di && (bt = Et(u), W.killTweensOf(g), bt = 0), yt(C, Et(u), n), r.reversed && u.reverse(), r.paused && u.paused(!0), (c || !l && !_ && u._start === j(C._time) && it(c) && Cn(Et(u)) && C.data !== "nested") && (u._tTime = -N, u.render(Math.max(0, -h) || 0)), p && _r(Et(u), p), u
    }
    var e = t.prototype;
    return e.render = function(r, n, s) {
        var u = this._time,
            o = this._tDur,
            l = this._dur,
            h = r < 0,
            c = r > o - N && !h ? o : r < N ? 0 : r,
            D, d, _, f, p, m, C, g, F;
        if (!l) Fn(this, r, n, s);
        else if (c !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
            if (D = c, g = this.timeline, this._repeat) {
                if (f = l + this._rDelay, this._repeat < -1 && h) return this.totalTime(f * 100 + r, n, s);
                if (D = j(c % f), c === o ? (_ = this._repeat, D = l) : (_ = ~~(c / f), _ && _ === c / f && (D = l, _--), D > l && (D = l)), m = this._yoyo && _ & 1, m && (F = this._yEase, D = l - D), p = ee(this._tTime, f), D === u && !s && this._initted) return this._tTime = c, this;
                _ !== p && (g && this._yEase && br(g, m), this.vars.repeatRefresh && !m && !this._lock && (this._lock = s = 1, this.render(j(f * _), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (pr(this, h ? r : D, s, n, c)) return this._tTime = 0, this;
                if (u !== this._time) return this;
                if (l !== this._dur) return this.render(r, n, s)
            }
            if (this._tTime = c, this._time = D, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = C = (F || this._ease)(D / l), this._from && (this.ratio = C = 1 - C), D && !u && !n && (_t(this, "onStart"), this._tTime !== c)) return this;
            for (d = this._pt; d;) d.r(C, d.d), d = d._next;
            g && g.render(r < 0 ? r : !D && m ? -N : g._dur * g._ease(D / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (h && ii(this, r, n, s), _t(this, "onUpdate")), this._repeat && _ !== p && this.vars.onRepeat && !n && this.parent && _t(this, "onRepeat"), (c === this._tDur || !c) && this._tTime === c && (h && !this._onUpdate && ii(this, r, !0, !0), (r || !l) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && Mt(this, 1), !n && !(h && !u) && (c || u || m) && (_t(this, c === o ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < o && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, e.targets = function() {
        return this._targets
    }, e.invalidate = function(r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), a.prototype.invalidate.call(this, r)
    }, e.resetTo = function(r, n, s, u) {
        me || ut.wake(), this._ts || this.play();
        var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            l;
        return this._initted || vi(this, o), l = this._ease(o / this._dur), Vn(this, r, n, s, u, l, o) ? this.resetTo(r, n, s, u) : (Ne(this, 0), this.parent || Dr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, e.kill = function(r, n) {
        if (n === void 0 && (n = "all"), !r && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? he(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, n, bt && bt.vars.overwrite !== !0)._first || he(this), this.parent && s !== this.timeline.totalDuration() && ie(this, this._dur * this.timeline._tDur / s, 0, 1), this
        }
        var u = this._targets,
            o = r ? dt(r) : u,
            l = this._ptLookup,
            h = this._pt,
            c, D, d, _, f, p, m;
        if ((!n || n === "all") && mn(u, o)) return n === "all" && (this._pt = 0), he(this);
        for (c = this._op = this._op || [], n !== "all" && (G(n) && (f = {}, rt(n, function(C) {
            return f[C] = 1
        }), n = f), n = Yn(u, n)), m = u.length; m--;)
            if (~o.indexOf(u[m])) {
                D = l[m], n === "all" ? (c[m] = n, _ = D, d = {}) : (d = c[m] = c[m] || {}, _ = n);
                for (f in _) p = D && D[f], p && ((!("kill" in p.d) || p.d.kill(f) === !0) && ze(this, p, "_pt"), delete D[f]), d !== "all" && (d[f] = 1)
            } return this._initted && !this._pt && h && he(this), this
    }, t.to = function(r, n) {
        return new t(r, n, arguments[2])
    }, t.from = function(r, n) {
        return De(1, arguments)
    }, t.delayedCall = function(r, n, s, u) {
        return new t(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: r,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: u
        })
    }, t.fromTo = function(r, n, s) {
        return De(2, arguments)
    }, t.set = function(r, n) {
        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n)
    }, t.killTweensOf = function(r, n, s) {
        return W.killTweensOf(r, n, s)
    }, t
}(ne);
pt(H.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
rt("staggerTo,staggerFrom,staggerFromTo", function(a) {
    H[a] = function() {
        var t = new et,
            e = ni.call(arguments, 0);
        return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e)
    }
});
var Ei = function(t, e, i) {
        return t[e] = i
    },
    kr = function(t, e, i) {
        return t[e](i)
    },
    qn = function(t, e, i, r) {
        return t[e](r.fp, i)
    },
    Xn = function(t, e, i) {
        return t.setAttribute(e, i)
    },
    xi = function(t, e) {
        return Y(t[e]) ? kr : _i(t[e]) && t.setAttribute ? Xn : Ei
    },
    Rr = function(t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
    },
    Hn = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    },
    zr = function(t, e) {
        var i = e._pt,
            r = "";
        if (!t && e.b) r = e.b;
        else if (t === 1 && e.e) r = e.e;
        else {
            for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
            r += e.c
        }
        e.set(e.t, e.p, r, e)
    },
    wi = function(t, e) {
        for (var i = e._pt; i;) i.r(t, i.d), i = i._next
    },
    $n = function(t, e, i, r) {
        for (var n = this._pt, s; n;) s = n._next, n.p === r && n.modifier(t, e, i), n = s
    },
    Gn = function(t) {
        for (var e = this._pt, i, r; e;) r = e._next, e.p === t && !e.op || e.op === t ? ze(this, e, "_pt") : e.dep || (i = 1), e = r;
        return !i
    },
    jn = function(t, e, i, r) {
        r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
    },
    Lr = function(t) {
        for (var e = t._pt, i, r, n, s; e;) {
            for (i = e._next, r = n; r && r.pr > e.pr;) r = r._next;
            (e._prev = r ? r._prev : s) ? e._prev._next = e: n = e, (e._next = r) ? r._prev = e : s = e, e = i
        }
        t._pt = n
    },
    nt = function() {
        function a(e, i, r, n, s, u, o, l, h) {
            this.t = i, this.s = n, this.c = s, this.p = r, this.r = u || Rr, this.d = o || this, this.set = l || Ei, this.pr = h || 0, this._next = e, e && (e._prev = this)
        }
        var t = a.prototype;
        return t.modifier = function(i, r, n) {
            this.mSet = this.mSet || this.set, this.set = jn, this.m = i, this.mt = n, this.tween = r
        }, a
    }();
rt(Ci + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
    return gi[a] = 1
});
at.TweenMax = at.TweenLite = H;
at.TimelineLite = at.TimelineMax = et;
W = new et({
    sortChildren: !1,
    defaults: te,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
ot.stringFilter = Tr;
var se = [],
    Te = {},
    Kn = [],
    Ni = 0,
    He = function(t) {
        return (Te[t] || Kn).map(function(e) {
            return e()
        })
    },
    ai = function() {
        var t = Date.now(),
            e = [];
        t - Ni > 2 && (He("matchMediaInit"), se.forEach(function(i) {
            var r = i.queries,
                n = i.conditions,
                s, u, o, l;
            for (u in r) s = ct.matchMedia(r[u]).matches, s && (o = 1), s !== n[u] && (n[u] = s, l = 1);
            l && (i.revert(), o && e.push(i))
        }), He("matchMediaRevert"), e.forEach(function(i) {
            return i.onMatch(i)
        }), Ni = t, He("matchMedia"))
    },
    Nr = function() {
        function a(e, i) {
            this.selector = i && si(i), this.data = [], this._r = [], this.isReverted = !1, e && this.add(e)
        }
        var t = a.prototype;
        return t.add = function(i, r, n) {
            Y(i) && (n = r, r = i, i = Y);
            var s = this,
                u = function() {
                    var l = q,
                        h = s.selector,
                        c;
                    return l && l !== s && l.data.push(s), n && (s.selector = si(n)), q = s, c = r.apply(s, arguments), Y(c) && s._r.push(c), q = l, s.selector = h, s.isReverted = !1, c
                };
            return s.last = u, i === Y ? u(s) : i ? s[i] = u : u
        }, t.ignore = function(i) {
            var r = q;
            q = null, i(this), q = r
        }, t.getTweens = function() {
            var i = [];
            return this.data.forEach(function(r) {
                return r instanceof a ? i.push.apply(i, r.getTweens()) : r instanceof H && !(r.parent && r.parent.data === "nested") && i.push(r)
            }), i
        }, t.clear = function() {
            this._r.length = this.data.length = 0
        }, t.kill = function(i, r) {
            var n = this;
            if (i) {
                var s = this.getTweens();
                this.data.forEach(function(o) {
                    o.data === "isFlip" && (o.revert(), o.getChildren(!0, !0, !1).forEach(function(l) {
                        return s.splice(s.indexOf(l), 1)
                    }))
                }), s.map(function(o) {
                    return {
                        g: o.globalTime(0),
                        t: o
                    }
                }).sort(function(o, l) {
                    return l.g - o.g || -1
                }).forEach(function(o) {
                    return o.t.revert(i)
                }), this.data.forEach(function(o) {
                    return !(o instanceof ne) && o.revert && o.revert(i)
                }), this._r.forEach(function(o) {
                    return o(i, n)
                }), this.isReverted = !0
            } else this.data.forEach(function(o) {
                return o.kill && o.kill()
            });
            if (this.clear(), r) {
                var u = se.indexOf(this);
                ~u && se.splice(u, 1)
            }
        }, t.revert = function(i) {
            this.kill(i || {})
        }, a
    }(),
    Qn = function() {
        function a(e) {
            this.contexts = [], this.scope = e
        }
        var t = a.prototype;
        return t.add = function(i, r, n) {
            vt(i) || (i = {
                matches: i
            });
            var s = new Nr(0, n || this.scope),
                u = s.conditions = {},
                o, l, h;
            this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
            for (l in i) l === "all" ? h = 1 : (o = ct.matchMedia(i[l]), o && (se.indexOf(s) < 0 && se.push(s), (u[l] = o.matches) && (h = 1), o.addListener ? o.addListener(ai) : o.addEventListener("change", ai)));
            return h && r(s), this
        }, t.revert = function(i) {
            this.kill(i || {})
        }, t.kill = function(i) {
            this.contexts.forEach(function(r) {
                return r.kill(i, !0)
            })
        }, a
    }(),
    Me = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.forEach(function(r) {
                return Bn(r)
            })
        },
        timeline: function(t) {
            return new et(t)
        },
        getTweensOf: function(t, e) {
            return W.getTweensOf(t, e)
        },
        getProperty: function(t, e, i, r) {
            G(t) && (t = dt(t)[0]);
            var n = Vt(t || {}).get,
                s = i ? cr : fr;
            return i === "native" && (i = ""), t && (e ? s((st[e] && st[e].get || n)(t, e, i, r)) : function(u, o, l) {
                return s((st[u] && st[u].get || n)(t, u, o, l))
            })
        },
        quickSetter: function(t, e, i) {
            if (t = dt(t), t.length > 1) {
                var r = t.map(function(h) {
                        return lt.quickSetter(h, e, i)
                    }),
                    n = r.length;
                return function(h) {
                    for (var c = n; c--;) r[c](h)
                }
            }
            t = t[0] || {};
            var s = st[e],
                u = Vt(t),
                o = u.harness && (u.harness.aliases || {})[e] || e,
                l = s ? function(h) {
                    var c = new s;
                    Gt._pt = 0, c.init(t, i ? h + i : h, Gt, 0, [t]), c.render(1, c), Gt._pt && wi(1, Gt)
                } : u.set(t, o);
            return s ? l : function(h) {
                return l(t, o, i ? h + i : h, u, 1)
            }
        },
        quickTo: function(t, e, i) {
            var r, n = lt.to(t, qt((r = {}, r[e] = "+=0.1", r.paused = !0, r), i || {})),
                s = function(o, l, h) {
                    return n.resetTo(e, o, l, h)
                };
            return s.tween = n, s
        },
        isTweening: function(t) {
            return W.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Ut(t.ease, te.ease)), Mi(te, t || {})
        },
        config: function(t) {
            return Mi(ot, t || {})
        },
        registerEffect: function(t) {
            var e = t.name,
                i = t.effect,
                r = t.plugins,
                n = t.defaults,
                s = t.extendTimeline;
            (r || "").split(",").forEach(function(u) {
                return u && !st[u] && !at[u] && Ae(e + " effect requires " + u + " plugin.")
            }), Ye[e] = function(u, o, l) {
                return i(dt(u), pt(o || {}, n), l)
            }, s && (et.prototype[e] = function(u, o, l) {
                return this.add(Ye[e](u, vt(o) ? o : (l = o) && {}, this), l)
            })
        },
        registerEase: function(t, e) {
            B[t] = Ut(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Ut(t, e) : B
        },
        getById: function(t) {
            return W.getById(t)
        },
        exportRoot: function(t, e) {
            t === void 0 && (t = {});
            var i = new et(t),
                r, n;
            for (i.smoothChildTiming = it(t.smoothChildTiming), W.remove(i), i._dp = 0, i._time = i._tTime = W._time, r = W._first; r;) n = r._next, (e || !(!r._dur && r instanceof H && r.vars.onComplete === r._targets[0])) && yt(i, r, r._start - r._delay), r = n;
            return yt(W, i, 0), i
        },
        context: function(t, e) {
            return t ? new Nr(t, e) : q
        },
        matchMedia: function(t) {
            return new Qn(t)
        },
        matchMediaRefresh: function() {
            return se.forEach(function(t) {
                var e = t.conditions,
                    i, r;
                for (r in e) e[r] && (e[r] = !1, i = 1);
                i && t.revert()
            }) || ai()
        },
        addEventListener: function(t, e) {
            var i = Te[t] || (Te[t] = []);
            ~i.indexOf(e) || i.push(e)
        },
        removeEventListener: function(t, e) {
            var i = Te[t],
                r = i && i.indexOf(e);
            r >= 0 && i.splice(r, 1)
        },
        utils: {
            wrap: An,
            wrapYoyo: Pn,
            distribute: Cr,
            random: Fr,
            snap: yr,
            normalize: bn,
            getUnit: K,
            clamp: xn,
            splitColor: xr,
            toArray: dt,
            selector: si,
            mapRange: Er,
            pipe: Tn,
            unitize: Sn,
            interpolate: On,
            shuffle: gr
        },
        install: ur,
        effects: Ye,
        ticker: ut,
        updateRoot: et.updateRoot,
        plugins: st,
        globalTimeline: W,
        core: {
            PropTween: nt,
            globals: or,
            Tween: H,
            Timeline: et,
            Animation: ne,
            getCache: Vt,
            _removeLinkedListItem: ze,
            reverting: function() {
                return Q
            },
            context: function(t) {
                return t && q && (q.data.push(t), t._ctx = q), q
            },
            suppressOverwrites: function(t) {
                return di = t
            }
        }
    };
rt("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
    return Me[a] = H[a]
});
ut.add(et.updateRoot);
Gt = Me.to({}, {
    duration: 0
});
var Zn = function(t, e) {
        for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
        return i
    },
    Jn = function(t, e) {
        var i = t._targets,
            r, n, s;
        for (r in e)
            for (n = i.length; n--;) s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = Zn(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r))
    },
    $e = function(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function(r, n, s) {
                s._onInit = function(u) {
                    var o, l;
                    if (G(n) && (o = {}, rt(n, function(h) {
                        return o[h] = 1
                    }), n = o), e) {
                        o = {};
                        for (l in n) o[l] = e(n[l]);
                        n = o
                    }
                    Jn(u, n)
                }
            }
        }
    },
    lt = Me.registerPlugin({
        name: "attr",
        init: function(t, e, i, r, n) {
            var s, u, o;
            this.tween = i;
            for (s in e) o = t.getAttribute(s) || "", u = this.add(t, "setAttribute", (o || 0) + "", e[s], r, n, 0, 0, s), u.op = s, u.b = o, this._props.push(s)
        },
        render: function(t, e) {
            for (var i = e._pt; i;) Q ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
        }
    }, $e("roundProps", ui), $e("modifiers"), $e("snap", yr)) || Me;
H.version = et.version = lt.version = "3.11.4";
sr = 1;
tr() && re();
B.Power0;
B.Power1;
B.Power2;
B.Power3;
B.Power4;
B.Linear;
B.Quad;
B.Cubic;
B.Quart;
B.Quint;
B.Strong;
B.Elastic;
B.Back;
B.SteppedEase;
B.Bounce;
B.Sine;
B.Expo;
B.Circ;
/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Ii, At, Qt, Ti, Wt, Wi, Si, ts = function() {
        return typeof window < "u"
    },
    St = {},
    Nt = 180 / Math.PI,
    Zt = Math.PI / 180,
    Ht = Math.atan2,
    Vi = 1e8,
    bi = /([A-Z])/g,
    es = /(left|right|width|margin|padding|x)/i,
    is = /[\s,\(]\S/,
    wt = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    li = function(t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    },
    rs = function(t, e) {
        return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    },
    ns = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
    },
    ss = function(t, e) {
        var i = e.s + e.c * t;
        e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
    },
    Ir = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    },
    Wr = function(t, e) {
        return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
    },
    us = function(t, e, i) {
        return t.style[e] = i
    },
    os = function(t, e, i) {
        return t.style.setProperty(e, i)
    },
    as = function(t, e, i) {
        return t._gsap[e] = i
    },
    ls = function(t, e, i) {
        return t._gsap.scaleX = t._gsap.scaleY = i
    },
    hs = function(t, e, i, r, n) {
        var s = t._gsap;
        s.scaleX = s.scaleY = i, s.renderTransform(n, s)
    },
    fs = function(t, e, i, r, n) {
        var s = t._gsap;
        s[e] = i, s.renderTransform(n, s)
    },
    V = "transform",
    mt = V + "Origin",
    cs = function(t, e) {
        var i = this,
            r = this.target,
            n = r.style;
        if (t in St) {
            if (this.tfm = this.tfm || {}, t !== "transform" && (t = wt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(s) {
                return i.tfm[s] = xt(r, s)
            }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : xt(r, t)), this.props.indexOf(V) >= 0) return;
            r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(mt, e, "")), t = V
        }(n || e) && this.props.push(t, e, n[t])
    },
    Vr = function(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    },
    Ds = function() {
        var t = this.props,
            e = this.target,
            i = e.style,
            r = e._gsap,
            n, s;
        for (n = 0; n < t.length; n += 3) t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].replace(bi, "-$1").toLowerCase());
        if (this.tfm) {
            for (s in this.tfm) r[s] = this.tfm[s];
            r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = Si(), n && !n.isStart && !i[V] && (Vr(i), r.uncache = 1)
        }
    },
    Yr = function(t, e) {
        var i = {
            target: t,
            props: [],
            revert: Ds,
            save: cs
        };
        return e && e.split(",").forEach(function(r) {
            return i.save(r)
        }), i
    },
    Ur, hi = function(t, e) {
        var i = At.createElementNS ? At.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : At.createElement(t);
        return i.style ? i : At.createElement(t)
    },
    Ft = function a(t, e, i) {
        var r = getComputedStyle(t);
        return r[e] || r.getPropertyValue(e.replace(bi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && a(t, ue(e) || e, 1) || ""
    },
    Yi = "O,Moz,ms,Ms,Webkit".split(","),
    ue = function(t, e, i) {
        var r = e || Wt,
            n = r.style,
            s = 5;
        if (t in n && !i) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Yi[s] + t in n););
        return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Yi[s] : "") + t
    },
    fi = function() {
        ts() && window.document && (Ii = window, At = Ii.document, Qt = At.documentElement, Wt = hi("div") || {
            style: {}
        }, hi("div"), V = ue(V), mt = V + "Origin", Wt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ur = !!ue("perspective"), Si = lt.core.reverting, Ti = 1)
    },
    Ge = function a(t) {
        var e = hi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            r = this.nextSibling,
            n = this.style.cssText,
            s;
        if (Qt.appendChild(e), e.appendChild(this), this.style.display = "block", t) try {
            s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = a
        } catch {} else this._gsapBBox && (s = this._gsapBBox());
        return i && (r ? i.insertBefore(this, r) : i.appendChild(this)), Qt.removeChild(e), this.style.cssText = n, s
    },
    Ui = function(t, e) {
        for (var i = e.length; i--;)
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
    },
    qr = function(t) {
        var e;
        try {
            e = t.getBBox()
        } catch {
            e = Ge.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === Ge || (e = Ge.call(t, !0)), e && !e.width && !e.x && !e.y ? {
            x: +Ui(t, ["x", "cx", "x1"]) || 0,
            y: +Ui(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : e
    },
    Xr = function(t) {
        return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && qr(t))
    },
    ge = function(t, e) {
        if (e) {
            var i = t.style;
            e in St && e !== mt && (e = V), i.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(e.replace(bi, "-$1").toLowerCase())) : i.removeAttribute(e)
        }
    },
    Pt = function(t, e, i, r, n, s) {
        var u = new nt(t._pt, e, i, 0, 1, s ? Wr : Ir);
        return t._pt = u, u.b = r, u.e = n, t._props.push(i), u
    },
    qi = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    ds = {
        grid: 1,
        flex: 1
    },
    kt = function a(t, e, i, r) {
        var n = parseFloat(i) || 0,
            s = (i + "").trim().substr((n + "").length) || "px",
            u = Wt.style,
            o = es.test(e),
            l = t.tagName.toLowerCase() === "svg",
            h = (l ? "client" : "offset") + (o ? "Width" : "Height"),
            c = 100,
            D = r === "px",
            d = r === "%",
            _, f, p, m;
        return r === s || !n || qi[r] || qi[s] ? n : (s !== "px" && !D && (n = a(t, e, i, "px")), m = t.getCTM && Xr(t), (d || s === "%") && (St[e] || ~e.indexOf("adius")) ? (_ = m ? t.getBBox()[o ? "width" : "height"] : t[h], U(d ? n / _ * c : n / 100 * _)) : (u[o ? "width" : "height"] = c + (D ? s : r), f = ~e.indexOf("adius") || r === "em" && t.appendChild && !l ? t : t.parentNode, m && (f = (t.ownerSVGElement || {}).parentNode), (!f || f === At || !f.appendChild) && (f = At.body), p = f._gsap, p && d && p.width && o && p.time === ut.time && !p.uncache ? U(n / p.width * c) : ((d || s === "%") && !ds[Ft(f, "display")] && (u.position = Ft(t, "position")), f === t && (u.position = "static"), f.appendChild(Wt), _ = Wt[h], f.removeChild(Wt), u.position = "absolute", o && d && (p = Vt(f), p.time = ut.time, p.width = f[h]), U(D ? _ * n / c : _ && n ? c / _ * n : 0))))
    },
    xt = function(t, e, i, r) {
        var n;
        return Ti || fi(), e in wt && e !== "transform" && (e = wt[e], ~e.indexOf(",") && (e = e.split(",")[0])), St[e] && e !== "transform" ? (n = ye(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Re(Ft(t, mt)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = ke[e] && ke[e](t, e, i) || Ft(t, e) || lr(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? kt(t, e, n, i) + i : n
    },
    _s = function(t, e, i, r) {
        if (!i || i === "none") {
            var n = ue(e, t, 1),
                s = n && Ft(t, n, 1);
            s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = Ft(t, "borderTopColor"))
        }
        var u = new nt(this._pt, t.style, e, 0, 1, zr),
            o = 0,
            l = 0,
            h, c, D, d, _, f, p, m, C, g, F, y;
        if (u.b = i, u.e = r, i += "", r += "", r === "auto" && (t.style[e] = r, r = Ft(t, e) || r, t.style[e] = i), h = [i, r], Tr(h), i = h[0], r = h[1], D = i.match($t) || [], y = r.match($t) || [], y.length) {
            for (; c = $t.exec(r);) p = c[0], C = r.substring(o, c.index), _ ? _ = (_ + 1) % 5 : (C.substr(-5) === "rgba(" || C.substr(-5) === "hsla(") && (_ = 1), p !== (f = D[l++] || "") && (d = parseFloat(f) || 0, F = f.substr((d + "").length), p.charAt(1) === "=" && (p = Kt(d, p) + F), m = parseFloat(p), g = p.substr((m + "").length), o = $t.lastIndex - g.length, g || (g = g || ot.units[e] || F, o === r.length && (r += g, u.e += g)), F !== g && (d = kt(t, e, f, g) || 0), u._pt = {
                _next: u._pt,
                p: C || l === 1 ? C : ",",
                s: d,
                c: m - d,
                m: _ && _ < 4 || e === "zIndex" ? Math.round : 0
            });
            u.c = o < r.length ? r.substring(o, r.length) : ""
        } else u.r = e === "display" && r === "none" ? Wr : Ir;
        return rr.test(r) && (u.e = 0), this._pt = u, u
    },
    Xi = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    ps = function(t) {
        var e = t.split(" "),
            i = e[0],
            r = e[1] || "50%";
        return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Xi[i] || i, e[1] = Xi[r] || r, e.join(" ")
    },
    ms = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var i = e.t,
                r = i.style,
                n = e.u,
                s = i._gsap,
                u, o, l;
            if (n === "all" || n === !0) r.cssText = "", o = 1;
            else
                for (n = n.split(","), l = n.length; --l > -1;) u = n[l], St[u] && (o = 1, u = u === "transformOrigin" ? mt : V), ge(i, u);
            o && (ge(i, V), s && (s.svg && i.removeAttribute("transform"), ye(i, 1), s.uncache = 1, Vr(r)))
        }
    },
    ke = {
        clearProps: function(t, e, i, r, n) {
            if (n.data !== "isFromStart") {
                var s = t._pt = new nt(t._pt, e, i, 0, 0, ms);
                return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1
            }
        }
    },
    Ce = [1, 0, 0, 1, 0, 0],
    Hr = {},
    $r = function(t) {
        return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
    },
    Hi = function(t) {
        var e = Ft(t, V);
        return $r(e) ? Ce : e.substr(7).match(ir).map(U)
    },
    Ai = function(t, e) {
        var i = t._gsap || Vt(t),
            r = t.style,
            n = Hi(t),
            s, u, o, l;
        return i.svg && t.getAttribute("transform") ? (o = t.transform.baseVal.consolidate().matrix, n = [o.a, o.b, o.c, o.d, o.e, o.f], n.join(",") === "1,0,0,1,0,0" ? Ce : n) : (n === Ce && !t.offsetParent && t !== Qt && !i.svg && (o = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (l = 1, u = t.nextElementSibling, Qt.appendChild(t)), n = Hi(t), o ? r.display = o : ge(t, "display"), l && (u ? s.insertBefore(t, u) : s ? s.appendChild(t) : Qt.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    },
    ci = function(t, e, i, r, n, s) {
        var u = t._gsap,
            o = n || Ai(t, !0),
            l = u.xOrigin || 0,
            h = u.yOrigin || 0,
            c = u.xOffset || 0,
            D = u.yOffset || 0,
            d = o[0],
            _ = o[1],
            f = o[2],
            p = o[3],
            m = o[4],
            C = o[5],
            g = e.split(" "),
            F = parseFloat(g[0]) || 0,
            y = parseFloat(g[1]) || 0,
            T, x, w, E;
        i ? o !== Ce && (x = d * p - _ * f) && (w = F * (p / x) + y * (-f / x) + (f * C - p * m) / x, E = F * (-_ / x) + y * (d / x) - (d * C - _ * m) / x, F = w, y = E) : (T = qr(t), F = T.x + (~g[0].indexOf("%") ? F / 100 * T.width : F), y = T.y + (~(g[1] || g[0]).indexOf("%") ? y / 100 * T.height : y)), r || r !== !1 && u.smooth ? (m = F - l, C = y - h, u.xOffset = c + (m * d + C * f) - m, u.yOffset = D + (m * _ + C * p) - C) : u.xOffset = u.yOffset = 0, u.xOrigin = F, u.yOrigin = y, u.smooth = !!r, u.origin = e, u.originIsAbsolute = !!i, t.style[mt] = "0px 0px", s && (Pt(s, u, "xOrigin", l, F), Pt(s, u, "yOrigin", h, y), Pt(s, u, "xOffset", c, u.xOffset), Pt(s, u, "yOffset", D, u.yOffset)), t.setAttribute("data-svg-origin", F + " " + y)
    },
    ye = function(t, e) {
        var i = t._gsap || new Pr(t);
        if ("x" in i && !e && !i.uncache) return i;
        var r = t.style,
            n = i.scaleX < 0,
            s = "px",
            u = "deg",
            o = getComputedStyle(t),
            l = Ft(t, mt) || "0",
            h, c, D, d, _, f, p, m, C, g, F, y, T, x, w, E, b, P, M, R, I, O, S, A, k, v, $, J, tt, oe, X, z;
        return h = c = D = f = p = m = C = g = F = 0, d = _ = 1, i.svg = !!(t.getCTM && Xr(t)), o.translate && ((o.translate !== "none" || o.scale !== "none" || o.rotate !== "none") && (r[V] = (o.translate !== "none" ? "translate3d(" + (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") + (o.scale !== "none" ? "scale(" + o.scale.split(" ").join(",") + ") " : "") + (o[V] !== "none" ? o[V] : "")), r.scale = r.rotate = r.translate = "none"), x = Ai(t, i.svg), i.svg && (i.uncache ? (k = t.getBBox(), l = i.xOrigin - k.x + "px " + (i.yOrigin - k.y) + "px", A = "") : A = !e && t.getAttribute("data-svg-origin"), ci(t, A || l, !!A || i.originIsAbsolute, i.smooth !== !1, x)), y = i.xOrigin || 0, T = i.yOrigin || 0, x !== Ce && (P = x[0], M = x[1], R = x[2], I = x[3], h = O = x[4], c = S = x[5], x.length === 6 ? (d = Math.sqrt(P * P + M * M), _ = Math.sqrt(I * I + R * R), f = P || M ? Ht(M, P) * Nt : 0, C = R || I ? Ht(R, I) * Nt + f : 0, C && (_ *= Math.abs(Math.cos(C * Zt))), i.svg && (h -= y - (y * P + T * R), c -= T - (y * M + T * I))) : (z = x[6], oe = x[7], $ = x[8], J = x[9], tt = x[10], X = x[11], h = x[12], c = x[13], D = x[14], w = Ht(z, tt), p = w * Nt, w && (E = Math.cos(-w), b = Math.sin(-w), A = O * E + $ * b, k = S * E + J * b, v = z * E + tt * b, $ = O * -b + $ * E, J = S * -b + J * E, tt = z * -b + tt * E, X = oe * -b + X * E, O = A, S = k, z = v), w = Ht(-R, tt), m = w * Nt, w && (E = Math.cos(-w), b = Math.sin(-w), A = P * E - $ * b, k = M * E - J * b, v = R * E - tt * b, X = I * b + X * E, P = A, M = k, R = v), w = Ht(M, P), f = w * Nt, w && (E = Math.cos(w), b = Math.sin(w), A = P * E + M * b, k = O * E + S * b, M = M * E - P * b, S = S * E - O * b, P = A, O = k), p && Math.abs(p) + Math.abs(f) > 359.9 && (p = f = 0, m = 180 - m), d = U(Math.sqrt(P * P + M * M + R * R)), _ = U(Math.sqrt(S * S + z * z)), w = Ht(O, S), C = Math.abs(w) > 2e-4 ? w * Nt : 0, F = X ? 1 / (X < 0 ? -X : X) : 0), i.svg && (A = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !$r(Ft(t, V)), A && t.setAttribute("transform", A))), Math.abs(C) > 90 && Math.abs(C) < 270 && (n ? (d *= -1, C += f <= 0 ? 180 : -180, f += f <= 0 ? 180 : -180) : (_ *= -1, C += C <= 0 ? 180 : -180)), e = e || i.uncache, i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = c - ((i.yPercent = c && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = D + s, i.scaleX = U(d), i.scaleY = U(_), i.rotation = U(f) + u, i.rotationX = U(p) + u, i.rotationY = U(m) + u, i.skewX = C + u, i.skewY = g + u, i.transformPerspective = F + s, (i.zOrigin = parseFloat(l.split(" ")[2]) || 0) && (r[mt] = Re(l)), i.xOffset = i.yOffset = 0, i.force3D = ot.force3D, i.renderTransform = i.svg ? Cs : Ur ? Gr : gs, i.uncache = 0, i
    },
    Re = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    },
    je = function(t, e, i) {
        var r = K(e);
        return U(parseFloat(e) + parseFloat(kt(t, "x", i + "px", r))) + r
    },
    gs = function(t, e) {
        e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Gr(t, e)
    },
    zt = "0deg",
    ae = "0px",
    Lt = ") ",
    Gr = function(t, e) {
        var i = e || this,
            r = i.xPercent,
            n = i.yPercent,
            s = i.x,
            u = i.y,
            o = i.z,
            l = i.rotation,
            h = i.rotationY,
            c = i.rotationX,
            D = i.skewX,
            d = i.skewY,
            _ = i.scaleX,
            f = i.scaleY,
            p = i.transformPerspective,
            m = i.force3D,
            C = i.target,
            g = i.zOrigin,
            F = "",
            y = m === "auto" && t && t !== 1 || m === !0;
        if (g && (c !== zt || h !== zt)) {
            var T = parseFloat(h) * Zt,
                x = Math.sin(T),
                w = Math.cos(T),
                E;
            T = parseFloat(c) * Zt, E = Math.cos(T), s = je(C, s, x * E * -g), u = je(C, u, -Math.sin(T) * -g), o = je(C, o, w * E * -g + g)
        }
        p !== ae && (F += "perspective(" + p + Lt), (r || n) && (F += "translate(" + r + "%, " + n + "%) "), (y || s !== ae || u !== ae || o !== ae) && (F += o !== ae || y ? "translate3d(" + s + ", " + u + ", " + o + ") " : "translate(" + s + ", " + u + Lt), l !== zt && (F += "rotate(" + l + Lt), h !== zt && (F += "rotateY(" + h + Lt), c !== zt && (F += "rotateX(" + c + Lt), (D !== zt || d !== zt) && (F += "skew(" + D + ", " + d + Lt), (_ !== 1 || f !== 1) && (F += "scale(" + _ + ", " + f + Lt), C.style[V] = F || "translate(0, 0)"
    },
    Cs = function(t, e) {
        var i = e || this,
            r = i.xPercent,
            n = i.yPercent,
            s = i.x,
            u = i.y,
            o = i.rotation,
            l = i.skewX,
            h = i.skewY,
            c = i.scaleX,
            D = i.scaleY,
            d = i.target,
            _ = i.xOrigin,
            f = i.yOrigin,
            p = i.xOffset,
            m = i.yOffset,
            C = i.forceCSS,
            g = parseFloat(s),
            F = parseFloat(u),
            y, T, x, w, E;
        o = parseFloat(o), l = parseFloat(l), h = parseFloat(h), h && (h = parseFloat(h), l += h, o += h), o || l ? (o *= Zt, l *= Zt, y = Math.cos(o) * c, T = Math.sin(o) * c, x = Math.sin(o - l) * -D, w = Math.cos(o - l) * D, l && (h *= Zt, E = Math.tan(l - h), E = Math.sqrt(1 + E * E), x *= E, w *= E, h && (E = Math.tan(h), E = Math.sqrt(1 + E * E), y *= E, T *= E)), y = U(y), T = U(T), x = U(x), w = U(w)) : (y = c, w = D, T = x = 0), (g && !~(s + "").indexOf("px") || F && !~(u + "").indexOf("px")) && (g = kt(d, "x", s, "px"), F = kt(d, "y", u, "px")), (_ || f || p || m) && (g = U(g + _ - (_ * y + f * x) + p), F = U(F + f - (_ * T + f * w) + m)), (r || n) && (E = d.getBBox(), g = U(g + r / 100 * E.width), F = U(F + n / 100 * E.height)), E = "matrix(" + y + "," + T + "," + x + "," + w + "," + g + "," + F + ")", d.setAttribute("transform", E), C && (d.style[V] = E)
    },
    ys = function(t, e, i, r, n) {
        var s = 360,
            u = G(n),
            o = parseFloat(n) * (u && ~n.indexOf("rad") ? Nt : 1),
            l = o - r,
            h = r + l + "deg",
            c, D;
        return u && (c = n.split("_")[1], c === "short" && (l %= s, l !== l % (s / 2) && (l += l < 0 ? s : -s)), c === "cw" && l < 0 ? l = (l + s * Vi) % s - ~~(l / s) * s : c === "ccw" && l > 0 && (l = (l - s * Vi) % s - ~~(l / s) * s)), t._pt = D = new nt(t._pt, e, i, r, l, rs), D.e = h, D.u = "deg", t._props.push(i), D
    },
    $i = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    },
    Fs = function(t, e, i) {
        var r = $i({}, i._gsap),
            n = "perspective,force3D,transformOrigin,svgOrigin",
            s = i.style,
            u, o, l, h, c, D, d, _;
        r.svg ? (l = i.getAttribute("transform"), i.setAttribute("transform", ""), s[V] = e, u = ye(i, 1), ge(i, V), i.setAttribute("transform", l)) : (l = getComputedStyle(i)[V], s[V] = e, u = ye(i, 1), s[V] = l);
        for (o in St) l = r[o], h = u[o], l !== h && n.indexOf(o) < 0 && (d = K(l), _ = K(h), c = d !== _ ? kt(i, o, l, _) : parseFloat(l), D = parseFloat(h), t._pt = new nt(t._pt, u, o, c, D - c, li), t._pt.u = _ || 0, t._props.push(o));
        $i(u, r)
    };
rt("padding,margin,Width,Radius", function(a, t) {
    var e = "Top",
        i = "Right",
        r = "Bottom",
        n = "Left",
        s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(u) {
            return t < 2 ? a + u : "border" + u + a
        });
    ke[t > 1 ? "border" + a : a] = function(u, o, l, h, c) {
        var D, d;
        if (arguments.length < 4) return D = s.map(function(_) {
            return xt(u, _, l)
        }), d = D.join(" "), d.split(D[0]).length === 5 ? D[0] : d;
        D = (h + "").split(" "), d = {}, s.forEach(function(_, f) {
            return d[_] = D[f] = D[f] || D[(f - 1) / 2 | 0]
        }), u.init(o, d, c)
    }
});
var jr = {
    name: "css",
    register: fi,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, e, i, r, n) {
        var s = this._props,
            u = t.style,
            o = i.vars.startAt,
            l, h, c, D, d, _, f, p, m, C, g, F, y, T, x, w;
        Ti || fi(), this.styles = this.styles || Yr(t), w = this.styles.props, this.tween = i;
        for (f in e)
            if (f !== "autoRound" && (h = e[f], !(st[f] && Or(f, e, i, r, t, n)))) {
                if (d = typeof h, _ = ke[f], d === "function" && (h = h.call(i, r, t, n), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = pe(h)), _) _(this, t, f, h, i) && (x = 1);
                else if (f.substr(0, 2) === "--") l = (getComputedStyle(t).getPropertyValue(f) + "").trim(), h += "", Bt.lastIndex = 0, Bt.test(l) || (p = K(l), m = K(h)), m ? p !== m && (l = kt(t, f, l, m) + m) : p && (h += p), this.add(u, "setProperty", l, h, r, n, 0, 0, f), s.push(f), w.push(f, 0, u[f]);
                else if (d !== "undefined") {
                    if (o && f in o ? (l = typeof o[f] == "function" ? o[f].call(i, r, t, n) : o[f], G(l) && ~l.indexOf("random(") && (l = pe(l)), K(l + "") || (l += ot.units[f] || K(xt(t, f)) || ""), (l + "").charAt(1) === "=" && (l = xt(t, f))) : l = xt(t, f), D = parseFloat(l), C = d === "string" && h.charAt(1) === "=" && h.substr(0, 2), C && (h = h.substr(2)), c = parseFloat(h), f in wt && (f === "autoAlpha" && (D === 1 && xt(t, "visibility") === "hidden" && c && (D = 0), w.push("visibility", 0, u.visibility), Pt(this, u, "visibility", D ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), f !== "scale" && f !== "transform" && (f = wt[f], ~f.indexOf(",") && (f = f.split(",")[0]))), g = f in St, g) {
                        if (this.styles.save(f), F || (y = t._gsap, y.renderTransform && !e.parseTransform || ye(t, e.parseTransform), T = e.smoothOrigin !== !1 && y.smooth, F = this._pt = new nt(this._pt, u, V, 0, 1, y.renderTransform, y, 0, -1), F.dep = 1), f === "scale") this._pt = new nt(this._pt, y, "scaleY", y.scaleY, (C ? Kt(y.scaleY, C + c) : c) - y.scaleY || 0, li), this._pt.u = 0, s.push("scaleY", f), f += "X";
                        else if (f === "transformOrigin") {
                            w.push(mt, 0, u[mt]), h = ps(h), y.svg ? ci(t, h, 0, T, 0, this) : (m = parseFloat(h.split(" ")[2]) || 0, m !== y.zOrigin && Pt(this, y, "zOrigin", y.zOrigin, m), Pt(this, u, f, Re(l), Re(h)));
                            continue
                        } else if (f === "svgOrigin") {
                            ci(t, h, 1, T, 0, this);
                            continue
                        } else if (f in Hr) {
                            ys(this, y, f, D, C ? Kt(D, C + h) : h);
                            continue
                        } else if (f === "smoothOrigin") {
                            Pt(this, y, "smooth", y.smooth, h);
                            continue
                        } else if (f === "force3D") {
                            y[f] = h;
                            continue
                        } else if (f === "transform") {
                            Fs(this, h, t);
                            continue
                        }
                    } else f in u || (f = ue(f) || f);
                    if (g || (c || c === 0) && (D || D === 0) && !is.test(h) && f in u) p = (l + "").substr((D + "").length), c || (c = 0), m = K(h) || (f in ot.units ? ot.units[f] : p), p !== m && (D = kt(t, f, l, m)), this._pt = new nt(this._pt, g ? y : u, f, D, (C ? Kt(D, C + c) : c) - D, !g && (m === "px" || f === "zIndex") && e.autoRound !== !1 ? ss : li), this._pt.u = m || 0, p !== m && m !== "%" && (this._pt.b = l, this._pt.r = ns);
                    else if (f in u) _s.call(this, t, f, l, C ? C + h : h);
                    else if (f in t) this.add(t, f, l || t[f], C ? C + h : h, r, n);
                    else if (f !== "parseTransform") {
                        mi(f, h);
                        continue
                    }
                    g || (f in u ? w.push(f, 0, u[f]) : w.push(f, 1, l || t[f])), s.push(f)
                }
            } x && Lr(this)
    },
    render: function(t, e) {
        if (e.tween._time || !Si())
            for (var i = e._pt; i;) i.r(t, i.d), i = i._next;
        else e.styles.revert()
    },
    get: xt,
    aliases: wt,
    getSetter: function(t, e, i) {
        var r = wt[e];
        return r && r.indexOf(",") < 0 && (e = r), e in St && e !== mt && (t._gsap.x || xt(t, "x")) ? i && Wi === i ? e === "scale" ? ls : as : (Wi = i || {}) && (e === "scale" ? hs : fs) : t.style && !_i(t.style[e]) ? us : ~e.indexOf("-") ? os : xi(t, e)
    },
    core: {
        _removeProperty: ge,
        _getMatrix: Ai
    }
};
lt.utils.checkPrefix = ue;
lt.core.getStyleSaver = Yr;
(function(a, t, e, i) {
    var r = rt(a + "," + t + "," + e, function(n) {
        St[n] = 1
    });
    rt(t, function(n) {
        ot.units[n] = "deg", Hr[n] = 1
    }), wt[r[13]] = a + "," + t, rt(i, function(n) {
        var s = n.split(":");
        wt[s[1]] = r[s[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
rt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
    ot.units[a] = "px"
});
lt.registerPlugin(jr);
var It = lt.registerPlugin(jr) || lt;
It.core.Tween;
/*!
 * strings: 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var vs = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

function Kr(a) {
    var t = a.nodeType,
        e = "";
    if (t === 1 || t === 9 || t === 11) {
        if (typeof a.textContent == "string") return a.textContent;
        for (a = a.firstChild; a; a = a.nextSibling) e += Kr(a)
    } else if (t === 3 || t === 4) return a.nodeValue;
    return e
}
/*!
 * SplitText: 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var jt, Di, Qr, le, Zr, Ie, Es = /(?:\r|\n|\t\t)/g,
    xs = /(?:\s\s+)/g,
    Jr = function(t) {
        jt = document, Di = window, le = le || t || Di.gsap || console.warn("Please gsap.registerPlugin(SplitText)"), le && (Ie = le.utils.toArray, Zr = le.core.context || function() {}, Qr = 1)
    },
    tn = function(t) {
        return Di.getComputedStyle(t)
    },
    Pi = function(t) {
        return t.position === "absolute" || t.absolute === !0
    },
    ws = function(t, e) {
        for (var i = e.length, r; --i > -1;)
            if (r = e[i], t.substr(0, r.length) === r) return r.length
    },
    Ts = " style='position:relative;display:inline-block;'",
    Gi = function(t, e) {
        t === void 0 && (t = "");
        var i = ~t.indexOf("++"),
            r = 1;
        return i && (t = t.split("++").join("")),
            function() {
                return "<" + e + Ts + (t ? " class='" + t + (i ? r++ : "") + "'>" : ">")
            }
    },
    en = function a(t, e, i) {
        var r = t.nodeType;
        if (r === 1 || r === 9 || r === 11)
            for (t = t.firstChild; t; t = t.nextSibling) a(t, e, i);
        else(r === 3 || r === 4) && (t.nodeValue = t.nodeValue.split(e).join(i))
    },
    Ke = function(t, e) {
        for (var i = e.length; --i > -1;) t.push(e[i])
    },
    ji = function(t, e, i) {
        for (var r; t && t !== e;) {
            if (r = t._next || t.nextSibling, r) return r.textContent.charAt(0) === i;
            t = t.parentNode || t._parent
        }
    },
    Ss = function a(t) {
        var e = Ie(t.childNodes),
            i = e.length,
            r, n;
        for (r = 0; r < i; r++) n = e[r], n._isSplit ? a(n) : r && n.previousSibling && n.previousSibling.nodeType === 3 ? (n.previousSibling.nodeValue += n.nodeType === 3 ? n.nodeValue : n.firstChild.nodeValue, t.removeChild(n)) : n.nodeType !== 3 && (t.insertBefore(n.firstChild, n), t.removeChild(n))
    },
    Ct = function(t, e) {
        return parseFloat(e[t]) || 0
    },
    bs = function(t, e, i, r, n, s, u) {
        var o = tn(t),
            l = Ct("paddingLeft", o),
            h = -999,
            c = Ct("borderBottomWidth", o) + Ct("borderTopWidth", o),
            D = Ct("borderLeftWidth", o) + Ct("borderRightWidth", o),
            d = Ct("paddingTop", o) + Ct("paddingBottom", o),
            _ = Ct("paddingLeft", o) + Ct("paddingRight", o),
            f = Ct("fontSize", o) * (e.lineThreshold || .2),
            p = o.textAlign,
            m = [],
            C = [],
            g = [],
            F = e.wordDelimiter || " ",
            y = e.tag ? e.tag : e.span ? "span" : "div",
            T = e.type || e.split || "chars,words,lines",
            x = n && ~T.indexOf("lines") ? [] : null,
            w = ~T.indexOf("words"),
            E = ~T.indexOf("chars"),
            b = Pi(e),
            P = e.linesClass,
            M = ~(P || "").indexOf("++"),
            R = [],
            I = o.display === "flex",
            O = t.style.display,
            S, A, k, v, $, J, tt, oe, X, z, Oi, gt;
        for (M && (P = P.split("++").join("")), I && (t.style.display = "block"), A = t.getElementsByTagName("*"), k = A.length, $ = [], S = 0; S < k; S++) $[S] = A[S];
        if (x || b)
            for (S = 0; S < k; S++) v = $[S], J = v.parentNode === t, (J || b || E && !w) && (gt = v.offsetTop, x && J && Math.abs(gt - h) > f && (v.nodeName !== "BR" || S === 0) && (tt = [], x.push(tt), h = gt), b && (v._x = v.offsetLeft, v._y = gt, v._w = v.offsetWidth, v._h = v.offsetHeight), x && ((v._isSplit && J || !E && J || w && J || !w && v.parentNode.parentNode === t && !v.parentNode._isSplit) && (tt.push(v), v._x -= l, ji(v, t, F) && (v._wordEnd = !0)), v.nodeName === "BR" && (v.nextSibling && v.nextSibling.nodeName === "BR" || S === 0) && x.push([])));
        for (S = 0; S < k; S++) {
            if (v = $[S], J = v.parentNode === t, v.nodeName === "BR") {
                x || b ? (v.parentNode && v.parentNode.removeChild(v), $.splice(S--, 1), k--) : w || t.appendChild(v);
                continue
            }
            if (b && (X = v.style, !w && !J && (v._x += v.parentNode._x, v._y += v.parentNode._y), X.left = v._x + "px", X.top = v._y + "px", X.position = "absolute", X.display = "block", X.width = v._w + 1 + "px", X.height = v._h + "px"), !w && E)
                if (v._isSplit)
                    for (v._next = A = v.nextSibling, v.parentNode.appendChild(v); A && A.nodeType === 3 && A.textContent === " ";) v._next = A.nextSibling, v.parentNode.appendChild(A), A = A.nextSibling;
                else v.parentNode._isSplit ? (v._parent = v.parentNode, !v.previousSibling && v.firstChild && (v.firstChild._isFirst = !0), v.nextSibling && v.nextSibling.textContent === " " && !v.nextSibling.nextSibling && R.push(v.nextSibling), v._next = v.nextSibling && v.nextSibling._isFirst ? null : v.nextSibling, v.parentNode.removeChild(v), $.splice(S--, 1), k--) : J || (gt = !v.nextSibling && ji(v.parentNode, t, F), v.parentNode._parent && v.parentNode._parent.appendChild(v), gt && v.parentNode.appendChild(jt.createTextNode(" ")), y === "span" && (v.style.display = "inline"), m.push(v));
            else v.parentNode._isSplit && !v._isSplit && v.innerHTML !== "" ? C.push(v) : E && !v._isSplit && (y === "span" && (v.style.display = "inline"), m.push(v))
        }
        for (S = R.length; --S > -1;) R[S].parentNode.removeChild(R[S]);
        if (x) {
            for (b && (z = jt.createElement(y), t.appendChild(z), Oi = z.offsetWidth + "px", gt = z.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(z)), X = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
            for (oe = F === " " && (!b || !w && !E), S = 0; S < x.length; S++) {
                for (tt = x[S], z = jt.createElement(y), z.style.cssText = "display:block;text-align:" + p + ";position:" + (b ? "absolute;" : "relative;"), P && (z.className = P + (M ? S + 1 : "")), g.push(z), k = tt.length, A = 0; A < k; A++) tt[A].nodeName !== "BR" && (v = tt[A], z.appendChild(v), oe && v._wordEnd && z.appendChild(jt.createTextNode(" ")), b && (A === 0 && (z.style.top = v._y + "px", z.style.left = l + gt + "px"), v.style.top = "0px", gt && (v.style.left = v._x - gt + "px")));
                k === 0 ? z.innerHTML = "&nbsp;" : !w && !E && (Ss(z), en(z, " ", " ")), b && (z.style.width = Oi, z.style.height = v._h + "px"), t.appendChild(z)
            }
            t.style.cssText = X
        }
        b && (u > t.clientHeight && (t.style.height = u - d + "px", t.clientHeight < u && (t.style.height = u + c + "px")), s > t.clientWidth && (t.style.width = s - _ + "px", t.clientWidth < s && (t.style.width = s + D + "px"))), I && (O ? t.style.display = O : t.style.removeProperty("display")), Ke(i, m), w && Ke(r, C), Ke(n, g)
    },
    As = function(t, e, i, r) {
        var n = e.tag ? e.tag : e.span ? "span" : "div",
            s = e.type || e.split || "chars,words,lines",
            u = ~s.indexOf("chars"),
            o = Pi(e),
            l = e.wordDelimiter || " ",
            h = l !== " " ? "" : o ? "&#173; " : " ",
            c = "</" + n + ">",
            D = 1,
            d = e.specialChars ? typeof e.specialChars == "function" ? e.specialChars : ws : null,
            _, f, p, m, C, g, F, y, T = jt.createElement("div"),
            x = t.parentNode;
        for (x.insertBefore(T, t), T.textContent = t.nodeValue, x.removeChild(t), t = T, _ = Kr(t), F = _.indexOf("<") !== -1, e.reduceWhiteSpace !== !1 && (_ = _.replace(xs, " ").replace(Es, "")), F && (_ = _.split("<").join("{{LT}}")), C = _.length, f = (_.charAt(0) === " " ? h : "") + i(), p = 0; p < C; p++)
            if (g = _.charAt(p), d && (y = d(_.substr(p), e.specialChars))) g = _.substr(p, y || 1), f += u && g !== " " ? r() + g + "</" + n + ">" : g, p += y - 1;
            else if (g === l && _.charAt(p - 1) !== l && p) {
                for (f += D ? c : "", D = 0; _.charAt(p + 1) === l;) f += h, p++;
                p === C - 1 ? f += h : _.charAt(p + 1) !== ")" && (f += h + i(), D = 1)
            } else g === "{" && _.substr(p, 6) === "{{LT}}" ? (f += u ? r() + "{{LT}}</" + n + ">" : "{{LT}}", p += 5) : g.charCodeAt(0) >= 55296 && g.charCodeAt(0) <= 56319 || _.charCodeAt(p + 1) >= 65024 && _.charCodeAt(p + 1) <= 65039 ? (m = ((_.substr(p, 12).split(vs) || [])[1] || "").length || 2, f += u && g !== " " ? r() + _.substr(p, m) + "</" + n + ">" : _.substr(p, m), p += m - 1) : f += u && g !== " " ? r() + g + "</" + n + ">" : g;
        t.outerHTML = f + (D ? c : ""), F && en(x, "{{LT}}", "<")
    },
    Ps = function a(t, e, i, r) {
        var n = Ie(t.childNodes),
            s = n.length,
            u = Pi(e),
            o, l;
        if (t.nodeType !== 3 || s > 1) {
            for (e.absolute = !1, o = 0; o < s; o++) l = n[o], l._next = l._isFirst = l._parent = l._wordEnd = null, (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) && (u && l.nodeType !== 3 && tn(l).display === "inline" && (l.style.display = "inline-block", l.style.position = "relative"), l._isSplit = !0, a(l, e, i, r));
            e.absolute = u, t._isSplit = !0;
            return
        }
        As(t, e, i, r)
    },
    Fe = function() {
        function a(e, i) {
            Qr || Jr(), this.elements = Ie(e), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = i || {}, Zr(this), this.split(i)
        }
        var t = a.prototype;
        return t.split = function(i) {
            this.isSplit && this.revert(), this.vars = i = i || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var r = this.elements.length, n = i.tag ? i.tag : i.span ? "span" : "div", s = Gi(i.wordsClass, n), u = Gi(i.charsClass, n), o, l, h; --r > -1;) h = this.elements[r], this._originals[r] = h.innerHTML, o = h.clientHeight, l = h.clientWidth, Ps(h, i, s, u), bs(h, i, this.chars, this.words, this.lines, l, o);
            return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
        }, t.revert = function() {
            var i = this._originals;
            if (!i) throw "revert() call wasn't scoped properly.";
            return this.elements.forEach(function(r, n) {
                return r.innerHTML = i[n]
            }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
        }, a.create = function(i, r) {
            return new a(i, r)
        }, a
    }();
Fe.version = "3.11.4";
Fe.register = Jr;
const Ki = (a, [t, e], [i, r]) => (a - t) * (r - i) / (e - t) + i,
    Os = a => new Promise((t, e) => {
        const i = new Image;
        i.onload = t, i.onerror = e, i.src = a
    }),
    Bs = () => window.innerWidth - document.documentElement.clientWidth,
    Jt = a => {
        const {
            target: t
        } = a;
        t.hasAttribute("data-preserve-scroll") || a.preventDefault()
    },
    Ms = () => {
        const a = Bs();
        document.documentElement.style.setProperty("height", `${window.innerHeight-1}px`), document.body.style.setProperty("overflow", "hidden"), a > 0 && document.body.style.setProperty("padding-right", `${a}px`), window.addEventListener("pointermove", Jt), window.addEventListener("mousemove", Jt), window.addEventListener("touchmove", Jt)
    },
    ks = () => {
        document.documentElement.style.removeProperty("height"), document.body.style.removeProperty("overflow"), document.body.style.removeProperty("padding-right"), window.removeEventListener("pointermove", Jt), window.removeEventListener("mousemove", Jt), window.removeEventListener("touchmove", Jt)
    };
It.registerPlugin(Fe);
const Qe = {
    duration: 1,
    easing: a => Math.min(1, 1.001 - Math.pow(2, -10 * a)),
    orientation: "horizontal",
    gestureOrientation: "both"
};
class Rs {
    constructor() {
        ht(this, "scroll");
        ht(this, "scrollArrow");
        ht(this, "loader");
        ht(this, "media");
        this.media = window.matchMedia("(max-width: 1024px)"), this.scroll = new We({
            ...Qe,
            orientation: this.media.matches ? "vertical" : "horizontal"
        }), this.scrollArrow = document.querySelector(".intro__scroll-hint"), this.loader = document.querySelector(".loader"), this.raf = this.raf.bind(this), this.onResize = this.onResize.bind(this), this.scrollToContent = this.scrollToContent.bind(this), this.applyParallax = this.applyParallax.bind(this), this.animate = this.animate.bind(this), this.preload = this.preload.bind(this), this.prepareAnimations = this.prepareAnimations.bind(this), this.logger = this.logger.bind(this), this.onResize(), this.logger(), this.prepareAnimations(), this.preload(), this.scrollArrow.addEventListener("click", this.scrollToContent), this.applyParallax(), requestAnimationFrame(this.raf)
    }
    onResize() {
        const t = e => {
            e.matches ? (this.scroll.destroy(), this.scroll = new We({
                ...Qe,
                orientation: "vertical"
            })) : (this.scroll.destroy(), this.scroll = new We({
                ...Qe,
                orientation: "horizontal"
            })), this.applyParallax()
        };
        this.media.addEventListener("change", t)
    }
    disableImagesRightClick() {}
    logger() {
        console.log("Got you 👀"), console.log("This website is using cookies 🍪 - with the only purpose of seeing how many people are visiting the site. Peace 🤝"), navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") <= -1 && console.log("Scroll is limited to 60fps max on Safari 💩 -> https://bugs.webkit.org/show_bug.cgi?id=173434")
    }
    raf(t) {
        this.scroll.raf(t), requestAnimationFrame(this.raf)
    }
    prepareAnimations() {
        It.set("[data-reveal]", {
            y: "100%"
        }), new Fe("[data-split-reveal]", {
            type: "words"
        }), It.set(new Fe("[data-split-reveal]", {
            type: "words",
            wordsClass: "word"
        }).words, {
            y: "100%"
        })
    }
    animate() {
        const t = new IntersectionObserver((i, r) => {
            i.forEach(n => {
                n.isIntersecting && (It.to(n.target.querySelectorAll("[data-reveal], [data-split-reveal] .word"), {
                    y: 0,
                    ease: "power4",
                    duration: 2,
                    stagger: s => s * .02
                }), r.unobserve(n.target))
            })
        });
        Array.from(document.querySelectorAll("[data-observe]")).forEach(i => {
            t.observe(i)
        })
    }
    async preload() {
        Ms();
        const t = Array.from(document.querySelectorAll("img"));
        t.forEach(r => r.oncontextmenu = n => (n.preventDefault(), !1));
        let e = 0;
        const i = t.map(r => Os(r.src).then(async () => {
            e++;
            const n = `${Math.floor(100/t.length*e)}%`;
            It.to(this.loader.querySelector("span"), {
                textContent: n,
                roundProps: "textContent",
                ease: "power4",
                duration: 2
            }), await new Promise(s => setTimeout(s, 2e3))
        }));
        await Promise.all(i), ks(), It.to(this.loader, {
            opacity: 0,
            onComplete: () => {
                this.loader.remove(), this.animate()
            }
        })
    }
    scrollToContent() {
        const t = -Math.min(40, 4.444 * window.innerHeight / 100);
        this.scroll.scrollTo(document.querySelector(".projects"), {
            duration: 2,
            offset: t
        })
    }
    applyParallax() {
        const t = this.media.matches ? "vertical" : "horizontal",
            e = 100,
            i = Array.from(document.querySelectorAll("[data-parallax]"));
        i.forEach(r => {
            t === "horizontal" ? (r.style.width = `calc(100% + (2 * ${e}px))`, r.style.left = `-${e}px`, r.style.height = "100%", r.style.top = "0px") : (r.style.height = `calc(100% + (2 * ${e}px))`, r.style.top = `-${e}px`, r.style.width = "100%", r.style.left = "0px")
        }), this.scroll.on("scroll", r => {
            const n = r.scroll;
            i.forEach(s => {
                if (t === "horizontal") {
                    const u = s.getBoundingClientRect(),
                        o = u.left + n,
                        l = e,
                        h = -e,
                        c = Math.max(Math.min(Ki(o - n, [window.innerWidth, -u.width], [h, l]), l), h);
                    s.style.transform = `translate3d(${c}px, 0px, 0px)`
                } else {
                    const u = s.getBoundingClientRect(),
                        o = u.top + n,
                        l = e,
                        h = -e,
                        c = Math.max(Math.min(Ki(o - n, [window.innerHeight, -u.height], [h, l]), l), h);
                    s.style.transform = `translate3d(0px, ${c}px, 0px)`
                }
            })
        })
    }
}
new Rs;