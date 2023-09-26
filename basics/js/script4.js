// <-->
const label = {
  info: {
    place: "main",
    text: "abc",
    for: "form_date",
  },
  backend_data: "hf3hjaso90342basasdn",
};

// !!!
const underLabel = {
  info: { ...label.info }, // no mutation
  backend_data: "gfbby347r8gvasdhuda312",
};
label.info.text = "Lorem ipsum";
console.table(underLabel);
console.table(label);

// <-->
const timeOfWatch = 45.9;
console.log(`${timeOfWatch * 60} sec`);

const fn = (a) => {
  return `${a}...10`;
};
console.log(fn(32));

// !!!

const func = (a, b) => a + b; // work! (inplised return)

console.log(Date());

const modifyObj = (obj, dateOfAdd = Date()) => ({
  ...obj,
  dateOfAdd,
}); // inplised return

const modifyObj2 = (obj, dateOfAdd = Date()) => {
  const reterned = { ...obj, dateOfAdd };
  return reterned;
};

const myobj = {
  content: "Some text",
  author: "райн гослинг",
};

console.table(modifyObj(myobj));
console.table(modifyObj2(myobj));
