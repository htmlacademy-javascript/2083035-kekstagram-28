import {checkLength, checkRepeats} from './util.js';

const COMMENT_MAX_LENGTH = 140;
const HASHTAG_MAX_LENGTH = 19;
const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_MAX_QUANTITY = 5;
const MESSAGES = {
  hasHash: `Первый символ # далее буквы и числа, но не более ${HASHTAG_MAX_LENGTH} шт.`,
  maxQuantity: `Максимально может быть ${HASHTAG_MAX_QUANTITY} хэштегов`,
  noRepetitions: 'Хэштеги не могут повторяться',
  maxLengthComment: `Максимальная длина комментария ${COMMENT_MAX_LENGTH} символов`
};
const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('[name="hashtags"]');
const commentInput = uploadForm.querySelector('[name="description"]');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'text__error'
});

const checkHasHash = () => hashtagInput.value !== '' ? hashtagInput.value
  .trim()
  .split(' ')
  .filter(Boolean)
  .every((hashtag) => HASHTAG_REGEX.test(hashtag)) : true;
const checkMaxQuantity = () => checkLength(hashtagInput.value.split(' ').filter(Boolean), HASHTAG_MAX_QUANTITY);
const checkNoRepetitions = () => checkRepeats(hashtagInput.value.split(' ').filter(Boolean));
const checkMaxLengthComment = () => checkLength(commentInput.value, COMMENT_MAX_LENGTH);

pristine.addValidator(hashtagInput, checkHasHash, MESSAGES.hasHash);
pristine.addValidator(hashtagInput, checkMaxQuantity, MESSAGES.maxQuantity);
pristine.addValidator(hashtagInput, checkNoRepetitions, MESSAGES.noRepetitions);
pristine.addValidator(commentInput, checkMaxLengthComment, MESSAGES.maxLengthComment);

export const validate = () => pristine.validate();
export const reset = () => pristine.reset();
