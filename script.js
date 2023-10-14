'use strict';

const lotteryTicket = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('Win');
    } else {
      reject('lose');
    }
  }, 2000);
});

lotteryTicket
  .then(function (res) {
    console.log(lotteryTicket);
    console.log(res);
  })
  .catch(function (err) {
    console.error(err);
  });

console.log(lotteryTicket);

setTimeout(function () {
  console.log('Прошла 1 сек');
  setTimeout(function () {
    console.log('Прошла 2 сек');
    setTimeout(function () {
      console.log('Прошла 3 сек');
      setTimeout(function () {
        console.log('Прошла 4 сек');
        setTimeout(function () {
          console.log('Прошла 5 сек');
          setTimeout(function () {
            console.log('Прошла 6 сек');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

wait(2)
  .then(function () {
    console.log('Вы ждали 2 секунды');
    return wait(1);
  })
  .then(function () {
    console.log('Вы ждали еще 1 секунду');
    return wait(1);
  })
  .then(function () {
    console.log('Вы ждали еще 1 секунду');
    return wait(1);
  });
