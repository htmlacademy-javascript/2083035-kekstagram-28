let arr = ['стол', 'стол', 'стол', 'стул', 'шкаф', 'кровать', 'шкаф'];

const getRepeats = function (array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  return obj;
};

getRepeats(arr);

