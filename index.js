module.exports = function(db) {
	if (!db || !db.get || !db.put || !db.del) throw new Error('Invalid LevelDB instance given');

	return {
		get: function(key, cb) {
			db.get(key, function(err, val) {
				if (err && !err.notFound) return cb(err);
				cb(null, val);
			});
		},

		put: function(key, val, cb) {
			db.put(key, val, cb);
		},

		remove: function(key, cb) {
			db.del(key, cb);
		}
	};
};
