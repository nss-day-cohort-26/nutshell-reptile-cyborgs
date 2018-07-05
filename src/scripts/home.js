// Author: Aaron Miller
// Purpose: to provide landscape for user home 

const $ = require("jquery")
const databaseMethod = require("./databaseMethods")

//User Header and seach bar&button//
const userHome = Object.create({}, {
    buildUserHome: {
        value: () => {

            const divRef = document.querySelector(".div--container");

            const $userContainerDiv = $("<div>").attr("id", "userHeaderContainer");

            const $userNameTitle = $("<h1>").attr("id", "userNameTitle").text({}).appendTo($userContainerDiv);

            const $labelSearchBar = $("<label>").text("Search:");
            const $searchInput = $("<input>").attr("id", "searchInput").attr("placeholder", "Search").appendTo($labelSearchBar);
            $labelSearchBar.appendTo($userContainerDiv);

            const $searchButton = $("<button>").attr("type", "button").text("Search").attr("id", "searchButton").appendTo($userContainerDiv);

            const $contentContainerDiv = $("<div>").attr("id", "contentContainerDiv").appendTo($userContainerDiv);

            const $userContentSection = $("<section>").attr("id", "userContentSection").appendTo($userContainerDiv)
        }
    }
})
module.exports = userHome;






