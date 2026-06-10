// 1. Export a variable
export const pi = 3.14159

// 6. Export multiple variables
export const name = "Nishan"
export const age = 20
export const country = "Nepal"

// 9. Export an object
export const config = {
  theme: "dark",
  language: "English"
}

// 2. Export a function
export function greet(name) {
  return `Hello ${name}`
}

// 8. Export a class
export class Person {
  constructor(name) {
    this.name = name
  }

  introduce() {
    return `I am ${this.name}`
  }
}

// 4. Export default
const user = "David"

export default user