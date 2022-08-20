import { Component, OnInit, Input, Output } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-educacion-rem',
  templateUrl: './modal-educacion-rem.component.html',
  styleUrls: ['./modal-educacion-rem.component.css']
})
export class ModalEducacionRemComponent implements OnInit {
  educacion:Educacion=null;

  constructor(private datosEducacion:EducacionService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.datosEducacion.detalle(id).subscribe(
      data=>{
        this.educacion=data;
      }, err =>{
        alert("Error al borrar educacion");
        this.router.navigate(['']);
      }
    )
  }

  onDelete(id?:number){
  if(id!=undefined){
    this.datosEducacion.deleteEducacion(id).subscribe(data=>{
    this.router.navigate(['']);
  }, err =>{
    alert("Error al borrar educacion");
    this.router.navigate(['']);
  }
  )
  }
  }
  closeModal(){
    this.router.navigate(['']);
  }
  }  
  