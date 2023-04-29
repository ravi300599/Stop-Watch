const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');


let startTime, intervalId;

// Define the start function that start time

function start(){
    startTime = Date.now();
    intervalId = setInterval(() => {
        const elapsTime = Date.now() - startTime;
        const seconds = Math.floor(elapsTime/1000);
        const minuts = Math.floor(seconds/60);
        const hours = Math.floor(minuts/60);

        //Formate of HH MM SS
        const formatedTime = `${pad(hours)}: ${pad(minuts)}: ${pad(seconds)}`;

        display.textContent = formatedTime;
    },10)
}


function stop() {
    clearInterval(intervalId);
}

function reset() {
    clearInterval(intervalId);
    display.textContent = '00:00:00'
}


// adding a leading 0 to a number id its less the 10
function pad(number){
    return number < 10 ? '0' + number : number;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);