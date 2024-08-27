"use strict";

var _main = require("./main.js");
test('should capitalize the first letter of a string', () => {
  expect((0, _main.capitalize)('bunny')).toBe('Bunny');
});
test('should return a reversed string', () => {
  expect((0, _main.reverseString)('twelve')).toBe('evlewt');
});
describe('Calculator', () => {
  test('should add two numbers', () => expect(_main.calculator.add(3, 4)).toBe(7));
  test('should subtract two numbers', () => expect(_main.calculator.subtract(101, 62)).toBe(39));
  test('should multipy two numbers', () => expect(_main.calculator.multipy(3, 4)).toBe(12));
  test('should divide two numbers', () => expect(_main.calculator.divide(36, 12)).toBe(3));
});
describe('Text encryption', () => {
  test('basic example', () => expect((0, _main.caesarCipher)('mateo', 1)).toBe('nbufp'));
  test('text wrapping', () => expect((0, _main.caesarCipher)('xyz', 5)).toBe('cde'));
  test('case preservation', () => expect((0, _main.caesarCipher)('HeLLo', 3)).toBe('KhOOr'));
  test('punctuation', () => expect((0, _main.caesarCipher)('Hello, World!', 5)).toBe('Mjqqt, Btwqi!'));
  test('large shift factor', () => expect((0, _main.caesarCipher)('banana', 466)).toBe('zylyly'));
});
describe('analyzeArray', () => {
  test('even number of elements', () => {
    expect((0, _main.analyzeArray)([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });
  test('uneven number of elements', () => {
    expect((0, _main.analyzeArray)([9, 11, 2, 7, 5])).toEqual({
      average: 6.8,
      min: 2,
      max: 11,
      length: 5
    });
  });
  test('empty array', () => {
    //error throwing call is wrapped in a function here because toThrow() expects a function to be passed
    expect(() => (0, _main.analyzeArray)([])).toThrow('Empty array received');
  });
});