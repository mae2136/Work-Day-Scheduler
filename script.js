// Display current day at top of planner (in #currentDay)
var today = moment();
var eventList = []

var eventStorage = {
    events: eventList,
    date: today,
}

var savedStorage = JSON.parse(localStorage.getItem(`eventStorage`)); 

if ((savedStorage != null) && (today.isSame(savedStorage.date, `day`))) {
    console.log(`There is data stored and it belongs to today`)
    eventStorage.events = savedStorage.events
    console.log(eventStorage);
    renderEvents();
}

$(`#currentDay`).text(today.format("dddd, MMMM Do"));

// Color code each timeblock to indicate past (grey), present (red), or future (green)
// console.log(today.format(`hh A`))
// console.log($(`.container`).children().eq(5).children().eq(0).text())

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