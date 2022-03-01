// Display current day at top of planner (in #currentDay)
var today = moment();

$(`#currentDay`).text(today.format("dddd, MMMM Do"));

// Color code each timeblock to indicate past (grey), present (red), or future (green)


// When click into timeblock (event.target), user can type in an event.
// When click in to save button for the timeblock, then text for event is saved in local storage.
// When refresh page, local storage populates daily plan with saved events