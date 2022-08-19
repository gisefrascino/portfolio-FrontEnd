import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { UiService} from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Educacion } from 'src/app/models/Educacion';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {
  educaciones:Educacion[]=[];
  //showAddEducacion:boolean=false;
 // subscription?:Subscription;
  //addSwitch:boolean=false;

  constructor( private datosEducacion:EducacionService,private modalUs:UiService){}
   // private tokenService:TokenService, 
 

  isLogged=false;

  ngOnInit(): void {
    this.cargarEducacion();
    //if(this.tokenService.getToken()){
    //  this.isLogged=true;
    //  }else{
    //    this.isLogged=false;
    //  }

   // this.modalUs.$modal.subscribe((valor)=>(this.addSwitch=valor));
  }

  cargarEducacion():void{
    this.datosEducacion.obtenerDatos().subscribe(
      data=>{this.educaciones=data});
    }
     

   /* borrar(id?:number){
      if(id!=undefined){
        this.datosEducacion.deleteEducacion(id).subscribe(
          data=>{
            this.cargarEducacion();
          }, err =>{
            alert("No se pudo eliminar");
          }
        )
      }
    }*/

  /*updateEducacion(educacion:Educacion): void{
    this.datosEducacion.updateEducacion(educacion).subscribe();
  }

  addEducacion(educacion:Educacion){
    this.datosEducacion.addEducacion(educacion).subscribe((data)=>{
      alert("se agrego con exito!!!");
     // this.educaciones.push(educacion);
      console.log("educaciones")
    })
    }
    deleteEducacion(educacion:Educacion){
      this.datosEducacion.deleteEducacion(educacion).subscribe(()=>{
        this.educaciones=this.educaciones.filter(x=>x.id!==educacion.id);
      });
      }*/
  }

