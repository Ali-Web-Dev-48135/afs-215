module.exports = class Calculator {
  constructor(operation, num1, num2) {
    this.operation = operation;
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    if (this.operation === "add") {
      return this.num1 + this.num2;
    }
  }

  subtract() {
    if (this.operation === "subtract") {
      return this.num1 - this.num2;
    }
  }

  multiply() {
    if (this.operation === "multiply") {
      return this.num1 * this.num2;
    }
  }

  divide() {
    if (this.operation === "divide") {
      if (this.num1 === 0 || this.num2 === 0) {
        return "Can't Divide By Zero.";
      }
    }
    return this.num1 / this.num2;
  }
};
