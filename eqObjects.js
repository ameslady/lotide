// to be imported from other files eventually
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// to be imported from other files eventually
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(obj1, obj2) {
  let objKeys1 = Object.keys(obj1);
  let objKeys2 = Object.keys(obj2);
  // console.log(objKeys1.length);
  // console.log(objKeys2.length);

  if (objKeys1.length !== objKeys2.length) return false;

  for (let key of objKeys1) {
    if (obj1[key] !== obj2[key]) {
      //console.log("Match: " + obj1[key] +" "+ obj2[key]);
      return false;
    } 
  }
  return true;
};

// test case: step 2
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// //console.log(eqObjects(ab, ba));

// test case: step 3
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false