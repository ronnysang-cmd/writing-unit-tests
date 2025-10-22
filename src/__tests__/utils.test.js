import { pointsForWord, isPalindrome } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";

    const points = pointsForWord(word);

    expect(points).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";

    const points = pointsForWord(word);

    expect(points).toBe(7);
  });
});

describe("isPalindrome", () => {
  it("returns true for palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for non-palindromes", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("handles uppercase and lowercase letters", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws error for non-alphabetic characters", () => {
    expect(() => isPalindrome("race123car")).toThrow();
  });

  it("throws error for non-string input", () => {
    expect(() => isPalindrome(123)).toThrow();
  });
});