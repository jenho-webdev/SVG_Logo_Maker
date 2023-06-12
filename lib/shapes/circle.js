const Shapes = require("../shapes.js");

//Output image will be 300x200 pixel, so set the circle's center point to be at the center point of x=150 and y=100
class Circle extends Shapes {
  render() {
    const cx = 150;
    const cy = 100;
    const radius = Math.min(150,100);
    return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${this.color}" />`;
  }
}

module.exports = Circle;
