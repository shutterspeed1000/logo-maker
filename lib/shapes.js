// Classes for shapes

// Main Shape class with text function used by all styles
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  textStyle() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

// Extended Classes with shape functions
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

// Function to get data fron questions and add new object to class
function shapeMaker(data) {
  let logoInfo;

  if (data.logoShape == `Circle`) {
    logoInfo = new Circle(data.logoTxt, data.txtColor, data.shapeColor);
  }

  if (data.logoShape == `Square`) {
    logoInfo = new Square(data.logoTxt, data.txtColor, data.shapeColor);
  }

  if (data.logoShape == `Triangle`) {
    logoInfo = new Triangle(data.logoTxt, data.txtColor, data.shapeColor);
  }

  //  Take return data and send to writer
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 ${logoInfo.render()}
 ${logoInfo.textStyle()}
 </svg>`;
}

module.exports = { shapeMaker, Circle, Square, Triangle };
