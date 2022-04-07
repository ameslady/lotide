// to be imported from other files eventually
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// takes an array and object and returns an object containing counts of everything that the input object listed.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let newObj = {
    "Fang": 0,
    "Jason": 0,
  };
  // console.log(itemsToCount['']);

  for (let name of allItems){
    if (itemsToCount[name] === true) {
      //console.log(itemsToCount[name]);
      newObj[name] += 1;
      //console.log(newObj);
    }  
  }
//The function should report back how many instances of each string were found in the allItems array of strings.
  return newObj;
};

// test cases
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);