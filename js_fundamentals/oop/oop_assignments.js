/*

Assignment: Ninja Class
Create a new class called Ninja with the following attributes:

name
health
speed (private)
strength (private)
Speed and strength should be 3 by default. Health should be 100 by default.

The Ninja class should have the following methods:

sayName() - This should log that Ninja's name to the console.
showStats() - This should show the Ninja's Strength and Speed, as well as their health.
drinkSake() - This should add +10 Health to the Ninja
Example Outputs
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

*/

function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.showStats = function () {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }
}

Ninja.prototype.sayName = function () {
    console.log("My name is " + this.name);
    return this;
}

Ninja.prototype.drinkSake = function () {
    this.health += 10;
    return this;
}

const ninja1 = new Ninja("Goemon");
ninja1.sayName();
ninja1.showStats();


/*

Assignment: Ninja Class II
Complete the below challenges using the Ninja Class from the previous assignment.

.punch()
Add a new method to your Ninja class called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your .punch() should display a console message like the below example.

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
Copy
.kick()
Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and like .punch() will take another Ninja instance.

blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
Validations
Update .punch() and .kick() so that they only accept Instances of the Ninja class. Hint: You will need to find a way to check the constructor of an instance. You will often need to consult outside documentation to find solutions for particular features.

*/

function Ninja(name) {
    this.name = name;
    this.health = 100;
    let speed = 3;
    let strength = 3;

    this.showStats = function () {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }

    this.kick = function (ninja) {
        const damage = strength * 5;
        ninja.health -= damage;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!");
        return this;
    }
}

Ninja.prototype.punch = function (ninja) {
    ninja.health -= 5;
    console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
    return this;
}

Ninja.prototype.sayName = function () {
    console.log("My name is " + this.name);
    return this;
}

Ninja.prototype.drinkSake = function () {
    this.health += 10;
    return this;
}

const blueNinja = new Ninja("Bill Gates");
const redNinja = new Ninja("Hyabusa");

blueNinja.sayName();
redNinja.sayName();

blueNinja.punch(redNinja);
redNinja.kick(blueNinja);

blueNinja.showStats();
redNinja.showStats();


/*

Assignment: Ninja Class III
Part I
Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following attributes:

name
health
speed
strength
Speed and strength should be 3 by default. Health should be 100 by default.

The Ninja class should have the following methods:

sayName() - This should log that Ninja's name to the console.
showStats() - This should show the Ninja's Strength and Speed, as well as their health.
drinkSake() - This should add +10 Health to the Ninja
Part II - Sensei Class
Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

*/

// Part I
class Ninja {
    constructor(name) {
        this.name = name;
        this.speed = 3;
        this.strength = 3;
        this.health = 100;
    }

    sayName() {
        console.log(`My ninja name is ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
        return this;
    }

}

// Part II
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
        this.health = 200;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, \ntwo programmers can do in two months.");
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

/*

Assignment: Deck of Cards
Create a Deck class. A deck should have the following functionality:

The Deck should contain the 52 standard cards
The Deck should be able to shuffle
The Deck should be able to reset
The Deck should be able to deal a random card
Deal should return the card that was dealt and remove it from the deck
Now create a Player class. A Player should have the following functionality:

The Player should have a name
The Player should have a hand
The Player should be able to take a card (use the deck.deal method)
The Player should be able to discard a card
Optional:

Create a blackjack game with your deck of cards!
A deck of card image set can be found here

Or Unicode them Unicode for card images!

*/

// ======= ES5 =======

// function Deck(){
//     this.deck = [];
// };

// Deck.prototype.reset = function(){
//     this.deck = [];
//     var suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
//     var pips = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

//     for(var suit in suits){
//         for(var pip in pips){
//             this.deck.push(pips[pip] + " of " + suits[suit]);
//         }
//     }

//     return this;
// };

// Deck.prototype.shuffle = function(){
//     var m = this.deck.length, t, i;
//     while (m) {
//         i = Math.floor(Math.random() * m--);
//         t = this.deck[m];
//         this.deck[m] = this.deck[i];
//         this.deck[i] = t;
//     }
//     return this;
// }

// Deck.prototype.deal = function(){
//     return this.deck.pop();
// }

// var Player = function Player(name){
//     this.name = name;
//     this.hand = [];
// }

// Player.prototype.draw = function(deck){
//     this.hand.push(deck.deal());
//     return this;
// }

// Player.prototype.discard = function(){
//     this.hand.pop();
//     return this;
// }

// var deck1 = new Deck();
// deck1.reset().shuffle();
// console.log(deck1);

// var player1 = new Player("Nina");
// player1.draw(deck1).draw(deck1);
// console.log(player1);


// ======== ES6 =========

class Deck {
    constructor() {
        this.deck = [];
    }

    reset() {
        this.deck = [];
        const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (const suit of suits) {
            for (const value of values) {
                this.deck.push(`${ value } of ${ suit }`);
            }
        }

        return this;
    }

    shuffle() {
        let m = this.deck.length,
            t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }

    deal() {
        return this.deck.pop();
    }

}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }

    discard() {
        this.hand.pop();
        return this;
    }
}

const deck2 = new Deck();
deck2.reset().shuffle();
console.log(deck2);

const player2 = new Player("Ronnel");
player2.draw(deck2).draw(deck2);
console.log(player2);
console.log(deck2);