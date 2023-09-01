// Classes for shapes

// Main Shape
class shape {
  constructor(text, textColor, shapeColor, logoShape) {
    (this.text = text),
      (this.textColor = textColor),
      (this.shapeColor = shapeColor),
      (this.logoShape = logoShape);
  }
}

class circle extends shape {
  constructor(text, textColor, shapeColor, logoShape) {
    super(text, textColor, shapeColor, "circle");
  }
}

class square extends shape {
  constructor(text, textColor, shapeColor, logoShape) {
    super(text, textColor, shapeColor, "square");
  }
}

class triangle extends shape {
  constructor(text, textColor, shapeColor, logoShape) {
    super(text, textColor, shapeColor, "triangle");
  }
}

function shapeMaker(data) {
  console.log(data);

  if (data.logoShape == `Circle`) {
    const logoInfo = new circle(data.logoTxt, data.txtColor, data.shapeColor);
  }

  if (data.logoShape == `Square`) {
    const logoInfo = new square(data.logoTxt, data.txtColor, data.shapeColor);
  }

  if (data.logoShape == `Triangle`) {
    const logoInfo = new triangle(data.logoTxt, data.txtColor, data.shapeColor);
  }

  return `test data`;
}

module.exports = shapeMaker;
