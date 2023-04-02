import './thumbnails.js';
import { getData, sendData } from './api.js';
import { openUploadImgForm } from './form-upload-img.js';
import { generatePhotoGallery } from './data.js';
import { showAlert } from './util.js';
import { showErrorGetDataMessage, showSuccessSendDataMessage, showErrorSendDataMessage } from './user-message.js';
import { hideModal } from './modal.js';

openUploadImgForm(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessSendDataMessage();
  } catch {
    showErrorSendDataMessage();
  }
});

try {
  const data = await getData();
  generatePhotoGallery(data);
} catch (err) {
  showAlert(err.message);
}
