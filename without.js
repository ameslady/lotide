// removes any specified unwanted elements from an aray (should modify source array)
const without = function(source, itemsToRemove) {
  
  const subsetArray = source.filter(element => !itemsToRemove.includes(element));
  
  return subsetArray;
};

module.exports = without;

// Test cases to be moved to their own file:
// console.log(without([1, 2, 3], [1])); // [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // ["1", "2"]

// assertArraysEqual(without(["1", "2", "3","88"], [1, 2, "3", "4", 6, 4, 3]),["1","2"]); // ["1", "2", "88"] fail
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3", "4", 6, 4, 3]),["1","2"]); // ["1", "2"] pass
// assertArraysEqual(without(["1", "2", "3"], ["3", 2, 1, "4", 6, 4, 3]),["1","2"]); // ["1", "2"] pass


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// ensures the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); // pass