//original fruit array
let fruits = ["apple","coconut"]
fruits.push("orange")
console.log("fruits arr: ", fruits)

//all array and object are mutable iniially
let tempFruits = fruits
tempFruits.push("banana")
console.log("temp fruits: ", tempFruits)
console.log("orignal fruits: ", fruits)

//immutablility principle: original array or object should never be changed i.e must be immutable forever
//for this use sperator 
let newFruits = [...fruits]
newFruits.push("strawberry")
console.log("new fruits: ", newFruits)
console.log("original fruits: ", fruits)