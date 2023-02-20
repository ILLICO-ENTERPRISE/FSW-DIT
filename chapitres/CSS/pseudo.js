const button = document.querySelector('button');

const form = document.querySelector('form');
const name = document.querySelector('[type=text]');
const email = document.querySelector('[type=email]');
const salary = document.querySelector('[type=number]');

let nameState = false;
let emailState = false;
let salaryState = false;

form.addEventListener('change', function(event) {
  // Check all input VALUE
  if (name.value) nameState = true;
  if (email.value) emailState = true;
  if (salary.value) salaryState = true;

  // Deactivate the button
  if (nameState && emailState && salaryState) {
    button.removeAttribute('disabled')
  }
})

// Display the values when SUBMITTING
button.addEventListener('click', function(event) {
  event.preventDefault();
  console.table(name.value, email.value, salary.value)
})