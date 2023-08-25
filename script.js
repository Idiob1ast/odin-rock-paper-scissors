function game() {
    // Function to randomly return either 'Rock', 'Paper', or 'Scissors' for computer choice
    function getComputerChoice() {
        // Random number between 1 and 3 to map to the three choices, i.e. 1 = Rock, 2 = Paper, etc.
        let computerChoice = Math.floor(Math.random() * 3) + 1

        // Log the choice as the item, not the number
        if (computerChoice === 1) {
            return "rock";
        } else if (computerChoice === 2) {
            return "paper";
        } else if (computerChoice === 3) {
            return "scissors";
        }
    }

    // Function to capitalize words
    function toCapital(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }

    // Function to play a single round of Rock Paper Scissors
    // Rock beats Scissors; Paper beats Rock; Scissors beats Paper.
    function playRound(playerSelection, computerSelection) {

        if (playerSelection === computerSelection) {
            return `Whoa! It's a tie! You both chose ${playerSelection}.`;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You win! Paper beats Rock!";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You win! Rock beats Scissors!";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You win! Scissors beats Paper!";
        } else {
            return `You lose! ${toCapital(computerSelection)} beats ${toCapital(playerSelection)}.`;
        }
    }

    // Prompt player for selection and make it lowercase for parsing
    let playerSelection = prompt("Rock, Paper, or Scissors?", '').toLowerCase();

    // Get computer's selection from function call
    let computerSelection = getComputerChoice();

    // Log results to console
    console.log(playRound(playerSelection, computerSelection));
}

// Play 5 rounds of the game
for (let round = 0; round < 5; round++) {
    game()    
}