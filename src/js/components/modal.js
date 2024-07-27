import { responseObject } from './api';

const modal = {
  container: document.querySelector('#modal'),
  close: document.querySelector('.modal-button'),
  title: document.querySelector('.modal__title'),
  text: document.querySelector('.modal__text'),
};

modal.close.addEventListener('click', () => {
<<<<<<< Updated upstream
  closeModal();
});
modal.container.addEventListener('click', event => {
  if (event.target === modal.container) {
    closeModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' || event.key === 'Esc') {
    closeModal();
  }
});

function closeModal() {
  modal.container.style.display = 'none';
}
=======
  modal.container.style.display = 'none';
});
>>>>>>> Stashed changes

function showModalResponse() {
  modal.container.style.display = 'block';
  modal.title.innerHTML = responseObject.title;
  modal.text.innerHTML = responseObject.message;
}

export { showModalResponse };
