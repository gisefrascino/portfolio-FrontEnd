import { Component, OnInit, Input } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  @Input () proyecto:Proyecto=null;
 
  constructor(private datosProyecto:ProyectoService) { }

  ngOnInit(): void {
  }

}

