// PSUEDO CODING start

// create array with all descriptions in it for each hour
// write function to go through each row in container and grab text-areas

// PSUEDO CODING end

// selectors
var containerOfButtons = $("#container .row");

// variables
var nowMoment = moment().format("HH"); // this var is equal to the current hour in military time

// functions
function start() {
  pullWeeklyCalendar();
  buttonDelegation();
}

function pullWeeklyCalendar() {
  weeklyCalendar = JSON.parse(localStorage.getItem("weeklyCalendar"));
  if (weeklyCalendar) {
    // console.log("weeklyCalendar exists - writeWeeklyCalendar was entered");
    writeWeeklyCalendar();
  } else {
    // console.log(
    //   "weeklyCalendar does not exist - createEmptyCalendar was entered"
    // );
    createEmptyCalendar();
  }
}

function createEmptyCalendar() {
  weeklyCalendar = ["", "", "", "", "", "", "", "", ""];
  pushWeeklyCalendar();
  writeWeeklyCalendar();
}

function pushWeeklyCalendar(id, value) {
  // update weeklyCalendar object
  id = id - 9;
  console.log(id);
  console.log(value);
  weeklyCalendar[id] = value;
  console.log(weeklyCalendar[id]);

  localStorage.setItem("weeklyCalendar", JSON.stringify(weeklyCalendar));
}

// write all textareas, that have been saved, to the page
function writeWeeklyCalendar() {
  var id;
  var num = 1;
  // roll through array of targets and build textareas on page
  $(containerOfButtons).each(function (index) {
    // transfer array value to variable
    var textValueInArray = weeklyCalendar[index];
    //
    var pastPresentFuture;
    //
    var textAreaStyle = $(this).children().find("textarea");
    time = this.id;
    console.log("nowMoment = " + nowMoment);
    console.log("id = " + time);
    if (time === nowMoment) {
      textAreaStyle.addClass("present");
    } else if (time > nowMoment) {
      textAreaStyle.addClass("future");
    } else {
      textAreaStyle.addClass("past");
    }
    // set textarea to array value from above
    // $(this).children().find("textarea").addClass("past").val(textValueInArray);
    textAreaStyle.val(textValueInArray);
  });
}

function buttonDelegation() {
  // console.log("buttonDelegation() entered");
  console.log(containerOfButtons);
  containerOfButtons.on("click", ".saveBtn", function (event) {
    event.preventDefault();
    var id = $(this).parent().prop("id");
    var value = $(this).parent().find("textarea").val();

    pushWeeklyCalendar(id, value);
  });
}

// getToWork code
start();
