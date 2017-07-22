(function(_) {

	_.mixin({product: function() {
		var collections = _.map(arguments, _.values);
		var product = [];
		(function f(tuple) {
			if (tuple.length < collections.length) {
				_.forEach(collections[tuple.length], function(value) {
					f(_.concat(tuple, [value]));
				});
			} else {
				product.push(tuple);
			}
		})([]);
		return product;
	}});

})((function() {
	if (typeof module !== 'undefined' && typeof exports !== 'undefined' && this === exports) {
		return require('lodash');
	} else {
		return _;
	}
}).call(this));