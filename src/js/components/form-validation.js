const refs = {
  form: document.querySelector('form'),
  email: document.querySelector("input[type='email']"),
  message: document.querySelector('.check__message'),
};

refs.email.addEventListener('input', () => {
  if (refs.email.validity.valid) {
    showSuccess();
  } else {
    showError();
  }
});

function resetMessageSpan() {
  refs.email.classList.remove('invalid');
  refs.email.classList.remove('valid');
  refs.message.textContent = '';
}

function showSuccess() {
  refs.email.classList.add('valid');
  refs.message.style.color = '#3cbc81';
  refs.message.textContent = ' Success!';
}

function showError() {
  if (!refs.email.validity.valid) {
    refs.email.classList.add('invalid');
    refs.message.style.color = '#e74a3b';
    refs.message.textContent = 'Invalid email, try again';
  }
}

export { resetMessageSpan };
