const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
  it("recognize if it is as square", () => {
    const rectangle = new Rectangle(10, 10);
    assert.strictEqual(rectangle.isSquare(), true);
  });
  it("recognize if it is not a square", () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.isSquare(), false);
  });
  it("gives a correct area", () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getArea(), 91);
  });
  it("gives a correct perimiter", () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });
});
