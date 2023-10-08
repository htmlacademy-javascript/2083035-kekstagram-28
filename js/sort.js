import { getData } from './api.js';
import { showAlert, debounce } from './util.js';
import { renderThumbnails } from './thumbnails.js';

const RANDOM_PHOTOS_AMOUNT = 25;
const RERENDER_DELAY = 500;

const filterSectionElement = document.querySelector('.img-filters');
const allFilterButtonsElement = document.querySelectorAll('.img-filters__button');

const picturesData = await getData().catch(showAlert);
const getDefaultPictures = () => picturesData;

// Показываем фильтры
const showFilter = () => filterSectionElement.classList.remove('img-filters--inactive');

// Показываем случаные фото
const getRandomPictures = (data) => {
  const sortedPictures = data.sort(() => Math.random() - 0.5).slice(0, RANDOM_PHOTOS_AMOUNT);
  return sortedPictures;
};

// Показываем наиболее обсуждаемые фото
const getSortedByCommentsPictures = (data) => {
  const sortedComments = data.slice().sort((a, b) => b.comments.length - a.comments.length);
  return sortedComments;
};

const activateButton = (button) => {
  button.classList.add('img-filters__button--active');
};

const inactivateButtons = () => {
  allFilterButtonsElement.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};

const renderFilteredPictures = () => {
  if (filterSectionElement.querySelector('#filter-random')) {
    renderThumbnails(getRandomPictures(picturesData));
  } else if (filterSectionElement.querySelector('#filter-discussed')) {
    renderThumbnails(getSortedByCommentsPictures(picturesData));
  } else {
    renderThumbnails(getDefaultPictures());
  }
};

const debouncePicturesRendering = debounce(renderFilteredPictures, RERENDER_DELAY);

const setSortButtonsEventListeners = () => {
  filterSectionElement.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button') && !evt.target.classList.contains('img-filters__button--active')) {
      inactivateButtons();
      activateButton(evt.target);
      debouncePicturesRendering();
    }
  });
};

export { showFilter, renderFilteredPictures, picturesData, setSortButtonsEventListeners };
