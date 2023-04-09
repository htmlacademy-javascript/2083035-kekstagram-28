import { hideModal, showModal } from './modal.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentList = document.querySelector('.social__comments');
const socialComment = socialCommentList.querySelector('.social__comment');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');


// Генерация комментариев на большом фото

const renderSocialComment = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = socialComment.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentsFragment.append(commentElement);
  });
  socialCommentList.append(commentsFragment);
};

// Закрываем большое фото по клику на крестик

bigPictureCloseButton.addEventListener('click', hideModal);

// Генерируем большое фото
const renderFullSizePicture = (picture) => {
  showModal();

  socialCommentList.innerHTML = '';
  socialCommentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  socialCaption.textContent = picture.description;
  commentsCount.textContent = picture.comments.length;

  renderSocialComment(picture.comments);


};

export { renderFullSizePicture };

