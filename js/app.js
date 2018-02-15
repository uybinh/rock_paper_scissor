
function createButtons () {
  const body = document.querySelector('body')
  const gameInstruction = document.createElement('p')
  const buttonNames = ['rock', 'paper', 'scissor', 'reset']
  const buttonRock = document.createElement('BUTTON')
  const buttonPaper = document.createElement('BUTTON')
  const buttonScissor = document.createElement('BUTTON')
  const buttonReset = document.createElement('BUTTON')
  const buttonsArray = [buttonRock, buttonPaper, buttonScissor, buttonReset]
  gameInstruction.id = 'instruction'
  gameInstruction.textContent = 'Chose rock, paper or scissor:'
  body.appendChild(gameInstruction)
  for (let i = 0; i < buttonNames.length; i++) {
    buttonsArray[i].setAttribute('name', buttonNames[i])
    buttonsArray[i].setAttribute('type', 'submit')
    if (buttonNames[i] !== 'reset') buttonsArray[i].classList.add('choice')
    buttonsArray[i].textContent = buttonNames[i].toUpperCase()
    body.appendChild(buttonsArray[i])
  }
  buttonsArray.forEach(function (button) {
    if (button.name !== 'reset') {
      button.addEventListener('click', function (e) {
        game(e.target.name)
      })
    }
  })
  buttonReset.addEventListener('click', resetGame)
  body.removeChild(document.querySelector('button[name="start"'))
}
function removeButtons () {
  let buttons = document.getElementsByTagName('button')
  while (buttons.length > 0) buttons[0].parentNode.removeChild(buttons[0])
}

function gameStart () {
  const body = document.querySelector('body')
  const startButton = document.createElement('button')
  startButton.setAttribute('name', 'start')
  startButton.setAttribute('type', 'submit')
  startButton.addEventListener('click', createButtons)
  startButton.textContent = 'Start Game'
  body.appendChild(startButton)
  console.log(document.getElementsByTagName('body'))
}

function playRound (playerSelection) {
  let computerSelection = computerPlay()
  const winText = 'You chose ' + playerSelection + '\nComputer chose ' + computerSelection + '\nYou Win! ' + playerSelection + ' beats ' + computerSelection + '.'
  const loseText = 'You chose ' + playerSelection + '\nComputer chose ' + computerSelection + '\nYou Lose! ' + computerSelection + ' beats ' + playerSelection + '.'
  const drawText = 'You chose ' + playerSelection + '\nComputer chose ' + computerSelection + '\nIt is a DRAW.'
  let point

  function computerPlay () {
    let choice = Math.floor(Math.random() * 3) + 1
    if (choice === 1) return 'rock'
    else if (choice === 2) return 'paper'
    else return 'scissor'
  }
  function showGameStatus (content) {
    const body = document.querySelector('body')
    let gameStatus = document.createElement('div')
    const para = document.createElement('p')
    gameStatus.id = 'game-status'
    para.textContent = content
    if (!document.getElementById('game-status')) {
      body.appendChild(gameStatus)
      gameStatus.appendChild(para)
    } else {
      gameStatus = document.getElementById('game-status')
      gameStatus.removeChild(gameStatus.firstChild)
      gameStatus.appendChild(para)
    }
  }

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    showGameStatus(loseText)
    point = -1
  } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
    showGameStatus(winText)
    point = 1
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    showGameStatus(winText)
    point = 1
  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    showGameStatus(loseText)
    point = -1
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    showGameStatus(winText)
    point = 1
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    showGameStatus(loseText)
    point = -1
  } else {
    showGameStatus(drawText)
    point = 0
  }
  return point
}

const objScore = {
  playerScore: 0,
  compScore: 0
}

function game (select, playerScore = 0, compScore = 0) {
  let tempScore = playRound(select)
  if (tempScore === 1) playerScore += 1
  else if (tempScore === -1) compScore += 1
  function showCurrentState () {
    const body = document.querySelector('body')
    const resultH4 = document.createElement('h4')
    resultH4.id = 'result'
    resultH4.textContent = 'Current score: Player ' + objScore.playerScore + ' VS Computer' + objScore.compScore + '.'
    if (!document.querySelector('#result')) {
      body.appendChild(resultH4)
    }
    document.querySelector('#result').textContent = 'Current score: Player ' + objScore.playerScore + ' VS Computer ' + objScore.compScore + '.'
  }
  objScore.playerScore += playerScore
  objScore.compScore += compScore
  showCurrentState()
}

function resetGame () {
  const body = document.querySelector('body')
  const status = document.querySelector('#game-status')
  const result = document.querySelector('#result')
  const gameinstruction = document.querySelector('#instruction')
  if (status) body.removeChild(status)
  if (result) body.removeChild(result)
  body.removeChild(gameinstruction)
  objScore.playerScore = 0
  objScore.compScore = 0
  removeButtons()
  gameStart()
}

gameStart()
