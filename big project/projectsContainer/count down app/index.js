const timeDisplay = document.getElementById("timer");
const input = document.getElementById("input");
const stopBtn = document.getElementById("stop");
const submitBtn = document.getElementById("submit");
const startBtn = document.getElementById("start");

// function that takes as param the number of seconds and translates to minutes and seconds
function convertToMinutesAndSeconds(num) {

    const minutes = Math.floor(num / 60);
    const seconds = num % 60;
    
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedMinutes}:${formattedSeconds}`;
}

// function that starts a timer (interval) and every second subtracts 1 from the global number of seconds, then calls the function thjat translates to minutes and seconds, and finally sets the diusplay html
let isRunning = false;

startBtn.addEventListener("click", () => {
    if (!isRunning) {

        countTime = setInterval(() => {
        input.value--;
        displayToTimer(input.value);
        console.log(input.value);   

        if (timeDisplay.textContent === "00:00") {
            clearInterval(countTime);
            isRunning = false;
            console.log("Interval paused");
            timeDisplay.innerHTML = "time's up!!!"
        }

        }, 1000);
        isRunning = true;
    }
});


// function that ends a timer
stopBtn.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(countTime);
        isRunning = false;
        console.log("Interval paused");
    }
});

function displayToTimer() {
    timeDisplay.innerHTML = convertToMinutesAndSeconds(input.value);
    input.style.display = "none";
    submitBtn.style.display = "none";
}