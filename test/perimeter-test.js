var tape = require("tape"),
    polygon = require("../");

tape("perimeter(polygon) returns the expected value for closed counterclockwise polygons", function(test) {
  test.equal(polygon.perimeter([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]), 4);
  test.end();
});

tape("perimeter(polygon) returns the expected value for closed clockwise polygons", function(test) {
  test.equal(polygon.perimeter([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]), 4);
  test.equal(polygon.perimeter([[1, 1], [3, 2], [2, 3], [1, 1]]), Math.sqrt(20) + Math.sqrt(2));
  test.end();
});

tape("perimeter(polygon) returns the expected value for open counterclockwise polygons", function(test) {
  test.equal(polygon.perimeter([[0, 0], [0, 1], [1, 1], [1, 0]]), 4);
  test.end();
});

tape("perimeter(polygon) returns the expected value for open clockwise polygons", function(test) {
  test.equal(polygon.perimeter([[0, 0], [1, 0], [1, 1], [0, 1]]), 4);
  test.equal(polygon.perimeter([[1, 1], [3, 2], [2, 3]]), Math.sqrt(20) + Math.sqrt(2));
  test.end();
});
