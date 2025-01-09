export default function cardMarkup(cards) {
  const markup = cards.map(card => {
    const imageUrl = card.images[0]?.url || '/img/default-image.png';
    const nameArtist = card.name || 'No Name Available';
    const eventDate = card.dates.start.localDate || 'Unknown Date';
    const location = card._embedded?.venues[0]?.name || 'Unknown Location';
    const eventUrl = card.url || '#';

    return `
        <li class="cards__item">
        <img
          src="${imageUrl}"
          alt="${nameArtist}"
          class="cards__item__image"
        />
        <h2 class="cards__item__title">${nameArtist}</h2>
        <p class="cards__item__date">${eventDate}</p>
        <a
          href="${eventUrl}"
          class="cards__item__location__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg class="cards__item__location__icon">
            <use href="/img/icons/symbol-defs.svg#icon-location"></use>
          </svg>
          ${location}</a
        >
      </li>
      `;
  });

  return markup.join('');
}
