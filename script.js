let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let a = Math.floor((Math.random() * 3));
    let options = ["rock", "paper", "scissors"];
    return options[a];
};

function getHumanChoice(){
    let entry = window.prompt("Enter rock, paper, or scissors").toLowerCase();
    if(entry == "rock" || entry == "paper" || entry == "scissors"){
        return entry;
    }
    else{
        return getHumanChoice();
    }
};

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let returnExpression;
    if(humanChoice == computerChoice){
        returnExpression = `Tie! You both chose ${humanChoice}!`;
    }
    else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        returnExpression = `${humanChoice} beats ${computerChoice}. You win!`;
        humanScore++;
    }
    else{
        returnExpression = `${computerChoice} beats ${humanChoice}. You lose.`;
        computerScore++;
    };
    console.log(returnExpression);
};

function playGame(){
    for(let i = 0; i<5; i++){
        playRound();
        console.log(`The score is now ${humanScore} for you and ${computerScore} for the computer!`)
    }
    console.log("Game Over!")
}

playGame();