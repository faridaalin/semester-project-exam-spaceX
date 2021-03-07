import { validateEmail } from '../validateEmail';

// Unit test
describe('check if input length is 0, return boolean', () => {
  test('should return true', () => {
    expect(validateEmail('farida@gmail.com')).toBe(true);
  });
  test('should return false', () => {
    expect(validateEmail('farida@gmail')).toBe(false);
  });
});
