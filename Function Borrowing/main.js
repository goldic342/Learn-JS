//Bind()

const bankAccount1 = {
  money: 423,
  owner: "Jonh Nolan",
  getInfo: function () {
    console.log(`${this.owner} have ${this.money}$`);
  },
};

const bankAccount2 = {
  money: 1831,
  owner: "Angela Lopes",
};
bankAccount1.getInfo();
const getInfo2 = bankAccount1.getInfo.bind(bankAccount2); // returns only function that we can call later (dont call it!!)
getInfo2();

// Call()

const planet = {
  size: 743,
  named: "Earth",
  sayHi: function (pName) {
    console.log(`Hello ${pName} from ${this.named} wich size is ${this.size}`);
  },
};

const planet2 = {
  size: 9423,
  named: "Jupiter",
};

planet.sayHi("Alex");
planet.sayHi.call(planet2, "Bob"); // anotyher params, cant do in bind(). call() just called functions :) and also retuns result of it

//Apply()

const fruit = {
  name: "apple",
  piece: function (person, web_site) {
    return `Hello from ${person} on web-site ${web_site}, ${this.name}`;
  },
};

const fruit2 = {
  name: "orange",
};

const result = fruit.piece.apply(fruit2, ["Alex", "Youtube"]);
console.log(result);
