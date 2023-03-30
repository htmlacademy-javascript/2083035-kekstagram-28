// Ищем случайное число.
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Генерируем уникальные идентификаторы.
function createIdGenerator() {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

// Проверка нажатой клавиши
const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomInteger, createIdGenerator, isEscapeKey };

// Проверка длины
export const checkLength = (array, maxLength) => array.length <= maxLength;

export const checkRepeats = (array) => {
  const toUpper = array.map((item) => item.toUpperCase());
  const arrayNoRepeats = new Set(toUpper);
  return arrayNoRepeats.size === toUpper.length;
};

// Сообщение об ошибке
const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

export { showAlert };
