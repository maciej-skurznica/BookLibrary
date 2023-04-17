import randomNumber from "./randomNumber";

describe("randomNumber", () => {
  // Test: should generate a number within the specified range
  it("should generate a number within the specified range", () => {
    // ARRANGE
    const from = 2;
    const to = 18;
    const toFix = 2;

    // ACT
    const randNum = randomNumber(from, to, toFix);

    // EXPECT
    expect(randNum).toBeGreaterThanOrEqual(from);
    expect(randNum).toBeLessThanOrEqual(to);
  });

  // Test: should generate a number with the correct number of decimal places
  it("should generate a number with the correct number of decimal places", () => {
    // ARRANGE
    const from = 2;
    const to = 18;
    const toFix = 2;

    // ACT
    const randNum = randomNumber(from, to, toFix);
    const decimalPlaces = (randNum.toString().split(".")[1] || "").length;

    // EXPECT
    expect(decimalPlaces).toBe(toFix);
  });
});
