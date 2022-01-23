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
var finalDiv = document.querySelector(".finalDiv");
//new



startButton.addEventListener("click",function() {
starting.hidden = true;
firstQuestion.hidden = false;

displayQuestion();

});

var timerInterval = setInterval(function() {
  secondsLeft--;
  timeEl.textContent = secondsLeft;

  if(secondsLeft === 0) {
    // Stops execution of action at set interval
    clearInterval(timerInterval);
    // Calls function to create and append image
    sendMessage();
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


//call the showing function instead of finalScore
finalDiv.hidden = false;
firstQuestion.hidden = true;


// showfinalScore();
       }
      );

// showfinalScore=function(){
  
//  finalDiv.textContent 

// };
  






//           button01.addEventListener("click",function(){
//             correctIncorrect.textContent = incorrect;
            
//           });
//             button02.addEventListener("click",function(){
//               correctIncorrect.textContent = correct;
//               // if (score < 4) {
//               //   score++;
//               //   scoreCount.textContent = score;
//               //   localStorage.setItem("score",scoreCount)
//               });
        

//               button03.addEventListener("click",function(){
//                 correctIncorrect.textContent = incorrect;
                
//               });
//                 button04.addEventListener("click",function(){
//                   correctIncorrect.textContent = incorrect;
                
//                   });