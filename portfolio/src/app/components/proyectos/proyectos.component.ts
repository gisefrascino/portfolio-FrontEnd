import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos:Proyecto[]=[];
  
  constructor(private datosProyecto:ProyectoService) { }

  ngOnInit(): void {
   this.datosProyecto.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.proyectos=data;
    });
  }
}

