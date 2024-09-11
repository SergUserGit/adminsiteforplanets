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

function getTotalObject(idInput, document) {
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

function getParametrsOfQuery(methodName, idInput, document) {
  if (methodName === "GET") {
    return {
      method: "GET",
    };
  } else if (methodName === "DELETE") {
    return {
      method: "DELETE",
    };
  } else {
    return {
      method: methodName,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getObjectBodyOfQuery(idInput, document)),
    };
  }
}

function getObjectBodyOfQuery(idInput, document) {
  const totalObj = getTotalObject(idInput, document);
  return totalObj;
}

function getPromiseFetch(
  methodName,
  idInput = null,
  document = null,
  idValue = ""
) {
  const URL_PLANET =
    "https://planets-project-base.onrender.com/api/planets/" + idValue;

  return fetch(
    URL_PLANET,
    getParametrsOfQuery(methodName, idInput, document)
  ).then((response) => {
    return response.json();
  });
}

function displayMessage(data, message) {
  if (data.message !== undefined) {
    alert("Помилка: " + data.message);
  } else {
    alert(message + data.innerId);
  }
}

function getArrayColumn() {
  let arrayColumn = [];
  arrayColumn.push("innerId");
  arrayColumn.push("znakSun");
  arrayColumn.push("degrSun");
  arrayColumn.push("hoursSun");
  arrayColumn.push("znakMoon");
  arrayColumn.push("degrMoon");
  arrayColumn.push("hoursMoon");
  arrayColumn.push("znakMerk");
  arrayColumn.push("degrMerk");
  arrayColumn.push("hoursMerk");
  arrayColumn.push("znakVener");
  arrayColumn.push("degrVener");
  arrayColumn.push("hoursVener");
  arrayColumn.push("znakMars");
  arrayColumn.push("degrMars");
  arrayColumn.push("hoursMars");
  arrayColumn.push("znakSaturn");
  arrayColumn.push("degrSaturn");
  arrayColumn.push("hoursSaturn");
  arrayColumn.push("znakYupiter");
  arrayColumn.push("degrYupiter");
  arrayColumn.push("hoursYupiter");
  arrayColumn.push("znakNeptun");
  arrayColumn.push("degrNeptun");
  arrayColumn.push("hoursNeptun");
  arrayColumn.push("znakUran");
  arrayColumn.push("degrUran");
  arrayColumn.push("hoursUran");
  arrayColumn.push("znakPluton");
  arrayColumn.push("degrPluton");
  arrayColumn.push("hoursPluton");
  arrayColumn.push("znakHouseOne");
  arrayColumn.push("degrHouseOne");
  arrayColumn.push("hoursHouseOne");
  arrayColumn.push("znakHouseTwo");
  arrayColumn.push("degrHouseTwo");
  arrayColumn.push("hoursHouseTwo");
  arrayColumn.push("znakHouseThree");
  arrayColumn.push("degrHouseThree");
  arrayColumn.push("hoursHouseThree");
  arrayColumn.push("znakHouseFour");
  arrayColumn.push("degrHouseFour");
  arrayColumn.push("hoursHouseFour");
  arrayColumn.push("znakHouseFive");
  arrayColumn.push("degrHouseFive");
  arrayColumn.push("hoursHouseFive");
  arrayColumn.push("znakHouseSix");
  arrayColumn.push("degrHouseSix");
  arrayColumn.push("hoursHouseSix");
  arrayColumn.push("znakHouseSeven");
  arrayColumn.push("degrHouseSeven");
  arrayColumn.push("hoursHouseSeven");
  arrayColumn.push("znakHouseEight");
  arrayColumn.push("degrHouseEight");
  arrayColumn.push("hoursHouseEight");
  arrayColumn.push("znakHouseNine");
  arrayColumn.push("degrHouseNine");
  arrayColumn.push("hoursHouseNine");
  arrayColumn.push("znakHouseTen");
  arrayColumn.push("degrHouseTen");
  arrayColumn.push("hoursHouseTen");
  arrayColumn.push("znakHouseElewen");
  arrayColumn.push("degrHouseElewen");
  arrayColumn.push("hoursHouseElewen");
  arrayColumn.push("znakHouseTwelve");
  arrayColumn.push("degrHouseTwelve");
  arrayColumn.push("hoursHouseTwelve");
  arrayColumn.push("znakHouseLilit");
  arrayColumn.push("degrHouseLilit");
  arrayColumn.push("hoursHouseLilit");
  arrayColumn.push("znakHouseLunarNode");
  arrayColumn.push("degrHouseLunarNode");
  arrayColumn.push("hoursHouseLunarNode");
  return arrayColumn;
}

function addTr(curObj, column, elTr) {
  let elTdOne = document.createElement("td");
  elTdOne.textContent = curObj[column];
  elTdOne.classList.add("td-get-all");
  elTr.append(elTdOne);
}

function getAllRecords(data, document) {
  if (data.message !== undefined) {
    alert("Помилка: " + data.message);
  } else {
    const arrayColumn = getArrayColumn();
    const newElemets = document.querySelectorAll(".table-getall > tr");
    for (const element of newElemets) {
      element.remove();
    }
    const tableDetail = document.querySelector(".table-getall");
    for (let i = 0; i < data.length; i += 1) {
      const curObj = data[i];
      let elTr = document.createElement("tr");
      tableDetail.append(elTr);
      for (let a = 0; a < arrayColumn.length; a += 1) {
        const curElem = arrayColumn[a];
        addTr(curObj, curElem, elTr);
      }
    }
  }
}

function displayDataForMethod(data, method, document = null) {
  if (method === "DELETE") {
    alert("Повідомлення: " + data.message);
  } else if (method === "POST") {
    displayMessage(data, "Object has been created with ID - ");
  } else if (method === "PUT") {
    displayMessage(data, "Object has been update with ID - ");
  } else {
    getAllRecords(data, document);
  }
}

const objHelpers = {
  getPromiseFetch,
  displayDataForMethod,
};

export default objHelpers;
