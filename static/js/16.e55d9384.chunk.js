(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[16],{644:function(e,t,c){},651:function(e,t,c){"use strict";c.r(t);var n=c(114),a=c(17),i=c(4),s=c(100),r=(c(151),c(53)),b=c(607),u=(c(644),c(159)),o=c(602),l=c(47);s[r.DeriEnv.get()].oracle;t.default=Object(u.b)("wallet","indexPrice")(Object(u.c)((function(e){var t=e.wallet,c=e.indexPrice,s=Object(i.useState)({}),r=Object(a.a)(s,2),u=r[0],f=r[1],p=Object(o.a)(t.detail);Object(i.useEffect)((function(){return u.symbol&&c.start(u.symbol),function(){}}),[u.symbol]),Object(i.useEffect)((function(){return p.length>0&&(f(p[0]),c.start(p[0].symbol)),function(){}}),[p]);var j={wallet:t,specs:p,spec:u,onSpecChange:function(e){c.pause(),f(e)},indexPrice:c};return Object(l.jsx)("div",{className:"trade-body",children:Object(l.jsx)(b.a,Object(n.a)({},j))})})))}}]);
//# sourceMappingURL=16.e55d9384.chunk.js.map