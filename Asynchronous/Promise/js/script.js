// simple Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});
console.log(promise); //fulfiled

// Promise with errror
const errPromise = new Promise((resolve, reject) => {
  // call reject with Error object basicly
  setTimeout(() => reject(new Error("Something went wrong :(")), 2000);
});
console.log(errPromise);

// base Promise (ussaly in practice)
new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 3000);
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.warn(err);
  })
  .finally(() => console.log("Closing connections"));


