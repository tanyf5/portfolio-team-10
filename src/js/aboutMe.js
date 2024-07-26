import accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import spriteSvgWrap from '../img/icons.svg';

const refs = {
  aboutAccordion: document.querySelector('.about-accordion'),
  swipSkill: document.querySelector('.my-swiper'),
  nextSlide: document.querySelector('.swiper-button-next'),
  btnNext: document.querySelector('.about-btn-next'),
};

console.log(refs);
new accordion(refs.aboutAccordion, {
  openOnInit: [0],
  collapse: false,
  duration: 2000,
  showMultiple: true,
});

const swiper = new Swiper(refs.swipSkill, {
  modules: [Navigation],
  navigation: {
    nextEl: refs.nextSlide,
  },
  // grabCursor: true,

  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
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
