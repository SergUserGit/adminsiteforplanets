const addDateButton = document.querySelector(".add-Button");
const idInput = document.querySelector("#id-add");

const planetSunInput = document.querySelector("#aspect-sun");
const planetSunDegrInput = document.querySelector("#aspect-degr-sun");
const planetSunHoursInput = document.querySelector("#aspect-hours-sun");

addDateButton.addEventListener("click", onClickAddDateButton);

function onClickAddDateButton() {
  const bodyQuery = getObjectBodyOfQuery();
  console.log(bodyQuery);
  /* const objPlanetResponse = getPromiseFetchPost();
  objPlanetResponse.then(displayData).catch((error) => {
    alert("Виникла помилка - " + error.message);
  });*/
}

function displayData(data) {
  if (data.message !== undefined) {
    alert("Помилка: " + data.message);
  } else {
    console.log(data);
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
    body: JSON.stringify(getObjectBodyOfQuery()),
  };
}

function getObjectBodyOfQuery() {
  return {
    innerId: idInput.value.trim(),
    znakSun:
      planetSunInput.options[planetSunInput.value - 1].textContent.trim(),
    degrSun: parseInt(planetSunDegrInput.value),
    hoursSun: parseInt(planetSunHoursInput.value),
  };
}
