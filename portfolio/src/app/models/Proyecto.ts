export class Proyecto {
    id?:number;
	nombre:string;
	fecha_realizacion:string;
    descripcion:string;
    link:string;
    img_proyecto:string;
	
    constructor(nombre:string,fecha_realizacion:string, descripcion:string, link:string, img_proyecto:string){
        this.nombre=nombre;
        this.fecha_realizacion=fecha_realizacion;
        this.descripcion=descripcion;
        this.link=link;
        this.img_proyecto=img_proyecto;
    }
}