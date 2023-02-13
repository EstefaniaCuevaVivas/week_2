import {Mobile} from "./mobile"

let movil1 : Mobile = new Mobile ("iphone","apple","pro max","blue",500)
let movil2 : Mobile = new Mobile ("galaxy","samsung","190","purple",300)
let movil3: Mobile = new Mobile ("redmi","huawei","big","yellow",400)

let myMobiles:Mobile[] = [movil1,movil2,movil3]

console.log(movil1.getName());
console.log(movil1.setName("note"));
console.log(movil1.getTrademark());
console.log(movil1.setTrademark("samsung"));
console.log(movil1.getModel());
console.log(movil1.setModel("5"));
console.log(movil1.getcolor());
console.log(movil1.setColor("black"));
console.log(movil1.getPrice());
console.log(movil1.setPrice(200));
movil1.caracteristicas()

for(let i =0;i<myMobiles.length;i++){

 console.log(myMobiles[i].caracteristicas()) 

}




 




