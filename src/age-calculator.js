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
      Earth: earthYearsPassed,
      Mercury: mercuryYearsPassed,
      Venus: venusYearsPassed,
      Mars: marsYearsPassed,
      Jupiter: jupiterYearsPassed,
      Saturn: saturnYearsPassed,
      Neptune: neptuneYearsPassed,
      Uranus: uranusYearsPassed
    };
  }
  
    calculateAgeDifference(currentAge, futureBirthdate) {
      const birthdayDate = new Date(currentAge);
      const futureBirthdateDate = new Date(futureBirthdate);
      const earthAge = futureBirthdateDate.getFullYear() - birthdayDate.getFullYear();
      const mercuryAgeDifference = earthAge / 0.24; 
      const venusAgeDifference = earthAge / 0.62;
      const marsAgeDifference = earthAge / 1.88;
      const jupiterAgeDifference = earthAge / 11.86;
      const saturnAgeDifference = earthAge / 29.46;
      const neptuneAgeDifference = earthAge / 164.8;
      const uranusAgeDifference = earthAge / 84.02;
    
      return {
        Earth: earthAge,
        Mercury: mercuryAgeDifference,
        Venus: venusAgeDifference,
        Mars: marsAgeDifference,
        Jupiter: jupiterAgeDifference,
        Saturn: saturnAgeDifference,
        Neptune: neptuneAgeDifference,
        Uranus: uranusAgeDifference
      };
    }

    
  }
