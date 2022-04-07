//Elements
const numberElement = document.querySelector(".number");
const increaseButton = document.querySelector("#increaseButton");
const decreaseButton = document.querySelector("#decreaseButton");
const resetButton = document.getElementById("resetButton");

//Event Listeners
document.addEventListener("DOMContentLoaded", resetNumber);
increaseButton.addEventListener("click", increment);
decreaseButton.addEventListener("click", decrement);
resetButton.addEventListener("click", resetNumber);

//Functions
function resetNumber() {
  console.log("resetNumber");
  numberElement.innerText = 0;
  changeColor();
}

function increment() {
  console.log("increment");
  let number = parseInt(numberElement.innerText);
  number++;
  numberElement.innerText = number;
  changeColor();
}

function decrement() {
  console.log("decrement");
  let number = parseInt(numberElement.innerText);
  number--;
  numberElement.innerText = number;
  changeColor();
}
function changeColor() {
  let number = parseInt(numberElement.innerText);
  let color;
  if (number > 0) {
    color = "blue";
  } else if (number === 0) {
    color = "hsl(282, 20%, 50%)";
  } else {
    color = "hsl(0, 55%, 50%)";
  }
  numberElement.style.color = color;
}
