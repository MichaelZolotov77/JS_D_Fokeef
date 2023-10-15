'use strict';

const btn = document.querySelector('.btn-country');

async function getCountry(country) {
  // fetch(`https://restcountries.com/v3.1/name/${country}`)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) {
      throw new Error('Неправильное имя');
    }
    console.log(res);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

btn.addEventListener('click', function () {
  getCountry('usaaa');
});
