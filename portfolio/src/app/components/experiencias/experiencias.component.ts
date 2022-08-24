import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/models/Experiencia';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias:Experiencia[]=[];
  isLogged=false;

  constructor(private datosExperiencia:ExperienciaService, private tokenService:TokenService) { }
 
  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
      }else{
        this.isLogged=false;
      }
    }

    cargarExperiencia():void{
      this.datosExperiencia.lista().subscribe(
        data=>{this.experiencias=data});
      }
    
}
