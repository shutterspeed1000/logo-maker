const logoShape = require("./shapes.js");
const { Triangle, Square, Circle } = require("./shapes.js");
const data = require("./shapes.js");

// Jest tests to verify each class retuns shape info.

describe("Triangle", () => {
  test("should render svg for a blue polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';

    const tri = new Triangle("s", "color", "blue");

    expect(tri.render()).toBe(expectedSvg);
  });
});

describe("Circle", () => {
  test("should render svg for a circle element", () => {
    const expectedSvg = `<circle cx="150" cy="100" r="80" fill="blue" />`;

    const cir = new Circle("s", "color", "blue");

    expect(cir.render()).toBe(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a blue square element", () => {
    const expectedSvg = `<rect x="90" y="40" width="120" height="120" fill="blue" />`;

    const sq = new Square("s", "color", "blue");

    expect(sq.render()).toBe(expectedSvg);
  });
});
