/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const originalDeck = buildOriginalDeck();


/*----- app's state (variables) -----*/
let playerCard, dealerCard, bet, balance, result

/*----- cached element references -----*/
const balanceEl = document.getElementById('balance');
const betEl = document.getElementById('bet-amt');
const messageEl = document.getElementById('result-message')
const dlrCardEl = document.getElementById('dealercard')
const plrCardEl = document.getElementById('playercard')

/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleClick)

/*----- functions -----*/
init();

function init() {
    balance = 0;
    bet = 0;
    playerCard = null;
    dealerCard = null;
    result = null;
    messageEl.innerText = 'Place Your Bet'
    render()
}

function render() {
    renderResult();
    renderCards();
    renderBalance();
    renderBet();
}

function renderBalance() {
    balanceEl.textContent = balance;
}

function renderBet() {
    betEl.textContent = bet;
}

function handleClick(evt) {
    if (evt.target.tagName !== 'BUTTON') {
        return;
    } else if (evt.target.className === 'chip') {
        handleWager(evt);
    } else if (evt.target.id === 'bet') {
        handleBet();
    }
}

function handleWager(evt) {
    if (evt.target.id === "chip-25") {
        bet += 25;
    }
    else if (evt.target.id === "chip-50") {
        bet += 50;
    }
    else if (evt.target.id === "chip-100") {
        bet += 100;
    }
    renderBet()

}

function handleBet() {
    playerCard = getRandomCard();
    dealerCard = getRandomCard();

    const liveBalance = parseInt(balanceEl.textContent);

    if (dealerCard.value > playerCard.value) {
        result = 'dealer';
        balance = liveBalance - bet;
        
    } else if (playerCard.value > dealerCard.value) {
        result = 'player';
        balance = liveBalance + bet;
        
    } else if (playerCard.value === dealerCard.value) {
        result = 'war';
        handleBet();
    }
    renderCards();
    renderResult();
    renderBalance(balance);
    bet = 0;
    renderBet();
}

function getRandomCard() {
    const randomIdx = Math.floor(Math.random() * originalDeck.length);
    const randomCard = originalDeck[randomIdx];
        console.log(randomCard); 
    originalDeck.splice(randomIdx, 1);
    return randomCard;
}
function renderResult() {
    if (result === 'dealer') {
        messageEl.innerText = `Dealer Wins, player -${bet}`;
    } else if (result === 'player') {
        messageEl.innerText = `Player Wins +${bet}`;
    } else if (result === 'war') {
        messageEl.innerText = 'WAR! New Cards Dealt';
    }

}

function renderCards() {
    if (dealerCard) {
        dlrCardEl.src = `images/${dealerCard.face}.png`;
        dlrCardEl.classList.add(`card`, dealerCard.face);
    }
     if (playerCard) {
        plrCardEl.src = `images/${playerCard.face}.png`;
        plrCardEl.classList.add(`card`, playerCard.face);
    }

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
