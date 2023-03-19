import { generatePhotoGallery } from './data.js';
import {renderFullSizePicture} from './full-size-picture.js';


const picturesContainer = document.querySelector('.pictures');

const picturesTitle = picturesContainer.querySelector('.pictures__title');
picturesTitle.classList.remove('visually-hidden');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesGallery = generatePhotoGallery();
const pictureGalleryFragment = document.createDocumentFragment();


picturesGallery.forEach(({ url, likes, comments }, index) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.setAttribute('id', `photo${index + 1}`);

  pictureElement.addEventListener('click', () => {
    renderFullSizePicture({url, likes, comments});
  });

  pictureGalleryFragment.append(pictureElement);
});

picturesContainer.append(pictureGalleryFragment);


