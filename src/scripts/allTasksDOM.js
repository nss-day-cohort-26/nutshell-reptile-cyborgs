//authors:Michael, Shu
//purpose: This module adds articles to the dom
const $ = require("jquery")
const databaseMethods = require("./databaseMethods")

const addTaskToDom = Object.create({}, {
    projectTask: {
        value: () => {

            databaseMethods.getAllTasks().then((responseTask) =>
                responseTask.forEach(element => {
                    const $taskRef = $("<article>").addClass("userArticle").attr("id", `${element.id}`)
                    console.log("element", element)
                    const $pTaskTitle = $("<p>").text(`${element.title}`).appendTo($taskRef)
                    const $pTaskContent = $("<p>").text(`${element.content}`).appendTo($pTaskTitle)
                    const $pUrl = $("<p>").text(`${element.url}`).appendTo($pTaskContent)
                    const $deleteButton = $("<button>").appendTo($taskRef).text("Delete").attr("id", "taskDel")
                    const $secRef = document.getElementById("userContentSection")
                    $taskRef.appendTo($secRef)
                })
            )
        }
    }
})
module.exports = addTaskToDom;