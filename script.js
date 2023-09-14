// Initialize variables
let startTime = 0;
let intervalId;
const stopwatch = document.querySelector('.stopwatch');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Function to format time in the format "0:00.0"
function formatTime(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const tenths = Math.floor((milliseconds % 1000) / 100);
    return `${minutes}:${String(seconds).padStart(2, '0')}.${tenths}`;
}

// Function to start the stopwatch
function startStopwatch() {
    // Check if the stopwatch is not already running
    if (!intervalId) {
        // Calculate the elapsed time if it was previously paused
        startTime = Date.now() - (startTime ? startTime : 0);
        
        // Start updating the stopwatch display every 100 milliseconds
        intervalId = setInterval(() => {
            stopwatch.textContent = formatTime(Date.now() - startTime);
        }, 100);
    }
}

// Function to stop the stopwatch
function stopStopwatch() {
    clearInterval(intervalId);
    intervalId = null;
}

// Function to reset the stopwatch
function resetStopwatch() {
    clearInterval(intervalId);
    intervalId = null;
    startTime = 0;
    stopwatch.textContent = '0:00.0';
}

// Event listeners for buttons
startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
