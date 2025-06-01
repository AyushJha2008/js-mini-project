let cards = document.querySelector(".cards");
let card = document.querySelectorAll(".card");
let score = document.querySelector(".score")
let refBtn = document.querySelectorAll(".button")
let cardOne, cardTwo;
let disableClick = false;
let turn = 0
const iconCount = 10
const icons = []
for(let i =1; i<=iconCount; i++){
    icons.push(`icon${i}.png`, `icon${i}.png`) //do card ke liye
}
function createCard(){
    cards.innerHTML = ""
    icons.sort(()=>Math.random()-0.5);
    icons.forEach(icon=>{
        const card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML =
        `<div class="front-view"><span class="material-icon">❓</span></div>
        <div class="back-view"> <img src="assets/${icon}"> </div>`;
        cards.appendChild(card);
        score.innerHTML=`<p> TURNS: ${turn} </p>`;
        card.addEventListener("click",flipCard)
    })
}

function flipCard(e){
    let clickCard = e.currentTarget;    
    if(clickCard != cardOne && !disableClick){
    clickCard.querySelector(".front-view").style.display = "none";
    clickCard.querySelector(".back-view").style.display = "block";
    if(!cardOne){
        return cardOne = clickCard
    }
    cardTwo = clickCard;
    disableClick = true;
    let imgOne = cardOne.querySelector("img").src,
    imgTwo = cardTwo.querySelector("img").src;
    turn = turn+1
    score.innerHTML= `<p> TURNS: ${turn} </p>`;
    console.log(turn);
    matchCard(imgOne, imgTwo)
    }
}

function matchCard(img1, img2){
    if(img1 == img2){
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = null;
        cardTwo = null;
        return disableClick = false;
    }
    setTimeout(()=>{
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 500);
    setTimeout(()=>{
        cardOne.querySelector(".front-view").style.display = "block";
        cardOne.querySelector(".back-view").style.display = "none";
        cardTwo.querySelector(".front-view").style.display = "block";
        cardTwo.querySelector(".back-view").style.display = "none";
        cardOne.classList.remove("shake");
        cardTwo.classList.remove("shake");
        cardOne = null;
        cardTwo = null;
        disableClick = false;
    }, 1200)
}

function refresh(){
    cards.innerHTML =""; //empty
    cardOne = null;
    cardTwo = null;
    disableClick = false;
    turn=0;
    icons.sort(()=> Math.random()-0.5);
    createCard();
}
refBtn.forEach(btn=>{
    btn.addEventListener("click", refresh)
})
createCard();