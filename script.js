'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Функция которая запрашивает данные стран и создает карточки
// function getCountryData(country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   // Функция которая использует данные с сервера для использования в HTML коде + рендер карточки на странице
//   function renderCards(data, className = '') {
//     const html = `
//       <article class="country ${className}">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row">
//             <span>👫</span>${data.population}
//           </p>
//           <p class="country__row">
//             <span>🗣️</span>${Object.entries(data.languages)[0][1]}
//           </p>
//           <p class="country__row">
//             <span>💰</span>${
//               Object.entries(Object.entries(data.currencies)[0][1])[0][1]
//             }
//           </p>
//         </div>
//       </article>
//     `;
//     // Выводим на страницу карточку и убираем нулевую прозрачность
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   }
//   // Выполняем действия с данными после их загрузки
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const neighbour = data.borders[0];
//     console.log(neighbour);
//     // Выводим на страницу карточку с первой страной
//     renderCards(data);
//     // Создаем запрос к серверу внутри первой колбек функции
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     // Выполняем действия с данными после их загрузки
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       // Выводим на страницу карточку страны соседа
//       renderCards(data2, 'neighbour');
//     });
//   });
// }

// getCountryData('russia');

// fetch

// const request = new XMLHttpRequest();

// request.open('GET', `https://restcountries.com/v3.1/name/russia`);
// request.send();
// console.log(request);

function renderCards(data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row">
              <span>👫</span>${data.population}
            </p>
            <p class="country__row">
              <span>🗣️</span>${Object.entries(data.languages)[0][1]}
            </p>
            <p class="country__row">
              <span>💰</span>${
                Object.entries(Object.entries(data.currencies)[0][1])[0][1]
              }
            </p>
          </div>
        </article>
      `;
  // Выводим на страницу карточку и убираем нулевую прозрачность
  countriesContainer.insertAdjacentHTML('beforeend', html);
}

function renderError(message) {
  countriesContainer.insertAdjacentText('beforeend', message);
}

function getCountryData(country) {
  // Страна 1
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCards(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);

      // Страна сосед
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          const [res] = data;
          console.log(res);
          renderCards(res, 'neighbour');
        });
    })
    .catch(function (err) {
      console.dir(err);
      renderError(`Что-то пошло не так из-за ошибки: ${err.message}`);
    })
    .finally(function () {
      countriesContainer.style.opacity = 1;
    });
  console.log(request);
}

btn.addEventListener('click', function () {
  getCountryData('usa');
});
