# Projects related to DOM

## Project link

[click here] (

)

# Solution code

## project 1

```jaavscript
console.log("Vedant")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = 'purple';
    }
  });
});


```

## project 2
```
const form = document.querySelector('form');
// This usecase will give you empty values
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  const message = document.querySelector('#message');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  // results.innerHTML = `${height}`;
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  // results.innerHTML = ` Weight is ${weight}`;
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      message.innerHTML = `<span>Your BMI is ${bmi}, You are Underweight </span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message.innerHTML = `<span>Your BMI is ${bmi}, You are Normal </span>`;
    } else if (bmi > 24.9) {
      message.innerHTML = `<span>Your BMI is ${bmi}, You are Overweight </span>`;
    }
  }
});

```