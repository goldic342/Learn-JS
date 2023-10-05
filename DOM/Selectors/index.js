// ???
// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];

//   }
// }
console.log(document.getElementById("123").innerHTML);
const ps = document.getElementsByTagName("p");
setTimeout(() => {
  for (const iterator of ps) {
    iterator.innerHTML = 0;
  }
}, 3000);
const query = document.querySelectorAll(".text");
alert("привет");
