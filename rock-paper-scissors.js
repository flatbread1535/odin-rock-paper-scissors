function getComputerChoice() {
    /* 
     * Multiplying Math.random() by 3 generates number in domain [0, 3).
     * Then using Math.floor() to floor the number gives a uniform distribution of 0, 1, or 2.
     */
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorButton.textContent = "Scissor";

rockButton.id = "rock";
paperButton.id = "paper";
scissorButton.id = "scissors";

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorButton);

const resultDiv = document.createElement("div");
const scoreDiv = document.createElement("div");

body.appendChild(resultDiv);
body.appendChild(scoreDiv);

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5) {
            playRound(button.id);
        }
    });
});

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        resultDiv.textContent = `Tie. Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    }

    scoreDiv.textContent = `The score is: ${humanScore} - ${computerScore}`;

    if (humanScore === 5) {
        resultDiv.textContent = "You win!"
    } else if (computerScore === 5) {
        resultDiv.textContent = "You lose!"
    }
}