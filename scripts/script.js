import objHelpers from "../scripts/helpers.js";

const addDateButton = document.querySelector(".add-Button");

const idInput = document.querySelector("#id-add");

addDateButton.addEventListener("click", onClickAddDateButton);

function onClickAddDateButton() {
  const objPlanetResponse = objHelpers.getPromiseFetch(
    "POST",
    idInput,
    document
  );
  objPlanetResponse.then(displayData).catch((error) => {
    alert("Виникла помилка - " + error.message);
  });
}

function displayData(data) {
  if (data.message !== undefined) {
    alert("Помилка: " + data.message);
  } else {
    alert("Object has been created with ID - " + data.innerId);
  }
}
