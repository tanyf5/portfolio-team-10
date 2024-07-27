import { responseObject } from './api';

const modal = {
  container: document.querySelector('#modal'),
  close: document.querySelector('.modal-button'),
  title: document.querySelector('.modal__title'),
  text: document.querySelector('.modal__text'),
};

modal.close.addEventListener('click', () => {
  modal.container.style.display = 'none';
});

function showModalResponse() {
  modal.container.style.display = 'block';
  modal.title.innerHTML = responseObject.title;
  modal.text.innerHTML = responseObject.message;
}

export { showModalResponse };
