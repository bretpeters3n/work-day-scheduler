// PSUEDO CODING start

// create array with all descriptions in it for each hour
// write function to go through each row in container and grab text-areas

// PSUEDO CODING end

// selectors
var containerOfButtons = $("#container .row");
console.log(containerOfButtons);

// variables
// var weeklyCalendar;

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
  // weeklyCalendar = [
  //   { id: "9", value: "" },
  //   { id: "10", value: "" },
  //   { id: "11", value: "" },
  //   { id: "12", value: "" },
  //   { id: "13", value: "" },
  //   { id: "14", value: "" },
  //   { id: "15", value: "" },
  //   { id: "16", value: "" },
  //   { id: "17", value: "" },
  // ];
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

function writeWeeklyCalendar() {
  console.log("writeWeeklyCalendar() entered");

  $(containerOfButtons).each(function (index) {
    // console.log("weeklyCalendar now = " + weeklyCalendar[index]);
    var textValueInArray = weeklyCalendar[index];
    // selector foer text area
    $(this).children().find("textarea").val(textValueInArray);
    // .val(textValueInArray);
    // .siblings()
    // .find("textarea")
    // .text(textValueInArray);
    // textValueOnPage = textValueInArray;
    // console.log("index = " + index);
    console.log("textValueInArray = " + textValueInArray);
    // console.log("textValueOnPage = " + textValueOnPage);
  });

  // $.each(weeklyCalendar, function () {
  //   console.log("hour of day");
  // });
}

function buttonDelegation() {
  // console.log("buttonDelegation() entered");
  console.log(containerOfButtons);
  containerOfButtons.on("click", ".saveBtn", function (event) {
    event.preventDefault();
    var id = $(this).parent().prop("id");
    var value = $(this).parent().find("textarea").val();
    // console.log("textvalue is " + value);
    // console.log("parent ID is " + keyValue);
    // console.log("button detected");
    pushWeeklyCalendar(id, value);
  });
}

// getToWork

start();
