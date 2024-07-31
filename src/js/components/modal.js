import { responseObject } from './api';

const modal = {
  container: document.querySelector('#modal'),
  close: document.querySelector('.modal-button'),
  title: document.querySelector('.modal__title'),
  text: document.querySelector('.modal__text'),
};

modal.close.addEventListener('click', () => {
  closeModal();
});

modal.container.addEventListener('click', event => {
  if (event.target === modal.container) closeModal();
});

document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    closeModal();
  }
});

function closeModal() {
  modal.container.style.display = 'none';
}

function showModalResponse(object) {
  modal.container.style.display = 'flex';
  modal.title.innerHTML = object.title;
  modal.text.innerHTML = object.message;
}

export { showModalResponse };
