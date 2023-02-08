
class Contact
{
  constructor(){
    this.contactos = []
  }

  printPersons(){
    
      return(agenda.contactos)
    
  }  
   
}


let {Person} = require ("./person");

let maria = new Person (180,70)
maria.hobbies = ["bailar","andar","correr"]
maria.colorP= "marron";

let juan = new Person (170,60)
juan.hobbies = ["futbol","tenis","baloncesto"]
juan.colorP = "rubio"

let agenda = new Contact ()
agenda.contactos.push(maria)
agenda.contactos.push(juan)




module.exports = {Contact}