type Shape = Circle | Square;
interface Circle {
    kind: "circle";
    radius: number;
}
interface Square {
    kind: "square"; 
    sideLength: number;
}
function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}
const myCircle: Circle = { kind: "circle", radius: 5 };
const mySquare: Square = { kind: "square", sideLength: 10 };
console.log(getArea(myCircle)); 
console.log(getArea(mySquare)); 