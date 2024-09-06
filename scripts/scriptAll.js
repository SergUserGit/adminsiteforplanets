const getAllButton = document.querySelector(".button-show-all");

getAllButton.addEventListener("click", onClickgetAllButton);

function onClickgetAllButton() {
  const objPlanetResponse = getPromiseFetchGetAll();
  objPlanetResponse.then(displayData).catch((error) => {
    alert("Виникла помилка - " + error.message);
  });
}

function getPromiseFetchGetAll() {
  const URL_PLANET = "https://planets-project-base.onrender.com/api/planets/";
  return fetch(URL_PLANET).then((response) => {
    return response.json();
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
    const newElemets = document.querySelectorAll(".table-getall > tr");
    for (const element of newElemets) {
      element.remove();
    }
    const tableDetail = document.querySelector(".table-getall");
    for (let i = 0; i < data.length; i += 1) {
      const curObj = data[i];
      let elTr = document.createElement("tr");
      tableDetail.append(elTr);
      addTr(curObj, "innerId", elTr);
      addTr(curObj, "znakSun", elTr);
      addTr(curObj, "degrSun", elTr);
      addTr(curObj, "hoursSun", elTr);
      addTr(curObj, "znakMoon", elTr);
      addTr(curObj, "degrMoon", elTr);
    }
  }
}
