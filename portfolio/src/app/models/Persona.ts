export class Persona {
    id?:number;
    nombre:string;
    apellido:string;
    img_fondo: string;
    img_perfil:string;
    titulo:string;
    info_profesional:string;
    provincia:string;
    pais:string;
  //  localidad_id: number;
    
    constructor(nombre:string,apellido:string,img_fondo:string, img_perfil:string, titulo:string, info_profesional:string, provincia:string, pais:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.img_fondo=img_fondo;
        this.img_perfil=img_perfil;
        this.titulo=titulo;
        this.info_profesional=info_profesional;
        this.provincia=provincia;
        this.pais=pais
  //      this.localidad_id=localidad_id;
    }
}