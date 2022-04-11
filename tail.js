const assertEqual = require('./assertEqual');

// returns the tail of an array (every element but the head)
const tail = function(array) {
  let arrayTail = array.slice(1);

  return arrayTail;
};


// test case 1: check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// test case 2: check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


// test case 3: Single element array
const oneElmt = ["Hi"];
assertEqual(oneElmt.length, 1); // ensure we get back one element
assertEqual(oneElmt[0], "Hi");
assertEqual(oneElmt[0], "Bye");

// test case 4: Empty array
const emptyArr = [];
assertEqual(emptyArr.length, 1); // checks for at least one element
assertEqual(emptyArr[0], "Not Empty");