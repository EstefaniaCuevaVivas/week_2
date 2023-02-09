function zodiac(day : number, month: number){
  let Signo: string = ""

  if((day >= 22 && month == 12)||(day <= 20 && month == 1)){
    Signo = "capricornio";
  }
  
  if((day >= 21 && month == 1) || (day <= 19 && month == 2)){
    Signo =("acuario");
  }
  
  if((day >= 20 && month == 2) || (day <= 20 && month == 3)){
    Signo =("piscis");
  }
  
  if((day >= 21 && month == 3) || (day <= 20 && month == 4)){
    Signo =("aries");
  }
 
  if((day >= 21 && month == 4) || (day <= 21 && month == 5)){
    Signo =("tauro");
  }
  
  if((day >= 22 && month == 5) || (day <= 21 && month == 6)){
    Signo =("geminis")
  }
  
  if((day >= 21 && month == 6) || (day <= 23 && month == 7)){
    Signo =("cancer");
  }
  
  if((day >= 24 && month == 7) || (day <= 23 && month == 8)){
    Signo =("leo");
  }
  
  if((day >= 24 && month == 8) || (day <= 23 && month == 9)){
    Signo =("virgo");
  }
  
  if((day >= 24 && month == 9) || (day <= 23 && month == 10)){

    Signo =("libra");

  }
  
  if((day >= 24 && month == 10) || (day <= 22 && month == 11)){
    Signo =("escorpio");
  }
 
  if((day >= 23 && month == 11) || (day <= 21 && month == 12)){
    Signo =("sagitario");
  }

  return Signo
 
}

console.log(zodiac (4,12))


function continent(country:string){
  
  if( country == "Angora" || country == "Kenia"){
    console.log("Africa")
  }

  if( country == "Afganistan" || country == "Birmania"){
    console.log("Asia")
  }

  if( country == "Alemania" || country == "España"){
    console.log("Europa")
  }

  if( country == "Argentina" || country == "Guatemala"){
    console.log("America")
  }

  if(( country == "Australia"|| country == "Nueva Zelanda")){
    console.log("Africa")
  }
}

continent ("Angora")


function isEven (number:number){
  if(number % 2 == 0){
    console.log("El numero" + " " + number + "" + " Es par")
  }else{
    console.log("El numero" + " " + number + "" + " Es impar")
  }
}

isEven(9)