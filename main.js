// constant variables 

const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
const values = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

const arrClubs = ["clubs-A.svg"];
const arrSpades = [".card back-red"];
const arrDiamonds = [];
const arrHearts = [];
// changing variables 

let dealtCards;
let deckCount = 52;
let playerCard; 
let compCard;
let cardCountC; // TOTAL amount of cards computer has
let cardCountP; // TOTAL amount of cards player has 

let wonCards // need this variable in order to count the winnings AFTER each turn??


// classes --> when will classes be used? classes vs what? 


// FUNCTIONS 

// called at the end of EVERY turn IF there is no war so playerCard !== compCard
function clearBoard(){

    // in the beginning of each turn... can this be the startup of the game as well?

    // let playerCard = [];
    // let compCard = [];
    // let dealtCards = 0;
    // let cardCountC = 0; 
    // let cardCountC = 0;

}

function shuffleDeck(){
    let deckCount = Math.floor(Math.random() * 52) 
}

// this function is called at the end of EVERY turn 
function checkDeck(){

}


// at the beginning once? or after each turn? because cards dont need to be shuffled after each turh... 
function remnderGame(){

}


// choose a random number between 1 and 4 inclusive 
let suit1 = Math.ceil(Math.random() * 4) 
