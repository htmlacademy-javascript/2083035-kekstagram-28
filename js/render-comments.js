const bigPicture = document.querySelector('.big-picture');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsCountTotal = bigPicture.querySelector('.comments-count-total');
const socialCommentList = document.querySelector('.social__comments');
const socialComment = socialCommentList.querySelector('.social__comment');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');

let counter = 5;
let defaultCommentsArray = [];
let defaultCommentsArrayLength = 0;

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

const showCommentsCount = () => {
  socialCommentList.innerHTML = '';
  socialCommentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
};

const getComments = (oldCounter, newCounter) => {
  commentsCountTotal.textContent = defaultCommentsArrayLength;
  const initCommentsArray = [...defaultCommentsArray];
  const shortArray = initCommentsArray.slice(oldCounter, newCounter);
  return shortArray;
};

const hideLoadMoreButton = () => {
  if (defaultCommentsArrayLength <= counter) {
    counter = defaultCommentsArrayLength;
    commentsLoader.classList.add('hidden');
  }
};

const loadMoreComments = () => {

  const oldCounter = counter;
  if (defaultCommentsArrayLength > counter) {
    counter += 5;
  }

  hideLoadMoreButton();

  const shortArray = getComments(oldCounter, counter);
  commentsCount.textContent = counter;

  renderSocialComment(shortArray);

};

const initComments = (comments) => {
  showCommentsCount();

  defaultCommentsArray = comments;
  defaultCommentsArrayLength = comments.length;

  hideLoadMoreButton();

  const newArray = getComments(0, counter);
  commentsCount.textContent = counter;

  renderSocialComment(newArray);

};

const destroyComments = () => {
  defaultCommentsArray = [];
  defaultCommentsArrayLength = 0;
  counter = 5;
};

commentsLoader.addEventListener('click', loadMoreComments);


export { getComments, initComments, destroyComments };

