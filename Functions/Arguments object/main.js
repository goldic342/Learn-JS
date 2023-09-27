function longestString() {
  // you sont need to call args
  let longest = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
// infinity args like *args in python
function longestArray() {
  let longest = [];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return [longest, longest.length];
}

console.log(longestString("dasdas", "ddasdasdhbasyhd", "892734weghiuy"));
console.log(longestArray([132, 423, 322, 23, 23, 232], [12, 213], []));
