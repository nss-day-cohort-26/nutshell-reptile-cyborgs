// Aaron, Michael, Shu, Emily - making event listeners

const $ = require("jquery");
const regForm = require("./regform")
const clear = require ("./clear")
const addUser = require("./addUser")
const login = require("./loginForm")
const userHome = require("./home")
const databaseMethod = require("./databaseMethods")
const welcome = require("./welcome")
const articles = require("./articles")

const body = document.querySelector("body");
body.addEventListener("click", () => {
  if (event.target.id === "registerButton") {
      clear();
    regForm.buildRegForm();
  }
  else if (event.target.id === "regSubBtn") {
    addUser ();
    clear();
    userHome.buildUserHome();
  }
  else if (event.target.id === "loginButton") {
    clear();
    login.buildLoginForm();
}
  else if (event.target.id === "submitLoginButton"){
    //get values from input field and test for user and password
    const name = document.getElementById("nameInput").value;
    let isDuplicate = false;
    databaseMethod.getAllUsers().then((response) => {
        response.forEach(element => {
            console.log("element", element)
            if (name.toUpperCase() === element.name.toUpperCase()) {
                isDuplicate = true;
                clear()
                userHome.buildUserHome();
            }
          })
              if (isDuplicate===false){
                  alert("Incorrect Login Please Login or sign up")
                  clear()
                  welcome.buildWelcome();
          }

    })
} //close of else if
  else if(event.target.id === "addArticle"){
    article.addArticles();
  }
  else if(event.target.id === "deleteArticle"){
    //call to delete
  }
})