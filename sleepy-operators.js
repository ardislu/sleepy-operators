/** @module sleepy-operators */

/** Internal helper function that converts setTimeout into a promise. */
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * The classic sleep sort!
 * @param {number[]} arr - An array of numbers to sort. Works best with small numbers :)
 * @returns {Promise<number[]>} A promise that resolves to the sorted array.
 */
export async function sort(arr) {
  const output = [];

  await Promise.all(arr.map(i => (async () => {
    await sleep(Math.abs(i));
    i >= 0 ? output.push(i) : output.unshift(i);
  })()));

  return output;
}

/**
 * Sleepily add together a bunch of numbers to get an approximate sum. The returned sum will
 * be greater than the true sum by about 5-15 per input number.
 * @param {number[]} arr An array of numbers to sum together.
 * @returns {Promise<number>} A promise that resolves to the approximate sum of all the numbers in the input array.
 */
export async function sum(arr) {
  const start = performance.now();
  for (const i of arr) {
    await sleep(i);
  }
  const end = performance.now();

  return end - start;
}