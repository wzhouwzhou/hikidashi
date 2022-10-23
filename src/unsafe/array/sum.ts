import type { ArrayLike } from '@/shared/generics';

/**
 * Adds all elements in an array together.
 *
 * @remarks
 *
 * This implementation loops in reverse order.
 *
 * @param arr - The array to sum.
 *
 * @returns number - The sum of the elements
 */
const sum = (arr: ArrayLike): number => {
  let i = arr.length, result = 0;
  while (i--) result += arr[i];
  return result;
};
export default sum;
