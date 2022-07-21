import { caesarCipher } from "./caesarCipher";

describe("Caesar Cipher", () => {
  test("attack at dawn", () => {
    expect(caesarCipher("attack at dawn")).toBe("buubdl bu ebxo");
  });

  test("translate all, shift 3", () => {
    expect(caesarCipher("translate all", 3)).toBe("wudqvodwh doo");
  });

  test("special char, shift 23", () => {
    expect(caesarCipher("'a'=0, 'b'=1, 'c'=2, ... , 'z'=25", 23)).toBe(
      "'x'=0, 'y'=1, 'z'=2, ... , 'w'=25"
    );
  });
});
