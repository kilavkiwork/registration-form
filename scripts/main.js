// const showPassButton = passwordInput.parentElement.querySelector('.show-hide');
const fields = document.querySelectorAll('.field');
const passwordInput = document.querySelector('input[type="password"]');
const passwordConfirm = document.querySelector(
  'input[type="confirm-password"]'
);
const showPassButton = document.querySelector(
  'input[type="password"] + .show-hide'
);
const showPassConfirmButton = document.querySelector(
  'input[type="confirm-password"] + .show-hide'
);
