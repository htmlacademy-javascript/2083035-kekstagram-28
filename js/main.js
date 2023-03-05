// Переменные.
const PHOTO_COUNT = 25;

const DESCRIPTIONS = [
  'Горы',
  'Океан',
  'Собака',
  'Стакан',
  'Букет',
  'Бокал',
];

const NAMES = [
  'Марина',
  'Иван',
  'Карина',
  'Федор',
  'Анна',
  'Роман',
];

const MESSAGES = [
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'В целом всё неплохо. Но не всё.',
];

// Ищем случайное число.
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Генерируем уникальные идентификаторов.
function createIdGenerator() {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

// Генерируем ID для фото и комментария.
const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();

//Создаем комментарий.
const createComment = () => {
  const randomIdComment = generateCommentId();
  const randomIdAvatar = getRandomInteger(1, 6);
  const randomIdMassage = getRandomInteger(0, MESSAGES.length - 1);
  const randomIdNames = getRandomInteger(0, NAMES.length - 1);

  return {
    id: randomIdComment,
    avatar: `img/avatar-${randomIdAvatar}.svg`,
    message: MESSAGES[randomIdMassage],
    name: NAMES[randomIdNames],
  };
};

// Создаем описание для фото.
const createCardDescription = () => {
  const randomComment = createComment();
  const randomPhotoId = generatePhotoId();
  const randomDescriptionId = getRandomInteger(0, DESCRIPTIONS.length - 1);
  const randomLikesNumber = getRandomInteger(15, 200);

  return {
    id: randomPhotoId,
    url: `photos/${randomPhotoId}.jpg`,
    description: DESCRIPTIONS[randomDescriptionId],
    likes: randomLikesNumber,
    comments: randomComment,
  };
};

const createDescriptionsForAll = Array.from({ length: PHOTO_COUNT }, createCardDescription);
//eslint-disable-next-line
console.log(createDescriptionsForAll);


