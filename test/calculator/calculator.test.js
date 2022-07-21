import { calculator } from "./calculator";

describe("add operations", () => {
  test("add positive", () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  test("add zero", () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test("add negative", () => {
    expect(calculator.add(-3, 1)).toBe(-2);
  });

  test("add floating point", () => {
    expect(calculator.add(1.7, 1)).toBe(2.7);
  });
});

describe("subtract operations", () => {
  test("subtract positive", () => {
    expect(calculator.subtract(3, 1)).toBe(2);
  });

  test("subtract zero", () => {
    expect(calculator.subtract(-4, -4)).toBe(0);
  });

  test("subtract negative", () => {
    expect(calculator.subtract(-3, 1)).toBe(-4);
  });

  test("subtract floating point", () => {
    expect(calculator.subtract(1.7, 1)).toBe(0.7);
  });
});

describe("divide operations", () => {
  test("divide positive", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test("divide zero", () => {
    expect(calculator.divide(0, -7)).toBe(-0);
  });

  test("divide negative", () => {
    expect(calculator.divide(-3, 1)).toBe(-3);
  });

  test("divide negative floating point", () => {
    expect(calculator.divide(1, -0.5)).toBe(-2);
  });
});

describe("multiply operations", () => {
  test("multiply positive", () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });

  test("multiply zero", () => {
    expect(calculator.multiply(0, -7)).toBe(0);
  });

  test("multiply negative", () => {
    expect(calculator.multiply(-3, -2)).toBe(6);
  });

  test("multiply negative floating point", () => {
    expect(calculator.multiply(2, -0.5)).toBe(-1);
  });
});
