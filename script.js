function getComputerChoice(){
    let rand = Math.floor( Math.random(0,3) ) ;
    if( rand === 0) return  "Rock";
    else if( rand === 1) return "Paper";
    return "Scissors";
}

function play(computerSelection,playerSelection){
    let player = playerSelection.toLowerCase();
    switch(player){
        case "rock":
            if(computerSelection === "Rock") return "Tie!";
            else if(computerSelection === "Paper") return "You Lose! Paper beats Rock";
            return "You Win! Rock beats Scissors"
            break;
        case "paper":
            if(computerSelection === "Rock") return "You Win! Paper beats Rock";
            else if(computerSelection === "Paper") return "Tie!";
            return "You Lose! Scissors beats Paper"
            break;
        case "scissors":
            if(computerSelection === "Rock") return "You Lose! Rock beats Scissors";
            else if(computerSelection === "Paper") return "You Win! Scissors beats Paper";
            return "Tie!"
            break;
    }
}
