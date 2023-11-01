import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

function resetFormData() {
  formData = { email: '', message: '' };
}

resetFormData();
if (localStorage.getItem(LS_KEY)) {
  formData = JSON.parse(localStorage.getItem(LS_KEY));
}

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener(
  'input',
  throttle(e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
  }, 500)
);

form.addEventListener('submit', e => {
  if (!formData.message || !formData.email) {
    alert('you have to fill in all fields');
    return;
  }
  e.preventDefault();
  console.log(formData);
  resetFormData();
  localStorage.removeItem(LS_KEY);
  form.reset();
});
