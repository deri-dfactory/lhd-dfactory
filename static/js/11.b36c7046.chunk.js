(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[11],{602:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(116),a=n(17),s=n(5),r=n(601),i=n(48);function o(e){var t=Object(s.useState)("--"),n=Object(a.a)(t,2),o=n[0],l=n[1];return Object(s.useEffect)((function(){return(e.value||0===Math.abs(e.value)&&!0===e.allowZero)&&l(Object(i.jsx)(r.a,Object(c.a)(Object(c.a)({},e),{},{displayType:"text"}))),function(){}}),[e.value]),o}},612:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(23),a=(n(601),n(101)),s=n(31),r=n(602),i=n(48),o=a[s.DeriEnv.get()].chainInfo;function l(e){var t=e.pool,n="logo ".concat(t.bTokenSymbol),a=Object(c.g)();return Object(i.jsxs)("div",{className:"pool",children:[Object(i.jsx)("div",{className:"pool-header",children:Object(i.jsx)("div",{className:"network",children:t.network.toUpperCase()})}),Object(i.jsx)("div",{className:"pool-info",children:Object(i.jsxs)("div",{className:"info-center",children:[Object(i.jsxs)("div",{className:"top-info",children:[Object(i.jsx)("div",{className:n}),Object(i.jsxs)("div",{className:"pool-detail",children:[Object(i.jsx)("div",{className:"base-token",children:t.bTokenSymbol}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Pool Liq"}),Object(i.jsx)(r.a,{value:t.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:0})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Symbol"}),t.symbol]}),Object(i.jsxs)("div",{className:"apy",children:[Object(i.jsx)("span",{children:"APY"}),Object(i.jsxs)("span",{children:[Object(i.jsx)("span",{children:Object(i.jsx)(r.a,{value:t.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})}),t.sushiApy&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("span",{children:"+"}),Object(i.jsxs)("span",{children:[" ",Object(i.jsx)(r.a,{value:t.sushiApy,displayType:"text",suffix:"%",decimalScale:2}),"}"]})]})]})]}),Object(i.jsxs)("div",{className:"pool-address",children:[Object(i.jsx)("span",{children:"Address"}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(o[t.chainId].viewUrl,"/address/").concat(t.address),children:t.pool})]})]})]}),Object(i.jsx)("div",{className:"bottom-btn",children:Object(i.jsx)("button",{onClick:function(){return a.push("/mining/".concat(t.chainId,"/").concat(t.symbol,"/").concat(t.bTokenSymbol,"/").concat(t.address))},children:"STAKING"})})]})})]})}},613:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(0),a=n.n(c),s=n(2),r=n(17),i=n(5),o=n(31),l=n(101),u=n(84),d=o.DeriEnv.get(),j=l[d].chainInfo;function b(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(i.useState)([]),b=Object(r.a)(l,2),p=b[0],O=b[1];return Object(i.useEffect)((function(){var e=Object(o.getContractAddressConfig)(d).map(function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.bTokenSymbol);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return c=e.t1,s=t.pool||"",e.abrupt("return",Object.assign(t,{network:j[t.chainId].name,liquidity:Object(u.d)(n.liquidity),apy:c.apy,pool:Object(u.c)(s),address:s}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Promise.all(e).then((function(e){O(e),c(!0)})),function(){return p.length=0}})),[n,p]}},614:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(0),a=n.n(c),s=n(2),r=n(17),i=n(5),o=n(31),l=n(84),u=o.DeriEnv.get();function d(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=Object(o.getSlpContractAddressConfig)(u).map(function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c,s,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool);case 2:return n=e.sent,e.next=5,Object(o.getSlpPoolInfoApy)(t.chainId,t.pool);case 5:return c=e.sent,s=(100*(s=.22008070161007/n.liquidity)).toFixed(2)+"%",r="0"==(r=Object(l.a)(c.apy))?"--":(100*r).toFixed(2)+"%",e.abrupt("return",Object.assign(t,{deriapy:r,sushiApy:s,bTokenSymbol:"DERI-USDT SLP"}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Promise.all(e).then((function(e){c(e)})),function(){n.length=0}}),[]),n}},655:function(e,t,n){},662:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var c=n(17),a=(n(5),n(655),n(612)),s=n(613),r=n(614),i=n(48);function o(){var e=Object(s.a)(),t=Object(c.a)(e,2),n=t[0],o=t[1],l=Object(r.a)(),u=o.concat(l);return Object(i.jsx)("div",{className:"mining-info",children:Object(i.jsxs)("div",{className:"pools",children:[u.map((function(e,t){return Object(i.jsx)(a.a,{pool:e},t)})),!n&&Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)("span",{className:"spinner spinner-border spinner-border-sm"})})]})})}}}]);
//# sourceMappingURL=11.b36c7046.chunk.js.map