const $ = require("jquery")
const databaseMethod = require("./databaseMethods")

const subEvent = Object.create({}, {
    subEvent: {
        value: () => {
            const $eventTitleValue = document.getElementById("eventTitle").value;
            const $eventDescriptionValue = document.getElementById("eventDescription").value;
            const $eventLocationValue = document.getElementById("eventLocation").value;
            const $eventDateValue = document.getElementById("eventDate").value;
            console.log($eventDateValue)
            const event = {
                eventName: $eventTitleValue,
                description: $eventDescriptionValue,
                date: $eventDateValue,
                location:$eventLocationValue
            }
        //     "eventName":"test",
        // "description": "Test_Description",
        // "date": "2019-01-01",
        // "location": "Test_Location",

            databaseMethod.postEvent(event)
        }
    }

})
module.exports = subEvent;