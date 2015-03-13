var assert = require('chai').assert;
var keevLevelup = require('..');

describe('keev-levelup', function() {
  it('should fail when not given a leveldb instance', function(done) {
    try {
      keevLevelup();
    } catch(e) {
      done();
    }
  });
});
