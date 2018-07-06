//authors:Shu and Aaron
//purpose: This module adds articles to the dom

const $ = require("jquery")
const databaseMethods = require("./databaseMethods")

const addArticleToDOM= Object.create ({},{
    projectArticle:{
    value:()=>{
        databaseMethods.getAllArticles().then((responseArticle)=>
    responseArticle.forEach(element => {
        console.log("element",element)
        const $artRef = $("<article>").addClass("article")
        // databaseMethod.getAnArticle(element..then((responseArticle?))
    })
    )
    }
}
})
module.exports = addArticleToDOM;
// return?yes