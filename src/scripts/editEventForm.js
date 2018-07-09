//Author: Shu
//Purpose: Edit and updates an event
const $ = require("jquery")
const databaseMethods = require("./databaseMethods")


const editEventForm = Object.create({}, {
    editEventForm: {
        value: () => {

            const id = require("./eventListeners")
            databaseMethods.getOneEvent(id).then((eventResponse) => {
                console.log("response", eventResponse)
                console.log("eventName", eventResponse.eventName)

                const divRef = document.querySelector(".div--container");

                const $divEvent = $("<div>").attr("id", "eventIdPlaceholder").text("Event").appendTo(divRef)
                const $paraEvent = $("<p>").appendTo($divEvent)

                const $eventTitleLabel = $("<label>").attr("for", "eventTitle").text("Event Name").appendTo($paraEvent)
                const $eventTitleInput = $("<input>").attr("id", "eventTitle").val(`${eventResponse.eventName}`).appendTo($eventTitleLabel)

                const $eventDescriptionLabel = $("<label>").attr("for", "eventDescription").text("Event Description").appendTo($paraEvent)
                const $eventDescriptionInput = $("<input>").attr("id", "eventDescription").val(`${eventResponse.description}`).appendTo($eventDescriptionLabel)

                const $eventLocationLabel = $("<label>").attr("for", "eventLocation").text("Event Location").appendTo($paraEvent)
                const $eventLocationInput = $("<input>").attr("id", "eventLocation").val(`${eventResponse.location}`).appendTo($eventLocationLabel)

                const $eventDateLabel = $("<label>").attr("for", "eventDate").text("Event Date").appendTo($paraEvent)
                const $eventDateInput = $("<input>").attr("id", "eventDate").val(`${eventResponse.date}`).appendTo($eventDateLabel)

                const $eventPutSubmit = $("<button>").attr("id", "eventPutSubmit").text("Submit").appendTo($divEvent)


            })

        }

    } //end of eventForm Method
}) //end of object
module.exports = editEventForm;