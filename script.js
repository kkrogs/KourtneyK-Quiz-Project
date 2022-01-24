//Creating and adding html
//create an array of objects so that when you call the first object it populates your choices
//Once I have an array of objects, then I can use the buttons to populate a h3 for the question and 4 buttons for the choices.


///match dataset of what is clicked to the answer

///////////////////////////////////////////////////////////

var currentQuestionIndex=0;

//score variable can be defined here
var score=0;
//if it is correct, instead of doing an alert I would add a certain increment.



var question = [{question:"What tags do we used to create an ordered list?",answer:"ol,li",choices:["ul, li", "le,il","ol,li","li,li"]},{question:"Which coding language do we use to style a page in HTML?",answer:"CSS", choices:["Javascript","CSS", "HTML", "jQuery"]}, {question:"What coding language is used to create a web page?",answer:"HTML",choices:["HTML", "JQuery", "Javascript", "SQL"]}];

//if currentquestionindex

var correct = ["Correct"];
 var incorrect = ["Incorrect"];

//var qNumber = 0; qNumber++;
// var score = localStorage.getItem("score");



//web apis activity 21 shows how to build this
//scoreCount.textContent = score;


//var question01 = document.getElementById("question01");


// var q1ans1 = ["ul, li", "le, il", "ol, li", "li, li"];
// var q2ans = ["Javascript", "CSS", "HTML", "jQuery"];
// var q3ans = ["HTML", "JQuery", "Javascript", "SQL"];

var starting = document.getElementById("start")
var firstQuestion = document.getElementById("question01")
var startButton = document.getElementById("startButton")
var secondsLeft = 120;
var timeEl = document.querySelector(".timer");
var question001 = document.getElementById("text01");
var button01 = document.querySelector(".button1");
var button02 = document.querySelector(".button2");
var button03 = document.querySelector(".button3");
var button04 = document.querySelector(".button4");
var correctIncorrect = document.querySelector(".correctOrIncorrect");
var next = document.querySelector(".next");
var scoreCount = document.querySelector(".scorehtml");

//new
var finalScore = document.querySelector(".submitScore");

var showScorePage = document.getElementById("showScore");
var finalDiv = document.getElementById("finalDiv");
//new

var submitScoreBtn = document.querySelector(".submitScoreButton");
var finalScoreCt = document.querySelector(".highScore");

var h2Score = document.querySelector(".scoreH2");
var zeroSecs = document.querySelector(".zeroSeconds");

var timerH2 = document.querySelector(".timerh2");

// NEW JAVA
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

// NEW JAVA



startButton.addEventListener("click",function() {
starting.hidden = true;
firstQuestion.hidden = false;
finalDiv.hidden = true;

displayQuestion();

});

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

//Make a function who's purpose is to display the next question



displayQuestion=function(){

  question001.textContent = question[currentQuestionIndex].question;
  button01.textContent = question[currentQuestionIndex].choices[0];
  button02.textContent = question[currentQuestionIndex].choices[1];
  button03.textContent = question[currentQuestionIndex].choices[2];
  button04.textContent = question[currentQuestionIndex].choices[3];
  //make value referencing part of the html that is hidden to unhide it, call the var here along with the current question index. Should also hide the questions
// if (currentQuestionIndex > question.length) {
// alert("test");
// }


  console.log(currentQuestionIndex);
}
next.addEventListener("click",function(){
  currentQuestionIndex++;
// if (currentQuestionIndex > question.length) 
// { alert("abc");


// }
// else {
//  alert("highscore";)
//make high score section no longer hidden



displayQuestion();
//}
//we were not incrementing correctly according to the web questions being displayed,why we had to switch it.Swapped line 90 with 91.

});





//end of function

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




      finalScore.addEventListener("click",function(){
//clear timer
timerH2.hidden = true;
clearInterval(timerInterval);


//call the showing function instead of finalScore
//if the user gets to this section, make the timer go to 0 seconds or clearInterval

finalDiv.hidden = false;
firstQuestion.hidden = true;
scoreCount.hidden=true;
h2Score.hidden=true;

event.preventDefault()
        finalScoreCt.textContent=score;
        console.log(this.textContent);


      });




//new
      // submitScoreBtn.addEventListener("click",function(event){


       
      //   // NEW.................................................
      //   // event.preventDefault()
      //   // finalScoreCt.textContent=score;
        

      //   // console.log(this.textContent);
      //   // not added showfinalScore();
      //          });
//new

zeroSecsPage=function(){
  starting.hidden = true;
  finalDiv.hidden = true;
  firstQuestion.hidden = true;
  scoreCount.hidden=true;
  h2Score.hidden=true;
  

};


//zeroSeconds

// zeroSeconds.textContent;
//   console.log(this.textContent);


// NEW JAVA BELOW

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector(".todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// The following function renders items in a todo list as <li> elements
function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    //adds final score to list
    button.textContent = score;

    li.appendChild(button);
    todoList.appendChild(li);

  
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // This is a helper function that will render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add submit event to form
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});

// Add click event to todoList element
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});

// Calls init to retrieve data and render it to the page on load
init()

