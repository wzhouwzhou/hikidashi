import m from '@/safe/math/multiply';
import { multiply as m2 } from '@/safe';
import { safe } from '@';

describe.each([m, m2, safe.multiply])('%# - safe multiply', multiply => {
  test('multiply default arg values to equal 1', () => {
    expect(multiply()).toBe(1);
  });

  test('multiples 5 * 2 to equal 10', () => {
    expect(multiply(5, 2)).toBe(10);
  });

  test('multiples 5 * -2 to equal -10', () => {
    expect(multiply(5, -2)).toBe(-10);
  });

  test('multiples -5 * 7 to equal -35', () => {
    expect(multiply(-5, 7)).toBe(-35);
  });

  test('multiples \'5\' * 7 to equal -2', () => {
    expect(multiply('5', 7)).toBe(35);
  });

  test('multiples 5 * \'7\' to equal 35', () => {
    expect(multiply(5, '7')).toBe(35);
  });

  test('multiples \'5\' * \'7\' to equal 35', () => {
    expect(multiply('5', '7')).toBe(35);
  });

  test('multiples \'5\' * \'-7\' to equal -35', () => {
    expect(multiply('5', '-7')).toBe(-35);
  });
});
