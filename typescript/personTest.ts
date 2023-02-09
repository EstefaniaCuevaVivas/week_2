import { Person } from "./person";

let person1: Person = new Person("Maria",35,"calle molina,2")
person1.printName()
console.log(person1.yearOfBirth(2023));
person1.setAddress("riaño,11")
console.log(person1.getAddress())