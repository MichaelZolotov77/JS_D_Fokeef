'use strict';

new Promise(function (result, reject) {
  navigator.geolocation.getCurrentPosition(result, reject);
}).then(function (data) {
  console.log(data);
});
