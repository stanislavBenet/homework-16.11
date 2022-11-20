function MyArrayPrototype() {
  this.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  };
}

function MyArray() {
  this.length = 0;
}

MyArray.prototype = new MyArrayPrototype();

// const array = []; // instance
// console.log(array);

// const myArray = new MyArray();
// console.log(myArray);
