
const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
	let hand = Math.floor(Math.random() * rockPaperScissors.length);
	return rockPaperScissors[hand];
};

const playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return "Tie! Play another round...";
	} else if (playerSelection == rockPaperScissors[0] & computerSelection == rockPaperScissors[1]) {
		return "You lose! Paper covers Rock.";
	} else if (playerSelection == rockPaperScissors[0] & computerSelection == rockPaperScissors[2]) {
		return "You win! Rock beats Scissors.";
	} else if (playerSelection == rockPaperScissors[1] & computerSelection == rockPaperScissors[0]) {
		return "You win! Paper covers Rock.";
	} else if (playerSelection == rockPaperScissors[1] & computerSelection == rockPaperScissors[2]) {
		return "You lose! Scissors cut Paper.";
	} else if (playerSelection == rockPaperScissors[2] & computerSelection == rockPaperScissors[0]) {
		return "You lose! Rock beats Paper.";
	} else if (playerSelection == rockPaperScissors[2] & computerSelection == rockPaperScissors[1]) {
		return "You win! Scissors cut Paper.";
	}
};

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

