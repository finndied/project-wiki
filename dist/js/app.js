(() => {
    var __webpack_modules__ = {
        2: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
 /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
                do {
                    for (t = n.length; 0 <= --t && n.item(t) !== o; ) ;
                } while (t < 0 && (o = o.parentElement));
                return o;
            }), function() {
                if ("function" == typeof window.CustomEvent) return;
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e;
            }(), function() {
                for (var r = 0, e = [ "ms", "moz", "webkit", "o" ], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], 
                window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var n = (new Date).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout((function() {
                        e(n + o);
                    }), o);
                    return r = n + o, a;
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e);
                });
            }(), function(e, t) {
                true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return t(e);
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
            }("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, (function(M) {
                "use strict";
                var q = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0
                }, I = function() {
                    var n = {};
                    return Array.prototype.forEach.call(arguments, (function(e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    })), n;
                }, r = function(e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o; ) {
                        if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
                    }
                    return "#" + r;
                }, F = function() {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                }, L = function(e) {
                    return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                    var t;
                }, x = function(e, t, n) {
                    0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), 
                    e.focus(), e.style.outline = "none"), M.scrollTo(0, t));
                }, H = function(e, t, n, o) {
                    if (t.emitEvents && "function" == typeof M.CustomEvent) {
                        var a = new CustomEvent(e, {
                            bubbles: !0,
                            detail: {
                                anchor: n,
                                toggle: o
                            }
                        });
                        document.dispatchEvent(a);
                    }
                };
                return function(o, e) {
                    var b, a, A, O, C = {};
                    C.cancelScroll = function(e) {
                        cancelAnimationFrame(O), O = null, e || H("scrollCancel", b);
                    }, C.animateScroll = function(a, r, e) {
                        C.cancelScroll();
                        var i = I(b || q, e || {}), c = "[object Number]" === Object.prototype.toString.call(a), t = c || !a.tagName ? null : a;
                        if (c || t) {
                            var s = M.pageYOffset;
                            i.header && !A && (A = document.querySelector(i.header));
                            var n, o, u, l, m, d, f, h, p = L(A), g = c ? a : function(e, t, n, o) {
                                var a = 0;
                                if (e.offsetParent) for (;a += e.offsetTop, e = e.offsetParent; ) ;
                                return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), 
                                a;
                            }(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip), y = g - s, v = F(), w = 0, S = (n = y, 
                            u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)), E = function(e) {
                                var t, n, o;
                                l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, 
                                "easeInQuad" === (t = i).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), 
                                "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), 
                                "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), 
                                "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), 
                                "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), 
                                "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), 
                                "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), 
                                "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), 
                                t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), 
                                function(e, t) {
                                    var n = M.pageYOffset;
                                    if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), 
                                    x(a, t, c), H("scrollStop", i, a, r), !(O = l = null);
                                }(d, g) || (O = M.requestAnimationFrame(E), l = e);
                            };
                            0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({
                                smoothScroll: JSON.stringify(h),
                                anchor: f.id
                            }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), 
                            C.cancelScroll(!0), M.requestAnimationFrame(E));
                        }
                    };
                    var t = function(e) {
                        if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
                            var t, n;
                            try {
                                t = r(decodeURIComponent(a.hash));
                            } catch (e) {
                                t = r(a.hash);
                            }
                            if ("#" === t) {
                                if (!b.topOnEmptyHash) return;
                                n = document.documentElement;
                            } else n = document.querySelector(t);
                            (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), function(e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var t = M.location.hash;
                                    t = t || "", history.replaceState({
                                        smoothScroll: JSON.stringify(e),
                                        anchor: t || M.pageYOffset
                                    }, document.title, t || M.location.href);
                                }
                            }(b), C.animateScroll(n, a));
                        }
                    }, n = function(e) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
                            var t = history.state.anchor;
                            "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {
                                updateURL: !1
                            });
                        }
                    };
                    C.destroy = function() {
                        b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), 
                        C.cancelScroll(), O = A = a = b = null);
                    };
                    return function() {
                        if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, 
                        document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1);
                    }(), C;
                };
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" === typeof window) return window;
            }
        }();
    })();
    (() => {
        "use strict";
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        if (spollersBlock.classList.contains("_spoller-init")) {
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        }
                    }));
                }));
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        var smooth_scroll_polyfills_min = __webpack_require__(2);
        let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof smooth_scroll_polyfills_min) (new smooth_scroll_polyfills_min).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                functions_FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else functions_FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoblock_gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        document.addEventListener("click", documentActions);
        const menuBlocks = document.querySelectorAll(".sub-menu-catalog__block");
        if (menuBlocks.length) menuBlocks.forEach((menuBlock => {
            const menuBlockItems = menuBlock.querySelectorAll(".sub-menu-catalog__category").length;
            menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
        }));
        function documentActions(e) {
            const targetElement = e.target;
            if (targetElement.closest("[data-parent]")) {
                const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
                const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
                if (subMenu) {
                    const activeLink = document.querySelector("._sub-menu-active");
                    const activeBlock = document.querySelector("._sub-menu-open");
                    if (activeLink && activeLink !== targetElement) {
                        activeLink.classList.remove("_sub-menu-active");
                        activeBlock.classList.remove("_sub-menu-open");
                        document.documentElement.classList.remove("sub-menu-open");
                    }
                    document.documentElement.classList.toggle("sub-menu-open");
                    targetElement.classList.toggle("_sub-menu-active");
                    subMenu.classList.toggle("_sub-menu-open");
                } else console.log("Ой ой, нет такого подменю");
                e.preventDefault();
            }
            if (targetElement.closest(".menu-top-header__link_catalog")) {
                document.documentElement.classList.add("catalog-open");
                e.preventDefault();
            }
            if (targetElement.closest(".menu-catalog__back")) {
                document.documentElement.classList.remove("catalog-open");
                document.querySelector("._sub-menu-active") ? document.querySelector("._sub-menu-active").classList.remove("_sub-menu-active") : null;
                document.querySelector("._sub-menu-open") ? document.querySelector("._sub-menu-open").classList.remove("_sub-menu-open") : null;
                e.preventDefault();
            }
            if (targetElement.closest(".sub-menu-catalog__back")) {
                document.documentElement.classList.remove("sub-menu-open");
                document.querySelector("._sub-menu-active") ? document.querySelector("._sub-menu-active").classList.remove("_sub-menu-active") : null;
                document.querySelector("._sub-menu-open") ? document.querySelector("._sub-menu-open").classList.remove("_sub-menu-open") : null;
                e.preventDefault();
            }
        }
        if (document.querySelector(".filter-catalog__title")) document.querySelector(".filter-catalog__title").addEventListener("click", (() => {
            if (window.innerWidth < 992) document.querySelector(".filter-catalog__items").classList.toggle("_active");
        }));
        window["FLS"] = true;
        isWebp();
        menuInit();
        spollers();
        pageNavigation();
    })();
})();