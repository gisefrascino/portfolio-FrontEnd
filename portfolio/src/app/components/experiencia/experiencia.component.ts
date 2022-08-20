import { Component, OnInit, Input, Output } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { UiService } from 'src/app/services/ui.service';
import { Experiencia } from 'src/app/models/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  isLogged=false
  @Input () experiencia:Experiencia=null;
    
  constructor(private datosExperiencia:ExperienciaService) { }
  ngOnInit(): void {
       }

  }

