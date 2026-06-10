// Task 5: Create Product class

export class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    // Task 5: Return product information
    getInfo() {
        return `${this.name} - $${this.price}`
    }
}