let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new-game");
let newMsg = document.querySelector(".win-msg");
let msg = document.querySelector(".msg");

//player1 & player2
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("box was clicked");
        // box.innerText = "x";
        if(turnO){
            box.innerText = 'O';
            box.style.color = "red"
            document.body.style.background = "mediumaquamarine";
            reset.style.background = "rgb(230, 94, 94)"
            turnO = false
        } else{
            box.innerText = 'X'
            box.style.color = "blue";
            document.body.style.background = "rgb(230, 94, 94)";
            reset.style.background = "mediumaquamarine"
            turnO = true;
        }
        box.disabled = true;
        checkWin()
    });
});

const showWinner = (winner) =>{
    msg.innerText = `Congratulations 🥳🥳, winner is ${winner}`
    newMsg.classList.remove("hide");
}
const disableBtn = ()=> {
    for(let box of boxes)
        box.disabled = true;
}
const enableBtn = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const checkWin = () =>{
    for(pattern of winPatterns){
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("winner", pos1val);
                disableBtn();
                showWinner(pos1val);
            }
        }
    }
};

const resetGame = () =>{
    turnO = true
    enableBtn();
    newMsg.classList.add("hide");
    document.body.style.background = "rgb(230, 94, 94)"
    newGame.style.background = "blue";
    reset.style.background = "mediumaquamarine"
}
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame)