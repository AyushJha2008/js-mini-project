let userScore = 0;
let botScore = 0;
const reset = document.querySelector(".reset")
//rock-paper-scissor
const choice = document.querySelectorAll(".choice");
const userPoint = document.querySelector("#user-score");
const botPoint = document.querySelector("#bot-score");

const genBotChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randomOpt = Math.floor(Math.random()*3);
    return options[randomOpt];
};
const drawGame = () =>{
   // console.log("game was DRAW!");
    msg.innerText = "-- DRAW --"
    msg.style.color = "black"
}

const showWinner = (userwin, userChoice, botChoice) =>{
    if(userwin){
        userScore++;
        userPoint.innerText = userScore;
       // console.log("you won!!");
        msg.innerText = `YOU WON --${userChoice} beats ${botChoice}--`;
        msg.style.color = "green"
    } else{
       // console.log("you lost!");
       botScore++
        botPoint.innerText = botScore
        msg.innerText = `YOU LOST --${botChoice} beats ${userChoice}--`;
        msg.style.color = "red"
    }
}

const playGame = (userChoice) =>{
    //console.log("user choice = ", userChoice);
    //bot choice
    const botChoice = genBotChoice();
    //console.log("bot choice = ",botChoice);

    if(userChoice == botChoice){
        //draw
        console.log(drawGame());
    } else{
        let userwin = true;
        if(userChoice == "rock"){
            // bot = paper/scisor
            userwin = botChoice == "paper"? false : true;
        } else if(userChoice == "paper"){
            // bot = scissor/stone
            userwin = botChoice == "rock"? true : false; 
        } else {
            //bot = stone/paper 
            userwin = botChoice == "rock"? false:true
        }
        showWinner(userwin, userChoice, botChoice);
    }
}

choice.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
});

const resetScore = () =>{
    userPoint.innerText = 0;
    botPoint.innerText = 0;
    msg.innerText = ""
}

reset.addEventListener("click", resetScore);