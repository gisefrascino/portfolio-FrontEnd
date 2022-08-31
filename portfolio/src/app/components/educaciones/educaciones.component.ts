import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/app/models/Educacion';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {
  educaciones:Educacion[]=[];
  isLogged=false;

  constructor( private datosEducacion:EducacionService, private tokenService:TokenService){}

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
      }else{
        this.isLogged=false;
      }

    }

  cargarEducacion():void{
    this.datosEducacion.obtenerDatos().subscribe(
      data=>{this.educaciones=data});
    }
     
  }

