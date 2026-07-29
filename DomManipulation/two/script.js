const result = document.querySelector('#results');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const calculate = document.querySelector('button');

calculate.addEventListener('click', (e)=>{
    e.preventDefault();
    let h = parseInt(height.value);
    let w = parseInt(weight.value);
    h = h/100;
    let BMI = (w / (h*h)).toFixed(2);
    // result.appendChild("Atharv");
    // BMI = Math.round(BMI);
    result.textContent = BMI;
})