// added Jquery library
const $ = require("jquery")

const RegForm = Object.create({}, {
    buildRegForm: {
        value: () => {

            // Selects the main div class .div--container on the index
            const divRef = document.querySelector(".divContainer");

            //created a div and gave it the class of div-welcome
            const $formDiv = $("<div>").attr("id", "regForm").appendTo($divContainer);

            //The Title Of The Registration Form
            $("<h2>").attr("id", "regTitle").text("Registration Form").appendTo($regForm);

            //The form fields containing the fields and ID's
            $("<input>").attr("id", "nameInput").attr("placeholder", "Name").appendTo($regTitle);
            $("<input>").attr("id", "displayName").attr("placeholder", "Display Name").appendTo($nameInput);
            $("<input>").attr("type", "email").attr("id", "regEmail").attr("placeholder", "Email").appendTo($displayName);
            $("<input>").attr("type", "password").attr("id", "regPass").attr("placeholder", "Password").appendTo($regEmail);
            $("<input>").attr("type", "date").attr("id", "birthDate").attr("placeholder", "Birth Date").appendTo($regPass);
            $("<button>").attr("type", "button").text("Submit").attr("id", "regSubBtn").appendTo($birthDate);
            console.log(regForm);


        }
    }
})

//exports buildWelcome module
module.exports = buildRegForm