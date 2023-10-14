'use strict';

const position = new Promise(function (result, reject) {
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      result(pos);
    },
    function (err) {
      reject(err);
    }
  );
});

position.then(function (data) {
  console.log(data);
});
