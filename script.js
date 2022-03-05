// Display current day at top of planner (in #currentDay)
var today = moment();
$(`#currentDay`).text(today.format("dddd, MMMM Do"));
// Test time to check color changes
var eventList = []
var blockTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var checkTime = [];

$.each(blockTime, function (i) {
    checkTime.push(moment(blockTime[i], `HH`));
});
renderColor();

// Event object storage
var eventStorage = {
    events: eventList,
    date: today,
}


// Pulls saved storage from local storage
var savedStorage = JSON.parse(localStorage.getItem(`eventStorage`));
// Checks to see if saved storage is relevant to today and if it has data. If true, then render saved events. Otherwise, clear local storage.
if ((savedStorage != null) && (today.isSame(savedStorage.date, `day`))) {
    eventStorage.events = savedStorage.events
    renderEvents();
} else {
    localStorage.clear();
}

// Color code each timeblock to indicate past (grey), present (red), or future (green)
function renderColor() {
    $("textarea").each(function (i) {
        // If time block time (hour) is before today (hour), add past class color
        if (checkTime[i].isBefore(today, `hour`)) {
            $("textarea").addClass(`past`);
        } else if (checkTime[i].isSame(today, `hour`)) {
            $("textarea").addClass(`present`);
        } else {
            $("textarea").addClass(`future`);
        }
        // Else If time block time (hour) is same as today (hour), add present class color
        // Else, add future class color
    })
}

// When click in to save button for the timeblock, then text for event is saved in local storage.
$(`.container`).on("click", "button", saveEvent);

function saveEvent(event) {
    event.preventDefault;
    var currentDiv = $(event.currentTarget).parent().parent();
    var event = currentDiv.children().eq(1).val();
    var eventLocation = currentDiv.children().eq(0).attr(`id`);
    eventList[eventLocation] = event;
    eventStorage.events = eventList;
    eventStorage.date = today;
    localStorage.setItem(`eventStorage`, JSON.stringify(eventStorage));
    return
}

// When refresh page, local storage populates daily plan with saved events

function renderEvents() {
    // Loop through eventStorage.events array
    // For each textarea, add eventStorage.events text to textarea
    $("textarea").each(function (i) {
        this.textContent = eventStorage.events[i];
    })
}