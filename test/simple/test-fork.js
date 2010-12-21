var common = require('../common');
var assert = require('assert');
var exec = require('child_process').exec;

(function testForkProducesTwoProcesses() {
  exec('node '+common.fixturePath+'/fork.js', function(err, stdout) {
    if (err) throw err;

    var lines = stdout.split('\n');
    // Last line is empty, get rid of it
    lines.pop();

    // Make sure we have child process and get the index in the array
    var childIndex = lines.indexOf('0');
    assert.ok(childIndex > -1);

    // Remove the child output line form the index
    lines.splice(childIndex, 1);

    // Test the parent process id
    assert.ok(parseInt(lines[0]) > 0);
    assert.strictEqual(lines.length, 1);
  });
})();
