let variants = ["rock", "paper", "scissors"];
let computerChoice = "";
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;
let gameUntilScore = 5;

const container = document.querySelector(".container");
const btnRock = document.querySelector("#rock");
btnRock.textContent = "Rock";
const btnPaper = document.querySelector("#paper");
btnPaper.textContent = "Paper";
const btnScissors = document.querySelector("#scissors");
btnScissors.textContent = "Scissors";
const btnPanel = document.querySelector(".btnPanel");

const resultsCon = document.createElement("div");
resultsCon.classList.add("resultsCon");
const resultsHeader = document.createElement("h2");
resultsHeader.textContent = "Score";
//player
const resultsPlayersCon = document.createElement("div");
resultsPlayersCon.classList.add("resultsPlayersCon");
const resultsPlayerCard = document.createElement("div");
resultsPlayerCard.classList.add("resultsCard");
const resultsPlayerHeader = document.createElement("h4");
resultsPlayerHeader.textContent = "Player";
const resultsPlayerScore = document.createElement("h1");
resultsPlayerScore.textContent = `${humanScore}`;
resultsPlayerCard.append(resultsPlayerHeader, resultsPlayerScore);
resultsPlayersCon.append(resultsPlayerCard);
const resultsPlayerChoosed = document.createElement("h4");
resultsPlayerChoosed.textContent = "---";
resultsPlayerCard.append(resultsPlayerChoosed);
// comp
const resultsComputerCard = document.createElement("div");
resultsComputerCard.classList.add("resultsCard");
const resultsComputerHeader = document.createElement("h4");
resultsComputerHeader.textContent = "Computer";
const resultsComputerScore = document.createElement("h1");
resultsComputerScore.textContent = `${computerScore}`;
resultsComputerCard.append(resultsComputerHeader, resultsComputerScore);
resultsPlayersCon.append(resultsComputerCard);
const resultsComputerChoosed = document.createElement("h4");
resultsComputerChoosed.textContent = "---";
resultsComputerCard.append(resultsComputerChoosed);

resultsCon.append(resultsHeader, resultsPlayersCon);

btnPanel.before(resultsCon);

container.addEventListener("click", (e) => {
  const target = e.target;
  let selected = "";
  switch (target.id) {
    case "rock":
      selected = "rock";
      playRound(selected);
      break;
    case "paper":
      selected = "paper";
      playRound(selected);
      break;
    case "scissors":
      selected = "scissors";
      playRound(selected);
      break;
  }
});

function getComputerChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function printRoundResults() {
  resultsPlayerScore.textContent = humanScore;
  resultsComputerScore.textContent = computerScore;
  resultsPlayerChoosed.textContent = humanChoice;
  resultsComputerChoosed.textContent = computerChoice;
}
function checkForWinner() {
  if (humanScore === gameUntilScore || computerScore === gameUntilScore) {
    const winnerCon = document.createElement("h2");
    winnerCon.id = "winnerCon";
    resultsCon.append(winnerCon);
    const btnNewGame = document.createElement("div");
    btnNewGame.classList.add("answerBtn");
    btnPanel.replaceChildren(btnNewGame);
    btnNewGame.textContent = "New Game";
    btnNewGame.addEventListener("click", () => {
      startNewGame();
    });
    winnerCon.textContent = `${humanScore > computerScore ? "Player" : "Computer"} is the winner!`;
  }
}
function startNewGame() {
  const winnerCon = document.querySelector("#winnerCon");
  winnerCon.remove();
  const btnNewGame = document.querySelector(".answerBtn");
  btnNewGame.replaceWith(btnRock, btnPaper, btnScissors);
  humanScore = 0;
  computerScore = 0;
  resultsPlayerChoosed.textContent = "---";
  resultsComputerChoosed.textContent = "---";
}
function playRound(choice) {
  humanChoice = choice;
  computerChoice = getComputerChoice(variants);
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
  checkForWinner();
}
