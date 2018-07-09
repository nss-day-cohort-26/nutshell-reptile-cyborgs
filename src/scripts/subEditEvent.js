//author:Shu
//purpose: get values of fields and puts in storage
const $ = require("jquery")
const databaseMethods = require("./databaseMethods")

const subEditEvents = Object.create({}, {
    subEditEvents: {
        value: () => {
            const id = require("./eventListeners")
            const $eventTitleValue = document.getElementById("eventTitle").value;
            const $eventDescriptionValue = document.getElementById("eventDescription").value;
            const $eventLocationValue = document.getElementById("eventLocation").value;
            const $eventDateValue = document.getElementById("eventDate").value;


            const event = {
                eventName: $eventTitleValue,
                description: $eventDescriptionValue,
                date: $eventDateValue,
                location: $eventLocationValue
            }
            console.log("event", event)
            databaseMethods.putEvents(id, event);

        }
    }
})
module.exports = subEditEvents