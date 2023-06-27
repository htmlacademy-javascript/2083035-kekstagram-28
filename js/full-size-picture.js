import { hideModal, showModal } from './modal.js';
import { initComments } from './render-comments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const socialCaption = bigPicture.querySelector('.social__caption');


// Закрываем большое фото по клику на крестик

bigPictureCloseButton.addEventListener('click', hideModal);

// Генерируем большое фото
const renderFullSizePicture = (picture) => {
  showModal();

  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  socialCaption.textContent = picture.description;
  initComments(picture.comments);

};


export { renderFullSizePicture };

