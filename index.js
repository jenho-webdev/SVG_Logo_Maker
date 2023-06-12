// Include packages needed for this application
const Circle = require("./lib/shapes/circle.js");
const Triangle = require("./lib/shapes/triangle.js");
const Square = require("./lib/shapes/square.js");
const inquirer = require("inquirer");
const fs = require("fs");





const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters:",
       validate: function (input) {
         if (input.length > 3) {
           return "Please enter up to three characters.";
         }
         return true;
       }
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (keyword or hexadecimal number):",
      validate: (input) =>
        /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^[a-zA-Z]+$/.test(input),
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (keyword or hexadecimal number):",
      validate: (input) =>
        /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^[a-zA-Z]+$/.test(input),
    },
  ]);
};

const generateSVG = async (text, textColor, shape, shapeColor) => {

    let shapeObj;
    //create shape
    switch (shape) {
      case "Circle":
        shapeObj = new Circle();
        break;
      case "Triangle":
        shapeObj = new Triangle();
        break;
      case "Square":
        shapeObj = new Square();
        break;
      default:
        throw new Error("Invalid shape");
    }
    //set shape color
     shapeObj.setColor(shapeColor);

    // create svg element in w300 h200 with the user inputted text color.
    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeObj.render()}
      <text x="150" y="100" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="50">${text}</text>
    </svg>`;

    return svgContent;
 

}
    

const svgLogoMaker = (svg) => {
  fs.writeFileSync("./output/logo.svg", svg);
  console.log("Generated logo.svg");
};

const run = async () => {
  try {
    const { text, textColor, shape, shapeColor } = await promptUser();
    const svg = await generateSVG(text, textColor, shape, shapeColor);
    svgLogoMaker(svg);
  } catch (error) {
    throw error;
  }
};

run();


