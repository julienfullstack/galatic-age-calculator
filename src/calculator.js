///both functions create objects containing the responses//

export default function BdayCalculator(inputtedAge) {
  const conversionFactors = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132,
  };

  const ageOnOtherPlanets = {};
  for (const planet in conversionFactors) {
    ageOnOtherPlanets[planet] = inputtedAge / conversionFactors[planet];
  }

  return ageOnOtherPlanets;
}

export default function yearsToPass(earthAge, futureAge) {
  const conversionFactors = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132,
  };


  const yearsToFutureAge = {};
  for (const planet in conversionFactors) {
    const planetAge = age / conversionFactors[planet];
    const planetFutureAge = futureAge / conversionFactors[planet];
    const yearsToPass = planetFutureAge - planetAge;
    yearsToFutureAge[planet] = yearsToPass;
  }

  return yearsToFutureAge;
}
