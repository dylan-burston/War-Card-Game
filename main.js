const suits = ['h', 's', 'd', 'c'];
const values = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];




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
    const [playerCards, cpuCards] = shuffle();
    // console.log("player cards", playerCards);
    // console.log("cpu cards", cpuCards);
    let randomPCard = playerCards[Math.floor(Math.random()*playerCards.length)]
    let randomCpuCard = cpuCards[Math.floor(Math.random()*cpuCards.length)]

    
    // if(randomPCard !== randomCpuCard){
    //     playerCard.className = `card large ${randomPCard}`;
    //     cpuCard.className = `card large ${randomCpuCard}`;
    // }
}

function compare(randomPCard, randomCpuCard, playerCards, cpuCards){
     // want to compare and snatch other cards if i win
     let numericalPlayer;
     let numericalCpu;
}

function determineValue(incomingCard) {
    // incomingCard = 'h06'
    let numericalValue;
    let trueValues = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    for (let i=0; i<values.length; i++) {
        if (incomingCard.substring(1) === values[i]) {
            // substring => '06'
            numericalValue = trueValues[i]; // so true value is 6
        }
    }
    return numericalValue;
}
// determine value compares the value of the actual card to the VALUES const array in the beginning 

function countDeck (){

}

function deckWar(){
    let randomPCard = suits[Math.floor(Math.random() * suits.length)] + values[Math.floor(Math.random()* values.length)]
    let randomCpuCard = suits[Math.floor(Math.random() * suits.length)] + values[Math.floor(Math.random()* values.length)]
    if(randomPCard === randomCpuCard){
        // deal 3 more cards // 
    }
}
