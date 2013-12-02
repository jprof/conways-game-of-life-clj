;(function(){
function h(a) {
  return function() {
    return this[a]
  }
}
function n(a) {
  return function() {
    return a
  }
}
var r;
function s(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
var aa = "closure_uid_" + (1E9 * Math.random() >>> 0), ba = 0;
function ca(a, b) {
  null != a && this.append.apply(this, arguments)
}
ca.prototype.pa = "";
ca.prototype.append = function(a, b, c) {
  this.pa += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.pa += arguments[d]
    }
  }
  return this
};
ca.prototype.toString = h("pa");
function u(a) {
  return null != a && !1 !== a
}
function v(a, b) {
  return a[s(null == b ? null : b)] ? !0 : a._ ? !0 : w ? !1 : null
}
function da(a) {
  return null == a ? null : a.constructor
}
function x(a, b) {
  var c = da(b), c = u(u(c) ? c.hb : c) ? c.gb : s(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function ea(a) {
  var b = a.gb;
  return u(b) ? b : "" + y(a)
}
var fa = {}, ha = {};
function ia(a) {
  if(a ? a.F : a) {
    return a.F(a)
  }
  var b;
  b = ia[s(null == a ? null : a)];
  if(!b && (b = ia._, !b)) {
    throw x("ICounted.-count", a);
  }
  return b.call(null, a)
}
function ja(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  c = ja[s(null == a ? null : a)];
  if(!c && (c = ja._, !c)) {
    throw x("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var ka = {}, A = function() {
  function a(a, b, c) {
    if(a ? a.S : a) {
      return a.S(a, b, c)
    }
    var g;
    g = A[s(null == a ? null : a)];
    if(!g && (g = A._, !g)) {
      throw x("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.s : a) {
      return a.s(a, b)
    }
    var c;
    c = A[s(null == a ? null : a)];
    if(!c && (c = A._, !c)) {
      throw x("IIndexed.-nth", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), ma = {};
function B(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  b = B[s(null == a ? null : a)];
  if(!b && (b = B._, !b)) {
    throw x("ISeq.-first", a);
  }
  return b.call(null, a)
}
function D(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  b = D[s(null == a ? null : a)];
  if(!b && (b = D._, !b)) {
    throw x("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var na = {}, oa = function() {
  function a(a, b, c) {
    if(a ? a.L : a) {
      return a.L(a, b, c)
    }
    var g;
    g = oa[s(null == a ? null : a)];
    if(!g && (g = oa._, !g)) {
      throw x("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.K : a) {
      return a.K(a, b)
    }
    var c;
    c = oa[s(null == a ? null : a)];
    if(!c && (c = oa._, !c)) {
      throw x("ILookup.-lookup", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function pa(a, b, c) {
  if(a ? a.qa : a) {
    return a.qa(a, b, c)
  }
  var d;
  d = pa[s(null == a ? null : a)];
  if(!d && (d = pa._, !d)) {
    throw x("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var qa = {}, ra = {};
function sa(a) {
  if(a ? a.Va : a) {
    return a.Va()
  }
  var b;
  b = sa[s(null == a ? null : a)];
  if(!b && (b = sa._, !b)) {
    throw x("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function ta(a) {
  if(a ? a.Wa : a) {
    return a.Wa()
  }
  var b;
  b = ta[s(null == a ? null : a)];
  if(!b && (b = ta._, !b)) {
    throw x("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var ua = {};
function va(a, b, c) {
  if(a ? a.Pa : a) {
    return a.Pa(a, b, c)
  }
  var d;
  d = va[s(null == a ? null : a)];
  if(!d && (d = va._, !d)) {
    throw x("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function wa(a) {
  if(a ? a.ab : a) {
    return a.state
  }
  var b;
  b = wa[s(null == a ? null : a)];
  if(!b && (b = wa._, !b)) {
    throw x("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var ya = {};
function za(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  b = za[s(null == a ? null : a)];
  if(!b && (b = za._, !b)) {
    throw x("IMeta.-meta", a);
  }
  return b.call(null, a)
}
function Aa(a, b) {
  if(a ? a.I : a) {
    return a.I(a, b)
  }
  var c;
  c = Aa[s(null == a ? null : a)];
  if(!c && (c = Aa._, !c)) {
    throw x("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var Ba = {}, Ca = function() {
  function a(a, b, c) {
    if(a ? a.N : a) {
      return a.N(a, b, c)
    }
    var g;
    g = Ca[s(null == a ? null : a)];
    if(!g && (g = Ca._, !g)) {
      throw x("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.M : a) {
      return a.M(a, b)
    }
    var c;
    c = Ca[s(null == a ? null : a)];
    if(!c && (c = Ca._, !c)) {
      throw x("IReduce.-reduce", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function Da(a, b) {
  if(a ? a.r : a) {
    return a.r(a, b)
  }
  var c;
  c = Da[s(null == a ? null : a)];
  if(!c && (c = Da._, !c)) {
    throw x("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function Ea(a) {
  if(a ? a.v : a) {
    return a.v(a)
  }
  var b;
  b = Ea[s(null == a ? null : a)];
  if(!b && (b = Ea._, !b)) {
    throw x("IHash.-hash", a);
  }
  return b.call(null, a)
}
var Fa = {};
function Ga(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  b = Ga[s(null == a ? null : a)];
  if(!b && (b = Ga._, !b)) {
    throw x("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var Ha = {};
function E(a, b) {
  if(a ? a.Za : a) {
    return a.Za(0, b)
  }
  var c;
  c = E[s(null == a ? null : a)];
  if(!c && (c = E._, !c)) {
    throw x("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
function Ia(a) {
  if(a ? a.fb : a) {
    return null
  }
  var b;
  b = Ia[s(null == a ? null : a)];
  if(!b && (b = Ia._, !b)) {
    throw x("IWriter.-flush", a);
  }
  return b.call(null, a)
}
var Ja = {};
function Ka(a, b, c) {
  if(a ? a.t : a) {
    return a.t(a, b, c)
  }
  var d;
  d = Ka[s(null == a ? null : a)];
  if(!d && (d = Ka._, !d)) {
    throw x("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function La(a, b, c) {
  if(a ? a.Ya : a) {
    return a.Ya(0, b, c)
  }
  var d;
  d = La[s(null == a ? null : a)];
  if(!d && (d = La._, !d)) {
    throw x("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
}
function Ma(a) {
  if(a ? a.va : a) {
    return a.va(a)
  }
  var b;
  b = Ma[s(null == a ? null : a)];
  if(!b && (b = Ma._, !b)) {
    throw x("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function Na(a, b) {
  if(a ? a.wa : a) {
    return a.wa(a, b)
  }
  var c;
  c = Na[s(null == a ? null : a)];
  if(!c && (c = Na._, !c)) {
    throw x("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function Oa(a) {
  if(a ? a.xa : a) {
    return a.xa(a)
  }
  var b;
  b = Oa[s(null == a ? null : a)];
  if(!b && (b = Oa._, !b)) {
    throw x("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function Pa(a, b, c) {
  if(a ? a.sa : a) {
    return a.sa(a, b, c)
  }
  var d;
  d = Pa[s(null == a ? null : a)];
  if(!d && (d = Pa._, !d)) {
    throw x("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function Qa(a, b, c) {
  if(a ? a.Xa : a) {
    return a.Xa(0, b, c)
  }
  var d;
  d = Qa[s(null == a ? null : a)];
  if(!d && (d = Qa._, !d)) {
    throw x("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c)
}
function Ra(a) {
  if(a ? a.Qa : a) {
    return a.Qa()
  }
  var b;
  b = Ra[s(null == a ? null : a)];
  if(!b && (b = Ra._, !b)) {
    throw x("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function F(a) {
  if(a ? a.Aa : a) {
    return a.Aa(a)
  }
  var b;
  b = F[s(null == a ? null : a)];
  if(!b && (b = F._, !b)) {
    throw x("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function G(a) {
  if(a ? a.Ba : a) {
    return a.Ba(a)
  }
  var b;
  b = G[s(null == a ? null : a)];
  if(!b && (b = G._, !b)) {
    throw x("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function Sa(a) {
  if(a ? a.za : a) {
    return a.za(a)
  }
  var b;
  b = Sa[s(null == a ? null : a)];
  if(!b && (b = Sa._, !b)) {
    throw x("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a)
}
function Ta(a) {
  this.ib = a;
  this.o = 0;
  this.f = 1073741824
}
Ta.prototype.Za = function(a, b) {
  return this.ib.append(b)
};
Ta.prototype.fb = n(null);
function Ua(a) {
  var b = new ca, c = new Ta(b);
  a.t(null, c, Va([Wa, !0, Xa, !0, Ya, !1, Za, !1]));
  Ia(c);
  return"" + y(b)
}
function $a(a, b, c, d, e) {
  this.ia = a;
  this.name = b;
  this.ja = c;
  this.ga = d;
  this.oa = e;
  this.f = 2154168321;
  this.o = 4096
}
r = $a.prototype;
r.t = function(a, b) {
  return E(b, this.ja)
};
r.v = function() {
  var a = this.ga;
  return null != a ? a : this.ga = a = ab.a ? ab.a(H.d ? H.d(this.ia) : H.call(null, this.ia), H.d ? H.d(this.name) : H.call(null, this.name)) : ab.call(null, H.d ? H.d(this.ia) : H.call(null, this.ia), H.d ? H.d(this.name) : H.call(null, this.name))
};
r.I = function(a, b) {
  return new $a(this.ia, this.name, this.ja, this.ga, b)
};
r.G = h("oa");
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return oa.c(c, this, null);
      case 3:
        return oa.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
r.d = function(a) {
  return oa.c(a, this, null)
};
r.a = function(a, b) {
  return oa.c(a, this, b)
};
r.r = function(a, b) {
  return b instanceof $a ? this.ja === b.ja : !1
};
r.toString = h("ja");
function I(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 8388608 || a.rb)) {
    return a.C(null)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new bb(a, 0)
  }
  if(v(Fa, a)) {
    return Ga(a)
  }
  if(w) {
    throw Error([y(a), y("is not ISeqable")].join(""));
  }
  return null
}
function K(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 64 || a.ra)) {
    return a.O(null)
  }
  a = I(a);
  return null == a ? null : B(a)
}
function L(a) {
  return null != a ? a && (a.f & 64 || a.ra) ? a.P(null) : (a = I(a)) ? D(a) : M : M
}
function N(a) {
  return null == a ? null : a && (a.f & 128 || a.qb) ? a.Y(null) : I(L(a))
}
var cb = function() {
  function a(a, b) {
    return a === b || Da(a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(b.a(a, d)) {
          if(N(e)) {
            a = d, d = K(e), e = N(e)
          }else {
            return b.a(d, K(e))
          }
        }else {
          return!1
        }
      }
    }
    a.m = 2;
    a.h = function(a) {
      var b = K(a);
      a = N(a);
      var d = K(a);
      a = L(a);
      return c(b, d, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, O(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.d = n(!0);
  b.a = a;
  b.g = c.g;
  return b
}();
Ea["null"] = n(0);
ha["null"] = !0;
ia["null"] = n(0);
Da["null"] = function(a, b) {
  return null == b
};
Aa["null"] = n(null);
ya["null"] = !0;
za["null"] = n(null);
qa["null"] = !0;
Date.prototype.r = function(a, b) {
  return b instanceof Date && this.toString() === b.toString()
};
Da.number = function(a, b) {
  return a === b
};
ya["function"] = !0;
za["function"] = n(null);
fa["function"] = !0;
Ea._ = function(a) {
  return a[aa] || (a[aa] = ++ba)
};
var db = function() {
  function a(a, b, c, d) {
    for(var l = ia(a);;) {
      if(d < l) {
        c = b.a ? b.a(c, A.a(a, d)) : b.call(null, c, A.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = ia(a), l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, A.a(a, l)) : b.call(null, c, A.a(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = ia(a);
    if(0 === c) {
      return b.R ? b.R() : b.call(null)
    }
    for(var d = A.a(a, 0), l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, A.a(a, l)) : b.call(null, d, A.a(a, l)), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.l = a;
  return d
}(), eb = function() {
  function a(a, b, c, d) {
    for(var l = a.length;;) {
      if(d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = a.length, l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if(0 === a.length) {
      return b.R ? b.R() : b.call(null)
    }
    for(var d = a[0], l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.l = a;
  return d
}();
function fb(a) {
  return a ? a.f & 2 || a.$a ? !0 : a.f ? !1 : v(ha, a) : v(ha, a)
}
function hb(a) {
  return a ? a.f & 16 || a.Ta ? !0 : a.f ? !1 : v(ka, a) : v(ka, a)
}
function bb(a, b) {
  this.b = a;
  this.i = b;
  this.o = 0;
  this.f = 166199550
}
r = bb.prototype;
r.v = function() {
  return ib.d ? ib.d(this) : ib.call(null, this)
};
r.Y = function() {
  return this.i + 1 < this.b.length ? new bb(this.b, this.i + 1) : null
};
r.B = function(a, b) {
  return P.a ? P.a(b, this) : P.call(null, b, this)
};
r.toString = function() {
  return Ua(this)
};
r.M = function(a, b) {
  return eb.l(this.b, b, this.b[this.i], this.i + 1)
};
r.N = function(a, b, c) {
  return eb.l(this.b, b, c, this.i)
};
r.C = function() {
  return this
};
r.F = function() {
  return this.b.length - this.i
};
r.O = function() {
  return this.b[this.i]
};
r.P = function() {
  return this.i + 1 < this.b.length ? new bb(this.b, this.i + 1) : M
};
r.r = function(a, b) {
  return jb.a ? jb.a(this, b) : jb.call(null, this, b)
};
r.s = function(a, b) {
  var c = b + this.i;
  return c < this.b.length ? this.b[c] : null
};
r.S = function(a, b, c) {
  a = b + this.i;
  return a < this.b.length ? this.b[a] : c
};
var kb = function() {
  function a(a, b) {
    return b < a.length ? new bb(a, b) : null
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c
}(), O = function() {
  function a(a, b) {
    return kb.a(a, b)
  }
  function b(a) {
    return kb.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c
}();
Da._ = function(a, b) {
  return a === b
};
var lb = function() {
  function a(a, b) {
    return null != a ? ja(a, b) : ja(M, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(u(e)) {
          a = b.a(a, d), d = K(e), e = N(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.m = 2;
    a.h = function(a) {
      var b = K(a);
      a = N(a);
      var d = K(a);
      a = L(a);
      return c(b, d, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, O(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.a = a;
  b.g = c.g;
  return b
}();
function Q(a) {
  if(null != a) {
    if(a && (a.f & 2 || a.$a)) {
      a = a.F(null)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(v(ha, a)) {
            a = ia(a)
          }else {
            if(w) {
              a: {
                a = I(a);
                for(var b = 0;;) {
                  if(fb(a)) {
                    a = b + ia(a);
                    break a
                  }
                  a = N(a);
                  b += 1
                }
                a = void 0
              }
            }else {
              a = null
            }
          }
        }
      }
    }
  }else {
    a = 0
  }
  return a
}
var mb = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return I(a) ? K(a) : c
      }
      if(hb(a)) {
        return A.c(a, b, c)
      }
      if(I(a)) {
        a = N(a), b -= 1
      }else {
        return w ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(I(a)) {
          return K(a)
        }
        throw Error("Index out of bounds");
      }
      if(hb(a)) {
        return A.a(a, b)
      }
      if(I(a)) {
        var c = N(a), g = b - 1;
        a = c;
        b = g
      }else {
        if(w) {
          throw Error("Index out of bounds");
        }
        return null
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), nb = function() {
  function a(a, b, c) {
    if(null != a) {
      if(a && (a.f & 16 || a.Ta)) {
        return a.S(null, b, c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(v(ka, a)) {
        return A.a(a, b)
      }
      if(w) {
        if(a ? a.f & 64 || a.ra || (a.f ? 0 : v(ma, a)) : v(ma, a)) {
          return mb.c(a, b, c)
        }
        throw Error([y("nth not supported on this type "), y(ea(da(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(a && (a.f & 16 || a.Ta)) {
      return a.s(null, b)
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(v(ka, a)) {
      return A.a(a, b)
    }
    if(w) {
      if(a ? a.f & 64 || a.ra || (a.f ? 0 : v(ma, a)) : v(ma, a)) {
        return mb.a(a, b)
      }
      throw Error([y("nth not supported on this type "), y(ea(da(a)))].join(""));
    }
    return null
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), R = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.Ua) ? a.L(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : v(na, a) ? oa.c(a, b, c) : w ? c : null : c
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.Ua) ? a.K(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : v(na, a) ? oa.a(a, b) : null
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), pb = function() {
  function a(a, b, c) {
    return null != a ? pa(a, b, c) : ob.a ? ob.a([b], [c]) : ob.call(null, [b], [c])
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = O(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.c(a, d, e), u(l)) {
          d = K(l), e = K(N(l)), l = N(N(l))
        }else {
          return a
        }
      }
    }
    a.m = 3;
    a.h = function(a) {
      var b = K(a);
      a = N(a);
      var d = K(a);
      a = N(a);
      var l = K(a);
      a = L(a);
      return c(b, d, l, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.g(b, e, f, O(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 3;
  b.h = c.h;
  b.c = a;
  b.g = c.g;
  return b
}();
function qb(a) {
  var b = "function" == s(a);
  return b ? b : a ? u(u(null) ? null : a.lb) ? !0 : a.vb ? !1 : v(fa, a) : v(fa, a)
}
function rb(a) {
  return(a ? a.f & 131072 || a.cb || (a.f ? 0 : v(ya, a)) : v(ya, a)) ? za(a) : null
}
var sb = {}, tb = 0;
function H(a) {
  if(a && (a.f & 4194304 || a.ob)) {
    a = a.v(null)
  }else {
    if("number" === typeof a) {
      a = Math.floor(a) % 2147483647
    }else {
      if(!0 === a) {
        a = 1
      }else {
        if(!1 === a) {
          a = 0
        }else {
          if("string" === typeof a) {
            255 < tb && (sb = {}, tb = 0);
            var b = sb[a];
            if("number" !== typeof b) {
              for(var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296
              }
              sb[a] = b;
              tb += 1
            }
            a = b
          }else {
            a = w ? Ea(a) : null
          }
        }
      }
    }
  }
  return a
}
function ub(a) {
  return a ? a.f & 16384 || a.tb ? !0 : a.f ? !1 : v(ua, a) : v(ua, a)
}
function T(a) {
  return a ? a.o & 512 || a.mb ? !0 : !1 : !1
}
function vb(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
var wb = {};
function yb(a) {
  return null == a ? !1 : a ? a.f & 64 || a.ra ? !0 : a.f ? !1 : v(ma, a) : v(ma, a)
}
function zb(a) {
  return u(a) ? !0 : !1
}
function Ab(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(da(a) === da(b)) {
    return a && (a.o & 2048 || a.Ra) ? a.Sa(null, b) : a > b ? 1 : a < b ? -1 : 0
  }
  if(w) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var Bb = function() {
  function a(a, b, c, g) {
    for(;;) {
      var k = Ab(nb.a(a, g), nb.a(b, g));
      if(0 === k && g + 1 < c) {
        g += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var f = Q(a), g = Q(b);
    return f < g ? -1 : f > g ? 1 : w ? c.l(a, b, f, 0) : null
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c
}(), U = function() {
  function a(a, b, c) {
    for(c = I(c);;) {
      if(c) {
        b = a.a ? a.a(b, K(c)) : a.call(null, b, K(c)), c = N(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = I(b);
    return c ? Cb.c ? Cb.c(a, K(c), N(c)) : Cb.call(null, a, K(c), N(c)) : a.R ? a.R() : a.call(null)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), Cb = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.eb) ? c.N(null, a, b) : c instanceof Array ? eb.c(c, a, b) : "string" === typeof c ? eb.c(c, a, b) : v(Ba, c) ? Ca.c(c, a, b) : w ? U.c(a, b, c) : null
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.eb) ? b.M(null, a) : b instanceof Array ? eb.a(b, a) : "string" === typeof b ? eb.a(b, a) : v(Ba, b) ? Ca.a(b, a) : w ? U.a(a, b) : null
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function Db(a) {
  return 0 <= a ? Math.floor.d ? Math.floor.d(a) : Math.floor.call(null, a) : Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(null, a)
}
function Eb(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var y = function() {
  function a(a) {
    return null == a ? "" : a.toString()
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k)
    }
    function c(a, d) {
      for(var e = new ca(b.d(a)), l = d;;) {
        if(u(l)) {
          e = e.append(b.d(K(l))), l = N(l)
        }else {
          return e.toString()
        }
      }
    }
    a.m = 1;
    a.h = function(a) {
      var b = K(a);
      a = L(a);
      return c(b, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, O(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.h = c.h;
  b.R = n("");
  b.d = a;
  b.g = c.g;
  return b
}();
function jb(a, b) {
  return zb((b ? b.f & 16777216 || b.sb || (b.f ? 0 : v(Ha, b)) : v(Ha, b)) ? function() {
    for(var c = I(a), d = I(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(cb.a(K(c), K(d))) {
        c = N(c), d = N(d)
      }else {
        return w ? !1 : null
      }
    }
  }() : null)
}
function ab(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function ib(a) {
  if(I(a)) {
    var b = H(K(a));
    for(a = N(a);;) {
      if(null == a) {
        return b
      }
      b = ab(b, H(K(a)));
      a = N(a)
    }
  }else {
    return 0
  }
}
function Fb(a) {
  var b = 0;
  for(a = I(a);;) {
    if(a) {
      var c = K(a), b = (b + (H(Gb.d ? Gb.d(c) : Gb.call(null, c)) ^ H(Hb.d ? Hb.d(c) : Hb.call(null, c)))) % 4503599627370496;
      a = N(a)
    }else {
      return b
    }
  }
}
function Ib(a, b, c, d, e) {
  this.k = a;
  this.ta = b;
  this.da = c;
  this.count = d;
  this.j = e;
  this.o = 0;
  this.f = 65937646
}
r = Ib.prototype;
r.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ib(this)
};
r.Y = function() {
  return 1 === this.count ? null : this.da
};
r.B = function(a, b) {
  return new Ib(this.k, b, this, this.count + 1, null)
};
r.toString = function() {
  return Ua(this)
};
r.M = function(a, b) {
  return U.a(b, this)
};
r.N = function(a, b, c) {
  return U.c(b, c, this)
};
r.C = function() {
  return this
};
r.F = h("count");
r.O = h("ta");
r.P = function() {
  return 1 === this.count ? M : this.da
};
r.r = function(a, b) {
  return jb(this, b)
};
r.I = function(a, b) {
  return new Ib(b, this.ta, this.da, this.count, this.j)
};
r.G = h("k");
function Jb(a) {
  this.k = a;
  this.o = 0;
  this.f = 65937614
}
r = Jb.prototype;
r.v = n(0);
r.Y = n(null);
r.B = function(a, b) {
  return new Ib(this.k, b, null, 1, null)
};
r.toString = function() {
  return Ua(this)
};
r.M = function(a, b) {
  return U.a(b, this)
};
r.N = function(a, b, c) {
  return U.c(b, c, this)
};
r.C = n(null);
r.F = n(0);
r.O = n(null);
r.P = function() {
  return M
};
r.r = function(a, b) {
  return jb(this, b)
};
r.I = function(a, b) {
  return new Jb(b)
};
r.G = h("k");
var M = new Jb(null), Kb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof bb) {
      b = a.b
    }else {
      a: {
        for(b = [];;) {
          if(null != a) {
            b.push(a.O(null)), a = a.Y(null)
          }else {
            break a
          }
        }
        b = void 0
      }
    }
    a = b.length;
    for(var e = M;;) {
      if(0 < a) {
        var f = a - 1, e = e.B(null, b[a - 1]);
        a = f
      }else {
        return e
      }
    }
  }
  a.m = 0;
  a.h = function(a) {
    a = I(a);
    return b(a)
  };
  a.g = b;
  return a
}();
function Lb(a, b, c, d) {
  this.k = a;
  this.ta = b;
  this.da = c;
  this.j = d;
  this.o = 0;
  this.f = 65929452
}
r = Lb.prototype;
r.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ib(this)
};
r.Y = function() {
  return null == this.da ? null : I(this.da)
};
r.B = function(a, b) {
  return new Lb(null, b, this, this.j)
};
r.toString = function() {
  return Ua(this)
};
r.M = function(a, b) {
  return U.a(b, this)
};
r.N = function(a, b, c) {
  return U.c(b, c, this)
};
r.C = function() {
  return this
};
r.O = h("ta");
r.P = function() {
  return null == this.da ? M : this.da
};
r.r = function(a, b) {
  return jb(this, b)
};
r.I = function(a, b) {
  return new Lb(b, this.ta, this.da, this.j)
};
r.G = h("k");
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.ra)) ? new Lb(null, a, b, null) : new Lb(null, a, I(b), null)
}
function V(a, b, c, d) {
  this.ia = a;
  this.name = b;
  this.fa = c;
  this.ga = d;
  this.f = 2153775105;
  this.o = 4096
}
r = V.prototype;
r.t = function(a, b) {
  return E(b, [y(":"), y(this.fa)].join(""))
};
r.v = function() {
  null == this.ga && (this.ga = ab(H(this.ia), H(this.name)) + 2654435769);
  return this.ga
};
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return R.a(c, this);
      case 3:
        return R.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
r.d = function(a) {
  return R.a(a, this)
};
r.a = function(a, b) {
  return R.c(a, this, b)
};
r.r = function(a, b) {
  return b instanceof V ? this.fa === b.fa : !1
};
r.toString = function() {
  return[y(":"), y(this.fa)].join("")
};
function W(a, b, c, d) {
  this.k = a;
  this.na = b;
  this.p = c;
  this.j = d;
  this.o = 0;
  this.f = 32374988
}
r = W.prototype;
r.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ib(this)
};
r.Y = function() {
  Ga(this);
  return null == this.p ? null : N(this.p)
};
r.B = function(a, b) {
  return P(b, this)
};
r.toString = function() {
  return Ua(this)
};
function Mb(a) {
  null != a.na && (a.p = a.na.R ? a.na.R() : a.na.call(null), a.na = null);
  return a.p
}
r.M = function(a, b) {
  return U.a(b, this)
};
r.N = function(a, b, c) {
  return U.c(b, c, this)
};
r.C = function() {
  Mb(this);
  if(null == this.p) {
    return null
  }
  for(var a = this.p;;) {
    if(a instanceof W) {
      a = Mb(a)
    }else {
      return this.p = a, I(this.p)
    }
  }
};
r.O = function() {
  Ga(this);
  return null == this.p ? null : K(this.p)
};
r.P = function() {
  Ga(this);
  return null != this.p ? L(this.p) : M
};
r.r = function(a, b) {
  return jb(this, b)
};
r.I = function(a, b) {
  return new W(b, this.na, this.p, this.j)
};
r.G = h("k");
function Nb(a, b) {
  this.ya = a;
  this.end = b;
  this.o = 0;
  this.f = 2
}
Nb.prototype.F = h("end");
Nb.prototype.add = function(a) {
  this.ya[this.end] = a;
  return this.end += 1
};
Nb.prototype.D = function() {
  var a = new Ob(this.ya, 0, this.end);
  this.ya = null;
  return a
};
function Pb(a) {
  return new Nb(Array(a), 0)
}
function Ob(a, b, c) {
  this.b = a;
  this.q = b;
  this.end = c;
  this.o = 0;
  this.f = 524306
}
r = Ob.prototype;
r.M = function(a, b) {
  return eb.l(this.b, b, this.b[this.q], this.q + 1)
};
r.N = function(a, b, c) {
  return eb.l(this.b, b, c, this.q)
};
r.Qa = function() {
  if(this.q === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Ob(this.b, this.q + 1, this.end)
};
r.s = function(a, b) {
  return this.b[this.q + b]
};
r.S = function(a, b, c) {
  return 0 <= b && b < this.end - this.q ? this.b[this.q + b] : c
};
r.F = function() {
  return this.end - this.q
};
var Qb = function() {
  function a(a, b, c) {
    return new Ob(a, b, c)
  }
  function b(a, b) {
    return new Ob(a, b, a.length)
  }
  function c(a) {
    return new Ob(a, 0, a.length)
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.a = b;
  d.c = a;
  return d
}();
function Rb(a, b, c, d) {
  this.D = a;
  this.Z = b;
  this.k = c;
  this.j = d;
  this.f = 31850732;
  this.o = 1536
}
r = Rb.prototype;
r.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ib(this)
};
r.Y = function() {
  if(1 < ia(this.D)) {
    return new Rb(Ra(this.D), this.Z, this.k, null)
  }
  var a = Ga(this.Z);
  return null == a ? null : a
};
r.B = function(a, b) {
  return P(b, this)
};
r.toString = function() {
  return Ua(this)
};
r.C = function() {
  return this
};
r.O = function() {
  return A.a(this.D, 0)
};
r.P = function() {
  return 1 < ia(this.D) ? new Rb(Ra(this.D), this.Z, this.k, null) : null == this.Z ? M : this.Z
};
r.za = function() {
  return null == this.Z ? null : this.Z
};
r.r = function(a, b) {
  return jb(this, b)
};
r.I = function(a, b) {
  return new Rb(this.D, this.Z, b, this.j)
};
r.G = h("k");
r.Aa = h("D");
r.Ba = function() {
  return null == this.Z ? M : this.Z
};
function Sb(a, b) {
  return 0 === ia(a) ? b : new Rb(a, b, null, null)
}
function Tb(a, b) {
  a.add(b)
}
function Ub(a) {
  for(var b = [];;) {
    if(I(a)) {
      b.push(K(a)), a = N(a)
    }else {
      return b
    }
  }
}
function Vb(a, b) {
  if(fb(a)) {
    return Q(a)
  }
  for(var c = a, d = b, e = 0;;) {
    if(0 < d && I(c)) {
      c = N(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var Xb = function Wb(b) {
  return null == b ? null : null == N(b) ? I(K(b)) : w ? P(K(b), Wb(N(b))) : null
}, Yb = function() {
  function a(a, b) {
    return new W(null, function() {
      var c = I(a);
      return c ? T(c) ? Sb(F(c), d.a(G(c), b)) : P(K(c), d.a(L(c), b)) : b
    }, null, null)
  }
  function b(a) {
    return new W(null, function() {
      return a
    }, null, null)
  }
  function c() {
    return new W(null, n(null), null, null)
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f)
    }
    function b(a, c, e) {
      return function q(a, b) {
        return new W(null, function() {
          var c = I(a);
          return c ? T(c) ? Sb(F(c), q(G(c), b)) : P(K(c), q(L(c), b)) : u(b) ? q(K(b), N(b)) : null
        }, null, null)
      }(d.a(a, c), e)
    }
    a.m = 2;
    a.h = function(a) {
      var c = K(a);
      a = N(a);
      var d = K(a);
      a = L(a);
      return b(c, d, a)
    };
    a.g = b;
    return a
  }(), d = function(d, g, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.g(d, g, O(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.h = e.h;
  d.R = c;
  d.d = b;
  d.a = a;
  d.g = e.g;
  return d
}(), Zb = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)))
  }
  function b(a, b, c) {
    return P(a, P(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, m, p) {
      var q = null;
      4 < arguments.length && (q = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, q)
    }
    function b(a, c, d, e, f) {
      return P(a, P(c, P(d, P(e, Xb(f)))))
    }
    a.m = 4;
    a.h = function(a) {
      var c = K(a);
      a = N(a);
      var d = K(a);
      a = N(a);
      var e = K(a);
      a = N(a);
      var p = K(a);
      a = L(a);
      return b(c, d, e, p, a)
    };
    a.g = b;
    return a
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return I(c);
      case 2:
        return P(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        return d.g(c, f, g, k, O(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = 4;
  c.h = d.h;
  c.d = function(a) {
    return I(a)
  };
  c.a = function(a, b) {
    return P(a, b)
  };
  c.c = b;
  c.l = a;
  c.g = d.g;
  return c
}();
function $b(a, b, c) {
  var d = I(c);
  if(0 === b) {
    return a.R ? a.R() : a.call(null)
  }
  c = B(d);
  var e = D(d);
  if(1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(null, c)
  }
  var d = B(e), f = D(e);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d)
  }
  var e = B(f), g = D(f);
  if(3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e)
  }
  var f = B(g), k = D(g);
  if(4 === b) {
    return a.l ? a.l(c, d, e, f) : a.l ? a.l(c, d, e, f) : a.call(null, c, d, e, f)
  }
  g = B(k);
  k = D(k);
  if(5 === b) {
    return a.A ? a.A(c, d, e, f, g) : a.A ? a.A(c, d, e, f, g) : a.call(null, c, d, e, f, g)
  }
  a = B(k);
  var l = D(k);
  if(6 === b) {
    return a.ba ? a.ba(c, d, e, f, g, a) : a.ba ? a.ba(c, d, e, f, g, a) : a.call(null, c, d, e, f, g, a)
  }
  var k = B(l), m = D(l);
  if(7 === b) {
    return a.ka ? a.ka(c, d, e, f, g, a, k) : a.ka ? a.ka(c, d, e, f, g, a, k) : a.call(null, c, d, e, f, g, a, k)
  }
  var l = B(m), p = D(m);
  if(8 === b) {
    return a.Na ? a.Na(c, d, e, f, g, a, k, l) : a.Na ? a.Na(c, d, e, f, g, a, k, l) : a.call(null, c, d, e, f, g, a, k, l)
  }
  var m = B(p), q = D(p);
  if(9 === b) {
    return a.Oa ? a.Oa(c, d, e, f, g, a, k, l, m) : a.Oa ? a.Oa(c, d, e, f, g, a, k, l, m) : a.call(null, c, d, e, f, g, a, k, l, m)
  }
  var p = B(q), t = D(q);
  if(10 === b) {
    return a.Ca ? a.Ca(c, d, e, f, g, a, k, l, m, p) : a.Ca ? a.Ca(c, d, e, f, g, a, k, l, m, p) : a.call(null, c, d, e, f, g, a, k, l, m, p)
  }
  var q = B(t), C = D(t);
  if(11 === b) {
    return a.Da ? a.Da(c, d, e, f, g, a, k, l, m, p, q) : a.Da ? a.Da(c, d, e, f, g, a, k, l, m, p, q) : a.call(null, c, d, e, f, g, a, k, l, m, p, q)
  }
  var t = B(C), z = D(C);
  if(12 === b) {
    return a.Ea ? a.Ea(c, d, e, f, g, a, k, l, m, p, q, t) : a.Ea ? a.Ea(c, d, e, f, g, a, k, l, m, p, q, t) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, t)
  }
  var C = B(z), J = D(z);
  if(13 === b) {
    return a.Fa ? a.Fa(c, d, e, f, g, a, k, l, m, p, q, t, C) : a.Fa ? a.Fa(c, d, e, f, g, a, k, l, m, p, q, t, C) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, t, C)
  }
  var z = B(J), S = D(J);
  if(14 === b) {
    return a.Ga ? a.Ga(c, d, e, f, g, a, k, l, m, p, q, t, C, z) : a.Ga ? a.Ga(c, d, e, f, g, a, k, l, m, p, q, t, C, z) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, t, C, z)
  }
  var J = B(S), ga = D(S);
  if(15 === b) {
    return a.Ha ? a.Ha(c, d, e, f, g, a, k, l, m, p, q, t, C, z, J) : a.Ha ? a.Ha(c, d, e, f, g, a, k, l, m, p, q, t, C, z, J) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, t, C, z, J)
  }
  var S = B(ga), la = D(ga);
  if(16 === b) {
    return a.Ia ? a.Ia(c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S) : a.Ia ? a.Ia(c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S)
  }
  var ga = B(la), xa = D(la);
  if(17 === b) {
    return a.Ja ? a.Ja(c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S, ga) : a.Ja ? a.Ja(c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S, ga) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S, ga)
  }
  var la = B(xa), xb = D(xa);
  if(18 === b) {
    return a.Ka ? a.Ka(c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S, ga, la) : a.Ka ? a.Ka(c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S, ga, la) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S, ga, la)
  }
  xa = B(xb);
  xb = D(xb);
  if(19 === b) {
    return a.La ? a.La(c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S, ga, la, xa) : a.La ? a.La(c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S, ga, la, xa) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S, ga, la, xa)
  }
  var gb = B(xb);
  D(xb);
  if(20 === b) {
    return a.Ma ? a.Ma(c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S, ga, la, xa, gb) : a.Ma ? a.Ma(c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S, ga, la, xa, gb) : a.call(null, c, d, e, f, g, a, k, l, m, p, q, t, C, z, J, S, ga, la, xa, gb)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var ac = function() {
  function a(a, b, c, d, e) {
    b = Zb.l(b, c, d, e);
    c = a.m;
    return a.h ? (d = Vb(b, c + 1), d <= c ? $b(a, d, b) : a.h(b)) : a.apply(a, Ub(b))
  }
  function b(a, b, c, d) {
    b = Zb.c(b, c, d);
    c = a.m;
    return a.h ? (d = Vb(b, c + 1), d <= c ? $b(a, d, b) : a.h(b)) : a.apply(a, Ub(b))
  }
  function c(a, b, c) {
    b = Zb.a(b, c);
    c = a.m;
    if(a.h) {
      var d = Vb(b, c + 1);
      return d <= c ? $b(a, d, b) : a.h(b)
    }
    return a.apply(a, Ub(b))
  }
  function d(a, b) {
    var c = a.m;
    if(a.h) {
      var d = Vb(b, c + 1);
      return d <= c ? $b(a, d, b) : a.h(b)
    }
    return a.apply(a, Ub(b))
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, C) {
      var z = null;
      5 < arguments.length && (z = O(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, z)
    }
    function b(a, c, d, e, f, g) {
      c = P(c, P(d, P(e, P(f, Xb(g)))));
      d = a.m;
      return a.h ? (e = Vb(c, d + 1), e <= d ? $b(a, e, c) : a.h(c)) : a.apply(a, Ub(c))
    }
    a.m = 5;
    a.h = function(a) {
      var c = K(a);
      a = N(a);
      var d = K(a);
      a = N(a);
      var e = K(a);
      a = N(a);
      var f = K(a);
      a = N(a);
      var g = K(a);
      a = L(a);
      return b(c, d, e, f, g, a)
    };
    a.g = b;
    return a
  }(), e = function(e, k, l, m, p, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, p);
      default:
        return f.g(e, k, l, m, p, O(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 5;
  e.h = f.h;
  e.a = d;
  e.c = c;
  e.l = b;
  e.A = a;
  e.g = f.g;
  return e
}();
function bc(a, b) {
  for(;;) {
    if(null == I(b)) {
      return!0
    }
    if(u(a.d ? a.d(K(b)) : a.call(null, K(b)))) {
      var c = a, d = N(b);
      a = c;
      b = d
    }else {
      return w ? !1 : null
    }
  }
}
function cc(a) {
  return a
}
var dc = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
        return p.call(this, b)
      }
      function p(e) {
        return ac.A(a, b, c, d, e)
      }
      e.m = 0;
      e.h = function(a) {
        a = I(a);
        return p(a)
      };
      e.g = p;
      return e
    }()
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b)
      }
      function e(d) {
        return ac.l(a, b, c, d)
      }
      d.m = 0;
      d.h = function(a) {
        a = I(a);
        return e(a)
      };
      d.g = e;
      return d
    }()
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b)
      }
      function d(c) {
        return ac.c(a, b, c)
      }
      c.m = 0;
      c.h = function(a) {
        a = I(a);
        return d(a)
      };
      c.g = d;
      return c
    }()
  }
  var d = null, e = function() {
    function a(c, d, e, f, q) {
      var t = null;
      4 < arguments.length && (t = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, t)
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = O(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c)
        }
        function g(b) {
          return ac.A(a, c, d, e, Yb.a(f, b))
        }
        b.m = 0;
        b.h = function(a) {
          a = I(a);
          return g(a)
        };
        b.g = g;
        return b
      }()
    }
    a.m = 4;
    a.h = function(a) {
      var c = K(a);
      a = N(a);
      var d = K(a);
      a = N(a);
      var e = K(a);
      a = N(a);
      var f = K(a);
      a = L(a);
      return b(c, d, e, f, a)
    };
    a.g = b;
    return a
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.g(d, g, k, l, O(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.h = e.h;
  d.d = function(a) {
    return a
  };
  d.a = c;
  d.c = b;
  d.l = a;
  d.g = e.g;
  return d
}(), ec = function() {
  function a(a, b, c, e) {
    return new W(null, function() {
      var m = I(b), p = I(c), q = I(e);
      return m && p && q ? P(a.c ? a.c(K(m), K(p), K(q)) : a.call(null, K(m), K(p), K(q)), d.l(a, L(m), L(p), L(q))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new W(null, function() {
      var e = I(b), m = I(c);
      return e && m ? P(a.a ? a.a(K(e), K(m)) : a.call(null, K(e), K(m)), d.c(a, L(e), L(m))) : null
    }, null, null)
  }
  function c(a, b) {
    return new W(null, function() {
      var c = I(b);
      if(c) {
        if(T(c)) {
          for(var e = F(c), m = Q(e), p = Pb(m), q = 0;;) {
            if(q < m) {
              var t = a.d ? a.d(A.a(e, q)) : a.call(null, A.a(e, q));
              p.add(t);
              q += 1
            }else {
              break
            }
          }
          return Sb(p.D(), d.a(a, G(c)))
        }
        return P(a.d ? a.d(K(c)) : a.call(null, K(c)), d.a(a, L(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, f, q) {
      var t = null;
      4 < arguments.length && (t = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, t)
    }
    function b(a, c, e, f, g) {
      return d.a(function(b) {
        return ac.a(a, b)
      }, function C(a) {
        return new W(null, function() {
          var b = d.a(I, a);
          return bc(cc, b) ? P(d.a(K, b), C(d.a(L, b))) : null
        }, null, null)
      }(lb.g(g, f, O([e, c], 0))))
    }
    a.m = 4;
    a.h = function(a) {
      var c = K(a);
      a = N(a);
      var d = K(a);
      a = N(a);
      var e = K(a);
      a = N(a);
      var f = K(a);
      a = L(a);
      return b(c, d, e, f, a)
    };
    a.g = b;
    return a
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.g(d, g, k, l, O(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.h = e.h;
  d.a = c;
  d.c = b;
  d.l = a;
  d.g = e.g;
  return d
}(), gc = function fc(b, c) {
  return new W(null, function() {
    var d = I(c);
    if(d) {
      if(T(d)) {
        for(var e = F(d), f = Q(e), g = Pb(f), k = 0;;) {
          if(k < f) {
            if(u(b.d ? b.d(A.a(e, k)) : b.call(null, A.a(e, k)))) {
              var l = A.a(e, k);
              g.add(l)
            }
            k += 1
          }else {
            break
          }
        }
        return Sb(g.D(), fc(b, G(d)))
      }
      e = K(d);
      d = L(d);
      return u(b.d ? b.d(e) : b.call(null, e)) ? P(e, fc(b, d)) : fc(b, d)
    }
    return null
  }, null, null)
}, hc = function() {
  function a(a, b, c) {
    var g = wb;
    for(b = I(b);;) {
      if(b) {
        var k = a;
        if(k ? k.f & 256 || k.Ua || (k.f ? 0 : v(na, k)) : v(na, k)) {
          a = R.c(a, K(b), g);
          if(g === a) {
            return c
          }
          b = N(b)
        }else {
          return c
        }
      }else {
        return a
      }
    }
  }
  function b(a, b) {
    return c.c(a, b, null)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), jc = function ic(b, c, d) {
  var e = nb.c(c, 0, null), f;
  a: {
    f = 1;
    for(c = I(c);;) {
      if(c && 0 < f) {
        f -= 1, c = N(c)
      }else {
        f = c;
        break a
      }
    }
    f = void 0
  }
  return u(f) ? pb.c(b, e, ic(R.a(b, e), f, d)) : pb.c(b, e, d)
};
function kc(a, b) {
  this.n = a;
  this.b = b
}
function lc(a) {
  a = a.e;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function mc(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new kc(a, Array(32));
    d.b[0] = c;
    c = d;
    b -= 5
  }
}
var oc = function nc(b, c, d, e) {
  var f = new kc(d.n, d.b.slice()), g = b.e - 1 >>> c & 31;
  5 === c ? f.b[g] = e : (d = d.b[g], b = null != d ? nc(b, c - 5, d, e) : mc(null, c - 5, e), f.b[g] = b);
  return f
};
function pc(a, b) {
  throw Error([y("No item "), y(a), y(" in vector of length "), y(b)].join(""));
}
function qc(a, b) {
  if(0 <= b && b < a.e) {
    if(b >= lc(a)) {
      return a.J
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.b[b >>> d & 31], d = e
      }else {
        return c.b
      }
    }
  }else {
    return pc(b, a.e)
  }
}
var sc = function rc(b, c, d, e, f) {
  var g = new kc(d.n, d.b.slice());
  if(0 === c) {
    g.b[e & 31] = f
  }else {
    var k = e >>> c & 31;
    b = rc(b, c - 5, d.b[k], e, f);
    g.b[k] = b
  }
  return g
};
function tc(a, b, c, d, e, f) {
  this.k = a;
  this.e = b;
  this.shift = c;
  this.root = d;
  this.J = e;
  this.j = f;
  this.o = 4;
  this.f = 167668511
}
r = tc.prototype;
r.va = function() {
  return new uc(this.e, this.shift, vc.d ? vc.d(this.root) : vc.call(null, this.root), wc.d ? wc.d(this.J) : wc.call(null, this.J))
};
r.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ib(this)
};
r.K = function(a, b) {
  return A.c(this, b, null)
};
r.L = function(a, b, c) {
  return A.c(this, b, c)
};
r.qa = function(a, b, c) {
  if(0 <= b && b < this.e) {
    return lc(this) <= b ? (a = this.J.slice(), a[b & 31] = c, new tc(this.k, this.e, this.shift, this.root, a, null)) : new tc(this.k, this.e, this.shift, sc(this, this.shift, this.root, b, c), this.J, null)
  }
  if(b === this.e) {
    return ja(this, c)
  }
  if(w) {
    throw Error([y("Index "), y(b), y(" out of bounds  [0,"), y(this.e), y("]")].join(""));
  }
  return null
};
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.s(null, c);
      case 3:
        return this.S(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
r.d = function(a) {
  return this.s(null, a)
};
r.a = function(a, b) {
  return this.S(null, a, b)
};
r.B = function(a, b) {
  if(32 > this.e - lc(this)) {
    var c = this.J.slice();
    c.push(b);
    return new tc(this.k, this.e + 1, this.shift, this.root, c, null)
  }
  var d = this.e >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new kc(null, Array(32));
    d.b[0] = this.root;
    var e = mc(null, this.shift, new kc(null, this.J));
    d.b[1] = e
  }else {
    d = oc(this, this.shift, this.root, new kc(null, this.J))
  }
  return new tc(this.k, this.e + 1, c, d, [b], null)
};
r.Va = function() {
  return A.a(this, 0)
};
r.Wa = function() {
  return A.a(this, 1)
};
r.toString = function() {
  return Ua(this)
};
r.M = function(a, b) {
  return db.a(this, b)
};
r.N = function(a, b, c) {
  return db.c(this, b, c)
};
r.C = function() {
  return 0 === this.e ? null : 32 > this.e ? O.d(this.J) : w ? X.c ? X.c(this, 0, 0) : X.call(null, this, 0, 0) : null
};
r.F = h("e");
r.Pa = function(a, b, c) {
  return pa(this, b, c)
};
r.r = function(a, b) {
  return jb(this, b)
};
r.I = function(a, b) {
  return new tc(b, this.e, this.shift, this.root, this.J, this.j)
};
r.G = h("k");
r.s = function(a, b) {
  return qc(this, b)[b & 31]
};
r.S = function(a, b, c) {
  return 0 <= b && b < this.e ? A.a(this, b) : c
};
var xc = new kc(null, Array(32)), yc = new tc(null, 0, 5, xc, [], 0);
function Y(a) {
  var b = a.length;
  if(32 > b) {
    return new tc(null, b, 5, xc, a, null)
  }
  for(var c = a.slice(0, 32), d = 32, e = Ma(new tc(null, 32, 5, xc, c, null));;) {
    if(d < b) {
      c = d + 1, e = Na(e, a[d]), d = c
    }else {
      return Oa(e)
    }
  }
}
function zc(a) {
  return Oa(Cb.c(Na, Ma(yc), a))
}
function Ac(a, b, c, d, e, f) {
  this.w = a;
  this.U = b;
  this.i = c;
  this.q = d;
  this.k = e;
  this.j = f;
  this.f = 32243948;
  this.o = 1536
}
r = Ac.prototype;
r.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ib(this)
};
r.Y = function() {
  if(this.q + 1 < this.U.length) {
    var a = X.l ? X.l(this.w, this.U, this.i, this.q + 1) : X.call(null, this.w, this.U, this.i, this.q + 1);
    return null == a ? null : a
  }
  return Sa(this)
};
r.B = function(a, b) {
  return P(b, this)
};
r.toString = function() {
  return Ua(this)
};
r.M = function(a, b) {
  return db.a(Bc.c ? Bc.c(this.w, this.i + this.q, Q(this.w)) : Bc.call(null, this.w, this.i + this.q, Q(this.w)), b)
};
r.N = function(a, b, c) {
  return db.c(Bc.c ? Bc.c(this.w, this.i + this.q, Q(this.w)) : Bc.call(null, this.w, this.i + this.q, Q(this.w)), b, c)
};
r.C = function() {
  return this
};
r.O = function() {
  return this.U[this.q]
};
r.P = function() {
  if(this.q + 1 < this.U.length) {
    var a = X.l ? X.l(this.w, this.U, this.i, this.q + 1) : X.call(null, this.w, this.U, this.i, this.q + 1);
    return null == a ? M : a
  }
  return G(this)
};
r.za = function() {
  var a = this.U.length, a = this.i + a < ia(this.w) ? X.c ? X.c(this.w, this.i + a, 0) : X.call(null, this.w, this.i + a, 0) : null;
  return null == a ? null : a
};
r.r = function(a, b) {
  return jb(this, b)
};
r.I = function(a, b) {
  return X.A ? X.A(this.w, this.U, this.i, this.q, b) : X.call(null, this.w, this.U, this.i, this.q, b)
};
r.Aa = function() {
  return Qb.a(this.U, this.q)
};
r.Ba = function() {
  var a = this.U.length, a = this.i + a < ia(this.w) ? X.c ? X.c(this.w, this.i + a, 0) : X.call(null, this.w, this.i + a, 0) : null;
  return null == a ? M : a
};
var X = function() {
  function a(a, b, c, d, l) {
    return new Ac(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new Ac(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new Ac(a, qc(a, b), b, c, null, null)
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.l = b;
  d.A = a;
  return d
}();
function Cc(a, b, c, d, e) {
  this.k = a;
  this.$ = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.o = 0;
  this.f = 32400159
}
r = Cc.prototype;
r.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ib(this)
};
r.K = function(a, b) {
  return A.c(this, b, null)
};
r.L = function(a, b, c) {
  return A.c(this, b, c)
};
r.qa = function(a, b, c) {
  var d = this, e = d.start + b;
  return Dc.A ? Dc.A(d.k, pb.c(d.$, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : Dc.call(null, d.k, pb.c(d.$, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.s(null, c);
      case 3:
        return this.S(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
r.d = function(a) {
  return this.s(null, a)
};
r.a = function(a, b) {
  return this.S(null, a, b)
};
r.B = function(a, b) {
  return Dc.A ? Dc.A(this.k, va(this.$, this.end, b), this.start, this.end + 1, null) : Dc.call(null, this.k, va(this.$, this.end, b), this.start, this.end + 1, null)
};
r.toString = function() {
  return Ua(this)
};
r.M = function(a, b) {
  return db.a(this, b)
};
r.N = function(a, b, c) {
  return db.c(this, b, c)
};
r.C = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : P(A.a(a.$, d), new W(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
r.F = function() {
  return this.end - this.start
};
r.Pa = function(a, b, c) {
  return pa(this, b, c)
};
r.r = function(a, b) {
  return jb(this, b)
};
r.I = function(a, b) {
  return Dc.A ? Dc.A(b, this.$, this.start, this.end, this.j) : Dc.call(null, b, this.$, this.start, this.end, this.j)
};
r.G = h("k");
r.s = function(a, b) {
  return 0 > b || this.end <= this.start + b ? pc(b, this.end - this.start) : A.a(this.$, this.start + b)
};
r.S = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : A.c(this.$, this.start + b, c)
};
function Dc(a, b, c, d, e) {
  for(;;) {
    if(b instanceof Cc) {
      c = b.start + c, d = b.start + d, b = b.$
    }else {
      var f = Q(b);
      if(0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Cc(a, b, c, d, e)
    }
  }
}
var Bc = function() {
  function a(a, b, c) {
    return Dc(null, a, b, c, null)
  }
  function b(a, b) {
    return c.c(a, b, Q(a))
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function vc(a) {
  return new kc({}, a.b.slice())
}
function wc(a) {
  var b = Array(32);
  vb(a, 0, b, 0, a.length);
  return b
}
var Fc = function Ec(b, c, d, e) {
  d = b.root.n === d.n ? d : new kc(b.root.n, d.b.slice());
  var f = b.e - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var g = d.b[f];
    b = null != g ? Ec(b, c - 5, g, e) : mc(b.root.n, c - 5, e)
  }
  d.b[f] = b;
  return d
};
function uc(a, b, c, d) {
  this.e = a;
  this.shift = b;
  this.root = c;
  this.J = d;
  this.f = 275;
  this.o = 88
}
r = uc.prototype;
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
r.d = function(a) {
  return this.K(null, a)
};
r.a = function(a, b) {
  return this.L(null, a, b)
};
r.K = function(a, b) {
  return A.c(this, b, null)
};
r.L = function(a, b, c) {
  return A.c(this, b, c)
};
r.s = function(a, b) {
  if(this.root.n) {
    return qc(this, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
r.S = function(a, b, c) {
  return 0 <= b && b < this.e ? A.a(this, b) : c
};
r.F = function() {
  if(this.root.n) {
    return this.e
  }
  throw Error("count after persistent!");
};
r.Xa = function(a, b, c) {
  var d = this;
  if(d.root.n) {
    if(0 <= b && b < d.e) {
      return lc(this) <= b ? d.J[b & 31] = c : (a = function f(a, k) {
        var l = d.root.n === k.n ? k : new kc(d.root.n, k.b.slice());
        if(0 === a) {
          l.b[b & 31] = c
        }else {
          var m = b >>> a & 31, p = f(a - 5, l.b[m]);
          l.b[m] = p
        }
        return l
      }.call(null, d.shift, d.root), d.root = a), this
    }
    if(b === d.e) {
      return Na(this, c)
    }
    if(w) {
      throw Error([y("Index "), y(b), y(" out of bounds for TransientVector of length"), y(d.e)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
};
r.sa = function(a, b, c) {
  return Qa(this, b, c)
};
r.wa = function(a, b) {
  if(this.root.n) {
    if(32 > this.e - lc(this)) {
      this.J[this.e & 31] = b
    }else {
      var c = new kc(this.root.n, this.J), d = Array(32);
      d[0] = b;
      this.J = d;
      if(this.e >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = mc(this.root.n, this.shift, c);
        this.root = new kc(this.root.n, d);
        this.shift = e
      }else {
        this.root = Fc(this, this.shift, this.root, c)
      }
    }
    this.e += 1;
    return this
  }
  throw Error("conj! after persistent!");
};
r.xa = function() {
  if(this.root.n) {
    this.root.n = null;
    var a = this.e - lc(this), b = Array(a);
    vb(this.J, 0, b, 0, a);
    return new tc(null, this.e, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function Gc() {
  this.o = 0;
  this.f = 2097152
}
Gc.prototype.r = n(!1);
var Hc = new Gc;
function Ic(a, b) {
  return zb((null == b ? 0 : b ? b.f & 1024 || b.pb || (b.f ? 0 : v(qa, b)) : v(qa, b)) ? Q(a) === Q(b) ? bc(cc, ec.a(function(a) {
    return cb.a(R.c(b, K(a), Hc), K(N(a)))
  }, a)) : null : null)
}
function Jc(a, b) {
  var c = a.b;
  if(b instanceof V) {
    a: {
      for(var d = c.length, e = b.fa, f = 0;;) {
        if(d <= f) {
          c = -1;
          break a
        }
        var g = c[f];
        if(g instanceof V && e === g.fa) {
          c = f;
          break a
        }
        if(w) {
          f += 2
        }else {
          c = null;
          break a
        }
      }
      c = void 0
    }
  }else {
    if("string" == typeof b || "number" === typeof b) {
      a: {
        d = c.length;
        for(e = 0;;) {
          if(d <= e) {
            c = -1;
            break a
          }
          if(b === c[e]) {
            c = e;
            break a
          }
          if(w) {
            e += 2
          }else {
            c = null;
            break a
          }
        }
        c = void 0
      }
    }else {
      if(b instanceof $a) {
        a: {
          d = c.length;
          e = b.ja;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            g = c[f];
            if(g instanceof $a && e === g.ja) {
              c = f;
              break a
            }
            if(w) {
              f += 2
            }else {
              c = null;
              break a
            }
          }
          c = void 0
        }
      }else {
        if(null == b) {
          a: {
            d = c.length;
            for(e = 0;;) {
              if(d <= e) {
                c = -1;
                break a
              }
              if(null == c[e]) {
                c = e;
                break a
              }
              if(w) {
                e += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          if(w) {
            a: {
              d = c.length;
              for(e = 0;;) {
                if(d <= e) {
                  c = -1;
                  break a
                }
                if(cb.a(b, c[e])) {
                  c = e;
                  break a
                }
                if(w) {
                  e += 2
                }else {
                  c = null;
                  break a
                }
              }
              c = void 0
            }
          }else {
            c = null
          }
        }
      }
    }
  }
  return c
}
function Kc(a, b, c) {
  this.b = a;
  this.i = b;
  this.oa = c;
  this.o = 0;
  this.f = 32374990
}
r = Kc.prototype;
r.v = function() {
  return ib(this)
};
r.Y = function() {
  return this.i < this.b.length - 2 ? new Kc(this.b, this.i + 2, this.oa) : null
};
r.B = function(a, b) {
  return P(b, this)
};
r.toString = function() {
  return Ua(this)
};
r.M = function(a, b) {
  return U.a(b, this)
};
r.N = function(a, b, c) {
  return U.c(b, c, this)
};
r.C = function() {
  return this
};
r.F = function() {
  return(this.b.length - this.i) / 2
};
r.O = function() {
  return Y([this.b[this.i], this.b[this.i + 1]])
};
r.P = function() {
  return this.i < this.b.length - 2 ? new Kc(this.b, this.i + 2, this.oa) : M
};
r.r = function(a, b) {
  return jb(this, b)
};
r.I = function(a, b) {
  return new Kc(this.b, this.i, b)
};
r.G = h("oa");
function Lc(a, b, c, d) {
  this.k = a;
  this.e = b;
  this.b = c;
  this.j = d;
  this.o = 4;
  this.f = 16123663
}
r = Lc.prototype;
r.va = function() {
  return new Mc({}, this.b.length, this.b.slice())
};
r.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Fb(this)
};
r.K = function(a, b) {
  return oa.c(this, b, null)
};
r.L = function(a, b, c) {
  a = Jc(this, b);
  return-1 === a ? c : this.b[a + 1]
};
r.qa = function(a, b, c) {
  a = Jc(this, b);
  if(-1 === a) {
    if(this.e < Nc) {
      a = this.b;
      for(var d = a.length, e = Array(d + 2), f = 0;;) {
        if(f < d) {
          e[f] = a[f], f += 1
        }else {
          break
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new Lc(this.k, this.e + 1, e, null)
    }
    a = Aa;
    d = pa;
    e = Oc;
    null != e ? e && (e.o & 4 || e.nb) ? (e = Cb.c(Na, Ma(e), this), e = Oa(e)) : e = Cb.c(ja, e, this) : e = Cb.c(lb, M, this);
    return a(d(e, b, c), this.k)
  }
  return c === this.b[a + 1] ? this : w ? (b = this.b.slice(), b[a + 1] = c, new Lc(this.k, this.e, b, null)) : null
};
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
r.d = function(a) {
  return this.K(null, a)
};
r.a = function(a, b) {
  return this.L(null, a, b)
};
r.B = function(a, b) {
  return ub(b) ? pa(this, A.a(b, 0), A.a(b, 1)) : Cb.c(ja, this, b)
};
r.toString = function() {
  return Ua(this)
};
r.C = function() {
  return 0 <= this.b.length - 2 ? new Kc(this.b, 0, null) : null
};
r.F = h("e");
r.r = function(a, b) {
  return Ic(this, b)
};
r.I = function(a, b) {
  return new Lc(b, this.e, this.b, this.j)
};
r.G = h("k");
var Nc = 8;
function Va(a) {
  return new Lc(null, a.length / 2, a, null)
}
function Mc(a, b, c) {
  this.la = a;
  this.ca = b;
  this.b = c;
  this.o = 56;
  this.f = 258
}
r = Mc.prototype;
r.sa = function(a, b, c) {
  if(u(this.la)) {
    a = Jc(this, b);
    if(-1 === a) {
      if(this.ca + 2 <= 2 * Nc) {
        return this.ca += 2, this.b.push(b), this.b.push(c), this
      }
      a = Pc.a ? Pc.a(this.ca, this.b) : Pc.call(null, this.ca, this.b);
      return Pa(a, b, c)
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this
  }
  throw Error("assoc! after persistent!");
};
r.wa = function(a, b) {
  if(u(this.la)) {
    if(b ? b.f & 2048 || b.bb || (b.f ? 0 : v(ra, b)) : v(ra, b)) {
      return Pa(this, Gb.d ? Gb.d(b) : Gb.call(null, b), Hb.d ? Hb.d(b) : Hb.call(null, b))
    }
    for(var c = I(b), d = this;;) {
      var e = K(c);
      if(u(e)) {
        c = N(c), d = Pa(d, Gb.d ? Gb.d(e) : Gb.call(null, e), Hb.d ? Hb.d(e) : Hb.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
r.xa = function() {
  if(u(this.la)) {
    return this.la = !1, new Lc(null, Db((this.ca - this.ca % 2) / 2), this.b, null)
  }
  throw Error("persistent! called twice");
};
r.K = function(a, b) {
  return oa.c(this, b, null)
};
r.L = function(a, b, c) {
  if(u(this.la)) {
    return a = Jc(this, b), -1 === a ? c : this.b[a + 1]
  }
  throw Error("lookup after persistent!");
};
r.F = function() {
  if(u(this.la)) {
    return Db((this.ca - this.ca % 2) / 2)
  }
  throw Error("count after persistent!");
};
function Pc(a, b) {
  for(var c = Ma(Oc), d = 0;;) {
    if(d < a) {
      c = Pa(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Qc() {
  this.aa = !1
}
function Rc(a, b) {
  return a === b ? !0 : a === b || a instanceof V && b instanceof V && a.fa === b.fa ? !0 : w ? cb.a(a, b) : null
}
var Sc = function() {
  function a(a, b, c, g, k) {
    a = a.slice();
    a[b] = c;
    a[g] = k;
    return a
  }
  function b(a, b, c) {
    a = a.slice();
    a[b] = c;
    return a
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.A = a;
  return c
}(), Tc = function() {
  function a(a, b, c, g, k, l) {
    a = a.ma(b);
    a.b[c] = g;
    a.b[k] = l;
    return a
  }
  function b(a, b, c, g) {
    a = a.ma(b);
    a.b[c] = g;
    return a
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.ba = a;
  return c
}();
function Uc(a, b, c) {
  this.n = a;
  this.u = b;
  this.b = c
}
r = Uc.prototype;
r.W = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = Eb(this.u & g - 1);
  if(0 === (this.u & g)) {
    var l = Eb(this.u);
    if(2 * l < this.b.length) {
      a = this.ma(a);
      b = a.b;
      f.aa = !0;
      a: {
        for(c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.u |= g;
      return a
    }
    if(16 <= l) {
      k = Array(32);
      k[c >>> b & 31] = Vc.W(a, b + 5, c, d, e, f);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.u >>> d & 1) && (k[d] = null != this.b[e] ? Vc.W(a, b + 5, H(this.b[e]), this.b[e], this.b[e + 1], f) : this.b[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new Wc(a, l + 1, k)
    }
    return w ? (b = Array(2 * (l + 4)), vb(this.b, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, vb(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.aa = !0, a = this.ma(a), a.b = b, a.u |= g, a) : null
  }
  l = this.b[2 * k];
  g = this.b[2 * k + 1];
  return null == l ? (l = g.W(a, b + 5, c, d, e, f), l === g ? this : Tc.l(this, a, 2 * k + 1, l)) : Rc(d, l) ? e === g ? this : Tc.l(this, a, 2 * k + 1, e) : w ? (f.aa = !0, Tc.ba(this, a, 2 * k, null, 2 * k + 1, Xc.ka ? Xc.ka(a, b + 5, l, g, c, d, e) : Xc.call(null, a, b + 5, l, g, c, d, e))) : null
};
r.ua = function() {
  return Yc.d ? Yc.d(this.b) : Yc.call(null, this.b)
};
r.ma = function(a) {
  if(a === this.n) {
    return this
  }
  var b = Eb(this.u), c = Array(0 > b ? 4 : 2 * (b + 1));
  vb(this.b, 0, c, 0, 2 * b);
  return new Uc(a, this.u, c)
};
r.V = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Eb(this.u & f - 1);
  if(0 === (this.u & f)) {
    var k = Eb(this.u);
    if(16 <= k) {
      g = Array(32);
      g[b >>> a & 31] = Vc.V(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.u >>> c & 1) && (g[c] = null != this.b[d] ? Vc.V(a + 5, H(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Wc(null, k + 1, g)
    }
    a = Array(2 * (k + 1));
    vb(this.b, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    vb(this.b, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.aa = !0;
    return new Uc(null, this.u | f, a)
  }
  k = this.b[2 * g];
  f = this.b[2 * g + 1];
  return null == k ? (k = f.V(a + 5, b, c, d, e), k === f ? this : new Uc(null, this.u, Sc.c(this.b, 2 * g + 1, k))) : Rc(c, k) ? d === f ? this : new Uc(null, this.u, Sc.c(this.b, 2 * g + 1, d)) : w ? (e.aa = !0, new Uc(null, this.u, Sc.A(this.b, 2 * g, null, 2 * g + 1, Xc.ba ? Xc.ba(a + 5, k, f, b, c, d) : Xc.call(null, a + 5, k, f, b, c, d)))) : null
};
r.ha = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.u & e)) {
    return d
  }
  var f = Eb(this.u & e - 1), e = this.b[2 * f], f = this.b[2 * f + 1];
  return null == e ? f.ha(a + 5, b, c, d) : Rc(c, e) ? f : w ? d : null
};
var Vc = new Uc(null, 0, []);
function Wc(a, b, c) {
  this.n = a;
  this.e = b;
  this.b = c
}
r = Wc.prototype;
r.W = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.b[g];
  if(null == k) {
    return a = Tc.l(this, a, g, Vc.W(a, b + 5, c, d, e, f)), a.e += 1, a
  }
  b = k.W(a, b + 5, c, d, e, f);
  return b === k ? this : Tc.l(this, a, g, b)
};
r.ua = function() {
  return Zc.d ? Zc.d(this.b) : Zc.call(null, this.b)
};
r.ma = function(a) {
  return a === this.n ? this : new Wc(a, this.e, this.b.slice())
};
r.V = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.b[f];
  if(null == g) {
    return new Wc(null, this.e + 1, Sc.c(this.b, f, Vc.V(a + 5, b, c, d, e)))
  }
  a = g.V(a + 5, b, c, d, e);
  return a === g ? this : new Wc(null, this.e, Sc.c(this.b, f, a))
};
r.ha = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.ha(a + 5, b, c, d) : d
};
function $c(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(Rc(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function ad(a, b, c, d) {
  this.n = a;
  this.ea = b;
  this.e = c;
  this.b = d
}
r = ad.prototype;
r.W = function(a, b, c, d, e, f) {
  if(c === this.ea) {
    b = $c(this.b, this.e, d);
    if(-1 === b) {
      if(this.b.length > 2 * this.e) {
        return a = Tc.ba(this, a, 2 * this.e, d, 2 * this.e + 1, e), f.aa = !0, a.e += 1, a
      }
      c = this.b.length;
      b = Array(c + 2);
      vb(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.aa = !0;
      f = this.e + 1;
      a === this.n ? (this.b = b, this.e = f, a = this) : a = new ad(this.n, this.ea, f, b);
      return a
    }
    return this.b[b + 1] === e ? this : Tc.l(this, a, b + 1, e)
  }
  return(new Uc(a, 1 << (this.ea >>> b & 31), [null, this, null, null])).W(a, b, c, d, e, f)
};
r.ua = function() {
  return Yc.d ? Yc.d(this.b) : Yc.call(null, this.b)
};
r.ma = function(a) {
  if(a === this.n) {
    return this
  }
  var b = Array(2 * (this.e + 1));
  vb(this.b, 0, b, 0, 2 * this.e);
  return new ad(a, this.ea, this.e, b)
};
r.V = function(a, b, c, d, e) {
  return b === this.ea ? (a = $c(this.b, this.e, c), -1 === a ? (a = 2 * this.e, b = Array(a + 2), vb(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.aa = !0, new ad(null, this.ea, this.e + 1, b)) : cb.a(this.b[a], d) ? this : new ad(null, this.ea, this.e, Sc.c(this.b, a + 1, d))) : (new Uc(null, 1 << (this.ea >>> a & 31), [null, this])).V(a, b, c, d, e)
};
r.ha = function(a, b, c, d) {
  a = $c(this.b, this.e, c);
  return 0 > a ? d : Rc(c, this.b[a]) ? this.b[a + 1] : w ? d : null
};
var Xc = function() {
  function a(a, b, c, g, k, l, m) {
    var p = H(c);
    if(p === k) {
      return new ad(null, p, 2, [c, g, l, m])
    }
    var q = new Qc;
    return Vc.W(a, b, p, c, g, q).W(a, b, k, l, m, q)
  }
  function b(a, b, c, g, k, l) {
    var m = H(b);
    if(m === g) {
      return new ad(null, m, 2, [b, c, k, l])
    }
    var p = new Qc;
    return Vc.V(a, m, b, c, p).V(a, g, k, l, p)
  }
  var c = null, c = function(c, e, f, g, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, k, l);
      case 7:
        return a.call(this, c, e, f, g, k, l, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ba = b;
  c.ka = a;
  return c
}();
function bd(a, b, c, d, e) {
  this.k = a;
  this.X = b;
  this.i = c;
  this.p = d;
  this.j = e;
  this.o = 0;
  this.f = 32374860
}
r = bd.prototype;
r.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ib(this)
};
r.B = function(a, b) {
  return P(b, this)
};
r.toString = function() {
  return Ua(this)
};
r.M = function(a, b) {
  return U.a(b, this)
};
r.N = function(a, b, c) {
  return U.c(b, c, this)
};
r.C = function() {
  return this
};
r.O = function() {
  return null == this.p ? Y([this.X[this.i], this.X[this.i + 1]]) : K(this.p)
};
r.P = function() {
  return null == this.p ? Yc.c ? Yc.c(this.X, this.i + 2, null) : Yc.call(null, this.X, this.i + 2, null) : Yc.c ? Yc.c(this.X, this.i, N(this.p)) : Yc.call(null, this.X, this.i, N(this.p))
};
r.r = function(a, b) {
  return jb(this, b)
};
r.I = function(a, b) {
  return new bd(b, this.X, this.i, this.p, this.j)
};
r.G = h("k");
var Yc = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new bd(null, a, b, null, null)
          }
          var g = a[b + 1];
          if(u(g) && (g = g.ua(), u(g))) {
            return new bd(null, a, b + 2, g, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new bd(null, a, b, c, null)
    }
  }
  function b(a) {
    return c.c(a, 0, null)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.c = a;
  return c
}();
function cd(a, b, c, d, e) {
  this.k = a;
  this.X = b;
  this.i = c;
  this.p = d;
  this.j = e;
  this.o = 0;
  this.f = 32374860
}
r = cd.prototype;
r.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ib(this)
};
r.B = function(a, b) {
  return P(b, this)
};
r.toString = function() {
  return Ua(this)
};
r.M = function(a, b) {
  return U.a(b, this)
};
r.N = function(a, b, c) {
  return U.c(b, c, this)
};
r.C = function() {
  return this
};
r.O = function() {
  return K(this.p)
};
r.P = function() {
  return Zc.l ? Zc.l(null, this.X, this.i, N(this.p)) : Zc.call(null, null, this.X, this.i, N(this.p))
};
r.r = function(a, b) {
  return jb(this, b)
};
r.I = function(a, b) {
  return new cd(b, this.X, this.i, this.p, this.j)
};
r.G = h("k");
var Zc = function() {
  function a(a, b, c, g) {
    if(null == g) {
      for(g = b.length;;) {
        if(c < g) {
          var k = b[c];
          if(u(k) && (k = k.ua(), u(k))) {
            return new cd(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new cd(a, b, c, g, null)
    }
  }
  function b(a) {
    return c.l(null, a, 0, null)
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.l = a;
  return c
}();
function dd(a, b, c, d, e, f) {
  this.k = a;
  this.e = b;
  this.root = c;
  this.Q = d;
  this.T = e;
  this.j = f;
  this.o = 4;
  this.f = 16123663
}
r = dd.prototype;
r.va = function() {
  return new ed({}, this.root, this.e, this.Q, this.T)
};
r.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Fb(this)
};
r.K = function(a, b) {
  return oa.c(this, b, null)
};
r.L = function(a, b, c) {
  return null == b ? this.Q ? this.T : c : null == this.root ? c : w ? this.root.ha(0, H(b), b, c) : null
};
r.qa = function(a, b, c) {
  if(null == b) {
    return this.Q && c === this.T ? this : new dd(this.k, this.Q ? this.e : this.e + 1, this.root, !0, c, null)
  }
  a = new Qc;
  b = (null == this.root ? Vc : this.root).V(0, H(b), b, c, a);
  return b === this.root ? this : new dd(this.k, a.aa ? this.e + 1 : this.e, b, this.Q, this.T, null)
};
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
r.d = function(a) {
  return this.K(null, a)
};
r.a = function(a, b) {
  return this.L(null, a, b)
};
r.B = function(a, b) {
  return ub(b) ? pa(this, A.a(b, 0), A.a(b, 1)) : Cb.c(ja, this, b)
};
r.toString = function() {
  return Ua(this)
};
r.C = function() {
  if(0 < this.e) {
    var a = null != this.root ? this.root.ua() : null;
    return this.Q ? P(Y([null, this.T]), a) : a
  }
  return null
};
r.F = h("e");
r.r = function(a, b) {
  return Ic(this, b)
};
r.I = function(a, b) {
  return new dd(b, this.e, this.root, this.Q, this.T, this.j)
};
r.G = h("k");
var Oc = new dd(null, 0, null, !1, null, 0);
function ob(a, b) {
  for(var c = a.length, d = 0, e = Ma(Oc);;) {
    if(d < c) {
      var f = d + 1, e = e.sa(null, a[d], b[d]), d = f
    }else {
      return Oa(e)
    }
  }
}
function ed(a, b, c, d, e) {
  this.n = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.T = e;
  this.o = 56;
  this.f = 258
}
r = ed.prototype;
r.sa = function(a, b, c) {
  return fd(this, b, c)
};
r.wa = function(a, b) {
  var c;
  a: {
    if(this.n) {
      if(b ? b.f & 2048 || b.bb || (b.f ? 0 : v(ra, b)) : v(ra, b)) {
        c = fd(this, Gb.d ? Gb.d(b) : Gb.call(null, b), Hb.d ? Hb.d(b) : Hb.call(null, b));
        break a
      }
      c = I(b);
      for(var d = this;;) {
        var e = K(c);
        if(u(e)) {
          c = N(c), d = fd(d, Gb.d ? Gb.d(e) : Gb.call(null, e), Hb.d ? Hb.d(e) : Hb.call(null, e))
        }else {
          c = d;
          break a
        }
      }
    }else {
      throw Error("conj! after persistent");
    }
    c = void 0
  }
  return c
};
r.xa = function() {
  var a;
  if(this.n) {
    this.n = null, a = new dd(null, this.count, this.root, this.Q, this.T, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
r.K = function(a, b) {
  return null == b ? this.Q ? this.T : null : null == this.root ? null : this.root.ha(0, H(b), b)
};
r.L = function(a, b, c) {
  return null == b ? this.Q ? this.T : c : null == this.root ? c : this.root.ha(0, H(b), b, c)
};
r.F = function() {
  if(this.n) {
    return this.count
  }
  throw Error("count after persistent!");
};
function fd(a, b, c) {
  if(a.n) {
    if(null == b) {
      a.T !== c && (a.T = c), a.Q || (a.count += 1, a.Q = !0)
    }else {
      var d = new Qc;
      b = (null == a.root ? Vc : a.root).W(a.n, 0, H(b), b, c, d);
      b !== a.root && (a.root = b);
      d.aa && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var gd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = I(a), e = Ma(Oc);;) {
      if(b) {
        a = N(N(b));
        var f = K(b), b = K(N(b)), e = Pa(e, f, b), b = a
      }else {
        return Oa(e)
      }
    }
  }
  a.m = 0;
  a.h = function(a) {
    a = I(a);
    return b(a)
  };
  a.g = b;
  return a
}();
function Gb(a) {
  return sa(a)
}
function Hb(a) {
  return ta(a)
}
function hd(a, b, c, d, e) {
  this.k = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.j = e;
  this.o = 0;
  this.f = 32375006
}
r = hd.prototype;
r.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ib(this)
};
r.Y = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new hd(this.k, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new hd(this.k, this.start + this.step, this.end, this.step, null) : null
};
r.B = function(a, b) {
  return P(b, this)
};
r.toString = function() {
  return Ua(this)
};
r.M = function(a, b) {
  return db.a(this, b)
};
r.N = function(a, b, c) {
  return db.c(this, b, c)
};
r.C = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null
};
r.F = function() {
  var a = Ga(this);
  return u(a) ? Math.ceil((this.end - this.start) / this.step) : 0
};
r.O = h("start");
r.P = function() {
  return null != Ga(this) ? new hd(this.k, this.start + this.step, this.end, this.step, null) : M
};
r.r = function(a, b) {
  return jb(this, b)
};
r.I = function(a, b) {
  return new hd(b, this.start, this.end, this.step, this.j)
};
r.G = h("k");
r.s = function(a, b) {
  if(b < ia(this)) {
    return this.start + b * this.step
  }
  if(this.start > this.end && 0 === this.step) {
    return this.start
  }
  throw Error("Index out of bounds");
};
r.S = function(a, b, c) {
  return b < ia(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c
};
var id = function() {
  function a(a, b, c) {
    return new hd(null, a, b, c, null)
  }
  function b(a, b) {
    return e.c(a, b, 1)
  }
  function c(a) {
    return e.c(0, a, 1)
  }
  function d() {
    return e.c(0, Number.MAX_VALUE, 1)
  }
  var e = null, e = function(e, g, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, g);
      case 3:
        return a.call(this, e, g, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.R = d;
  e.d = c;
  e.a = b;
  e.c = a;
  return e
}();
function Z(a, b, c, d, e, f, g) {
  E(a, c);
  I(g) && (b.c ? b.c(K(g), a, f) : b.call(null, K(g), a, f));
  c = I(N(g));
  g = null;
  for(var k = 0, l = 0;;) {
    if(l < k) {
      var m = g.s(null, l);
      E(a, d);
      b.c ? b.c(m, a, f) : b.call(null, m, a, f);
      l += 1
    }else {
      if(c = I(c)) {
        g = c, T(g) ? (c = F(g), l = G(g), g = c, k = Q(c), c = l) : (c = K(g), E(a, d), b.c ? b.c(c, a, f) : b.call(null, c, a, f), c = N(g), g = null, k = 0), l = 0
      }else {
        break
      }
    }
  }
  return E(a, e)
}
var jd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = O(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = I(b), f = null, g = 0, k = 0;;) {
      if(k < g) {
        var l = f.s(null, k);
        E(a, l);
        k += 1
      }else {
        if(e = I(e)) {
          f = e, T(f) ? (e = F(f), g = G(f), f = e, l = Q(e), e = g, g = l) : (l = K(f), E(a, l), e = N(f), f = null, g = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.m = 1;
  a.h = function(a) {
    var d = K(a);
    a = L(a);
    return b(d, a)
  };
  a.g = b;
  return a
}(), kd = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function ld(a) {
  return[y('"'), y(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return kd[a]
  })), y('"')].join("")
}
var $ = function md(b, c, d) {
  if(null == b) {
    return E(c, "nil")
  }
  if(void 0 === b) {
    return E(c, "#\x3cundefined\x3e")
  }
  if(w) {
    u(function() {
      var c = R.a(d, Ya);
      return u(c) ? (c = b ? b.f & 131072 || b.cb ? !0 : b.f ? !1 : v(ya, b) : v(ya, b)) ? rb(b) : c : c
    }()) && (E(c, "^"), md(rb(b), c, d), E(c, " "));
    if(null == b) {
      return E(c, "nil")
    }
    if(b.hb) {
      return b.ub(c)
    }
    if(b && (b.f & 2147483648 || b.H)) {
      return b.t(null, c, d)
    }
    if(da(b) === Boolean || "number" === typeof b) {
      return E(c, "" + y(b))
    }
    if(b instanceof Array) {
      return Z(c, md, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if("string" == typeof b) {
      return u(Xa.d(d)) ? E(c, ld(b)) : E(c, b)
    }
    if(qb(b)) {
      return jd.g(c, O(["#\x3c", "" + y(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + y(b);;) {
          if(Q(d) < c) {
            d = [y("0"), y(d)].join("")
          }else {
            return d
          }
        }
      };
      return jd.g(c, O(['#inst "', "" + y(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return u(b instanceof RegExp) ? jd.g(c, O(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.H || (b.f ? 0 : v(Ja, b)) : v(Ja, b)) ? Ka(b, c, d) : w ? jd.g(c, O(["#\x3c", "" + y(b), "\x3e"], 0)) : null
  }
  return null
}, nd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = Va([Wa, !0, Xa, !0, Ya, !1, Za, !1]), e;
    (e = null == a) || (e = I(a), e = u(e) ? !1 : !0);
    if(e) {
      b = ""
    }else {
      e = y;
      var f = new ca, g = new Ta(f);
      a: {
        $(K(a), g, b);
        a = I(N(a));
        for(var k = null, l = 0, m = 0;;) {
          if(m < l) {
            var p = k.s(null, m);
            E(g, " ");
            $(p, g, b);
            m += 1
          }else {
            if(a = I(a)) {
              k = a, T(k) ? (a = F(k), l = G(k), k = a, p = Q(a), a = l, l = p) : (p = K(k), E(g, " "), $(p, g, b), a = N(k), k = null, l = 0), m = 0
            }else {
              break a
            }
          }
        }
      }
      Ia(g);
      b = "" + e(f)
    }
    return b
  }
  a.m = 0;
  a.h = function(a) {
    a = I(a);
    return b(a)
  };
  a.g = b;
  return a
}();
bb.prototype.H = !0;
bb.prototype.t = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, this)
};
Cc.prototype.H = !0;
Cc.prototype.t = function(a, b, c) {
  return Z(b, $, "[", " ", "]", c, this)
};
Rb.prototype.H = !0;
Rb.prototype.t = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, this)
};
Lc.prototype.H = !0;
Lc.prototype.t = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
W.prototype.H = !0;
W.prototype.t = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, this)
};
bd.prototype.H = !0;
bd.prototype.t = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, this)
};
Ac.prototype.H = !0;
Ac.prototype.t = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, this)
};
dd.prototype.H = !0;
dd.prototype.t = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
tc.prototype.H = !0;
tc.prototype.t = function(a, b, c) {
  return Z(b, $, "[", " ", "]", c, this)
};
Ib.prototype.H = !0;
Ib.prototype.t = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, this)
};
Kc.prototype.H = !0;
Kc.prototype.t = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, this)
};
Jb.prototype.H = !0;
Jb.prototype.t = function(a, b) {
  return E(b, "()")
};
Lb.prototype.H = !0;
Lb.prototype.t = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, this)
};
hd.prototype.H = !0;
hd.prototype.t = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, this)
};
cd.prototype.H = !0;
cd.prototype.t = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, this)
};
tc.prototype.Ra = !0;
tc.prototype.Sa = function(a, b) {
  return Bb.a(this, b)
};
Cc.prototype.Ra = !0;
Cc.prototype.Sa = function(a, b) {
  return Bb.a(this, b)
};
function od(a, b, c, d) {
  this.state = a;
  this.k = b;
  this.jb = c;
  this.kb = d;
  this.f = 2153938944;
  this.o = 2
}
r = od.prototype;
r.v = function() {
  return this[aa] || (this[aa] = ++ba)
};
r.Ya = function(a, b, c) {
  a = I(this.kb);
  for(var d = null, e = 0, f = 0;;) {
    if(f < e) {
      var g = d.s(null, f), k = nb.c(g, 0, null), g = nb.c(g, 1, null);
      g.l ? g.l(k, this, b, c) : g.call(null, k, this, b, c);
      f += 1
    }else {
      if(a = I(a)) {
        T(a) ? (d = F(a), a = G(a), k = d, e = Q(d), d = k) : (d = K(a), k = nb.c(d, 0, null), g = nb.c(d, 1, null), g.l ? g.l(k, this, b, c) : g.call(null, k, this, b, c), a = N(a), d = null, e = 0), f = 0
      }else {
        return null
      }
    }
  }
};
r.t = function(a, b, c) {
  E(b, "#\x3cAtom: ");
  $(this.state, b, c);
  return E(b, "\x3e")
};
r.G = h("k");
r.ab = h("state");
r.r = function(a, b) {
  return this === b
};
var qd = function() {
  function a(a) {
    return new od(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = yb(c) ? ac.a(gd, c) : c, e = R.a(d, pd), d = R.a(d, Ya);
      return new od(a, d, e, null)
    }
    a.m = 1;
    a.h = function(a) {
      var c = K(a);
      a = L(a);
      return b(c, a)
    };
    a.g = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, O(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.h = c.h;
  b.d = a;
  b.g = c.g;
  return b
}();
function rd(a, b) {
  var c = a.jb;
  if(u(c) && !u(c.d ? c.d(b) : c.call(null, b))) {
    throw Error([y("Assert failed: "), y("Validator rejected reference state"), y("\n"), y(nd.g(O([Kb(new $a(null, "validate", "validate", 1233162959, null), new $a(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  La(a, c, b);
  return b
}
var sd = function() {
  function a(a, b, c, d, e) {
    return rd(a, b.l ? b.l(a.state, c, d, e) : b.call(null, a.state, c, d, e))
  }
  function b(a, b, c, d) {
    return rd(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d))
  }
  function c(a, b, c) {
    return rd(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c))
  }
  function d(a, b) {
    return rd(a, b.d ? b.d(a.state) : b.call(null, a.state))
  }
  var e = null, f = function() {
    function a(c, d, e, g, f, C) {
      var z = null;
      5 < arguments.length && (z = O(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, f, z)
    }
    function b(a, c, d, e, g, f) {
      return rd(a, ac.g(c, a.state, d, e, g, O([f], 0)))
    }
    a.m = 5;
    a.h = function(a) {
      var c = K(a);
      a = N(a);
      var d = K(a);
      a = N(a);
      var e = K(a);
      a = N(a);
      var g = K(a);
      a = N(a);
      var f = K(a);
      a = L(a);
      return b(c, d, e, g, f, a)
    };
    a.g = b;
    return a
  }(), e = function(e, k, l, m, p, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, p);
      default:
        return f.g(e, k, l, m, p, O(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 5;
  e.h = f.h;
  e.a = d;
  e.c = c;
  e.l = b;
  e.A = a;
  e.g = f.g;
  return e
}();
var Za = new V(null, "dup", "dup"), td = new V(null, "cell-height", "cell-height"), Wa = new V(null, "flush-on-newline", "flush-on-newline"), ud = new V(null, "rows", "rows"), vd = new V(null, "y-pixels", "y-pixels"), w = new V(null, "else", "else"), Xa = new V(null, "readably", "readably"), pd = new V(null, "validator", "validator"), Ya = new V(null, "meta", "meta"), wd = new V(null, "x-pixels", "x-pixels"), xd = new V(null, "cell-width", "cell-width"), yd = new V(null, "cols", "cols");
function zd(a, b) {
  return zc(function() {
    return function d(a) {
      return new W(null, function() {
        for(;;) {
          var f = I(a);
          if(f) {
            var g = f;
            if(T(g)) {
              var k = F(g), l = Q(k), m = Pb(l);
              return function() {
                for(var a = 0;;) {
                  if(a < l) {
                    var d = A.a(k, a);
                    Tb(m, zc(function() {
                      return function(a, b, d, e, f, g, k) {
                        return function gb(l) {
                          return new W(null, function() {
                            return function() {
                              for(;;) {
                                var a = I(l);
                                if(a) {
                                  if(T(a)) {
                                    var b = F(a), d = Q(b), e = Pb(d);
                                    a: {
                                      for(var f = 0;;) {
                                        if(f < d) {
                                          A.a(b, f), e.add("."), f += 1
                                        }else {
                                          b = !0;
                                          break a
                                        }
                                      }
                                      b = void 0
                                    }
                                    return b ? Sb(e.D(), gb(G(a))) : Sb(e.D(), null)
                                  }
                                  K(a);
                                  return P(".", gb(L(a)))
                                }
                                return null
                              }
                            }
                          }(a, b, d, e, f, g, k), null, null)
                        }
                      }(a, d, k, l, m, g, f)(id.d(b))
                    }()));
                    a += 1
                  }else {
                    return!0
                  }
                }
              }() ? Sb(m.D(), d(G(g))) : Sb(m.D(), null)
            }
            var p = K(g);
            return P(zc(function() {
              return function(a, b, d) {
                return function J(e) {
                  return new W(null, function() {
                    return function() {
                      for(;;) {
                        var a = I(e);
                        if(a) {
                          if(T(a)) {
                            var b = F(a), d = Q(b), f = Pb(d);
                            a: {
                              for(var g = 0;;) {
                                if(g < d) {
                                  A.a(b, g), f.add("."), g += 1
                                }else {
                                  b = !0;
                                  break a
                                }
                              }
                              b = void 0
                            }
                            return b ? Sb(f.D(), J(G(a))) : Sb(f.D(), null)
                          }
                          K(a);
                          return P(".", J(L(a)))
                        }
                        return null
                      }
                    }
                  }(a, b, d), null, null)
                }
              }(p, g, f)(id.d(b))
            }()), d(L(g)))
          }
          return null
        }
      }, null, null)
    }(id.d(a))
  }())
}
function Ad(a, b) {
  return cb.a(hc.a(a, b), "*")
}
function Bd(a) {
  for(var b = Q(a), c = Q(nb.a(a, 0)), d = zd(b, c), e = 0, f = 0;;) {
    var g = hc.a(a, Y([e, f])), k;
    k = a;
    var l = Y([e, f]), m = nb.c(l, 0, null), l = nb.c(l, 1, null);
    k = gc(dc.a(Ad, k), Y([Y([m - 1, l - 1]), Y([m - 1, l]), Y([m - 1, l + 1]), Y([m, l - 1]), Y([m, l + 1]), Y([m + 1, l - 1]), Y([m + 1, l]), Y([m + 1, l + 1])]));
    g = cb.a(g, "*") ? 3 >= Q(k) && 2 <= Q(k) ? "*" : "." : cb.a(3, Q(k)) ? "*" : ".";
    if(cb.a(b, e + 1) && cb.a(c, f + 1)) {
      return jc(d, Y([e, f]), g)
    }
    d = jc(d, Y([e, f]), g);
    e = c > f + 1 ? e : e + 1;
    f = c > f + 1 ? f + 1 : 0
  }
}
;var Cd = document.getElementById("canvas"), Dd = document.getElementById("next-position"), Ed = Cd.getContext("2d"), Fd = qd.d(zd(20, 20));
Cd.addEventListener("click", function(a) {
  var b;
  a: {
    var c = this, d = this.offsetLeft;
    for(b = this.offsetTop;;) {
      if(c = c.offsetParent, u(c)) {
        d += c.offsetLeft, b += c.offsetTop
      }else {
        b = Y([d, b]);
        break a
      }
    }
    b = void 0
  }
  d = nb.c(b, 0, null);
  b = nb.c(b, 1, null);
  d = a.x - d;
  a = a.y - b;
  b = Gd.a ? Gd.a(Cd, wa(Fd)) : Gd.call(null, Cd, wa(Fd));
  c = yb(b) ? ac.a(gd, b) : b;
  b = R.a(c, td);
  c = R.a(c, xd);
  d = d / c | 0;
  a = a / b | 0;
  b = cb.a(hc.a(wa(Fd), Y([d, a])), ".") ? "*" : ".";
  sd.l(Fd, jc, Y([d, a]), b);
  return Hd.a ? Hd.a(Cd, wa(Fd)) : Hd.call(null, Cd, wa(Fd))
}, !1);
Dd.addEventListener("click", function() {
  sd.a(Fd, Bd);
  return Hd.a ? Hd.a(Cd, wa(Fd)) : Hd.call(null, Cd, wa(Fd))
}, !1);
function Id(a, b) {
  a.fillStyle = b;
  return a
}
function Jd(a, b, c, d) {
  Ed.moveTo(a, b);
  Ed.lineTo(c, d);
  Ed.stroke()
}
function Gd(a, b) {
  var c = a.scrollWidth, d = a.scrollHeight, e = Q(b), f = Q(nb.a(b, 0));
  return Va([wd, c, vd, d, ud, e, yd, f, td, d / e, xd, c / f])
}
function Kd(a, b, c, d, e, f) {
  Id(a, f).fillRect(b * d, c * e, b * d + d, c * e + e)
}
function Hd(a, b) {
  var c = Gd(a, b), d = yb(c) ? ac.a(gd, c) : c, e = R.a(d, ud), c = R.a(d, yd), f = R.a(d, td), d = R.a(d, xd);
  Id(Ed, "#FFFFFF").clearRect(0, 0, Cd.scrollWidth, Cd.scrollHeight);
  for(var g = I(id.d(e)), k = null, l = 0, m = 0;;) {
    if(m < l) {
      for(var p = k.s(null, m), q = I(id.d(c)), t = null, C = 0, z = 0;;) {
        if(z < C) {
          var J = t.s(null, z);
          Kd(Ed, p, J, d, f, cb.a(hc.a(b, Y([p, J])), ".") ? "#FFFFFF" : "#888888");
          z += 1
        }else {
          if(q = I(q)) {
            t = q, T(t) ? (q = F(t), z = G(t), t = q, C = Q(q), q = z) : (q = K(t), Kd(Ed, p, q, d, f, cb.a(hc.a(b, Y([p, q])), ".") ? "#FFFFFF" : "#888888"), q = N(t), t = null, C = 0), z = 0
          }else {
            break
          }
        }
      }
      m += 1
    }else {
      if(g = I(g)) {
        if(T(g)) {
          l = F(g), g = G(g), k = l, l = Q(l)
        }else {
          k = K(g);
          l = I(id.d(c));
          m = null;
          for(q = p = 0;;) {
            if(q < p) {
              t = m.s(null, q), Kd(Ed, k, t, d, f, cb.a(hc.a(b, Y([k, t])), ".") ? "#FFFFFF" : "#888888"), q += 1
            }else {
              if(l = I(l)) {
                m = l, T(m) ? (l = F(m), q = G(m), m = l, p = Q(l), l = q) : (l = K(m), Kd(Ed, k, l, d, f, cb.a(hc.a(b, Y([k, l])), ".") ? "#FFFFFF" : "#888888"), l = N(m), m = null, p = 0), q = 0
              }else {
                break
              }
            }
          }
          g = N(g);
          k = null;
          l = 0
        }
        m = 0
      }else {
        break
      }
    }
  }
  a: {
    Id(Ed, "#888888");
    g = I(id.d(c));
    k = null;
    for(m = l = 0;;) {
      if(m < l) {
        p = k.s(null, m), Jd(p * d, 0, p * d, f * e), m += 1
      }else {
        if(g = I(g)) {
          k = g, T(k) ? (g = F(k), m = G(k), k = g, l = Q(g), g = m) : (g = K(k), Jd(g * d, 0, g * d, f * e), g = N(k), k = null, l = 0), m = 0
        }else {
          break
        }
      }
    }
    e = I(id.d(e));
    g = null;
    for(m = l = 0;;) {
      if(m < l) {
        k = g.s(null, m), Jd(0, k * f, d * c, k * f), m += 1
      }else {
        if(e = I(e)) {
          g = e, T(g) ? (e = F(g), l = G(g), g = e, k = Q(e), e = l, l = k) : (k = K(g), Jd(0, k * f, d * c, k * f), e = N(g), g = null, l = 0), m = 0
        }else {
          c = null;
          break a
        }
      }
    }
    c = void 0
  }
  return c
}
Hd(Cd, wa(Fd));

})();
