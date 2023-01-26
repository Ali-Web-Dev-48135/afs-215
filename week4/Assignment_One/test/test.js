const { assert } = require("chai");
const Calculator = require("../lib/Calculator");

// Test The Addition Result.
const addTestObject = new Calculator("add", 4, 9);
const subtractTestObject = new Calculator("subtract", 10,  5);
const multiplyTestObject = new Calculator("multiply", 10, 10);
const divisionTestObject = new Calculator("divide", 10 , 5);

describe("Check To See If 13 Is The Total From 4 + 9?", function () {
  describe("Test 13 Returned", function () {
    it("Should return 13", function () {
      assert.equal(addTestObject.add(), 13);
    });
  });
});

describe("Check To See If 5 Is The Remainder From 10 - 5?", function () {
    describe("Test 5 Is Returned.", function () {
      it("Should return 5", function () {
        assert.equal(subtractTestObject.subtract(),  5);
      });
    });
  });
  
  describe("Check To See If 100 Is The Result Of 10 * 10?", function () {
    describe("Test 100 Is The Result.", function () {
      it("should return 100", function () {
        assert.equal(multiplyTestObject.multiply(), 100);
      });
    });
  });

  describe("Check To See If 2 Is The Result Of 10 / 5?", function () {
    describe("Test 2 Is The Result From 10 /5", function () {
      it("Should return 2", function () {
        assert.equal(divisionTestObject.divide(), 2);
      });
    });
  });
  
  


