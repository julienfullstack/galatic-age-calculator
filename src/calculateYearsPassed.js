// export class AgeCalculator {
//   constructor() {
//     const birthdayDate = new Date();
//     this.earthAge = birthdayDate.getFullYear();
//   }



 export function calculateYearsPassed(birthdate) {
    const earthAge = this.earthAge - birthdate.getFullYear();
    const mercuryYearsPassed = earthAge / 0.24;
    const venusYearsPassed = earthAge / 0.62;
    const marsYearsPassed = earthAge / 1.88;
    const jupiterYearsPassed = earthAge / 11.86;
    const saturnYearsPassed = earthAge / 29.46;
    const neptuneYearsPassed = earthAge / 164.8;
    const uranusYearsPassed = earthAge / 84.02;

    const mercuryYearsSinceBirth = mercuryYearsPassed - (birthdate.getMonth() / 12 + birthdate.getDate() / 365) / 0.24;
    const venusYearsSinceBirth = venusYearsPassed - (birthdate.getMonth() / 12 + birthdate.getDate() / 365) / 0.62;
    const marsYearsSinceBirth = marsYearsPassed - (birthdate.getMonth() / 12 + birthdate.getDate() / 365) / 1.88;
    const jupiterYearsSinceBirth = jupiterYearsPassed - (birthdate.getMonth() / 12 + birthdate.getDate() / 365) / 11.86;
    const saturnYearsSinceBirth = saturnYearsPassed - (birthdate.getMonth() / 12 + birthdate.getDate() / 365) / 29.46;
    const neptuneYearsSinceBirth = neptuneYearsPassed - (birthdate.getMonth() / 12 + birthdate.getDate() / 365) / 164.8;
    const uranusYearsSinceBirth = uranusYearsPassed - (birthdate.getMonth() / 12 + birthdate.getDate() / 365) / 84.02;

    return {
      Mercury: mercuryYearsSinceBirth,
      Venus: venusYearsSinceBirth,
      Mars: marsYearsSinceBirth,
      Jupiter: jupiterYearsSinceBirth,
      Saturn: saturnYearsSinceBirth,
      Neptune: neptuneYearsSinceBirth,
      Uranus: uranusYearsSinceBirth
    };
  }
