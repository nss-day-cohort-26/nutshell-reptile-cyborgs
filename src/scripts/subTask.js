const $ = require("jquery")

//Taking users input and posting to the databaseMethod
const databaseMethod = require("./databaseMethods")

const subTask = Object.create({}, {
    subTask: {
        value: () => {
            const $taskUserNameValue = document.getElementById("taskUserName").value;
            const $taskNameValue = document.getElementById("taskNameValue").value;
            const $taskCompleteValue = document.getElementById("taskCompleteValue").value

            const tasks = {
                userName: $taskUserNameValue,
                taskName: $taskNameValue,
                taskComplete: $taskCompleteValue

            }

            databaseMethod.postTask(tasks)
        }
    }

})
module.exports = subTask;