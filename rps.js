const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const userChoiceDisplay = document.getElementById('player-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
let playerChoice = ""
let computerChoice= ""
let result= ""

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.id
  randomPick()
  showResult()
}))

function randomPick() {
  const randomNumber = Math.floor(Math.random() * 3) + 1
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'paper'
  }
  if (randomNumber === 3) {
    computerChoice = 'scissors'
  }
}

function showResult() {
  if (playerChoice === computerChoice) {
    result = `Your opponent chose ${computerChoice}, so err you tied 😹`
  }
  if (playerChoice === "rock" && computerChoice === "paper") {
    result = `Your opponent chose ${computerChoice}, you lose 🙀`
  }
  if (playerChoice === "rock" && computerChoice === "scissors") {
    result = `Your opponent chose ${computerChoice}, you sure showed that silly cat 😺`
  }
  if (playerChoice === "paper" && computerChoice === "scissors") {
    result = `Your opponent chose ${computerChoice}, you lose 🙀`
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    result = `Your opponent chose ${computerChoice}, you sure showed that silly cat 😺`
  }
  if (playerChoice === "scissors" && computerChoice === "rock") {
    result = `Your opponent chose ${computerChoice}, you lose 🙀`
  }
  if (playerChoice === "scissors" && computerChoice === "paper") {
    result = `Your opponent chose ${computerChoice}, you sure showed that silly cat 😺`
  }
  resultDisplay.innerHTML = result
}