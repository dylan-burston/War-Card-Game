const suits = ['h', 's', 'd', 'c'];
const values = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K'];





cpuCard = document.getElementById("inPlayCpu");
playerCard = document.getElementById("inPlayPlayer");
playerContainerEl = document.querySelector(".playerContainer");
cpuContainerEl = document.querySelector(".cpuContainer");



playerContainerEl.addEventListener("click", flipCard);


function flipCard() {
    let randomPCard = suits[Math.floor(Math.random() * suits.length)] + values[Math.floor(Math.random()* values.length)]
    let randomCpuCard = suits[Math.floor(Math.random() * suits.length)] + values[Math.floor(Math.random()* values.length)]
    if(randomPCard !== randomCpuCard){
        playerCard.className = `card large ${randomPCard}`;
        cpuCard.className = `card large ${randomCpuCard}`;
    }
}

function clearDeck(){
    let 
}


function countDeck (){

}

function deckWar(){
    let randomPCard = suits[Math.floor(Math.random() * suits.length)] + values[Math.floor(Math.random()* values.length)]
    let randomCpuCard = suits[Math.floor(Math.random() * suits.length)] + values[Math.floor(Math.random()* values.length)]
    if(randomPCard === randomCpuCard){
        // deal 3 more cards // 
    }
}

