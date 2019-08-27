!(function(t, e) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = e(require('react'), require('antd'), require('react-router-dom'), require('react-dom'));
  else if ('function' == typeof define && define.amd) define(['react', 'antd', 'react-router-dom', 'react-dom'], e);
  else {
    var n =
      'object' == typeof exports
        ? e(require('react'), require('antd'), require('react-router-dom'), require('react-dom'))
        : e(t.React, t.antd, t.ReactRouterDOM, t.ReactDOM);
    for (var r in n) ('object' == typeof exports ? exports : t)[r] = n[r];
  }
})(window, function(t, e, n, r) {
  return (function(t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var i in t)
            n.d(
              r,
              i,
              function(e) {
                return t[e];
              }.bind(null, i),
            );
        return r;
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ''),
      n((n.s = 252))
    );
  })([
    function(e, n) {
      e.exports = t;
    },
    function(t, e) {
      t.exports = function(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        );
      };
    },
    function(t, e, n) {
      window,
        (t.exports = (function(t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var i = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function(t, e, r) {
              n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
            }),
            (n.r = function(t) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            (n.t = function(t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t;
              if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
                2 & e && 'string' != typeof t)
              )
                for (var i in t)
                  n.d(
                    r,
                    i,
                    function(e) {
                      return t[e];
                    }.bind(null, i),
                  );
              return r;
            }),
            (n.n = function(t) {
              var e =
                t && t.__esModule
                  ? function() {
                      return t.default;
                    }
                  : function() {
                      return t;
                    };
              return n.d(e, 'a', e), e;
            }),
            (n.o = function(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ''),
            n((n.s = 146))
          );
        })([
          function(t, e, n) {
            var r = n(40),
              i = {};
            r.merge(i, r, {
              mixin: function(t, e) {
                var n = t.CFG ? 'CFG' : 'ATTRS';
                if (t && e) {
                  (t._mixins = e), (t[n] = t[n] || {});
                  var r = {};
                  i.each(e, function(e) {
                    i.augment(t, e);
                    var a = e[n];
                    a && i.merge(r, a);
                  }),
                    (t[n] = i.merge(r, t[n]));
                }
              },
            }),
              (t.exports = i);
          },
          function(t, e, n) {
            var r = {},
              i = n(46),
              a = n(103),
              o = n(22),
              s = n(102);
            o.deepMix(r, o, s, a, i), (t.exports = r);
          },
          function(t, e) {
            var n = {}.toString;
            t.exports = function(t, e) {
              return n.call(t) === '[object ' + e + ']';
            };
          },
          function(t, e, n) {
            var r = n(2),
              i = Array.isArray
                ? Array.isArray
                : function(t) {
                    return r(t, 'Array');
                  };
            t.exports = i;
          },
          function(t, e, n) {
            var r = n(0),
              i = n(123),
              a = n(63),
              o = n(35),
              s = ['zIndex', 'capture', 'visible'],
              c = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            (c.ATTRS = {}), r.extend(c, a);
            var u = { matrix: 'matrix', path: 'path', points: 'points', lineDash: 'lineDash' };
            r.augment(c, i, {
              isShape: !0,
              drawInner: function(t) {
                var e = this._attrs;
                this.createPath(t);
                var n = t.globalAlpha;
                if (this.hasFill()) {
                  var i = e.fillOpacity;
                  r.isNil(i) || 1 === i ? t.fill() : ((t.globalAlpha = i), t.fill(), (t.globalAlpha = n));
                }
                if (this.hasStroke() && this._attrs.lineWidth > 0) {
                  var a = e.strokeOpacity;
                  r.isNil(a) || 1 === a || (t.globalAlpha = a), t.stroke();
                }
                this.afterPath(t);
              },
              afterPath: function() {},
              isHitBox: function() {
                return !0;
              },
              isHit: function(t, e) {
                var n = [t, e, 1];
                if ((this.invert(n), this.isHitBox())) {
                  var r = this.getBBox();
                  if (r && !o.box(r.minX, r.maxX, r.minY, r.maxY, n[0], n[1])) return !1;
                }
                var i = this._attrs.clip;
                return i
                  ? (i.invert(n, this.get('canvas')), !!i.isPointInPath(n[0], n[1]) && this.isPointInPath(n[0], n[1]))
                  : this.isPointInPath(n[0], n[1]);
              },
              calculateBox: function() {
                return null;
              },
              getHitLineWidth: function() {
                var t = this._attrs,
                  e = t.lineAppendWidth || 0;
                return (t.lineWidth || 0) + e;
              },
              clearTotalMatrix: function() {
                (this._cfg.totalMatrix = null), (this._cfg.region = null);
              },
              clearBBox: function() {
                (this._cfg.box = null), (this._cfg.region = null);
              },
              getBBox: function() {
                var t = this._cfg.box;
                return (
                  t ||
                    ((t = this.calculateBox()) &&
                      ((t.x = t.minX), (t.y = t.minY), (t.width = t.maxX - t.minX), (t.height = t.maxY - t.minY)),
                    (this._cfg.box = t)),
                  t
                );
              },
              clone: function() {
                var t = this,
                  e = null,
                  n = t._attrs,
                  i = {};
                return (
                  r.each(n, function(t, e) {
                    u[e] && r.isArray(n[e])
                      ? (i[e] = (function(t) {
                          for (var e = [], n = 0; n < t.length; n++)
                            r.isArray(t[n]) ? e.push([].concat(t[n])) : e.push(t[n]);
                          return e;
                        })(n[e]))
                      : (i[e] = n[e]);
                  }),
                  (e = new t.constructor({ attrs: i })),
                  r.each(s, function(n) {
                    e._cfg[n] = t._cfg[n];
                  }),
                  e
                );
              },
            }),
              (t.exports = c);
          },
          function(t, e, n) {
            var r = n(9),
              i = n(3);
            t.exports = function(t, e) {
              if (t)
                if (i(t)) for (var n = 0, a = t.length; n < a && !1 !== e(t[n], n); n++);
                else if (r(t)) for (var o in t) if (t.hasOwnProperty(o) && !1 === e(t[o], o)) break;
            };
          },
          function(t, e) {
            t.exports = function(t, e) {
              if (t) for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]);
              return t;
            };
          },
          function(t, e) {
            var n = document.createElement('table'),
              r = document.createElement('tr'),
              i = /^\s*<(\w+|!)[^>]*>/,
              a = {
                tr: document.createElement('tbody'),
                tbody: n,
                thead: n,
                tfoot: n,
                td: r,
                th: r,
                '*': document.createElement('div'),
              };
            t.exports = function(t) {
              var e = i.test(t) && RegExp.$1;
              e in a || (e = '*');
              var n = a[e];
              (t = t.replace(/(^\s*)|(\s*$)/g, '')), (n.innerHTML = '' + t);
              var r = n.childNodes[0];
              return n.removeChild(r), r;
            };
          },
          function(t, e, n) {
            var r = n(11),
              i = n(3),
              a = 5;
            function o(t, e, n, s) {
              for (var c in ((n = n || 0), (s = s || a), e))
                if (e.hasOwnProperty(c)) {
                  var u = e[c];
                  null !== u && r(u)
                    ? (r(t[c]) || (t[c] = {}), n < s ? o(t[c], u, n + 1, s) : (t[c] = e[c]))
                    : i(u)
                    ? ((t[c] = []), (t[c] = t[c].concat(u)))
                    : void 0 !== u && (t[c] = u);
                }
            }
            t.exports = function() {
              for (var t = new Array(arguments.length), e = t.length, n = 0; n < e; n++) t[n] = arguments[n];
              for (var r = t[0], i = 1; i < e; i++) o(r, t[i]);
              return r;
            };
          },
          function(t, e) {
            var n =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(t) {
                    return typeof t;
                  }
                : function(t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  };
            t.exports = function(t) {
              var e = void 0 === t ? 'undefined' : n(t);
              return (null !== t && 'object' === e) || 'function' === e;
            };
          },
          function(t, e) {
            var n =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(t) {
                    return typeof t;
                  }
                : function(t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  };
            t.exports = function(t) {
              return 'object' === (void 0 === t ? 'undefined' : n(t)) && null !== t;
            };
          },
          function(t, e, n) {
            var r = n(10),
              i = n(2);
            t.exports = function(t) {
              if (!r(t) || !i(t, 'Object')) return !1;
              if (null === Object.getPrototypeOf(t)) return !0;
              for (var e = t; null !== Object.getPrototypeOf(e); ) e = Object.getPrototypeOf(e);
              return Object.getPrototypeOf(t) === e;
            };
          },
          function(t, e) {
            t.exports = function(t) {
              return null == t;
            };
          },
          ,
          function(t, e) {
            t.exports = function(t, e) {
              if (t['_wrap_' + e]) return t['_wrap_' + e];
              var n = function(n) {
                t[e](n);
              };
              return (t['_wrap_' + e] = n), n;
            };
          },
          function(t, e, n) {
            var r = n(2);
            t.exports = function(t) {
              return r(t, 'String');
            };
          },
          function(t, e) {
            t.exports = {
              version: '3.0.4',
              rootContainerClassName: 'root-container',
              nodeContainerClassName: 'node-container',
              edgeContainerClassName: 'edge-container',
              defaultNode: { shape: 'circle', style: { fill: '#fff' }, size: 40, color: '#333' },
              defaultEdge: { shape: 'line', style: {}, size: 1, color: '#333' },
              nodeLabel: { style: { fill: '#595959', textAlign: 'center', textBaseline: 'middle' }, offset: 5 },
              edgeLabel: { style: { fill: '#595959', textAlign: 'center', textBaseline: 'middle' } },
              nodeStateStyle: { active: { fillOpacity: 0.8 }, selected: { lineWidth: 2 } },
              edgeStateStyle: { active: { strokeOpacity: 0.8 }, selected: { lineWidth: 2 } },
              loopPosition: 'top',
              delegateStyle: {
                fill: '#F3F9FF',
                fillOpacity: 0.5,
                stroke: '#1890FF',
                strokeOpacity: 0.9,
                lineDash: [5, 5],
              },
            };
          },
          ,
          ,
          ,
          function(t, e, n) {
            var r = n(0),
              i = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
              a = /[^\s\,]+/gi;
            t.exports = {
              parseRadius: function(t) {
                var e = 0,
                  n = 0,
                  i = 0,
                  a = 0;
                return (
                  r.isArray(t)
                    ? 1 === t.length
                      ? (e = n = i = a = t[0])
                      : 2 === t.length
                      ? ((e = i = t[0]), (n = a = t[1]))
                      : 3 === t.length
                      ? ((e = t[0]), (n = a = t[1]), (i = t[2]))
                      : ((e = t[0]), (n = t[1]), (i = t[2]), (a = t[3]))
                    : (e = n = i = a = t),
                  { r1: e, r2: n, r3: i, r4: a }
                );
              },
              parsePath: function(t) {
                return (
                  (t = t || []),
                  r.isArray(t)
                    ? t
                    : r.isString(t)
                    ? ((t = t.match(i)),
                      r.each(t, function(e, n) {
                        if ((e = e.match(a))[0].length > 1) {
                          var i = e[0].charAt(0);
                          e.splice(1, 0, e[0].substr(1)), (e[0] = i);
                        }
                        r.each(e, function(t, n) {
                          isNaN(t) || (e[n] = +t);
                        }),
                          (t[n] = e);
                      }),
                      t)
                    : void 0
                );
              },
            };
          },
          function(t, e) {
            t.exports = function(t) {
              return null !== t && 'function' != typeof t && isFinite(t.length);
            };
          },
          function(t, e, n) {
            var r = n(27),
              i = {
                deepMix: n(8),
                mix: n(28),
                debounce: n(108),
                each: n(5),
                throttle: n(107),
                mat3: n(37),
                vec2: n(67),
                vec3: n(66),
                transform: n(65),
                clone: n(38),
                upperFirst: n(72),
                isNil: n(12),
                isArray: n(3),
                createDom: n(7),
                modifyCSS: n(6),
                isObject: n(9),
                isPlainObject: n(11),
                isNumber: n(74),
                isString: n(15),
                uniqueId: n(73),
                addEventListener: n(106),
                wrapBehavior: n(14),
                extend: n(70),
                augment: n(69),
                remove: n(105),
                formatPadding: function(t) {
                  var e = 0,
                    n = 0,
                    r = 0,
                    a = 0;
                  return (
                    i.isNumber(t) || i.isString(t)
                      ? (e = n = r = a = t)
                      : i.isArray(t) &&
                        ((e = t[0]),
                        (r = i.isNil(t[1]) ? t[0] : t[1]),
                        (a = i.isNil(t[2]) ? t[0] : t[2]),
                        (n = i.isNil(t[3]) ? r : t[3])),
                    [e, r, a, n]
                  );
                },
                cloneEvent: function(t) {
                  var e = new r(t.type, t, !0, !0);
                  return (
                    (e.clientX = t.clientX),
                    (e.clientY = t.clientY),
                    (e.x = t.x),
                    (e.y = t.y),
                    (e.target = t.target),
                    (e.currentTarget = t.currentTarget),
                    (e.item = t.item),
                    e
                  );
                },
              };
            t.exports = i;
          },
          function(t, e, n) {
            var r = n(0),
              i = n(35),
              a = n(34),
              o = n(61),
              s = n(60),
              c = r.vec3,
              u = r.mat3,
              l = ['m', 'l', 'c', 'a', 'q', 'h', 'v', 't', 's', 'z'];
            function h(t, e, n) {
              return { x: n.x + t, y: n.y + e };
            }
            function f(t, e) {
              return { x: e.x + (e.x - t.x), y: e.y + (e.y - t.y) };
            }
            function d(t) {
              return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
            }
            function p(t, e) {
              return (t[0] * e[0] + t[1] * e[1]) / (d(t) * d(e));
            }
            function g(t, e) {
              return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(p(t, e));
            }
            var v = function(t, e, n) {
              (this.preSegment = e), (this.isLast = n), this.init(t, e);
            };
            r.augment(v, {
              init: function(t, e) {
                var n = t[0];
                e = e || { endPoint: { x: 0, y: 0 } };
                var i,
                  a,
                  o,
                  s,
                  c = l.indexOf(n) >= 0,
                  u = c ? n.toUpperCase() : n,
                  d = t,
                  v = e.endPoint,
                  m = d[1],
                  y = d[2];
                switch (u) {
                  default:
                    break;
                  case 'M':
                    (s = c ? h(m, y, v) : { x: m, y: y }),
                      (this.command = 'M'),
                      (this.params = [v, s]),
                      (this.subStart = s),
                      (this.endPoint = s);
                    break;
                  case 'L':
                    (s = c ? h(m, y, v) : { x: m, y: y }),
                      (this.command = 'L'),
                      (this.params = [v, s]),
                      (this.subStart = e.subStart),
                      (this.endPoint = s),
                      (this.endTangent = function() {
                        return [s.x - v.x, s.y - v.y];
                      }),
                      (this.startTangent = function() {
                        return [v.x - s.x, v.y - s.y];
                      });
                    break;
                  case 'H':
                    (s = c ? h(m, 0, v) : { x: m, y: v.y }),
                      (this.command = 'L'),
                      (this.params = [v, s]),
                      (this.subStart = e.subStart),
                      (this.endPoint = s),
                      (this.endTangent = function() {
                        return [s.x - v.x, s.y - v.y];
                      }),
                      (this.startTangent = function() {
                        return [v.x - s.x, v.y - s.y];
                      });
                    break;
                  case 'V':
                    (s = c ? h(0, m, v) : { x: v.x, y: m }),
                      (this.command = 'L'),
                      (this.params = [v, s]),
                      (this.subStart = e.subStart),
                      (this.endPoint = s),
                      (this.endTangent = function() {
                        return [s.x - v.x, s.y - v.y];
                      }),
                      (this.startTangent = function() {
                        return [v.x - s.x, v.y - s.y];
                      });
                    break;
                  case 'Q':
                    c ? ((i = h(m, y, v)), (a = h(d[3], d[4], v))) : ((i = { x: m, y: y }), (a = { x: d[3], y: d[4] })),
                      (this.command = 'Q'),
                      (this.params = [v, i, a]),
                      (this.subStart = e.subStart),
                      (this.endPoint = a),
                      (this.endTangent = function() {
                        return [a.x - i.x, a.y - i.y];
                      }),
                      (this.startTangent = function() {
                        return [v.x - i.x, v.y - i.y];
                      });
                    break;
                  case 'T':
                    (a = c ? h(m, y, v) : { x: m, y: y }),
                      'Q' === e.command
                        ? ((i = f(e.params[1], v)),
                          (this.command = 'Q'),
                          (this.params = [v, i, a]),
                          (this.subStart = e.subStart),
                          (this.endPoint = a),
                          (this.endTangent = function() {
                            return [a.x - i.x, a.y - i.y];
                          }),
                          (this.startTangent = function() {
                            return [v.x - i.x, v.y - i.y];
                          }))
                        : ((this.command = 'TL'),
                          (this.params = [v, a]),
                          (this.subStart = e.subStart),
                          (this.endPoint = a),
                          (this.endTangent = function() {
                            return [a.x - v.x, a.y - v.y];
                          }),
                          (this.startTangent = function() {
                            return [v.x - a.x, v.y - a.y];
                          }));
                    break;
                  case 'C':
                    c
                      ? ((i = h(m, y, v)), (a = h(d[3], d[4], v)), (o = h(d[5], d[6], v)))
                      : ((i = { x: m, y: y }), (a = { x: d[3], y: d[4] }), (o = { x: d[5], y: d[6] })),
                      (this.command = 'C'),
                      (this.params = [v, i, a, o]),
                      (this.subStart = e.subStart),
                      (this.endPoint = o),
                      (this.endTangent = function() {
                        return [o.x - a.x, o.y - a.y];
                      }),
                      (this.startTangent = function() {
                        return [v.x - i.x, v.y - i.y];
                      });
                    break;
                  case 'S':
                    c ? ((a = h(m, y, v)), (o = h(d[3], d[4], v))) : ((a = { x: m, y: y }), (o = { x: d[3], y: d[4] })),
                      'C' === e.command
                        ? ((i = f(e.params[2], v)),
                          (this.command = 'C'),
                          (this.params = [v, i, a, o]),
                          (this.subStart = e.subStart),
                          (this.endPoint = o),
                          (this.endTangent = function() {
                            return [o.x - a.x, o.y - a.y];
                          }),
                          (this.startTangent = function() {
                            return [v.x - i.x, v.y - i.y];
                          }))
                        : ((this.command = 'SQ'),
                          (this.params = [v, a, o]),
                          (this.subStart = e.subStart),
                          (this.endPoint = o),
                          (this.endTangent = function() {
                            return [o.x - a.x, o.y - a.y];
                          }),
                          (this.startTangent = function() {
                            return [v.x - a.x, v.y - a.y];
                          }));
                    break;
                  case 'A':
                    var x = m,
                      b = y,
                      w = d[3],
                      S = d[4],
                      M = d[5];
                    (s = c ? h(d[6], d[7], v) : { x: d[6], y: d[7] }), (this.command = 'A');
                    var P = (function(t, e, n, i, a, o, s) {
                      var c = r.mod(r.toRadian(s), 2 * Math.PI),
                        u = t.x,
                        l = t.y,
                        h = e.x,
                        f = e.y,
                        d = (Math.cos(c) * (u - h)) / 2 + (Math.sin(c) * (l - f)) / 2,
                        v = (-1 * Math.sin(c) * (u - h)) / 2 + (Math.cos(c) * (l - f)) / 2,
                        m = (d * d) / (a * a) + (v * v) / (o * o);
                      m > 1 && ((a *= Math.sqrt(m)), (o *= Math.sqrt(m)));
                      var y = a * a * (v * v) + o * o * (d * d),
                        x = Math.sqrt((a * a * (o * o) - y) / y);
                      n === i && (x *= -1), isNaN(x) && (x = 0);
                      var b = (x * a * v) / o,
                        w = (x * -o * d) / a,
                        S = (u + h) / 2 + Math.cos(c) * b - Math.sin(c) * w,
                        M = (l + f) / 2 + Math.sin(c) * b + Math.cos(c) * w,
                        P = g([1, 0], [(d - b) / a, (v - w) / o]),
                        I = [(d - b) / a, (v - w) / o],
                        O = [(-1 * d - b) / a, (-1 * v - w) / o],
                        A = g(I, O);
                      return (
                        p(I, O) <= -1 && (A = Math.PI),
                        p(I, O) >= 1 && (A = 0),
                        0 === i && A > 0 && (A -= 2 * Math.PI),
                        1 === i && A < 0 && (A += 2 * Math.PI),
                        [t, S, M, a, o, P, A, c, i]
                      );
                    })(v, s, S, M, x, b, w);
                    this.params = P;
                    var I = e.subStart;
                    (this.subStart = I), (this.endPoint = s);
                    var O = P[5] % (2 * Math.PI);
                    r.isNumberEqual(O, 2 * Math.PI) && (O = 0);
                    var A = P[6] % (2 * Math.PI);
                    r.isNumberEqual(A, 2 * Math.PI) && (A = 0);
                    var _ = 0.001;
                    (this.startTangent = function() {
                      0 === M && (_ *= -1);
                      var t = P[3] * Math.cos(O - _) + P[1],
                        e = P[4] * Math.sin(O - _) + P[2];
                      return [t - I.x, e - I.y];
                    }),
                      (this.endTangent = function() {
                        var t = P[6];
                        t - 2 * Math.PI < 1e-4 && (t = 0);
                        var e = P[3] * Math.cos(O + t + _) + P[1],
                          n = P[4] * Math.sin(O + t - _) + P[2];
                        return [v.x - e, v.y - n];
                      });
                    break;
                  case 'Z':
                    (this.command = 'Z'),
                      (this.params = [v, e.subStart]),
                      (this.subStart = e.subStart),
                      (this.endPoint = e.subStart);
                }
              },
              isInside: function(t, e, n) {
                var r = this.command,
                  a = this.params,
                  o = this.box;
                if (o && !i.box(o.minX, o.maxX, o.minY, o.maxY, t, e)) return !1;
                switch (r) {
                  default:
                    break;
                  case 'M':
                    return !1;
                  case 'TL':
                  case 'L':
                  case 'Z':
                    return i.line(a[0].x, a[0].y, a[1].x, a[1].y, n, t, e);
                  case 'SQ':
                  case 'Q':
                    return i.quadraticline(a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, n, t, e);
                  case 'C':
                    return i.cubicline(a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y, n, t, e);
                  case 'A':
                    var s = a,
                      l = s[1],
                      h = s[2],
                      f = s[3],
                      d = s[4],
                      p = s[5],
                      g = s[6],
                      v = s[7],
                      m = s[8],
                      y = f > d ? f : d,
                      x = f > d ? 1 : f / d,
                      b = f > d ? d / f : 1;
                    s = [t, e, 1];
                    var w = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                    return (
                      u.translate(w, w, [-l, -h]),
                      u.rotate(w, w, -v),
                      u.scale(w, w, [1 / x, 1 / b]),
                      c.transformMat3(s, s, w),
                      i.arcline(0, 0, y, p, p + g, 1 - m, n, s[0], s[1])
                    );
                }
                return !1;
              },
              draw: function(t) {
                var e,
                  n,
                  r,
                  i = this.command,
                  a = this.params;
                switch (i) {
                  default:
                    break;
                  case 'M':
                    t.moveTo(a[1].x, a[1].y);
                    break;
                  case 'TL':
                  case 'L':
                    t.lineTo(a[1].x, a[1].y);
                    break;
                  case 'SQ':
                  case 'Q':
                    (e = a[1]), (n = a[2]), t.quadraticCurveTo(e.x, e.y, n.x, n.y);
                    break;
                  case 'C':
                    (e = a[1]), (n = a[2]), (r = a[3]), t.bezierCurveTo(e.x, e.y, n.x, n.y, r.x, r.y);
                    break;
                  case 'A':
                    var o = a,
                      s = o[1],
                      c = o[2],
                      u = o[3],
                      l = o[4],
                      h = o[5],
                      f = o[6],
                      d = o[7],
                      p = o[8],
                      g = u > l ? u : l,
                      v = u > l ? 1 : u / l,
                      m = u > l ? l / u : 1;
                    t.translate(s, c),
                      t.rotate(d),
                      t.scale(v, m),
                      t.arc(0, 0, g, h, h + f, 1 - p),
                      t.scale(1 / v, 1 / m),
                      t.rotate(-d),
                      t.translate(-s, -c);
                    break;
                  case 'Z':
                    t.closePath();
                }
              },
              getBBox: function(t) {
                var e,
                  n,
                  r,
                  i,
                  c = t / 2,
                  u = this.params;
                switch (this.command) {
                  default:
                  case 'M':
                  case 'Z':
                    break;
                  case 'TL':
                  case 'L':
                    this.box = {
                      minX: Math.min(u[0].x, u[1].x) - c,
                      maxX: Math.max(u[0].x, u[1].x) + c,
                      minY: Math.min(u[0].y, u[1].y) - c,
                      maxY: Math.max(u[0].y, u[1].y) + c,
                    };
                    break;
                  case 'SQ':
                  case 'Q':
                    for (r = 0, i = (n = o.extrema(u[0].x, u[1].x, u[2].x)).length; r < i; r++)
                      n[r] = o.at(u[0].x, u[1].x, u[2].x, n[r]);
                    for (n.push(u[0].x, u[2].x), r = 0, i = (e = o.extrema(u[0].y, u[1].y, u[2].y)).length; r < i; r++)
                      e[r] = o.at(u[0].y, u[1].y, u[2].y, e);
                    e.push(u[0].y, u[2].y),
                      (this.box = {
                        minX: Math.min.apply(Math, n) - c,
                        maxX: Math.max.apply(Math, n) + c,
                        minY: Math.min.apply(Math, e) - c,
                        maxY: Math.max.apply(Math, e) + c,
                      });
                    break;
                  case 'C':
                    for (r = 0, i = (n = a.extrema(u[0].x, u[1].x, u[2].x, u[3].x)).length; r < i; r++)
                      n[r] = a.at(u[0].x, u[1].x, u[2].x, u[3].x, n[r]);
                    for (r = 0, i = (e = a.extrema(u[0].y, u[1].y, u[2].y, u[3].y)).length; r < i; r++)
                      e[r] = a.at(u[0].y, u[1].y, u[2].y, u[3].y, e[r]);
                    n.push(u[0].x, u[3].x),
                      e.push(u[0].y, u[3].y),
                      (this.box = {
                        minX: Math.min.apply(Math, n) - c,
                        maxX: Math.max.apply(Math, n) + c,
                        minY: Math.min.apply(Math, e) - c,
                        maxY: Math.max.apply(Math, e) + c,
                      });
                    break;
                  case 'A':
                    var l = u,
                      h = l[1],
                      f = l[2],
                      d = l[3],
                      p = l[4],
                      g = l[5],
                      v = l[6],
                      m = l[7],
                      y = l[8],
                      x = g,
                      b = g + v,
                      w = s.xExtrema(m, d, p),
                      S = 1 / 0,
                      M = -1 / 0,
                      P = [x, b];
                    for (r = 2 * -Math.PI; r <= 2 * Math.PI; r += Math.PI) {
                      var I = w + r;
                      1 === y ? x < I && I < b && P.push(I) : b < I && I < x && P.push(I);
                    }
                    for (r = 0, i = P.length; r < i; r++) {
                      var O = s.xAt(m, d, p, h, P[r]);
                      O < S && (S = O), O > M && (M = O);
                    }
                    var A = s.yExtrema(m, d, p),
                      _ = 1 / 0,
                      C = -1 / 0,
                      E = [x, b];
                    for (r = 2 * -Math.PI; r <= 2 * Math.PI; r += Math.PI) {
                      var j = A + r;
                      1 === y ? x < j && j < b && E.push(j) : b < j && j < x && E.push(j);
                    }
                    for (r = 0, i = E.length; r < i; r++) {
                      var N = s.yAt(m, d, p, f, E[r]);
                      N < _ && (_ = N), N > C && (C = N);
                    }
                    this.box = { minX: S - c, maxX: M + c, minY: _ - c, maxY: C + c };
                }
              },
            }),
              (t.exports = v);
          },
          function(t, e, n) {
            var r = n(20),
              i = n(23),
              a = Math.PI,
              o = Math.sin,
              s = Math.cos,
              c = Math.atan2,
              u = 10,
              l = a / 3;
            function h(t, e, n, r, i, h, f) {
              var d, p, g, v, m, y, x;
              if (!e.fill) {
                var b = e.arrowLength || u,
                  w = e.arrowAngle ? (e.arrowAngle * a) / 180 : l;
                (x = c(r - h, n - i)),
                  (m = Math.abs(e.lineWidth * s(x)) / 2),
                  (y = Math.abs(e.lineWidth * o(x)) / 2),
                  f && ((m = -m), (y = -y)),
                  (d = i + b * s(x + w / 2)),
                  (p = h + b * o(x + w / 2)),
                  (g = i + b * s(x - w / 2)),
                  (v = h + b * o(x - w / 2)),
                  t.beginPath(),
                  t.moveTo(d - m, p - y),
                  t.lineTo(i - m, h - y),
                  t.lineTo(g - m, v - y),
                  t.moveTo(i - m, h - y),
                  t.lineTo(i + m, h + y),
                  t.moveTo(i, h),
                  t.stroke();
              }
            }
            function f(t, e, n, a, o, s, c) {
              var u = c ? e.startArrow : e.endArrow,
                l = u.d,
                h = 0,
                f = o - n,
                d = s - a,
                p = Math.atan(f / d);
              0 === d && f < 0
                ? (h = Math.PI)
                : f > 0 && d > 0
                ? (h = Math.PI / 2 - p)
                : f < 0 && d < 0
                ? (h = -Math.PI / 2 - p)
                : f >= 0 && d < 0
                ? (h = -p - Math.PI / 2)
                : f <= 0 && d > 0 && (h = Math.PI / 2 - p);
              var g = (function(t) {
                var e,
                  n = [],
                  a = r.parsePath(t.path);
                if (!Array.isArray(a) || 0 === a.length || ('M' !== a[0][0] && 'm' !== a[0][0])) return !1;
                for (var o = a.length, s = 0; s < a.length; s++) {
                  var c = a[s];
                  (e = new i(c, e, s === o - 1)), n.push(e);
                }
                return n;
              })(u);
              if (g) {
                l &&
                  (c
                    ? ((o += Math.sin(p) * l), (s = s + Math.cos(p) * l - 0.5 * t.lineWidth))
                    : ((o -= Math.sin(p) * l), (s = s - Math.cos(p) * l + 0.5 * t.lineWidth))),
                  t.save(),
                  t.beginPath(),
                  t.translate(o, s),
                  t.rotate(h);
                for (var v = 0; v < g.length; v++) g[v].draw(t);
                t.setTransform(1, 0, 0, 1, 0, 0), (t.fillStyle = t.strokeStyle), t.fill(), t.restore();
              }
            }
            t.exports = {
              addStartArrow: function(t, e, n, r, i, a) {
                'object' == typeof e.startArrow ? f(t, e, n, r, i, a, !0) : e.startArrow && h(t, e, n, r, i, a, !0);
              },
              addEndArrow: function(t, e, n, r, i, a) {
                'object' == typeof e.endArrow ? f(t, e, n, r, i, a, !1) : e.endArrow && h(t, e, n, r, i, a, !1);
              },
            };
          },
          function(t, e, n) {
            var r = n(0);
            function i(t, e, n, r) {
              return { x: Math.cos(r) * n + t, y: Math.sin(r) * n + e };
            }
            function a(t, e, n, r) {
              var i, a;
              return (
                r
                  ? t < e
                    ? ((i = e - t), (a = 2 * Math.PI - n + t))
                    : t > n && ((i = 2 * Math.PI - t + e), (a = t - n))
                  : ((i = t - e), (a = n - t)),
                i > a ? n : e
              );
            }
            function o(t, e, n, i) {
              var o = 0;
              return (
                n - e >= 2 * Math.PI && (o = 2 * Math.PI),
                (e = r.mod(e, 2 * Math.PI)),
                (n = r.mod(n, 2 * Math.PI) + o),
                (t = r.mod(t, 2 * Math.PI)),
                i
                  ? e >= n
                    ? t > n && t < e
                      ? t
                      : a(t, n, e, !0)
                    : t < e || t > n
                    ? t
                    : a(t, e, n)
                  : e <= n
                  ? e < t && t < n
                    ? t
                    : a(t, e, n, !0)
                  : t > e || t < n
                  ? t
                  : a(t, n, e)
              );
            }
            function s(t, e, n, i, a, s, c, u, l) {
              var h = [c, u],
                f = [t, e],
                d = r.vec2.subtract([], h, f),
                p = r.vec2.angleTo([1, 0], d);
              p = o(p, i, a, s);
              var g = [n * Math.cos(p) + t, n * Math.sin(p) + e];
              return l && ((l.x = g[0]), (l.y = g[1])), r.vec2.distance(g, h);
            }
            t.exports = {
              nearAngle: o,
              projectPoint: function(t, e, n, r, i, a, o, c) {
                var u = {};
                return s(t, e, n, r, i, a, o, c, u), u;
              },
              pointDistance: s,
              box: function(t, e, n, a, s, c) {
                var u = Math.PI / 2,
                  l = Math.PI,
                  h = (3 * Math.PI) / 2,
                  f = [],
                  d = o(0, a, s, c);
                0 === d && f.push(i(t, e, n, 0)),
                  (d = o(u, a, s, c)) === u && f.push(i(t, e, n, u)),
                  (d = o(l, a, s, c)) === l && f.push(i(t, e, n, l)),
                  (d = o(h, a, s, c)) === h && f.push(i(t, e, n, h)),
                  f.push(i(t, e, n, a)),
                  f.push(i(t, e, n, s));
                var p = 1 / 0,
                  g = -1 / 0,
                  v = 1 / 0,
                  m = -1 / 0;
                return (
                  r.each(f, function(t) {
                    p > t.x && (p = t.x), g < t.x && (g = t.x), v > t.y && (v = t.y), m < t.y && (m = t.y);
                  }),
                  { minX: p, minY: v, maxX: g, maxY: m }
                );
              },
            };
          },
          function(t, e, n) {
            var r = n(0).vec2;
            t.exports = {
              at: function(t, e, n) {
                return (e - t) * n + t;
              },
              pointDistance: function(t, e, n, i, a, o) {
                var s = [n - t, i - e];
                if (r.exactEquals(s, [0, 0])) return NaN;
                var c = [-s[1], s[0]];
                r.normalize(c, c);
                var u = [a - t, o - e];
                return Math.abs(r.dot(u, c));
              },
              box: function(t, e, n, r, i) {
                var a = i / 2,
                  o = Math.min(t, n),
                  s = Math.max(t, n);
                return { minX: o - a, minY: Math.min(e, r) - a, maxX: s + a, maxY: Math.max(e, r) + a };
              },
              len: function(t, e, n, r) {
                return Math.sqrt((n - t) * (n - t) + (r - e) * (r - e));
              },
            };
          },
          function(t, e, n) {
            var r = n(0),
              i = function(t, e, n, r) {
                (this.type = t),
                  (this.target = null),
                  (this.currentTarget = null),
                  (this.bubbles = n),
                  (this.cancelable = r),
                  (this.timeStamp = new Date().getTime()),
                  (this.defaultPrevented = !1),
                  (this.propagationStopped = !1),
                  (this.removed = !1),
                  (this.event = e);
              };
            r.augment(i, {
              preventDefault: function() {
                this.defaultPrevented = this.cancelable && !0;
              },
              stopPropagation: function() {
                this.propagationStopped = !0;
              },
              remove: function() {
                this.remove = !0;
              },
              clone: function() {
                return r.clone(this);
              },
              toString: function() {
                return '[Event (type=' + this.type + ')]';
              },
            }),
              (t.exports = i);
          },
          function(t, e) {
            function n(t, e) {
              for (var n in e) e.hasOwnProperty(n) && 'constructor' !== n && void 0 !== e[n] && (t[n] = e[n]);
            }
            t.exports = function(t, e, r, i) {
              return e && n(t, e), r && n(t, r), i && n(t, i), t;
            };
          },
          function(t, e, n) {
            t.exports = {
              Canvas: n(145),
              Group: n(64),
              Shape: n(4),
              Arc: n(59),
              Circle: n(58),
              Dom: n(57),
              Ellipse: n(56),
              Fan: n(55),
              Image: n(54),
              Line: n(53),
              Marker: n(33),
              Path: n(52),
              Polygon: n(51),
              Polyline: n(50),
              Rect: n(49),
              Text: n(48),
              PathSegment: n(23),
              PathUtil: n(32),
              Event: n(27),
              EventEmitter: n(62),
              version: '3.4.3',
            };
          },
          ,
          function(t, e, n) {
            var r = n(1);
            n(101);
            var i = {},
              a = {};
            function o(t) {
              return a[t] || r.upperFirst(t);
            }
            var s = {
                defaultShapeType: null,
                getShape: function(t) {
                  return this[t] || this[this.defaultShapeType];
                },
                draw: function(t, e, n) {
                  var r = this.getShape(t),
                    i = r.draw(e, n);
                  return r.afterDraw(e, n, i), i;
                },
                update: function(t, e, n) {
                  var r = this.getShape(t);
                  r.update && (r.update(e, n), r.afterUpdate(e, n));
                },
                setState: function(t, e, n, r) {
                  this.getShape(t).setState(e, n, r);
                },
                shouldUpdate: function(t) {
                  return !!this.getShape(t).update;
                },
                getControlPoints: function(t, e) {
                  return this.getShape(t).getControlPoints(e);
                },
                getAnchorPoints: function(t, e) {
                  return this.getShape(t).getAnchorPoints(e);
                },
              },
              c = {
                draw: function() {},
                afterDraw: function() {},
                afterUpdate: function() {},
                setState: function() {},
                getControlPoints: function(t) {
                  return t.controlPoints;
                },
                getAnchorPoints: function(t) {
                  return t.anchorPoints;
                },
              };
            (i.registerFactory = function(t, e) {
              var n = o(t),
                a = r.mix({}, s, e);
              return (
                (i[n] = a),
                (a.className = n),
                (function(t) {
                  var e = 'register' + t.className;
                  i[e] = function(e, n, i) {
                    var a = i ? t.getShape(i) : c,
                      o = r.mix({}, a, n);
                    return (o.type = e), (t[e] = o), o;
                  };
                })(a),
                a
              );
            }),
              (i.getFactory = function(t) {
                return this[(t = o(t))];
              }),
              (t.exports = i);
          },
          function(t, e, n) {
            var r = n(40),
              i = '\t\n\v\f\r   ᠎             　\u2028\u2029',
              a = new RegExp(
                '([a-z])[' + i + ',]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[' + i + ']*,?[' + i + ']*)+)',
                'ig',
              ),
              o = new RegExp('(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[' + i + ']*,?[' + i + ']*', 'ig'),
              s = function(t) {
                if (!t) return null;
                if (typeof t == typeof []) return t;
                var e = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
                  n = [];
                return (
                  String(t).replace(a, function(t, r, i) {
                    var a = [],
                      s = r.toLowerCase();
                    if (
                      (i.replace(o, function(t, e) {
                        e && a.push(+e);
                      }),
                      'm' === s &&
                        a.length > 2 &&
                        (n.push([r].concat(a.splice(0, 2))), (s = 'l'), (r = 'm' === r ? 'l' : 'L')),
                      'o' === s && 1 === a.length && n.push([r, a[0]]),
                      'r' === s)
                    )
                      n.push([r].concat(a));
                    else for (; a.length >= e[s] && (n.push([r].concat(a.splice(0, e[s]))), e[s]); );
                  }),
                  n
                );
              },
              c = function(t, e) {
                for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                  var a = [
                    { x: +t[r - 2], y: +t[r - 1] },
                    { x: +t[r], y: +t[r + 1] },
                    { x: +t[r + 2], y: +t[r + 3] },
                    { x: +t[r + 4], y: +t[r + 5] },
                  ];
                  e
                    ? r
                      ? i - 4 === r
                        ? (a[3] = { x: +t[0], y: +t[1] })
                        : i - 2 === r && ((a[2] = { x: +t[0], y: +t[1] }), (a[3] = { x: +t[2], y: +t[3] }))
                      : (a[0] = { x: +t[i - 2], y: +t[i - 1] })
                    : i - 4 === r
                    ? (a[3] = a[2])
                    : r || (a[0] = { x: +t[r], y: +t[r + 1] }),
                    n.push([
                      'C',
                      (-a[0].x + 6 * a[1].x + a[2].x) / 6,
                      (-a[0].y + 6 * a[1].y + a[2].y) / 6,
                      (a[1].x + 6 * a[2].x - a[3].x) / 6,
                      (a[1].y + 6 * a[2].y - a[3].y) / 6,
                      a[2].x,
                      a[2].y,
                    ]);
                }
                return n;
              },
              u = function(t, e, n, r, i) {
                var a = [];
                if ((null === i && null === r && (r = n), (t = +t), (e = +e), (n = +n), (r = +r), null !== i)) {
                  var o = Math.PI / 180,
                    s = t + n * Math.cos(-r * o),
                    c = t + n * Math.cos(-i * o);
                  a = [
                    ['M', s, e + n * Math.sin(-r * o)],
                    ['A', n, n, 0, +(i - r > 180), 0, c, e + n * Math.sin(-i * o)],
                  ];
                } else
                  a = [
                    ['M', t, e],
                    ['m', 0, -r],
                    ['a', n, r, 0, 1, 1, 0, 2 * r],
                    ['a', n, r, 0, 1, 1, 0, -2 * r],
                    ['z'],
                  ];
                return a;
              },
              l = function(t) {
                if (!(t = s(t)) || !t.length) return [['M', 0, 0]];
                var e,
                  n,
                  r = [],
                  i = 0,
                  a = 0,
                  o = 0,
                  l = 0,
                  h = 0;
                'M' === t[0][0] && ((o = i = +t[0][1]), (l = a = +t[0][2]), h++, (r[0] = ['M', i, a]));
                for (
                  var f,
                    d,
                    p =
                      3 === t.length &&
                      'M' === t[0][0] &&
                      'R' === t[1][0].toUpperCase() &&
                      'Z' === t[2][0].toUpperCase(),
                    g = h,
                    v = t.length;
                  g < v;
                  g++
                ) {
                  if ((r.push((f = [])), (e = (d = t[g])[0]) !== e.toUpperCase()))
                    switch (((f[0] = e.toUpperCase()), f[0])) {
                      case 'A':
                        (f[1] = d[1]),
                          (f[2] = d[2]),
                          (f[3] = d[3]),
                          (f[4] = d[4]),
                          (f[5] = d[5]),
                          (f[6] = +d[6] + i),
                          (f[7] = +d[7] + a);
                        break;
                      case 'V':
                        f[1] = +d[1] + a;
                        break;
                      case 'H':
                        f[1] = +d[1] + i;
                        break;
                      case 'R':
                        for (var m = 2, y = (n = [i, a].concat(d.slice(1))).length; m < y; m++)
                          (n[m] = +n[m] + i), (n[++m] = +n[m] + a);
                        r.pop(), (r = r.concat(c(n, p)));
                        break;
                      case 'O':
                        r.pop(), (n = u(i, a, d[1], d[2])).push(n[0]), (r = r.concat(n));
                        break;
                      case 'U':
                        r.pop(),
                          (r = r.concat(u(i, a, d[1], d[2], d[3]))),
                          (f = ['U'].concat(r[r.length - 1].slice(-2)));
                        break;
                      case 'M':
                        (o = +d[1] + i), (l = +d[2] + a);
                        break;
                      default:
                        for (var x = 1, b = d.length; x < b; x++) f[x] = +d[x] + (x % 2 ? i : a);
                    }
                  else if ('R' === e)
                    (n = [i, a].concat(d.slice(1))), r.pop(), (r = r.concat(c(n, p))), (f = ['R'].concat(d.slice(-2)));
                  else if ('O' === e) r.pop(), (n = u(i, a, d[1], d[2])).push(n[0]), (r = r.concat(n));
                  else if ('U' === e)
                    r.pop(), (r = r.concat(u(i, a, d[1], d[2], d[3]))), (f = ['U'].concat(r[r.length - 1].slice(-2)));
                  else for (var w = 0, S = d.length; w < S; w++) f[w] = d[w];
                  if ('O' !== (e = e.toUpperCase()))
                    switch (f[0]) {
                      case 'Z':
                        (i = +o), (a = +l);
                        break;
                      case 'H':
                        i = f[1];
                        break;
                      case 'V':
                        a = f[1];
                        break;
                      case 'M':
                        (o = f[f.length - 2]), (l = f[f.length - 1]);
                        break;
                      default:
                        (i = f[f.length - 2]), (a = f[f.length - 1]);
                    }
                }
                return r;
              },
              h = function(t, e, n, r) {
                return [t, e, n, r, n, r];
              },
              f = function(t, e, n, r, i, a) {
                return [
                  (1 / 3) * t + (2 / 3) * n,
                  (1 / 3) * e + (2 / 3) * r,
                  (1 / 3) * i + (2 / 3) * n,
                  (1 / 3) * a + (2 / 3) * r,
                  i,
                  a,
                ];
              },
              d = function(t, e) {
                var n,
                  r = l(t),
                  i = e && l(e),
                  a = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                  o = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                  s = [],
                  c = [],
                  u = '',
                  d = '',
                  p = function(t, e, n) {
                    var r, i;
                    if (!t) return ['C', e.x, e.y, e.x, e.y, e.x, e.y];
                    switch ((!(t[0] in { T: 1, Q: 1 }) && (e.qx = e.qy = null), t[0])) {
                      case 'M':
                        (e.X = t[1]), (e.Y = t[2]);
                        break;
                      case 'A':
                        t = ['C'].concat(
                          function t(e, n, r, i, a, o, s, c, u, l) {
                            r === i && (r += 1);
                            var h,
                              f,
                              d,
                              p,
                              g,
                              v = (120 * Math.PI) / 180,
                              m = (Math.PI / 180) * (+a || 0),
                              y = [],
                              x = function(t, e, n) {
                                return { x: t * Math.cos(n) - e * Math.sin(n), y: t * Math.sin(n) + e * Math.cos(n) };
                              };
                            if (l) (f = l[0]), (d = l[1]), (p = l[2]), (g = l[3]);
                            else {
                              (e = (h = x(e, n, -m)).x),
                                (n = h.y),
                                (c = (h = x(c, u, -m)).x),
                                (u = h.y),
                                e === c && n === u && ((c += 1), (u += 1));
                              var b = (e - c) / 2,
                                w = (n - u) / 2,
                                S = (b * b) / (r * r) + (w * w) / (i * i);
                              S > 1 && ((r *= S = Math.sqrt(S)), (i *= S));
                              var M = r * r,
                                P = i * i,
                                I =
                                  (o === s ? -1 : 1) *
                                  Math.sqrt(Math.abs((M * P - M * w * w - P * b * b) / (M * w * w + P * b * b)));
                              (p = (I * r * w) / i + (e + c) / 2),
                                (g = (I * -i * b) / r + (n + u) / 2),
                                (f = Math.asin(((n - g) / i).toFixed(9))),
                                (d = Math.asin(((u - g) / i).toFixed(9))),
                                (f = e < p ? Math.PI - f : f),
                                (d = c < p ? Math.PI - d : d),
                                f < 0 && (f = 2 * Math.PI + f),
                                d < 0 && (d = 2 * Math.PI + d),
                                s && f > d && (f -= 2 * Math.PI),
                                !s && d > f && (d -= 2 * Math.PI);
                            }
                            var O = d - f;
                            if (Math.abs(O) > v) {
                              var A = d,
                                _ = c,
                                C = u;
                              (d = f + v * (s && d > f ? 1 : -1)),
                                (y = t((c = p + r * Math.cos(d)), (u = g + i * Math.sin(d)), r, i, a, 0, s, _, C, [
                                  d,
                                  A,
                                  p,
                                  g,
                                ]));
                            }
                            O = d - f;
                            var E = Math.cos(f),
                              j = Math.sin(f),
                              N = Math.cos(d),
                              k = Math.sin(d),
                              D = Math.tan(O / 4),
                              B = (4 / 3) * r * D,
                              T = (4 / 3) * i * D,
                              L = [e, n],
                              R = [e + B * j, n - T * E],
                              Y = [c + B * k, u - T * N],
                              X = [c, u];
                            if (((R[0] = 2 * L[0] - R[0]), (R[1] = 2 * L[1] - R[1]), l)) return [R, Y, X].concat(y);
                            for (
                              var F = [],
                                Z = 0,
                                G = (y = [R, Y, X]
                                  .concat(y)
                                  .join()
                                  .split(',')).length;
                              Z < G;
                              Z++
                            )
                              F[Z] = Z % 2 ? x(y[Z - 1], y[Z], m).y : x(y[Z], y[Z + 1], m).x;
                            return F;
                          }.apply(0, [e.x, e.y].concat(t.slice(1))),
                        );
                        break;
                      case 'S':
                        'C' === n || 'S' === n ? ((r = 2 * e.x - e.bx), (i = 2 * e.y - e.by)) : ((r = e.x), (i = e.y)),
                          (t = ['C', r, i].concat(t.slice(1)));
                        break;
                      case 'T':
                        'Q' === n || 'T' === n
                          ? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
                          : ((e.qx = e.x), (e.qy = e.y)),
                          (t = ['C'].concat(f(e.x, e.y, e.qx, e.qy, t[1], t[2])));
                        break;
                      case 'Q':
                        (e.qx = t[1]), (e.qy = t[2]), (t = ['C'].concat(f(e.x, e.y, t[1], t[2], t[3], t[4])));
                        break;
                      case 'L':
                        t = ['C'].concat(h(e.x, e.y, t[1], t[2]));
                        break;
                      case 'H':
                        t = ['C'].concat(h(e.x, e.y, t[1], e.y));
                        break;
                      case 'V':
                        t = ['C'].concat(h(e.x, e.y, e.x, t[1]));
                        break;
                      case 'Z':
                        t = ['C'].concat(h(e.x, e.y, e.X, e.Y));
                    }
                    return t;
                  },
                  g = function(t, e) {
                    if (t[e].length > 7) {
                      t[e].shift();
                      for (var a = t[e]; a.length; )
                        (s[e] = 'A'), i && (c[e] = 'A'), t.splice(e++, 0, ['C'].concat(a.splice(0, 6)));
                      t.splice(e, 1), (n = Math.max(r.length, (i && i.length) || 0));
                    }
                  },
                  v = function(t, e, a, o, s) {
                    t &&
                      e &&
                      'M' === t[s][0] &&
                      'M' !== e[s][0] &&
                      (e.splice(s, 0, ['M', o.x, o.y]),
                      (a.bx = 0),
                      (a.by = 0),
                      (a.x = t[s][1]),
                      (a.y = t[s][2]),
                      (n = Math.max(r.length, (i && i.length) || 0)));
                  };
                n = Math.max(r.length, (i && i.length) || 0);
                for (var m = 0; m < n; m++) {
                  r[m] && (u = r[m][0]),
                    'C' !== u && ((s[m] = u), m && (d = s[m - 1])),
                    (r[m] = p(r[m], a, d)),
                    'A' !== s[m] && 'C' === u && (s[m] = 'C'),
                    g(r, m),
                    i &&
                      (i[m] && (u = i[m][0]),
                      'C' !== u && ((c[m] = u), m && (d = c[m - 1])),
                      (i[m] = p(i[m], o, d)),
                      'A' !== c[m] && 'C' === u && (c[m] = 'C'),
                      g(i, m)),
                    v(r, i, a, o, m),
                    v(i, r, o, a, m);
                  var y = r[m],
                    x = i && i[m],
                    b = y.length,
                    w = i && x.length;
                  (a.x = y[b - 2]),
                    (a.y = y[b - 1]),
                    (a.bx = parseFloat(y[b - 4]) || a.x),
                    (a.by = parseFloat(y[b - 3]) || a.y),
                    (o.bx = i && (parseFloat(x[w - 4]) || o.x)),
                    (o.by = i && (parseFloat(x[w - 3]) || o.y)),
                    (o.x = i && x[w - 2]),
                    (o.y = i && x[w - 1]);
                }
                return i ? [r, i] : r;
              },
              p = /,?([a-z]),?/gi,
              g = function(t) {
                return t.join(',').replace(p, '$1');
              },
              v = function(t, e, n, r, i) {
                return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n;
              },
              m = function(t, e, n, r, i, a, o, s, c) {
                null === c && (c = 1);
                for (
                  var u = (c = c > 1 ? 1 : c < 0 ? 0 : c) / 2,
                    l = [
                      -0.1252,
                      0.1252,
                      -0.3678,
                      0.3678,
                      -0.5873,
                      0.5873,
                      -0.7699,
                      0.7699,
                      -0.9041,
                      0.9041,
                      -0.9816,
                      0.9816,
                    ],
                    h = [
                      0.2491,
                      0.2491,
                      0.2335,
                      0.2335,
                      0.2032,
                      0.2032,
                      0.1601,
                      0.1601,
                      0.1069,
                      0.1069,
                      0.0472,
                      0.0472,
                    ],
                    f = 0,
                    d = 0;
                  d < 12;
                  d++
                ) {
                  var p = u * l[d] + u,
                    g = v(p, t, n, i, o),
                    m = v(p, e, r, a, s),
                    y = g * g + m * m;
                  f += h[d] * Math.sqrt(y);
                }
                return u * f;
              },
              y = function(t, e, n, r, i, a, o, s) {
                if (
                  !(
                    Math.max(t, n) < Math.min(i, o) ||
                    Math.min(t, n) > Math.max(i, o) ||
                    Math.max(e, r) < Math.min(a, s) ||
                    Math.min(e, r) > Math.max(a, s)
                  )
                ) {
                  var c = (t - n) * (a - s) - (e - r) * (i - o);
                  if (c) {
                    var u = ((t * r - e * n) * (i - o) - (t - n) * (i * s - a * o)) / c,
                      l = ((t * r - e * n) * (a - s) - (e - r) * (i * s - a * o)) / c,
                      h = +u.toFixed(2),
                      f = +l.toFixed(2);
                    if (
                      !(
                        h < +Math.min(t, n).toFixed(2) ||
                        h > +Math.max(t, n).toFixed(2) ||
                        h < +Math.min(i, o).toFixed(2) ||
                        h > +Math.max(i, o).toFixed(2) ||
                        f < +Math.min(e, r).toFixed(2) ||
                        f > +Math.max(e, r).toFixed(2) ||
                        f < +Math.min(a, s).toFixed(2) ||
                        f > +Math.max(a, s).toFixed(2)
                      )
                    )
                      return { x: u, y: l };
                  }
                }
              },
              x = function(t, e, n) {
                return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height;
              },
              b = function(t, e, n, r, i) {
                if (i)
                  return [
                    ['M', +t + +i, e],
                    ['l', n - 2 * i, 0],
                    ['a', i, i, 0, 0, 1, i, i],
                    ['l', 0, r - 2 * i],
                    ['a', i, i, 0, 0, 1, -i, i],
                    ['l', 2 * i - n, 0],
                    ['a', i, i, 0, 0, 1, -i, -i],
                    ['l', 0, 2 * i - r],
                    ['a', i, i, 0, 0, 1, i, -i],
                    ['z'],
                  ];
                var a = [['M', t, e], ['l', n, 0], ['l', 0, r], ['l', -n, 0], ['z']];
                return (a.parsePathArray = g), a;
              },
              w = function(t, e, n, r) {
                return (
                  null === t && (t = e = n = r = 0),
                  null === e && ((e = t.y), (n = t.width), (r = t.height), (t = t.x)),
                  {
                    x: t,
                    y: e,
                    width: n,
                    w: n,
                    height: r,
                    h: r,
                    x2: t + n,
                    y2: e + r,
                    cx: t + n / 2,
                    cy: e + r / 2,
                    r1: Math.min(n, r) / 2,
                    r2: Math.max(n, r) / 2,
                    r0: Math.sqrt(n * n + r * r) / 2,
                    path: b(t, e, n, r),
                    vb: [t, e, n, r].join(' '),
                  }
                );
              },
              S = function(t, e, n, i, a, o, s, c) {
                r.isArray(t) || (t = [t, e, n, i, a, o, s, c]);
                var u = function(t, e, n, r, i, a, o, s) {
                  for (var c, u, l, h, f = [], d = [[], []], p = 0; p < 2; ++p)
                    if (
                      (0 === p
                        ? ((u = 6 * t - 12 * n + 6 * i), (c = -3 * t + 9 * n - 9 * i + 3 * o), (l = 3 * n - 3 * t))
                        : ((u = 6 * e - 12 * r + 6 * a), (c = -3 * e + 9 * r - 9 * a + 3 * s), (l = 3 * r - 3 * e)),
                      Math.abs(c) < 1e-12)
                    ) {
                      if (Math.abs(u) < 1e-12) continue;
                      (h = -l / u) > 0 && h < 1 && f.push(h);
                    } else {
                      var g = u * u - 4 * l * c,
                        v = Math.sqrt(g);
                      if (!(g < 0)) {
                        var m = (-u + v) / (2 * c);
                        m > 0 && m < 1 && f.push(m);
                        var y = (-u - v) / (2 * c);
                        y > 0 && y < 1 && f.push(y);
                      }
                    }
                  for (var x, b = f.length, w = b; b--; )
                    (x = 1 - (h = f[b])),
                      (d[0][b] = x * x * x * t + 3 * x * x * h * n + 3 * x * h * h * i + h * h * h * o),
                      (d[1][b] = x * x * x * e + 3 * x * x * h * r + 3 * x * h * h * a + h * h * h * s);
                  return (
                    (d[0][w] = t),
                    (d[1][w] = e),
                    (d[0][w + 1] = o),
                    (d[1][w + 1] = s),
                    (d[0].length = d[1].length = w + 2),
                    {
                      min: { x: Math.min.apply(0, d[0]), y: Math.min.apply(0, d[1]) },
                      max: { x: Math.max.apply(0, d[0]), y: Math.max.apply(0, d[1]) },
                    }
                  );
                }.apply(null, t);
                return w(u.min.x, u.min.y, u.max.x - u.min.x, u.max.y - u.min.y);
              },
              M = function(t, e, n, r, i, a, o, s, c) {
                var u = 1 - c,
                  l = Math.pow(u, 3),
                  h = Math.pow(u, 2),
                  f = c * c,
                  d = f * c,
                  p = t + 2 * c * (n - t) + f * (i - 2 * n + t),
                  g = e + 2 * c * (r - e) + f * (a - 2 * r + e),
                  v = n + 2 * c * (i - n) + f * (o - 2 * i + n),
                  m = r + 2 * c * (a - r) + f * (s - 2 * a + r);
                return {
                  x: l * t + 3 * h * c * n + 3 * u * c * c * i + d * o,
                  y: l * e + 3 * h * c * r + 3 * u * c * c * a + d * s,
                  m: { x: p, y: g },
                  n: { x: v, y: m },
                  start: { x: u * t + c * n, y: u * e + c * r },
                  end: { x: u * i + c * o, y: u * a + c * s },
                  alpha: 90 - (180 * Math.atan2(p - v, g - m)) / Math.PI,
                };
              },
              P = function(t, e, n) {
                if (
                  !(function(t, e) {
                    return (
                      (t = w(t)),
                      (e = w(e)),
                      x(e, t.x, t.y) ||
                        x(e, t.x2, t.y) ||
                        x(e, t.x, t.y2) ||
                        x(e, t.x2, t.y2) ||
                        x(t, e.x, e.y) ||
                        x(t, e.x2, e.y) ||
                        x(t, e.x, e.y2) ||
                        x(t, e.x2, e.y2) ||
                        (((t.x < e.x2 && t.x > e.x) || (e.x < t.x2 && e.x > t.x)) &&
                          ((t.y < e.y2 && t.y > e.y) || (e.y < t.y2 && e.y > t.y)))
                    );
                  })(S(t), S(e))
                )
                  return n ? 0 : [];
                for (
                  var r = ~~(m.apply(0, t) / 8),
                    i = ~~(m.apply(0, e) / 8),
                    a = [],
                    o = [],
                    s = {},
                    c = n ? 0 : [],
                    u = 0;
                  u < r + 1;
                  u++
                ) {
                  var l = M.apply(0, t.concat(u / r));
                  a.push({ x: l.x, y: l.y, t: u / r });
                }
                for (var h = 0; h < i + 1; h++) {
                  var f = M.apply(0, e.concat(h / i));
                  o.push({ x: f.x, y: f.y, t: h / i });
                }
                for (var d = 0; d < r; d++)
                  for (var p = 0; p < i; p++) {
                    var g = a[d],
                      v = a[d + 1],
                      b = o[p],
                      P = o[p + 1],
                      I = Math.abs(v.x - g.x) < 0.001 ? 'y' : 'x',
                      O = Math.abs(P.x - b.x) < 0.001 ? 'y' : 'x',
                      A = y(g.x, g.y, v.x, v.y, b.x, b.y, P.x, P.y);
                    if (A) {
                      if (s[A.x.toFixed(4)] === A.y.toFixed(4)) continue;
                      s[A.x.toFixed(4)] = A.y.toFixed(4);
                      var _ = g.t + Math.abs((A[I] - g[I]) / (v[I] - g[I])) * (v.t - g.t),
                        C = b.t + Math.abs((A[O] - b[O]) / (P[O] - b[O])) * (P.t - b.t);
                      _ >= 0 && _ <= 1 && C >= 0 && C <= 1 && (n ? c++ : c.push({ x: A.x, y: A.y, t1: _, t2: C }));
                    }
                  }
                return c;
              };
            function I(t, e) {
              var n = [],
                r = [];
              return (
                t.length &&
                  (function t(e, i) {
                    if (1 === e.length) n.push(e[0]), r.push(e[0]);
                    else {
                      for (var a = [], o = 0; o < e.length - 1; o++)
                        0 === o && n.push(e[0]),
                          o === e.length - 2 && r.push(e[o + 1]),
                          (a[o] = [(1 - i) * e[o][0] + i * e[o + 1][0], (1 - i) * e[o][1] + i * e[o + 1][1]]);
                      t(a, i);
                    }
                  })(t, e),
                { left: n, right: r.reverse() }
              );
            }
            var O = function(t, e) {
              if (t.length !== e.length) return !1;
              var n = !0;
              return (
                r.each(t, function(t, r) {
                  if (t !== e[r]) return (n = !1), !1;
                }),
                n
              );
            };
            function A(t, e, n) {
              var r = null,
                i = n;
              return e < i && ((i = e), (r = 'add')), t < i && ((i = t), (r = 'del')), { type: r, min: i };
            }
            function _(t, e, n) {
              for (var r, i = [].concat(t), a = 1 / (n + 1), o = C(e)[0], s = 1; s <= n; s++)
                (a *= s),
                  0 === (r = Math.floor(t.length * a))
                    ? i.unshift([o[0] * a + t[r][0] * (1 - a), o[1] * a + t[r][1] * (1 - a)])
                    : i.splice(r, 0, [o[0] * a + t[r][0] * (1 - a), o[1] * a + t[r][1] * (1 - a)]);
              return i;
            }
            function C(t) {
              var e = [];
              switch (t[0]) {
                case 'M':
                case 'L':
                  e.push([t[1], t[2]]);
                  break;
                case 'A':
                  e.push([t[6], t[7]]);
                  break;
                case 'Q':
                  e.push([t[3], t[4]]), e.push([t[1], t[2]]);
                  break;
                case 'T':
                  e.push([t[1], t[2]]);
                  break;
                case 'C':
                  e.push([t[5], t[6]]), e.push([t[1], t[2]]), e.push([t[3], t[4]]);
                  break;
                case 'S':
                  e.push([t[3], t[4]]), e.push([t[1], t[2]]);
                  break;
                case 'H':
                case 'V':
                  e.push([t[1], t[1]]);
              }
              return e;
            }
            t.exports = {
              parsePathString: s,
              parsePathArray: g,
              pathTocurve: d,
              pathToAbsolute: l,
              catmullRomToBezier: c,
              rectPath: b,
              fillPath: function(t, e) {
                if (1 === t.length) return t;
                var n = t.length - 1,
                  r = e.length - 1,
                  i = n / r,
                  a = [];
                if (1 === t.length && 'M' === t[0][0]) {
                  for (var o = 0; o < r - n; o++) t.push(t[0]);
                  return t;
                }
                for (var s = 0; s < r; s++) {
                  var c = Math.floor(i * s);
                  a[c] = (a[c] || 0) + 1;
                }
                var u = a.reduce(function(e, r, i) {
                  return i === n
                    ? e.concat(t[n])
                    : e.concat(
                        (function(t, e, n) {
                          if (1 === n) return [[].concat(t)];
                          var r = [];
                          if ('L' === e[0] || 'C' === e[0] || 'Q' === e[0])
                            r = r.concat(
                              (function(t, e, n) {
                                var r = [[t[1], t[2]]];
                                n = n || 2;
                                var i = [];
                                'A' === e[0]
                                  ? (r.push(e[6]), r.push(e[7]))
                                  : 'C' === e[0]
                                  ? (r.push([e[1], e[2]]), r.push([e[3], e[4]]), r.push([e[5], e[6]]))
                                  : 'S' === e[0] || 'Q' === e[0]
                                  ? (r.push([e[1], e[2]]), r.push([e[3], e[4]]))
                                  : r.push([e[1], e[2]]);
                                for (var a = r, o = 1 / n, s = 0; s < n - 1; s++) {
                                  var c = I(a, o / (1 - o * s));
                                  i.push(c.left), (a = c.right);
                                }
                                return (
                                  i.push(a),
                                  i.map(function(t) {
                                    var e = [];
                                    return (
                                      4 === t.length && (e.push('C'), (e = e.concat(t[2]))),
                                      t.length >= 3 && (3 === t.length && e.push('Q'), (e = e.concat(t[1]))),
                                      2 === t.length && e.push('L'),
                                      e.concat(t[t.length - 1])
                                    );
                                  })
                                );
                              })(t, e, n),
                            );
                          else {
                            var i = [].concat(t);
                            'M' === i[0] && (i[0] = 'L');
                            for (var a = 0; a <= n - 1; a++) r.push(i);
                          }
                          return r;
                        })(t[i], t[i + 1], r),
                      );
                }, []);
                return u.unshift(t[0]), ('Z' !== e[r] && 'z' !== e[r]) || u.push('Z'), u;
              },
              fillPathByDiff: function(t, e) {
                var n = (function(t, e) {
                    var n,
                      r,
                      i = t.length,
                      a = e.length,
                      o = 0;
                    if (0 === i || 0 === a) return null;
                    for (var s = [], c = 0; c <= i; c++) (s[c] = []), (s[c][0] = { min: c });
                    for (var u = 0; u <= a; u++) s[0][u] = { min: u };
                    for (var l = 1; l <= i; l++) {
                      n = t[l - 1];
                      for (var h = 1; h <= a; h++) {
                        (r = e[h - 1]), (o = O(n, r) ? 0 : 1);
                        var f = s[l - 1][h].min + 1,
                          d = s[l][h - 1].min + 1,
                          p = s[l - 1][h - 1].min + o;
                        s[l][h] = A(f, d, p);
                      }
                    }
                    return s;
                  })(t, e),
                  r = t.length,
                  i = e.length,
                  a = [],
                  o = 1,
                  s = 1;
                if (n[r][i] !== r) {
                  for (var c = 1; c <= r; c++) {
                    var u = n[c][c].min;
                    s = c;
                    for (var l = o; l <= i; l++) n[c][l].min < u && ((u = n[c][l].min), (s = l));
                    (o = s), n[c][o].type && a.push({ index: c - 1, type: n[c][o].type });
                  }
                  for (var h = a.length - 1; h >= 0; h--)
                    (o = a[h].index), 'add' === a[h].type ? t.splice(o, 0, [].concat(t[o])) : t.splice(o, 1);
                }
                var f = i - (r = t.length);
                if (r < i)
                  for (var d = 0; d < f; d++)
                    'z' === t[r - 1][0] || 'Z' === t[r - 1][0] ? t.splice(r - 2, 0, t[r - 2]) : t.push(t[r - 1]),
                      (r += 1);
                return t;
              },
              formatPath: function(t, e) {
                if (t.length <= 1) return t;
                for (var n, r = 0; r < e.length; r++)
                  if (t[r][0] !== e[r][0])
                    switch (((n = C(t[r])), e[r][0])) {
                      case 'M':
                        t[r] = ['M'].concat(n[0]);
                        break;
                      case 'L':
                        t[r] = ['L'].concat(n[0]);
                        break;
                      case 'A':
                        (t[r] = [].concat(e[r])), (t[r][6] = n[0][0]), (t[r][7] = n[0][1]);
                        break;
                      case 'Q':
                        if (n.length < 2) {
                          if (!(r > 0)) {
                            t[r] = e[r];
                            break;
                          }
                          n = _(n, t[r - 1], 1);
                        }
                        t[r] = ['Q'].concat(
                          n.reduce(function(t, e) {
                            return t.concat(e);
                          }, []),
                        );
                        break;
                      case 'T':
                        t[r] = ['T'].concat(n[0]);
                        break;
                      case 'C':
                        if (n.length < 3) {
                          if (!(r > 0)) {
                            t[r] = e[r];
                            break;
                          }
                          n = _(n, t[r - 1], 2);
                        }
                        t[r] = ['C'].concat(
                          n.reduce(function(t, e) {
                            return t.concat(e);
                          }, []),
                        );
                        break;
                      case 'S':
                        if (n.length < 2) {
                          if (!(r > 0)) {
                            t[r] = e[r];
                            break;
                          }
                          n = _(n, t[r - 1], 1);
                        }
                        t[r] = ['S'].concat(
                          n.reduce(function(t, e) {
                            return t.concat(e);
                          }, []),
                        );
                        break;
                      default:
                        t[r] = e[r];
                    }
                return t;
              },
              intersection: function(t, e) {
                return (function(t, e, n) {
                  var r, i, a, o, s, c, u, l, h, f;
                  (t = d(t)), (e = d(e));
                  for (var p = [], g = 0, v = t.length; g < v; g++) {
                    var m = t[g];
                    if ('M' === m[0]) (r = s = m[1]), (i = c = m[2]);
                    else {
                      'C' === m[0]
                        ? ((r = (h = [r, i].concat(m.slice(1)))[6]), (i = h[7]))
                        : ((h = [r, i, r, i, s, c, s, c]), (r = s), (i = c));
                      for (var y = 0, x = e.length; y < x; y++) {
                        var b = e[y];
                        if ('M' === b[0]) (a = u = b[1]), (o = l = b[2]);
                        else {
                          'C' === b[0]
                            ? ((a = (f = [a, o].concat(b.slice(1)))[6]), (o = f[7]))
                            : ((f = [a, o, a, o, u, l, u, l]), (a = u), (o = l));
                          for (var w = P(h, f, n), S = 0, M = w.length; S < M; S++)
                            (w[S].segment1 = g), (w[S].segment2 = y), (w[S].bez1 = h), (w[S].bez2 = f);
                          p = p.concat(w);
                        }
                      }
                    }
                  }
                  return p;
                })(t, e);
              },
            };
          },
          function(t, e, n) {
            var r = n(0),
              i = n(4),
              a = n(20),
              o = n(23),
              s = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            (s.Symbols = {
              circle: function(t, e, n) {
                return [['M', t, e], ['m', -n, 0], ['a', n, n, 0, 1, 0, 2 * n, 0], ['a', n, n, 0, 1, 0, 2 * -n, 0]];
              },
              square: function(t, e, n) {
                return [['M', t - n, e - n], ['L', t + n, e - n], ['L', t + n, e + n], ['L', t - n, e + n], ['Z']];
              },
              diamond: function(t, e, n) {
                return [['M', t - n, e], ['L', t, e - n], ['L', t + n, e], ['L', t, e + n], ['Z']];
              },
              triangle: function(t, e, n) {
                var r = n * Math.sin((1 / 3) * Math.PI);
                return [['M', t - n, e + r], ['L', t, e - r], ['L', t + n, e + r], ['z']];
              },
              'triangle-down': function(t, e, n) {
                var r = n * Math.sin((1 / 3) * Math.PI);
                return [['M', t - n, e - r], ['L', t + n, e - r], ['L', t, e + r], ['Z']];
              },
            }),
              (s.ATTRS = { path: null, lineWidth: 1 }),
              r.extend(s, i),
              r.augment(s, {
                type: 'marker',
                canFill: !0,
                canStroke: !0,
                getDefaultAttrs: function() {
                  return { x: 0, y: 0, lineWidth: 1 };
                },
                calculateBox: function() {
                  var t = this._attrs,
                    e = t.x,
                    n = t.y,
                    r = t.radius,
                    i = this.getHitLineWidth() / 2 + r;
                  return { minX: e - i, minY: n - i, maxX: e + i, maxY: n + i };
                },
                _getPath: function() {
                  var t,
                    e = this._attrs,
                    n = e.x,
                    i = e.y,
                    a = e.radius || e.r,
                    o = e.symbol || 'circle';
                  return (t = r.isFunction(o) ? o : s.Symbols[o])
                    ? t(n, i, a)
                    : (console.warn(o + ' marker is not supported.'), null);
                },
                createPath: function(t) {
                  var e = this._cfg.segments;
                  if (!e || this._cfg.hasUpdate) {
                    var n,
                      r = a.parsePath(this._getPath());
                    t.beginPath(), (e = []);
                    for (var i = 0; i < r.length; i++) {
                      var s = r[i];
                      (n = new o(s, n, i === r.length - 1)), e.push(n), n.draw(t);
                    }
                    (this._cfg.segments = e), (this._cfg.hasUpdate = !1);
                  } else {
                    t.beginPath();
                    for (var c = 0; c < e.length; c++) e[c].draw(t);
                  }
                },
              }),
              (t.exports = s);
          },
          function(t, e, n) {
            var r = n(0),
              i = r.vec2;
            function a(t, e, n, r, i) {
              var a = 1 - i;
              return a * a * (a * r + 3 * i * n) + i * i * (i * t + 3 * a * e);
            }
            function o(t, e, n, r, o, s, c, u, l, h, f) {
              var d,
                p,
                g,
                v,
                m,
                y,
                x,
                b,
                w = 0.005,
                S = 1 / 0,
                M = [l, h];
              for (p = 0; p < 1; p += 0.05)
                (g = [a(t, n, o, c, p), a(e, r, s, u, p)]), (v = i.squaredDistance(M, g)) < S && ((d = p), (S = v));
              S = 1 / 0;
              for (var P = 0; P < 32 && !(w < 1e-4); P++)
                (b = d + w),
                  (g = [a(t, n, o, c, (x = d - w)), a(e, r, s, u, x)]),
                  (v = i.squaredDistance(M, g)),
                  x >= 0 && v < S
                    ? ((d = x), (S = v))
                    : ((y = [a(t, n, o, c, b), a(e, r, s, u, b)]),
                      (m = i.squaredDistance(M, y)),
                      b <= 1 && m < S ? ((d = b), (S = m)) : (w *= 0.5));
              return f && ((f.x = a(t, n, o, c, d)), (f.y = a(e, r, s, u, d))), Math.sqrt(S);
            }
            function s(t, e, n, r, i) {
              return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n;
            }
            t.exports = {
              at: a,
              derivativeAt: function(t, e, n, r, i) {
                var a = 1 - i;
                return 3 * (((e - t) * a + 2 * (n - e) * i) * a + (r - n) * i * i);
              },
              projectPoint: function(t, e, n, r, i, a, s, c, u, l) {
                var h = {};
                return o(t, e, n, r, i, a, s, c, u, l, h), h;
              },
              pointDistance: o,
              extrema: function(t, e, n, i) {
                var a,
                  o,
                  s,
                  c = 3 * t - 9 * e + 9 * n - 3 * i,
                  u = 6 * e - 12 * n + 6 * i,
                  l = 3 * n - 3 * i,
                  h = [];
                if (r.isNumberEqual(c, 0)) r.isNumberEqual(u, 0) || ((a = -l / u) >= 0 && a <= 1 && h.push(a));
                else {
                  var f = u * u - 4 * c * l;
                  r.isNumberEqual(f, 0)
                    ? h.push(-u / (2 * c))
                    : f > 0 &&
                      ((o = (-u - (s = Math.sqrt(f))) / (2 * c)),
                      (a = (-u + s) / (2 * c)) >= 0 && a <= 1 && h.push(a),
                      o >= 0 && o <= 1 && h.push(o));
                }
                return h;
              },
              len: function(t, e, n, i, a, o, c, u, l) {
                r.isNil(l) && (l = 1);
                for (
                  var h = (l = l > 1 ? 1 : l < 0 ? 0 : l) / 2,
                    f = [
                      -0.1252,
                      0.1252,
                      -0.3678,
                      0.3678,
                      -0.5873,
                      0.5873,
                      -0.7699,
                      0.7699,
                      -0.9041,
                      0.9041,
                      -0.9816,
                      0.9816,
                    ],
                    d = [
                      0.2491,
                      0.2491,
                      0.2335,
                      0.2335,
                      0.2032,
                      0.2032,
                      0.1601,
                      0.1601,
                      0.1069,
                      0.1069,
                      0.0472,
                      0.0472,
                    ],
                    p = 0,
                    g = 0;
                  g < 12;
                  g++
                ) {
                  var v = h * f[g] + h,
                    m = s(v, t, n, a, c),
                    y = s(v, e, i, o, u),
                    x = m * m + y * y;
                  p += d[g] * Math.sqrt(x);
                }
                return h * p;
              },
            };
          },
          function(t, e, n) {
            var r = n(26),
              i = n(61),
              a = n(34),
              o = n(25);
            t.exports = {
              line: function(t, e, n, i, a, o, s) {
                var c = r.box(t, e, n, i, a);
                if (!this.box(c.minX, c.maxX, c.minY, c.maxY, o, s)) return !1;
                var u = r.pointDistance(t, e, n, i, o, s);
                return !isNaN(u) && u <= a / 2;
              },
              polyline: function(t, e, n, r) {
                var i = t.length - 1;
                if (i < 1) return !1;
                for (var a = 0; a < i; a++) {
                  var o = t[a][0],
                    s = t[a][1],
                    c = t[a + 1][0],
                    u = t[a + 1][1];
                  if (this.line(o, s, c, u, e, n, r)) return !0;
                }
                return !1;
              },
              cubicline: function(t, e, n, r, i, o, s, c, u, l, h) {
                return a.pointDistance(t, e, n, r, i, o, s, c, l, h) <= u / 2;
              },
              quadraticline: function(t, e, n, r, a, o, s, c, u) {
                return i.pointDistance(t, e, n, r, a, o, c, u) <= s / 2;
              },
              arcline: function(t, e, n, r, i, a, s, c, u) {
                return o.pointDistance(t, e, n, r, i, a, c, u) <= s / 2;
              },
              rect: function(t, e, n, r, i, a) {
                return t <= i && i <= t + n && e <= a && a <= e + r;
              },
              circle: function(t, e, n, r, i) {
                return Math.pow(r - t, 2) + Math.pow(i - e, 2) <= Math.pow(n, 2);
              },
              box: function(t, e, n, r, i, a) {
                return t <= i && i <= e && n <= a && a <= r;
              },
            };
          },
          function(t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.setMatrixArrayType = function(t) {
                e.ARRAY_TYPE = t;
              }),
              (e.toRadian = function(t) {
                return t * i;
              }),
              (e.equals = function(t, e) {
                return Math.abs(t - e) <= r * Math.max(1, Math.abs(t), Math.abs(e));
              });
            var r = (e.EPSILON = 1e-6);
            (e.ARRAY_TYPE = 'undefined' != typeof Float32Array ? Float32Array : Array), (e.RANDOM = Math.random);
            var i = Math.PI / 180;
          },
          function(t, e, n) {
            var r = n(132);
            (r.translate = function(t, e, n) {
              var i = new Array(9);
              return r.fromTranslation(i, n), r.multiply(t, i, e);
            }),
              (r.rotate = function(t, e, n) {
                var i = new Array(9);
                return r.fromRotation(i, n), r.multiply(t, i, e);
              }),
              (r.scale = function(t, e, n) {
                var i = new Array(9);
                return r.fromScaling(i, n), r.multiply(t, i, e);
              }),
              (t.exports = r);
          },
          function(t, e, n) {
            var r =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                  ? function(t) {
                      return typeof t;
                    }
                  : function(t) {
                      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    },
              i = n(3);
            t.exports = function t(e) {
              if ('object' !== (void 0 === e ? 'undefined' : r(e)) || null === e) return e;
              var n = void 0;
              if (i(e)) {
                n = [];
                for (var a = 0, o = e.length; a < o; a++)
                  'object' === r(e[a]) && null != e[a] ? (n[a] = t(e[a])) : (n[a] = e[a]);
              } else
                for (var s in ((n = {}), e)) 'object' === r(e[s]) && null != e[s] ? (n[s] = t(e[s])) : (n[s] = e[s]);
              return n;
            };
          },
          function(t, e, n) {
            var r = n(2);
            t.exports = function(t) {
              return r(t, 'Function');
            };
          },
          function(t, e, n) {
            t.exports = {
              isFunction: n(39),
              isObject: n(9),
              isBoolean: n(144),
              isNil: n(12),
              isString: n(15),
              isArray: n(3),
              isNumber: n(74),
              isEmpty: n(143),
              uniqueId: n(73),
              clone: n(38),
              deepMix: n(8),
              assign: n(28),
              merge: n(8),
              upperFirst: n(72),
              each: n(5),
              isEqual: n(139),
              toArray: n(71),
              extend: n(70),
              augment: n(69),
              remove: n(138),
              isNumberEqual: n(137),
              toRadian: n(136),
              toDegree: n(135),
              mod: n(134),
              clamp: n(68),
              createDom: n(7),
              modifyCSS: n(6),
              requestAnimationFrame: n(133),
              getRatio: function() {
                return window.devicePixelRatio ? window.devicePixelRatio : 2;
              },
              mat3: n(37),
              vec2: n(67),
              vec3: n(66),
              transform: n(65),
            };
          },
          function(t, e, n) {
            var r = n(1),
              i = n(47),
              a = n(16),
              o = ['fillStyle', 'strokeStyle', 'path', 'points', 'img', 'symbol'],
              s = (function() {
                function t(t) {
                  this._cfg = r.mix(
                    {
                      id: null,
                      type: 'item',
                      model: {},
                      group: null,
                      animate: !1,
                      visible: !0,
                      event: !0,
                      keyShape: null,
                      states: [],
                    },
                    this.getDefaultCfg(),
                    t,
                  );
                  var e = t.group;
                  e.set('item', this);
                  var n = this.get('model').id;
                  (n && '' !== n) || (n = r.uniqueId(this.get('type'))),
                    this.set('id', n),
                    e.set('id', n),
                    this.init(),
                    this.draw();
                }
                var e = t.prototype;
                return (
                  (e.isItem = function() {
                    return !0;
                  }),
                  (e.get = function(t) {
                    return this._cfg[t];
                  }),
                  (e.set = function(t, e) {
                    r.isPlainObject(t) ? (this._cfg = r.mix({}, this._cfg, t)) : (this._cfg[t] = e);
                  }),
                  (e.getDefaultCfg = function() {
                    return {};
                  }),
                  (e.init = function() {
                    var t = i.getFactory(this.get('type'));
                    this.set('shapeFactory', t);
                  }),
                  (e._calculateBBox = function() {
                    var t = this.get('keyShape'),
                      e = this.get('group'),
                      n = r.getBBox(t, e);
                    return (
                      (n.x = n.minX),
                      (n.y = n.minY),
                      (n.width = n.maxX - n.minX),
                      (n.height = n.maxY - n.minY),
                      (n.centerX = (n.minX + n.maxX) / 2),
                      (n.centerY = (n.minY + n.maxY) / 2),
                      n
                    );
                  }),
                  (e.updatePosition = function(t) {
                    var e = this.get('model'),
                      n = r.isNil(t.x) ? e.x : t.x,
                      i = r.isNil(t.y) ? e.y : t.y,
                      a = this.get('group');
                    r.isNil(n) ||
                      r.isNil(i) ||
                      (a.resetMatrix(), a.translate(n, i), (e.x = n), (e.y = i), this.set('bboxCache', null));
                  }),
                  (e._drawInner = function() {
                    var t = this.get('shapeFactory'),
                      e = this.get('group'),
                      n = this.get('model');
                    if ((e.clear(), t)) {
                      this.updatePosition(n);
                      var r = this.getShapeCfg(n),
                        i = r.shape,
                        a = t.draw(i, r, e);
                      a &&
                        ((a.isKeyShape = !0),
                        this.set('keyShape', a),
                        this.set('originStyle', this.getKeyShapeStyle())),
                        this.set('currentShape', i),
                        this._resetStates(t, i);
                    }
                  }),
                  (e.getKeyShapeStyle = function() {
                    var t = this.getKeyShape();
                    if (t) {
                      var e = {};
                      return (
                        r.each(t.attr(), function(t, n) {
                          o.indexOf(n) < 0 && (e[n] = t);
                        }),
                        e
                      );
                    }
                  }),
                  (e._resetStates = function(t, e) {
                    var n = this,
                      i = n.get('states');
                    r.each(i, function(r) {
                      t.setState(e, r, !0, n);
                    });
                  }),
                  (e.getStates = function() {
                    return this.get('states');
                  }),
                  (e.hasState = function(t) {
                    return this.get('states').indexOf(t) >= 0;
                  }),
                  (e.getStateStyle = function(t) {
                    var e = a[this.getType() + 'StateStyle'][t],
                      n = this.get('styles'),
                      i = n && n[t],
                      o = t + 'Style';
                    return r.mix({}, e, i, this.get(o));
                  }),
                  (e.getOriginStyle = function() {
                    return this.get('originStyle');
                  }),
                  (e.getCurrentStatesStyle = function() {
                    var t = this,
                      e = r.mix({}, t.getOriginStyle());
                    return (
                      r.each(t.getStates(), function(n) {
                        r.mix(e, t.getStateStyle(n));
                      }),
                      e
                    );
                  }),
                  (e.setState = function(t, e) {
                    var n = this.get('states'),
                      r = this.get('shapeFactory'),
                      i = n.indexOf(t);
                    if (e) {
                      if (i > -1) return;
                      n.push(t);
                    } else i > -1 && n.splice(i, 1);
                    if (r) {
                      var a = this.get('model');
                      r.setState(a.shape, t, e, this);
                    }
                  }),
                  (e.clearStates = function(t) {
                    var e = this,
                      n = e.getStates(),
                      i = e.get('shapeFactory'),
                      a = e.get('model').shape;
                    if (!t) return e.set('states', []), void i.setState(a, n[0], !1, e);
                    r.isString(t) && (t = [t]);
                    var o = n.filter(function(n) {
                      return i.setState(a, n, !1, e), !(t.indexOf(n) >= 0);
                    });
                    e.set('states', o);
                  }),
                  (e.getContainer = function() {
                    return this.get('group');
                  }),
                  (e.getKeyShape = function() {
                    return this.get('keyShape');
                  }),
                  (e.getModel = function() {
                    return this.get('model');
                  }),
                  (e.getType = function() {
                    return this.get('type');
                  }),
                  (e.beforeDraw = function() {}),
                  (e.afterDraw = function() {}),
                  (e.getShapeCfg = function(t) {
                    var e = this.get('styles');
                    if (e && e.default) {
                      var n = r.mix({}, t);
                      return (n.style = r.mix({}, e.default, t.style)), n;
                    }
                    return t;
                  }),
                  (e.refresh = function() {
                    this.update();
                  }),
                  (e.update = function(t) {
                    var e = this.get('model'),
                      n = this.get('shapeFactory'),
                      i = e.shape,
                      a = r.mix({}, e, t);
                    if (this._isOnlyMove(t)) this.updatePosition(a);
                    else if (n.shouldUpdate(i) && a.shape === this.get('currentShape')) {
                      var o = this.getShapeCfg(a);
                      (a.x === e.x && a.y === e.y) || this.updatePosition(a),
                        n.update(i, o, this),
                        this.set('model', a),
                        this.set('originStyle', this.getKeyShapeStyle()),
                        this._resetStates(n, i);
                    } else this.set('model', a), this.draw(), this.set('originStyle', this.getKeyShapeStyle());
                    this.set('bboxCache', null), this.afterUpdate();
                  }),
                  (e.afterUpdate = function() {}),
                  (e._isOnlyMove = function(t) {
                    if (!t) return !1;
                    var e = !r.isNil(t.x),
                      n = !r.isNil(t.y),
                      i = Object.keys(t);
                    return (1 === i.length && (e || n)) || (2 === i.length && e && n);
                  }),
                  (e.draw = function() {
                    this.beforeDraw(), this._drawInner(), this.afterDraw();
                  }),
                  (e.getBBox = function() {
                    var t = this.get('bboxCache');
                    return t || ((t = this._calculateBBox()), this.set('bboxCache', t)), t;
                  }),
                  (e.toFront = function() {
                    this.get('group').toFront();
                  }),
                  (e.toBack = function() {
                    this.get('group').toBack();
                  }),
                  (e.show = function() {
                    this.changeVisibility(!0);
                  }),
                  (e.hide = function() {
                    this.changeVisibility(!1);
                  }),
                  (e.changeVisibility = function(t) {
                    var e = this.get('group');
                    t ? e.show() : e.hide(), this.set('visible', t);
                  }),
                  (e.enableCapture = function(t) {
                    var e = this.get('group');
                    e && e.attr('capture', t);
                  }),
                  (e.isVisible = function() {
                    return this.get('visible');
                  }),
                  (e.destroy = function() {
                    if (!this.destroyed) {
                      var t = this.get('animate'),
                        e = this.get('group');
                      t && e.stopAnimate(), e.remove(), (this._cfg = null), (this.destroyed = !0);
                    }
                  }),
                  t
                );
              })();
            t.exports = s;
          },
          function(t, e, n) {
            var r = n(29),
              i = r.EventEmitter,
              a = n(1),
              o = n(16),
              s = n(88),
              c = (function(t) {
                !(function(t, e) {
                  (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
                })(n, t);
                var e = n.prototype;
                function n(e) {
                  var n;
                  return ((n = t.call(this) || this)._cfg = a.deepMix(n.getDefaultCfg(), e)), n._init(), n;
                }
                return (
                  (e.getDefaultCfg = function() {
                    return {
                      container: void 0,
                      width: void 0,
                      height: void 0,
                      renderer: 'canvas',
                      mode: [],
                      plugins: [],
                      data: null,
                      fitViewPadding: 10,
                      minZoom: 0.2,
                      maxZoom: 10,
                      event: !0,
                      groupByTypes: !0,
                      directed: !1,
                      autoPaint: !0,
                      nodes: [],
                      edges: [],
                      itemMap: {},
                      linkCenter: !1,
                      defaultNode: {},
                      defaultEdge: {},
                      nodeStyle: {},
                      edgeStyle: {},
                      states: {},
                      animate: !1,
                      animateCfg: { onFrame: null, duration: 500, easing: 'easeLinear' },
                      callback: null,
                    };
                  }),
                  (e._init = function() {
                    this._initCanvas();
                    var t = new s.Event(this),
                      e = new s.View(this),
                      n = new s.Mode(this),
                      r = new s.Item(this),
                      i = new s.State(this);
                    this.set({
                      eventController: t,
                      viewController: e,
                      modeController: n,
                      itemController: r,
                      stateController: i,
                    }),
                      this._initPlugins();
                  }),
                  (e._initCanvas = function() {
                    var t = this.get('container');
                    if ((a.isString(t) && ((t = document.getElementById(t)), this.set('container', t)), !t))
                      throw Error('invalid container');
                    var e = new r.Canvas({
                      containerDOM: t,
                      width: this.get('width'),
                      height: this.get('height'),
                      renderer: this.get('renderer'),
                      pixelRatio: this.get('pixelRatio'),
                    });
                    this.set('canvas', e), this._initGroups();
                  }),
                  (e._initGroups = function() {
                    var t = this.get('canvas'),
                      e = this.get('canvas').get('el').id,
                      n = t.addGroup({ id: e + '-root', className: o.rootContainerClassName });
                    if (this.get('groupByTypes')) {
                      var r = n.addGroup({ id: e + '-edge', className: o.edgeContainerClassName }),
                        i = n.addGroup({ id: e + '-node', className: o.nodeContainerClassName });
                      this.set({ nodeGroup: i, edgeGroup: r });
                    }
                    this.set('group', n);
                  }),
                  (e._initPlugins = function() {
                    var t = this;
                    a.each(t.get('plugins'), function(e) {
                      !e.destroyed && e.initPlugin && e.initPlugin(t);
                    });
                  }),
                  (e.get = function(t) {
                    return this._cfg[t];
                  }),
                  (e.set = function(t, e) {
                    return a.isPlainObject(t) ? (this._cfg = a.mix({}, this._cfg, t)) : (this._cfg[t] = e), this;
                  }),
                  (e.update = function(t, e) {
                    this.updateItem(t, e);
                  }),
                  (e.updateItem = function(t, e) {
                    this.get('itemController').updateItem(t, e);
                  }),
                  (e.setItemState = function(t, e, n) {
                    a.isString(t) && (t = this.findById(t)),
                      this.get('itemController').setItemState(t, e, n),
                      this.get('stateController').updateState(t, e, n);
                  }),
                  (e.clearItemStates = function(t, e) {
                    this.get('itemController').clearItemStates(t, e);
                  }),
                  (e.add = function(t, e) {
                    return this.addItem(t, e);
                  }),
                  (e.addItem = function(t, e) {
                    return this.get('itemController').addItem(t, e);
                  }),
                  (e.remove = function(t) {
                    this.removeItem(t);
                  }),
                  (e.removeItem = function(t) {
                    this.get('itemController').removeItem(t);
                  }),
                  (e.data = function(t) {
                    this.set('data', t);
                  }),
                  (e.refreshItem = function(t) {
                    this.get('itemController').refreshItem(t);
                  }),
                  (e.refresh = function() {
                    var t = this.get('autoPaint');
                    if ((this.setAutoPaint(!1), this.emit('beforegraphrefresh'), this.get('animate')))
                      this.positionsAnimate();
                    else {
                      var e = this.get('nodes'),
                        n = this.get('edges');
                      a.each(e, function(t) {
                        t.refresh();
                      }),
                        a.each(n, function(t) {
                          t.refresh();
                        });
                    }
                    this.setAutoPaint(t), this.emit('aftergraphrefresh'), this.autoPaint();
                  }),
                  (e.refreshPositions = function() {
                    this.emit('beforegraphrefreshposition');
                    var t = this.get('nodes'),
                      e = this.get('edges');
                    a.each(t, function(t) {
                      t.updatePosition({});
                    }),
                      a.each(e, function(t) {
                        t.refresh();
                      }),
                      this.emit('aftergraphrefreshposition'),
                      this.autoPaint();
                  }),
                  (e.render = function() {
                    var t = this,
                      e = this.get('data');
                    if (!e) throw new Error('data must be defined first');
                    this.clear(), this.emit('beforerender');
                    var n = this.get('autoPaint');
                    this.setAutoPaint(!1),
                      a.each(e.nodes, function(e) {
                        t.add('node', e);
                      }),
                      a.each(e.edges, function(e) {
                        t.add('edge', e);
                      }),
                      t.get('fitView') && t.get('viewController')._fitView(),
                      t.paint(),
                      t.setAutoPaint(n),
                      t.emit('afterrender');
                  }),
                  (e.read = function(t) {
                    this.data(t), this.render();
                  }),
                  (e.changeData = function(t) {
                    var e = this;
                    if (!t) return this;
                    e.get('data') || (e.data(t), e.render());
                    var n = this.get('autoPaint'),
                      r = this.get('itemMap'),
                      i = { nodes: [], edges: [] };
                    return (
                      this.setAutoPaint(!1),
                      this._diffItems('node', i, t.nodes),
                      this._diffItems('edge', i, t.edges),
                      a.each(r, function(t, n) {
                        i.nodes.indexOf(t) < 0 && i.edges.indexOf(t) < 0 && (delete r[n], e.remove(t));
                      }),
                      this.set({ nodes: i.nodes, edges: i.edges }),
                      e.get('animate') ? e.positionsAnimate() : this.paint(),
                      this.setAutoPaint(n),
                      this
                    );
                  }),
                  (e._diffItems = function(t, e, n) {
                    var r,
                      i = this,
                      o = this.get('itemMap');
                    a.each(n, function(n) {
                      if ((r = o[n.id])) {
                        if (i.get('animate') && 'node' === t) {
                          var a = r.getContainer().getMatrix();
                          r.set('originAttrs', { x: a[6], y: a[7] });
                        }
                        i.updateItem(r, n);
                      } else r = i.addItem(t, n);
                      e[t + 's'].push(r);
                    });
                  }),
                  (e.paint = function() {
                    this.emit('beforepaint'), this.get('canvas').draw(), this.emit('afterpaint');
                  }),
                  (e.autoPaint = function() {
                    this.get('autoPaint') && this.paint();
                  }),
                  (e.save = function() {
                    var t = [],
                      e = [];
                    return (
                      a.each(this.get('nodes'), function(e) {
                        t.push(e.getModel());
                      }),
                      a.each(this.get('edges'), function(t) {
                        e.push(t.getModel());
                      }),
                      { nodes: t, edges: e }
                    );
                  }),
                  (e.changeSize = function(t, e) {
                    return this.get('viewController').changeSize(t, e), this.autoPaint(), this;
                  }),
                  (e.translate = function(t, e) {
                    var n = this.get('group');
                    n.translate(t, e),
                      this.emit('viewportchange', { action: 'translate', matrix: n.getMatrix() }),
                      this.autoPaint();
                  }),
                  (e.moveTo = function(t, e) {
                    var n = this.get('group');
                    n.move(t, e),
                      this.emit('viewportchange', { action: 'move', matrix: n.getMatrix() }),
                      this.autoPaint();
                  }),
                  (e.fitView = function(t) {
                    t && this.set('fitViewPadding', t), this.get('viewController')._fitView(), this.paint();
                  }),
                  (e.addBehaviors = function(t, e) {
                    return this.get('modeController').manipulateBehaviors(t, e, !0), this;
                  }),
                  (e.removeBehaviors = function(t, e) {
                    return this.get('modeController').manipulateBehaviors(t, e, !1), this;
                  }),
                  (e.setMode = function(t) {
                    return this.set('mode', t), this.get('modeController').setMode(t), this;
                  }),
                  (e.getCurrentMode = function() {
                    return this.get('mode');
                  }),
                  (e.getZoom = function() {
                    return this.get('group').getMatrix()[0];
                  }),
                  (e.getNodes = function() {
                    return this.get('nodes');
                  }),
                  (e.getEdges = function() {
                    return this.get('edges');
                  }),
                  (e.zoom = function(t, e) {
                    var n = a.clone(this.get('group').getMatrix()),
                      r = this.get('minZoom'),
                      i = this.get('maxZoom');
                    e
                      ? (a.mat3.translate(n, n, [-e.x, -e.y]),
                        a.mat3.scale(n, n, [t, t]),
                        a.mat3.translate(n, n, [e.x, e.y]))
                      : a.mat3.scale(n, n, [t, t]),
                      (r && n[0] < r) ||
                        (i && n[0] > i) ||
                        (this.get('group').setMatrix(n),
                        this.emit('viewportchange', { action: 'zoom', matrix: n }),
                        this.autoPaint());
                  }),
                  (e.zoomTo = function(t, e) {
                    var n = t / this.getZoom();
                    this.zoom(n, e);
                  }),
                  (e.positionsAnimate = function() {
                    var t = this;
                    t.emit('beforeanimate');
                    var e = t.get('animateCfg'),
                      n = e.onFrame,
                      r = t.getNodes(),
                      i = r.map(function(t) {
                        var e = t.getModel();
                        return { id: e.id, x: e.x, y: e.y };
                      });
                    t.isAnimating() && t.stopAnimate(),
                      t.get('canvas').animate(
                        {
                          onFrame: function(e) {
                            a.each(i, function(r) {
                              var i = t.findById(r.id);
                              if (i && !i.destroyed) {
                                var o = i.get('originAttrs'),
                                  s = i.get('model');
                                if (!o) {
                                  var c = i.getContainer().getMatrix();
                                  (o = { x: c[6], y: c[7] }), i.set('originAttrs', o);
                                }
                                if (n) {
                                  var u = n(i, e, r, o);
                                  i.set('model', a.mix(s, u));
                                } else (s.x = o.x + (r.x - o.x) * e), (s.y = o.y + (r.y - o.y) * e);
                              }
                            }),
                              t.refreshPositions();
                          },
                        },
                        e.duration,
                        e.easing,
                        function() {
                          a.each(r, function(t) {
                            t.set('originAttrs', null);
                          }),
                            e.callback && e.callback(),
                            t.emit('afteranimate'),
                            (t.animating = !1);
                        },
                      );
                  }),
                  (e.stopAnimate = function() {
                    this.get('canvas').stopAnimate();
                  }),
                  (e.isAnimating = function() {
                    return this.animating;
                  }),
                  (e.focusItem = function(t) {
                    this.get('viewController').focus(t), this.autoPaint();
                  }),
                  (e.getPointByClient = function(t, e) {
                    return this.get('viewController').getPointByClient(t, e);
                  }),
                  (e.getClientByPoint = function(t, e) {
                    return this.get('viewController').getClientByPoint(t, e);
                  }),
                  (e.getPointByCanvas = function(t, e) {
                    return this.get('viewController').getPointByCanvas(t, e);
                  }),
                  (e.getCanvasByPoint = function(t, e) {
                    return this.get('viewController').getCanvasByPoint(t, e);
                  }),
                  (e.showItem = function(t) {
                    this.get('itemController').changeItemVisibility(t, !0);
                  }),
                  (e.hideItem = function(t) {
                    this.get('itemController').changeItemVisibility(t, !1);
                  }),
                  (e.findById = function(t) {
                    return this.get('itemMap')[t];
                  }),
                  (e.find = function(t, e) {
                    var n,
                      r = this.get(t + 's');
                    return (
                      a.each(r, function(t, r) {
                        if (e(t, r)) return (n = t), !1;
                      }),
                      n
                    );
                  }),
                  (e.findAll = function(t, e) {
                    var n = [];
                    return (
                      a.each(this.get(t + 's'), function(t, r) {
                        e(t, r) && n.push(t);
                      }),
                      n
                    );
                  }),
                  (e.findAllByState = function(t, e) {
                    return this.findAll(t, function(t) {
                      return t.hasState(e);
                    });
                  }),
                  (e.setAutoPaint = function(t) {
                    this.set('autoPaint', t);
                  }),
                  (e.toDataURL = function() {
                    var t = this.get('canvas'),
                      e = t.getRenderer(),
                      n = t.get('el'),
                      r = '';
                    if ('svg' === e) {
                      var i = n.cloneNode(!0),
                        a = document.implementation.createDocumentType(
                          'svg',
                          '-//W3C//DTD SVG 1.1//EN',
                          'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd',
                        ),
                        o = document.implementation.createDocument('http://www.w3.org/2000/svg', 'svg', a);
                      o.replaceChild(i, o.documentElement);
                      var s = new XMLSerializer().serializeToString(o);
                      r = 'data:image/svg+xml;charset=utf8,' + encodeURIComponent(s);
                    } else 'canvas' === e && (r = n.toDataURL('image/png'));
                    return r;
                  }),
                  (e.downloadImage = function(t) {
                    var e = this;
                    e.isAnimating() && e.stopAnimate();
                    var n = e.get('canvas').getRenderer(),
                      r = (t || 'graph') + ('svg' === n ? '.svg' : '.png'),
                      i = document.createElement('a');
                    setTimeout(function() {
                      var t = e.toDataURL();
                      if (window.Blob && window.URL && 'svg' !== n) {
                        for (
                          var a = t.split(','),
                            o = a[0].match(/:(.*?);/)[1],
                            s = atob(a[1]),
                            c = s.length,
                            u = new Uint8Array(c);
                          c--;

                        )
                          u[c] = s.charCodeAt(c);
                        var l = new Blob([u], { type: o });
                        window.navigator.msSaveBlob
                          ? window.navigator.msSaveBlob(l, r)
                          : i.addEventListener('click', function() {
                              (i.download = r), (i.href = window.URL.createObjectURL(l));
                            });
                      } else
                        i.addEventListener('click', function() {
                          (i.download = r), (i.href = t);
                        });
                      var h = document.createEvent('MouseEvents');
                      h.initEvent('click', !1, !1), i.dispatchEvent(h);
                    }, 16);
                  }),
                  (e.clear = function() {
                    return (
                      this.get('canvas').clear(),
                      this._initGroups(),
                      this.set({ itemMap: {}, nodes: [], edges: [] }),
                      this
                    );
                  }),
                  (e.destroy = function() {
                    this.clear(),
                      a.each(this.get('plugins'), function(t) {
                        t.destroyPlugin();
                      }),
                      this.get('eventController').destroy(),
                      this.get('itemController').destroy(),
                      this.get('modeController').destroy(),
                      this.get('viewController').destroy(),
                      this.get('stateController').destroy(),
                      this.get('canvas').destroy(),
                      (this._cfg = null),
                      (this.destroyed = !0);
                  }),
                  n
                );
              })(i);
            t.exports = c;
          },
          function(t, e, n) {
            var r = n(1);
            t.exports = {
              onMouseEnter: function(t) {
                if (this.shouldBegin(t)) {
                  var e = t.item;
                  (this.currentTarget = e),
                    this.showTooltip(t),
                    this.graph.emit('tooltipchange', { item: t.item, action: 'show' });
                }
              },
              onMouseMove: function(t) {
                this.shouldUpdate(t)
                  ? this.currentTarget && t.item === this.currentTarget && this.updatePosition(t)
                  : this.hideTooltip();
              },
              onMouseLeave: function(t) {
                this.shouldEnd(t) &&
                  (this.hideTooltip(),
                  this.graph.emit('tooltipchange', { item: this.currentTarget, action: 'hide' }),
                  (this.currentTarget = null));
              },
              showTooltip: function(t) {
                if (t.item) {
                  var e = this.container;
                  e || ((e = this._createTooltip(this.graph.get('canvas'))), (this.container = e));
                  var n = this.formatText(t.item.get('model'), t);
                  (e.innerHTML = n), this.updatePosition(t), r.modifyCSS(this.container, { visibility: 'visible' });
                }
              },
              hideTooltip: function() {
                r.modifyCSS(this.container, { visibility: 'hidden' });
              },
              updatePosition: function(t) {
                var e = this.width,
                  n = this.height,
                  i = this.container,
                  a = t.canvasX,
                  o = t.canvasY,
                  s = i.getBoundingClientRect();
                a > e / 2 ? (a -= s.width) : (a += 12), o > n / 2 ? (o -= s.height) : (o += 12);
                var c = a + 'px',
                  u = o + 'px';
                r.modifyCSS(this.container, { left: c, top: u, visibility: 'visible' });
              },
              _createTooltip: function(t) {
                var e = t.get('el');
                e.style.position = 'relative';
                var n = r.createDom('<div class="g6-tooltip g6-' + this.item + '-tooltip"></div>');
                return (
                  e.parentNode.appendChild(n),
                  r.modifyCSS(n, { position: 'absolute', visibility: 'visible' }),
                  (this.width = t.get('width')),
                  (this.height = t.get('height')),
                  (this.container = n),
                  n
                );
              },
            };
          },
          function(t, e, n) {
            var r = n(1),
              i = n(98),
              a = {
                'drag-canvas': n(97),
                'zoom-canvas': n(96),
                'drag-node': n(95),
                'click-select': n(94),
                tooltip: n(93),
                'edge-tooltip': n(92),
                'collapse-expand': n(91),
                'activate-relations': n(90),
                'brush-select': n(89),
              };
            r.each(a, function(t, e) {
              i.registerBehavior(e, t);
            }),
              (t.exports = i);
          },
          function(t, e, n) {
            var r = n(16),
              i = n(1),
              a = {
                itemType: '',
                draw: function(t, e) {
                  var n = this.drawShape(t, e);
                  return (
                    n.set('className', this.itemType + '-shape'),
                    t.label && this.drawLabel(t, e).set('className', this.itemType + '-label'),
                    n
                  );
                },
                drawShape: function() {},
                drawLabel: function(t, e) {
                  var n = t.labelCfg || {},
                    r = this.getLabelStyle(t, n, e);
                  return e.addShape('text', { attrs: r });
                },
                getLabelStyleByPosition: function() {},
                getLabelStyle: function(t, e, n) {
                  var a = this.getLabelStyleByPosition(t, e, n);
                  a.text = t.label;
                  var o = this.itemType + 'Label',
                    s = r[o] ? r[o].style : null;
                  return i.mix({}, s, a, e.style);
                },
                getShapeStyle: function(t) {
                  return t.style;
                },
                update: function(t, e) {
                  var n = e.getContainer(),
                    r = this.itemType + '-shape',
                    i = n.findByClassName(r),
                    a = this.getShapeStyle(t);
                  i.attr(a);
                  var o = this.itemType + '-label',
                    s = n.findByClassName(o);
                  if (t.label)
                    if (s) {
                      var c = t.labelCfg || {},
                        u = this.getLabelStyle(t, c, n);
                      s.resetMatrix(), s.attr(u);
                    } else this.drawLabel(t, n).set('className', o);
                  else s && s.remove();
                },
                setState: function(t, e, n) {
                  var r = n.get('keyShape');
                  if (r) {
                    var a = n.getStateStyle(t);
                    if (e) r.attr(a);
                    else {
                      var o = n.getCurrentStatesStyle();
                      i.each(a, function(t, e) {
                        o[e] || (o[e] = null);
                      }),
                        r.attr(o);
                    }
                  }
                },
              };
            t.exports = a;
          },
          function(t, e, n) {
            var r = n(22),
              i = {
                isBetween: function(t, e, n) {
                  return t >= e && t <= n;
                },
                getLineIntersect: function(t, e, n, r) {
                  var a = n.x - t.x,
                    o = n.y - t.y,
                    s = e.x - t.x,
                    c = e.y - t.y,
                    u = r.x - n.x,
                    l = r.y - n.y,
                    h = s * l - c * u,
                    f = null;
                  if (h * h > 0.001 * (s * s + c * c) * (u * u + l * l)) {
                    var d = (a * l - o * u) / h,
                      p = (a * c - o * s) / h;
                    i.isBetween(d, 0, 1) && i.isBetween(p, 0, 1) && (f = { x: t.x + d * s, y: t.y + d * c });
                  }
                  return f;
                },
                getRectIntersectByPoint: function(t, e) {
                  var n = t.x,
                    r = t.y,
                    a = t.width,
                    o = t.height,
                    s = [],
                    c = { x: n + a / 2, y: r + o / 2 };
                  s.push({ x: n, y: r }),
                    s.push({ x: n + a, y: r }),
                    s.push({ x: n + a, y: r + o }),
                    s.push({ x: n, y: r + o }),
                    s.push({ x: n, y: r });
                  for (var u = null, l = 1; l < s.length && !(u = i.getLineIntersect(s[l - 1], s[l], c, e)); l++);
                  return u;
                },
                getCircleIntersectByPoint: function(t, e) {
                  var n = t.x,
                    r = t.y,
                    i = t.r,
                    a = e.x,
                    o = e.y;
                  if (Math.sqrt(Math.pow(a - n, 2) + Math.pow(o - r, 2)) < i) return null;
                  var s = a - n,
                    c = o - r,
                    u = Math.sign(s),
                    l = Math.sign(c),
                    h = Math.atan(c / s);
                  return { x: n + Math.abs(i * Math.cos(h)) * u, y: r + Math.abs(i * Math.sin(h)) * l };
                },
                getEllispeIntersectByPoint: function(t, e) {
                  var n = t.rx,
                    r = t.ry,
                    i = t.x,
                    a = t.y,
                    o = e.x - i,
                    s = e.y - a,
                    c = Math.atan2(s / r, o / n);
                  return c < 0 && (c += 2 * Math.PI), { x: i + n * Math.cos(c), y: a + r * Math.sin(c) };
                },
                applyMatrix: function(t, e, n) {
                  void 0 === n && (n = 1);
                  var i = [t.x, t.y, n];
                  return r.vec3.transformMat3(i, i, e), { x: i[0], y: i[1] };
                },
                invertMatrix: function(t, e, n) {
                  void 0 === n && (n = 1);
                  var i = r.mat3.invert([], e),
                    a = [t.x, t.y, n];
                  return r.vec3.transformMat3(a, a, i), { x: a[0], y: a[1] };
                },
              };
            t.exports = r.mix({}, r, i);
          },
          function(t, e, n) {
            var r = n(31);
            n(100), n(99), (t.exports = r);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(4),
              a = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            (a.ATTRS = {
              x: 0,
              y: 0,
              text: null,
              fontSize: 12,
              fontFamily: 'sans-serif',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontVariant: 'normal',
              textAlign: 'start',
              textBaseline: 'bottom',
              lineHeight: null,
              textArr: null,
            }),
              r.extend(a, i),
              r.augment(a, {
                canFill: !0,
                canStroke: !0,
                type: 'text',
                getDefaultAttrs: function() {
                  return {
                    lineWidth: 1,
                    lineCount: 1,
                    fontSize: 12,
                    fontFamily: 'sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontVariant: 'normal',
                    textAlign: 'start',
                    textBaseline: 'bottom',
                  };
                },
                initTransform: function() {
                  var t = this._attrs.fontSize;
                  t &&
                    +t < 12 &&
                    this.transform([
                      ['t', -1 * this._attrs.x, -1 * this._attrs.y],
                      ['s', +t / 12, +t / 12],
                      ['t', this._attrs.x, this._attrs.y],
                    ]);
                },
                _assembleFont: function() {
                  var t = this._attrs,
                    e = t.fontSize,
                    n = t.fontFamily,
                    r = t.fontWeight,
                    i = t.fontStyle,
                    a = t.fontVariant;
                  t.font = [i, a, r, e + 'px', n].join(' ');
                },
                _setAttrText: function() {
                  var t = this._attrs,
                    e = t.text,
                    n = null;
                  if (r.isString(e) && -1 !== e.indexOf('\n')) {
                    var i = (n = e.split('\n')).length;
                    t.lineCount = i;
                  }
                  t.textArr = n;
                },
                _getTextHeight: function() {
                  var t = this._attrs,
                    e = t.lineCount,
                    n = 1 * t.fontSize;
                  return e > 1 ? n * e + this._getSpaceingY() * (e - 1) : n;
                },
                isHitBox: function() {
                  return !1;
                },
                calculateBox: function() {
                  var t = this._attrs,
                    e = this._cfg;
                  (e.attrs && !e.hasUpdate) || (this._assembleFont(), this._setAttrText()),
                    t.textArr || this._setAttrText();
                  var n = t.x,
                    r = t.y,
                    i = this.measureText();
                  if (!i) return { minX: n, minY: r, maxX: n, maxY: r };
                  var a = this._getTextHeight(),
                    o = t.textAlign,
                    s = t.textBaseline,
                    c = this.getHitLineWidth(),
                    u = { x: n, y: r - a };
                  o && ('end' === o || 'right' === o ? (u.x -= i) : 'center' === o && (u.x -= i / 2)),
                    s && ('top' === s ? (u.y += a) : 'middle' === s && (u.y += a / 2)),
                    this.set('startPoint', u);
                  var l = c / 2;
                  return { minX: u.x - l, minY: u.y - l, maxX: u.x + i + l, maxY: u.y + a + l };
                },
                _getSpaceingY: function() {
                  var t = this._attrs,
                    e = t.lineHeight,
                    n = 1 * t.fontSize;
                  return e ? e - n : 0.14 * n;
                },
                drawInner: function(t) {
                  var e = this._attrs,
                    n = this._cfg;
                  (n.attrs && !n.hasUpdate) || (this._assembleFont(), this._setAttrText()), (t.font = e.font);
                  var i = e.text;
                  if (i) {
                    var a = e.textArr,
                      o = e.x,
                      s = e.y;
                    if ((t.beginPath(), this.hasStroke())) {
                      var c = e.strokeOpacity;
                      r.isNil(c) || 1 === c || (t.globalAlpha = c),
                        a ? this._drawTextArr(t, !1) : t.strokeText(i, o, s),
                        (t.globalAlpha = 1);
                    }
                    if (this.hasFill()) {
                      var u = e.fillOpacity;
                      r.isNil(u) || 1 === u || (t.globalAlpha = u), a ? this._drawTextArr(t, !0) : t.fillText(i, o, s);
                    }
                    n.hasUpdate = !1;
                  }
                },
                _drawTextArr: function(t, e) {
                  var n,
                    i = this._attrs.textArr,
                    a = this._attrs.textBaseline,
                    o = 1 * this._attrs.fontSize,
                    s = this._getSpaceingY(),
                    c = this._attrs.x,
                    u = this._attrs.y,
                    l = this.getBBox(),
                    h = l.maxY - l.minY;
                  r.each(i, function(r, i) {
                    (n = u + i * (s + o) - h + o),
                      'middle' === a && (n += h - o - (h - o) / 2),
                      'top' === a && (n += h - o),
                      e ? t.fillText(r, c, n) : t.strokeText(r, c, n);
                  });
                },
                measureText: function() {
                  var t,
                    e = this._attrs,
                    n = e.text,
                    i = e.font,
                    a = e.textArr,
                    o = 0;
                  if (!r.isNil(n)) {
                    var s = document.createElement('canvas').getContext('2d');
                    return (
                      s.save(),
                      (s.font = i),
                      a
                        ? r.each(a, function(e) {
                            (t = s.measureText(e).width), o < t && (o = t), s.restore();
                          })
                        : ((o = s.measureText(n).width), s.restore()),
                      o
                    );
                  }
                },
              }),
              (t.exports = a);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(20).parseRadius,
              a = n(4),
              o = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            (o.ATTRS = { x: 0, y: 0, width: 0, height: 0, radius: 0, lineWidth: 1 }),
              r.extend(o, a),
              r.augment(o, {
                canFill: !0,
                canStroke: !0,
                type: 'rect',
                getDefaultAttrs: function() {
                  return { lineWidth: 1, radius: 0 };
                },
                calculateBox: function() {
                  var t = this._attrs,
                    e = t.x,
                    n = t.y,
                    r = t.width,
                    i = t.height,
                    a = this.getHitLineWidth() / 2;
                  return { minX: e - a, minY: n - a, maxX: e + r + a, maxY: n + i + a };
                },
                createPath: function(t) {
                  var e = this._attrs,
                    n = e.x,
                    r = e.y,
                    a = e.width,
                    o = e.height,
                    s = e.radius;
                  if (((t = t || this.get('context')).beginPath(), 0 === s)) t.rect(n, r, a, o);
                  else {
                    var c = i(s);
                    t.moveTo(n + c.r1, r),
                      t.lineTo(n + a - c.r2, r),
                      0 !== c.r2 && t.arc(n + a - c.r2, r + c.r2, c.r2, -Math.PI / 2, 0),
                      t.lineTo(n + a, r + o - c.r3),
                      0 !== c.r3 && t.arc(n + a - c.r3, r + o - c.r3, c.r3, 0, Math.PI / 2),
                      t.lineTo(n + c.r4, r + o),
                      0 !== c.r4 && t.arc(n + c.r4, r + o - c.r4, c.r4, Math.PI / 2, Math.PI),
                      t.lineTo(n, r + c.r1),
                      0 !== c.r1 && t.arc(n + c.r1, r + c.r1, c.r1, Math.PI, 1.5 * Math.PI),
                      t.closePath();
                  }
                },
              }),
              (t.exports = o);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(4),
              a = n(24),
              o = n(26),
              s = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            (s.ATTRS = { points: null, lineWidth: 1, startArrow: !1, endArrow: !1, tCache: null }),
              r.extend(s, i),
              r.augment(s, {
                canStroke: !0,
                type: 'polyline',
                tCache: null,
                getDefaultAttrs: function() {
                  return { lineWidth: 1, startArrow: !1, endArrow: !1 };
                },
                calculateBox: function() {
                  var t = this._attrs,
                    e = this.getHitLineWidth(),
                    n = t.points;
                  if (!n || 0 === n.length) return null;
                  var i = 1 / 0,
                    a = 1 / 0,
                    o = -1 / 0,
                    s = -1 / 0;
                  r.each(n, function(t) {
                    var e = t[0],
                      n = t[1];
                    e < i && (i = e), e > o && (o = e), n < a && (a = n), n > s && (s = n);
                  });
                  var c = e / 2;
                  return { minX: i - c, minY: a - c, maxX: o + c, maxY: s + c };
                },
                _setTcache: function() {
                  var t,
                    e,
                    n = this._attrs.points,
                    i = 0,
                    a = 0,
                    s = [];
                  n &&
                    0 !== n.length &&
                    (r.each(n, function(t, e) {
                      n[e + 1] && (i += o.len(t[0], t[1], n[e + 1][0], n[e + 1][1]));
                    }),
                    i <= 0 ||
                      (r.each(n, function(r, c) {
                        n[c + 1] &&
                          (((t = [])[0] = a / i),
                          (e = o.len(r[0], r[1], n[c + 1][0], n[c + 1][1])),
                          (a += e),
                          (t[1] = a / i),
                          s.push(t));
                      }),
                      (this.tCache = s)));
                },
                createPath: function(t) {
                  var e,
                    n,
                    r = this._attrs.points;
                  if (!(r.length < 2)) {
                    for (
                      (t = t || this.get('context')).beginPath(), t.moveTo(r[0][0], r[0][1]), n = 1, e = r.length - 1;
                      n < e;
                      n++
                    )
                      t.lineTo(r[n][0], r[n][1]);
                    t.lineTo(r[e][0], r[e][1]);
                  }
                },
                getStartTangent: function() {
                  var t = this.__attrs.points,
                    e = [];
                  return e.push([t[1][0], t[1][1]]), e.push([t[0][0], t[0][1]]), e;
                },
                getEndTangent: function() {
                  var t = this.__attrs.points,
                    e = t.length - 1,
                    n = [];
                  return n.push([t[e - 1][0], t[e - 1][1]]), n.push([t[e][0], t[e][1]]), n;
                },
                afterPath: function(t) {
                  var e = this._attrs,
                    n = e.points,
                    r = n.length - 1;
                  (t = t || this.get('context')),
                    e.startArrow && a.addStartArrow(t, e, n[1][0], n[1][1], n[0][0], n[0][1]),
                    e.endArrow && a.addEndArrow(t, e, n[r - 1][0], n[r - 1][1], n[r][0], n[r][1]);
                },
                getPoint: function(t) {
                  var e,
                    n,
                    i = this._attrs.points,
                    a = this.tCache;
                  return (
                    a || (this._setTcache(), (a = this.tCache)),
                    r.each(a, function(r, i) {
                      t >= r[0] && t <= r[1] && ((e = (t - r[0]) / (r[1] - r[0])), (n = i));
                    }),
                    { x: o.at(i[n][0], i[n + 1][0], e), y: o.at(i[n][1], i[n + 1][1], e) }
                  );
                },
              }),
              (t.exports = s);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(4),
              a = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            (a.ATTRS = { points: null, lineWidth: 1 }),
              r.extend(a, i),
              r.augment(a, {
                canFill: !0,
                canStroke: !0,
                type: 'polygon',
                getDefaultAttrs: function() {
                  return { lineWidth: 1 };
                },
                calculateBox: function() {
                  var t = this._attrs.points,
                    e = this.getHitLineWidth();
                  if (!t || 0 === t.length) return null;
                  var n = 1 / 0,
                    i = 1 / 0,
                    a = -1 / 0,
                    o = -1 / 0;
                  r.each(t, function(t) {
                    var e = t[0],
                      r = t[1];
                    e < n && (n = e), e > a && (a = e), r < i && (i = r), r > o && (o = r);
                  });
                  var s = e / 2;
                  return { minX: n - s, minY: i - s, maxX: a + s, maxY: o + s };
                },
                createPath: function(t) {
                  var e = this._attrs.points;
                  e.length < 2 ||
                    ((t = t || this.get('context')).beginPath(),
                    r.each(e, function(e, n) {
                      0 === n ? t.moveTo(e[0], e[1]) : t.lineTo(e[0], e[1]);
                    }),
                    t.closePath());
                },
              }),
              (t.exports = a);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(4),
              a = n(23),
              o = n(20),
              s = n(24),
              c = n(32),
              u = n(34),
              l = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            (l.ATTRS = { path: null, lineWidth: 1, startArrow: !1, endArrow: !1 }),
              r.extend(l, i),
              r.augment(l, {
                canFill: !0,
                canStroke: !0,
                type: 'path',
                getDefaultAttrs: function() {
                  return { lineWidth: 1, startArrow: !1, endArrow: !1 };
                },
                _afterSetAttrPath: function(t) {
                  if (r.isNil(t)) return this.setSilent('segments', null), void this.setSilent('box', void 0);
                  var e,
                    n = o.parsePath(t),
                    i = [];
                  if (r.isArray(n) && 0 !== n.length && ('M' === n[0][0] || 'm' === n[0][0])) {
                    for (var s = n.length, c = 0; c < n.length; c++) {
                      var u = n[c];
                      (e = new a(u, e, c === s - 1)), i.push(e);
                    }
                    this.setSilent('segments', i),
                      this.setSilent('tCache', null),
                      this.setSilent('totalLength', null),
                      this.setSilent('box', null);
                  }
                },
                calculateBox: function() {
                  var t = this.get('segments');
                  if (!t) return null;
                  var e = this.getHitLineWidth(),
                    n = 1 / 0,
                    i = -1 / 0,
                    a = 1 / 0,
                    o = -1 / 0;
                  return (
                    r.each(t, function(t) {
                      t.getBBox(e);
                      var r = t.box;
                      r &&
                        (r.minX < n && (n = r.minX),
                        r.maxX > i && (i = r.maxX),
                        r.minY < a && (a = r.minY),
                        r.maxY > o && (o = r.maxY));
                    }),
                    n === 1 / 0 || a === 1 / 0
                      ? { minX: 0, minY: 0, maxX: 0, maxY: 0 }
                      : { minX: n, minY: a, maxX: i, maxY: o }
                  );
                },
                _setTcache: function() {
                  var t,
                    e,
                    n,
                    i,
                    a = 0,
                    o = 0,
                    s = [],
                    c = this._cfg.curve;
                  c &&
                    (r.each(c, function(t, e) {
                      (n = c[e + 1]),
                        (i = t.length),
                        n && (a += u.len(t[i - 2], t[i - 1], n[1], n[2], n[3], n[4], n[5], n[6]));
                    }),
                    (this._cfg.totalLength = a),
                    r.each(c, function(r, l) {
                      (n = c[l + 1]),
                        (i = r.length),
                        n &&
                          (((t = [])[0] = o / a),
                          (e = u.len(r[i - 2], r[i - 1], n[1], n[2], n[3], n[4], n[5], n[6])),
                          (o += e),
                          (t[1] = o / a),
                          s.push(t));
                    }),
                    (this._cfg.tCache = s));
                },
                getTotalLength: function() {
                  var t = this.get('totalLength');
                  return r.isNil(t) ? (this._calculateCurve(), this._setTcache(), this.get('totalLength')) : t;
                },
                _calculateCurve: function() {
                  var t = this._attrs.path;
                  this._cfg.curve = c.pathTocurve(t);
                },
                getStartTangent: function() {
                  var t,
                    e,
                    n,
                    i,
                    a = this.get('segments');
                  if (a.length > 1)
                    if (
                      ((t = a[0].endPoint), (e = a[1].endPoint), (n = a[1].startTangent), (i = []), r.isFunction(n))
                    ) {
                      var o = n();
                      i.push([t.x - o[0], t.y - o[1]]), i.push([t.x, t.y]);
                    } else i.push([e.x, e.y]), i.push([t.x, t.y]);
                  return i;
                },
                getEndTangent: function() {
                  var t,
                    e,
                    n,
                    i,
                    a = this.get('segments'),
                    o = a.length;
                  if (o > 1)
                    if (
                      ((t = a[o - 2].endPoint),
                      (e = a[o - 1].endPoint),
                      (n = a[o - 1].endTangent),
                      (i = []),
                      r.isFunction(n))
                    ) {
                      var s = n();
                      i.push([e.x - s[0], e.y - s[1]]), i.push([e.x, e.y]);
                    } else i.push([t.x, t.y]), i.push([e.x, e.y]);
                  return i;
                },
                getPoint: function(t) {
                  var e,
                    n,
                    i = this._cfg.tCache;
                  i || (this._calculateCurve(), this._setTcache(), (i = this._cfg.tCache));
                  var a = this._cfg.curve;
                  if (!i) return a ? { x: a[0][1], y: a[0][2] } : null;
                  r.each(i, function(r, i) {
                    t >= r[0] && t <= r[1] && ((e = (t - r[0]) / (r[1] - r[0])), (n = i));
                  });
                  var o = a[n];
                  if (r.isNil(o) || r.isNil(n)) return null;
                  var s = o.length,
                    c = a[n + 1];
                  return { x: u.at(o[s - 2], c[1], c[3], c[5], 1 - e), y: u.at(o[s - 1], c[2], c[4], c[6], 1 - e) };
                },
                createPath: function(t) {
                  var e = this.get('segments');
                  if (r.isArray(e)) {
                    (t = t || this.get('context')).beginPath();
                    for (var n = e.length, i = 0; i < n; i++) e[i].draw(t);
                  }
                },
                afterPath: function(t) {
                  var e = this._attrs,
                    n = this.get('segments'),
                    i = e.path;
                  if (
                    ((t = t || this.get('context')),
                    r.isArray(n) &&
                      1 !== n.length &&
                      (e.startArrow || e.endArrow) &&
                      'z' !== i[i.length - 1] &&
                      'Z' !== i[i.length - 1] &&
                      !e.fill)
                  ) {
                    var a = this.getStartTangent();
                    s.addStartArrow(t, e, a[0][0], a[0][1], a[1][0], a[1][1]);
                    var o = this.getEndTangent();
                    s.addEndArrow(t, e, o[0][0], o[0][1], o[1][0], o[1][1]);
                  }
                },
              }),
              (t.exports = l);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(4),
              a = n(24),
              o = n(26),
              s = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            (s.ATTRS = { x1: 0, y1: 0, x2: 0, y2: 0, lineWidth: 1, startArrow: !1, endArrow: !1 }),
              r.extend(s, i),
              r.augment(s, {
                canStroke: !0,
                type: 'line',
                getDefaultAttrs: function() {
                  return { lineWidth: 1, startArrow: !1, endArrow: !1 };
                },
                calculateBox: function() {
                  var t = this._attrs,
                    e = t.x1,
                    n = t.y1,
                    r = t.x2,
                    i = t.y2,
                    a = this.getHitLineWidth();
                  return o.box(e, n, r, i, a);
                },
                createPath: function(t) {
                  var e = this._attrs,
                    n = e.x1,
                    r = e.y1,
                    i = e.x2,
                    a = e.y2;
                  (t = t || self.get('context')).beginPath(), t.moveTo(n, r), t.lineTo(i, a);
                },
                afterPath: function(t) {
                  var e = this._attrs,
                    n = e.x1,
                    r = e.y1,
                    i = e.x2,
                    o = e.y2;
                  (t = t || this.get('context')),
                    e.startArrow && a.addStartArrow(t, e, i, o, n, r),
                    e.endArrow && a.addEndArrow(t, e, n, r, i, o);
                },
                getPoint: function(t) {
                  var e = this._attrs;
                  return { x: o.at(e.x1, e.x2, t), y: o.at(e.y1, e.y2, t) };
                },
              }),
              (t.exports = s);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(4),
              a = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            (a.ATTRS = {
              x: 0,
              y: 0,
              img: void 0,
              width: 0,
              height: 0,
              sx: null,
              sy: null,
              swidth: null,
              sheight: null,
            }),
              r.extend(a, i),
              r.augment(a, {
                type: 'image',
                isHitBox: function() {
                  return !1;
                },
                calculateBox: function() {
                  var t = this._attrs;
                  (this._cfg.attrs && this._cfg.attrs.img === t.img) || this._setAttrImg();
                  var e = t.x,
                    n = t.y;
                  return { minX: e, minY: n, maxX: e + t.width, maxY: n + t.height };
                },
                _beforeSetLoading: function(t) {
                  var e = this.get('canvas');
                  return !1 === t && !0 === this.get('toDraw') && ((this._cfg.loading = !1), e.draw()), t;
                },
                _setAttrImg: function() {
                  var t = this,
                    e = t._attrs,
                    n = e.img;
                  if (!r.isString(n))
                    return n instanceof Image
                      ? (e.width || t.attr('width', n.width), e.height || t.attr('height', n.height), n)
                      : n instanceof HTMLElement && r.isString(n.nodeName) && 'CANVAS' === n.nodeName.toUpperCase()
                      ? (e.width || t.attr('width', Number(n.getAttribute('width'))),
                        e.height || t.attr('height', Number(n.getAttribute('height'))),
                        n)
                      : n instanceof ImageData
                      ? (e.width || t.attr('width', n.width), e.height || t.attr('height', n.height), n)
                      : null;
                  var i = new Image();
                  (i.onload = function() {
                    if (t.get('destroyed')) return !1;
                    t.attr('imgSrc', n), t.attr('img', i);
                    var e = t.get('callback');
                    e && e.call(t), t.set('loading', !1);
                  }),
                    (i.src = n),
                    (i.crossOrigin = 'Anonymous'),
                    t.set('loading', !0);
                },
                drawInner: function(t) {
                  this._cfg.hasUpdate && this._setAttrImg(),
                    this.get('loading') ? this.set('toDraw', !0) : (this._drawImage(t), (this._cfg.hasUpdate = !1));
                },
                _drawImage: function(t) {
                  var e = this._attrs,
                    n = e.x,
                    i = e.y,
                    a = e.img,
                    o = e.width,
                    s = e.height,
                    c = e.sx,
                    u = e.sy,
                    l = e.swidth,
                    h = e.sheight;
                  this.set('toDraw', !1);
                  var f = a;
                  if (
                    (f instanceof ImageData && ((f = new Image()).src = a),
                    f instanceof Image ||
                      (f instanceof HTMLElement && r.isString(f.nodeName) && 'CANVAS' === f.nodeName.toUpperCase()))
                  ) {
                    if (r.isNil(c) || r.isNil(u) || r.isNil(l) || r.isNil(h)) return void t.drawImage(f, n, i, o, s);
                    if (!(r.isNil(c) || r.isNil(u) || r.isNil(l) || r.isNil(h)))
                      return void t.drawImage(f, c, u, l, h, n, i, o, s);
                  }
                },
              }),
              (t.exports = a);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(4),
              a = n(25),
              o = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            (o.ATTRS = { x: 0, y: 0, rs: 0, re: 0, startAngle: 0, endAngle: 0, clockwise: !1, lineWidth: 1 }),
              r.extend(o, i),
              r.augment(o, {
                canFill: !0,
                canStroke: !0,
                type: 'fan',
                getDefaultAttrs: function() {
                  return { clockwise: !1, lineWidth: 1, rs: 0, re: 0 };
                },
                calculateBox: function() {
                  var t = this._attrs,
                    e = t.x,
                    n = t.y,
                    r = t.rs,
                    i = t.re,
                    o = t.startAngle,
                    s = t.endAngle,
                    c = t.clockwise,
                    u = this.getHitLineWidth(),
                    l = a.box(e, n, r, o, s, c),
                    h = a.box(e, n, i, o, s, c),
                    f = u / 2;
                  return {
                    minX: Math.min(l.minX, h.minX) - f,
                    minY: Math.min(l.minY, h.minY) - f,
                    maxX: Math.max(l.maxX, h.maxX) + f,
                    maxY: Math.max(l.maxY, h.maxY) + f,
                  };
                },
                createPath: function(t) {
                  var e = this._attrs,
                    n = e.x,
                    r = e.y,
                    i = e.rs,
                    a = e.re,
                    o = e.startAngle,
                    s = e.endAngle,
                    c = e.clockwise,
                    u = { x: Math.cos(o) * i + n, y: Math.sin(o) * i + r },
                    l = { x: Math.cos(o) * a + n, y: Math.sin(o) * a + r },
                    h = { x: Math.cos(s) * i + n, y: Math.sin(s) * i + r };
                  (t = t || self.get('context')).beginPath(),
                    t.moveTo(u.x, u.y),
                    t.lineTo(l.x, l.y),
                    t.arc(n, r, a, o, s, c),
                    t.lineTo(h.x, h.y),
                    t.arc(n, r, i, s, o, !c),
                    t.closePath();
                },
              }),
              (t.exports = o);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(4),
              a = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            (a.ATTRS = { x: 0, y: 0, rx: 1, ry: 1, lineWidth: 1 }),
              r.extend(a, i),
              r.augment(a, {
                canFill: !0,
                canStroke: !0,
                type: 'ellipse',
                getDefaultAttrs: function() {
                  return { lineWidth: 1 };
                },
                calculateBox: function() {
                  var t = this._attrs,
                    e = t.x,
                    n = t.y,
                    r = t.rx,
                    i = t.ry,
                    a = this.getHitLineWidth(),
                    o = r + a / 2,
                    s = i + a / 2;
                  return { minX: e - o, minY: n - s, maxX: e + o, maxY: n + s };
                },
                createPath: function(t) {
                  var e = this._attrs,
                    n = e.x,
                    i = e.y,
                    a = e.rx,
                    o = e.ry;
                  t = t || self.get('context');
                  var s = a > o ? a : o,
                    c = a > o ? 1 : a / o,
                    u = a > o ? o / a : 1,
                    l = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                  r.mat3.scale(l, l, [c, u]),
                    r.mat3.translate(l, l, [n, i]),
                    t.beginPath(),
                    t.save(),
                    t.transform(l[0], l[1], l[3], l[4], l[6], l[7]),
                    t.arc(0, 0, s, 0, 2 * Math.PI),
                    t.restore(),
                    t.closePath();
                },
              }),
              (t.exports = a);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(4),
              a = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            r.extend(a, i),
              r.augment(a, {
                canFill: !0,
                canStroke: !0,
                type: 'dom',
                calculateBox: function() {
                  var t = this._attrs,
                    e = t.x,
                    n = t.y,
                    r = t.width,
                    i = t.height,
                    a = this.getHitLineWidth() / 2;
                  return { minX: e - a, minY: n - a, maxX: e + r + a, maxY: n + i + a };
                },
              }),
              (t.exports = a);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(4),
              a = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            (a.ATTRS = { x: 0, y: 0, r: 0, lineWidth: 1 }),
              r.extend(a, i),
              r.augment(a, {
                canFill: !0,
                canStroke: !0,
                type: 'circle',
                getDefaultAttrs: function() {
                  return { lineWidth: 1 };
                },
                calculateBox: function() {
                  var t = this._attrs,
                    e = t.x,
                    n = t.y,
                    r = t.r,
                    i = this.getHitLineWidth() / 2 + r;
                  return { minX: e - i, minY: n - i, maxX: e + i, maxY: n + i };
                },
                createPath: function(t) {
                  var e = this._attrs,
                    n = e.x,
                    r = e.y,
                    i = e.r;
                  t.beginPath(), t.arc(n, r, i, 0, 2 * Math.PI, !1), t.closePath();
                },
              }),
              (t.exports = a);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(4),
              a = n(25),
              o = n(24);
            function s(t, e, n) {
              return t + e * Math.cos(n);
            }
            function c(t, e, n) {
              return t + e * Math.sin(n);
            }
            var u = function t(e) {
              t.superclass.constructor.call(this, e);
            };
            (u.ATTRS = {
              x: 0,
              y: 0,
              r: 0,
              startAngle: 0,
              endAngle: 0,
              clockwise: !1,
              lineWidth: 1,
              startArrow: !1,
              endArrow: !1,
            }),
              r.extend(u, i),
              r.augment(u, {
                canStroke: !0,
                type: 'arc',
                getDefaultAttrs: function() {
                  return {
                    x: 0,
                    y: 0,
                    r: 0,
                    startAngle: 0,
                    endAngle: 0,
                    clockwise: !1,
                    lineWidth: 1,
                    startArrow: !1,
                    endArrow: !1,
                  };
                },
                calculateBox: function() {
                  var t = this._attrs,
                    e = t.x,
                    n = t.y,
                    r = t.r,
                    i = t.startAngle,
                    o = t.endAngle,
                    s = t.clockwise,
                    c = this.getHitLineWidth() / 2,
                    u = a.box(e, n, r, i, o, s);
                  return (u.minX -= c), (u.minY -= c), (u.maxX += c), (u.maxY += c), u;
                },
                getStartTangent: function() {
                  var t = this._attrs,
                    e = t.x,
                    n = t.y,
                    r = t.startAngle,
                    i = t.r,
                    a = t.clockwise,
                    o = Math.PI / 180;
                  a && (o *= -1);
                  var u = [],
                    l = s(e, i, r + o),
                    h = c(n, i, r + o),
                    f = s(e, i, r),
                    d = c(n, i, r);
                  return u.push([l, h]), u.push([f, d]), u;
                },
                getEndTangent: function() {
                  var t = this._attrs,
                    e = t.x,
                    n = t.y,
                    r = t.endAngle,
                    i = t.r,
                    a = t.clockwise,
                    o = Math.PI / 180,
                    u = [];
                  a && (o *= -1);
                  var l = s(e, i, r + o),
                    h = c(n, i, r + o),
                    f = s(e, i, r),
                    d = c(n, i, r);
                  return u.push([f, d]), u.push([l, h]), u;
                },
                createPath: function(t) {
                  var e = this._attrs,
                    n = e.x,
                    r = e.y,
                    i = e.r,
                    a = e.startAngle,
                    o = e.endAngle,
                    s = e.clockwise;
                  (t = t || self.get('context')).beginPath(), t.arc(n, r, i, a, o, s);
                },
                afterPath: function(t) {
                  var e = this._attrs;
                  if (((t = t || this.get('context')), e.startArrow)) {
                    var n = this.getStartTangent();
                    o.addStartArrow(t, e, n[0][0], n[0][1], n[1][0], n[1][1]);
                  }
                  if (e.endArrow) {
                    var r = this.getEndTangent();
                    o.addEndArrow(t, e, r[0][0], r[0][1], r[1][0], r[1][1]);
                  }
                },
              }),
              (t.exports = u);
          },
          function(t, e) {
            t.exports = {
              xAt: function(t, e, n, r, i) {
                return e * Math.cos(t) * Math.cos(i) - n * Math.sin(t) * Math.sin(i) + r;
              },
              yAt: function(t, e, n, r, i) {
                return e * Math.sin(t) * Math.cos(i) + n * Math.cos(t) * Math.sin(i) + r;
              },
              xExtrema: function(t, e, n) {
                return Math.atan((-n / e) * Math.tan(t));
              },
              yExtrema: function(t, e, n) {
                return Math.atan(n / (e * Math.tan(t)));
              },
            };
          },
          function(t, e, n) {
            var r = n(0),
              i = r.vec2;
            function a(t, e, n, r) {
              var i = 1 - r;
              return i * (i * t + 2 * r * e) + r * r * n;
            }
            function o(t, e, n, r, o, s, c, u, l) {
              var h,
                f,
                d,
                p,
                g,
                v,
                m,
                y = 0.005,
                x = 1 / 0,
                b = [c, u];
              for (g = 0; g < 1; g += 0.05)
                (d = [a(t, n, o, g), a(e, r, s, g)]), (f = i.squaredDistance(b, d)) < x && ((h = g), (x = f));
              for (x = 1 / 0, m = 0; m < 32 && !(y < 1e-4); m++) {
                var w = h - y,
                  S = h + y;
                (d = [a(t, n, o, w), a(e, r, s, w)]),
                  (f = i.squaredDistance(b, d)),
                  w >= 0 && f < x
                    ? ((h = w), (x = f))
                    : ((p = [a(t, n, o, S), a(e, r, s, S)]),
                      (v = i.squaredDistance(b, p)),
                      S <= 1 && v < x ? ((h = S), (x = v)) : (y *= 0.5));
              }
              return l && ((l.x = a(t, n, o, h)), (l.y = a(e, r, s, h))), Math.sqrt(x);
            }
            t.exports = {
              at: a,
              projectPoint: function(t, e, n, r, i, a, s, c) {
                var u = {};
                return o(t, e, n, r, i, a, s, c, u), u;
              },
              pointDistance: o,
              extrema: function(t, e, n) {
                var i = t + n - 2 * e;
                if (r.isNumberEqual(i, 0)) return [0.5];
                var a = (t - e) / i;
                return a <= 1 && a >= 0 ? [a] : [];
              },
            };
          },
          function(t, e, n) {
            var r = n(40),
              i = Array.prototype.slice,
              a = function() {};
            r.augment(a, {
              on: function(t, e, n) {
                if (!r.isFunction(e)) throw new TypeError('listener should be a function');
                return (
                  this._cfg._events || (this._cfg._events = {}),
                  this._cfg._events[t] || (this._cfg._events[t] = []),
                  this._cfg._events[t].push({ callback: e, one: n }),
                  this
                );
              },
              one: function(t, e) {
                return this.on(t, e, !0), this;
              },
              emit: function(t) {
                if (!this.get('destroyed') && this._cfg._events && !r.isEmpty(this._cfg._events)) {
                  var e = this._cfg._events[t];
                  if (!r.isEmpty(e))
                    for (var n = arguments, a = i.call(n, 1), o = e.length, s = 0; s < o; )
                      e[s].callback.apply(this, a), e[s].one ? (e.splice(s, 1), o--) : s++;
                }
              },
              trigger: function() {
                this.emit.apply(this, arguments);
              },
              off: function(t, e) {
                var n = this._cfg._events;
                if (n && !r.isEmpty(n)) {
                  if (0 === arguments.length) return (this._cfg._events = {}), this;
                  if (n[t]) {
                    var i = (function(t, e) {
                      for (var n = t.length; n--; ) if (t[n].callback === e) return n;
                      return -1;
                    })(n[t], e);
                    i >= 0 && n[t].splice(i, 1), 0 === n[t].length && delete n[t];
                  }
                }
              },
              removeEvent: function(t) {
                return void 0 === t ? (this._cfg._events = {}) : delete this._cfg._events[t], this;
              },
              _getEvents: function() {
                return this._cfg._events || {};
              },
            }),
              (t.exports = a);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(128),
              a = n(127),
              o = n(126),
              s = n(125),
              c = function(t) {
                (this._cfg = { zIndex: 0, capture: !0, visible: !0, destroyed: !1 }),
                  r.assign(this._cfg, this.getDefaultCfg(), t),
                  this.initAttrs(this._cfg.attrs),
                  (this._cfg.attrs = {}),
                  this.initTransform(),
                  this.init();
              };
            (c.CFG = {
              id: null,
              zIndex: 0,
              canvas: null,
              parent: null,
              capture: !0,
              context: null,
              visible: !0,
              destroyed: !1,
            }),
              r.augment(c, i, a, s, o, {
                init: function() {
                  this.setSilent('animable', !0), this.setSilent('animating', !1);
                },
                getParent: function() {
                  return this._cfg.parent;
                },
                getDefaultCfg: function() {
                  return {};
                },
                set: function(t, e) {
                  return (
                    'zIndex' === t && this._beforeSetZIndex && this._beforeSetZIndex(e),
                    'loading' === t && this._beforeSetLoading && this._beforeSetLoading(e),
                    (this._cfg[t] = e),
                    this
                  );
                },
                setSilent: function(t, e) {
                  this._cfg[t] = e;
                },
                get: function(t) {
                  return this._cfg[t];
                },
                show: function() {
                  return (this._cfg.visible = !0), this;
                },
                hide: function() {
                  return (this._cfg.visible = !1), this;
                },
                remove: function(t, e) {
                  var n = this._cfg,
                    i = n.parent,
                    a = n.el;
                  return (
                    i && r.remove(i.get('children'), this),
                    a && (e ? i && i._cfg.tobeRemoved.push(a) : a.parentNode.removeChild(a)),
                    (t || void 0 === t) && this.destroy(),
                    this
                  );
                },
                destroy: function() {
                  this.get('destroyed') || ((this._attrs = null), this.removeEvent(), (this._cfg = { destroyed: !0 }));
                },
                toFront: function() {
                  var t = this._cfg,
                    e = t.parent;
                  if (e) {
                    var n = e._cfg.children,
                      r = t.el,
                      i = n.indexOf(this);
                    n.splice(i, 1), n.push(this), r && (r.parentNode.removeChild(r), (t.el = null));
                  }
                },
                toBack: function() {
                  var t = this._cfg,
                    e = t.parent;
                  if (e) {
                    var n = e._cfg.children,
                      r = t.el,
                      i = n.indexOf(this);
                    if ((n.splice(i, 1), n.unshift(this), r)) {
                      var a = r.parentNode;
                      a.removeChild(r), a.insertBefore(r, a.firstChild);
                    }
                  }
                },
                _beforeSetZIndex: function(t) {
                  var e = this._cfg.parent;
                  (this._cfg.zIndex = t), r.isNil(e) || e.sort();
                  var n = this._cfg.el;
                  if (n) {
                    var i = e._cfg.children,
                      a = i.indexOf(this),
                      o = n.parentNode;
                    o.removeChild(n), a === i.length - 1 ? o.appendChild(n) : o.insertBefore(n, o.childNodes[a]);
                  }
                  return t;
                },
                _setAttrs: function(t) {
                  return this.attr(t), t;
                },
                setZIndex: function(t) {
                  return (this._cfg.zIndex = t), this._beforeSetZIndex(t);
                },
                clone: function() {
                  return r.clone(this);
                },
                getBBox: function() {},
              }),
              (t.exports = c);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(63),
              a = n(124),
              o = {},
              s = '_INDEX',
              c = ['zIndex', 'capture', 'visible'];
            function u(t, e, n) {
              for (var r, i = t.length - 1; i >= 0; i--) {
                var a = t[i];
                if (
                  (a._cfg.visible && a._cfg.capture && (a.isGroup ? (r = a.getShape(e, n)) : a.isHit(e, n) && (r = a)),
                  r)
                )
                  break;
              }
              return r;
            }
            var l = function t(e) {
              t.superclass.constructor.call(this, e),
                this.set('children', []),
                this.set('tobeRemoved', []),
                this._beforeRenderUI(),
                this._renderUI(),
                this._bindUI();
            };
            r.extend(l, i),
              r.augment(l, {
                isGroup: !0,
                type: 'group',
                canFill: !0,
                canStroke: !0,
                getDefaultCfg: function() {
                  return (
                    (function t(e) {
                      if (!e._cfg && e !== l) {
                        var n = e.superclass.constructor;
                        n && !n._cfg && t(n), (e._cfg = {}), r.merge(e._cfg, n._cfg), r.merge(e._cfg, e.CFG);
                      }
                    })(this.constructor),
                    r.merge({}, this.constructor._cfg)
                  );
                },
                _beforeRenderUI: function() {},
                _renderUI: function() {},
                _bindUI: function() {},
                addShape: function(t, e) {
                  var n = this.get('canvas');
                  e = e || {};
                  var i = o[t];
                  if ((i || ((i = r.upperFirst(t)), (o[t] = i)), e.attrs && n)) {
                    var s = e.attrs;
                    if ('text' === t) {
                      var c = n.get('fontFamily');
                      c && (s.fontFamily = s.fontFamily ? s.fontFamily : c);
                    }
                  }
                  (e.canvas = n), (e.type = t);
                  var u = new a[i](e);
                  return this.add(u), u;
                },
                addGroup: function(t, e) {
                  var n,
                    i = this.get('canvas');
                  if (((e = r.merge({}, e)), r.isFunction(t)))
                    e ? ((e.canvas = i), (e.parent = this), (n = new t(e))) : (n = new t({ canvas: i, parent: this })),
                      this.add(n);
                  else if (r.isObject(t)) (t.canvas = i), (n = new l(t)), this.add(n);
                  else {
                    if (void 0 !== t) return !1;
                    (n = new l()), this.add(n);
                  }
                  return n;
                },
                renderBack: function(t, e) {
                  var n = this.get('backShape'),
                    i = this.getBBox();
                  return (
                    r.merge(e, {
                      x: i.minX - t[3],
                      y: i.minY - t[0],
                      width: i.width + t[1] + t[3],
                      height: i.height + t[0] + t[2],
                    }),
                    n ? n.attr(e) : (n = this.addShape('rect', { zIndex: -1, attrs: e })),
                    this.set('backShape', n),
                    this.sort(),
                    n
                  );
                },
                removeChild: function(t, e) {
                  if (arguments.length >= 2) this.contain(t) && t.remove(e);
                  else {
                    if (1 === arguments.length) {
                      if (!r.isBoolean(t)) return this.contain(t) && t.remove(!0), this;
                      e = t;
                    }
                    0 === arguments.length && (e = !0), l.superclass.remove.call(this, e);
                  }
                  return this;
                },
                add: function(t) {
                  var e = this,
                    n = e.get('children');
                  if (r.isArray(t))
                    r.each(t, function(t) {
                      var n = t.get('parent');
                      n && n.removeChild(t, !1), e._setCfgProperty(t);
                    }),
                      (e._cfg.children = n.concat(t));
                  else {
                    var i = t,
                      a = i.get('parent');
                    a && a.removeChild(i, !1), e._setCfgProperty(i), n.push(i);
                  }
                  return e;
                },
                _setCfgProperty: function(t) {
                  var e = this._cfg;
                  t.set('parent', this), t.set('canvas', e.canvas), e.timeline && t.set('timeline', e.timeline);
                },
                contain: function(t) {
                  return this.get('children').indexOf(t) > -1;
                },
                getChildByIndex: function(t) {
                  return this.get('children')[t];
                },
                getFirst: function() {
                  return this.getChildByIndex(0);
                },
                getLast: function() {
                  var t = this.get('children').length - 1;
                  return this.getChildByIndex(t);
                },
                getBBox: function() {
                  var t = 1 / 0,
                    e = -1 / 0,
                    n = 1 / 0,
                    i = -1 / 0,
                    a = this.get('children');
                  a.length > 0
                    ? r.each(a, function(r) {
                        if (r.get('visible')) {
                          if (r.isGroup && 0 === r.get('children').length) return;
                          var a = r.getBBox();
                          if (!a) return !0;
                          var o = [a.minX, a.minY, 1],
                            s = [a.minX, a.maxY, 1],
                            c = [a.maxX, a.minY, 1],
                            u = [a.maxX, a.maxY, 1];
                          r.apply(o), r.apply(s), r.apply(c), r.apply(u);
                          var l = Math.min(o[0], s[0], c[0], u[0]),
                            h = Math.max(o[0], s[0], c[0], u[0]),
                            f = Math.min(o[1], s[1], c[1], u[1]),
                            d = Math.max(o[1], s[1], c[1], u[1]);
                          l < t && (t = l), h > e && (e = h), f < n && (n = f), d > i && (i = d);
                        }
                      })
                    : ((t = 0), (e = 0), (n = 0), (i = 0));
                  var o = { minX: t, minY: n, maxX: e, maxY: i };
                  return (o.x = o.minX), (o.y = o.minY), (o.width = o.maxX - o.minX), (o.height = o.maxY - o.minY), o;
                },
                getCount: function() {
                  return this.get('children').length;
                },
                sort: function() {
                  var t = this.get('children');
                  return (
                    r.each(t, function(t, e) {
                      return (t[s] = e), t;
                    }),
                    t.sort(function(t, e) {
                      var n = (function(t, e) {
                        return t.get('zIndex') - e.get('zIndex');
                      })(t, e);
                      return 0 === n ? t[s] - e[s] : n;
                    }),
                    this
                  );
                },
                findById: function(t) {
                  return this.find(function(e) {
                    return e.get('id') === t;
                  });
                },
                find: function(t) {
                  if (r.isString(t)) return this.findById(t);
                  var e = this.get('children'),
                    n = null;
                  return (
                    r.each(e, function(e) {
                      if ((t(e) ? (n = e) : e.find && (n = e.find(t)), n)) return !1;
                    }),
                    n
                  );
                },
                findAll: function(t) {
                  var e = this.get('children'),
                    n = [],
                    i = [];
                  return (
                    r.each(e, function(e) {
                      t(e) && n.push(e), e.findAllBy && ((i = e.findAllBy(t)), (n = n.concat(i)));
                    }),
                    n
                  );
                },
                findBy: function(t) {
                  var e = this.get('children'),
                    n = null;
                  return (
                    r.each(e, function(e) {
                      if ((t(e) ? (n = e) : e.findBy && (n = e.findBy(t)), n)) return !1;
                    }),
                    n
                  );
                },
                findAllBy: function(t) {
                  var e = this.get('children'),
                    n = [],
                    i = [];
                  return (
                    r.each(e, function(e) {
                      t(e) && n.push(e), e.findAllBy && ((i = e.findAllBy(t)), (n = n.concat(i)));
                    }),
                    n
                  );
                },
                getShape: function(t, e) {
                  var n,
                    r = this._attrs.clip,
                    i = this._cfg.children;
                  if (r) {
                    var a = [t, e, 1];
                    r.invert(a, this.get('canvas')), r.isPointInPath(a[0], a[1]) && (n = u(i, t, e));
                  } else n = u(i, t, e);
                  return n;
                },
                clearTotalMatrix: function() {
                  if (this.get('totalMatrix')) {
                    this.setSilent('totalMatrix', null);
                    for (var t = this._cfg.children, e = 0; e < t.length; e++) t[e].clearTotalMatrix();
                  }
                },
                clear: function(t) {
                  if (!this.get('destroyed')) {
                    for (var e = this._cfg.children, n = e.length - 1; n >= 0; n--) e[n].remove(!0, t);
                    return (this._cfg.children = []), this;
                  }
                },
                destroy: function() {
                  this.get('destroyed') || (this.clear(), l.superclass.destroy.call(this));
                },
                clone: function() {
                  var t = this,
                    e = t._cfg.children,
                    n = t._attrs,
                    i = {};
                  r.each(n, function(t, e) {
                    i[e] =
                      'matrix' === e
                        ? (function(t) {
                            for (var e = [], n = 0; n < t.length; n++) e.push(t[n]);
                            return e;
                          })(n[e])
                        : n[e];
                  });
                  var a = new l({ attrs: i, canvas: t.get('canvas') });
                  return (
                    r.each(e, function(t) {
                      a.add(t.clone());
                    }),
                    r.each(c, function(e) {
                      a._cfg[e] = t._cfg[e];
                    }),
                    a
                  );
                },
              }),
              (t.exports = l);
          },
          function(t, e, n) {
            var r = n(38),
              i = n(5),
              a = n(37);
            t.exports = function(t, e) {
              return (
                (t = r(t)),
                i(e, function(e) {
                  switch (e[0]) {
                    case 't':
                      a.translate(t, t, [e[1], e[2]]);
                      break;
                    case 's':
                      a.scale(t, t, [e[1], e[2]]);
                      break;
                    case 'r':
                      a.rotate(t, t, e[1]);
                      break;
                    case 'm':
                      a.multiply(t, t, e[1]);
                      break;
                    default:
                      return !1;
                  }
                }),
                t
              );
            };
          },
          function(t, e, n) {
            var r = n(130);
            t.exports = r;
          },
          function(t, e, n) {
            var r = n(131),
              i = n(68);
            (r.angle = function(t, e) {
              var n = r.dot(t, e) / (r.length(t) * r.length(e));
              return Math.acos(i(n, -1, 1));
            }),
              (r.direction = function(t, e) {
                return t[0] * e[1] - e[0] * t[1];
              }),
              (r.angleTo = function(t, e, n) {
                var i = r.angle(t, e),
                  a = r.direction(t, e) >= 0;
                return n ? (a ? 2 * Math.PI - i : i) : a ? i : 2 * Math.PI - i;
              }),
              (r.vertical = function(t, e, n) {
                return n ? ((t[0] = e[1]), (t[1] = -1 * e[0])) : ((t[0] = -1 * e[1]), (t[1] = e[0])), t;
              }),
              (t.exports = r);
          },
          function(t, e) {
            t.exports = function(t, e, n) {
              return t < e ? e : t > n ? n : t;
            };
          },
          function(t, e, n) {
            var r = n(39),
              i = n(71),
              a = n(28);
            t.exports = function(t) {
              for (var e = i(arguments), n = 1; n < e.length; n++) {
                var o = e[n];
                r(o) && (o = o.prototype), a(t.prototype, o);
              }
            };
          },
          function(t, e, n) {
            var r = n(39),
              i = n(28);
            t.exports = function(t, e, n, a) {
              r(e) || ((n = e), (e = t), (t = function() {}));
              var o = Object.create
                  ? function(t, e) {
                      return Object.create(t, { constructor: { value: e } });
                    }
                  : function(t, e) {
                      function n() {}
                      n.prototype = t;
                      var r = new n();
                      return (r.constructor = e), r;
                    },
                s = o(e.prototype, t);
              return (t.prototype = i(s, t.prototype)), (t.superclass = o(e.prototype, e)), i(s, n), i(t, a), t;
            };
          },
          function(t, e, n) {
            var r = n(21);
            t.exports = function(t) {
              return r(t) ? Array.prototype.slice.call(t) : [];
            };
          },
          function(t, e, n) {
            var r = n(140);
            t.exports = function(t) {
              var e = r(t);
              return e.charAt(0).toUpperCase() + e.substring(1);
            };
          },
          function(t, e) {
            var n = (function() {
              var t = {};
              return function(e) {
                return t[(e = e || 'g')] ? (t[e] += 1) : (t[e] = 1), e + t[e];
              };
            })();
            t.exports = n;
          },
          function(t, e, n) {
            var r = n(2);
            t.exports = function(t) {
              return r(t, 'Number');
            };
          },
          function(t, e, n) {
            'use strict';
            n.r(e);
            var r,
              i,
              a = 0,
              o = 0,
              s = 0,
              c = 1e3,
              u = 0,
              l = 0,
              h = 0,
              f = 'object' == typeof performance && performance.now ? performance : Date,
              d =
                'object' == typeof window && window.requestAnimationFrame
                  ? window.requestAnimationFrame.bind(window)
                  : function(t) {
                      setTimeout(t, 17);
                    };
            function p() {
              return l || (d(g), (l = f.now() + h));
            }
            function g() {
              l = 0;
            }
            function v() {
              this._call = this._time = this._next = null;
            }
            function m(t, e, n) {
              var r = new v();
              return r.restart(t, e, n), r;
            }
            function y() {
              p(), ++a;
              for (var t, e = r; e; ) (t = l - e._time) >= 0 && e._call.call(null, t), (e = e._next);
              --a;
            }
            function x() {
              (l = (u = f.now()) + h), (a = o = 0);
              try {
                y();
              } finally {
                (a = 0),
                  (function() {
                    for (var t, e, n = r, a = 1 / 0; n; )
                      n._call
                        ? (a > n._time && (a = n._time), (t = n), (n = n._next))
                        : ((e = n._next), (n._next = null), (n = t ? (t._next = e) : (r = e)));
                    (i = t), w(a);
                  })(),
                  (l = 0);
              }
            }
            function b() {
              var t = f.now(),
                e = t - u;
              e > c && ((h -= e), (u = t));
            }
            function w(t) {
              a ||
                (o && (o = clearTimeout(o)),
                t - l > 24
                  ? (t < 1 / 0 && (o = setTimeout(x, t - f.now() - h)), s && (s = clearInterval(s)))
                  : (s || ((u = f.now()), (s = setInterval(b, c))), (a = 1), d(x)));
            }
            v.prototype = m.prototype = {
              constructor: v,
              restart: function(t, e, n) {
                if ('function' != typeof t) throw new TypeError('callback is not a function');
                (n = (null == n ? p() : +n) + (null == e ? 0 : +e)),
                  this._next || i === this || (i ? (i._next = this) : (r = this), (i = this)),
                  (this._call = t),
                  (this._time = n),
                  w();
              },
              stop: function() {
                this._call && ((this._call = null), (this._time = 1 / 0), w());
              },
            };
            var S = function(t, e, n) {
                var r = new v();
                return (
                  (e = null == e ? 0 : +e),
                  r.restart(
                    function(n) {
                      r.stop(), t(n + e);
                    },
                    e,
                    n,
                  ),
                  r
                );
              },
              M = function(t, e, n) {
                var r = new v(),
                  i = e;
                return null == e
                  ? (r.restart(t, e, n), r)
                  : ((e = +e),
                    (n = null == n ? p() : +n),
                    r.restart(
                      function a(o) {
                        (o += i), r.restart(a, (i += e), n), t(o);
                      },
                      e,
                      n,
                    ),
                    r);
              };
            n.d(e, 'now', function() {
              return p;
            }),
              n.d(e, 'timer', function() {
                return m;
              }),
              n.d(e, 'timerFlush', function() {
                return y;
              }),
              n.d(e, 'timeout', function() {
                return S;
              }),
              n.d(e, 'interval', function() {
                return M;
              });
          },
          function(t, e, n) {
            'use strict';
            function r(t) {
              return +t;
            }
            function i(t) {
              return t * t;
            }
            function a(t) {
              return t * (2 - t);
            }
            function o(t) {
              return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
            }
            function s(t) {
              return t * t * t;
            }
            function c(t) {
              return --t * t * t + 1;
            }
            function u(t) {
              return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
            }
            n.r(e);
            var l = (function t(e) {
                function n(t) {
                  return Math.pow(t, e);
                }
                return (e = +e), (n.exponent = t), n;
              })(3),
              h = (function t(e) {
                function n(t) {
                  return 1 - Math.pow(1 - t, e);
                }
                return (e = +e), (n.exponent = t), n;
              })(3),
              f = (function t(e) {
                function n(t) {
                  return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
                }
                return (e = +e), (n.exponent = t), n;
              })(3),
              d = Math.PI,
              p = d / 2;
            function g(t) {
              return 1 - Math.cos(t * p);
            }
            function v(t) {
              return Math.sin(t * p);
            }
            function m(t) {
              return (1 - Math.cos(d * t)) / 2;
            }
            function y(t) {
              return Math.pow(2, 10 * t - 10);
            }
            function x(t) {
              return 1 - Math.pow(2, -10 * t);
            }
            function b(t) {
              return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
            }
            function w(t) {
              return 1 - Math.sqrt(1 - t * t);
            }
            function S(t) {
              return Math.sqrt(1 - --t * t);
            }
            function M(t) {
              return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
            }
            var P = 4 / 11,
              I = 6 / 11,
              O = 8 / 11,
              A = 0.75,
              _ = 9 / 11,
              C = 10 / 11,
              E = 0.9375,
              j = 21 / 22,
              N = 63 / 64,
              k = 1 / P / P;
            function D(t) {
              return 1 - B(1 - t);
            }
            function B(t) {
              return (t = +t) < P
                ? k * t * t
                : t < O
                ? k * (t -= I) * t + A
                : t < C
                ? k * (t -= _) * t + E
                : k * (t -= j) * t + N;
            }
            function T(t) {
              return ((t *= 2) <= 1 ? 1 - B(1 - t) : B(t - 1) + 1) / 2;
            }
            var L = (function t(e) {
                function n(t) {
                  return t * t * ((e + 1) * t - e);
                }
                return (e = +e), (n.overshoot = t), n;
              })(1.70158),
              R = (function t(e) {
                function n(t) {
                  return --t * t * ((e + 1) * t + e) + 1;
                }
                return (e = +e), (n.overshoot = t), n;
              })(1.70158),
              Y = (function t(e) {
                function n(t) {
                  return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2;
                }
                return (e = +e), (n.overshoot = t), n;
              })(1.70158),
              X = 2 * Math.PI,
              F = (function t(e, n) {
                var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= X);
                function i(t) {
                  return e * Math.pow(2, 10 * --t) * Math.sin((r - t) / n);
                }
                return (
                  (i.amplitude = function(e) {
                    return t(e, n * X);
                  }),
                  (i.period = function(n) {
                    return t(e, n);
                  }),
                  i
                );
              })(1, 0.3),
              Z = (function t(e, n) {
                var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= X);
                function i(t) {
                  return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / n);
                }
                return (
                  (i.amplitude = function(e) {
                    return t(e, n * X);
                  }),
                  (i.period = function(n) {
                    return t(e, n);
                  }),
                  i
                );
              })(1, 0.3),
              G = (function t(e, n) {
                var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= X);
                function i(t) {
                  return (
                    ((t = 2 * t - 1) < 0
                      ? e * Math.pow(2, 10 * t) * Math.sin((r - t) / n)
                      : 2 - e * Math.pow(2, -10 * t) * Math.sin((r + t) / n)) / 2
                  );
                }
                return (
                  (i.amplitude = function(e) {
                    return t(e, n * X);
                  }),
                  (i.period = function(n) {
                    return t(e, n);
                  }),
                  i
                );
              })(1, 0.3);
            n.d(e, 'easeLinear', function() {
              return r;
            }),
              n.d(e, 'easeQuad', function() {
                return o;
              }),
              n.d(e, 'easeQuadIn', function() {
                return i;
              }),
              n.d(e, 'easeQuadOut', function() {
                return a;
              }),
              n.d(e, 'easeQuadInOut', function() {
                return o;
              }),
              n.d(e, 'easeCubic', function() {
                return u;
              }),
              n.d(e, 'easeCubicIn', function() {
                return s;
              }),
              n.d(e, 'easeCubicOut', function() {
                return c;
              }),
              n.d(e, 'easeCubicInOut', function() {
                return u;
              }),
              n.d(e, 'easePoly', function() {
                return f;
              }),
              n.d(e, 'easePolyIn', function() {
                return l;
              }),
              n.d(e, 'easePolyOut', function() {
                return h;
              }),
              n.d(e, 'easePolyInOut', function() {
                return f;
              }),
              n.d(e, 'easeSin', function() {
                return m;
              }),
              n.d(e, 'easeSinIn', function() {
                return g;
              }),
              n.d(e, 'easeSinOut', function() {
                return v;
              }),
              n.d(e, 'easeSinInOut', function() {
                return m;
              }),
              n.d(e, 'easeExp', function() {
                return b;
              }),
              n.d(e, 'easeExpIn', function() {
                return y;
              }),
              n.d(e, 'easeExpOut', function() {
                return x;
              }),
              n.d(e, 'easeExpInOut', function() {
                return b;
              }),
              n.d(e, 'easeCircle', function() {
                return M;
              }),
              n.d(e, 'easeCircleIn', function() {
                return w;
              }),
              n.d(e, 'easeCircleOut', function() {
                return S;
              }),
              n.d(e, 'easeCircleInOut', function() {
                return M;
              }),
              n.d(e, 'easeBounce', function() {
                return B;
              }),
              n.d(e, 'easeBounceIn', function() {
                return D;
              }),
              n.d(e, 'easeBounceOut', function() {
                return B;
              }),
              n.d(e, 'easeBounceInOut', function() {
                return T;
              }),
              n.d(e, 'easeBack', function() {
                return Y;
              }),
              n.d(e, 'easeBackIn', function() {
                return L;
              }),
              n.d(e, 'easeBackOut', function() {
                return R;
              }),
              n.d(e, 'easeBackInOut', function() {
                return Y;
              }),
              n.d(e, 'easeElastic', function() {
                return Z;
              }),
              n.d(e, 'easeElasticIn', function() {
                return F;
              }),
              n.d(e, 'easeElasticOut', function() {
                return Z;
              }),
              n.d(e, 'easeElasticInOut', function() {
                return G;
              });
          },
          function(t, e, n) {
            'use strict';
            n.r(e);
            var r = function(t, e, n) {
              (t.prototype = e.prototype = n), (n.constructor = t);
            };
            function i(t, e) {
              var n = Object.create(t.prototype);
              for (var r in e) n[r] = e[r];
              return n;
            }
            function a() {}
            var o = '\\s*([+-]?\\d+)\\s*',
              s = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
              c = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
              u = /^#([0-9a-f]{3})$/,
              l = /^#([0-9a-f]{6})$/,
              h = new RegExp('^rgb\\(' + [o, o, o] + '\\)$'),
              f = new RegExp('^rgb\\(' + [c, c, c] + '\\)$'),
              d = new RegExp('^rgba\\(' + [o, o, o, s] + '\\)$'),
              p = new RegExp('^rgba\\(' + [c, c, c, s] + '\\)$'),
              g = new RegExp('^hsl\\(' + [s, c, c] + '\\)$'),
              v = new RegExp('^hsla\\(' + [s, c, c, s] + '\\)$'),
              m = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074,
              };
            function y(t) {
              var e;
              return (
                (t = (t + '').trim().toLowerCase()),
                (e = u.exec(t))
                  ? new M(
                      (((e = parseInt(e[1], 16)) >> 8) & 15) | ((e >> 4) & 240),
                      ((e >> 4) & 15) | (240 & e),
                      ((15 & e) << 4) | (15 & e),
                      1,
                    )
                  : (e = l.exec(t))
                  ? x(parseInt(e[1], 16))
                  : (e = h.exec(t))
                  ? new M(e[1], e[2], e[3], 1)
                  : (e = f.exec(t))
                  ? new M((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, 1)
                  : (e = d.exec(t))
                  ? b(e[1], e[2], e[3], e[4])
                  : (e = p.exec(t))
                  ? b((255 * e[1]) / 100, (255 * e[2]) / 100, (255 * e[3]) / 100, e[4])
                  : (e = g.exec(t))
                  ? I(e[1], e[2] / 100, e[3] / 100, 1)
                  : (e = v.exec(t))
                  ? I(e[1], e[2] / 100, e[3] / 100, e[4])
                  : m.hasOwnProperty(t)
                  ? x(m[t])
                  : 'transparent' === t
                  ? new M(NaN, NaN, NaN, 0)
                  : null
              );
            }
            function x(t) {
              return new M((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
            }
            function b(t, e, n, r) {
              return r <= 0 && (t = e = n = NaN), new M(t, e, n, r);
            }
            function w(t) {
              return t instanceof a || (t = y(t)), t ? new M((t = t.rgb()).r, t.g, t.b, t.opacity) : new M();
            }
            function S(t, e, n, r) {
              return 1 === arguments.length ? w(t) : new M(t, e, n, null == r ? 1 : r);
            }
            function M(t, e, n, r) {
              (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
            }
            function P(t) {
              return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? '0' : '') + t.toString(16);
            }
            function I(t, e, n, r) {
              return (
                r <= 0 ? (t = e = n = NaN) : n <= 0 || n >= 1 ? (t = e = NaN) : e <= 0 && (t = NaN), new A(t, e, n, r)
              );
            }
            function O(t, e, n, r) {
              return 1 === arguments.length
                ? (function(t) {
                    if (t instanceof A) return new A(t.h, t.s, t.l, t.opacity);
                    if ((t instanceof a || (t = y(t)), !t)) return new A();
                    if (t instanceof A) return t;
                    var e = (t = t.rgb()).r / 255,
                      n = t.g / 255,
                      r = t.b / 255,
                      i = Math.min(e, n, r),
                      o = Math.max(e, n, r),
                      s = NaN,
                      c = o - i,
                      u = (o + i) / 2;
                    return (
                      c
                        ? ((s = e === o ? (n - r) / c + 6 * (n < r) : n === o ? (r - e) / c + 2 : (e - n) / c + 4),
                          (c /= u < 0.5 ? o + i : 2 - o - i),
                          (s *= 60))
                        : (c = u > 0 && u < 1 ? 0 : s),
                      new A(s, c, u, t.opacity)
                    );
                  })(t)
                : new A(t, e, n, null == r ? 1 : r);
            }
            function A(t, e, n, r) {
              (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
            }
            function _(t, e, n) {
              return (
                255 * (t < 60 ? e + ((n - e) * t) / 60 : t < 180 ? n : t < 240 ? e + ((n - e) * (240 - t)) / 60 : e)
              );
            }
            r(a, y, {
              displayable: function() {
                return this.rgb().displayable();
              },
              hex: function() {
                return this.rgb().hex();
              },
              toString: function() {
                return this.rgb() + '';
              },
            }),
              r(
                M,
                S,
                i(a, {
                  brighter: function(t) {
                    return (
                      (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                      new M(this.r * t, this.g * t, this.b * t, this.opacity)
                    );
                  },
                  darker: function(t) {
                    return (
                      (t = null == t ? 0.7 : Math.pow(0.7, t)), new M(this.r * t, this.g * t, this.b * t, this.opacity)
                    );
                  },
                  rgb: function() {
                    return this;
                  },
                  displayable: function() {
                    return (
                      0 <= this.r &&
                      this.r <= 255 &&
                      0 <= this.g &&
                      this.g <= 255 &&
                      0 <= this.b &&
                      this.b <= 255 &&
                      0 <= this.opacity &&
                      this.opacity <= 1
                    );
                  },
                  hex: function() {
                    return '#' + P(this.r) + P(this.g) + P(this.b);
                  },
                  toString: function() {
                    var t = this.opacity;
                    return (
                      (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? 'rgb(' : 'rgba(') +
                      Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
                      ', ' +
                      Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
                      ', ' +
                      Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
                      (1 === t ? ')' : ', ' + t + ')')
                    );
                  },
                }),
              ),
              r(
                A,
                O,
                i(a, {
                  brighter: function(t) {
                    return (
                      (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)), new A(this.h, this.s, this.l * t, this.opacity)
                    );
                  },
                  darker: function(t) {
                    return (t = null == t ? 0.7 : Math.pow(0.7, t)), new A(this.h, this.s, this.l * t, this.opacity);
                  },
                  rgb: function() {
                    var t = (this.h % 360) + 360 * (this.h < 0),
                      e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                      n = this.l,
                      r = n + (n < 0.5 ? n : 1 - n) * e,
                      i = 2 * n - r;
                    return new M(
                      _(t >= 240 ? t - 240 : t + 120, i, r),
                      _(t, i, r),
                      _(t < 120 ? t + 240 : t - 120, i, r),
                      this.opacity,
                    );
                  },
                  displayable: function() {
                    return (
                      ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                      0 <= this.l &&
                      this.l <= 1 &&
                      0 <= this.opacity &&
                      this.opacity <= 1
                    );
                  },
                }),
              );
            var C = Math.PI / 180,
              E = 180 / Math.PI,
              j = 0.96422,
              N = 1,
              k = 0.82521,
              D = 4 / 29,
              B = 6 / 29,
              T = 3 * B * B,
              L = B * B * B;
            function R(t) {
              if (t instanceof X) return new X(t.l, t.a, t.b, t.opacity);
              if (t instanceof W) {
                if (isNaN(t.h)) return new X(t.l, 0, 0, t.opacity);
                var e = t.h * C;
                return new X(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
              }
              t instanceof M || (t = w(t));
              var n,
                r,
                i = z(t.r),
                a = z(t.g),
                o = z(t.b),
                s = F((0.2225045 * i + 0.7168786 * a + 0.0606169 * o) / N);
              return (
                i === a && a === o
                  ? (n = r = s)
                  : ((n = F((0.4360747 * i + 0.3850649 * a + 0.1430804 * o) / j)),
                    (r = F((0.0139322 * i + 0.0971045 * a + 0.7141733 * o) / k))),
                new X(116 * s - 16, 500 * (n - s), 200 * (s - r), t.opacity)
              );
            }
            function Y(t, e, n, r) {
              return 1 === arguments.length ? R(t) : new X(t, e, n, null == r ? 1 : r);
            }
            function X(t, e, n, r) {
              (this.l = +t), (this.a = +e), (this.b = +n), (this.opacity = +r);
            }
            function F(t) {
              return t > L ? Math.pow(t, 1 / 3) : t / T + D;
            }
            function Z(t) {
              return t > B ? t * t * t : T * (t - D);
            }
            function G(t) {
              return 255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
            }
            function z(t) {
              return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
            }
            function H(t, e, n, r) {
              return 1 === arguments.length
                ? (function(t) {
                    if (t instanceof W) return new W(t.h, t.c, t.l, t.opacity);
                    if ((t instanceof X || (t = R(t)), 0 === t.a && 0 === t.b)) return new W(NaN, 0, t.l, t.opacity);
                    var e = Math.atan2(t.b, t.a) * E;
                    return new W(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
                  })(t)
                : new W(t, e, n, null == r ? 1 : r);
            }
            function W(t, e, n, r) {
              (this.h = +t), (this.c = +e), (this.l = +n), (this.opacity = +r);
            }
            r(
              X,
              Y,
              i(a, {
                brighter: function(t) {
                  return new X(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
                },
                darker: function(t) {
                  return new X(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
                },
                rgb: function() {
                  var t = (this.l + 16) / 116,
                    e = isNaN(this.a) ? t : t + this.a / 500,
                    n = isNaN(this.b) ? t : t - this.b / 200;
                  return new M(
                    G(3.1338561 * (e = j * Z(e)) - 1.6168667 * (t = N * Z(t)) - 0.4906146 * (n = k * Z(n))),
                    G(-0.9787684 * e + 1.9161415 * t + 0.033454 * n),
                    G(0.0719453 * e - 0.2289914 * t + 1.4052427 * n),
                    this.opacity,
                  );
                },
              }),
            ),
              r(
                W,
                H,
                i(a, {
                  brighter: function(t) {
                    return new W(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
                  },
                  darker: function(t) {
                    return new W(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
                  },
                  rgb: function() {
                    return R(this).rgb();
                  },
                }),
              );
            var U = -0.14861,
              V = 1.78277,
              q = -0.29227,
              J = -0.90649,
              Q = 1.97294,
              K = Q * J,
              $ = Q * V,
              tt = V * q - J * U;
            function et(t, e, n, r) {
              return 1 === arguments.length
                ? (function(t) {
                    if (t instanceof nt) return new nt(t.h, t.s, t.l, t.opacity);
                    t instanceof M || (t = w(t));
                    var e = t.r / 255,
                      n = t.g / 255,
                      r = t.b / 255,
                      i = (tt * r + K * e - $ * n) / (tt + K - $),
                      a = r - i,
                      o = (Q * (n - i) - q * a) / J,
                      s = Math.sqrt(o * o + a * a) / (Q * i * (1 - i)),
                      c = s ? Math.atan2(o, a) * E - 120 : NaN;
                    return new nt(c < 0 ? c + 360 : c, s, i, t.opacity);
                  })(t)
                : new nt(t, e, n, null == r ? 1 : r);
            }
            function nt(t, e, n, r) {
              (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
            }
            function rt(t, e, n, r, i) {
              var a = t * t,
                o = a * t;
              return (
                ((1 - 3 * t + 3 * a - o) * e + (4 - 6 * a + 3 * o) * n + (1 + 3 * t + 3 * a - 3 * o) * r + o * i) / 6
              );
            }
            r(
              nt,
              et,
              i(a, {
                brighter: function(t) {
                  return (
                    (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)), new nt(this.h, this.s, this.l * t, this.opacity)
                  );
                },
                darker: function(t) {
                  return (t = null == t ? 0.7 : Math.pow(0.7, t)), new nt(this.h, this.s, this.l * t, this.opacity);
                },
                rgb: function() {
                  var t = isNaN(this.h) ? 0 : (this.h + 120) * C,
                    e = +this.l,
                    n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
                    r = Math.cos(t),
                    i = Math.sin(t);
                  return new M(
                    255 * (e + n * (U * r + V * i)),
                    255 * (e + n * (q * r + J * i)),
                    255 * (e + n * (Q * r)),
                    this.opacity,
                  );
                },
              }),
            );
            var it = function(t) {
                var e = t.length - 1;
                return function(n) {
                  var r = n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
                    i = t[r],
                    a = t[r + 1],
                    o = r > 0 ? t[r - 1] : 2 * i - a,
                    s = r < e - 1 ? t[r + 2] : 2 * a - i;
                  return rt((n - r / e) * e, o, i, a, s);
                };
              },
              at = function(t) {
                var e = t.length;
                return function(n) {
                  var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
                    i = t[(r + e - 1) % e],
                    a = t[r % e],
                    o = t[(r + 1) % e],
                    s = t[(r + 2) % e];
                  return rt((n - r / e) * e, i, a, o, s);
                };
              },
              ot = function(t) {
                return function() {
                  return t;
                };
              };
            function st(t, e) {
              return function(n) {
                return t + n * e;
              };
            }
            function ct(t, e) {
              var n = e - t;
              return n ? st(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : ot(isNaN(t) ? e : t);
            }
            function ut(t, e) {
              var n = e - t;
              return n ? st(t, n) : ot(isNaN(t) ? e : t);
            }
            var lt = (function t(e) {
              var n = (function(t) {
                return 1 == (t = +t)
                  ? ut
                  : function(e, n) {
                      return n - e
                        ? (function(t, e, n) {
                            return (
                              (t = Math.pow(t, n)),
                              (e = Math.pow(e, n) - t),
                              (n = 1 / n),
                              function(r) {
                                return Math.pow(t + r * e, n);
                              }
                            );
                          })(e, n, t)
                        : ot(isNaN(e) ? n : e);
                    };
              })(e);
              function r(t, e) {
                var r = n((t = S(t)).r, (e = S(e)).r),
                  i = n(t.g, e.g),
                  a = n(t.b, e.b),
                  o = ut(t.opacity, e.opacity);
                return function(e) {
                  return (t.r = r(e)), (t.g = i(e)), (t.b = a(e)), (t.opacity = o(e)), t + '';
                };
              }
              return (r.gamma = t), r;
            })(1);
            function ht(t) {
              return function(e) {
                var n,
                  r,
                  i = e.length,
                  a = new Array(i),
                  o = new Array(i),
                  s = new Array(i);
                for (n = 0; n < i; ++n) (r = S(e[n])), (a[n] = r.r || 0), (o[n] = r.g || 0), (s[n] = r.b || 0);
                return (
                  (a = t(a)),
                  (o = t(o)),
                  (s = t(s)),
                  (r.opacity = 1),
                  function(t) {
                    return (r.r = a(t)), (r.g = o(t)), (r.b = s(t)), r + '';
                  }
                );
              };
            }
            var ft,
              dt,
              pt,
              gt,
              vt = ht(it),
              mt = ht(at),
              yt = function(t, e) {
                var n,
                  r = e ? e.length : 0,
                  i = t ? Math.min(r, t.length) : 0,
                  a = new Array(i),
                  o = new Array(r);
                for (n = 0; n < i; ++n) a[n] = It(t[n], e[n]);
                for (; n < r; ++n) o[n] = e[n];
                return function(t) {
                  for (n = 0; n < i; ++n) o[n] = a[n](t);
                  return o;
                };
              },
              xt = function(t, e) {
                var n = new Date();
                return (
                  (e -= t = +t),
                  function(r) {
                    return n.setTime(t + e * r), n;
                  }
                );
              },
              bt = function(t, e) {
                return (
                  (e -= t = +t),
                  function(n) {
                    return t + e * n;
                  }
                );
              },
              wt = function(t, e) {
                var n,
                  r = {},
                  i = {};
                for (n in ((null !== t && 'object' == typeof t) || (t = {}),
                (null !== e && 'object' == typeof e) || (e = {}),
                e))
                  n in t ? (r[n] = It(t[n], e[n])) : (i[n] = e[n]);
                return function(t) {
                  for (n in r) i[n] = r[n](t);
                  return i;
                };
              },
              St = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
              Mt = new RegExp(St.source, 'g'),
              Pt = function(t, e) {
                var n,
                  r,
                  i,
                  a = (St.lastIndex = Mt.lastIndex = 0),
                  o = -1,
                  s = [],
                  c = [];
                for (t += '', e += ''; (n = St.exec(t)) && (r = Mt.exec(e)); )
                  (i = r.index) > a && ((i = e.slice(a, i)), s[o] ? (s[o] += i) : (s[++o] = i)),
                    (n = n[0]) === (r = r[0])
                      ? s[o]
                        ? (s[o] += r)
                        : (s[++o] = r)
                      : ((s[++o] = null), c.push({ i: o, x: bt(n, r) })),
                    (a = Mt.lastIndex);
                return (
                  a < e.length && ((i = e.slice(a)), s[o] ? (s[o] += i) : (s[++o] = i)),
                  s.length < 2
                    ? c[0]
                      ? (function(t) {
                          return function(e) {
                            return t(e) + '';
                          };
                        })(c[0].x)
                      : (function(t) {
                          return function() {
                            return t;
                          };
                        })(e)
                    : ((e = c.length),
                      function(t) {
                        for (var n, r = 0; r < e; ++r) s[(n = c[r]).i] = n.x(t);
                        return s.join('');
                      })
                );
              },
              It = function(t, e) {
                var n,
                  r = typeof e;
                return null == e || 'boolean' === r
                  ? ot(e)
                  : ('number' === r
                      ? bt
                      : 'string' === r
                      ? (n = y(e))
                        ? ((e = n), lt)
                        : Pt
                      : e instanceof y
                      ? lt
                      : e instanceof Date
                      ? xt
                      : Array.isArray(e)
                      ? yt
                      : ('function' != typeof e.valueOf && 'function' != typeof e.toString) || isNaN(e)
                      ? wt
                      : bt)(t, e);
              },
              Ot = function(t, e) {
                return (
                  (e -= t = +t),
                  function(n) {
                    return Math.round(t + e * n);
                  }
                );
              },
              At = 180 / Math.PI,
              _t = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
              Ct = function(t, e, n, r, i, a) {
                var o, s, c;
                return (
                  (o = Math.sqrt(t * t + e * e)) && ((t /= o), (e /= o)),
                  (c = t * n + e * r) && ((n -= t * c), (r -= e * c)),
                  (s = Math.sqrt(n * n + r * r)) && ((n /= s), (r /= s), (c /= s)),
                  t * r < e * n && ((t = -t), (e = -e), (c = -c), (o = -o)),
                  {
                    translateX: i,
                    translateY: a,
                    rotate: Math.atan2(e, t) * At,
                    skewX: Math.atan(c) * At,
                    scaleX: o,
                    scaleY: s,
                  }
                );
              };
            function Et(t, e, n, r) {
              function i(t) {
                return t.length ? t.pop() + ' ' : '';
              }
              return function(a, o) {
                var s = [],
                  c = [];
                return (
                  (a = t(a)),
                  (o = t(o)),
                  (function(t, r, i, a, o, s) {
                    if (t !== i || r !== a) {
                      var c = o.push('translate(', null, e, null, n);
                      s.push({ i: c - 4, x: bt(t, i) }, { i: c - 2, x: bt(r, a) });
                    } else (i || a) && o.push('translate(' + i + e + a + n);
                  })(a.translateX, a.translateY, o.translateX, o.translateY, s, c),
                  (function(t, e, n, a) {
                    t !== e
                      ? (t - e > 180 ? (e += 360) : e - t > 180 && (t += 360),
                        c.push({ i: n.push(i(n) + 'rotate(', null, r) - 2, x: bt(t, e) }))
                      : e && n.push(i(n) + 'rotate(' + e + r);
                  })(a.rotate, o.rotate, s),
                  (function(t, e, n, a) {
                    t !== e
                      ? c.push({ i: n.push(i(n) + 'skewX(', null, r) - 2, x: bt(t, e) })
                      : e && n.push(i(n) + 'skewX(' + e + r);
                  })(a.skewX, o.skewX, s),
                  (function(t, e, n, r, a, o) {
                    if (t !== n || e !== r) {
                      var s = a.push(i(a) + 'scale(', null, ',', null, ')');
                      o.push({ i: s - 4, x: bt(t, n) }, { i: s - 2, x: bt(e, r) });
                    } else (1 === n && 1 === r) || a.push(i(a) + 'scale(' + n + ',' + r + ')');
                  })(a.scaleX, a.scaleY, o.scaleX, o.scaleY, s, c),
                  (a = o = null),
                  function(t) {
                    for (var e, n = -1, r = c.length; ++n < r; ) s[(e = c[n]).i] = e.x(t);
                    return s.join('');
                  }
                );
              };
            }
            var jt = Et(
                function(t) {
                  return 'none' === t
                    ? _t
                    : (ft ||
                        ((ft = document.createElement('DIV')),
                        (dt = document.documentElement),
                        (pt = document.defaultView)),
                      (ft.style.transform = t),
                      (t = pt.getComputedStyle(dt.appendChild(ft), null).getPropertyValue('transform')),
                      dt.removeChild(ft),
                      (t = t.slice(7, -1).split(',')),
                      Ct(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
                },
                'px, ',
                'px)',
                'deg)',
              ),
              Nt = Et(
                function(t) {
                  return null == t
                    ? _t
                    : (gt || (gt = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
                      gt.setAttribute('transform', t),
                      (t = gt.transform.baseVal.consolidate())
                        ? ((t = t.matrix), Ct(t.a, t.b, t.c, t.d, t.e, t.f))
                        : _t);
                },
                ', ',
                ')',
                ')',
              ),
              kt = Math.SQRT2;
            function Dt(t) {
              return ((t = Math.exp(t)) + 1 / t) / 2;
            }
            var Bt = function(t, e) {
              var n,
                r,
                i = t[0],
                a = t[1],
                o = t[2],
                s = e[0],
                c = e[1],
                u = e[2],
                l = s - i,
                h = c - a,
                f = l * l + h * h;
              if (f < 1e-12)
                (r = Math.log(u / o) / kt),
                  (n = function(t) {
                    return [i + t * l, a + t * h, o * Math.exp(kt * t * r)];
                  });
              else {
                var d = Math.sqrt(f),
                  p = (u * u - o * o + 4 * f) / (2 * o * 2 * d),
                  g = (u * u - o * o - 4 * f) / (2 * u * 2 * d),
                  v = Math.log(Math.sqrt(p * p + 1) - p),
                  m = Math.log(Math.sqrt(g * g + 1) - g);
                (r = (m - v) / kt),
                  (n = function(t) {
                    var e = t * r,
                      n = Dt(v),
                      s =
                        (o / (2 * d)) *
                        (n *
                          (function(t) {
                            return ((t = Math.exp(2 * t)) - 1) / (t + 1);
                          })(kt * e + v) -
                          (function(t) {
                            return ((t = Math.exp(t)) - 1 / t) / 2;
                          })(v));
                    return [i + s * l, a + s * h, (o * n) / Dt(kt * e + v)];
                  });
              }
              return (n.duration = 1e3 * r), n;
            };
            function Tt(t) {
              return function(e, n) {
                var r = t((e = O(e)).h, (n = O(n)).h),
                  i = ut(e.s, n.s),
                  a = ut(e.l, n.l),
                  o = ut(e.opacity, n.opacity);
                return function(t) {
                  return (e.h = r(t)), (e.s = i(t)), (e.l = a(t)), (e.opacity = o(t)), e + '';
                };
              };
            }
            var Lt = Tt(ct),
              Rt = Tt(ut);
            function Yt(t, e) {
              var n = ut((t = Y(t)).l, (e = Y(e)).l),
                r = ut(t.a, e.a),
                i = ut(t.b, e.b),
                a = ut(t.opacity, e.opacity);
              return function(e) {
                return (t.l = n(e)), (t.a = r(e)), (t.b = i(e)), (t.opacity = a(e)), t + '';
              };
            }
            function Xt(t) {
              return function(e, n) {
                var r = t((e = H(e)).h, (n = H(n)).h),
                  i = ut(e.c, n.c),
                  a = ut(e.l, n.l),
                  o = ut(e.opacity, n.opacity);
                return function(t) {
                  return (e.h = r(t)), (e.c = i(t)), (e.l = a(t)), (e.opacity = o(t)), e + '';
                };
              };
            }
            var Ft = Xt(ct),
              Zt = Xt(ut);
            function Gt(t) {
              return (function e(n) {
                function r(e, r) {
                  var i = t((e = et(e)).h, (r = et(r)).h),
                    a = ut(e.s, r.s),
                    o = ut(e.l, r.l),
                    s = ut(e.opacity, r.opacity);
                  return function(t) {
                    return (e.h = i(t)), (e.s = a(t)), (e.l = o(Math.pow(t, n))), (e.opacity = s(t)), e + '';
                  };
                }
                return (n = +n), (r.gamma = e), r;
              })(1);
            }
            var zt = Gt(ct),
              Ht = Gt(ut),
              Wt = function(t, e) {
                for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t(r / (e - 1));
                return n;
              };
            n.d(e, 'interpolate', function() {
              return It;
            }),
              n.d(e, 'interpolateArray', function() {
                return yt;
              }),
              n.d(e, 'interpolateBasis', function() {
                return it;
              }),
              n.d(e, 'interpolateBasisClosed', function() {
                return at;
              }),
              n.d(e, 'interpolateDate', function() {
                return xt;
              }),
              n.d(e, 'interpolateNumber', function() {
                return bt;
              }),
              n.d(e, 'interpolateObject', function() {
                return wt;
              }),
              n.d(e, 'interpolateRound', function() {
                return Ot;
              }),
              n.d(e, 'interpolateString', function() {
                return Pt;
              }),
              n.d(e, 'interpolateTransformCss', function() {
                return jt;
              }),
              n.d(e, 'interpolateTransformSvg', function() {
                return Nt;
              }),
              n.d(e, 'interpolateZoom', function() {
                return Bt;
              }),
              n.d(e, 'interpolateRgb', function() {
                return lt;
              }),
              n.d(e, 'interpolateRgbBasis', function() {
                return vt;
              }),
              n.d(e, 'interpolateRgbBasisClosed', function() {
                return mt;
              }),
              n.d(e, 'interpolateHsl', function() {
                return Lt;
              }),
              n.d(e, 'interpolateHslLong', function() {
                return Rt;
              }),
              n.d(e, 'interpolateLab', function() {
                return Yt;
              }),
              n.d(e, 'interpolateHcl', function() {
                return Ft;
              }),
              n.d(e, 'interpolateHclLong', function() {
                return Zt;
              }),
              n.d(e, 'interpolateCubehelix', function() {
                return zt;
              }),
              n.d(e, 'interpolateCubehelixLong', function() {
                return Ht;
              }),
              n.d(e, 'quantize', function() {
                return Wt;
              });
          },
          function(t, e, n) {
            'undefined' != typeof self && self,
              (t.exports = (function(t) {
                var e = {};
                function n(r) {
                  if (e[r]) return e[r].exports;
                  var i = (e[r] = { i: r, l: !1, exports: {} });
                  return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
                }
                return (
                  (n.m = t),
                  (n.c = e),
                  (n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
                  }),
                  (n.n = function(t) {
                    var e =
                      t && t.__esModule
                        ? function() {
                            return t.default;
                          }
                        : function() {
                            return t;
                          };
                    return n.d(e, 'a', e), e;
                  }),
                  (n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                  }),
                  (n.p = ''),
                  n((n.s = 5))
                );
              })([
                function(t, e, n) {
                  var r = n(7);
                  t.exports = { assign: r };
                },
                function(t, e, n) {
                  var r = n(3),
                    i = (function() {
                      function t(t, e) {
                        void 0 === e && (e = {}), (this.options = e), (this.rootNode = r(t, e));
                      }
                      return (
                        (t.prototype.execute = function() {
                          throw new Error('please override this method');
                        }),
                        t
                      );
                    })();
                  t.exports = i;
                },
                function(t, e, n) {
                  var r = n(4),
                    i = ['LR', 'RL', 'TB', 'BT', 'H', 'V'],
                    a = ['LR', 'RL', 'H'],
                    o = i[0];
                  t.exports = function(t, e, n) {
                    var s = e.direction || o;
                    if (
                      ((e.isHorizontal = (function(t) {
                        return a.indexOf(t) > -1;
                      })(s)),
                      s && -1 === i.indexOf(s))
                    )
                      throw new TypeError('Invalid direction: ' + s);
                    if (s === i[0]) n(t, e);
                    else if (s === i[1]) n(t, e), t.right2left();
                    else if (s === i[2]) n(t, e);
                    else if (s === i[3]) n(t, e), t.bottom2top();
                    else if (s === i[4] || s === i[5]) {
                      var c = r(t, e),
                        u = c.left,
                        l = c.right;
                      n(u, e),
                        n(l, e),
                        e.isHorizontal ? u.right2left() : u.bottom2top(),
                        l.translate(u.x - l.x, u.y - l.y),
                        (t.x = u.x),
                        (t.y = l.y);
                      var h = t.getBoundingBox();
                      e.isHorizontal ? h.top < 0 && t.translate(0, -h.top) : h.left < 0 && t.translate(-h.left, 0);
                    }
                    return t.translate(-(t.x + t.width / 2 + t.hgap), -(t.y + t.height / 2 + t.vgap)), t;
                  };
                },
                function(t, e, n) {
                  var r = n(0),
                    i = {
                      getId: function(t) {
                        return t.id || t.name;
                      },
                      getHGap: function(t) {
                        return t.hgap || 18;
                      },
                      getVGap: function(t) {
                        return t.vgap || 18;
                      },
                      getChildren: function(t) {
                        return t.children;
                      },
                      getHeight: function(t) {
                        return t.height || 36;
                      },
                      getWidth: function(t) {
                        var e = t.name || ' ';
                        return t.width || 18 * e.split('').length;
                      },
                    };
                  function a(t, e) {
                    var n = this;
                    if (((n.vgap = n.hgap = 0), t instanceof a)) return t;
                    n.data = t;
                    var r = e.getHGap(t),
                      i = e.getVGap(t);
                    return (
                      (n.width = e.getWidth(t)),
                      (n.height = e.getHeight(t)),
                      (n.id = e.getId(t)),
                      (n.x = n.y = 0),
                      (n.depth = 0),
                      n.children || (n.children = []),
                      n.addGap(r, i),
                      n
                    );
                  }
                  r.assign(a.prototype, {
                    isRoot: function() {
                      return 0 === this.depth;
                    },
                    isLeaf: function() {
                      return 0 === this.children.length;
                    },
                    addGap: function(t, e) {
                      (this.hgap += t), (this.vgap += e), (this.width += 2 * t), (this.height += 2 * e);
                    },
                    eachNode: function(t) {
                      for (var e, n = [this]; (e = n.pop()); ) t(e), (n = n.concat(e.children));
                    },
                    DFTraverse: function(t) {
                      this.eachNode(t);
                    },
                    BFTraverse: function(t) {
                      for (var e, n = [this]; (e = n.shift()); ) t(e), (n = n.concat(e.children));
                    },
                    getBoundingBox: function() {
                      var t = { left: Number.MAX_VALUE, top: Number.MAX_VALUE, width: 0, height: 0 };
                      return (
                        this.eachNode(function(e) {
                          (t.left = Math.min(t.left, e.x)),
                            (t.top = Math.min(t.top, e.y)),
                            (t.width = Math.max(t.width, e.x + e.width)),
                            (t.height = Math.max(t.height, e.y + e.height));
                        }),
                        t
                      );
                    },
                    translate: function(t, e) {
                      void 0 === t && (t = 0),
                        void 0 === e && (e = 0),
                        this.eachNode(function(n) {
                          (n.x += t), (n.y += e);
                        });
                    },
                    right2left: function() {
                      var t = this.getBoundingBox();
                      this.eachNode(function(e) {
                        e.x = e.x - 2 * (e.x - t.left) - e.width;
                      }),
                        this.translate(t.width, 0);
                    },
                    bottom2top: function() {
                      var t = this.getBoundingBox();
                      this.eachNode(function(e) {
                        e.y = e.y - 2 * (e.y - t.top) - e.height;
                      }),
                        this.translate(0, t.height);
                    },
                  }),
                    (t.exports = function(t, e, n) {
                      void 0 === e && (e = {});
                      var o,
                        s = new a(t, (e = r.assign({}, i, e))),
                        c = [s];
                      if (!n && !t.collapsed)
                        for (; (o = c.pop()); )
                          if (!o.data.collapsed) {
                            var u = e.getChildren(o.data),
                              l = u ? u.length : 0;
                            if (((o.children = new Array(l)), u && l))
                              for (var h = 0; h < l; h++) {
                                var f = new a(u[h], e);
                                (o.children[h] = f), c.push(f), (f.parent = o), (f.depth = o.depth + 1);
                              }
                          }
                      return s;
                    });
                },
                function(t, e, n) {
                  var r = n(3);
                  t.exports = function(t, e) {
                    for (
                      var n = r(t.data, e, !0),
                        i = r(t.data, e, !0),
                        a = t.children.length,
                        o = Math.round(a / 2),
                        s =
                          e.getSide ||
                          function(t, e) {
                            return e < o ? 'right' : 'left';
                          },
                        c = 0;
                      c < a;
                      c++
                    ) {
                      var u = t.children[c];
                      'right' === s(u, c) ? i.children.push(u) : n.children.push(u);
                    }
                    return (
                      n.eachNode(function(t) {
                        t.isRoot() || (t.side = 'left');
                      }),
                      i.eachNode(function(t) {
                        t.isRoot() || (t.side = 'right');
                      }),
                      { left: n, right: i }
                    );
                  };
                },
                function(t, e, n) {
                  var r = { compactBox: n(6), dendrogram: n(9), indented: n(11), mindmap: n(13) };
                  t.exports = r;
                },
                function(t, e, n) {
                  var r = n(1),
                    i = n(8),
                    a = n(2),
                    o = n(0),
                    s = (function(t) {
                      function e() {
                        return t.apply(this, arguments) || this;
                      }
                      return (
                        (function(t, e) {
                          (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
                        })(e, t),
                        (e.prototype.execute = function() {
                          return a(this.rootNode, this.options, i);
                        }),
                        e
                      );
                    })(r),
                    c = {};
                  t.exports = function(t, e) {
                    return (e = o.assign({}, c, e)), new s(t, e).execute();
                  };
                },
                function(t, e) {
                  function n(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && 'constructor' !== n && void 0 !== e[n] && (t[n] = e[n]);
                  }
                  t.exports = function(t, e, r, i) {
                    return e && n(t, e), r && n(t, r), i && n(t, i), t;
                  };
                },
                function(t, e) {
                  function n(t, e, n, r) {
                    void 0 === r && (r = []);
                    var i = this;
                    (i.w = t || 0),
                      (i.h = e || 0),
                      (i.y = n || 0),
                      (i.x = 0),
                      (i.c = r || []),
                      (i.cs = r.length),
                      (i.prelim = 0),
                      (i.mod = 0),
                      (i.shift = 0),
                      (i.change = 0),
                      (i.tl = null),
                      (i.tr = null),
                      (i.el = null),
                      (i.er = null),
                      (i.msel = 0),
                      (i.mser = 0);
                  }
                  (n.fromNode = function(t, e) {
                    if (!t) return null;
                    var r = [];
                    return (
                      t.children.forEach(function(t) {
                        r.push(n.fromNode(t, e));
                      }),
                      e ? new n(t.height, t.width, t.x, r) : new n(t.width, t.height, t.y, r)
                    );
                  }),
                    (t.exports = function(t, e) {
                      void 0 === e && (e = {});
                      var r = e.isHorizontal;
                      function i(t) {
                        0 === t.cs
                          ? ((t.el = t), (t.er = t), (t.msel = t.mser = 0))
                          : ((t.el = t.c[0].el),
                            (t.msel = t.c[0].msel),
                            (t.er = t.c[t.cs - 1].er),
                            (t.mser = t.c[t.cs - 1].mser));
                      }
                      function a(t, e, n) {
                        for (var r = t.c[e - 1], i = r.mod, a = t.c[e], l = a.mod; null !== r && null !== a; ) {
                          u(r) > n.low && (n = n.nxt);
                          var h = i + r.prelim + r.w - (l + a.prelim);
                          h > 0 && ((l += h), o(t, e, n.index, h));
                          var f = u(r),
                            d = u(a);
                          f <= d && null !== (r = c(r)) && (i += r.mod), f >= d && null !== (a = s(a)) && (l += a.mod);
                        }
                        !r && a
                          ? (function(t, e, n, r) {
                              var i = t.c[0].el;
                              i.tl = n;
                              var a = r - n.mod - t.c[0].msel;
                              (i.mod += a), (i.prelim -= a), (t.c[0].el = t.c[e].el), (t.c[0].msel = t.c[e].msel);
                            })(t, e, a, l)
                          : r &&
                            !a &&
                            (function(t, e, n, r) {
                              var i = t.c[e].er;
                              i.tr = n;
                              var a = r - n.mod - t.c[e].mser;
                              (i.mod += a),
                                (i.prelim -= a),
                                (t.c[e].er = t.c[e - 1].er),
                                (t.c[e].mser = t.c[e - 1].mser);
                            })(t, e, r, i);
                      }
                      function o(t, e, n, r) {
                        (t.c[e].mod += r),
                          (t.c[e].msel += r),
                          (t.c[e].mser += r),
                          (function(t, e, n, r) {
                            if (n !== e - 1) {
                              var i = e - n;
                              (t.c[n + 1].shift += r / i), (t.c[e].shift -= r / i), (t.c[e].change -= r - r / i);
                            }
                          })(t, e, n, r);
                      }
                      function s(t) {
                        return 0 === t.cs ? t.tl : t.c[0];
                      }
                      function c(t) {
                        return 0 === t.cs ? t.tr : t.c[t.cs - 1];
                      }
                      function u(t) {
                        return t.y + t.h;
                      }
                      function l(t, e, n) {
                        for (; null !== n && t >= n.low; ) n = n.nxt;
                        return { low: t, index: e, nxt: n };
                      }
                      !(function t(e, n, r) {
                        void 0 === r && (r = 0),
                          n ? ((e.x = r), (r += e.width)) : ((e.y = r), (r += e.height)),
                          e.children.forEach(function(e) {
                            t(e, n, r);
                          });
                      })(t, r);
                      var h = n.fromNode(t, r);
                      return (
                        (function t(e) {
                          if (0 !== e.cs) {
                            t(e.c[0]);
                            for (var n = l(u(e.c[0].el), 0, null), r = 1; r < e.cs; ++r) {
                              t(e.c[r]);
                              var o = u(e.c[r].er);
                              a(e, r, n), (n = l(o, r, n));
                            }
                            !(function(t) {
                              t.prelim =
                                (t.c[0].prelim +
                                  t.c[0].mod +
                                  t.c[t.cs - 1].mod +
                                  t.c[t.cs - 1].prelim +
                                  t.c[t.cs - 1].w) /
                                  2 -
                                t.w / 2;
                            })(e),
                              i(e);
                          } else i(e);
                        })(h),
                        (function t(e, n) {
                          (n += e.mod),
                            (e.x = e.prelim + n),
                            (function(t) {
                              for (var e = 0, n = 0, r = 0; r < t.cs; r++)
                                (n += (e += t.c[r].shift) + t.c[r].change), (t.c[r].mod += n);
                            })(e);
                          for (var r = 0; r < e.cs; r++) t(e.c[r], n);
                        })(h, 0),
                        (function t(e, n, r) {
                          r ? (n.y = e.x) : (n.x = e.x),
                            e.c.forEach(function(e, i) {
                              t(e, n.children[i], r);
                            });
                        })(h, t, r),
                        (function(t, e) {
                          !(function t(e, n, r) {
                            r ? (e.y += n) : (e.x += n),
                              e.children.forEach(function(e) {
                                t(e, n, r);
                              });
                          })(
                            t,
                            -(function t(e, n) {
                              var r = n ? e.y : e.x;
                              return (
                                e.children.forEach(function(e) {
                                  r = Math.min(t(e, n), r);
                                }),
                                r
                              );
                            })(t, e),
                            e,
                          );
                        })(t, r),
                        t
                      );
                    });
                },
                function(t, e, n) {
                  var r = n(1),
                    i = n(10),
                    a = n(2),
                    o = n(0),
                    s = (function(t) {
                      function e() {
                        return t.apply(this, arguments) || this;
                      }
                      return (
                        (function(t, e) {
                          (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
                        })(e, t),
                        (e.prototype.execute = function() {
                          return (this.rootNode.width = 0), a(this.rootNode, this.options, i);
                        }),
                        e
                      );
                    })(r),
                    c = {};
                  t.exports = function(t, e) {
                    return (e = o.assign({}, c, e)), new s(t, e).execute();
                  };
                },
                function(t, e, n) {
                  var r = n(0),
                    i = { isHorizontal: !0, nodeSep: 20, nodeSize: 20, rankSep: 200, subTreeSep: 10 };
                  t.exports = function(t, e) {
                    void 0 === e && (e = {}), (e = r.assign({}, i, e));
                    var n,
                      a = 0,
                      o = (function t(e) {
                        if (!e) return null;
                        (e.width = 0), e.depth && e.depth > a && (a = e.depth);
                        var n = e.children,
                          r = n.length,
                          i = new (function(t, e) {
                            void 0 === t && (t = 0), void 0 === e && (e = []);
                            var n = this;
                            (n.x = n.y = 0), (n.leftChild = n.rightChild = null), (n.height = 0), (n.children = e);
                          })(e.height, []);
                        return (
                          n.forEach(function(e, n) {
                            var a = t(e);
                            i.children.push(a), 0 === n && (i.leftChild = a), n === r - 1 && (i.rightChild = a);
                          }),
                          (i.originNode = e),
                          (i.isLeaf = e.isLeaf()),
                          i
                        );
                      })(t);
                    return (
                      (function t(e) {
                        if (e.isLeaf || 0 === e.children.length) e.drawingDepth = a;
                        else {
                          var n = e.children.map(function(e) {
                              return t(e);
                            }),
                            r = Math.min.apply(null, n);
                          e.drawingDepth = r - 1;
                        }
                        return e.drawingDepth;
                      })(o),
                      (function t(r) {
                        (r.x = r.drawingDepth * e.rankSep),
                          r.isLeaf
                            ? ((r.y = 0),
                              n &&
                                ((r.y = n.y + n.height + e.nodeSep),
                                r.originNode.parent !== n.originNode.parent && (r.y += e.subTreeSep)),
                              (n = r))
                            : (r.children.forEach(function(e) {
                                t(e);
                              }),
                              (r.y = (r.leftChild.y + r.rightChild.y) / 2));
                      })(o),
                      (function t(e, n, r) {
                        r ? ((n.x = e.x), (n.y = e.y)) : ((n.x = e.y), (n.y = e.x)),
                          e.children.forEach(function(e, i) {
                            t(e, n.children[i], r);
                          });
                      })(o, t, e.isHorizontal),
                      t
                    );
                  };
                },
                function(t, e, n) {
                  var r = n(1),
                    i = n(12),
                    a = n(4),
                    o = n(0),
                    s = ['LR', 'RL', 'H'],
                    c = s[0],
                    u = (function(t) {
                      function e() {
                        return t.apply(this, arguments) || this;
                      }
                      return (
                        (function(t, e) {
                          (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
                        })(e, t),
                        (e.prototype.execute = function() {
                          var t = this.options,
                            e = this.rootNode;
                          t.isHorizontal = !0;
                          var n = t.indent,
                            r = t.direction || c;
                          if (r && -1 === s.indexOf(r)) throw new TypeError('Invalid direction: ' + r);
                          if (r === s[0]) i(e, n);
                          else if (r === s[1]) i(e, n), e.right2left();
                          else if (r === s[2]) {
                            var o = a(e, t),
                              u = o.left,
                              l = o.right;
                            i(u, n), u.right2left(), i(l, n);
                            var h = u.getBoundingBox();
                            l.translate(h.width, 0), (e.x = l.x - e.width / 2);
                          }
                          return e;
                        }),
                        e
                      );
                    })(r),
                    l = {};
                  t.exports = function(t, e) {
                    return (e = o.assign({}, l, e)), new u(t, e).execute();
                  };
                },
                function(t, e) {
                  t.exports = function(t, e) {
                    void 0 === e && (e = 20);
                    var n = null;
                    t.eachNode(function(t) {
                      !(function(t, e, n) {
                        (t.x += n * t.depth), (t.y = e ? e.y + e.height : 0);
                      })(t, n, e),
                        (n = t);
                    });
                  };
                },
                function(t, e, n) {
                  var r = n(1),
                    i = n(14),
                    a = n(2),
                    o = n(0),
                    s = (function(t) {
                      function e() {
                        return t.apply(this, arguments) || this;
                      }
                      return (
                        (function(t, e) {
                          (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
                        })(e, t),
                        (e.prototype.execute = function() {
                          return a(this.rootNode, this.options, i);
                        }),
                        e
                      );
                    })(r),
                    c = {};
                  t.exports = function(t, e) {
                    return (e = o.assign({}, c, e)), new s(t, e).execute();
                  };
                },
                function(t, e, n) {
                  var r = n(0),
                    i = {
                      getSubTreeSep: function() {
                        return 0;
                      },
                    };
                  t.exports = function(t, e) {
                    void 0 === e && (e = {}),
                      (e = r.assign({}, i, e)),
                      (t.parent = { x: 0, width: 0, height: 0, y: 0 }),
                      t.BFTraverse(function(t) {
                        t.x = t.parent.x + t.parent.width;
                      }),
                      (t.parent = null),
                      (function t(e, n) {
                        var r = 0;
                        return (
                          e.children.length
                            ? e.children.forEach(function(e) {
                                r += t(e, n);
                              })
                            : (r = e.height),
                          (e._subTreeSep = n.getSubTreeSep(e.data)),
                          (e.totalHeight = Math.max(e.height, r) + 2 * e._subTreeSep),
                          e.totalHeight
                        );
                      })(t, e),
                      (t.startY = 0),
                      (t.y = t.totalHeight / 2 - t.height / 2),
                      t.eachNode(function(t) {
                        var e = t.children,
                          n = e.length;
                        if (n) {
                          var r = e[0];
                          if (((r.startY = t.startY + t._subTreeSep), 1 === n)) r.y = t.y + t.height / 2 - r.height / 2;
                          else {
                            r.y = r.startY + r.totalHeight / 2 - r.height / 2;
                            for (var i = 1; i < n; i++) {
                              var a = e[i];
                              (a.startY = e[i - 1].startY + e[i - 1].totalHeight),
                                (a.y = a.startY + a.totalHeight / 2 - a.height / 2);
                            }
                          }
                        }
                      }),
                      (function t(e) {
                        var n = e.children,
                          r = n.length;
                        if (r) {
                          n.forEach(function(e) {
                            t(e);
                          });
                          var i = n[0],
                            a = n[r - 1],
                            o = a.y - i.y + a.height,
                            s = 0;
                          if (
                            (n.forEach(function(t) {
                              s += t.totalHeight;
                            }),
                            o > e.height)
                          )
                            e.y = i.y + o / 2 - e.height / 2;
                          else if (1 !== n.length || e.height > s) {
                            var c = e.y + (e.height - o) / 2 - i.y;
                            n.forEach(function(t) {
                              t.translate(0, c);
                            });
                          } else e.y = (i.y + i.height / 2 + a.y + a.height / 2) / 2 - e.height / 2;
                        }
                      })(t);
                  };
                },
              ]));
          },
          function(t, e, n) {
            var r = n(78),
              i = n(1);
            function a(t, e) {
              var n = -1;
              return (
                i.each(t, function(t, r) {
                  if (e.id === t.id) return (n = r), !1;
                }),
                n
              );
            }
            var o = (function(t) {
              function e(e) {
                var n;
                return (n = t.call(this, e) || this).set('removeList', []), n.set('layoutMethod', n._getLayout()), n;
              }
              !(function(t, e) {
                (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
              })(e, t);
              var n = e.prototype;
              return (
                (n.getDefaultCfg = function() {
                  var e = t.prototype.getDefaultCfg.call(this);
                  return (e.animate = !0), e;
                }),
                (n.render = function() {
                  if (!this.get('data')) throw new Error('data must be defined first');
                  this.clear(),
                    this.emit('beforerender'),
                    this.refreshLayout(this.get('fitView')),
                    this.emit('afterrender');
                }),
                (n.addChild = function(t, e) {
                  i.isString(e) || (e = e.get('id'));
                  var n = this.findDataById(e);
                  n.children || (n.children = []), n.children.push(t), this.changeData();
                }),
                (n._addChild = function(t, e, n) {
                  var r = this,
                    a = t.data;
                  (a.x = t.x), (a.y = t.y);
                  var o = r.addItem('node', a);
                  if (e) {
                    if ((o.set('parent', e), n)) {
                      var s = e.get('origin');
                      if (s) o.set('origin', s);
                      else {
                        var c = e.getModel();
                        o.set('origin', { x: c.x, y: c.y });
                      }
                    }
                    var u = e.get('children');
                    u ? u.push(o) : e.set('children', [o]),
                      r.addItem('edge', { source: e, target: o, id: e.get('id') + ':' + o.get('id') });
                  }
                  return (
                    i.each(t.children, function(t) {
                      r._addChild(t, o, n);
                    }),
                    o
                  );
                }),
                (n.changeData = function(t) {
                  t ? (this.data(t), this.render()) : this.refreshLayout(this.get('fitView'));
                }),
                (n.updateChild = function(t, e) {
                  if (e) {
                    var n = this.findById(e).getModel(),
                      r = this.findById(t.id);
                    if (r) {
                      var i = a(n.children, t);
                      e.children[i] = t;
                    } else n.children ? n.children.push(t) : (n.children = [r]);
                    this.changeData();
                  } else this.changeData(t);
                }),
                (n._updateChild = function(t, e, n) {
                  var r = this,
                    o = r.findById(t.id);
                  if (o) {
                    i.each(t.children, function(t) {
                      r._updateChild(t, o, n);
                    });
                    var s = o.get('children');
                    if (s && s.length > 0)
                      for (var c, u = s.length - 1; u >= 0; u--)
                        (c = s[u].getModel()),
                          -1 === a(t.children, c) && (r._removeChild(c.id, { x: t.x, y: t.y }, n), s.splice(u, 1));
                    var l = o.getModel();
                    n && o.set('origin', { x: l.x, y: l.y }),
                      o.set('model', t.data),
                      o.updatePosition({ x: t.x, y: t.y });
                  } else r._addChild(t, e, n);
                }),
                (n.removeChild = function(t) {
                  var e = this.findById(t);
                  if (e) {
                    var n = e.get('parent');
                    if (n && !n.destroyed) {
                      var r = this.findDataById(n.get('id')).children,
                        i = a(r, e.getModel());
                      r.splice(i, 1);
                    }
                    this.changeData();
                  }
                }),
                (n._removeChild = function(t, e, n) {
                  var r = this,
                    a = r.findById(t);
                  if (a)
                    if (
                      (i.each(a.get('children'), function(t) {
                        r._removeChild(t.getModel().id, e, n);
                      }),
                      n)
                    ) {
                      var o = a.getModel();
                      a.set('to', e), a.set('origin', { x: o.x, y: o.y }), r.get('removeList').push(a);
                    } else r.removeItem(a);
                }),
                (n.save = function() {
                  return this.get('data');
                }),
                (n.findDataById = function(t, e) {
                  var n = this;
                  if ((e || (e = n.get('data')), t === e.id)) return e;
                  var r = null;
                  return (
                    i.each(e.children, function(e) {
                      return e.id === t ? ((r = e), !1) : !(r = n.findDataById(t, e)) && void 0;
                    }),
                    r
                  );
                }),
                (n.changeLayout = function(t) {
                  t
                    ? (this.set('layout', t), this.set('layoutMethod', this._getLayout()), this.refreshLayout())
                    : console.warn('layout cannot be null');
                }),
                (n.refreshLayout = function(t) {
                  var e = this.get('data'),
                    n = this.get('layoutMethod')(e),
                    r = this.get('animate'),
                    i = this.get('autoPaint');
                  this.emit('beforerefreshlayout', { data: e, layoutData: n }),
                    this.setAutoPaint(!1),
                    this._updateChild(n, null, r),
                    t && this.get('viewController')._fitView(),
                    r ? this.layoutAnimate(n, null) : (this.refresh(), this.paint()),
                    this.setAutoPaint(i),
                    this.emit('afterrefreshlayout', { data: e, layoutData: n });
                }),
                (n.layoutAnimate = function(t, e) {
                  var n = this,
                    r = this;
                  this.setAutoPaint(!1);
                  var a = this.get('animateCfg');
                  r.emit('beforeanimate', { data: t }),
                    r.getEdges().forEach(function(t) {
                      var e = t.get('model');
                      e.sourceAnchor || (e.sourceAnchor = t.get('sourceAnchorIndex'));
                    }),
                    this.get('canvas').animate(
                      {
                        onFrame: function(n) {
                          i.traverseTree(t, function(a) {
                            var o = r.findById(a.id),
                              s = o.get('origin'),
                              c = o.get('model');
                            if ((s || ((s = { x: c.x, y: c.y }), o.set('origin', s)), e)) {
                              var u = e(o, n, s, t);
                              o.set('model', i.mix(c, u));
                            } else (c.x = s.x + (a.x - s.x) * n), (c.y = s.y + (a.y - s.y) * n);
                          }),
                            i.each(r.get('removeList'), function(t) {
                              var e = t.getModel(),
                                r = t.get('origin'),
                                i = t.get('to');
                              (e.x = r.x + (i.x - r.x) * n), (e.y = r.y + (i.y - r.y) * n);
                            }),
                            r.refreshPositions();
                        },
                      },
                      a.duration,
                      a.ease,
                      function() {
                        i.each(r.getNodes(), function(t) {
                          t.set('origin', null);
                        }),
                          i.each(r.get('removeList'), function(t) {
                            r.removeItem(t);
                          }),
                          r.set('removeList', []),
                          a.callback && a.callback(),
                          r.paint(),
                          n.setAutoPaint(!0),
                          r.emit('afteranimate', { data: t });
                      },
                      a.delay,
                    );
                }),
                (n.stopLayoutAnimate = function() {
                  this.get('canvas').stopAnimate(),
                    this.emit('layoutanimateend', { data: this.get('data') }),
                    (this.layoutAnimating = !1);
                }),
                (n.isLayoutAnimating = function() {
                  return this.layoutAnimating;
                }),
                (n._getLayout = function() {
                  var t = this.get('layout');
                  return t
                    ? 'function' == typeof t
                      ? t
                      : (t.type || (t.type = 'dendrogram'),
                        t.direction || (t.direction = 'TB'),
                        t.radial
                          ? function(e) {
                              var n = r[t.type](e, t);
                              return i.radialLayout(n), n;
                            }
                          : function(e) {
                              return r[t.type](e, t);
                            })
                    : null;
                }),
                e
              );
            })(n(42));
            t.exports = o;
          },
          function(t, e, n) {
            var r = n(1),
              i = null,
              a = (function() {
                function t(t) {
                  (this.graph = t), (this.cachedStates = { enabled: {}, disabled: {} });
                }
                var e = t.prototype;
                return (
                  (e.updateState = function(t, e, n) {
                    if (!t.destroyed) {
                      var r = this,
                        a = r.cachedStates,
                        o = a.enabled,
                        s = a.disabled;
                      n
                        ? (r._checkCache(t, e, s), r._cacheState(t, e, o))
                        : (r._checkCache(t, e, o), r._cacheState(t, e, s)),
                        i && clearTimeout(i),
                        (i = setTimeout(function() {
                          (i = null), r.updateGraphStates();
                        }, 16));
                    }
                  }),
                  (e._checkCache = function(t, e, n) {
                    if (n[e]) {
                      var r = n[e].indexOf(t);
                      r >= 0 && n[e].splice(r, 1);
                    }
                  }),
                  (e._cacheState = function(t, e, n) {
                    n[e] || (n[e] = []), n[e].push(t);
                  }),
                  (e.updateGraphStates = function() {
                    var t = this.graph.get('states'),
                      e = this.cachedStates;
                    r.each(e.disabled, function(e, n) {
                      t[n] &&
                        (t[n] = t[n].filter(function(t) {
                          return e.indexOf(t) < 0 && !e.destroyed;
                        }));
                    }),
                      r.each(e.enabled, function(e, n) {
                        if (t[n]) {
                          var r = {};
                          t[n].forEach(function(t) {
                            t.destroyed || (r[t.get('id')] = !0);
                          }),
                            e.forEach(function(e) {
                              var i = e.get('id');
                              r[i] || e.destroyed || ((r[i] = !0), t[n].push(e));
                            });
                        } else t[n] = e;
                      }),
                      this.graph.emit('graphstatechange', { states: t }),
                      (this.cachedStates = { enabled: {}, disabled: {} });
                  }),
                  (e.destroy = function() {
                    (this.graph = null),
                      (this.cachedStates = null),
                      i && clearTimeout(i),
                      (i = null),
                      (this.destroyed = !0);
                  }),
                  t
                );
              })();
            t.exports = a;
          },
          function(t, e, n) {
            var r = n(1),
              i = { source: 'start', target: 'end' },
              a = (function(t) {
                function e() {
                  return t.apply(this, arguments) || this;
                }
                !(function(t, e) {
                  (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
                })(e, t);
                var n = e.prototype;
                return (
                  (n.getDefaultCfg = function() {
                    return {
                      type: 'edge',
                      sourceNode: null,
                      targetNode: null,
                      startPoint: null,
                      endPoint: null,
                      linkCenter: !1,
                    };
                  }),
                  (n.init = function() {
                    t.prototype.init.call(this), this.setSource(this.get('source')), this.setTarget(this.get('target'));
                  }),
                  (n.setSource = function(t) {
                    this._setEnd('source', t), this.set('source', t);
                  }),
                  (n.setTarget = function(t) {
                    this._setEnd('target', t), this.set('target', t);
                  }),
                  (n.getSource = function() {
                    return this.get('source');
                  }),
                  (n.getTarget = function() {
                    return this.get('target');
                  }),
                  (n._setEnd = function(t, e) {
                    var n = i[t] + 'Point',
                      a = t + 'Node',
                      o = this.get(a);
                    o && o.removeEdge(this),
                      r.isPlainObject(e)
                        ? (this.set(n, e), this.set(a, null))
                        : (e.addEdge(this), this.set(a, e), this.set(n, null));
                  }),
                  (n._getLinkPoint = function(t, e, n) {
                    var a = i[t] + 'Point',
                      o = t + 'Node',
                      s = this.get(a);
                    if (!s) {
                      var c = this.get(o),
                        u = t + 'Anchor',
                        l = this._getPrePoint(t, n),
                        h = e[u];
                      r.isNil(h) || (s = c.getLinkPointByAnchor(h)),
                        (s = s || c.getLinkPoint(l)),
                        r.isNil(s.index) || this.set(t + 'AnchorIndex', s.index);
                    }
                    return s;
                  }),
                  (n._getPrePoint = function(t, e) {
                    if (e && e.length) return e['source' === t ? 0 : e.length - 1];
                    var n = 'source' === t ? 'target' : 'source';
                    return this._getEndPoint(n);
                  }),
                  (n._getControlPointsByCenter = function(t) {
                    var e = this._getEndPoint('source'),
                      n = this._getEndPoint('target');
                    return this.get('shapeFactory').getControlPoints(t.shape, { startPoint: e, endPoint: n });
                  }),
                  (n._getEndPoint = function(t) {
                    var e = t + 'Node',
                      n = i[t] + 'Point',
                      r = this.get(e);
                    return r ? r.get('model') : this.get(n);
                  }),
                  (n._getEndCenter = function(t) {
                    var e = t + 'Node',
                      n = i[t] + 'Point',
                      r = this.get(e);
                    if (r) {
                      var a = r.getBBox();
                      return { x: a.centerX, y: a.centerY };
                    }
                    return this.get(n);
                  }),
                  (n.getShapeCfg = function(e) {
                    var n = this.get('linkCenter'),
                      r = t.prototype.getShapeCfg.call(this, e);
                    if (n) (r.startPoint = this._getEndCenter('source')), (r.endPoint = this._getEndCenter('target'));
                    else {
                      var i = r.controlPoints || this._getControlPointsByCenter(r);
                      (r.startPoint = this._getLinkPoint('source', e, i)),
                        (r.endPoint = this._getLinkPoint('target', e, i));
                    }
                    return (r.sourceNode = this.get('sourceNode')), (r.targetNode = this.get('targetNode')), r;
                  }),
                  (n.getModel = function() {
                    var t = this.get('model'),
                      e = r.mix({}, t),
                      n = this.get('sourceNode'),
                      i = this.get('targetNode');
                    return (
                      n ? ((e.source = n.get('id')), delete e.sourceNode) : (e.source = this.get('startPoint')),
                      i ? ((e.target = i.get('id')), delete e.targetNode) : (e.target = this.get('endPoint')),
                      e
                    );
                  }),
                  (n.destroy = function() {
                    var e = this.get('sourceNode'),
                      n = this.get('targetNode');
                    e && !e.destroyed && e.removeEdge(this),
                      n && !n.destroyed && n.removeEdge(this),
                      t.prototype.destroy.call(this);
                  }),
                  e
                );
              })(n(41));
            t.exports = a;
          },
          function(t, e, n) {
            var r = n(1);
            function i(t, e) {
              return (e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y);
            }
            var a = (function(t) {
              function e() {
                return t.apply(this, arguments) || this;
              }
              !(function(t, e) {
                (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
              })(e, t);
              var n = e.prototype;
              return (
                (n.getDefaultCfg = function() {
                  return { type: 'node', anchors: [], edges: [], status: [] };
                }),
                (n.getEdges = function() {
                  return this.get('edges');
                }),
                (n.getInEdges = function() {
                  var t = this;
                  return this.get('edges').filter(function(e) {
                    return e.get('target') === t;
                  });
                }),
                (n.getOutEdges = function() {
                  var t = this;
                  return this.get('edges').filter(function(e) {
                    return e.get('source') === t;
                  });
                }),
                (n.getLinkPointByAnchor = function(t) {
                  return this.getAnchorPoints()[t];
                }),
                (n.getLinkPoint = function(t) {
                  var e,
                    n = this.get('keyShape').get('type'),
                    a = this.getBBox(),
                    o = a.centerX,
                    s = a.centerY,
                    c = this.getAnchorPoints();
                  switch (n) {
                    case 'circle':
                      e = r.getCircleIntersectByPoint({ x: o, y: s, r: a.width / 2 }, t);
                      break;
                    case 'ellipse':
                      e = r.getEllispeIntersectByPoint({ x: o, y: s, rx: a.width / 2, ry: a.height / 2 }, t);
                      break;
                    default:
                      e = r.getRectIntersectByPoint(a, t);
                  }
                  var u = e;
                  return (
                    c.length &&
                      (u || (u = t),
                      (u = (function(t, e) {
                        for (var n = 0, r = t[0], a = i(t[0], e), o = 0; o < t.length; o++) {
                          var s = t[o],
                            c = i(s, e);
                          c < a && ((r = s), (a = c), (n = o));
                        }
                        return (r.anchorIndex = n), r;
                      })(c, u))),
                    u || (u = { x: o, y: s }),
                    u
                  );
                }),
                (n.addEdge = function(t) {
                  this.get('edges').push(t);
                }),
                (n.removeEdge = function(t) {
                  var e = this.getEdges(),
                    n = e.indexOf(t);
                  n > -1 && e.splice(n, 1);
                }),
                (n.updatePosition = function(e) {
                  t.prototype.updatePosition.call(this, e), this.set('anchorPointsCache', null);
                }),
                (n.afterUpdate = function() {
                  this.set('anchorPointsCache', null);
                }),
                (n.getAnchorPoints = function() {
                  var t = this.get('anchorPointsCache');
                  if (!t) {
                    t = [];
                    var e = this.get('shapeFactory'),
                      n = this.getBBox(),
                      i = this.get('model'),
                      a = this.getShapeCfg(i),
                      o = e.getAnchorPoints(i.shape, a) || [];
                    r.each(o, function(e, i) {
                      var a = r.mix({ x: n.minX + e[0] * n.width, y: n.minY + e[1] * n.height }, e[2], { index: i });
                      t.push(a);
                    }),
                      this.set('anchorPointsCache', t);
                  }
                  return t;
                }),
                e
              );
            })(n(41));
            t.exports = a;
          },
          function(t, e, n) {
            t.exports = { Node: n(82), Edge: n(81) };
          },
          function(t, e, n) {
            var r = n(1),
              i = n(83),
              a = Object.hasOwnProperty,
              o = (function() {
                function t(t) {
                  this.graph = t;
                }
                var e = t.prototype;
                return (
                  (e.addItem = function(t, e) {
                    var n,
                      o = this.graph,
                      s = o.get(t + 'Group') || o.get('group'),
                      c = r.upperFirst(t),
                      u = o.get(t + 'Style'),
                      l = o.get('default' + c);
                    if (
                      (l &&
                        r.each(l, function(t, n) {
                          a.call(e, n) || (r.isObject(t) ? (e[n] = r.clone(t)) : (e[n] = l[n]));
                        }),
                      'edge' === t)
                    ) {
                      var h = e.source,
                        f = e.target;
                      if (
                        (h && r.isString(h) && (h = o.findById(h)), f && r.isString(f) && (f = o.findById(f)), !h || !f)
                      )
                        return void console.warn('The source or target node of edge ' + e.id + ' does not exist!');
                      n = new i[c]({
                        model: e,
                        source: h,
                        target: f,
                        styles: u,
                        linkCenter: o.get('linkCenter'),
                        group: s.addGroup(),
                      });
                    } else n = new i[c]({ model: e, styles: u, group: s.addGroup() });
                    return (
                      o.get(t + 's').push(n),
                      (o.get('itemMap')[n.get('id')] = n),
                      o.autoPaint(),
                      o.emit('aftereadditem', { type: t, model: e }),
                      n
                    );
                  }),
                  (e.updateItem = function(t, e) {
                    var n = this.graph;
                    if ((r.isString(t) && (t = n.findById(t)), t && !t.destroyed)) {
                      if ((n.emit('beforeitemupdate', { item: t, cfg: e }), 'edge' === t.getType())) {
                        if (e.source) {
                          var i = e.source;
                          r.isString(i) && (i = n.findById(i)), t.setSource(i);
                        }
                        if (e.target) {
                          var a = e.target;
                          r.isString(a) && (a = n.findById(a)), t.setTarget(a);
                        }
                      }
                      if ((t.update(e), 'node' === t.getType())) {
                        var o = n.get('autoPaint');
                        n.setAutoPaint(!1),
                          r.each(t.getEdges(), function(t) {
                            n.refreshItem(t);
                          }),
                          n.setAutoPaint(o);
                      }
                      n.autoPaint(), n.emit('afteritemupdate', { item: t, cfg: e });
                    }
                  }),
                  (e.removeItem = function(t) {
                    var e = this.graph;
                    if ((r.isString(t) && (t = e.findById(t)), t && !t.destroyed)) {
                      e.emit('beforeremoveitem', { item: t });
                      var n = t.getType(),
                        i = e.get(t.getType() + 's'),
                        a = i.indexOf(t);
                      if ((i.splice(a, 1), delete e.get('itemMap')[t.get('id')], 'node' === n))
                        for (var o = t.getEdges(), s = o.length; s >= 0; s--) e.removeItem(o[s]);
                      t.destroy(), e.autoPaint(), e.emit('afterremoveitem', { item: t });
                    }
                  }),
                  (e.setItemState = function(t, e, n) {
                    var r = this.graph;
                    t.hasState(e) !== n &&
                      (r.emit('beforeitemstatechange', { item: t, state: e, enabled: n }),
                      t.setState(e, n),
                      r.autoPaint(),
                      r.emit('afteritemstatechange', { item: t, state: e, enabled: n }));
                  }),
                  (e.clearItemStates = function(t, e) {
                    var n = this.graph;
                    r.isString(t) && (t = n.findById(t)),
                      n.emit('beforeitemstatesclear', { item: t, states: e }),
                      t.clearStates(e),
                      n.autoPaint(),
                      n.emit('afteritemstatesclear', { item: t, states: e });
                  }),
                  (e.refreshItem = function(t) {
                    var e = this.graph;
                    r.isString(t) && (t = e.findById(t)),
                      e.emit('beforeitemrefresh', { item: t }),
                      t.refresh(),
                      e.autoPaint(),
                      e.emit('afteritemrefresh', { item: t });
                  }),
                  (e.changeItemVisibility = function(t, e) {
                    var n = this,
                      i = n.graph;
                    if (
                      (r.isString(t) && (t = i.findById(t)),
                      i.emit('beforeitemvisibilitychange', { item: t, visible: e }),
                      t.changeVisibility(e),
                      'node' === t.getType())
                    ) {
                      var a = i.get('autoPaint');
                      i.setAutoPaint(!1),
                        r.each(t.getEdges(), function(t) {
                          (!e || (t.get('source').isVisible() && t.get('target').isVisible())) &&
                            n.changeItemVisibility(t, e);
                        }),
                        i.setAutoPaint(a);
                    }
                    i.autoPaint(), i.emit('afteritemvisibilitychange', { item: t, visible: e });
                  }),
                  (e.destroy = function() {
                    (this.graph = null), (this.destroyed = !0);
                  }),
                  t
                );
              })();
            t.exports = o;
          },
          function(t, e, n) {
            var r = n(1),
              i = n(44);
            function a(t, e) {
              return (
                r.each(e, function(e) {
                  t.indexOf(e) < 0 && (r.isString(e) && (e = { type: e }), t.push(e));
                }),
                t
              );
            }
            function o(t, e) {
              var n = [];
              return (
                t.forEach(function(t) {
                  e.indexOf(t.type) < 0 && n.push(t);
                }),
                n
              );
            }
            var s = (function() {
              function t(t) {
                (this.graph = t),
                  (this.modes = t.get('modes') || { default: [] }),
                  this._formatModes(),
                  (this.mode = t.get('defaultMode') || 'default'),
                  (this.currentBehaves = []),
                  this.setMode(this.mode);
              }
              var e = t.prototype;
              return (
                (e._formatModes = function() {
                  var t = this.modes;
                  r.each(t, function(t) {
                    r.each(t, function(e, n) {
                      r.isString(e) && (t[n] = { type: e });
                    });
                  });
                }),
                (e.setMode = function(t) {
                  var e = this.modes,
                    n = this.graph;
                  if (e[t])
                    return (
                      n.emit('beforemodechange', { mode: t }),
                      r.each(this.currentBehaves, function(t) {
                        t.unbind(n);
                      }),
                      this._setBehaviors(t),
                      n.emit('aftermodechange', { mode: t }),
                      (this.mode = t),
                      this
                    );
                }),
                (e.manipulateBehaviors = function(t, e, n) {
                  var i = this;
                  return (
                    r.isArray(t) || (t = [t]),
                    r.isArray(e)
                      ? (r.each(e, function(e) {
                          i.modes[e]
                            ? (i.modes[e] = n ? a(i.modes[e], t) : o(i.modes[e], t))
                            : n && (i.modes[e] = [].concat(t));
                        }),
                        this)
                      : (e || (e = this.mode),
                        (i.modes[e] = n ? a(i.modes[e], t) : o(i.modes[e], t)),
                        i.setMode(this.mode),
                        this)
                  );
                }),
                (e._setBehaviors = function(t) {
                  var e,
                    n = this.graph,
                    a = this.modes[t],
                    o = [];
                  r.each(a, function(t) {
                    i.getBehavior(t.type) && ((e = new (i.getBehavior(t.type))(t)) && e.bind(n), o.push(e));
                  }),
                    (this.currentBehaves = o);
                }),
                (e.destroy = function() {
                  (this.graph = null), (this.modes = null), (this.currentBehaves = null), (this.destroyed = !0);
                }),
                t
              );
            })();
            t.exports = s;
          },
          function(t, e, n) {
            var r = n(1),
              i = [
                'click',
                'mousedown',
                'mouseup',
                'dblclick',
                'contextmenu',
                'mouseenter',
                'mouseout',
                'mouseover',
                'mousemove',
                'mouseleave',
                'dragstart',
                'dragend',
                'drag',
                'dragenter',
                'dragleave',
                'drop',
              ],
              a = [1, 0, 0, 0, 1, 0, 0, 0, 1],
              o = (function() {
                function t(t) {
                  (this.graph = t), (this.extendEvents = []), this._initEvents();
                }
                var e = t.prototype;
                return (
                  (e._initEvents = function() {
                    var t = this.graph.get('canvas'),
                      e = t.get('el'),
                      n = this.extendEvents,
                      a = r.wrapBehavior(this, '_onCanvasEvents'),
                      o = r.wrapBehavior(this, '_onExtendEvents'),
                      s = r.wrapBehavior(this, '_onWheelEvent');
                    r.each(i, function(e) {
                      t.on(e, a);
                    }),
                      (this.canvasHandler = a),
                      n.push(r.addEventListener(e, 'DOMMouseScroll', s)),
                      n.push(r.addEventListener(e, 'mousewheel', s)),
                      window && n.push(r.addEventListener(window, 'keydown', o)),
                      window && n.push(r.addEventListener(window, 'keyup', o));
                  }),
                  (e._onCanvasEvents = function(t) {
                    var e = this.graph,
                      n = e.get('canvas'),
                      r = n.get('pixelRatio'),
                      i = t.target,
                      o = t.type;
                    (t.canvasX = t.x / r), (t.canvasY = t.y / r);
                    var s = { x: t.canvasX, y: t.canvasY };
                    if (
                      ((function(t) {
                        for (var e = 0; e < 9; e++) if (t[e] !== a[e]) return !0;
                        return !1;
                      })(e.get('group').getMatrix()) && (s = e.getPointByCanvas(t.canvasX, t.canvasY)),
                      (t.x = s.x),
                      (t.y = s.y),
                      (t.currentTarget = e),
                      i === n)
                    )
                      return (
                        'mousemove' === o && this._handleMouseMove(t, 'canvas'),
                        (t.target = n),
                        (t.item = null),
                        e.emit(o, t),
                        void e.emit('canvas:' + o, t)
                      );
                    var c = (function(t) {
                      for (; t && !t.get('item'); ) t = t.get('parent');
                      return t;
                    })(i);
                    if (c) {
                      var u = c.get('item');
                      if (!u.destroyed) {
                        var l = u.getType();
                        (t.target = i),
                          (t.item = u),
                          e.emit(o, t),
                          'mouseenter' !== o &&
                            'mouseleave' !== o &&
                            'dragenter' !== o &&
                            'dragleave' !== o &&
                            (e.emit(l + ':' + o, t),
                            'dragstart' === o && (this.dragging = !0),
                            'dragend' === o && (this.dragging = !1),
                            'mousemove' === o && this._handleMouseMove(t, l));
                      }
                    } else e.emit(o, t);
                  }),
                  (e._onExtendEvents = function(t) {
                    this.graph.emit(t.type, t);
                  }),
                  (e._onWheelEvent = function(t) {
                    r.isNil(t.wheelDelta) && (t.wheelDelta = -t.detail), this.graph.emit('wheel', t);
                  }),
                  (e._handleMouseMove = function(t, e) {
                    var n = this.graph.get('canvas'),
                      i = t.target === n ? null : t.item,
                      a = this.preItem;
                    (t = r.cloneEvent(t)),
                      a &&
                        a !== i &&
                        !a.destroyed &&
                        ((t.item = a),
                        this._emitCustomEvent(a.getType(), 'mouseleave', t),
                        this.dragging && this._emitCustomEvent(a.getType(), 'dragleave', t)),
                      i &&
                        a !== i &&
                        ((t.item = i),
                        this._emitCustomEvent(e, 'mouseenter', t),
                        this.dragging && this._emitCustomEvent(e, 'dragenter', t)),
                      (this.preItem = i);
                  }),
                  (e._emitCustomEvent = function(t, e, n) {
                    (n.type = e), this.graph.emit(t + ':' + e, n);
                  }),
                  (e.destroy = function() {
                    var t = this.graph,
                      e = this.canvasHandler,
                      n = t.get('canvas');
                    r.each(i, function(t) {
                      n.off(t, e);
                    }),
                      r.each(this.extendEvents, function(t) {
                        t.remove();
                      });
                  }),
                  t
                );
              })();
            t.exports = o;
          },
          function(t, e, n) {
            var r = n(1),
              i = (function() {
                function t(t) {
                  this.graph = t;
                }
                var e = t.prototype;
                return (
                  (e.getFormatPadding = function() {
                    return r.formatPadding(this.graph.get('fitViewPadding'));
                  }),
                  (e._fitView = function() {
                    var t = this.getFormatPadding(),
                      e = this.graph,
                      n = e.get('group'),
                      r = e.get('width'),
                      i = e.get('height');
                    n.resetMatrix();
                    var a = n.getBBox(),
                      o = this._getViewCenter(),
                      s = a.x + a.width / 2,
                      c = a.y + a.height / 2;
                    e.translate(o.x - s, o.y - c);
                    var u = (r - t[1] - t[3]) / a.width,
                      l = (i - t[0] - t[2]) / a.height,
                      h = u;
                    u > l && (h = l), e.zoom(h, o);
                  }),
                  (e.focusPoint = function(t) {
                    var e = this._getViewCenter(),
                      n = this.getPointByCanvas(e.x, e.y),
                      r = this.graph.get('group').getMatrix();
                    this.graph.translate((n.x - t.x) * r[0], (n.y - t.y) * r[4]);
                  }),
                  (e.getPointByClient = function(t, e) {
                    var n = this.graph.get('canvas'),
                      r = n.get('pixelRatio'),
                      i = n.getPointByClient(t, e);
                    return this.getPointByCanvas(i.x / r, i.y / r);
                  }),
                  (e.getClientByPoint = function(t, e) {
                    var n = this.graph.get('canvas'),
                      r = this.getCanvasByPoint(t, e),
                      i = n.get('pixelRatio'),
                      a = n.getClientByPoint(r.x * i, r.y * i);
                    return { x: a.clientX, y: a.clientY };
                  }),
                  (e.getPointByCanvas = function(t, e) {
                    var n = this.graph.get('group').getMatrix();
                    return r.invertMatrix({ x: t, y: e }, n);
                  }),
                  (e.getCanvasByPoint = function(t, e) {
                    var n = this.graph.get('group').getMatrix();
                    return r.applyMatrix({ x: t, y: e }, n);
                  }),
                  (e.focus = function(t) {
                    if ((r.isString(t) && (t = this.graph.findById[t]), t)) {
                      var e = t.get('group').getMatrix();
                      this.focusPoint({ x: e[6], y: e[7] });
                    }
                  }),
                  (e.changeSize = function(t, e) {
                    if (!r.isNumber(t) || !r.isNumber(e)) throw Error('invalid canvas width & height');
                    this.graph.set({ width: t, height: e }), this.graph.get('canvas').changeSize(t, e);
                  }),
                  (e._getViewCenter = function() {
                    var t = this.getFormatPadding(),
                      e = this.graph,
                      n = this.graph.get('width'),
                      r = e.get('height');
                    return { x: (n - t[2] - t[3]) / 2 + t[3], y: (r - t[0] - t[2]) / 2 + t[0] };
                  }),
                  (e.destroy = function() {
                    (this.graph = null), (this.destroyed = !0);
                  }),
                  t
                );
              })();
            t.exports = i;
          },
          function(t, e, n) {
            t.exports = { View: n(87), Event: n(86), Mode: n(85), Item: n(84), State: n(80) };
          },
          function(t, e) {
            var n = Math.min,
              r = Math.max,
              i = Math.abs,
              a = Math.hypot;
            t.exports = {
              getDefaultCfg: function() {
                return {
                  brushStyle: { fill: '#EEF6FF', fillOpacity: 0.4, stroke: '#DDEEFE', lineWidth: 1 },
                  onSelect: function() {},
                  onDeselect: function() {},
                  selectedState: 'selected',
                };
              },
              getEvents: function() {
                return {
                  mousedown: 'onMouseDown',
                  mousemove: 'onMouseMove',
                  mouseup: 'onMouseUp',
                  'canvas:click': 'clearStates',
                };
              },
              onMouseDown: function(t) {
                this.selectedNodes && 0 !== this.selectedNodes.length && this.clearStates();
                var e = this.brush;
                e || (e = this._createBrush()),
                  (this.originPoint = { x: t.canvasX, y: t.canvasY }),
                  e.attr({ width: 0, height: 0 }),
                  e.show(),
                  (this.dragging = !0);
              },
              onMouseMove: function(t) {
                var e = this.originPoint;
                !this.dragging ||
                  a(e.x - t.canvasX, e.y - t.canvasY) < 10 ||
                  (this._updateBrush(t), this.graph.paint());
              },
              onMouseUp: function(t) {
                var e = this.graph,
                  n = e.get('autoPaint');
                e.setAutoPaint(!1),
                  this.brush.hide(),
                  this._getSelectedNodes(t),
                  (this.dragging = !1),
                  this.graph.paint(),
                  e.setAutoPaint(n);
              },
              clearStates: function() {
                var t = this.graph,
                  e = t.get('autoPaint');
                t.setAutoPaint(!1);
                var n = this.selectedState,
                  r = this.shouldUpdate,
                  i = [],
                  a = this.selectedNodes.filter(function(e) {
                    return r(e, 'deselect') ? (t.setItemState(e, n, !1), !0) : (i.push(e), !1);
                  });
                this.onDeselect && this.onDeselect(a), (this.selectedNodes = i), t.paint(), t.setAutoPaint(e);
              },
              _getSelectedNodes: function(t) {
                var e = this.graph,
                  i = this.selectedState,
                  a = this.originPoint,
                  o = { x: t.x, y: t.y },
                  s = e.getPointByCanvas(a.x, a.y),
                  c = n(o.x, s.x),
                  u = r(o.x, s.x),
                  l = n(o.y, s.y),
                  h = r(o.y, s.y),
                  f = [],
                  d = this.shouldUpdate;
                e.getNodes().forEach(function(t) {
                  var n = t.getBBox();
                  n.centerX >= c &&
                    n.centerX <= u &&
                    n.centerY >= l &&
                    n.centerY <= h &&
                    d(t, 'select') &&
                    (f.push(t), e.setItemState(t, i, !0));
                }),
                  (this.selectedNodes = f),
                  this.onSelect && this.onSelect(f);
              },
              _createBrush: function() {
                var t = this.graph.get('canvas').addShape('rect', { attrs: this.brushStyle, capture: !1 });
                return (this.brush = t), t;
              },
              _updateBrush: function(t) {
                var e = this.originPoint;
                this.brush.attr({
                  width: i(t.canvasX - e.x),
                  height: i(t.canvasY - e.y),
                  x: n(t.canvasX, e.x),
                  y: n(t.canvasY, e.y),
                });
              },
            };
          },
          function(t, e) {
            t.exports = {
              getDefaultCfg: function() {
                return {
                  trigger: 'mouseenter',
                  activeState: 'active',
                  inactiveState: 'inactive',
                  shouldUpdate: function() {
                    return !0;
                  },
                };
              },
              getEvents: function() {
                return 'mouseenter' === this.get('trigger')
                  ? { 'node:mouseenter': 'setAllItemStates', 'node:mouseleave': 'clearAllItemStates' }
                  : { 'node:click': 'setAllItemStates', 'canvas:click': 'clearAllItemStates' };
              },
              setAllItemStates: function(t) {
                var e = this.get('graph'),
                  n = t.item;
                if (((this.item = n), this.shouldUpdate(t.item, { event: t, action: 'activate' }))) {
                  var r = this.get('activeState'),
                    i = this.get('inactiveState'),
                    a = e.get('autoPaint');
                  e.setAutoPaint(!1),
                    e.getNodes().forEach(function(t) {
                      e.setItemState(t, r, !1), i && e.setItemState(t, i, !0);
                    }),
                    e.getEdges().forEach(function(t) {
                      e.setItemState(t, r, !1), i && e.setItemState(t, i, !0);
                    }),
                    i && e.setItemState(n, i, !1),
                    e.setItemState(n, r, !0),
                    e.getEdges().forEach(function(t) {
                      t.getSource() === n
                        ? (i && e.setItemState(t.getTarget(), i, !1),
                          e.setItemState(t.getTarget(), r, !0),
                          e.setItemState(t, r, !0),
                          e.setItemState(t, i, !1),
                          t.toFront())
                        : t.getTarget() === n &&
                          (i && e.setItemState(t.getSource(), i, !1),
                          e.setItemState(t.getSource(), r, !0),
                          e.setItemState(t, r, !0),
                          e.setItemState(t, i, !1),
                          t.toFront());
                    }),
                    e.paint(),
                    e.setAutoPaint(a),
                    e.emit('afteractivaterelations', { item: t.item, action: 'activate' });
                }
              },
              clearAllItemStates: function(t) {
                var e = this.get('graph');
                if (this.shouldUpdate(t.item, { event: t, action: 'deactivate' })) {
                  var n = e.get('autoPaint');
                  e.setAutoPaint(!1),
                    e.getNodes().forEach(function(t) {
                      e.clearItemStates(t);
                    }),
                    e.getEdges().forEach(function(t) {
                      e.clearItemStates(t);
                    }),
                    e.paint(),
                    e.setAutoPaint(n),
                    e.emit('afteractivaterelations', { item: t.item || this.item, action: 'deactivate' });
                }
              },
            };
          },
          function(t, e) {
            t.exports = {
              getDefaultCfg: function() {
                return { onChange: function() {} };
              },
              getEvents: function() {
                return { 'node:click': 'onNodeClick' };
              },
              onNodeClick: function(t) {
                var e = t.item,
                  n = this.graph.findDataById(e.get('id')),
                  r = n.children;
                if (r && 0 !== r.length) {
                  var i = !n.collapsed;
                  if (
                    this.shouldBegin(t, i) &&
                    ((n.collapsed = i),
                    (e.getModel().collapsed = i),
                    this.graph.emit('itemcollapsed', { item: t.item, collapsed: i }),
                    this.shouldUpdate(t, i))
                  ) {
                    try {
                      this.onChange(e, i);
                    } catch (t) {
                      console.warn(
                        'G6 自 3.0.4 版本支持直接从 item.getModel() 获取源数据(临时通知，将在之后版本清除)',
                        t,
                      );
                    }
                    this.graph.refreshLayout();
                  }
                }
              },
            };
          },
          function(t, e, n) {
            var r = n(1),
              i = n(43);
            t.exports = r.mix(
              {
                getDefaultCfg: function() {
                  return {
                    item: 'edge',
                    formatText: function(t) {
                      return 'source:' + t.source + ' target:' + t.target;
                    },
                  };
                },
                getEvents: function() {
                  return {
                    'edge:mouseenter': 'onMouseEnter',
                    'edge:mouseleave': 'onMouseLeave',
                    'edge:mousemove': 'onMouseMove',
                  };
                },
              },
              i,
            );
          },
          function(t, e, n) {
            var r = n(1),
              i = n(43);
            t.exports = r.mix(
              {
                getDefaultCfg: function() {
                  return {
                    item: 'node',
                    formatText: function(t) {
                      return t.label;
                    },
                  };
                },
                getEvents: function() {
                  return {
                    'node:mouseenter': 'onMouseEnter',
                    'node:mouseleave': 'onMouseLeave',
                    'node:mousemove': 'onMouseMove',
                  };
                },
              },
              i,
            );
          },
          function(t, e, n) {
            var r = n(1);
            t.exports = {
              getDefaultCfg: function() {
                return { multiple: !0, keyCode: 17 };
              },
              getEvents: function() {
                return {
                  'node:click': 'onClick',
                  'canvas:click': 'onCanvasClick',
                  keyup: 'onKeyUp',
                  keydown: 'onKeyDown',
                };
              },
              onClick: function(t) {
                var e = t.item,
                  n = this.graph,
                  i = n.get('autoPaint');
                if ((n.setAutoPaint(!1), !this.keydown || !this.multiple)) {
                  var a = n.findAllByState('node', 'selected');
                  r.each(a, function(t) {
                    t !== e && n.setItemState(t, 'selected', !1);
                  });
                }
                e.hasState('selected')
                  ? (this.shouldUpdate.call(this, t) && n.setItemState(e, 'selected', !1),
                    n.emit('nodeselectchange', { target: e, select: !1 }))
                  : (this.shouldUpdate.call(this, t) && n.setItemState(e, 'selected', !0),
                    n.emit('nodeselectchange', { target: e, select: !0 })),
                  n.setAutoPaint(i),
                  n.paint();
              },
              onCanvasClick: function() {
                var t = this.graph,
                  e = t.get('autoPaint');
                t.setAutoPaint(!1);
                var n = t.findAllByState('node', 'selected');
                r.each(n, function(e) {
                  t.setItemState(e, 'selected', !1);
                }),
                  t.paint(),
                  t.setAutoPaint(e);
              },
              onKeyDown: function(t) {
                (t.keyCode || t.which) === this.keyCode ? (this.keydown = !0) : (this.keydown = !1);
              },
              onKeyUp: function() {
                this.keydown = !1;
              },
            };
          },
          function(t, e, n) {
            function r() {
              return (r =
                Object.assign ||
                function(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                  }
                  return t;
                }).apply(this, arguments);
            }
            var i = n(1).mix,
              a = n(16).delegateStyle,
              o = document.body;
            t.exports = {
              getDefaultCfg: function() {
                return { updateEdge: !0, delegate: !0, delegateStyle: {} };
              },
              getEvents: function() {
                return {
                  'node:dragstart': 'onDragStart',
                  'node:drag': 'onDrag',
                  'node:dragend': 'onDragEnd',
                  'canvas:mouseleave': 'onOutOfRange',
                };
              },
              onDragStart: function(t) {
                this.shouldBegin.call(this, t) && ((this.target = t.item), (this.origin = { x: t.x, y: t.y }));
              },
              onDrag: function(t) {
                this.origin && this.get('shouldUpdate').call(this, t) && this._update(this.target, t);
              },
              onDragEnd: function(t) {
                if (this.shouldEnd.call(this, t) && this.origin) {
                  var e = this.target.get('delegateShape');
                  e && (e.remove(), this.target.set('delegateShape', null)),
                    this._update(this.target, t, !0),
                    (this.point = null),
                    (this.origin = null);
                  var n = this.fn;
                  n && (o.removeEventListener('mouseup', n, !1), (this.fn = null));
                }
              },
              onOutOfRange: function(t) {
                var e = this;
                if (this.origin) {
                  var n = e.graph.get('canvas').get('el'),
                    r = function(r) {
                      r.target !== n && e.onDragEnd(t);
                    };
                  (this.fn = r), o.addEventListener('mouseup', r, !1);
                }
              },
              _update: function(t, e, n) {
                var r = this.origin,
                  i = t.get('model');
                this.point || (this.point = { x: i.x, y: i.y });
                var a = e.x - r.x + this.point.x,
                  o = e.y - r.y + this.point.y;
                (this.origin = { x: e.x, y: e.y }),
                  (this.point = { x: a, y: o }),
                  !this.delegate || n
                    ? this.get('updateEdge')
                      ? this.graph.updateItem(t, { x: a, y: o })
                      : (t.updatePosition({ x: a, y: o }), this.graph.paint())
                    : this._updateDelegate(t, a, o);
              },
              _updateDelegate: function(t, e, n) {
                var o = t.get('delegateShape'),
                  s = t.get('keyShape').getBBox();
                if (!o) {
                  var c = this.graph.get('group'),
                    u = i({}, a, this.delegateStyle);
                  (o = c.addShape('rect', {
                    attrs: r({ width: s.width, height: s.height, x: e - s.width / 2, y: n - s.height / 2 }, u),
                  })).set('capture', !1),
                    t.set('delegateShape', o);
                }
                o.attr({ x: e - s.width / 2, y: n - s.height / 2 }), this.graph.paint();
              },
            };
          },
          function(t, e) {
            t.exports = {
              getDefaultCfg: function() {
                return { sensitivity: 5, minZoom: 0.1, maxZoom: 10 };
              },
              getEvents: function() {
                return { wheel: 'onWheel' };
              },
              onWheel: function(t) {
                if ((t.preventDefault(), this.shouldUpdate.call(this, t))) {
                  var e = this.graph,
                    n = e.get('canvas'),
                    r = n.getPointByClient(t.clientX, t.clientY),
                    i = n.get('pixelRatio'),
                    a = this.get('sensitivity'),
                    o = e.getZoom(),
                    s = (o = t.wheelDelta > 0 ? 1 - 0.05 * a : 1 + 0.05 * a) * e.getZoom();
                  s > this.get('maxZoom') ||
                    s < this.get('minZoom') ||
                    (e.zoom(o, { x: r.x / i, y: r.y / i }), e.paint(), e.emit('wheelzoom', t));
                }
              },
            };
          },
          function(t, e, n) {
            var r = n(1),
              i = Math.abs,
              a = document.body;
            t.exports = {
              getDefaultCfg: function() {
                return { direction: 'both' };
              },
              getEvents: function() {
                return {
                  'canvas:mousedown': 'onMouseDown',
                  'canvas:mousemove': 'onMouseMove',
                  'canvas:mouseup': 'onMouseUp',
                  'canvas:click': 'onMouseUp',
                  'canvas:mouseleave': 'onOutOfRange',
                };
              },
              updateViewport: function(t) {
                var e = this.origin,
                  n = +t.clientX,
                  r = +t.clientY;
                if (!isNaN(n) && !isNaN(r)) {
                  var i = n - e.x,
                    a = r - e.y;
                  'x' === this.get('direction') ? (a = 0) : 'y' === this.get('direction') && (i = 0),
                    (this.origin = { x: n, y: r }),
                    this.graph.translate(i, a),
                    this.graph.paint();
                }
              },
              onMouseDown: function(t) {
                (this.origin = { x: t.clientX, y: t.clientY }), (this.dragging = !1);
              },
              onMouseMove: function(t) {
                t = r.cloneEvent(t);
                var e = this.graph;
                if (this.origin) {
                  if (this.origin && !this.dragging) {
                    if (i(this.origin.x - t.clientX) + i(this.origin.y - t.clientY) < 10) return;
                    this.shouldBegin.call(this, t) &&
                      ((t.type = 'dragstart'), e.emit('canvas:dragstart', t), (this.dragging = !0));
                  }
                  this.dragging && ((t.type = 'drag'), e.emit('canvas:drag', t)),
                    this.shouldUpdate.call(this, t) && this.updateViewport(t);
                }
              },
              onMouseUp: function(t) {
                if (this.dragging) {
                  t = r.cloneEvent(t);
                  var e = this.graph;
                  this.shouldEnd.call(this, t) && this.updateViewport(t),
                    (t.type = 'dragend'),
                    e.emit('canvas:dragend', t),
                    this.endDrag();
                } else this.origin = null;
              },
              endDrag: function() {
                if (this.dragging) {
                  (this.origin = null), (this.dragging = !1);
                  var t = this.fn;
                  t && (a.removeEventListener('mouseup', t, !1), (this.fn = null));
                }
              },
              onOutOfRange: function(t) {
                if (this.dragging) {
                  var e = this,
                    n = e.graph.get('canvas').get('el'),
                    r = function(r) {
                      r.target !== n && e.onMouseUp(t);
                    };
                  (this.fn = r), a.addEventListener('mouseup', r, !1);
                }
              },
            };
          },
          function(t, e, n) {
            var r = n(1),
              i = {
                registerBehavior: function(t, e) {
                  if (!e) throw new Error('please specify handler for this behavior:' + t);
                  var n = function(t) {
                    var e = this;
                    r.mix(e, e.getDefaultCfg(), t);
                    var n = e.getEvents();
                    if (n) {
                      var i = {};
                      r.each(n, function(t, n) {
                        i[n] = r.wrapBehavior(e, t);
                      }),
                        (this._events = i);
                    }
                  };
                  r.augment(
                    n,
                    {
                      shouldBegin: function() {
                        return !0;
                      },
                      shouldUpdate: function() {
                        return !0;
                      },
                      shouldEnd: function() {
                        return !0;
                      },
                      getEvents: function() {},
                      bind: function(t) {
                        var e = this._events;
                        (this.graph = t),
                          r.each(e, function(e, n) {
                            t.on(n, e);
                          });
                      },
                      unbind: function(t) {
                        var e = this._events;
                        r.each(e, function(e, n) {
                          t.off(n, e);
                        });
                      },
                      get: function(t) {
                        return this[t];
                      },
                      set: function(t, e) {
                        return (this[t] = e), this;
                      },
                      getDefaultCfg: function() {},
                    },
                    e,
                  ),
                    (i[t] = n);
                },
                hasBehavior: function(t) {
                  return !!i[t];
                },
                getBehavior: function(t) {
                  return i[t];
                },
              };
            t.exports = i;
          },
          function(t, e, n) {
            var r = n(31),
              i = n(1),
              a = n(16),
              o = n(45);
            r.registerFactory('edge', { defaultShapeType: 'line' });
            var s = i.mix({}, o, {
              itemType: 'edge',
              labelPosition: 'center',
              labelAutoRotate: !1,
              getPath: function(t) {
                var e = [];
                return (
                  i.each(t, function(t, n) {
                    0 === n ? e.push(['M', t.x, t.y]) : e.push(['L', t.x, t.y]);
                  }),
                  e
                );
              },
              getShapeStyle: function(t) {
                var e = t.color || a.defaultEdge.color,
                  n = t.size || a.defaultEdge.size,
                  r = (t = this.getPathPoints(t)).startPoint,
                  o = t.endPoint,
                  s = this.getControlPoints(t),
                  c = [r];
                s && (c = c.concat(s)), c.push(o);
                var u = this.getPath(c);
                return i.mix({}, a.defaultEdge.style, { stroke: e, lineWidth: n, path: u }, t.style);
              },
              getLabelStyleByPosition: function(t, e, n) {
                var r,
                  a = e.position || this.labelPosition,
                  o = {},
                  s = n.findByClassName('edge-shape');
                r = 'start' === a ? 0 : 'end' === a ? 1 : 0.5;
                var c = e.refX,
                  u = e.refY;
                if (t.startPoint.x === t.endPoint.x && t.startPoint.y === t.endPoint.y)
                  return (o.x = t.startPoint.x + c ? c : 0), (o.y = t.endPoint.y + u ? u : 0), o;
                var l = i.isNil(e.autoRotate) ? this.labelAutoRotate : e.autoRotate,
                  h = i.getLabelPosition(s, r, c, u, l);
                return (
                  (o.x = h.x), (o.y = h.y), (o.rotate = h.rotate), (o.textAlign = this._getTextAlign(a, h.angle)), o
                );
              },
              _getTextAlign: function(t, e) {
                var n = 'center';
                return e
                  ? ((e %= 2 * Math.PI),
                    'center' !== t &&
                      (n =
                        (e >= 0 && e <= Math.PI / 2) || (e >= 1.5 * Math.PI && e < 2 * Math.PI)
                          ? t
                          : (function(t) {
                              var e = t;
                              return 'start' === t ? (e = 'end') : 'end' === t && (e = 'start'), e;
                            })(t)),
                    n)
                  : t;
              },
              getControlPoints: function(t) {
                return t.controlPoints;
              },
              getPathPoints: function(t) {
                return t;
              },
              drawShape: function(t, e) {
                var n = this.getShapeStyle(t);
                return e.addShape('path', { className: 'edge-shape', attrs: n });
              },
            });
            r.registerEdge('single-line', s),
              r.registerEdge(
                'line',
                {
                  getControlPoints: function() {
                    return [];
                  },
                },
                'single-line',
              ),
              r.registerEdge('polyline', {}, 'single-line'),
              r.registerEdge(
                'spline',
                {
                  getPath: function(t) {
                    return i.getSpline(t);
                  },
                },
                'single-line',
              ),
              r.registerEdge(
                'quadratic',
                {
                  curvePosition: 0.5,
                  curveOffset: -20,
                  getControlPoints: function(t) {
                    var e = t.controlPoints;
                    if (!e || !e.length) {
                      var n = t.startPoint,
                        r = t.endPoint;
                      e = [i.getControlPoint(n, r, this.curvePosition, this.curveOffset)];
                    }
                    return e;
                  },
                  getPath: function(t) {
                    var e = [];
                    return e.push(['M', t[0].x, t[0].y]), e.push(['Q', t[1].x, t[1].y, t[2].x, t[2].y]), e;
                  },
                },
                'single-line',
              ),
              r.registerEdge(
                'cubic',
                {
                  curvePosition: [0.5, 0.5],
                  curveOffset: [-20, 20],
                  getControlPoints: function(t) {
                    var e = t.controlPoints;
                    if (!e || !e.length) {
                      var n = t.startPoint,
                        r = t.endPoint;
                      e = [
                        i.getControlPoint(n, r, this.curvePosition[0], this.curveOffset[0]),
                        i.getControlPoint(n, r, this.curvePosition[1], this.curveOffset[1]),
                      ];
                    }
                    return e;
                  },
                  getPath: function(t) {
                    var e = [];
                    return (
                      e.push(['M', t[0].x, t[0].y]), e.push(['C', t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y]), e
                    );
                  },
                },
                'single-line',
              ),
              r.registerEdge(
                'cubic-vertical',
                {
                  curvePosition: [0.5, 0.5],
                  getControlPoints: function(t) {
                    var e = t.startPoint,
                      n = t.endPoint;
                    return [
                      { x: e.x, y: (n.y - e.y) * this.curvePosition[0] + e.y },
                      { x: n.x, y: (n.y - e.y) * this.curvePosition[1] + e.y },
                    ];
                  },
                },
                'cubic',
              ),
              r.registerEdge(
                'cubic-horizontal',
                {
                  curvePosition: [0.5, 0.5],
                  getControlPoints: function(t) {
                    var e = t.startPoint,
                      n = t.endPoint;
                    return [
                      { x: (n.x - e.x) * this.curvePosition[0] + e.x, y: e.y },
                      { x: (n.x - e.x) * this.curvePosition[1] + e.x, y: n.y },
                    ];
                  },
                },
                'cubic',
              ),
              r.registerEdge(
                'loop',
                {
                  getPathPoints: function(t) {
                    return i.getLoopCfgs(t);
                  },
                  getControlPoints: function(t) {
                    return t.controlPoints;
                  },
                },
                'cubic',
              );
          },
          function(t, e, n) {
            var r = n(31),
              i = n(1),
              a = n(16),
              o = n(45);
            r.registerFactory('node', { defaultShapeType: 'circle' });
            var s = i.mix({}, o, {
              itemType: 'node',
              shapeType: '',
              labelPosition: 'center',
              getSize: function(t) {
                var e = t.size || a.defaultNode.size;
                return i.isArray(e) || (e = [e, e]), e;
              },
              getLabelStyleByPosition: function(t, e) {
                var n = e.position || this.labelPosition;
                if ('center' === n) return { x: 0, y: 0 };
                var r,
                  o = this.getSize(t),
                  s = o[0],
                  c = o[1],
                  u = e.offset;
                switch ((i.isNil(u) && (u = a.nodeLabel.offset), n)) {
                  case 'top':
                    r = { x: 0, y: 0 - c / 2 - u, textBaseline: 'bottom' };
                    break;
                  case 'bottom':
                    r = { x: 0, y: c / 2 + u, textBaseline: 'top' };
                    break;
                  case 'left':
                    r = { x: 0 - s / 2 - u, y: 0, textAlign: 'right' };
                    break;
                  default:
                    r = { x: s / 2 + u, y: 0, textAlign: 'left' };
                }
                return r;
              },
              drawShape: function(t, e) {
                var n = this.shapeType,
                  r = this.getShapeStyle(t);
                return e.addShape(n, { attrs: r });
              },
            });
            r.registerNode('single-shape', s),
              r.registerNode(
                'circle',
                {
                  shapeType: 'circle',
                  getShapeStyle: function(t) {
                    var e = this.getSize(t),
                      n = t.color || a.defaultNode.color;
                    return i.mix({}, { x: 0, y: 0, r: e[0] / 2, stroke: n }, a.defaultNode.style, t.style);
                  },
                },
                'single-shape',
              ),
              r.registerNode(
                'ellipse',
                {
                  shapeType: 'ellipse',
                  getShapeStyle: function(t) {
                    var e = this.getSize(t),
                      n = e[0] / 2,
                      r = e[1] / 2,
                      o = t.color || a.defaultNode.color;
                    return i.mix({}, { x: 0, y: 0, rx: n, ry: r, stroke: o }, a.defaultNode.style, t.style);
                  },
                },
                'single-shape',
              ),
              r.registerNode(
                'rect',
                {
                  shapeType: 'rect',
                  getShapeStyle: function(t) {
                    var e = this.getSize(t),
                      n = e[0],
                      r = e[1],
                      o = t.color || a.defaultNode.color;
                    return i.mix(
                      {},
                      a.defaultNode.style,
                      { x: 0 - n / 2, y: 0 - r / 2, width: n, height: r, stroke: o },
                      t.style,
                    );
                  },
                },
                'single-shape',
              ),
              r.registerNode(
                'image',
                {
                  shapeType: 'image',
                  labelPosition: 'bottom',
                  getShapeStyle: function(t) {
                    var e = this.getSize(t),
                      n = t.img,
                      r = e[0],
                      a = e[1];
                    return i.mix({}, { x: 0 - r / 2, y: 0 - a / 2, width: r, height: a, img: n }, t.style);
                  },
                },
                'single-shape',
              );
          },
          function(t, e, n) {
            var r = n(1),
              i = n(29).Group;
            t.exports = r.augment(i, {
              findByClassName: function(t) {
                return this.find(function(e) {
                  return e.get('className') === t;
                });
              },
            });
          },
          function(t, e, n) {
            function r() {
              return (r =
                Object.assign ||
                function(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                  }
                  return t;
                }).apply(this, arguments);
            }
            var i = n(46),
              a = n(22),
              o = n(16),
              s = Math.PI,
              c = Math.sin,
              u = Math.cos,
              l = c(s / 8),
              h = u(s / 8),
              f = {
                getBBox: function(t, e) {
                  var n = t.getBBox(),
                    r = { x: n.minX, y: n.minY },
                    a = { x: n.maxX, y: n.maxY };
                  if (e) {
                    var o = e.getMatrix();
                    (r = i.applyMatrix(r, o)), (a = i.applyMatrix(a, o));
                  }
                  return { minX: r.x, minY: r.y, maxX: a.x, maxY: a.y };
                },
                getLoopCfgs: function(t) {
                  var e = t.sourceNode || t.targetNode,
                    n = e.get('group').getMatrix(),
                    r = e.getKeyShape().getBBox(),
                    i = t.loopCfg || {},
                    s = i.dist || 2 * Math.max(r.width, r.height),
                    c = i.position || o.loopPosition,
                    u = Math.max(r.width, r.height) / 2,
                    f = (u + s) / u,
                    d = [n[6], n[7]],
                    p = u * l,
                    g = u * h,
                    v = [t.startPoint.x, t.startPoint.y],
                    m = [t.endPoint.x, t.endPoint.y];
                  if (v[0] === m[0] && v[1] === m[1]) {
                    switch (c) {
                      case 'top':
                        (v = [d[0] - p, d[1] - g]), (m = [d[0] + p, d[1] - g]);
                        break;
                      case 'top-right':
                        (v = [d[0] + p, d[1] - g]), (m = [d[0] + g, d[1] - p]);
                        break;
                      case 'right':
                        (v = [d[0] + g, d[1] - p]), (m = [d[0] + g, d[1] + p]);
                        break;
                      case 'bottom-right':
                        (v = [d[0] + g, d[1] + p]), (m = [d[0] + p, d[1] + g]);
                        break;
                      case 'bottom':
                        (v = [d[0] + p, d[1] + g]), (m = [d[0] - p, d[1] + g]);
                        break;
                      case 'bottom-left':
                        (v = [d[0] - p, d[1] + g]), (m = [d[0] - g, d[1] + p]);
                        break;
                      case 'left':
                        (v = [d[0] - g, d[1] + p]), (m = [d[0] - g, d[1] - p]);
                        break;
                      case 'top-left':
                        (v = [d[0] - g, d[1] - p]), (m = [d[0] - p, d[1] - g]);
                        break;
                      default:
                        (v = [d[0] - p, d[1] - g]), (m = [d[0] + p, d[1] - g]);
                    }
                    if (!1 === i.clockwise) {
                      var y = [v[0], v[1]];
                      (v = [m[0], m[1]]), (m = [y[0], y[1]]);
                    }
                  }
                  var x = [v[0] - d[0], v[1] - d[1]],
                    b = a.vec2.scale([], x, f),
                    w = [d[0] + b[0], d[1] + b[1]],
                    S = [m[0] - d[0], m[1] - d[1]],
                    M = a.vec2.scale([], S, f),
                    P = [d[0] + M[0], d[1] + M[1]];
                  return (
                    (t.shape = 'cubic'),
                    (t.startPoint = { x: v[0], y: v[1] }),
                    (t.endPoint = { x: m[0], y: m[1] }),
                    (t.controlPoints = [{ x: w[0], y: w[1] }, { x: P[0], y: P[1] }]),
                    t
                  );
                },
                traverseTree: function(t, e) {
                  'function' == typeof e &&
                    (function t(e, n) {
                      !1 !== n(e) &&
                        a.each(e.children, function(e) {
                          t(e, n);
                        });
                    })(t, e);
                },
                radialLayout: function(t, e) {
                  var n = { x: 1 / 0, y: 1 / 0 },
                    r = { x: -1 / 0, y: -1 / 0 },
                    i = 'x',
                    a = 'y';
                  e && ['V', 'TB', 'BT'].indexOf(e) >= 0 && ((a = 'x'), (i = 'y'));
                  var o = 0;
                  this.traverseTree(t, function(t) {
                    o++,
                      t.x > r.x && (r.x = t.x),
                      t.x < n.x && (n.x = t.x),
                      t.y > r.y && (r.y = t.y),
                      t.y < n.y && (n.y = t.y);
                  });
                  var c = (2 * s) / o,
                    u = r[a] - n[a];
                  return 0 === u
                    ? t
                    : (this.traverseTree(t, function(t) {
                        var e = ((t[a] - n[a]) / u) * (2 * s - c) + c,
                          r = t.depth * ('x' === i ? t.hgap : t.vgap);
                        (t.x = r * Math.cos(e)), (t.y = r * Math.sin(e));
                      }),
                      t);
                },
                getLabelPosition: function(t, e, n, i, a) {
                  var o = [],
                    l = t.getPoint(e);
                  if (e < 1e-4) o = t.getStartTangent().reverse();
                  else if (e > 0.9999) o = t.getEndTangent();
                  else {
                    var h = t.getPoint(e + 1e-4);
                    o.push([l.x, l.y]), o.push([h.x, h.y]);
                  }
                  var f = Math.atan2(o[1][1] - o[0][1], o[1][0] - o[0][0]);
                  if ((f < 0 && (f += 2 * s), n && ((l.x += u(f) * n), (l.y += c(f) * n)), i)) {
                    var d = f - s / 2;
                    f > 0.5 * s && f < 1.5 * s && (d -= s), (l.x += u(d) * i), (l.y += c(d) * i);
                  }
                  var p = { x: l.x, y: l.y, angle: f };
                  return a ? (f > 0.5 * s && f < 1.5 * s && (f -= s), r({ rotate: f }, p)) : p;
                },
              };
            t.exports = f;
          },
          function(t, e, n) {
            var r = n(29),
              i = n(22).vec2;
            t.exports = {
              getSpline: function(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                  var i = t[n];
                  e.push(i.x), e.push(i.y);
                }
                var a = r.PathUtil.catmullRomToBezier(e);
                return a.unshift(['M', t[0].x, t[0].y]), a;
              },
              getControlPoint: function(t, e, n, r) {
                var a = { x: (1 - n) * t.x + n * e.x, y: (1 - n) * t.y + n * e.y },
                  o = [];
                i.normalize(o, [e.x - t.x, e.y - t.y]);
                var s = [-o[1] * r, o[0] * r];
                return (a.x += s[0]), (a.y += s[1]), a;
              },
            };
          },
          function(t, e, n) {
            var r = n(21),
              i = Array.prototype.splice;
            t.exports = function(t, e) {
              if (!r(t)) return [];
              for (var n = t ? e.length : 0, a = n - 1; n--; ) {
                var o = void 0,
                  s = e[n];
                (n !== a && s === o) || ((o = s), i.call(t, s, 1));
              }
              return t;
            };
          },
          function(t, e, n) {
            var r = n(21),
              i = n(104);
            t.exports = function(t, e) {
              var n = [];
              if (!r(t)) return n;
              for (var a = -1, o = [], s = t.length; ++a < s; ) {
                var c = t[a];
                e(c, a, t) && (n.push(c), o.push(a));
              }
              return i(t, o), n;
            };
          },
          function(t, e) {
            t.exports = function(t, e, n) {
              if (t) {
                if (t.addEventListener)
                  return (
                    t.addEventListener(e, n, !1),
                    {
                      remove: function() {
                        t.removeEventListener(e, n, !1);
                      },
                    }
                  );
                if (t.attachEvent)
                  return (
                    t.attachEvent('on' + e, n),
                    {
                      remove: function() {
                        t.detachEvent('on' + e, n);
                      },
                    }
                  );
              }
            };
          },
          function(t, e) {
            t.exports = function(t, e, n) {
              var r = void 0,
                i = void 0,
                a = void 0,
                o = void 0,
                s = 0;
              n || (n = {});
              var c = function() {
                  (s = !1 === n.leading ? 0 : Date.now()), (r = null), (o = t.apply(i, a)), r || (i = a = null);
                },
                u = function() {
                  var u = Date.now();
                  s || !1 !== n.leading || (s = u);
                  var l = e - (u - s);
                  return (
                    (i = this),
                    (a = arguments),
                    l <= 0 || l > e
                      ? (r && (clearTimeout(r), (r = null)), (s = u), (o = t.apply(i, a)), r || (i = a = null))
                      : r || !1 === n.trailing || (r = setTimeout(c, l)),
                    o
                  );
                };
              return (
                (u.cancel = function() {
                  clearTimeout(r), (s = 0), (r = i = a = null);
                }),
                u
              );
            };
          },
          function(t, e) {
            t.exports = function(t, e, n) {
              var r = void 0;
              return function() {
                var i = this,
                  a = arguments,
                  o = n && !r;
                clearTimeout(r),
                  (r = setTimeout(function() {
                    (r = null), n || t.apply(i, a);
                  }, e)),
                  o && t.apply(i, a);
              };
            };
          },
          function(t, e) {
            var n = {
              svg: 'svg',
              circle: 'circle',
              rect: 'rect',
              text: 'text',
              path: 'path',
              foreignObject: 'foreignObject',
              polygon: 'polygon',
              ellipse: 'ellipse',
              image: 'image',
            };
            t.exports = function(t, e, r) {
              var i = r.target || r.srcElement;
              if (!n[i.tagName]) {
                for (var a = i.parentNode; a && !n[a.tagName]; ) a = a.parentNode;
                i = a;
              }
              return this._cfg.el === i
                ? this
                : this.find(function(t) {
                    return t._cfg && t._cfg.el === i;
                  });
            };
          },
          function(t, e, n) {
            var r = n(0),
              i = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,
              a = (function() {
                function t(t) {
                  var e = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
                  e.setAttribute('patternUnits', 'userSpaceOnUse');
                  var n = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                  e.appendChild(n);
                  var a = r.uniqueId('pattern_');
                  (e.id = a), (this.el = e), (this.id = a), (this.cfg = t);
                  var o = i.exec(t)[2];
                  n.setAttribute('href', o);
                  var s = new Image();
                  function c() {
                    console.log(s.width, s.height),
                      e.setAttribute('width', s.width),
                      e.setAttribute('height', s.height);
                  }
                  return (
                    o.match(/^data:/i) || (s.crossOrigin = 'Anonymous'),
                    (s.src = o),
                    s.complete ? c() : ((s.onload = c), (s.src = s.src)),
                    this
                  );
                }
                return (
                  (t.prototype.match = function(t, e) {
                    return this.cfg === e;
                  }),
                  t
                );
              })();
            t.exports = a;
          },
          function(t, e, n) {
            var r = n(0),
              i = (function() {
                function t(t) {
                  this.type = 'clip';
                  var e = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
                  (this.el = e), (this.id = r.uniqueId('clip_')), (e.id = this.id);
                  var n = t._cfg.el;
                  return e.appendChild(n.cloneNode(!0)), (this.cfg = t), this;
                }
                var e = t.prototype;
                return (
                  (e.match = function() {
                    return !1;
                  }),
                  (e.remove = function() {
                    var t = this.el;
                    t.parentNode.removeChild(t);
                  }),
                  t
                );
              })();
            t.exports = i;
          },
          function(t, e, n) {
            var r = n(0),
              i = (function() {
                function t(t, e) {
                  var n = document.createElementNS('http://www.w3.org/2000/svg', 'marker'),
                    i = r.uniqueId('marker_');
                  n.setAttribute('id', i);
                  var a = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                  return (
                    a.setAttribute('stroke', 'none'),
                    a.setAttribute('fill', t.stroke || '#000'),
                    n.appendChild(a),
                    n.setAttribute('overflow', 'visible'),
                    n.setAttribute('orient', 'auto-start-reverse'),
                    (this.el = n),
                    (this.child = a),
                    (this.id = i),
                    (this.cfg = t['marker-start' === e ? 'startArrow' : 'endArrow']),
                    (this.stroke = t.stroke || '#000'),
                    !0 === this.cfg ? this._setDefaultPath(e, a) : this._setMarker(t.lineWidth, a),
                    this
                  );
                }
                var e = t.prototype;
                return (
                  (e.match = function() {
                    return !1;
                  }),
                  (e._setDefaultPath = function(t, e) {
                    var n = this.el;
                    e.setAttribute('d', 'M0,0 L6,3 L0,6 L3,3Z'), n.setAttribute('refX', 3), n.setAttribute('refY', 3);
                  }),
                  (e._setMarker = function(t, e) {
                    var n = this.el,
                      i = this.cfg.path,
                      a = this.cfg.d;
                    r.isArray(i) &&
                      (i = i
                        .map(function(t) {
                          return t.join(' ');
                        })
                        .join('')),
                      e.setAttribute('d', i),
                      n.appendChild(e),
                      a && n.setAttribute('refX', a / t);
                  }),
                  (e.update = function(t) {
                    var e = this.child;
                    e.attr ? e.attr('fill', t) : e.setAttribute('fill', t);
                  }),
                  t
                );
              })();
            t.exports = i;
          },
          function(t, e, n) {
            var r = n(0),
              i = {
                shadowColor: 'color',
                shadowOpacity: 'opacity',
                shadowBlur: 'blur',
                shadowOffsetX: 'dx',
                shadowOffsetY: 'dy',
              },
              a = { x: '-40%', y: '-40%', width: '200%', height: '200%' },
              o = (function() {
                function t(t) {
                  this.type = 'filter';
                  var e = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
                  return (
                    r.each(a, function(t, n) {
                      e.setAttribute(n, t);
                    }),
                    (this.el = e),
                    (this.id = r.uniqueId('filter_')),
                    (this.el.id = this.id),
                    (this.cfg = t),
                    this._parseShadow(t, e),
                    this
                  );
                }
                var e = t.prototype;
                return (
                  (e.match = function(t, e) {
                    if (this.type !== t) return !1;
                    var n = !0,
                      i = this.cfg;
                    return (
                      r.each(Object.keys(i), function(t) {
                        if (i[t] !== e[t]) return (n = !1), !1;
                      }),
                      n
                    );
                  }),
                  (e.update = function(t, e) {
                    var n = this.cfg;
                    return (n[i[t]] = e), this._parseShadow(n, this.el), this;
                  }),
                  (e._parseShadow = function(t, e) {
                    var n =
                      '<feDropShadow \n      dx="' +
                      (t.dx || 0) +
                      '" \n      dy="' +
                      (t.dy || 0) +
                      '" \n      stdDeviation="' +
                      (t.blur ? t.blur / 10 : 0) +
                      '"\n      flood-color="' +
                      (t.color ? t.color : '#000') +
                      '"\n      flood-opacity="' +
                      (t.opacity ? t.opacity : 1) +
                      '"\n      />';
                    e.innerHTML = n;
                  }),
                  t
                );
              })();
            t.exports = o;
          },
          function(t, e, n) {
            var r = n(0),
              i = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,
              a = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,
              o = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
            function s(t) {
              var e = t.match(o);
              if (!e) return '';
              var n = '';
              return (
                e.sort(function(t, e) {
                  return (t = t.split(':')), (e = e.split(':')), Number(t[0]) - Number(e[0]);
                }),
                r.each(e, function(t) {
                  (t = t.split(':')), (n += '<stop offset="' + t[0] + '" stop-color="' + t[1] + '"></stop>');
                }),
                n
              );
            }
            var c = (function() {
              function t(t) {
                var e = null,
                  n = r.uniqueId('gradient_');
                return (
                  'l' === t.toLowerCase()[0]
                    ? (function(t, e) {
                        var n,
                          a,
                          o = i.exec(t),
                          c = r.mod(r.toRadian(parseFloat(o[1])), 2 * Math.PI),
                          u = o[2];
                        c >= 0 && c < 0.5 * Math.PI
                          ? ((n = { x: 0, y: 0 }), (a = { x: 1, y: 1 }))
                          : 0.5 * Math.PI <= c && c < Math.PI
                          ? ((n = { x: 1, y: 0 }), (a = { x: 0, y: 1 }))
                          : Math.PI <= c && c < 1.5 * Math.PI
                          ? ((n = { x: 1, y: 1 }), (a = { x: 0, y: 0 }))
                          : ((n = { x: 0, y: 1 }), (a = { x: 1, y: 0 }));
                        var l = Math.tan(c),
                          h = l * l,
                          f = (a.x - n.x + l * (a.y - n.y)) / (h + 1) + n.x,
                          d = (l * (a.x - n.x + l * (a.y - n.y))) / (h + 1) + n.y;
                        e.setAttribute('x1', n.x),
                          e.setAttribute('y1', n.y),
                          e.setAttribute('x2', f),
                          e.setAttribute('y2', d),
                          (e.innerHTML = s(u));
                      })(t, (e = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient')))
                    : (function(t, e) {
                        var n = a.exec(t),
                          r = parseFloat(n[1]),
                          i = parseFloat(n[2]),
                          o = parseFloat(n[3]),
                          c = n[4];
                        e.setAttribute('cx', r), e.setAttribute('cy', i), e.setAttribute('r', o), (e.innerHTML = s(c));
                      })(t, (e = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient'))),
                  e.setAttribute('id', n),
                  (this.el = e),
                  (this.id = n),
                  (this.cfg = t),
                  this
                );
              }
              return (
                (t.prototype.match = function(t, e) {
                  return this.cfg === e;
                }),
                t
              );
            })();
            t.exports = c;
          },
          function(t, e, n) {
            var r = n(0),
              i = n(114),
              a = n(113),
              o = n(112),
              s = n(111),
              c = n(110),
              u = (function() {
                function t(t) {
                  var e = document.createElementNS('http://www.w3.org/2000/svg', 'defs'),
                    n = r.uniqueId('defs_');
                  (e.id = n),
                    t.appendChild(e),
                    (this.children = []),
                    (this.defaultArrow = {}),
                    (this.el = e),
                    (this.canvas = t);
                }
                var e = t.prototype;
                return (
                  (e.find = function(t, e) {
                    for (var n = this.children, r = null, i = 0; i < n.length; i++)
                      if (n[i].match(t, e)) {
                        r = n[i].id;
                        break;
                      }
                    return r;
                  }),
                  (e.findById = function(t) {
                    for (var e = this.children, n = null, r = 0; r < e.length; r++)
                      if (e[r].id === t) {
                        n = e[r];
                        break;
                      }
                    return n;
                  }),
                  (e.add = function(t) {
                    this.children.push(t), (t.canvas = this.canvas), (t.parent = this);
                  }),
                  (e.getDefaultArrow = function(t, e) {
                    var n = t.stroke || t.strokeStyle;
                    if (this.defaultArrow[n]) return this.defaultArrow[n].id;
                    var r = new o(t, e);
                    return (this.defaultArrow[n] = r), this.el.appendChild(r.el), r.id;
                  }),
                  (e.addGradient = function(t) {
                    var e = new i(t);
                    return this.el.appendChild(e.el), this.add(e), e.id;
                  }),
                  (e.addArrow = function(t, e) {
                    var n = new o(t, e);
                    return this.el.appendChild(n.el), n.id;
                  }),
                  (e.addShadow = function(t) {
                    var e = new a(t);
                    return this.el.appendChild(e.el), this.add(e), e.id;
                  }),
                  (e.addPattern = function(t) {
                    var e = new c(t);
                    return this.el.appendChild(e.el), this.add(e), e.id;
                  }),
                  (e.addClip = function(t) {
                    var e = new s(t);
                    return this.el.appendChild(e.el), this.add(e), e.id;
                  }),
                  t
                );
              })();
            t.exports = u;
          },
          function(t, e, n) {
            var r = n(0),
              i = n(20).parseRadius,
              a = n(33),
              o = n(115),
              s = {
                rect: 'path',
                circle: 'circle',
                line: 'line',
                path: 'path',
                marker: 'path',
                text: 'text',
                polygon: 'polygon',
                image: 'image',
                ellipse: 'ellipse',
                dom: 'foreignObject',
                fan: 'path',
                group: 'g',
              },
              c = {
                opacity: 'opacity',
                fillStyle: 'fill',
                strokeOpacity: 'stroke-opacity',
                fillOpacity: 'fill-opacity',
                strokeStyle: 'stroke',
                x: 'x',
                y: 'y',
                r: 'r',
                rx: 'rx',
                ry: 'ry',
                width: 'width',
                height: 'height',
                x1: 'x1',
                x2: 'x2',
                y1: 'y1',
                y2: 'y2',
                lineCap: 'stroke-linecap',
                lineJoin: 'stroke-linejoin',
                lineWidth: 'stroke-width',
                lineDash: 'stroke-dasharray',
                lineDashOffset: 'stroke-dashoffset',
                miterLimit: 'stroke-miterlimit',
                font: 'font',
                fontSize: 'font-size',
                fontStyle: 'font-style',
                fontVariant: 'font-variant',
                fontWeight: 'font-weight',
                fontFamily: 'font-family',
                startArrow: 'marker-start',
                endArrow: 'marker-end',
                path: 'd',
                class: 'class',
                id: 'id',
                style: 'style',
                preserveAspectRatio: 'preserveAspectRatio',
              },
              u = {
                top: 'before-edge',
                middle: 'central',
                bottom: 'after-edge',
                alphabetic: 'baseline',
                hanging: 'hanging',
              },
              l = { left: 'left', start: 'left', center: 'middle', right: 'end', end: 'end' },
              h = (function() {
                function t(t) {
                  if (!t) return null;
                  var e = r.uniqueId('canvas_'),
                    n = r.createDom('<svg id="' + e + '"></svg>');
                  return (
                    t.appendChild(n),
                    (this.type = 'svg'),
                    (this.canvas = n),
                    (this.context = new o(n)),
                    (this.toDraw = !1),
                    this
                  );
                }
                var e = t.prototype;
                return (
                  (e.draw = function(t) {
                    var e = this;
                    e.animateHandler
                      ? (e.toDraw = !0)
                      : (function n() {
                          e.animateHandler = r.requestAnimationFrame(function() {
                            (e.animateHandler = void 0), e.toDraw && n();
                          });
                          try {
                            e._drawChildren(t);
                          } catch (t) {
                            console.warn('error in draw canvas, detail as:'), console.warn(t);
                          } finally {
                            e.toDraw = !1;
                          }
                        })();
                  }),
                  (e.drawSync = function(t) {
                    this._drawChildren(t);
                  }),
                  (e._drawGroup = function(t, e) {
                    var n = t._cfg;
                    n.removed ||
                      n.destroyed ||
                      (n.tobeRemoved &&
                        (r.each(n.tobeRemoved, function(t) {
                          t.parentNode && t.parentNode.removeChild(t);
                        }),
                        (n.tobeRemoved = [])),
                      this._drawShape(t, e),
                      n.children && n.children.length > 0 && this._drawChildren(t));
                  }),
                  (e._drawChildren = function(t) {
                    var e,
                      n = t._cfg.children;
                    if (n)
                      for (var r = 0; r < n.length; r++)
                        (e = n[r]).isGroup ? this._drawGroup(e, r) : this._drawShape(e, r);
                  }),
                  (e._drawShape = function(t, e) {
                    var n = t._attrs,
                      r = t._cfg,
                      i = r.el;
                    r.removed || r.destroyed
                      ? i && i.parentNode.removeChild(r.el)
                      : (!i && r.parent && (this._createDom(t, e), this._updateShape(t)),
                        (i = r.el),
                        !1 !== r.visible
                          ? (r.visible && i.hasAttribute('visibility') && i.removeAttribute('visibility'),
                            r.hasUpdate && this._updateShape(t),
                            n.clip && n.clip._cfg.hasUpdate && this._updateShape(n.clip))
                          : i.setAttribute('visibility', 'hidden'));
                  }),
                  (e._updateShape = function(t) {
                    var e = t._attrs,
                      n = t._cfg.attrs;
                    if (n)
                      if (
                        (t._cfg.el || this._createDom(t),
                        'clip' in e && this._setClip(t, e.clip),
                        ('shadowOffsetX' in e || 'shadowOffsetY' in e || 'shadowBlur' in e || 'shadowColor' in e) &&
                          this._setShadow(t),
                        'text' !== t.type)
                      ) {
                        for (var i in ('fan' === t.type && this._updateFan(t),
                        'marker' === t.type && t._cfg.el.setAttribute('d', this._assembleMarker(e)),
                        'rect' === t.type && t._cfg.el.setAttribute('d', this._assembleRect(e)),
                        e))
                          e[i] !== n[i] && this._setAttribute(t, i, e[i]);
                        (t._cfg.attrs = r.deepMix({}, t._attrs)), (t._cfg.hasUpdate = !1);
                      } else this._updateText(t);
                  }),
                  (e._setAttribute = function(t, e, n) {
                    var i = t.type,
                      a = t._attrs,
                      o = t._cfg.el,
                      s = this.context;
                    if (('marker' !== i && 'rect' !== i) || !~['x', 'y', 'radius', 'r'].indexOf(e))
                      if (~['circle', 'ellipse'].indexOf(i) && ~['x', 'y'].indexOf(e))
                        o.setAttribute('c' + e, parseInt(n, 10));
                      else {
                        if ('polygon' === i && 'points' === e)
                          return (
                            (n && 0 !== n.length) || (n = ''),
                            r.isArray(n) &&
                              (n = (n = n.map(function(t) {
                                return t[0] + ',' + t[1];
                              })).join(' ')),
                            void o.setAttribute('points', n)
                          );
                        if ('path' === e && r.isArray(n)) o.setAttribute('d', this._formatPath(n));
                        else if ('img' !== e) {
                          if ('transform' === e)
                            return n ? void this._setTransform(t) : void o.removeAttribute('transform');
                          if ('rotate' === e)
                            return n ? void this._setTransform(t) : void o.removeAttribute('transform');
                          if ('matrix' !== e)
                            if ('fillStyle' !== e && 'strokeStyle' !== e) {
                              if ('clip' !== e)
                                if (~e.indexOf('Arrow'))
                                  if (((e = c[e]), n)) {
                                    var u;
                                    (u = 'boolean' == typeof n ? s.getDefaultArrow(a, e) : s.addArrow(a, e)),
                                      o.setAttribute(e, 'url(#' + u + ')'),
                                      (t._cfg[e] = u);
                                  } else (t._cfg[e] = null), o.removeAttribute(e);
                                else
                                  'html' === e &&
                                    ('string' == typeof n ? (o.innerHTML = n) : ((o.innerHTML = ''), o.appendChild(n))),
                                    c[e] && o.setAttribute(c[e], n);
                            } else this._setColor(t, e, n);
                          else this._setTransform(t);
                        } else this._setImage(t, n);
                      }
                  }),
                  (e._createDom = function(t, e) {
                    var n = s[t.type],
                      r = t._attrs,
                      i = t._cfg.parent;
                    if (!n) throw new Error('the type' + t.type + 'is not supported by svg');
                    var a = document.createElementNS('http://www.w3.org/2000/svg', n);
                    if ((t._cfg.id && (a.id = t._cfg.id), (t._cfg.el = a), i)) {
                      var o = i._cfg.el;
                      if (void 0 === e) o.appendChild(a);
                      else {
                        var c = i._cfg.el.childNodes;
                        'svg' === o.tagName && (e += 1), c.length <= e ? o.appendChild(a) : o.insertBefore(a, c[e]);
                      }
                    }
                    return (
                      (t._cfg.attrs = {}),
                      'text' === t.type
                        ? (a.setAttribute('paint-order', 'stroke'),
                          a.setAttribute('style', 'stroke-linecap:butt; stroke-linejoin:miter;'))
                        : (r.stroke || r.strokeStyle || a.setAttribute('stroke', 'none'),
                          r.fill || r.fillStyle || a.setAttribute('fill', 'none')),
                      a
                    );
                  }),
                  (e._assembleMarker = function(t) {
                    var e = t.r;
                    if (
                      (void 0 === t.r && (e = t.radius), isNaN(Number(t.x)) || isNaN(Number(t.y)) || isNaN(Number(e)))
                    )
                      return '';
                    var n = '';
                    return (
                      (n =
                        'function' == typeof t.symbol
                          ? t.symbol(t.x, t.y, e)
                          : a.Symbols[t.symbol || 'circle'](t.x, t.y, e)),
                      r.isArray(n) &&
                        (n = n
                          .map(function(t) {
                            return t.join(' ');
                          })
                          .join('')),
                      n
                    );
                  }),
                  (e._assembleRect = function(t) {
                    var e = t.x,
                      n = t.y,
                      a = t.width,
                      o = t.height,
                      s = t.radius;
                    if (!s) return 'M ' + e + ',' + n + ' l ' + a + ',0 l 0,' + o + ' l' + -a + ' 0 z';
                    var c = i(s);
                    return (
                      r.isArray(s)
                        ? 1 === s.length
                          ? (c.r1 = c.r2 = c.r3 = c.r4 = s[0])
                          : 2 === s.length
                          ? ((c.r1 = c.r3 = s[0]), (c.r2 = c.r4 = s[1]))
                          : 3 === s.length
                          ? ((c.r1 = s[0]), (c.r2 = c.r4 = s[1]), (c.r3 = s[2]))
                          : ((c.r1 = s[0]), (c.r2 = s[1]), (c.r3 = s[2]), (c.r4 = s[3]))
                        : (c.r1 = c.r2 = c.r3 = c.r4 = s),
                      [
                        ['M ' + (e + c.r1) + ',' + n],
                        ['l ' + (a - c.r1 - c.r2) + ',0'],
                        ['a ' + c.r2 + ',' + c.r2 + ',0,0,1,' + c.r2 + ',' + c.r2],
                        ['l 0,' + (o - c.r2 - c.r3)],
                        ['a ' + c.r3 + ',' + c.r3 + ',0,0,1,' + -c.r3 + ',' + c.r3],
                        ['l ' + (c.r3 + c.r4 - a) + ',0'],
                        ['a ' + c.r4 + ',' + c.r4 + ',0,0,1,' + -c.r4 + ',' + -c.r4],
                        ['l 0,' + (c.r4 + c.r1 - o)],
                        ['a ' + c.r1 + ',' + c.r1 + ',0,0,1,' + c.r1 + ',' + -c.r1],
                        ['z'],
                      ].join(' ')
                    );
                  }),
                  (e._formatPath = function(t) {
                    return ~(t = t
                      .map(function(t) {
                        return t.join(' ');
                      })
                      .join('')).indexOf('NaN')
                      ? ''
                      : t;
                  }),
                  (e._setTransform = function(t) {
                    for (var e = t._attrs.matrix, n = t._cfg.el, r = [], i = 0; i < 9; i += 3)
                      r.push(e[i] + ',' + e[i + 1]);
                    -1 === (r = r.join(',')).indexOf('NaN')
                      ? n.setAttribute('transform', 'matrix(' + r + ')')
                      : console.warn('invalid matrix:', e);
                  }),
                  (e._setImage = function(t, e) {
                    var n = t._attrs,
                      i = t._cfg.el;
                    if (r.isString(e)) i.setAttribute('href', e);
                    else if (e instanceof Image)
                      n.width || (i.setAttribute('width', e.width), (t._attrs.width = e.width)),
                        n.height || (i.setAttribute('height', e.height), (t._attrs.height = e.height)),
                        i.setAttribute('href', e.src);
                    else if (
                      e instanceof HTMLElement &&
                      r.isString(e.nodeName) &&
                      'CANVAS' === e.nodeName.toUpperCase()
                    )
                      i.setAttribute('href', e.toDataURL());
                    else if (e instanceof ImageData) {
                      var a = document.createElement('canvas');
                      a.setAttribute('width', e.width),
                        a.setAttribute('height', e.height),
                        a.getContext('2d').putImageData(e, 0, 0),
                        n.width || (i.setAttribute('width', e.width), (t._attrs.width = e.width)),
                        n.height || (i.setAttribute('height', e.height), (t._attrs.height = e.height)),
                        i.setAttribute('href', a.toDataURL());
                    }
                  }),
                  (e._updateFan = function(t) {
                    function e(t, e, n) {
                      return { x: e * Math.cos(t) + n.x, y: e * Math.sin(t) + n.y };
                    }
                    var n = t._attrs,
                      i = t._cfg,
                      a = { x: n.x, y: n.y },
                      o = [],
                      s = n.startAngle,
                      c = n.endAngle;
                    r.isNumberEqual(c - s, 2 * Math.PI) && (c -= 1e-5);
                    var u = e(s, n.re, a),
                      l = e(c, n.re, a),
                      h = c > s ? 1 : 0,
                      f = Math.abs(c - s) > Math.PI ? 1 : 0,
                      d = n.rs,
                      p = n.re,
                      g = e(s, n.rs, a),
                      v = e(c, n.rs, a);
                    n.rs > 0
                      ? (o.push('M ' + l.x + ',' + l.y),
                        o.push('L ' + v.x + ',' + v.y),
                        o.push('A ' + d + ',' + d + ',0,' + f + ',' + (1 === h ? 0 : 1) + ',' + g.x + ',' + g.y),
                        o.push('L ' + u.x + ' ' + u.y))
                      : (o.push('M ' + a.x + ',' + a.y), o.push('L ' + u.x + ',' + u.y)),
                      o.push('A ' + p + ',' + p + ',0,' + f + ',' + h + ',' + l.x + ',' + l.y),
                      n.rs > 0 ? o.push('L ' + v.x + ',' + v.y) : o.push('Z'),
                      i.el.setAttribute('d', o.join(' '));
                  }),
                  (e._updateText = function(t) {
                    var e = t._attrs,
                      n = t._cfg.attrs,
                      r = t._cfg.el;
                    for (var i in (this._setFont(t), e))
                      if (e[i] !== n[i]) {
                        if ('text' === i) {
                          this._setText(t, '' + e[i]);
                          continue;
                        }
                        if ('fillStyle' === i || 'strokeStyle' === i) {
                          this._setColor(t, i, e[i]);
                          continue;
                        }
                        if ('matrix' === i) {
                          this._setTransform(t);
                          continue;
                        }
                        c[i] && r.setAttribute(c[i], e[i]);
                      }
                    (t._cfg.attrs = Object.assign({}, t._attrs)), (t._cfg.hasUpdate = !1);
                  }),
                  (e._setFont = function(t) {
                    var e = t.get('el'),
                      n = t._attrs,
                      r = n.fontSize;
                    e.setAttribute('alignment-baseline', u[n.textBaseline] || 'baseline'),
                      e.setAttribute('text-anchor', l[n.textAlign] || 'left'),
                      r &&
                        +r < 12 &&
                        ((n.matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
                        t.transform([['t', -n.x, -n.y], ['s', +r / 12, +r / 12], ['t', n.x, n.y]]));
                  }),
                  (e._setText = function(t, e) {
                    var n = t._cfg.el,
                      i = t._attrs.textBaseline || 'bottom';
                    if (e)
                      if (~e.indexOf('\n')) {
                        var a = t._attrs.x,
                          o = e.split('\n'),
                          s = o.length - 1,
                          c = '';
                        r.each(o, function(t, e) {
                          0 === e
                            ? 'alphabetic' === i
                              ? (c += '<tspan x="' + a + '" dy="' + -s + 'em">' + t + '</tspan>')
                              : 'top' === i
                              ? (c += '<tspan x="' + a + '" dy="0.9em">' + t + '</tspan>')
                              : 'middle' === i
                              ? (c += '<tspan x="' + a + '" dy="' + -(s - 1) / 2 + 'em">' + t + '</tspan>')
                              : 'bottom' === i
                              ? (c += '<tspan x="' + a + '" dy="-' + (s + 0.3) + 'em">' + t + '</tspan>')
                              : 'hanging' === i &&
                                (c += '<tspan x="' + a + '" dy="' + (-(s - 1) - 0.3) + 'em">' + t + '</tspan>')
                            : (c += '<tspan x="' + a + '" dy="1em">' + t + '</tspan>');
                        }),
                          (n.innerHTML = c);
                      } else n.innerHTML = e;
                    else n.innerHTML = '';
                  }),
                  (e._setClip = function(t, e) {
                    var n = t._cfg.el;
                    if (e)
                      if (n.hasAttribute('clip-path')) e._cfg.hasUpdate && this._updateShape(e);
                      else {
                        this._createDom(e), this._updateShape(e);
                        var r = this.context.addClip(e);
                        n.setAttribute('clip-path', 'url(#' + r + ')');
                      }
                    else n.removeAttribute('clip-path');
                  }),
                  (e._setColor = function(t, e, n) {
                    var r = t._cfg.el,
                      i = this.context;
                    if (n)
                      if (((n = n.trim()), /^[r,R,L,l]{1}[\s]*\(/.test(n))) {
                        var a = i.find('gradient', n);
                        a || (a = i.addGradient(n)), r.setAttribute(c[e], 'url(#' + a + ')');
                      } else if (/^[p,P]{1}[\s]*\(/.test(n)) {
                        var o = i.find('pattern', n);
                        o || (o = i.addPattern(n)), r.setAttribute(c[e], 'url(#' + o + ')');
                      } else r.setAttribute(c[e], n);
                    else r.setAttribute(c[e], 'none');
                  }),
                  (e._setShadow = function(t) {
                    var e = t._cfg.el,
                      n = t._attrs,
                      r = { dx: n.shadowOffsetX, dy: n.shadowOffsetY, blur: n.shadowBlur, color: n.shadowColor };
                    if (r.dx || r.dy || r.blur || r.color) {
                      var i = this.context.find('filter', r);
                      i || (i = this.context.addShadow(r, this)), e.setAttribute('filter', 'url(#' + i + ')');
                    } else e.removeAttribute('filter');
                  }),
                  t
                );
              })();
            t.exports = h;
          },
          function(t, e, n) {
            t.exports = { painter: n(116), getShape: n(109) };
          },
          function(t, e, n) {
            var r = n(0),
              i = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
              a = /[^\s\,]+/gi,
              o = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,
              s = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,
              c = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,
              u = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
            function l(t, e) {
              var n = t.match(u);
              r.each(n, function(t) {
                (t = t.split(':')), e.addColorStop(t[0], t[1]);
              });
            }
            t.exports = {
              parsePath: function(t) {
                return (
                  (t = t || []),
                  r.isArray(t)
                    ? t
                    : r.isString(t)
                    ? ((t = t.match(i)),
                      r.each(t, function(e, n) {
                        if ((e = e.match(a))[0].length > 1) {
                          var i = e[0].charAt(0);
                          e.splice(1, 0, e[0].substr(1)), (e[0] = i);
                        }
                        r.each(e, function(t, n) {
                          isNaN(t) || (e[n] = +t);
                        }),
                          (t[n] = e);
                      }),
                      t)
                    : void 0
                );
              },
              parseStyle: function(t, e, n) {
                if (r.isString(t)) {
                  if ('(' === t[1] || '(' === t[2]) {
                    if ('l' === t[0])
                      return (function(t, e, n) {
                        var i,
                          a,
                          s = o.exec(t),
                          c = r.mod(r.toRadian(parseFloat(s[1])), 2 * Math.PI),
                          u = s[2],
                          h = e.getBBox();
                        c >= 0 && c < 0.5 * Math.PI
                          ? ((i = { x: h.minX, y: h.minY }), (a = { x: h.maxX, y: h.maxY }))
                          : 0.5 * Math.PI <= c && c < Math.PI
                          ? ((i = { x: h.maxX, y: h.minY }), (a = { x: h.minX, y: h.maxY }))
                          : Math.PI <= c && c < 1.5 * Math.PI
                          ? ((i = { x: h.maxX, y: h.maxY }), (a = { x: h.minX, y: h.minY }))
                          : ((i = { x: h.minX, y: h.maxY }), (a = { x: h.maxX, y: h.minY }));
                        var f = Math.tan(c),
                          d = f * f,
                          p = (a.x - i.x + f * (a.y - i.y)) / (d + 1) + i.x,
                          g = (f * (a.x - i.x + f * (a.y - i.y))) / (d + 1) + i.y,
                          v = n.createLinearGradient(i.x, i.y, p, g);
                        return l(u, v), v;
                      })(t, e, n);
                    if ('r' === t[0])
                      return (function(t, e, n) {
                        var r = s.exec(t),
                          i = parseFloat(r[1]),
                          a = parseFloat(r[2]),
                          o = parseFloat(r[3]),
                          c = r[4];
                        if (0 === o) {
                          var h = c.match(u);
                          return h[h.length - 1].split(':')[1];
                        }
                        var f = e.getBBox(),
                          d = f.maxX - f.minX,
                          p = f.maxY - f.minY,
                          g = Math.sqrt(d * d + p * p) / 2,
                          v = n.createRadialGradient(
                            f.minX + d * i,
                            f.minY + p * a,
                            o * g,
                            f.minX + d / 2,
                            f.minY + p / 2,
                            g,
                          );
                        return l(c, v), v;
                      })(t, e, n);
                    if ('p' === t[0])
                      return (function(t, e, n) {
                        if (e.get('patternSource') && e.get('patternSource') === t) return e.get('pattern');
                        var r,
                          i,
                          a = c.exec(t),
                          o = a[1],
                          s = a[2];
                        function u() {
                          (r = n.createPattern(i, o)), e.setSilent('pattern', r), e.setSilent('patternSource', t);
                        }
                        switch (o) {
                          case 'a':
                            o = 'repeat';
                            break;
                          case 'x':
                            o = 'repeat-x';
                            break;
                          case 'y':
                            o = 'repeat-y';
                            break;
                          case 'n':
                            o = 'no-repeat';
                            break;
                          default:
                            o = 'no-repeat';
                        }
                        return (
                          (i = new Image()),
                          s.match(/^data:/i) || (i.crossOrigin = 'Anonymous'),
                          (i.src = s),
                          i.complete ? u() : ((i.onload = u), (i.src = i.src)),
                          r
                        );
                      })(t, e, n);
                  }
                  return t;
                }
              },
            };
          },
          function(t, e, n) {
            var r = n(0),
              i = n(118),
              a = [
                'fillStyle',
                'font',
                'globalAlpha',
                'lineCap',
                'lineWidth',
                'lineJoin',
                'miterLimit',
                'shadowBlur',
                'shadowColor',
                'shadowOffsetX',
                'shadowOffsetY',
                'strokeStyle',
                'textAlign',
                'textBaseline',
                'lineDash',
                'lineDashOffset',
              ],
              o = (function() {
                function t(t) {
                  if (!t) return null;
                  var e = r.uniqueId('canvas_'),
                    n = r.createDom('<canvas id="' + e + '"></canvas>');
                  return (
                    t.appendChild(n),
                    (this.type = 'canvas'),
                    (this.canvas = n),
                    (this.context = n.getContext('2d')),
                    (this.toDraw = !1),
                    this
                  );
                }
                var e = t.prototype;
                return (
                  (e.beforeDraw = function() {
                    var t = this.canvas;
                    this.context && this.context.clearRect(0, 0, t.width, t.height);
                  }),
                  (e.draw = function(t) {
                    var e = this;
                    e.animateHandler
                      ? (e.toDraw = !0)
                      : (function n() {
                          (e.animateHandler = r.requestAnimationFrame(function() {
                            (e.animateHandler = void 0), e.toDraw && n();
                          })),
                            e.beforeDraw();
                          try {
                            e._drawGroup(t);
                          } catch (t) {
                            console.warn('error in draw canvas, detail as:'), console.warn(t);
                          } finally {
                            e.toDraw = !1;
                          }
                        })();
                  }),
                  (e.drawSync = function(t) {
                    this.beforeDraw(), this._drawGroup(t);
                  }),
                  (e._drawGroup = function(t) {
                    if (!t._cfg.removed && !t._cfg.destroyed && t._cfg.visible) {
                      var e = t._cfg.children,
                        n = null;
                      this.setContext(t);
                      for (var r = 0; r < e.length; r++)
                        (n = e[r]), e[r].isGroup ? this._drawGroup(n) : this._drawShape(n);
                      this.restoreContext(t);
                    }
                  }),
                  (e._drawShape = function(t) {
                    t._cfg.removed ||
                      t._cfg.destroyed ||
                      !t._cfg.visible ||
                      (this.setContext(t),
                      t.drawInner(this.context),
                      this.restoreContext(t),
                      (t._cfg.attrs = t._attrs),
                      (t._cfg.hasUpdate = !1));
                  }),
                  (e.setContext = function(t) {
                    var e = this.context,
                      n = t._attrs.clip;
                    e.save(),
                      n && (n.resetTransform(e), n.createPath(e), e.clip()),
                      this.resetContext(t),
                      t.resetTransform(e);
                  }),
                  (e.restoreContext = function() {
                    this.context.restore();
                  }),
                  (e.resetContext = function(t) {
                    var e = this.context,
                      n = t._attrs;
                    if (!t.isGroup)
                      for (var o in n)
                        if (a.indexOf(o) > -1) {
                          var s = n[o];
                          'fillStyle' === o && (s = i.parseStyle(s, t, e)),
                            'strokeStyle' === o && (s = i.parseStyle(s, t, e)),
                            'lineDash' === o && e.setLineDash
                              ? r.isArray(s)
                                ? e.setLineDash(s)
                                : r.isString(s) && e.setLineDash(s.split(' '))
                              : (e[o] = s);
                        }
                  }),
                  t
                );
              })();
            t.exports = o;
          },
          function(t, e, n) {
            t.exports = { painter: n(119) };
          },
          function(t, e, n) {
            t.exports = { canvas: n(120), svg: n(117) };
          },
          function(t, e, n) {
            var r = n(0),
              i = n(32),
              a = n(75),
              o = n(76),
              s = n(77),
              c = s.interpolate,
              u = s.interpolateArray,
              l = function(t) {
                (this._animators = []), (this._current = 0), (this._timer = null), (this.canvas = t);
              };
            function h(t, e, n) {
              var a,
                s = e.startTime;
              if (n < s + e.delay || e.isPaused) return !1;
              var l = e.duration,
                h = e.easing;
              if (((n = n - s - e.delay), e.repeat)) (a = (n % l) / l), (a = o[h](a));
              else {
                if (!((a = n / l) < 1)) {
                  var f = e.toAttrs || e.onFrame(1);
                  return t.attr(f), e.toMatrix && t.setMatrix(e.toMatrix), !0;
                }
                a = o[h](a);
              }
              if (e.onFrame) {
                var d = e.onFrame(a);
                t.attr(d);
              } else
                !(function(t, e, n) {
                  var a = {},
                    o = e.toAttrs,
                    s = e.fromAttrs,
                    l = e.toMatrix;
                  if (!t.get('destroyed')) {
                    var h;
                    for (var f in o)
                      if (!r.isEqual(s[f], o[f]))
                        if ('path' === f) {
                          var d = o[f],
                            p = s[f];
                          d.length > p.length
                            ? ((d = i.parsePathString(o[f])),
                              (p = i.parsePathString(s[f])),
                              (p = i.fillPathByDiff(p, d)),
                              (p = i.formatPath(p, d)),
                              (e.fromAttrs.path = p),
                              (e.toAttrs.path = d))
                            : e.pathFormatted ||
                              ((d = i.parsePathString(o[f])),
                              (p = i.parsePathString(s[f])),
                              (p = i.formatPath(p, d)),
                              (e.fromAttrs.path = p),
                              (e.toAttrs.path = d),
                              (e.pathFormatted = !0)),
                            (a[f] = []);
                          for (var g = 0; g < d.length; g++) {
                            for (var v = d[g], m = p[g], y = [], x = 0; x < v.length; x++)
                              r.isNumber(v[x]) && m && r.isNumber(m[x])
                                ? ((h = c(m[x], v[x])), y.push(h(n)))
                                : y.push(v[x]);
                            a[f].push(y);
                          }
                        } else (h = c(s[f], o[f])), (a[f] = h(n));
                    if (l) {
                      var b = u(e.fromMatrix, l)(n);
                      t.setMatrix(b);
                    }
                    t.attr(a);
                  }
                })(t, e, a);
              return !1;
            }
            r.augment(l, {
              initTimer: function() {
                var t,
                  e,
                  n,
                  r = this,
                  i = this;
                i._timer = a.timer(function(a) {
                  if (((i._current = a), r._animators.length > 0)) {
                    for (var o = r._animators.length - 1; o >= 0; o--)
                      if ((t = r._animators[o]).get('destroyed')) i.removeAnimator(o);
                      else {
                        if (!t.get('pause').isPaused)
                          for (var s = (e = t.get('animators')).length - 1; s >= 0; s--)
                            (n = e[s]), h(t, n, a) && (e.splice(s, 1), n.callback && n.callback());
                        0 === e.length && i.removeAnimator(o);
                      }
                    r.canvas.draw();
                  }
                });
              },
              addAnimator: function(t) {
                this._animators.push(t);
              },
              removeAnimator: function(t) {
                this._animators.splice(t, 1);
              },
              isAnimating: function() {
                return !!this._animators.length;
              },
              stop: function() {
                this._timer && this._timer.stop();
              },
              stopAllAnimations: function() {
                this._animators.forEach(function(t) {
                  t.stopAnimate();
                }),
                  (this._animators = []),
                  this.canvas.draw();
              },
              getTime: function() {
                return this._current;
              },
            }),
              (t.exports = l);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(35),
              a = { arc: n(25), ellipse: n(60), line: n(26) },
              o = r.createDom('<canvas width="500" height="500"></canvas>').getContext('2d');
            function s(t, e, n) {
              return n.createPath(o), o.isPointInPath(t, e);
            }
            var c = {
              arc: function(t, e) {
                var n = this._attrs,
                  r = n.x,
                  a = n.y,
                  o = n.r,
                  s = n.startAngle,
                  c = n.endAngle,
                  u = n.clockwise,
                  l = this.getHitLineWidth();
                return !!this.hasStroke() && i.arcline(r, a, o, s, c, u, l, t, e);
              },
              circle: function(t, e) {
                var n = this._attrs,
                  r = n.x,
                  a = n.y,
                  o = n.r,
                  s = this.getHitLineWidth(),
                  c = this.hasFill(),
                  u = this.hasStroke();
                return c && u
                  ? i.circle(r, a, o, t, e) || i.arcline(r, a, o, 0, 2 * Math.PI, !1, s, t, e)
                  : c
                  ? i.circle(r, a, o, t, e)
                  : !!u && i.arcline(r, a, o, 0, 2 * Math.PI, !1, s, t, e);
              },
              dom: function(t, e) {
                if (!this._cfg.el) return !1;
                var n = this._cfg.el.getBBox();
                return i.box(n.x, n.x + n.width, n.y, n.y + n.height, t, e);
              },
              ellipse: function(t, e) {
                var n = this._attrs,
                  a = this.hasFill(),
                  o = this.hasStroke(),
                  s = n.x,
                  c = n.y,
                  u = n.rx,
                  l = n.ry,
                  h = this.getHitLineWidth(),
                  f = u > l ? u : l,
                  d = u > l ? 1 : u / l,
                  p = u > l ? l / u : 1,
                  g = [t, e, 1],
                  v = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                r.mat3.scale(v, v, [d, p]), r.mat3.translate(v, v, [s, c]);
                var m = r.mat3.invert([], v);
                return (
                  r.vec3.transformMat3(g, g, m),
                  a && o
                    ? i.circle(0, 0, f, g[0], g[1]) || i.arcline(0, 0, f, 0, 2 * Math.PI, !1, h, g[0], g[1])
                    : a
                    ? i.circle(0, 0, f, g[0], g[1])
                    : !!o && i.arcline(0, 0, f, 0, 2 * Math.PI, !1, h, g[0], g[1])
                );
              },
              fan: function(t, e) {
                var n = this,
                  o = n.hasFill(),
                  s = n.hasStroke(),
                  c = n._attrs,
                  u = c.x,
                  l = c.y,
                  h = c.rs,
                  f = c.re,
                  d = c.startAngle,
                  p = c.endAngle,
                  g = c.clockwise,
                  v = [t - u, e - l],
                  m = r.vec2.angleTo([1, 0], v);
                function y() {
                  var t = a.arc.nearAngle(m, d, p, g);
                  if (r.isNumberEqual(m, t)) {
                    var e = r.vec2.squaredLength(v);
                    if (h * h <= e && e <= f * f) return !0;
                  }
                  return !1;
                }
                function x() {
                  var r = n.getHitLineWidth(),
                    a = { x: Math.cos(d) * h + u, y: Math.sin(d) * h + l },
                    o = { x: Math.cos(d) * f + u, y: Math.sin(d) * f + l },
                    s = { x: Math.cos(p) * h + u, y: Math.sin(p) * h + l },
                    c = { x: Math.cos(p) * f + u, y: Math.sin(p) * f + l };
                  return !!(
                    i.line(a.x, a.y, o.x, o.y, r, t, e) ||
                    i.line(s.x, s.y, c.x, c.y, r, t, e) ||
                    i.arcline(u, l, h, d, p, g, r, t, e) ||
                    i.arcline(u, l, f, d, p, g, r, t, e)
                  );
                }
                return o && s ? y() || x() : o ? y() : !!s && x();
              },
              image: function(t, e) {
                var n = this._attrs;
                if (this.get('toDraw') || !n.img) return !1;
                (this._cfg.attrs && this._cfg.attrs.img === n.img) || this._setAttrImg();
                var r = n.x,
                  a = n.y,
                  o = n.width,
                  s = n.height;
                return i.rect(r, a, o, s, t, e);
              },
              line: function(t, e) {
                var n = this._attrs,
                  r = n.x1,
                  a = n.y1,
                  o = n.x2,
                  s = n.y2,
                  c = this.getHitLineWidth();
                return !!this.hasStroke() && i.line(r, a, o, s, c, t, e);
              },
              path: function(t, e) {
                var n = this,
                  i = n.get('segments'),
                  a = n.hasFill(),
                  o = n.hasStroke();
                function c() {
                  if (!r.isEmpty(i)) {
                    for (var a = n.getHitLineWidth(), o = 0, s = i.length; o < s; o++)
                      if (i[o].isInside(t, e, a)) return !0;
                    return !1;
                  }
                }
                return a && o ? s(t, e, n) || c() : a ? s(t, e, n) : !!o && c();
              },
              marker: function(t, e) {
                var n = this._attrs,
                  r = n.x,
                  a = n.y,
                  o = n.radius || n.r,
                  s = this.getHitLineWidth();
                return i.circle(r, a, o + s / 2, t, e);
              },
              polygon: function(t, e) {
                var n = this,
                  r = n.hasFill(),
                  a = n.hasStroke();
                function o() {
                  var r = n._attrs.points;
                  if (r.length < 2) return !1;
                  var a = n.getHitLineWidth(),
                    o = r.slice(0);
                  return r.length >= 3 && o.push(r[0]), i.polyline(o, a, t, e);
                }
                return r && a ? s(t, e, n) || o() : r ? s(t, e, n) : !!a && o();
              },
              polyline: function(t, e) {
                var n = this._attrs;
                if (this.hasStroke()) {
                  var r = n.points;
                  if (r.length < 2) return !1;
                  var a = n.lineWidth;
                  return i.polyline(r, a, t, e);
                }
                return !1;
              },
              rect: function(t, e) {
                var n = this,
                  r = n.hasFill(),
                  a = n.hasStroke();
                function o() {
                  var r = n._attrs,
                    a = r.x,
                    o = r.y,
                    s = r.width,
                    c = r.height,
                    u = r.radius,
                    l = n.getHitLineWidth();
                  if (0 === u) {
                    var h = l / 2;
                    return (
                      i.line(a - h, o, a + s + h, o, l, t, e) ||
                      i.line(a + s, o - h, a + s, o + c + h, l, t, e) ||
                      i.line(a + s + h, o + c, a - h, o + c, l, t, e) ||
                      i.line(a, o + c + h, a, o - h, l, t, e)
                    );
                  }
                  return (
                    i.line(a + u, o, a + s - u, o, l, t, e) ||
                    i.line(a + s, o + u, a + s, o + c - u, l, t, e) ||
                    i.line(a + s - u, o + c, a + u, o + c, l, t, e) ||
                    i.line(a, o + c - u, a, o + u, l, t, e) ||
                    i.arcline(a + s - u, o + u, u, 1.5 * Math.PI, 2 * Math.PI, !1, l, t, e) ||
                    i.arcline(a + s - u, o + c - u, u, 0, 0.5 * Math.PI, !1, l, t, e) ||
                    i.arcline(a + u, o + c - u, u, 0.5 * Math.PI, Math.PI, !1, l, t, e) ||
                    i.arcline(a + u, o + u, u, Math.PI, 1.5 * Math.PI, !1, l, t, e)
                  );
                }
                return r && a ? s(t, e, n) || o() : r ? s(t, e, n) : !!a && o();
              },
              text: function(t, e) {
                var n = this.getBBox();
                if (this.hasFill() || this.hasStroke()) return i.box(n.minX, n.maxX, n.minY, n.maxY, t, e);
              },
            };
            t.exports = {
              isPointInPath: function(t, e) {
                var n = c[this.type];
                return !!n && n.call(this, t, e);
              },
            };
          },
          function(t, e, n) {
            var r = n(4);
            (r.Arc = n(59)),
              (r.Circle = n(58)),
              (r.Dom = n(57)),
              (r.Ellipse = n(56)),
              (r.Fan = n(55)),
              (r.Image = n(54)),
              (r.Line = n(53)),
              (r.Marker = n(33)),
              (r.Path = n(52)),
              (r.Polygon = n(51)),
              (r.Polyline = n(50)),
              (r.Rect = n(49)),
              (r.Text = n(48)),
              (t.exports = r);
          },
          function(t, e, n) {
            var r = n(0),
              i = n(27),
              a = n(62),
              o = [
                'click',
                'mousedown',
                'mouseup',
                'dblclick',
                'contextmenu',
                'mouseout',
                'mouseover',
                'mousemove',
                'dragstart',
                'drag',
                'dragend',
                'dragenter',
                'dragleave',
                'drop',
              ],
              s = function() {};
            r.augment(s, a, {
              emit: function(t, e) {
                var n = arguments;
                if (
                  (a.prototype.emit.apply(this, n),
                  !(n.length >= 2 && n[1] instanceof i && n[1].propagationStopped) &&
                    o.indexOf(t) >= 0 &&
                    e.target === this)
                )
                  for (var r = this._cfg.parent; r && !r.get('destroyed'); ) r.emit.apply(r, n), (r = r._cfg.parent);
              },
            }),
              (t.exports = s);
          },
          function(t, e, n) {
            function r() {
              return (r =
                Object.assign ||
                function(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                  }
                  return t;
                }).apply(this, arguments);
            }
            var i = n(0),
              a = { delay: 'delay', repeat: 'repeat', rotate: 'rotate' },
              o = { fill: 'fill', stroke: 'stroke', fillStyle: 'fillStyle', strokeStyle: 'strokeStyle' };
            t.exports = {
              animate: function(t, e, n, s, c) {
                void 0 === c && (c = 0), this.set('animating', !0);
                var u = this.get('timeline');
                u || ((u = this.get('canvas').get('timeline')), this.setSilent('timeline', u));
                var l = this.get('animators') || [];
                u._timer || u.initTimer(),
                  i.isNumber(s) && ((c = s), (s = null)),
                  i.isFunction(n) ? ((s = n), (n = 'easeLinear')) : (n = n || 'easeLinear');
                var h = {
                  repeat: t.repeat,
                  duration: e,
                  easing: n,
                  callback: s,
                  delay: c,
                  startTime: u.getTime(),
                  id: i.uniqueId(),
                };
                if (t.onFrame) h.onFrame = t.onFrame;
                else {
                  var f = (function(t, e) {
                    var n = { matrix: null, attrs: {} },
                      r = e._attrs;
                    for (var s in t)
                      if ('transform' === s) n.matrix = i.transform(e.getMatrix(), t[s]);
                      else if ('matrix' === s) n.matrix = t[s];
                      else {
                        if (o[s] && /^[r,R,L,l]{1}[\s]*\(/.test(t[s])) continue;
                        a[s] ||
                          r[s] === t[s] ||
                          ('rotate' === s && (e._attrs.rotate = e._attrs.rotate || 0), (n.attrs[s] = t[s]));
                      }
                    return n;
                  })(t, this);
                  h = r(
                    {
                      fromAttrs: (function(t, e) {
                        var n = {},
                          r = e._attrs;
                        for (var i in t.attrs) n[i] = r[i];
                        return n;
                      })(f, this),
                      toAttrs: f.attrs,
                      fromMatrix: i.clone(this.getMatrix()),
                      toMatrix: f.matrix,
                    },
                    h,
                  );
                }
                l.length > 0
                  ? (l = (function(t, e) {
                      if (e.onFrame) return t;
                      var n = e.delay,
                        r = Object.prototype.hasOwnProperty;
                      return (
                        i.each(e.toAttrs, function(e, a) {
                          i.each(t, function(t) {
                            n < t.startTime + t.duration &&
                              r.call(t.toAttrs, a) &&
                              (delete t.toAttrs[a], delete t.fromAttrs[a]);
                          });
                        }),
                        e.toMatrix &&
                          i.each(t, function(t) {
                            n < t.startTime + t.duration && t.toMatrix && delete t.toMatrix;
                          }),
                        t
                      );
                    })(l, h))
                  : u.addAnimator(this),
                  l.push(h),
                  this.setSilent('animators', l),
                  this.setSilent('pause', { isPaused: !1 });
              },
              stopAnimate: function() {
                var t = this,
                  e = this.get('animators');
                i.each(e, function(e) {
                  t.attr(e.toAttrs || e.onFrame(1)),
                    e.toMatrix && t.attr('matrix', e.toMatrix),
                    e.callback && e.callback();
                }),
                  this.setSilent('animating', !1),
                  this.setSilent('animators', []);
              },
              pauseAnimate: function() {
                var t = this.get('timeline');
                return this.setSilent('pause', { isPaused: !0, pauseTime: t.getTime() }), this;
              },
              resumeAnimate: function() {
                var t = this.get('timeline').getTime(),
                  e = this.get('animators'),
                  n = this.get('pause').pauseTime;
                return (
                  i.each(e, function(e) {
                    (e.startTime = e.startTime + (t - n)), (e._paused = !1), (e._pauseTime = null);
                  }),
                  this.setSilent('pause', { isPaused: !1 }),
                  this.setSilent('animators', e),
                  this
                );
              },
            };
          },
          function(t, e, n) {
            var r = n(0);
            function i(t) {
              return 1 === t[0] && 0 === t[1] && 0 === t[3] && 1 === t[4] && 0 === t[6] && 0 === t[7];
            }
            function a(t) {
              return 0 === t[1] && 0 === t[3] && 0 === t[6] && 0 === t[7];
            }
            function o(t, e) {
              i(e) || (a(e) ? ((t[0] *= e[0]), (t[4] *= e[4])) : r.mat3.multiply(t, t, e));
            }
            t.exports = {
              initTransform: function() {},
              resetMatrix: function() {
                this.attr('matrix', [1, 0, 0, 0, 1, 0, 0, 0, 1]);
              },
              translate: function(t, e) {
                var n = this._attrs.matrix;
                return r.mat3.translate(n, n, [t, e]), this.clearTotalMatrix(), this.attr('matrix', n), this;
              },
              rotate: function(t) {
                var e = this._attrs.matrix;
                return r.mat3.rotate(e, e, t), this.clearTotalMatrix(), this.attr('matrix', e), this;
              },
              scale: function(t, e) {
                var n = this._attrs.matrix;
                return r.mat3.scale(n, n, [t, e]), this.clearTotalMatrix(), this.attr('matrix', n), this;
              },
              rotateAtStart: function(t) {
                var e = this._attrs.x || this._cfg.attrs.x,
                  n = this._attrs.y || this._cfg.attrs.y;
                return (
                  Math.abs(t) > 2 * Math.PI && (t = (t / 180) * Math.PI),
                  this.transform([['t', -e, -n], ['r', t], ['t', e, n]])
                );
              },
              move: function(t, e) {
                var n = this.get('x') || 0,
                  r = this.get('y') || 0;
                return this.translate(t - n, e - r), this.set('x', t), this.set('y', e), this;
              },
              transform: function(t) {
                var e = this,
                  n = this._attrs.matrix;
                return (
                  r.each(t, function(t) {
                    switch (t[0]) {
                      case 't':
                        e.translate(t[1], t[2]);
                        break;
                      case 's':
                        e.scale(t[1], t[2]);
                        break;
                      case 'r':
                        e.rotate(t[1]);
                        break;
                      case 'm':
                        e.attr('matrix', r.mat3.multiply([], n, t[1])), e.clearTotalMatrix();
                    }
                  }),
                  e
                );
              },
              setTransform: function(t) {
                return this.attr('matrix', [1, 0, 0, 0, 1, 0, 0, 0, 1]), this.transform(t);
              },
              getMatrix: function() {
                return this.attr('matrix');
              },
              setMatrix: function(t) {
                return this.attr('matrix', t), this.clearTotalMatrix(), this;
              },
              apply: function(t, e) {
                var n;
                return (n = e ? this._getMatrixByRoot(e) : this.attr('matrix')), r.vec3.transformMat3(t, t, n), this;
              },
              _getMatrixByRoot: function(t) {
                t = t || this;
                for (var e = this, n = []; e !== t; ) n.unshift(e), (e = e.get('parent'));
                n.unshift(e);
                var i = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                return (
                  r.each(n, function(t) {
                    r.mat3.multiply(i, t.attr('matrix'), i);
                  }),
                  i
                );
              },
              getTotalMatrix: function() {
                var t = this._cfg.totalMatrix;
                if (!t) {
                  t = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                  var e = this._cfg.parent;
                  e && o(t, e.getTotalMatrix()), o(t, this.attr('matrix')), (this._cfg.totalMatrix = t);
                }
                return t;
              },
              clearTotalMatrix: function() {},
              invert: function(t) {
                var e = this.getTotalMatrix();
                if (a(e)) (t[0] /= e[0]), (t[1] /= e[4]);
                else {
                  var n = r.mat3.invert([], e);
                  n && r.vec3.transformMat3(t, t, n);
                }
                return this;
              },
              resetTransform: function(t) {
                var e = this.attr('matrix');
                i(e) || t.transform(e[0], e[1], e[3], e[4], e[6], e[7]);
              },
            };
          },
          function(t, e, n) {
            var r = n(0);
            t.exports = {
              canFill: !1,
              canStroke: !1,
              initAttrs: function(t) {
                return (
                  (this._attrs = { opacity: 1, fillOpacity: 1, strokeOpacity: 1, matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1] }),
                  this.attr(r.assign(this.getDefaultAttrs(), t)),
                  this
                );
              },
              getDefaultAttrs: function() {
                return {};
              },
              attr: function(t, e) {
                if (0 === arguments.length) return this._attrs;
                if (r.isObject(t)) {
                  for (var n in t) this._setAttr(n, t[n]);
                  return this.clearBBox(), (this._cfg.hasUpdate = !0), this;
                }
                return 2 === arguments.length
                  ? (this._setAttr(t, e), this.clearBBox(), (this._cfg.hasUpdate = !0), this)
                  : this._attrs[t];
              },
              _setAttr: function(t, e) {
                var n = this._attrs;
                (n[t] = e),
                  'fill' !== t && 'stroke' !== t
                    ? 'opacity' !== t
                      ? 'clip' === t && e
                        ? this._setClip(e)
                        : 'path' === t && this._afterSetAttrPath
                        ? this._afterSetAttrPath(e)
                        : 'transform' !== t
                        ? 'rotate' === t && this.rotateAtStart(e)
                        : this.transform(e)
                      : (n.globalAlpha = e)
                    : (n[t + 'Style'] = e);
              },
              clearBBox: function() {
                this.setSilent('box', null);
              },
              hasFill: function() {
                return this.canFill && this._attrs.fillStyle;
              },
              hasStroke: function() {
                return this.canStroke && this._attrs.strokeStyle;
              },
              _setClip: function(t) {
                (t._cfg.renderer = this._cfg.renderer),
                  (t._cfg.canvas = this._cfg.canvas),
                  (t._cfg.parent = this._cfg.parent),
                  (t.hasFill = function() {
                    return !0;
                  });
              },
            };
          },
          function(t, e, n) {
            var r = n(0),
              i = n(27),
              a = [
                'mousedown',
                'mouseup',
                'dblclick',
                'mouseenter',
                'mouseout',
                'mouseover',
                'mousemove',
                'mouseleave',
              ],
              o = null,
              s = null,
              c = {},
              u = null,
              l = null;
            t.exports = {
              registerEvent: function() {
                var t = this,
                  e = this.get('el');
                r.each(a, function(n) {
                  e.addEventListener(
                    n,
                    function(e) {
                      t._triggerEvent(n, e);
                    },
                    !1,
                  );
                }),
                  e.addEventListener(
                    'touchstart',
                    function(e) {
                      r.isEmpty(e.touches) || t._triggerEvent('touchstart', e.touches[0]);
                    },
                    !1,
                  ),
                  e.addEventListener(
                    'touchmove',
                    function(e) {
                      r.isEmpty(e.touches) || t._triggerEvent('touchmove', e.touches[0]);
                    },
                    !1,
                  ),
                  e.addEventListener(
                    'touchend',
                    function(e) {
                      r.isEmpty(e.changedTouches) || t._triggerEvent('touchend', e.changedTouches[0]);
                    },
                    !1,
                  ),
                  e.addEventListener(
                    'contextmenu',
                    function(e) {
                      t._triggerEvent('contextmenu', e), e.preventDefault();
                    },
                    !1,
                  );
              },
              _getEmitter: function(t, e) {
                if (t) {
                  if (!r.isEmpty(t._getEvents())) return t;
                  var n = t.get('parent');
                  if (n && !e.propagationStopped) return this._getEmitter(n, e);
                }
              },
              _getEventObj: function(t, e, n, r) {
                var a = new i(t, e, !0, !0);
                return (
                  (a.x = n.x),
                  (a.y = n.y),
                  (a.clientX = e.clientX),
                  (a.clientY = e.clientY),
                  (a.currentTarget = r),
                  (a.target = r),
                  a
                );
              },
              _triggerEvent: function(t, e) {
                var n = this.getPointByClient(e.clientX, e.clientY),
                  r = this.getShape(n.x, n.y, e),
                  i = this.get('el');
                if ((u && 'svg' === this.getRenderer() && (r = this.getShape(n.x, n.y)), 'mousemove' === t)) {
                  if (
                    (o &&
                      o !== r &&
                      (this._emitEvent('mouseout', e, n, o),
                      this._emitEvent('mouseleave', e, n, o),
                      u && this._emitEvent('dragleave', e, n, o),
                      (r && !r.destroyed) || (i.style.cursor = 'default')),
                    u && (this._emitEvent('drag', e, n, u), this._emitEvent('mousemove', e, n, r)),
                    r)
                  )
                    u ||
                      (s === r
                        ? ((u = r), (s = null), this._emitEvent('dragstart', e, n, r))
                        : this._emitEvent('mousemove', e, n, r)),
                      o !== r &&
                        (this._emitEvent('mouseenter', e, n, r),
                        this._emitEvent('mouseover', e, n, r),
                        u && this._emitEvent('dragenter', e, n, r));
                  else {
                    var a = this._getEventObj('mousemove', e, n, this);
                    this.emit('mousemove', a);
                  }
                  o = r;
                } else if (
                  (this._emitEvent(t, e, n, r || this),
                  u || 'mousedown' !== t || 0 !== e.button || ((s = r), (c = { x: e.clientX, y: e.clientY })),
                  'mouseup' === t && 0 === e.button)
                ) {
                  var h = c.x - e.clientX,
                    f = c.y - e.clientY;
                  h * h + f * f < 40 && (clearTimeout(l), (l = null), this._emitEvent('click', e, n, s || this)),
                    u &&
                      ((u._cfg.capture = !0),
                      this._emitEvent('dragend', e, n, u),
                      (u = null),
                      this._emitEvent('drop', e, n, r || this)),
                    (s = null);
                }
                r && !r.get('destroyed') && (i.style.cursor = r.attr('cursor') || 'default');
              },
              _emitEvent: function(t, e, n, r) {
                var i = this._getEventObj(t, e, n, r),
                  a = this._getEmitter(r, e);
                return a && !a.get('destroyed') && a.emit(t, i), a;
              },
            };
          },
          function(t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.forEach = e.sqrLen = e.len = e.sqrDist = e.dist = e.div = e.mul = e.sub = void 0),
              (e.create = i),
              (e.clone = function(t) {
                var e = new r.ARRAY_TYPE(3);
                return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
              }),
              (e.length = a),
              (e.fromValues = o),
              (e.copy = function(t, e) {
                return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
              }),
              (e.set = function(t, e, n, r) {
                return (t[0] = e), (t[1] = n), (t[2] = r), t;
              }),
              (e.add = function(t, e, n) {
                return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), (t[2] = e[2] + n[2]), t;
              }),
              (e.subtract = s),
              (e.multiply = c),
              (e.divide = u),
              (e.ceil = function(t, e) {
                return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), (t[2] = Math.ceil(e[2])), t;
              }),
              (e.floor = function(t, e) {
                return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), (t[2] = Math.floor(e[2])), t;
              }),
              (e.min = function(t, e, n) {
                return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), (t[2] = Math.min(e[2], n[2])), t;
              }),
              (e.max = function(t, e, n) {
                return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), (t[2] = Math.max(e[2], n[2])), t;
              }),
              (e.round = function(t, e) {
                return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), (t[2] = Math.round(e[2])), t;
              }),
              (e.scale = function(t, e, n) {
                return (t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t;
              }),
              (e.scaleAndAdd = function(t, e, n, r) {
                return (t[0] = e[0] + n[0] * r), (t[1] = e[1] + n[1] * r), (t[2] = e[2] + n[2] * r), t;
              }),
              (e.distance = l),
              (e.squaredDistance = h),
              (e.squaredLength = f),
              (e.negate = function(t, e) {
                return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
              }),
              (e.inverse = function(t, e) {
                return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t;
              }),
              (e.normalize = d),
              (e.dot = p),
              (e.cross = function(t, e, n) {
                var r = e[0],
                  i = e[1],
                  a = e[2],
                  o = n[0],
                  s = n[1],
                  c = n[2];
                return (t[0] = i * c - a * s), (t[1] = a * o - r * c), (t[2] = r * s - i * o), t;
              }),
              (e.lerp = function(t, e, n, r) {
                var i = e[0],
                  a = e[1],
                  o = e[2];
                return (t[0] = i + r * (n[0] - i)), (t[1] = a + r * (n[1] - a)), (t[2] = o + r * (n[2] - o)), t;
              }),
              (e.hermite = function(t, e, n, r, i, a) {
                var o = a * a,
                  s = o * (2 * a - 3) + 1,
                  c = o * (a - 2) + a,
                  u = o * (a - 1),
                  l = o * (3 - 2 * a);
                return (
                  (t[0] = e[0] * s + n[0] * c + r[0] * u + i[0] * l),
                  (t[1] = e[1] * s + n[1] * c + r[1] * u + i[1] * l),
                  (t[2] = e[2] * s + n[2] * c + r[2] * u + i[2] * l),
                  t
                );
              }),
              (e.bezier = function(t, e, n, r, i, a) {
                var o = 1 - a,
                  s = o * o,
                  c = a * a,
                  u = s * o,
                  l = 3 * a * s,
                  h = 3 * c * o,
                  f = c * a;
                return (
                  (t[0] = e[0] * u + n[0] * l + r[0] * h + i[0] * f),
                  (t[1] = e[1] * u + n[1] * l + r[1] * h + i[1] * f),
                  (t[2] = e[2] * u + n[2] * l + r[2] * h + i[2] * f),
                  t
                );
              }),
              (e.random = function(t, e) {
                e = e || 1;
                var n = 2 * r.RANDOM() * Math.PI,
                  i = 2 * r.RANDOM() - 1,
                  a = Math.sqrt(1 - i * i) * e;
                return (t[0] = Math.cos(n) * a), (t[1] = Math.sin(n) * a), (t[2] = i * e), t;
              }),
              (e.transformMat4 = function(t, e, n) {
                var r = e[0],
                  i = e[1],
                  a = e[2],
                  o = n[3] * r + n[7] * i + n[11] * a + n[15];
                return (
                  (o = o || 1),
                  (t[0] = (n[0] * r + n[4] * i + n[8] * a + n[12]) / o),
                  (t[1] = (n[1] * r + n[5] * i + n[9] * a + n[13]) / o),
                  (t[2] = (n[2] * r + n[6] * i + n[10] * a + n[14]) / o),
                  t
                );
              }),
              (e.transformMat3 = function(t, e, n) {
                var r = e[0],
                  i = e[1],
                  a = e[2];
                return (
                  (t[0] = r * n[0] + i * n[3] + a * n[6]),
                  (t[1] = r * n[1] + i * n[4] + a * n[7]),
                  (t[2] = r * n[2] + i * n[5] + a * n[8]),
                  t
                );
              }),
              (e.transformQuat = function(t, e, n) {
                var r = n[0],
                  i = n[1],
                  a = n[2],
                  o = n[3],
                  s = e[0],
                  c = e[1],
                  u = e[2],
                  l = i * u - a * c,
                  h = a * s - r * u,
                  f = r * c - i * s,
                  d = i * f - a * h,
                  p = a * l - r * f,
                  g = r * h - i * l,
                  v = 2 * o;
                return (
                  (l *= v),
                  (h *= v),
                  (f *= v),
                  (d *= 2),
                  (p *= 2),
                  (g *= 2),
                  (t[0] = s + l + d),
                  (t[1] = c + h + p),
                  (t[2] = u + f + g),
                  t
                );
              }),
              (e.rotateX = function(t, e, n, r) {
                var i = [],
                  a = [];
                return (
                  (i[0] = e[0] - n[0]),
                  (i[1] = e[1] - n[1]),
                  (i[2] = e[2] - n[2]),
                  (a[0] = i[0]),
                  (a[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r)),
                  (a[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r)),
                  (t[0] = a[0] + n[0]),
                  (t[1] = a[1] + n[1]),
                  (t[2] = a[2] + n[2]),
                  t
                );
              }),
              (e.rotateY = function(t, e, n, r) {
                var i = [],
                  a = [];
                return (
                  (i[0] = e[0] - n[0]),
                  (i[1] = e[1] - n[1]),
                  (i[2] = e[2] - n[2]),
                  (a[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r)),
                  (a[1] = i[1]),
                  (a[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r)),
                  (t[0] = a[0] + n[0]),
                  (t[1] = a[1] + n[1]),
                  (t[2] = a[2] + n[2]),
                  t
                );
              }),
              (e.rotateZ = function(t, e, n, r) {
                var i = [],
                  a = [];
                return (
                  (i[0] = e[0] - n[0]),
                  (i[1] = e[1] - n[1]),
                  (i[2] = e[2] - n[2]),
                  (a[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r)),
                  (a[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r)),
                  (a[2] = i[2]),
                  (t[0] = a[0] + n[0]),
                  (t[1] = a[1] + n[1]),
                  (t[2] = a[2] + n[2]),
                  t
                );
              }),
              (e.angle = function(t, e) {
                var n = o(t[0], t[1], t[2]),
                  r = o(e[0], e[1], e[2]);
                d(n, n), d(r, r);
                var i = p(n, r);
                return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i);
              }),
              (e.str = function(t) {
                return 'vec3(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')';
              }),
              (e.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
              }),
              (e.equals = function(t, e) {
                var n = t[0],
                  i = t[1],
                  a = t[2],
                  o = e[0],
                  s = e[1],
                  c = e[2];
                return (
                  Math.abs(n - o) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) &&
                  Math.abs(i - s) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) &&
                  Math.abs(a - c) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(c))
                );
              });
            var r = (function(t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return (e.default = t), e;
            })(n(36));
            function i() {
              var t = new r.ARRAY_TYPE(3);
              return r.ARRAY_TYPE != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t;
            }
            function a(t) {
              var e = t[0],
                n = t[1],
                r = t[2];
              return Math.sqrt(e * e + n * n + r * r);
            }
            function o(t, e, n) {
              var i = new r.ARRAY_TYPE(3);
              return (i[0] = t), (i[1] = e), (i[2] = n), i;
            }
            function s(t, e, n) {
              return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), (t[2] = e[2] - n[2]), t;
            }
            function c(t, e, n) {
              return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), (t[2] = e[2] * n[2]), t;
            }
            function u(t, e, n) {
              return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), (t[2] = e[2] / n[2]), t;
            }
            function l(t, e) {
              var n = e[0] - t[0],
                r = e[1] - t[1],
                i = e[2] - t[2];
              return Math.sqrt(n * n + r * r + i * i);
            }
            function h(t, e) {
              var n = e[0] - t[0],
                r = e[1] - t[1],
                i = e[2] - t[2];
              return n * n + r * r + i * i;
            }
            function f(t) {
              var e = t[0],
                n = t[1],
                r = t[2];
              return e * e + n * n + r * r;
            }
            function d(t, e) {
              var n = e[0],
                r = e[1],
                i = e[2],
                a = n * n + r * r + i * i;
              return a > 0 && ((a = 1 / Math.sqrt(a)), (t[0] = e[0] * a), (t[1] = e[1] * a), (t[2] = e[2] * a)), t;
            }
            function p(t, e) {
              return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
            }
            (e.sub = s),
              (e.mul = c),
              (e.div = u),
              (e.dist = l),
              (e.sqrDist = h),
              (e.len = a),
              (e.sqrLen = f),
              (e.forEach = (function() {
                var t = i();
                return function(e, n, r, i, a, o) {
                  var s,
                    c = void 0;
                  for (
                    n || (n = 3), r || (r = 0), s = i ? Math.min(i * n + r, e.length) : e.length, c = r;
                    c < s;
                    c += n
                  )
                    (t[0] = e[c]),
                      (t[1] = e[c + 1]),
                      (t[2] = e[c + 2]),
                      a(t, t, o),
                      (e[c] = t[0]),
                      (e[c + 1] = t[1]),
                      (e[c + 2] = t[2]);
                  return e;
                };
              })());
          },
          function(t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.forEach = e.sqrLen = e.sqrDist = e.dist = e.div = e.mul = e.sub = e.len = void 0),
              (e.create = i),
              (e.clone = function(t) {
                var e = new r.ARRAY_TYPE(2);
                return (e[0] = t[0]), (e[1] = t[1]), e;
              }),
              (e.fromValues = function(t, e) {
                var n = new r.ARRAY_TYPE(2);
                return (n[0] = t), (n[1] = e), n;
              }),
              (e.copy = function(t, e) {
                return (t[0] = e[0]), (t[1] = e[1]), t;
              }),
              (e.set = function(t, e, n) {
                return (t[0] = e), (t[1] = n), t;
              }),
              (e.add = function(t, e, n) {
                return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
              }),
              (e.subtract = a),
              (e.multiply = o),
              (e.divide = s),
              (e.ceil = function(t, e) {
                return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), t;
              }),
              (e.floor = function(t, e) {
                return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), t;
              }),
              (e.min = function(t, e, n) {
                return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t;
              }),
              (e.max = function(t, e, n) {
                return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t;
              }),
              (e.round = function(t, e) {
                return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), t;
              }),
              (e.scale = function(t, e, n) {
                return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
              }),
              (e.scaleAndAdd = function(t, e, n, r) {
                return (t[0] = e[0] + n[0] * r), (t[1] = e[1] + n[1] * r), t;
              }),
              (e.distance = c),
              (e.squaredDistance = u),
              (e.length = l),
              (e.squaredLength = h),
              (e.negate = function(t, e) {
                return (t[0] = -e[0]), (t[1] = -e[1]), t;
              }),
              (e.inverse = function(t, e) {
                return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), t;
              }),
              (e.normalize = function(t, e) {
                var n = e[0],
                  r = e[1],
                  i = n * n + r * r;
                return i > 0 && ((i = 1 / Math.sqrt(i)), (t[0] = e[0] * i), (t[1] = e[1] * i)), t;
              }),
              (e.dot = function(t, e) {
                return t[0] * e[0] + t[1] * e[1];
              }),
              (e.cross = function(t, e, n) {
                var r = e[0] * n[1] - e[1] * n[0];
                return (t[0] = t[1] = 0), (t[2] = r), t;
              }),
              (e.lerp = function(t, e, n, r) {
                var i = e[0],
                  a = e[1];
                return (t[0] = i + r * (n[0] - i)), (t[1] = a + r * (n[1] - a)), t;
              }),
              (e.random = function(t, e) {
                e = e || 1;
                var n = 2 * r.RANDOM() * Math.PI;
                return (t[0] = Math.cos(n) * e), (t[1] = Math.sin(n) * e), t;
              }),
              (e.transformMat2 = function(t, e, n) {
                var r = e[0],
                  i = e[1];
                return (t[0] = n[0] * r + n[2] * i), (t[1] = n[1] * r + n[3] * i), t;
              }),
              (e.transformMat2d = function(t, e, n) {
                var r = e[0],
                  i = e[1];
                return (t[0] = n[0] * r + n[2] * i + n[4]), (t[1] = n[1] * r + n[3] * i + n[5]), t;
              }),
              (e.transformMat3 = function(t, e, n) {
                var r = e[0],
                  i = e[1];
                return (t[0] = n[0] * r + n[3] * i + n[6]), (t[1] = n[1] * r + n[4] * i + n[7]), t;
              }),
              (e.transformMat4 = function(t, e, n) {
                var r = e[0],
                  i = e[1];
                return (t[0] = n[0] * r + n[4] * i + n[12]), (t[1] = n[1] * r + n[5] * i + n[13]), t;
              }),
              (e.rotate = function(t, e, n, r) {
                var i = e[0] - n[0],
                  a = e[1] - n[1],
                  o = Math.sin(r),
                  s = Math.cos(r);
                return (t[0] = i * s - a * o + n[0]), (t[1] = i * o + a * s + n[1]), t;
              }),
              (e.angle = function(t, e) {
                var n = t[0],
                  r = t[1],
                  i = e[0],
                  a = e[1],
                  o = n * n + r * r;
                o > 0 && (o = 1 / Math.sqrt(o));
                var s = i * i + a * a;
                s > 0 && (s = 1 / Math.sqrt(s));
                var c = (n * i + r * a) * o * s;
                return c > 1 ? 0 : c < -1 ? Math.PI : Math.acos(c);
              }),
              (e.str = function(t) {
                return 'vec2(' + t[0] + ', ' + t[1] + ')';
              }),
              (e.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1];
              }),
              (e.equals = function(t, e) {
                var n = t[0],
                  i = t[1],
                  a = e[0],
                  o = e[1];
                return (
                  Math.abs(n - a) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) &&
                  Math.abs(i - o) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(o))
                );
              });
            var r = (function(t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return (e.default = t), e;
            })(n(36));
            function i() {
              var t = new r.ARRAY_TYPE(2);
              return r.ARRAY_TYPE != Float32Array && ((t[0] = 0), (t[1] = 0)), t;
            }
            function a(t, e, n) {
              return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
            }
            function o(t, e, n) {
              return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t;
            }
            function s(t, e, n) {
              return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t;
            }
            function c(t, e) {
              var n = e[0] - t[0],
                r = e[1] - t[1];
              return Math.sqrt(n * n + r * r);
            }
            function u(t, e) {
              var n = e[0] - t[0],
                r = e[1] - t[1];
              return n * n + r * r;
            }
            function l(t) {
              var e = t[0],
                n = t[1];
              return Math.sqrt(e * e + n * n);
            }
            function h(t) {
              var e = t[0],
                n = t[1];
              return e * e + n * n;
            }
            (e.len = l),
              (e.sub = a),
              (e.mul = o),
              (e.div = s),
              (e.dist = c),
              (e.sqrDist = u),
              (e.sqrLen = h),
              (e.forEach = (function() {
                var t = i();
                return function(e, n, r, i, a, o) {
                  var s,
                    c = void 0;
                  for (
                    n || (n = 2), r || (r = 0), s = i ? Math.min(i * n + r, e.length) : e.length, c = r;
                    c < s;
                    c += n
                  )
                    (t[0] = e[c]), (t[1] = e[c + 1]), a(t, t, o), (e[c] = t[0]), (e[c + 1] = t[1]);
                  return e;
                };
              })());
          },
          function(t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.sub = e.mul = void 0),
              (e.create = function() {
                var t = new r.ARRAY_TYPE(9);
                return (
                  r.ARRAY_TYPE != Float32Array &&
                    ((t[1] = 0), (t[2] = 0), (t[3] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0)),
                  (t[0] = 1),
                  (t[4] = 1),
                  (t[8] = 1),
                  t
                );
              }),
              (e.fromMat4 = function(t, e) {
                return (
                  (t[0] = e[0]),
                  (t[1] = e[1]),
                  (t[2] = e[2]),
                  (t[3] = e[4]),
                  (t[4] = e[5]),
                  (t[5] = e[6]),
                  (t[6] = e[8]),
                  (t[7] = e[9]),
                  (t[8] = e[10]),
                  t
                );
              }),
              (e.clone = function(t) {
                var e = new r.ARRAY_TYPE(9);
                return (
                  (e[0] = t[0]),
                  (e[1] = t[1]),
                  (e[2] = t[2]),
                  (e[3] = t[3]),
                  (e[4] = t[4]),
                  (e[5] = t[5]),
                  (e[6] = t[6]),
                  (e[7] = t[7]),
                  (e[8] = t[8]),
                  e
                );
              }),
              (e.copy = function(t, e) {
                return (
                  (t[0] = e[0]),
                  (t[1] = e[1]),
                  (t[2] = e[2]),
                  (t[3] = e[3]),
                  (t[4] = e[4]),
                  (t[5] = e[5]),
                  (t[6] = e[6]),
                  (t[7] = e[7]),
                  (t[8] = e[8]),
                  t
                );
              }),
              (e.fromValues = function(t, e, n, i, a, o, s, c, u) {
                var l = new r.ARRAY_TYPE(9);
                return (
                  (l[0] = t),
                  (l[1] = e),
                  (l[2] = n),
                  (l[3] = i),
                  (l[4] = a),
                  (l[5] = o),
                  (l[6] = s),
                  (l[7] = c),
                  (l[8] = u),
                  l
                );
              }),
              (e.set = function(t, e, n, r, i, a, o, s, c, u) {
                return (
                  (t[0] = e),
                  (t[1] = n),
                  (t[2] = r),
                  (t[3] = i),
                  (t[4] = a),
                  (t[5] = o),
                  (t[6] = s),
                  (t[7] = c),
                  (t[8] = u),
                  t
                );
              }),
              (e.identity = function(t) {
                return (
                  (t[0] = 1),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = 1),
                  (t[5] = 0),
                  (t[6] = 0),
                  (t[7] = 0),
                  (t[8] = 1),
                  t
                );
              }),
              (e.transpose = function(t, e) {
                if (t === e) {
                  var n = e[1],
                    r = e[2],
                    i = e[5];
                  (t[1] = e[3]), (t[2] = e[6]), (t[3] = n), (t[5] = e[7]), (t[6] = r), (t[7] = i);
                } else
                  (t[0] = e[0]),
                    (t[1] = e[3]),
                    (t[2] = e[6]),
                    (t[3] = e[1]),
                    (t[4] = e[4]),
                    (t[5] = e[7]),
                    (t[6] = e[2]),
                    (t[7] = e[5]),
                    (t[8] = e[8]);
                return t;
              }),
              (e.invert = function(t, e) {
                var n = e[0],
                  r = e[1],
                  i = e[2],
                  a = e[3],
                  o = e[4],
                  s = e[5],
                  c = e[6],
                  u = e[7],
                  l = e[8],
                  h = l * o - s * u,
                  f = -l * a + s * c,
                  d = u * a - o * c,
                  p = n * h + r * f + i * d;
                return p
                  ? ((p = 1 / p),
                    (t[0] = h * p),
                    (t[1] = (-l * r + i * u) * p),
                    (t[2] = (s * r - i * o) * p),
                    (t[3] = f * p),
                    (t[4] = (l * n - i * c) * p),
                    (t[5] = (-s * n + i * a) * p),
                    (t[6] = d * p),
                    (t[7] = (-u * n + r * c) * p),
                    (t[8] = (o * n - r * a) * p),
                    t)
                  : null;
              }),
              (e.adjoint = function(t, e) {
                var n = e[0],
                  r = e[1],
                  i = e[2],
                  a = e[3],
                  o = e[4],
                  s = e[5],
                  c = e[6],
                  u = e[7],
                  l = e[8];
                return (
                  (t[0] = o * l - s * u),
                  (t[1] = i * u - r * l),
                  (t[2] = r * s - i * o),
                  (t[3] = s * c - a * l),
                  (t[4] = n * l - i * c),
                  (t[5] = i * a - n * s),
                  (t[6] = a * u - o * c),
                  (t[7] = r * c - n * u),
                  (t[8] = n * o - r * a),
                  t
                );
              }),
              (e.determinant = function(t) {
                var e = t[0],
                  n = t[1],
                  r = t[2],
                  i = t[3],
                  a = t[4],
                  o = t[5],
                  s = t[6],
                  c = t[7],
                  u = t[8];
                return e * (u * a - o * c) + n * (-u * i + o * s) + r * (c * i - a * s);
              }),
              (e.multiply = i),
              (e.translate = function(t, e, n) {
                var r = e[0],
                  i = e[1],
                  a = e[2],
                  o = e[3],
                  s = e[4],
                  c = e[5],
                  u = e[6],
                  l = e[7],
                  h = e[8],
                  f = n[0],
                  d = n[1];
                return (
                  (t[0] = r),
                  (t[1] = i),
                  (t[2] = a),
                  (t[3] = o),
                  (t[4] = s),
                  (t[5] = c),
                  (t[6] = f * r + d * o + u),
                  (t[7] = f * i + d * s + l),
                  (t[8] = f * a + d * c + h),
                  t
                );
              }),
              (e.rotate = function(t, e, n) {
                var r = e[0],
                  i = e[1],
                  a = e[2],
                  o = e[3],
                  s = e[4],
                  c = e[5],
                  u = e[6],
                  l = e[7],
                  h = e[8],
                  f = Math.sin(n),
                  d = Math.cos(n);
                return (
                  (t[0] = d * r + f * o),
                  (t[1] = d * i + f * s),
                  (t[2] = d * a + f * c),
                  (t[3] = d * o - f * r),
                  (t[4] = d * s - f * i),
                  (t[5] = d * c - f * a),
                  (t[6] = u),
                  (t[7] = l),
                  (t[8] = h),
                  t
                );
              }),
              (e.scale = function(t, e, n) {
                var r = n[0],
                  i = n[1];
                return (
                  (t[0] = r * e[0]),
                  (t[1] = r * e[1]),
                  (t[2] = r * e[2]),
                  (t[3] = i * e[3]),
                  (t[4] = i * e[4]),
                  (t[5] = i * e[5]),
                  (t[6] = e[6]),
                  (t[7] = e[7]),
                  (t[8] = e[8]),
                  t
                );
              }),
              (e.fromTranslation = function(t, e) {
                return (
                  (t[0] = 1),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = 1),
                  (t[5] = 0),
                  (t[6] = e[0]),
                  (t[7] = e[1]),
                  (t[8] = 1),
                  t
                );
              }),
              (e.fromRotation = function(t, e) {
                var n = Math.sin(e),
                  r = Math.cos(e);
                return (
                  (t[0] = r),
                  (t[1] = n),
                  (t[2] = 0),
                  (t[3] = -n),
                  (t[4] = r),
                  (t[5] = 0),
                  (t[6] = 0),
                  (t[7] = 0),
                  (t[8] = 1),
                  t
                );
              }),
              (e.fromScaling = function(t, e) {
                return (
                  (t[0] = e[0]),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = e[1]),
                  (t[5] = 0),
                  (t[6] = 0),
                  (t[7] = 0),
                  (t[8] = 1),
                  t
                );
              }),
              (e.fromMat2d = function(t, e) {
                return (
                  (t[0] = e[0]),
                  (t[1] = e[1]),
                  (t[2] = 0),
                  (t[3] = e[2]),
                  (t[4] = e[3]),
                  (t[5] = 0),
                  (t[6] = e[4]),
                  (t[7] = e[5]),
                  (t[8] = 1),
                  t
                );
              }),
              (e.fromQuat = function(t, e) {
                var n = e[0],
                  r = e[1],
                  i = e[2],
                  a = e[3],
                  o = n + n,
                  s = r + r,
                  c = i + i,
                  u = n * o,
                  l = r * o,
                  h = r * s,
                  f = i * o,
                  d = i * s,
                  p = i * c,
                  g = a * o,
                  v = a * s,
                  m = a * c;
                return (
                  (t[0] = 1 - h - p),
                  (t[3] = l - m),
                  (t[6] = f + v),
                  (t[1] = l + m),
                  (t[4] = 1 - u - p),
                  (t[7] = d - g),
                  (t[2] = f - v),
                  (t[5] = d + g),
                  (t[8] = 1 - u - h),
                  t
                );
              }),
              (e.normalFromMat4 = function(t, e) {
                var n = e[0],
                  r = e[1],
                  i = e[2],
                  a = e[3],
                  o = e[4],
                  s = e[5],
                  c = e[6],
                  u = e[7],
                  l = e[8],
                  h = e[9],
                  f = e[10],
                  d = e[11],
                  p = e[12],
                  g = e[13],
                  v = e[14],
                  m = e[15],
                  y = n * s - r * o,
                  x = n * c - i * o,
                  b = n * u - a * o,
                  w = r * c - i * s,
                  S = r * u - a * s,
                  M = i * u - a * c,
                  P = l * g - h * p,
                  I = l * v - f * p,
                  O = l * m - d * p,
                  A = h * v - f * g,
                  _ = h * m - d * g,
                  C = f * m - d * v,
                  E = y * C - x * _ + b * A + w * O - S * I + M * P;
                return E
                  ? ((E = 1 / E),
                    (t[0] = (s * C - c * _ + u * A) * E),
                    (t[1] = (c * O - o * C - u * I) * E),
                    (t[2] = (o * _ - s * O + u * P) * E),
                    (t[3] = (i * _ - r * C - a * A) * E),
                    (t[4] = (n * C - i * O + a * I) * E),
                    (t[5] = (r * O - n * _ - a * P) * E),
                    (t[6] = (g * M - v * S + m * w) * E),
                    (t[7] = (v * b - p * M - m * x) * E),
                    (t[8] = (p * S - g * b + m * y) * E),
                    t)
                  : null;
              }),
              (e.projection = function(t, e, n) {
                return (
                  (t[0] = 2 / e),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = -2 / n),
                  (t[5] = 0),
                  (t[6] = -1),
                  (t[7] = 1),
                  (t[8] = 1),
                  t
                );
              }),
              (e.str = function(t) {
                return (
                  'mat3(' +
                  t[0] +
                  ', ' +
                  t[1] +
                  ', ' +
                  t[2] +
                  ', ' +
                  t[3] +
                  ', ' +
                  t[4] +
                  ', ' +
                  t[5] +
                  ', ' +
                  t[6] +
                  ', ' +
                  t[7] +
                  ', ' +
                  t[8] +
                  ')'
                );
              }),
              (e.frob = function(t) {
                return Math.sqrt(
                  Math.pow(t[0], 2) +
                    Math.pow(t[1], 2) +
                    Math.pow(t[2], 2) +
                    Math.pow(t[3], 2) +
                    Math.pow(t[4], 2) +
                    Math.pow(t[5], 2) +
                    Math.pow(t[6], 2) +
                    Math.pow(t[7], 2) +
                    Math.pow(t[8], 2),
                );
              }),
              (e.add = function(t, e, n) {
                return (
                  (t[0] = e[0] + n[0]),
                  (t[1] = e[1] + n[1]),
                  (t[2] = e[2] + n[2]),
                  (t[3] = e[3] + n[3]),
                  (t[4] = e[4] + n[4]),
                  (t[5] = e[5] + n[5]),
                  (t[6] = e[6] + n[6]),
                  (t[7] = e[7] + n[7]),
                  (t[8] = e[8] + n[8]),
                  t
                );
              }),
              (e.subtract = a),
              (e.multiplyScalar = function(t, e, n) {
                return (
                  (t[0] = e[0] * n),
                  (t[1] = e[1] * n),
                  (t[2] = e[2] * n),
                  (t[3] = e[3] * n),
                  (t[4] = e[4] * n),
                  (t[5] = e[5] * n),
                  (t[6] = e[6] * n),
                  (t[7] = e[7] * n),
                  (t[8] = e[8] * n),
                  t
                );
              }),
              (e.multiplyScalarAndAdd = function(t, e, n, r) {
                return (
                  (t[0] = e[0] + n[0] * r),
                  (t[1] = e[1] + n[1] * r),
                  (t[2] = e[2] + n[2] * r),
                  (t[3] = e[3] + n[3] * r),
                  (t[4] = e[4] + n[4] * r),
                  (t[5] = e[5] + n[5] * r),
                  (t[6] = e[6] + n[6] * r),
                  (t[7] = e[7] + n[7] * r),
                  (t[8] = e[8] + n[8] * r),
                  t
                );
              }),
              (e.exactEquals = function(t, e) {
                return (
                  t[0] === e[0] &&
                  t[1] === e[1] &&
                  t[2] === e[2] &&
                  t[3] === e[3] &&
                  t[4] === e[4] &&
                  t[5] === e[5] &&
                  t[6] === e[6] &&
                  t[7] === e[7] &&
                  t[8] === e[8]
                );
              }),
              (e.equals = function(t, e) {
                var n = t[0],
                  i = t[1],
                  a = t[2],
                  o = t[3],
                  s = t[4],
                  c = t[5],
                  u = t[6],
                  l = t[7],
                  h = t[8],
                  f = e[0],
                  d = e[1],
                  p = e[2],
                  g = e[3],
                  v = e[4],
                  m = e[5],
                  y = e[6],
                  x = e[7],
                  b = e[8];
                return (
                  Math.abs(n - f) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) &&
                  Math.abs(i - d) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) &&
                  Math.abs(a - p) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(p)) &&
                  Math.abs(o - g) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(g)) &&
                  Math.abs(s - v) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(v)) &&
                  Math.abs(c - m) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(m)) &&
                  Math.abs(u - y) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(y)) &&
                  Math.abs(l - x) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(x)) &&
                  Math.abs(h - b) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(b))
                );
              });
            var r = (function(t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return (e.default = t), e;
            })(n(36));
            function i(t, e, n) {
              var r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = e[4],
                c = e[5],
                u = e[6],
                l = e[7],
                h = e[8],
                f = n[0],
                d = n[1],
                p = n[2],
                g = n[3],
                v = n[4],
                m = n[5],
                y = n[6],
                x = n[7],
                b = n[8];
              return (
                (t[0] = f * r + d * o + p * u),
                (t[1] = f * i + d * s + p * l),
                (t[2] = f * a + d * c + p * h),
                (t[3] = g * r + v * o + m * u),
                (t[4] = g * i + v * s + m * l),
                (t[5] = g * a + v * c + m * h),
                (t[6] = y * r + x * o + b * u),
                (t[7] = y * i + x * s + b * l),
                (t[8] = y * a + x * c + b * h),
                t
              );
            }
            function a(t, e, n) {
              return (
                (t[0] = e[0] - n[0]),
                (t[1] = e[1] - n[1]),
                (t[2] = e[2] - n[2]),
                (t[3] = e[3] - n[3]),
                (t[4] = e[4] - n[4]),
                (t[5] = e[5] - n[5]),
                (t[6] = e[6] - n[6]),
                (t[7] = e[7] - n[7]),
                (t[8] = e[8] - n[8]),
                t
              );
            }
            (e.mul = i), (e.sub = a);
          },
          function(t, e) {
            t.exports = function(t) {
              return (window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                function(t) {
                  return setTimeout(t, 16);
                })(t);
            };
          },
          function(t, e) {
            t.exports = function(t, e) {
              return ((t % e) + e) % e;
            };
          },
          function(t, e) {
            var n = 180 / Math.PI;
            t.exports = function(t) {
              return n * t;
            };
          },
          function(t, e) {
            var n = Math.PI / 180;
            t.exports = function(t) {
              return n * t;
            };
          },
          function(t, e) {
            t.exports = function(t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-5;
              return Math.abs(t - e) < n;
            };
          },
          function(t, e) {
            var n = Array.prototype,
              r = n.splice,
              i = n.indexOf,
              a = n.slice;
            t.exports = function(t) {
              for (var e = a.call(arguments, 1), n = 0; n < e.length; n++)
                for (var o = e[n], s = -1; (s = i.call(t, o)) > -1; ) r.call(t, s, 1);
              return t;
            };
          },
          function(t, e, n) {
            var r = n(10),
              i = n(21),
              a = n(15);
            t.exports = function t(e, n) {
              if (e === n) return !0;
              if (!e || !n) return !1;
              if (a(e) || a(n)) return !1;
              if (i(e) || i(n)) {
                if (e.length !== n.length) return !1;
                for (var o = !0, s = 0; s < e.length && (o = t(e[s], n[s])); s++);
                return o;
              }
              if (r(e) || r(n)) {
                var c = Object.keys(e),
                  u = Object.keys(n);
                if (c.length !== u.length) return !1;
                for (var l = !0, h = 0; h < c.length && (l = t(e[c[h]], n[c[h]])); h++);
                return l;
              }
              return !1;
            };
          },
          function(t, e, n) {
            var r = n(12);
            t.exports = function(t) {
              return r(t) ? '' : t.toString();
            };
          },
          function(t, e) {
            var n = Object.prototype;
            t.exports = function(t) {
              var e = t && t.constructor;
              return t === (('function' == typeof e && e.prototype) || n);
            };
          },
          function(t, e) {
            var n = {}.toString;
            t.exports = function(t) {
              return n
                .call(t)
                .replace(/^\[object /, '')
                .replace(/\]$/, '');
            };
          },
          function(t, e, n) {
            var r = n(12),
              i = n(21),
              a = n(142),
              o = n(141),
              s = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
              if (r(t)) return !0;
              if (i(t)) return !t.length;
              var e = a(t);
              if ('Map' === e || 'Set' === e) return !t.size;
              if (o(t)) return !Object.keys(t).length;
              for (var n in t) if (s.call(t, n)) return !1;
              return !0;
            };
          },
          function(t, e, n) {
            var r = n(2);
            t.exports = function(t) {
              return r(t, 'Boolean');
            };
          },
          function(t, e, n) {
            var r = n(0),
              i = n(129),
              a = n(64),
              o = n(122),
              s = n(121),
              c = function t(e) {
                t.superclass.constructor.call(this, e);
              };
            (c.CFG = {
              eventEnable: !0,
              width: null,
              height: null,
              widthCanvas: null,
              heightCanvas: null,
              widthStyle: null,
              heightStyle: null,
              containerDOM: null,
              canvasDOM: null,
              pixelRatio: null,
              renderer: 'canvas',
            }),
              r.extend(c, a),
              r.augment(c, i, {
                init: function() {
                  c.superclass.init.call(this),
                    this._setGlobalParam(),
                    this._setContainer(),
                    this._initPainter(),
                    this._scale(),
                    this.get('eventEnable') && this.registerEvent(this);
                },
                _scale: function() {
                  if ('svg' !== this._cfg.renderType) {
                    var t = this.get('pixelRatio');
                    this.scale(t, t);
                  }
                },
                _setGlobalParam: function() {
                  var t = this.get('renderer') || 'canvas';
                  'svg' === t
                    ? this.set('pixelRatio', 1)
                    : this.get('pixelRatio') || this.set('pixelRatio', r.getRatio()),
                    (this._cfg.renderType = t);
                  var e = s[t];
                  (this._cfg.renderer = e), (this._cfg.canvas = this);
                  var n = new o(this);
                  this._cfg.timeline = n;
                },
                _setContainer: function() {
                  var t = this.get('containerId'),
                    e = this.get('containerDOM');
                  e || ((e = document.getElementById(t)), this.set('containerDOM', e)),
                    r.modifyCSS(e, { position: 'relative' });
                },
                _initPainter: function() {
                  var t = this.get('containerDOM'),
                    e = new this._cfg.renderer.painter(t);
                  (this._cfg.painter = e),
                    (this._cfg.canvasDOM = this._cfg.el = e.canvas),
                    this.changeSize(this.get('width'), this.get('height'));
                },
                _resize: function() {
                  var t = this.get('canvasDOM'),
                    e = this.get('widthCanvas'),
                    n = this.get('heightCanvas'),
                    r = this.get('widthStyle'),
                    i = this.get('heightStyle');
                  (t.style.width = r), (t.style.height = i), t.setAttribute('width', e), t.setAttribute('height', n);
                },
                getWidth: function() {
                  var t = this.get('pixelRatio');
                  return this.get('width') * t;
                },
                getHeight: function() {
                  var t = this.get('pixelRatio');
                  return this.get('height') * t;
                },
                changeSize: function(t, e) {
                  var n = this.get('pixelRatio'),
                    r = t * n,
                    i = e * n;
                  this.set('widthCanvas', r),
                    this.set('heightCanvas', i),
                    this.set('widthStyle', t + 'px'),
                    this.set('heightStyle', e + 'px'),
                    this.set('width', t),
                    this.set('height', e),
                    this._resize();
                },
                getPointByClient: function(t, e) {
                  var n = this.get('el'),
                    r = this.get('pixelRatio') || 1,
                    i = n.getBoundingClientRect();
                  return { x: (t - i.left) * r, y: (e - i.top) * r };
                },
                getClientByPoint: function(t, e) {
                  var n = this.get('el').getBoundingClientRect(),
                    r = this.get('pixelRatio') || 1;
                  return { clientX: t / r + n.left, clientY: e / r + n.top };
                },
                draw: function() {
                  this._cfg.painter.draw(this);
                },
                getShape: function(t, e, n) {
                  return 3 === arguments.length && this._cfg.renderer.getShape
                    ? this._cfg.renderer.getShape.call(this, t, e, n)
                    : c.superclass.getShape.call(this, t, e);
                },
                getRenderer: function() {
                  return this._cfg.renderType;
                },
                _drawSync: function() {
                  this._cfg.painter.drawSync(this);
                },
                destroy: function() {
                  var t = this._cfg,
                    e = t.containerDOM,
                    n = t.canvasDOM;
                  n && e && e.removeChild(n), t.timeline.stop(), c.superclass.destroy.call(this);
                },
              }),
              (t.exports = c);
          },
          function(t, e, n) {
            var r = n(16),
              i = n(29),
              a = n(47),
              o = n(44),
              s = {
                Graph: n(42),
                TreeGraph: n(79),
                Util: n(1),
                G: i,
                Global: r,
                Shape: a,
                registerNode: a.registerNode,
                registerEdge: a.registerEdge,
                registerBehavior: o.registerBehavior,
                version: r.version,
              };
            t.exports = s;
          },
        ]));
    },
    function(t, n) {
      t.exports = e;
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(116);
      r({ target: 'Array', proto: !0, forced: [].forEach != i }, { forEach: i });
    },
    function(t, e, n) {
      var r = n(21),
        i = n(122),
        a = n(116),
        o = n(29);
      for (var s in i) {
        var c = r[s],
          u = c && c.prototype;
        if (u && u.forEach !== a)
          try {
            o(u, 'forEach', a);
          } catch (t) {
            u.forEach = a;
          }
      }
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(21),
        a = n(54),
        o = n(22),
        s = n(110),
        c = n(20),
        u = n(28),
        l = n(60),
        h = n(25),
        f = n(30),
        d = n(36),
        p = n(31),
        g = n(53),
        v = n(44),
        m = n(69),
        y = n(61),
        x = n(59),
        b = n(215),
        w = n(108),
        S = n(43),
        M = n(26),
        P = n(76),
        I = n(29),
        O = n(34),
        A = n(46),
        _ = n(56),
        C = n(57),
        E = n(78),
        j = n(19),
        N = n(124),
        k = n(125),
        D = n(92),
        B = n(55),
        T = n(39).forEach,
        L = _('hidden'),
        R = j('toPrimitive'),
        Y = B.set,
        X = B.getterFor('Symbol'),
        F = Object.prototype,
        Z = i.Symbol,
        G = i.JSON,
        z = G && G.stringify,
        H = S.f,
        W = M.f,
        U = b.f,
        V = P.f,
        q = A('symbols'),
        J = A('op-symbols'),
        Q = A('string-to-symbol-registry'),
        K = A('symbol-to-string-registry'),
        $ = A('wks'),
        tt = i.QObject,
        et = !tt || !tt.prototype || !tt.prototype.findChild,
        nt =
          o &&
          c(function() {
            return (
              7 !=
              m(
                W({}, 'a', {
                  get: function() {
                    return W(this, 'a', { value: 7 }).a;
                  },
                }),
              ).a
            );
          })
            ? function(t, e, n) {
                var r = H(F, e);
                r && delete F[e], W(t, e, n), r && t !== F && W(F, e, r);
              }
            : W,
        rt = function(t, e) {
          var n = (q[t] = m(Z.prototype));
          return Y(n, { type: 'Symbol', tag: t, description: e }), o || (n.description = e), n;
        },
        it =
          s && 'symbol' == typeof Z.iterator
            ? function(t) {
                return 'symbol' == typeof t;
              }
            : function(t) {
                return Object(t) instanceof Z;
              },
        at = function(t, e, n) {
          t === F && at(J, e, n), f(t);
          var r = g(e, !0);
          return (
            f(n),
            u(q, r)
              ? (n.enumerable
                  ? (u(t, L) && t[L][r] && (t[L][r] = !1), (n = m(n, { enumerable: v(0, !1) })))
                  : (u(t, L) || W(t, L, v(1, {})), (t[L][r] = !0)),
                nt(t, r, n))
              : W(t, r, n)
          );
        },
        ot = function(t, e) {
          f(t);
          var n = p(e),
            r = y(n).concat(lt(n));
          return (
            T(r, function(e) {
              (o && !st.call(n, e)) || at(t, e, n[e]);
            }),
            t
          );
        },
        st = function(t) {
          var e = g(t, !0),
            n = V.call(this, e);
          return (
            !(this === F && u(q, e) && !u(J, e)) && (!(n || !u(this, e) || !u(q, e) || (u(this, L) && this[L][e])) || n)
          );
        },
        ct = function(t, e) {
          var n = p(t),
            r = g(e, !0);
          if (n !== F || !u(q, r) || u(J, r)) {
            var i = H(n, r);
            return !i || !u(q, r) || (u(n, L) && n[L][r]) || (i.enumerable = !0), i;
          }
        },
        ut = function(t) {
          var e = U(p(t)),
            n = [];
          return (
            T(e, function(t) {
              u(q, t) || u(C, t) || n.push(t);
            }),
            n
          );
        },
        lt = function(t) {
          var e = t === F,
            n = U(e ? J : p(t)),
            r = [];
          return (
            T(n, function(t) {
              !u(q, t) || (e && !u(F, t)) || r.push(q[t]);
            }),
            r
          );
        };
      s ||
        (O(
          (Z = function() {
            if (this instanceof Z) throw TypeError('Symbol is not a constructor');
            var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
              e = E(t),
              n = function(t) {
                this === F && n.call(J, t), u(this, L) && u(this[L], e) && (this[L][e] = !1), nt(this, e, v(1, t));
              };
            return o && et && nt(F, e, { configurable: !0, set: n }), rt(e, t);
          }).prototype,
          'toString',
          function() {
            return X(this).tag;
          },
        ),
        (P.f = st),
        (M.f = at),
        (S.f = ct),
        (x.f = b.f = ut),
        (w.f = lt),
        o &&
          (W(Z.prototype, 'description', {
            configurable: !0,
            get: function() {
              return X(this).description;
            },
          }),
          a || O(F, 'propertyIsEnumerable', st, { unsafe: !0 })),
        (N.f = function(t) {
          return rt(j(t), t);
        })),
        r({ global: !0, wrap: !0, forced: !s, sham: !s }, { Symbol: Z }),
        T(y($), function(t) {
          k(t);
        }),
        r(
          { target: 'Symbol', stat: !0, forced: !s },
          {
            for: function(t) {
              var e = String(t);
              if (u(Q, e)) return Q[e];
              var n = Z(e);
              return (Q[e] = n), (K[n] = e), n;
            },
            keyFor: function(t) {
              if (!it(t)) throw TypeError(t + ' is not a symbol');
              if (u(K, t)) return K[t];
            },
            useSetter: function() {
              et = !0;
            },
            useSimple: function() {
              et = !1;
            },
          },
        ),
        r(
          { target: 'Object', stat: !0, forced: !s, sham: !o },
          {
            create: function(t, e) {
              return void 0 === e ? m(t) : ot(m(t), e);
            },
            defineProperty: at,
            defineProperties: ot,
            getOwnPropertyDescriptor: ct,
          },
        ),
        r({ target: 'Object', stat: !0, forced: !s }, { getOwnPropertyNames: ut, getOwnPropertySymbols: lt }),
        r(
          {
            target: 'Object',
            stat: !0,
            forced: c(function() {
              w.f(1);
            }),
          },
          {
            getOwnPropertySymbols: function(t) {
              return w.f(d(t));
            },
          },
        ),
        G &&
          r(
            {
              target: 'JSON',
              stat: !0,
              forced:
                !s ||
                c(function() {
                  var t = Z();
                  return '[null]' != z([t]) || '{}' != z({ a: t }) || '{}' != z(Object(t));
                }),
            },
            {
              stringify: function(t) {
                for (var e, n, r = [t], i = 1; arguments.length > i; ) r.push(arguments[i++]);
                if (((n = e = r[1]), (h(e) || void 0 !== t) && !it(t)))
                  return (
                    l(e) ||
                      (e = function(t, e) {
                        if (('function' == typeof n && (e = n.call(this, t, e)), !it(e))) return e;
                      }),
                    (r[1] = e),
                    z.apply(G, r)
                  );
              },
            },
          ),
        Z.prototype[R] || I(Z.prototype, R, Z.prototype.valueOf),
        D(Z, 'Symbol'),
        (C[L] = !0);
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(39).filter;
      r(
        { target: 'Array', proto: !0, forced: !n(50)('filter') },
        {
          filter: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    function(t, e, n) {
      var r = n(13),
        i = n(22);
      r({ target: 'Object', stat: !0, forced: !i, sham: !i }, { defineProperties: n(123) });
    },
    function(t, e, n) {
      var r = n(13),
        i = n(22);
      r({ target: 'Object', stat: !0, forced: !i, sham: !i }, { defineProperty: n(26).f });
    },
    function(t, e, n) {
      var r = n(13),
        i = n(20),
        a = n(31),
        o = n(43).f,
        s = n(22),
        c = i(function() {
          o(1);
        });
      r(
        { target: 'Object', stat: !0, forced: !s || c, sham: !s },
        {
          getOwnPropertyDescriptor: function(t, e) {
            return o(a(t), e);
          },
        },
      );
    },
    function(t, e, n) {
      var r = n(13),
        i = n(22),
        a = n(105),
        o = n(31),
        s = n(43),
        c = n(70);
      r(
        { target: 'Object', stat: !0, sham: !i },
        {
          getOwnPropertyDescriptors: function(t) {
            for (var e, n, r = o(t), i = s.f, u = a(r), l = {}, h = 0; u.length > h; )
              void 0 !== (n = i(r, (e = u[h++]))) && c(l, e, n);
            return l;
          },
        },
      );
    },
    function(t, e, n) {
      var r = n(13),
        i = n(36),
        a = n(61);
      r(
        {
          target: 'Object',
          stat: !0,
          forced: n(20)(function() {
            a(1);
          }),
        },
        {
          keys: function(t) {
            return a(i(t));
          },
        },
      );
    },
    function(t, e, n) {
      var r = n(21),
        i = n(43).f,
        a = n(29),
        o = n(34),
        s = n(77),
        c = n(104),
        u = n(109);
      t.exports = function(t, e) {
        var n,
          l,
          h,
          f,
          d,
          p = t.target,
          g = t.global,
          v = t.stat;
        if ((n = g ? r : v ? r[p] || s(p, {}) : (r[p] || {}).prototype))
          for (l in e) {
            if (
              ((f = e[l]),
              (h = t.noTargetGet ? (d = i(n, l)) && d.value : n[l]),
              !u(g ? l : p + (v ? '.' : '#') + l, t.forced) && void 0 !== h)
            ) {
              if (typeof f == typeof h) continue;
              c(f, h);
            }
            (t.sham || (h && h.sham)) && a(f, 'sham', !0), o(n, l, f, t);
          }
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      };
    },
    function(t, e, n) {
      var r = n(41),
        i = n(52);
      t.exports = function(t, e) {
        return !e || ('object' !== r(e) && 'function' != typeof e) ? i(t) : e;
      };
    },
    function(t, e) {
      function n(e) {
        return (
          (t.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          n(e)
        );
      }
      t.exports = n;
    },
    function(t, e, n) {
      var r = n(153);
      t.exports = function(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
          e && r(t, e);
      };
    },
    function(t, e) {
      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      t.exports = function(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t;
      };
    },
    function(t, e, n) {
      var r = n(21),
        i = n(46),
        a = n(78),
        o = n(110),
        s = r.Symbol,
        c = i('wks');
      t.exports = function(t) {
        return c[t] || (c[t] = (o && s[t]) || (o ? s : a)('Symbol.' + t));
      };
    },
    function(t, e) {
      t.exports = function(t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function(t, e, n) {
      (function(e) {
        var n = 'object',
          r = function(t) {
            return t && t.Math == Math && t;
          };
        t.exports =
          r(typeof globalThis == n && globalThis) ||
          r(typeof window == n && window) ||
          r(typeof self == n && self) ||
          r(typeof e == n && e) ||
          Function('return this')();
      }.call(this, n(99)));
    },
    function(t, e, n) {
      var r = n(20);
      t.exports = !r(function() {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function() {
              return 7;
            },
          }).a
        );
      });
    },
    function(t, e) {
      function n() {
        return (
          (t.exports = n =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          n.apply(this, arguments)
        );
      }
      t.exports = n;
    },
    function(t, e, n) {
      var r = n(250);
      'string' == typeof r && (r = [[t.i, r, '']]);
      var i = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(72)(r, i);
      r.locals && (t.exports = r.locals);
    },
    function(t, e) {
      t.exports = function(t) {
        return 'object' == typeof t ? null !== t : 'function' == typeof t;
      };
    },
    function(t, e, n) {
      var r = n(22),
        i = n(101),
        a = n(30),
        o = n(53),
        s = Object.defineProperty;
      e.f = r
        ? s
        : function(t, e, n) {
            if ((a(t), (e = o(e, !0)), a(n), i))
              try {
                return s(t, e, n);
              } catch (t) {}
            if ('get' in n || 'set' in n) throw TypeError('Accessors not supported');
            return 'value' in n && (t[e] = n.value), t;
          };
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(20),
        a = n(60),
        o = n(25),
        s = n(36),
        c = n(35),
        u = n(70),
        l = n(83),
        h = n(50),
        f = n(19)('isConcatSpreadable'),
        d = !i(function() {
          var t = [];
          return (t[f] = !1), t.concat()[0] !== t;
        }),
        p = h('concat'),
        g = function(t) {
          if (!o(t)) return !1;
          var e = t[f];
          return void 0 !== e ? !!e : a(t);
        };
      r(
        { target: 'Array', proto: !0, forced: !d || !p },
        {
          concat: function(t) {
            var e,
              n,
              r,
              i,
              a,
              o = s(this),
              h = l(o, 0),
              f = 0;
            for (e = -1, r = arguments.length; e < r; e++)
              if (((a = -1 === e ? o : arguments[e]), g(a))) {
                if (f + (i = c(a.length)) > 9007199254740991) throw TypeError('Maximum allowed index exceeded');
                for (n = 0; n < i; n++, f++) n in a && u(h, f, a[n]);
              } else {
                if (f >= 9007199254740991) throw TypeError('Maximum allowed index exceeded');
                u(h, f++, a);
              }
            return (h.length = f), h;
          },
        },
      );
    },
    function(t, e) {
      var n = {}.hasOwnProperty;
      t.exports = function(t, e) {
        return n.call(t, e);
      };
    },
    function(t, e, n) {
      var r = n(22),
        i = n(26),
        a = n(44);
      t.exports = r
        ? function(t, e, n) {
            return i.f(t, e, a(1, n));
          }
        : function(t, e, n) {
            return (t[e] = n), t;
          };
    },
    function(t, e, n) {
      var r = n(25);
      t.exports = function(t) {
        if (!r(t)) throw TypeError(String(t) + ' is not an object');
        return t;
      };
    },
    function(t, e, n) {
      var r = n(100),
        i = n(38);
      t.exports = function(t) {
        return r(i(t));
      };
    },
    function(t, e, n) {
      var r = n(154),
        i = n(200)(function(t, e) {
          return null == t ? {} : r(t, e);
        });
      t.exports = i;
    },
    function(t, e, n) {
      var r = n(230)('toUpperCase');
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(21),
        i = n(46),
        a = n(29),
        o = n(28),
        s = n(77),
        c = n(103),
        u = n(55),
        l = u.get,
        h = u.enforce,
        f = String(c).split('toString');
      i('inspectSource', function(t) {
        return c.call(t);
      }),
        (t.exports = function(t, e, n, i) {
          var c = !!i && !!i.unsafe,
            u = !!i && !!i.enumerable,
            l = !!i && !!i.noTargetGet;
          'function' == typeof n &&
            ('string' != typeof e || o(n, 'name') || a(n, 'name', e),
            (h(n).source = f.join('string' == typeof e ? e : ''))),
            t !== r
              ? (c ? !l && t[e] && (u = !0) : delete t[e], u ? (t[e] = n) : a(t, e, n))
              : u
              ? (t[e] = n)
              : s(e, n);
        })(Function.prototype, 'toString', function() {
          return ('function' == typeof this && l(this).source) || c.call(this);
        });
    },
    function(t, e, n) {
      var r = n(47),
        i = Math.min;
      t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0;
      };
    },
    function(t, e, n) {
      var r = n(38);
      t.exports = function(t) {
        return Object(r(t));
      };
    },
    function(t, e, n) {
      var r = n(218),
        i = n(219),
        a = n(220);
      t.exports = function(t) {
        return r(t) || i(t) || a();
      };
    },
    function(t, e) {
      t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    },
    function(t, e, n) {
      var r = n(149),
        i = n(100),
        a = n(36),
        o = n(35),
        s = n(83),
        c = [].push,
        u = function(t) {
          var e = 1 == t,
            n = 2 == t,
            u = 3 == t,
            l = 4 == t,
            h = 6 == t,
            f = 5 == t || h;
          return function(d, p, g, v) {
            for (
              var m,
                y,
                x = a(d),
                b = i(x),
                w = r(p, g, 3),
                S = o(b.length),
                M = 0,
                P = v || s,
                I = e ? P(d, S) : n ? P(d, 0) : void 0;
              S > M;
              M++
            )
              if ((f || M in b) && ((y = w((m = b[M]), M, x)), t))
                if (e) I[M] = y;
                else if (y)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return m;
                    case 6:
                      return M;
                    case 2:
                      c.call(I, m);
                  }
                else if (l) return !1;
            return h ? -1 : u || l ? l : I;
          };
        };
      t.exports = { forEach: u(0), map: u(1), filter: u(2), some: u(3), every: u(4), find: u(5), findIndex: u(6) };
    },
    function(t, e) {
      var n = Array.isArray;
      t.exports = n;
    },
    function(t, e) {
      function n(t) {
        return (n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function r(e) {
        return (
          'function' == typeof Symbol && 'symbol' === n(Symbol.iterator)
            ? (t.exports = r = function(t) {
                return n(t);
              })
            : (t.exports = r = function(t) {
                return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                  ? 'symbol'
                  : n(t);
              }),
          r(e)
        );
      }
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(237),
        i = n(238),
        a = n(239);
      t.exports = function(t, e) {
        return r(t) || i(t, e) || a();
      };
    },
    function(t, e, n) {
      var r = n(22),
        i = n(76),
        a = n(44),
        o = n(31),
        s = n(53),
        c = n(28),
        u = n(101),
        l = Object.getOwnPropertyDescriptor;
      e.f = r
        ? l
        : function(t, e) {
            if (((t = o(t)), (e = s(e, !0)), u))
              try {
                return l(t, e);
              } catch (t) {}
            if (c(t, e)) return a(!i.f.call(t, e), t[e]);
          };
    },
    function(t, e) {
      t.exports = function(t, e) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
      };
    },
    function(t, e) {
      var n = {}.toString;
      t.exports = function(t) {
        return n.call(t).slice(8, -1);
      };
    },
    function(t, e, n) {
      var r = n(21),
        i = n(77),
        a = n(54),
        o = r['__core-js_shared__'] || i('__core-js_shared__', {});
      (t.exports = function(t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {});
      })('versions', []).push({
        version: '3.2.1',
        mode: a ? 'pure' : 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
      });
    },
    function(t, e) {
      var n = Math.ceil,
        r = Math.floor;
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(20);
      t.exports = function(t, e) {
        var n = [][t];
        return (
          !n ||
          !r(function() {
            n.call(
              null,
              e ||
                function() {
                  throw 1;
                },
              1,
            );
          })
        );
      };
    },
    function(t, e, n) {
      var r = n(22),
        i = n(26).f,
        a = Function.prototype,
        o = a.toString,
        s = /^\s*function ([^ (]*)/;
      !r ||
        'name' in a ||
        i(a, 'name', {
          configurable: !0,
          get: function() {
            try {
              return o.call(this).match(s)[1];
            } catch (t) {
              return '';
            }
          },
        });
    },
    function(t, e, n) {
      var r = n(20),
        i = n(19)('species');
      t.exports = function(t) {
        return !r(function() {
          var e = [];
          return (
            ((e.constructor = {})[i] = function() {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        });
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(39).map;
      r(
        { target: 'Array', proto: !0, forced: !n(50)('map') },
        {
          map: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    function(t, e) {
      t.exports = function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      };
    },
    function(t, e, n) {
      var r = n(25);
      t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && 'function' == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
        if ('function' == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
        if (!e && 'function' == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function(t, e) {
      t.exports = !1;
    },
    function(t, e, n) {
      var r,
        i,
        a,
        o = n(148),
        s = n(21),
        c = n(25),
        u = n(29),
        l = n(28),
        h = n(56),
        f = n(57),
        d = s.WeakMap;
      if (o) {
        var p = new d(),
          g = p.get,
          v = p.has,
          m = p.set;
        (r = function(t, e) {
          return m.call(p, t, e), e;
        }),
          (i = function(t) {
            return g.call(p, t) || {};
          }),
          (a = function(t) {
            return v.call(p, t);
          });
      } else {
        var y = h('state');
        (f[y] = !0),
          (r = function(t, e) {
            return u(t, y, e), e;
          }),
          (i = function(t) {
            return l(t, y) ? t[y] : {};
          }),
          (a = function(t) {
            return l(t, y);
          });
      }
      t.exports = {
        set: r,
        get: i,
        has: a,
        enforce: function(t) {
          return a(t) ? i(t) : r(t, {});
        },
        getterFor: function(t) {
          return function(e) {
            var n;
            if (!c(e) || (n = i(e)).type !== t) throw TypeError('Incompatible receiver, ' + t + ' required');
            return n;
          };
        },
      };
    },
    function(t, e, n) {
      var r = n(46),
        i = n(78),
        a = r('keys');
      t.exports = function(t) {
        return a[t] || (a[t] = i(t));
      };
    },
    function(t, e) {
      t.exports = {};
    },
    function(t, e, n) {
      var r = n(106),
        i = n(21),
        a = function(t) {
          return 'function' == typeof t ? t : void 0;
        };
      t.exports = function(t, e) {
        return arguments.length < 2 ? a(r[t]) || a(i[t]) : (r[t] && r[t][e]) || (i[t] && i[t][e]);
      };
    },
    function(t, e, n) {
      var r = n(107),
        i = n(81).concat('length', 'prototype');
      e.f =
        Object.getOwnPropertyNames ||
        function(t) {
          return r(t, i);
        };
    },
    function(t, e, n) {
      var r = n(45);
      t.exports =
        Array.isArray ||
        function(t) {
          return 'Array' == r(t);
        };
    },
    function(t, e, n) {
      var r = n(107),
        i = n(81);
      t.exports =
        Object.keys ||
        function(t) {
          return r(t, i);
        };
    },
    function(t, e, n) {
      var r = n(40),
        i = n(157),
        a = n(161),
        o = n(112);
      t.exports = function(t, e) {
        return r(t) ? t : i(t, e) ? [t] : a(o(t));
      };
    },
    function(t, e, n) {
      var r = n(86).Symbol;
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(88)(Object, 'create');
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(111);
      t.exports = function(t, e) {
        for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
        return -1;
      };
    },
    function(t, e, n) {
      var r = n(186);
      t.exports = function(t, e) {
        var n = t.__data__;
        return r(e) ? n['string' == typeof e ? 'string' : 'hash'] : n.map;
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(68);
      r({ target: 'RegExp', proto: !0, forced: /./.exec !== i }, { exec: i });
    },
    function(t, e, n) {
      'use strict';
      var r,
        i,
        a = n(91),
        o = RegExp.prototype.exec,
        s = String.prototype.replace,
        c = o,
        u = ((r = /a/), (i = /b*/g), o.call(r, 'a'), o.call(i, 'a'), 0 !== r.lastIndex || 0 !== i.lastIndex),
        l = void 0 !== /()??/.exec('')[1];
      (u || l) &&
        (c = function(t) {
          var e,
            n,
            r,
            i,
            c = this;
          return (
            l && (n = new RegExp('^' + c.source + '$(?!\\s)', a.call(c))),
            u && (e = c.lastIndex),
            (r = o.call(c, t)),
            u && r && (c.lastIndex = c.global ? r.index + r[0].length : e),
            l &&
              r &&
              r.length > 1 &&
              s.call(r[0], n, function() {
                for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0);
              }),
            r
          );
        }),
        (t.exports = c);
    },
    function(t, e, n) {
      var r = n(30),
        i = n(123),
        a = n(81),
        o = n(57),
        s = n(214),
        c = n(102),
        u = n(56)('IE_PROTO'),
        l = function() {},
        h = function() {
          var t,
            e = c('iframe'),
            n = a.length;
          for (
            e.style.display = 'none',
              s.appendChild(e),
              e.src = String('javascript:'),
              (t = e.contentWindow.document).open(),
              t.write('<script>document.F=Object</script>'),
              t.close(),
              h = t.F;
            n--;

          )
            delete h.prototype[a[n]];
          return h();
        };
      (t.exports =
        Object.create ||
        function(t, e) {
          var n;
          return (
            null !== t ? ((l.prototype = r(t)), (n = new l()), (l.prototype = null), (n[u] = t)) : (n = h()),
            void 0 === e ? n : i(n, e)
          );
        }),
        (o[u] = !0);
    },
    function(t, e, n) {
      'use strict';
      var r = n(53),
        i = n(26),
        a = n(44);
      t.exports = function(t, e, n) {
        var o = r(e);
        o in t ? i.f(t, o, a(0, n)) : (t[o] = n);
      };
    },
    function(t, e, n) {
      'use strict';
      t.exports = function(t) {
        var e = [];
        return (
          (e.toString = function() {
            return this.map(function(e) {
              var n = (function(t, e) {
                var n = t[1] || '',
                  r = t[3];
                if (!r) return n;
                if (e && 'function' == typeof btoa) {
                  var i =
                      ((o = r),
                      '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                        ' */'),
                    a = r.sources.map(function(t) {
                      return '/*# sourceURL=' + r.sourceRoot + t + ' */';
                    });
                  return [n]
                    .concat(a)
                    .concat([i])
                    .join('\n');
                }
                var o;
                return [n].join('\n');
              })(e, t);
              return e[2] ? '@media ' + e[2] + '{' + n + '}' : n;
            }).join('');
          }),
          (e.i = function(t, n) {
            'string' == typeof t && (t = [[null, t, '']]);
            for (var r = {}, i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (r[a] = !0);
            }
            for (i = 0; i < t.length; i++) {
              var o = t[i];
              (null != o[0] && r[o[0]]) ||
                (n && !o[2] ? (o[2] = n) : n && (o[2] = '(' + o[2] + ') and (' + n + ')'), e.push(o));
            }
          }),
          e
        );
      };
    },
    function(t, e, n) {
      var r,
        i,
        a = {},
        o =
          ((r = function() {
            return window && document && document.all && !window.atob;
          }),
          function() {
            return void 0 === i && (i = r.apply(this, arguments)), i;
          }),
        s = (function(t) {
          var e = {};
          return function(t, n) {
            if ('function' == typeof t) return t();
            if (void 0 === e[t]) {
              var r = function(t, e) {
                return e ? e.querySelector(t) : document.querySelector(t);
              }.call(this, t, n);
              if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                try {
                  r = r.contentDocument.head;
                } catch (t) {
                  r = null;
                }
              e[t] = r;
            }
            return e[t];
          };
        })(),
        c = null,
        u = 0,
        l = [],
        h = n(246);
      function f(t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
            i = a[r.id];
          if (i) {
            i.refs++;
            for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
            for (; o < r.parts.length; o++) i.parts.push(y(r.parts[o], e));
          } else {
            var s = [];
            for (o = 0; o < r.parts.length; o++) s.push(y(r.parts[o], e));
            a[r.id] = { id: r.id, refs: 1, parts: s };
          }
        }
      }
      function d(t, e) {
        for (var n = [], r = {}, i = 0; i < t.length; i++) {
          var a = t[i],
            o = e.base ? a[0] + e.base : a[0],
            s = { css: a[1], media: a[2], sourceMap: a[3] };
          r[o] ? r[o].parts.push(s) : n.push((r[o] = { id: o, parts: [s] }));
        }
        return n;
      }
      function p(t, e) {
        var n = s(t.insertInto);
        if (!n)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.",
          );
        var r = l[l.length - 1];
        if ('top' === t.insertAt)
          r ? (r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e)) : n.insertBefore(e, n.firstChild),
            l.push(e);
        else if ('bottom' === t.insertAt) n.appendChild(e);
        else {
          if ('object' != typeof t.insertAt || !t.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n",
            );
          var i = s(t.insertAt.before, n);
          n.insertBefore(e, i);
        }
      }
      function g(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = l.indexOf(t);
        e >= 0 && l.splice(e, 1);
      }
      function v(t) {
        var e = document.createElement('style');
        if ((void 0 === t.attrs.type && (t.attrs.type = 'text/css'), void 0 === t.attrs.nonce)) {
          var r = (function() {
            0;
            return n.nc;
          })();
          r && (t.attrs.nonce = r);
        }
        return m(e, t.attrs), p(t, e), e;
      }
      function m(t, e) {
        Object.keys(e).forEach(function(n) {
          t.setAttribute(n, e[n]);
        });
      }
      function y(t, e) {
        var n, r, i, a;
        if (e.transform && t.css) {
          if (!(a = 'function' == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css)))
            return function() {};
          t.css = a;
        }
        if (e.singleton) {
          var o = u++;
          (n = c || (c = v(e))), (r = w.bind(null, n, o, !1)), (i = w.bind(null, n, o, !0));
        } else
          t.sourceMap &&
          'function' == typeof URL &&
          'function' == typeof URL.createObjectURL &&
          'function' == typeof URL.revokeObjectURL &&
          'function' == typeof Blob &&
          'function' == typeof btoa
            ? ((n = (function(t) {
                var e = document.createElement('link');
                return (
                  void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
                  (t.attrs.rel = 'stylesheet'),
                  m(e, t.attrs),
                  p(t, e),
                  e
                );
              })(e)),
              (r = function(t, e, n) {
                var r = n.css,
                  i = n.sourceMap,
                  a = void 0 === e.convertToAbsoluteUrls && i;
                (e.convertToAbsoluteUrls || a) && (r = h(r));
                i &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                    ' */');
                var o = new Blob([r], { type: 'text/css' }),
                  s = t.href;
                (t.href = URL.createObjectURL(o)), s && URL.revokeObjectURL(s);
              }.bind(null, n, e)),
              (i = function() {
                g(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = v(e)),
              (r = function(t, e) {
                var n = e.css,
                  r = e.media;
                r && t.setAttribute('media', r);
                if (t.styleSheet) t.styleSheet.cssText = n;
                else {
                  for (; t.firstChild; ) t.removeChild(t.firstChild);
                  t.appendChild(document.createTextNode(n));
                }
              }.bind(null, n)),
              (i = function() {
                g(n);
              }));
        return (
          r(t),
          function(e) {
            if (e) {
              if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
              r((t = e));
            } else i();
          }
        );
      }
      t.exports = function(t, e) {
        if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
          throw new Error('The style-loader cannot be used in a non-browser environment');
        ((e = e || {}).attrs = 'object' == typeof e.attrs ? e.attrs : {}),
          e.singleton || 'boolean' == typeof e.singleton || (e.singleton = o()),
          e.insertInto || (e.insertInto = 'head'),
          e.insertAt || (e.insertAt = 'bottom');
        var n = d(t, e);
        return (
          f(n, e),
          function(t) {
            for (var r = [], i = 0; i < n.length; i++) {
              var o = n[i];
              (s = a[o.id]).refs--, r.push(s);
            }
            t && f(d(t, e), e);
            for (i = 0; i < r.length; i++) {
              var s;
              if (0 === (s = r[i]).refs) {
                for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                delete a[s.id];
              }
            }
          }
        );
      };
      var x,
        b =
          ((x = []),
          function(t, e) {
            return (x[t] = e), x.filter(Boolean).join('\n');
          });
      function w(t, e, n, r) {
        var i = n ? '' : r.css;
        if (t.styleSheet) t.styleSheet.cssText = b(e, i);
        else {
          var a = document.createTextNode(i),
            o = t.childNodes;
          o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(a, o[e]) : t.appendChild(a);
        }
      }
    },
    function(t, e, n) {
      var r = n(217);
      t.exports = function(t, e) {
        if (null == t) return {};
        var n,
          i,
          a = r(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (i = 0; i < o.length; i++)
            (n = o[i]), e.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]));
        }
        return a;
      };
    },
    function(t, e, n) {
      var r = n(245);
      'string' == typeof r && (r = [[t.i, r, '']]);
      var i = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(72)(r, i);
      r.locals && (t.exports = r.locals);
    },
    function(t, e) {
      t.exports = n;
    },
    function(t, e, n) {
      'use strict';
      var r = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        a = i && !r.call({ 1: 2 }, 1);
      e.f = a
        ? function(t) {
            var e = i(this, t);
            return !!e && e.enumerable;
          }
        : r;
    },
    function(t, e, n) {
      var r = n(21),
        i = n(29);
      t.exports = function(t, e) {
        try {
          i(r, t, e);
        } catch (n) {
          r[t] = e;
        }
        return e;
      };
    },
    function(t, e) {
      var n = 0,
        r = Math.random();
      t.exports = function(t) {
        return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++n + r).toString(36);
      };
    },
    function(t, e, n) {
      var r = n(31),
        i = n(35),
        a = n(80),
        o = function(t) {
          return function(e, n, o) {
            var s,
              c = r(e),
              u = i(c.length),
              l = a(o, u);
            if (t && n != n) {
              for (; u > l; ) if ((s = c[l++]) != s) return !0;
            } else for (; u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: o(!0), indexOf: o(!1) };
    },
    function(t, e, n) {
      var r = n(47),
        i = Math.max,
        a = Math.min;
      t.exports = function(t, e) {
        var n = r(t);
        return n < 0 ? i(n + e, 0) : a(n, e);
      };
    },
    function(t, e) {
      t.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
      ];
    },
    function(t, e) {
      t.exports = function(t) {
        if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
        return t;
      };
    },
    function(t, e, n) {
      var r = n(25),
        i = n(60),
        a = n(19)('species');
      t.exports = function(t, e) {
        var n;
        return (
          i(t) &&
            ('function' != typeof (n = t.constructor) || (n !== Array && !i(n.prototype))
              ? r(n) && null === (n = n[a]) && (n = void 0)
              : (n = void 0)),
          new (void 0 === n ? Array : n)(0 === e ? 0 : e)
        );
      };
    },
    function(t, e, n) {
      var r = n(85),
        i = n(87),
        a = '[object Symbol]';
      t.exports = function(t) {
        return 'symbol' == typeof t || (i(t) && r(t) == a);
      };
    },
    function(t, e, n) {
      var r = n(63),
        i = n(159),
        a = n(160),
        o = '[object Null]',
        s = '[object Undefined]',
        c = r ? r.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? (void 0 === t ? s : o) : c && c in Object(t) ? i(t) : a(t);
      };
    },
    function(t, e, n) {
      var r = n(158),
        i = 'object' == typeof self && self && self.Object === Object && self,
        a = r || i || Function('return this')();
      t.exports = a;
    },
    function(t, e) {
      t.exports = function(t) {
        return null != t && 'object' == typeof t;
      };
    },
    function(t, e, n) {
      var r = n(168),
        i = n(173);
      t.exports = function(t, e) {
        var n = i(t, e);
        return r(n) ? n : void 0;
      };
    },
    function(t, e) {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ('object' == e || 'function' == e);
      };
    },
    function(t, e, n) {
      var r = n(84),
        i = 1 / 0;
      t.exports = function(t) {
        if ('string' == typeof t || r(t)) return t;
        var e = t + '';
        return '0' == e && 1 / t == -i ? '-0' : e;
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(30);
      t.exports = function() {
        var t = r(this),
          e = '';
        return (
          t.global && (e += 'g'),
          t.ignoreCase && (e += 'i'),
          t.multiline && (e += 'm'),
          t.dotAll && (e += 's'),
          t.unicode && (e += 'u'),
          t.sticky && (e += 'y'),
          e
        );
      };
    },
    function(t, e, n) {
      var r = n(26).f,
        i = n(28),
        a = n(19)('toStringTag');
      t.exports = function(t, e, n) {
        t && !i((t = n ? t : t.prototype), a) && r(t, a, { configurable: !0, value: e });
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(80),
        a = n(47),
        o = n(35),
        s = n(36),
        c = n(83),
        u = n(70),
        l = n(50),
        h = Math.max,
        f = Math.min;
      r(
        { target: 'Array', proto: !0, forced: !l('splice') },
        {
          splice: function(t, e) {
            var n,
              r,
              l,
              d,
              p,
              g,
              v = s(this),
              m = o(v.length),
              y = i(t, m),
              x = arguments.length;
            if (
              (0 === x ? (n = r = 0) : 1 === x ? ((n = 0), (r = m - y)) : ((n = x - 2), (r = f(h(a(e), 0), m - y))),
              m + n - r > 9007199254740991)
            )
              throw TypeError('Maximum allowed length exceeded');
            for (l = c(v, r), d = 0; d < r; d++) (p = y + d) in v && u(l, d, v[p]);
            if (((l.length = r), n < r)) {
              for (d = y; d < m - r; d++) (g = d + n), (p = d + r) in v ? (v[g] = v[p]) : delete v[g];
              for (d = m; d > m - r + n; d--) delete v[d - 1];
            } else if (n > r)
              for (d = m - r; d > y; d--) (g = d + n - 1), (p = d + r - 1) in v ? (v[g] = v[p]) : delete v[g];
            for (d = 0; d < n; d++) v[d + y] = arguments[d + 2];
            return (v.length = m - r + n), l;
          },
        },
      );
    },
    function(t, e, n) {
      var r = n(19),
        i = n(69),
        a = n(29),
        o = r('unscopables'),
        s = Array.prototype;
      null == s[o] && a(s, o, i(null)),
        (t.exports = function(t) {
          s[o][t] = !0;
        });
    },
    function(t, e, n) {
      var r = n(25),
        i = n(45),
        a = n(19)('match');
      t.exports = function(t) {
        var e;
        return r(t) && (void 0 !== (e = t[a]) ? !!e : 'RegExp' == i(t));
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(31),
        i = n(94),
        a = n(97),
        o = n(55),
        s = n(132),
        c = o.set,
        u = o.getterFor('Array Iterator');
      (t.exports = s(
        Array,
        'Array',
        function(t, e) {
          c(this, { type: 'Array Iterator', target: r(t), index: 0, kind: e });
        },
        function() {
          var t = u(this),
            e = t.target,
            n = t.kind,
            r = t.index++;
          return !e || r >= e.length
            ? ((t.target = void 0), { value: void 0, done: !0 })
            : 'keys' == n
            ? { value: r, done: !1 }
            : 'values' == n
            ? { value: e[r], done: !1 }
            : { value: [r, e[r]], done: !1 };
        },
        'values',
      )),
        (a.Arguments = a.Array),
        i('keys'),
        i('values'),
        i('entries');
    },
    function(t, e) {
      t.exports = {};
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(39).every;
      r(
        { target: 'Array', proto: !0, forced: n(48)('every') },
        {
          every: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    function(t, e) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (t) {
        'object' == typeof window && (n = window);
      }
      t.exports = n;
    },
    function(t, e, n) {
      var r = n(20),
        i = n(45),
        a = ''.split;
      t.exports = r(function() {
        return !Object('z').propertyIsEnumerable(0);
      })
        ? function(t) {
            return 'String' == i(t) ? a.call(t, '') : Object(t);
          }
        : Object;
    },
    function(t, e, n) {
      var r = n(22),
        i = n(20),
        a = n(102);
      t.exports =
        !r &&
        !i(function() {
          return (
            7 !=
            Object.defineProperty(a('div'), 'a', {
              get: function() {
                return 7;
              },
            }).a
          );
        });
    },
    function(t, e, n) {
      var r = n(21),
        i = n(25),
        a = r.document,
        o = i(a) && i(a.createElement);
      t.exports = function(t) {
        return o ? a.createElement(t) : {};
      };
    },
    function(t, e, n) {
      var r = n(46);
      t.exports = r('native-function-to-string', Function.toString);
    },
    function(t, e, n) {
      var r = n(28),
        i = n(105),
        a = n(43),
        o = n(26);
      t.exports = function(t, e) {
        for (var n = i(e), s = o.f, c = a.f, u = 0; u < n.length; u++) {
          var l = n[u];
          r(t, l) || s(t, l, c(e, l));
        }
      };
    },
    function(t, e, n) {
      var r = n(58),
        i = n(59),
        a = n(108),
        o = n(30);
      t.exports =
        r('Reflect', 'ownKeys') ||
        function(t) {
          var e = i.f(o(t)),
            n = a.f;
          return n ? e.concat(n(t)) : e;
        };
    },
    function(t, e, n) {
      t.exports = n(21);
    },
    function(t, e, n) {
      var r = n(28),
        i = n(31),
        a = n(79).indexOf,
        o = n(57);
      t.exports = function(t, e) {
        var n,
          s = i(t),
          c = 0,
          u = [];
        for (n in s) !r(o, n) && r(s, n) && u.push(n);
        for (; e.length > c; ) r(s, (n = e[c++])) && (~a(u, n) || u.push(n));
        return u;
      };
    },
    function(t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    function(t, e, n) {
      var r = n(20),
        i = /#|\.prototype\./,
        a = function(t, e) {
          var n = s[o(t)];
          return n == u || (n != c && ('function' == typeof e ? r(e) : !!e));
        },
        o = (a.normalize = function(t) {
          return String(t)
            .replace(i, '.')
            .toLowerCase();
        }),
        s = (a.data = {}),
        c = (a.NATIVE = 'N'),
        u = (a.POLYFILL = 'P');
      t.exports = a;
    },
    function(t, e, n) {
      var r = n(20);
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !r(function() {
          return !String(Symbol());
        });
    },
    function(t, e) {
      t.exports = function(t, e) {
        return t === e || (t != t && e != e);
      };
    },
    function(t, e, n) {
      var r = n(190);
      t.exports = function(t) {
        return null == t ? '' : r(t);
      };
    },
    function(t, e, n) {
      var r = n(88),
        i = (function() {
          try {
            var t = r(Object, 'defineProperty');
            return t({}, '', {}), t;
          } catch (t) {}
        })();
      t.exports = i;
    },
    function(t, e) {
      var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
      t.exports = function(t, e) {
        var i = typeof t;
        return (
          !!(e = null == e ? n : e) && ('number' == i || ('symbol' != i && r.test(t))) && t > -1 && t % 1 == 0 && t < e
        );
      };
    },
    function(t, e, n) {
      var r = n(198),
        i = n(87),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        c = r(
          (function() {
            return arguments;
          })(),
        )
          ? r
          : function(t) {
              return i(t) && o.call(t, 'callee') && !s.call(t, 'callee');
            };
      t.exports = c;
    },
    function(t, e, n) {
      'use strict';
      var r = n(39).forEach,
        i = n(48);
      t.exports = i('forEach')
        ? function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        : [].forEach;
    },
    function(t, e, n) {
      'use strict';
      var r = n(118),
        i = n(30),
        a = n(36),
        o = n(35),
        s = n(47),
        c = n(38),
        u = n(119),
        l = n(121),
        h = Math.max,
        f = Math.min,
        d = Math.floor,
        p = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        g = /\$([$&'`]|\d\d?)/g;
      r('replace', 2, function(t, e, n) {
        return [
          function(n, r) {
            var i = c(this),
              a = null == n ? void 0 : n[t];
            return void 0 !== a ? a.call(n, i, r) : e.call(String(i), n, r);
          },
          function(t, a) {
            var c = n(e, t, this, a);
            if (c.done) return c.value;
            var d = i(t),
              p = String(this),
              g = 'function' == typeof a;
            g || (a = String(a));
            var v = d.global;
            if (v) {
              var m = d.unicode;
              d.lastIndex = 0;
            }
            for (var y = []; ; ) {
              var x = l(d, p);
              if (null === x) break;
              if ((y.push(x), !v)) break;
              '' === String(x[0]) && (d.lastIndex = u(p, o(d.lastIndex), m));
            }
            for (var b, w = '', S = 0, M = 0; M < y.length; M++) {
              x = y[M];
              for (var P = String(x[0]), I = h(f(s(x.index), p.length), 0), O = [], A = 1; A < x.length; A++)
                O.push(void 0 === (b = x[A]) ? b : String(b));
              var _ = x.groups;
              if (g) {
                var C = [P].concat(O, I, p);
                void 0 !== _ && C.push(_);
                var E = String(a.apply(void 0, C));
              } else E = r(P, p, I, O, _, a);
              I >= S && ((w += p.slice(S, I) + E), (S = I + P.length));
            }
            return w + p.slice(S);
          },
        ];
        function r(t, n, r, i, o, s) {
          var c = r + t.length,
            u = i.length,
            l = g;
          return (
            void 0 !== o && ((o = a(o)), (l = p)),
            e.call(s, l, function(e, a) {
              var s;
              switch (a.charAt(0)) {
                case '$':
                  return '$';
                case '&':
                  return t;
                case '`':
                  return n.slice(0, r);
                case "'":
                  return n.slice(c);
                case '<':
                  s = o[a.slice(1, -1)];
                  break;
                default:
                  var l = +a;
                  if (0 === l) return e;
                  if (l > u) {
                    var h = d(l / 10);
                    return 0 === h ? e : h <= u ? (void 0 === i[h - 1] ? a.charAt(1) : i[h - 1] + a.charAt(1)) : e;
                  }
                  s = i[l - 1];
              }
              return void 0 === s ? '' : s;
            })
          );
        }
      });
    },
    function(t, e, n) {
      'use strict';
      var r = n(29),
        i = n(34),
        a = n(20),
        o = n(19),
        s = n(68),
        c = o('species'),
        u = !a(function() {
          var t = /./;
          return (
            (t.exec = function() {
              var t = [];
              return (t.groups = { a: '7' }), t;
            }),
            '7' !== ''.replace(t, '$<a>')
          );
        }),
        l = !a(function() {
          var t = /(?:)/,
            e = t.exec;
          t.exec = function() {
            return e.apply(this, arguments);
          };
          var n = 'ab'.split(t);
          return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1];
        });
      t.exports = function(t, e, n, h) {
        var f = o(t),
          d = !a(function() {
            var e = {};
            return (
              (e[f] = function() {
                return 7;
              }),
              7 != ''[t](e)
            );
          }),
          p =
            d &&
            !a(function() {
              var e = !1,
                n = /a/;
              return (
                (n.exec = function() {
                  return (e = !0), null;
                }),
                'split' === t &&
                  ((n.constructor = {}),
                  (n.constructor[c] = function() {
                    return n;
                  })),
                n[f](''),
                !e
              );
            });
        if (!d || !p || ('replace' === t && !u) || ('split' === t && !l)) {
          var g = /./[f],
            v = n(f, ''[t], function(t, e, n, r, i) {
              return e.exec === s
                ? d && !i
                  ? { done: !0, value: g.call(e, n, r) }
                  : { done: !0, value: t.call(n, e, r) }
                : { done: !1 };
            }),
            m = v[0],
            y = v[1];
          i(String.prototype, t, m),
            i(
              RegExp.prototype,
              f,
              2 == e
                ? function(t, e) {
                    return y.call(t, this, e);
                  }
                : function(t) {
                    return y.call(t, this);
                  },
            ),
            h && r(RegExp.prototype[f], 'sham', !0);
        }
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(120).charAt;
      t.exports = function(t, e, n) {
        return e + (n ? r(t, e).length : 1);
      };
    },
    function(t, e, n) {
      var r = n(47),
        i = n(38),
        a = function(t) {
          return function(e, n) {
            var a,
              o,
              s = String(i(e)),
              c = r(n),
              u = s.length;
            return c < 0 || c >= u
              ? t
                ? ''
                : void 0
              : (a = s.charCodeAt(c)) < 55296 ||
                a > 56319 ||
                c + 1 === u ||
                (o = s.charCodeAt(c + 1)) < 56320 ||
                o > 57343
              ? t
                ? s.charAt(c)
                : a
              : t
              ? s.slice(c, c + 2)
              : o - 56320 + ((a - 55296) << 10) + 65536;
          };
        };
      t.exports = { codeAt: a(!1), charAt: a(!0) };
    },
    function(t, e, n) {
      var r = n(45),
        i = n(68);
      t.exports = function(t, e) {
        var n = t.exec;
        if ('function' == typeof n) {
          var a = n.call(t, e);
          if ('object' != typeof a)
            throw TypeError('RegExp exec method returned something other than an Object or null');
          return a;
        }
        if ('RegExp' !== r(t)) throw TypeError('RegExp#exec called on incompatible receiver');
        return i.call(t, e);
      };
    },
    function(t, e) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    function(t, e, n) {
      var r = n(22),
        i = n(26),
        a = n(30),
        o = n(61);
      t.exports = r
        ? Object.defineProperties
        : function(t, e) {
            a(t);
            for (var n, r = o(e), s = r.length, c = 0; s > c; ) i.f(t, (n = r[c++]), e[n]);
            return t;
          };
    },
    function(t, e, n) {
      e.f = n(19);
    },
    function(t, e, n) {
      var r = n(106),
        i = n(28),
        a = n(124),
        o = n(26).f;
      t.exports = function(t) {
        var e = r.Symbol || (r.Symbol = {});
        i(e, t) || o(e, t, { value: a.f(t) });
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(79).includes,
        a = n(94);
      r(
        { target: 'Array', proto: !0 },
        {
          includes: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      ),
        a('includes');
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(128),
        a = n(38);
      r(
        { target: 'String', proto: !0, forced: !n(129)('includes') },
        {
          includes: function(t) {
            return !!~String(a(this)).indexOf(i(t), arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    function(t, e, n) {
      var r = n(95);
      t.exports = function(t) {
        if (r(t)) throw TypeError("The method doesn't accept regular expressions");
        return t;
      };
    },
    function(t, e, n) {
      var r = n(19)('match');
      t.exports = function(t) {
        var e = /./;
        try {
          '/./'[t](e);
        } catch (n) {
          try {
            return (e[r] = !1), '/./'[t](e);
          } catch (t) {}
        }
        return !1;
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(22),
        a = n(21),
        o = n(28),
        s = n(25),
        c = n(26).f,
        u = n(104),
        l = a.Symbol;
      if (i && 'function' == typeof l && (!('description' in l.prototype) || void 0 !== l().description)) {
        var h = {},
          f = function() {
            var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
              e = this instanceof f ? new l(t) : void 0 === t ? l() : l(t);
            return '' === t && (h[e] = !0), e;
          };
        u(f, l);
        var d = (f.prototype = l.prototype);
        d.constructor = f;
        var p = d.toString,
          g = 'Symbol(test)' == String(l('test')),
          v = /^Symbol\((.*)\)[^)]+$/;
        c(d, 'description', {
          configurable: !0,
          get: function() {
            var t = s(this) ? this.valueOf() : this,
              e = p.call(t);
            if (o(h, t)) return '';
            var n = g ? e.slice(7, -1) : e.replace(v, '$1');
            return '' === n ? void 0 : n;
          },
        }),
          r({ global: !0, forced: !0 }, { Symbol: f });
      }
    },
    function(t, e, n) {
      n(125)('iterator');
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(222),
        a = n(134),
        o = n(135),
        s = n(92),
        c = n(29),
        u = n(34),
        l = n(19),
        h = n(54),
        f = n(97),
        d = n(133),
        p = d.IteratorPrototype,
        g = d.BUGGY_SAFARI_ITERATORS,
        v = l('iterator'),
        m = function() {
          return this;
        };
      t.exports = function(t, e, n, l, d, y, x) {
        i(n, e, l);
        var b,
          w,
          S,
          M = function(t) {
            if (t === d && _) return _;
            if (!g && t in O) return O[t];
            switch (t) {
              case 'keys':
              case 'values':
              case 'entries':
                return function() {
                  return new n(this, t);
                };
            }
            return function() {
              return new n(this);
            };
          },
          P = e + ' Iterator',
          I = !1,
          O = t.prototype,
          A = O[v] || O['@@iterator'] || (d && O[d]),
          _ = (!g && A) || M(d),
          C = ('Array' == e && O.entries) || A;
        if (
          (C &&
            ((b = a(C.call(new t()))),
            p !== Object.prototype &&
              b.next &&
              (h || a(b) === p || (o ? o(b, p) : 'function' != typeof b[v] && c(b, v, m)),
              s(b, P, !0, !0),
              h && (f[P] = m))),
          'values' == d &&
            A &&
            'values' !== A.name &&
            ((I = !0),
            (_ = function() {
              return A.call(this);
            })),
          (h && !x) || O[v] === _ || c(O, v, _),
          (f[e] = _),
          d)
        )
          if (((w = { values: M('values'), keys: y ? _ : M('keys'), entries: M('entries') }), x))
            for (S in w) (!g && !I && S in O) || u(O, S, w[S]);
          else r({ target: e, proto: !0, forced: g || I }, w);
        return w;
      };
    },
    function(t, e, n) {
      'use strict';
      var r,
        i,
        a,
        o = n(134),
        s = n(29),
        c = n(28),
        u = n(19),
        l = n(54),
        h = u('iterator'),
        f = !1;
      [].keys && ('next' in (a = [].keys()) ? (i = o(o(a))) !== Object.prototype && (r = i) : (f = !0)),
        null == r && (r = {}),
        l ||
          c(r, h) ||
          s(r, h, function() {
            return this;
          }),
        (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: f });
    },
    function(t, e, n) {
      var r = n(28),
        i = n(36),
        a = n(56),
        o = n(223),
        s = a('IE_PROTO'),
        c = Object.prototype;
      t.exports = o
        ? Object.getPrototypeOf
        : function(t) {
            return (
              (t = i(t)),
              r(t, s)
                ? t[s]
                : 'function' == typeof t.constructor && t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                ? c
                : null
            );
          };
    },
    function(t, e, n) {
      var r = n(30),
        i = n(224);
      t.exports =
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function() {
              var t,
                e = !1,
                n = {};
              try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(n, []),
                  (e = n instanceof Array);
              } catch (t) {}
              return function(n, a) {
                return r(n), i(a), e ? t.call(n, a) : (n.__proto__ = a), n;
              };
            })()
          : void 0);
    },
    function(t, e, n) {
      var r = n(34),
        i = n(227),
        a = Object.prototype;
      i !== a.toString && r(a, 'toString', i, { unsafe: !0 });
    },
    function(t, e, n) {
      'use strict';
      var r = n(34),
        i = n(30),
        a = n(20),
        o = n(91),
        s = RegExp.prototype,
        c = s.toString,
        u = a(function() {
          return '/a/b' != c.call({ source: 'a', flags: 'b' });
        }),
        l = 'toString' != c.name;
      (u || l) &&
        r(
          RegExp.prototype,
          'toString',
          function() {
            var t = i(this),
              e = String(t.source),
              n = t.flags;
            return '/' + e + '/' + String(void 0 === n && t instanceof RegExp && !('flags' in s) ? o.call(t) : n);
          },
          { unsafe: !0 },
        );
    },
    function(t, e, n) {
      'use strict';
      var r = n(120).charAt,
        i = n(55),
        a = n(132),
        o = i.set,
        s = i.getterFor('String Iterator');
      a(
        String,
        'String',
        function(t) {
          o(this, { type: 'String Iterator', string: String(t), index: 0 });
        },
        function() {
          var t,
            e = s(this),
            n = e.string,
            i = e.index;
          return i >= n.length
            ? { value: void 0, done: !0 }
            : ((t = r(n, i)), (e.index += t.length), { value: t, done: !1 });
        },
      );
    },
    function(t, e, n) {
      'use strict';
      var r = n(118),
        i = n(95),
        a = n(30),
        o = n(38),
        s = n(229),
        c = n(119),
        u = n(35),
        l = n(121),
        h = n(68),
        f = n(20),
        d = [].push,
        p = Math.min,
        g = !f(function() {
          return !RegExp(4294967295, 'y');
        });
      r(
        'split',
        2,
        function(t, e, n) {
          var r;
          return (
            (r =
              'c' == 'abbc'.split(/(b)*/)[1] ||
              4 != 'test'.split(/(?:)/, -1).length ||
              2 != 'ab'.split(/(?:ab)*/).length ||
              4 != '.'.split(/(.?)(.?)/).length ||
              '.'.split(/()()/).length > 1 ||
              ''.split(/.?/).length
                ? function(t, n) {
                    var r = String(o(this)),
                      a = void 0 === n ? 4294967295 : n >>> 0;
                    if (0 === a) return [];
                    if (void 0 === t) return [r];
                    if (!i(t)) return e.call(r, t, a);
                    for (
                      var s,
                        c,
                        u,
                        l = [],
                        f =
                          (t.ignoreCase ? 'i' : '') +
                          (t.multiline ? 'm' : '') +
                          (t.unicode ? 'u' : '') +
                          (t.sticky ? 'y' : ''),
                        p = 0,
                        g = new RegExp(t.source, f + 'g');
                      (s = h.call(g, r)) &&
                      !(
                        (c = g.lastIndex) > p &&
                        (l.push(r.slice(p, s.index)),
                        s.length > 1 && s.index < r.length && d.apply(l, s.slice(1)),
                        (u = s[0].length),
                        (p = c),
                        l.length >= a)
                      );

                    )
                      g.lastIndex === s.index && g.lastIndex++;
                    return (
                      p === r.length ? (!u && g.test('')) || l.push('') : l.push(r.slice(p)),
                      l.length > a ? l.slice(0, a) : l
                    );
                  }
                : '0'.split(void 0, 0).length
                ? function(t, n) {
                    return void 0 === t && 0 === n ? [] : e.call(this, t, n);
                  }
                : e),
            [
              function(e, n) {
                var i = o(this),
                  a = null == e ? void 0 : e[t];
                return void 0 !== a ? a.call(e, i, n) : r.call(String(i), e, n);
              },
              function(t, i) {
                var o = n(r, t, this, i, r !== e);
                if (o.done) return o.value;
                var h = a(t),
                  f = String(this),
                  d = s(h, RegExp),
                  v = h.unicode,
                  m = (h.ignoreCase ? 'i' : '') + (h.multiline ? 'm' : '') + (h.unicode ? 'u' : '') + (g ? 'y' : 'g'),
                  y = new d(g ? h : '^(?:' + h.source + ')', m),
                  x = void 0 === i ? 4294967295 : i >>> 0;
                if (0 === x) return [];
                if (0 === f.length) return null === l(y, f) ? [f] : [];
                for (var b = 0, w = 0, S = []; w < f.length; ) {
                  y.lastIndex = g ? w : 0;
                  var M,
                    P = l(y, g ? f : f.slice(w));
                  if (null === P || (M = p(u(y.lastIndex + (g ? 0 : w)), f.length)) === b) w = c(f, w, v);
                  else {
                    if ((S.push(f.slice(b, w)), S.length === x)) return S;
                    for (var I = 1; I <= P.length - 1; I++) if ((S.push(P[I]), S.length === x)) return S;
                    w = b = M;
                  }
                }
                return S.push(f.slice(b)), S;
              },
            ]
          );
        },
        !g,
      );
    },
    function(t, e, n) {
      var r = n(21),
        i = n(122),
        a = n(96),
        o = n(29),
        s = n(19),
        c = s('iterator'),
        u = s('toStringTag'),
        l = a.values;
      for (var h in i) {
        var f = r[h],
          d = f && f.prototype;
        if (d) {
          if (d[c] !== l)
            try {
              o(d, c, l);
            } catch (t) {
              d[c] = l;
            }
          if ((d[u] || o(d, u, h), i[h]))
            for (var p in a)
              if (d[p] !== a[p])
                try {
                  o(d, p, a[p]);
                } catch (t) {
                  d[p] = a[p];
                }
        }
      }
    },
    function(t, e) {
      var n = RegExp('[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]');
      t.exports = function(t) {
        return n.test(t);
      };
    },
    function(t, e) {
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(212),
        i = n(213);
      t.exports = function(t, e, n) {
        var a = (e && n) || 0;
        'string' == typeof t && ((e = 'binary' === t ? new Array(16) : null), (t = null));
        var o = (t = t || {}).random || (t.rng || r)();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), e)) for (var s = 0; s < 16; ++s) e[a + s] = o[s];
        return e || i(o);
      };
    },
    function(t, e, n) {
      var r = n(249);
      'string' == typeof r && (r = [[t.i, r, '']]);
      var i = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(72)(r, i);
      r.locals && (t.exports = r.locals);
    },
    function(t) {
      t.exports = JSON.parse(
        '{"label":"法国","isRoot":true,"children":[{"label":"123","children":[{"label":"克罗地亚","children":[{"label":"克罗地分阶段开始啦放假快乐大家哦付出哪来的健康亚","children":[{"label":"克罗地亚"},{"label":"丹麦"}]},{"label":"俄罗斯","children":[{"label":"俄罗斯"},{"label":"西班牙"}]}]},{"label":"英格兰","children":[{"label":"英格兰","children":[{"label":"英格兰"},{"label":"哥伦比亚"}]},{"label":"瑞典","children":[{"label":"瑞士"},{"label":"瑞典"}]}]}]},{"label":"法国","side":"left","children":[{"label":"法国","side":"left","children":[{"label":"法国","side":"left","children":[{"label":"法国","side":"left"},{"label":"阿根廷","side":"left"}]},{"label":"乌拉圭","side":"left","children":[{"label":"乌拉圭","side":"left"},{"label":"葡萄牙","side":"left"}]}]},{"label":"比利时","side":"left","children":[{"label":"比利时","side":"left","children":[{"label":"比利时","side":"left"},{"label":"日本","side":"left"}]},{"label":"巴西","side":"left","children":[{"label":"巴西","side":"left"},{"label":"墨西哥","side":"left"}]}]}]},{"label":"123","children":[{"label":"克罗地亚","children":[{"label":"克罗地分阶段开始啦放假快乐大家哦付出哪来的健康亚","children":[{"label":"克罗地亚"},{"label":"丹麦"}]},{"label":"俄罗斯","children":[{"label":"俄罗斯"},{"label":"西班牙"}]}]},{"label":"英格兰","children":[{"label":"英格兰","children":[{"label":"英格兰"},{"label":"哥伦比亚"}]},{"label":"瑞典","children":[{"label":"瑞士"},{"label":"瑞典"}]}]}]}]}',
      );
    },
    function(t) {
      t.exports = JSON.parse(
        '{"nodes":[{"x":100,"y":50,"label":"startNode","shape":"startNode","id":"startNode"},{"x":100,"y":800,"label":"endNode","shape":"endNode","id":"endNode"},{"x":50,"y":100,"label":"test","shape":"biz-flow-node","id":"test"}],"edges":[]}',
      );
    },
    function(t, e, n) {
      var r = n(251);
      'string' == typeof r && (r = [[t.i, r, '']]);
      var i = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(72)(r, i);
      r.locals && (t.exports = r.locals);
    },
    function(t, e, n) {
      var r = n(21),
        i = n(103),
        a = r.WeakMap;
      t.exports = 'function' == typeof a && /native code/.test(i.call(a));
    },
    function(t, e, n) {
      var r = n(82);
      t.exports = function(t, e, n) {
        if ((r(t), void 0 === e)) return t;
        switch (n) {
          case 0:
            return function() {
              return t.call(e);
            };
          case 1:
            return function(n) {
              return t.call(e, n);
            };
          case 2:
            return function(n, r) {
              return t.call(e, n, r);
            };
          case 3:
            return function(n, r, i) {
              return t.call(e, n, r, i);
            };
        }
        return function() {
          return t.apply(e, arguments);
        };
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(39).some;
      r(
        { target: 'Array', proto: !0, forced: n(48)('some') },
        {
          some: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    function(t, e, n) {
      var r = n(13),
        i = n(152).values;
      r(
        { target: 'Object', stat: !0 },
        {
          values: function(t) {
            return i(t);
          },
        },
      );
    },
    function(t, e, n) {
      var r = n(22),
        i = n(61),
        a = n(31),
        o = n(76).f,
        s = function(t) {
          return function(e) {
            for (var n, s = a(e), c = i(s), u = c.length, l = 0, h = []; u > l; )
              (n = c[l++]), (r && !o.call(s, n)) || h.push(t ? [n, s[n]] : s[n]);
            return h;
          };
        };
      t.exports = { entries: s(!0), values: s(!1) };
    },
    function(t, e) {
      function n(e, r) {
        return (
          (t.exports = n =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          n(e, r)
        );
      }
      t.exports = n;
    },
    function(t, e, n) {
      var r = n(155),
        i = n(195);
      t.exports = function(t, e) {
        return r(t, e, function(e, n) {
          return i(t, n);
        });
      };
    },
    function(t, e, n) {
      var r = n(156),
        i = n(192),
        a = n(62);
      t.exports = function(t, e, n) {
        for (var o = -1, s = e.length, c = {}; ++o < s; ) {
          var u = e[o],
            l = r(t, u);
          n(l, u) && i(c, a(u, t), l);
        }
        return c;
      };
    },
    function(t, e, n) {
      var r = n(62),
        i = n(90);
      t.exports = function(t, e) {
        for (var n = 0, a = (e = r(e, t)).length; null != t && n < a; ) t = t[i(e[n++])];
        return n && n == a ? t : void 0;
      };
    },
    function(t, e, n) {
      var r = n(40),
        i = n(84),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
      t.exports = function(t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return (
          !('number' != n && 'symbol' != n && 'boolean' != n && null != t && !i(t)) ||
          (o.test(t) || !a.test(t) || (null != e && t in Object(e)))
        );
      };
    },
    function(t, e, n) {
      (function(e) {
        var n = 'object' == typeof e && e && e.Object === Object && e;
        t.exports = n;
      }.call(this, n(99)));
    },
    function(t, e, n) {
      var r = n(63),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        s = r ? r.toStringTag : void 0;
      t.exports = function(t) {
        var e = a.call(t, s),
          n = t[s];
        try {
          t[s] = void 0;
          var r = !0;
        } catch (t) {}
        var i = o.call(t);
        return r && (e ? (t[s] = n) : delete t[s]), i;
      };
    },
    function(t, e) {
      var n = Object.prototype.toString;
      t.exports = function(t) {
        return n.call(t);
      };
    },
    function(t, e, n) {
      var r = n(162),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        o = r(function(t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(''),
            t.replace(i, function(t, n, r, i) {
              e.push(r ? i.replace(a, '$1') : n || t);
            }),
            e
          );
        });
      t.exports = o;
    },
    function(t, e, n) {
      var r = n(163),
        i = 500;
      t.exports = function(t) {
        var e = r(t, function(t) {
            return n.size === i && n.clear(), t;
          }),
          n = e.cache;
        return e;
      };
    },
    function(t, e, n) {
      var r = n(164),
        i = 'Expected a function';
      function a(t, e) {
        if ('function' != typeof t || (null != e && 'function' != typeof e)) throw new TypeError(i);
        var n = function() {
          var r = arguments,
            i = e ? e.apply(this, r) : r[0],
            a = n.cache;
          if (a.has(i)) return a.get(i);
          var o = t.apply(this, r);
          return (n.cache = a.set(i, o) || a), o;
        };
        return (n.cache = new (a.Cache || r)()), n;
      }
      (a.Cache = r), (t.exports = a);
    },
    function(t, e, n) {
      var r = n(165),
        i = n(185),
        a = n(187),
        o = n(188),
        s = n(189);
      function c(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = i),
        (c.prototype.get = a),
        (c.prototype.has = o),
        (c.prototype.set = s),
        (t.exports = c);
    },
    function(t, e, n) {
      var r = n(166),
        i = n(178),
        a = n(184);
      t.exports = function() {
        (this.size = 0), (this.__data__ = { hash: new r(), map: new (a || i)(), string: new r() });
      };
    },
    function(t, e, n) {
      var r = n(167),
        i = n(174),
        a = n(175),
        o = n(176),
        s = n(177);
      function c(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = i),
        (c.prototype.get = a),
        (c.prototype.has = o),
        (c.prototype.set = s),
        (t.exports = c);
    },
    function(t, e, n) {
      var r = n(64);
      t.exports = function() {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    function(t, e, n) {
      var r = n(169),
        i = n(170),
        a = n(89),
        o = n(172),
        s = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        u = Object.prototype,
        l = c.toString,
        h = u.hasOwnProperty,
        f = RegExp(
          '^' +
            l
              .call(h)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$',
        );
      t.exports = function(t) {
        return !(!a(t) || i(t)) && (r(t) ? f : s).test(o(t));
      };
    },
    function(t, e, n) {
      var r = n(85),
        i = n(89),
        a = '[object AsyncFunction]',
        o = '[object Function]',
        s = '[object GeneratorFunction]',
        c = '[object Proxy]';
      t.exports = function(t) {
        if (!i(t)) return !1;
        var e = r(t);
        return e == o || e == s || e == a || e == c;
      };
    },
    function(t, e, n) {
      var r,
        i = n(171),
        a = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + r : '';
      t.exports = function(t) {
        return !!a && a in t;
      };
    },
    function(t, e, n) {
      var r = n(86)['__core-js_shared__'];
      t.exports = r;
    },
    function(t, e) {
      var n = Function.prototype.toString;
      t.exports = function(t) {
        if (null != t) {
          try {
            return n.call(t);
          } catch (t) {}
          try {
            return t + '';
          } catch (t) {}
        }
        return '';
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    function(t, e) {
      t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    function(t, e, n) {
      var r = n(64),
        i = '__lodash_hash_undefined__',
        a = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = this.__data__;
        if (r) {
          var n = e[t];
          return n === i ? void 0 : n;
        }
        return a.call(e, t) ? e[t] : void 0;
      };
    },
    function(t, e, n) {
      var r = n(64),
        i = Object.prototype.hasOwnProperty;
      t.exports = function(t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : i.call(e, t);
      };
    },
    function(t, e, n) {
      var r = n(64),
        i = '__lodash_hash_undefined__';
      t.exports = function(t, e) {
        var n = this.__data__;
        return (this.size += this.has(t) ? 0 : 1), (n[t] = r && void 0 === e ? i : e), this;
      };
    },
    function(t, e, n) {
      var r = n(179),
        i = n(180),
        a = n(181),
        o = n(182),
        s = n(183);
      function c(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = i),
        (c.prototype.get = a),
        (c.prototype.has = o),
        (c.prototype.set = s),
        (t.exports = c);
    },
    function(t, e) {
      t.exports = function() {
        (this.__data__ = []), (this.size = 0);
      };
    },
    function(t, e, n) {
      var r = n(65),
        i = Array.prototype.splice;
      t.exports = function(t) {
        var e = this.__data__,
          n = r(e, t);
        return !(n < 0) && (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, !0);
      };
    },
    function(t, e, n) {
      var r = n(65);
      t.exports = function(t) {
        var e = this.__data__,
          n = r(e, t);
        return n < 0 ? void 0 : e[n][1];
      };
    },
    function(t, e, n) {
      var r = n(65);
      t.exports = function(t) {
        return r(this.__data__, t) > -1;
      };
    },
    function(t, e, n) {
      var r = n(65);
      t.exports = function(t, e) {
        var n = this.__data__,
          i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
      };
    },
    function(t, e, n) {
      var r = n(88)(n(86), 'Map');
      t.exports = r;
    },
    function(t, e, n) {
      var r = n(66);
      t.exports = function(t) {
        var e = r(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    function(t, e) {
      t.exports = function(t) {
        var e = typeof t;
        return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e ? '__proto__' !== t : null === t;
      };
    },
    function(t, e, n) {
      var r = n(66);
      t.exports = function(t) {
        return r(this, t).get(t);
      };
    },
    function(t, e, n) {
      var r = n(66);
      t.exports = function(t) {
        return r(this, t).has(t);
      };
    },
    function(t, e, n) {
      var r = n(66);
      t.exports = function(t, e) {
        var n = r(this, t),
          i = n.size;
        return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
      };
    },
    function(t, e, n) {
      var r = n(63),
        i = n(191),
        a = n(40),
        o = n(84),
        s = 1 / 0,
        c = r ? r.prototype : void 0,
        u = c ? c.toString : void 0;
      t.exports = function t(e) {
        if ('string' == typeof e) return e;
        if (a(e)) return i(e, t) + '';
        if (o(e)) return u ? u.call(e) : '';
        var n = e + '';
        return '0' == n && 1 / e == -s ? '-0' : n;
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; ) i[n] = e(t[n], n, t);
        return i;
      };
    },
    function(t, e, n) {
      var r = n(193),
        i = n(62),
        a = n(114),
        o = n(89),
        s = n(90);
      t.exports = function(t, e, n, c) {
        if (!o(t)) return t;
        for (var u = -1, l = (e = i(e, t)).length, h = l - 1, f = t; null != f && ++u < l; ) {
          var d = s(e[u]),
            p = n;
          if (u != h) {
            var g = f[d];
            void 0 === (p = c ? c(g, d, f) : void 0) && (p = o(g) ? g : a(e[u + 1]) ? [] : {});
          }
          r(f, d, p), (f = f[d]);
        }
        return t;
      };
    },
    function(t, e, n) {
      var r = n(194),
        i = n(111),
        a = Object.prototype.hasOwnProperty;
      t.exports = function(t, e, n) {
        var o = t[e];
        (a.call(t, e) && i(o, n) && (void 0 !== n || e in t)) || r(t, e, n);
      };
    },
    function(t, e, n) {
      var r = n(113);
      t.exports = function(t, e, n) {
        '__proto__' == e && r ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
      };
    },
    function(t, e, n) {
      var r = n(196),
        i = n(197);
      t.exports = function(t, e) {
        return null != t && i(t, e, r);
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        return null != t && e in Object(t);
      };
    },
    function(t, e, n) {
      var r = n(62),
        i = n(115),
        a = n(40),
        o = n(114),
        s = n(199),
        c = n(90);
      t.exports = function(t, e, n) {
        for (var u = -1, l = (e = r(e, t)).length, h = !1; ++u < l; ) {
          var f = c(e[u]);
          if (!(h = null != t && n(t, f))) break;
          t = t[f];
        }
        return h || ++u != l ? h : !!(l = null == t ? 0 : t.length) && s(l) && o(f, l) && (a(t) || i(t));
      };
    },
    function(t, e, n) {
      var r = n(85),
        i = n(87),
        a = '[object Arguments]';
      t.exports = function(t) {
        return i(t) && r(t) == a;
      };
    },
    function(t, e) {
      var n = 9007199254740991;
      t.exports = function(t) {
        return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= n;
      };
    },
    function(t, e, n) {
      var r = n(201),
        i = n(205),
        a = n(207);
      t.exports = function(t) {
        return a(i(t, void 0, r), t + '');
      };
    },
    function(t, e, n) {
      var r = n(202);
      t.exports = function(t) {
        return (null == t ? 0 : t.length) ? r(t, 1) : [];
      };
    },
    function(t, e, n) {
      var r = n(203),
        i = n(204);
      t.exports = function t(e, n, a, o, s) {
        var c = -1,
          u = e.length;
        for (a || (a = i), s || (s = []); ++c < u; ) {
          var l = e[c];
          n > 0 && a(l) ? (n > 1 ? t(l, n - 1, a, o, s) : r(s, l)) : o || (s[s.length] = l);
        }
        return s;
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
        return t;
      };
    },
    function(t, e, n) {
      var r = n(63),
        i = n(115),
        a = n(40),
        o = r ? r.isConcatSpreadable : void 0;
      t.exports = function(t) {
        return a(t) || i(t) || !!(o && t && t[o]);
      };
    },
    function(t, e, n) {
      var r = n(206),
        i = Math.max;
      t.exports = function(t, e, n) {
        return (
          (e = i(void 0 === e ? t.length - 1 : e, 0)),
          function() {
            for (var a = arguments, o = -1, s = i(a.length - e, 0), c = Array(s); ++o < s; ) c[o] = a[e + o];
            o = -1;
            for (var u = Array(e + 1); ++o < e; ) u[o] = a[o];
            return (u[e] = n(c)), r(t, this, u);
          }
        );
      };
    },
    function(t, e) {
      t.exports = function(t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      };
    },
    function(t, e, n) {
      var r = n(208),
        i = n(211)(r);
      t.exports = i;
    },
    function(t, e, n) {
      var r = n(209),
        i = n(113),
        a = n(210),
        o = i
          ? function(t, e) {
              return i(t, 'toString', { configurable: !0, enumerable: !1, value: r(e), writable: !0 });
            }
          : a;
      t.exports = o;
    },
    function(t, e) {
      t.exports = function(t) {
        return function() {
          return t;
        };
      };
    },
    function(t, e) {
      t.exports = function(t) {
        return t;
      };
    },
    function(t, e) {
      var n = 800,
        r = 16,
        i = Date.now;
      t.exports = function(t) {
        var e = 0,
          a = 0;
        return function() {
          var o = i(),
            s = r - (o - a);
          if (((a = o), s > 0)) {
            if (++e >= n) return arguments[0];
          } else e = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    function(t, e) {
      var n =
        ('undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
        ('undefined' != typeof msCrypto &&
          'function' == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (n) {
        var r = new Uint8Array(16);
        t.exports = function() {
          return n(r), r;
        };
      } else {
        var i = new Array(16);
        t.exports = function() {
          for (var t, e = 0; e < 16; e++)
            0 == (3 & e) && (t = 4294967296 * Math.random()), (i[e] = (t >>> ((3 & e) << 3)) & 255);
          return i;
        };
      }
    },
    function(t, e) {
      for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
      t.exports = function(t, e) {
        var r = e || 0,
          i = n;
        return [
          i[t[r++]],
          i[t[r++]],
          i[t[r++]],
          i[t[r++]],
          '-',
          i[t[r++]],
          i[t[r++]],
          '-',
          i[t[r++]],
          i[t[r++]],
          '-',
          i[t[r++]],
          i[t[r++]],
          '-',
          i[t[r++]],
          i[t[r++]],
          i[t[r++]],
          i[t[r++]],
          i[t[r++]],
          i[t[r++]],
        ].join('');
      };
    },
    function(t, e, n) {
      var r = n(58);
      t.exports = r('document', 'documentElement');
    },
    function(t, e, n) {
      var r = n(31),
        i = n(59).f,
        a = {}.toString,
        o = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      t.exports.f = function(t) {
        return o && '[object Window]' == a.call(t)
          ? (function(t) {
              try {
                return i(t);
              } catch (t) {
                return o.slice();
              }
            })(t)
          : i(r(t));
      };
    },
    function(t, e, n) {
      n(13)({ target: 'Object', stat: !0, sham: !n(22) }, { create: n(69) });
    },
    function(t, e) {
      t.exports = function(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = {},
          a = Object.keys(t);
        for (r = 0; r < a.length; r++) (n = a[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i;
      };
    },
    function(t, e) {
      t.exports = function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        }
      };
    },
    function(t, e) {
      t.exports = function(t) {
        if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t))
          return Array.from(t);
      };
    },
    function(t, e) {
      t.exports = function() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(39).find,
        a = n(94),
        o = !0;
      'find' in [] &&
        Array(1).find(function() {
          o = !1;
        }),
        r(
          { target: 'Array', proto: !0, forced: o },
          {
            find: function(t) {
              return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        ),
        a('find');
    },
    function(t, e, n) {
      'use strict';
      var r = n(133).IteratorPrototype,
        i = n(69),
        a = n(44),
        o = n(92),
        s = n(97),
        c = function() {
          return this;
        };
      t.exports = function(t, e, n) {
        var u = e + ' Iterator';
        return (t.prototype = i(r, { next: a(1, n) })), o(t, u, !1, !0), (s[u] = c), t;
      };
    },
    function(t, e, n) {
      var r = n(20);
      t.exports = !r(function() {
        function t() {}
        return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
      });
    },
    function(t, e, n) {
      var r = n(25);
      t.exports = function(t) {
        if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + ' as a prototype');
        return t;
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(25),
        a = n(60),
        o = n(80),
        s = n(35),
        c = n(31),
        u = n(70),
        l = n(50),
        h = n(19)('species'),
        f = [].slice,
        d = Math.max;
      r(
        { target: 'Array', proto: !0, forced: !l('slice') },
        {
          slice: function(t, e) {
            var n,
              r,
              l,
              p = c(this),
              g = s(p.length),
              v = o(t, g),
              m = o(void 0 === e ? g : e, g);
            if (
              a(p) &&
              ('function' != typeof (n = p.constructor) || (n !== Array && !a(n.prototype))
                ? i(n) && null === (n = n[h]) && (n = void 0)
                : (n = void 0),
              n === Array || void 0 === n)
            )
              return f.call(p, v, m);
            for (r = new (void 0 === n ? Array : n)(d(m - v, 0)), l = 0; v < m; v++, l++) v in p && u(r, l, p[v]);
            return (r.length = l), r;
          },
        },
      );
    },
    function(t, e, n) {
      var r = n(34),
        i = Date.prototype,
        a = i.toString,
        o = i.getTime;
      new Date(NaN) + '' != 'Invalid Date' &&
        r(i, 'toString', function() {
          var t = o.call(this);
          return t == t ? a.call(this) : 'Invalid Date';
        });
    },
    function(t, e, n) {
      'use strict';
      var r = n(228),
        i = {};
      (i[n(19)('toStringTag')] = 'z'),
        (t.exports =
          '[object z]' !== String(i)
            ? function() {
                return '[object ' + r(this) + ']';
              }
            : i.toString);
    },
    function(t, e, n) {
      var r = n(45),
        i = n(19)('toStringTag'),
        a =
          'Arguments' ==
          r(
            (function() {
              return arguments;
            })(),
          );
      t.exports = function(t) {
        var e, n, o;
        return void 0 === t
          ? 'Undefined'
          : null === t
          ? 'Null'
          : 'string' ==
            typeof (n = (function(t, e) {
              try {
                return t[e];
              } catch (t) {}
            })((e = Object(t)), i))
          ? n
          : a
          ? r(e)
          : 'Object' == (o = r(e)) && 'function' == typeof e.callee
          ? 'Arguments'
          : o;
      };
    },
    function(t, e, n) {
      var r = n(30),
        i = n(82),
        a = n(19)('species');
      t.exports = function(t, e) {
        var n,
          o = r(t).constructor;
        return void 0 === o || null == (n = r(o)[a]) ? e : i(n);
      };
    },
    function(t, e, n) {
      var r = n(231),
        i = n(141),
        a = n(233),
        o = n(112);
      t.exports = function(t) {
        return function(e) {
          e = o(e);
          var n = i(e) ? a(e) : void 0,
            s = n ? n[0] : e.charAt(0),
            c = n ? r(n, 1).join('') : e.slice(1);
          return s[t]() + c;
        };
      };
    },
    function(t, e, n) {
      var r = n(232);
      t.exports = function(t, e, n) {
        var i = t.length;
        return (n = void 0 === n ? i : n), !e && n >= i ? t : r(t, e, n);
      };
    },
    function(t, e) {
      t.exports = function(t, e, n) {
        var r = -1,
          i = t.length;
        e < 0 && (e = -e > i ? 0 : i + e),
          (n = n > i ? i : n) < 0 && (n += i),
          (i = e > n ? 0 : (n - e) >>> 0),
          (e >>>= 0);
        for (var a = Array(i); ++r < i; ) a[r] = t[r + e];
        return a;
      };
    },
    function(t, e, n) {
      var r = n(234),
        i = n(141),
        a = n(235);
      t.exports = function(t) {
        return i(t) ? a(t) : r(t);
      };
    },
    function(t, e) {
      t.exports = function(t) {
        return t.split('');
      };
    },
    function(t, e) {
      var n = '[\\ud800-\\udfff]',
        r = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
        i = '\\ud83c[\\udffb-\\udfff]',
        a = '[^\\ud800-\\udfff]',
        o = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        s = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        c = '(?:' + r + '|' + i + ')' + '?',
        u = '[\\ufe0e\\ufe0f]?' + c + ('(?:\\u200d(?:' + [a, o, s].join('|') + ')[\\ufe0e\\ufe0f]?' + c + ')*'),
        l = '(?:' + [a + r + '?', r, o, s, n].join('|') + ')',
        h = RegExp(i + '(?=' + i + ')|' + l + u, 'g');
      t.exports = function(t) {
        return t.match(h) || [];
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(79).indexOf,
        a = n(48),
        o = [].indexOf,
        s = !!o && 1 / [1].indexOf(1, -0) < 0,
        c = a('indexOf');
      r(
        { target: 'Array', proto: !0, forced: s || c },
        {
          indexOf: function(t) {
            return s ? o.apply(this, arguments) || 0 : i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    function(t, e) {
      t.exports = function(t) {
        if (Array.isArray(t)) return t;
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        var n = [],
          r = !0,
          i = !1,
          a = void 0;
        try {
          for (
            var o, s = t[Symbol.iterator]();
            !(r = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e);
            r = !0
          );
        } catch (t) {
          (i = !0), (a = t);
        } finally {
          try {
            r || null == s.return || s.return();
          } finally {
            if (i) throw a;
          }
        }
        return n;
      };
    },
    function(t, e) {
      t.exports = function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      };
    },
    function(t, e, n) {
      var r = n(22),
        i = n(21),
        a = n(109),
        o = n(241),
        s = n(26).f,
        c = n(59).f,
        u = n(95),
        l = n(91),
        h = n(34),
        f = n(20),
        d = n(242),
        p = n(19)('match'),
        g = i.RegExp,
        v = g.prototype,
        m = /a/g,
        y = /a/g,
        x = new g(m) !== m;
      if (
        r &&
        a(
          'RegExp',
          !x ||
            f(function() {
              return (y[p] = !1), g(m) != m || g(y) == y || '/a/i' != g(m, 'i');
            }),
        )
      ) {
        for (
          var b = function(t, e) {
              var n = this instanceof b,
                r = u(t),
                i = void 0 === e;
              return !n && r && t.constructor === b && i
                ? t
                : o(
                    x
                      ? new g(r && !i ? t.source : t, e)
                      : g((r = t instanceof b) ? t.source : t, r && i ? l.call(t) : e),
                    n ? this : v,
                    b,
                  );
            },
            w = function(t) {
              (t in b) ||
                s(b, t, {
                  configurable: !0,
                  get: function() {
                    return g[t];
                  },
                  set: function(e) {
                    g[t] = e;
                  },
                });
            },
            S = c(g),
            M = 0;
          S.length > M;

        )
          w(S[M++]);
        (v.constructor = b), (b.prototype = v), h(i, 'RegExp', b);
      }
      d('RegExp');
    },
    function(t, e, n) {
      var r = n(25),
        i = n(135);
      t.exports = function(t, e, n) {
        var a, o;
        return (
          i &&
            'function' == typeof (a = e.constructor) &&
            a !== n &&
            r((o = a.prototype)) &&
            o !== n.prototype &&
            i(t, o),
          t
        );
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(58),
        i = n(26),
        a = n(19),
        o = n(22),
        s = a('species');
      t.exports = function(t) {
        var e = r(t),
          n = i.f;
        o &&
          e &&
          !e[s] &&
          n(e, s, {
            configurable: !0,
            get: function() {
              return this;
            },
          });
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(82),
        a = n(36),
        o = n(20),
        s = n(48),
        c = [].sort,
        u = [1, 2, 3],
        l = o(function() {
          u.sort(void 0);
        }),
        h = o(function() {
          u.sort(null);
        }),
        f = s('sort');
      r(
        { target: 'Array', proto: !0, forced: l || !h || f },
        {
          sort: function(t) {
            return void 0 === t ? c.call(a(this)) : c.call(a(this), i(t));
          },
        },
      );
    },
    function(t, e, n) {
      'use strict';
      var r = n(13),
        i = n(35),
        a = n(128),
        o = n(38),
        s = n(129),
        c = ''.startsWith,
        u = Math.min;
      r(
        { target: 'String', proto: !0, forced: !s('startsWith') },
        {
          startsWith: function(t) {
            var e = String(o(this));
            a(t);
            var n = i(u(arguments.length > 1 ? arguments[1] : void 0, e.length)),
              r = String(t);
            return c ? c.call(e, r, n) : e.slice(n, n + r.length) === r;
          },
        },
      );
    },
    function(t, e, n) {
      (e = t.exports = n(71)(!1)).push([
        t.i,
        '.toolbar--1pjTw {\n  display: flex;\n  align-items: center;\n}\n.toolbar--1pjTw .command i {\n  display: inline-block;\n  width: 27px;\n  height: 27px;\n  margin: 0 6px;\n  padding-top: 6px;\n  text-align: center;\n  border: 1px solid #fff;\n  cursor: pointer;\n}\n.toolbar--1pjTw .command i:hover {\n  border: 1px solid #e6e9ed;\n}\n.toolbar--1pjTw .command-disabled i {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: auto;\n}\n.toolbar--1pjTw .command-disabled i:hover {\n  border: 1px solid #fff;\n}\n.tooltip--3pVBw .ant-tooltip-inner {\n  font-size: 12px;\n  border-radius: 0;\n}\n',
        '',
      ]),
        (e.locals = { toolbar: 'toolbar--1pjTw', tooltip: 'tooltip--3pVBw' });
    },
    function(t, e) {
      t.exports = function(t) {
        var e = 'undefined' != typeof window && window.location;
        if (!e) throw new Error('fixUrls requires window.location');
        if (!t || 'string' != typeof t) return t;
        var n = e.protocol + '//' + e.host,
          r = n + e.pathname.replace(/\/[^\/]*$/, '/');
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
          var i,
            a = e
              .trim()
              .replace(/^"(.*)"$/, function(t, e) {
                return e;
              })
              .replace(/^'(.*)'$/, function(t, e) {
                return e;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)
            ? t
            : ((i = 0 === a.indexOf('//') ? a : 0 === a.indexOf('/') ? n + a : r + a.replace(/^\.\//, '')),
              'url(' + JSON.stringify(i) + ')');
        });
      };
    },
    function(t, e, n) {
      var r = n(13),
        i = n(21),
        a = n(248),
        o = [].slice,
        s = function(t) {
          return function(e, n) {
            var r = arguments.length > 2,
              i = r ? o.call(arguments, 2) : void 0;
            return t(
              r
                ? function() {
                    ('function' == typeof e ? e : Function(e)).apply(this, i);
                  }
                : e,
              n,
            );
          };
        };
      r(
        { global: !0, bind: !0, forced: /MSIE .\./.test(a) },
        { setTimeout: s(i.setTimeout), setInterval: s(i.setInterval) },
      );
    },
    function(t, e, n) {
      var r = n(58);
      t.exports = r('navigator', 'userAgent') || '';
    },
    function(t, e, n) {
      (e = t.exports = n(71)(!1)).push([
        t.i,
        '.detailPanel--2yyx- {\n  flex: 1;\n  background: #fafafa;\n}\n.detailPanel--2yyx- .ant-card {\n  background: #fafafa;\n}\n',
        '',
      ]),
        (e.locals = { detailPanel: 'detailPanel--2yyx-' });
    },
    function(t, e, n) {
      (e = t.exports = n(71)(!1)).push([
        t.i,
        '.editor--1G3Ox {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n}\n.editorHd--1SH3g {\n  padding: 8px;\n  border: 1px solid #e6e9ed;\n}\n.editorBd--27hOG {\n  flex: 1;\n}\n.editorSidebar--3ux7J,\n.editorContent--3oGWp {\n  display: flex;\n  flex-direction: column;\n}\n.editorSidebar--3ux7J {\n  background: #fafafa;\n}\n.editorSidebar--3ux7J:first-child {\n  border-right: 1px solid #e6e9ed;\n}\n.editorSidebar--3ux7J:last-child {\n  border-left: 1px solid #e6e9ed;\n}\n.flow--1Fc4-,\n.mind--fgnR1 {\n  flex: 1;\n  height: 0;\n}\n',
        '',
      ]),
        (e.locals = {
          editor: 'editor--1G3Ox',
          editorHd: 'editorHd--1SH3g',
          editorBd: 'editorBd--27hOG',
          editorSidebar: 'editorSidebar--3ux7J',
          editorContent: 'editorContent--3oGWp',
          flow: 'flow--1Fc4-',
          mind: 'mind--fgnR1',
        });
    },
    function(t, e, n) {
      (e = t.exports = n(71)(!1)).push([
        t.i,
        '.itemPanel--3Suxx {\n  flex: 1;\n  background: #fafafa;\n}\n.itemPanel--3Suxx .ant-card {\n  background: #fafafa;\n}\n.itemPanel--3Suxx .ant-card-body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.itemPanel--3Suxx .ant-card-body > div {\n  margin-bottom: 16px;\n}\n',
        '',
      ]),
        (e.locals = { itemPanel: 'itemPanel--3Suxx' });
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var r = n(0),
        i = n.n(r),
        a = n(142),
        o = n.n(a),
        s = n(75),
        c = n(3),
        u = (n(98), n(150), n(49), n(151), n(14)),
        l = n.n(u),
        h = n(18),
        f = n.n(h),
        d = n(15),
        p = n.n(d),
        g = n(16),
        v = n.n(g),
        m = n(17),
        y = n.n(m),
        x = n(40),
        b = n.n(x),
        w = n(32),
        S = n.n(w),
        M = (n(4), n(67), n(117), n(5), n(143)),
        P = n.n(M);
      function I() {
        return P()().replace(/-/g, '');
      }
      function O(t, e, n) {
        'function' == typeof n && t.on(e, n);
      }
      var A,
        _,
        C,
        E,
        j,
        N,
        k,
        D,
        B,
        T,
        L,
        R,
        Y = 'J_FlowContainer',
        X = 'J_MindContainer',
        F = 94,
        Z = 'node';
      !(function(t) {
        (t.Label = 'node-label'),
          (t.KeyShape = 'node-shape'),
          (t.Wrapper = 'node-wrapper'),
          (t.Appendix = 'node-appendix'),
          (t.Anchor = 'Anchor'),
          (t.CollapseExpandButton = 'CollapseExpandButton');
      })(A || (A = {})),
        (function(t) {
          (t.Node = 'node'), (t.Edge = 'edge');
        })(_ || (_ = {})),
        (function(t) {
          (t.Active = 'active'), (t.Selected = 'selected');
        })(C || (C = {})),
        (function(t) {
          (t.NodeSelected = 'NodeSelected'), (t.MultiSelected = 'MultiSelected'), (t.CanvasSelected = 'CanvasSelected');
        })(E || (E = {})),
        (function(t) {
          (t.Hide = 'Hide'), (t.Show = 'Show');
        })(j || (j = {})),
        (function(t) {
          (t.onBeforeExecuteCommand = 'onBeforeExecuteCommand'),
            (t.onAfterExecuteCommand = 'onAfterExecuteCommand'),
            (t.onBeforeLabelStateChange = 'onBeforeLabelStateChange'),
            (t.onAfterLabelStateChange = 'onAfterLabelStateChange');
        })(N || (N = {})),
        (function(t) {
          (t.Undo = 'undo'), (t.Redo = 'redo'), (t.Topic = 'topic'), (t.Subtopic = 'subtopic');
        })(k || (k = {})),
        (function(t) {
          (t.onClick = 'click'),
            (t.onDoubleClick = 'dbclick'),
            (t.onMouseEnter = 'mouseenter'),
            (t.onMouseMove = 'mousemove'),
            (t.onMouseOut = 'mouseout'),
            (t.onMouseOver = 'mouseover'),
            (t.onMouseLeave = 'mouseleave'),
            (t.onMouseDown = 'mousedown'),
            (t.onMouseUp = 'mouseup'),
            (t.onContextMenu = 'contextmenu'),
            (t.onDragStart = 'dragstart'),
            (t.onDrag = 'drag'),
            (t.onDragEnd = 'dragend'),
            (t.onDragEnter = 'dragenter'),
            (t.onDragLeave = 'dragleave'),
            (t.onDrop = 'drop'),
            (t.onKeyDown = 'keydown'),
            (t.onKeyUp = 'keyup'),
            (t.onTouchStart = 'touchstart'),
            (t.onTouchMove = 'touchmove'),
            (t.onTouchEnd = 'touchend');
        })(D || (D = {})),
        (function(t) {
          (t.onNodeClick = 'node:click'),
            (t.onNodeDoubleClick = 'node:dbclick'),
            (t.onNodeMouseEnter = 'node:mouseenter'),
            (t.onNodeMouseMove = 'node:mousemove'),
            (t.onNodeMouseOut = 'node:mouseout'),
            (t.onNodeMouseOver = 'node:mouseover'),
            (t.onNodeMouseLeave = 'node:mouseleave'),
            (t.onNodeMouseDown = 'node:mousedown'),
            (t.onNodeMouseUp = 'node:mouseup'),
            (t.onNodeContextMenu = 'node:contextmenu'),
            (t.onNodeDragStart = 'node:dragstart'),
            (t.onNodeDrag = 'node:drag'),
            (t.onNodeDragEnd = 'node:dragend'),
            (t.onNodeDragEnter = 'node:dragenter'),
            (t.onNodeDragLeave = 'node:dragleave'),
            (t.onNodeDrop = 'node:drop');
        })(B || (B = {})),
        (function(t) {
          (t.onEdgeClick = 'edge:click'),
            (t.onEdgeDoubleClick = 'edge:dbclick'),
            (t.onEdgeMouseEnter = 'edge:mouseenter'),
            (t.onEdgeMouseMove = 'edge:mousemove'),
            (t.onEdgeMouseOut = 'edge:mouseout'),
            (t.onEdgeMouseOver = 'edge:mouseover'),
            (t.onEdgeMouseLeave = 'edge:mouseleave'),
            (t.onEdgeMouseDown = 'edge:mousedown'),
            (t.onEdgeMouseUp = 'edge:mouseup'),
            (t.onEdgeContextMenu = 'edge:contextmenu');
        })(T || (T = {})),
        (function(t) {
          (t.onCanvasClick = 'canvas:click'),
            (t.onCanvasDoubleClick = 'canvas:dbclick'),
            (t.onCanvasMouseEnter = 'canvas:mouseenter'),
            (t.onCanvasMouseMove = 'canvas:mousemove'),
            (t.onCanvasMouseOut = 'canvas:mouseout'),
            (t.onCanvasMouseOver = 'canvas:mouseover'),
            (t.onCanvasMouseLeave = 'canvas:mouseleave'),
            (t.onCanvasMouseDown = 'canvas:mousedown'),
            (t.onCanvasMouseUp = 'canvas:mouseup'),
            (t.onCanvasContextMenu = 'canvas:contextmenu'),
            (t.onCanvasDragStart = 'canvas:dragstart'),
            (t.onCanvasDrag = 'canvas:drag'),
            (t.onCanvasDragEnd = 'canvas:dragend'),
            (t.onCanvasDragEnter = 'canvas:dragenter'),
            (t.onCanvasDragLeave = 'canvas:dragleave');
        })(L || (L = {})),
        (function(t) {
          (t.onBeforeAddItem = 'beforeadditem'),
            (t.onAfterAddItem = 'afteradditem'),
            (t.onBeforeRemoveItem = 'beforeremoveitem'),
            (t.onAfterRemoveItem = 'afterremoveitem'),
            (t.onBeforeUpdateItem = 'beforeupdateitem'),
            (t.onAfterUpdateItem = 'afterupdateitem'),
            (t.onBeforeItemVisibilityChange = 'beforeitemvisibilitychange'),
            (t.onAfterItemVisibilityChange = 'afteritemvisibilitychange'),
            (t.onBeforeItemStateChange = 'beforeitemstatechange'),
            (t.onAfterItemStateChange = 'afteritemstatechange'),
            (t.onBeforeRefreshItem = 'beforerefreshitem'),
            (t.onAfterRefreshItem = 'afterrefreshitem'),
            (t.onBeforeItemStatesClear = 'beforeitemstatesclear'),
            (t.onAfterItemStatesClear = 'afteritemstatesclear');
        })(R || (R = {}));
      n(6), n(7), n(93), n(216), n(8), n(9), n(10), n(11), n(12);
      var G = n(1),
        z = n.n(G);
      function H(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function W(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? H(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : H(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var U = new (function t() {
          var e = this;
          l()(this, t),
            (this.command = void 0),
            (this.commandQueue = void 0),
            (this.commandIndex = void 0),
            (this.register = function(t, n) {
              e.command[t] = W({}, n, { name: t });
            }),
            (this.canExecute = function(t, n) {
              return e.command[n].canExecute(t);
            }),
            (this.execute = function(t, n, r) {
              var i = e.command[n];
              if (i) {
                var a = Object.create(i);
                if (
                  (r && (a.params = W({}, a.params, {}, r)),
                  a.canExecute(t) &&
                    (a.init(t),
                    t.emit(N.onBeforeExecuteCommand, { name: a.name, params: a.params }),
                    a.execute(t),
                    t.emit(N.onAfterExecuteCommand, { name: a.name, params: a.params }),
                    a.canUndo(t)))
                ) {
                  var o = e.commandQueue,
                    s = e.commandIndex;
                  o.splice(s, o.length - s, a), (e.commandIndex += 1);
                }
              }
            }),
            (this.command = {}),
            (this.commandQueue = []),
            (this.commandIndex = 0);
        })(),
        V = n(23),
        q = n.n(V),
        J = n(73),
        Q = n.n(J),
        K = i.a.createContext({}),
        $ = K,
        tt = i.a.createContext({}),
        et = function(t) {
          var e = function(e) {
            var n = e.forwardRef,
              r = Q()(e, ['forwardRef']);
            return i.a.createElement(tt.Consumer, null, function(e) {
              return i.a.createElement(t, q()({ ref: n }, r, e));
            });
          };
          return i.a.forwardRef(function(t, n) {
            return i.a.createElement(e, q()({ forwardRef: n }, t));
          });
        },
        nt = tt,
        rt = (function(t) {
          function e(t) {
            var n;
            return (
              l()(this, e),
              ((n = p()(this, v()(e).call(this, t))).setGraph = function(t) {
                n.setState({ graph: t }), n.bindEvent(t), n.bindShortcut(t);
              }),
              (n.setGraphState = function(t) {
                n.setState({ graphState: t });
              }),
              (n.setLabelState = function(t) {
                n.setState({ labelState: t });
              }),
              (n.canExecuteCommand = function(t) {
                var e = n.state.graph;
                return U.canExecute(e, t);
              }),
              (n.executeCommand = function(t, e) {
                var r = n.state.graph;
                U.execute(r, t, e);
              }),
              (n.state = {
                graph: null,
                graphState: E.CanvasSelected,
                labelState: j.Hide,
                setGraph: n.setGraph,
                setGraphState: n.setGraphState,
                setLabelState: n.setLabelState,
                canExecuteCommand: n.canExecuteCommand,
                executeCommand: n.executeCommand,
              }),
              n
            );
          }
          return (
            y()(e, t),
            f()(e, [
              {
                key: 'bindEvent',
                value: function(t) {
                  var e = this,
                    n = this.props;
                  O(t, N.onBeforeExecuteCommand, n[N.onBeforeExecuteCommand]),
                    O(t, N.onAfterExecuteCommand, n[N.onAfterExecuteCommand]),
                    O(t, N.onBeforeLabelStateChange, function(t) {
                      var n = t.labelState;
                      n !== e.state.labelState && e.setLabelState(n);
                    });
                },
              },
              {
                key: 'bindShortcut',
                value: function(t) {
                  var e = this;
                  t.on('keydown', function(t) {
                    Object.values(U.command).some(function(n) {
                      var r = n.name;
                      return (
                        !!n.shortcuts.some(function(e) {
                          var n = t.key;
                          return b()(e)
                            ? e.every(function(r, i) {
                                return i === e.length - 1 ? r === n : t[r];
                              })
                            : e === n;
                        }) && (e.executeCommand(r), !0)
                      );
                    });
                  });
                },
              },
              {
                key: 'render',
                value: function() {
                  var t = this.props.children,
                    e = this.state,
                    n = e.graph,
                    r = e.executeCommand;
                  return i.a.createElement(
                    $.Provider,
                    { value: { graph: n, executeCommand: r } },
                    i.a.createElement(
                      nt.Provider,
                      { value: this.state },
                      i.a.createElement('div', S()(this.props, ['className', 'style']), t),
                    ),
                  );
                },
              },
            ]),
            e
          );
        })(i.a.Component),
        it = (n(27), n(37)),
        at = n.n(it),
        ot = n(52),
        st = n.n(ot),
        ct = n(2),
        ut = n.n(ct);
      n(126), n(127);
      function lt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ht(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? lt(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : lt(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var ft = (function(t) {
          function e() {
            var t, n;
            l()(this, e);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            return (
              ((n = p()(this, (t = v()(e)).call.apply(t, [this].concat(i)))).handleBlur = function() {
                n.props.labelState === j.Show && n.executeUpdate();
              }),
              (n.handleKeyDown = function(t) {
                var e = t.key;
                ('Enter' !== e && 'Escape' !== e) || (n.executeUpdate(), n.props.setLabelState(j.Hide));
              }),
              (n.executeUpdate = function() {
                var t = n.props.executeCommand,
                  e = n.getSelectedNode().getModel(),
                  r = e.label,
                  i = n.labelElement.textContent;
                i !== r && t('update', { id: e.id, updateModel: { label: i } });
              }),
              (n.getSelectedNode = function() {
                return n.props.graph.findAllByState(Z, C.Selected)[0];
              }),
              (n.getLabelOffset = function(t) {
                var e = t.labelShape,
                  r = t.selectedNode,
                  i = n.props.graph,
                  a = e.getBBox(),
                  o = a.x,
                  s = a.y,
                  c = ut.a.Util.applyMatrix({ x: o, y: s }, r.getContainer().getMatrix()),
                  u = c.x,
                  l = c.y,
                  h = i.getCanvasByPoint(u, l),
                  f = h.x;
                return { top: h.y, left: f };
              }),
              (n.getLabelSize = function(t) {
                var e = t.labelShape.getBBox(),
                  n = e.width,
                  r = e.height;
                return {
                  width: 'auto',
                  height: 'auto',
                  'min-width': n,
                  'max-width': ''.concat(F, 'px'),
                  'min-height': r,
                };
              }),
              (n.getLabelFont = function(t) {
                return { font: t.labelShape.attr('font') };
              }),
              (n.getLabelZoom = function() {
                var t = n.props.graph.getZoom();
                return { transform: 'scale('.concat(t, ')'), 'transform-origin': 'left top' };
              }),
              n
            );
          }
          return (
            y()(e, t),
            f()(e, [
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.props.labelState === j.Show &&
                    (this.labelElement.focus(), document.execCommand('selectAll', !1, null));
                },
              },
              {
                key: 'render',
                value: function() {
                  var t = this,
                    e = '',
                    n = { position: 'absolute', background: 'white', border: '1px solid #1890FF', outline: 'none' };
                  if (this.props.labelState === j.Hide) n = ht({}, n, { display: 'none' });
                  else {
                    var r = this.getSelectedNode(),
                      a = r.getContainer().findByClassName(A.Label);
                    (e = r.getModel().label),
                      (n = ht(
                        {},
                        n,
                        {},
                        this.getLabelOffset({ labelShape: a, selectedNode: r }),
                        {},
                        this.getLabelSize({ labelShape: a }),
                        {},
                        this.getLabelFont({ labelShape: a }),
                        {},
                        this.getLabelZoom(),
                      ));
                  }
                  return i.a.createElement(
                    'div',
                    {
                      ref: function(e) {
                        t.labelElement = e;
                      },
                      style: n,
                      contentEditable: 'true',
                      onBlur: this.handleBlur,
                      onKeyDown: this.handleKeyDown,
                    },
                    e,
                  );
                },
              },
            ]),
            e
          );
        })(i.a.PureComponent),
        dt = et(ft),
        pt = {
          name: '',
          params: {},
          canExecute: function() {
            return !0;
          },
          canUndo: function() {
            return !0;
          },
          init: function() {},
          execute: function() {},
          undo: function() {},
          shortcuts: [],
        };
      function gt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var vt = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? gt(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : gt(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })({}, pt, {
        getSelectedNodes: function(t) {
          return t.findAllByState(_.Node, C.Selected);
        },
        setSelectedNode: function(t, e) {
          var n = t.get('autoPaint');
          t.setAutoPaint(!1),
            this.getSelectedNodes(t).forEach(function(e) {
              e.hasState(C.Selected) && t.setItemState(e, C.Selected, !1);
            }),
            t.setItemState(e, C.Selected, !0),
            t.setAutoPaint(n),
            t.paint();
        },
      });
      function mt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function yt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function xt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      U.register('base', vt),
        U.register(
          'redo',
          (function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? mt(n, !0).forEach(function(e) {
                    z()(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : mt(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  });
            }
            return t;
          })({}, pt, {
            canExecute: function() {
              var t = U.commandQueue;
              return U.commandIndex < t.length;
            },
            canUndo: function() {
              return !1;
            },
            execute: function(t) {
              U.commandQueue[U.commandIndex].execute(t), (U.commandIndex += 1);
            },
            shortcuts: [['metaKey', 'shiftKey', 'z'], ['ctrlKey', 'shiftKey', 'z']],
          }),
        ),
        U.register(
          'undo',
          (function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? yt(n, !0).forEach(function(e) {
                    z()(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : yt(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  });
            }
            return t;
          })({}, pt, {
            canExecute: function() {
              return U.commandIndex > 0;
            },
            canUndo: function() {
              return !1;
            },
            execute: function(t) {
              U.commandQueue[U.commandIndex - 1].undo(t), (U.commandIndex -= 1);
            },
            shortcuts: [['metaKey', 'z'], ['ctrlKey', 'z']],
          }),
        );
      var bt = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? xt(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : xt(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })({}, vt, {
        params: { type: _.Node, model: { id: '' } },
        init: function() {
          var t = this.params.model;
          t.id || (t.id = I());
        },
        execute: function(t) {
          var e = this.params,
            n = e.type,
            r = e.model;
          t.add(n, r), this.setSelectedNode(t, r.id);
        },
        undo: function(t) {
          var e = this.params.model;
          t.remove(e.id);
        },
      });
      function wt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      U.register('add', bt);
      var St = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? wt(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : wt(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })({}, vt, {
        params: { id: '', originModel: {}, updateModel: {} },
        canExecute: function(t) {
          var e = this.getSelectedNodes(t);
          return !(!e.length || 1 !== e.length);
        },
        init: function(t) {
          var e = this.params,
            n = e.id,
            r = e.updateModel,
            i = Object.keys(r),
            a = S()(t.findById(n).getModel(), i);
          this.params.originModel = a;
        },
        execute: function(t) {
          var e = this.params,
            n = e.id,
            r = e.updateModel;
          t.updateItem(n, r);
        },
        undo: function(t) {
          var e = this.params,
            n = e.id,
            r = e.originModel;
          t.updateItem(n, r);
        },
      });
      U.register('update', St);
      n(221);
      function Mt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Pt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Mt(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Mt(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      ut.a.registerBehavior('click-node', {
        getDefaultCfg: function() {
          return { multiple: !0, keyCode: 17 };
        },
        getEvents: function() {
          return {
            'node:click': 'handleNodeClick',
            'canvas:click': 'handleCanvasClick',
            keydown: 'handleKeyDown',
            keyup: 'handleKeyUp',
          };
        },
        getSelectedNodes: function() {
          return this.graph.findAllByState(Z, C.Selected);
        },
        getSelectedEdges: function() {
          return this.graph.findAllByState('edge', C.Selected);
        },
        clearEdgeHighlight: function() {
          var t = this.graph;
          this.getSelectedEdges().forEach(function(e) {
            t.setItemState(e, C.Selected, !1);
          });
        },
        clearSelectedState: function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : function() {
                    return !0;
                  },
            e = this.graph,
            n = this.getSelectedNodes(e);
          e.setAutoPaint(!1),
            n.forEach(function(n) {
              t(n) && e.setItemState(n, C.Selected, !1);
            }),
            e.paint(),
            e.setAutoPaint(!0);
        },
        handleNodeClick: function(t) {
          var e = t.item,
            n = this.graph;
          this.highlightParentEdges(e);
          var r = e.hasState(C.Selected);
          this.multiple && this.keydown
            ? n.setItemState(e, C.Selected, !r)
            : (this.clearSelectedState(function(t) {
                return t !== e;
              }),
              r || n.setItemState(e, C.Selected, !0));
        },
        highlightParentEdges: function(t) {
          var e = this.graph;
          this.clearEdgeHighlight();
          var n = this.findParentEdges(t);
          n.length > 0 &&
            n.forEach(function(t) {
              return e.setItemState(t, C.Selected, !0);
            });
        },
        findParentEdges: function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = t.get('parent');
          return n
            ? (e.push(
                t.getEdges().find(function(t) {
                  return t.getModel().source === n.getModel().id;
                }),
              ),
              this.findParentEdges(t.get('parent'), e))
            : e;
        },
        handleCanvasClick: function() {
          this.clearSelectedState(), this.clearEdgeHighlight();
        },
        handleKeyDown: function(t) {
          this.keydown = (t.keyCode || t.which) === this.keyCode;
        },
        handleKeyUp: function() {
          this.keydown = !1;
        },
      }),
        ut.a.registerBehavior('hover-node', {
          getEvents: function() {
            return { 'node:mouseenter': 'handleNodeMouseenter', 'node:mouseleave': 'handleNodeMouseleave' };
          },
          handleNodeMouseenter: function(t) {
            var e = t.item;
            this.graph.setItemState(e, C.Active, !0);
          },
          handleNodeMouseleave: function(t) {
            var e = t.item;
            this.graph.setItemState(e, C.Active, !1);
          },
        }),
        ut.a.registerBehavior('edit-label', {
          getEvents: function() {
            return {
              'node:click': 'handleNodeClick',
              'node:dblclick': 'handleNodeDoubleClick',
              'canvas:click': 'handleCanvasClick',
            };
          },
          hideLabel: function() {
            this.graph.emit(N.onBeforeLabelStateChange, { labelState: j.Hide });
          },
          showLabel: function() {
            this.graph.emit(N.onBeforeLabelStateChange, { labelState: j.Show });
          },
          handleNodeClick: function() {
            this.hideLabel();
          },
          handleNodeDoubleClick: function() {
            this.showLabel();
          },
          handleCanvasClick: function() {
            this.hideLabel();
          },
        });
      var It = (function(t) {
          function e() {
            var t, n;
            l()(this, e);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            return (
              ((n = p()(this, (t = v()(e)).call.apply(t, [this].concat(i)))).getGraphState = function() {
                var t = '';
                switch (n.graph.findAllByState(Z, C.Selected).length) {
                  case 0:
                    t = E.CanvasSelected;
                    break;
                  case 1:
                    t = ''.concat(E.NodeSelected, '_').concat(I());
                    break;
                  default:
                    t = ''.concat(E.MultiSelected, '_').concat(I());
                }
                return t;
              }),
              n
            );
          }
          return (
            y()(e, t),
            f()(e, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.initGraph(), this.bindEvent();
                },
              },
              {
                key: 'initGraph',
                value: function() {
                  var t = this.props,
                    e = t.containerId,
                    n = t.parseData,
                    r = t.initGraph,
                    i = t.setGraph,
                    a = document.getElementById(e),
                    o = a.clientWidth,
                    s = a.clientHeight,
                    c = Pt({}, this.props.data);
                  n({ data: c }),
                    (this.graph = r({ width: o, height: s })),
                    this.graph.data(c),
                    this.graph.render(),
                    this.graph.fitView(),
                    i(this.graph);
                },
              },
              {
                key: 'bindEvent',
                value: function() {
                  var t = this,
                    e = this.graph,
                    n = this.props,
                    r = Pt({}, D, {}, B, {}, T, {}, L, {}, R);
                  Object.keys(r).forEach(function(t) {
                    O(e, r[t], n[t]);
                  });
                  var i = this.props.setGraphState;
                  O(e, N.onAfterExecuteCommand, function(e) {
                    var n = e.name;
                    [k.Undo, k.Redo, k.Topic, k.Subtopic].includes(n) && i(t.getGraphState());
                  }),
                    O(e, B.onNodeClick, function() {
                      i(t.getGraphState());
                    }),
                    O(e, L.onCanvasClick, function() {
                      i(E.CanvasSelected);
                    });
                },
              },
              {
                key: 'render',
                value: function() {
                  var t = this.props,
                    e = t.containerId,
                    n = t.children;
                  return i.a.createElement(
                    'div',
                    q()({ id: e }, S()(this.props, ['className', 'style'])),
                    n,
                    i.a.createElement(dt, null),
                  );
                },
              },
            ]),
            e
          );
        })(i.a.Component),
        Ot = et(It),
        At = (n(51), { stroke: '#ff9800', lineWidth: 1 }),
        _t = { fill: '#F3F9FF', fillOpacity: 0.5, stroke: '#1890FF', strokeOpacity: 0.9, lineDash: [5, 5] },
        Ct = 6,
        Et = { stroke: '#A3B1BF', strokeOpacity: 0.92, lineWidth: 1, lineAppendWidth: 8 },
        jt = { stroke: '#1890FF', strokeOpacity: 0.92 },
        Nt = { fill: '#666', textAlign: 'center', textBaseline: 'middle' },
        kt = 4,
        Dt = { fill: '#eee' },
        Bt = { fill: '#F3F9FF', stroke: '#1890FF', fillOpacity: 0.92 },
        Tt = { shadowOffsetX: 0, shadowOffsetY: 4, shadowBlur: 10, shadowColor: '#ccc', lineWidth: 1.5 },
        Lt = {
          x: 0,
          y: 0,
          r: 17,
          stroke: '#1296DB',
          fill: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 0,
          shadowColor: '#fff',
          lineWidth: 1,
        },
        Rt = { x: 0, y: 0, r: 17, stroke: '#1296DB' },
        Yt = { x: 0, y: 0, r: 12, stroke: '#1296DB', fill: '#1296DB', lineWidth: 1 },
        Xt = {
          stroke: '#d5d5d5',
          fill: '#FFFFFF',
          lineWidth: 1,
          radius: 4,
          fillOpacity: 0.92,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 0,
          shadowColor: '#fff',
          nodeColor: '#13c2c2',
        };
      function Ft(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Zt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ft(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Ft(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var Gt = { radius: 3.5, fill: '#fff', stroke: '#1890FF', lineAppendWidth: 12 },
        zt = { radius: 4, fill: '#1890FF', fillOpacity: 1, stroke: '#1890FF' },
        Ht = { radius: 14 },
        Wt = { radius: 12, fill: '#1890FF', fillOpacity: 0.25 },
        Ut = { anchorPoint: 3, anchorHotsopt: 2, selectedBox: 1, controlPoint: 4 };
      function Vt(t, e, n) {
        var r = n.getModel(),
          i = n.getContainer(),
          a = i.get('children').filter(function(t) {
            return 'anchor' === t.get('className');
          });
        if (
          (this.addingEdge || n.hasState('addingSource')
            ? 'activeAnchor' === t &&
              (e
                ? e.setHotspotActived && e.setHotspotActived(!0)
                : a.forEach(function(t) {
                    return t.setHotspotActived && t.setHotspotActived(!1);
                  }))
            : ('activeAnchor' === t &&
                (e
                  ? e.setActived && e.setActived()
                  : a.forEach(function(t) {
                      return t.clearActived();
                    })),
              'active' === t &&
                (e
                  ? qt.call(this, r, i)
                  : !n.hasState('selected') &&
                    a.forEach(function(t) {
                      return t.remove();
                    })),
              'selected' !== t ||
                e ||
                a.forEach(function(t) {
                  return t.remove();
                })),
          'addingEdge' === t)
        )
          if (e) {
            (this.addingEdge = !0),
              qt.call(this, r, i).forEach(function(t) {
                return t.showHotspot();
              });
          } else
            n
              .getContainer()
              .get('children')
              .filter(function(t) {
                return 'anchor' === t.get('className');
              })
              .forEach(function(t) {
                return t.remove();
              }),
              (this.addingEdge = !1);
      }
      function qt(t, e) {
        return this.getAnchorPoints().map(function(t, n) {
          var r,
            i = e.get('item').getKeyShape(),
            a = i.attr('width') || 2 * i.attr('r'),
            o = i.attr('height') || 2 * i.attr('r'),
            s = [t[0], t[1]],
            c = s[0],
            u = s[1],
            l = {
              flowNode: { x: a * c + i.attr('x'), y: o * u + i.attr('y') },
              startNode: { x: a * c - a / 2, y: o * u - o / 2 },
              endNode: { x: a * c - a / 2, y: o * u - o / 2 },
            },
            h = e.addShape('marker', {
              className: 'anchor',
              attrs: Zt({ symbol: 'circle' }, Gt, {}, l[i.baseType] || l.flowNode),
              index: n,
              zIndex: Ut.anchorPoint,
            });
          return (
            (h.showHotspot = function() {
              (r = e.addShape('marker', {
                className: 'anchor',
                attrs: Zt({ symbol: 'circle' }, Wt, {}, l[i.baseType] || l.flowNode),
                zIndex: Ut.anchorHotsopt,
              })).toFront(),
                h.toFront();
            }),
            (h.setActived = function() {
              return h.attr(zt);
            }),
            (h.clearActived = function() {
              return h.attr(Gt);
            }),
            (h.setHotspotActived = function(t) {
              r && (t ? r.attr(Ht) : r.attr(Wt));
            }),
            h
          );
        });
      }
      n(130), n(131), n(96), n(225), n(226), n(136), n(137), n(138), n(139), n(140);
      var Jt = n(33),
        Qt = n.n(Jt);
      function Kt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function $t(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Kt(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Kt(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var te,
        ee = document.createElement('canvas').getContext('2d'),
        ne = {
          optimizeMultilineText: function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 94;
            if (((ee.font = e), ee.measureText(t).width <= n)) return t;
            var r = '',
              i = 0,
              a = !0,
              o = !1,
              s = void 0;
            try {
              for (var c, u = t[Symbol.iterator](); !(a = (c = u.next()).done); a = !0) {
                var l = c.value,
                  h = ee.measureText(l),
                  f = h.width;
                i + f >= n && ((r += '\n'), (i = 0)), (r += l), (i += f);
              }
            } catch (t) {
              (o = !0), (s = t);
            } finally {
              try {
                a || null == u.return || u.return();
              } finally {
                if (o) throw s;
              }
            }
            var d = r.split('\n');
            return d.length > 1 ? ''.concat(d[0], '\n').concat(d[1].slice(0, -1), '...') : r;
          },
          getRectPath: function(t, e, n, r, i) {
            if (i)
              return [
                ['M', +t + +i, e],
                ['l', n - 2 * i, 0],
                ['a', i, i, 0, 0, 1, i, i],
                ['l', 0, r - 2 * i],
                ['a', i, i, 0, 0, 1, -i, i],
                ['l', 2 * i - n, 0],
                ['a', i, i, 0, 0, 1, -i, -i],
                ['l', 0, 2 * i - r],
                ['a', i, i, 0, 0, 1, i, -i],
                ['z'],
              ];
            var a = [['M', t, e], ['l', n, 0], ['l', 0, r], ['l', -n, 0], ['z']];
            return (a.toString = toString), a;
          },
          getCollapseButtonPath: function(t) {
            var e = t.width,
              n = t.height;
            return (
              this.getRectPath(0, 0, e, n, 2) +
              'M'
                .concat((3 * e) / 14, ',')
                .concat(n / 2, ' L')
                .concat((11 * e) / 14, ',')
                .concat(n / 2) +
              ''
            );
          },
          getExpandButtonPath: function(t) {
            var e = t.width,
              n = t.height;
            return (
              this.getRectPath(0, 0, e, n, 2) +
              'M'
                .concat((3 * e) / 14, ',')
                .concat(n / 2, ' L')
                .concat((11 * e) / 14, ',')
                .concat(n / 2) +
              'M'
                .concat(e / 2, ',')
                .concat((3 * n) / 14, ' L')
                .concat(e / 2, ',')
                .concat((11 * n) / 14)
            );
          },
          itemStates: function(t) {
            var e = this,
              n = t.item,
              r = t.group,
              i = function(t) {
                var r = t.attr(),
                  i = r.width,
                  a = r.height,
                  o = r.x,
                  s = r.y,
                  c = r.textBaseline;
                if ('function' == typeof e['get'.concat(Qt()(t.get('className')), 'Style')]) {
                  var u = e['get'.concat(Qt()(t.get('className')), 'Style')]({ model: n.getModel() });
                  return $t({}, t.getDefaultAttrs(), {}, u, { width: i, height: a, x: o, y: s, textBaseline: c });
                }
                return $t({}, t.getDefaultAttrs());
              },
              a = function(t) {
                var n = e.getCustomStatesStyle()[t];
                Object.keys(n).forEach(function(t) {
                  var e = r.findByClassName(t);
                  e && e.attr($t({}, i(e), {}, n[t]));
                });
              };
            return {
              active: function() {
                a('active');
              },
              selected: function() {
                a('selected');
              },
              staticState: function() {
                r.get('children').map(function(t) {
                  return t.attr($t({}, i(t)));
                });
              },
            };
          },
        };
      function re(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ie(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? re(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : re(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var ae,
        oe =
          ((te = {
            keyShape: null,
            label: null,
            wrapper: null,
            appendix: null,
            draw: function(t, e) {
              this.drawWrapper(t, e);
              var n = this.drawKeyShape(t, e);
              return this.drawLabel(t, e), this.drawAppendix(t, e), this.adjustPosition({ model: t, group: e }), n;
            },
            drawAppendix: function(t, e) {
              t.x > 0
                ? (this.appendix = e.addShape('image', {
                    className: A.Appendix,
                    attrs: {
                      img:
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLTFoNTgydjQwMkgtMXoiLz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9IiNGNEY2RjgiIGQ9Ik0wIDBoMTRhNiA2IDAgMCAxIDYgNnY2SDZhNiA2IDAgMCAxLTYtNlYweiIvPjxnIGZpbGw9IiNBQUI1QzUiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE0LjUgOCkiPjxjaXJjbGUgcj0iMS41IiBjeT0iNyIgY3g9IjEyIi8+PGNpcmNsZSByPSIxLjUiIGN5PSIxMiIgY3g9IjEyIi8+PGNpcmNsZSByPSIxLjUiIGN5PSIxNyIgY3g9IjEyIi8+PC9nPjwvZz48L3N2Zz4=',
                      x: 0,
                      y: 0,
                      width: 20,
                    },
                  }))
                : (this.appendix = e.addShape('image', {
                    className: A.Appendix,
                    attrs: {
                      img:
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLTFoNTgydjQwMkgtMXoiLz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9IiNGNEY2RjgiIGQ9Ik0yMCAwSDZhNiA2IDAgMCAwLTYgNnY2aDE0YTYgNiAwIDAgMCA2LTZWMHoiLz48ZyBmaWxsPSIjQUFCNUM1IiB0cmFuc2Zvcm09Im1hdHJpeCgwIDEgMSAwIDMgNCkiPjxjaXJjbGUgcj0iMS41IiBjeT0iMS41IiBjeD0iMS41Ii8+PGNpcmNsZSByPSIxLjUiIGN5PSI2LjUiIGN4PSIxLjUiLz48Y2lyY2xlIHI9IjEuNSIgY3k9IjExLjUiIGN4PSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==',
                      x: 0,
                      y: 0,
                      width: 20,
                    },
                  }));
            },
            drawKeyShape: function(t, e) {
              var n = this['get'.concat(A.KeyShape, 'defaultStyle')]();
              return (
                (this.keyShape = e.addShape('rect', {
                  className: A.KeyShape,
                  attrs: ie({ x: 0, y: 0, width: 114, height: 36, stroke: '#6580EB' }, n),
                })),
                this.keyShape
              );
            },
            drawWrapper: function(t, e) {
              return (
                (this.wrapper = e.addShape('rect', {
                  className: A.Wrapper,
                  attrs: ie(
                    { width: 20, height: 20, x: 0, y: 0, fill: '#6580EB', radius: [8, 6, 6, 8] },
                    this['get'.concat(A.Wrapper, 'defaultStyle')](),
                  ),
                })),
                this.wrapper
              );
            },
            drawLabel: function(t, e) {
              var n = this['get'.concat(A.Label, 'defaultStyle')]();
              this.label = e.addShape('text', {
                className: A.Label,
                attrs: ie({ text: t.label, x: 0, y: 0 }, n, { textBaseline: 'middle' }),
              });
              var r = this.label.attr(),
                i = r.text,
                a = r.fontWeight,
                o = r.fontFamily,
                s = r.fontSize,
                c = r.fontStyle,
                u = r.fontVariant,
                l = ''
                  .concat(c, ' ')
                  .concat(u, ' ')
                  .concat(a, ' ')
                  .concat(s, 'px ')
                  .concat(o);
              return this.label.attr('text', ne.optimizeMultilineText(i, l, this.getMaxTextLineWidth())), this.label;
            },
            update: function(t, e) {
              var n = e.getContainer(),
                r = n.findByClassName(A.Label);
              r.remove(), (r = this.drawLabel(t, n)), this.adjustPosition({ group: n, model: t });
            },
            setState: function(t, e, n) {
              this.setStateStyle(n);
            },
            adjustPosition: function(t) {
              var e = t.model,
                n = t.group,
                r = n.findByClassName(A.KeyShape),
                i = n.findByClassName(A.Label),
                a = n.findByClassName(A.Wrapper),
                o = n.findByClassName(A.Appendix),
                s = this.adjustKeyShape({ label: i, keyShape: r });
              a && this.adjustWrapper({ keyShapeSize: s, keyShape: r, label: i, wrapper: a, model: e }),
                i && this.adjustLabel({ keyShapeSize: s, keyShape: r, label: i, wrapper: a }),
                o && this.adjustAppendix({ keyShapeSize: s, appendix: o, model: e }),
                this.resetCoordinate({ keyShapeSize: s, keyShape: r, label: i, wrapper: a });
            },
            adjustKeyShape: function(t) {
              var e = t.label,
                n = t.keyShape;
              return (
                e.attr('text').includes('\n') && (n.attr('width', 114), n.attr('height', 54)),
                { width: n.attr('width'), height: n.attr('height') }
              );
            },
            adjustAppendix: function(t) {
              var e = t.keyShapeSize,
                n = t.appendix,
                r = t.model,
                i = e.width,
                a = e.height;
              r &&
                (r.x < 0
                  ? (n.attr('x', -i / 2 + 1), n.attr('y', -a / 2 + 1))
                  : (n.attr('x', i / 2 - n.attr('width') - 1), n.attr('y', -a / 2 + 1)));
            },
            resetCoordinate: function(t) {
              var e = t.keyShapeSize,
                n = t.keyShape,
                r = [t.label];
              n.attr('x', 0 - e.width / 2),
                n.attr('y', 0 - e.height / 2),
                r.map(function(t) {
                  return t.attr('x', t.attr('x') - e.width / 2), t.attr('y', t.attr('y') - e.height / 2), t;
                });
            },
            adjustLabel: function(t) {
              var e = t.keyShapeSize,
                n = t.label,
                r = e.width,
                i = e.height,
                a = n.getBBox().width;
              n.attr('x', (r - a) / 2), n.attr('y', i / 2);
            },
            adjustWrapper: function(t) {
              var e = t.model,
                n = t.keyShapeSize,
                r = t.wrapper,
                i = n.width,
                a = n.height;
              e &&
                (r.attr('height', a + 1),
                r.attr('width', i),
                r.attr('y', -r.attr('height') / 2),
                e.x < 0 ? r.attr('x', -i / 2 + 4) : r.attr('x', -i / 2 - 4));
            },
            setStateStyle: function(t) {
              var e = this,
                n = t.getStates();
              t.getContainer()
                .get('children')
                .forEach(function(t) {
                  var r = t.get('className'),
                    i = {};
                  n.forEach(function(t) {
                    i = ie({}, i, {}, e['get'.concat(r).concat(t, 'Style')] && e['get'.concat(r).concat(t, 'Style')]());
                  }),
                    t.attr(ie({}, e['get'.concat(r, 'defaultStyle')] && e['get'.concat(r, 'defaultStyle')](), {}, i));
                });
            },
          }),
          z()(te, 'get'.concat(A.KeyShape, 'defaultStyle'), function() {
            return { fill: '#fff', radius: 6 };
          }),
          z()(te, 'get'.concat(A.KeyShape, 'activeStyle'), function() {
            return { fill: '#f1f1f1' };
          }),
          z()(te, 'get'.concat(A.KeyShape, 'selectedStyle'), function() {
            return { fill: '#f1f1f1' };
          }),
          z()(te, 'get'.concat(A.Wrapper, 'defaultStyle'), function() {
            return {};
          }),
          z()(te, 'get'.concat(A.Wrapper, 'selectedStyle'), function() {
            return { shadowOffsetX: 0, shadowOffsetY: 4, shadowBlur: 10, shadowColor: '#ccc' };
          }),
          z()(te, 'get'.concat(A.Label, 'defaultStyle'), function() {
            return { fill: '#000' };
          }),
          z()(te, 'getMaxTextLineWidth', function() {
            return F;
          }),
          z()(te, 'getAnchorPoints', function() {
            return [[0, 0], [0, 0]];
          }),
          te);
      function se(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ce(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? se(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : se(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      ut.a.registerNode('biz-node', oe),
        ut.a.registerNode(
          'biz-flow-node',
          ((ae = {
            handleAnchor: Vt,
            update: function(t, e) {
              var n = e.getContainer(),
                r = n.findByClassName(A.Anchor);
              r && r.remove();
              var i = n.findByClassName(A.Label);
              i.remove(), (i = this.drawLabel(t, n)), this.adjustPosition({ item: e, group: n });
            },
          }),
          z()(ae, 'get'.concat(A.KeyShape, 'defaultStyle'), function() {
            return { stroke: '#dadada', fill: '#fff', radius: 5 };
          }),
          z()(ae, 'setState', function(t, e, n) {
            this.setStateStyle(n), this.handleAnchor(t, e, n);
          }),
          z()(ae, 'getAnchorPoints', function() {
            return [[0, 0.5], [1, 0.5], [0.5, 1], [0.5, 0]];
          }),
          ae),
          'biz-node',
        ),
        ut.a.registerNode('flowNode', {}, 'biz-flow-node');
      var ue = Xt,
        le = Bt,
        he = Tt,
        fe = Lt;
      function de(t, e, n) {
        var r = function() {
          var t = n.getKeyShape().baseType;
          'startNode' == t || 'endNode' == t ? n.get('keyShape').attr(ce({}, fe)) : n.get('keyShape').attr(ce({}, ue));
        };
        ('selected' !== t && 'active' !== t && 'activeAnchor' !== t) || !e || n.get('keyShape').attr(ce({}, le)),
          'selected' === t && e && n.get('keyShape').attr(ce({}, he)),
          'selected' !== t || e || r(),
          'active' !== t || e || n.hasState('selected') || n.hasState('addingSource') || r();
      }
      function pe(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ge(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? pe(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : pe(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var ve = Rt,
        me = Yt;
      function ye(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function xe(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ye(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ye(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      ut.a.registerNode('endNode', {
        drawActivedNode: de,
        handleAnchor: Vt,
        draw: function(t, e) {
          return (
            (this.keyShape = e.addShape('circle', { attrs: ge({}, ve) })),
            e.addShape('circle', { attrs: ge({}, me) }),
            (this.keyShape.baseType = 'endNode'),
            this.keyShape
          );
        },
        setState: function(t, e, n) {
          this.handleAnchor(t, e, n), this.drawActivedNode(t, e, n);
        },
        getAnchorPoints: function() {
          return [[0.5, 0], [1, 0.5], [0.5, 1], [0, 0.5]];
        },
      });
      var be = Lt;
      ut.a.registerNode('startNode', {
        handleAnchor: Vt,
        drawActivedNode: de,
        draw: function(t, e) {
          return (
            (this.keyShape = e.addShape('circle', { attrs: xe({}, be) })),
            (this.keyShape.baseType = 'startNode'),
            this.keyShape
          );
        },
        update: function(t, e) {
          var n;
          this.resetCoordinate({
            keyShapeSize: ((n = this.keyShape), { width: n.attr('width'), height: n.attr('height') }),
            keyShape: this.keyShape,
          });
        },
        setState: function(t, e, n) {
          this.handleAnchor(t, e, n), this.drawActivedNode(t, e, n);
        },
        resetCoordinate: function(t) {
          var e = t.keyShapeSize,
            n = t.keyShape;
          n.attr('x', 0 - e.width / 2), n.attr('y', 0 - e.height / 2);
        },
        getAnchorPoints: function() {
          return [[0.5, 0], [1, 0.5], [0.5, 1], [0, 0.5]];
        },
      });
      n(236);
      var we = n(41),
        Se = n.n(we),
        Me = n(42),
        Pe = n.n(Me);
      n(240);
      function Ie(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var Oe = Et,
        Ae = Ct;
      function _e(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
      }
      var Ce = function(t, e, n, r) {
        var i = (function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Ie(n, !0).forEach(function(e) {
                  z()(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Ie(n).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
          }
          return t;
        })({}, t.endPoint);
        if (i) {
          var a = n.get('segments'),
            o = a[a.length - 1];
          if (o && o.endTangent) {
            var s = o.endTangent();
            if (0 !== s[0] || 0 !== s[1]) {
              var c = (function(t, e) {
                  var n = e[0],
                    r = e[1],
                    i = n * n + r * r;
                  i > 0 && ((i = 1 / Math.sqrt(i)), (t[0] = e[0] * i), (t[1] = e[1] * i));
                  return t;
                })([], s),
                u = Ae * c[0],
                l = Ae * c[1],
                h = (r = (function(t) {
                  var e = '\t\n\v\f\r   ᠎             　\u2028\u2029',
                    n = new RegExp(
                      '([a-z])[' + e + ',]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[' + e + ']*,?[' + e + ']*)+)',
                      'ig',
                    ),
                    r = new RegExp('(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[' + e + ']*,?[' + e + ']*', 'ig');
                  if (!t) return null;
                  if (Se()(t) === Se()([])) return t;
                  var i = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
                    a = [];
                  return (
                    String(t).replace(n, function(e, n, o) {
                      var s = [],
                        c = n.toLowerCase();
                      if (
                        (o.replace(r, function(t, e) {
                          e && s.push(+e);
                        }),
                        'm' === c &&
                          s.length > 2 &&
                          (a.push([n].concat(s.splice(0, 2))), (c = 'l'), (n = 'm' === n ? 'l' : 'L')),
                        'o' === c && 1 === s.length && a.push([n, s[0]]),
                        'r' === c)
                      )
                        a.push([n].concat(s));
                      else for (; s.length >= i[c] && (a.push([n].concat(s.splice(0, i[c]))), i[c]); );
                      return t;
                    }),
                    a
                  );
                })(r))[r.length - 1];
              (h[h.length - 2] -= u), (h[h.length - 1] -= l), n.attr('path', r), (i.x -= u), (i.y -= l);
              var f,
                d,
                p,
                g,
                v,
                m,
                y,
                x,
                b = e.addShape('marker', {
                  attrs: {
                    symbol: function(t, e, n) {
                      var r = n / 1.6;
                      return [['M', t, e - r], ['L', t + Ae, e], ['L', t, e + r], ['z']];
                    },
                    radius: Ae,
                    fill: Oe.stroke,
                  },
                });
              return (
                (f = b),
                (d = i.x),
                (p = i.y),
                (g = 0),
                (v = 0),
                (m = s[0]),
                (y = s[1]),
                (x = (function(t, e, n) {
                  var r = (function(t, e) {
                      var n,
                        r,
                        i,
                        a =
                          (function(t, e) {
                            return t[0] * e[0] + t[1] * e[1];
                          })(t, e) /
                          (_e(t) * _e(e));
                      return Math.acos(((i = 1), (n = a) < (r = -1) ? r : n > i ? i : n));
                    })(t, e),
                    i =
                      (function(t, e) {
                        return t[0] * e[1] - e[0] * t[1];
                      })(t, e) >= 0;
                  return n ? (i ? 2 * Math.PI - r : r) : i ? r : 2 * Math.PI - r;
                })([m - g, y - v], [1, 0], !0)),
                f.transform([['r', x], ['t', d, p]]),
                b
              );
            }
          }
        }
      };
      function Ee(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function je(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ee(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Ee(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var Ne = Nt,
        ke = Dt,
        De = kt;
      function Be(t, e, n) {
        var r = n.getPoint(0.5),
          i = t.label;
        if (r && i) {
          var a = je({}, Ne, {}, r, { text: i }),
            o = e.addShape('text', { attrs: a }),
            s = De,
            c = o.getBBox();
          return (
            e.addShape('rect', {
              attrs: je({}, ke, {
                x: c.minX - s,
                y: c.minY - s,
                width: c.maxX - c.minX + s + s,
                height: c.maxY - c.minY + s + s,
              }),
            }),
            o.toFront(),
            o
          );
        }
      }
      function Te(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Le(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Te(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Te(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var Re = jt,
        Ye = Et;
      function Xe(t, e, n) {
        var r = n.getKeyShape(),
          i = function() {
            r.attr(Le({}, Ye)), r.endArrow && r.endArrow.attr({ fill: Ye.stroke });
          };
        ('selected' !== t && 'active' !== t) ||
          !e ||
          (r.endArrow && r.endArrow.attr({ fill: Re.stroke }),
          r.attr(Le({}, Re, {}, 'selected' === t ? { lineWidth: 2 } : {}))),
          'selected' !== t || e || i(),
          'active' !== t || e || n.hasState('selected') || i();
      }
      function Fe(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ze(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Fe(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Fe(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var Ge = Et;
      function ze(t, e) {
        var n = Math.min(t.minX, e.minX),
          r = Math.min(t.minY, e.minY),
          i = Math.max(t.maxX, e.maxX),
          a = Math.max(t.maxY, e.maxY);
        return {
          centerX: (n + i) / 2,
          centerY: (r + a) / 2,
          minX: n,
          minY: r,
          maxX: i,
          maxY: a,
          height: a - r,
          width: i - n,
        };
      }
      function He(t, e) {
        return (
          2 * Math.abs(t.centerX - e.centerX) < t.width + e.width &&
          2 * Math.abs(t.centerY - e.centerY) < t.height + e.height
        );
      }
      function We(t) {
        var e = t.x,
          n = t.y;
        return { centerX: e, centerY: n, minX: e, minY: n, maxX: e, maxY: n, height: 0, width: 0 };
      }
      function Ue(t, e) {
        return 0 === t.width && 0 === t.height
          ? t
          : {
              centerX: t.centerX,
              centerY: t.centerY,
              minX: t.minX - e,
              minY: t.minY - e,
              maxX: t.maxX + e,
              maxY: t.maxY + e,
              height: t.height + 2 * e,
              width: t.width + 2 * e,
            };
      }
      function Ve(t, e) {
        return (function(t, e) {
          var n = Math.abs(t.x - e.centerX),
            r = Math.abs(t.y - e.centerY);
          return n / e.width > r / e.height;
        })(e, t)
          ? { x: e.x > t.centerX ? t.maxX : t.minX, y: e.y }
          : { x: e.x, y: e.y > t.centerY ? t.maxY : t.minY };
      }
      function qe(t) {
        var e = t.minX,
          n = t.minY,
          r = t.maxX,
          i = t.maxY;
        return [{ x: e, y: n }, { x: r, y: n }, { x: r, y: i }, { x: e, y: i }];
      }
      function Je(t, e) {
        var n = t.x,
          r = t.y;
        return n < e.minX || n > e.maxX || r < e.minY || r > e.maxY;
      }
      function Qe(t, e, n, r) {
        var i = e.x - t.x,
          a = e.y - t.y,
          o = r.x - n.x,
          s = r.y - n.y,
          c = (-a * (t.x - n.x) + i * (t.y - n.y)) / (-o * a + i * s),
          u = (o * (t.y - n.y) - s * (t.x - n.x)) / (-o * a + i * s);
        return c >= 0 && c <= 1 && u >= 0 && u <= 1;
      }
      function Ke(t, e, n) {
        if (0 === n.height && 0 === n.width) return !1;
        var r = qe(n),
          i = Pe()(r, 4),
          a = i[0],
          o = i[1],
          s = i[2],
          c = i[3];
        return Qe(t, e, a, o) || Qe(t, e, a, c) || Qe(t, e, o, s) || Qe(t, e, s, c);
      }
      function $e(t) {
        return (t = (function(t) {
          for (var e = [t[0]], n = 1; n < t.length; n++) {
            var r = t[n],
              i = t[n + 1],
              a = t[n - 1];
            (i && a && ((i.x === r.x && a.x === r.x) || (i.y === r.y && a.y === r.y))) || e.push(r);
          }
          return e;
        })((t = en(t))));
      }
      function tn(t, e) {
        return [t, { x: t.x, y: e.y }, e];
      }
      function en(t) {
        var e = [],
          n = {};
        return (
          t.forEach(function(t) {
            var e = (t.id = ''.concat(t.x, '-').concat(t.y));
            n[e] = t;
          }),
          Object.keys(n).forEach(function(t) {
            return e.push(n[t]);
          }),
          e
        );
      }
      function nn(t, e) {
        return Math.abs(t.x - e.x) + Math.abs(t.y - e.y);
      }
      function rn(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
          i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
        return (
          nn(t, e) +
          nn(t, n) +
          (function(t, e) {
            var n = 0;
            return (
              e.forEach(function(e) {
                e && (t.x === e.x && (n += -2), t.y === e.y && (n += -2));
              }),
              n
            );
          })(t, [e, n, r, i])
        );
      }
      function an(t, e, n, r, i, a, o) {
        var s = [],
          c = [e],
          u = {},
          l = {},
          h = {};
        (l[e.id] = 0), (h[e.id] = rn(e, n, e));
        var f = {};
        t.forEach(function(t) {
          f[t.id] = t;
        });
        for (
          var d = function() {
            var d,
              p,
              g,
              v = void 0,
              m = 1 / 0;
            if (
              (c.forEach(function(t) {
                h[t.id] < m && ((m = h[t.id]), (v = t));
              }),
              v === n)
            ) {
              var y = [];
              return (
                (function t(e, n, r, i) {
                  var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                  e.unshift(n[i]), r[i] && r[i] !== i && a <= 100 && t(e, n, r, r[i], a + 1);
                })(y, f, u, n.id),
                { v: y }
              );
            }
            (p = v),
              (g = (d = c).indexOf(p)) > -1 && d.splice(g, 1),
              s.push(v),
              (function(t, e, n, r) {
                var i = [];
                return (
                  t.forEach(function(t) {
                    t !== e && ((t.x !== e.x && t.y !== e.y) || Ke(t, e, n) || Ke(t, e, r) || i.push(t));
                  }),
                  en(i)
                );
              })(t, v, r, i).forEach(function(t) {
                if (-1 === s.indexOf(t)) {
                  -1 === c.indexOf(t) && c.push(t);
                  var r = h[v.id] + nn(v, t);
                  (l[t.id] && r >= l[t.id]) ||
                    ((u[t.id] = v.id), (l[t.id] = r), (h[t.id] = l[t.id] + rn(t, n, e, a, o)));
                }
              });
          };
          c.length;

        ) {
          var p = d();
          if ('object' === Se()(p)) return p.v;
        }
        return console.error('cannot find path: ', t, e, n), [e, n];
      }
      function on(t, e, n, r, i) {
        var a = n && n.getBBox ? n.getBBox() : We(t),
          o = r && r.getBBox ? r.getBBox() : We(e);
        if (He(a, o)) return $e(tn(t, e));
        var s = Ue(a, i),
          c = Ue(o, i);
        if (He(s, c)) return $e(tn(t, e));
        var u = Ve(s, t),
          l = Ve(c, e),
          h = (function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              e = [],
              n = [];
            t.forEach(function(t) {
              e.push(t.x), n.push(t.y);
            });
            var r = Math.min.apply(Math, e),
              i = Math.max.apply(Math, e),
              a = Math.min.apply(Math, n),
              o = Math.max.apply(Math, n);
            return {
              centerX: (r + i) / 2,
              centerY: (a + o) / 2,
              maxX: i,
              maxY: o,
              minX: r,
              minY: a,
              height: o - a,
              width: i - r,
            };
          })([u, l]),
          f = (ze(s, c), ze(s, h)),
          d = ze(c, h),
          p = [];
        p = (p = p.concat(qe(f))).concat(qe(d));
        var g = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 };
        [h, f, d].forEach(function(t) {
          p = p.concat(
            (function(t, e) {
              return (function(t, e) {
                return e < t.minX || e > t.maxX ? [] : [{ x: e, y: t.minY }, { x: e, y: t.maxY }];
              })(t, e.x).concat(
                (function(t, e) {
                  return e < t.minY || e > t.maxY ? [] : [{ x: t.minX, y: e }, { x: t.maxX, y: e }];
                })(t, e.y),
              );
            })(t, g).filter(function(t) {
              return Je(t, s) && Je(t, c);
            }),
          );
        }),
          [{ x: u.x, y: l.y }, { x: l.x, y: u.y }].forEach(function(t) {
            Je(t, s) && Je(t, c) && p.push(t);
          }),
          p.unshift(u),
          p.push(l);
        var v = an((p = en(p)), u, l, a, o, t, e);
        return v.unshift(t), v.push(e), $e(v);
      }
      function sn(t, e) {
        var n = [],
          r = t[0];
        return (
          n.push(['M', r.x, r.y]),
          t.forEach(function(r, i) {
            var a = t[i + 1],
              o = t[i + 2];
            if (a && o)
              if (
                (function(t, e, n) {
                  return !((t.x === e.x) === n.x || (t.y === e.y) === n.y);
                })(r, a, o)
              ) {
                var s = (function(t, e, n, r) {
                    var i = nn(t, e),
                      a = nn(n, e);
                    return (
                      i < r && (r = i),
                      a < r && (r = a),
                      [
                        { x: e.x - (r / i) * (e.x - t.x), y: e.y - (r / i) * (e.y - t.y) },
                        { x: e.x - (r / a) * (e.x - n.x), y: e.y - (r / a) * (e.y - n.y) },
                      ]
                    );
                  })(r, a, o, e),
                  c = Pe()(s, 2),
                  u = c[0],
                  l = c[1];
                n.push(['L', u.x, u.y]), n.push(['Q', a.x, a.y, l.x, l.y]), n.push(['L', l.x, l.y]);
              } else n.push(['L', a.x, a.y]);
            else a && n.push(['L', a.x, a.y]);
          }),
          n
        );
      }
      function cn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function un(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? cn(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : cn(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      ut.a.registerEdge('polyline', {
        offset: 10,
        draw: function(t, e) {
          var n = this.getPath(t),
            r = e.addShape('path', { attrs: Ze({ path: n }, Ge) });
          return (r.endArrow = Ce(t, e, r, n)), Be(t, e, r), r;
        },
        getPath: function(t) {
          var e = [t.startPoint, t.endPoint],
            n = t.sourceNode,
            r = t.targetNode;
          return this.getPathByPoints(e, n, r);
        },
        getPathByPoints: function(t, e, n) {
          return (function(t) {
            for (var e = [['M', t[0].x, t[0].y]], n = 1; n < t.length; n++) {
              var r = t[n];
              e.push(['L', r.x, r.y]);
            }
            return e;
          })(on(t[0], t[t.length - 1], e, n, this.offset));
        },
        setState: function(t, e, n) {
          Xe.call(this, t, e, n);
        },
      }),
        ut.a.registerEdge(
          'polylineRound',
          {
            offset: 10,
            borderRadius: 9,
            getPathByPoints: function(t, e, n) {
              return sn($e(on(t[0], t[t.length - 1], e, n, this.offset)), this.borderRadius);
            },
          },
          'polyline',
        );
      var ln = Et;
      function hn(t, e, n, r) {
        var i = r ? r / 2 : 30,
          a = r;
        if ((t <= e && e <= n) || (t >= e && e >= n)) {
          var o = (n - e) / 2,
            s = Math.abs(o);
          if (0 === o) return t === e ? 0 : ((e - t) / Math.abs(e - t)) * i;
          if (s > a) {
            var c = (o / s) * a;
            return Math.abs(c) < i ? (o / s) * i : c;
          }
          return s < i ? (o / s) * i : o;
        }
        var u = i;
        return (
          (u = Math.abs(e - n) < 2 * Math.abs(e - t) ? (r * Math.abs(e - n)) / (2 * Math.abs(e - t)) : r) > a &&
            (u = a),
          u < i && (u = i),
          e > t ? u : -u
        );
      }
      function fn(t, e, n, r) {
        var i,
          a,
          o = t.getBBox(),
          s = (function(t, e) {
            var n = Math.abs(t.x - e.centerX),
              r = Math.abs(t.y - e.centerY);
            return n / e.width > r / e.height;
          })(e, o);
        i = a = 0;
        var c = Math.min(o.height, o.width);
        return (
          r && r.bbox && (c = Math.min(c, r.bbox.height, r.bbox.width)),
          s ? (i = hn(o.centerX, e.x, n.x, c)) : (a = hn(o.centerY, e.y, n.y, c)),
          { x: e.x + i, y: e.y + a }
        );
      }
      var dn = 0.1;
      function pn(t, e) {
        var n = t.x,
          r = t.y,
          i = e.x,
          a = e.y;
        return { x: n + (i - n) * dn, y: r + (a - r) * dn };
      }
      function gn(t, e, n) {
        var r = t[0],
          i = t[t.length - 1],
          a = ['M', r.x, r.y],
          o = (function(t, e, n, r) {
            return [n && n.getBBox() ? fn(n, t, e, r) : pn(t, e), r && r.getBBox() ? fn(r, e, t, n) : pn(e, t)];
          })(r, i, e, n),
          s = ['C'],
          c = [a];
        return (
          o.forEach(function(t) {
            return s.push(t.x, t.y);
          }),
          s.push(i.x, i.y),
          c.push(s),
          c
        );
      }
      ut.a.registerEdge('flowSmooth', {
        draw: function(t, e) {
          var n = this.getPath(t),
            r = e.addShape('path', { attrs: un({ path: n }, ln) });
          return (r.endArrow = Ce(t, e, r, n)), Be(t, e, r), r;
        },
        getPath: function(t) {
          return gn([t.startPoint, t.endPoint], t.sourceNode, t.targetNode);
        },
        setState: function(t, e, n) {
          Xe.call(this, t, e, n);
        },
      }),
        ut.a.registerBehavior('active-edge', {
          getEvents: function() {
            return { 'edge:mouseenter': 'setAllItemStates', 'edge:mouseleave': 'clearAllItemStates' };
          },
          shouldBegin: function(t) {
            return !t.item.getTarget().x;
          },
          setAllItemStates: function(t) {
            if (this.shouldBegin(t)) {
              var e = this.get('graph'),
                n = t.item;
              e.setItemState(n, 'active', !0),
                e.setItemState(t.item.getTarget(), 'active', !0),
                e.setItemState(t.item.getSource(), 'active', !0);
            }
          },
          clearAllItemStates: function(t) {
            if (this.shouldBegin(t)) {
              var e = this.get('graph'),
                n = t.item;
              e.setItemState(n, 'active', !1),
                e.setItemState(t.item.getTarget(), 'active', !1),
                e.setItemState(t.item.getSource(), 'active', !1);
            }
          },
        });
      n(243);
      function vn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function mn(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? vn(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : vn(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var yn = At;
      function xn(t, e) {
        var n = Pe()(e, 2),
          r = n[0],
          i = n[1],
          a = Pe()(t, 4),
          o = a[0],
          s = a[1],
          c = [a[2] - o, a[3] - s];
        if (
          c.every(function(t) {
            return 0 === t;
          })
        )
          return NaN;
        var u = [-c[1], c[0]];
        return (
          (function(t, e) {
            var n = e[0],
              r = e[1],
              i = n * n + r * r;
            i > 0 && ((i = 1 / Math.sqrt(i)), (t[0] = e[0] * i), (t[1] = e[1] * i));
          })(u, u),
          (function(t, e) {
            return t[0] * e[0] + t[1] * e[1];
          })([r - o, i - s], u)
        );
      }
      function bn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function wn(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? bn(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : bn(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      ut.a.registerBehavior('align', {
        getEvents: function() {
          return { 'node:drag': 'onDrag' };
        },
        getDefaultCfg: function() {
          return { enable: !0, tolerance: 5 };
        },
        getBoxLine: function(t) {
          var e = t.getBBox();
          return {
            horizontalLines: {
              HTL: [e.minX, e.minY, e.maxX, e.minY],
              HCL: [e.minX, e.centerY, e.maxX, e.centerY],
              HBL: [e.minX, e.maxY, e.maxX, e.maxY],
            },
            verticalLines: {
              VLL: [e.minX, e.minY, e.minX, e.maxY],
              VCL: [e.centerX, e.minY, e.centerX, e.maxY],
              VRL: [e.maxX, e.minY, e.maxX, e.maxY],
            },
          };
        },
        shouldBegin: function() {
          return this.enable;
        },
        onDrag: function(t) {
          var e = this;
          if (this.shouldBegin()) {
            var n = this.graph,
              r = t.item.get('delegateShape');
            if (r) {
              var i = r.getBBox(),
                a = { x: i.minX, y: i.minY };
              ['HTL', 'HCL', 'HBL', 'VLL', 'VCL', 'VRL'].forEach(function(t) {
                r['_' + t] && r['_' + t].remove(), (r['_' + t] = void 0);
              });
              var o = { x: a.x + i.width / 2, y: a.y },
                s = { x: a.x + i.width / 2, y: a.y + i.height / 2 },
                c = { x: a.x + i.width / 2, y: a.y + i.height },
                u = { x: a.x, y: a.y + i.height / 2 },
                l = { x: a.x + i.width, y: a.y + i.height / 2 },
                h = n.getNodes(),
                f = this.tolerance,
                d = { HTL: [], HCL: [], HBL: [] },
                p = { VLL: [], VCL: [], VRL: [] };
              h.forEach(function(t) {
                var n = e.getBoxLine(t),
                  i = n.horizontalLines,
                  h = n.verticalLines,
                  g = function(t, e, n, i) {
                    var o = !0,
                      s = !1,
                      c = void 0;
                    try {
                      t: for (var u, l = t[Symbol.iterator](); !(o = (u = l.next()).done); o = !0)
                        for (var h = u.value, d = 0, p = Object.keys(e); d < p.length; d++) {
                          var g = p[d],
                            v = e[g],
                            m = xn(v, [h.x, h.y]);
                          if (Math.abs(m) < f) {
                            (r.attachFlag = i),
                              (r.attachTolerance = f),
                              'Y' === i && r.attr({ y: a.y - m }),
                              'X' === i && r.attr({ x: a.x + m }),
                              n[g].push({ line: v, dis: m });
                            break t;
                          }
                        }
                    } catch (t) {
                      (s = !0), (c = t);
                    } finally {
                      try {
                        o || null == l.return || l.return();
                      } finally {
                        if (s) throw c;
                      }
                    }
                  };
                g([o, s, c], i, d, 'Y'), g([u, s, l], h, p, 'X');
              }),
                ['HTL', 'HCL', 'HBL'].forEach(function(t) {
                  return d[t].sort(function(t, e) {
                    return t.dis - e.dis;
                  });
                }),
                ['VLL', 'VCL', 'VRL'].forEach(function(t) {
                  return p[t].sort(function(t, e) {
                    return t.dis - e.dis;
                  });
                });
              var g = function(t, e) {
                var a = r;
                ('H' === e ? ['HTL', 'HCL', 'HBL'] : ['VLL', 'VCL', 'VRL']).forEach(function(r) {
                  if (t[r].length > 0) {
                    var o = t[r][0].line,
                      s = [i.minX, i.maxX, o[0], o[2]],
                      c = [i.minY, i.maxY, o[1], o[3]],
                      u = o[1],
                      l = o[0],
                      h = function(t, e) {
                        return n.getCanvasByPoint(t, e);
                      },
                      f = h(Math.min.apply(Math, s), u),
                      d = h(l, Math.min.apply(Math, c)),
                      p = h(Math.max.apply(Math, s), 0),
                      g = h(0, Math.max.apply(Math, c)),
                      v = 'H' === e ? [['M', f.x, f.y], ['H', p.x]] : [['M', d.x, d.y], ['V', g.y]];
                    a['_' + r] = n.get('canvas').addShape('path', { attrs: mn({ path: v }, yn) });
                  }
                });
              };
              g(d, 'H'), g(p, 'V');
            }
          }
        },
      }),
        ut.a.registerBehavior('click-select', {
          getDefaultCfg: function() {
            return { multiple: !0, keyCode: 17 };
          },
          getEvents: function() {
            return {
              'node:click': 'onClick',
              'edge:click': 'onClick',
              'canvas:click': 'resetState',
              keyup: 'onKeyUp',
              keydown: 'onKeyDown',
            };
          },
          onClick: function(t) {
            var e = t.item,
              n = this.graph,
              r = n.get('autoPaint');
            if ((n.setAutoPaint(!1), !this.keydown || !this.multiple)) {
              var i = n.findAllByState('node', 'selected'),
                a = n.findAllByState('edge', 'selected');
              [].concat(at()(i), at()(a)).forEach(function(t) {
                t !== e && n.setItemState(t, 'selected', !1);
              });
            }
            this.shouldUpdate.call(this, t) && n.setItemState(e, 'selected', !0), n.setAutoPaint(r), n.paint();
          },
          resetState: function(t) {
            var e = this.graph,
              n = e.get('autoPaint');
            e.setAutoPaint(!1);
            var r = e.findAllByState('node', 'selected'),
              i = e.findAllByState('edge', 'selected');
            [].concat(at()(r), at()(i)).forEach(function(t) {
              return e.setItemState(t, 'selected', !1);
            }),
              e.paint(),
              e.setAutoPaint(n);
          },
          onKeyDown: function(t) {
            (t.keyCode || t.which) === this.keyCode ? (this.keydown = !0) : (this.keydown = !1);
          },
          onKeyUp: function() {
            this.keydown = !1;
          },
        }),
        ut.a.registerBehavior('drag-add-edge', {
          getDefaultCfg: function() {
            return { edgeType: 'flowSmooth' };
          },
          getEvents: function() {
            return { mousedown: 'onMousedown', mousemove: 'onMousemove', mouseup: 'onMouseup' };
          },
          shouldBegin: function(t) {
            return 'anchor' === t.target.get('className');
          },
          onMousedown: function(t) {
            var e = this.edgeType;
            if (this.shouldBegin.call(this, t)) {
              var n = t.item,
                r = this.graph;
              (this.sourceNode = n),
                r.getNodes().forEach(function(t) {
                  t.get('id') !== n.get('id')
                    ? r.setItemState(t, 'addingEdge', !0)
                    : r.setItemState(t, 'addingSource', !0);
                });
              var i = { x: t.x, y: t.y },
                a = n.getModel();
              if (!this.addingEdge && !this.edge) {
                var o = { shape: e, source: a.id, target: i, sourceAnchor: t.target.get('index') };
                (this.edge = r.addItem('edge', o)), (this.addingEdge = !0);
              }
            }
          },
          onMousemove: function(t) {
            var e = { x: t.x, y: t.y };
            this.addingEdge && this.edge && this.graph.updateItem(this.edge, { target: e });
          },
          onMouseup: function(t) {
            var e = this,
              n = this.graph,
              r = this.sourceNode,
              i = t.item,
              a = function() {
                n.getNodes().forEach(function(t) {
                  n.clearItemStates(t);
                }),
                  n.setItemState(r, 'addingEdge', !0),
                  n.setItemState(r, 'addingEdge', !1);
              },
              o = function() {
                n.remove(e.edge), (e.edge = null), (e.addingEdge = !1), a();
              };
            if (this.shouldBegin.call(this, t)) {
              var s = i.getModel();
              if (this.addingEdge && this.edge) {
                if (this.edge.getSource().get('id') === s.id) return void o();
                n.updateItem(this.edge, { targetAnchor: t.target.get('index'), target: s.id }),
                  (this.edge = null),
                  (this.addingEdge = !1),
                  a();
              }
            } else this.edge && this.addingEdge && o();
          },
        }),
        ut.a.registerBehavior('hover-anchor', {
          getEvents: function() {
            return { mouseenter: 'onEnterAnchor', mouseleave: 'onLeaveAnchor' };
          },
          shouldBegin: function(t) {
            return 'anchor' === t.target.get('className');
          },
          onEnterAnchor: function(t) {
            if (this.shouldBegin(t)) {
              var e = this.graph,
                n = t.item,
                r = t.target;
              e.setItemState(n, 'activeAnchor', r);
            }
          },
          onLeaveAnchor: function(t) {
            if (this.shouldBegin(t)) {
              var e = this.graph,
                n = t.item;
              t.target;
              e.setItemState(n, 'activeAnchor', !1);
            }
          },
        }),
        ut.a.registerBehavior('hover-node', {
          getEvents: function() {
            return { 'node:mouseenter': 'onEnterNode', 'node:mouseleave': 'onLeaveNode' };
          },
          onEnterNode: function(t) {
            var e = this.graph,
              n = t.item;
            this.shouldBegin(t) && e.setItemState(n, 'active', !0);
          },
          onLeaveNode: function(t) {
            var e = this.graph,
              n = t.item;
            e.setItemState(n, 'active', !1);
          },
        });
      var Sn = _t,
        Mn = document.body;
      ut.a.registerBehavior('drag-node', {
        getEvents: function() {
          return {
            'node:dragstart': 'onDragStart',
            'node:drag': 'onDrag',
            'node:dragend': 'onDragEnd',
            'canvas:mouseleave': 'onOutOfRange',
          };
        },
        getDefaultCfg: function() {
          return { updateEdge: !0, showDelegate: !0, delegateStyle: {} };
        },
        shouldBegin: function(t) {
          return 'anchor' != t.target.get('className');
        },
        onDragStart: function(t) {
          if (this.shouldBegin(t)) {
            var e = this.graph;
            (this.origin = { x: t.x, y: t.y }),
              (this.target = t.item),
              (this.selectedNodes = e.findAllByState('node', 'selected') || []),
              0 == this.selectedNodes.length && this.selectedNodes.push(t.item);
          }
        },
        onDrag: function(t) {
          this.get('shouldUpdate').call(this, t) && this.origin && this._update(t, !1);
        },
        onDragEnd: function(t) {
          if (this.shouldEnd.call(this, t) && this.origin) {
            var e = this.selectedNodes;
            e
              .map(function(t) {
                return t.get('delegateShape');
              })
              .forEach(function(t) {
                t &&
                  (['HTL', 'HCL', 'HBL', 'VLL', 'VCL', 'VRL'].forEach(function(e) {
                    t['_' + e] && t['_' + e].remove(), (t['_' + e] = void 0);
                  }),
                  t.remove());
              }),
              e.forEach(function(t) {
                return t.set('delegateShape', null);
              }),
              this._update(t, !0),
              this.multipleDelegate && (this.multipleDelegate.remove(), (this.multipleDelegate = void 0)),
              (this.origin = null);
            var n = this.fn;
            n && (Mn.removeEventListener('mouseup', n, !1), (this.fn = null));
          }
        },
        onOutOfRange: function(t) {
          var e = this;
          if (this.origin) {
            var n = e.graph.get('canvas').get('el'),
              r = function(r) {
                r.target !== n && e.onDragEnd(t);
              };
            (this.fn = r), Mn.addEventListener('mouseup', r, !1);
          }
        },
        _update: function(t, e) {
          var n = this,
            r = this.selectedNodes,
            i = this.showDelegate,
            a = this.origin,
            o = t.x - a.x,
            s = t.y - a.y;
          if (!i || e)
            this.get('updateEdge')
              ? r.forEach(function(t) {
                  var e = t.getModel(),
                    r = e.x + o,
                    i = e.y + s;
                  n.graph.updateItem(t, { x: r, y: i });
                })
              : (r.forEach(function(t) {
                  var e = t.getModel(),
                    n = e.x + o,
                    r = e.y + s;
                  t.updatePosition({ x: n, y: r });
                }),
                this.graph.paint());
          else {
            if (
              (r.length > 1 && !this.multipleDelegate && this.drawMultipleDelegate(),
              r.forEach(function(t) {
                var e,
                  r,
                  i,
                  a =
                    ((r = (e = t).getModel()),
                    (i = e.getBBox()),
                    { x: r.x - i.width / 2 + o, y: r.y - i.height / 2 + s }),
                  c = a.x,
                  u = a.y;
                n._updateDelegate(t, c, u);
              }),
              this.multipleDelegate)
            ) {
              var c = this.mdOrigin,
                u = c.x,
                l = c.y;
              this.multipleDelegate.attr({ x: u + o, y: l + s });
            }
            this.graph.paint();
          }
        },
        _updateDelegate: function(t, e, n) {
          var r = t.get('delegateShape'),
            i = t.get('keyShape').getBBox();
          if (!r) {
            var a = this.graph.get('group'),
              o = Sn;
            (r = a.addShape('rect', { attrs: wn({ width: i.width, height: i.height, x: e, y: n }, o) })).set(
              'capture',
              !1,
            ),
              t.set('delegateShape', r);
          }
          t.getKeyShape().baseType;
          var s = function(t) {
            var e = t.x,
              n = void 0 === e ? void 0 : e,
              i = t.y,
              a = void 0 === i ? void 0 : i;
            n && a && r.attr({ x: n, y: a }), n && r.attr({ x: n }), a && r.attr({ y: a });
          };
          ('Y' === r.attachFlag && Math.abs(n - r.attr('y')) <= r.attachTolerance) ||
          ('X' === r.attachFlag && Math.abs(e - r.attr('x')) <= r.attachTolerance)
            ? ('Y' === r.attachFlag && s({ x: e }), 'X' === r.attachFlag && s({ y: n }))
            : (s({ x: e, y: n }), (r.attachFlag = ''));
        },
        drawMultipleDelegate: function() {
          if (!this.multipleDelegate) {
            var t = this.selectedNodes,
              e = [],
              n = [];
            t.forEach(function(t) {
              var r = t.getBBox(),
                i = r.minX,
                a = r.minY,
                o = r.maxX,
                s = r.maxY;
              e.push(i, o), n.push(a, s);
            });
            var r = Math.min.apply(Math, e),
              i = Math.min.apply(Math, n),
              a = Math.max.apply(Math, e),
              o = Math.max.apply(Math, n),
              s = this.graph.get('group'),
              c = Sn;
            (this.mdOrigin = { x: r - 20, y: i - 20 }),
              (this.multipleDelegate = s.addShape('rect', {
                attrs: wn({ width: Math.floor(a - r) + 40, height: Math.floor(o - i) + 40, x: r - 20, y: i - 20 }, c, {
                  stroke: '#ff9800',
                }),
              }));
          }
        },
      });
      var Pn = (function(t) {
          function e(t) {
            var n;
            return (
              l()(this, e),
              ((n = p()(this, v()(e).call(this, t))).canDragCanvas = function() {
                return n.props.labelState === j.Hide;
              }),
              (n.canZoomCanvas = function() {
                return n.props.labelState === j.Hide;
              }),
              (n.canDragNode = function(t) {
                var e = t.target;
                return e && e.get('className') !== A.Anchor;
              }),
              (n.parseData = function(t) {
                var e = t.data,
                  n = e.nodes,
                  r = e.edges;
                [].concat(at()(n), at()(r)).forEach(function(t) {
                  t.id || (t.id = I());
                });
              }),
              (n.initGraph = function(t) {
                var e = t.width,
                  r = t.height,
                  i = st()(n).containerId;
                return (
                  (n.graph = new ut.a.Graph({
                    container: i,
                    width: e,
                    height: r,
                    modes: {
                      default: [
                        {
                          type: 'drag-canvas',
                          shouldBegin: n.canDragCanvas,
                          shouldUpdate: n.canDragCanvas,
                          shouldEnd: n.canDragCanvas,
                        },
                        { type: 'zoom-canvas', shouldUpdate: n.canZoomCanvas },
                        'active-edge',
                        'align',
                        'click-select',
                        'drag-add-edge',
                        'drag-node',
                        'hover-anchor',
                        'hover-node',
                      ],
                    },
                  })),
                  n.graph
                );
              }),
              (n.containerId = ''.concat(Y, '_').concat(I())),
              n
            );
          }
          return (
            y()(e, t),
            f()(e, [
              {
                key: 'render',
                value: function() {
                  var t = this.containerId,
                    e = this.parseData,
                    n = this.initGraph;
                  return i.a.createElement(Ot, q()({ containerId: t, parseData: e, initGraph: n }, this.props));
                },
              },
            ]),
            e
          );
        })(i.a.Component),
        In = et(Pn);
      function On(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function An(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? On(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : On(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var _n = An(
        {},
        oe,
        z()(
          {
            draw: function(t, e) {
              this.drawWrapper(t, e);
              var n = this.drawKeyShape(t, e);
              return (
                this.drawLabel(t, e), this.drawAppendix(t, e), t.isRoot || this.drawExpandOrCollapseButton(t, e), n
              );
            },
            update: function(t, e) {
              var n = e.getContainer(),
                r = n.findByClassName(A.Label),
                i = n.findByClassName(A.CollapseExpandButton);
              r.remove(),
                (r = this.drawLabel(t, n)),
                this.adjustPosition({ model: t, group: n }),
                i && i.remove(),
                t.children && t.children.length > 0 && !t.isRoot && (i = this.drawExpandOrCollapseButton(t, n));
            },
            drawExpandOrCollapseButton: function(t, e) {
              var n = e.findByClassName(A.KeyShape),
                r = this.getOffset(t, e, 17);
              if (t.collapsed) {
                var i = e.addShape('path', {
                  className: A.CollapseExpandButton,
                  attrs: An(
                    { path: ne.getExpandButtonPath({ width: 17, height: 17 }) },
                    this['get'.concat(A.CollapseExpandButton, 'defaultStyle')](),
                    { cursor: 'pointer' },
                  ),
                });
                return i.translate(t.x < 0 ? -n.attr('width') / 2 - 17 - r : n.attr('width') / 2 + r, -8.5), i;
              }
              var a = e.addShape('path', {
                className: A.CollapseExpandButton,
                attrs: An(
                  { path: ne.getCollapseButtonPath({ width: 17, height: 17 }) },
                  this['get'.concat(A.CollapseExpandButton, 'defaultStyle')](),
                  { cursor: 'pointer' },
                ),
              });
              return a.translate(t.x < 0 ? -n.attr('width') / 2 - 17 - r : n.attr('width') / 2 + r, -8.5), a;
            },
            getOffset: function(t, e, n) {
              if (t.children && !(t.children.length < 0)) {
                var r = t.children[0],
                  i = e.getBBox().width;
                return t.x < 0 ? (t.x - r.x - i) / 2 - n / 2 : (r.x - t.x - i) / 2 - n / 2;
              }
            },
          },
          'get'.concat(A.CollapseExpandButton, 'defaultStyle'),
          function() {
            return { stroke: '#000', fill: '#fff' };
          },
        ),
      );
      function Cn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function En(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Cn(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Cn(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      ut.a.registerNode('mind-node', _n, 'biz-node');
      var jn = {
          lineWidth: 2,
          stroke: '#d8d8d8',
          endArrow: { path: 'M 0.5 0, A 3 3 0 0 1 -6.5 0, A 3 3 0 0 1 0.5 0' },
        },
        Nn = {
          draw: function(t, e) {
            var n = t.source,
              r = t.target,
              i = t.startPoint,
              a = i.x,
              o = i.y,
              s = t.endPoint,
              c = s.x,
              u = s.y,
              l = n.getBBox().width,
              h = n.getBBox().height,
              f = r.getBBox().height,
              d = r.getBBox().width;
            return n.getModel().y === r.getModel().y && r.getModel().x < 0
              ? e.addShape('path', { attrs: En({ path: [['M', a, o + h / 2], ['L', c + d + 4, u + f / 2]] }, jn) })
              : n.getModel().y === r.getModel().y && r.getModel().x > 0
              ? e.addShape('path', { attrs: En({ path: [['M', a + l, o + h / 2], ['L', c - 4, u + f / 2]] }, jn) })
              : r.getModel().x < 0 && r.getModel().y > n.getModel().y
              ? this.drawLeftBottom(e, a, o, c, u, h, f, d)
              : r.getModel().x < 0 && r.getModel().y < n.getModel().y
              ? this.drawLeftTop(e, a, o, c, u, h, f, d)
              : r.getModel().x > 0 && r.getModel().y > n.getModel().y
              ? this.drawRightBottom(e, a, o, c, u, h, f, l)
              : this.drawRightTop(e, a, o, c, u, h, f, l);
          },
          drawLeftBottom: function(t, e, n, r, i, a, o, s) {
            var c = (e - (r + s)) / 2,
              u = c / 3;
            return t.addShape('path', {
              attrs: En(
                {
                  path: [
                    ['M', e, n + a / 2],
                    ['L', e - c + u, n + a / 2],
                    ['A', u, u, 0, 0, 0, e - c, n + a / 2 + u],
                    ['L', r + s + c, i + o / 2 - u],
                    ['A', u, u, 0, 0, 1, r + s + c - u, i + o / 2],
                    ['L', r + s + 4, i + o / 2],
                  ],
                },
                jn,
              ),
            });
          },
          drawLeftTop: function(t, e, n, r, i, a, o, s) {
            var c = (e - (r + s)) / 2,
              u = c / 3;
            return t.addShape('path', {
              attrs: En(
                {
                  path: [
                    ['M', e, n + a / 2],
                    ['L', e - c + u, n + a / 2],
                    ['A', u, u, 0, 0, 1, e - c, n + a / 2 - u],
                    ['L', r + s + c, i + o / 2 + u],
                    ['A', u, u, 0, 0, 0, r + s + c - u, i + o / 2],
                    ['L', r + s + 4, i + o / 2],
                  ],
                },
                jn,
              ),
            });
          },
          drawRightBottom: function(t, e, n, r, i, a, o, s) {
            var c = (r - (e + s)) / 2,
              u = c / 3;
            return t.addShape('path', {
              attrs: En(
                {
                  path: [
                    ['M', e + s, n + a / 2],
                    ['L', e + s + c - u, n + a / 2],
                    ['A', u, u, 0, 0, 1, e + s + c, n + a / 2 + u],
                    ['L', r - c, i + o / 2 - u],
                    ['A', u, u, 0, 0, 0, r - c + u, i + o / 2],
                    ['L', r - 4, i + o / 2],
                  ],
                },
                jn,
              ),
            });
          },
          drawRightTop: function(t, e, n, r, i, a, o, s) {
            var c = (r - (e + s)) / 2,
              u = c / 3;
            return t.addShape('path', {
              attrs: En(
                {
                  path: [
                    ['M', e + s, n + a / 2],
                    ['L', e + s + c - u, n + a / 2],
                    ['A', u, u, 0, 0, 0, e + s + c, n + a / 2 - u],
                    ['L', r - c, i + o / 2 + u],
                    ['A', u, u, 0, 0, 1, r - c + u, i + o / 2],
                    ['L', r - 4, i + o / 2],
                  ],
                },
                jn,
              ),
            });
          },
          setState: function(t, e, n) {
            var r = n.getContainer().get('children')[0];
            t === C.Selected && e
              ? (n.toFront(), r.attr({ stroke: '#5AAAFF', shadowColor: '#5AAAFF', shadowBlur: 5 }))
              : r.attr({ stroke: '#d8d8d8', shadowBlur: 0 });
          },
        };
      function kn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      ut.a.registerEdge('biz-mind-edge', Nn);
      var Dn = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? kn(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : kn(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })({}, vt, {
        params: { id: '', model: { id: '' } },
        canExecute: function(t) {
          var e = this.getSelectedNodes(t);
          return e.length && 1 === e.length && e[0].get('parent');
        },
        init: function(t) {
          if (!this.params.id) {
            var e = this.getSelectedNodes(t)[0];
            this.params = { id: e.get('id'), model: { id: I(), label: '新建节点' } };
          }
        },
        execute: function(t) {
          var e = this.params,
            n = e.id,
            r = e.model,
            i = t.findById(n).get('parent');
          t.addChild(r, i), this.setSelectedNode(t, r.id);
        },
        undo: function(t) {
          var e = this.params,
            n = e.id,
            r = e.model;
          this.setSelectedNode(t, n), t.removeChild(r.id);
        },
        shortcuts: ['Enter'],
      });
      function Bn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      U.register('topic', Dn);
      var Tn = (function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Bn(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Bn(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      })({}, Dn, {
        canExecute: function(t) {
          return !!this.getSelectedNodes(t)[0];
        },
        execute: function(t) {
          var e = this.params,
            n = e.id,
            r = e.model,
            i = t.findById(n);
          t.addChild(r, i), this.setSelectedNode(t, r.id);
        },
        shortcuts: ['Tab'],
      });
      U.register('subtopic', Tn);
      var Ln = (function(t) {
          function e(t) {
            var n;
            return (
              l()(this, e),
              ((n = p()(this, v()(e).call(this, t))).canDragCanvas = function() {
                return n.props.labelState === j.Hide;
              }),
              (n.canZoomCanvas = function() {
                return n.props.labelState === j.Hide;
              }),
              (n.canCollapseExpand = function(t) {
                var e = t.target;
                return e && e.get('className') === A.CollapseExpandButton;
              }),
              (n.parseData = function(t) {
                !(function t(e, n) {
                  e &&
                    (n(e),
                    e.children &&
                      e.children.forEach(function(e) {
                        return t(e, n);
                      }));
                })(t.data, function(t) {
                  t.id || (t.id = I());
                });
              }),
              (n.initGraph = function(t) {
                var e = t.width,
                  r = t.height,
                  i = st()(n).containerId;
                return (
                  (n.graph = new ut.a.TreeGraph({
                    container: i,
                    width: e,
                    height: r,
                    modes: {
                      default: [
                        {
                          type: 'drag-canvas',
                          shouldBegin: n.canDragCanvas,
                          shouldUpdate: n.canDragCanvas,
                          shouldEnd: n.canDragCanvas,
                        },
                        { type: 'zoom-canvas', shouldUpdate: n.canZoomCanvas },
                        'click-node',
                        'hover-node',
                        'edit-label',
                        { type: 'collapse-expand', shouldBegin: n.canCollapseExpand },
                      ],
                    },
                    layout: {
                      type: 'mindmap',
                      direction: 'H',
                      getHGap: function() {
                        return 70;
                      },
                    },
                    animate: !1,
                    defaultNode: { shape: 'mind-node' },
                    defaultEdge: { shape: 'biz-mind-edge' },
                  })),
                  n.graph
                );
              }),
              (n.containerId = ''.concat(X, '_').concat(I())),
              n
            );
          }
          return (
            y()(e, t),
            f()(e, [
              {
                key: 'render',
                value: function() {
                  var t = this.containerId,
                    e = this.parseData,
                    n = this.initGraph;
                  return i.a.createElement(Ot, q()({ containerId: t, parseData: e, initGraph: n }, this.props));
                },
              },
            ]),
            e
          );
        })(i.a.Component),
        Rn = et(Ln);
      function Yn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Xn(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Yn(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Yn(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var Fn = (function(t) {
          function e(t) {
            var n;
            return (
              l()(this, e),
              ((n = p()(this, v()(e).call(this, t))).handleMouseDown = function() {
                var t = n.createShadowShape();
                document.body.appendChild(t), n.setState({ shadowShape: t });
              }),
              (n.handleMouseUp = function() {
                n.unloadDragShape();
              }),
              (n.handleDragover = function(t) {
                t.preventDefault();
              }),
              (n.handleDragenter = function(t) {
                var e = n.props.graph,
                  r = e.getPointByClient(t.clientX, t.clientY),
                  i = e.get('container').getElementsByTagName('canvas')[0];
                t.target.id === i.id && n.loadDragShape(r);
              }),
              (n.handleDrag = function(t) {
                var e = n.props.graph,
                  r = n.state,
                  i = r.dragShape,
                  a = r.dragShapeID;
                if (i) {
                  var o = e.getPointByClient(t.clientX, t.clientY);
                  e.update(a, Xn({}, o));
                }
              }),
              (n.handleDrop = function(t) {
                var e = n.props,
                  r = e.graph,
                  i = e.executeCommand,
                  a = e.type,
                  o = e.model,
                  s = e.shape,
                  c = e.size,
                  u = n.state.dragShapeID,
                  l = r.get('container').getElementsByTagName('canvas')[0],
                  h = r.getPointByClient(t.clientX, t.clientY);
                t.target.id === l.id &&
                  i('add', { type: a, model: Xn({}, o, { shape: s }, h, { size: c.split('*') }) }),
                  n.unloadDragShape(),
                  r.remove(u);
              }),
              (n.itemOnPanel = i.a.createRef()),
              (n.state = { shadowShape: null, dragShape: null, dragShapeID: 'temp_drag_node' }),
              n
            );
          }
          return (
            y()(e, t),
            f()(e, [
              {
                key: 'createShadowShape',
                value: function() {
                  var t = this.props.src,
                    e = document.createElement('img');
                  e.src = t;
                  var n = document.createElement('div'),
                    r = '\n      width: '
                      .concat(e.width, 'px;\n      height: ')
                      .concat(e.height, 'px;\n      position: absolute;\n      opacity: 0;\n      top: ')
                      .concat(this.itemOnPanel.current.getBoundingClientRect().top, 'px;\n      left: ')
                      .concat(
                        this.itemOnPanel.current.getBoundingClientRect().left,
                        'px;\n      cursor: pointer;\n    ',
                      );
                  return (
                    n.setAttribute('style', r),
                    n.setAttribute('draggable', 'true'),
                    n.addEventListener('drag', this.handleDrag, !1),
                    document.addEventListener('dragover', this.handleDragover, !1),
                    document.addEventListener('dragenter', this.handleDragenter, !1),
                    document.addEventListener('drop', this.handleDrop, !1),
                    n.addEventListener('mouseup', this.handleMouseUp, !1),
                    n
                  );
                },
              },
              {
                key: 'loadDragShape',
                value: function(t) {
                  var e = t.x,
                    n = t.y,
                    r = this.props.graph,
                    i = this.state,
                    a = i.dragShape,
                    o = i.shadowShape,
                    s = i.dragShapeID;
                  if (!a) {
                    var c = r.add('node', {
                      shape: 'rect',
                      x: e,
                      y: n,
                      size: [o.offsetWidth, o.offsetHeight],
                      style: {
                        fill: '#F3F9FF',
                        fillOpacity: 0.5,
                        stroke: '#1890FF',
                        strokeOpacity: 0.9,
                        lineDash: [5, 5],
                      },
                      id: s,
                    });
                    this.setState({ dragShape: c });
                  }
                },
              },
              {
                key: 'unloadDragShape',
                value: function() {
                  var t = this.props.graph,
                    e = this.state,
                    n = e.dragShape,
                    r = e.shadowShape;
                  n && t.remove(n),
                    r && document.body.removeChild(r),
                    this.setState({ dragShape: null, shadowShape: null }),
                    document.removeEventListener('dragenter', this.handleDragenter),
                    document.removeEventListener('dragover', this.handleDragover),
                    document.removeEventListener('drop', this.handleDrop);
                },
              },
              {
                key: 'render',
                value: function() {
                  var t = this.props,
                    e = t.src,
                    n = t.shape,
                    r = t.children;
                  return i.a.createElement(
                    'div',
                    { style: { cursor: 'pointer' }, onMouseDown: this.handleMouseDown, ref: this.itemOnPanel },
                    e ? i.a.createElement('img', { src: e, alt: n, draggable: !1 }) : r,
                  );
                },
              },
            ]),
            e
          );
        })(i.a.PureComponent),
        Zn = et(Fn),
        Gn = (function(t) {
          function e(t) {
            var n;
            return (
              l()(this, e),
              ((n = p()(this, v()(e).call(this, t))).handleMouseUp = function() {
                n.page.cancelAdd();
              }),
              n.bindEvent(),
              n
            );
          }
          return (
            y()(e, t),
            f()(e, [
              { key: 'bindEvent', value: function() {} },
              {
                key: 'componentWillUnmount',
                value: function() {
                  document.removeEventListener('mouseup', this.handleMouseUp);
                },
              },
              {
                key: 'render',
                value: function() {
                  var t = this.props.children;
                  return i.a.createElement(
                    'div',
                    q()({ id: this.containerId }, S()(this.props, ['style', 'className'])),
                    t,
                  );
                },
              },
            ]),
            e
          );
        })(i.a.PureComponent),
        zn = (function(t) {
          function e() {
            var t, n;
            l()(this, e);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            return (
              ((n = p()(this, (t = v()(e)).call.apply(t, [this].concat(i)))).state = { disabled: !1 }),
              (n.handleClick = function() {
                var t = n.props,
                  e = t.name;
                (0, t.executeCommand)(e);
              }),
              n
            );
          }
          return (
            y()(e, t),
            f()(e, [
              {
                key: 'render',
                value: function() {
                  var t = this.props,
                    e = t.name,
                    n = t.graph,
                    r = t.canExecuteCommand,
                    a = t.children;
                  return n
                    ? i.a.createElement(
                        'div',
                        { className: 'command'.concat(r(e) ? '' : ' command-disabled'), onClick: this.handleClick },
                        a,
                      )
                    : null;
                },
              },
            ]),
            e
          );
        })(i.a.PureComponent),
        Hn = et(zn),
        Wn =
          (n(244),
          (function(t) {
            function e(t, n) {
              var r;
              return (
                l()(this, e),
                ((r = p()(this, v()(e).call(this, t))).getSelectedNodes = function() {
                  return r.props.graph.findAllByState(Z, C.Selected);
                }),
                (r.type = n),
                r
              );
            }
            return (
              y()(e, t),
              f()(e, [
                {
                  key: 'render',
                  value: function() {
                    var t = this,
                      e = this.props,
                      n = e.graph,
                      r = e.graphState,
                      a = e.children;
                    return n && r.startsWith(this.type)
                      ? i.a.createElement(
                          'div',
                          S()(this.props, ['style', 'className']),
                          i.a.Children.toArray(a).map(function(e) {
                            return i.a.cloneElement(e, { nodes: t.getSelectedNodes() });
                          }),
                        )
                      : null;
                  },
                },
              ]),
              e
            );
          })(i.a.PureComponent));
      Wn.create = function(t) {
        return et(
          (function(e) {
            function n(e) {
              return l()(this, n), p()(this, v()(n).call(this, e, t));
            }
            return y()(n, e), n;
          })(Wn),
        );
      };
      var Un = Wn.create(E.NodeSelected),
        Vn = Wn.create(E.MultiSelected),
        qn = Wn.create(E.CanvasSelected),
        Jn = (function(t) {
          function e(t, n) {
            var r;
            l()(this, e), (r = p()(this, v()(e).call(this, t)));
            var i = t.name,
              a = t.config,
              o = t.extend;
            return 'command' === n
              ? (U.register({ name: i, config: a, extend: o }), p()(r))
              : (ut.a['register'.concat(Qt()(n))](i, a, o), r);
          }
          return (
            y()(e, t),
            f()(e, [
              {
                key: 'render',
                value: function() {
                  return null;
                },
              },
            ]),
            e
          );
        })(i.a.Component);
      Jn.create = function(t) {
        return (function(e) {
          function n(e) {
            return l()(this, n), p()(this, v()(n).call(this, e, t));
          }
          return y()(n, e), n;
        })(Jn);
      };
      Jn.create('node'), Jn.create('edge'), Jn.create('command'), Jn.create('behavior');
      var Qn = rt,
        Kn = c.Icon.createFromIconfontCN({ scriptUrl: 'https://at.alicdn.com/t/font_1101588_01zniftxm9yp.js' }),
        $n = n(74),
        tr = n.n($n),
        er = function(t) {
          var e = t.command,
            n = t.icon,
            r = t.text;
          return i.a.createElement(
            Hn,
            { name: e },
            i.a.createElement(
              c.Tooltip,
              { title: r || Qt()(e), placement: 'bottom', overlayClassName: tr.a.tooltip },
              i.a.createElement(Kn, { type: 'icon-'.concat(n || e) }),
            ),
          );
        },
        nr = function() {
          return i.a.createElement(
            'div',
            { className: tr.a.toolbar },
            i.a.createElement(er, { command: 'undo' }),
            i.a.createElement(er, { command: 'redo' }),
            i.a.createElement(c.Divider, { type: 'vertical' }),
            i.a.createElement(c.Divider, { type: 'vertical' }),
            i.a.createElement(er, { command: 'topic', icon: 'append' }),
            i.a.createElement(er, { command: 'subtopic', icon: 'append-child' }),
            i.a.createElement(c.Divider, { type: 'vertical' }),
          );
        };
      n(247);
      function rr(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ir(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? rr(n, !0).forEach(function(e) {
                z()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : rr(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var ar,
        or,
        sr = c.Form.Item,
        cr = { labelCol: { sm: { span: 8 } }, wrapperCol: { sm: { span: 16 } } },
        ur = (function(t) {
          function e() {
            var t, n;
            l()(this, e);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
            return (
              ((n = p()(this, (t = v()(e)).call.apply(t, [this].concat(a)))).handleSubmit = function(t) {
                t && t.preventDefault && t.preventDefault();
                var e = n.props,
                  r = e.form,
                  i = e.executeCommand;
                setTimeout(function() {
                  r.validateFieldsAndScroll(function(t, e) {
                    if (!t) {
                      var r = n.props.nodes[0].getModel().id;
                      i('update', { id: r, updateModel: ir({}, e) });
                    }
                  });
                }, 0);
              }),
              (n.renderNodeDetail = function() {
                var t = n.props.form;
                return i.a.createElement(
                  sr,
                  q()({ label: 'Label' }, cr),
                  t.getFieldDecorator('label')(i.a.createElement(c.Input, { onBlur: n.handleSubmit })),
                );
              }),
              n
            );
          }
          return (
            y()(e, t),
            f()(e, [
              {
                key: 'render',
                value: function() {
                  var t = this.props.type;
                  return i.a.createElement(
                    c.Card,
                    { type: 'inner', size: 'small', title: Qt()(t), bordered: !1 },
                    i.a.createElement(c.Form, { onSubmit: this.handleSubmit }, this.renderNodeDetail()),
                  );
                },
              },
            ]),
            e
          );
        })(i.a.Component),
        lr = c.Form.create({
          mapPropsToFields: function(t) {
            var e = t.nodes,
              n = (e.length ? e[0].getModel() : {}).label;
            return { label: c.Form.createFormField({ value: n }) };
          },
        })(
          ((ar = ur),
          (or = function(t) {
            var e = t.forwardRef,
              n = Q()(t, ['forwardRef']);
            return i.a.createElement(K.Consumer, null, function(t) {
              return i.a.createElement(ar, q()({ ref: e }, n, t));
            });
          }),
          i.a.forwardRef(function(t, e) {
            return i.a.createElement(or, q()({ forwardRef: e }, t));
          })),
        ),
        hr = n(144),
        fr = n.n(hr),
        dr = function() {
          return i.a.createElement(
            'div',
            { className: fr.a.detailPanel },
            i.a.createElement(Un, null, i.a.createElement(lr, { type: 'node' })),
            i.a.createElement(
              Vn,
              null,
              i.a.createElement(c.Card, { type: 'inner', size: 'small', title: 'Multi Select', bordered: !1 }),
            ),
            i.a.createElement(
              qn,
              null,
              i.a.createElement(c.Card, { type: 'inner', size: 'small', title: 'Canvas', bordered: !1 }),
            ),
          );
        },
        pr = n(145),
        gr = n(24),
        vr = n.n(gr),
        mr = function() {
          return i.a.createElement(
            Qn,
            { className: vr.a.editor },
            i.a.createElement(
              c.Row,
              { type: 'flex', className: vr.a.editorHd },
              i.a.createElement(c.Col, { span: 24 }, i.a.createElement(nr, null)),
            ),
            i.a.createElement(
              c.Row,
              { type: 'flex', className: vr.a.editorBd },
              i.a.createElement(
                c.Col,
                { span: 20, className: vr.a.editorContent },
                i.a.createElement(Rn, { data: pr, className: vr.a.mind }),
              ),
              i.a.createElement(c.Col, { span: 4, className: vr.a.editorSidebar }, i.a.createElement(dr, null)),
            ),
          );
        },
        yr = n(146),
        xr = n(147),
        br = n.n(xr),
        wr = function() {
          return i.a.createElement(
            Gn,
            { className: br.a.itemPanel },
            i.a.createElement(
              c.Card,
              { bordered: !1 },
              i.a.createElement(Zn, {
                type: 'node',
                size: '72*72',
                shape: 'flow-circle',
                model: { color: '#FA8C16', label: 'Start' },
                src:
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImIiIGN4PSIzNiIgY3k9IjM2IiByPSIzNiIvPjxmaWx0ZXIgeD0iLTkuNyUiIHk9Ii02LjklIiB3aWR0aD0iMTE5LjQlIiBoZWlnaHQ9IjExOS40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRkZGMkU4IiB4bGluazpocmVmPSIjYiIvPjxjaXJjbGUgc3Ryb2tlPSIjRkZDMDY5IiBjeD0iMzYiIGN5PSIzNiIgcj0iMzUuNSIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiPjx0c3BhbiB4PSIyMyIgeT0iNDEiPlN0YXJ0PC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
              }),
              i.a.createElement(Zn, {
                type: 'node',
                size: '80*48',
                shape: 'biz-flow-node',
                model: { color: '#1890FF', label: 'Normal' },
                src:
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iNDgiIHJ4PSI0Ii8+PGZpbHRlciB4PSItOC44JSIgeT0iLTEwLjQlIiB3aWR0aD0iMTE3LjUlIiBoZWlnaHQ9IjEyOS4yJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRTZGN0ZGIiB4bGluazpocmVmPSIjYiIvPjxyZWN0IHN0cm9rZT0iIzE4OTBGRiIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iNzkiIGhlaWdodD0iNDciIHJ4PSI0Ii8+PC9nPjx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii42NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHRzcGFuIHg9IjIxIiB5PSIyOSI+Tm9ybWFsPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
              }),
              i.a.createElement(Zn, {
                type: 'node',
                size: '80*72',
                shape: 'flow-rhombus',
                model: { color: '#13C2C2', label: 'Decision' },
                src:
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iNzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik00Mi42NyAxLjY3bDM0Ljk2NSAzMS4zNTJhNCA0IDAgMCAxIDAgNS45NTZMNDIuNjcgNzAuMzNhNCA0IDAgMCAxLTUuMzQgMEwyLjM2NSAzOC45NzhhNCA0IDAgMCAxIDAtNS45NTZMMzcuMzMgMS42N2E0IDQgMCAwIDEgNS4zNCAweiIgaWQ9ImIiLz48ZmlsdGVyIHg9Ii04LjglIiB5PSItNi45JSIgd2lkdGg9IjExNy41JSIgaGVpZ2h0PSIxMTkuNCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAxKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0U2RkZGQiIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBzdHJva2U9IiM1Q0RCRDMiIGQ9Ik00Mi4zMzcgMi4wNDJhMy41IDMuNSAwIDAgMC00LjY3NCAwTDIuNjk4IDMzLjM5NGEzLjUgMy41IDAgMCAwIDAgNS4yMTJsMzQuOTY1IDMxLjM1MmEzLjUgMy41IDAgMCAwIDQuNjc0IDBsMzQuOTY1LTMxLjM1MmEzLjUgMy41IDAgMCAwIDAtNS4yMTJMNDIuMzM3IDIuMDQyeiIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMSkiPjx0c3BhbiB4PSIxOCIgeT0iNDIiPkRlY2lzaW9uPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
              }),
              i.a.createElement(Zn, {
                type: 'node',
                size: '80*48',
                shape: 'flow-capsule',
                model: { color: '#722ED1', label: 'Model' },
                src:
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iNDgiIHJ4PSIyNCIvPjxmaWx0ZXIgeD0iLTguOCUiIHk9Ii0xMC40JSIgd2lkdGg9IjExNy41JSIgaGVpZ2h0PSIxMjkuMiUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0Y5RjBGRiIgeGxpbms6aHJlZj0iI2IiLz48cmVjdCBzdHJva2U9IiNCMzdGRUIiIHg9Ii41IiB5PSIuNSIgd2lkdGg9Ijc5IiBoZWlnaHQ9IjQ3IiByeD0iMjMuNSIvPjwvZz48dGV4dCBmb250LWZhbWlseT0iUGluZ0ZhbmdTQy1SZWd1bGFyLCBQaW5nRmFuZyBTQyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiPjx0c3BhbiB4PSIyNCIgeT0iMjkiPk1vZGVsPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==',
              }),
            ),
          );
        },
        Sr = function() {
          return i.a.createElement(
            Qn,
            { className: vr.a.editor },
            i.a.createElement(
              c.Row,
              { type: 'flex', className: vr.a.editorHd },
              i.a.createElement(c.Col, { span: 24 }),
            ),
            i.a.createElement(
              c.Row,
              { type: 'flex', className: vr.a.editorBd },
              i.a.createElement(c.Col, { span: 4, className: vr.a.editorContent }, i.a.createElement(wr, null)),
              i.a.createElement(
                c.Col,
                { span: 16, className: vr.a.editorContent },
                i.a.createElement(In, { data: yr, className: vr.a.flow }),
              ),
              i.a.createElement(c.Col, { span: 4, className: vr.a.editorSidebar }),
            ),
          );
        };
      o.a.render(
        i.a.createElement(
          s.HashRouter,
          null,
          i.a.createElement(s.Route, { path: '/flow', component: Sr }),
          i.a.createElement(s.Route, { path: '/mind', component: mr }),
        ),
        document.getElementById('root'),
      );
    },
  ]);
});
//# sourceMappingURL=bundle.js.map
