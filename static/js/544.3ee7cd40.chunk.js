"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{9544:function(n,t,e){e.r(t);var r=e(9439),a=e(2791),u=e(7689),c=e(1077),o=e(8183),i=e(7793),s=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],p=t[1],f=(0,u.TH)(),d=(0,a.useState)(!1),x=(0,r.Z)(d,2),l=x[0],v=x[1];return(0,a.useEffect)((function(){v(!0),(0,o.Hg)().then((function(n){p(n.results),v(!1)}))}),[]),(0,s.jsxs)("main",{children:[(0,s.jsx)(c.Dx,{children:"Top Movies for today"}),(0,s.jsxs)(c.eW,{children:[e.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(c.up,{to:"/movies/".concat(n.id),state:{from:f},children:n.original_title||n.name})},n.id)})),l&&(0,s.jsx)(i.a,{})]})]})}},1077:function(n,t,e){e.d(t,{Dx:function(){return f},eW:function(){return p},up:function(){return s}});var r,a,u,c=e(168),o=e(1087),i=e(6444),s=(0,i.ZP)(o.rU)(r||(r=(0,c.Z)(["\n  text-decoration: none;\n  padding: 2px 8px;\n\n  &:hover {\n    border-radius: 5px;\n    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);\n  }\n"]))),p=i.ZP.ul(a||(a=(0,c.Z)(["\n  padding: 20px 0 20px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"]))),f=i.ZP.h2(u||(u=(0,c.Z)(["\n  margin-top: 40px;\n  margin-bottom: 0;\n"])))},8183:function(n,t,e){e.d(t,{Hg:function(){return i},Jh:function(){return d},TP:function(){return p},z1:function(){return s},zv:function(){return f}});var r=e(5861),a=e(4687),u=e.n(a),c=e(1243),o="9a0701f2e35c588a9bcc5f999814db26";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.3ee7cd40.chunk.js.map