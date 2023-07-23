import { getData } from './api.js';
import { showAlert, getRandomInteger } from './util.js';
import { renderThumbnails } from './thumbnails.js';

const RANDOM_PHOTOS_AMOUNT = 10;
const ACTIVE_FILTER = 'img-filters__button--active';
const filterSectionElement = document.querySelector('.img-filters');
const allFilterButtonsElement = document.querySelectorAll('.img-filters__button');

const picturesData = await getData().catch(showAlert);
const getDefaultPictures = () => picturesData;

// Показываем фильтры
const showFilter = () => filterSectionElement.classList.remove('img-filters--inactive');

const getRandomPictures = (data) => {
  const randomPictures = [];
  const randomIndexes = [];

  while (randomPictures.length < RANDOM_PHOTOS_AMOUNT) {
    const currentIndex = getRandomInteger(0, data.length - 1);
    if (randomIndexes.includes(currentIndex)) {
      continue;
    }
    randomPictures.push(data[currentIndex]);
    randomIndexes.push(currentIndex);
  }
  return randomPictures;
};

const getSortedByCommentsPictures = (data) => {
  const sortedComments = data.slice().sort((a, b) => b.comments.length - a.comments.length);
  return sortedComments;
};


// Отрисовывем миниатюры, соглано фильтру
const renderFilteredPictures = () => {

  if (ACTIVE_FILTER === 'filter-random') {
    renderThumbnails(getRandomPictures(picturesData));
  } else if (ACTIVE_FILTER === 'filter-discussed') {
    renderThumbnails(getSortedByCommentsPictures(picturesData));
  } else {
    renderThumbnails(getDefaultPictures());
  }
};


export { showFilter, renderFilteredPictures, picturesData }
