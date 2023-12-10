const game = {
  name: "Football",
  yearFounded: 1878,
  greet: () => {
    // the this keyword in arrow function refers to the global scope
    console.log(`Hello, this is ${this.name}`);
  },
  // the function keyword makes is refer to the current object
  greetFn: function () {
    console.log(`Hello, this is ${this.name}`);
  },
  // alternatively, the method could be used within a key value
  noKeyFn() {
    console.log(`Hello, this is an alternative to ${this.name}`);
  },
};

console.log(game.greet());
console.log(game.greetFn());
console.log(game.noKeyFn());
