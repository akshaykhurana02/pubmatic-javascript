let previousGuesses = [];
let randomNumber = Math.ceil(Math.random() * 100 + 1);
let numberOfAttempts = 10;
const lowOrHi = document.querySelector(".lowOrHi");

// Main Function
function checkGuess() {
  let guess = parseInt(document.getElementById("guessField").value);
  const guessesRemaining = document.querySelector(".lastResult");
  const guessSlot = document.querySelector(".guesses");

  if (isNaN(guess)) {
    alert("Please enter a valid number!");
  } else if (guess > 100 || guess < 0) {
    /* (guess > 100 && guess < 0) {  */
    alert("Please enter a number between 1 and 100!");
  } else {
    numberOfAttempts--;
    guessesRemaining.innerHTML = `${numberOfAttempts}`;
    previousGuesses.push(guess);
    if (numberOfAttempts > 0) {
      if (guess == randomNumber) {
        lowOrHi.innerHTML = `<h2>You guessed it correctly!</h2>`;
      } else if (guess > randomNumber) {
        lowOrHi.innerHTML = `<h2>You guessed too High!</h2>`;
      } else if (guess < randomNumber) {
        lowOrHi.innerHTML = `<h2>You guessed too Low!</h2>`;
      }
      guessSlot.innerHTML += `${guess} `; // guessSlot.innerHTML = guessSlot.innerHTML + `${guess} `;
    } else {
      lowOrHi.innerHTML = `Game Over! Number was ${randomNumber}`;
      setTimeout(() => {
        numberOfAttempts = 10;
        previousGuesses = [];
        guessSlot.innerHTML = "";
        guessesRemaining.innerHTML = `${numberOfAttempts}`;
        document.getElementById("guessField").value = "";
        lowOrHi.innerHTML = `New game started!`;
      }, 10000);
    }
  }
}
