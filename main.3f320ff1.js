parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=e(t))){var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,u=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==o.return||o.return()}finally{if(a)throw i}}}}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var r=document.querySelector(".textarea"),o=document.querySelector(".message"),i=document.querySelector(".button"),u=document.querySelector(".notification"),a=document.querySelector(".delete");function c(e){var n,r=e.split(" ").map(function(t){var e=t.split("").filter(function(t){return t.toLowerCase()!==t.toUpperCase()}).join("");if(e)return e}).filter(function(t){return t}),o=[],i=t(r);try{for(i.s();!(n=i.n()).done;){var u,a=n.value,c=t(a);try{for(c.s();!(u=c.n()).done;){var l=u.value;if(!a.includes(l,a.indexOf(l)+1)){o.push(l);break}}}catch(s){c.e(s)}finally{c.f()}}}catch(s){i.e(s)}finally{i.f()}var f=o.find(function(t,e){return!o.includes(t,e+1)});return f?'Унікальний символ в цьому тексті: "'.concat(f,'"'):"Текст не містить унікального символу"}i.addEventListener("click",function(){r.value&&(o.textContent=c(r.value),u.style.display="block",r.value="")}),a.addEventListener("click",function(){u.style.display="none"});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3f320ff1.js.map