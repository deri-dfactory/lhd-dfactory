(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[14],{584:function(e,t,c){},591:function(e,t,c){"use strict";c.r(t);var n=c(91),i=c(15),s=c(3),a=c(590),r=c(556),l=c(535),o=c.n(l),u=c(133),b=(c(584),c(559)),j=c(35);t.default=Object(u.b)("wallet","indexPrice")(Object(u.c)((function(e){var t=e.wallet,c=e.indexPrice,l=Object(s.useState)("lite"),u=Object(i.a)(l,2),d=u[0],f=u[1],p=Object(s.useState)({}),O=Object(i.a)(p,2),h=O[0],m=O[1],x=Object(r.a)(t.detail),v=function(e){f(e),document.querySelector(".desktop").style.minWidth="pro"===e?"1920px":"inherit"},y=o()("trade-body",d);Object(s.useEffect)((function(){return h.symbol&&c.start(h.symbol),function(){}}),[h.symbol]),Object(s.useEffect)((function(){return x.length>0&&(m(x[0]),c.start(x[0].symbol)),function(){}}),[x]);var k={wallet:t,specs:x,spec:h,onSpecChange:function(e){c.pause(),m(e)},indexPrice:c};return Object(j.jsxs)("div",{className:y,children:[Object(j.jsxs)("div",{className:"check-lite-pro",children:[Object(j.jsx)("div",{className:"lite",onClick:function(){return v("lite")},children:"LITE"}),Object(j.jsx)("div",{className:"pro",onClick:function(){return v("pro")},children:" PRO"})]}),"lite"===d?Object(j.jsx)(b.a,Object(n.a)({},k)):Object(j.jsx)(a.default,Object(n.a)({},k))]})})))}}]);
//# sourceMappingURL=14.ce0eb142.chunk.js.map