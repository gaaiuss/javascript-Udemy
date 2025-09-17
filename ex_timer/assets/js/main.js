const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let seconds = 0;
let timer;

function createTimer(seconds){
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString('en-US', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function startTimer() {
    timer = setInterval(function(){
         seconds++;
        clock.innerHTML = createTimer(seconds);
    }, 1000)
}

function pauseTimer() {
    clearInterval(timer)
}

function resetTimer() {
    clearInterval(timer)
    clock.innerHTML = '00:00:00'
}

document.addEventListener('click', function(e){
    const lmt = e.target;

    if (lmt.classList.contains('start')){
        clock.classList.remove('paused');
        clearInterval(timer);
        startTimer();
    }

    if (lmt.classList.contains('pause')){
        clock.classList.add('paused');
        clearInterval(timer);
        pauseTimer();
    }

    if (lmt.classList.contains('reset')){
        clock.classList.remove('paused');
        clearInterval(timer);
        resetTimer();
        seconds = 0;
    }
})