const fields = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('input:not([type="submit"])');
const passInputs = document.querySelectorAll('input[type="password"]');
const eyeButtons = document.querySelectorAll('.eye');
const statusImages = document.querySelectorAll('.status img');

const password = document.querySelector('input[name="password"]');
/* ;
const confirmPassword = document.querySelector(
  'input[name="confirm-password"]'
); */

const statuses = {
  path: './assets/images/icons/',
  setPath(value) {
    const icon = value === true ? 'success.svg' : 'error.svg';
    return `${this.path}${icon}`;
  },
};

const validateForm = {
  name: {
    regexp: /[A-Za-z_-]/,
    errorMsg: 'Name is required!',
    validate(value) {
      console.log(value);
      return value ? this.regexp.test(value) : false;
    },
  },
  email: {
    regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMsg: 'Email is required!',
    validate(value) {
      return value ? this.regexp.test(value) : false;
    },
  },
  password: {
    regexp: /.{6,}/,
    errorMsg: 'Password must be at least 6 characters!',
    validate(value) {
      return value ? this.regexp.test(value) : false;
    },
  },
  confirmPassword: {
    errorMsg: 'Passwords do not match!',
    validate(value, password) {
      return value === password;
    },
  },
};

function setStatus(isValid, event) {
  const field = event.target.closest('.field');
  const iconPath = field.querySelector('img');
  const inputName = event.target.name;
  const label = field.querySelector('label');
  const status = field.querySelector('.status');

  iconPath.src = statuses.setPath(isValid);
  status.style.setProperty('display', 'block');

  if (isValid) {
    event.target.style.setProperty('border-color', 'green');
    label.textContent = '';
  } else {
    label.textContent =
      validateForm[inputName]?.['errorMsg'] || 'Invalid input!';
    label.style.setProperty('color', 'red');
    event.target.style.setProperty('border-color', 'red');
  }
}

let passwordValue = '';

// validation forms
inputs.forEach((input) => {
  input.addEventListener('blur', (event) => {
    const { name, value } = event.target;
    let isValid = false;

    if (name === 'password') {
      passwordValue = value;
      isValid = validateForm['password'].validate(value);
    } else if (name === 'confirm-password') {
      isValid = validateForm['confirmPassword'].validate(value, passwordValue);
    } else {
      isValid = validateForm[name].validate(value) || false;
    }

    setStatus(isValid, event);
  });
});

//
//
//
//
//
//
//
//
//
//
// show-hide password and eye
function toggleVisibility(event) {
  event.preventDefault();
  const field = event.target.closest('.field');
  const input = field.querySelector('input');

  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }

  field.classList.toggle('hide');
}

eyeButtons.forEach((button) => {
  button.addEventListener('click', toggleVisibility);
});

//
// opacity jumping text
function setVisibilityLabel(event) {
  const field = event.target.closest('.field');
  // if (event.target.name === 'submit') return;

  field.querySelector('label').style.opacity =
    event.target.value === '' ? 1 : 0;
}

inputs.forEach((input) => {
  input.addEventListener('blur', (event) => {
    setVisibilityLabel(event);
  });
});
