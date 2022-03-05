// Display current day at top of planner (in #currentDay)
var today = moment();
// Test time to check color changes
var testDate = moment("2022-03-04").hour(20).minute(32);
console.log(testDate);
var eventList = []

var eventStorage = {
    events: eventList,
    date: today,
}

renderColor();

var savedStorage = JSON.parse(localStorage.getItem(`eventStorage`));

if ((savedStorage != null) && (today.isSame(savedStorage.date, `day`))) {
    console.log(`There is data stored and it belongs to today`)
    eventStorage.events = savedStorage.events
    console.log(eventStorage);
    renderEvents();
}

$(`#currentDay`).text(today.format("dddd, MMMM Do"));

// Color code each timeblock to indicate past (grey), present (red), or future (green)
function renderColor() {
    console.log(`Lets render those time blocks`);
    $("textarea").each(function () {
        console.log();
        // If time block time (hour) is before today (hour), add past class color
        if (testDate.isBefore(today, `hour`)) {
            $("textarea").addClass(`past`);
        } else if (testDate.isSame(today, `hour`)) {
            $("textarea").addClass(`present`);
        } else {
            $("textarea").addClass(`future`);
        }
        // Else If time block time (hour) is same as today (hour), add present class color
        // Else, add future class color
    })
}
// console.log($(`.container`).children().eq(5).children().eq(0).text())
// console.log(today.format(`hh A`))

// When click into timeblock (event.target), user can type in an event.
// Done by default with <textbox>

// When click in to save button for the timeblock, then text for event is saved in local storage.
$(`.container`).on("click", "button", saveEvent);

function saveEvent(event) {
    event.preventDefault;
    var currentDiv = $(event.currentTarget).parent().parent();
    var event = currentDiv.children().eq(1).val();
    var eventLocation = currentDiv.children().eq(0).attr(`id`);
    eventList[eventLocation] = event;
    // console.log(eventList);
    eventStorage.events = eventList;
    eventStorage.date = today;
    console.log(eventStorage);
    localStorage.setItem(`eventStorage`, JSON.stringify(eventStorage));
    return
}

// When refresh page, local storage populates daily plan with saved events

function renderEvents() {
    // Loop through eventStorage.events array
    $("textarea").each(function (i) {
        console.log(eventStorage.events[i]);
        this.textContent = eventStorage.events[i];
    })
    // For each textarea, add eventStorage.events text to textarea
}