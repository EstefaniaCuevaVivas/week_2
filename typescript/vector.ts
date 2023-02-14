 export class Vector {
  private elements : number [];
  constructor (longitud : number,maxV: number){
    this.elements = [];
    for(let i= 0; i<longitud;i++){
     this.elements.push(Math.round(Math.random()*maxV))
    }
  }

  public print(){
    return this.elements
  }

  public add1(v1:Vector):Vector{

    let vectorPrincipal: Vector = new Vector(0,0);

    if (v1.elements.length == this.elements.length){

      for ( let i= 0 ; i<this.elements.length; i++){

        vectorPrincipal.elements.push(this.elements[i] + v1.elements[i])     
      }

    }

    return  vectorPrincipal
  }

  public subs(v1:Vector):Vector{

    let vectorPrincipal: Vector = new Vector(0,0);

    if (v1.elements.length == this.elements.length){

      for ( let i= 0 ; i<this.elements.length; i++){

        vectorPrincipal.elements.push(this.elements[i] - v1.elements[i])     
      }

    }

    return  vectorPrincipal
  }

  public mult(v1:Vector):Vector{

    let vectorPrincipal: Vector = new Vector(0,0);

    if (v1.elements.length == this.elements.length){

      for ( let i= 0 ; i<this.elements.length; i++){

        vectorPrincipal.elements.push(this.elements[i] * v1.elements[i])     
      }

    }

    return  vectorPrincipal
  }

  public multNumber(longitud:number):Vector{

    let vectorPrincipal: Vector = new Vector(0,0);

    if (longitud == this.elements.length){

      for ( let i= 0 ; i<this.elements.length; i++){

        vectorPrincipal.elements.push(this.elements[i] * longitud)     
      }

    }

    return  vectorPrincipal

  }

}






