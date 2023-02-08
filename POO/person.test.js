let {Person} = require ("./person");

let maria = new Person (180,70)
console.log(maria.calcularImc())
maria.aNacimient = 1993;
console.log(maria.calcularEdad(2023))

maria.printAll()
maria.hobbies = ["bailar","andar","correr"]
maria.printHobbies()
