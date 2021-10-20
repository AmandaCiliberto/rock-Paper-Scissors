let textArray = [
    "rock",
    "paper",
    "scissors"
];

let playerScore = 0;
let computerScore = 0;
let playerInput; 

//function that compares choices
function playRound(playerInput){

    //computer's choice
    let computerPlay = textArray[Math.floor(Math.random()*textArray.length)];
    
    //it's a tie!
    if (playerInput === computerPlay){
        document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
        document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;

        document.getElementById("tie").innerHTML = "It's a tie!";

        console.log('Computer: ' + computerPlay + "\nPlayer: " + playerInput);
        console.log("tie");
        console.log("Computer Score: " + computerScore + "\nPlayer Score: " + playerScore);
        } else {document.getElementById("tie").innerHTML = " "; }

        //player chooses rock
        if (playerInput === 'rock')
        {
            
            if (computerPlay === "scissors")
            {
                playerScore += 1;
                document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
                document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;        
                console.log('Computer: ' + computerPlay + "\nPlayer: " + playerInput);
                console.log("Computer Score: " + computerScore + "\nPlayer Score: " + playerScore);
                
            }
            else if (computerPlay === "paper")
            {
                computerScore += 1;
                document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
                document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
        
                console.log('Computer: ' + computerPlay + "\nPlayer: " + playerInput);
                console.log("Computer Score: " + computerScore + "\nPlayer Score: " + playerScore);
            }
        }

        //player chooses paper
        else if (playerInput === 'paper')
        {
            
            if (computerPlay === "scissors")
            {
                computerScore += 1;
                document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
                document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
        
                console.log('Computer: ' + computerPlay + "\nPlayer: " + playerInput);
                console.log("Computer Score: " + computerScore + "\nPlayer Score: " + playerScore);
            }
            else if (computerPlay === "rock")
            {
                playerScore += 1;
                document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
                document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
        
                console.log('Computer: ' + computerPlay + "\nPlayer: " + playerInput);
                console.log("Computer Score: " + computerScore + "\nPlayer Score: " + playerScore);
            }
        }

        //player chooses scissors
        else if (playerInput === 'scissors')
        {
            if (computerPlay === "rock")
            {
                computerScore += 1;
                document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
                document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
        
                console.log('Computer: ' + computerPlay + "\nPlayer: " + playerInput);
                console.log("Computer Score: " + computerScore + "\nPlayer Score: " + playerScore);
            }
            else if (computerPlay === "paper")
            {
                playerScore += 1;
                document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
                document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
        
                console.log('Computer: ' + computerPlay + "\nPlayer: " + playerInput);
                console.log("Computer Score: " + computerScore + "\nPlayer Score: " + playerScore);
            }
        }
}

function endGame() {

    if (playerScore > computerScore)
    {
            document.getElementById("score").innerHTML = 'You win the game!' +  '\n<button id="restart" onclick="resetGame()">Click here to play again</button>';                      
            console.log('win');
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;

    } else if (playerScore === computerScore) {
            document.getElementById("score").innerHTML = 'It\'s a tie!' + '\n<button id="restart" onclick="resetGame()">Click here to play again</button>';
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            console.log('tie');
    } else
        {
            document.getElementById("score").innerHTML = 'You lose the game!' + '\n<button id="restart" onclick="resetGame()">Click here to play again</button>'; 
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            console.log('lose');
        }

    }

function resetGame(){
    computerScore = 0;
    playerScore = 0;
    
    document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
    document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
    document.getElementById("score").innerHTML = '';

    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;

        
    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') {
        game(playerInput);
    }
}


    

function game(playerInput) {

    if (playerScore > 4 || computerScore > 4 ) 
    {
        endGame();
    } else {
        playRound(playerInput);
    }
}