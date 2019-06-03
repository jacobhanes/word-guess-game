//window.onload = funcion() {

let wins = 0;

let guessed = [];
let space;
let counter;
let guess;
let chosenWord;
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const questions = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];

const showLives = document.getElementById("lives");
const showWins = document.getElementById("wins");
const correct = document.getElementById("correctGuess");
const wrong = document.getElementById("lettersGuessed");

changeLives = function () {
  showLives.innerHTML = "You have " + lives + " lives";
  if (lives < 1) {
    showLives.innerHTML = "Game Over";
  }
  for (let i = 0; i < guessed.length; i++) {
    if (counter + space === guessed.length) {
      showLives.innerHTML = "You Win";
    }
  }

  document.onkeyup = function(event) {
    let userInput = event.key; 
    for (i = 0; i < chosenWord.length; i++){
      if(userInput === chosenWord[i]){

      }
    }

  }

  hangMan() = function () {

    chosenWord = questions[Math.floor(math.random() * questions.length)];
    chosenWord = chosenWord.replace(/\s/g, "-");
    console.log(chosenWord);
  }

}