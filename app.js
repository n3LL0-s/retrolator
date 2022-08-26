const display1 = document.querySelector(".output-1");
const display2 = document.querySelector(".output-2");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".btn-clear");
const off = document.querySelector(".btn-off");
const equal = document.querySelector(".btn-equal");
const operations = document.querySelectorAll(".operation");
const numbers = document.querySelectorAll(".num");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2.innerText = dis2Num;
  });
});

operations.forEach((operation) =>
  operation.addEventListener("click", (e) => {
    if (!dis2Num) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  })
);

function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1.innerText = dis1Num;
  display2.innerText = "";
  dis2Num = "";
}

function mathOperation() {
  if (lastOperation === "*") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}

equal.addEventListener("click", (e) => {
  if (!dis1Num || !dis2Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2.innerText = result;
});

clear.addEventListener("click", (e) => {
  display1.innerText = "";
  display2.innerText = "";
  dis1Num = "";
  dis2Num = "";
  result = "";
});

off.addEventListener("click", (e) => {
  display2.innerHTML = "Goodbye!";
});

//theme-switch

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("dark-theme");
});
s
let changeIcon = (icon) => {
    icon.classList.toggle("fa-solid fa-toggle-off");
  };