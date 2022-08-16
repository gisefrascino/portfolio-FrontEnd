export class Educacion {
    id?:number;
	titulo: string;
    institucion:string;
    fecha_inicio:string;
    fecha_fin:string;
	//persona_id: number;
    

    constructor(titulo:string, institucion:string, fecha_inicio:string, fecha_fin:string){
        this.titulo=titulo;
        this.institucion=institucion;
        this.fecha_inicio=fecha_inicio;
        this.fecha_fin=fecha_fin;
       // this.persona_id=persona_id;
    }
}