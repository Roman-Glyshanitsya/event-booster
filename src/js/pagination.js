export function renderPagination(totalPages, currentPage, onPageClick) {
  const paginationList = document.querySelector('.cards__pagination-list');

  paginationList.innerHTML = '';

  let buttonsMarkup = '';

  for (let i = 0; i < totalPages; i++) {
    buttonsMarkup += `
        <li class="pagination__item">
        <button class="pagination__button ${
          i === currentPage ? 'active' : ''
        }" data-page="${i}">
        ${i + 1}
        </button>
        </li>
        `;
  }

  paginationList.insertAdjacentHTML('beforeend', buttonsMarkup);

  paginationList.addEventListener('click', onPaginalBtnClick);

  function onPaginalBtnClick(e) {
    if (e.target.tagName !== 'BUTTON') return;

    const newPage = Number(e.target.dataset.page);

    if (newPage === currentPage) return;

    onPageClick(newPage);
  }
}
