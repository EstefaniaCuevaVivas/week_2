import { Library } from "./library";
import { Books } from "./books";

let libreria : Library = new Library ([],"calle Madrid,5", "Mario");

let libro1 : Books = new Books("Los empleados 1", 250, "jklo BBk","Olga Arvan", "Anaya");

let libro2 : Books = new Books("Los empleados 3", 300, "1678 BBk","Esther Perez", "Anagrama");

let libro3 : Books = new Books("Los empleados 4", 600, "1256 BBk","Lorena Martin", "capitu");

libreria.getBooks().push(libro1)
libreria.getBooks().push(libro2)
libreria.getBooks().push(libro3)

console.log(libreria.toString())
console.log("El numero de libros es " + libreria.getNumbersOfBooks())

let librosAuthor1 : Books[] = libreria.findByAuthor("Olga Arvan");
console.log(librosAuthor1)