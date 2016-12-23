# lodash.cross.js

`_.cross(...arrays)`

Calculates Cartesian product.

| argument | description |
| ---: | :--- |
| `arrays` | ???. |

Returns a new array.

## dependencies

- [lodash](https://github.com/lodash/lodash)

## usage

```javascript
let result = _.cross([false, true], ['a', 'b', 'c'], [{}]);
// => [[false, 'a', {}], [false, 'b', {}], [false, 'c', {}], [true, 'a', {}], [true, 'b', {}], [true, 'c', {}]]
```

```javascript
let array = [1, 2, 3];
let result = _.cross(array, array);
// => [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]
```
