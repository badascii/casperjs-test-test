var universe = require('./universe');

// hello-test.js
casper.test.begin("Hello, Test!", 1, function(test) {
  console.log(universe.answer()); // prints "It's 42"
  console.log(universe.roffle(2, 2));
  universe.clickie('form[action="/search"', 'casperjs');
	// test.assert(true);
  test.done();
});




// casper.test.begin('Google search retrieves 10 or more results', 5, function suite(test) {
//   casper.start("http://www.google.fr/", function() {
//     test.assertTitle("HURF", "google homepage title is the one expected");
//     test.assertExists('form[action="/search"]', "main form is found");
//     this.fill('form[action="/search"]', {
//       q: "casperjs"
//     }, true);
//   });

//   casper.then(function() {
//     test.assertTitle("casperjs - Recherche Google", "google title is ok");
//     test.assertUrlMatch(/q=casperjs/, "search term has been submitted");
//     test.assertEval(function() {
//       return __utils__.findAll("h3.r").length >= 10;
//     }, "google search for \"casperjs\" retrieves 10 or more results");
//   });

//   casper.run(function() {
//     test.done();
//   });
// });