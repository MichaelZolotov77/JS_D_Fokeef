'use strict';

async function get3Capital(c1, c2, c3) {
  try {
    // const response1 = await fetch(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data1] = await response1.json();

    // const response2 = await fetch(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data2] = await response2.json();

    // const response3 = await fetch(`https://restcountries.com/v3.1/name/${c3}`);
    // const [data3] = await response3.json();

    const data = await Promise.all([
      fetch(`https://restcountries.com/v3.1/name/${c1}`).then(function (resp) {
        return resp.json();
      }),
      fetch(`https://restcountries.com/v3.1/name/${c2}`).then(function (resp) {
        return resp.json();
      }),
      fetch(`https://restcountries.com/v3.1/name/${c3}`).then(function (resp) {
        return resp.json();
      }),
    ]);

    // console.log(data1.capital, data2.capital, data3.capital);
    console.log(
      data.map(function (val) {
        return val[0].capital;
      })
    );
  } catch (err) {}
}

get3Capital('russia', 'turkey', 'thailand');
