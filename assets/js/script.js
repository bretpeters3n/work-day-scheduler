// PSUEDO CODING start

// 3 functions - init(), saveBtnPressed(), updateLocalStorage()
// responsive

// PSUEDO CODING end

// selectors
var containerOfButtons = $("#container .row");
var currentDay = $("#currentDay");

// variables
var nowMoment = moment().format("HH"); // this var is equal to the current hour in military time
var nowDisplayDate = moment().format("dddd, MMM Do, GGGG"); // this var is equal to the current hour in military time

// functions
function start() {
  currentDay.text(nowDisplayDate); // display current date
  pullWeeklyCalendar();
  buttonDelegation();
}

function pullWeeklyCalendar() {
  weeklyCalendar = JSON.parse(localStorage.getItem("weeklyCalendar"));
  if (weeklyCalendar) {
    writeWeeklyCalendar();
  } else {
    createEmptyCalendar();
  }
}

function createEmptyCalendar() {
  weeklyCalendar = ["", "", "", "", "", "", "", "", ""];
  pushWeeklyCalendar();
  writeWeeklyCalendar();
}

function pushWeeklyCalendar(id, value) {
  id = id - 9; // reduce id by 9 so that the values get stored in the correct place
  weeklyCalendar[id] = value;
  $(containerOfButtons).each(function (e) {
    var value = $(this).children().find("textarea").val();
    weeklyCalendar[e] = value;
  });
  localStorage.setItem("weeklyCalendar", JSON.stringify(weeklyCalendar));
}

function writeWeeklyCalendar() {
  var id;
  $(containerOfButtons).each(function (index) {
    var textValueInArray = weeklyCalendar[index];
    var textAreaStyle = $(this).children().find("textarea");
    time = this.id;
    nowMoment = parseInt(nowMoment);
    time = parseInt(time);

    if (time === nowMoment) {
      textAreaStyle.addClass("present");
    } else if (time > nowMoment) {
      textAreaStyle.addClass("future");
    } else {
      textAreaStyle.addClass("past");
    }
    textAreaStyle.val(textValueInArray);
  });
}

function buttonDelegation() {
  containerOfButtons.on("click", ".saveBtn", function (event) {
    event.preventDefault();
    var id = $(this).parent().prop("id");
    var value = $(this).parent().find("textarea").val();

    pushWeeklyCalendar(id, value);
  });
}

// getToWork code
start();
