//Authors: Michael Roberts and Aaron Miller
//Purpose: This module creates the registration form

// added Jquery library
const $ = require("jquery")

const regForm = Object.create({}, {
    buildRegForm: {
        value: () => {

            // Selects the main div class .div--container on the index
            const divRef = document.querySelector(".div--container");

            //The Title Of The Registration Form
            const $formDiv = $("<div>")
            const $regTitle = $("<h2>").attr("id", "regTitle").text("Registration Form").appendTo($formDiv);

            //The form fields containing the fields and ID's
            const $paraName = $("<p>").text("Name:")
            const $nameInput = $("<input>").attr("id", "nameInput").attr("placeholder", "Name").appendTo($paraName);
            $paraName.appendTo($formDiv)

            const $paraDisplayName = $("<p>").text("Display Name: ")
            const $displayName = $("<input>").attr("id", "displayName").attr("placeholder", "Display Name: ").appendTo($paraDisplayName);
            $paraDisplayName.appendTo($formDiv);

            const $paraEmail = $("<p>").text("Email: ")
            const $regEmail = $("<input>").attr("type", "email").attr("id", "regEmail").attr("placeholder", "Email").appendTo($paraEmail);
            $paraEmail.appendTo($formDiv);

            const $paraPassword = $("<p>").text("Password: ")
            const $regPass = $("<input>").attr("type", "password").attr("id", "regPass").attr("placeholder", "Password").appendTo($paraPassword);
            $paraPassword.appendTo($formDiv)
            const $paraBirthDate = $("<p>").text("BirthDate: ")
            const $birthDate = $("<input>").attr("type", "date").attr("id", "birthDate").attr("placeholder", "Birth Date").appendTo($paraBirthDate);
            $birthDate.appendTo($formDiv)

            const $regSubBtn = $("<button>").attr("type", "button").text("Submit").attr("id", "regSubBtn").appendTo($formDiv);

            //created a div and gave it the class of div-welcome
            $formDiv.appendTo(divRef);
            console.log(divRef);

        }
    }
})

//exports buildWelcome module
module.exports = regForm;