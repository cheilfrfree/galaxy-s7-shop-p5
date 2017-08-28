/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function(e, n) {
            t[n] = !0
        }), t
    }

    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch (s) {}
                v.data(e, n, r)
            } else r = t
        }
        return r
    }

    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function et() {
        return !1
    }

    function tt() {
        return !0
    }

    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function at(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t)) return v.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return v.grep(e, function(e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = v.grep(e, function(e) {
                return e.nodeType === 1
            });
            if (it.test(t)) return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function(e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }

    function lt(e) {
        var t = ct.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e)) return;
        var n, r, i, s = v._data(e),
            o = v._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }

    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
    }

    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }

    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }

    function Qt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e) return t
        }
        return r
    }

    function Gt(e, t) {
        return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }

    function Yt(e, t) {
        var n, r, i = [],
            s = 0,
            o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }

    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s
    }

    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = !0,
            s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null) r = e.style[t];
            if (Ut.test(r)) return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
    }

    function nn(e) {
        if (Wt[e]) return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body),
            n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
        }
        return Wt[e] = n, n
    }

    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t)) v.each(t, function(t, i) {
            n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && v.type(t) === "object")
            for (i in t) fn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function Cn(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i, s, o = t.toLowerCase().split(y),
                u = 0,
                a = o.length;
            if (v.isFunction(n))
                for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
        }
    }

    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u, a = e[s],
            f = 0,
            l = a ? a.length : 0,
            c = e === Sn;
        for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
    }

    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }

    function An(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (s in l) s in r && (n[l[s]] = r[s]);
        while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    f.unshift(s);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        }
        if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(),
            u = o[0],
            a = {},
            f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1])
            for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f];)
            if (i !== "*") {
                if (u !== "*" && u !== i) {
                    n = a[u + " " + i] || a["* " + i];
                    if (!n)
                        for (r in a) {
                            s = r.split(" ");
                            if (s[1] === i) {
                                n = a[u + " " + s[0]] || a["* " + s[0]];
                                if (n) {
                                    n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                                    break
                                }
                            }
                        }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: n ? l : "No conversion from " + u + " to " + i
                            }
                        }
                }
                u = i
            }
        return {
            state: "success",
            data: t
        }
    }

    function Fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function $n() {
        return setTimeout(function() {
            qn = t
        }, 0), qn = v.now()
    }

    function Jn(e, t) {
        v.each(t, function(t, n) {
            var r = (Vn[t] || []).concat(Vn["*"]),
                i = 0,
                s = r.length;
            for (; i < s; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function Kn(e, t, n) {
        var r, i = 0,
            s = 0,
            o = Xn.length,
            u = v.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                var t = qn || $n(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    i = 1 - r,
                    s = 0,
                    o = f.tweens.length;
                for (; s < o; s++) f.tweens[s].run(i);
                return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: qn || $n(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n, r) {
                    var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r) return r
        }
        return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {},
            m = [],
            g = e.nodeType && Gt(e);
        n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c()
        }), l.unqueued++, h.always(function() {
            h.always(function() {
                l.unqueued--, v.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r], a = a || s === "toggle";
                if (s === (g ? "hide" : "show")) continue;
                m.push(r)
            }
        }
        o = m.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function() {
                v(e).hide()
            }), h.done(function() {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in d) v.style(e, t, d[t])
            });
            for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
        }
    }

    function Yn(e, t, n, r, i) {
        return new Yn.prototype.init(e, t, n, r, i)
    }

    function Zn(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document,
        s = e.location,
        o = e.navigator,
        u = e.jQuery,
        a = e.$,
        f = Array.prototype.push,
        l = Array.prototype.slice,
        c = Array.prototype.indexOf,
        h = Object.prototype.toString,
        p = Object.prototype.hasOwnProperty,
        d = String.prototype.trim,
        v = function(e, t) {
            return new v.fn.init(e, t, n)
        },
        m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        g = /\S/,
        y = /\s+/,
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        C = /^-ms-/,
        k = /-([\da-z])/gi,
        L = function(e, t) {
            return (t + "").toUpperCase()
        },
        A = function() {
            i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
        },
        O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function(e, n, r) {
            var s, o, u, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = i, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return l.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function(e, t) {
            return v.each(this, e, t)
        },
        ready: function(e) {
            return v.ready.promise().done(e), this
        },
        eq: function(e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(v.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {},
            a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((e = arguments[a]) != null)
                for (n in e) {
                    r = u[n], i = e[n];
                    if (u === i) continue;
                    l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
                }
        return u
    }, v.extend({
        noConflict: function(t) {
            return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --v.readyWait : v.isReady) return;
            if (!i.body) return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0) return;
            r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
        },
        isFunction: function(e) {
            return v.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return v.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || p.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function(t) {
            if (!t || typeof t != "string") return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && g.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(C, "ms-").replace(k, L)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, n, r) {
            var i, s = 0,
                o = e.length,
                u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e)
                        if (n.apply(e[i], r) === !1) break
                } else
                    for (; s < o;)
                        if (n.apply(e[s++], r) === !1) break
            } else if (u) {
                for (i in e)
                    if (n.call(e[i], i, e[i]) === !1) break
            } else
                for (; s < o;)
                    if (n.call(e[s], s, e[s++]) === !1) break;
            return e
        },
        trim: d && !d.call("\ufeff\u00a0") ? function(e) {
            return e == null ? "" : d.call(e)
        } : function(e) {
            return e == null ? "" : (e + "").replace(b, "")
        },
        makeArray: function(e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (c) return c.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number")
                for (; s < r; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function(e, n, r) {
            var i, s, o = [],
                u = 0,
                a = e.length,
                f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f)
                for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
            else
                for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function() {
                return e.apply(n, i.concat(l.call(arguments)))
            }, s.guid = e.guid = e.guid || v.guid++, s) : t
        },
        access: function(e, n, r, i, s, o, u) {
            var a, f = r == null,
                l = 0,
                c = e.length;
            if (r && typeof r == "object") {
                for (l in r) v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && v.isFunction(i), f && (a ? (a = n, n = function(e, t, n) {
                    return a.call(v(e), n)
                }) : (n.call(e, i), n = null));
                if (n)
                    for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }), v.ready.promise = function(t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete") setTimeout(v.ready, 1);
            else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
            else {
                i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {}
                n && n.doScroll && function o() {
                    if (!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }), n = v(i);
    var M = {};
    v.Callbacks = function(e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function(t) {
                n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                for (; a && u < o; u++)
                    if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            },
            c = {
                add: function() {
                    if (a) {
                        var t = a.length;
                        (function r(t) {
                            v.each(t, function(t, n) {
                                var i = v.type(n);
                                i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                            })
                        })(arguments), i ? o = a.length : n && (s = t, l(n))
                    }
                    return this
                },
                remove: function() {
                    return a && v.each(arguments, function(e, t) {
                        var n;
                        while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                    }), this
                },
                has: function(e) {
                    return v.inArray(e, a) > -1
                },
                empty: function() {
                    return a = [], this
                },
                disable: function() {
                    return a = f = n = t, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return f = t, n || c.disable(), this
                },
                locked: function() {
                    return !f
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, v.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", v.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return v.Deferred(function(n) {
                            v.each(t, function(t, r) {
                                var s = r[0],
                                    o = e[t];
                                i[r[1]](v.isFunction(o) ? function() {
                                    var e = o.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                } : n[s])
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? v.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, v.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = l.call(arguments),
                r = n.length,
                i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : v.Deferred(),
                o = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), v.support = function() {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function() {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
        if (p.attachEvent)
            for (l in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
        return v(function() {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                a = i.getElementsByTagName("body")[0];
            if (!a) return;
            n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
        }), a.removeChild(p), n = r = s = o = u = a = p = null, t
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e)
        },
        data: function(e, n, r, i) {
            if (!v.acceptData(e)) return;
            var s, o, u = v.expando,
                a = typeof n == "string",
                f = e.nodeType,
                l = f ? v.cache : e,
                c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
        },
        removeData: function(e, t, n) {
            if (!v.acceptData(e)) return;
            var r, i, s, o = e.nodeType,
                u = o ? v.cache : e,
                a = o ? e[v.expando] : v.expando;
            if (!u[a]) return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a])) return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function(e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), v.fn.extend({
        data: function(e, n) {
            var r, i, s, o, u, a = this[0],
                f = 0,
                l = null;
            if (e === t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function() {
                v.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function(n) {
                if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function() {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                v.removeData(this, e)
            })
        }
    }), v.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = v.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = v._queueHooks(e, t),
                o = function() {
                    v.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function() {
                    v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
                })
            })
        }
    }), v.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                v.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                s = v.Deferred(),
                o = this,
                u = this.length,
                a = function() {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g,
        R = /\r/g,
        U = /^(?:button|input)$/i,
        z = /^(?:button|input|object|select|textarea)$/i,
        W = /^a(?:rea|)$/i,
        X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function(e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                v.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = v.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && t.length === 1) i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                            i.className = v.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function(e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0, a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0, o = n.length; s < o; s++)
                            while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function(n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var i, s = 0,
                        o = v(this),
                        u = t,
                        a = e.split(y);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e), this.each(function(r) {
                var s, o = v(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function(e) {
                    return e == null ? "" : e + ""
                })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
            })
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            t = v(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function() {
                        this.selected = v.inArray(v(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
            if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r)
            }
            return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
        },
        removeAttr: function(e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
                    else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    if (j && v.nodeName(e, "button")) return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), F = {
        get: function(e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, V || (I = {
        name: !0,
        id: !0,
        coords: !0
    }, j = v.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, v.each(["width", "height"], function(e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), v.attrHooks.contenteditable = {
        get: j.get,
        set: function(e, t, n) {
            t === "" && (t = "false"), j.set(e, t, n)
        }
    }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function(e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), v.support.style || (v.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function(e, t) {
                if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        J = /^([^\.]*|)(?:\.(.+)|)$/,
        K = /(?:^|\s)hover(\.\S+|)\b/,
        Q = /^key/,
        G = /^(?:mouse|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        Z = function(e) {
            return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
        };
    v.event = {
            add: function(e, n, r, i, s) {
                var o, u, a, f, l, c, h, p, d, m, g;
                if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
                r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
                    return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
                }, u.elem = e), n = v.trim(Z(n)).split(" ");
                for (f = 0; f < n.length; f++) {
                    l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                        type: c,
                        origType: l[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: s,
                        needsContext: s && v.expr.match.needsContext.test(s),
                        namespace: h.join(".")
                    }, d), m = a[c];
                    if (!m) {
                        m = a[c] = [], m.delegateCount = 0;
                        if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                    }
                    g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
                }
                e = null
            },
            global: {},
            remove: function(e, t, n, r, i) {
                var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
                if (!g || !(h = g.events)) return;
                t = v.trim(Z(t || "")).split(" ");
                for (s = 0; s < t.length; s++) {
                    o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                    if (!u) {
                        for (u in h) v.event.remove(e, u + t[s], n, r, !0);
                        continue
                    }
                    p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                    d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
                }
                v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, r, s, o) {
                if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                    var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
                        b = [];
                    if (Y.test(y + v.event.triggered)) return;
                    y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                    if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                    n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                    if (!s) {
                        u = v.cache;
                        for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                        return
                    }
                    n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                    if (p.trigger && p.trigger.apply(s, r) === !1) return;
                    m = [
                        [s, p.bindType || y]
                    ];
                    if (!o && !p.noBubble && !v.isWindow(s)) {
                        g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                        for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;
                        c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                    }
                    for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                    return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
                }
                return
            },
            dispatch: function(n) {
                n = v.event.fix(n || e.event);
                var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [],
                    m = d.delegateCount,
                    g = l.call(arguments),
                    y = !n.exclusive && !n.namespace,
                    b = v.event.special[n.type] || {},
                    w = [];
                g[0] = n, n.delegateTarget = this;
                if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
                if (m && (!n.button || n.type !== "click"))
                    for (s = n.target; s != this; s = s.parentNode || this)
                        if (s.disabled !== !0 || n.type !== "click") {
                            u = {}, f = [];
                            for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
                            f.length && w.push({
                                elem: s,
                                matches: f
                            })
                        }
                d.length > m && w.push({
                    elem: this,
                    matches: d.slice(m)
                });
                for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                    a = w[r], n.currentTarget = a.elem;
                    for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                        c = a.matches[i];
                        if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
                    }
                }
                return b.postDispatch && b.postDispatch.call(this, n), n.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, s, o, u = n.button,
                        a = n.fromElement;
                    return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[v.expando]) return e;
                var t, n, r = e,
                    s = v.event.fixHooks[e.type] || {},
                    o = s.props ? this.props.concat(s.props) : this.props;
                e = v.Event(r);
                for (t = o.length; t;) n = o[--t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        v.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = v.extend(new v.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
        }, v.Event = function(e, t) {
            if (!(this instanceof v.Event)) return new v.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
        }, v.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = tt;
                var e = this.originalEvent;
                if (!e) return;
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            stopPropagation: function() {
                this.isPropagationStopped = tt;
                var e = this.originalEvent;
                if (!e) return;
                e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = tt, this.stopPropagation()
            },
            isDefaultPrevented: et,
            isPropagationStopped: et,
            isImmediatePropagationStopped: et
        }, v.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            v.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        s = e.handleObj,
                        o = s.selector;
                    if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                    return n
                }
            }
        }), v.support.submitBubbles || (v.event.special.submit = {
            setup: function() {
                if (v.nodeName(this, "form")) return !1;
                v.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                    r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), v._data(r, "_submit_attached", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                if (v.nodeName(this, "form")) return !1;
                v.event.remove(this, "._submit")
            }
        }), v.support.changeBubbles || (v.event.special.change = {
            setup: function() {
                if ($.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function(e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), v.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
                    });
                    return !1
                }
                v.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function(e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                    }), v._data(t, "_change_attached", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return v.event.remove(this, "._change"), !$.test(this.nodeName)
            }
        }), v.support.focusinBubbles || v.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    v.event.simulate(t, e.target, v.event.fix(e), !0)
                };
            v.event.special[t] = {
                setup: function() {
                    n++ === 0 && i.addEventListener(e, r, !0)
                },
                teardown: function() {
                    --n === 0 && i.removeEventListener(e, r, !0)
                }
            }
        }), v.fn.extend({
            on: function(e, n, r, i, s) {
                var o, u;
                if (typeof e == "object") {
                    typeof n != "string" && (r = r || n, n = t);
                    for (u in e) this.on(u, n, r, e[u], s);
                    return this
                }
                r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                if (i === !1) i = et;
                else if (!i) return this;
                return s === 1 && (o = i, i = function(e) {
                    return v().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function() {
                    v.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if (typeof e == "object") {
                    for (s in e) this.off(s, n, e[s]);
                    return this
                }
                if (n === !1 || typeof n == "function") r = n, n = t;
                return r === !1 && (r = et), this.each(function() {
                    v.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return v(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return v(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    v.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                if (this[0]) return v.event.trigger(e, t, this[0], !0)
            },
            toggle: function(e) {
                var t = arguments,
                    n = e.guid || v.guid++,
                    r = 0,
                    i = function(n) {
                        var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                        return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                    };
                i.guid = n;
                while (r < t.length) t[r++].guid = n;
                return this.click(i)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            v.fn[t] = function(e, n) {
                return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
        }),
        function(e, t) {
            function nt(e, t, n, r) {
                n = n || [], t = t || g;
                var i, s, a, f, l = t.nodeType;
                if (!e || typeof e != "string") return n;
                if (l !== 1 && l !== 9) return [];
                a = o(t);
                if (!a && !r)
                    if (i = R.exec(e))
                        if (f = i[1]) {
                            if (l === 9) {
                                s = t.getElementById(f);
                                if (!s || !s.parentNode) return n;
                                if (s.id === f) return n.push(s), n
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n
                        } else {
                            if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
                            if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n
                        }
                return vt(e.replace(j, "$1"), t, n, r, a)
            }

            function rt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e
                }
            }

            function it(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return (n === "input" || n === "button") && t.type === e
                }
            }

            function st(e) {
                return N(function(t) {
                    return t = +t, N(function(n, r) {
                        var i, s = e([], n.length, t),
                            o = s.length;
                        while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function ot(e, t, n) {
                if (e === t) return n;
                var r = e.nextSibling;
                while (r) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }

            function ut(e, t) {
                var n, r, s, o, u, a, f, l = L[d][e + " "];
                if (l) return t ? 0 : l.slice(0);
                u = e, a = [], f = i.preFilter;
                while (u) {
                    if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                    n = !1;
                    if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
                    for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
                    if (!n) break
                }
                return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
            }

            function at(e, t, r) {
                var i = t.dir,
                    s = r && t.dir === "parentNode",
                    o = w++;
                return t.first ? function(t, n, r) {
                    while (t = t[i])
                        if (s || t.nodeType === 1) return e(t, n, r)
                } : function(t, r, u) {
                    if (!u) {
                        var a, f = b + " " + o + " ",
                            l = f + n;
                        while (t = t[i])
                            if (s || t.nodeType === 1) {
                                if ((a = t[d]) === l) return t.sizset;
                                if (typeof a == "string" && a.indexOf(f) === 0) {
                                    if (t.sizset) return t
                                } else {
                                    t[d] = l;
                                    if (e(t, r, u)) return t.sizset = !0, t;
                                    t.sizset = !1
                                }
                            }
                    } else
                        while (t = t[i])
                            if (s || t.nodeType === 1)
                                if (e(t, r, u)) return t
                }
            }

            function ft(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function lt(e, t, n, r, i) {
                var s, o = [],
                    u = 0,
                    a = e.length,
                    f = t != null;
                for (; u < a; u++)
                    if (s = e[u])
                        if (!n || n(s, r, i)) o.push(s), f && t.push(u);
                return o
            }

            function ct(e, t, n, r, i, s) {
                return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function(s, o, u, a) {
                    var f, l, c, h = [],
                        p = [],
                        d = o.length,
                        v = s || dt(t || "*", u.nodeType ? [u] : u, []),
                        m = e && (s || !t) ? lt(v, h, e, u, a) : v,
                        g = n ? i || (s ? e : d || r) ? [] : o : m;
                    n && n(m, g, u, a);
                    if (r) {
                        f = lt(g, p), r(f, [], u, a), l = f.length;
                        while (l--)
                            if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                    }
                    if (s) {
                        if (i || e) {
                            if (i) {
                                f = [], l = g.length;
                                while (l--)(c = g[l]) && f.push(m[l] = c);
                                i(null, g = [], f, a)
                            }
                            l = g.length;
                            while (l--)(c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                        }
                    } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g)
                })
            }

            function ht(e) {
                var t, n, r, s = e.length,
                    o = i.relative[e[0].type],
                    u = o || i.relative[" "],
                    a = o ? 1 : 0,
                    f = at(function(e) {
                        return e === t
                    }, u, !0),
                    l = at(function(e) {
                        return T.call(t, e) > -1
                    }, u, !0),
                    h = [function(e, n, r) {
                        return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
                    }];
                for (; a < s; a++)
                    if (n = i.relative[e[a].type]) h = [at(ft(h), n)];
                    else {
                        n = i.filter[e[a].type].apply(null, e[a].matches);
                        if (n[d]) {
                            r = ++a;
                            for (; r < s; r++)
                                if (i.relative[e[r].type]) break;
                            return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
                        }
                        h.push(n)
                    }
                return ft(h)
            }

            function pt(e, t) {
                var r = t.length > 0,
                    s = e.length > 0,
                    o = function(u, a, f, l, h) {
                        var p, d, v, m = [],
                            y = 0,
                            w = "0",
                            x = u && [],
                            T = h != null,
                            N = c,
                            C = u || s && i.find.TAG("*", h && a.parentNode || a),
                            k = b += N == null ? 1 : Math.E;
                        T && (c = a !== g && a, n = o.el);
                        for (;
                            (p = C[w]) != null; w++) {
                            if (s && p) {
                                for (d = 0; v = e[d]; d++)
                                    if (v(p, a, f)) {
                                        l.push(p);
                                        break
                                    }
                                T && (b = k, n = ++o.el)
                            }
                            r && ((p = !v && p) && y--, u && x.push(p))
                        }
                        y += w;
                        if (r && w !== y) {
                            for (d = 0; v = t[d]; d++) v(x, m, a, f);
                            if (u) {
                                if (y > 0)
                                    while (w--) !x[w] && !m[w] && (m[w] = E.call(l));
                                m = lt(m)
                            }
                            S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
                        }
                        return T && (b = k, c = N), x
                    };
                return o.el = 0, r ? N(o) : o
            }

            function dt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; r < i; r++) nt(e, t[r], n);
                return n
            }

            function vt(e, t, n, r, s) {
                var o, u, f, l, c, h = ut(e),
                    p = h.length;
                if (!r && h.length === 1) {
                    u = h[0] = h[0].slice(0);
                    if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                        t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                        if (!t) return n;
                        e = e.slice(u.shift().length)
                    }
                    for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                        f = u[o];
                        if (i.relative[l = f.type]) break;
                        if (c = i.find[l])
                            if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                                u.splice(o, 1), e = r.length && u.join("");
                                if (!e) return S.apply(n, x.call(r, 0)), n;
                                break
                            }
                    }
                }
                return a(e, h)(r, t, s, n, z.test(e)), n
            }

            function mt() {}
            var n, r, i, s, o, u, a, f, l, c, h = !0,
                p = "undefined",
                d = ("sizcache" + Math.random()).replace(".", ""),
                m = String,
                g = e.document,
                y = g.documentElement,
                b = 0,
                w = 0,
                E = [].pop,
                S = [].push,
                x = [].slice,
                T = [].indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; t < n; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                N = function(e, t) {
                    return e[d] = t == null || t, e
                },
                C = function() {
                    var e = {},
                        t = [];
                    return N(function(n, r) {
                        return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }, e)
                },
                k = C(),
                L = C(),
                A = C(),
                O = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                _ = M.replace("w", "w#"),
                D = "([*^$|!~]?=)",
                P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]",
                H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)",
                B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)",
                j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                F = new RegExp("^" + O + "*," + O + "*"),
                I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
                q = new RegExp(H),
                R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                U = /^:not/,
                z = /[\x20\t\r\n\f]*[+~]/,
                W = /:not\($/,
                X = /h\d/i,
                V = /input|select|textarea|button/i,
                $ = /\\(?!\\)/g,
                J = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + P),
                    PSEUDO: new RegExp("^" + H),
                    POS: new RegExp(B, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
                },
                K = function(e) {
                    var t = g.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                },
                Q = K(function(e) {
                    return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length
                }),
                G = K(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
                }),
                Y = K(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string"
                }),
                Z = K(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
                }),
                et = K(function(e) {
                    e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
                    var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
                    return r = !g.getElementById(d), y.removeChild(e), t
                });
            try {
                x.call(y.childNodes, 0)[0].nodeType
            } catch (tt) {
                x = function(e) {
                    var t, n = [];
                    for (; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            nt.matches = function(e, t) {
                return nt(e, null, null, t)
            }, nt.matchesSelector = function(e, t) {
                return nt(t, null, null, [e]).length > 0
            }, s = nt.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (i === 1 || i === 9 || i === 11) {
                        if (typeof e.textContent == "string") return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (i === 3 || i === 4) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += s(t);
                return n
            }, o = nt.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            }, u = nt.contains = y.contains ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r))
            } : y.compareDocumentPosition ? function(e, t) {
                return t && !!(e.compareDocumentPosition(t) & 16)
            } : function(e, t) {
                while (t = t.parentNode)
                    if (t === e) return !0;
                return !1
            }, nt.attr = function(e, t) {
                var n, r = o(e);
                return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
            }, i = nt.selectors = {
                cacheLength: 50,
                createPseudo: N,
                match: J,
                attrHandle: G ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                },
                find: {
                    ID: r ? function(e, t, n) {
                        if (typeof t.getElementById !== p && !n) {
                            var r = t.getElementById(e);
                            return r && r.parentNode ? [r] : []
                        }
                    } : function(e, n, r) {
                        if (typeof n.getElementById !== p && !r) {
                            var i = n.getElementById(e);
                            return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                        }
                    },
                    TAG: Q ? function(e, t) {
                        if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e)
                    } : function(e, t) {
                        var n = t.getElementsByTagName(e);
                        if (e === "*") {
                            var r, i = [],
                                s = 0;
                            for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                            return i
                        }
                        return n
                    },
                    NAME: et && function(e, t) {
                        if (typeof t.getElementsByName !== p) return t.getElementsByName(name)
                    },
                    CLASS: Z && function(e, t, n) {
                        if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n;
                        if (J.CHILD.test(e[0])) return null;
                        if (e[3]) e[2] = e[3];
                        else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    ID: r ? function(e) {
                        return e = e.replace($, ""),
                            function(t) {
                                return t.getAttribute("id") === e
                            }
                    } : function(e) {
                        return e = e.replace($, ""),
                            function(t) {
                                var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                    },
                    TAG: function(e) {
                        return e === "*" ? function() {
                            return !0
                        } : (e = e.replace($, "").toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = k[d][e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function(e) {
                            return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r, i) {
                            var s = nt.attr(r, e);
                            return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r) {
                        return e === "nth" ? function(e) {
                            var t, i, s = e.parentNode;
                            if (n === 1 && r === 0) return !0;
                            if (s) {
                                i = 0;
                                for (t = s.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType === 1) {
                                        i++;
                                        if (e === t) break
                                    }
                            }
                            return i -= r, i === n || i % n === 0 && i / n >= 0
                        } : function(t) {
                            var n = t;
                            switch (e) {
                                case "only":
                                case "first":
                                    while (n = n.previousSibling)
                                        if (n.nodeType === 1) return !1;
                                    if (e === "first") return !0;
                                    n = t;
                                case "last":
                                    while (n = n.nextSibling)
                                        if (n.nodeType === 1) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                        return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function(e, n) {
                            var i, s = r(e, t),
                                o = s.length;
                            while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: N(function(e) {
                        var t = [],
                            n = [],
                            r = a(e.replace(j, "$1"));
                        return r[d] ? N(function(e, t, n, i) {
                            var s, o = r(e, null, i, []),
                                u = e.length;
                            while (u--)
                                if (s = o[u]) e[u] = !(t[u] = s)
                        }) : function(e, i, s) {
                            return t[0] = e, r(t, null, s, n), !n.pop()
                        }
                    }),
                    has: N(function(e) {
                        return function(t) {
                            return nt(e, t).length > 0
                        }
                    }),
                    contains: N(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                        }
                    }),
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    empty: function(e) {
                        var t;
                        e = e.firstChild;
                        while (e) {
                            if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                            e = e.nextSibling
                        }
                        return !0
                    },
                    header: function(e) {
                        return X.test(e.nodeName)
                    },
                    text: function(e) {
                        var t, n;
                        return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                    },
                    radio: rt("radio"),
                    checkbox: rt("checkbox"),
                    file: rt("file"),
                    password: rt("password"),
                    image: rt("image"),
                    submit: it("submit"),
                    reset: it("reset"),
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    focus: function(e) {
                        var t = e.ownerDocument;
                        return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    active: function(e) {
                        return e === e.ownerDocument.activeElement
                    },
                    first: st(function() {
                        return [0]
                    }),
                    last: st(function(e, t) {
                        return [t - 1]
                    }),
                    eq: st(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: st(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: st(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: st(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: st(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, f = y.compareDocumentPosition ? function(e, t) {
                return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
            } : function(e, t) {
                if (e === t) return l = !0, 0;
                if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                var n, r, i = [],
                    s = [],
                    o = e.parentNode,
                    u = t.parentNode,
                    a = o;
                if (o === u) return ot(e, t);
                if (!o) return -1;
                if (!u) return 1;
                while (a) i.unshift(a), a = a.parentNode;
                a = u;
                while (a) s.unshift(a), a = a.parentNode;
                n = i.length, r = s.length;
                for (var f = 0; f < n && f < r; f++)
                    if (i[f] !== s[f]) return ot(i[f], s[f]);
                return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
            }, [0, 0].sort(f), h = !l, nt.uniqueSort = function(e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                l = h, e.sort(f);
                if (l) {
                    for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            }, nt.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, a = nt.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    s = A[d][e + " "];
                if (!s) {
                    t || (t = ut(e)), n = t.length;
                    while (n--) s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
                    s = A(e, pt(i, r))
                }
                return s
            }, g.querySelectorAll && function() {
                var e, t = vt,
                    n = /'|\\/g,
                    r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    i = [":focus"],
                    s = [":active"],
                    u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
                K(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
                }), K(function(e) {
                    e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
                }), i = new RegExp(i.join("|")), vt = function(e, r, s, o, u) {
                    if (!o && !u && !i.test(e)) {
                        var a, f, l = !0,
                            c = d,
                            h = r,
                            p = r.nodeType === 9 && e;
                        if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                            a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
                            while (f--) a[f] = c + a[f].join("");
                            h = z.test(e) && r.parentNode || r, p = a.join(",")
                        }
                        if (p) try {
                            return S.apply(s, x.call(h.querySelectorAll(p), 0)), s
                        } catch (v) {} finally {
                            l || r.removeAttribute("id")
                        }
                    }
                    return t(e, r, s, o, u)
                }, u && (K(function(t) {
                    e = u.call(t, "div");
                    try {
                        u.call(t, "[test!='']:sizzle"), s.push("!=", H)
                    } catch (n) {}
                }), s = new RegExp(s.join("|")), nt.matchesSelector = function(t, n) {
                    n = n.replace(r, "='$1']");
                    if (!o(t) && !s.test(n) && !i.test(n)) try {
                        var a = u.call(t, n);
                        if (a || e || t.document && t.document.nodeType !== 11) return a
                    } catch (f) {}
                    return nt(n, null, null, [t]).length > 0
                })
            }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains
        }(e);
    var nt = /Until$/,
        rt = /^(?:parents|prev(?:Until|All))/,
        it = /^.[^:#\[\.,]*$/,
        st = v.expr.match.needsContext,
        ot = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    v.fn.extend({
        find: function(e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string") return v(e).filter(function() {
                for (t = 0, n = u.length; t < n; t++)
                    if (v.contains(u[t], this)) return !0
            });
            o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                r = o.length, v.find(e, this[t], o);
                if (t > 0)
                    for (i = r; i < o.length; i++)
                        for (s = 0; s < r; s++)
                            if (o[s] === o[i]) {
                                o.splice(i--, 1);
                                break
                            }
            }
            return o
        },
        has: function(e) {
            var t, n = v(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (v.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
        },
        index: function(e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.fn.andSelf = v.fn.addBack, v.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return v.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return v.dir(e, "parentNode", n)
        },
        next: function(e) {
            return at(e, "nextSibling")
        },
        prev: function(e) {
            return at(e, "previousSibling")
        },
        nextAll: function(e) {
            return v.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return v.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return v.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return v.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return v.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return v.sibling(e.firstChild)
        },
        contents: function(e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function(e, t) {
        v.fn[e] = function(n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
        }
    }), v.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ht = / jQuery\d+="(?:null|\d+)"/g,
        pt = /^\s+/,
        dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        vt = /<([\w:]+)/,
        mt = /<tbody/i,
        gt = /<|&#?\w+;/,
        yt = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
        Et = /^(?:checkbox|radio)$/,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /\/(java|ecma)script/i,
        Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Nt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Ct = lt(i),
        kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
            text: function(e) {
                return v.access(this, function(e) {
                    return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (v.isFunction(e)) return this.each(function(t) {
                    v(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        var e = this;
                        while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return v.isFunction(e) ? this.each(function(t) {
                    v(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = v(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = v.isFunction(e);
                return this.each(function(n) {
                    v(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = v.clean(arguments);
                    return this.pushStack(v.merge(e, this), "before", this.selector)
                }
            },
            after: function() {
                if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = v.clean(arguments);
                    return this.pushStack(v.merge(this, e), "after", this.selector)
                }
            },
            remove: function(e, t) {
                var n, r = 0;
                for (;
                    (n = this[r]) != null; r++)
                    if (!e || v.filter(e, [n]).length) !t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
                return this
            },
            empty: function() {
                var e, t = 0;
                for (;
                    (e = this[t]) != null; t++) {
                    e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                    while (e.firstChild) e.removeChild(e.firstChild)
                }
                return this
            },
            clone: function(e, t) {
                return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                    return v.clone(this, e, t)
                })
            },
            html: function(e) {
                return v.access(this, function(e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                    if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(dt, "<$1></$2>");
                        try {
                            for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                            n = 0
                        } catch (s) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function(t) {
                    var n = v(this),
                        r = n.html();
                    n.replaceWith(e.call(this, t, r))
                }) : (typeof e != "string" && (e = v(e).detach()), this.each(function() {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    v(this).remove(), t ? v(t).before(e) : v(n).append(e)
                }))
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, r) {
                e = [].concat.apply([], e);
                var i, s, o, u, a = 0,
                    f = e[0],
                    l = [],
                    c = this.length;
                if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function() {
                    v(this).domManip(e, n, r)
                });
                if (v.isFunction(f)) return this.each(function(i) {
                    var s = v(this);
                    e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
                });
                if (this[0]) {
                    i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                    if (s) {
                        n = n && v.nodeName(s, "tr");
                        for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                    }
                    o = s = null, l.length && v.each(l, function(e, t) {
                        t.src ? v.ajax ? v.ajax({
                            url: t.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), v.buildFragment = function(e, n, r) {
            var s, o, u, a = e[0];
            return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
                fragment: s,
                cacheable: o
            }
        }, v.fragments = {}, v.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            v.fn[e] = function(n) {
                var r, i = 0,
                    s = [],
                    o = v(n),
                    u = o.length,
                    a = this.length === 1 && this[0].parentNode;
                if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
                for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
                return this.pushStack(s, e, o.selector)
            }
        }), v.extend({
            clone: function(e, t, n) {
                var r, i, s, o;
                v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
                if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                    Ot(e, o), r = Mt(e), i = Mt(o);
                    for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s])
                }
                if (t) {
                    At(e, o);
                    if (n) {
                        r = Mt(e), i = Mt(o);
                        for (s = 0; r[s]; ++s) At(r[s], i[s])
                    }
                }
                return r = i = null, o
            },
            clean: function(e, t, n, r) {
                var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct,
                    b = [];
                if (!t || typeof t.createDocumentFragment == "undefined") t = i;
                for (s = 0;
                    (u = e[s]) != null; s++) {
                    typeof u == "number" && (u += "");
                    if (!u) continue;
                    if (typeof u == "string")
                        if (!gt.test(u)) u = t.createTextNode(u);
                        else {
                            y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                            while (l--) c = c.lastChild;
                            if (!v.support.tbody) {
                                h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                                for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                            }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
                        }
                    u.nodeType ? b.push(u) : v.merge(b, u)
                }
                c && (u = c = y = null);
                if (!v.support.appendChecked)
                    for (s = 0;
                        (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
                if (n) {
                    m = function(e) {
                        if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                    };
                    for (s = 0;
                        (u = b[s]) != null; s++)
                        if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
                }
                return b
            },
            cleanData: function(e, t) {
                var n, r, i, s, o = 0,
                    u = v.expando,
                    a = v.cache,
                    f = v.support.deleteExpando,
                    l = v.event.special;
                for (;
                    (i = e[o]) != null; o++)
                    if (t || v.acceptData(i)) {
                        r = i[u], n = r && a[r];
                        if (n) {
                            if (n.events)
                                for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                            a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
                        }
                    }
            }
        }),
        function() {
            var e, t;
            v.uaMatch = function(e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function() {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }
                v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(r, i) {
                    return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(i);
                return e
            }
        }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
        jt = /opacity=([^)]*)/,
        Ft = /^(top|right|bottom|left)$/,
        It = /^(none|table(?!-c[ea]).+)/,
        qt = /^margin/,
        Rt = new RegExp("^(" + m + ")(.*)$", "i"),
        Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
        zt = new RegExp("^([-+])=(" + m + ")", "i"),
        Wt = {
            BODY: "block"
        },
        Xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Vt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        $t = ["Top", "Right", "Bottom", "Left"],
        Jt = ["Webkit", "O", "Moz", "ms"],
        Kt = v.fn.toggle;
    v.fn.extend({
        css: function(e, n) {
            return v.access(this, function(e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return Yt(this, !0)
        },
        hide: function() {
            return Yt(this)
        },
        toggle: function(e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function() {
                (n ? e : Gt(this)) ? v(this).show(): v(this).hide()
            })
        }
    }), v.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = v.camelCase(n),
                f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function(e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function(e, t, n) {
            var r, i, s = {};
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = s[i];
            return r
        }
    }), e.getComputedStyle ? Dt = function(t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null),
            a = t.style;
        return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
    } : i.documentElement.currentStyle && (Dt = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            s = e.style;
        return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
    }), v.each(["height", "width"], function(e, t) {
        v.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function() {
                    return tn(e, t, r)
                }) : tn(e, t, r)
            },
            set: function(e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }), v.support.opacity || (v.cssHooks.opacity = {
        get: function(e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }), v(function() {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function(e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function() {
                    if (t) return Dt(e, "marginRight")
                })
            }
        }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function(e, t) {
            v.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var r = Dt(e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }), v.expr && v.expr.filters && (v.expr.filters.hidden = function(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }, v.expr.filters.visible = function(e) {
        return !v.expr.filters.hidden(e)
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        v.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n],
                    s = {};
                for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }, qt.test(e) || (v.cssHooks[e + t].set = Zt)
    });
    var rn = /%20/g,
        sn = /\[\]$/,
        on = /\r?\n/g,
        un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? v.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
            }).map(function(e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), v.param = function(e, n) {
        var r, i = [],
            s = function(e, t) {
                t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function() {
            s(this.name, this.value)
        });
        else
            for (r in e) fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+")
    };
    var ln, cn, hn = /#.*$/,
        pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        vn = /^(?:GET|HEAD)$/,
        mn = /^\/\//,
        gn = /\?/,
        yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bn = /([?&])_=[^&]*/,
        wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        En = v.fn.load,
        Sn = {},
        xn = {},
        Tn = ["*/"] + ["*"];
    try {
        cn = s.href
    } catch (Nn) {
        cn = i.createElement("a"), cn.href = "", cn = cn.href
    }
    ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function(e, n, r) {
        if (typeof e != "string" && En) return En.apply(this, arguments);
        if (!this.length) return this;
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function(e) {
            o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
        }), this
    }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        v.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), v.each(["get", "post"], function(e, n) {
        v[n] = function(e, r, i, s) {
            return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), v.extend({
        getScript: function(e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function(e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2) return;
                E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);
                else {
                    b = T;
                    if (!T || e) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
                h = c.context || c,
                p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
                d = v.Deferred(),
                m = v.Callbacks("once memory"),
                g = c.statusCode || {},
                b = {},
                w = {},
                E = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!E) {
                            var n = e.toLowerCase();
                            e = w[n] = w[n] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return E === 2 ? i : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (E === 2) {
                            if (!s) {
                                s = {};
                                while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2]
                            }
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return E || (c.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || S, o && o.abort(e), T(0, e), this
                    }
                };
            d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function(e) {
                if (e) {
                    var t;
                    if (E < 2)
                        for (t in e) g[t] = [g[t], e[t]];
                    else t = e[x.status], x.always(t)
                }
                return this
            }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
            if (E === 2) return x;
            f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                if (c.cache === !1) {
                    var N = v.now(),
                        C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o) T(-1, "No Transport");
                else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1, o.send(b, T)
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = [],
        _n = /\?/,
        Dn = /(=)\?(?=&|$)|\?\?/,
        Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.data,
            f = n.url,
            l = n.jsonp !== !1,
            c = l && Dn.test(f),
            h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return u || v.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", e[s] = function() {
            u = arguments
        }, i.always(function() {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), v.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function(s, o) {
                    n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Hn, Bn = e.ActiveXObject ? function() {
            for (var e in Hn) Hn[e](0, 1)
        } : !1,
        jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && Fn() || In()
        } : Fn,
        function(e) {
            v.extend(v.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function(n) {
            if (!n.crossDomain || v.support.cors) {
                var r;
                return {
                    send: function(i, s) {
                        var o, u, a = n.xhr();
                        n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                        if (n.xhrFields)
                            for (u in n.xhrFields) a[u] = n.xhrFields[u];
                        n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (u in i) a.setRequestHeader(u, i[u])
                        } catch (f) {}
                        a.send(n.hasContent && n.data || null), r = function(e, i) {
                            var u, f, l, c, h;
                            try {
                                if (r && (i || a.readyState === 4)) {
                                    r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                    if (i) a.readyState !== 4 && a.abort();
                                    else {
                                        u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                        try {
                                            c.text = a.responseText
                                        } catch (p) {}
                                        try {
                                            f = a.statusText
                                        } catch (p) {
                                            f = ""
                                        }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                    }
                                }
                            } catch (d) {
                                i || s(-1, d)
                            }
                            c && s(u, f, c, l)
                        }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(0, 1)
                    }
                }
            }
        });
    var qn, Rn, Un = /^(?:toggle|show|hide)$/,
        zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
        Wn = /queueHooks$/,
        Xn = [Gn],
        Vn = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    s = zn.exec(t),
                    o = i.cur(),
                    u = +o || 0,
                    a = 1,
                    f = 20;
                if (s) {
                    n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
                    if (r !== "px" && u) {
                        u = v.css(i.elem, e, !0) || n || 1;
                        do a = a || ".5", u /= a, v.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                    }
                    i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                }
                return i
            }]
        };
    v.Animation = v.extend(Kn, {
        tweener: function(e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }), v.Tween = Yn, Yn.prototype = {
        constructor: Yn,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
        }
    }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.each(["toggle", "show", "hide"], function(e, t) {
        var n = v.fn[t];
        v.fn[t] = function(r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
        }
    }), v.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = v.isEmptyObject(e),
                s = v.speed(t, n, r),
                o = function() {
                    var t = Kn(this, v.extend({}, e), s);
                    i && t.stop(!0)
                };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = v.timers,
                    o = v._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }), v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        v.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), v.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function() {
            v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
        }, r
    }, v.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function() {
        var e, n = v.timers,
            r = 0;
        qn = v.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || v.fx.stop(), qn = t
    }, v.fx.timer = function(e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.interval = 13, v.fx.stop = function() {
        clearInterval(Rn), Rn = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function(e) {
        return v.grep(v.timers, function(t) {
            return e === t.elem
        }).length
    });
    var er = /^(?:body|html)$/i;
    v.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            v.offset.setOffset(this, e, t)
        });
        var n, r, i, s, o, u, a, f = {
                top: 0,
                left: 0
            },
            l = this[0],
            c = l && l.ownerDocument;
        if (!c) return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }, v.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e),
                s = i.offset(),
                o = v.css(e, "top"),
                u = v.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
                f = {},
                l = {},
                c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, v.fn.extend({
        position: function() {
            if (!this[0]) return;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = er.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                return e || i.body
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function(i) {
            return v.access(this, function(e, i, s) {
                var o = tr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), v.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            v.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function(n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return v
    })
})(window);

$(function() {
    //Jquery Resize Event Reset
    //$(window).off('resize').on('resize', function(){});
    //jQuery enhanced disabled
    //$.toggleDisabledByDefault();
});


/*!
 * VERSION: 1.16.1
 * DATE: 2015-03-13
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    n = 1e-10,
                    a = i._internals,
                    o = a.isSelector,
                    h = a.isArray,
                    l = r.prototype = i.to({}, .1, {}),
                    _ = [];
                r.version = "1.16.1", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, l.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, l.updateTo = function(t, e) {
                    var s, r = this.ratio,
                        n = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || n)
                        if (e) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._time > 0 || n) {
                        this._initted = !1, this._init();
                        for (var o, h = 1 / (1 - r), l = this._firstPT; l;) o = l.s + l.c, l.c *= h, l.s = o - l.c, l = l._next
                    }
                    return this
                }, l.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, o, h, l, u, p, f, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._cycle,
                        v = this._duration,
                        y = this._rawPrevTime;
                    if (t >= c ? (this._totalTime = c, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === n) && y !== t && (i = !0, y > n && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || y === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === v && y > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = f = !e || t || y === t ? t : n)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / v, u = this._easeType, p = this._easePower, (1 === u || 3 === u && l >= .5) && (l = 1 - l), 3 === u && (l *= 2), 1 === p ? l *= l : 2 === p ? l *= l * l : 3 === p ? l *= l * l * l : 4 === p && (l *= l * l * l * l), this.ratio = 1 === u ? 1 - l : 2 === u ? l : .5 > this._time / v ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), m === this._time && !i && g === this._cycle) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), void 0;
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = d, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / v) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === v && this._rawPrevTime === n && f !== n && (this._rawPrevTime = 0))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
                }, r.staggerTo = r.allTo = function(t, e, n, a, l, u, p) {
                    a = a || 0;
                    var f, c, m, d, g = n.delay || 0,
                        v = [],
                        y = function() {
                            n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), l.apply(p || this, u || _)
                        };
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), t = t || [], 0 > a && (t = s(t), t.reverse(), a *= -1), f = t.length - 1, m = 0; f >= m; m++) {
                        c = {};
                        for (d in n) c[d] = n[d];
                        c.delay = g, m === f && l && (c.onComplete = y), v[m] = new r(t[m], e, c), g += a
                    }
                    return v
                }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
                }, r.delayedCall = function(t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: s,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var u = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(u(n, e)), r = s.length), n = n._next;
                        return s
                    },
                    p = r.getAllTweens = function(e) {
                        return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, h = p(0 != r),
                        l = h.length,
                        _ = i && s && r;
                    for (o = 0; l > o; o++) a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var n, l, _, u, p, f = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), h(t))
                            for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                        else {
                            n = [];
                            for (_ in f)
                                for (l = f[_].target.parentNode; l;) l === t && (n = n.concat(f[_].tweens)), l = l.parentNode;
                            for (p = n.length, u = 0; p > u; u++) e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1)
                        }
                    }
                };
                var f = function(t, i, s, r) {
                    i = i !== !1, s = s !== !1, r = r !== !1;
                    for (var n, a, o = p(r), h = i && s && r, l = o.length; --l > -1;) a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    f(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    f(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, l.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, l.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, l.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, l.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, l.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, l.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, l.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, l.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    n = i._internals,
                    a = s._internals = {},
                    o = n.isSelector,
                    h = n.isArray,
                    l = n.lazyTweens,
                    _ = n.lazyRender,
                    u = [],
                    p = _gsScope._gsDefine.globals,
                    f = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    c = a.pauseCallback = function(t, e, i, s) {
                        var n, a = t._timeline,
                            o = a._totalTime,
                            h = t._startTime,
                            l = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
                            _ = l ? 0 : r,
                            p = l ? r : 0;
                        if (e || !this._forcingPlayhead) {
                            for (a.pause(h), n = t._prev; n && n._startTime === h;) n._rawPrevTime = p, n = n._prev;
                            for (n = t._next; n && n._startTime === h;) n._rawPrevTime = _, n = n._next;
                            e && e.apply(s || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o)
                        }
                    },
                    m = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    d = s.prototype = new e;
                return s.version = "1.16.1", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function(t, e, s, r) {
                    var n = s.repeat && p.TweenMax || i;
                    return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
                }, d.from = function(t, e, s, r) {
                    return this.add((s.repeat && p.TweenMax || i).from(t, e, s), r)
                }, d.fromTo = function(t, e, s, r, n) {
                    var a = r.repeat && p.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, d.staggerTo = function(t, e, r, n, a, h, l, _) {
                    var u, p = new s({
                        onComplete: h,
                        onCompleteParams: l,
                        onCompleteScope: _,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = f(r.startAt)), p.to(t[u], e, f(r), u * n);
                    return this.add(p, a)
                }, d.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
                }, d.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, d.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, d.add = function(r, n, a, o) {
                    var l, _, u, p, f, c;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && h(r)) {
                            for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(p = r[u]) && (p = new s({
                                tweens: p
                            })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())), l += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, c = f.rawTime() > r._startTime; f._timeline;) c && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, d.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && h(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, d._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, d.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, d.insert = d.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, d.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, d.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, d.addPause = function(t, e, s, r) {
                    var n = i.delayedCall(0, c, ["{self}", e, s, r], this);
                    return n.data = "isPause", this.add(n, t)
                }, d.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, d.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, d._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && h(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, d.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, d.stop = function() {
                    return this.paused(!0)
                }, d.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, d.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, d.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        c = this._startTime,
                        m = this._timeScale,
                        d = this._paused;
                    if (t >= p) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (h = !0)
                        }
                    else this._totalTime = this._time = this._rawPrevTime = t;
                    if (this._time !== f && this._first || i || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= f)
                            for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || d);)(s._active || f >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        this._onUpdate && (e || (l.length && _(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))), o && (this._gc || (c === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || u)))
                    }
                }, d._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, d.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, d.getTweensOf = function(t, e) {
                    var s, r, n = this._gc,
                        a = [],
                        o = 0;
                    for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                    return n && this._enabled(!1, !0), a
                }, d.recent = function() {
                    return this._recent
                }, d._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, d.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, d._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, d.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, d.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, d._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, d.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, d.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, d.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, d.paused = function(e) {
                    if (!e)
                        for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, d.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, d.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    n = [],
                    a = e._internals,
                    o = a.lazyTweens,
                    h = a.lazyRender,
                    l = new i(null, null, 1, 0),
                    _ = s.prototype = new t;
                return _.constructor = s, _.kill()._gc = !1, s.version = "1.16.1", _.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, _.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, _.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, _.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, _.tweenTo = function(t, i) {
                    i = i || {};
                    var s, r, a, o = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) o[r] = i[r];
                    return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new e(this, s, o), o.onStart = function() {
                        a.target.paused(!0), a.vars.time !== a.target.time() && s === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || n)
                    }, a
                }, _.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, _.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, a, l, _, u, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        c = this._duration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        T = this._paused,
                        w = this._cycle;
                    if (t >= f) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, _ = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (u = !0, y > r && (_ = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = c, t = c + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === c && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (_ = "onReverseComplete", a = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = a = !0, _ = "onReverseComplete") : y >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = c || !e || t || this._rawPrevTime === t ? t : r, 0 === t && a)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (a = !1), s = s._next;
                            t = 0, this._initted || (u = !0)
                        }
                    else 0 === c && 0 > y && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = c + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = c - this._time), this._time > c ? (this._time = c, t = c + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time));
                    if (this._cycle !== w && !this._locked) {
                        var x = this._yoyo && 0 !== (1 & w),
                            b = x === (this._yoyo && 0 !== (1 & this._cycle)),
                            P = this._totalTime,
                            S = this._cycle,
                            k = this._rawPrevTime,
                            R = this._time;
                        if (this._totalTime = w * c, w > this._cycle ? x = !x : this._totalTime += c, this._time = m, this._rawPrevTime = 0 === c ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = x ? 0 : c, this.render(m, e, 0 === c), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), b && (m = x ? c + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
                        this._time = R, this._totalTime = P, this._cycle = S, this._rawPrevTime = k
                    }
                    if (!(this._time !== m && this._first || i || u)) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), void 0;
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= m)
                        for (s = this._first; s && (l = s._next, !this._paused || T);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    else
                        for (s = this._last; s && (l = s._prev, !this._paused || T);)(s._active || m >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    this._onUpdate && (e || (o.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n))), _ && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (a && (o.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[_] && this.vars[_].apply(this.vars[_ + "Scope"] || this, this.vars[_ + "Params"] || n)))
                }, _.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        h = a.length;
                    for (s = 0; h > s; s++) r = a[s], r.isActive() && (n[o++] = r);
                    return n
                }, _.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, _.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, _.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, _.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, _.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, _.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, _.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, _.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, _.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, _.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, _.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    r = {},
                    n = _gsScope._gsDefine.globals,
                    a = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    h = function(t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (h + l) / 2,
                            p = (l + _) / 2,
                            f = (p - u) / 8;
                        return r.b = h + (t - h) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    l = function(t, r, n, a, o) {
                        var l, _, u, p, f, c, m, d, g, v, y, T, w, x = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (l = 0; x > l; l++) f = t[b], _ = f.a, u = f.d, p = t[b + 1].d, o ? (y = e[l], T = i[l], w = .25 * (T + y) * r / (a ? .5 : s[l] || .5), c = u - (u - _) * (a ? .5 * r : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * r : 0 !== T ? w / T : 0), d = u - (c + ((m - c) * (3 * y / (y + T) + .5) / 4 || 0))) : (c = u - .5 * (u - _) * r, m = u + .5 * (p - u) * r, d = u - (c + m) / 2), c += d, m += d, f.c = g = c, f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = h(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    _ = function(t, s, r, n) {
                        var o, h, l, _, u, p, f = [];
                        if (n)
                            for (t = [n].concat(t), h = t.length; --h > -1;) "string" == typeof(p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = n[s] + Number(p.charAt(0) + p.substr(2)));
                        if (o = t.length - 2, 0 > o) return f[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), f;
                        for (h = 0; o > h; h++) l = t[h][s], _ = t[h + 1][s], f[h] = new a(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
                        return f[h] = new a(t[h][s], 0, 0, t[h + 1][s]), f
                    },
                    u = function(t, n, a, h, u, p) {
                        var f, c, m, d, g, v, y, T, w = {},
                            x = [],
                            b = p || t[0];
                        u = "string" == typeof u ? "," + u + "," : o, null == n && (n = 1);
                        for (c in t[0]) x.push(c);
                        if (t.length > 1) {
                            for (T = t[t.length - 1], y = !0, f = x.length; --f > -1;)
                                if (c = x[f], Math.abs(b[c] - T[c]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, f = x.length; --f > -1;) c = x[f], r[c] = -1 !== u.indexOf("," + c + ","), w[c] = _(t, c, r[c], p);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!h) {
                            for (f = x.length; --f > -1;)
                                if (r[c])
                                    for (m = w[x[f]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                            for (f = s.length; --f > -1;) s[f] = Math.sqrt(s[f])
                        }
                        for (f = x.length, d = a ? 4 : 1; --f > -1;) c = x[f], m = w[c], l(m, n, a, h, r[c]), y && (m.splice(0, d), m.splice(m.length - d, d));
                        return w
                    },
                    p = function(t, e, i) {
                        e = e || "soft";
                        var s, r, n, o, h, l, _, u, p, f, c, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (p in t[0]) v.push(p);
                        for (l = v.length; --l > -1;) {
                            for (p = v[l], m[p] = h = [], f = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof(c = t[_][p]) && "=" === c.charAt(1) ? i[p] + Number(c.charAt(0) + c.substr(2)) : Number(c), g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2), h[f++] = s;
                            for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[f++] = c = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            h.length = f
                        }
                        return m
                    },
                    f = function(t, e, i) {
                        for (var s, r, n, a, o, h, l, _, u, p, f, c = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = c * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s
                    },
                    c = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            _ = e - 1,
                            u = [],
                            p = [];
                        for (i in t) f(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, p[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = p, o[n] = l, h = 0, p = []);
                        return {
                            length: l,
                            lengths: o,
                            segments: u
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, h = e.values || [],
                                l = {},
                                _ = h[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (s in _) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = c(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                                    for (a = 0; 3 > a; a++) s = f[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                                    s = f[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                                f = this._func,
                                c = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (l = p - 1; l > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = Math.round(h)), f[n] ? c[n](h) : c[n] = h;
                            if (this._autoRotate) {
                                var d, g, v, y, T, w, x, b = this._autoRotate;
                                for (r = b.length; --r > -1;) n = b[r][2], w = b[r][3] || 0, x = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * x + w : this._initialRotations[r], f[n] ? c[n](h) : c[n] = h)
                            }
                        }
                    }),
                    d = m.prototype;
                m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = n.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, n, a, o, h) {
                                e instanceof Array && (e = {
                                    values: e
                                }), h = new m;
                                var l, _, u, p = e.values,
                                    f = p.length - 1,
                                    c = [],
                                    d = {};
                                if (0 > f) return o;
                                for (l = 0; f >= l; l++) u = i(t, p[l], a, o, h, f !== l), c[l] = u.end;
                                for (_ in e) d[_] = e[_];
                                return d.values = c, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", l, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", l, !1]
                                ] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o
                            }
                        })
                    }
                }, d._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, d._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    h = {},
                    l = a.prototype = new t("css");
                l.constructor = a, a.version = "1.16.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", l = "px", a.suffixMap = {
                    top: l,
                    right: l,
                    bottom: l,
                    left: l,
                    width: l,
                    height: l,
                    fontSize: l,
                    padding: l,
                    margin: l,
                    perspective: l,
                    lineHeight: ""
                };
                var _, u, p, f, c, m, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/i,
                    x = /opacity:([^;]*)/i,
                    b = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    S = /([A-Z])/g,
                    k = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function(t, e) {
                        return e.toUpperCase()
                    },
                    O = /(?:Left|Right|Width)/i,
                    C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    z = Math.PI / 180,
                    I = 180 / Math.PI,
                    F = {},
                    E = document,
                    N = function(t) {
                        return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", t) : E.createElement(t)
                    },
                    L = N("div"),
                    X = N("img"),
                    U = a._internals = {
                        _specialProps: h
                    },
                    Y = navigator.userAgent,
                    j = function() {
                        var t = Y.indexOf("Android"),
                            e = N("a");
                        return p = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), c = p && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), f = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    B = function(t) {
                        return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    q = function(t) {
                        window.console && console.log(t)
                    },
                    V = "",
                    G = "",
                    W = function(t, e) {
                        e = e || L;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null
                    },
                    Z = E.defaultView ? E.defaultView.getComputedStyle : function() {},
                    Q = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return j || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : B(t)
                    },
                    $ = U.convertToPixels = function(t, i, s, r, n) {
                        if ("px" === r || !r) return s;
                        if ("auto" === r || !s) return 0;
                        var o, h, l, _ = O.test(i),
                            u = t,
                            p = L.style,
                            f = 0 > s;
                        if (f && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else {
                            if (p.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) p[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                            else {
                                if (u = t.parentNode || E.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;
                                p[_ ? "width" : "height"] = s + r
                            }
                            u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0))
                        }
                        return f ? -o : o
                    },
                    H = U.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Q(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = Q(t, "margin" + s, i);
                        return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0)
                    },
                    K = function(t, e) {
                        var i, s, r, n = {};
                        if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || be === r) && (n[r.replace(k, A)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || xe === i) && (n[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(k, A)] = e[i]);
                        return j || (n.opacity = B(t)), s = Me(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Se && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                    },
                    J = function(t, e, i, s, r) {
                        var n, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== l[a] && (o = new fe(l, a, l[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (h[a] = s[a]);
                        return {
                            difs: h,
                            firstMPT: o
                        }
                    },
                    te = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ie = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = te[e],
                            n = r.length;
                        for (i = i || Z(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    se = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
                    },
                    re = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    ne = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ae = function(t, e, i, s) {
                        var r, n, a, o, h, l = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), h = "=" === t.charAt(1), a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (h ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), l > o && o > -l && (o = 0), o
                    },
                    oe = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    he = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    le = a.parseColor = function(t) {
                        var e, i, s, r, n, a;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = he(r + 1 / 3, e, i), t[1] = he(r, e, i), t[2] = he(r - 1 / 3, e, i), t) : (t = t.match(d) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black
                    },
                    _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in oe) _e += "|" + l + "\\b";
                _e = RegExp(_e + ")", "gi");
                var ue = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(_e) || [""])[0] : "",
                            a = t.split(n).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(d, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, p, f, c;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (c = t.replace(M, "|").split("|"), f = 0; c.length > f; f++) c[f] = r(c[f]);
                                return c.join(",")
                            }
                            if (e = (t.match(_e) || [n])[0], p = t.split(e).join("").match(v) || [], f = p.length, _ > f--)
                                for (; _ > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                            return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, p;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (n = t.replace(M, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]);
                                return n.join(",")
                            }
                            if (e = t.match(v) || [], p = e.length, _ > p--)
                                for (; _ > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                            return o + e.join(l) + h
                        } : function(t) {
                            return t
                        }
                    },
                    pe = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    fe = (U._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    }),
                    ce = (U._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, h, l, _, u = s,
                            p = {},
                            f = {},
                            c = i._transform,
                            m = F;
                        for (i._transform = null, F = e, s = _ = i.parse(t, e, s, r), F = m, n && (i._transform = c, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, p[o] = s.s, n || (l = new fe(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, f[o] = s.data[h], p[o] = s[h], n || (l = new fe(s, h, o, l, s.rxp[h]));
                            s = s._next
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: l,
                            pt: _
                        }
                    }, U.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof ce || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this)
                    }),
                    me = a.parseComplex = function(t, e, i, s, r, n, a, o, h, l) {
                        i = i || n || "", a = new ce(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, p, f, c, m, v, y, T, w, x, b, S, k = i.split(", ").join(",").split(" "),
                            R = s.split(", ").join(",").split(" "),
                            A = k.length,
                            O = _ !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), A = k.length), A !== R.length && (k = (n || "").split(" "), A = k.length), a.plugin = h, a.setRatio = l, u = 0; A > u; u++)
                            if (c = k[u], m = R[u], T = parseFloat(c), T || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), O && -1 !== m.indexOf("px"), !0);
                            else if (r && ("#" === c.charAt(0) || oe[c] || P.test(c))) S = "," === m.charAt(m.length - 1) ? ")," : ")", c = le(c), m = le(m), w = c.length + m.length > 6, w && !j && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (j || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", c[0], m[0] - c[0], ",", !0, !0).appendXtra("", c[1], m[1] - c[1], ",", !0).appendXtra("", c[2], m[2] - c[2], w ? "," : S, !0), w && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > m.length ? 1 : m[3]) - c, S, !1)));
                        else if (v = c.match(d)) {
                            if (y = m.match(g), !y || y.length !== v.length) return a;
                            for (f = 0, p = 0; v.length > p; p++) b = v[p], x = c.indexOf(b, f), a.appendXtra(c.substr(f, x - f), Number(b), re(y[p], b), "", O && "px" === c.substr(x + b.length, 2), 0 === p), f = x + b.length;
                            a["xs" + a.l] += c.substr(f)
                        } else a["xs" + a.l] += a.l ? " " + c : c;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
                            a.e = S + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    de = 9;
                for (l = ce.prototype, l.l = l.pr = 0; --de > 0;) l["xn" + de] = 0, l["xs" + de] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new ce(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var ge = function(t, e) {
                        e = e || {}, this.p = e.prefix ? W(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    ve = U._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r, n = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ge(n[s], e)
                    },
                    ye = function(t) {
                        if (!h[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            ve(t, {
                                parser: function(t, i, s, r, n, a, l) {
                                    var _ = o.com.greensock.plugins[e];
                                    return _ ? (_._cssRegister(), h[s].parse(t, i, s, r, n, a, l)) : (q("Error: " + e + " js file not loaded."), n)
                                }
                            })
                        }
                    };
                l = ge.prototype, l.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, h, l, _, u, p = this.keyword;
                    if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), h = i.replace(M, "|").split("|")) : p && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (-1 === u ? o[a] = o[a].split(p).join("") : -1 === _ && (o[a] += " " + p)));
                        e = o.join(", "), i = h.join(", ")
                    }
                    return me(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, l.parse = function(t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    ve(t, {
                        parser: function(t, s, r, n, a, o) {
                            var h = new ce(t, r, 0, 0, a, 2, r, !1, i);
                            return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                        },
                        priority: i
                    })
                }, a.useSVGTransformAttr = p;
                var Te, we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    xe = W("transform"),
                    be = V + "transform",
                    Pe = W("transformOrigin"),
                    Se = null !== W("perspective"),
                    ke = U.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1
                    },
                    Re = window.SVGElement,
                    Ae = function(t, e, i) {
                        var s, r = E.createElementNS("http://www.w3.org/2000/svg", t),
                            n = /([a-z])([A-Z])/g;
                        for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(r), r
                    },
                    Oe = E.documentElement,
                    Ce = function() {
                        var t, e, i, s = m || /Android/i.test(Y) && !window.chrome;
                        return E.createElementNS && !s && (t = Ae("svg", Oe), e = Ae("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Pe] = "50% 50%", e.style[xe] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(f && Se), Oe.removeChild(t)), s
                    }(),
                    De = function(t, e, i, s) {
                        var r, n;
                        s && (n = s.split(" ")).length || (r = t.getBBox(), e = se(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * r.width : parseFloat(e[0])) + r.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * r.height : parseFloat(e[1])) + r.y]), i.xOrigin = parseFloat(n[0]), i.yOrigin = parseFloat(n[1]), t.setAttribute("data-svg-origin", n.join(" "))
                    },
                    Me = U.getTransform = function(t, e, i, s) {
                        if (t._gsTransform && i && !s) return t._gsTransform;
                        var n, o, h, l, _, u, p, f, c, m, d = i ? t._gsTransform || new ke : new ke,
                            g = 0 > d.scaleX,
                            v = 2e-5,
                            y = 1e5,
                            T = Se ? parseFloat(Q(t, Pe, e, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                            w = parseFloat(a.defaultTransformPerspective) || 0;
                        if (xe ? o = Q(t, be, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(C), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), d.x || 0, d.y || 0].join(",") : ""), n = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o, d.svg = !!(Re && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), d.svg && (n && -1 !== (t.style[xe] + "").indexOf("matrix") && (o = t.style[xe], n = !1), De(t, Q(t, Pe, r, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), Te = a.useSVGTransformAttr || Ce, h = t.getAttribute("transform"), n && h && -1 !== h.indexOf("matrix") && (o = h, n = 0)), !n) {
                            for (h = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = h.length; --l > -1;) _ = Number(h[l]), h[l] = (u = _ - (_ |= 0)) ? (0 | u * y + (0 > u ? -.5 : .5)) / y + _ : _;
                            if (16 === h.length) {
                                var x, b, P, S, k, R = h[0],
                                    A = h[1],
                                    O = h[2],
                                    D = h[3],
                                    M = h[4],
                                    z = h[5],
                                    F = h[6],
                                    E = h[7],
                                    N = h[8],
                                    L = h[9],
                                    X = h[10],
                                    U = h[12],
                                    Y = h[13],
                                    j = h[14],
                                    B = h[11],
                                    q = Math.atan2(F, X);
                                d.zOrigin && (j = -d.zOrigin, U = N * j - h[12], Y = L * j - h[13], j = X * j + d.zOrigin - h[14]), d.rotationX = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = M * S + N * k, b = z * S + L * k, P = F * S + X * k, N = M * -k + N * S, L = z * -k + L * S, X = F * -k + X * S, B = E * -k + B * S, M = x, z = b, F = P), q = Math.atan2(N, X), d.rotationY = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = R * S - N * k, b = A * S - L * k, P = O * S - X * k, L = A * k + L * S, X = O * k + X * S, B = D * k + B * S, R = x, A = b, O = P), q = Math.atan2(A, R), d.rotation = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), R = R * S + M * k, b = A * S + z * k, z = A * -k + z * S, F = O * -k + F * S, A = b), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY += 180), d.scaleX = (0 | Math.sqrt(R * R + A * A) * y + .5) / y, d.scaleY = (0 | Math.sqrt(z * z + L * L) * y + .5) / y, d.scaleZ = (0 | Math.sqrt(F * F + X * X) * y + .5) / y, d.skewX = 0, d.perspective = B ? 1 / (0 > B ? -B : B) : 0, d.x = U, d.y = Y, d.z = j, d.svg && (d.x -= d.xOrigin - (d.xOrigin * R - d.yOrigin * M), d.y -= d.yOrigin - (d.yOrigin * A - d.xOrigin * z))
                            } else if (!(Se && !s && h.length && d.x === h[4] && d.y === h[5] && (d.rotationX || d.rotationY) || void 0 !== d.x && "none" === Q(t, "display", e))) {
                                var V = h.length >= 6,
                                    G = V ? h[0] : 1,
                                    W = h[1] || 0,
                                    Z = h[2] || 0,
                                    $ = V ? h[3] : 1;
                                d.x = h[4] || 0, d.y = h[5] || 0, p = Math.sqrt(G * G + W * W), f = Math.sqrt($ * $ + Z * Z), c = G || W ? Math.atan2(W, G) * I : d.rotation || 0, m = Z || $ ? Math.atan2(Z, $) * I + c : d.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (g ? (p *= -1, m += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (f *= -1, m += 0 >= m ? 180 : -180)), d.scaleX = p, d.scaleY = f, d.rotation = c, d.skewX = m, Se && (d.rotationX = d.rotationY = d.z = 0, d.perspective = w, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * G - d.yOrigin * W), d.y -= d.yOrigin - (d.yOrigin * $ - d.xOrigin * Z))
                            }
                            d.zOrigin = T;
                            for (l in d) v > d[l] && d[l] > -v && (d[l] = 0)
                        }
                        return i && (t._gsTransform = d, d.svg && (Te && t.style[xe] ? Ee(t.style, xe) : !Te && t.getAttribute("transform") && t.removeAttribute("transform"))), d
                    },
                    ze = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation * z,
                            n = r + s.skewX * z,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                            var f, c, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== p.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                                x = s.x + d * s.xPercent / 100,
                                b = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, c = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += f - (f * o + c * h), b += c - (f * l + c * _)), v ? (f = d / 2, c = g / 2, y += ", Dx=" + (f - (f * o + c * h) + x) + ", Dy=" + (c - (f * l + c * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var P, S, k, R = 8 > m ? 1 : -1;
                                for (f = s.ieOffsetX || 0, c = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), de = 0; 4 > de; de++) S = ee[de], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, S, parseFloat(P), P.replace(T, "")) || 0, k = i !== s[S] ? 2 > de ? -s.ieOffsetX : -s.ieOffsetY : 2 > de ? f - s.ieOffsetX : c - s.ieOffsetY, u[S] = (s[S] = Math.round(i - k * (0 === de || 2 === de ? 1 : R))) + "px"
                            }
                        }
                    },
                    Ie = U.set3DTransformRatio = U.setTransformRatio = function(t) {
                        var e, i, s, r, n, a, o, h, l, _, u, p, c, m, d, g, v, y, T, w, x, b, P, S = this.data,
                            k = this.t.style,
                            R = S.rotation,
                            A = S.rotationX,
                            O = S.rotationY,
                            C = S.scaleX,
                            D = S.scaleY,
                            M = S.scaleZ,
                            I = S.x,
                            F = S.y,
                            E = S.z,
                            N = S.svg,
                            L = S.perspective,
                            X = S.force3D;
                        if (!(((1 !== t && 0 !== t || "auto" !== X || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && X || E || L || O || A) && (!Te || !N) && Se)) return R || S.skewX || N ? (R *= z, b = S.skewX * z, P = 1e5, e = Math.cos(R) * C, r = Math.sin(R) * C, i = Math.sin(R - b) * -D, n = Math.cos(R - b) * D, b && "simple" === S.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, n *= v, S.skewY && (e *= v, r *= v)), N && (I += S.xOrigin - (S.xOrigin * e + S.yOrigin * i), F += S.yOrigin - (S.xOrigin * r + S.yOrigin * n), m = 1e-6, m > I && I > -m && (I = 0), m > F && F > -m && (F = 0)), T = (0 | e * P) / P + "," + (0 | r * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + I + "," + F + ")", N && Te ? this.t.setAttribute("transform", "matrix(" + T) : k[xe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + T) : k[xe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + D + "," + I + "," + F + ")", void 0;
                        if (f && (m = 1e-4, m > C && C > -m && (C = M = 2e-5), m > D && D > -m && (D = M = 2e-5), !L || S.z || S.rotationX || S.rotationY || (L = 0)), R || S.skewX) R *= z, d = e = Math.cos(R), g = r = Math.sin(R), S.skewX && (R -= S.skewX * z, d = Math.cos(R), g = Math.sin(R), "simple" === S.skewType && (v = Math.tan(S.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v, S.skewY && (e *= v, r *= v))), i = -g, n = d;
                        else {
                            if (!(O || A || 1 !== M || L || N)) return k[xe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + F + "px," + E + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""), void 0;
                            e = n = 1, i = r = 0
                        }
                        l = 1, s = a = o = h = _ = u = 0, p = L ? -1 / L : 0, c = S.zOrigin, m = 1e-6, w = ",", x = "0", R = O * z, R && (d = Math.cos(R), g = Math.sin(R), o = -g, _ = p * -g, s = e * g, a = r * g, l = d, p *= d, e *= d, r *= d), R = A * z, R && (d = Math.cos(R), g = Math.sin(R), v = i * d + s * g, y = n * d + a * g, h = l * g, u = p * g, s = i * -g + s * d, a = n * -g + a * d, l *= d, p *= d, i = v, n = y), 1 !== M && (s *= M, a *= M, l *= M, p *= M), 1 !== D && (i *= D, n *= D, h *= D, u *= D), 1 !== C && (e *= C, r *= C, o *= C, _ *= C), (c || N) && (c && (I += s * -c, F += a * -c, E += l * -c + c), N && (I += S.xOrigin - (S.xOrigin * e + S.yOrigin * i), F += S.yOrigin - (S.xOrigin * r + S.yOrigin * n)), m > I && I > -m && (I = x), m > F && F > -m && (F = x), m > E && E > -m && (E = 0)), T = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > e && e > -m ? x : e) + w + (m > r && r > -m ? x : r) + w + (m > o && o > -m ? x : o), T += w + (m > _ && _ > -m ? x : _) + w + (m > i && i > -m ? x : i) + w + (m > n && n > -m ? x : n), A || O ? (T += w + (m > h && h > -m ? x : h) + w + (m > u && u > -m ? x : u) + w + (m > s && s > -m ? x : s), T += w + (m > a && a > -m ? x : a) + w + (m > l && l > -m ? x : l) + w + (m > p && p > -m ? x : p) + w) : T += ",0,0,0,0,1,0,", T += I + w + F + w + E + w + (L ? 1 + -E / L : 1) + ")", k[xe] = T
                    };
                l = ke.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = 0, l.scaleX = l.scaleY = l.scaleZ = 1, ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                    parser: function(t, e, i, s, n, o, h) {
                        if (s._lastParsedTransform === h) return n;
                        s._lastParsedTransform = h;
                        var l, _, u, p, f, c, m, d = s._transform = Me(t, r, !0, h.parseTransform),
                            g = t.style,
                            v = 1e-6,
                            y = we.length,
                            T = h,
                            w = {};
                        if ("string" == typeof T.transform && xe) u = L.style, u[xe] = T.transform, u.display = "block", u.position = "absolute", E.body.appendChild(L), l = Me(L, null, !1), E.body.removeChild(L);
                        else if ("object" == typeof T) {
                            if (l = {
                                    scaleX: ne(null != T.scaleX ? T.scaleX : T.scale, d.scaleX),
                                    scaleY: ne(null != T.scaleY ? T.scaleY : T.scale, d.scaleY),
                                    scaleZ: ne(T.scaleZ, d.scaleZ),
                                    x: ne(T.x, d.x),
                                    y: ne(T.y, d.y),
                                    z: ne(T.z, d.z),
                                    xPercent: ne(T.xPercent, d.xPercent),
                                    yPercent: ne(T.yPercent, d.yPercent),
                                    perspective: ne(T.transformPerspective, d.perspective)
                                }, m = T.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (u in m) T[u] = m[u];
                                else T.rotation = m;
                            "string" == typeof T.x && -1 !== T.x.indexOf("%") && (l.x = 0, l.xPercent = ne(T.x, d.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (l.y = 0, l.yPercent = ne(T.y, d.yPercent)), l.rotation = ae("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : d.rotation, d.rotation, "rotation", w), Se && (l.rotationX = ae("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", w), l.rotationY = ae("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", w)), l.skewX = null == T.skewX ? d.skewX : ae(T.skewX, d.skewX), l.skewY = null == T.skewY ? d.skewY : ae(T.skewY, d.skewY), (_ = l.skewY - d.skewY) && (l.skewX += _, l.rotation += _)
                        }
                        for (Se && null != T.force3D && (d.force3D = T.force3D, c = !0), d.skewType = T.skewType || d.skewType || a.defaultSkewType, f = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, f || null == T.scale || (l.scaleZ = 1); --y > -1;) i = we[y], p = l[i] - d[i], (p > v || -v > p || null != T[i] || null != F[i]) && (c = !0, n = new ce(d, i, d[i], p, n), i in w && (n.e = w[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                        return p = T.transformOrigin, d.svg && (p || T.svgOrigin) && (De(t, se(p), l, T.svgOrigin), n = new ce(d, "xOrigin", d.xOrigin, l.xOrigin - d.xOrigin, n, -1, "transformOrigin"), n.b = d.xOrigin, n.e = n.xs0 = l.xOrigin, n = new ce(d, "yOrigin", d.yOrigin, l.yOrigin - d.yOrigin, n, -1, "transformOrigin"), n.b = d.yOrigin, n.e = n.xs0 = l.yOrigin, p = Te ? null : "0px 0px"), (p || Se && f && d.zOrigin) && (xe ? (c = !0, i = Pe, p = (p || Q(t, i, r, !1, "50% 50%")) + "", n = new ce(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, Se ? (u = d.zOrigin, p = p.split(" "), d.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px", n = new ce(d, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = p) : se(p + "", d)), c && (s._transformType = d.svg && Te || !f && 3 !== this._transformType ? 2 : 3), n
                    },
                    prefix: !0
                }), ve("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), ve("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, h, l, _, u, p, f, c, m, d, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = W(b[h])), u = _ = Q(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", f, v), w = $(t, "borderTop", f, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (w / d) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + c + g, l = parseFloat(_) + c + g)), a = me(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: ue("0px 0px 0px 0px", !1, !0)
                }), ve("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l, _, u, p, f = "background-position",
                            c = r || Z(t, null),
                            d = this.format((c ? m ? c.getPropertyValue(f + "-x") + " " + c.getPropertyValue(f + "-y") : c.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = Q(t, "backgroundImage").replace(R, ""), p && "none" !== p)) {
                            for (o = d.split(" "), h = g.split(" "), X.setAttribute("src", p), l = 2; --l > -1;) d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: se
                }), ve("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: se
                }), ve("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), ve("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), ve("transformStyle", {
                    prefix: !0
                }), ve("backfaceVisibility", {
                    prefix: !0
                }), ve("userSelect", {
                    prefix: !0
                }), ve("margin", {
                    parser: pe("marginTop,marginRight,marginBottom,marginLeft")
                }), ve("padding", {
                    parser: pe("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), ve("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l;
                        return 9 > m ? (h = t.currentStyle, l = 8 > m ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), ve("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), ve("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), ve("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(_e) || ["#000"])[0]
                    }
                }), ve("borderWidth", {
                    parser: pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), ve("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new ce(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                    }
                });
                var Fe = function(t) {
                    var e, i = this.t,
                        s = i.filter || Q(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(w, "opacity=" + r))
                };
                ve("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), j ? n = new ce(h, "opacity", o, e - o, n) : (n = new ce(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Fe), l && (n = new ce(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
                    }
                });
                var Ee = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Ne = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ee(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                ve("className", {
                    parser: function(t, e, s, n, a, o, h) {
                        var l, _, u, p, f, c = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (a = n._classNamePT = new ce(t, s, 0, 0, a, 2), a.setRatio = Ne, a.pr = -11, i = !0, a.b = c, _ = K(t, r), u = t._gsClassPT) {
                            for (p = {}, f = u.data; f;) p[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), l = J(t, _, K(t), h, p), t.setAttribute("class", c), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)
                    }
                });
                var Le = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, r, n, a = this.t.style,
                            o = h.transform.parse;
                        if ("all" === this.e) a.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], h[i] && (h[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Pe : h[i].p), Ee(a, i);
                        r && (Ee(a, xe), n = this.t._gsTransform, n && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                };
                for (ve("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new ce(t, s, 0, 0, n, 2), n.setRatio = Le, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), de = l.length; de--;) ye(l[de]);
                l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
                    var l, f, m, d, g, v, y, T, w, b = t.style;
                    if (u && "" === b.zIndex && (l = Q(t, "zIndex", r), ("auto" === l || "" === l) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (d = b.cssText, l = K(t, r), b.cssText = d + ";" + e, l = J(t, l, K(t)).difs, !j && x.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, b.cssText = d), this._firstPT = f = e.className ? h.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (w = 3 === this._transformType, xe ? p && (u = !0, "" === b.zIndex && (y = Q(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), c && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : b.zoom = 1, m = f; m && m._next;) m = m._next;
                        T = new ce(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, m), T.setRatio = xe ? Ie : ze, T.data = this._transform || Me(t, r, !0), T.tween = o, T.pr = -1, n.pop()
                    }
                    if (i) {
                        for (; f;) {
                            for (v = f._next, m = d; m && m.pr > f.pr;) m = m._next;
                            (f._prev = m ? m._prev : g) ? f._prev._next = f: d = f, (f._next = m) ? m._prev = f : g = f, f = v
                        }
                        this._firstPT = d
                    }
                    return !0
                }, l.parse = function(t, e, i, n) {
                    var a, o, l, u, p, f, c, m, d, g, v = t.style;
                    for (a in e) f = e[a], o = h[a], o ? i = o.parse(t, f, a, this, i, n, e) : (p = Q(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(f) ? (d || (f = le(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = me(v, a, p, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (l = parseFloat(p), c = l || 0 === l ? p.substr((l + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (l = ie(t, a, r), c = "px") : "left" === a || "top" === a ? (l = H(t, a, r), c = "px") : (l = "opacity" !== a ? 0 : 1, c = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(T, "")) : (u = parseFloat(f), m = d ? f.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : c), f = u || 0 === u ? (g ? u + l : u) + m : e[a], c !== m && "" !== m && (u || 0 === u) && l && (l = $(t, a, l, c), "%" === m ? (l /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = l + "%")) : "em" === m ? l /= $(t, a, 1, "em") : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + l + m)), g && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new ce(v, a, u || l || 0, 0, i, -1, a, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : q("invalid " + a + " tween value: " + e[a]) : (i = new ce(v, a, l, u - l, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, p, f), i.xs0 = m)) : i = me(v, a, p, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, l.setRatio = function(t) {
                    var e, i, s, r = this._firstPT,
                        n = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
                }, l._enableTransforms = function(t) {
                    this._transform = this._transform || Me(this._target, r, !0), this._transformType = this._transform.svg && Te || !t && 3 !== this._transformType ? 2 : 3
                };
                var Xe = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                l._addLazySet = function(t, e, i) {
                    var s = this._firstPT = new ce(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = Xe, s.data = this
                }, l._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, l._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var Ue = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Ue(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ue(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o, h = e.to(t, i, s),
                        l = [h],
                        _ = [],
                        u = [],
                        p = [],
                        f = e._internals.reservedProps;
                    for (t = h._targets || h.target, Ue(t, _, p), h.render(i, !0, !0), Ue(t, u), h.render(0, !0, !0), h._enabled(!0), r = p.length; --r > -1;)
                        if (n = J(p[r], _[r], u[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) f[a] && (n[a] = s[a]);
                            o = {};
                            for (a in n) o[a] = _[r][a];
                            l.push(e.fromTo(p[r], i, o, n))
                        }
                    return l
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
                    for (n = r.length; --n > -1;)
                        for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
                    return !1
                }, e._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.3.3",
                init: function(t, e) {
                    var i, s, r;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {}, this._start = {}, this._end = {};
                    for (i in e) this._start[i] = this._proxy[i] = s = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(s), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
                    return !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, s = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --s > -1;) e = i[s], this._target.setAttribute(e, r[e] + "")
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function(e, i) {
                        var s = h("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return _(r, t), r
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var s = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    c = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = h("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, d.config = e.config = function(t) {
                    return new e(t)
                }, i = h("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, c = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = c ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), c ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                        x: i,
                        y: s
                    };
                    for (l.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new p(1, 1, null), f = u; --f > -1;) a = l[f], o = new p(a.x, a.y, o);
                    this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), l("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), l("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", l("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), l("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), l("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = h("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), s("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
                }, .45)), u("Expo", l("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), l("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), l("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", l("SineOut", function(t) {
                    return Math.sin(t * o)
                }), l("SineIn", function(t) {
                    return -Math.cos(t * o) + 1
                }), l("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), c
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, r, n, a, o, h = function(t) {
                    var e, s = t.split("."),
                        r = i;
                    for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
                    return r
                },
                l = h("com.greensock"),
                _ = 1e-10,
                u = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                p = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                c = {},
                m = function(s, r, n, a) {
                    this.sc = c[s] ? c[s].sc : [], c[s] = this, this.gsClass = null, this.func = n;
                    var o = [];
                    this.check = function(l) {
                        for (var _, u, p, f, d = r.length, g = d; --d > -1;)(_ = c[r[d]] || new m(r[d], [])).gsClass ? (o[d] = _.gsClass, g--) : l && _.sc.push(this);
                        if (0 === g && n)
                            for (u = ("com.greensock." + s).split("."), p = u.pop(), f = h(u.join("."))[p] = this.gsClass = n.apply(n, o), a && (i[p] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                    return f
                                }) : s === e && "undefined" != typeof module && module.exports && (module.exports = f)), d = 0; this.sc.length > d; d++) this.sc[d].check()
                    }, this.check(!0)
                },
                d = t._gsDefine = function(t, e, i, s) {
                    return new m(t, e, i, s)
                },
                g = l._class = function(t, e, i) {
                    return e = e || function() {}, d(t, [], function() {
                        return e
                    }, i), e
                };
            d.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                T = g("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v
                }, !0),
                w = T.map = {},
                x = T.register = function(t, e, i, s) {
                    for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (n = h[_], r = s ? g("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for (n = T.prototype, n._calcEnd = !1, n.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r, x(new T(null, null, 1, r), n, "easeOut", !0), x(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), x(new T(null, null, 3, r), n, "easeInOut");
            w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
            var b = g("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            n = b.prototype, n.addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var n, h, l = this._listeners[t],
                    _ = 0;
                for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) n = l[h], n.c === e && n.s === i ? l.splice(h, 1) : 0 === _ && r > n.pr && (_ = h + 1);
                l.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                }), this !== a || o || a.wake()
            }, n.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return s.splice(i, 1), void 0
            }, n.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var P = t.requestAnimationFrame,
                S = t.cancelAnimationFrame,
                k = Date.now || function() {
                    return (new Date).getTime()
                },
                R = k();
            for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"], S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) {
                var i, s, r, n, h, l = this,
                    u = k(),
                    f = e !== !1 && P,
                    c = 500,
                    m = 33,
                    d = "tick",
                    g = function(t) {
                        var e, a, o = k() - R;
                        o > c && (u += o - m), R += o, l.time = (R - u) / 1e3, e = l.time - h, (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && l.dispatchEvent(d)
                    };
                b.call(l), l.time = l.frame = 0, l.tick = function() {
                    g(!0)
                }, l.lagSmoothing = function(t, e) {
                    c = t || 1 / _, m = Math.min(e, c, 0)
                }, l.sleep = function() {
                    null != r && (f && S ? S(r) : clearTimeout(r), s = p, r = null, l === a && (o = !1))
                }, l.wake = function() {
                    null !== r ? l.sleep() : l.frame > 10 && (R = k() - c + 5), s = 0 === i ? p : f && P ? P : function(t) {
                        return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
                    }, l === a && (o = !0), g(2)
                }, l.fps = function(t) {
                    return arguments.length ? (i = t, n = 1 / (i || 60), h = this.time + n, l.wake(), void 0) : i
                }, l.useRAF = function(t) {
                    return arguments.length ? (l.sleep(), f = t, l.fps(i), void 0) : f
                }, l.fps(t), setTimeout(function() {
                    f && 5 > l.frame && l.useRAF(!1)
                }, 1500)
            }), n = l.Ticker.prototype = new l.events.EventDispatcher, n.constructor = l.Ticker;
            var A = g("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                    o || a.wake();
                    var i = this.vars.useFrames ? j : B;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = A.ticker = new l.Ticker, n = A.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var O = function() {
                o && k() - R > 2e3 && a.wake(), setTimeout(O, 2e3)
            };
            O(), n.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, n.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, n.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, n.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, n.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, n.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, n.render = function() {}, n.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, n.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, n._enabled = function(t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, n._kill = function() {
                return this._enabled(!1, !1)
            }, n.kill = function(t, e) {
                return this._kill(t, e), this
            }, n._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, n._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, n.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, n.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, n.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, n.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, n.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, n.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && V())
                }
                return this
            }, n.progress = n.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, n.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, n.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, n.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, n.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, n.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
            };
            var C = g("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            n = C.prototype = new A, n.constructor = C, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, n._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, n.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, n.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var D = g("TweenLite", function(e, i, s) {
                    if (A.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        h = this.vars.overwrite;
                    if (this._overwrite = h = null == h ? Y[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : Y[h], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = G(n, this, !1), 1 === h && this._siblings[r].length > 1 && Z(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = G(e, this, !1), 1 === h && this._siblings.length > 1 && Z(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
                }, !0),
                M = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                z = function(t, e) {
                    var i, s = {};
                    for (i in t) U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            n = D.prototype = new A, n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.16.1", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var I = [],
                F = {},
                E = D._internals = {
                    isArray: f,
                    isSelector: M,
                    lazyTweens: I
                },
                N = D._plugins = {},
                L = E.tweenLookup = {},
                X = 0,
                U = E.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1
                },
                Y = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                j = A._rootFramesTimeline = new C,
                B = A._rootTimeline = new C,
                q = 30,
                V = E.lazyRender = function() {
                    var t, e = I.length;
                    for (F = {}; --e > -1;) t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    I.length = 0
                };
            B._startTime = a.time, j._startTime = a.frame, B._active = j._active = !0, setTimeout(V, 1), A._updateRoot = D.render = function() {
                var t, e, i;
                if (I.length && V(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), j.render((a.frame - j._startTime) * j._timeScale, !1, !1), I.length && V(), a.frame >= q) {
                    q = a.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in L) {
                        for (e = L[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete L[i]
                    }
                    if (i = B._first, (!i || i._paused) && D.autoSleep && !j._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", A._updateRoot);
            var G = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (L[n || (t._gsTweenID = n = "t" + X++)] || (L[n] = {
                            target: t,
                            tweens: []
                        }), e && (s = L[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return L[n].tweens
                },
                W = function(t, e, i, s) {
                    var r, n, a = t.vars.onOverwrite;
                    return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
                },
                Z = function(t, e, i, s, r) {
                    var n, a, o, h;
                    if (1 === s || s >= 4) {
                        for (h = r.length, n = 0; h > n; n++)
                            if ((o = r[n]) !== e) o._gc || W(o, e) && o._enabled(!1, !1) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var l, u = e._startTime + _,
                        p = [],
                        f = 0,
                        c = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || Q(e, 0, c), 0 === Q(o, l, c) && (p[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((c || !o._initted) && 2e-10 >= u - o._startTime || (p[f++] = o)));
                    for (n = f; --n > -1;)
                        if (o = p[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !W(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                Q = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
                };
            n._init = function() {
                var t, e, i, s, r, n = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    h = !!n.immediateRender,
                    l = n.ease;
                if (n.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (s in n.startAt) r[s] = n.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (n.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (h = !1), i = {};
                        for (s in n) U[s] && "autoCSS" !== s || (i[s] = n[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && n.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = l = l ? l instanceof T ? l : "function" == typeof l ? new T(l, n.easeParams) : w[l] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, n._initProps = function(e, i, s, r) {
                var n, a, o, h, l, _;
                if (null == e) return !1;
                F[e._gsTweenID] && V(), this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && z(this.vars, e);
                for (n in this.vars) {
                    if (_ = this.vars[n], U[n]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (N[n] && (h = new N[n])._onInitTween(e, this.vars[n], this)) {
                        for (this._firstPT = l = {
                                _next: this._firstPT,
                                t: h,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: n,
                                pg: !0,
                                pr: h._priority
                            }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[n] = l = {
                        _next: this._firstPT,
                        t: e,
                        p: n,
                        f: "function" == typeof e[n],
                        n: n,
                        pg: !1,
                        pr: 0
                    }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                    l && l._next && (l._next._prev = l)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && Z(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), o)
            }, n.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    h = this._duration,
                    l = this._rawPrevTime;
                if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === _ && "isPause" !== this.data) && l !== t && (i = !0, l > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : _)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / h,
                        p = this._easeType,
                        f = this._easePower;
                    (1 === p || 3 === p && u >= .5) && (u = 1 - u), 3 === p && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / h ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / h);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, I.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
                }
            }, n._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var s, r, n, a, o, h, l, _, u;
                if ((f(e) || M(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s]) && (h = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (l = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (n in l) o[n] && (u || (u = []), u.push(n));
                            if (!W(this, i, e, u)) return !1
                        }
                        for (n in l)(a = o[n]) && (a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return h
            }, n.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
            }, n._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = G(s[i], this, !0);
                    else this._siblings = G(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
            }, D.delayedCall = function(t, e, i, s, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: s,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, s, r, n;
                if ((f(t) || M(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                } else
                    for (s = G(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
            };
            var $ = g("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = $.prototype
            }, !0);
            if (n = $.prototype, $.version = "1.10.1", $.API = 2, n._firstPT = null, n._addTween = function(t, e, i, s, r, n) {
                    var a, o;
                    return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: "function" == typeof t[e],
                        n: r || e,
                        r: n
                    }, o._next && (o._next._prev = o), o) : void 0
                }, n.setRatio = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, n._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, n._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, $.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === $.API && (N[(new t[e])._propName] = t[e]);
                    return !0
                }, d.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            $.call(this, i, s), this._overwriteProps = r || []
                        }, t.global === !0),
                        o = a.prototype = new $(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, $.activate([a]), a
                }, s = t._gsQueue) {
                for (r = 0; s.length > r; r++) s[r]();
                for (n in c) c[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");


/*
 * "GreenSock | TweenMax"(http://greensock.com/tweenmax) with jQuery.
 * by @psyonline (http://www.psyonline.kr/, majorartist@gmail.com)
 * https://github.com/psyonline/jquery-with-gsap
 * License - http://creativecommons.org/licenses/by-sa/2.0/kr/
 */
(function(h) {
    function g(d, b) {
        return function(c) {
            b.call(d, c)
        }
    }
    var l = h.isPlainObject,
        m = CSSPlugin._internals.getTransform,
        k = ["{self}"];
    h.fn.__css = function(d, b) {
        var c;
        if (l(d)) TweenMax.set(this, d);
        else if (void 0 !== b) c = {}, c[d] = b, TweenMax.set(this, c);
        else {
            if (-1 !== "scale,scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,rotationZ,perspective,xPercent,yPercent,zOrigin,".indexOf(d + ",")) {
                var e = this[0];
                c = d;
                e = e._gsTransform || m(e);
                "rotationZ" == c ? c = "rotation" : "scale" == c && (c = "scaleX");
                return e[c]
            }
            return this.css(d)
        }
        return this
    };
    h.fn.__animate = function(d, b, c, e) {
        var a = {},
            f;
        for (f in d) a[f] = d[f];
        if (l(b))
            for (f in b) a[f] = b[f];
        else "function" == typeof e ? (a.duration = b, a.easing = c, a.complete = e) : "function" == typeof c ? ("number" == typeof b ? a.duration = b : a.easing = b, a.complete = c) : "number" == typeof b ? a.duration = b : "string" == typeof b ? a.easing = b : "function" == typeof b && (a.complete = b);
        a.duration = (void 0 !== a.duration ? a.duration : 400) / 1E3;
        void 0 !== a.delay && (a.delay /= 1E3);
        void 0 !== a.repeatDelay && (a.repeatDelay /= 1E3);
        a.start && (a.onStart = g(this, a.start),
            a.onStartParams = k, delete a.start);
        if (a.step || a.progress) a.onUpdate = g(this, a.step || a.progress), a.onUpdateParams = k, delete a.step, delete a.progress;
        a.repeatStep && (a.onRepeat = g(this, a.repeatStep), a.onRepeatParams = k, delete a.repeatStep);
        a.complete && (a.onComplete = g(this, a.complete), a.onCompleteParams = k, delete a.complete);
        a.easing && (a.ease = a.easing, delete a.easing);
        delete a.queue;
        d = a.duration;
        delete a.duration;
        this.data("TweenMax", TweenMax.to(this, d, a));
        return this
    };
    h.fn.__stop = function(d, b) {
        var c = this.data("TweenMax");
        c && c.kill(d, b);
        return this
    };
    (function() {
        function d(a) {
            return function(b) {
                return a.getRatio(b)
            }
        }
        var b, c, e, a, f, g;
        if (h.easing && window.GreenSockGlobals && window.GreenSockGlobals.Ease && window.GreenSockGlobals.Ease.map)
            for (b = "Quad Cubic Quart Quint Sine Expo Circ Elastic Back Bounce".split(" "), c = ["In", "Out", "InOut"], e = window.GreenSockGlobals.Ease.map, f = 0; f < b.length; f++)
                for (g = 0; g < c.length; g++) a = "ease" + c[g] + b[f], e[a] && !h.easing[a] && (h.easing[a] = d(e[a]))
    })()
})(window.jQuery);


/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
(function(f, a, e) {
    var h = f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || f.oRequestAnimationFrame || f.msRequestAnimationFrame || function(i) {
        f.setTimeout(i, 1000 / 60)
    };
    var c = (function() {
        var m = {};
        var n = a.createElement("div").style;
        var k = (function() {
            var r = ["t", "webkitT", "MozT", "msT", "OT"],
                p, q = 0,
                o = r.length;
            for (; q < o; q++) {
                p = r[q] + "ransform";
                if (p in n) {
                    return r[q].substr(0, r[q].length - 1)
                }
            }
            return false
        })();

        function l(o) {
            if (k === false) {
                return false
            }
            if (k === "") {
                return o
            }
            return k + o.charAt(0).toUpperCase() + o.substr(1)
        }
        m.getTime = Date.now || function i() {
            return new Date().getTime()
        };
        m.extend = function(q, p) {
            for (var o in p) {
                q[o] = p[o]
            }
        };
        m.addEvent = function(r, q, p, o) {
            r.addEventListener(q, p, !!o)
        };
        m.removeEvent = function(r, q, p, o) {
            r.removeEventListener(q, p, !!o)
        };
        m.prefixPointerEvent = function(o) {
            return f.MSPointerEvent ? "MSPointer" + o.charAt(9).toUpperCase() + o.substr(10) : o
        };
        m.momentum = function(u, q, r, o, v, w) {
            var p = u - q,
                s = e.abs(p) / r,
                x, t;
            w = w === undefined ? 0.0006 : w;
            x = u + (s * s) / (2 * w) * (p < 0 ? -1 : 1);
            t = s / w;
            if (x < o) {
                x = v ? o - (v / 2.5 * (s / 8)) : o;
                p = e.abs(x - u);
                t = p / s
            } else {
                if (x > 0) {
                    x = v ? v / 2.5 * (s / 8) : 0;
                    p = e.abs(u) + x;
                    t = p / s
                }
            }
            return {
                destination: e.round(x),
                duration: t
            }
        };
        var j = l("transform");
        m.extend(m, {
            hasTransform: j !== false,
            hasPerspective: l("perspective") in n,
            hasTouch: "ontouchstart" in f,
            hasPointer: f.PointerEvent || f.MSPointerEvent,
            hasTransition: l("transition") in n
        });
        m.isBadAndroid = /Android /.test(f.navigator.appVersion) && !(/Chrome\/\d/.test(f.navigator.appVersion));
        m.extend(m.style = {}, {
            transform: j,
            transitionTimingFunction: l("transitionTimingFunction"),
            transitionDuration: l("transitionDuration"),
            transitionDelay: l("transitionDelay"),
            transformOrigin: l("transformOrigin")
        });
        m.hasClass = function(p, q) {
            var o = new RegExp("(^|\\s)" + q + "(\\s|$)");
            return o.test(p.className)
        };
        m.addClass = function(p, q) {
            if (m.hasClass(p, q)) {
                return
            }
            var o = p.className.split(" ");
            o.push(q);
            p.className = o.join(" ")
        };
        m.removeClass = function(p, q) {
            if (!m.hasClass(p, q)) {
                return
            }
            var o = new RegExp("(^|\\s)" + q + "(\\s|$)", "g");
            p.className = p.className.replace(o, " ")
        };
        m.offset = function(o) {
            var q = -o.offsetLeft,
                p = -o.offsetTop;
            while (o = o.offsetParent) {
                q -= o.offsetLeft;
                p -= o.offsetTop
            }
            return {
                left: q,
                top: p
            }
        };
        m.preventDefaultException = function(q, p) {
            for (var o in p) {
                if (p[o].test(q[o])) {
                    return true
                }
            }
            return false
        };
        m.extend(m.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        });
        m.extend(m.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(o) {
                    return o * (2 - o)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function(o) {
                    return e.sqrt(1 - (--o * o))
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function(p) {
                    var o = 4;
                    return (p = p - 1) * p * ((o + 1) * p + o) + 1
                }
            },
            bounce: {
                style: "",
                fn: function(o) {
                    if ((o /= 1) < (1 / 2.75)) {
                        return 7.5625 * o * o
                    } else {
                        if (o < (2 / 2.75)) {
                            return 7.5625 * (o -= (1.5 / 2.75)) * o + 0.75
                        } else {
                            if (o < (2.5 / 2.75)) {
                                return 7.5625 * (o -= (2.25 / 2.75)) * o + 0.9375
                            } else {
                                return 7.5625 * (o -= (2.625 / 2.75)) * o + 0.984375
                            }
                        }
                    }
                }
            },
            elastic: {
                style: "",
                fn: function(o) {
                    var p = 0.22,
                        q = 0.4;
                    if (o === 0) {
                        return 0
                    }
                    if (o == 1) {
                        return 1
                    }
                    return (q * e.pow(2, -10 * o) * e.sin((o - p / 4) * (2 * e.PI) / p) + 1)
                }
            }
        });
        m.tap = function(q, o) {
            var p = a.createEvent("Event");
            p.initEvent(o, true, true);
            p.pageX = q.pageX;
            p.pageY = q.pageY;
            q.target.dispatchEvent(p)
        };
        m.click = function(q) {
            var p = q.target,
                o;
            if (!(/(SELECT|INPUT|TEXTAREA)/i).test(p.tagName)) {
                o = a.createEvent("MouseEvents");
                o.initMouseEvent("click", true, true, q.view, 1, p.screenX, p.screenY, p.clientX, p.clientY, q.ctrlKey, q.altKey, q.shiftKey, q.metaKey, 0, null);
                o._constructed = true;
                p.dispatchEvent(o)
            }
        };
        return m
    })();

    function g(l, j) {
        this.wrapper = typeof l == "string" ? a.querySelector(l) : l;
        this.scroller = this.wrapper.children[0];
        this.scrollerStyle = this.scroller.style;
        this.options = {
            resizeScrollbars: true,
            mouseWheelSpeed: 20,
            snapThreshold: 0.334,
            startX: 0,
            startY: 0,
            scrollY: true,
            directionLockThreshold: 5,
            momentum: true,
            bounce: true,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: true,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: true,
            useTransition: true,
            useTransform: true
        };
        for (var k in j) {
            this.options[k] = j[k]
        }
        this.translateZ = this.options.HWCompositing && c.hasPerspective ? " translateZ(0)" : "";
        this.options.useTransition = c.hasTransition && this.options.useTransition;
        this.options.useTransform = c.hasTransform && this.options.useTransform;
        this.options.eventPassthrough = this.options.eventPassthrough === true ? "vertical" : this.options.eventPassthrough;
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
        this.options.scrollY = this.options.eventPassthrough == "vertical" ? false : this.options.scrollY;
        this.options.scrollX = this.options.eventPassthrough == "horizontal" ? false : this.options.scrollX;
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
        this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? c.ease[this.options.bounceEasing] || c.ease.circular : this.options.bounceEasing;
        this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
        if (this.options.tap === true) {
            this.options.tap = "tap"
        }
        if (this.options.shrinkScrollbars == "scale") {
            this.options.useTransition = false
        }
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
        this.x = 0;
        this.y = 0;
        this.directionX = 0;
        this.directionY = 0;
        this._events = {};
        this._init();
        this.refresh();
        this.scrollTo(this.options.startX, this.options.startY);
        this.enable()
    }
    g.prototype = {
        version: "5.1.3",
        _init: function() {
            this._initEvents();
            if (this.options.scrollbars || this.options.indicators) {
                this._initIndicators()
            }
            if (this.options.mouseWheel) {
                this._initWheel()
            }
            if (this.options.snap) {
                this._initSnap()
            }
            if (this.options.keyBindings) {
                this._initKeys()
            }
        },
        destroy: function() {
            this._initEvents(true);
            this._execEvent("destroy")
        },
        _transitionEnd: function(i) {
            if (i.target != this.scroller || !this.isInTransition) {
                return
            }
            this._transitionTime();
            if (!this.resetPosition(this.options.bounceTime)) {
                this.isInTransition = false;
                this._execEvent("scrollEnd")
            }
        },
        _start: function(j) {
            if (c.eventType[j.type] != 1) {
                if (j.button !== 0) {
                    return
                }
            }
            if (!this.enabled || (this.initiated && c.eventType[j.type] !== this.initiated)) {
                return
            }
            if (this.options.preventDefault && !c.isBadAndroid && !c.preventDefaultException(j.target, this.options.preventDefaultException)) {
                j.preventDefault()
            }
            var i = j.touches ? j.touches[0] : j,
                k;
            this.initiated = c.eventType[j.type];
            this.moved = false;
            this.distX = 0;
            this.distY = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.directionLocked = 0;
            this._transitionTime();
            this.startTime = c.getTime();
            if (this.options.useTransition && this.isInTransition) {
                this.isInTransition = false;
                k = this.getComputedPosition();
                this._translate(e.round(k.x), e.round(k.y));
                this._execEvent("scrollEnd")
            } else {
                if (!this.options.useTransition && this.isAnimating) {
                    this.isAnimating = false;
                    this._execEvent("scrollEnd")
                }
            }
            this.startX = this.x;
            this.startY = this.y;
            this.absStartX = this.x;
            this.absStartY = this.y;
            this.pointX = i.pageX;
            this.pointY = i.pageY;
            this._execEvent("beforeScrollStart")
        },
        _move: function(n) {
            if (!this.enabled || c.eventType[n.type] !== this.initiated) {
                return
            }
            if (this.options.preventDefault) {
                n.preventDefault()
            }
            var p = n.touches ? n.touches[0] : n,
                k = p.pageX - this.pointX,
                j = p.pageY - this.pointY,
                o = c.getTime(),
                i, q, m, l;
            this.pointX = p.pageX;
            this.pointY = p.pageY;
            this.distX += k;
            this.distY += j;
            m = e.abs(this.distX);
            l = e.abs(this.distY);
            if (o - this.endTime > 300 && (m < 10 && l < 10)) {
                return
            }
            if (!this.directionLocked && !this.options.freeScroll) {
                if (m > l + this.options.directionLockThreshold) {
                    this.directionLocked = "h"
                } else {
                    if (l >= m + this.options.directionLockThreshold) {
                        this.directionLocked = "v"
                    } else {
                        this.directionLocked = "n"
                    }
                }
            }
            if (this.directionLocked == "h") {
                if (this.options.eventPassthrough == "vertical") {
                    n.preventDefault()
                } else {
                    if (this.options.eventPassthrough == "horizontal") {
                        this.initiated = false;
                        return
                    }
                }
                j = 0
            } else {
                if (this.directionLocked == "v") {
                    if (this.options.eventPassthrough == "horizontal") {
                        n.preventDefault()
                    } else {
                        if (this.options.eventPassthrough == "vertical") {
                            this.initiated = false;
                            return
                        }
                    }
                    k = 0
                }
            }
            k = this.hasHorizontalScroll ? k : 0;
            j = this.hasVerticalScroll ? j : 0;
            i = this.x + k;
            q = this.y + j;
            if (i > 0 || i < this.maxScrollX) {
                i = this.options.bounce ? this.x + k / 3 : i > 0 ? 0 : this.maxScrollX
            }
            if (q > 0 || q < this.maxScrollY) {
                q = this.options.bounce ? this.y + j / 3 : q > 0 ? 0 : this.maxScrollY
            }
            this.directionX = k > 0 ? -1 : k < 0 ? 1 : 0;
            this.directionY = j > 0 ? -1 : j < 0 ? 1 : 0;
            if (!this.moved) {
                this._execEvent("scrollStart")
            }
            this.moved = true;
            this._translate(i, q);
            if (o - this.startTime > 300) {
                this.startTime = o;
                this.startX = this.x;
                this.startY = this.y
            }
        },
        _end: function(o) {
            if (!this.enabled || c.eventType[o.type] !== this.initiated) {
                return
            }
            if (this.options.preventDefault && !c.preventDefaultException(o.target, this.options.preventDefaultException)) {
                o.preventDefault()
            }
            var q = o.changedTouches ? o.changedTouches[0] : o,
                k, j, n = c.getTime() - this.startTime,
                i = e.round(this.x),
                t = e.round(this.y),
                s = e.abs(i - this.startX),
                r = e.abs(t - this.startY),
                l = 0,
                p = "";
            this.isInTransition = 0;
            this.initiated = 0;
            this.endTime = c.getTime();
            if (this.resetPosition(this.options.bounceTime)) {
                return
            }
            this.scrollTo(i, t);
            if (!this.moved) {
                if (this.options.tap) {
                    c.tap(o, this.options.tap)
                }
                if (this.options.click) {
                    c.click(o)
                }
                this._execEvent("scrollCancel");
                return
            }
            if (this._events.flick && n < 200 && s < 100 && r < 100) {
                this._execEvent("flick");
                return
            }
            if (this.options.momentum && n < 300) {
                k = this.hasHorizontalScroll ? c.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                    destination: i,
                    duration: 0
                };
                j = this.hasVerticalScroll ? c.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                    destination: t,
                    duration: 0
                };
                i = k.destination;
                t = j.destination;
                l = e.max(k.duration, j.duration);
                this.isInTransition = 1
            }
            if (this.options.snap) {
                var m = this._nearestSnap(i, t);
                this.currentPage = m;
                l = this.options.snapSpeed || e.max(e.max(e.min(e.abs(i - m.x), 1000), e.min(e.abs(t - m.y), 1000)), 300);
                i = m.x;
                t = m.y;
                this.directionX = 0;
                this.directionY = 0;
                p = this.options.bounceEasing
            }
            if (i != this.x || t != this.y) {
                if (i > 0 || i < this.maxScrollX || t > 0 || t < this.maxScrollY) {
                    p = c.ease.quadratic
                }
                this.scrollTo(i, t, l, p);
                return
            }
            this._execEvent("scrollEnd")
        },
        _resize: function() {
            var i = this;
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function() {
                i.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(j) {
            var i = this.x,
                k = this.y;
            j = j || 0;
            if (!this.hasHorizontalScroll || this.x > 0) {
                i = 0
            } else {
                if (this.x < this.maxScrollX) {
                    i = this.maxScrollX
                }
            }
            if (!this.hasVerticalScroll || this.y > 0) {
                k = 0
            } else {
                if (this.y < this.maxScrollY) {
                    k = this.maxScrollY
                }
            }
            if (i == this.x && k == this.y) {
                return false
            }
            this.scrollTo(i, k, j, this.options.bounceEasing);
            return true
        },
        disable: function() {
            this.enabled = false
        },
        enable: function() {
            this.enabled = true
        },
        refresh: function() {
            var i = this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth;
            this.wrapperHeight = this.wrapper.clientHeight;
            this.scrollerWidth = this.scroller.offsetWidth;
            this.scrollerHeight = this.scroller.offsetHeight;
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
            if (!this.hasHorizontalScroll) {
                this.maxScrollX = 0;
                this.scrollerWidth = this.wrapperWidth
            }
            if (!this.hasVerticalScroll) {
                this.maxScrollY = 0;
                this.scrollerHeight = this.wrapperHeight
            }
            this.endTime = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.wrapperOffset = c.offset(this.wrapper);
            this._execEvent("refresh");
            this.resetPosition()
        },
        on: function(j, i) {
            if (!this._events[j]) {
                this._events[j] = []
            }
            this._events[j].push(i)
        },
        off: function(k, j) {
            if (!this._events[k]) {
                return
            }
            var i = this._events[k].indexOf(j);
            if (i > -1) {
                this._events[k].splice(i, 1)
            }
        },
        _execEvent: function(m) {
            if (!this._events[m]) {
                return
            }
            var k = 0,
                j = this._events[m].length;
            if (!j) {
                return
            }
            for (; k < j; k++) {
                this._events[m][k].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(i, l, j, k) {
            i = this.x + i;
            l = this.y + l;
            j = j || 0;
            this.scrollTo(i, l, j, k)
        },
        scrollTo: function(i, l, j, k) {
            k = k || c.ease.circular;
            this.isInTransition = this.options.useTransition && j > 0;
            if (!j || (this.options.useTransition && k.style)) {
                this._transitionTimingFunction(k.style);
                this._transitionTime(j);
                this._translate(i, l)
            } else {
                this._animate(i, l, j, k.fn)
            }
        },
        scrollToElement: function(j, k, i, n, m) {
            j = j.nodeType ? j : this.scroller.querySelector(j);
            if (!j) {
                return
            }
            var l = c.offset(j);
            l.left -= this.wrapperOffset.left;
            l.top -= this.wrapperOffset.top;
            if (i === true) {
                i = e.round(j.offsetWidth / 2 - this.wrapper.offsetWidth / 2)
            }
            if (n === true) {
                n = e.round(j.offsetHeight / 2 - this.wrapper.offsetHeight / 2)
            }
            l.left -= i || 0;
            l.top -= n || 0;
            l.left = l.left > 0 ? 0 : l.left < this.maxScrollX ? this.maxScrollX : l.left;
            l.top = l.top > 0 ? 0 : l.top < this.maxScrollY ? this.maxScrollY : l.top;
            k = k === undefined || k === null || k === "auto" ? e.max(e.abs(this.x - l.left), e.abs(this.y - l.top)) : k;
            this.scrollTo(l.left, l.top, k, m)
        },
        _transitionTime: function(k) {
            k = k || 0;
            this.scrollerStyle[c.style.transitionDuration] = k + "ms";
            if (!k && c.isBadAndroid) {
                this.scrollerStyle[c.style.transitionDuration] = "0.001s"
            }
            if (this.indicators) {
                for (var j = this.indicators.length; j--;) {
                    this.indicators[j].transitionTime(k)
                }
            }
        },
        _transitionTimingFunction: function(k) {
            this.scrollerStyle[c.style.transitionTimingFunction] = k;
            if (this.indicators) {
                for (var j = this.indicators.length; j--;) {
                    this.indicators[j].transitionTimingFunction(k)
                }
            }
        },
        _translate: function(j, l) {
            if (this.options.useTransform) {
                this.scrollerStyle[c.style.transform] = "translate(" + j + "px," + l + "px)" + this.translateZ
            } else {
                j = e.round(j);
                l = e.round(l);
                this.scrollerStyle.left = j + "px";
                this.scrollerStyle.top = l + "px"
            }
            this.x = j;
            this.y = l;
            if (this.indicators) {
                for (var k = this.indicators.length; k--;) {
                    this.indicators[k].updatePosition()
                }
            }
        },
        _initEvents: function(i) {
            var j = i ? c.removeEvent : c.addEvent,
                k = this.options.bindToWrapper ? this.wrapper : f;
            j(f, "orientationchange", this);
            j(f, "resize", this);
            if (this.options.click) {
                j(this.wrapper, "click", this, true)
            }
            if (!this.options.disableMouse) {
                j(this.wrapper, "mousedown", this);
                j(k, "mousemove", this);
                j(k, "mousecancel", this);
                j(k, "mouseup", this)
            }
            if (c.hasPointer && !this.options.disablePointer) {
                j(this.wrapper, c.prefixPointerEvent("pointerdown"), this);
                j(k, c.prefixPointerEvent("pointermove"), this);
                j(k, c.prefixPointerEvent("pointercancel"), this);
                j(k, c.prefixPointerEvent("pointerup"), this)
            }
            if (c.hasTouch && !this.options.disableTouch) {
                j(this.wrapper, "touchstart", this);
                j(k, "touchmove", this);
                j(k, "touchcancel", this);
                j(k, "touchend", this)
            }
            j(this.scroller, "transitionend", this);
            j(this.scroller, "webkitTransitionEnd", this);
            j(this.scroller, "oTransitionEnd", this);
            j(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var j = f.getComputedStyle(this.scroller, null),
                i, k;
            if (this.options.useTransform) {
                j = j[c.style.transform].split(")")[0].split(", ");
                i = +(j[12] || j[4]);
                k = +(j[13] || j[5])
            } else {
                i = +j.left.replace(/[^-\d.]/g, "");
                k = +j.top.replace(/[^-\d.]/g, "")
            }
            return {
                x: i,
                y: k
            }
        },
        _initIndicators: function() {
            var l = this.options.interactiveScrollbars,
                n = typeof this.options.scrollbars != "string",
                p = [],
                k;
            var o = this;
            this.indicators = [];
            if (this.options.scrollbars) {
                if (this.options.scrollY) {
                    k = {
                        el: d("v", l, this.options.scrollbars),
                        interactive: l,
                        defaultScrollbars: true,
                        customStyle: n,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenX: false
                    };
                    this.wrapper.appendChild(k.el);
                    p.push(k)
                }
                if (this.options.scrollX) {
                    k = {
                        el: d("h", l, this.options.scrollbars),
                        interactive: l,
                        defaultScrollbars: true,
                        customStyle: n,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenY: false
                    };
                    this.wrapper.appendChild(k.el);
                    p.push(k)
                }
            }
            if (this.options.indicators) {
                p = p.concat(this.options.indicators)
            }
            for (var m = p.length; m--;) {
                this.indicators.push(new b(this, p[m]))
            }

            function j(r) {
                for (var q = o.indicators.length; q--;) {
                    r.call(o.indicators[q])
                }
            }
            if (this.options.fadeScrollbars) {
                this.on("scrollEnd", function() {
                    j(function() {
                        this.fade()
                    })
                });
                this.on("scrollCancel", function() {
                    j(function() {
                        this.fade()
                    })
                });
                this.on("scrollStart", function() {
                    j(function() {
                        this.fade(1)
                    })
                });
                this.on("beforeScrollStart", function() {
                    j(function() {
                        this.fade(1, true)
                    })
                })
            }
            this.on("refresh", function() {
                j(function() {
                    this.refresh()
                })
            });
            this.on("destroy", function() {
                j(function() {
                    this.destroy()
                });
                delete this.indicators
            })
        },
        _initWheel: function() {
            c.addEvent(this.wrapper, "wheel", this);
            c.addEvent(this.wrapper, "mousewheel", this);
            c.addEvent(this.wrapper, "DOMMouseScroll", this);
            this.on("destroy", function() {
                c.removeEvent(this.wrapper, "wheel", this);
                c.removeEvent(this.wrapper, "mousewheel", this);
                c.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(m) {
            if (!this.enabled) {
                return
            }
            m.preventDefault();
            m.stopPropagation();
            var k, j, n, l, i = this;
            if (this.wheelTimeout === undefined) {
                i._execEvent("scrollStart")
            }
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = setTimeout(function() {
                i._execEvent("scrollEnd");
                i.wheelTimeout = undefined
            }, 400);
            if ("deltaX" in m) {
                if (m.deltaMode === 1) {
                    k = -m.deltaX * this.options.mouseWheelSpeed;
                    j = -m.deltaY * this.options.mouseWheelSpeed
                } else {
                    k = -m.deltaX;
                    j = -m.deltaY
                }
            } else {
                if ("wheelDeltaX" in m) {
                    k = m.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
                    j = m.wheelDeltaY / 120 * this.options.mouseWheelSpeed
                } else {
                    if ("wheelDelta" in m) {
                        k = j = m.wheelDelta / 120 * this.options.mouseWheelSpeed
                    } else {
                        if ("detail" in m) {
                            k = j = -m.detail / 3 * this.options.mouseWheelSpeed
                        } else {
                            return
                        }
                    }
                }
            }
            k *= this.options.invertWheelDirection;
            j *= this.options.invertWheelDirection;
            if (!this.hasVerticalScroll) {
                k = j;
                j = 0
            }
            if (this.options.snap) {
                n = this.currentPage.pageX;
                l = this.currentPage.pageY;
                if (k > 0) {
                    n--
                } else {
                    if (k < 0) {
                        n++
                    }
                }
                if (j > 0) {
                    l--
                } else {
                    if (j < 0) {
                        l++
                    }
                }
                this.goToPage(n, l);
                return
            }
            n = this.x + e.round(this.hasHorizontalScroll ? k : 0);
            l = this.y + e.round(this.hasVerticalScroll ? j : 0);
            if (n > 0) {
                n = 0
            } else {
                if (n < this.maxScrollX) {
                    n = this.maxScrollX
                }
            }
            if (l > 0) {
                l = 0
            } else {
                if (l < this.maxScrollY) {
                    l = this.maxScrollY
                }
            }
            this.scrollTo(n, l, 0)
        },
        _initSnap: function() {
            this.currentPage = {};
            if (typeof this.options.snap == "string") {
                this.options.snap = this.scroller.querySelectorAll(this.options.snap)
            }
            this.on("refresh", function() {
                var s = 0,
                    q, o = 0,
                    k, r, p, u = 0,
                    t, w = this.options.snapStepX || this.wrapperWidth,
                    v = this.options.snapStepY || this.wrapperHeight,
                    j;
                this.pages = [];
                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
                    return
                }
                if (this.options.snap === true) {
                    r = e.round(w / 2);
                    p = e.round(v / 2);
                    while (u > -this.scrollerWidth) {
                        this.pages[s] = [];
                        q = 0;
                        t = 0;
                        while (t > -this.scrollerHeight) {
                            this.pages[s][q] = {
                                x: e.max(u, this.maxScrollX),
                                y: e.max(t, this.maxScrollY),
                                width: w,
                                height: v,
                                cx: u - r,
                                cy: t - p
                            };
                            t -= v;
                            q++
                        }
                        u -= w;
                        s++
                    }
                } else {
                    j = this.options.snap;
                    q = j.length;
                    k = -1;
                    for (; s < q; s++) {
                        if (s === 0 || j[s].offsetLeft <= j[s - 1].offsetLeft) {
                            o = 0;
                            k++
                        }
                        if (!this.pages[o]) {
                            this.pages[o] = []
                        }
                        u = e.max(-j[s].offsetLeft, this.maxScrollX);
                        t = e.max(-j[s].offsetTop, this.maxScrollY);
                        r = u - e.round(j[s].offsetWidth / 2);
                        p = t - e.round(j[s].offsetHeight / 2);
                        this.pages[o][k] = {
                            x: u,
                            y: t,
                            width: j[s].offsetWidth,
                            height: j[s].offsetHeight,
                            cx: r,
                            cy: p
                        };
                        if (u > this.maxScrollX) {
                            o++
                        }
                    }
                }
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
                if (this.options.snapThreshold % 1 === 0) {
                    this.snapThresholdX = this.options.snapThreshold;
                    this.snapThresholdY = this.options.snapThreshold
                } else {
                    this.snapThresholdX = e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                    this.snapThresholdY = e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)
                }
            });
            this.on("flick", function() {
                var i = this.options.snapSpeed || e.max(e.max(e.min(e.abs(this.x - this.startX), 1000), e.min(e.abs(this.y - this.startY), 1000)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, i)
            })
        },
        _nearestSnap: function(k, p) {
            if (!this.pages.length) {
                return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                }
            }
            var o = 0,
                n = this.pages.length,
                j = 0;
            if (e.abs(k - this.absStartX) < this.snapThresholdX && e.abs(p - this.absStartY) < this.snapThresholdY) {
                return this.currentPage
            }
            if (k > 0) {
                k = 0
            } else {
                if (k < this.maxScrollX) {
                    k = this.maxScrollX
                }
            }
            if (p > 0) {
                p = 0
            } else {
                if (p < this.maxScrollY) {
                    p = this.maxScrollY
                }
            }
            for (; o < n; o++) {
                if (k >= this.pages[o][0].cx) {
                    k = this.pages[o][0].x;
                    break
                }
            }
            n = this.pages[o].length;
            for (; j < n; j++) {
                if (p >= this.pages[0][j].cy) {
                    p = this.pages[0][j].y;
                    break
                }
            }
            if (o == this.currentPage.pageX) {
                o += this.directionX;
                if (o < 0) {
                    o = 0
                } else {
                    if (o >= this.pages.length) {
                        o = this.pages.length - 1
                    }
                }
                k = this.pages[o][0].x
            }
            if (j == this.currentPage.pageY) {
                j += this.directionY;
                if (j < 0) {
                    j = 0
                } else {
                    if (j >= this.pages[0].length) {
                        j = this.pages[0].length - 1
                    }
                }
                p = this.pages[0][j].y
            }
            return {
                x: k,
                y: p,
                pageX: o,
                pageY: j
            }
        },
        goToPage: function(i, n, j, m) {
            m = m || this.options.bounceEasing;
            if (i >= this.pages.length) {
                i = this.pages.length - 1
            } else {
                if (i < 0) {
                    i = 0
                }
            }
            if (n >= this.pages[i].length) {
                n = this.pages[i].length - 1
            } else {
                if (n < 0) {
                    n = 0
                }
            }
            var l = this.pages[i][n].x,
                k = this.pages[i][n].y;
            j = j === undefined ? this.options.snapSpeed || e.max(e.max(e.min(e.abs(l - this.x), 1000), e.min(e.abs(k - this.y), 1000)), 300) : j;
            this.currentPage = {
                x: l,
                y: k,
                pageX: i,
                pageY: n
            };
            this.scrollTo(l, k, j, m)
        },
        next: function(j, l) {
            var i = this.currentPage.pageX,
                k = this.currentPage.pageY;
            i++;
            if (i >= this.pages.length && this.hasVerticalScroll) {
                i = 0;
                k++
            }
            this.goToPage(i, k, j, l)
        },
        prev: function(j, l) {
            var i = this.currentPage.pageX,
                k = this.currentPage.pageY;
            i--;
            if (i < 0 && this.hasVerticalScroll) {
                i = 0;
                k--
            }
            this.goToPage(i, k, j, l)
        },
        _initKeys: function(l) {
            var k = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            var j;
            if (typeof this.options.keyBindings == "object") {
                for (j in this.options.keyBindings) {
                    if (typeof this.options.keyBindings[j] == "string") {
                        this.options.keyBindings[j] = this.options.keyBindings[j].toUpperCase().charCodeAt(0)
                    }
                }
            } else {
                this.options.keyBindings = {}
            }
            for (j in k) {
                this.options.keyBindings[j] = this.options.keyBindings[j] || k[j]
            }
            c.addEvent(f, "keydown", this);
            this.on("destroy", function() {
                c.removeEvent(f, "keydown", this)
            })
        },
        _key: function(n) {
            if (!this.enabled) {
                return
            }
            var i = this.options.snap,
                o = i ? this.currentPage.pageX : this.x,
                m = i ? this.currentPage.pageY : this.y,
                k = c.getTime(),
                j = this.keyTime || 0,
                l = 0.25,
                p;
            if (this.options.useTransition && this.isInTransition) {
                p = this.getComputedPosition();
                this._translate(e.round(p.x), e.round(p.y));
                this.isInTransition = false
            }
            this.keyAcceleration = k - j < 200 ? e.min(this.keyAcceleration + l, 50) : 0;
            switch (n.keyCode) {
                case this.options.keyBindings.pageUp:
                    if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                        o += i ? 1 : this.wrapperWidth
                    } else {
                        m += i ? 1 : this.wrapperHeight
                    }
                    break;
                case this.options.keyBindings.pageDown:
                    if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                        o -= i ? 1 : this.wrapperWidth
                    } else {
                        m -= i ? 1 : this.wrapperHeight
                    }
                    break;
                case this.options.keyBindings.end:
                    o = i ? this.pages.length - 1 : this.maxScrollX;
                    m = i ? this.pages[0].length - 1 : this.maxScrollY;
                    break;
                case this.options.keyBindings.home:
                    o = 0;
                    m = 0;
                    break;
                case this.options.keyBindings.left:
                    o += i ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.up:
                    m += i ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.right:
                    o -= i ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.down:
                    m -= i ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                default:
                    return
            }
            if (i) {
                this.goToPage(o, m);
                return
            }
            if (o > 0) {
                o = 0;
                this.keyAcceleration = 0
            } else {
                if (o < this.maxScrollX) {
                    o = this.maxScrollX;
                    this.keyAcceleration = 0
                }
            }
            if (m > 0) {
                m = 0;
                this.keyAcceleration = 0
            } else {
                if (m < this.maxScrollY) {
                    m = this.maxScrollY;
                    this.keyAcceleration = 0
                }
            }
            this.scrollTo(o, m, 0);
            this.keyTime = k
        },
        _animate: function(r, q, l, i) {
            var o = this,
                n = this.x,
                m = this.y,
                j = c.getTime(),
                p = j + l;

            function k() {
                var s = c.getTime(),
                    u, t, v;
                if (s >= p) {
                    o.isAnimating = false;
                    o._translate(r, q);
                    if (!o.resetPosition(o.options.bounceTime)) {
                        o._execEvent("scrollEnd")
                    }
                    return
                }
                s = (s - j) / l;
                v = i(s);
                u = (r - n) * v + n;
                t = (q - m) * v + m;
                o._translate(u, t);
                if (o.isAnimating) {
                    h(k)
                }
            }
            this.isAnimating = true;
            k()
        },
        handleEvent: function(i) {
            switch (i.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(i);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(i);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(i);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(i);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(i);
                    break;
                case "keydown":
                    this._key(i);
                    break;
                case "click":
                    if (!i._constructed) {
                        i.preventDefault();
                        i.stopPropagation()
                    }
                    break
            }
        }
    };

    function d(l, j, k) {
        var m = a.createElement("div"),
            i = a.createElement("div");
        if (k === true) {
            m.style.cssText = "position:absolute;z-index:9999";
            i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"
        }
        i.className = "iScrollIndicator";
        if (l == "h") {
            if (k === true) {
                m.style.cssText += ";height:7px;left:2px;right:2px;bottom:0";
                i.style.height = "100%"
            }
            m.className = "iScrollHorizontalScrollbar"
        } else {
            if (k === true) {
                m.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px";
                i.style.width = "100%"
            }
            m.className = "iScrollVerticalScrollbar"
        }
        m.style.cssText += ";overflow:hidden";
        if (!j) {
            m.style.pointerEvents = "none"
        }
        m.appendChild(i);
        return m
    }

    function b(j, k) {
        this.wrapper = typeof k.el == "string" ? a.querySelector(k.el) : k.el;
        this.wrapperStyle = this.wrapper.style;
        this.indicator = this.wrapper.children[0];
        this.indicatorStyle = this.indicator.style;
        this.scroller = j;
        this.options = {
            listenX: true,
            listenY: true,
            interactive: false,
            resize: true,
            defaultScrollbars: false,
            shrink: false,
            fade: false,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var l in k) {
            this.options[l] = k[l]
        }
        this.sizeRatioX = 1;
        this.sizeRatioY = 1;
        this.maxPosX = 0;
        this.maxPosY = 0;
        if (this.options.interactive) {
            if (!this.options.disableTouch) {
                c.addEvent(this.indicator, "touchstart", this);
                c.addEvent(f, "touchend", this)
            }
            if (!this.options.disablePointer) {
                c.addEvent(this.indicator, c.prefixPointerEvent("pointerdown"), this);
                c.addEvent(f, c.prefixPointerEvent("pointerup"), this)
            }
            if (!this.options.disableMouse) {
                c.addEvent(this.indicator, "mousedown", this);
                c.addEvent(f, "mouseup", this)
            }
        }
        if (this.options.fade) {
            this.wrapperStyle[c.style.transform] = this.scroller.translateZ;
            this.wrapperStyle[c.style.transitionDuration] = c.isBadAndroid ? "0.001s" : "0ms";
            this.wrapperStyle.opacity = "0"
        }
    }
    b.prototype = {
        handleEvent: function(i) {
            switch (i.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(i);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(i);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(i);
                    break
            }
        },
        destroy: function() {
            if (this.options.interactive) {
                c.removeEvent(this.indicator, "touchstart", this);
                c.removeEvent(this.indicator, c.prefixPointerEvent("pointerdown"), this);
                c.removeEvent(this.indicator, "mousedown", this);
                c.removeEvent(f, "touchmove", this);
                c.removeEvent(f, c.prefixPointerEvent("pointermove"), this);
                c.removeEvent(f, "mousemove", this);
                c.removeEvent(f, "touchend", this);
                c.removeEvent(f, c.prefixPointerEvent("pointerup"), this);
                c.removeEvent(f, "mouseup", this)
            }
            if (this.options.defaultScrollbars) {
                this.wrapper.parentNode.removeChild(this.wrapper)
            }
        },
        _start: function(j) {
            var i = j.touches ? j.touches[0] : j;
            j.preventDefault();
            j.stopPropagation();
            this.transitionTime();
            this.initiated = true;
            this.moved = false;
            this.lastPointX = i.pageX;
            this.lastPointY = i.pageY;
            this.startTime = c.getTime();
            if (!this.options.disableTouch) {
                c.addEvent(f, "touchmove", this)
            }
            if (!this.options.disablePointer) {
                c.addEvent(f, c.prefixPointerEvent("pointermove"), this)
            }
            if (!this.options.disableMouse) {
                c.addEvent(f, "mousemove", this)
            }
            this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(n) {
            var j = n.touches ? n.touches[0] : n,
                k, i, o, m, l = c.getTime();
            if (!this.moved) {
                this.scroller._execEvent("scrollStart")
            }
            this.moved = true;
            k = j.pageX - this.lastPointX;
            this.lastPointX = j.pageX;
            i = j.pageY - this.lastPointY;
            this.lastPointY = j.pageY;
            o = this.x + k;
            m = this.y + i;
            this._pos(o, m);
            n.preventDefault();
            n.stopPropagation()
        },
        _end: function(k) {
            if (!this.initiated) {
                return
            }
            this.initiated = false;
            k.preventDefault();
            k.stopPropagation();
            c.removeEvent(f, "touchmove", this);
            c.removeEvent(f, c.prefixPointerEvent("pointermove"), this);
            c.removeEvent(f, "mousemove", this);
            if (this.scroller.options.snap) {
                var i = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
                var j = this.options.snapSpeed || e.max(e.max(e.min(e.abs(this.scroller.x - i.x), 1000), e.min(e.abs(this.scroller.y - i.y), 1000)), 300);
                if (this.scroller.x != i.x || this.scroller.y != i.y) {
                    this.scroller.directionX = 0;
                    this.scroller.directionY = 0;
                    this.scroller.currentPage = i;
                    this.scroller.scrollTo(i.x, i.y, j, this.scroller.options.bounceEasing)
                }
            }
            if (this.moved) {
                this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function(i) {
            i = i || 0;
            this.indicatorStyle[c.style.transitionDuration] = i + "ms";
            if (!i && c.isBadAndroid) {
                this.indicatorStyle[c.style.transitionDuration] = "0.001s"
            }
        },
        transitionTimingFunction: function(i) {
            this.indicatorStyle[c.style.transitionTimingFunction] = i
        },
        refresh: function() {
            this.transitionTime();
            if (this.options.listenX && !this.options.listenY) {
                this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none"
            } else {
                if (this.options.listenY && !this.options.listenX) {
                    this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none"
                } else {
                    this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none"
                }
            }
            if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
                c.addClass(this.wrapper, "iScrollBothScrollbars");
                c.removeClass(this.wrapper, "iScrollLoneScrollbar");
                if (this.options.defaultScrollbars && this.options.customStyle) {
                    if (this.options.listenX) {
                        this.wrapper.style.right = "8px"
                    } else {
                        this.wrapper.style.bottom = "8px"
                    }
                }
            } else {
                c.removeClass(this.wrapper, "iScrollBothScrollbars");
                c.addClass(this.wrapper, "iScrollLoneScrollbar");
                if (this.options.defaultScrollbars && this.options.customStyle) {
                    if (this.options.listenX) {
                        this.wrapper.style.right = "2px"
                    } else {
                        this.wrapper.style.bottom = "2px"
                    }
                }
            }
            var i = this.wrapper.offsetHeight;
            if (this.options.listenX) {
                this.wrapperWidth = this.wrapper.clientWidth;
                if (this.options.resize) {
                    this.indicatorWidth = e.max(e.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                    this.indicatorStyle.width = this.indicatorWidth + "px"
                } else {
                    this.indicatorWidth = this.indicator.clientWidth
                }
                this.maxPosX = this.wrapperWidth - this.indicatorWidth;
                if (this.options.shrink == "clip") {
                    this.minBoundaryX = -this.indicatorWidth + 8;
                    this.maxBoundaryX = this.wrapperWidth - 8
                } else {
                    this.minBoundaryX = 0;
                    this.maxBoundaryX = this.maxPosX
                }
                this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX))
            }
            if (this.options.listenY) {
                this.wrapperHeight = this.wrapper.clientHeight;
                if (this.options.resize) {
                    this.indicatorHeight = e.max(e.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                    this.indicatorStyle.height = this.indicatorHeight + "px"
                } else {
                    this.indicatorHeight = this.indicator.clientHeight
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                if (this.options.shrink == "clip") {
                    this.minBoundaryY = -this.indicatorHeight + 8;
                    this.maxBoundaryY = this.wrapperHeight - 8
                } else {
                    this.minBoundaryY = 0;
                    this.maxBoundaryY = this.maxPosY
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY))
            }
            this.updatePosition()
        },
        updatePosition: function() {
            var i = this.options.listenX && e.round(this.sizeRatioX * this.scroller.x) || 0,
                j = this.options.listenY && e.round(this.sizeRatioY * this.scroller.y) || 0;
            if (!this.options.ignoreBoundaries) {
                if (i < this.minBoundaryX) {
                    if (this.options.shrink == "scale") {
                        this.width = e.max(this.indicatorWidth + i, 8);
                        this.indicatorStyle.width = this.width + "px"
                    }
                    i = this.minBoundaryX
                } else {
                    if (i > this.maxBoundaryX) {
                        if (this.options.shrink == "scale") {
                            this.width = e.max(this.indicatorWidth - (i - this.maxPosX), 8);
                            this.indicatorStyle.width = this.width + "px";
                            i = this.maxPosX + this.indicatorWidth - this.width
                        } else {
                            i = this.maxBoundaryX
                        }
                    } else {
                        if (this.options.shrink == "scale" && this.width != this.indicatorWidth) {
                            this.width = this.indicatorWidth;
                            this.indicatorStyle.width = this.width + "px"
                        }
                    }
                }
                if (j < this.minBoundaryY) {
                    if (this.options.shrink == "scale") {
                        this.height = e.max(this.indicatorHeight + j * 3, 8);
                        this.indicatorStyle.height = this.height + "px"
                    }
                    j = this.minBoundaryY
                } else {
                    if (j > this.maxBoundaryY) {
                        if (this.options.shrink == "scale") {
                            this.height = e.max(this.indicatorHeight - (j - this.maxPosY) * 3, 8);
                            this.indicatorStyle.height = this.height + "px";
                            j = this.maxPosY + this.indicatorHeight - this.height
                        } else {
                            j = this.maxBoundaryY
                        }
                    } else {
                        if (this.options.shrink == "scale" && this.height != this.indicatorHeight) {
                            this.height = this.indicatorHeight;
                            this.indicatorStyle.height = this.height + "px"
                        }
                    }
                }
            }
            this.x = i;
            this.y = j;
            if (this.scroller.options.useTransform) {
                this.indicatorStyle[c.style.transform] = "translate(" + i + "px," + j + "px)" + this.scroller.translateZ
            } else {
                this.indicatorStyle.left = i + "px";
                this.indicatorStyle.top = j + "px"
            }
        },
        _pos: function(i, j) {
            if (i < 0) {
                i = 0
            } else {
                if (i > this.maxPosX) {
                    i = this.maxPosX
                }
            }
            if (j < 0) {
                j = 0
            } else {
                if (j > this.maxPosY) {
                    j = this.maxPosY
                }
            }
            i = this.options.listenX ? e.round(i / this.sizeRatioX) : this.scroller.x;
            j = this.options.listenY ? e.round(j / this.sizeRatioY) : this.scroller.y;
            this.scroller.scrollTo(i, j)
        },
        fade: function(l, k) {
            if (k && !this.visible) {
                return
            }
            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;
            var j = l ? 250 : 500,
                i = l ? 0 : 300;
            l = l ? "1" : "0";
            this.wrapperStyle[c.style.transitionDuration] = j + "ms";
            this.fadeTimeout = setTimeout((function(m) {
                this.wrapperStyle.opacity = m;
                this.visible = +m
            }).bind(this, l), i)
        }
    };
    g.utils = c;
    if (typeof module != "undefined" && module.exports) {
        module.exports = g
    } else {
        f.IScroll = g
    }
})(window, document, Math);

/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash compat -o ./lodash.js`
 */
;
(function() {
    function n(n, t) {
        if (n !== t) {
            var r = null === n,
                e = n === w,
                u = n === n,
                o = null === t,
                i = t === w,
                f = t === t;
            if (n > t && !o || !u || r && !i && f || e && f) return 1;
            if (n < t && !r || !f || o && !e && u || i && u) return -1
        }
        return 0
    }

    function t(n, t, r) {
        for (var e = n.length, u = r ? e : -1; r ? u-- : ++u < e;)
            if (t(n[u], u, n)) return u;
        return -1
    }

    function r(n, t, r) {
        if (t !== t) return p(n, r);
        r -= 1;
        for (var e = n.length; ++r < e;)
            if (n[r] === t) return r;
        return -1
    }

    function e(n) {
        return typeof n == "function" || false
    }

    function u(n) {
        return null == n ? "" : n + ""
    }

    function o(n, t) {
        for (var r = -1, e = n.length; ++r < e && -1 < t.indexOf(n.charAt(r)););
        return r
    }

    function i(n, t) {
        for (var r = n.length; r-- && -1 < t.indexOf(n.charAt(r)););
        return r
    }

    function f(t, r) {
        return n(t.a, r.a) || t.b - r.b
    }

    function a(n) {
        return Nn[n]
    }

    function c(n) {
        return Tn[n]
    }

    function l(n, t, r) {
        return t ? n = Bn[n] : r && (n = Dn[n]), "\\" + n
    }

    function s(n) {
        return "\\" + Dn[n]
    }

    function p(n, t, r) {
        var e = n.length;
        for (t += r ? 0 : -1; r ? t-- : ++t < e;) {
            var u = n[t];
            if (u !== u) return t
        }
        return -1
    }

    function h(n) {
        return !!n && typeof n == "object"
    }

    function _(n) {
        return 160 >= n && 9 <= n && 13 >= n || 32 == n || 160 == n || 5760 == n || 6158 == n || 8192 <= n && (8202 >= n || 8232 == n || 8233 == n || 8239 == n || 8287 == n || 12288 == n || 65279 == n);
    }

    function v(n, t) {
        for (var r = -1, e = n.length, u = -1, o = []; ++r < e;) n[r] === t && (n[r] = P, o[++u] = r);
        return o
    }

    function g(n) {
        for (var t = -1, r = n.length; ++t < r && _(n.charCodeAt(t)););
        return t
    }

    function y(n) {
        for (var t = n.length; t-- && _(n.charCodeAt(t)););
        return t
    }

    function d(n) {
        return Pn[n]
    }

    function m(_) {
        function Nn(n) {
            if (h(n) && !(Wo(n) || n instanceof zn)) {
                if (n instanceof Pn) return n;
                if (eu.call(n, "__chain__") && eu.call(n, "__wrapped__")) return qr(n)
            }
            return new Pn(n)
        }

        function Tn() {}

        function Pn(n, t, r) {
            this.__wrapped__ = n, this.__actions__ = r || [],
                this.__chain__ = !!t
        }

        function zn(n) {
            this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Cu, this.__views__ = []
        }

        function Bn() {
            this.__data__ = {}
        }

        function Dn(n) {
            var t = n ? n.length : 0;
            for (this.data = {
                    hash: mu(null),
                    set: new hu
                }; t--;) this.push(n[t])
        }

        function Mn(n, t) {
            var r = n.data;
            return (typeof t == "string" || de(t) ? r.set.has(t) : r.hash[t]) ? 0 : -1
        }

        function qn(n, t) {
            var r = -1,
                e = n.length;
            for (t || (t = De(e)); ++r < e;) t[r] = n[r];
            return t
        }

        function Kn(n, t) {
            for (var r = -1, e = n.length; ++r < e && false !== t(n[r], r, n););
            return n
        }

        function Vn(n, t) {
            for (var r = -1, e = n.length; ++r < e;)
                if (!t(n[r], r, n)) return false;
            return true
        }

        function Zn(n, t) {
            for (var r = -1, e = n.length, u = -1, o = []; ++r < e;) {
                var i = n[r];
                t(i, r, n) && (o[++u] = i)
            }
            return o
        }

        function Xn(n, t) {
            for (var r = -1, e = n.length, u = De(e); ++r < e;) u[r] = t(n[r], r, n);
            return u
        }

        function Hn(n, t) {
            for (var r = -1, e = t.length, u = n.length; ++r < e;) n[u + r] = t[r];
            return n
        }

        function Qn(n, t, r, e) {
            var u = -1,
                o = n.length;
            for (e && o && (r = n[++u]); ++u < o;) r = t(r, n[u], u, n);
            return r
        }

        function nt(n, t) {
            for (var r = -1, e = n.length; ++r < e;)
                if (t(n[r], r, n)) return true;
            return false
        }

        function tt(n, t, r, e) {
            return n !== w && eu.call(e, r) ? n : t
        }

        function rt(n, t, r) {
            for (var e = -1, u = Ko(t), o = u.length; ++e < o;) {
                var i = u[e],
                    f = n[i],
                    a = r(f, t[i], i, n, t);
                (a === a ? a === f : f !== f) && (f !== w || i in n) || (n[i] = a)
            }
            return n
        }

        function et(n, t) {
            return null == t ? n : ot(t, Ko(t), n)
        }

        function ut(n, t) {
            for (var r = -1, e = null == n, u = !e && Sr(n), o = u ? n.length : 0, i = t.length, f = De(i); ++r < i;) {
                var a = t[r];
                f[r] = u ? Ur(a, o) ? n[a] : w : e ? w : n[a]
            }
            return f
        }

        function ot(n, t, r) {
            r || (r = {});
            for (var e = -1, u = t.length; ++e < u;) {
                var o = t[e];
                r[o] = n[o]
            }
            return r
        }

        function it(n, t, r) {
            var e = typeof n;
            return "function" == e ? t === w ? n : Dt(n, t, r) : null == n ? Ne : "object" == e ? At(n) : t === w ? Be(n) : jt(n, t)
        }

        function ft(n, t, r, e, u, o, i) {
            var f;
            if (r && (f = u ? r(n, e, u) : r(n)), f !== w) return f;
            if (!de(n)) return n;
            if (e = Wo(n)) {
                if (f = Ir(n), !t) return qn(n, f)
            } else {
                var a = ou.call(n),
                    c = a == K;
                if (a != Z && a != z && (!c || u)) return Ln[a] ? Er(n, a, t) : u ? n : {};
                if (Gn(n)) return u ? n : {};
                if (f = Rr(c ? {} : n), !t) return et(f, n)
            }
            for (o || (o = []), i || (i = []), u = o.length; u--;)
                if (o[u] == n) return i[u];
            return o.push(n), i.push(f), (e ? Kn : gt)(n, function(e, u) {
                f[u] = ft(e, t, r, u, n, o, i);
            }), f
        }

        function at(n, t, r) {
            if (typeof n != "function") throw new Xe(T);
            return _u(function() {
                n.apply(w, r)
            }, t)
        }

        function ct(n, t) {
            var e = n ? n.length : 0,
                u = [];
            if (!e) return u;
            var o = -1,
                i = jr(),
                f = i === r,
                a = f && t.length >= F && mu && hu ? new Dn(t) : null,
                c = t.length;
            a && (i = Mn, f = false, t = a);
            n: for (; ++o < e;)
                if (a = n[o], f && a === a) {
                    for (var l = c; l--;)
                        if (t[l] === a) continue n;
                    u.push(a)
                } else 0 > i(t, a, 0) && u.push(a);
            return u
        }

        function lt(n, t) {
            var r = true;
            return zu(n, function(n, e, u) {
                return r = !!t(n, e, u)
            }), r
        }

        function st(n, t, r, e) {
            var u = e,
                o = u;
            return zu(n, function(n, i, f) {
                i = +t(n, i, f), (r(i, u) || i === e && i === o) && (u = i, o = n)
            }), o
        }

        function pt(n, t) {
            var r = [];
            return zu(n, function(n, e, u) {
                t(n, e, u) && r.push(n)
            }), r
        }

        function ht(n, t, r, e) {
            var u;
            return r(n, function(n, r, o) {
                return t(n, r, o) ? (u = e ? r : n, false) : void 0
            }), u
        }

        function _t(n, t, r, e) {
            e || (e = []);
            for (var u = -1, o = n.length; ++u < o;) {
                var i = n[u];
                h(i) && Sr(i) && (r || Wo(i) || _e(i)) ? t ? _t(i, t, r, e) : Hn(e, i) : r || (e[e.length] = i)
            }
            return e
        }

        function vt(n, t) {
            return Du(n, t, Ee)
        }

        function gt(n, t) {
            return Du(n, t, Ko)
        }

        function yt(n, t) {
            return Mu(n, t, Ko)
        }

        function dt(n, t) {
            for (var r = -1, e = t.length, u = -1, o = []; ++r < e;) {
                var i = t[r];
                ye(n[i]) && (o[++u] = i)
            }
            return o
        }

        function mt(n, t, r) {
            if (null != n) {
                n = Dr(n), r !== w && r in n && (t = [r]), r = 0;
                for (var e = t.length; null != n && r < e;) n = Dr(n)[t[r++]];
                return r && r == e ? n : w
            }
        }

        function wt(n, t, r, e, u, o) {
            if (n === t) return true;
            if (null == n || null == t || !de(n) && !h(t)) return n !== n && t !== t;
            n: {
                var i = wt,
                    f = Wo(n),
                    a = Wo(t),
                    c = B,
                    l = B;f || (c = ou.call(n), c == z ? c = Z : c != Z && (f = je(n))),
                a || (l = ou.call(t), l == z ? l = Z : l != Z && je(t));
                var s = c == Z && !Gn(n),
                    a = l == Z && !Gn(t),
                    l = c == l;
                if (!l || f || s) {
                    if (!e && (c = s && eu.call(n, "__wrapped__"), a = a && eu.call(t, "__wrapped__"),
                            c || a)) {
                        n = i(c ? n.value() : n, a ? t.value() : t, r, e, u, o);
                        break n
                    }
                    if (l) {
                        for (u || (u = []), o || (o = []), c = u.length; c--;)
                            if (u[c] == n) {
                                n = o[c] == t;
                                break n
                            }
                        u.push(n), o.push(t), n = (f ? mr : xr)(n, t, i, r, e, u, o), u.pop(), o.pop()
                    } else n = false
                } else n = wr(n, t, c)
            }
            return n
        }

        function xt(n, t, r) {
            var e = t.length,
                u = e,
                o = !r;
            if (null == n) return !u;
            for (n = Dr(n); e--;) {
                var i = t[e];
                if (o && i[2] ? i[1] !== n[i[0]] : !(i[0] in n)) return false
            }
            for (; ++e < u;) {
                var i = t[e],
                    f = i[0],
                    a = n[f],
                    c = i[1];
                if (o && i[2]) {
                    if (a === w && !(f in n)) return false
                } else if (i = r ? r(a, c, f) : w, i === w ? !wt(c, a, r, true) : !i) return false;
            }
            return true
        }

        function bt(n, t) {
            var r = -1,
                e = Sr(n) ? De(n.length) : [];
            return zu(n, function(n, u, o) {
                e[++r] = t(n, u, o)
            }), e
        }

        function At(n) {
            var t = kr(n);
            if (1 == t.length && t[0][2]) {
                var r = t[0][0],
                    e = t[0][1];
                return function(n) {
                    return null == n ? false : (n = Dr(n), n[r] === e && (e !== w || r in n))
                }
            }
            return function(n) {
                return xt(n, t)
            }
        }

        function jt(n, t) {
            var r = Wo(n),
                e = Wr(n) && t === t && !de(t),
                u = n + "";
            return n = Mr(n),
                function(o) {
                    if (null == o) return false;
                    var i = u;
                    if (o = Dr(o), !(!r && e || i in o)) {
                        if (o = 1 == n.length ? o : mt(o, St(n, 0, -1)), null == o) return false;
                        i = Gr(n), o = Dr(o);
                    }
                    return o[i] === t ? t !== w || i in o : wt(t, o[i], w, true)
                }
        }

        function kt(n, t, r, e, u) {
            if (!de(n)) return n;
            var o = Sr(t) && (Wo(t) || je(t)),
                i = o ? w : Ko(t);
            return Kn(i || t, function(f, a) {
                if (i && (a = f, f = t[a]), h(f)) {
                    e || (e = []), u || (u = []);
                    n: {
                        for (var c = a, l = e, s = u, p = l.length, _ = t[c]; p--;)
                            if (l[p] == _) {
                                n[c] = s[p];
                                break n
                            }
                        var p = n[c],
                            v = r ? r(p, _, c, n, t) : w,
                            g = v === w;g && (v = _, Sr(_) && (Wo(_) || je(_)) ? v = Wo(p) ? p : Sr(p) ? qn(p) : [] : xe(_) || _e(_) ? v = _e(p) ? Ie(p) : xe(p) ? p : {} : g = false),
                        l.push(_),
                        s.push(v),
                        g ? n[c] = kt(v, _, r, l, s) : (v === v ? v !== p : p === p) && (n[c] = v)
                    }
                } else c = n[a],
                    l = r ? r(c, f, a, n, t) : w, (s = l === w) && (l = f), l === w && (!o || a in n) || !s && (l === l ? l === c : c !== c) || (n[a] = l)
            }), n
        }

        function Ot(n) {
            return function(t) {
                return null == t ? w : Dr(t)[n]
            }
        }

        function It(n) {
            var t = n + "";
            return n = Mr(n),
                function(r) {
                    return mt(r, n, t)
                }
        }

        function Rt(n, t) {
            for (var r = n ? t.length : 0; r--;) {
                var e = t[r];
                if (e != u && Ur(e)) {
                    var u = e;
                    vu.call(n, e, 1)
                }
            }
            return n
        }

        function Et(n, t) {
            return n + wu(Ru() * (t - n + 1))
        }

        function Ct(n, t, r, e, u) {
            return u(n, function(n, u, o) {
                r = e ? (e = false, n) : t(r, n, u, o)
            }), r
        }

        function St(n, t, r) {
            var e = -1,
                u = n.length;
            for (t = null == t ? 0 : +t || 0,
                0 > t && (t = -t > u ? 0 : u + t), r = r === w || r > u ? u : +r || 0, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = De(u); ++e < u;) r[e] = n[e + t];
            return r
        }

        function Ut(n, t) {
            var r;
            return zu(n, function(n, e, u) {
                return r = t(n, e, u), !r
            }), !!r
        }

        function $t(n, t) {
            var r = n.length;
            for (n.sort(t); r--;) n[r] = n[r].c;
            return n
        }

        function Wt(t, r, e) {
            var u = br(),
                o = -1;
            return r = Xn(r, function(n) {
                return u(n)
            }), t = bt(t, function(n) {
                return {
                    a: Xn(r, function(t) {
                        return t(n)
                    }),
                    b: ++o,
                    c: n
                }
            }), $t(t, function(t, r) {
                var u;
                n: {
                    for (var o = -1, i = t.a, f = r.a, a = i.length, c = e.length; ++o < a;)
                        if (u = n(i[o], f[o])) {
                            if (o >= c) break n;
                            o = e[o], u *= "asc" === o || true === o ? 1 : -1;
                            break n
                        }
                    u = t.b - r.b
                }
                return u
            })
        }

        function Ft(n, t) {
            var r = 0;
            return zu(n, function(n, e, u) {
                r += +t(n, e, u) || 0
            }), r
        }

        function Lt(n, t) {
            var e = -1,
                u = jr(),
                o = n.length,
                i = u === r,
                f = i && o >= F,
                a = f && mu && hu ? new Dn(void 0) : null,
                c = [];
            a ? (u = Mn, i = false) : (f = false, a = t ? [] : c);
            n: for (; ++e < o;) {
                var l = n[e],
                    s = t ? t(l, e, n) : l;
                if (i && l === l) {
                    for (var p = a.length; p--;)
                        if (a[p] === s) continue n;
                    t && a.push(s), c.push(l)
                } else 0 > u(a, s, 0) && ((t || f) && a.push(s), c.push(l))
            }
            return c
        }

        function Nt(n, t) {
            for (var r = -1, e = t.length, u = De(e); ++r < e;) u[r] = n[t[r]];
            return u
        }

        function Tt(n, t, r, e) {
            for (var u = n.length, o = e ? u : -1;
                (e ? o-- : ++o < u) && t(n[o], o, n););
            return r ? St(n, e ? 0 : o, e ? o + 1 : u) : St(n, e ? o + 1 : 0, e ? u : o)
        }

        function Pt(n, t) {
            var r = n;
            r instanceof zn && (r = r.value());
            for (var e = -1, u = t.length; ++e < u;) var o = t[e],
                r = o.func.apply(o.thisArg, Hn([r], o.args));
            return r
        }

        function zt(n, t, r) {
            var e = 0,
                u = n ? n.length : e;
            if (typeof t == "number" && t === t && u <= Uu) {
                for (; e < u;) {
                    var o = e + u >>> 1,
                        i = n[o];
                    (r ? i <= t : i < t) && null !== i ? e = o + 1 : u = o
                }
                return u
            }
            return Bt(n, t, Ne, r)
        }

        function Bt(n, t, r, e) {
            t = r(t);
            for (var u = 0, o = n ? n.length : 0, i = t !== t, f = null === t, a = t === w; u < o;) {
                var c = wu((u + o) / 2),
                    l = r(n[c]),
                    s = l !== w,
                    p = l === l;
                (i ? p || e : f ? p && s && (e || null != l) : a ? p && (e || s) : null == l ? 0 : e ? l <= t : l < t) ? u = c + 1: o = c
            }
            return ku(o, Su)
        }

        function Dt(n, t, r) {
            if (typeof n != "function") return Ne;
            if (t === w) return n;
            switch (r) {
                case 1:
                    return function(r) {
                        return n.call(t, r)
                    };
                case 3:
                    return function(r, e, u) {
                        return n.call(t, r, e, u)
                    };
                case 4:
                    return function(r, e, u, o) {
                        return n.call(t, r, e, u, o)
                    };
                case 5:
                    return function(r, e, u, o, i) {
                        return n.call(t, r, e, u, o, i)
                    }
            }
            return function() {
                return n.apply(t, arguments)
            }
        }

        function Mt(n) {
            var t = new au(n.byteLength);
            return new gu(t).set(new gu(n)), t
        }

        function qt(n, t, r) {
            for (var e = r.length, u = -1, o = ju(n.length - e, 0), i = -1, f = t.length, a = De(f + o); ++i < f;) a[i] = t[i];
            for (; ++u < e;) a[r[u]] = n[u];
            for (; o--;) a[i++] = n[u++];
            return a
        }

        function Kt(n, t, r) {
            for (var e = -1, u = r.length, o = -1, i = ju(n.length - u, 0), f = -1, a = t.length, c = De(i + a); ++o < i;) c[o] = n[o];
            for (i = o; ++f < a;) c[i + f] = t[f];
            for (; ++e < u;) c[i + r[e]] = n[o++];
            return c
        }

        function Vt(n, t) {
            return function(r, e, u) {
                var o = t ? t() : {};
                if (e = br(e, u, 3), Wo(r)) {
                    u = -1;
                    for (var i = r.length; ++u < i;) {
                        var f = r[u];
                        n(o, f, e(f, u, r), r);
                    }
                } else zu(r, function(t, r, u) {
                    n(o, t, e(t, r, u), u)
                });
                return o
            }
        }

        function Zt(n) {
            return pe(function(t, r) {
                var e = -1,
                    u = null == t ? 0 : r.length,
                    o = 2 < u ? r[u - 2] : w,
                    i = 2 < u ? r[2] : w,
                    f = 1 < u ? r[u - 1] : w;
                for (typeof o == "function" ? (o = Dt(o, f, 5), u -= 2) : (o = typeof f == "function" ? f : w, u -= o ? 1 : 0), i && $r(r[0], r[1], i) && (o = 3 > u ? w : o, u = 1); ++e < u;)(i = r[e]) && n(t, i, o);
                return t
            })
        }

        function Yt(n, t) {
            return function(r, e) {
                var u = r ? Vu(r) : 0;
                if (!Lr(u)) return n(r, e);
                for (var o = t ? u : -1, i = Dr(r);
                    (t ? o-- : ++o < u) && false !== e(i[o], o, i););
                return r
            }
        }

        function Gt(n) {
            return function(t, r, e) {
                var u = Dr(t);
                e = e(t);
                for (var o = e.length, i = n ? o : -1; n ? i-- : ++i < o;) {
                    var f = e[i];
                    if (false === r(u[f], f, u)) break
                }
                return t
            }
        }

        function Jt(n, t) {
            function r() {
                return (this && this !== Yn && this instanceof r ? e : n).apply(t, arguments)
            }
            var e = Ht(n);
            return r
        }

        function Xt(n) {
            return function(t) {
                var r = -1;
                t = Fe(Ue(t));
                for (var e = t.length, u = ""; ++r < e;) u = n(u, t[r], r);
                return u
            }
        }

        function Ht(n) {
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return new n;
                    case 1:
                        return new n(t[0]);
                    case 2:
                        return new n(t[0], t[1]);
                    case 3:
                        return new n(t[0], t[1], t[2]);
                    case 4:
                        return new n(t[0], t[1], t[2], t[3]);
                    case 5:
                        return new n(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                }
                var r = Pu(n.prototype),
                    t = n.apply(r, t);
                return de(t) ? t : r
            }
        }

        function Qt(n) {
            function t(r, e, u) {
                return u && $r(r, e, u) && (e = w), r = dr(r, n, w, w, w, w, w, e), r.placeholder = t.placeholder, r
            }
            return t
        }

        function nr(n, t) {
            return pe(function(r) {
                var e = r[0];
                return null == e ? e : (r.push(t), n.apply(w, r))
            })
        }

        function tr(n, t) {
            return function(r, e, u) {
                if (u && $r(r, e, u) && (e = w), e = br(e, u, 3), 1 == e.length) {
                    u = r = Wo(r) ? r : Br(r);
                    for (var o = e, i = -1, f = u.length, a = t, c = a; ++i < f;) {
                        var l = u[i],
                            s = +o(l);
                        n(s, a) && (a = s, c = l)
                    }
                    if (u = c, !r.length || u !== t) return u
                }
                return st(r, e, n, t)
            }
        }

        function rr(n, r) {
            return function(e, u, o) {
                return u = br(u, o, 3), Wo(e) ? (u = t(e, u, r), -1 < u ? e[u] : w) : ht(e, u, n)
            }
        }

        function er(n) {
            return function(r, e, u) {
                return r && r.length ? (e = br(e, u, 3), t(r, e, n)) : -1
            }
        }

        function ur(n) {
            return function(t, r, e) {
                return r = br(r, e, 3), ht(t, r, n, true)
            }
        }

        function or(n) {
            return function() {
                for (var t, r = arguments.length, e = n ? r : -1, u = 0, o = De(r); n ? e-- : ++e < r;) {
                    var i = o[u++] = arguments[e];
                    if (typeof i != "function") throw new Xe(T);
                    !t && Pn.prototype.thru && "wrapper" == Ar(i) && (t = new Pn([], true))
                }
                for (e = t ? -1 : r; ++e < r;) {
                    var i = o[e],
                        u = Ar(i),
                        f = "wrapper" == u ? Ku(i) : w;
                    t = f && Fr(f[0]) && f[1] == (E | k | I | C) && !f[4].length && 1 == f[9] ? t[Ar(f[0])].apply(t, f[3]) : 1 == i.length && Fr(i) ? t[u]() : t.thru(i)
                }
                return function() {
                    var n = arguments,
                        e = n[0];
                    if (t && 1 == n.length && Wo(e) && e.length >= F) return t.plant(e).value();
                    for (var u = 0, n = r ? o[u].apply(this, n) : e; ++u < r;) n = o[u].call(this, n);
                    return n
                }
            }
        }

        function ir(n, t) {
            return function(r, e, u) {
                return typeof e == "function" && u === w && Wo(r) ? n(r, e) : t(r, Dt(e, u, 3))
            }
        }

        function fr(n) {
            return function(t, r, e) {
                return (typeof r != "function" || e !== w) && (r = Dt(r, e, 3)), n(t, r, Ee)
            }
        }

        function ar(n) {
            return function(t, r, e) {
                return (typeof r != "function" || e !== w) && (r = Dt(r, e, 3)), n(t, r)
            }
        }

        function cr(n) {
            return function(t, r, e) {
                var u = {};
                return r = br(r, e, 3), gt(t, function(t, e, o) {
                    o = r(t, e, o), e = n ? o : e, t = n ? t : o, u[e] = t
                }), u
            }
        }

        function lr(n) {
            return function(t, r, e) {
                return t = u(t), (n ? t : "") + _r(t, r, e) + (n ? "" : t)
            }
        }

        function sr(n) {
            var t = pe(function(r, e) {
                var u = v(e, t.placeholder);
                return dr(r, n, w, e, u)
            });
            return t
        }

        function pr(n, t) {
            return function(r, e, u, o) {
                var i = 3 > arguments.length;
                return typeof e == "function" && o === w && Wo(r) ? n(r, e, u, i) : Ct(r, br(e, o, 4), u, i, t)
            }
        }

        function hr(n, t, r, e, u, o, i, f, a, c) {
            function l() {
                for (var m = arguments.length, x = m, j = De(m); x--;) j[x] = arguments[x];
                if (e && (j = qt(j, e, u)), o && (j = Kt(j, o, i)), _ || y) {
                    var x = l.placeholder,
                        k = v(j, x),
                        m = m - k.length;
                    if (m < c) {
                        var O = f ? qn(f) : w,
                            m = ju(c - m, 0),
                            E = _ ? k : w,
                            k = _ ? w : k,
                            C = _ ? j : w,
                            j = _ ? w : j;
                        return t |= _ ? I : R, t &= ~(_ ? R : I),
                            g || (t &= ~(b | A)), j = [n, t, r, C, E, j, k, O, a, m], O = hr.apply(w, j), Fr(n) && Zu(O, j), O.placeholder = x, O
                    }
                }
                if (x = p ? r : this, O = h ? x[n] : n, f)
                    for (m = j.length, E = ku(f.length, m), k = qn(j); E--;) C = f[E], j[E] = Ur(C, m) ? k[C] : w;
                return s && a < j.length && (j.length = a), this && this !== Yn && this instanceof l && (O = d || Ht(n)), O.apply(x, j)
            }
            var s = t & E,
                p = t & b,
                h = t & A,
                _ = t & k,
                g = t & j,
                y = t & O,
                d = h ? w : Ht(n);
            return l
        }

        function _r(n, t, r) {
            return n = n.length, t = +t, n < t && bu(t) ? (t -= n, r = null == r ? " " : r + "", $e(r, du(t / r.length)).slice(0, t)) : ""
        }

        function vr(n, t, r, e) {
            function u() {
                for (var t = -1, f = arguments.length, a = -1, c = e.length, l = De(c + f); ++a < c;) l[a] = e[a];
                for (; f--;) l[a++] = arguments[++t];
                return (this && this !== Yn && this instanceof u ? i : n).apply(o ? r : this, l)
            }
            var o = t & b,
                i = Ht(n);
            return u
        }

        function gr(n) {
            var t = Ve[n];
            return function(n, r) {
                return (r = r === w ? 0 : +r || 0) ? (r = su(10, r), t(n * r) / r) : t(n)
            }
        }

        function yr(n) {
            return function(t, r, e, u) {
                var o = br(e);
                return null == e && o === it ? zt(t, r, n) : Bt(t, r, o(e, u, 1), n)
            }
        }

        function dr(n, t, r, e, u, o, i, f) {
            var a = t & A;
            if (!a && typeof n != "function") throw new Xe(T);
            var c = e ? e.length : 0;
            if (c || (t &= ~(I | R), e = u = w), c -= u ? u.length : 0, t & R) {
                var l = e,
                    s = u;
                e = u = w
            }
            var p = a ? w : Ku(n);
            return r = [n, t, r, e, u, l, s, o, i, f], p && (e = r[1], t = p[1], f = e | t, u = t == E && e == k || t == E && e == C && r[7].length <= p[8] || t == (E | C) && e == k, (f < E || u) && (t & b && (r[2] = p[2], f |= e & b ? 0 : j), (e = p[3]) && (u = r[3], r[3] = u ? qt(u, e, p[4]) : qn(e), r[4] = u ? v(r[3], P) : qn(p[4])), (e = p[5]) && (u = r[5], r[5] = u ? Kt(u, e, p[6]) : qn(e), r[6] = u ? v(r[5], P) : qn(p[6])), (e = p[7]) && (r[7] = qn(e)), t & E && (r[8] = null == r[8] ? p[8] : ku(r[8], p[8])), null == r[9] && (r[9] = p[9]), r[0] = p[0], r[1] = f), t = r[1], f = r[9]), r[9] = null == f ? a ? 0 : n.length : ju(f - c, 0) || 0, n = t == b ? Jt(r[0], r[2]) : t != I && t != (b | I) || r[4].length ? hr.apply(w, r) : vr.apply(w, r),
                (p ? qu : Zu)(n, r)
        }

        function mr(n, t, r, e, u, o, i) {
            var f = -1,
                a = n.length,
                c = t.length;
            if (a != c && (!u || c <= a)) return false;
            for (; ++f < a;) {
                var l = n[f],
                    c = t[f],
                    s = e ? e(u ? c : l, u ? l : c, f) : w;
                if (s !== w) {
                    if (s) continue;
                    return false
                }
                if (u) {
                    if (!nt(t, function(n) {
                            return l === n || r(l, n, e, u, o, i)
                        })) return false
                } else if (l !== c && !r(l, c, e, u, o, i)) return false
            }
            return true
        }

        function wr(n, t, r) {
            switch (r) {
                case D:
                case M:
                    return +n == +t;
                case q:
                    return n.name == t.name && n.message == t.message;
                case V:
                    return n != +n ? t != +t : n == +t;
                case Y:
                case G:
                    return n == t + ""
            }
            return false
        }

        function xr(n, t, r, e, u, o, i) {
            var f = Ko(n),
                a = f.length,
                c = Ko(t).length;
            if (a != c && !u) return false;
            for (c = a; c--;) {
                var l = f[c];
                if (!(u ? l in t : eu.call(t, l))) return false
            }
            for (var s = u; ++c < a;) {
                var l = f[c],
                    p = n[l],
                    h = t[l],
                    _ = e ? e(u ? h : p, u ? p : h, l) : w;
                if (_ === w ? !r(p, h, e, u, o, i) : !_) return false;
                s || (s = "constructor" == l)
            }
            return s || (r = n.constructor, e = t.constructor, !(r != e && "constructor" in n && "constructor" in t) || typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) ? true : false
        }

        function br(n, t, r) {
            var e = Nn.callback || Le,
                e = e === Le ? it : e;
            return r ? e(n, t, r) : e
        }

        function Ar(n) {
            for (var t = n.name + "", r = Fu[t], e = r ? r.length : 0; e--;) {
                var u = r[e],
                    o = u.func;
                if (null == o || o == n) return u.name
            }
            return t
        }

        function jr(n, t, e) {
            var u = Nn.indexOf || Yr,
                u = u === Yr ? r : u;
            return n ? u(n, t, e) : u
        }

        function kr(n) {
            n = Ce(n);
            for (var t = n.length; t--;) {
                var r, e = n[t];
                r = n[t][1], r = r === r && !de(r), e[2] = r
            }
            return n
        }

        function Or(n, t) {
            var r = null == n ? w : n[t];
            return me(r) ? r : w
        }

        function Ir(n) {
            var t = n.length,
                r = new n.constructor(t);
            return t && "string" == typeof n[0] && eu.call(n, "index") && (r.index = n.index, r.input = n.input), r
        }

        function Rr(n) {
            return n = n.constructor,
                typeof n == "function" && n instanceof n || (n = Ye), new n
        }

        function Er(n, t, r) {
            var e = n.constructor;
            switch (t) {
                case J:
                    return Mt(n);
                case D:
                case M:
                    return new e(+n);
                case X:
                case H:
                case Q:
                case nn:
                case tn:
                case rn:
                case en:
                case un:
                case on:
                    return e instanceof e && (e = Lu[t]), t = n.buffer, new e(r ? Mt(t) : t, n.byteOffset, n.length);
                case V:
                case G:
                    return new e(n);
                case Y:
                    var u = new e(n.source, kn.exec(n));
                    u.lastIndex = n.lastIndex
            }
            return u
        }

        function Cr(n, t, r) {
            return null == n || Wr(t, n) || (t = Mr(t), n = 1 == t.length ? n : mt(n, St(t, 0, -1)), t = Gr(t)),
                t = null == n ? n : n[t], null == t ? w : t.apply(n, r)
        }

        function Sr(n) {
            return null != n && Lr(Vu(n))
        }

        function Ur(n, t) {
            return n = typeof n == "number" || Rn.test(n) ? +n : -1, t = null == t ? $u : t, -1 < n && 0 == n % 1 && n < t
        }

        function $r(n, t, r) {
            if (!de(r)) return false;
            var e = typeof t;
            return ("number" == e ? Sr(r) && Ur(t, r.length) : "string" == e && t in r) ? (t = r[t], n === n ? n === t : t !== t) : false
        }

        function Wr(n, t) {
            var r = typeof n;
            return "string" == r && dn.test(n) || "number" == r ? true : Wo(n) ? false : !yn.test(n) || null != t && n in Dr(t)
        }

        function Fr(n) {
            var t = Ar(n),
                r = Nn[t];
            return typeof r == "function" && t in zn.prototype ? n === r ? true : (t = Ku(r), !!t && n === t[0]) : false
        }

        function Lr(n) {
            return typeof n == "number" && -1 < n && 0 == n % 1 && n <= $u
        }

        function Nr(n, t) {
            return n === w ? t : Fo(n, t, Nr)
        }

        function Tr(n, t) {
            n = Dr(n);
            for (var r = -1, e = t.length, u = {}; ++r < e;) {
                var o = t[r];
                o in n && (u[o] = n[o])
            }
            return u
        }

        function Pr(n, t) {
            var r = {};
            return vt(n, function(n, e, u) {
                t(n, e, u) && (r[e] = n)
            }), r
        }

        function zr(n) {
            for (var t = Ee(n), r = t.length, e = r && n.length, u = !!e && Lr(e) && (Wo(n) || _e(n) || Ae(n)), o = -1, i = []; ++o < r;) {
                var f = t[o];
                (u && Ur(f, e) || eu.call(n, f)) && i.push(f)
            }
            return i
        }

        function Br(n) {
            return null == n ? [] : Sr(n) ? Nn.support.unindexedChars && Ae(n) ? n.split("") : de(n) ? n : Ye(n) : Se(n);
        }

        function Dr(n) {
            if (Nn.support.unindexedChars && Ae(n)) {
                for (var t = -1, r = n.length, e = Ye(n); ++t < r;) e[t] = n.charAt(t);
                return e
            }
            return de(n) ? n : Ye(n)
        }

        function Mr(n) {
            if (Wo(n)) return n;
            var t = [];
            return u(n).replace(mn, function(n, r, e, u) {
                t.push(e ? u.replace(An, "$1") : r || n)
            }), t
        }

        function qr(n) {
            return n instanceof zn ? n.clone() : new Pn(n.__wrapped__, n.__chain__, qn(n.__actions__))
        }

        function Kr(n, t, r) {
            return n && n.length ? ((r ? $r(n, t, r) : null == t) && (t = 1), St(n, 0 > t ? 0 : t)) : []
        }

        function Vr(n, t, r) {
            var e = n ? n.length : 0;
            return e ? ((r ? $r(n, t, r) : null == t) && (t = 1),
                t = e - (+t || 0), St(n, 0, 0 > t ? 0 : t)) : []
        }

        function Zr(n) {
            return n ? n[0] : w
        }

        function Yr(n, t, e) {
            var u = n ? n.length : 0;
            if (!u) return -1;
            if (typeof e == "number") e = 0 > e ? ju(u + e, 0) : e;
            else if (e) return e = zt(n, t), e < u && (t === t ? t === n[e] : n[e] !== n[e]) ? e : -1;
            return r(n, t, e || 0)
        }

        function Gr(n) {
            var t = n ? n.length : 0;
            return t ? n[t - 1] : w
        }

        function Jr(n) {
            return Kr(n, 1)
        }

        function Xr(n, t, e, u) {
            if (!n || !n.length) return [];
            null != t && typeof t != "boolean" && (u = e, e = $r(n, t, u) ? w : t, t = false);
            var o = br();
            if ((null != e || o !== it) && (e = o(e, u, 3)), t && jr() === r) {
                t = e;
                var i;
                e = -1,
                    u = n.length;
                for (var o = -1, f = []; ++e < u;) {
                    var a = n[e],
                        c = t ? t(a, e, n) : a;
                    e && i === c || (i = c, f[++o] = a)
                }
                n = f
            } else n = Lt(n, e);
            return n
        }

        function Hr(n) {
            if (!n || !n.length) return [];
            var t = -1,
                r = 0;
            n = Zn(n, function(n) {
                return Sr(n) ? (r = ju(n.length, r), true) : void 0
            });
            for (var e = De(r); ++t < r;) e[t] = Xn(n, Ot(t));
            return e
        }

        function Qr(n, t, r) {
            return n && n.length ? (n = Hr(n), null == t ? n : (t = Dt(t, r, 4), Xn(n, function(n) {
                return Qn(n, t, w, true)
            }))) : []
        }

        function ne(n, t) {
            var r = -1,
                e = n ? n.length : 0,
                u = {};
            for (!e || t || Wo(n[0]) || (t = []); ++r < e;) {
                var o = n[r];
                t ? u[o] = t[r] : o && (u[o[0]] = o[1]);
            }
            return u
        }

        function te(n) {
            return n = Nn(n), n.__chain__ = true, n
        }

        function re(n, t, r) {
            return t.call(r, n)
        }

        function ee(n, t, r) {
            var e = Wo(n) ? Vn : lt;
            return r && $r(n, t, r) && (t = w), (typeof t != "function" || r !== w) && (t = br(t, r, 3)), e(n, t)
        }

        function ue(n, t, r) {
            var e = Wo(n) ? Zn : pt;
            return t = br(t, r, 3), e(n, t)
        }

        function oe(n, t, r, e) {
            var u = n ? Vu(n) : 0;
            return Lr(u) || (n = Se(n), u = n.length), r = typeof r != "number" || e && $r(t, r, e) ? 0 : 0 > r ? ju(u + r, 0) : r || 0, typeof n == "string" || !Wo(n) && Ae(n) ? r <= u && -1 < n.indexOf(t, r) : !!u && -1 < jr(n, t, r)
        }

        function ie(n, t, r) {
            var e = Wo(n) ? Xn : bt;
            return t = br(t, r, 3), e(n, t)
        }

        function fe(n, t, r) {
            if (r ? $r(n, t, r) : null == t) {
                n = Br(n);
                var e = n.length;
                return 0 < e ? n[Et(0, e - 1)] : w
            }
            r = -1, n = Oe(n);
            var e = n.length,
                u = e - 1;
            for (t = ku(0 > t ? 0 : +t || 0, e); ++r < t;) {
                var e = Et(r, u),
                    o = n[e];
                n[e] = n[r], n[r] = o
            }
            return n.length = t, n
        }

        function ae(n, t, r) {
            var e = Wo(n) ? nt : Ut;
            return r && $r(n, t, r) && (t = w), (typeof t != "function" || r !== w) && (t = br(t, r, 3)), e(n, t)
        }

        function ce(n, t) {
            var r;
            if (typeof t != "function") {
                if (typeof n != "function") throw new Xe(T);
                var e = n;
                n = t, t = e
            }
            return function() {
                return 0 < --n && (r = t.apply(this, arguments)),
                    1 >= n && (t = w), r
            }
        }

        function le(n, t, r) {
            function e(t, r) {
                r && cu(r), a = p = h = w, t && (_ = wo(), c = n.apply(s, f), p || a || (f = s = w))
            }

            function u() {
                var n = t - (wo() - l);
                0 >= n || n > t ? e(h, a) : p = _u(u, n)
            }

            function o() {
                e(g, p)
            }

            function i() {
                if (f = arguments, l = wo(), s = this, h = g && (p || !y), false === v) var r = y && !p;
                else {
                    a || y || (_ = l);
                    var e = v - (l - _),
                        i = 0 >= e || e > v;
                    i ? (a && (a = cu(a)), _ = l, c = n.apply(s, f)) : a || (a = _u(o, e))
                }
                return i && p ? p = cu(p) : p || t === v || (p = _u(u, t)), r && (i = true, c = n.apply(s, f)), !i || p || a || (f = s = w), c
            }
            var f, a, c, l, s, p, h, _ = 0,
                v = false,
                g = true;
            if (typeof n != "function") throw new Xe(T);
            if (t = 0 > t ? 0 : +t || 0, true === r) var y = true,
                g = false;
            else de(r) && (y = !!r.leading, v = "maxWait" in r && ju(+r.maxWait || 0, t), g = "trailing" in r ? !!r.trailing : g);
            return i.cancel = function() {
                p && cu(p), a && cu(a), _ = 0, a = p = h = w
            }, i
        }

        function se(n, t) {
            if (typeof n != "function" || t && typeof t != "function") throw new Xe(T);
            var r = function() {
                var e = arguments,
                    u = t ? t.apply(this, e) : e[0],
                    o = r.cache;
                return o.has(u) ? o.get(u) : (e = n.apply(this, e), r.cache = o.set(u, e), e)
            };
            return r.cache = new se.Cache, r
        }

        function pe(n, t) {
            if (typeof n != "function") throw new Xe(T);
            return t = ju(t === w ? n.length - 1 : +t || 0, 0),
                function() {
                    for (var r = arguments, e = -1, u = ju(r.length - t, 0), o = De(u); ++e < u;) o[e] = r[t + e];
                    switch (t) {
                        case 0:
                            return n.call(this, o);
                        case 1:
                            return n.call(this, r[0], o);
                        case 2:
                            return n.call(this, r[0], r[1], o)
                    }
                    for (u = De(t + 1), e = -1; ++e < t;) u[e] = r[e];
                    return u[t] = o, n.apply(this, u)
                }
        }

        function he(n, t) {
            return n > t
        }

        function _e(n) {
            return h(n) && Sr(n) && eu.call(n, "callee") && !pu.call(n, "callee")
        }

        function ve(n, t, r, e) {
            return e = (r = typeof r == "function" ? Dt(r, e, 3) : w) ? r(n, t) : w, e === w ? wt(n, t, r) : !!e
        }

        function ge(n) {
            return h(n) && typeof n.message == "string" && ou.call(n) == q;
        }

        function ye(n) {
            return de(n) && ou.call(n) == K
        }

        function de(n) {
            var t = typeof n;
            return !!n && ("object" == t || "function" == t)
        }

        function me(n) {
            return null == n ? false : ye(n) ? fu.test(ru.call(n)) : h(n) && (Gn(n) ? fu : In).test(n)
        }

        function we(n) {
            return typeof n == "number" || h(n) && ou.call(n) == V
        }

        function xe(n) {
            var t;
            if (!h(n) || ou.call(n) != Z || Gn(n) || _e(n) || !(eu.call(n, "constructor") || (t = n.constructor, typeof t != "function" || t instanceof t))) return false;
            var r;
            return Nn.support.ownLast ? (vt(n, function(n, t, e) {
                return r = eu.call(e, t), false
            }), false !== r) : (vt(n, function(n, t) {
                r = t
            }), r === w || eu.call(n, r))
        }

        function be(n) {
            return de(n) && ou.call(n) == Y
        }

        function Ae(n) {
            return typeof n == "string" || h(n) && ou.call(n) == G
        }

        function je(n) {
            return h(n) && Lr(n.length) && !!Fn[ou.call(n)]
        }

        function ke(n, t) {
            return n < t
        }

        function Oe(n) {
            var t = n ? Vu(n) : 0;
            return Lr(t) ? t ? Nn.support.unindexedChars && Ae(n) ? n.split("") : qn(n) : [] : Se(n)
        }

        function Ie(n) {
            return ot(n, Ee(n))
        }

        function Re(n) {
            return dt(n, Ee(n))
        }

        function Ee(n) {
            if (null == n) return [];
            de(n) || (n = Ye(n));
            for (var t = n.length, r = Nn.support, t = t && Lr(t) && (Wo(n) || _e(n) || Ae(n)) && t || 0, e = n.constructor, u = -1, e = ye(e) && e.prototype || nu, o = e === n, i = De(t), f = 0 < t, a = r.enumErrorProps && (n === Qe || n instanceof qe), c = r.enumPrototypes && ye(n); ++u < t;) i[u] = u + "";
            for (var l in n) c && "prototype" == l || a && ("message" == l || "name" == l) || f && Ur(l, t) || "constructor" == l && (o || !eu.call(n, l)) || i.push(l);
            if (r.nonEnumShadows && n !== nu)
                for (t = n === tu ? G : n === Qe ? q : ou.call(n), r = Nu[t] || Nu[Z], t == Z && (e = nu), t = Wn.length; t--;) l = Wn[t], u = r[l], o && u || (u ? !eu.call(n, l) : n[l] === e[l]) || i.push(l);
            return i
        }

        function Ce(n) {
            n = Dr(n);
            for (var t = -1, r = Ko(n), e = r.length, u = De(e); ++t < e;) {
                var o = r[t];
                u[t] = [o, n[o]]
            }
            return u
        }

        function Se(n) {
            return Nt(n, Ko(n))
        }

        function Ue(n) {
            return (n = u(n)) && n.replace(En, a).replace(bn, "");
        }

        function $e(n, t) {
            var r = "";
            if (n = u(n), t = +t, 1 > t || !n || !bu(t)) return r;
            do t % 2 && (r += n), t = wu(t / 2), n += n; while (t);
            return r
        }

        function We(n, t, r) {
            var e = n;
            return (n = u(n)) ? (r ? $r(e, t, r) : null == t) ? n.slice(g(n), y(n) + 1) : (t += "", n.slice(o(n, t), i(n, t) + 1)) : n
        }

        function Fe(n, t, r) {
            return r && $r(n, t, r) && (t = w), n = u(n), n.match(t || Un) || []
        }

        function Le(n, t, r) {
            return r && $r(n, t, r) && (t = w), h(n) ? Te(n) : it(n, t)
        }

        function Ne(n) {
            return n
        }

        function Te(n) {
            return At(ft(n, true))
        }

        function Pe(n, t, r) {
            if (null == r) {
                var e = de(t),
                    u = e ? Ko(t) : w;
                ((u = u && u.length ? dt(t, u) : w) ? u.length : e) || (u = false,
                    r = t, t = n, n = this)
            }
            u || (u = dt(t, Ko(t)));
            var o = true,
                e = -1,
                i = ye(n),
                f = u.length;
            false === r ? o = false : de(r) && "chain" in r && (o = r.chain);
            for (; ++e < f;) {
                r = u[e];
                var a = t[r];
                n[r] = a, i && (n.prototype[r] = function(t) {
                    return function() {
                        var r = this.__chain__;
                        if (o || r) {
                            var e = n(this.__wrapped__);
                            return (e.__actions__ = qn(this.__actions__)).push({
                                func: t,
                                args: arguments,
                                thisArg: n
                            }), e.__chain__ = r, e
                        }
                        return t.apply(n, Hn([this.value()], arguments))
                    }
                }(a))
            }
            return n
        }

        function ze() {}

        function Be(n) {
            return Wr(n) ? Ot(n) : It(n)
        }
        _ = _ ? Jn.defaults(Yn.Object(), _, Jn.pick(Yn, $n)) : Yn;
        var De = _.Array,
            Me = _.Date,
            qe = _.Error,
            Ke = _.Function,
            Ve = _.Math,
            Ze = _.Number,
            Ye = _.Object,
            Ge = _.RegExp,
            Je = _.String,
            Xe = _.TypeError,
            He = De.prototype,
            Qe = qe.prototype,
            nu = Ye.prototype,
            tu = Je.prototype,
            ru = Ke.prototype.toString,
            eu = nu.hasOwnProperty,
            uu = 0,
            ou = nu.toString,
            iu = Yn._,
            fu = Ge("^" + ru.call(eu).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            au = _.ArrayBuffer,
            cu = _.clearTimeout,
            lu = _.parseFloat,
            su = Ve.pow,
            pu = nu.propertyIsEnumerable,
            hu = Or(_, "Set"),
            _u = _.setTimeout,
            vu = He.splice,
            gu = _.Uint8Array,
            yu = Or(_, "WeakMap"),
            du = Ve.ceil,
            mu = Or(Ye, "create"),
            wu = Ve.floor,
            xu = Or(De, "isArray"),
            bu = _.isFinite,
            Au = Or(Ye, "keys"),
            ju = Ve.max,
            ku = Ve.min,
            Ou = Or(Me, "now"),
            Iu = _.parseInt,
            Ru = Ve.random,
            Eu = Ze.NEGATIVE_INFINITY,
            Cu = Ze.POSITIVE_INFINITY,
            Su = 4294967294,
            Uu = 2147483647,
            $u = 9007199254740991,
            Wu = yu && new yu,
            Fu = {},
            Lu = {};
        Lu[X] = _.Float32Array, Lu[H] = _.Float64Array, Lu[Q] = _.Int8Array, Lu[nn] = _.Int16Array, Lu[tn] = _.Int32Array, Lu[rn] = gu, Lu[en] = _.Uint8ClampedArray, Lu[un] = _.Uint16Array, Lu[on] = _.Uint32Array;
        var Nu = {};
        Nu[B] = Nu[M] = Nu[V] = {
            constructor: true,
            toLocaleString: true,
            toString: true,
            valueOf: true
        }, Nu[D] = Nu[G] = {
            constructor: true,
            toString: true,
            valueOf: true
        }, Nu[q] = Nu[K] = Nu[Y] = {
            constructor: true,
            toString: true
        }, Nu[Z] = {
            constructor: true
        }, Kn(Wn, function(n) {
            for (var t in Nu)
                if (eu.call(Nu, t)) {
                    var r = Nu[t];
                    r[n] = eu.call(r, n)
                }
        });
        var Tu = Nn.support = {};
        ! function(n) {
            var t = function() {
                    this.x = n
                },
                r = {
                    0: n,
                    length: n
                },
                e = [];
            t.prototype = {
                valueOf: n,
                y: n
            };
            for (var u in new t) e.push(u);
            Tu.enumErrorProps = pu.call(Qe, "message") || pu.call(Qe, "name"), Tu.enumPrototypes = pu.call(t, "prototype"), Tu.nonEnumShadows = !/valueOf/.test(e), Tu.ownLast = "x" != e[0], Tu.spliceObjects = (vu.call(r, 0, 1), !r[0]), Tu.unindexedChars = "xx" != "x" [0] + Ye("x")[0]
        }(1, 0), Nn.templateSettings = {
            escape: _n,
            evaluate: vn,
            interpolate: gn,
            variable: "",
            imports: {
                _: Nn
            }
        };
        var Pu = function() {
                function n() {}
                return function(t) {
                    if (de(t)) {
                        n.prototype = t;
                        var r = new n;
                        n.prototype = w
                    }
                    return r || {}
                }
            }(),
            zu = Yt(gt),
            Bu = Yt(yt, true),
            Du = Gt(),
            Mu = Gt(true),
            qu = Wu ? function(n, t) {
                return Wu.set(n, t), n
            } : Ne,
            Ku = Wu ? function(n) {
                return Wu.get(n)
            } : ze,
            Vu = Ot("length"),
            Zu = function() {
                var n = 0,
                    t = 0;
                return function(r, e) {
                    var u = wo(),
                        o = W - (u - t);
                    if (t = u, 0 < o) {
                        if (++n >= $) return r
                    } else n = 0;
                    return qu(r, e)
                }
            }(),
            Yu = pe(function(n, t) {
                return h(n) && Sr(n) ? ct(n, _t(t, false, true)) : []
            }),
            Gu = er(),
            Ju = er(true),
            Xu = pe(function(n) {
                for (var t = n.length, e = t, u = De(l), o = jr(), i = o === r, f = []; e--;) {
                    var a = n[e] = Sr(a = n[e]) ? a : [];
                    u[e] = i && 120 <= a.length && mu && hu ? new Dn(e && a) : null;
                }
                var i = n[0],
                    c = -1,
                    l = i ? i.length : 0,
                    s = u[0];
                n: for (; ++c < l;)
                    if (a = i[c], 0 > (s ? Mn(s, a) : o(f, a, 0))) {
                        for (e = t; --e;) {
                            var p = u[e];
                            if (0 > (p ? Mn(p, a) : o(n[e], a, 0))) continue n
                        }
                        s && s.push(a), f.push(a)
                    }
                return f
            }),
            Hu = pe(function(t, r) {
                r = _t(r);
                var e = ut(t, r);
                return Rt(t, r.sort(n)), e
            }),
            Qu = yr(),
            no = yr(true),
            to = pe(function(n) {
                return Lt(_t(n, false, true))
            }),
            ro = pe(function(n, t) {
                return Sr(n) ? ct(n, t) : []
            }),
            eo = pe(Hr),
            uo = pe(function(n) {
                var t = n.length,
                    r = 2 < t ? n[t - 2] : w,
                    e = 1 < t ? n[t - 1] : w;
                return 2 < t && typeof r == "function" ? t -= 2 : (r = 1 < t && typeof e == "function" ? (--t,
                    e) : w, e = w), n.length = t, Qr(n, r, e)
            }),
            oo = pe(function(n) {
                return n = _t(n), this.thru(function(t) {
                    t = Wo(t) ? t : [Dr(t)];
                    for (var r = n, e = -1, u = t.length, o = -1, i = r.length, f = De(u + i); ++e < u;) f[e] = t[e];
                    for (; ++o < i;) f[e++] = r[o];
                    return f
                })
            }),
            io = pe(function(n, t) {
                return Sr(n) && (n = Br(n)), ut(n, _t(t))
            }),
            fo = Vt(function(n, t, r) {
                eu.call(n, r) ? ++n[r] : n[r] = 1
            }),
            ao = rr(zu),
            co = rr(Bu, true),
            lo = ir(Kn, zu),
            so = ir(function(n, t) {
                for (var r = n.length; r-- && false !== t(n[r], r, n););
                return n
            }, Bu),
            po = Vt(function(n, t, r) {
                eu.call(n, r) ? n[r].push(t) : n[r] = [t]
            }),
            ho = Vt(function(n, t, r) {
                n[r] = t
            }),
            _o = pe(function(n, t, r) {
                var e = -1,
                    u = typeof t == "function",
                    o = Wr(t),
                    i = Sr(n) ? De(n.length) : [];
                return zu(n, function(n) {
                    var f = u ? t : o && null != n ? n[t] : w;
                    i[++e] = f ? f.apply(n, r) : Cr(n, t, r)
                }), i
            }),
            vo = Vt(function(n, t, r) {
                n[r ? 0 : 1].push(t)
            }, function() {
                return [
                    [],
                    []
                ]
            }),
            go = pr(Qn, zu),
            yo = pr(function(n, t, r, e) {
                var u = n.length;
                for (e && u && (r = n[--u]); u--;) r = t(r, n[u], u, n);
                return r
            }, Bu),
            mo = pe(function(n, t) {
                if (null == n) return [];
                var r = t[2];
                return r && $r(t[0], t[1], r) && (t.length = 1), Wt(n, _t(t), [])
            }),
            wo = Ou || function() {
                return (new Me).getTime();
            },
            xo = pe(function(n, t, r) {
                var e = b;
                if (r.length) var u = v(r, xo.placeholder),
                    e = e | I;
                return dr(n, e, t, r, u)
            }),
            bo = pe(function(n, t) {
                t = t.length ? _t(t) : Re(n);
                for (var r = -1, e = t.length; ++r < e;) {
                    var u = t[r];
                    n[u] = dr(n[u], b, n)
                }
                return n
            }),
            Ao = pe(function(n, t, r) {
                var e = b | A;
                if (r.length) var u = v(r, Ao.placeholder),
                    e = e | I;
                return dr(t, e, n, r, u)
            }),
            jo = Qt(k),
            ko = Qt(O),
            Oo = pe(function(n, t) {
                return at(n, 1, t)
            }),
            Io = pe(function(n, t, r) {
                return at(n, t, r)
            }),
            Ro = or(),
            Eo = or(true),
            Co = pe(function(n, t) {
                if (t = _t(t), typeof n != "function" || !Vn(t, e)) throw new Xe(T);
                var r = t.length;
                return pe(function(e) {
                    for (var u = ku(e.length, r); u--;) e[u] = t[u](e[u]);
                    return n.apply(this, e)
                })
            }),
            So = sr(I),
            Uo = sr(R),
            $o = pe(function(n, t) {
                return dr(n, C, w, w, w, _t(t))
            }),
            Wo = xu || function(n) {
                return h(n) && Lr(n.length) && ou.call(n) == B
            },
            Fo = Zt(kt),
            Lo = Zt(function(n, t, r) {
                return r ? rt(n, t, r) : et(n, t)
            }),
            No = nr(Lo, function(n, t) {
                return n === w ? t : n
            }),
            To = nr(Fo, Nr),
            Po = ur(gt),
            zo = ur(yt),
            Bo = fr(Du),
            Do = fr(Mu),
            Mo = ar(gt),
            qo = ar(yt),
            Ko = Au ? function(n) {
                var t = null == n ? w : n.constructor;
                return typeof t == "function" && t.prototype === n || (typeof n == "function" ? Nn.support.enumPrototypes : Sr(n)) ? zr(n) : de(n) ? Au(n) : [];
            } : zr,
            Vo = cr(true),
            Zo = cr(),
            Yo = pe(function(n, t) {
                if (null == n) return {};
                if ("function" != typeof t[0]) return t = Xn(_t(t), Je), Tr(n, ct(Ee(n), t));
                var r = Dt(t[0], t[1], 3);
                return Pr(n, function(n, t, e) {
                    return !r(n, t, e)
                })
            }),
            Go = pe(function(n, t) {
                return null == n ? {} : "function" == typeof t[0] ? Pr(n, Dt(t[0], t[1], 3)) : Tr(n, _t(t))
            }),
            Jo = Xt(function(n, t, r) {
                return t = t.toLowerCase(), n + (r ? t.charAt(0).toUpperCase() + t.slice(1) : t)
            }),
            Xo = Xt(function(n, t, r) {
                return n + (r ? "-" : "") + t.toLowerCase()
            }),
            Ho = lr(),
            Qo = lr(true),
            ni = Xt(function(n, t, r) {
                return n + (r ? "_" : "") + t.toLowerCase();
            }),
            ti = Xt(function(n, t, r) {
                return n + (r ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1))
            }),
            ri = pe(function(n, t) {
                try {
                    return n.apply(w, t)
                } catch (r) {
                    return ge(r) ? r : new qe(r)
                }
            }),
            ei = pe(function(n, t) {
                return function(r) {
                    return Cr(r, n, t)
                }
            }),
            ui = pe(function(n, t) {
                return function(r) {
                    return Cr(n, r, t)
                }
            }),
            oi = gr("ceil"),
            ii = gr("floor"),
            fi = tr(he, Eu),
            ai = tr(ke, Cu),
            ci = gr("round");
        return Nn.prototype = Tn.prototype, Pn.prototype = Pu(Tn.prototype), Pn.prototype.constructor = Pn, zn.prototype = Pu(Tn.prototype), zn.prototype.constructor = zn,
            Bn.prototype["delete"] = function(n) {
                return this.has(n) && delete this.__data__[n]
            }, Bn.prototype.get = function(n) {
                return "__proto__" == n ? w : this.__data__[n]
            }, Bn.prototype.has = function(n) {
                return "__proto__" != n && eu.call(this.__data__, n)
            }, Bn.prototype.set = function(n, t) {
                return "__proto__" != n && (this.__data__[n] = t), this
            }, Dn.prototype.push = function(n) {
                var t = this.data;
                typeof n == "string" || de(n) ? t.set.add(n) : t.hash[n] = true
            }, se.Cache = Bn, Nn.after = function(n, t) {
                if (typeof t != "function") {
                    if (typeof n != "function") throw new Xe(T);
                    var r = n;
                    n = t, t = r
                }
                return n = bu(n = +n) ? n : 0,
                    function() {
                        return 1 > --n ? t.apply(this, arguments) : void 0
                    }
            }, Nn.ary = function(n, t, r) {
                return r && $r(n, t, r) && (t = w), t = n && null == t ? n.length : ju(+t || 0, 0), dr(n, E, w, w, w, w, t)
            }, Nn.assign = Lo, Nn.at = io, Nn.before = ce, Nn.bind = xo, Nn.bindAll = bo, Nn.bindKey = Ao, Nn.callback = Le, Nn.chain = te, Nn.chunk = function(n, t, r) {
                t = (r ? $r(n, t, r) : null == t) ? 1 : ju(wu(t) || 1, 1), r = 0;
                for (var e = n ? n.length : 0, u = -1, o = De(du(e / t)); r < e;) o[++u] = St(n, r, r += t);
                return o
            }, Nn.compact = function(n) {
                for (var t = -1, r = n ? n.length : 0, e = -1, u = []; ++t < r;) {
                    var o = n[t];
                    o && (u[++e] = o)
                }
                return u
            }, Nn.constant = function(n) {
                return function() {
                    return n
                }
            }, Nn.countBy = fo, Nn.create = function(n, t, r) {
                var e = Pu(n);
                return r && $r(n, t, r) && (t = w), t ? et(e, t) : e
            }, Nn.curry = jo, Nn.curryRight = ko, Nn.debounce = le, Nn.defaults = No, Nn.defaultsDeep = To, Nn.defer = Oo, Nn.delay = Io, Nn.difference = Yu, Nn.drop = Kr, Nn.dropRight = Vr, Nn.dropRightWhile = function(n, t, r) {
                return n && n.length ? Tt(n, br(t, r, 3), true, true) : []
            }, Nn.dropWhile = function(n, t, r) {
                return n && n.length ? Tt(n, br(t, r, 3), true) : []
            }, Nn.fill = function(n, t, r, e) {
                var u = n ? n.length : 0;
                if (!u) return [];
                for (r && typeof r != "number" && $r(n, t, r) && (r = 0, e = u), u = n.length, r = null == r ? 0 : +r || 0, 0 > r && (r = -r > u ? 0 : u + r), e = e === w || e > u ? u : +e || 0, 0 > e && (e += u), u = r > e ? 0 : e >>> 0, r >>>= 0; r < u;) n[r++] = t;
                return n
            }, Nn.filter = ue, Nn.flatten = function(n, t, r) {
                var e = n ? n.length : 0;
                return r && $r(n, t, r) && (t = false), e ? _t(n, t) : []
            }, Nn.flattenDeep = function(n) {
                return n && n.length ? _t(n, true) : []
            }, Nn.flow = Ro, Nn.flowRight = Eo, Nn.forEach = lo, Nn.forEachRight = so, Nn.forIn = Bo, Nn.forInRight = Do, Nn.forOwn = Mo, Nn.forOwnRight = qo, Nn.functions = Re,
            Nn.groupBy = po, Nn.indexBy = ho, Nn.initial = function(n) {
                return Vr(n, 1)
            }, Nn.intersection = Xu, Nn.invert = function(n, t, r) {
                r && $r(n, t, r) && (t = w), r = -1;
                for (var e = Ko(n), u = e.length, o = {}; ++r < u;) {
                    var i = e[r],
                        f = n[i];
                    t ? eu.call(o, f) ? o[f].push(i) : o[f] = [i] : o[f] = i
                }
                return o
            }, Nn.invoke = _o, Nn.keys = Ko, Nn.keysIn = Ee, Nn.map = ie, Nn.mapKeys = Vo, Nn.mapValues = Zo, Nn.matches = Te, Nn.matchesProperty = function(n, t) {
                return jt(n, ft(t, true))
            }, Nn.memoize = se, Nn.merge = Fo, Nn.method = ei, Nn.methodOf = ui, Nn.mixin = Pe, Nn.modArgs = Co, Nn.negate = function(n) {
                if (typeof n != "function") throw new Xe(T);
                return function() {
                    return !n.apply(this, arguments)
                }
            }, Nn.omit = Yo, Nn.once = function(n) {
                return ce(2, n)
            }, Nn.pairs = Ce, Nn.partial = So, Nn.partialRight = Uo, Nn.partition = vo, Nn.pick = Go, Nn.pluck = function(n, t) {
                return ie(n, Be(t))
            }, Nn.property = Be, Nn.propertyOf = function(n) {
                return function(t) {
                    return mt(n, Mr(t), t + "")
                }
            }, Nn.pull = function() {
                var n = arguments,
                    t = n[0];
                if (!t || !t.length) return t;
                for (var r = 0, e = jr(), u = n.length; ++r < u;)
                    for (var o = 0, i = n[r]; - 1 < (o = e(t, i, o));) vu.call(t, o, 1);
                return t
            }, Nn.pullAt = Hu, Nn.range = function(n, t, r) {
                r && $r(n, t, r) && (t = r = w), n = +n || 0, r = null == r ? 1 : +r || 0, null == t ? (t = n, n = 0) : t = +t || 0;
                var e = -1;
                t = ju(du((t - n) / (r || 1)), 0);
                for (var u = De(t); ++e < t;) u[e] = n, n += r;
                return u
            }, Nn.rearg = $o, Nn.reject = function(n, t, r) {
                var e = Wo(n) ? Zn : pt;
                return t = br(t, r, 3), e(n, function(n, r, e) {
                    return !t(n, r, e)
                })
            }, Nn.remove = function(n, t, r) {
                var e = [];
                if (!n || !n.length) return e;
                var u = -1,
                    o = [],
                    i = n.length;
                for (t = br(t, r, 3); ++u < i;) r = n[u], t(r, u, n) && (e.push(r), o.push(u));
                return Rt(n, o), e
            }, Nn.rest = Jr, Nn.restParam = pe, Nn.set = function(n, t, r) {
                if (null == n) return n;
                var e = t + "";
                t = null != n[e] || Wr(t, n) ? [e] : Mr(t);
                for (var e = -1, u = t.length, o = u - 1, i = n; null != i && ++e < u;) {
                    var f = t[e];
                    de(i) && (e == o ? i[f] = r : null == i[f] && (i[f] = Ur(t[e + 1]) ? [] : {})), i = i[f]
                }
                return n
            }, Nn.shuffle = function(n) {
                return fe(n, Cu)
            }, Nn.slice = function(n, t, r) {
                var e = n ? n.length : 0;
                return e ? (r && typeof r != "number" && $r(n, t, r) && (t = 0, r = e), St(n, t, r)) : []
            }, Nn.sortBy = function(n, t, r) {
                if (null == n) return [];
                r && $r(n, t, r) && (t = w);
                var e = -1;
                return t = br(t, r, 3), n = bt(n, function(n, r, u) {
                    return {
                        a: t(n, r, u),
                        b: ++e,
                        c: n
                    }
                }), $t(n, f)
            }, Nn.sortByAll = mo,
            Nn.sortByOrder = function(n, t, r, e) {
                return null == n ? [] : (e && $r(t, r, e) && (r = w), Wo(t) || (t = null == t ? [] : [t]), Wo(r) || (r = null == r ? [] : [r]), Wt(n, t, r))
            }, Nn.spread = function(n) {
                if (typeof n != "function") throw new Xe(T);
                return function(t) {
                    return n.apply(this, t)
                }
            }, Nn.take = function(n, t, r) {
                return n && n.length ? ((r ? $r(n, t, r) : null == t) && (t = 1), St(n, 0, 0 > t ? 0 : t)) : []
            }, Nn.takeRight = function(n, t, r) {
                var e = n ? n.length : 0;
                return e ? ((r ? $r(n, t, r) : null == t) && (t = 1), t = e - (+t || 0), St(n, 0 > t ? 0 : t)) : []
            }, Nn.takeRightWhile = function(n, t, r) {
                return n && n.length ? Tt(n, br(t, r, 3), false, true) : [];
            }, Nn.takeWhile = function(n, t, r) {
                return n && n.length ? Tt(n, br(t, r, 3)) : []
            }, Nn.tap = function(n, t, r) {
                return t.call(r, n), n
            }, Nn.throttle = function(n, t, r) {
                var e = true,
                    u = true;
                if (typeof n != "function") throw new Xe(T);
                return false === r ? e = false : de(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), le(n, t, {
                    leading: e,
                    maxWait: +t,
                    trailing: u
                })
            }, Nn.thru = re, Nn.times = function(n, t, r) {
                if (n = wu(n), 1 > n || !bu(n)) return [];
                var e = -1,
                    u = De(ku(n, 4294967295));
                for (t = Dt(t, r, 1); ++e < n;) 4294967295 > e ? u[e] = t(e) : t(e);
                return u
            }, Nn.toArray = Oe,
            Nn.toPlainObject = Ie, Nn.transform = function(n, t, r, e) {
                var u = Wo(n) || je(n);
                return t = br(t, e, 4), null == r && (u || de(n) ? (e = n.constructor, r = u ? Wo(n) ? new e : [] : Pu(ye(e) ? e.prototype : w)) : r = {}), (u ? Kn : gt)(n, function(n, e, u) {
                    return t(r, n, e, u)
                }), r
            }, Nn.union = to, Nn.uniq = Xr, Nn.unzip = Hr, Nn.unzipWith = Qr, Nn.values = Se, Nn.valuesIn = function(n) {
                return Nt(n, Ee(n))
            }, Nn.where = function(n, t) {
                return ue(n, At(t))
            }, Nn.without = ro, Nn.wrap = function(n, t) {
                return t = null == t ? Ne : t, dr(t, I, w, [n], [])
            }, Nn.xor = function() {
                for (var n = -1, t = arguments.length; ++n < t;) {
                    var r = arguments[n];
                    if (Sr(r)) var e = e ? Hn(ct(e, r), ct(r, e)) : r
                }
                return e ? Lt(e) : []
            }, Nn.zip = eo, Nn.zipObject = ne, Nn.zipWith = uo, Nn.backflow = Eo, Nn.collect = ie, Nn.compose = Eo, Nn.each = lo, Nn.eachRight = so, Nn.extend = Lo, Nn.iteratee = Le, Nn.methods = Re, Nn.object = ne, Nn.select = ue, Nn.tail = Jr, Nn.unique = Xr, Pe(Nn, Nn), Nn.add = function(n, t) {
                return (+n || 0) + (+t || 0)
            }, Nn.attempt = ri, Nn.camelCase = Jo, Nn.capitalize = function(n) {
                return (n = u(n)) && n.charAt(0).toUpperCase() + n.slice(1)
            }, Nn.ceil = oi, Nn.clone = function(n, t, r, e) {
                return t && typeof t != "boolean" && $r(n, t, r) ? t = false : typeof t == "function" && (e = r,
                    r = t, t = false), typeof r == "function" ? ft(n, t, Dt(r, e, 3)) : ft(n, t)
            }, Nn.cloneDeep = function(n, t, r) {
                return typeof t == "function" ? ft(n, true, Dt(t, r, 3)) : ft(n, true)
            }, Nn.deburr = Ue, Nn.endsWith = function(n, t, r) {
                n = u(n), t += "";
                var e = n.length;
                return r = r === w ? e : ku(0 > r ? 0 : +r || 0, e), r -= t.length, 0 <= r && n.indexOf(t, r) == r
            }, Nn.escape = function(n) {
                return (n = u(n)) && hn.test(n) ? n.replace(sn, c) : n
            }, Nn.escapeRegExp = function(n) {
                return (n = u(n)) && xn.test(n) ? n.replace(wn, l) : n || "(?:)"
            }, Nn.every = ee, Nn.find = ao, Nn.findIndex = Gu, Nn.findKey = Po, Nn.findLast = co,
            Nn.findLastIndex = Ju, Nn.findLastKey = zo, Nn.findWhere = function(n, t) {
                return ao(n, At(t))
            }, Nn.first = Zr, Nn.floor = ii, Nn.get = function(n, t, r) {
                return n = null == n ? w : mt(n, Mr(t), t + ""), n === w ? r : n
            }, Nn.gt = he, Nn.gte = function(n, t) {
                return n >= t
            }, Nn.has = function(n, t) {
                if (null == n) return false;
                var r = eu.call(n, t);
                if (!r && !Wr(t)) {
                    if (t = Mr(t), n = 1 == t.length ? n : mt(n, St(t, 0, -1)), null == n) return false;
                    t = Gr(t), r = eu.call(n, t)
                }
                return r || Lr(n.length) && Ur(t, n.length) && (Wo(n) || _e(n) || Ae(n))
            }, Nn.identity = Ne, Nn.includes = oe, Nn.indexOf = Yr, Nn.inRange = function(n, t, r) {
                return t = +t || 0, r === w ? (r = t, t = 0) : r = +r || 0, n >= ku(t, r) && n < ju(t, r)
            }, Nn.isArguments = _e, Nn.isArray = Wo, Nn.isBoolean = function(n) {
                return true === n || false === n || h(n) && ou.call(n) == D
            }, Nn.isDate = function(n) {
                return h(n) && ou.call(n) == M
            }, Nn.isElement = function(n) {
                return !!n && 1 === n.nodeType && h(n) && !xe(n)
            }, Nn.isEmpty = function(n) {
                return null == n ? true : Sr(n) && (Wo(n) || Ae(n) || _e(n) || h(n) && ye(n.splice)) ? !n.length : !Ko(n).length
            }, Nn.isEqual = ve, Nn.isError = ge, Nn.isFinite = function(n) {
                return typeof n == "number" && bu(n)
            }, Nn.isFunction = ye, Nn.isMatch = function(n, t, r, e) {
                return r = typeof r == "function" ? Dt(r, e, 3) : w, xt(n, kr(t), r)
            }, Nn.isNaN = function(n) {
                return we(n) && n != +n
            }, Nn.isNative = me, Nn.isNull = function(n) {
                return null === n
            }, Nn.isNumber = we, Nn.isObject = de, Nn.isPlainObject = xe, Nn.isRegExp = be, Nn.isString = Ae, Nn.isTypedArray = je, Nn.isUndefined = function(n) {
                return n === w
            }, Nn.kebabCase = Xo, Nn.last = Gr, Nn.lastIndexOf = function(n, t, r) {
                var e = n ? n.length : 0;
                if (!e) return -1;
                var u = e;
                if (typeof r == "number") u = (0 > r ? ju(e + r, 0) : ku(r || 0, e - 1)) + 1;
                else if (r) return u = zt(n, t, true) - 1, n = n[u], (t === t ? t === n : n !== n) ? u : -1;
                if (t !== t) return p(n, u, true);
                for (; u--;)
                    if (n[u] === t) return u;
                return -1
            }, Nn.lt = ke, Nn.lte = function(n, t) {
                return n <= t
            }, Nn.max = fi, Nn.min = ai, Nn.noConflict = function() {
                return Yn._ = iu, this
            }, Nn.noop = ze, Nn.now = wo, Nn.pad = function(n, t, r) {
                n = u(n), t = +t;
                var e = n.length;
                return e < t && bu(t) ? (e = (t - e) / 2, t = wu(e), e = du(e), r = _r("", e, r), r.slice(0, t) + n + r) : n
            }, Nn.padLeft = Ho, Nn.padRight = Qo, Nn.parseInt = function(n, t, r) {
                return (r ? $r(n, t, r) : null == t) ? t = 0 : t && (t = +t), n = We(n), Iu(n, t || (On.test(n) ? 16 : 10))
            }, Nn.random = function(n, t, r) {
                r && $r(n, t, r) && (t = r = w);
                var e = null == n,
                    u = null == t;
                return null == r && (u && typeof n == "boolean" ? (r = n, n = 1) : typeof t == "boolean" && (r = t, u = true)), e && u && (t = 1, u = false), n = +n || 0, u ? (t = n, n = 0) : t = +t || 0, r || n % 1 || t % 1 ? (r = Ru(), ku(n + r * (t - n + lu("1e-" + ((r + "").length - 1))), t)) : Et(n, t)
            }, Nn.reduce = go, Nn.reduceRight = yo, Nn.repeat = $e, Nn.result = function(n, t, r) {
                var e = null == n ? w : Dr(n)[t];
                return e === w && (null == n || Wr(t, n) || (t = Mr(t), n = 1 == t.length ? n : mt(n, St(t, 0, -1)), e = null == n ? w : Dr(n)[Gr(t)]), e = e === w ? r : e), ye(e) ? e.call(n) : e
            }, Nn.round = ci, Nn.runInContext = m, Nn.size = function(n) {
                var t = n ? Vu(n) : 0;
                return Lr(t) ? t : Ko(n).length
            }, Nn.snakeCase = ni, Nn.some = ae, Nn.sortedIndex = Qu, Nn.sortedLastIndex = no, Nn.startCase = ti, Nn.startsWith = function(n, t, r) {
                return n = u(n), r = null == r ? 0 : ku(0 > r ? 0 : +r || 0, n.length), n.lastIndexOf(t, r) == r
            }, Nn.sum = function(n, t, r) {
                if (r && $r(n, t, r) && (t = w), t = br(t, r, 3), 1 == t.length) {
                    n = Wo(n) ? n : Br(n), r = n.length;
                    for (var e = 0; r--;) e += +t(n[r]) || 0;
                    n = e
                } else n = Ft(n, t);
                return n
            }, Nn.template = function(n, t, r) {
                var e = Nn.templateSettings;
                r && $r(n, t, r) && (t = r = w), n = u(n), t = rt(et({}, r || t), e, tt), r = rt(et({}, t.imports), e.imports, tt);
                var o, i, f = Ko(r),
                    a = Nt(r, f),
                    c = 0;
                r = t.interpolate || Cn;
                var l = "__p+='";
                r = Ge((t.escape || Cn).source + "|" + r.source + "|" + (r === gn ? jn : Cn).source + "|" + (t.evaluate || Cn).source + "|$", "g");
                var p = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";
                if (n.replace(r, function(t, r, e, u, f, a) {
                        return e || (e = u), l += n.slice(c, a).replace(Sn, s), r && (o = true, l += "'+__e(" + r + ")+'"), f && (i = true, l += "';" + f + ";\n__p+='"), e && (l += "'+((__t=(" + e + "))==null?'':__t)+'"), c = a + t.length, t
                    }), l += "';", (t = t.variable) || (l = "with(obj){" + l + "}"), l = (i ? l.replace(fn, "") : l).replace(an, "$1").replace(cn, "$1;"),
                    l = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (o ? ",__e=_.escape" : "") + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + l + "return __p}", t = ri(function() {
                        return Ke(f, p + "return " + l).apply(w, a)
                    }), t.source = l, ge(t)) throw t;
                return t
            }, Nn.trim = We, Nn.trimLeft = function(n, t, r) {
                var e = n;
                return (n = u(n)) ? n.slice((r ? $r(e, t, r) : null == t) ? g(n) : o(n, t + "")) : n
            }, Nn.trimRight = function(n, t, r) {
                var e = n;
                return (n = u(n)) ? (r ? $r(e, t, r) : null == t) ? n.slice(0, y(n) + 1) : n.slice(0, i(n, t + "") + 1) : n;
            }, Nn.trunc = function(n, t, r) {
                r && $r(n, t, r) && (t = w);
                var e = S;
                if (r = U, null != t)
                    if (de(t)) {
                        var o = "separator" in t ? t.separator : o,
                            e = "length" in t ? +t.length || 0 : e;
                        r = "omission" in t ? u(t.omission) : r
                    } else e = +t || 0;
                if (n = u(n), e >= n.length) return n;
                if (e -= r.length, 1 > e) return r;
                if (t = n.slice(0, e), null == o) return t + r;
                if (be(o)) {
                    if (n.slice(e).search(o)) {
                        var i, f = n.slice(0, e);
                        for (o.global || (o = Ge(o.source, (kn.exec(o) || "") + "g")), o.lastIndex = 0; n = o.exec(f);) i = n.index;
                        t = t.slice(0, null == i ? e : i)
                    }
                } else n.indexOf(o, e) != e && (o = t.last
                    (o), -1 < o && (t = t.slice(0, o)));
                return t + r
            }, Nn.unescape = function(n) {
                return (n = u(n)) && pn.test(n) ? n.replace(ln, d) : n
            }, Nn.uniqueId = function(n) {
                var t = ++uu;
                return u(n) + t
            }, Nn.words = Fe, Nn.all = ee, Nn.any = ae, Nn.contains = oe, Nn.eq = ve, Nn.detect = ao, Nn.foldl = go, Nn.foldr = yo, Nn.head = Zr, Nn.include = oe, Nn.inject = go, Pe(Nn, function() {
                var n = {};
                return gt(Nn, function(t, r) {
                    Nn.prototype[r] || (n[r] = t)
                }), n
            }(), false), Nn.sample = fe, Nn.prototype.sample = function(n) {
                return this.__chain__ || null != n ? this.thru(function(t) {
                    return fe(t, n)
                }) : fe(this.value());
            }, Nn.VERSION = x, Kn("bind bindKey curry curryRight partial partialRight".split(" "), function(n) {
                Nn[n].placeholder = Nn
            }), Kn(["drop", "take"], function(n, t) {
                zn.prototype[n] = function(r) {
                    var e = this.__filtered__;
                    if (e && !t) return new zn(this);
                    r = null == r ? 1 : ju(wu(r) || 0, 0);
                    var u = this.clone();
                    return e ? u.__takeCount__ = ku(u.__takeCount__, r) : u.__views__.push({
                        size: r,
                        type: n + (0 > u.__dir__ ? "Right" : "")
                    }), u
                }, zn.prototype[n + "Right"] = function(t) {
                    return this.reverse()[n](t).reverse()
                }
            }), Kn(["filter", "map", "takeWhile"], function(n, t) {
                var r = t + 1,
                    e = r != N;
                zn.prototype[n] = function(n, t) {
                    var u = this.clone();
                    return u.__iteratees__.push({
                        iteratee: br(n, t, 1),
                        type: r
                    }), u.__filtered__ = u.__filtered__ || e, u
                }
            }), Kn(["first", "last"], function(n, t) {
                var r = "take" + (t ? "Right" : "");
                zn.prototype[n] = function() {
                    return this[r](1).value()[0]
                }
            }), Kn(["initial", "rest"], function(n, t) {
                var r = "drop" + (t ? "" : "Right");
                zn.prototype[n] = function() {
                    return this.__filtered__ ? new zn(this) : this[r](1)
                }
            }), Kn(["pluck", "where"], function(n, t) {
                var r = t ? "filter" : "map",
                    e = t ? At : Be;
                zn.prototype[n] = function(n) {
                    return this[r](e(n))
                }
            }), zn.prototype.compact = function() {
                return this.filter(Ne)
            }, zn.prototype.reject = function(n, t) {
                return n = br(n, t, 1), this.filter(function(t) {
                    return !n(t)
                })
            }, zn.prototype.slice = function(n, t) {
                n = null == n ? 0 : +n || 0;
                var r = this;
                return r.__filtered__ && (0 < n || 0 > t) ? new zn(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== w && (t = +t || 0, r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r)
            }, zn.prototype.takeRightWhile = function(n, t) {
                return this.reverse().takeWhile(n, t).reverse()
            }, zn.prototype.toArray = function() {
                return this.take(Cu);
            }, gt(zn.prototype, function(n, t) {
                var r = /^(?:filter|map|reject)|While$/.test(t),
                    e = /^(?:first|last)$/.test(t),
                    u = Nn[e ? "take" + ("last" == t ? "Right" : "") : t];
                u && (Nn.prototype[t] = function() {
                    var t = e ? [1] : arguments,
                        o = this.__chain__,
                        i = this.__wrapped__,
                        f = !!this.__actions__.length,
                        a = i instanceof zn,
                        c = t[0],
                        l = a || Wo(i);
                    l && r && typeof c == "function" && 1 != c.length && (a = l = false);
                    var s = function(n) {
                            return e && o ? u(n, 1)[0] : u.apply(w, Hn([n], t))
                        },
                        c = {
                            func: re,
                            args: [s],
                            thisArg: w
                        },
                        f = a && !f;
                    return e && !o ? f ? (i = i.clone(), i.__actions__.push(c),
                        n.call(i)) : u.call(w, this.value())[0] : !e && l ? (i = f ? i : new zn(this), i = n.apply(i, t), i.__actions__.push(c), new Pn(i, o)) : this.thru(s)
                })
            }), Kn("join pop push replace shift sort splice split unshift".split(" "), function(n) {
                var t = (/^(?:replace|split)$/.test(n) ? tu : He)[n],
                    r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                    e = !Tu.spliceObjects && /^(?:pop|shift|splice)$/.test(n),
                    u = /^(?:join|pop|replace|shift)$/.test(n),
                    o = e ? function() {
                        var n = t.apply(this, arguments);
                        return 0 === this.length && delete this[0], n
                    } : t;
                Nn.prototype[n] = function() {
                    var n = arguments;
                    return u && !this.__chain__ ? o.apply(this.value(), n) : this[r](function(t) {
                        return o.apply(t, n)
                    })
                }
            }), gt(zn.prototype, function(n, t) {
                var r = Nn[t];
                if (r) {
                    var e = r.name + "";
                    (Fu[e] || (Fu[e] = [])).push({
                        name: t,
                        func: r
                    })
                }
            }), Fu[hr(w, A).name] = [{
                name: "wrapper",
                func: w
            }], zn.prototype.clone = function() {
                var n = new zn(this.__wrapped__);
                return n.__actions__ = qn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = qn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = qn(this.__views__),
                    n
            }, zn.prototype.reverse = function() {
                if (this.__filtered__) {
                    var n = new zn(this);
                    n.__dir__ = -1, n.__filtered__ = true
                } else n = this.clone(), n.__dir__ *= -1;
                return n
            }, zn.prototype.value = function() {
                var n, t = this.__wrapped__.value(),
                    r = this.__dir__,
                    e = Wo(t),
                    u = 0 > r,
                    o = e ? t.length : 0;
                n = 0;
                for (var i = o, f = this.__views__, a = -1, c = f.length; ++a < c;) {
                    var l = f[a],
                        s = l.size;
                    switch (l.type) {
                        case "drop":
                            n += s;
                            break;
                        case "dropRight":
                            i -= s;
                            break;
                        case "take":
                            i = ku(i, n + s);
                            break;
                        case "takeRight":
                            n = ju(n, i - s)
                    }
                }
                if (n = {
                        start: n,
                        end: i
                    }, i = n.start, f = n.end, n = f - i,
                    u = u ? f : i - 1, i = this.__iteratees__, f = i.length, a = 0, c = ku(n, this.__takeCount__), !e || o < F || o == n && c == n) return Pt(t, this.__actions__);
                e = [];
                n: for (; n-- && a < c;) {
                    for (u += r, o = -1, l = t[u]; ++o < f;) {
                        var p = i[o],
                            s = p.type,
                            p = p.iteratee(l);
                        if (s == N) l = p;
                        else if (!p) {
                            if (s == L) continue n;
                            break n
                        }
                    }
                    e[a++] = l
                }
                return e
            }, Nn.prototype.chain = function() {
                return te(this)
            }, Nn.prototype.commit = function() {
                return new Pn(this.value(), this.__chain__)
            }, Nn.prototype.concat = oo, Nn.prototype.plant = function(n) {
                for (var t, r = this; r instanceof Tn;) {
                    var e = qr(r);
                    t ? u.__wrapped__ = e : t = e;
                    var u = e,
                        r = r.__wrapped__
                }
                return u.__wrapped__ = n, t
            }, Nn.prototype.reverse = function() {
                var n = this.__wrapped__,
                    t = function(n) {
                        return n.reverse()
                    };
                return n instanceof zn ? (this.__actions__.length && (n = new zn(this)), n = n.reverse(), n.__actions__.push({
                    func: re,
                    args: [t],
                    thisArg: w
                }), new Pn(n, this.__chain__)) : this.thru(t)
            }, Nn.prototype.toString = function() {
                return this.value() + ""
            }, Nn.prototype.run = Nn.prototype.toJSON = Nn.prototype.valueOf = Nn.prototype.value = function() {
                return Pt(this.__wrapped__, this.__actions__);
            }, Nn.prototype.collect = Nn.prototype.map, Nn.prototype.head = Nn.prototype.first, Nn.prototype.select = Nn.prototype.filter, Nn.prototype.tail = Nn.prototype.rest, Nn
    }
    var w, x = "3.10.1",
        b = 1,
        A = 2,
        j = 4,
        k = 8,
        O = 16,
        I = 32,
        R = 64,
        E = 128,
        C = 256,
        S = 30,
        U = "...",
        $ = 150,
        W = 16,
        F = 200,
        L = 1,
        N = 2,
        T = "Expected a function",
        P = "__lodash_placeholder__",
        z = "[object Arguments]",
        B = "[object Array]",
        D = "[object Boolean]",
        M = "[object Date]",
        q = "[object Error]",
        K = "[object Function]",
        V = "[object Number]",
        Z = "[object Object]",
        Y = "[object RegExp]",
        G = "[object String]",
        J = "[object ArrayBuffer]",
        X = "[object Float32Array]",
        H = "[object Float64Array]",
        Q = "[object Int8Array]",
        nn = "[object Int16Array]",
        tn = "[object Int32Array]",
        rn = "[object Uint8Array]",
        en = "[object Uint8ClampedArray]",
        un = "[object Uint16Array]",
        on = "[object Uint32Array]",
        fn = /\b__p\+='';/g,
        an = /\b(__p\+=)''\+/g,
        cn = /(__e\(.*?\)|\b__t\))\+'';/g,
        ln = /&(?:amp|lt|gt|quot|#39|#96);/g,
        sn = /[&<>"'`]/g,
        pn = RegExp(ln.source),
        hn = RegExp(sn.source),
        _n = /<%-([\s\S]+?)%>/g,
        vn = /<%([\s\S]+?)%>/g,
        gn = /<%=([\s\S]+?)%>/g,
        yn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
        dn = /^\w*$/,
        mn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        wn = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
        xn = RegExp(wn.source),
        bn = /[\u0300-\u036f\ufe20-\ufe23]/g,
        An = /\\(\\)?/g,
        jn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        kn = /\w*$/,
        On = /^0[xX]/,
        In = /^\[object .+?Constructor\]$/,
        Rn = /^\d+$/,
        En = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
        Cn = /($^)/,
        Sn = /['\n\r\u2028\u2029\\]/g,
        Un = RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+", "g"),
        $n = "Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),
        Wn = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Fn = {};
    Fn[X] = Fn[H] = Fn[Q] = Fn[nn] = Fn[tn] = Fn[rn] = Fn[en] = Fn[un] = Fn[on] = true, Fn[z] = Fn[B] = Fn[J] = Fn[D] = Fn[M] = Fn[q] = Fn[K] = Fn["[object Map]"] = Fn[V] = Fn[Z] = Fn[Y] = Fn["[object Set]"] = Fn[G] = Fn["[object WeakMap]"] = false;
    var Ln = {};
    Ln[z] = Ln[B] = Ln[J] = Ln[D] = Ln[M] = Ln[X] = Ln[H] = Ln[Q] = Ln[nn] = Ln[tn] = Ln[V] = Ln[Z] = Ln[Y] = Ln[G] = Ln[rn] = Ln[en] = Ln[un] = Ln[on] = true, Ln[q] = Ln[K] = Ln["[object Map]"] = Ln["[object Set]"] = Ln["[object WeakMap]"] = false;
    var Nn = {
            "\xc0": "A",
            "\xc1": "A",
            "\xc2": "A",
            "\xc3": "A",
            "\xc4": "A",
            "\xc5": "A",
            "\xe0": "a",
            "\xe1": "a",
            "\xe2": "a",
            "\xe3": "a",
            "\xe4": "a",
            "\xe5": "a",
            "\xc7": "C",
            "\xe7": "c",
            "\xd0": "D",
            "\xf0": "d",
            "\xc8": "E",
            "\xc9": "E",
            "\xca": "E",
            "\xcb": "E",
            "\xe8": "e",
            "\xe9": "e",
            "\xea": "e",
            "\xeb": "e",
            "\xcc": "I",
            "\xcd": "I",
            "\xce": "I",
            "\xcf": "I",
            "\xec": "i",
            "\xed": "i",
            "\xee": "i",
            "\xef": "i",
            "\xd1": "N",
            "\xf1": "n",
            "\xd2": "O",
            "\xd3": "O",
            "\xd4": "O",
            "\xd5": "O",
            "\xd6": "O",
            "\xd8": "O",
            "\xf2": "o",
            "\xf3": "o",
            "\xf4": "o",
            "\xf5": "o",
            "\xf6": "o",
            "\xf8": "o",
            "\xd9": "U",
            "\xda": "U",
            "\xdb": "U",
            "\xdc": "U",
            "\xf9": "u",
            "\xfa": "u",
            "\xfb": "u",
            "\xfc": "u",
            "\xdd": "Y",
            "\xfd": "y",
            "\xff": "y",
            "\xc6": "Ae",
            "\xe6": "ae",
            "\xde": "Th",
            "\xfe": "th",
            "\xdf": "ss"
        },
        Tn = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;"
        },
        Pn = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`"
        },
        zn = {
            "function": true,
            object: true
        },
        Bn = {
            0: "x30",
            1: "x31",
            2: "x32",
            3: "x33",
            4: "x34",
            5: "x35",
            6: "x36",
            7: "x37",
            8: "x38",
            9: "x39",
            A: "x41",
            B: "x42",
            C: "x43",
            D: "x44",
            E: "x45",
            F: "x46",
            a: "x61",
            b: "x62",
            c: "x63",
            d: "x64",
            e: "x65",
            f: "x66",
            n: "x6e",
            r: "x72",
            t: "x74",
            u: "x75",
            v: "x76",
            x: "x78"
        },
        Dn = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        Mn = zn[typeof exports] && exports && !exports.nodeType && exports,
        qn = zn[typeof module] && module && !module.nodeType && module,
        Kn = zn[typeof self] && self && self.Object && self,
        Vn = zn[typeof window] && window && window.Object && window,
        Zn = qn && qn.exports === Mn && Mn,
        Yn = Mn && qn && typeof global == "object" && global && global.Object && global || Vn !== (this && this.window) && Vn || Kn || this,
        Gn = function() {
            try {
                Object({
                    toString: 0
                } + "")
            } catch (n) {
                return function() {
                    return false
                }
            }
            return function(n) {
                return typeof n.toString != "function" && typeof(n + "") == "string"
            }
        }(),
        Jn = m();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (Yn._ = Jn, define(function() {
        return Jn
    })) : Mn && qn ? Zn ? (qn.exports = Jn)._ = Jn : Mn._ = Jn : Yn._ = Jn
}).call(this);





/*
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.9
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(f) {
    var y = "1.6.9",
        p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        A = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        B = "tap",
        j = "doubletap",
        b = "longtap",
        z = "hold",
        E = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        C = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: true
    };
    f.fn.swipe = function(H) {
        var G = f(this),
            F = G.data(C);
        if (F && typeof H === "string") {
            if (F[H]) {
                return F[H].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + H + " does not exist on jQuery.swipe")
            }
        } else {
            if (!F && (typeof H === "object" || !H)) {
                return w.apply(this, arguments)
            }
        }
        return G
    };
    f.fn.swipe.version = y;
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipe.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: A
    };
    f.fn.swipe.pageScroll = {
        NONE: m,
        HORIZONTAL: E,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: i
    };

    function w(F) {
        if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) {
            F.allowPageScroll = m
        }
        if (F.click !== undefined && F.tap === undefined) {
            F.tap = F.click
        }
        if (!F) {
            F = {}
        }
        F = f.extend({}, f.fn.swipe.defaults, F);
        return this.each(function() {
            var H = f(this);
            var G = H.data(C);
            if (!G) {
                G = new D(this, F);
                H.data(C, G)
            }
        })
    }

    function D(a5, aw) {
        var aA = (a || d || !aw.fallbackToMouseEvents),
            K = aA ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            az = aA ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            V = aA ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            T = aA ? null : "mouseleave",
            aE = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ah = 0,
            aQ = null,
            ac = 0,
            a2 = 0,
            a0 = 0,
            H = 1,
            ar = 0,
            aK = 0,
            N = null;
        var aS = f(a5);
        var aa = "start";
        var X = 0;
        var aR = null;
        var U = 0,
            a3 = 0,
            a6 = 0,
            ae = 0,
            O = 0;
        var aX = null,
            ag = null;
        try {
            aS.bind(K, aO);
            aS.bind(aE, ba)
        } catch (al) {
            f.error("events not supported " + K + "," + aE + " on jQuery.swipe")
        }
        this.enable = function() {
            aS.bind(K, aO);
            aS.bind(aE, ba);
            return aS
        };
        this.disable = function() {
            aL();
            return aS
        };
        this.destroy = function() {
            aL();
            aS.data(C, null);
            aS = null
        };
        this.option = function(bd, bc) {
            if (aw[bd] !== undefined) {
                if (bc === undefined) {
                    return aw[bd]
                } else {
                    aw[bd] = bc
                }
            } else {
                f.error("Option " + bd + " does not exist on jQuery.swipe.options")
            }
            return null
        };

        function aO(be) {
            if (aC()) {
                return
            }
            if (f(be.target).closest(aw.excludedElements, aS).length > 0) {
                return
            }
            var bf = be.originalEvent ? be.originalEvent : be;
            var bd, bg = bf.touches,
                bc = bg ? bg[0] : bf;
            aa = g;
            if (bg) {
                X = bg.length
            } else {
                be.preventDefault()
            }
            ah = 0;
            aQ = null;
            aK = null;
            ac = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            ar = 0;
            aR = ak();
            N = ab();
            S();
            if (!bg || (X === aw.fingers || aw.fingers === i) || aY()) {
                aj(0, bc);
                U = au();
                if (X == 2) {
                    aj(1, bg[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                }
                if (aw.swipeStatus || aw.pinchStatus) {
                    bd = P(bf, aa)
                }
            } else {
                bd = false
            }
            if (bd === false) {
                aa = q;
                P(bf, aa);
                return bd
            } else {
                if (aw.hold) {
                    ag = setTimeout(f.proxy(function() {
                        aS.trigger("hold", [bf.target]);
                        if (aw.hold) {
                            bd = aw.hold.call(aS, bf, bf.target)
                        }
                    }, this), aw.longTapThreshold)
                }
                ap(true)
            }
            return null
        }

        function a4(bf) {
            var bi = bf.originalEvent ? bf.originalEvent : bf;
            if (aa === h || aa === q || an()) {
                return
            }
            var be, bj = bi.touches,
                bd = bj ? bj[0] : bi;
            var bg = aI(bd);
            a3 = au();
            if (bj) {
                X = bj.length
            }
            if (aw.hold) {
                clearTimeout(ag)
            }
            aa = k;
            if (X == 2) {
                if (a2 == 0) {
                    aj(1, bj[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                } else {
                    aI(bj[1]);
                    a0 = av(aR[0].end, aR[1].end);
                    aK = at(aR[0].end, aR[1].end)
                }
                H = a8(a2, a0);
                ar = Math.abs(a2 - a0)
            }
            if ((X === aw.fingers || aw.fingers === i) || !bj || aY()) {
                aQ = aM(bg.start, bg.end);
                am(bf, aQ);
                ah = aT(bg.start, bg.end);
                ac = aN();
                aJ(aQ, ah);
                if (aw.swipeStatus || aw.pinchStatus) {
                    be = P(bi, aa)
                }
                if (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave) {
                    var bc = true;
                    if (aw.triggerOnTouchLeave) {
                        var bh = aZ(this);
                        bc = F(bg.end, bh)
                    }
                    if (!aw.triggerOnTouchEnd && bc) {
                        aa = aD(k)
                    } else {
                        if (aw.triggerOnTouchLeave && !bc) {
                            aa = aD(h)
                        }
                    }
                    if (aa == q || aa == h) {
                        P(bi, aa)
                    }
                }
            } else {
                aa = q;
                P(bi, aa)
            }
            if (be === false) {
                aa = q;
                P(bi, aa)
            }
        }

        function M(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc,
                be = bd.touches;
            if (be) {
                if (be.length) {
                    G();
                    return true
                }
            }
            if (an()) {
                X = ae
            }
            a3 = au();
            ac = aN();
            if (bb() || !ao()) {
                aa = q;
                P(bd, aa)
            } else {
                if (aw.triggerOnTouchEnd || (aw.triggerOnTouchEnd == false && aa === k)) {
                    bc.preventDefault();
                    aa = h;
                    P(bd, aa)
                } else {
                    if (!aw.triggerOnTouchEnd && a7()) {
                        aa = h;
                        aG(bd, aa, B)
                    } else {
                        if (aa === k) {
                            aa = q;
                            P(bd, aa)
                        }
                    }
                }
            }
            ap(false);
            return null
        }

        function ba() {
            X = 0;
            a3 = 0;
            U = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            S();
            ap(false)
        }

        function L(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc;
            if (aw.triggerOnTouchLeave) {
                aa = aD(h);
                P(bd, aa)
            }
        }

        function aL() {
            aS.unbind(K, aO);
            aS.unbind(aE, ba);
            aS.unbind(az, a4);
            aS.unbind(V, M);
            if (T) {
                aS.unbind(T, L)
            }
            ap(false)
        }

        function aD(bg) {
            var bf = bg;
            var be = aB();
            var bd = ao();
            var bc = bb();
            if (!be || bc) {
                bf = q
            } else {
                if (bd && bg == k && (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave)) {
                    bf = h
                } else {
                    if (!bd && bg == h && aw.triggerOnTouchLeave) {
                        bf = q
                    }
                }
            }
            return bf
        }

        function P(be, bc) {
            var bd, bf = be.touches;
            if ((J() || W()) || (Q() || aY())) {
                if (J() || W()) {
                    bd = aG(be, bc, l)
                }
                if ((Q() || aY()) && bd !== false) {
                    bd = aG(be, bc, t)
                }
            } else {
                if (aH() && bd !== false) {
                    bd = aG(be, bc, j)
                } else {
                    if (aq() && bd !== false) {
                        bd = aG(be, bc, b)
                    } else {
                        if (ai() && bd !== false) {
                            bd = aG(be, bc, B)
                        }
                    }
                }
            }
            if (bc === q) {
                ba(be)
            }
            if (bc === h) {
                if (bf) {
                    if (!bf.length) {
                        ba(be)
                    }
                } else {
                    ba(be)
                }
            }
            return bd
        }

        function aG(bf, bc, be) {
            var bd;
            if (be == l) {
                aS.trigger("swipeStatus", [bc, aQ || null, ah || 0, ac || 0, X, aR]);
                if (aw.swipeStatus) {
                    bd = aw.swipeStatus.call(aS, bf, bc, aQ || null, ah || 0, ac || 0, X, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && aW()) {
                    aS.trigger("swipe", [aQ, ah, ac, X, aR]);
                    if (aw.swipe) {
                        bd = aw.swipe.call(aS, bf, aQ, ah, ac, X, aR);
                        if (bd === false) {
                            return false
                        }
                    }
                    switch (aQ) {
                        case p:
                            aS.trigger("swipeLeft", [aQ, ah, ac, X, aR]);
                            if (aw.swipeLeft) {
                                bd = aw.swipeLeft.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case o:
                            aS.trigger("swipeRight", [aQ, ah, ac, X, aR]);
                            if (aw.swipeRight) {
                                bd = aw.swipeRight.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case e:
                            aS.trigger("swipeUp", [aQ, ah, ac, X, aR]);
                            if (aw.swipeUp) {
                                bd = aw.swipeUp.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case x:
                            aS.trigger("swipeDown", [aQ, ah, ac, X, aR]);
                            if (aw.swipeDown) {
                                bd = aw.swipeDown.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break
                    }
                }
            }
            if (be == t) {
                aS.trigger("pinchStatus", [bc, aK || null, ar || 0, ac || 0, X, H, aR]);
                if (aw.pinchStatus) {
                    bd = aw.pinchStatus.call(aS, bf, bc, aK || null, ar || 0, ac || 0, X, H, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && a9()) {
                    switch (aK) {
                        case c:
                            aS.trigger("pinchIn", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchIn) {
                                bd = aw.pinchIn.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break;
                        case A:
                            aS.trigger("pinchOut", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchOut) {
                                bd = aw.pinchOut.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break
                    }
                }
            }
            if (be == B) {
                if (bc === q || bc === h) {
                    clearTimeout(aX);
                    clearTimeout(ag);
                    if (Z() && !I()) {
                        O = au();
                        aX = setTimeout(f.proxy(function() {
                            O = null;
                            aS.trigger("tap", [bf.target]);
                            if (aw.tap) {
                                bd = aw.tap.call(aS, bf, bf.target)
                            }
                        }, this), aw.doubleTapThreshold)
                    } else {
                        O = null;
                        aS.trigger("tap", [bf.target]);
                        if (aw.tap) {
                            bd = aw.tap.call(aS, bf, bf.target)
                        }
                    }
                }
            } else {
                if (be == j) {
                    if (bc === q || bc === h) {
                        clearTimeout(aX);
                        O = null;
                        aS.trigger("doubletap", [bf.target]);
                        if (aw.doubleTap) {
                            bd = aw.doubleTap.call(aS, bf, bf.target)
                        }
                    }
                } else {
                    if (be == b) {
                        if (bc === q || bc === h) {
                            clearTimeout(aX);
                            O = null;
                            aS.trigger("longtap", [bf.target]);
                            if (aw.longTap) {
                                bd = aw.longTap.call(aS, bf, bf.target)
                            }
                        }
                    }
                }
            }
            return bd
        }

        function ao() {
            var bc = true;
            if (aw.threshold !== null) {
                bc = ah >= aw.threshold
            }
            return bc
        }

        function bb() {
            var bc = false;
            if (aw.cancelThreshold !== null && aQ !== null) {
                bc = (aU(aQ) - ah) >= aw.cancelThreshold
            }
            return bc
        }

        function af() {
            if (aw.pinchThreshold !== null) {
                return ar >= aw.pinchThreshold
            }
            return true
        }

        function aB() {
            var bc;
            if (aw.maxTimeThreshold) {
                if (ac >= aw.maxTimeThreshold) {
                    bc = false
                } else {
                    bc = true
                }
            } else {
                bc = true
            }
            return bc
        }

        function am(bc, bd) {
            if (aw.preventDefaultEvents === false) {
                return
            }
            if (aw.allowPageScroll === m) {
                bc.preventDefault()
            } else {
                var be = aw.allowPageScroll === s;
                switch (bd) {
                    case p:
                        if ((aw.swipeLeft && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case o:
                        if ((aw.swipeRight && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case e:
                        if ((aw.swipeUp && be) || (!be && aw.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break;
                    case x:
                        if ((aw.swipeDown && be) || (!be && aw.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break
                }
            }
        }

        function a9() {
            var bd = aP();
            var bc = Y();
            var be = af();
            return bd && bc && be
        }

        function aY() {
            return !!(aw.pinchStatus || aw.pinchIn || aw.pinchOut)
        }

        function Q() {
            return !!(a9() && aY())
        }

        function aW() {
            var bf = aB();
            var bh = ao();
            var be = aP();
            var bc = Y();
            var bd = bb();
            var bg = !bd && bc && be && bh && bf;
            return bg
        }

        function W() {
            return !!(aw.swipe || aw.swipeStatus || aw.swipeLeft || aw.swipeRight || aw.swipeUp || aw.swipeDown)
        }

        function J() {
            return !!(aW() && W())
        }

        function aP() {
            return ((X === aw.fingers || aw.fingers === i) || !a)
        }

        function Y() {
            return aR[0].end.x !== 0
        }

        function a7() {
            return !!(aw.tap)
        }

        function Z() {
            return !!(aw.doubleTap)
        }

        function aV() {
            return !!(aw.longTap)
        }

        function R() {
            if (O == null) {
                return false
            }
            var bc = au();
            return (Z() && ((bc - O) <= aw.doubleTapThreshold))
        }

        function I() {
            return R()
        }

        function ay() {
            return ((X === 1 || !a) && (isNaN(ah) || ah < aw.threshold))
        }

        function a1() {
            return ((ac > aw.longTapThreshold) && (ah < r))
        }

        function ai() {
            return !!(ay() && a7())
        }

        function aH() {
            return !!(R() && Z())
        }

        function aq() {
            return !!(a1() && aV())
        }

        function G() {
            a6 = au();
            ae = event.touches.length + 1
        }

        function S() {
            a6 = 0;
            ae = 0
        }

        function an() {
            var bc = false;
            if (a6) {
                var bd = au() - a6;
                if (bd <= aw.fingerReleaseThreshold) {
                    bc = true
                }
            }
            return bc
        }

        function aC() {
            return !!(aS.data(C + "_intouch") === true)
        }

        function ap(bc) {
            if (bc === true) {
                aS.bind(az, a4);
                aS.bind(V, M);
                if (T) {
                    aS.bind(T, L)
                }
            } else {
                aS.unbind(az, a4, false);
                aS.unbind(V, M, false);
                if (T) {
                    aS.unbind(T, L, false)
                }
            }
            aS.data(C + "_intouch", bc === true)
        }

        function aj(bd, bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            aR[bd].identifier = be;
            aR[bd].start.x = aR[bd].end.x = bc.pageX || bc.clientX;
            aR[bd].start.y = aR[bd].end.y = bc.pageY || bc.clientY;
            return aR[bd]
        }

        function aI(bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            var bd = ad(be);
            bd.end.x = bc.pageX || bc.clientX;
            bd.end.y = bc.pageY || bc.clientY;
            return bd
        }

        function ad(bd) {
            for (var bc = 0; bc < aR.length; bc++) {
                if (aR[bc].identifier == bd) {
                    return aR[bc]
                }
            }
        }

        function ak() {
            var bc = [];
            for (var bd = 0; bd <= 5; bd++) {
                bc.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return bc
        }

        function aJ(bc, bd) {
            bd = Math.max(bd, aU(bc));
            N[bc].distance = bd
        }

        function aU(bc) {
            if (N[bc]) {
                return N[bc].distance
            }
            return undefined
        }

        function ab() {
            var bc = {};
            bc[p] = ax(p);
            bc[o] = ax(o);
            bc[e] = ax(e);
            bc[x] = ax(x);
            return bc
        }

        function ax(bc) {
            return {
                direction: bc,
                distance: 0
            }
        }

        function aN() {
            return a3 - U
        }

        function av(bf, be) {
            var bd = Math.abs(bf.x - be.x);
            var bc = Math.abs(bf.y - be.y);
            return Math.round(Math.sqrt(bd * bd + bc * bc))
        }

        function a8(bc, bd) {
            var be = (bd / bc) * 1;
            return be.toFixed(2)
        }

        function at() {
            if (H < 1) {
                return A
            } else {
                return c
            }
        }

        function aT(bd, bc) {
            return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)))
        }

        function aF(bf, bd) {
            var bc = bf.x - bd.x;
            var bh = bd.y - bf.y;
            var be = Math.atan2(bh, bc);
            var bg = Math.round(be * 180 / Math.PI);
            if (bg < 0) {
                bg = 360 - Math.abs(bg)
            }
            return bg
        }

        function aM(bd, bc) {
            var be = aF(bd, bc);
            if ((be <= 45) && (be >= 0)) {
                return p
            } else {
                if ((be <= 360) && (be >= 315)) {
                    return p
                } else {
                    if ((be >= 135) && (be <= 225)) {
                        return o
                    } else {
                        if ((be > 45) && (be < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }

        function au() {
            var bc = new Date();
            return bc.getTime()
        }

        function aZ(bc) {
            bc = f(bc);
            var be = bc.offset();
            var bd = {
                left: be.left,
                right: be.left + bc.outerWidth(),
                top: be.top,
                bottom: be.top + bc.outerHeight()
            };
            return bd
        }

        function F(bc, bd) {
            return (bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom)
        }
    }
}));


/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});


(function($) {
    /**
     * Sticky Floating Banner
     *
     * $(element).sticky();
     * 2015.04.07
     * kim@syung.kr
     */

    $.fn.sticky = function() {
        var scrollTimeout,
            scrollFuc;
        var $doc = $(document),
            $sticky = $(this),
            positionType = $sticky.css('position');

        scrollFuc = function() {
            if (!$sticky.data('sticky')) {
                $sticky.data('sticky', $sticky.offset().top);
            }
            if ($sticky.data('sticky') >= $doc.scrollTop()) {
                $sticky.css({
                    position: positionType
                }).removeClass('sticky-ing');
            } else {
                $sticky.css({
                    position: 'fixed',
                    top: 0
                }).addClass('sticky-ing');
            }
        };

        $doc.on('scroll.sticky', function(e) {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
                scrollTimeout = null;
            }
            scrollTimeout = setTimeout(scrollFuc, 1);
        });
        scrollFuc();
    };

})(jQuery);



// /*
//  HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
//  Uncompressed source: https://github.com/aFarkas/html5shiv
// */
// (function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
// a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
// c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
// "undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
// for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
! function(a) {
    a(jQuery);

    // "use strict";
    // "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && typeof asNavFor === 'object') {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {

            if (_.options.infinite === false) {

                if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) {
                    _.direction = 0;
                } else if (_.direction === 0) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler(slideTo);

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if (_.slideCount > _.options.slidesToShow) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add(_.$nextArrow)

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
            .children(_.options.slide + ':not(.slick-cloned)')
            .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this,
            a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width': (100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this,
            originalSlides;

        if (_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if (_.$prevArrow && _.$prevArrow.length) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display', '');

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display', '');

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function() {
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)',
                function(event) {

                    event.stopImmediatePropagation();
                    var $sf = $(this);

                    setTimeout(function() {

                        if (_.options.pauseOnFocus) {
                            _.focussed = $sf.is(':focus');
                            _.autoPlay();
                        }

                    }, 0);

                });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                    $(this).attr({
                        'role': 'presentation',
                        'aria-selected': 'false',
                        'aria-controls': 'navigation' + _.instanceUid + i + '',
                        'id': 'slick-slide' + _.instanceUid + i + ''
                    });
                })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'previous'
                }, _.changeSlide);
            _.$nextArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'next'
                }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if (_.options.pauseOnHover) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({
                            opacity: 0
                        }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({
                                    opacity: 1
                                }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr('data-lazy')
                        .removeClass('slick-loading')
                        .addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if (!_.unslicked) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function(tryCount) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageToLoad;

        if ($imgsToLoad.length) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr('src', imageSource)
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if (tryCount < 3) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function() {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);

                } else {

                    image
                        .removeAttr('data-lazy')
                        .removeClass('slick-loading')
                        .addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [_]);

        }

    };

    Slick.prototype.refresh = function(initializing) {

        var _ = this,
            currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, {
            currentSlide: currentSlide
        });

        _.init();

        if (!initializing) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this,
            breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

            _.respondTo = _.options.respondTo || 'window';

            for (breakpoint in responsiveSettings) {

                l = _.breakpoints.length - 1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return (_.options.mobileFirst) ? a - b : b - a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
            .children(_.options.slide)
            .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
        Slick.prototype.slickSetOption = function() {

            /**
             * accepts arguments in format of:
             *
             *  - for changing a single option's value:
             *     .slick("setOption", option, value, refresh )
             *
             *  - for changing a set of responsive options:
             *     .slick("setOption", 'responsive', [{}, ...], refresh )
             *
             *  - for updating multiple values at once (not responsive)
             *     .slick("setOption", { 'option': value, ... }, refresh )
             */

            var _ = this,
                l, item, option, value, refresh = false,
                type;

            if ($.type(arguments[0]) === 'object') {

                option = arguments[0];
                refresh = arguments[1];
                type = 'multiple';

            } else if ($.type(arguments[0]) === 'string') {

                option = arguments[0];
                value = arguments[1];
                refresh = arguments[2];

                if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

                    type = 'responsive';

                } else if (typeof arguments[1] !== 'undefined') {

                    type = 'single';

                }

            }

            if (type === 'single') {

                _.options[option] = value;


            } else if (type === 'multiple') {

                $.each(option, function(opt, val) {

                    _.options[opt] = val;

                });


            } else if (type === 'responsive') {

                for (item in value) {

                    if ($.type(_.options.responsive) !== 'array') {

                        _.options.responsive = [value[item]];

                    } else {

                        l = _.options.responsive.length - 1;

                        // loop through the responsive object and splice out duplicates.
                        while (l >= 0) {

                            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                                _.options.responsive.splice(l, 1);

                            }

                            l--;

                        }

                        _.options.responsive.push(value[item]);

                    }

                }

            }

            if (refresh) {

                _.unload();
                _.reinit();

            }

        };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function(toggle) {

        var _ = this;

        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
            $(event.target) :
            $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this,
            navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            direction = _.swipeDirection();

            switch (direction) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                        _.checkNavigable(_.currentSlide + _.getSlideCount()) :
                        _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                        _.checkNavigable(_.currentSlide - _.getSlideCount()) :
                        _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if (direction != 'vertical') {

                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);

            }

        } else {

            if (_.touchObject.startX !== _.touchObject.curX) {

                _.slideHandler(_.currentSlide);
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if (_.options.autoplay) {

            if (document[_.hidden]) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

});
//gold: #CAAF80
//pink: #FFC6F4
//blue: #87B1FD
//silver:#D8D8D8

//gold: #CAAF80
//pink: #FFC6F4
//blue: #87B1FD
//silver:#D8D8D8
//red: #56233B

var CURRENCY_CHARACTER = '€';
var SITE_CD = 'fr';
var IS_DOLLAR = false;
var PRODUCT_DATA = {
  'model': ['Galaxy S7', 'S7 Edge'],
  'rental': ['true', 'true', 'false'],
  'memory': [['32Go'], ['32Go'], ['32Go']],
  'color': [['Noir', 'Blanc', 'Or', 'Rose', 'Argent'],  [ 'Noir', 'Blanc', 'Or', 'Rose', 'Bleu', 'Argent' ]],
  'colorCode': [['#000', 'white', '#CAAF80', '#FFC6F4','#D8D8D8'], ['#000', 'white', '#CAAF80', '#FFC6F4', '#87B1FD','#D8D8D8']],
  //Sku S7 - S7 edge - depends on color
  'sku': ['SM-G930FZKAXEF', 'SM-G930FZWAXEF', 'SM-G930FZDAXEF', 'SM-G930FEDAXEF', 'SM-G930FZSAXEF',/* */'SM-G935FZKAXEF','SM-G935FZWAXEF','SM-G935FZDAXEF','SM-G935FEDAXEF', 'SM-G935FZBAXEF','SM-G935FZSAXEF'],
  'sku2':[['SM-G930FZKAXEF', 'SM-G930FZWAXEF', 'SM-G930FZDAXEF', 'SM-G930FEDAXEF', 'SM-G930FZSAXEF'], ['SM-G935FZKAXEF','SM-G935FZWAXEF','SM-G935FZDAXEF', 'SM-G935FEDAXEF','SM-G935FZBAXEF','SM-G935FZSAXEF']],
  'pack': [
            [
             /* ['Pad à induction STAND','EP-NG930BBEGWW','phrase super décrivant le pack pad'],
              ['Ecouteurs Level Active','EO-BG930CBEGWW','phrase super décrivant le pack ecouteurs'],
              ['Aucun Pack', '', ''],
              ['Clear View','EF-ZG930CBEGWW','phrase super décrivant le pack etui']*/
            ],[
          /*    ['Pad à induction STAND','EP-NG930BBEGWW','phrase super décrivant le pack pad'],
              ['Ecouteurs Level Active','EO-BG930CBEGWW','phrase super décrivant le pack ecouteurs'],
              ['Aucun Pack', '', ''],
              ['Etui Clear View','EF-ZG935CBEGWW','phrase super décrivant le pack etui']*/
            ]
  ]

};

var CLEARVIEW_SKU = [
    ["EF-ZG930CBEGWW","EF-ZG930CLEGWW","EF-ZG930CPEGWW","EF-ZG930CSEGWW","EF-ZG930CVEGWW"], //S7
    ["EF-ZG935CBEGWW","EF-ZG935CLEGWW","EF-ZG935CPEGWW","EF-ZG935CSEGWW","EF-ZG935CVEGWW"]
];

var CLEARVIEW_COLOR = [
    {'name':'noir', 'hexa':'#000'},
    {'name':'bleu', 'hexa':'#376092'},
    {'name':'rose', 'hexa':'#ffc6f4'},
    {'name':'argent', 'hexa':'#d8d8d8'},
    {'name':'orchidée', 'hexa':'#61516b'}
];

var BUNDLES = [{
    'item': 'Pad à induction STAND',
    'pid': ['EP-NG930BBEGWW','EP-NG930BBEGWW'],
    'price': [59.90,59.90],
    'color': ['noir','noir'],
    'views': 1
  },
  {
    'item': 'Etui Clear View',
    'pid': ['EF-ZG930CBEGWW', 'EF-ZG935CBEGWW'],
    'price': [69.90, 69.90],
    'color': ['noir', 'noir'],
    'views': 2
  },
  {
    'item': 'Ecouteurs Level Active',
    'pid': ['EO-BG930CBEGWW','EO-BG930CBEGWW'],
    'price': [79.90,79.90],
    'color': ['',''],
    'views': 1
  },
  {
    'item': 'Aucun pack',
    'pid': ['',''],
    'price': [0,0],
    'color': ['',''],
    'views': 1
  }
];
var PRICE_INFO = [
    [ // model choice
        [ // memory choice
            [ // color choice
                {
                    // Galaxy S7 Noir 32Go
                    'model': 'Galaxy S7',
                    'modelCode': 'SM-G930FZKAXEF',
                    'price': '599.00',
                    'memory': '32Go',
                    'color': 'Noir'
                }
            ],
            [{
                // Galaxy S7 Blanc 32Go
                'model': 'Galaxy S7',
                'modelCode': 'SM-G930FZWAXEF',
                'price': '599.00',
                'memory': '32Go',
                'color': 'Blanc'
            }],
            [{
                // Galaxy S7 Or 32Go
                'model': 'Galaxy S7',
                'modelCode': 'SM-G930FZDAXEF',
                'price': '599.00',
                'memory': '32Go',
                'color': 'Or'
            }],
            [{
                // Galaxy S7 Rose 32Go
                'model': 'Galaxy S7',
                'modelCode': 'SM-G930FEDAXEF',
                'price': '599.00',
                'memory': '32Go',
                'color': 'Rose'
            }],
            /*[{
                // Galaxy S7 Bleu 32Go
                'model': 'Galaxy S7',
                'modelCode': 'SM-G930FZBAXEF',
                'price': '599.00',
                'memory': '32Go',
                'color': 'Bleu'
            }],*/
            [{
                // Galaxy S7 Argent 32Go
                'model': 'Galaxy S7',
                'modelCode': 'SM-G930FZSAXEF',
                'price': '599.00',
                'memory': '32Go',
                'color': 'Argent'
            }]
          
        ]
    ],
    [ // model choice
        [ // memory choice
            [ // color choice
                {
                    // Galaxy S7 Edge Noir 32Go
                    'model': 'Galaxy S7 edge',
                    'modelCode': 'SM-G935FZKAXEF',
                    'price': '699.00',
                    'memory': '32Go',
                    'color': 'Noir'
                }
            ],
            [{
                // Galaxy S7 edge Blanc 32Go
                'model': 'Galaxy S7 edge',
                'modelCode': 'SM-G935FZWAXEF',
                'price': '699.00',
                'memory': '32Go',
                'color': 'Blanc'
            }],
            [{
                // Galaxy S7 edge Or 32Go
                'model': 'Galaxy S7 edge',
                'modelCode': 'SM-G935FZDAXEF',
                'price': '699.00',
                'memory': '32Go',
                'color': 'Or'
            }],
            [{
                // Galaxy S7 Edge Rose 32Go
                'model': 'Galaxy S7 Edge',
                'modelCode': 'SM-G935FEDAXEF',
                'price': '699.00',
                'memory': '32Go',
                'color': 'Rose'
            }],
            [{
                // Galaxy S7 Edge Bleu 32Go
                'model': 'Galaxy S7 Edge',
                'modelCode': 'SM-G935FZBAXEF',
                'price': '699.00',
                'memory': '32Go',
                'color': 'Bleu'
            }],
            [{
                // Galaxy S7 Edge Argent 32Go
                'model': 'Galaxy S7 Edge',
                'modelCode': 'SM-G935FZSAXEF',
                'price': '699.00',
                'memory': '32Go',
                'color': 'Argent'
            }]
        ]
    ],
    /*[ // model choice
        [ // memory choice
            [ // color choice
                {
                    // Dual-Sim Noir 64Go
                    'model': 'Dual-Sim',
                    'modelCode': 'SM-G955FZKDXEF',
                    'price': '909.00',
                    'memory': '64Go',
                    'color': 'Noir Carbone'
                }
            ]
        ]
    ]*/
];

var ACCESSORY_DATA = [
  [
    // { 'item': 'Pack essentiel', 'pid' : ['ET-KG930BSEGWW'],'price': [79.90], 'color': ['black'], 'views': 4 },
    {
      'item': 'Etui Led View',
      'modelCode': ['EF-NG930PBEGWW', 'EF-NG930PSEGWW', 'EF-NG930PFEGWW'],
      'color': ['black', 'silver', 'gold'],
      'colorCode': ['black', '#D8D8D8', '#CAAF80'],
      'price': [79.90, 79.90, 79.90],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/led-view-cover-ng930-galaxy-s7/EF-NG930PBEGWW/'
    },
    {
      'item': 'Etui S View',
      'modelCode': ['EF-CG930PBEGWW', 'EF-CG930PWEGWW', 'EF-CG930PSEGWW', 'EF-CG930PFEGWW', 'EF-CG930PXEGWW'],
      'color': ['black', 'white', 'silver', 'gold', 'red'],
      'colorCode': ['black', 'white', '#D8D8D8', '#CAAF80', '#56233B'],
      'price': [59.90, 59.90, 59.90, 59.90, 59.90],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/s-view-cover-cg930-galaxy-s7/EF-CG930PBEGWW/'
    },
      {
      'item': 'Etui Clear View',
      'modelCode': ['EF-ZG930CBEGWW', 'EF-ZG930CSEGWW', 'EF-ZG930CFEGWW', 'EF-ZG930CZEGWW'],
      'price': [69.90, 69.90, 69.90, 69.90],
      'color': ['black', 'silver', 'gold', 'pink'],
      'colorCode': ['black', '#D8D8D8', '#CAAF80', '#FFC6F4'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/clear-view-cover-zg930-galaxy-s7/EF-ZG930CBEGWW/'
    },
      {
      'item': 'Coque transparente',
      'modelCode': ['EF-QG930CFEGWW', 'EF-QG930CSEGWW'],
      'price': [29.90, 29.90],
      'color': ['gold', 'silver' ],
      'colorCode': ['#CAAF80', '#D8D8D8'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/clear-cover-qg930-galaxy-s7/EF-QG930CSEGWW/'
    },
      {
      'item':  'Chargeur à induction',
      'modelCode': ['EP-NG930BBEGWW', 'EP-NG930BWEGWW'],
      'price': [59.90, 59.90],
      'color': ['black', 'white'],
      'colorCode': ['black', 'white'],
      'views': 4,
      'active': false,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/wireless-charger-ng930-galaxy-s7-s7-edge/EP-NG930BBEGWW/'
    },
      {
      'item':  'Etui à rabat',
      'modelCode': ['EF-WG930PBEGWW', 'EF-WG930PFEGWW', 'EF-WG930PXEGWW'],
      'price': [39.90, 39.90, 39.90],
      'color': ['black', 'gold', 'ruby wine'],
      'colorCode': ['black', '#CAAF80', '#653038'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/flip-wallet-wg930-galaxy-s7/EF-WG930PBEGWW/'
    },
      {
      'item':  'Etui clavier',
      'modelCode': ['EJ-CG930UBEGFR'],
      'price': [89.90],
      'color': ['black'],
      'colorCode': ['black'],
      'views': 5,
      'active': false,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/bluetooth-keyboard-cover-cg930-galaxy-s7/'
    },
      {
      'item': 'Coque cuir',
      'modelCode': ['EF-VG930LBEGWW'],
      'price': [49.90],
      'color': ['black'],
      'colorCode': ['black'],
      'views': 3,
      'active': false,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/leather-cover-vg930-galaxy-s7/'
    },
      {
      'item': 'Coque batterie',
      'modelCode': ['EP-TG930BBEGWW'],
      'price': [99.90],
      'color': ['black'],
      'colorCode': ['black'],
      'views': 4,
      'active': false,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/backpack-tg930-galaxy-s7/'
    },
      {
      'item': 'Batterie ext. 5100mAh charge rapide',
      'modelCode': ['EB-PG930BSEGWW', 'PG930BSEGWW'],
      'price': [59.90, 59.90],
      'color': ['silver', 'black'],
      'colorCode': ['#D8D8D8', 'black'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/5100mah-external-battery-pack-eb-pg930/EB-PG930BBEGWW/'
    },
      {
      'item': 'Batterie ext. 10200mA charge rapide',
      'modelCode': ['EB-PG935BBEGWW', 'EB-PG935BSEGWW'],
      'price': [79.90, 79.90],
      'color': ['black', 'silver'],
      'colorCode': ['black', '#D8D8D8'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/10200mah-external-battery-pack-eb-pg935/EB-PG935BBEGWW/'
    },
      {
      'item': 'Lens Cover',
      'modelCode':['ET-CG930DBEGWW'],
      'price': [99.90],
      'color': ['black'],
      'colorCode': ['black'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/lens-cover-galaxy-s7/'
    },
      {
      'item': 'Gear VR',
      'modelCode':['SM-R323NBKAXEF'],
      'price': [89.00],
      'color': ['black'],
      'colorCode': ['black'],
      'views': 1,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/wearables/gear-vr-r323/'
    },
      {
      'item': 'Gear Fit2 taille S',
      'modelCode':['SM-R3600DANXEF', 'SM-R3600ZBNXEF', 'SM-R3600ZINXEF'],
      'price': [199.00, 199.00, 199.00],
      'color': ['black', 'blue', 'pink'],
      'colorCode': ['black', '#0F5EB9', '#FFC6F4'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/wearables/gear-fit-2-r360-small/SM-R3600DANXEF/'
    },
      {
      'item': 'Gear Fit2 taille L',
      'modelCode':['SM-R3600DAAXEF', 'SM-R3600ZBAXEF', 'SM-R3600ZIAXEF'],
      'price': [199.00, 199.00, 199.00],
      'color': ['black', 'blue', 'pink'],
      'colorCode': ['black', '#0F5EB9', '#FFC6F4'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/wearables/gear-fit-2-r360-large/SM-R3600DAAXEF/'
    },
      {
      'item': 'Gear 360',
      'modelCode':['SM-C200NZWAXEF'],
      'price': [249.00],
      'color': ['white'],
      'colorCode': ['white'],
      'views': 5,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/wearables/gear-360-c200/'
    },
      {
      'item': 'Coffret essentiel',
      'modelCode': ['ET-KG930BSEGWW'],
      'price': [59.90],
      'color': ['silver'],
      'colorCode': ['#D8D8D8'],
      'views': 1,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/essential-accessory-pack-galaxy-s7-kg930/'
    }
  ],//S7 EDGE ACCESSORIES LIST
  [
    {
      'item': 'Etui Led View S7 edge',
      'modelCode': ['EF-NG935PBEGWW', 'EF-NG935PSEGWW', 'EF-NG935PFEGWW'],
      'color': ['black', 'silver', 'gold'],
      'colorCode': ['black', '#D8D8D8', '#CAAF80'],
      'price': [79.90, 79.90, 79.90],
      'views': 4,
      'active': true,
      'modelAcc': 's7edge-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/led-view-cover-ng935-galaxy-s7-edge/EF-NG935PBEGWW/'
    },
    {
      'item': 'Etui S View',
      'modelCode': ['EF-CG935PBEGWW', 'EF-CG935PWEGWW', 'EF-CG935PSEGWW', 'EF-CG935PFEGWW', 'EF-CG935PLEGWW', 'EF-CG935PXEGWW'],
      'color': ['black', 'white', 'silver', 'gold', 'red'],
      'colorCode': ['black', 'white', '#D8D8D8', '#CAAF80', '#56233B'],
      'price': [59.90, 59.90, 59.90, 59.90, 59.90],
      'views': 4,
      'active': true,
      'modelAcc': 's7edge-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/s-view-cover-cg935-galaxy-s7-edge/EF-CG935PBEGWW/'
    },
    {
      "item": "Etui Clear View",
      "modelCode": ["EF-ZG935CBEGWW","EF-ZG935CSEGWW","EF-ZG935CFEGWW","EF-ZGEGWW","EF-ZGW"],
      "color": ["black","silver","gold","blue","pink"],
      "colorCode": ["black","#D8D8D8","#CAAF80","#87B1FD","#FFC6F4"],
      "price": [69.9,69.9,69.9,69.9,69.9],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/clear-view-cover-zg935-galaxy-s7-edge/EF-ZG935CBEGWW/"
    },
    {
      "item": "Coque transparente",
      "modelCode": ["EF-QG935CFEGWW","EF-QG935CSEGWW"],
      "color": ["gold","silver"],
      "colorCode": ["#CAAF80","#D8D8D8"],
      "price": [29.9,29.9],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/clear-cover-qg935-galaxy-s7-edge/EF-QG935CFEGWW/"
    },
    {
      "item": "Chargeur à induction",
      "modelCode": ["EP-NG930BBEGWW","EP-NG930BWEGWW"],
      "color": ["black","white"],
      "colorCode": ["black","white"],
      "price": [59.9,59.9],
      "views": 4,
      "active": false,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/wireless-charger-ng930-galaxy-s7-s7-edge/EP-NG930BBEGWW/"
    },
    {
      "item": "Etui à rabat",
      "modelCode": ["EF-WG935PBEGWW","EF-WG935PFEGWW","EF-WG935PXEGWW"],
      "color": ["black","gold","red"],
      "colorCode": ["black","#CAAF80","#56233B"],
      "price": [39.9,39.9,39.9],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/flip-wallet-wg935-galaxy-s7-edge/EF-WG935PBEGWW/"
    },
    {
      "item": "Etui clavier",
      "modelCode": ["EJ-CG935UBEGFR"],
      "color": ["black"],
      "colorCode": ["black"],
      "price": [89.9],
      "views": 5,
      "active": false,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/search/?searchvalue=EJ-CG935UBEGFR"
    },
    {
      "item": "Coque cuir",
      "modelCode": ["EF-VG935LBEGWW"],
      "color": ["black"],
      "colorCode": ["black"],
      "price": [49.9],
      "views": 3,
      "active": false,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/leather-cover-vg935-galaxy-s7-edge/EF-VG935LBEGWW/"
    },
    {
      "item": "Coque batterie",
      "modelCode": ["EP-TG935BBEGWW"],
      "color": ["black"],
      "colorCode": ["black"],
      "price": [99.9],
      "views": 4,
      "active": false,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/backpack-tg935-galaxy-s7-edge/"
    },
    {
      "item": "Batterie ext. 5100mAh charge rapide",
      "modelCode": ["EB-PG930BSEGWW","EB-PG930BSEGWW"],
      "color": ["silver","black"],
      "colorCode": ["#D8D8D8","black"],
      "price": [59.9,59.9],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/5100mah-external-battery-pack-eb-pg930/EB-PG930BBEGWW/"
    },
    {
      "item": "Batterie ext. 10200mA charge rapide",
      "modelCode": ["EB-PG935BBEGWW","EB-PG935BSEGWW"],
      "color": ["black","silver"],
      "colorCode": ["black","#D8D8D8"],
      "price": [79.9,79.9],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/10200mah-external-battery-pack-eb-pg935/EB-PG935BBEGWW/"
    },
    {
      "item": "Lens Cover",
      "modelCode": ["ET-CG935DBEGWW"],
      "color": ["black"],
      "colorCode": ["black"],
      "price": [99.9],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/lens-cover-galaxy-s7-edge/"
    },
    {
      "item": "Gear VR",
      "modelCode": ["SM-R323NBKAXEF"],
      "color": ["black"],
      "colorCode": ["black"],
      "price": [89.0],
      "views": 1,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/wearables/gear-vr-r323/"
    },
    {
      "item": "Gear Fit2 taille S",
      "modelCode": ["SM-R3600DANXEF","SM-R3600ZBNXEF","SM-R3600ZINXEF"],
      "color": ["black","blue","pink"],
      "colorCode": ["black","#87B1FD","#FFC6F4"],
      "price": [199.0,199.0,199.0],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/wearables/gear-fit-2-r360-small/SM-R3600DANXEF/"
    },
    {
      "item": "Gear Fit2 taille L",
      "modelCode": ["SM-R3600DAAXEF","SM-R3600ZBAXEF","SM-R3600ZIAXEF"],
      "color": ["black","blue","pink"],
      "colorCode": ["black","#87B1FD","#FFC6F4"],
      "price": [199.0,199.0,199.0],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/wearables/gear-fit-2-r360-large/SM-R3600DAAXEF/"
    },
    {
      "item": "Gear 360",
      "modelCode": ["SM-C200NZWAXEF"],
      "color": ["white"],
      "colorCode": ["white"],
      "price": [249.0],
      "views": 5,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/wearables/gear-360-c200/"
    },
    {
      "item": "Coffret essentiel",
      "modelCode": ["ET-KG930BSEGWW"],
      "color": ["silver"],
      "colorCode": ["#D8D8D8"],
      "price": [59.9],
      "views": 1,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/essential-accessory-pack-galaxy-s7-edge-kg935/"
    }
  ]
];

var UP2YOU_PRICE = [{
    'first': 99,
    'monthly': 20
  },
  {
    'first': 99,
    'monthly': 24
  }
];
var UP2YOU_PRICE_POPIN = [{
    'noInsurance': 20,
    'broken': 26,
    'brokenPlus': 29
  },
  {
    'noInsurance': 24,
    'broken': 30,
    'brokenPlus': 33
  }
];


function numberFormat(num) {
    num = num.toString();
    var returnValue = "";
    var dotSepNum = num.toString().indexOf(".");
    var commaSepNum = num.toString().indexOf(",");

    if (commaSepNum > dotSepNum) {
        IS_DOLLAR = false;
    } else {
        IS_DOLLAR = true;
    }

    num = num.replace(',', '.');
    var sepNum = num.toString().split(".");
    var arrSize = sepNum.length;
    var returnValue = "";
    if (arrSize >= 3) {
        for (var i = 0; i < arrSize - 1; i++) {
            returnValue += sepNum[i];
        }
        return returnValue + '.' + sepNum[arrSize - 1];
    } else {
        if (typeof(sepNum[1]) == 'undefined') {
            return sepNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.00';
        } else {
            return sepNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + sepNum[1];
        }
    }

}

//price addcomma
function addComma(num) {
    IS_DOLLAR = false;
    var returnValue;
    if (IS_DOLLAR) {
        var tempSepNum = num.toString().split(".");
        if (typeof(tempSepNum[1]) == 'undefined') {
            returnValue = tempSepNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.00';
        } else {
            returnValue = tempSepNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + tempSepNum[1];
        }
    } else {
        var tempSepNum = num.toString().split(".");
        if (typeof(tempSepNum[1]) == 'undefined') {
            returnValue = tempSepNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',00';
        } else {
            returnValue = tempSepNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + tempSepNum[1];
        }
    }
    return returnValue;
}

//img resize change
function imgResizeSrc() {
    var imgPcSrc = "",
        imgTabletSrc = "",
        imgMoSrc = "";

    $(".pre-order").find("img").each(function() {

        if (window.innerWidth > 1024 || window.innerWidth > 768 && $(this).attr("data-img-tablet") == undefined) {
            imgPcSrc = $(this).attr("data-img-pc");
            $(this).attr("src", imgPcSrc);
        } else if (window.innerWidth <= 1024 && window.innerWidth > 768 && $(this).attr("data-img-tablet") != undefined) {
            imgTabletSrc = $(this).attr("data-img-tablet");
            $(this).attr("src", imgTabletSrc);
        } else if (window.innerWidth <= 768) {
            imgMoSrc = $(this).attr("data-img-mo");
            $(this).attr("src", imgMoSrc);
        }

    });
}


function slickMotion(idx) {
            $(".thumb-temp").find(".slick-slide").eq(idx).addClass("active").siblings().removeClass("active");
        }

//keyboard event
function keyboardEvent() {

    //thumb keyboard event
    $(document).on("keydown", ".thumb-temp .btn-prev", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
            e.preventDefault();
            $(".thumb-temp .slick-slide.slick-active").find("a").filter(":first").focus();
        } else if (e.keyCode == "13") {
            e.preventDefault();
            $(".thumb-temp").slick("slickPrev");
            setTimeout(function() {
                $(".thumb-temp .slick-slide.slick-active").filter(":first").find("a").focus();
            }, 500);
        }
    });

    $(document).on("keydown", ".thumb-temp .btn-next", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {
            e.preventDefault();
            $(".thumb-temp .slick-slide.slick-active").filter(":last").find("a").focus();
        } else if (e.keyCode == "9") {
            e.preventDefault();
            $(".product-detail").find("button").filter(":first").focus();
        } else if (e.keyCode == "13") {
            e.preventDefault();
            $(".thumb-temp").slick("slickNext");
            setTimeout(function() {
                $(".thumb-temp .slick-slide.slick-active").filter(":last").find("a").focus();
            }, 500);
        }
    });

    $(document).on("keydown", ".thumb-temp .slick-slide.slick-active a:last", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
            e.preventDefault();
            if (!$(".thumb-temp").find("button").is(".btn-next.slick-disabled")) {
                $(".thumb-temp .btn-next").focus();
            } else {
                $(".product-detail").find("button").filter(":first").focus();
            }
        }
    });

    $(document).on("keydown", ".thumb-temp .slick-slide.slick-active a:first", function(e) {
        if (e.keyCode == "9" && e.shiftKey && !$(".thumb-temp").find("button").is(".btn-prev.slick-disabled")) {
            e.preventDefault();
            $(".thumb-temp .btn-prev").focus();
        }
    });

    //accessorise keyboard event
    $(document).on("keydown", ".accessorise .btn-prev", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
            e.preventDefault();
            $(".accessorise .slick-slide.slick-active").find("button").filter(":first").focus();
        } else if (e.keyCode == "13") {
            e.preventDefault();
            $(".product-list").slick("slickPrev");
            setTimeout(function() {
                $(".accessorise .slick-slide.slick-active").filter(":first").find("button:first").focus();
            }, 500);
        }
    });

    $(document).on("keydown", ".accessorise .btn-next", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {
            e.preventDefault();
            $(".accessorise .slick-slide.slick-active .btn-more").filter(":last").find("a").focus();
        } else if (e.keyCode == "13") {
            e.preventDefault();
            $(".product-list").slick("slickNext");
            setTimeout(function() {
                $(".accessorise .slick-slide.slick-active").filter(":last").find("button:first").focus();
            }, 500);
        }
    });

    $(document).on("keydown", ".accessorise .slick-slide.slick-active .btn-more:last", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
            e.preventDefault();
            if (!$(".accessorise .product-list").find(">button").is(".btn-next.slick-disabled")) {
                $(".accessorise .btn-next").focus();
            } else {
                if (!$(".pre-order").is(".none-shop")) {
                    $(".shop-list li").eq(0).find("a").focus();
                } else {
                    $(".banner-area.none-shop").find(".ad-txt a").focus();
                }
            }
        }
    });

    $(document).on("keydown", ".accessorise .slick-slide.slick-active button:first", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {
            e.preventDefault();
            if (!$(".accessorise .product-list").find(">button").is(".btn-prev.slick-disabled")) {
                $(".accessorise .btn-prev").focus();
            } else {
                $(".btn-store").find("a").focus();
            }
        }
    });

    $(document).on("keydown", ".btn-store a", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
            e.preventDefault();
            if (!$(".accessorise .product-list").find(">button").is(".btn-prev.slick-disabled")) {
                $(".accessorise .btn-prev").focus();
            } else {
                $(".accessorise .slick-slide.slick-active").filter(":first").find("button:first").focus();
            }
        }
    });

    //Product-detail keyboard event
    $(document).on("keydown", ".product-detail .option-select[data-opt-index='0'] button:first", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {
            e.preventDefault();
            if (!$(".thumb-temp").find("button").is(".btn-next.slick-disabled")) {
                $(".thumb-temp .btn-next").focus();
            } else {
                $(".thumb-temp .slick-slide.slick-active").filter(":last").find("a").focus();
            }
        }
    });

    //btn-delete keyboard event
    $(document).on("keydown", ".price-list li:last-child .item-list .btn-delete", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9" && $(this).parent().index() == 1) {
            e.preventDefault();
            $(".total-box").find(".calc a").focus();
        }
    });

    //calculator keyboard event
    $(document).on("keydown", ".total-box .calc a", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {
            e.preventDefault();
            if ($(".price-list li:last-child .item-list").find("span").length > 1) {
                $(".price-list li:last-child .item-list").find("span").eq(1).find(".btn-delete").focus();
            } else if ($(".price-list li:last-child .item-list").find("span").length == 1) {
                $(".price-list li:last-child .item-list").find("span").find(".btn-delete").focus();
            } else {
                $(".shop-list").find("li:last-child a").focus();
            }
        }
    });
}

//mobile keyboard event
function keyboardEventMo() {
    var accProductLength = $(".accessorise").find(".product-list > div").length;

    $(document).on("keydown", ".nav-list.mo ul li:last-child a", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
            e.preventDefault();
            $(".nav-title.mo").find("a").focus();
        }
    });

    if (!$(".pre-order").is(".none-shop")) {

        $(document).on("keydown", "body.mobile .btn-store a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
                e.preventDefault();
                $(".accessorise").find(".product-list > div:first-child").find(".color-chip button:first").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .product-item .color-chip button:last-child", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                if ($(this).parents("div[data-list-idx]").attr("data-list-idx") == "0" && $(this).parents(".color-chip").find("button").length < 2) {
                    $(".product-detail").find(".btn-store a").focus();
                } else if ($(this).parents("div[data-list-idx]").attr("data-list-idx") != "0" && $(this).parents(".color-chip").find("button").length < 2) {
                    $(this).parents("div[data-list-idx]").prev().find(".option-select button").focus();
                } else if ($(this).parents(".color-chip").find("button").length > 1) {
                    $(this).prev().focus();
                }

            } else if (e.keyCode == "9") {
                e.preventDefault();
                $(this).parents(".product-component").find(".btn-more a").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .product-item .color-chip button:first-child", function(e) {
            if (e.keyCode == "9" && e.shiftKey && $(this).parents(".color-chip").find("button").length > 1) {
                e.preventDefault();
                $(this).parents("div[data-list-idx]").prev().find(".option-select button").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .btn-more a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                $(this).parents(".product-component").find(".color-chip button:last-child").focus();
            } else if (e.keyCode == "9") {
                e.preventDefault();
                $(this).parents(".product-component").find(".option-select button").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .option-select button", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                $(this).parents(".product-component").find(".btn-more a").focus();
            } else if (e.keyCode == "9") {
                e.preventDefault();
                if ($(this).parents("div[data-list-idx]").attr("data-list-idx") != accProductLength - 1) {
                    $(this).parents("div[data-list-idx]").next().find(".color-chip button:first-child").focus();
                } else {
                    $(".shop-list").find("li:first-child a").focus();
                }
            }
        });

        $(document).on("keydown", "body.mobile .shop-list li:first-child a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                $(".accessorise").find(".product-list > div:last-child").find(".option-select button").focus();
            }
        });

        //calculator keyboard event
        $(document).on("keydown", "body.mobile .total-box .calc a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                if ($(".price-list li:last-child .item-list").find("span").length > 1) {
                    $(".price-list li:last-child .item-list").find("span").eq(1).find(".btn-delete").focus();
                } else if ($(".price-list li:last-child .item-list").find("span").length == 1) {
                    $(".price-list li:last-child .item-list").find("span").find(".btn-delete").focus();
                } else {
                    $(".shop-list").find("li").eq(2).find("a").focus();
                }
            }
        });
    } else {
        $(document).on("keydown", "body.mobile .none-shop .btn-store a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
                e.preventDefault();
                $(".accessorise .product-list").find(">div:first-child .btn-more.none-shop a").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .product-list div .btn-more.none-shop a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                if ($(this).parents("div[data-list-idx]").attr("data-list-idx") == 0) {
                    $("body.mobile .none-shop .btn-store").find("a").focus();
                } else {
                    $(this).parents("div[data-list-idx]").prev().find(".color-chip button:last-child").focus();
                }
            } else if (e.keyCode == "9") {
                e.preventDefault();
                $(this).parents(".product-component").find(".color-chip button:first-child").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .product-list .color-chip button:first-child", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                $(this).parents(".product-component").find(".btn-more a").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .product-list .color-chip button:last-child", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
                e.preventDefault();
                if ($(this).parents("div[data-list-idx]").attr("data-list-idx") == accProductLength - 1) {
                    $(".banner-area.none-shop").find(".ad-info a").focus();
                } else {
                    $(this).parents("div[data-list-idx]").next().find(".btn-more.none-shop a").focus();
                }
            }
        });

        $(document).on("keydown", "body.mobile .banner-area.none-shop a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                $("body.mobile .accessorise .product-list").find(">div:last-child .color-chip button:last-child").focus();
            }
        });
    }
}


/**
 * Return a value in the URL of the parameter key.
 */
function getLocationParamsValue(key) {
    var q = window.location.search.replace('?', '').split('&');

    if (!$.isArray(q)) return null;

    for (var i = 0; i < q.length; i++) {
        q[i] = q[i].split('=');
        if ($.isArray(q[i]) && q[i][0] === key) {
            return q[i][1];
        }
    }
    return null;
}

function whoIsSelected() {
    setTimeout(function() {
    if ($('.option-select[data-opt-index=0] button[data-model-idx=' + modelIdx + ']').hasClass('active')) {
        $(".cell-padding [data='no-insurance']").text(UP2YOU_PRICE_POPIN[modelIdx].noInsurance + '€');
        $(".cell-padding [data='broken']").text(UP2YOU_PRICE_POPIN[modelIdx].broken + '€');
        $(".cell-padding [data='brokenPlus']").text(UP2YOU_PRICE_POPIN[modelIdx].brokenPlus + '€');
        $(".first-payment-price").text(UP2YOU_PRICE[modelIdx].first + '€'); 
        $('.pop-choice .product-name').html(PRODUCT_DATA.model[modelIdx]);
    }},1000);
}

function goCalculator() {
    //todo: when click the 'calculator' button
    //tagManTrack("1016_Microsite_Social_Action");
    window.open('finanzierung/calculator.html?price=' + TOTAL_PRICE, '_blank', 'width=700, height=940, noresize, scrollbars=no');
    return false;
}

//Price Input
function priceInp(p, a, c) {
    var currentPrice = 0,
        currentPrice_ACC = 0;

    currentPrice = transformNumber(p);
    currentPrice_ACC = transformNumber(a);
    promotionPrice = transformNumber(c);

    function transformNumber(num) {
        if (num == undefined) {
            num = 0;
        }

        return Number(num);
    }

    if (c == undefined) {
        var calculatePrice = addComma(currentPrice + currentPrice_ACC);
        Number(calculatePrice).toFixed(2);
        $(".price-info").find(".price-final").html(calculatePrice + CURRENCY_CHARACTER);
        $(".price-info").find(".price-cost").html("");
        TOTAL_PRICE = currentPrice + currentPrice_ACC;
        TOTAL_PRICE = Number(TOTAL_PRICE / 4).toFixed(2);
        $(".oney-4x-price").html(TOTAL_PRICE + CURRENCY_CHARACTER);
    } else {
        $(".price-info").find(".price-cost").html(addComma(currentPrice + currentPrice_ACC) + CURRENCY_CHARACTER);
        $(".price-info").find(".price-final").html(addComma(promotionPrice + currentPrice_ACC) + CURRENCY_CHARACTER);
        TOTAL_PRICE = promotionPrice + currentPrice_ACC;
        TOTAL_PRICE = Number(TOTAL_PRICE / 4).toFixed(2);
        $(".oney-4x-price").html(TOTAL_PRICE + CURRENCY_CHARACTER);
    }
}

// PRODUCT IN STOCK ?
/*function productIsInStock(pid, idx) {
    console.log("-- in stock ? ", pid, idx);
    $.ajax({
        url: API_DOMAIN + SITE_CD + '/ng/p4v1/getRealTimeProductSimpleInfo?productCode=' + pid,
        dataType: 'jsonp',
        success: function(data) {
            $(data).each(function(idx, el) {
                if (data.stockLevelStatus === 'outOfStock' || data.stockLevelStatus === '' || data.resultCode === '0001') {
                    console.log("-- not in stock", data);
                    $('.product-option button[data-sku=' + data.code + ']').addClass('disabled');
                }
            });
        }
    });
}*/


function productIsInStock(pid, idx) {
    //console.log("---- in stock ? ", pid);
    if(pid != 0){
/*        console.log("jjj15412");*/
        $.ajax({
            url: API_DOMAIN + SITE_CD + '/ng/p4v1/getRealTimeProductSimpleInfo?productCode=' + pid,
            dataType: 'jsonp',
            success: function(data) {
                $(data).each(function(idx, el) {
                   //console.log(data.code)
                    //Set item price
                    $('.product-option button[data-sku=' + data.code + ']').attr('data-price', data.price);

                    if (data.stockLevelStatus === 'outOfStock' || data.stockLevelStatus === '' || data.resultCode === '0001') {
                    //if (data.stockLevelStatus === 'outOfStock' || data.stockLevelStatus === '' || data.resultCode === '0001' || data.code =="EF-ZG950CLEGWW" || data.code == "SM-G950FZSAXEF" || data.code =="EO-SG710CSEGWW") {
                        //console.log("---- not in stock : ", data.code);
                        $('.product-option button[data-sku=' + data.code + ']').addClass('disabled');
                        $('.product-component button[data-sku=' + data.code + ']').addClass('disabled');
                    }
                });
            }
        });
    }
}

// UPDATE CLEARVIEW COLOR BUTTONS
function updateClearViewColorButtons(){
    var _clearViewColorHtml = '';
    var totalClearViewColor = CLEARVIEW_SKU[modelIdx].length;
    var isActive = "active";

    for (var i=0; i < totalClearViewColor; i++) {
        _clearViewColorHtml += '<button title="' + CLEARVIEW_COLOR[i].name + '" data-omni-type="microsite_gallery" data-sku="' + CLEARVIEW_SKU[modelIdx][i] + '" class="statusButton ' + isActive + ' inStock" data-omni="recommend product_color" data-color-idx="' + i + '" tabindex="0" data-price="59,90€"><span style="background-color:' + CLEARVIEW_COLOR[i].hexa + ';">' + CLEARVIEW_COLOR[i].name + '</span></button>';
        isActive = '';

        productIsInStock(CLEARVIEW_SKU[modelIdx][i], i);
    }

    optionSelect5.empty();
    optionSelect5.html(_clearViewColorHtml);
}


 // call buyNowAPI
function buyNow(urlApi, checkApi) {

    // ajax API
    var count = 0,
        paramater = 'quantity=1&productCode=',
        accParamater = '',
        quantity = [];

    // tagging
    var resultName = [],
        resultPid = [],
        tagModelCode = '',
        timer = 1,
        tagPid = '';

    var TMP_CHOICE_PRODUCT = [];

    //Model
    for(i=0;i<CHOICE_PRODUCT.length;i++){
        TMP_CHOICE_PRODUCT.push(CHOICE_PRODUCT[i]);
    }

    var hasPack = $('.product-cont.desktop .item-list>span[data-pack-num]').length > 0;

    if (hasPack && $('.achat').hasClass('active')) {
        // Index of the pack in the array
        //console.log("!!! ", packIdx, colorClearViewIdx);
        //var tmpPackIdx = packIdx%PRODUCT_DATA.model.length;

        //ADD PACK, except id PACK = none
        if(packIdx < 2){
            TMP_CHOICE_PRODUCT.push(PRODUCT_DATA.pack[modelIdx][packIdx][1]);
        }else if(packIdx == 3){
            //Clear View
            TMP_CHOICE_PRODUCT.push(CLEARVIEW_SKU[modelIdx][colorClearViewIdx]);
        }
    }

    $.each(TMP_CHOICE_PRODUCT, function(index, ele) {
        if ($.inArray(ele, resultName) === -1) {
            resultName.push(ele);
        }
    });

    //console.log("$$$$$$$$$$$ ", TMP_CHOICE_PRODUCT);


    if (TMP_CHOICE_PRODUCT.length != 0) {
        $.each(resultName, function(index, ele) {
            if (index != 0) {
                tagModelCode += ';';
            }
            tagModelCode += resultName[index];
            tagModelCode += ',';

            tagPid += resultName[index];
            tagPid += ',';
        });

        tagPid = tagPid.slice(0, -1);
        tagModelCode = tagModelCode.slice(0, -1);

        $('.order-box .pre-inner .total-box .btn-order .btn-default').attr('data-omni-type', 'microsite_cartandshop');
        $('.order-box .pre-inner .total-box .btn-order .btn-default').attr('data-omni', ";" + tagModelCode + "|" + tagPid);

        var totalArticles = 0;

        //console.log('---SELECTED PRODUCTS---');
        for (var i = 0; i < TMP_CHOICE_PRODUCT.length; i++) {
            var keyPid = TMP_CHOICE_PRODUCT[i];

            if (!quantity[keyPid]) {
                quantity[keyPid] = 1;
                totalArticles++;
            } else{
                quantity[keyPid]++;
            }
        }

        for (var accPid in quantity) {
            (function(timer, accPid) {
                setTimeout(function() {
                    accParamater = "quantity=" + quantity[accPid] + "&productCode=" + accPid;        
/*                    console.log("jjj1540");*/    
                    $.ajax({
                        url: urlApi + accParamater,
                        dataType: 'jsonp',
                    }).success(function() {
                        //if (timer === TMP_CHOICE_PRODUCT.length) {
                        if (timer === totalArticles) {
                            //return;
                            location.href = checkApi;
                        }
                    }).error(function(){
                        console.log("ERREUR");
                    })
                }, 700 * timer);

            })(timer, accPid);
            timer++;
        }
    }
}


 function getPrice(pid, idx) {
    //console.log("::: GET PRICE");
    var countAccGet = 0;
/*        console.log("jjj15560");*/
        $.ajax({
        url: API_DOMAIN + SITE_CD + '/ng/p4v1/getRealTimeProductSimpleInfo?productCode=' + pid,
        dataType: 'jsonp',

        success: function(data) {
            if (data && data.resultCode === '0000') {
                var productPrice = '';

                if (data.promotionPrice === '') {
                    productPrice = numberFormat(data.price.trim().replace(/[^0-9.,.]/g, ''));   
                    $(".accessorise div[data-sku=" + data.code + "]").find(".product-price").html(addComma(productPrice) + CURRENCY_CHARACTER);
                } else {
                    oldPrice = numberFormat(data.price.trim().replace(/[^0-9.,.]/g, ''));
                    productPrice = numberFormat(data.promotionPrice.trim().replace(/[^0-9.,.]/g, ''));
                    $(".accessorise div[data-sku=" + data.code + "]").find(".product-price").html("<p><del>" + addComma(oldPrice) + CURRENCY_CHARACTER + "</del></p><p>"  + addComma(promotionPrice) + CURRENCY_CHARACTER + "</p>");
                }

/*                $(".accessorise div[data-sku=" + data.code + "]").find(".product-price").html(addComma(productPrice) + CURRENCY_CHARACTER);
*/                //console.log("+++", productPrice);
            }

            var dataPrice = numberFormat(data.price.trim().replace(/[^0-9.,.]/g, ''));

            $('.accessorise .statusButton[data-sku=' + data.code + ']').attr('data-price', addComma(dataPrice) + CURRENCY_CHARACTER);

            if (data.stockLevelStatus === 'outOfStock' || data.stockLevelStatus === '' || data.resultCode === '0001') {
                $('.accessorise .statusButton[data-sku=' + data.code + ']').addClass('disabled');
                $('.slick-list div[data-sku=' + data.code + ']').addClass('disabled');
                $('.slick-list div[data-sku=' + data.code + '] .option-select button').html('RUPTURE DE STOCK').attr('disabled', 'disabled');
            } else {
                $('.accessorise .statusButton[data-sku=' + data.code + ']').addClass('inStock');

            }
            countAccGet += 1;
 

            if (countAccGet === countAcc) {
                switchAcc();
            }
        }
    });
}


// buynow
function goBuy() {
    clickPreorder();
}

// pre order
function clickPreorder() {
    var selectIdx = $(".model-choose .color li.active").index();
    // pid = PRICE_INFO[selectIdx][0],
    // name = PRODUCT_DATA.model[0],
    var checkCookieAPI = '',
        buyNowAPI = '',
        addCartAPI = '',
        cartAndCheckAPI = API_DOMAIN + SITE_CD + '/cart';

    if (!IS_GLOBAL) {
        checkCookieAPI = API_DOMAIN + SITE_CD + '/ng/p4v1/makeBuyNowCookie';
        addCartAPI = API_DOMAIN + SITE_CD + '/ng/p4v1/addCart?';
        
        $.ajax({
            url: checkCookieAPI,
            dataType: 'jsonp',
            success: function(data) {
                if (data.resultCode == '0000') {
                    buyNow(addCartAPI, cartAndCheckAPI);
                } else {
                    alert('Désolé ce produit est momentanément en rupture de stock.');
                }
            }
        });

    } else {
        buyNowAPI = API_DOMAIN + SITE_CD + '/ng/p4v1/addCart?';
        buyNow(buyNowAPI, cartAndCheckAPI);
    }
}

//PRICE DATA
function priceData(m, e, c, acc, acc_color) {
    //console.log( PRICE_INFO[m]);
    PID = PRICE_INFO[m][e][c][0].modelCode;
    findStore(PID); //find Store
    CHOICE_PRODUCT.splice(0, 1, PID);
    checkCookieAPI = API_DOMAIN + SITE_CD + '/ng/p4v1/getRealTimeProductSimpleInfo?productCode=' + PID;
    var acc_total = 0,
        acc_idx,
        acc_color_idx,
        acc_price = [];

    $.ajax({
        url: checkCookieAPI,
        dataType: 'jsonp',
        success: function(data) {
            if (data && data.resultCode == '0000') {
                productPrice = numberFormat(data.price.trim().replace(/[^0-9.,.]/g, ''));
                promotionPrice = numberFormat(data.promotionPrice.trim().replace(/[^0-9.,.]/g, ''));
                if (acc == undefined) {
                    acc_total = 0;
                    if (data.promotionPrice == "") {
                        priceInp(productPrice, acc_total);
                    } else {
                        priceInp(productPrice, acc_total, promotionPrice);
                    }
                } else if (acc != undefined) {
                    CHOICE_PRODUCT.splice(1);

                    $(".accessorise .option-select").find("button.active").each(function(i, v) {
                        var acc_price_ws = $(this).parent().parent().find('.product-price').text();
                        
                        acc_price_ws = acc_price_ws.replace(",", ".");
                        acc_price_ws = acc_price_ws.replace("€", "");
                       

                        // parseFloat(acc_price_ws);
                        acc_idx = $(this).attr("data-acc-index");
                        acc_color_idx = $(this).parent().parent().parent().find('.color-chip button.active').attr("data-acc-idx");

                            var i = modelIdx;
                            if (data.promotionPrice == "") {
                                acc_price.push(Number(acc_price_ws));
                            } else {
                                acc_price.push(Number(data.promotionPrice));
                            }
                            CHOICE_PRODUCT.push(ACCESSORY_DATA[i][acc_idx].modelCode[acc_color_idx]);
                        

                    });

                    for (var i = 0; i < acc_price.length; i++) {
                        acc_total += acc_price[i];
                    }

                    if (data.promotionPrice == "") {
                        priceInp(productPrice, acc_total);

                        console.log(acc_total);
                    } else {
                        priceInp(productPrice, acc_total, promotionPrice);
                    }
                }
            } /*else if (data && data.resultCode == '0001') {
                if (modelIdx === '0') { 
                    var productPrice = 809;
                } else if (modelIdx === '1') {
                    var productPrice = 909;
                } else {
                    var  productPrice = '--';
                }
                $('.price-final').text(priceInp(productPrice));
            }*/
            // console.log(CHOICE_PRODUCT);

        }
    });
}


function findStore(PID) {
    var defHref = "http://www.samsung.com/sg/storelocator/?modelCode=";
    $(".btn-store").find(">a").attr("data-omni-type", 'microsite_buyStore');
    $(".btn-store").find(">a").attr("data-omni", 'locator|;' + PID.toLowerCase());
    $(".btn-store").find(">a").attr("href", defHref + PID);
}




/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

var kjQuery = jQuery;

(function(window, document, $, undefined) {
    "use strict";

    var H = $("html"),
        W = $(window),
        D = $(document),
        F = $.fancybox = function() {
            F.open.apply(this, arguments);
        },
        IE = navigator.userAgent.match(/msie/i),
        didUpdate = null,
        isTouch = document.createTouch !== undefined,

        isQuery = function(obj) {
            return obj && obj.hasOwnProperty && obj instanceof $;
        },
        isString = function(str) {
            return str && $.type(str) === "string";
        },
        isPercentage = function(str) {
            return isString(str) && str.indexOf('%') > 0;
        },
        isScrollable = function(el) {
            return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
        },
        getScalar = function(orig, dim) {
            var value = parseInt(orig, 10) || 0;

            if (dim && isPercentage(orig)) {
                value = F.getViewport()[dim] / 100 * value;
            }

            return Math.ceil(value);
        },
        getValue = function(value, dim) {
            return getScalar(value, dim) + 'px';
        };

    $.extend(F, {
        // The current version of fancyBox
        version: '2.1.5',

        defaults: {
            padding: 15,
            margin: 20,

            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1, // Set to 2 for retina display support

            autoSize: true,
            autoHeight: false,
            autoWidth: false,

            autoResize: true,
            autoCenter: !isTouch,
            fitToView: true,
            aspectRatio: false,
            topRatio: 0.5,
            leftRatio: 0.5,

            scrolling: 'no', // 'auto', 'yes' or 'no'
            wrapCSS: '',

            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3000,
            preload: 3,
            modal: false,
            loop: true,

            ajax: {
                dataType: 'html',
                headers: {
                    'X-fancyBox': true
                }
            },
            iframe: {
                scrolling: 'auto',
                preload: true
            },
            swf: {
                wmode: 'transparent',
                allowfullscreen: 'true',
                allowscriptaccess: 'always'
            },

            keys: {
                next: {
                    13: 'left', // enter
                    34: 'up', // page down
                    39: 'left', // right arrow
                    40: 'up' // down arrow
                },
                prev: {
                    8: 'right', // backspace
                    33: 'down', // page up
                    37: 'right', // left arrow
                    38: 'down' // up arrow
                },
                close: [27], // escape key
                play: [32], // space - start/stop slideshow
                toggle: [70] // letter "f" - toggle fullscreen
            },

            direction: {
                next: 'left',
                prev: 'right'
            },

            scrollOutside: false,

            // Override some properties
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,

            // HTML templates
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },

            // Properties for each animation type
            // Opening fancyBox
            openEffect: 'fade', // 'elastic', 'fade' or 'none'
            openSpeed: 250,
            openEasing: 'swing',
            openOpacity: true,
            openMethod: 'zoomIn',

            // Closing fancyBox
            closeEffect: 'fade', // 'elastic', 'fade' or 'none'
            closeSpeed: 250,
            closeEasing: 'swing',
            closeOpacity: true,
            closeMethod: 'zoomOut',

            // Changing next gallery item
            nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
            nextSpeed: 250,
            nextEasing: 'swing',
            nextMethod: 'changeIn',

            // Changing previous gallery item
            prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
            prevSpeed: 250,
            prevEasing: 'swing',
            prevMethod: 'changeOut',

            // Enable default helpers
            helpers: {
                overlay: true,
                title: true
            },

            // Callbacks
            onCancel: $.noop, // If canceling
            beforeLoad: $.noop, // Before loading
            afterLoad: $.noop, // After loading
            beforeShow: $.noop, // Before changing in current item
            afterShow: $.noop, // After opening
            beforeChange: $.noop, // Before changing gallery item
            beforeClose: $.noop, // Before closing
            afterClose: $.noop // After closing
        },

        //Current state
        group: {}, // Selected group
        opts: {}, // Group options
        previous: null, // Previous element
        coming: null, // Element being loaded
        current: null, // Currently loaded element
        isActive: false, // Is activated
        isOpen: false, // Is currently open
        isOpened: false, // Have been fully opened at least once

        wrap: null,
        skin: null,
        outer: null,
        inner: null,

        player: {
            timer: null,
            isActive: false
        },

        // Loaders
        ajaxLoad: null,
        imgPreload: null,

        // Some collections
        transitions: {},
        helpers: {},

        /*
         *  Static methods
         */

        open: function(group, opts) {
            if (!group) {
                return;
            }

            if (!$.isPlainObject(opts)) {
                opts = {};
            }

            // Close if already active
            if (false === F.close(true)) {
                return;
            }

            // Normalize group
            if (!$.isArray(group)) {
                group = isQuery(group) ? $(group).get() : [group];
            }

            // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
            $.each(group, function(i, element) {
                var obj = {},
                    href,
                    title,
                    content,
                    type,
                    rez,
                    hrefParts,
                    selector;

                if ($.type(element) === "object") {
                    // Check if is DOM element
                    if (element.nodeType) {
                        element = $(element);
                    }

                    if (isQuery(element)) {
                        obj = {
                            href: element.data('fancybox-href') || element.attr('href'),
                            title: element.data('fancybox-title') || element.attr('title'),
                            isDom: true,
                            element: element
                        };

                        if ($.metadata) {
                            $.extend(true, obj, element.metadata());
                        }

                    } else {
                        obj = element;
                    }
                }

                href = opts.href || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || '';

                content = opts.content || obj.content;
                type = content ? 'html' : (opts.type || obj.type);

                if (!type && obj.isDom) {
                    type = element.data('fancybox-type');

                    if (!type) {
                        rez = element.prop('class').match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null;
                    }
                }

                if (isString(href)) {
                    // Try to guess the content type
                    if (!type) {
                        if (F.isImage(href)) {
                            type = 'image';

                        } else if (F.isSWF(href)) {
                            type = 'swf';

                        } else if (href.charAt(0) === '#') {
                            type = 'inline';

                        } else if (isString(element)) {
                            type = 'html';
                            content = element;
                        }
                    }

                    // Split url into two pieces with source url and content selector, e.g,
                    // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                    if (type === 'ajax') {
                        hrefParts = href.split(/\s+/, 2);
                        href = hrefParts.shift();
                        selector = hrefParts.shift();
                    }
                }

                if (!content) {
                    if (type === 'inline') {
                        if (href) {
                            content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7

                        } else if (obj.isDom) {
                            content = element;
                        }

                    } else if (type === 'html') {
                        content = href;

                    } else if (!type && !href && obj.isDom) {
                        type = 'inline';
                        content = element;
                    }
                }

                $.extend(obj, {
                    href: href,
                    type: type,
                    content: content,
                    title: title,
                    selector: selector
                });

                group[i] = obj;
            });

            // Extend the defaults
            F.opts = $.extend(true, {}, F.defaults, opts);

            // All options are merged recursive except keys
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
            }

            F.group = group;

            return F._start(F.opts.index);
        },

        // Cancel image loading or abort ajax request
        cancel: function() {
            var coming = F.coming;

            if (!coming || false === F.trigger('onCancel')) {
                return;
            }

            F.hideLoading();

            if (F.ajaxLoad) {
                F.ajaxLoad.abort();
            }

            F.ajaxLoad = null;

            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null;
            }

            if (coming.wrap) {
                coming.wrap.stop(true, true).trigger('onReset').remove();
            }

            F.coming = null;

            // If the first item has been canceled, then clear everything
            if (!F.current) {
                F._afterZoomOut(coming);
            }
        },

        // Start closing animation if is open; remove immediately if opening/closing
        close: function(event) {
            F.cancel();

            if (false === F.trigger('beforeClose')) {
                return;
            }

            F.unbindEvents();

            if (!F.isActive) {
                return;
            }

            if (!F.isOpen || event === true) {
                $('.fancybox-wrap').stop(true).trigger('onReset').remove();

                F._afterZoomOut();

            } else {
                F.isOpen = F.isOpened = false;
                F.isClosing = true;

                $('.fancybox-item, .fancybox-nav').remove();

                F.wrap.stop(true, true).removeClass('fancybox-opened');

                F.transitions[F.current.closeMethod]();
            }
        },

        // Manage slideshow:
        //   $.fancybox.play(); - toggle slideshow
        //   $.fancybox.play( true ); - start
        //   $.fancybox.play( false ); - stop
        play: function(action) {
            var clear = function() {
                    clearTimeout(F.player.timer);
                },
                set = function() {
                    clear();

                    if (F.current && F.player.isActive) {
                        F.player.timer = setTimeout(F.next, F.current.playSpeed);
                    }
                },
                stop = function() {
                    clear();

                    D.unbind('.player');

                    F.player.isActive = false;

                    F.trigger('onPlayEnd');
                },
                start = function() {
                    if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                        F.player.isActive = true;

                        D.bind({
                            'onCancel.player beforeClose.player': stop,
                            'onUpdate.player': set,
                            'beforeLoad.player': clear
                        });

                        set();

                        F.trigger('onPlayStart');
                    }
                };

            if (action === true || (!F.player.isActive && action !== false)) {
                start();
            } else {
                stop();
            }
        },

        // Navigate to next gallery item
        next: function(direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next;
                }

                F.jumpto(current.index + 1, direction, 'next');
            }
        },

        // Navigate to previous gallery item
        prev: function(direction) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev;
                }

                F.jumpto(current.index - 1, direction, 'prev');
            }
        },

        // Navigate to gallery item by index
        jumpto: function(index, direction, router) {
            var current = F.current;

            if (!current) {
                return;
            }

            index = getScalar(index);

            F.direction = direction || current.direction[(index >= current.index ? 'next' : 'prev')];
            F.router = router || 'jumpto';

            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + (index % current.group.length);
                }

                index = index % current.group.length;
            }

            if (current.group[index] !== undefined) {
                F.cancel();

                F._start(index);
            }
        },

        // Center inside viewport and toggle position type to fixed or absolute if needed
        reposition: function(e, onlyAbsolute) {
            var current = F.current,
                wrap = current ? current.wrap : null,
                pos;

            if (wrap) {
                pos = F._getPosition(onlyAbsolute);
                wrap.css(pos);

                current.pos = $.extend({}, current.dim, pos);
                // if (e && e.type === 'scroll') {
                //  delete pos.position;

                //  wrap.stop(true, true).animate(pos, 200);

                // } else {
                //  wrap.css(pos);

                //  current.pos = $.extend({}, current.dim, pos);
                // }
            }
        },

        update: function(e) {
            var type = (e && e.type),
                anyway = !type || type === 'orientationchange';

            if (anyway) {
                clearTimeout(didUpdate);

                didUpdate = null;
            }

            if (!F.isOpen || didUpdate) {
                return;
            }

            didUpdate = setTimeout(function() {
                var current = F.current;

                if (!current || F.isClosing) {
                    return;
                }

                F.wrap.removeClass('fancybox-tmp');

                if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                    F._setDimension();
                }

                if (!(type === 'scroll' && current.canShrink)) {
                    F.reposition(e);
                }

                F.trigger('onUpdate');

                didUpdate = null;

            }, (anyway && !isTouch ? 0 : 300));
        },

        // Shrink content to fit inside viewport or restore if resized
        toggle: function(action) {
            if (F.isOpen) {
                F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

                // Help browser to restore document dimensions
                if (isTouch) {
                    F.wrap.removeAttr('style').addClass('fancybox-tmp');

                    F.trigger('onUpdate');
                }

                F.update();
            }
        },

        hideLoading: function() {
            D.unbind('.loading');

            $('#fancybox-loading').remove();
        },

        showLoading: function() {
            var el, viewport;

            F.hideLoading();

            el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

            // If user will press the escape-button, the request will be canceled
            D.bind('keydown.loading', function(e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();

                    F.cancel();
                }
            });

            if (!F.defaults.fixed) {
                viewport = F.getViewport();

                el.css({
                    position: 'absolute',
                    top: (viewport.h * 0.5) + viewport.y,
                    left: (viewport.w * 0.5) + viewport.x
                });
            }
        },

        getViewport: function() {
            var locked = (F.current && F.current.locked) || false,
                rez = {
                    x: W.scrollLeft(),
                    y: W.scrollTop()
                };

            if (locked) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight;

            } else {
                // See http://bugs.jquery.com/ticket/6724
                rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
            }

            return rez;
        },

        // Unbind the keyboard / clicking actions
        unbindEvents: function() {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind('.fb');
            }

            D.unbind('.fb');
            W.unbind('.fb');
        },

        bindEvents: function() {
            var current = F.current,
                keys;

            if (!current) {
                return;
            }

            // Changing document height on iOS devices triggers a 'resize' event,
            // that can change document height... repeating infinitely
            W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

            keys = current.keys;

            if (keys) {
                D.bind('keydown.fb', function(e) {
                    var code = e.which || e.keyCode,
                        target = e.target || e.srcElement;

                    // Skip esc key if loading, because showLoading will cancel preloading
                    if (code === 27 && F.coming) {
                        return false;
                    }

                    // Ignore key combinations and key events within form elements
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                        $.each(keys, function(i, val) {
                            if (current.group.length > 1 && val[code] !== undefined) {
                                F[i](val[code]);

                                e.preventDefault();
                                return false;
                            }

                            if ($.inArray(code, val) > -1) {
                                F[i]();

                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }

            if ($.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind('mousewheel.fb', function(e, delta, deltaX, deltaY) {
                    var target = e.target || null,
                        parent = $(target),
                        canScroll = false;

                    while (parent.length) {
                        if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                            break;
                        }

                        canScroll = isScrollable(parent[0]);
                        parent = $(parent).parent();
                    }

                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev(deltaY > 0 ? 'down' : 'left');

                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next(deltaY < 0 ? 'up' : 'right');
                            }

                            e.preventDefault();
                        }
                    }
                });
            }
        },

        trigger: function(event, o) {
            var ret, obj = o || F.coming || F.current;

            if (!obj) {
                return;
            }

            if ($.isFunction(obj[event])) {
                ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
            }

            if (ret === false) {
                return false;
            }

            if (obj.helpers) {
                $.each(obj.helpers, function(helper, opts) {
                    if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                        F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                    }
                });
            }

            D.trigger(event);
        },

        isImage: function(str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },

        isSWF: function(str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },

        _start: function(index) {
            var coming = {},
                obj,
                href,
                type,
                margin,
                padding;

            index = getScalar(index);
            obj = F.group[index] || null;

            if (!obj) {
                return false;
            }

            coming = $.extend(true, {}, F.opts, obj);

            // Convert margin and padding properties to array - top, right, bottom, left
            margin = coming.margin;
            padding = coming.padding;

            if ($.type(margin) === 'number') {
                coming.margin = [margin, margin, margin, margin];
            }

            if ($.type(padding) === 'number') {
                coming.padding = [padding, padding, padding, padding];
            }

            // 'modal' propery is just a shortcut
            if (coming.modal) {
                $.extend(true, coming, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                });
            }

            // 'autoSize' property is a shortcut, too
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = true;
            }

            if (coming.width === 'auto') {
                coming.autoWidth = true;
            }

            if (coming.height === 'auto') {
                coming.autoHeight = true;
            }

            /*
             * Add reference to the group, so it`s possible to access from callbacks, example:
             * afterLoad : function() {
             *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
             * }
             */

            coming.group = F.group;
            coming.index = index;

            // Give a chance for callback or helpers to update coming item (type, title, etc)
            F.coming = coming;

            if (false === F.trigger('beforeLoad')) {
                F.coming = null;

                return;
            }

            type = coming.type;
            href = coming.href;

            if (!type) {
                F.coming = null;

                //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                if (F.current && F.router && F.router !== 'jumpto') {
                    F.current.index = index;

                    return F[F.router](F.direction);
                }

                return false;
            }

            F.isActive = true;

            if (type === 'image' || type === 'swf') {
                coming.autoHeight = coming.autoWidth = false;
                coming.scrolling = 'visible';
            }

            if (type === 'image') {
                coming.aspectRatio = true;
            }

            if (type === 'iframe' && isTouch) {
                coming.scrolling = 'scroll';
            }

            // Build the neccessary markup
            coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

            $.extend(coming, {
                skin: $('.fancybox-skin', coming.wrap),
                outer: $('.fancybox-outer', coming.wrap),
                inner: $('.fancybox-inner', coming.wrap)
            });

            $.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
                coming.skin.css('padding' + v, getValue(coming.padding[i]));
            });

            F.trigger('onReady');

            // Check before try to load; 'inline' and 'html' types need content, others - href
            if (type === 'inline' || type === 'html') {
                if (!coming.content || !coming.content.length) {
                    return F._error('content');
                }

            } else if (!href) {
                return F._error('href');
            }

            if (type === 'image') {
                F._loadImage();

            } else if (type === 'ajax') {
                F._loadAjax();

            } else if (type === 'iframe') {
                F._loadIframe();

            } else {
                F._afterLoad();
            }
        },

        _error: function(type) {
            $.extend(F.coming, {
                type: 'html',
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: 'no',
                hasError: type,
                content: F.coming.tpl.error
            });

            F._afterLoad();
        },

        _loadImage: function() {
            // Reset preload image so it is later possible to check "complete" property
            var img = F.imgPreload = new Image();

            img.onload = function() {
                this.onload = this.onerror = null;

                F.coming.width = this.width / F.opts.pixelRatio;
                F.coming.height = this.height / F.opts.pixelRatio;

                F._afterLoad();
            };

            img.onerror = function() {
                this.onload = this.onerror = null;

                F._error('image');
            };

            img.src = F.coming.href;

            if (img.complete !== true) {
                F.showLoading();
            }
        },

        _loadAjax: function() {
            var coming = F.coming;

            F.showLoading();

            F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                url: coming.href,
                error: function(jqXHR, textStatus) {
                    if (F.coming && textStatus !== 'abort') {
                        F._error('ajax', jqXHR);

                    } else {
                        F.hideLoading();
                    }
                },
                success: function(data, textStatus) {
                    if (textStatus === 'success') {
                        coming.content = data;

                        F._afterLoad();
                    }
                }
            }));
        },

        _loadIframe: function() {
            var coming = F.coming,
                iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                .attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
                .attr('src', coming.href);

            // This helps IE
            $(coming.wrap).bind('onReset', function() {
                try {
                    $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                } catch (e) {}
            });

            if (coming.iframe.preload) {
                F.showLoading();

                iframe.one('load', function() {
                    $(this).data('ready', 1);

                    // iOS will lose scrolling if we resize
                    if (!isTouch) {
                        $(this).bind('load.fb', F.update);
                    }

                    // Without this trick:
                    //   - iframe won't scroll on iOS devices
                    //   - IE7 sometimes displays empty iframe
                    $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

                    F._afterLoad();
                });
            }

            coming.content = iframe.appendTo(coming.inner);

            if (!coming.iframe.preload) {
                F._afterLoad();
            }
        },

        _preloadImages: function() {
            var group = F.group,
                current = F.current,
                len = group.length,
                cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
                item,
                i;

            for (i = 1; i <= cnt; i += 1) {
                item = group[(current.index + i) % len];

                if (item.type === 'image' && item.href) {
                    new Image().src = item.href;
                }
            }
        },

        _afterLoad: function() {
            var coming = F.coming,
                previous = F.current,
                placeholder = 'fancybox-placeholder',
                current,
                content,
                type,
                scrolling,
                href,
                embed;

            F.hideLoading();

            if (!coming || F.isActive === false) {
                return;
            }

            if (false === F.trigger('afterLoad', coming, previous)) {
                coming.wrap.stop(true).trigger('onReset').remove();

                F.coming = null;

                return;
            }

            if (previous) {
                F.trigger('beforeChange', previous);

                previous.wrap.stop(true).removeClass('fancybox-opened')
                    .find('.fancybox-item, .fancybox-nav')
                    .remove();
            }

            F.unbindEvents();

            current = coming;
            content = coming.content;
            type = coming.type;
            scrolling = coming.scrolling;

            $.extend(F, {
                wrap: current.wrap,
                skin: current.skin,
                outer: current.outer,
                inner: current.inner,
                current: current,
                previous: previous
            });

            href = current.href;

            switch (type) {
                case 'inline':
                case 'ajax':
                case 'html':
                    if (current.selector) {
                        content = $('<div>').html(content).find(current.selector);

                    } else if (isQuery(content)) {
                        if (!content.data(placeholder)) {
                            content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
                        }

                        content = content.show().detach();

                        current.wrap.bind('onReset', function() {
                            if ($(this).find(content).length) {
                                content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
                            }
                        });
                    }
                    break;

                case 'image':
                    content = current.tpl.image.replace('{href}', href);
                    break;

                case 'swf':
                    content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                    embed = '';

                    $.each(current.swf, function(name, val) {
                        content += '<param name="' + name + '" value="' + val + '"></param>';
                        embed += ' ' + name + '="' + val + '"';
                    });

                    content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                    break;
            }

            if (!(isQuery(content) && content.parent().is(current.inner))) {
                current.inner.append(content);
            }

            // Give a chance for helpers or callbacks to update elements
            F.trigger('beforeShow');

            // Set scrolling before calculating dimensions
            current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

            // Set initial dimensions and start position
            F._setDimension();

            F.reposition();

            F.isOpen = false;
            F.coming = null;

            F.bindEvents();

            if (!F.isOpened) {
                $('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();

            } else if (previous.prevMethod) {
                F.transitions[previous.prevMethod]();
            }

            F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();

            F._preloadImages();
        },

        _setDimension: function() {
            var viewport = F.getViewport(),
                steps = 0,
                canShrink = false,
                canExpand = false,
                wrap = F.wrap,
                skin = F.skin,
                inner = F.inner,
                current = F.current,
                width = current.width,
                height = current.height,
                minWidth = current.minWidth,
                minHeight = current.minHeight,
                maxWidth = current.maxWidth,
                maxHeight = current.maxHeight,
                scrolling = current.scrolling,
                scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
                margin = current.margin,
                wMargin = getScalar(margin[1] + margin[3]),
                hMargin = getScalar(margin[0] + margin[2]),
                wPadding,
                hPadding,
                wSpace,
                hSpace,
                origWidth,
                origHeight,
                origMaxWidth,
                origMaxHeight,
                ratio,
                width_,
                height_,
                maxWidth_,
                maxHeight_,
                iframe,
                body;

            // Reset dimensions so we could re-check actual size
            wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

            wPadding = getScalar(skin.outerWidth(true) - skin.width());
            hPadding = getScalar(skin.outerHeight(true) - skin.height());

            // Any space between content and viewport (margin, padding, border, title)
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;

            origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;


            // console.log(iframe);

            if (current.type === 'iframe') {

                iframe = current.content;
                iframe.addClass('st_iframe_widget');

                if (current.autoHeight && iframe.data('ready') === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width(origWidth).height(9999);

                            body = iframe.contents().find('body');

                            if (scrollOut) {
                                body.css('overflow-x', 'hidden');
                            }

                            origHeight = body.outerHeight(true);
                        }

                    } catch (e) {}
                }

                inner.height(iframe.height());

            } else if (current.autoWidth || current.autoHeight) {

                inner.addClass('fancybox-tmp');

                // Set width or height in case we need to calculate only one dimension
                if (!current.autoWidth) {
                    inner.width(origWidth);
                }

                if (!current.autoHeight) {
                    inner.height(origHeight);
                }

                if (current.autoWidth) {
                    origWidth = inner.width();
                }

                if (current.autoHeight) {
                    origHeight = inner.height();
                }

                inner.removeClass('fancybox-tmp');
            }

            width = getScalar(origWidth);
            height = getScalar(origHeight);

            ratio = origWidth / origHeight;

            // Calculations for the content
            minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
            maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

            // These will be used to determine if wrap can fit in the viewport
            origMaxWidth = maxWidth;
            origMaxHeight = maxHeight;

            if (current.fitToView) {
                maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight);
            }

            maxWidth_ = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;

            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width = maxWidth;
                    height = getScalar(width / ratio);
                }

                if (height > maxHeight) {
                    height = maxHeight;
                    width = getScalar(height * ratio);
                }

                if (width < minWidth) {
                    width = minWidth;
                    height = getScalar(width / ratio);
                }

                if (height < minHeight) {
                    height = minHeight;
                    width = getScalar(height * ratio);
                }

            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));

                if (current.autoHeight && current.type !== 'iframe') {
                    inner.width(width);

                    height = inner.height();
                }

                height = Math.max(minHeight, Math.min(height, maxHeight));
            }

            // Try to fit inside viewport (including the title)
            if (current.fitToView) {
                inner.width(width).height(height);

                wrap.width(width + wPadding);

                // Real wrap dimensions
                width_ = wrap.width();
                height_ = wrap.height();

                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break;
                        }

                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width = getScalar(height * ratio);

                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio);
                        }

                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio);
                        }

                        inner.width(width).height(height);

                        wrap.width(width + wPadding);

                        width_ = wrap.width();
                        height_ = wrap.height();
                    }

                } else {
                    width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                }
            }

            if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                width += scrollOut;
            }

            inner.width(width).height(iframe.height());

            wrap.width(width + wPadding);

            width_ = wrap.width();
            height_ = wrap.height();

            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

            $.extend(current, {
                dim: {
                    width: getValue(width_),
                    height: getValue(height_)
                },
                origWidth: origWidth,
                origHeight: origHeight,
                canShrink: canShrink,
                canExpand: canExpand,
                wPadding: wPadding,
                hPadding: hPadding,
                wrapSpace: height_ - skin.outerHeight(true),
                skinSpace: skin.height() - height
            });

            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height('auto');
            }
        },

        _getPosition: function(onlyAbsolute) {
            var current = F.current,
                viewport = F.getViewport(),
                margin = current.margin,
                width = F.wrap.width() + margin[1] + margin[3],
                height = F.wrap.height() + margin[0] + margin[2],
                rez = {
                    position: 'absolute',
                    top: margin[0],
                    left: margin[3]
                };

            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = 'fixed';

            } else if (!current.locked) {
                rez.top += viewport.y;
                rez.left += viewport.x;
            }

            rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
            rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio)));

            return rez;
        },

        _afterZoomIn: function() {
            var current = F.current;

            if (!current) {
                return;
            }

            F.isOpen = F.isOpened = true;

            F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

            F.update();

            // Assign a click event
            if (current.closeClick || (current.nextClick && F.group.length > 1)) {
                F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
                    if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                        e.preventDefault();

                        F[current.closeClick ? 'close' : 'next']();
                    }
                });
            }

            // Create a close button
            if (current.closeBtn) {
                $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
                    e.preventDefault();

                    F.close();
                });
            }

            // Create navigation arrows
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                }

                if (current.loop || current.index < F.group.length - 1) {
                    $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                }
            }

            F.trigger('afterShow');

            // Stop the slideshow if this is the last item
            if (!current.loop && current.index === current.group.length - 1) {
                F.play(false);

            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = false;

                F.play();
            }
        },

        _afterZoomOut: function(obj) {
            obj = obj || F.current;

            $('.fancybox-wrap').trigger('onReset').remove();

            $.extend(F, {
                group: {},
                opts: {},
                router: false,
                current: null,
                isActive: false,
                isOpened: false,
                isOpen: false,
                isClosing: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });

            F.trigger('afterClose', obj);
        }
    });

    /*
     *  Default transitions
     */

    F.transitions = {
        getOrigPosition: function() {
            var current = F.current,
                element = current.element,
                orig = current.orig,
                pos = {},
                width = 50,
                height = 50,
                hPadding = current.hPadding,
                wPadding = current.wPadding,
                viewport = F.getViewport();

            if (!orig && current.isDom && element.is(':visible')) {
                orig = element.find('img:first');

                if (!orig.length) {
                    orig = element;
                }
            }

            if (isQuery(orig)) {
                pos = orig.offset();

                if (orig.is('img')) {
                    width = orig.outerWidth();
                    height = orig.outerHeight();
                }

            } else {
                pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
            }

            if (F.wrap.css('position') === 'fixed' || current.locked) {
                pos.top -= viewport.y;
                pos.left -= viewport.x;
            }

            pos = {
                top: getValue(pos.top - hPadding * current.topRatio),
                left: getValue(pos.left - wPadding * current.leftRatio),
                width: getValue(width + wPadding),
                height: getValue(height + hPadding)
            };

            return pos;
        },

        step: function(now, fx) {
            var ratio,
                padding,
                value,
                prop = fx.prop,
                current = F.current,
                wrapSpace = current.wrapSpace,
                skinSpace = current.skinSpace;

            if (prop === 'width' || prop === 'height') {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

                if (F.isClosing) {
                    ratio = 1 - ratio;
                }

                padding = prop === 'width' ? current.wPadding : current.hPadding;
                value = now - padding;

                F.skin[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio)));
                F.inner[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio) - (skinSpace * ratio)));
            }
        },

        zoomIn: function() {
            var current = F.current,
                startPos = current.pos,
                effect = current.openEffect,
                elastic = effect === 'elastic',
                endPos = $.extend({
                    opacity: 1
                }, startPos);

            // Remove "position" property that breaks older IE
            delete endPos.position;

            if (elastic) {
                startPos = this.getOrigPosition();

                if (current.openOpacity) {
                    startPos.opacity = 0.1;
                }

            } else if (effect === 'fade') {
                startPos.opacity = 0.1;
            }

            F.wrap.css(startPos).animate(endPos, {
                duration: effect === 'none' ? 0 : current.openSpeed,
                easing: current.openEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomIn
            });
        },

        zoomOut: function() {
            var current = F.current,
                effect = current.closeEffect,
                elastic = effect === 'elastic',
                endPos = {
                    opacity: 0.1
                };

            if (elastic) {
                endPos = this.getOrigPosition();

                if (current.closeOpacity) {
                    endPos.opacity = 0.1;
                }
            }

            F.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : current.closeSpeed,
                easing: current.closeEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomOut
            });
        },

        changeIn: function() {
            var current = F.current,
                effect = current.nextEffect,
                startPos = current.pos,
                endPos = {
                    opacity: 1
                },
                direction = F.direction,
                distance = 200,
                field;

            startPos.opacity = 0.1;

            if (effect === 'elastic') {
                field = direction === 'down' || direction === 'up' ? 'top' : 'left';

                if (direction === 'down' || direction === 'right') {
                    startPos[field] = getValue(getScalar(startPos[field]) - distance);
                    endPos[field] = '+=' + distance + 'px';

                } else {
                    startPos[field] = getValue(getScalar(startPos[field]) + distance);
                    endPos[field] = '-=' + distance + 'px';
                }
            }

            // Workaround for http://bugs.jquery.com/ticket/12273
            if (effect === 'none') {
                F._afterZoomIn();

            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration: current.nextSpeed,
                    easing: current.nextEasing,
                    complete: F._afterZoomIn
                });
            }
        },

        changeOut: function() {
            var previous = F.previous,
                effect = previous.prevEffect,
                endPos = {
                    opacity: 0.1
                },
                direction = F.direction,
                distance = 200;

            if (effect === 'elastic') {
                endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
            }

            previous.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : previous.prevSpeed,
                easing: previous.prevEasing,
                complete: function() {
                    $(this).trigger('onReset').remove();
                }
            });
        }
    };

    /*
     *  Overlay helper
     */

    F.helpers.overlay = {
        defaults: {
            closeClick: true, // if true, fancyBox will be closed when user clicks on the overlay
            speedOut: 200, // duration of fadeOut animation
            showEarly: true, // indicates if should be opened immediately or wait until the content is ready
            css: {}, // custom CSS properties
            locked: false, // if true, the content will be locked into overlay
            fixed: true // if false, the overlay CSS position property will not be set to "fixed"
        },

        overlay: null, // current handle
        fixed: false, // indicates if the overlay has position "fixed"
        el: $('html'), // element that contains "the lock"

        // Public methods
        create: function(opts) {
            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.close();
            }

            this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(F.coming ? F.coming.parent : opts.parent);
            this.fixed = false;

            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass('fancybox-overlay-fixed');

                this.fixed = true;
            }
        },

        open: function(opts) {
            var that = this;

            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.overlay.unbind('.overlay').width('auto').height('auto');

            } else {
                this.create(opts);
            }

            if (!this.fixed) {
                W.bind('resize.overlay', $.proxy(this.update, this));

                this.update();
            }

            if (opts.closeClick) {
                this.overlay.bind('click.overlay', function(e) {
                    if ($(e.target).hasClass('fancybox-overlay')) {
                        if (F.isActive) {
                            F.close();
                        } else {
                            that.close();
                        }

                        return false;
                    }
                });
            }

            this.overlay.css(opts.css).show();
        },

        close: function() {
            var scrollV, scrollH;

            W.unbind('resize.overlay');

            if (this.el.hasClass('fancybox-lock')) {
                $('.fancybox-margin').removeClass('fancybox-margin');

                scrollV = W.scrollTop();
                scrollH = W.scrollLeft();

                this.el.removeClass('fancybox-lock');

                W.scrollTop(scrollV).scrollLeft(scrollH);
            }

            $('.fancybox-overlay').remove().hide();

            $.extend(this, {
                overlay: null,
                fixed: false
            });
        },

        // Private, callbacks

        update: function() {
            var width = '100%',
                offsetWidth;

            // Reset width/height so it will not mess
            this.overlay.width(width).height('100%');

            // jQuery does not return reliable result for IE
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

                if (D.width() > offsetWidth) {
                    width = D.width();
                }

            } else if (D.width() > W.width()) {
                width = D.width();
            }

            this.overlay.width(width).height(D.height());
        },

        // This is where we can manipulate DOM, because later it would cause iframes to reload
        onReady: function(opts, obj) {
            var overlay = this.overlay;

            $('.fancybox-overlay').stop(true, true);

            if (!overlay) {
                this.create(opts);
            }

            if (opts.locked && this.fixed && obj.fixed) {
                if (!overlay) {
                    this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
                }

                obj.locked = this.overlay.append(obj.wrap);
                obj.fixed = false;
            }

            if (opts.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },

        beforeShow: function(opts, obj) {
            var scrollV, scrollH;

            if (obj.locked) {
                if (this.margin !== false) {
                    $('*').filter(function() {
                        return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap"));
                    }).addClass('fancybox-margin');

                    this.el.addClass('fancybox-margin');
                }

                scrollV = W.scrollTop();
                scrollH = W.scrollLeft();

                this.el.addClass('fancybox-lock');

                W.scrollTop(scrollV).scrollLeft(scrollH);
            }

            this.open(opts);
        },

        onUpdate: function() {
            if (!this.fixed) {
                this.update();
            }
        },

        afterClose: function(opts) {
            // Remove overlay if exists and fancyBox is not opening
            // (e.g., it is not being open using afterClose callback)
            //if (this.overlay && !F.isActive) {
            if (this.overlay && !F.coming) {
                this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
            }
        }
    };

    /*
     *  Title helper
     */

    F.helpers.title = {
        defaults: {
            type: 'float', // 'float', 'inside', 'outside' or 'over',
            position: 'bottom' // 'top' or 'bottom'
        },

        beforeShow: function(opts) {
            var current = F.current,
                text = current.title,
                type = opts.type,
                title,
                target;

            if ($.isFunction(text)) {
                text = text.call(current.element, current);
            }

            if (!isString(text) || $.trim(text) === '') {
                return;
            }

            title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

            switch (type) {
                case 'inside':
                    target = F.skin;
                    break;

                case 'outside':
                    target = F.wrap;
                    break;

                case 'over':
                    target = F.inner;
                    break;

                default: // 'float'
                    target = F.skin;

                    title.appendTo('body');

                    if (IE) {
                        title.width(title.width());
                    }

                    title.wrapInner('<span class="child"></span>');

                    //Increase bottom margin so this title will also fit into viewport
                    F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
                    break;
            }

            title[(opts.position === 'top' ? 'prependTo' : 'appendTo')](target);
        }
    };

    // jQuery plugin initialization
    $.fn.fancybox = function(options) {
        var index,
            that = $(this),
            selector = this.selector || '',
            run = function(e) {
                var what = $(this).blur(),
                    idx = index,
                    relType, relVal;

                if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
                    relType = options.groupAttr || 'data-fancybox-group';
                    relVal = what.attr(relType);

                    if (!relVal) {
                        relType = 'rel';
                        relVal = what.get(0)[relType];
                    }

                    if (relVal && relVal !== '' && relVal !== 'nofollow') {
                        what = selector.length ? $(selector) : that;
                        what = what.filter('[' + relType + '="' + relVal + '"]');
                        idx = what.index(this);
                    }

                    options.index = idx;

                    // Stop an event from bubbling if everything is fine
                    if (F.open(what, options) !== false) {
                        e.preventDefault();
                    }
                }
            };

        options = options || {};
        index = options.index || 0;

        if (!selector || options.live === false) {
            that.unbind('click.fb-start').bind('click.fb-start', run);

        } else {
            D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
        }

        this.filter('[data-fancybox-start=1]').trigger('click');

        return this;
    };

    // Tests that need a body at doc ready
    D.ready(function() {
        var w1, w2;

        if ($.scrollbarWidth === undefined) {
            // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
            $.scrollbarWidth = function() {
                var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                    child = parent.children(),
                    width = child.innerWidth() - child.height(99).innerWidth();

                parent.remove();

                return width;
            };
        }

        if ($.support.fixedPosition === undefined) {
            $.support.fixedPosition = (function() {
                var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                    fixed = (elem[0].offsetTop === 20 || elem[0].offsetTop === 15);

                elem.remove();

                return fixed;
            }());
        }

        $.extend(F.defaults, {
            scrollbarWidth: $.scrollbarWidth(),
            fixed: $.support.fixedPosition,
            parent: $('body')
        });

        //Get real width of page scroll-bar
        w1 = $(window).width();

        H.addClass('fancybox-lock-test');

        w2 = $(window).width();

        H.removeClass('fancybox-lock-test');

        $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
    });



}(window, document, kjQuery));



/*! iFrame Resizer (iframeSizer.min.js ) - v3.5.5 - 2016-06-16
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2016 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

! function(a) {
    "use strict";

    function b(b, c, d) {
        "addEventListener" in a ? b.addEventListener(c, d, !1) : "attachEvent" in a && b.attachEvent("on" + c, d)
    }

    function c(b, c, d) {
        "removeEventListener" in a ? b.removeEventListener(c, d, !1) : "detachEvent" in a && b.detachEvent("on" + c, d)
    }

    function d() {
        var b, c = ["moz", "webkit", "o", "ms"];
        for (b = 0; b < c.length && !N; b += 1) N = a[c[b] + "RequestAnimationFrame"];
        N || h("setup", "RequestAnimationFrame not supported")
    }

    function e(b) {
        var c = "Host page: " + b;
        return a.top !== a.self && (c = a.parentIFrame && a.parentIFrame.getId ? a.parentIFrame.getId() + ": " + b : "Nested host page: " + b), c
    }

    function f(a) {
        return K + "[" + e(a) + "]"
    }

    function g(a) {
        return P[a] ? P[a].log : G
    }

    function h(a, b) {
        k("log", a, b, g(a))
    }

    function i(a, b) {
        k("info", a, b, g(a))
    }

    function j(a, b) {
        k("warn", a, b, !0)
    }

    function k(b, c, d, e) {
        !0 === e && "object" == typeof a.console && console[b](f(c), d)
    }

    function l(d) {
        function e() {
            function a() {
                s(V), p(W)
            }
            g("Height"), g("Width"), t(a, V, "init")
        }

        function f() {
            var a = U.substr(L).split(":");
            return {
                iframe: P[a[0]].iframe,
                id: a[0],
                height: a[1],
                width: a[2],
                type: a[3]
            }
        }

        function g(a) {
            var b = Number(P[W]["max" + a]),
                c = Number(P[W]["min" + a]),
                d = a.toLowerCase(),
                e = Number(V[d]);
            h(W, "Checking " + d + " is in range " + c + "-" + b), c > e && (e = c, h(W, "Set " + d + " to min value")), e > b && (e = b, h(W, "Set " + d + " to max value")), V[d] = "" + e
        }

        function k() {
            function a() {
                function a() {
                    var a = 0,
                        d = !1;
                    for (h(W, "Checking connection is from allowed list of origins: " + c); a < c.length; a++)
                        if (c[a] === b) {
                            d = !0;
                            break
                        }
                    return d
                }

                function d() {
                    var a = P[W].remoteHost;
                    return h(W, "Checking connection is from: " + a), b === a
                }
                return c.constructor === Array ? a() : d()
            }
            var b = d.origin,
                c = P[W].checkOrigin;
            if (c && "" + b != "null" && !a()) throw new Error("Unexpected message received from: " + b + " for " + V.iframe.id + ". Message was: " + d.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
            return !0
        }

        function l() {
            return K === ("" + U).substr(0, L) && U.substr(L).split(":")[0] in P
        }

        function w() {
            var a = V.type in {
                "true": 1,
                "false": 1,
                undefined: 1
            };
            return a && h(W, "Ignoring init message from meta parent page"), a
        }

        function y(a) {
            return U.substr(U.indexOf(":") + J + a)
        }

        function z(a) {
            h(W, "MessageCallback passed: {iframe: " + V.iframe.id + ", message: " + a + "}"), N("messageCallback", {
                iframe: V.iframe,
                message: JSON.parse(a)
            }), h(W, "--")
        }

        function A() {
            var b = document.body.getBoundingClientRect(),
                c = V.iframe.getBoundingClientRect();
            return JSON.stringify({
                iframeHeight: c.height,
                iframeWidth: c.width,
                clientHeight: Math.max(document.documentElement.clientHeight, a.innerHeight || 0),
                clientWidth: Math.max(document.documentElement.clientWidth, a.innerWidth || 0),
                offsetTop: parseInt(c.top - b.top, 10),
                offsetLeft: parseInt(c.left - b.left, 10),
                scrollTop: a.pageYOffset,
                scrollLeft: a.pageXOffset
            })
        }

        function B(a, b) {
            function c() {
                u("Send Page Info", "pageInfo:" + A(), a, b)
            }
            x(c, 32)
        }

        function C() {
            function d(b, c) {
                function d() {
                    P[g] ? B(P[g].iframe, g) : e()
                }["scroll", "resize"].forEach(function(e) {
                    h(g, b + e + " listener for sendPageInfo"), c(a, e, d)
                })
            }

            function e() {
                d("Remove ", c)
            }

            function f() {
                d("Add ", b)
            }
            var g = W;
            f(), P[g].stopPageInfo = e
        }

        function D() {
            P[W] && P[W].stopPageInfo && (P[W].stopPageInfo(), delete P[W].stopPageInfo)
        }

        function E() {
            var a = !0;
            return null === V.iframe && (j(W, "IFrame (" + V.id + ") not found"), a = !1), a
        }

        function F(a) {
            var b = a.getBoundingClientRect();
            return o(W), {
                x: Math.floor(Number(b.left) + Number(M.x)),
                y: Math.floor(Number(b.top) + Number(M.y))
            }
        }

        function G(b) {
            function c() {
                M = g, H(), h(W, "--")
            }

            function d() {
                return {
                    x: Number(V.width) + f.x,
                    y: Number(V.height) + f.y
                }
            }

            function e() {
                a.parentIFrame ? a.parentIFrame["scrollTo" + (b ? "Offset" : "")](g.x, g.y) : j(W, "Unable to scroll to requested position, window.parentIFrame not found")
            }
            var f = b ? F(V.iframe) : {
                    x: 0,
                    y: 0
                },
                g = d();
            h(W, "Reposition requested from iFrame (offset x:" + f.x + " y:" + f.y + ")"), a.top !== a.self ? e() : c()
        }

        function H() {
            !1 !== N("scrollCallback", M) ? p(W) : q()
        }

        function I(b) {
            function c() {
                var a = F(g);
                h(W, "Moving to in page link (#" + e + ") at x: " + a.x + " y: " + a.y), M = {
                    x: a.x,
                    y: a.y
                }, H(), h(W, "--")
            }

            function d() {
                a.parentIFrame ? a.parentIFrame.moveToAnchor(e) : h(W, "In page link #" + e + " not found and window.parentIFrame not found")
            }
            var e = b.split("#")[1] || "",
                f = decodeURIComponent(e),
                g = document.getElementById(f) || document.getElementsByName(f)[0];
            g ? c() : a.top !== a.self ? d() : h(W, "In page link #" + e + " not found")
        }

        function N(a, b) {
            return m(W, a, b)
        }

        function O() {
            switch (P[W].firstRun && T(), V.type) {
                case "close":
                    n(V.iframe);
                    break;
                case "message":
                    z(y(6));
                    break;
                case "scrollTo":
                    G(!1);
                    break;
                case "scrollToOffset":
                    G(!0);
                    break;
                case "pageInfo":
                    B(P[W].iframe, W), C();
                    break;
                case "pageInfoStop":
                    D();
                    break;
                case "inPageLink":
                    I(y(9));
                    break;
                case "reset":
                    r(V);
                    break;
                case "init":
                    e(), N("initCallback", V.iframe), N("resizedCallback", V);
                    break;
                default:
                    e(), N("resizedCallback", V)
            }
        }

        function Q(a) {
            var b = !0;
            return P[a] || (b = !1, j(V.type + " No settings for " + a + ". Message was: " + U)), b
        }

        function S() {
            for (var a in P) u("iFrame requested init", v(a), document.getElementById(a), a)
        }

        function T() {
            P[W].firstRun = !1
        }
        var U = d.data,
            V = {},
            W = null;
        "[iFrameResizerChild]Ready" === U ? S() : l() ? (V = f(), W = R = V.id, !w() && Q(W) && (h(W, "Received: " + U), E() && k() && O())) : i(W, "Ignored: " + U)
    }

    function m(a, b, c) {
        var d = null,
            e = null;
        if (P[a]) {
            if (d = P[a][b], "function" != typeof d) throw new TypeError(b + " on iFrame[" + a + "] is not a function");
            e = d(c)
        }
        return e
    }

    function n(a) {
        var b = a.id;
        h(b, "Removing iFrame: " + b), a.parentNode.removeChild(a), m(b, "closedCallback", b), h(b, "--"), delete P[b]
    }

    function o(b) {
        null === M && (M = {
            x: void 0 !== a.pageXOffset ? a.pageXOffset : document.documentElement.scrollLeft,
            y: void 0 !== a.pageYOffset ? a.pageYOffset : document.documentElement.scrollTop
        }, h(b, "Get page position: " + M.x + "," + M.y))
    }

    function p(b) {
        null !== M && (a.scrollTo(M.x, M.y), h(b, "Set page position: " + M.x + "," + M.y), q())
    }

    function q() {
        M = null
    }

    function r(a) {
        function b() {
            s(a), u("reset", "reset", a.iframe, a.id)
        }
        h(a.id, "Size reset requested by " + ("init" === a.type ? "host page" : "iFrame")), o(a.id), t(b, a, "reset")
    }

    function s(a) {
        function b(b) {
            a.iframe.style[b] = a[b] + "px", h(a.id, "IFrame (" + e + ") " + b + " set to " + a[b] + "px")
        }

        function c(b) {
            H || "0" !== a[b] || (H = !0, h(e, "Hidden iFrame detected, creating visibility listener"), y())
        }

        function d(a) {
            b(a), c(a)
        }
        var e = a.iframe.id;
        P[e] && (P[e].sizeHeight && d("height"), P[e].sizeWidth && d("width"))
    }

    function t(a, b, c) {
        c !== b.type && N ? (h(b.id, "Requesting animation frame"), N(a)) : a()
    }

    function u(a, b, c, d) {
        function e() {
            var e = P[d].targetOrigin;
            h(d, "[" + a + "] Sending msg to iframe[" + d + "] (" + b + ") targetOrigin: " + e), c.contentWindow.postMessage(K + b, e)
        }

        function f() {
            i(d, "[" + a + "] IFrame(" + d + ") not found"), P[d] && delete P[d]
        }

        function g() {
            c && "contentWindow" in c && null !== c.contentWindow ? e() : f()
        }
        d = d || c.id, P[d] && g()
    }

    function v(a) {
        return a + ":" + P[a].bodyMarginV1 + ":" + P[a].sizeWidth + ":" + P[a].log + ":" + P[a].interval + ":" + P[a].enablePublicMethods + ":" + P[a].autoResize + ":" + P[a].bodyMargin + ":" + P[a].heightCalculationMethod + ":" + P[a].bodyBackground + ":" + P[a].bodyPadding + ":" + P[a].tolerance + ":" + P[a].inPageLinks + ":" + P[a].resizeFrom + ":" + P[a].widthCalculationMethod
    }

    function w(a, c) {
        function d() {
            function b(b) {
                1 / 0 !== P[w][b] && 0 !== P[w][b] && (a.style[b] = P[w][b] + "px", h(w, "Set " + b + " = " + P[w][b] + "px"))
            }

            function c(a) {
                if (P[w]["min" + a] > P[w]["max" + a]) throw new Error("Value for min" + a + " can not be greater than max" + a)
            }
            c("Height"), c("Width"), b("maxHeight"), b("minHeight"), b("maxWidth"), b("minWidth")
        }

        function e() {
            var a = c && c.id || S.id + F++;
            return null !== document.getElementById(a) && (a += F++), a
        }

        function f(b) {
            return R = b, "" === b && (a.id = b = e(), G = (c || {}).log, R = b, h(b, "Added missing iframe ID: " + b + " (" + a.src + ")")), b
        }

        function g() {
            h(w, "IFrame scrolling " + (P[w].scrolling ? "enabled" : "disabled") + " for " + w), a.style.overflow = !1 === P[w].scrolling ? "hidden" : "auto", a.scrolling = !1 === P[w].scrolling ? "no" : "yes"
        }

        function i() {
            ("number" == typeof P[w].bodyMargin || "0" === P[w].bodyMargin) && (P[w].bodyMarginV1 = P[w].bodyMargin, P[w].bodyMargin = "" + P[w].bodyMargin + "px")
        }

        function k() {
            var b = P[w].firstRun,
                c = P[w].heightCalculationMethod in O;
            !b && c && r({
                iframe: a,
                height: 0,
                width: 0,
                type: "init"
            })
        }

        function l() {
            Function.prototype.bind && (P[w].iframe.iFrameResizer = {
                close: n.bind(null, P[w].iframe),
                resize: u.bind(null, "Window resize", "resize", P[w].iframe),
                moveToAnchor: function(a) {
                    u("Move to anchor", "moveToAnchor:" + a, P[w].iframe, w)
                },
                sendMessage: function(a) {
                    a = JSON.stringify(a), u("Send Message", "message:" + a, P[w].iframe, w)
                }
            })
        }

        function m(c) {
            function d() {
                u("iFrame.onload", c, a), k()
            }
            b(a, "load", d), u("init", c, a)
        }

        function o(a) {
            if ("object" != typeof a) throw new TypeError("Options is not an object")
        }

        function p(a) {
            for (var b in S) S.hasOwnProperty(b) && (P[w][b] = a.hasOwnProperty(b) ? a[b] : S[b])
        }

        function q(a) {
            return "" === a || "file://" === a ? "*" : a
        }

        function s(b) {
            b = b || {}, P[w] = {
                firstRun: !0,
                iframe: a,
                remoteHost: a.src.split("/").slice(0, 3).join("/")
            }, o(b), p(b), P[w].targetOrigin = !0 === P[w].checkOrigin ? q(P[w].remoteHost) : "*"
        }

        function t() {
            return w in P && "iFrameResizer" in a
        }
        var w = f(a.id);
        t() ? j(w, "Ignored iFrame, already setup.") : (s(c), g(), d(), i(), m(v(w)), l())
    }

    function x(a, b) {
        null === Q && (Q = setTimeout(function() {
            Q = null, a()
        }, b))
    }

    function y() {
        function b() {
            function a(a) {
                function b(b) {
                    return "0px" === P[a].iframe.style[b]
                }

                function c(a) {
                    return null !== a.offsetParent
                }
                c(P[a].iframe) && (b("height") || b("width")) && u("Visibility change", "resize", P[a].iframe, a)
            }
            for (var b in P) a(b)
        }

        function c(a) {
            h("window", "Mutation observed: " + a[0].target + " " + a[0].type), x(b, 16)
        }

        function d() {
            var a = document.querySelector("body"),
                b = {
                    attributes: !0,
                    attributeOldValue: !1,
                    characterData: !0,
                    characterDataOldValue: !1,
                    childList: !0,
                    subtree: !0
                },
                d = new e(c);
            d.observe(a, b)
        }
        var e = a.MutationObserver || a.WebKitMutationObserver;
        e && d()
    }

    function z(a) {
        function b() {
            B("Window " + a, "resize")
        }
        h("window", "Trigger event: " + a), x(b, 16)
    }

    function A() {
        function a() {
            B("Tab Visable", "resize")
        }
        "hidden" !== document.visibilityState && (h("document", "Trigger event: Visiblity change"), x(a, 16))
    }

    function B(a, b) {
        function c(a) {
            return "parent" === P[a].resizeFrom && P[a].autoResize && !P[a].firstRun
        }
        for (var d in P) c(d) && u(a, b, document.getElementById(d), d)
    }

    function C() {
        b(a, "message", l), b(a, "resize", function() {
            z("resize")
        }), b(document, "visibilitychange", A), b(document, "-webkit-visibilitychange", A), b(a, "focusin", function() {
            z("focus")
        }), b(a, "focus", function() {
            z("focus")
        })
    }

    function D() {
        function a(a, c) {
            function d() {
                if (!c.tagName) throw new TypeError("Object is not a valid DOM element");
                if ("IFRAME" !== c.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + c.tagName + ">")
            }
            c && (d(), w(c, a), b.push(c))
        }
        var b;
        return d(), C(),
            function(c, d) {
                switch (b = [], typeof d) {
                    case "undefined":
                    case "string":
                        Array.prototype.forEach.call(document.querySelectorAll(d || "iframe"), a.bind(void 0, c));
                        break;
                    case "object":
                        a(c, d);
                        break;
                    default:
                        throw new TypeError("Unexpected data type (" + typeof d + ")")
                }
                return b
            }
    }

    function E(a) {
        a.fn ? a.fn.iFrameResize = function(a) {
            function b(b, c) {
                w(c, a)
            }
            return this.filter("iframe").each(b).end()
        } : i("", "Unable to bind to jQuery, it is not fully loaded.")
    }
    var F = 0,
        G = !1,
        H = !1,
        I = "message",
        J = I.length,
        K = "[iFrameSizer]",
        L = K.length,
        M = null,
        N = a.requestAnimationFrame,
        O = {
            max: 1,
            scroll: 1,
            bodyScroll: 1,
            documentElementScroll: 1
        },
        P = {},
        Q = null,
        R = "Host Page",
        S = {
            autoResize: !0,
            bodyBackground: null,
            bodyMargin: null,
            bodyMarginV1: 8,
            bodyPadding: null,
            checkOrigin: !0,
            inPageLinks: !1,
            enablePublicMethods: !0,
            heightCalculationMethod: "bodyOffset",
            id: "iFrameResizer",
            interval: 32,
            log: !1,
            maxHeight: 1 / 0,
            maxWidth: 1 / 0,
            minHeight: 0,
            minWidth: 0,
            resizeFrom: "parent",
            scrolling: !1,
            sizeHeight: !0,
            sizeWidth: !1,
            tolerance: 0,
            widthCalculationMethod: "scroll",
            closedCallback: function() {},
            initCallback: function() {},
            messageCallback: function() {
                j("MessageCallback function not defined")
            },
            resizedCallback: function() {},
            scrollCallback: function() {
                return !0
            }
        };
    a.jQuery && E(jQuery), "function" == typeof define && define.amd ? define([], D) : "object" == typeof module && "object" == typeof module.exports ? module.exports = D() : a.iFrameResize = a.iFrameResize || D()
}(window || {});
//# sourceMappingURL=iframeResizer.map



//require('./jquery.js');
/*import './slick.js';
import './product-data.js';
import './functions.js';
import './remoteServices.js';
import './fancybox.js';*/

/* PRE ORDER */
var CHOICE_PRODUCT = [];
var TOTAL_PRICE = 0; // Store total price for calculator

var API_DOMAIN = 'https://shop.samsung.com/';
var IS_GLOBAL = true;
var checkCookieAPI = '';
// var checkCookieAPI_ACC = '';
var PID = '';
// var ACC_PID = '';

if (SITE_CD === 'fr') {
    IS_GLOBAL = true;
    API_DOMAIN = 'http://store.samsung.com/';
}
var modelIdx = '';
var colorIdx = '';
var memoryIdx = '';
var colorClearViewIdx = 0;
var packIdx = '';
var _modellHtml = '';
var _colorHtml = '';
var _colorHtmlS8 = '';
var _colorHtmlS8plus = '';
var _colorHtmlDualSim = '';
var _memoryHtml = '';
var _packHtml = '';
// var _accColorHtml = '';
// var _accPriceHtml = '';
var _accListHtml = '';
var productPrice = 0;
var promotionPrice = 0;
// var accessoryPrice = 0;
var optionSelect1 = $('.option-select[data-opt-index=0]');


var optionSelect2 = $('.option-select[data-opt-index=1]');
var optionSelect3 = $('.option-select[data-opt-index=2], .option-txt[data-opt-index=2]');
var optionSelect4 = $('.option-select[data-opt-index=3]');
var optionSelect5 = $('.option-select[data-opt-index=4]');
var acc_idx = '';
var acc_name = '';
var btnName = '';
var defModelName = '';
var defColorName = '';
var defMemoryName = '';
var video = document.getElementById('product-video');
var currentNumber = 0;
var accCheck = true;
var PIDLENGTH;
var countAcc = 0;
var clearViewSKU;

(function($) {

    var preOrder = function() {

        function init() {

            // Title
            for (var m = 0, PIDLENGTH = PRODUCT_DATA.model.length; m < PIDLENGTH; m++) {
                $('.product-detail .produt-name h2').append('<span>' + PRODUCT_DATA.model[m] + '</span>');
                $('.product-cont .mobile .produt-name h2').append('<span>' + PRODUCT_DATA.model[m] + '</span>')
                $('.nav-title.pc').append('<span> | ' + PRODUCT_DATA.model[m] + '</span>');
                $('.nav-title.pc span:first-child').text(($('.nav-title.pc span:first-child').html()).replace(" | ", ""));
                $('.nav-title.mo').append('<span> | ' + PRODUCT_DATA.model[m] + '</span>')
                $('.nav-title.mo span:first-child').text(($('.nav-title.mo span:first-child').html()).replace(" | ", ""));
            }
           
            //MODELE BUTTONS
            
            for (var m = 0, PIDLENGTH = PRODUCT_DATA.model.length; m < PIDLENGTH; m++) {
                _modellHtml += "<button data-model-idx='" + m + "' title='" + PRODUCT_DATA.model[m]  + "'data-omni-type='microsite_pdpoption' data-omni='option selector:model " + PRODUCT_DATA.model[m] + "'>" + PRODUCT_DATA.model[m] + "</button>";
            }
            if (PRODUCT_DATA.model.length === 1) {$('.option-select[data-opt-index=0]').parent().parent().css('display','none');}
            // COLOR BUTTONS
            for (var c = 0, PIDLENGTH = PRODUCT_DATA.color[0].length; c < PIDLENGTH; c++) {
                _colorHtml += "<button style='opacity:0.5;' title='" + PRODUCT_DATA.color[0][c] + "' data-omni-type='microsite_pdpoption'  data-sku='" + PRODUCT_DATA.sku[c] + "' data-omni='option selector:color' data-color-idx=" + c + "><span style='background-color:" + PRODUCT_DATA.colorCode[0][c] + "'>" + PRODUCT_DATA.color[0][c] + "</span></button>";
            }


            // MEMORY > not used in html
            if (!$(".pre-order").is(".none-shop")) {
                for (var e = 0, PIDLENGTH = PRODUCT_DATA.memory[0].length; e < PIDLENGTH; e++) {
                    _memoryHtml += "<button data-memory-idx=" + e + " data-omni-type='microsite_pdpoption' data-omni='option selector:memory'>" + PRODUCT_DATA.memory[0][e] + "</button>";
                }
            } else {
                for (var e = 0, PIDLENGTH = PRODUCT_DATA.memory[0].length; e < PIDLENGTH; e++) {
                    _memoryHtml += PRODUCT_DATA.memory[0][e];
                }
            }

            // Packs

            var count = 0;
            for (c = 0, PIDLENGTH = PRODUCT_DATA.pack.length; c < PIDLENGTH; c++) {
                if (PRODUCT_DATA.pack[c].length > 0) {
                    for (var d = 0, PIDLENGTH2 = PRODUCT_DATA.pack[c].length; d < PIDLENGTH2; d++) {
                        _packHtml += '<button data-pack-idx="' + count + '" title="' + PRODUCT_DATA.pack[c][d][0] + '" data-omni-type="microsite_pdpoption"  data-sku="' + PRODUCT_DATA.pack[c][d][1] + '" data-omni="option selector:pack ' + PRODUCT_DATA.pack[c][d][0] + '"><span>' + PRODUCT_DATA.pack[c][d][0] + '</span></button>';

                        count++;
                    } 
                } 
            }
   
            optionSelect1.html(_modellHtml);
            optionSelect2.html(_colorHtml);
            optionSelect3.html(_memoryHtml);
            optionSelect4.html(_packHtml);

           /* $(".buying .option-select").each(function(i) {
                // $(this).find("button").eq(0).addClass("active");
                if (!$(this).is(".color-chip")) {
                    // $(this).find("button.active").attr("title","selected option");
                }
            });*/

            // $(".buying .option-select.color-chip").find("button.active").attr("title", " " + PRODUCT_DATA.color[0][0]);

            PID = PRICE_INFO[0][0][0][0].modelCode;
            checkCookieAPI = API_DOMAIN + SITE_CD + '/ng/p4v1/getRealTimeProductSimpleInfo?productCode=' + PID;
            findStore(PID);

            $.ajax({
                url: checkCookieAPI,
                dataType: 'jsonp',
                success: function(data) {
                    if (data && data.resultCode === '0000') {
                        productPrice = numberFormat(data.price.trim().replace(/[^0-9.,.]/g, ''));

                        if (data.promotionPrice === '') {
                            $(".price-info").find(".price-final").html(addComma(productPrice) + CURRENCY_CHARACTER);
                            TOTAL_PRICE = productPrice;
                            TOTAL_PRICE = Number(TOTAL_PRICE / 4).toFixed(2);
                            $(".oney-4x-price").html(TOTAL_PRICE + CURRENCY_CHARACTER);
                        } else {
                            promotionPrice = numberFormat(data.promotionPrice.trim().replace(/[^0-9.,.]/g, ''));

                            $(".price-info").find(".price-final").html(addComma(promotionPrice) + CURRENCY_CHARACTER);
                            $(".price-info").find(".price-cost").html(addComma(productPrice) + CURRENCY_CHARACTER);

                            TOTAL_PRICE = promotionPrice;
                            TOTAL_PRICE = Number(TOTAL_PRICE / 4).toFixed(2);
                            $(".oney-4x-price").html(TOTAL_PRICE + CURRENCY_CHARACTER);
                        }
                    }
                }
            });
            CHOICE_PRODUCT.push(PID);

            // S8 / S8+  & colors
           /* $.each(PRODUCT_DATA.sku, function(idx, value) {
                PID = PRODUCT_DATA.sku[idx];
                productIsInStock(PID, idx);
            });*/

            /*for (var c = 0, PIDLENGTH = PRODUCT_DATA.pack.length; c < PIDLENGTH; c++) {
                for (var d = 0, PIDLENGTH2 = PRODUCT_DATA.pack[c][1].length; d < PIDLENGTH2; d++) {
                    productIsInStock(PRODUCT_DATA.pack[c][1][d], count);
                    count++;
                }
            }*/

            /*productIsInStock(PRODUCT_DATA.pack[0][0][1], count);
            count++;
            productIsInStock(PRODUCT_DATA.pack[0][1][1], count);
            count++;
            productIsInStock(PRODUCT_DATA.pack[1][0][1], count);
            count++;
            productIsInStock(PRODUCT_DATA.pack[1][1][1], count);*/

            /****************/



           
/*                for (var i = 0; i < ACCESSORY_DATA.length; i++) {
                    $.each(ACCESSORY_DATA[i], function(idx, value) {
                        if (ACCESSORY_DATA[i][idx].active) {
                            for (var a1 = 0; a1 < ACCESSORY_DATA[i][idx].color.length; a1++) {
                                (function() {
                                    var ACC_PID = ACCESSORY_DATA[i][idx].modelCode[a1];
                                    getPrice(ACC_PID, idx);
                                    countAcc += 1;
                                    // console.log('COUNT ACC : '+countAcc);
                                })();
                            }
                        }
                    });
                }*/


            
        }

        function placeOrderChange() {
            defModelName = optionSelect1.find("button.active").text();
            defColorName = optionSelect2.find("button.active").text();
            defMemoryName = optionSelect3.find("button.active").text();

            $(".price-list li:first-child .price-select").text(defModelName);
            $(".price-list li:first-child+li .price-select").text(defColorName);
            $(".price-list li:first-child+li+li .price-select").text(defMemoryName);
        }

        /**************************************************************************/

        function showAcc() {
            // ACCESSORISE INIT
            
                for (var i = 0; i < ACCESSORY_DATA.length; i++) {
                    for (var a = 0; a < ACCESSORY_DATA[i].length; a++) {

                        if (ACCESSORY_DATA[i][a].active) {
                            _accListHtml += "<div data-sku='" + ACCESSORY_DATA[i][a].modelCode[0] + "' data-model-acc='" + ACCESSORY_DATA[i][a].modelAcc + "' data-list-idx='" + a + "'><div class='product-item'><div class='product-image'><img src='/images/blank.gif' data-img-pc='/images/product-" + ACCESSORY_DATA[0][a].modelCode[0] + ".jpg' data-img-mo='/images/product-" + ACCESSORY_DATA[0][a].modelCode[0] + "-mo.jpg' alt='" + ACCESSORY_DATA[i][a].item + "_" + ACCESSORY_DATA[i][a].color[0] + "' /></div>";
                            _accListHtml += "<div class='product-component'>";

                            if (!$(".pre-order").is(".none-shop")) {
                                _accListHtml += "<strong class='product-name'>" + ACCESSORY_DATA[i][a].item + "</strong><div class='color-chip'>";

                                for (var a1 = 0; a1 < ACCESSORY_DATA[i][a].color.length; a1++) {

                                // Add tracking to the add to cart CTA
                                var modelCode = ACCESSORY_DATA[i][a].modelCode[a1],
                                  modelName = modelCode.substring(0, 8);
                                if(ACCESSORY_DATA[i][a].shortString){
                                  modelName = modelCode.substring(0, 7);
                                 }

                                _accListHtml += "<button title='" + ACCESSORY_DATA[i][a].color[a1] + "' data-omni-type='microsite_gallery' data-sku='" + ACCESSORY_DATA[i][a].modelCode[a1] + "' class='statusButton' data-omni='recommend product_color' data-acc-idx=" + a1 + "><span style='background-color:" + ACCESSORY_DATA[i][a].colorCode[a1] + "'>" + ACCESSORY_DATA[i][a].color[a1] + "</span></button>";

                                }
                                _accListHtml += "</div><div class='buy-info'><span class='product-price'></span><div class='option-select'><button class='statusButton " + ACCESSORY_DATA[i][a].modelAcc + "' title='Ajouter " + ACCESSORY_DATA[i][a].item + " au panier' data-acc-index='" + a + "' data-acc-name='" + ACCESSORY_DATA[i][a].item + "' data-omni-type='microsite_pdpoption' data-omni='calculator|" + modelName + "|" + modelCode + "'>AJOUTER AU PANIER</button></div><div class='btn-more'><span><a href=" + ACCESSORY_DATA[i][a].src + " target='_blank' title='EN SAVOIR PLUS " + ACCESSORY_DATA[i][a].item + "'  data-omni-type='microsite_topdp' data-omni='recommend product_see full detail|;" + modelName + "|" + modelCode + "'  >EN SAVOIR PLUS</a></span></div></div></div></div></div>";
                            } else {
                                _accListHtml += "</div><strong class='product-name'>" + ACCESSORY_DATA[i][a].item + "</strong><div class='buy-info'><div class='btn-more none-shop'><span><a href=" + ACCESSORY_DATA[i][a].src + " target='_blank' title='En savoir plus sur" + ACCESSORY_DATA[i][a].item + ">EN SAVOIR PLUS</a></span></div></div></div></div></div>";
                            }

                            $(".accessorise").find(".product-list").html(_accListHtml);
                        }
                        $(".accessorise .color-chip").each(function(i) {
                            $(this).find("button").eq(0).addClass("active");
                            // $(this).find("button.active").attr("title", ACCESSORY_DATA[i][a].color[0]);
                        });
                        isAvailable();
                    }
                }
         
            $('.product-list div[data-model-acc=s8plus-acc]').hide();
        }
        //navbar lesplus


        // CLICK EVENT MODEL
        function optionClickEvent() {
           // console.log("*** CLICK ***");
            // MODEL CHOICE

            $(document).on('click', '.option-select[data-opt-index=0] button', function(event) {
                event.preventDefault();
                $('.bluesentence').hide();   
               



                clearAllAccessories();
                _colorHtmlDualSim = ''; // _colorHtml init
                _colorHtmlS8plus = ''; // _colorHtml init
                _colorHtml = ''; // _colorHtml init
                $('.product-option-pack dd').hide();
                $('.product-option-pack dt').hide();

                modelIdx = $(this).attr('data-model-idx');
                //inclus dans le coffret 
                $('.dynamic_title_box').html("<strong class='product-name prd-name' title='" +  PRODUCT_DATA.model[modelIdx] + "'>" +  PRODUCT_DATA.model[modelIdx] + "</strong>");
                
                //totalprice up2you
                var oney24xPrice = UP2YOU_PRICE[modelIdx];
                $(".up2you-total__price [data='price-first']").text(oney24xPrice.first);
                $(".up2you-total__price [data='price-monthly']").text(oney24xPrice.monthly);
                //display pack if there is pack
                if (PRODUCT_DATA.pack[modelIdx].length !== 0) {
                    $('.product-option-pack dd').show();
                    $('.product-option-pack dt').show();
                } else {
                    $('.product-option-pack dd').hide();
                    $('.product-option-pack dt').hide();
                }
                setTimeout(function() {
                    switchAcc();
                }, 200);
          

                 // COLOR BUTTONS
                for (var c = 0, PIDLENGTH = PRODUCT_DATA.color[modelIdx].length; c < PIDLENGTH; c++) {
                    _colorHtml += "<button data-omni-type='microsite_pdpoption' data-omni='option selector:color' title='" + PRODUCT_DATA.color[modelIdx][c] + "' data-color-idx=" + c + " data-sku='" + PRODUCT_DATA.sku2[modelIdx][c] + "'><span style='background-color:" + PRODUCT_DATA.colorCode[modelIdx][c] + "'>" + PRODUCT_DATA.color[modelIdx][c] + "</span></button>";
                    productIsInStock(PRODUCT_DATA.sku2[modelIdx][c], c);
                }

                ///////// Update colors buttons
                optionSelect2.empty();
                optionSelect2.html(_colorHtml);
                setTimeout(function() {
                    $('.option-select[data-opt-index=3] button:first').click();
                }, 400);

                ///// SELECT OTHER DEFAULT OPTIONS
                optionSelect3.empty();
                optionSelect3.html(_memoryHtml);
                optionSelect2.find('button').eq(0).addClass('active');
                if (!$('.pre-order').is('.none-shop')) {
                    optionSelect3.find('button').eq(0).addClass('active');
                }

                //console.log('TRIGGER BUTTON PACK');
                // Make pack button active, and trigger click
                optionSelect4.find('button').removeClass('active').eq(0).addClass('active').trigger('click');

                

                whoIsSelected();
                $(this).addClass('active').siblings().removeClass('active');
                optionSelect1.find('button').removeAttr('title');

                _colorHtml = ''; // _colorHtml init
                _memoryHtml = ''; // _memoryHtml init

                for (var c = 0, PIDLENGTH = PRODUCT_DATA.color[modelIdx].length; c < PIDLENGTH; c++) {
                    _colorHtml += "<button title='" + PRODUCT_DATA.color[modelIdx][c] + "' data-color-idx=" + c + " data-sku='" + PRODUCT_DATA.sku2[modelIdx][c] + "'><span style='background-color:" + PRODUCT_DATA.colorCode[modelIdx][c] + "'>" + PRODUCT_DATA.color[modelIdx][c] + "</span></button>";
                    productIsInStock(PRODUCT_DATA.sku2[modelIdx][c], c);
                }

                if (!$(".pre-order").is(".none-shop")) {
                    for (var e = 0, PIDLENGTH = PRODUCT_DATA.memory[modelIdx].length; e < PIDLENGTH; e++) {
                        _memoryHtml += "<button data-memory-idx=" + e + ">" + PRODUCT_DATA.memory[modelIdx][e] + "</button>";
                    }
                } else {
                    for (var e = 0, PIDLENGTH = PRODUCT_DATA.memory[modelIdx].length; e < PIDLENGTH; e++) {
                        _memoryHtml += PRODUCT_DATA.memory[modelIdx][e];
                        if (PIDLENGTH > 1 && e < PIDLENGTH - 1) {
                            _memoryHtml += ' / ';
                        }
                    }
                }

               
        ///////// Update packs buttons
             
                var count = 0;
                var _packHtml = '';
                if (PRODUCT_DATA.pack[modelIdx].length !== 0) {
                    for (var d = 0, PIDLENGTH2 = PRODUCT_DATA.pack[modelIdx].length; d < PIDLENGTH2; d++) {
                        _packHtml += '<button data-pack-idx="' + count + '" title="' + PRODUCT_DATA.pack[modelIdx][d][0] + '" data-omni-type="microsite_pdpoption"  data-sku="' + PRODUCT_DATA.pack[modelIdx][d][1] + '" data-omni="option selector:pack ' + PRODUCT_DATA.pack[modelIdx][d][0] + '"><span>' + PRODUCT_DATA.pack[modelIdx][d][0] + '</span></button>';
                        count++;
                        productIsInStock(PRODUCT_DATA.pack[modelIdx][d][1]);
                    }
                    optionSelect4.empty();
                    optionSelect4.html(_packHtml);
                    $('.option-select[data-opt-index=3] button:first').addClass('active');
            ///////// Update color view buttons
                    count = 0;
               
                                
                    updateClearViewColorButtons();
                }
                colorIdx = optionSelect2.find("button.active").attr("data-color-idx");
                memoryIdx = optionSelect3.find("button.active").attr("data-memory-idx");
                packIdx = optionSelect4.find("button.active").attr("data-pack-idx");
                

                var acc_idx = $('.accessorise .option-select').find('button.active').attr('data-acc-index'),
                    acc_color_idx = $(".accessorise .color-chip").find("button.active").attr("data-acc-idx");

                $(".price-list li:first-child").addClass("active").siblings().removeClass("active");

                if (!$(".pre-order").is(".none-shop")) {
                    placeOrderChange();
                    priceData(modelIdx, memoryIdx, colorIdx, acc_idx, acc_color_idx);
                    productColorChange(modelIdx, memoryIdx, colorIdx, packIdx, colorClearViewIdx);
                    optionSelect2.find("button.active").attr("title", " " + PRICE_INFO[modelIdx][memoryIdx][0][0].color);
                } else {
                    productColorChange(modelIdx, 0, colorIdx, packIdx, null, colorClearViewIdx);
                    optionSelect2.find("button.active").attr("title", " " + PRICE_INFO[modelIdx][0][0][0].color);
                }

                //UPDATE LIST
                if (location.search.substr(1).split("?")[0] === "") {
            
                    $.each(ACCESSORY_DATA[modelIdx], function(idx, value) {
                        if (ACCESSORY_DATA[modelIdx][idx].active) {
                            for (var a1 = 0; a1 < ACCESSORY_DATA[modelIdx][idx].color.length; a1++) {
                                (function() {
                                    var ACC_PID = ACCESSORY_DATA[modelIdx][idx].modelCode[a1];
                                    getPrice(ACC_PID, idx);
                                    countAcc += 1;
                                    // console.log('COUNT ACC : '+countAcc);
                                })();
                            }
                        }
                    });
                
                }

            });

////////////// MODEL COLOR CHOICE
            $(document).on('click', '.option-select[data-opt-index=1] button', function(event) {
                //console.log("*** click color");
                event.preventDefault();

                //clearAllAccessories();   // bug if activate : accessories 4 disappears :(

                $('.prd-name span').show();

                colorIdx = $(this).attr("data-color-idx");

                //CHECK MODEL COLOR AVAILABILITY
                /*var c, cStart, cEnd;
                if(modelIdx == 0){
                    cStart = 0;
                    cEnd = 3;
                }else{
                    cStart = 3;
                    cEnd = 6;
                }

                for (c = cStart;  c < cEnd; c++) {
                    productIsInStock(PRODUCT_DATA.sku[c], c);
                }*/

                //Show in price list
                $(".price-list li:first-child+li").addClass("active").siblings().removeClass("active");

                var acc_idx = $(".accessorise .option-select").find("button.active").attr("data-acc-index");
                var acc_color_idx = $(".accessorise .color-chip").find("button.active").attr("data-acc-idx");

                $(this).addClass("active").siblings().removeClass("active");

                for (var c = 0, PIDLENGTH = PRODUCT_DATA.color[0].length; c < PIDLENGTH; c++) {
                    $(".option-select[data-opt-index=1] button").eq(c).attr("title", PRODUCT_DATA.color[0][c]);
                }

                if (!$(".pre-order").is(".none-shop")) {
                    $(this).attr("title", " " + PRICE_INFO[modelIdx][memoryIdx][colorIdx][0].color);
                    placeOrderChange();
                    priceData(modelIdx, memoryIdx, colorIdx, acc_idx, acc_color_idx);
                    productColorChange(modelIdx, memoryIdx, colorIdx, packIdx, colorClearViewIdx);
                } else {
                    $(this).attr("title", " " + PRICE_INFO[modelIdx][0][colorIdx][0].color);
                    productColorChange(modelIdx, 0, colorIdx, packIdx, colorClearViewIdx);
                }    
                $('button[title=" Bleu Océan"]').hasClass('active') ? $('.bluesentence').show() : $('.bluesentence').hide();          
            });

            // PACK CHOICE
            $(document).on('click', '.option-select[data-opt-index=3] button', function(event) {
                //console.log("*** pack choice");
                event.preventDefault();
                clearAllAccessories();
                $('.note-desc p.slugpack').html('');

                packIdx = $(this).attr('data-pack-idx');
                var thisSKU = $(this).attr('data-sku');
                
                // Clear View : show Colors
                if(packIdx == 3){
                    $("#clearViewColorSelect").show();
                }else{
                    $("#clearViewColorSelect").hide();
                }

                // Add tracking to the add to cart CTA
                var modelCode = thisSKU;
                var modelName = modelCode.substring(0, 8);
/*BUNDLE*/
                var packName = $(this).attr('title') /*''*/;
                $(this).addClass('active').siblings().removeClass('active');

                // Update price-list number
                $('.price-list li:nth-child(4)').addClass('active').siblings().removeClass('active');

                // Remove default value '-'
                $('.js-hash-acc').hide();

                var str = packName;
                if(packIdx != 2) str += " (inclus)";                
                var _acchtml = "<span class='price-select' data-pack-num=" + packIdx + ">" + str + "<a href='#' style='display:none;' class='btn-delete' data-omni-type='microsite_scRemove' data-omni=';" + modelName + "|" + modelCode + "'><img src='/images/btn-delete.png' data-img-pc='/images/btn-delete.png' data-img-mo='/images/btn-delete-mo.png'alt='delete'></a></span>";
                
  
                if (PRODUCT_DATA.pack[modelIdx][packIdx] !== undefined ) {
                    $('.item-list').prepend(_acchtml);
                    $('.note-desc p.slugpack').html(PRODUCT_DATA.pack[modelIdx][packIdx][2]);
                }
                if (!$('.pre-order').is('.none-shop')) {
                    placeOrderChange();
                    productColorChange(modelIdx, memoryIdx, colorIdx, packIdx, colorClearViewIdx);
                } else {
                    productColorChange(modelIdx, 0, colorIdx, packIdx, colorClearViewIdx);
                }
                whoIsSelected();
            });

            // COLOR CLEARVIEW CHOICE
            $(document).on('click', '.option-select[data-opt-index=4] button', function(event) {
                event.preventDefault();

                colorClearViewIdx = $(this).attr("data-color-idx");

                $(this).addClass("active").siblings().removeClass("active");


                if (!$(".pre-order").is(".none-shop")) {
                    $(this).attr("title", " " + PRICE_INFO[modelIdx][memoryIdx][colorIdx][0].color);
                    placeOrderChange();
                    productColorChange(modelIdx, memoryIdx, colorIdx, packIdx, colorClearViewIdx);
                } else {
                    $(this).attr("title", " " + PRICE_INFO[modelIdx][0][colorIdx][0].color);
                    productColorChange(modelIdx, 0, colorIdx, packIdx, colorClearViewIdx);
                }
            });

            // ACCESSORISE CHOICE
            $(document).on("click", ".accessorise .option-select button", function(event) {
                event.preventDefault();

                var thisAccIdx = $(this).attr("data-acc-index");
                var thisSKU = $(this).parent().parent().parent().find('.color-chip button.active').attr("data-sku");

                // Add tracking to the add to cart CTA
                var modelCode = thisSKU;
                var modelName = modelCode.substring(0, 8);

                if(ACCESSORY_DATA[0][thisAccIdx].shortString){
                    modelName = modelCode.substring(0, 7);
                }

                // Activate accessory number
                $(".price-list").find(">li").eq(3).addClass("active").siblings().removeClass("active");

                // Remove default value '-'
                $('.js-hash-acc').hide();

                // Switch add accessory button
                $(this).toggleClass("active");
                if ($(this).hasClass('active')) {
                    $(this).text('SUPPRIMER').attr('data-omni', ';' + modelName + '|' + modelCode);
                    $(this).attr('data-omni-type', 'microsite_scRemove');
                } else {
                    $(this).text('AJOUTER AU PANIER').attr('data-omni', 'calculator|' + modelName + '|' + modelCode);
                    $(this).attr('data-omni-type', 'microsite_pdpoption');
                }

                var modelIdx = $(".option-select[data-opt-index=0]").find("button.active").attr("data-model-idx"),
                    colorIdx = $(".option-select[data-opt-index=1]").find("button.active").attr("data-color-idx"),
                    memoryIdx = $(".option-select[data-opt-index=2]").find("button.active").attr("data-memory-idx"),
                    acc_idx = $(".accessorise .option-select").find("button.active").attr("data-acc-index"),
                    acc_color_idx = $(".accessorise .color-chip").find("button.active").attr("data-acc-idx"),
                    acc_name = $(this).parent().parent().parent().find('.product-name').text();

                // NOTE : there are two item-list, for desktop and for mobile
                var hasPack = $('.product-cont.desktop .item-list>span[data-pack-num]').length > 0;
               // console.log(`Has a pack ? ${hasPack}`);

                var _acchtml = '';
                if ($(this).is('.active')) {
                     _acchtml = "<span class='price-select' data-acc-num=" + thisAccIdx + ">" + acc_name + "<a href='#' class='btn-delete' data-omni-type='microsite_scRemove' data-omni=';" + modelName + "|" + modelCode + "'><img src='/images/btn-delete.png' data-img-pc='/images/btn-delete.png' data-img-mo='/images/btn-delete-mo.png'alt='delete'></a></span>";
                    $(this).attr('title', 'selected option');
                    $('.item-list').prepend(_acchtml);
                } else {
                    $(this).removeAttr("title");
                    $(".item-list").find("span[data-acc-num=" + thisAccIdx + "]").remove();
                    CHOICE_PRODUCT.splice(thisAccIdx + 1, 1);
                }

                // Mobile
                if ($(".order.mobile .item-list").find(".price-select").length > 3) {
                    $(".pre-order .price-list li .btn-more").css({
                        "display": "inline-block"
                    });
                } else {
                    $(".pre-order .price-list li .btn-more").css({
                        "display": "none"
                    });
                }

                // Desktop
                if ($(".order.desktop .item-list").find(".price-select").length > 3) {
                    $(".pre-order .price-list li .btn-more").css({
                        "display": "inline-block"
                    });
                } else {
                    $(".pre-order .price-list li .btn-more").css({
                        "display": "none"
                    });
                }

                priceData(modelIdx, memoryIdx, colorIdx, acc_idx, acc_color_idx);
            });
         // ACCESSORISE CHOICE DELETE
            $(document).on("click", ".item-list .btn-delete", function(event) {
                event.preventDefault();

                var idx = $(this).parent(".price-select").attr("data-acc-num");
                var thisIdx = $(this).parent(".price-select").index();
                var thisAccIdx = $(this).parent('.price-select').attr("data-acc-index");
                $(".accessorise .option-select").find("button[data-acc-index=" + idx + "]").removeClass("active").text('AJOUTER AU PANIER');
                $(this).parent(".price-select").remove();

                if ($(".item-list").find("span").length > 6) {
                    $(".pre-order .price-list li .btn-more").css({
                        "display": "inline-block"
                    });
                } else {
                    $(".pre-order .price-list li .btn-more").css({
                        "display": "none"
                    });
                }

                if ($(".item-list").find(">span").length > 1) {
                    $(".item-list").find(">span").eq(1).find(".btn-delete").focus();
                } else if ($(".item-list").find(">span").length <= 1) {
                    $(".total-box").find(".calc a").focus();
                    $('.js-hash-acc').show();
                }
                if ($(".order.mobile .item-list").find(".price-select").length > 3) {
                    $(".pre-order .price-list li .btn-more").css({
                        "display": "inline-block"
                    });

                } else {
                    $(".pre-order .price-list li .btn-more").css({
                        "display": "none"
                    });
                }
                if ($(".order.desktop .item-list").find(".price-select").length > 3) {
                    $(".pre-order .price-list li .btn-more").css({
                        "display": "inline-block"
                    });
                } else {
                    $(".pre-order .price-list li .btn-more").css({
                        "display": "none"
                    });
                }

                var modelIdx = $(".option-select[data-opt-index=0]").find("button.active").attr("data-model-idx"),
                    colorIdx = $(".option-select[data-opt-index=1]").find("button.active").attr("data-color-idx"),
                    memoryIdx = $(".option-select[data-opt-index=2]").find("button.active").attr("data-memory-idx"),
                    acc_idx = $(".accessorise .option-select").find("button.active").attr("data-acc-index"),
                    acc_color_idx = $(".accessorise .color-chip").find("button.active").attr("data-acc-idx");
                CHOICE_PRODUCT.splice(1);
                priceData(modelIdx, memoryIdx, colorIdx, acc_idx, acc_color_idx);

            });

            function clearAllAccessories() {
               // console.log('----clearAllAccessories----');
                $(".item-list .btn-delete").trigger('click');
            }

            // ACCESSORISE COLOR CHOICE
            $(document).on("click", ".accessorise .color-chip button", function(event) {
                event.preventDefault();

                var thisAccIdx = $(this).attr("data-acc-idx"),
                    thisSKU = $(this).attr("data-sku"),
                    thisPrice = $(this).attr("data-price"),
                    itemIdx = 0;
          // Add tracking to the add to cart CTA
          var modelCode = thisSKU,
            modelName = modelCode.substring(0, 8);
          if(ACCESSORY_DATA[0][itemIdx].shortString){
            modelName = modelCode.substring(0, 7);
          }

                itemIdx = $(this).parents("div[data-list-idx]").attr("data-list-idx");

                //add price for each accessorise color
                $(this).parent().parent().find('.buy-info .product-price').html(thisPrice);
                //console.log(":::", thisPrice);

                $(this).addClass("active").siblings().removeClass("active");
                $(this).parent().parent().parent().attr('data-sku', thisSKU);
                $(this).parent(".color-chip").find("button").each(function(i) {
                    $(this).attr("title", ACCESSORY_DATA[0][itemIdx].color[i])
                });
                $(this).attr("title", ACCESSORY_DATA[0][itemIdx].color[thisAccIdx]);

                // accessorise product alt
                $(this).parents(".product-item").find(".product-image img").attr("alt", ACCESSORY_DATA[0][itemIdx].item + "_" + ACCESSORY_DATA[0][itemIdx].color[thisAccIdx]);

                var accImgSrc = "/images/product-" + ACCESSORY_DATA[0][itemIdx].modelCode[thisAccIdx] + ".jpg"
                var accImgSrcMo = "/images/product-" + ACCESSORY_DATA[0][itemIdx].modelCode[thisAccIdx] + "-mo.jpg"

                if (window.innerWidth > 768) {
                    $(this).parents(".product-item").find(".product-image img").attr("src", accImgSrc);
                } else {
                    $(this).parents(".product-item").find(".product-image img").attr("src", accImgSrcMo);
                }
                $(this).parents(".product-item").find(".product-image img").attr("data-img-pc", accImgSrc);
                $(this).parents(".product-item").find(".product-image img").attr("data-img-mo", accImgSrcMo);

                $(this).parents(".product-component").find(".buy-info .option-select button").attr("data-omni", "calculator|;" + modelName + "|" + modelCode);
        $(this).parents(".product-component").find(".buy-info .btn-more a").attr("data-omni", "recommend product_see full detail|;" + modelName + "|" + modelCode);

                // var accModelCode = ACCESSORY_DATA[0][itemIdx].modelCode[thisAccIdx],
                // idx = ACCESSORY_DATA[0][itemIdx];

                // isInStock(accModelCode, idx);

                if ($(this).hasClass('disabled')) {
                    $('.slick-list div[data-sku=' + thisSKU + '] .option-select button').html('RUPTURE DE STOCK').attr('disabled', 'disabled');
                } else {
                    $('.slick-list div[data-sku=' + thisSKU + '] .option-select button').html('AJOUTER AU PANIER').removeAttr("disabled");
                }

            });

            // PLACE ORDER
            $(".btn-order").find(">a").on("click", function(event) {
                event.preventDefault();
                if ($(".btn-order.outofstock").length == 0) {
                    goBuy();
                    $(this).addClass('loader');
                } else {
                    event.preventDefault();
                    alert('Désolé ce produit est en rupture de stock.')
                }
            });

            //video play
            $(document).on("click", ".thumb-temp .thumb-video a", function(event) {
                event.preventDefault();

                setTimeout(function() {
                    video.play();
                }, 500);
            });
        }


        // Product Color & alt
        // MODEL / ? / COLOR / PACK / ClearView Color
        function productColorChange(_m, _e, _c, _p, _cvc) {

            var altText = [
                'front view',
                'back view',
                'right view',
                'left view',
                'left side view',
                'right side view'
            ];

            var m = _m || 0;
            var e = _e || 0;
            var c = _c || 0;
            var p = _p || 0;
            var cvc = _cvc || 0;
            //console.log(`productColorChange ${m}, ${e}, ${c}, ${p}, ${cvc}`);

            var modelName = PRICE_INFO[m][e][c][0].model;
            var product_modelName = '';
            var thumb_modelName = '';
            var model = 0;

            //CHANGE PRODUCT IMAGES
            $('.product-temp').find('img.product-img').each(function(i) {
                $(this).attr('alt', modelName + '_' + PRICE_INFO[m][e][c][0].color + '_' + altText[i]);

                if (modelName.indexOf('+') !== -1) {
                    product_modelName = modelName.replace('+', 'plus');
                    model = 1;
                } else {
                    product_modelName = PRICE_INFO[m][e][c][0].model;
                }

                // If it is an image pack
                var packName = '';
                if (!isUp2you() && p !== undefined && p !== '' && i === 0 && (PRODUCT_DATA.pack[modelIdx].length > 0))  {
                    packName = '-pack' + p;
                    $(this).parent().addClass('pack');
                } else {
                    $(this).parent().removeClass('pack');
                }

                var proSrc;
                var proSrcTablet;
                var proSrcMo;
                var str = '/images/product-' + product_modelName.replace(/ /gi, '') + '-' + PRICE_INFO[m][e][c][0].modelCode;

                if(p == 3 && i == 0){
                     // PACK 3 or 5 CLEARVIEW
                    clearViewSKU = CLEARVIEW_SKU[model][cvc];
                    str +=  '-' + clearViewSKU;
                }
/*BUNDLE*/
                str += '-0' + i + packName;

                proSrc = str + '.jpg';
                proSrcTablet = str + '-tablet.jpg';
                proSrcMo = str + '-mo.jpg';

                if (window.innerWidth > 1024 || window.innerWidth > 768 && !$(this).is('data-img-tablet')) {
                    $(this).attr('src', proSrc);
                    $(this).attr('data-img-pc', proSrc);
                    if ($(this).is('data-img-tablet')) {
                        $(this).is('data-img-tablet').attr('data-img-tablet', proSrcTablet);
                    }
                    $(this).attr("data-img-mo", proSrcMo);
                } else if (window.innerWidth <= 1024 && window.innerWidth > 768 && $(this).is("data-img-tablet")) {
                    $(this).attr("src", proSrcTablet);
                    $(this).attr("data-img-pc", proSrc);
                    $(this).attr("data-img-tablet", proSrcTablet);
                    $(this).attr("data-img-mo", proSrcMo);
                } else if (window.innerWidth <= 768) {
                    $(this).attr("src", proSrcMo);
                    $(this).attr("data-img-pc", proSrc);
                    if ($(this).is("data-img-tablet")) {
                        $(this).is("data-img-tablet").attr("data-img-tablet", proSrcTablet);
                    }

                    $(this).attr("data-img-mo", proSrcMo);
                }
            });


            //CHANGE THUMBNAILS
            $(".thumb-temp .slick-track").find("img.product-img").each(function(i) {
                $(this).attr("alt", "Thumbnail : " + modelName + "_" + PRICE_INFO[m][e][c][0].color + "_" + altText[i]);
               
                var model = 0;

                if (modelName.indexOf("+") != -1) {
                    thumb_modelName = modelName.replace("+", "plus");
                    model = 1;
                } else {
                    thumb_modelName = PRICE_INFO[m][e][c][0].model;
                }

                var thumbSrc;
                var thumbSrcTablet;
                var thumbSrcMo;
                var str;

                /*PACK FIRST IMG*/
 /*BUNDLE*/               
                var packName = (!isUp2you() && p !== undefined && p !== '' && i === 0 && (PRODUCT_DATA.pack[modelIdx].length > 0)) ? '-pack' + p : '';
                var str = '/images/thumb-' + thumb_modelName.replace(/ /gi, '') + '-' + PRICE_INFO[m][e][c][0].modelCode;

                if(p == 3 && i == 0){
                     // PACK 3 or 5 CLEARVIEW
                    clearViewSKU = CLEARVIEW_SKU[model][cvc];
                    str += "-" + clearViewSKU;
                }

                str += '-0' + i + packName;

                thumbSrc = str + '.jpg';
                thumbSrcTablet = str + '-tablet.jpg';
                thumbSrcMo = str + '-mo.jpg';

                if (window.innerWidth > 1024 || window.innerWidth > 768 && !$(this).is("data-img-tablet")) {
                    $(this).attr("src", thumbSrc);
                    $(this).attr("data-img-pc", thumbSrc);
                    if ($(this).is("data-img-tablet")) {
                        $(this).is("data-img-tablet").attr("data-img-tablet", thumbSrcTablet);
                    }
                    $(this).attr("data-img-mo", thumbSrcMo);
                } else if (window.innerWidth <= 1024 && window.innerWidth > 768 && $(this).is("data-img-tablet")) {
                    $(this).attr("src", thumbSrcTablet);
                    $(this).attr("data-img-pc", thumbSrc);
                    $(this).attr("data-img-tablet", thumbSrcTablet);
                    $(this).attr("data-img-mo", thumbSrcMo);
                } else if (window.innerWidth <= 768) {
                    $(this).attr("src", thumbSrcMo);
                    $(this).attr("data-img-pc", thumbSrc);
                    if ($(this).is("data-img-tablet")) {
                        $(this).is("data-img-tablet").attr("data-img-tablet", thumbSrcTablet);
                    }
                    $(this).attr("data-img-mo", thumbSrcMo);
                }
            });

            // UPDATE PACK text
            $('.option-txt[data-opt-index=3] span[data-pack-idx]').hide().eq(packIdx).show();
            $('.option-txt[data-opt-index=3] span[data-model-idx]').hide().eq(modelIdx).show();

            //"No pack" selected
            if(packIdx == 2){
                $(".option-txt").hide();
            }else{
                $(".option-txt").show();
            }


            //navlist

        }





        //slick
        function slickSlide() {

            $(".product-temp").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                speed: 500,
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                        speed: 500
                    }
                }]
            });

            $(".thumb-temp").slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: true,
                infinite: false,
                arrows: true,
                prevArrow: "<button class='btn-prev' data-omni-type='microsite_pcontentinter' data-omni='rolling:left arrow'><span><img src='/images/btn-arrow-top.png' alt='Thumbnail: up' style='vertical-align:top'></span></button>",
                nextArrow: "<button class='btn-next' data-omni-type='microsite_pcontentinter' data-omni='rolling:right arrow'><span><img src='/images/btn-arrow-down.png' alt='Thumbnail: down' style='vertical-align:top'></span></button>",
                useTransform: !0,
                verticalSwiping: !0,
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        vertical: false,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: true,
                        prevArrow: "<button class='btn-prev' data-omni-type='microsite_pcontentinter' data-omni='rolling:left arrow' ><span><img src='/images/btn-arrow-left-mo.png' alt='Thumbnail: Previous' style='vertical-align:top'></span></button>",
                        nextArrow: "<button class='btn-next' data-omni-type='microsite_pcontentinter' data-omni='rolling:right arrow' ><span><img src='/images/btn-arrow-right-mo.png' alt='Thumbnail: Next' style='vertical-align:top'></span></button>",
                        useTransform: !0,
                        verticalSwiping: 0
                    }
                }]
            });

            $(".thumb-temp").slick("slickSetOption", "prevArrow");

            $(".product-list").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                speed: 500,
                prevArrow: "<button class='btn-prev' data-omni-type='microsite_pcontentinter' data-omni='rolling:left arrow'><span><img src='/images/btn-arrow-left.png' alt='Previous' style='vertical-align:top'></span></button>",
                nextArrow: "<button class='btn-next' data-omni-type='microsite_pcontentinter' data-omni='rolling:right arrow'><span><img src='/images/btn-arrow-right.png' alt='Next' style='vertical-align:top'></span></button>",
                swipe: false,
                responsive: [{
                    breakpoint: 769,
                    settings: "unslick"
                }]
            });
        }




        function shopMore() {
            if (window.innerWidth <= 768) {
                $(".shop-list").find("li").eq(2).nextAll().css("display", "none");
            } else {
                $(".shop-list").find("li").css("display", "block");
            }
        }



        //anchorBar var
        var h1 = $(window).outerHeight(),
            h2 = 65,
            h3 = $(".nav-title.mo").outerHeight(),
            h4 = Math.ceil($(".nav-list.mo").find("ul li").outerHeight(true)),
            len = $(".nav-list.mo").find("ul li").length,
            result = 0;

        function anchorBar() {
            var _top = $(".anchor-wrap").offset().top;

            $(window).scroll(function() {
                if ($(this).scrollTop() >= _top) {
                    $(".anchor-wrap").addClass("fixed");
                } else {
                    $(".anchor-wrap").removeClass("fixed");
                }
            });

            $(".explain-list").find("ul li").on("mouseenter focusin", function(e) {
                e.preventDefault();
                var idx = $(this).index();
                var w1 = $(".explain-list").find(".explain-bar").outerWidth();
                var w2 = $(this).outerWidth();
                var x = $(this).position().left;
                var result = x + (w2 / 2) - (w1 / 2);

                if (!$(this).is(".active")) {
                    $(".explain-list").find(".explain-bar").animate({
                        "left": Math.ceil(result)
                    }, 500, function() {
                        $(".explain-list").find("ul li").removeClass("active")
                        $(".explain-list").find("ul li").eq(idx).addClass("active");
                    });
                }
            });
               
            $(".nav-list.pc").find("ul li").on("mouseenter focusin", function() {
                var idx = $(this).index();
                var w1 = $(this).outerWidth();
                var x = $(this).position().left;

                if (!$(this).is(".active")) {
                    $(".nav-list.pc").find(".nav-bar").animate({
                        "left": Math.ceil(x),
                        "width": w1
                    }, 500, function() {
                        $(".nav-list.pc").find("ul li").removeClass("active")
                        $(".nav-list.pc").find("ul li").eq(idx).addClass("active");
                    });
                }
            });
        }

        function anchorBarClick() {
            $(".nav-title.mo").on("click", function(e) {
                e.preventDefault();

                if ($(".anchor-wrap").is(".fixed")) {
                    h2 = 0;
                }

                if ((h1 - (h2 + h3)) < (h4 * len)) {
                    result = (h1 - (h2 + h3));
                } else {
                    result = (h4 * len);
                }

                if (!$(".nav-list-wrap").is(".active")) {
                    $(".nav-list-wrap").addClass("active");
                    $("body").css("overflow", "hidden");
                    $(".layer-mask").css({
                        "display": "block",
                        "top": h2
                    });
                    $(".nav-list.mo ul").css({
                        "height": 0,
                        "overflow-y": "auto"
                    });

                    $(".nav-list.mo ul").animate({
                        "height": result
                    }, 500);
                    $(this).find(".more").text("close");
                } else {
                    $("body").css("overflow", "");
                    $(".layer-mask").css({
                        "display": "",
                        "top": ""
                    });
                    $(".nav-list.mo ul").animate({
                        "height": 0
                    }, 500, function() {
                        $(".nav-list-wrap").removeClass("active");
                    });
                    $(this).find(".more").text("open");
                }
            });
        }

        $(window).resize(function() {
            imgResizeSrc();
            shopMore();
            h1 = $(window).outerHeight();
            h2 = $("header").outerHeight();
            h3 = $(".nav-title.mo").outerHeight();
            h4 = Math.ceil($(".nav-list.mo").find("ul li").outerHeight(true));

            if ((h1 - (h2 + h3)) < (h4 * len) && $(".nav-list-wrap").is(".active")) {
                result = (h1 - (h2 + h3));
                $(".nav-list.mo ul").css({
                    "height": result
                });
            } else if ((h1 - (h2 + h3)) >= (h4 * len) && $(".nav-list-wrap").is(".active")) {
                result = (h4 * len);
                $(".nav-list.mo ul").css({
                    "height": result
                });
            }

            if (window.innerWidth > 1024) {
                $("body").css("overflow", "");
                $(".nav-list.mo").css("display", "none");
            } else {
                if ($(".nav-list-wrap").is(".active")) {
                    $("body").css("overflow", "hidden");
                }
                $(".nav-list.mo").css("display", "");
                if (!$(".nav-list-wrap").is(".active")) {
                    $(".nav-list-wrap").removeClass("active");
                } else {
                    $(".nav-list-wrap").addClass("active");
                }
            }

            if (window.innerWidth > 768) {
                $("body").removeClass("mobile");
                setTimeout(function() {
                    $(".thumb-temp").find(".slick-list").css({
                        "height": ($(".thumb-temp").find(".slick-slide").outerHeight(true) * 5) - 4
                    });
                }, 100);
            } else {
                $(".thumb-temp").find(".slick-list").removeAttr("style");
                $("body").addClass("mobile");
                keyboardEventMo();
            }

            $('.product-list').slick('resize');
        });

        $(window).on('orientationchange', function() {
            $('.product-list').slick('resize');
        })

        if (window.innerWidth > 768) {
            $("body").removeClass("mobile");
        } else {
            $("body").addClass("mobile");
        }

        init();
        showAcc();
        slickSlide();
        imgResizeSrc();
        anchorBar();
        anchorBarClick();
        optionClickEvent();
        placeOrderChange();
        imgResizeSrc();
        keyboardEvent();
        keyboardEventMo();
        shopMore();
        isAvailable();

        $(".product-temp").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            slickMotion(nextSlide);
            var slickActiveLen = $(".thumb-temp").find(".slick-active").length;
            if (nextSlide >= 5) {
                $(".thumb-temp").slick("slickNext", nextSlide);
            } else if (nextSlide == 0) {
                $(".thumb-temp").slick("slickPrev", nextSlide);
            }
        });

        $(document).on("click", ".thumb-temp .slick-slide a", function(event) {
            event.preventDefault();
            var idx = $(this).parent().index();
            $(".thumb-temp .slick-slide a").removeAttr("title");
            // $(this).attr("title","selected thumbnail");
            $(".product-temp").slick("slickGoTo", idx);
            slickMotion(idx);
        });

        $(".calc").find(">a").on("click", function(event) {
            event.preventDefault();

            var resultName = [],
                tagModelName = '',
                tagModelCode = '';

            $.each(CHOICE_PRODUCT, function(index, ele) {
                if ($.inArray(ele, resultName) == -1) {
                    resultName.push(ele);
                }
            });

            $.each(resultName, function(index, ele) {
                tagModelName += ';';
                tagModelName += resultName[index];
                tagModelName += ',';

                tagModelCode += resultName[index];
                tagModelCode += ',';
            });

            tagModelName = tagModelName.slice(0, -1);
            tagModelCode = tagModelCode.slice(0, -1);

            $(this).attr('data-omni-type', 'microsite_pdpoption');
            $(this).attr('data-omni', 'calculator|' + tagModelName.toLowerCase() + '|' + tagModelCode);
            goCalculator();
        });




        /* CONDITION BANNER UP2YOU*/
        if (location.search.substr(1).split("?")[0] !== "") {
            for (var c = 0, PIDLENGTH = PRODUCT_DATA.rental.length; c < PIDLENGTH; c++) {
                if ( PRODUCT_DATA.rental[c] === 'false'){
                    $('.option-select[data-opt-index=0] button[data-model-idx=' + c + ']').hide();
                    $('.product-title.pc h2 span:nth-child(' + (c+1) + ')').hide();
                }    
            }
        }
        /**
         * Select a model on load.
         */
        function selectModel(model) {
            switch (model) {
                //CASE UP2YOU
                case 'up2you-s7':
                    var oney24xPrice = UP2YOU_PRICE[0];
                    $('.option-select[data-opt-index=0] button[data-model-idx=0]').trigger('click');
                    $(".up2you-total__price [data='price-first']").text(oney24xPrice.first);
                    $(".up2you-total__price [data='price-monthly']").text(oney24xPrice.monthly);
                    break;
                case 'up2you-s7edge':
                    var oney24xPrice = UP2YOU_PRICE[1];
                    $('.option-select[data-opt-index=0] button[data-model-idx=1]').trigger('click');
                    $(".up2you-total__price [data='price-first']").text(oney24xPrice.first);
                    $(".up2you-total__price [data='price-monthly']").text(oney24xPrice.monthly);
                    break;
                //CASE NO UP2YOU
                //S8
                /*case 's8-black':
                    $('.option-select[data-opt-index=0] button[data-model-idx=0]').trigger('click');
                    $('.option-select.color-chip button[data-color-idx=0]').trigger('click');
                    console.log('black s8');
                    break;
                case 's8-silver':
                    $('.option-select[data-opt-index=0] button[data-model-idx=0]').trigger('click');
                    $('.option-select.color-chip button[data-color-idx=1]').trigger('click');
                    console.log('silver s8');
                    break;
                case 's8-orchid':
                    $('.option-select[data-opt-index=0] button[data-model-idx=0]').trigger('click');
                    $('.option-select.color-chip button[data-color-idx=2]').trigger('click');
                    console.log('orchid s8');
                    break;
                //S8+
                case 's8plus-black':
                    $('.option-select[data-opt-index=0] button[data-model-idx=1]').trigger('click');
                    $('.option-select.color-chip button[data-color-idx=0]').trigger('click');
                    console.log('black s8plus');
                    break;
                case 's8plus-silver':
                    $('.option-select[data-opt-index=0] button[data-model-idx=1]').trigger('click');
                    $('.option-select.color-chip button[data-color-idx=1]').trigger('click');
                    console.log('silver s8plus');
                    break;
                case 's8plus-orchid':
                    $('.option-select[data-opt-index=0] button[data-model-idx=1]').trigger('click');
                    $('.option-select.color-chip button[data-color-idx=2]').trigger('click');
                    console.log('orchid s8plus');
                    break;*/
            }
        }

        // PACK SELECTED ON START
        function selectPack() {
            $('.option-select[data-opt-index=3] button[data-pack-idx=0]').trigger('click');
        }

        /**
         * Reload page with good url (buy / rent)
         */
        $('.achat-loc .loc').on('click', function() {
            document.location.href = '?model=up2you-s7';
        });
        $('.achat-loc .achat').on('click', function() {
            document.location.href = './';
        });


        var model;
        model = getLocationParamsValue('model');

        if(model == 'up2you-s7'){console.log('up2you-S7')}
        // if(model == 'up2you-s8plus'){console.log('up2you-S8PluS')}

        if (isUp2you()) {
           // console.log("up2YOU");
            $(".up2you").show();
            $(".no-up2you").hide();
            $('button.loc').addClass('active');
            $('button.achat').removeClass('active');
            $('.faqUp2you').attr("href", "http://www.samsung.com/fr/up2you/faq.html");
            $('.service-list').addClass('list4x');
            whoIsSelected();
        } else {
           // console.log('NO - up2you');
            $(".up2you").hide();
            $(".no-up2you").show();
            $('.service-list').removeClass('list4x');
        }

        function isUp2you() {
            return (model === 'up2you-s7') || (model === 'up2you-s7edge');
        }



        function isAvailable() {
            $('.option-select[data-opt-index=0], .option-select[data-opt-index=1], .option-select[data-opt-index=3]').on('click', function() {
                setTimeout(function() {
                    if (model == null) {
                      if ($('.option-select[data-opt-index=1] button.disabled.active').length === 1 || $('.option-select[data-opt-index=3] button.disabled.active').length === 1) {
                        $('.btn-buynow').html('RUPTURE DE STOCK').attr('title', 'Rupture de stock');
                        $('.btn-order').addClass('outofstock');
                      } else {                 
                        $('.btn-buynow').html('AJOUTER AU PANIER').attr('title', 'Ajouter au panier');                       
                        $('.btn-order').removeClass('outofstock');
                      } 
                    } else {
                      if ($('.option-select[data-opt-index=1] button.disabled.active').length === 1) {
                        $('.btn-buynow').html('RUPTURE DE STOCK').attr('title', 'Rupture de stock');
                        $('.btn-order').addClass('outofstock');
                      } else {
                        $('.btn-buynow').html('LOUER OU RENOUVELER').attr('title', 'Louer ou renouveler');
                        $('.btn-order').removeClass('outofstock');
                      }
                    }

                  /* Add dynamic tracking to the where to buy CTA & simulate up2you CTA */
                  var modelCode = $(".option-select[data-opt-index=1] button.active").attr("data-sku"),
                    modelName = modelCode.substring(0, 8);
                  $(".other-shops-button").attr("data-omni", "buy option |;" + modelName + "|" + modelCode);
                  $(".js-open-modal").attr("data-omni", "calculator |;" + modelName + "|" + modelCode);
                    // $(".order-box .pre-inner .total-box .btn-order .btn-default").attr("data-omni", ";" + modelName + "|" + modelCode);
                }, 1500);
            });

            setTimeout(function() {
                if (model == null) {
                  if ($('.option-select[data-opt-index=1] button.disabled.active').length === 1 || $('.option-select[data-opt-index=3] button.disabled.active').length === 1) {
                    $('.btn-buynow').html('RUPTURE DE STOCK').attr('title', 'Rupture de stock');
                    $('.btn-order').addClass('outofstock');
                  } else {
              
                    $('.btn-buynow').html('AJOUTER AU PANIER').attr('title', 'Ajouter au panier');
                   
                    $('.btn-order').removeClass('outofstock');
                  } 
                } else {
                    if ($('.option-select[data-opt-index=1] button.disabled.active').length === 1 || $('.option-select[data-opt-index=3] button.disabled.active').length === 1) {
                    $('.btn-buynow').html('RUPTURE DE STOCK').attr('title', 'Rupture de stock');
                    $('.btn-order').addClass('outofstock');
                  } else {
                    $('.btn-buynow').html('LOUER OU RENOUVELER').attr('title', 'Louer ou renouveler');
                    $('.btn-order').removeClass('outofstock');
                  }
                }
                
            }, 1000);
        }

        // button "autres enseignes" click handler
        $('.other-shops-button').on('click', function() {
            var modelSelect = $('.option-select[data-opt-index=1] button.active').attr('data-sku');
            // sendClickCode('microsite_action', 'galaxy2017:s8:order:wtb-' + model + '-' + color + '-' + capacity);
            // sendClickCode('wishlist','buy option|'+modelCode+'|'+modelName);
            kjQuery.fancybox.open({
                href: '//www.samsung.com/fr/ouacheter/fullscreen.html?widget=1&product=' + modelSelect,
                type: 'iframe',
                autoSize: false,
                autoCenter: true,
                fitToView: false,
                padding: 0,
                maxWidth: 920,
                width: '100%',
                height: '100%',
                openEffect: 'none',
                closeEffect: 'none',
                afterLoad: function(current, previous) {
                    iFrameResize({
                        resizedCallback: function() {
                            setTimeout(function() {
                                kjQuery.fancybox.update();
                            }, 50);
                        }
                    });
                }
            });
        });

        // button "simulez votre mensualité" chick handler
        $('.js-open-modal').bind('click', function() {
            $('.pop-choice.no-up2you').hide();
            $('.pop-wrap.choice').addClass('active').show().queue(function() {
                var choice_position = $('.btn-accessories-area > button').offset();
                var pop_mask = $('#choice_mask');
                var target = $('.pop-wrap .pop-choice');
                var pop_h = target.height();
                target.css({
                    'position': 'fixed',
                    'margin': 'auto',
                    'top': 150 + 'px'
                });
                if (target.offset().top < $(window).scrollTop()) {
                    target.css({
                        'top': $(window).scrollTop() + 20
                    });
                }
                $(this).dequeue();
            });

        });

        $('.pop-wrap.sns .close').bind('click', function() {
            $(this).prev().removeClass('active');
            $(this).parent().removeClass('active').hide();
        });

        $('.pop-choice .close').bind('click', function() {
            $(this).parent().parent().removeClass('active').hide();
            $(this).parent().removeAttr('style');
        });
        $('.pop-wrap.choice .mask').bind('click', function() {
            $('.pop-choice .close').trigger('click');
        });


         // INIT PAGE
        setTimeout(function() {
            selectModel(model);
            selectPack();
        }, 200);
    }

    preOrder();

    var modelButton = $(".option-select[data-opt-index=0] button");


 
    //change accessori list depend on model choice
    function switchAcc() {
        $(".product-list").slick("slickUnfilter"); 
        if ($(".option-select[data-opt-index=0] button[data-model-idx=" + modelIdx + "]").hasClass('active')) {
            var currentAcc = ACCESSORY_DATA[modelIdx][0].modelAcc;
            setTimeout(function() {
                if ($(window).width() < 767) {
                    $(".product-list>div").hide();
                }
                $(".product-list div[data-model-acc=" + currentAcc + "]").show();
            },400);
            $('.product-list').slick('slickFilter', '[data-model-acc=' + currentAcc + ']');
        } 
    }

    var gs8 = $(".option-select[data-opt-index=0] button[data-model-idx=0]");
    gs8.trigger('click');
    $('.js-lesplus-menu-mo').click(function(){
        $('.itmo').toggle();
    });

    // les plus fixed panel after scrolling
    $(document).ready(function() {
        $('#scrollDiv').hide();
        $(window).scroll(function() {
            if ($(document).scrollTop() > 85) {
                $('#lesplus-panel').css('position','fixed');
            }
            else {
                 $('#lesplus-panel').css('position','absolute');
            }
        });
        
    });

})(window.jQuery);
