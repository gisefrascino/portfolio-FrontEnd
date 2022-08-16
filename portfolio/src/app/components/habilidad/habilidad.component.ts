import { Component, OnInit, Input } from '@angular/core';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { UiService } from 'src/app/services/ui.service';
import { EventEmitter } from '@angular/core';
import { Habilidad } from 'src/app/models/Habilidad';

@Component({
  
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  @Input () habilidad:Habilidad=new Habilidad("",0,0);
 
  constructor(private datosHabilidad:HabilidadService) { }

  ngOnInit(): void {
  }

}