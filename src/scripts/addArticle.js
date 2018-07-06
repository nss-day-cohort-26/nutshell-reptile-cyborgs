//Author: Shu
//Purpose:Runs when addArticle button is clicked from eventListeners. Creates input fields and uses post method to news database

const $ = require("jquery")
const databaseMethod = require("./databaseMethods")

const addArticle = Object.create({}, {
    addArticle: {
        value: () => {
            const divRef = document.querySelector(".div--container");
            const $divArticle = $("<div>").attr("id", "articleIdPlaceholder").text("Article").appendTo(divRef)
            const $paraArticle = $("<p>").appendTo($divArticle)
            const $artTitleLabel = $("<label>").attr("for", "artTitle").text("Article Title").appendTo($paraArticle)
            const $artTitleInput = $("<input>").attr("id", "artTitle").appendTo($artTitleLabel)

            const $artContentLabel = $("<label>").attr("for", "artContent").text("Article Content").appendTo($paraArticle)
            const $artContentInput = $("<input>").attr("id", "artContent").appendTo($artContentLabel)

            const $artURLLabel = $("<label>").attr("for", "artURL").text("Article URL").appendTo($paraArticle)
            const $artURLInput = $("<input>").attr("id", "artURL").appendTo($artURLLabel)
            const $artAddSubmit =$("<button>").attr("id", "articleSubmit").text("Submit").appendTo($divArticle)

            const $artTitleValue = document.getElementById("artTitle").value;
            const $artContentValue = document.getElementById("artContent").value;
            const $artURLValue = document.getElementById("artURL").value

            const articles = {
                title: $artTitleValue,
                content: $artContentValue,
                url: $artURLValue
            }
            databaseMethod.addArticles(articles)

        } //end of addArticle Method
    }
}) //end of object
module.exports = addArticle;