const playerOneInputBox = document.querySelector(".playerOneInput");
const playerTwoInputBox = document.querySelector(".playerTwoInput");

const player1Input = document.querySelector(".player-1-input");
const player2Input = document.querySelector(".player-2-input");

const p1Btn = document.querySelector(".p1-btn");
const p2Btn = document.querySelector(".p2-btn");

const errorMsg = document.querySelector(".error");
const winnerBox = document.querySelector(".winner_box");
const result = document.querySelector(".result");

let secretNumber = null;
let chances = 5;

// Player One Button Click
p1Btn.addEventListener("click", () => {
  let val = player1Input.value;

  if (val === "") {
    errorMsg.innerHTML = "Input cannot be empty!";
  } else if (val < 0 || val > 10) {
    errorMsg.innerHTML = "Please choose a number between 0-10";
  } else {
    secretNumber = Number(val);
    errorMsg.innerHTML = "";

    playerOneInputBox.style.display = "none";
    playerTwoInputBox.style.display = "block";
  }
});

// Player Two Button Click
p2Btn.addEventListener("click", () => {
  let guess = player2Input.value;

  if (guess === "") {
    errorMsg.innerHTML = "Input cannot be empty!";
    return;
  } else if (guess < 0 || guess > 10) {
    errorMsg.innerHTML = "Please choose a number between 0-10";
    return;
  }

  guess = Number(guess);

  if (guess === secretNumber) {
    showWinner("🎉 Player 2 Wins!");
  } else {
    chances--;
    if (chances > 0) {
      errorMsg.innerHTML = `❌ Wrong guess! You have ${chances} chance(s) left.`;
    } else {
      showWinner(`😎 Player 1 Wins! The number was ${secretNumber}`);
    }
  }
});

// Function to show Result Screen
function showWinner(message) {
  errorMsg.innerHTML = "";
  playerTwoInputBox.style.display = "none";
  winnerBox.style.display = "block";
  result.innerHTML = message;
}
