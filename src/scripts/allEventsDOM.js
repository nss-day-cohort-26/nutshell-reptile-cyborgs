const $ = require("jquery")
const databaseMethods = require("./databaseMethods")

const allEventsDOM = Object.create({}, {
    projectEvents: {
        value: () => {

            databaseMethods.getAllEvents().then((responseEvents) => {
                //try a for in loop?
                console.log("responseEvents", responseEvents)
                const sortedArray = responseEvents.sort(function (a, b) {
                    a = new Date(a.date); //new creates new object and fills it with a.date properties
                    b = new Date(b.date);
                    console.log("a and b", a, b)
                    return b > a ? -1 : b < a ? 1 : 0; //else if
                });
                console.log("sortedArray", sortedArray)
                const $divRef = document.querySelector(".div--container")
                const $secRef = $("<section>").attr("id", "section--events").appendTo($divRef)
                sortedArray.forEach(element => {
                    const $artRef = $("<article>").addClass("userEvents").attr("id", `${element.id}`)
                    console.log("element", element)
                    const $pEventName = $("<p>").text(`${element.eventName}`).appendTo($artRef)
                    //                 "eventName": "me",
                    //   "description": "me",
                    //   "date": "\"2019-03-10\"",
                    //   "location": "me",
                    const $pEventDescription = $("<p>").text(`${element.description}`).appendTo($pEventName)
                    const $pEventLocation = $("<p>").text(`${element.location}`).appendTo($pEventDescription)
                    const $pEventDate = $("<p>").text(`${element.date}`).appendTo($pEventLocation)
                    const $deleteButton = $("<button>").appendTo($artRef).text("Delete").attr("id", "EventDelete")
                    $artRef.appendTo($secRef)
                })
            })
        }
    }
})
module.exports = allEventsDOM;