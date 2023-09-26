//<-->
const healtPoints = document.getElementById("healt-points");
healtPoints.innerHTML = 10;
const damage = function () {
  if (healtPoints.innerHTML > 0) {
    healtPoints.innerHTML -= 1;
  }
};
healtPoints.addEventListener("click", damage);
