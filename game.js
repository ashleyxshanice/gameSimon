<<<<<<< HEAD
=======

>>>>>>> 79596e7 (Update files)
let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
<<<<<<< HEAD
let level = 0; 

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text ("Level " + level);
        nextSequence(); 
=======
let level = 0;

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
>>>>>>> 79596e7 (Update files)
        started = true;
    }
});

<<<<<<< HEAD

$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    
    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
=======
$(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
>>>>>>> 79596e7 (Update files)
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
<<<<<<< HEAD
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
=======
        if (userClickedPattern.length === gamePattern.length) {
>>>>>>> 79596e7 (Update files)
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
<<<<<<< HEAD
        console.log("wrong");
        $("#level-title").text ("Game Over, Press Any Key to Restart")
        let wrongAudio = new Audio ("sounds/wrong.mp3"); 
        wrongAudio.play(); 
        $("body").addClass("game-over");
=======
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

>>>>>>> 79596e7 (Update files)
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
<<<<<<< HEAD
    }   
}

function nextSequence() {
    
    userClickedPattern = [];

    level++; 
    $("level-title").text("Level " + level);

=======
    }
}


function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
>>>>>>> 79596e7 (Update files)
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

<<<<<<< HEAD

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

 
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }


function startOver() {
    level = 0;
    gamePattern = []; 
    started = false; 
=======
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
>>>>>>> 79596e7 (Update files)
}







