export function renderPagination(totalPages, currentPage, onPageClick) {
  const paginationList = document.querySelector('.cards__pagination-list');

  paginationList.innerHTML = '';

  const paginationButtons = getPaginationButtons(totalPages, currentPage);

  const buttonsMarkup = paginationButtons
    .map(page => {
      if (page === '...') {
        return `<li class="pagination__item"><span class="pagination__dots">...</span></li>`;
      }
      return `
        <li class="pagination__item">
          <button class="pagination__button ${
            page === currentPage ? 'active' : ''
          }" data-page="${page}">
            ${page + 1}
          </button>
        </li>
      `;
    })
    .join('');

  paginationList.insertAdjacentHTML('beforeend', buttonsMarkup);

  paginationList.addEventListener('click', onPaginalBtnClick);

  function onPaginalBtnClick(e) {
    if (e.target.tagName !== 'BUTTON') return;

    const newPage = Number(e.target.dataset.page);

    if (newPage === currentPage) return;

    onPageClick(newPage);
  }
}

// /**
//  * Генерує кнопки для пагінації
//  * @param {number} totalPages - Загальна кількість сторінок
//  * @param {number} currentPage - Поточна сторінка
//  * @returns {Array} Масив сторінок та крапок
//  */
function getPaginationButtons(totalPages, currentPage) {
  const buttons = [];

  const maxVisibleButtons = 5; // Максимум кнопок на панелі

  if (totalPages <= maxVisibleButtons) {
    // Якщо сторінок менше або дорівнює максимуму
    for (let i = 0; i < totalPages; i++) {
      buttons.push(i);
    }
  } else {
    if (currentPage > 1) buttons.push(0); // Перша сторінка
    if (currentPage > 2) buttons.push('...'); // Крапки перед поточним блоком

    const start = Math.max(0, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i < end; i++) {
      buttons.push(i);
    }

    if (currentPage < totalPages - 3) buttons.push('...'); // Крапки після поточного блоку
    if (currentPage < totalPages - 1) buttons.push(totalPages - 1); // Остання сторінка
  }

  return buttons;
}
