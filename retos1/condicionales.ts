function zodiac(day : number, month: number){
  let Signo: string = ""

  if((day >= 22 && month == 12)||(day <= 20 && month == 1)){
    Signo = "capricornio";
  }else if((day >= 21 && month == 1) || (day <= 19 && month == 2)){
    Signo =("acuario");
  }else if((day >= 20 && month == 2) || (day <= 20 && month == 3)){
    Signo =("piscis");
  }else if((day >= 21 && month == 3) || (day <= 20 && month == 4)){
    Signo =("aries");
  }else if((day >= 21 && month == 4) || (day <= 21 && month == 5)){
    Signo =("tauro");
  }else if((day >= 22 && month == 5) || (day <= 21 && month == 6)){
    Signo =("geminis")
  }else if((day >= 21 && month == 6) || (day <= 23 && month == 7)){
    Signo =("cancer");
  }else if((day >= 24 && month == 7) || (day <= 23 && month == 8)){
    Signo =("leo");
  }else if((day >= 24 && month == 8) || (day <= 23 && month == 9)){
    Signo =("virgo");
  }else if((day >= 24 && month == 9) || (day <= 23 && month == 10)){

    Signo =("libra");

  }else if((day >= 24 && month == 10) || (day <= 22 && month == 11)){
    Signo =("escorpio");
  }else if((day >= 23 && month == 11) || (day <= 21 && month == 12)){
    Signo =("sagitario");
  }else{
    
    Signo = ("Signo no encontrado")
  }

  return Signo
 
}

console.log(zodiac (4,12))


function continent(country:string){
  
  if( country == "Angora" || country == "Kenia"){
    console.log("Africa")
  }else if( country == "Afganistan" || country == "Birmania"){
    console.log("Asia")
  }else if( country == "Alemania" || country == "España"){
    console.log("Europa")
  }else if( country == "Argentina" || country == "Guatemala"){
    console.log("America")
  }else if(( country == "Australia"|| country == "Nueva Zelanda")){
    console.log("Africa")
  }else{
    console.log("Pais no encontrado")
  }
}

continent ("Angora")


export function isEven (number:number){
  if(number % 2 == 0){
    console.log("El numero" + " " + number + "" + " Es par")
  }else{
    console.log("El numero" + " " + number + "" + " Es impar")
  }
}



