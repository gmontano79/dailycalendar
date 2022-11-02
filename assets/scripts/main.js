//  **** TODAY DATE FORMAT ****
function date() {
  var today = moment();
  $("#currentDay").text(today.format("MMM Do, YYYY"));
}
date()

// ***************************************
// **********  EVENTS ************


var arrTimes = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

function testFunction(e) {
  var value = document.querySelector("#userinput" + e.target.dataset.time).value;
  localStorage.setItem("ls_userInput" + e.target.dataset.time, value);
  var confirmation = document.querySelector(".confirmation");
  confirmation.style.display = "block";


  // timeout for confirmation

  setTimeout(function () {
    confirmation.style.display = "none";
  }, 3000)
}



//  save input into local stoage and text area

for (i = 0; i < arrTimes.length; i++) {
  var currentBtn = document.querySelector(".saveBtn" + arrTimes[i])
  currentBtn.addEventListener("click", testFunction)

  var currentTextArea = document.querySelector("#userinput" + arrTimes[i])
  currentTextArea.value = localStorage.getItem("ls_userInput" + arrTimes[i])



  // color past, present and future colors

  var currentTime = parseInt(moment().format("HH"));

  if (currentTime > i + 9) {
    currentTextArea.setAttribute("class", "events col-9 past")
  } else if (currentTime == i + 9) {
    currentTextArea.setAttribute("class", "events col-9 present")
  } else {
    currentTextArea.setAttribute("class", "events col-9 future")
  }
}