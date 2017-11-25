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