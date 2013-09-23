var universe = require('./universe');

// hello-test.js
casper.test.begin("Hello, Test!", 1, function(test) {
  console.log(universe.answer()); // prints "It's 42"
  test.assert(true);
  test.done();
});