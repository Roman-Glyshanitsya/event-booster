var h=e=>{throw TypeError(e)};var b=(e,t,n)=>t.has(e)||h("Cannot "+n);var p=(e,t,n)=>(b(e,t,"read from private field"),n?n.call(e):t.get(e)),m=(e,t,n)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var l,d;class L{constructor(){m(this,l,"cbbvEGI4A6Q7cSGEi3Xqg23Vkvb9pPby");m(this,d,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=6,this.searchQuery=""}async fetchEvents(){const t=new URLSearchParams({apikey:p(this,l),keyword:this.searchQuery,page:this.page,size:this.pageSize}),n=`${p(this,d)}?${t}&classificationName=music`,r=await fetch(n);if(!r.ok)throw new Error("Faild to fetch events");return r.json()}}l=new WeakMap,d=new WeakMap;function E(e){return e.map(n=>{var u,_,g;const r=((u=n.images[0])==null?void 0:u.url)||"/img/default-image.png",s=n.name||"No Name Available",i=n.dates.start.localDate||"Unknown Date",o=((g=(_=n._embedded)==null?void 0:_.venues[0])==null?void 0:g.name)||"Unknown Location",a=n.url||"#";return`
        <li class="cards__item">
        <img
          src="${r}"
          alt="${s}"
          class="cards__item__image"
        />
        <h2 class="cards__item__title">${s}</h2>
        <p class="cards__item__date">${i}</p>
        <a
          href="${a}"
          class="cards__item__location__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg class="cards__item__location__icon">
            <use href="/img/icons/symbol-defs.svg#icon-location"></use>
          </svg>
          ${o}</a
        >
      </li>
      `}).join("")}function S(e,t,n){const r=document.querySelector(".cards__pagination-list");r.innerHTML="";const i=k(e,t).map(a=>a==="..."?'<li class="pagination__item"><span class="pagination__dots">...</span></li>':`
        <li class="pagination__item">
          <button class="pagination__button ${a===t?"active":""}" data-page="${a}">
            ${a+1}
          </button>
        </li>
      `).join("");r.insertAdjacentHTML("beforeend",i),r.addEventListener("click",o);function o(a){if(a.target.tagName!=="BUTTON")return;const u=Number(a.target.dataset.page);u!==t&&n(u)}}function k(e,t){const n=[];if(e<=5)for(let s=0;s<e;s++)n.push(s);else{t>1&&n.push(0),t>2&&n.push("...");const s=Math.max(0,t-1),i=Math.min(e,t+2);for(let o=s;o<i;o++)n.push(o);t<e-3&&n.push("..."),t<e-1&&n.push(e-1)}return n}const v=document.querySelector(".cards__list"),w=document.querySelector(".cards__pagination-list"),$=document.querySelector(".header__form"),A=document.getElementById("searchQuery"),c=new L;f();$.addEventListener("submit",M);async function M(e){e.preventDefault(),c.searchQuery=A.value.trim(),c.page=0,y(),B(),await f()}async function f(){var e;try{const t=await c.fetchEvents(),n=((e=t._embedded)==null?void 0:e.events)||[],r=E(n);v.insertAdjacentHTML("beforeend",r);const s=t.page.totalPages;console.log("Total Pages:",s,"Current Page:",c.page),S(s,c.page,N)}catch(t){console.error("Error rendering events: ",t)}}function y(){v.innerHTML=""}function B(){w.innerHTML=""}function N(e){e!==c.page&&(c.page=e,y(),f())}
//# sourceMappingURL=index.js.map
