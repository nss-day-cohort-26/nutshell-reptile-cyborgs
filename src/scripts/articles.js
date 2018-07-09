//authors: Shu
//purpose: creates dom for articles
const $ = require("jquery")
const databaseMethod = require("./databaseMethods")
const userHome = require("./home")


const article = Object.create({}, {
    articleDOM: {
        value: () => {

            userHome.buildUserHome();
            const secRef = document.querySelector("#userContentSection");
            const addArticleButton = $("<button>").attr("id", "addArticle").appendTo(secRef).text("Add Article");
            console.log(article);

        }
    }
})

module.exports = article;