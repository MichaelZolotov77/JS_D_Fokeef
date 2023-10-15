'use strict';

async function getCountry(country) {
  // fetch(`https://restcountries.com/v3.1/name/${country}`)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log(res);
  const data = await res.json();
  console.log(data);
}
console.log('Hello');
getCountry('usa');
