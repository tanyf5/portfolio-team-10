import accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import spriteSvgWrap from '../img/icons.svg';

const refs = {
  aboutAccordion: document.querySelector('.about-accordion'),
  swipSkill: document.querySelector('.about-swipe'),
  nextSlide: document.querySelector('.about-btn-next'),
  btnNext: document.querySelector('.about-btn-next'),
};
//aria-disablet

//!==================== ACCORDION ======================
new accordion(refs.aboutAccordion, {
  openOnInit: [0],
  collapse: false,
  duration: 2000,
  showMultiple: true,
});

refs.aboutAccordion.addEventListener('click', e => {
  const elem = e.target.closest('.ac');
  const activeElem = elem.classList.contains('is-active');

  let linkSvgAcc = elem.querySelector('.about-icon use');

  if (linkSvgAcc && elem) {
    const svgHref = activeElem
      ? './img/icons.svg#icon-arrow-up'
      : './img/icons.svg#icon-arrow-down';

    linkSvgAcc.setAttribute('href', `${svgHref}`);
  }
});

//!==================== SWIPER ======================

const swiper = new Swiper(refs.swipSkill, {
  modules: [Navigation],
  navigation: {
    nextEl: refs.btnNext,
  },
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 0,
  enabled: true,
  loop: true,
  watchOverflow: false,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

refs.btnNext.addEventListener('click', goNextSkill);
function goNextSkill() {
  swiper.slideNext();
}
