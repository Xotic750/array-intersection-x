import filter from 'array-filter-x';
import reduce from 'array-reduce-x';
import some from 'array-some-x';
import arrayincludes from 'array-includes-x';
import isNil from 'is-nil-x';

const {shift} = [];

const notNill = function notNil(value) {
  return isNil(value) === false;
};

const createReducer = function createReducer(arrays) {
  return function reducer(acc, value) {
    const isIncluded = some(arrays, function exclude(array) {
      return arrayincludes(array, value) === false;
    });

    if (isIncluded === false && arrayincludes(acc, value) === false) {
      acc[acc.length] = value;
    }

    return acc;
  };
};

// eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature
/**
 * This method creates an array of unique values that are included in all given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {...Array} [array] - The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 */
// eslint-enable jsdoc/check-param-names
const intersection = function intersection() {
  const arrays = filter(arguments, notNill); /* eslint-disable-line prefer-rest-params */

  if (arrays.length < 1) {
    return [];
  }

  return reduce(shift.call(arrays), createReducer(arrays), []);
};

export default intersection;
