(function(t){function e(e){for(var r,o,a=e[0],u=e[1],c=e[2],f=0,h=[];f<a.length;f++)o=a[f],i[o]&&h.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/The-Game-of-Life/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3410:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"row",staticStyle:{height:"500px"}},[n("div",{staticClass:"col m-2"},[n("TheGameOfLife",{attrs:{rows:t.rows,cols:t.cols}})],1)])])},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"TheGameOfLife"}},[n("h2",[t._v("The Game Of Life")]),"Auto"==t.state?n("button",{on:{click:function(e){return t.move()}}},[t._v("Move")]):t._e(),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.interval,expression:"interval"}],attrs:{type:"number",placeholder:"Interval (s)"},domProps:{value:t.interval},on:{input:function(e){e.target.composing||(t.interval=e.target.value)}}}),n("button",{on:{click:function(e){return t.auto()}}},[t._v(t._s(t.state))]),t._l(t.rows,function(e){return n("div",{key:e},t._l(t.cols,function(r){return n("div",{key:r,staticClass:"tgolUnit",style:{width:t.unit_width+"%"},on:{click:function(n){return t.change(r,e)}}},[n("TheGameOfLifeUnit",{attrs:{alive:t.status[e-1][r-1]}},[t._v(t._s(t.getNeighbours(r-1,e-1)))])],1)}),0)}),t._v("\n    alive: "+t._s(t.alive)+"\n    ticks: "+t._s(t.ticks)+"\n")],2)},a=[],u=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.getClass(),attrs:{id:"TheGameOfLifeUnit"}})}),c=[],l={name:"TheGameOfLifeUnit",props:{alive:Boolean},methods:{getClass:function(){return this.alive?"life":"dead"}},data:function(){return{}},created:function(){}},f=l,h=(n("58bb"),n("2877")),v=Object(h["a"])(f,u,c,!1,null,"52f43554",null),p=v.exports,d={name:"TheGameOfLife",components:{TheGameOfLifeUnit:p},props:{rows:Number,cols:Number,rand:Boolean},data:function(){return{unit_width:100/this.cols,status:[],alive:0,ticks:0,state:"Auto",auto_interval:null,interval:null}},methods:{change:function(t,e){this.status[e-1][t-1]=!this.status[e-1][t-1],this.alive+=this.status[e-1][t-1]?1:-1},move:function(){this.alive=0,this.ticks++;for(var t=[],e=0;e<this.rows;e++){t.push([]);for(var n=0;n<this.cols;n++)this.status[e][n]?t[e].push(!(this.getNeighbours(n,e)>3||this.getNeighbours(n,e)<2)):t[e].push(3===this.getNeighbours(n,e)),this.alive+=t[e][n]?1:0}this.status=t},getNeighbours:function(t,e){for(var n=0,r=-1;r<=1;r++)for(var i=-1;i<=1;i++)e+r>=0&&e+r<this.rows&&t+i>=0&&t+i<this.cols&&this.status[e+r][t+i]&&(0!==r||0!==i)&&n++;return n},auto:function(){var t=this;"Auto"===this.state?(this.auto_interval=setInterval(function(){t.move()},1e3*this.interval),this.state="Stop"):(clearInterval(this.auto_interval),this.state="Auto")}},created:function(){for(var t=0;t<this.rows;t++){this.status.push([]);for(var e=0;e<this.cols;e++)this.status[t].push(!1)}}},b=d,m=(n("c0f0"),Object(h["a"])(b,o,a,!1,null,"1d123804",null)),g=m.exports,_={name:"app",components:{TheGameOfLife:g},data:function(){return{rows:30,cols:50}}},w=_,O=(n("5c0b"),Object(h["a"])(w,i,s,!1,null,null,null)),y=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},"58bb":function(t,e,n){"use strict";var r=n("3410"),i=n.n(r);i.a},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),i=n.n(r);i.a},"5e27":function(t,e,n){},c0f0:function(t,e,n){"use strict";var r=n("ddb6"),i=n.n(r);i.a},ddb6:function(t,e,n){}});
//# sourceMappingURL=app.f11f382e.js.map