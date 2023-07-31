import calculateYearsPassed from '../src/index.js';
import calculateAgeOnOtherPlanets from '../src/index.js';
import calculateAgeDifference from '../src/index.js';

describe('calculateYearsPassed', () => {
  it('calculates age on other planets correctly', () => {
    const birthdate = new Date('1990-01-01');
    const result = calculateAgeOnOtherPlanets(birthdate);
    expect(result).toEqual({
      Mercury: 133.33,
      Venus: 51.61,
      Mars: 26.60,
      Jupiter: 4.22,
      Saturn: 1.70,
      Neptune: 0.29,
      Uranus: 0.49,
    });
  });
});

describe('calculateYearsPassed', () => {
  it('calculates years passed on other planets correctly', () => {
    const birthdate = new Date('1990-01-01');
    const birthdayDate = new Date('2023-07-31');
    const result = calculateYearsPassed(birthdate, birthdayDate);
    expect(result).toEqual({
      Mercury: 133.22,
      Venus: 51.60,
      Mars: 26.60,
      Jupiter: 4.22,
      Saturn: 1.70,
      Neptune: 0.29,
      Uranus: 0.49,
    });
  });
});

describe('calculateAgeDifference', () => {
  it('calculates age difference on other planets correctly', () => {
    const currentAge = new Date('1990-01-01');
    const futureBirthdate = new Date('2050-01-01');
    const result = calculateAgeDifference(currentAge, futureBirthdate);
    expect(result).toEqual({
      Earth: 60,
      Mercury: 250,
      Venus: 97,
      Mars: 50,
      Jupiter: 8,
      Saturn: 3,
      Neptune: 0,
      Uranus: 0,
    });
  });
});
