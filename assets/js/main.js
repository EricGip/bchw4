var timeEl = document.querySelector(".time");
var startButton = document.querySelector("#startButton")
var titleScreen = document.querySelector("#titleScreen")
var quizScreen = document.querySelector("#quiz")
var endScreen = document.querySelector("#endScreen")

var score = 0;
var secondsLeft = 30;

// Timer 
function setTime() {
    var timerInverval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining on your quiz!";

        if (secondsLeft === 0) {
            clearInterval(timerInverval);
            sendToEnd();
        }
    }, 1000);
}

// start quiz: needs to get the questions by updating title
// needs to loop over the choices
// need to somehow create a button for all of the choices/  
function startQuiz() {
    // hide the title screen,
    titleScreen.setAttribute("class", "hide")
    // then show quiz questions, choices
    quizScreen.setAttribute("class", "show")
    //starting timer at the end, instead of the beginning to be fair. 
    setTime();

}

// to do, send this to send to finaly screen, just display score and stuff
// fuction sendToEnd() {
//     timeEl.textContent = " ";
    
// To do, put this inside the startQuiz function?
// setTime();


console.log(secondsLeft);

startButton.addEventListener("click", startQuiz)