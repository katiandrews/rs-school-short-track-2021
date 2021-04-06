/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let initialDigits = String(n).split('');
  const numbersArray = [];
  for (let i = 0; i < initialDigits.length; i++) {
    initialDigits.splice(i, 1);
    const potentialMax = Number(initialDigits.join(''));
    numbersArray.push(potentialMax);
    initialDigits = String(n).split('');
  }
  let maximal = numbersArray[0];
  for (let j = 1; j < numbersArray.length; j++) {
    if (numbersArray[j] > maximal) {
      maximal = numbersArray[j];
    }
  }
  return maximal;
}

module.exports = deleteDigit;
