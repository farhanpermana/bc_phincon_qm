class Car {
    brand: string;
    model: string;
    year: number;
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo(): string {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }
}

const myCar = new Car("Kijang", "Innova", 2022);
console.log(myCar.displayInfo());

type status = "active" | "inactive" | "pending";
const userStatus: status = "active";

interface CarIdentity<T> {
    id: T;
}

// generic interface
// interface CarWithIdentity<T> {
//     identity: CarIdentity<T>;
//     identity2?: EngineIdentity<T>;
//     constructor(brand: string, model: string, year: number, id: T);
// }
// const myCarWithIdentity = new CarWithIdentity<string>("Kijang", "Innova", 2022, "abc123");
// console.log(myCarWithIdentity.identity.id);

// generic class
// class Car<T> {
//     brand: string;
//     model: string;
//     year: number;
//     id: T;

//     constructor(brand: string, model: string, year: number, id: T) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.id = id;
//     }

//     displayInfo(): string {
//         return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, ID: ${this.id}`;
//     }
// }

// const myGenericCar = new Car<string>("Toyota", "Corolla", 2021, "XYZ789");
// console.log(myGenericCar.displayInfo());

// callback
type Callback = (data: string) => void;
function getData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}
getData((data) => {
  console.log(data);
});
