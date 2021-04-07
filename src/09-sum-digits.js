/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const array = String(n).split('');
  if (array.length === 1) {
    return n;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
    sum += array[i];
  }
  return getSumOfDigits(sum);
}

module.exports = getSumOfDigits;
