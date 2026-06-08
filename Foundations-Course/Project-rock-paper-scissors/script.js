
//console only thing
// let humanScore  = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice === computerChoice) {
//         return "It's a tie!";
//     } else if (
//         (humanChoice === 'rock' && computerChoice === 'scissors') ||
//         (humanChoice === 'paper' && computerChoice === 'rock') ||
//         (humanChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         humanScore++;
//         return `You win! ${humanChoice} beats ${computerChoice}.`;
//     } else {
//         computerScore++;
//         return `You lose! ${computerChoice} beats ${humanChoice}.`;
//     }
// }
// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();
//         console.log(`Round ${i + 1}:`);
//         console.log(playRound(humanChoice, computerChoice));
//         console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
//     }
//     if (humanScore > computerScore) {
//         console.log("Congratulations! You win the game!");
//     } else if (humanScore < computerScore) {
//         console.log("Sorry! You lose the game.");
//     } else {
//         console.log("It's a tie overall!");
//     }

// }
// function getComputerChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// function getHumanChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     let choice;
//     do {
//         choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
//     } 
//     while (!choices.includes(choice));
//     return choice;
// }

// playGame();


//webpage only thing (Using DOM and event handlers)
let humanScore = 0;
let computerScore = 0;
let round = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRoundUI(humanChoice) {
    if (round >= 5) return; // Stop after 5 rounds

    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    round++;

    document.getElementById('result').textContent = `Round ${round}: ${result}`;
    document.getElementById('score').textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;

    if (round === 5) {
        let finalMsg = '';
        if (humanScore > computerScore) {
            finalMsg = "Congratulations! You win the game!";
        } else if (humanScore < computerScore) {
            finalMsg = "Sorry! You lose the game.";
        } else {
            finalMsg = "It's a tie overall!";
        }
        document.getElementById('result').textContent += `\n${finalMsg}`;
    }
}