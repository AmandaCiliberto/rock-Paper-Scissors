let textArray = [
    "rock",
    "paper",
    "scissors"
];

let playerScore = 0;
let computerScore = 0;

//PLAY FUNCTION
function playRound(){

    let computerPlay = textArray[Math.floor(Math.random()*textArray.length)];
    console.log(computerPlay);
    let playerSelection = prompt("Enter either Rock, Paper or Scissors").toLowerCase();
    parseInt(playerSelection);
    console.log(playerSelection); 

    var choice1 = playerSelection;
    let choice2 = computerPlay;

    //what happens while playing
    if (computerPlay === "rock" || computerPlay === "paper" || computerPlay === "scissors") {
        if (choice1 === choice2){
            console.log("tie");
            return alert("The result is a tie!");
        }
        else if (choice1 === "rock")
        {
            if (choice2 === "scissors")
            {
                playerScore += 1;
                console.log("Player: " + playerScore);
                return alert("You Win! Rock beats Scissors");
            }
            else if (choice2 === "paper")
            {
                computerScore += 1;
                console.log("Computer: " + computerScore);
                return alert("You Lose! Paper beats Rock");
            }
        }
        else if (choice1 === "paper")
        {
            if (choice2 === "scissors")
            {
                computerScore += 1;
                console.log("Computer: " + computerScore);
                return alert("You Lose! Scissors beats Paper");
            }
            else if (choice2 === "rock")
            {
                playerScore += 1;
                console.log("Player: " + playerScore);
                return alert("You Win! Paper beats Rock");
            }
        }
        else if (choice1 === "scissors")
        {
            if (choice2 === "rock")
            {
                computerScore += 1;
                console.log("Computer: " + computerScore);
                return alert("You Lose! Rock beats Scissors");
            }
            else if (choice2 === "paper")
            {
                playerScore += 1;
                console.log("Player: " + playerScore);
                return alert("You Win! Scissors beats Paper");
            }
        } else 
        {
            alert("Please type Rock, Paper or Scissors");
        }
    }
}

function endGame() {

playerScore = 0;
computerScore = 0;

    if (playerScore > computerScore){
            //reset both scores to 0
            return alert("You win the game!");
        } else {
            //reset both scores to 0
            return alert("You lose the game!");
        } 
    }
    

function game() {

    for (let i = 0; i =4; i++){
         playRound();
    if (playerScore === 5 || computerScore === 5 ) {
        endGame();
    }
    }
}

game();
