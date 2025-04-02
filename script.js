let countdown;
let timeLeft = 0;

function startTimer(seconds) {
    clearInterval(countdown);
    timeLeft = seconds;
    updateDisplay();
    countdown = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(countdown);
            alert("Time's up!");
        }
    }, 1000);
}

function addTime(seconds) {
    timeLeft += seconds;
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}