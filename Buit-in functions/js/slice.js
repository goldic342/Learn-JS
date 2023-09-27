console.log("SLICE SPLICE");
const message =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ipsam.";
const slicedMg = message.slice(
  message.indexOf("Lorem"),
  message.indexOf("consectetur")
); // returns from  Lorem to consectetur

const array2 = [43, 56, 21, 73, 423, false, true];
array2.splice(2); // delet all from 2 index or (2, <how many>)
console.log(array2);
