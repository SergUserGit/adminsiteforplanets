import objHelpers from "../scripts/helpers.js";

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
  const objPlanetResponse = objHelpers.getPromiseFetch(
    "PUT",
    idInput,
    document,
    idValue
  );
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
