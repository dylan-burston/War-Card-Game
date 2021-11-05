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
        playerCard.className = ``
    }

    }
    playerCard.className = `card ${randomPCard}`;
}




// CONSTANTS

// const suits = ['h', 's', 'd', 'c'];
// const values = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K'];

// VARIABLES

// let dealtCards;
// let deckCount = 52;
// let playerCard; // current card
// let compCard; // current card
// let cardCountC; // TOTAL amount of cards computer has
// let cardCountP; // TOTAL amount of cards player has 
// let initPlay = true; // need to check whether or not its first game, deckCount at 52, no need to check win/ loss

// let wonCards // need this variable in order to count the winnings AFTER each turn??

// EVENT LISTENERS


// flippedCard()

// var playBtn = document.querySelector('#startBtn')
// playBtn.addEventListener('click', play); 


// classes --> when will classes be used? classes vs what? 


// FUNCTIONS 

// function play(){
//     if(initPlay){
//         initPlay = false;
//     }
// }
// called at the end of EVERY turn IF there is no war so playerCard !== compCard
// function clearBoard(){

    // in the beginning of each turn... can this be the startup of the game as well?

    // let playerCard = [];
    // let compCard = [];
    // let dealtCards = 0;
    // let cardCountC = 0; 
    // let cardCountC = 0;

// }

// function flippedCard(value){
//     playerCard.classList.add('card', 'back-red');
// }

// function showCardValue(value){
//     playerCard.classList.remove('back-red')
//     playerCard.classList.add('card', value);
// }


// function shuffleDeck(value){
//     let deckCount = Math.floor(Math.random() * 52) 
//     let suit1 = Math.ceil(Math.random() * 4) // choose a random number between 1 and 4 inclusive 
// }

// // this function is called at the end of EVERY turn 
// function checkDeck(){

// }


// // at the beginning once? or after each turn? because cards dont need to be shuffled after each turh... 
// function remnderGame(){

// }