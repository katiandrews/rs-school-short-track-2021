/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixCopy = [];
  // create copy of original array;
  for (let i = 0; i < matrix.length; i++) {
    matrixCopy[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      matrixCopy[i].push(matrix[i][j]);
    }
  }
  // check if there is a true around the element;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let counter = 0;
      for (let n = 0; n < 2; n++) {
        if (n === 0) {
          if (matrix[i][j - 1] !== undefined && matrix[i][j - 1] === true) {
            counter++;
          }
          if (matrix[i][j + 1] !== undefined && matrix[i][j + 1] === true) {
            counter++;
          }
        } else {
          for (let x = -1; x < 2; x++) {
            if (matrix[i - n]) {
              if (matrix[i - n][j - x] !== undefined && matrix[i - n][j - x] === true) {
                counter++;
              }
            }
            if (matrix[i + n]) {
              if (matrix[i + n][j - x] !== undefined && matrix[i + n][j - x] === true) {
                counter++;
              }
            }
          }
        }
      }
      matrixCopy[i][j] = counter;
    }
  }
  return matrixCopy;
}

module.exports = minesweeper;
