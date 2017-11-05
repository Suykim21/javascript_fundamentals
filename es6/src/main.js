// var test = 'Hello';

// console.log(test);

// function testVar(){
//     var a = 30;
//     if(true){
//         var a = 50;
//         console.log(a);
//     }
//     console.log(a);
// }

// function testLet(){
//     let a = 30;
//     if(true){
//         let a = 50;
//         console.log(a)
//     }
//     console.log(a)
// }

// for(var i = 0; i<10; i++){
//     console.log(i)
// }

// testLet();
// testVar();

// Classes and Inheritance 
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    // static methods - does not require instantiation you can call by using className.methodName()
    static countUsers(){
        console.log('There are 50 users');
    }

    // methods are functions that belows to the class
    register(){
        console.log(this.username + ' is now registered');
    }
}

// instantiating bob
let bob = new User('bob', 'bob@gmail.com', '12345');

bob.register();

// with static method you can call it out without instantiation
User.countUsers();


class Member extends User{
    constructor(username, email, password, memberPackage){
        // super method allows us to copy Parent Class attributes
        // this.username, this.email..etc.
        super(username, email, password);
        this.memberPackage = memberPackage;
    }

    getPackage(){
        console.log(this.username +' is subscribed to the '+ this.memberPackage +' package')
    }
}

let mike = new Member('mike', 'mike@gmail.com', '123', 'Standard')

mike.getPackage();

// it works due to inheritance.
mike.register();