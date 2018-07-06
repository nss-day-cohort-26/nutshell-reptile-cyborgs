const $ = require("jquery")
const databaseMethod = require("./databaseMethods")

const subArticle = Object.create({}, {
    subArticle: {
        value: () => {
            const $artTitleValue = document.getElementById("artTitle").value;
            const $artContentValue = document.getElementById("artContent").value;
            const $artURLValue = document.getElementById("artURL").value

            const articles = {
                title: $artTitleValue,
                content: $artContentValue,
                url: $artURLValue

            }

            databaseMethod.addArticles(articles)
        }
    }

})
module.exports = subArticle;