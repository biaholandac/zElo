(() => {
  var oI = Object.create;
  var zm = Object.defineProperty;
  var eI = Object.getOwnPropertyDescriptor;
  var tI = Object.getOwnPropertyNames;
  var nI = Object.getPrototypeOf,
    lI = Object.prototype.hasOwnProperty;
  var qo = (a, o) => () => {
    try {
      return (o || a((o = { exports: {} }).exports, o), o.exports);
    } catch (e) {
      throw ((o = 0), e);
    }
  };
  var sI = (a, o, e, t) => {
    if ((o && typeof o == "object") || typeof o == "function")
      for (let n of tI(o))
        !lI.call(a, n) &&
          n !== e &&
          zm(a, n, {
            get: () => o[n],
            enumerable: !(t = eI(o, n)) || t.enumerable,
          });
    return a;
  };
  var N = (a, o, e) => (
    (e = a != null ? oI(nI(a)) : {}),
    sI(
      o || !a || !a.__esModule
        ? zm(e, "default", { value: a, enumerable: !0 })
        : e,
      a,
    )
  );
  var Ym = qo((M) => {
    "use strict";
    var Vr = Symbol.for("react.transitional.element"),
      rI = Symbol.for("react.portal"),
      iI = Symbol.for("react.fragment"),
      cI = Symbol.for("react.strict_mode"),
      uI = Symbol.for("react.profiler"),
      mI = Symbol.for("react.consumer"),
      fI = Symbol.for("react.context"),
      pI = Symbol.for("react.forward_ref"),
      dI = Symbol.for("react.suspense"),
      II = Symbol.for("react.memo"),
      km = Symbol.for("react.lazy"),
      hI = Symbol.for("react.activity"),
      gI = Symbol.for("react.view_transition"),
      Um = Symbol.iterator;
    function SI(a) {
      return a === null || typeof a != "object"
        ? null
        : ((a = (Um && a[Um]) || a["@@iterator"]),
          typeof a == "function" ? a : null);
    }
    var _m = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      Gm = Object.assign,
      Vm = {};
    function Et(a, o, e) {
      ((this.props = a),
        (this.context = o),
        (this.refs = Vm),
        (this.updater = e || _m));
    }
    Et.prototype.isReactComponent = {};
    Et.prototype.setState = function (a, o) {
      if (typeof a != "object" && typeof a != "function" && a != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, a, o, "setState");
    };
    Et.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function Pm() {}
    Pm.prototype = Et.prototype;
    function Pr(a, o, e) {
      ((this.props = a),
        (this.context = o),
        (this.refs = Vm),
        (this.updater = e || _m));
    }
    var Zr = (Pr.prototype = new Pm());
    Zr.constructor = Pr;
    Gm(Zr, Et.prototype);
    Zr.isPureReactComponent = !0;
    var xm = Array.isArray;
    function Gr() {}
    var J = { H: null, A: null, T: null, S: null },
      Zm = Object.prototype.hasOwnProperty;
    function jr(a, o, e) {
      var t = e.ref;
      return {
        $$typeof: Vr,
        type: a,
        key: o,
        ref: t !== void 0 ? t : null,
        props: e,
      };
    }
    function CI(a, o) {
      return jr(a.type, o, a.props);
    }
    function Xr(a) {
      return typeof a == "object" && a !== null && a.$$typeof === Vr;
    }
    function vI(a) {
      var o = { "=": "=0", ":": "=2" };
      return (
        "$" +
        a.replace(/[=:]/g, function (e) {
          return o[e];
        })
      );
    }
    var qm = /\/+/g;
    function _r(a, o) {
      return typeof a == "object" && a !== null && a.key != null
        ? vI("" + a.key)
        : o.toString(36);
    }
    function yI(a) {
      switch (a.status) {
        case "fulfilled":
          return a.value;
        case "rejected":
          throw a.reason;
        default:
          switch (
            (typeof a.status == "string"
              ? a.then(Gr, Gr)
              : ((a.status = "pending"),
                a.then(
                  function (o) {
                    a.status === "pending" &&
                      ((a.status = "fulfilled"), (a.value = o));
                  },
                  function (o) {
                    a.status === "pending" &&
                      ((a.status = "rejected"), (a.reason = o));
                  },
                )),
            a.status)
          ) {
            case "fulfilled":
              return a.value;
            case "rejected":
              throw a.reason;
          }
      }
      throw a;
    }
    function Tt(a, o, e, t, n) {
      var l = typeof a;
      (l === "undefined" || l === "boolean") && (a = null);
      var s = !1;
      if (a === null) s = !0;
      else
        switch (l) {
          case "bigint":
          case "string":
          case "number":
            s = !0;
            break;
          case "object":
            switch (a.$$typeof) {
              case Vr:
              case rI:
                s = !0;
                break;
              case km:
                return ((s = a._init), Tt(s(a._payload), o, e, t, n));
            }
        }
      if (s)
        return (
          (n = n(a)),
          (s = t === "" ? "." + _r(a, 0) : t),
          xm(n)
            ? ((e = ""),
              s != null && (e = s.replace(qm, "$&/") + "/"),
              Tt(n, o, e, "", function (m) {
                return m;
              }))
            : n != null &&
              (Xr(n) &&
                (n = CI(
                  n,
                  e +
                    (n.key == null || (a && a.key === n.key)
                      ? ""
                      : ("" + n.key).replace(qm, "$&/") + "/") +
                    s,
                )),
              o.push(n)),
          1
        );
      s = 0;
      var i = t === "" ? "." : t + ":";
      if (xm(a))
        for (var c = 0; c < a.length; c++)
          ((t = a[c]), (l = i + _r(t, c)), (s += Tt(t, o, e, l, n)));
      else if (((c = SI(a)), typeof c == "function"))
        for (a = c.call(a), c = 0; !(t = a.next()).done; )
          ((t = t.value), (l = i + _r(t, c++)), (s += Tt(t, o, e, l, n)));
      else if (l === "object") {
        if (typeof a.then == "function") return Tt(yI(a), o, e, t, n);
        throw (
          (o = String(a)),
          Error(
            "Objects are not valid as a React child (found: " +
              (o === "[object Object]"
                ? "object with keys {" + Object.keys(a).join(", ") + "}"
                : o) +
              "). If you meant to render a collection of children, use an array instead.",
          )
        );
      }
      return s;
    }
    function Ml(a, o, e) {
      if (a == null) return a;
      var t = [],
        n = 0;
      return (
        Tt(a, t, "", "", function (l) {
          return o.call(e, l, n++);
        }),
        t
      );
    }
    function AI(a) {
      if (a._status === -1) {
        var o = a._result,
          e = o();
        (e.then(
          function (t) {
            (a._status === 0 || a._status === -1) &&
              ((a._status = 1),
              (a._result = t),
              e.status === void 0 && ((e.status = "fulfilled"), (e.value = t)));
          },
          function (t) {
            (a._status === 0 || a._status === -1) &&
              ((a._status = 2),
              (a._result = t),
              e.status === void 0 && ((e.status = "rejected"), (e.reason = t)));
          },
        ),
          a._status === -1 && ((a._status = 0), (a._result = e)));
      }
      if (a._status === 1) return a._result.default;
      throw a._result;
    }
    var Fm =
      typeof reportError == "function"
        ? reportError
        : function (a) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var o = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof a == "object" &&
                  a !== null &&
                  typeof a.message == "string"
                    ? String(a.message)
                    : String(a),
                error: a,
              });
              if (!window.dispatchEvent(o)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", a);
              return;
            }
            console.error(a);
          };
    function jm(a) {
      var o = J.T,
        e = {};
      ((e.types = o !== null ? o.types : null), (J.T = e));
      try {
        var t = a(),
          n = J.S;
        (n !== null && n(e, t),
          typeof t == "object" &&
            t !== null &&
            typeof t.then == "function" &&
            t.then(Gr, Fm));
      } catch (l) {
        Fm(l);
      } finally {
        (o !== null && e.types !== null && (o.types = e.types), (J.T = o));
      }
    }
    function Xm(a) {
      var o = J.T;
      if (o !== null) {
        var e = o.types;
        e === null ? (o.types = [a]) : e.indexOf(a) === -1 && e.push(a);
      } else jm(Xm.bind(null, a));
    }
    var bI = {
      map: Ml,
      forEach: function (a, o, e) {
        Ml(
          a,
          function () {
            o.apply(this, arguments);
          },
          e,
        );
      },
      count: function (a) {
        var o = 0;
        return (
          Ml(a, function () {
            o++;
          }),
          o
        );
      },
      toArray: function (a) {
        return (
          Ml(a, function (o) {
            return o;
          }) || []
        );
      },
      only: function (a) {
        if (!Xr(a))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return a;
      },
    };
    M.Activity = hI;
    M.Children = bI;
    M.Component = Et;
    M.Fragment = iI;
    M.Profiler = uI;
    M.PureComponent = Pr;
    M.StrictMode = cI;
    M.Suspense = dI;
    M.ViewTransition = gI;
    M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J;
    M.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (a) {
        return J.H.useMemoCache(a);
      },
    };
    M.addTransitionType = Xm;
    M.cache = function (a) {
      return function () {
        return a.apply(null, arguments);
      };
    };
    M.cacheSignal = function () {
      return null;
    };
    M.cloneElement = function (a, o, e) {
      if (a == null)
        throw Error(
          "The argument must be a React element, but you passed " + a + ".",
        );
      var t = Gm({}, a.props),
        n = a.key;
      if (o != null)
        for (l in (o.key !== void 0 && (n = "" + o.key), o))
          !Zm.call(o, l) ||
            l === "key" ||
            l === "__self" ||
            l === "__source" ||
            (l === "ref" && o.ref === void 0) ||
            (t[l] = o[l]);
      var l = arguments.length - 2;
      if (l === 1) t.children = e;
      else if (1 < l) {
        for (var s = Array(l), i = 0; i < l; i++) s[i] = arguments[i + 2];
        t.children = s;
      }
      return jr(a.type, n, t);
    };
    M.createContext = function (a) {
      return (
        (a = {
          $$typeof: fI,
          _currentValue: a,
          _currentValue2: a,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (a.Provider = a),
        (a.Consumer = { $$typeof: mI, _context: a }),
        a
      );
    };
    M.createElement = function (a, o, e) {
      var t,
        n = {},
        l = null;
      if (o != null)
        for (t in (o.key !== void 0 && (l = "" + o.key), o))
          Zm.call(o, t) &&
            t !== "key" &&
            t !== "__self" &&
            t !== "__source" &&
            (n[t] = o[t]);
      var s = arguments.length - 2;
      if (s === 1) n.children = e;
      else if (1 < s) {
        for (var i = Array(s), c = 0; c < s; c++) i[c] = arguments[c + 2];
        n.children = i;
      }
      if (a && a.defaultProps)
        for (t in ((s = a.defaultProps), s)) n[t] === void 0 && (n[t] = s[t]);
      return jr(a, l, n);
    };
    M.createRef = function () {
      return { current: null };
    };
    M.forwardRef = function (a) {
      return { $$typeof: pI, render: a };
    };
    M.isValidElement = Xr;
    M.lazy = function (a) {
      return { $$typeof: km, _payload: { _status: -1, _result: a }, _init: AI };
    };
    M.memo = function (a, o) {
      return { $$typeof: II, type: a, compare: o === void 0 ? null : o };
    };
    M.startTransition = jm;
    M.unstable_useCacheRefresh = function () {
      return J.H.useCacheRefresh();
    };
    M.use = function (a) {
      return J.H.use(a);
    };
    M.useActionState = function (a, o, e) {
      return J.H.useActionState(a, o, e);
    };
    M.useCallback = function (a, o) {
      return J.H.useCallback(a, o);
    };
    M.useContext = function (a) {
      return J.H.useContext(a);
    };
    M.useDebugValue = function () {};
    M.useDeferredValue = function (a, o) {
      return J.H.useDeferredValue(a, o);
    };
    M.useEffect = function (a, o) {
      return J.H.useEffect(a, o);
    };
    M.useEffectEvent = function (a) {
      return J.H.useEffectEvent(a);
    };
    M.useId = function () {
      return J.H.useId();
    };
    M.useImperativeHandle = function (a, o, e) {
      return J.H.useImperativeHandle(a, o, e);
    };
    M.useInsertionEffect = function (a, o) {
      return J.H.useInsertionEffect(a, o);
    };
    M.useLayoutEffect = function (a, o) {
      return J.H.useLayoutEffect(a, o);
    };
    M.useMemo = function (a, o) {
      return J.H.useMemo(a, o);
    };
    M.useOptimistic = function (a, o) {
      return J.H.useOptimistic(a, o);
    };
    M.useReducer = function (a, o, e) {
      return J.H.useReducer(a, o, e);
    };
    M.useRef = function (a) {
      return J.H.useRef(a);
    };
    M.useState = function (a) {
      return J.H.useState(a);
    };
    M.useSyncExternalStore = function (a, o, e) {
      return J.H.useSyncExternalStore(a, o, e);
    };
    M.useTransition = function () {
      return J.H.useTransition();
    };
    M.version = "19.3.1";
  });
  var D = qo((r4, Qm) => {
    "use strict";
    Qm.exports = Ym();
  });
  var lf = qo((ea) => {
    "use strict";
    function Jr(a, o) {
      var e = a.length;
      a.push(o);
      a: for (; 0 < e; ) {
        var t = (e - 1) >>> 1,
          n = a[t];
        if (0 < Dl(n, o)) ((a[t] = o), (a[e] = n), (e = t));
        else break a;
      }
    }
    function Fo(a) {
      return a.length === 0 ? null : a[0];
    }
    function Hl(a) {
      if (a.length === 0) return null;
      var o = a[0],
        e = a.pop();
      if (e !== o) {
        a[0] = e;
        a: for (var t = 0, n = a.length, l = n >>> 1; t < l; ) {
          var s = 2 * (t + 1) - 1,
            i = a[s],
            c = s + 1,
            m = a[c];
          if (0 > Dl(i, e))
            c < n && 0 > Dl(m, i)
              ? ((a[t] = m), (a[c] = e), (t = c))
              : ((a[t] = i), (a[s] = e), (t = s));
          else if (c < n && 0 > Dl(m, e)) ((a[t] = m), (a[c] = e), (t = c));
          else break a;
        }
      }
      return o;
    }
    function Dl(a, o) {
      var e = a.sortIndex - o.sortIndex;
      return e !== 0 ? e : a.id - o.id;
    }
    ea.unstable_now = void 0;
    typeof performance == "object" && typeof performance.now == "function"
      ? ((Km = performance),
        (ea.unstable_now = function () {
          return Km.now();
        }))
      : ((Yr = Date),
        (Jm = Yr.now()),
        (ea.unstable_now = function () {
          return Yr.now() - Jm;
        }));
    var Km,
      Yr,
      Jm,
      oe = [],
      ge = [],
      TI = 1,
      vo = null,
      Xa = 3,
      Wr = !1,
      bn = !1,
      Tn = !1,
      $r = !1,
      af = typeof setTimeout == "function" ? setTimeout : null,
      of = typeof clearTimeout == "function" ? clearTimeout : null,
      Wm = typeof setImmediate < "u" ? setImmediate : null;
    function Bl(a) {
      for (var o = Fo(ge); o !== null; ) {
        if (o.callback === null) Hl(ge);
        else if (o.startTime <= a)
          (Hl(ge), (o.sortIndex = o.expirationTime), Jr(oe, o));
        else break;
        o = Fo(ge);
      }
    }
    function ai(a) {
      if (((Tn = !1), Bl(a), !bn))
        if (Fo(oe) !== null) ((bn = !0), wt || ((wt = !0), Lt()));
        else {
          var o = Fo(ge);
          o !== null && oi(ai, o.startTime - a);
        }
    }
    var wt = !1,
      En = -1,
      ef = 5,
      tf = -1;
    function nf() {
      return $r ? !0 : !(ea.unstable_now() - tf < ef);
    }
    function Qr() {
      if ((($r = !1), wt)) {
        var a = ea.unstable_now();
        tf = a;
        var o = !0;
        try {
          a: {
            ((bn = !1), Tn && ((Tn = !1), of(En), (En = -1)), (Wr = !0));
            var e = Xa;
            try {
              o: {
                for (
                  Bl(a), vo = Fo(oe);
                  vo !== null && !(vo.expirationTime > a && nf());
                ) {
                  var t = vo.callback;
                  if (typeof t == "function") {
                    ((vo.callback = null), (Xa = vo.priorityLevel));
                    var n = t(vo.expirationTime <= a);
                    if (((a = ea.unstable_now()), typeof n == "function")) {
                      ((vo.callback = n), Bl(a), (o = !0));
                      break o;
                    }
                    (vo === Fo(oe) && Hl(oe), Bl(a));
                  } else Hl(oe);
                  vo = Fo(oe);
                }
                if (vo !== null) o = !0;
                else {
                  var l = Fo(ge);
                  (l !== null && oi(ai, l.startTime - a), (o = !1));
                }
              }
              break a;
            } finally {
              ((vo = null), (Xa = e), (Wr = !1));
            }
            o = void 0;
          }
        } finally {
          o ? Lt() : (wt = !1);
        }
      }
    }
    var Lt;
    typeof Wm == "function"
      ? (Lt = function () {
          Wm(Qr);
        })
      : typeof MessageChannel < "u"
        ? ((Kr = new MessageChannel()),
          ($m = Kr.port2),
          (Kr.port1.onmessage = Qr),
          (Lt = function () {
            $m.postMessage(null);
          }))
        : (Lt = function () {
            af(Qr, 0);
          });
    var Kr, $m;
    function oi(a, o) {
      En = af(function () {
        a(ea.unstable_now());
      }, o);
    }
    ea.unstable_IdlePriority = 5;
    ea.unstable_ImmediatePriority = 1;
    ea.unstable_LowPriority = 4;
    ea.unstable_NormalPriority = 3;
    ea.unstable_Profiling = null;
    ea.unstable_UserBlockingPriority = 2;
    ea.unstable_cancelCallback = function (a) {
      a.callback = null;
    };
    ea.unstable_forceFrameRate = function (a) {
      0 > a || 125 < a
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (ef = 0 < a ? Math.floor(1e3 / a) : 5);
    };
    ea.unstable_getCurrentPriorityLevel = function () {
      return Xa;
    };
    ea.unstable_next = function (a) {
      switch (Xa) {
        case 1:
        case 2:
        case 3:
          var o = 3;
          break;
        default:
          o = Xa;
      }
      var e = Xa;
      Xa = o;
      try {
        return a();
      } finally {
        Xa = e;
      }
    };
    ea.unstable_requestPaint = function () {
      $r = !0;
    };
    ea.unstable_runWithPriority = function (a, o) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var e = Xa;
      Xa = a;
      try {
        return o();
      } finally {
        Xa = e;
      }
    };
    ea.unstable_scheduleCallback = function (a, o, e) {
      var t = ea.unstable_now();
      switch (
        (typeof e == "object" && e !== null
          ? ((e = e.delay), (e = typeof e == "number" && 0 < e ? t + e : t))
          : (e = t),
        a)
      ) {
        case 1:
          var n = -1;
          break;
        case 2:
          n = 250;
          break;
        case 5:
          n = 1073741823;
          break;
        case 4:
          n = 1e4;
          break;
        default:
          n = 5e3;
      }
      return (
        (n = e + n),
        (a = {
          id: TI++,
          callback: o,
          priorityLevel: a,
          startTime: e,
          expirationTime: n,
          sortIndex: -1,
        }),
        e > t
          ? ((a.sortIndex = e),
            Jr(ge, a),
            Fo(oe) === null &&
              a === Fo(ge) &&
              (Tn ? (of(En), (En = -1)) : (Tn = !0), oi(ai, e - t)))
          : ((a.sortIndex = n),
            Jr(oe, a),
            bn || Wr || ((bn = !0), wt || ((wt = !0), Lt()))),
        a
      );
    };
    ea.unstable_shouldYield = nf;
    ea.unstable_wrapCallback = function (a) {
      var o = Xa;
      return function () {
        var e = Xa;
        Xa = o;
        try {
          return a.apply(this, arguments);
        } finally {
          Xa = e;
        }
      };
    };
  });
  var rf = qo((c4, sf) => {
    "use strict";
    sf.exports = lf();
  });
  var mf = qo((Ya) => {
    "use strict";
    var EI = D();
    function uf(a) {
      var o = "https://react.dev/errors/" + a;
      if (1 < arguments.length) {
        o += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var e = 2; e < arguments.length; e++)
          o += "&args[]=" + encodeURIComponent(arguments[e]);
      }
      return (
        "Minified React error #" +
        a +
        "; visit " +
        o +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function Se() {}
    var Ka = {
        d: {
          f: Se,
          r: function () {
            throw Error(uf(522));
          },
          D: Se,
          C: Se,
          L: Se,
          m: Se,
          X: Se,
          S: Se,
          M: Se,
        },
        p: 0,
        findDOMNode: null,
      },
      LI = Symbol.for("react.portal"),
      wI = Symbol.for("react.recoverable"),
      cf = Symbol.for("react.optimistic_key");
    function NI(a, o, e) {
      var t =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: LI,
        key: t == null ? null : t === cf ? cf : "" + t,
        children: a,
        containerInfo: o,
        implementation: e,
      };
    }
    var Ln = EI.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function Ol(a, o) {
      if (a === "font") return "";
      if (typeof o == "string") return o === "use-credentials" ? o : "";
    }
    Ya.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ka;
    Ya.browser = function (a) {
      return { $$typeof: wI, _reason: a };
    };
    Ya.createPortal = function (a, o) {
      var e =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!o || (o.nodeType !== 1 && o.nodeType !== 9 && o.nodeType !== 11))
        throw Error(uf(299));
      return NI(a, o, null, e);
    };
    Ya.flushSync = function (a) {
      var o = Ln.T,
        e = Ka.p;
      try {
        if (((Ln.T = null), (Ka.p = 2), a)) return a();
      } finally {
        ((Ln.T = o), (Ka.p = e), Ka.d.f());
      }
    };
    Ya.preconnect = function (a, o) {
      typeof a == "string" &&
        (o
          ? ((o = o.crossOrigin),
            (o =
              typeof o == "string"
                ? o === "use-credentials"
                  ? o
                  : ""
                : void 0))
          : (o = null),
        Ka.d.C(a, o));
    };
    Ya.prefetchDNS = function (a) {
      typeof a == "string" && Ka.d.D(a);
    };
    Ya.preinit = function (a, o) {
      if (typeof a == "string" && o && typeof o.as == "string") {
        var e = o.as,
          t = Ol(e, o.crossOrigin),
          n = typeof o.integrity == "string" ? o.integrity : void 0,
          l = typeof o.fetchPriority == "string" ? o.fetchPriority : void 0;
        e === "style"
          ? Ka.d.S(a, typeof o.precedence == "string" ? o.precedence : void 0, {
              crossOrigin: t,
              integrity: n,
              fetchPriority: l,
            })
          : e === "script" &&
            Ka.d.X(a, {
              crossOrigin: t,
              integrity: n,
              fetchPriority: l,
              nonce: typeof o.nonce == "string" ? o.nonce : void 0,
            });
      }
    };
    Ya.preinitModule = function (a, o) {
      if (typeof a == "string")
        if (typeof o == "object" && o !== null) {
          if (o.as == null || o.as === "script") {
            var e = Ol(o.as, o.crossOrigin);
            Ka.d.M(a, {
              crossOrigin: e,
              integrity: typeof o.integrity == "string" ? o.integrity : void 0,
              nonce: typeof o.nonce == "string" ? o.nonce : void 0,
              fetchPriority:
                typeof o.fetchPriority == "string" ? o.fetchPriority : void 0,
            });
          }
        } else o == null && Ka.d.M(a);
    };
    Ya.preload = function (a, o) {
      if (
        typeof a == "string" &&
        typeof o == "object" &&
        o !== null &&
        typeof o.as == "string"
      ) {
        var e = o.as,
          t = Ol(e, o.crossOrigin);
        Ka.d.L(a, e, {
          crossOrigin: t,
          integrity: typeof o.integrity == "string" ? o.integrity : void 0,
          nonce: typeof o.nonce == "string" ? o.nonce : void 0,
          type: typeof o.type == "string" ? o.type : void 0,
          fetchPriority:
            typeof o.fetchPriority == "string" ? o.fetchPriority : void 0,
          referrerPolicy:
            typeof o.referrerPolicy == "string" ? o.referrerPolicy : void 0,
          imageSrcSet:
            typeof o.imageSrcSet == "string" ? o.imageSrcSet : void 0,
          imageSizes: typeof o.imageSizes == "string" ? o.imageSizes : void 0,
          media: typeof o.media == "string" ? o.media : void 0,
        });
      }
    };
    Ya.preloadModule = function (a, o) {
      if (typeof a == "string")
        if (o) {
          var e = Ol(o.as, o.crossOrigin);
          Ka.d.m(a, {
            as: typeof o.as == "string" && o.as !== "script" ? o.as : void 0,
            crossOrigin: e,
            integrity: typeof o.integrity == "string" ? o.integrity : void 0,
            nonce: typeof o.nonce == "string" ? o.nonce : void 0,
            fetchPriority:
              typeof o.fetchPriority == "string" ? o.fetchPriority : void 0,
          });
        } else Ka.d.m(a);
    };
    Ya.requestFormReset = function (a) {
      Ka.d.r(a);
    };
    Ya.unstable_batchedUpdates = function (a, o) {
      return a(o);
    };
    Ya.useFormState = function (a, o, e) {
      return Ln.H.useFormState(a, o, e);
    };
    Ya.useFormStatus = function () {
      return Ln.H.useHostTransitionStatus();
    };
    Ya.version = "19.3.1";
  });
  var df = qo((m4, pf) => {
    "use strict";
    function ff() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ff);
        } catch (a) {
          console.error(a);
        }
    }
    (ff(), (pf.exports = mf()));
  });
  var a2 = qo((dr) => {
    "use strict";
    var Ha = rf(),
      $0 = D(),
      MI = df();
    function C(a) {
      var o = "https://react.dev/errors/" + a;
      if (1 < arguments.length) {
        o += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var e = 2; e < arguments.length; e++)
          o += "&args[]=" + encodeURIComponent(arguments[e]);
      }
      return (
        "Minified React error #" +
        a +
        "; visit " +
        o +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function a1(a) {
      return !(
        !a ||
        (a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11)
      );
    }
    function pl(a) {
      for (var o = a, e = o; e && !e.alternate; )
        ((o = e), (o.flags & 4098) !== 0 && (a = o.return), (e = o.return));
      for (; o.return; ) o = o.return;
      return o.tag === 3 ? a : null;
    }
    function o1(a) {
      if (a.tag === 13) {
        var o = a.memoizedState;
        if (
          (o === null &&
            ((a = a.alternate), a !== null && (o = a.memoizedState)),
          o !== null)
        )
          return o.dehydrated;
      }
      return null;
    }
    function e1(a) {
      if (a.tag === 31) {
        var o = a.memoizedState;
        if (
          (o === null &&
            ((a = a.alternate), a !== null && (o = a.memoizedState)),
          o !== null)
        )
          return o.dehydrated;
      }
      return null;
    }
    function If(a) {
      if (pl(a) !== a) throw Error(C(188));
    }
    function DI(a) {
      var o = a.alternate;
      if (!o) {
        if (((o = pl(a)), o === null)) throw Error(C(188));
        return o !== a ? null : a;
      }
      for (var e = a, t = o; ; ) {
        var n = e.return;
        if (n === null) break;
        var l = n.alternate;
        if (l === null) {
          if (((t = n.return), t !== null)) {
            e = t;
            continue;
          }
          break;
        }
        if (n.child === l.child) {
          for (l = n.child; l; ) {
            if (l === e) return (If(n), a);
            if (l === t) return (If(n), o);
            l = l.sibling;
          }
          throw Error(C(188));
        }
        if (e.return !== t.return) ((e = n), (t = l));
        else {
          for (var s = !1, i = n.child; i; ) {
            if (i === e) {
              ((s = !0), (e = n), (t = l));
              break;
            }
            if (i === t) {
              ((s = !0), (t = n), (e = l));
              break;
            }
            i = i.sibling;
          }
          if (!s) {
            for (i = l.child; i; ) {
              if (i === e) {
                ((s = !0), (e = l), (t = n));
                break;
              }
              if (i === t) {
                ((s = !0), (t = l), (e = n));
                break;
              }
              i = i.sibling;
            }
            if (!s) throw Error(C(189));
          }
        }
        if (e.alternate !== t) throw Error(C(190));
      }
      if (e.tag !== 3) throw Error(C(188));
      return e.stateNode.current === e ? a : o;
    }
    function t1(a) {
      var o = a.tag;
      if (o === 5 || o === 26 || o === 27 || o === 6) return a;
      for (a = a.child; a !== null; ) {
        if (((o = t1(a)), o !== null)) return o;
        a = a.sibling;
      }
      return null;
    }
    function so(a, o, e, t, n, l) {
      for (; a !== null; ) {
        if (
          ((a.tag === 5 || a.tag === 27 || a.tag === 6) && e(a, t, n, l)) ||
          ((a.tag !== 22 || a.memoizedState === null) &&
            (o || (a.tag !== 5 && a.tag !== 27)) &&
            so(a.child, o, e, t, n, l))
        )
          return !0;
        a = a.sibling;
      }
      return !1;
    }
    function It(a) {
      for (a = a.return; a !== null; ) {
        if (a.tag === 3 || a.tag === 5 || a.tag === 27) return a;
        a = a.return;
      }
      return null;
    }
    function hf(a) {
      var o = !1;
      for (
        a = a.return;
        a !== null &&
        (a.tag === 4 && (o = !0),
        !(a.tag === 3 || a.tag === 5 || a.tag === 27));
      )
        a = a.return;
      return o;
    }
    function n1(a) {
      var o = [null, null],
        e = It(a);
      return (e === null || l1(o, a, e.child, { foundSelf: !1 }), o);
    }
    function l1(a, o, e, t) {
      for (; e !== null; ) {
        if (e === o) t.foundSelf = !0;
        else if (e.tag === 5 || e.tag === 27 || e.tag === 6) {
          if (t.foundSelf) return ((a[1] = e), !0);
          a[0] = e;
        } else if (
          (e.tag !== 22 || e.memoizedState === null) &&
          l1(a, o, e.child, t)
        )
          return !0;
        e = e.sibling;
      }
      return !1;
    }
    function Ba(a) {
      switch (a.tag) {
        case 5:
        case 27:
        case 6:
          return a.stateNode;
        case 3:
          return a.stateNode.containerInfo;
        default:
          throw Error(C(559));
      }
    }
    var Rt = null,
      Oi = null;
    function BI(a, o, e) {
      return a === e ? !0 : a === o ? ((Rt = a), !0) : !1;
    }
    function HI(a, o, e) {
      return a === e
        ? ((Oi = a), !1)
        : a === o
          ? (Oi !== null && (Rt = a), !0)
          : !1;
    }
    function gf(a) {
      if (a === null) return null;
      do a = a === null ? null : a.return;
      while (a && a.tag !== 5 && a.tag !== 27 && a.tag !== 3);
      return a || null;
    }
    function Ri(a, o, e) {
      for (var t = 0, n = a; n; n = e(n)) t++;
      n = 0;
      for (var l = o; l; l = e(l)) n++;
      for (; 0 < t - n; ) ((a = e(a)), t--);
      for (; 0 < n - t; ) ((o = e(o)), n--);
      for (; t--; ) {
        if (a === o || (o !== null && a === o.alternate)) return a;
        ((a = e(a)), (o = e(o)));
      }
      return null;
    }
    var K = Object.assign,
      OI = Symbol.for("react.element"),
      Rl = Symbol.for("react.transitional.element"),
      On = Symbol.for("react.portal"),
      zt = Symbol.for("react.fragment"),
      s1 = Symbol.for("react.strict_mode"),
      zi = Symbol.for("react.profiler"),
      r1 = Symbol.for("react.consumer"),
      Zo = Symbol.for("react.context"),
      Pc = Symbol.for("react.forward_ref"),
      Ui = Symbol.for("react.suspense"),
      xi = Symbol.for("react.suspense_list"),
      Zc = Symbol.for("react.memo"),
      Ae = Symbol.for("react.lazy"),
      qi = Symbol.for("react.activity"),
      RI = Symbol.for("react.legacy_hidden"),
      zI = Symbol.for("react.memo_cache_sentinel"),
      Fi = Symbol.for("react.view_transition"),
      UI = Symbol.for("react.recoverable"),
      Sf = Symbol.iterator;
    function wn(a) {
      return a === null || typeof a != "object"
        ? null
        : ((a = (Sf && a[Sf]) || a["@@iterator"]),
          typeof a == "function" ? a : null);
    }
    var xI = Symbol.for("react.client.reference");
    function ki(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === xI ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case zt:
          return "Fragment";
        case zi:
          return "Profiler";
        case s1:
          return "StrictMode";
        case Ui:
          return "Suspense";
        case xi:
          return "SuspenseList";
        case qi:
          return "Activity";
        case Fi:
          return "ViewTransition";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case On:
            return "Portal";
          case Zo:
            return a.displayName || "Context";
          case r1:
            return (a._context.displayName || "Context") + ".Consumer";
          case Pc:
            var o = a.render;
            return (
              (a = a.displayName),
              a ||
                ((a = o.displayName || o.name || ""),
                (a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef")),
              a
            );
          case Zc:
            return (
              (o = a.displayName || null),
              o !== null ? o : ki(a.type) || "Memo"
            );
          case Ae:
            ((o = a._payload), (a = a._init));
            try {
              return ki(a(o));
            } catch {}
        }
      return null;
    }
    var Rn = Array.isArray,
      w = $0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      G = MI.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      et = { pending: !1, data: null, method: null, action: null },
      _i = [],
      Ut = -1;
    function Wo(a) {
      return { current: a };
    }
    function _a(a) {
      0 > Ut || ((a.current = _i[Ut]), (_i[Ut] = null), Ut--);
    }
    function aa(a, o) {
      (Ut++, (_i[Ut] = a.current), (a.current = o));
    }
    var Qo = Wo(null),
      Jn = Wo(null),
      Be = Wo(null),
      vs = Wo(null);
    function ys(a, o) {
      switch ((aa(Be, o), aa(Jn, a), aa(Qo, null), o.nodeType)) {
        case 9:
        case 11:
          a = (a = o.documentElement) && (a = a.namespaceURI) ? H0(a) : 0;
          break;
        default:
          if (((a = o.tagName), (o = o.namespaceURI)))
            ((o = H0(o)), (a = Md(o, a)));
          else
            switch (a) {
              case "svg":
                a = 1;
                break;
              case "math":
                a = 2;
                break;
              default:
                a = 0;
            }
      }
      (_a(Qo), aa(Qo, a));
    }
    function en() {
      (_a(Qo), _a(Jn), _a(Be));
    }
    function Gi(a) {
      var o = a.memoizedState;
      (o !== null && ((pn._currentValue = o.memoizedState), aa(vs, a)),
        (o = Qo.current));
      var e = Md(o, a.type);
      o !== e && (aa(Jn, a), aa(Qo, e));
    }
    function As(a) {
      (Jn.current === a && (_a(Qo), _a(Jn)),
        vs.current === a && (_a(vs), (pn._currentValue = et)));
    }
    var ei, Cf;
    function ve(a) {
      if (ei === void 0)
        try {
          throw Error();
        } catch (e) {
          var o = e.stack.trim().match(/\n( *(at )?)/);
          ((ei = (o && o[1]) || ""),
            (Cf =
              -1 <
              e.stack.indexOf(`
    at`)
                ? " (<anonymous>)"
                : -1 < e.stack.indexOf("@")
                  ? "@unknown:0:0"
                  : ""));
        }
      return (
        `
` +
        ei +
        a +
        Cf
      );
    }
    var ti = !1;
    function ni(a, o) {
      if (!a || ti) return "";
      ti = !0;
      var e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var t = {
          DetermineComponentFrameRoot: function () {
            try {
              if (o) {
                var f = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(f.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(f, []);
                  } catch (v) {
                    var u = v;
                  }
                  Reflect.construct(a, [], f);
                } else {
                  try {
                    f.call();
                  } catch (v) {
                    u = v;
                  }
                  f = !1;
                  try {
                    var g = Object.getOwnPropertyDescriptor(
                      a.prototype,
                      "props",
                    );
                    (Object.defineProperty(a.prototype, "props", {
                      configurable: !0,
                      set: function () {
                        throw Error();
                      },
                    }),
                      (f = !0),
                      new a());
                  } finally {
                    f &&
                      (g !== void 0
                        ? Object.defineProperty(a.prototype, "props", g)
                        : delete a.prototype.props);
                  }
                }
              } else {
                try {
                  throw Error();
                } catch (v) {
                  u = v;
                }
                (f = a()) &&
                  typeof f.catch == "function" &&
                  f.catch(function () {});
              }
            } catch (v) {
              if (v && u && typeof v.stack == "string")
                return [v.stack, u.stack];
            }
            return [null, null];
          },
        };
        t.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var n = Object.getOwnPropertyDescriptor(
          t.DetermineComponentFrameRoot,
          "name",
        );
        n &&
          n.configurable &&
          Object.defineProperty(t.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        var l = t.DetermineComponentFrameRoot(),
          s = l[0],
          i = l[1];
        if (s && i) {
          var c = s.split(`
`),
            m = i.split(`
`);
          for (
            n = t = 0;
            t < c.length && !c[t].includes("DetermineComponentFrameRoot");
          )
            t++;
          for (
            ;
            n < m.length && !m[n].includes("DetermineComponentFrameRoot");
          )
            n++;
          if (t === c.length || n === m.length)
            for (
              t = c.length - 1, n = m.length - 1;
              1 <= t && 0 <= n && c[t] !== m[n];
            )
              n--;
          for (; 1 <= t && 0 <= n; t--, n--)
            if (c[t] !== m[n]) {
              if (t !== 1 || n !== 1)
                do
                  if ((t--, n--, 0 > n || c[t] !== m[n])) {
                    var I =
                      `
` + c[t].replace(" at new ", " at ");
                    return (
                      a.displayName &&
                        I.includes("<anonymous>") &&
                        (I = I.replace("<anonymous>", a.displayName)),
                      I
                    );
                  }
                while (1 <= t && 0 <= n);
              break;
            }
        }
      } finally {
        ((ti = !1), (Error.prepareStackTrace = e));
      }
      return (e = a ? a.displayName || a.name : "") ? ve(e) : "";
    }
    function qI(a, o) {
      switch (a.tag) {
        case 26:
        case 27:
        case 5:
          return ve(a.type);
        case 16:
          return ve("Lazy");
        case 13:
          return a.child !== o && o !== null
            ? ve("Suspense Fallback")
            : ve("Suspense");
        case 19:
          return ve("SuspenseList");
        case 0:
        case 15:
          return ni(a.type, !1);
        case 11:
          return ni(a.type.render, !1);
        case 1:
          return ni(a.type, !0);
        case 31:
          return ve("Activity");
        case 30:
          return ve("ViewTransition");
        default:
          return "";
      }
    }
    function vf(a) {
      try {
        var o = "",
          e = null;
        do ((o += qI(a, e)), (e = a), (a = a.return));
        while (a);
        return o;
      } catch (t) {
        return (
          `
Error generating stack: ` +
          t.message +
          `
` +
          t.stack
        );
      }
    }
    var Vi = Object.prototype.hasOwnProperty,
      jc = Ha.unstable_scheduleCallback,
      li = Ha.unstable_cancelCallback,
      FI = Ha.unstable_shouldYield,
      kI = Ha.unstable_requestPaint,
      po = Ha.unstable_now,
      _I = Ha.unstable_getCurrentPriorityLevel,
      i1 = Ha.unstable_ImmediatePriority,
      c1 = Ha.unstable_UserBlockingPriority,
      bs = Ha.unstable_NormalPriority,
      GI = Ha.unstable_LowPriority,
      u1 = Ha.unstable_IdlePriority,
      VI = Ha.log,
      PI = Ha.unstable_setDisableYieldValue,
      dl = null,
      Io = null;
    function Ee(a) {
      if (
        (typeof VI == "function" && PI(a),
        Io && typeof Io.setStrictMode == "function")
      )
        try {
          Io.setStrictMode(dl, a);
        } catch {}
    }
    var ho = Math.clz32 ? Math.clz32 : XI,
      ZI = Math.log,
      jI = Math.LN2;
    function XI(a) {
      return ((a >>>= 0), a === 0 ? 32 : (31 - ((ZI(a) / jI) | 0)) | 0);
    }
    var zl = 256,
      Ul = 262144,
      xl = 4194304;
    function Je(a) {
      var o = a & 42;
      if (o !== 0) return o;
      switch (a & -a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return a & -a;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return a & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return a;
      }
    }
    function Qs(a, o, e) {
      var t = a.pendingLanes;
      if (t === 0) return 0;
      var n = 0,
        l = a.suspendedLanes,
        s = a.pingedLanes;
      a = a.warmLanes;
      var i = t & 134217727;
      return (
        i !== 0
          ? ((t = i & ~l),
            t !== 0
              ? (n = Je(t))
              : ((s &= i),
                s !== 0
                  ? (n = Je(s))
                  : e || ((e = i & ~a), e !== 0 && (n = Je(e)))))
          : ((i = t & ~l),
            i !== 0
              ? (n = Je(i))
              : s !== 0
                ? (n = Je(s))
                : e || ((e = t & ~a), e !== 0 && (n = Je(e)))),
        n === 0
          ? 0
          : o !== 0 &&
              o !== n &&
              (o & l) === 0 &&
              ((l = n & -n),
              (e = o & -o),
              l >= e || (l === 32 && (e & 4194048) !== 0))
            ? o
            : n
      );
    }
    function Il(a, o) {
      return (a.pendingLanes & ~(a.suspendedLanes & ~a.pingedLanes) & o) === 0;
    }
    function m1(a, o) {
      (o & 8) !== 0 && (o |= o & 32);
      var e = a.entangledLanes;
      if (e !== 0)
        for (a = a.entanglements, e &= o; 0 < e; ) {
          var t = 31 - ho(e),
            n = 1 << t;
          ((o |= a[t]), (e &= ~n));
        }
      return o;
    }
    function YI(a, o) {
      switch (a) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return o + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return o + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function f1() {
      var a = xl;
      return ((xl <<= 1), (xl & 62914560) === 0 && (xl = 4194304), a);
    }
    function si(a) {
      for (var o = [], e = 0; 31 > e; e++) o.push(a);
      return o;
    }
    function hl(a, o) {
      ((a.pendingLanes |= o),
        o !== 268435456 &&
          ((a.suspendedLanes = 0), (a.pingedLanes = 0), (a.warmLanes = 0)));
    }
    function QI(a, o, e, t, n, l) {
      var s = a.pendingLanes;
      ((a.pendingLanes = e),
        (a.suspendedLanes = 0),
        (a.pingedLanes = 0),
        (a.warmLanes = 0),
        (a.expiredLanes &= e),
        (a.entangledLanes &= e),
        (a.errorRecoveryDisabledLanes &= e),
        (a.shellSuspendCounter = 0));
      var i = a.entanglements,
        c = a.expirationTimes,
        m = a.hiddenUpdates;
      for (e = s & ~e; 0 < e; ) {
        var I = 31 - ho(e),
          f = 1 << I;
        ((i[I] = 0), (c[I] = -1));
        var u = m[I];
        if (u !== null)
          for (m[I] = null, I = 0; I < u.length; I++) {
            var g = u[I];
            g !== null && (g.lane &= -536870913);
          }
        e &= ~f;
      }
      (t !== 0 && p1(a, t, 0),
        l !== 0 &&
          n === 0 &&
          a.tag !== 0 &&
          (a.suspendedLanes |= l & ~(s & ~o)));
    }
    function p1(a, o, e) {
      ((a.pendingLanes |= o), (a.suspendedLanes &= ~o));
      var t = 31 - ho(o);
      ((a.entangledLanes |= o),
        (a.entanglements[t] = a.entanglements[t] | 1073741824 | (e & 261930)));
    }
    function d1(a, o) {
      var e = (a.entangledLanes |= o);
      for (a = a.entanglements; e; ) {
        var t = 31 - ho(e),
          n = 1 << t;
        ((n & o) | (a[t] & o) && (a[t] |= o), (e &= ~n));
      }
    }
    function I1(a, o) {
      var e = o & -o;
      return (
        (e = (e & 42) !== 0 ? 1 : Xc(e)),
        (e & (a.suspendedLanes | o)) !== 0 ? 0 : e
      );
    }
    function Xc(a) {
      switch (a) {
        case 2:
          a = 1;
          break;
        case 8:
          a = 4;
          break;
        case 32:
          a = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          a = 128;
          break;
        case 268435456:
          a = 134217728;
          break;
        default:
          a = 0;
      }
      return a;
    }
    function Yc(a) {
      return (
        (a &= -a),
        2 < a ? (8 < a ? ((a & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
      );
    }
    function h1() {
      var a = G.p;
      return a !== 0 ? a : ((a = window.event), a === void 0 ? 32 : Jd(a.type));
    }
    function yf(a, o) {
      var e = G.p;
      try {
        return ((G.p = a), o());
      } finally {
        G.p = e;
      }
    }
    var de = Math.random().toString(36).slice(2),
      Fa = "__reactFiber$" + de,
      ro = "__reactProps$" + de,
      hn = "__reactContainer$" + de,
      Af = "__reactEvents$" + de,
      KI = "__reactListeners$" + de,
      JI = "__reactHandles$" + de,
      bf = "__reactResources$" + de,
      gl = "__reactMarker$" + de,
      Ts = "__reactLoad$" + de;
    function Ks(a) {
      (delete a[Fa], delete a[ro], delete a[KI], delete a[JI]);
    }
    function at(a) {
      var o;
      if ((o = a[Fa])) return o;
      for (var e = a.parentNode; e; ) {
        if ((o = e[hn] || e[Fa])) {
          if (
            ((e = o.alternate),
            o.child !== null || (e !== null && e.child !== null))
          )
            for (a = k0(a); a !== null; ) {
              if ((e = a[Fa])) return e;
              a = k0(a);
            }
          return o;
        }
        ((a = e), (e = a.parentNode));
      }
      return null;
    }
    function gn(a) {
      if ((a = a[Fa] || a[hn])) {
        var o = a.tag;
        if (
          o === 5 ||
          o === 6 ||
          o === 13 ||
          o === 31 ||
          o === 26 ||
          o === 27 ||
          o === 3
        )
          return a;
      }
      return null;
    }
    function zn(a) {
      var o = a.tag;
      if (o === 5 || o === 26 || o === 27 || o === 6) return a.stateNode;
      throw Error(C(33));
    }
    function jt(a) {
      var o = a[bf];
      return (
        o ||
          (o = a[bf] =
            { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        o
      );
    }
    function za(a) {
      a[gl] = !0;
    }
    function g1(a) {
      a[Ts] = void 0;
    }
    var S1 = new Set(),
      C1 = {};
    function ht(a, o) {
      (tn(a, o), tn(a + "Capture", o));
    }
    function tn(a, o) {
      for (C1[a] = o, a = 0; a < o.length; a++) S1.add(o[a]);
    }
    var WI = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
      ),
      Tf = {},
      Ef = {};
    function $I(a) {
      return Vi.call(Ef, a)
        ? !0
        : Vi.call(Tf, a)
          ? !1
          : WI.test(a)
            ? (Ef[a] = !0)
            : ((Tf[a] = !0), !1);
    }
    var k = !1;
    function Lf() {
      var a = k;
      return ((k = !1), a);
    }
    function os(a, o, e) {
      if ($I(o))
        if (e === null) a.removeAttribute(o);
        else {
          switch (typeof e) {
            case "undefined":
            case "function":
            case "symbol":
              a.removeAttribute(o);
              return;
            case "boolean":
              var t = o.toLowerCase().slice(0, 5);
              if (t !== "data-" && t !== "aria-") {
                a.removeAttribute(o);
                return;
              }
          }
          a.setAttribute(o, e);
        }
    }
    function ql(a, o, e) {
      if (e === null) a.removeAttribute(o);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            a.removeAttribute(o);
            return;
        }
        a.setAttribute(o, e);
      }
    }
    function ee(a, o, e, t) {
      if (t === null) a.removeAttribute(e);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            a.removeAttribute(e);
            return;
        }
        a.setAttributeNS(o, e, t);
      }
    }
    function co(a) {
      switch (typeof a) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function v1(a) {
      var o = a.type;
      return (
        (a = a.nodeName) &&
        a.toLowerCase() === "input" &&
        (o === "checkbox" || o === "radio")
      );
    }
    function ah(a, o, e) {
      var t = Object.getOwnPropertyDescriptor(a.constructor.prototype, o);
      if (
        !a.hasOwnProperty(o) &&
        typeof t < "u" &&
        typeof t.get == "function" &&
        typeof t.set == "function"
      ) {
        var n = t.get,
          l = t.set;
        return (
          Object.defineProperty(a, o, {
            configurable: !0,
            get: function () {
              return n.call(this);
            },
            set: function (s) {
              ((e = "" + s), l.call(this, s));
            },
          }),
          Object.defineProperty(a, o, { enumerable: t.enumerable }),
          {
            getValue: function () {
              return e;
            },
            setValue: function (s) {
              e = "" + s;
            },
            stopTracking: function () {
              ((a._valueTracker = null), delete a[o]);
            },
          }
        );
      }
    }
    function Pi(a) {
      if (!a._valueTracker) {
        var o = v1(a) ? "checked" : "value";
        a._valueTracker = ah(a, o, "" + a[o]);
      }
    }
    function y1(a) {
      if (!a) return !1;
      var o = a._valueTracker;
      if (!o) return !0;
      var e = o.getValue(),
        t = "";
      return (
        a && (t = v1(a) ? (a.checked ? "true" : "false") : a.value),
        (a = t),
        a !== e ? (o.setValue(a), !0) : !1
      );
    }
    var oh = /[\n"\\]/g;
    function Eo(a) {
      return a.replace(oh, function (o) {
        return "\\" + o.charCodeAt(0).toString(16) + " ";
      });
    }
    function Zi(a, o, e, t, n, l, s, i) {
      ((a.name = ""),
        s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean"
          ? (a.type = s)
          : a.removeAttribute("type"),
        o != null
          ? s === "number"
            ? ((o === 0 && a.value === "") || a.value != o) &&
              (a.value = "" + co(o))
            : a.value !== "" + co(o) && (a.value = "" + co(o))
          : (s !== "submit" && s !== "reset") || a.removeAttribute("value"),
        o != null
          ? s === "number" && a.value == o
            ? ri(a, co(a.value))
            : ri(a, co(o))
          : e != null
            ? ri(a, co(e))
            : t != null && a.removeAttribute("value"),
        n == null && l != null && (a.defaultChecked = !!l),
        n != null &&
          (a.checked = n && typeof n != "function" && typeof n != "symbol"),
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean"
          ? (a.name = "" + co(i))
          : a.removeAttribute("name"));
    }
    function A1(a, o, e, t, n, l, s, i) {
      if (
        (l != null &&
          typeof l != "function" &&
          typeof l != "symbol" &&
          typeof l != "boolean" &&
          (a.type = l),
        o != null || e != null)
      ) {
        if (!((l !== "submit" && l !== "reset") || o != null)) {
          Pi(a);
          return;
        }
        ((e = e != null ? "" + co(e) : ""),
          (o = o != null ? "" + co(o) : e),
          i || o === a.value || (a.value = o),
          (a.defaultValue = o));
      }
      ((t = t ?? n),
        (t = typeof t != "function" && typeof t != "symbol" && !!t),
        (a.checked = i ? a.checked : !!t),
        (a.defaultChecked = !!t),
        s != null &&
          typeof s != "function" &&
          typeof s != "symbol" &&
          typeof s != "boolean" &&
          (a.name = s),
        Pi(a));
    }
    function ri(a, o) {
      a.defaultValue !== "" + o && (a.defaultValue = "" + o);
    }
    function Xt(a, o, e, t) {
      if (((a = a.options), o)) {
        o = {};
        for (var n = 0; n < e.length; n++) o["$" + e[n]] = !0;
        for (e = 0; e < a.length; e++)
          ((n = o.hasOwnProperty("$" + a[e].value)),
            a[e].selected !== n && (a[e].selected = n),
            n && t && (a[e].defaultSelected = !0));
      } else {
        for (e = "" + co(e), o = null, n = 0; n < a.length; n++) {
          if (a[n].value === e) {
            ((a[n].selected = !0), t && (a[n].defaultSelected = !0));
            return;
          }
          o !== null || a[n].disabled || (o = a[n]);
        }
        o !== null && (o.selected = !0);
      }
    }
    function b1(a, o, e) {
      if (
        o != null &&
        ((o = "" + co(o)), o !== a.value && (a.value = o), e == null)
      ) {
        a.defaultValue !== o && (a.defaultValue = o);
        return;
      }
      a.defaultValue = e != null ? "" + co(e) : "";
    }
    function T1(a, o, e, t) {
      if (o == null) {
        if (t != null) {
          if (e != null) throw Error(C(92));
          if (Rn(t)) {
            if (1 < t.length) throw Error(C(93));
            t = t[0];
          }
          e = t;
        }
        (e == null && (e = ""), (o = e));
      }
      ((e = co(o)),
        (a.defaultValue = e),
        (t = a.textContent),
        t === e && t !== "" && t !== null && (a.value = t),
        Pi(a));
    }
    function nn(a, o) {
      if (o) {
        var e = a.firstChild;
        if (e && e === a.lastChild && e.nodeType === 3) {
          e.nodeValue = o;
          return;
        }
      }
      a.textContent = o;
    }
    var eh = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " ",
      ),
    );
    function wf(a, o, e) {
      var t = o.indexOf("--") === 0;
      e == null || typeof e == "boolean" || e === ""
        ? t
          ? a.setProperty(o, "")
          : o === "float"
            ? (a.cssFloat = "")
            : (a[o] = "")
        : t
          ? a.setProperty(o, e)
          : typeof e != "number" || e === 0 || eh.has(o)
            ? o === "float"
              ? (a.cssFloat = e)
              : (a[o] = ("" + e).trim())
            : (a[o] = e + "px");
    }
    function E1(a, o, e) {
      if (o != null && typeof o != "object") throw Error(C(62));
      if (((a = a.style), e != null)) {
        for (var t in e)
          !e.hasOwnProperty(t) ||
            (o != null && o.hasOwnProperty(t)) ||
            (t.indexOf("--") === 0
              ? a.setProperty(t, "")
              : t === "float"
                ? (a.cssFloat = "")
                : (a[t] = ""),
            (k = !0));
        for (var n in o)
          ((t = o[n]),
            o.hasOwnProperty(n) && e[n] !== t && (wf(a, n, t), (k = !0)));
      } else for (var l in o) o.hasOwnProperty(l) && wf(a, l, o[l]);
    }
    function Qc(a) {
      if (a.indexOf("-") === -1) return !1;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var th = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["maskType", "mask-type"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
      ]),
      nh =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function es(a) {
      return nh.test("" + a)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : a;
    }
    function jo() {}
    var ji = null;
    function Kc(a) {
      return (
        (a = a.target || a.srcElement || window),
        a.correspondingUseElement && (a = a.correspondingUseElement),
        a.nodeType === 3 ? a.parentNode : a
      );
    }
    var xt = null,
      Yt = null;
    function Nf(a) {
      var o = gn(a);
      if (o && (a = o.stateNode)) {
        var e = a[ro] || null;
        a: switch (((a = o.stateNode), o.type)) {
          case "input":
            if (
              (Zi(
                a,
                e.value,
                e.defaultValue,
                e.defaultValue,
                e.checked,
                e.defaultChecked,
                e.type,
                e.name,
              ),
              (o = e.name),
              e.type === "radio" && o != null)
            ) {
              for (e = a; e.parentNode; ) e = e.parentNode;
              for (
                e = e.querySelectorAll(
                  'input[name="' + Eo("" + o) + '"][type="radio"]',
                ),
                  o = 0;
                o < e.length;
                o++
              ) {
                var t = e[o];
                if (t !== a && t.form === a.form) {
                  var n = t[ro] || null;
                  if (!n) throw Error(C(90));
                  Zi(
                    t,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name,
                  );
                }
              }
              for (o = 0; o < e.length; o++)
                ((t = e[o]), t.form === a.form && y1(t));
            }
            break a;
          case "textarea":
            b1(a, e.value, e.defaultValue);
            break a;
          case "select":
            ((o = e.value), o != null && Xt(a, !!e.multiple, o, !1));
        }
      }
    }
    var ii = !1;
    function L1(a, o, e) {
      if (ii) return a(o, e);
      ii = !0;
      try {
        var t = a(o);
        return t;
      } finally {
        if (
          ((ii = !1),
          (xt !== null || Yt !== null) &&
            (ur(), xt && ((o = xt), (a = Yt), (Yt = xt = null), Nf(o), a)))
        )
          for (o = 0; o < a.length; o++) Nf(a[o]);
      }
    }
    function Wn(a, o) {
      var e = a.stateNode;
      if (e === null) return null;
      var t = e[ro] || null;
      if (t === null) return null;
      e = t[o];
      a: switch (o) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          ((t = !t.disabled) ||
            ((a = a.type),
            (t = !(
              a === "button" ||
              a === "input" ||
              a === "select" ||
              a === "textarea"
            ))),
            (a = !t));
          break a;
        default:
          a = !1;
      }
      if (a) return null;
      if (e && typeof e != "function") throw Error(C(231, o, typeof e));
      return e;
    }
    var ie = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      Xi = !1;
    if (ie)
      try {
        ((Nt = {}),
          Object.defineProperty(Nt, "passive", {
            get: function () {
              Xi = !0;
            },
          }),
          window.addEventListener("test", Nt, Nt),
          window.removeEventListener("test", Nt, Nt));
      } catch {
        Xi = !1;
      }
    var Nt,
      Le = null,
      Jc = null,
      ts = null;
    function w1() {
      if (ts) return ts;
      var a,
        o = Jc,
        e = o.length,
        t,
        n = "value" in Le ? Le.value : Le.textContent,
        l = n.length;
      for (a = 0; a < e && o[a] === n[a]; a++);
      var s = e - a;
      for (t = 1; t <= s && o[e - t] === n[l - t]; t++);
      return (ts = n.slice(a, 1 < t ? 1 - t : void 0));
    }
    function ns(a) {
      var o = a.keyCode;
      return (
        "charCode" in a
          ? ((a = a.charCode), a === 0 && o === 13 && (a = 13))
          : (a = o),
        a === 10 && (a = 13),
        32 <= a || a === 13 ? a : 0
      );
    }
    function Fl() {
      return !0;
    }
    function Mf() {
      return !1;
    }
    function ao(a) {
      function o(e, t, n, l, s) {
        ((this._reactName = e),
          (this._targetInst = n),
          (this.type = t),
          (this.nativeEvent = l),
          (this.target = s),
          (this.currentTarget = null));
        for (var i in a)
          a.hasOwnProperty(i) && ((e = a[i]), (this[i] = e ? e(l) : l[i]));
        return (
          (this.isDefaultPrevented = (
            l.defaultPrevented != null
              ? l.defaultPrevented
              : l.returnValue === !1
          )
            ? Fl
            : Mf),
          (this.isPropagationStopped = Mf),
          this
        );
      }
      return (
        K(o.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != "unknown" && (e.returnValue = !1),
              (this.isDefaultPrevented = Fl));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
              (this.isPropagationStopped = Fl));
          },
          persist: function () {},
          isPersistent: Fl,
        }),
        o
      );
    }
    var je = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (a) {
          return a.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Js = ao(je),
      Sl = K({}, je, { view: 0, detail: 0 }),
      lh = ao(Sl),
      ci,
      ui,
      Nn,
      Ws = K({}, Sl, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Wc,
        button: 0,
        buttons: 0,
        relatedTarget: function (a) {
          return a.relatedTarget === void 0
            ? a.fromElement === a.srcElement
              ? a.toElement
              : a.fromElement
            : a.relatedTarget;
        },
        movementX: function (a) {
          return "movementX" in a
            ? a.movementX
            : (a !== Nn &&
                (Nn && a.type === "mousemove"
                  ? ((ci = a.screenX - Nn.screenX),
                    (ui = a.screenY - Nn.screenY))
                  : (ui = ci = 0),
                (Nn = a)),
              ci);
        },
        movementY: function (a) {
          return "movementY" in a ? a.movementY : ui;
        },
      }),
      Df = ao(Ws),
      sh = K({}, Ws, { dataTransfer: 0 }),
      rh = ao(sh),
      ih = K({}, Sl, { relatedTarget: 0 }),
      mi = ao(ih),
      ch = K({}, je, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      uh = ao(ch),
      mh = K({}, je, {
        clipboardData: function (a) {
          return "clipboardData" in a ? a.clipboardData : window.clipboardData;
        },
      }),
      fh = ao(mh),
      ph = K({}, je, { data: 0 }),
      Bf = ao(ph),
      dh = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      Ih = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      hh = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function gh(a) {
      var o = this.nativeEvent;
      return o.getModifierState
        ? o.getModifierState(a)
        : (a = hh[a])
          ? !!o[a]
          : !1;
    }
    function Wc() {
      return gh;
    }
    var Sh = K({}, Sl, {
        key: function (a) {
          if (a.key) {
            var o = dh[a.key] || a.key;
            if (o !== "Unidentified") return o;
          }
          return a.type === "keypress"
            ? ((a = ns(a)), a === 13 ? "Enter" : String.fromCharCode(a))
            : a.type === "keydown" || a.type === "keyup"
              ? Ih[a.keyCode] || "Unidentified"
              : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Wc,
        charCode: function (a) {
          return a.type === "keypress" ? ns(a) : 0;
        },
        keyCode: function (a) {
          return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
        },
        which: function (a) {
          return a.type === "keypress"
            ? ns(a)
            : a.type === "keydown" || a.type === "keyup"
              ? a.keyCode
              : 0;
        },
      }),
      Ch = ao(Sh),
      vh = K({}, Ws, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      Hf = ao(vh),
      yh = K({}, je, { submitter: 0 }),
      Ah = ao(yh),
      bh = K({}, Sl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Wc,
      }),
      Th = ao(bh),
      Eh = K({}, je, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Lh = ao(Eh),
      wh = K({}, Ws, {
        deltaX: function (a) {
          return "deltaX" in a
            ? a.deltaX
            : "wheelDeltaX" in a
              ? -a.wheelDeltaX
              : 0;
        },
        deltaY: function (a) {
          return "deltaY" in a
            ? a.deltaY
            : "wheelDeltaY" in a
              ? -a.wheelDeltaY
              : "wheelDelta" in a
                ? -a.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      Nh = ao(wh),
      Mh = K({}, je, { newState: 0, oldState: 0, source: 0 }),
      Dh = ao(Mh),
      Bh = [9, 13, 27, 32],
      $c = ie && "CompositionEvent" in window,
      qn = null;
    ie && "documentMode" in document && (qn = document.documentMode);
    var Hh = ie && "TextEvent" in window && !qn,
      N1 = ie && (!$c || (qn && 8 < qn && 11 >= qn)),
      Of = " ",
      Rf = !1;
    function M1(a, o) {
      switch (a) {
        case "keyup":
          return Bh.indexOf(o.keyCode) !== -1;
        case "keydown":
          return o.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function D1(a) {
      return (
        (a = a.detail),
        typeof a == "object" && "data" in a ? a.data : null
      );
    }
    var qt = !1;
    function Oh(a, o) {
      switch (a) {
        case "compositionend":
          return D1(o);
        case "keypress":
          return o.which !== 32 ? null : ((Rf = !0), Of);
        case "textInput":
          return ((a = o.data), a === Of && Rf ? null : a);
        default:
          return null;
      }
    }
    function Rh(a, o) {
      if (qt)
        return a === "compositionend" || (!$c && M1(a, o))
          ? ((a = w1()), (ts = Jc = Le = null), (qt = !1), a)
          : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(o.ctrlKey || o.altKey || o.metaKey) ||
            (o.ctrlKey && o.altKey)
          ) {
            if (o.char && 1 < o.char.length) return o.char;
            if (o.which) return String.fromCharCode(o.which);
          }
          return null;
        case "compositionend":
          return N1 && o.locale !== "ko" ? null : o.data;
        default:
          return null;
      }
    }
    var zh = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function zf(a) {
      var o = a && a.nodeName && a.nodeName.toLowerCase();
      return o === "input" ? !!zh[a.type] : o === "textarea";
    }
    function B1(a, o, e, t) {
      (xt ? (Yt ? Yt.push(t) : (Yt = [t])) : (xt = t),
        (o = js(o, "onChange")),
        0 < o.length &&
          ((e = new Js("onChange", "change", null, e, t)),
          a.push({ event: e, listeners: o })));
    }
    var Fn = null,
      $n = null;
    function Uh(a) {
      Ld(a, 0);
    }
    function $s(a) {
      var o = zn(a);
      if (y1(o)) return a;
    }
    function Uf(a, o) {
      if (a === "change") return o;
    }
    var H1 = !1;
    ie &&
      (ie
        ? ((_l = "oninput" in document),
          _l ||
            ((fi = document.createElement("div")),
            fi.setAttribute("oninput", "return;"),
            (_l = typeof fi.oninput == "function")),
          (kl = _l))
        : (kl = !1),
      (H1 = kl && (!document.documentMode || 9 < document.documentMode)));
    var kl, _l, fi;
    function xf() {
      Fn && (Fn.detachEvent("onpropertychange", O1), ($n = Fn = null));
    }
    function O1(a) {
      if (a.propertyName === "value" && $s($n)) {
        var o = [];
        (B1(o, $n, a, Kc(a)), L1(Uh, o));
      }
    }
    function xh(a, o, e) {
      a === "focusin"
        ? (xf(), (Fn = o), ($n = e), Fn.attachEvent("onpropertychange", O1))
        : a === "focusout" && xf();
    }
    function qh(a) {
      if (a === "selectionchange" || a === "keyup" || a === "keydown")
        return $s($n);
    }
    function Fh(a, o) {
      if (a === "click") return $s(o);
    }
    function kh(a, o) {
      if (a === "input" || a === "change") return $s(o);
    }
    function _h(a, o) {
      return (a === o && (a !== 0 || 1 / a === 1 / o)) || (a !== a && o !== o);
    }
    var So = typeof Object.is == "function" ? Object.is : _h;
    function al(a, o) {
      if (So(a, o)) return !0;
      if (
        typeof a != "object" ||
        a === null ||
        typeof o != "object" ||
        o === null
      )
        return !1;
      var e = Object.keys(a),
        t = Object.keys(o);
      if (e.length !== t.length) return !1;
      for (t = 0; t < e.length; t++) {
        var n = e[t];
        if (!Vi.call(o, n) || !So(a[n], o[n])) return !1;
      }
      return !0;
    }
    function Yi(a) {
      if (
        ((a = a || (typeof document < "u" ? document : void 0)), typeof a > "u")
      )
        return null;
      try {
        return a.activeElement || a.body;
      } catch {
        return a.body;
      }
    }
    function qf(a) {
      for (; a && a.firstChild; ) a = a.firstChild;
      return a;
    }
    function Ff(a, o) {
      var e = qf(a);
      a = 0;
      for (var t; e; ) {
        if (e.nodeType === 3) {
          if (((t = a + e.textContent.length), a <= o && t >= o))
            return { node: e, offset: o - a };
          a = t;
        }
        a: {
          for (; e; ) {
            if (e.nextSibling) {
              e = e.nextSibling;
              break a;
            }
            e = e.parentNode;
          }
          e = void 0;
        }
        e = qf(e);
      }
    }
    function R1(a, o) {
      return a && o
        ? a === o
          ? !0
          : a && a.nodeType === 3
            ? !1
            : o && o.nodeType === 3
              ? R1(a, o.parentNode)
              : "contains" in a
                ? a.contains(o)
                : a.compareDocumentPosition
                  ? !!(a.compareDocumentPosition(o) & 16)
                  : !1
        : !1;
    }
    function z1(a) {
      a =
        a != null &&
        a.ownerDocument != null &&
        a.ownerDocument.defaultView != null
          ? a.ownerDocument.defaultView
          : window;
      for (var o = Yi(a.document); o instanceof a.HTMLIFrameElement; ) {
        try {
          var e = typeof o.contentWindow.location.href == "string";
        } catch {
          e = !1;
        }
        if (e) a = o.contentWindow;
        else break;
        o = Yi(a.document);
      }
      return o;
    }
    function au(a) {
      var o = a && a.nodeName && a.nodeName.toLowerCase();
      return (
        o &&
        ((o === "input" &&
          (a.type === "text" ||
            a.type === "search" ||
            a.type === "tel" ||
            a.type === "url" ||
            a.type === "password")) ||
          o === "textarea" ||
          a.contentEditable === "true")
      );
    }
    var Gh = ie && "documentMode" in document && 11 >= document.documentMode,
      Ft = null,
      Qi = null,
      kn = null,
      Ki = !1;
    function kf(a, o, e) {
      var t =
        e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
      Ki ||
        Ft == null ||
        Ft !== Yi(t) ||
        ((t = Ft),
        "selectionStart" in t && au(t)
          ? (t = { start: t.selectionStart, end: t.selectionEnd })
          : ((t = (
              (t.ownerDocument && t.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (t = {
              anchorNode: t.anchorNode,
              anchorOffset: t.anchorOffset,
              focusNode: t.focusNode,
              focusOffset: t.focusOffset,
            })),
        (kn && al(kn, t)) ||
          ((kn = t),
          (t = js(Qi, "onSelect")),
          0 < t.length &&
            ((o = new Js("onSelect", "select", null, o, e)),
            a.push({ event: o, listeners: t }),
            (o.target = Ft))));
    }
    function Qe(a, o) {
      var e = {};
      return (
        (e[a.toLowerCase()] = o.toLowerCase()),
        (e["Webkit" + a] = "webkit" + o),
        (e["Moz" + a] = "moz" + o),
        e
      );
    }
    var kt = {
        animationend: Qe("Animation", "AnimationEnd"),
        animationiteration: Qe("Animation", "AnimationIteration"),
        animationstart: Qe("Animation", "AnimationStart"),
        transitionrun: Qe("Transition", "TransitionRun"),
        transitionstart: Qe("Transition", "TransitionStart"),
        transitioncancel: Qe("Transition", "TransitionCancel"),
        transitionend: Qe("Transition", "TransitionEnd"),
      },
      pi = {},
      U1 = {};
    ie &&
      ((U1 = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete kt.animationend.animation,
        delete kt.animationiteration.animation,
        delete kt.animationstart.animation),
      "TransitionEvent" in window || delete kt.transitionend.transition);
    function gt(a) {
      if (pi[a]) return pi[a];
      if (!kt[a]) return a;
      var o = kt[a],
        e;
      for (e in o) if (o.hasOwnProperty(e) && e in U1) return (pi[a] = o[e]);
      return a;
    }
    var x1 = gt("animationend"),
      q1 = gt("animationiteration"),
      F1 = gt("animationstart"),
      Vh = gt("transitionrun"),
      Ph = gt("transitionstart"),
      Zh = gt("transitioncancel"),
      k1 = gt("transitionend"),
      _1 = new Map(),
      Ji =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " ",
        );
    Ji.push("scrollEnd");
    function xo(a, o) {
      (_1.set(a, o), ht(o, [a]));
    }
    var jh = 0;
    function ce(a, o) {
      if (a.name != null && a.name !== "auto") return a.name;
      if (o.autoName !== null) return o.autoName;
      a = Uo.identifierPrefix;
      var e = jh++;
      return ((a = "_" + a + "t_" + e.toString(32) + "_"), (o.autoName = a));
    }
    function _f(a) {
      if (a == null || typeof a == "string") return a;
      var o = null,
        e = on;
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var n = a[e[t]];
          if (n != null) {
            if (n === "none") return "none";
            o = o == null ? n : o + (" " + n);
          }
        }
      return o ?? a.default;
    }
    function Ie(a, o) {
      return (
        (a = _f(a)),
        (o = _f(o)),
        o == null ? (a === "auto" ? null : a) : o === "auto" ? null : o
      );
    }
    var Es =
        typeof reportError == "function"
          ? reportError
          : function (a) {
              if (
                typeof window == "object" &&
                typeof window.ErrorEvent == "function"
              ) {
                var o = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof a == "object" &&
                    a !== null &&
                    typeof a.message == "string"
                      ? String(a.message)
                      : String(a),
                  error: a,
                });
                if (!window.dispatchEvent(o)) return;
              } else if (
                typeof process == "object" &&
                typeof process.emit == "function"
              ) {
                process.emit("uncaughtException", a);
                return;
              }
              console.error(a);
            },
      Ao = [],
      _t = 0,
      ou = 0;
    function ar() {
      for (var a = _t, o = (ou = _t = 0); o < a; ) {
        var e = Ao[o];
        Ao[o++] = null;
        var t = Ao[o];
        Ao[o++] = null;
        var n = Ao[o];
        Ao[o++] = null;
        var l = Ao[o];
        if (((Ao[o++] = null), t !== null && n !== null)) {
          var s = t.pending;
          (s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
            (t.pending = n));
        }
        l !== 0 && G1(e, n, l);
      }
    }
    function or(a, o, e, t) {
      ((Ao[_t++] = a),
        (Ao[_t++] = o),
        (Ao[_t++] = e),
        (Ao[_t++] = t),
        (ou |= t),
        (a.lanes |= t),
        (a = a.alternate),
        a !== null && (a.lanes |= t));
    }
    function eu(a, o, e, t) {
      return (or(a, o, e, t), Ls(a));
    }
    function St(a, o) {
      return (or(a, null, null, o), Ls(a));
    }
    function G1(a, o, e) {
      a.lanes |= e;
      var t = a.alternate;
      t !== null && (t.lanes |= e);
      for (var n = !1, l = a.return; l !== null; )
        ((l.childLanes |= e),
          (t = l.alternate),
          t !== null && (t.childLanes |= e),
          l.tag === 22 &&
            ((a = l.stateNode), a === null || a._visibility & 1 || (n = !0)),
          (a = l),
          (l = l.return));
      return a.tag === 3
        ? ((l = a.stateNode),
          n &&
            o !== null &&
            ((n = 31 - ho(e)),
            (a = l.hiddenUpdates),
            (t = a[n]),
            t === null ? (a[n] = [o]) : t.push(o),
            (o.lane = e | 536870912)),
          l)
        : null;
    }
    function Ls(a) {
      if (50 < Kn) throw ((Kn = 0), (ds = null), Error(C(185)));
      for (var o = a.return; o !== null; ) ((a = o), (o = a.return));
      return a.tag === 3 ? a.stateNode : null;
    }
    var Gt = {};
    function Xh(a, o, e, t) {
      ((this.tag = a),
        (this.key = e),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = o),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = t),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function no(a, o, e, t) {
      return new Xh(a, o, e, t);
    }
    function tu(a) {
      return ((a = a.prototype), !(!a || !a.isReactComponent));
    }
    function se(a, o) {
      var e = a.alternate;
      return (
        e === null
          ? ((e = no(a.tag, o, a.key, a.mode)),
            (e.elementType = a.elementType),
            (e.type = a.type),
            (e.stateNode = a.stateNode),
            (e.alternate = a),
            (a.alternate = e))
          : ((e.pendingProps = o),
            (e.type = a.type),
            (e.flags = 0),
            (e.subtreeFlags = 0),
            (e.deletions = null)),
        (e.flags = a.flags & 1206910976),
        (e.childLanes = a.childLanes),
        (e.lanes = a.lanes),
        (e.child = a.child),
        (e.memoizedProps = a.memoizedProps),
        (e.memoizedState = a.memoizedState),
        (e.updateQueue = a.updateQueue),
        (o = a.dependencies),
        (e.dependencies =
          o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }),
        (e.sibling = a.sibling),
        (e.index = a.index),
        (e.ref = a.ref),
        (e.refCleanup = a.refCleanup),
        e
      );
    }
    function V1(a, o) {
      a.flags &= 1206910978;
      var e = a.alternate;
      return (
        e === null
          ? ((a.childLanes = 0),
            (a.lanes = o),
            (a.child = null),
            (a.subtreeFlags = 0),
            (a.memoizedProps = null),
            (a.memoizedState = null),
            (a.updateQueue = null),
            (a.dependencies = null),
            (a.stateNode = null))
          : ((a.childLanes = e.childLanes),
            (a.lanes = e.lanes),
            (a.child = e.child),
            (a.subtreeFlags = 0),
            (a.deletions = null),
            (a.memoizedProps = e.memoizedProps),
            (a.memoizedState = e.memoizedState),
            (a.updateQueue = e.updateQueue),
            (a.type = e.type),
            (o = e.dependencies),
            (a.dependencies =
              o === null
                ? null
                : { lanes: o.lanes, firstContext: o.firstContext })),
        a
      );
    }
    function ls(a, o, e, t, n, l) {
      var s = 0;
      if (((t = a), typeof t == "function")) tu(t) && (s = 1);
      else if (typeof t == "string")
        s = CS(a, e, Qo.current)
          ? 26
          : a === "html" || a === "head" || a === "body"
            ? 27
            : 5;
      else
        a: switch (t) {
          case qi:
            return (
              (a = no(31, e, o, n)),
              (a.elementType = qi),
              (a.lanes = l),
              a
            );
          case zt:
            return tt(e.children, n, l, o);
          case s1:
            ((s = 8), (n |= 24));
            break;
          case zi:
            return (
              (a = no(12, e, o, n | 2)),
              (a.elementType = zi),
              (a.lanes = l),
              a
            );
          case Ui:
            return (
              (a = no(13, e, o, n)),
              (a.elementType = Ui),
              (a.lanes = l),
              a
            );
          case xi:
            return (
              (a = no(19, e, o, n)),
              (a.elementType = xi),
              (a.lanes = l),
              a
            );
          case RI:
          case Fi:
            return (
              (a = n | 32),
              (a = no(30, e, o, a)),
              (a.elementType = Fi),
              (a.lanes = l),
              (a.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null,
              }),
              a
            );
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case Zo:
                  s = 10;
                  break a;
                case r1:
                  s = 9;
                  break a;
                case Pc:
                  s = 11;
                  break a;
                case Zc:
                  s = 14;
                  break a;
                case Ae:
                  ((s = 16), (t = null));
                  break a;
              }
            ((s = 29),
              (e = Error(C(130, a === null ? "null" : typeof a, ""))),
              (t = null));
        }
      return (
        (o = no(s, e, o, n)),
        (o.elementType = a),
        (o.type = t),
        (o.lanes = l),
        o
      );
    }
    function tt(a, o, e, t) {
      return ((a = no(7, a, t, o)), (a.lanes = e), a);
    }
    function di(a, o, e) {
      return ((a = no(6, a, null, o)), (a.lanes = e), a);
    }
    function P1(a) {
      var o = no(18, null, null, 0);
      return ((o.stateNode = a), o);
    }
    function Ii(a, o, e) {
      return (
        (o = no(4, a.children !== null ? a.children : [], a.key, o)),
        (o.lanes = e),
        (o.stateNode = {
          containerInfo: a.containerInfo,
          pendingChildren: null,
          implementation: a.implementation,
        }),
        o
      );
    }
    var Gf = new WeakMap();
    function Lo(a, o) {
      if (typeof a == "object" && a !== null) {
        var e = Gf.get(a);
        return e !== void 0
          ? e
          : ((o = { value: a, source: o, stack: vf(o) }), Gf.set(a, o), o);
      }
      return { value: a, source: o, stack: vf(o) };
    }
    var Vt = [],
      Pt = 0,
      ws = null,
      ol = 0,
      bo = [],
      To = 0,
      _e = null,
      Xo = 1,
      Yo = "";
    function ne(a, o) {
      ((Vt[Pt++] = ol), (Vt[Pt++] = ws), (ws = a), (ol = o));
    }
    function Z1(a, o, e) {
      ((bo[To++] = Xo), (bo[To++] = Yo), (bo[To++] = _e), (_e = a));
      var t = Xo;
      a = Yo;
      var n = 32 - ho(t) - 1;
      ((t &= ~(1 << n)), (e += 1));
      var l = 32 - ho(o) + n;
      if (30 < l) {
        var s = n - (n % 5);
        ((l = (t & ((1 << s) - 1)).toString(32)),
          (t >>= s),
          (n -= s),
          (Xo = (1 << (32 - ho(o) + n)) | (e << n) | t),
          (Yo = l + a));
      } else ((Xo = (1 << l) | (e << n) | t), (Yo = a));
    }
    function er(a) {
      a.return !== null && (ne(a, 1), Z1(a, 1, 0));
    }
    function nu(a) {
      for (; a === ws; )
        ((ws = Vt[--Pt]), (Vt[Pt] = null), (ol = Vt[--Pt]), (Vt[Pt] = null));
      for (; a === _e; )
        ((_e = bo[--To]),
          (bo[To] = null),
          (Yo = bo[--To]),
          (bo[To] = null),
          (Xo = bo[--To]),
          (bo[To] = null));
    }
    function j1(a, o) {
      ((bo[To++] = Xo),
        (bo[To++] = Yo),
        (bo[To++] = _e),
        (Xo = o.id),
        (Yo = o.overflow),
        (_e = a));
    }
    var Ua = null,
      $ = null,
      R = !1,
      He = null,
      wo = !1,
      Wi = Error(C(519));
    function Ge(a) {
      var o = Error(
        C(
          418,
          1 < arguments.length && arguments[1] !== void 0 && arguments[1]
            ? "text"
            : "HTML",
          "",
        ),
      );
      throw (el(Lo(o, a)), Wi);
    }
    function Vf(a) {
      var o = a.stateNode,
        e = a.type,
        t = a.memoizedProps;
      switch (((o[Fa] = a), (o[ro] = t), e)) {
        case "dialog":
          (U("cancel", o), U("close", o));
          break;
        case "iframe":
        case "object":
        case "embed":
          U("load", o);
          break;
        case "video":
        case "audio":
          for (e = 0; e < sl.length; e++) U(sl[e], o);
          break;
        case "source":
          U("error", o);
          break;
        case "img":
        case "image":
        case "link":
          (U("error", o), U("load", o));
          break;
        case "details":
          U("toggle", o);
          break;
        case "input":
          (U("invalid", o),
            A1(
              o,
              t.value,
              t.defaultValue,
              t.checked,
              t.defaultChecked,
              t.type,
              t.name,
              !0,
            ));
          break;
        case "select":
          U("invalid", o);
          break;
        case "textarea":
          (U("invalid", o), T1(o, t.value, t.defaultValue, t.children));
      }
      ((e = t.children),
        (typeof e != "string" &&
          typeof e != "number" &&
          typeof e != "bigint") ||
        o.textContent === "" + e ||
        t.suppressHydrationWarning === !0 ||
        Nd(o.textContent, e)
          ? (t.popover != null && (U("beforetoggle", o), U("toggle", o)),
            t.onScroll != null && U("scroll", o),
            t.onScrollEnd != null && U("scrollend", o),
            t.onClick != null && (o.onclick = jo),
            (o = !0))
          : (o = !1),
        o || Ge(a, !0));
    }
    function Ns(a) {
      for (Ua = a.return; Ua; )
        switch (Ua.tag) {
          case 5:
          case 31:
          case 13:
            wo = !1;
            return;
          case 27:
          case 3:
            wo = !0;
            return;
          default:
            Ua = Ua.return;
        }
    }
    function Mt(a) {
      if (a !== Ua) return !1;
      if (!R) return (Ns(a), (R = !0), !1);
      var o = a.tag,
        e;
      if (
        ((e = o !== 3 && o !== 27) &&
          ((e = o === 5) &&
            ((e = a.type),
            (e =
              !(e !== "form" && e !== "button") ||
              Uc(a.type, a.memoizedProps))),
          (e = !e)),
        e && $ && Ge(a),
        Ns(a),
        o === 13)
      ) {
        if (((a = a.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
          throw Error(C(317));
        $ = F0(a);
      } else if (o === 31) {
        if (((a = a.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
          throw Error(C(317));
        $ = F0(a);
      } else
        o === 27
          ? ((o = $), Xe(a.type) ? ((a = kc), (kc = null), ($ = a)) : ($ = o))
          : ($ = Ua ? No(a.stateNode.nextSibling) : null);
      return !0;
    }
    function rt() {
      (($ = Ua = null), (R = !1));
    }
    function hi() {
      var a = He;
      return (
        a !== null &&
          (eo === null ? (eo = a) : eo.push.apply(eo, a), (He = null)),
        a
      );
    }
    function el(a) {
      He === null ? (He = [a]) : He.push(a);
    }
    var $i = Wo(null),
      Ct = null,
      le = null;
    function we(a, o, e) {
      (aa($i, o._currentValue), (o._currentValue = e));
    }
    function re(a) {
      ((a._currentValue = $i.current), _a($i));
    }
    function ss(a, o, e) {
      for (; a !== null; ) {
        var t = a.alternate;
        if (
          ((a.childLanes & o) !== o
            ? ((a.childLanes |= o), t !== null && (t.childLanes |= o))
            : t !== null && (t.childLanes & o) !== o && (t.childLanes |= o),
          a === e)
        )
          break;
        a = a.return;
      }
    }
    function ac(a, o, e, t) {
      var n = a.child;
      for (n !== null && (n.return = a); n !== null; ) {
        var l = n.dependencies;
        if (l !== null) {
          var s = n.child;
          l = l.firstContext;
          a: for (; l !== null; ) {
            var i = l;
            l = n;
            for (var c = 0; c < o.length; c++)
              if (i.context === o[c]) {
                ((l.lanes |= e),
                  (i = l.alternate),
                  i !== null && (i.lanes |= e),
                  ss(l.return, e, a),
                  t || (s = null));
                break a;
              }
            l = i.next;
          }
        } else if (n.tag === 18) {
          if (((s = n.return), s === null)) throw Error(C(341));
          ((s.lanes |= e),
            (l = s.alternate),
            l !== null && (l.lanes |= e),
            ss(s, e, a),
            (s = null));
        } else
          n.tag === 13 &&
          n.memoizedState !== null &&
          n.memoizedState.dehydrated === null
            ? ((n.lanes |= e),
              (s = n.alternate),
              s !== null && (s.lanes |= e),
              ss(n.return, e, a),
              (s = n.child),
              (s = s !== null ? s.sibling : null))
            : (s = n.child);
        if (s !== null) s.return = n;
        else
          for (s = n; s !== null; ) {
            if (s === a) {
              s = null;
              break;
            }
            if (((n = s.sibling), n !== null)) {
              ((n.return = s.return), (s = n));
              break;
            }
            s = s.return;
          }
        n = s;
      }
    }
    function it(a, o, e, t) {
      a = null;
      for (var n = o, l = !1; n !== null; ) {
        if (!l) {
          if ((n.flags & 524288) !== 0) l = !0;
          else if ((n.flags & 262144) !== 0) break;
        }
        if (n.tag === 10) {
          var s = n.alternate;
          if (s === null) throw Error(C(387));
          if (((s = s.memoizedProps), s !== null)) {
            var i = n.type;
            So(n.pendingProps.value, s.value) ||
              (a !== null ? a.push(i) : (a = [i]));
          }
        } else if (n === vs.current) {
          if (((s = n.alternate), s === null)) throw Error(C(387));
          s.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
            (a !== null ? a.push(pn) : (a = [pn]));
        }
        n = n.return;
      }
      return (a !== null && ac(o, a, e, t), (o.flags |= 262144), a !== null);
    }
    function Ms(a) {
      for (a = a.firstContext; a !== null; ) {
        if (!So(a.context._currentValue, a.memoizedValue)) return !0;
        a = a.next;
      }
      return !1;
    }
    function ct(a) {
      ((Ct = a),
        (le = null),
        (a = a.dependencies),
        a !== null && (a.firstContext = null));
    }
    function ka(a) {
      return X1(Ct, a);
    }
    function Gl(a, o) {
      return (Ct === null && ct(a), X1(a, o));
    }
    function X1(a, o) {
      var e = o._currentValue;
      if (((o = { context: o, memoizedValue: e, next: null }), le === null)) {
        if (a === null) throw Error(C(308));
        ((le = o),
          (a.dependencies = { lanes: 0, firstContext: o }),
          (a.flags |= 524288));
      } else le = le.next = o;
      return e;
    }
    var Yh =
        typeof AbortController < "u"
          ? AbortController
          : function () {
              var a = [],
                o = (this.signal = {
                  aborted: !1,
                  addEventListener: function (e, t) {
                    a.push(t);
                  },
                });
              this.abort = function () {
                ((o.aborted = !0),
                  a.forEach(function (e) {
                    return e();
                  }));
              };
            },
      Qh = Ha.unstable_scheduleCallback,
      Kh = Ha.unstable_NormalPriority,
      Na = {
        $$typeof: Zo,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function lu() {
      return { controller: new Yh(), data: new Map(), refCount: 0 };
    }
    function Cl(a) {
      (a.refCount--,
        a.refCount === 0 &&
          Qh(Kh, function () {
            a.controller.abort();
          }));
    }
    function Pf(a, o) {
      if ((a.pendingLanes & 4194048) !== 0) {
        var e = a.transitionTypes;
        for (
          e === null && (e = a.transitionTypes = []), a = 0;
          a < o.length;
          a++
        ) {
          var t = o[a];
          e.indexOf(t) === -1 && e.push(t);
        }
      }
    }
    var Un = null;
    function Jh(a) {
      var o = a.transitionTypes;
      return ((a.transitionTypes = null), o);
    }
    var _n = null,
      oc = 0,
      ut = 0,
      Qt = null;
    function Wh(a, o) {
      if (_n === null) {
        var e = (_n = []);
        ((oc = 0),
          (ut = Ou()),
          (Qt = {
            status: "pending",
            value: void 0,
            then: function (t) {
              e.push(t);
            },
          }));
      }
      return (oc++, o.then(Zf, Zf), o);
    }
    function Zf() {
      if (--oc === 0 && ((Un = null), _n !== null)) {
        Qt !== null && (Qt.status = "fulfilled");
        var a = _n;
        ((_n = null), (ut = 0), (Qt = null));
        for (var o = 0; o < a.length; o++) (0, a[o])();
      }
    }
    function $h(a, o) {
      var e = [],
        t = {
          status: "pending",
          value: null,
          reason: null,
          then: function (n) {
            e.push(n);
          },
        };
      return (
        a.then(
          function () {
            ((t.status = "fulfilled"), (t.value = o));
            for (var n = 0; n < e.length; n++) (0, e[n])(o);
          },
          function (n) {
            for (t.status = "rejected", t.reason = n, n = 0; n < e.length; n++)
              (0, e[n])(void 0);
          },
        ),
        t
      );
    }
    var jf = w.S;
    w.S = function (a, o) {
      if (
        ((md = po()),
        typeof o == "object" &&
          o !== null &&
          typeof o.then == "function" &&
          Wh(a, o),
        Un !== null)
      )
        for (var e = un; e !== null; ) (Pf(e, Un), (e = e.next));
      if (((e = a.types), e !== null)) {
        for (var t = un; t !== null; ) (Pf(t, e), (t = t.next));
        if (ut !== 0) {
          ((t = Un), t === null && (t = Un = []));
          for (var n = 0; n < e.length; n++) {
            var l = e[n];
            t.indexOf(l) === -1 && t.push(l);
          }
        }
      }
      jf !== null && jf(a, o);
    };
    var nt = Wo(null);
    function su() {
      var a = nt.current;
      return a !== null ? a : Q.pooledCache;
    }
    function rs(a, o) {
      o === null ? aa(nt, nt.current) : aa(nt, o.pool);
    }
    function Y1() {
      var a = su();
      return a === null ? null : { parent: Na._currentValue, pool: a };
    }
    var Sn = Error(C(460)),
      ru = Error(C(474)),
      tr = Error(C(542)),
      Ds = { then: function () {} };
    function Xf(a) {
      return ((a = a.status), a === "fulfilled" || a === "rejected");
    }
    function Q1(a, o, e) {
      switch (
        ((e = a[e]),
        e === void 0 ? a.push(o) : e !== o && (o.then(jo, jo), (o = e)),
        o.status)
      ) {
        case "fulfilled":
          return o.value;
        case "rejected":
          throw (
            (a = o.reason),
            Qf(a),
            a === void 0 && !("reason" in o) ? Error(C(600)) : a
          );
        default:
          if (typeof o.status == "string") o.then(jo, jo);
          else {
            if (((a = Q), a !== null && 100 < a.shellSuspendCounter))
              throw Error(C(482));
            ((a = o),
              (a.status = "pending"),
              a.then(
                function (t) {
                  if (o.status === "pending") {
                    var n = o;
                    ((n.status = "fulfilled"), (n.value = t));
                  }
                },
                function (t) {
                  if (o.status === "pending") {
                    var n = o;
                    ((n.status = "rejected"), (n.reason = t));
                  }
                },
              ));
          }
          switch (o.status) {
            case "fulfilled":
              return o.value;
            case "rejected":
              throw ((a = o.reason), Qf(a), a);
          }
          throw ((lt = o), Sn);
      }
    }
    function We(a) {
      try {
        var o = a._init;
        return o(a._payload);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function"
          ? ((lt = e), Sn)
          : e;
      }
    }
    var lt = null;
    function Yf() {
      if (lt === null) throw Error(C(459));
      var a = lt;
      return ((lt = null), a);
    }
    function Qf(a) {
      if (a === Sn || a === tr) throw Error(C(483));
    }
    var Kt = null,
      tl = 0;
    function Vl(a) {
      var o = tl;
      return ((tl += 1), Kt === null && (Kt = []), Q1(Kt, a, o));
    }
    function Ce(a, o) {
      ((o = o.props.ref), (a.ref = o !== void 0 ? o : null));
    }
    function Pl(a, o) {
      throw o.$$typeof === OI
        ? Error(C(525))
        : ((a = Object.prototype.toString.call(o)),
          Error(
            C(
              31,
              a === "[object Object]"
                ? "object with keys {" + Object.keys(o).join(", ") + "}"
                : a,
            ),
          ));
    }
    function K1(a) {
      function o(h, p) {
        if (a) {
          var d = h.deletions;
          d === null ? ((h.deletions = [p]), (h.flags |= 16)) : d.push(p);
        }
      }
      function e(h, p) {
        if (!a) return null;
        for (; p !== null; ) (o(h, p), (p = p.sibling));
        return null;
      }
      function t(h) {
        for (var p = new Map(); h !== null; )
          (h.key === null ? p.set(h.index, h) : p.set(h.key, h),
            (h = h.sibling));
        return p;
      }
      function n(h, p) {
        return ((h = se(h, p)), (h.index = 0), (h.sibling = null), h);
      }
      function l(h, p, d) {
        return (
          (h.index = d),
          a
            ? ((d = h.alternate),
              d !== null
                ? ((d = d.index), d < p ? ((h.flags |= 2), p) : d)
                : ((h.flags |= 134217730), p))
            : ((h.flags |= 1048576), p)
        );
      }
      function s(h) {
        return (a && h.alternate === null && (h.flags |= 134217730), h);
      }
      function i(h, p, d, S) {
        return p === null || p.tag !== 6
          ? ((p = di(d, h.mode, S)), (p.return = h), p)
          : ((p = n(p, d)), (p.return = h), p);
      }
      function c(h, p, d, S) {
        var b = d.type;
        return b === zt
          ? ((h = I(h, p, d.props.children, S, d.key)), Ce(h, d), h)
          : p !== null &&
              (p.elementType === b ||
                (typeof b == "object" &&
                  b !== null &&
                  b.$$typeof === Ae &&
                  We(b) === p.type))
            ? ((p = n(p, d.props)), Ce(p, d), (p.return = h), p)
            : ((p = ls(d.type, d.key, d.props, null, h.mode, S)),
              Ce(p, d),
              (p.return = h),
              p);
      }
      function m(h, p, d, S) {
        return p === null ||
          p.tag !== 4 ||
          p.stateNode.containerInfo !== d.containerInfo ||
          p.stateNode.implementation !== d.implementation
          ? ((p = Ii(d, h.mode, S)), (p.return = h), p)
          : ((p = n(p, d.children || [])), (p.return = h), p);
      }
      function I(h, p, d, S, b) {
        return p === null || p.tag !== 7
          ? ((p = tt(d, h.mode, S, b)), (p.return = h), p)
          : ((p = n(p, d)), (p.return = h), p);
      }
      function f(h, p, d) {
        if (
          (typeof p == "string" && p !== "") ||
          typeof p == "number" ||
          typeof p == "bigint"
        )
          return ((p = di("" + p, h.mode, d)), (p.return = h), p);
        if (typeof p == "object" && p !== null) {
          switch (p.$$typeof) {
            case Rl:
              return (
                (d = ls(p.type, p.key, p.props, null, h.mode, d)),
                Ce(d, p),
                (d.return = h),
                d
              );
            case On:
              return ((p = Ii(p, h.mode, d)), (p.return = h), p);
            case Ae:
              return ((p = We(p)), f(h, p, d));
          }
          if (Rn(p) || wn(p))
            return ((p = tt(p, h.mode, d, null)), (p.return = h), p);
          if (typeof p.then == "function") return f(h, Vl(p), d);
          if (p.$$typeof === Zo) return f(h, Gl(h, p), d);
          Pl(h, p);
        }
        return null;
      }
      function u(h, p, d, S) {
        var b = p !== null ? p.key : null;
        if (
          (typeof d == "string" && d !== "") ||
          typeof d == "number" ||
          typeof d == "bigint"
        )
          return b !== null ? null : i(h, p, "" + d, S);
        if (typeof d == "object" && d !== null) {
          switch (d.$$typeof) {
            case Rl:
              return d.key === b ? c(h, p, d, S) : null;
            case On:
              return d.key === b ? m(h, p, d, S) : null;
            case Ae:
              return ((d = We(d)), u(h, p, d, S));
          }
          if (Rn(d) || wn(d)) return b !== null ? null : I(h, p, d, S, null);
          if (typeof d.then == "function") return u(h, p, Vl(d), S);
          if (d.$$typeof === Zo) return u(h, p, Gl(h, d), S);
          Pl(h, d);
        }
        return null;
      }
      function g(h, p, d, S, b) {
        if (
          (typeof S == "string" && S !== "") ||
          typeof S == "number" ||
          typeof S == "bigint"
        )
          return ((h = h.get(d) || null), i(p, h, "" + S, b));
        if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case Rl:
              return (
                (h = h.get(S.key === null ? d : S.key) || null),
                c(p, h, S, b)
              );
            case On:
              return (
                (h = h.get(S.key === null ? d : S.key) || null),
                m(p, h, S, b)
              );
            case Ae:
              return ((S = We(S)), g(h, p, d, S, b));
          }
          if (Rn(S) || wn(S))
            return ((h = h.get(d) || null), I(p, h, S, b, null));
          if (typeof S.then == "function") return g(h, p, d, Vl(S), b);
          if (S.$$typeof === Zo) return g(h, p, d, Gl(p, S), b);
          Pl(p, S);
        }
        return null;
      }
      function v(h, p, d, S) {
        for (
          var b = null, O = null, T = p, E = (p = 0), oa = null;
          T !== null && E < d.length;
          E++
        ) {
          T.index > E ? ((oa = T), (T = null)) : (oa = T.sibling);
          var z = u(h, T, d[E], S);
          if (z === null) {
            T === null && (T = oa);
            break;
          }
          (a && T && z.alternate === null && o(h, T),
            (p = l(z, p, E)),
            O === null ? (b = z) : (O.sibling = z),
            (O = z),
            (T = oa));
        }
        if (E === d.length) return (e(h, T), R && ne(h, E), b);
        if (T === null) {
          for (; E < d.length; E++)
            ((T = f(h, d[E], S)),
              T !== null &&
                ((p = l(T, p, E)),
                O === null ? (b = T) : (O.sibling = T),
                (O = T)));
          return (R && ne(h, E), b);
        }
        for (T = t(T); E < d.length; E++)
          ((oa = g(T, h, E, d[E], S)),
            oa !== null &&
              (a &&
                ((z = oa.alternate),
                z !== null && T.delete(z.key === null ? E : z.key)),
              (p = l(oa, p, E)),
              O === null ? (b = oa) : (O.sibling = oa),
              (O = oa)));
        return (
          a &&
            T.forEach(function (ja) {
              return o(h, ja);
            }),
          R && ne(h, E),
          b
        );
      }
      function A(h, p, d, S) {
        if (d == null) throw Error(C(151));
        for (
          var b = null, O = null, T = p, E = (p = 0), oa = null, z = d.next();
          T !== null && !z.done;
          E++, z = d.next()
        ) {
          T.index > E ? ((oa = T), (T = null)) : (oa = T.sibling);
          var ja = u(h, T, z.value, S);
          if (ja === null) {
            T === null && (T = oa);
            break;
          }
          (a && T && ja.alternate === null && o(h, T),
            (p = l(ja, p, E)),
            O === null ? (b = ja) : (O.sibling = ja),
            (O = ja),
            (T = oa));
        }
        if (z.done) return (e(h, T), R && ne(h, E), b);
        if (T === null) {
          for (; !z.done; E++, z = d.next())
            ((z = f(h, z.value, S)),
              z !== null &&
                ((p = l(z, p, E)),
                O === null ? (b = z) : (O.sibling = z),
                (O = z)));
          return (R && ne(h, E), b);
        }
        for (T = t(T); !z.done; E++, z = d.next())
          ((z = g(T, h, E, z.value, S)),
            z !== null &&
              (a &&
                ((oa = z.alternate),
                oa !== null && T.delete(oa.key === null ? E : oa.key)),
              (p = l(z, p, E)),
              O === null ? (b = z) : (O.sibling = z),
              (O = z)));
        return (
          a &&
            T.forEach(function (Fr) {
              return o(h, Fr);
            }),
          R && ne(h, E),
          b
        );
      }
      function y(h, p, d, S) {
        if (
          (typeof d == "object" &&
            d !== null &&
            d.type === zt &&
            d.key === null &&
            d.props.ref === void 0 &&
            (d = d.props.children),
          typeof d == "object" && d !== null)
        ) {
          switch (d.$$typeof) {
            case Rl:
              a: {
                for (var b = d.key; p !== null; ) {
                  if (p.key === b) {
                    if (((b = d.type), b === zt)) {
                      if (p.tag === 7) {
                        (e(h, p.sibling),
                          (S = n(p, d.props.children)),
                          Ce(S, d),
                          (S.return = h),
                          (h = S));
                        break a;
                      }
                    } else if (
                      p.elementType === b ||
                      (typeof b == "object" &&
                        b !== null &&
                        b.$$typeof === Ae &&
                        We(b) === p.type)
                    ) {
                      (e(h, p.sibling),
                        (S = n(p, d.props)),
                        Ce(S, d),
                        (S.return = h),
                        (h = S));
                      break a;
                    }
                    e(h, p);
                    break;
                  } else o(h, p);
                  p = p.sibling;
                }
                d.type === zt
                  ? ((S = tt(d.props.children, h.mode, S, d.key)),
                    Ce(S, d),
                    (S.return = h),
                    (h = S))
                  : ((S = ls(d.type, d.key, d.props, null, h.mode, S)),
                    Ce(S, d),
                    (S.return = h),
                    (h = S));
              }
              return s(h);
            case On:
              a: {
                for (b = d.key; p !== null; ) {
                  if (p.key === b)
                    if (
                      p.tag === 4 &&
                      p.stateNode.containerInfo === d.containerInfo &&
                      p.stateNode.implementation === d.implementation
                    ) {
                      (e(h, p.sibling),
                        (S = n(p, d.children || [])),
                        (S.return = h),
                        (h = S));
                      break a;
                    } else {
                      e(h, p);
                      break;
                    }
                  else o(h, p);
                  p = p.sibling;
                }
                ((S = Ii(d, h.mode, S)), (S.return = h), (h = S));
              }
              return s(h);
            case Ae:
              return ((d = We(d)), y(h, p, d, S));
          }
          if (Rn(d)) return v(h, p, d, S);
          if (wn(d)) {
            if (((b = wn(d)), typeof b != "function")) throw Error(C(150));
            return ((d = b.call(d)), A(h, p, d, S));
          }
          if (typeof d.then == "function") return y(h, p, Vl(d), S);
          if (d.$$typeof === Zo) return y(h, p, Gl(h, d), S);
          Pl(h, d);
        }
        return (typeof d == "string" && d !== "") ||
          typeof d == "number" ||
          typeof d == "bigint"
          ? ((d = "" + d),
            p !== null && p.tag === 6
              ? (e(h, p.sibling), (S = n(p, d)), (S.return = h), (h = S))
              : (e(h, p), (S = di(d, h.mode, S)), (S.return = h), (h = S)),
            s(h))
          : e(h, p);
      }
      return function (h, p, d, S) {
        try {
          tl = 0;
          var b = y(h, p, d, S);
          return ((Kt = null), b);
        } catch (T) {
          if (T === Sn || T === tr) throw T;
          var O = no(29, T, null, h.mode);
          return ((O.lanes = S), (O.return = h), O);
        }
      };
    }
    var mt = K1(!0),
      J1 = K1(!1),
      be = !1;
    function iu(a) {
      a.updateQueue = {
        baseState: a.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function ec(a, o) {
      ((a = a.updateQueue),
        o.updateQueue === a &&
          (o.updateQueue = {
            baseState: a.baseState,
            firstBaseUpdate: a.firstBaseUpdate,
            lastBaseUpdate: a.lastBaseUpdate,
            shared: a.shared,
            callbacks: null,
          }));
    }
    function Oe(a) {
      return { lane: a, tag: 0, payload: null, callback: null, next: null };
    }
    function Re(a, o, e) {
      var t = a.updateQueue;
      if (t === null) return null;
      if (((t = t.shared), (_ & 2) !== 0)) {
        var n = t.pending;
        return (
          n === null ? (o.next = o) : ((o.next = n.next), (n.next = o)),
          (t.pending = o),
          (o = Ls(a)),
          G1(a, null, e),
          o
        );
      }
      return (or(a, t, o, e), Ls(a));
    }
    function Gn(a, o, e) {
      if (
        ((o = o.updateQueue),
        o !== null && ((o = o.shared), (e & 4194048) !== 0))
      ) {
        var t = o.lanes;
        ((t &= a.pendingLanes), (e |= t), (o.lanes = e), d1(a, e));
      }
    }
    function gi(a, o) {
      var e = a.updateQueue,
        t = a.alternate;
      if (t !== null && ((t = t.updateQueue), e === t)) {
        var n = null,
          l = null;
        if (((e = e.firstBaseUpdate), e !== null)) {
          do {
            var s = {
              lane: e.lane,
              tag: e.tag,
              payload: e.payload,
              callback: null,
              next: null,
            };
            (l === null ? (n = l = s) : (l = l.next = s), (e = e.next));
          } while (e !== null);
          l === null ? (n = l = o) : (l = l.next = o);
        } else n = l = o;
        ((e = {
          baseState: t.baseState,
          firstBaseUpdate: n,
          lastBaseUpdate: l,
          shared: t.shared,
          callbacks: t.callbacks,
        }),
          (a.updateQueue = e));
        return;
      }
      ((a = e.lastBaseUpdate),
        a === null ? (e.firstBaseUpdate = o) : (a.next = o),
        (e.lastBaseUpdate = o));
    }
    var tc = !1;
    function Vn() {
      if (tc) {
        var a = Qt;
        if (a !== null) throw a;
      }
    }
    function Pn(a, o, e, t) {
      tc = !1;
      var n = a.updateQueue;
      be = !1;
      var l = n.firstBaseUpdate,
        s = n.lastBaseUpdate,
        i = n.shared.pending;
      if (i !== null) {
        n.shared.pending = null;
        var c = i,
          m = c.next;
        ((c.next = null), s === null ? (l = m) : (s.next = m), (s = c));
        var I = a.alternate;
        I !== null &&
          ((I = I.updateQueue),
          (i = I.lastBaseUpdate),
          i !== s &&
            (i === null ? (I.firstBaseUpdate = m) : (i.next = m),
            (I.lastBaseUpdate = c)));
      }
      if (l !== null) {
        var f = n.baseState;
        ((s = 0), (I = m = c = null), (i = l));
        do {
          var u = i.lane & -536870913,
            g = u !== i.lane;
          if (g ? (q & u) === u : (t & u) === u) {
            (u !== 0 && u === ut && (tc = !0),
              I !== null &&
                (I = I.next =
                  {
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var v = a,
                A = i;
              u = o;
              var y = e;
              switch (A.tag) {
                case 1:
                  if (((v = A.payload), typeof v == "function")) {
                    f = v.call(y, f, u);
                    break a;
                  }
                  f = v;
                  break a;
                case 3:
                  v.flags = (v.flags & -65537) | 128;
                case 0:
                  if (
                    ((v = A.payload),
                    (u = typeof v == "function" ? v.call(y, f, u) : v),
                    u == null)
                  )
                    break a;
                  f = K({}, f, u);
                  break a;
                case 2:
                  be = !0;
              }
            }
            ((u = i.callback),
              u !== null &&
                ((a.flags |= 64),
                g && (a.flags |= 8192),
                (g = n.callbacks),
                g === null ? (n.callbacks = [u]) : g.push(u)));
          } else
            ((g = {
              lane: u,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            }),
              I === null ? ((m = I = g), (c = f)) : (I = I.next = g),
              (s |= u));
          if (((i = i.next), i === null)) {
            if (((i = n.shared.pending), i === null)) break;
            ((g = i),
              (i = g.next),
              (g.next = null),
              (n.lastBaseUpdate = g),
              (n.shared.pending = null));
          }
        } while (!0);
        (I === null && (c = f),
          (n.baseState = c),
          (n.firstBaseUpdate = m),
          (n.lastBaseUpdate = I),
          l === null && (n.shared.lanes = 0),
          (Ze |= s),
          (a.lanes = s),
          (a.memoizedState = f));
      }
    }
    function W1(a, o) {
      if (typeof a != "function") throw Error(C(191, a));
      a.call(o);
    }
    function $1(a, o) {
      var e = a.callbacks;
      if (e !== null)
        for (a.callbacks = null, a = 0; a < e.length; a++) W1(e[a], o);
    }
    var Ve = Wo(null),
      Bs = Wo(0);
    function Kf(a, o) {
      ((a = pe), aa(Bs, a), aa(Ve, o), (pe = a | o.baseLanes));
    }
    function nc() {
      (aa(Bs, pe), aa(Ve, Ve.current));
    }
    function cu() {
      ((pe = Bs.current), _a(Ve), _a(Bs));
    }
    var Pa = Wo(null),
      Qa = null;
    function ze(a) {
      var o = a.alternate;
      (aa(Ga, Ga.current & 1),
        aa(Pa, a),
        Qa === null &&
          (o === null || Ve.current !== null || o.memoizedState !== null) &&
          (Qa = a));
    }
    function lc(a) {
      (aa(Ga, Ga.current), aa(Pa, a), Qa === null && (Qa = a));
    }
    function ap(a) {
      a.tag === 22
        ? (aa(Ga, Ga.current), aa(Pa, a), Qa === null && (Qa = a))
        : Ue();
    }
    function Ue() {
      (aa(Ga, Ga.current), aa(Pa, Pa.current));
    }
    function uo(a) {
      (_a(Pa), Qa === a && (Qa = null), _a(Ga));
    }
    var Ga = Wo(0);
    function nl(a, o) {
      (aa(Pa, Pa.current), aa(Ga, o));
    }
    function uu(a) {
      (_a(Ga), _a(Pa), Qa === a && (Qa = null));
    }
    function Hs(a) {
      for (var o = a; o !== null; ) {
        if (o.tag === 13) {
          var e = o.memoizedState;
          if (e !== null && ((e = e.dehydrated), e === null || Fc(e) || xu(e)))
            return o;
        } else if (
          o.tag === 19 &&
          o.memoizedProps.revealOrder !== "independent"
        ) {
          if ((o.flags & 128) !== 0) return o;
        } else if (o.child !== null) {
          ((o.child.return = o), (o = o.child));
          continue;
        }
        if (o === a) break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === a) return null;
          o = o.return;
        }
        ((o.sibling.return = o.return), (o = o.sibling));
      }
      return null;
    }
    var ue = 0,
      B = null,
      Y = null,
      wa = null,
      Os = !1,
      Jt = !1,
      ft = !1,
      Rs = 0,
      ll = 0,
      Wt = null,
      ag = 0;
    function sa() {
      throw Error(C(321));
    }
    function mu(a, o) {
      if (o === null) return !1;
      for (var e = 0; e < o.length && e < a.length; e++)
        if (!So(a[e], o[e])) return !1;
      return !0;
    }
    function fu(a, o, e, t, n, l) {
      return (
        (ue = l),
        (B = o),
        (o.memoizedState = null),
        (o.updateQueue = null),
        (o.lanes = 0),
        (w.H = a === null || a.memoizedState === null ? Bp : Hp),
        (ft = !1),
        (l = e(t, n)),
        (ft = !1),
        Jt && (l = ep(o, e, t, n)),
        op(a),
        l
      );
    }
    function op(a) {
      w.H = zs;
      var o = Y !== null && Y.next !== null;
      if (((ue = 0), (wa = Y = B = null), (Os = !1), (ll = 0), (Wt = null), o))
        throw Error(C(300));
      a === null ||
        Ma ||
        ((a = a.dependencies), a !== null && Ms(a) && (Ma = !0));
    }
    function ep(a, o, e, t) {
      B = a;
      var n = 0;
      do {
        if ((Jt && (Wt = null), (ll = 0), (Jt = !1), 25 <= n))
          throw Error(C(301));
        if (((n += 1), (wa = Y = null), a.updateQueue != null)) {
          var l = a.updateQueue;
          ((l.lastEffect = null),
            (l.events = null),
            (l.stores = null),
            l.memoCache != null && (l.memoCache.index = 0));
        }
        ((w.H = ig), (l = o(e, t)));
      } while (Jt);
      return l;
    }
    function og() {
      var a = w.H,
        o = a.useState()[0];
      return (
        (o = typeof o.then == "function" ? vl(o) : o),
        (a = a.useState()[0]),
        (Y !== null ? Y.memoizedState : null) !== a && (B.flags |= 1024),
        o
      );
    }
    function pu() {
      var a = Rs !== 0;
      return ((Rs = 0), a);
    }
    function du(a, o, e) {
      ((o.updateQueue = a.updateQueue), (o.flags &= -2053), (a.lanes &= ~e));
    }
    function Iu(a) {
      if (Os) {
        for (a = a.memoizedState; a !== null; ) {
          var o = a.queue;
          (o !== null && (o.pending = null), (a = a.next));
        }
        Os = !1;
      }
      ((ue = 0), (wa = Y = B = null), (Jt = !1), (ll = Rs = 0), (Wt = null));
    }
    function $a() {
      var a = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        wa === null ? (B.memoizedState = wa = a) : (wa = wa.next = a),
        wa
      );
    }
    function ca() {
      if (Y === null) {
        var a = B.alternate;
        a = a !== null ? a.memoizedState : null;
      } else a = Y.next;
      var o = wa === null ? B.memoizedState : wa.next;
      if (o !== null) ((wa = o), (Y = a));
      else {
        if (a === null)
          throw B.alternate === null ? Error(C(467)) : Error(C(310));
        ((Y = a),
          (a = {
            memoizedState: Y.memoizedState,
            baseState: Y.baseState,
            baseQueue: Y.baseQueue,
            queue: Y.queue,
            next: null,
          }),
          wa === null ? (B.memoizedState = wa = a) : (wa = wa.next = a));
      }
      return wa;
    }
    function nr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function vl(a) {
      var o = ll;
      return (
        (ll += 1),
        Wt === null && (Wt = []),
        (a = Q1(Wt, a, o)),
        (o = B),
        (wa === null ? o.memoizedState : wa.next) === null &&
          ((o = o.alternate),
          (w.H = o === null || o.memoizedState === null ? Bp : Hp)),
        a
      );
    }
    function lr(a) {
      if (a !== null && typeof a == "object") {
        if (typeof a.then == "function") return vl(a);
        if (a.$$typeof === UI) return;
        if (a.$$typeof === Zo) return ka(a);
      }
      throw Error(C(438, String(a)));
    }
    function hu(a) {
      var o = null,
        e = B.updateQueue;
      if ((e !== null && (o = e.memoCache), o == null)) {
        var t = B.alternate;
        t !== null &&
          ((t = t.updateQueue),
          t !== null &&
            ((t = t.memoCache),
            t != null &&
              (o = {
                data: t.data.map(function (n) {
                  return n.slice();
                }),
                index: 0,
              })));
      }
      if (
        (o == null && (o = { data: [], index: 0 }),
        e === null && ((e = nr()), (B.updateQueue = e)),
        (e.memoCache = o),
        (e = o.data[o.index]),
        e === void 0)
      )
        for (e = o.data[o.index] = Array(a), t = 0; t < a; t++) e[t] = zI;
      return (o.index++, e);
    }
    function me(a, o) {
      return typeof o == "function" ? o(a) : o;
    }
    function is(a) {
      var o = ca();
      return gu(o, Y, a);
    }
    function gu(a, o, e) {
      var t = a.queue;
      if (t === null) throw Error(C(311));
      t.lastRenderedReducer = e;
      var n = a.baseQueue,
        l = t.pending;
      if (l !== null) {
        if (n !== null) {
          var s = n.next;
          ((n.next = l.next), (l.next = s));
        }
        ((o.baseQueue = n = l), (t.pending = null));
      }
      if (((l = a.baseState), n === null)) a.memoizedState = l;
      else {
        o = n.next;
        var i = (s = null),
          c = null,
          m = o,
          I = !1;
        do {
          var f = m.lane & -536870913;
          if (f !== m.lane ? (q & f) === f : (ue & f) === f) {
            var u = m.revertLane;
            if (u === 0)
              (c !== null &&
                (c = c.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: m.action,
                    hasEagerState: m.hasEagerState,
                    eagerState: m.eagerState,
                    next: null,
                  }),
                f === ut && (I = !0));
            else if ((ue & u) === u) {
              ((m = m.next), u === ut && (I = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: m.revertLane,
                gesture: null,
                action: m.action,
                hasEagerState: m.hasEagerState,
                eagerState: m.eagerState,
                next: null,
              }),
                c === null ? ((i = c = f), (s = l)) : (c = c.next = f),
                (B.lanes |= u),
                (Ze |= u));
            ((f = m.action),
              ft && e(l, f),
              (l = m.hasEagerState ? m.eagerState : e(l, f)));
          } else
            ((u = {
              lane: f,
              revertLane: m.revertLane,
              gesture: m.gesture,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              c === null ? ((i = c = u), (s = l)) : (c = c.next = u),
              (B.lanes |= f),
              (Ze |= f));
          m = m.next;
        } while (m !== null && m !== o);
        if (
          (c === null ? (s = l) : (c.next = i),
          !So(l, a.memoizedState) && ((Ma = !0), I && ((e = Qt), e !== null)))
        )
          throw e;
        ((a.memoizedState = l),
          (a.baseState = s),
          (a.baseQueue = c),
          (t.lastRenderedState = l));
      }
      return (n === null && (t.lanes = 0), [a.memoizedState, t.dispatch]);
    }
    function Si(a) {
      var o = ca(),
        e = o.queue;
      if (e === null) throw Error(C(311));
      e.lastRenderedReducer = a;
      var t = e.dispatch,
        n = e.pending,
        l = o.memoizedState;
      if (n !== null) {
        e.pending = null;
        var s = (n = n.next);
        do ((l = a(l, s.action)), (s = s.next));
        while (s !== n);
        (So(l, o.memoizedState) || (Ma = !0),
          (o.memoizedState = l),
          o.baseQueue === null && (o.baseState = l),
          (e.lastRenderedState = l));
      }
      return [l, t];
    }
    function tp(a, o, e) {
      var t = B,
        n = ca(),
        l = R;
      if (l) {
        if (e === void 0) throw Error(C(407));
        e = e();
      } else e = o();
      var s = !So((Y || n).memoizedState, e);
      if (
        (s && ((n.memoizedState = e), (Ma = !0)),
        (n = n.queue),
        Su(sp.bind(null, t, n, a), [a]),
        (a =
          n.getSnapshot !== o ||
          s ||
          (wa !== null && (wa.memoizedState.tag & 1) !== 0)),
        ln(a ? 9 : 8, { destroy: void 0 }, lp.bind(null, t, n, e, o), null),
        a)
      ) {
        if (((t.flags |= 2048), Q === null)) throw Error(C(349));
        l || (ue & 127) !== 0 || np(t, o, e);
      }
      return e;
    }
    function np(a, o, e) {
      ((a.flags |= 16384),
        (a = { getSnapshot: o, value: e }),
        (o = B.updateQueue),
        o === null
          ? ((o = nr()), (B.updateQueue = o), (o.stores = [a]))
          : ((e = o.stores), e === null ? (o.stores = [a]) : e.push(a)));
    }
    function lp(a, o, e, t) {
      ((o.value = e), (o.getSnapshot = t), rp(o) && ip(a));
    }
    function sp(a, o, e) {
      return e(function () {
        rp(o) && ip(a);
      });
    }
    function rp(a) {
      var o = a.getSnapshot;
      a = a.value;
      try {
        var e = o();
        return !So(a, e);
      } catch {
        return !0;
      }
    }
    function ip(a) {
      var o = St(a, 2);
      o !== null && lo(o, a, 2);
    }
    function sc(a) {
      var o = $a();
      if (typeof a == "function") {
        var e = a;
        if (((a = e()), ft)) {
          Ee(!0);
          try {
            e();
          } finally {
            Ee(!1);
          }
        }
      }
      return (
        (o.memoizedState = o.baseState = a),
        (o.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: me,
          lastRenderedState: a,
        }),
        o
      );
    }
    function cp(a, o, e, t) {
      return ((a.baseState = e), gu(a, Y, typeof t == "function" ? t : me));
    }
    function eg(a, o, e, t, n) {
      if (rr(a)) throw Error(C(485));
      if (((a = o.action), a !== null)) {
        var l = {
          payload: n,
          action: a,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function (s) {
            l.listeners.push(s);
          },
        };
        (w.T !== null ? e(!0) : (l.isTransition = !1),
          t(l),
          (e = o.pending),
          e === null
            ? ((l.next = o.pending = l), up(o, l))
            : ((l.next = e.next), (o.pending = e.next = l)));
      }
    }
    function up(a, o) {
      var e = o.action,
        t = o.payload,
        n = a.state;
      if (o.isTransition) {
        var l = w.T,
          s = {};
        ((s.types = l !== null ? l.types : null), (w.T = s));
        try {
          var i = e(n, t),
            c = w.S;
          (c !== null && c(s, i), Jf(a, o, i));
        } catch (m) {
          rc(a, o, m);
        } finally {
          (l !== null && s.types !== null && (l.types = s.types), (w.T = l));
        }
      } else
        try {
          ((l = e(n, t)), Jf(a, o, l));
        } catch (m) {
          rc(a, o, m);
        }
    }
    function Jf(a, o, e) {
      e !== null && typeof e == "object" && typeof e.then == "function"
        ? e.then(
            function (t) {
              Wf(a, o, t);
            },
            function (t) {
              return rc(a, o, t);
            },
          )
        : Wf(a, o, e);
    }
    function Wf(a, o, e) {
      ((o.status = "fulfilled"),
        (o.value = e),
        mp(o),
        (a.state = e),
        (o = a.pending),
        o !== null &&
          ((e = o.next),
          e === o
            ? (a.pending = null)
            : ((e = e.next), (o.next = e), up(a, e))));
    }
    function rc(a, o, e) {
      var t = a.pending;
      if (((a.pending = null), t !== null)) {
        t = t.next;
        do ((o.status = "rejected"), (o.reason = e), mp(o), (o = o.next));
        while (o !== t);
      }
      a.action = null;
    }
    function mp(a) {
      a = a.listeners;
      for (var o = 0; o < a.length; o++) (0, a[o])();
    }
    function fp(a, o) {
      return o;
    }
    function $f(a, o) {
      if (R) {
        var e = Q.formState;
        if (e !== null) {
          a: {
            var t = B;
            if (R) {
              if ($) {
                o: {
                  for (var n = $, l = wo; n.nodeType !== 8; ) {
                    if (!l) {
                      n = null;
                      break o;
                    }
                    if (((n = No(n.nextSibling)), n === null)) {
                      n = null;
                      break o;
                    }
                  }
                  ((l = n.data), (n = l === "F!" || l === "F" ? n : null));
                }
                if (n) {
                  (($ = No(n.nextSibling)), (t = n.data === "F!"));
                  break a;
                }
              }
              Ge(t);
            }
            t = !1;
          }
          t && (o = e[0]);
        }
      }
      return (
        (e = $a()),
        (e.memoizedState = e.baseState = o),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: fp,
          lastRenderedState: o,
        }),
        (e.queue = t),
        (e = Np.bind(null, B, t)),
        (t.dispatch = e),
        (t = sc(!1)),
        (l = Au.bind(null, B, !1, t.queue)),
        (t = $a()),
        (n = { state: o, dispatch: null, action: a, pending: null }),
        (t.queue = n),
        (e = eg.bind(null, B, n, l, e)),
        (n.dispatch = e),
        (t.memoizedState = a),
        [o, e, !1]
      );
    }
    function a0(a) {
      var o = ca();
      return pp(o, Y, a);
    }
    function pp(a, o, e) {
      if (
        ((o = gu(a, o, fp)[0]),
        (a = is(me)[0]),
        typeof o == "object" && o !== null && typeof o.then == "function")
      )
        try {
          var t = vl(o);
        } catch (s) {
          throw s === Sn ? tr : s;
        }
      else t = o;
      o = ca();
      var n = o.queue,
        l = n.dispatch;
      return (
        e !== o.memoizedState &&
          ((B.flags |= 2048),
          ln(9, { destroy: void 0 }, tg.bind(null, n, e), null)),
        [t, l, a]
      );
    }
    function tg(a, o) {
      a.action = o;
    }
    function o0(a) {
      var o = ca(),
        e = Y;
      if (e !== null) return pp(o, e, a);
      (ca(), (o = o.memoizedState), (e = ca()));
      var t = e.queue.dispatch;
      return ((e.memoizedState = a), [o, t, !1]);
    }
    function ln(a, o, e, t) {
      return (
        (a = { tag: a, create: e, deps: t, inst: o, next: null }),
        (o = B.updateQueue),
        o === null && ((o = nr()), (B.updateQueue = o)),
        (e = o.lastEffect),
        e === null
          ? (o.lastEffect = a.next = a)
          : ((t = e.next), (e.next = a), (a.next = t), (o.lastEffect = a)),
        a
      );
    }
    function dp() {
      return ca().memoizedState;
    }
    function cs(a, o, e, t) {
      var n = $a();
      ((B.flags |= a),
        (n.memoizedState = ln(
          1 | o,
          { destroy: void 0 },
          e,
          t === void 0 ? null : t,
        )));
    }
    function sr(a, o, e, t) {
      var n = ca();
      t = t === void 0 ? null : t;
      var l = n.memoizedState.inst;
      Y !== null && t !== null && mu(t, Y.memoizedState.deps)
        ? (n.memoizedState = ln(o, l, e, t))
        : ((B.flags |= a), (n.memoizedState = ln(1 | o, l, e, t)));
    }
    function e0(a, o) {
      cs(8390656, 8, a, o);
    }
    function Su(a, o) {
      sr(2048, 8, a, o);
    }
    function ng(a) {
      B.flags |= 4;
      var o = B.updateQueue;
      if (o === null) ((o = nr()), (B.updateQueue = o), (o.events = [a]));
      else {
        var e = o.events;
        e === null ? (o.events = [a]) : e.push(a);
      }
    }
    function Ip(a) {
      var o = ca().memoizedState;
      return (
        ng({ ref: o, nextImpl: a }),
        function () {
          if ((_ & 2) !== 0) throw Error(C(440));
          return o.impl.apply(void 0, arguments);
        }
      );
    }
    function hp(a, o) {
      return sr(4, 2, a, o);
    }
    function gp(a, o) {
      return sr(4, 4, a, o);
    }
    function Sp(a, o) {
      if (typeof o == "function") {
        a = a();
        var e = o(a);
        return function () {
          typeof e == "function" ? e() : o(null);
        };
      }
      if (o != null)
        return (
          (a = a()),
          (o.current = a),
          function () {
            o.current = null;
          }
        );
    }
    function Cp(a, o, e) {
      ((e = e != null ? e.concat([a]) : null),
        sr(4, 4, Sp.bind(null, o, a), e));
    }
    function Cu() {}
    function vp(a, o) {
      var e = ca();
      o = o === void 0 ? null : o;
      var t = e.memoizedState;
      return o !== null && mu(o, t[1]) ? t[0] : ((e.memoizedState = [a, o]), a);
    }
    function yp(a, o) {
      var e = ca();
      o = o === void 0 ? null : o;
      var t = e.memoizedState;
      if (o !== null && mu(o, t[1])) return t[0];
      if (((t = a()), ft)) {
        Ee(!0);
        try {
          a();
        } finally {
          Ee(!1);
        }
      }
      return ((e.memoizedState = [t, o]), t);
    }
    function vu(a, o, e) {
      return e === void 0 || ((ue & 1073741824) !== 0 && (q & 261930) === 0)
        ? (a.memoizedState = o)
        : ((a.memoizedState = e), (a = pd()), (B.lanes |= a), (Ze |= a), e);
    }
    function Ap(a, o, e, t) {
      return So(e, o)
        ? e
        : Ve.current !== null
          ? ((a = vu(a, e, t)), So(a, o) || (Ma = !0), a)
          : (ue & 106) === 0 || ((ue & 1073741824) !== 0 && (q & 261930) === 0)
            ? ((Ma = !0), (a.memoizedState = e))
            : ((a = pd()), (B.lanes |= a), (Ze |= a), o);
    }
    function bp(a, o, e, t, n) {
      var l = G.p;
      G.p = l !== 0 && 8 > l ? l : 8;
      var s = w.T,
        i = {};
      ((i.types = s !== null ? s.types : null), (w.T = i), Au(a, !1, o, e));
      try {
        var c = n(),
          m = w.S;
        if (
          (m !== null && m(i, c),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var I = $h(c, t);
          Zn(a, o, I, go(a));
        } else Zn(a, o, t, go(a));
      } catch (f) {
        Zn(a, o, { then: function () {}, status: "rejected", reason: f }, go());
      } finally {
        ((G.p = l),
          s !== null && i.types !== null && (s.types = i.types),
          (w.T = s));
      }
    }
    function lg() {}
    function ic(a, o, e, t) {
      if (a.tag !== 5) throw Error(C(476));
      var n = Tp(a).queue;
      bp(
        a,
        n,
        o,
        et,
        e === null
          ? lg
          : function () {
              return (Ep(a), e(t));
            },
      );
    }
    function Tp(a) {
      var o = a.memoizedState;
      if (o !== null) return o;
      o = {
        memoizedState: et,
        baseState: et,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: me,
          lastRenderedState: et,
        },
        next: null,
      };
      var e = {};
      return (
        (o.next = {
          memoizedState: e,
          baseState: e,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: me,
            lastRenderedState: e,
          },
          next: null,
        }),
        (a.memoizedState = o),
        (a = a.alternate),
        a !== null && (a.memoizedState = o),
        o
      );
    }
    function Ep(a) {
      var o = Tp(a);
      (o.next === null && (o = a.alternate.memoizedState),
        Zn(a, o.next.queue, {}, go()));
    }
    function yu() {
      return ka(pn);
    }
    function Lp() {
      return ca().memoizedState;
    }
    function wp() {
      return ca().memoizedState;
    }
    function sg(a) {
      for (var o = a.return; o !== null; ) {
        switch (o.tag) {
          case 24:
          case 3:
            var e = go();
            a = Oe(e);
            var t = Re(o, a, e);
            (t !== null && (lo(t, o, e), Gn(t, o, e)),
              (o = { cache: lu() }),
              (a.payload = o));
            return;
        }
        o = o.return;
      }
    }
    function rg(a, o, e) {
      var t = go();
      ((e = {
        lane: t,
        revertLane: 0,
        gesture: null,
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        rr(a)
          ? Mp(o, e)
          : ((e = eu(a, o, e, t)), e !== null && (lo(e, a, t), Dp(e, o, t))));
    }
    function Np(a, o, e) {
      var t = go();
      Zn(a, o, e, t);
    }
    function Zn(a, o, e, t) {
      var n = {
        lane: t,
        revertLane: 0,
        gesture: null,
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (rr(a)) Mp(o, n);
      else {
        var l = a.alternate;
        if (
          a.lanes === 0 &&
          (l === null || l.lanes === 0) &&
          ((l = o.lastRenderedReducer), l !== null)
        )
          try {
            var s = o.lastRenderedState,
              i = l(s, e);
            if (((n.hasEagerState = !0), (n.eagerState = i), So(i, s)))
              return (or(a, o, n, 0), Q === null && ar(), !1);
          } catch {}
        if (((e = eu(a, o, n, t)), e !== null))
          return (lo(e, a, t), Dp(e, o, t), !0);
      }
      return !1;
    }
    function Au(a, o, e, t) {
      if (
        ((t = {
          lane: 2,
          revertLane: Ou(),
          gesture: null,
          action: t,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        rr(a))
      ) {
        if (o) throw Error(C(479));
      } else ((o = eu(a, e, t, 2)), o !== null && lo(o, a, 2));
    }
    function rr(a) {
      var o = a.alternate;
      return a === B || (o !== null && o === B);
    }
    function Mp(a, o) {
      Jt = Os = !0;
      var e = a.pending;
      (e === null ? (o.next = o) : ((o.next = e.next), (e.next = o)),
        (a.pending = o));
    }
    function Dp(a, o, e) {
      if ((e & 4194048) !== 0) {
        var t = o.lanes;
        ((t &= a.pendingLanes), (e |= t), (o.lanes = e), d1(a, e));
      }
    }
    var zs = {
        readContext: ka,
        use: lr,
        useCallback: sa,
        useContext: sa,
        useEffect: sa,
        useImperativeHandle: sa,
        useLayoutEffect: sa,
        useInsertionEffect: sa,
        useMemo: sa,
        useReducer: sa,
        useRef: sa,
        useState: sa,
        useDebugValue: sa,
        useDeferredValue: sa,
        useTransition: sa,
        useSyncExternalStore: sa,
        useId: sa,
        useHostTransitionStatus: sa,
        useFormState: sa,
        useActionState: sa,
        useOptimistic: sa,
        useMemoCache: sa,
        useCacheRefresh: sa,
        useEffectEvent: sa,
      },
      Bp = {
        readContext: ka,
        use: lr,
        useCallback: function (a, o) {
          return (($a().memoizedState = [a, o === void 0 ? null : o]), a);
        },
        useContext: ka,
        useEffect: e0,
        useImperativeHandle: function (a, o, e) {
          ((e = e != null ? e.concat([a]) : null),
            cs(4194308, 4, Sp.bind(null, o, a), e));
        },
        useLayoutEffect: function (a, o) {
          return cs(4194308, 4, a, o);
        },
        useInsertionEffect: function (a, o) {
          cs(4, 2, a, o);
        },
        useMemo: function (a, o) {
          var e = $a();
          o = o === void 0 ? null : o;
          var t = a();
          if (ft) {
            Ee(!0);
            try {
              a();
            } finally {
              Ee(!1);
            }
          }
          return ((e.memoizedState = [t, o]), t);
        },
        useReducer: function (a, o, e) {
          var t = $a();
          if (e !== void 0) {
            var n = e(o);
            if (ft) {
              Ee(!0);
              try {
                e(o);
              } finally {
                Ee(!1);
              }
            }
          } else n = o;
          return (
            (t.memoizedState = t.baseState = n),
            (a = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: a,
              lastRenderedState: n,
            }),
            (t.queue = a),
            (a = a.dispatch = rg.bind(null, B, a)),
            [t.memoizedState, a]
          );
        },
        useRef: function (a) {
          var o = $a();
          return ((a = { current: a }), (o.memoizedState = a));
        },
        useState: function (a) {
          a = sc(a);
          var o = a.queue,
            e = Np.bind(null, B, o);
          return ((o.dispatch = e), [a.memoizedState, e]);
        },
        useDebugValue: Cu,
        useDeferredValue: function (a, o) {
          var e = $a();
          return vu(e, a, o);
        },
        useTransition: function () {
          var a = sc(!1);
          return (
            (a = bp.bind(null, B, a.queue, !0, !1)),
            ($a().memoizedState = a),
            [!1, a]
          );
        },
        useSyncExternalStore: function (a, o, e) {
          var t = B,
            n = $a();
          if (R) {
            if (e === void 0) throw Error(C(407));
            e = e();
          } else {
            if (((e = o()), Q === null)) throw Error(C(349));
            (q & 127) !== 0 || np(t, o, e);
          }
          n.memoizedState = e;
          var l = { value: e, getSnapshot: o };
          return (
            (n.queue = l),
            e0(sp.bind(null, t, l, a), [a]),
            (t.flags |= 2048),
            ln(9, { destroy: void 0 }, lp.bind(null, t, l, e, o), null),
            e
          );
        },
        useId: function () {
          var a = $a(),
            o = Q.identifierPrefix;
          if (R) {
            var e = Yo,
              t = Xo;
            ((e = (t & ~(1 << (32 - ho(t) - 1))).toString(32) + e),
              (o = "_" + o + "R_" + e),
              (e = Rs++),
              0 < e && (o += "H" + e.toString(32)),
              (o += "_"));
          } else ((e = ag++), (o = "_" + o + "r_" + e.toString(32) + "_"));
          return (a.memoizedState = o);
        },
        useHostTransitionStatus: yu,
        useFormState: $f,
        useActionState: $f,
        useOptimistic: function (a) {
          var o = $a();
          o.memoizedState = o.baseState = a;
          var e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (o.queue = e),
            (o = Au.bind(null, B, !0, e)),
            (e.dispatch = o),
            [a, o]
          );
        },
        useMemoCache: hu,
        useCacheRefresh: function () {
          return ($a().memoizedState = sg.bind(null, B));
        },
        useEffectEvent: function (a) {
          var o = $a(),
            e = { impl: a };
          return (
            (o.memoizedState = e),
            function () {
              if ((_ & 2) !== 0) throw Error(C(440));
              return e.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Hp = {
        readContext: ka,
        use: lr,
        useCallback: vp,
        useContext: ka,
        useEffect: Su,
        useImperativeHandle: Cp,
        useInsertionEffect: hp,
        useLayoutEffect: gp,
        useMemo: yp,
        useReducer: is,
        useRef: dp,
        useState: function () {
          return is(me);
        },
        useDebugValue: Cu,
        useDeferredValue: function (a, o) {
          var e = ca();
          return Ap(e, Y.memoizedState, a, o);
        },
        useTransition: function () {
          var a = is(me)[0],
            o = ca().memoizedState;
          return [typeof a == "boolean" ? a : vl(a), o];
        },
        useSyncExternalStore: tp,
        useId: Lp,
        useHostTransitionStatus: yu,
        useFormState: a0,
        useActionState: a0,
        useOptimistic: function (a, o) {
          var e = ca();
          return cp(e, Y, a, o);
        },
        useMemoCache: hu,
        useCacheRefresh: wp,
        useEffectEvent: Ip,
      },
      ig = {
        readContext: ka,
        use: lr,
        useCallback: vp,
        useContext: ka,
        useEffect: Su,
        useImperativeHandle: Cp,
        useInsertionEffect: hp,
        useLayoutEffect: gp,
        useMemo: yp,
        useReducer: Si,
        useRef: dp,
        useState: function () {
          return Si(me);
        },
        useDebugValue: Cu,
        useDeferredValue: function (a, o) {
          var e = ca();
          return Y === null ? vu(e, a, o) : Ap(e, Y.memoizedState, a, o);
        },
        useTransition: function () {
          var a = Si(me)[0],
            o = ca().memoizedState;
          return [typeof a == "boolean" ? a : vl(a), o];
        },
        useSyncExternalStore: tp,
        useId: Lp,
        useHostTransitionStatus: yu,
        useFormState: o0,
        useActionState: o0,
        useOptimistic: function (a, o) {
          var e = ca();
          return Y !== null
            ? cp(e, Y, a, o)
            : ((e.baseState = a), [a, e.queue.dispatch]);
        },
        useMemoCache: hu,
        useCacheRefresh: wp,
        useEffectEvent: Ip,
      };
    function Ci(a, o, e, t) {
      ((o = a.memoizedState),
        (e = e(t, o)),
        (e = e == null ? o : K({}, o, e)),
        (a.memoizedState = e),
        a.lanes === 0 && (a.updateQueue.baseState = e));
    }
    var cc = {
      enqueueSetState: function (a, o, e) {
        a = a._reactInternals;
        var t = go(),
          n = Oe(t);
        ((n.payload = o),
          e != null && (n.callback = e),
          (o = Re(a, n, t)),
          o !== null && (lo(o, a, t), Gn(o, a, t)));
      },
      enqueueReplaceState: function (a, o, e) {
        a = a._reactInternals;
        var t = go(),
          n = Oe(t);
        ((n.tag = 1),
          (n.payload = o),
          e != null && (n.callback = e),
          (o = Re(a, n, t)),
          o !== null && (lo(o, a, t), Gn(o, a, t)));
      },
      enqueueForceUpdate: function (a, o) {
        a = a._reactInternals;
        var e = go(),
          t = Oe(e);
        ((t.tag = 2),
          o != null && (t.callback = o),
          (o = Re(a, t, e)),
          o !== null && (lo(o, a, e), Gn(o, a, e)));
      },
    };
    function t0(a, o, e, t, n, l, s) {
      return (
        (a = a.stateNode),
        typeof a.shouldComponentUpdate == "function"
          ? a.shouldComponentUpdate(t, l, s)
          : o.prototype && o.prototype.isPureReactComponent
            ? !al(e, t) || !al(n, l)
            : !0
      );
    }
    function n0(a, o, e, t) {
      ((a = o.state),
        typeof o.componentWillReceiveProps == "function" &&
          o.componentWillReceiveProps(e, t),
        typeof o.UNSAFE_componentWillReceiveProps == "function" &&
          o.UNSAFE_componentWillReceiveProps(e, t),
        o.state !== a && cc.enqueueReplaceState(o, o.state, null));
    }
    function pt(a, o) {
      var e = o;
      if ("ref" in o) {
        e = {};
        for (var t in o) t !== "ref" && (e[t] = o[t]);
      }
      if ((a = a.defaultProps)) {
        e === o && (e = K({}, e));
        for (var n in a) e[n] === void 0 && (e[n] = a[n]);
      }
      return e;
    }
    function Op(a) {
      Es(a);
    }
    function Rp(a) {
      console.error(a);
    }
    function zp(a) {
      Es(a);
    }
    function Us(a, o) {
      try {
        var e = a.onUncaughtError;
        e(o.value, { componentStack: o.stack });
      } catch (t) {
        setTimeout(function () {
          throw t;
        });
      }
    }
    function l0(a, o, e) {
      try {
        var t = a.onCaughtError;
        t(e.value, {
          componentStack: e.stack,
          errorBoundary: o.tag === 1 ? o.stateNode : null,
        });
      } catch (n) {
        setTimeout(function () {
          throw n;
        });
      }
    }
    function uc(a, o, e) {
      return (
        (e = Oe(e)),
        (e.tag = 3),
        (e.payload = { element: null }),
        (e.callback = function () {
          Us(a, o);
        }),
        e
      );
    }
    function Up(a) {
      return ((a = Oe(a)), (a.tag = 3), a);
    }
    function xp(a, o, e, t) {
      var n = e.type.getDerivedStateFromError;
      if (typeof n == "function") {
        var l = t.value;
        ((a.payload = function () {
          return n(l);
        }),
          (a.callback = function () {
            l0(o, e, t);
          }));
      }
      var s = e.stateNode;
      s !== null &&
        typeof s.componentDidCatch == "function" &&
        (a.callback = function () {
          (l0(o, e, t),
            typeof n != "function" &&
              (xe === null ? (xe = new Set([this])) : xe.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : "",
          });
        });
    }
    function cg(a, o, e, t, n) {
      if (
        ((e.flags |= 32768),
        t !== null && typeof t == "object" && typeof t.then == "function")
      ) {
        if (
          ((o = e.alternate),
          o !== null && it(o, e, n, !0),
          (e = Pa.current),
          e !== null)
        ) {
          switch (e.tag) {
            case 31:
            case 13:
            case 19:
              return (
                Qa === null
                  ? Ps()
                  : e.alternate === null && ra === 0 && (ra = 3),
                (e.flags &= -257),
                (e.flags |= 65536),
                (e.lanes = n),
                t === Ds
                  ? (e.flags |= 16384)
                  : ((o = e.updateQueue),
                    o === null ? (e.updateQueue = new Set([t])) : o.add(t),
                    Li(a, t, n)),
                !1
              );
            case 22:
              return (
                (e.flags |= 65536),
                t === Ds
                  ? (e.flags |= 16384)
                  : ((o = e.updateQueue),
                    o === null
                      ? ((o = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([t]),
                        }),
                        (e.updateQueue = o))
                      : ((e = o.retryQueue),
                        e === null ? (o.retryQueue = new Set([t])) : e.add(t)),
                    Li(a, t, n)),
                !1
              );
          }
          throw Error(C(435, e.tag));
        }
        return (Li(a, t, n), Ps(), !1);
      }
      if (R)
        return (
          (o = Pa.current),
          o !== null
            ? ((o.flags & 65536) === 0 && (o.flags |= 256),
              (o.flags |= 65536),
              (o.lanes = n),
              t !== Wi && ((a = Error(C(422), { cause: t })), el(Lo(a, e))))
            : (t !== Wi && ((o = Error(C(423), { cause: t })), el(Lo(o, e))),
              (a = a.current.alternate),
              (a.flags |= 65536),
              (n &= -n),
              (a.lanes |= n),
              (t = Lo(t, e)),
              (n = uc(a.stateNode, t, n)),
              gi(a, n),
              ra !== 4 && (ra = 2)),
          !1
        );
      var l = Error(C(520), { cause: t });
      if (
        ((l = Lo(l, e)),
        Qn === null ? (Qn = [l]) : Qn.push(l),
        ra !== 4 && (ra = 2),
        o === null)
      )
        return !0;
      ((t = Lo(t, e)), (e = o));
      do {
        switch (e.tag) {
          case 3:
            return (
              (e.flags |= 65536),
              (a = n & -n),
              (e.lanes |= a),
              (a = uc(e.stateNode, t, a)),
              gi(e, a),
              !1
            );
          case 1:
            if (
              ((o = e.type),
              (l = e.stateNode),
              (e.flags & 128) === 0 &&
                (typeof o.getDerivedStateFromError == "function" ||
                  (l !== null &&
                    typeof l.componentDidCatch == "function" &&
                    (xe === null || !xe.has(l)))))
            )
              return (
                (e.flags |= 65536),
                (n &= -n),
                (e.lanes |= n),
                (n = Up(n)),
                xp(n, a, e, t),
                gi(e, n),
                !1
              );
            break;
          case 22:
            if (e.memoizedState !== null) return ((e.flags |= 65536), !1);
        }
        e = e.return;
      } while (e !== null);
      return !1;
    }
    var bu = Error(C(461)),
      Ma = !1;
    function Da(a, o, e, t) {
      o.child = a === null ? J1(o, null, e, t) : mt(o, a.child, e, t);
    }
    function s0(a, o, e, t, n) {
      e = e.render;
      var l = o.ref;
      if ("ref" in t) {
        var s = {};
        for (var i in t) i !== "ref" && (s[i] = t[i]);
      } else s = t;
      return (
        ct(o),
        (t = fu(a, o, e, s, l, n)),
        (i = pu()),
        a !== null && !Ma
          ? (du(a, o, n), fe(a, o, n))
          : (R && i && er(o), (o.flags |= 1), Da(a, o, t, n), o.child)
      );
    }
    function r0(a, o, e, t, n) {
      if (a === null) {
        var l = e.type;
        return typeof l == "function" &&
          !tu(l) &&
          l.defaultProps === void 0 &&
          e.compare === null
          ? ((o.tag = 15), (o.type = l), qp(a, o, l, t, n))
          : ((a = ls(e.type, null, t, o, o.mode, n)),
            (a.ref = o.ref),
            (a.return = o),
            (o.child = a));
      }
      if (((l = a.child), !Eu(a, n))) {
        var s = l.memoizedProps;
        if (
          ((e = e.compare),
          (e = e !== null ? e : al),
          e(s, t) && a.ref === o.ref)
        )
          return fe(a, o, n);
      }
      return (
        (o.flags |= 1),
        (a = se(l, t)),
        (a.ref = o.ref),
        (a.return = o),
        (o.child = a)
      );
    }
    function qp(a, o, e, t, n) {
      if (a !== null) {
        var l = a.memoizedProps;
        if (al(l, t) && a.ref === o.ref)
          if (((Ma = !1), (o.pendingProps = t = l), Eu(a, n)))
            (a.flags & 131072) !== 0 && (Ma = !0);
          else return ((o.lanes = a.lanes), fe(a, o, n));
      }
      return mc(a, o, e, t, n);
    }
    function Fp(a, o, e, t) {
      var n = t.children,
        l = a !== null ? a.memoizedState : null;
      if (
        (a === null &&
          o.stateNode === null &&
          (o.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.mode === "hidden")
      ) {
        if ((o.flags & 128) !== 0) {
          if (((l = l !== null ? l.baseLanes | e : e), a !== null)) {
            for (t = o.child = a.child, n = 0; t !== null; )
              ((n = n | t.lanes | t.childLanes), (t = t.sibling));
            t = n & ~l;
          } else ((t = 0), (o.child = null));
          return i0(a, o, l, e, t);
        }
        if ((e & 536870912) !== 0)
          ((o.memoizedState = { baseLanes: 0, cachePool: null }),
            a !== null && rs(o, l !== null ? l.cachePool : null),
            l !== null ? Kf(o, l) : nc(),
            ap(o));
        else
          return (
            (t = o.lanes = 536870912),
            i0(a, o, l !== null ? l.baseLanes | e : e, e, t)
          );
      } else
        l !== null
          ? (rs(o, l.cachePool), Kf(o, l), Ue(), (o.memoizedState = null))
          : (a !== null && rs(o, null), nc(), Ue());
      return (Da(a, o, n, e), o.child);
    }
    function jn(a, o) {
      return (
        (a !== null && a.tag === 22) ||
          o.stateNode !== null ||
          (o.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        o.sibling
      );
    }
    function i0(a, o, e, t, n) {
      var l = su();
      return (
        (l = l === null ? null : { parent: Na._currentValue, pool: l }),
        (o.memoizedState = { baseLanes: e, cachePool: l }),
        a !== null && rs(o, null),
        nc(),
        ap(o),
        a !== null && it(a, o, t, !0),
        (o.childLanes = n),
        null
      );
    }
    function us(a, o) {
      return (
        (o = ir({ mode: o.mode, children: o.children }, a.mode)),
        (o.ref = a.ref),
        (a.child = o),
        (o.return = a),
        o
      );
    }
    function c0(a, o, e) {
      return (
        mt(o, a.child, null, e),
        (a = us(o, o.pendingProps)),
        (a.flags |= 2),
        uo(o),
        (o.memoizedState = null),
        a
      );
    }
    function ug(a, o, e) {
      var t = o.pendingProps,
        n = (o.flags & 128) !== 0;
      if (((o.flags &= -129), a === null)) {
        if (R) {
          if (t.mode === "hidden")
            return (
              (a = us(o, t)),
              (o.lanes = 536870912),
              (a.memoizedState = { baseLanes: 0, cachePool: null }),
              jn(null, a)
            );
          if (
            (lc(o),
            (a = $)
              ? ((a = Fd(a, wo)),
                (a = a !== null && a.data === "&" ? a : null),
                a !== null &&
                  ((o.memoizedState = {
                    dehydrated: a,
                    treeContext: _e !== null ? { id: Xo, overflow: Yo } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (e = P1(a)),
                  (e.return = o),
                  (o.child = e),
                  (Ua = o),
                  ($ = null)))
              : (a = null),
            a === null)
          )
            throw Ge(o);
          return ((o.lanes = 536870912), null);
        }
        return us(o, t);
      }
      var l = a.memoizedState;
      if (l !== null) {
        var s = l.dehydrated;
        if ((lc(o), n))
          if (o.flags & 256) ((o.flags &= -257), (o = c0(a, o, e)));
          else if (o.memoizedState !== null)
            ((o.child = a.child), (o.flags |= 128), (o = null));
          else throw Error(C(558));
        else if (
          (Ma || it(a, o, e, !1), (n = (e & a.childLanes) !== 0), Ma || n)
        ) {
          if (Ve.current === null) {
            if (
              ((t = Q),
              t !== null && ((s = I1(t, e)), s !== 0 && s !== l.retryLane))
            )
              throw ((l.retryLane = s), St(a, s), lo(t, a, s), bu);
            Ps();
          }
          o = c0(a, o, e);
        } else
          ((a = l.treeContext),
            ($ = No(s.nextSibling)),
            (Ua = o),
            (R = !0),
            (He = null),
            (wo = !1),
            a !== null && j1(o, a),
            (o = us(o, t)),
            (o.flags |= 134221824));
        return o;
      }
      return (
        (a = se(a.child, { mode: t.mode, children: t.children })),
        (a.ref = o.ref),
        (o.child = a),
        (a.return = o),
        a
      );
    }
    function Bt(a, o) {
      var e = o.ref;
      if (e === null) a !== null && a.ref !== null && (o.flags |= 4194816);
      else {
        if (typeof e != "function" && typeof e != "object") throw Error(C(284));
        (a === null || a.ref !== e) && (o.flags |= 4194816);
      }
    }
    function mc(a, o, e, t, n) {
      return (
        ct(o),
        (e = fu(a, o, e, t, void 0, n)),
        (t = pu()),
        a !== null && !Ma
          ? (du(a, o, n), fe(a, o, n))
          : (R && t && er(o), (o.flags |= 1), Da(a, o, e, n), o.child)
      );
    }
    function u0(a, o, e, t, n, l) {
      return (
        ct(o),
        (o.updateQueue = null),
        (e = ep(o, t, e, n)),
        op(a),
        (t = pu()),
        a !== null && !Ma
          ? (du(a, o, l), fe(a, o, l))
          : (R && t && er(o), (o.flags |= 1), Da(a, o, e, l), o.child)
      );
    }
    function m0(a, o, e, t, n) {
      if ((ct(o), o.stateNode === null)) {
        var l = Gt,
          s = e.contextType;
        (typeof s == "object" && s !== null && (l = ka(s)),
          (l = new e(t, l)),
          (o.memoizedState =
            l.state !== null && l.state !== void 0 ? l.state : null),
          (l.updater = cc),
          (o.stateNode = l),
          (l._reactInternals = o),
          (l = o.stateNode),
          (l.props = t),
          (l.state = o.memoizedState),
          (l.refs = {}),
          iu(o),
          (s = e.contextType),
          (l.context = typeof s == "object" && s !== null ? ka(s) : Gt),
          (l.state = o.memoizedState),
          (s = e.getDerivedStateFromProps),
          typeof s == "function" &&
            (Ci(o, e, s, t), (l.state = o.memoizedState)),
          typeof e.getDerivedStateFromProps == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function" ||
            (typeof l.UNSAFE_componentWillMount != "function" &&
              typeof l.componentWillMount != "function") ||
            ((s = l.state),
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" &&
              l.UNSAFE_componentWillMount(),
            s !== l.state && cc.enqueueReplaceState(l, l.state, null),
            Pn(o, t, l, n),
            Vn(),
            (l.state = o.memoizedState)),
          typeof l.componentDidMount == "function" && (o.flags |= 4194308),
          (t = !0));
      } else if (a === null) {
        l = o.stateNode;
        var i = o.memoizedProps,
          c = pt(e, i);
        l.props = c;
        var m = l.context,
          I = e.contextType;
        ((s = Gt), typeof I == "object" && I !== null && (s = ka(I)));
        var f = e.getDerivedStateFromProps;
        ((I =
          typeof f == "function" ||
          typeof l.getSnapshotBeforeUpdate == "function"),
          (i = o.pendingProps !== i),
          I ||
            (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
              typeof l.componentWillReceiveProps != "function") ||
            ((i || m !== s) && n0(o, l, t, s)),
          (be = !1));
        var u = o.memoizedState;
        ((l.state = u),
          Pn(o, t, l, n),
          Vn(),
          (m = o.memoizedState),
          i || u !== m || be
            ? (typeof f == "function" &&
                (Ci(o, e, f, t), (m = o.memoizedState)),
              (c = be || t0(o, e, c, t, u, m, s))
                ? (I ||
                    (typeof l.UNSAFE_componentWillMount != "function" &&
                      typeof l.componentWillMount != "function") ||
                    (typeof l.componentWillMount == "function" &&
                      l.componentWillMount(),
                    typeof l.UNSAFE_componentWillMount == "function" &&
                      l.UNSAFE_componentWillMount()),
                  typeof l.componentDidMount == "function" &&
                    (o.flags |= 4194308))
                : (typeof l.componentDidMount == "function" &&
                    (o.flags |= 4194308),
                  (o.memoizedProps = t),
                  (o.memoizedState = m)),
              (l.props = t),
              (l.state = m),
              (l.context = s),
              (t = c))
            : (typeof l.componentDidMount == "function" && (o.flags |= 4194308),
              (t = !1)));
      } else {
        ((l = o.stateNode),
          ec(a, o),
          (s = o.memoizedProps),
          (I = pt(e, s)),
          (l.props = I),
          (f = o.pendingProps),
          (u = l.context),
          (m = e.contextType),
          (c = Gt),
          typeof m == "object" && m !== null && (c = ka(m)),
          (i = e.getDerivedStateFromProps),
          (m =
            typeof i == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function") ||
            (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
              typeof l.componentWillReceiveProps != "function") ||
            ((s !== f || u !== c) && n0(o, l, t, c)),
          (be = !1),
          (u = o.memoizedState),
          (l.state = u),
          Pn(o, t, l, n),
          Vn());
        var g = o.memoizedState;
        s !== f ||
        u !== g ||
        be ||
        (a !== null && a.dependencies !== null && Ms(a.dependencies))
          ? (typeof i == "function" && (Ci(o, e, i, t), (g = o.memoizedState)),
            (I =
              be ||
              t0(o, e, I, t, u, g, c) ||
              (a !== null && a.dependencies !== null && Ms(a.dependencies)))
              ? (m ||
                  (typeof l.UNSAFE_componentWillUpdate != "function" &&
                    typeof l.componentWillUpdate != "function") ||
                  (typeof l.componentWillUpdate == "function" &&
                    l.componentWillUpdate(t, g, c),
                  typeof l.UNSAFE_componentWillUpdate == "function" &&
                    l.UNSAFE_componentWillUpdate(t, g, c)),
                typeof l.componentDidUpdate == "function" && (o.flags |= 4),
                typeof l.getSnapshotBeforeUpdate == "function" &&
                  (o.flags |= 1024))
              : (typeof l.componentDidUpdate != "function" ||
                  (s === a.memoizedProps && u === a.memoizedState) ||
                  (o.flags |= 4),
                typeof l.getSnapshotBeforeUpdate != "function" ||
                  (s === a.memoizedProps && u === a.memoizedState) ||
                  (o.flags |= 1024),
                (o.memoizedProps = t),
                (o.memoizedState = g)),
            (l.props = t),
            (l.state = g),
            (l.context = c),
            (t = I))
          : (typeof l.componentDidUpdate != "function" ||
              (s === a.memoizedProps && u === a.memoizedState) ||
              (o.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === a.memoizedProps && u === a.memoizedState) ||
              (o.flags |= 1024),
            (t = !1));
      }
      return (
        (l = t),
        Bt(a, o),
        (t = (o.flags & 128) !== 0),
        l || t
          ? ((l = o.stateNode),
            (e =
              t && typeof e.getDerivedStateFromError != "function"
                ? null
                : l.render()),
            (o.flags |= 1),
            a !== null && t
              ? ((o.child = mt(o, a.child, null, n)),
                (o.child = mt(o, null, e, n)))
              : Da(a, o, e, n),
            (o.memoizedState = l.state),
            (a = o.child))
          : (a = fe(a, o, n)),
        a
      );
    }
    function f0(a, o, e, t) {
      return (rt(), (o.flags |= 256), Da(a, o, e, t), o.child);
    }
    var fc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function pc(a) {
      return { baseLanes: a, cachePool: Y1() };
    }
    function dc(a, o, e) {
      return ((a = a !== null ? a.childLanes & ~e : 0), o && (a |= fo), a);
    }
    function kp(a, o, e) {
      var t = o.pendingProps,
        n = !1,
        l = (o.flags & 128) !== 0,
        s;
      if (
        ((s = l) ||
          (s =
            a !== null && a.memoizedState === null
              ? !1
              : (Ga.current & 2) !== 0),
        s && ((n = !0), (o.flags &= -129)),
        (s = (o.flags & 32) !== 0),
        (o.flags &= -33),
        a === null)
      ) {
        if (R) {
          if (
            (n ? ze(o) : Ue(),
            (a = $)
              ? ((a = Fd(a, wo)),
                (a = a !== null && a.data !== "&" ? a : null),
                a !== null &&
                  ((o.memoizedState = {
                    dehydrated: a,
                    treeContext: _e !== null ? { id: Xo, overflow: Yo } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (e = P1(a)),
                  (e.return = o),
                  (o.child = e),
                  (Ua = o),
                  ($ = null)))
              : (a = null),
            a === null)
          )
            throw Ge(o);
          return (xu(a) ? (o.lanes = 32) : (o.lanes = 536870912), null);
        }
        return (
          (l = t.children),
          (t = t.fallback),
          n
            ? (Ue(),
              (n = o.mode),
              (l = ir({ mode: "hidden", children: l }, n)),
              (t = tt(t, n, e, null)),
              (l.return = o),
              (t.return = o),
              (l.sibling = t),
              (o.child = l),
              (t = o.child),
              (t.memoizedState = pc(e)),
              (t.childLanes = dc(a, s, e)),
              (o.memoizedState = fc),
              jn(null, t))
            : (ze(o), Tu(o, l))
        );
      }
      var i = a.memoizedState;
      if (i !== null) {
        var c = i.dehydrated;
        if (c !== null) return mg(a, o, l, s, t, c, i, e);
      }
      return n
        ? (Ue(),
          (n = t.fallback),
          (l = o.mode),
          (i = a.child),
          (c = i.sibling),
          (t = se(i, { mode: "hidden", children: t.children })),
          (t.subtreeFlags = i.subtreeFlags & 1206910976),
          c !== null
            ? (n = se(c, n))
            : ((n = tt(n, l, e, null)), (n.flags |= 2)),
          (n.return = o),
          (t.return = o),
          (t.sibling = n),
          (o.child = t),
          jn(null, t),
          (t = o.child),
          (n = a.child.memoizedState),
          n === null
            ? (n = pc(e))
            : ((l = n.cachePool),
              l !== null
                ? ((i = Na._currentValue),
                  (l = l.parent !== i ? { parent: i, pool: i } : l))
                : (l = Y1()),
              (n = { baseLanes: n.baseLanes | e, cachePool: l })),
          (t.memoizedState = n),
          (t.childLanes = dc(a, s, e)),
          (o.memoizedState = fc),
          jn(a.child, t))
        : (ze(o),
          (e = a.child),
          (a = e.sibling),
          (e = se(e, { mode: "visible", children: t.children })),
          (e.return = o),
          (e.sibling = null),
          a !== null &&
            ((s = o.deletions),
            s === null ? ((o.deletions = [a]), (o.flags |= 16)) : s.push(a)),
          (o.child = e),
          (o.memoizedState = null),
          e);
    }
    function Tu(a, o) {
      return (
        (o = ir({ mode: "visible", children: o }, a.mode)),
        (o.return = a),
        (a.child = o)
      );
    }
    function ir(a, o) {
      return ((a = no(22, a, null, o)), (a.lanes = 0), a);
    }
    function Zl(a, o, e) {
      return (
        mt(o, a.child, null, e),
        (a = Tu(o, o.pendingProps.children)),
        (a.flags |= 2),
        (o.memoizedState = null),
        a
      );
    }
    function mg(a, o, e, t, n, l, s, i) {
      if (e)
        return o.flags & 256
          ? (ze(o), (o.flags &= -257), Zl(a, o, i))
          : o.memoizedState !== null
            ? (Ue(), (o.child = a.child), (o.flags |= 128), null)
            : (Ue(),
              (l = n.fallback),
              (s = o.mode),
              (n = ir({ mode: "visible", children: n.children }, s)),
              (l = tt(l, s, i, null)),
              (l.flags |= 2),
              (n.return = o),
              (l.return = o),
              (n.sibling = l),
              (o.child = n),
              mt(o, a.child, null, i),
              (n = o.child),
              (n.memoizedState = pc(i)),
              (n.childLanes = dc(a, t, i)),
              (o.memoizedState = fc),
              jn(null, n));
      if ((ze(o), xu(l))) {
        if (((t = l.nextSibling && l.nextSibling.dataset), t)) var c = t.dgst;
        return (
          (t = c),
          t !== "" &&
            ((n = Error(C(419))),
            (n.stack = ""),
            (n.digest = t),
            el({ value: n, source: null, stack: null })),
          Zl(a, o, i)
        );
      }
      if ((Ma || it(a, o, i, !1), (t = (i & a.childLanes) !== 0), Ma || t)) {
        if (Ve.current !== null) return Zl(a, o, i);
        if (
          ((t = Q),
          t !== null && ((n = I1(t, i)), n !== 0 && n !== s.retryLane))
        )
          throw ((s.retryLane = n), St(a, n), lo(t, a, n), bu);
        return (Fc(l) || Ps(), Zl(a, o, i));
      }
      return Fc(l)
        ? ((o.flags |= 192), (o.child = a.child), null)
        : ((a = s.treeContext),
          ($ = No(l.nextSibling)),
          (Ua = o),
          (R = !0),
          (He = null),
          (wo = !1),
          a !== null && j1(o, a),
          (o = Tu(o, n.children)),
          (o.flags |= 134221824),
          o);
    }
    function p0(a, o, e) {
      a.lanes |= o;
      var t = a.alternate;
      (t !== null && (t.lanes |= o), ss(a.return, o, e));
    }
    function d0(a) {
      for (var o = null; a !== null; ) {
        var e = a.alternate;
        (e !== null && Hs(e) === null && (o = a), (a = a.sibling));
      }
      return o;
    }
    function jl(a, o, e, t, n, l) {
      var s = a.memoizedState;
      s === null
        ? (a.memoizedState = {
            isBackwards: o,
            rendering: null,
            renderingStartTime: 0,
            last: t,
            tail: e,
            tailMode: n,
            treeForkCount: l,
          })
        : ((s.isBackwards = o),
          (s.rendering = null),
          (s.renderingStartTime = 0),
          (s.last = t),
          (s.tail = e),
          (s.tailMode = n),
          (s.treeForkCount = l));
    }
    function vi(a) {
      var o = a.child;
      for (a.child = null; o !== null; ) {
        var e = o.sibling;
        ((o.sibling = a.child), (a.child = o), (o = e));
      }
    }
    function Ic(a, o, e) {
      var t = o.pendingProps,
        n = t.revealOrder,
        l = t.tail;
      t = t.children;
      var s = Ga.current;
      if (o.flags & 128) return (nl(o, s), null);
      var i = (s & 2) !== 0;
      if (
        (i ? ((s = (s & 1) | 2), (o.flags |= 128)) : (s &= 1),
        nl(o, s),
        n === "backwards" && a !== null
          ? (vi(a), Da(a, o, t, e), vi(a))
          : Da(a, o, t, e),
        (t = R ? ol : 0),
        !i && a !== null && (a.flags & 128) !== 0)
      )
        a: for (a = o.child; a !== null; ) {
          if (a.tag === 13) a.memoizedState !== null && p0(a, e, o);
          else if (a.tag === 19) p0(a, e, o);
          else if (a.child !== null) {
            ((a.child.return = a), (a = a.child));
            continue;
          }
          if (a === o) break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === o) break a;
            a = a.return;
          }
          ((a.sibling.return = a.return), (a = a.sibling));
        }
      switch (n) {
        case "backwards":
          ((e = d0(o.child)),
            e === null
              ? ((n = o.child), (o.child = null))
              : ((n = e.sibling), (e.sibling = null), vi(o)),
            jl(o, !0, n, null, l, t));
          break;
        case "unstable_legacy-backwards":
          for (e = null, n = o.child, o.child = null; n !== null; ) {
            if (((a = n.alternate), a !== null && Hs(a) === null)) {
              o.child = n;
              break;
            }
            ((a = n.sibling), (n.sibling = e), (e = n), (n = a));
          }
          jl(o, !0, e, null, l, t);
          break;
        case "together":
          jl(o, !1, null, null, void 0, t);
          break;
        case "independent":
          o.memoizedState = null;
          break;
        default:
          ((e = d0(o.child)),
            e === null
              ? ((n = o.child), (o.child = null))
              : ((n = e.sibling), (e.sibling = null)),
            jl(o, !1, n, e, l, t));
      }
      return o.child;
    }
    function I0(a, o, e) {
      var t = o.pendingProps;
      return (we(o, o.type, t.value), Da(a, o, t.children, e), o.child);
    }
    function fe(a, o, e) {
      if (
        (a !== null && (o.dependencies = a.dependencies),
        (Ze |= o.lanes),
        (e & o.childLanes) === 0)
      )
        if (a !== null) {
          if ((it(a, o, e, !1), (e & o.childLanes) === 0)) return null;
        } else return null;
      if (a !== null && o.child !== a.child) throw Error(C(153));
      if (o.child !== null) {
        for (
          a = o.child, e = se(a, a.pendingProps), o.child = e, e.return = o;
          a.sibling !== null;
        )
          ((a = a.sibling),
            (e = e.sibling = se(a, a.pendingProps)),
            (e.return = o));
        e.sibling = null;
      }
      return o.child;
    }
    function Eu(a, o) {
      return (a.lanes & o) !== 0
        ? !0
        : ((a = a.dependencies), !!(a !== null && Ms(a)));
    }
    function fg(a, o, e) {
      switch (o.tag) {
        case 3:
          (ys(o, o.stateNode.containerInfo),
            we(o, Na, a.memoizedState.cache),
            rt());
          break;
        case 27:
        case 5:
          Gi(o);
          break;
        case 4:
          ys(o, o.stateNode.containerInfo);
          break;
        case 10:
          we(o, o.type, o.memoizedProps.value);
          break;
        case 31:
          if (o.memoizedState !== null) return ((o.flags |= 128), lc(o), null);
          break;
        case 13:
          var t = o.memoizedState;
          if (t !== null) {
            if (t.dehydrated !== null) return (ze(o), (o.flags |= 128), null);
            t = it(a, o, e, !1);
            var n = o.child.childLanes;
            return t || (e & n) !== 0
              ? kp(a, o, e)
              : (ze(o), (a = fe(a, o, e)), a !== null ? a.sibling : null);
          }
          ze(o);
          break;
        case 19:
          if (o.flags & 128) return Ic(a, o, e);
          if (
            ((n = (a.flags & 128) !== 0),
            (t = (e & o.childLanes) !== 0),
            t || (it(a, o, e, !1), (t = (e & o.childLanes) !== 0)),
            n)
          ) {
            if (t) return Ic(a, o, e);
            o.flags |= 128;
          }
          if (
            ((n = o.memoizedState),
            n !== null &&
              ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
            nl(o, Ga.current),
            t)
          )
            break;
          return null;
        case 22:
          return ((o.lanes = 0), Fp(a, o, e, o.pendingProps));
        case 24:
          we(o, Na, a.memoizedState.cache);
      }
      return fe(a, o, e);
    }
    function _p(a, o, e) {
      if (a !== null)
        if (a.memoizedProps !== o.pendingProps) Ma = !0;
        else {
          if (!Eu(a, e) && (o.flags & 128) === 0)
            return ((Ma = !1), fg(a, o, e));
          Ma = (a.flags & 131072) !== 0;
        }
      else ((Ma = !1), R && (o.flags & 1048576) !== 0 && Z1(o, ol, o.index));
      switch (((o.lanes = 0), o.tag)) {
        case 16:
          a: {
            var t = o.pendingProps;
            if (((a = We(o.elementType)), (o.type = a), typeof a == "function"))
              tu(a)
                ? ((t = pt(a, t)), (o.tag = 1), (o = m0(null, o, a, t, e)))
                : ((o.tag = 0), (o = mc(null, o, a, t, e)));
            else {
              if (a != null) {
                var n = a.$$typeof;
                if (n === Pc) {
                  ((o.tag = 11), (o = s0(null, o, a, t, e)));
                  break a;
                } else if (n === Zc) {
                  ((o.tag = 14), (o = r0(null, o, a, t, e)));
                  break a;
                } else if (n === Zo) {
                  ((o.tag = 10), (o.type = a), (o = I0(null, o, e)));
                  break a;
                }
              }
              throw ((o = ki(a) || a), Error(C(306, o, "")));
            }
          }
          return o;
        case 0:
          return mc(a, o, o.type, o.pendingProps, e);
        case 1:
          return ((t = o.type), (n = pt(t, o.pendingProps)), m0(a, o, t, n, e));
        case 3:
          a: {
            if ((ys(o, o.stateNode.containerInfo), a === null))
              throw Error(C(387));
            t = o.pendingProps;
            var l = o.memoizedState;
            ((n = l.element), ec(a, o), Pn(o, t, null, e));
            var s = o.memoizedState;
            if (
              ((t = s.cache),
              we(o, Na, t),
              t !== l.cache && ac(o, [Na], e, !0),
              Vn(),
              (t = s.element),
              l.isDehydrated)
            )
              if (
                ((l = { element: t, isDehydrated: !1, cache: s.cache }),
                (o.updateQueue.baseState = l),
                (o.memoizedState = l),
                o.flags & 256)
              ) {
                o = f0(a, o, t, e);
                break a;
              } else if (t !== n) {
                ((n = Lo(Error(C(424)), o)), el(n), (o = f0(a, o, t, e)));
                break a;
              } else
                for (
                  a = o.stateNode.containerInfo,
                    a.nodeType === 9
                      ? (a = a.body)
                      : (a = a.nodeName === "HTML" ? a.ownerDocument.body : a),
                    $ = No(a.firstChild),
                    Ua = o,
                    R = !0,
                    He = null,
                    wo = !0,
                    e = J1(o, null, t, e),
                    o.child = e;
                  e;
                )
                  ((e.flags = (e.flags & -3) | 134221824), (e = e.sibling));
            else {
              if ((rt(), t === n)) {
                o = fe(a, o, e);
                break a;
              }
              Da(a, o, t, e);
            }
            o = o.child;
          }
          return o;
        case 26:
          return (
            Bt(a, o),
            a === null
              ? (e = G0(o.type, null, o.pendingProps, null))
                ? (o.memoizedState = e)
                : R || (o.stateNode = Dd(o.type, o.pendingProps, Be.current, o))
              : (o.memoizedState = G0(
                  o.type,
                  a.memoizedProps,
                  o.pendingProps,
                  a.memoizedState,
                )),
            null
          );
        case 27:
          return (
            Gi(o),
            a === null &&
              R &&
              ((t = o.stateNode = kd(o.type, o.pendingProps, Be.current)),
              (Ua = o),
              (wo = !0),
              (n = $),
              Xe(o.type) ? ((kc = n), ($ = No(t.firstChild))) : ($ = n)),
            Da(a, o, o.pendingProps.children, e),
            Bt(a, o),
            a === null && (o.flags |= 4194304),
            o.child
          );
        case 5:
          return (
            a === null &&
              R &&
              ((n = t = $) &&
                ((t = nS(t, o.type, o.pendingProps, wo)),
                t !== null
                  ? ((o.stateNode = t),
                    (Ua = o),
                    ($ = No(t.firstChild)),
                    (wo = !1),
                    (n = !0))
                  : (n = !1)),
              n || Ge(o)),
            Gi(o),
            (n = o.type),
            (l = o.pendingProps),
            (s = a !== null ? a.memoizedProps : null),
            (t = l.children),
            Uc(n, l) ? (t = null) : s !== null && Uc(n, s) && (o.flags |= 32),
            o.memoizedState !== null &&
              ((n = fu(a, o, og, null, null, e)), (pn._currentValue = n)),
            Bt(a, o),
            Da(a, o, t, e),
            o.child
          );
        case 6:
          return (
            a === null &&
              R &&
              ((a = e = $) &&
                ((e = lS(e, o.pendingProps, wo)),
                e !== null
                  ? ((o.stateNode = e), (Ua = o), ($ = null), (a = !0))
                  : (a = !1)),
              a || Ge(o)),
            null
          );
        case 13:
          return kp(a, o, e);
        case 4:
          return (
            ys(o, o.stateNode.containerInfo),
            (t = o.pendingProps),
            a === null ? (o.child = mt(o, null, t, e)) : Da(a, o, t, e),
            o.child
          );
        case 11:
          return s0(a, o, o.type, o.pendingProps, e);
        case 7:
          return ((t = o.pendingProps), Bt(a, o), Da(a, o, t, e), o.child);
        case 8:
          return (Da(a, o, o.pendingProps.children, e), o.child);
        case 12:
          return (Da(a, o, o.pendingProps.children, e), o.child);
        case 10:
          return I0(a, o, e);
        case 9:
          return (
            (n = o.type._context),
            (t = o.pendingProps.children),
            ct(o),
            (n = ka(n)),
            (t = t(n)),
            (o.flags |= 1),
            Da(a, o, t, e),
            o.child
          );
        case 14:
          return r0(a, o, o.type, o.pendingProps, e);
        case 15:
          return qp(a, o, o.type, o.pendingProps, e);
        case 19:
          return Ic(a, o, e);
        case 31:
          return ug(a, o, e);
        case 22:
          return Fp(a, o, e, o.pendingProps);
        case 24:
          return (
            ct(o),
            (t = ka(Na)),
            a === null
              ? ((n = su()),
                n === null &&
                  ((n = Q),
                  (l = lu()),
                  (n.pooledCache = l),
                  l.refCount++,
                  l !== null && (n.pooledCacheLanes |= e),
                  (n = l)),
                (o.memoizedState = { parent: t, cache: n }),
                iu(o),
                we(o, Na, n))
              : ((a.lanes & e) !== 0 && (ec(a, o), Pn(o, null, null, e), Vn()),
                (n = a.memoizedState),
                (l = o.memoizedState),
                n.parent !== t
                  ? ((n = { parent: t, cache: t }),
                    (o.memoizedState = n),
                    o.lanes === 0 &&
                      (o.memoizedState = o.updateQueue.baseState = n),
                    we(o, Na, t))
                  : ((t = l.cache),
                    we(o, Na, t),
                    t !== n.cache && ac(o, [Na], e, !0))),
            Da(a, o, o.pendingProps.children, e),
            o.child
          );
        case 30:
          return (
            o.stateNode === null &&
              (o.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null,
              }),
            (t = o.pendingProps),
            t.name != null && t.name !== "auto"
              ? (o.flags |= a === null ? 18882560 : 18874368)
              : R && er(o),
            a !== null && a.memoizedProps.name !== t.name
              ? (o.flags |= 4194816)
              : Bt(a, o),
            Da(a, o, t.children, e),
            o.child
          );
        case 29:
          throw o.pendingProps;
      }
      throw Error(C(156, o.tag));
    }
    function te(a) {
      a.flags |= 4;
    }
    function yi(a, o, e, t, n) {
      var l;
      if (
        ((l = (a.mode & 32) !== 0) &&
          (l =
            e === null
              ? Z0(o, t)
              : Z0(o, t) && (t.src !== e.src || t.srcSet !== e.srcSet)),
        l)
      ) {
        if (((a.flags |= 16777216), (n & 335544128) === n))
          if (a.stateNode.complete) a.flags |= 8192;
          else if (hd()) a.flags |= 8192;
          else throw ((lt = Ds), ru);
      } else a.flags &= -16777217;
    }
    function h0(a, o) {
      if (o.type !== "stylesheet" || (o.state.loading & 4) !== 0)
        a.flags &= -16777217;
      else if (((a.flags |= 16777216), !Pd(o)))
        if (hd()) a.flags |= 8192;
        else throw ((lt = Ds), ru);
    }
    function Xl(a, o) {
      (o !== null && (a.flags |= 4),
        a.flags & 16384 &&
          ((o = a.tag !== 22 ? f1() : 536870912), (a.lanes |= o), (sn |= o)));
    }
    function Mn(a, o) {
      if (!R)
        switch (a.tailMode) {
          case "visible":
            break;
          case "collapsed":
            for (var e = a.tail, t = null; e !== null; )
              (e.alternate !== null && (t = e), (e = e.sibling));
            t === null
              ? o || a.tail === null
                ? (a.tail = null)
                : (a.tail.sibling = null)
              : (t.sibling = null);
            break;
          default:
            for (o = a.tail, e = null; o !== null; )
              (o.alternate !== null && (e = o), (o = o.sibling));
            e === null ? (a.tail = null) : (e.sibling = null);
        }
    }
    function W(a) {
      var o = a.alternate !== null && a.alternate.child === a.child,
        e = 0,
        t = 0;
      if (o)
        for (var n = a.child; n !== null; )
          ((e |= n.lanes | n.childLanes),
            (t |= n.subtreeFlags & 1206910976),
            (t |= n.flags & 1206910976),
            (n.return = a),
            (n = n.sibling));
      else
        for (n = a.child; n !== null; )
          ((e |= n.lanes | n.childLanes),
            (t |= n.subtreeFlags),
            (t |= n.flags),
            (n.return = a),
            (n = n.sibling));
      return ((a.subtreeFlags |= t), (a.childLanes = e), o);
    }
    function pg(a, o, e) {
      var t = o.pendingProps;
      switch ((nu(o), o.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (W(o), null);
        case 1:
          return (W(o), null);
        case 3:
          return (
            (e = o.stateNode),
            (t = null),
            a !== null && (t = a.memoizedState.cache),
            o.memoizedState.cache !== t && (o.flags |= 2048),
            re(Na),
            en(),
            e.pendingContext &&
              ((e.context = e.pendingContext), (e.pendingContext = null)),
            (a === null || a.child === null) &&
              (Mt(o)
                ? te(o)
                : a === null ||
                  (a.memoizedState.isDehydrated && (o.flags & 256) === 0) ||
                  ((o.flags |= 1024), hi())),
            W(o),
            null
          );
        case 26:
          var n = o.type,
            l = o.memoizedState;
          return (
            a === null
              ? (te(o),
                l !== null ? (W(o), h0(o, l)) : (W(o), yi(o, n, null, t, e)))
              : l
                ? l !== a.memoizedState
                  ? (te(o), W(o), h0(o, l))
                  : (W(o), (o.flags &= -16777217))
                : ((a = a.memoizedProps),
                  a !== t && te(o),
                  W(o),
                  yi(o, n, a, t, e)),
            null
          );
        case 27:
          if (
            (As(o),
            (e = Be.current),
            (n = o.type),
            a !== null && o.stateNode != null)
          )
            a.memoizedProps !== t && te(o);
          else {
            if (!t) {
              if (o.stateNode === null) throw Error(C(166));
              return (W(o), (o.subtreeFlags &= -33554433), null);
            }
            ((a = Qo.current),
              Mt(o) ? Vf(o, a) : ((a = kd(n, t, e)), (o.stateNode = a), te(o)));
          }
          return (W(o), (o.subtreeFlags &= -33554433), null);
        case 5:
          if ((As(o), (n = o.type), a !== null && o.stateNode != null))
            a.memoizedProps !== t && te(o);
          else {
            if (!t) {
              if (o.stateNode === null) throw Error(C(166));
              return (W(o), (o.subtreeFlags &= -33554433), null);
            }
            if (((l = Qo.current), Mt(o))) Vf(o, l);
            else {
              var s = il(Be.current);
              switch (l) {
                case 1:
                  l = s.createElementNS("http://www.w3.org/2000/svg", n);
                  break;
                case 2:
                  l = s.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    n,
                  );
                  break;
                default:
                  switch (n) {
                    case "svg":
                      l = s.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case "math":
                      l = s.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        n,
                      );
                      break;
                    case "script":
                      ((l = s.createElement("div")),
                        (l.innerHTML = "<script><\/script>"),
                        (l = l.removeChild(l.firstChild)));
                      break;
                    case "select":
                      ((l =
                        typeof t.is == "string"
                          ? s.createElement("select", { is: t.is })
                          : s.createElement("select")),
                        t.multiple
                          ? (l.multiple = !0)
                          : t.size && (l.size = t.size));
                      break;
                    default:
                      l =
                        typeof t.is == "string"
                          ? s.createElement(n, { is: t.is })
                          : s.createElement(n);
                  }
              }
              ((l[Fa] = o), (l[ro] = t));
              a: for (s = o.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) l.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === o) break a;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === o) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              o.stateNode = l;
              a: switch ((Va(l, n, t), n)) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  t = !!t.autoFocus;
                  break a;
                case "img":
                  t = !0;
                  break a;
                default:
                  t = !1;
              }
              t && te(o);
            }
          }
          return (
            W(o),
            (o.subtreeFlags &= -33554433),
            yi(
              o,
              o.type,
              a === null ? null : a.memoizedProps,
              o.pendingProps,
              e,
            ),
            null
          );
        case 6:
          if (a && o.stateNode != null) a.memoizedProps !== t && te(o);
          else {
            if (typeof t != "string" && o.stateNode === null)
              throw Error(C(166));
            if (((a = Be.current), Mt(o))) {
              if (
                ((a = o.stateNode),
                (e = o.memoizedProps),
                (t = null),
                (n = Ua),
                n !== null)
              )
                switch (n.tag) {
                  case 27:
                  case 5:
                    t = n.memoizedProps;
                }
              ((a[Fa] = o),
                (a = !!(
                  a.nodeValue === e ||
                  (t !== null && t.suppressHydrationWarning === !0) ||
                  Nd(a.nodeValue, e)
                )),
                a || Ge(o, !0));
            } else
              ((a = il(a).createTextNode(t)), (a[Fa] = o), (o.stateNode = a));
          }
          return (W(o), null);
        case 31:
          if (((e = o.memoizedState), a === null || a.memoizedState !== null)) {
            if (((t = Mt(o)), e !== null)) {
              if (a === null) {
                if (!t) throw Error(C(318));
                if (
                  ((a = o.memoizedState),
                  (a = a !== null ? a.dehydrated : null),
                  !a)
                )
                  throw Error(C(557));
                a[Fa] = o;
              } else
                (rt(),
                  (o.flags & 128) === 0 && (o.memoizedState = null),
                  (o.flags |= 4));
              (W(o), (a = !1));
            } else
              ((e = hi()),
                a !== null &&
                  a.memoizedState !== null &&
                  (a.memoizedState.hydrationErrors = e),
                (a = !0));
            if (!a) return o.flags & 256 ? (uo(o), o) : (uo(o), null);
            if ((o.flags & 128) !== 0) throw Error(C(558));
          }
          return (W(o), null);
        case 13:
          if (
            ((t = o.memoizedState),
            a === null ||
              (a.memoizedState !== null && a.memoizedState.dehydrated !== null))
          ) {
            if (((n = Mt(o)), t !== null && t.dehydrated !== null)) {
              if (a === null) {
                if (!n) throw Error(C(318));
                if (
                  ((n = o.memoizedState),
                  (n = n !== null ? n.dehydrated : null),
                  !n)
                )
                  throw Error(C(317));
                n[Fa] = o;
              } else
                (rt(),
                  (o.flags & 128) === 0 && (o.memoizedState = null),
                  (o.flags |= 4));
              (W(o), (n = !1));
            } else
              ((n = hi()),
                a !== null &&
                  a.memoizedState !== null &&
                  (a.memoizedState.hydrationErrors = n),
                (n = !0));
            if (!n) return o.flags & 256 ? (uo(o), o) : (uo(o), null);
          }
          return (
            uo(o),
            (o.flags & 128) !== 0
              ? ((o.lanes = e), o)
              : ((e = t !== null),
                (a = a !== null && a.memoizedState !== null),
                e &&
                  ((t = o.child),
                  (n = null),
                  t.alternate !== null &&
                    t.alternate.memoizedState !== null &&
                    t.alternate.memoizedState.cachePool !== null &&
                    (n = t.alternate.memoizedState.cachePool.pool),
                  (l = null),
                  t.memoizedState !== null &&
                    t.memoizedState.cachePool !== null &&
                    (l = t.memoizedState.cachePool.pool),
                  l !== n && (t.flags |= 2048)),
                e !== a && e && (o.child.flags |= 8192),
                Xl(o, o.updateQueue),
                W(o),
                null)
          );
        case 4:
          return (
            en(),
            a === null && Ru(o.stateNode.containerInfo),
            (o.flags |= 67108864),
            W(o),
            null
          );
        case 10:
          return (re(o.type), W(o), null);
        case 19:
          if ((uu(o), (t = o.memoizedState), t === null)) return (W(o), null);
          if (((n = (o.flags & 128) !== 0), (l = t.rendering), l === null))
            if (n) Mn(t, !1);
            else {
              if (ra !== 0 || (a !== null && (a.flags & 128) !== 0))
                for (a = o.child; a !== null; ) {
                  if (((l = Hs(a)), l !== null)) {
                    for (
                      o.flags |= 128,
                        Mn(t, !1),
                        a = l.updateQueue,
                        o.updateQueue = a,
                        Xl(o, a),
                        o.subtreeFlags = 0,
                        a = e,
                        e = o.child;
                      e !== null;
                    )
                      (V1(e, a), (e = e.sibling));
                    return (
                      nl(o, (Ga.current & 1) | 2),
                      R && ne(o, t.treeForkCount),
                      o.child
                    );
                  }
                  a = a.sibling;
                }
              t.tail !== null &&
                po() > Gs &&
                ((o.flags |= 128), (n = !0), Mn(t, !1), (o.lanes = 4194304));
            }
          else {
            if (!n)
              if (((a = Hs(l)), a !== null)) {
                if (
                  ((o.flags |= 128),
                  (n = !0),
                  (a = a.updateQueue),
                  (o.updateQueue = a),
                  Xl(o, a),
                  Mn(t, !0),
                  t.tail === null &&
                    t.tailMode !== "collapsed" &&
                    t.tailMode !== "visible" &&
                    !l.alternate &&
                    !R)
                )
                  return (W(o), null);
              } else
                2 * po() - t.renderingStartTime > Gs &&
                  e !== 536870912 &&
                  ((o.flags |= 128), (n = !0), Mn(t, !1), (o.lanes = 4194304));
            t.isBackwards
              ? ((l.sibling = o.child), (o.child = l))
              : ((a = t.last),
                a !== null ? (a.sibling = l) : (o.child = l),
                (t.last = l));
          }
          if (t.tail !== null) {
            a = t.tail;
            a: {
              for (e = a; e !== null; ) {
                if (e.alternate !== null) {
                  e = !1;
                  break a;
                }
                e = e.sibling;
              }
              e = !0;
            }
            return (
              (t.rendering = a),
              (t.tail = a.sibling),
              (t.renderingStartTime = po()),
              (a.sibling = null),
              (l = Ga.current),
              (l = n ? (l & 1) | 2 : l & 1),
              t.tailMode === "visible" || t.tailMode === "collapsed" || !e || R
                ? nl(o, l)
                : ((e = l), aa(Pa, o), aa(Ga, e), Qa === null && (Qa = o)),
              R && ne(o, t.treeForkCount),
              a
            );
          }
          return (W(o), null);
        case 22:
        case 23:
          return (
            uo(o),
            cu(),
            (t = o.memoizedState !== null),
            a !== null
              ? (a.memoizedState !== null) !== t && (o.flags |= 8192)
              : t && (o.flags |= 8192),
            t
              ? (e & 536870912) !== 0 &&
                (o.flags & 128) === 0 &&
                (W(o), o.subtreeFlags & 6 && (o.flags |= 8192))
              : W(o),
            (e = o.updateQueue),
            e !== null && Xl(o, e.retryQueue),
            (e = null),
            a !== null &&
              a.memoizedState !== null &&
              a.memoizedState.cachePool !== null &&
              (e = a.memoizedState.cachePool.pool),
            (t = null),
            o.memoizedState !== null &&
              o.memoizedState.cachePool !== null &&
              (t = o.memoizedState.cachePool.pool),
            t !== e && (o.flags |= 2048),
            a !== null && _a(nt),
            null
          );
        case 24:
          return (
            (e = null),
            a !== null && (e = a.memoizedState.cache),
            o.memoizedState.cache !== e && (o.flags |= 2048),
            re(Na),
            W(o),
            null
          );
        case 25:
          return null;
        case 30:
          return ((o.flags |= 33554432), W(o), null);
      }
      throw Error(C(156, o.tag));
    }
    function dg(a, o) {
      switch ((nu(o), o.tag)) {
        case 1:
          return (
            (a = o.flags),
            a & 65536 ? ((o.flags = (a & -65537) | 128), o) : null
          );
        case 3:
          return (
            re(Na),
            en(),
            (a = o.flags),
            (a & 65536) !== 0 && (a & 128) === 0
              ? ((o.flags = (a & -65537) | 128), o)
              : null
          );
        case 26:
        case 27:
        case 5:
          return (As(o), null);
        case 31:
          if (o.memoizedState !== null) {
            if ((uo(o), o.alternate === null)) throw Error(C(340));
            rt();
          }
          return (
            (a = o.flags),
            a & 65536 ? ((o.flags = (a & -65537) | 128), o) : null
          );
        case 13:
          if (
            (uo(o), (a = o.memoizedState), a !== null && a.dehydrated !== null)
          ) {
            if (o.alternate === null) throw Error(C(340));
            rt();
          }
          return (
            (a = o.flags),
            a & 65536 ? ((o.flags = (a & -65537) | 128), o) : null
          );
        case 19:
          return (
            uu(o),
            (a = o.flags),
            a & 65536
              ? ((o.flags = (a & -65537) | 128),
                (a = o.memoizedState),
                a !== null && ((a.rendering = null), (a.tail = null)),
                (o.flags |= 4),
                o)
              : null
          );
        case 4:
          return (en(), null);
        case 10:
          return (re(o.type), null);
        case 22:
        case 23:
          return (
            uo(o),
            cu(),
            a !== null && _a(nt),
            (a = o.flags),
            a & 65536 ? ((o.flags = (a & -65537) | 128), o) : null
          );
        case 24:
          return (re(Na), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Gp(a, o) {
      switch ((nu(o), o.tag)) {
        case 3:
          (re(Na), en());
          break;
        case 26:
        case 27:
        case 5:
          As(o);
          break;
        case 4:
          en();
          break;
        case 31:
          o.memoizedState !== null && uo(o);
          break;
        case 13:
          uo(o);
          break;
        case 19:
          uu(o);
          break;
        case 10:
          re(o.type);
          break;
        case 22:
        case 23:
          (uo(o), cu(), a !== null && _a(nt));
          break;
        case 24:
          re(Na);
      }
    }
    function yl(a, o) {
      try {
        var e = o.updateQueue,
          t = e !== null ? e.lastEffect : null;
        if (t !== null) {
          var n = t.next;
          e = n;
          do {
            if ((e.tag & a) === a) {
              t = void 0;
              var l = e.create,
                s = e.inst;
              ((t = l()), (s.destroy = t));
            }
            e = e.next;
          } while (e !== n);
        }
      } catch (i) {
        X(o, o.return, i);
      }
    }
    function Pe(a, o, e) {
      try {
        var t = o.updateQueue,
          n = t !== null ? t.lastEffect : null;
        if (n !== null) {
          var l = n.next;
          t = l;
          do {
            if ((t.tag & a) === a) {
              var s = t.inst,
                i = s.destroy;
              if (i !== void 0) {
                ((s.destroy = void 0), (n = o));
                var c = e,
                  m = i;
                try {
                  m();
                } catch (I) {
                  X(n, c, I);
                }
              }
            }
            t = t.next;
          } while (t !== l);
        }
      } catch (I) {
        X(o, o.return, I);
      }
    }
    function Vp(a) {
      var o = a.updateQueue;
      if (o !== null) {
        var e = a.stateNode;
        try {
          $1(o, e);
        } catch (t) {
          X(a, a.return, t);
        }
      }
    }
    function Pp(a, o, e) {
      ((e.props = pt(a.type, a.memoizedProps)), (e.state = a.memoizedState));
      try {
        e.componentWillUnmount();
      } catch (t) {
        X(a, o, t);
      }
    }
    function Vo(a, o) {
      try {
        var e = a.ref;
        if (e !== null) {
          switch (a.tag) {
            case 26:
            case 27:
            case 5:
              var t = a.stateNode;
              break;
            case 30:
              var n = a.stateNode,
                l = ce(a.memoizedProps, n);
              ((n.ref === null || n.ref.name !== l) && (n.ref = Rd(l)),
                (t = n.ref));
              break;
            case 7:
              if (a.stateNode === null) {
                var s = new Co(a);
                (so(a.child, !1, eS, s, void 0, void 0), (a.stateNode = s));
              }
              t = a.stateNode;
              break;
            default:
              t = a.stateNode;
          }
          typeof e == "function" ? (a.refCleanup = e(t)) : (e.current = t);
        }
      } catch (i) {
        X(a, o, i);
      }
    }
    function qa(a, o) {
      var e = a.ref,
        t = a.refCleanup;
      if (e !== null)
        if (typeof t == "function")
          try {
            t();
          } catch (n) {
            X(a, o, n);
          } finally {
            ((a.refCleanup = null),
              (a = a.alternate),
              a != null && (a.refCleanup = null));
          }
        else if (typeof e == "function")
          try {
            e(null);
          } catch (n) {
            X(a, o, n);
          }
        else e.current = null;
    }
    function xs(a, o) {
      if (
        (a.tag === 5 || a.tag === 27 || a.tag === 6) &&
        a.alternate === null &&
        o !== null
      )
        for (var e = 0; e < o.length; e++) qd(a.stateNode, o[e]);
    }
    function g0(a) {
      for (
        var o = a.return;
        o !== null && (wu(o) && qd(a.stateNode, o.stateNode), !Lu(o));
      )
        o = o.return;
    }
    function Xn(a) {
      for (
        var o = a.return;
        o !== null && (wu(o) && tS(a.stateNode, o.stateNode), !Lu(o));
      )
        o = o.return;
    }
    function Lu(a) {
      return a.tag === 5 || a.tag === 3 || a.tag === 27;
    }
    function wu(a) {
      return a && a.tag === 7 && a.stateNode !== null;
    }
    function hc(a) {
      var o = a.type,
        e = a.memoizedProps,
        t = a.stateNode;
      try {
        a: switch (o) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            e.autoFocus && t.focus();
            break a;
          case "img":
            e.src ? (t.src = e.src) : e.srcSet && (t.srcset = e.srcSet);
        }
      } catch (n) {
        X(a, a.return, n);
      }
    }
    function Ai(a, o, e) {
      try {
        var t = a.stateNode;
        (qg(t, a.type, e, o), (t[ro] = o));
      } catch (n) {
        X(a, a.return, n);
      }
    }
    function Zp(a) {
      return (
        a.tag === 5 ||
        a.tag === 3 ||
        a.tag === 26 ||
        (a.tag === 27 && Xe(a.type)) ||
        a.tag === 4
      );
    }
    function bi(a) {
      a: for (;;) {
        for (; a.sibling === null; ) {
          if (a.return === null || Zp(a.return)) return null;
          a = a.return;
        }
        for (
          a.sibling.return = a.return, a = a.sibling;
          a.tag !== 5 && a.tag !== 6 && a.tag !== 18;
        ) {
          if (
            (a.tag === 27 && Xe(a.type)) ||
            a.flags & 2 ||
            a.child === null ||
            a.tag === 4
          )
            continue a;
          ((a.child.return = a), (a = a.child));
        }
        if (!(a.flags & 2)) return a.stateNode;
      }
    }
    function gc(a, o, e, t) {
      var n = a.tag;
      if (n === 5 || n === 6)
        ((n = a.stateNode),
          o
            ? (e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e
              ).insertBefore(n, o)
            : ((o =
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e),
              o.appendChild(n),
              (e = e._reactRootContainer),
              e != null || o.onclick !== null || (o.onclick = jo)),
          xs(a, t),
          (k = !0));
      else if (
        n !== 4 &&
        (n === 27 &&
          (xs(a, t), (t = null), Xe(a.type) && ((e = a.stateNode), (o = null))),
        (a = a.child),
        a !== null)
      )
        for (gc(a, o, e, t), a = a.sibling; a !== null; )
          (gc(a, o, e, t), (a = a.sibling));
    }
    function qs(a, o, e, t) {
      var n = a.tag;
      if (n === 5 || n === 6)
        ((n = a.stateNode),
          o ? e.insertBefore(n, o) : e.appendChild(n),
          xs(a, t),
          (k = !0));
      else if (
        n !== 4 &&
        (n === 27 && (xs(a, t), (t = null), Xe(a.type) && (e = a.stateNode)),
        (a = a.child),
        a !== null)
      )
        for (qs(a, o, e, t), a = a.sibling; a !== null; )
          (qs(a, o, e, t), (a = a.sibling));
    }
    function jp(a) {
      var o = a.stateNode,
        e = a.memoizedProps;
      try {
        for (var t = a.type, n = o.attributes; n.length; )
          o.removeAttributeNode(n[0]);
        (Va(o, t, e), (o[Fa] = a), (o[ro] = e));
      } catch (l) {
        X(a, a.return, l);
      }
    }
    var Fs = !1,
      mo = null;
    function S0(a) {
      (a.tag === 30 || (a.subtreeFlags & 33554432) !== 0) && (Fs = !0);
    }
    var Po = null;
    function C0() {
      var a = Po;
      return ((Po = null), a);
    }
    var to = 0;
    function Cn(a, o, e, t, n) {
      return ((to = 0), Xp(a.child, o, e, t, n));
    }
    function Xp(a, o, e, t, n) {
      for (var l = !1; a !== null; ) {
        if (a.tag === 5) {
          var s = a.stateNode;
          if (t !== null) {
            var i = xc(s);
            (t.push(i), i.view && (l = !0));
          } else l || (xc(s).view && (l = !0));
          ((Fs = !0), Bd(s, to === 0 ? o : o + "_" + to, e), to++);
        } else
          (a.tag !== 22 || a.memoizedState === null) &&
            ((a.tag === 30 && n) || (Xp(a.child, o, e, t, n) && (l = !0)));
        a = a.sibling;
      }
      return l;
    }
    function Jo(a, o) {
      for (; a !== null; )
        (a.tag === 5
          ? Hd(a.stateNode, a.memoizedProps)
          : (a.tag !== 22 || a.memoizedState === null) &&
            ((a.tag === 30 && o) || Jo(a.child, o)),
          (a = a.sibling));
    }
    function ms(a) {
      if ((a.subtreeFlags & 18874368) !== 0)
        for (a = a.child; a !== null; ) {
          if (
            (a.tag !== 22 || a.memoizedState === null) &&
            (ms(a),
            a.tag === 30 && (a.flags & 18874368) !== 0 && a.stateNode.paired)
          ) {
            var o = a.memoizedProps;
            if (o.name == null || o.name === "auto") throw Error(C(544));
            var e = o.name;
            ((o = Ie(o.default, o.share)),
              o !== "none" && (Cn(a, e, o, null, !1) || Jo(a.child, !1)));
          }
          a = a.sibling;
        }
    }
    function Sc(a, o) {
      if (a.tag === 30) {
        var e = a.stateNode,
          t = a.memoizedProps,
          n = ce(t, e),
          l = Ie(t.default, e.paired ? t.share : t.enter);
        l !== "none"
          ? Cn(a, n, l, null, !1)
            ? (ms(a), e.paired || o || rn(a, t.onEnter))
            : Jo(a.child, !1)
          : ms(a);
      } else if ((a.subtreeFlags & 33554432) !== 0)
        for (a = a.child; a !== null; ) (Sc(a, o), (a = a.sibling));
      else ms(a);
    }
    function Cc(a) {
      if (mo !== null && mo.size !== 0) {
        var o = mo;
        if ((a.subtreeFlags & 18874368) !== 0)
          for (a = a.child; a !== null; ) {
            if (a.tag !== 22 || a.memoizedState === null) {
              if (a.tag === 30 && (a.flags & 18874368) !== 0) {
                var e = a.memoizedProps,
                  t = e.name;
                if (t != null && t !== "auto") {
                  var n = o.get(t);
                  if (n !== void 0) {
                    var l = Ie(e.default, e.share);
                    if (
                      (l !== "none" &&
                        (Cn(a, t, l, null, !1)
                          ? ((l = a.stateNode),
                            (n.paired = l),
                            (l.paired = n),
                            rn(a, e.onShare))
                          : Jo(a.child, !1)),
                      o.delete(t),
                      o.size === 0)
                    )
                      break;
                  }
                }
              }
              Cc(a);
            }
            a = a.sibling;
          }
      }
    }
    function vc(a) {
      if (a.tag === 30) {
        var o = a.memoizedProps,
          e = ce(o, a.stateNode),
          t = mo !== null ? mo.get(e) : void 0,
          n = Ie(o.default, t !== void 0 ? o.share : o.exit);
        (n !== "none" &&
          (Cn(a, e, n, null, !1)
            ? t !== void 0
              ? ((n = a.stateNode),
                (t.paired = n),
                (n.paired = t),
                mo.delete(e),
                rn(a, o.onShare))
              : rn(a, o.onExit)
            : Jo(a.child, !1)),
          mo !== null && Cc(a));
      } else if ((a.subtreeFlags & 33554432) !== 0)
        for (a = a.child; a !== null; ) (vc(a), (a = a.sibling));
      else mo !== null && Cc(a);
    }
    function Yp(a) {
      for (a = a.child; a !== null; ) {
        if (a.tag === 30) {
          var o = a.memoizedProps,
            e = ce(o, a.stateNode);
          ((o = Ie(o.default, o.update)),
            (a.flags &= -5),
            o !== "none" && Cn(a, e, o, (a.memoizedState = []), !1));
        } else (a.subtreeFlags & 33554432) !== 0 && Yp(a);
        a = a.sibling;
      }
    }
    function yc(a) {
      if ((a.subtreeFlags & 18874368) !== 0)
        for (a = a.child; a !== null; ) {
          if (a.tag !== 22 || a.memoizedState === null) {
            if (a.tag === 30 && (a.flags & 18874368) !== 0) {
              var o = a.stateNode;
              o.paired !== null && ((o.paired = null), Jo(a.child, !1));
            }
            yc(a);
          }
          a = a.sibling;
        }
    }
    function fs(a) {
      if (a.tag === 30) ((a.stateNode.paired = null), Jo(a.child, !1), yc(a));
      else if ((a.subtreeFlags & 33554432) !== 0)
        for (a = a.child; a !== null; ) (fs(a), (a = a.sibling));
      else yc(a);
    }
    function Qp(a) {
      for (a = a.child; a !== null; )
        (a.tag === 30
          ? Jo(a.child, !1)
          : (a.subtreeFlags & 33554432) !== 0 && Qp(a),
          (a = a.sibling));
    }
    function Nu(a, o, e, t, n, l, s) {
      for (var i = !1; o !== null; ) {
        if (o.tag === 5) {
          var c = o.stateNode;
          if (l !== null && to < l.length) {
            var m = l[to],
              I = xc(c);
            (m.view || I.view) && (i = !0);
            var f;
            if ((f = (a.flags & 4) === 0))
              if (I.clip) f = !0;
              else {
                f = m.rect;
                var u = I.rect;
                f =
                  f.y !== u.y ||
                  f.x !== u.x ||
                  f.height !== u.height ||
                  f.width !== u.width;
              }
            (f && (a.flags |= 4),
              I.abs
                ? (I = !m.abs)
                : ((m = m.rect),
                  (I = I.rect),
                  (I = m.height !== I.height || m.width !== I.width)),
              I && (a.flags |= 32));
          } else a.flags |= 32;
          ((a.flags & 4) !== 0 && Bd(c, to === 0 ? e : e + "_" + to, n),
            (i && (a.flags & 4) !== 0) ||
              (Po === null && (Po = []),
              Po.push(c, to === 0 ? t : t + "_" + to, o.memoizedProps)),
            to++);
        } else
          (o.tag !== 22 || o.memoizedState === null) &&
            (o.tag === 30 && s
              ? (a.flags |= o.flags & 32)
              : Nu(a, o.child, e, t, n, l, s) && (i = !0));
        o = o.sibling;
      }
      return i;
    }
    function Kp(a, o) {
      for (a = a.child; a !== null; ) {
        if (a.tag === 30) {
          var e = a.memoizedProps,
            t = a.stateNode,
            n = ce(e, t),
            l = Ie(e.default, e.update);
          if (o) {
            t = t.clones;
            var s = t === null ? null : t.map(Pg);
          } else ((s = a.memoizedState), (a.memoizedState = null));
          t = a;
          var i = a.child;
          ((to = 0),
            (n = Nu(t, i, n, n, l, s, !1)),
            (a.flags & 4) !== 0 && n && (o || rn(a, e.onUpdate)));
        } else (a.subtreeFlags & 33554432) !== 0 && Kp(a, o);
        a = a.sibling;
      }
    }
    var Oa = !1,
      V = !1,
      ko = !1,
      Ti = !1,
      v0 = typeof WeakSet == "function" ? WeakSet : Set,
      Ra = null,
      _o = !1,
      xn = !1,
      ks = !1,
      Ac = !1;
    function Ig(a, o, e) {
      if (((a = a.containerInfo), (Rc = dn), (a = z1(a)), au(a))) {
        if ("selectionStart" in a)
          var t = { start: a.selectionStart, end: a.selectionEnd };
        else
          a: {
            t = ((t = a.ownerDocument) && t.defaultView) || window;
            var n = t.getSelection && t.getSelection();
            if (n && n.rangeCount !== 0) {
              t = n.anchorNode;
              var l = n.anchorOffset,
                s = n.focusNode;
              n = n.focusOffset;
              try {
                (t.nodeType, s.nodeType);
              } catch {
                t = null;
                break a;
              }
              var i = 0,
                c = -1,
                m = -1,
                I = 0,
                f = 0,
                u = a,
                g = null;
              o: for (;;) {
                for (
                  var v;
                  u !== t || (l !== 0 && u.nodeType !== 3) || (c = i + l),
                    u !== s || (n !== 0 && u.nodeType !== 3) || (m = i + n),
                    u.nodeType === 3 && (i += u.nodeValue.length),
                    (v = u.firstChild) !== null;
                )
                  ((g = u), (u = v));
                for (;;) {
                  if (u === a) break o;
                  if (
                    (g === t && ++I === l && (c = i),
                    g === s && ++f === n && (m = i),
                    (v = u.nextSibling) !== null)
                  )
                    break;
                  ((u = g), (g = u.parentNode));
                }
                u = v;
              }
              t = c === -1 || m === -1 ? null : { start: c, end: m };
            } else t = null;
          }
        t = t || { start: 0, end: 0 };
      } else t = null;
      for (
        zc = { focusedElem: a, selectionRange: t },
          dn = !1,
          e = (e & 335544064) === e,
          Ra = o,
          o = e ? 9270 : 1024;
        Ra !== null;
      ) {
        if (((a = Ra), e && ((t = a.deletions), t !== null)))
          for (l = 0; l < t.length; l++) e && vc(t[l]);
        if (a.alternate === null && (a.flags & 2) !== 0) (e && S0(a), Yl(e));
        else {
          if (a.tag === 22) {
            if (((t = a.alternate), a.memoizedState !== null)) {
              (t !== null && t.memoizedState === null && e && vc(t), Yl(e));
              continue;
            } else if (t !== null && t.memoizedState !== null) {
              (e && S0(a), Yl(e));
              continue;
            }
          }
          ((t = a.child),
            (a.subtreeFlags & o) !== 0 && t !== null
              ? ((t.return = a), (Ra = t))
              : (e && Yp(a), Yl(e)));
        }
      }
      mo = null;
    }
    function Yl(a) {
      for (; Ra !== null; ) {
        var o = Ra,
          e = a,
          t = o.alternate,
          n = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if ((n & 1024) !== 0 && t !== null) {
              ((e = void 0), (n = t.memoizedProps), (t = t.memoizedState));
              var l = o.stateNode;
              try {
                var s = pt(o.type, n);
                ((e = l.getSnapshotBeforeUpdate(s, t)),
                  (l.__reactInternalSnapshotBeforeUpdate = e));
              } catch (i) {
                X(o, o.return, i);
              }
            }
            break;
          case 3:
            if ((n & 1024) !== 0) {
              if (((t = o.stateNode.containerInfo), (e = t.nodeType), e === 9))
                qc(t);
              else if (e === 1)
                switch (t.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    qc(t);
                    break;
                  default:
                    t.textContent = "";
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          case 30:
            e &&
              t !== null &&
              ((e = ce(t.memoizedProps, t.stateNode)),
              (n = o.memoizedProps),
              (n = Ie(n.default, n.update)),
              n !== "none" && Cn(t, e, n, (t.memoizedState = []), !0));
            break;
          default:
            if ((n & 1024) !== 0) throw Error(C(163));
        }
        if (((t = o.sibling), t !== null)) {
          ((t.return = o.return), (Ra = t));
          break;
        }
        Ra = o.return;
      }
    }
    function Jp(a, o, e) {
      var t = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Go(a, e), t & 4 && yl(5, e));
          break;
        case 1:
          if ((Go(a, e), t & 4))
            if (((a = e.stateNode), o === null))
              try {
                a.componentDidMount();
              } catch (s) {
                X(e, e.return, s);
              }
            else {
              var n = pt(e.type, o.memoizedProps);
              o = o.memoizedState;
              try {
                a.componentDidUpdate(
                  n,
                  o,
                  a.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (s) {
                X(e, e.return, s);
              }
            }
          (t & 64 && Vp(e), t & 512 && Vo(e, e.return));
          break;
        case 3:
          if ((Go(a, e), t & 64 && ((a = e.updateQueue), a !== null))) {
            if (((o = null), e.child !== null))
              switch (e.child.tag) {
                case 27:
                case 5:
                  o = e.child.stateNode;
                  break;
                case 1:
                  o = e.child.stateNode;
              }
            try {
              $1(a, o);
            } catch (s) {
              X(e, e.return, s);
            }
          }
          break;
        case 27:
          o === null && t & 4 && jp(e);
        case 26:
        case 5:
          (Go(a, e), o === null && t & 4 && hc(e), t & 512 && Vo(e, e.return));
          break;
        case 12:
          Go(a, e);
          break;
        case 31:
          (Go(a, e), t & 4 && od(a, e));
          break;
        case 13:
          (Go(a, e),
            t & 4 && ed(a, e),
            t & 64 &&
              ((a = e.memoizedState),
              a !== null &&
                ((a = a.dehydrated),
                a !== null && ((e = wg.bind(null, e)), sS(a, e)))));
          break;
        case 22:
          if (((t = e.memoizedState !== null || Oa), !t)) {
            var l = (o !== null && o.memoizedState !== null) || V;
            ((o = Oa),
              (n = V),
              (Oa = t),
              (V = l) && !n
                ? ((t = 2),
                  (e.subtreeFlags & 8772) !== 0 && (t |= 1),
                  Oo(a, e, t))
                : Go(a, e),
              (Oa = o),
              (V = n));
          }
          break;
        case 30:
          (Go(a, e), t & 512 && Vo(e, e.return));
          break;
        case 7:
          t & 512 && Vo(e, e.return);
        default:
          Go(a, e);
      }
    }
    function bc(a, o) {
      for (a = a.child; a !== null; ) (Wp(a, o), (a = a.sibling));
    }
    function Wp(a, o) {
      switch (a.tag) {
        case 5:
        case 26:
          try {
            var e = a.stateNode;
            if (o) {
              var t = e.style;
              typeof t.setProperty == "function"
                ? t.setProperty("display", "none", "important")
                : (t.display = "none");
            } else {
              var n = a.stateNode,
                l = a.memoizedProps.style,
                s = l != null && l.hasOwnProperty("display") ? l.display : null;
              n.style.display =
                s == null || typeof s == "boolean" ? "" : ("" + s).trim();
            }
          } catch (c) {
            X(a, a.return, c);
          }
          Tc(a, o);
          break;
        case 6:
          try {
            ((a.stateNode.nodeValue = o ? "" : a.memoizedProps), (k = !0));
          } catch (c) {
            X(a, a.return, c);
          }
          break;
        case 18:
          try {
            var i = a.stateNode;
            o ? U0(i, !0) : U0(a.stateNode, !1);
          } catch (c) {
            X(a, a.return, c);
          }
          break;
        case 22:
        case 23:
          a.memoizedState === null && bc(a, o);
          break;
        default:
          bc(a, o);
      }
    }
    function Tc(a, o) {
      if (a.subtreeFlags & 67108864)
        for (a = a.child; a !== null; ) {
          a: {
            var e = a,
              t = o;
            switch (e.tag) {
              case 4:
                Wp(e, t);
                break a;
              case 22:
                e.memoizedState === null && Tc(e, t);
                break a;
              default:
                Tc(e, t);
            }
          }
          a = a.sibling;
        }
    }
    function $p(a) {
      var o = a.alternate;
      (o !== null && ((a.alternate = null), $p(o)),
        (a.child = null),
        (a.deletions = null),
        (a.sibling = null),
        a.tag === 5 && ((o = a.stateNode), o !== null && Ks(o)),
        (a.stateNode = null),
        (a.return = null),
        (a.dependencies = null),
        (a.memoizedProps = null),
        (a.memoizedState = null),
        (a.pendingProps = null),
        (a.stateNode = null),
        (a.updateQueue = null));
    }
    var ta = null,
      oo = !1;
    function Ho(a, o, e) {
      for (e = e.child; e !== null; ) (ad(a, o, e), (e = e.sibling));
    }
    function ad(a, o, e) {
      if (Io && typeof Io.onCommitFiberUnmount == "function")
        try {
          Io.onCommitFiberUnmount(dl, e);
        } catch {}
      switch (e.tag) {
        case 26:
          (V || qa(e, o),
            Ho(a, o, e),
            e.memoizedState
              ? e.memoizedState.count--
              : e.stateNode &&
                !V &&
                ((e = e.stateNode), e.parentNode.removeChild(e)));
          break;
        case 27:
          (V || qa(e, o), Xn(e));
          var t = ta,
            n = oo;
          (Xe(e.type) && ((ta = e.stateNode), (oo = !1)),
            Ho(a, o, e),
            _d(e.stateNode, e.type, e.memoizedProps),
            (ta = t),
            (oo = n));
          break;
        case 5:
          (V || qa(e, o), Xn(e));
        case 6:
          if (
            (e.tag === 6 && Xn(e),
            (t = ta),
            (n = oo),
            (ta = null),
            Ho(a, o, e),
            (ta = t),
            (oo = n),
            ta !== null)
          )
            if (oo)
              try {
                ((ta.nodeType === 9
                  ? ta.body
                  : ta.nodeName === "HTML"
                    ? ta.ownerDocument.body
                    : ta
                ).removeChild(e.stateNode),
                  (k = !0));
              } catch (l) {
                X(e, o, l);
              }
            else
              try {
                (ta.removeChild(e.stateNode), (k = !0));
              } catch (l) {
                X(e, o, l);
              }
          break;
        case 18:
          ta !== null &&
            (oo
              ? ((a = ta),
                z0(
                  a.nodeType === 9
                    ? a.body
                    : a.nodeName === "HTML"
                      ? a.ownerDocument.body
                      : a,
                  e.stateNode,
                ),
                In(a))
              : z0(ta, e.stateNode));
          break;
        case 4:
          ((t = ta),
            (n = oo),
            (ta = e.stateNode.containerInfo),
            (oo = !0),
            Ho(a, o, e),
            (ta = t),
            (oo = n));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Pe(2, e, o), V || Pe(4, e, o), Ho(a, o, e));
          break;
        case 1:
          (V ||
            (qa(e, o),
            (t = e.stateNode),
            typeof t.componentWillUnmount == "function" && Pp(e, o, t)),
            Ho(a, o, e));
          break;
        case 21:
          Ho(a, o, e);
          break;
        case 22:
          ((V = (t = V) || e.memoizedState !== null), Ho(a, o, e), (V = t));
          break;
        case 30:
          (qa(e, o), Ho(a, o, e));
          break;
        case 7:
          (V || qa(e, o), Ho(a, o, e));
          break;
        default:
          Ho(a, o, e);
      }
    }
    function od(a, o) {
      if (
        o.memoizedState === null &&
        ((a = o.alternate), a !== null && ((a = a.memoizedState), a !== null))
      ) {
        a = a.dehydrated;
        try {
          In(a);
        } catch (e) {
          X(o, o.return, e);
        }
      }
    }
    function ed(a, o) {
      if (
        o.memoizedState === null &&
        ((a = o.alternate),
        a !== null &&
          ((a = a.memoizedState),
          a !== null && ((a = a.dehydrated), a !== null)))
      )
        try {
          In(a);
        } catch (e) {
          X(o, o.return, e);
        }
    }
    function hg(a) {
      switch (a.tag) {
        case 31:
        case 13:
        case 19:
          var o = a.stateNode;
          return (o === null && (o = a.stateNode = new v0()), o);
        case 22:
          return (
            (a = a.stateNode),
            (o = a._retryCache),
            o === null && (o = a._retryCache = new v0()),
            o
          );
        default:
          throw Error(C(435, a.tag));
      }
    }
    function Ql(a, o) {
      var e = hg(a);
      o.forEach(function (t) {
        if (!e.has(t)) {
          e.add(t);
          var n = Ng.bind(null, a, t);
          t.then(n, n);
        }
      });
    }
    function Ja(a, o, e) {
      var t = o.deletions;
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n],
            s = a,
            i = o,
            c = i;
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (Xe(c.type)) {
                  ((ta = c.stateNode), (oo = !1));
                  break a;
                }
                break;
              case 5:
                ((ta = c.stateNode), (oo = !1));
                break a;
              case 3:
              case 4:
                ((ta = c.stateNode.containerInfo), (oo = !0));
                break a;
            }
            c = c.return;
          }
          if (ta === null) throw Error(C(160));
          (ad(s, i, l),
            (ta = null),
            (oo = !1),
            (s = l.alternate),
            s !== null && (s.return = null),
            (l.return = null));
        }
      if (o.subtreeFlags & 13886)
        for (o = o.child; o !== null; ) (td(o, a, e), (o = o.sibling));
    }
    var Ro = null;
    function td(a, o, e) {
      var t = a.alternate,
        n = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            n & 4 &&
            ((t = a.updateQueue),
            (t = t !== null ? t.events : null),
            t !== null)
          )
            for (var l = 0; l < t.length; l++) {
              var s = t[l];
              s.ref.impl = s.nextImpl;
            }
          (Ja(o, a, e),
            Wa(a),
            n & 4 && (Pe(3, a, a.return), yl(3, a), Pe(5, a, a.return)));
          break;
        case 1:
          (Ja(o, a, e),
            Wa(a),
            n & 512 && (V || t === null || qa(t, t.return)),
            n & 64 &&
              Oa &&
              ((a = a.updateQueue),
              a !== null &&
                ((o = a.callbacks),
                o !== null &&
                  ((e = a.shared.hiddenCallbacks),
                  (a.shared.hiddenCallbacks = e === null ? o : e.concat(o))))));
          break;
        case 26:
          if (
            ((l = Ro),
            Ja(o, a, e),
            Wa(a),
            n & 512 && (V || t === null || qa(t, t.return)),
            n & 4)
          )
            if (
              ((n = t !== null ? t.memoizedState : null),
              (e = a.memoizedState),
              t === null)
            )
              if (e === null)
                if (a.stateNode === null)
                  if (Oa)
                    a.stateNode = Dd(
                      a.type,
                      a.memoizedProps,
                      o.containerInfo,
                      a,
                    );
                  else {
                    a: {
                      ((o = a.type),
                        (e = a.memoizedProps),
                        (n = l.ownerDocument || l));
                      o: switch (o) {
                        case "title":
                          ((t = n.getElementsByTagName("title")[0]),
                            (!t ||
                              t[gl] ||
                              t[Fa] ||
                              t.namespaceURI === "http://www.w3.org/2000/svg" ||
                              t.hasAttribute("itemprop")) &&
                              ((t = n.createElement(o)),
                              n.head.insertBefore(
                                t,
                                n.querySelector("head > title"),
                              )),
                            Va(t, o, e),
                            (t[Fa] = a),
                            za(t),
                            (o = t));
                          break a;
                        case "link":
                          if (
                            (l = P0("link", "href", n).get(o + (e.href || "")))
                          ) {
                            for (s = 0; s < l.length; s++)
                              if (
                                ((t = l[s]),
                                t.getAttribute("href") ===
                                  (e.href == null || e.href === ""
                                    ? null
                                    : e.href) &&
                                  t.getAttribute("rel") ===
                                    (e.rel == null ? null : e.rel) &&
                                  t.getAttribute("title") ===
                                    (e.title == null ? null : e.title) &&
                                  t.getAttribute("crossorigin") ===
                                    (e.crossOrigin == null
                                      ? null
                                      : e.crossOrigin))
                              ) {
                                l.splice(s, 1);
                                break o;
                              }
                          }
                          ((t = n.createElement(o)),
                            Va(t, o, e),
                            n.head.appendChild(t));
                          break;
                        case "meta":
                          if (
                            (l = P0("meta", "content", n).get(
                              o + (e.content || ""),
                            ))
                          ) {
                            for (s = 0; s < l.length; s++)
                              if (
                                ((t = l[s]),
                                t.getAttribute("content") ===
                                  (e.content == null ? null : "" + e.content) &&
                                  t.getAttribute("name") ===
                                    (e.name == null ? null : e.name) &&
                                  t.getAttribute("property") ===
                                    (e.property == null ? null : e.property) &&
                                  t.getAttribute("http-equiv") ===
                                    (e.httpEquiv == null
                                      ? null
                                      : e.httpEquiv) &&
                                  t.getAttribute("charset") ===
                                    (e.charSet == null ? null : e.charSet))
                              ) {
                                l.splice(s, 1);
                                break o;
                              }
                          }
                          ((t = n.createElement(o)),
                            Va(t, o, e),
                            n.head.appendChild(t));
                          break;
                        default:
                          throw Error(C(468, o));
                      }
                      ((t[Fa] = a), za(t), (o = t));
                    }
                    a.stateNode = o;
                  }
                else Oa || _c(l, a.type, a.stateNode);
              else a.stateNode = V0(l, e, a.memoizedProps);
            else
              n !== e
                ? (n === null
                    ? ((o = t.stateNode),
                      o === null || V || o.parentNode.removeChild(o))
                    : n.count--,
                  e === null
                    ? Oa || _c(l, a.type, a.stateNode)
                    : V0(l, e, a.memoizedProps))
                : e === null &&
                  a.stateNode !== null &&
                  Ai(a, a.memoizedProps, t.memoizedProps);
          break;
        case 27:
          (Ja(o, a, e),
            Wa(a),
            n & 512 && (V || t === null || qa(t, t.return)),
            t !== null && n & 4 && Ai(a, a.memoizedProps, t.memoizedProps));
          break;
        case 5:
          if (
            ((l = ko),
            (ko = !1),
            Ja(o, a, e),
            (ko = l),
            Wa(a),
            n & 512 && (V || t === null || qa(t, t.return)),
            a.flags & 32)
          ) {
            o = a.stateNode;
            try {
              (nn(o, ""), (k = !0));
            } catch (I) {
              X(a, a.return, I);
            }
          }
          (n & 4 &&
            a.stateNode != null &&
            ((o = a.memoizedProps), Ai(a, o, t !== null ? t.memoizedProps : o)),
            n & 1024 && (Ti = !0));
          break;
        case 6:
          if ((Ja(o, a, e), Wa(a), n & 4)) {
            if (a.stateNode === null) throw Error(C(162));
            ((o = a.memoizedProps), (e = a.stateNode));
            try {
              ((e.nodeValue = o), (k = !0));
            } catch (I) {
              X(a, a.return, I);
            }
          }
          break;
        case 3:
          if (
            ((k = !1),
            (hs = null),
            (l = Ro),
            (Ro = cl(o.containerInfo)),
            Ja(o, a, e),
            (Ro = l),
            Wa(a),
            n & 4 && t !== null && t.memoizedState.isDehydrated)
          )
            try {
              In(o.containerInfo);
            } catch (I) {
              X(a, a.return, I);
            }
          (Ti && ((Ti = !1), nd(a)), (k = !1));
          break;
        case 4:
          ((n = ko),
            (ko = Oa),
            (t = Lf()),
            (l = Ro),
            (Ro = cl(a.stateNode.containerInfo)),
            Ja(o, a, e),
            Wa(a),
            (Ro = l),
            k && xn && (ks = !0),
            (k = t),
            (ko = n));
          break;
        case 12:
          (Ja(o, a, e), Wa(a));
          break;
        case 31:
          (Ja(o, a, e),
            Wa(a),
            n & 4 &&
              ((o = a.updateQueue),
              o !== null && ((a.updateQueue = null), Ql(a, o))));
          break;
        case 13:
          (Ja(o, a, e),
            Wa(a),
            a.child.flags & 8192 &&
              (a.memoizedState !== null) !=
                (t !== null && t.memoizedState !== null) &&
              (cr = po()),
            n & 4 &&
              ((o = a.updateQueue),
              o !== null && ((a.updateQueue = null), Ql(a, o))));
          break;
        case 22:
          ((l = a.memoizedState !== null),
            (s = t !== null && t.memoizedState !== null));
          var i = Oa,
            c = V,
            m = ko;
          ((Oa = i || l),
            (ko = m || l),
            (V = c || s),
            Ja(o, a, e),
            (V = c),
            (ko = m),
            (Oa = i),
            Wa(a),
            n & 8192 &&
              ((o = a.stateNode),
              (o._visibility = l ? o._visibility & -2 : o._visibility | 1),
              !l ||
                t === null ||
                s ||
                Oa ||
                V ||
                ((o = s || V),
                (e = Oa),
                (t = V),
                (Oa = l || Oa),
                (V = o),
                ye(a, 2),
                (Oa = e),
                (V = t)),
              (!l && ko) || bc(a, l)),
            n & 4 &&
              ((o = a.updateQueue),
              o !== null &&
                ((e = o.retryQueue),
                e !== null && ((o.retryQueue = null), Ql(a, e)))));
          break;
        case 19:
          (Ja(o, a, e),
            Wa(a),
            n & 4 &&
              ((o = a.updateQueue),
              o !== null && ((a.updateQueue = null), Ql(a, o))));
          break;
        case 30:
          (n & 512 && (V || t === null || qa(t, t.return)),
            (n = Lf()),
            (l = xn),
            (s = (e & 335544064) === e),
            (i = a.memoizedProps),
            (xn = s && Ie(i.default, i.update) !== "none"),
            Ja(o, a, e),
            Wa(a),
            s && t !== null && k && (a.flags |= 4),
            (xn = l),
            (k = n));
          break;
        case 21:
          break;
        case 7:
          (n & 512 && (V || t === null || qa(t, t.return)),
            t && t.stateNode !== null && (t.stateNode._fragmentFiber = a));
        default:
          (Ja(o, a, e), Wa(a));
      }
    }
    function Wa(a) {
      var o = a.flags;
      if (o & 2) {
        try {
          for (var e, t = a.return; t !== null; ) {
            if (Zp(t)) {
              e = t;
              break;
            }
            t = t.return;
          }
          t = null;
          for (var n = a.return; n !== null; ) {
            if (wu(n)) {
              var l = n.stateNode;
              t === null ? (t = [l]) : t.push(l);
            }
            if (Lu(n)) break;
            n = n.return;
          }
          var s = t;
          if (e == null) throw Error(C(160));
          switch (e.tag) {
            case 27:
              var i = e.stateNode,
                c = bi(a);
              qs(a, c, i, s);
              break;
            case 5:
              var m = e.stateNode;
              e.flags & 32 && (nn(m, ""), (e.flags &= -33));
              var I = bi(a);
              qs(a, I, m, s);
              break;
            case 3:
            case 4:
              var f = e.stateNode.containerInfo,
                u = bi(a);
              gc(a, u, f, s);
              break;
            default:
              throw Error(C(161));
          }
        } catch (g) {
          X(a, a.return, g);
        }
        a.flags &= -3;
      }
      o & 4096 && (a.flags &= -4097);
    }
    function nd(a) {
      if (a.subtreeFlags & 1024)
        for (a = a.child; a !== null; ) {
          var o = a;
          (nd(o),
            o.tag === 5 &&
              o.flags & 1024 &&
              ((o = o.stateNode), (dn = !0), o.reset(), (dn = !1)),
            (a = a.sibling));
        }
    }
    function Dt(a, o) {
      if (o.subtreeFlags & 9270)
        for (o = o.child; o !== null; ) (ld(o, a), (o = o.sibling));
      else Kp(o, !1);
    }
    function ld(a, o) {
      var e = a.alternate;
      if (e === null) Sc(a, !1);
      else
        switch (a.tag) {
          case 3:
            if (((Ac = _o = !1), C0(), Dt(o, a), !_o && !ks)) {
              if (((a = Po), a !== null))
                for (var t = 0; t < a.length; t += 3) {
                  e = a[t];
                  var n = a[t + 1];
                  (Hd(e, a[t + 2]),
                    (e = e.ownerDocument.documentElement),
                    e !== null &&
                      e.animate(
                        { opacity: [0, 0], pointerEvents: ["none", "none"] },
                        {
                          duration: 0,
                          fill: "forwards",
                          pseudoElement: "::view-transition-group(" + n + ")",
                        },
                      ));
                }
              ((a = o.containerInfo),
                (a =
                  a.nodeType === 9
                    ? a.documentElement
                    : a.ownerDocument.documentElement),
                a !== null &&
                  a.style.viewTransitionName === "" &&
                  ((a.style.viewTransitionName = "none"),
                  a.animate(
                    { opacity: [0, 0], pointerEvents: ["none", "none"] },
                    {
                      duration: 0,
                      fill: "forwards",
                      pseudoElement: "::view-transition-group(root)",
                    },
                  ),
                  a.animate(
                    { width: [0, 0], height: [0, 0] },
                    {
                      duration: 0,
                      fill: "forwards",
                      pseudoElement: "::view-transition",
                    },
                  )),
                (Ac = !0));
            }
            Po = null;
            break;
          case 5:
            Dt(o, a);
            break;
          case 4:
            ((t = _o), (_o = !1), Dt(o, a), _o && (ks = !0), (_o = t));
            break;
          case 22:
            a.memoizedState === null &&
              (e.memoizedState !== null ? Sc(a, !1) : Dt(o, a));
            break;
          case 30:
            ((t = _o), (n = C0()), (_o = !1), Dt(o, a), _o && (a.flags |= 4));
            var l = a.memoizedProps,
              s = a.stateNode;
            ((o = ce(l, s)), (s = ce(e.memoizedProps, s)));
            var i = Ie(l.default, l.update);
            (i === "none"
              ? (o = !1)
              : ((l = e.memoizedState),
                (e.memoizedState = null),
                (e = a.child),
                (to = 0),
                (o = Nu(a, e, o, s, i, l, !0)),
                to !== (l === null ? 0 : l.length) && (a.flags |= 32)),
              (a.flags & 4) !== 0 && o
                ? (rn(a, a.memoizedProps.onUpdate), (Po = n))
                : n !== null && (n.push.apply(n, Po), (Po = n)),
              (_o = (a.flags & 32) !== 0 ? !0 : t));
            break;
          default:
            Dt(o, a);
        }
    }
    function Go(a, o) {
      if (o.subtreeFlags & 8772)
        for (o = o.child; o !== null; )
          (Jp(a, o.alternate, o), (o = o.sibling));
    }
    function ye(a, o) {
      for (a = a.child; a !== null; ) {
        var e = a,
          t = o;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Pe(4, e, e.return), ye(e, t));
            break;
          case 1:
            qa(e, e.return);
            var n = e.stateNode;
            (typeof n.componentWillUnmount == "function" && Pp(e, e.return, n),
              ye(e, t));
            break;
          case 27:
            (t & 2) !== 0 && _d(e.stateNode, e.type, e.memoizedProps);
          case 5:
            (qa(e, e.return), (e.tag !== 5 && e.tag !== 27) || Xn(e), ye(e, t));
            break;
          case 6:
            Xn(e);
            break;
          case 26:
            (qa(e, e.return),
              (n = e.stateNode),
              e.memoizedState !== null ||
                n === null ||
                V ||
                n.parentNode.removeChild(n),
              ye(e, t));
            break;
          case 22:
            e.memoizedState === null && ye(e, t);
            break;
          case 30:
            (qa(e, e.return), ye(e, t));
            break;
          case 7:
            qa(e, e.return);
          default:
            ye(e, t);
        }
        a = a.sibling;
      }
    }
    function Oo(a, o, e) {
      for (
        e = (o.subtreeFlags & 8772) !== 0 ? e : e & -2, o = o.child;
        o !== null;
      ) {
        var t = o.alternate,
          n = a,
          l = o,
          s = l.flags,
          i = (e & 1) !== 0;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            (Oo(n, l, e), yl(4, l));
            break;
          case 1:
            if (
              (Oo(n, l, e),
              (t = l),
              (n = t.stateNode),
              typeof n.componentDidMount == "function")
            )
              try {
                n.componentDidMount();
              } catch (I) {
                X(t, t.return, I);
              }
            if (((t = l), (n = t.updateQueue), n !== null)) {
              var c = t.stateNode;
              try {
                var m = n.shared.hiddenCallbacks;
                if (m !== null)
                  for (
                    n.shared.hiddenCallbacks = null, n = 0;
                    n < m.length;
                    n++
                  )
                    W1(m[n], c);
              } catch (I) {
                X(t, t.return, I);
              }
            }
            (i && s & 64 && Vp(l), Vo(l, l.return));
            break;
          case 27:
            (e & 2) !== 0 && jp(l);
          case 5:
            ((l.tag !== 5 && l.tag !== 27) || g0(l),
              Oo(n, l, e),
              i && t === null && s & 4 && hc(l),
              Vo(l, l.return));
            break;
          case 6:
            g0(l);
            break;
          case 26:
            ((c = l.stateNode),
              l.memoizedState !== null ||
                c === null ||
                Oa ||
                _c(cl(c.ownerDocument), l.type, c),
              Oo(n, l, e),
              i && t === null && s & 4 && hc(l),
              Vo(l, l.return));
            break;
          case 12:
            Oo(n, l, e);
            break;
          case 31:
            (Oo(n, l, e), i && s & 4 && od(n, l));
            break;
          case 13:
            (Oo(n, l, e), i && s & 4 && ed(n, l));
            break;
          case 22:
            (l.memoizedState === null && Oo(n, l, e), Vo(l, l.return));
            break;
          case 30:
            (Oo(n, l, e), Vo(l, l.return));
            break;
          case 7:
            Vo(l, l.return);
          default:
            Oo(n, l, e);
        }
        o = o.sibling;
      }
    }
    function Mu(a, o) {
      var e = null;
      (a !== null &&
        a.memoizedState !== null &&
        a.memoizedState.cachePool !== null &&
        (e = a.memoizedState.cachePool.pool),
        (a = null),
        o.memoizedState !== null &&
          o.memoizedState.cachePool !== null &&
          (a = o.memoizedState.cachePool.pool),
        a !== e && (a != null && a.refCount++, e != null && Cl(e)));
    }
    function Du(a, o) {
      ((a = null),
        o.alternate !== null && (a = o.alternate.memoizedState.cache),
        (o = o.memoizedState.cache),
        o !== a && (o.refCount++, a != null && Cl(a)));
    }
    function yo(a, o, e, t) {
      var n = (e & 335544064) === e;
      if (o.subtreeFlags & (n ? 10262 : 10256))
        for (o = o.child; o !== null; ) (sd(a, o, e, t), (o = o.sibling));
      else n && Qp(o);
    }
    function sd(a, o, e, t) {
      var n = (e & 335544064) === e;
      n &&
        o.alternate === null &&
        o.return !== null &&
        o.return.alternate !== null &&
        fs(o);
      var l = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (yo(a, o, e, t), l & 2048 && yl(9, o));
          break;
        case 1:
          yo(a, o, e, t);
          break;
        case 3:
          (yo(a, o, e, t),
            n &&
              Ac &&
              ((a = a.containerInfo),
              (a =
                a.nodeType === 9
                  ? a.body
                  : a.nodeName === "HTML"
                    ? a.ownerDocument.body
                    : a),
              a.style.viewTransitionName === "root" &&
                (a.style.viewTransitionName = ""),
              (a = a.ownerDocument.documentElement),
              a !== null &&
                a.style.viewTransitionName === "none" &&
                (a.style.viewTransitionName = "")),
            l & 2048 &&
              ((l = null),
              o.alternate !== null && (l = o.alternate.memoizedState.cache),
              (o = o.memoizedState.cache),
              o !== l && (o.refCount++, l != null && Cl(l))));
          break;
        case 12:
          if (l & 2048) {
            (yo(a, o, e, t), (l = o.stateNode));
            try {
              var s = o.memoizedProps,
                i = s.id,
                c = s.onPostCommit;
              typeof c == "function" &&
                c(
                  i,
                  o.alternate === null ? "mount" : "update",
                  l.passiveEffectDuration,
                  -0,
                );
            } catch (m) {
              X(o, o.return, m);
            }
          } else yo(a, o, e, t);
          break;
        case 31:
          yo(a, o, e, t);
          break;
        case 13:
          yo(a, o, e, t);
          break;
        case 23:
          break;
        case 22:
          ((s = o.stateNode),
            (i = o.alternate),
            o.memoizedState !== null
              ? (n && i !== null && i.memoizedState === null && fs(i),
                s._visibility & 2 ? yo(a, o, e, t) : Yn(a, o))
              : (n && i !== null && i.memoizedState !== null && fs(o),
                s._visibility & 2
                  ? yo(a, o, e, t)
                  : ((s._visibility |= 2),
                    Ht(a, o, e, t, (o.subtreeFlags & 10256) !== 0 || !1))),
            l & 2048 && Mu(i, o));
          break;
        case 24:
          (yo(a, o, e, t), l & 2048 && Du(o.alternate, o));
          break;
        case 30:
          (n &&
            ((l = o.alternate),
            l !== null && (Jo(l.child, !0), Jo(o.child, !0))),
            yo(a, o, e, t));
          break;
        default:
          yo(a, o, e, t);
      }
    }
    function Ht(a, o, e, t, n) {
      for (
        n = n && ((o.subtreeFlags & 10256) !== 0 || !1), o = o.child;
        o !== null;
      ) {
        var l = a,
          s = o,
          i = e,
          c = t,
          m = s.flags;
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            (Ht(l, s, i, c, n), yl(8, s));
            break;
          case 23:
            break;
          case 22:
            var I = s.stateNode;
            (s.memoizedState !== null
              ? I._visibility & 2
                ? Ht(l, s, i, c, n)
                : Yn(l, s)
              : ((I._visibility |= 2), Ht(l, s, i, c, n)),
              n && m & 2048 && Mu(s.alternate, s));
            break;
          case 24:
            (Ht(l, s, i, c, n), n && m & 2048 && Du(s.alternate, s));
            break;
          default:
            Ht(l, s, i, c, n);
        }
        o = o.sibling;
      }
    }
    function Yn(a, o) {
      if (o.subtreeFlags & 10256)
        for (o = o.child; o !== null; ) {
          var e = a,
            t = o,
            n = t.flags;
          switch (t.tag) {
            case 22:
              (Yn(e, t), n & 2048 && Mu(t.alternate, t));
              break;
            case 24:
              (Yn(e, t), n & 2048 && Du(t.alternate, t));
              break;
            default:
              Yn(e, t);
          }
          o = o.sibling;
        }
    }
    var $e = 8192;
    function Ke(a, o, e) {
      if (a.subtreeFlags & $e)
        for (a = a.child; a !== null; ) (rd(a, o, e), (a = a.sibling));
    }
    function rd(a, o, e) {
      switch (a.tag) {
        case 26:
          (Ke(a, o, e),
            a.flags & $e &&
              (a.memoizedState !== null
                ? vS(e, Ro, a.memoizedState, a.memoizedProps)
                : ((a = a.stateNode), (o & 335544128) === o && j0(e, a))));
          break;
        case 5:
          (Ke(a, o, e),
            a.flags & $e &&
              ((a = a.stateNode), (o & 335544128) === o && j0(e, a)));
          break;
        case 3:
        case 4:
          var t = Ro;
          ((Ro = cl(a.stateNode.containerInfo)), Ke(a, o, e), (Ro = t));
          break;
        case 22:
          a.memoizedState === null &&
            ((t = a.alternate),
            t !== null && t.memoizedState !== null
              ? ((t = $e), ($e = 16777216), Ke(a, o, e), ($e = t))
              : Ke(a, o, e));
          break;
        case 30:
          if (
            (a.flags & $e) !== 0 &&
            ((t = a.memoizedProps.name), t != null && t !== "auto")
          ) {
            var n = a.stateNode;
            ((n.paired = null), mo === null && (mo = new Map()), mo.set(t, n));
          }
          Ke(a, o, e);
          break;
        default:
          Ke(a, o, e);
      }
    }
    function id(a) {
      var o = a.alternate;
      if (o !== null && ((a = o.child), a !== null)) {
        o.child = null;
        do ((o = a.sibling), (a.sibling = null), (a = o));
        while (a !== null);
      }
    }
    function Dn(a) {
      var o = a.deletions;
      if ((a.flags & 16) !== 0) {
        if (o !== null)
          for (var e = 0; e < o.length; e++) {
            var t = o[e];
            ((Ra = t), ud(t, a));
          }
        id(a);
      }
      if (a.subtreeFlags & 10256)
        for (a = a.child; a !== null; ) (cd(a), (a = a.sibling));
    }
    function cd(a) {
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          (Dn(a), a.flags & 2048 && Pe(9, a, a.return));
          break;
        case 3:
          Dn(a);
          break;
        case 12:
          Dn(a);
          break;
        case 22:
          var o = a.stateNode;
          a.memoizedState !== null &&
          o._visibility & 2 &&
          (a.return === null || a.return.tag !== 13)
            ? ((o._visibility &= -3), ps(a))
            : Dn(a);
          break;
        default:
          Dn(a);
      }
    }
    function ps(a) {
      var o = a.deletions;
      if ((a.flags & 16) !== 0) {
        if (o !== null)
          for (var e = 0; e < o.length; e++) {
            var t = o[e];
            ((Ra = t), ud(t, a));
          }
        id(a);
      }
      for (a = a.child; a !== null; ) {
        switch (((o = a), o.tag)) {
          case 0:
          case 11:
          case 15:
            (Pe(8, o, o.return), ps(o));
            break;
          case 22:
            ((e = o.stateNode),
              e._visibility & 2 && ((e._visibility &= -3), ps(o)));
            break;
          default:
            ps(o);
        }
        a = a.sibling;
      }
    }
    function ud(a, o) {
      for (; Ra !== null; ) {
        var e = Ra;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Pe(8, e, o);
            break;
          case 23:
          case 22:
            if (
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null
            ) {
              var t = e.memoizedState.cachePool.pool;
              t != null && t.refCount++;
            }
            break;
          case 24:
            Cl(e.memoizedState.cache);
        }
        if (((t = e.child), t !== null)) ((t.return = e), (Ra = t));
        else
          a: for (e = a; Ra !== null; ) {
            t = Ra;
            var n = t.sibling,
              l = t.return;
            if (($p(t), t === e)) {
              Ra = null;
              break a;
            }
            if (n !== null) {
              ((n.return = l), (Ra = n));
              break a;
            }
            Ra = l;
          }
      }
    }
    var gg = {
        getCacheForType: function (a) {
          var o = ka(Na),
            e = o.data.get(a);
          return (e === void 0 && ((e = a()), o.data.set(a, e)), e);
        },
        cacheSignal: function () {
          return ka(Na).controller.signal;
        },
      },
      Sg = typeof WeakMap == "function" ? WeakMap : Map,
      _ = 0,
      Q = null,
      x = null,
      q = 0,
      Z = 0,
      io = null,
      Ne = !1,
      vn = !1,
      Bu = !1,
      pe = 0,
      ra = 0,
      Ze = 0,
      st = 0,
      _s = 0,
      fo = 0,
      sn = 0,
      Qn = null,
      eo = null,
      Ec = !1,
      cr = 0,
      md = 0,
      Gs = 1 / 0,
      Vs = null,
      xe = null,
      na = 0,
      Uo = null,
      dt = null,
      Ko = 0,
      Lc = 0,
      wc = null,
      fd = null,
      $t = null,
      an = null,
      on = null,
      Kn = 0,
      ds = null;
    function go() {
      return (_ & 2) !== 0 && q !== 0 ? q & -q : w.T !== null ? Ou() : h1();
    }
    function pd() {
      if (fo === 0)
        if ((q & 536870912) === 0 || R) {
          var a = Ul;
          ((Ul <<= 1), (Ul & 3932160) === 0 && (Ul = 262144), (fo = a));
        } else fo = 536870912;
      return ((a = Pa.current), a !== null && (a.flags |= 32), fo);
    }
    function rn(a, o) {
      if (o != null) {
        var e = a.stateNode,
          t = e.ref;
        (t === null && (t = e.ref = Rd(ce(a.memoizedProps, e))),
          an === null && (an = []),
          an.push(o.bind(null, t)));
      }
    }
    function lo(a, o, e) {
      (((a === Q && (Z === 2 || Z === 9)) || a.cancelPendingCommit !== null) &&
        (cn(a, 0), Me(a, q, fo, !1)),
        hl(a, e),
        ((_ & 2) === 0 || a !== Q) &&
          (a === Q &&
            ((_ & 2) === 0 && (st |= e), ra === 4 && Me(a, q, fo, !1)),
          $o(a)));
    }
    function dd(a, o, e) {
      if ((_ & 6) !== 0) throw Error(C(327));
      var t = (!e && (o & 127) === 0 && (o & a.expiredLanes) === 0) || Il(a, o),
        n = t ? yg(a, o) : Ei(a, o, !0),
        l = t;
      do {
        if (n === 0) {
          vn && !t && Me(a, o, 0, !1);
          break;
        } else {
          if (((e = a.current.alternate), l && !Cg(e))) {
            ((n = Ei(a, o, !1)), (l = !1));
            continue;
          }
          if (n === 2) {
            if (((l = o), a.errorRecoveryDisabledLanes & l)) var s = 0;
            else
              ((s = a.pendingLanes & -536870913),
                (s = s !== 0 ? s : s & 536870912 ? 536870912 : 0));
            if (s !== 0) {
              o = s;
              a: {
                var i = a;
                n = Qn;
                var c = i.current.memoizedState.isDehydrated;
                if (
                  (c && (cn(i, s).flags |= 256),
                  (s = Ei(i, s, !1)),
                  s !== 2 && s !== 6)
                ) {
                  if (Bu && !c) {
                    ((i.errorRecoveryDisabledLanes |= l), (st |= l), (n = 4));
                    break a;
                  }
                  ((l = eo),
                    (eo = n),
                    l !== null &&
                      (eo === null ? (eo = l) : eo.push.apply(eo, l)));
                }
                n = s;
              }
              if (((l = !1), n !== 2)) continue;
            }
          }
          if (n === 1) {
            (cn(a, 0), Me(a, o, 0, !0));
            break;
          }
          a: {
            switch (((t = a), (l = n), l)) {
              case 0:
              case 1:
                throw Error(C(345));
              case 4:
                if ((o & 4194048) !== o && (o & 62914560) !== o) break;
              case 6:
                Me(t, o, fo, !Ne);
                break a;
              case 2:
                eo = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(C(329));
            }
            if ((o & 62914560) === o && ((n = cr + 300 - po()), 10 < n)) {
              if ((Me(t, o, fo, !Ne), Qs(t, 0, !0) !== 0)) break a;
              ((Ko = o),
                (t.timeoutHandle = zu(
                  y0.bind(
                    null,
                    t,
                    e,
                    eo,
                    Vs,
                    Ec,
                    o,
                    fo,
                    st,
                    sn,
                    Ne,
                    l,
                    "Throttled",
                    -0,
                    0,
                  ),
                  n,
                )));
              break a;
            }
            y0(t, e, eo, Vs, Ec, o, fo, st, sn, Ne, l, null, -0, 0);
          }
        }
        break;
      } while (!0);
      $o(a);
    }
    function y0(a, o, e, t, n, l, s, i, c, m, I, f, u, g) {
      a.timeoutHandle = -1;
      var v = o.subtreeFlags,
        A = (l & 335544064) === l;
      if (
        ((f = null),
        (A || v & 8192 || (v & 16785408) === 16785408) &&
          ((f = {
            stylesheets: null,
            count: 0,
            imgCount: 0,
            imgBytes: 0,
            suspenseyImages: [],
            waitingForImages: !0,
            waitingForViewTransition: !1,
            unsuspend: jo,
          }),
          (mo = null),
          rd(o, l, f),
          A &&
            ((v = f),
            (A = a.containerInfo),
            (A = (A.nodeType === 9 ? A : A.ownerDocument)
              .__reactViewTransition),
            A != null &&
              (v.count++,
              (v.waitingForViewTransition = !0),
              (v = ul.bind(v)),
              A.finished.then(v, v))),
          (v =
            (l & 62914560) === l
              ? cr - po()
              : (l & 4194048) === l
                ? md - po()
                : 0),
          (v = yS(f, v)),
          v !== null))
      ) {
        ((Ko = l),
          (a.cancelPendingCommit = v(
            b0.bind(null, a, o, l, e, t, n, s, i, c, m, I, f, null, u, g),
          )),
          Me(a, l, s, !m));
        return;
      }
      b0(a, o, l, e, t, n, s, i, c, m, I, f);
    }
    function Cg(a) {
      for (var o = a; ; ) {
        var e = o.tag;
        if (
          (e === 0 || e === 11 || e === 15) &&
          o.flags & 16384 &&
          ((e = o.updateQueue), e !== null && ((e = e.stores), e !== null))
        )
          for (var t = 0; t < e.length; t++) {
            var n = e[t],
              l = n.getSnapshot;
            n = n.value;
            try {
              if (!So(l(), n)) return !1;
            } catch {
              return !1;
            }
          }
        if (((e = o.child), o.subtreeFlags & 16384 && e !== null))
          ((e.return = o), (o = e));
        else {
          if (o === a) break;
          for (; o.sibling === null; ) {
            if (o.return === null || o.return === a) return !0;
            o = o.return;
          }
          ((o.sibling.return = o.return), (o = o.sibling));
        }
      }
      return !0;
    }
    function Me(a, o, e, t) {
      ((o = m1(a, o)),
        (o &= ~_s),
        (o &= ~st),
        (a.suspendedLanes |= o),
        (a.pingedLanes &= ~o),
        t && (a.warmLanes |= o),
        (t = a.expirationTimes));
      for (var n = o; 0 < n; ) {
        var l = 31 - ho(n),
          s = 1 << l;
        ((t[l] = -1), (n &= ~s));
      }
      e !== 0 && p1(a, e, o);
    }
    function ur() {
      return (_ & 6) === 0 ? (Al(0, !1), !1) : !0;
    }
    function Hu() {
      if (x !== null) {
        if (Z === 0) var a = x.return;
        else ((a = x), (le = Ct = null), Iu(a), (Kt = null), (tl = 0), (a = x));
        for (; a !== null; ) (Gp(a.alternate, a), (a = a.return));
        x = null;
      }
    }
    function cn(a, o) {
      var e = a.timeoutHandle;
      return (
        e !== -1 && ((a.timeoutHandle = -1), _g(e)),
        (e = a.cancelPendingCommit),
        e !== null && ((a.cancelPendingCommit = null), e()),
        (Ko = 0),
        Hu(),
        (Q = a),
        (x = e = se(a.current, null)),
        (q = o),
        (Z = 0),
        (io = null),
        (Ne = !1),
        (vn = Il(a, o)),
        (Bu = !1),
        (sn = fo = _s = st = Ze = ra = 0),
        (eo = Qn = null),
        (Ec = !1),
        (pe = m1(a, o)),
        ar(),
        e
      );
    }
    function Id(a, o) {
      ((B = null),
        (w.H = zs),
        o === Sn || o === tr
          ? ((o = Yf()), (Z = 3))
          : o === ru
            ? ((o = Yf()), (Z = 4))
            : (Z =
                o === bu
                  ? 8
                  : o !== null &&
                      typeof o == "object" &&
                      typeof o.then == "function"
                    ? 6
                    : 1),
        (io = o),
        x === null && ((ra = 1), Us(a, Lo(o, a.current))));
    }
    function hd() {
      var a = Pa.current;
      return a === null
        ? !0
        : (q & 4194048) === q
          ? Qa === null
          : (q & 62914560) === q || (q & 536870912) !== 0
            ? a === Qa
            : !1;
    }
    function gd() {
      var a = w.H;
      return ((w.H = zs), a === null ? zs : a);
    }
    function Sd() {
      var a = w.A;
      return ((w.A = gg), a);
    }
    function Ps() {
      ((ra = 4),
        Ne || ((q & 4194048) !== q && Pa.current !== null) || (vn = !0),
        ((Ze & 134217727) === 0 && (st & 134217727) === 0) ||
          Q === null ||
          Me(Q, q, fo, !1));
    }
    function Ei(a, o, e) {
      var t = _;
      _ |= 2;
      var n = gd(),
        l = Sd();
      ((Q !== a || q !== o) && ((Vs = null), cn(a, o)), (o = !1));
      var s = ra;
      a: do
        try {
          if (Z !== 0 && x !== null) {
            var i = x,
              c = io;
            switch (Z) {
              case 8:
                (Hu(), (s = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                Pa.current === null && (o = !0);
                var m = Z;
                if (((Z = 0), (io = null), Zt(a, i, c, m), e && vn)) {
                  s = 0;
                  break a;
                }
                break;
              default:
                ((m = Z), (Z = 0), (io = null), Zt(a, i, c, m));
            }
          }
          (vg(), (s = ra));
          break;
        } catch (I) {
          Id(a, I);
        }
      while (!0);
      return (
        o && a.shellSuspendCounter++,
        (le = Ct = null),
        (_ = t),
        (w.H = n),
        (w.A = l),
        x === null && ((Q = null), (q = 0), ar()),
        s
      );
    }
    function vg() {
      for (; x !== null; ) Cd(x);
    }
    function yg(a, o) {
      var e = _;
      _ |= 2;
      var t = gd(),
        n = Sd();
      Q !== a || q !== o
        ? ((Vs = null), (Gs = po() + 500), cn(a, o))
        : (vn = Il(a, o));
      a: do
        try {
          if (Z !== 0 && x !== null) {
            o = x;
            var l = io;
            o: switch (Z) {
              case 1:
                ((Z = 0), (io = null), Zt(a, o, l, 1));
                break;
              case 2:
              case 9:
                if (Xf(l)) {
                  ((Z = 0), (io = null), A0(o));
                  break;
                }
                ((o = function () {
                  ((Z !== 2 && Z !== 9) || Q !== a || (Z = 7), $o(a));
                }),
                  l.then(o, o));
                break a;
              case 3:
                Z = 7;
                break a;
              case 4:
                Z = 5;
                break a;
              case 7:
                Xf(l)
                  ? ((Z = 0), (io = null), A0(o))
                  : ((Z = 0), (io = null), Zt(a, o, l, 7));
                break;
              case 5:
                var s = null;
                switch (x.tag) {
                  case 26:
                    s = x.memoizedState;
                  case 5:
                  case 27:
                    var i = x;
                    if (s ? Pd(s) : i.stateNode.complete) {
                      ((Z = 0), (io = null));
                      var c = i.sibling;
                      if (c !== null) x = c;
                      else {
                        var m = i.return;
                        m !== null ? ((x = m), mr(m)) : (x = null);
                      }
                      break o;
                    }
                }
                ((Z = 0), (io = null), Zt(a, o, l, 5));
                break;
              case 6:
                ((Z = 0), (io = null), Zt(a, o, l, 6));
                break;
              case 8:
                (Hu(), (ra = 6));
                break a;
              default:
                throw Error(C(462));
            }
          }
          Ag();
          break;
        } catch (I) {
          Id(a, I);
        }
      while (!0);
      return (
        (le = Ct = null),
        (w.H = t),
        (w.A = n),
        (_ = e),
        x !== null ? 0 : ((Q = null), (q = 0), ar(), ra)
      );
    }
    function Ag() {
      for (; x !== null && !FI(); ) Cd(x);
    }
    function Cd(a) {
      var o = _p(a.alternate, a, pe);
      ((a.memoizedProps = a.pendingProps), o === null ? mr(a) : (x = o));
    }
    function A0(a) {
      var o = a,
        e = o.alternate;
      switch (o.tag) {
        case 15:
        case 0:
          o = u0(e, o, o.pendingProps, o.type, void 0, q);
          break;
        case 11:
          o = u0(e, o, o.pendingProps, o.type.render, o.ref, q);
          break;
        case 5:
          Iu(o);
          var t = o;
          t === Ua &&
            (R
              ? (Ns(t), t.tag === 5 && t.stateNode != null && ($ = t.stateNode))
              : (Ns(t), (R = !0)));
        default:
          (Gp(e, o), (o = x = V1(o, pe)), (o = _p(e, o, pe)));
      }
      ((a.memoizedProps = a.pendingProps), o === null ? mr(a) : (x = o));
    }
    function Zt(a, o, e, t) {
      ((le = Ct = null), Iu(o), (Kt = null), (tl = 0));
      var n = o.return;
      try {
        if (cg(a, n, o, e, q)) {
          ((ra = 1), Us(a, Lo(e, a.current)), (x = null));
          return;
        }
      } catch (l) {
        if (n !== null) throw ((x = n), l);
        ((ra = 1), Us(a, Lo(e, a.current)), (x = null));
        return;
      }
      o.flags & 32768
        ? (R || t === 1
            ? (a = !0)
            : vn || (q & 536870912) !== 0
              ? (a = !1)
              : ((Ne = a = !0),
                (t === 2 || t === 9 || t === 3 || t === 6) &&
                  ((t = Pa.current),
                  t !== null && t.tag === 13 && (t.flags |= 16384))),
          vd(o, a))
        : mr(o);
    }
    function mr(a) {
      var o = a;
      do {
        if ((o.flags & 32768) !== 0) {
          vd(o, Ne);
          return;
        }
        a = o.return;
        var e = pg(o.alternate, o, pe);
        if (e !== null) {
          x = e;
          return;
        }
        if (((o = o.sibling), o !== null)) {
          x = o;
          return;
        }
        x = o = a;
      } while (o !== null);
      ra === 0 && (ra = 5);
    }
    function vd(a, o) {
      do {
        var e = dg(a.alternate, a);
        if (e !== null) {
          ((e.flags &= 32767), (x = e));
          return;
        }
        if (
          ((e = a.return),
          e !== null &&
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
          !o && ((a = a.sibling), a !== null))
        ) {
          x = a;
          return;
        }
        x = a = e;
      } while (a !== null);
      ((ra = 6), (x = null));
    }
    function b0(a, o, e, t, n, l, s, i, c, m, I, f) {
      a.cancelPendingCommit = null;
      do fr();
      while (na !== 0);
      if ((_ & 6) !== 0) throw Error(C(327));
      if (o !== null) {
        if (o === a.current) throw Error(C(177));
        (a === Q && ((x = Q = null), (q = 0)),
          (dt = o),
          (Uo = a),
          (Ko = e),
          (wc = n),
          (fd = t),
          bg(a, o, e, s, i, c, f));
      }
    }
    function bg(a, o, e, t, n, l, s) {
      var i = o.lanes | o.childLanes;
      if (
        ((Lc = i),
        (i |= ou),
        QI(a, e, i, t, n, l),
        (an = null),
        (e & 335544064) === e
          ? ((on = Jh(a)), (t = 10262))
          : ((on = null), (t = 10256)),
        (o.subtreeFlags & t) !== 0 || (o.flags & t) !== 0
          ? ((a.callbackNode = null),
            (a.callbackPriority = 0),
            Mg(bs, function () {
              return (Bc(), null);
            }))
          : ((a.callbackNode = null), (a.callbackPriority = 0)),
        (Fs = !1),
        (t = (o.flags & 13878) !== 0),
        (o.subtreeFlags & 13878) !== 0 || t)
      ) {
        ((t = w.T), (w.T = null), (n = G.p), (G.p = 2), (l = _), (_ |= 4));
        try {
          Ig(a, o, e);
        } finally {
          ((_ = l), (G.p = n), (w.T = t));
        }
      }
      ((na = 1),
        Fs
          ? ($t = Xg(
              s,
              a.containerInfo,
              on,
              Nc,
              Mc,
              Eg,
              Dc,
              Bc,
              Tg,
              null,
              null,
            ))
          : (Nc(), Mc(), Dc()));
    }
    function Tg(a) {
      if (na !== 0) {
        var o = Uo.onRecoverableError;
        o(a, { componentStack: null });
      }
    }
    function Eg() {
      na === 3 && ((na = 0), ld(dt, Uo), (na = 4));
    }
    function Nc() {
      if (na === 1) {
        na = 0;
        var a = Uo,
          o = dt,
          e = Ko,
          t = (o.flags & 13878) !== 0;
        if ((o.subtreeFlags & 13878) !== 0 || t) {
          ((t = w.T), (w.T = null));
          var n = G.p;
          G.p = 2;
          var l = _;
          _ |= 4;
          try {
            ((xn = ks = !1), td(o, a, e), (e = zc));
            var s = z1(a.containerInfo),
              i = e.focusedElem,
              c = e.selectionRange;
            if (
              s !== i &&
              i &&
              i.ownerDocument &&
              R1(i.ownerDocument.documentElement, i)
            ) {
              if (c !== null && au(i)) {
                var m = c.start,
                  I = c.end;
                if ((I === void 0 && (I = m), "selectionStart" in i))
                  ((i.selectionStart = m),
                    (i.selectionEnd = Math.min(I, i.value.length)));
                else {
                  var f = i.ownerDocument || document,
                    u = (f && f.defaultView) || window;
                  if (u.getSelection) {
                    var g = u.getSelection(),
                      v = i.textContent.length,
                      A = Math.min(c.start, v),
                      y = c.end === void 0 ? A : Math.min(c.end, v);
                    !g.extend && A > y && ((s = y), (y = A), (A = s));
                    var h = Ff(i, A),
                      p = Ff(i, y);
                    if (
                      h &&
                      p &&
                      (g.rangeCount !== 1 ||
                        g.anchorNode !== h.node ||
                        g.anchorOffset !== h.offset ||
                        g.focusNode !== p.node ||
                        g.focusOffset !== p.offset)
                    ) {
                      var d = f.createRange();
                      (d.setStart(h.node, h.offset),
                        g.removeAllRanges(),
                        A > y
                          ? (g.addRange(d), g.extend(p.node, p.offset))
                          : (d.setEnd(p.node, p.offset), g.addRange(d)));
                    }
                  }
                }
              }
              for (f = [], g = i; (g = g.parentNode); )
                g.nodeType === 1 &&
                  f.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
              for (
                typeof i.focus == "function" && i.focus(), i = 0;
                i < f.length;
                i++
              ) {
                var S = f[i];
                ((S.element.scrollLeft = S.left),
                  (S.element.scrollTop = S.top));
              }
            }
            ((dn = !!Rc), (zc = Rc = null));
          } finally {
            ((_ = l), (G.p = n), (w.T = t));
          }
        }
        ((a.current = o), (na = 2));
      }
    }
    function Mc() {
      if (na === 2) {
        na = 0;
        var a = Uo,
          o = dt,
          e = (o.flags & 8772) !== 0;
        if ((o.subtreeFlags & 8772) !== 0 || e) {
          ((e = w.T), (w.T = null));
          var t = G.p;
          G.p = 2;
          var n = _;
          _ |= 4;
          try {
            Jp(a, o.alternate, o);
          } finally {
            ((_ = n), (G.p = t), (w.T = e));
          }
        }
        na = 3;
      }
    }
    function Dc() {
      if (na === 4 || na === 3) {
        na = 0;
        var a = $t;
        (($t = null), kI());
        var o = Uo,
          e = dt,
          t = Ko,
          n = fd,
          l = (t & 335544064) === t ? 10262 : 10256;
        if (
          ((e.subtreeFlags & l) !== 0 || (e.flags & l) !== 0
            ? (na = 5)
            : ((na = 0), (dt = Uo = null), yd(o, o.pendingLanes)),
          (l = o.pendingLanes),
          l === 0 && (xe = null),
          Yc(t),
          (e = e.stateNode),
          Io && typeof Io.onCommitFiberRoot == "function")
        )
          try {
            Io.onCommitFiberRoot(
              dl,
              e,
              void 0,
              (e.current.flags & 128) === 128,
            );
          } catch {}
        if (n !== null) {
          ((e = w.T), (l = G.p), (G.p = 2), (w.T = null));
          try {
            for (var s = o.onRecoverableError, i = 0; i < n.length; i++) {
              var c = n[i];
              s(c.value, { componentStack: c.stack });
            }
          } finally {
            ((w.T = e), (G.p = l));
          }
        }
        if (
          ((n = an),
          (s = on),
          (on = null),
          n !== null && ((an = null), s === null && (s = []), a !== null))
        )
          for (c = 0; c < n.length; c++)
            ((e = (0, n[c])(s)), e !== void 0 && a.finished.finally(e));
        ((Ko & 3) !== 0 && fr(),
          $o(o),
          (l = o.pendingLanes),
          (t & 261930) !== 0 && (l & 42) !== 0
            ? o === ds
              ? Kn++
              : ((Kn = 0), (ds = o))
            : ((Kn = 0), (ds = null)),
          Al(0, !1));
      }
    }
    function yd(a, o) {
      (a.pooledCacheLanes &= o) === 0 &&
        ((o = a.pooledCache), o != null && ((a.pooledCache = null), Cl(o)));
    }
    function fr() {
      return (
        $t !== null && ($t.skipTransition(), ($t = null)),
        Nc(),
        Mc(),
        Dc(),
        Bc()
      );
    }
    function Bc() {
      if (na !== 5) return !1;
      var a = Uo,
        o = Lc;
      Lc = 0;
      var e = Yc(Ko),
        t = w.T,
        n = G.p;
      try {
        ((G.p = 32 > e ? 32 : e), (w.T = null), (e = wc), (wc = null));
        var l = Uo,
          s = Ko;
        if (((na = 0), (dt = Uo = null), (Ko = 0), (_ & 6) !== 0))
          throw Error(C(331));
        var i = _;
        if (
          ((_ |= 4),
          cd(l.current),
          sd(l, l.current, s, e),
          (_ = i),
          Al(0, !1),
          Io && typeof Io.onPostCommitFiberRoot == "function")
        )
          try {
            Io.onPostCommitFiberRoot(dl, l);
          } catch {}
        return !0;
      } finally {
        ((G.p = n), (w.T = t), yd(a, o));
      }
    }
    function T0(a, o, e) {
      ((o = Lo(e, o)),
        (o = uc(a.stateNode, o, 2)),
        (a = Re(a, o, 2)),
        a !== null && (hl(a, 2), $o(a)));
    }
    function X(a, o, e) {
      if (a.tag === 3) T0(a, a, e);
      else
        for (; o !== null; ) {
          if (o.tag === 3) {
            T0(o, a, e);
            break;
          } else if (o.tag === 1) {
            var t = o.stateNode;
            if (
              typeof o.type.getDerivedStateFromError == "function" ||
              (typeof t.componentDidCatch == "function" &&
                (xe === null || !xe.has(t)))
            ) {
              ((a = Lo(e, a)),
                (e = Up(2)),
                (t = Re(o, e, 2)),
                t !== null && (xp(e, t, o, a), hl(t, 2), $o(t)));
              break;
            }
          }
          o = o.return;
        }
    }
    function Li(a, o, e) {
      var t = a.pingCache;
      if (t === null) {
        t = a.pingCache = new Sg();
        var n = new Set();
        t.set(o, n);
      } else ((n = t.get(o)), n === void 0 && ((n = new Set()), t.set(o, n)));
      n.has(e) ||
        ((Bu = !0), n.add(e), (a = Lg.bind(null, a, o, e)), o.then(a, a));
    }
    function Lg(a, o, e) {
      var t = a.pingCache;
      (t !== null && t.delete(o),
        (a.pingedLanes |= a.suspendedLanes & e),
        (a.warmLanes &= ~e),
        Q === a &&
          (q & e) === e &&
          ((ra === 4 ||
            (ra === 3 && (q & 62914560) === q && 300 > po() - cr)) &&
          (_ & 2) === 0
            ? cn(a, 0)
            : (_s |= e),
          sn === q && (sn = 0)),
        $o(a));
    }
    function Ad(a, o) {
      (o === 0 && (o = f1()), (a = St(a, o)), a !== null && (hl(a, o), $o(a)));
    }
    function wg(a) {
      var o = a.memoizedState,
        e = 0;
      (o !== null && (e = o.retryLane), Ad(a, e));
    }
    function Ng(a, o) {
      var e = 0;
      switch (a.tag) {
        case 31:
        case 13:
          var t = a.stateNode,
            n = a.memoizedState;
          n !== null && (e = n.retryLane);
          break;
        case 19:
          t = a.stateNode;
          break;
        case 22:
          t = a.stateNode._retryCache;
          break;
        default:
          throw Error(C(314));
      }
      (t !== null && t.delete(o), Ad(a, e));
    }
    function Mg(a, o) {
      return jc(a, o);
    }
    var un = null,
      Ot = null,
      Hc = !1,
      Zs = !1,
      wi = !1,
      De = 0;
    function $o(a) {
      (a !== Ot &&
        a.next === null &&
        (Ot === null ? (un = Ot = a) : (Ot = Ot.next = a)),
        (Zs = !0),
        Hc || ((Hc = !0), Bg()));
    }
    function Al(a, o) {
      if (!wi && Zs) {
        wi = !0;
        do
          for (var e = !1, t = un; t !== null; ) {
            if (!o)
              if (a !== 0) {
                var n = t.pendingLanes;
                if (n === 0) var l = 0;
                else {
                  var s = t.suspendedLanes,
                    i = t.pingedLanes;
                  ((l = (1 << (31 - ho(42 | a) + 1)) - 1),
                    (l &= n & ~(s & ~i)),
                    (l = l & 201326741 ? (l & 201326741) | 1 : l ? l | 2 : 0));
                }
                l !== 0 && ((e = !0), E0(t, l));
              } else
                ((l = q),
                  (l = Qs(
                    t,
                    t === Q ? l : 0,
                    t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
                  )),
                  (l & 3) === 0 || Il(t, l) || ((e = !0), E0(t, l)));
            t = t.next;
          }
        while (e);
        wi = !1;
      }
    }
    function Dg() {
      bd();
    }
    function bd() {
      Zs = Hc = !1;
      var a = 0;
      De !== 0 && kg() && (a = De);
      for (var o = po(), e = null, t = un; t !== null; ) {
        var n = t.next,
          l = Td(t, o);
        (l === 0
          ? ((t.next = null),
            e === null ? (un = n) : (e.next = n),
            n === null && (Ot = e))
          : ((e = t), (a !== 0 || (l & 3) !== 0) && (Zs = !0)),
          (t = n));
      }
      ((na !== 0 && na !== 5) || Al(a, !1), De !== 0 && (De = 0));
    }
    function Td(a, o) {
      for (
        var e = a.suspendedLanes,
          t = a.pingedLanes,
          n = a.expirationTimes,
          l = a.pendingLanes & -62914561;
        0 < l;
      ) {
        var s = 31 - ho(l),
          i = 1 << s,
          c = n[s];
        (c === -1
          ? ((i & e) === 0 || (i & t) !== 0) && (n[s] = YI(i, o))
          : c <= o && (a.expiredLanes |= i),
          (l &= ~i));
      }
      if (
        ((o = Q),
        (e = q),
        (e = Qs(
          a,
          a === o ? e : 0,
          a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
        )),
        (t = a.callbackNode),
        e === 0 ||
          (a === o && (Z === 2 || Z === 9)) ||
          a.cancelPendingCommit !== null)
      )
        return (
          t !== null && t !== null && li(t),
          (a.callbackNode = null),
          (a.callbackPriority = 0)
        );
      if ((e & 3) === 0 || Il(a, e)) {
        if (((o = e & -e), o === a.callbackPriority)) return o;
        switch ((t !== null && li(t), Yc(e))) {
          case 2:
          case 8:
            e = c1;
            break;
          case 32:
            e = bs;
            break;
          case 268435456:
            e = u1;
            break;
          default:
            e = bs;
        }
        return (
          (t = Ed.bind(null, a)),
          (e = jc(e, t)),
          (a.callbackPriority = o),
          (a.callbackNode = e),
          o
        );
      }
      return (
        t !== null && t !== null && li(t),
        (a.callbackPriority = 2),
        (a.callbackNode = null),
        2
      );
    }
    function Ed(a, o) {
      if (na !== 0 && na !== 5)
        return ((a.callbackNode = null), (a.callbackPriority = 0), null);
      var e = a.callbackNode;
      if (fr() && a.callbackNode !== e) return null;
      var t = q;
      return (
        (t = Qs(
          a,
          a === Q ? t : 0,
          a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
        )),
        t === 0
          ? null
          : (dd(a, t, o),
            Td(a, po()),
            a.callbackNode != null && a.callbackNode === e
              ? Ed.bind(null, a)
              : null)
      );
    }
    function E0(a, o) {
      if (fr()) return null;
      dd(a, o, !0);
    }
    function Bg() {
      Gg(function () {
        (_ & 6) !== 0 ? jc(i1, Dg) : bd();
      });
    }
    function Ou() {
      if (De === 0) {
        var a = ut;
        (a === 0 && ((a = zl), (zl <<= 1), (zl & 261888) === 0 && (zl = 256)),
          (De = a));
      }
      return De;
    }
    function L0(a) {
      return a == null || typeof a == "symbol" || typeof a == "boolean"
        ? null
        : typeof a == "function"
          ? a
          : es(a);
    }
    function Hg(a, o, e, t, n) {
      if (o === "submit" && e && e.stateNode === n) {
        var l = L0((n[ro] || null).action),
          s = t.submitter;
        s &&
          ((o = (o = s[ro] || null)
            ? L0(o.formAction)
            : s.getAttribute("formAction")),
          o !== null && ((l = o), (s = null)));
        var i = new Js("action", "action", null, t, n);
        a.push({
          event: i,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (t.defaultPrevented) {
                  if (De !== 0) {
                    var c = new FormData(n, s);
                    ic(
                      e,
                      { pending: !0, data: c, method: n.method, action: l },
                      null,
                      c,
                    );
                  }
                } else
                  typeof l == "function" &&
                    (i.preventDefault(),
                    (c = new FormData(n, s)),
                    ic(
                      e,
                      { pending: !0, data: c, method: n.method, action: l },
                      l,
                      c,
                    ));
              },
              currentTarget: n,
            },
          ],
        });
      }
    }
    for (Kl = 0; Kl < Ji.length; Kl++)
      ((Jl = Ji[Kl]),
        (w0 = Jl.toLowerCase()),
        (N0 = Jl[0].toUpperCase() + Jl.slice(1)),
        xo(w0, "on" + N0));
    var Jl, w0, N0, Kl;
    xo(x1, "onAnimationEnd");
    xo(q1, "onAnimationIteration");
    xo(F1, "onAnimationStart");
    xo("dblclick", "onDoubleClick");
    xo("focusin", "onFocus");
    xo("focusout", "onBlur");
    xo(Vh, "onTransitionRun");
    xo(Ph, "onTransitionStart");
    xo(Zh, "onTransitionCancel");
    xo(k1, "onTransitionEnd");
    tn("onMouseEnter", ["mouseout", "mouseover"]);
    tn("onMouseLeave", ["mouseout", "mouseover"]);
    tn("onPointerEnter", ["pointerout", "pointerover"]);
    tn("onPointerLeave", ["pointerout", "pointerover"]);
    ht(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    );
    ht(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    );
    ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    ht(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    );
    ht(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    );
    ht(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
    var sl =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " ",
        ),
      Og = new Set(
        "beforetoggle cancel close invalid load scroll scrollend toggle"
          .split(" ")
          .concat(sl),
      );
    function Ld(a, o) {
      o = (o & 4) !== 0;
      for (var e = 0; e < a.length; e++) {
        var t = a[e],
          n = t.event;
        t = t.listeners;
        a: {
          var l = void 0;
          if (o)
            for (var s = t.length - 1; 0 <= s; s--) {
              var i = t[s],
                c = i.instance,
                m = i.currentTarget;
              if (((i = i.listener), c !== l && n.isPropagationStopped()))
                break a;
              ((l = i), (n.currentTarget = m));
              try {
                l(n);
              } catch (I) {
                Es(I);
              }
              ((n.currentTarget = null), (l = c));
            }
          else
            for (s = 0; s < t.length; s++) {
              if (
                ((i = t[s]),
                (c = i.instance),
                (m = i.currentTarget),
                (i = i.listener),
                c !== l && n.isPropagationStopped())
              )
                break a;
              ((l = i), (n.currentTarget = m));
              try {
                l(n);
              } catch (I) {
                Es(I);
              }
              ((n.currentTarget = null), (l = c));
            }
        }
      }
    }
    function U(a, o) {
      var e = o[Af];
      e === void 0 && (e = o[Af] = new Set());
      var t = a + "__bubble";
      e.has(t) || (wd(o, a, 2, !1), e.add(t));
    }
    function Ni(a, o, e) {
      var t = 0;
      (o && (t |= 4), wd(e, a, t, o));
    }
    var Wl = "_reactListening" + Math.random().toString(36).slice(2);
    function Ru(a) {
      if (!a[Wl]) {
        ((a[Wl] = !0),
          S1.forEach(function (e) {
            e !== "selectionchange" &&
              (Og.has(e) || Ni(e, !1, a), Ni(e, !0, a));
          }));
        var o = a.nodeType === 9 ? a : a.ownerDocument;
        o === null || o[Wl] || ((o[Wl] = !0), Ni("selectionchange", !1, o));
      }
    }
    function wd(a, o, e, t) {
      switch (Jd(o)) {
        case 2:
          var n = ES;
          break;
        case 8:
          n = LS;
          break;
        default:
          n = _u;
      }
      ((e = n.bind(null, o, e, a)),
        (n = void 0),
        !Xi ||
          (o !== "touchstart" && o !== "touchmove" && o !== "wheel") ||
          (n = !0),
        t
          ? n !== void 0
            ? a.addEventListener(o, e, { capture: !0, passive: n })
            : a.addEventListener(o, e, !0)
          : n !== void 0
            ? a.addEventListener(o, e, { passive: n })
            : a.addEventListener(o, e, !1));
    }
    function Mi(a, o, e, t, n) {
      var l = t;
      if ((o & 1) === 0 && (o & 2) === 0 && t !== null)
        a: for (;;) {
          if (t === null) return;
          var s = t.tag;
          if (s === 3 || s === 4) {
            var i = t.stateNode.containerInfo;
            if (i === n) break;
            if (s === 4)
              for (s = t.return; s !== null; ) {
                var c = s.tag;
                if ((c === 3 || c === 4) && s.stateNode.containerInfo === n)
                  return;
                s = s.return;
              }
            for (; i !== null; ) {
              if (((s = at(i)), s === null)) return;
              if (((c = s.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
                t = l = s;
                continue a;
              }
              i = i.parentNode;
            }
          }
          t = t.return;
        }
      L1(function () {
        var m = l,
          I = Kc(e),
          f = [];
        a: {
          var u = _1.get(a);
          if (u !== void 0) {
            var g = Js,
              v = a;
            switch (a) {
              case "keypress":
                if (ns(e) === 0) break a;
              case "keydown":
              case "keyup":
                g = Ch;
                break;
              case "focusin":
                ((v = "focus"), (g = mi));
                break;
              case "focusout":
                ((v = "blur"), (g = mi));
                break;
              case "beforeblur":
              case "afterblur":
                g = mi;
                break;
              case "click":
                if (e.button === 2) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                g = Df;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                g = rh;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                g = Th;
                break;
              case x1:
              case q1:
              case F1:
                g = uh;
                break;
              case k1:
                g = Lh;
                break;
              case "scroll":
              case "scrollend":
                g = lh;
                break;
              case "wheel":
                g = Nh;
                break;
              case "copy":
              case "cut":
              case "paste":
                g = fh;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                g = Hf;
                break;
              case "submit":
                g = Ah;
                break;
              case "toggle":
              case "beforetoggle":
                g = Dh;
            }
            var A = (o & 4) !== 0,
              y = !A && (a === "scroll" || a === "scrollend"),
              h = A ? (u !== null ? u + "Capture" : null) : u;
            A = [];
            for (var p = m, d; p !== null; ) {
              var S = p;
              if (
                ((d = S.stateNode),
                (S = S.tag),
                (S !== 5 && S !== 26 && S !== 27) ||
                  d === null ||
                  h === null ||
                  ((S = Wn(p, h)), S != null && A.push(rl(p, S, d))),
                y)
              )
                break;
              p = p.return;
            }
            0 < A.length &&
              ((u = new g(u, v, null, e, I)),
              f.push({ event: u, listeners: A }));
          }
        }
        if ((o & 7) === 0) {
          a: {
            if (
              ((g = a === "mouseover" || a === "pointerover"),
              (u = a === "mouseout" || a === "pointerout"),
              g &&
                e !== ji &&
                (v = e.relatedTarget || e.fromElement) &&
                (at(v) || v[hn]))
            )
              break a;
            (u || g) &&
              ((v =
                I.window === I
                  ? I
                  : (g = I.ownerDocument)
                    ? g.defaultView || g.parentWindow
                    : window),
              u
                ? ((g = e.relatedTarget || e.toElement),
                  (u = m),
                  (g = g ? at(g) : null),
                  g !== null &&
                    ((y = pl(g)),
                    (A = g.tag),
                    g !== y || (A !== 5 && A !== 27 && A !== 6)) &&
                    (g = null))
                : ((u = null), (g = m)),
              u !== g &&
                ((A = Df),
                (S = "onMouseLeave"),
                (h = "onMouseEnter"),
                (p = "mouse"),
                (a === "pointerout" || a === "pointerover") &&
                  ((A = Hf),
                  (S = "onPointerLeave"),
                  (h = "onPointerEnter"),
                  (p = "pointer")),
                (y = u == null ? v : zn(u)),
                (d = g == null ? v : zn(g)),
                (v = new A(S, p + "leave", u, e, I)),
                (v.target = y),
                (v.relatedTarget = d),
                (S = null),
                at(I) === m &&
                  ((A = new A(h, p + "enter", g, e, I)),
                  (A.target = d),
                  (A.relatedTarget = y),
                  (S = A)),
                (y = S),
                (A = u && g ? Ri(u, g, Rg) : null),
                u !== null && M0(f, v, u, A, !1),
                g !== null && y !== null && M0(f, y, g, A, !0)));
          }
          a: {
            if (
              ((u = m ? zn(m) : window),
              (g = u.nodeName && u.nodeName.toLowerCase()),
              g === "select" || (g === "input" && u.type === "file"))
            )
              var b = Uf;
            else if (zf(u))
              if (H1) b = kh;
              else {
                b = qh;
                var O = xh;
              }
            else
              ((g = u.nodeName),
                !g ||
                g.toLowerCase() !== "input" ||
                (u.type !== "checkbox" && u.type !== "radio")
                  ? m && Qc(m.elementType) && (b = Uf)
                  : (b = Fh));
            if (b && (b = b(a, m))) {
              B1(f, b, e, I);
              break a;
            }
            O && O(a, u, m);
          }
          switch (((O = m ? zn(m) : window), a)) {
            case "focusin":
              (zf(O) || O.contentEditable === "true") &&
                ((Ft = O), (Qi = m), (kn = null));
              break;
            case "focusout":
              kn = Qi = Ft = null;
              break;
            case "mousedown":
              Ki = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              ((Ki = !1), kf(f, e, I));
              break;
            case "selectionchange":
              if (Gh) break;
            case "keydown":
            case "keyup":
              kf(f, e, I);
          }
          var T;
          if ($c)
            a: {
              switch (a) {
                case "compositionstart":
                  var E = "onCompositionStart";
                  break a;
                case "compositionend":
                  E = "onCompositionEnd";
                  break a;
                case "compositionupdate":
                  E = "onCompositionUpdate";
                  break a;
              }
              E = void 0;
            }
          else
            qt
              ? M1(a, e) && (E = "onCompositionEnd")
              : a === "keydown" &&
                e.keyCode === 229 &&
                (E = "onCompositionStart");
          (E &&
            (N1 &&
              e.locale !== "ko" &&
              (qt || E !== "onCompositionStart"
                ? E === "onCompositionEnd" && qt && (T = w1())
                : ((Le = I),
                  (Jc = "value" in Le ? Le.value : Le.textContent),
                  (qt = !0))),
            (O = js(m, E)),
            0 < O.length &&
              ((E = new Bf(E, a, null, e, I)),
              f.push({ event: E, listeners: O }),
              T ? (E.data = T) : ((T = D1(e)), T !== null && (E.data = T)))),
            (T = Hh ? Oh(a, e) : Rh(a, e)) &&
              ((E = js(m, "onBeforeInput")),
              0 < E.length &&
                ((O = new Bf("onBeforeInput", "beforeinput", null, e, I)),
                f.push({ event: O, listeners: E }),
                (O.data = T))),
            Hg(f, a, m, e, I));
        }
        Ld(f, o);
      });
    }
    function rl(a, o, e) {
      return { instance: a, listener: o, currentTarget: e };
    }
    function js(a, o) {
      for (var e = o + "Capture", t = []; a !== null; ) {
        var n = a,
          l = n.stateNode;
        if (
          ((n = n.tag),
          (n !== 5 && n !== 26 && n !== 27) ||
            l === null ||
            ((n = Wn(a, e)),
            n != null && t.unshift(rl(a, n, l)),
            (n = Wn(a, o)),
            n != null && t.push(rl(a, n, l))),
          a.tag === 3)
        )
          return t;
        a = a.return;
      }
      return [];
    }
    function Rg(a) {
      if (a === null) return null;
      do a = a.return;
      while (a && a.tag !== 5 && a.tag !== 27);
      return a || null;
    }
    function M0(a, o, e, t, n) {
      for (var l = o._reactName, s = []; e !== null && e !== t; ) {
        var i = e,
          c = i.alternate,
          m = i.stateNode;
        if (((i = i.tag), c !== null && c === t)) break;
        ((i !== 5 && i !== 26 && i !== 27) ||
          m === null ||
          ((c = m),
          n
            ? ((m = Wn(e, l)), m != null && s.unshift(rl(e, m, c)))
            : n || ((m = Wn(e, l)), m != null && s.push(rl(e, m, c)))),
          (e = e.return));
      }
      s.length !== 0 && a.push({ event: o, listeners: s });
    }
    var zg = /\r\n?/g,
      Ug = /\u0000|\uFFFD/g;
    function D0(a) {
      return (typeof a == "string" ? a : "" + a)
        .replace(
          zg,
          `
`,
        )
        .replace(Ug, "");
    }
    function Nd(a, o) {
      return ((o = D0(o)), D0(a) === o);
    }
    function j(a, o, e, t, n, l) {
      switch (e) {
        case "children":
          if (typeof t == "string")
            o === "body" || (o === "textarea" && t === "") || nn(a, t);
          else if (typeof t == "number" || typeof t == "bigint")
            o !== "body" && nn(a, "" + t);
          else return;
          break;
        case "className":
          ql(a, "class", t);
          break;
        case "tabIndex":
          ql(a, "tabindex", t);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ql(a, e, t);
          break;
        case "style":
          E1(a, t, l);
          return;
        case "data":
          if (o !== "object") {
            ql(a, "data", t);
            break;
          }
        case "src":
        case "href":
          if (t === "" && (o !== "a" || e !== "href")) {
            a.removeAttribute(e);
            break;
          }
          if (
            t == null ||
            typeof t == "function" ||
            typeof t == "symbol" ||
            typeof t == "boolean"
          ) {
            a.removeAttribute(e);
            break;
          }
          ((t = es(t)), a.setAttribute(e, t));
          break;
        case "action":
        case "formAction":
          if (typeof t == "function") {
            a.setAttribute(
              e,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
            );
            break;
          } else
            typeof l == "function" &&
              (e === "formAction"
                ? (o !== "input" && j(a, o, "name", n.name, n, null),
                  j(a, o, "formEncType", n.formEncType, n, null),
                  j(a, o, "formMethod", n.formMethod, n, null),
                  j(a, o, "formTarget", n.formTarget, n, null))
                : (j(a, o, "encType", n.encType, n, null),
                  j(a, o, "method", n.method, n, null),
                  j(a, o, "target", n.target, n, null)));
          if (t == null || typeof t == "symbol" || typeof t == "boolean") {
            a.removeAttribute(e);
            break;
          }
          ((t = es(t)), a.setAttribute(e, t));
          break;
        case "onClick":
          t != null && (a.onclick = jo);
          return;
        case "onScroll":
          t != null && U("scroll", a);
          return;
        case "onScrollEnd":
          t != null && U("scrollend", a);
          return;
        case "dangerouslySetInnerHTML":
          if (t != null) {
            if (typeof t != "object" || !("__html" in t)) throw Error(C(61));
            if (((e = t.__html), e != null)) {
              if (n.children != null) throw Error(C(60));
              l?.__html !== e && (a.innerHTML = e);
            }
          }
          break;
        case "multiple":
          a.multiple = t && typeof t != "function" && typeof t != "symbol";
          break;
        case "muted":
          a.muted = t && typeof t != "function" && typeof t != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (
            t == null ||
            typeof t == "function" ||
            typeof t == "boolean" ||
            typeof t == "symbol"
          ) {
            a.removeAttribute("xlink:href");
            break;
          }
          ((e = es(t)),
            a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e));
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          t != null && typeof t != "function" && typeof t != "symbol"
            ? a.setAttribute(e, t)
            : a.removeAttribute(e);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "credentialless":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          t && typeof t != "function" && typeof t != "symbol"
            ? a.setAttribute(e, "")
            : a.removeAttribute(e);
          break;
        case "capture":
        case "download":
          t === !0
            ? a.setAttribute(e, "")
            : t !== !1 &&
                t != null &&
                typeof t != "function" &&
                typeof t != "symbol"
              ? a.setAttribute(e, t)
              : a.removeAttribute(e);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          t != null &&
          typeof t != "function" &&
          typeof t != "symbol" &&
          !isNaN(t) &&
          1 <= t
            ? a.setAttribute(e, t)
            : a.removeAttribute(e);
          break;
        case "rowSpan":
        case "start":
          t == null ||
          typeof t == "function" ||
          typeof t == "symbol" ||
          isNaN(t)
            ? a.removeAttribute(e)
            : a.setAttribute(e, t);
          break;
        case "popover":
          (U("beforetoggle", a), U("toggle", a), os(a, "popover", t));
          break;
        case "xlinkActuate":
          ee(a, "http://www.w3.org/1999/xlink", "xlink:actuate", t);
          break;
        case "xlinkArcrole":
          ee(a, "http://www.w3.org/1999/xlink", "xlink:arcrole", t);
          break;
        case "xlinkRole":
          ee(a, "http://www.w3.org/1999/xlink", "xlink:role", t);
          break;
        case "xlinkShow":
          ee(a, "http://www.w3.org/1999/xlink", "xlink:show", t);
          break;
        case "xlinkTitle":
          ee(a, "http://www.w3.org/1999/xlink", "xlink:title", t);
          break;
        case "xlinkType":
          ee(a, "http://www.w3.org/1999/xlink", "xlink:type", t);
          break;
        case "xmlBase":
          ee(a, "http://www.w3.org/XML/1998/namespace", "xml:base", t);
          break;
        case "xmlLang":
          ee(a, "http://www.w3.org/XML/1998/namespace", "xml:lang", t);
          break;
        case "xmlSpace":
          ee(a, "http://www.w3.org/XML/1998/namespace", "xml:space", t);
          break;
        case "is":
          os(a, "is", t);
          break;
        case "innerText":
        case "textContent":
          return;
        default:
          if (
            !(2 < e.length) ||
            (e[0] !== "o" && e[0] !== "O") ||
            (e[1] !== "n" && e[1] !== "N")
          )
            ((e = th.get(e) || e), os(a, e, t));
          else return;
      }
      k = !0;
    }
    function Oc(a, o, e, t, n, l) {
      switch (e) {
        case "style":
          E1(a, t, l);
          return;
        case "dangerouslySetInnerHTML":
          if (t != null) {
            if (typeof t != "object" || !("__html" in t)) throw Error(C(61));
            if (((e = t.__html), e != null)) {
              if (n.children != null) throw Error(C(60));
              l?.__html !== e && (a.innerHTML = e);
            }
          }
          break;
        case "children":
          if (typeof t == "string") nn(a, t);
          else if (typeof t == "number" || typeof t == "bigint") nn(a, "" + t);
          else return;
          break;
        case "onScroll":
          t != null && U("scroll", a);
          return;
        case "onScrollEnd":
          t != null && U("scrollend", a);
          return;
        case "onClick":
          t != null && (a.onclick = jo);
          return;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          return;
        case "innerText":
        case "textContent":
          return;
        default:
          if (!C1.hasOwnProperty(e))
            a: {
              if (
                e[0] === "o" &&
                e[1] === "n" &&
                ((n = e.endsWith("Capture")),
                (l = e.slice(2, n ? e.length - 7 : void 0)),
                (o = a[ro] || null),
                (o = o != null ? o[e] : null),
                typeof o == "function" && a.removeEventListener(l, o, n),
                typeof t == "function")
              ) {
                (typeof o != "function" &&
                  o !== null &&
                  (e in a
                    ? (a[e] = null)
                    : a.hasAttribute(e) && a.removeAttribute(e)),
                  a.addEventListener(l, t, n));
                break a;
              }
              ((k = !0),
                e in a
                  ? (a[e] = t)
                  : t === !0
                    ? a.setAttribute(e, "")
                    : os(a, e, t));
            }
          return;
      }
      k = !0;
    }
    function Va(a, o, e) {
      switch (o) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          (U("error", a), U("load", a));
          var t = !1,
            n = !1,
            l;
          for (l in e)
            if (e.hasOwnProperty(l)) {
              var s = e[l];
              if (s != null)
                switch (l) {
                  case "src":
                    t = !0;
                    break;
                  case "srcSet":
                    n = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(C(137, o));
                  default:
                    j(a, o, l, s, e, null);
                }
            }
          (n && j(a, o, "srcSet", e.srcSet, e, null),
            t && j(a, o, "src", e.src, e, null));
          return;
        case "input":
          U("invalid", a);
          var i = (l = s = n = null),
            c = null,
            m = null;
          for (t in e)
            if (e.hasOwnProperty(t)) {
              var I = e[t];
              if (I != null)
                switch (t) {
                  case "name":
                    n = I;
                    break;
                  case "type":
                    s = I;
                    break;
                  case "checked":
                    c = I;
                    break;
                  case "defaultChecked":
                    m = I;
                    break;
                  case "value":
                    l = I;
                    break;
                  case "defaultValue":
                    i = I;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (I != null) throw Error(C(137, o));
                    break;
                  default:
                    j(a, o, t, I, e, null);
                }
            }
          A1(a, l, i, c, m, s, n, !1);
          return;
        case "select":
          (U("invalid", a), (t = s = l = null));
          for (n in e)
            if (e.hasOwnProperty(n) && ((i = e[n]), i != null))
              switch (n) {
                case "value":
                  l = i;
                  break;
                case "defaultValue":
                  s = i;
                  break;
                case "multiple":
                  t = i;
                default:
                  j(a, o, n, i, e, null);
              }
          ((o = l),
            (e = s),
            (a.multiple = !!t),
            o != null ? Xt(a, !!t, o, !1) : e != null && Xt(a, !!t, e, !0));
          return;
        case "textarea":
          (U("invalid", a), (l = n = t = null));
          for (s in e)
            if (e.hasOwnProperty(s) && ((i = e[s]), i != null))
              switch (s) {
                case "value":
                  t = i;
                  break;
                case "defaultValue":
                  n = i;
                  break;
                case "children":
                  l = i;
                  break;
                case "dangerouslySetInnerHTML":
                  if (i != null) throw Error(C(91));
                  break;
                default:
                  j(a, o, s, i, e, null);
              }
          T1(a, t, n, l);
          return;
        case "option":
          for (c in e)
            e.hasOwnProperty(c) &&
              ((t = e[c]), t != null) &&
              (c === "selected"
                ? (a.selected =
                    t && typeof t != "function" && typeof t != "symbol")
                : j(a, o, c, t, e, null));
          return;
        case "dialog":
          (U("beforetoggle", a), U("toggle", a), U("cancel", a), U("close", a));
          break;
        case "iframe":
        case "object":
          U("load", a);
          break;
        case "video":
        case "audio":
          for (t = 0; t < sl.length; t++) U(sl[t], a);
          break;
        case "image":
          (U("error", a), U("load", a));
          break;
        case "details":
          U("toggle", a);
          break;
        case "embed":
        case "source":
        case "link":
          (U("error", a), U("load", a));
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (m in e)
            if (e.hasOwnProperty(m) && ((t = e[m]), t != null))
              switch (m) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(C(137, o));
                default:
                  j(a, o, m, t, e, null);
              }
          return;
        default:
          if (Qc(o)) {
            for (I in e)
              e.hasOwnProperty(I) &&
                ((t = e[I]), t !== void 0 && Oc(a, o, I, t, e, void 0));
            return;
          }
      }
      for (i in e)
        e.hasOwnProperty(i) &&
          ((t = e[i]), t != null && j(a, o, i, t, e, null));
    }
    var xg = {};
    function qg(a, o, e, t) {
      switch (o) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var n = null,
            l = null,
            s = null,
            i = null,
            c = null,
            m = null,
            I = null;
          for (g in e) {
            var f = e[g];
            if (e.hasOwnProperty(g) && f != null)
              switch (g) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  c = f;
                default:
                  t.hasOwnProperty(g) || j(a, o, g, null, t, f);
              }
          }
          for (var u in t) {
            var g = t[u];
            if (((f = e[u]), t.hasOwnProperty(u) && (g != null || f != null)))
              switch (u) {
                case "type":
                  (g !== f && (k = !0), (l = g));
                  break;
                case "name":
                  (g !== f && (k = !0), (n = g));
                  break;
                case "checked":
                  (g !== f && (k = !0), (m = g));
                  break;
                case "defaultChecked":
                  (g !== f && (k = !0), (I = g));
                  break;
                case "value":
                  (g !== f && (k = !0), (s = g));
                  break;
                case "defaultValue":
                  (g !== f && (k = !0), (i = g));
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null) throw Error(C(137, o));
                  break;
                default:
                  g !== f && j(a, o, u, g, t, f);
              }
          }
          Zi(a, s, i, c, m, I, l, n);
          return;
        case "select":
          g = s = i = u = null;
          for (l in e)
            if (((c = e[l]), e.hasOwnProperty(l) && c != null))
              switch (l) {
                case "value":
                  break;
                case "multiple":
                  g = c;
                default:
                  t.hasOwnProperty(l) || j(a, o, l, null, t, c);
              }
          for (n in t)
            if (
              ((l = t[n]),
              (c = e[n]),
              t.hasOwnProperty(n) && (l != null || c != null))
            )
              switch (n) {
                case "value":
                  (l !== c && (k = !0), (u = l));
                  break;
                case "defaultValue":
                  (l !== c && (k = !0), (i = l));
                  break;
                case "multiple":
                  (l !== c && (k = !0), (s = l));
                default:
                  l !== c && j(a, o, n, l, t, c);
              }
          ((o = i),
            (e = s),
            (t = g),
            u != null
              ? Xt(a, !!e, u, !1)
              : !!t != !!e &&
                (o != null ? Xt(a, !!e, o, !0) : Xt(a, !!e, e ? [] : "", !1)));
          return;
        case "textarea":
          g = u = null;
          for (i in e)
            if (
              ((n = e[i]),
              e.hasOwnProperty(i) && n != null && !t.hasOwnProperty(i))
            )
              switch (i) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  j(a, o, i, null, t, n);
              }
          for (s in t)
            if (
              ((n = t[s]),
              (l = e[s]),
              t.hasOwnProperty(s) && (n != null || l != null))
            )
              switch (s) {
                case "value":
                  (n !== l && (k = !0), (u = n));
                  break;
                case "defaultValue":
                  (n !== l && (k = !0), (g = n));
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (n != null) throw Error(C(91));
                  break;
                default:
                  n !== l && j(a, o, s, n, t, l);
              }
          b1(a, u, g);
          return;
        case "option":
          for (var v in e)
            ((u = e[v]),
              e.hasOwnProperty(v) &&
                u != null &&
                !t.hasOwnProperty(v) &&
                (v === "selected"
                  ? (a.selected = !1)
                  : j(a, o, v, null, t, u)));
          for (c in t)
            ((u = t[c]),
              (g = e[c]),
              t.hasOwnProperty(c) &&
                u !== g &&
                (u != null || g != null) &&
                (c === "selected"
                  ? (u !== g && (k = !0),
                    (a.selected =
                      u && typeof u != "function" && typeof u != "symbol"))
                  : j(a, o, c, u, t, g)));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var A in e)
            ((u = e[A]),
              e.hasOwnProperty(A) &&
                u != null &&
                !t.hasOwnProperty(A) &&
                j(a, o, A, null, t, u));
          for (m in t)
            if (
              ((u = t[m]),
              (g = e[m]),
              t.hasOwnProperty(m) && u !== g && (u != null || g != null))
            )
              switch (m) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (u != null) throw Error(C(137, o));
                  break;
                default:
                  j(a, o, m, u, t, g);
              }
          return;
        default:
          if (Qc(o)) {
            for (var y in e)
              ((u = e[y]),
                e.hasOwnProperty(y) &&
                  u !== void 0 &&
                  !t.hasOwnProperty(y) &&
                  Oc(a, o, y, void 0, t, u));
            for (I in t)
              ((u = t[I]),
                (g = e[I]),
                !t.hasOwnProperty(I) ||
                  u === g ||
                  (u === void 0 && g === void 0) ||
                  Oc(a, o, I, u, t, g));
            return;
          }
      }
      for (var h in e)
        ((u = e[h]),
          e.hasOwnProperty(h) &&
            u != null &&
            !t.hasOwnProperty(h) &&
            j(a, o, h, null, t, u));
      for (f in t)
        ((u = t[f]),
          (g = e[f]),
          !t.hasOwnProperty(f) ||
            u === g ||
            (u == null && g == null) ||
            j(a, o, f, u, t, g));
    }
    function B0(a) {
      switch (a) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function Fg() {
      if (typeof performance.getEntriesByType == "function") {
        for (
          var a = 0, o = 0, e = performance.getEntriesByType("resource"), t = 0;
          t < e.length;
          t++
        ) {
          var n = e[t],
            l = n.transferSize,
            s = n.initiatorType,
            i = n.duration;
          if (l && i && B0(s)) {
            for (s = 0, i = n.responseEnd, t += 1; t < e.length; t++) {
              var c = e[t],
                m = c.startTime;
              if (m > i) break;
              var I = c.transferSize,
                f = c.initiatorType;
              I &&
                B0(f) &&
                ((c = c.responseEnd),
                (s += I * (c < i ? 1 : (i - m) / (c - m))));
            }
            if ((--t, (o += (8 * (l + s)) / (n.duration / 1e3)), a++, 10 < a))
              break;
          }
        }
        if (0 < a) return o / a / 1e6;
      }
      return navigator.connection &&
        ((a = navigator.connection.downlink), typeof a == "number")
        ? a
        : 5;
    }
    var Rc = null,
      zc = null;
    function il(a) {
      return a.nodeType === 9 ? a : a.ownerDocument;
    }
    function H0(a) {
      switch (a) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function Md(a, o) {
      if (a === 0)
        switch (o) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return a === 1 && o === "foreignObject" ? 0 : a;
    }
    function Dd(a, o, e, t) {
      return (
        (e = il(e).createElement(a)),
        (e[Fa] = t),
        (e[ro] = o),
        Va(e, a, o),
        za(e),
        e
      );
    }
    function Uc(a, o) {
      return (
        a === "textarea" ||
        a === "noscript" ||
        typeof o.children == "string" ||
        typeof o.children == "number" ||
        typeof o.children == "bigint" ||
        (typeof o.dangerouslySetInnerHTML == "object" &&
          o.dangerouslySetInnerHTML !== null &&
          o.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Di = null;
    function kg() {
      var a = window.event;
      return a && a.type === "popstate"
        ? a === Di
          ? !1
          : ((Di = a), !0)
        : ((Di = null), !1);
    }
    var zu = typeof setTimeout == "function" ? setTimeout : void 0,
      _g = typeof clearTimeout == "function" ? clearTimeout : void 0,
      O0 = typeof Promise == "function" ? Promise : void 0,
      R0 =
        typeof requestAnimationFrame == "function" ? requestAnimationFrame : zu,
      Gg =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof O0 < "u"
            ? function (a) {
                return O0.resolve(null).then(a).catch(Vg);
              }
            : zu;
    function Vg(a) {
      setTimeout(function () {
        throw a;
      });
    }
    function Xe(a) {
      return a === "head";
    }
    function z0(a, o) {
      var e = o,
        t = 0;
      do {
        var n = e.nextSibling;
        if ((a.removeChild(e), n && n.nodeType === 8))
          if (((e = n.data), e === "/$" || e === "/&")) {
            if (t === 0) {
              (a.removeChild(n), In(o));
              return;
            }
            t--;
          } else if (
            e === "$" ||
            e === "$?" ||
            e === "$~" ||
            e === "$!" ||
            e === "&"
          )
            t++;
          else if (e === "html") Hi(a.ownerDocument.documentElement);
          else if (e === "head") {
            ((e = a.ownerDocument.head), Hi(e));
            for (var l = e.firstChild; l; ) {
              var s = l.nextSibling,
                i = l.nodeName;
              (l[gl] ||
                i === "SCRIPT" ||
                i === "STYLE" ||
                (i === "LINK" && l.rel.toLowerCase() === "stylesheet") ||
                e.removeChild(l),
                (l = s));
            }
          } else e === "body" && Hi(a.ownerDocument.body);
        e = n;
      } while (e);
      In(o);
    }
    function U0(a, o) {
      var e = a;
      a = 0;
      do {
        var t = e.nextSibling;
        if (
          (e.nodeType === 1
            ? o
              ? ((e._stashedDisplay = e.style.display),
                (e.style.display = "none"))
              : ((e.style.display = e._stashedDisplay || ""),
                e.getAttribute("style") === "" && e.removeAttribute("style"))
            : e.nodeType === 3 &&
              (o
                ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
                : (e.nodeValue = e._stashedText || "")),
          t && t.nodeType === 8)
        )
          if (((e = t.data), e === "/$")) {
            if (a === 0) break;
            a--;
          } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || a++;
        e = t;
      } while (e);
    }
    function Bd(a, o, e) {
      if (
        ((o = CSS.escape(o) !== o ? "r-" + btoa(o).replace(/=/g, "") : o),
        (a.style.viewTransitionName = o),
        e != null && (a.style.viewTransitionClass = e),
        (e = getComputedStyle(a)),
        e.display === "inline")
      ) {
        if (((o = a.getClientRects()), o.length === 1)) var t = 1;
        else
          for (var n = (t = 0); n < o.length; n++) {
            var l = o[n];
            0 < l.width && 0 < l.height && t++;
          }
        t === 1 &&
          ((a = a.style),
          (a.display = o.length === 1 ? "inline-block" : "block"),
          (a.marginTop = "-" + e.paddingTop),
          (a.marginBottom = "-" + e.paddingBottom));
      }
    }
    function Hd(a, o) {
      ((a = a.style), (o = o.style));
      var e =
        o != null
          ? o.hasOwnProperty("viewTransitionName")
            ? o.viewTransitionName
            : o.hasOwnProperty("view-transition-name")
              ? o["view-transition-name"]
              : null
          : null;
      ((a.viewTransitionName =
        e == null || typeof e == "boolean" ? "" : ("" + e).trim()),
        (e =
          o != null
            ? o.hasOwnProperty("viewTransitionClass")
              ? o.viewTransitionClass
              : o.hasOwnProperty("view-transition-class")
                ? o["view-transition-class"]
                : null
            : null),
        (a.viewTransitionClass =
          e == null || typeof e == "boolean" ? "" : ("" + e).trim()),
        a.display === "inline-block" &&
          (o == null
            ? (a.display = a.margin = "")
            : ((e = o.display),
              (a.display = e == null || typeof e == "boolean" ? "" : e),
              (e = o.margin),
              e != null
                ? (a.margin = e)
                : ((e = o.hasOwnProperty("marginTop")
                    ? o.marginTop
                    : o["margin-top"]),
                  (a.marginTop = e == null || typeof e == "boolean" ? "" : e),
                  (o = o.hasOwnProperty("marginBottom")
                    ? o.marginBottom
                    : o["margin-bottom"]),
                  (a.marginBottom =
                    o == null || typeof o == "boolean" ? "" : o)))));
    }
    function Od(a, o, e) {
      return (
        (e = e.ownerDocument.defaultView),
        {
          rect: a,
          abs: o.position === "absolute" || o.position === "fixed",
          clip:
            o.clipPath !== "none" ||
            o.overflow !== "visible" ||
            o.filter !== "none" ||
            o.mask !== "none" ||
            o.mask !== "none" ||
            o.borderRadius !== "0px",
          view:
            0 <= a.bottom &&
            0 <= a.right &&
            a.top <= e.innerHeight &&
            a.left <= e.innerWidth,
        }
      );
    }
    function xc(a) {
      var o = a.getBoundingClientRect(),
        e = getComputedStyle(a);
      return Od(o, e, a);
    }
    function Pg(a) {
      var o = a.getBoundingClientRect();
      o = new DOMRect(o.x + 2e4, o.y + 2e4, o.width, o.height);
      var e = getComputedStyle(a);
      return Od(o, e, a);
    }
    function Zg(a) {
      return a.documentElement.clientHeight;
    }
    function jg(a) {
      (this.addEventListener("load", a), this.addEventListener("error", a));
    }
    function Xg(a, o, e, t, n, l, s, i, c) {
      var m = o.nodeType === 9 ? o : o.ownerDocument;
      try {
        var I = m.startViewTransition({
          update: function () {
            var u = m.defaultView,
              g = u.navigation && u.navigation.transition,
              v = m.fonts.status;
            t();
            var A = [];
            if (
              (v === "loaded" &&
                (Zg(m), m.fonts.status === "loading" && A.push(m.fonts.ready)),
              (v = A.length),
              a !== null)
            )
              for (var y = a.suspenseyImages, h = 0, p = 0; p < y.length; p++) {
                var d = y[p];
                if (!d.complete) {
                  var S = d.getBoundingClientRect();
                  if (
                    0 < S.bottom &&
                    0 < S.right &&
                    S.top < u.innerHeight &&
                    S.left < u.innerWidth
                  ) {
                    if (((h += Zd(d)), h > gs)) {
                      A.length = v;
                      break;
                    }
                    ((d = new Promise(jg.bind(d))), A.push(d));
                  }
                }
              }
            if (0 < A.length)
              return (
                (u = Promise.race([
                  Promise.all(A),
                  new Promise(function (b) {
                    return setTimeout(b, 500);
                  }),
                ]).then(n, n)),
                (g ? Promise.allSettled([g.finished, u]) : u).then(l, l)
              );
            if ((n(), g)) return g.finished.then(l, l);
            l();
          },
          types: e,
        });
        m.__reactViewTransition = I;
        var f = [];
        return (
          I.ready.then(
            function () {
              for (
                var u = m.documentElement.getAnimations({ subtree: !0 }), g = 0;
                g < u.length;
                g++
              ) {
                var v = u[g],
                  A = v.effect,
                  y = A.pseudoElement;
                if (y != null && y.startsWith("::view-transition")) {
                  (f.push(v), (v = A.getKeyframes()));
                  for (var h = (y = void 0), p = !0, d = 0; d < v.length; d++) {
                    var S = v[d],
                      b = S.width;
                    if (y === void 0) y = b;
                    else if (y !== b) {
                      p = !1;
                      break;
                    }
                    if (((b = S.height), h === void 0)) h = b;
                    else if (h !== b) {
                      p = !1;
                      break;
                    }
                    (delete S.width,
                      delete S.height,
                      S.transform === "none" && delete S.transform);
                  }
                  p &&
                    y !== void 0 &&
                    h !== void 0 &&
                    (A.setKeyframes(v),
                    (p = getComputedStyle(A.target, A.pseudoElement)),
                    p.width !== y || p.height !== h) &&
                    ((p = v[0]),
                    (p.width = y),
                    (p.height = h),
                    (p = v[v.length - 1]),
                    (p.width = y),
                    (p.height = h),
                    A.setKeyframes(v));
                }
              }
              s();
            },
            function (u) {
              m.__reactViewTransition === I && (m.__reactViewTransition = null);
              try {
                (typeof u == "object" &&
                  u !== null &&
                  u.name === "InvalidStateError" &&
                  (u.message ===
                    "View transition was skipped because document visibility state is hidden." ||
                    u.message ===
                      "Skipping view transition because document visibility state has become hidden." ||
                    u.message ===
                      "Skipping view transition because viewport size changed." ||
                    u.message ===
                      "Transition was aborted because of invalid state") &&
                  (u = null),
                  u !== null && c(u));
              } finally {
                (t(), n(), s());
              }
            },
          ),
          I.finished.finally(function () {
            for (var u = 0; u < f.length; u++) f[u].cancel();
            (m.__reactViewTransition === I && (m.__reactViewTransition = null),
              i());
          }),
          I
        );
      } catch {
        return (t(), n(), s(), null);
      }
    }
    function ot(a, o) {
      ((this._scope = document.documentElement),
        (this._selector = "::view-transition-" + a + "(" + o + ")"));
    }
    ot.prototype.animate = function (a, o) {
      return (
        (o = typeof o == "number" ? { duration: o } : K({}, o)),
        (o.pseudoElement = this._selector),
        this._scope.animate(a, o)
      );
    };
    ot.prototype.getAnimations = function () {
      for (
        var a = this._scope,
          o = this._selector,
          e = a.getAnimations({ subtree: !0 }),
          t = [],
          n = 0;
        n < e.length;
        n++
      ) {
        var l = e[n].effect;
        l !== null && l.target === a && l.pseudoElement === o && t.push(e[n]);
      }
      return t;
    };
    ot.prototype.getComputedStyle = function () {
      return getComputedStyle(this._scope, this._selector);
    };
    function Rd(a) {
      return {
        name: a,
        group: new ot("group", a),
        imagePair: new ot("image-pair", a),
        old: new ot("old", a),
        new: new ot("new", a),
      };
    }
    function Co(a) {
      ((this._fragmentFiber = a),
        (this._observers = this._eventListeners = null));
    }
    Co.prototype.addEventListener = function (a, o, e) {
      var t = null,
        n = null;
      if (
        !(
          e != null &&
          typeof e != "boolean" &&
          ((t = e.signal || null), t !== null && t.aborted)
        )
      ) {
        this._eventListeners === null && (this._eventListeners = []);
        var l = this._eventListeners;
        if (zd(l, a, o, e) === -1) {
          var s = this,
            i = o;
          (e != null &&
            typeof e != "boolean" &&
            e.once === !0 &&
            (i = function (c) {
              (s.removeEventListener(a, o, e),
                typeof o == "function" ? o.call(this, c) : o.handleEvent(c));
            }),
            t !== null &&
              ((n = s.removeEventListener.bind(s, a, o, e)),
              t.addEventListener("abort", n, { once: !0 }),
              (n = t.removeEventListener.bind(t, "abort", n))),
            (t = mn(e)),
            l.push({
              type: a,
              listener: o,
              optionsOrUseCapture: e,
              attachedListener: i,
              cleanup: n,
            }),
            so(this._fragmentFiber.child, !1, Yg, a, i, t));
        }
        this._eventListeners = l;
      }
    };
    function Yg(a, o, e, t) {
      return (Ba(a).addEventListener(o, e, t), !1);
    }
    Co.prototype.removeEventListener = function (a, o, e) {
      var t = this._eventListeners;
      if (t !== null && ((o = zd(t, a, o, e)), o !== -1)) {
        var n = t[o];
        e = n.attachedListener;
        var l = n.cleanup;
        ((n = mn(n.optionsOrUseCapture)),
          so(this._fragmentFiber.child, !1, Qg, a, e, n),
          t.splice(o, 1),
          l !== null && l());
      }
    };
    function Qg(a, o, e, t) {
      return (Ba(a).removeEventListener(o, e, t), !1);
    }
    function mn(a) {
      return a != null &&
        typeof a != "boolean" &&
        (a.once === !0 || a.signal instanceof AbortSignal)
        ? { capture: a.capture, passive: a.passive }
        : a;
    }
    function x0(a) {
      return a == null
        ? "c=0"
        : typeof a == "boolean"
          ? "c=" + (a ? "1" : "0")
          : "c=" + (a.capture ? "1" : "0");
    }
    function zd(a, o, e, t) {
      if (a.length === 0) return -1;
      t = x0(t);
      for (var n = 0; n < a.length; n++) {
        var l = a[n];
        if (l.type === o && l.listener === e && x0(l.optionsOrUseCapture) === t)
          return n;
      }
      return -1;
    }
    Co.prototype.dispatchEvent = function (a) {
      var o = It(this._fragmentFiber);
      if (o === null) return !0;
      o = Ba(o);
      var e = this._eventListeners;
      if ((e !== null && 0 < e.length) || !a.bubbles) {
        var t =
          o.nodeType === 9 ? o.createComment("") : document.createTextNode("");
        if (e)
          for (var n = 0; n < e.length; n++) {
            var l = e[n];
            t.addEventListener(
              l.type,
              l.attachedListener,
              mn(l.optionsOrUseCapture),
            );
          }
        if ((o.appendChild(t), (a = t.dispatchEvent(a)), e))
          for (n = 0; n < e.length; n++)
            ((l = e[n]),
              t.removeEventListener(
                l.type,
                l.attachedListener,
                mn(l.optionsOrUseCapture),
              ));
        return (o.removeChild(t), a);
      }
      return o.dispatchEvent(a);
    };
    Co.prototype.focus = function (a) {
      so(this._fragmentFiber.child, !0, Ud, a, void 0, void 0);
    };
    function Ud(a, o) {
      return a.tag === 6 ? !1 : ((a = Ba(a)), rS(a, o));
    }
    Co.prototype.focusLast = function (a) {
      var o = [];
      so(this._fragmentFiber.child, !0, Uu, o, void 0, void 0);
      for (var e = o.length - 1; 0 <= e && !Ud(o[e], a); e--);
    };
    function Uu(a, o) {
      return (o.push(a), !1);
    }
    Co.prototype.blur = function () {
      var a = It(this._fragmentFiber);
      a !== null &&
        ((a = Ba(a)),
        (a = il(a).activeElement),
        a !== null && so(this._fragmentFiber.child, !1, Kg, a, void 0, void 0));
    };
    function Kg(a, o) {
      return a.tag === 6
        ? !1
        : ((a = Ba(a)), a === o || a.contains(o) ? (o.blur(), !0) : !1);
    }
    Co.prototype.observeUsing = function (a) {
      (this._observers === null && (this._observers = new Set()),
        this._observers.add(a),
        so(this._fragmentFiber.child, !1, Jg, a, void 0, void 0));
    };
    function Jg(a, o) {
      return (a.tag === 6 || ((a = Ba(a)), o.observe(a)), !1);
    }
    Co.prototype.unobserveUsing = function (a) {
      var o = this._observers;
      if (o !== null && o.has(a)) {
        (o.delete(a), so(this._fragmentFiber.child, !1, Wg, a, void 0, void 0));
        for (var e = (o = 0); e < zo.length; e++) {
          var t = zo[e];
          t.fragmentInstance === this && t.observer === a
            ? a.unobserve(t.instance)
            : (zo[o++] = t);
        }
        zo.length = o;
      }
    };
    function Wg(a, o) {
      return (a.tag === 6 || ((a = Ba(a)), o.unobserve(a)), !1);
    }
    var zo = [],
      Bi = !1;
    function $g(a, o, e) {
      (zo.push({ fragmentInstance: a, observer: o, instance: e }),
        Bi ||
          ((Bi = !0),
          iS(function () {
            Bi = !1;
            var t = zo;
            zo = [];
            for (var n = 0; n < t.length; n++) {
              var l = t[n];
              l.observer.unobserve(l.instance);
            }
          })));
    }
    Co.prototype.getClientRects = function () {
      var a = [];
      return (so(this._fragmentFiber.child, !1, aS, a, void 0, void 0), a);
    };
    function aS(a, o) {
      if (a.tag === 6) {
        a = a.stateNode;
        var e = a.ownerDocument.createRange();
        (e.selectNodeContents(a), o.push.apply(o, e.getClientRects()));
      } else ((a = Ba(a)), o.push.apply(o, a.getClientRects()));
      return !1;
    }
    Co.prototype.getRootNode = function (a) {
      var o = It(this._fragmentFiber);
      return o === null ? this : Ba(o).getRootNode(a);
    };
    Co.prototype.compareDocumentPosition = function (a) {
      var o = It(this._fragmentFiber);
      if (o === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var e = [];
      so(this._fragmentFiber.child, !1, Uu, e, void 0, void 0);
      var t = Ba(o);
      if (e.length === 0) {
        if (((e = t), hf(this._fragmentFiber))) {
          a: {
            for (o = this._fragmentFiber.return; o !== null; ) {
              if (o.tag === 4) {
                o = o.stateNode.containerInfo;
                break a;
              }
              if (o.tag === 3 || o.tag === 5 || o.tag === 27) break;
              o = o.return;
            }
            o = null;
          }
          o != null && (e = o);
        }
        o = this._fragmentFiber;
        var n = (t = e.compareDocumentPosition(a));
        return (
          e === a
            ? (n = Node.DOCUMENT_POSITION_CONTAINS)
            : t & Node.DOCUMENT_POSITION_CONTAINED_BY &&
              ((e = n1(o)[1]),
              e === null
                ? (n = Node.DOCUMENT_POSITION_PRECEDING)
                : ((a = Ba(e).compareDocumentPosition(a)),
                  (n =
                    a === 0 || a & Node.DOCUMENT_POSITION_FOLLOWING
                      ? Node.DOCUMENT_POSITION_FOLLOWING
                      : Node.DOCUMENT_POSITION_PRECEDING))),
          (n |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
        );
      }
      ((o = Ba(e[0])), (n = Ba(e[e.length - 1])));
      var l = hf(this._fragmentFiber) ? o.parentElement : t;
      if (l == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      ((t = l.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY),
        (l =
          l.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY));
      var s = o.compareDocumentPosition(a),
        i = n.compareDocumentPosition(a),
        c =
          s & Node.DOCUMENT_POSITION_CONTAINED_BY ||
          i & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return (
        (i =
          t &&
          l &&
          s & Node.DOCUMENT_POSITION_FOLLOWING &&
          i & Node.DOCUMENT_POSITION_PRECEDING),
        (o =
          (t && o === a) || (l && n === a) || c || i
            ? Node.DOCUMENT_POSITION_CONTAINED_BY
            : (!t && o === a) || (!l && n === a)
              ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
              : s),
        o & Node.DOCUMENT_POSITION_DISCONNECTED ||
        o & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
        oS(o, this._fragmentFiber, e[0], e[e.length - 1], a)
          ? o
          : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
      );
    };
    function oS(a, o, e, t, n) {
      var l = at(n);
      if (a & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        if ((e = !!l))
          a: {
            for (; l !== null; ) {
              if (l.tag === 7 && (l === o || l.alternate === o)) {
                e = !0;
                break a;
              }
              l = l.return;
            }
            e = !1;
          }
        return e;
      }
      if (a & Node.DOCUMENT_POSITION_CONTAINS) {
        if (l === null)
          return (
            (l = n.ownerDocument),
            n === l || n === l.documentElement || n === l.body
          );
        a: {
          for (l = o, o = It(o); l !== null; ) {
            if (
              !(
                (l.tag !== 5 && l.tag !== 3 && l.tag !== 27) ||
                (l !== o && l.alternate !== o)
              )
            ) {
              l = !0;
              break a;
            }
            l = l.return;
          }
          l = !1;
        }
        return l;
      }
      return a & Node.DOCUMENT_POSITION_PRECEDING
        ? ((o = !!l) &&
            !(o = l === e) &&
            ((o = Ri(e, l, gf)),
            o === null
              ? (o = !1)
              : (so(o, !0, BI, l, e), (l = Rt), (Rt = null), (o = l !== null))),
          o)
        : a & Node.DOCUMENT_POSITION_FOLLOWING
          ? ((o = !!l) &&
              !(o = l === t) &&
              ((o = Ri(t, l, gf)),
              o === null
                ? (o = !1)
                : (so(o, !0, HI, l, t),
                  (l = Rt),
                  (Oi = Rt = null),
                  (o = l !== null))),
            o)
          : !1;
    }
    function q0(a, o) {
      var e = a.ownerDocument.createRange();
      (e.selectNodeContents(a),
        (a = e.getBoundingClientRect()),
        window.scrollTo(
          window.scrollX + a.left,
          o
            ? window.scrollY + a.top
            : window.scrollY + a.bottom - window.innerHeight,
        ));
    }
    Co.prototype.scrollIntoView = function (a) {
      if (typeof a == "object") throw Error(C(566));
      var o = [];
      so(this._fragmentFiber.child, !1, Uu, o, void 0, void 0);
      var e = a !== !1;
      if (o.length === 0) {
        var t = n1(this._fragmentFiber);
        if (
          ((t = e ? t[1] || t[0] || It(this._fragmentFiber) : t[0] || t[1]),
          t === null)
        )
          return;
        if (t.tag === 6) {
          ((a = Ba(t)), q0(a, e));
          return;
        }
        if (((t = Ba(t)), t.nodeType !== 9)) {
          if (t.nodeType === 11) {
            ((e = "host" in t ? t.host : null),
              e !== null && e.scrollIntoView(a));
            return;
          }
          t.scrollIntoView(a);
        }
      }
      for (t = e ? o.length - 1 : 0; t !== (e ? -1 : o.length); ) {
        var n = o[t];
        (n.tag === 6 ? ((n = Ba(n)), q0(n, e)) : Ba(n).scrollIntoView(a),
          (t += e ? -1 : 1));
      }
    };
    function eS(a, o) {
      return ((a = Ba(a)), xd(a, o), !1);
    }
    function xd(a, o) {
      (a.reactFragments == null && (a.reactFragments = new Set()),
        a.reactFragments.add(o));
    }
    function qd(a, o) {
      var e = o._eventListeners;
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          a.addEventListener(
            n.type,
            n.attachedListener,
            mn(n.optionsOrUseCapture),
          );
        }
      a.nodeType !== 3 &&
        ((e = o._observers),
        e !== null &&
          e.forEach(function (l) {
            for (var s = 0, i = 0; i < zo.length; i++) {
              var c = zo[i];
              (c.fragmentInstance !== o ||
                c.observer !== l ||
                c.instance !== a) &&
                (zo[s++] = c);
            }
            ((zo.length = s), l.observe(a));
          }),
        xd(a, o));
    }
    function tS(a, o) {
      var e = o._eventListeners;
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          a.removeEventListener(
            n.type,
            n.attachedListener,
            mn(n.optionsOrUseCapture),
          );
        }
      a.nodeType !== 3 &&
        ((e = o._observers),
        e !== null &&
          e.forEach(function (l) {
            typeof l.rootMargin == "string" ? $g(o, l, a) : l.unobserve(a);
          }),
        a.reactFragments != null && a.reactFragments.delete(o));
    }
    function qc(a) {
      var o = a.firstChild;
      for (o && o.nodeType === 10 && (o = o.nextSibling); o; ) {
        var e = o;
        switch (((o = o.nextSibling), e.nodeName)) {
          case "HTML":
          case "HEAD":
          case "BODY":
            (qc(e), Ks(e));
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (e.rel.toLowerCase() === "stylesheet") continue;
        }
        a.removeChild(e);
      }
    }
    function nS(a, o, e, t) {
      for (; a.nodeType === 1; ) {
        var n = e;
        if (a.nodeName.toLowerCase() !== o.toLowerCase()) {
          if (!t && (a.nodeName !== "INPUT" || a.type !== "hidden")) break;
        } else if (t) {
          if (!a[gl])
            switch (o) {
              case "meta":
                if (!a.hasAttribute("itemprop")) break;
                return a;
              case "link":
                if (
                  ((l = a.getAttribute("rel")),
                  l === "stylesheet" && a.hasAttribute("data-precedence"))
                )
                  break;
                if (
                  l !== n.rel ||
                  a.getAttribute("href") !==
                    (n.href == null || n.href === "" ? null : n.href) ||
                  a.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin) ||
                  a.getAttribute("title") !== (n.title == null ? null : n.title)
                )
                  break;
                return a;
              case "style":
                if (a.hasAttribute("data-precedence")) break;
                return a;
              case "script":
                if (
                  ((l = a.getAttribute("src")),
                  (l !== (n.src == null ? null : n.src) ||
                    a.getAttribute("type") !==
                      (n.type == null ? null : n.type) ||
                    a.getAttribute("crossorigin") !==
                      (n.crossOrigin == null ? null : n.crossOrigin)) &&
                    l &&
                    a.hasAttribute("async") &&
                    !a.hasAttribute("itemprop"))
                )
                  break;
                return a;
              default:
                return a;
            }
        } else if (o === "input" && a.type === "hidden") {
          var l = n.name == null ? null : "" + n.name;
          if (n.type === "hidden" && a.getAttribute("name") === l) return a;
        } else return a;
        if (((a = No(a.nextSibling)), a === null)) break;
      }
      return null;
    }
    function lS(a, o, e) {
      if (o === "") return null;
      for (; a.nodeType !== 3; )
        if (
          ((a.nodeType !== 1 ||
            a.nodeName !== "INPUT" ||
            a.type !== "hidden") &&
            !e) ||
          ((a = No(a.nextSibling)), a === null)
        )
          return null;
      return a;
    }
    function Fd(a, o) {
      for (; a.nodeType !== 8; )
        if (
          ((a.nodeType !== 1 ||
            a.nodeName !== "INPUT" ||
            a.type !== "hidden") &&
            !o) ||
          ((a = No(a.nextSibling)), a === null)
        )
          return null;
      return a;
    }
    function Fc(a) {
      return a.data === "$?" || a.data === "$~";
    }
    function xu(a) {
      return (
        a.data === "$!" ||
        (a.data === "$?" && a.ownerDocument.readyState !== "loading")
      );
    }
    function sS(a, o) {
      var e = a.ownerDocument;
      if (a.data === "$~") a._reactRetry = o;
      else if (a.data !== "$?" || e.readyState !== "loading") o();
      else {
        var t = function () {
          (o(), e.removeEventListener("DOMContentLoaded", t));
        };
        (e.addEventListener("DOMContentLoaded", t), (a._reactRetry = t));
      }
    }
    function No(a) {
      for (; a != null; a = a.nextSibling) {
        var o = a.nodeType;
        if (o === 1 || o === 3) break;
        if (o === 8) {
          if (
            ((o = a.data),
            o === "$" ||
              o === "$!" ||
              o === "$?" ||
              o === "$~" ||
              o === "&" ||
              o === "F!" ||
              o === "F")
          )
            break;
          if (o === "/$" || o === "/&") return null;
        }
      }
      return a;
    }
    var kc = null;
    function F0(a) {
      a = a.nextSibling;
      for (var o = 0; a; ) {
        if (a.nodeType === 8) {
          var e = a.data;
          if (e === "/$" || e === "/&") {
            if (o === 0) return No(a.nextSibling);
            o--;
          } else
            (e !== "$" &&
              e !== "$!" &&
              e !== "$?" &&
              e !== "$~" &&
              e !== "&") ||
              o++;
        }
        a = a.nextSibling;
      }
      return null;
    }
    function k0(a) {
      a = a.previousSibling;
      for (var o = 0; a; ) {
        if (a.nodeType === 8) {
          var e = a.data;
          if (
            e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&"
          ) {
            if (o === 0) return a;
            o--;
          } else (e !== "/$" && e !== "/&") || o++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    function rS(a, o) {
      function e() {
        t = !0;
      }
      if (a.ownerDocument.activeElement === a) return !0;
      var t = !1;
      try {
        (a.ownerDocument.addEventListener("focus", e, !0),
          (a.focus || HTMLElement.prototype.focus).call(a, o));
      } finally {
        a.ownerDocument.removeEventListener("focus", e, !0);
      }
      return t;
    }
    function iS(a) {
      R0(function () {
        R0(function (o) {
          return a(o);
        });
      });
    }
    function kd(a, o, e) {
      switch (((o = il(e)), a)) {
        case "html":
          if (((a = o.documentElement), !a)) throw Error(C(452));
          return a;
        case "head":
          if (((a = o.head), !a)) throw Error(C(453));
          return a;
        case "body":
          if (((a = o.body), !a)) throw Error(C(454));
          return a;
        default:
          throw Error(C(451));
      }
    }
    function _d(a, o, e) {
      for (var t in e) {
        var n = e[t];
        e.hasOwnProperty(t) && n != null && j(a, o, t, null, xg, n);
      }
      (e.dangerouslySetInnerHTML != null && (a.textContent = ""),
        a.onclick === jo && (a.onclick = null),
        Ks(a));
    }
    function Hi(a) {
      for (var o = a.attributes; o.length; ) a.removeAttributeNode(o[0]);
      Ks(a);
    }
    var Mo = new Map(),
      _0 = new Set();
    function cl(a) {
      if (typeof a.getRootNode == "function") {
        var o = a.getRootNode();
        if (o.nodeType === 9 || o.nodeType === 11) return o;
      }
      return a.nodeType === 9 ? a : a.ownerDocument;
    }
    var he = G.d;
    G.d = { f: cS, r: uS, D: mS, C: fS, L: pS, m: dS, X: hS, S: IS, M: gS };
    function cS() {
      var a = he.f(),
        o = ur();
      return a || o;
    }
    function uS(a) {
      var o = gn(a);
      o !== null && o.tag === 5 && o.type === "form" ? Ep(o) : he.r(a);
    }
    var yn = typeof document > "u" ? null : document;
    function Gd(a, o, e) {
      var t = yn;
      if (t && typeof o == "string" && o) {
        var n = Eo(o);
        ((n = 'link[rel="' + a + '"][href="' + n + '"]'),
          typeof e == "string" && (n += '[crossorigin="' + e + '"]'),
          _0.has(n) ||
            (_0.add(n),
            (a = { rel: a, crossOrigin: e, href: o }),
            t.querySelector(n) === null &&
              ((o = t.createElement("link")),
              Va(o, "link", a),
              za(o),
              t.head.appendChild(o))));
      }
    }
    function mS(a) {
      (he.D(a), Gd("dns-prefetch", a, null));
    }
    function fS(a, o) {
      (he.C(a, o), Gd("preconnect", a, o));
    }
    function pS(a, o, e) {
      he.L(a, o, e);
      var t = yn;
      if (t && a && o) {
        var n = 'link[rel="preload"][as="' + Eo(o) + '"]';
        o === "image" && e && e.imageSrcSet
          ? ((n += '[imagesrcset="' + Eo(e.imageSrcSet) + '"]'),
            typeof e.imageSizes == "string" &&
              (n += '[imagesizes="' + Eo(e.imageSizes) + '"]'))
          : (n += '[href="' + Eo(a) + '"]');
        var l = n;
        switch (o) {
          case "style":
            l = fn(a);
            break;
          case "script":
            l = An(a);
        }
        if (
          !(
            Mo.has(l) ||
            ((a = K(
              {
                rel: "preload",
                href: o === "image" && e && e.imageSrcSet ? void 0 : a,
                as: o,
              },
              e,
            )),
            Mo.set(l, a),
            t.querySelector(n) !== null ||
              (o === "style" && t.querySelector(bl(l))) ||
              (o === "script" && t.querySelector(Tl(l))))
          )
        ) {
          var s = t.createElement("link");
          (Va(s, "link", a),
            o === "style" &&
              ((s[Ts] = !0),
              (s.onload = s.onerror =
                function () {
                  g1(s);
                })),
            za(s),
            t.head.appendChild(s));
        }
      }
    }
    function dS(a, o) {
      he.m(a, o);
      var e = yn;
      if (e && a) {
        var t = o && typeof o.as == "string" ? o.as : "script",
          n =
            'link[rel="modulepreload"][as="' +
            Eo(t) +
            '"][href="' +
            Eo(a) +
            '"]',
          l = n;
        switch (t) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            l = An(a);
        }
        if (
          !Mo.has(l) &&
          ((a = K({ rel: "modulepreload", href: a }, o)),
          Mo.set(l, a),
          e.querySelector(n) === null)
        ) {
          switch (t) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (e.querySelector(Tl(l))) return;
          }
          ((t = e.createElement("link")),
            Va(t, "link", a),
            za(t),
            e.head.appendChild(t));
        }
      }
    }
    function IS(a, o, e) {
      he.S(a, o, e);
      var t = yn;
      if (t && a) {
        var n = jt(t).hoistableStyles,
          l = fn(a);
        o = o || "default";
        var s = n.get(l);
        if (!s) {
          var i = { loading: 0, preload: null };
          if ((s = t.querySelector(bl(l)))) i.loading = 5;
          else {
            ((a = K({ rel: "stylesheet", href: a, "data-precedence": o }, e)),
              (e = Mo.get(l)) && qu(a, e));
            var c = (s = t.createElement("link"));
            (za(c),
              Va(c, "link", a),
              (c._p = new Promise(function (m, I) {
                ((c.onload = m), (c.onerror = I));
              })),
              c.addEventListener("load", function () {
                i.loading |= 1;
              }),
              c.addEventListener("error", function () {
                i.loading |= 2;
              }),
              (i.loading |= 4),
              Is(s, o, t));
          }
          ((s = { type: "stylesheet", instance: s, count: 1, state: i }),
            n.set(l, s));
        }
      }
    }
    function hS(a, o) {
      he.X(a, o);
      var e = yn;
      if (e && a) {
        var t = jt(e).hoistableScripts,
          n = An(a),
          l = t.get(n);
        l ||
          ((l = e.querySelector(Tl(n))),
          l ||
            ((a = K({ src: a, async: !0 }, o)),
            (o = Mo.get(n)) && Fu(a, o),
            (l = e.createElement("script")),
            za(l),
            Va(l, "link", a),
            e.head.appendChild(l)),
          (l = { type: "script", instance: l, count: 1, state: null }),
          t.set(n, l));
      }
    }
    function gS(a, o) {
      he.M(a, o);
      var e = yn;
      if (e && a) {
        var t = jt(e).hoistableScripts,
          n = An(a),
          l = t.get(n);
        l ||
          ((l = e.querySelector(Tl(n))),
          l ||
            ((a = K({ src: a, async: !0, type: "module" }, o)),
            (o = Mo.get(n)) && Fu(a, o),
            (l = e.createElement("script")),
            za(l),
            Va(l, "link", a),
            e.head.appendChild(l)),
          (l = { type: "script", instance: l, count: 1, state: null }),
          t.set(n, l));
      }
    }
    function G0(a, o, e, t) {
      var n = (n = Be.current) ? cl(n) : null;
      if (!n) throw Error(C(446));
      switch (a) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof e.precedence == "string" && typeof e.href == "string"
            ? ((e = fn(e.href)),
              (o = jt(n).hoistableStyles),
              (t = o.get(e)),
              t ||
                ((t = { type: "style", instance: null, count: 0, state: null }),
                o.set(e, t)),
              t)
            : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (
            e.rel === "stylesheet" &&
            typeof e.href == "string" &&
            typeof e.precedence == "string"
          ) {
            a = fn(e.href);
            var l = jt(n).hoistableStyles,
              s = l.get(a);
            if (
              (s ||
                ((n = n.ownerDocument || n),
                (s = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                l.set(a, s),
                (l = n.querySelector(bl(a)))
                  ? l._p || ((s.instance = l), (s.state.loading = 5))
                  : ((l = Mo.get(a)),
                    l ||
                      ((l = {
                        rel: "preload",
                        as: "style",
                        href: e.href,
                        crossOrigin: e.crossOrigin,
                        integrity: e.integrity,
                        media: e.media,
                        hrefLang: e.hrefLang,
                        referrerPolicy: e.referrerPolicy,
                      }),
                      Mo.set(a, l)),
                    SS(n, a, l, s.state))),
              o && t === null)
            )
              throw Error(C(528, ""));
            return s;
          }
          if (o && t !== null) throw Error(C(529, ""));
          return null;
        case "script":
          return (
            (o = e.async),
            (e = e.src),
            typeof e == "string" &&
            o &&
            typeof o != "function" &&
            typeof o != "symbol"
              ? ((e = An(e)),
                (o = jt(n).hoistableScripts),
                (t = o.get(e)),
                t ||
                  ((t = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  o.set(e, t)),
                t)
              : { type: "void", instance: null, count: 0, state: null }
          );
        default:
          throw Error(C(444, a));
      }
    }
    function fn(a) {
      return 'href="' + Eo(a) + '"';
    }
    function bl(a) {
      return 'link[rel="stylesheet"][' + a + "]";
    }
    function Vd(a) {
      return K({}, a, { "data-precedence": a.precedence, precedence: null });
    }
    function SS(a, o, e, t) {
      if ((o = a.querySelector('link[rel="preload"][as="style"][' + o + "]"))) {
        if (o[Ts] !== !0) {
          t.loading = 1;
          return;
        }
      } else
        ((o = a.createElement("link")),
          (o[Ts] = !0),
          (o.onload = o.onerror = g1.bind(null, o)),
          Va(o, "link", e),
          za(o),
          a.head.appendChild(o));
      ((t.preload = o),
        o.addEventListener("load", function () {
          return (t.loading |= 1);
        }),
        o.addEventListener("error", function () {
          return (t.loading |= 2);
        }));
    }
    function An(a) {
      return '[src="' + Eo(a) + '"]';
    }
    function Tl(a) {
      return "script[async]" + a;
    }
    function V0(a, o, e) {
      if ((o.count++, o.instance === null))
        switch (o.type) {
          case "style":
            var t = a.querySelector('style[data-href~="' + Eo(e.href) + '"]');
            if (t) return ((o.instance = t), za(t), t);
            var n = K({}, e, {
              "data-href": e.href,
              "data-precedence": e.precedence,
              href: null,
              precedence: null,
            });
            return (
              (t = (a.ownerDocument || a).createElement("style")),
              za(t),
              Va(t, "style", n),
              Is(t, e.precedence, a),
              (o.instance = t)
            );
          case "stylesheet":
            n = fn(e.href);
            var l = a.querySelector(bl(n));
            if (l) return ((o.state.loading |= 4), (o.instance = l), za(l), l);
            ((t = Vd(e)),
              (n = Mo.get(n)) && qu(t, n),
              (l = (a.ownerDocument || a).createElement("link")),
              za(l));
            var s = l;
            return (
              (s._p = new Promise(function (i, c) {
                ((s.onload = i), (s.onerror = c));
              })),
              Va(l, "link", t),
              (o.state.loading |= 4),
              Is(l, e.precedence, a),
              (o.instance = l)
            );
          case "script":
            return (
              (l = An(e.src)),
              (n = a.querySelector(Tl(l)))
                ? ((o.instance = n), za(n), n)
                : ((t = e),
                  (n = Mo.get(l)) && ((t = K({}, e)), Fu(t, n)),
                  (a = a.ownerDocument || a),
                  (n = a.createElement("script")),
                  za(n),
                  Va(n, "link", t),
                  a.head.appendChild(n),
                  (o.instance = n))
            );
          case "void":
            return null;
          default:
            throw Error(C(443, o.type));
        }
      else
        o.type === "stylesheet" &&
          (o.state.loading & 4) === 0 &&
          ((t = o.instance), (o.state.loading |= 4), Is(t, e.precedence, a));
      return o.instance;
    }
    function Is(a, o, e) {
      for (
        var t = e.querySelectorAll(
            'link[rel="stylesheet"][data-precedence],style[data-precedence]',
          ),
          n = t.length ? t[t.length - 1] : null,
          l = n,
          s = 0;
        s < t.length;
        s++
      ) {
        var i = t[s];
        if (i.dataset.precedence === o) l = i;
        else if (l !== n) break;
      }
      l
        ? l.parentNode.insertBefore(a, l.nextSibling)
        : ((o = e.nodeType === 9 ? e.head : e),
          o.insertBefore(a, o.firstChild));
    }
    function qu(a, o) {
      (a.crossOrigin == null && (a.crossOrigin = o.crossOrigin),
        a.referrerPolicy == null && (a.referrerPolicy = o.referrerPolicy),
        a.title == null && (a.title = o.title));
    }
    function Fu(a, o) {
      (a.crossOrigin == null && (a.crossOrigin = o.crossOrigin),
        a.referrerPolicy == null && (a.referrerPolicy = o.referrerPolicy),
        a.integrity == null && (a.integrity = o.integrity));
    }
    var hs = null;
    function P0(a, o, e) {
      if (hs === null) {
        var t = new Map(),
          n = (hs = new Map());
        n.set(e, t);
      } else ((n = hs), (t = n.get(e)), t || ((t = new Map()), n.set(e, t)));
      if (t.has(a)) return t;
      for (
        t.set(a, null), e = e.getElementsByTagName(a), n = 0;
        n < e.length;
        n++
      ) {
        var l = e[n];
        if (
          !(
            l[gl] ||
            l[Fa] ||
            (a === "link" && l.getAttribute("rel") === "stylesheet")
          ) &&
          l.namespaceURI !== "http://www.w3.org/2000/svg"
        ) {
          var s = l.getAttribute(o) || "";
          s = a + s;
          var i = t.get(s);
          i ? i.push(l) : t.set(s, [l]);
        }
      }
      return t;
    }
    function _c(a, o, e) {
      ((a = a.ownerDocument || a),
        a.head.insertBefore(
          e,
          o === "title" ? a.querySelector("head > title") : null,
        ));
    }
    function CS(a, o, e) {
      if (e === 1 || o.itemProp != null) return !1;
      switch (a) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (
            typeof o.precedence != "string" ||
            typeof o.href != "string" ||
            o.href === ""
          )
            break;
          return !0;
        case "link":
          if (
            typeof o.rel != "string" ||
            typeof o.href != "string" ||
            o.href === "" ||
            o.onLoad ||
            o.onError
          )
            break;
          return o.rel === "stylesheet"
            ? ((a = o.disabled), typeof o.precedence == "string" && a == null)
            : !0;
        case "script":
          if (
            o.async &&
            typeof o.async != "function" &&
            typeof o.async != "symbol" &&
            !o.onLoad &&
            !o.onError &&
            o.src &&
            typeof o.src == "string"
          )
            return !0;
      }
      return !1;
    }
    function Z0(a, o) {
      return (
        a === "img" &&
        o.src != null &&
        o.src !== "" &&
        o.onLoad == null &&
        o.loading !== "lazy"
      );
    }
    function Pd(a) {
      return !(a.type === "stylesheet" && (a.state.loading & 3) === 0);
    }
    function Zd(a) {
      return (
        (a.width || 100) *
        (a.height || 100) *
        (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) *
        0.25
      );
    }
    function j0(a, o) {
      typeof o.decode == "function" &&
        (a.imgCount++,
        o.complete || ((a.imgBytes += Zd(o)), a.suspenseyImages.push(o)),
        (a = AS.bind(a)),
        o.decode().then(a, a));
    }
    function vS(a, o, e, t) {
      if (
        e.type === "stylesheet" &&
        (typeof t.media != "string" || matchMedia(t.media).matches !== !1) &&
        (e.state.loading & 4) === 0
      ) {
        if (e.instance === null) {
          var n = fn(t.href),
            l = o.querySelector(bl(n));
          if (l) {
            ((o = l._p),
              o !== null &&
                typeof o == "object" &&
                typeof o.then == "function" &&
                (a.count++, (a = ul.bind(a)), o.then(a, a)),
              (e.state.loading |= 4),
              (e.instance = l),
              za(l));
            return;
          }
          ((l = o.ownerDocument || o),
            (t = Vd(t)),
            (n = Mo.get(n)) && qu(t, n),
            (l = l.createElement("link")),
            za(l));
          var s = l;
          ((s._p = new Promise(function (i, c) {
            ((s.onload = i), (s.onerror = c));
          })),
            Va(l, "link", t),
            (e.instance = l));
        }
        (a.stylesheets === null && (a.stylesheets = new Map()),
          a.stylesheets.set(e, o),
          (o = e.state.preload) &&
            (e.state.loading & 3) === 0 &&
            (a.count++,
            (e = ul.bind(a)),
            o.addEventListener("load", e),
            o.addEventListener("error", e)));
      }
    }
    var gs = 0;
    function yS(a, o) {
      return (
        a.stylesheets && a.count === 0 && Ss(a, a.stylesheets),
        0 < a.count || 0 < a.imgCount
          ? function (e) {
              var t = setTimeout(function () {
                if ((a.stylesheets && Ss(a, a.stylesheets), a.unsuspend)) {
                  var l = a.unsuspend;
                  ((a.unsuspend = null), l());
                }
              }, 6e4 + o);
              0 < a.imgBytes && gs === 0 && (gs = 62500 * Fg());
              var n = setTimeout(
                function () {
                  if (
                    ((a.waitingForImages = !1),
                    a.count === 0 &&
                      (a.stylesheets && Ss(a, a.stylesheets), a.unsuspend))
                  ) {
                    var l = a.unsuspend;
                    ((a.unsuspend = null), l());
                  }
                },
                (a.imgBytes > gs ? 50 : 800) + o,
              );
              return (
                (a.unsuspend = e),
                function () {
                  ((a.unsuspend = null), clearTimeout(t), clearTimeout(n));
                }
              );
            }
          : null
      );
    }
    function jd(a) {
      if (a.count === 0 && (a.imgCount === 0 || !a.waitingForImages)) {
        if (a.stylesheets) Ss(a, a.stylesheets);
        else if (a.unsuspend) {
          var o = a.unsuspend;
          ((a.unsuspend = null), o());
        }
      }
    }
    function ul() {
      (this.count--, jd(this));
    }
    function AS() {
      (this.imgCount--, jd(this));
    }
    var Xs = null;
    function Ss(a, o) {
      ((a.stylesheets = null),
        a.unsuspend !== null &&
          (a.count++,
          (Xs = new Map()),
          o.forEach(bS, a),
          (Xs = null),
          ul.call(a)));
    }
    function bS(a, o) {
      if (!(o.state.loading & 4)) {
        var e = Xs.get(a);
        if (e) var t = e.get(null);
        else {
          ((e = new Map()), Xs.set(a, e));
          for (
            var n = a.querySelectorAll(
                "link[data-precedence],style[data-precedence]",
              ),
              l = 0;
            l < n.length;
            l++
          ) {
            var s = n[l];
            (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") &&
              (e.set(s.dataset.precedence, s), (t = s));
          }
          t && e.set(null, t);
        }
        ((n = o.instance),
          (s = n.getAttribute("data-precedence")),
          (l = e.get(s) || t),
          l === t && e.set(null, n),
          e.set(s, n),
          this.count++,
          (t = ul.bind(this)),
          n.addEventListener("load", t),
          n.addEventListener("error", t),
          l
            ? l.parentNode.insertBefore(n, l.nextSibling)
            : ((a = a.nodeType === 9 ? a.head : a),
              a.insertBefore(n, a.firstChild)),
          (o.state.loading |= 4));
      }
    }
    var pn = {
      $$typeof: Zo,
      Provider: null,
      Consumer: null,
      _currentValue: et,
      _currentValue2: et,
      _threadCount: 0,
    };
    function TS(a, o, e, t, n, l, s, i, c) {
      ((this.tag = 1),
        (this.containerInfo = a),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = si(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = si(0)),
        (this.hiddenUpdates = si(null)),
        (this.identifierPrefix = t),
        (this.onUncaughtError = n),
        (this.onCaughtError = l),
        (this.onRecoverableError = s),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.transitionTypes = null),
        (this.incompleteTransitions = new Map()));
    }
    function Xd(a, o, e, t, n, l, s, i, c, m, I, f) {
      return (
        (a = new TS(a, o, e, s, c, m, I, f, i)),
        (o = 1),
        l === !0 && (o |= 24),
        (l = no(3, null, null, o)),
        (a.current = l),
        (l.stateNode = a),
        (o = lu()),
        o.refCount++,
        (a.pooledCache = o),
        o.refCount++,
        (l.memoizedState = { element: t, isDehydrated: e, cache: o }),
        iu(l),
        a
      );
    }
    function Yd(a) {
      return a ? ((a = Gt), a) : Gt;
    }
    function Qd(a, o, e, t, n, l) {
      ((n = Yd(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Oe(o)),
        (t.payload = { element: e }),
        (l = l === void 0 ? null : l),
        l !== null && (t.callback = l),
        (e = Re(a, t, o)),
        e !== null && (lo(e, a, o), Gn(e, a, o)));
    }
    function X0(a, o) {
      if (((a = a.memoizedState), a !== null && a.dehydrated !== null)) {
        var e = a.retryLane;
        a.retryLane = e !== 0 && e < o ? e : o;
      }
    }
    function ku(a, o) {
      (X0(a, o), (a = a.alternate) && X0(a, o));
    }
    function Kd(a) {
      if (a.tag === 13 || a.tag === 31) {
        var o = St(a, 67108864);
        (o !== null && lo(o, a, 67108864), ku(a, 67108864));
      }
    }
    function Y0(a) {
      if (a.tag === 13 || a.tag === 31) {
        var o = go();
        o = Xc(o);
        var e = St(a, o);
        (e !== null && lo(e, a, o), ku(a, o));
      }
    }
    var dn = !0;
    function ES(a, o, e, t) {
      var n = w.T;
      w.T = null;
      var l = G.p;
      try {
        ((G.p = 2), _u(a, o, e, t));
      } finally {
        ((G.p = l), (w.T = n));
      }
    }
    function LS(a, o, e, t) {
      var n = w.T;
      w.T = null;
      var l = G.p;
      try {
        ((G.p = 8), _u(a, o, e, t));
      } finally {
        ((G.p = l), (w.T = n));
      }
    }
    function _u(a, o, e, t) {
      if (dn) {
        var n = Gc(t);
        if (n === null) (Mi(a, o, t, Ys, e), Q0(a, t));
        else if (NS(n, a, o, e, t)) t.stopPropagation();
        else if ((Q0(a, t), o & 4 && -1 < wS.indexOf(a))) {
          for (; n !== null; ) {
            var l = gn(n);
            if (l !== null)
              switch (l.tag) {
                case 3:
                  if (
                    ((l = l.stateNode), l.current.memoizedState.isDehydrated)
                  ) {
                    var s = Je(l.pendingLanes);
                    if (s !== 0) {
                      var i = l;
                      for (i.pendingLanes |= 2, i.entangledLanes |= 2; s; ) {
                        var c = 1 << (31 - ho(s));
                        ((i.entanglements[1] |= c), (s &= ~c));
                      }
                      ($o(l), (_ & 6) === 0 && ((Gs = po() + 500), Al(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((i = St(l, 2)), i !== null && lo(i, l, 2), ur(), ku(l, 2));
              }
            if (((l = Gc(t)), l === null && Mi(a, o, t, Ys, e), l === n)) break;
            n = l;
          }
          n !== null && t.stopPropagation();
        } else Mi(a, o, t, null, e);
      }
    }
    function Gc(a) {
      return ((a = Kc(a)), Gu(a));
    }
    var Ys = null;
    function Gu(a) {
      if (((Ys = null), (a = at(a)), a !== null)) {
        var o = pl(a);
        if (o === null) a = null;
        else {
          var e = o.tag;
          if (e === 13) {
            if (((a = o1(o)), a !== null)) return a;
            a = null;
          } else if (e === 31) {
            if (((a = e1(o)), a !== null)) return a;
            a = null;
          } else if (e === 3) {
            if (o.stateNode.current.memoizedState.isDehydrated)
              return o.tag === 3 ? o.stateNode.containerInfo : null;
            a = null;
          } else o !== a && (a = null);
        }
      }
      return ((Ys = a), null);
    }
    function Jd(a) {
      switch (a) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "fullscreenerror":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "resize":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (_I()) {
            case i1:
              return 2;
            case c1:
              return 8;
            case bs:
            case GI:
              return 32;
            case u1:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Vc = !1,
      qe = null,
      Fe = null,
      ke = null,
      ml = new Map(),
      fl = new Map(),
      Te = [],
      wS =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
          " ",
        );
    function Q0(a, o) {
      switch (a) {
        case "focusin":
        case "focusout":
          qe = null;
          break;
        case "dragenter":
        case "dragleave":
          Fe = null;
          break;
        case "mouseover":
        case "mouseout":
          ke = null;
          break;
        case "pointerover":
        case "pointerout":
          ml.delete(o.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          fl.delete(o.pointerId);
      }
    }
    function Bn(a, o, e, t, n, l) {
      return a === null || a.nativeEvent !== l
        ? ((a = {
            blockedOn: o,
            domEventName: e,
            eventSystemFlags: t,
            nativeEvent: l,
            targetContainers: [n],
          }),
          o !== null && ((o = gn(o)), o !== null && Kd(o)),
          a)
        : ((a.eventSystemFlags |= t),
          (o = a.targetContainers),
          n !== null && o.indexOf(n) === -1 && o.push(n),
          a);
    }
    function NS(a, o, e, t, n) {
      switch (o) {
        case "focusin":
          return ((qe = Bn(qe, a, o, e, t, n)), !0);
        case "dragenter":
          return ((Fe = Bn(Fe, a, o, e, t, n)), !0);
        case "mouseover":
          return ((ke = Bn(ke, a, o, e, t, n)), !0);
        case "pointerover":
          var l = n.pointerId;
          return (ml.set(l, Bn(ml.get(l) || null, a, o, e, t, n)), !0);
        case "gotpointercapture":
          return (
            (l = n.pointerId),
            fl.set(l, Bn(fl.get(l) || null, a, o, e, t, n)),
            !0
          );
      }
      return !1;
    }
    function Wd(a) {
      var o = at(a.target);
      if (o !== null) {
        var e = pl(o);
        if (e !== null) {
          if (((o = e.tag), o === 13)) {
            if (((o = o1(e)), o !== null)) {
              ((a.blockedOn = o),
                yf(a.priority, function () {
                  Y0(e);
                }));
              return;
            }
          } else if (o === 31) {
            if (((o = e1(e)), o !== null)) {
              ((a.blockedOn = o),
                yf(a.priority, function () {
                  Y0(e);
                }));
              return;
            }
          } else if (
            o === 3 &&
            e.stateNode.current.memoizedState.isDehydrated
          ) {
            a.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Cs(a) {
      if (a.blockedOn !== null) return !1;
      for (var o = a.targetContainers; 0 < o.length; ) {
        var e = Gc(a.nativeEvent);
        if (e === null) {
          e = a.nativeEvent;
          var t = new e.constructor(e.type, e);
          ((ji = t), e.target.dispatchEvent(t), (ji = null));
        } else return ((o = gn(e)), o !== null && Kd(o), (a.blockedOn = e), !1);
        o.shift();
      }
      return !0;
    }
    function K0(a, o, e) {
      Cs(a) && e.delete(o);
    }
    function MS() {
      ((Vc = !1),
        qe !== null && Cs(qe) && (qe = null),
        Fe !== null && Cs(Fe) && (Fe = null),
        ke !== null && Cs(ke) && (ke = null),
        ml.forEach(K0),
        fl.forEach(K0));
    }
    function $l(a, o) {
      a.blockedOn === o &&
        ((a.blockedOn = null),
        Vc ||
          ((Vc = !0),
          Ha.unstable_scheduleCallback(Ha.unstable_NormalPriority, MS)));
    }
    var as = null;
    function J0(a) {
      as !== a &&
        ((as = a),
        Ha.unstable_scheduleCallback(Ha.unstable_NormalPriority, function () {
          as === a && (as = null);
          for (var o = 0; o < a.length; o += 3) {
            var e = a[o],
              t = a[o + 1],
              n = a[o + 2];
            if (typeof t != "function") {
              if (Gu(t || e) === null) continue;
              break;
            }
            var l = gn(e);
            l !== null &&
              (a.splice(o, 3),
              (o -= 3),
              ic(
                l,
                { pending: !0, data: n, method: e.method, action: t },
                t,
                n,
              ));
          }
        }));
    }
    function In(a) {
      function o(c) {
        return $l(c, a);
      }
      (qe !== null && $l(qe, a),
        Fe !== null && $l(Fe, a),
        ke !== null && $l(ke, a),
        ml.forEach(o),
        fl.forEach(o));
      for (var e = 0; e < Te.length; e++) {
        var t = Te[e];
        t.blockedOn === a && (t.blockedOn = null);
      }
      for (; 0 < Te.length && ((e = Te[0]), e.blockedOn === null); )
        (Wd(e), e.blockedOn === null && Te.shift());
      if (((e = (a.ownerDocument || a).$$reactFormReplay), e != null))
        for (t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            s = n[ro] || null;
          if (typeof l == "function") s || J0(e);
          else if (s) {
            var i = null;
            if (l && l.hasAttribute("formAction")) {
              if (((n = l), (s = l[ro] || null))) i = s.formAction;
              else if (Gu(n) !== null) continue;
            } else i = s.action;
            (typeof i == "function"
              ? (e[t + 1] = i)
              : (e.splice(t, 3), (t -= 3)),
              J0(e));
          }
        }
    }
    function $d() {
      function a(l) {
        l.canIntercept &&
          l.info === "react-transition" &&
          l.intercept({
            handler: function () {
              return new Promise(function (s) {
                return (n = s);
              });
            },
            focusReset: "manual",
            scroll: "manual",
          });
      }
      function o() {
        (n !== null && (n(), (n = null)), t || setTimeout(e, 20));
      }
      function e() {
        if (!t && !navigation.transition) {
          var l = navigation.currentEntry;
          l &&
            l.url != null &&
            navigation.navigate(l.url, {
              state: l.getState(),
              info: "react-transition",
              history: "replace",
            });
        }
      }
      if (typeof navigation == "object") {
        var t = !1,
          n = null;
        return (
          navigation.addEventListener("navigate", a),
          navigation.addEventListener("navigatesuccess", o),
          navigation.addEventListener("navigateerror", o),
          setTimeout(e, 100),
          function () {
            ((t = !0),
              navigation.removeEventListener("navigate", a),
              navigation.removeEventListener("navigatesuccess", o),
              navigation.removeEventListener("navigateerror", o),
              n !== null && (n(), (n = null)));
          }
        );
      }
    }
    function Vu(a) {
      this._internalRoot = a;
    }
    pr.prototype.render = Vu.prototype.render = function (a) {
      var o = this._internalRoot;
      if (o === null) throw Error(C(409));
      var e = o.current,
        t = go();
      Qd(e, t, a, o, null, null);
    };
    pr.prototype.unmount = Vu.prototype.unmount = function () {
      var a = this._internalRoot;
      if (a !== null) {
        this._internalRoot = null;
        var o = a.containerInfo;
        (Qd(a.current, 2, null, a, null, null), ur(), (o[hn] = null));
      }
    };
    function pr(a) {
      this._internalRoot = a;
    }
    pr.prototype.unstable_scheduleHydration = function (a) {
      if (a) {
        var o = h1();
        a = { blockedOn: null, target: a, priority: o };
        for (var e = 0; e < Te.length && o !== 0 && o < Te[e].priority; e++);
        (Te.splice(e, 0, a), e === 0 && Wd(a));
      }
    };
    var W0 = $0.version;
    if (W0 !== "19.3.1") throw Error(C(527, W0, "19.3.1"));
    G.findDOMNode = function (a) {
      var o = a._reactInternals;
      if (o === void 0)
        throw typeof a.render == "function"
          ? Error(C(188))
          : ((a = Object.keys(a).join(",")), Error(C(268, a)));
      return (
        (a = DI(o)),
        (a = a !== null ? t1(a) : null),
        (a = a === null ? null : a.stateNode),
        a
      );
    };
    var DS = {
      bundleType: 0,
      version: "19.3.1",
      rendererPackageName: "react-dom",
      currentDispatcherRef: w,
      reconcilerVersion: "19.3.1",
    };
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      ((Hn = __REACT_DEVTOOLS_GLOBAL_HOOK__),
      !Hn.isDisabled && Hn.supportsFiber)
    )
      try {
        ((dl = Hn.inject(DS)), (Io = Hn));
      } catch {}
    var Hn;
    dr.createRoot = function (a, o) {
      if (!a1(a)) throw Error(C(299));
      var e = !1,
        t = "",
        n = Op,
        l = Rp,
        s = zp;
      return (
        o != null &&
          (o.unstable_strictMode === !0 && (e = !0),
          o.identifierPrefix !== void 0 && (t = o.identifierPrefix),
          o.onUncaughtError !== void 0 && (n = o.onUncaughtError),
          o.onCaughtError !== void 0 && (l = o.onCaughtError),
          o.onRecoverableError !== void 0 && (s = o.onRecoverableError)),
        (o = Xd(a, 1, !1, null, null, e, t, null, n, l, s, $d)),
        (a[hn] = o.current),
        Ru(a),
        new Vu(o)
      );
    };
    dr.hydrateRoot = function (a, o, e) {
      if (!a1(a)) throw Error(C(299));
      var t = !1,
        n = "",
        l = Op,
        s = Rp,
        i = zp,
        c = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (t = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (l = e.onUncaughtError),
          e.onCaughtError !== void 0 && (s = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError),
          e.formState !== void 0 && (c = e.formState)),
        (o = Xd(a, 1, !0, o, e ?? null, t, n, c, l, s, i, $d)),
        (o.context = Yd(null)),
        (e = o.current),
        (t = go()),
        (t = Xc(t)),
        (n = Oe(t)),
        (n.callback = null),
        Re(e, n, t),
        (e = t),
        (o.current.lanes = e),
        hl(o, e),
        $o(o),
        (a[hn] = o.current),
        Ru(a),
        new pr(o)
      );
    };
    dr.version = "19.3.1";
  });
  var t2 = qo((p4, e2) => {
    "use strict";
    function o2() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o2);
        } catch (a) {
          console.error(a);
        }
    }
    (o2(), (e2.exports = a2()));
  });
  var T2 = qo((Hr) => {
    "use strict";
    var BS = Symbol.for("react.transitional.element"),
      HS = Symbol.for("react.fragment");
    function b2(a, o, e) {
      var t = null;
      if (
        (e !== void 0 && (t = "" + e),
        o.key !== void 0 && (t = "" + o.key),
        "key" in o)
      ) {
        e = {};
        for (var n in o) n !== "key" && (e[n] = o[n]);
      } else e = o;
      return (
        (o = e.ref),
        {
          $$typeof: BS,
          type: a,
          key: t,
          ref: o !== void 0 ? o : null,
          props: e,
        }
      );
    }
    Hr.Fragment = HS;
    Hr.jsx = b2;
    Hr.jsxs = b2;
  });
  var yt = qo((K8, E2) => {
    "use strict";
    E2.exports = T2();
  });
  var t6 = N(D()),
    q2 = N(t2());
  var L = N(D());
  var L2 = N(D());
  var ua = N(D(), 1),
    n2 = new Map([
      [
        "bold",
        ua.createElement(
          ua.Fragment,
          null,
          ua.createElement("path", {
            d: "M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z",
          }),
        ),
      ],
      [
        "duotone",
        ua.createElement(
          ua.Fragment,
          null,
          ua.createElement("path", {
            d: "M112,56V200L40,128Z",
            opacity: "0.2",
          }),
          ua.createElement("path", {
            d: "M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z",
          }),
        ),
      ],
      [
        "fill",
        ua.createElement(
          ua.Fragment,
          null,
          ua.createElement("path", {
            d: "M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z",
          }),
        ),
      ],
      [
        "light",
        ua.createElement(
          ua.Fragment,
          null,
          ua.createElement("path", {
            d: "M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z",
          }),
        ),
      ],
      [
        "regular",
        ua.createElement(
          ua.Fragment,
          null,
          ua.createElement("path", {
            d: "M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z",
          }),
        ),
      ],
      [
        "thin",
        ua.createElement(
          ua.Fragment,
          null,
          ua.createElement("path", {
            d: "M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z",
          }),
        ),
      ],
    ]);
  var ma = N(D(), 1),
    l2 = new Map([
      [
        "bold",
        ma.createElement(
          ma.Fragment,
          null,
          ma.createElement("path", {
            d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z",
          }),
        ),
      ],
      [
        "duotone",
        ma.createElement(
          ma.Fragment,
          null,
          ma.createElement("path", {
            d: "M216,128l-72,72V56Z",
            opacity: "0.2",
          }),
          ma.createElement("path", {
            d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z",
          }),
        ),
      ],
      [
        "fill",
        ma.createElement(
          ma.Fragment,
          null,
          ma.createElement("path", {
            d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z",
          }),
        ),
      ],
      [
        "light",
        ma.createElement(
          ma.Fragment,
          null,
          ma.createElement("path", {
            d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z",
          }),
        ),
      ],
      [
        "regular",
        ma.createElement(
          ma.Fragment,
          null,
          ma.createElement("path", {
            d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z",
          }),
        ),
      ],
      [
        "thin",
        ma.createElement(
          ma.Fragment,
          null,
          ma.createElement("path", {
            d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z",
          }),
        ),
      ],
    ]);
  var fa = N(D(), 1),
    s2 = new Map([
      [
        "bold",
        fa.createElement(
          fa.Fragment,
          null,
          fa.createElement("path", {
            d: "M128,20A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81A108,108,0,1,0,128,20Zm0,192a84,84,0,0,1-42.06-11.27,12,12,0,0,0-6-1.62,12.1,12.1,0,0,0-3.8.62l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.81A84,84,0,1,1,128,212Z",
          }),
        ),
      ],
      [
        "duotone",
        fa.createElement(
          fa.Fragment,
          null,
          fa.createElement("path", {
            d: "M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",
            opacity: "0.2",
          }),
          fa.createElement("path", {
            d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z",
          }),
        ),
      ],
      [
        "fill",
        fa.createElement(
          fa.Fragment,
          null,
          fa.createElement("path", {
            d: "M232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z",
          }),
        ),
      ],
      [
        "light",
        fa.createElement(
          fa.Fragment,
          null,
          fa.createElement("path", {
            d: "M128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z",
          }),
        ),
      ],
      [
        "regular",
        fa.createElement(
          fa.Fragment,
          null,
          fa.createElement("path", {
            d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z",
          }),
        ),
      ],
      [
        "thin",
        fa.createElement(
          fa.Fragment,
          null,
          fa.createElement("path", {
            d: "M128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z",
          }),
        ),
      ],
    ]);
  var pa = N(D(), 1),
    r2 = new Map([
      [
        "bold",
        pa.createElement(
          pa.Fragment,
          null,
          pa.createElement("path", {
            d: "M216,76H188V48a20,20,0,0,0-20-20H40A20,20,0,0,0,20,48V176a12,12,0,0,0,19.54,9.33l28.46-23V184a20,20,0,0,0,20,20h92.17l36.29,29.33A12,12,0,0,0,236,224V96A20,20,0,0,0,216,76ZM44,150.87V52H164v80H71.58A12,12,0,0,0,64,134.67Zm168,48-20-16.2a12,12,0,0,0-7.54-2.67H92V156h76a20,20,0,0,0,20-20V100h24Z",
          }),
        ),
      ],
      [
        "duotone",
        pa.createElement(
          pa.Fragment,
          null,
          pa.createElement("path", {
            d: "M224,96V224l-39.58-32H88a8,8,0,0,1-8-8V144h88a8,8,0,0,0,8-8V88h40A8,8,0,0,1,224,96Z",
            opacity: "0.2",
          }),
          pa.createElement("path", {
            d: "M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z",
          }),
        ),
      ],
      [
        "fill",
        pa.createElement(
          pa.Fragment,
          null,
          pa.createElement("path", {
            d: "M232,96a16,16,0,0,0-16-16H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8Zm-42.55,89.78a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32V207.25Z",
          }),
        ),
      ],
      [
        "light",
        pa.createElement(
          pa.Fragment,
          null,
          pa.createElement("path", {
            d: "M216,82H182V48a14,14,0,0,0-14-14H40A14,14,0,0,0,26,48V176a6,6,0,0,0,3.42,5.41A5.86,5.86,0,0,0,32,182a6,6,0,0,0,3.77-1.33L73.71,150H74v34a14,14,0,0,0,14,14h94.29l37.94,30.67A6,6,0,0,0,224,230a5.86,5.86,0,0,0,2.58-.59A6,6,0,0,0,230,224V96A14,14,0,0,0,216,82ZM71.58,138a6,6,0,0,0-3.77,1.33L38,163.43V48a2,2,0,0,1,2-2H168a2,2,0,0,1,2,2v88a2,2,0,0,1-2,2ZM218,211.43l-29.81-24.1a6,6,0,0,0-3.77-1.33H88a2,2,0,0,1-2-2V150h82a14,14,0,0,0,14-14V94h34a2,2,0,0,1,2,2Z",
          }),
        ),
      ],
      [
        "regular",
        pa.createElement(
          pa.Fragment,
          null,
          pa.createElement("path", {
            d: "M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z",
          }),
        ),
      ],
      [
        "thin",
        pa.createElement(
          pa.Fragment,
          null,
          pa.createElement("path", {
            d: "M216,84H180V48a12,12,0,0,0-12-12H40A12,12,0,0,0,28,48V176a4,4,0,0,0,4,4,4,4,0,0,0,2.51-.89L73,148h3v36a12,12,0,0,0,12,12h95l38.49,31.11A4,4,0,0,0,224,228a4,4,0,0,0,4-4V96A12,12,0,0,0,216,84ZM71.58,140a4,4,0,0,0-2.51.89L36,167.62V48a4,4,0,0,1,4-4H168a4,4,0,0,1,4,4v88a4,4,0,0,1-4,4ZM220,215.62l-33.07-26.73a4,4,0,0,0-2.51-.89H88a4,4,0,0,1-4-4V148h84a12,12,0,0,0,12-12V92h36a4,4,0,0,1,4,4Z",
          }),
        ),
      ],
    ]);
  var da = N(D(), 1),
    i2 = new Map([
      [
        "bold",
        da.createElement(
          da.Fragment,
          null,
          da.createElement("path", {
            d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z",
          }),
        ),
      ],
      [
        "duotone",
        da.createElement(
          da.Fragment,
          null,
          da.createElement("path", {
            d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
            opacity: "0.2",
          }),
          da.createElement("path", {
            d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
          }),
        ),
      ],
      [
        "fill",
        da.createElement(
          da.Fragment,
          null,
          da.createElement("path", {
            d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
          }),
        ),
      ],
      [
        "light",
        da.createElement(
          da.Fragment,
          null,
          da.createElement("path", {
            d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z",
          }),
        ),
      ],
      [
        "regular",
        da.createElement(
          da.Fragment,
          null,
          da.createElement("path", {
            d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z",
          }),
        ),
      ],
      [
        "thin",
        da.createElement(
          da.Fragment,
          null,
          da.createElement("path", {
            d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z",
          }),
        ),
      ],
    ]);
  var Ia = N(D(), 1),
    c2 = new Map([
      [
        "bold",
        Ia.createElement(
          Ia.Fragment,
          null,
          Ia.createElement("path", {
            d: "M178,36c-20.09,0-37.92,7.93-50,21.56C115.92,43.93,98.09,36,78,36a66.08,66.08,0,0,0-66,66c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102A42,42,0,0,1,78,60c17.8,0,32.7,9.4,38.89,24.54a12,12,0,0,0,22.22,0C145.3,69.4,160.2,60,178,60a42,42,0,0,1,42,42C220,131.42,194.18,159.77,172.51,178.36Z",
          }),
        ),
      ],
      [
        "duotone",
        Ia.createElement(
          Ia.Fragment,
          null,
          Ia.createElement("path", {
            d: "M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z",
            opacity: "0.2",
          }),
          Ia.createElement("path", {
            d: "M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z",
          }),
        ),
      ],
      [
        "fill",
        Ia.createElement(
          Ia.Fragment,
          null,
          Ia.createElement("path", {
            d: "M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z",
          }),
        ),
      ],
      [
        "light",
        Ia.createElement(
          Ia.Fragment,
          null,
          Ia.createElement("path", {
            d: "M178,42c-21,0-39.26,9.47-50,25.34C117.26,51.47,99,42,78,42a60.07,60.07,0,0,0-60,60c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102A48.05,48.05,0,0,1,78,54c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,64.83,157.72,54,178,54a48.05,48.05,0,0,1,48,48C226,157.72,144.41,207.64,128,217.11Z",
          }),
        ),
      ],
      [
        "regular",
        Ia.createElement(
          Ia.Fragment,
          null,
          Ia.createElement("path", {
            d: "M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z",
          }),
        ),
      ],
      [
        "thin",
        Ia.createElement(
          Ia.Fragment,
          null,
          Ia.createElement("path", {
            d: "M178,44c-21.44,0-39.92,10.19-50,27.07C117.92,54.19,99.44,44,78,44a58.07,58.07,0,0,0-58,58c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42A50.06,50.06,0,0,1,78,52c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,63.31,156.89,52,178,52a50.06,50.06,0,0,1,50,50C228,160,142,211.46,128,219.42Z",
          }),
        ),
      ],
    ]);
  var ha = N(D(), 1),
    u2 = new Map([
      [
        "bold",
        ha.createElement(
          ha.Fragment,
          null,
          ha.createElement("path", {
            d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z",
          }),
        ),
      ],
      [
        "duotone",
        ha.createElement(
          ha.Fragment,
          null,
          ha.createElement("path", {
            d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
            opacity: "0.2",
          }),
          ha.createElement("path", {
            d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z",
          }),
        ),
      ],
      [
        "fill",
        ha.createElement(
          ha.Fragment,
          null,
          ha.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z",
          }),
        ),
      ],
      [
        "light",
        ha.createElement(
          ha.Fragment,
          null,
          ha.createElement("path", {
            d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z",
          }),
        ),
      ],
      [
        "regular",
        ha.createElement(
          ha.Fragment,
          null,
          ha.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z",
          }),
        ),
      ],
      [
        "thin",
        ha.createElement(
          ha.Fragment,
          null,
          ha.createElement("path", {
            d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z",
          }),
        ),
      ],
    ]);
  var ga = N(D(), 1),
    m2 = new Map([
      [
        "bold",
        ga.createElement(
          ga.Fragment,
          null,
          ga.createElement("path", {
            d: "M117.18,188.74a12,12,0,0,1,0,17l-5.12,5.12A58.26,58.26,0,0,1,70.6,228h0A58.62,58.62,0,0,1,29.14,127.92L63.89,93.17a58.64,58.64,0,0,1,98.56,28.11,12,12,0,1,1-23.37,5.44,34.65,34.65,0,0,0-58.22-16.58L46.11,144.89A34.62,34.62,0,0,0,70.57,204h0a34.41,34.41,0,0,0,24.49-10.14l5.11-5.12A12,12,0,0,1,117.18,188.74ZM226.83,45.17a58.65,58.65,0,0,0-82.93,0l-5.11,5.11a12,12,0,0,0,17,17l5.12-5.12a34.63,34.63,0,1,1,49,49L175.1,145.86A34.39,34.39,0,0,1,150.61,156h0a34.63,34.63,0,0,1-33.69-26.72,12,12,0,0,0-23.38,5.44A58.64,58.64,0,0,0,150.56,180h.05a58.28,58.28,0,0,0,41.47-17.17l34.75-34.75a58.62,58.62,0,0,0,0-82.91Z",
          }),
        ),
      ],
      [
        "duotone",
        ga.createElement(
          ga.Fragment,
          null,
          ga.createElement("path", {
            d: "M218.34,119.6,183.6,154.34a46.58,46.58,0,0,1-44.31,12.26c-.31.34-.62.67-.95,1L103.6,202.34A46.63,46.63,0,1,1,37.66,136.4L72.4,101.66A46.6,46.6,0,0,1,116.71,89.4c.31-.34.62-.67,1-1L152.4,53.66a46.63,46.63,0,0,1,65.94,65.94Z",
            opacity: "0.2",
          }),
          ga.createElement("path", {
            d: "M240,88.23a54.43,54.43,0,0,1-16,37L189.25,160a54.27,54.27,0,0,1-38.63,16h-.05A54.63,54.63,0,0,1,96,119.84a8,8,0,0,1,16,.45A38.62,38.62,0,0,0,150.58,160h0a38.39,38.39,0,0,0,27.31-11.31l34.75-34.75a38.63,38.63,0,0,0-54.63-54.63l-11,11A8,8,0,0,1,135.7,59l11-11A54.65,54.65,0,0,1,224,48,54.86,54.86,0,0,1,240,88.23ZM109,185.66l-11,11A38.41,38.41,0,0,1,70.6,208h0a38.63,38.63,0,0,1-27.29-65.94L78,107.31A38.63,38.63,0,0,1,144,135.71a8,8,0,0,0,7.78,8.22H152a8,8,0,0,0,8-7.78A54.86,54.86,0,0,0,144,96a54.65,54.65,0,0,0-77.27,0L32,130.75A54.62,54.62,0,0,0,70.56,224h0a54.28,54.28,0,0,0,38.64-16l11-11A8,8,0,0,0,109,185.66Z",
          }),
        ),
      ],
      [
        "fill",
        ga.createElement(
          ga.Fragment,
          null,
          ga.createElement("path", {
            d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM115.7,192.49a43.31,43.31,0,0,1-55-66.43l25.37-25.37a43.35,43.35,0,0,1,61.25,0,42.9,42.9,0,0,1,9.95,15.43,8,8,0,1,1-15,5.6A27.33,27.33,0,0,0,97.37,112L72,137.37a27.32,27.32,0,0,0,34.68,41.91,8,8,0,1,1,9,13.21Zm79.61-62.55-25.37,25.37A43,43,0,0,1,139.32,168h0a43.35,43.35,0,0,1-40.53-28.12,8,8,0,1,1,15-5.6A27.35,27.35,0,0,0,139.28,152h0a27.14,27.14,0,0,0,19.32-8L184,118.63a27.32,27.32,0,0,0-34.68-41.91,8,8,0,1,1-9-13.21,43.32,43.32,0,0,1,55,66.43Z",
          }),
        ),
      ],
      [
        "light",
        ga.createElement(
          ga.Fragment,
          null,
          ga.createElement("path", {
            d: "M238,88.18a52.42,52.42,0,0,1-15.4,35.66l-34.75,34.75A52.28,52.28,0,0,1,150.62,174h-.05A52.63,52.63,0,0,1,98,119.9a6,6,0,0,1,6-5.84h.17a6,6,0,0,1,5.83,6.16A40.62,40.62,0,0,0,150.58,162h0a40.4,40.4,0,0,0,28.73-11.9l34.75-34.74A40.63,40.63,0,0,0,156.63,57.9l-11,11a6,6,0,0,1-8.49-8.49l11-11a52.62,52.62,0,0,1,74.43,0A52.83,52.83,0,0,1,238,88.18Zm-127.62,98.9-11,11A40.36,40.36,0,0,1,70.6,210h0a40.63,40.63,0,0,1-28.7-69.36L76.62,105.9A40.63,40.63,0,0,1,146,135.77a6,6,0,0,0,5.83,6.16H152a6,6,0,0,0,6-5.84A52.63,52.63,0,0,0,68.14,97.42L33.38,132.16A52.63,52.63,0,0,0,70.56,222h0a52.26,52.26,0,0,0,37.22-15.42l11-11a6,6,0,1,0-8.49-8.48Z",
          }),
        ),
      ],
      [
        "regular",
        ga.createElement(
          ga.Fragment,
          null,
          ga.createElement("path", {
            d: "M240,88.23a54.43,54.43,0,0,1-16,37L189.25,160a54.27,54.27,0,0,1-38.63,16h-.05A54.63,54.63,0,0,1,96,119.84a8,8,0,0,1,16,.45A38.62,38.62,0,0,0,150.58,160h0a38.39,38.39,0,0,0,27.31-11.31l34.75-34.75a38.63,38.63,0,0,0-54.63-54.63l-11,11A8,8,0,0,1,135.7,59l11-11A54.65,54.65,0,0,1,224,48,54.86,54.86,0,0,1,240,88.23ZM109,185.66l-11,11A38.41,38.41,0,0,1,70.6,208h0a38.63,38.63,0,0,1-27.29-65.94L78,107.31A38.63,38.63,0,0,1,144,135.71a8,8,0,0,0,16,.45A54.86,54.86,0,0,0,144,96a54.65,54.65,0,0,0-77.27,0L32,130.75A54.62,54.62,0,0,0,70.56,224h0a54.28,54.28,0,0,0,38.64-16l11-11A8,8,0,0,0,109,185.66Z",
          }),
        ),
      ],
      [
        "thin",
        ga.createElement(
          ga.Fragment,
          null,
          ga.createElement("path", {
            d: "M236,88.12a50.44,50.44,0,0,1-14.81,34.31l-34.75,34.74A50.33,50.33,0,0,1,150.62,172h-.05A50.63,50.63,0,0,1,100,120a4,4,0,0,1,4-3.89h.11a4,4,0,0,1,3.89,4.11A42.64,42.64,0,0,0,150.58,164h0a42.32,42.32,0,0,0,30.14-12.49l34.75-34.74a42.63,42.63,0,1,0-60.29-60.28l-11,11a4,4,0,0,1-5.66-5.65l11-11A50.64,50.64,0,0,1,236,88.12ZM111.78,188.49l-11,11A42.33,42.33,0,0,1,70.6,212h0a42.63,42.63,0,0,1-30.11-72.77l34.75-34.74A42.63,42.63,0,0,1,148,135.82a4,4,0,0,0,8,.23A50.64,50.64,0,0,0,69.55,98.83L34.8,133.57A50.63,50.63,0,0,0,70.56,220h0a50.33,50.33,0,0,0,35.81-14.83l11-11a4,4,0,1,0-5.65-5.66Z",
          }),
        ),
      ],
    ]);
  var Sa = N(D(), 1),
    f2 = new Map([
      [
        "bold",
        Sa.createElement(
          Sa.Fragment,
          null,
          Sa.createElement("path", {
            d: "M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z",
          }),
        ),
      ],
      [
        "duotone",
        Sa.createElement(
          Sa.Fragment,
          null,
          Sa.createElement("path", {
            d: "M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",
            opacity: "0.2",
          }),
          Sa.createElement("path", {
            d: "M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z",
          }),
        ),
      ],
      [
        "fill",
        Sa.createElement(
          Sa.Fragment,
          null,
          Sa.createElement("path", {
            d: "M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z",
          }),
        ),
      ],
      [
        "light",
        Sa.createElement(
          Sa.Fragment,
          null,
          Sa.createElement("path", {
            d: "M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z",
          }),
        ),
      ],
      [
        "regular",
        Sa.createElement(
          Sa.Fragment,
          null,
          Sa.createElement("path", {
            d: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z",
          }),
        ),
      ],
      [
        "thin",
        Sa.createElement(
          Sa.Fragment,
          null,
          Sa.createElement("path", {
            d: "M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z",
          }),
        ),
      ],
    ]);
  var Ca = N(D(), 1),
    p2 = new Map([
      [
        "bold",
        Ca.createElement(
          Ca.Fragment,
          null,
          Ca.createElement("path", {
            d: "M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z",
          }),
        ),
      ],
      [
        "duotone",
        Ca.createElement(
          Ca.Fragment,
          null,
          Ca.createElement("path", {
            d: "M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",
            opacity: "0.2",
          }),
          Ca.createElement("path", {
            d: "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z",
          }),
        ),
      ],
      [
        "fill",
        Ca.createElement(
          Ca.Fragment,
          null,
          Ca.createElement("path", {
            d: "M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z",
          }),
        ),
      ],
      [
        "light",
        Ca.createElement(
          Ca.Fragment,
          null,
          Ca.createElement("path", {
            d: "M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z",
          }),
        ),
      ],
      [
        "regular",
        Ca.createElement(
          Ca.Fragment,
          null,
          Ca.createElement("path", {
            d: "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z",
          }),
        ),
      ],
      [
        "thin",
        Ca.createElement(
          Ca.Fragment,
          null,
          Ca.createElement("path", {
            d: "M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z",
          }),
        ),
      ],
    ]);
  var va = N(D(), 1),
    d2 = new Map([
      [
        "bold",
        va.createElement(
          va.Fragment,
          null,
          va.createElement("path", {
            d: "M230.14,25.86a20,20,0,0,0-19.57-5.11l-.22.07L18.44,79a20,20,0,0,0-3.06,37.25L99,157l40.71,83.65a19.81,19.81,0,0,0,18,11.38c.57,0,1.15,0,1.73-.07A19.82,19.82,0,0,0,177,237.56L235.18,45.65a1.42,1.42,0,0,0,.07-.22A20,20,0,0,0,230.14,25.86ZM156.91,221.07l-34.37-70.64,46-45.95a12,12,0,0,0-17-17l-46,46L34.93,99.09,210,46Z",
          }),
        ),
      ],
      [
        "duotone",
        va.createElement(
          va.Fragment,
          null,
          va.createElement("path", {
            d: "M223.69,42.18l-58.22,192a8,8,0,0,1-14.92,1.25L108,148,20.58,105.45a8,8,0,0,1,1.25-14.92l192-58.22A8,8,0,0,1,223.69,42.18Z",
            opacity: "0.2",
          }),
          va.createElement("path", {
            d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z",
          }),
        ),
      ],
      [
        "fill",
        va.createElement(
          va.Fragment,
          null,
          va.createElement("path", {
            d: "M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z",
          }),
        ),
      ],
      [
        "light",
        va.createElement(
          va.Fragment,
          null,
          va.createElement("path", {
            d: "M225.88,30.12a13.83,13.83,0,0,0-13.7-3.58l-.11,0L20.14,84.77A14,14,0,0,0,18,110.85l85.56,41.64L145.12,238a13.87,13.87,0,0,0,12.61,8c.4,0,.81,0,1.21-.05a13.9,13.9,0,0,0,12.29-10.09l58.2-191.93,0-.11A13.83,13.83,0,0,0,225.88,30.12Zm-8,10.4L159.73,232.43l0,.11a2,2,0,0,1-3.76.26l-40.68-83.58,49-49a6,6,0,1,0-8.49-8.49l-49,49L23.15,100a2,2,0,0,1,.31-3.74l.11,0L215.48,38.08a1.94,1.94,0,0,1,1.92.52A2,2,0,0,1,217.92,40.52Z",
          }),
        ),
      ],
      [
        "regular",
        va.createElement(
          va.Fragment,
          null,
          va.createElement("path", {
            d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z",
          }),
        ),
      ],
      [
        "thin",
        va.createElement(
          va.Fragment,
          null,
          va.createElement("path", {
            d: "M224.47,31.52a11.87,11.87,0,0,0-11.82-3L20.74,86.67a12,12,0,0,0-1.91,22.38L105,151l41.92,86.15A11.88,11.88,0,0,0,157.74,244c.34,0,.69,0,1,0a11.89,11.89,0,0,0,10.52-8.63l58.21-192,0-.08A11.85,11.85,0,0,0,224.47,31.52Zm-4.62,9.54-58.23,192a4,4,0,0,1-7.48.59l-41.3-84.86,50-50a4,4,0,1,0-5.66-5.66l-50,50-84.9-41.31a3.88,3.88,0,0,1-2.27-4,3.93,3.93,0,0,1,3-3.54L214.9,36.16A3.93,3.93,0,0,1,216,36a4,4,0,0,1,2.79,1.19A3.93,3.93,0,0,1,219.85,41.06Z",
          }),
        ),
      ],
    ]);
  var ya = N(D(), 1),
    I2 = new Map([
      [
        "bold",
        ya.createElement(
          ya.Fragment,
          null,
          ya.createElement("path", {
            d: "M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z",
          }),
        ),
      ],
      [
        "duotone",
        ya.createElement(
          ya.Fragment,
          null,
          ya.createElement("path", {
            d: "M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z",
            opacity: "0.2",
          }),
          ya.createElement("path", {
            d: "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z",
          }),
        ),
      ],
      [
        "fill",
        ya.createElement(
          ya.Fragment,
          null,
          ya.createElement("path", {
            d: "M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z",
          }),
        ),
      ],
      [
        "light",
        ya.createElement(
          ya.Fragment,
          null,
          ya.createElement("path", {
            d: "M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z",
          }),
        ),
      ],
      [
        "regular",
        ya.createElement(
          ya.Fragment,
          null,
          ya.createElement("path", {
            d: "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z",
          }),
        ),
      ],
      [
        "thin",
        ya.createElement(
          ya.Fragment,
          null,
          ya.createElement("path", {
            d: "M220.78,162.13,173.56,141A12,12,0,0,0,162.18,142a3.37,3.37,0,0,0-.38.28L137,163.42a3.93,3.93,0,0,1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9,3.9,0,0,1,.18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12,12,0,0,0,1-11.36L93.9,35.28a12,12,0,0,0-12.48-7.19A52.25,52.25,0,0,0,36,80c0,77.2,62.8,140,140,140a52.25,52.25,0,0,0,51.91-45.42A12,12,0,0,0,220.78,162.13ZM220,173.58A44.23,44.23,0,0,1,176,212C103.22,212,44,152.78,44,80A44.23,44.23,0,0,1,82.42,36a3.87,3.87,0,0,1,.48,0,4,4,0,0,1,3.67,2.49l21.11,47.14a4,4,0,0,1-.23,3.6l-21.19,25.2c-.1.13-.2.25-.29.39a12,12,0,0,0-.78,11.75c8.69,17.79,26.61,35.58,44.6,44.27a12,12,0,0,0,11.79-.87l.37-.28,24.83-21.12a3.93,3.93,0,0,1,3.57-.27l47.21,21.16A4,4,0,0,1,220,173.58Z",
          }),
        ),
      ],
    ]);
  var Aa = N(D(), 1),
    h2 = new Map([
      [
        "bold",
        Aa.createElement(
          Aa.Fragment,
          null,
          Aa.createElement("path", {
            d: "M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z",
          }),
        ),
      ],
      [
        "duotone",
        Aa.createElement(
          Aa.Fragment,
          null,
          Aa.createElement("path", {
            d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
            opacity: "0.2",
          }),
          Aa.createElement("path", {
            d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
          }),
        ),
      ],
      [
        "fill",
        Aa.createElement(
          Aa.Fragment,
          null,
          Aa.createElement("path", {
            d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z",
          }),
        ),
      ],
      [
        "light",
        Aa.createElement(
          Aa.Fragment,
          null,
          Aa.createElement("path", {
            d: "M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z",
          }),
        ),
      ],
      [
        "regular",
        Aa.createElement(
          Aa.Fragment,
          null,
          Aa.createElement("path", {
            d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
          }),
        ),
      ],
      [
        "thin",
        Aa.createElement(
          Aa.Fragment,
          null,
          Aa.createElement("path", {
            d: "M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z",
          }),
        ),
      ],
    ]);
  var ba = N(D(), 1),
    g2 = new Map([
      [
        "bold",
        ba.createElement(
          ba.Fragment,
          null,
          ba.createElement("path", {
            d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z",
          }),
        ),
      ],
      [
        "duotone",
        ba.createElement(
          ba.Fragment,
          null,
          ba.createElement("path", {
            d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",
            opacity: "0.2",
          }),
          ba.createElement("path", {
            d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z",
          }),
        ),
      ],
      [
        "fill",
        ba.createElement(
          ba.Fragment,
          null,
          ba.createElement("path", {
            d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z",
          }),
        ),
      ],
      [
        "light",
        ba.createElement(
          ba.Fragment,
          null,
          ba.createElement("path", {
            d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z",
          }),
        ),
      ],
      [
        "regular",
        ba.createElement(
          ba.Fragment,
          null,
          ba.createElement("path", {
            d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z",
          }),
        ),
      ],
      [
        "thin",
        ba.createElement(
          ba.Fragment,
          null,
          ba.createElement("path", {
            d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z",
          }),
        ),
      ],
    ]);
  var Ta = N(D(), 1),
    S2 = new Map([
      [
        "bold",
        Ta.createElement(
          Ta.Fragment,
          null,
          Ta.createElement("path", {
            d: "M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z",
          }),
        ),
      ],
      [
        "duotone",
        Ta.createElement(
          Ta.Fragment,
          null,
          Ta.createElement("path", {
            d: "M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",
            opacity: "0.2",
          }),
          Ta.createElement("path", {
            d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z",
          }),
        ),
      ],
      [
        "fill",
        Ta.createElement(
          Ta.Fragment,
          null,
          Ta.createElement("path", {
            d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z",
          }),
        ),
      ],
      [
        "light",
        Ta.createElement(
          Ta.Fragment,
          null,
          Ta.createElement("path", {
            d: "M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z",
          }),
        ),
      ],
      [
        "regular",
        Ta.createElement(
          Ta.Fragment,
          null,
          Ta.createElement("path", {
            d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z",
          }),
        ),
      ],
      [
        "thin",
        Ta.createElement(
          Ta.Fragment,
          null,
          Ta.createElement("path", {
            d: "M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z",
          }),
        ),
      ],
    ]);
  var Ea = N(D(), 1),
    C2 = new Map([
      [
        "bold",
        Ea.createElement(
          Ea.Fragment,
          null,
          Ea.createElement("path", {
            d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z",
          }),
        ),
      ],
      [
        "duotone",
        Ea.createElement(
          Ea.Fragment,
          null,
          Ea.createElement("path", {
            d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
            opacity: "0.2",
          }),
          Ea.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z",
          }),
        ),
      ],
      [
        "fill",
        Ea.createElement(
          Ea.Fragment,
          null,
          Ea.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z",
          }),
        ),
      ],
      [
        "light",
        Ea.createElement(
          Ea.Fragment,
          null,
          Ea.createElement("path", {
            d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z",
          }),
        ),
      ],
      [
        "regular",
        Ea.createElement(
          Ea.Fragment,
          null,
          Ea.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z",
          }),
        ),
      ],
      [
        "thin",
        Ea.createElement(
          Ea.Fragment,
          null,
          Ea.createElement("path", {
            d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm-4-84V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z",
          }),
        ),
      ],
    ]);
  var La = N(D(), 1),
    v2 = new Map([
      [
        "bold",
        La.createElement(
          La.Fragment,
          null,
          La.createElement("path", {
            d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z",
          }),
        ),
      ],
      [
        "duotone",
        La.createElement(
          La.Fragment,
          null,
          La.createElement("path", {
            d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
            opacity: "0.2",
          }),
          La.createElement("path", {
            d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
          }),
        ),
      ],
      [
        "fill",
        La.createElement(
          La.Fragment,
          null,
          La.createElement("path", {
            d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
          }),
        ),
      ],
      [
        "light",
        La.createElement(
          La.Fragment,
          null,
          La.createElement("path", {
            d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z",
          }),
        ),
      ],
      [
        "regular",
        La.createElement(
          La.Fragment,
          null,
          La.createElement("path", {
            d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
          }),
        ),
      ],
      [
        "thin",
        La.createElement(
          La.Fragment,
          null,
          La.createElement("path", {
            d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z",
          }),
        ),
      ],
    ]);
  var vt = N(D(), 1);
  var y2 = N(D(), 1),
    A2 = (0, y2.createContext)({
      color: "currentColor",
      size: "1em",
      weight: "regular",
      mirrored: !1,
    });
  var F = vt.forwardRef((a, o) => {
    let {
        alt: e,
        color: t,
        size: n,
        weight: l,
        mirrored: s,
        children: i,
        weights: c,
        ...m
      } = a,
      {
        color: I = "currentColor",
        size: f,
        weight: u = "regular",
        mirrored: g = !1,
        ...v
      } = vt.useContext(A2);
    return vt.createElement(
      "svg",
      {
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: n ?? f,
        height: n ?? f,
        fill: t ?? I,
        viewBox: "0 0 256 256",
        transform: s || g ? "scale(-1, 1)" : void 0,
        ...v,
        ...m,
      },
      !!e && vt.createElement("title", null, e),
      i,
      c.get(l ?? u),
    );
  });
  F.displayName = "IconBase";
  var Ir = N(D(), 1);
  var Pu = Ir.forwardRef((a, o) =>
    Ir.createElement(F, { ref: o, ...a, weights: n2 }),
  );
  Pu.displayName = "ArrowLeftIcon";
  var Zu = Pu;
  var hr = N(D(), 1);
  var ju = hr.forwardRef((a, o) =>
    hr.createElement(F, { ref: o, ...a, weights: l2 }),
  );
  ju.displayName = "ArrowRightIcon";
  var Xu = ju;
  var gr = N(D(), 1);
  var Yu = gr.forwardRef((a, o) =>
    gr.createElement(F, { ref: o, ...a, weights: s2 }),
  );
  Yu.displayName = "ChatCircleIcon";
  var Qu = Yu;
  var Sr = N(D(), 1);
  var Ku = Sr.forwardRef((a, o) =>
    Sr.createElement(F, { ref: o, ...a, weights: r2 }),
  );
  Ku.displayName = "ChatsIcon";
  var Ju = Ku;
  var Cr = N(D(), 1);
  var Wu = Cr.forwardRef((a, o) =>
    Cr.createElement(F, { ref: o, ...a, weights: i2 }),
  );
  Wu.displayName = "CheckIcon";
  var $u = Wu;
  var vr = N(D(), 1);
  var am = vr.forwardRef((a, o) =>
    vr.createElement(F, { ref: o, ...a, weights: c2 }),
  );
  am.displayName = "HeartIcon";
  var om = am;
  var yr = N(D(), 1);
  var em = yr.forwardRef((a, o) =>
    yr.createElement(F, { ref: o, ...a, weights: u2 }),
  );
  em.displayName = "InfoIcon";
  var tm = em;
  var Ar = N(D(), 1);
  var nm = Ar.forwardRef((a, o) =>
    Ar.createElement(F, { ref: o, ...a, weights: m2 }),
  );
  nm.displayName = "LinkIcon";
  var lm = nm;
  var br = N(D(), 1);
  var sm = br.forwardRef((a, o) =>
    br.createElement(F, { ref: o, ...a, weights: f2 }),
  );
  sm.displayName = "MagnifyingGlassIcon";
  var rm = sm;
  var Tr = N(D(), 1);
  var im = Tr.forwardRef((a, o) =>
    Tr.createElement(F, { ref: o, ...a, weights: p2 }),
  );
  im.displayName = "MapPinIcon";
  var cm = im;
  var Er = N(D(), 1);
  var um = Er.forwardRef((a, o) =>
    Er.createElement(F, { ref: o, ...a, weights: d2 }),
  );
  um.displayName = "PaperPlaneTiltIcon";
  var mm = um;
  var Lr = N(D(), 1);
  var fm = Lr.forwardRef((a, o) =>
    Lr.createElement(F, { ref: o, ...a, weights: I2 }),
  );
  fm.displayName = "PhoneIcon";
  var pm = fm;
  var wr = N(D(), 1);
  var dm = wr.forwardRef((a, o) =>
    wr.createElement(F, { ref: o, ...a, weights: h2 }),
  );
  dm.displayName = "PlusIcon";
  var Im = dm;
  var Nr = N(D(), 1);
  var hm = Nr.forwardRef((a, o) =>
    Nr.createElement(F, { ref: o, ...a, weights: g2 }),
  );
  hm.displayName = "UserIcon";
  var gm = hm;
  var Mr = N(D(), 1);
  var Sm = Mr.forwardRef((a, o) =>
    Mr.createElement(F, { ref: o, ...a, weights: S2 }),
  );
  Sm.displayName = "WarningIcon";
  var Cm = Sm;
  var Dr = N(D(), 1);
  var vm = Dr.forwardRef((a, o) =>
    Dr.createElement(F, { ref: o, ...a, weights: C2 }),
  );
  vm.displayName = "WarningCircleIcon";
  var ym = vm;
  var Br = N(D(), 1);
  var Am = Br.forwardRef((a, o) =>
    Br.createElement(F, { ref: o, ...a, weights: v2 }),
  );
  Am.displayName = "XIcon";
  var bm = Am;
  /* ===== Ana: busca a resposta mais parecida na base do zElo (sem IA generativa) =====
     1. Normaliza o texto (minúsculas, sem acento, sem pontuação).
     2. Troca sinônimos e gírias por uma palavra-base (ex.: "birra", "surto" -> "crise").
     3. Corrige erros de digitação comparando com o vocabulário da base (distância de edição).
     4. Compara com cada pergunta da base, dando mais peso às palavras raras (TF-IDF simples),
        e soma um pouco de semelhança por trechos de 3 letras para frases curtas.
     5. Se nada passa do limite, oferece as perguntas mais próximas em vez de inventar. */
  var zAna = (function () {
    var PARADAS = (
      "a o e é de da do das dos em no na nos nas um uma uns umas para pra pro por com sem que se " +
      "eu me mim meu minha meus minhas voce vc voces seu sua seus suas ele ela eles elas lhe nos " +
      "isso isto esse essa este esta aquele aquela ai aqui la ja tambem mais muito muita bem so " +
      "ao aos como qual quais quando onde porque pq por que oque o que e ou mas entao tipo " +
      "ta to tou estou esta estao sou ser foi era tem tenho temos ter fazer faco faz pode posso " +
      "consigo dar sobre ola oi bom boa dia tarde noite favor ajuda queria quero gostaria saber " +
      "algum alguma alguem coisa coisas gente nao sim filho filha crianca pessoa"
    )
      .split(" ")
      .reduce(function (m, w) {
        m[w] = 1;
        return m;
      }, {});
    // palavras que importam mesmo sendo "comuns" em outro contexto
    ["nao", "filho", "filha", "crianca", "pessoa", "noite", "dia", "ajuda"].forEach(function (w) {
      delete PARADAS[w];
    });
    ["nao", "ajuda"].forEach(function (w) {
      PARADAS[w] = 1;
    });

    function normalizar(t) {
      return (t || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
    function raiz(w) {
      if (w.length > 5 && /coes$/.test(w)) return w.slice(0, -4) + "cao";
      if (w.length > 5 && /oes$/.test(w)) return w.slice(0, -3) + "ao";
      if (w.length > 4 && /s$/.test(w)) return w.slice(0, -1);
      return w;
    }
    var SIN = {};
    function sinonimos(lista) {
      lista.forEach(function (grupo) {
        var base = grupo[0];
        grupo.forEach(function (w) {
          SIN[raiz(normalizar(w))] = base;
        });
      });
    }
    function lev(a, b, max) {
      if (Math.abs(a.length - b.length) > max) return max + 1;
      var prev = [],
        cur,
        i,
        j;
      for (j = 0; j <= b.length; j++) prev[j] = j;
      for (i = 1; i <= a.length; i++) {
        cur = [i];
        var menor = i;
        for (j = 1; j <= b.length; j++) {
          var custo = a[i - 1] === b[j - 1] ? 0 : 1;
          cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + custo);
          if (cur[j] < menor) menor = cur[j];
        }
        if (menor > max) return max + 1;
        prev = cur;
      }
      return prev[b.length];
    }
    var VOCAB = {},
      VOCAB_LISTA = [],
      CACHE = {};
    function corrigir(w) {
      if (VOCAB[w] || w.length < 4) return w;
      if (CACHE[w] !== void 0) return CACHE[w];
      var max = w.length <= 5 ? 1 : 2,
        melhor = w,
        dist = max + 1;
      for (var k = 0; k < VOCAB_LISTA.length; k++) {
        var v = VOCAB_LISTA[k];
        if (v.length < 4) continue;
        var d = lev(w, v, max);
        if (d < dist || (d === dist && v[0] === w[0] && melhor[0] !== w[0])) {
          dist = d;
          melhor = v;
        }
        if (dist === 0) break;
      }
      CACHE[w] = dist <= max ? melhor : w;
      return CACHE[w];
    }
    function termos(t, corrige) {
      var saida = [];
      normalizar(t)
        .split(" ")
        .forEach(function (w) {
          if (!w || PARADAS[w]) return;
          w = raiz(w);
          if (SIN[w]) w = SIN[w];
          else if (corrige) {
            var c = corrigir(w);
            w = SIN[c] || c;
          }
          if (!PARADAS[w] && saida.indexOf(w) < 0) saida.push(w);
        });
      return saida;
    }
    function trigramas(t) {
      var s = "  " + normalizar(t) + " ",
        m = {};
      for (var i = 0; i < s.length - 2; i++) m[s.slice(i, i + 3)] = 1;
      return m;
    }
    function dice(a, b) {
      var n = 0,
        na = 0,
        nb = 0,
        k;
      for (k in a) {
        na++;
        if (b[k]) n++;
      }
      for (k in b) nb++;
      return na + nb ? (2 * n) / (na + nb) : 0;
    }

    var BASE = [],
      IDF = {};
    function preparar(base, listaSinonimos) {
      sinonimos(listaSinonimos);
      BASE = base.map(function (e) {
        return {
          id: e.id,
          tema: e.tema,
          perguntas: e.perguntas,
          resposta: e.resposta,
          links: e.links,
          sugestoes: e.sugestoes,
          variantes: e.perguntas.map(function (p) {
            return { termos: termos(p, !1), tri: trigramas(p) };
          }),
        };
      });
      var df = {};
      BASE.forEach(function (e) {
        var vistos = {};
        e.variantes.forEach(function (v) {
          v.termos.forEach(function (w) {
            vistos[w] = 1;
            if (!VOCAB[w]) {
              VOCAB[w] = 1;
              VOCAB_LISTA.push(w);
            }
          });
        });
        Object.keys(vistos).forEach(function (w) {
          df[w] = (df[w] || 0) + 1;
        });
      });
      Object.keys(SIN).forEach(function (w) {
        if (!VOCAB[w]) {
          VOCAB[w] = 1;
          VOCAB_LISTA.push(w);
        }
      });
      var n = BASE.length;
      Object.keys(df).forEach(function (w) {
        IDF[w] = Math.log(1 + n / df[w]);
      });
    }
    function peso(w) {
      return IDF[w] || Math.log(1 + BASE.length);
    }
    function pontuar(q) {
      var qt = termos(q, !0),
        qtri = trigramas(q),
        somaQ = qt.reduce(function (s, w) {
          return s + peso(w);
        }, 0);
      return BASE.map(function (e) {
        var melhor = 0;
        e.variantes.forEach(function (v) {
          var comum = 0,
            somaV = 0;
          v.termos.forEach(function (w) {
            somaV += peso(w);
            if (qt.indexOf(w) >= 0) comum += peso(w);
          });
          var cos = somaQ && somaV ? comum / Math.sqrt(somaQ * somaV) : 0,
            // palavras da pergunta que a base não cobre puxam a nota para baixo
            cobertura = somaQ ? comum / somaQ : 0,
            pts = 0.82 * cos * (0.45 + 0.55 * cobertura) + 0.18 * dice(qtri, v.tri);
          if (pts > melhor) melhor = pts;
        });
        return { e: e, pts: melhor };
      }).sort(function (a, b) {
        return b.pts - a.pts;
      });
    }
    return {
      preparar: preparar,
      termos: termos,
      buscar: function (q) {
        var r = pontuar(q);
        return { melhor: r[0], lista: r.slice(0, 4) };
      },
    };
  })();
  /* ===== Base de perguntas e respostas da Ana =====
     Cada item: id, tema, perguntas (jeitos diferentes de perguntar a mesma coisa),
     resposta, links (telas do app) e sugestoes (próximas perguntas).
     Para ensinar algo novo à Ana, acrescente um item aqui. Ela só sabe o que está nesta base. */
  var zAnaSinonimos = [
    ["dormir", "sono", "dorme", "dormindo", "insonia", "acorda", "acordando", "acordar", "desperta", "despertar", "madrugada", "cochilo", "soneca", "deitar"],
    ["comer", "comida", "alimentacao", "alimentar", "refeicao", "comendo", "almoco", "janta", "jantar", "lanche", "cafe", "cardapio", "apetite"],
    ["engasgar", "engasgo", "engasga", "engasgando", "engolir", "deglutir", "degluticao", "disfagia", "tosse", "tossindo", "tosse"],
    ["crise", "birra", "surto", "meltdown", "agitacao", "agitado", "agitada", "agressivo", "agressiva", "agressividade", "bate", "batendo", "morde", "mordendo", "grita", "gritando", "grito", "berra", "berrando", "pirraca", "descontrole", "desregulado", "desregulada", "desregulacao", "explode"],
    ["convulsao", "convulsiona", "convulsionando", "epilepsia", "epileptico", "epileptica", "ataque", "tremedeira", "desmaio", "desmaiou"],
    ["falar", "fala", "fala pouco", "comunicar", "comunicacao", "comunica", "palavra", "palavras", "verbal", "naoverbal", "conversar com ele"],
    ["prancha", "figura", "figuras", "pecs", "caa", "comunicacao alternativa", "cartao", "cartoes", "imagens", "figurinha", "figurinhas", "desenhos"],
    ["autismo", "autista", "tea", "espectro"],
    ["paralisia", "pc", "paralisia cerebral", "encefalopatia"],
    ["down", "sindrome de down", "trissomia"],
    ["cego", "cega", "cegueira", "visual", "enxerga", "enxergar", "baixa visao", "visao"],
    ["surdo", "surda", "surdez", "auditiva", "ouvir", "escuta", "ouve", "aparelho auditivo", "implante"],
    ["libras", "sinais", "lingua de sinais"],
    ["cadeira", "cadeirante", "cadeira de rodas", "andador", "muleta", "mobilidade", "locomocao", "andar", "anda", "caminhar"],
    ["dor", "doi", "doendo", "dores", "machucado", "desconforto", "incomodo"],
    ["postura", "posicao", "sentar", "sentado", "deitado", "posicionamento", "coluna", "escoliose"],
    ["ferida", "escara", "escaras", "lesao", "assadura", "assado", "vermelhidao", "pele"],
    ["banho", "higiene", "lavar", "escovar", "dente", "dentes", "escovacao", "unha", "cabelo"],
    ["banheiro", "fralda", "fraldas", "desfralde", "desfraldar", "xixi", "coco", "penico", "vaso", "intestino", "prisao de ventre", "constipacao", "constipado"],
    ["remedio", "remedios", "medicamento", "medicamentos", "medicacao", "dose", "comprimido", "receita", "farmacia", "tomar remedio"],
    ["consulta", "consultas", "medico", "medica", "doutor", "doutora", "pediatra", "neurologista", "neuro", "psiquiatra"],
    ["terapia", "terapias", "terapeuta", "reabilitacao", "sessao", "sessoes"],
    ["fono", "fonoaudiologo", "fonoaudiologa", "fonoaudiologia"],
    ["fisio", "fisioterapeuta", "fisioterapia"],
    ["to", "terapia ocupacional", "terapeuta ocupacional", "ocupacional"],
    ["psicologo", "psicologa", "psicologia", "psico", "terapia psicologica"],
    ["nutricionista", "nutricao", "nutri", "dieta"],
    ["sus", "ubs", "posto", "posto de saude", "unidade", "unidade de saude", "publico"],
    ["fila", "espera", "esperando", "demora", "demorando", "encaminhamento", "regulacao", "vaga"],
    ["cer", "centro especializado", "reabilitacao especializada", "apae", "aacd"],
    ["escola", "colegio", "creche", "professor", "professora", "aula", "matricula", "inclusao", "aee", "mediador", "acompanhante", "cuidador escolar"],
    ["bpc", "loas", "beneficio", "inss", "aposentadoria", "auxilio", "dinheiro", "renda"],
    ["cras", "assistente social", "assistencia social", "cadunico", "cadastro unico"],
    ["documento", "documentos", "laudo", "laudos", "relatorio", "carteirinha", "ciptea", "carteira"],
    ["passe", "passe livre", "onibus", "transporte", "gratuidade", "vale transporte"],
    ["cansado", "cansada", "cansaco", "exausto", "exausta", "exaustao", "esgotado", "esgotada", "aguento", "sem energia", "sem forca", "nao aguento", "estafa", "burnout"],
    ["triste", "tristeza", "chorando", "choro", "chorar", "deprimido", "deprimida", "depressao", "desanimado", "desanimada", "pra baixo"],
    ["sozinho", "sozinha", "solidao", "isolado", "isolada", "ninguem", "abandonado", "abandonada", "sem apoio"],
    ["medo", "preocupado", "preocupada", "preocupacao", "ansioso", "ansiosa", "ansiedade", "nervoso", "nervosa", "aflito", "aflita", "angustia"],
    ["culpa", "culpado", "culpada", "falhando", "mae ruim", "pai ruim", "errado"],
    ["raiva", "irritado", "irritada", "irritacao", "estressado", "estressada", "estresse", "nervoso com"],
    ["diagnostico", "diagnosticado", "descobri", "descobrimos", "recebi o diagnostico", "suspeita"],
    ["irmao", "irmaos", "irma", "irmas", "outro filho", "outros filhos"],
    ["agendar", "agendamento", "marcar", "marcacao", "horario", "horarios", "agenda"],
    ["cancelar", "desmarcar", "cancelamento"],
    ["remarcar", "trocar horario", "mudar horario", "reagendar"],
    ["forum", "comunidade", "grupo", "outras familias", "outras maes", "outros pais"],
    ["dica", "dicas", "material", "materiais", "artigo", "leitura"],
    ["tema", "cor", "cores", "escuro", "modo escuro", "contraste", "alto contraste", "letra", "fonte"],
    ["voluntario", "voluntaria", "voluntariado", "voluntarios"],
    ["gratis", "gratuito", "gratuita", "pagar", "pago", "custa", "preco", "valor", "cobra"],
    ["privacidade", "privado", "dados", "lgpd", "seguro", "seguranca", "sigilo", "segredo"],
    ["senha", "login", "entrar", "acesso", "conta"],
    ["email", "e mail", "mail"],
    ["sensorial", "barulho", "som", "luz", "toque", "textura", "seletividade sensorial", "hipersensivel"],
    ["seletivo", "seletiva", "seletividade", "so come", "recusa", "recusar", "nao come", "nao quer comer"],
    ["tela", "celular", "tablet", "televisao", "tv", "video", "youtube", "jogo"],
    ["rotina", "horario fixo", "organizacao", "organizar", "dia a dia", "cotidiano"],
    ["pausa", "descanso", "descansar", "tempo pra mim", "tempo para mim", "folga", "respiro", "revezamento"],
    ["robo", "bot", "inteligencia artificial", "ia", "maquina", "automatico", "humano", "pessoa de verdade"],
    ["obrigado", "obrigada", "valeu", "agradeco", "brigado", "brigada"],
    ["tchau", "ate logo", "ate mais", "falou", "boa noite pra voce", "fui"],
  ];

  var zAnaBase = [
    /* ---------- Conversa e o próprio app ---------- */
    { id: "quem-e", tema: "conversa", perguntas: ["quem é você", "quem é vc", "quem é a ana", "você é um robô", "você é uma pessoa de verdade", "é inteligência artificial", "com quem estou falando"],
      resposta: "Sou a Ana, a assistente do zElo. Não sou uma pessoa: eu procuro a resposta mais parecida com a sua pergunta numa base de perguntas e respostas revisada pela equipe do zElo. Se eu não souber, eu digo e te mostro outro caminho.",
      sugestoes: ["O que você sabe responder?", "Quero falar com um profissional"] },
    { id: "o-que-sabe", tema: "conversa", perguntas: ["o que você sabe responder", "sobre o que posso perguntar", "como você funciona", "o que você faz", "me ajuda com o que"],
      resposta: "Sei responder dúvidas do dia a dia de cuidado: sono, alimentação, engasgo, crises, comunicação, dor, higiene, remédios, terapias, SUS e escola. Também explico como usar o zElo e falo sobre o cansaço de quem cuida.",
      sugestoes: ["Meu filho dorme pouco", "Como marcar uma consulta?", "Estou muito cansada"] },
    { id: "obrigado", tema: "conversa", perguntas: ["obrigado", "obrigada", "valeu", "muito obrigada pela ajuda", "ajudou muito"],
      resposta: "Que bom que ajudou. Estou por aqui quando precisar." },
    { id: "tchau", tema: "conversa", perguntas: ["tchau", "até logo", "até mais", "boa noite pra você", "vou sair"],
      resposta: "Até mais. Se precisar, é só voltar aqui. Em emergência, ligue 192." },
    { id: "gratis", tema: "app", perguntas: ["o zelo é gratuito", "precisa pagar", "quanto custa a consulta", "a consulta é paga", "tem que pagar alguma coisa"],
      resposta: "O zElo é gratuito. As consultas em Atendimentos são feitas por profissionais voluntários e não têm custo.",
      links: ["atendimentos"] },
    { id: "como-agendar", tema: "app", perguntas: ["como marcar uma consulta", "como agendar atendimento", "quero marcar com um profissional", "como faço para agendar", "marcar horário com psicóloga"],
      resposta: "Vá em Atendimentos, escolha o profissional e toque em Agendar consulta. Depois escolha se vai ser presencial ou online, o dia e o horário, e confirme. São dois passos.",
      links: ["atendimentos"], sugestoes: ["Como cancelar um agendamento?", "Os profissionais são verificados?"] },
    { id: "cancelar", tema: "app", perguntas: ["como cancelar um agendamento", "quero desmarcar a consulta", "não vou poder ir na consulta", "cancelar atendimento"],
      resposta: "Em Atendimentos, abra Meus agendamentos e toque em Cancelar agendamento no atendimento que você quer desmarcar. Avise com antecedência sempre que puder: assim o horário fica livre para outra família.",
      links: ["atendimentos"] },
    { id: "remarcar", tema: "app", perguntas: ["como remarcar a consulta", "quero trocar o horário", "mudar o dia do atendimento", "reagendar consulta"],
      resposta: "Para trocar o horário, cancele o atendimento em Meus agendamentos e marque de novo com o mesmo profissional no dia que for melhor para você.",
      links: ["atendimentos"] },
    { id: "verificado", tema: "app", perguntas: ["os profissionais são verificados", "posso confiar nos profissionais", "como sei que é profissional de verdade", "quem são os voluntários"],
      resposta: "Sim. Todo voluntário envia o registro no conselho da profissão (como CRP, CREFITO ou CRFa) e a comprovação do título. A equipe confere antes de liberar o acesso. Por isso aparece a etiqueta Verificado." },
    { id: "online-agora", tema: "app", perguntas: ["o que significa online agora", "o profissional está online", "dá pra falar agora com alguém", "atendimento hoje"],
      resposta: "Online agora quer dizer que o voluntário está disponível hoje e tem horários ainda neste dia. Você vê os horários de hoje ao tocar em Agendar consulta.",
      links: ["atendimentos"] },
    { id: "presencial-online", tema: "app", perguntas: ["a consulta é online ou presencial", "como funciona a consulta online", "chamada de vídeo", "preciso instalar alguma coisa para a consulta online"],
      resposta: "Depende do profissional: alguns atendem presencialmente, outros por vídeo, e alguns dos dois jeitos. Quando há as duas opções, você escolhe na hora de agendar. A chamada de vídeo abre pelo próprio zElo, sem instalar nada." },
    { id: "forum-postar", tema: "app", perguntas: ["como postar no fórum", "como fazer uma pergunta no fórum", "quero conversar com outras mães", "criar tópico", "como falar com outras famílias"],
      resposta: "No Fórum, toque em Novo tópico, escreva um título, escolha o assunto e conte o que aconteceu. Outras famílias e profissionais podem responder. Não publique exames, documentos ou dados que identifiquem a pessoa.",
      links: ["forum"] },
    { id: "dicas-onde", tema: "app", perguntas: ["onde encontro as dicas", "tem material para ler", "artigos de profissionais", "onde leio mais sobre isso"],
      resposta: "Em Dicas há textos curtos escritos por profissionais voluntários. Dá para buscar por palavra, como sono ou fala, e filtrar por área.",
      links: ["dicas"] },
    { id: "privacidade", tema: "app", perguntas: ["meus dados estão seguros", "alguém vê o que eu escrevo aqui", "o chat é privado", "quem lê essa conversa", "lgpd"],
      resposta: "Esta conversa é privada e não aparece no fórum. Seus dados de saúde são protegidos pela LGPD e só são usados para organizar o que o zElo mostra para você." },
    { id: "tema-cor", tema: "app", perguntas: ["como mudar a cor do aplicativo", "tem modo escuro", "a letra está difícil de ler", "alto contraste", "mudar o tema"],
      resposta: "No Perfil, em Customização, você escolhe entre Claro, Escuro e Alto contraste. O Alto contraste usa preto no branco e bordas grossas, para quem enxerga pouco.",
      links: ["perfil"] },
    { id: "trocar-nome", tema: "app", perguntas: ["como mudar meu nome", "o app está com o nome errado", "trocar meu nome no perfil"],
      resposta: "No Perfil, em Seus dados, troque o nome e toque em Salvar alterações.", links: ["perfil"] },
    { id: "trocar-email", tema: "app", perguntas: ["como trocar meu email", "quero mudar o e-mail da conta", "email errado"],
      resposta: "Por segurança, o e-mail não muda pelo app. Escreva aqui que quer trocar e qual é o novo e-mail: a equipe de acolhimento confere e faz a troca." },
    { id: "senha", tema: "app", perguntas: ["esqueci minha senha", "não consigo entrar", "como trocar a senha", "minha senha não funciona"],
      resposta: "Na tela de entrada, toque em Esqueci minha senha e digite o seu e-mail. Enviamos um link para você criar uma senha nova." },
    { id: "refazer-perguntas", tema: "app", perguntas: ["como mudar minhas respostas do começo", "quero refazer as perguntas", "mudar o que aparece para mim", "as sugestões não combinam comigo"],
      resposta: "No Perfil, em Preferências do diagnóstico, toque em Refazer as perguntas. O que aparece em Para você muda de acordo com as novas respostas.",
      links: ["perfil"] },
    { id: "ser-voluntario", tema: "app", perguntas: ["como ser voluntário", "sou profissional e quero ajudar", "quero atender pelo zelo", "cadastro de voluntário"],
      resposta: "Na primeira tela, escolha Sou voluntário e preencha o cadastro com seu registro no conselho e a comprovação do título. A aprovação sai em até 24 horas." },
    { id: "beneficios-escopo", tema: "direitos", perguntas: ["o zelo ajuda com benefício", "vocês resolvem documentos", "ajuda com escola e laudo"],
      resposta: "O zElo orienta questões de saúde. Para benefícios e documentos, o caminho é o CRAS da sua cidade. Para escola, a própria escola ou a secretaria de educação. Posso te explicar o básico de cada um.",
      sugestoes: ["Como pedir o BPC?", "Meu filho tem direito a acompanhante na escola?"] },

    /* ---------- Emergência e segurança ---------- */
    { id: "emergencia", tema: "emergencia", perguntas: ["é uma emergência", "o que fazer numa emergência", "preciso de socorro", "qual número ligar", "ambulância"],
      resposta: "Se há risco de vida, ligue 192 (SAMU), de graça e 24 horas. Na tela Preciso de ajuda há o passo a passo e outros telefones: 193 para bombeiros, 190 para polícia e 188 para apoio emocional (CVV).",
      links: ["ajuda"] },
    { id: "convulsao", tema: "emergencia", perguntas: ["o que fazer numa convulsão", "meu filho está convulsionando", "teve uma crise epiléptica", "como ajudar na convulsão"],
      resposta: "Na convulsão: deite a pessoa de lado, afaste objetos, apoie a cabeça em algo macio e não coloque nada na boca. Marque a hora em que começou. Se passar de 5 minutos, se for a primeira vez ou se ela não voltar a respirar normalmente, ligue 192.",
      links: ["ajuda"] },
    { id: "convulsao-depois", tema: "emergencia", perguntas: ["o que fazer depois da convulsão", "ele dormiu depois da crise", "quando levar ao médico depois da convulsão"],
      resposta: "Depois da convulsão é comum a pessoa ficar sonolenta ou confusa. Deixe de lado, num lugar calmo, e fique por perto. Anote a hora, quanto durou e como foi, e conte ao médico que acompanha. Se as crises ficarem mais frequentes, procure atendimento." },
    { id: "engasgo-agora", tema: "emergencia", perguntas: ["está engasgado agora", "não consegue respirar", "engasgou e ficou roxo", "o que fazer se engasgar"],
      resposta: "Se a pessoa tosse com força, deixe tossir e fique por perto. Se não consegue tossir, falar ou respirar, ligue 192 agora e siga as orientações da atendente.",
      links: ["ajuda"] },
    { id: "queda", tema: "emergencia", perguntas: ["ele caiu e bateu a cabeça", "teve uma queda", "caiu da cadeira de rodas", "bateu a cabeça"],
      resposta: "Depois de uma queda com batida na cabeça, observe por algumas horas. Ligue 192 se houver vômito, sonolência fora do normal, convulsão, sangramento pelo nariz ou ouvido, ou se a pessoa ficar diferente do jeito dela.",
      links: ["ajuda"] },
    { id: "febre", tema: "saude", perguntas: ["está com febre", "febre alta o que fazer", "temperatura alta", "quando a febre é perigosa"],
      resposta: "Meça a temperatura e ofereça líquidos. Dê remédio para febre só como o médico orientou. Procure atendimento se a febre passar de 39 °C, durar mais de dois dias, vier com falta de ar, manchas na pele, convulsão ou muita sonolência." },
    { id: "violencia", tema: "emergencia", perguntas: ["estou sofrendo violência", "alguém está machucando ele", "acho que ele sofreu abuso", "denunciar maus tratos"],
      resposta: "Se há perigo agora, ligue 190. Para denunciar violência contra pessoa com deficiência, ligue 100 (Disque Direitos Humanos), de graça e sem se identificar. Você não precisa ter certeza para pedir ajuda.",
      links: ["ajuda"] },

    /* ---------- Sono ---------- */
    { id: "sono-geral", tema: "sono", perguntas: ["dúvida sobre o sono", "meu filho dorme pouco", "ele não dorme direito", "como fazer dormir melhor", "problema de sono", "dificuldade para dormir"],
      resposta: "Três coisas costumam ajudar: 1. Horários parecidos para dormir e acordar, inclusive no fim de semana. 2. Uma hora de calma antes de deitar, com pouca luz, sem telas e sempre a mesma sequência (banho, pijama, música baixa). 3. Anotar por duas semanas a hora de dormir e os despertares. Se não melhorar, leve esse registro a um profissional.",
      links: ["dicas"], sugestoes: ["Ele acorda de madrugada", "Tela antes de dormir atrapalha?"] },
    { id: "sono-madrugada", tema: "sono", perguntas: ["acorda várias vezes de madrugada", "acorda no meio da noite e não volta a dormir", "acorda chorando à noite", "desperta de madrugada"],
      resposta: "Quando acordar, fale pouco, deixe a luz baixa e leve de volta para a cama sem brincadeira ou tela. Repare se algo pode estar incomodando: dor, fome, fralda molhada, calor ou barulho. Despertares todas as noites por semanas merecem conversa com o médico." },
    { id: "sono-tela", tema: "sono", perguntas: ["tela antes de dormir atrapalha", "celular à noite faz mal", "pode ver vídeo antes de dormir", "televisão no quarto"],
      resposta: "Atrapalha, sim. A luz e o estímulo da tela deixam o corpo acordado. O ideal é desligar uma hora antes de dormir e trocar por algo calmo e repetido, como uma música baixa ou uma história." },
    { id: "sono-remedio", tema: "sono", perguntas: ["posso dar remédio para dormir", "melatonina", "chá para dormir", "calmante para criança dormir"],
      resposta: "Não dê remédio ou suplemento para dormir sem orientação médica, nem melatonina. O médico que acompanha avalia se é o caso e qual dose. Leve o registro de sono das últimas semanas para ajudar." },
    { id: "sono-cuidador", tema: "cuidador", perguntas: ["eu não durmo direito", "estou sem dormir cuidando dele", "passo a noite acordada", "não descanso nunca"],
      resposta: "Ficar sem dormir pesa no corpo e no humor. Se for possível, combine com alguém da família um revezamento em algumas noites, nem que seja uma por semana. E fale disso numa consulta: o seu sono também é saúde.",
      links: ["atendimentos"] },

    /* ---------- Alimentação ---------- */
    { id: "alimentacao-geral", tema: "alimentacao", perguntas: ["dúvida sobre alimentação", "como melhorar a alimentação", "ele come mal", "hora da refeição é difícil"],
      resposta: "Na hora de comer: sente a pessoa com as costas retas e os pés apoiados, num lugar calmo e sem televisão. Ofereça pequenas porções, devagar, e espere engolir antes da próxima. Se houver tosse ou engasgo frequente, peça avaliação de um fonoaudiólogo.",
      links: ["dicas"], sugestoes: ["Ele só come poucas coisas", "Engasga com líquido"] },
    { id: "seletividade", tema: "alimentacao", perguntas: ["só come poucas coisas", "só come arroz", "só come um tipo de comida", "seletividade alimentar", "recusa comida nova", "só aceita comida de uma cor", "não quer comer nada diferente"],
      resposta: "Seletividade é comum, principalmente no autismo. Ofereça o alimento novo ao lado de um que a pessoa já aceita, em pouca quantidade e sem pressão. Pode levar muitas tentativas. Deixe tocar, cheirar e brincar com a comida. Um nutricionista ou terapeuta ocupacional ajuda a montar um plano.",
      links: ["atendimentos"] },
    { id: "engasgo-liquido", tema: "alimentacao", perguntas: ["engasga com líquido", "engasga com água", "tosse quando bebe", "engasga toda refeição", "dificuldade para engolir"],
      resposta: "Engasgos frequentes pedem avaliação de um fonoaudiólogo, que vê como a pessoa engole e qual textura é segura. Até lá: pessoa sentada e reta, porções pequenas, devagar. Não engrosse líquidos por conta própria sem orientação. Tosse com febre depois das refeições é sinal para procurar o médico.",
      links: ["atendimentos"] },
    { id: "nao-come", tema: "alimentacao", perguntas: ["não quer comer nada", "parou de comer", "está perdendo peso", "recusa todas as refeições"],
      resposta: "Recusa de comida que dura mais de um ou dois dias, ou perda de peso, merece consulta. Às vezes é dor de dente, na garganta ou na barriga que a pessoa não consegue contar. Ofereça líquidos e comidas que ela já aceita enquanto isso." },
    { id: "sonda", tema: "alimentacao", perguntas: ["alimentação por sonda", "gastrostomia", "cuidados com a sonda", "botton gastrostomia"],
      resposta: "Siga sempre o que a equipe que colocou a sonda orientou sobre dieta, limpeza e lavagem. Procure o serviço se a pele ao redor ficar vermelha, com pus ou dor, se a sonda sair do lugar ou se houver vômitos repetidos." },
    { id: "prisao-ventre", tema: "saude", perguntas: ["prisão de ventre", "não faz cocô há dias", "intestino preso", "constipação"],
      resposta: "Ofereça mais água, frutas e verduras ao longo do dia e, se possível, movimento. Sentar no vaso no mesmo horário, depois de uma refeição, ajuda. Se passar de três dias, houver dor forte, barriga inchada ou vômito, procure atendimento." },

    /* ---------- Comportamento e emoção da pessoa ---------- */
    { id: "crise-geral", tema: "comportamento", perguntas: ["dúvida sobre crises e comportamento", "ele tem crise o tempo todo", "o que fazer numa crise", "meu filho tem crise de birra", "ele fica muito agitado", "como lidar com as crises"],
      resposta: "Antes: repare no que vem antes da crise (fome, cansaço, barulho, troca de atividade) para se antecipar. Durante: fale pouco e devagar, leve para um lugar quieto e afaste o que pode machucar. Não é hora de ensinar nem de brigar. Depois: quando passar, acolha e cuide de você também.",
      links: ["dicas"], sugestoes: ["Ele se machuca na crise", "Crise ou birra, qual a diferença?"] },
    { id: "crise-autoagressao", tema: "comportamento", perguntas: ["ele se machuca na crise", "bate a cabeça na parede", "se morde", "se arranha", "autoagressão"],
      resposta: "Na hora, proteja: uma almofada entre a cabeça e a parede, mãos ocupadas com algo macio, menos gente e menos barulho por perto. Anote quando acontece e o que veio antes. Autoagressão frequente precisa de acompanhamento com psicólogo e médico.",
      links: ["atendimentos"] },
    { id: "crise-birra", tema: "comportamento", perguntas: ["crise ou birra qual a diferença", "é birra ou é crise", "meltdown", "é manha"],
      resposta: "Na birra a pessoa quer algo e costuma parar quando consegue ou quando percebe que não vai conseguir. Na crise de desregulação ela perde o controle, muitas vezes por excesso de estímulo, e não consegue parar sozinha. Na crise, o foco é acalmar e proteger, não negociar." },
    { id: "crise-rua", tema: "comportamento", perguntas: ["crise na rua", "crise no mercado", "todo mundo olhando durante a crise", "crise em lugar público"],
      resposta: "Procure um canto mais quieto, fique entre a pessoa e o movimento e fale pouco. Você não deve explicação a ninguém. Se ajudar, leve sempre uma bolsa com fone abafador, um objeto que acalma e água. Algumas famílias usam um cartão que explica a situação para quem pergunta." },
    { id: "agressivo-outros", tema: "comportamento", perguntas: ["ele bate nos outros", "agressivo com o irmão", "morde as pessoas", "bate em mim"],
      resposta: "Mantenha a calma e afaste quem pode se machucar. Diga uma frase curta e firme, como 'não pode bater', e ofereça outra saída (apertar uma almofada, ir para o canto calmo). Tente descobrir o que a pessoa quer comunicar com isso. Um psicólogo ajuda a montar um plano para casa.",
      links: ["atendimentos"] },
    { id: "sensorial", tema: "comportamento", perguntas: ["sensível a barulho", "tapa os ouvidos", "não gosta de ser tocado", "incomoda com luz", "sensibilidade sensorial"],
      resposta: "Sensibilidade a som, luz ou toque é comum. Ajuda ter um canto calmo em casa, fones abafadores em lugares barulhentos e avisar antes de tocar. Um terapeuta ocupacional pode avaliar e orientar atividades para o dia a dia.",
      links: ["atendimentos"] },
    { id: "mudanca-rotina", tema: "rotina", perguntas: ["não aceita mudança de rotina", "fica nervoso quando muda o plano", "como avisar mudança", "rotina visual"],
      resposta: "Avise antes e mostre o que vai mudar. Uma rotina visual com 3 ou 4 fotos na ordem das atividades ajuda a pessoa a saber o que vem depois. Quando der, ofereça uma escolha pequena dentro da mudança.",
      links: ["dicas"] },
    { id: "tela-excesso", tema: "rotina", perguntas: ["fica muito tempo no celular", "só quer ver vídeo", "vício em tela", "tirar o celular dá crise"],
      resposta: "Combine horários fixos de tela e avise alguns minutos antes de acabar, com um timer visível. Tenha uma atividade preferida pronta para o depois. Diminua aos poucos: tirar tudo de uma vez costuma gerar crise." },
    { id: "ansiedade-pessoa", tema: "comportamento", perguntas: ["meu filho é muito ansioso", "ele fica nervoso com tudo", "medo de sair de casa", "ansiedade na criança"],
      resposta: "Antecipar ajuda muito: contar o que vai acontecer, mostrar fotos do lugar, levar um objeto conhecido. Respiração lenta junto com você também acalma. Se a ansiedade atrapalha comer, dormir ou sair de casa, procure um psicólogo.",
      links: ["atendimentos"] },

    /* ---------- Comunicação ---------- */
    { id: "comunicacao-geral", tema: "comunicacao", perguntas: ["dúvida sobre comunicação", "meu filho não fala", "não fala nada ainda", "fala pouco", "como ajudar a falar", "atraso na fala"],
      resposta: "Comunicar é mais do que falar. Fale devagar sobre o que vocês estão fazendo, ofereça duas escolhas (água ou suco?) e espere a resposta, mesmo que seja um gesto ou um olhar. Responda sempre. Um fonoaudiólogo avalia e orienta o próximo passo.",
      links: ["dicas", "atendimentos"], sugestoes: ["Como usar prancha com figuras?", "Ele vai falar um dia?"] },
    { id: "prancha", tema: "comunicacao", perguntas: ["como usar prancha com figuras", "comunicação alternativa", "pecs", "cartões com imagens para se comunicar"],
      resposta: "Comece com 4 ou 5 fotos do que a pessoa mais pede: água, comida, banheiro, brincar. Deixe num lugar fácil de ver. Aponte a figura enquanto fala a palavra e, quando ela apontar, atenda logo. Assim ela entende que funciona. Usar figuras não atrapalha a fala.",
      links: ["dicas"] },
    { id: "vai-falar", tema: "comunicacao", perguntas: ["ele vai falar um dia", "será que vai falar", "com que idade vai falar", "nunca vai falar"],
      resposta: "Ninguém consegue prever com certeza. Muitas pessoas começam a falar mais tarde, e outras se comunicam bem por gestos, figuras ou aplicativos. O mais importante é ela ter algum jeito de se comunicar desde já. O fonoaudiólogo acompanha a evolução." },
    { id: "libras", tema: "comunicacao", perguntas: ["onde aprender libras", "meu filho é surdo como me comunicar", "libras para a família", "língua de sinais"],
      resposta: "Aprender Libras junto com a criança é um ótimo caminho. Muitas universidades, associações de surdos e secretarias oferecem cursos gratuitos. Pergunte no CRAS ou na secretaria de educação da sua cidade. Na escola, a criança surda tem direito a intérprete." },
    { id: "nao-entendo", tema: "comunicacao", perguntas: ["não entendo o que ele quer", "ele chora e eu não sei por quê", "como saber o que ele sente"],
      resposta: "Observe o que vem antes do choro e anote por alguns dias: hora, lugar, o que estava acontecendo. Padrões aparecem. Ofereça escolhas com objetos ou figuras na mão. E considere dor: quem não fala às vezes mostra dor pelo choro e pela irritação.",
      sugestoes: ["Como saber se ele está com dor?"] },

    /* ---------- Corpo, dor e cuidados ---------- */
    { id: "dor-sinais", tema: "corpo", perguntas: ["como saber se ele está com dor", "sinais de dor em quem não fala", "acho que está com dor", "dúvida sobre dor e postura"],
      resposta: "Choro diferente, gemidos, recusa de comida, corpo mais rígido, mudança de humor ou de postura podem indicar dor. Anote quando acontece e o que aliviou. Dor nova ou que não passa merece avaliação.",
      links: ["dicas", "atendimentos"] },
    { id: "postura-sentar", tema: "corpo", perguntas: ["como sentar corretamente", "posição para comer", "postura na cadeira", "escorrega na cadeira"],
      resposta: "Costas apoiadas, quadril no fundo do assento, pés apoiados no chão ou num banquinho e mesa na altura do peito. Se a pessoa escorrega ou tomba para o lado, peça ao fisioterapeuta para avaliar adaptações na cadeira.",
      links: ["dicas"] },
    { id: "cadeira-rodas", tema: "corpo", perguntas: ["como conseguir cadeira de rodas", "cadeira de rodas pelo sus", "preciso de andador", "órtese pelo sus"],
      resposta: "Cadeira de rodas, andador e órteses podem ser pedidos pelo SUS. Peça o encaminhamento na unidade de saúde para um Centro Especializado em Reabilitação (CER), onde a equipe avalia e indica o modelo certo." },
    { id: "transferencia", tema: "corpo", perguntas: ["como levantar sem machucar as costas", "tirar da cama para a cadeira", "transferência da cadeira", "dor nas costas de carregar"],
      resposta: "Chegue perto, dobre os joelhos e mantenha as costas retas, usando a força das pernas. Avise antes de mover e peça que a pessoa ajude no que puder. Um fisioterapeuta ensina técnicas e equipamentos que poupam a sua coluna.",
      links: ["atendimentos"] },
    { id: "escaras", tema: "corpo", perguntas: ["como evitar escaras", "ferida de ficar deitado", "pele vermelha nas costas", "lesão por pressão"],
      resposta: "Mude a posição a cada 2 horas, mantenha a pele limpa e seca e use travesseiros para aliviar ossos como calcanhar e quadril. Mancha vermelha que não some depois de aliviar a pressão já é sinal de alerta: mostre à equipe de saúde." },
    { id: "exercicio-casa", tema: "corpo", perguntas: ["exercícios para fazer em casa", "fisioterapia em casa", "alongamento em casa", "como estimular o movimento"],
      resposta: "Exercícios em casa ajudam muito, mas precisam ser os indicados para o corpo da pessoa. Peça ao fisioterapeuta uma sequência curta para fazer todo dia. Em Atendimentos há fisioterapeutas que montam isso por vídeo.",
      links: ["atendimentos"] },
    { id: "banho", tema: "cuidados", perguntas: ["dificuldade na hora do banho", "não gosta de tomar banho", "banho é uma luta", "como dar banho com segurança"],
      resposta: "Deixe tudo pronto antes, teste a água no seu pulso e avise cada passo. Para quem não gosta, ajudam uma sequência sempre igual, um brinquedo de banho e menos tempo. Para segurança: tapete antiderrapante e, se precisar, uma cadeira de banho." },
    { id: "dentes", tema: "cuidados", perguntas: ["não deixa escovar os dentes", "como escovar os dentes", "dentista para pessoa com deficiência", "cuidado com os dentes"],
      resposta: "Comece com pouco tempo e sempre na mesma hora, de preferência na frente do espelho. Escova macia e pouca pasta. Mostre em você primeiro. Há dentistas que atendem pessoas com deficiência pelo SUS: pergunte na unidade de saúde pelo Centro de Especialidades Odontológicas (CEO)." },
    { id: "desfralde", tema: "cuidados", perguntas: ["como tirar a fralda", "desfralde", "quando tirar a fralda", "ensinar a usar o banheiro"],
      resposta: "Observe sinais de prontidão: fica seco por mais tempo, avisa ou mostra incômodo com a fralda. Leve ao banheiro em horários fixos, como ao acordar e depois das refeições, e comemore cada tentativa. Escapes fazem parte. O terapeuta ocupacional pode ajudar com um plano." },
    { id: "puberdade", tema: "cuidados", perguntas: ["puberdade", "menstruação na deficiência", "como explicar as mudanças do corpo", "sexualidade"],
      resposta: "Explique as mudanças antes que aconteçam, com palavras simples e imagens. Ensine sobre privacidade: quais partes do corpo são privadas e quem pode ajudar no banho. Um psicólogo ou o médico que acompanha pode orientar a família." },
    { id: "remedio-horario", tema: "remedios", perguntas: ["como organizar os remédios", "esqueço de dar o remédio", "muitos remédios em horários diferentes", "tabela de remédios"],
      resposta: "Faça uma tabela com nome, dose e horário de cada remédio e cole na geladeira. Use alarmes no celular. Uma caixa organizadora por dia ajuda. Leve a tabela em toda consulta.",
      sugestoes: ["Esqueci de dar uma dose"] },
    { id: "remedio-esqueci", tema: "remedios", perguntas: ["esqueci de dar uma dose", "pulei o remédio", "dei o remédio duas vezes", "errei a dose"],
      resposta: "Não dobre a dose seguinte por conta própria. Ligue para a farmácia que forneceu o remédio ou para o médico e pergunte o que fazer. Se deu dose a mais e a pessoa ficar muito sonolenta, diferente ou passar mal, ligue 192." },
    { id: "remedio-recusa", tema: "remedios", perguntas: ["não aceita tomar remédio", "cospe o remédio", "como dar remédio para quem não engole comprimido"],
      resposta: "Pergunte ao médico ou ao farmacêutico se existe o remédio em gotas ou xarope, ou se pode ser amassado e misturado. Nem todo remédio pode. Ofereça com calma, sempre do mesmo jeito, e elogie depois." },
    { id: "vacina", tema: "saude", perguntas: ["vacinas para pessoa com deficiência", "precisa de vacina especial", "crie centro de imunobiológicos"],
      resposta: "Mantenha a caderneta em dia na unidade de saúde. Algumas pessoas com deficiência ou doenças crônicas têm direito a vacinas extras nos Centros de Referência para Imunobiológicos Especiais (CRIE). O médico faz o pedido." },

    /* ---------- Terapias, SUS e caminhos ---------- */
    { id: "qual-terapia", tema: "terapias", perguntas: ["qual terapia meu filho precisa", "dúvida sobre terapias", "que tipo de terapia", "precisa de qual profissional"],
      resposta: "Depende do que mais pesa no dia a dia. Fono ajuda com fala, comunicação e engolir. Terapia ocupacional ajuda com rotina, sensorial e tarefas como comer e vestir. Fisioterapia, com movimento e postura. Psicologia, com comportamento e emoções. O médico que acompanha ajuda a priorizar.",
      links: ["atendimentos"] },
    { id: "sus-fila", tema: "sus", perguntas: ["terapia pelo sus demora muito", "estou na fila há meses", "quanto tempo espera no sus", "encaminhamento não sai"],
      resposta: "A espera varia muito de cidade para cidade. Vá à unidade de saúde e pergunte em que posição está na fila, levando o número do encaminhamento. Enquanto espera, um voluntário do zElo pode orientar atividades para fazer em casa.",
      links: ["atendimentos", "forum"] },
    { id: "cer", tema: "sus", perguntas: ["o que é cer", "centro especializado em reabilitação", "onde fazer reabilitação pelo sus", "apae ou aacd"],
      resposta: "O CER é o Centro Especializado em Reabilitação do SUS, com equipe de fisio, fono, terapia ocupacional e outros. O acesso é por encaminhamento da unidade de saúde. Instituições como APAE e AACD também atendem em muitas cidades." },
    { id: "primeira-consulta", tema: "terapias", perguntas: ["como me preparar para a consulta", "o que levar na consulta", "primeira consulta", "não sei o que perguntar ao médico"],
      resposta: "Anote antes o que mudou nas últimas semanas (sono, apetite, humor, crises), com datas. Leve a lista de remédios com dose e horário, os exames e até três perguntas por escrito. Peça para repetir o que não ficou claro.",
      links: ["dicas"] },
    { id: "diagnostico-tea", tema: "diagnostico", perguntas: ["acho que meu filho é autista", "como saber se é autismo", "sinais de autismo", "quem faz o diagnóstico de autismo"],
      resposta: "Alguns sinais: pouco contato visual, não atender pelo nome, atraso na fala, movimentos repetidos, interesses muito restritos e sensibilidade a sons ou texturas. Converse com o pediatra na unidade de saúde: ele encaminha para avaliação com neuropediatra ou psiquiatra infantil e equipe. Não precisa esperar o laudo para começar a estimular." },
    { id: "diagnostico-recebido", tema: "diagnostico", perguntas: ["acabei de receber o diagnóstico", "descobri que meu filho tem deficiência", "não sei por onde começar", "o que fazer depois do diagnóstico"],
      resposta: "É muita coisa de uma vez, e é normal sentir medo, tristeza ou alívio. Um passo de cada vez: 1. Pergunte ao médico quais terapias são prioridade. 2. Peça os encaminhamentos na unidade de saúde. 3. Procure outras famílias no Fórum. 4. Cuide de você também.",
      links: ["forum", "atendimentos"] },
    { id: "laudo", tema: "direitos", perguntas: ["como conseguir laudo", "preciso de laudo", "quem dá o laudo", "relatório médico"],
      resposta: "O laudo é feito pelo médico que acompanha, como neuropediatra ou psiquiatra, depois da avaliação. Peça que conste o CID e como a condição afeta o dia a dia. Guarde cópias: escola, benefícios e carteirinhas costumam pedir." },
    { id: "down", tema: "condicoes", perguntas: ["síndrome de down cuidados", "meu filho tem down", "acompanhamento na síndrome de down"],
      resposta: "Na síndrome de Down é importante acompanhar coração, tireoide, visão e audição com exames regulares, além de estimular desde cedo com fisio, fono e terapia ocupacional. O pediatra organiza esse acompanhamento." },
    { id: "pc", tema: "condicoes", perguntas: ["paralisia cerebral", "meu filho tem pc", "cuidados na paralisia cerebral"],
      resposta: "Na paralisia cerebral, a fisioterapia e a terapia ocupacional ajudam no movimento, na postura e na independência. Fique atenta a engasgos, prisão de ventre e dor, que são comuns. Cada pessoa é diferente, e a equipe monta o plano." },
    { id: "deficiencia-visual", tema: "condicoes", perguntas: ["meu filho é cego", "baixa visão", "deficiência visual como ajudar", "estimulação visual"],
      resposta: "Organize a casa sempre do mesmo jeito e avise quando mudar algo de lugar. Descreva o que acontece ao redor e use o toque e o som para explorar. Peça encaminhamento para estimulação visual e orientação e mobilidade. A escola deve oferecer material em braile ou ampliado." },
    { id: "deficiencia-auditiva", tema: "condicoes", perguntas: ["meu filho é surdo", "deficiência auditiva", "aparelho auditivo pelo sus", "implante coclear"],
      resposta: "O SUS oferece avaliação, aparelho auditivo e, em alguns casos, implante coclear. Peça encaminhamento na unidade de saúde. Em casa, fale de frente, com boa luz no rosto. Libras desde cedo ajuda muito no desenvolvimento.",
      sugestoes: ["Onde aprender Libras?"] },
    { id: "intelectual", tema: "condicoes", perguntas: ["deficiência intelectual", "aprende mais devagar", "atraso no desenvolvimento", "dificuldade para aprender"],
      resposta: "Ensine uma coisa de cada vez, com passos curtos, imagens e repetição. Elogie o esforço. Deixe a pessoa fazer o que consegue sozinha, mesmo que demore. Terapia ocupacional e fono ajudam, e a escola deve adaptar as atividades." },

    /* ---------- Escola e direitos ---------- */
    { id: "escola-acompanhante", tema: "escola", perguntas: ["meu filho tem direito a acompanhante na escola", "mediador escolar", "cuidador na escola", "a escola não aceita meu filho"],
      resposta: "A escola, pública ou particular, não pode recusar matrícula por causa da deficiência nem cobrar a mais. Quando há necessidade, o estudante tem direito a apoio na sala e ao Atendimento Educacional Especializado (AEE). Converse com a escola e, se não resolver, procure a secretaria de educação ou o Ministério Público." },
    { id: "bpc", tema: "direitos", perguntas: ["como pedir o bpc", "benefício para pessoa com deficiência", "loas", "tenho direito a algum benefício"],
      resposta: "O BPC é um salário mínimo por mês para pessoa com deficiência de família com baixa renda. É preciso estar no CadÚnico. O pedido é feito pelo INSS (telefone 135 ou aplicativo Meu INSS), e o CRAS da sua cidade ajuda com o cadastro e os documentos." },
    { id: "ciptea", tema: "direitos", perguntas: ["carteirinha do autismo", "ciptea", "como tirar a carteira do autista", "carteira de identificação tea"],
      resposta: "A CIPTEA é a carteira de identificação da pessoa com autismo e garante atendimento prioritário. É emitida pelo estado ou pelo município, geralmente com laudo e documentos. Pergunte no CRAS ou na secretaria de assistência social." },
    { id: "passe-livre", tema: "direitos", perguntas: ["passe livre", "ônibus de graça para deficiente", "gratuidade no transporte", "acompanhante no ônibus"],
      resposta: "Há passe livre interestadual para pessoa com deficiência de baixa renda e, em muitas cidades, gratuidade no ônibus municipal, às vezes com acompanhante. As regras mudam por cidade: pergunte no CRAS ou na empresa de transporte." },
    { id: "cras", tema: "direitos", perguntas: ["o que é cras", "onde fica o cras", "assistente social", "cadúnico"],
      resposta: "O CRAS é o Centro de Referência de Assistência Social da sua cidade. Lá você faz o CadÚnico e recebe orientação sobre benefícios, documentos e serviços. Procure o mais perto da sua casa, levando documento com foto e comprovante de endereço." },
    { id: "trabalho-pcd", tema: "direitos", perguntas: ["vagas de emprego para pcd", "trabalhar sendo pessoa com deficiência", "lei de cotas", "sou pcd e quero trabalhar"],
      resposta: "Empresas com 100 ou mais funcionários precisam reservar vagas para pessoas com deficiência. O SINE e sites de vagas têm filtros para PcD. Ter o laudo atualizado ajuda na contratação." },


    /* ---------- Mais situações do dia a dia ---------- */
    { id: "cama-pais", tema: "sono", perguntas: ["só dorme na minha cama", "dorme com os pais", "como fazer dormir no próprio quarto", "não dorme sozinho"],
      resposta: "Faça a mudança aos poucos: primeiro fique sentada ao lado da cama dele até dormir, depois na porta, depois fora do quarto, uma etapa por semana. Mantenha a mesma rotina da noite e um objeto que acalma, como uma manta." },
    { id: "passeio", tema: "rotina", perguntas: ["como sair para passear", "levar para festa de aniversário", "viagem com criança com deficiência", "ir à praia com ele", "sair de casa é difícil"],
      resposta: "Antecipe: mostre fotos do lugar e conte o que vai acontecer. Leve um kit com água, lanche, fone abafador e um objeto preferido. Chegue mais cedo, quando há menos gente, e combine um sinal para ir embora antes de virar crise." },
    { id: "medico-dentista-medo", tema: "comportamento", perguntas: ["tem medo de médico", "chora na consulta", "não deixa o médico examinar", "pânico de agulha", "exame de sangue é difícil"],
      resposta: "Prepare com antecedência: brinque de médico em casa, mostre fotos do lugar e conte o passo a passo. Peça para ser o primeiro horário, quando a espera é menor. Avise a equipe sobre a sensibilidade da pessoa: muitos serviços adaptam o atendimento." },
    { id: "oculos", tema: "corpo", perguntas: ["não aceita usar óculos", "tira o aparelho auditivo", "não quer usar a órtese", "tira a tala"],
      resposta: "Comece com pouco tempo de uso, em momentos agradáveis, como ver um desenho ou brincar, e aumente aos poucos. Confira se não está apertando ou machucando. Se continuar recusando, fale com quem indicou: às vezes é preciso ajustar." },
    { id: "sapato-pe", tema: "corpo", perguntas: ["anda na ponta dos pés", "pé torto", "sapato ortopédico", "anda diferente"],
      resposta: "Andar na ponta dos pés depois dos 3 anos ou mudanças no jeito de andar merecem avaliação com fisioterapeuta e médico. Eles dizem se é preciso alongamento, órtese ou outro cuidado.",
      links: ["atendimentos"] },
    { id: "baba", tema: "corpo", perguntas: ["baba muito", "saliva escorrendo", "excesso de baba", "boca sempre molhada"],
      resposta: "Babar muito é comum em algumas condições, como a paralisia cerebral. Fono e terapia ocupacional trabalham a força e o controle da boca. Mantenha a pele do queixo seca para não assar. O médico avalia se há outros tratamentos." },
    { id: "peso", tema: "alimentacao", perguntas: ["está acima do peso", "engordou muito", "obesidade", "come demais"],
      resposta: "Evite deixar doces e salgadinhos à vista e ofereça porções em pratos menores, nos mesmos horários. Movimento todos os dias, do jeito que a pessoa consegue, ajuda. Alguns remédios aumentam o apetite: vale conversar com o médico e com um nutricionista.",
      links: ["atendimentos"] },
    { id: "agua", tema: "alimentacao", perguntas: ["não bebe água", "bebe pouca água", "como fazer beber mais água", "desidratação"],
      resposta: "Deixe uma garrafa à vista e ofereça a cada hora, em pequenos goles. Copos coloridos, canudo e frutas com bastante água, como melancia e laranja, ajudam. Boca seca, xixi escuro ou pouco xixi são sinais de que falta água." },
    { id: "fuga", tema: "seguranca", perguntas: ["ele foge de casa", "sai correndo na rua", "tenho medo que ele se perca", "some no shopping"],
      resposta: "Em casa, use trancas altas ou alarmes simples na porta. Na rua, roupa de cor forte ajuda a achar rápido, e uma pulseira ou etiqueta com seu telefone dá segurança. Ensine a parar com um sinal combinado e treine em lugares calmos." },
    { id: "seguranca-casa", tema: "seguranca", perguntas: ["como deixar a casa segura", "ele mexe em tudo", "produto de limpeza perigoso", "tomada e quina"],
      resposta: "Guarde remédios e produtos de limpeza no alto e trancados. Use protetor de tomada e de quina, e prenda móveis que podem tombar. Em casa com piscina, cerca e supervisão o tempo todo." },
    { id: "brincar", tema: "rotina", perguntas: ["como brincar com ele", "ele não brinca", "brincadeiras para estimular", "o que fazer em casa com ele"],
      resposta: "Brinque do que ele gosta, mesmo que pareça repetitivo, e entre na brincadeira aos poucos. Brincadeiras com água, massinha, bolhas de sabão e música costumam funcionar. Dez minutos com sua atenção inteira valem mais do que uma hora distraída." },
    { id: "luto", tema: "cuidador", perguntas: ["sinto que perdi o filho que imaginei", "luto pelo diagnóstico", "não aceito o diagnóstico", "é difícil aceitar"],
      resposta: "Muitas famílias sentem um luto pelo filho que imaginaram, e isso não diminui o amor pelo filho que têm. Esse sentimento vai e volta. Conversar com quem passou por isso, no Fórum, ou com uma psicóloga ajuda a atravessar.",
      links: ["forum", "atendimentos"] },
    { id: "julgamento", tema: "cuidador", perguntas: ["as pessoas me julgam", "olhares na rua", "a família critica como eu cuido", "comentários que machucam"],
      resposta: "Você conhece seu filho melhor do que quem olha de fora. Uma frase curta pronta ajuda, como: 'ele tem autismo, está tudo bem, obrigada'. Com a família, convide para participar de uma consulta ou terapia: ver de perto costuma mudar o olhar." },
    { id: "trabalho-cuidador", tema: "cuidador", perguntas: ["parei de trabalhar para cuidar", "como conciliar trabalho e cuidado", "perdi o emprego por faltar", "trabalho e terapias"],
      resposta: "É uma das maiores dificuldades de quem cuida. Converse com o trabalho sobre horários flexíveis. Algumas leis garantem horário especial para servidor público que cuida de pessoa com deficiência. No CRAS você recebe orientação sobre benefícios e rede de apoio." },
    { id: "curatela", tema: "direitos", perguntas: ["o que é curatela", "interdição", "meu filho fez 18 anos", "maioridade da pessoa com deficiência"],
      resposta: "Aos 18 anos, a pessoa com deficiência passa a ter os mesmos direitos civis de qualquer adulto. A curatela é um apoio decidido pela Justiça, só para atos de dinheiro e patrimônio, e só quando necessário. A Defensoria Pública orienta de graça." },
    { id: "atividade-fisica", tema: "corpo", perguntas: ["esporte para pessoa com deficiência", "natação", "atividade física adaptada", "equoterapia"],
      resposta: "Atividade física faz bem ao corpo, ao sono e ao humor. Natação, dança, futebol adaptado e equoterapia são opções. Muitas prefeituras, universidades e associações têm projetos gratuitos. Peça liberação do médico antes de começar." },

    /* ---------- Quem cuida ---------- */
    { id: "cansaco", tema: "cuidador", perguntas: ["estou sem energia hoje", "estou muito cansada", "não aguento mais", "estou exausta", "estou esgotado de cuidar"],
      resposta: "Cuidar o tempo todo cansa mesmo, e faz sentido você estar assim. Teve algum momento hoje só para você, nem que seja curto? Se quiser, escreva o que está pesando mais. Se o cansaço dura semanas, conversar com uma psicóloga ajuda.",
      links: ["atendimentos"], sugestoes: ["Como conseguir uma pausa?", "Só quero conversar"] },
    { id: "pausa", tema: "cuidador", perguntas: ["como conseguir uma pausa", "não tenho tempo para mim", "preciso descansar", "ninguém me ajuda a cuidar"],
      resposta: "Comece pequeno: dez minutos sem tela, um café sentada, uma volta no quarteirão. Combine com alguém da família um horário fixo por semana: dizer o horário pesa menos do que pedir ajuda toda vez. No Fórum, outras famílias contam o que funciona para elas.",
      links: ["forum", "dicas"] },
    { id: "triste", tema: "cuidador", perguntas: ["estou triste", "choro todo dia", "me sinto deprimida", "estou pra baixo", "não tenho vontade de nada"],
      resposta: "Sinto muito que esteja tão pesado. Chorar também alivia, e você não precisa dar conta de tudo. Se a tristeza dura mais de duas semanas ou tira a vontade de fazer as coisas, procure apoio: há psicólogas voluntárias em Atendimentos, e o CVV atende no 188, 24 horas.",
      links: ["atendimentos", "ajuda"] },
    { id: "sozinha", tema: "cuidador", perguntas: ["me sinto sozinha", "ninguém entende o que eu passo", "não tenho com quem conversar", "me sinto isolada"],
      resposta: "Você não está só. No Fórum há famílias que vivem coisas parecidas e respondem com o que funcionou para elas. E eu estou aqui para conversar quando quiser.",
      links: ["forum"] },
    { id: "culpa", tema: "cuidador", perguntas: ["me sinto culpada", "acho que a culpa é minha", "sou uma mãe ruim", "estou falhando com meu filho"],
      resposta: "Culpa aparece muito em quem cuida, e quase sempre é injusta. A deficiência não é culpa de ninguém. Errar faz parte de cuidar de alguém por tanto tempo. O fato de você se preocupar mostra o quanto se importa." },
    { id: "raiva", tema: "cuidador", perguntas: ["estou com raiva", "estou muito irritada", "perdi a paciência com ele", "gritei com meu filho"],
      resposta: "Raiva também faz parte de cuidar e não faz de você uma pessoa pior. Quando sentir que vai explodir, se der, saia do cômodo por um minuto e respire devagar. Depois, se precisar, peça desculpa: isso também ensina." },
    { id: "medo-futuro", tema: "cuidador", perguntas: ["tenho medo do futuro", "quem vai cuidar dele quando eu não estiver", "estou preocupada com o futuro", "e quando eu morrer"],
      resposta: "Esse medo é muito comum e muito real. Ajuda trazer para o presente em passos pequenos: envolver outras pessoas da família no cuidado, buscar autonomia possível para a pessoa e se informar sobre direitos e curatela. Conversar com uma psicóloga ajuda a carregar esse peso.",
      links: ["atendimentos"] },
    { id: "irmaos", tema: "cuidador", perguntas: ["o irmão sente ciúmes", "dou pouca atenção ao outro filho", "como explicar para o irmão", "irmãos de criança com deficiência"],
      resposta: "Reserve um tempo só com o outro filho, mesmo que curto, toda semana. Explique a deficiência com palavras simples e deixe ele perguntar e sentir o que sente, inclusive raiva ou ciúme. Dê tarefas pequenas de ajuda, mas sem transformar ele em cuidador." },
    { id: "casal", tema: "cuidador", perguntas: ["meu casamento está difícil", "brigas com meu marido", "o pai não ajuda", "dividir o cuidado com o parceiro"],
      resposta: "Cuidar sobrecarrega a relação. Ajuda dividir tarefas por escrito, com dias e horários, e reservar um tempo, mesmo curto, para o casal. Terapia de casal ou familiar também é um caminho." },
    { id: "pcd-autonomia", tema: "pcd", perguntas: ["sou pcd e quero mais autonomia", "quero fazer as coisas sozinho", "minha família me superprotege", "independência"],
      resposta: "Combine com a família uma coisa por vez que você quer fazer sozinho e quais apoios precisa. Um terapeuta ocupacional ajuda a adaptar a casa e as tarefas. No Fórum, outras pessoas com deficiência contam como conquistaram mais autonomia.",
      links: ["atendimentos", "forum"] },
    { id: "pcd-saude-mental", tema: "pcd", perguntas: ["sou pcd e estou ansioso", "tenho deficiência e me sinto mal", "preconceito me deixa triste", "sofri capacitismo"],
      resposta: "O que você sente importa. Preconceito machuca, e não é culpa sua. Conversar com um psicólogo que entende de deficiência ajuda. Em Atendimentos há psicólogos que acompanham jovens e adultos com deficiência.",
      links: ["atendimentos"] },
    { id: "so-conversar", tema: "conversa", perguntas: ["só quero conversar", "quero desabafar", "preciso falar com alguém", "posso conversar com você"],
      resposta: "Estou aqui. Pode escrever do seu jeito, sem pressa. O que pesou mais hoje?" },
    { id: "pedir-profissional", tema: "app", perguntas: ["quero falar com um profissional", "preciso de um psicólogo", "quero falar com um especialista", "tem fono disponível"],
      resposta: "Em Atendimentos você vê quem está online agora, escolhe o profissional e marca o horário, de graça. Os profissionais são voluntários verificados.",
      links: ["atendimentos"], sugestoes: ["Como marcar uma consulta?", "A consulta é online ou presencial?"] },
  ];
  zAna.preparar(zAnaBase, zAnaSinonimos);
  var P = N(yt()),
    OS = {
      conversa: Qu,
      forum: Ju,
      ajuda: ym,
      perfil: gm,
      busca: rm,
      enviar: mm,
      voltar: Zu,
      avancar: Xu,
      fechar: bm,
      confirmar: $u,
      atencao: Cm,
      informacao: tm,
      adicionar: Im,
      apoio: om,
      telefone: pm,
      local: cm,
      elo: lm,
    };
  function zIc(paths) {
    return function ({ size: s = 24, className: c }) {
      return (0, P.jsx)("svg", {
        className: c,
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.9,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        focusable: "false",
        dangerouslySetInnerHTML: { __html: paths },
      });
    };
  }
  Object.assign(OS, {
    casa: zIc('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>'),
    calendario: zIc('<rect x="3" y="4.5" width="18" height="16.5" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>'),
    dica: zIc('<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>'),
    cadeado: zIc('<rect x="4.5" y="10.5" width="15" height="10.5" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>'),
    video: zIc('<rect x="2.5" y="6" width="13" height="12" rx="2"/><path d="m15.5 10.5 6-3.5v10l-6-3.5"/>'),
    mensagem: zIc('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5A8 8 0 1 1 21 12z"/>'),
  });
  function la({ n: a, size: o = 24 }) {
    let e = OS[a];
    return (0, P.jsx)(e, {
      className: "ic",
      size: o,
      weight: "regular",
      "aria-hidden": "true",
      focusable: "false",
    });
  }
  function ia({
    children: a,
    sec: o,
    peq: e,
    icone: t,
    fim: n,
    className: l = "",
    ...s
  }) {
    let i = ["btn", o ? "btn--sec" : "", e ? "btn--peq" : "", l]
      .filter(Boolean)
      .join(" ");
    return (0, P.jsxs)("button", {
      type: "button",
      className: i,
      ...s,
      children: [
        t && (0, P.jsx)(la, { n: t, size: e ? 20 : 24 }),
        a,
        n && (0, P.jsx)(la, { n, size: e ? 20 : 24 }),
      ],
    });
  }
  function Ye({ onClick: a, children: o = "Voltar" }) {
    return (0, P.jsxs)("button", {
      type: "button",
      className: "link-voltar",
      onClick: a,
      children: [(0, P.jsx)(la, { n: "voltar", size: 22 }), o],
    });
  }
  function Do({ tipo: a = "info", palavra: o, children: e, ...t }) {
    let n = {
        info: ["informacao", "Informa\xE7\xE3o:"],
        ok: ["confirmar", "Confirmado:"],
        aviso: ["atencao", "Aten\xE7\xE3o:"],
        erro: ["fechar", "Erro:"],
      },
      [l, s] = n[a];
    return (0, P.jsxs)("div", {
      className: `alerta alerta--${a}`,
      role: a === "erro" ? "alert" : "status",
      ...t,
      children: [
        (0, P.jsx)(la, { n: l, size: 24 }),
        (0, P.jsxs)("p", {
          children: [(0, P.jsx)("b", { children: o || s }), " ", e],
        }),
      ],
    });
  }
  function Bo({ children: a, forte: o, icone: e }) {
    return (0, P.jsxs)("span", {
      className: `etiqueta${o ? " etiqueta--forte" : ""}`,
      children: [e && (0, P.jsx)(la, { n: e, size: 16 }), a],
    });
  }
  var Za = L2.default.forwardRef(function (
    {
      id: o,
      rotulo: e,
      ajuda: t,
      erro: n,
      como: l = "input",
      tipo: s = "text",
      children: i,
      ...c
    },
    m,
  ) {
    let I = l,
      f =
        [t ? `${o}-ajuda` : null, n ? `${o}-erro` : null]
          .filter(Boolean)
          .join(" ") || void 0,
      u = (0, P.jsx)(I, {
        ref: m,
        id: o,
        className: "campo-entrada",
        "aria-invalid": n ? "true" : void 0,
        "aria-describedby": f,
        ...(l === "input" ? { type: s } : {}),
        ...c,
        children: i,
      });
    return (0, P.jsxs)("div", {
      className: "campo",
      "data-erro": n ? "true" : "false",
      children: [
        (0, P.jsx)("label", {
          className: "campo-rotulo",
          htmlFor: o,
          children: e,
        }),
        t &&
          (0, P.jsx)("span", {
            id: `${o}-ajuda`,
            className: "campo-ajuda apoio",
            children: t,
          }),
        l === "select"
          ? (0, P.jsxs)("div", {
              className: "campo-seletor",
              children: [u, (0, P.jsx)(la, { n: "avancar", size: 20 })],
            })
          : u,
        n &&
          (0, P.jsxs)("p", {
            id: `${o}-erro`,
            className: "erro-msg",
            role: "alert",
            children: [
              (0, P.jsx)(la, { n: "atencao", size: 20 }),
              (0, P.jsx)("span", { children: n }),
            ],
          }),
      ],
    });
  });
  function Tm({ itens: a, valor: o, onChange: e, multi: t, rotulo: n }) {
    let l = (s) => (t ? o.includes(s) : o === s);
    return (0, P.jsx)("div", {
      className: "opcoes",
      role: t ? "group" : "radiogroup",
      "aria-label": n,
      children: a.map((s) => {
        let i = l(s.id);
        return (0, P.jsxs)(
          "button",
          {
            type: "button",
            className: "opcao",
            onClick: () => e(s.id),
            ...(t
              ? { "aria-pressed": i }
              : { role: "radio", "aria-checked": i }),
            children: [
              (0, P.jsxs)("span", {
                children: [
                  s.rotulo,
                  s.sub &&
                    (0, P.jsx)("span", {
                      className: "opcao-sub",
                      children: s.sub,
                    }),
                ],
              }),
              i
                ? (0, P.jsxs)("span", {
                    className: "opcao-estado",
                    children: [
                      (0, P.jsx)(la, { n: "confirmar", size: 22 }),
                      "Escolhido",
                    ],
                  })
                : (0, P.jsx)("span", {
                    className: `opcao-vazio${t ? " opcao-vazio--q" : ""}`,
                    "aria-hidden": "true",
                  }),
            ],
          },
          s.id,
        );
      }),
    });
  }
  function Or() {
    requestAnimationFrame(() => {
      document
        .querySelector(
          'main [aria-invalid="true"], main [data-erro="true"] button',
        )
        ?.focus();
    });
  }
  var Em = [
      { id: "fisica", rotulo: "Defici\xEAncia f\xEDsica" },
      { id: "intelectual", rotulo: "Defici\xEAncia intelectual" },
      { id: "visual", rotulo: "Defici\xEAncia visual" },
      { id: "auditiva", rotulo: "Defici\xEAncia auditiva" },
      { id: "tea", rotulo: "Transtorno do espectro autista (TEA)" },
      { id: "nao-sei", rotulo: "Ainda n\xE3o sei" },
    ],
    El = [
      {
        id: "terapias",
        rotulo: "Terapias e reabilita\xE7\xE3o",
        sub: "Terapia ocupacional, fisioterapia, fonoaudiologia",
      },
      {
        id: "emocional",
        rotulo: "Sa\xFAde emocional",
        sub: "Ansiedade, crises e mudan\xE7as de comportamento",
      },
      {
        id: "rotina",
        rotulo: "Sono, alimenta\xE7\xE3o e rotina",
        sub: "Noites, refei\xE7\xF5es e manh\xE3s",
      },
      {
        id: "comunicacao",
        rotulo: "Comunica\xE7\xE3o e fala",
        sub: "Entender e ser entendido",
      },
      {
        id: "mobilidade",
        rotulo: "Movimento e dor",
        sub: "Postura, mobilidade e desconforto",
      },
      {
        id: "cuidador",
        rotulo: "Sa\xFAde de quem cuida",
        sub: "Cansa\xE7o, pausas e apoio",
      },
    ],
    Lm = [
      { id: "mobilidade", rotulo: "Usa cadeira de rodas ou andador" },
      { id: "fala", rotulo: "N\xE3o fala ou fala pouco" },
      { id: "sensorial", rotulo: "\xC9 sens\xEDvel a barulho, luz ou toque" },
      { id: "crises", rotulo: "Tem crises de comportamento (choro forte, agita\xE7\xE3o, agressividade)" },
      { id: "convulsoes", rotulo: "Tem convuls\xF5es (crises epil\xE9pticas)" },
      { id: "engolir", rotulo: "Tem dificuldade para engolir ou engasga" },
      { id: "remedio", rotulo: "Toma rem\xE9dio todos os dias" },
      { id: "sono", rotulo: "Dorme poucas horas" },
      { id: "nenhuma", rotulo: "Nenhuma dessas" },
    ],
    wm = [
      {
        id: "responsavel",
        rotulo: "Eu sou o respons\xE1vel",
        sub: "Cuido de uma pessoa com defici\xEAncia.",
      },
      {
        id: "pcd",
        rotulo: "Eu sou a pessoa com defici\xEAncia",
        sub: "Uso o zElo por conta pr\xF3pria.",
      },
    ],
    w2 = Object.fromEntries(El.map((a) => [a.id, a.rotulo])),
    N2 = {
      terapias: "Terapias",
      emocional: "Emocional",
      rotina: "Rotina",
      comunicacao: "Comunica\xE7\xE3o",
      mobilidade: "Movimento",
      cuidador: "Cuidador",
    },
    Nm = [
      {
        id: "t6",
        titulo: "Crises de choro no fim da tarde: como voc\xEAs lidam?",
        autor: "Eduarda",
        cidade: "Recife",
        quando: "h\xE1 30 minutos",
        etiquetas: ["Novo", "Emocional", "D\xFAvida"],
        dir: "emocional",
        apoio: 6,
        ajudou: 1,
        corpo:
          "Minha filha tem 7 anos e tem TEA. Quase todo dia, perto das cinco da tarde, ela entra em crise: chora alto, se joga no ch\xE3o e n\xE3o aceita colo. Eu fico perdida e acabo chorando junto. Algu\xE9m passa por isso? O que ajuda na hora?",
        respostas: [
          {
            id: "r1",
            autor: "Marina",
            cidade: "Recife",
            quando: "h\xE1 20 minutos",
            apoio: 4,
            texto:
              "Aqui era na volta da escola. Ajudou deixar um cantinho quieto pronto, com a manta e os fones dela, e falar pouco na hora.",
          },
          {
            id: "r2",
            autor: "Dra. Beatriz Nogueira",
            cidade: "Recife",
            quando: "h\xE1 10 minutos",
            apoio: 8,
            profissional: !0,
            texto:
              "Como psic\xF3loga, sugiro observar o que vem antes: fome, cansa\xE7o, barulho, mudan\xE7a de atividade. Na hora, menos palavras e um lugar calmo. E voc\xEA tamb\xE9m merece apoio: se quiser, marque uma conversa em Atendimentos.",
          },
        ],
      },
      {
        id: "t7",
        titulo: "Meu filho n\xE3o fala: algu\xE9m usa pranchas com figuras?",
        autor: "Rog\xE9rio",
        cidade: "Camaragibe",
        quando: "h\xE1 2 dias",
        etiquetas: ["Comunica\xE7\xE3o", "D\xFAvida"],
        dir: "comunicacao",
        apoio: 5,
        ajudou: 2,
        corpo:
          "Ele tem 5 anos e se comunica apontando e puxando a gente pela m\xE3o. A fono falou em prancha de comunica\xE7\xE3o. Algu\xE9m j\xE1 usa em casa? Como come\xE7ou?",
        respostas: [
          {
            id: "r1",
            autor: "Carla",
            cidade: "Jaboat\xE3o",
            quando: "h\xE1 2 dias",
            apoio: 3,
            texto:
              "Come\xE7amos com quatro fotos: \xE1gua, comida, banheiro e brincar. Colamos na geladeira. Em um m\xEAs ele j\xE1 apontava sozinho.",
          },
        ],
      },
      {
        id: "t1",
        titulo: "Meu filho dorme pouco: o que funcionou a\xED?",
        autor: "Marina",
        cidade: "Recife",
        quando: "h\xE1 2 horas",
        etiquetas: ["Novo", "Rotina", "D\xFAvida"],
        dir: "rotina",
        apoio: 9,
        ajudou: 2,
        corpo:
          "Meu filho tem 9 anos e tem paralisia cerebral. H\xE1 tr\xEAs semanas ele acorda v\xE1rias vezes de madrugada e passa o dia irritado. J\xE1 diminu\xED a luz do quarto, mas n\xE3o mudou. Algu\xE9m passou por isso? O que ajudou?",
        respostas: [
          {
            id: "r1",
            autor: "Josenildo",
            cidade: "Olinda",
            quando: "h\xE1 1 hora",
            apoio: 5,
            texto:
              "Aqui ajudou manter o mesmo hor\xE1rio todos os dias, inclusive no fim de semana. Levou umas duas semanas para notar diferen\xE7a.",
          },
          {
            id: "r2",
            autor: "Carla",
            cidade: "Jaboat\xE3o",
            quando: "h\xE1 1 hora",
            apoio: 3,
            texto:
              "Tirei a tela uma hora antes de dormir e coloquei uma m\xFAsica baixa, sempre a mesma.",
          },
          {
            id: "r3",
            autor: "Ana Paula",
            cidade: "Paulista",
            quando: "h\xE1 40 minutos",
            apoio: 7,
            texto:
              "Vale levar ao m\xE9dico que acompanha. Aqui o sono ruim vinha de um desconforto que a gente n\xE3o via.",
          },
          {
            id: "r4",
            autor: "Dra. Beatriz Nogueira",
            cidade: "Recife",
            quando: "h\xE1 20 minutos",
            apoio: 6,
            profissional: !0,
            texto:
              "Como psic\xF3loga, sugiro anotar por duas semanas a hora de dormir, os despertares e o que aconteceu antes. Esse registro ajuda muito numa consulta. Se o sono n\xE3o melhorar, procure atendimento.",
          },
        ],
      },
      {
        id: "t2",
        titulo: "Terapeuta ocupacional pelo SUS: quanto tempo?",
        autor: "Josenildo",
        cidade: "Olinda",
        quando: "ontem",
        etiquetas: ["Sa\xFAde", "D\xFAvida"],
        dir: "terapias",
        apoio: 4,
        ajudou: 0,
        corpo:
          "Recebi o encaminhamento da unidade de sa\xFAde h\xE1 dois meses e ainda n\xE3o fui chamado. Algu\xE9m sabe se \xE9 normal esperar tanto? Enquanto isso, o que d\xE1 para fazer em casa?",
        respostas: [
          {
            id: "r1",
            autor: "Marina",
            cidade: "Recife",
            quando: "ontem",
            apoio: 2,
            texto:
              "Aqui na minha regi\xE3o tamb\xE9m foram uns tr\xEAs meses. Pergunte na unidade em que posi\xE7\xE3o voc\xEA est\xE1 na fila.",
          },
          {
            id: "r2",
            autor: "Eduarda",
            cidade: "Recife",
            quando: "ontem",
            apoio: 4,
            texto:
              "D\xE1 para ligar na unidade e pedir o andamento. Tenha em m\xE3os o n\xFAmero do encaminhamento.",
          },
          {
            id: "r3",
            autor: "Dra. Helena Cavalcanti",
            cidade: "Recife",
            quando: "h\xE1 8 horas",
            apoio: 6,
            profissional: !0,
            texto:
              "Como terapeuta ocupacional, posso orientar algumas atividades de rotina para fazer em casa enquanto voc\xEA espera. Veja meus hor\xE1rios em Atendimentos.",
          },
        ],
      },
      {
        id: "t3",
        titulo: "Rotina de manh\xE3 que funcionou aqui em casa",
        autor: "Carla",
        cidade: "Jaboat\xE3o",
        quando: "h\xE1 3 dias",
        etiquetas: ["Resolvido", "Experi\xEAncia"],
        dir: "rotina",
        apoio: 12,
        ajudou: 5,
        resolvido: !0,
        corpo:
          "As manh\xE3s eram a parte mais dif\xEDcil. O que ajudou: separar a roupa na noite anterior, uma sequ\xEAncia de tr\xEAs fotos do que vem depois do caf\xE9 e dez minutos de sil\xEAncio antes de sair. N\xE3o resolve tudo, mas o clima em casa mudou.",
        respostas: [
          {
            id: "r1",
            autor: "Marina",
            cidade: "Recife",
            quando: "h\xE1 2 dias",
            apoio: 2,
            texto:
              "Vou testar as tr\xEAs fotos amanh\xE3. Obrigada por detalhar.",
          },
        ],
      },
      {
        id: "t4",
        titulo: "Engasga com l\xEDquidos: j\xE1 passaram por isso?",
        autor: "Rog\xE9rio",
        cidade: "Camaragibe",
        quando: "h\xE1 5 dias",
        etiquetas: ["Sa\xFAde", "D\xFAvida"],
        dir: "terapias",
        apoio: 3,
        ajudou: 0,
        corpo:
          "Meu filho engasga com \xE1gua e suco quase toda refei\xE7\xE3o. A gente engrossa um pouco o l\xEDquido, mas fico com medo. Algu\xE9m j\xE1 fez avalia\xE7\xE3o com fonoaudi\xF3logo?",
        respostas: [
          {
            id: "r1",
            autor: "Carla",
            cidade: "Jaboat\xE3o",
            quando: "h\xE1 4 dias",
            apoio: 4,
            texto:
              "Aqui fizemos a avalia\xE7\xE3o e mudou a forma de oferecer. Vale marcar logo.",
          },
          {
            id: "r2",
            autor: "Dr. Rafael Tavares",
            cidade: "Recife",
            quando: "h\xE1 4 dias",
            apoio: 9,
            profissional: !0,
            texto:
              "Engasgos frequentes pedem avalia\xE7\xE3o de um fonoaudi\xF3logo. At\xE9 l\xE1, ofere\xE7a com a pessoa sentada, de costas retas, em pequenas por\xE7\xF5es. Se houver tosse com febre, procure atendimento m\xE9dico.",
          },
        ],
      },
      {
        id: "t5",
        titulo: "Quem cuida tamb\xE9m precisa de pausa: o que voc\xEAs fazem?",
        autor: "Ana Paula",
        cidade: "Paulista",
        quando: "h\xE1 1 semana",
        etiquetas: ["Cuidador", "Experi\xEAncia"],
        dir: "cuidador",
        apoio: 15,
        ajudou: 3,
        corpo:
          "Faz meses que n\xE3o tenho uma tarde s\xF3 para mim. Queria ouvir o que funciona para voc\xEAs, mesmo que seja pouco: meia hora, uma caminhada, uma liga\xE7\xE3o.",
        respostas: [
          {
            id: "r1",
            autor: "Eduarda",
            cidade: "Recife",
            quando: "h\xE1 6 dias",
            apoio: 5,
            texto:
              "Combinei com minha irm\xE3 uma hora fixa por semana. Pequeno, mas \xE9 meu.",
          },
        ],
      },
    ],
    Rr = [
      "Fisioterapia",
      "Fonoaudiologia",
      "Nutri\xE7\xE3o",
      "Psicologia",
      "Terapia ocupacional",
      "Enfermagem",
    ],
    zr = [
      {
        id: "d8",
        titulo: "Quando vem uma crise de comportamento",
        autor: "Dra. Beatriz Nogueira",
        area: "Psicologia",
        tempo: "1 min",
        dir: "emocional",
        secoes: [
          [
            "Antes: repare no que vem antes",
            "Fome, sono, barulho, troca de atividade. Anotar por uma semana ajuda a ver o padr\xE3o e a se antecipar.",
          ],
          [
            "Durante: menos palavras, mais calma",
            "Fale pouco e devagar. Leve a pessoa para um lugar quieto e tire o que pode machucar. N\xE3o \xE9 hora de ensinar nem de brigar.",
          ],
          [
            "Depois: cuide de voc\xEA tamb\xE9m",
            "Respire, beba \xE1gua, pe\xE7a ajuda a algu\xE9m. Se as crises aumentarem, converse com um profissional em Atendimentos.",
          ],
        ],
      },
      {
        id: "d9",
        titulo: "Pranchas com figuras para se comunicar",
        autor: "Dr. Rafael Tavares",
        area: "Fonoaudiologia",
        tempo: "1 min",
        dir: "comunicacao",
        secoes: [
          [
            "Comece com poucas figuras",
            "Quatro ou cinco fotos do que a pessoa mais pede: \xE1gua, comida, banheiro, brincar. Deixe num lugar f\xE1cil de ver.",
          ],
          [
            "Use voc\xEA tamb\xE9m",
            "Aponte a figura enquanto fala a palavra. A pessoa aprende vendo voc\xEA usar.",
          ],
          [
            "Responda sempre",
            "Quando ela apontar, atenda logo. Assim ela entende que a prancha funciona.",
          ],
        ],
      },
      {
        id: "d1",
        titulo: "Como se preparar para uma consulta",
        autor: "Dra. Elisa Duarte",
        area: "Enfermagem",
        tempo: "1 min",
        dir: "terapias",
        secoes: [
          [
            "Anote antes",
            "Escreva o que mudou nas \xFAltimas semanas: sono, apetite, humor e crises. Datas ajudam o profissional a entender o quadro.",
          ],
          [
            "Leve a lista de rem\xE9dios",
            "Nome, dose e hor\xE1rio de cada um. Se puder, leve as caixas.",
          ],
          [
            "Fa\xE7a uma pergunta de cada vez",
            "Leve at\xE9 tr\xEAs d\xFAvidas. Pe\xE7a que repitam o que n\xE3o ficou claro e anote as respostas.",
          ],
        ],
      },
      {
        id: "d2",
        titulo: "Rotina visual para as manh\xE3s",
        autor: "Dra. Helena Cavalcanti",
        area: "Terapia ocupacional",
        tempo: "1 min",
        dir: "rotina",
        secoes: [
          [
            "Mostre o que vem depois",
            "Use tr\xEAs ou quatro fotos ou desenhos simples na ordem das tarefas: levantar, trocar de roupa, tomar caf\xE9, sair. A pessoa olha e sabe o que vem.",
          ],
          [
            "Prepare na noite anterior",
            "Separe a roupa e a mochila antes de dormir. Menos decis\xF5es de manh\xE3 deixam todo mundo com mais calma.",
          ],
          [
            "Avise antes de mudar",
            "Se o plano mudar, avise antes e mostre o que muda. Mudan\xE7a sem aviso costuma pesar mais.",
          ],
        ],
      },
      {
        id: "d3",
        titulo: "Jogos de fala para fazer na cozinha",
        autor: "Dr. Rafael Tavares",
        area: "Fonoaudiologia",
        tempo: "1 min",
        dir: "comunicacao",
        secoes: [
          [
            "Nomeie o que voc\xEA faz",
            "Fale devagar sobre o que est\xE1 fazendo: abrir, mexer, cortar, lavar. Repita as mesmas palavras em dias diferentes.",
          ],
          [
            "D\xEA duas escolhas",
            "Pergunte: \xE1gua ou suco? Espere a resposta, mesmo que seja um gesto ou um olhar. Responda com a palavra falada.",
          ],
          [
            "Pare quando cansar",
            "Cinco minutos por dia bastam. Se a pessoa se afastar, encerre sem insistir.",
          ],
        ],
      },
      {
        id: "d4",
        titulo: "Pausas curtas para quem cuida",
        autor: "Dra. Beatriz Nogueira",
        area: "Psicologia",
        tempo: "1 min",
        dir: "cuidador",
        secoes: [
          [
            "Escolha uma pausa pequena",
            "Dez minutos sem tela, uma caminhada no quarteir\xE3o, um caf\xE9 sentado. O tamanho importa menos do que a repeti\xE7\xE3o.",
          ],
          [
            "Pe\xE7a um revezamento",
            "Combine com algu\xE9m da fam\xEDlia um hor\xE1rio fixo. Dizer o hor\xE1rio pesa menos do que pedir ajuda toda vez.",
          ],
          [
            "Procure apoio se o cansa\xE7o n\xE3o passa",
            "Cansa\xE7o que dura semanas merece conversa com um profissional. Procure a unidade de sa\xFAde ou use Atendimentos.",
          ],
        ],
      },
      {
        id: "d5",
        titulo: "Posi\xE7\xE3o para sentar durante as refei\xE7\xF5es",
        autor: "Dr. Diego Andrade",
        area: "Fisioterapia",
        tempo: "1 min",
        dir: "mobilidade",
        secoes: [
          [
            "P\xE9s apoiados",
            "Os p\xE9s devem ficar apoiados, no ch\xE3o ou em um banquinho. Isso ajuda o corpo a ficar firme e facilita engolir.",
          ],
          [
            "Mesa na altura do peito",
            "A mesa deve ficar perto da altura do peito, com os bra\xE7os apoiados. O prato fica \xE0 frente, n\xE3o ao lado.",
          ],
          [
            "Pe\xE7a avalia\xE7\xE3o presencial",
            "Cada corpo \xE9 diferente. Use estas dicas como ponto de partida e pe\xE7a orienta\xE7\xE3o a um fisioterapeuta.",
          ],
        ],
      },
      {
        id: "d6",
        titulo: "Sono: uma rotina para a noite",
        autor: "Dra. Beatriz Nogueira",
        area: "Psicologia",
        tempo: "1 min",
        dir: "rotina",
        secoes: [
          [
            "Hor\xE1rio parecido todos os dias",
            "Dormir e acordar perto da mesma hora, inclusive no fim de semana, ajuda o corpo a aprender o ritmo.",
          ],
          [
            "Uma hora de calma",
            "Diminua luz, telas e barulho antes de dormir. Repita a mesma sequ\xEAncia: banho, pijama, m\xFAsica baixa.",
          ],
          [
            "Registre por duas semanas",
            "Anote a hora de dormir e os despertares. Se o sono n\xE3o melhora, leve o registro a um profissional.",
          ],
        ],
      },
      {
        id: "d7",
        titulo: "Sinais de dor em quem n\xE3o fala",
        autor: "Dr. Diego Andrade",
        area: "Fisioterapia",
        tempo: "1 min",
        dir: "mobilidade",
        secoes: [
          [
            "Observe o que mudou",
            "Choro, gemidos, recusa de comida, corpo mais r\xEDgido e mudan\xE7a de humor ou de postura podem indicar dor.",
          ],
          [
            "Anote quando acontece",
            "Registre a hora, o que a pessoa fazia e o que aliviou. Isso ajuda a achar a causa.",
          ],
          [
            "Avise um profissional",
            "Dor nova ou que n\xE3o passa merece avalia\xE7\xE3o. Use Atendimentos ou procure a unidade de sa\xFAde.",
          ],
        ],
      },
    ],
    At = [
      {
        id: "p1",
        nome: "Dra. Helena Cavalcanti",
        iniciais: "HC",
        area: "Terapia ocupacional",
        foco: "integra\xE7\xE3o sensorial e rotina infantil",
        registro: "CREFITO-1 28417-TO",
        onde: "Presencial na Boa Vista, Recife, ou online",
        modos: ["Presencial na Boa Vista, Recife", "Online por v\xEDdeo"],
        agora: !0,
        bio: "11 anos de atua\xE7\xE3o com crian\xE7as e adolescentes. Orienta a fam\xEDlia a organizar a rotina e a adaptar o ambiente em casa.",
        dias: ["Ter\xE7a", "Quinta", "S\xE1bado"],
        horas: ["09:00", "10:30", "14:00"],
      },
      {
        id: "p2",
        nome: "Dr. Rafael Tavares",
        iniciais: "RT",
        area: "Fonoaudiologia",
        foco: "comunica\xE7\xE3o alternativa e alimenta\xE7\xE3o",
        registro: "CRFa 4-09215",
        onde: "Online por v\xEDdeo",
        agora: !0,
        bio: "Atua com crian\xE7as que falam pouco ou n\xE3o falam. Orienta jogos de comunica\xE7\xE3o e cuidados com a alimenta\xE7\xE3o.",
        dias: ["Segunda", "Quarta"],
        horas: ["10:30", "15:30"],
      },
      {
        id: "p3",
        nome: "Dra. Beatriz Nogueira",
        iniciais: "BN",
        area: "Psicologia",
        foco: "apoio a cuidadores e TEA",
        registro: "CRP 02/19421",
        onde: "Online por v\xEDdeo",
        agora: !1,
        bio: "Escuta fam\xEDlias em momentos de cansa\xE7o e de crise. Trabalha rotina de sono e manejo de comportamento.",
        dias: ["Ter\xE7a", "Quinta", "S\xE1bado"],
        horas: ["09:00", "14:00", "15:30"],
      },
      {
        id: "p4",
        nome: "Dr. Diego Andrade",
        iniciais: "DA",
        area: "Fisioterapia",
        foco: "neurofuncional e mobilidade",
        registro: "CREFITO-1 41266-F",
        onde: "Presencial em Olinda",
        agora: !1,
        bio: "Trabalha com paralisia cerebral, postura e transfer\xEAncias seguras. Ensina exerc\xEDcios curtos para fazer em casa.",
        dias: ["Segunda", "Quarta", "Sexta"],
        horas: ["09:00", "10:30"],
      },
      {
        id: "p5",
        nome: "Dra. Camila Rangel",
        iniciais: "CR",
        area: "Fisioterapia",
        foco: "exerc\xEDcios orientados para casa",
        registro: "CREFITO-1 39020-F",
        onde: "Online por v\xEDdeo",
        agora: !0,
        bio: "Monta uma sequ\xEAncia simples de exerc\xEDcios com a fam\xEDlia e acompanha a evolu\xE7\xE3o por v\xEDdeo.",
        dias: ["Ter\xE7a", "Sexta"],
        horas: ["14:00", "15:30"],
      },
      {
        id: "p6",
        nome: "Dra. S\xF4nia Barreto",
        iniciais: "SB",
        area: "Fonoaudiologia",
        foco: "alimenta\xE7\xE3o e engasgos",
        registro: "CRFa 4-11873",
        onde: "Presencial em Jaboat\xE3o dos Guararapes",
        agora: !1,
        bio: "Avalia como a pessoa engole e orienta a forma de oferecer l\xEDquidos e alimentos com seguran\xE7a.",
        dias: ["Quinta", "Sexta"],
        horas: ["09:00", "10:30", "14:00"],
      },
      {
        id: "p7",
        nome: "Dr. Caio Vasconcelos",
        iniciais: "CV",
        area: "Psicologia",
        foco: "jovens e adultos com defici\xEAncia",
        registro: "CRP 02/23550",
        onde: "Presencial no Recife",
        agora: !1,
        bio: "Acompanha a pessoa com defici\xEAncia na escuta de suas pr\xF3prias quest\xF5es emocionais.",
        dias: ["Segunda", "Quarta", "S\xE1bado"],
        horas: ["10:30", "14:00"],
      },
      {
        id: "p8",
        nome: "Dra. Elisa Duarte",
        iniciais: "ED",
        area: "Enfermagem",
        foco: "cuidados no dia a dia e medica\xE7\xF5es",
        registro: "COREN-PE 612340",
        onde: "Online por v\xEDdeo",
        agora: !1,
        bio: "Orienta organiza\xE7\xE3o de hor\xE1rios de rem\xE9dios, sinais de alerta e preparo para consultas.",
        dias: ["Ter\xE7a", "Quarta", "Quinta"],
        horas: ["09:00", "15:30"],
      },
      {
        id: "p9",
        nome: "Dr. J\xFAlio Pimentel",
        iniciais: "JP",
        area: "Nutri\xE7\xE3o",
        foco: "alimenta\xE7\xE3o na defici\xEAncia",
        registro: "CRN-6 8841",
        onde: "Online por v\xEDdeo",
        agora: !0,
        bio: "Ajuda fam\xEDlias a montar card\xE1pios poss\xEDveis na rotina, respeitando textura e seletividade.",
        dias: ["Segunda", "Sexta"],
        horas: ["10:30", "14:00"],
      },
    ],
    RS = [
      { id: "d2", rotulo: "Hoje, segunda, 2 de novembro", sem: "Hoje" },
      { id: "d3", rotulo: "Ter\xE7a, 3 de novembro", sem: "Ter\xE7a" },
      { id: "d4", rotulo: "Quarta, 4 de novembro", sem: "Quarta" },
      { id: "d5", rotulo: "Quinta, 5 de novembro", sem: "Quinta" },
      { id: "d6", rotulo: "Sexta, 6 de novembro", sem: "Sexta" },
      { id: "d7", rotulo: "S\xE1bado, 7 de novembro", sem: "S\xE1bado" },
      { id: "d9", rotulo: "Segunda, 9 de novembro", sem: "Segunda" },
      { id: "d10", rotulo: "Ter\xE7a, 10 de novembro", sem: "Ter\xE7a" },
    ];
  function Ur(a, o = []) {
    let e = At.findIndex((n) => n.id === a.id),
      t = [];
    return (
      RS.forEach((n, l) => {
        if (n.sem === "Hoje" ? !a.agora : !a.dias.includes(n.sem)) return;
        let s = (n.sem === "Hoje" ? ["16:00", "16:30"] : a.horas)
          .filter((i, c) => n.sem === "Hoje" || (e + l + c) % 4 !== 0)
          .filter(
            (i) =>
              !o.some(
                (c) => c.diaId === n.id && c.hora === i,
              ),
          );
        s.length && t.push({ ...n, horas: s });
      }),
      t
    );
  }
  var zSort = (lista) =>
    [...lista].sort(
      (x, y) =>
        RS.findIndex((d) => d.id === x.diaId) -
          RS.findIndex((d) => d.id === y.diaId) || x.hora.localeCompare(y.hora),
    );
  function zEmail(v) {
    let t = v.trim();
    if (!t) return "Falta o e-mail. Exemplo: maria@email.com";
    if (!t.includes("@")) return "Falta o @ no e-mail. Exemplo: maria@email.com";
    if (!/@[^@\s]+\.[^@\s]+$/.test(t))
      return "Falta o final do e-mail, como .com. Exemplo: maria@email.com";
    return "";
  }
  function zSenha(v) {
    if (v.length < 8)
      return "A senha precisa de pelo menos 8 caracteres. Misture letras e n\xFAmeros.";
    if (!/[a-zA-Z]/.test(v) || !/[0-9]/.test(v))
      return "Misture letras e n\xFAmeros na senha para deix\xE1-la mais segura.";
    return "";
  }
  var M2 = (a, o) => Ur(a, o).reduce((e, t) => e + t.horas.length, 0);
  function D2(a, o) {
    let e = Ur(a, o)[0];
    return e
      ? `${e.rotulo}, \xE0s ${e.horas[0]}`
      : "Sem hor\xE1rios nesta semana";
  }
  var B2 = [
      [
        "Fique perto e fale devagar",
        "Use frases curtas e a mesma voz calma. Diga o que vai fazer antes de tocar na pessoa.",
      ],
      [
        "Reduza luz e barulho",
        "Desligue a televis\xE3o, baixe as luzes e leve a pessoa para um lugar mais quieto. N\xE3o force contato olho no olho.",
      ],
      [
        "Em convuls\xE3o, proteja a cabe\xE7a",
        "Deite a pessoa de lado, afaste objetos e apoie a cabe\xE7a. N\xE3o coloque nada na boca. Marque a hora. Se passar de 5 minutos, ligue 192.",
      ],
      [
        "Mantenha \xE0 m\xE3o o essencial",
        "Tenha por perto o nome dos rem\xE9dios, o \xFAltimo relat\xF3rio m\xE9dico e o telefone de um familiar. Isso agiliza o atendimento.",
      ],
    ],
    H2 = [
      ["193", "Bombeiros", "Resgate e inc\xEAndio."],
      ["190", "Pol\xEDcia Militar", "Viol\xEAncia ou amea\xE7a em andamento."],
      ["188", "CVV", "Apoio emocional, 24 horas."],
    ];
  var r = N(yt()),
    zS = [
      { id: "inicio", rotulo: "In\xEDcio", ic: "casa", tela: "inicio" },
      { id: "forum", rotulo: "F\xF3rum", ic: "forum", tela: "forum" },
      { id: "chat", rotulo: "Chat", ic: "mensagem", tela: "chat" },
      { id: "dicas", rotulo: "Dicas", ic: "dica", tela: "dicas" },
      {
        id: "atend",
        rotulo: "Atendimentos",
        ic: "calendario",
        tela: "atendimentos",
      },
      { id: "perfil", rotulo: "Perfil", ic: "perfil", tela: "perfil" },
    ],
    US = {
      inicio: "inicio",
      perfil: "perfil",
      diagnostico: "perfil",
      chat: "chat",
      forum: "forum",
      "forum-topico": "forum",
      "forum-novo": "forum",
      dicas: "dicas",
      dica: "dicas",
      atendimentos: "atend",
    },
    xS = [
      "objetivo",
      "login",
      "diagnostico-entrada",
      "cadastro",
      "status-voluntario",
    ];
  function zIniciais(nome) {
    let p = (nome || "").trim().split(/\s+/).filter(Boolean);
    if (!p.length) return "";
    return ((p[0][0] || "") + (p.length > 1 ? p[p.length - 1][0] : "")).toUpperCase();
  }
  function qS({
    tema: a,
    atual: o,
    comMenu: e,
    irInicio: t,
    irPara: n,
    contadores: l,
    usuario: u,
    frase: fr,
    children: s,
  }) {
    let ini = zIniciais(u && u.nome),
      itemMenu = (c, baixo) =>
        (0, r.jsx)(
          "li",
          {
            children: (0, r.jsxs)("button", {
              type: "button",
              className: baixo ? "aba-baixo" : "menu-item",
              onClick: () => n(c.tela),
              "aria-current": o === c.id ? "page" : void 0,
              children: [
                (0, r.jsxs)("span", {
                  className: "menu-icone",
                  children: [
                    (0, r.jsx)(la, { n: c.ic, size: baixo ? 24 : 22 }),
                    l[c.id] > 0 &&
                      (0, r.jsxs)("span", {
                        className: "contador",
                        children: [
                          (0, r.jsx)("span", {
                            "aria-hidden": "true",
                            children: l[c.id],
                          }),
                          (0, r.jsxs)("span", {
                            className: "so-leitor",
                            children: [", ", l[c.id], l[c.id] === 1 ? " novo" : " novos"],
                          }),
                        ],
                      }),
                  ],
                }),
                (0, r.jsx)("span", { className: "menu-rotulo", children: c.rotulo }),
              ],
            }),
          },
          c.id,
        );
    return (0, r.jsxs)("div", {
      className: "app" + (e ? " app--menu" : " app--entrada"),
      children: [
        (0, r.jsx)("a", {
          className: "pular",
          href: "#principal",
          onClick: (c) => {
            (c.preventDefault(), document.getElementById("principal")?.focus());
          },
          children: "Pular para o conte\xFAdo",
        }),
        (0, r.jsxs)("aside", {
          className: "coluna",
          children: [
            (0, r.jsx)("button", {
              type: "button",
              className: "logo-link",
              onClick: t,
              "aria-label": "zElo. Ir para a tela inicial",
              children: (0, r.jsx)("img", {
                src: a === "escuro" ? "logo-escuro.png" : "logo-claro.png",
                alt: "zElo",
                width: "1132",
                height: "665",
              }),
            }),
            e
              ? (0, r.jsx)("nav", {
                  "aria-label": "Menu principal",
                  children: (0, r.jsx)("ul", {
                    className: "menu",
                    children: zS.map((c) => itemMenu(c, !1)),
                  }),
                })
              : fr &&
                (0, r.jsx)("p", { className: "coluna-fim", children: fr }),
            e &&
              (0, r.jsx)("div", {
                className: "coluna-ajuda",
                children: (0, r.jsxs)("button", {
                  type: "button",
                  className: "btn-emergencia",
                  onClick: () => n("ajuda"),
                  "aria-current": o === "ajuda" ? "page" : void 0,
                  children: [
                    (0, r.jsx)(la, { n: "ajuda", size: 22 }),
                    "Preciso de ajuda",
                  ],
                }),
              }),
          ],
        }),
        (0, r.jsxs)("div", {
          className: "conteudo",
          children: [
            (0, r.jsxs)("header", {
              className: "topo",
              children: [
                (0, r.jsx)("button", {
                  type: "button",
                  className: "topo-logo",
                  onClick: t,
                  "aria-label": "zElo. Ir para a tela inicial",
                  children: (0, r.jsx)("img", {
                    src: a === "escuro" ? "logo-escuro.png" : "logo-claro.png",
                    alt: "zElo",
                    width: "1132",
                    height: "665",
                  }),
                }),
                e &&
                  (0, r.jsx)("button", {
                    type: "button",
                    className: "topo-avatar",
                    onClick: () => n("perfil"),
                    "aria-current": o === "perfil" ? "page" : void 0,
                    "aria-label": "Perfil",
                    children: ini || (0, r.jsx)(la, { n: "perfil", size: 22 }),
                  }),
              ],
            }),
            (0, r.jsx)("main", { id: "principal", tabIndex: -1, children: s }),
            (0, r.jsxs)("footer", {
              className: "rodape",
              children: [
                (0, r.jsx)("span", {
                  children:
                    "zElo. Dire\xE7\xE3o, ajuda e apoio para quem cuida de pessoas com defici\xEAncia (PcD).",
                }),
                (0, r.jsx)("span", {
                  children: "Prot\xF3tipo com dados fict\xEDcios.",
                }),
              ],
            }),
          ],
        }),
        e &&
          o !== "ajuda" &&
          (0, r.jsxs)("button", {
            type: "button",
            className: "ajuda-flutuante",
            onClick: () => n("ajuda"),
            children: [(0, r.jsx)(la, { n: "ajuda", size: 20 }), "Preciso de ajuda"],
          }),
        e &&
          (0, r.jsx)("nav", {
            className: "barra-baixo",
            "aria-label": "Menu principal (celular)",
            children: (0, r.jsx)("ul", {
              children: zS
                .filter((c) => c.id !== "perfil")
                .map((c) => itemMenu(c, !0)),
            }),
          }),
      ],
    });
  }
  function FS({ escolher: a }) {
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsxs)("div", {
          className: "hero-mobile",
          "aria-hidden": "true",
          children: [
            (0, r.jsx)("img", { src: "logo-claro.png", alt: "", width: "1132", height: "665" }),
            (0, r.jsx)("p", { children: "Voc\xEA n\xE3o est\xE1 s\xF3" }),
          ],
        }),
        (0, r.jsx)("h1", {
          className: "display",
          tabIndex: -1,
          children: "Como voc\xEA quer usar o zElo?",
        }),
        (0, r.jsxs)("div", {
          className: "objetivo-opcoes opcoes",
          children: [
            (0, r.jsxs)("button", {
              type: "button",
              className: "opcao",
              onClick: () => a("responsavel"),
              children: [
                (0, r.jsxs)("span", {
                  children: [
                    "Sou respons\xE1vel",
                    (0, r.jsx)("span", {
                      className: "opcao-sub",
                      children:
                        "Cuido de uma pessoa com defici\xEAncia e quero dire\xE7\xE3o e apoio.",
                    }),
                  ],
                }),
                (0, r.jsx)("span", {
                  className: "opcao-estado",
                  children: (0, r.jsx)(la, { n: "avancar", size: 28 }),
                }),
              ],
            }),
            (0, r.jsxs)("button", {
              type: "button",
              className: "opcao",
              onClick: () => a("pcd"),
              children: [
                (0, r.jsxs)("span", {
                  children: [
                    "Sou a pessoa com defici\xEAncia",
                    (0, r.jsx)("span", {
                      className: "opcao-sub",
                      children:
                        "Uso o zElo por conta pr\xF3pria para cuidar da minha sa\xFAde.",
                    }),
                  ],
                }),
                (0, r.jsx)("span", {
                  className: "opcao-estado",
                  children: (0, r.jsx)(la, { n: "avancar", size: 28 }),
                }),
              ],
            }),
            (0, r.jsxs)("button", {
              type: "button",
              className: "opcao",
              onClick: () => a("voluntario"),
              children: [
                (0, r.jsxs)("span", {
                  children: [
                    "Sou volunt\xE1rio",
                    (0, r.jsx)("span", {
                      className: "opcao-sub",
                      children:
                        "Sou profissional de sa\xFAde ou educa\xE7\xE3o e quero ajudar.",
                    }),
                  ],
                }),
                (0, r.jsx)("span", {
                  className: "opcao-estado",
                  children: (0, r.jsx)(la, { n: "avancar", size: 28 }),
                }),
              ],
            }),
          ],
        }),
        (0, r.jsx)("div", {
          style: { marginTop: 32 },
          children: (0, r.jsx)(Do, {
            tipo: "info",
            children:
              "O zElo orienta quest\xF5es de sa\xFAde. Para benef\xEDcios, documentos e escola, procure o CRAS ou a pr\xF3pria escola.",
          }),
        }),
      ],
    });
  }
  function kS({ voltar: a, entrar: o, papel: pp, criarVoluntario: cv, modoInicial: mi }) {
    let [modo, setModo] = (0, L.useState)(mi || "entrar"),
      [nome, setNome] = (0, L.useState)(""),
      [e, t] = (0, L.useState)(""),
      [n, l] = (0, L.useState)(""),
      [s, i] = (0, L.useState)({}),
      [enviado, setEnviado] = (0, L.useState)(""),
      limpa = (k) => s[k] && i({ ...s, [k]: void 0 }),
      trocar = (m) => {
        (setModo(m), i({}), setEnviado(""));
        requestAnimationFrame(() =>
          document.querySelector("main h1")?.focus({ preventScroll: !0 }),
        );
      },
      vol = pp === "voluntario",
      titulos = {
        entrar: vol ? "Entre na sua conta de volunt\xE1rio" : "Que bom ter voc\xEA aqui",
        criar: "Crie sua conta",
        esqueci: "Esqueceu a senha?",
      },
      leads = {
        entrar: vol
          ? "Use o e-mail e a senha do seu cadastro."
          : "Entre para ver seus atendimentos, conversas e dicas.",
        criar: "Depois, tr\xEAs perguntas r\xE1pidas para organizar o que mostramos primeiro.",
        esqueci: "Digite o e-mail da sua conta. Enviamos um link para voc\xEA criar uma senha nova.",
      };
    return (0, r.jsxs)(
      "section",
      {
        className: "entra",
        children: [
          (0, r.jsx)(Ye, {
            onClick: () => (modo === "entrar" ? a() : trocar("entrar")),
          }),
          (0, r.jsxs)("header", {
            className: "cabeca",
            children: [
              (0, r.jsx)("h1", { tabIndex: -1, children: titulos[modo] }),
              (0, r.jsx)("p", { className: "lead", children: leads[modo] }),
            ],
          }),
          (0, r.jsxs)("form", {
            className: "form-conta",
            onSubmit: (m) => {
              m.preventDefault();
              let I = {},
                em = zEmail(e);
              if ((em && (I.email = em), modo === "criar")) {
                nome.trim() || (I.nome = "Falta o seu nome. Exemplo: Maria Silva");
                let sn = zSenha(n);
                sn && (I.senha = sn);
              }
              if (modo === "entrar" && !n)
                I.senha = "Falta a senha.";
              if ((i(I), Object.keys(I).length)) return Or();
              if (modo === "esqueci") return setEnviado(e.trim());
              o(e.trim(), modo === "criar" ? nome.trim() : "");
            },
            noValidate: !0,
            children: [
              enviado &&
                (0, r.jsx)("div", {
                  className: "alerta-bloco",
                  children: (0, r.jsxs)(Do, {
                    tipo: "ok",
                    children: [
                      "Enviamos o link para ",
                      enviado,
                      ". Neste prot\xF3tipo nenhum e-mail \xE9 enviado.",
                    ],
                  }),
                }),
              modo === "criar" &&
                (0, r.jsx)(Za, {
                  id: "c-nome",
                  rotulo: "Como podemos te chamar?",
                  autoComplete: "name",
                  value: nome,
                  onChange: (m) => (setNome(m.target.value), limpa("nome")),
                  erro: s.nome,
                }),
              (0, r.jsx)(Za, {
                id: "email",
                rotulo: "E-mail",
                tipo: "text",
                inputMode: "email",
                autoComplete: "email",
                placeholder: "seuemail@exemplo.com",
                value: e,
                onChange: (m) => (t(m.target.value), limpa("email")),
                erro: s.email,
              }),
              modo !== "esqueci" &&
                (0, r.jsx)(Za, {
                  id: "senha",
                  rotulo: "Senha",
                  ajuda:
                    modo === "criar"
                      ? "Pelo menos 8 caracteres, com letras e n\xFAmeros."
                      : void 0,
                  tipo: "password",
                  autoComplete: modo === "criar" ? "new-password" : "current-password",
                  value: n,
                  onChange: (m) => (l(m.target.value), limpa("senha")),
                  erro: s.senha,
                }),
              modo === "entrar" &&
                (0, r.jsx)("p", {
                  className: "link-direita",
                  children: (0, r.jsx)("button", {
                    type: "button",
                    className: "link",
                    onClick: () => trocar("esqueci"),
                    children: "Esqueci minha senha",
                  }),
                }),
              (0, r.jsx)("div", {
                className: "acoes acoes--cheia",
                children: (0, r.jsx)(ia, {
                  type: "submit",
                  fim: "avancar",
                  children:
                    modo === "criar"
                      ? "Criar conta"
                      : modo === "esqueci"
                        ? "Enviar link"
                        : "Entrar",
                }),
              }),
              modo === "entrar" &&
                (0, r.jsxs)("p", {
                  className: "troca-conta",
                  children: [
                    vol ? "Ainda n\xE3o tem cadastro? " : "Primeira vez no zElo? ",
                    (0, r.jsx)("button", {
                      type: "button",
                      className: "link",
                      onClick: () => (vol ? cv() : trocar("criar")),
                      children: vol ? "Cadastre-se como volunt\xE1rio" : "Criar conta",
                    }),
                  ],
                }),
              modo === "criar" &&
                (0, r.jsxs)("p", {
                  className: "troca-conta",
                  children: [
                    "J\xE1 tem conta? ",
                    (0, r.jsx)("button", {
                      type: "button",
                      className: "link",
                      onClick: () => trocar("entrar"),
                      children: "Entrar",
                    }),
                  ],
                }),
              (0, r.jsxs)("p", {
                className: "apoio lgpd",
                children: [
                  (0, r.jsx)(la, { n: "cadeado", size: 16 }),
                  " Seus dados de sa\xFAde s\xE3o protegidos pela LGPD.",
                ],
              }),
            ],
          }),
        ],
      },
      modo,
    );
  }
  var _S = [
    {
      campo: "tipo",
      titulo: "Qual \xE9 o tipo de defici\xEAncia?",
      ajuda:
        "Pode escolher mais de uma. Se ainda n\xE3o h\xE1 diagn\xF3stico, escolha Ainda n\xE3o sei.",
      itens: Em,
      multi: !0,
      aviso: "Escolha pelo menos uma op\xE7\xE3o para continuar.",
    },
    {
      campo: "direcionamento",
      titulo: "Com que parte da sa\xFAde voc\xEA quer ajuda primeiro?",
      ajuda:
        "Escolha uma ou mais op\xE7\xF5es. Isso define o que aparece primeiro para voc\xEA.",
      itens: El,
      multi: !0,
      aviso: "Escolha pelo menos uma op\xE7\xE3o para continuar.",
    },
    {
      campo: "especificidades",
      titulo: "Quais destas situa\xE7\xF5es fazem parte do dia a dia?",
      ajuda: "Escolha uma ou mais op\xE7\xF5es.",
      itens: Lm,
      multi: !0,
      aviso: "Escolha pelo menos uma op\xE7\xE3o para continuar.",
    },
  ];
  function GS({
    passo: a,
    setPasso: o,
    diag: e,
    setDiag: t,
    concluir: n,
    sair: l,
  }) {
    let s = _S[a - 1],
      i = e[s.campo],
      c = s.multi ? i.length > 0 : !!i,
      m = (I) => {
        if (!s.multi) return t({ ...e, [s.campo]: I });
        let f;
        let excl = ["nenhuma", "nao-sei"];
        if (excl.includes(I)) f = i.includes(I) ? [] : [I];
        else {
          let u = i.filter((g) => !excl.includes(g));
          f = u.includes(I) ? u.filter((g) => g !== I) : [...u, I];
        }
        t({ ...e, [s.campo]: f });
      };
    return (0, r.jsxs)(
      "section",
      {
        className: "entra",
        children: [
          (0, r.jsx)(Ye, { onClick: () => (a === 1 ? l() : o(a - 1)) }),
          (0, r.jsxs)("header", {
            className: "cabeca",
            style: { marginBottom: 32 },
            children: [
              (0, r.jsx)("div", {
                className: "progresso",
                "aria-hidden": "true",
                children: _S.map((_, k) =>
                  (0, r.jsx)("span", { className: k < a ? "feito" : "" }, k),
                ),
              }),
              (0, r.jsxs)("p", {
                className: "passo",
                children: ["Passo ", a, " de ", _S.length],
              }),
              a === 1 &&
                (0, r.jsxs)("span", {
                  className: "selo-tempo",
                  children: [(0, r.jsx)(la, { n: "apoio", size: 16 }), "Leva menos de 2 minutos"],
                }),
              (0, r.jsx)("h1", { tabIndex: -1, children: s.titulo }),
              s.ajuda &&
                (0, r.jsx)("p", {
                  className: "lead",
                  style: { fontSize: 18 },
                  children: s.ajuda,
                }),
            ],
          }),
          (0, r.jsx)(Tm, {
            itens: s.itens,
            valor: i,
            onChange: m,
            multi: s.multi,
            rotulo: s.titulo,
          }),
          (0, r.jsxs)("div", {
            className: "acoes",
            style: { marginTop: 40 },
            children: [
              (0, r.jsx)(ia, {
                disabled: !c,
                "aria-disabled": !c,
                onClick: () => c && (a === _S.length ? n() : o(a + 1)),
                fim: "avancar",
                children: a === _S.length ? "Concluir" : "Continuar",
              }),
              !c &&
                (0, r.jsx)("span", {
                  className: "aviso",
                  role: "status",
                  children: s.aviso,
                }),
            ],
          }),
        ],
      },
      a,
    );
  }
  function VS({ voltar: a, enviar: o, entrar: jaTenho }) {
    let [e, t] = (0, L.useState)({
        nome: "",
        email: "",
        senha: "",
        area: "",
        registro: "",
        cidade: "",
      }),
      [n, l] = (0, L.useState)(""),
      [s, i] = (0, L.useState)({}),
      c = (0, L.useRef)(null),
      m = (f) => (u) => {
        (t({ ...e, [f]: u.target.value }), s[f] && i({ ...s, [f]: void 0 }));
      };
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsx)(Ye, { onClick: a }),
        (0, r.jsxs)("header", {
          className: "cabeca",
          children: [
            (0, r.jsx)("h1", {
              tabIndex: -1,
              children: "Cadastre-se como volunt\xE1rio",
            }),
            (0, r.jsx)("p", {
              className: "lead",
              children:
                "Pedimos seus dados b\xE1sicos e a comprova\xE7\xE3o do t\xEDtulo profissional.",
            }),
          ],
        }),
        (0, r.jsxs)("form", {
          onSubmit: (f) => {
            f.preventDefault();
            let u = {};
            (e.nome.trim() ||
              (u.nome = "Falta o nome. Exemplo: Helena Cavalcanti"),
              zEmail(e.email) && (u.email = zEmail(e.email)),
              zSenha(e.senha) && (u.senha = zSenha(e.senha)),
              e.area ||
                (u.area = "Escolha a sua \xE1rea de atua\xE7\xE3o na lista."),
              e.registro.trim() ||
                (u.registro =
                  "Falta o n\xFAmero do registro no conselho. Exemplo: CREFITO-1 12345-TO"),
              e.cidade.trim() || (u.cidade = "Falta a cidade. Exemplo: Recife"),
              n ||
                (u.arquivo =
                  "Falta a comprova\xE7\xE3o do t\xEDtulo. Envie uma foto ou PDF do diploma ou da carteira do conselho."),
              i(u),
              Object.keys(u).length ? Or() : o(e));
          },
          noValidate: !0,
          children: [
            (0, r.jsx)(Za, {
              id: "nome",
              rotulo: "Nome completo",
              value: e.nome,
              onChange: m("nome"),
              erro: s.nome,
              autoComplete: "name",
            }),
            (0, r.jsx)(Za, {
              id: "email-v",
              rotulo: "E-mail",
              inputMode: "email",
              value: e.email,
              onChange: m("email"),
              erro: s.email,
              autoComplete: "email",
            }),
            (0, r.jsx)(Za, {
              id: "senha-v",
              rotulo: "Crie uma senha",
              ajuda: "Pelo menos 8 caracteres, com letras e n\xFAmeros.",
              tipo: "password",
              autoComplete: "new-password",
              value: e.senha,
              onChange: m("senha"),
              erro: s.senha,
            }),
            (0, r.jsxs)(Za, {
              id: "area",
              rotulo: "\xC1rea de atua\xE7\xE3o",
              como: "select",
              value: e.area,
              onChange: m("area"),
              erro: s.area,
              children: [
                (0, r.jsx)("option", {
                  value: "",
                  children: "Escolha uma \xE1rea",
                }),
                Rr.map((f) =>
                  (0, r.jsx)("option", { value: f, children: f }, f),
                ),
              ],
            }),
            (0, r.jsx)(Za, {
              id: "registro",
              rotulo: "Registro no conselho profissional",
              value: e.registro,
              onChange: m("registro"),
              erro: s.registro,
            }),
            (0, r.jsx)(Za, {
              id: "cidade",
              rotulo: "Cidade onde voc\xEA atua",
              value: e.cidade,
              onChange: m("cidade"),
              erro: s.cidade,
            }),
            (0, r.jsxs)("div", {
              className: "campo",
              "data-erro": s.arquivo ? "true" : "false",
              children: [
                (0, r.jsx)("span", {
                  className: "campo-rotulo",
                  id: "arq-rotulo",
                  children: "Comprova\xE7\xE3o do t\xEDtulo profissional",
                }),
                (0, r.jsx)("span", {
                  className: "campo-ajuda apoio",
                  children:
                    "Foto ou PDF do diploma ou da carteira do conselho.",
                }),
                (0, r.jsxs)("div", {
                  className: "arquivo-linha",
                  children: [
                    (0, r.jsx)(ia, {
                      sec: !0,
                      peq: !0,
                      icone: "adicionar",
                      onClick: () => c.current?.click(),
                      "aria-describedby": "arq-nome",
                      children: "Escolher arquivo",
                    }),
                    (0, r.jsx)("span", {
                      id: "arq-nome",
                      className: "arquivo-nome",
                      children: n || "Nenhum arquivo escolhido",
                    }),
                    (0, r.jsx)("input", {
                      ref: c,
                      type: "file",
                      accept: ".pdf,image/*",
                      className: "so-leitor",
                      tabIndex: -1,
                      "aria-labelledby": "arq-rotulo",
                      onChange: (f) => {
                        (l(f.target.files?.[0]?.name || ""),
                          s.arquivo && i({ ...s, arquivo: void 0 }));
                      },
                    }),
                  ],
                }),
                s.arquivo &&
                  (0, r.jsxs)("p", {
                    className: "erro-msg",
                    role: "alert",
                    children: [
                      (0, r.jsx)(la, { n: "atencao", size: 20 }),
                      (0, r.jsx)("span", { children: s.arquivo }),
                    ],
                  }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "acoes",
              style: { marginTop: 32 },
              children: (0, r.jsx)(ia, {
                type: "submit",
                fim: "avancar",
                children: "Enviar cadastro",
              }),
            }),
            (0, r.jsxs)("p", {
              className: "troca-conta",
              children: [
                "J\xE1 tem cadastro? ",
                (0, r.jsx)("button", {
                  type: "button",
                  className: "link",
                  onClick: jaTenho,
                  children: "Entrar",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function PS({ nome: a, aprovar: o, voltar: e }) {
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsx)("header", {
          className: "cabeca",
          style: { marginBottom: 32 },
          children: (0, r.jsxs)("h1", {
            tabIndex: -1,
            children: ["Recebemos seu cadastro, ", (a || "").split(" ")[0]],
          }),
        }),
        (0, r.jsx)(Do, {
          tipo: "info",
          children: "Sua aprova\xE7\xE3o sai em at\xE9 24 horas.",
        }),
        (0, r.jsxs)("ul", {
          className: "etapas",
          children: [
            (0, r.jsxs)("li", {
              children: [
                (0, r.jsx)("span", { children: "Cadastro enviado" }),
                (0, r.jsx)(Bo, { icone: "confirmar", children: "Feito" }),
              ],
            }),
            (0, r.jsxs)("li", {
              children: [
                (0, r.jsx)("span", {
                  children: "An\xE1lise do t\xEDtulo profissional",
                }),
                (0, r.jsx)(Bo, { forte: !0, children: "Em andamento" }),
              ],
            }),
            (0, r.jsxs)("li", {
              children: [
                (0, r.jsx)("span", { children: "Acesso liberado" }),
                (0, r.jsx)(Bo, { children: "Aguardando" }),
              ],
            }),
          ],
        }),
        (0, r.jsx)("p", {
          className: "apoio medida",
          style: { marginTop: 24 },
          children: "Enviaremos o resultado para o seu e-mail.",
        }),
        (0, r.jsxs)("div", {
          className: "acoes",
          children: [
            (0, r.jsx)(ia, {
              onClick: o,
              fim: "avancar",
              children: "Simular aprova\xE7\xE3o",
            }),
            (0, r.jsx)("button", {
              type: "button",
              className: "link",
              onClick: e,
              children: "Voltar ao in\xEDcio",
            }),
          ],
        }),
      ],
    });
  }
  function qr({ p: a }) {
    return (0, r.jsx)("span", {
      className: "avatar",
      "aria-hidden": "true",
      children: a.iniciais,
    });
  }
  function ZS({
    usuario: a,
    papel: o,
    diag: e,
    agenda: t,
    irPara: n,
    abrirTopico: l,
    abrirDica: s,
    abrirProf: i,
  }) {
    let zAreas = {
        terapias: ["Terapia ocupacional", "Fisioterapia", "Fonoaudiologia"],
        emocional: ["Psicologia"],
        rotina: ["Terapia ocupacional", "Psicologia", "Nutri\xE7\xE3o"],
        comunicacao: ["Fonoaudiologia"],
        mobilidade: ["Fisioterapia"],
        cuidador: ["Psicologia"],
      },
      zRel = (f) => {
        let k = 0;
        (e.direcionamento.forEach((d) => {
          (zAreas[d] || []).includes(f.area) && (k += 2);
        }),
          (e.tipo || []).includes("tea") && /TEA/.test(f.foco) && (k += 2),
          (e.especificidades || []).includes("engolir") &&
            /engasg|alimenta/.test(f.foco) &&
            (k += 1));
        return k;
      },
      online = At.filter((f) => f.agora),
      c = [...At]
        .map((f, k) => ({ f, k, rel: zRel(f) }))
        .filter((x) => x.rel > 0 || x.f.agora)
        .sort((x, y) => y.rel - x.rel || y.f.agora - x.f.agora || x.k - y.k)
        .map((x) => x.f),
      m = zSort(t)[0],
      I = (0, L.useMemo)(() => {
        let f = e.direcionamento,
          u = Object.fromEntries(Nm.map((d) => [d.id, d])),
          g = Object.fromEntries(zr.map((d) => [d.id, d])),
          v = (d) =>
            `${d.respostas.length} ${d.respostas.length === 1 ? "resposta" : "respostas"}`,
          A = (d) => ({
            k: d,
            tipo: "F\xF3rum",
            titulo: u[d].titulo,
            meta: `${u[d].autor}, ${u[d].cidade} \xB7 ${v(u[d])}`,
            dir: u[d].dir,
            go: () => l(d),
          }),
          y = (d) => ({
            k: d,
            tipo: "Dica",
            titulo: g[d].titulo,
            meta: `${g[d].autor}, ${g[d].area.toLowerCase()} \xB7 ${g[d].tempo}`,
            dir: g[d].dir,
            go: () => s(d),
          }),
          h = [
            A("t6"),
            y("d8"),
            A("t7"),
            y("d9"),
            A("t1"),
            y("d6"),
            A("t2"),
            y("d2"),
            {
              k: "a1",
              tipo: "Atendimento",
              titulo: "Terapia ocupacional: hor\xE1rios abertos nesta semana",
              meta: "Online e presencial em Recife",
              dir: "terapias",
              go: () => n("atendimentos"),
            },
            A("t3"),
            y("d4"),
            A("t4"),
            y("d3"),
            y("d5"),
            y("d7"),
            y("d1"),
            A("t5"),
          ];
        if (o === "voluntario")
          return [
            ...[A("t1"), A("t4"), A("t2")].map((S) => ({
              ...S,
              motivo: "Pergunta aberta que espera uma resposta de profissional",
            })),
            { ...A("t5"), motivo: "Conversa de quem cuida" },
            { ...y("d1"), motivo: "Dica recente da sua \xE1rea" },
          ].slice(0, 5);
        let p = (d) => (f.includes(d.dir) ? 0 : 1);
        return h
          .map((d, S) => ({ ...d, i: S }))
          .sort((d, S) => p(d) - p(S) || d.i - S.i)
          .slice(0, 5)
          .map((d) => ({
            ...d,
            motivo: f.includes(d.dir)
              ? `Porque voc\xEA escolheu: ${w2[d.dir]}`
              : "Sugest\xE3o para come\xE7ar",
          }));
      }, [e.direcionamento, o]);
    return (0, r.jsxs)("section", {
      className: "entra inicio",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca",
          style: { marginBottom: 40 },
          children: [
            (0, r.jsx)("h1", {
              className: "display",
              tabIndex: -1,
              children: a.nome ? `Ol\xE1, ${a.nome.split(" ")[0]}` : "Ol\xE1",
            }),
            (0, r.jsx)("p", {
              className: "lead",
              children:
                o === "voluntario"
                  ? "Veja onde a sua resposta pode ajudar hoje."
                  : o === "pcd"
                    ? "Como est\xE1 a sua sa\xFAde hoje? Comece por um destes caminhos."
                    : "Como a sa\xFAde de voc\xEAs est\xE1 hoje? Comece por um destes caminhos.",
            }),
            !a.nome &&
              (0, r.jsxs)("p", {
                className: "apoio",
                style: { marginTop: 8 },
                children: [
                  "Ainda n\xE3o sabemos o seu nome. ",
                  (0, r.jsx)("button", {
                    type: "button",
                    className: "link",
                    onClick: () => n("perfil"),
                    children: "Diga como podemos te chamar",
                  }),
                ],
              }),
          ],
        }),
        o !== "voluntario" &&
          m &&
          (0, r.jsxs)("div", {
            className: "proximo",
            children: [
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("h2", {
                    className: "proximo-titulo",
                    children: "Seu pr\xF3ximo atendimento",
                  }),
                  (0, r.jsxs)("p", {
                    className: "proximo-quando",
                    children: [m.dia, ", \xE0s ", m.hora],
                  }),
                  (0, r.jsxs)("p", {
                    className: "proximo-quem",
                    children: [
                      m.prof.area,
                      " com ",
                      m.prof.nome,
                      ". ",
                      m.onde || m.prof.onde,
                      ".",
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(ia, {
                sec: !0,
                peq: !0,
                fim: "avancar",
                onClick: () => n("atendimentos-meus"),
                children: "Ver agendamento",
              }),
            ],
          }),
        o !== "voluntario" &&
          (0, r.jsxs)("div", {
            className: "secao disponiveis",
            style: { marginTop: m ? 64 : 0 },
            children: [
              (0, r.jsxs)("div", {
                className: "disp-topo",
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h2", {
                        id: "disp-h",
                        children: "Profissionais para voc\xEA",
                      }),
                      (0, r.jsxs)("p", {
                        className: "apoio disp-sub",
                        children: [
                          "Escolhidos pelas suas respostas. ",
                          (0, r.jsxs)("span", {
                            className: "online-ponto",
                            children: [online.length, " volunt\xE1rios online agora"],
                          }),
                          ", com hor\xE1rios ainda hoje.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("ul", {
                className: "lista",
                "aria-labelledby": "disp-h",
                children: c
                  .slice(0, 4)
                  .map((f) =>
                    (0, r.jsx)(
                      "li",
                      {
                        children: (0, r.jsxs)("button", {
                          type: "button",
                          className: "linha linha-prof",
                          onClick: () => i(f.id),
                          children: [
                            (0, r.jsx)(qr, { p: f }),
                            (0, r.jsxs)("span", {
                              className: "linha-texto",
                              children: [
                                (0, r.jsxs)("span", {
                                  className: "linha-titulo",
                                  children: [
                                    f.nome,
                                    f.agora &&
                                      (0, r.jsxs)(r.Fragment, {
                                        children: [" ", (0, r.jsx)(Bo, { forte: !0, children: "Online agora" })],
                                      }),
                                  ],
                                }),
                                (0, r.jsxs)("span", {
                                  className: "apoio linha-meta",
                                  children: [f.area, " \xB7 ", f.foco],
                                }),
                                (0, r.jsxs)("span", {
                                  className: "apoio linha-meta",
                                  style: {
                                    color: "var(--texto)",
                                    fontWeight: 600,
                                  },
                                  children: [
                                    "Pr\xF3ximo hor\xE1rio: ",
                                    D2(f, t),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)("span", {
                              className: "linha-fim",
                              children: [
                                (0, r.jsx)(la, { n: "avancar", size: 24 }),
                              ],
                            }),
                          ],
                        }),
                      },
                      f.id,
                    ),
                  ),
              }),
              (0, r.jsx)("p", {
                style: { marginTop: 16 },
                children: (0, r.jsx)("button", {
                  type: "button",
                  className: "link",
                  onClick: () => n("atendimentos"),
                  children: "Ver todos os profissionais",
                }),
              }),
            ],
          }),
        (0, r.jsxs)("div", {
          className: "secao",
          children: [
            (0, r.jsx)("h2", {
              id: "feed-h",
              children:
                o === "voluntario" ? "Para voc\xEA responder" : "Para voc\xEA",
            }),
            (0, r.jsx)("p", {
              className: "secao-sub",
              children:
                o === "voluntario"
                  ? "Os temas em que a sua \xE1rea mais ajuda."
                  : "Os conte\xFAdos mais \xFAteis, de acordo com as suas respostas.",
            }),
            (0, r.jsx)("ul", {
              className: "lista feed",
              "aria-labelledby": "feed-h",
              children: I.map((f, u) =>
                (0, r.jsx)(
                  "li",
                  {
                    style: { "--i": u },
                    children: (0, r.jsxs)("button", {
                      type: "button",
                      className: "linha",
                      onClick: f.go,
                      children: [
                        (0, r.jsxs)("span", {
                          className: "linha-texto",
                          children: [
                            (0, r.jsx)("span", {
                              className: "linha-titulo",
                              children: f.titulo,
                            }),
                            (0, r.jsxs)("span", {
                              className: "apoio linha-meta",
                              children: [f.tipo, ". ", f.meta],
                            }),
                            (0, r.jsx)("span", {
                              className: "apoio linha-meta",
                              style: { color: "var(--texto)", fontWeight: 600 },
                              children: f.motivo,
                            }),
                          ],
                        }),
                        (0, r.jsx)("span", {
                          className: "linha-fim",
                          children: (0, r.jsx)(la, { n: "avancar", size: 24 }),
                        }),
                      ],
                    }),
                  },
                  f.k,
                ),
              ),
            }),
          ],
        }),
        (0, r.jsxs)("p", {
          className: "apoio medida",
          style: { marginTop: 56, fontSize: 18, color: "var(--texto)" },
          children: [
            "Em risco de vida, ligue 192. ",
            (0, r.jsx)("button", {
              type: "button",
              className: "link",
              onClick: () => n("ajuda"),
              children: "Ver telefones e orienta\xE7\xF5es",
            }),
          ],
        }),
      ],
    });
  }
  var jS = [
    {
      id: "claro",
      rotulo: "Claro",
      sub: "Fundo claro. \xC9 o tema padr\xE3o.",
    },
    {
      id: "escuro",
      rotulo: "Escuro",
      sub: "Fundo escuro, que cansa menos a vista \xE0 noite ou com pouca luz.",
    },
    {
      id: "alto-contraste",
      rotulo: "Alto contraste",
      sub: "Preto no branco, com bordas grossas. Para quem enxerga pouco.",
    },
  ];
  function XS({
    usuario: a,
    setUsuario: o,
    diag: e,
    papel: t,
    tema: n,
    setTema: l,
    refazer: s,
    sair: i,
  }) {
    let [c, m] = (0, L.useState)(a.nome),
      [I, f] = (0, L.useState)(!1),
      [u, g] = (0, L.useState)(""),
      v = (y) => {
        if ((y.preventDefault(), !c.trim()))
          return g("Falta o nome. Exemplo: Marina");
        (g(""), o({ ...a, nome: c.trim() }), f(!0));
      },
      A = (y, h) =>
        h
          .map((p) => y.find((d) => d.id === p)?.rotulo)
          .filter(Boolean)
          .join(", ") || "N\xE3o informado";
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca",
          style: { marginBottom: 40 },
          children: [
            (0, r.jsx)("h1", { tabIndex: -1, children: "Perfil" }),
            (0, r.jsx)("p", {
              className: "lead",
              children:
                "Ajuste o seu nome, o que o zElo mostra primeiro e o tema de cor.",
            }),
          ],
        }),
        (0, r.jsxs)("div", {
          className: "perfil-bloco",
          children: [
            (0, r.jsx)("h2", { children: "Seus dados" }),
            (0, r.jsxs)("form", {
              onSubmit: v,
              noValidate: !0,
              children: [
                (0, r.jsx)(Za, {
                  id: "p-nome",
                  rotulo: "Nome",
                  value: c,
                  onChange: (y) => {
                    (m(y.target.value), f(!1), u && g(""));
                  },
                  erro: u,
                }),
                (0, r.jsx)(Za, {
                  id: "p-email",
                  rotulo: (0, r.jsxs)("span", {
                    className: "rotulo-bloqueado",
                    children: [(0, r.jsx)(la, { n: "cadeado", size: 18 }), "E-mail (n\xE3o pode ser editado aqui)"],
                  }),
                  value: a.email,
                  readOnly: !0,
                  "aria-readonly": "true",
                  ajuda:
                    "Para trocar o e-mail, pe\xE7a pelo chat. A equipe confere e faz a troca.",
                }),
                I &&
                  (0, r.jsx)("div", {
                    className: "alerta-bloco",
                    children: (0, r.jsx)(Do, {
                      tipo: "ok",
                      children: "Altera\xE7\xF5es salvas.",
                    }),
                  }),
                (0, r.jsx)(ia, {
                  type: "submit",
                  children: "Salvar altera\xE7\xF5es",
                }),
              ],
            }),
          ],
        }),
        t !== "voluntario" &&
          (0, r.jsxs)("div", {
            className: "perfil-bloco",
            children: [
              (0, r.jsx)("h2", {
                children: "Prefer\xEAncias do diagn\xF3stico",
              }),
              (0, r.jsxs)("dl", {
                children: [
                  (0, r.jsxs)("div", {
                    className: "pref-linha",
                    children: [
                      (0, r.jsx)("dt", { children: "Tipo de defici\xEAncia" }),
                      (0, r.jsx)("dd", {
                        children:
                          A(Em, e.tipo || []),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "pref-linha",
                    children: [
                      (0, r.jsx)("dt", { children: "\xC1reas de sa\xFAde" }),
                      (0, r.jsx)("dd", { children: A(El, e.direcionamento) }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "pref-linha",
                    children: [
                      (0, r.jsx)("dt", { children: "Especificidades" }),
                      (0, r.jsx)("dd", { children: A(Lm, e.especificidades) }),
                    ],
                  }),

                ],
              }),
              (0, r.jsx)("p", {
                style: { marginTop: 16 },
                children: (0, r.jsx)("button", {
                  type: "button",
                  className: "link",
                  onClick: s,
                  children: "Refazer as perguntas",
                }),
              }),
            ],
          }),
        (0, r.jsxs)("div", {
          className: "perfil-bloco",
          children: [
            (0, r.jsx)("h2", { id: "tema-h", children: "Customiza\xE7\xE3o" }),
            (0, r.jsx)("p", {
              className: "secao-sub",
              style: { marginBottom: 16 },
              children:
                "Escolha um tema. A mudan\xE7a aparece na hora, em toda a tela.",
            }),
            (0, r.jsx)(Tm, {
              itens: jS,
              valor: n,
              onChange: l,
              rotulo: "Tema de cor",
            }),
            (0, r.jsxs)("div", {
              className: "previa",
              "aria-label": "Pr\xE9via do tema escolhido",
              role: "group",
              children: [
                (0, r.jsx)("p", { className: "previa-rotulo", children: "Pr\xE9via do tema" }),
                (0, r.jsx)("p", { children: "Assim ficam os textos, as etiquetas e os bot\xF5es." }),
                (0, r.jsxs)("div", {
                  className: "previa-linha",
                  children: [
                    (0, r.jsx)(Bo, { forte: !0, children: "Online agora" }),
                    (0, r.jsx)(Bo, { children: "Rotina" }),
                    (0, r.jsx)("span", { className: "btn btn--peq", "aria-hidden": "true", children: "Bot\xE3o" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, r.jsx)("div", {
          className: "perfil-bloco",
          children: (0, r.jsx)(ia, {
            sec: !0,
            onClick: i,
            children: "Sair do zElo",
          }),
        }),
      ],
    });
  }
  var xrPadrao = [
      "Tenho uma d\xFAvida sobre o sono",
      "Tenho uma d\xFAvida sobre a alimenta\xE7\xE3o",
      "Estou sem energia hoje",
      "Quero falar com um profissional",
    ],
    xr = xrPadrao,
    zAtalhoDir = {
      emocional: "Tenho uma d\xFAvida sobre crises e comportamento",
      comunicacao: "Tenho uma d\xFAvida sobre comunica\xE7\xE3o",
      rotina: "Tenho uma d\xFAvida sobre o sono",
      cuidador: "Estou sem energia hoje",
      mobilidade: "Tenho uma d\xFAvida sobre dor e postura",
      terapias: "Tenho uma d\xFAvida sobre terapias",
    };
  function zAtalhos(diag) {
    let d = (diag && diag.direcionamento) || [];
    if (!d.length) return xrPadrao;
    let l = [];
    (d.forEach((k) => {
      let t = zAtalhoDir[k];
      t && !l.includes(t) && l.push(t);
    }),
      d.includes("rotina") && l.push("Tenho uma d\xFAvida sobre a alimenta\xE7\xE3o"));
    return [...l.slice(0, 3), "S\xF3 quero conversar", "Quero falar com um profissional"];
  }
  var O2 = {
      sono: [
        "1. Mantenha hor\xE1rios parecidos para dormir e acordar, inclusive no fim de semana.",
        "2. Diminua luz, telas e barulho uma hora antes de dormir. Repita sempre a mesma sequ\xEAncia.",
        "3. Anote por duas semanas a hora de dormir e os despertares. Se n\xE3o melhorar, leve o registro a um profissional.",
      ],
      alimentacao: [
        "1. Sente a pessoa com as costas retas e os p\xE9s apoiados, em um lugar calmo e sem televis\xE3o.",
        "2. Ofere\xE7a pequenas por\xE7\xF5es, devagar, e espere engolir antes da pr\xF3xima.",
        "3. Se houver tosse ou engasgo repetido nas refei\xE7\xF5es, pe\xE7a avalia\xE7\xE3o de um fonoaudi\xF3logo. Se a pessoa n\xE3o consegue respirar, ligue 192.",
      ],
      crises: [
        "1. Antes: repare no que vem antes da crise. Fome, cansa\xE7o, barulho ou troca de atividade costumam pesar.",
        "2. Durante: fale pouco e devagar, leve a pessoa para um lugar quieto e afaste o que pode machucar.",
        "3. Depois: cuide de voc\xEA tamb\xE9m. Se as crises aumentarem, converse com um psic\xF3logo.",
      ],
      comunicacao: [
        "1. Comece com quatro ou cinco figuras do que a pessoa mais pede: \xE1gua, comida, banheiro, brincar.",
        "2. Aponte a figura enquanto fala a palavra. A pessoa aprende vendo voc\xEA usar.",
        "3. Quando ela apontar, atenda logo. Assim ela entende que funciona. Um fonoaudi\xF3logo pode montar a prancha com voc\xEAs.",
      ],
      dor: [
        "1. Observe o que mudou: choro, recusa de comida, corpo mais r\xEDgido ou outra postura podem indicar dor.",
        "2. Anote quando acontece, o que a pessoa fazia e o que aliviou.",
        "3. Dor nova ou que n\xE3o passa merece avalia\xE7\xE3o. Um fisioterapeuta pode orientar a postura em casa.",
      ],
    },
    zLinkAtend = { rotulo: "Abrir Atendimentos", tela: "atendimentos" },
    zLinkDicas = { rotulo: "Abrir Dicas", tela: "dicas" },
    zLink192 = { rotulo: "Ver telefones de emerg\xEAncia", tela: "ajuda" },
    Ll = (a) =>
      a
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "");
  var zPedidoResposta = {
    texto:
      "Seu pedido foi para a equipe de acolhimento do zElo, que responde aqui no chat. Enquanto isso, me conte em poucas palavras o que est\xE1 acontecendo. Se algu\xE9m corre risco de vida, ligue 192.",
    links: [zLink192],
    opcoes: [],
    ctx: { f: "conversa", n: 0 },
  };
  var zRotuloTela = {
    atendimentos: "Abrir Atendimentos",
    forum: "Abrir F\xF3rum",
    dicas: "Abrir Dicas",
    ajuda: "Ver telefones de emerg\xEAncia",
    perfil: "Abrir Perfil",
  };
  function zLinks(l) {
    return (l || []).map((t) => ({ rotulo: zRotuloTela[t], tela: t }));
  }
  function zPrimeira(p) {
    return p.charAt(0).toUpperCase() + p.slice(1) + (/[?]$/.test(p) ? "" : /^(como|qual|quais|o que|onde|quando|quem|posso|tem|ele|a |os |meu|precisa|e |\xE9 )/i.test(p) ? "?" : "");
  }
  function YS(a, o) {
    let e = Ll(a),
      conversa = o && o.f === "conversa",
      ctxC = conversa ? { f: "conversa", n: o.n + 1 } : null;
    if (
      /suicid|me matar|quero morrer|nao respira|sem respirar|convulsionando|esta convulsionando|desmaiou|sangrando muito|engasgou|ficou roxo/.test(
        e,
      )
    )
      return {
        texto:
          "Isso pode ser uma emerg\xEAncia. Se h\xE1 risco de vida, ligue agora para o SAMU, no 192. Eu continuo aqui com voc\xEA.",
        links: [zLink192],
        opcoes: ["Continuar conversando"],
        ctx: { f: "conversa", n: 1 },
      };
    if (/pedir ajuda/.test(e)) return zPedidoResposta;
    if (/continuar conversando/.test(e))
      return {
        texto: "Estou aqui. Pode escrever do seu jeito, sem pressa.",
        opcoes: [],
        ctx: { f: "conversa", n: 0 },
      };
    if (/^(oi+|ola|bom dia|boa tarde|boa noite|e ai|opa|hey)[\s!.]*$/.test(e))
      return {
        texto: "Oi. Pode me perguntar sobre o cuidado do dia a dia ou sobre como usar o zElo. Se preferir, a gente s\xF3 conversa.",
        opcoes: xr,
        ctx: null,
      };
    if (/^(agora nao|entendi|ok|voltar ao inicio|nao quero)$/.test(e))
      return {
        texto: "Tudo bem. Quando quiser, escolha uma op\xE7\xE3o ou escreva do seu jeito.",
        opcoes: xr,
        ctx: null,
      };
    let r = zAna.buscar(a),
      m = r.melhor;
    if (m && m.pts >= (conversa ? 0.5 : 0.4))
      return {
        texto: m.e.resposta,
        links: zLinks(m.e.links),
        opcoes: m.e.sugestoes || (conversa ? [] : []),
        ctx: m.e.id === "so-conversar" ? { f: "conversa", n: 0 } : ctxC,
      };
    if (conversa) {
      let n = o.n + 1,
        oferecer = n >= 2,
        resp =
          /cansad|exaust|sem energia|nao aguento|esgotad/.test(e)
            ? "Cuidar o tempo todo cansa mesmo, e faz sentido voc\xEA estar assim. Teve algum momento hoje s\xF3 para voc\xEA, nem que seja curto?"
            : /trist|chor|deprimid|desanim/.test(e)
              ? "Sinto muito que hoje esteja pesado. Chorar tamb\xE9m \xE9 um jeito de aliviar. O que deixou o dia mais dif\xEDcil?"
              : /medo|preocup|ansios|nervos|insegur/.test(e)
                ? "\xC9 natural sentir medo quando a gente cuida de algu\xE9m que ama. O que mais te preocupa agora?"
                : /sozinh|ninguem|abandon/.test(e)
                  ? "Voc\xEA n\xE3o est\xE1 s\xF3. Aqui no zElo h\xE1 outras fam\xEDlias que passam por coisas parecidas. Quer me contar mais?"
                  : /grit|crise|agressiv|bate|se joga|birra/.test(e)
                    ? "Isso \xE9 dif\xEDcil de viver, e voc\xEA n\xE3o est\xE1 fazendo nada errado por n\xE3o saber. Na hora, ajuda falar pouco e levar a pessoa para um lugar mais quieto. Quer continuar me contando?"
                    : n === 1
                      ? "Obrigada por me contar. Estou ouvindo. Quer falar mais sobre isso?"
                      : "Entendo. Isso \xE9 muita coisa para carregar. Estou aqui com voc\xEA.";
      return {
        texto: resp,
        opcoes: oferecer
          ? ["Continuar conversando", "Quero falar com um profissional", "Ver dicas para quem cuida"]
          : [],
        ctx: { f: "conversa", n },
        extra: oferecer
          ? "Se quiser, posso te mostrar outros caminhos. Ou podemos continuar s\xF3 conversando."
          : null,
      };
    }
    let perto = r.lista.filter((x) => x.pts >= 0.3).slice(0, 3);
    if (perto.length)
      return {
        texto:
          "N\xE3o tenho certeza se entendi. Voc\xEA quis perguntar alguma destas?",
        opcoes: perto.map((x) => zPrimeira(x.e.perguntas[0])),
        ctx: null,
      };
    return {
      texto:
        "Ainda n\xE3o sei responder isso. Eu s\xF3 sei o que est\xE1 na base do zElo, e essa pergunta n\xE3o est\xE1 l\xE1. Voc\xEA pode perguntar no F\xF3rum ou falar com um profissional.",
      links: zLinks(["forum", "atendimentos"]),
      opcoes: xr,
      ctx: null,
    };
  }
  function Mm(a) {
    let o = 12 + a;
    return `09:${String(o).padStart(2, "0")}`;
  }
  function QS({ usuario: a, chat: o, setChat: e, irPara: ir }) {
    let [t, n] = (0, L.useState)(""),
      [l, s] = (0, L.useState)(!1),
      i = (0, L.useRef)(null),
      c = (0, L.useRef)(null),
      ops = o.opcoes || xr;
    ((0, L.useEffect)(() => () => clearTimeout(c.current), []),
      (0, L.useEffect)(() => {
        i.current?.scrollIntoView({ block: "end" });
      }, [o.msgs.length, l]));
    let m = (I) => {
      let f = I.trim();
      if (!f || l) return;
      if (/^ver dicas para quem cuida$/i.test(f)) return ir("dicas");
      let u = o.msgs.length,
        g = [...o.msgs, { de: "voce", texto: f, hora: Mm(u * 2) }];
      (e({ ...o, msgs: g, opcoes: [] }), n(""), s(!0));
      let v = YS(f, o.ctx);
      c.current = setTimeout(() => {
        let A = [{ de: "ana", texto: v.texto, hora: Mm(u * 2 + 1), links: v.extra ? void 0 : v.links }];
        (v.extra && A.push({ de: "ana", texto: v.extra, hora: Mm(u * 2 + 1), links: v.links }),
          e({ msgs: [...g, ...A], opcoes: v.opcoes, ctx: v.ctx }),
          s(!1));
      }, 900);
    };
    return (0, r.jsxs)("section", {
      className: "entra tela-chat",
      children: [
        (0, r.jsxs)("header", {
          className: "chat-topo",
          children: [
            (0, r.jsx)("span", { className: "avatar avatar--ana", "aria-hidden": "true", children: "A" }),
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("h1", { tabIndex: -1, children: "Ana" }),
                (0, r.jsxs)("p", {
                  className: "apoio",
                  children: "Assistente do zElo. Responde com a base de perguntas revisada pela equipe."
                }),
              ],
            }),
          ],
        }),
        (0, r.jsxs)("div", {
          className: "chat",
          children: [
            (0, r.jsxs)("p", {
              className: "chat-aviso",
              children: [
                (0, r.jsx)(la, { n: "cadeado", size: 16 }),
                " Conversa privada, n\xE3o aparece no f\xF3rum. Em emerg\xEAncia, ",
                (0, r.jsx)("button", {
                  type: "button",
                  className: "link link--perigo",
                  onClick: () => ir("ajuda"),
                  children: "ligue 192",
                }),
                ".",
              ],
            }),
            (0, r.jsxs)("div", {
              className: "chat-fluxo",
              role: "log",
              "aria-live": "polite",
              "aria-label": "Conversa com a Ana",
              children: [
                o.msgs.map((I, f) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: `msg msg--${I.de}${I.pedido ? " msg--pedido" : ""}`,
                      children: [
                        (0, r.jsx)("div", { className: "balao", children: I.texto }),
                        I.links &&
                          (0, r.jsx)("div", {
                            className: "msg-links",
                            children: I.links.map((k) =>
                              (0, r.jsxs)(
                                "button",
                                {
                                  type: "button",
                                  className: "msg-link",
                                  onClick: () => ir(k.tela),
                                  children: [k.rotulo, (0, r.jsx)(la, { n: "avancar", size: 18 })],
                                },
                                k.rotulo,
                              ),
                            ),
                          }),
                        (0, r.jsxs)("span", {
                          className: "apoio msg-meta",
                          children: [
                            I.de === "ana" ? "Ana" : "Voc\xEA",
                            " \xB7 ",
                            I.hora,
                            I.de === "voce" && o.msgs[f + 1] ? " \xB7 Lida" : "",
                          ],
                        }),
                      ],
                    },
                    f,
                  ),
                ),
                l &&
                  (0, r.jsx)("div", {
                    className: "msg msg--ana",
                    children: (0, r.jsx)("div", {
                      className: "balao balao--digitando",
                      children: "Ana est\xE1 procurando a resposta",
                    }),
                  }),
                (0, r.jsx)("div", { ref: i }),
              ],
            }),
            ops.length > 0 &&
              !l &&
              (0, r.jsx)("div", {
                className: "respostas-rapidas",
                role: "group",
                "aria-label": "Respostas sugeridas",
                children: ops.map((I) =>
                  (0, r.jsx)("button", { type: "button", className: "chip", onClick: () => m(I), children: I }, I),
                ),
              }),
            (0, r.jsx)("form", {
              className: "chat-form",
              onSubmit: (I) => {
                (I.preventDefault(), m(t));
              },
              children: (0, r.jsxs)("div", {
                className: "chat-form-linha",
                children: [
                  (0, r.jsx)("label", { htmlFor: "msg", className: "so-leitor", children: "Escreva sua mensagem" }),
                  (0, r.jsx)("input", {
                    id: "msg",
                    className: "campo-entrada chat-entrada",
                    placeholder: "Escreva do seu jeito...",
                    value: t,
                    onChange: (I) => n(I.target.value),
                    autoComplete: "off",
                  }),
                  (0, r.jsx)("button", {
                    type: "submit",
                    className: "chat-enviar",
                    disabled: !t.trim() || l,
                    "aria-label": "Enviar",
                    children: (0, r.jsx)(la, { n: "enviar", size: 22 }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  }
  function U2({ t: a }) {
    return (0, r.jsxs)(r.Fragment, {
      children: [
        a.autor,
        " \xB7 ",
        a.cidade,
        " \xB7 ",
        a.quando,
        " \xB7 ",
        (0, r.jsxs)("span", {
          className: "contagem",
          children: [
            a.respostas.length,
            " ",
            a.respostas.length === 1 ? "resposta" : "respostas",
          ],
        }),
      ],
    });
  }
  function x2({ t: a }) {
    return (0, r.jsx)("span", {
      className: "etiquetas",
      children: a.etiquetas.map((o) =>
        (0, r.jsx)(
          Bo,
          {
            forte: o === "Novo",
            icone: o === "Resolvido" ? "confirmar" : void 0,
            children: o,
          },
          o,
        ),
      ),
    });
  }
  function KS({ topicos: a, abrir: o, novo: e }) {
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca cabeca-linha",
          children: [
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("h1", {
                  tabIndex: -1,
                  children: "F\xF3rum",
                }),
                (0, r.jsx)("p", {
                  className: "lead",
                  style: { fontSize: 18 },
                  children:
                    "Conversas entre fam\xEDlias, pessoas com defici\xEAncia e profissionais, das mais recentes para as mais antigas.",
                }),
              ],
            }),
            (0, r.jsx)(ia, {
              icone: "adicionar",
              onClick: e,
              children: "Novo t\xF3pico",
            }),
          ],
        }),
        (0, r.jsx)("ul", {
          className: "lista",
          children: a.map((t) =>
            (0, r.jsx)(
              "li",
              {
                children: (0, r.jsxs)("button", {
                  type: "button",
                  className: "linha",
                  onClick: () => o(t.id),
                  children: [
                    (0, r.jsxs)("span", {
                      className: "linha-texto",
                      children: [
                        (0, r.jsx)("span", {
                          className: "linha-titulo",
                          children: t.titulo,
                        }),
                        (0, r.jsx)("span", {
                          className: "apoio topico-meta",
                          children: (0, r.jsx)(U2, { t }),
                        }),
                        (0, r.jsx)("span", {
                          className: "linha-etiquetas",
                          children: (0, r.jsx)(x2, { t }),
                        }),
                      ],
                    }),
                    (0, r.jsx)("span", {
                      className: "linha-fim",
                      children: (0, r.jsx)(la, { n: "avancar", size: 24 }),
                    }),
                  ],
                }),
              },
              t.id,
            ),
          ),
        }),
      ],
    });
  }
  function JS({ t: a, voltar: o, atualizar: e, usuario: t, papel: n }) {
    let [l, s] = (0, L.useState)(""),
      [i, c] = (0, L.useState)(null),
      [m, I] = (0, L.useState)(""),
      f = (0, L.useRef)(null),
      u = (y) =>
        e({
          ...a,
          respostas: a.respostas.map((h) =>
            h.id === y
              ? {
                  ...h,
                  meuApoio: !h.meuApoio,
                  apoio: h.apoio + (h.meuApoio ? -1 : 1),
                }
              : h,
          ),
        }),
      g = (y) => {
        let h = y === "apoio" ? "meuApoio" : "meuAjudou";
        e({ ...a, [h]: !a[h], [y]: a[y] + (a[h] ? -1 : 1) });
      },
      v = (y) => {
        if ((y.preventDefault(), !l.trim()))
          return I(
            "Falta escrever a resposta. Conte em poucas frases o que voc\xEA viveu ou sabe sobre o assunto.",
          );
        (I(""),
          e({
            ...a,
            respostas: [
              ...a.respostas,
              {
                id: `r${Date.now()}`,
                autor: t.nome,
                cidade: "Recife",
                quando: "agora",
                apoio: 0,
                texto: l.trim(),
                em: i,
                profissional: n === "voluntario",
              },
            ],
          }),
          s(""),
          c(null));
      },
      A = (y) => {
        (c(y.autor), f.current?.focus());
      };
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsx)(Ye, { onClick: o, children: "Voltar ao f\xF3rum" }),
        (0, r.jsxs)("article", {
          className: "post",
          children: [
            (0, r.jsx)("h1", { tabIndex: -1, children: a.titulo }),
            (0, r.jsx)("span", {
              className: "apoio post-meta",
              children: (0, r.jsx)(U2, { t: a }),
            }),
            (0, r.jsx)("div", {
              style: { marginTop: 12 },
              children: (0, r.jsx)(x2, { t: a }),
            }),
            (0, r.jsx)("div", {
              className: "leitura",
              style: { marginTop: 24 },
              children: (0, r.jsx)("p", { children: a.corpo }),
            }),
            (0, r.jsxs)("div", {
              className: "reacoes",
              children: [
                (0, r.jsxs)(ia, {
                  sec: !0,
                  peq: !0,
                  icone: "apoio",
                  "aria-pressed": !!a.meuApoio,
                  onClick: () => g("apoio"),
                  children: ["Apoiar (", a.apoio, ")"],
                }),
                (0, r.jsxs)(ia, {
                  sec: !0,
                  peq: !0,
                  icone: "confirmar",
                  "aria-pressed": !!a.meuAjudou,
                  onClick: () => g("ajudou"),
                  children: ["Me ajudou (", a.ajudou, ")"],
                }),
              ],
            }),
          ],
        }),
        (0, r.jsxs)("h2", {
          style: { marginTop: 48 },
          children: [
            a.respostas.length,
            " ",
            a.respostas.length === 1 ? "resposta" : "respostas",
          ],
        }),
        (0, r.jsx)("ul", {
          children: a.respostas.map((y) =>
            (0, r.jsxs)(
              "li",
              {
                className: "resposta",
                children: [
                  (0, r.jsxs)("span", {
                    className: "apoio",
                    children: [
                      (0, r.jsx)("b", {
                        style: { color: "var(--texto)" },
                        children: y.autor,
                      }),
                      " \xB7 ",
                      y.cidade,
                      " \xB7 ",
                      y.quando,
                      y.profissional &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            " ",
                            (0, r.jsx)(Bo, {
                              forte: !0,
                              icone: "elo",
                              children: "Verificado",
                            }),
                          ],
                        }),
                    ],
                  }),
                  y.em &&
                    (0, r.jsxs)("span", {
                      className: "apoio resposta-em",
                      children: ["Em resposta a ", y.em],
                    }),
                  (0, r.jsx)("p", { children: y.texto }),
                  (0, r.jsxs)("div", {
                    className: "acoes-resposta",
                    children: [
                      (0, r.jsxs)("button", {
                        type: "button",
                        className: "acao-texto",
                        "aria-pressed": !!y.meuApoio,
                        onClick: () => u(y.id),
                        children: [
                          (0, r.jsx)(la, { n: "apoio", size: 20 }),
                          "Apoiar (",
                          y.apoio,
                          ")",
                        ],
                      }),
                      (0, r.jsxs)("button", {
                        type: "button",
                        className: "acao-texto",
                        onClick: () => A(y),
                        children: [
                          (0, r.jsx)(la, { n: "conversa", size: 20 }),
                          "Responder",
                        ],
                      }),
                    ],
                  }),
                ],
              },
              y.id,
            ),
          ),
        }),
        (0, r.jsxs)("form", {
          className: "composer",
          onSubmit: v,
          noValidate: !0,
          children: [
            (0, r.jsx)("h2", {
              className: "composer-titulo",
              children: "Sua resposta",
            }),
            i &&
              (0, r.jsxs)("div", {
                className: "contexto-resposta",
                children: [
                  (0, r.jsxs)("span", {
                    children: [
                      "Respondendo a ",
                      (0, r.jsx)("b", { children: i }),
                    ],
                  }),
                  (0, r.jsx)("button", {
                    type: "button",
                    className: "link",
                    onClick: () => c(null),
                    children: "Cancelar",
                  }),
                ],
              }),
            (0, r.jsx)(Za, {
              id: "resp",
              como: "textarea",
              rotulo: "Escreva o que voc\xEA viveu ou sabe",
              ref: f,
              value: l,
              onChange: (y) => (s(y.target.value), m && I("")),
              erro: m,
            }),
            (0, r.jsx)(ia, {
              type: "submit",
              icone: "enviar",
              children: "Enviar resposta",
            }),
          ],
        }),
      ],
    });
  }
  function WS({ voltar: a, publicar: o }) {
    let [e, t] = (0, L.useState)({ titulo: "", dir: "", corpo: "" }),
      [n, l] = (0, L.useState)({});
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsx)(Ye, { onClick: a, children: "Voltar ao f\xF3rum" }),
        (0, r.jsxs)("header", {
          className: "cabeca",
          style: { marginBottom: 32 },
          children: [
            (0, r.jsx)("h1", { tabIndex: -1, children: "Novo t\xF3pico" }),
            (0, r.jsx)("p", {
              className: "lead",
              style: { fontSize: 18 },
              children:
                "Pergunte ou conte uma experi\xEAncia. N\xE3o publique exames, documentos ou dados que identifiquem a pessoa.",
            }),
          ],
        }),
        (0, r.jsxs)("form", {
          onSubmit: (i) => {
            i.preventDefault();
            let c = {};
            (e.titulo.trim() ||
              (c.titulo =
                "Falta o t\xEDtulo. Exemplo: O que ajuda a dormir melhor?"),
              e.dir || (c.dir = "Escolha um assunto na lista."),
              e.corpo.trim() ||
                (c.corpo =
                  "Falta contar o que aconteceu. Duas ou tr\xEAs frases bastam."),
              l(c),
              Object.keys(c).length ? Or() : o(e));
          },
          noValidate: !0,
          style: { maxWidth: 760 },
          children: [
            (0, r.jsx)(Za, {
              id: "n-titulo",
              rotulo: "T\xEDtulo",
              value: e.titulo,
              onChange: (i) => (t({ ...e, titulo: i.target.value }), n.titulo && l({ ...n, titulo: void 0 })),
              erro: n.titulo,
            }),
            (0, r.jsxs)(Za, {
              id: "n-dir",
              rotulo: "Assunto",
              como: "select",
              value: e.dir,
              onChange: (i) => (t({ ...e, dir: i.target.value }), n.dir && l({ ...n, dir: void 0 })),
              erro: n.dir,
              children: [
                (0, r.jsx)("option", {
                  value: "",
                  children: "Escolha um assunto",
                }),
                El.map((i) =>
                  (0, r.jsx)(
                    "option",
                    { value: i.id, children: i.rotulo },
                    i.id,
                  ),
                ),
              ],
            }),
            (0, r.jsx)(Za, {
              id: "n-corpo",
              como: "textarea",
              rotulo: "O que voc\xEA quer contar ou perguntar",
              value: e.corpo,
              onChange: (i) => (t({ ...e, corpo: i.target.value }), n.corpo && l({ ...n, corpo: void 0 })),
              erro: n.corpo,
            }),
            (0, r.jsx)(ia, {
              type: "submit",
              icone: "enviar",
              children: "Publicar t\xF3pico",
            }),
          ],
        }),
      ],
    });
  }
  function $S({ abrir: a, irPara: ir }) {
    let [o, e] = (0, L.useState)(""),
      [t, n] = (0, L.useState)("Todas"),
      l = zr.filter(
        (s) =>
          (t === "Todas" || s.area === t) &&
          (!o.trim() ||
            Ll(`${s.titulo} ${s.autor} ${s.area} ${s.secoes.flat().join(" ")}`).includes(Ll(o.trim()))),
      ),
      urg = /convuls|emergen|samu|192|desmai|engasg|nao respira|sangr|queda|caiu/.test(Ll(o));
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca",
          style: { marginBottom: 32 },
          children: [
            (0, r.jsx)("h1", {
              tabIndex: -1,
              children: "Dicas de profissionais",
            }),
            (0, r.jsx)("p", {
              className: "lead",
              style: { fontSize: 18 },
              children: "Materiais prontos, escritos para quem cuida.",
            }),
          ],
        }),
        (0, r.jsx)("div", {
          className: "busca",
          children: (0, r.jsx)(Za, {
            id: "busca",
            rotulo: "Buscar dicas",
            value: o,
            onChange: (s) => e(s.target.value),
            autoComplete: "off",
          }),
        }),
        (0, r.jsx)("div", {
          className: "filtros",
          role: "group",
          "aria-label": "Filtrar por \xE1rea",
          children: ["Todas", ...Rr].map((s) =>
            (0, r.jsx)(
              ia,
              {
                sec: !0,
                peq: !0,
                "aria-pressed": t === s,
                onClick: () => n(s),
                icone: t === s ? "confirmar" : void 0,
                children: s,
              },
              s,
            ),
          ),
        }),
        urg &&
          (0, r.jsxs)("button", {
            type: "button",
            className: "cartao-urgente",
            onClick: () => ir("ajuda"),
            children: [
              (0, r.jsx)(la, { n: "telefone", size: 24 }),
              (0, r.jsxs)("span", {
                children: [
                  (0, r.jsx)("b", { children: "\xC9 uma emerg\xEAncia?" }),
                  (0, r.jsx)("span", { children: "Veja o que fazer agora e ligue 192 (SAMU)." }),
                ],
              }),
              (0, r.jsx)(la, { n: "avancar", size: 22 }),
            ],
          }),
        l.length
          ? (0, r.jsx)("ul", {
              className: "lista",
              children: l.map((s) =>
                (0, r.jsx)(
                  "li",
                  {
                    children: (0, r.jsxs)("button", {
                      type: "button",
                      className: "linha",
                      onClick: () => a(s.id),
                      children: [
                        (0, r.jsxs)("span", {
                          className: "linha-texto",
                          children: [
                            (0, r.jsx)("span", {
                              className: "linha-titulo",
                              children: s.titulo,
                            }),
                            (0, r.jsxs)("span", {
                              className: "apoio linha-meta",
                              children: [s.autor, " \xB7 leitura de ", s.tempo],
                            }),
                            (0, r.jsx)("span", {
                              className: "linha-etiquetas",
                              children: (0, r.jsx)(Bo, { children: s.area }),
                            }),
                          ],
                        }),
                        (0, r.jsx)("span", {
                          className: "linha-fim",
                          children: (0, r.jsx)(la, { n: "avancar", size: 24 }),
                        }),
                      ],
                    }),
                  },
                  s.id,
                ),
              ),
            })
          : (0, r.jsxs)("div", {
              className: "vazio",
              children: [
                (0, r.jsx)("h3", { children: "Nenhuma dica encontrada" }),
                (0, r.jsx)("p", {
                  children:
                    t === "Todas"
                      ? "Tente outra palavra, como sono, fala ou crise."
                      : "Tente outra palavra ou escolha Todas as \xE1reas.",
                }),
                t !== "Todas" &&
                  (0, r.jsx)("p", {
                    children: (0, r.jsx)("button", {
                      type: "button",
                      className: "link",
                      onClick: () => n("Todas"),
                      children: "Mostrar todas as \xE1reas",
                    }),
                  }),
              ],
            }),
      ],
    });
  }
  function a4({ d: a, voltar: o }) {
    return (0, r.jsxs)("section", {
      className: "entra artigo",
      children: [
        (0, r.jsx)(Ye, { onClick: o, children: "Voltar \xE0s dicas" }),
        (0, r.jsx)("h1", { tabIndex: -1, children: a.titulo }),
        (0, r.jsxs)("p", {
          className: "apoio",
          style: { marginBottom: 12 },
          children: [a.autor, " \xB7 ", a.area, " \xB7 leitura de ", a.tempo],
        }),
        (0, r.jsx)("div", {
          style: { marginBottom: 24 },
          children: (0, r.jsx)(Bo, { children: a.area }),
        }),
        (0, r.jsx)("div", {
          className: "leitura",
          children: a.secoes.map(([e, t]) =>
            (0, r.jsxs)(
              L.default.Fragment,
              {
                children: [
                  (0, r.jsx)("h2", { children: e }),
                  (0, r.jsx)("p", { children: t }),
                ],
              },
              e,
            ),
          ),
        }),
        (0, r.jsx)("div", {
          style: { marginTop: 24 },
          children: (0, r.jsx)(Do, {
            tipo: "aviso",
            children: "Isto n\xE3o substitui um profissional de sa\xFAde.",
          }),
        }),
      ],
    });
  }
  function o4({
    agenda: a,
    tab: o,
    setTab: e,
    abrirProf: t,
    cancelar: n,
    confirmado: l,
  }) {
    let [s, i] = (0, L.useState)(""),
      [c, m] = (0, L.useState)("Todas"),
      I = At.filter(
        (f) =>
          (c === "Todas" || f.area === c) &&
          (!s.trim() ||
            Ll(`${f.nome} ${f.area} ${f.foco}`).includes(Ll(s.trim()))),
      );
    return (0, r.jsxs)("section", {
      className: "entra",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca",
          style: { marginBottom: 24 },
          children: [
            (0, r.jsx)("h1", {
              tabIndex: -1,
              children: "Atendimentos e consultas",
            }),
            (0, r.jsx)("p", {
              className: "lead",
              style: { fontSize: 18 },
              children:
                "Fale, sem custo, com profissionais volunt\xE1rios verificados da sa\xFAde.",
            }),
          ],
        }),
        l &&
          (0, r.jsx)("div", {
            className: "alerta-bloco",
            children: (0, r.jsx)(Do, {
              tipo: "ok",
              children:
                "Atendimento marcado. Enviamos um lembrete para o seu e-mail.",
            }),
          }),
        (0, r.jsxs)("div", {
          className: "abas",
          role: "tablist",
          "aria-label": "Atendimentos",
          children: [
            (0, r.jsx)("button", {
              type: "button",
              role: "tab",
              id: "aba-buscar",
              "aria-selected": o === "buscar",
              "aria-controls": "painel-atend",
              className: "aba",
              onClick: () => e("buscar"),
              children: "Buscar especialistas",
            }),
            (0, r.jsxs)("button", {
              type: "button",
              role: "tab",
              id: "aba-meus",
              "aria-selected": o === "meus",
              "aria-controls": "painel-atend",
              className: "aba",
              onClick: () => e("meus"),
              children: [
                "Meus agendamentos ",
                a.length > 0 &&
                  (0, r.jsxs)("span", {
                    className: "contador aba-contador",
                    children: [
                      (0, r.jsx)("span", {
                        "aria-hidden": "true",
                        children: a.length,
                      }),
                      (0, r.jsxs)("span", {
                        className: "so-leitor",
                        children: [a.length, " marcados"],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        (0, r.jsx)("div", {
          id: "painel-atend",
          role: "tabpanel",
          "aria-labelledby": o === "buscar" ? "aba-buscar" : "aba-meus",
          children:
            o === "buscar"
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className: "busca",
                      style: { marginTop: 32 },
                      children: (0, r.jsx)(Za, {
                        id: "busca-prof",
                        rotulo: "Buscar por nome ou especialidade",
                        value: s,
                        onChange: (f) => i(f.target.value),
                        autoComplete: "off",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "filtros",
                      role: "group",
                      "aria-label": "Filtrar por \xE1rea",
                      children: ["Todas", ...Rr].map((f) =>
                        (0, r.jsx)(
                          ia,
                          {
                            sec: !0,
                            peq: !0,
                            "aria-pressed": c === f,
                            onClick: () => m(f),
                            icone: c === f ? "confirmar" : void 0,
                            children: f === "Todas" ? "Todas as \xE1reas" : f,
                          },
                          f,
                        ),
                      ),
                    }),
                    I.length
                      ? (0, r.jsx)("ul", {
                          className: "lista profs",
                          children: I.map((f) => {
                            let u = M2(f, a);
                            return (0, r.jsxs)(
                              "li",
                              {
                                className: "prof",
                                children: [
                                  (0, r.jsx)(qr, { p: f }),
                                  (0, r.jsxs)("div", {
                                    className: "prof-corpo",
                                    children: [
                                      (0, r.jsxs)("h3", {
                                        className: "prof-nome",
                                        children: [
                                          f.nome,
                                          (0, r.jsxs)("span", {
                                            className: "etiquetas",
                                            children: [
                                              (0, r.jsx)(Bo, {
                                                icone: "elo",
                                                children: "Verificado",
                                              }),
                                              f.agora &&
                                                (0, r.jsx)(Bo, {
                                                  forte: !0,
                                                  children: "Online agora",
                                                }),
                                              a.some((x) => x.profId === f.id) &&
                                                (0, r.jsx)(Bo, {
                                                  icone: "calendario",
                                                  children: "J\xE1 agendado",
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("p", {
                                        className: "prof-foco",
                                        children: [f.area, ": ", f.foco],
                                      }),
                                      (0, r.jsxs)("p", {
                                        className: "apoio prof-meta",
                                        children: [
                                          f.registro,
                                          " \xB7 ",
                                          f.onde,
                                        ],
                                      }),
                                      (0, r.jsx)("p", {
                                        className: "prof-bio",
                                        children: f.bio,
                                      }),
                                      (0, r.jsxs)("p", {
                                        className: "prof-dias",
                                        children: [
                                          (0, r.jsx)("b", {
                                            children: "Dias de atendimento:",
                                          }),
                                          " ",
                                          f.dias.join(", "),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "prof-acao",
                                    children: [
                                      (0, r.jsxs)("p", {
                                        className: "prof-abertos",
                                        children: [
                                          "Hor\xE1rios abertos",
                                          (0, r.jsx)("br", {}),
                                          (0, r.jsxs)("b", {
                                            children: [
                                              u,
                                              " ",
                                              u === 1
                                                ? "op\xE7\xE3o"
                                                : "op\xE7\xF5es",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(ia, {
                                        sec: !0,
                                        peq: !0,
                                        icone: "calendario",
                                        disabled: u === 0,
                                        "aria-disabled": u === 0,
                                        onClick: () => u > 0 && t(f.id),
                                        children: "Agendar consulta",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              f.id,
                            );
                          }),
                        })
                      : (0, r.jsxs)("div", {
                          className: "vazio",
                          children: [
                            (0, r.jsx)("h3", {
                              children: "Nenhum profissional encontrado",
                            }),
                            (0, r.jsx)("p", {
                              children:
                                c === "Todas"
                                  ? "Tente outra palavra, como fono, psicologia ou sono."
                                  : "Tente outra palavra ou escolha Todas as \xE1reas.",
                            }),
                          ],
                        }),
                  ],
                })
              : a.length
                ? (0, r.jsx)("ul", {
                    className: "lista",
                    style: { marginTop: 32 },
                    children: zSort(a).map((f) =>
                      (0, r.jsx)(
                        "li",
                        {
                          children: (0, r.jsxs)("div", {
                            className: "linha",
                            style: { cursor: "default" },
                            children: [
                              (0, r.jsx)(qr, { p: f.prof }),
                              (0, r.jsxs)("span", {
                                className: "linha-texto",
                                children: [
                                  (0, r.jsxs)("span", {
                                    className: "linha-titulo",
                                    children: [
                                      f.prof.area,
                                      " com ",
                                      f.prof.nome,
                                    ],
                                  }),
                                  (0, r.jsxs)("span", {
                                    className: "apoio linha-meta",
                                    style: {
                                      color: "var(--texto)",
                                      fontSize: 18,
                                    },
                                    children: [f.dia, ", \xE0s ", f.hora],
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "apoio linha-meta",
                                    children: f.onde || f.prof.onde,
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "linha-etiquetas",
                                    children: (0, r.jsx)("button", {
                                      type: "button",
                                      className: "link",
                                      onClick: () => n(f),
                                      children: "Cancelar agendamento",
                                    }),
                                  }),
                                ],
                              }),
                              (0, r.jsx)(Bo, {
                                forte: !0,
                                icone: "confirmar",
                                children: "Confirmado",
                              }),
                            ],
                          }),
                        },
                        `${f.profId}${f.diaId}${f.hora}`,
                      ),
                    ),
                  })
                : (0, r.jsxs)("div", {
                    className: "vazio",
                    style: { marginTop: 32 },
                    children: [
                      (0, r.jsx)("h3", {
                        children:
                          "Voc\xEA ainda n\xE3o tem atendimentos marcados",
                      }),
                      (0, r.jsx)("p", {
                        children:
                          "Use Buscar especialistas para escolher um profissional e um hor\xE1rio.",
                      }),
                    ],
                  }),
        }),
      ],
    });
  }
  function e4({
    prof: a,
    agenda: o,
    passo: e,
    setPasso: t,
    sel: n,
    setSel: l,
    sair: s,
    confirmar: i,
  }) {
    let c = Ur(a, o),
      m = c.find((f) => f.id === n.dia),
      modos = a.modos || null,
      ja = zSort(o.filter((x) => x.profId === a.id)),
      I = e === 1 ? !!(n.dia && n.hora && (!modos || n.modo)) : !0,
      ondeEscolhido = modos ? n.modo : a.onde;
    return (0, r.jsxs)(
      "section",
      {
        className: "entra",
        children: [
          (0, r.jsx)(Ye, { onClick: () => (e === 1 ? s() : t(1)) }),
          (0, r.jsxs)("header", {
            className: "cabeca",
            style: { marginBottom: 24 },
            children: [
              (0, r.jsxs)("p", {
                className: "passo",
                children: ["Passo ", e, " de 2"],
              }),
              (0, r.jsx)("h1", {
                tabIndex: -1,
                children:
                  e === 1
                    ? "Escolha o dia e o hor\xE1rio"
                    : "Confira e confirme",
              }),
            ],
          }),
          (0, r.jsxs)("div", {
            className: "prof-resumo",
            children: [
              (0, r.jsx)(qr, { p: a }),
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("p", {
                    className: "linha-titulo",
                    children: a.nome,
                  }),
                  (0, r.jsxs)("p", {
                    className: "apoio",
                    children: [a.area, " \xB7 ", a.registro],
                  }),
                  (0, r.jsx)("p", { className: "apoio", children: a.onde }),
                ],
              }),
            ],
          }),
          ja.length > 0 &&
            (0, r.jsx)("div", {
              className: "alerta-bloco",
              children: (0, r.jsxs)(Do, {
                tipo: "aviso",
                children: [
                  "Voc\xEA j\xE1 tem um atendimento com ",
                  a.nome,
                  " em ",
                  ja[0].dia.toLowerCase(),
                  ", \xE0s ",
                  ja[0].hora,
                  ". Se quiser trocar o hor\xE1rio, cancele o anterior em Meus agendamentos. Se precisa de mais uma consulta, pode continuar.",
                ],
              }),
            }),
          e === 1 &&
            modos &&
            (0, r.jsxs)("div", {
              className: "modo-escolha",
              children: [
                (0, r.jsx)("h2", { className: "h-pequeno", children: "Como vai ser?" }),
                (0, r.jsx)("div", {
                  className: "segmentado",
                  role: "radiogroup",
                  "aria-label": "Como vai ser o atendimento",
                  children: modos.map((md) =>
                    (0, r.jsxs)(
                      "button",
                      {
                        type: "button",
                        role: "radio",
                        "aria-checked": n.modo === md,
                        onClick: () => l({ ...n, modo: md }),
                        children: [
                          (0, r.jsx)(la, { n: /Online/.test(md) ? "video" : "local", size: 20 }),
                          md,
                        ],
                      },
                      md,
                    ),
                  ),
                }),
              ],
            }),
          e === 1 &&
            (0, r.jsx)("div", {
              role: "group",
              "aria-label": "Datas e hor\xE1rios",
              children: c.map((f) =>
                (0, r.jsxs)(
                  "div",
                  {
                    className: "dia",
                    children: [
                      (0, r.jsx)("h3", { children: f.rotulo }),
                      (0, r.jsx)("div", {
                        className: "horarios",
                        children: f.horas.map((u) =>
                          (0, r.jsx)(
                            ia,
                            {
                              sec: !0,
                              peq: !0,
                              "aria-pressed": n.dia === f.id && n.hora === u,
                              icone:
                                n.dia === f.id && n.hora === u
                                  ? "confirmar"
                                  : void 0,
                              onClick: () => l({ ...n, dia: f.id, hora: u }),
                              children: u,
                            },
                            u,
                          ),
                        ),
                      }),
                    ],
                  },
                  f.id,
                ),
              ),
            }),
          e === 2 &&
            m &&
            (0, r.jsxs)("dl", {
              className: "resumo",
              children: [
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("dt", { children: "Especialidade" }),
                    (0, r.jsx)("dd", { children: a.area }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("dt", { children: "Profissional" }),
                    (0, r.jsx)("dd", { children: a.nome }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("dt", { children: "Quando" }),
                    (0, r.jsxs)("dd", {
                      children: [m.rotulo, ", \xE0s ", n.hora],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("dt", { children: "Onde" }),
                    (0, r.jsx)("dd", { children: ondeEscolhido }),
                  ],
                }),
              ],
            }),
          (0, r.jsxs)("div", {
            className: "acoes",
            style: { marginTop: 40 },
            children: [
              (0, r.jsx)(ia, {
                disabled: !I,
                "aria-disabled": !I,
                fim: e === 2 ? "confirmar" : "avancar",
                onClick: () =>
                  I &&
                  (e === 1
                    ? t(2)
                    : i({
                        profId: a.id,
                        prof: a,
                        diaId: m.id,
                        dia: m.rotulo,
                        hora: n.hora,
                        onde: ondeEscolhido,
                      })),
                children: e === 2 ? "Confirmar agendamento" : "Continuar",
              }),
              !I &&
                (0, r.jsx)("span", {
                  className: "aviso",
                  role: "status",
                  children:
                    modos && !n.modo
                      ? "Escolha se vai ser presencial ou online e um hor\xE1rio."
                      : "Escolha um hor\xE1rio para continuar.",
                }),
            ],
          }),
        ],
      },
      e,
    );
  }
  function t4({ irPara: a, pedir: pd }) {
    let [lig, setLig] = (0, L.useState)(null),
      ligar = (num) => setLig(num),
      aviso = (num) =>
        lig === num &&
        (0, r.jsx)("div", {
          className: "ligacao-aviso",
          children: (0, r.jsxs)(Do, {
            tipo: "info",
            palavra: "Ligando para o " + num + ".",
            children: [
              "No celular, este bot\xE3o abre a liga\xE7\xE3o direto. ",
              (0, r.jsx)("b", { children: "Neste prot\xF3tipo a liga\xE7\xE3o n\xE3o \xE9 feita." }),
            ],
          }),
        });
    return (0, r.jsxs)("section", {
      className: "entra tela-ajuda",
      children: [
        (0, r.jsxs)("header", {
          className: "cabeca",
          style: { marginBottom: 24 },
          children: [
            (0, r.jsx)("p", { className: "sobretitulo sobretitulo--perigo", children: "Preciso de ajuda" }),
            (0, r.jsx)("h1", {
              className: "display",
              tabIndex: -1,
              children: "Respire. Estamos com voc\xEA.",
            }),
            (0, r.jsx)("p", {
              className: "lead",
              children:
                "Se \xE9 uma emerg\xEAncia, ligue agora. O SAMU atende 24 horas, de gra\xE7a.",
            }),
          ],
        }),
        (0, r.jsxs)("button", {
          type: "button",
          className: "btn-ligar",
          onClick: () => ligar("192"),
          children: [
            (0, r.jsx)(la, { n: "telefone", size: 28 }),
            "Ligar para o SAMU \xB7 192",
          ],
        }),
        aviso("192"),
        (0, r.jsxs)("button", {
          type: "button",
          className: "cartao-acao",
          onClick: pd,
          children: [
            (0, r.jsx)("span", {
              className: "cartao-acao-icone",
              children: (0, r.jsx)(la, { n: "mensagem", size: 24 }),
            }),
            (0, r.jsxs)("span", {
              className: "cartao-acao-texto",
              children: [
                (0, r.jsx)("b", { children: "N\xE3o \xE9 emerg\xEAncia m\xE9dica? Pe\xE7a apoio pelo chat" }),
                (0, r.jsxs)("span", {
                  className: "apoio",
                  children: [
                    "A equipe de acolhimento do zElo responde por mensagem. ",
                    (0, r.jsx)("span", { className: "online-ponto", children: "Online agora" }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(la, { n: "avancar", size: 22 }),
          ],
        }),
        (0, r.jsxs)("div", {
          className: "secao",
          children: [
            (0, r.jsx)("h2", { children: "Enquanto a ajuda chega" }),
            (0, r.jsx)("ol", {
              className: "orientacoes",
              children: B2.map(([t, n]) =>
                (0, r.jsx)(
                  "li",
                  {
                    children: (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("b", { children: t }),
                        (0, r.jsx)("span", { children: n }),
                      ],
                    }),
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
        (0, r.jsxs)("div", {
          className: "secao",
          children: [
            (0, r.jsx)("h2", { children: "Outros telefones gratuitos" }),
            (0, r.jsx)("ul", {
              className: "outros-telefones",
              children: H2.map(([t, n, l]) =>
                (0, r.jsxs)(
                  "li",
                  {
                    children: [
                      (0, r.jsxs)("button", {
                        type: "button",
                        className: "tel-linha",
                        onClick: () => ligar(t),
                        children: [
                          (0, r.jsx)("span", { className: "num", children: t }),
                          (0, r.jsxs)("span", {
                            className: "tel-texto",
                            children: [
                              (0, r.jsx)("b", { children: n }),
                              (0, r.jsx)("span", { className: "apoio", children: l }),
                            ],
                          }),
                          (0, r.jsxs)("span", {
                            className: "tel-acao",
                            children: [(0, r.jsx)(la, { n: "telefone", size: 20 }), "Ligar"],
                          }),
                        ],
                      }),
                      aviso(t),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
        (0, r.jsx)("p", {
          className: "apoio",
          style: { marginTop: 24 },
          children:
            "Estas orienta\xE7\xF5es n\xE3o substituem o atendimento m\xE9dico. Na d\xFAvida, ligue 192.",
        }),
      ],
    });
  }
  function n4({ tema: a, fim: o }) {
    return (
      (0, L.useEffect)(() => {
        let t = setTimeout(o, 2700),
          n = () => o();
        return (
          window.addEventListener("keydown", n),
          () => {
            (clearTimeout(t), window.removeEventListener("keydown", n));
          }
        );
      }, []),
      (0, r.jsxs)("div", {
        className: "splash",
        "aria-hidden": "true",
        onClick: o,
        children: [
          (0, r.jsx)("img", {
            src: a === "escuro" ? "logo-escuro.png" : "logo-claro.png",
            alt: "",
            width: "1132",
            height: "665",
          }),
          (0, r.jsx)("p", {
            className: "splash-frase",
            children: "Dire\xE7\xE3o, ajuda e apoio para quem cuida",
          }),
        ],
      })
    );
  }
  var R2 = { tipo: [], direcionamento: [], especificidades: [], quem: null },
    z2 = {
      msgs: [
        {
          de: "ana",
          texto:
            "Oi, eu sou a Ana, a assistente do zElo. Posso responder d\xFAvidas do dia a dia de cuidado e sobre o app. Escreva do seu jeito, mesmo com erro de digita\xE7\xE3o.",
          hora: "09:12",
        },
      ],
      opcoes: null,
      ctx: null,
    },
    zAgendaInicial = [
      {
        profId: "p1",
        prof: At[0],
        diaId: "d5",
        dia: "Quinta, 5 de novembro",
        hora: "10:30",
        onde: "Presencial na Boa Vista, Recife",
      },
    ],
    zFrases = {
      objetivo: "Voc\xEA n\xE3o est\xE1 s\xF3",
      login: "Que bom ter voc\xEA aqui",
      cadastro: "Obrigado por querer ajudar",
      "status-voluntario": "Falta pouco para voc\xEA come\xE7ar",
      diagnostico: "Leva menos de 2 minutos",
    };
  function Dm() {
    let [a, o] = (0, L.useState)("objetivo"),
      [e, t] = (0, L.useState)(
        () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      ),
      [n, l] = (0, L.useState)(null),
      [s, i] = (0, L.useState)({ nome: "", email: "" }),
      [c, m] = (0, L.useState)(R2),
      [I, f] = (0, L.useState)(1),
      [u, g] = (0, L.useState)("inicio"),
      [v, A] = (0, L.useState)("claro"),
      [y, h] = (0, L.useState)(Nm),
      [p, d] = (0, L.useState)(null),
      [S, b] = (0, L.useState)(null),
      [O, T] = (0, L.useState)(z2),
      [E, oa] = (0, L.useState)(zAgendaInicial),
      [z, ja] = (0, L.useState)(0),
      [Fr, wl] = (0, L.useState)("buscar"),
      [k2, _2] = (0, L.useState)(null),
      [G2, Bm] = (0, L.useState)({ dia: null, hora: null }),
      [V2, Nl] = (0, L.useState)(!1),
      [cv, setCv] = (0, L.useState)(0),
      Hm = (0, L.useRef)(!1);
    xr = zAtalhos(c);
    (0, L.useEffect)(() => {
      a === "chat" && cv !== O.msgs.length && setCv(O.msgs.length);
    }, [a, O.msgs.length]);
    ((0, L.useEffect)(() => {
      document.documentElement.dataset.theme = v;
    }, [v]),
      (0, L.useEffect)(() => {
        if (!Hm.current) {
          Hm.current = !0;
          return;
        }
        (window.scrollTo(0, 0),
          requestAnimationFrame(() =>
            document.querySelector("main h1")?.focus({ preventScroll: !0 }),
          ));
      }, [a, I, z, p, S]));
    let P2 =
        a !== "objetivo" &&
        a !== "login" &&
        a !== "cadastro" &&
        a !== "status-voluntario" &&
        !(a === "diagnostico" && u === "inicio"),
      bt = (H) => {
        if (H === "atendimentos-meus")
          return (wl("meus"), ja(0), Nl(!1), o("atendimentos"));
        (H === "atendimentos" && (ja(0), Nl(!1)),
          H === "forum" && d(null),
          H === "dicas" && b(null),
          o(H));
      },
      Om = (H) => {
        (_2(H),
          Bm({ dia: null, hora: null }),
          ja(1),
          Nl(!1),
          o("atendimentos"));
      },
      Z2 = () => o(P2 ? "inicio" : "objetivo"),
      j2 = (H) => {
        let ae = H.split("@")[0].split(/[._-]/)[0] || "voc\xEA";
        return ae.charAt(0).toUpperCase() + ae.slice(1);
      },
      kr = (H) => {
        (h((lista) =>
          lista.map((tp) =>
            tp.id === H && tp.etiquetas.includes("Novo") && tp.autor !== s.nome
              ? { ...tp, etiquetas: tp.etiquetas.filter((x) => x !== "Novo") }
              : tp,
          ),
        ),
          d(H),
          o("forum-topico"));
      },
      pedir = () => {
        let u = O.msgs.length;
        (T({
          msgs: [
            ...O.msgs,
            {
              de: "voce",
              texto: "Pedido de ajuda enviado pela tela Preciso de ajuda.",
              hora: Mm(u * 2),
              pedido: !0,
            },
            {
              de: "ana",
              texto: zPedidoResposta.texto,
              hora: Mm(u * 2 + 1),
              links: zPedidoResposta.links,
            },
          ],
          opcoes: [],
          ctx: zPedidoResposta.ctx,
        }),
          o("chat"));
      },
      Rm = (H) => {
        (b(H), o("dica"));
      },
      X2 = (H) => h(y.map((ae) => (ae.id === H.id ? H : ae))),
      Y2 = () => {
        (l(null),
          i({ nome: "", email: "" }),
          m(R2),
          T(z2),
          oa(zAgendaInicial),
          setCv(0),
          wl("buscar"),
          ja(0),
          A("claro"),
          o("objetivo"));
      },
      Q2 = {
        forum: y.filter((tp) => tp.etiquetas.includes("Novo") && tp.autor !== s.nome).length,
        chat:
          a === "chat"
            ? 0
            : O.msgs.slice(cv).filter((mm) => mm.de === "ana").length,
      },
      K2 = a === "ajuda" ? "ajuda" : US[a],
      J2 = y.find((H) => H.id === p),
      W2 = zr.find((H) => H.id === S),
      $2 = !xS.includes(a) && !(a === "diagnostico" && u === "inicio"),
      xa = null;
    switch (a) {
      case "objetivo":
        xa = (0, r.jsx)(FS, {
          escolher: (H) => {
            (l(H), o(H === "voluntario" ? "cadastro" : "login"));
          },
        });
        break;
      case "login":
        xa = (0, r.jsx)(kS, {
          papel: n,
          voltar: () => o(n === "voluntario" ? "cadastro" : "objetivo"),
          criarVoluntario: () => o("cadastro"),
          entrar: (H, nm) => {
            (i({ nome: nm, email: H }),
              n === "voluntario"
                ? o("inicio")
                : (f(1), g("inicio"), o("diagnostico")));
          },
        });
        break;
      case "diagnostico":
        xa = (0, r.jsx)(GS, {
          passo: I,
          setPasso: f,
          diag: c,
          setDiag: m,
          concluir: () => o(u === "perfil" ? "perfil" : "inicio"),
          sair: () => o(u === "perfil" ? "perfil" : "login"),
        });
        break;
      case "cadastro":
        xa = (0, r.jsx)(VS, {
          voltar: () => o("objetivo"),
          entrar: () => o("login"),
          enviar: (H) => {
            (i({ nome: H.nome.trim(), email: H.email }),
              o("status-voluntario"));
          },
        });
        break;
      case "status-voluntario":
        xa = (0, r.jsx)(PS, {
          nome: s.nome,
          aprovar: () => o("inicio"),
          voltar: () => o("objetivo"),
        });
        break;
      case "inicio":
        xa = (0, r.jsx)(ZS, {
          usuario: s,
          papel: n,
          diag: c,
          agenda: E,
          irPara: bt,
          abrirTopico: kr,
          abrirDica: Rm,
          abrirProf: Om,
        });
        break;
      case "perfil":
        xa = (0, r.jsx)(XS, {
          usuario: s,
          setUsuario: i,
          diag: c,
          papel: n,
          tema: v,
          setTema: A,
          refazer: () => {
            (f(1), g("perfil"), o("diagnostico"));
          },
          sair: Y2,
        });
        break;
      case "chat":
        xa = (0, r.jsx)(QS, { usuario: s, chat: O, setChat: T, irPara: bt });
        break;
      case "forum":
        xa = (0, r.jsx)(KS, {
          topicos: y,
          abrir: kr,
          novo: () => o("forum-novo"),
        });
        break;
      case "forum-topico":
        xa = (0, r.jsx)(JS, {
          t: J2,
          voltar: () => bt("forum"),
          atualizar: X2,
          usuario: s,
          papel: n,
        });
        break;
      case "forum-novo":
        xa = (0, r.jsx)(WS, {
          voltar: () => bt("forum"),
          publicar: (H) => {
            let ae = `t${Date.now()}`;
            (h([
              {
                id: ae,
                titulo: H.titulo.trim(),
                autor: s.nome,
                cidade: "Recife",
                quando: "agora",
                etiquetas: ["Novo", N2[H.dir]],
                dir: H.dir,
                apoio: 0,
                ajudou: 0,
                corpo: H.corpo.trim(),
                respostas: [],
              },
              ...y,
            ]),
              kr(ae));
          },
        });
        break;
      case "dicas":
        xa = (0, r.jsx)($S, { abrir: Rm, irPara: bt });
        break;
      case "dica":
        xa = (0, r.jsx)(a4, { d: W2, voltar: () => bt("dicas") });
        break;
      case "atendimentos":
        xa =
          z === 0
            ? (0, r.jsx)(o4, {
                agenda: E,
                tab: Fr,
                setTab: wl,
                abrirProf: Om,
                confirmado: V2,
                cancelar: (H) => oa(E.filter((ae) => ae !== H)),
              })
            : (0, r.jsx)(e4, {
                prof: At.find((H) => H.id === k2),
                agenda: E,
                passo: z,
                setPasso: ja,
                sel: G2,
                setSel: Bm,
                sair: () => ja(0),
                confirmar: (H) => {
                  (oa([...E, H]), Nl(!0), wl("meus"), ja(0));
                },
              });
        break;
      case "ajuda":
        xa = (0, r.jsx)(t4, { irPara: bt, pedir });
        break;
      default:
        xa = null;
    }
    return (0, r.jsxs)(r.Fragment, {
      children: [
        e && (0, r.jsx)(n4, { tema: v, fim: () => t(!1) }),
        (0, r.jsx)(qS, {
          tema: v,
          atual: K2,
          comMenu: $2,
          irInicio: Z2,
          irPara: bt,
          contadores: Q2,
          usuario: s,
          frase: zFrases[a],
          children: xa,
        }),
      ],
    });
  }
  var F2 = N(yt());
  (0, q2.createRoot)(document.getElementById("raiz")).render(
    (0, F2.jsx)(Dm, {}),
  );
})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
