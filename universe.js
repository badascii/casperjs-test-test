// my module, stored in universe.js
// patching phantomjs' require()
var require = patchRequire(require);

// now you're ready to go
var utils = require('utils');
var magic = 42;
exports.answer = function() {
	return utils.format("it's %d", magic);
};

exports.roffle = function(num1, num2) {
	return num1 + num2;
};

exports.clickie = function(uri, q) {
	casper.test.begin('Google search retrieves 10 or more results', 1, function suite(test) {
	  casper.start("http://www.google.fr/", function() {
	 	  test.assertExists(uri, "main form is found");

			this.fill(uri, { q: q }, true);
		});
	});
};