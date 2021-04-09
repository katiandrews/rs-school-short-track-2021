/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const tempArray = [];
  const arrCopy = arr;
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] !== -1) {
      tempArray.push(arr[i]);
    }
  }
  for (let i = 0; i < tempArray.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < tempArray.length; j++) {
      if (tempArray[j] < tempArray[min]) {
        min = j;
      }
    }
    const temp = tempArray[min];
    tempArray[min] = tempArray[i];
    tempArray[i] = temp;
  }
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] !== -1) {
      arrCopy[i] = tempArray.shift();
    }
  }
  return arrCopy;
}

module.exports = sortByHeight;
