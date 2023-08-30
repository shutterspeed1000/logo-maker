// Required Applications

const questions = require("inquirer");
const fs = require("fs");

// Question bank for readme.md
const questBank = [
  {
    type: "input",
    message: "Enter text for your logo (3 characters)",
    name: "projectName",
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
    name: "username",
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
    choices: [Circle,Triangle,Square],
      
    },

  {
    type: "input",
    message: "What color do you want your shape?",
    name: "projectDesc",
    validate: (value) => {
      if (value.length < 1) {
        return `You must provide a color`;
      }
      return true;
    },
  },
 
];