/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

// Build an 'original' deck of 'card' objects used to create shuffled decks
const originalDeck = buildOriginalDeck();


/*----- app's state (variables) -----*/
let table, shuffledDeck, betAmt, balance

/*----- cached element references -----*/
const shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', renderNewShuffledDeck);

/*----- functions -----*/
init()

function init() {
    render
}

function getNewShuffledDeck() {
  // Create a copy of the originalDeck (leave originalDeck untouched!)
  const tempDeck = [...originalDeck];
  const newShuffledDeck = [];
  while (tempDeck.length) {
    // Get a random index for a card still in the tempDeck
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
    newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return newShuffledDeck;
}


function buildOriginalDeck() {
    const deck = [];
    // Use nested forEach to generate card objects
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
