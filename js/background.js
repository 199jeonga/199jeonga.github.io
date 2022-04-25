const bgImgArr = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
];
const bgImg = bgImgArr[Math.floor(Math.random() * 10)];
const elImg = document.createElement("img");
elImg.classList.add("bgImg");
elImg.src = `multi/${bgImg}`;

const container = document.querySelector("#container");
container.appendChild(elImg);
