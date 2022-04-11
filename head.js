const assertEqual = require('./assertEqual');

// returns the the head of an array
const head = function(array) {
  return array[0];
};

// test cases
assertEqual(head([5,6,7]), 5); // pass
assertEqual(head([1,5,2]), 5); // fail
assertEqual(head(["Hello", "Ligthouse", "Labs"]), "Hello"); // pass
assertEqual(head([1]), 5); // single element array
assertEqual(head([]), 5); // empty array