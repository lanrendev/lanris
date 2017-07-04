//vi lanris/index.js
var fis = module.exports = require('fis3');
fis.require.prefixes.unshift('lanris');
fis.cli.name = 'lanris';
fis.cli.info = require('./package.json');

require('./fis-conf.js');
