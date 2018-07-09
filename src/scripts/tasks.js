//authors: Shu/ Michael
//purpose: creates dom for tasks
const $ = require("jquery")
const databaseMethod = require("./databaseMethods")
const userHome = require("./home")
const clear = require("./clear")

const task = Object.create({}, {
    taskDom: {
        value: () => {
            console.log("inside task.js")
            clear()
            userHome.buildUserHome();
            const secRef = document.querySelector("#userContentSection");
            const addTaskButton = $("<button>").attr("id", "addTask").appendTo(secRef).text("Add Task")


        }
    }
})

module.exports = task;