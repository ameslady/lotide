const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1); 
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5); 
  });

  it("returns 5 for [1,5,2]", () => {
    assert.strictEqual(head([1,5,2]), 1); 
  });

  it("returns \"Hello\" for [\"Hello\", \"Ligthouse\", \"Labs\"]", () => {
    assert.strictEqual(head(["Hello", "Ligthouse", "Labs"]), "Hello"); 
  });

  it("returns \"Hello\" for [\"Hello\", \"Ligthouse\", \"Labs\"]", () => {
    assert.strictEqual(head(["Hello", "Ligthouse", "Labs"]), "Hello"); 
  });

  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1); 
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined); 
  });
});