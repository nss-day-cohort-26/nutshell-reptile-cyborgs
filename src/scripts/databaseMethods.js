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
    searchUsers: {
        value: (name) => {
            return $.ajax(`http://localhost:3000/news/${name}`)
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
                data: task
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
    //--- <a class="nav-link" href="#">Friends List<span class="sr-only">(current)</span></a>---FIX CLASS IF NECESSARY---//
    postFriend: {
        value: (friend) => {
            return $.ajax({
                url: "http://localhost:3000/friends",
                method: "POST",
                data: friend
            })
        }
    },

    getAllFriends: {
        value: () => {
            return $.ajax("http://localhost:3000/friends")
        }
    },

    getAFriend: {
        value: (id) => {
            return $.ajax(`http://localhost:3000/friends/${id}`)
        }
    },

    deleteFriends: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/friends/${id}`,
            })
        }
    },
    getData: {
        value: (resource) => {
            return $.ajax(`http://localhost:3000/${resource}`)
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
    getOneEvent: {
        value: (id) => {
            return $.ajax(`http://localhost:3000/events/${id}`)
        }
    },
    putEvents: {
        value: (id,event) => {
            $.ajax({
                url: `http://localhost:3000/events/${id}`,
                method: "PUT",
                data:event
            })
        }
    } ,
    postChat: {
        value: (chatObject) => {
            console.log(chatObject)
            return $.ajax({
                url: "http://localhost:3000/messages",
                method: "POST",
                data: chatObject
            })

        }
    },
    getChat: {
        value: () => {
            return $.ajax("http://localhost:3000/messages")
        }
    },
    //End of Event Methods
})

module.exports = databaseMethods;