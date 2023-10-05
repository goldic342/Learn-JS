// task from https://learn.javascript.ru/task/rewrite-async-2
// just copied
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadjson(url) {
  const fetchResponse = await fetch(url);
  if (fetchResponse.status == 200) {
    const result = await fetchResponse.json();
    return result;
  }
  throw new HttpError(fetchResponse);
}

async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt("Введите логин?", "iliakan");

    try {
      user = await loadjson(`https://api.github.com/users/${name}`);
      break; // ошибок не было, выходим из цикла
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // после alert начнётся новая итерация цикла
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        // неизвестная ошибка, пробрасываем её
        throw err;
      }
    }
  }

  console.log(`Полное имя: ${user.name}.`);
  return user;
}
demoGithubUser()