const suits = ['h', 's', 'd', 'c'];
const values = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

cpuCard = document.getElementById("inPlayCpu");
playerCard = document.getElementById("inPlayPlayer");
playerContainerEl = document.querySelector(".playerContainer");
cpuContainerEl = document.querySelector(".cpuContainer");
displayGamePlay = document.querySelector(".instructions"); 
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

let cards = [];
suits.forEach(suit => values.forEach(value => cards.push(suit+value)));

let playerCards;
let cpuCards;
let lastFourCpuCards;
let lastFourPlayerCards;

function shuffle() {
    playerCard.className = "card large joker-black"; 
    cpuCard.className = "card large joker-red";
    gameBodyEl.style = "display: block";
    instructionsEl.style = "display: none";
    announcementEl.style = "display: none";
    cards = cards.sort(() => 0.5 - Math.random()); 
    playerCards = cards.slice(0, cards.length/2);
    cpuCards = cards.slice(cards.length/2, cards.length);
    playerTallyEl.innerText = ` ${playerCards.length}`;
    cpuTallyEl.innerText = ` ${cpuCards.length}`
}

function flipCard() {
    warPCardEl.className = "";  
    warCpuCardEl.className = "";
    let randomPCard = playerCards[Math.floor(Math.random()*playerCards.length)] 
    let randomCpuCard = cpuCards[Math.floor(Math.random()*cpuCards.length)]
    playerCard.className = `card large ${randomPCard}`;
    cpuCard.className = `card large ${randomCpuCard}`;
    [playerCards, cpuCards] = compare(randomPCard, randomCpuCard, playerCards, cpuCards); // cards yuou are comparing, someone wins someone takes, arrays WILL be modified 
    tally(playerCards, cpuCards)
}

function compare(randomPCard, randomCpuCard, playerCards, cpuCards) {
    let numericalPlayer = determineValue(randomPCard); 
    let numericalCpu = determineValue(randomCpuCard);
    if (numericalPlayer > numericalCpu) {
        playerCards.push(randomCpuCard);
        let cpuCardIndex = cpuCards.indexOf(randomCpuCard);
        cpuCards.splice(cpuCardIndex, 1); 
    } else if (numericalCpu > numericalPlayer) {
        cpuCards.push(randomPCard);
        let pCardIndex = playerCards.indexOf(randomPCard);
        playerCards.splice(pCardIndex, 1);
    } else if (numericalCpu === numericalPlayer && playerCards.length >= 4 && cpuCards.length >= 4){ 
        [playerCards, cpuCards] = war(playerCards, cpuCards) // resetting reasigning cpu, playercards 
    } else {
        displayWinner(playerCards, cpuCards); 
    }
    return [playerCards, cpuCards]
       
    }

function determineValue(incomingCard) {
    let numericalValue;
    let trueValues = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    for (let i=0; i<values.length; i++) {
        if (incomingCard.substring(1) === values[i]) {
            numericalValue = trueValues[i]; 
        }
    }
    return numericalValue;
}

function war(playerCards, cpuCards){
    lastFourPlayerCards = playerCards.slice(Math.max(playerCards.length -4, 0));
    lastFourCpuCards = cpuCards.slice(Math.max(cpuCards.length -4, 0));
    // let warPCard = lastFourPlayerCards[lastFourPlayerCards.length - 1]; // last one of each 
    // let warCpuCard = lastFourCpuCards[lastFourCpuCards.length - 1];
    let warPCard = lastFourPlayerCards[Math.floor(Math.random()*lastFourPlayerCards.length)] 
    let warCpuCard = lastFourCpuCards[Math.floor(Math.random()*lastFourCpuCards.length)] 
    warPValue = determineValue(warPCard);
    warCpuValue = determineValue(warCpuCard);
    if (warCpuValue === warPValue) {
        [playerCards, cpuCards] = war(playerCards, cpuCards);
    }
    warPCardEl.className = `card large ${warPCard}`;
    warCpuCardEl.className = `card large ${warCpuCard}`;
    let [lastPlayerCards, lastCpuCards] = compare(warPCard, warCpuCard, lastFourPlayerCards, lastFourCpuCards);
    if (lastPlayerCards.length > lastCpuCards.length){
        playerCards = [playerCards, warCpuCard, lastCpuCards].flat(); 
        cpuCards = cpuCards.slice(0,cpuCards.length-4);
    } else {
        cpuCards = [cpuCards, lastPlayerCards].flat();
        playerCards = playerCards.slice(0,playerCards.length-4);
    }   
    return [playerCards, cpuCards]
}

function tally(playerCards, cpuCards){
    playerTallyEl.innerText = `${playerCards.length}`;
    cpuTallyEl.innerText = `${cpuCards.length}`;
}

function displayWinner(playerCards, cpuCards){
    announcementEl.style = "display: block";
    gameBodyEl.style = "display: none";
    if (playerCards.length > cpuCards.length) {
        announcementEl.innerText = "Player Wins!"
    } else {
        announcementEl.innerText = "CPU Wins!"
    }
}

function forceWin(playerCards, cpuCards){
   playerCards = cards;
   cpuCards = [];
   displayWinner(playerCards, cpuCards)
}

// THE BELOW FUNCTION CAN BE UNCOMMENTED IN ORDER TO AUTOMATICALLY RUN THROUGH A FULL GAME IN ORDER TO SEE THE WIN/LOSS CONDITION

// function simulateGame() {
//     shuffle(); 
//     setInterval(() => flipCard(playerCard, cpuCard), 100);
// }
// setTimeout(simulateGame, 1000);

