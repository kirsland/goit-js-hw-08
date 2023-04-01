import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

// Заповнюємо поля форми з локального сховища, якщо є наявний відповідний ключ:

let formFields = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

function setFormFields() {
  if (formFields) {
    form.email.value = formFields.email;
    form.message.value = formFields.message;
  }
}

setFormFields();

// Зберігаємо в локальне сховище значення полів при їх зміні кожні 0,5сек:

form.addEventListener('input', throttle(handleFormFieldsChange, 500));

function handleFormFieldsChange(e) {
  formFields = { email: '', message: '' };
  formFields.email = form.email.value;
  formFields.message = form.message.value;
  // console.log(formFields);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formFields));
}

// Очищаємо значення полів в локальному сховищі при сабміті форми:

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
}
