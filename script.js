console.log("Hello, World!");
function getComputerChoice () {
    let cChoice = Math.floor((Math.random() * 3));
    console.log(cChoice);
    if (cChoice === 0) {
        cChoice =  "rock"
    } else if (cChoice === 1) {
        cChoice = "paper"
    } else {
        cChoice = "scissors"
    };
    console.log(cChoice)
}
getComputerChoice()