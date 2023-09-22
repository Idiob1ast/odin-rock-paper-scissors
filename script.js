let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Function to capitalize words
function toCapital(txt) {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}

// Function to randomly return either 'Rock', 'Paper', or 'Scissors' for computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Play a round of the game
function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    result_div.innerHTML = `Whoa! It's a tie! You both chose ${toCapital(
      playerChoice
    )}.`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "You win! Paper beats Rock!";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "You win! Rock beats Scissors!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "You win! Scissors beats Paper!";
  } else {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `You lose! ${toCapital(
      computerChoice
    )} beats ${toCapital(playerChoice)}.`;
  }
  if (userScore === 5) {
    alert("You won the game!");
  } else if (computerScore === 5) {
    alert("Computer wins!");
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    playRound("rock");
  });

  paper_div.addEventListener("click", function () {
    playRound("paper");
  });

  scissors_div.addEventListener("click", function () {
    playRound("scissors");
  });
}

main();
