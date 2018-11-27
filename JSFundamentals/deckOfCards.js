class Card {
  constructor(suit, type) {
    this._suit = suit;
    this._type = type;
  }
  get suit() {
    return this._suit;
  }
  get type() {
    return this._type;
  }
  show() {
    console.log("Suit: " + this.suit + ", " + "Type: " + this.type);
  }
}

class Deck {
  constructor() {
    this._deck = [];
    this.reset();
  }
  get deck() {
    return this._deck;
  }

  reset() {
    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    for (let suit in suits) {
      for (let value in values) {
        this._deck.push(new Card(suits[suit], values[value]));
      }
    }
  }

  shuffle() {
    let deck = this.deck;
    for (var i = deck.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * i);
      [deck[i], deck[random]] = [deck[random], deck[i]];
    }
    return this;
  }

  deal() {
    return this._deck.pop();
  }
}

class Player {
  constructor(name, deck) {
    this._name = name;
    this._hand = [];
    this.draw(deck);
    this.draw(deck);
    this.draw(deck);
    this.draw(deck);
    this.draw(deck);
  }
  draw(deck) {
    this._hand.push(deck.deal());
  }
  discard(hand) {
    this._hand.pop();
    return this.hand;
  }
  get hand() {
    return this._hand;
  }
}

var newDeck = new Deck();
console.log(newDeck.deck);
newDeck.shuffle();
newDeck.deal().show();
console.log(newDeck.deck);
var newPlayer = new Player("Jason", newDeck);
console.log("_________________________________________");
console.log(newPlayer.hand);
newPlayer.discard();
