// Classes for shapes

// Main Shape class with text function used by all styles
class shape {
  constructor(text, textColor, shapeColor, logoShape) {
    (this.text = text),
      (this.textColor = textColor),
      (this.shapeColor = shapeColor),
      (this.logoShape = logoShape);
  }
  textStyle() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

// Extended Classes with shape functions
class circle extends shape {
  constructor(text, textColor, shapeColor, logoShape) {
    super(text, textColor, shapeColor, "circle");
  }
  shapeRet() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

class square extends shape {
  constructor(text, textColor, shapeColor, logoShape) {
    super(text, textColor, shapeColor, "square");
  }
  shapeRet() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
  }
}

class triangle extends shape {
  constructor(text, textColor, shapeColor, logoShape) {
    super(text, textColor, shapeColor, "triangle");
  }

  shapeRet() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

// Function to get data fron questions and add new object to class
function shapeMaker(data) {
  let logoInfo;

  if (data.logoShape == `Circle`) {
    logoInfo = new circle(data.logoTxt, data.txtColor, data.shapeColor);
  }

  if (data.logoShape == `Square`) {
    logoInfo = new square(data.logoTxt, data.txtColor, data.shapeColor);
  }

  if (data.logoShape == `Triangle`) {
    logoInfo = new triangle(data.logoTxt, data.txtColor, data.shapeColor);
  }

  //  Take return data and send to writer
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 ${logoInfo.shapeRet()}
 ${logoInfo.textStyle()}
 </svg>`;
}

module.exports = shapeMaker;
