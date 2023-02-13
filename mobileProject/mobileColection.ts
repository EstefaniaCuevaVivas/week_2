
import {Mobile} from "./mobile"

export class MobileCollection{
  private mobiles: Mobile [];
  private totalPrice : number;
  private totalPriceCalculation: number;
 

  constructor(mobiles: Mobile[]){
    this.mobiles= mobiles;
    this.totalPrice 
    this.totalPriceCalculation
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

   public getTotalPriceCalculation(): number {
    let sum : number = 0;
    for (let i = 0; i < this.mobiles.length; i++) {
      sum += this.mobiles[i].getPrice();
    }
    return sum;
  }


  public setTotalPriceCalculation(newTotalPriceCalculation:number): void{
     
    this.totalPriceCalculation = newTotalPriceCalculation
    
  }

  public printCollection(){
     return this.mobiles
    }
  }
    
    
