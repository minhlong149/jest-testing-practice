const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const isAlphabet = (char: string) => alphabet.indexOf(char) !== -1;

function caesarCipher(string: string, shift = 1) {
  let newString: string = "";

  for (let i = 0; i < string.length; i++) {
    if (isAlphabet(string[i])) {
      const newIndex = alphabet.indexOf(string[i]) + shift;
      newString += alphabet[newIndex % alphabet.length];
    } else newString += string[i];
  }

  return newString;
}
export { caesarCipher };
