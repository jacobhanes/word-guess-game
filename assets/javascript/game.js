window.onload = () => {
  console.log("window ready");
  let wins = 0;
  let guessed = [];
  let answered = [];
  let space;
  let counter;
  let guess;
  let foundCount = 0;

  const questions = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto"
  ];

const wrong = document.getElementById("lettersGuessed");
const correct = document.getElementById("correctGuess");
const showLives = document.getElementById("lives");
const showWins = document.getElementById("wins");
const contain = document.querySelectorAll(".letter");
const messageElement = document.getElementById("message");


let chosenWord = randomWord();
buildEmptySpaces(chosenWord);
function reset() {
    guessed.length = 0;
    answered.length = 0;
    foundCount = 0;
    chosenWord = randomWord();
}
function calculateWinLoses() {
    // to-do check for win or loss
}
function playAgain() {
    reset();
    calculateWinLoses();
}
function randomWord() {
    return questions[Math.floor(Math.random() * questions.length)];
}
  function buildEmptySpaces(chosenWord) {
    let myTemplate = "";
    for (let index = 0; index < chosenWord.length; index++) {
      myTemplate += "<li class='letter'>&nbsp;</li>";
    }
    correct.innerHTML = myTemplate;
  }
  changeLives = function() {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (let i = 0; i < guessed.length; i++) {
      if (counter + space === guessed.length) {
        showLives.innerHTML = "You Win";
      }
    }
  };
  function checkIfAskedBefore(letter) {
      // Looking through the guessed list 
      for (let i = 0; i < guessed.length; i++) {
          if (letter === guessed[i]) {
              return true;
          }
      }
      guessed.push(letter);
      return false;
  }
  function populateAnswer(letter, letterSpaces) {
    contain = document.querySelectorAll(".letter");
    console.log(contain);
  }
  function checkWinner() {
      // to-do: Find out if he is a winner
  }
  function checkLetter(letter) {
    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) {
            return true;
        }
    }
    return false; 
  }
  function findLetterPosition(letter) {
    // return array of places 
    let letterPosition = [];
    for (let index = 0; index < chosenWord.length; index++) {
      if (chosenWord[index] === letter) {
        letterPosition.push(index);
      }
    }
    return letterPosition;
  }
  function checkAnswer(letter) {
    let msg = "";
    // Checking if this has been asked before 
    // if it has then a message will appear and program will return null;
    if (checkIfAskedBefore(letter)) {
        msg = letter + " has been guessed before";
        messageElement.innerHTML = msg;
        return false;
    }
    // checking if the letter is in the chosen word
    // if it is in place then run populate letter
    if (checkLetter(letter)) {
        msg = letter + " is found!";
        messageElement.innerHTML = msg;
        return true;
    } else {
        msg = letter + " is not found!";
        messageElement.innerHTML = msg;
        return false;
    }
  }

  window.addEventListener("keyup", function(event) {
    let userInput = String.fromCharCode(event.keyCode || event.code).toLowerCase();
    let correctAnswer = checkAnswer(userInput);
    
    if (correctAnswer) {
        const letterPostion = findLetterPosition(userInput);
        populateAnswer(letterPostion);
    }
    let isWinner = checkWiner();
    if (isWinner) {
        // To-do: function to write when someone wins
    } else {
      changeLives();
    }
  });
};
