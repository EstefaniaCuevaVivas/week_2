export class Books{

  private tittle : string;
  private npages: number;
  private isbn: string;
  private Author : string;
  private editorial : string;

  constructor(tittle:string,npages:number,isbn:string,Author: string,editorial:string)
  {
    this.tittle = tittle;
    this.npages = npages;
    this.isbn = isbn;
    this.Author = Author;
    this. editorial= editorial;
  }

  public getTittle():string{

    return this.tittle

  }

  public setTittle(newTittle:string):void{

     this.tittle = newTittle

  }

  public getNpages():number{
    return this.npages
  }

  public setNpages(newnPages:number):void{

    this.npages = newnPages

 }
  
  public getIsbn():string{
    return this.isbn
  }

  public setIsbn(newIsbn:string):void{

    this.isbn = newIsbn

 }


  public getAuthor():string{
    return this.Author
  }

  public setAuthor(newAuthor:string):void{

    this.Author = newAuthor

 }

  public getEditorial():string{
    return this.editorial
  }

  public setEditorial(newEditorial:string):void{

    this.editorial = newEditorial
    
 }

 public toString():string{

  return ` title - ${this.tittle} \n Number of pages - ${this.npages} \n isbn - ${this.isbn}  \n author - ${this.Author}  \n editorial - ${this.editorial}`

 }

}


let libro : Books = new Books ("Los empleados", 250, "1234 BBk","Olga Arvan", "Anagrama")



