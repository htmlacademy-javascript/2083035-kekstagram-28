// Функция для проверки дли строки

const checkStrLength = (string, length) => string.length <= length;

checkStrLength('Проверяемая строка', 20); // true
checkStrLength('Проверяемая строка', 18); // true
checkStrLength('Проверяемая строка', 10); // false

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;

};
isPalindrome('ДовОд'); // true
isPalindrome('Кекс'); // false
isPalindrome('Лёша на полке клопа нашёл '); // true

// Функция, которая извлекает цифры от 0 до 9 из строки.
// Возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN.

const exstractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }

  let result = '';
  for (let i = 0; i <= string.length - 1; i++) {
    if (isNaN(parseInt(string.at(i), 10))) {
      continue;
    }

    result += string.at(i);
  }
  return parseInt(result, 10);
};

exstractNumber('2023 год'); // 2023
exstractNumber('ECMAScript 2022'); // 2022
exstractNumber('1 кефир, 0.5 батона'); // 105
exstractNumber('агент 007'); // 7
exstractNumber('а я томат'); // NaN

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами.
// Возвращает исходную строку, дополненную указанными символами до заданной длины.

const myPadStart = (string, minLenght, pad) => {
  const actualPad = minLenght - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
myPadStart('1', 2, '0'); // '01';
myPadStart('1', 4, '0'); // '0001'
myPadStart('q', 4, 'werty'); // 'werq'
myPadStart('q', 4, 'we'); // 'wweq'
myPadStart('qwerty', 4, '0'); // 'qwerty'
