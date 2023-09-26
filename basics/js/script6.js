//<-->
const userGuest = true;
const serverGuest = false;
const mainGuest = userGuest === serverGuest ? true : false;
console.log(mainGuest);
const array = [1, 2, 3, 52, 4, 5];
for (let index = 0; index < array.length; index++) {
  let element = array[index];
  element = 0;
}
const someObj = {
  privateKey: "JBHJDS39329@41bh",
  content: "text",
};

for (const key in someObj) {
  console.log(key);
}

for (const letter of "ABCD") {
  array.push(letter);
}
console.log(array);

class Vote {
  constructor(voter, id, age) {
    this.voter = voter;
    this.id = id;
    this.age = age;
  }

  infoVoter() {
    return [this.voter, this.id, this.age];
  }

  static propertys(obj) {
    return obj;
  }
}

const voter1 = new Vote("oleg", "1234", "32");
console.log(voter1.infoVoter());

const myPromise = new Promise((resolve, reject) => {});
// example
myPromise.then((value) => {}).catch((error) => {});

// !!!
// pseudo real promise
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// better example
const API = "https://jsonplaceholder.typicode.com/posts";

const getPosts = function (url) {
  return new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  );
};

getPosts(API)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

