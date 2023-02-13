function hasEven(myNums: number []){
  let i:number= 0;
  let comunicado:string = ""

  while(i<myNums.length){

    if((myNums[i] % 2 == 0)){

      comunicado = ("Hay un numero par")


    }else{
      comunicado = ("No hay un numero par")
    }
   
    i++
  }
  
  return comunicado

}

console.log(hasEven([1,3,4]))

function startWithM(myNames: string[]){
let resultado: boolean = true
let indice = 0


while (( indice< myNames.length && resultado == true)){

  if(myNames[indice].charAt(0) != "m"){
    resultado = false;
  }

 
  indice++;
}

return resultado

}

console.log(startWithM (["maria","manuela"]))

module.exports={hasEven}
