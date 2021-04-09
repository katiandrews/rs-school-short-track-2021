/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const domainsCopy = domains;
  for (let i = 0; i < domainsCopy.length; i++) {
    const tempArray = [];
    domainsCopy[i] = domainsCopy[i].split('.').reverse();
    for (let j = 0; j < domainsCopy[i].length; j++) {
      tempArray.push(domainsCopy[i][j]);
      const temp = tempArray.join('.');
      if (obj[`.${temp}`]) {
        obj[`.${temp}`]++;
      } else {
        obj[`.${temp}`] = 1;
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
