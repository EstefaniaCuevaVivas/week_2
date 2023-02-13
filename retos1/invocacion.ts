
import{add} from "./buclesFor"

import { isEven } from "./condicionales"

let array1 =["Casa","Coche","Ciudad","Cesta"]
let array2 =["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"]
let array3 = ["Venezuela","Veneno","Voltaje"]

let numeros1 =(add(array1))
let numeros2 =(add(array2))
let numeros3 =(add(array3))

console.log(numeros1)
console.log(numeros2)
console.log(numeros3)

isEven(numeros1)
isEven(numeros2)
isEven(numeros3)