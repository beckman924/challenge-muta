/**
 * Pads a number or string with leading zeroes to reach a minimum length.
 *
 * @param num - The number or string to pad. Defaults to 0.
 * @param size - The minimum length of the returned string. Defaults to 3.
 * @returns The padded number or string.
 */
export function pad(num: string | number = 0, size: number = 3): string {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}
