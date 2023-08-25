// Function to randomly return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    // Random number between 1 and 3 to map to the three choices, i.e. 1 = Rock, 2 = Paper, etc.
    let computerChoice = Math.floor(Math.random() * 3) + 1

    // Log the choice as the item, not the number
    if (computerChoice === 1) {
        console.log("Computer: Rock");
    } else if (computerChoice === 2) {
        console.log("Computer: Paper");
    } else if (computerChoice === 3) {
        console.log("Computer: Scissors")
    }
}

getComputerChoice();