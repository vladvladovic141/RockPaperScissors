let variants = ["rock", "paper", "scissors"];
let computerChoice = "";
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

playGame();
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

function getComputerChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function getHumanChoice() {
  return prompt("Make your choice");
}
function printRoundResults() {
  console.log(
    `Player: ${humanChoice}, Computer: ${computerChoice} | ${humanScore} : ${computerScore}`,
  );
}
function playRound() {
  computerChoice = getComputerChoice(variants);
  humanChoice = getHumanChoice();
  humanChoice = humanChoice.toLowerCase();
  if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "paper" && humanChoice === "scissors")
  ) {
    humanScore += 1;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore += 1;
  }
  printRoundResults();
}
