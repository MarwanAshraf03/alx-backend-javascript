const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  // SUM tests
  it("should return 2 for SUM of 1.4 + 1", () => {
    assert.strictEqual(calculateNumber("SUM", 1.4, 1), 2);
  });
  it("should return 4 for SUM of 1 + 3", () => {
    assert.strictEqual(calculateNumber("SUM", 1, 3), 4);
  });
  it("should return 5 for SUM of 1 and 3.7", () => {
    assert.strictEqual(calculateNumber("SUM", 1, 3.7), 5);
  });
  it("should return 5 for SUM of 1.2 and 3.7", () => {
    assert.strictEqual(calculateNumber("SUM", 1.2, 3.7), 5);
  });
  it("should return 6 for SUM of 1.5 and 3.7", () => {
    assert.strictEqual(calculateNumber("SUM", 1.5, 3.7), 6);
  });
  it("should handle negative numbers for SUM", () => {
    assert.strictEqual(calculateNumber("SUM", -1.4, -3.6), -5);
  });
  it("should return 0 for SUM of 0 and 0", () => {
    assert.strictEqual(calculateNumber("SUM", 0, 0), 0);
  });

  // SUBTRACT tests
  it("should return 0 for SUBTRACT of 1.4 - 1", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 1), 0);
  });
  it("should return -2 for SUBTRACT of 1 - 3", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 1, 3), -2);
  });
  it("should return -3 for SUBTRACT of 1 - 3.7", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 1, 3.7), -3);
  });
  it("should return -3 for SUBTRACT of 1.2 - 3.7", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.2, 3.7), -3);
  });
  it("should return -2 for SUBTRACT of 1.5 - 3.7", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.5, 3.7), -2);
  });
  it("should handle negative numbers for SUBTRACT", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", -1.4, -3.6), 3);
  });
  it("should return 0 for SUBTRACT of 0 and 0", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 0, 0), 0);
  });

  // DIVIDE tests
  it("should return 1 for DIVIDE of 1.4 / 1", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 1), 1);
  });
  it("should return 0 for DIVIDE of 1 / 3", () => {
    assert.equal(calculateNumber("DIVIDE", 1, 3), 0.3333333333333333);
  });
  it("should return 0.25 for DIVIDE of 1 / 3.7", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1, 3.7), 0.25);
  });
  it("should return 0.25 for DIVIDE of 1.2 / 3.7", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1.2, 3.7), 0.25);
  });
  it("should return 0.5 for DIVIDE of 1.5 / 3.7", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1.5, 3.7), 0.5);
  });
  it("should handle negative numbers for DIVIDE", () => {
    assert.strictEqual(calculateNumber("DIVIDE", -1.4, -3.6), 0.25);
  });
  it("should return 'Error' for DIVIDE by zero", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1, 0), "Error");
  });
  it("should return 'Error' for 0 / 0", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 0, 0), "Error");
  });
});
