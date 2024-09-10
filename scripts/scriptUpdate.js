import testClick from "../scripts/helpers.js";

const updateButton = document.querySelector(".update-Button");
updateButton.addEventListener("click", onClickUpdateButton);

function onClickUpdateButton() {
  testClick();
}
