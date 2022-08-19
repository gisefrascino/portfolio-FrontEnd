import { Component, OnInit, Input, Output } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  isLogged=false
  @Input () educacion:Educacion=null;
  /*@Output() deleteEducacion:EventEmitter<Educacion>=new EventEmitter();
  @Output() updateEducacion:EventEmitter<Educacion>=new EventEmitter();
  @Output() addEducacion:EventEmitter<Educacion>=new EventEmitter();*/

  //modaleSwitch:boolean=false;
  //modalrSwitch:boolean=false;
  //addSwitch:boolean=false
  

  constructor( private modalUs:UiService,datosEducacion:EducacionService) { }

  ngOnInit(): void {
   /*   this.modalUs.$modal.subscribe((valor)=>(this.modaleSwitch=valor, this.modalrSwitch=valor, this.addSwitch=valor));
  }
  openModale(){
    this.modaleSwitch=true;
  }
  openModalr(){
    this.modalrSwitch=true;
  }
  closeModal(){
    this.modalUs.$modal.emit(false)
  }
  onDeleteEducacion(educacion:Educacion){
    this.deleteEducacion.emit(educacion);
  }
  onUpdateEducacion(educacion:Educacion){
    this.updateEducacion.emit(educacion)
  }

  openAddEducacion(){
    this.addSwitch=true;
  }
  closeAddEducacion(){
    this.modalUs.$modal.emit(false)
  }
  onAddEducacion(educacion:Educacion){
    this.addEducacion.emit(educacion);
    console.log("educacion")*/
    }
  }
