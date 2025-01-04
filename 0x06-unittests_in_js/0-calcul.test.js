import assert from "node:assert";
import calculateNumber from "./0-calcul.js";

// describe("calculateNumber", () => {
//   it("should return 2 for 1.4 + 1", () => {
//     assert.strictEqual(calculateNumber(1.4, 1), 2);
//   });
//   it("should return 4 when adding 1 and 3", () => {
//     assert.strictEqual(calculateNumber(1, 3), 4);
//   });
//   it("should return 5 when adding 1 and 3.7", () => {
//     assert.strictEqual(calculateNumber(1, 3.7), 5);
//   });
//   it("should return 5 when adding 1.2 and 3.7", () => {
//     assert.strictEqual(calculateNumber(1.2, 3.7), 5);
//   });
//   it("should return 6 when adding 1.5 and 3.7", () => {
//     assert.strictEqual(calculateNumber(1.5, 3.7), 6);
//   });
//   it("should handle negative numbers correctly", () => {
//     assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
//   });
//   it("should handle zero correctly", () => {
//     assert.strictEqual(calculateNumber(0, 0), 0);
//   });
// });

// const assert = require("assert");
// const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("should return 4 when inputs are (1, 3)", () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("should return 5 when inputs are (1, 3.7)", () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it("should return 5 when inputs are (1.2, 3.7)", () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it("should return 6 when inputs are (1.5, 3.7)", () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it("should handle negative numbers correctly", () => {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
  });

  it("should handle zero correctly", () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
