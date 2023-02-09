import { Books } from "./books";

export class Library{

  private books : Books[];
  private address: string;
  private manager: string;
  
  constructor(books: Books [],address:string,manager:string)
  {
    this.books = books;
    this.address = address;
    this.manager = manager;
  }  

  public getBooks():Books[]{
    return this.books
  }

  public getAddress():string{

    return this.address

  }

  public setAdress(newAddress:string):void{

     this.address = newAddress

  }

  public getManager():string{
    return this.manager
  }

  public setManager(newManager:string):void{

    this.manager = newManager

 }


 public toString():string{

  return ` libro - ${this.books} \n Direccion - ${this.address} \n Propietario - ${this.manager}`

 }

 public getNumbersOfBooks():number{
  return this.books.length
 }

 public findByAuthor(author:string):Books[]{

  let librosAuthor : Books[] = []

  for (let i = 0; i<this.books.length; i++){

    if(this.books[i].getAuthor() == author){
      librosAuthor.push(this.books[i])
    }
    return librosAuthor
  }

 }

}

