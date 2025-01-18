// const showPassButton = passwordInput.parentElement.querySelector('.show-hide');
const fields = document.querySelectorAll('.field');
const passInputs = document.querySelectorAll('input[type="password"]');
const eyeButtons = document.querySelectorAll('.eye');

const password = document.querySelector('input[name="password"]');
const confirmPassword = document.querySelector('input[name="confirm-password"]');


//
// show-hide password and eye
function toggleVisibility(event) {
  event.preventDefault();
  const field = event.target.closest('.field');
  const input = field.querySelector('input');

  if(input) {
    input.type = input.type === 'password'
      ? 'text'
      : 'password'
  }
  
  field.classList.toggle('hide')  
}

eyeButtons.forEach((button) => {
  button.addEventListener('click', toggleVisibility);
});

//
// valid email
//

