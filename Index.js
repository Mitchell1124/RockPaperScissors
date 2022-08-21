//write a function called getComputerChoice that will randomly
//return either rock, paper, or scissors.

//write a function that plays one round of the game, this should take 
//two arguments, player selection and computer selection

//write a new function called game(). call the playRound function inside of this 
//to play 5 rounds that keeps score and returns a winner or loser at the end 

//-------------------------------------------------------------------------------------------------------

//gets input from player
let getInput = window.prompt("Lets play rock, papper, scissors! Enter your Choice!")

//converts the user inputer to lowercase 
let playerChoice = getInput.toLocaleLowerCase()

//initilises player score
let score = 0

//initilises computer score
let computerScore = 0 


function getComputerChoice() {
    //array of items for computer to select
    const options = ["rock", "paper", "scissors"];
    //computer randomly selects a value from options
    let computerChoice = options[Math.floor(Math.random() * options.length)]

    return  computerChoice
}


//plays a round of the game
 function playRound(playerChoice, computerChoice) {

    if(playerChoice === computerChoice) {
        console.log("The choises were the same! Play again!")
    } else if(playerChoice === "rock" && computerChoice === "scissors") {
        console.log('You won!')
        score += 1
    } else if(playerChoice === "paper" && computerChoice === "rock") {
        console.log('You won!')
        score += 1
    } else if(playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You won!')
        score += 1
    } else {
        console.log("The computer won! Try again!")
        computerScore += 1
    }

 }



 for(i = 0; i < 5; i++) {
    playRound(playerChoice, getComputerChoice())
    

    if(score > computerScore) {
        console.log("You Won! With a score of " + score + " to " + computerScore)
    } else {
        console.log("You Lost! With a score of " + computerScore+ " to " + score)
    }

 }


