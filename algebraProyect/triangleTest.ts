import { triangle } from "./triangle";
import { Point } from "./point";


let vertex1 = new Point(10,20)
let vertex2 = new Point(3,5)
let vertex3 = new Point(9,34)

let triangulo = new triangle(vertex1,vertex2,vertex3)

console.log(triangulo.calculateLengthSides())