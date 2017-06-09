// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by tmeasday.js.
import { name as packageName } from "meteor/tmeasday";

// Write your tests here!
// Here is an example.
Tinytest.add('tmeasday - example', function (test) {
  test.equal(packageName, "tmeasday");
});
