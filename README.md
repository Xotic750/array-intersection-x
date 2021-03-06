<a
  href="https://travis-ci.org/Xotic750/array-intersection-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/array-intersection-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/array-intersection-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/array-intersection-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/array-intersection-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/array-intersection-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/array-intersection-x"
  title="npm version">
<img src="https://badge.fury.io/js/array-intersection-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/array-intersection-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/array-intersection-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/array-intersection-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/array-intersection-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/array-intersection-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/array-intersection-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_array-intersection-x"></a>

## array-intersection-x

Creates an array of unique values that are included in all given arrays.

<a name="exp_module_array-intersection-x--module.exports"></a>

### `module.exports([...array])` ⇒ <code>array</code> ⏏

This method creates an array of unique values that are included in all given
arrays using SameValueZero for equality comparisons. The order and references
of result values are determined by the first array.

**Kind**: Exported function  
**Returns**: <code>array</code> - Returns the new array of intersecting values.

| Param      | Type               | Description            |
| ---------- | ------------------ | ---------------------- |
| [...array] | <code>array</code> | The arrays to inspect. |

**Example**

```js
import intersection from 'array-intersection-x';

console.log(intersection([2, 1], [2, 3])); // => [2]
```
