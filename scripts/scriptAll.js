import objHelpers from "../scripts/helpers.js";

const getAllButton = document.querySelector(".button-show-all");

getAllButton.addEventListener("click", onClickgetAllButton);

function onClickgetAllButton() {
  const objPlanetResponse = objHelpers.getPromiseFetch("GET");
  objPlanetResponse.then(displayData).catch((error) => {
    alert("Виникла помилка - " + error.message);
  });
}

function addTr(curObj, column, elTr) {
  let elTdOne = document.createElement("td");
  elTdOne.textContent = curObj[column];
  elTdOne.classList.add("td-get-all");
  elTr.append(elTdOne);
}

function displayData(data) {
  if (data.message !== undefined) {
    alert("Помилка: " + data.message);
  } else {
    const arrayColumn = getArrayColumn();
    const newElemets = document.querySelectorAll(".table-getall > tr");
    for (const element of newElemets) {
      element.remove();
    }
    const tableDetail = document.querySelector(".table-getall");
    for (let i = 0; i < data.length; i += 1) {
      const curObj = data[i];
      let elTr = document.createElement("tr");
      tableDetail.append(elTr);
      for (let a = 0; a < arrayColumn.length; a += 1) {
        const curElem = arrayColumn[a];
        addTr(curObj, curElem, elTr);
      }
    }
  }
}

function getArrayColumn() {
  let arrayColumn = [];
  arrayColumn.push("innerId");
  arrayColumn.push("znakSun");
  arrayColumn.push("degrSun");
  arrayColumn.push("hoursSun");
  arrayColumn.push("znakMoon");
  arrayColumn.push("degrMoon");
  arrayColumn.push("hoursMoon");
  arrayColumn.push("znakMerk");
  arrayColumn.push("degrMerk");
  arrayColumn.push("hoursMerk");
  arrayColumn.push("znakVener");
  arrayColumn.push("degrVener");
  arrayColumn.push("hoursVener");
  arrayColumn.push("znakMars");
  arrayColumn.push("degrMars");
  arrayColumn.push("hoursMars");
  arrayColumn.push("znakSaturn");
  arrayColumn.push("degrSaturn");
  arrayColumn.push("hoursSaturn");
  arrayColumn.push("znakYupiter");
  arrayColumn.push("degrYupiter");
  arrayColumn.push("hoursYupiter");
  arrayColumn.push("znakNeptun");
  arrayColumn.push("degrNeptun");
  arrayColumn.push("hoursNeptun");
  arrayColumn.push("znakUran");
  arrayColumn.push("degrUran");
  arrayColumn.push("hoursUran");
  arrayColumn.push("znakPluton");
  arrayColumn.push("degrPluton");
  arrayColumn.push("hoursPluton");
  arrayColumn.push("znakHouseOne");
  arrayColumn.push("degrHouseOne");
  arrayColumn.push("hoursHouseOne");
  arrayColumn.push("znakHouseTwo");
  arrayColumn.push("degrHouseTwo");
  arrayColumn.push("hoursHouseTwo");
  arrayColumn.push("znakHouseThree");
  arrayColumn.push("degrHouseThree");
  arrayColumn.push("hoursHouseThree");
  arrayColumn.push("znakHouseFour");
  arrayColumn.push("degrHouseFour");
  arrayColumn.push("hoursHouseFour");
  arrayColumn.push("znakHouseFive");
  arrayColumn.push("degrHouseFive");
  arrayColumn.push("hoursHouseFive");
  arrayColumn.push("znakHouseSix");
  arrayColumn.push("degrHouseSix");
  arrayColumn.push("hoursHouseSix");
  arrayColumn.push("znakHouseSeven");
  arrayColumn.push("degrHouseSeven");
  arrayColumn.push("hoursHouseSeven");
  arrayColumn.push("znakHouseEight");
  arrayColumn.push("degrHouseEight");
  arrayColumn.push("hoursHouseEight");
  arrayColumn.push("znakHouseNine");
  arrayColumn.push("degrHouseNine");
  arrayColumn.push("hoursHouseNine");
  arrayColumn.push("znakHouseTen");
  arrayColumn.push("degrHouseTen");
  arrayColumn.push("hoursHouseTen");
  arrayColumn.push("znakHouseElewen");
  arrayColumn.push("degrHouseElewen");
  arrayColumn.push("hoursHouseElewen");
  arrayColumn.push("znakHouseTwelve");
  arrayColumn.push("degrHouseTwelve");
  arrayColumn.push("hoursHouseTwelve");
  arrayColumn.push("znakHouseLilit");
  arrayColumn.push("degrHouseLilit");
  arrayColumn.push("hoursHouseLilit");
  arrayColumn.push("znakHouseLunarNode");
  arrayColumn.push("degrHouseLunarNode");
  arrayColumn.push("hoursHouseLunarNode");
  return arrayColumn;
}
