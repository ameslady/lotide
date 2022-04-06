// to be imported from other files eventually
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// to be imported from other files eventually
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// takes in an array and returns the middle-most element(s)
const middle = function(array) {
  // for arrays with 1-2 elements, there is not middle, return empty array
  if (array.length <= 2) return [];

  // for arrays with odd number of elements, an array with a single middle element should be returned
  let middleElms = [];
  if (array.length % 2 === 1) {
    middleElms.push(array[Math.floor(array.length / 2)]);
    return middleElms;
  // for arrays with an even number of elements, an array with the two elements in the middle should be returned
  } else {
    middleElms.push(array[middle - 1]);
    middleElms.push(array[middle]);
    return middleElms;
  }
};

// test cases
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
