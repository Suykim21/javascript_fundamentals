// OOP


// ***** Javascript Objects ***** //

var customer = {
    name: 'Tom Smith',
    speak: function(){
        console.log("My name is " + this.name);
    },

    // creating js object within the object
    address: {
        street: '123 Main St',
        city: 'Pittsburgh',
        state: 'PA'
    }
};

// console.log(customer);
// customer.speak();

// to get the information on js objects:
// console.log(customer.address.street) etc.

// adding properties to objects:

customer.address.country = "US";


// ***** Constructor Functions ***** //

function Person(name, street){
    this.name = name;
    this.street = street;

    this.info = function(){
        console.log("My name is " + this.name + " and I live on "+ this.street);
    } 
}

// creating new object(instantiating) by using 'new'
// calling constructor function with new
var bobSmith = new Person('Bob Smith', '234 main st');

// bobSmith.info();

// ***** Instanceof ***** //

// instanceof method checks if instance is part of the object
console.log("Bob is from Person object " + (bobSmith instanceof Person));

// ***** Passing Objects to Functions ***** //

// you can pass an object to a function and change values
function changeName(object){
    object.name = "Sue Smith";
    console.log('bob smith became ' + bobSmith.name);
}
changeName(bobSmith);

// Objects are only equal if they reference the same object
var person1 = new Person('steve', '123 main st');
var person2 = new Person('steve', '123 main st');

console.log('Are they equal ' + (person1 == person2))

// ***** Prototypes ***** //
/* 
Every function has a prototype property that contains an object
You can add properties and methods to the prototype object
and then when you call for them to execute they are used
just as if they belonged to the object
*/

function getSum(num1, num2){
    return num1 + num2;
}

// Get the number of function arguments
getSum.length;

// You can add properties and methods to this object
function Mammal(name){
    // property
    this.name = name;
    this.getInfo = function(){
        return "The mammals' name is " + this.name;
    }
}

// ***** Adding Properties to Objects ***** //

// Use prototype to add a property
Mammal.prototype.sound = 'Grrr'

// Use it to add a method
Mammal.prototype.makeSound = function(){
    return this.name + ' says '+this.sound;
}

var grover = new Mammal('Grover');
console.log(grover.makeSound())


// ***** List Properties in Objects ***** //

for(var prop in grover){
    console.log(prop+grover[prop]);
}


// ***** hasOwnProperty ***** //

// check wthich property belongs to prototype vs. the object grover
grover.hasOwnProperty('name') //true
grover.hasOwnProperty('sound') // false


// ***** Add Properties to Built in Objects ***** //

Array.prototype.inArray = function inArray(value){
    for(i = 0; i < this.length; i++){
        if(this[i] === value){
            return true;
        }
    }
    return false;
}

var sampArray = [1,2,3,4,5];
console.log(sampArray.inArray(3));

// ***** Private Properties ***** //

function SecretCode(){
    // private property
    var secretNum = 78;
    this.guessNum = function(num){
        if(num > 78){
            return 'lower';
        } else if(num < 78){
            return 'higher'
        } else {
            return 'you guessed it'
        }
    }
}

var secret = new SecretCode();

// prints undefined
console.log(secret.secretNum);

SecretCode.prototype.getSecret = function(){
    return this.secretNum
}

// undefined
console.log(secret.getSecret());


// ***** Getters/Setters ***** //

var address = {
    street: 'No Street',
    city: 'No City',
    state: 'No State',

    get getAddress(){
        return this.street +", "+this.city+", "+this.state;
    },

    set setAddress(theAddress){
        var parts = theAddress.toString().split(", ");
        this.street = parts[0] || "";
        this.city = parts[1] || "";
        this.state = parts[2] || "";
    }
}

address.setAddress ="123 main st, Pittsburgh, PA"

console.log("Address: "+address.getAddress);
console.log("City: " +address.city);
// ***** defineGetter / defineSetter ***** //
// ***** defineProperties ***** //
// ***** Constructor Function Getters/Setters ***** //
// ***** Inheritance ***** //
// ***** Intermediate Function Inheritance ***** //
// ***** Call Parent Functions ***** //
// ***** ES6 ***** //
// ***** Singleton Pattern ***** //
// ***** Factory Pattern ***** //
// ***** Decorator Pattern ***** //
// ***** Observer Pattern ***** //





