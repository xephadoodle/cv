var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
// var randomChosenColour = nextSequence();
var userClickedPattern = [];
var level = 0;


$("body").one("keydown", function() {
  nextSequence();
});


$(".btn").click(function() {
  var clickedButton = this.id;
  userClickedPattern.push(clickedButton);
  console.log(userClickedPattern);
  animateButton(clickedButton);
  playSound(clickedButton);
});


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
