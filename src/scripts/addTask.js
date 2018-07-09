//Aaron and Emily - Creating Task box


const $ = require("jquery")

const databaseMethod = require("./databaseMethods")

const addTask = Object.create({}, {
        addTask: {
            value: () => {
                const divRef = document.querySelector(".div--container");
                const $divTask = $("<div>").attr("id", "taskIdPlaceholder").text("Task").appendTo(divRef)
                const $paraTask = $("<p>").appendTo($divTask)
                const $taskTitleLabel = $("<label>").attr("for", "taskTitle").text("Task Name").appendTo($paraTask)
                const $taskTitleInput = $("<input>").attr("id", "taskTitle").appendTo($taskTitleLabel)
                const $taskCompleteDateLabel = $("<label>").attr("for", "taskCompleteDate").text("Task Complete Date").appendTo($paraTask)
                const $taskCompleteDateInput = $("<input>").attr("id", "taskCompleteDate").appendTo($taskCompleteDateLabel)
                const $taskCompletion = $("<label>").attr("for", "taskToComplete").text("Completion Date").appendTo($divTask)
                const $taskAddSubmit = $("<button>").attr("id", "taskSubmit").text("Add Task").appendTo($divTask)

                //  const $taskContentInput = $(":checkbox").attr("id", "taskToComplete").appendTo($taskCompletion)

            }

        } //end of addArticle Method
    }) //end of object
module.exports = addTask;