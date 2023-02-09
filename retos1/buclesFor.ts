function evenNumbers(num:number){
  for (let i = 1; i<num; i++){

    if(i %2 != 0){
      console.log(i)
    }

  }
}

evenNumbers(7)


function myRevert(myArr:number[]){

  let newArr:number[]= [];


  for (let i = myArr.length - 1; i >= 0; i--) { 
    newArr.push(myArr[i])

  }

  return newArr
  
}

  
console.log(myRevert ([1,2,3,4]))

function isRainbow(colors:string[]){

  for (let i = 0 ; i<colors.length; i++){
    if(colors[i] == "azul"){

      console.log("El color azul, esta en el arcoiris") 
    }
    if(colors[i] == "verde"){

      console.log("El color azul, esta en el arcoiris")
    }
    if(colors[i] == "amarillo"){

      console.log("El color amarillo, esta en el arcoiris")

    }if(colors[i] == "negro"){

      console.log("El color negro no esta en el arcoiris")
    }
  }

}

isRainbow(["verde","azul","amarillo","negro"])


function add(myWords:string[]){

  let arr:number = 0;


  for (let i = 0 ; i<myWords.length;i++){

     let caracteres:number = myWords[i].length;
     arr += caracteres


  }

  return arr

}

console.log(add(["maria","ana"]))
