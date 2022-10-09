const form = document.querySelector("form");
const ol = document.querySelector("ol");
const button = document.querySelector("button");
const input = document.getElementById("item");

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

// list of items and append to html
const liMaker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ol.appendChild(li);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach((item) => {
  liMaker(item);
});

// event listener for click button
button.addEventListener("click", function () {
  localStorage.clear(); // clear local storage
  while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
  }

  itemsArray = [];
});
