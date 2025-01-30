export default class EventsApiService {
  #API_KEY = 'cbbvEGI4A6Q7cSGEi3Xqg23Vkvb9pPby';
  #BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';

  constructor() {
    this.page = 0;
    this.pageSize = 8;
    this.searchQuery = '';
  }

  async fetchEvents() {
    const searchParams = new URLSearchParams({
      apikey: this.#API_KEY,
      keyword: this.searchQuery,
      page: this.page,
      size: this.pageSize,
    });

    const url = `${this.#BASE_URL}?${searchParams}&classificationName=music`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.status}`);
    }

    return response.json();
  }

  async fetchEventsById(id) {
    const searchParams = new URLSearchParams({
      apikey: this.#API_KEY,
    });

    const url = `https://app.ticketmaster.com/discovery/v2/events/${id}.json?${searchParams}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch event by ID: ${response.status}`);
    }
    return response.json();
  }
}
