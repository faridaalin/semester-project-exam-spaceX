!function(){var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire144b,a=n("5syIe"),o=n("nxRCk"),e=n("5zJWM"),s=n("5vDnh"),c=n("1hLt4"),i=n("1XSsE");c(),e(),a(),s(),o();s();const t=(n,a)=>{const o=document.querySelector(a);let e=Intl.DateTimeFormat(navigator.language,{year:"numeric",month:"short",day:"numeric"}).format(new Date(n.launch_date_local));o.innerHTML+=`\n\n    <div class="container">\n      <div class="launches_container">\n\n          <div class="info-container heading">\n            <p class="info__name">Launch Date</p>\n            <p class="info__name">Rocket Name</p>\n            <p class=" info__name">Launch Pad</p>\n            <p class="info__name">Mission Name</p>\n          </div>\n          <div class="info-container upcoming">\n        <p class="info__text">${e}</p>\n        <p class="info__text">${n.rocket.rocket_name}</p>\n        <p class="info__text">${n.launch_site.site_name}</p>\n        <a class="info__text">${n.mission_name}</a>\n           </div>\n\n      </div>\n    <hr class="hr-break">\n  </div>`};function l(n,a,o){const e=n.filter((n=>n.location.region===a)),s=document.querySelector(o);e.forEach((n=>{let a=n.status[0].toUpperCase()+n.status.slice(1);s.innerHTML+=`\n    <div class="launches_container location_container locations-pads">\n    <div class="info-container">\n      <p class="info__name">${n.location.name}:</p>\n      <p class="info__text">${n.name}</p>\n    </div>\n\n    <div class="info-container">\n      <p class="info__name">Status:</p>\n      <p class="info__text">${a}</p>\n    </div>\n\n    <div class="info-container">\n      <p class="info__name">Location Description:</p>\n      <p class="info__text">${n.details}</p>\n    </div>\n\n    <hr class="hr-break">\n  </div>`}))}i(),i().default(),o().countDownTimer(),a().toggleAccordion(),a().menu(),(()=>{const n=document.querySelector(".scroll-up");window.addEventListener("scroll",(()=>{window.pageYOffset>100?n.classList.add("active"):n.classList.remove("active")})),n.addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})})),(()=>{const n=document.querySelector(".scroll-indicator");n&&window.scrollY<200&&n.classList.add("show")})()})(),c().default(s().storage.PREVIOUS_LAUNCH,(function(n){n.launchesPast.forEach((n=>{t(n,".previous-launches-container")}))}),e().launch),c().default(s().storage.UPCOMING_LAUNCH,(function(n){n.launchesUpcoming.forEach((n=>{t(n,".upcoming-launches-container")}))}),e().launch),c().default(s().storage.PAD_LOCATIONS,(function(n){l(n.launchpads,s().locations.CALIFORNIA,".location-launches__info__ca"),l(n.launchpads,s().locations.FLORIDA,".location-launches__info__fl"),l(n.launchpads,s().locations.TEXAS,".location-launches__info__tx"),l(n.launchpads,s().locations.MI,".location-launches__info__mi")}),e().launchpads)}();
//# sourceMappingURL=launches.a5767e42.js.map