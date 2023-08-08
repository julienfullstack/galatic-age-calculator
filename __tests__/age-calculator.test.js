import AgeCalculator from '../src/age-calculator.js';

describe('AgeCalculator', () => {

  it('returns the earth age of the user', () => {
    const ageCalculator = new AgeCalculator(43);
    const result = 43;
    expect(result).toEqual(ageCalculator.earthAge);
  })

  it('calculates age on other planets', () => {
    const ageCalculator = new AgeCalculator(43);
    const result = ageCalculator.calculateAgeOnOtherPlanets();

    expect(result).toEqual({
      Mercury: (43 / 0.24).toFixed(2),
      Venus: (43 / 0.62).toFixed(2),
      Mars: (43 / 1.88).toFixed(2),
      Jupiter: (43 / 11.86).toFixed(2),
      Saturn: (43 / 29.46).toFixed(2),
      Neptune: (43 / 164.8).toFixed(2),
      Uranus: (43 / 84.02).toFixed(2)
    });
  });

  it('calculates how many years have passed since a past birthday on each planet', () => {
    const ageCalculator = new AgeCalculator();
    const result = ageCalculator.calculateYearsPassed(56, 43);

    expect(result).toEqual({
      Earth: (13).toFixed(2),
      Mercury: (13 / 0.24).toFixed(2),
      Venus: (13 / 0.62).toFixed(2),
      Mars: (13 / 1.88).toFixed(2),
      Jupiter: (13 / 11.86).toFixed(2),
      Saturn: (13 / 29.46).toFixed(2),
      Neptune: (13 / 164.8).toFixed(2),
      Uranus: (13 / 84.02).toFixed(2)
    });
  });

  it('calculates how many years are left until a future birthday on each planet', () => {
    const ageCalculator = new AgeCalculator();
    const result = ageCalculator.calculateYearsUntilFutureBirthday(43, 56);

    expect(result).toEqual({
      Earth: (13).toFixed(2),
      Mercury: (13 / 0.24).toFixed(2),
      Venus: (13 / 0.62).toFixed(2),
      Mars: (13 / 1.88).toFixed(2),
      Jupiter: (13 / 11.86).toFixed(2),
      Saturn: (13 / 29.46).toFixed(2),
      Neptune: (13 / 164.8).toFixed(2),
      Uranus: (13 / 84.02).toFixed(2)
    });
  });
});
