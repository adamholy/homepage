console.log("Hello!");
let body = document.querySelector(".body");
let article = document.querySelector(".article")
let themeName = document.querySelector(".themeName")
let button = document.querySelector(".button")

button.addEventListener("click", () => {
  body.classList.toggle("body__dark");

  themeName.innerText = body.classList.contains("body__dark") ? "jasny" : "ciemny";

});
