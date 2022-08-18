import { Component, OnInit, Input } from '@angular/core';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { Habilidad } from 'src/app/models/Habilidad';

@Component({
  
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  @Input () habilidad:Habilidad=null;
 
  constructor(private datosHabilidad:HabilidadService) { }

  ngOnInit(): void {
  }

}