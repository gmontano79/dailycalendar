//  **** TODAY DATE FORMAT ****

function date() {
  var today = moment();
  $("#currentDay").text(today.format("MMM Do, YYYY"));
}
date()

// ***************************************
// **********  TIME BLOCK 9AM ************

//  SAVE EVENT TO LOCAL STORAGE


var saveBtn9 = document.querySelector(".saveBtn9");
saveBtn9.addEventListener("click", saveLocalStorage9);
function saveLocalStorage9() {
  var userInput9 = document.getElementById("userinput9").value;
  localStorage.setItem("ls_userInput9", userInput9);
}

//  INPUT SAVED EVENT ON THE PLANNER EVENT
var savedInput9 = localStorage.getItem("ls_userInput9");
var userInput9 = document.getElementById("userinput9");
userInput9.textContent = savedInput9;
userInput9.setAttribute("value", savedInput9);


// ***************************************
// **********  TIME BLOCK 10AM ************

//  SAVE EVENT TO LOCAL STORAGE

var saveBtn10 = document.querySelector(".saveBtn10");
saveBtn10.addEventListener("click", saveLocalStorage10);
function saveLocalStorage10() {
  var userInput10 = document.getElementById("userinput10").value;
  localStorage.setItem("ls_userInput10", userInput10);
}

//  INPUT SAVED EVENT ON THE PLANNER EVENT
var savedInput10 = localStorage.getItem("ls_userInput10");
console.log(savedInput10);

var userInput10 = document.getElementById("userinput10");
userInput10.textContent = savedInput10;
userInput10.setAttribute("value", savedInput10);


// ***************************************
// **********  TIME BLOCK 11AM ************

//  SAVE EVENT TO LOCAL STORAGE

var saveBtn11 = document.querySelector(".saveBtn11");
saveBtn11.addEventListener("click", saveLocalStorage11);
function saveLocalStorage11() {
  var userInput11 = document.getElementById("userinput11").value;
  localStorage.setItem("ls_userInput11", userInput11);
}

//  INPUT SAVED EVENT ON THE PLANNER EVENT
var savedInput11 = localStorage.getItem("ls_userInput11");
var userInput11 = document.getElementById("userinput11");
userInput11.textContent = savedInput11;
userInput11.setAttribute("value", savedInput11);

// ***************************************
// **********  TIME BLOCK 12PM ************

//  SAVE EVENT TO LOCAL STORAGE

var saveBtn12 = document.querySelector(".saveBtn12");
saveBtn12.addEventListener("click", saveLocalStorage12);
function saveLocalStorage12() {
  var userInput12 = document.getElementById("userinput12").value;
  localStorage.setItem("ls_userInput12", userInput12);
}

//  INPUT SAVED EVENT ON THE PLANNER EVENT
var savedInput12 = localStorage.getItem("ls_userInput12");
var userInput12 = document.getElementById("userinput12");
userInput12.textContent = savedInput12;
userInput12.setAttribute("value", savedInput12);

// ***************************************
// **********  TIME BLOCK 1PM ************

//  SAVE EVENT TO LOCAL STORAGE

var saveBtn1 = document.querySelector(".saveBtn1");
saveBtn1.addEventListener("click", saveLocalStorage1);
function saveLocalStorage1() {
  var userInput1 = document.getElementById("userinput1").value;
  localStorage.setItem("ls_userInput1", userInput1);
}

//  INPUT SAVED EVENT ON THE PLANNER EVENT
var savedInput1 = localStorage.getItem("ls_userInput1");
var userInput1 = document.getElementById("userinput1");
userInput1.textContent = savedInput1;
userInput1.setAttribute("value", savedInput1);


// ***************************************
// **********  TIME BLOCK 2PM ************

//  SAVE EVENT TO LOCAL STORAGE

var saveBtn2 = document.querySelector(".saveBtn2");
saveBtn2.addEventListener("click", saveLocalStorage2);
function saveLocalStorage2() {
  var userInput2 = document.getElementById("userinput2").value;
  localStorage.setItem("ls_userInput2", userInput2);
}

//  INPUT SAVED EVENT ON THE PLANNER EVENT
var savedInput2 = localStorage.getItem("ls_userInput2");
var userInput2 = document.getElementById("userinput2");
userInput2.textContent = savedInput2;
userInput2.setAttribute("value", savedInput2);

// ***************************************
// **********  TIME BLOCK 3PM ************

//  SAVE EVENT TO LOCAL STORAGE

var saveBtn3 = document.querySelector(".saveBtn3");
saveBtn3.addEventListener("click", saveLocalStorage3);
function saveLocalStorage3() {
  var userInput3 = document.getElementById("userinput3").value;
  localStorage.setItem("ls_userInput3", userInput3);
}

//  INPUT SAVED EVENT ON THE PLANNER EVENT
var savedInput3 = localStorage.getItem("ls_userInput3");
var userInput3 = document.getElementById("userinput3");
userInput3.textContent = savedInput3;
userInput3.setAttribute("value", savedInput3);

// ***************************************
// **********  TIME BLOCK 4PM ************

//  SAVE EVENT TO LOCAL STORAGE

var saveBtn4 = document.querySelector(".saveBtn4");
saveBtn4.addEventListener("click", saveLocalStorage4);
function saveLocalStorage4() {
  var userInput4 = document.getElementById("userinput4").value;
  localStorage.setItem("ls_userInput4", userInput4);
}

//  INPUT SAVED EVENT ON THE PLANNER EVENT
var savedInput4 = localStorage.getItem("ls_userInput4");
var userInput4 = document.getElementById("userinput4");
userInput4.textContent = savedInput4;
userInput4.setAttribute("value", savedInput4);

// ***************************************
// **********  TIME BLOCK 5PM ************

//  SAVE EVENT TO LOCAL STORAGE

var saveBtn5 = document.querySelector(".saveBtn5");
saveBtn5.addEventListener("click", saveLocalStorage5);
function saveLocalStorage5() {
  var userInput5 = document.getElementById("userinput5").value;
  localStorage.setItem("ls_userInput5", userInput5);
}

//  INPUT SAVED EVENT ON THE PLANNER EVENT
var savedInput5 = localStorage.getItem("ls_userInput5");
var userInput5 = document.getElementById("userinput5");
userInput5.textContent = savedInput5;
userInput5.setAttribute("value", savedInput5);