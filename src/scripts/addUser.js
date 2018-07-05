//author Emily and Shu
//purpose Add user to database
const $ = require("jquery")
const databaseMethod = require("./databaseMethods")
const clear =require("./clear")

const addUser = () =>{
    const name = document.getElementById("nameInput").value;
    const displayName = document.getElementById("displayName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPass").value;
    const birthDate = document.getElementById("birthDate").value;

   const user = {
       name:name,
       displayName:displayName,
       email:email,
       password:password,
       birthday:birthDate
   };
   let isDuplicate = false;
   databaseMethod.getAllUsers().then((response)=>{
   response.forEach(element => {
       console.log("element", element)
       if(name.toUpperCase() ===  element.name.toUpperCase()){
           isDuplicate = true;
           alert("User exists")
           const welcome = require("./welcome")
           welcome.buildWelcome()
        }
       })
   if(isDuplicate === false){
       databaseMethod.postUser(user)
   }
   })
}
module.exports = addUser;

// "name": "Test_Name",
//         "id": 0,
//         "displayName": "Test_Display_Name",
//         "email": "@test.com",
//         "password": "Test_Password",
//         "birthday": "Test_Birthday"
// function inputForm () {

//     taskListFunction.createTask(todo, description, dueDate, "to do");
//   }
// // document.getElementById("submit-button").addEventListener("click", inputForm)
// document.getElementById("submit-button").addEventListener("click", () => {
//   inputForm();
//   dom();
// });