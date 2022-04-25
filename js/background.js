const bgImgArr = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
];
const bgImg = bgImgArr[Math.floor(Math.random() * 9)];
const elImg = document.createElement("img");
elImg.id = "bgImg";
elImg.classList.add("hidden");
elImg.src = `multi/${bgImg}`;

const container = document.querySelector("#container");
container.appendChild(elImg);
