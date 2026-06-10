//1.Write a pure function multiply(a, b) that returns the product of two numbers
function add(a, b) {
    return a * b // Only depends on parameters a and b
}
console.log(add(5, 8))


 //2.Create a pure function getFullName(firstName, lastName) that returns a concatenated full name with a space.
function name(FullName, LastName) {
    return `${FullName}   ${LastName}`
}
console.log((name("David", "Puma")))


//3.Write a pure function isEven(num) that returns true if the number is even, false otherwise.
function isEven(num) {
    return num % 2 === 0
}
console.log(isEven(4)) // true
console.log(isEven(7)) // false


//4.Create a pure function capitalize(str) that returns the string with the first letter capitalized.
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalize("hello"))
console.log(capitalize("world"))


//5.Write a pure function calculateArea(radius) that returns the area of a circle (use π ≈ 3.14).
function calculateArea(radius) {
    const pi = 3.14
    return pi * radius * radius
}
console.log(calculateArea(5),"unit^2")


//6.Create a pure function getInitials(firstName, lastName) that returns initials like "D.S." for "Dipak Shrestha".
function getInitials(firstName, lastName) {
    return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}.`
}
console.log(getInitials("david", "puma"))


//7.Write a pure function fahrenheitToCelsius(f) that converts Fahrenheit to Celsius.
function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9   //general formula to convert celsious into fahrenheit
}
console.log(fahrenheitToCelsius(67))


//8.Create a pure function reverseString(str) that returns the reversed string.
function reverseString(rev) {
    return rev.split("").reverse().join("")
}
console.log(reverseString("pneumonoultramicroscopicsilicovolcanoconiosis"))


//9.Write a pure function findMax(arr) that returns the largest number in an array.
function findMax(arr) {
    return Math.max(...arr)
}
console.log(findMax([10, 5, 20, 8]))


//10.Create a pure function formatDate(year, month, day) that returns a string in "DD/MM/YYYY" format.
function formatDate(year, month, day) {
    return `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`; //padStart is adding 0 infront of single digit
}
console.log(formatDate(2008, 8, 10))