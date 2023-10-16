'use strict';

// Promice.all()
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
  } catch (err) {}
}

get3Capital('russia', 'turkey', 'thailand');

// Promice.race()
(async function () {
  const res = await Promise.race([
    fetch(`https://restcountries.com/v3.1/name/usa`).then(function (resp) {
      return resp.json();
    }),
    fetch(`https://restcountries.com/v3.1/name/russia`).then(function (resp) {
      return resp.json();
    }),
    fetch(`https://restcountries.com/v3.1/name/thailand`).then(function (resp) {
      return resp.json();
    }),
  ]);
})();

function timeout(sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Ожидание превысило ${sec} сек.`));
    }, sec * 1000);
  });
}

Promise.race([
  fetch(`https://restcountries.com/v3.1/name/usa`).then(function (resp) {
    return resp.json();
  }),
  timeout(0.4),
])
  .then(function (res) {
    console.log(res[0]);
  })
  .catch(function (err) {
    console.log(err);
  });

// Promise.allSettled()

Promise.allSettled([
  Promise.resolve('Выполнен'),
  Promise.reject('Отклонен'),
  Promise.resolve('Еще один Выполнен'),
]).then(function (res) {
  console.log(res);
});

// Promise.all([
//   Promise.resolve('Выполнен'),
//   Promise.reject('Отклонен'),
//   Promise.resolve('Еще один Выполнен'),
// ]).then(function (res) {
//   console.log(res);
// });

// Promise.any()

Promise.any([
  Promise.resolve('Выполнен'),
  Promise.reject('Отклонен'),
  Promise.resolve('Еще один Выполнен'),
]).then(function (res) {
  console.log(res);
});
