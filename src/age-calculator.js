export default class AgeCalculator {
  constructor(earthYears) {
    this.earthAge = earthYears;
  }
  calculateAgeOnOtherPlanets() {
    const mercuryAge = this.earthAge / 0.24;
    const venusAge = this.earthAge / 0.62;
    const marsAge = this.earthAge / 1.88;
    const jupiterAge = this.earthAge / 11.86;
    const saturnAge = this.earthAge / 29.46;
    const neptuneAge = this.earthAge / 164.8;
    const uranusAge = this.earthAge / 84.02;
  
    return {
      Mercury: mercuryAge.toFixed(2),
      Venus: venusAge.toFixed(2),
      Mars: marsAge.toFixed(2),
      Jupiter: jupiterAge.toFixed(2),
      Saturn: saturnAge.toFixed(2),
      Neptune: neptuneAge.toFixed(2),
      Uranus: uranusAge.toFixed(2)
    };
  }

calculateYearsPassed(age, pastBirthdayAge) {
    const earthYearsPassed = age - pastBirthdayAge;
    const mercuryYearsPassed = earthYearsPassed / 0.24;
    const venusYearsPassed = earthYearsPassed / 0.62;
    const marsYearsPassed = earthYearsPassed / 1.88;
    const jupiterYearsPassed = earthYearsPassed / 11.86;
    const saturnYearsPassed = earthYearsPassed / 29.46;
    const neptuneYearsPassed = earthYearsPassed / 164.8;
    const uranusYearsPassed = earthYearsPassed / 84.02;
  
    return {
      Earth: earthYearsPassed.toFixed(2),
      Mercury: mercuryYearsPassed.toFixed(2),
      Venus: venusYearsPassed.toFixed(2),
      Mars: marsYearsPassed.toFixed(2),
      Jupiter: jupiterYearsPassed.toFixed(2),
      Saturn: saturnYearsPassed.toFixed(2),
      Neptune: neptuneYearsPassed.toFixed(2),
      Uranus: uranusYearsPassed.toFixed(2)
    };
  }
  
calculateYearsUntilFutureBirthday(currentAge, futureBirthdayAge) {
    const earthYearsLeft = futureBirthdayAge - currentAge;
    const mercuryYearsLeft = earthYearsLeft / 0.24;
    const venusYearsLeft = earthYearsLeft / 0.62;
    const marsYearsLeft = earthYearsLeft / 1.88;
    const jupiterYearsLeft = earthYearsLeft / 11.86;
    const saturnYearsLeft = earthYearsLeft / 29.46;
    const neptuneYearsLeft = earthYearsLeft / 164.8;
    const uranusYearsLeft = earthYearsLeft / 84.02;
  
    return {
      Earth: earthYearsLeft.toFixed(2),
      Mercury: mercuryYearsLeft.toFixed(2),
      Venus: venusYearsLeft.toFixed(2),
      Mars: marsYearsLeft.toFixed(2),
      Jupiter: jupiterYearsLeft.toFixed(2),
      Saturn: saturnYearsLeft.toFixed(2),
      Neptune: neptuneYearsLeft.toFixed(2),
      Uranus: uranusYearsLeft.toFixed(2)
    };
  }
  
  }
