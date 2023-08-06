export function calculateAgeOnOtherPlanets(birthdate) {
  const earthAge = this.earthAge - birthdate.getFullYear();
  const mercuryAge = earthAge / 0.24;
  const venusAge = earthAge / 0.62;
  const marsAge = earthAge / 1.88;
  const jupiterAge = earthAge / 11.86;
  const saturnAge = earthAge / 29.46;
  const neptuneAge = earthAge / 164.8;
  const uranusAge = earthAge / 84.02;

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