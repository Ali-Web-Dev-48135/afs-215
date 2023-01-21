const User = require("../Assignment_One/User");

// Instantiating An User Object.
const UserObjectOne = new User(3, 3);

// Printing out the greet for the User.
console.log(UserObjectOne.greetUser());

// Using Static Methods Below To Add, Subtract, Multiply and Divide.

console.log(User.add(10, 4));
console.log(User.subtract(10 , 5));
console.log(User.multiply(10, 10));
console.log(User.divide(10, 5));
console.log(UserObjectOne.returnIntAsString(2,5));


// Instantiating User class for the second time.
const UserObjectTwo = new User(2, 2, "Jane", 24);
console.log(UserObjectTwo.greetUser());

// Using Static methods below with the to Add, Subtract, Multiply and Divide
console.log(User.add(11, 11));
console.log(User.subtract(100,10));
console.log(User.multiply(11, 11));
console.log(User.divide(100,10));  
console.log(UserObjectTwo.returnIntAsString(22,1));

