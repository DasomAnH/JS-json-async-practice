const dogImage = document.createElement('img');
dogImage.setAttribute('src', 'https://placedog.net/300/300');

console.log(dogImage);

const container = document.getElementById('container');
container.appendChild(dogImage);
