/*eslint no-console: 0*/

require('./index');
let _ = require('lodash');

{
	let product = _.product([false, true], ['a', 'b', 'c'], [{}]);
	console.log(_.isEqual(product, [[false, 'a', {}], [false, 'b', {}], [false, 'c', {}], [true, 'a', {}], [true, 'b', {}], [true, 'c', {}]]));
}
{
	let array = [1, 2, 3];
	let product = _.product(array, array);
	console.log(_.isEqual(product,  [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]));
}
{
	let product = _.product([1, 2]);
	console.log(_.isEqual(product, [[1], [2]]));
}
{
	let product = _.product([], [], []);
	console.log(_.isEqual(product, []));
}
