// all
const urls2 = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
  "https://api.githubas.com/users/jeresig",
];

Promise.all(urls2.map((url) => fetch(url)))
  .then((responses) => {
    responses.forEach((result, index) => console.log(result, urls2[index]));
    return responses;
  })
  .then((resopnses) =>
    Promise.all(resopnses.map((response) => response.json()))
  )
  .then((users) =>
    users.forEach((user, index) => console.log(user.name, urls2[index]))
  ) // nay Error and result gonna be only error
  .catch((err) => console.log(err));

let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://no-such-url",
];

// return array of promises result
Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  // (*)
  results.forEach((result, num) => {
    if (result.status == "fulfilled") {
      alert(`${urls[num]}: ${result.value.status}`);
    }
    if (result.status == "rejected") {
      alert(`${urls[num]}: ${result.reason}`);
    }
  });
});

//  any first completed promise
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Ошибка!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1

// any true promise else return AggregateError object
Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Error!")), 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Another Error!")), 2000)
  ),
]).catch((error) => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Error!
  console.log(error.errors[1]); // Error: Another Error!
});
