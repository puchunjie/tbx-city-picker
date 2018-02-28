! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("CityPicker", [], t) : "object" == typeof exports ? exports.CityPicker = t() : e.CityPicker = t() }("undefined" != typeof self ? self : this, function() { return function(e) {
        function t(n) { if (i[n]) return i[n].exports; var r = i[n] = { i: n, l: !1, exports: {} }; return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports } var i = {}; return t.m = e, t.c = i, t.d = function(e, i, n) { t.o(e, i) || Object.defineProperty(e, i, { configurable: !1, enumerable: !0, get: n }) }, t.n = function(e) { var i = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(i, "a", i), i }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "/dist/", t(t.s = 1) }([function(e, t, i) { "use strict";
        t.a = { name: "tbx-city-picker", props: { placeholder: { type: String, default: "" }, value: { type: Array, default: function() { return [] } } }, directives: { clickoutside: { bind: function(e, t, i) {
                        function n(i) { if (e.contains(i.target)) return !1;
                            t.expression && t.value(i) }
                        e.__vueClickOutside__ = n, document.addEventListener("click", n) }, unbind: function(e, t) { document.removeEventListener("click", e.__vueClickOutside__), delete e.__vueClickOutside__ } } }, data: function() { return { tabs: [{ label: "请选择", api: "G_getProvince", active: null, data: [] }, { label: "请选择", api: "G_getCity", active: null, data: [] }, { label: "请选择", api: "G_getDistrict", active: null, data: [] }], activeTab: 0, results: [], ajaxLoad: !1, show: !1 } }, computed: { activeItem: function() { return this.tabs[this.activeTab] }, collectResults: function() { var e = this.activeTab,
                        t = []; return this.tabs.forEach(function(i, n) { n <= e && t.push({ id: i.data[i.active].id, name: i.data[i.active].shortName }) }), this.$clearData(t) }, label: function() { var e = "",
                        t = this.results.length; return this.results.forEach(function(i, n) { e += n == t - 1 ? i.name : i.name + " " }), e }, placeholderShow: function() { return this.results.length <= 0 } }, watch: { results: function(e) { this.$emit("input", e) }, show: function(e) { e && 0 === this.activeTab && this.activeItem.data.length <= 0 && this.getData() } }, methods: { getData: function() { var e = this,
                        t = {},
                        i = this.tabs[this.activeTab]; if (this.activeTab > 0) { var n = this.tabs[this.activeTab - 1];
                        t.id = n.data[n.active].id }
                    this.ajaxLoad = !0, this.$http.post(this.$api[i.api], t).then(function(t) { 1e3 === t.code && (i.data = t.data), e.ajaxLoad = !1 }) }, switchTab: function(e) { this.activeTab = e }, pick: function(e) { var t = this,
                        i = this.tabs[this.activeTab],
                        n = i.data[e];
                    i.active = e, i.label = n.shortName, this.results = this.collectResults, this.activeTab < 2 ? (this.tabs.forEach(function(e, i) { i <= 2 && i > t.activeTab && (t.tabs[i].active = null, t.tabs[i].label = "请选择") }), this.activeTab++, this.getData()) : this.closePanel() }, showPanel: function() { this.show = !0 }, closePanel: function() { this.show = !1 }, ousideClick: function() { this.closePanel() } }, created: function() { this.results = this.value } } }, function(e, t, i) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = i(2),
            r = { install: function(e, t) { e.component(n.a.name, n.a) } };
        t.default = r }, function(e, t, i) { "use strict";

        function n(e) { i(3) } var r = i(0),
            a = i(9),
            o = i(8),
            s = n,
            c = o(r.a, a.a, !1, s, null, null);
        t.a = c.exports }, function(e, t, i) { var n = i(4); "string" == typeof n && (n = [
            [e.i, n, ""]
        ]), n.locals && (e.exports = n.locals);
        i(6)("4724fe11", n, !0, {}) }, function(e, t, i) { t = e.exports = i(5)(!1), t.push([e.i, ".tbx-city-picker-container{display:inline-block;min-width:100px;height:42px;line-height:42px;border:2px solid #f0f0f0;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all 1s;-moz-transition:all 1s;-webkit-transition:all 1s;-o-transition:all 1s;font-size:14px}.tbx-city-picker-container:hover{border-color:#1bc08b}.tbx-city-picker-container:not(:last-child){margin-right:36px}.tbx-city-picker-container .inner-warp{display:inline-block;width:100%;height:100%;vertical-align:top}.tbx-city-picker-container .inner-warp+.inner-warp{border-left:2px solid #f0f0f0}.tbx-city-picker-container .goast-input{display:inline-block;width:50px;height:100%;border:0;margin:0;padding:0;text-indent:10px;vertical-align:top}.tbx-city-picker-container .goast-input .placeholder{color:#999}.tbx-city-picker-container .goast-input:focus{outline:0}.tbx-city-picker-container .goast-unit{display:inline-block;width:35px;height:100%;line-height:46px;text-align:center;vertical-align:top;color:#999}.ls-picker-container{position:relative;width:100%;height:100%;padding:0 16px;color:#999;font-size:12px}.ls-picker-container .value{color:#333;pointer-events:none}.ls-picker-container .value.place-holder{color:#999}.ls-picker-container .iconfont{color:#999;font-size:10px;float:right}.ls-picker-container .area-box{position:absolute;width:472px;top:60px;background-color:#fff;box-shadow:0 1px 6px rgba(0,0,0,.2);-moz-border-radius:6px;-webkit-border-radius:6px;border-radius:6px;z-index:999}.ls-picker-container .area-box .tabs{width:100%;height:45px;line-height:45px;padding:0 20px;border-bottom:1px solid #f0f0f0}.ls-picker-container .area-box .tabs span{display:inline-block;width:48px;margin-right:16px;text-align:right}.ls-picker-container .area-box .tabs .active{color:#1bc08b}.ls-picker-container .area-box .items-contnet{width:100%;min-height:190px;padding:20px;line-height:0}.ls-picker-container .area-box .items-contnet .item{display:inline-block;font-size:12px;padding:0 6px;width:60px;height:24px;line-height:24px;text-align:center;margin-bottom:10px;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;overflow:hidden}.ls-picker-container .area-box .items-contnet .item.active,.ls-picker-container .area-box .items-contnet .item:hover{background-color:#1bc08b;color:#fff}", ""]) }, function(e, t) {
        function i(e, t) { var i = e[1] || "",
                r = e[3]; if (!r) return i; if (t && "function" == typeof btoa) { var a = n(r); return [i].concat(r.sources.map(function(e) { return "/*# sourceURL=" + r.sourceRoot + e + " */" })).concat([a]).join("\n") } return [i].join("\n") }

        function n(e) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */" }
        e.exports = function(e) { var t = []; return t.toString = function() { return this.map(function(t) { var n = i(t, e); return t[2] ? "@media " + t[2] + "{" + n + "}" : n }).join("") }, t.i = function(e, i) { "string" == typeof e && (e = [
                    [null, e, ""]
                ]); for (var n = {}, r = 0; r < this.length; r++) { var a = this[r][0]; "number" == typeof a && (n[a] = !0) } for (r = 0; r < e.length; r++) { var o = e[r]; "number" == typeof o[0] && n[o[0]] || (i && !o[2] ? o[2] = i : i && (o[2] = "(" + o[2] + ") and (" + i + ")"), t.push(o)) } }, t } }, function(e, t, i) {
        function n(e) { for (var t = 0; t < e.length; t++) { var i = e[t],
                    n = u[i.id]; if (n) { n.refs++; for (var r = 0; r < n.parts.length; r++) n.parts[r](i.parts[r]); for (; r < i.parts.length; r++) n.parts.push(a(i.parts[r]));
                    n.parts.length > i.parts.length && (n.parts.length = i.parts.length) } else { for (var o = [], r = 0; r < i.parts.length; r++) o.push(a(i.parts[r]));
                    u[i.id] = { id: i.id, refs: 1, parts: o } } } }

        function r() { var e = document.createElement("style"); return e.type = "text/css", d.appendChild(e), e }

        function a(e) { var t, i, n = document.querySelector("style[" + x + '~="' + e.id + '"]'); if (n) { if (h) return v;
                n.parentNode.removeChild(n) } if (g) { var a = f++;
                n = p || (p = r()), t = o.bind(null, n, a, !1), i = o.bind(null, n, a, !0) } else n = r(), t = s.bind(null, n), i = function() { n.parentNode.removeChild(n) }; return t(e),
                function(n) { if (n) { if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                        t(e = n) } else i() } }

        function o(e, t, i, n) { var r = i ? "" : n.css; if (e.styleSheet) e.styleSheet.cssText = m(t, r);
            else { var a = document.createTextNode(r),
                    o = e.childNodes;
                o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a) } }

        function s(e, t) { var i = t.css,
                n = t.media,
                r = t.sourceMap; if (n && e.setAttribute("media", n), b.ssrId && e.setAttribute(x, t.id), r && (i += "\n/*# sourceURL=" + r.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), e.styleSheet) e.styleSheet.cssText = i;
            else { for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(i)) } } var c = "undefined" != typeof document; if ("undefined" != typeof DEBUG && DEBUG && !c) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."); var l = i(7),
            u = {},
            d = c && (document.head || document.getElementsByTagName("head")[0]),
            p = null,
            f = 0,
            h = !1,
            v = function() {},
            b = null,
            x = "data-vue-ssr-id",
            g = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        e.exports = function(e, t, i, r) { h = i, b = r || {}; var a = l(e, t); return n(a),
                function(t) { for (var i = [], r = 0; r < a.length; r++) { var o = a[r],
                            s = u[o.id];
                        s.refs--, i.push(s) }
                    t ? (a = l(e, t), n(a)) : a = []; for (var r = 0; r < i.length; r++) { var s = i[r]; if (0 === s.refs) { for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                            delete u[s.id] } } } }; var m = function() { var e = []; return function(t, i) { return e[t] = i, e.filter(Boolean).join("\n") } }() }, function(e, t) { e.exports = function(e, t) { for (var i = [], n = {}, r = 0; r < t.length; r++) { var a = t[r],
                    o = a[0],
                    s = a[1],
                    c = a[2],
                    l = a[3],
                    u = { id: e + ":" + r, css: s, media: c, sourceMap: l };
                n[o] ? n[o].parts.push(u) : i.push(n[o] = { id: o, parts: [u] }) } return i } }, function(e, t) { e.exports = function(e, t, i, n, r, a) { var o, s = e = e || {},
                c = typeof e.default; "object" !== c && "function" !== c || (o = e, s = e.default); var l = "function" == typeof s ? s.options : s;
            t && (l.render = t.render, l.staticRenderFns = t.staticRenderFns, l._compiled = !0), i && (l.functional = !0), r && (l._scopeId = r); var u; if (a ? (u = function(e) { e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a) }, l._ssrRegister = u) : n && (u = n), u) { var d = l.functional,
                    p = d ? l.render : l.beforeCreate;
                d ? (l._injectStyles = u, l.render = function(e, t) { return u.call(t), p(e, t) }) : l.beforeCreate = p ? [].concat(p, u) : [u] } return { esModule: o, exports: s, options: l } } }, function(e, t, i) { "use strict"; var n = function() { var e = this,
                    t = e.$createElement,
                    i = e._self._c || t; return i("div", { staticClass: "tbx-city-picker-container" }, [i("div", { staticClass: "ls-picker-container", on: { click: function(t) { if (t.target !== t.currentTarget) return null;
                            e.showPanel(t) } } }, [i("span", { staticClass: "value", class: { "place-holder": e.placeholderShow } }, [e._v(e._s(e.placeholderShow ? e.placeholder : e.label))]), e._v(" "), i("span", { staticClass: "iconfont", class: e.show ? "icon-arrowdown" : "icon-arrowup" }), e._v(" "), e.show ? i("div", { directives: [{ name: "clickoutside", rawName: "v-clickoutside", value: e.ousideClick, expression: "ousideClick" }], staticClass: "area-box" }, [i("Spin", { directives: [{ name: "show", rawName: "v-show", value: e.ajaxLoad, expression: "ajaxLoad" }], attrs: { fix: "" } }, [e._v("加载中...")]), e._v(" "), i("div", { staticClass: "tabs" }, e._l(e.tabs, function(t, n) { return i("span", { directives: [{ name: "show", rawName: "v-show", value: t.data.length > 0, expression: "tab.data.length > 0" }], key: n, class: { active: n == e.activeTab }, on: { click: function(t) { e.switchTab(n) } } }, [e._v(e._s(t.label))]) })), e._v(" "), i("div", { staticClass: "items-contnet" }, e._l(e.activeItem.data, function(t, n) { return i("span", { key: t.id, staticClass: "item", class: { active: e.activeItem.active == n }, on: { click: function(t) { e.pick(n) } } }, [e._v(e._s(t.shortName))]) }))], 1) : e._e()])]) },
            r = [],
            a = { render: n, staticRenderFns: r };
        t.a = a }]) });
//# sourceMappingURL=tbx-city-picker.js.map