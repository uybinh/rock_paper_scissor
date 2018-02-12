// Let computer chose
function computerPlay() {
  let choice = randomNum(3);
  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissor";
  }
}

// Return a random number from 1 to "num" to for computer to chose
function randomNum(num) {
  return Math.floor(Math.random() * num) + 1;
}

// One single round of game
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt('What is your choice?').toLowerCase();
  computerSelection = computerPlay().toLowerCase();
  let point;
  switch (true) {
    case (playerSelection == 'rock' && computerSelection == 'paper'):
      lose(playerSelection, computerSelection);
      point = -1;
      break;
    case (playerSelection == 'rock' && computerSelection == 'scissor'):
      win(playerSelection, computerSelection);
      point = 1;
      break;
    case (playerSelection == 'paper' && computerSelection == 'rock'):
      win(playerSelection, computerSelection);
      point = 1;
      break;
    case (playerSelection == 'paper' && computerSelection == 'scissor'):
    lose(playerSelection, computerSelection);
      point = -1;
      break;
    case (playerSelection == 'scissor' && computerSelection == 'paper'):
      win(playerSelection, computerSelection);
      point = 1;
      break;
    case (playerSelection == 'scissor' && computerSelection == 'rock'):
      lose(playerSelection, computerSelection);
      point = -1;
      break;
    default:
      draw(playerSelection, computerSelection);
      point = 0;
  }
  return point;
}

// The main function to call the Game
function game() {
  let playerScore = 0;
  let compScore = 0;
  let score;
  for (let i = 1; i <= 3; i++) {
    score = playRound();
    if (score === 1) playerScore += 1
    else if (score == -1) compScore += 1;
  }
  let result = (playerScore === compScore) ? 'DRAW!' : (playerScore > compScore) ? 'You Win!' : 'You Lose!';
  return "score " + playerScore + " " + compScore + ". " + result;
}

// Use three function lose() win() and draw() to reduce the text 'DRY'
function lose(playerSelection, computerSelection) {
  console.log("Your chose " + playerSelection + "\nComputer chose " + computerSelection + "\nYou Lose! " + computerSelection + " beats " + playerSelection + ".");
}

function win(playerSelection, computerSelection) {
  console.log("Your chose " + playerSelection + "\nComputer chose " + computerSelection + "\nYou Win! " + playerSelection + " beats " + computerSelection + ".");
}

function draw(playerSelection, computerSelection) {
  console.log("Your chose " + playerSelection + "\nComputer chose " + computerSelection + "\nIt is a DRAW.");
}