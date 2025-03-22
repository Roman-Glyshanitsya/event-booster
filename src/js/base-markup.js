import EventsApiService from './events-service-api';
import cardMarkup from '../templates/card';
import { renderPagination } from './pagination';
import { countries } from './countries';
import { markupCountryList, findCountry } from './country-select';

const cardsList = document.querySelector('.cards__list');
const paginationList = document.querySelector('.cards__pagination-list');
const searchForm = document.querySelector('.header__form');
const searchInput = document.getElementById('searchQuery');
const searchCountryInput = document.querySelector('.select-country');
const countryListContainer = document.querySelector('.country__list-container');
const countryList = document.querySelector('.country__list');

const eventsApiService = new EventsApiService();

renderEvents();

searchForm.addEventListener('submit', onSearchQuery);

async function onSearchQuery(e) {
  e.preventDefault();

  eventsApiService.searchQuery = searchInput.value.trim();
  eventsApiService.page = 0;

  clearEventsList();

  await renderEvents();
}

export default async function renderEvents({ countryCode } = {}) {
  try {
    if (countryCode) {
      eventsApiService.searchCountry = countryCode;
    }

    const data = await eventsApiService.fetchEvents();
    const events = data._embedded?.events || [];

    clearEventsList();

    if (events.length === 0) {
      displayNoEventsMessage();
      return;
    }
    const markup = cardMarkup(events);
    cardsList.insertAdjacentHTML('beforeend', markup);

    const totalPages = data.page.totalPages;
    renderPagination(totalPages, eventsApiService.page, onPageClick);
  } catch (error) {
    console.error('Error rendering events: ', error);
  }
}

function clearEventsList() {
  cardsList.innerHTML = '';
  paginationList.innerHTML = '';
}

function onPageClick(newPage) {
  if (newPage === eventsApiService.page) return;

  eventsApiService.page = newPage;

  clearEventsList();
  renderEvents();
}

function displayNoEventsMessage() {
  cardsList.innerHTML =
    '<li class="no-events-message">Sorry, we didn&#39;t find any events here</li>';
}

searchCountryInput.addEventListener('input', onSelectCountryFieldHdlr);
searchCountryInput.addEventListener('focus', onSelectCountryFocusHdlr);
searchCountryInput.addEventListener('blur', onSelectCountryBlurHdlr);

countryList.addEventListener('click', onCountrylistHdlr);

function onSelectCountryFieldHdlr(e) {
  const filterCountries = findCountry(e.target.value, countries);
  countryList.innerHTML = markupCountryList(filterCountries);
  searchCountryInput.classList.add('select__field');
  countryListContainer.classList.remove('hidden-list');
}

function onSelectCountryFocusHdlr(e) {
  e.preventDefault();

  countryList.innerHTML = markupCountryList(countries);
  countryListContainer.classList.toggle('hidden-list');
  searchCountryInput.classList.toggle('select__field');
  searchCountryInput.placeholder = 'Choose country';
}

function onSelectCountryBlurHdlr(e) {
  countryListContainer.classList.add('hidden-list');
  searchCountryInput.classList.remove('select__field');
}

async function onCountrylistHdlr(e) {
  e.preventDefault();

  if (!e.target.dataset.id) return; // Перевіряємо, чи є код країни

  const countryCode = e.target.dataset.id;
  searchCountryInput.placeholder = e.target.textContent;

  clearEventsList();
  await renderEvents({ countryCode });
}
