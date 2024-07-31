import iziToast from 'izitoast';
import { sendPost } from './api';
import { showModalResponse } from './modal';

iziToast.settings({
  position: 'topCenter',
});

const formData = {};

const refs = {
  form: document.querySelector('form'),
};

const LOCAL_KEY = 'userData';

// output user data
const savedUserData = JSON.parse(localStorage.getItem(LOCAL_KEY));
checkLocalStorageData(savedUserData);
function checkLocalStorageData(object) {
  if (object) {
    Object.assign(formData, object);
    refs.form.email.value = formData.email;
    refs.form.comment.value = formData.comment;
  }
}

refs.form.addEventListener('input', inputHandler);

//do save user data in the localStorage
function inputHandler(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

// do reset form after submit, else keeps data in the inputs
function submitLocalStorageClear() {
  // clear user data object after submit
  for (let key in formData) {
    formData[key] = '';
  }
  refs.form.reset();
  localStorage.removeItem(LOCAL_KEY);
}

export { formData, submitLocalStorageClear };
