// Authors: Emily and Shu , database methods for whole project

const $ = require("jquery");


const databaseMethods = Object.create({}, {
    postUser: {
        value: () => {
            return $.ajax({
                url: "http://localhost:3000/welcome",
                method: "POST"

            })
        }
    },

    getAllUsers: {
        value: () => {
            return $.ajax("http://localhost:3000/welcome")
        }
    }
})
module.exports = databaseMethods;