import { Point } from "./point";

let myPoint: Point = new Point(4,6)
let myPoint2: Point = new Point(2,4)
let myPoint3: Point = new Point(1,3)

let points: Point [] = [myPoint,myPoint2,myPoint3]

console.log(myPoint.toString());
console.log(myPoint.calculateDistance(myPoint2))
console.log(myPoint.calculateQuadrant())
console.log(myPoint.calculateNearest(points))



