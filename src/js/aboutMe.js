import accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const aboutAccordion = document.querySelector('.about-accordion');

new accordion(aboutAccordion, {
  openOnInit: [0],
  collapse: false,
  duration: 2000,
  showMultiple: true,
});
