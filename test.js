var test = require("simple-test-framework")
  , _ = require("lodash");

test("Tests you do",function(t) {

   var a = 1;
   t.check(a === 1,"a equals 1");
   t.test("Your subtest succeedes",function(t) {

      t.check(a === 1,"a still equals 1");

      t.finish();
   });

   t.finish();
})

test("Lodash test", function(t) {

  t.check(_.any([null, 0, 'yes', false], Boolean), "The function _.any works");

  t.finish();
})
