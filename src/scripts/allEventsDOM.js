const $ = require("jquery")
const databaseMethods = require("./databaseMethods")

const allEventsDOM = Object.create({}, {
    projectEvents: {
        value: () => {

            databaseMethods.getAllEvents().then((responseEvents) => {
                    //try a for in loop?
                    console.log("responseEvents",responseEvents)
                    for (let date in responseEvents) {
                        console.log("key,", date);
                    }
                }

                //sort response before creating card
                // responseEvents.sort(function(a, b) {
                //     let sortEvents = b.localeCompare(a)
                //     console.log("sortEvents", sortEvents)
                // })


                // responseEvents.forEach(element => {
                //     const $artRef = $("<article>").addClass("userArticle").attr("id", `${element.id}`)
                //     console.log("element", element)
                //     const $pEventName = $("<p>").text(`${element.eventName}`).appendTo($artRef)
                //     //                 "eventName": "me",
                //     //   "description": "me",
                //     //   "date": "\"2019-03-10\"",
                //     //   "location": "me",
                //     const $pEventDescription = $("<p>").text(`${element.description}`).appendTo($pEventName)
                //     const $pEventLocation = $("<p>").text(`${element.location}`).appendTo($pEventDescription)
                //     const $pEventDate = $("<p>").text(`${element.date}`).appendTo($pEventLocation)
                //     const $deleteButton = $("<button>").appendTo($artRef).text("Delete").attr("id", "EventDelete")
                //     const $divRef = document.querySelector(".div--container")
                //     $artRef.appendTo($divRef)
                // })
            )
        }
    }
})
module.exports = allEventsDOM;