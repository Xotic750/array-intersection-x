function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

import filter from 'array-filter-x';
import reduce from 'array-reduce-x';
import some from 'array-some-x';
import arrayincludes from 'array-includes-x';
import isNil from 'is-nil-x';
var shift = Array.prototype.shift;

var notNill = function notNil(value) {
  return isNil(value) === false;
}; // eslint-disable jsdoc/check-param-names
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


export default function intersection() {
  var _this = this;

  /* eslint-disable-next-line prefer-rest-params */
  var arrays = filter(arguments, notNill);

  if (arrays.length < 1) {
    return [];
  }

  return reduce(shift.call(arrays), function (acc, value) {
    var _this2 = this;

    _newArrowCheck(this, _this);

    var isExcluded = some(arrays, function (array) {
      _newArrowCheck(this, _this2);

      return arrayincludes(array, value) === false;
    }.bind(this)) === false;

    if (isExcluded && arrayincludes(acc, value) === false) {
      acc[acc.length] = value;
    }

    return acc;
  }.bind(this), []);
}

//# sourceMappingURL=array-intersection-x.esm.js.map