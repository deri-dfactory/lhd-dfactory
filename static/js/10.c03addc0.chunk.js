(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[10],{575:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(22),s=n(17),a=n(5),i=n(574),r=n(49);function o(e){var t=Object(a.useState)("--"),n=Object(s.a)(t,2),o=n[0],l=n[1];return Object(a.useEffect)((function(){return(e.value||0===Math.abs(e.value)&&!0===e.allowZero)&&l(Object(r.jsx)(i.a,Object(c.a)(Object(c.a)({},e),{},{displayType:"text"}))),function(){}}),[e.value]),o}},585:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(24),s=(n(574),n(160)),a=n(42),i=n(575),r=n(49),o=s[a.DeriEnv.get()].chainInfo;function l(e){var t=e.pool,n="logo ".concat(t.bTokenSymbol),s=Object(c.g)();return Object(r.jsxs)("div",{className:"pool",children:[Object(r.jsx)("div",{className:"pool-header",children:Object(r.jsx)("div",{className:"network",children:t.network&&t.network.toUpperCase()})}),Object(r.jsx)("div",{className:"pool-info",children:Object(r.jsxs)("div",{className:"info-center",children:[Object(r.jsxs)("div",{className:"top-info",children:[Object(r.jsx)("div",{className:n}),Object(r.jsxs)("div",{className:"pool-detail",children:[Object(r.jsx)("div",{className:"base-token",children:t.bTokenSymbol}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"Pool Liq"}),Object(r.jsx)(i.a,{value:t.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:t.sushiApy?7:0})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"Symbol"}),t.symbol]}),Object(r.jsxs)("div",{className:"apy",children:[Object(r.jsx)("span",{children:"APY"}),Object(r.jsxs)("span",{children:[Object(r.jsx)("span",{className:t.sushiApy?"sushi-apy-underline":"",title:t.sushiApy&&"DERI-APY",children:Object(r.jsx)(i.a,{value:t.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})}),t.sushiApy&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{children:" + "}),Object(r.jsxs)("span",{className:t.sushiApy?"sushi-apy-underline":"",title:t.sushiApy&&"SUSHI-APY",children:[" ",Object(r.jsx)(i.a,{value:t.sushiApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(r.jsxs)("div",{className:"pool-address",children:[Object(r.jsx)("span",{children:"Address"}),Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(o[t.chainId].viewUrl,"/address/").concat(t.address||t.pool),children:t.pool})]})]})]}),Object(r.jsx)("div",{className:"bottom-btn",children:Object(r.jsx)("button",{onClick:function(){return s.push("/mining/".concat(t.chainId,"/").concat(t.type,"/").concat(t.symbol,"/").concat(t.bTokenSymbol,"/").concat(t.address))},children:"STAKING"})})]})})]})}},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var c=n(0),s=n.n(c),a=n(2),i=n(17),r=n(5),o=n(42),l=n(160),d=n(84),u=o.DeriEnv.get(),j=l[u].chainInfo;function p(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)([]),p=Object(i.a)(l,2),b=p[0],h=p[1];return Object(r.useEffect)((function(){var e=Object(o.getContractAddressConfig)(u).map(function(){var e=Object(a.a)(s.a.mark((function e(t){var n,c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return c=e.t1,a=t.pool||"",e.abrupt("return",Object.assign(t,{network:j[t.chainId].name,liquidity:n.liquidity,apy:100*+c.apy,pool:Object(d.c)(a),address:a,type:"perpetual"}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t=Object(o.getLpContractAddressConfig)(u).map(function(){var e=Object(a.a)(s.a.mark((function e(t){var n,c,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return c=e.t1,a=t.pool||"",Object(d.e)(t.pool)&&(i=.22008070161007/n.liquidity*100),e.abrupt("return",Object.assign(t,{network:j[t.chainId].name,liquidity:n.liquidity,apy:100*+c.apy,pool:Object(d.c)(a),sushiApy:i,address:a,type:"lp"}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n=e.concat(t);return Promise.all(n).then((function(e){h(e),c(!0)})),function(){return b.length=0}})),[n,b]}},623:function(e,t,n){},631:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(17),s=n(585),a=n(586),i=(n(623),n(49));function r(){var e=Object(a.a)(),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(i.jsx)("div",{className:"mining-info",children:Object(i.jsxs)("div",{className:"pools",children:[r.map((function(e,t){return Object(i.jsx)(s.a,{pool:e},t)})),!n&&Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)("span",{className:"spinner spinner-border spinner-border-sm"})})]})})}}}]);
//# sourceMappingURL=10.c03addc0.chunk.js.map