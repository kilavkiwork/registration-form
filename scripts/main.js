// const showPassButton = passwordInput.parentElement.querySelector('.show-hide');
const fields = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('input');
const passInputs = document.querySelectorAll('input[type="password"]');
const eyeButtons = document.querySelectorAll('.eye');

const password = document.querySelector('input[name="password"]');
const confirmPassword = document.querySelector(
  'input[name="confirm-password"]'
);

//
// validation forms
const configs = {
  name: {
    validator: (value) => !!value.trim(),
    err: 'Name is required',
  },
};

//
function validateForm(formData) {
  for (const [key, config] of Object.entries(configs)) {
    const value = formData[key] || '';
    if (!config.validator(value)) {
      console.log(config.err);
    }
  }
}

const formName = document.querySelector('input[name="name"]');
console.log(formName);
formName.addEventListener('blur', () => {
  validateForm(formName);
});

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
  if (event.target.name === 'submit') return;
  field.querySelector('label').style.opacity = event.target.value === '' ? 1 : 0;
}

inputs.forEach((input) => {
  input.addEventListener('blur', (event) => setVisibilityLabel(event));
});

//
// valid email
//

// ==================
// const nameToConfig = {
//   name: {
//     validator: (value) => !!value.trim(), // Перевіряє, чи поле не порожнє
//     err: 'Name is required', // Помилка для цього поля
//   },
//   email: {
//     validator: isValidEmail, // Функція перевірки email
//     err: 'Email is not valid', // Помилка для цього поля
//   },
// };

// function validateForm(formData) {
//   const errors = {}; // Створюємо об'єкт для зберігання помилок

//   for (const [key, config] of Object.entries(nameToConfig)) {
//     console.log(key, config);

//     const value = formData[key] || ''; // Отримуємо значення поля або порожній рядок
//     if (!config.validator(value)) {
//       errors[key] = config.err; // Якщо валідація не пройдена, зберігаємо помилку
//     }
//   }

//   return errors; // Повертаємо об'єкт з помилками
// }

// const formData = {
//   name: '', // Порожнє поле
//   email: 'test@example.com', // Валідний email
// };

// const errors = validateForm(formData); // Перевіряємо дані форми

// if (Object.keys(errors).length) { // Якщо є помилки
//   console.log('Помилки:', errors); // Виводимо помилки
// } else {
//   console.log('Валідація пройдена!'); // Якщо помилок немає
// }

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// test
// const nameToConfig = {
//   name: {
//     validator: (value) => !!value.trim(),
//     err: 'Name is required',
//   },
//   email: {
//     validator: isValidEmail,
//     err: 'Email is not valid',
//   },
// };

// for (const [key, config] of Object.entries(nameToConfig)) {
//   console.log(key, config);
// }
