
//Author: Aaron
//Purpose: This module adds friends names to DOM

const $ = require("jquery");
const databaseMethods = require("./databaseMethods")


const allFriendsDOM = Object.create({}, {
    projectFriend: {
        value: () => {
            databaseMethods.getData(`friends?_expand=user&currentUserID=${currentUserID}`).then((responseFriendArray) => {
                responseFriendArray.forEach(element => {
                    const $friendRef = $("<article>").addClass("userFriend").attr("id", `${element.id}`)
                    console.log("element", element)
                    const $paraFriendUserName = $("<p>").text(`${currentUserID}`).appendTo($friendRef)
                    })
                }
            )
        }
    }
})
