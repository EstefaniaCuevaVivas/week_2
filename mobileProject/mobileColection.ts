
import {Mobile} from "./mobile"

export class MobileCollection{
  private mobiles: Mobile [];
  private totalPrice : number;

  constructor(mobiles: Mobile[]){
    this.mobiles= mobiles;
    this.totalPrice = calculateTotalPrice
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

   private calculateTotalPrice(): number {
    let sum = 0;
    for (let i = 0; i < this.mobiles.length; i++) {
      sum += this.mobiles[i].getPrice();
    }
    return sum;
  }

}  