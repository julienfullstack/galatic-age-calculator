import Triangle from './../src/triangle.js';

describe('Calculator', () => {

  test('it should correctly return the inputted age in years on different planets', () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
});