var p=e=>{throw TypeError(e)};var y=(e,t,r)=>t.has(e)||p("Cannot "+r);var l=(e,t,r)=>(y(e,t,"read from private field"),r?r.call(e):t.get(e)),u=(e,t,r)=>t.has(e)?p("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();var a,i;class b{constructor(){u(this,a,"cbbvEGI4A6Q7cSGEi3Xqg23Vkvb9pPby");u(this,i,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=1,this.pageSize=12,this.searchQuery=""}async fetchEvents(){const t=new URLSearchParams({apikey:l(this,a),keyword:this.searchQuery,page:this.page,size:this.pageSize}),r=`${l(this,i)}?${t}&classificationName=music&`,o=await fetch(r);if(!o.ok)throw new Error("Faild to fetch events");return o.json()}}a=new WeakMap,i=new WeakMap;function E(e){return e.map(r=>{var d,m,f;const o=((d=r.images[0])==null?void 0:d.url)||"/img/default-image.png",s=r.name||"No Name Available",n=r.dates.start.localDate||"Unknown Date",c=((f=(m=r._embedded)==null?void 0:m.venues[0])==null?void 0:f.name)||"Unknown Location",g=r.url||"#";return`
        <li class="cards__item">
        <img
          src="${o}"
          alt="${s}"
          class="cards__item__image"
        />
        <h2 class="cards__item__title">${s}</h2>
        <p class="cards__item__date">${n}</p>
        <a
          href="${g}"
          class="cards__item__location__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg class="cards__item__location__icon">
            <use href="/img/icons/symbol-defs.svg#icon-location"></use>
          </svg>
          ${c}</a
        >
      </li>
      `}).join("")}const h=document.querySelector(".cards__list"),L=document.querySelector(".header__form"),w=document.getElementById("searchQuery"),_=new b;v();L.addEventListener("submit",S);async function S(e){e.preventDefault(),_.searchQuery=w.value.trim(),A(),await v()}async function v(){var e;try{const r=((e=(await _.fetchEvents())._embedded)==null?void 0:e.events)||[],o=E(r);h.insertAdjacentHTML("beforeend",o)}catch(t){console.error("Error rendering events: ",t)}}function A(){h.innerHTML=""}
//# sourceMappingURL=index.js.map
