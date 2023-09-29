const array = [1, 1, 1, 1, 11, 2, 2, 2, 2, 2, 45, 3, 3, 33, 2, 2, 22];
for (const iterator of  new Set(array)) {
  console.log(iterator); // no repeats, so its optimyze :)
}
