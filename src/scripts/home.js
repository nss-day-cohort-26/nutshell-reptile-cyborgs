// added Jquery library
const $ = require("jquery")

const navBar = document.querySelector("#navBar")

navBar.innerHTML = `
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
<li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
</li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  `


//Create an object containing the navbar

// const navBarMain = Object.create({}, {
//     buildNavBar: {
//         value: () => {

//             // Selects the main div class .div--container on the index
//             const divRef = document.querySelector(".div--container");

//             //Create the Nav tag and give it a class.
//             const $navEl = $("<nav>").addClass("navbar navbar-expand-lg navbar-light bg-light").appendTo(divRef);
//             // Create the Navbar links

//             const $navDivEl = $("<div>").addClass("collapse navbar-collapse").attr("id", "navbarNav").appendTo($navEl);
//             const $navUl = $("<ul>").addClass("navbar-nav").appendTo($navDivEl);
//             const $navLi1 = $("li").addClass("nav-item active").appendTo($navUl);
//             const $aFriendsList = $("<a>").addClass("nav-link").text("Friends List").appendTo($navLi1);

//             //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//             //       </li>
//             //       <li class="nav-item">
//             //         <a class="nav-link" href="#">Features</a>
//             //       </li>
//             //       <li class="nav-item">
//             //         <a class="nav-link" href="#">Pricing</a>
//             //       </li>
//             //       <li class="nav-item">
//             //         <a class="nav-link disabled" href="#">Disabled</a>
//             //       </li>
//             //     </ul>
//             //   </div>


//         }
//     }
// })

// module.exports = navBarMain;

// //Bootstrap NavBar
// < nav class = "navbar navbar-expand-lg navbar-light bg-light" >
//     <
//     a class = "navbar-brand"
// href = "#" > Navbar < /a> <
//     button class = "navbar-toggler"
// type = "button"
// data - toggle = "collapse"
// data - target = "#navbarNav"
// aria - controls = "navbarNav"
// aria - expanded = "false"
// aria - label = "Toggle navigation" >
//     <
//     span class = "navbar-toggler-icon" > < /span> <
//     /button> <
//     div class = "collapse navbar-collapse"
// id = "navbarNav" >
//     <
//     ul class = "navbar-nav" >
//     <
//     li class = "nav-item active" >
//     <
//     a class = "nav-link"
// href = "#" > Home < span class = "sr-only" > (current) < /span></a >
//     <
//     /li> <
//     li class = "nav-item" >
//     <
//     a class = "nav-link"
// href = "#" > Features < /a> <
//     /li> <
//     li class = "nav-item" >
//     <
//     a class = "nav-link"
// href = "#" > Pricing < /a> <
//     /li> <
//     li class = "nav-item" >
//     <
//     a class = "nav-link disabled"
// href = "#" > Disabled < /a> <
//     /li> <
//     /ul> <
//     /div> <
//     /nav>