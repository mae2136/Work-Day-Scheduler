// Display current day at top of planner (in #currentDay)
var today = moment();
var eventList = []

$(`#currentDay`).text(today.format("dddd, MMMM Do"));

// Color code each timeblock to indicate past (grey), present (red), or future (green)
console.log(today.format(`hh A`))
console.log($(`.container`).children().eq(5).children().eq(0).text())

// When click into timeblock (event.target), user can type in an event.
// Done by default with <textbox>

// When click in to save button for the timeblock, then text for event is saved in local storage.
$(`.container`).on("click", "button", saveEvent);

function saveEvent(event) {
    event.preventDefault;
    var currentDiv = $(event.currentTarget).parent().parent();
    console.log(currentDiv.children().eq(1).val());
    return
}
// When refresh page, local storage populates daily plan with saved events