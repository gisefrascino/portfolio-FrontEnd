export class Experiencia {
    id?:number;
    empresa:string;
    puesto:string;
    fecha_inicio:string;
    fecha_fin:string;
    tareas:string;

    constructor(empresa:string,puesto:string, fecha_inicio:string, fecha_fin:string, tareas:string){
        this.empresa=empresa;
        this.puesto=puesto;
        this.fecha_inicio=fecha_inicio;
        this.fecha_fin=fecha_fin;
        this.tareas=tareas;
    }
}