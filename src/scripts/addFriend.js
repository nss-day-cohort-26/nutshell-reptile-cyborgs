//Author: Shu
//Purpose:Runs when addFriend button is clicked from eventListeners. Creates input fields and uses post method to news database

const $ = require("jquery")
const databaseMethod = require("./databaseMethods")

const addFriend = Object.create({}, {
        addArticle: {
            value: () => {
                const divRef = document.querySelector(".div--container");
                const $divFriend = $("<div>").attr("id", "friendIdPlaceholder").text("Article").appendTo(divRef)
                const $paraFriend = $("<p>").appendTo($divFriend)
                const $friendAddSubmit = $("<button>").attr("id", "friendSubmit").text("Submit").appendTo($friendArticle)
            }
        } //end of addArticle Method
    }) //end of object
module.exports = addFriend;