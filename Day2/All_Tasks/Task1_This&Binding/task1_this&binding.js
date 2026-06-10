//1. Create object with name and method using this.
const GOAT = {
    name: "Loki",
    introduce: function () {
        return `His name is ${this.name} and he is GOAT marvel character`
    }
}
console.log(GOAT.introduce())


//2. Call method from another variable and see undefined.
const dude = {
    name: "Odin",
    showName() {
        console.log(this.name)
    }
}
const display = dude.showName
display()


//3. Fix with .bind().
const dude2 = {
    name: "Odin",
    showName() {
        console.log(this.name)
    }
}
const display2 = dude2.showName.bind(dude2)
display2()


//4. Create two objects and use the same method with .bind().
function greet() {
    console.log(`Hello, I am ${this.name}`)
}
const person1 = {
    name: "Gamora"
}
const person2 = {
    name: "Quill"
}
const greetPerson1 = greet.bind(person1)
const greetPerson2 = greet.bind(person2)
greetPerson1()
greetPerson2()


//5. Use this inside a click handler (browser).
//written in HTML file


//6. Write function in strict mode and log this.
// "use strict"
// function showThis() {
//     console.log(this)
// }
// showThis()


//7. Convert normal function to arrow and see difference.
const buddy = {
    name: "Sarveshwar",

    normalFunction: function () {
        console.log(this.name)
    },

    arrowFunction: () => {
        console.log(this.name)
    }
}

buddy.normalFunction()
buddy.arrowFunction()


//8. Create object with nested object and log this.
const friend = {
    name: "Anil",
    address: {
        city: "Itahari",
        tole: "Tarahara",

        showInfo() {
            console.log(this)
        }
    }
}
friend.address.showInfo()


//9. Use .call() to borrow method.
const firstPerson = {
    name: "Rohan",
    showName() {
        console.log(this.name)
    }
}

const secondPerson = {
    name: "Aman"
}
firstPerson.showName.call(secondPerson)


//10 Use .apply() to borrow method.
const personFirst = {
    name: "Sujan",
    showInfo(age, city) {
        console.log(this.name, age, city)
    }
}

const personSecond = {
    name: "Rijan"
}

personFirst.showInfo.apply(personSecond, [21, "Dharan"])