var randomNumber1 = Math.floor(1 + (6 * Math.random()));
var playerOneDice = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", playerOneDice);

var randomNumber2 = Math.floor(1 + (6 * Math.random()));
var playerTwoDice = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", playerTwoDice);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
