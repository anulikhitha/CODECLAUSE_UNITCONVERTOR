"use strict";

const lengthArray = [];
var result;
var active;

let unitConvertorLength = function (funit, tunit, fvalue) {
  if (funit === tunit) {
    result = fvalue;
    return result;
  } else if (funit == 1 && tunit == 2) {
    result = fvalue / 1000;
    return result;
  } else if (funit == 1 && tunit == 3) {
    result = fvalue * 1000;
    return result;
  } else if (funit == 2 && tunit == 1) {
    result = fvalue * 1000;
    return result;
  } else if (funit == 2 && tunit == 3) {
    result = fvalue * 1000000;
    return result;
  } else if (funit == 3 && tunit == 1) {
    result = fvalue / 1000;
    return result;
  } else if (funit == 3 && tunit == 2) {
    result = fvalue * 1000000;
    return result;
  }
};

let unitConvertorTemp = function (funit, tunit, fvalue) {
  if (funit === tunit) {
    return fvalue;
  } else if (funit == 1 && tunit == 2) {
    result = Number(fvalue) + 273.15;
    return result;
  } else if (funit == 1 && tunit == 3) {
    result = (fvalue * 9) / 5 + 32;
    return result;
  } else if (funit == 2 && tunit == 1) {
    result = Number(fvalue) - 273.15;
    return result;
  } else if (funit == 2 && tunit == 3) {
    result = ((Number(fvalue) - 273.15) * 9) / 5 + 32;
    return result;
  } else if (funit == 3 && tunit == 1) {
    result = ((Number(fvalue) - 32) * 5) / 9;
    return result;
  } else if (funit == 3 && tunit == 2) {
    result = ((Number(fvalue) - 32) * 5) / 9 + 273.15;
    return result;
  }
};

let unitConvertorArea = function (funit, tunit, fvalue) {
  if (funit === tunit) {
    return fvalue;
  } else if (funit == 1 && tunit == 2) {
    result = fvalue / 10 ** 6;
    return result;
  } else if (funit == 1 && tunit == 3) {
    result = fvalue * 10 ** 4;
    return result;
  } else if (funit == 2 && tunit == 1) {
    result = fvalue * 10 ** 6;
    return result;
  } else if (funit == 2 && tunit == 3) {
    result = fvalue * 10 ** 10;
    return result;
  } else if (funit == 3 && tunit == 1) {
    result = fvalue / 10 ** 4;
    return result;
  } else if (funit == 3 && tunit == 2) {
    result = fvalue / 10 ** 6;
    return result;
  }
};

let unitConvertorVol = function (funit, tunit, fvalue) {
  if (funit === tunit) {
    return fvalue;
  } else if (funit == 1 && tunit == 2) {
    result = fvalue * 10 ** 9;
    return result;
  } else if (funit == 1 && tunit == 3) {
    result = fvalue * 10 ** 6;
    return result;
  } else if (funit == 2 && tunit == 1) {
    result = fvalue * 10 ** 9;
    return result;
  } else if (funit == 2 && tunit == 3) {
    result = fvalue * 10 ** 15;
    return result;
  } else if (funit == 3 && tunit == 1) {
    result = fvalue / 10 ** 6;
    return result;
  } else if (funit == 3 && tunit == 2) {
    result = fvalue / 10 ** 9;
    return result;
  }
};

let unitConvertorWeight = function (funit, tunit, fvalue) {
  if (funit === tunit) {
    return fvalue;
  } else if (funit == 1 && tunit == 2) {
    result = fvalue * 10 ** 3;
    return result;
  } else if (funit == 1 && tunit == 3) {
    result = fvalue * 10 ** 6;
    return result;
  } else if (funit == 2 && tunit == 1) {
    result = fvalue / 10 ** 3;
    return result;
  } else if (funit == 2 && tunit == 3) {
    result = fvalue * 10 ** 3;
    return result;
  } else if (funit == 3 && tunit == 1) {
    result = fvalue / 10 ** 6;
    return result;
  } else if (funit == 3 && tunit == 2) {
    result = fvalue / 10 ** 3;
    return result;
  }
};

let unitConvertorTime = function (funit, tunit, fvalue) {
  if (funit === tunit) {
    return fvalue;
  } else if (funit == 1 && tunit == 2) {
    result = fvalue / 60;
    return result;
  } else if (funit == 1 && tunit == 3) {
    result = fvalue / 3600;
    return result;
  } else if (funit == 2 && tunit == 1) {
    result = fvalue * 60;
    return result;
  } else if (funit == 2 && tunit == 3) {
    result = fvalue / 60;
    return result;
  } else if (funit == 3 && tunit == 1) {
    result = fvalue * 3600;
    return result;
  } else if (funit == 3 && tunit == 2) {
    result = fvalue * 60;
    return result;
  }
};

var buttonEl = document.querySelector(".btn--submit");
buttonEl.addEventListener("click", function (e) {
  e.preventDefault();

  var fromValue = document.getElementById("from-value").value;

  if (fromUnitValue !== 0 && toUnitValue !== 0) {
    switch (active) {
      case 0:
        var fromUnitValue = document.getElementById("from-unit--length").value;
        var toUnitValue = document.getElementById("to-unit--length").value;
        var answer = unitConvertorLength(fromUnitValue, toUnitValue, fromValue);
        break;
      case 1:
        var fromUnitValue = document.getElementById("from-unit--temp").value;
        var toUnitValue = document.getElementById("to-unit--temp").value;
        var answer = unitConvertorTemp(fromUnitValue, toUnitValue, fromValue);
        break;
      case 2:
        var fromUnitValue = document.getElementById("from-unit--area").value;
        var toUnitValue = document.getElementById("to-unit--area").value;
        var answer = unitConvertorArea(fromUnitValue, toUnitValue, fromValue);
        break;
      case 3:
        var fromUnitValue = document.getElementById("from-unit--vol").value;
        var toUnitValue = document.getElementById("to-unit--vol").value;
        var answer = unitConvertorVolume(fromUnitValue, toUnitValue, fromValue);
        break;
      case 4:
        var fromUnitValue = document.getElementById("from-unit--weight").value;
        var toUnitValue = document.getElementById("to-unit--weight").value;
        var answer = unitConvertorWeight(fromUnitValue, toUnitValue, fromValue);
        break;
      case 5:
        var fromUnitValue = document.getElementById("from-unit--time").value;
        var toUnitValue = document.getElementById("to-unit--time").value;
        var answer = unitConvertorTime(fromUnitValue, toUnitValue, fromValue);
        break;
    }
   
    var answerEl = document.getElementById("to-value");
    answer = answer.toFixed(2);
    answerEl.value = answer;
  }
});


let lengthBtn = document.querySelector(".button--length");
let tempBtn = document.querySelector(".button--temp");
let areaBtn = document.querySelector(".button--area");
let volBtn = document.querySelector(".button--vol");
let weightBtn = document.querySelector(".button--weight");
let timeBtn = document.querySelector(".button--time");

let lengthOption = document.querySelector(".option--length");
let tempOption = document.querySelector(".option--temp");
let areaOption = document.querySelector(".option--area");
let volOption = document.querySelector(".option--vol");
let weightOption = document.querySelector(".option--weight");
let timeOption = document.querySelector(".option--time");


const optionArray = [
  lengthOption,
  tempOption,
  areaOption,
  volOption,
  weightOption,
  timeOption,
];

let activeClassRemover = function () {
  lengthOption.classList.add("option--inactive");
  tempOption.classList.add("option--inactive");
  areaOption.classList.add("option--inactive");
  volOption.classList.add("option--inactive");
  weightOption.classList.add("option--inactive");
  timeOption.classList.add("option--inactive");
};

lengthBtn.addEventListener("click", function () {
  activeClassRemover();
  lengthOption.classList.remove("option--inactive");
  active = 0;
});

tempBtn.addEventListener("click", function () {
  activeClassRemover();
  tempOption.classList.remove("option--inactive");
  active = 1;
});

areaBtn.addEventListener("click", function () {
  activeClassRemover();
  areaOption.classList.remove("option--inactive");
  active = 2;
});
volBtn.addEventListener("click", function () {
  activeClassRemover();
  volOption.classList.remove("option--inactive");
  active = 3;
});
weightBtn.addEventListener("click", function () {
  activeClassRemover();
  weightOption.classList.remove("option--inactive");
  active = 4;
});
timeBtn.addEventListener("click", function () {
  activeClassRemover();
  timeOption.classList.remove("option--inactive");
  active = 5;
});