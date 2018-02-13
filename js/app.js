// Let computer chose
function computerPlay () {
  let choice = randomNum(3)
  switch (choice) {
    case 1:
      return 'Rock'
    case 2:
      return 'Paper'
    case 3:
      return 'Scissor'
  }
}

function randomNum (num) {
  return Math.floor(Math.random() * num) + 1
}

function playRound (playerSelection, computerSelection) {
  playerSelection = prompt('What is your choice?').toLowerCase()
  computerSelection = computerPlay().toLowerCase()

  function win () {
    showGameStatus('Your chose ' + playerSelection + '\nComputer chose ' + computerSelection + '\nYou Win! ' + playerSelection + ' beats ' + computerSelection + '.')
  }

  function lose () {
    showGameStatus('Your chose ' + playerSelection + '\nComputer chose ' + computerSelection + '\nYou Lose! ' + computerSelection + ' beats ' + playerSelection + '.')
  }

  function draw () {
    showGameStatus('Your chose ' + playerSelection + '\nComputer chose ' + computerSelection + '\nIt is a DRAW.')
  }

  let point
  switch (true) {
    case (playerSelection === 'rock' && computerSelection === 'paper'):
      lose()
      point = -1
      break
    case (playerSelection === 'rock' && computerSelection === 'scissor'):
      win()
      point = 1
      break
    case (playerSelection === 'paper' && computerSelection === 'rock'):
      win()
      point = 1
      break
    case (playerSelection === 'paper' && computerSelection === 'scissor'):
      lose()
      point = -1
      break
    case (playerSelection === 'scissor' && computerSelection === 'paper'):
      win()
      point = 1
      break
    case (playerSelection === 'scissor' && computerSelection === 'rock'):
      lose()
      point = -1
      break
    default:
      draw()
      point = 0
  }
  return point
}

let playerScore = 0
let compScore = 0

function game () {
  let score = playRound()
  if (score === 1) playerScore += 1
  else if (score === -1) compScore += 1
  let result = (playerScore === compScore) ? 'DRAW!' : (playerScore > compScore) ? 'You Win!' : 'You Lose!'
  document.getElementById('result').textContent = 'Score ' + playerScore + ' ' + compScore + '. ' + result
}
function showGameStatus (content) {
  let gameStatus = document.getElementById('game-status')
  let para = document.createElement('p')
  para.innerText = content
  gameStatus.appendChild(para)
}

function resetGame () {
  let gameStatus = document.getElementById('game-status')
  let paraResult = document.getElementById('result')
  gameStatus.innerHTML = ''
  paraResult.innerText = ''

}

let button = document.getElementsByClassName('button')
button[0].addEventListener('click', game)
button[1].addEventListener('click', resetGame)
