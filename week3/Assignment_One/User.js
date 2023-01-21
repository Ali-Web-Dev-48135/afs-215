module.exports = class User {
    
    constructor(num1, num2, name = "John Doe", age = 22) {
      this.num1 = num1;
      this.num2 = num2;
      this.name = name;
      this.age = age;
    }
  
    static add(num1, num2) {
      return num1 + num2;
    }
  
    static subtract(num1, num2) {
      return num1 - num2;
    }
  
    static multiply(num1, num2) {
      return num1 * num2;
    }
  
    static divide(num1, num2) {
      if (num1 <= 0 || num2 <= 0) {
        return "Dividing by zero is not allowed!";
      }
      return num1 / num2;
    }
    
    greetUser(){
        return `Hello ${this.name}, You Are ${this.age} Years Old.`
    }

    // Function to return numbers as string and adds them as strings.
    returnIntAsString(num1, num2){
        return num1.toString() + num2.toString();
    }
    
  }
  