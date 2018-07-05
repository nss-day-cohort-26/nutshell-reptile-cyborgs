//authors: Shu
//purpose: crates dom for articles
const $ = require("jquery")
const databaseMethod = require("./databaseMethods")
const userHome = require("./home")


const article = Object.create({}, {
    addArticle: {
        value: () => {
            console.log("inside article.js")
            userHome.buildUserHome();
            const divRef = document.querySelector(".div--container");
            const addArticleButton = $("<button>").attr("id", "addArticle").appendTo(divRef).text("Add Article")
            //needs to add article by article id
            const $article = $("<article>").attr("id", "idValue").appendTo(divRef)
            const $deleteButton = $("<button>").attr("id", "deleteArticle").appendTo($article).text("Delete")

        }
    }
})

module.exports = article;