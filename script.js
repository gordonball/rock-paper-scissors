"use strict";

const ROCK_PAPER_SCISSORS = ['ROCK', 'PAPER', 'SCISSORS'];

const resultArea = document.getElementById("result-area")
const playerChoiceArea = document.getElementById("player-selection");
const computerChoiceArea = document.getElementById("computer-selection");
const roundResult = document.getElementById("round-result");

let isWinner = false;

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
	let hand = Math.floor(Math.random() * 3)
	return ROCK_PAPER_SCISSORS[hand];
}

function playRound(playerSelection, computerSelection) {
	let result = "";

	if (playerSelection === computerSelection) {
		let result = "Tie...";
	} else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
		computerScore++;
		let result = "You lose...Paper covers Rock.";
	} else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
		playerScore++;
		let result = "You win! Rock beats Scissors.";
	} else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
		playerScore++;
		let result = "You win! Paper covers Rock.";
	} else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
		computerScore++;
		let result = "You lose...Scissors beats Paper.";
	} else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
		computerScore++;
		let result = "You lose...Rock beats Paper.";
	} else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
		playerScore++;
		let result = "You win...Scissors beats Paper.";
	}

	let round = `${result} The score is ${playerScore} to ${computerScore}`;

	let winner = checkWinner(playerScore, computerScore)
	if (winner) {
		roundResult.innerText = winner;
		isWinner = true;
		//TODO: append restart button
		return winner
	}

	playerChoiceArea.innerText = `Player: ${playerSelection}`;
	computerChoiceArea.innerText = `Computer: ${computerSelection}`;
	roundResult.innerText = round;

	return round;
}

const rock = document.getElementById("rock");
rock.addEventListener("click", (evt) => {
	if (!isWinner) {
		playRound(evt.target.value, computerPlay());
	}
});

const paper = document.getElementById("paper");
paper.addEventListener("click", (evt) => {
	if (!isWinner) {
		playRound(evt.target.value, computerPlay());
	}
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", (evt) => {
	if (!isWinner) {
		playRound(evt.target.value, computerPlay());
	}
});



function checkWinner(playerScore, computerScore) {
	if (playerScore === 5) {
		return `The score is  ${playerScore} to ${computerScore} - You win!`;
	} else if (computerScore === 5) {
		return `The score is  ${playerScore} to ${computerScore} - You lose...`;
	}
	return false
}

//TODO: add start button, populate game board?
// game()