import _ from 'lodash';

import Function_withSelf from './helpers/Function/withSelf';

_.mixin({
	product(...collections) {
		let returns = [];
		Function_withSelf((callSelf, tuple) => {
			if (tuple.length < collections.length) {
				_.forEach(collections[tuple.length], value => {
					callSelf(_.concat(tuple, [value]));
				});
			} else {
				returns.push(tuple);
			}
		})([]);
		return returns;
	},
});
