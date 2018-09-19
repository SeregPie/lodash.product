import _ from 'lodash';

import Function_bindRecursive from '/utils/Function/bindRecursive';

_.mixin({
	product(...collections) {
		let product = [];
		Function_bindRecursive((recur, collection) => {
			if (collection.length < collections.length) {
				_.forEach(collections[collection.length], value => {
					recur(_.concat(collection, [value]));
				});
			} else {
				product.push(collection);
			}
		})([]);
		return product;
	},
});
