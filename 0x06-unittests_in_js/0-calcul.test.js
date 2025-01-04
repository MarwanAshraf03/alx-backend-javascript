import assert from "node:assert";
import calculateNumber from "./0-calcul.js";

describe("calculateNumber", () => {
  it("should return 2 for 1.4 + 1", () => {
    assert.equal(calculateNumber(1.4, 1), 2);
  });
  it("should return 4 when adding 1 and 3", () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it("should return 5 when adding 1 and 3.7", () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it("should return 5 when adding 1.2 and 3.7", () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it("should return 6 when adding 1.5 and 3.7", () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
