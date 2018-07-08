//Aaron and Emily - Creating Task box


const $ = require("jquery")

const databaseMethod = require("./databaseMethods")

const addTask = Object.create({}, {
        addTask: {
            value: () => {
                const divRef = document.querySelector(".div--container");
                const $divTask = $("<div>").attr("id", "taskIdPlaceholder").text("Task").appendTo(divRef)
                const $paraTask = $("<p>").appendTo($divTask)
                const $taskTitleLabel = $("<label>").attr("for", "artTitle").text("Task Name").appendTo($paraTask)
                const $taskTitleInput = $("<input>").attr("id", "artTitle").appendTo($taskTitleLabel)

                const $taskCompletion = $("<label>").attr("for", "taskToComplete").text("Completion Date").appendTo($paraTask)
                const $taskContentInput = $(":checkbox").attr("id", "taskToComplete").appendTo($taskCompletion)

            }

        } //end of addArticle Method
    }) //end of object
module.exports = addTask;