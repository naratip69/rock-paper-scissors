function getComputerChoice(){
    let rand = Math.floor( Math.random(0,1)*3 ) ;
    if( rand === 0) return  "Rock";
    else if( rand === 1) return "Paper";
    return "Scissors";
}

function play(computerSelection){
    let player = this.textContent.toLowerCase();
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

function game(){
    let playerScore = 0;
    let computerScore =0;
    // for(let i = 0;i<5;i++){
    //     let s = play(getComputerChoice(),prompt());
    //     console.log(s);
    //     if(s.length !== 4){
    //         if(s.slice(4,7) === "Win") playerScore++;
    //         else computerScore++;
    //     }
    // }
    if(playerScore > computerScore) console.log("Player Win!");
    else if(playerScore < computerScore) console.log("Computer Win!");
    else console.log("Tie!");
}

const buttons = document.querySelectorAll("button");
Array.from(buttons).forEach( btn => btn.addEventListener("click" , play(getComputerChoice()) ) )
