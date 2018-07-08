// Aaron, Michael, Shu, Emily - making event listeners

const $ = require("jquery");
const regForm = require("./regform")
const clear = require("./clear")
const addUser = require("./addUser")
const login = require("./loginForm")
const userHome = require("./home")
const databaseMethod = require("./databaseMethods")
const welcome = require("./welcome")
const articles = require("./articles")
const addArticle = require("./addArticle")
const allArticlesDOM = require("./allArticlesDOM")
const subArticle = require("./subArticle")
const addTask = require("./addtask")

//if register button is clicked, take to register page. If login button is clicked, take to login page
const body = document.querySelector("body");
body.addEventListener("click", () => {
    if (event.target.id === "registerButton") {
        clear();
        regForm.buildRegForm();
    } else if (event.target.id === "regSubBtn") {
        addUser();
    } else if (event.target.id === "loginButton") {
        clear();
        login.buildLoginForm();
    } else if (event.target.id === "submitLoginButton") {
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
            if (isDuplicate === false) {
                alert("Incorrect Login Please Login or sign up")
                clear()
                welcome.buildWelcome();
            }

        })
    } //close of else if
    else if (event.target.id === "news") {
        clear()
        articles.articleDOM();
        allArticlesDOM.projectArticle();
    } else if (event.target.id === "addArticle") {
        clear()
        addArticle.addArticle();
    }
    // else if (event.target.id === "deleteArticle") {
    //   //call to delete
    // }
    else if (event.target.id === "articleSubmit") {
        console.log("article submit was pressed")
        subArticle.subArticle();
        clear();
        articles.articleDOM();
        allArticlesDOM.projectArticle()
    } else if (event.target.id === "articleDel") {
        const id = $(event.target).parent().attr("id");
        databaseMethod.deleteArticles(id).then(() => {
            clear();
            articles.articleDOM();
            allArticlesDOM.projectArticle()
        })
    } else if (event.target.id === "tasks") {
        addTask.addTask();
        clear();
        addTaskToDom.projectTask()
    }
})