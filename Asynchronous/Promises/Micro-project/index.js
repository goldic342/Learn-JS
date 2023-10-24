const sendButton = document.getElementById("sendButton");
const inputText = document.getElementById("inputText");
const imgSection = document.querySelector("#image-section");
let counter = 0;
function getInputValue() {
  return inputText.value;
}

function loadGithub(userName) {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );
}

function createAvatar(userObject) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement("img");
    img.src = userObject.avatar_url;
    img.className = "promise-avatar-example";
    img.id = `avatar-img-${counter}`;
    imgSection.append(img);
    setTimeout(() => {
      img.remove();
      resolve(userObject);
    }, 5000);
    counter++;
  });
}

function getUserAvatar() {
  const user = getInputValue();
  loadGithub(user)
    .then((userObject) => createAvatar(userObject))
    .then((userObject) => console.log(userObject));
}

sendButton.addEventListener("click", getUserAvatar);
