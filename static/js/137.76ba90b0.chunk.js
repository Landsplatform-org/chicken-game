"use strict";(self.webpackChunkreact_chiken_game=self.webpackChunkreact_chiken_game||[]).push([[137],{3399:function(e,n,t){t.d(n,{Z:function(){return o}});t(2791);var r=t(184),l="w-full h-[400px] flex items-center justify-center th-background",a="\n    w-[70%] flex flex-row items-center\n    phone:w-full phone:justify-center\n    tablet:w-full tablet:justify-center\n    desktop:w-[90%]\n  ",s="\n    font-english font-[900] text-[3.5rem] text-dark_blue\n    phone:text-[3rem] phone:text-center\n  ",i=function(e){var n=e.name;return(0,r.jsx)("div",{className:l,children:(0,r.jsx)("div",{className:a,children:(0,r.jsx)("h1",{className:s,children:n})})})},c="w-full",o=function(e){var n=e.titleName,t=e.refCurrent;return(0,r.jsx)("div",{ref:t,className:c,children:(0,r.jsx)(i,{name:n})})}},137:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(2791),l=t(3399),a=t(4165),s=t(5861),i=t(885),c=t(1044),o=t(184),u="w-full flex flex-row gap-10",f="flex flex-col gap-1",x="w-[70px] h-[50px]",h=function(e){var n=e.common,t=e.official,r=e.image;return(0,o.jsxs)("article",{className:u,children:[(0,o.jsx)("img",{src:r,alt:n,className:x}),(0,o.jsxs)("div",{className:f,children:[(0,o.jsx)("h1",{className:"font-bold",children:t}),(0,o.jsx)("h3",{className:"font-normal",children:n})]})]})},d="w-full flex items-center",m="flex flex-row gap-2",p="font-english font-bold w-[40px] h-[40px] flex flex-row items-center justify-center border-2 border-blue bg-transparent text-blue rounded-full hover:bg-blue hover:text-white transition duration-100",v=function(e){for(var n=e.sizePerPage,t=e.totalNews,r=e.paginate,l=[],a=1;a<=Math.ceil(t/n);a++)l.push(a);return(0,o.jsx)("div",{className:d,children:(0,o.jsx)("ul",{className:m,children:null===l||void 0===l?void 0:l.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"#",className:p,onClick:function(){return r(e)},children:e})},e)}))})})},w=t(643),j="w-full h-max bg-white flex justify-center",g="w-[70%] flex flex-col items-center gap-10",b="w-max h-max font-english font-bold py-2 px-6 flex flex-row items-center justify-center border-2 border-blue bg-transparent text-blue rounded-full hover:bg-blue hover:text-white transition duration-100",N=function(){var e=(0,r.useState)([]),n=(0,i.Z)(e,2),t=n[0],l=n[1],u=(0,r.useState)(),f=(0,i.Z)(u,2),x=f[0],d=f[1],m=(0,r.useState)(1),p=(0,i.Z)(m,2),N=p[0],k=p[1],y=(0,r.useState)(15),Z=(0,i.Z)(y,1)[0],C=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,c.ZP.get("https://restcountries.com/v3.1/all");case 4:n=e.sent,l(n.data),d(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),d(!1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){C()}),[]);var P=N+Z,S=P-Z,_=t.slice(S,P);return(0,o.jsx)("div",{className:j,children:(0,o.jsxs)("div",{className:g,children:[x&&(0,o.jsx)("div",{children:(0,o.jsx)(w.VF,{height:"100",width:"100",color:"#2790cb",secondaryColor:"#2790cb",radius:"12.5",ariaLabel:"mutating-dots-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}),null===_||void 0===_?void 0:_.map((function(e,n){return(0,o.jsx)(h,{common:e.name.common,official:e.name.official,image:e.flags.svg},n)})),(0,o.jsxs)("div",{className:"flex flex-row gap-10",children:[(0,o.jsx)("a",{href:"#",className:b,onClick:function(){return k((function(e){return e-1}))},children:"\u041d\u0430\u0437\u0430\u0434"}),(0,o.jsx)(v,{sizePerPage:Z,totalNews:t.length,paginate:function(e){d(!0),k(e),d(!1)}}),(0,o.jsx)("a",{href:"#",className:b,onClick:function(){return k((function(e){return e+1}))},children:"\u0412\u043f\u0435\u0440\u0435\u0434"})]})]})})},k="flex flex-col gap-40",y=function(){var e=(0,r.useRef)(null);return(0,r.useLayoutEffect)((function(){var n;(n=e.current)&&window.scrollTo({top:n.offsetTop,left:0,behavior:"smooth"})})),(0,o.jsxs)("div",{className:k,children:[(0,o.jsx)(l.Z,{titleName:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438",refCurrent:e}),(0,o.jsx)(N,{})]})}}}]);
//# sourceMappingURL=137.76ba90b0.chunk.js.map