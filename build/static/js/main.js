!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("styled-components"),require("randomcolor")):"function"==typeof define&&define.amd?define(["react","styled-components","randomcolor"],r):"object"==typeof exports?exports["jelly-beans"]=r(require("react"),require("styled-components"),require("randomcolor")):e["jelly-beans"]=r(e.react,e["styled-components"],e.randomcolor)}(this,(function(e,r,t){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/%3C%=%20homepageUrl%20%%3E/",t(t.s=6)}([function(r,t){r.exports=e},function(e,r,t){e.exports=t(4)()},function(e,t){e.exports=r},function(e,r){e.exports=t},function(e,r,t){"use strict";var n=t(5);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,r,t,a,o,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},function(e,r,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,r,t){"use strict";t.r(r),t.d(r,"ColorVariations",(function(){return n})),t.d(r,"JellyBeans",(function(){return W}));var n={};t.r(n),t.d(n,"BUCKEYES",(function(){return a})),t.d(n,"CHICLET",(function(){return o})),t.d(n,"CHOCOLATE",(function(){return i})),t.d(n,"COTTON_CANDY",(function(){return c})),t.d(n,"GREEN_TEA",(function(){return s})),t.d(n,"HALLMARK",(function(){return u})),t.d(n,"LEGO",(function(){return l})),t.d(n,"MONOKAI",(function(){return f})),t.d(n,"MURRICA",(function(){return d})),t.d(n,"NEON",(function(){return p})),t.d(n,"OLD_NAVY",(function(){return b})),t.d(n,"ORANGE_SLICE",(function(){return y})),t.d(n,"OZ",(function(){return m})),t.d(n,"RAD",(function(){return g})),t.d(n,"SEASCAPE",(function(){return h})),t.d(n,"SOLARIZED_DARK",(function(){return O}));var a=["#555555","#8d99ae","#edf2f4","#ef233c","#d80032"],o=["#fe7708","#1e7b3d","#faf70a","#fa7797","#b23f42","#f9f9f9"],i=["#6f1d1b","#bb9457","#432818","#99582a","#ffe6a7"],c=["#826aed","#c879ff","#ffb7ff","#3bf4fb","#caff8a"],s=["#d8f3dc","#b7e4c7","#95d5b2","#74c69d","#52b788","#40916c","#2d6a4f","#1b4332"],u=["#F7EF08","#08F778","#0810F7","#F70887"],l=["#005eff","#ffdb00","#0fa911","#ff0000"],f=["#75715E","#F92672","#FD971F","#E69F66","#E6DB74","#A6E22E","#66D9EF","#AE81FF"],d=["#d90429","#edf2f4","#3a86ff"],p=["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"],b=["#29339b","#74a4bc","#b6d6cc","#f1fec6","#ff3a20"],y=["#ff8d00","#ffc454","#ffdb00","#eab100"],m=["#363537","#ef2d56","#ed7d3a","#8cd867","#2fbf71"],g=["#2d00f7","#6a00f4","#8900f2","#a100f2","#b100e8","#bc00dd","#d100d1","#db00b6","#e500a4","#f20089"],h=["#05668d","#028090","#00a896","#02c39a","#f0f3bd"],O=["#b58900","#cb4b16","#d30102","#d33682","#6c71c4","#268bd2","#2aa198","#859900"];function E(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function R(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}}(e,r)||function(e,r){if(e){if("string"==typeof e)return E(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var S=t(0),v=t.n(S),A=(e,r,t)=>t<e?e:t>r?r:t,j=t(3),I=t.n(j),w=e=>[...new Array(e)],x=e=>w(e).map(()=>I()()),z=t(2),L=t.n(z),T="jelly-beans",P=e=>"--".concat(T,"-").concat(e),_=e=>"var(".concat(P(e),")"),k={GRAYSCALE:P("grayscale"),RTL:P("rtl")},q={GRAYSCALE:_("grayscale"),RTL:_("rtl")},F=L.a.div.withConfig({displayName:"Container",componentId:"sc-1bx1t2b-0"})(["",":",";",":",";direction:",";display:inline-block;filter:grayscale(calc("," * 1%));height:100%;overflow-x:hidden;user-select:none;width:100%;"],k.GRAYSCALE,({isGrayscale:e})=>e?100:0,k.RTL,({isRtl:e})=>e?"rtl":"inherit",q.RTL,q.GRAYSCALE),D=t(1),Z={SIZE:P("size")},G={SIZE:_("size")},N=L.a.p.withConfig({displayName:"Paragraph",componentId:"sc-8xh4rr-0"})(["",":",";line-height:calc("," * 1.5rem);margin-block-end:0;margin-block-start:calc("," * 1.5rem);text-align:",";&:first-child{margin-block-end:0;margin-block-start:0;}"],Z.SIZE,({size:e})=>e,G.SIZE,G.SIZE,({isCentered:e})=>e?"center":"start"),M=[2,3,4,4,4,4,5,6,6,6,6,7,7,9,9,11,13,15],U={COLOR:P("color"),RADIUS:P("radius"),SIZE:P("size")},B={COLOR:_("color"),RADIUS:_("radius"),SIZE:_("size")},V=L.a.span.withConfig({displayName:"Bean",componentId:"sc-1hbca7i-0"})(["",":",";",":",";",":",";border-radius:calc(("," / 100) * 0.5 * "," * 1rem);background-color:",";color:",";display:inline;font-family:monospace;font-size:calc("," * 1rem);margin-inline-end:calc("," * 0.25rem);margin-block-start:calc("," * 0.25rem);max-width:100%;overflow-x:hidden;width:auto;"],U.COLOR,({color:e})=>e,U.RADIUS,({radius:e})=>e,U.SIZE,({size:e})=>e,({radius:e})=>e,({size:e})=>e,B.COLOR,B.COLOR,B.SIZE,B.SIZE,B.SIZE),Y=()=>{return M[(e=0,r=M.length,parseInt("".concat(Math.random()*(r-e)+e),10))];var e,r},H=({backgroundColor:e,length:r,radius:t,size:n})=>{var a=R(Object(S.useState)(r||Y()),2),o=a[0],i=a[1],c=R(Object(S.useState)(w(o).fill("·")),1)[0];return Object(S.useEffect)(()=>{i(r||Y())},[r]),v.a.createElement(V,{color:e,radius:t,size:n},c," ")};H.defaultProps={length:void 0};var K=({count:e,lengths:r,isCentered:t,palette:n,paragraphs:a,radius:o,size:i})=>{var c=parseInt("".concat(e/a),10),s=e-c*a,u=R(Object(S.useState)(w(a)),2),l=u[0],f=u[1],d=R(Object(S.useState)(w(c)),2),p=d[0],b=d[1];return Object(S.useEffect)(()=>f(w(a)),[a]),Object(S.useEffect)(()=>b(w(c)),[c]),v.a.createElement(v.a.Fragment,null,l.map((e,a)=>v.a.createElement(N,{isCentered:t,key:"p".concat(a),size:i},p.map((e,t)=>v.a.createElement(H,{backgroundColor:n[t%n.length],key:"p".concat(a,"-w").concat(t),length:r?r[t%r.length]:void 0,radius:o,size:i})),a<s&&v.a.createElement(H,{backgroundColor:n[c%n.length],key:"p".concat(a,"-w").concat(c),length:r?r[c%r.length]:void 0,radius:o,size:i}))))};K.protoTypes={count:D.number.isRequired,lengths:Object(D.arrayOf)(D.number.isRequired),isCentered:D.bool,palette:Object(D.arrayOf)(D.string.isRequired).isRequired,paragraphs:D.number.isRequired,radius:D.number.isRequired,size:D.number.isRequired},K.defaultProps={lengths:void 0};var W=e=>{var r=e.colorVariations,t=e.isCentered,n=e.isGrayscale,a=e.isRtl,o=e.onPaletteChange,i=e.paragraphs,c=e.size,s=e.beanRadius,u=e.beans,l=C(e,["colorVariations","isCentered","isGrayscale","isRtl","onPaletteChange","paragraphs","size","beanRadius","beans"]),f=(({colorVariations:e,paragraphs:r,size:t,wordRadius:n,words:a})=>{var o=Array.isArray(a)?a.length:a,i=Array.isArray(a)?a:[],c=A(.1,10,t),s=A(1,100,n),u=A(1,100,r),l=A(1,20,e);return{count:o,colorCount:l,lengths:i,palette:Array.isArray(e)?e:x(l),paragraphs:u,size:c,words:a,wordRadius:s}})({colorVariations:r,paragraphs:i,size:c,wordRadius:s,words:u}),d=f.count,p=f.colorCount,b=f.lengths,y=f.palette,m=f.paragraphs,g=f.size,h=f.wordRadius,O=Boolean(t),E=Boolean(n),j=Boolean(a),I=R(Object(S.useState)(y),2),w=I[0],z=I[1];return Object(S.useEffect)(()=>{z(Array.isArray(r)?r:x(p))},[p,r]),Object(S.useEffect)(()=>o(w),[o,w]),v.a.createElement(F,Object.assign({},l,{isGrayscale:E,isRtl:j}),v.a.createElement(K,{count:d,lengths:b,isCentered:O,palette:w,paragraphs:m,size:g,radius:h}))};W.defaultProps={colorVariations:3,isCentered:!1,isGrayscale:!1,isRtl:!1,onPaletteChange:()=>{},paragraphs:1,size:1,beanRadius:100,beans:25}}])}));
//# sourceMappingURL=main.js.map