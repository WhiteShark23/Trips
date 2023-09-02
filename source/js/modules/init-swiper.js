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
        allowTouchMove: true,
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        allowTouchMove: false,
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 30,
      }},
    navigation: {
      nextEl: '.upcoming-tours__btn-next',
      prevEl: '.upcoming-tours__btn-prev',
    },
  });

  return swiperIntro;
};

export const initSwiperEducation = () => {
  const swiperEducation = new window.Swiper('.education__swiper', {
    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
        slidesPerView: 4,
        spaceBetween: 30,
      }},
    navigation: {
      nextEl: '.education__btn-next',
      prevEl: '.education__btn-prev',
    },
  });

  return swiperEducation;
};
