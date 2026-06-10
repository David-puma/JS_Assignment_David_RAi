//1. Write a higher-order function repeat(action, times) that calls action function times times.

function repeat(action, times) {
    for (let i = 0; i < times; i++) {
        action(i)
    }
}
repeat(i => {
    console.log("Repeat:", i)
}, 5)


// 2. Create a function operate(arr, fn) that applies fn to each element using map.

function operate(arr, fn) {
    return arr.map(fn)
}
console.log(
    operate([1, 2, 3], x => x * 2)
)


//3. Write a function filterBy(arr, conditionFn) that returns filtered array using the provided condition.

function filterBy(arr, conditionFn) {
    return arr.filter(conditionFn)
}
console.log(
    filterBy([1, 2, 3, 4], x => x % 2 === 0)
)


// 4. Create a higher-order function logger(fn) that logs "before" and "after" calling fn.

function logger(fn) {
    return function (...args) {
        console.log("Before function call")
        const result = fn(...args)
        console.log("After function call")
        return result
    }
}

const add = (a, b) => a + b

const loggedAdd = logger(add)

console.log(loggedAdd(2, 3))


// 5. Write a function createAdder(x) that returns a new function adding x to its argument.

function createAdder(x) {
    return function (y) {
        return x + y
    }
}

const add10 = createAdder(10)
console.log(add10(5))


// 6. Create a higher-order function sortBy(arr, key) that sorts array of objects by given key.

function sortBy(arr, key) {
    return [...arr].sort((a, b) => a[key] - b[key])
}

const users = [
    { name: "Mike", age: 25 },
    { name: "David", age: 20 }
]

console.log(sortBy(users, "age"))


// 7. Write a function pipeline(...functions) that chains multiple functions (apply one after another).

function pipeline(...functions) {
    return function (value) {
        return functions.reduce((acc, fn) => fn(acc), value)
    }
}

const double = x => x * 2
const addFive = x => x + 5

const process = pipeline(double, addFive)

console.log(process(10))


// 8. Create a higher-order function withTax(taxRate) that returns a function to add tax to price.

function withTax(taxRate) {
    return function (price) {
        return price + price * taxRate
    }
}

const nepalTax = withTax(0.13)

console.log(nepalTax(100))


// 9. Write a function debounce(fn, delay) that delays function execution (basic version).

function debounce(fn, delay) {
    let timer

    return function (...args) {
        clearTimeout(timer)

        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

const sayHello = debounce(() => {
    console.log("Hello after delay")
}, 1000)

sayHello()
sayHello()
sayHello()


// 10. Create a higher-order function memoize(fn) that caches results of expensive pure functions.

function memoize(fn) {
    const cache = {}

    return function (arg) {
        if (cache[arg] !== undefined) {
            console.log("From cache")
            return cache[arg]
        }

        const result = fn(arg)
        cache[arg] = result
        return result
    }
}

const slowSquare = memoize(x => x * x)

console.log(slowSquare(5))
console.log(slowSquare(5))