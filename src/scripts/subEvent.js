const $ = require("jquery")
const databaseMethod = require("./databaseMethods")

const subEvent = Object.create({}, {
    subEvent: {
        value: () => {
            const $eventTitleValue = document.getElementById("eventTitle").value;
            const $eventDescriptionValue = document.getElementById("eventDescription").value;
            const $eventLocationValue = document.getElementById("eventLocation").value;
            const $eventDateValue = document.getElementById("eventDate").value;
            var myJSON = JSON.stringify($eventDateValue);

            const event = {
                eventName: $eventTitleValue,
                description: $eventDescriptionValue,
                date: myJSON,
                location: $eventLocationValue
            }
            databaseMethod.postEvent(event)
        }
    }

})
module.exports = subEvent;