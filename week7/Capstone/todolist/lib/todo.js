module.exports = class ToDoList {
  constructor() {
    this.array = [];
  }

  addItemToArray(item) {
    return this.array.push(item);
  }
  addMultipleItemsToArray(...itemsToAdd) {
    return this.array.push(...itemsToAdd);
  }
  removeFirstItem() {
   return this.array.splice(0, 1);
  }
  removeLastItem() {
    return this.array.pop();
  }
  removeSpecificItem(item) {
    const itemToRemove = this.array.find((items) => items === item);
    const itemIndex = this.array.findIndex(
      (itemIndex) => itemIndex === itemToRemove
    );
    return this.array.splice(itemIndex, 1);
  }
};
