import buble from 'rollup-plugin-buble';
import resolve from '@seregpie/rollup-plugin-resolve';
import {uglify} from 'rollup-plugin-uglify';

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
		resolve(),
		buble(),
		uglify(),
	],
};
