//first ( ) means that we cant call params of functions 
(() => {
  let initParam = 32;
  console.log("Some initiation process");
})(); // () after function automatically  call it
console.log(initParam); // error
    