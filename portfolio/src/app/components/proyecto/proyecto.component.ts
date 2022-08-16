import { Component, OnInit, Input } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UiService } from 'src/app/services/ui.service';
import { EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  @Input () proyecto:Proyecto=new Proyecto("","","","","",0);
 
  constructor(private datosProyecto:ProyectoService) { }

  ngOnInit(): void {
  }

}

