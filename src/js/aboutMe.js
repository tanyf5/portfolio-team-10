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

//!==================== ACCORDION ======================
new accordion(refs.aboutAccordion, {
  openOnInit: [0],
  duration: 2000,
  showMultiple: true,
});

refs.aboutAccordion.addEventListener('click', e => {
  const elem = e.target.closest('.ac-trigger');
  const aboutMainDiv = elem.closest('.ac');
  const linkSvgAcc = elem.querySelector('.about-icon use');
  const activeElem = elem.closest('.is-active');

  if (aboutMainDiv && linkSvgAcc) {
    const iconStan = activeElem ? '#icon-arrow-up' : '#icon-arrow-down';
    linkSvgAcc.setAttribute('href', `${spriteSvgWrap}${iconStan}`);
  }
});

//!==================== SWIPER ======================

const swiper = new Swiper(refs.swipSkill, {
  modules: [Navigation],
  navigation: {
    nextEl: refs.btnNext,
  },
  direction: 'horizontal',
  spaceBetween: 0,
  enabled: true,
  loop: true,
  watchOverflow: false,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

refs.btnNext.addEventListener('click', goNextSkill);
function goNextSkill() {
  swiper.slideNext();
}
