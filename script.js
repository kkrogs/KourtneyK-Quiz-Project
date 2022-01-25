
// Increasing the current question index
var currentQuestionIndex=0;

//score variable can be defined here
var score=0;

// Questions and corresponding answers

var question = [{question:"What tags do we used to create an ordered list?",answer:"ol,li",choices:["ul, li", "le,il","ol,li","li,li"]},{question:"Which coding language do we use to style a page in HTML?",answer:"CSS", choices:["Javascript","CSS", "HTML", "jQuery"]}, {question:"What coding language is used to create a web page?",answer:"HTML",choices:["HTML", "JQuery", "Javascript", "SQL"]}];

//variable that defines if the question is right or wrong

var correct = ["Correct"];
var incorrect = ["Incorrect"];

// Start section
var starting = document.getElementById("start")
// Question one display
var firstQuestion = document.getElementById("question01")
// Start button
var startButton = document.getElementById("startButton")
// Amount of seconds user has to complete the quiz
var secondsLeft = 120;
// References timer element in the document
var timeEl = document.querySelector(".timer");
// References 'question' section of the HTML
var question001 = document.getElementById("text01");
// First answer button
var button01 = document.querySelector(".button1");
//  Second answer button
var button02 = document.querySelector(".button2");
// 3rd answer button
var button03 = document.querySelector(".button3");
// 4th answer button
var button04 = document.querySelector(".button4");
// portion of html that displays submit and next buttons
var correctIncorrect = document.querySelector(".correctOrIncorrect");
// Next button
var next = document.querySelector(".next");
// Displays score text in the html
var scoreCount = document.querySelector(".scorehtml");
//submit button
var finalScore = document.querySelector(".submitScore");
// submit score option
var showScorePage = document.getElementById("showScore");
// Last page
var finalDiv = document.getElementById("finalDiv");

//submit score button
var submitScoreBtn = document.querySelector(".submitScoreButton");
// Final score text on the last page
var finalScoreCt = document.querySelector(".highScore");
// H2 in the score block
var h2Score = document.querySelector(".scoreH2");
// Timer H2 header
var timerH2 = document.querySelector(".timerh2");

// RENAME BELOW

// var todoInput = document.querySelector("#todo-text");
// var todoForm = document.querySelector("#todo-form");
// var todoList = document.querySelector("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");

// var todos = [];

// Hides start menu, displays first Question menu, and hides the final page when the 'start button' is clicked.
// Also calls the display question function to display 
startButton.addEventListener("click",function() {
starting.hidden = true;
firstQuestion.hidden = false;
finalDiv.hidden = true;

displayQuestion();

});

// Makes the timer display and when the timer hits 0, makes it go to a blank page
var timerInterval = setInterval(function() {
  secondsLeft--;
  timeEl.textContent = secondsLeft;

  if(secondsLeft === 0) {
    // Stops execution of action at set interval
    clearInterval(timerInterval);
    // Calls function to do something at 0
    zeroSecsPage();
  }

}, 1000);

//function who's purpose is to display the next question
displayQuestion=function(){

  question001.textContent = question[currentQuestionIndex].question;
  button01.textContent = question[currentQuestionIndex].choices[0];
  button02.textContent = question[currentQuestionIndex].choices[1];
  button03.textContent = question[currentQuestionIndex].choices[2];
  button04.textContent = question[currentQuestionIndex].choices[3];



  console.log(currentQuestionIndex);
}
// When the 'next' button is clicked, display the next question by calling the displayQuestion function
next.addEventListener("click",function(){
  currentQuestionIndex++;


displayQuestion();


});





//Checks the anser to make sure it is correct. Then display the alert 'correct' or 'incorrect' based on whether or not the user chose the 'answer'

checkAnswer=function() {
if (question[currentQuestionIndex].answer===this.textContent)
{
  score++
  
  alert("Correct")} else {alert("Incorrect")};

  scoreCount.textContent=score;

console.log(this.textContent);
console.log(question[currentQuestionIndex].answer);


}
//when user clicks button one, check answer
button01.addEventListener("click",checkAnswer);


  button02.addEventListener("click",checkAnswer);


    button03.addEventListener("click",checkAnswer);

      button04.addEventListener("click",checkAnswer);



// Clear the timer when it gets to the final score page
      finalScore.addEventListener("click",function(){
//clear timer
timerH2.hidden = true;
clearInterval(timerInterval);

//if the user gets to this section, make the timer go to 0 seconds or clearInterval

finalDiv.hidden = false;
firstQuestion.hidden = true;
scoreCount.hidden=true;
h2Score.hidden=true;

event.preventDefault()
        finalScoreCt.textContent=score;
        console.log(this.textContent);


      });


// When the timer hits 0, go to a blank white page

zeroSecsPage=function(){
  starting.hidden = true;
  finalDiv.hidden = true;
  firstQuestion.hidden = true;
  scoreCount.hidden=true;
  h2Score.hidden=true;
  

};


var initialInput = document.querySelector("#initial-text");
var initialForm = document.querySelector(".initial-form"); 
var initialList = document.querySelector("#initial-list");
var initialCountSpan = document.querySelector("#initial-count");

var initials = [];


// The following function renders items in a todo list as <li> elements
function renderInitials() {
  // Clear todoList element and update todoCountSpan
  initialList.innerHTML = "";
  initialCountSpan.textContent = initials.length;
  //find how much time is left and then that is what needs to be displayed in the todocount span. That is what will be pushed into my object that I will add into my local storage array.

  // Render a new li for each todo
  for (var i = 0; i < initials.length; i++) {
    var initial = initials[i];

    var li = document.createElement("li");
    li.textContent = initial;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    //adds final score to list
    button.textContent = score; 

    li.appendChild(button);
    initialList.appendChild(li);

  
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  var storedInitials = JSON.parse(localStorage.getItem("initials"));
  // If todos were retrieved from localStorage, update the todos array to it
  if (storedInitials !== null) {
    initials = storedInitials;
  }

  // This is a helper function that will render todos to the DOM
  renderInitials();
}

function storeInitials() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("initials", JSON.stringify(initials));
}

// Add submit event to form
initialForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var initialText = initialInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (initialText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  initials.push(initialText);
  initialInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeInitials();
  renderInitials();
});

// Add click event to todoList element
initialList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    initials.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeInitials();
    renderInitials();
  }
});

// Calls init to retrieve data and render it to the page on load
init()

