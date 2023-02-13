module.exports = class AddToList{
    constructor(){
        this.array = [];
    }

    setArray(item){
        this.array.push(item);
    }

    getArray(){
        return this.array;
    }

    getArrayLength(){
        return this.array.length;
    }

    removeItem(item){
        this.array.filter((element) => element === item);
    }

    searchArray(item){
        return this.array.includes(item);
    }


}