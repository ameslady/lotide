// to be imported from other files eventually
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// to be imported from other files eventually
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// takes in an array and returns the middle-most element(s)
const middle = function(array) {
  let middleElms = [];
  let midPoint = array.length / 2;
  
  // handles arrays with no middle, returns empty array
  if (array.length <= 2) return [];

  // handles odd number of elements
  if (array.length % 2 === 1) {
    middleElms.push(array[Math.floor(midPoint)]);
    return middleElms;
  // handles even number of elements
  } else {
    middleElms.push(array[midPoint - 1]);
    middleElms.push(array[midPoint]);
    return middleElms;
  }
};

// test cases
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]