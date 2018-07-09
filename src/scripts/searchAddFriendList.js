
//Author: Aaron
//Purpose: This module adds friends names to DOM

const $ = require("jquery");
const databaseMethods = require("./databaseMethods")

const addFriendBuildList = Object.create({}, {
    createFriendsList : {
        value: function() {
            $("#friends").append($(`
            <h1>My Friends</h1>
            <div id="search-friends">
                <label for="friend-user-name">Find Friends:</label>
                <input type="text" id="friend-user-name" name="friend-user-name" />
                <button id='add-friend'>Add Friend</button>
            </div>
            <button id='find-new-friend'>Search</button>
            <section id='friend-list'></section>`))
            }
        },
    displayFriends: {
        value: () => {
            databaseMethods.getData(`friends?_expand=userID&currentUserID=${currentUserID}`).then((friendsArray) => {
                $("#friend-list").empty()
                friendsArray.forEach(friends => {
                    $("#friend-list").append($(`
                        <div id="friend${friends.users.id}" class='friend-selected'>
                            <div class='friend-name'>${friends.users.name}</div>
                            <button id='${friends.id}' class='deleteFriend'>Bye Felicia</button>
                        </div>
                    `))
                })
            })
        }
    }
})

module.exports = addFriendBuildList



