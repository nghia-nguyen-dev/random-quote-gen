(this.webpackJsonprandom=this.webpackJsonprandom||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c(16),a=c.n(s),r=c(9),o=c(0),i=function(e){var t=e.text;return Object(o.jsxs)("li",{className:"quote-block",children:[Object(o.jsx)("div",{className:"quote-block__bar"}),Object(o.jsx)("h1",{className:"quote-block__text",children:void 0!==t?'"'.concat(t,'"'):null})]})},u=function(e){var t=Object(r.a)(e,2),c=t[0],n=t[1];return"https://quote-garden.herokuapp.com/api/v3/quotes?author=".concat(c,"+").concat(n)},j=function(e,t){return fetch(t).then((function(e){return e.json()})).then((function(t){var c=t.data;return e(c)}))},l=c(28),h=c(26),b=c(27),d=c(25),m=function(e){var t=e.mainQuote,c=Object(n.useState)([]),s=Object(r.a)(c,2),a=s[0],m=s[1];Object(n.useEffect)((function(){if(!l.a(t)){var e=h.a(b.a("quoteAuthor"),d.a(" "),u)(t);j(m,e)}}),[t]);var x=a.map((function(e){var t=e.quoteText,c=e._id;return Object(o.jsx)(i,{text:t},c)}));return Object(o.jsxs)("div",{className:"quotes",children:[Object(o.jsx)("h2",{className:"quotes__author",children:t.quoteAuthor}),Object(o.jsx)("ul",{className:"quotes__list",children:x})]})},x=function(e){var t=e.setState,c=e.mainQuote;return Object(o.jsxs)("div",{className:"info",onClick:function(){return t(2)},children:[Object(o.jsxs)("div",{className:"info__content",children:[Object(o.jsx)("p",{className:"info__genre",children:c[0].quoteGenre}),Object(o.jsx)("h2",{className:"info__author",children:c[0].quoteAuthor})]}),Object(o.jsxs)("svg",{className:"info__arrow",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",fill:"#333",width:"24",children:[Object(o.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(o.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"})]})]})},O=c.p+"static/media/refresh-icon.80bd744b.svg",f="https://quote-garden.herokuapp.com/api/v3/quotes/random",v=function(e){var t=e.setMainQuote;return Object(o.jsxs)("div",{className:"randomizer",onClick:function(){return j(t,f)},children:[Object(o.jsx)("p",{className:"randomizer__text",children:"random"}),Object(o.jsx)("img",{className:"randomizer__icon",src:O})]})},p=function(){var e=Object(n.useState)([{}]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(1),u=Object(r.a)(a,2),l=u[0],h=u[1];Object(n.useEffect)((function(){j(s,f)}),[]);return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(v,{setMainQuote:s}),function(){switch(l){case 1:return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{text:c[0].quoteText}),Object(o.jsx)(x,{mainQuote:c,setState:h})]});case 2:return Object(o.jsx)(m,{mainQuote:c[0]})}}()]})};c(22);a.a.render(Object(o.jsx)(p,{}),document.querySelector("#root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.03ce455d.chunk.js.map