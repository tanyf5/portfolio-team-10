import { sendPost } from './api';
import { showModalResponse } from './modal';

const formData = {};

const refs = {
  form: document.querySelector('form'),
};

const LOCAL_KEY = 'userData';

// output user data
const savedUserData = JSON.parse(localStorage.getItem(LOCAL_KEY));
if (savedUserData) {
  Object.assign(formData, savedUserData);
  refs.form.email.value = formData.email;
  refs.form.comment.value = formData.comment;
}

refs.form.addEventListener('input', inputHandler);
refs.form.addEventListener('submit', submitHandler);

//do save user data in the localStorage
function inputHandler(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

// do reset form after submit, else keeps data in the inputs
function submitHandler(event) {
  event.preventDefault();
  if (!formData.email || !formData.comment) {
<<<<<<< Updated upstream
    alert('Please fill all places');
=======
    alert('Please fill all fields!');
>>>>>>> Stashed changes
    return;
  }
  sendPost(formData);
  showModalResponse();
  localStorage.removeItem(LOCAL_KEY);
  // clear user data object after submit
  for (let key in formData) {
    formData[key] = '';
  }
  refs.form.reset();
}

export { formData };
