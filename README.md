# keev-leveldb

A LevelDB backed keev store.

[![build status](https://secure.travis-ci.org/allain/keev-leveldb.png)](http://travis-ci.org/allain/keev-leveldb)

## Installation

This module is installed via npm:

``` bash
$ npm install keev-leveldb
```

## Example Usage

``` js
var stdout = require('stdout');
var leveldb = require('level');

var db = require('keev')({
  store: require('..')(leveldb('/tmp/keev-demo'))
});

db.pipe(stdout()); // Just spit it to the console

db.write({ a: 10 }); // Store a=10
db.write({ a: null }); // Query for the value of a
db.write({ a: "foo" }); // Store a="foo"
db.write({ a: undefined }); // Delete a from store
db.write({ a: null }); // Succeeds in not returning the key a

```
