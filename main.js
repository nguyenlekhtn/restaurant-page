(()=>{"use strict";var t={499:(t,e,n)=>{t.exports=n.p+"7be948032d459d18b196.jpeg"},247:(t,e,n)=>{t.exports=n.p+"d0efcd4af925a9d18423.jpg"},848:(t,e,n)=>{t.exports=n.p+"f52f07819e9cd8f09566.jpg"}},e={};function n(c){var o=e[c];if(void 0!==o)return o.exports;var a=e[c]={exports:{}};return t[c](a,a.exports,n),a.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var c=e.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t=n(499);const e=function(){const e=document.getElementById("content"),n=document.createElement("h1");n.textContent="Le's Restaurant";const c=document.createElement("p");c.textContent="We are a small restaurant that you can eat and code at the same time. Our food will definitely make your brain fresh again. And guess what, you can have these ducks while eating";const o=document.createElement("img");o.setAttribute("src",t);const a=document.createElement("div");a.classList.add("imgCtn"),a.appendChild(o);const d=document.createElement("div");d.classList.add("textCtn"),d.appendChild(c);const s=document.createElement("div");s.classList.add("ctn"),s.appendChild(a),s.appendChild(d);const i=document.createElement("div");i.classList.add("container"),i.appendChild(s),e.appendChild(n),e.appendChild(i)};var c=n(247),o=n(848);function a(t,e){const n=document.createElement("div");n.classList.add("item");const c=document.createElement("img");return c.setAttribute("src",t),c.setAttribute("alt",e),n.appendChild(c),n}const d=document.querySelectorAll(".tabs button"),s=document.getElementById("content"),i={Home:e,Menu:function(){const t=document.getElementById("content"),e=document.createElement("div");e.classList.add("column-container");const n=document.createElement("h1");n.textContent="Menu",e.appendChild(n);const d=document.createElement("p");d.textContent="We deliver healthy dishes for your to have the best code ever",e.appendChild(d);const s=document.createElement("div");s.classList.add("menu");const i=a(c,"Com tam dish"),r=a(o,"Pizza");s.appendChild(i),s.appendChild(r),e.appendChild(s),t.appendChild(e)},Contact:function(){const t=document.getElementById("content"),e=document.createElement("h1");e.textContent="Contact us",t.appendChild(e);const n=document.createElement("div");n.classList.add("container");const c=document.createElement("div");c.classList.add("contact-box");const o={Address:"42 TQT Street, Distinct 3, HCM City, Viet Nam","Phone number":"0942xxxxxx",Email:"42@gmail.com"};for(const[t,e]of Object.entries(o)){const n=document.createElement("p");n.textContent=`${t}: ${e}`,c.appendChild(n)}n.appendChild(c),t.appendChild(n)}};d.forEach((t=>{t.addEventListener("click",(e=>{t.classList.contains("isActive")||(s.textContent="",d.forEach((t=>{t.classList.remove("isActive")})),function(t){t.classList.add("isActive")}(t),i[`${e.target.textContent}`]())}))})),e()})()})();