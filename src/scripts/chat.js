const $ = require("jquery")
const databaseMethod = require("./databaseMethods")
const userHome = require("./home")

const chat = Object.create({}, {
    chat: {
        value: () => {
            console.log("inside chat.js")
            userHome.buildUserHome();
            const secRef = document.querySelector("#chatButton");
            const addArticleButton = $("<button>").attr("id", "addChat").appendTo(secRef).text("Chat")
            $("#searchInput").attr("placeholder", "chat");
            $("#labelSearchBar").text("Chat:");
            $("#searchButton").attr("id","chatButton")
            $("#searchInput").attr("id","chatInput")


        }
    }
})

module.exports = chat;