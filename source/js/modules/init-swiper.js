import {initVideos} from './init-video';

export const initSwiperIntro = () => {
  const slider = document.querySelector('.hero__swiper');
  if (!slider) {
    return null;
  }

  const [youtubePlayer] = initVideos();
  const audioPlayer = slider.querySelector('.hero__audio');
  const audioPlayTemplate = audioPlayer ? audioPlayer.innerHTML : '';

  const swiperIntro = new window.Swiper(slider, {
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
    on: {
      slideChange(currentSlider) {
        youtubePlayer.pause();

        const activeSlide = currentSlider.slides[currentSlider.activeIndex];
        if (audioPlayTemplate && !activeSlide.querySelector('.hero__audio')) {
          audioPlayer.innerHTML = '';
          audioPlayer.innerHTML = audioPlayTemplate;
        }
      },
    },
  });

  return swiperIntro;
};

export const initSwiperUpcomingTours = () => {
  const swiperUpcomingTours = new window.Swiper('.upcoming-tours__swiper', {
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

  return swiperUpcomingTours;
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

export const initSwiperReviews = () => {
  const swiperReviews = new window.Swiper('.reviews__swiper', {
    breakpoints: {
      320: {
        allowTouchMove: true,
        spaceBetween: 30,
        slidesPerView: 1,
      },
      768: {
        allowTouchMove: false,
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1200: {
        centeredSlides: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.reviews__btn-next',
      prevEl: '.reviews__btn-prev',
    },
  });

  return swiperReviews;
};

export const initSwiperAdvantages = () => {
  const handleMediaChange = (event) => {
    return event.matches ? swiperAdvantages : swiperAdvantages.destroy();
  };

  const mediaQuery = window.matchMedia('(min-width: 1199px)');
  mediaQuery.addEventListener('change', handleMediaChange);

  const swiperAdvantages = new window.Swiper('.advantages__swiper', {
    spaceBetween: 30,
    allowTouchMove: false,
    initialSlide: 2,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.advantages__btn-next',
      prevEl: '.advantages__btn-prev',
    },
  });

  return handleMediaChange(mediaQuery);
};

export const initSwiperGallery = () => {
  const swiperGallery = new window.Swiper('.gallery__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 5,
    navigation: {
      nextEl: '.gallery__btn-next',
      prevEl: '.gallery__btn-prev',
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: false,
      },
      1200: {
        initialSlide: 2,
        centeredSlides: true,
      },
    },
  });

  return swiperGallery;
};
