import EventsApiService from './events-service-api';
import cardMarkup from '../templates/card';
import { renderPagination } from './pagination';

console.log(renderPagination);

const cardsList = document.querySelector('.cards__list');
const searchForm = document.querySelector('.header__form');
const searchInput = document.getElementById('searchQuery');

const eventsApiService = new EventsApiService();

renderEvents();

searchForm.addEventListener('submit', onSearchQuery);

async function onSearchQuery(e) {
  e.preventDefault();

  eventsApiService.searchQuery = searchInput.value.trim();

  clearEventsList();

  await renderEvents();
}

export default async function renderEvents() {
  try {
    const data = await eventsApiService.fetchEvents();
    const events = data._embedded?.events || [];

    const markup = cardMarkup(events);

    cardsList.insertAdjacentHTML('beforeend', markup);

    renderPagination(
      eventsApiService.totalPages,
      eventsApiService.page,
      onPageClick
    );
  } catch (error) {
    console.error('Error rendering events: ', error);
  }
}

function clearEventsList() {
  cardsList.innerHTML = '';
}

function onPageClick() {
  eventsApiService.page = newPage;

  clearEventsList();
  renderEvents();
}
