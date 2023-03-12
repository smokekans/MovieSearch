"use strict";(self.webpackChunkMovieSearch=self.webpackChunkMovieSearch||[]).push([[251],{251:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,i,c=e(861),u=e(439),o=e(757),s=e.n(o),p=e(168),l=e(444),f=l.ZP.form(r||(r=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]))),d=l.ZP.input(a||(a=(0,p.Z)(["\n  margin: 5px;\n  color: white;\n  width: 200px;\n  height: 25px;\n  border: 1px solid black;\n  outline: none;\n  border-radius: 10px;\n  font-size: 22px;\n  background-color: rgba(0, 0, 0, 0.2);\n  text-align: center;\n  caret-color: orange;\n"]))),h=l.ZP.button(i||(i=(0,p.Z)(["\n  width: 100px;\n  height: 25px;\n  background-color: black;\n  color: white;\n  border: transparent;\n  outline: transparent;\n  border-radius: 10px;\n  cursor: pointer;\n  &:hover {\n    color: orange;\n  }\n"]))),x=e(791),v=e(87),m=e(191),b=e(483),Z=e(174),g=e(184);function y(){var n=(0,x.useState)(""),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,x.useState)(null),i=(0,u.Z)(a,2),o=i[0],p=i[1],l=(0,x.useState)(!1),y=(0,u.Z)(l,2),w=y[0],k=y[1],j=(0,v.lr)(),P=(0,u.Z)(j,2),S=P[0],_=P[1],z=S.get("query");return(0,x.useEffect)((function(){function n(){return(n=(0,c.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,k(!0),n.next=4,(0,m.z1)(z);case 4:t=n.sent,p(t.results),n.next=11;break;case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",alert("Sorry, please try again!"));case 11:return n.prev=11,k(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}""!==z&&null!==z&&function(){n.apply(this,arguments)}()}),[z]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(f,{onSubmit:function(n){n.preventDefault(),_({query:e}),r("")},children:[(0,g.jsx)(d,{type:"text",value:e,onChange:function(n){r(n.target.value)}}),(0,g.jsx)(h,{type:"submit",children:"Search movie"})]}),w&&(0,g.jsx)(b.Z,{}),o&&(0,g.jsx)(Z.Z,{trandingMovies:o})]})}},191:function(n,t,e){e.d(t,{Hg:function(){return o},TP:function(){return f},tx:function(){return v},z1:function(){return p},zv:function(){return h}});var r=e(861),a=e(757),i=e.n(a),c=e(243),u="31cfad655ad65f43227562d8d472bc2d";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("trending/all/day",{params:{api_key:u}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("search/movie",{params:{api_key:u,query:t}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t),{params:{api_key:u}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t,"/credits"),{params:{api_key:u}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t,"/reviews"),{params:{api_key:u}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"},174:function(n,t,e){e.d(t,{Z:function(){return v}});var r,a,i,c,u=e(689),o=e(168),s=e(444),p=e(87),l=s.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),f=s.ZP.li(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 25%;\n  height: 100%;\n  margin-bottom: 20px;\n"]))),d=s.ZP.img(i||(i=(0,o.Z)(["\n  width: 95%;\n  height: 100%;\n  transition: width 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  &:hover {\n    width: 100%;\n  }\n"]))),h=(0,s.ZP)(p.rU)(c||(c=(0,o.Z)(["\n  color: white;\n  text-decoration: none;\n  text-align: center;\n  text-shadow: 0 0 black;\n  &:hover {\n    color: orange;\n  }\n"]))),x=e(184);function v(n){var t=n.trandingMovies,e=(0,u.TH)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.title,a=n.name,i=n.backdrop_path,c=n.poster_path;return(0,x.jsx)(f,{children:(0,x.jsxs)(h,{to:"/movies/".concat(t),state:{from:e},children:[(0,x.jsx)(d,{src:c?"".concat("https://image.tmdb.org/t/p/w200").concat(c||i):"https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg",alt:a}),r||a]})},t)}))})})}}}]);
//# sourceMappingURL=251.bbcf19df.chunk.js.map