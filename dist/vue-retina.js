!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueRetina",[],t):"object"==typeof exports?exports.VueRetina=t():e.VueRetina=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t,n,r){var a=n?n.data.attrs&&n.data.attrs.src:0,i=r?r.data.attrs&&oldVnode.data.attrs.src:1;t.value===t.oldValue&&a===i||(e.setAttribute("data-rjs",t.value||2),e.removeAttribute("data-rjs-processed"),o&&(e._onload&&e.removeEventListener("load",e._onload),e._onload=function(){return o([e])},e.addEventListener("load",e._onload)))}Object.defineProperty(t,"__esModule",{value:!0});var o=void 0,a={inserted:function(e,t){r(e,t)},update:function(e,t,n,o){r(e,t,n,o)},unbind:function(e){e._onload&&e.removeEventListener("load",e._onload)}};t.default=function(e,t){if(o=e.retina=t.retina,!e.retina)return void console.error("vue-retina need retina");e.directive("rjs",a),e.directive("retina",a)}}])});