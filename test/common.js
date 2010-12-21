var path = require('path');
require.paths.unshift(path.join(__dirname, '../build/default/'));

exports.fixturePath = path.join(__dirname, 'fixture');
