//Authors:Shu
//Purpose:Creates Event form and add to dom when events link in nav bar is clicked
const $ = require("jquery")
const eventForm = Object.create({}, {
    eventForm: {
        value: () => {
            const divRef = document.querySelector(".div--container");

            const $divEvent = $("<div>").attr("id", "eventIdPlaceholder").text("Event").appendTo(divRef)
            const $paraEvent = $("<p>").appendTo($divEvent)

            const $eventTitleLabel = $("<label>").attr("for", "eventTitle").text("Event Name").appendTo($paraEvent)
            const $eventTitleInput = $("<input>").attr("id", "eventTitle").appendTo($eventTitleLabel)

            const $eventDescriptionLabel = $("<label>").attr("for", "eventDescription").text("Event Description").appendTo($paraEvent)
            const $eventDescriptionInput = $("<input>").attr("id", "eventDescription").appendTo($eventDescriptionLabel)

            const $eventLocationLabel = $("<label>").attr("for", "eventLocation").text("Event Location").appendTo($paraEvent)
            const $eventLoactionInput = $("<input>").attr("id", "eventLocation").appendTo($eventLocationLabel)

            const $eventDateLabel = $("<label>").attr("for", "eventDate").text("Event Date").appendTo($paraEvent)
            const $eventContentInput = $("<input>").attr("type", "date").attr("id", "eventDate").appendTo($eventDateLabel)

            const $artAddSubmit = $("<button>").attr("id", "eventSubmit").text("Submit").appendTo($divEvent)

        }

    } //end of addArticle Method
}) //end of object
module.exports = eventForm;