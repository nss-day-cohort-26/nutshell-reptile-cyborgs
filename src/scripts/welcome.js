// added Jquery library
const $ = require("./jquery")

const buildWelcome = () => {
    // Selects the main div class .div--container on the index
    const divRef = document.querySelector(".div--container");

    //created a div and gave it the class of div-welcome
    const $divWelcome = $("<div>").addClass("div-Welcome");

    //Created elements with ID's
    const $h1Welcome = $("<h1>").text("Welcome").id("h1Welcome");
    const $loginButton = $("<button>").text("Login").id("loginButton");
    const $registerButton = $("<button>").text("Sign Up").id("registerButton");

    //Appending to DOM.
    $registerButton.appendTo($loginButton);
    $loginButton.appendTo($h1Welcome);
    $h1Welcome.appendTo(divRef);
}

//exports buildWecome module
module.export = buildWelcome