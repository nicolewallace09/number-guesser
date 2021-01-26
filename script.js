let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

// determine which guess is closest to the target 
const compareGuesses = (user, computer, secretTarget) => {
    const humanDifference = Math.abs(secretTarget - user);
    const computerDifference = Math.abs(secretTarget - computer); 
    return humanDifference <= computerDifference
}

// You probably calculated the distance from the computer guess to the 
// target and from the human guess to the target. Move this into a separate 
// getAbsoluteDistance() function that takes two numbers and returns the distance, 
// and then use that inside your compareGuesses() function.

// increase winner's score after each round 
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

// increase the round number 
const advanceRound = () => {
    currentRoundNumber++; 
}
