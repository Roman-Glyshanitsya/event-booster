export function markupCountryList(arr) {
  const markup = arr.reduce(
    (acc, { value, label }) =>
      (acc += `<li class="select-country-item" data-id="${value}">${label}</li>`),
    ``
  );
  return markup;
}

export function findCountry(query, arr) {
  const filterArray = arr.filter(({ label }) =>
    label.toLowerCase().includes(query.toLowerCase())
  );
  return filterArray;
}
