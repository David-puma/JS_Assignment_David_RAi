//.1 Use map to double all numbers in [1, 2, 3, 4, 5].
const numbers = [1,2,3,4,5]
const doubledNum = numbers.map(num => num * 2)
console.log(doubledNum)


//2. Use filter to get all even numbers from [1, 2, 3, 4, 5, 6].
const Number = [1, 2, 3, 4, 5, 6]
const evenNum = Number.filter(num => num % 2 === 0)
console.log("even number :", evenNum)


//3. Use reduce to calculate the sum of [10, 20, 30, 40].
const sumNumber = [10, 20, 30, 40]
const sum = sumNumber.reduce((acc, cur) => acc + cur, 0)
console.log("Total sum :", sum)


//4. Use find to get the first object with age > 18 from an array of user objects.
const user = [
    {name: "Bikram", age: 10},
    {name: "M.D.", age: 20},
    {name: "Utsab", age: 33},
    {name: "Kushal", age: 9},
    {name: "Manab", age: 18},
    {name: "Aaditya", age: 14}
]
const adult = user.find(boys => boys.age > 18);
console.log("Adults :", adult)


//5. Use forEach to log each element of ["apple", "banana", "orange"] with its index.
const fruits = ["apple","banana","orange"]
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
})


//6.Use map to extract only names from an array of user objects.
const User = [
    {name: "Bikram", age: 10, roll: 15},
    {name: "M.D.", age: 20, roll: 25},
    {name: "Utsab", age: 33, roll: 19},
    {name: "Kushal", age: 9, roll: 10},
    {name: "Manab", age: 18, roll: 35},
    {name: "Aaditya", age: 14, roll: 1}
]
const Name = User.map(reqired => reqired.name)
console.log(Name)


//7. Use filter to get products with price < 100 from an array of product objects.
const product = [
    {name: "copy", price: 150},
    {name: "pen", price: 20},
    {name: "calculator", price: 800},
    {name: "book", price: 500},
    {name: "file", price: 50},
    {name: "colors", price: 80}
]
const affordable = product.filter(cheap => cheap.price < 100)
console.log(affordable)


//8. Use reduce to find the maximum value in an array of numbers.
const Num = [30, 0, 80, 45, 12, 60, 75]
const max = Num.reduce((max, current) => {
    return current > max ? current : max
})
console.log("Max value: ",max)


//9. Use map and filter together to get names of adults (age >= 18) in uppercase.
const Guys = [
    {name: "bikram", age: 10},
    {name: "m.d.", age: 20},
    {name: "utsab", age: 33},
    {name: "kushal", age: 9},
    {name: "manab", age: 18},
    {name: "aaditya", age: 14}
]
const adultNamesUppercase = Guys
    .filter(guy => guy.age >= 18)
    .map(guy => guy.name.toUpperCase())
console.log(adultNamesUppercase)


//10. Use forEach to build an HTML unordered list string from an array of items.
const items = ["Apple", "Banana", "Orange"]
let html = "<ul>"
items.forEach(item => {
    html += `<li>${item}</li>`
})
html += "</ul>"
console.log(html)