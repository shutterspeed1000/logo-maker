const triangle = require("./shapes");

describe("Triangle", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
    const logoInfo = new triangle(`TST`,`Blue`,`Blue`,`triangle`);
    const actualSvg = logoInfo.shape();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

