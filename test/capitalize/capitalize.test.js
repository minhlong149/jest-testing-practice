import { capitalize } from "./capitalize";

describe("first character capitalized", () => {
  test("word all lowercase", () => {
    expect(capitalize("virus")).toBe("Virus");
  });

  test("word all uppercase", () => {
    expect(capitalize("MATRIX")).toBe("MATRIX");
  });

  test("random word lowercase", () => {
    expect(capitalize("eXPlicIT")).toBe("EXPlicIT");
  });

  test("random word uppercase", () => {
    expect(capitalize("EXPlicIT")).toBe("EXPlicIT");
  });

  test("one letter lowercase", () => {
    expect(capitalize("s")).toBe("S");
  });

  test("one letter uppercase", () => {
    expect(capitalize("S")).toBe("S");
  });

  test("no word", () => {
    expect(capitalize("")).toBe("");
  });

  test("number", () => {
    expect(capitalize("9clound")).toBe("9clound");
  });

  test("weird char", () => {
    expect(capitalize("@#OhmY&**")).toBe("@#OhmY&**");
  });

  test("sentence", () => {
    expect(
      capitalize("if you're here, you're likely looking to find random words.")
    ).toBe("If you're here, you're likely looking to find random words.");
  });
});
