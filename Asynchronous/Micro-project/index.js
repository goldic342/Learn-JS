const sendButton = document.getElementById("sendButton");
const inputText = document.getElementById("inputText");

function getInputValue() {
  return inputText.value;
}

function loadGithub(userName) {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );
}

function createAvatar(name) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement("img");
    img.src = name.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    setTimeout(() => {
        img.remove()
        resolve(name)
    }, 5000)
  });
}

function getUserAvatar() {
  const user = getInputValue();
  loadGithub(user)
  .then((userObject) => createAvatar(userObject))
  .then(userObject => console.log(userObject))
}

sendButton.addEventListener("click", getUserAvatar);
