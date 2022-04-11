const assert = require('chai').assert;
const tail = require('../tail');

// test case 1: check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // test case 2: check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


// // test case 3: Single element array
// const oneElmt = ["Hi"];
// assertEqual(oneElmt.length, 1); // ensure we get back one element
// assertEqual(oneElmt[0], "Hi");
// assertEqual(oneElmt[0], "Bye");

// // test case 4: Empty array
// const emptyArr = [];
// assertEqual(emptyArr.length, 1); // checks for at least one element
// assertEqual(emptyArr[0], "Not Empty");

describe("#tail", () => {
  // test case 1: check the returned array elements
  it("returns \"Lighthouse\" as first element in tail of [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse"); 
  });

  it("returns \"Labs\" as second element in tail of [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs"); 
  });

  it("returns tail length of 2 for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2); 
  });

  it("returns [\"Lighthouse\", \"Labs\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    const array = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(array), ["Lighthouse", "Labs"]); 
  });

  // test case 2: check that original array isn't modified
  it("returns original array length of 3 for [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3); 
  });

  // test case 3: handle single element and empty arrays
  it("returns [] for [\"Yo Yo\"]", () => {
    const words = tail(["Yo Yo"]);
    assert.deepEqual(words, []); 
  });

  it("returns [] for []", () => {
    const emptyArray = [];
    assert.deepEqual(tail(emptyArray), []); 
  });
});