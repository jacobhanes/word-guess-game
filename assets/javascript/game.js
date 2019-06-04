window.onload = () => {
  console.log('window ready');
  let wins = 0;
  let guessed = [];
  let space;
  let counter;
  let guess;


  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const questions = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];

  const wrong = document.getElementById("lettersGuessed");
  const correct = document.getElementById("correctGuess");
  const showLives = document.getElementById("lives");
  const showWins = document.getElementById("wins");
  const contain = document.querySelectorAll("li");
  let foundCount = 0;
  let chosenWord = questions[Math.floor(Math.random() * questions.length)];
  console.log(chosenWord);
  buildEmptySpaces(chosenWord);
  function buildEmptySpaces(chosenWord) {
    let myTemplate = "";
    for (let index = 0; index < chosenWord.length; index++) {
      myTemplate += "<li>&nbsp;</li>";
    }
    correct.innerHTML = myTemplate;
  }
  
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
  }
  function placeOfLetter(letter) {
    let locationOfLetter = [];
    for (let index = 0; index < chosenWord.length; index++) {
      if (chosenWord[index] === letter) { locationOfLetter.push(index); }
    }
    return locationOfLetter;
  }

  window.addEventListener('keyup', function (event) {
    console.log(event);
    let userInput = String.fromCharCode(event.keyCode || event.code).toLowerCase();
    let found = false;
    locationOfLetters = placeOfLetter(userInput);
    //place a letter
    console.log(locationOfLetters);
    for (let i = 0; i < chosenWord.length; ++i) {
      if (userInput === chosenWord[i]) {
        const myTemplate = "<li>" + userInput + "</li>";
        console.log(correct.innerHTML);
        correct.innerHTML = correct.innerHTML + myTemplate;
        found = true;
        foundCount++;
        console.log(userInput);
      }
    }
    if (foundCount === contain.length) {
      if (correct) {
        correct.classList.add("winner");
      }
    }
    if (!found) {
      console.log(wrong);
      if (wrong) {
        let myHtml = "<li>" + userInput + "</li>";
        wrong.innerHTML += myHtml
      }
    }
  });
}