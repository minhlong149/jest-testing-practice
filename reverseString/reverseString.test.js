import { reverseString } from "./reverseString";

describe("returns a reversed string", () => {
  test("odd string", () => {
    expect(reverseString("abcde")).toBe("edcba");
  });
  
  test('even string', () => {
    expect(reverseString("Ohmy")).toBe("ymhO");
  });

  test("empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test('num+cha', () => {
    expect(reverseString("58#$")).toBe("$#85");
  });
});
