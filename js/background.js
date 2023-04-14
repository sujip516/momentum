const images = ["1.jpg", "2.jpeg", "3.jpg", "4.jpg", "5.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choseImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);
