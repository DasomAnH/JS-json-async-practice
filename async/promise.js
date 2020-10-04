'use strict';
// when New Promise is created, the excuter runs automatically.
const promise = new Promise((resolve, reject) => {
  console.log('doing something');
  setTimeout(() => {
    // resolve('dasom');
    reject(new Error('no network'));
  }, 2000);
});

promise
  .then(value => {
    console.log(value);
  })

  .catch(error => {
    console.log(error);
  })

  .finally(() => {
    console.log('finally');
  });

//promise chaining

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

//Error Handling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=> 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch(error => {
    return '🍕';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
