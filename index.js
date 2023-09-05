// Required Applications

const questions = require("inquirer");
const fs = require("fs");
const {shapeMaker} = require("./lib/shapes");

// Question bank for share
const shapeInfo = [
  {
    type: "input",
    message: "Enter text for your logo (3 characters)",
    name: "logoTxt",
    validate: (value) => {
      if (value.length < 1) {
        return `You must provide text for your logo`;
      }
      if (value.length > 3) return `3 characters maximum`;
      return true;
    },
  },
  {
    type: "input",
    message: "What color do you want your text?",
    name: "txtColor",
    validate: (value) => {
      if (value.length < 1) {
        return `You must provide a color`;
      }
      return true;
    },
  },
  {
    type: "list",
    message: "Please select a shape:",
    choices: ["Circle", "Triangle", "Square"],
    name: "logoShape",
  },

  {
    type: "input",
    message: "What color do you want your shape?",
    name: "shapeColor",
    validate: (value) => {
      if (value.length < 1) {
        return `You must provide a color`;
      }
      return true;
    },
  },
];

// Function to ask questions/sends data to shapeMaker function and write final logo file
const getShapeInfo = async () => {
  try {
    const answers = await questions.prompt(shapeInfo);
    const finalShape = shapeMaker(answers);

    fs.writeFile("logo.svg", finalShape, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// Starts app and gets daya from getShapeInfo, writes to file.
getShapeInfo();

