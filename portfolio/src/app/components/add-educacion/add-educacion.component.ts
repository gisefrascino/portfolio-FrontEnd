import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {

  titulo:string="";
  institucion:string="";
  fecha_inicio:string="";
  fecha_fin:string="";

    constructor(private router:Router, private datosEducacion:EducacionService) {
       }

  ngOnInit(): void {
  }

  onCreate():void{
    const educacion=new Educacion(this.titulo, this.institucion, this.fecha_inicio, this.fecha_fin);
    this.datosEducacion.save(educacion).subscribe(data=>{
      alert("Educacion agregada");
      this.router.navigate(['']);
    }, err =>{
      alert("falló");
      this.router.navigate(['']);
    })
  }
  closeAdd(){
    this.router.navigate(['']);
  }
  }
