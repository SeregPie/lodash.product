/*eslint no-console: 0*/


const _ = require('lodash');
require('./lodash.product');

{
	let product = _.product([false, true], ['a', 'b', 'c'], [{}]);
	console.log(product);
}
{
	let array = [1, 2, 3];
	let product = _.product(array, array);
	console.log(product);
}
