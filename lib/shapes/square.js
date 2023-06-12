const Shapes = require("../shapes.js");

//Output image will be 300x200 pixel, so set the Square x to top left corner at 100px
// and y to top left corner at 50px 
//then max width of the shape will be 100px and height 100px to get a 100x100 square centered.
class Square extends Shapes {
  render() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

module.exports = Square;
