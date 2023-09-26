//<-->
const test = document.getElementById("test");
const keyPress = function (e) {
  console.log("keypress:" + e.key);
};
const keyUp = function (e) {
  console.log("keyup" + e.key);
};

test.addEventListener("keypress", keyPress);
test.addEventListener("keyup", keyUp);

const mouseText = document.querySelector("#mouseEvents");
const onMouseDown = function () {
  mouseText.style.color = "red";
};
const onMouseUp = function () {
  mouseText.style.color = "blue";
};
const onContextMenu = function () {
  mouseText.style.color = 'green'
}
mouseText.addEventListener("mousedown", onMouseDown);
mouseText.addEventListener("mouseup", onMouseUp);
mouseText.addEventListener("contextmenu", onContextMenu);