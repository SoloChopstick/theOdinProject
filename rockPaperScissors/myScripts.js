//Computer plays rock, paper or scissors randomly
let userScore = 0;
let computerScore = 0;
let round = 0;

function computerPlay() {
  let random = getRandomInt(0,3);
  if (random == 0) return "Rock";
  else if (random == 1) return "Paper";
  else return "Scissors";
}

//helper random 0-1-2 (Rock, paper, Scissors)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//helper to clean code
function win(playerSelection, computerSelection) {
  userScore++;
  let roundDOM = document.getElementById("currentRound");
  roundDOM.setAttribute('style', 'white-space: pre;');
  roundDOM.textContent = `Current round : ${round} \r\n You win! ${playerSelection} beats ${computerSelection}`;
  let score = document.getElementById("currentUserScore");
  score.textContent =  `Your score : ${userScore}`
  if(userScore === 5) {
    alert("YOU WIN!");
  }
}

function lose(playerSelection, computerSelection) {
  computerScore++;
  let roundDOM = document.getElementById("currentRound");
  roundDOM.setAttribute('style', 'white-space: pre;');
  roundDOM.textContent = `Current round : ${round} \r\n You lose! ${computerSelection} beats ${playerSelection}`;
  let score = document.getElementById("currentComputerScore");
  score.textContent = `Computer score : ${computerScore}`;
  if (computerScore === 5) {
    alert("YOU LOSE!");
  }
}

function draw(playerSelection, computerSelection) {
  let roundDOM = document.getElementById("currentRound");
  roundDOM.setAttribute('style', 'white-space: pre;');
  roundDOM.textContent = `Current round : ${round} \r\n Draw! ${playerSelection} is equal to ${computerSelection}`
}

function playRound(playerSelection) {
  if(userScore === 5 || computerScore === 5) {
    alert("Game over!");
    return;
  }
  round++;
  //make it into standard format, only first letter capitalize
  let computerSelection = computerPlay();
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  //draws
  if (playerSelection == computerSelection) return draw(playerSelection, computerSelection);
  //all others
  else if (playerSelection == "Rock" && computerSelection == "Paper") {
    return lose(playerSelection, computerSelection);
  }
  else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return win(playerSelection, computerSelection);
  }
  else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return lose(playerSelection, computerSelection);
  }
  else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return win(playerSelection, computerSelection);
  }
  else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return lose(playerSelection, computerSelection);
  }
  else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return win(playerSelection, computerSelection);
  }
}

window.onload = function(){
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");
}

rock.addEventListener('click', function () {
  playRound("rock");
});
paper.addEventListener('click', function () {
  playRound("paper");
});
scissors.addEventListener('click', function () {
  playRound("scissors")
});
