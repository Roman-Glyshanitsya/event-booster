// const API_KEY = 'cbbvEGI4A6Q7cSGEi3Xqg23Vkvb9pPby';
// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';

// const PAGE_SIZE = 8;
// let currentPage = 0;

// //  `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&size=${PAGE_SIZE}&page=${page}&classificationName=music`;
// //  `${BASE_URL}?apikey=${API_KEY}&size=${PAGE_SIZE}&page=${currentPage}&segmentId=KZFzniwnSyZfZ7v7nJ`;

// fetch(
//   `${BASE_URL}?apikey=${API_KEY}&size=${PAGE_SIZE}&page=${currentPage}&classificationName=music`
// )
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

export default class EventsApiService {
  #API_KEY = 'cbbvEGI4A6Q7cSGEi3Xqg23Vkvb9pPby';
  #BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';

  constructor() {
    this.page = 1;
    this.pageSize = 8;
  }

  async fetchEvents() {
    const url = `${this.#BASE_URL}?apikey=${this.#API_KEY}&size=${
      this.pageSize
    }&page=${this.page}&classificationName=music`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Faild to fetch events');
    }

    return response.json();
  }
}
