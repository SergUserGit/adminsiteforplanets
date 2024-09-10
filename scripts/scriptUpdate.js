import getObjectBodyOfQuery from "../scripts/helpers.js";

const updateButton = document.querySelector(".update-Button");
updateButton.addEventListener("click", onClickUpdateButton);

const idUpdate = document.querySelector("#id-update");
const idInput = document.querySelector("#id-add");

function onClickUpdateButton() {
  const idValue = idUpdate.value.trim();
  if (idValue === "") {
    alert("Заповніть ID");
    return;
  }
  const objPlanetResponse = getPromiseFetchPut(idValue);
  objPlanetResponse.then(displayData).catch((error) => {
    alert("Виникла помилка - " + error.message);
  });
}

function displayData(data) {
  if (data.message !== undefined) {
    alert("Помилка: " + data.message);
  } else {
    alert("Object has been update with ID - " + data.innerId);
  }
}

function getPromiseFetchPut(idValue) {
  const URL_PLANET =
    "https://planets-project-base.onrender.com/api/planets/" + idValue;
  return fetch(URL_PLANET, getParametrsOfQuery()).then((response) => {
    return response.json();
  });
}

function getParametrsOfQuery() {
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(getObjectBodyOfQuery(idInput, document)),
  };
}
