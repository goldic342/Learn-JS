function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("no-such-user.json") // (3)
  .catch((err) => console.log(err)); // Error: 404

// with async await

async function loadJsonAsync(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    const res = await response.json();
    return res;
  }

  throw new Error();
}
const res = loadJsonAsync("https://api.github.com/users/goldic").catch((err) =>
  console.log(err)
);

res.then((mes) => console.log(mes));
