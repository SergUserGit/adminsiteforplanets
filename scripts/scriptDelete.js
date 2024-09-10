import objHelpers from "../scripts/helpers.js";

const deleteButton = document.querySelector(".delete-Button");
const idDelete = document.querySelector("#id-delete");

deleteButton.addEventListener("click", onClickDeleteButton);
function onClickDeleteButton() {
  const idValue = idDelete.value.trim();
  if (idValue === "") {
    alert("Заповніть ID");
    return;
  }

  const objPlanetResponse = objHelpers.getPromiseFetch(
    "DELETE",
    null,
    null,
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
    alert("Object has been delete by ID - ");
  }
}
