// 5. Import default export
import user from "./module1_export.js"

// Import named exports
import {
  pi,
  greet,
  name,
  age,
  country,
  config,
  Person
} from "./module1_export.js"

// 7. Rename module on import
import { greet as sayHello } from "./module1_export.js"

// 10. Import everything using *
import * as data from "./module1_export.js"


// 1. Use exported variable
console.log(pi)


// 3. Import and use function
console.log(greet("Sarveshwar"))


// 5. Use default import
console.log(user)


// 6. Use multiple exported variables
console.log(name)
console.log(age)
console.log(country)


// 7. Use renamed function
console.log(sayHello("David"))


// 8. Create object from exported class
const person = new Person("John")
console.log(person.introduce())


// 9. Use exported object
console.log(config)


// 10. Access all exports through *
console.log(data.name)
console.log(data.age)
console.log(data.country)