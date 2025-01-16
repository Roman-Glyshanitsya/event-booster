import EventsApiService from './events-service-api';
import cardMarkup from '../templates/card';
import { renderPagination } from './pagination';

const cardsList = document.querySelector('.cards__list');
const paginationList = document.querySelector('.cards__pagination-list');
const searchForm = document.querySelector('.header__form');
const searchInput = document.getElementById('searchQuery');

const eventsApiService = new EventsApiService();

renderEvents();

searchForm.addEventListener('submit', onSearchQuery);

async function onSearchQuery(e) {
  e.preventDefault();

  eventsApiService.searchQuery = searchInput.value.trim();
  eventsApiService.page = 0;

  clearEventsList();
  clearPagination();

  await renderEvents();
}

export default async function renderEvents() {
  try {
    const data = await eventsApiService.fetchEvents();
    const events = data._embedded?.events || [];

    const markup = cardMarkup(events);

    cardsList.insertAdjacentHTML('beforeend', markup);

    const totalPages = data.page.totalPages;
    console.log(
      'Total Pages:',
      totalPages,
      'Current Page:',
      eventsApiService.page
    );

    renderPagination(totalPages, eventsApiService.page, onPageClick);
  } catch (error) {
    console.error('Error rendering events: ', error);
  }
}

function clearEventsList() {
  cardsList.innerHTML = '';
}

function clearPagination() {
  paginationList.innerHTML = '';
}

function onPageClick(newPage) {
  if (newPage === eventsApiService.page) return;

  eventsApiService.page = newPage;

  clearEventsList();
  renderEvents();
}
