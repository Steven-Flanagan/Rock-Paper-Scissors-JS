let computerScore = 0;
let humanScore = 0;
let computerSelection;
let humanSelection;
playGame();

// Plays 5 rounds

function playGame () {
    for (i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Final scores are - Computer: " + computerScore + " : Human: " + humanScore);
}

// Game logic

function playRound (humanChoice, computerChoice) {
    
    
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            playerMoves(humanSelection, computerSelection);
            console.log("\nDraw, no one wins!\n\n");
        }
        else if (computerChoice === 'paper') {
            playerMoves(humanSelection, computerSelection);
            console.log("\nComputer wins!\n\n");
            computerScore++;
        }
        else if (computerChoice === 'scissors') {
            playerMoves(humanSelection, computerSelection);
            console.log("\nYou win!\n\n");
            humanScore++;
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            playerMoves(humanSelection, computerSelection);
            console.log("\nYou win!\n\n");
            humanScore++;
        }
        else if (computerChoice === 'paper') {
            playerMoves(humanSelection, computerSelection);
            console.log("\nDraw, no one wins!\n\n");
        }
        else if (computerChoice === 'scissors') {
            playerMoves(humanSelection, computerSelection);
            console.log("\nComputer wins!\n\n");
            computerScore++;
        }
    }
    else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            playerMoves(humanSelection, computerSelection);
            console.log("\nComputer wins!\n\n");
            computerScore++;
        }
        else if (computerChoice === 'paper') {
            playerMoves(humanSelection, computerSelection);
            console.log("\nYou win!\n\n");
            humanScore++;
        }
        else if (computerChoice === 'scissors') {
            playerMoves(humanSelection, computerSelection);
            console.log("\nDraw, no one wins!\n\n");
        }
    }
}

// Gets human's choice

function getHumanChoice () {
    let humanChoice = prompt("Please choose; rock, paper or scissors: "); 
    humanChoice = humanChoice.toLowerCase();
    return(humanChoice);
}

// Randomly generates computer choice

function getComputerChoice() {
    let computerChoice = '';
    let random = Math.ceil((Math.random() / 3.333) * 10);
    if (random === 1) {
        computerChoice = 'rock';
    }
    else if (random === 2) {
        computerChoice = 'paper';
    }
    else if (random === 3) {
        computerChoice = 'scissors';
    }
    else {
        console.log ("Error");
    }
    return(computerChoice);
}

// States what moves the players have taken

function playerMoves(humanMove, playerMove) {
    console.log("Your choice: " + humanMove);
    console.log("Computer's choice: " + playerMove);
}