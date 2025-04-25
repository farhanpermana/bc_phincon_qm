var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayInfo = function () {
        return "Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.year);
    };
    return Car;
}());
var myCar = new Car("Kijang", "Innova", 2022);
console.log(myCar.displayInfo());
var userStatus = "active";
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
    }
}
var myCircle = { kind: "circle", radius: 5 };
var mySquare = { kind: "square", sideLength: 10 };
console.log(getArea(myCircle));
console.log(getArea(mySquare));
