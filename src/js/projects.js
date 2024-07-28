import Swiperr from 'swiper/bundle';

new Swiperr('.swiper-pr', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.projects-btn-next',
    prevEl: '.projects-btn-prev',
  },

  slidesPerView: 1,
  spaceBetween: 34,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
