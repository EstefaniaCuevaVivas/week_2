import { Contacts } from "./contacts";

import { Person } from "./person";



let person1: Person = new Person("Maria",35,"calle molina,2")
person1.printName()
console.log(person1.yearOfBirth(2023));
person1.setAddress("riaño,11")
console.log(person1.getAddress())


let person2: Person = new Person("Juan",40,"calle lugo")
person2.printName()
console.log(person2.yearOfBirth(2023));
person1.setAddress("santander")
console.log(person2.getAddress())


let agenda : Contacts = new Contacts ()
agenda.people.push(person1)
agenda.people.push(person2)
agenda.printCalendar()