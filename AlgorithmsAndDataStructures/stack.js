/*
 * Implementation of Stack abstract data type using class.
 */
class Stack {
    constructor () {
        this._size = 0;
        this._storage = {};
    }
}

Stack.prototype.push = function(data) {
    var size = ++this._size;
    this._storage[size] = data;
};

Stack.prototype.pop = function() {
    var size = this._size;
    var deletedData;

    if (size) {
        deletedData = this._storage[size];

        delete this._storage[size];
        this._size--;
    }
    return deletedData;
};

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(['1', 2]);
stack.push('world');

console.log('stack')
console.log(stack.pop()); // 'world'
console.log(stack.pop()); // ['1', 2]
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1

/*
 * Example of Stack using built-in Array.
 */
var arrayStack = [];
arrayStack.push(1);
arrayStack.push(2);
arrayStack.push(['1', 2]);
arrayStack.push('world');

console.log('\narrayStack');
console.log(arrayStack.pop()); // 'world'
console.log(arrayStack.pop()); // ['1', 2]
console.log(arrayStack.pop()); // 2
console.log(arrayStack.pop()); // 1
