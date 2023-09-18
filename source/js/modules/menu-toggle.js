import '../utils/focus-lock.js';

const nojs = document.querySelector('.nojs');
const btnHeaderElement = document.querySelector('.js-toggle');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const linkHeaderElements = header.querySelectorAll('.navigation__item');
let isFocusLocked = false;

const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    onCloseMenuClick();
  }
};

const onToggleClick = (evt) => {
  evt.preventDefault();

  header.classList.toggle('show-menu');
  body.classList.toggle('is-active');

  if (isFocusLocked) {
    window.focusLock.unlock('.header');
  } else {
    window.focusLock.lock('.header');
  }
  isFocusLocked = !isFocusLocked;
};

const onCloseMenuClick = () => {
  header.classList.remove('show-menu');
  body.classList.remove('is-active');
  window.focusLock.unlock('.header');
  isFocusLocked = false;
};

export const getMenuToggle = () => {
  if (nojs) {
    nojs.classList.remove('nojs');
  }

  if (btnHeaderElement) {
    btnHeaderElement.addEventListener('click', onToggleClick);
    document.addEventListener('keydown', onDocumentEscKeydown);
  }
};

export const сloseMenu = () => {
  for (let i = 0; i < linkHeaderElements.length; i++) {
    linkHeaderElements[i].addEventListener('click', onCloseMenuClick);
  }
};
