// PSUEDO CODING start

// create array with all time blocks so you can write each
// make an object for each hour

// PSUEDO CODING end

// selectors

// variables
var weeklyCalendar;

var hourBlocks = [
  // array of 9 hours on calendar
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
];

// functions
function start() {
  pullWeeklyCalendar();
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
  weeklyCalendar = [
    {
      hour: hourBlocks[0],
      message: "",
      saveBtn: true,
    },
    {
      hour: hourBlocks[1],
      message: "",
      saveBtn: true,
    },
    {
      hour: hourBlocks[2],
      message: "",
      saveBtn: true,
    },
    {
      hour: hourBlocks[3],
      message: "",
      saveBtn: true,
    },
    {
      hour: hourBlocks[4],
      message: "",
      saveBtn: true,
    },
    {
      hour: hourBlocks[5],
      message: "",
      saveBtn: true,
    },
    {
      hour: hourBlocks[6],
      message: "",
      saveBtn: true,
    },
    {
      hour: hourBlocks[7],
      message: "",
      saveBtn: true,
    },
    {
      hour: hourBlocks[8],
      message: "",
      saveBtn: true,
    },
  ];
  pushWeeklyCalendar();
  writeWeeklyCalendar();
}

function pushWeeklyCalendar() {
  console.log("pushWeeklyCalendar() entered");
  localStorage.setItem("weeklyCalendar", JSON.stringify(weeklyCalendar));
}

function writeWeeklyCalendar() {
  console.log("writeWeeklyCalendar() entered");
  $.each(weeklyCalendar, function () {
    console.log("hour of day");
  });
}

// getToWork
console.log(hourBlocks);

start();
