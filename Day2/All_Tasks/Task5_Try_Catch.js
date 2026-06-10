// 1. Try using undefined function
try {
    unknownFunction()
} catch (error) {
    console.log("Undefined Function Error:", error.message)
}


// 2. Divide number by zero
try {
    const result = 10 / 0

    if (!isFinite(result)) {
        throw new Error("Cannot divide by zero")
    }

    console.log(result)
} catch (error) {
    console.log(error.message)
}


// 3. Use custom error message
try {
    throw new Error("Custom error message")
} catch (error) {
    console.log(error.message)
}


// 4. Throw error manually
try {
    throw new Error("Manual error thrown")
} catch (error) {
    console.log(error.message)
}


// 5. Create function with try/catch
function checkAge(age) {
    try {
        if (age < 18) {
            throw new Error("Age must be 18 or above")
        }

        console.log("Access granted")
    } catch (error) {
        console.log(error.message)
    }
}
checkAge(15)
checkAge(20)


// 6. Multiple catch messages
try {
    const age = -5

    if (age < 0) {
        throw new Error("Negative age not allowed")
    }
} catch (error) {
    if (error.message === "Negative age not allowed") {
        console.log("Age Error:", error.message)
    } else {
        console.log("Unknown Error:", error.message)
    }
}


// 7. Use finally
try {
    console.log("Trying...")
} catch (error) {
    console.log(error.message)
} finally {
    console.log("Finally always runs")
}


// 8. Try JSON.parse with invalid JSON
try {
    JSON.parse("{name:'David'}")
} catch (error) {
    console.log("JSON Error:", error.message)
}


// 9. Catch error and log name
try {
    throw new TypeError("Wrong data type")
} catch (error) {
    console.log("Error Name:", error.name)
}


// 10. Use try/catch in async function
async function fetchData() {
    try {
        throw new Error("Async error")
    } catch (error) {
        console.log("Async Catch:", error.message)
    }
}
fetchData()