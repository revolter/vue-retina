!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueRetina",[],t):"object"==typeof exports?exports.VueRetina=t():e.VueRetina=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=void 0,o={inserted:function(e,t){e.setAttribute("data-rjs",t.value||2),n&&n([e])},update:function(e,t,r,o){var a=r.data.attrs&&r.data.attrs.src,u=r.data.attrs&&o.data.attrs.src;t.value===t.oldValue&&a===u||(e.setAttribute("data-rjs",t.value||2),e.removeAttribute("data-rjs-processed"),n&&n([e]))}};t.default=function(e,t){if(n=e.retina=t.retina,!e.retina)return void console.error("vue-retina need retina");e.directive("rjs",o),e.directive("retina",o)}}])});