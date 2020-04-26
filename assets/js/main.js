var timeEl = document.querySelector(".time");
var startButton = document.querySelector("#startButton");
var titleScreen = document.querySelector("#titleScreen");
var quizScreen = document.querySelector("#quiz");
var endScreen = document.querySelector("#endScreen");
var questions = document.querySelector("#potentialAnswers");
var questionHeader = document.getElementById("questionHeader");

var score = 0;
var secondsLeft = 30;

// trying to prepare for whiteboard interviews!
var questions = {
  q1: "What is Python's mutable array?",
  q2: "What is Python's immutable array?",
  q3: "What has 0(n) look up and allows for duplicates?",
  q4: "What has O(n) look up, but forbids duplicates?"
};

var options = {
  choiceq1: ["List", "Tuple", "Dictionary", "Set"],
  choiceq2: ["Tuple", "Set", "Dictionary", "List"],
  choiceq3: ["Set", "Tuple", "List", "Dictionary"],
  choiceq4: ["Tuple", "List", "Set", "Dictionary"]
};

var answers = {
  answer: "List",
  answer: "Tuple",
  answer: "Dictionary",
  answer: "Set"
};

// Timer
function setTime() {
  var timerInverval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining on your quiz!";

    if (secondsLeft === 0) {
      time = 0;
      sendToEnd();
    }
    // ticks by 1 second.
  }, 1000);
}

// start quiz: need to hide the start screen
// show quiz screen
// start the timer
function startQuiz() {
  // hide the title screen,
  titleScreen.setAttribute("class", "hide");
  // then show quiz questions, choices
  quizScreen.setAttribute("class", "show");
  //starting timer at the end, instead of the beginning to be fair.
  setTime();
}

// quizScreen: needs to get the questions by updating the tilte??
// needs to loop over the choices
// need to somehow create a button for all of the choices/
function quizQuestions() {
  currIndex = 0;
  var currQuest = questions[currIndex];

  // update the header
  questionHeader.textContent = currQuest.title;

  //loop through choices,
  currQuest.choices.forEach(function(choices) {
    // if (curreQuest <= (questions.choices.length - 1)) {
    //creating a button for each, assigning the data-attributes, and event listeners to save their answer
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choices);

    //saving choice as their answer...
    choiceButton.onclick = userAnswer;
    //displaying the choices
    choiceButton.textContent = choices;

    //hopefully displays on page
    chooseEl.appendChild(choiceButton);
  });
}

// to do, send this to send to finaly screen, just display score and stuff
// fuction sendToEnd() {
//     timeEl.textContent = " ";

// To do, put this inside the startQuiz function?
// setTime();

startButton.addEventListener("click", startQuiz);
