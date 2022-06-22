
const rockPaperScissors = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
	let hand = Math.floor(Math.random() * 3)
	return rockPaperScissors[hand];
};

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {	
	let result = "";
	if (playerSelection === computerSelection) {
		let result = "Tie...";
		console.log(result);
	} else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
		computerScore++;
		let result = "You lose...Paper covers Rock.";
		console.log(result);
	} else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
		playerScore++;
		let result = "You win! Rock beats Scissors.";
		console.log(result);
	} else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
		playerScore++;
		let result = "You win! Paper covers Rock";
		console.log(result);
	} else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
		computerScore++;
		let result = "You lose...Scissors beats Paper";
		console.log(result);
	} else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
		computerScore++;
		let result = "You lose...Rock beats Paper.";
		console.log(result);
	} else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
		playerScore++;
		let result = "You win...Scissors beats Paper";
		console.log(result);
	}
	let round = result + "The score is " + playerScore + " to " + computerScore;
	console.log(round);
	return round
};

function game() {
	while (playerScore !== 5 || computerScore !== 5) {
		let computerSelection = computerPlay();
		let playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
		playRound(playerSelection, computerSelection);
		if (playerScore === 5) {
			return "You win!"
		} else if (computerScore === 5) {
			return "You lose..."
		}
	}
};
