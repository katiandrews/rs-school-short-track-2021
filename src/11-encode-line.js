/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let sum = 0;
    if (str[i] === str[i + 1] || str[i] === str[i - 1]) {
      for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
          sum++;
        }
      }
      if (str[i] === str[i - 1] && str[i] !== str[i + 1]) {
        result += sum + str[i];
      }
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = encodeLine;
