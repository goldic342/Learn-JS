//<-->
const load = function (link, callback) {
  const ajax = new XMLHttpRequest();
  ajax.open("GET", link);
  ajax.onload = () => {
    callback(ajax.responseText)
  };
  ajax.send();
};
load("text.txt", (data) => console.log(data));
