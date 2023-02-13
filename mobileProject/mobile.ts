
export class Mobile{
  private name : string;
  private trademark: string;
  private model: string;
  private color: string;
  private price: number;
  movil3: Mobile;

  constructor(name:string,trademark:string,model:string,color:string,price:number){
    this.name = name;
    this.trademark= trademark;
    this.model= model;
    this. color = color;
    this.price = price
    
  }

  public getName(){
   return this.name
  }

  public setName(newName:string){
   return this.name=newName
  }

  public getTrademark(){
   return this.trademark
  }

  public setTrademark(newTrademark:string){
   return this.trademark=newTrademark
  }

  public getModel(){
   return this.model
  }

  public setModel(newModel:string){
   return this.model=newModel
  }

  public getcolor(){
   return this.color
  }

  public setColor(newColor:string){
   return this.color=newColor
  }

  public getPrice(){
   return this.price
  }

  public setPrice(newPrice:number){
   return this.price=newPrice
  }

  public caracteristicas(){
    console.log("The characteristics of the mobile name are:");

    console.log(".Name " + this.name);
    console.log(".Trademark " + this.trademark);
    console.log(".model " + this.model);
    console.log(".color " + this.color);
    console.log(".price " + this.price);

  }
  
}

