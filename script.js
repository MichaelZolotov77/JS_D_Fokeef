'use strict';

async function getCountry(country) {
  // fetch(`https://restcountries.com/v3.1/name/${country}`)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) {
      throw new Error('Неправильное имя');
    }
    const data = await res.json();
    return `Ваша страна ${data[0].name.common}`;
  } catch (err) {
    console.log(err);
    throw new Error('Что то не так');
  }
}

const city = getCountry('usa');
console.log(city);

getCountry('argentina')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

(async function () {
  try {
    const city = await getCountry('russia');
    console.log(city);
  } catch (err) {
    console.log(err);
  }
})();
