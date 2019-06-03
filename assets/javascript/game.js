//window.onload = funcion() {

  let wins = 0;
  let trys = 12;
  let guessed = [];
  let space;
  let counter;
  let guess;
  let chosenWord;
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const questions = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];

  let showLives =
    document.getElementById("remainingGuess");


 
// shows guesses
  result = function () {
    wordHolder = document.getElementById('correctGuess');
    correct = document.createElement('ul');

    for (var i = 0; i < chosenWord.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (chosenWord[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }
      

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
//}
//document.onkeyup = funcion(event) {
  //  if (event.key = correctLetter)
    //document.getElementById(correctGuess);
//}
