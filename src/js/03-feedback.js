import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', onChange);
refs.form.addEventListener('submit', onSubmit);

const thtottledLocalSorageUpdate = throttle(inputData => {
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}, 500);

function onChange(e) {
  const inputData = {
    email: refs.form.elements.email.value.trim(),
    message: refs.form.elements.message.value.trim(),
  };

  thtottledLocalSorageUpdate(inputData);
}

const dataFromStorage =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};

if (dataFromStorage.email) {
  refs.form.elements.email.value = dataFromStorage.email;
}
if (dataFromStorage.message) {
  refs.form.elements.message.value = dataFromStorage.message;
}

function onSubmit(e) {
  e.preventDefault();

  dataFromStorage ?? console.log(dataFromStorage);

  localStorage.removeItem('feedback-form-state');
  refs.form.reset();
}
