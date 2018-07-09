const $ = require("jquery")
const databaseMethod = require("./databaseMethods")
const userHome = require("./home")

const chat = Object.create({}, {
    chat: {
        value: () => {
            console.log("inside chat.js")
            userHome.buildUserHome();
            const secRef = document.querySelector("#userContentSection");
            const addArticleButton = $("<button>").attr("id", "addChat").appendTo(secRef).text("Chat")


        }
    }
})

module.exports = chat;