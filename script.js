function getComputerChoice () {
    let choice = Math.floor((Math.random() * 3));
    if (choice === 0) {
        return  "rock"
    } else if (choice === 1) {
        return "paper"
    } else {
        return "scissors"
    };
    
};
console.log(getComputerChoice());
function getHumanChoice () {
    let choice = window.prompt("Please enter either rock, paper or scissors");
    return choice;
}
console.log(getHumanChoice())