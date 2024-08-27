export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string.charAt(i);
  }

  return reversed;
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

const getShifted = function getShiftedLetter(char, shiftFactor) {
  if (!char.match(/[A-Za-z]/)) return char;

  //subtracting 26 because for 25 other letters in front and the letter we are on (25+1)
  while (shiftFactor > 25) shiftFactor = shiftFactor - 26;

  const code = char.charCodeAt() + shiftFactor;
  let letterFromCode = String.fromCharCode(code);

  if ((letterFromCode > 'Z' && letterFromCode < 'a') || letterFromCode > 'z') {
    letterFromCode = String.fromCharCode(code - 26);
  }

  return letterFromCode;
};

export function caesarCipher(string, shiftFactor) {
  let encrypted = '';

  for (const char of string) {
    encrypted += getShifted(char, shiftFactor);
  }

  return encrypted;
}

export function analyzeArray(array) {
  if (array.length === 0) throw new Error('Empty array received');

  return {
    average: array.reduce((prev, cur) => prev + cur, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
