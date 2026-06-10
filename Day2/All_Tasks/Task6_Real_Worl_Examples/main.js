// Task 3: Import config from another module
import { API_BASE_URL } from "./config.js"

// Task 4: Import utility function
import { formatCurrency } from "./utils.js"

// Task 5: Import Product class
import { Product } from "./product.js"


// Task 7:
// Create promise that returns settings after 2 seconds
function getSettings() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        theme: "dark",
        language: "English"
      })
    }, 2000)
  })
}


// Task 8:
// Create promise that returns users after 1 second
function fetchUsers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        "Sarveshwar",
        "David",
        "Aman"
      ])
    }, 1000)
  })
}


// Task 9:
// Promise that randomly succeeds or fails
function fetchUsersWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5

      if (success) {
        resolve(["Sarveshwar", "David"])
      } else {
        reject("Server unavailable")
      }
    }, 1000)
  })
}


// Task 10:
// Mock API call for products
function fetchProducts() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          name: "Laptop",
          price: 1200
        },
        {
          name: "Phone",
          price: 800
        }
      ])
    }, 1000)
  })
}


// Task 1:
// this inside object method
const user = {
  name: "David",

  login() {
    console.log(`Welcome ${this.name}`)
  }
}

user.login()


// Task 2:
// Losing this context
const lostContext = user.login.bind(user)

// Prints undefined
lostContext()

// Fix with bind()
const fixedContext =
  user.login.bind(user)

fixedContext()


// Task 7:
// Use .then() with promise
getSettings().then(settings => {
  console.log(settings)
})


// Task 8:
// Use async/await
async function loadUsers() {
  const users = await fetchUsers()

  console.log(users)
}

loadUsers()


// Task 9:
// Handle API errors using try/catch
async function loadUsersSafely() {
  try {
    const users =
      await fetchUsersWithError()

    console.log(users)
  } catch (error) {
    console.log(
      `Could not load users: ${error}`
    )
  }
}

loadUsersSafely()


// Task 10:
// Mini application flow
async function startApp() {
  try {
    console.log(API_BASE_URL)

    const products =
      await fetchProducts()

    products.forEach(item => {

      const product =
        new Product(
          item.name,
          item.price
        )

      console.log(
        `${product.name} - ${formatCurrency(product.price)}`
      )
    })

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

startApp()