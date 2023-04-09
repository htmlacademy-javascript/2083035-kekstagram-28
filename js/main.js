import './thumbnails.js';
import { getData} from './api.js';
import './form-upload-img.js';
import { generatePhotoGallery } from './data.js';
import { showAlert } from './util.js';

try {
  const data = await getData();
  generatePhotoGallery(data);
} catch (err) {
  showAlert(err.message);
}


