function getComputerChoice() {
    let num =  Math.floor(3 * Math.random());
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}