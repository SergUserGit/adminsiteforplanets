import objHelpers from "../scripts/helpers.js";
const getAllButton = document.querySelector(".button-show-all");
getAllButton.addEventListener("click", onClickgetAllButton);

function onClickgetAllButton() {
  const objPlanetResponse = objHelpers.getPromiseFetch("GET");
  objPlanetResponse.then(displayData).catch((error) => {
    alert("Виникла помилка - " + error.message);
  });
}

function displayData(data) {
  objHelpers.displayDataForMethod(data, "GET", document);
}
