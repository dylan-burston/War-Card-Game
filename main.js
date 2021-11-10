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
endGameEl = document.querySelector('.endGame')
announcementEl = document.querySelector(".announcement");
warPCardEl = document.getElementById("warPCard");
warCpuCardEl = document.getElementById("warCpuCard")


shuffleBtnEl.addEventListener("click", shuffle);
playerContainerEl.addEventListener("click", flipCard);
forceWinBtnEl.addEventListener("click", forceWin);

// empty card array to push deck of 52 into it.. 
let cards = [];
suits.forEach(suit => values.forEach(value => cards.push(suit+value)));

let playerCards;
let cpuCards;
let lastFourCpuCards;
let lastFourPlayerCards;
// whenever function is ran needs to uypdate these variables dynamically 

function shuffle() {
    playerCard.className = "card large joker-black"; // after shuffle aka render game card class returns to joker 
    cpuCard.className = "card large joker-red";
    gameBodyEl.style = "display: block";
    instructionsEl.style = "display: none";
    announcementEl.style = "display: none";
    cards = cards.sort(() => 0.5 - Math.random());
    playerCards = cards.slice(0, cards.length/2);
    cpuCards = cards.slice(cards.length/2, cards.length);
    playerTallyEl.innerText = `Total cards: ${playerCards.length}`;
    cpuTallyEl.innerText = `Total cards: ${cpuCards.length}`
}


function flipCard() {
    warPCardEl.className = "";
    warCpuCardEl.className = "";
    let randomPCard = playerCards[Math.floor(Math.random()*playerCards.length)]
    let randomCpuCard = cpuCards[Math.floor(Math.random()*cpuCards.length)]
    console.log("before flip", randomPCard);
    playerCard.className = `card large ${randomPCard}`;
    cpuCard.className = `card large ${randomCpuCard}`;
    [playerCards, cpuCards] = compare(randomPCard, randomCpuCard, playerCards, cpuCards);
    tally(playerCards, cpuCards)
    console.log(playerCards.length)

    // compare(randomPCard, randomCpuCard, playerCards, cpuCards) 
    // playerCard.className = `card large ${randomPCard}`;
    // cpuCard.className = `card large ${randomCpuCard}`;
    }


function compare(randomPCard, randomCpuCard, playerCards, cpuCards) {
    let numericalPlayer = determineValue(randomPCard); // need the real value of the cards 
    let numericalCpu = determineValue(randomCpuCard);
    if (numericalPlayer > numericalCpu) {
        playerCards.push(randomCpuCard);
        let cpuCardIndex = cpuCards.indexOf(randomCpuCard);
        cpuCards.splice(cpuCardIndex, 1); // get ONE element out of the array located at cpuCardIndex
    } else if (numericalCpu > numericalPlayer) {
        cpuCards.push(randomPCard);
        let pCardIndex = playerCards.indexOf(randomPCard);
        playerCards.splice(pCardIndex, 1);
        // tally(cpuCards.length, playerCards.length)
    } else if (numericalCpu == numericalPlayer && playerCards.length >= 4 && cpuCards.length >= 4){ // cant go to war if one player has less than the amount of war cards aka 4
        [playerCards, cpuCards] = war(playerCards, cpuCards) // //updates player card and cpu cards once war has happened, war runs the war function 
        // console.log("player cards after war", playerCards.length, "cpu cards after war", cpuCards.length)
    } else {
        announcementEl.style = "display: block";
        gameBodyEl.style = "display: none";
        if (playerCards.length > cpuCards.length) {
            announcementEl.innerText = "Player Wins!"
        } else {
            announcementEl.innerText = "CPU Wins!"
        }
    }
    return [playerCards, cpuCards]
       
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
    lastFourPlayerCards = playerCards.slice(Math.max(playerCards.length -4, 0));
    lastFourCpuCards = cpuCards.slice(Math.max(cpuCards.length -4, 0));
    warPCardEl.className = `card large ${lastFourPlayerCards[lastFourPlayerCards.length - 1]}`;
    warCpuCardEl.className = `card large ${lastFourCpuCards[lastFourCpuCards.length - 1]}`;
    let [lastPlayerCards, lastCpuCards] = compare(lastFourPlayerCards[lastFourPCards.length -1], lastFourCpuCards[lastFourCpuCards.length - 1], lastFourPlayerCards, lastFourCpuCards);
    if (lastPlayerCards.length === 5){ // it is the compare function SO compares 1 card to 1 card, winner takes ONLY 1 card aka 4 of them and the 1 they won 
        playerCards = [playerCards, lastCpuCards].flat();
     } else if (lastCpuCards.length === 5){
        cpuCards = [cpuCards, lastPlayerCards].flat();
     } else {
        war(playerCards, cpuCards);
     }
        tally(playerCards, cpuCards);
}

function tally(playerCards, cpuCards){
    playerTallyEl.innerText = `Total cards: ${playerCards.length}`;
    cpuTallyEl.innerText = `Total cards: ${cpuCards.length}`;
}

// war can be a very long game, added to forfeit the cpu 
function forceWin(playerCards, cpuCards){
   playerCards = cards;
   cpuCards = [];
   tally(playerCards, cpuCards);
   gameBodyEl.style = "display: none";
   announcementEl.style = "display: block"
   announcementEl.innerText = "Player 1 Wins!!"
}


