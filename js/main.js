/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const originalDeck = buildOriginalDeck();


/*----- app's state (variables) -----*/
let playercard, dealercard, bet, balance, result

/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init()

function init() {
    let balance = 0;
    let bet = 0;
    let playerCard = null;
    let dealerCard = null;
}

function buildOriginalDeck() {
    const deck = [];
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
          let value;
          if (rank === 'A') {
            value = 14;
          } else if (rank === 'K') {
            value = 13;
          } else if (rank === 'Q') {
            value = 12;
          } else if (rank === 'J') {
            value = 11;
          } else {
            value = parseInt(rank);
          }
    
          deck.push({
            face: `${suit}${rank}`,
            value: value
          });
        });
      });
    
      return deck;
    }
