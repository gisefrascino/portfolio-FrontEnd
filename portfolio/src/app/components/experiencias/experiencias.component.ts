import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/models/Experiencia';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias:Experiencia[]=[];

  constructor(private datosExperiencia:ExperienciaService) { }
  //private tokenService:TokenService

  isLogged=false

  ngOnInit(): void {
    this.cargarExperiencia();
    //if(this.tokenService.getToken()){
    //  this.isLogged=true;
    //  }else{
    //    this.isLogged=false;
    //  }
    }

    cargarExperiencia():void{
      this.datosExperiencia.lista().subscribe(
        data=>{this.experiencias=data});
      }
    
}
