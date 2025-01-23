export default function modalMarkup(modal) {
  return `
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
    `;
}
