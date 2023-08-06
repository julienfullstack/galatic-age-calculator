import AgeCalculator from '../src/age-calculator.js';

describe('AgeCalculator', () => {
  it('it creates an age calculator object with an earthAge property', () => {
    const myAgeCalculator= new AgeCalculator(27);
    expect(myAgeCalculator.earthAge).toEqual(27);
  })

  it("it converts earthAge to ages on other planets", () => {
    const myAgeCalculator = new AgeCalculator(13);
    expect(result).toEqual({
      Earth: 13,
      Mercury: 13 / 0.24,
      Venus: 13 / 0.62,
      Mars: 13 / 1.88,
      Jupiter: 13 / 11.86,
      Saturn: 13 / 29.46,
      Neptune: 13 / 164.8,
      Uranus: 13 / 84.02
    });
  });

  it('calculates how many years have passed on each planet since a past birthday', () => {
    const result = calculateYearsPassed(56, 43);

    expect(result).toEqual({
      Earth: 13,
      Mercury: 13 / 0.24,
      Venus: 13 / 0.62,
      Mars: 13 / 1.88,
      Jupiter: 13 / 11.86,
      Saturn: 13 / 29.46,
      Neptune: 13 / 164.8,
      Uranus: 13 / 84.02
    });
  });

  it('returns all zeros when the current age and past birthday are the same', () => {
    const result = calculateYearsPassed(43, 43);
    
    expect(result).toEqual({
      Earth: 0,
      Mercury: 0,
      Venus: 0,
      Mars: 0,
      Jupiter: 0,
      Saturn: 0,
      Neptune: 0,
      Uranus: 0
    });
  });


  it("it caculates the age difference between two user inputted birth dates based on time on other planets", () => {
    const birthdate = new Date(2000-10-10);
    const earthAge = this.earthAge - birthdate.getFullYear();
    expect(earthAge.calculateAgeDifference().Mercury).toEqual(112.5);
    expect(earthAge.calculateAgeDifference().Venus).toEqual(43.5);
    expect(earthAge.calculateAgeDifference().Mars).toEqual(11);
    expect(earthAge.calculateAgeDifference().Juniper).toEqual(11);
    expect(earthAge.calculateAgeDifference().Saturn).toEqual(11);
    expect(earthAge.calculateAgeDifference().Neptune).toEqual(11);
    expect(earthAge.calculateAgeDifference().Uranus).toEqual(11);
  })
  

})
