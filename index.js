// Include packages needed for this application
const shapes = require("./lib/shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");
const { create } = require("domain");

const svgLogoMaker =  create("svgLogoMaker");

//Handle error in the domain by console log it out
svgLogoMaker.on("error", (err) => {
    console.log("An error occurred:", err);
});

//Try-catch block to group err in the same domain
try {




}catch (err) {
    svgLogoMaker.emit("error", err);

}





