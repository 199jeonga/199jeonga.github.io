const quotesText = document.querySelector("#quotes span:first-child");
const quotesName = document.querySelector("#quotes span:last-child");

const quotesData = [
  { name: "Fax Tombs", text: "Debrecen University of Agricultural Sciences" },
  { name: "Ermengarde Hiom", text: "Kerman Graduate University of Technology" },
  { name: "Bethena Rubbert", text: "Bellevue University" },
  { name: "Candie Silver", text: "Cyprus University of Technology" },
  { name: "Karisa Brearley", text: "Université de Monastir" },
  { name: "Zoe Dudney", text: "Ecole Nationale d'Architecture" },
  { name: "Eamon Shinn", text: "Concordia University, Mequon" },
  { name: "Homere Curror", text: "Universitas Merdeka Madiun" },
  { name: "Nelie Abbot", text: "Universitat Autónoma de Barcelona" },
  { name: "Sally Tellenbroker", text: "Universidad Mayor" },
  { name: "Rafaelita Ubank", text: "Yaroslavl State Theatre Institute" },
  { name: "Shaun Albisser", text: "University of Tennessee - Martin" },
  { name: "Eadith Cyphus", text: "Fushun Petroleum University" },
  { name: "Kayla Bransdon", text: "Bryn Mawr College" },
  { name: "Freda Beretta", text: "Eureka College" },
];

function fnRandom() {
  const landomNum = Math.floor(Math.random() * quotesData.length);
  quotesName.innerText = quotesData[landomNum].name;
  quotesText.innerText = quotesData[landomNum].text;
}
fnRandom();
setInterval(fnRandom, 3000);
