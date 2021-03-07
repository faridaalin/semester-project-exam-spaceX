import { checkInputLength } from '../checkInputLength';

// Unit test
describe('check if input length is 0, return boolean', () => {
  test('should return true', () => {
    expect(checkInputLength(0)).toBe(true);
  });
  test('should return false', () => {
    expect(checkInputLength(2)).toBe(false);
  });
});

// Integration test - function that uses other functions and have other dependencies
// should take a input and return somehint

// End to End test - functions that interacts with the DOM
// Dont need input or return output
