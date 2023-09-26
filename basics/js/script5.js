//<-->
try {
  throw new Error("123");
} catch (error) {
  console.error(error);
}

console.log("end");

const callBackFn = () => ({
  specialCode: "H&$VJD@76BE@322$#%",
});

const regenerative = function (returned) {
  const code = returned();
  return `${code.specialCode}18RU`;
};
console.log(callBackFn());
console.log(regenerative(callBackFn));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach(function (el) {
  console.log(el ** 2 / 2);
});

const validateOrder = function (order) {
  if (order) {
    return true;
  } else {
    return false;
  }
};

const orders = ["hat", "pants", "t-shirt", "sneakers", "shorts", "", "", ""];

const ordersStat = orders.map(validateOrder);
console.log(ordersStat);

const arrayObj = array.map((el) => {
  return {
    el,
  };
});

console.log(arrayObj);

// example user form backend

const productUser = {
  name: "jonh",
  password: "qwerty",
  solvency: 93,
  isPremium: true,
};

const { solvency, isPremium } = productUser;

console.log(solvency, isPremium);

const getUserFinance = function ({ solvency, isPremium }) {
  if (isPremium && solvency > 85) {
    return solvency + 200;
  } else if (isPremium && solvency > 40) {
    return solvency + 100;
  } else if (!isPremium && solvency < 40) {
    return solvency;
  } else {
    return 0;
  }
};

console.log(getUserFinance(productUser));
