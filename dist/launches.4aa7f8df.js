parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"shfd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.accordion=exports.menu=void 0;const e=()=>{const e=document.querySelector(".hamburger"),t=document.querySelector(".menu");e.addEventListener("click",function(e){e.currentTarget.classList.toggle("open"),t.classList.toggle("dropdown")})};exports.menu=e;const t=()=>{function e(e){e.currentTarget.classList.toggle("active")}document.querySelectorAll(".accordion_btn").forEach(t=>{t.addEventListener("click",e)})};exports.accordion=t;
},{}],"FxBD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.storage=exports.default=void 0;const t={NEXT_LAUNCH:"https://api.spacexdata.com/v3/launches/next",UPCOMING_LAUNCH:"https://api.spacexdata.com/v3/launches/upcoming",PREVIOUS_LAUNCH:"https://api.spacexdata.com/v3/launches/past",PAD_LOCATIONS:"https://api.spacexdata.com/v3/launchpads",ROCKETS:"https://api.spacexdata.com/v3/rockets"};var a=t;exports.default=a;const s={NEXT_LAUNCH:"NEXT_LAUNCH",UPCOMING_LAUNCH:"UPCOMING_LAUNCH",PREVIOUS_LAUNCH:"PREVIOUS_LAUNCH",PAD_LOCATIONS:"PAD_LOCATIONS",ROCKETS:"ROCKETS"};exports.storage=s;
},{}],"du3N":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchData=e;var t=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function s(t){try{u(o.next(t))}catch(e){i(e)}}function c(t){try{u(o.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(s,c)}u((o=o.apply(t,e||[])).next())})};function e(e,n){return t(this,void 0,void 0,function*(){let t=yield fetch(n);if(t.ok){const n=yield t.json();return sessionStorage.setItem(e,JSON.stringify(n)),n}throw new Error(`HTTP error! status: ${t.status}`)})}
},{}],"seNf":[function(require,module,exports) {
"use strict";function e(e){const t=e.launch_site.site_id;document.querySelectorAll(".area").forEach(e=>{if(e.parentElement){const i=e.parentElement.previousElementSibling;t===e.id&&i&&i.children[0].classList.add("active-location")}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.currentSiteLocation=e;
},{}],"uPlE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.countDownTimer=void 0;var e=require("./fetchData"),t=require("./currentSiteLocation");const o=(o,n)=>{const r=e=>{const t=e.launch_date_unix,o=document.querySelectorAll(".days"),n=document.querySelectorAll(".hours"),r=document.querySelectorAll(".min"),c=document.querySelectorAll(".sec"),a=document.querySelector(".inner-counter p");setInterval(()=>{const e=(new Date).getTime();if(t>e){const a=t-e;let l=Math.floor(a/1e3),u=Math.floor(l/60),i=Math.floor(u/60),s=Math.floor(i/24);i%=24,u%=60,l%=60,o.forEach(e=>e.innerHTML=`${s}`),n.forEach(e=>e.innerHTML=`${i<10?"0":""} ${i}`),r.forEach(e=>e.innerHTML=`${u<10?"0":""} ${u}`),c.forEach(e=>e.innerHTML=`${l<10?"0":""} ${l}`)}else o.forEach(e=>e.textContent="00"),n.forEach(e=>e.textContent="00"),r.forEach(e=>e.textContent="00"),c.forEach(e=>e.textContent="00"),a.textContent="Launch has ended"},1e3)},c=sessionStorage.getItem(o);c?(r(JSON.parse(c)),(0,t.currentSiteLocation)(JSON.parse(c))):(0,e.fetchData)(o,n).then(e=>{r(e),(0,t.currentSiteLocation)(e)}).catch(e=>console.log(e))};exports.countDownTimer=o;
},{"./fetchData":"du3N","./currentSiteLocation":"seNf"}],"s7L5":[function(require,module,exports) {
"use strict";var n=require("./script"),e=i(require("./config")),t=require("./countdown"),a=require("./fetchData");function o(){if("function"!=typeof WeakMap)return null;var n=new WeakMap;return o=function(){return n},n}function i(n){if(n&&n.__esModule)return n;if(null===n||"object"!=typeof n&&"function"!=typeof n)return{default:n};var e=o();if(e&&e.has(n))return e.get(n);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var c=a?Object.getOwnPropertyDescriptor(n,i):null;c&&(c.get||c.set)?Object.defineProperty(t,i,c):t[i]=n[i]}return t.default=n,e&&e.set(n,t),t}window.addEventListener("load",()=>{document.querySelector(".loader-container").className+=" hidden"}),(0,t.countDownTimer)(e.storage.NEXT_LAUNCH,e.default.NEXT_LAUNCH),(0,n.accordion)(),(0,n.menu)();const c=(n,e,t)=>{const o=sessionStorage.getItem(n);o?t(JSON.parse(o)):(0,a.fetchData)(n,e).then(n=>{t(n)}).catch(n=>console.log(n))};function s(n){const e=document.querySelector(".upcoming-launches-container");n.forEach(n=>{let t=new Date(n.launch_date_local),a=t.getDate(),o=t.getMonth()+1;a=a<10?"0"+a:a,o=o<10?"0"+o:o,e.innerHTML+=`\n    <div class="container">\n      <div class="launches_container">\n\n          <div class="info-container heading">\n            <p class="info__name">Launch Date</p>\n            <p class="info__name">Rocket Name</p>\n            <p class=" info__name">Launch Pad</p>\n            <p class="info__name">Flight Number</p>\n          </div>\n          <div class="info-container upcoming">\n        <p class="info__text">${n.launch_year}-${o}-${a}</p>\n        <p class="info__text">${n.rocket.rocket_name}</p>\n        <p class="info__text">${n.launch_site.site_name}</p>\n        <p class="info__text highlighted">9${n.flight_number}</p>\n           </div>\n\n      </div>\n    <hr class="hr-break">\n  </div>`})}function r(n){const e=document.querySelector(".previous-launches-container");n.forEach(n=>{let t=new Date(n.launch_date_local),a=t.getDate(),o=t.getMonth()+1;a=a<10?"0"+a:a,o=o<10?"0"+o:o,e.innerHTML+=`  <div class="container">\n    <div class="launches_container">\n\n        <div class="info-container heading">\n          <p class="info__name">Launch Date</p>\n          <p class="info__name">Rocket Name</p>\n          <p class=" info__name">Launch Pad</p>\n          <p class="info__name">Flight Number</p>\n        </div>\n        <div class="info-container upcoming">\n      <p class="info__text">${n.launch_year}-${o}-${a}</p>\n      <p class="info__text">${n.rocket.rocket_name}</p>\n      <p class="info__text">${n.launch_site.site_name}</p>\n      <p class="info__text highlighted">9${n.flight_number}</p>\n         </div>\n\n    </div>\n  <hr class="hr-break">\n</div>`})}function l(n){const e=n.filter(function(n){return"California"===n.location.region}),t=n.filter(function(n){return"Florida"===n.location.region}),a=n.filter(function(n){return"Texas"===n.location.region}),o=n.filter(function(n){return"Marshall Islands"===n.location.region}),i=document.querySelector(".location-launches__info__ca"),c=document.querySelector(".location-launches__info__fl"),s=document.querySelector(".location-launches__info__tx"),r=document.querySelector(".location-launches__info__mi");u(e,i),u(t,c),u(a,s),u(o,r)}function u(n,e){n.forEach(n=>{let t=n.status[0].toUpperCase()+n.status.slice(1);e.innerHTML+=`\n    <div class="launches_container location_container locations-pads">\n    <div class="info-container">\n      <p class="info__name">${n.name}:</p>\n      <p class="info__text">${n.site_name_long}</p>\n    </div>\n\n    <div class="info-container">\n      <p class="info__name">Status:</p>\n      <p class="info__text">${t}</p>\n    </div>\n\n    <div class="info-container">\n      <p class="info__name">Location Description:</p>\n      <p class="info__text">${n.details}</p>\n    </div>\n\n    <hr class="hr-break">\n  </div>`})}c(e.storage.UPCOMING_LAUNCH,e.default.UPCOMING_LAUNCH,s),c(e.storage.PREVIOUS_LAUNCH,e.default.PREVIOUS_LAUNCH,r),c(e.storage.PAD_LOCATIONS,e.default.PAD_LOCATIONS,l);const _=document.querySelector(".scroll-up");function f(){window.scrollTo({top:0,left:0,behavior:"smooth"})}window.addEventListener("scroll",()=>{window.pageYOffset>100?_.classList.add("active"):_.classList.remove("active")}),_.addEventListener("click",f);
},{"./script":"shfd","./config":"FxBD","./countdown":"uPlE","./fetchData":"du3N"}]},{},["s7L5"], null)
//# sourceMappingURL=/launches.4aa7f8df.js.map