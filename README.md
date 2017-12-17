# lodash.product

`_.product(...collections)`

Calculates the Cartesian product between multiple collections.

| argument | description |
| ---: | :--- |
| `collections` | Iterables of values to calculate the Cartesian product from. |

Returns a new array.

## dependencies

- [lodash](https://github.com/lodash/lodash)

## setup

### npm

```sh

npm install lodash.product

```

### ES module

```js

import _ from 'lodash';
import 'lodash.product';

```

### Node

```js

const _ = require('lodash');
require('lodash.product');

```

### browser

```html

<script src="https://unpkg.com/lodash"></script>
<script src="https://unpkg.com/lodash.product"></script>

```

## usage

```js

let product = _.product([false, true], ['a', 'b', 'c'], [{}]);
// => [[false, 'a', {}], [false, 'b', {}], [false, 'c', {}], [true, 'a', {}], [true, 'b', {}], [true, 'c', {}]]

```

```js

let array = [1, 2, 3];
let product = _.product(array, array);
// => [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]

```
