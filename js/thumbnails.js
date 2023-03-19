import { generatePhotoGallery } from './data.js';


const picturesContainer = document.querySelector('.pictures');

const picturesTitle = picturesContainer.querySelector('.pictures__title');
picturesTitle.classList.remove('visually-hidden');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesGallery = generatePhotoGallery();
const pictureGalleryFragment = document.createDocumentFragment();


picturesGallery.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  pictureGalleryFragment.append(pictureElement);
});

picturesContainer.append(pictureGalleryFragment);
