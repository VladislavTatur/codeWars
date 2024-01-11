// DESCRIPTION:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.




// SOLUTION:
const rps = (p1, p2) => {
  if (
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  }

  if (p1 === p2) {
    return "Draw!";
  }
  return `Player 2 won!`;
};

console.log(rps("scissors", "scissors"));
