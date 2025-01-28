var E=t=>{throw TypeError(t)};var M=(t,e,n)=>e.has(t)||E("Cannot "+n);var f=(t,e,n)=>(M(t,e,"read from private field"),n?n.call(t):e.get(t)),h=(t,e,n)=>e.has(t)?E("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var p,m;class L{constructor(){h(this,p,"cbbvEGI4A6Q7cSGEi3Xqg23Vkvb9pPby");h(this,m,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=8,this.searchQuery=""}async fetchEvents({id:e=null}={}){const n=new URLSearchParams({apikey:f(this,p),keyword:this.searchQuery,page:this.page,size:this.pageSize}),i=e?`${f(this,m)}/${e}?${n}`:`${f(this,m)}?${n}&classificationName=music`,s=await fetch(i);if(!s.ok)throw new Error("Faild to fetch events");return s.json()}}p=new WeakMap,m=new WeakMap;function T(t){return t.map(n=>{var c,d,u;const i=((c=n.images[0])==null?void 0:c.url)||"/img/default-image.png",s=n.name||"No Name Available",o=n.dates.start.localDate||"Unknown Date",a=((u=(d=n._embedded)==null?void 0:d.venues[0])==null?void 0:u.name)||"Unknown Location",r=n.url||"#";return`
        <li class="cards__item" data-id="${n.id}">
        <img
          src="${i}"
          alt="${s}"
          class="cards__item__image"
        />
        <h2 class="cards__item__title">${s}</h2>
        <p class="cards__item__date">${o}</p>
        <a
          href="${r}"
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
      `}).join("")}function x(t,e,n){const i=document.querySelector(".cards__pagination-list");i.innerHTML="";const o=N(t,e).map(r=>r==="..."?'<li class="pagination__item"><span class="pagination__dots">...</span></li>':`
        <li class="pagination__item">
          <button class="pagination__button ${r===e?"active":""}" data-page="${r}">
            ${r+1}
          </button>
        </li>
      `).join("");i.insertAdjacentHTML("beforeend",o),i.addEventListener("click",a);function a(r){if(r.target.tagName!=="BUTTON")return;const c=Number(r.target.dataset.page);c!==e&&n(c)}}function N(t,e){const n=[];if(t<=5)for(let s=0;s<t;s++)n.push(s);else{e>1&&n.push(0),e>2&&n.push("...");const s=Math.max(0,e-1),o=Math.min(t,e+2);for(let a=s;a<o;a++)n.push(a);e<t-3&&n.push("..."),e<t-1&&n.push(t-1)}return n}const S=document.querySelector(".cards__list"),w=document.querySelector(".cards__pagination-list"),I=document.querySelector(".header__form"),B=document.getElementById("searchQuery"),_=new L;g();I.addEventListener("submit",H);async function H(t){t.preventDefault(),_.searchQuery=B.value.trim(),_.page=0,k(),O(),await g()}async function g(){var t;try{const e=await _.fetchEvents(),n=((t=e._embedded)==null?void 0:t.events)||[],i=T(n);S.insertAdjacentHTML("beforeend",i);const s=e.page.totalPages;x(s,_.page,U)}catch(e){console.error("Error rendering events: ",e)}}function k(){S.innerHTML=""}function O(){w.innerHTML=""}function U(t){t!==_.page&&(_.page=t,k(),g())}function R(t){var e,n,i,s,o,a,r,c,d,u,v,b,y,$;return`
  <div class="info__modal">
    <button class="info__modal__close-btn">x</button>
    <img src="${t.images[0].url}" alt="${t.name}" class="info__modal__small-img" />
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
        <p class="info__modal__text">${(i=(n=(e=t._embedded)==null?void 0:e.venues[0])==null?void 0:n.city)==null?void 0:i.name}, ${(a=(o=(s=t._embedded)==null?void 0:s.venues[0])==null?void 0:o.country)==null?void 0:a.name}</p>
        <p class="info__modal__text">${((c=(r=t._embedded)==null?void 0:r.venues[0])==null?void 0:c.name)||"Venue not specified"}</p>
        <h3 class="info__modal__title">WHO</h3>
        <p class="info__modal__text">${t.name}</p>
        <h3 class="info__modal__title">PRICES</h3>
        <p class="info__modal__text">${((u=(d=t.priceRanges)==null?void 0:d[0])==null?void 0:u.min)||"N/A"} - ${((b=(v=t.priceRanges)==null?void 0:v[0])==null?void 0:b.max)||"N/A"} ${(($=(y=event.priceRanges)==null?void 0:y[0])==null?void 0:$.currency)||""}</p>
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
    `}const C=document.querySelector(".cards__list"),l=document.getElementById("modal-card"),j=new L;C.addEventListener("click",q);async function q(t){const e=t.target.closest(".cards__item");if(!e)return;const n=e.dataset.id;console.log(n);try{const i=await j.fetchEvents({id:n}),s=R(i);l.insertAdjacentHTML("beforeend",s),l.classList.remove("is-hidden"),l.addEventListener("click",A)}catch(i){console.error("Error fetching event data:",i)}}function A(t){(t.target.classList.contains("info__modal__close-btn")||t.target===l)&&(l.classList.add("is-hidden"),l.removeEventListener("click",A))}
//# sourceMappingURL=index.js.map
