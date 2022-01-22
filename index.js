var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png
var randomDiceImage2 = randomNumber2 + ".png"; //dice1.png-dice6.png

var randomSourceImage = "images/" + randomDiceImage; //images/dice1.png to dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSourceImage);

var randomSourceImage2 = "images/dice" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSourceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h3").innerHTML = "Player 1 is win 🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h3").innerHTML = "Player 2 is win 🚩";
} else {
  document.querySelector("h3").innerHTML = "Draw 📍";
}
