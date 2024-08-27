import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './main.js';

test('capitalize should return string with the first letter converted to uppercase', () => {
  expect(capitalize('bunny')).toBe('Bunny');
});

test('reverseString should return a reversed string', () => {
  expect(reverseString('twelve')).toBe('evlewt');
});

describe('Calculator', () => {
  test('add should add two numbers', () =>
    expect(calculator.add(3, 4)).toBe(7));
  test('subtract should subtract two numbers', () =>
    expect(calculator.subtract(101, 62)).toBe(39));
  test('multiply should multiply two numbers', () =>
    expect(calculator.multiply(3, 4)).toBe(12));
  test('divide should divide two numbers', () =>
    expect(calculator.divide(36, 12)).toBe(3));
});

describe('caesarCipher', () => {
  test('should shift each letter by given number of positions in the alphabet', () =>
    expect(caesarCipher('mateo', 1)).toBe('nbufp'));
  test('should wrap around the end of the alphabet when shifting', () =>
    expect(caesarCipher('xyz', 5)).toBe('cde'));
  test('should preserve the case of the letters during shifting', () =>
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr'));
  test('should preserve punctuation', () =>
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!'));
  test('should handle large shift factors by reducing them', () =>
    expect(caesarCipher('banana', 466)).toBe('zylyly'));
});

describe('analyzeArray when input is', () => {
  test('even number of elements', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test('uneven number of elements', () => {
    expect(analyzeArray([9, 11, 2, 7, 5])).toEqual({
      average: 6.8,
      min: 2,
      max: 11,
      length: 5,
    });
  });
  test('empty array', () => {
    //error throwing call is wrapped in a function here because toThrow() expects a function to be passed
    expect(() => analyzeArray([])).toThrow('Empty array received');
  });
});
