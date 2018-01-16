import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

let globals = {
	'lodash': '_',
};

export default {
	input: 'src/lodash.product.js',
	external: Object.keys(globals),
	output: {
		file: 'lodash.product.js',
		format: 'umd',
		globals,
	},
	plugins: [
		buble(),
		uglify(),
	],
};
