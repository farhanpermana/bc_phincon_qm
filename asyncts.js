//async with car brannd
setTimeout(myFunc, 1000);
function myFunc() {
    console.log("Hello from myFunc");
    var myCar = new Car("Toyota", "Corolla", 2021, "XYZ789");
    console.log(myCar.displayInfo());
}
