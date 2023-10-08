import { renderFullSizePicture } from './full-size-picture.js';
import { showFilter } from './sort.js';

const thumbnailBlock = document.querySelector('.pictures');
const thumbnailTitle = thumbnailBlock.querySelector('.pictures__title');
thumbnailTitle.classList.remove('visually-hidden');


const thumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const thumbnailFragment = document.createDocumentFragment();

const createThumbnail = ({ url, likes, description, comments, id }) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);

  thumbnailElement.querySelector('.picture__img').alt = description;
  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
  thumbnailElement.dataset.thumbnailId = id;

  thumbnailElement.addEventListener('click', () => {
    renderFullSizePicture({ url, likes, comments });
  });

  return thumbnailElement;
};

const renderThumbnails = (pictures) => {
  thumbnailBlock.querySelectorAll('.picture').forEach((item) => item.remove());

  pictures.forEach((picture) => {
    const thumbnailElement = createThumbnail(picture);
    thumbnailFragment.appendChild(thumbnailElement);
  });

  thumbnailBlock.appendChild(thumbnailFragment);

  showFilter();
};

export { renderThumbnails };

