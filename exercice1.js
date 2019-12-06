// Make it count up on a timer, calling this function
var run = true;
var seconds = document.getElementById("seconds");

var countUp = function() {
    seconds.innerHTML = parseInt(seconds.innerHTML) + 1;
    if(run) {
        setTimeout(countUp, 1000);
    }
};

// How can you make it stop counting?
var stopCountUp = function() {
    run = false;
};

var stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

countUp();

