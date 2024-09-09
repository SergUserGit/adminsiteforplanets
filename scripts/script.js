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
    body: JSON.stringify(getObjectBodyOfQuery()),
  };
}

function getArrayFields() {
  let arrayFields = [];
  arrayFields.push("sun");
  arrayFields.push("moon");
  arrayFields.push("merk");
  arrayFields.push("vener");
  arrayFields.push("mars");
  arrayFields.push("saturn");
  arrayFields.push("yupiter");
  arrayFields.push("neptun");
  arrayFields.push("uran");
  arrayFields.push("pluton");
  arrayFields.push("houseone");
  arrayFields.push("housetwo");
  arrayFields.push("housethree");
  arrayFields.push("housefour");
  arrayFields.push("housefive");
  arrayFields.push("housesix");
  arrayFields.push("houseseven");
  arrayFields.push("houseeight");
  arrayFields.push("housenine");
  arrayFields.push("houseten");
  arrayFields.push("houseelewen");
  arrayFields.push("housetwelve");
  arrayFields.push("lilit");
  arrayFields.push("node");
  return arrayFields;
}

function getArrayValue() {
  let arrayFields = [];
  arrayFields.push("#aspect");
  arrayFields.push("#aspect-degr");
  arrayFields.push("#aspect-hours");
  return arrayFields;
}

function getArrayId() {
  let totalArray = [];

  const arrayOne = getArrayValue();
  const arrayTwo = getArrayFields();

  for (const a of arrayTwo) {
    for (const b of arrayOne) {
      totalArray.push(b + "-" + a);
    }
  }

  return totalArray;
}

function getFieldOfBase() {
  let arrayFields = [];
  arrayFields.push("Sun");
  arrayFields.push("Moon");
  arrayFields.push("Merk");
  arrayFields.push("Vener");
  arrayFields.push("Mars");
  arrayFields.push("Saturn");
  arrayFields.push("Yupiter");
  arrayFields.push("Neptun");
  arrayFields.push("Uran");
  arrayFields.push("Pluton");
  arrayFields.push("HouseOne");
  arrayFields.push("HouseTwo");
  arrayFields.push("HouseThree");
  arrayFields.push("HouseFour");
  arrayFields.push("HouseFive");
  arrayFields.push("HouseSix");
  arrayFields.push("HouseSeven");
  arrayFields.push("HouseEight");
  arrayFields.push("HouseNine");
  arrayFields.push("HouseTen");
  arrayFields.push("HouseElewen");
  arrayFields.push("HouseTwelve");
  arrayFields.push("HouseLilit");
  arrayFields.push("HouseLunarNode");
  return arrayFields;
}

function getTotalObject() {
  let totalObject = new Object();
  totalObject["innerId"] = idInput.value.trim();

  const arrayFieldsBase = getFieldOfBase();
  const arrayFieldsId = getArrayId();

  let innerVar = 0;

  for (let k = 0; k < arrayFieldsBase.length; k += 1) {
    const curElemBase = arrayFieldsBase[k];

    const varField = innerVar + 2;
    let helpCounter = 1;
    for (let n = innerVar; n <= varField; n += 1) {
      const curElemId = arrayFieldsId[n];
      if (helpCounter === 1) {
        const planetInput = document.querySelector(curElemId);
        totalObject["znak" + curElemBase] =
          planetInput.options[planetInput.value - 1].textContent.trim();
      } else if (helpCounter === 2) {
        const planetDegrInput = document.querySelector(curElemId);
        totalObject["degr" + curElemBase] = parseInt(planetDegrInput.value);
      } else if (helpCounter === 3) {
        const planetHoursInput = document.querySelector(curElemId);
        totalObject["hours" + curElemBase] = parseInt(planetHoursInput.value);
      }
      helpCounter += 1;
    }
    innerVar += 3;
  }

  return totalObject;
}

function getObjectBodyOfQuery() {
  const totalObj = getTotalObject();
  return totalObj;
}
