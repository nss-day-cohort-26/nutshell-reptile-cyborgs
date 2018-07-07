const $ = require("jquery");
const databaseMethods = require("./databaseMethods")


const allFriendsDOM = Object.create({}, {
    projectFriend{
        value: () => {
            databaseMethods.getData(`friends?_expand=user&currentUserID=${currentUserID}`).then((responseFriendArray) =>
                responseFriend.forEach(element => {
                    const $friendRef = $("<article>").addClass("userFriend").attr("id", `${element.id}`)
                    console.log("element", element)
                    const $paraFriendUserName = $("<p>").text(`$element`.)
                })
            )
        }
    }
})
    