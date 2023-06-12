const Circle = require("../shapes/circle.js");
const Triangle = require("../shapes/triangle.js");
const Square = require("../shapes/square.js");

//Test Triangle rending
describe("Triangle", () => {
  it("should return a blue triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

//Test circle rending
describe("circle", () => {
  it("should return a orange circle", () => {
    const shape = new Circle();
    shape.setColor("orange");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="orange" />'
    );
  });
});

//Test square rending
describe("Square", () => {
  it("should return a black square", () => {
    const shape = new Square();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      '<rect x="50" y="50" width="200" height="200" fill="black" />'
    );
  });
});
