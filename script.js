let a = 6;
let b = 3;

const add = function (a, b) {
    return a + b;
  };
  
const subtract = function (a, b) {
    return a - b;
  };
  
const sum = function (array) {
    return array.reduce((total, current) => total + current, 0);
  };
  
const multiply = function (array) {
    return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
  };
