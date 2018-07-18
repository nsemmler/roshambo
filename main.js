const argv = require('yargs').argv

if (!argv.rps) {
  displayRules()
} else {
  const oppositionRPS = randomlyGenerateOppositionRPS()
  const userRPS = argv.rps

  if (userRPS === 'r') {
    renderResponse(userRPS, oppositionRPS)
  } else if (userRPS === 'p') {
    renderResponse(userRPS, oppositionRPS)
  } else if (userRPS === 's') {
    renderResponse(userRPS, oppositionRPS)
  } else {
    displayErrorMsg()
  }
}

function displayRules () {
  console.log('Welcome to Rock, Paper, Scissors!')
  console.log(' ')
  console.log(' ')
  console.log('To play, enter one of the following as the argument "rps" after the node main.js command:')
  console.log('Rock (r)')
  console.log('Paper (p)')
  console.log('Scissors (s)')
  console.log(' ')
  console.log('Example:')
  console.log('# node main.js --rps=r')
}

function displayErrorMsg () {
  console.log('User can only submit r, p, s as rps values')
}

function randomlyGenerateOppositionRPS () {
  const randIndex = Math.floor(Math.random()*3)
  return ['r', 'p', 's'][randIndex]
}

function renderResponse (userRPS, oppositionRPS) {
  if (oppositionRPS === 'r' && userRPS === 's') { console.log('Computer wins!') }
  else if (oppositionRPS === 'r' && userRPS === 'p') { console.log('User wins!') }
  else if (oppositionRPS === 'p' && userRPS === 'r') { console.log('Computer wins!') }
  else if (oppositionRPS === 'p' && userRPS === 's') { console.log('User wins!') }
  else if (oppositionRPS === 's' && userRPS === 'p') { console.log('Computer wins!') }
  else if (oppositionRPS === 's' && userRPS === 'r') { console.log('User wins!') }
  else { console.log('Tie! Play again?') }
}
