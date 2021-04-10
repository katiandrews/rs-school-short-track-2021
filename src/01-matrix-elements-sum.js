/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arrCopy = matrix;
  let sum = 0;
  for (let i = 0; i < arrCopy.length; i++) {
    for (let j = 0; j < arrCopy[i].length; j++) {
      if (i === 0) {
        sum += arrCopy[i][j];
      } else if (arrCopy[i - 1][j] !== 0) {
        sum += arrCopy[i][j];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
