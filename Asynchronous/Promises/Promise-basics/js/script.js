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

//show github avatar with fetch

// load data from json
function loadJsonUser(json_src) {
  return fetch(json_src).then((response) => response.json());
}

// gtihub API
function loadGithubUser(name) {
  return fetch(`https://api.github.com/users/${name}`).then((response) =>
    response.json()
  );
}

function showAvatar(githubUser) {
  return new Promise((resolve, reject) => {
    // creating avatar
    const avatarImg = document.createElement("img");
    avatarImg.src = githubUser.avatar_url;
    avatarImg.className = "promise-avatar-example";
    document.body.append(avatarImg);
    // timer, 3 sec and its removed
    setTimeout(() => {
      avatarImg.remove();
      resolve(githubUser); // for then after function
    }, 3000);
  });
}

loadJsonUser("user.json")
  .then((user) => loadGithubUser(user.name))
  .then(showAvatar)
  .then((githubUser) => console.log(`${githubUser.name} done`));
