//authors:Michael, Shu
//purpose: This module adds articles to the dom
const $ = require("jquery")
const databaseMethods = require("./databaseMethods")

const addTaskToDom = Object.create({}, {
    projectTask: {
        value: () => {

            databaseMethods.getAllTasks().then((responseTask) =>
                responseTask.forEach(element => {
                    const $taskRef = $("<article>").addClass("taskArticle").attr("id", `${element.id}`)
                    console.log("element", element)
                    const $taskSection = $("<section>").addClass("taskSection");
                    const $pTaskTitle = $("<p>").text(`${element.taskName}`).appendTo($taskSection)
                    const $pTaskCompDate = $("<p>").text(`${element.taskCompDate}`).appendTo($taskSection)
                        //const $pId = $("<p>").text(`${element.Id}`).appendTo($taskSection)
                    const $deleteButton = $("<button>").appendTo($taskSection).text("Delete").attr("id", "taskDel")
                    const $divRef = $(".div--container");
                    $taskSection.appendTo($taskRef);
                    $taskRef.appendTo($divRef)
                }))
        }
    }
})

module.exports = addTaskToDom;