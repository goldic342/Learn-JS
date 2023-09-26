//<-->
const mover = document.querySelector("#tap");
window.addEventListener("touchmove", (e) => {
  mover.style.left = e.targetTouches[0].pageX + "px";
  mover.style.top = e.targetTouches[0].pageY + "px";
})