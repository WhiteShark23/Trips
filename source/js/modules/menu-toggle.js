const nojs = document.querySelector('.nojs');
const btnHeaderElement = document.querySelector('.js-toggle');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const linkHeaderElements = header.querySelectorAll('.navigation__item');

const onToggleClick = (evt) => {
  evt.preventDefault();

  header.classList.toggle('show-menu');
  body.classList.toggle('is-active');
};

const onCloseMenuClick = () => {
  header.classList.remove('show-menu');
  body.classList.remove('is-active');
};

export const getMenuToggle = () => {
  if (nojs) {
    nojs.classList.remove('nojs');
  }

  if (btnHeaderElement) {
    btnHeaderElement.addEventListener('click', onToggleClick);
  }
};

export const сloseMenu = () => {
  for (let i = 0; i < linkHeaderElements.length; i++) {
    linkHeaderElements[i].addEventListener('click', onCloseMenuClick);
  }
};
