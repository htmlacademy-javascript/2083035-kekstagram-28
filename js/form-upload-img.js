import { isEscapeKey } from './util.js';
import { validate } from './validation.js';
import { resetScale } from './img-scale.js';
import { resetEffects } from './img-effects.js';


const uploadFileControl = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const uploadForm = document.querySelector('#upload-select-image');

// Закрытие окна загрузки фото по клавише ESC
const hideModalPressEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

// Закрытие окна загрузки фото по клику на крестик
const hideModal = () => {
  resetScale();
  resetEffects();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', hideModalPressEsc);
};

imgUploadCancel.addEventListener('click', hideModal);

// Открытие окна загрузки фото
const showModal = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', hideModalPressEsc);
};

uploadFileControl.addEventListener('change', onFileUpload);

function onFileUpload(evt) {

  const input = evt.target;
  const file = input.files[0];
  const reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    showModal();
  };

  reader.onerror = function () {
  };

}

const openUploadImgForm = (evt) => {
  evt.preventDefault();
  if (validate()) {
    uploadForm.submit();
  }

};

uploadForm.addEventListener('submit', openUploadImgForm);

export { openUploadImgForm };
