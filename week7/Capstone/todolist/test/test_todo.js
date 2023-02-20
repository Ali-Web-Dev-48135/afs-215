const { assert } = require("chai");
const ToDoList = require("../lib/todo");

const toDoObject = new ToDoList();




describe("Add an item to the list", function () {
  beforeEach(function () {
    console.log("Running the todo list app.");
  });
  afterEach(function(){
    console.log(toDoObject.array); // Printing the todo list to the terminal.
  })
  it("Test1", function () {
    assert.equal(toDoObject.addItemToArray("Socks"), toDoObject.array[0] === "Socks");
  });
  it("Test2", function() {
    assert.equal(toDoObject.addMultipleItemsToArray("Laptop", "Monitor"), 3);
  })
  it("Test3", function(){
    assert.equal(toDoObject.removeFirstItem(),"Socks" );
  })
  it("Test4", function(){
    assert.equal(toDoObject.removeLastItem(), "Monitor");
  })
  it("Test5", function(){
    assert.equal(toDoObject.removeSpecificItem("Laptop"), "Laptop");
  })
});
