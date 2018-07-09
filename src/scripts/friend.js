const $ = require("jquery")
const databaseMethod = require("./databaseMethods")
const userHome = require("./home")


const friendsList = Object.create({}, {
    friendDOM: {
        value: () => {
            console.log("inside friend.js")
            userHome.buildUserHome();
            const secRef = document.querySelector("#userContentSection");
            const addFriendInChatButton = $("<button>").attr("id", "chatHistory").appendTo(secRef).text("Chat History");
            const friendListButton = $("<button>").attr("id", "friendsList").appendTo(addFriendInChatButton).text("Friends List")
        }
    }
})

module.exports = friendsList;