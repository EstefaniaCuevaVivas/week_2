export class Person {
  public name : string;
  public age : number;
  private address : string;

  constructor (name:string,age:number,address: string){
    this.name = name;
    this.age = age;
    this.address = address;
  }

    printName(){
    console.log(this.name)
  }

   yearOfBirth(currentYear:number):number{
    return currentYear-this.age
  }

  public getAddress ():string{

    return this.address
    
  }

  public setAddress(newAddress:string):void{
    this.address = newAddress
  }


}

