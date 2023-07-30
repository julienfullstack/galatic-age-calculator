import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BdayCalculator from './calculator.js';
import yearsToPass from './calculator.js';



/// UI LOGIC ///

const nth = (d) => {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
};

function handleAgeChecker(event) {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const inputtedAge = parseInt(document.querySelector('#inputtedAge').value);
}

function handleYearsPassed(event) {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const earthAge = parseInt(document.querySelector('#earthAge').value);
  const futureAge = parseInt(document.querySelector('#futureAge').value);
}


window.addEventListener("load", function() {
  document.querySelector("#age-checker-form").addEventListener("submit", handleAgeChecker);
  
  document.querySelector("#years-passed-form").addEventListener("submit", handleYearsPassed);
});