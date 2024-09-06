//Select the dom elements
let btn = document.querySelector(".btn");
let yourName = document.querySelector(".yourName");
let nameWillShowHere = document.querySelector(".nameWillShowHere");

btn.addEventListener("click", function () {
  nameWillShowHere.innerHTML = yourName.value;
});

let num1Input = document.querySelector(".num1Input");
let num2Input = document.querySelector(".num2Input");
let add = document.querySelector(".add");
let results = document.querySelector(".results");

add.addEventListener("click", function () {
  let num1Value = num1Input.value;
  let num2Value = num2Input.value;
  let finalResults = num1Value + num2Value;
  results.innerHTML = finalResults;

});
