export class Point{

  private x : number;

  private y : number;

  constructor(x:number,y:number){
    this.x = x;
    this.y = y;
  }

  public getX(){

   return this.x

    
  }

  public setX(newx:number):void{

     this.x = newx

    
  }

  public getY(){

    return this.y
 
     
   }
 
   public setY(newy:number):void{
 
      this.y = newy
 
     
   }

  public toString():string{
    let variable1 = String(this.x)
    let variable2 = String(this.y)
    return `"(${variable1},${variable2})"`
  }

  public distanceToOrigin():number{
    return Math.sqrt(this.getX() ** 2 + this.getY() **2)
  }

  public calculateDistance(anotherPoint:Point):number{
    let diferenciaX = this.getX() - anotherPoint.getX();
    let diferenciaY = this.getY() - anotherPoint.getY();
    return Math.sqrt(diferenciaX*diferenciaX)+(diferenciaY*diferenciaY)
  }

  



}