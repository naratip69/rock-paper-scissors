function getComputerChoice(){
    let rand = Math.floor( Math.random(0,3) ) ;
    if( rand === 0) return  "Rock";
    else if( rand === 1) return "Paper";
    return "Scissors";
}
