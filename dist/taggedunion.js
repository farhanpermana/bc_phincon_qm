"use strict";
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}
const myCircle = { kind: "circle", radius: 5 };
const mySquare = { kind: "square", sideLength: 10 };
console.log(getArea(myCircle));
console.log(getArea(mySquare));
