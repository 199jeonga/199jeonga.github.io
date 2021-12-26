const randomBg = document.querySelector('.randomBg');
const imgArr = ['img01.jpg','img02.jpg','img03.jpg','img04.jpg','img05.jpg','img06.jpg'];

const randomImg = imgArr[ parseInt( Math.random() * imgArr.length ) ];
const img = document.createElement('img');
img.src = `multi/${randomImg}`;
document.body.prepend(img);

img.style = '  width: 500px; height: auto';
