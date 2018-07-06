//authors: Shu
//purpose: crates dom for articles
const $ = require("jquery")
const databaseMethod = require("./databaseMethods")
const userHome = require("./home")


const article = Object.create({}, {
    articleDOM: {
        value: () => {
            console.log("inside article.js")
            userHome.buildUserHome();
            const secRef = document.querySelector("#userContentSection");
            const addArticleButton = $("<button>").attr("id", "addArticle").appendTo(secRef).text("Add Article")
            //needs to add article by article id
            const $article = $("<article>").attr("id", "idValue").appendTo(secRef)
            const $deleteButton = $("<button>").attr("id", "deleteArticle").appendTo($article).text("Delete")

        }
    }
})

module.exports = article;