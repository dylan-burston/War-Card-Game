const suits = ['h', 's', 'd', 'c'];
const values = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];


cpuCard = document.getElementById("inPlayCpu");
playerCard = document.getElementById("inPlayPlayer");
playerContainerEl = document.querySelector(".playerContainer");
cpuContainerEl = document.querySelector(".cpuContainer");
displayGamePlay = document.querySelector(".instructions"); //display once button pushed 
playerTallyEl = document.querySelector(".playerTally");
cpuTallyEl = document.querySelector(".cpuTally");
shuffleBtnEl = document.querySelector(".shuffle");
gameBodyEl = document.querySelector('.gameBody');
playerTallyEl = document.querySelector(".playerTally");
cpuTallyEl = document.querySelector(".cpuTally");
instructionsEl = document.querySelector('.instructions');
forceWinBtnEl = document.querySelector('.forceWin')

shuffleBtnEl = document.addEventListener("click", shuffle);
playerContainerEl.addEventListener("click", flipCard);
forceWinBtnEl.addEventListener("click", forceWin);

let cards = [];
suits.forEach(suit => values.forEach(value => cards.push(suit+value)));

function shuffle() {
    gameBodyEl.style = "display: block";
    instructionsEl.style = "display: none";
    if (cards.length === 52) {
        cards = cards.sort(() => 0.5 - Math.random());
    }
    playerCards = cards.slice(0, cards.length/2);
    cpuCards = cards.slice(cards.length/2, cards.length);
    // console.log("Player cards inside shuffle are", playerCards);
    // console.log("CPU cards inside shuffle are", cpuCards);
    return [playerCards, cpuCards];
}

function flipCard() {
    let randomPCard = playerCards[Math.floor(Math.random()*playerCards.length)]
    let randomCpuCard = cpuCards[Math.floor(Math.random()*cpuCards.length)]
    compare(randomPCard, randomCpuCard, playerCards, cpuCards) 
    playerCard.className = `card large ${randomPCard}`;
    cpuCard.className = `card large ${randomCpuCard}`;
    }


function compare(randomPCard, randomCpuCard, playerCards, cpuCards) {
    let numericalPlayer;
    let numericalCpu;
    numericalPlayer = determineValue(randomPCard);
    numericalCpu = determineValue(randomCpuCard);
    // console.log("random cards and their values", randomPCard, randomCpuCard,  numericalPlayer, numericalCpu);
    if (numericalPlayer > numericalCpu) {
        playerCards.push(randomCpuCard);
        let cpuCardIndex = cpuCards.indexOf(randomCpuCard);
        cpuCards.splice(cpuCardIndex, 1); // get ONE element out of the array located at cpuCardIndex
    } else if (numericalCpu > numericalPlayer) {
        cpuCards.push(randomPCard);
        let pCardIndex = playerCards.indexOf(randomPCard);
        playerCards.splice(pCardIndex, 1);
    } else {
        console.log('war')
    }
}

function determineValue(incomingCard) {
    // incomingCard = 'h06'
    let numericalValue;
    let trueValues = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    for (let i=0; i<values.length; i++) {
        if (incomingCard.substring(1) === values[i]) {
            // string -> h06 would be 06... 1 index is 0
            numericalValue = trueValues[i]; // so true value is 6
        }
    }
    return numericalValue;
}

function war(playerCards, cpuCards){
    // console.log('playerCards: ', playerCards, 'cpuCards: ', cpuCards);
    lastFourPCards = playerCards.slice(Math.max(playerCards.length -4, 0));
    lastFourCpuCards = cpuCards.slice(Math.max(cpuCards.length -4, 0));
    // console.log('player cards:', lastFourPCards, 'cpu cards', lastFourCpuCards)
    let [lastPCards, lastCpuCards] = compare(lastFourPCards[lastFourPCards.length -1], lastFourCpuCards[lastFourCpuCards.length - 1], lastFourPCards, lastFourCpuCards);
    if (lastPCards.length === 5){ // it is the compare function SO compares 1 card to 1 card, winner takes ONLY 1 card aka 4 of them and the 1 they won 
        playerCards = [playerCards, lastCpuCards].flat();
     } else if (lastCpuCards.length === 5){
        cpuCards = [cpuCards, lastPCards].flat();
     } else {
        war(playerCards, cpuCards);
     }
        tally(playerCards, cpuCards);
}

function tally(playerCards, cpuCards){
    playerTallyEl.innerText = `Total cards: ${playerCards.length}`;
    cpuTallyEl.innerText = `Total cards: ${cpuCards.length}`;
}

function forceWin(playerCards, cpuCards){
   playerCards = cards;
   cpuCards = [];
   tally(playerCards, cpuCards)
}
