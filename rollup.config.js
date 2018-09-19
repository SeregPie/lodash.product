import buble from 'rollup-plugin-buble';
import minify from 'rollup-plugin-babel-minify';
import resolve from '@seregpie/rollup-plugin-resolve';

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
		minify({comments: false}),
	],
};
