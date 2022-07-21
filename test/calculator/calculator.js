export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => (a / b === -0 ? 0 : a / b),
  multiply: (a, b) => (a * b === -0 ? 0 : a * b),
};
