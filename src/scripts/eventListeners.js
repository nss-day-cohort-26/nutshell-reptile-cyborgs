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
const chatDOM = require("./chat")

const addTask = require("./addTask")
const addTaskToDom = require("./allTasksDOM")

const eventForm = require("./eventForm")
const subEvent = require("./subEvent")
const subEditEvents = require("./subEditEvent")
const allEventsDOM = require("./allEventsDOM")
const editEventForm = require("./editEventForm")

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
    } else if (event.target.id === "articleSubmit") {

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

        clear();

        addTask.addTask();
        addTaskToDom.projectTask();
    } else if (event.target.id === "taskDel") {
        clear()

    }
    // Start of events eventListeners
    else if (event.target.id === "events") {
        clear();
        eventForm.eventForm()
        allEventsDOM.projectEvents();
    } else if (event.target.id === "eventSubmit") {
        subEvent.subEvent()
        clear();
        eventForm.eventForm()
        allEventsDOM.projectEvents();
    } else if (event.target.id === "eventDelete") {
        const id = $(event.target).parent().attr("id");
        databaseMethod.deleteEvent(id).then(() => {
            clear();
            eventForm.eventForm()
            allEventsDOM.projectEvents();
        })
    } else if (event.target.id === "eventPut") {
        const id = $(event.target).parent().attr("id");
        module.exports = id;
        clear()
        editEventForm.editEventForm()

    } else if (event.target.id === "eventPutSubmit") {
        subEditEvents.subEditEvents();
        clear();
        eventForm.eventForm()
        allEventsDOM.projectEvents();
    }
    /*---End of Event event listeners --*/
    else if (event.target.id === "chat") {
        clear();
        chat.chat();
    }
})