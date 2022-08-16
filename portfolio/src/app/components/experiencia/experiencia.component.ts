import { Component, OnInit, Input, Output } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { UiService } from 'src/app/services/ui.service';
import { EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  isLogged=false
  @Input () experiencia:Experiencia=null;
  //@Output() deleteExperiencia:EventEmitter<Experiencia>=new EventEmitter();
  //@Output() updateExperiencia:EventEmitter<Experiencia>=new EventEmitter();

  //modaleSwitch:boolean=false;
  //modalrSwitch:boolean=false;
  
  constructor(private datosExperiencia:ExperienciaService, private modalUs:UiService) { }
  ngOnInit(): void {
    //this.modalUs.$modal.subscribe((valor)=>(this.modaleSwitch=valor, this.modalrSwitch=valor))
    }

  /*openModale(){
    this.modaleSwitch=true;
  }
  openModalr(){
    this.modalrSwitch=true;
  }
  CloseModal(){
    this.modalUs.$modal.emit(false)
  }
  onDeleteExperiencia(id?:number){
    this.deleteExperiencia.emit(this.experiencia.id?);
  }
  onUpdateExperiencia(experiencia:Experiencia){
    this.updateExperiencia.emit(experiencia)
  }*/
}

