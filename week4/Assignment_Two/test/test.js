const {assert} = require("chai");
const returnOne = require("../lib/Evening");
const returnTwo = require("../lib/Evening");
const returnGoodMorning = require('../lib/Evening');
const returnAsString = require("../lib/Evening");
const goodAfternoon = require("../lib/Evening");
const goodEvening = require("../lib/Evening");

describe("Check To See If '1' Is Returned.", function () {
    describe("Test '1' Is Returned.", function () {
      it("Should return '1' ", function () {
        assert.equal(returnOne.returOne(1), '1');
      });
    });
  });
  
  describe("Check To See If '2' Is Returned.", function () {
    describe("Test '2' Is Returned.", function () {
      it("Should return '2' ", function () {
        assert.equal(returnTwo.returnTwo(2), '2');
      });
    });
  });

  describe("Check To See If Good Morning Is Returned.", function () {
    describe("Test Good Morning Is Returned.", function () {
      it("Should return 'Good Morning' ", function () {
        assert.equal(returnGoodMorning.goodMorning(3), 'Good Morning');
      });
    });
  });
  
  describe("Check To See If A String Is Returned.", function () {
    describe("Test A String Is Returned.", function () {
      it("Should return '8' ", function () {
        assert.equal(returnAsString.returnAsString(8), '8');
      });
    });
  });

    
  describe("Check To See If Good Afternoon Is Returned.", function () {
    describe("Test Good Afternoon Is Returned.", function () {
      it("Should return 'Good Afternoon' ", function () {
        assert.equal(goodAfternoon.goodAfternoon(14), 'Good Afternoon');
      });
    });
  });
  
  
  describe("Check To See If Good Evening Is Returned.", function () {
    describe("Test Good Evening Is Returned.", function () {
      it("Should return 'Good Evening' ", function () {
        assert.equal(goodEvening.goodEvening(15), 'Good Evening');
      });
    });
  });
  
  
  


