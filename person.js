class Person
{
  constructor(param1,param2)
  {
    this.altura = param1;
    this.peso = param2;
    this.aNacimient 
    this.hobbies
    

  }

  calcularImc(){
    return (this.altura*2)/this.peso;
  }

  calcularEdad (año){

    return año - this.aNacimient

  }

  printAll(){

    console.log("La altura es -" + this.altura);
    console.log("El peso es -" + this.peso);
    console.log( "La edad es -" + this.aNacimient);
  }

  printHobbies(){
    for (let i = 0 ; i< this.hobbies.length ; i++){
      console.log("Sus Hobies son -" + this.hobbies[i])
  
    }
  }




}


module.exports ={Person}