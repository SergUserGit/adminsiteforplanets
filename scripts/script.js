import getObjectBodyOfQuery from "../scripts/helpers.js";

const addDateButton = document.querySelector(".add-Button");

const idInput = document.querySelector("#id-add");

addDateButton.addEventListener("click", onClickAddDateButton);

function onClickAddDateButton() {
  const objPlanetResponse = getPromiseFetchPost();
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

function getPromiseFetchPost() {
  const URL_PLANET = "https://planets-project-base.onrender.com/api/planets/";
  return fetch(URL_PLANET, getParametrsOfQuery()).then((response) => {
    return response.json();
  });
}

function getParametrsOfQuery() {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(getObjectBodyOfQuery(idInput, document)),
  };
}
