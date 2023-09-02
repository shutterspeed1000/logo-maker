// Required Applications

const questions = require("inquirer");
const fs = require("fs");
const shapeMaker = require("./lib/shapes");

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

// Function to ask questions/sends data to shapeMaker function
const getShapeInfo = async () => {
  try {
  const answers = await questions.prompt(shapeInfo)
  const finalShape = await shapeMaker(answers)
   return finalShape

  } catch (error) {

    console.log(error)
}

}

// Starts app and gets daya from getShapeInfo, writes to file.
getShapeInfo()
  .then(finalShape => {
    fs.writeFile('logo.svg', finalShape, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('File written successfully');
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });



