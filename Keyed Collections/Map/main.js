const hash = new Map();
hash.set("a", "str");
hash.set(1, "number");
hash.set(true, "bool"); // key uniqe
hash.set(true, "another"); // setted with this value
// can set any type keys  and values, sometimes better than object
console.log(hash);
// example
for (const iterator of hash) {
  console.log("-----");
  iterator.forEach((element) => {
    console.log(element, typeof element);
  });
}

console.log(hash.values(), hash.keys());

// clear all Map
hash.clear();
