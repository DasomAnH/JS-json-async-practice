async function fetchUser() {
  return 'dasom';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return '🍎';
}
async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}
pickFruits().then(console.log);

// function pickOnlyOne() {
//   return Promise.race[(getApple(), getBanana())];
// }

// pickOnlyOne().then(console.log);
