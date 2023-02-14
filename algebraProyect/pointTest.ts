import { Point } from "./point";

let myPoint: Point = new Point(7,8)
let myPoint2: Point = new Point(-2,3)

console.log(myPoint.toString());
console.log(myPoint.calculateDistance(myPoint2))
console.log(myPoint.calculateQuadrant())



