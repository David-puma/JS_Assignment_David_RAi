//1. Create class Vehicle
class Vehicle {

// 2. Add constructor
    constructor(brand) {
        this.brand = brand
    }

    // 3. Add method drive()
    drive() {
        return `${this.brand} is driving`
    }
}


//4. Extend class Bike
class Bike extends Vehicle {

    // Constructor using super()
    constructor(brand) {
        super(brand)
    }

    // 5. Override drive()
    drive() {
        return `${this.brand} bike is racing`
    }
}


//6. Create class Student
class Student {
    constructor(name, marks) {
        this.name = name

        // 7. Add marks property
        this.marks = marks
    }

    showDetails() {
        return `${this.name} scored ${this.marks}`
    }
}


//8. Inherit class Programmer
class Programmer extends Student {

    constructor(name, marks, language) {

        // 9. Call parent constructor using super()
        super(name, marks)

        this.language = language
    }

    showDetails() {
        return `${super.showDetails()} and codes in ${this.language}`
    }
}


//10. Create multiple child classes

class Car extends Vehicle {
    drive() {
        return `${this.brand} car is moving`
    }
}

class Truck extends Vehicle {
    drive() {
        return `${this.brand} truck is carrying goods`
    }
}


//Testing

const vehicle = new Vehicle("Supra")
console.log(vehicle.drive())

const bike = new Bike("Yamaha")
console.log(bike.drive())

const student = new Student("Sarveshwar", 85)
console.log(student.showDetails())

const programmer = new Programmer("David", 92, "JavaScript")
console.log(programmer.showDetails())

const car = new Car("Toyota")
console.log(car.drive())

const truck = new Truck("Volvo")
console.log(truck.drive())