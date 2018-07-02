// added Jquery library
const $ = require("jquery")

const regForm = Object.create({}, {
    buildRegForm: {
        value: () => {

            // Selects the main div class .div--container on the index
            const divRef = document.querySelector(".divContainer");

            //The Title Of The Registration Form
            const $regTitle = $("<h2>").attr("id", "regTitle").text("Registration Form").appendTo($formDiv);

            //The form fields containing the fields and ID's
            const $nameInput = $("<input>").attr("id", "nameInput").attr("placeholder", "Name").appendTo($regTitle);
            const $displayName = $("<input>").attr("id", "displayName").attr("placeholder", "Display Name").appendTo($nameInput);
            const $regEmail = $("<input>").attr("type", "email").attr("id", "regEmail").attr("placeholder", "Email").appendTo($displayName);
            const $regPass = $("<input>").attr("type", "password").attr("id", "regPass").attr("placeholder", "Password").appendTo($regEmail);
            const $birthDate = $("<input>").attr("type", "date").attr("id", "birthDate").attr("placeholder", "Birth Date").appendTo($regPass);
            const $regSubBtn = $("<button>").attr("type", "button").text("Submit").attr("id", "regSubBtn").appendTo($birthDate);

            //created a div and gave it the class of div-welcome
            const $formDiv = $("<div>").appendTo($divContainer);
            console.log(regForm);


        }
    }
})

//exports buildWelcome module
module.exports = regForm;