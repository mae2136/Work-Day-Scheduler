// Display current day at top of planner (in #currentDay)
var today = moment();
var dailyTime = [`10 AM`, `11 AM`, `12 PM`, `1 PM`, `2 PM`, `3 PM`, `4 PM`, `5 PM`]
$(`#currentDay`).text(today.format("dddd, MMMM Do"));
// Create table with a standard timeblocks (9AM - 5PM) of current day in container.
function createBlocks(dailyTime) {
    // Run function 9 AM - 5 PM (9 iterations)
    console.log(dailyTime);
    var newRow = $(`#planner`);
    console.log(newRow)
    // Change newRow's #time to value of dailyTime[i]
}

createBlocks(dailyTime);
// Color code each timeblock to indicate past (grey), present (red), or future (green)
// When click into timeblock (event.target), user can type in an event.
// When click in to save button for the timeblock, then text for event is saved in local storage.
// When refresh page, local storage populates daily plan with saved events