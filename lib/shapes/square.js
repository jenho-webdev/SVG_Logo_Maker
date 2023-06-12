const Shapes = require("../shapes.js");

//Output image will be 300x200 pixel, so set the Square x to top left corner at 50px
// and y to top left corner at 50px 
//then max width will be 200 (300-100px in margins)
//and max height = 2
class Square extends Shapes {
  render() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

module.exports = Square;
