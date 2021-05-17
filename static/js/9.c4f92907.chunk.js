(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[9],{604:function(e,t,c){"use strict";var n=c(0),i=c.n(n),a=c(2),s=c(17),r=c(5),l=c(84),j=(c(605),c(161)),o=c(48);t.a=Object(j.b)("wallet")(Object(j.c)((function(e){var t=e.wallet,c=Object(r.useState)("Connect Wallet"),n=Object(s.a)(c,2),j=n[0],d=n[1],b=function(e){t.isConnected()?e.supported?d(Object(o.jsxs)("span",{children:[e.formatBalance," ",e.symbol," ",Object(o.jsx)("span",{className:"address",children:Object(l.c)(e.account)})]})):d(Object(o.jsxs)("span",{className:"no-supported",children:["Unsupported Chain ID ",e.chainId,"!"]})):d("Connect Wallet")};return Object(r.useEffect)((function(){return function(){var e=Object(a.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.connect();case 2:(c=e.sent)&&b(c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),Object(r.useEffect)((function(){return b(t.detail),function(){}}),[t.detail.account,t.detail.formatBalance]),Object(o.jsxs)("div",{className:"connect",children:[Object(o.jsxs)("div",{className:"network-text-logo",children:[Object(o.jsx)("i",{className:t.detail.symbol}),Object(o.jsx)("span",{className:"logo-text",children:t.detail.text})]}),Object(o.jsx)("div",{className:"bg-btn",children:Object(o.jsx)("button",{className:"nav-btn connect-btn",onClick:t.connect,children:j})})]})})))},605:function(e,t,c){},631:function(e,t,c){},632:function(e,t,c){},633:function(e,t,c){},634:function(e,t,c){},664:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return w}));var n=c(5),i=c.n(n),a=c(17),s=c.p+"static/media/deri-logo.03d181a4.png",r=c(23),l=c(162),j=(c(631),c(48));function o(e){var t=e.closeMenu,c=!!Object(r.i)("/mining"),i=!!Object(r.i)("/lite");return Object(n.useEffect)((function(){return document.querySelectorAll(".menu li a").forEach((function(e){return e.addEventListener("click",t)})),function(){}}),[]),Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)("a",{className:"logo",href:"https://deri.finance/",children:Object(j.jsx)("img",{src:s,alt:""})}),Object(j.jsx)("span",{className:"close-menu",click:"close",onClick:t})]}),Object(j.jsx)("div",{className:"ul",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:c?"selected":"",children:Object(j.jsx)(l.b,{to:"/mining",children:"Mining"})}),Object(j.jsx)("li",{className:i?"selected":"",children:Object(j.jsx)(l.b,{to:"/lite",children:" Trade "})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://governance.deri.finance/",children:"Governance"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://bridge.deri.finance/",children:"Bridge"})}),Object(j.jsxs)("li",{className:"ref",children:["Docs ",Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAABXklEQVQoU2WRP0hVcRTHP9/fvT6ejzJpCIVaIkNzMZpaskGECB2ypxA+aFGxocmh0bm2COmlEIEI+ujPIBi4ODQ4BLqYoETgYHs9VPTe+40raGTf7Zzv+XC+nCMmJ0O5ZbhXIb3yuxTml4bbfnFG5er3C5IHwTsLu9eWNfBmuzPIXwQFw6f6vsaXnv4Fc8BKXgep33BIFt3Rw+ntu3K2LCkGH2K9dXPzRG3wUv3ey9Wmc40XXwg/BhVsJxB61Ff9WiqG83NC94EYOMjMK8V6TpY9k/UEKAIJ1qLrxUfK4z+ofmuNFc0idQOR0R6wDnQJl4DUeCXN0sqHsRs/j6FjcGrralTgnazb4AiU2Q4SKWjVpJXaSPuPfPYUyouh6a0Oo1lwFxCAzHgtQZWPI9c3Txb8A+XNgZmNm8ENC4LL+YntZKg22plHPdV/UO6UpzZvqRD3pkd8fj/etnb2b38ARWSBW029yFUAAAAASUVORK5CYII=",alt:""}),Object(j.jsxs)("ul",{className:"ref-box",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/deri-finance/whitepaper/blob/master/deri_whitepaper.pdf",children:"Whitepaper"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Deri-v1.0.pdf",children:"Code Audit"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://deri.finance/#/team",children:"Team"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/faq",children:"FAQ"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/",children:"Guide"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/deri-finance/",children:"Github"})})]})]})]})}),Object(j.jsxs)("div",{className:"m-footer",children:[Object(j.jsxs)("div",{className:"footer-link",children:[Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",className:"iocn-a",href:"mailto: service@deri.finance",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-envelope"})})}),Object(j.jsx)("a",{target:"_blank",className:"iocn-a",rel:"noreferrer",href:"https://deri-protocol.medium.com",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-medium"})})}),Object(j.jsx)("a",{target:"_blank",className:"iocn-a",href:"https://twitter.com/DeriProtocol",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-twitter"})})}),Object(j.jsx)("a",{target:"_blank",className:"iocn-a",href:"https://github.com/deri-finance",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-github"})})}),Object(j.jsx)("a",{target:"_blank",className:"iocn-a",href:"https://t.me/DeriProtocol",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-paper-plane"})})})]}),Object(j.jsx)("div",{className:"banquan",children:"\xa9 2021 Deri Protocol"})]})]})}c(632);function d(){var e=Object(n.useState)({}),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)("img",{className:"menu-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAASCAYAAABFGc6jAAAARklEQVRIS2MMm3XzAgMjoz4DDcF/BobzjHSziIYeQTGacdQickNgGAYd3ZI33SwiN3JJ1TcMEwOpQUCu+mEYdHRL3vSyCAAv2BujNlrcrwAAAABJRU5ErkJggg==",onClick:function(){i({left:0})}}),Object(j.jsx)("div",{className:"menu-left",style:c,children:Object(j.jsx)(o,{closeMenu:function(){return i({left:"-110%"})}})}),Object(j.jsx)("a",{className:"logo",href:"https://deri.finance/",children:Object(j.jsx)("img",{src:s,alt:""})})]})})}var b,h=c(6),u=c(7),f=c(13),O=c(12),m=c(118),x=Object(m.a)((function(){return Promise.all([c.e(0),c.e(1),c.e(3),c.e(2),c.e(16)]).then(c.bind(null,660))})),p=Object(m.a)((function(){return Promise.all([c.e(0),c.e(11)]).then(c.bind(null,661))})),A=Object(m.a)((function(){return Promise.all([c.e(0),c.e(1),c.e(4),c.e(15)]).then(c.bind(null,662))})),v=Object(r.j)(b=function(e){Object(f.a)(c,e);var t=Object(O.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"body",children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{exact:!0,path:"/",component:x}),Object(j.jsx)(r.b,{exact:!0,path:"/lite",component:x}),Object(j.jsx)(r.b,{exact:!0,path:"/mining",component:p}),Object(j.jsx)(r.b,{exact:!0,path:"/mining/:chainId/:symbol/:baseToken/:address",component:A})]})})}}]),c}(i.a.Component))||b,g=(c(633),c(604));function N(){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsx)(g.a,{})})}c(634);function w(){var e=function(){var e=Object(n.useState)({width:void 0,height:void 0}),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),c}();return Object(n.useEffect)((function(){return document.querySelector("html").setAttribute("style","font-size : ".concat(e.width/375*100,"px")),function(){}}),[e]),Object(j.jsxs)("div",{className:"mobile",children:[Object(j.jsx)(d,{}),Object(j.jsx)(v,{}),Object(j.jsx)(N,{})]})}}}]);
//# sourceMappingURL=9.c4f92907.chunk.js.map