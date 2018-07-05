const $ = require("jquery")
const databaseMethod = require("./databaseMethods")
const userHome = require("./home")


const article = Object.create({}, {
    addArticle: {
        value: () => {
userHome.buildUserHome();
            const addArticleButton =("<button>").attr("id", "addArticle").appendTo($userContentSection)
            //needs to add article by article id
           const $article = ("<article>").attr("id", "idValue").appendTo($userContentSection)
           const $deleteButton = ("<button>").attr("id", "deleteArticle").appendTo($article)

        }}})

        module.exports = article;