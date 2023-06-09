"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{5033:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,o,i,c,s,u,p,d,l=t(8683),f=t(9439),h=t(7689),x=t(8183),g=t(2791),v=t(168),m=t(6444),Z=t(1087),b=m.ZP.h2(r||(r=(0,v.Z)(["\n  margin: 0;\n"]))),w=m.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  padding: 20px;\n  border-bottom: solid 1px grey;\n  background-color: #63c5da;\n"]))),y=m.ZP.div(o||(o=(0,v.Z)(["\n  padding: 20px 40px;\n"]))),j=m.ZP.ul(i||(i=(0,v.Z)(["\n  list-style: none;\n  display: flex;\n  padding: 0;\n  gap: 16px;\n"]))),k=m.ZP.button(c||(c=(0,v.Z)(["\n  margin-top: 16px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 10px;\n  font-weight: 500;\n  background-color: rgb(63, 77, 217);\n  \n  text-decoration: none;\n  &:hover,\n  &:focus {\n   background-color: #63c5da;\n    \n  }\n"]))),_=(0,m.ZP)(Z.rU)(s||(s=(0,v.Z)(["\n  text-decoration: none;\n  list-style: none;\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  column-gap: 10px;\n  color: white;\n"]))),P=m.ZP.div(u||(u=(0,v.Z)(["\n  \n  padding: 20px;\n  border-bottom: solid 1px grey;\n"]))),U=(0,m.ZP)(Z.rU)(p||(p=(0,v.Z)(["\n  text-decoration: none;\n  display: blok;\n  font-size: 14px;\n  align-items: center;\n  column-gap: 10px;\n  color: white;\n   &:hover,\n  &:focus {\n   color: #0b0c0c;\n"]))),z=(0,m.ZP)(Z.rU)(d||(d=(0,v.Z)(["\n  text-decoration: none;\n  display: blok;\n  font-size: 14px;\n  align-items: center;\n  column-gap: 10px;\n  color: white;\n   &:hover,\n  &:focus {\n   color: #0b0c0c;\n"]))),S=t(8617),C=t(184),T=function(){var n,e,t=(0,g.useState)({}),r=(0,f.Z)(t,2),a=r[0],o=r[1],i=(0,h.TH)(),c=(0,h.UO)().movieId;(0,g.useEffect)((function(){(0,x.TP)(c).then((function(n){return o(n)}))}),[c]);var s=a.original_title,u=a.overview,p=a.genres,d=a.poster_path,v=(10*a.vote_average).toFixed(2);return(0,C.jsxs)("main",{children:[(0,C.jsx)(k,{type:"button",children:(0,C.jsxs)(_,{to:null!==(n=null===(e=i.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:[(0,C.jsx)(S.siY,{size:16}),"Go back"]})}),(0,C.jsxs)(w,{children:[(0,C.jsx)("img",{src:d?"https://image.tmdb.org/t/p/w300".concat(d):"http://www.suryalaya.org/images/no_image.jpg",width:320,height:380,loading:"lazy",alt:"poster"}),(0,C.jsxs)(y,{children:[(0,C.jsx)(b,{children:s}),(0,C.jsxs)("h3",{children:["User score: ",v,"%"]}),(0,C.jsx)("h3",{children:"Overview"}),(0,C.jsxs)("p",{children:[u," "]}),(0,C.jsx)("h3",{children:"Genres"}),(0,C.jsx)(j,{children:p&&p.length&&p.map((function(n){var e=n.id,t=n.name;return(0,C.jsx)("li",{children:t},e)}))})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)("h4",{children:"Additional information"}),(0,C.jsxs)("ul",{children:[(0,C.jsx)("li",{children:(0,C.jsx)(U,{to:"cast",state:(0,l.Z)({},i.state),children:"Cast"})}),(0,C.jsxs)("li",{children:[" ",(0,C.jsx)(z,{to:"reviews",state:(0,l.Z)({},i.state),children:"Reviews"})]})]})]}),(0,C.jsx)(h.j3,{})]})}},8183:function(n,e,t){t.d(e,{Hg:function(){return s},Jh:function(){return l},TP:function(){return p},z1:function(){return u},zv:function(){return d}});var r=t(5861),a=t(4687),o=t.n(a),i=t(1243),c="af0d5f243de6f7a5bfa482911cb42a9e";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=33.814a116b.chunk.js.map