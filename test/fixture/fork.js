require('../common');
var nix = require('nix');
var pid = nix.fork();

console.log(pid);
