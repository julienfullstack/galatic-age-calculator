// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

// BUSINESS LOGIC //

class AgeCalculator {
  constructor() {
    const birthdayDate = new Date();
    this.earthAge = birthdayDate.getFullYear();
  }

  calculateAgeOnOtherPlanets(birthdate) {
    const earthAge = this.earthAge - birthdate.getFullYear();
    const mercuryAge = earthAge / 0.24;
    const venusAge = earthAge / 0.62;
    const marsAge = earthAge / 1.88;
    const jupiterAge = earthAge / 11.86;
    const saturnAge = earthAge / 29.46;
    const neptuneAge = earthAge / 164.8;
    const uranusAge = earthAge / 84.02;

    return {
      Mercury: mercuryAge,
      Venus: venusAge,
      Mars: marsAge,
      Jupiter: jupiterAge,
      Saturn: saturnAge,
      Neptune: neptuneAge,
      Uranus: uranusAge
    };
  }

  calculateYearsPassed(birthdate) {
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


// UI LOGIC //

function handleBirthdate(event) {
  event.preventDefault();

  const inputtedBirthdate = document.getElementById('inputtedBirthdate').value;
  const birthdate = new Date(inputtedBirthdate);

  const calculator = new AgeCalculator();
  const ageOnOtherPlanets = calculator.calculateAgeOnOtherPlanets(birthdate);
  const yearsPassed = calculator.calculateYearsPassed(birthdate);

  document.querySelector('.mercury-age').textContent = ageOnOtherPlanets.Mercury.toFixed(2);
  document.querySelector('.venus-age').textContent = ageOnOtherPlanets.Venus.toFixed(2);
  document.querySelector('.mars-age').textContent = ageOnOtherPlanets.Mars.toFixed(2);
  document.querySelector('.jupiter-age').textContent = ageOnOtherPlanets.Jupiter.toFixed(2);
  document.querySelector('.saturn-age').textContent = ageOnOtherPlanets.Saturn.toFixed(2);
  document.querySelector('.neptune-age').textContent = ageOnOtherPlanets.Neptune.toFixed(2);
  document.querySelector('.uranus-age').textContent = ageOnOtherPlanets.Uranus.toFixed(2);

  document.querySelector('.mercury-years-passed').textContent = yearsPassed.Mercury.toFixed(2);
  document.querySelector('.venus-years-passed').textContent = yearsPassed.Venus.toFixed(2);
  document.querySelector('.mars-years-passed').textContent = yearsPassed.Mars.toFixed(2);
  document.querySelector('.jupiter-years-passed').textContent = yearsPassed.Jupiter.toFixed(2);
  document.querySelector('.saturn-years-passed').textContent = yearsPassed.Saturn.toFixed(2);
  document.querySelector('.neptune-years-passed').textContent = yearsPassed.Neptune.toFixed(2);
  document.querySelector('.uranus-years-passed').textContent = yearsPassed.Uranus.toFixed(2);
}

document.getElementById('birthdate-form').addEventListener('submit', handleBirthdate);

function handleAgeDifference(event) {
  event.preventDefault();

  const currentAge = document.getElementById('currentAge').value;
  const futureBirthdate = document.getElementById('futureBirthdate').value;

  const calculator = new AgeCalculator();
  const ageDifference = calculator.calculateAgeDifference(currentAge, futureBirthdate);

  document.querySelector(".mercury-age-difference").textContent = ageDifference.Mercury.toFixed(2);
  document.querySelector(".venus-age-difference").textContent = ageDifference.Venus.toFixed(2);
  document.querySelector(".mars-age-difference").textContent = ageDifference.Mars.toFixed(2);
  document.querySelector(".jupiter-age-difference").textContent = ageDifference.Jupiter.toFixed(2);
  document.querySelector(".saturn-age-difference").textContent = ageDifference.Saturn.toFixed(2);
  document.querySelector(".neptune-age-difference").textContent = ageDifference.Neptune.toFixed(2);
  document.querySelector(".uranus-age-difference").textContent = ageDifference.Uranus.toFixed(2);
}

document.getElementById('age-difference-form').addEventListener('submit', handleAgeDifference);
