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
   databaseMethod.getAllUsers().then((response)=>
   user.name.forEach(element => {
       if(name ===  element.name){
           alert("invalid")
        }
           else{
            databaseMethod.postUser(user)
           }
   })
)
   clear()
}

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