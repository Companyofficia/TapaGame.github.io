import sudokutoolcollection from "https://cdn.skypack.dev/sudokutoolcollection@1.1.3";

const sudoku = sudokutoolcollection();
var solved = "";
var complete = 0;
var Small = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90 };

var Magnitude = {
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
  trillion: 1000000000000,
  quadrillion: 1000000000000000,
  quintillion: 1000000000000000000,
  sextillion: 1000000000000000000000,
  septillion: 1000000000000000000000000,
  octillion: 1000000000000000000000000000,
  nonillion: 1000000000000000000000000000000,
  decillion: 1000000000000000000000000000000000 };

var a, n, g;
var past = [];
var current;
var future = [];
var elapsedTimeIntervalRef;
var startTime;
var elapsedTimeWhenPaused;
var elapsedTimeText = document.getElementsByClassName("elapsed-time-text")[0];

function startStopwatch() {
  // Set start time based on whether it's stopped or resetted
  startTime = new Date();

  // Every second
  elapsedTimeIntervalRef = setInterval(() => {
    document.getElementsByClassName(
    "elapsed-time-text")[
    0].innerText = timeAndDateHandling.getElapsedTime(startTime);
  }, 1000);
}

/** Resets stopwatch */
function resetStopwatch() {
  // Clear interval
  if (typeof elapsedTimeIntervalRef !== "undefined") {
    clearInterval(elapsedTimeIntervalRef);
    elapsedTimeIntervalRef = undefined;
  }
  // Reset elapsed time text
  document.getElementsByClassName("elapsed-time-text")[0].innerText = "00:00";
}

//API for time and date functions

var timeAndDateHandling = {
  /** Computes the elapsed time since the moment the function is called in the format mm:ss or hh:mm:ss
   * @param {String} startTime - start time to compute the elapsed time since
   * @returns {String} elapsed time in mm:ss format or hh:mm:ss format if elapsed hours are 0.
   */
  getElapsedTime: function (startTime) {
    // Record end time
    let endTime = new Date();

    // Compute time difference in milliseconds
    let timeDiff = endTime.getTime() - startTime.getTime();

    // Convert time difference from milliseconds to seconds
    timeDiff = timeDiff / 1000;

    // Extract integer seconds that dont form a minute using %
    let seconds = Math.floor(timeDiff % 60); //ignoring uncomplete seconds (floor)

    // Pad seconds with a zero if neccessary
    let secondsAsString = seconds < 10 ? "0" + seconds : seconds + "";

    // Convert time difference from seconds to minutes using %
    timeDiff = Math.floor(timeDiff / 60);

    // Extract integer minutes that don't form an hour using %
    let minutes = timeDiff % 60; //no need to floor possible incomplete minutes, becase they've been handled as seconds

    // Pad minutes with a zero if neccessary
    let minutesAsString = minutes < 10 ? "0" + minutes : minutes + "";

    // Convert time difference from minutes to hours
    timeDiff = Math.floor(timeDiff / 60);

    // Extract integer hours that don't form a day using %
    let hours = timeDiff % 24; //no need to floor possible incomplete hours, becase they've been handled as seconds

    // Convert time difference from hours to days
    timeDiff = Math.floor(timeDiff / 24);

    // The rest of timeDiff is number of days
    let days = timeDiff;

    let totalHours = hours + days * 24; // add days to hours
    let totalHoursAsString =
    totalHours < 10 ? "0" + totalHours : totalHours + "";

    if (totalHoursAsString === "00") {
      return minutesAsString + ":" + secondsAsString;
    } else {
      return totalHoursAsString + ":" + minutesAsString + ":" + secondsAsString;
    }
  } };


function text2num(s) {
  a = s.toString().split(/[\s-]+/);
  n = 0;
  g = 0;
  a.forEach(feach);
  return n + g;
}
function feach(w) {
  var x = Small[w];
  if (x != null) {
    g = g + x;
  } else if (w == "hundred") {
    g = g * 100;
  } else {
    x = Magnitude[w];
    if (x != null) {
      n = n + g * x;
      g = 0;
    } else {
      console.log("Unknown number: " + w);
    }
  }
}
function numberToEnglish(n) {
  let ones = n % 10;
  let tens = Math.floor(n / 10);
  let onesStr, tensStr, numStr;
  if (tens == 1) {
    if (ones == 0) {
      numStr = "ten";
    } else if (ones == 1) {
      numStr = "eleven";
    } else if (ones == 2) {
      numStr = "twelve";
    } else if (ones == 3) {
      numStr = "thirteen";
    } else if (ones == 4) {
      numStr = "fourteen";
    } else if (ones == 5) {
      numStr = "fifteen";
    } else if (ones == 6) {
      numStr = "sixteen";
    } else if (ones == 7) {
      numStr = "seventeen";
    } else if (ones == 8) {
      numStr = "eighteen";
    } else if (ones == 9) {
      numStr = "nineteen";
    }
  } else if (tens == 2) {
    tensStr = "twenty";
  } else if (tens == 3) {
    tensStr = "thirty";
  } else if (tens == 4) {
    tensStr = "forty";
  } else if (tens == 5) {
    tensStr = "fifty";
  } else if (tens == 6) {
    tensStr = "sixty";
  } else if (tens == 7) {
    tensStr = "seventy";
  } else if (tens == 8) {
    tensStr = "eighty";
  }

  if (tens > 1) {
    if (ones == 0) {
      numStr = tensStr;
      return numStr;
    } else if (ones == 1) {
      onesStr = "one";
    } else if (ones == 2) {
      onesStr = "two";
    } else if (ones == 3) {
      onesStr = "three";
    } else if (ones == 4) {
      onesStr = "four";
    } else if (ones == 5) {
      onesStr = "five";
    } else if (ones == 6) {
      onesStr = "six";
    } else if (ones == 7) {
      onesStr = "seven";
    } else if (ones == 8) {
      onesStr = "eight";
    } else if (ones == 9) {
      onesStr = "nine";
    }
    numStr = tensStr + "-" + onesStr;
  } else if (tens == 0) {
    if (ones == 1) {
      onesStr = "one";
    } else if (ones == 2) {
      onesStr = "two";
    } else if (ones == 3) {
      onesStr = "three";
    } else if (ones == 4) {
      onesStr = "four";
    } else if (ones == 5) {
      onesStr = "five";
    } else if (ones == 6) {
      onesStr = "six";
    } else if (ones == 7) {
      onesStr = "seven";
    } else if (ones == 8) {
      onesStr = "eight";
    } else if (ones == 9) {
      onesStr = "nine";
    }
    numStr = onesStr;
  }
  return numStr;
}

function squareColor() {
  for (var i = 2; i <= 81; i += 2) {
    document.querySelector("#" + numberToEnglish(i)).style.backgroundColor =
    "white";
  }
  for (var i = 1; i <= 81; i += 2) {
    document.querySelector("#" + numberToEnglish(i)).style.backgroundColor =
    "#EDF67D";
  }
}

function maximumInput() {
  if (this.value.length > this.maxLength) {
    this.value = this.value.slice(0, 1);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  squareColor();
  document.querySelector("input").addEventListener("input", maximumInput);
  $("input[type=number]").on("focus", function (e) {
    $(this).on("wheel.disableScroll", function (e) {
      e.preventDefault();
    });
  });
  $("body").on("blur", "input[type=number]", function (e) {
    $(this).off("wheel.disableScroll");
  });
});

function generatePuzzle(d) {
  var x = sudoku.generator.generate(d.toLowerCase());
  solved = sudoku.solver.solve(x);
  var index = 1;
  for (var i = 1; i <= 81; i++) {
    var boxId = "#" + numberToEnglish(i);
    $(boxId).val(x.substring(i - 1, i));
  }

  for (var i = 1; i <= 81; i++) {
    var boxId = "#" + numberToEnglish(i);
    if ($(boxId).val() != "") {
      $(boxId).prop("readonly", "readonly");
      $(boxId).css("color", "#564592");
    } else {
      $(boxId).css("color", "black");
      $(boxId).removeProp("readonly");
    }
  }
}

class Levels extends React.Component {
  handleClick(level) {
    $(".winModal").fadeToggle().css("display", "none");
    generatePuzzle(level);
    resetStopwatch();
    startStopwatch();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", {
        className: "levelBtn",
        onClick: () => this.handleClick(this.props.level) },

      this.props.level));


  }}


class Square extends React.Component {
  history(id) {
    var boxNum = text2num(id);
    var boxVal = document.querySelector("#" + id).value.slice(0, 1);
    var obj = { id: boxNum, value: boxVal };
    past.push(obj);
    console.log(past);
  }

  checkSolve() {
    var solution = "";
    var complete = 0;
    for (var i = 1; i <= 81; i++) {
      var entry = document.querySelector("#" + numberToEnglish(i)).value;
      var actual = solved.substring(i - 1, i);
      if (entry == actual) {
        solution += entry;
      }

      if (solution == solved) {
        $(".winModal").fadeToggle().css("display", "flex");
        stopStopwatch();
      }
    }
  }

  handleInput(id) {
    this.history(id);
    var box = text2num(id);
    if (
    document.querySelector("#" + id).value.length >
    document.querySelector("#" + id).maxLength)
    {
      document.querySelector("#" + id).value = document.
      querySelector("#" + id).
      value.slice(0, 1);
    }
    var entry = document.querySelector("#" + id).value;
    var actual = solved.substring(box - 1, box);
    if (actual != entry) {
      document.querySelector("#" + id).style.color = "red";
    } else {
      document.querySelector("#" + id).style.color = "#564592";
      this.checkSolve();
    }
  }

  handleClick(id) {
    squareColor();
    var boxNum = text2num(id);
    var col = boxNum % 9;
    var row = Math.ceil(boxNum / 9);

    for (var i = 1; i <= 81; i++) {
      if (i % 9 == col || Math.ceil(i / 9) == row) {
        $("#" + numberToEnglish(i)).css("background-color", "#F896D8");
      }
      if (
      $("#" + numberToEnglish(i)).val() == $("#" + id).val() &&
      $("#" + numberToEnglish(i)).val() != "")
      {
        $("#" + numberToEnglish(i)).css("background-color", "#a1d0ef");
      }
    }
    $("#" + id).css("background-color", "#a1d0ef");
  }

  handleBlur() {
    squareColor();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("input", {
        type: "number",
        className: "square " + this.props.className,
        id: this.props.id,
        min: "1",
        max: "9",
        maxLength: "1",
        autoComplete: "off",
        onInput: () => this.handleInput(this.props.id),
        onClick: () => this.handleClick(this.props.id),
        onBlur: () => this.handleBlur() }));


  }}


class Board extends React.Component {
  renderSquares() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "board" }, /*#__PURE__*/
      React.createElement(Square, { className: "top left", id: "one" }), /*#__PURE__*/
      React.createElement(Square, { className: "top", id: "two" }), /*#__PURE__*/
      React.createElement(Square, { className: "top right", id: "three" }), /*#__PURE__*/
      React.createElement(Square, { className: "top left", id: "four" }), /*#__PURE__*/
      React.createElement(Square, { className: "top", id: "five" }), /*#__PURE__*/
      React.createElement(Square, { className: "top right", id: "six" }), /*#__PURE__*/
      React.createElement(Square, { className: "top left", id: "seven" }), /*#__PURE__*/
      React.createElement(Square, { className: "top", id: "eight" }), /*#__PURE__*/
      React.createElement(Square, { className: "top right", id: "nine" }), /*#__PURE__*/
      React.createElement(Square, { className: "left", id: "ten" }), /*#__PURE__*/
      React.createElement(Square, { id: "eleven" }), /*#__PURE__*/
      React.createElement(Square, { className: "right", id: "twelve" }), /*#__PURE__*/
      React.createElement(Square, { className: "left", id: "thirteen" }), /*#__PURE__*/
      React.createElement(Square, { id: "fourteen" }), /*#__PURE__*/
      React.createElement(Square, { className: "right", id: "fifteen" }), /*#__PURE__*/
      React.createElement(Square, { className: "left", id: "sixteen" }), /*#__PURE__*/
      React.createElement(Square, { id: "seventeen" }), /*#__PURE__*/
      React.createElement(Square, { className: "right", id: "eighteen" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom left", id: "nineteen" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom", id: "twenty" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom right", id: "twenty-one" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom left", id: "twenty-two" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom", id: "twenty-three" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom right", id: "twenty-four" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom left", id: "twenty-five" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom", id: "twenty-six" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom right", id: "twenty-seven" }), /*#__PURE__*/
      React.createElement(Square, { className: "top left", id: "twenty-eight" }), /*#__PURE__*/
      React.createElement(Square, { className: "top", id: "twenty-nine" }), /*#__PURE__*/
      React.createElement(Square, { className: "top right", id: "thirty" }), /*#__PURE__*/
      React.createElement(Square, { className: "top left", id: "thirty-one" }), /*#__PURE__*/
      React.createElement(Square, { className: "top", id: "thirty-two" }), /*#__PURE__*/
      React.createElement(Square, { className: "top right", id: "thirty-three" }), /*#__PURE__*/
      React.createElement(Square, { className: "top left", id: "thirty-four" }), /*#__PURE__*/
      React.createElement(Square, { className: "top", id: "thirty-five" }), /*#__PURE__*/
      React.createElement(Square, { className: "top right", id: "thirty-six" }), /*#__PURE__*/
      React.createElement(Square, { className: "left", id: "thirty-seven" }), /*#__PURE__*/
      React.createElement(Square, { id: "thirty-eight" }), /*#__PURE__*/
      React.createElement(Square, { className: "right", id: "thirty-nine" }), /*#__PURE__*/
      React.createElement(Square, { className: "left", id: "forty" }), /*#__PURE__*/
      React.createElement(Square, { id: "forty-one" }), /*#__PURE__*/
      React.createElement(Square, { className: "right", id: "forty-two" }), /*#__PURE__*/
      React.createElement(Square, { className: "left", id: "forty-three" }), /*#__PURE__*/
      React.createElement(Square, { id: "forty-four" }), /*#__PURE__*/
      React.createElement(Square, { className: "right", id: "forty-five" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom left", id: "forty-six" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom", id: "forty-seven" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom right", id: "forty-eight" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom left", id: "forty-nine" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom", id: "fifty" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom right", id: "fifty-one" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom left", id: "fifty-two" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom", id: "fifty-three" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom right", id: "fifty-four" }), /*#__PURE__*/
      React.createElement(Square, { className: "top left", id: "fifty-five" }), /*#__PURE__*/
      React.createElement(Square, { className: "top", id: "fifty-six" }), /*#__PURE__*/
      React.createElement(Square, { className: "top right", id: "fifty-seven" }), /*#__PURE__*/
      React.createElement(Square, { className: "top left", id: "fifty-eight" }), /*#__PURE__*/
      React.createElement(Square, { className: "top", id: "fifty-nine" }), /*#__PURE__*/
      React.createElement(Square, { className: "top right", id: "sixty" }), /*#__PURE__*/
      React.createElement(Square, { className: "top left", id: "sixty-one" }), /*#__PURE__*/
      React.createElement(Square, { className: "top", id: "sixty-two" }), /*#__PURE__*/
      React.createElement(Square, { className: "top right", id: "sixty-three" }), /*#__PURE__*/
      React.createElement(Square, { className: "left", id: "sixty-four" }), /*#__PURE__*/
      React.createElement(Square, { id: "sixty-five" }), /*#__PURE__*/
      React.createElement(Square, { className: "right", id: "sixty-six" }), /*#__PURE__*/
      React.createElement(Square, { className: "left", id: "sixty-seven" }), /*#__PURE__*/
      React.createElement(Square, { id: "sixty-eight" }), /*#__PURE__*/
      React.createElement(Square, { className: "right", id: "sixty-nine" }), /*#__PURE__*/
      React.createElement(Square, { className: "left", id: "seventy" }), /*#__PURE__*/
      React.createElement(Square, { id: "seventy-one" }), /*#__PURE__*/
      React.createElement(Square, { className: "right", id: "seventy-two" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom left", id: "seventy-three" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom", id: "seventy-four" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom right", id: "seventy-five" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom left", id: "seventy-six" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom", id: "seventy-seven" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom right", id: "seventy-eight" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom left", id: "seventy-nine" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom", id: "eighty" }), /*#__PURE__*/
      React.createElement(Square, { className: "bottom right", id: "eighty-one" })));


  }

  render() {
    return this.renderSquares();
  }}


class DoButton extends React.Component {
  handleClick(btn) {
    var currentDOM;
    try {
      if (btn == "undo") {
        if (current) {
          future.push({ id: current.id, value: current.value });
        }
        current = past[past.length - 1];
        currentDOM = numberToEnglish(current.id);
        document.querySelector("#" + currentDOM).value = "";
        past = past.slice(0, past.length - 1);
      } else if (btn == "redo") {
        if (current) {
          past.push(current);
          currentDOM = numberToEnglish(current.id);
          document.querySelector("#" + currentDOM).value = current.value;
        }
        current = future[future.length - 1];
        future = future.slice(0, future.length - 1);
      }
      console.log(past);
      console.log(current);
      console.log(future);
    } catch (e) {
      console.log("State Handler Error");
    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("button", { onClick: () => this.handleClick(this.props.value) },
      this.props.content));


  }}


class Game extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "game" }, /*#__PURE__*/
      React.createElement(DoButton, { className: "undo", content: "\u27F2", value: "undo" }), /*#__PURE__*/
      React.createElement(Board, null), /*#__PURE__*/
      React.createElement(DoButton, { className: "redo", content: "\u27F3", value: "redo" })));


  }}


class Sudoku extends React.Component {
  render() {
    const title = "Sudoku";
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("div", { className: "page" }, /*#__PURE__*/
      React.createElement("h1", { className: "title" }, title), /*#__PURE__*/
      React.createElement("p", { className: "elapsed-time-text" }, "00:00"), /*#__PURE__*/
      React.createElement(Game, null), /*#__PURE__*/
      React.createElement("div", { className: "levels" }, /*#__PURE__*/
      React.createElement(Levels, { level: "Easy" }), /*#__PURE__*/
      React.createElement(Levels, { level: "Medium" }), /*#__PURE__*/
      React.createElement(Levels, { level: "Hard" }), /*#__PURE__*/
      React.createElement(Levels, { level: "Insane" }))), /*#__PURE__*/


      React.createElement("div", { className: "winModal" }, /*#__PURE__*/
      React.createElement("div", { className: "modalContainer" }, /*#__PURE__*/
      React.createElement("h2", null, "Congratulations! You Won!"), /*#__PURE__*/
      React.createElement("h4", null, "Play Again?"), /*#__PURE__*/
      React.createElement("div", { className: "levels" }, /*#__PURE__*/
      React.createElement(Levels, { level: "Easy" }), /*#__PURE__*/
      React.createElement(Levels, { level: "Medium" }), /*#__PURE__*/
      React.createElement(Levels, { level: "Hard" }), /*#__PURE__*/
      React.createElement(Levels, { level: "Insane" }))))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Sudoku, null), document.getElementById("app"));