const Gbox = require('../index');
const assert = require('assert');

assert.ok(Gbox.jsType('String', 'hello'));
assert.ok(Gbox.jsType('Object', {a:1}, true));