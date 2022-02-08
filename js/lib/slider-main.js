'use strict';

function mainSlider () {
  let mySwiper = '';
  let breakpoint = window.matchMedia('(max-width: 767px)');
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

      mySwiper = new Swiper('.main-screen__slider', {
        spaceBetween: 10,
        pagination: {
          el: '.main-screen__slider-pagination',
          type: 'fraction',
        },

        scrollbar: {
          el: '.main-screen__slider-scrollbar',
        },
      });
      return;
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

      mySwiper = new Swiper('.main-screen__slider', {
        pagination: {
          el: '.main-screen__slider-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
          },
        },
      });
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

mainSlider();
mySwiper = new Swiper('.main-screen__slider--comment',
{
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".main-screen__slider--comment",
  },
  mousewheel: true,
  keyboard: true,
});
 