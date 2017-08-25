'use strict';

var intersection;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  intersection = require('../../index.js');
} else {
  intersection = returnExports;
}

var LARGE_ARRAY_SIZE = 200;
var args = (function () {
  return arguments;
}(1, 2, 3));

describe('intersection', function () {
  it('is a function', function () {
    expect(typeof intersection).toBe('function');
  });

  it('should return the intersection of the given arrays', function () {
    var actual = intersection([
      1,
      3,
      2
    ], [
      5,
      2,
      1,
      4
    ], [2, 1]);

    expect(actual).toEqual([1, 2]);
  });

  it('should return an array of unique values', function () {
    var actual = intersection([
      1,
      1,
      3,
      2,
      2
    ], [
      5,
      2,
      2,
      1,
      4
    ], [
      2,
      1,
      1
    ]);

    expect(actual).toEqual([1, 2]);
  });

  it('should match `NaN`', function () {
    var actual = intersection([
      1,
      NaN,
      3
    ], [
      NaN,
      5,
      NaN
    ]);

    expect(actual.length).toBe(1);
    expect(actual[0]).not.toBe(actual[0]);
  });

  it('should work with large arrays of objects', function () {
    var object = {};
    var largeArray = new Array(LARGE_ARRAY_SIZE).fill(object);

    expect(intersection([object], largeArray)).toEqual([object]);
    largeArray = new Array(LARGE_ARRAY_SIZE).fill().map(Number.call, Number);
    expect(intersection(largeArray, [1])).toEqual([1]);
  });

  it('should work with large arrays of `NaN`', function () {
    var largeArray = new Array(LARGE_ARRAY_SIZE).fill(NaN);
    var actual = intersection([
      1,
      NaN,
      3
    ], largeArray);
    expect(actual.length).toBe(1);
    expect(actual[0]).not.toBe(actual[0]);
  });

  it('should work with `arguments` objects', function () {
    var array = [
      0,
      1,
      null,
      3
    ];
    var expected = [1, 3];

    expect(intersection(array, args)).toEqual(expected);
    expect(intersection(args, array)).toEqual(expected);
  });

  it('should work with a single array', function () {
    var actual = intersection([
      1,
      1,
      3,
      2,
      2
    ]);

    expect(actual).toEqual([
      1,
      3,
      2
    ]);
  });

  it('should treat values that are not arrays or `arguments` objects as empty', function () {
    var array = [
      0,
      1,
      null,
      3
    ];

    expect(intersection(array, 3, { 0: 1 }, null)).toEqual([]);
    expect(intersection(null, array, null, args, null)).toEqual([1, 3]);
    expect(intersection(array, null, args, null)).toEqual([1, 3]);
  });
});
