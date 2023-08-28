export const initSwiperIntro = () => {
  const swiperIntro = new window.Swiper('.hero__swiper', {
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
  });

  return swiperIntro;
};
