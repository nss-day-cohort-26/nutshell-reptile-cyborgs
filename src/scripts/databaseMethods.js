// Authors: Emily and Shu, Michael , database methods for whole project

const $ = require("jquery");


const databaseMethods = Object.create({}, {
    postUser: {
        value: (user) => {
            return $.ajax({
                url: "http://localhost:3000/users",
                method: "POST",
                data: user

            })
        }
    },

    getAllUsers: {
        value: () => {
            return $.ajax("http://localhost:3000/users")
        }
    },

    addArticles: {
        value: (articles) => {
            return $.ajax({
                url: "http://localhost:3000/news",
                method: "POST",
                data: articles

            })
        }
    },

    getAllArticles: {
        value: () => {
            return $.ajax("http://localhost:3000/news")
        }
    },
    getAnArticle: {
        value: (id) => {
            return $.ajax(`http://localhost:3000/news/${id}`)
        }
    },

    deleteArticles: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/news/${id}`,
                method: "DELETE"
            })
        }
    },

    postTask: {
        value: (task) => {
            return $.ajax({
                url: "http://localhost:3000/tasks/",
                method: "POST",
                data: tasks
            })

        }


    },
    getAllTasks: {
        value: () => {
            return $.ajax("http://localhost:3000/tasks")
        }
    },
    putTask: {
        value: (id) => {
            $.ajax({
                url: `http://localhost:3000/tasks/${id}`,
                method: "PUT"
            })
        }
    },
    // Methods for events
    postEvent: {
        value: (event) => {
            return $.ajax({
                url: "http://localhost:3000/events",
                method: "POST",
                data: event
            })

        }
    },
    deleteEvent: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/events/${id}`,
                method: "DELETE"
            })
        }
    },
    getAllEvents: {
        value: () => {
            return $.ajax("http://localhost:3000/events")
        }
    },
    putEvents: {
        value: (id) => {
            $.ajax({
                url: `http://localhost:3000/events/${id}`,
                method: "PUT"
            })
        }
    } //End of Event Methods

})

module.exports = databaseMethods;