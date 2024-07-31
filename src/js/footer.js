import './components/form-validation';
import './components/form-storage';
import './components/api';
import './components/modal';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { formData, submitLocalStorageClear } from './components/form-storage';
import { sendPost } from './components/api';

const refs = {
  form: document.querySelector('form'),
  email: document.querySelector('input[name="email"]'),
  comment: document.querySelector('input[name="comment"]'),
};

refs.form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!refs.email.value || !refs.comment.value) {
    iziToast.warning({ message: 'Please fill all places' });
    return;
  }
  await sendPost(formData);
  submitLocalStorageClear();
});
