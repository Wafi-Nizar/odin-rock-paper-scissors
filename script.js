console.log("Hello World!");

const hands = ["rock", "paper", "scissors"]

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    return hands[random]
}

function getHumanChoice() {
    let choice = prompt("What's your choice boy?");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    // humanChoice = humanChoice.toLowerCase();
    console.log("Human Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);

    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Uh oh! It's a tie");
    } else {
        console.log("Invalid")
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
    }
}

playGame();
