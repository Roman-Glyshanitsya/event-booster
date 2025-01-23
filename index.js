var v=t=>{throw TypeError(t)};var k=(t,e,n)=>e.has(t)||v("Cannot "+n);var u=(t,e,n)=>(k(t,e,"read from private field"),n?n.call(t):e.get(t)),f=(t,e,n)=>e.has(t)?v("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();var m,d;class b{constructor(){f(this,m,"cbbvEGI4A6Q7cSGEi3Xqg23Vkvb9pPby");f(this,d,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=8,this.searchQuery=""}async fetchEvents({id:e=null}={}){const n=new URLSearchParams({apikey:u(this,m),keyword:this.searchQuery,page:this.page,size:this.pageSize}),o=e?`${u(this,d)}/${e}?${n}`:`${u(this,d)}?${n}&classificationName=music`,s=await fetch(o);if(!s.ok)throw new Error("Faild to fetch events");return s.json()}}m=new WeakMap,d=new WeakMap;function S(t){return t.map(n=>{var _,h,g;const o=((_=n.images[0])==null?void 0:_.url)||"/img/default-image.png",s=n.name||"No Name Available",a=n.dates.start.localDate||"Unknown Date",i=((g=(h=n._embedded)==null?void 0:h.venues[0])==null?void 0:g.name)||"Unknown Location",r=n.url||"#";return`
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
      `}).join("")}function A(t,e,n){const o=document.querySelector(".cards__pagination-list");o.innerHTML="";const a=M(t,e).map(r=>r==="..."?'<li class="pagination__item"><span class="pagination__dots">...</span></li>':`
        <li class="pagination__item">
          <button class="pagination__button ${r===e?"active":""}" data-page="${r}">
            ${r+1}
          </button>
        </li>
      `).join("");o.insertAdjacentHTML("beforeend",a),o.addEventListener("click",i);function i(r){if(r.target.tagName!=="BUTTON")return;const _=Number(r.target.dataset.page);_!==e&&n(_)}}function M(t,e){const n=[];if(t<=5)for(let s=0;s<t;s++)n.push(s);else{e>1&&n.push(0),e>2&&n.push("...");const s=Math.max(0,e-1),a=Math.min(t,e+2);for(let i=s;i<a;i++)n.push(i);e<t-3&&n.push("..."),e<t-1&&n.push(t-1)}return n}const y=document.querySelector(".cards__list"),$=document.querySelector(".cards__pagination-list"),T=document.querySelector(".header__form"),U=document.getElementById("searchQuery"),l=new b;p();T.addEventListener("submit",w);async function w(t){t.preventDefault(),l.searchQuery=U.value.trim(),l.page=0,E(),x(),await p()}async function p(){var t;try{const e=await l.fetchEvents(),n=((t=e._embedded)==null?void 0:t.events)||[],o=S(n);y.insertAdjacentHTML("beforeend",o);const s=e.page.totalPages;A(s,l.page,H)}catch(e){console.error("Error rendering events: ",e)}}function E(){y.innerHTML=""}function x(){$.innerHTML=""}function H(t){t!==l.page&&(l.page=t,E(),p())}function B(t){return`
  <div class="info__modal">
    <button class="info__modal__close-btn">x</button>
    <img src="/img/modal-small.jpg" alt="" class="info__modal__small-img" />
    <div class="info__modal__content__container">
      <img src="/img/modal-poster.jpg" alt="" class="info__modal__poster" />
      <div class="info__modal__text-thumb">
        <h3 class="info__modal__title">INFO</h3>
        <p class="info__modal__text">
          Atlas Weekend is the largest music festival in Ukraine. More than 200
          artists will create a proper music festival atmosphere on 10 stages
        </p>
        <h3 class="info__modal__title">WHEN</h3>
        <p class="info__modal__text">2021-06-09</p>
        <p class="info__modal__text">20:00 (Kyiv/Ukraine)</p>
        <h3 class="info__modal__title">WHERE</h3>
        <p class="info__modal__text">Kyiv, Ukraine</p>
        <p class="info__modal__text">VDNH</p>
        <h3 class="info__modal__title">WHO</h3>
        <p class="info__modal__text">The Black Eyed Peas</p>
        <h3 class="info__modal__title">PRICES</h3>
        <p class="info__modal__text">Standart 300-500 UAH</p>
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
    `}const I=document.querySelector(".cards__list"),c=document.getElementById("modal-card"),N=new b;I.addEventListener("click",O);async function O(t){const e=t.target.closest(".cards__item");if(!e)return;const n=e.dataset.id;console.log(n);try{const o=await N.fetchEvents("1a9Zk7Y34xAZe56"),s=B(o);c.insertAdjacentHTML("beforeend",s),c.classList.remove("is-hidden"),c.addEventListener("click",L)}catch(o){console.error("Error fetching event data:",o)}}function L(t){(t.target.classList.contains("info__modal__close-btn")||t.target===c)&&(c.classList.add("is-hidden"),c.removeEventListener("click",L))}
//# sourceMappingURL=index.js.map
