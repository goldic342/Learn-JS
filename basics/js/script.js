//<-->
let array = ["aAa", "aa", "AaaA", "Aa", "a"];

let negativeArr = [1, 3, -213, 43, 433, 543, -432, -42, -5, -76];

let mySet = new Set();
mySet.add(1);
mySet.add(1453);

// for (const iterator of mySet) {
//   console.log(iterator)
// };
// let negativeArrSum = negativeArr.reduce(function(sum, element){
//   return sum + element;
// });

let negativeArrAverage = negativeArr.reduce(function (
  summ,
  element,
  index,
  array
) {
  summ += element;
  if (index === array.length - 1) return summ / array.length;
  else return summ;
});

console.log(negativeArrAverage);
console.log(negativeArrSum);
function validElement(element) {
  return element.length > 2;
}

console.log(array.every(validElement));
console.log(array.some(validElement));
