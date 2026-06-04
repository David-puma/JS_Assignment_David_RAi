//Task 1 – Variables and Template Literals Create two variables, firstName and lastName, and combine them into a greeting message using template literals. Log the message.
let firstName = "David"
let lastName = "Puma"
//combining them to create a message
let message = `Hello ${firstName} ${lastName}, Welcome to our Shikshyalaya College`
console.log("message :", message)

//Task 2 – let and const Scope Create a let variable inside a block {} and try to access it outside. Then do the same with a const variable. Observe the errors
{
    let errorMessage = "Hello Sir";
    console.log(errorMessage); // works
}
//console.log(errorMessage); // error occurs in message 
//now in case of const
{
    const pi = 3.14;
    console.log(pi); // works
}
//console.log(pi); // error pi is not defined

//Task 3 – Arrow Function Simple Write an arrow function greet that takes a name and returns "Hello, !". Test it with your name.
const greet = (name) => `Hello, ${name} ! `
console.log(greet("David"))

//Task 4 – Arrow Function with Multiple Parameters Write an arrow function multiply that takes two numbers and returns their product. Log the result for 5 and 6.
const add = (a, b) => {
    return a * b;
}
console.log(add(5, 6));

//Task 6 – Array Destructuring Create an array [10, 20, 30, 40]. Destructure the first two elements into variables and log them.
const numbers = [10, 20, 30, 40];
// array destructuring
const [first, second] = numbers;
console.log(first, second);

//Task 7 – Default Parameters Write a function sayHello with a parameter name that defaults to "Guest" if not provided. Log the output when called with and without an argument.
function sayHello(name = "Guest") {
    console.log(`Hello, ${name}`);
}
// Called with an argument
sayHello("David");
// Called without an argument
sayHello();

//Task 8 – Rest Operator (Sum of Numbers) Write a function sumAll using the rest operator (...numbers) that calculates the sum of any number of inputs. Test with 1, 2, 3, 4.
const sumAll = (...numbers) =>
    numbers.reduce((sum, num) => sum + num, 0);
console.log(sumAll(1, 2, 3, 4));

//Task 9 – Spread Operator with Arrays Create two arrays [1, 2, 3] and [4, 5]. Merge them into a new array using the spread operator and log the result.
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
// merging using spread operator
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

//Task 10 – Merge and Destructure Objects Create two objects: {a: 1, b: 2} and {c: 3, d: 4}. Merge them using the spread operator. Then destructure the merged object to extract a and d and log them.
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
// Merge objects using spread operator
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj)
// Destructure merged object
const { a, d } = mergedObj;
console.log(a,d);