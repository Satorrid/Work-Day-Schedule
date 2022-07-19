
function realTime() {
  var dateTime = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").append(dateTime);
}

realTime();

function colorCodeTime() {
  var currentHour = moment().hour();
  var timeBlocks = $('[time-block]');
  for (var timeBlock of timeBlocks) {
    const jTimeBlock = $(timeBlock);
    const hour = jTimeBlock.attr('time-block');
    if (hour == currentHour) {
      jTimeBlock.addClass('present');
    }
    if (hour < currentHour) {
      jTimeBlock.addClass('past');
    }
    if (hour > currentHour) {
      jTimeBlock.addClass('future');
    }
  }
}

colorCodeTime();

function buildListeners() {
  var timeBlocks = $('[time-block]');
  for (var timeBlock of timeBlocks) {
    const jTimeBlock = $(timeBlock);
    const hour = jTimeBlock.attr('time-block');
    const button = $(jTimeBlock.find('button'));
    const input = $(jTimeBlock.find('input'));
    button.click(function () {
      localStorage.setItem("time-block-" + hour, input.val())
    })
  }
}
buildListeners();

function loadSaved() {
  var timeBlocks = $('[time-block]');
  for (var timeBlock of timeBlocks) {
    const jTimeBlock = $(timeBlock);
    const hour = jTimeBlock.attr('time-block');
    const input = $(jTimeBlock.find('input'));
    const saved = localStorage.getItem("time-block-" + hour);
    if (saved) {
      input.val(saved)
    }
  }
}

loadSaved();