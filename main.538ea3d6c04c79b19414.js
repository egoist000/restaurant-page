(()=>{var t={659:(t,e,n)=>{var i={"./akagai.jpg":95,"./akami.jpg":665,"./amaebi.jpg":324,"./anago.jpg":84,"./ebi-nigiri.jpg":671,"./ika-nigiri.jpg":625,"./iwashi.jpg":821,"./maguro-nigiri.jpg":146,"./saba.jpg":136,"./salmon-roe.jpg":969,"./tako.jpg":196,"./tamagoyaki.jpg":924,"./tekkamaki.jpg":107,"./toro.jpg":49,"./uni.jpg":203};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id=659},356:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/1f363.svg"},871:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/chevanon-photography.jpg"},683:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/emmanuel-zua.jpg"},350:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/rajesh-tp.jpg"},95:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/akagai.jpg"},665:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/akami.jpg"},324:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/amaebi.jpg"},84:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/anago.jpg"},671:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/ebi-nigiri.jpg"},625:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/ika-nigiri.jpg"},821:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/iwashi.jpg"},146:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/maguro-nigiri.jpg"},136:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/saba.jpg"},969:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/salmon-roe.jpg"},196:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/tako.jpg"},924:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/tamagoyaki.jpg"},107:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/tekkamaki.jpg"},49:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/toro.jpg"},203:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/uni.jpg"},22:(t,e,n)=>{"use strict";t.exports=n.p+"./imgs/valeria-boltneva.jpg"}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";function t(t,e=1){if(e>=1&&e<=4){const n=document.createElement(`h${e}`);return n.textContent=t,n}throw console.log("header size!"),Error}function e(t){const e=document.createElement("p");return e.textContent=t,e}function i(t,e="",n=""){const i=document.createElement("img");return i.src=t,i.alt=e,""!==n&&i.classList.add(n),i}function s(t,e,n){const i=document.createElement("li");i.setAttribute("id",e),i.classList.add("nav-item"),i.textContent=t;const s=document.createElement("i");return s.classList.add("fas",`fa-${n}`),i.appendChild(s),i}var a=n(356);function o(){const t=document.createElement("div");t.setAttribute("id","footer");const e=document.createElement("i");e.classList.add("fab","fa-github-alt");const n=document.createElement("span");n.textContent="GitHub: ";const i=document.createElement("a");return i.href="https://github.com/egoist000",i.textContent="egoist000",t.appendChild(e),t.appendChild(n),t.appendChild(i),t}const c=[{imgsrc:"./imgs/maguro-nigiri.jpg",alt:"maguro-nigiri",name:"Maguro nigiri",description:"Lean tuna sushi"},{imgsrc:"./imgs/ika-nigiri.jpg",alt:"ika-nigiri",name:"Ika nigiri",description:"Squid sushi"},{imgsrc:"./imgs/salmon-roe.jpg",alt:"salmon-roe",name:"Salmon roe",description:"Salmon eggs"},{imgsrc:"./imgs/saba.jpg",alt:"saba",name:"Saba",description:"Mackerel"},{imgsrc:"./imgs/toro.jpg",alt:"toro",name:"Toro",description:"Fatty bluefin tuna"},{imgsrc:"./imgs/uni.jpg",alt:"uni",name:"Uni",description:"Sea urchin gonads"},{imgsrc:"./imgs/akami.jpg",alt:"akami",name:"Akami",description:"Bluefin tuna loin"},{imgsrc:"./imgs/iwashi.jpg",alt:"iwashi",name:"Iwashi",description:"Sardine"},{imgsrc:"./imgs/amaebi.jpg",alt:"amaebi",name:"Amaebi",description:"Raw sweet shrimp"},{imgsrc:"./imgs/ebi-nigiri.jpg",alt:"ebi-nigiri",name:"Ebi nigiri",description:"Broiled shrimp"},{imgsrc:"./imgs/akagai.jpg",alt:"akagai",name:"Akagai",description:"Ark shell"},{imgsrc:"./imgs/tako.jpg",alt:"tako",name:"Tako",description:"Octopus"}];var r;function d(){const n=document.createElement("div");return n.setAttribute("id","sushi-list"),c.forEach((s=>{const a=function(n,s,a,o){const c=document.createElement("div");c.classList.add("sushi-card");const r=function(t,e){const n=document.createElement("div");n.classList.add("card-img");const s=i(t,e);return n.appendChild(s),n}(n,s),d=function(n,i){const s=document.createElement("div");s.classList.add("card-details");const a=t(n,2),o=e(i);return s.appendChild(a),s.appendChild(o),s}(a,o);return c.appendChild(r),c.appendChild(d),c}(s.imgsrc,s.alt,s.name,s.description);n.appendChild(a)})),n}(r=n(659)).keys().forEach(r);let p;function l(){clearTimeout(p)}function u(e,n){const i=document.createElement("div");i.classList.add("contact-info");const s=t(`${e}: `,2),a=document.createElement("span");return a.textContent=n,s.appendChild(a),i.appendChild(s),i}function m(t){const e=document.createElement("a");e.href="http://",e.target="_blank",e.rel="noopener noreferrer";const n=document.createElement("i");return n.classList.add("fa-brands",`fa-${t}`),e.appendChild(n),e}const g=function(){const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("div");n.classList.add("content-bg");const s=C(),c=o(),r=function(){const e=document.createElement("div");e.setAttribute("id","main");const n=function(){const e=document.createElement("div");e.classList.add("contact");const n=function(){const t=document.createElement("div");t.classList.add("logo");const e=i(a,"sushi-logo");return t.appendChild(e),t}(),s=document.createElement("div");s.setAttribute("id","contact-title");const o=t("Contact us",2);s.appendChild(o);const c=u("Telephone","646-658-2667"),r=u("Email","oishii@example.com"),d=u("Address","497 Purple Finch Street Brooklyn, NY 11228"),p=function(){const t=document.createElement("div");t.classList.add("social-medias","fa-lg");const e=m("instagram"),n=m("facebook"),i=m("twitter"),s=m("tiktok");return t.appendChild(e),t.appendChild(n),t.appendChild(i),t.appendChild(s),t}();return e.appendChild(n),e.appendChild(s),e.appendChild(c),e.appendChild(r),e.appendChild(d),e.appendChild(p),e}();return e.appendChild(n),e}();n.appendChild(s),n.appendChild(r),e.appendChild(n),e.appendChild(c),document.getElementById("contact").classList.add("active")};function h(){document.querySelectorAll(".nav-item").forEach((t=>{t.classList.remove("active")}))}function f(){const e=document.createElement("div");e.classList.add("header-content");const n=function(){const e=document.createElement("div");e.classList.add("header-logo");const n=i(a,"sushi-emoji"),s=t("Oishii");return e.appendChild(n),e.appendChild(s),e}(),c=function(){const t=document.createElement("ul");t.classList.add("nav");const e=s("Menu","menu","fish"),n=s("Home","home","home"),i=s("Contact","contact","address-book");return e.addEventListener("click",(t=>{t.target.classList.contains("active")||(h(),l(),function(){const t=document.getElementById("content");t.innerHTML="";const e=function(){const t=document.createElement("div");t.classList.add("menu-bg");const e=C(),n=d();return t.appendChild(e),t.appendChild(n),t}(),n=o();t.appendChild(e),t.appendChild(n),document.getElementById("menu").classList.add("active")}())})),n.addEventListener("click",(t=>{t.target.classList.contains("active")||(h(),k())})),i.addEventListener("click",(t=>{t.target.classList.contains("active")||(h(),l(),g())})),t.appendChild(e),t.appendChild(n),t.appendChild(i),t}();return e.appendChild(n),e.appendChild(c),e}function C(){const t=document.createElement("div");return t.setAttribute("id","header"),t.appendChild(f()),t}var v=n(22),E=n(683),j=n(350),b=n(871);const k=function(){const n=document.getElementById("content");n.innerHTML="";const s=function(){const n=document.createElement("div");n.setAttribute("id","slideshow");const s=C(),a=function(){const t=document.createElement("div");t.classList.add("slides-container");const e=i(v,"Valeria Boltneva sushi photo","slide"),n=i(b,"Chevanon Photography sushi photo","slide"),s=i(j,"Rajesh Tp sushi photo","slide");return t.appendChild(e),t.appendChild(n),t.appendChild(s),t}(),o=function(){const n=document.createElement("div");n.classList.add("slideshow-text");const i=t("Welcome to Oishii!"),s=e("Authentic Japanese Restaurant");return n.appendChild(i),n.appendChild(s),n}();return n.appendChild(s),n.appendChild(a),n.appendChild(o),n}(),a=function(){const n=document.createElement("div");n.setAttribute("id","about");const s=function(){const n=document.createElement("div");n.classList.add("about-text");const i=t("About us"),s=e("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eos iusto eveniet tenetur. A sequi sunt ipsa fugit sit, enim ducimus omnis! Iusto facilis facere pariatur quas aliquam atque quaerat!");return n.appendChild(i),n.appendChild(s),n}(),a=function(){const t=document.createElement("div");t.classList.add("about-img");const e=i(E,"Emmanuel Zua");return t.appendChild(e),t}();return n.appendChild(s),n.appendChild(a),n}(),c=o();n.appendChild(s),n.appendChild(a),n.appendChild(c),document.getElementById("home").classList.add("active"),function(){let t=0;const e=document.getElementsByClassName("slide");!function n(){t++,t>e.length&&(t=1),e[t-1].classList.add("active"),p=setTimeout((()=>{void 0!==e[t-1]&&(e[t-1].classList.remove("active"),setTimeout(n,500))}),5e3)}()}()};k()})()})();
//# sourceMappingURL=main.538ea3d6c04c79b19414.js.map