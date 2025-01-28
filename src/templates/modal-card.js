export default function modalMarkup(modal) {
  return `
  <div class="info__modal">
    <button class="info__modal__close-btn">x</button>
    <img src="${modal.images[0].url}" alt="${
    modal.name
  }" class="info__modal__small-img" />
    <div class="info__modal__content__container">
      <img src="${modal.images[1].url}" alt="${
    modal.name
  }" class="info__modal__poster" />
      <div class="info__modal__text-thumb">
        <h3 class="info__modal__title">INFO</h3>
        <p class="info__modal__text">
          ${modal.info || 'No additional information available.'}
        </p>
        <h3 class="info__modal__title">WHEN</h3>
        <p class="info__modal__text">${modal.dates.start.localDate}</p>
        <p class="info__modal__text">${
          modal.dates.start.localTime || ''
        } (local time)</p>
        <h3 class="info__modal__title">WHERE</h3>
        <p class="info__modal__text">${
          modal._embedded?.venues[0]?.city?.name
        }, ${modal._embedded?.venues[0]?.country?.name}</p>
        <p class="info__modal__text">${
          modal._embedded?.venues[0]?.name || 'Venue not specified'
        }</p>
        <h3 class="info__modal__title">WHO</h3>
        <p class="info__modal__text">${modal.name}</p>
        <h3 class="info__modal__title">PRICES</h3>
        <p class="info__modal__text">${
          modal.priceRanges?.[0]?.min || 'N/A'
        } - ${modal.priceRanges?.[0]?.max || 'N/A'} ${
    event.priceRanges?.[0]?.currency || ''
  }</p>
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
    `;
}
