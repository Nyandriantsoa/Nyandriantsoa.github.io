const MY_CUSTOM_FONT_SIZE = [];
MY_CUSTOM_FONT_SIZE['Tiny'] = 7;
MY_CUSTOM_FONT_SIZE['Small'] = 10;
MY_CUSTOM_FONT_SIZE['Medium'] = 12;
MY_CUSTOM_FONT_SIZE['Large'] = 16;
MY_CUSTOM_FONT_SIZE['Extra Large'] = 24;
MY_CUSTOM_FONT_SIZE['XXL'] = 32;

var previousText = "";
var speed = 250;
var isPlaying = false;
var currentIndex;
var frames;

var myTextArea = document.getElementById('text-area');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var animation = document.getElementById('animation');

var intervalLoop;

document.addEventListener("DOMContentLoaded", function(event){

    myTextArea = document.getElementById('text-area');
    startButton = document.getElementById('start');
    stopButton = document.getElementById('stop');
    animation = document.getElementById('animation');

});

function play(){
    isPlaying = true;

    previousText = previousText || myTextArea.value;
    
    frames = ANIMATIONS[animation.value].split('=====');
    currentIndex = 0;

    startButton.setAttribute('disabled', 'true');
    stopButton.removeAttribute('disabled');

    myTextArea.setAttribute('disabled', 'true');
    animation.setAttribute('disabled', 'true');

    intervalLoop = setInterval(function (){
        myTextArea.value = frames[currentIndex];

        currentIndex++;
        if(currentIndex >= frames.length) currentIndex = 0;
    } , speed);
}

function stop(){
    isPlaying = false;

    clearInterval(intervalLoop);
    myTextArea.value = previousText;

    startButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled', 'true');

    myTextArea.removeAttribute('disabled');
    animation.removeAttribute('disabled');
}

function handleAnimationChange(){
    previousText = previousText || myTextArea.value;

    myTextArea.value = ANIMATIONS[animation.value];
}

function handleSpeed(event){
    if(event.target.checked)
        speed = 50;
    else speed = 250;

    if(isPlaying){
        clearInterval(intervalLoop);

        intervalLoop = setInterval(function (){
            myTextArea.value = frames[currentIndex];
    
            currentIndex++;
            if(currentIndex >= frames.length) currentIndex = 0;
        } , speed);
    }
}

function handleFontSize(event){
    console.log('tnga ato' , event.target.value)
    myTextArea.style.fontSize = MY_CUSTOM_FONT_SIZE[event.target.value] + "px";
}