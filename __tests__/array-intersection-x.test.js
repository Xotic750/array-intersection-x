import intersection from '../src/array-intersection-x';

describe('intersection', function() {
  let LARGE_ARRAY_SIZE;
  let args;

  beforeEach(function() {
    args = (function() {
      return arguments;
    })(1, 2, 3);

    LARGE_ARRAY_SIZE = 200;
  });

  it('is a function', function() {
    expect.assertions(1);
    expect(typeof intersection).toBe('function');
  });

  it('should return the intersection of the given arrays', function() {
    expect.assertions(1);
    const actual = intersection([1, 3, 2], [5, 2, 1, 4], [2, 1]);

    expect(actual).toStrictEqual([1, 2]);
  });

  it('should return an array of unique values', function() {
    expect.assertions(1);
    const actual = intersection([1, 1, 3, 2, 2], [5, 2, 2, 1, 4], [2, 1, 1]);

    expect(actual).toStrictEqual([1, 2]);
  });

  it('should match `NaN`', function() {
    expect.assertions(2);
    const actual = intersection([1, NaN, 3], [NaN, 5, NaN]);

    expect(actual).toHaveLength(1);
    expect(Number.isNaN(actual[0])).toBe(true);
  });

  it('should work with large arrays of objects', function() {
    expect.assertions(2);
    const object = {};
    let largeArray = new Array(LARGE_ARRAY_SIZE).fill(object);

    expect(intersection([object], largeArray)).toStrictEqual([object]);
    largeArray = new Array(LARGE_ARRAY_SIZE).fill().map(Number.call, Number);
    expect(intersection(largeArray, [1])).toStrictEqual([1]);
  });

  it('should work with large arrays of `NaN`', function() {
    expect.assertions(2);
    const largeArray = new Array(LARGE_ARRAY_SIZE).fill(NaN);
    const actual = intersection([1, NaN, 3], largeArray);
    expect(actual).toHaveLength(1);
    expect(Number.isNaN(actual[0])).toBe(true);
  });

  it('should work with `arguments` objects', function() {
    expect.assertions(2);
    const array = [0, 1, null, 3];
    const expected = [1, 3];

    expect(intersection(array, args)).toStrictEqual(expected);
    expect(intersection(args, array)).toStrictEqual(expected);
  });

  it('should work with a single array', function() {
    expect.assertions(1);
    const actual = intersection([1, 1, 3, 2, 2]);

    expect(actual).toStrictEqual([1, 3, 2]);
  });

  it('should treat values that are not arrays or `arguments` objects as empty', function() {
    expect.assertions(3);
    const array = [0, 1, null, 3];

    expect(intersection(array, 3, {0: 1}, null)).toStrictEqual([]);
    expect(intersection(null, array, null, args, null)).toStrictEqual([1, 3]);
    expect(intersection(array, null, args, null)).toStrictEqual([1, 3]);
  });
});
