function getComputerChoice(){
    let rand = Math.floor( Math.random(0,1)*3 ) ;
    if( rand === 0) return  "Rock";
    else if( rand === 1) return "Paper";
    return "Scissors";
}

const text = document.querySelector("#text");
const out = document.createElement("div");
const score = document.createElement("div");
let playerScore = 0;
let computerScore =0;
score.textContent = `Player:${playerScore}  Computer:${computerScore}`;
text.appendChild(score);
text.appendChild(out);


function play(){
    let player = this.textContent;
    let computerSelection = getComputerChoice();
    switch(player){
        case "Rock":
            if(computerSelection === "Rock"){out.textContent = "Tie!";}
            else if(computerSelection === "Paper"){out.textContent = "You Lose! Paper beats Rock";computerScore++;score.textContent = `Player:${playerScore}  Computer:${computerScore}`;}
            else {out.textContent = "You Win! Rock beats Scissors";playerScore++;score.textContent = `Player:${playerScore}  Computer:${computerScore}`;}
            break;
        case "Paper":
            if(computerSelection === "Rock") {out.textContent = "You Win! Paper beats Rock";playerScore++;score.textContent = `Player:${playerScore}  Computer:${computerScore}`;}
            else if(computerSelection === "Paper"){ out.textContent = "Tie!";}
            else{ out.textContent = "You Lose! Scissors beats Paper";computerScore++;score.textContent = `Player:${playerScore}  Computer:${computerScore}`;}
            break;
        case "Scissors":
            if(computerSelection === "Rock") {out.textContent = "You Lose! Rock beats Scissors";computerScore++;score.textContent = `Player:${playerScore}  Computer:${computerScore}`;}
            else if(computerSelection === "Paper") {out.textContent = "You Win! Scissors beats Paper";playerScore++;score.textContent = `Player:${playerScore}  Computer:${computerScore}`;}
            else {out.textContent = "Tie!"}
            break;
    }
    if( playerScore === 5 || computerScore===5){
        if(playerScore===5) out.textContent += "\nPlayer Win!";
        else out.textContent += "\nComputer Win!";
        playerScore = 0;
        computerScore = 0;
        score.textContent = `Player:${playerScore}  Computer:${computerScore}`;
    }
}

const buttons = document.querySelectorAll(".gameBtn");
const playBtn = document.querySelector("#playBtn");
Array.from(buttons).forEach( btn => btn.addEventListener("click" , play ) );
