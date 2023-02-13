const { assert } = require("chai");
const AddToList = require("../lib/program");

const AddToListObject = new AddToList();
AddToListObject.setArray("Item One");


describe("Add To List Class Test", function () {
  beforeEach(function () {
    console.log("Running The Test");
  });
  afterEach(function(){
    console.log("Test Is Now Complete");
  })
  it("Test1", function () {
    assert.equal(AddToListObject.getArray()[0], "Item One");
  });
  it("Test2", function() {
    assert.equal(AddToListObject.searchArray("Item One"), true);
  })
  it("Test3", function(){
    assert.equal(AddToListObject.getArrayLength(), 1);
  })
});
