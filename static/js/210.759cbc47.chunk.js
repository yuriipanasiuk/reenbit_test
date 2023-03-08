"use strict";(self.webpackChunkreenbit_test=self.webpackChunkreenbit_test||[]).push([[210],{3140:function(n,t,e){e.d(t,{V:function(){return u},q:function(){return c}});var r=e(5861),o=e(7757),i=e.n(o),a=e(1243);a.Z.defaults.baseURL="https://rickandmortyapi.com/api";var c=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("/character");case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Z)("/character/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},1210:function(n,t,e){e.r(t),e.d(t,{default:function(){return nn}});var r,o,i,a,c,u,s,p,l,d,f,h,m,x,g=e(3433),b=e(5861),Z=e(9439),v=e(7757),w=e.n(v),j=e(2791),k=e(1087),C=e(5667),P=e(9434),z=e(168),y=e(6444),S=e(8820),L=y.ZP.form(r||(r=(0,z.Z)(["\n  position: relative;\n  width: 1020px;\n  margin-bottom: 56px;\n"]))),T=y.ZP.input(o||(o=(0,z.Z)(["\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 48px;\n  outline: none;\n\n  border: ",";\n  border-radius: ",";\n\n  ::placeholder {\n    font-size: ",";\n    line-height: 1.5;\n\n    color: ",";\n  }\n"])),(function(n){return n.theme.borders.input}),(function(n){return n.theme.radii.medium}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.placeholderColor})),F=(0,y.ZP)(S.RB5)(i||(i=(0,z.Z)(["\n  color: ",";\n\n  position: absolute;\n  top: 12px;\n  left: 16px;\n  border: none;\n  background-color: transparent;\n  padding: 0;\n\n  cursor: pointer;\n\n  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  :hover {\n    scale: 1.2;\n  }\n"])),(function(n){return n.theme.colors.searchBtnColor})),B=e(184),E=function(n){var t=n.onChange,e=n.value;return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(L,{autoComplete:"off",children:[(0,B.jsx)(F,{size:24}),(0,B.jsx)(T,{type:"text",name:"name",placeholder:"Filter by name...",value:e,onChange:function(n){return t(n.target.value)}})]})})},q=y.ZP.div(a||(a=(0,z.Z)(["\n  width: 1440px;\n  padding-left: 210px;\n  padding-right: 210px;\n  padding-top: 86px;\n  padding-bottom: 188px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),H=function(n){var t=n.children;return(0,B.jsx)(q,{children:t})},R=e(7689),U=y.ZP.ul(c||(c=(0,z.Z)(["\n  display: grid;\n\n  grid-template-columns: repeat(4, 1fr);\n  column-gap: 20px;\n  row-gap: 24px;\n"]))),Y=y.ZP.li(u||(u=(0,z.Z)(["\n  background: ",";\n\n  box-shadow: ",";\n  border-radius: ",";\n\n  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  cursor: pointer;\n\n  :hover {\n    scale: 1.02;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.cardShadow}),(function(n){return n.theme.radii.normal})),_=y.ZP.img(s||(s=(0,z.Z)(["\n  width: 240px;\n  height: 170px;\n"]))),N=y.ZP.div(p||(p=(0,z.Z)(["\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),O=y.ZP.p(l||(l=(0,z.Z)(["\n  margin-bottom: 1px;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.5;\n  letter-spacing: 0.15px;\n\n  color: ",";\n"])),(function(n){return n.theme.fontWeight.medium}),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.colors.nameColor})),Q=y.ZP.p(d||(d=(0,z.Z)(["\n  font-size: ",";\n  line-height: 1.5;\n  letter-spacing: 0.25px;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.specColor})),V=(0,y.ZP)(k.rU)(f||(f=(0,z.Z)(["\n  text-decoration: none;\n"]))),W=function(n){var t=n.items,e=(0,R.TH)();return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(U,{children:t.map((function(n){var t=n.id,r=n.name,o=n.image,i=n.species;return(0,B.jsx)(Y,{children:(0,B.jsxs)(V,{to:"/characters/".concat(t),state:{from:e},children:[(0,B.jsx)(_,{src:o,alt:r}),(0,B.jsxs)(N,{children:[(0,B.jsx)(O,{children:r}),(0,B.jsx)(Q,{children:i})]})]})},t)}))})})},A=e(1503),D=y.ZP.div(h||(h=(0,z.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 16px;\n  width: 600px;\n  height: 200px;\n\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n"])),A),G=function(){return(0,B.jsx)(D,{})},I=e(3140),J=e(6355),K=y.ZP.button(m||(m=(0,z.Z)(["\n  position: fixed;\n  right: 20px;\n  bottom: 100px;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n"]))),M=(0,y.ZP)(J.PcH)(x||(x=(0,z.Z)(["\n  opacity: 0.3;\n  color: ",";\n  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  :hover {\n    opacity: 1;\n    scale: 1.2;\n  }\n"])),(function(n){return n.theme.colors.topButton})),X=function(n){var t=n.onClick;return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(K,{type:"button",onClick:t,children:(0,B.jsx)(M,{size:50})})})},$=e(6351),nn=function(){var n,t=(0,j.useState)([]),e=(0,Z.Z)(t,2),r=e[0],o=e[1],i=(0,k.lr)(),a=(0,Z.Z)(i,2),c=a[0],u=a[1],s=(0,j.useState)(!1),p=(0,Z.Z)(s,2),l=p[0],d=p[1],f=(0,P.v9)($.Qb),h=null!==(n=c.get("name"))&&void 0!==n?n:"",m=C.NY,x=function(){var n=window.pageYOffset;n>=50&&d(!0),n<=50&&d(!1)},v=r.filter((function(n){return n.name.toLowerCase().includes(h.toLowerCase())}));return(0,j.useEffect)((function(){try{var n=function(){var n=(0,b.Z)(w().mark((function n(){var t,e;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,I.q)();case 2:t=n.sent,e=(0,g.Z)(t).sort((function(n,t){return n.name.localeCompare(t.name)})),o(e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n(),m.scrollToTop(),window.addEventListener("scroll",x),function(){window.removeEventListener("scroll",x)}}catch(t){console.log(t)}}),[m]),(0,B.jsx)("div",{children:f&&(0,B.jsxs)(H,{children:[(0,B.jsx)(G,{}),(0,B.jsx)(E,{value:h,onChange:function(n){u(""!==n?{name:n}:{})}}),(0,B.jsx)(W,{items:v}),l&&(0,B.jsx)(X,{onClick:function(){m.scrollToTop()}})]})})}},1503:function(n,t,e){n.exports=e.p+"static/media/bg.33f1662b1fd59e892152.png"}}]);
//# sourceMappingURL=210.759cbc47.chunk.js.map