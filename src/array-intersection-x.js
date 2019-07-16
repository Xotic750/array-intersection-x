import filter from 'array-filter-x';

import reduce from 'array-reduce-x';
import some from 'array-some-x';
import arrayincludes from 'array-includes-x';
import isNil from 'is-nil-x';

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
 */
export default function intersection() {
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
}
