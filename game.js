console.log("Rock paper scissors game")

let a = "b"

function computerPlay(){
  console.log("rock");
  console.log(`{a}`);
  let a = Math.ceil(Math.random() * 3);
  console.log(a)
  if (a === 1){
    console.log("Rock");
  }
  else if (a === 2){
    console.log("Paper");
  }
  else if (a === 3){
    console.log("Scissors");
  }
}

function gameRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection){
    console.log("Tie!");
  }
  else 
}

computerPlay();
