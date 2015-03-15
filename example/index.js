var stdout = require('stdout');
var leveldb = require('level');

var db = require('keev')({
  store: require('..')(leveldb('/tmp/keev-demo', {
    valueEncoding: 'json'
  }))
});

var dbStream = db.createStream();
dbStream.pipe(stdout()); // Just spit it to the console

dbStream.write({ a: 10 }); // Store a=10
dbStream.write({ a: null }); // Query for the value of a
dbStream.write({ a: "foo" }); // Store a="foo"
dbStream.write({ a: undefined }); // Delete a from store
dbStream.write({ a: null }); // Succeeds in not returning the key a
