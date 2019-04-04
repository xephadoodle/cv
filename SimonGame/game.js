var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
// var randomChosenColour = nextSequence();
var userClickedPattern = [];
var level = 0;
var started = 0;


$("body").keydown(function() {
  if (started === 0) {
    started++;
    nextSequence();
  }
});


$(".btn").click(function() {
  var clickedButton = this.id;
  userClickedPattern.push(clickedButton);
  console.log(userClickedPattern);
  animateButton(clickedButton);
  playSound(clickedButton);
  if (userClickedPattern.length === gamePattern.length) {
    for (var i = 0; i < userClickedPattern.length; i++) {
      if (userClickedPattern[i] != gamePattern[i]) {
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function() {
          $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, press any key to restart");
        startOver();
        return;
      }
    }
    $("h1").text("YOU WON!!!");
    userClickedPattern = [];
    setTimeout(nextSequence, 1000);
  }
});

function startOver() {
  userClickedPattern = [];
  gamePattern = [];
  level = 0;
  started = 0;
}

function nextSequence() {
  $("h1").text("Level " + level);
  var randomNumber = Math.floor((4 * Math.random()));
  var randomColour = buttonColours[randomNumber];
  gamePattern.push(randomColour);
  playSound(randomColour);
  animateButton(randomColour);
  level++;
  console.log(level);
}

function checkAnswer(currentLevel) {

}

function animateButton(name) {
  var currentButton = $("#" + name);
  currentButton.addClass("pressed");
  setTimeout(function() {
    currentButton.removeClass("pressed");
  }, 100);
}


function playSound(name) {
  switch (name) {
    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}
