// 1. Create promise that resolves
const successPromise = new Promise((resolve, reject) => {
    resolve("Promise resolved")
})


// 2. Create promise that rejects
const failPromise = new Promise((resolve, reject) => {
    reject("Promise rejected")
})


// 3. Use .then()
successPromise.then(result => {
    console.log(result)
})


// 4. Use .catch()
failPromise.catch(error => {
    console.log(error)
})


// 7. Create function that returns promise
function getUser() {
    return new Promise(resolve => {
        resolve("David")
    })
}


// 8. Chain promises
getUser()
    .then(name => {
        console.log(name)
        return "Welcome"
    })
    .then(message => {
        console.log(message)
    })


// 6. Wait 2 seconds using setTimeout promise
function waitTwoSeconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("2 seconds completed")
        }, 2000)
    })
}


// 5, 9. Convert to async/await and use await inside async function
async function showMessage() {
    const result = await waitTwoSeconds()
    console.log(result)
}


// 10. Use multiple awaits
async function runTasks() {
    const user = await getUser()
    console.log(user)

    const message = await waitTwoSeconds()
    console.log(message)
}

showMessage()
runTasks()