//1.Create an array colors with 5 color names and log the third element.
const color = ["red","blue","green","yellow","black"]
console.log(color[2])


//2.Create an object book with properties title, author, pages, and publishedYear.
const book = {
    title : "Seto Baagh",
    auther : "Dimond Samsher",
    pages : 567,
    publishYear : 1973
}
console.log("Book details", book)


//3.Add a new property isRead: true to an existing book object immutably (return new object).
const updatedBook = {
    ...book,
    isRead: true
};
console.log("Updated Book:", updatedBook);


//4.Create an array of 3 objects, each representing a student with name and grade.
const students = [
    {
        name: "Bikram",
        grade: "Fail"
    },
    {
        name: "Aadityal",
        grade: "z+"
    },
    {
        name: "David",
        grade: "Fail+"
    }
];
console.log("student detailes :",students)

//5.Create a nested object company with properties name, location, and employees (an array of names).
const company = {
    name : "Microhard",
    location : "USB",
    employees : ["Spiderman", "Thor", "Hulk", "Kang"]
}
console.log("Company details :", company)


//6.From an array numbers = [10, 20, 30], create a new array with each value increased by 5 immutably.
const numbers = [10, 0, 30]
console.log("before increase :", numbers)

const newNumbers = numbers.map(num => num + 5)
console.log("After increase :", newNumbers)


//7.Create an object car and add a new property color immutably.
const car = {
    brand : "Rolls Royce",
    model : "Ghost",
    engine : "twin-turbocharged V12"
}
const updatedCar = {
    ...car,
    color : "Black"
}
console.log(updatedCar)

//8.Create an array shoppingList and add a new item at the beginning immutably.
const shoppingList = ["Coffee", "Bread", "Eggs", "Pancake"]
const updatedShoppingList = ["Carrot", ...shoppingList]
console.log(updatedShoppingList)


//9.Create an object profile with nested address object containing city and country.
const profile = {
    name : "David",
    college : "Shikshyalaya",
    semester : "3rd",
    address : {
        country : "Nepal",
        city : "Lokanthali"
    }
}
console.log(profile)


//10.From an array of objects products, create a new array with only name and price properties.
const products = [
    { name: "Laptop", price: 80000, category: "Electronics" },
    { name: "Phone", price: 20000, category: "Electronics" },
    { name: "Book", price: 200, category: "Education" },
    { name: "Pizza", price: 1000, category: "Food"}
]
const productInfo = products.map(product => ({
    name: product.name,
    price: product.price
}))
console.log(productInfo)