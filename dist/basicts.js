"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }
}
const myCar = new Car("Kijang", "Innova", 2022);
console.log(myCar.displayInfo());
const userStatus = "active";
function getData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}
getData((data) => {
    console.log(data);
});
