export class Habilidad {
    id?:number;
	nombre:string;
	porcentaje:number;
   // persona_id:number;
	
    constructor(nombre:string,porcentaje:number){
        this.nombre=nombre;
        this.porcentaje=porcentaje;
     //   this.persona_id=persona_id;
    }
}