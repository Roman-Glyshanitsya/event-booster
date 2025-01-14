var h=e=>{throw TypeError(e)};var L=(e,t,r)=>t.has(e)||h("Cannot "+r);var d=(e,t,r)=>(L(e,t,"read from private field"),r?r.call(e):t.get(e)),m=(e,t,r)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();var l,u;class E{constructor(){m(this,l,"cbbvEGI4A6Q7cSGEi3Xqg23Vkvb9pPby");m(this,u,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=12,this.searchQuery=""}async fetchEvents(){const t=new URLSearchParams({apikey:d(this,l),keyword:this.searchQuery,page:this.page,size:this.pageSize}),r=`${d(this,u)}?${t}&classificationName=music`,o=await fetch(r);if(!o.ok)throw new Error("Faild to fetch events");return o.json()}}l=new WeakMap,u=new WeakMap;function w(e){return e.map(r=>{var p,g,_;const o=((p=r.images[0])==null?void 0:p.url)||"/img/default-image.png",n=r.name||"No Name Available",s=r.dates.start.localDate||"Unknown Date",a=((_=(g=r._embedded)==null?void 0:g.venues[0])==null?void 0:_.name)||"Unknown Location",c=r.url||"#";return`
        <li class="cards__item">
        <img
          src="${o}"
          alt="${n}"
          class="cards__item__image"
        />
        <h2 class="cards__item__title">${n}</h2>
        <p class="cards__item__date">${s}</p>
        <a
          href="${c}"
          class="cards__item__location__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg class="cards__item__location__icon">
            <use href="/img/icons/symbol-defs.svg#icon-location"></use>
          </svg>
          ${a}</a
        >
      </li>
      `}).join("")}function v(e,t,r){const o=document.querySelector(".cards__pagination-list");o.innerHTML="";let n="";for(let a=0;a<e;a++)n+=`
        <li class="pagination__item">
        <button class="pagination__button ${a===t?"active":""}" data-page="${a}">
        ${a+1}
        </button>
        </li>
        `;o.insertAdjacentHTML("beforeend",n),o.addEventListener("click",s);function s(a){if(a.target.tagName!=="BUTTON")return;const c=Number(a.target.dataset.page);c!==t&&r(c)}}console.log(v);const y=document.querySelector(".cards__list"),P=document.querySelector(".header__form"),k=document.getElementById("searchQuery"),i=new E;f();P.addEventListener("submit",S);async function S(e){e.preventDefault(),i.searchQuery=k.value.trim(),b(),await f()}async function f(){var e;try{const r=((e=(await i.fetchEvents())._embedded)==null?void 0:e.events)||[],o=w(r);y.insertAdjacentHTML("beforeend",o),v(i.totalPages,i.page,$)}catch(t){console.error("Error rendering events: ",t)}}function b(){y.innerHTML=""}function $(){i.page=newPage,b(),f()}
//# sourceMappingURL=index.js.map
