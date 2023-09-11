const nojs = document.querySelector('.nojs');
const btnHeaderElement = document.querySelector('.js-toggle');
const header = document.querySelector('.header');

const onToggleClick = (evt) => {
  evt.preventDefault();

  header.classList.toggle('show-menu');
};

export const getMenuToggle = () => {
  if (nojs) {
    nojs.classList.remove('nojs');
  }

  if (btnHeaderElement) {
    btnHeaderElement.addEventListener('click', onToggleClick);
  }
};
