import { Component, OnInit,Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UiService } from 'src/app/services/ui.service';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  isLogged=false
  @Input () persona:Persona= null;
  /*@Output() deletePersonaP:EventEmitter<Persona>=new EventEmitter();
  @Output() updatePersonaC:EventEmitter<Persona>=new EventEmitter();

  modalcSwitch:boolean=false;
  modalpSwitch:boolean=false;
  modalrSwitch:boolean=false;*/


  constructor(private modalUs:UiService, private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
  //    this.modalUs.$modal.subscribe((valor)=>(this.modalcSwitch=valor, this.modalpSwitch=valor, this.modalrSwitch=valor));
  }
  /*openModalc(){
    //this.modalcSwitch=true;
    this.router.navigate(['/modal-principal-carrera']);
    }


  openModalp(){
    this.modalpSwitch=true;

  }
  openModalr(){
    this.modalrSwitch=true;
  }
  closeModal(){
    this.modalUs.$modal.emit(false)
  }
  
  onDelete(persona:Persona){
    this.deletePersonaP.emit(persona);
  }
  onUpdate(persona:Persona){
    this.updatePersonaC.emit(persona)
  }*/
  }


