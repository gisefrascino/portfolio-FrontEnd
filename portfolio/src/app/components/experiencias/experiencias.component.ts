import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { UiService} from 'src/app/services/ui.service';
import { Experiencia } from 'src/app/models/Experiencia';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias:Experiencia[]=[];
  //subscription?:Subscription;

  constructor(private datosExperiencia:ExperienciaService, private uiService:UiService) { }
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
    



  
  /*addExperiencia(experiencia:Experiencia){
    this.datosExperiencia.save(experiencia).subscribe((experiencia)=>{
      this.experiencias.push(experiencia)
    })
    }
  
  deleteExperiencia(experiencia:Experiencia){
    this.datosExperiencia.deleteExperiencia(experiencia).subscribe(()=>{
      this.experiencias=this.experiencias.filter(x=>x.id!==experiencia.id);
    });
  }
    updateExperiencia(experiencia:Experiencia){
      this.datosExperiencia.updateExperiencia(experiencia).subscribe();
    }*/
  
}
