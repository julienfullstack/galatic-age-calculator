import BdayCalculator from './../src/calculator.js';

describe('BdayCalculator', () => {

  test('it should correctly return the inputted age in years on different planets', () => {
    const inputtedAge = new BdayCalculator(25);
    expect(inputtedAge.mercury).toEqual(2);
  });
});