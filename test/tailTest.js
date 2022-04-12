const assert = require('chai').assert;
const tail = require('../tail');

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