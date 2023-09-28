const weakm = new WeakMap()
const unqieSymbol = Symbol("I`m uniqe")
const object1 ={

    firstName: "Alex",
    lastName: "Nolan"
}
weakm.set(object1, 24) // key can be only obj and...
weakm.set(unqieSymbol, "unqie key") // also Symbol case its uniqe
console.log(weakm)
// Error :) case its not iterable case garbage collector 
for (const iterator of weakm) {
    console.log(iterator)
}