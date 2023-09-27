const someFn = function (...args) {
  // просто распаковываем как объект и превращаем в массив
  let counter = 0;
  for (const iterator of args) {
    counter += iterator;
  }
  return counter;
};

console.log(someFn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
