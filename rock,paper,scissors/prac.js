let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let userInput = prompt("Please enter rock, paper, or scissors:").toLowerCase();

    while (!validChoices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return userInput;
}


function playRound(HumanChoice,ComputerChoice) {
    if (HumanChoice === ComputerChoice) {
        console.log("It's a tie!");
    } else if (
        (HumanChoice === "rock" && ComputerChoice === "scissors") ||
        (HumanChoice === "paper" && ComputerChoice === "rock") ||
        (HumanChoice === "scissors" && ComputerChoice === "paper")
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("Computer wins!");
        computerScore++;
    }


}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);
    }
}

playGame();
//console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);