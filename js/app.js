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

// Return a random number from 1 to "num"
function randomNum(num) {
  return Math.floor(Math.random() * num) + 1;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt('What is your choice?').toLowerCase();
  computerSelection = computerPlay().toLowerCase();
  let point;
  switch (true) {
    case (playerSelection == 'rock' && computerSelection == 'paper'):
      console.log("Your chose " + playerSelection + "\nComputer chose " + computerSelection + "\nYou Lose! Paper beats Rock.");
      point = -1;
      break;
    case (playerSelection == 'rock' && computerSelection == 'scissor'):
      console.log("Your chose " + playerSelection + "\nComputer chose " + computerSelection + "\nYou Win! Rock beats Scissor.");
      point = 1;
      break;
    case (playerSelection == 'paper' && computerSelection == 'rock'):
      console.log("Your chose " + playerSelection + "\nComputer chose " + computerSelection + "\nYou Win! Paper beats Rock.");
      point = 1;
      break;
    case (playerSelection == 'paper' && computerSelection == 'scissor'):
      console.log("Your chose " + playerSelection + "\nComputer chose " + computerSelection + "\nYou Lose! Scissor beats Paper.");
      point = -1;
      break;
    case (playerSelection == 'scissor' && computerSelection == 'paper'):
      console.log("Your chose " + playerSelection + "\nComputer chose " + computerSelection + "\nYou Win! Scissor beats Paper.");
      point = 1;
      break;
    case (playerSelection == 'scissor' && computerSelection == 'rock'):
      console.log("Your chose " + playerSelection + "\nComputer chose " + computerSelection + "\nYou Lose! Rock beats Scissor.");
      point = -1;
      break;
    default:
      console.log("Your chose " + playerSelection + "\nComputer chose " + computerSelection + "\nIt is a DRAW.");
      point = 0;
  }
  return point;
}

function game() {
  let yourScore = 0;
  let compScore = 0;
  let score;
  for (let i = 1; i <= 3; i++) {
    score = playRound();
    if (score === 1) yourScore += 1
    else if (score == -1) compScore += 1;
  }
  let result = (yourScore === compScore) ? 'DRAW!' : (yourScore > compScore) ? 'You Win!' : 'You Lose!';
  return "score " + yourScore + " " + compScore + ". " + result;
}
