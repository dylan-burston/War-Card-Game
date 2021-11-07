const suits = ['h', 's', 'd', 'c'];
const values = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K'];





cpuCard = document.getElementById("inPlayCpu");
playerCard = document.getElementById("inPlayPlayer");
playerContainerEl = document.querySelector(".playerContainer");
cpuContainerEl = document.querySelector(".cpuContainer");
displayGamePlay = document.querySelector(".instructions"); //display once button pushed 


playerContainerEl.addEventListener("click", flipCard);


let cards = [];
suits.forEach(suit => values.forEach(value => cards.push(suit+value)));

function shuffle() {
    if (cards.length == 52) {
        cards = cards.sort(() => 0.5 - Math.random());
    }
    playerCards = cards.slice(0, cards.length/2);
    cpuCards = cards.slice(cards.length/2, cards.length);
    // console.log("Player cards inside shuffle are", playerCards);
    // console.log("CPU cards inside shuffle are", cpuCards);
    return [playerCards, cpuCards];
}

// question: all examples online use classes? why? when is the time to use them?

// function displayGamePlay(){ 

// }

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
