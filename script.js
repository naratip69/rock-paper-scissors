function getComputerChoice(){
    let rand = Math.floor( Math.random(0,1)*3 ) ;
    if( rand === 0) return  "Rock";
    else if( rand === 1) return "Paper";
    return "Scissors";
}

const text = document.querySelector("#text");
const out = document.createElement("div");

function play(){
    console.log(this);
    let player = this.textContent;
    let computerSelection = getComputerChoice();
    switch(player){
        case "Rock":
            if(computerSelection === "Rock") out.textContent = "Tie!";
            else if(computerSelection === "Paper") out.textContent = "You Lose! Paper beats Rock";
            else out.textContent = "You Win! Rock beats Scissors";
            break;
        case "Paper":
            if(computerSelection === "Rock") out.textContent = "You Win! Paper beats Rock";
            else if(computerSelection === "Paper") out.textContent = "Tie!";
            else out.textContent = "You Lose! Scissors beats Paper"
            break;
        case "Scissors":
            if(computerSelection === "Rock") out.textContent = "You Lose! Rock beats Scissors";
            else if(computerSelection === "Paper") out.textContent = "You Win! Scissors beats Paper";
            else out.textContent = "Tie!"
            break;
    }
}

function game(){
    let playerScore = 0;
    let computerScore =0;
    text.appendChild(out);
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

const buttons = document.querySelectorAll(".gameBtn");
const playBtn = document.querySelector("#playBtn");
Array.from(buttons).forEach( btn => btn.addEventListener("click" , play ) );
playBtn.addEventListener("click",game);
