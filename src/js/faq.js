import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import spriteSvg from '../img/icons.svg';

new Accordion('.accordion-container', {
  showMultiple: true,
  duration: 250,
});

document.querySelector('.faq__list').addEventListener('click', event => {
  const triggerElement = event.target.closest('.ac-trigger');
  if (!triggerElement) return;

  const faqItem = triggerElement.closest('.ac');
  const arrowIcon = triggerElement.querySelector('.faq__item-icon use');

  if (faqItem && arrowIcon) {
    const isActive = faqItem.classList.contains('is-active');
    const iconId = isActive ? '#icon-arrow-up' : '#icon-arrow-down';
    arrowIcon.setAttribute('href', `${spriteSvg}${iconId}`);
  }
});
