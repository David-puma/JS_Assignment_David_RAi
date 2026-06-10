// 1. Update an object's age from 25 to 26 immutably using spread operator

const person1 = { name: "David", age: 25 }

const updatedPerson1 = {
    ...person1,
    age: 26
}

console.log("Task 1:", updatedPerson1)


// 2. Add a new hobby to a person's hobbies array immutably

const person2 = {
    name: "David",
    hobbies: ["Coding", "Music"]
}

const updatedPerson2 = {
    ...person2,
    hobbies: [...person2.hobbies, "Gaming"]
}

console.log("Task 2:", updatedPerson2)


// 3. Remove the last element from an array immutably

const arr1 = [10, 20, 30, 40]

const updatedArr1 = arr1.slice(0, -1)

console.log("Task 3:", updatedArr1)


// 4. Replace the second element in an array immutably

const arr2 = ["a", "b", "c"]

const updatedArr2 = [
    arr2[0],
    "REPLACED",
    arr2[2]
]

console.log("Task 4:", updatedArr2)


// 5. Change a nested property address.city immutably

const user1 = {
    name: "David",
    address: {
        city: "Kathmandu",
        country: "Nepal"
    }
}

const updatedUser1 = {
    ...user1,
    address: {
        ...user1.address,
        city: "Bhaktapur"
    }
}

console.log("Task 5:", updatedUser1)


// 6. Add a new key-value pair to an object immutably

const user2 = { name: "David" }

const updatedUser2 = {
    ...user2,
    age: 20
}

console.log("Task 6:", updatedUser2)


// 7. Remove a property deletedAt from an object immutably

const user3 = {
    name: "David",
    deletedAt: "2026-01-01"
}

const { deletedAt, ...updatedUser3 } = user3

console.log("Task 7:", updatedUser3)


// 8. Merge two arrays immutably

const array1 = [1, 2]
const array2 = [3, 4]

const mergedArray = [...array1, ...array2]

console.log("Task 8:", mergedArray)


// 9. Merge two objects immutably

const obj1 = { name: "David" }
const obj2 = { age: 20 }

const mergedObject = {
    ...obj1,
    ...obj2
}

console.log("Task 9:", mergedObject)


// 10. Update a specific object in an array of objects immutably (by id)

const users = [
    { id: 1, name: "David" },
    { id: 2, name: "Sarveshwar" },
    { id: 3, name: "Sujan" }
]

const updatedUsers = users.map(user =>
    user.id === 2
        ? { ...user, name: "Updated Rijan" }
        : user
)

console.log("Task 10:", updatedUsers)