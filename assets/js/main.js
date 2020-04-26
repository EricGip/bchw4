var timeEl = document.querySelector(".time");

var score = 0;
var secondsLeft = 30;

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


// to do, send this to send to finaly screen, just display score and stuff
// fuction sendToEnd() {
//     timeEl.textContent = " ";
    
// }


setTime();

console.log(secondsLeft);