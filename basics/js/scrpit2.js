// <-->
const objectPropertyNames = ["grade", "count", "weight"];

const myObj = {};

myObj[objectPropertyNames[0]] = 5;

console.log(myObj);

const obj = {
  foo(arg) {
    console.log(arg);
  },
};

const jsonFile = JSON.stringify(myObj);

console.log(jsonFile);

obj.foo(123);

// !!!
const array = [1, 2, 3, 4, 5]; // array is oobject
let array2 = array;
array2.push(10);
console.log(array);
console.log(array2);

// <-->

const someObj = {
  city: "New York",
  peoples: 42342,
  info: {
    main: "big",
    isPopular: true,
  },
};
// !!!
let someObj2 = Object.assign({}, someObj);
let someObj3 = { ...someObj };
let noMutationObj = JSON.parse(JSON.stringify(someObj)); // NO MUTTATION best practice (i think)

someObj3.info.isPopular = null; // !Mutation in V obj.prop.prop V
someObj2.info.main = null; // !Mutation
noMutationObj.info.main = "you see?";

console.log(noMutationObj);
console.log(someObj2);
console.log(someObj);
