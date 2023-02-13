import { MobileCollection } from "./mobileColection";

import {Mobile} from "./mobile"

let movil1 : Mobile = new Mobile ("iphone","apple","pro max","blue",500)
let movil2 : Mobile = new Mobile ("galaxy","samsung","190","purple",300)
let movil3: Mobile = new Mobile ("redmi","huawei","big","yellow",400)
let movil4: Mobile = new Mobile ("rudo","lenovo","small","white",260) 

let mobiles:Mobile[] = [movil1,movil2,movil3,movil4]

let myCollection: MobileCollection = new MobileCollection (mobiles) 


for(let i = 0 ; i<mobiles.length; i++){
  console.log(mobiles[i].getPrice())
}
 
 console.log(myCollection.getTotalPriceCalculation())

  









