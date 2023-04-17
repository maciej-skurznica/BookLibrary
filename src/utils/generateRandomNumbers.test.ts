import generateRandomNumbers from "./generateRandomNumbers";

describe("generateRandomNumbers", () => {
  // Test: should generate an array of the correct length
  it("should generate an array of the correct length", () => {
    // ARRANGE
    const length = 5;
    const from = 2;
    const to = 18;

    // ACT
    const numbers = generateRandomNumbers(length, from, to);

    // EXPECT
    expect(numbers.length).toBe(length);
  });

  // Test: should generate numbers within the specified range
  it("should generate numbers within the specified range", () => {
    // ARRANGE
    const length = 5;
    const from = 2;
    const to = 18;

    // ACT
    const numbers = generateRandomNumbers(length, from, to);

    // EXPECT
    numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(from);
      expect(number).toBeLessThanOrEqual(to);
    });
  });

  // Test: should generate unique numbers
  it("should generate unique numbers", () => {
    // ARRANGE
    const length = 5;
    const from = 2;
    const to = 18;

    // ACT
    const numbers = generateRandomNumbers(length, from, to);

    // EXPECT
    const uniqueNumbers = new Set(numbers);
    expect(uniqueNumbers.size).toBe(length);
  });
});
