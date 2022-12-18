import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

import { fileURLToPath } from 'url';
global['__filename'] = fileURLToPath(import.meta.url);

import pkg from './package.json' assert {type: 'json'};

let globals = {
	'lodash': '_',
};

export default {
	external: Object.keys(globals),
	input: 'src/index.js',
	plugins: [
		babel({babelHelpers: 'bundled'}),
		terser(),
	],
	output: {
		file: pkg.main,
		format: 'umd',
		globals,
	},
};
