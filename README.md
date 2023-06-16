# SVG_Logo_Maker

SVG Logo Maker is a command-line application that allows you to generate SVG logos with customizable text and shapes. You can choose from different shapes such as circles, triangles, and squares, and customize the text color and shape color. The application outputs an SVG file that represents the logo.

## Table of Contents

- [SVG\_Logo\_Maker](#svg_logo_maker)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Examples](#examples)
  - [Testing](#testing)
  - [Demo](#demo)
  - [License](#license)
  - [Contributing](#contributing)
  - [Helpful SVG Resources](#helpful-svg-resources)
  - [Credits](#credits)
  - [Contact](#contact)

## Installation

To use SVG Logo Maker, follow these steps:

1. Clone the repository: git clone <https://github.com/jenho-webdev/svg_logo_maker.git>
2. Navigate to the project directory: cd svg_logo_maker
3. Install the dependencies: npm install

## Usage

To run SVG Logo Maker, use the following command:
node index.js

This Command line application uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

he application will prompt you to enter the desired text, text color, shape type, and shape color. Follow the on-screen instructions and provide the necessary input. Once you've entered the information, the application will generate an SVG logo and save it as `logo.svg` in the `output` folder.

## Examples

Here is a examples of using SVG Logo Maker:

Generate a logo with the text " UCI" in white color and a blue square shape:

- Enter up to three characters: UCI
- Enter the text color (keyword or hexadecimal number): white
- Choose a shape: Square
- Enter the shape color (keyword or hexadecimal number): Blue

![sample logo](examples/UCI_TXT_WHITE_SQ_BLUE_SVG_LOGO.png)

## Testing

SVG Logo Maker includes tests for the shape classes using the Jest testing framework. To run the tests, use the following command:

```bash
npm test
```

The tests verify the rendering functionality of the Circle, Triangle, and Square classes, ensuring that the generated SVG code matches the expected output.

## Demo

You can find the sample logo .svg file and an image of the logo under the [examples folder of the repo](./examples/)

You can find a video walkthrough of the applocation [Here](https://youtu.be/AniXzLFnRGI).
<https://youtu.be/AniXzLFnRGI>

## License

This project is licensed under the [![MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://github.com/jenho-webdev/svg_logo_maker/blob/main/LICENSE)

> For details of the application's licensing details, please visit the License page in the repo [here](https://github.com/jenho-webdev/svg_logo_maker/blob/main/LICENSE)

## Contributing

Contributions to SVG Logo Maker are welcome! If you would like to contribute to the README Generator app, you can do so by forking the GitHub repository and submitting pull requests.

## Helpful SVG Resources

- [Example SVG](https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg)

- [Scalable Vector Graphics (SVG)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)

- [SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
- [Basic SVG shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)

- [Text in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts)

- [SVG VS Code extension](https://marketplace.visualstudio.com/items?itemName=jock.svg)

## Credits

SVG Logo Maker was created by me as part a coding challenge for the UCI Full Stack bootcamp course assignment related to topics on OOP, node js., unit testing and more.

The development of this program was supported by the course materials and resources provided by the bootcamp.

Shield and badges used in this markdown document were sourced from Shields.io.

## Contact

For any inquiries or questions, please contact [Your Email Address].
