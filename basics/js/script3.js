"use strict"; // not recomended
// <-->
const gunOne = {
  kalibr: 6.9,
  model: "p250",
  isLegal: true,
};

function isNotLegal(gun) {
  gun.isLegal = false;
  return gun;
}

function isNotLegal2(gun) {
  const returnedGun = JSON.parse(JSON.stringify(gun));
  returnedGun.isLegal = false;
  return returnedGun;
}
// !!!
// console.log(isNotLegal(gunOne));
// console.log(gunOne); //Muttation

const newGun = isNotLegal2(gunOne);
console.log(newGun); // no mutation
console.log(gunOne);

// !!! V use strict V
function someFn() {
  a = true;
  return a;
}

// someFn() ERROR
