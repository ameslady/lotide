// to be imported from other files eventually
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// returns the the head of an array
const head = function(array) {
  return array[0];
};

// test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head([1,5,2]), 5);
assertEqual(head(["Hello", "Ligthouse", "Labs"]), "Hello");
assertEqual(head([1]), 5); // single element array
assertEqual(head([]), 5); // empty array