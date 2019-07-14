/**
 * @file Creates an array of unique values that are included in all given arrays.
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module array-intersection-x
 */

const filter = require('array-filter-x');
const reduce = require('array-reduce-x');
const some = require('array-some-x');
const arrayincludes = require('array-includes-x');
const isNil = require('is-nil-x');

const {shift} = Array.prototype;

const notNill = function _notNil(value) {
  return isNil(value) === false;
};

/**
 * This method creates an array of unique values that are included in all given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {...Array} [array] - The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 * var intersection = require('array-intersection-x');
 *
 * intersection([2, 1], [2, 3]); // => [2]
 */
module.exports = function intersection() {
  const arrays = filter(arguments, notNill);

  if (arrays.length < 1) {
    return [];
  }

  return reduce(
    shift.call(arrays),
    function(acc, value) {
      const isExcluded =
        some(arrays, function(array) {
          return arrayincludes(array, value) === false;
        }) === false;

      if (isExcluded && arrayincludes(acc, value) === false) {
        acc[acc.length] = value;
      }

      return acc;
    },
    [],
  );
};
