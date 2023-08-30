// Required Applications

const questions = require("inquirer");
const fs = require("fs");
const shapeMaker = require("./lib/shapes");

// Question bank for readme.md
const shapeInfo = [
  {
    type: "input",
    message: "Enter text for your logo (3 characters)",
    name: "logoTxt",
    validate: (value) => {
      if (value.length < 1) {
        return `You must provide text for your logo`;
      }
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
    choices: ["Circle","Triangle","Square"],
    name:"logoShape",  
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

function getShapeInfo(){

    questions.prompt(shapeInfo).then((answers) => {

      console.log(shapeMaker(answers))

    })

  }


getShapeInfo()

