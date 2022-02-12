console.log("Rock paper scissors game")


function computerPlay() {
  let a = Math.ceil(Math.random() * 3);
  console.log(a)
  if (a === 1) {
    return "Rock";
  }
  else if (a === 2) {
    return "Paper";
  }
  else if (a === 3) {
    return "Scissors";
  }
}

function gameRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`Tie! ${playerSelection}`);
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log("Paper beats rock, Computer wins");
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log("Rock beats scissors, Player wins");
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    console.log("Rock beats scissors, Computer wins");
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    console.log("Scissors beats paper, Player wins");
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log("Paper beats rock, Player wins");
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    console.log("Scissors beats paper, Computer wins");
  }

}

player = prompt("enter Rock, Paper or scissors");
computer = computerPlay();
console.log(`Player is ${player}\nComputer is ${computer}`);
gameRound(player, computer);
