import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { UiService} from 'src/app/services/ui.service';
import { Educacion } from 'src/app/models/Educacion';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {
  educaciones:Educacion[]=[];
  
  constructor( private datosEducacion:EducacionService){}
   // private tokenService:TokenService, 
 

  isLogged=false;

  ngOnInit(): void {
    this.cargarEducacion();
    //if(this.tokenService.getToken()){
    //  this.isLogged=true;
    //  }else{
    //    this.isLogged=false;
    //  }

    }

  cargarEducacion():void{
    this.datosEducacion.obtenerDatos().subscribe(
      data=>{this.educaciones=data});
    }
     
  }

