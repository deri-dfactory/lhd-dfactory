(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[8],{578:function(e,c,t){"use strict";var n=t(0),s=t.n(n),a=t(2),r=t(17),i=t(5),l=t(83),j=(t(579),t(158)),d=t(47);c.a=Object(j.b)("wallet")(Object(j.c)((function(e){var c=e.wallet,t=Object(i.useState)("Connect Wallet"),n=Object(r.a)(t,2),j=n[0],b=n[1],o=function(e){c.isConnected()?e.supported?b(Object(d.jsxs)("span",{children:[e.formatBalance," ",e.symbol," ",Object(d.jsx)("span",{className:"address",children:Object(l.c)(e.account)})]})):b(Object(d.jsxs)("span",{className:"no-supported",children:["Unsupported Chain ID ",e.chainId,"!"]})):b("Connect Wallet")};return Object(i.useEffect)((function(){return function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.connect();case 2:(t=e.sent)&&o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),Object(i.useEffect)((function(){return o(c.detail),function(){}}),[c.detail.account,c.detail.formatBalance]),Object(d.jsxs)("div",{className:"connect",children:[Object(d.jsxs)("div",{className:"network-text-logo",children:[Object(d.jsx)("i",{className:c.detail.symbol}),Object(d.jsx)("span",{className:"logo-text",children:c.detail.text})]}),Object(d.jsx)("div",{className:"bg-btn",children:Object(d.jsx)("button",{className:"nav-btn connect-btn",onClick:c.connect,children:j})})]})})))},579:function(e,c,t){},600:function(e,c,t){},601:function(e,c,t){},602:function(e,c,t){},603:function(e,c,t){},638:function(e,c,t){"use strict";t.r(c),t.d(c,"default",(function(){return w}));var n=t(5),s=t.n(n),a=(t(600),t(159)),r=t.p+"static/media/deri.f685db02.svg",i=t.p+"static/media/logo.23cb8525.svg",l=t(23),j=t(47);function d(){var e=!!Object(l.i)("/mining"),c=!!Object(l.i)("/lite"),t=!!Object(l.i)("/pro");return Object(j.jsxs)("div",{className:"nav-menu",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsxs)("a",{href:"http://deri.finance",rel:"noreferrer",target:"_blank",children:[Object(j.jsx)("img",{src:i,alt:""}),Object(j.jsx)("img",{src:r,alt:""})]})}),Object(j.jsx)("div",{className:"mean",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/mining",className:e?"selected":"",children:"Mining"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/lite",className:c||t?"selected":"",children:"Trade"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://governance.deri.finance/",children:"Governance"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://bridge.deri.finance/",children:"Bridge"})}),Object(j.jsxs)("li",{className:"ref",children:[Object(j.jsx)("a",{href:"https://docs.deri.finance/",children:"Docs"}),Object(j.jsx)("i",{children:Object(j.jsx)("svg",{"data-v-16f7de50":"",fill:"currentColor",viewBox:"0 0 24 24",width:"24",height:"24",className:"Zi Zi--ArrowDown ContentItem-arrowIcon",children:Object(j.jsx)("path",{"data-v-16f7de50":"",d:"M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z","fill-rule":"evenodd"})})}),Object(j.jsxs)("ul",{className:"ref_box",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/deri-finance/whitepaper/blob/master/deri_whitepaper.pdf",children:"Whitepaper"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Deri-v1.0.pdf",children:"Code Audit"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"http://deri.finance/#/team",children:"Team"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/faq",children:"FAQ"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/",children:"Guide"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/deri-finance/",children:"Github"})})]})]})]})})]})}var b=t(578);function o(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)(d,{}),Object(j.jsx)(b.a,{})]})}var h,O=t(6),x=t(7),f=t(13),m=t(12),p=t(116),u=(t(601),Object(p.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(2),t.e(13)]).then(t.bind(null,630))}))),v=Object(p.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(2),t.e(12)]).then(t.bind(null,636))})),N=Object(p.a)((function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,631))})),g=Object(p.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(14)]).then(t.bind(null,632))})),_=Object(l.j)(h=function(e){Object(f.a)(t,e);var c=Object(m.a)(t);function t(){return Object(O.a)(this,t),c.apply(this,arguments)}return Object(x.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"body",children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{exact:!0,path:"/",children:Object(j.jsx)(l.a,{to:"/lite"})}),Object(j.jsx)(l.b,{exact:!0,path:"/mining",component:N}),Object(j.jsx)(l.b,{exact:!0,path:"/mining/:chainId/:type/:symbol/:baseToken/:address",component:g}),Object(j.jsx)(l.b,{exact:!0,path:"/lite",component:u}),Object(j.jsx)(l.b,{exact:!0,path:"/pro",component:v}),Object(j.jsx)(l.b,{component:u})]})})}}]),t}(s.a.Component))||h;t(602);function k(){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsxs)("div",{className:"footer_info",children:[Object(j.jsx)("div",{className:"hr"}),Object(j.jsxs)("div",{className:"footer_box",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:Object(j.jsx)("router-link",{to:"/lite",children:"App"})}),Object(j.jsx)("span",{className:"mt_27",children:Object(j.jsx)("a",{href:"https://docs.deri.finance/",children:"Docs"})}),Object(j.jsx)("span",{className:"mt_27",children:Object(j.jsx)("a",{href:"http://deri.finance/#/team",children:"Team"})}),Object(j.jsx)("span",{className:"mt_27",children:Object(j.jsx)("a",{href:"https://docs.deri.finance/faq",children:"FAQ"})})]}),Object(j.jsx)("div",{className:"mt_19",children:"\xa9 2021 Deri Protocol"})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("span",{children:" Visit us on "}),Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",className:"iocn_a",children:Object(j.jsxs)("div",{className:"circle",children:[Object(j.jsx)("div",{className:"wechat",children:Object(j.jsx)("div",{className:"down_box"})}),Object(j.jsx)("div",{className:"fa fa-wechat"})]})}),Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",className:"iocn_a",href:"mailto: service@deri.finance",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-envelope"})})}),Object(j.jsx)("a",{target:"_blank",className:"iocn_a",href:"https://deri-protocol.medium.com",rel:"noreferrer",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-medium"})})}),Object(j.jsx)("a",{target:"_blank",className:"iocn_a",href:"https://twitter.com/DeriProtocol",rel:"noreferrer",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-twitter"})})}),Object(j.jsx)("a",{target:"_blank",className:"iocn_a",href:"https://github.com/deri-finance",rel:"noreferrer",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-github"})})}),Object(j.jsx)("a",{rel:"noreferrer",target:"_blank",className:"iocn_a",href:"https://t.me/DeriProtocol",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-paper-plane"})})})]})]})]})})}t(603);function w(){return console.log("welcome Deri desktop app"),Object(j.jsxs)("div",{className:"desktop",children:[Object(j.jsx)(o,{}),Object(j.jsx)(_,{}),Object(j.jsx)(k,{})]})}}}]);
//# sourceMappingURL=8.dc7251f9.chunk.js.map