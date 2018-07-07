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
            const $formDiv = $("<div>").attr("id", "regFormContainer");
            const $regTitle = $("<h2>").attr("id", "regTitle").text("Registration Form").appendTo($formDiv);

            //The form fields containing the fields and ID's
            const $labelName = $("<label>").text("Name:")
            const $nameInput = $("<input>").attr("id", "nameInput").attr("placeholder", "Name").appendTo($labelName);
            $labelName.appendTo($formDiv)

            const $labelDisplayName = $("<label>").text("Display Name: ")
            const $displayName = $("<input>").attr("id", "displayName").attr("placeholder", "Display Name: ").appendTo($labelDisplayName);
            $labelDisplayName.appendTo($formDiv);

            const $labelEmail = $("<label>").text("Email: ")
            const $regEmail = $("<input>").attr("type", "email").attr("id", "regEmail").attr("placeholder", "Email").appendTo($labelEmail);
            $labelEmail.appendTo($formDiv);

            const $labelPassword = $("<label>").text("Password: ")
            const $regPass = $("<input>").attr("type", "password").attr("id", "regPass").attr("placeholder", "Password").appendTo($labelPassword);
            $labelPassword.appendTo($formDiv)

            const $labelBirthDate = $("<label>").text("BirthDate:").appendTo($formDiv);
            const $birthDate = $("<input>").attr("type", "date").attr("id", "birthDate").attr("placeholder", "Birth Date").appendTo($labelBirthDate);
            $birthDate.appendTo($formDiv)

            const $regSubBtn = $("<button>").attr("type", "button").text("Submit").attr("id", "regSubBtn").appendTo($formDiv);

            //created a div and gave it the class of div-welcome
            $formDiv.appendTo(divRef);


        }
    }
})

//exports buildWelcome module
module.exports = regForm;