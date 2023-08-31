export const initSwiperIntro = () => {
  const swiperIntro = new window.Swiper('.hero__swiper', {
    loop: true,
    speed: 300,
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: false,
      },
    },
  });

  return swiperIntro;
};

export const initSwiperUpcomingTours = () => {
  const swiperIntro = new window.Swiper('.upcoming-tours__swiper', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        allowTouchMove: false,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      }},
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  return swiperIntro;
};
