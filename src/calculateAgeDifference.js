export function calculateAgeDifference(currentAge, futureBirthdate) {
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
