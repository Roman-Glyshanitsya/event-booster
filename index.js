var p=s=>{throw TypeError(s)};var g=(s,e,t)=>e.has(s)||p("Cannot "+t);var l=(s,e,t)=>(g(s,e,"read from private field"),t?t.call(s):e.get(s)),d=(s,e,t)=>e.has(s)?p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();var c,a;class v{constructor(){d(this,c,"cbbvEGI4A6Q7cSGEi3Xqg23Vkvb9pPby");d(this,a,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=1,this.pageSize=8}async fetchEvents(){const e=`${l(this,a)}?apikey=${l(this,c)}&size=${this.pageSize}&page=${this.page}&classificationName=music`,t=await fetch(e);if(!t.ok)throw new Error("Faild to fetch events");return t.json()}}c=new WeakMap,a=new WeakMap;function h(s){return s.map(t=>{var u,m,f;const o=((u=t.images[1])==null?void 0:u.url)||"/img/default-image.png",r=t.name||"No Name Available",n=t.dates.start.localDate||"Unknown Date",i=((f=(m=t._embedded)==null?void 0:m.venues[0])==null?void 0:f.name)||"Unknown Location",_=t.url||"#";return`
        <li class="cards__item">
        <img
          src="${o}"
          alt="${r}"
          class="cards__item__image"
        />
        <h2 class="cards__item__title">${r}</h2>
        <p class="cards__item__date">${n}</p>
        <a
          href="${_}"
          class="cards__item__location__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg class="cards__item__location__icon">
            <use href="/img/icons/symbol-defs.svg#icon-location"></use>
          </svg>
          ${i}</a
        >
      </li>
      `}).join("")}const y=document.querySelector(".cards__list"),b=new v;async function E(){var s;try{const t=((s=(await b.fetchEvents())._embedded)==null?void 0:s.events)||[],o=h(t);y.insertAdjacentHTML("beforeend",o)}catch(e){console.error("Error rendering events: ",e)}}E();
//# sourceMappingURL=index.js.map
