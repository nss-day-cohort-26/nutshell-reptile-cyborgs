// Aaron, Michael, Shu, Emily - making event listeners

const $ = require("jquery");
const regForm = require("./regform")
const clear = require ("./clear")
const addUser = require("./addUser")
const login = require("./loginForm")

const body = document.querySelector("body");
body.addEventListener("click", () => {
  if (event.target.id === "registerButton") {
      clear();
    regForm.buildRegForm();
  }
  else if (event.target.id === "regSubBtn") {
    addUser ();
    clear();
  }
  else if (event.target.id === "loginButton") {
    clear();
    login.buildLoginForm();
}
})