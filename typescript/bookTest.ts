import { Books } from "./books";

let libro : Books = new Books ("Los empleados", 250, "1234 BBk","Olga Arvan", "Anagrama")
 console.log(libro.getTittle());
 console.log(libro.getNpages());
 console.log(libro.getIsbn());
 console.log(libro.getAuthor());
 console.log(libro.getEditorial());

 libro.setTittle("Los empleados2");
 libro.setNpages(500);
 libro.setIsbn("eiroofd");
 libro.setAuthor("Pablo garcia");
 libro.setEditorial("Anaya")
 

console.log(libro.toString())

