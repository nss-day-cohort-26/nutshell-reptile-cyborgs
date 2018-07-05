// added Jquery library
const $ = require("jquery")

const navBar = document.querySelector("#navBar")
const databaseMethod = require("./databaseMethods")


//User Header and search bar&button//
const userHome = Object.create({}, {
    buildUserHome: {
        value: () => {

            navBar.innerHTML = `
<a class="navbar-brand" href="#">Reptile Cyborgs</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
<li class="nav-item active">
        <a class="nav-link" href="#">Friends List<span class="sr-only">(current)</span></a>
</li>
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Tasks</a>
      </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Friends Tasks</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Chat</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Events</a>
      </li>
    </ul>
  </div>
  `
            console.log("inside buildUserHome")

            const divRef = document.querySelector(".div--container");

            const $userContainerDiv = $("<div>").attr("id", "userHeaderContainer");

            const $userNameTitle = $("<h1>").attr("id", "userNameTitle").text({}).appendTo($userContainerDiv);

            const $labelSearchBar = $("<label>").text("Search:");
            const $searchInput = $("<input>").attr("id", "searchInput").attr("placeholder", "Search").appendTo($labelSearchBar);
            $labelSearchBar.appendTo($userContainerDiv);

            const $searchButton = $("<button>").attr("type", "button").text("Search").attr("id", "searchButton").appendTo($userContainerDiv);

            const $contentContainerDiv = $("<div>").attr("id", "contentContainerDiv").appendTo($userContainerDiv);

            const $userContentSection = $("<section>").attr("id", "userContentSection").appendTo($userContainerDiv)
            $userContainerDiv.appendTo(divRef)
        }
    }
})
module.exports = userHome;