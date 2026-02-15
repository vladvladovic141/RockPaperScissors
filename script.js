let variants = ["rock", "paper", "scissors"];
let computerChoice = getComputerChoice(variants);
let humanChoice = getHumanChoice();
console.log(computerChoice+humanChoice);

function getComputerChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function getHumanChoice(){
  return prompt("Make your choice");
}