import { Vector } from "./vector";

let array : Vector = new Vector (5,8);
let v1: Vector = new Vector (5,7);
console.log(array.print())
console.log(v1.print())
console.log(array.add1(v1))
console.log(array.subs(v1))
console.log(array.mult(v1))
console.log(array.multNumber(5))
console.log(v1.multNumber(5))
