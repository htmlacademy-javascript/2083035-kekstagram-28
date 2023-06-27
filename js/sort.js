
const RANDOM_PHOTOS_AMOUNT = 10;
const ACTIVE_FILTER = 'img-filters__button--active';

const filterSectionElement = document.querySelector('.img-filters');
const allFilterButtonsElement = document.querySelectorAll('.img-filters__button');

// Показываем фильтры
const showFilter = () => filterSectionElement.classList.remove('img-filters--inactive');

// Показываем случаные фото
const filterRandom = (items) => items.sort(() => Math.random() - Math.random()).slice(0, RANDOM_PHOTOS_AMOUNT);

// Показываем наиболее обсуждаемые фото
const sortByMostDiscussed = (items) => items.sort((photoFirst, photoSecond) => photoSecond.comments.length - photoFirst.comments.length);

// Отрисовывем миниатюры, соглано фильтру
const changeFilter = (renderGallery) => {
  allFilterButtonsElement.forEach((filterButton) => {
    filterButton.addEventListener('click', (evt) => {
      filterSectionElement.querySelector(`.${ACTIVE_FILTER}`).classList.remove(ACTIVE_FILTER);
      evt.target.classList.add(ACTIVE_FILTER);
      renderGallery();
    });
  });
};


export { filterRandom, sortByMostDiscussed, showFilter, changeFilter };
