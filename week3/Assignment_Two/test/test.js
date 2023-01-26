const { assert } = require("chai");

// Requiring the class created (NumberClass).
const NumberClass = require("../lib/NumberClass");

// Actual Class Object To Instantiate the Number Class.
const goodMorningClassObject = new NumberClass(3);
const goodAfternoonClassObject = new NumberClass(7);
const goodEveningClassObject = new NumberClass(21);
const neitherSevenOrThreeClasObject = new NumberClass(5);
const errorMessageClasObject = new NumberClass("Hello World");


describe("Good Morning Returned?", function () {
  describe("Test Good Morning Returned", function () {
    it("Should return good morning", function () {
      assert.equal(goodMorningClassObject.testuserinput(), "Good Morning");
    });
  });
});


describe("Good Afternoon Returned?", function () {
  describe("Test Good Afternoon Returned", function () {
    it("Should return good afternoon", function () {
      assert.equal(goodAfternoonClassObject.testuserinput(), "Good Afternoon");
    });
  });
});

describe("Good Evening Returned?", function () {
  describe("Test Good Evening Returned", function () {
    it("Should return good evening", function () {
      assert.equal(goodEveningClassObject.testuserinput(), "Good Evening");
    });
  });
});

describe("Return Number As String?", function () {
  describe("Test Number Returned As A String", function () {
    it("Should return A String", function () {
      assert.typeOf(neitherSevenOrThreeClasObject.testuserinput(), 'string');
    });
  });
});

describe("Good Afternoon Returned?", function () {
  describe("Test Good Afternoon Returned", function () {
    it("Should return good afternoon", function () {
      assert.equal(goodAfternoonClassObject.testuserinput(), "Good Afternoon");
    });
  });
});
describe("Error Returned?", function () {
  describe("Test Error Message Returned", function () {
    it("Should return error message", function () {
      assert.typeOf(errorMessageClasObject.testuserinput(), 'string');
    });
  });
});

