const login = document.getElementById("user-login");
const password = document.getElementById("user-password");
const message = document.getElementById("message-login");
const button = document.getElementById("submit");
const validate = function () {
  try {
    if (login.innerHTML === "" || password.innerHTML === "") {
      throw "Cant be null";
    } else {
    }
  } catch (Error) {
    if (Error == false) {
      message.innerHTML = "";
      message.style.display = "none";
    } else {
      message.style.display = "block";
      message.innerHTML = Error;
    }
  }
};

button.addEventListener("click", validate);
