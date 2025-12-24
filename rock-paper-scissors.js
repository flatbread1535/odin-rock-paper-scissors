function getComputerChoice() {
    /* 
     * Multiplying Math.random() by 3 generates number in domain [0, 3).
     * Then using Math.floor() to floor the number gives a uniform distribution of 0, 1, or 2.
     */
    let num =  Math.floor(3 * Math.random());
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter a choice: ");
    return choice.toLowerCase(); // toLowerCase() makes input case-insensitive
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win! Rock beats Scissors!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You lose! Scissors beat Paper!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! Paper beats rock!");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You lose! Rock beats scissors!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! Scissors beat paper!");
    } else {
        console.log("You tied!");
    }
}

function playGame() {
    playRound();
    console.log("The score is: " + humanScore + " - " + computerScore + ".");
    playRound();
    console.log("The score is: " + humanScore + " - " + computerScore + ".");
    playRound();
    console.log("The score is: " + humanScore + " - " + computerScore + ".");
    playRound();
    console.log("The score is: " + humanScore + " - " + computerScore + ".");
    playRound();
    console.log("The score is: " + humanScore + " - " + computerScore + ".");
}

playGame();