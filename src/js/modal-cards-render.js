import modalMarkup from '../templates/modal-card';
import EventsApiService from './events-service-api';

const cardList = document.querySelector('.cards__list');
const modalCardEl = document.getElementById('modal-card');

const eventsApiService = new EventsApiService();

cardList.addEventListener('click', openModalCard);

export default async function openModalCard(e) {
  const card = e.target.closest('.cards__item');

  if (!card) return;

  const eventId = card.dataset.id;

  try {
    const eventData = await eventsApiService.fetchEventsById(eventId);

    const markup = modalMarkup(eventData);
    modalCardEl.insertAdjacentHTML('beforeend', markup);
    modalCardEl.classList.remove('is-hidden');
    modalCardEl.addEventListener('click', onModalClose);
  } catch (error) {
    console.error('Error fetching event data:', error);
  }
}

function onModalClose(e) {
  if (
    e.target.classList.contains('info__modal__close-btn') || // Натиснута кнопка закриття
    e.target === modalCardEl // Натиснуто за межами модального вікна
  ) {
    modalCardEl.classList.add('is-hidden'); // Приховуємо модальне вікно
    modalCardEl.removeEventListener('click', onModalClose); // Видаляємо слухач для закриття
  }
}
