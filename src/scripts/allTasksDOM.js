const $ = require("jquery")
const databaseMethods = require("./databaseMethods")

const addTaskToDom = Object.create({}, {
    projectTask: {
        value: () => {

            databaseMethods.getAllTasks().then((responseTask) =>
                responseTask.forEach(element => {
                    const $artRef = $("<article>").addClass("userArticle").attr("id", `${element.id}`)
                    console.log("element", element)
                    const $pTaskTitle = $("<p>").text(`${element.title}`).appendTo($artRef)
                    const $pTaskContent = $("<p>").text(`${element.content}`).appendTo($pTaskTitle)
                    const $pUrl = $("<p>").text(`${element.url}`).appendTo($pTaskContent)
                    const $deleteButton = $("<button>").appendTo($artRef).text("Delete").attr("id", "articleDel")
                    const $secRef = document.getElementById("userContentSection")
                    $artRef.appendTo($secRef)
                })
            )
        }
    }
})
module.exports = addTaskToDom;