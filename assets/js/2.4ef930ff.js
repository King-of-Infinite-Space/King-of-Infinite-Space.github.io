(window.webpackJsonp=window.webpackJsonp||[]).push([[2],Array(56).concat([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(60)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(65),o=e(77);t.exports=e(57)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(58);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(69)("wks"),o=e(70),i=e(56).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(61),o=e(83),i=e(76),c=Object.defineProperty;n.f=e(57)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(81),o=e(67);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(56),o=e(63),i=e(59),c=e(71),s=e(74),u=function(t,n,e){var a,f,v,l,p=t&u.F,d=t&u.G,_=t&u.S,h=t&u.P,y=t&u.B,m=d?r:_?r[n]||(r[n]={}):(r[n]||{}).prototype,x=d?o:o[n]||(o[n]={}),g=x.prototype||(x.prototype={});for(a in d&&(e=n),e)v=((f=!p&&m&&void 0!==m[a])?m:e)[a],l=y&&f?s(v,r):h&&"function"==typeof v?s(Function.call,v):v,m&&c(m,a,v,t&u.U),x[a]!=v&&i(x,a,l),h&&g[a]!=v&&(g[a]=v)};r.core=o,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n,e){var r=e(63),o=e(56),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(82)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(56),o=e(59),i=e(62),c=e(70)("src"),s=e(86),u=(""+s).split("toString");e(63).inspectSource=function(t){return s.call(t)},(t.exports=function(t,n,e,s){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,c)||o(e,c,t[n]?""+t[n]:u.join(String(n)))),t===r?t[n]=e:s?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[c]||s.call(this)}))},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(87);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(58),o=e(56).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(58);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(73),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(69)("keys"),o=e(70);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(72);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){t.exports=!1},function(t,n,e){t.exports=!e(57)&&!e(60)((function(){return 7!=Object.defineProperty(e(75)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(88),o=e(80);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(66),o=e(78),i=e(89);t.exports=function(t){return function(n,e,c){var s,u=r(n),a=o(u.length),f=i(c,a);if(t&&e!=e){for(;a>f;)if((s=u[f++])!=s)return!0}else for(;a>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){t.exports=e(69)("native-function-to-string",Function.toString)},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(62),o=e(66),i=e(85)(!1),c=e(79)("IE_PROTO");t.exports=function(t,n){var e,s=o(t),u=0,a=[];for(e in s)e!=c&&r(s,e)&&a.push(e);for(;n.length>u;)r(s,e=n[u++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(73),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(67);t.exports=function(t){return Object(r(t))}},function(t,n){t.exports={}},function(t,n,e){var r=e(61),o=e(93),i=e(80),c=e(79)("IE_PROTO"),s=function(){},u=function(){var t,n=e(75)("iframe"),r=i.length;for(n.style.display="none",e(94).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[i[r]];return u()};t.exports=Object.create||function(t,n){var e;return null!==t?(s.prototype=r(t),e=new s,s.prototype=null,e[c]=t):e=u(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(65),o=e(61),i=e(84);t.exports=e(57)?Object.defineProperties:function(t,n){o(t);for(var e,c=i(n),s=c.length,u=0;s>u;)r.f(t,e=c[u++],n[e]);return t}},function(t,n,e){var r=e(56).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(72);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(60);t.exports=function(t,n){return!!t&&r((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},function(t,n,e){var r=e(64)("unscopables"),o=Array.prototype;null==o[r]&&e(59)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n,e){var r=e(65).f,o=e(62),i=e(64)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(74),o=e(81),i=e(90),c=e(78),s=e(100);t.exports=function(t,n){var e=1==t,u=2==t,a=3==t,f=4==t,v=6==t,l=5==t||v,p=n||s;return function(n,s,d){for(var _,h,y=i(n),m=o(y),x=r(s,d,3),g=c(m.length),C=0,b=e?p(n,g):u?p(n,0):void 0;g>C;C++)if((l||C in m)&&(h=x(_=m[C],C,y),t))if(e)b[C]=h;else if(h)switch(t){case 3:return!0;case 5:return _;case 6:return C;case 2:b.push(_)}else if(f)return!1;return v?-1:a||f?f:b}}},function(t,n,e){var r=e(101);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(58),o=e(95),i=e(64)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},,,,,function(t,n,e){for(var r=e(107),o=e(84),i=e(71),c=e(56),s=e(59),u=e(91),a=e(64),f=a("iterator"),v=a("toStringTag"),l=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(p),_=0;_<d.length;_++){var h,y=d[_],m=p[y],x=c[y],g=x&&x.prototype;if(g&&(g[f]||s(g,f,l),g[v]||s(g,v,y),u[y]=l,m))for(h in r)g[h]||i(g,h,r[h],!0)}},function(t,n,e){"use strict";var r=e(97),o=e(108),i=e(91),c=e(66);t.exports=e(109)(Array,"Array",(function(t,n){this._t=c(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r=e(82),o=e(68),i=e(71),c=e(59),s=e(91),u=e(110),a=e(98),f=e(111),v=e(64)("iterator"),l=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,n,e,d,_,h,y){u(e,n,d);var m,x,g,C=function(t){if(!l&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},b=n+" Iterator",S="values"==_,w=!1,O=t.prototype,j=O[v]||O["@@iterator"]||_&&O[_],L=j||C(_),k=_?S?C("entries"):L:void 0,T="Array"==n&&O.entries||j;if(T&&(g=f(T.call(new t)))!==Object.prototype&&g.next&&(a(g,b,!0),r||"function"==typeof g[v]||c(g,v,p)),S&&j&&"values"!==j.name&&(w=!0,L=function(){return j.call(this)}),r&&!y||!l&&!w&&O[v]||c(O,v,L),s[n]=L,s[b]=p,_)if(m={values:S?L:C("values"),keys:h?L:C("keys"),entries:k},y)for(x in m)x in O||i(O,x,m[x]);else o(o.P+o.F*(l||w),n,m);return m}},function(t,n,e){"use strict";var r=e(92),o=e(77),i=e(98),c={};e(59)(c,e(64)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(c,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(62),o=e(90),i=e(79)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},,,function(t,n,e){},,,,,,,,,,,,,,,,,,function(t,n,e){var r=e(90),o=e(84);e(133)("keys",(function(){return function(t){return o(r(t))}}))},function(t,n,e){var r=e(68),o=e(63),i=e(60);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],c={};c[t]=n(e),r(r.S+r.F*i((function(){e(1)})),"Object",c)}},function(t,n,e){"use strict";var r=e(68),o=e(99)(1);r(r.P+r.F*!e(96)([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(114);e.n(r).a},,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(106),e(132),e(134);var r={data:function(){return{header:{author:"",contact:[],interest:"",dob:"",city:""},education:{name:"",content:[]},honor:{name:"",content:[]},experience:{name:"",content:[]},coding:{name:"",content:[]}}},mounted:function(){var t=this;Object.keys(this.$frontmatter.content).map((function(n){t[n]=t.$frontmatter.content[n]}))}},o=(e(135),e(2)),i=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cv"},[e("Header"),t._v(" "),e("div",{staticClass:"page cv-content"},[e("div",{staticClass:"cv-header cv-two-column cv-section"},[e("div",{staticClass:"cv-info"},[e("div",{staticClass:"cv-author"},[t._v(t._s(t.header.author))]),t._v(" "),t._l(t.header.contact,(function(n,r){return e("div",{staticClass:"cv-contact"},[t._v(t._s(n))])}))],2),t._v(" "),e("div",{staticClass:"cv-sub-info cv-right-column"},[e("div",{staticClass:"cv-research-interest"},[t._v(t._s(t.header.interest))]),t._v(" "),e("div",{staticClass:"cv-dob"},[t._v("DOB: "+t._s(t.header.dob))]),t._v(" "),e("div",{staticClass:"cv-city"},[t._v(t._s(t.header.city))])])]),t._v(" "),e("div",{staticClass:"cv-two-column"},[e("div",{staticClass:"cv-section education cv-left-column"},[e("div",{staticClass:"cv-section-title"},[t._v(t._s(t.education.name))]),t._v(" "),t._l(t.education.content,(function(n,r){return e("div",[e("div",{staticClass:"cv-two-column"},[e("div",{staticClass:"cv-left-column cv-school"},[t._v(t._s(n.degree)+", "+t._s(n.school))]),t._v(" "),e("div",{staticClass:"cv-right-column cv-time-range"},[t._v(t._s(n.time))])]),t._v(" "),e("div",{staticClass:"cv-major"},[t._v(t._s(n.major))])])}))],2),t._v(" "),e("div",{staticClass:"cv-section honor cv-right-column"},[e("div",{staticClass:"cv-section-title"},[t._v(t._s(t.honor.name))]),t._v(" "),t._l(t.honor.content,(function(n,r){return e("div",{staticClass:"cv-two-column"},[e("div",{staticClass:"cv-left-column cv-honor"},[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"cv-right-column cv-time-range"},[t._v(t._s(n.time))])])}))],2)]),t._v(" "),e("div",{staticClass:"cv-section experience"},[e("div",{staticClass:"cv-section-title"},[t._v(t._s(t.experience.name))]),t._v(" "),e("ul",{staticClass:"cv-experience-list"},t._l(t.experience.content,(function(n,r){return e("li",{staticClass:"cv-experience-item"},[e("div",{staticClass:"cv-two-column cv-experience-header"},[e("div",{staticClass:"cv-left-column cv-experience-title"},[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"cv-right-column cv-time-range"},[t._v(t._s(n.time))])]),t._v(" "),e("ul",{staticClass:"cv-experience-sub-item"},t._l(n.content,(function(n){return e("li",{staticClass:"cv-li"},[t._v(t._s(n))])})),0)])})),0)]),t._v(" "),e("div",{staticClass:"cv-section coding"},[e("div",{staticClass:"cv-section-title"},[t._v(t._s(t.coding.name))]),t._v(" "),t._l(t.coding.content,(function(n,r){return e("div",{staticClass:"cv-coding-item"},[e("div",{staticClass:"cv-two-column"},[e("div",{staticClass:"cv-left-column cv-coding-title"},[e("a",{staticClass:"cv-coding-link",attrs:{href:n.link}},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"cv-coding-language"},[t._v(t._s(n.info))])]),t._v(" "),e("div",{staticClass:"cv-right-column cv-time-range"},[t._v(t._s(n.time))])]),t._v(" "),e("div",{staticClass:"cv-coding-desc"},[t._v(t._s(n.desc))])])}))],2)]),t._v(" "),e("Footer")],1)}),[],!1,null,"cd746dcc",null);n.default=i.exports}])]);