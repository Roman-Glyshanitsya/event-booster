// import EventsApiService from './events-service-api';
// import cardMarkup from '../templates/card';

// const cardsList = document.querySelector('.cards__list');

// const eventsApiService = new EventsApiService();

// export async function renderEvents() {
//   try {
//     const data = await eventsApiService.fetchEvents();
//     const events = data._embedded?.events || [];

//     const markup = cardMarkup(events);

//     cardsList.insertAdjacentHTML('beforeend', markup);
//   } catch (error) {
//     console.error('Error rendering events: ', error);
//   }
// }

// renderEvents();
