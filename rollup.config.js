import {terser} from 'rollup-plugin-terser';
import buble from 'rollup-plugin-buble';

import {main} from './package.json';

let globals = {
	'lodash': '_',
};

export default {
	input: 'src/index.js',
	external: Object.keys(globals),
	output: {
		file: main,
		format: 'umd',
		globals,
	},
	plugins: [
		buble(),
		terser(),
	],
};
