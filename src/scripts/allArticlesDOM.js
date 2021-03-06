//authors:Shu and Aaron
//purpose: This module adds articles to the dom

const $ = require("jquery")
const databaseMethods = require("./databaseMethods")

const addArticleToDOM = Object.create({}, {
    projectArticle: {
        value: () => {

            databaseMethods.getAllArticles().then((responseArticle) =>
                responseArticle.forEach(element => {
                    const $artRef = $("<article>").addClass("userArticle").attr("id", `${element.id}`)

                    const $pArticleTitle = $("<p>").text(`${element.title}`).appendTo($artRef)
                    const $pArticleContent = $("<p>").text(`${element.content}`).appendTo($pArticleTitle)
                    const $pUrl = $("<p>").text(`${element.url}`).appendTo($pArticleContent)
                    const $deleteButton = $("<button>").appendTo($artRef).text("Delete").attr("id", "articleDel")
                    const $secRef = document.getElementById("userContentSection")
                    $artRef.appendTo($secRef)
                })
            )
        }
    }
})
module.exports = addArticleToDOM;
// return?yes