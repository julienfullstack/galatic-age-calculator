import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeCalculator from './age-calculator';

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
