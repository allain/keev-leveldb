var each = require('async-each');

module.exports = function(db) {
  // use duck typing
	if (!db || !db.get || !db.batch) throw new Error('Invalid LevelDB instance given');

	return {
		getAll: function(keys, cb) {
			var result = {};
      each(keys, function(key, cb) {
				db.get(key, function(err, val) {
					if (err && !err.notFound) return cb(err);
					result[key] = val;
					cb(null);
				});
			}, function(err) {
			  if (err) return cb(err);

				cb(null, result);
			});
		},

		putAll: function(obj, cb) {
			var ops = [];

			Object.keys(obj).forEach(function(key) {
				var value = obj[key];
				if (value === undefined) {
					ops.push({type: 'del', key: key});
				} else {
					ops.push({type: 'put', key: key, value: value});
				}
			});

			db.batch(ops, cb);
		}
	};
};
