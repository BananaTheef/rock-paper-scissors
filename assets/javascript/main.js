function resetScore() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  ties = 0;
  plScore.textContent = "Player: 0";
  compScore.textContent = "Comp: 0";
  roundCount.textContent = "Round: 0";
  tieCount.textContent = "Ties: 0";
}

function checkWinner() {
  if (playerScore === 5) {
    alert('You won! Good Game.');
    resetScore();
  } else if (computerScore === 5) {
    alert('You lost! Good Game.');
    resetScore();
  }
}

function computerPlay() {
  min = Math.ceil(1);
  max = Math.floor(3);
  return result = Math.floor(Math.random() * (max - min + 1) + min);
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    tieCount.textContent = "Ties: " + ++ties;
  } else {
    if (computerSelection === 1 && playerSelection === 2) {
      plScore.textContent = "Player: " + ++playerScore;
    } else if (computerSelection === 1 && playerSelection === 3) {
      compScore.textContent = "Comp: " + ++computerScore;
    } else if (computerSelection === 2 && playerSelection === 1) {
      compScore.textContent = "Comp: " + ++computerScore;
    } else if (computerSelection === 2 && playerSelection === 3) {
      plScore.textContent = "Player: " + ++playerScore;
    } else if (computerSelection === 3 && playerSelection === 1) {
      plScore.textContent = "Player: " + ++playerScore;
    } else {
      compScore.textContent = "Comp: " + ++computerScore;
    }
  }
  roundCount.textContent = "Round: " + ++round;
  playerScore === 5 || computerScore === 5 ? checkWinner() : false;
}

let playerScore = 0;
let computerScore = 0;
let computerSelection = 0;
let round = 0;
let ties = 0;

const plScore = document.querySelector('#playerscore');
const compScore = document.querySelector('#computerscore');
const roundCount =document.querySelector('#round-count');
const tieCount = document.querySelector('#tie-count');
const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => playRound(1, cp = computerPlay()));
const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => playRound(2, cp = computerPlay()));
const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => playRound(3, cp = computerPlay()));
const newGameBtn = document.querySelector('#new-game');
newGameBtn.addEventListener('click', resetScore);
