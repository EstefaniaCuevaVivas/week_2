
import {Mobile} from "./mobile"

export class MobileCollection{
  private mobiles: Mobile [];
  private totalPrice : number;


  constructor(mobiles: Mobile[]){
    this.mobiles= mobiles;
    this.totalPrice = this.totalPriceCalculation()
  }

  public getMobiles(){
    return this.mobiles
   }
 
   public setMobiles(newMobiles: Mobile[]):void{
     this.mobiles=newMobiles
   }
 
   public getTotalPrice(){
  
    return this.totalPrice

   } 
 
   public setTotalPrice(newTotalPrice:number):void{
     this.totalPrice=newTotalPrice
   }

   public totalPriceCalculation(): number {
    let sum : number = 0;
    for (let i = 0; i < this.mobiles.length; i++) {
      sum += this.mobiles[i].getPrice();
    }
    return sum;
  }


  public printCollection(){
     for (let arrayMoviles of this.mobiles){

      console.log(arrayMoviles.caracteristicas())

     }

     console.log ("Price overall: " + this.getTotalPrice())
    }
  }
    
    
