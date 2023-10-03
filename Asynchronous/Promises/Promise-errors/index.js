new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode1.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  // .catch(() => console.log("in fetch")) || Critical Error
}).catch(() => console.log("In promise cath")); // not working

console.log("End");
