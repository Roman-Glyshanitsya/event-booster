var $=e=>{throw TypeError(e)};var w=(e,a,t)=>a.has(e)||$("Cannot "+t);var m=(e,a,t)=>(w(e,a,"read from private field"),t?t.call(e):a.get(e)),g=(e,a,t)=>a.has(e)?$("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,t);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(l){if(l.ep)return;l.ep=!0;const s=t(l);fetch(l.href,s)}})();var b,f;class M{constructor(){g(this,b,"cbbvEGI4A6Q7cSGEi3Xqg23Vkvb9pPby");g(this,f,"https://app.ticketmaster.com/discovery/v2/events.json");this.page=0,this.pageSize=8,this.searchQuery="",this.searchCountry=""}async fetchEvents(){const a=new URLSearchParams({apikey:m(this,b),keyword:this.searchQuery,countryCode:this.searchCountry,page:this.page,size:this.pageSize,sort:"random"}),t=`${m(this,f)}?${a}&classificationName=music`,n=await fetch(t);if(!n.ok)throw new Error(`Failed to fetch events: ${n.status}`);return n.json()}async fetchEventsById(a){const t=new URLSearchParams({apikey:m(this,b)}),n=`https://app.ticketmaster.com/discovery/v2/events/${a}.json?${t}`,l=await fetch(n);if(!l.ok)throw new Error(`Failed to fetch event by ID: ${l.status}`);return l.json()}}b=new WeakMap,f=new WeakMap;function U(e){return e.map(t=>{var r,_,v;const n=((r=t.images[0])==null?void 0:r.url)||"/img/default-image.png",l=t.name||"No Name Available",s=t.dates.start.localDate||"Unknown Date",i=((v=(_=t._embedded)==null?void 0:_.venues[0])==null?void 0:v.name)||"Unknown Location",o=t.url||"#";return`
        <li class="cards__item" data-id="${t.id}">
        <img
          src="${n}"
          alt="${l}"
          class="cards__item__image"
        />
        <h2 class="cards__item__title">${l}</h2>
        <p class="cards__item__date">${s}</p>
        <a
          href="${o}"
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
      `}).join("")}function x(e,a,t){const n=document.querySelector(".cards__pagination-list");n.innerHTML="";const s=O(e,a).map(o=>o==="..."?'<li class="pagination__item"><span class="pagination__dots">...</span></li>':`
        <li class="pagination__item">
          <button class="pagination__button ${o===a?"active":""}" data-page="${o}">
            ${o+1}
          </button>
        </li>
      `).join("");n.insertAdjacentHTML("beforeend",s),n.addEventListener("click",i);function i(o){if(o.target.tagName!=="BUTTON")return;const r=Number(o.target.dataset.page);r!==a&&t(r)}}function O(e,a){const t=[];if(e<=5)for(let l=0;l<e;l++)t.push(l);else{a>1&&t.push(0),a>2&&t.push("...");const l=Math.max(0,a-1),s=Math.min(e,a+2);for(let i=l;i<s;i++)t.push(i);a<e-3&&t.push("..."),a<e-1&&t.push(e-1)}return t}const T=[{value:"AD",label:"Andorra"},{value:"AI",label:"Anguilla"},{value:"AR",label:"Argentina"},{value:"AU",label:"Australia"},{value:"AT",label:"Austria"},{value:"AZ",label:"Azerbaijan"},{value:"BS",label:"Bahamas"},{value:"BH",label:"Bahrain"},{value:"BB",label:"Barbados"},{value:"BE",label:"Belgium"},{value:"BM",label:"Bermuda"},{value:"BR",label:"Brazil"},{value:"BG",label:"Bulgaria"},{value:"CA",label:"Canada"},{value:"CL",label:"Chile"},{value:"CN",label:"China"},{value:"CO",label:"Colombia"},{value:"CR",label:"Costa Rica"},{value:"HR",label:"Croatia"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"},{value:"DO",label:"Dominican Republic"},{value:"EC",label:"Ecuador"},{value:"EE",label:"Estonia"},{value:"FO",label:"Faroe Islands"},{value:"FI",label:"Finland"},{value:"FR",label:"France"},{value:"GE",label:"Georgia"},{value:"DE",label:"Germany"},{value:"GH",label:"Ghana"},{value:"GI",label:"Gibraltar"},{value:"GB",label:"Great Britain"},{value:"GR",label:"Greece"},{value:"HK",label:"Hong Kong"},{value:"HU",label:"Hungary"},{value:"IS",label:"Iceland"},{value:"IN",label:"India"},{value:"IE",label:"Ireland"},{value:"IL",label:"Israel"},{value:"IT",label:"Italy"},{value:"JM",label:"Jamaica"},{value:"JP",label:"Japan"},{value:"KR",label:"Korea, Republic of"},{value:"LV",label:"Latvia"},{value:"LB",label:"Lebanon"},{value:"LT",label:"Lithuania"},{value:"LU",label:"Luxembourg"},{value:"MY",label:"Malaysia"},{value:"MT",label:"Malta"},{value:"MX",label:"Mexico"},{value:"MC",label:"Monaco"},{value:"ME",label:"Montenegro"},{value:"MA",label:"Morocco"},{value:"NL",label:"Netherlands"},{value:"AN",label:"Netherlands Antilles"},{value:"NZ",label:"New Zealand"},{value:"ND",label:"Northern Ireland"},{value:"NO",label:"Norway"},{value:"PE",label:"Peru"},{value:"PL",label:"Poland"},{value:"PT",label:"Portugal"},{value:"RO",label:"Romania"},{value:"LC",label:"Saint Lucia"},{value:"SA",label:"Saudi Arabia"},{value:"RS",label:"Serbia"},{value:"SG",label:"Singapore"},{value:"SK",label:"Slovakia"},{value:"SI",label:"Slovenia"},{value:"ZA",label:"South Africa"},{value:"ES",label:"Spain"},{value:"SE",label:"Sweden"},{value:"CH",label:"Switzerland"},{value:"TW",label:"Taiwan"},{value:"TH",label:"Thailand"},{value:"TT",label:"Trinidad and Tobago"},{value:"TR",label:"Turkey"},{value:"UA",label:"Ukraine"},{value:"AE",label:"United Arab Emirates"},{value:"US",label:"United States"},{value:"UY",label:"Uruguay"},{value:"VE",label:"Venezuela"}];function k(e){return e.reduce((t,{value:n,label:l})=>t+=`<li class="select-country-item" data-id="${n}">${l}</li>`,"")}function D(e,a){return a.filter(({label:n})=>n.toLowerCase().includes(e.toLowerCase()))}const H=document.querySelector(".cards__list"),G=document.querySelector(".cards__pagination-list"),F=document.querySelector(".header__form"),P=document.getElementById("searchQuery"),c=document.querySelector(".select-country"),y=document.querySelector(".country__list-container"),L=document.querySelector(".country__list"),u=new M;p();F.addEventListener("submit",j);async function j(e){e.preventDefault(),u.searchQuery=P.value.trim(),u.page=0,h(),N(),await p()}async function p({countryCode:e=""}={}){var a;try{e&&(u.searchCountry=e);const t=await u.fetchEvents(),n=((a=t._embedded)==null?void 0:a.events)||[],l=U(n);h(),H.insertAdjacentHTML("beforeend",l);const s=t.page.totalPages;x(s,u.page,q)}catch(t){console.error("Error rendering events: ",t)}}function h(){H.innerHTML=""}function N(){G.innerHTML=""}function q(e){e!==u.page&&(u.page=e,h(),p())}c.addEventListener("input",K);c.addEventListener("focus",z);c.addEventListener("blur",V);L.addEventListener("click",Q);function K(e){const a=D(e.target.value,T);L.innerHTML=k(a),c.classList.add("select__field"),y.classList.remove("hidden-list")}function z(e){e.preventDefault(),L.innerHTML=k(T),y.classList.toggle("hidden-list"),c.classList.toggle("select__field"),c.placeholder="Choose country"}function V(e){y.classList.add("hidden-list"),c.classList.remove("select__field")}async function Q(e){if(e.preventDefault(),!e.target.dataset.id)return;const a=e.target.dataset.id;c.placeholder=e.target.textContent,h(),N(),await p({countryCode:a})}function Y(e){var t,n,l,s,i,o,r,_,v,E,S,C,A,I,B;return`
  <div class="info__modal">
    <button class="info__modal__close-btn">x</button>
    <img src="${((t=e.images[1])==null?void 0:t.url)||"/img/default-image.png"}" alt="${e.name}" class="info__modal__small-img" />
    <div class="info__modal__content__container">
      <img src="${e.images[1].url}" alt="${e.name}" class="info__modal__poster" />
      <div class="info__modal__text-thumb">
        <h3 class="info__modal__title">INFO</h3>
        <p class="info__modal__text">
          ${e.info||"No additional information available."}
        </p>
        <h3 class="info__modal__title">WHEN</h3>
        <p class="info__modal__text">${e.dates.start.localDate}</p>
        <p class="info__modal__text">${e.dates.start.localTime||""} (local time)</p>
        <h3 class="info__modal__title">WHERE</h3>
        <p class="info__modal__text">${(s=(l=(n=e._embedded)==null?void 0:n.venues[0])==null?void 0:l.city)==null?void 0:s.name}, ${(r=(o=(i=e._embedded)==null?void 0:i.venues[0])==null?void 0:o.country)==null?void 0:r.name}</p>
        <p class="info__modal__text">${((v=(_=e._embedded)==null?void 0:_.venues[0])==null?void 0:v.name)||"Venue not specified"}</p>
        <h3 class="info__modal__title">WHO</h3>
        <p class="info__modal__text">${e.name}</p>
        <h3 class="info__modal__title">PRICES</h3>
        <p class="info__modal__text">${((S=(E=e.priceRanges)==null?void 0:E[0])==null?void 0:S.min)||"N/A"} - ${((A=(C=e.priceRanges)==null?void 0:C[0])==null?void 0:A.max)||"N/A"} ${((B=(I=e.priceRanges)==null?void 0:I[0])==null?void 0:B.currency)||""}</p>
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
    `}const Z=document.querySelector(".cards__list"),d=document.getElementById("modal-card"),J=new M;Z.addEventListener("click",W);async function W(e){const a=e.target.closest(".cards__item");if(!a)return;const t=a.dataset.id;try{const n=await J.fetchEventsById(t),l=Y(n);d.insertAdjacentHTML("beforeend",l),d.classList.remove("is-hidden"),d.addEventListener("click",R)}catch(n){console.error("Error fetching event data:",n)}}function R(e){(e.target.classList.contains("info__modal__close-btn")||e.target===d)&&(d.classList.add("is-hidden"),d.removeEventListener("click",R))}
//# sourceMappingURL=index.js.map
