# lodash.permutations.js

`_.permutations(...arrays)`

Calculates all possible permutations.

| argument | description |
| ---: | :--- |
| `arrays` | ???. |

Returns a new array of permutations.

## dependencies

- [lodash](https://github.com/lodash/lodash)

## usage

```javascript
let permutations = _.permutations([false, true], ['a', 'b', 'c'], [{}]);
// => [[false, 'a', {}], [false, 'b', {}], [false, 'c', {}], [true, 'a', {}], [true, 'b', {}], [true, 'c', {}]]
```

```javascript
let array = [1, 2, 3];
let permutations = _.permutations(array, array);
// => [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]
```
