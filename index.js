var k=t=>{throw TypeError(t)};var M=(t,e,n)=>e.has(t)||k("Cannot "+n);var f=(t,e,n)=>(M(t,e,"read from private field"),n?n.call(t):e.get(t)),h=(t,e,n)=>e.has(t)?k("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();var m,p;class S{constructor(){h(this,m,"cbbvEGI4A6Q7cSGEi3Xqg23Vkvb9pPby");h(this,p,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=8,this.searchQuery=""}async fetchEvents(){const e=new URLSearchParams({apikey:f(this,m),keyword:this.searchQuery,page:this.page,size:this.pageSize}),n=`${f(this,p)}?${e}&classificationName=music`,o=await fetch(n);if(!o.ok)throw new Error(`Failed to fetch events: ${o.status}`);return o.json()}async fetchEventsById(e){const n=new URLSearchParams({apikey:f(this,m)}),o=`https://app.ticketmaster.com/discovery/v2/events/${e}.json?${n}`,s=await fetch(o);if(!s.ok)throw new Error(`Failed to fetch event by ID: ${s.status}`);return s.json()}}m=new WeakMap,p=new WeakMap;function T(t){return t.map(n=>{var c,d,u;const o=((c=n.images[0])==null?void 0:c.url)||"/img/default-image.png",s=n.name||"No Name Available",a=n.dates.start.localDate||"Unknown Date",i=((u=(d=n._embedded)==null?void 0:d.venues[0])==null?void 0:u.name)||"Unknown Location",r=n.url||"#";return`
        <li class="cards__item" data-id="${n.id}">
        <img
          src="${o}"
          alt="${s}"
          class="cards__item__image"
        />
        <h2 class="cards__item__title">${s}</h2>
        <p class="cards__item__date">${a}</p>
        <a
          href="${r}"
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
      `}).join("")}function x(t,e,n){const o=document.querySelector(".cards__pagination-list");o.innerHTML="";const a=B(t,e).map(r=>r==="..."?'<li class="pagination__item"><span class="pagination__dots">...</span></li>':`
        <li class="pagination__item">
          <button class="pagination__button ${r===e?"active":""}" data-page="${r}">
            ${r+1}
          </button>
        </li>
      `).join("");o.insertAdjacentHTML("beforeend",a),o.addEventListener("click",i);function i(r){if(r.target.tagName!=="BUTTON")return;const c=Number(r.target.dataset.page);c!==e&&n(c)}}function B(t,e){const n=[];if(t<=5)for(let s=0;s<t;s++)n.push(s);else{e>1&&n.push(0),e>2&&n.push("...");const s=Math.max(0,e-1),a=Math.min(t,e+2);for(let i=s;i<a;i++)n.push(i);e<t-3&&n.push("..."),e<t-1&&n.push(t-1)}return n}const I=document.querySelector(".cards__list"),N=document.querySelector(".cards__pagination-list"),U=document.querySelector(".header__form"),H=document.getElementById("searchQuery"),_=new S;g();U.addEventListener("submit",O);async function O(t){t.preventDefault(),_.searchQuery=H.value.trim(),_.page=0,w(),R(),await g()}async function g(){var t;try{const e=await _.fetchEvents(),n=((t=e._embedded)==null?void 0:t.events)||[],o=T(n);I.insertAdjacentHTML("beforeend",o);const s=e.page.totalPages;x(s,_.page,j)}catch(e){console.error("Error rendering events: ",e)}}function w(){I.innerHTML=""}function R(){N.innerHTML=""}function j(t){t!==_.page&&(_.page=t,w(),g())}function C(t){var n,o,s,a,i,r,c,d,u,v,b,y,E,$,L;return`
  <div class="info__modal">
    <button class="info__modal__close-btn">x</button>
    <img src="${((n=t.images[1])==null?void 0:n.url)||"/img/default-image.png"}" alt="${t.name}" class="info__modal__small-img" />
    <div class="info__modal__content__container">
      <img src="${t.images[1].url}" alt="${t.name}" class="info__modal__poster" />
      <div class="info__modal__text-thumb">
        <h3 class="info__modal__title">INFO</h3>
        <p class="info__modal__text">
          ${t.info||"No additional information available."}
        </p>
        <h3 class="info__modal__title">WHEN</h3>
        <p class="info__modal__text">${t.dates.start.localDate}</p>
        <p class="info__modal__text">${t.dates.start.localTime||""} (local time)</p>
        <h3 class="info__modal__title">WHERE</h3>
        <p class="info__modal__text">${(a=(s=(o=t._embedded)==null?void 0:o.venues[0])==null?void 0:s.city)==null?void 0:a.name}, ${(c=(r=(i=t._embedded)==null?void 0:i.venues[0])==null?void 0:r.country)==null?void 0:c.name}</p>
        <p class="info__modal__text">${((u=(d=t._embedded)==null?void 0:d.venues[0])==null?void 0:u.name)||"Venue not specified"}</p>
        <h3 class="info__modal__title">WHO</h3>
        <p class="info__modal__text">${t.name}</p>
        <h3 class="info__modal__title">PRICES</h3>
        <p class="info__modal__text">${((b=(v=t.priceRanges)==null?void 0:v[0])==null?void 0:b.min)||"N/A"} - ${((E=(y=t.priceRanges)==null?void 0:y[0])==null?void 0:E.max)||"N/A"} ${((L=($=t.priceRanges)==null?void 0:$[0])==null?void 0:L.currency)||""}</p>
        <button class="info__modal__buy-button" type="button">
          BUY TICKETS
        </button>
        <p class="info__modal__text">VIP 1000-1500 UAH</p>
        <button class="info__modal__buy-button" type="button">
          BUY TICKETS
        </button>
      </div>
    </div>
    <button class="info__modal__more-button" type="button">
      MORE FROM THIS AUTHOR
    </button>
  </div>
    `}const q=document.querySelector(".cards__list"),l=document.getElementById("modal-card"),D=new S;q.addEventListener("click",P);async function P(t){const e=t.target.closest(".cards__item");if(!e)return;const n=e.dataset.id;console.log(n);try{const o=await D.fetchEventsById(n);console.log(o);const s=C(o);l.insertAdjacentHTML("beforeend",s),l.classList.remove("is-hidden"),l.addEventListener("click",A)}catch(o){console.error("Error fetching event data:",o)}}function A(t){(t.target.classList.contains("info__modal__close-btn")||t.target===l)&&(l.classList.add("is-hidden"),l.removeEventListener("click",A))}
//# sourceMappingURL=index.js.map
