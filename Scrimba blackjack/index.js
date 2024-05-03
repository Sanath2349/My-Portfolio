let cards = [];
let sum = 0;
//console.log(firstCard + "," + secondCard);
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sumEl = document.querySelector("#sum-el");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "Jack",
  chips: 145,
};

let playerEl = document.getElementById("player-el");

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ",";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(message);
}

function startGame() {
  isAlive = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
  playerEl.textContent = player.name + " = $ " + player.chips;
}

function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 1;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function newCard() {
  console.log("Drawing a new card from the deck!");
  if (isAlive === true && hasBlackJack === false) {
    let card = randomCard();
    console.log(card);
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
