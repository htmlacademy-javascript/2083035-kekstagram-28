import {isEscapeKey} from './util.js';

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
const body = document.querySelector('body');

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

// Генерируем большое фото
const renderFullSizePicture = (picture) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  socialCommentList.innerHTML = '';
  socialCommentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  socialCaption.textContent = picture.description;
  commentsCount.textContent = picture.comments.length;

  renderSocialComment(picture.comments);

};

// Закрываем большое фото по клику на крестик
bigPictureCloseButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

// Закрываем большое фото по клавише ESC
document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});


export { renderFullSizePicture };
