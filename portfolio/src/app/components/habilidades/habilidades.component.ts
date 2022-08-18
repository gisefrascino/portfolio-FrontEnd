import { Component, OnInit } from '@angular/core';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { Habilidad } from 'src/app/models/Habilidad';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades:Habilidad[]=[];
  
  constructor(private datosHabilidad:HabilidadService) { }

  ngOnInit(): void {
    this.cargarHabilidad();
  }


    cargarHabilidad():void{
      this.datosHabilidad.lista().subscribe(
        data=>{this.habilidades=data});
      }
    }