function Deck() {
    function Card(suit, count) {
        this.suit = suit;
        this.count = count;
    };
    this.cards = [];
    this.shuffle = function() {};
    this.reset = function() {
        var cards = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"];
        var suits = ["hearts","spade","diamond","clubs"];
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < cards.length; j++) {
                this.cards.push(suits[i],cards[j]);
            }
        return this;
        }
    };
    this.deal = function() {

    };


return this;
};
var deck = new Deck();
deck.reset();
// console.log(this.Deck, this.Card, this.cards);

// creates a player with a name and a hand
function Player(name) {
    this.name = name;
    this.hand = hand;
    this.takeCard = function(){

    };
    this.discard = function(){

    };
};

// Deck.reset();
