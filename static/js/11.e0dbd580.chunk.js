(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[11],{545:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var c=t(19),s=t(35);function a(e){var n=e.pool,t="logo ".concat(n.bTokenSymbol),a=Object(c.f)();return Object(s.jsxs)("div",{className:"pool",children:[Object(s.jsx)("div",{className:"pool-header",children:Object(s.jsx)("div",{className:"network",children:n.network})}),Object(s.jsx)("div",{className:"pool-info",children:Object(s.jsxs)("div",{className:"info-center",children:[Object(s.jsxs)("div",{className:"top-info",children:[Object(s.jsx)("div",{className:t}),Object(s.jsxs)("div",{className:"pool-detail",children:[Object(s.jsx)("div",{className:"base-token",children:n.bTokenSymbol}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:"Pool Liq"}),n.liquidity]}),Object(s.jsxs)("div",{className:"apy",children:[Object(s.jsx)("span",{children:"APY"}),Object(s.jsxs)("span",{children:[Object(s.jsx)("span",{children:n.apy}),n.sushiApy&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("span",{children:"+"}),Object(s.jsxs)("span",{children:[" ",n.sushiApy]})]})]})]}),Object(s.jsxs)("div",{className:"pool-address",children:[Object(s.jsx)("span",{children:"Address"}),n.pool]})]})]}),Object(s.jsx)("div",{className:"bottom-btn",children:Object(s.jsx)("button",{onClick:function(){return a.push("/mining/".concat(n.chainId,"/").concat(n.bTokenSymbol,"/").concat(n.address))},children:"STAKING"})})]})})]})}},546:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var c=t(0),s=t.n(c),a=t(1),r=t(15),i=t(3),o=t(44),u=t(80),j=t(134),l=o.a.get(),b=u[l].chainInfo;function d(){var e=Object(i.useState)(!1),n=Object(r.a)(e,2),t=n[0],c=n[1],u=Object(i.useState)([]),d=Object(r.a)(u,2),p=d[0],O=d[1];return Object(i.useEffect)((function(){var e=Object(o.h)(l).map(function(){var e=Object(a.a)(s.a.mark((function e(n){var t,c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.p)(n.chainId,n.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return t=e.t0,e.next=8,Object(o.o)(n.chainId,n.bTokenSymbol);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return c=e.t1,a=n.pool||"",e.abrupt("return",Object.assign(n,{network:b[n.chainId].name,liquidity:Object(j.c)(t.liquidity),apy:c.apy,pool:Object(j.b)(a),address:a}));case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());return Promise.all(e).then((function(e){O(e),c(!0)})),function(){return p.length=0}})),[t,p]}},547:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var c=t(0),s=t.n(c),a=t(1),r=t(15),i=t(3),o=t(44),u=t(134),j=o.a.get();function l(){var e=Object(i.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1];return Object(i.useEffect)((function(){var e=Object(o.r)(j).map(function(){var e=Object(a.a)(s.a.mark((function e(n){var t,c,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.p)(n.chainId,n.pool);case 2:return t=e.sent,e.next=5,Object(o.s)(n.chainId,n.pool);case 5:return c=e.sent,a=(100*(a=.22008070161007/t.liquidity)).toFixed(2)+"%",r="0"==(r=Object(u.a)(c.apy))?"--":(100*r).toFixed(2)+"%",e.abrupt("return",Object.assign(n,{deriapy:r,sushiApy:a,bTokenSymbol:"DERI-USDT SLP"}));case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());return Promise.all(e).then((function(e){c(e)})),function(){t.length=0}}),[]),t}},585:function(e,n,t){},593:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return o}));var c=t(15),s=(t(3),t(585),t(545)),a=t(546),r=t(547),i=t(35);function o(){var e=Object(a.a)(),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(r.a)(),j=o.concat(u);return Object(i.jsx)("div",{className:"mining-info",children:Object(i.jsxs)("div",{className:"pools",children:[j.map((function(e,n){return Object(i.jsx)(s.a,{pool:e},n)})),!t&&Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)("span",{className:"spinner spinner-border spinner-border-sm"})})]})})}}}]);
//# sourceMappingURL=11.e0dbd580.chunk.js.map